export const id = 201;
export const ids = [201];
export const modules = {
  38473: (UU, XU, zU) => {
    var cU = zU(38476);

    function yU(UU) {
      for (var XU, zU, yU = 0, QU = UU.length, AU = 0; AU < UU.length;) {
        for (XU = UU[AU], zU = 0; AU < QU && UU[AU] === XU;) ++AU, ++zU;
        yU += cU.log2(zU) / 7 | 0, yU += cU.log2(XU >>> 0) / 7 | 0, yU += 2
      }
      return yU
    }
    XU.size = yU, XU.encode = function(UU, XU) {
      XU || (XU = new Uint8Array(yU(UU)));
      for (var zU, cU, QU = 0, AU = XU.length, FU = 0; FU < UU.length;) {
        for (zU = UU[FU], cU = 0; FU < UU.length && UU[FU] === zU;) ++FU, ++cU;
        for (; QU < AU && cU >= 128;) XU[QU++] = 128 + (127 & cU), cU >>>= 7;
        if (QU >= AU) throw new Error("RLE buffer overflow");
        for (XU[QU++] = cU, zU >>>= 0; QU < AU && zU >= 128;) XU[QU++] = 128 + (127 & zU), zU >>>= 7;
        if (QU >= AU) throw new Error("RLE buffer overflow");
        XU[QU++] = zU
      }
      return XU
    }, XU.decode = function(UU, XU) {
      for (var zU, cU, yU, QU, AU = XU.length, FU = UU.length, oU = 0, DU = 0; DU < FU;) {
        for (zU = 0, cU = 0; DU < FU && UU[DU] >= 128;) zU += (127 & UU[DU++]) << cU, cU += 7;
        if (zU += UU[DU++] << cU, DU >= FU) throw new Error("RLE buffer underrun");
        if (oU + zU > AU) throw new Error("Chunk buffer overflow");
        for (yU = 0, cU = 0; DU < FU && UU[DU] >= 128;) yU += (127 & UU[DU++]) << cU, cU += 7;
        if (DU >= FU) throw new Error("RLE buffer underrun");
        for (yU += UU[DU++] << cU, QU = 0; QU < zU; ++QU) XU[oU++] = yU
      }
      return XU
    }
  },
  38476: (UU, XU) => {
    function zU(UU) {
      var XU = 32;
      return (UU &= -UU) && XU--, 65535 & UU && (XU -= 16), 16711935 & UU && (XU -= 8), 252645135 & UU && (XU -= 4), 858993459 & UU && (XU -= 2), 1431655765 & UU && (XU -= 1), XU
    }
    XU.INT_BITS = 32, XU.INT_MAX = 2147483647, XU.INT_MIN = -1 << 31, XU.sign = function(UU) {
      return (UU > 0) - (UU < 0)
    }, XU.abs = function(UU) {
      var XU = UU >> 31;
      return (UU ^ XU) - XU
    }, XU.min = function(UU, XU) {
      return XU ^ (UU ^ XU) & -(UU < XU)
    }, XU.max = function(UU, XU) {
      return UU ^ (UU ^ XU) & -(UU < XU)
    }, XU.isPow2 = function(UU) {
      return !(UU & UU - 1) && !!UU
    }, XU.log2 = function(UU) {
      var XU, zU;
      return XU = (UU > 65535) << 4, XU |= zU = ((UU >>>= XU) > 255) << 3, XU |= zU = ((UU >>>= zU) > 15) << 2, (XU |= zU = ((UU >>>= zU) > 3) << 1) | (UU >>>= zU) >> 1
    }, XU.log10 = function(UU) {
      return UU >= 1e9 ? 9 : UU >= 1e8 ? 8 : UU >= 1e7 ? 7 : UU >= 1e6 ? 6 : UU >= 1e5 ? 5 : UU >= 1e4 ? 4 : UU >= 1e3 ? 3 : UU >= 100 ? 2 : UU >= 10 ? 1 : 0
    }, XU.popCount = function(UU) {
      return 16843009 * ((UU = (858993459 & (UU -= UU >>> 1 & 1431655765)) + (UU >>> 2 & 858993459)) + (UU >>> 4) & 252645135) >>> 24
    }, XU.countTrailingZeros = zU, XU.nextPow2 = function(UU) {
      return UU += 0 === UU, --UU, UU |= UU >>> 1, UU |= UU >>> 2, UU |= UU >>> 4, UU |= UU >>> 8, (UU |= UU >>> 16) + 1
    }, XU.prevPow2 = function(UU) {
      return UU |= UU >>> 1, UU |= UU >>> 2, UU |= UU >>> 4, UU |= UU >>> 8, (UU |= UU >>> 16) - (UU >>> 1)
    }, XU.parity = function(UU) {
      return UU ^= UU >>> 16, UU ^= UU >>> 8, UU ^= UU >>> 4, 27030 >>> (UU &= 15) & 1
    };
    var cU = new Array(256);
    ! function(UU) {
      for (var XU = 0; XU < 256; ++XU) {
        var zU = XU,
          cU = XU,
          yU = 7;
        for (zU >>>= 1; zU; zU >>>= 1) cU <<= 1, cU |= 1 & zU, --yU;
        UU[XU] = cU << yU & 255
      }
    }(cU), XU.reverse = function(UU) {
      return cU[255 & UU] << 24 | cU[UU >>> 8 & 255] << 16 | cU[UU >>> 16 & 255] << 8 | cU[UU >>> 24 & 255]
    }, XU.interleave2 = function(UU, XU) {
      return (UU = 1431655765 & ((UU = 858993459 & ((UU = 252645135 & ((UU = 16711935 & ((UU &= 65535) | UU << 8)) | UU << 4)) | UU << 2)) | UU << 1)) | (XU = 1431655765 & ((XU = 858993459 & ((XU = 252645135 & ((XU = 16711935 & ((XU &= 65535) | XU << 8)) | XU << 4)) | XU << 2)) | XU << 1)) << 1
    }, XU.deinterleave2 = function(UU, XU) {
      return (UU = 65535 & ((UU = 16711935 & ((UU = 252645135 & ((UU = 858993459 & ((UU = UU >>> XU & 1431655765) | UU >>> 1)) | UU >>> 2)) | UU >>> 4)) | UU >>> 16)) << 16 >> 16
    }, XU.interleave3 = function(UU, XU, zU) {
      return UU = 1227133513 & ((UU = 3272356035 & ((UU = 251719695 & ((UU = 4278190335 & ((UU &= 1023) | UU << 16)) | UU << 8)) | UU << 4)) | UU << 2), (UU |= (XU = 1227133513 & ((XU = 3272356035 & ((XU = 251719695 & ((XU = 4278190335 & ((XU &= 1023) | XU << 16)) | XU << 8)) | XU << 4)) | XU << 2)) << 1) | (zU = 1227133513 & ((zU = 3272356035 & ((zU = 251719695 & ((zU = 4278190335 & ((zU &= 1023) | zU << 16)) | zU << 8)) | zU << 4)) | zU << 2)) << 2
    }, XU.deinterleave3 = function(UU, XU) {
      return (UU = 1023 & ((UU = 4278190335 & ((UU = 251719695 & ((UU = 3272356035 & ((UU = UU >>> XU & 1227133513) | UU >>> 2)) | UU >>> 4)) | UU >>> 8)) | UU >>> 16)) << 22 >> 22
    }, XU.nextCombination = function(UU) {
      var XU = UU | UU - 1;
      return XU + 1 | (~XU & -~XU) - 1 >>> zU(UU) + 1
    }
  },
  40913: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      emptyColumnHeight: () => GU,
      loadHeatmapSchematic: () => BU,
      readSchematicBlocks: () => ZU
    });
    var cU = zU(4142),
      yU = zU.n(cU),
      QU = zU(4122),
      AU = zU(38473),
      FU = zU(212),
      oU = zU(9782),
      DU = zU(40303);
    const EU = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      YU = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: EU
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: EU
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...EU, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      NU = yU().Type.forSchema({
        type: "record",
        fields: YU
      }),
      IU = yU().Type.forSchema({
        type: "record",
        fields: [...YU, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...EU, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: EU
          }
        }]
      }),
      pU = 2,
      aU = 6,
      tU = 16,
      gU = 4096,
      kU = FU.f.aY,
      GU = -2147483648;
    async function BU(UU) {
      const XU = await (0, DU.d)(),
        zU = await ZU(new Uint8Array(await UU.arrayBuffer()), (UU => XU.get(UU)));
      return {
        surface: zU.surface,
        topDown: PU(zU.columnTops)
      }
    }
    async function ZU(UU, XU) {
      var zU;
      if (UU.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const cU = new DataView(UU.buffer, UU.byteOffset, UU.byteLength).getUint32(0, !0);
      if (cU > aU) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const yU = (cU >= pU ? IU : NU).decode(QU.XY.from(UU.subarray(4)), 0).value;
      if (!yU) throw new Error("The file isn't a schematic.");
      if (0 === yU.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const FU = null !== (zU = yU.pasteOffset) && void 0 !== zU ? zU : {
          x: 0,
          y: 0,
          z: 0
        },
        oU = [FU.x, FU.y, FU.z].map((UU => Math.floor(UU / kU))),
        DU = yU.chunkData.map((UU => ({
          x: UU.x + oU[0],
          y: UU.y + oU[1],
          z: UU.z + oU[2],
          rle: UU.rle
        }))),
        EU = new Map;
      for (const [QU, NU] of DU.entries()) {
        const UU = new Uint16Array(kU ** 3);
        AU.decode(NU.rle, UU), EU.set(`${NU.x},${NU.y},${NU.z}`, UU), QU % tU === tU - 1 && await WU()
      }
      const YU = (UU, XU, zU) => UU * kU * kU + XU * kU + zU,
        gU = (UU, XU, zU) => {
          var cU, yU;
          const QU = Math.floor(UU / kU),
            AU = Math.floor(XU / kU),
            FU = Math.floor(zU / kU);
          return null !== (cU = null === (yU = EU.get(`${QU},${AU},${FU}`)) || void 0 === yU ? void 0 : yU[YU(UU - QU * kU, XU - AU * kU, zU - FU * kU)]) && void 0 !== cU ? cU : 0
        },
        BU = new Map,
        ZU = [],
        PU = [];
      for (const [QU, AU] of DU.entries()) {
        const UU = EU.get(`${AU.x},${AU.y},${AU.z}`),
          zU = [AU.x * kU, AU.y * kU, AU.z * kU],
          cU = (XU, cU, yU) => XU < 0 || cU < 0 || yU < 0 || XU >= kU || cU >= kU || yU >= kU ? gU(zU[0] + XU, zU[1] + cU, zU[2] + yU) : UU[YU(XU, cU, yU)],
          yU = `${AU.x},${AU.z}`;
        let FU = BU.get(yU);
        void 0 === FU && (FU = {
          chunkX: AU.x,
          chunkZ: AU.z,
          heights: new Int32Array(kU * kU).fill(GU),
          colours: new Uint8Array(kU * kU * 3)
        }, BU.set(yU, FU));
        for (let QU = 0; QU < kU; QU++)
          for (let yU = 0; yU < kU; yU++)
            for (let AU = 0; AU < kU; AU++) {
              const oU = UU[YU(QU, yU, AU)];
              if (0 === oU) continue;
              const DU = zU[0] + QU,
                EU = zU[1] + yU,
                NU = zU[2] + AU,
                IU = XU(oU);
              if (null === IU) continue;
              const pU = AU * kU + QU;
              EU > FU.heights[pU] && (FU.heights[pU] = EU, FU.colours.set(IU, 3 * pU));
              !RU(oU) && (RU(cU(QU + 1, yU, AU)) || RU(cU(QU - 1, yU, AU)) || RU(cU(QU, yU + 1, AU)) || RU(cU(QU, yU - 1, AU)) || RU(cU(QU, yU, AU + 1)) || RU(cU(QU, yU, AU - 1))) && (ZU.push(DU, EU, NU), PU.push(IU[0], IU[1], IU[2]))
            }
        QU % tU === tU - 1 && await WU()
      }
      if (0 === ZU.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: yU.name,
        surface: {
          positions: Int32Array.from(ZU),
          colours: Uint8Array.from(PU),
          count: ZU.length / 3
        },
        columnTops: [...BU.values()]
      }
    }

    function RU(UU) {
      if (0 === UU) return !0;
      const XU = oU.h[UU];
      return void 0 === XU || XU.BI || XU.transTex || !1 === XU.solid
    }

    function PU(UU) {
      let XU = 1 / 0,
        zU = -1 / 0,
        cU = 1 / 0,
        yU = -1 / 0;
      for (const {
          chunkX: pU,
          chunkZ: aU,
          heights: tU
        }
        of UU) tU.forEach(((UU, QU) => {
        if (UU === GU) return;
        const AU = pU * kU + QU % kU,
          FU = aU * kU + Math.floor(QU / kU);
        XU = Math.min(XU, AU), zU = Math.max(zU, AU), cU = Math.min(cU, FU), yU = Math.max(yU, FU)
      }));
      const QU = zU - XU + 1,
        AU = yU - cU + 1,
        FU = Math.max(1, Math.ceil(QU / gU), Math.ceil(AU / gU)),
        oU = Math.ceil(QU / FU),
        DU = Math.ceil(AU / FU),
        EU = document.createElement("canvas");
      EU.width = oU, EU.height = DU;
      const YU = EU.getContext("2d");
      if (!YU) throw new Error("Couldn't draw the schematic from above.");
      const NU = YU.createImageData(oU, DU),
        IU = new Int32Array(oU * DU).fill(GU);
      for (const {
          chunkX: pU,
          chunkZ: aU,
          heights: tU,
          colours: gU
        }
        of UU) tU.forEach(((UU, XU) => {
        const yU = pU * kU + XU % kU,
          QU = aU * kU + Math.floor(XU / kU),
          AU = Math.floor((QU - cU) / FU) * oU + Math.floor((zU - yU) / FU);
        UU === GU || UU <= IU[AU] || (IU[AU] = UU, NU.data.set(gU.subarray(3 * XU, 3 * XU + 3), 4 * AU), NU.data[4 * AU + 3] = 255)
      }));
      return YU.putImageData(NU, 0, 0), {
        maxX: zU,
        minZ: cU,
        width: oU * FU,
        depth: DU * FU,
        canvas: EU
      }
    }

    function WU() {
      return new Promise((UU => {
        setTimeout(UU, 0)
      }))
    }
  },
  40303: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => yU
    });
    var cU = zU(40307);
    async function yU() {
      const {
        averageColors: UU
      } = await zU.e(222).then((() => zU(34975)));
      return new cU.c(UU)
    }
  },
  40307: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => FU,
      f: () => AU
    });
    var cU = zU(9782);
    const yU = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      QU = [150, 150, 150],
      AU = -2147483648;
    class FU {
      constructor(UU) {
        this.averages = UU, this.byId = new Map
      }
      get(UU) {
        var XU, zU, AU, FU, oU;
        const DU = this.byId.get(UU);
        if (void 0 !== DU) return DU;
        const EU = null !== (XU = null === (zU = cU.h[UU]) || void 0 === zU ? void 0 : zU.name) && void 0 !== XU ? XU : "",
          YU = EU.split("|")[0],
          NU = null !== (AU = this.averages[EU]) && void 0 !== AU ? AU : this.averages[YU],
          IU = null !== (FU = null !== (oU = null === NU || void 0 === NU ? void 0 : NU[0]) && void 0 !== oU ? oU : yU[YU]) && void 0 !== FU ? FU : 0 === (null === NU || void 0 === NU ? void 0 : NU.length) ? null : QU;
        return this.byId.set(UU, IU), IU
      }
      getDrawnIds() {
        const UU = new Uint8Array(65536);
        for (let XU = 1; XU < 65536; XU++) void 0 !== cU.h[XU] && null !== this.get(XU) && (UU[XU] = 1);
        return UU
      }
      drawPixel(UU, XU, zU, cU, yU, QU) {
        const FU = function(UU, XU, zU) {
            const cU = UU - XU + (UU - zU);
            return Math.max(.65, Math.min(1.2, .97 + .055 * cU))
          }(cU, yU === AU ? cU : yU, QU === AU ? cU : QU),
          oU = this.get(zU);
        UU[XU] = oU[0] * FU, UU[XU + 1] = oU[1] * FU, UU[XU + 2] = oU[2] * FU, UU[XU + 3] = 255
      }
    }
  },
  9894: (UU, XU, zU) => {
    zU.d(XU, {
      c: () => yU,
      f: () => QU
    });
    var cU = zU(9834);
    const yU = "Air",
      QU = Object.freeze(new cU.g(yU, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);