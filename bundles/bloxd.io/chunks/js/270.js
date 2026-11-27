export const id = 270;
export const ids = [270];
export const modules = {
  38891: (RR, JR, GR) => {
    var yR = GR(38898);

    function tR(RR) {
      for (var JR, GR, tR = 0, uR = RR.length, ZR = 0; ZR < RR.length;) {
        for (JR = RR[ZR], GR = 0; ZR < uR && RR[ZR] === JR;) ++ZR, ++GR;
        tR += yR.log2(GR) / 7 | 0, tR += yR.log2(JR >>> 0) / 7 | 0, tR += 2
      }
      return tR
    }
    JR.size = tR, JR.encode = function(RR, JR) {
      JR || (JR = new Uint8Array(tR(RR)));
      for (var GR, yR, uR = 0, ZR = JR.length, qR = 0; qR < RR.length;) {
        for (GR = RR[qR], yR = 0; qR < RR.length && RR[qR] === GR;) ++qR, ++yR;
        for (; uR < ZR && yR >= 128;) JR[uR++] = 128 + (127 & yR), yR >>>= 7;
        if (uR >= ZR) throw new Error("RLE buffer overflow");
        for (JR[uR++] = yR, GR >>>= 0; uR < ZR && GR >= 128;) JR[uR++] = 128 + (127 & GR), GR >>>= 7;
        if (uR >= ZR) throw new Error("RLE buffer overflow");
        JR[uR++] = GR
      }
      return JR
    }, JR.decode = function(RR, JR) {
      for (var GR, yR, tR, uR, ZR = JR.length, qR = RR.length, iR = 0, fR = 0; fR < qR;) {
        for (GR = 0, yR = 0; fR < qR && RR[fR] >= 128;) GR += (127 & RR[fR++]) << yR, yR += 7;
        if (GR += RR[fR++] << yR, fR >= qR) throw new Error("RLE buffer underrun");
        if (iR + GR > ZR) throw new Error("Chunk buffer overflow");
        for (tR = 0, yR = 0; fR < qR && RR[fR] >= 128;) tR += (127 & RR[fR++]) << yR, yR += 7;
        if (fR >= qR) throw new Error("RLE buffer underrun");
        for (tR += RR[fR++] << yR, uR = 0; uR < GR; ++uR) JR[iR++] = tR
      }
      return JR
    }
  },
  38898: (RR, JR) => {
    function GR(RR) {
      var JR = 32;
      return (RR &= -RR) && JR--, 65535 & RR && (JR -= 16), 16711935 & RR && (JR -= 8), 252645135 & RR && (JR -= 4), 858993459 & RR && (JR -= 2), 1431655765 & RR && (JR -= 1), JR
    }
    JR.INT_BITS = 32, JR.INT_MAX = 2147483647, JR.INT_MIN = -1 << 31, JR.sign = function(RR) {
      return (RR > 0) - (RR < 0)
    }, JR.abs = function(RR) {
      var JR = RR >> 31;
      return (RR ^ JR) - JR
    }, JR.min = function(RR, JR) {
      return JR ^ (RR ^ JR) & -(RR < JR)
    }, JR.max = function(RR, JR) {
      return RR ^ (RR ^ JR) & -(RR < JR)
    }, JR.isPow2 = function(RR) {
      return !(RR & RR - 1) && !!RR
    }, JR.log2 = function(RR) {
      var JR, GR;
      return JR = (RR > 65535) << 4, JR |= GR = ((RR >>>= JR) > 255) << 3, JR |= GR = ((RR >>>= GR) > 15) << 2, (JR |= GR = ((RR >>>= GR) > 3) << 1) | (RR >>>= GR) >> 1
    }, JR.log10 = function(RR) {
      return RR >= 1e9 ? 9 : RR >= 1e8 ? 8 : RR >= 1e7 ? 7 : RR >= 1e6 ? 6 : RR >= 1e5 ? 5 : RR >= 1e4 ? 4 : RR >= 1e3 ? 3 : RR >= 100 ? 2 : RR >= 10 ? 1 : 0
    }, JR.popCount = function(RR) {
      return 16843009 * ((RR = (858993459 & (RR -= RR >>> 1 & 1431655765)) + (RR >>> 2 & 858993459)) + (RR >>> 4) & 252645135) >>> 24
    }, JR.countTrailingZeros = GR, JR.nextPow2 = function(RR) {
      return RR += 0 === RR, --RR, RR |= RR >>> 1, RR |= RR >>> 2, RR |= RR >>> 4, RR |= RR >>> 8, (RR |= RR >>> 16) + 1
    }, JR.prevPow2 = function(RR) {
      return RR |= RR >>> 1, RR |= RR >>> 2, RR |= RR >>> 4, RR |= RR >>> 8, (RR |= RR >>> 16) - (RR >>> 1)
    }, JR.parity = function(RR) {
      return RR ^= RR >>> 16, RR ^= RR >>> 8, RR ^= RR >>> 4, 27030 >>> (RR &= 15) & 1
    };
    var yR = new Array(256);
    ! function(RR) {
      for (var JR = 0; JR < 256; ++JR) {
        var GR = JR,
          yR = JR,
          tR = 7;
        for (GR >>>= 1; GR; GR >>>= 1) yR <<= 1, yR |= 1 & GR, --tR;
        RR[JR] = yR << tR & 255
      }
    }(yR), JR.reverse = function(RR) {
      return yR[255 & RR] << 24 | yR[RR >>> 8 & 255] << 16 | yR[RR >>> 16 & 255] << 8 | yR[RR >>> 24 & 255]
    }, JR.interleave2 = function(RR, JR) {
      return (RR = 1431655765 & ((RR = 858993459 & ((RR = 252645135 & ((RR = 16711935 & ((RR &= 65535) | RR << 8)) | RR << 4)) | RR << 2)) | RR << 1)) | (JR = 1431655765 & ((JR = 858993459 & ((JR = 252645135 & ((JR = 16711935 & ((JR &= 65535) | JR << 8)) | JR << 4)) | JR << 2)) | JR << 1)) << 1
    }, JR.deinterleave2 = function(RR, JR) {
      return (RR = 65535 & ((RR = 16711935 & ((RR = 252645135 & ((RR = 858993459 & ((RR = RR >>> JR & 1431655765) | RR >>> 1)) | RR >>> 2)) | RR >>> 4)) | RR >>> 16)) << 16 >> 16
    }, JR.interleave3 = function(RR, JR, GR) {
      return RR = 1227133513 & ((RR = 3272356035 & ((RR = 251719695 & ((RR = 4278190335 & ((RR &= 1023) | RR << 16)) | RR << 8)) | RR << 4)) | RR << 2), (RR |= (JR = 1227133513 & ((JR = 3272356035 & ((JR = 251719695 & ((JR = 4278190335 & ((JR &= 1023) | JR << 16)) | JR << 8)) | JR << 4)) | JR << 2)) << 1) | (GR = 1227133513 & ((GR = 3272356035 & ((GR = 251719695 & ((GR = 4278190335 & ((GR &= 1023) | GR << 16)) | GR << 8)) | GR << 4)) | GR << 2)) << 2
    }, JR.deinterleave3 = function(RR, JR) {
      return (RR = 1023 & ((RR = 4278190335 & ((RR = 251719695 & ((RR = 3272356035 & ((RR = RR >>> JR & 1227133513) | RR >>> 2)) | RR >>> 4)) | RR >>> 8)) | RR >>> 16)) << 22 >> 22
    }, JR.nextCombination = function(RR) {
      var JR = RR | RR - 1;
      return JR + 1 | (~JR & -~JR) - 1 >>> GR(RR) + 1
    }
  },
  41342: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      emptyColumnHeight: () => WR,
      loadHeatmapSchematic: () => AR,
      readSchematicBlocks: () => CR
    });
    var yR = GR(2537),
      tR = GR.n(yR),
      uR = GR(2502),
      ZR = GR(38891),
      qR = GR(203),
      iR = GR(5844),
      fR = GR(40752);
    const VR = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      KR = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: VR
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: VR
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...VR, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      wR = tR().Type.forSchema({
        type: "record",
        fields: KR
      }),
      rR = tR().Type.forSchema({
        type: "record",
        fields: [...KR, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...VR, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: VR
          }
        }]
      }),
      eR = 2,
      aR = 6,
      LR = 16,
      nR = 4096,
      UR = qR.g.LK,
      WR = -2147483648;
    async function AR(RR) {
      const JR = await (0, fR.e)(),
        GR = await CR(new Uint8Array(await RR.arrayBuffer()), (RR => JR.get(RR)));
      return {
        surface: GR.surface,
        topDown: MR(GR.columnTops)
      }
    }
    async function CR(RR, JR) {
      var GR;
      if (RR.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const yR = new DataView(RR.buffer, RR.byteOffset, RR.byteLength).getUint32(0, !0);
      if (yR > aR) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const tR = (yR >= eR ? rR : wR).decode(uR.GK.from(RR.subarray(4)), 0).value;
      if (!tR) throw new Error("The file isn't a schematic.");
      if (0 === tR.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const qR = null !== (GR = tR.pasteOffset) && void 0 !== GR ? GR : {
          x: 0,
          y: 0,
          z: 0
        },
        iR = [qR.x, qR.y, qR.z].map((RR => Math.floor(RR / UR))),
        fR = tR.chunkData.map((RR => ({
          x: RR.x + iR[0],
          y: RR.y + iR[1],
          z: RR.z + iR[2],
          rle: RR.rle
        }))),
        VR = new Map;
      for (const [uR, wR] of fR.entries()) {
        const RR = new Uint16Array(UR ** 3);
        ZR.decode(wR.rle, RR), VR.set(`${wR.x},${wR.y},${wR.z}`, RR), uR % LR === LR - 1 && await BR()
      }
      const KR = (RR, JR, GR) => RR * UR * UR + JR * UR + GR,
        nR = (RR, JR, GR) => {
          var yR, tR;
          const uR = Math.floor(RR / UR),
            ZR = Math.floor(JR / UR),
            qR = Math.floor(GR / UR);
          return null !== (yR = null === (tR = VR.get(`${uR},${ZR},${qR}`)) || void 0 === tR ? void 0 : tR[KR(RR - uR * UR, JR - ZR * UR, GR - qR * UR)]) && void 0 !== yR ? yR : 0
        },
        AR = new Map,
        CR = [],
        MR = [];
      for (const [uR, ZR] of fR.entries()) {
        const RR = VR.get(`${ZR.x},${ZR.y},${ZR.z}`),
          GR = [ZR.x * UR, ZR.y * UR, ZR.z * UR],
          yR = (JR, yR, tR) => JR < 0 || yR < 0 || tR < 0 || JR >= UR || yR >= UR || tR >= UR ? nR(GR[0] + JR, GR[1] + yR, GR[2] + tR) : RR[KR(JR, yR, tR)],
          tR = `${ZR.x},${ZR.z}`;
        let qR = AR.get(tR);
        void 0 === qR && (qR = {
          chunkX: ZR.x,
          chunkZ: ZR.z,
          heights: new Int32Array(UR * UR).fill(WR),
          colours: new Uint8Array(UR * UR * 3)
        }, AR.set(tR, qR));
        for (let uR = 0; uR < UR; uR++)
          for (let tR = 0; tR < UR; tR++)
            for (let ZR = 0; ZR < UR; ZR++) {
              const iR = RR[KR(uR, tR, ZR)];
              if (0 === iR) continue;
              const fR = GR[0] + uR,
                VR = GR[1] + tR,
                wR = GR[2] + ZR,
                rR = JR(iR);
              if (null === rR) continue;
              const eR = ZR * UR + uR;
              VR > qR.heights[eR] && (qR.heights[eR] = VR, qR.colours.set(rR, 3 * eR));
              !XR(iR) && (XR(yR(uR + 1, tR, ZR)) || XR(yR(uR - 1, tR, ZR)) || XR(yR(uR, tR + 1, ZR)) || XR(yR(uR, tR - 1, ZR)) || XR(yR(uR, tR, ZR + 1)) || XR(yR(uR, tR, ZR - 1))) && (CR.push(fR, VR, wR), MR.push(rR[0], rR[1], rR[2]))
            }
        uR % LR === LR - 1 && await BR()
      }
      if (0 === CR.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: tR.name,
        surface: {
          positions: Int32Array.from(CR),
          colours: Uint8Array.from(MR),
          count: CR.length / 3
        },
        columnTops: [...AR.values()]
      }
    }

    function XR(RR) {
      if (0 === RR) return !0;
      const JR = iR.l[RR];
      return void 0 === JR || JR.Nr || JR.transTex || !1 === JR.solid
    }

    function MR(RR) {
      let JR = 1 / 0,
        GR = -1 / 0,
        yR = 1 / 0,
        tR = -1 / 0;
      for (const {
          chunkX: eR,
          chunkZ: aR,
          heights: LR
        }
        of RR) LR.forEach(((RR, uR) => {
        if (RR === WR) return;
        const ZR = eR * UR + uR % UR,
          qR = aR * UR + Math.floor(uR / UR);
        JR = Math.min(JR, ZR), GR = Math.max(GR, ZR), yR = Math.min(yR, qR), tR = Math.max(tR, qR)
      }));
      const uR = GR - JR + 1,
        ZR = tR - yR + 1,
        qR = Math.max(1, Math.ceil(uR / nR), Math.ceil(ZR / nR)),
        iR = Math.ceil(uR / qR),
        fR = Math.ceil(ZR / qR),
        VR = document.createElement("canvas");
      VR.width = iR, VR.height = fR;
      const KR = VR.getContext("2d");
      if (!KR) throw new Error("Couldn't draw the schematic from above.");
      const wR = KR.createImageData(iR, fR),
        rR = new Int32Array(iR * fR).fill(WR);
      for (const {
          chunkX: eR,
          chunkZ: aR,
          heights: LR,
          colours: nR
        }
        of RR) LR.forEach(((RR, JR) => {
        const tR = eR * UR + JR % UR,
          uR = aR * UR + Math.floor(JR / UR),
          ZR = Math.floor((uR - yR) / qR) * iR + Math.floor((GR - tR) / qR);
        RR === WR || RR <= rR[ZR] || (rR[ZR] = RR, wR.data.set(nR.subarray(3 * JR, 3 * JR + 3), 4 * ZR), wR.data[4 * ZR + 3] = 255)
      }));
      return KR.putImageData(wR, 0, 0), {
        maxX: GR,
        minZ: yR,
        width: iR * qR,
        depth: fR * qR,
        canvas: VR
      }
    }

    function BR() {
      return new Promise((RR => {
        setTimeout(RR, 0)
      }))
    }
  },
  40752: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR
    });
    var yR = GR(40756);
    async function tR() {
      const {
        averageColors: RR
      } = await GR.e(234).then((() => GR(35257)));
      return new yR.b(RR)
    }
  },
  40756: (RR, JR, GR) => {
    GR.d(JR, {
      b: () => qR,
      d: () => ZR
    });
    var yR = GR(5844);
    const tR = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      uR = [150, 150, 150],
      ZR = -2147483648;
    class qR {
      constructor(RR) {
        this.averages = RR, this.byId = new Map
      }
      get(RR) {
        var JR, GR, ZR, qR, iR;
        const fR = this.byId.get(RR);
        if (void 0 !== fR) return fR;
        const VR = null !== (JR = null === (GR = yR.l[RR]) || void 0 === GR ? void 0 : GR.name) && void 0 !== JR ? JR : "",
          KR = VR.split("|")[0],
          wR = null !== (ZR = this.averages[VR]) && void 0 !== ZR ? ZR : this.averages[KR],
          rR = null !== (qR = null !== (iR = null === wR || void 0 === wR ? void 0 : wR[0]) && void 0 !== iR ? iR : tR[KR]) && void 0 !== qR ? qR : 0 === (null === wR || void 0 === wR ? void 0 : wR.length) ? null : uR;
        return this.byId.set(RR, rR), rR
      }
      getDrawnIds() {
        const RR = new Uint8Array(65536);
        for (let JR = 1; JR < 65536; JR++) void 0 !== yR.l[JR] && null !== this.get(JR) && (RR[JR] = 1);
        return RR
      }
      drawPixel(RR, JR, GR, yR, tR, uR) {
        const qR = function(RR, JR, GR) {
            const yR = RR - JR + (RR - GR);
            return Math.max(.65, Math.min(1.2, .97 + .055 * yR))
          }(yR, tR === ZR ? yR : tR, uR === ZR ? yR : uR),
          iR = this.get(GR);
        RR[JR] = iR[0] * qR, RR[JR + 1] = iR[1] * qR, RR[JR + 2] = iR[2] * qR, RR[JR + 3] = 255
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);