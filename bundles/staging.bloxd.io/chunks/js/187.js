export const id = 187;
export const ids = [187];
export const modules = {
  37750: (SS, HS, gS) => {
    var tS = gS(37752);

    function bS(SS) {
      for (var HS, gS, bS = 0, XS = SS.length, xS = 0; xS < SS.length;) {
        for (HS = SS[xS], gS = 0; xS < XS && SS[xS] === HS;) ++xS, ++gS;
        bS += tS.log2(gS) / 7 | 0, bS += tS.log2(HS >>> 0) / 7 | 0, bS += 2
      }
      return bS
    }
    HS.size = bS, HS.encode = function(SS, HS) {
      HS || (HS = new Uint8Array(bS(SS)));
      for (var gS, tS, XS = 0, xS = HS.length, NS = 0; NS < SS.length;) {
        for (gS = SS[NS], tS = 0; NS < SS.length && SS[NS] === gS;) ++NS, ++tS;
        for (; XS < xS && tS >= 128;) HS[XS++] = 128 + (127 & tS), tS >>>= 7;
        if (XS >= xS) throw new Error("RLE buffer overflow");
        for (HS[XS++] = tS, gS >>>= 0; XS < xS && gS >= 128;) HS[XS++] = 128 + (127 & gS), gS >>>= 7;
        if (XS >= xS) throw new Error("RLE buffer overflow");
        HS[XS++] = gS
      }
      return HS
    }, HS.decode = function(SS, HS) {
      for (var gS, tS, bS, XS, xS = HS.length, NS = SS.length, qS = 0, uS = 0; uS < NS;) {
        for (gS = 0, tS = 0; uS < NS && SS[uS] >= 128;) gS += (127 & SS[uS++]) << tS, tS += 7;
        if (gS += SS[uS++] << tS, uS >= NS) throw new Error("RLE buffer underrun");
        if (qS + gS > xS) throw new Error("Chunk buffer overflow");
        for (bS = 0, tS = 0; uS < NS && SS[uS] >= 128;) bS += (127 & SS[uS++]) << tS, tS += 7;
        if (uS >= NS) throw new Error("RLE buffer underrun");
        for (bS += SS[uS++] << tS, XS = 0; XS < gS; ++XS) HS[qS++] = bS
      }
      return HS
    }
  },
  37752: (SS, HS) => {
    function gS(SS) {
      var HS = 32;
      return (SS &= -SS) && HS--, 65535 & SS && (HS -= 16), 16711935 & SS && (HS -= 8), 252645135 & SS && (HS -= 4), 858993459 & SS && (HS -= 2), 1431655765 & SS && (HS -= 1), HS
    }
    HS.INT_BITS = 32, HS.INT_MAX = 2147483647, HS.INT_MIN = -1 << 31, HS.sign = function(SS) {
      return (SS > 0) - (SS < 0)
    }, HS.abs = function(SS) {
      var HS = SS >> 31;
      return (SS ^ HS) - HS
    }, HS.min = function(SS, HS) {
      return HS ^ (SS ^ HS) & -(SS < HS)
    }, HS.max = function(SS, HS) {
      return SS ^ (SS ^ HS) & -(SS < HS)
    }, HS.isPow2 = function(SS) {
      return !(SS & SS - 1) && !!SS
    }, HS.log2 = function(SS) {
      var HS, gS;
      return HS = (SS > 65535) << 4, HS |= gS = ((SS >>>= HS) > 255) << 3, HS |= gS = ((SS >>>= gS) > 15) << 2, (HS |= gS = ((SS >>>= gS) > 3) << 1) | (SS >>>= gS) >> 1
    }, HS.log10 = function(SS) {
      return SS >= 1e9 ? 9 : SS >= 1e8 ? 8 : SS >= 1e7 ? 7 : SS >= 1e6 ? 6 : SS >= 1e5 ? 5 : SS >= 1e4 ? 4 : SS >= 1e3 ? 3 : SS >= 100 ? 2 : SS >= 10 ? 1 : 0
    }, HS.popCount = function(SS) {
      return 16843009 * ((SS = (858993459 & (SS -= SS >>> 1 & 1431655765)) + (SS >>> 2 & 858993459)) + (SS >>> 4) & 252645135) >>> 24
    }, HS.countTrailingZeros = gS, HS.nextPow2 = function(SS) {
      return SS += 0 === SS, --SS, SS |= SS >>> 1, SS |= SS >>> 2, SS |= SS >>> 4, SS |= SS >>> 8, (SS |= SS >>> 16) + 1
    }, HS.prevPow2 = function(SS) {
      return SS |= SS >>> 1, SS |= SS >>> 2, SS |= SS >>> 4, SS |= SS >>> 8, (SS |= SS >>> 16) - (SS >>> 1)
    }, HS.parity = function(SS) {
      return SS ^= SS >>> 16, SS ^= SS >>> 8, SS ^= SS >>> 4, 27030 >>> (SS &= 15) & 1
    };
    var tS = new Array(256);
    ! function(SS) {
      for (var HS = 0; HS < 256; ++HS) {
        var gS = HS,
          tS = HS,
          bS = 7;
        for (gS >>>= 1; gS; gS >>>= 1) tS <<= 1, tS |= 1 & gS, --bS;
        SS[HS] = tS << bS & 255
      }
    }(tS), HS.reverse = function(SS) {
      return tS[255 & SS] << 24 | tS[SS >>> 8 & 255] << 16 | tS[SS >>> 16 & 255] << 8 | tS[SS >>> 24 & 255]
    }, HS.interleave2 = function(SS, HS) {
      return (SS = 1431655765 & ((SS = 858993459 & ((SS = 252645135 & ((SS = 16711935 & ((SS &= 65535) | SS << 8)) | SS << 4)) | SS << 2)) | SS << 1)) | (HS = 1431655765 & ((HS = 858993459 & ((HS = 252645135 & ((HS = 16711935 & ((HS &= 65535) | HS << 8)) | HS << 4)) | HS << 2)) | HS << 1)) << 1
    }, HS.deinterleave2 = function(SS, HS) {
      return (SS = 65535 & ((SS = 16711935 & ((SS = 252645135 & ((SS = 858993459 & ((SS = SS >>> HS & 1431655765) | SS >>> 1)) | SS >>> 2)) | SS >>> 4)) | SS >>> 16)) << 16 >> 16
    }, HS.interleave3 = function(SS, HS, gS) {
      return SS = 1227133513 & ((SS = 3272356035 & ((SS = 251719695 & ((SS = 4278190335 & ((SS &= 1023) | SS << 16)) | SS << 8)) | SS << 4)) | SS << 2), (SS |= (HS = 1227133513 & ((HS = 3272356035 & ((HS = 251719695 & ((HS = 4278190335 & ((HS &= 1023) | HS << 16)) | HS << 8)) | HS << 4)) | HS << 2)) << 1) | (gS = 1227133513 & ((gS = 3272356035 & ((gS = 251719695 & ((gS = 4278190335 & ((gS &= 1023) | gS << 16)) | gS << 8)) | gS << 4)) | gS << 2)) << 2
    }, HS.deinterleave3 = function(SS, HS) {
      return (SS = 1023 & ((SS = 4278190335 & ((SS = 251719695 & ((SS = 3272356035 & ((SS = SS >>> HS & 1227133513) | SS >>> 2)) | SS >>> 4)) | SS >>> 8)) | SS >>> 16)) << 22 >> 22
    }, HS.nextCombination = function(SS) {
      var HS = SS | SS - 1;
      return HS + 1 | (~HS & -~HS) - 1 >>> gS(SS) + 1
    }
  },
  39852: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      emptyColumnHeight: () => QS,
      loadHeatmapSchematic: () => DS,
      readSchematicBlocks: () => wS
    });
    var tS = gS(3877),
      bS = gS.n(tS),
      XS = gS(3858),
      xS = gS(37750),
      NS = gS(198),
      qS = gS(9361);
    const uS = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      IS = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: uS
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: uS
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...uS, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      fS = bS().Type.forSchema({
        type: "record",
        fields: IS
      }),
      kS = bS().Type.forSchema({
        type: "record",
        fields: [...IS, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...uS, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: uS
          }
        }]
      }),
      aS = 2,
      KS = 6,
      jS = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      GS = [150, 150, 150],
      CS = 16,
      nS = 4096,
      PS = NS.e.JK,
      QS = -2147483648;
    async function DS(SS) {
      const HS = await wS(new Uint8Array(await SS.arrayBuffer()), await async function() {
        const {
          averageColors: SS
        } = await gS.e(204).then((() => gS(34324))), HS = new Map;
        return gS => {
          var tS, bS, XS, xS, NS;
          const uS = HS.get(gS);
          if (void 0 !== uS) return uS;
          const IS = null !== (tS = null === (bS = qS.j[gS]) || void 0 === bS ? void 0 : bS.name) && void 0 !== tS ? tS : "",
            fS = null !== (XS = SS[IS]) && void 0 !== XS ? XS : SS[IS.split("|")[0]],
            kS = jS[IS.split("|")[0]],
            aS = null !== (xS = null !== (NS = null === fS || void 0 === fS ? void 0 : fS[0]) && void 0 !== NS ? NS : kS) && void 0 !== xS ? xS : 0 === (null === fS || void 0 === fS ? void 0 : fS.length) ? null : GS;
          return HS.set(gS, aS), aS
        }
      }());
      return {
        surface: HS.surface,
        topDown: ZS(HS.columnTops)
      }
    }
    async function wS(SS, HS) {
      var gS;
      if (SS.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const tS = new DataView(SS.buffer, SS.byteOffset, SS.byteLength).getUint32(0, !0);
      if (tS > KS) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const bS = (tS >= aS ? kS : fS).decode(XS.CK.from(SS.subarray(4)), 0).value;
      if (!bS) throw new Error("The file isn't a schematic.");
      if (0 === bS.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const NS = null !== (gS = bS.pasteOffset) && void 0 !== gS ? gS : {
          x: 0,
          y: 0,
          z: 0
        },
        qS = [NS.x, NS.y, NS.z].map((SS => Math.floor(SS / PS))),
        uS = bS.chunkData.map((SS => ({
          x: SS.x + qS[0],
          y: SS.y + qS[1],
          z: SS.z + qS[2],
          rle: SS.rle
        }))),
        IS = new Map;
      for (const [XS, fS] of uS.entries()) {
        const SS = new Uint16Array(PS ** 3);
        xS.decode(fS.rle, SS), IS.set(`${fS.x},${fS.y},${fS.z}`, SS), XS % CS === CS - 1 && await JS()
      }
      const jS = (SS, HS, gS) => SS * PS * PS + HS * PS + gS,
        GS = (SS, HS, gS) => {
          var tS, bS;
          const XS = Math.floor(SS / PS),
            xS = Math.floor(HS / PS),
            NS = Math.floor(gS / PS);
          return null !== (tS = null === (bS = IS.get(`${XS},${xS},${NS}`)) || void 0 === bS ? void 0 : bS[jS(SS - XS * PS, HS - xS * PS, gS - NS * PS)]) && void 0 !== tS ? tS : 0
        },
        nS = new Map,
        DS = [],
        wS = [];
      for (const [XS, xS] of uS.entries()) {
        const SS = IS.get(`${xS.x},${xS.y},${xS.z}`),
          gS = [xS.x * PS, xS.y * PS, xS.z * PS],
          tS = (HS, tS, bS) => HS < 0 || tS < 0 || bS < 0 || HS >= PS || tS >= PS || bS >= PS ? GS(gS[0] + HS, gS[1] + tS, gS[2] + bS) : SS[jS(HS, tS, bS)],
          bS = `${xS.x},${xS.z}`;
        let NS = nS.get(bS);
        void 0 === NS && (NS = {
          chunkX: xS.x,
          chunkZ: xS.z,
          heights: new Int32Array(PS * PS).fill(QS),
          colours: new Uint8Array(PS * PS * 3)
        }, nS.set(bS, NS));
        for (let XS = 0; XS < PS; XS++)
          for (let bS = 0; bS < PS; bS++)
            for (let xS = 0; xS < PS; xS++) {
              const qS = SS[jS(XS, bS, xS)];
              if (0 === qS) continue;
              const uS = gS[0] + XS,
                IS = gS[1] + bS,
                fS = gS[2] + xS,
                kS = HS(qS);
              if (null === kS) continue;
              const aS = xS * PS + XS;
              IS > NS.heights[aS] && (NS.heights[aS] = IS, NS.colours.set(kS, 3 * aS));
              !hS(qS) && (hS(tS(XS + 1, bS, xS)) || hS(tS(XS - 1, bS, xS)) || hS(tS(XS, bS + 1, xS)) || hS(tS(XS, bS - 1, xS)) || hS(tS(XS, bS, xS + 1)) || hS(tS(XS, bS, xS - 1))) && (DS.push(uS, IS, fS), wS.push(kS[0], kS[1], kS[2]))
            }
        XS % CS === CS - 1 && await JS()
      }
      if (0 === DS.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: bS.name,
        surface: {
          positions: Int32Array.from(DS),
          colours: Uint8Array.from(wS),
          count: DS.length / 3
        },
        columnTops: [...nS.values()]
      }
    }

    function hS(SS) {
      if (0 === SS) return !0;
      const HS = qS.j[SS];
      return void 0 === HS || HS.aa || HS.transTex || !1 === HS.solid
    }

    function ZS(SS) {
      let HS = 1 / 0,
        gS = -1 / 0,
        tS = 1 / 0,
        bS = -1 / 0;
      for (const {
          chunkX: KS,
          chunkZ: jS,
          heights: GS
        }
        of SS) GS.forEach(((SS, XS) => {
        if (SS === QS) return;
        const xS = KS * PS + XS % PS,
          NS = jS * PS + Math.floor(XS / PS);
        HS = Math.min(HS, xS), gS = Math.max(gS, xS), tS = Math.min(tS, NS), bS = Math.max(bS, NS)
      }));
      const XS = gS - HS + 1,
        xS = bS - tS + 1,
        NS = Math.max(1, Math.ceil(XS / nS), Math.ceil(xS / nS)),
        qS = Math.ceil(XS / NS),
        uS = Math.ceil(xS / NS),
        IS = document.createElement("canvas");
      IS.width = qS, IS.height = uS;
      const fS = IS.getContext("2d");
      if (!fS) throw new Error("Couldn't draw the schematic from above.");
      const kS = fS.createImageData(qS, uS),
        aS = new Int32Array(qS * uS).fill(QS);
      for (const {
          chunkX: KS,
          chunkZ: jS,
          heights: GS,
          colours: CS
        }
        of SS) GS.forEach(((SS, HS) => {
        const bS = KS * PS + HS % PS,
          XS = jS * PS + Math.floor(HS / PS),
          xS = Math.floor((XS - tS) / NS) * qS + Math.floor((gS - bS) / NS);
        SS === QS || SS <= aS[xS] || (aS[xS] = SS, kS.data.set(CS.subarray(3 * HS, 3 * HS + 3), 4 * xS), kS.data[4 * xS + 3] = 255)
      }));
      return fS.putImageData(kS, 0, 0), {
        maxX: gS,
        minZ: tS,
        width: qS * NS,
        depth: uS * NS,
        canvas: IS
      }
    }

    function JS() {
      return new Promise((SS => {
        setTimeout(SS, 0)
      }))
    }
  },
  9465: (SS, HS, gS) => {
    gS.d(HS, {
      c: () => bS,
      g: () => XS
    });
    var tS = gS(9411);
    const bS = "Air",
      XS = Object.freeze(new tS.e(bS, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);