export const id = 197;
export const ids = [197];
export const modules = {
  37079: (bb, ab, Ub) => {
    var Ab = Ub(37086);

    function Mb(bb) {
      for (var ab, Ub, Mb = 0, Tb = bb.length, Eb = 0; Eb < bb.length;) {
        for (ab = bb[Eb], Ub = 0; Eb < Tb && bb[Eb] === ab;) ++Eb, ++Ub;
        Mb += Ab.log2(Ub) / 7 | 0, Mb += Ab.log2(ab >>> 0) / 7 | 0, Mb += 2
      }
      return Mb
    }
    ab.size = Mb, ab.encode = function(bb, ab) {
      ab || (ab = new Uint8Array(Mb(bb)));
      for (var Ub, Ab, Tb = 0, Eb = ab.length, Yb = 0; Yb < bb.length;) {
        for (Ub = bb[Yb], Ab = 0; Yb < bb.length && bb[Yb] === Ub;) ++Yb, ++Ab;
        for (; Tb < Eb && Ab >= 128;) ab[Tb++] = 128 + (127 & Ab), Ab >>>= 7;
        if (Tb >= Eb) throw new Error("RLE buffer overflow");
        for (ab[Tb++] = Ab, Ub >>>= 0; Tb < Eb && Ub >= 128;) ab[Tb++] = 128 + (127 & Ub), Ub >>>= 7;
        if (Tb >= Eb) throw new Error("RLE buffer overflow");
        ab[Tb++] = Ub
      }
      return ab
    }, ab.decode = function(bb, ab) {
      for (var Ub, Ab, Mb, Tb, Eb = ab.length, Yb = bb.length, Bb = 0, eb = 0; eb < Yb;) {
        for (Ub = 0, Ab = 0; eb < Yb && bb[eb] >= 128;) Ub += (127 & bb[eb++]) << Ab, Ab += 7;
        if (Ub += bb[eb++] << Ab, eb >= Yb) throw new Error("RLE buffer underrun");
        if (Bb + Ub > Eb) throw new Error("Chunk buffer overflow");
        for (Mb = 0, Ab = 0; eb < Yb && bb[eb] >= 128;) Mb += (127 & bb[eb++]) << Ab, Ab += 7;
        if (eb >= Yb) throw new Error("RLE buffer underrun");
        for (Mb += bb[eb++] << Ab, Tb = 0; Tb < Ub; ++Tb) ab[Bb++] = Mb
      }
      return ab
    }
  },
  37086: (bb, ab) => {
    function Ub(bb) {
      var ab = 32;
      return (bb &= -bb) && ab--, 65535 & bb && (ab -= 16), 16711935 & bb && (ab -= 8), 252645135 & bb && (ab -= 4), 858993459 & bb && (ab -= 2), 1431655765 & bb && (ab -= 1), ab
    }
    ab.INT_BITS = 32, ab.INT_MAX = 2147483647, ab.INT_MIN = -1 << 31, ab.sign = function(bb) {
      return (bb > 0) - (bb < 0)
    }, ab.abs = function(bb) {
      var ab = bb >> 31;
      return (bb ^ ab) - ab
    }, ab.min = function(bb, ab) {
      return ab ^ (bb ^ ab) & -(bb < ab)
    }, ab.max = function(bb, ab) {
      return bb ^ (bb ^ ab) & -(bb < ab)
    }, ab.isPow2 = function(bb) {
      return !(bb & bb - 1) && !!bb
    }, ab.log2 = function(bb) {
      var ab, Ub;
      return ab = (bb > 65535) << 4, ab |= Ub = ((bb >>>= ab) > 255) << 3, ab |= Ub = ((bb >>>= Ub) > 15) << 2, (ab |= Ub = ((bb >>>= Ub) > 3) << 1) | (bb >>>= Ub) >> 1
    }, ab.log10 = function(bb) {
      return bb >= 1e9 ? 9 : bb >= 1e8 ? 8 : bb >= 1e7 ? 7 : bb >= 1e6 ? 6 : bb >= 1e5 ? 5 : bb >= 1e4 ? 4 : bb >= 1e3 ? 3 : bb >= 100 ? 2 : bb >= 10 ? 1 : 0
    }, ab.popCount = function(bb) {
      return 16843009 * ((bb = (858993459 & (bb -= bb >>> 1 & 1431655765)) + (bb >>> 2 & 858993459)) + (bb >>> 4) & 252645135) >>> 24
    }, ab.countTrailingZeros = Ub, ab.nextPow2 = function(bb) {
      return bb += 0 === bb, --bb, bb |= bb >>> 1, bb |= bb >>> 2, bb |= bb >>> 4, bb |= bb >>> 8, (bb |= bb >>> 16) + 1
    }, ab.prevPow2 = function(bb) {
      return bb |= bb >>> 1, bb |= bb >>> 2, bb |= bb >>> 4, bb |= bb >>> 8, (bb |= bb >>> 16) - (bb >>> 1)
    }, ab.parity = function(bb) {
      return bb ^= bb >>> 16, bb ^= bb >>> 8, bb ^= bb >>> 4, 27030 >>> (bb &= 15) & 1
    };
    var Ab = new Array(256);
    ! function(bb) {
      for (var ab = 0; ab < 256; ++ab) {
        var Ub = ab,
          Ab = ab,
          Mb = 7;
        for (Ub >>>= 1; Ub; Ub >>>= 1) Ab <<= 1, Ab |= 1 & Ub, --Mb;
        bb[ab] = Ab << Mb & 255
      }
    }(Ab), ab.reverse = function(bb) {
      return Ab[255 & bb] << 24 | Ab[bb >>> 8 & 255] << 16 | Ab[bb >>> 16 & 255] << 8 | Ab[bb >>> 24 & 255]
    }, ab.interleave2 = function(bb, ab) {
      return (bb = 1431655765 & ((bb = 858993459 & ((bb = 252645135 & ((bb = 16711935 & ((bb &= 65535) | bb << 8)) | bb << 4)) | bb << 2)) | bb << 1)) | (ab = 1431655765 & ((ab = 858993459 & ((ab = 252645135 & ((ab = 16711935 & ((ab &= 65535) | ab << 8)) | ab << 4)) | ab << 2)) | ab << 1)) << 1
    }, ab.deinterleave2 = function(bb, ab) {
      return (bb = 65535 & ((bb = 16711935 & ((bb = 252645135 & ((bb = 858993459 & ((bb = bb >>> ab & 1431655765) | bb >>> 1)) | bb >>> 2)) | bb >>> 4)) | bb >>> 16)) << 16 >> 16
    }, ab.interleave3 = function(bb, ab, Ub) {
      return bb = 1227133513 & ((bb = 3272356035 & ((bb = 251719695 & ((bb = 4278190335 & ((bb &= 1023) | bb << 16)) | bb << 8)) | bb << 4)) | bb << 2), (bb |= (ab = 1227133513 & ((ab = 3272356035 & ((ab = 251719695 & ((ab = 4278190335 & ((ab &= 1023) | ab << 16)) | ab << 8)) | ab << 4)) | ab << 2)) << 1) | (Ub = 1227133513 & ((Ub = 3272356035 & ((Ub = 251719695 & ((Ub = 4278190335 & ((Ub &= 1023) | Ub << 16)) | Ub << 8)) | Ub << 4)) | Ub << 2)) << 2
    }, ab.deinterleave3 = function(bb, ab) {
      return (bb = 1023 & ((bb = 4278190335 & ((bb = 251719695 & ((bb = 3272356035 & ((bb = bb >>> ab & 1227133513) | bb >>> 2)) | bb >>> 4)) | bb >>> 8)) | bb >>> 16)) << 22 >> 22
    }, ab.nextCombination = function(bb) {
      var ab = bb | bb - 1;
      return ab + 1 | (~ab & -~ab) - 1 >>> Ub(bb) + 1
    }
  },
  38888: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      emptyColumnHeight: () => zb,
      loadHeatmapSchematic: () => xb,
      readSchematicBlocks: () => ib
    });
    var Ab = Ub(3439),
      Mb = Ub.n(Ab),
      Tb = Ub(3415),
      Eb = Ub(37079),
      Yb = Ub(205),
      Bb = Ub(9007);
    const eb = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      vb = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: eb
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: eb
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...eb, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      Lb = Mb().Type.forSchema({
        type: "record",
        fields: vb
      }),
      Pb = Mb().Type.forSchema({
        type: "record",
        fields: [...vb, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...eb, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: eb
          }
        }]
      }),
      Xb = 2,
      jb = 6,
      Rb = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      kb = [150, 150, 150],
      yb = 16,
      Zb = 4096,
      Db = Yb.c.Mj,
      zb = -2147483648;
    async function xb(bb) {
      const ab = await ib(new Uint8Array(await bb.arrayBuffer()), await async function() {
        const {
          averageColors: bb
        } = await Ub.e(201).then((() => Ub(33702))), ab = new Map;
        return Ub => {
          var Ab, Mb, Tb, Eb, Yb;
          const eb = ab.get(Ub);
          if (void 0 !== eb) return eb;
          const vb = null !== (Ab = null === (Mb = Bb.h[Ub]) || void 0 === Mb ? void 0 : Mb.name) && void 0 !== Ab ? Ab : "",
            Lb = null !== (Tb = bb[vb]) && void 0 !== Tb ? Tb : bb[vb.split("|")[0]],
            Pb = Rb[vb.split("|")[0]],
            Xb = null !== (Eb = null !== (Yb = null === Lb || void 0 === Lb ? void 0 : Lb[0]) && void 0 !== Yb ? Yb : Pb) && void 0 !== Eb ? Eb : 0 === (null === Lb || void 0 === Lb ? void 0 : Lb.length) ? null : kb;
          return ab.set(Ub, Xb), Xb
        }
      }());
      return {
        surface: ab.surface,
        topDown: mb(ab.columnTops)
      }
    }
    async function ib(bb, ab) {
      var Ub;
      if (bb.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const Ab = new DataView(bb.buffer, bb.byteOffset, bb.byteLength).getUint32(0, !0);
      if (Ab > jb) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const Mb = (Ab >= Xb ? Pb : Lb).decode(Tb.OX.from(bb.subarray(4)), 0).value;
      if (!Mb) throw new Error("The file isn't a schematic.");
      if (0 === Mb.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const Yb = null !== (Ub = Mb.pasteOffset) && void 0 !== Ub ? Ub : {
          x: 0,
          y: 0,
          z: 0
        },
        Bb = [Yb.x, Yb.y, Yb.z].map((bb => Math.floor(bb / Db))),
        eb = Mb.chunkData.map((bb => ({
          x: bb.x + Bb[0],
          y: bb.y + Bb[1],
          z: bb.z + Bb[2],
          rle: bb.rle
        }))),
        vb = new Map;
      for (const [Tb, Lb] of eb.entries()) {
        const bb = new Uint16Array(Db ** 3);
        Eb.decode(Lb.rle, bb), vb.set(`${Lb.x},${Lb.y},${Lb.z}`, bb), Tb % yb === yb - 1 && await pb()
      }
      const Rb = (bb, ab, Ub) => bb * Db * Db + ab * Db + Ub,
        kb = (bb, ab, Ub) => {
          var Ab, Mb;
          const Tb = Math.floor(bb / Db),
            Eb = Math.floor(ab / Db),
            Yb = Math.floor(Ub / Db);
          return null !== (Ab = null === (Mb = vb.get(`${Tb},${Eb},${Yb}`)) || void 0 === Mb ? void 0 : Mb[Rb(bb - Tb * Db, ab - Eb * Db, Ub - Yb * Db)]) && void 0 !== Ab ? Ab : 0
        },
        Zb = new Map,
        xb = [],
        ib = [];
      for (const [Tb, Eb] of eb.entries()) {
        const bb = vb.get(`${Eb.x},${Eb.y},${Eb.z}`),
          Ub = [Eb.x * Db, Eb.y * Db, Eb.z * Db],
          Ab = (ab, Ab, Mb) => ab < 0 || Ab < 0 || Mb < 0 || ab >= Db || Ab >= Db || Mb >= Db ? kb(Ub[0] + ab, Ub[1] + Ab, Ub[2] + Mb) : bb[Rb(ab, Ab, Mb)],
          Mb = `${Eb.x},${Eb.z}`;
        let Yb = Zb.get(Mb);
        void 0 === Yb && (Yb = {
          chunkX: Eb.x,
          chunkZ: Eb.z,
          heights: new Int32Array(Db * Db).fill(zb),
          colours: new Uint8Array(Db * Db * 3)
        }, Zb.set(Mb, Yb));
        for (let Tb = 0; Tb < Db; Tb++)
          for (let Mb = 0; Mb < Db; Mb++)
            for (let Eb = 0; Eb < Db; Eb++) {
              const Bb = bb[Rb(Tb, Mb, Eb)];
              if (0 === Bb) continue;
              const eb = Ub[0] + Tb,
                vb = Ub[1] + Mb,
                Lb = Ub[2] + Eb,
                Pb = ab(Bb);
              if (null === Pb) continue;
              const Xb = Eb * Db + Tb;
              vb > Yb.heights[Xb] && (Yb.heights[Xb] = vb, Yb.colours.set(Pb, 3 * Xb));
              !fb(Bb) && (fb(Ab(Tb + 1, Mb, Eb)) || fb(Ab(Tb - 1, Mb, Eb)) || fb(Ab(Tb, Mb + 1, Eb)) || fb(Ab(Tb, Mb - 1, Eb)) || fb(Ab(Tb, Mb, Eb + 1)) || fb(Ab(Tb, Mb, Eb - 1))) && (xb.push(eb, vb, Lb), ib.push(Pb[0], Pb[1], Pb[2]))
            }
        Tb % yb === yb - 1 && await pb()
      }
      if (0 === xb.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: Mb.name,
        surface: {
          positions: Int32Array.from(xb),
          colours: Uint8Array.from(ib),
          count: xb.length / 3
        },
        columnTops: [...Zb.values()]
      }
    }

    function fb(bb) {
      if (0 === bb) return !0;
      const ab = Bb.h[bb];
      return void 0 === ab || ab.CP || ab.transTex || !1 === ab.solid
    }

    function mb(bb) {
      let ab = 1 / 0,
        Ub = -1 / 0,
        Ab = 1 / 0,
        Mb = -1 / 0;
      for (const {
          chunkX: jb,
          chunkZ: Rb,
          heights: kb
        }
        of bb) kb.forEach(((bb, Tb) => {
        if (bb === zb) return;
        const Eb = jb * Db + Tb % Db,
          Yb = Rb * Db + Math.floor(Tb / Db);
        ab = Math.min(ab, Eb), Ub = Math.max(Ub, Eb), Ab = Math.min(Ab, Yb), Mb = Math.max(Mb, Yb)
      }));
      const Tb = Ub - ab + 1,
        Eb = Mb - Ab + 1,
        Yb = Math.max(1, Math.ceil(Tb / Zb), Math.ceil(Eb / Zb)),
        Bb = Math.ceil(Tb / Yb),
        eb = Math.ceil(Eb / Yb),
        vb = document.createElement("canvas");
      vb.width = Bb, vb.height = eb;
      const Lb = vb.getContext("2d");
      if (!Lb) throw new Error("Couldn't draw the schematic from above.");
      const Pb = Lb.createImageData(Bb, eb),
        Xb = new Int32Array(Bb * eb).fill(zb);
      for (const {
          chunkX: jb,
          chunkZ: Rb,
          heights: kb,
          colours: yb
        }
        of bb) kb.forEach(((bb, ab) => {
        const Mb = jb * Db + ab % Db,
          Tb = Rb * Db + Math.floor(ab / Db),
          Eb = Math.floor((Tb - Ab) / Yb) * Bb + Math.floor((Ub - Mb) / Yb);
        bb === zb || bb <= Xb[Eb] || (Xb[Eb] = bb, Pb.data.set(yb.subarray(3 * ab, 3 * ab + 3), 4 * Eb), Pb.data[4 * Eb + 3] = 255)
      }));
      return Lb.putImageData(Pb, 0, 0), {
        maxX: Ub,
        minZ: Ab,
        width: Bb * Yb,
        depth: eb * Yb,
        canvas: vb
      }
    }

    function pb() {
      return new Promise((bb => {
        setTimeout(bb, 0)
      }))
    }
  },
  9094: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Mb,
      f: () => Tb
    });
    var Ab = Ub(9043);
    const Mb = "Air",
      Tb = Object.freeze(new Ab.h(Mb, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);