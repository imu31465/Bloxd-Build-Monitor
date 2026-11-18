export const id = 183;
export const ids = [183];
export const modules = {
  36711: (JJ, cJ, ZJ) => {
    var FJ = ZJ(36715);

    function UJ(JJ) {
      for (var cJ, ZJ, UJ = 0, eJ = JJ.length, XJ = 0; XJ < JJ.length;) {
        for (cJ = JJ[XJ], ZJ = 0; XJ < eJ && JJ[XJ] === cJ;) ++XJ, ++ZJ;
        UJ += FJ.log2(ZJ) / 7 | 0, UJ += FJ.log2(cJ >>> 0) / 7 | 0, UJ += 2
      }
      return UJ
    }
    cJ.size = UJ, cJ.encode = function(JJ, cJ) {
      cJ || (cJ = new Uint8Array(UJ(JJ)));
      for (var ZJ, FJ, eJ = 0, XJ = cJ.length, AJ = 0; AJ < JJ.length;) {
        for (ZJ = JJ[AJ], FJ = 0; AJ < JJ.length && JJ[AJ] === ZJ;) ++AJ, ++FJ;
        for (; eJ < XJ && FJ >= 128;) cJ[eJ++] = 128 + (127 & FJ), FJ >>>= 7;
        if (eJ >= XJ) throw new Error("RLE buffer overflow");
        for (cJ[eJ++] = FJ, ZJ >>>= 0; eJ < XJ && ZJ >= 128;) cJ[eJ++] = 128 + (127 & ZJ), ZJ >>>= 7;
        if (eJ >= XJ) throw new Error("RLE buffer overflow");
        cJ[eJ++] = ZJ
      }
      return cJ
    }, cJ.decode = function(JJ, cJ) {
      for (var ZJ, FJ, UJ, eJ, XJ = cJ.length, AJ = JJ.length, qJ = 0, jJ = 0; jJ < AJ;) {
        for (ZJ = 0, FJ = 0; jJ < AJ && JJ[jJ] >= 128;) ZJ += (127 & JJ[jJ++]) << FJ, FJ += 7;
        if (ZJ += JJ[jJ++] << FJ, jJ >= AJ) throw new Error("RLE buffer underrun");
        if (qJ + ZJ > XJ) throw new Error("Chunk buffer overflow");
        for (UJ = 0, FJ = 0; jJ < AJ && JJ[jJ] >= 128;) UJ += (127 & JJ[jJ++]) << FJ, FJ += 7;
        if (jJ >= AJ) throw new Error("RLE buffer underrun");
        for (UJ += JJ[jJ++] << FJ, eJ = 0; eJ < ZJ; ++eJ) cJ[qJ++] = UJ
      }
      return cJ
    }
  },
  36715: (JJ, cJ) => {
    function ZJ(JJ) {
      var cJ = 32;
      return (JJ &= -JJ) && cJ--, 65535 & JJ && (cJ -= 16), 16711935 & JJ && (cJ -= 8), 252645135 & JJ && (cJ -= 4), 858993459 & JJ && (cJ -= 2), 1431655765 & JJ && (cJ -= 1), cJ
    }
    cJ.INT_BITS = 32, cJ.INT_MAX = 2147483647, cJ.INT_MIN = -1 << 31, cJ.sign = function(JJ) {
      return (JJ > 0) - (JJ < 0)
    }, cJ.abs = function(JJ) {
      var cJ = JJ >> 31;
      return (JJ ^ cJ) - cJ
    }, cJ.min = function(JJ, cJ) {
      return cJ ^ (JJ ^ cJ) & -(JJ < cJ)
    }, cJ.max = function(JJ, cJ) {
      return JJ ^ (JJ ^ cJ) & -(JJ < cJ)
    }, cJ.isPow2 = function(JJ) {
      return !(JJ & JJ - 1) && !!JJ
    }, cJ.log2 = function(JJ) {
      var cJ, ZJ;
      return cJ = (JJ > 65535) << 4, cJ |= ZJ = ((JJ >>>= cJ) > 255) << 3, cJ |= ZJ = ((JJ >>>= ZJ) > 15) << 2, (cJ |= ZJ = ((JJ >>>= ZJ) > 3) << 1) | (JJ >>>= ZJ) >> 1
    }, cJ.log10 = function(JJ) {
      return JJ >= 1e9 ? 9 : JJ >= 1e8 ? 8 : JJ >= 1e7 ? 7 : JJ >= 1e6 ? 6 : JJ >= 1e5 ? 5 : JJ >= 1e4 ? 4 : JJ >= 1e3 ? 3 : JJ >= 100 ? 2 : JJ >= 10 ? 1 : 0
    }, cJ.popCount = function(JJ) {
      return 16843009 * ((JJ = (858993459 & (JJ -= JJ >>> 1 & 1431655765)) + (JJ >>> 2 & 858993459)) + (JJ >>> 4) & 252645135) >>> 24
    }, cJ.countTrailingZeros = ZJ, cJ.nextPow2 = function(JJ) {
      return JJ += 0 === JJ, --JJ, JJ |= JJ >>> 1, JJ |= JJ >>> 2, JJ |= JJ >>> 4, JJ |= JJ >>> 8, (JJ |= JJ >>> 16) + 1
    }, cJ.prevPow2 = function(JJ) {
      return JJ |= JJ >>> 1, JJ |= JJ >>> 2, JJ |= JJ >>> 4, JJ |= JJ >>> 8, (JJ |= JJ >>> 16) - (JJ >>> 1)
    }, cJ.parity = function(JJ) {
      return JJ ^= JJ >>> 16, JJ ^= JJ >>> 8, JJ ^= JJ >>> 4, 27030 >>> (JJ &= 15) & 1
    };
    var FJ = new Array(256);
    ! function(JJ) {
      for (var cJ = 0; cJ < 256; ++cJ) {
        var ZJ = cJ,
          FJ = cJ,
          UJ = 7;
        for (ZJ >>>= 1; ZJ; ZJ >>>= 1) FJ <<= 1, FJ |= 1 & ZJ, --UJ;
        JJ[cJ] = FJ << UJ & 255
      }
    }(FJ), cJ.reverse = function(JJ) {
      return FJ[255 & JJ] << 24 | FJ[JJ >>> 8 & 255] << 16 | FJ[JJ >>> 16 & 255] << 8 | FJ[JJ >>> 24 & 255]
    }, cJ.interleave2 = function(JJ, cJ) {
      return (JJ = 1431655765 & ((JJ = 858993459 & ((JJ = 252645135 & ((JJ = 16711935 & ((JJ &= 65535) | JJ << 8)) | JJ << 4)) | JJ << 2)) | JJ << 1)) | (cJ = 1431655765 & ((cJ = 858993459 & ((cJ = 252645135 & ((cJ = 16711935 & ((cJ &= 65535) | cJ << 8)) | cJ << 4)) | cJ << 2)) | cJ << 1)) << 1
    }, cJ.deinterleave2 = function(JJ, cJ) {
      return (JJ = 65535 & ((JJ = 16711935 & ((JJ = 252645135 & ((JJ = 858993459 & ((JJ = JJ >>> cJ & 1431655765) | JJ >>> 1)) | JJ >>> 2)) | JJ >>> 4)) | JJ >>> 16)) << 16 >> 16
    }, cJ.interleave3 = function(JJ, cJ, ZJ) {
      return JJ = 1227133513 & ((JJ = 3272356035 & ((JJ = 251719695 & ((JJ = 4278190335 & ((JJ &= 1023) | JJ << 16)) | JJ << 8)) | JJ << 4)) | JJ << 2), (JJ |= (cJ = 1227133513 & ((cJ = 3272356035 & ((cJ = 251719695 & ((cJ = 4278190335 & ((cJ &= 1023) | cJ << 16)) | cJ << 8)) | cJ << 4)) | cJ << 2)) << 1) | (ZJ = 1227133513 & ((ZJ = 3272356035 & ((ZJ = 251719695 & ((ZJ = 4278190335 & ((ZJ &= 1023) | ZJ << 16)) | ZJ << 8)) | ZJ << 4)) | ZJ << 2)) << 2
    }, cJ.deinterleave3 = function(JJ, cJ) {
      return (JJ = 1023 & ((JJ = 4278190335 & ((JJ = 251719695 & ((JJ = 3272356035 & ((JJ = JJ >>> cJ & 1227133513) | JJ >>> 2)) | JJ >>> 4)) | JJ >>> 8)) | JJ >>> 16)) << 22 >> 22
    }, cJ.nextCombination = function(JJ) {
      var cJ = JJ | JJ - 1;
      return cJ + 1 | (~cJ & -~cJ) - 1 >>> ZJ(JJ) + 1
    }
  },
  38606: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      emptyColumnHeight: () => mJ,
      loadHeatmapSchematic: () => QJ,
      readSchematicBlocks: () => EJ
    });
    var FJ = ZJ(3246),
      UJ = ZJ.n(FJ),
      eJ = ZJ(3226),
      XJ = ZJ(36711),
      AJ = ZJ(157),
      qJ = ZJ(8636);
    const jJ = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      YJ = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: jJ
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: jJ
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...jJ, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      hJ = UJ().Type.forSchema({
        type: "record",
        fields: YJ
      }),
      DJ = UJ().Type.forSchema({
        type: "record",
        fields: [...YJ, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...jJ, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: jJ
          }
        }]
      }),
      sJ = 2,
      nJ = 6,
      GJ = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      fJ = [150, 150, 150],
      xJ = 16,
      rJ = 4096,
      vJ = AJ.c.Kn,
      mJ = -2147483648;
    async function QJ(JJ) {
      const cJ = await EJ(new Uint8Array(await JJ.arrayBuffer()), await async function() {
        const {
          averageColors: JJ
        } = await ZJ.e(187).then((() => ZJ(33439))), cJ = new Map;
        return ZJ => {
          var FJ, UJ, eJ, XJ, AJ;
          const jJ = cJ.get(ZJ);
          if (void 0 !== jJ) return jJ;
          const YJ = null !== (FJ = null === (UJ = qJ.m[ZJ]) || void 0 === UJ ? void 0 : UJ.name) && void 0 !== FJ ? FJ : "",
            hJ = null !== (eJ = JJ[YJ]) && void 0 !== eJ ? eJ : JJ[YJ.split("|")[0]],
            DJ = GJ[YJ.split("|")[0]],
            sJ = null !== (XJ = null !== (AJ = null === hJ || void 0 === hJ ? void 0 : hJ[0]) && void 0 !== AJ ? AJ : DJ) && void 0 !== XJ ? XJ : 0 === (null === hJ || void 0 === hJ ? void 0 : hJ.length) ? null : fJ;
          return cJ.set(ZJ, sJ), sJ
        }
      }());
      return {
        surface: cJ.surface,
        topDown: KJ(cJ.columnTops)
      }
    }
    async function EJ(JJ, cJ) {
      var ZJ;
      if (JJ.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const FJ = new DataView(JJ.buffer, JJ.byteOffset, JJ.byteLength).getUint32(0, !0);
      if (FJ > nJ) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const UJ = (FJ >= sJ ? DJ : hJ).decode(eJ.fn.from(JJ.subarray(4)), 0).value;
      if (!UJ) throw new Error("The file isn't a schematic.");
      if (0 === UJ.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const AJ = null !== (ZJ = UJ.pasteOffset) && void 0 !== ZJ ? ZJ : {
          x: 0,
          y: 0,
          z: 0
        },
        qJ = [AJ.x, AJ.y, AJ.z].map((JJ => Math.floor(JJ / vJ))),
        jJ = UJ.chunkData.map((JJ => ({
          x: JJ.x + qJ[0],
          y: JJ.y + qJ[1],
          z: JJ.z + qJ[2],
          rle: JJ.rle
        }))),
        YJ = new Map;
      for (const [eJ, hJ] of jJ.entries()) {
        const JJ = new Uint16Array(vJ ** 3);
        XJ.decode(hJ.rle, JJ), YJ.set(`${hJ.x},${hJ.y},${hJ.z}`, JJ), eJ % xJ === xJ - 1 && await yJ()
      }
      const GJ = (JJ, cJ, ZJ) => JJ * vJ * vJ + cJ * vJ + ZJ,
        fJ = (JJ, cJ, ZJ) => {
          var FJ, UJ;
          const eJ = Math.floor(JJ / vJ),
            XJ = Math.floor(cJ / vJ),
            AJ = Math.floor(ZJ / vJ);
          return null !== (FJ = null === (UJ = YJ.get(`${eJ},${XJ},${AJ}`)) || void 0 === UJ ? void 0 : UJ[GJ(JJ - eJ * vJ, cJ - XJ * vJ, ZJ - AJ * vJ)]) && void 0 !== FJ ? FJ : 0
        },
        rJ = new Map,
        QJ = [],
        EJ = [];
      for (const [eJ, XJ] of jJ.entries()) {
        const JJ = YJ.get(`${XJ.x},${XJ.y},${XJ.z}`),
          ZJ = [XJ.x * vJ, XJ.y * vJ, XJ.z * vJ],
          FJ = (cJ, FJ, UJ) => cJ < 0 || FJ < 0 || UJ < 0 || cJ >= vJ || FJ >= vJ || UJ >= vJ ? fJ(ZJ[0] + cJ, ZJ[1] + FJ, ZJ[2] + UJ) : JJ[GJ(cJ, FJ, UJ)],
          UJ = `${XJ.x},${XJ.z}`;
        let AJ = rJ.get(UJ);
        void 0 === AJ && (AJ = {
          chunkX: XJ.x,
          chunkZ: XJ.z,
          heights: new Int32Array(vJ * vJ).fill(mJ),
          colours: new Uint8Array(vJ * vJ * 3)
        }, rJ.set(UJ, AJ));
        for (let eJ = 0; eJ < vJ; eJ++)
          for (let UJ = 0; UJ < vJ; UJ++)
            for (let XJ = 0; XJ < vJ; XJ++) {
              const qJ = JJ[GJ(eJ, UJ, XJ)];
              if (0 === qJ) continue;
              const jJ = ZJ[0] + eJ,
                YJ = ZJ[1] + UJ,
                hJ = ZJ[2] + XJ,
                DJ = cJ(qJ);
              if (null === DJ) continue;
              const sJ = XJ * vJ + eJ;
              YJ > AJ.heights[sJ] && (AJ.heights[sJ] = YJ, AJ.colours.set(DJ, 3 * sJ));
              !VJ(qJ) && (VJ(FJ(eJ + 1, UJ, XJ)) || VJ(FJ(eJ - 1, UJ, XJ)) || VJ(FJ(eJ, UJ + 1, XJ)) || VJ(FJ(eJ, UJ - 1, XJ)) || VJ(FJ(eJ, UJ, XJ + 1)) || VJ(FJ(eJ, UJ, XJ - 1))) && (QJ.push(jJ, YJ, hJ), EJ.push(DJ[0], DJ[1], DJ[2]))
            }
        eJ % xJ === xJ - 1 && await yJ()
      }
      if (0 === QJ.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: UJ.name,
        surface: {
          positions: Int32Array.from(QJ),
          colours: Uint8Array.from(EJ),
          count: QJ.length / 3
        },
        columnTops: [...rJ.values()]
      }
    }

    function VJ(JJ) {
      if (0 === JJ) return !0;
      const cJ = qJ.m[JJ];
      return void 0 === cJ || cJ.LD || cJ.transTex || !1 === cJ.solid
    }

    function KJ(JJ) {
      let cJ = 1 / 0,
        ZJ = -1 / 0,
        FJ = 1 / 0,
        UJ = -1 / 0;
      for (const {
          chunkX: nJ,
          chunkZ: GJ,
          heights: fJ
        }
        of JJ) fJ.forEach(((JJ, eJ) => {
        if (JJ === mJ) return;
        const XJ = nJ * vJ + eJ % vJ,
          AJ = GJ * vJ + Math.floor(eJ / vJ);
        cJ = Math.min(cJ, XJ), ZJ = Math.max(ZJ, XJ), FJ = Math.min(FJ, AJ), UJ = Math.max(UJ, AJ)
      }));
      const eJ = ZJ - cJ + 1,
        XJ = UJ - FJ + 1,
        AJ = Math.max(1, Math.ceil(eJ / rJ), Math.ceil(XJ / rJ)),
        qJ = Math.ceil(eJ / AJ),
        jJ = Math.ceil(XJ / AJ),
        YJ = document.createElement("canvas");
      YJ.width = qJ, YJ.height = jJ;
      const hJ = YJ.getContext("2d");
      if (!hJ) throw new Error("Couldn't draw the schematic from above.");
      const DJ = hJ.createImageData(qJ, jJ),
        sJ = new Int32Array(qJ * jJ).fill(mJ);
      for (const {
          chunkX: nJ,
          chunkZ: GJ,
          heights: fJ,
          colours: xJ
        }
        of JJ) fJ.forEach(((JJ, cJ) => {
        const UJ = nJ * vJ + cJ % vJ,
          eJ = GJ * vJ + Math.floor(cJ / vJ),
          XJ = Math.floor((eJ - FJ) / AJ) * qJ + Math.floor((ZJ - UJ) / AJ);
        JJ === mJ || JJ <= sJ[XJ] || (sJ[XJ] = JJ, DJ.data.set(xJ.subarray(3 * cJ, 3 * cJ + 3), 4 * XJ), DJ.data[4 * XJ + 3] = 255)
      }));
      return hJ.putImageData(DJ, 0, 0), {
        maxX: ZJ,
        minZ: FJ,
        width: qJ * AJ,
        depth: jJ * AJ,
        canvas: YJ
      }
    }

    function yJ() {
      return new Promise((JJ => {
        setTimeout(JJ, 0)
      }))
    }
  },
  8719: (JJ, cJ, ZJ) => {
    ZJ.d(cJ, {
      e: () => UJ,
      h: () => eJ
    });
    var FJ = ZJ(8687);
    const UJ = "Air",
      eJ = Object.freeze(new FJ.h(UJ, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);