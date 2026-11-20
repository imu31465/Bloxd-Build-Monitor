export const id = 198;
export const ids = [198];
export const modules = {
  37357: (bb, ub, hb) => {
    var Bb = hb(37363);

    function Ob(bb) {
      for (var ub, hb, Ob = 0, Gb = bb.length, Ub = 0; Ub < bb.length;) {
        for (ub = bb[Ub], hb = 0; Ub < Gb && bb[Ub] === ub;) ++Ub, ++hb;
        Ob += Bb.log2(hb) / 7 | 0, Ob += Bb.log2(ub >>> 0) / 7 | 0, Ob += 2
      }
      return Ob
    }
    ub.size = Ob, ub.encode = function(bb, ub) {
      ub || (ub = new Uint8Array(Ob(bb)));
      for (var hb, Bb, Gb = 0, Ub = ub.length, Lb = 0; Lb < bb.length;) {
        for (hb = bb[Lb], Bb = 0; Lb < bb.length && bb[Lb] === hb;) ++Lb, ++Bb;
        for (; Gb < Ub && Bb >= 128;) ub[Gb++] = 128 + (127 & Bb), Bb >>>= 7;
        if (Gb >= Ub) throw new Error("RLE buffer overflow");
        for (ub[Gb++] = Bb, hb >>>= 0; Gb < Ub && hb >= 128;) ub[Gb++] = 128 + (127 & hb), hb >>>= 7;
        if (Gb >= Ub) throw new Error("RLE buffer overflow");
        ub[Gb++] = hb
      }
      return ub
    }, ub.decode = function(bb, ub) {
      for (var hb, Bb, Ob, Gb, Ub = ub.length, Lb = bb.length, Yb = 0, Sb = 0; Sb < Lb;) {
        for (hb = 0, Bb = 0; Sb < Lb && bb[Sb] >= 128;) hb += (127 & bb[Sb++]) << Bb, Bb += 7;
        if (hb += bb[Sb++] << Bb, Sb >= Lb) throw new Error("RLE buffer underrun");
        if (Yb + hb > Ub) throw new Error("Chunk buffer overflow");
        for (Ob = 0, Bb = 0; Sb < Lb && bb[Sb] >= 128;) Ob += (127 & bb[Sb++]) << Bb, Bb += 7;
        if (Sb >= Lb) throw new Error("RLE buffer underrun");
        for (Ob += bb[Sb++] << Bb, Gb = 0; Gb < hb; ++Gb) ub[Yb++] = Ob
      }
      return ub
    }
  },
  37363: (bb, ub) => {
    function hb(bb) {
      var ub = 32;
      return (bb &= -bb) && ub--, 65535 & bb && (ub -= 16), 16711935 & bb && (ub -= 8), 252645135 & bb && (ub -= 4), 858993459 & bb && (ub -= 2), 1431655765 & bb && (ub -= 1), ub
    }
    ub.INT_BITS = 32, ub.INT_MAX = 2147483647, ub.INT_MIN = -1 << 31, ub.sign = function(bb) {
      return (bb > 0) - (bb < 0)
    }, ub.abs = function(bb) {
      var ub = bb >> 31;
      return (bb ^ ub) - ub
    }, ub.min = function(bb, ub) {
      return ub ^ (bb ^ ub) & -(bb < ub)
    }, ub.max = function(bb, ub) {
      return bb ^ (bb ^ ub) & -(bb < ub)
    }, ub.isPow2 = function(bb) {
      return !(bb & bb - 1) && !!bb
    }, ub.log2 = function(bb) {
      var ub, hb;
      return ub = (bb > 65535) << 4, ub |= hb = ((bb >>>= ub) > 255) << 3, ub |= hb = ((bb >>>= hb) > 15) << 2, (ub |= hb = ((bb >>>= hb) > 3) << 1) | (bb >>>= hb) >> 1
    }, ub.log10 = function(bb) {
      return bb >= 1e9 ? 9 : bb >= 1e8 ? 8 : bb >= 1e7 ? 7 : bb >= 1e6 ? 6 : bb >= 1e5 ? 5 : bb >= 1e4 ? 4 : bb >= 1e3 ? 3 : bb >= 100 ? 2 : bb >= 10 ? 1 : 0
    }, ub.popCount = function(bb) {
      return 16843009 * ((bb = (858993459 & (bb -= bb >>> 1 & 1431655765)) + (bb >>> 2 & 858993459)) + (bb >>> 4) & 252645135) >>> 24
    }, ub.countTrailingZeros = hb, ub.nextPow2 = function(bb) {
      return bb += 0 === bb, --bb, bb |= bb >>> 1, bb |= bb >>> 2, bb |= bb >>> 4, bb |= bb >>> 8, (bb |= bb >>> 16) + 1
    }, ub.prevPow2 = function(bb) {
      return bb |= bb >>> 1, bb |= bb >>> 2, bb |= bb >>> 4, bb |= bb >>> 8, (bb |= bb >>> 16) - (bb >>> 1)
    }, ub.parity = function(bb) {
      return bb ^= bb >>> 16, bb ^= bb >>> 8, bb ^= bb >>> 4, 27030 >>> (bb &= 15) & 1
    };
    var Bb = new Array(256);
    ! function(bb) {
      for (var ub = 0; ub < 256; ++ub) {
        var hb = ub,
          Bb = ub,
          Ob = 7;
        for (hb >>>= 1; hb; hb >>>= 1) Bb <<= 1, Bb |= 1 & hb, --Ob;
        bb[ub] = Bb << Ob & 255
      }
    }(Bb), ub.reverse = function(bb) {
      return Bb[255 & bb] << 24 | Bb[bb >>> 8 & 255] << 16 | Bb[bb >>> 16 & 255] << 8 | Bb[bb >>> 24 & 255]
    }, ub.interleave2 = function(bb, ub) {
      return (bb = 1431655765 & ((bb = 858993459 & ((bb = 252645135 & ((bb = 16711935 & ((bb &= 65535) | bb << 8)) | bb << 4)) | bb << 2)) | bb << 1)) | (ub = 1431655765 & ((ub = 858993459 & ((ub = 252645135 & ((ub = 16711935 & ((ub &= 65535) | ub << 8)) | ub << 4)) | ub << 2)) | ub << 1)) << 1
    }, ub.deinterleave2 = function(bb, ub) {
      return (bb = 65535 & ((bb = 16711935 & ((bb = 252645135 & ((bb = 858993459 & ((bb = bb >>> ub & 1431655765) | bb >>> 1)) | bb >>> 2)) | bb >>> 4)) | bb >>> 16)) << 16 >> 16
    }, ub.interleave3 = function(bb, ub, hb) {
      return bb = 1227133513 & ((bb = 3272356035 & ((bb = 251719695 & ((bb = 4278190335 & ((bb &= 1023) | bb << 16)) | bb << 8)) | bb << 4)) | bb << 2), (bb |= (ub = 1227133513 & ((ub = 3272356035 & ((ub = 251719695 & ((ub = 4278190335 & ((ub &= 1023) | ub << 16)) | ub << 8)) | ub << 4)) | ub << 2)) << 1) | (hb = 1227133513 & ((hb = 3272356035 & ((hb = 251719695 & ((hb = 4278190335 & ((hb &= 1023) | hb << 16)) | hb << 8)) | hb << 4)) | hb << 2)) << 2
    }, ub.deinterleave3 = function(bb, ub) {
      return (bb = 1023 & ((bb = 4278190335 & ((bb = 251719695 & ((bb = 3272356035 & ((bb = bb >>> ub & 1227133513) | bb >>> 2)) | bb >>> 4)) | bb >>> 8)) | bb >>> 16)) << 22 >> 22
    }, ub.nextCombination = function(bb) {
      var ub = bb | bb - 1;
      return ub + 1 | (~ub & -~ub) - 1 >>> hb(bb) + 1
    }
  },
  39263: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      emptyColumnHeight: () => Wb,
      loadHeatmapSchematic: () => Cb,
      readSchematicBlocks: () => db
    });
    var Bb = hb(3520),
      Ob = hb.n(Bb),
      Gb = hb(3507),
      Ub = hb(37357),
      Lb = hb(191),
      Yb = hb(9181);
    const Sb = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      ab = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: Sb
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: Sb
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...Sb, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      Hb = Ob().Type.forSchema({
        type: "record",
        fields: ab
      }),
      wb = Ob().Type.forSchema({
        type: "record",
        fields: [...ab, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...Sb, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: Sb
          }
        }]
      }),
      Zb = 2,
      Xb = 6,
      pb = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      ob = [150, 150, 150],
      Ab = 16,
      lb = 4096,
      Kb = Lb.e.bX,
      Wb = -2147483648;
    async function Cb(bb) {
      const ub = await db(new Uint8Array(await bb.arrayBuffer()), await async function() {
        const {
          averageColors: bb
        } = await hb.e(202).then((() => hb(33950))), ub = new Map;
        return hb => {
          var Bb, Ob, Gb, Ub, Lb;
          const Sb = ub.get(hb);
          if (void 0 !== Sb) return Sb;
          const ab = null !== (Bb = null === (Ob = Yb.i[hb]) || void 0 === Ob ? void 0 : Ob.name) && void 0 !== Bb ? Bb : "",
            Hb = null !== (Gb = bb[ab]) && void 0 !== Gb ? Gb : bb[ab.split("|")[0]],
            wb = pb[ab.split("|")[0]],
            Zb = null !== (Ub = null !== (Lb = null === Hb || void 0 === Hb ? void 0 : Hb[0]) && void 0 !== Lb ? Lb : wb) && void 0 !== Ub ? Ub : 0 === (null === Hb || void 0 === Hb ? void 0 : Hb.length) ? null : ob;
          return ub.set(hb, Zb), Zb
        }
      }());
      return {
        surface: ub.surface,
        topDown: jb(ub.columnTops)
      }
    }
    async function db(bb, ub) {
      var hb;
      if (bb.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const Bb = new DataView(bb.buffer, bb.byteOffset, bb.byteLength).getUint32(0, !0);
      if (Bb > Xb) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const Ob = (Bb >= Zb ? wb : Hb).decode(Gb.VZ.from(bb.subarray(4)), 0).value;
      if (!Ob) throw new Error("The file isn't a schematic.");
      if (0 === Ob.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const Lb = null !== (hb = Ob.pasteOffset) && void 0 !== hb ? hb : {
          x: 0,
          y: 0,
          z: 0
        },
        Yb = [Lb.x, Lb.y, Lb.z].map((bb => Math.floor(bb / Kb))),
        Sb = Ob.chunkData.map((bb => ({
          x: bb.x + Yb[0],
          y: bb.y + Yb[1],
          z: bb.z + Yb[2],
          rle: bb.rle
        }))),
        ab = new Map;
      for (const [Gb, Hb] of Sb.entries()) {
        const bb = new Uint16Array(Kb ** 3);
        Ub.decode(Hb.rle, bb), ab.set(`${Hb.x},${Hb.y},${Hb.z}`, bb), Gb % Ab === Ab - 1 && await nb()
      }
      const pb = (bb, ub, hb) => bb * Kb * Kb + ub * Kb + hb,
        ob = (bb, ub, hb) => {
          var Bb, Ob;
          const Gb = Math.floor(bb / Kb),
            Ub = Math.floor(ub / Kb),
            Lb = Math.floor(hb / Kb);
          return null !== (Bb = null === (Ob = ab.get(`${Gb},${Ub},${Lb}`)) || void 0 === Ob ? void 0 : Ob[pb(bb - Gb * Kb, ub - Ub * Kb, hb - Lb * Kb)]) && void 0 !== Bb ? Bb : 0
        },
        lb = new Map,
        Cb = [],
        db = [];
      for (const [Gb, Ub] of Sb.entries()) {
        const bb = ab.get(`${Ub.x},${Ub.y},${Ub.z}`),
          hb = [Ub.x * Kb, Ub.y * Kb, Ub.z * Kb],
          Bb = (ub, Bb, Ob) => ub < 0 || Bb < 0 || Ob < 0 || ub >= Kb || Bb >= Kb || Ob >= Kb ? ob(hb[0] + ub, hb[1] + Bb, hb[2] + Ob) : bb[pb(ub, Bb, Ob)],
          Ob = `${Ub.x},${Ub.z}`;
        let Lb = lb.get(Ob);
        void 0 === Lb && (Lb = {
          chunkX: Ub.x,
          chunkZ: Ub.z,
          heights: new Int32Array(Kb * Kb).fill(Wb),
          colours: new Uint8Array(Kb * Kb * 3)
        }, lb.set(Ob, Lb));
        for (let Gb = 0; Gb < Kb; Gb++)
          for (let Ob = 0; Ob < Kb; Ob++)
            for (let Ub = 0; Ub < Kb; Ub++) {
              const Yb = bb[pb(Gb, Ob, Ub)];
              if (0 === Yb) continue;
              const Sb = hb[0] + Gb,
                ab = hb[1] + Ob,
                Hb = hb[2] + Ub,
                wb = ub(Yb);
              if (null === wb) continue;
              const Zb = Ub * Kb + Gb;
              ab > Lb.heights[Zb] && (Lb.heights[Zb] = ab, Lb.colours.set(wb, 3 * Zb));
              !rb(Yb) && (rb(Bb(Gb + 1, Ob, Ub)) || rb(Bb(Gb - 1, Ob, Ub)) || rb(Bb(Gb, Ob + 1, Ub)) || rb(Bb(Gb, Ob - 1, Ub)) || rb(Bb(Gb, Ob, Ub + 1)) || rb(Bb(Gb, Ob, Ub - 1))) && (Cb.push(Sb, ab, Hb), db.push(wb[0], wb[1], wb[2]))
            }
        Gb % Ab === Ab - 1 && await nb()
      }
      if (0 === Cb.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: Ob.name,
        surface: {
          positions: Int32Array.from(Cb),
          colours: Uint8Array.from(db),
          count: Cb.length / 3
        },
        columnTops: [...lb.values()]
      }
    }

    function rb(bb) {
      if (0 === bb) return !0;
      const ub = Yb.i[bb];
      return void 0 === ub || ub.Pw || ub.transTex || !1 === ub.solid
    }

    function jb(bb) {
      let ub = 1 / 0,
        hb = -1 / 0,
        Bb = 1 / 0,
        Ob = -1 / 0;
      for (const {
          chunkX: Xb,
          chunkZ: pb,
          heights: ob
        }
        of bb) ob.forEach(((bb, Gb) => {
        if (bb === Wb) return;
        const Ub = Xb * Kb + Gb % Kb,
          Lb = pb * Kb + Math.floor(Gb / Kb);
        ub = Math.min(ub, Ub), hb = Math.max(hb, Ub), Bb = Math.min(Bb, Lb), Ob = Math.max(Ob, Lb)
      }));
      const Gb = hb - ub + 1,
        Ub = Ob - Bb + 1,
        Lb = Math.max(1, Math.ceil(Gb / lb), Math.ceil(Ub / lb)),
        Yb = Math.ceil(Gb / Lb),
        Sb = Math.ceil(Ub / Lb),
        ab = document.createElement("canvas");
      ab.width = Yb, ab.height = Sb;
      const Hb = ab.getContext("2d");
      if (!Hb) throw new Error("Couldn't draw the schematic from above.");
      const wb = Hb.createImageData(Yb, Sb),
        Zb = new Int32Array(Yb * Sb).fill(Wb);
      for (const {
          chunkX: Xb,
          chunkZ: pb,
          heights: ob,
          colours: Ab
        }
        of bb) ob.forEach(((bb, ub) => {
        const Ob = Xb * Kb + ub % Kb,
          Gb = pb * Kb + Math.floor(ub / Kb),
          Ub = Math.floor((Gb - Bb) / Lb) * Yb + Math.floor((hb - Ob) / Lb);
        bb === Wb || bb <= Zb[Ub] || (Zb[Ub] = bb, wb.data.set(Ab.subarray(3 * ub, 3 * ub + 3), 4 * Ub), wb.data[4 * Ub + 3] = 255)
      }));
      return Hb.putImageData(wb, 0, 0), {
        maxX: hb,
        minZ: Bb,
        width: Yb * Lb,
        depth: Sb * Lb,
        canvas: ab
      }
    }

    function nb() {
      return new Promise((bb => {
        setTimeout(bb, 0)
      }))
    }
  },
  9280: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Ob,
      g: () => Gb
    });
    var Bb = hb(9235);
    const Ob = "Air",
      Gb = Object.freeze(new Bb.d(Ob, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);