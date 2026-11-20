export const id = 198;
export const ids = [198];
export const modules = {
  37725: (qq, Eq, gq) => {
    var Yq = gq(37734);

    function lq(qq) {
      for (var Eq, gq, lq = 0, Oq = qq.length, mq = 0; mq < qq.length;) {
        for (Eq = qq[mq], gq = 0; mq < Oq && qq[mq] === Eq;) ++mq, ++gq;
        lq += Yq.log2(gq) / 7 | 0, lq += Yq.log2(Eq >>> 0) / 7 | 0, lq += 2
      }
      return lq
    }
    Eq.size = lq, Eq.encode = function(qq, Eq) {
      Eq || (Eq = new Uint8Array(lq(qq)));
      for (var gq, Yq, Oq = 0, mq = Eq.length, xq = 0; xq < qq.length;) {
        for (gq = qq[xq], Yq = 0; xq < qq.length && qq[xq] === gq;) ++xq, ++Yq;
        for (; Oq < mq && Yq >= 128;) Eq[Oq++] = 128 + (127 & Yq), Yq >>>= 7;
        if (Oq >= mq) throw new Error("RLE buffer overflow");
        for (Eq[Oq++] = Yq, gq >>>= 0; Oq < mq && gq >= 128;) Eq[Oq++] = 128 + (127 & gq), gq >>>= 7;
        if (Oq >= mq) throw new Error("RLE buffer overflow");
        Eq[Oq++] = gq
      }
      return Eq
    }, Eq.decode = function(qq, Eq) {
      for (var gq, Yq, lq, Oq, mq = Eq.length, xq = qq.length, Aq = 0, cq = 0; cq < xq;) {
        for (gq = 0, Yq = 0; cq < xq && qq[cq] >= 128;) gq += (127 & qq[cq++]) << Yq, Yq += 7;
        if (gq += qq[cq++] << Yq, cq >= xq) throw new Error("RLE buffer underrun");
        if (Aq + gq > mq) throw new Error("Chunk buffer overflow");
        for (lq = 0, Yq = 0; cq < xq && qq[cq] >= 128;) lq += (127 & qq[cq++]) << Yq, Yq += 7;
        if (cq >= xq) throw new Error("RLE buffer underrun");
        for (lq += qq[cq++] << Yq, Oq = 0; Oq < gq; ++Oq) Eq[Aq++] = lq
      }
      return Eq
    }
  },
  37734: (qq, Eq) => {
    function gq(qq) {
      var Eq = 32;
      return (qq &= -qq) && Eq--, 65535 & qq && (Eq -= 16), 16711935 & qq && (Eq -= 8), 252645135 & qq && (Eq -= 4), 858993459 & qq && (Eq -= 2), 1431655765 & qq && (Eq -= 1), Eq
    }
    Eq.INT_BITS = 32, Eq.INT_MAX = 2147483647, Eq.INT_MIN = -1 << 31, Eq.sign = function(qq) {
      return (qq > 0) - (qq < 0)
    }, Eq.abs = function(qq) {
      var Eq = qq >> 31;
      return (qq ^ Eq) - Eq
    }, Eq.min = function(qq, Eq) {
      return Eq ^ (qq ^ Eq) & -(qq < Eq)
    }, Eq.max = function(qq, Eq) {
      return qq ^ (qq ^ Eq) & -(qq < Eq)
    }, Eq.isPow2 = function(qq) {
      return !(qq & qq - 1) && !!qq
    }, Eq.log2 = function(qq) {
      var Eq, gq;
      return Eq = (qq > 65535) << 4, Eq |= gq = ((qq >>>= Eq) > 255) << 3, Eq |= gq = ((qq >>>= gq) > 15) << 2, (Eq |= gq = ((qq >>>= gq) > 3) << 1) | (qq >>>= gq) >> 1
    }, Eq.log10 = function(qq) {
      return qq >= 1e9 ? 9 : qq >= 1e8 ? 8 : qq >= 1e7 ? 7 : qq >= 1e6 ? 6 : qq >= 1e5 ? 5 : qq >= 1e4 ? 4 : qq >= 1e3 ? 3 : qq >= 100 ? 2 : qq >= 10 ? 1 : 0
    }, Eq.popCount = function(qq) {
      return 16843009 * ((qq = (858993459 & (qq -= qq >>> 1 & 1431655765)) + (qq >>> 2 & 858993459)) + (qq >>> 4) & 252645135) >>> 24
    }, Eq.countTrailingZeros = gq, Eq.nextPow2 = function(qq) {
      return qq += 0 === qq, --qq, qq |= qq >>> 1, qq |= qq >>> 2, qq |= qq >>> 4, qq |= qq >>> 8, (qq |= qq >>> 16) + 1
    }, Eq.prevPow2 = function(qq) {
      return qq |= qq >>> 1, qq |= qq >>> 2, qq |= qq >>> 4, qq |= qq >>> 8, (qq |= qq >>> 16) - (qq >>> 1)
    }, Eq.parity = function(qq) {
      return qq ^= qq >>> 16, qq ^= qq >>> 8, qq ^= qq >>> 4, 27030 >>> (qq &= 15) & 1
    };
    var Yq = new Array(256);
    ! function(qq) {
      for (var Eq = 0; Eq < 256; ++Eq) {
        var gq = Eq,
          Yq = Eq,
          lq = 7;
        for (gq >>>= 1; gq; gq >>>= 1) Yq <<= 1, Yq |= 1 & gq, --lq;
        qq[Eq] = Yq << lq & 255
      }
    }(Yq), Eq.reverse = function(qq) {
      return Yq[255 & qq] << 24 | Yq[qq >>> 8 & 255] << 16 | Yq[qq >>> 16 & 255] << 8 | Yq[qq >>> 24 & 255]
    }, Eq.interleave2 = function(qq, Eq) {
      return (qq = 1431655765 & ((qq = 858993459 & ((qq = 252645135 & ((qq = 16711935 & ((qq &= 65535) | qq << 8)) | qq << 4)) | qq << 2)) | qq << 1)) | (Eq = 1431655765 & ((Eq = 858993459 & ((Eq = 252645135 & ((Eq = 16711935 & ((Eq &= 65535) | Eq << 8)) | Eq << 4)) | Eq << 2)) | Eq << 1)) << 1
    }, Eq.deinterleave2 = function(qq, Eq) {
      return (qq = 65535 & ((qq = 16711935 & ((qq = 252645135 & ((qq = 858993459 & ((qq = qq >>> Eq & 1431655765) | qq >>> 1)) | qq >>> 2)) | qq >>> 4)) | qq >>> 16)) << 16 >> 16
    }, Eq.interleave3 = function(qq, Eq, gq) {
      return qq = 1227133513 & ((qq = 3272356035 & ((qq = 251719695 & ((qq = 4278190335 & ((qq &= 1023) | qq << 16)) | qq << 8)) | qq << 4)) | qq << 2), (qq |= (Eq = 1227133513 & ((Eq = 3272356035 & ((Eq = 251719695 & ((Eq = 4278190335 & ((Eq &= 1023) | Eq << 16)) | Eq << 8)) | Eq << 4)) | Eq << 2)) << 1) | (gq = 1227133513 & ((gq = 3272356035 & ((gq = 251719695 & ((gq = 4278190335 & ((gq &= 1023) | gq << 16)) | gq << 8)) | gq << 4)) | gq << 2)) << 2
    }, Eq.deinterleave3 = function(qq, Eq) {
      return (qq = 1023 & ((qq = 4278190335 & ((qq = 251719695 & ((qq = 3272356035 & ((qq = qq >>> Eq & 1227133513) | qq >>> 2)) | qq >>> 4)) | qq >>> 8)) | qq >>> 16)) << 22 >> 22
    }, Eq.nextCombination = function(qq) {
      var Eq = qq | qq - 1;
      return Eq + 1 | (~Eq & -~Eq) - 1 >>> gq(qq) + 1
    }
  },
  39576: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      emptyColumnHeight: () => Pq,
      loadHeatmapSchematic: () => Qq,
      readSchematicBlocks: () => yq
    });
    var Yq = gq(3600),
      lq = gq.n(Yq),
      Oq = gq(3584),
      mq = gq(37725),
      xq = gq(190),
      Aq = gq(9379);
    const cq = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      uq = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: cq
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: cq
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...cq, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      Bq = lq().Type.forSchema({
        type: "record",
        fields: uq
      }),
      Wq = lq().Type.forSchema({
        type: "record",
        fields: [...uq, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...cq, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: cq
          }
        }]
      }),
      Nq = 2,
      aq = 6,
      Vq = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      dq = [150, 150, 150],
      jq = 16,
      Hq = 4096,
      oq = xq.c.Oa,
      Pq = -2147483648;
    async function Qq(qq) {
      const Eq = await yq(new Uint8Array(await qq.arrayBuffer()), await async function() {
        const {
          averageColors: qq
        } = await gq.e(202).then((() => gq(34302))), Eq = new Map;
        return gq => {
          var Yq, lq, Oq, mq, xq;
          const cq = Eq.get(gq);
          if (void 0 !== cq) return cq;
          const uq = null !== (Yq = null === (lq = Aq.i[gq]) || void 0 === lq ? void 0 : lq.name) && void 0 !== Yq ? Yq : "",
            Bq = null !== (Oq = qq[uq]) && void 0 !== Oq ? Oq : qq[uq.split("|")[0]],
            Wq = Vq[uq.split("|")[0]],
            Nq = null !== (mq = null !== (xq = null === Bq || void 0 === Bq ? void 0 : Bq[0]) && void 0 !== xq ? xq : Wq) && void 0 !== mq ? mq : 0 === (null === Bq || void 0 === Bq ? void 0 : Bq.length) ? null : dq;
          return Eq.set(gq, Nq), Nq
        }
      }());
      return {
        surface: Eq.surface,
        topDown: rq(Eq.columnTops)
      }
    }
    async function yq(qq, Eq) {
      var gq;
      if (qq.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const Yq = new DataView(qq.buffer, qq.byteOffset, qq.byteLength).getUint32(0, !0);
      if (Yq > aq) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const lq = (Yq >= Nq ? Wq : Bq).decode(Oq.IN.from(qq.subarray(4)), 0).value;
      if (!lq) throw new Error("The file isn't a schematic.");
      if (0 === lq.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const xq = null !== (gq = lq.pasteOffset) && void 0 !== gq ? gq : {
          x: 0,
          y: 0,
          z: 0
        },
        Aq = [xq.x, xq.y, xq.z].map((qq => Math.floor(qq / oq))),
        cq = lq.chunkData.map((qq => ({
          x: qq.x + Aq[0],
          y: qq.y + Aq[1],
          z: qq.z + Aq[2],
          rle: qq.rle
        }))),
        uq = new Map;
      for (const [Oq, Bq] of cq.entries()) {
        const qq = new Uint16Array(oq ** 3);
        mq.decode(Bq.rle, qq), uq.set(`${Bq.x},${Bq.y},${Bq.z}`, qq), Oq % jq === jq - 1 && await vq()
      }
      const Vq = (qq, Eq, gq) => qq * oq * oq + Eq * oq + gq,
        dq = (qq, Eq, gq) => {
          var Yq, lq;
          const Oq = Math.floor(qq / oq),
            mq = Math.floor(Eq / oq),
            xq = Math.floor(gq / oq);
          return null !== (Yq = null === (lq = uq.get(`${Oq},${mq},${xq}`)) || void 0 === lq ? void 0 : lq[Vq(qq - Oq * oq, Eq - mq * oq, gq - xq * oq)]) && void 0 !== Yq ? Yq : 0
        },
        Hq = new Map,
        Qq = [],
        yq = [];
      for (const [Oq, mq] of cq.entries()) {
        const qq = uq.get(`${mq.x},${mq.y},${mq.z}`),
          gq = [mq.x * oq, mq.y * oq, mq.z * oq],
          Yq = (Eq, Yq, lq) => Eq < 0 || Yq < 0 || lq < 0 || Eq >= oq || Yq >= oq || lq >= oq ? dq(gq[0] + Eq, gq[1] + Yq, gq[2] + lq) : qq[Vq(Eq, Yq, lq)],
          lq = `${mq.x},${mq.z}`;
        let xq = Hq.get(lq);
        void 0 === xq && (xq = {
          chunkX: mq.x,
          chunkZ: mq.z,
          heights: new Int32Array(oq * oq).fill(Pq),
          colours: new Uint8Array(oq * oq * 3)
        }, Hq.set(lq, xq));
        for (let Oq = 0; Oq < oq; Oq++)
          for (let lq = 0; lq < oq; lq++)
            for (let mq = 0; mq < oq; mq++) {
              const Aq = qq[Vq(Oq, lq, mq)];
              if (0 === Aq) continue;
              const cq = gq[0] + Oq,
                uq = gq[1] + lq,
                Bq = gq[2] + mq,
                Wq = Eq(Aq);
              if (null === Wq) continue;
              const Nq = mq * oq + Oq;
              uq > xq.heights[Nq] && (xq.heights[Nq] = uq, xq.colours.set(Wq, 3 * Nq));
              !tq(Aq) && (tq(Yq(Oq + 1, lq, mq)) || tq(Yq(Oq - 1, lq, mq)) || tq(Yq(Oq, lq + 1, mq)) || tq(Yq(Oq, lq - 1, mq)) || tq(Yq(Oq, lq, mq + 1)) || tq(Yq(Oq, lq, mq - 1))) && (Qq.push(cq, uq, Bq), yq.push(Wq[0], Wq[1], Wq[2]))
            }
        Oq % jq === jq - 1 && await vq()
      }
      if (0 === Qq.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: lq.name,
        surface: {
          positions: Int32Array.from(Qq),
          colours: Uint8Array.from(yq),
          count: Qq.length / 3
        },
        columnTops: [...Hq.values()]
      }
    }

    function tq(qq) {
      if (0 === qq) return !0;
      const Eq = Aq.i[qq];
      return void 0 === Eq || Eq.wW || Eq.transTex || !1 === Eq.solid
    }

    function rq(qq) {
      let Eq = 1 / 0,
        gq = -1 / 0,
        Yq = 1 / 0,
        lq = -1 / 0;
      for (const {
          chunkX: aq,
          chunkZ: Vq,
          heights: dq
        }
        of qq) dq.forEach(((qq, Oq) => {
        if (qq === Pq) return;
        const mq = aq * oq + Oq % oq,
          xq = Vq * oq + Math.floor(Oq / oq);
        Eq = Math.min(Eq, mq), gq = Math.max(gq, mq), Yq = Math.min(Yq, xq), lq = Math.max(lq, xq)
      }));
      const Oq = gq - Eq + 1,
        mq = lq - Yq + 1,
        xq = Math.max(1, Math.ceil(Oq / Hq), Math.ceil(mq / Hq)),
        Aq = Math.ceil(Oq / xq),
        cq = Math.ceil(mq / xq),
        uq = document.createElement("canvas");
      uq.width = Aq, uq.height = cq;
      const Bq = uq.getContext("2d");
      if (!Bq) throw new Error("Couldn't draw the schematic from above.");
      const Wq = Bq.createImageData(Aq, cq),
        Nq = new Int32Array(Aq * cq).fill(Pq);
      for (const {
          chunkX: aq,
          chunkZ: Vq,
          heights: dq,
          colours: jq
        }
        of qq) dq.forEach(((qq, Eq) => {
        const lq = aq * oq + Eq % oq,
          Oq = Vq * oq + Math.floor(Eq / oq),
          mq = Math.floor((Oq - Yq) / xq) * Aq + Math.floor((gq - lq) / xq);
        qq === Pq || qq <= Nq[mq] || (Nq[mq] = qq, Wq.data.set(jq.subarray(3 * Eq, 3 * Eq + 3), 4 * mq), Wq.data[4 * mq + 3] = 255)
      }));
      return Bq.putImageData(Wq, 0, 0), {
        maxX: gq,
        minZ: Yq,
        width: Aq * xq,
        depth: cq * xq,
        canvas: uq
      }
    }

    function vq() {
      return new Promise((qq => {
        setTimeout(qq, 0)
      }))
    }
  },
  9464: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      d: () => Oq
    });
    var Yq = gq(9433);
    const lq = "Air",
      Oq = Object.freeze(new Yq.e(lq, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);