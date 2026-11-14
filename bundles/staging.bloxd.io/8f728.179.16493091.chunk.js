export const id = 179;
export const ids = [179];
export const modules = {
  37871: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      emptyColumnHeight: () => pc,
      loadHeatmapSchematic: () => hc,
      readSchematicBlocks: () => aB
    });
    var Vc = nc(2911),
      Ic = nc.n(Vc),
      rB = nc(2945),
      uc = nc(36282),
      sc = nc(174),
      Mc = nc(8235);
    const Pc = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      qB = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: Pc
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: Pc
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...Pc, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      Oc = Ic().Type.forSchema({
        type: "record",
        fields: qB
      }),
      Tc = Ic().Type.forSchema({
        type: "record",
        fields: [...qB, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...Pc, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: Pc
          }
        }]
      }),
      fc = 2,
      mB = 6,
      ec = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      tB = [150, 150, 150],
      Sc = 16,
      yB = 4096,
      zB = sc.e.kI,
      pc = -2147483648;
    async function hc(cB) {
      const Bc = await aB(new Uint8Array(await cB.arrayBuffer()), await async function() {
        const {
          averageColors: cB
        } = await nc.e(185).then((() => nc(33054))), Bc = new Map;
        return nc => {
          var Vc, Ic, rB, uc, sc;
          const Pc = Bc.get(nc);
          if (void 0 !== Pc) return Pc;
          const qB = null !== (Vc = null === (Ic = Mc.g[nc]) || void 0 === Ic ? void 0 : Ic.name) && void 0 !== Vc ? Vc : "",
            Oc = null !== (rB = cB[qB]) && void 0 !== rB ? rB : cB[qB.split("|")[0]],
            Tc = ec[qB.split("|")[0]],
            fc = null !== (uc = null !== (sc = null === Oc || void 0 === Oc ? void 0 : Oc[0]) && void 0 !== sc ? sc : Tc) && void 0 !== uc ? uc : 0 === (null === Oc || void 0 === Oc ? void 0 : Oc.length) ? null : tB;
          return Bc.set(nc, fc), fc
        }
      }());
      return {
        surface: Bc.surface,
        topDown: Yc(Bc.columnTops)
      }
    }
    async function aB(cB, Bc) {
      var nc;
      if (cB.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const Vc = new DataView(cB.buffer, cB.byteOffset, cB.byteLength).getUint32(0, !0);
      if (Vc > mB) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const Ic = (Vc >= fc ? Tc : Oc).decode(rB.QV.from(cB.subarray(4)), 0).value;
      if (!Ic) throw new Error("The file isn't a schematic.");
      if (0 === Ic.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const sc = null !== (nc = Ic.pasteOffset) && void 0 !== nc ? nc : {
          x: 0,
          y: 0,
          z: 0
        },
        Mc = [sc.x, sc.y, sc.z].map((cB => Math.floor(cB / zB))),
        Pc = Ic.chunkData.map((cB => ({
          x: cB.x + Mc[0],
          y: cB.y + Mc[1],
          z: cB.z + Mc[2],
          rle: cB.rle
        }))),
        qB = new Map;
      for (const [rB, Oc] of Pc.entries()) {
        const cB = new Uint16Array(zB ** 3);
        uc.decode(Oc.rle, cB), qB.set(`${Oc.x},${Oc.y},${Oc.z}`, cB), rB % Sc === Sc - 1 && await Lc()
      }
      const ec = (cB, Bc, nc) => cB * zB * zB + Bc * zB + nc,
        tB = (cB, Bc, nc) => {
          var Vc, Ic;
          const rB = Math.floor(cB / zB),
            uc = Math.floor(Bc / zB),
            sc = Math.floor(nc / zB);
          return null !== (Vc = null === (Ic = qB.get(`${rB},${uc},${sc}`)) || void 0 === Ic ? void 0 : Ic[ec(cB - rB * zB, Bc - uc * zB, nc - sc * zB)]) && void 0 !== Vc ? Vc : 0
        },
        yB = new Map,
        hc = [],
        aB = [];
      for (const [rB, uc] of Pc.entries()) {
        const cB = qB.get(`${uc.x},${uc.y},${uc.z}`),
          nc = [uc.x * zB, uc.y * zB, uc.z * zB],
          Vc = (Bc, Vc, Ic) => Bc < 0 || Vc < 0 || Ic < 0 || Bc >= zB || Vc >= zB || Ic >= zB ? tB(nc[0] + Bc, nc[1] + Vc, nc[2] + Ic) : cB[ec(Bc, Vc, Ic)],
          Ic = `${uc.x},${uc.z}`;
        let sc = yB.get(Ic);
        void 0 === sc && (sc = {
          chunkX: uc.x,
          chunkZ: uc.z,
          heights: new Int32Array(zB * zB).fill(pc),
          colours: new Uint8Array(zB * zB * 3)
        }, yB.set(Ic, sc));
        for (let rB = 0; rB < zB; rB++)
          for (let Ic = 0; Ic < zB; Ic++)
            for (let uc = 0; uc < zB; uc++) {
              const Mc = cB[ec(rB, Ic, uc)];
              if (0 === Mc) continue;
              const Pc = nc[0] + rB,
                qB = nc[1] + Ic,
                Oc = nc[2] + uc,
                Tc = Bc(Mc);
              if (null === Tc) continue;
              const fc = uc * zB + rB;
              qB > sc.heights[fc] && (sc.heights[fc] = qB, sc.colours.set(Tc, 3 * fc));
              !lc(Mc) && (lc(Vc(rB + 1, Ic, uc)) || lc(Vc(rB - 1, Ic, uc)) || lc(Vc(rB, Ic + 1, uc)) || lc(Vc(rB, Ic - 1, uc)) || lc(Vc(rB, Ic, uc + 1)) || lc(Vc(rB, Ic, uc - 1))) && (hc.push(Pc, qB, Oc), aB.push(Tc[0], Tc[1], Tc[2]))
            }
        rB % Sc === Sc - 1 && await Lc()
      }
      if (0 === hc.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: Ic.name,
        surface: {
          positions: Int32Array.from(hc),
          colours: Uint8Array.from(aB),
          count: hc.length / 3
        },
        columnTops: [...yB.values()]
      }
    }

    function lc(cB) {
      if (0 === cB) return !0;
      const Bc = Mc.g[cB];
      return void 0 === Bc || Bc.yV || Bc.transTex || !1 === Bc.solid
    }

    function Yc(cB) {
      let Bc = 1 / 0,
        nc = -1 / 0,
        Vc = 1 / 0,
        Ic = -1 / 0;
      for (const {
          chunkX: mB,
          chunkZ: ec,
          heights: tB
        }
        of cB) tB.forEach(((cB, rB) => {
        if (cB === pc) return;
        const uc = mB * zB + rB % zB,
          sc = ec * zB + Math.floor(rB / zB);
        Bc = Math.min(Bc, uc), nc = Math.max(nc, uc), Vc = Math.min(Vc, sc), Ic = Math.max(Ic, sc)
      }));
      const rB = nc - Bc + 1,
        uc = Ic - Vc + 1,
        sc = Math.max(1, Math.ceil(rB / yB), Math.ceil(uc / yB)),
        Mc = Math.ceil(rB / sc),
        Pc = Math.ceil(uc / sc),
        qB = document.createElement("canvas");
      qB.width = Mc, qB.height = Pc;
      const Oc = qB.getContext("2d");
      if (!Oc) throw new Error("Couldn't draw the schematic from above.");
      const Tc = Oc.createImageData(Mc, Pc),
        fc = new Int32Array(Mc * Pc).fill(pc);
      for (const {
          chunkX: mB,
          chunkZ: ec,
          heights: tB,
          colours: Sc
        }
        of cB) tB.forEach(((cB, Bc) => {
        const Ic = mB * zB + Bc % zB,
          rB = ec * zB + Math.floor(Bc / zB),
          uc = Math.floor((rB - Vc) / sc) * Mc + Math.floor((nc - Ic) / sc);
        cB === pc || cB <= fc[uc] || (fc[uc] = cB, Tc.data.set(Sc.subarray(3 * Bc, 3 * Bc + 3), 4 * uc), Tc.data[4 * uc + 3] = 255)
      }));
      return Oc.putImageData(Tc, 0, 0), {
        maxX: nc,
        minZ: Vc,
        width: Mc * sc,
        depth: Pc * sc,
        canvas: qB
      }
    }

    function Lc() {
      return new Promise((cB => {
        setTimeout(cB, 0)
      }))
    }
  },
  8327: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Ic,
      f: () => rB
    });
    var Vc = nc(8290);
    const Ic = "Air",
      rB = Object.freeze(new Vc.f(Ic, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  },
  36282: (cB, Bc, nc) => {
    var Vc = nc(36291);

    function Ic(cB) {
      for (var Bc, nc, Ic = 0, rB = cB.length, uc = 0; uc < cB.length;) {
        for (Bc = cB[uc], nc = 0; uc < rB && cB[uc] === Bc;) ++uc, ++nc;
        Ic += Vc.log2(nc) / 7 | 0, Ic += Vc.log2(Bc >>> 0) / 7 | 0, Ic += 2
      }
      return Ic
    }
    Bc.size = Ic, Bc.encode = function(cB, Bc) {
      Bc || (Bc = new Uint8Array(Ic(cB)));
      for (var nc, Vc, rB = 0, uc = Bc.length, sc = 0; sc < cB.length;) {
        for (nc = cB[sc], Vc = 0; sc < cB.length && cB[sc] === nc;) ++sc, ++Vc;
        for (; rB < uc && Vc >= 128;) Bc[rB++] = 128 + (127 & Vc), Vc >>>= 7;
        if (rB >= uc) throw new Error("RLE buffer overflow");
        for (Bc[rB++] = Vc, nc >>>= 0; rB < uc && nc >= 128;) Bc[rB++] = 128 + (127 & nc), nc >>>= 7;
        if (rB >= uc) throw new Error("RLE buffer overflow");
        Bc[rB++] = nc
      }
      return Bc
    }, Bc.decode = function(cB, Bc) {
      for (var nc, Vc, Ic, rB, uc = Bc.length, sc = cB.length, Mc = 0, Pc = 0; Pc < sc;) {
        for (nc = 0, Vc = 0; Pc < sc && cB[Pc] >= 128;) nc += (127 & cB[Pc++]) << Vc, Vc += 7;
        if (nc += cB[Pc++] << Vc, Pc >= sc) throw new Error("RLE buffer underrun");
        if (Mc + nc > uc) throw new Error("Chunk buffer overflow");
        for (Ic = 0, Vc = 0; Pc < sc && cB[Pc] >= 128;) Ic += (127 & cB[Pc++]) << Vc, Vc += 7;
        if (Pc >= sc) throw new Error("RLE buffer underrun");
        for (Ic += cB[Pc++] << Vc, rB = 0; rB < nc; ++rB) Bc[Mc++] = Ic
      }
      return Bc
    }
  },
  36291: (cB, Bc) => {
    function nc(cB) {
      var Bc = 32;
      return (cB &= -cB) && Bc--, 65535 & cB && (Bc -= 16), 16711935 & cB && (Bc -= 8), 252645135 & cB && (Bc -= 4), 858993459 & cB && (Bc -= 2), 1431655765 & cB && (Bc -= 1), Bc
    }
    Bc.INT_BITS = 32, Bc.INT_MAX = 2147483647, Bc.INT_MIN = -1 << 31, Bc.sign = function(cB) {
      return (cB > 0) - (cB < 0)
    }, Bc.abs = function(cB) {
      var Bc = cB >> 31;
      return (cB ^ Bc) - Bc
    }, Bc.min = function(cB, Bc) {
      return Bc ^ (cB ^ Bc) & -(cB < Bc)
    }, Bc.max = function(cB, Bc) {
      return cB ^ (cB ^ Bc) & -(cB < Bc)
    }, Bc.isPow2 = function(cB) {
      return !(cB & cB - 1) && !!cB
    }, Bc.log2 = function(cB) {
      var Bc, nc;
      return Bc = (cB > 65535) << 4, Bc |= nc = ((cB >>>= Bc) > 255) << 3, Bc |= nc = ((cB >>>= nc) > 15) << 2, (Bc |= nc = ((cB >>>= nc) > 3) << 1) | (cB >>>= nc) >> 1
    }, Bc.log10 = function(cB) {
      return cB >= 1e9 ? 9 : cB >= 1e8 ? 8 : cB >= 1e7 ? 7 : cB >= 1e6 ? 6 : cB >= 1e5 ? 5 : cB >= 1e4 ? 4 : cB >= 1e3 ? 3 : cB >= 100 ? 2 : cB >= 10 ? 1 : 0
    }, Bc.popCount = function(cB) {
      return 16843009 * ((cB = (858993459 & (cB -= cB >>> 1 & 1431655765)) + (cB >>> 2 & 858993459)) + (cB >>> 4) & 252645135) >>> 24
    }, Bc.countTrailingZeros = nc, Bc.nextPow2 = function(cB) {
      return cB += 0 === cB, --cB, cB |= cB >>> 1, cB |= cB >>> 2, cB |= cB >>> 4, cB |= cB >>> 8, (cB |= cB >>> 16) + 1
    }, Bc.prevPow2 = function(cB) {
      return cB |= cB >>> 1, cB |= cB >>> 2, cB |= cB >>> 4, cB |= cB >>> 8, (cB |= cB >>> 16) - (cB >>> 1)
    }, Bc.parity = function(cB) {
      return cB ^= cB >>> 16, cB ^= cB >>> 8, cB ^= cB >>> 4, 27030 >>> (cB &= 15) & 1
    };
    var Vc = new Array(256);
    ! function(cB) {
      for (var Bc = 0; Bc < 256; ++Bc) {
        var nc = Bc,
          Vc = Bc,
          Ic = 7;
        for (nc >>>= 1; nc; nc >>>= 1) Vc <<= 1, Vc |= 1 & nc, --Ic;
        cB[Bc] = Vc << Ic & 255
      }
    }(Vc), Bc.reverse = function(cB) {
      return Vc[255 & cB] << 24 | Vc[cB >>> 8 & 255] << 16 | Vc[cB >>> 16 & 255] << 8 | Vc[cB >>> 24 & 255]
    }, Bc.interleave2 = function(cB, Bc) {
      return (cB = 1431655765 & ((cB = 858993459 & ((cB = 252645135 & ((cB = 16711935 & ((cB &= 65535) | cB << 8)) | cB << 4)) | cB << 2)) | cB << 1)) | (Bc = 1431655765 & ((Bc = 858993459 & ((Bc = 252645135 & ((Bc = 16711935 & ((Bc &= 65535) | Bc << 8)) | Bc << 4)) | Bc << 2)) | Bc << 1)) << 1
    }, Bc.deinterleave2 = function(cB, Bc) {
      return (cB = 65535 & ((cB = 16711935 & ((cB = 252645135 & ((cB = 858993459 & ((cB = cB >>> Bc & 1431655765) | cB >>> 1)) | cB >>> 2)) | cB >>> 4)) | cB >>> 16)) << 16 >> 16
    }, Bc.interleave3 = function(cB, Bc, nc) {
      return cB = 1227133513 & ((cB = 3272356035 & ((cB = 251719695 & ((cB = 4278190335 & ((cB &= 1023) | cB << 16)) | cB << 8)) | cB << 4)) | cB << 2), (cB |= (Bc = 1227133513 & ((Bc = 3272356035 & ((Bc = 251719695 & ((Bc = 4278190335 & ((Bc &= 1023) | Bc << 16)) | Bc << 8)) | Bc << 4)) | Bc << 2)) << 1) | (nc = 1227133513 & ((nc = 3272356035 & ((nc = 251719695 & ((nc = 4278190335 & ((nc &= 1023) | nc << 16)) | nc << 8)) | nc << 4)) | nc << 2)) << 2
    }, Bc.deinterleave3 = function(cB, Bc) {
      return (cB = 1023 & ((cB = 4278190335 & ((cB = 251719695 & ((cB = 3272356035 & ((cB = cB >>> Bc & 1227133513) | cB >>> 2)) | cB >>> 4)) | cB >>> 8)) | cB >>> 16)) << 22 >> 22
    }, Bc.nextCombination = function(cB) {
      var Bc = cB | cB - 1;
      return Bc + 1 | (~Bc & -~Bc) - 1 >>> nc(cB) + 1
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);