export const id = 271;
export const ids = [271];
export const modules = {
  38961: (bb, wb, Mb) => {
    var eb = Mb(38967);

    function Hb(bb) {
      for (var wb, Mb, Hb = 0, pb = bb.length, Vb = 0; Vb < bb.length;) {
        for (wb = bb[Vb], Mb = 0; Vb < pb && bb[Vb] === wb;) ++Vb, ++Mb;
        Hb += eb.log2(Mb) / 7 | 0, Hb += eb.log2(wb >>> 0) / 7 | 0, Hb += 2
      }
      return Hb
    }
    wb.size = Hb, wb.encode = function(bb, wb) {
      wb || (wb = new Uint8Array(Hb(bb)));
      for (var Mb, eb, pb = 0, Vb = wb.length, gb = 0; gb < bb.length;) {
        for (Mb = bb[gb], eb = 0; gb < bb.length && bb[gb] === Mb;) ++gb, ++eb;
        for (; pb < Vb && eb >= 128;) wb[pb++] = 128 + (127 & eb), eb >>>= 7;
        if (pb >= Vb) throw new Error("RLE buffer overflow");
        for (wb[pb++] = eb, Mb >>>= 0; pb < Vb && Mb >= 128;) wb[pb++] = 128 + (127 & Mb), Mb >>>= 7;
        if (pb >= Vb) throw new Error("RLE buffer overflow");
        wb[pb++] = Mb
      }
      return wb
    }, wb.decode = function(bb, wb) {
      for (var Mb, eb, Hb, pb, Vb = wb.length, gb = bb.length, lb = 0, Lb = 0; Lb < gb;) {
        for (Mb = 0, eb = 0; Lb < gb && bb[Lb] >= 128;) Mb += (127 & bb[Lb++]) << eb, eb += 7;
        if (Mb += bb[Lb++] << eb, Lb >= gb) throw new Error("RLE buffer underrun");
        if (lb + Mb > Vb) throw new Error("Chunk buffer overflow");
        for (Hb = 0, eb = 0; Lb < gb && bb[Lb] >= 128;) Hb += (127 & bb[Lb++]) << eb, eb += 7;
        if (Lb >= gb) throw new Error("RLE buffer underrun");
        for (Hb += bb[Lb++] << eb, pb = 0; pb < Mb; ++pb) wb[lb++] = Hb
      }
      return wb
    }
  },
  38967: (bb, wb) => {
    function Mb(bb) {
      var wb = 32;
      return (bb &= -bb) && wb--, 65535 & bb && (wb -= 16), 16711935 & bb && (wb -= 8), 252645135 & bb && (wb -= 4), 858993459 & bb && (wb -= 2), 1431655765 & bb && (wb -= 1), wb
    }
    wb.INT_BITS = 32, wb.INT_MAX = 2147483647, wb.INT_MIN = -1 << 31, wb.sign = function(bb) {
      return (bb > 0) - (bb < 0)
    }, wb.abs = function(bb) {
      var wb = bb >> 31;
      return (bb ^ wb) - wb
    }, wb.min = function(bb, wb) {
      return wb ^ (bb ^ wb) & -(bb < wb)
    }, wb.max = function(bb, wb) {
      return bb ^ (bb ^ wb) & -(bb < wb)
    }, wb.isPow2 = function(bb) {
      return !(bb & bb - 1) && !!bb
    }, wb.log2 = function(bb) {
      var wb, Mb;
      return wb = (bb > 65535) << 4, wb |= Mb = ((bb >>>= wb) > 255) << 3, wb |= Mb = ((bb >>>= Mb) > 15) << 2, (wb |= Mb = ((bb >>>= Mb) > 3) << 1) | (bb >>>= Mb) >> 1
    }, wb.log10 = function(bb) {
      return bb >= 1e9 ? 9 : bb >= 1e8 ? 8 : bb >= 1e7 ? 7 : bb >= 1e6 ? 6 : bb >= 1e5 ? 5 : bb >= 1e4 ? 4 : bb >= 1e3 ? 3 : bb >= 100 ? 2 : bb >= 10 ? 1 : 0
    }, wb.popCount = function(bb) {
      return 16843009 * ((bb = (858993459 & (bb -= bb >>> 1 & 1431655765)) + (bb >>> 2 & 858993459)) + (bb >>> 4) & 252645135) >>> 24
    }, wb.countTrailingZeros = Mb, wb.nextPow2 = function(bb) {
      return bb += 0 === bb, --bb, bb |= bb >>> 1, bb |= bb >>> 2, bb |= bb >>> 4, bb |= bb >>> 8, (bb |= bb >>> 16) + 1
    }, wb.prevPow2 = function(bb) {
      return bb |= bb >>> 1, bb |= bb >>> 2, bb |= bb >>> 4, bb |= bb >>> 8, (bb |= bb >>> 16) - (bb >>> 1)
    }, wb.parity = function(bb) {
      return bb ^= bb >>> 16, bb ^= bb >>> 8, bb ^= bb >>> 4, 27030 >>> (bb &= 15) & 1
    };
    var eb = new Array(256);
    ! function(bb) {
      for (var wb = 0; wb < 256; ++wb) {
        var Mb = wb,
          eb = wb,
          Hb = 7;
        for (Mb >>>= 1; Mb; Mb >>>= 1) eb <<= 1, eb |= 1 & Mb, --Hb;
        bb[wb] = eb << Hb & 255
      }
    }(eb), wb.reverse = function(bb) {
      return eb[255 & bb] << 24 | eb[bb >>> 8 & 255] << 16 | eb[bb >>> 16 & 255] << 8 | eb[bb >>> 24 & 255]
    }, wb.interleave2 = function(bb, wb) {
      return (bb = 1431655765 & ((bb = 858993459 & ((bb = 252645135 & ((bb = 16711935 & ((bb &= 65535) | bb << 8)) | bb << 4)) | bb << 2)) | bb << 1)) | (wb = 1431655765 & ((wb = 858993459 & ((wb = 252645135 & ((wb = 16711935 & ((wb &= 65535) | wb << 8)) | wb << 4)) | wb << 2)) | wb << 1)) << 1
    }, wb.deinterleave2 = function(bb, wb) {
      return (bb = 65535 & ((bb = 16711935 & ((bb = 252645135 & ((bb = 858993459 & ((bb = bb >>> wb & 1431655765) | bb >>> 1)) | bb >>> 2)) | bb >>> 4)) | bb >>> 16)) << 16 >> 16
    }, wb.interleave3 = function(bb, wb, Mb) {
      return bb = 1227133513 & ((bb = 3272356035 & ((bb = 251719695 & ((bb = 4278190335 & ((bb &= 1023) | bb << 16)) | bb << 8)) | bb << 4)) | bb << 2), (bb |= (wb = 1227133513 & ((wb = 3272356035 & ((wb = 251719695 & ((wb = 4278190335 & ((wb &= 1023) | wb << 16)) | wb << 8)) | wb << 4)) | wb << 2)) << 1) | (Mb = 1227133513 & ((Mb = 3272356035 & ((Mb = 251719695 & ((Mb = 4278190335 & ((Mb &= 1023) | Mb << 16)) | Mb << 8)) | Mb << 4)) | Mb << 2)) << 2
    }, wb.deinterleave3 = function(bb, wb) {
      return (bb = 1023 & ((bb = 4278190335 & ((bb = 251719695 & ((bb = 3272356035 & ((bb = bb >>> wb & 1227133513) | bb >>> 2)) | bb >>> 4)) | bb >>> 8)) | bb >>> 16)) << 22 >> 22
    }, wb.nextCombination = function(bb) {
      var wb = bb | bb - 1;
      return wb + 1 | (~wb & -~wb) - 1 >>> Mb(bb) + 1
    }
  },
  41486: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      emptyColumnHeight: () => mb,
      loadHeatmapSchematic: () => hb,
      readSchematicBlocks: () => zb
    });
    var eb = Mb(2553),
      Hb = Mb.n(eb),
      pb = Mb(2521),
      Vb = Mb(38961),
      gb = Mb(225),
      lb = Mb(5868),
      Lb = Mb(40865);
    const Ib = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      Ob = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: Ib
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: Ib
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...Ib, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      Ub = Hb().Type.forSchema({
        type: "record",
        fields: Ob
      }),
      tb = Hb().Type.forSchema({
        type: "record",
        fields: [...Ob, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...Ib, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: Ib
          }
        }]
      }),
      Cb = 2,
      Eb = 6,
      Fb = 16,
      Bb = 4096,
      sb = gb.e.gO,
      mb = -2147483648;
    async function hb(bb) {
      const wb = await (0, Lb.b)(),
        Mb = await zb(new Uint8Array(await bb.arrayBuffer()), (bb => wb.get(bb)));
      return {
        surface: Mb.surface,
        topDown: xb(Mb.columnTops)
      }
    }
    async function zb(bb, wb) {
      var Mb;
      if (bb.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const eb = new DataView(bb.buffer, bb.byteOffset, bb.byteLength).getUint32(0, !0);
      if (eb > Eb) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const Hb = (eb >= Cb ? tb : Ub).decode(pb.uI.from(bb.subarray(4)), 0).value;
      if (!Hb) throw new Error("The file isn't a schematic.");
      if (0 === Hb.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const gb = null !== (Mb = Hb.pasteOffset) && void 0 !== Mb ? Mb : {
          x: 0,
          y: 0,
          z: 0
        },
        lb = [gb.x, gb.y, gb.z].map((bb => Math.floor(bb / sb))),
        Lb = Hb.chunkData.map((bb => ({
          x: bb.x + lb[0],
          y: bb.y + lb[1],
          z: bb.z + lb[2],
          rle: bb.rle
        }))),
        Ib = new Map;
      for (const [pb, Ub] of Lb.entries()) {
        const bb = new Uint16Array(sb ** 3);
        Vb.decode(Ub.rle, bb), Ib.set(`${Ub.x},${Ub.y},${Ub.z}`, bb), pb % Fb === Fb - 1 && await jb()
      }
      const Ob = (bb, wb, Mb) => bb * sb * sb + wb * sb + Mb,
        Bb = (bb, wb, Mb) => {
          var eb, Hb;
          const pb = Math.floor(bb / sb),
            Vb = Math.floor(wb / sb),
            gb = Math.floor(Mb / sb);
          return null !== (eb = null === (Hb = Ib.get(`${pb},${Vb},${gb}`)) || void 0 === Hb ? void 0 : Hb[Ob(bb - pb * sb, wb - Vb * sb, Mb - gb * sb)]) && void 0 !== eb ? eb : 0
        },
        hb = new Map,
        zb = [],
        xb = [];
      for (const [pb, Vb] of Lb.entries()) {
        const bb = Ib.get(`${Vb.x},${Vb.y},${Vb.z}`),
          Mb = [Vb.x * sb, Vb.y * sb, Vb.z * sb],
          eb = (wb, eb, Hb) => wb < 0 || eb < 0 || Hb < 0 || wb >= sb || eb >= sb || Hb >= sb ? Bb(Mb[0] + wb, Mb[1] + eb, Mb[2] + Hb) : bb[Ob(wb, eb, Hb)],
          Hb = `${Vb.x},${Vb.z}`;
        let gb = hb.get(Hb);
        void 0 === gb && (gb = {
          chunkX: Vb.x,
          chunkZ: Vb.z,
          heights: new Int32Array(sb * sb).fill(mb),
          colours: new Uint8Array(sb * sb * 3)
        }, hb.set(Hb, gb));
        for (let pb = 0; pb < sb; pb++)
          for (let Hb = 0; Hb < sb; Hb++)
            for (let Vb = 0; Vb < sb; Vb++) {
              const lb = bb[Ob(pb, Hb, Vb)];
              if (0 === lb) continue;
              const Lb = Mb[0] + pb,
                Ib = Mb[1] + Hb,
                Ub = Mb[2] + Vb,
                tb = wb(lb);
              if (null === tb) continue;
              const Cb = Vb * sb + pb;
              Ib > gb.heights[Cb] && (gb.heights[Cb] = Ib, gb.colours.set(tb, 3 * Cb));
              !Xb(lb) && (Xb(eb(pb + 1, Hb, Vb)) || Xb(eb(pb - 1, Hb, Vb)) || Xb(eb(pb, Hb + 1, Vb)) || Xb(eb(pb, Hb - 1, Vb)) || Xb(eb(pb, Hb, Vb + 1)) || Xb(eb(pb, Hb, Vb - 1))) && (zb.push(Lb, Ib, Ub), xb.push(tb[0], tb[1], tb[2]))
            }
        pb % Fb === Fb - 1 && await jb()
      }
      if (0 === zb.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: Hb.name,
        surface: {
          positions: Int32Array.from(zb),
          colours: Uint8Array.from(xb),
          count: zb.length / 3
        },
        columnTops: [...hb.values()]
      }
    }

    function Xb(bb) {
      if (0 === bb) return !0;
      const wb = lb.g[bb];
      return void 0 === wb || wb.ht || wb.transTex || !1 === wb.solid
    }

    function xb(bb) {
      let wb = 1 / 0,
        Mb = -1 / 0,
        eb = 1 / 0,
        Hb = -1 / 0;
      for (const {
          chunkX: Cb,
          chunkZ: Eb,
          heights: Fb
        }
        of bb) Fb.forEach(((bb, pb) => {
        if (bb === mb) return;
        const Vb = Cb * sb + pb % sb,
          gb = Eb * sb + Math.floor(pb / sb);
        wb = Math.min(wb, Vb), Mb = Math.max(Mb, Vb), eb = Math.min(eb, gb), Hb = Math.max(Hb, gb)
      }));
      const pb = Mb - wb + 1,
        Vb = Hb - eb + 1,
        gb = Math.max(1, Math.ceil(pb / Bb), Math.ceil(Vb / Bb)),
        lb = Math.ceil(pb / gb),
        Lb = Math.ceil(Vb / gb),
        Ib = document.createElement("canvas");
      Ib.width = lb, Ib.height = Lb;
      const Ob = Ib.getContext("2d");
      if (!Ob) throw new Error("Couldn't draw the schematic from above.");
      const Ub = Ob.createImageData(lb, Lb),
        tb = new Int32Array(lb * Lb).fill(mb);
      for (const {
          chunkX: Cb,
          chunkZ: Eb,
          heights: Fb,
          colours: Bb
        }
        of bb) Fb.forEach(((bb, wb) => {
        const Hb = Cb * sb + wb % sb,
          pb = Eb * sb + Math.floor(wb / sb),
          Vb = Math.floor((pb - eb) / gb) * lb + Math.floor((Mb - Hb) / gb);
        bb === mb || bb <= tb[Vb] || (tb[Vb] = bb, Ub.data.set(Bb.subarray(3 * wb, 3 * wb + 3), 4 * Vb), Ub.data[4 * Vb + 3] = 255)
      }));
      return Ob.putImageData(Ub, 0, 0), {
        maxX: Mb,
        minZ: eb,
        width: lb * gb,
        depth: Lb * gb,
        canvas: Ib
      }
    }

    function jb() {
      return new Promise((bb => {
        setTimeout(bb, 0)
      }))
    }
  },
  40865: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb
    });
    var eb = Mb(40872);
    async function Hb() {
      const {
        averageColors: bb
      } = await Mb.e(235).then((() => Mb(35425)));
      return new eb.b(bb)
    }
  },
  40872: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => gb,
      f: () => Vb
    });
    var eb = Mb(5868);
    const Hb = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      pb = [150, 150, 150],
      Vb = -2147483648;
    class gb {
      constructor(bb) {
        this.averages = bb, this.byId = new Map
      }
      get(bb) {
        var wb, Mb, Vb, gb, lb;
        const Lb = this.byId.get(bb);
        if (void 0 !== Lb) return Lb;
        const Ib = null !== (wb = null === (Mb = eb.g[bb]) || void 0 === Mb ? void 0 : Mb.name) && void 0 !== wb ? wb : "",
          Ob = Ib.split("|")[0],
          Ub = null !== (Vb = this.averages[Ib]) && void 0 !== Vb ? Vb : this.averages[Ob],
          tb = null !== (gb = null !== (lb = null === Ub || void 0 === Ub ? void 0 : Ub[0]) && void 0 !== lb ? lb : Hb[Ob]) && void 0 !== gb ? gb : 0 === (null === Ub || void 0 === Ub ? void 0 : Ub.length) ? null : pb;
        return this.byId.set(bb, tb), tb
      }
      getDrawnIds() {
        const bb = new Uint8Array(65536);
        for (let wb = 1; wb < 65536; wb++) void 0 !== eb.g[wb] && null !== this.get(wb) && (bb[wb] = 1);
        return bb
      }
      drawPixel(bb, wb, Mb, eb, Hb, pb) {
        const gb = function(bb, wb, Mb) {
            const eb = bb - wb + (bb - Mb);
            return Math.max(.65, Math.min(1.2, .97 + .055 * eb))
          }(eb, Hb === Vb ? eb : Hb, pb === Vb ? eb : pb),
          lb = this.get(Mb);
        bb[wb] = lb[0] * gb, bb[wb + 1] = lb[1] * gb, bb[wb + 2] = lb[2] * gb, bb[wb + 3] = 255
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);