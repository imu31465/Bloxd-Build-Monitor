export const id = 187;
export const ids = [187];
export const modules = {
  37713: (DD, zD, wD) => {
    var pD = wD(37718);

    function sD(DD) {
      for (var zD, wD, sD = 0, KD = DD.length, rD = 0; rD < DD.length;) {
        for (zD = DD[rD], wD = 0; rD < KD && DD[rD] === zD;) ++rD, ++wD;
        sD += pD.log2(wD) / 7 | 0, sD += pD.log2(zD >>> 0) / 7 | 0, sD += 2
      }
      return sD
    }
    zD.size = sD, zD.encode = function(DD, zD) {
      zD || (zD = new Uint8Array(sD(DD)));
      for (var wD, pD, KD = 0, rD = zD.length, LD = 0; LD < DD.length;) {
        for (wD = DD[LD], pD = 0; LD < DD.length && DD[LD] === wD;) ++LD, ++pD;
        for (; KD < rD && pD >= 128;) zD[KD++] = 128 + (127 & pD), pD >>>= 7;
        if (KD >= rD) throw new Error("RLE buffer overflow");
        for (zD[KD++] = pD, wD >>>= 0; KD < rD && wD >= 128;) zD[KD++] = 128 + (127 & wD), wD >>>= 7;
        if (KD >= rD) throw new Error("RLE buffer overflow");
        zD[KD++] = wD
      }
      return zD
    }, zD.decode = function(DD, zD) {
      for (var wD, pD, sD, KD, rD = zD.length, LD = DD.length, cD = 0, gD = 0; gD < LD;) {
        for (wD = 0, pD = 0; gD < LD && DD[gD] >= 128;) wD += (127 & DD[gD++]) << pD, pD += 7;
        if (wD += DD[gD++] << pD, gD >= LD) throw new Error("RLE buffer underrun");
        if (cD + wD > rD) throw new Error("Chunk buffer overflow");
        for (sD = 0, pD = 0; gD < LD && DD[gD] >= 128;) sD += (127 & DD[gD++]) << pD, pD += 7;
        if (gD >= LD) throw new Error("RLE buffer underrun");
        for (sD += DD[gD++] << pD, KD = 0; KD < wD; ++KD) zD[cD++] = sD
      }
      return zD
    }
  },
  37718: (DD, zD) => {
    function wD(DD) {
      var zD = 32;
      return (DD &= -DD) && zD--, 65535 & DD && (zD -= 16), 16711935 & DD && (zD -= 8), 252645135 & DD && (zD -= 4), 858993459 & DD && (zD -= 2), 1431655765 & DD && (zD -= 1), zD
    }
    zD.INT_BITS = 32, zD.INT_MAX = 2147483647, zD.INT_MIN = -1 << 31, zD.sign = function(DD) {
      return (DD > 0) - (DD < 0)
    }, zD.abs = function(DD) {
      var zD = DD >> 31;
      return (DD ^ zD) - zD
    }, zD.min = function(DD, zD) {
      return zD ^ (DD ^ zD) & -(DD < zD)
    }, zD.max = function(DD, zD) {
      return DD ^ (DD ^ zD) & -(DD < zD)
    }, zD.isPow2 = function(DD) {
      return !(DD & DD - 1) && !!DD
    }, zD.log2 = function(DD) {
      var zD, wD;
      return zD = (DD > 65535) << 4, zD |= wD = ((DD >>>= zD) > 255) << 3, zD |= wD = ((DD >>>= wD) > 15) << 2, (zD |= wD = ((DD >>>= wD) > 3) << 1) | (DD >>>= wD) >> 1
    }, zD.log10 = function(DD) {
      return DD >= 1e9 ? 9 : DD >= 1e8 ? 8 : DD >= 1e7 ? 7 : DD >= 1e6 ? 6 : DD >= 1e5 ? 5 : DD >= 1e4 ? 4 : DD >= 1e3 ? 3 : DD >= 100 ? 2 : DD >= 10 ? 1 : 0
    }, zD.popCount = function(DD) {
      return 16843009 * ((DD = (858993459 & (DD -= DD >>> 1 & 1431655765)) + (DD >>> 2 & 858993459)) + (DD >>> 4) & 252645135) >>> 24
    }, zD.countTrailingZeros = wD, zD.nextPow2 = function(DD) {
      return DD += 0 === DD, --DD, DD |= DD >>> 1, DD |= DD >>> 2, DD |= DD >>> 4, DD |= DD >>> 8, (DD |= DD >>> 16) + 1
    }, zD.prevPow2 = function(DD) {
      return DD |= DD >>> 1, DD |= DD >>> 2, DD |= DD >>> 4, DD |= DD >>> 8, (DD |= DD >>> 16) - (DD >>> 1)
    }, zD.parity = function(DD) {
      return DD ^= DD >>> 16, DD ^= DD >>> 8, DD ^= DD >>> 4, 27030 >>> (DD &= 15) & 1
    };
    var pD = new Array(256);
    ! function(DD) {
      for (var zD = 0; zD < 256; ++zD) {
        var wD = zD,
          pD = zD,
          sD = 7;
        for (wD >>>= 1; wD; wD >>>= 1) pD <<= 1, pD |= 1 & wD, --sD;
        DD[zD] = pD << sD & 255
      }
    }(pD), zD.reverse = function(DD) {
      return pD[255 & DD] << 24 | pD[DD >>> 8 & 255] << 16 | pD[DD >>> 16 & 255] << 8 | pD[DD >>> 24 & 255]
    }, zD.interleave2 = function(DD, zD) {
      return (DD = 1431655765 & ((DD = 858993459 & ((DD = 252645135 & ((DD = 16711935 & ((DD &= 65535) | DD << 8)) | DD << 4)) | DD << 2)) | DD << 1)) | (zD = 1431655765 & ((zD = 858993459 & ((zD = 252645135 & ((zD = 16711935 & ((zD &= 65535) | zD << 8)) | zD << 4)) | zD << 2)) | zD << 1)) << 1
    }, zD.deinterleave2 = function(DD, zD) {
      return (DD = 65535 & ((DD = 16711935 & ((DD = 252645135 & ((DD = 858993459 & ((DD = DD >>> zD & 1431655765) | DD >>> 1)) | DD >>> 2)) | DD >>> 4)) | DD >>> 16)) << 16 >> 16
    }, zD.interleave3 = function(DD, zD, wD) {
      return DD = 1227133513 & ((DD = 3272356035 & ((DD = 251719695 & ((DD = 4278190335 & ((DD &= 1023) | DD << 16)) | DD << 8)) | DD << 4)) | DD << 2), (DD |= (zD = 1227133513 & ((zD = 3272356035 & ((zD = 251719695 & ((zD = 4278190335 & ((zD &= 1023) | zD << 16)) | zD << 8)) | zD << 4)) | zD << 2)) << 1) | (wD = 1227133513 & ((wD = 3272356035 & ((wD = 251719695 & ((wD = 4278190335 & ((wD &= 1023) | wD << 16)) | wD << 8)) | wD << 4)) | wD << 2)) << 2
    }, zD.deinterleave3 = function(DD, zD) {
      return (DD = 1023 & ((DD = 4278190335 & ((DD = 251719695 & ((DD = 3272356035 & ((DD = DD >>> zD & 1227133513) | DD >>> 2)) | DD >>> 4)) | DD >>> 8)) | DD >>> 16)) << 22 >> 22
    }, zD.nextCombination = function(DD) {
      var zD = DD | DD - 1;
      return zD + 1 | (~zD & -~zD) - 1 >>> wD(DD) + 1
    }
  },
  39740: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      emptyColumnHeight: () => OD,
      loadHeatmapSchematic: () => JD,
      readSchematicBlocks: () => ED
    });
    var pD = wD(3760),
      sD = wD.n(pD),
      KD = wD(3750),
      rD = wD(37713),
      LD = wD(197),
      cD = wD(9198);
    const gD = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      RD = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: gD
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: gD
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...gD, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      AD = sD().Type.forSchema({
        type: "record",
        fields: RD
      }),
      UD = sD().Type.forSchema({
        type: "record",
        fields: [...RD, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...gD, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: gD
          }
        }]
      }),
      fD = 2,
      ID = 6,
      BD = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      GD = [150, 150, 150],
      hD = 16,
      nD = 4096,
      MD = LD.f.CI,
      OD = -2147483648;
    async function JD(DD) {
      const zD = await ED(new Uint8Array(await DD.arrayBuffer()), await async function() {
        const {
          averageColors: DD
        } = await wD.e(204).then((() => wD(34299))), zD = new Map;
        return wD => {
          var pD, sD, KD, rD, LD;
          const gD = zD.get(wD);
          if (void 0 !== gD) return gD;
          const RD = null !== (pD = null === (sD = cD.l[wD]) || void 0 === sD ? void 0 : sD.name) && void 0 !== pD ? pD : "",
            AD = null !== (KD = DD[RD]) && void 0 !== KD ? KD : DD[RD.split("|")[0]],
            UD = BD[RD.split("|")[0]],
            fD = null !== (rD = null !== (LD = null === AD || void 0 === AD ? void 0 : AD[0]) && void 0 !== LD ? LD : UD) && void 0 !== rD ? rD : 0 === (null === AD || void 0 === AD ? void 0 : AD.length) ? null : GD;
          return zD.set(wD, fD), fD
        }
      }());
      return {
        surface: zD.surface,
        topDown: XD(zD.columnTops)
      }
    }
    async function ED(DD, zD) {
      var wD;
      if (DD.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const pD = new DataView(DD.buffer, DD.byteOffset, DD.byteLength).getUint32(0, !0);
      if (pD > ID) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const sD = (pD >= fD ? UD : AD).decode(KD.nI.from(DD.subarray(4)), 0).value;
      if (!sD) throw new Error("The file isn't a schematic.");
      if (0 === sD.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const LD = null !== (wD = sD.pasteOffset) && void 0 !== wD ? wD : {
          x: 0,
          y: 0,
          z: 0
        },
        cD = [LD.x, LD.y, LD.z].map((DD => Math.floor(DD / MD))),
        gD = sD.chunkData.map((DD => ({
          x: DD.x + cD[0],
          y: DD.y + cD[1],
          z: DD.z + cD[2],
          rle: DD.rle
        }))),
        RD = new Map;
      for (const [KD, AD] of gD.entries()) {
        const DD = new Uint16Array(MD ** 3);
        rD.decode(AD.rle, DD), RD.set(`${AD.x},${AD.y},${AD.z}`, DD), KD % hD === hD - 1 && await VD()
      }
      const BD = (DD, zD, wD) => DD * MD * MD + zD * MD + wD,
        GD = (DD, zD, wD) => {
          var pD, sD;
          const KD = Math.floor(DD / MD),
            rD = Math.floor(zD / MD),
            LD = Math.floor(wD / MD);
          return null !== (pD = null === (sD = RD.get(`${KD},${rD},${LD}`)) || void 0 === sD ? void 0 : sD[BD(DD - KD * MD, zD - rD * MD, wD - LD * MD)]) && void 0 !== pD ? pD : 0
        },
        nD = new Map,
        JD = [],
        ED = [];
      for (const [KD, rD] of gD.entries()) {
        const DD = RD.get(`${rD.x},${rD.y},${rD.z}`),
          wD = [rD.x * MD, rD.y * MD, rD.z * MD],
          pD = (zD, pD, sD) => zD < 0 || pD < 0 || sD < 0 || zD >= MD || pD >= MD || sD >= MD ? GD(wD[0] + zD, wD[1] + pD, wD[2] + sD) : DD[BD(zD, pD, sD)],
          sD = `${rD.x},${rD.z}`;
        let LD = nD.get(sD);
        void 0 === LD && (LD = {
          chunkX: rD.x,
          chunkZ: rD.z,
          heights: new Int32Array(MD * MD).fill(OD),
          colours: new Uint8Array(MD * MD * 3)
        }, nD.set(sD, LD));
        for (let KD = 0; KD < MD; KD++)
          for (let sD = 0; sD < MD; sD++)
            for (let rD = 0; rD < MD; rD++) {
              const cD = DD[BD(KD, sD, rD)];
              if (0 === cD) continue;
              const gD = wD[0] + KD,
                RD = wD[1] + sD,
                AD = wD[2] + rD,
                UD = zD(cD);
              if (null === UD) continue;
              const fD = rD * MD + KD;
              RD > LD.heights[fD] && (LD.heights[fD] = RD, LD.colours.set(UD, 3 * fD));
              !QD(cD) && (QD(pD(KD + 1, sD, rD)) || QD(pD(KD - 1, sD, rD)) || QD(pD(KD, sD + 1, rD)) || QD(pD(KD, sD - 1, rD)) || QD(pD(KD, sD, rD + 1)) || QD(pD(KD, sD, rD - 1))) && (JD.push(gD, RD, AD), ED.push(UD[0], UD[1], UD[2]))
            }
        KD % hD === hD - 1 && await VD()
      }
      if (0 === JD.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: sD.name,
        surface: {
          positions: Int32Array.from(JD),
          colours: Uint8Array.from(ED),
          count: JD.length / 3
        },
        columnTops: [...nD.values()]
      }
    }

    function QD(DD) {
      if (0 === DD) return !0;
      const zD = cD.l[DD];
      return void 0 === zD || zD.Af || zD.transTex || !1 === zD.solid
    }

    function XD(DD) {
      let zD = 1 / 0,
        wD = -1 / 0,
        pD = 1 / 0,
        sD = -1 / 0;
      for (const {
          chunkX: ID,
          chunkZ: BD,
          heights: GD
        }
        of DD) GD.forEach(((DD, KD) => {
        if (DD === OD) return;
        const rD = ID * MD + KD % MD,
          LD = BD * MD + Math.floor(KD / MD);
        zD = Math.min(zD, rD), wD = Math.max(wD, rD), pD = Math.min(pD, LD), sD = Math.max(sD, LD)
      }));
      const KD = wD - zD + 1,
        rD = sD - pD + 1,
        LD = Math.max(1, Math.ceil(KD / nD), Math.ceil(rD / nD)),
        cD = Math.ceil(KD / LD),
        gD = Math.ceil(rD / LD),
        RD = document.createElement("canvas");
      RD.width = cD, RD.height = gD;
      const AD = RD.getContext("2d");
      if (!AD) throw new Error("Couldn't draw the schematic from above.");
      const UD = AD.createImageData(cD, gD),
        fD = new Int32Array(cD * gD).fill(OD);
      for (const {
          chunkX: ID,
          chunkZ: BD,
          heights: GD,
          colours: hD
        }
        of DD) GD.forEach(((DD, zD) => {
        const sD = ID * MD + zD % MD,
          KD = BD * MD + Math.floor(zD / MD),
          rD = Math.floor((KD - pD) / LD) * cD + Math.floor((wD - sD) / LD);
        DD === OD || DD <= fD[rD] || (fD[rD] = DD, UD.data.set(hD.subarray(3 * zD, 3 * zD + 3), 4 * rD), UD.data[4 * rD + 3] = 255)
      }));
      return AD.putImageData(UD, 0, 0), {
        maxX: wD,
        minZ: pD,
        width: cD * LD,
        depth: gD * LD,
        canvas: RD
      }
    }

    function VD() {
      return new Promise((DD => {
        setTimeout(DD, 0)
      }))
    }
  },
  9286: (DD, zD, wD) => {
    wD.d(zD, {
      c: () => sD,
      e: () => KD
    });
    var pD = wD(9236);
    const sD = "Air",
      KD = Object.freeze(new pD.h(sD, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);