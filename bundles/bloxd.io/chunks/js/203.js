export const id = 203;
export const ids = [203];
export const modules = {
  38881: (VV, eV, xV) => {
    var JV = xV(38888);

    function YV(VV) {
      for (var eV, xV, YV = 0, UV = VV.length, yV = 0; yV < VV.length;) {
        for (eV = VV[yV], xV = 0; yV < UV && VV[yV] === eV;) ++yV, ++xV;
        YV += JV.log2(xV) / 7 | 0, YV += JV.log2(eV >>> 0) / 7 | 0, YV += 2
      }
      return YV
    }
    eV.size = YV, eV.encode = function(VV, eV) {
      eV || (eV = new Uint8Array(YV(VV)));
      for (var xV, JV, UV = 0, yV = eV.length, pV = 0; pV < VV.length;) {
        for (xV = VV[pV], JV = 0; pV < VV.length && VV[pV] === xV;) ++pV, ++JV;
        for (; UV < yV && JV >= 128;) eV[UV++] = 128 + (127 & JV), JV >>>= 7;
        if (UV >= yV) throw new Error("RLE buffer overflow");
        for (eV[UV++] = JV, xV >>>= 0; UV < yV && xV >= 128;) eV[UV++] = 128 + (127 & xV), xV >>>= 7;
        if (UV >= yV) throw new Error("RLE buffer overflow");
        eV[UV++] = xV
      }
      return eV
    }, eV.decode = function(VV, eV) {
      for (var xV, JV, YV, UV, yV = eV.length, pV = VV.length, QV = 0, nV = 0; nV < pV;) {
        for (xV = 0, JV = 0; nV < pV && VV[nV] >= 128;) xV += (127 & VV[nV++]) << JV, JV += 7;
        if (xV += VV[nV++] << JV, nV >= pV) throw new Error("RLE buffer underrun");
        if (QV + xV > yV) throw new Error("Chunk buffer overflow");
        for (YV = 0, JV = 0; nV < pV && VV[nV] >= 128;) YV += (127 & VV[nV++]) << JV, JV += 7;
        if (nV >= pV) throw new Error("RLE buffer underrun");
        for (YV += VV[nV++] << JV, UV = 0; UV < xV; ++UV) eV[QV++] = YV
      }
      return eV
    }
  },
  38888: (VV, eV) => {
    function xV(VV) {
      var eV = 32;
      return (VV &= -VV) && eV--, 65535 & VV && (eV -= 16), 16711935 & VV && (eV -= 8), 252645135 & VV && (eV -= 4), 858993459 & VV && (eV -= 2), 1431655765 & VV && (eV -= 1), eV
    }
    eV.INT_BITS = 32, eV.INT_MAX = 2147483647, eV.INT_MIN = -1 << 31, eV.sign = function(VV) {
      return (VV > 0) - (VV < 0)
    }, eV.abs = function(VV) {
      var eV = VV >> 31;
      return (VV ^ eV) - eV
    }, eV.min = function(VV, eV) {
      return eV ^ (VV ^ eV) & -(VV < eV)
    }, eV.max = function(VV, eV) {
      return VV ^ (VV ^ eV) & -(VV < eV)
    }, eV.isPow2 = function(VV) {
      return !(VV & VV - 1) && !!VV
    }, eV.log2 = function(VV) {
      var eV, xV;
      return eV = (VV > 65535) << 4, eV |= xV = ((VV >>>= eV) > 255) << 3, eV |= xV = ((VV >>>= xV) > 15) << 2, (eV |= xV = ((VV >>>= xV) > 3) << 1) | (VV >>>= xV) >> 1
    }, eV.log10 = function(VV) {
      return VV >= 1e9 ? 9 : VV >= 1e8 ? 8 : VV >= 1e7 ? 7 : VV >= 1e6 ? 6 : VV >= 1e5 ? 5 : VV >= 1e4 ? 4 : VV >= 1e3 ? 3 : VV >= 100 ? 2 : VV >= 10 ? 1 : 0
    }, eV.popCount = function(VV) {
      return 16843009 * ((VV = (858993459 & (VV -= VV >>> 1 & 1431655765)) + (VV >>> 2 & 858993459)) + (VV >>> 4) & 252645135) >>> 24
    }, eV.countTrailingZeros = xV, eV.nextPow2 = function(VV) {
      return VV += 0 === VV, --VV, VV |= VV >>> 1, VV |= VV >>> 2, VV |= VV >>> 4, VV |= VV >>> 8, (VV |= VV >>> 16) + 1
    }, eV.prevPow2 = function(VV) {
      return VV |= VV >>> 1, VV |= VV >>> 2, VV |= VV >>> 4, VV |= VV >>> 8, (VV |= VV >>> 16) - (VV >>> 1)
    }, eV.parity = function(VV) {
      return VV ^= VV >>> 16, VV ^= VV >>> 8, VV ^= VV >>> 4, 27030 >>> (VV &= 15) & 1
    };
    var JV = new Array(256);
    ! function(VV) {
      for (var eV = 0; eV < 256; ++eV) {
        var xV = eV,
          JV = eV,
          YV = 7;
        for (xV >>>= 1; xV; xV >>>= 1) JV <<= 1, JV |= 1 & xV, --YV;
        VV[eV] = JV << YV & 255
      }
    }(JV), eV.reverse = function(VV) {
      return JV[255 & VV] << 24 | JV[VV >>> 8 & 255] << 16 | JV[VV >>> 16 & 255] << 8 | JV[VV >>> 24 & 255]
    }, eV.interleave2 = function(VV, eV) {
      return (VV = 1431655765 & ((VV = 858993459 & ((VV = 252645135 & ((VV = 16711935 & ((VV &= 65535) | VV << 8)) | VV << 4)) | VV << 2)) | VV << 1)) | (eV = 1431655765 & ((eV = 858993459 & ((eV = 252645135 & ((eV = 16711935 & ((eV &= 65535) | eV << 8)) | eV << 4)) | eV << 2)) | eV << 1)) << 1
    }, eV.deinterleave2 = function(VV, eV) {
      return (VV = 65535 & ((VV = 16711935 & ((VV = 252645135 & ((VV = 858993459 & ((VV = VV >>> eV & 1431655765) | VV >>> 1)) | VV >>> 2)) | VV >>> 4)) | VV >>> 16)) << 16 >> 16
    }, eV.interleave3 = function(VV, eV, xV) {
      return VV = 1227133513 & ((VV = 3272356035 & ((VV = 251719695 & ((VV = 4278190335 & ((VV &= 1023) | VV << 16)) | VV << 8)) | VV << 4)) | VV << 2), (VV |= (eV = 1227133513 & ((eV = 3272356035 & ((eV = 251719695 & ((eV = 4278190335 & ((eV &= 1023) | eV << 16)) | eV << 8)) | eV << 4)) | eV << 2)) << 1) | (xV = 1227133513 & ((xV = 3272356035 & ((xV = 251719695 & ((xV = 4278190335 & ((xV &= 1023) | xV << 16)) | xV << 8)) | xV << 4)) | xV << 2)) << 2
    }, eV.deinterleave3 = function(VV, eV) {
      return (VV = 1023 & ((VV = 4278190335 & ((VV = 251719695 & ((VV = 3272356035 & ((VV = VV >>> eV & 1227133513) | VV >>> 2)) | VV >>> 4)) | VV >>> 8)) | VV >>> 16)) << 22 >> 22
    }, eV.nextCombination = function(VV) {
      var eV = VV | VV - 1;
      return eV + 1 | (~eV & -~eV) - 1 >>> xV(VV) + 1
    }
  },
  41062: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      emptyColumnHeight: () => qV,
      loadHeatmapSchematic: () => tV,
      readSchematicBlocks: () => FV
    });
    var JV = xV(4172),
      YV = xV.n(JV),
      UV = xV(4148),
      yV = xV(38881),
      pV = xV(206),
      QV = xV(9820),
      nV = xV(40685);
    const wV = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      ZV = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: wV
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: wV
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...wV, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      vV = YV().Type.forSchema({
        type: "record",
        fields: ZV
      }),
      rV = YV().Type.forSchema({
        type: "record",
        fields: [...ZV, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...wV, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: wV
          }
        }]
      }),
      kV = 2,
      bV = 6,
      EV = 16,
      BV = 4096,
      jV = pV.f.PZ,
      qV = -2147483648;
    async function tV(VV) {
      const eV = await (0, nV.b)(),
        xV = await FV(new Uint8Array(await VV.arrayBuffer()), (VV => eV.get(VV)));
      return {
        surface: xV.surface,
        topDown: PV(xV.columnTops)
      }
    }
    async function FV(VV, eV) {
      var xV;
      if (VV.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const JV = new DataView(VV.buffer, VV.byteOffset, VV.byteLength).getUint32(0, !0);
      if (JV > bV) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const YV = (JV >= kV ? rV : vV).decode(UV.nZ.from(VV.subarray(4)), 0).value;
      if (!YV) throw new Error("The file isn't a schematic.");
      if (0 === YV.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const pV = null !== (xV = YV.pasteOffset) && void 0 !== xV ? xV : {
          x: 0,
          y: 0,
          z: 0
        },
        QV = [pV.x, pV.y, pV.z].map((VV => Math.floor(VV / jV))),
        nV = YV.chunkData.map((VV => ({
          x: VV.x + QV[0],
          y: VV.y + QV[1],
          z: VV.z + QV[2],
          rle: VV.rle
        }))),
        wV = new Map;
      for (const [UV, vV] of nV.entries()) {
        const VV = new Uint16Array(jV ** 3);
        yV.decode(vV.rle, VV), wV.set(`${vV.x},${vV.y},${vV.z}`, VV), UV % EV === EV - 1 && await AV()
      }
      const ZV = (VV, eV, xV) => VV * jV * jV + eV * jV + xV,
        BV = (VV, eV, xV) => {
          var JV, YV;
          const UV = Math.floor(VV / jV),
            yV = Math.floor(eV / jV),
            pV = Math.floor(xV / jV);
          return null !== (JV = null === (YV = wV.get(`${UV},${yV},${pV}`)) || void 0 === YV ? void 0 : YV[ZV(VV - UV * jV, eV - yV * jV, xV - pV * jV)]) && void 0 !== JV ? JV : 0
        },
        tV = new Map,
        FV = [],
        PV = [];
      for (const [UV, yV] of nV.entries()) {
        const VV = wV.get(`${yV.x},${yV.y},${yV.z}`),
          xV = [yV.x * jV, yV.y * jV, yV.z * jV],
          JV = (eV, JV, YV) => eV < 0 || JV < 0 || YV < 0 || eV >= jV || JV >= jV || YV >= jV ? BV(xV[0] + eV, xV[1] + JV, xV[2] + YV) : VV[ZV(eV, JV, YV)],
          YV = `${yV.x},${yV.z}`;
        let pV = tV.get(YV);
        void 0 === pV && (pV = {
          chunkX: yV.x,
          chunkZ: yV.z,
          heights: new Int32Array(jV * jV).fill(qV),
          colours: new Uint8Array(jV * jV * 3)
        }, tV.set(YV, pV));
        for (let UV = 0; UV < jV; UV++)
          for (let YV = 0; YV < jV; YV++)
            for (let yV = 0; yV < jV; yV++) {
              const QV = VV[ZV(UV, YV, yV)];
              if (0 === QV) continue;
              const nV = xV[0] + UV,
                wV = xV[1] + YV,
                vV = xV[2] + yV,
                rV = eV(QV);
              if (null === rV) continue;
              const kV = yV * jV + UV;
              wV > pV.heights[kV] && (pV.heights[kV] = wV, pV.colours.set(rV, 3 * kV));
              !TV(QV) && (TV(JV(UV + 1, YV, yV)) || TV(JV(UV - 1, YV, yV)) || TV(JV(UV, YV + 1, yV)) || TV(JV(UV, YV - 1, yV)) || TV(JV(UV, YV, yV + 1)) || TV(JV(UV, YV, yV - 1))) && (FV.push(nV, wV, vV), PV.push(rV[0], rV[1], rV[2]))
            }
        UV % EV === EV - 1 && await AV()
      }
      if (0 === FV.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: YV.name,
        surface: {
          positions: Int32Array.from(FV),
          colours: Uint8Array.from(PV),
          count: FV.length / 3
        },
        columnTops: [...tV.values()]
      }
    }

    function TV(VV) {
      if (0 === VV) return !0;
      const eV = QV.k[VV];
      return void 0 === eV || eV.Cr || eV.transTex || !1 === eV.solid
    }

    function PV(VV) {
      let eV = 1 / 0,
        xV = -1 / 0,
        JV = 1 / 0,
        YV = -1 / 0;
      for (const {
          chunkX: kV,
          chunkZ: bV,
          heights: EV
        }
        of VV) EV.forEach(((VV, UV) => {
        if (VV === qV) return;
        const yV = kV * jV + UV % jV,
          pV = bV * jV + Math.floor(UV / jV);
        eV = Math.min(eV, yV), xV = Math.max(xV, yV), JV = Math.min(JV, pV), YV = Math.max(YV, pV)
      }));
      const UV = xV - eV + 1,
        yV = YV - JV + 1,
        pV = Math.max(1, Math.ceil(UV / BV), Math.ceil(yV / BV)),
        QV = Math.ceil(UV / pV),
        nV = Math.ceil(yV / pV),
        wV = document.createElement("canvas");
      wV.width = QV, wV.height = nV;
      const ZV = wV.getContext("2d");
      if (!ZV) throw new Error("Couldn't draw the schematic from above.");
      const vV = ZV.createImageData(QV, nV),
        rV = new Int32Array(QV * nV).fill(qV);
      for (const {
          chunkX: kV,
          chunkZ: bV,
          heights: EV,
          colours: BV
        }
        of VV) EV.forEach(((VV, eV) => {
        const YV = kV * jV + eV % jV,
          UV = bV * jV + Math.floor(eV / jV),
          yV = Math.floor((UV - JV) / pV) * QV + Math.floor((xV - YV) / pV);
        VV === qV || VV <= rV[yV] || (rV[yV] = VV, vV.data.set(BV.subarray(3 * eV, 3 * eV + 3), 4 * yV), vV.data[4 * yV + 3] = 255)
      }));
      return ZV.putImageData(vV, 0, 0), {
        maxX: xV,
        minZ: JV,
        width: QV * pV,
        depth: nV * pV,
        canvas: wV
      }
    }

    function AV() {
      return new Promise((VV => {
        setTimeout(VV, 0)
      }))
    }
  },
  40685: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => YV
    });
    var JV = xV(40692);
    async function YV() {
      const {
        averageColors: VV
      } = await xV.e(231).then((() => xV(35423)));
      return new JV.b(VV)
    }
  },
  40692: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => pV,
      e: () => yV
    });
    var JV = xV(9820);
    const YV = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      UV = [150, 150, 150],
      yV = -2147483648;
    class pV {
      constructor(VV) {
        this.averages = VV, this.byId = new Map
      }
      get(VV) {
        var eV, xV, yV, pV, QV;
        const nV = this.byId.get(VV);
        if (void 0 !== nV) return nV;
        const wV = null !== (eV = null === (xV = JV.k[VV]) || void 0 === xV ? void 0 : xV.name) && void 0 !== eV ? eV : "",
          ZV = wV.split("|")[0],
          vV = null !== (yV = this.averages[wV]) && void 0 !== yV ? yV : this.averages[ZV],
          rV = null !== (pV = null !== (QV = null === vV || void 0 === vV ? void 0 : vV[0]) && void 0 !== QV ? QV : YV[ZV]) && void 0 !== pV ? pV : 0 === (null === vV || void 0 === vV ? void 0 : vV.length) ? null : UV;
        return this.byId.set(VV, rV), rV
      }
      getDrawnIds() {
        const VV = new Uint8Array(65536);
        for (let eV = 1; eV < 65536; eV++) void 0 !== JV.k[eV] && null !== this.get(eV) && (VV[eV] = 1);
        return VV
      }
      drawPixel(VV, eV, xV, JV, YV, UV) {
        const pV = function(VV, eV, xV) {
            const JV = VV - eV + (VV - xV);
            return Math.max(.65, Math.min(1.2, .97 + .055 * JV))
          }(JV, YV === yV ? JV : YV, UV === yV ? JV : UV),
          QV = this.get(xV);
        VV[eV] = QV[0] * pV, VV[eV + 1] = QV[1] * pV, VV[eV + 2] = QV[2] * pV, VV[eV + 3] = 255
      }
    }
  },
  9922: (VV, eV, xV) => {
    xV.d(eV, {
      d: () => YV,
      f: () => UV
    });
    var JV = xV(9861);
    const YV = "Air",
      UV = Object.freeze(new JV.g(YV, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);