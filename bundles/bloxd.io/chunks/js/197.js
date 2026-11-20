export const id = 197;
export const ids = [197];
export const modules = {
  37266: (UU, RU, gU) => {
    var tU = gU(37271);

    function pU(UU) {
      for (var RU, gU, pU = 0, EU = UU.length, PU = 0; PU < UU.length;) {
        for (RU = UU[PU], gU = 0; PU < EU && UU[PU] === RU;) ++PU, ++gU;
        pU += tU.log2(gU) / 7 | 0, pU += tU.log2(RU >>> 0) / 7 | 0, pU += 2
      }
      return pU
    }
    RU.size = pU, RU.encode = function(UU, RU) {
      RU || (RU = new Uint8Array(pU(UU)));
      for (var gU, tU, EU = 0, PU = RU.length, TU = 0; TU < UU.length;) {
        for (gU = UU[TU], tU = 0; TU < UU.length && UU[TU] === gU;) ++TU, ++tU;
        for (; EU < PU && tU >= 128;) RU[EU++] = 128 + (127 & tU), tU >>>= 7;
        if (EU >= PU) throw new Error("RLE buffer overflow");
        for (RU[EU++] = tU, gU >>>= 0; EU < PU && gU >= 128;) RU[EU++] = 128 + (127 & gU), gU >>>= 7;
        if (EU >= PU) throw new Error("RLE buffer overflow");
        RU[EU++] = gU
      }
      return RU
    }, RU.decode = function(UU, RU) {
      for (var gU, tU, pU, EU, PU = RU.length, TU = UU.length, qU = 0, KU = 0; KU < TU;) {
        for (gU = 0, tU = 0; KU < TU && UU[KU] >= 128;) gU += (127 & UU[KU++]) << tU, tU += 7;
        if (gU += UU[KU++] << tU, KU >= TU) throw new Error("RLE buffer underrun");
        if (qU + gU > PU) throw new Error("Chunk buffer overflow");
        for (pU = 0, tU = 0; KU < TU && UU[KU] >= 128;) pU += (127 & UU[KU++]) << tU, tU += 7;
        if (KU >= TU) throw new Error("RLE buffer underrun");
        for (pU += UU[KU++] << tU, EU = 0; EU < gU; ++EU) RU[qU++] = pU
      }
      return RU
    }
  },
  37271: (UU, RU) => {
    function gU(UU) {
      var RU = 32;
      return (UU &= -UU) && RU--, 65535 & UU && (RU -= 16), 16711935 & UU && (RU -= 8), 252645135 & UU && (RU -= 4), 858993459 & UU && (RU -= 2), 1431655765 & UU && (RU -= 1), RU
    }
    RU.INT_BITS = 32, RU.INT_MAX = 2147483647, RU.INT_MIN = -1 << 31, RU.sign = function(UU) {
      return (UU > 0) - (UU < 0)
    }, RU.abs = function(UU) {
      var RU = UU >> 31;
      return (UU ^ RU) - RU
    }, RU.min = function(UU, RU) {
      return RU ^ (UU ^ RU) & -(UU < RU)
    }, RU.max = function(UU, RU) {
      return UU ^ (UU ^ RU) & -(UU < RU)
    }, RU.isPow2 = function(UU) {
      return !(UU & UU - 1) && !!UU
    }, RU.log2 = function(UU) {
      var RU, gU;
      return RU = (UU > 65535) << 4, RU |= gU = ((UU >>>= RU) > 255) << 3, RU |= gU = ((UU >>>= gU) > 15) << 2, (RU |= gU = ((UU >>>= gU) > 3) << 1) | (UU >>>= gU) >> 1
    }, RU.log10 = function(UU) {
      return UU >= 1e9 ? 9 : UU >= 1e8 ? 8 : UU >= 1e7 ? 7 : UU >= 1e6 ? 6 : UU >= 1e5 ? 5 : UU >= 1e4 ? 4 : UU >= 1e3 ? 3 : UU >= 100 ? 2 : UU >= 10 ? 1 : 0
    }, RU.popCount = function(UU) {
      return 16843009 * ((UU = (858993459 & (UU -= UU >>> 1 & 1431655765)) + (UU >>> 2 & 858993459)) + (UU >>> 4) & 252645135) >>> 24
    }, RU.countTrailingZeros = gU, RU.nextPow2 = function(UU) {
      return UU += 0 === UU, --UU, UU |= UU >>> 1, UU |= UU >>> 2, UU |= UU >>> 4, UU |= UU >>> 8, (UU |= UU >>> 16) + 1
    }, RU.prevPow2 = function(UU) {
      return UU |= UU >>> 1, UU |= UU >>> 2, UU |= UU >>> 4, UU |= UU >>> 8, (UU |= UU >>> 16) - (UU >>> 1)
    }, RU.parity = function(UU) {
      return UU ^= UU >>> 16, UU ^= UU >>> 8, UU ^= UU >>> 4, 27030 >>> (UU &= 15) & 1
    };
    var tU = new Array(256);
    ! function(UU) {
      for (var RU = 0; RU < 256; ++RU) {
        var gU = RU,
          tU = RU,
          pU = 7;
        for (gU >>>= 1; gU; gU >>>= 1) tU <<= 1, tU |= 1 & gU, --pU;
        UU[RU] = tU << pU & 255
      }
    }(tU), RU.reverse = function(UU) {
      return tU[255 & UU] << 24 | tU[UU >>> 8 & 255] << 16 | tU[UU >>> 16 & 255] << 8 | tU[UU >>> 24 & 255]
    }, RU.interleave2 = function(UU, RU) {
      return (UU = 1431655765 & ((UU = 858993459 & ((UU = 252645135 & ((UU = 16711935 & ((UU &= 65535) | UU << 8)) | UU << 4)) | UU << 2)) | UU << 1)) | (RU = 1431655765 & ((RU = 858993459 & ((RU = 252645135 & ((RU = 16711935 & ((RU &= 65535) | RU << 8)) | RU << 4)) | RU << 2)) | RU << 1)) << 1
    }, RU.deinterleave2 = function(UU, RU) {
      return (UU = 65535 & ((UU = 16711935 & ((UU = 252645135 & ((UU = 858993459 & ((UU = UU >>> RU & 1431655765) | UU >>> 1)) | UU >>> 2)) | UU >>> 4)) | UU >>> 16)) << 16 >> 16
    }, RU.interleave3 = function(UU, RU, gU) {
      return UU = 1227133513 & ((UU = 3272356035 & ((UU = 251719695 & ((UU = 4278190335 & ((UU &= 1023) | UU << 16)) | UU << 8)) | UU << 4)) | UU << 2), (UU |= (RU = 1227133513 & ((RU = 3272356035 & ((RU = 251719695 & ((RU = 4278190335 & ((RU &= 1023) | RU << 16)) | RU << 8)) | RU << 4)) | RU << 2)) << 1) | (gU = 1227133513 & ((gU = 3272356035 & ((gU = 251719695 & ((gU = 4278190335 & ((gU &= 1023) | gU << 16)) | gU << 8)) | gU << 4)) | gU << 2)) << 2
    }, RU.deinterleave3 = function(UU, RU) {
      return (UU = 1023 & ((UU = 4278190335 & ((UU = 251719695 & ((UU = 3272356035 & ((UU = UU >>> RU & 1227133513) | UU >>> 2)) | UU >>> 4)) | UU >>> 8)) | UU >>> 16)) << 22 >> 22
    }, RU.nextCombination = function(UU) {
      var RU = UU | UU - 1;
      return RU + 1 | (~RU & -~RU) - 1 >>> gU(UU) + 1
    }
  },
  39190: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      emptyColumnHeight: () => xU,
      loadHeatmapSchematic: () => mU,
      readSchematicBlocks: () => IU
    });
    var tU = gU(3422),
      pU = gU.n(tU),
      EU = gU(3398),
      PU = gU(37266),
      TU = gU(189),
      qU = gU(9078);
    const KU = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      cU = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: KU
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: KU
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...KU, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      GU = pU().Type.forSchema({
        type: "record",
        fields: cU
      }),
      jU = pU().Type.forSchema({
        type: "record",
        fields: [...cU, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...KU, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: KU
          }
        }]
      }),
      uU = 2,
      CU = 6,
      hU = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      QU = [150, 150, 150],
      eU = 16,
      WU = 4096,
      fU = TU.e.jC,
      xU = -2147483648;
    async function mU(UU) {
      const RU = await IU(new Uint8Array(await UU.arrayBuffer()), await async function() {
        const {
          averageColors: UU
        } = await gU.e(201).then((() => gU(33915))), RU = new Map;
        return gU => {
          var tU, pU, EU, PU, TU;
          const KU = RU.get(gU);
          if (void 0 !== KU) return KU;
          const cU = null !== (tU = null === (pU = qU.f[gU]) || void 0 === pU ? void 0 : pU.name) && void 0 !== tU ? tU : "",
            GU = null !== (EU = UU[cU]) && void 0 !== EU ? EU : UU[cU.split("|")[0]],
            jU = hU[cU.split("|")[0]],
            uU = null !== (PU = null !== (TU = null === GU || void 0 === GU ? void 0 : GU[0]) && void 0 !== TU ? TU : jU) && void 0 !== PU ? PU : 0 === (null === GU || void 0 === GU ? void 0 : GU.length) ? null : QU;
          return RU.set(gU, uU), uU
        }
      }());
      return {
        surface: RU.surface,
        topDown: wU(RU.columnTops)
      }
    }
    async function IU(UU, RU) {
      var gU;
      if (UU.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const tU = new DataView(UU.buffer, UU.byteOffset, UU.byteLength).getUint32(0, !0);
      if (tU > CU) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const pU = (tU >= uU ? jU : GU).decode(EU.tC.from(UU.subarray(4)), 0).value;
      if (!pU) throw new Error("The file isn't a schematic.");
      if (0 === pU.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const TU = null !== (gU = pU.pasteOffset) && void 0 !== gU ? gU : {
          x: 0,
          y: 0,
          z: 0
        },
        qU = [TU.x, TU.y, TU.z].map((UU => Math.floor(UU / fU))),
        KU = pU.chunkData.map((UU => ({
          x: UU.x + qU[0],
          y: UU.y + qU[1],
          z: UU.z + qU[2],
          rle: UU.rle
        }))),
        cU = new Map;
      for (const [EU, GU] of KU.entries()) {
        const UU = new Uint16Array(fU ** 3);
        PU.decode(GU.rle, UU), cU.set(`${GU.x},${GU.y},${GU.z}`, UU), EU % eU === eU - 1 && await nU()
      }
      const hU = (UU, RU, gU) => UU * fU * fU + RU * fU + gU,
        QU = (UU, RU, gU) => {
          var tU, pU;
          const EU = Math.floor(UU / fU),
            PU = Math.floor(RU / fU),
            TU = Math.floor(gU / fU);
          return null !== (tU = null === (pU = cU.get(`${EU},${PU},${TU}`)) || void 0 === pU ? void 0 : pU[hU(UU - EU * fU, RU - PU * fU, gU - TU * fU)]) && void 0 !== tU ? tU : 0
        },
        WU = new Map,
        mU = [],
        IU = [];
      for (const [EU, PU] of KU.entries()) {
        const UU = cU.get(`${PU.x},${PU.y},${PU.z}`),
          gU = [PU.x * fU, PU.y * fU, PU.z * fU],
          tU = (RU, tU, pU) => RU < 0 || tU < 0 || pU < 0 || RU >= fU || tU >= fU || pU >= fU ? QU(gU[0] + RU, gU[1] + tU, gU[2] + pU) : UU[hU(RU, tU, pU)],
          pU = `${PU.x},${PU.z}`;
        let TU = WU.get(pU);
        void 0 === TU && (TU = {
          chunkX: PU.x,
          chunkZ: PU.z,
          heights: new Int32Array(fU * fU).fill(xU),
          colours: new Uint8Array(fU * fU * 3)
        }, WU.set(pU, TU));
        for (let EU = 0; EU < fU; EU++)
          for (let pU = 0; pU < fU; pU++)
            for (let PU = 0; PU < fU; PU++) {
              const qU = UU[hU(EU, pU, PU)];
              if (0 === qU) continue;
              const KU = gU[0] + EU,
                cU = gU[1] + pU,
                GU = gU[2] + PU,
                jU = RU(qU);
              if (null === jU) continue;
              const uU = PU * fU + EU;
              cU > TU.heights[uU] && (TU.heights[uU] = cU, TU.colours.set(jU, 3 * uU));
              !JU(qU) && (JU(tU(EU + 1, pU, PU)) || JU(tU(EU - 1, pU, PU)) || JU(tU(EU, pU + 1, PU)) || JU(tU(EU, pU - 1, PU)) || JU(tU(EU, pU, PU + 1)) || JU(tU(EU, pU, PU - 1))) && (mU.push(KU, cU, GU), IU.push(jU[0], jU[1], jU[2]))
            }
        EU % eU === eU - 1 && await nU()
      }
      if (0 === mU.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: pU.name,
        surface: {
          positions: Int32Array.from(mU),
          colours: Uint8Array.from(IU),
          count: mU.length / 3
        },
        columnTops: [...WU.values()]
      }
    }

    function JU(UU) {
      if (0 === UU) return !0;
      const RU = qU.f[UU];
      return void 0 === RU || RU.Nj || RU.transTex || !1 === RU.solid
    }

    function wU(UU) {
      let RU = 1 / 0,
        gU = -1 / 0,
        tU = 1 / 0,
        pU = -1 / 0;
      for (const {
          chunkX: CU,
          chunkZ: hU,
          heights: QU
        }
        of UU) QU.forEach(((UU, EU) => {
        if (UU === xU) return;
        const PU = CU * fU + EU % fU,
          TU = hU * fU + Math.floor(EU / fU);
        RU = Math.min(RU, PU), gU = Math.max(gU, PU), tU = Math.min(tU, TU), pU = Math.max(pU, TU)
      }));
      const EU = gU - RU + 1,
        PU = pU - tU + 1,
        TU = Math.max(1, Math.ceil(EU / WU), Math.ceil(PU / WU)),
        qU = Math.ceil(EU / TU),
        KU = Math.ceil(PU / TU),
        cU = document.createElement("canvas");
      cU.width = qU, cU.height = KU;
      const GU = cU.getContext("2d");
      if (!GU) throw new Error("Couldn't draw the schematic from above.");
      const jU = GU.createImageData(qU, KU),
        uU = new Int32Array(qU * KU).fill(xU);
      for (const {
          chunkX: CU,
          chunkZ: hU,
          heights: QU,
          colours: eU
        }
        of UU) QU.forEach(((UU, RU) => {
        const pU = CU * fU + RU % fU,
          EU = hU * fU + Math.floor(RU / fU),
          PU = Math.floor((EU - tU) / TU) * qU + Math.floor((gU - pU) / TU);
        UU === xU || UU <= uU[PU] || (uU[PU] = UU, jU.data.set(eU.subarray(3 * RU, 3 * RU + 3), 4 * PU), jU.data[4 * PU + 3] = 255)
      }));
      return GU.putImageData(jU, 0, 0), {
        maxX: gU,
        minZ: tU,
        width: qU * TU,
        depth: KU * TU,
        canvas: cU
      }
    }

    function nU() {
      return new Promise((UU => {
        setTimeout(UU, 0)
      }))
    }
  },
  9155: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU,
      f: () => EU
    });
    var tU = gU(9121);
    const pU = "Air",
      EU = Object.freeze(new tU.h(pU, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);