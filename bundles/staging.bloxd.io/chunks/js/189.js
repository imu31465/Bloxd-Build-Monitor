export const id = 189;
export const ids = [189];
export const modules = {
  38123: (uu, Eu, ju) => {
    var su = ju(38126);

    function Uu(uu) {
      for (var Eu, ju, Uu = 0, Zu = uu.length, Xu = 0; Xu < uu.length;) {
        for (Eu = uu[Xu], ju = 0; Xu < Zu && uu[Xu] === Eu;) ++Xu, ++ju;
        Uu += su.log2(ju) / 7 | 0, Uu += su.log2(Eu >>> 0) / 7 | 0, Uu += 2
      }
      return Uu
    }
    Eu.size = Uu, Eu.encode = function(uu, Eu) {
      Eu || (Eu = new Uint8Array(Uu(uu)));
      for (var ju, su, Zu = 0, Xu = Eu.length, lu = 0; lu < uu.length;) {
        for (ju = uu[lu], su = 0; lu < uu.length && uu[lu] === ju;) ++lu, ++su;
        for (; Zu < Xu && su >= 128;) Eu[Zu++] = 128 + (127 & su), su >>>= 7;
        if (Zu >= Xu) throw new Error("RLE buffer overflow");
        for (Eu[Zu++] = su, ju >>>= 0; Zu < Xu && ju >= 128;) Eu[Zu++] = 128 + (127 & ju), ju >>>= 7;
        if (Zu >= Xu) throw new Error("RLE buffer overflow");
        Eu[Zu++] = ju
      }
      return Eu
    }, Eu.decode = function(uu, Eu) {
      for (var ju, su, Uu, Zu, Xu = Eu.length, lu = uu.length, qu = 0, fu = 0; fu < lu;) {
        for (ju = 0, su = 0; fu < lu && uu[fu] >= 128;) ju += (127 & uu[fu++]) << su, su += 7;
        if (ju += uu[fu++] << su, fu >= lu) throw new Error("RLE buffer underrun");
        if (qu + ju > Xu) throw new Error("Chunk buffer overflow");
        for (Uu = 0, su = 0; fu < lu && uu[fu] >= 128;) Uu += (127 & uu[fu++]) << su, su += 7;
        if (fu >= lu) throw new Error("RLE buffer underrun");
        for (Uu += uu[fu++] << su, Zu = 0; Zu < ju; ++Zu) Eu[qu++] = Uu
      }
      return Eu
    }
  },
  38126: (uu, Eu) => {
    function ju(uu) {
      var Eu = 32;
      return (uu &= -uu) && Eu--, 65535 & uu && (Eu -= 16), 16711935 & uu && (Eu -= 8), 252645135 & uu && (Eu -= 4), 858993459 & uu && (Eu -= 2), 1431655765 & uu && (Eu -= 1), Eu
    }
    Eu.INT_BITS = 32, Eu.INT_MAX = 2147483647, Eu.INT_MIN = -1 << 31, Eu.sign = function(uu) {
      return (uu > 0) - (uu < 0)
    }, Eu.abs = function(uu) {
      var Eu = uu >> 31;
      return (uu ^ Eu) - Eu
    }, Eu.min = function(uu, Eu) {
      return Eu ^ (uu ^ Eu) & -(uu < Eu)
    }, Eu.max = function(uu, Eu) {
      return uu ^ (uu ^ Eu) & -(uu < Eu)
    }, Eu.isPow2 = function(uu) {
      return !(uu & uu - 1) && !!uu
    }, Eu.log2 = function(uu) {
      var Eu, ju;
      return Eu = (uu > 65535) << 4, Eu |= ju = ((uu >>>= Eu) > 255) << 3, Eu |= ju = ((uu >>>= ju) > 15) << 2, (Eu |= ju = ((uu >>>= ju) > 3) << 1) | (uu >>>= ju) >> 1
    }, Eu.log10 = function(uu) {
      return uu >= 1e9 ? 9 : uu >= 1e8 ? 8 : uu >= 1e7 ? 7 : uu >= 1e6 ? 6 : uu >= 1e5 ? 5 : uu >= 1e4 ? 4 : uu >= 1e3 ? 3 : uu >= 100 ? 2 : uu >= 10 ? 1 : 0
    }, Eu.popCount = function(uu) {
      return 16843009 * ((uu = (858993459 & (uu -= uu >>> 1 & 1431655765)) + (uu >>> 2 & 858993459)) + (uu >>> 4) & 252645135) >>> 24
    }, Eu.countTrailingZeros = ju, Eu.nextPow2 = function(uu) {
      return uu += 0 === uu, --uu, uu |= uu >>> 1, uu |= uu >>> 2, uu |= uu >>> 4, uu |= uu >>> 8, (uu |= uu >>> 16) + 1
    }, Eu.prevPow2 = function(uu) {
      return uu |= uu >>> 1, uu |= uu >>> 2, uu |= uu >>> 4, uu |= uu >>> 8, (uu |= uu >>> 16) - (uu >>> 1)
    }, Eu.parity = function(uu) {
      return uu ^= uu >>> 16, uu ^= uu >>> 8, uu ^= uu >>> 4, 27030 >>> (uu &= 15) & 1
    };
    var su = new Array(256);
    ! function(uu) {
      for (var Eu = 0; Eu < 256; ++Eu) {
        var ju = Eu,
          su = Eu,
          Uu = 7;
        for (ju >>>= 1; ju; ju >>>= 1) su <<= 1, su |= 1 & ju, --Uu;
        uu[Eu] = su << Uu & 255
      }
    }(su), Eu.reverse = function(uu) {
      return su[255 & uu] << 24 | su[uu >>> 8 & 255] << 16 | su[uu >>> 16 & 255] << 8 | su[uu >>> 24 & 255]
    }, Eu.interleave2 = function(uu, Eu) {
      return (uu = 1431655765 & ((uu = 858993459 & ((uu = 252645135 & ((uu = 16711935 & ((uu &= 65535) | uu << 8)) | uu << 4)) | uu << 2)) | uu << 1)) | (Eu = 1431655765 & ((Eu = 858993459 & ((Eu = 252645135 & ((Eu = 16711935 & ((Eu &= 65535) | Eu << 8)) | Eu << 4)) | Eu << 2)) | Eu << 1)) << 1
    }, Eu.deinterleave2 = function(uu, Eu) {
      return (uu = 65535 & ((uu = 16711935 & ((uu = 252645135 & ((uu = 858993459 & ((uu = uu >>> Eu & 1431655765) | uu >>> 1)) | uu >>> 2)) | uu >>> 4)) | uu >>> 16)) << 16 >> 16
    }, Eu.interleave3 = function(uu, Eu, ju) {
      return uu = 1227133513 & ((uu = 3272356035 & ((uu = 251719695 & ((uu = 4278190335 & ((uu &= 1023) | uu << 16)) | uu << 8)) | uu << 4)) | uu << 2), (uu |= (Eu = 1227133513 & ((Eu = 3272356035 & ((Eu = 251719695 & ((Eu = 4278190335 & ((Eu &= 1023) | Eu << 16)) | Eu << 8)) | Eu << 4)) | Eu << 2)) << 1) | (ju = 1227133513 & ((ju = 3272356035 & ((ju = 251719695 & ((ju = 4278190335 & ((ju &= 1023) | ju << 16)) | ju << 8)) | ju << 4)) | ju << 2)) << 2
    }, Eu.deinterleave3 = function(uu, Eu) {
      return (uu = 1023 & ((uu = 4278190335 & ((uu = 251719695 & ((uu = 3272356035 & ((uu = uu >>> Eu & 1227133513) | uu >>> 2)) | uu >>> 4)) | uu >>> 8)) | uu >>> 16)) << 22 >> 22
    }, Eu.nextCombination = function(uu) {
      var Eu = uu | uu - 1;
      return Eu + 1 | (~Eu & -~Eu) - 1 >>> ju(uu) + 1
    }
  },
  40081: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      emptyColumnHeight: () => eu,
      loadHeatmapSchematic: () => Gu,
      readSchematicBlocks: () => pu
    });
    var su = ju(3948),
      Uu = ju.n(su),
      Zu = ju(3932),
      Xu = ju(38123),
      lu = ju(202),
      qu = ju(9409);
    const fu = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      Cu = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: fu
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: fu
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...fu, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      bu = Uu().Type.forSchema({
        type: "record",
        fields: Cu
      }),
      cu = Uu().Type.forSchema({
        type: "record",
        fields: [...Cu, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...fu, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: fu
          }
        }]
      }),
      Nu = 2,
      Ou = 6,
      Yu = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      hu = [150, 150, 150],
      Du = 16,
      gu = 4096,
      Mu = lu.e.hO,
      eu = -2147483648;
    async function Gu(uu) {
      const Eu = await pu(new Uint8Array(await uu.arrayBuffer()), await async function() {
        const {
          averageColors: uu
        } = await ju.e(207).then((() => ju(34634))), Eu = new Map;
        return ju => {
          var su, Uu, Zu, Xu, lu;
          const fu = Eu.get(ju);
          if (void 0 !== fu) return fu;
          const Cu = null !== (su = null === (Uu = qu.f[ju]) || void 0 === Uu ? void 0 : Uu.name) && void 0 !== su ? su : "",
            bu = null !== (Zu = uu[Cu]) && void 0 !== Zu ? Zu : uu[Cu.split("|")[0]],
            cu = Yu[Cu.split("|")[0]],
            Nu = null !== (Xu = null !== (lu = null === bu || void 0 === bu ? void 0 : bu[0]) && void 0 !== lu ? lu : cu) && void 0 !== Xu ? Xu : 0 === (null === bu || void 0 === bu ? void 0 : bu.length) ? null : hu;
          return Eu.set(ju, Nu), Nu
        }
      }());
      return {
        surface: Eu.surface,
        topDown: Ju(Eu.columnTops)
      }
    }
    async function pu(uu, Eu) {
      var ju;
      if (uu.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const su = new DataView(uu.buffer, uu.byteOffset, uu.byteLength).getUint32(0, !0);
      if (su > Ou) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const Uu = (su >= Nu ? cu : bu).decode(Zu.qO.from(uu.subarray(4)), 0).value;
      if (!Uu) throw new Error("The file isn't a schematic.");
      if (0 === Uu.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const lu = null !== (ju = Uu.pasteOffset) && void 0 !== ju ? ju : {
          x: 0,
          y: 0,
          z: 0
        },
        qu = [lu.x, lu.y, lu.z].map((uu => Math.floor(uu / Mu))),
        fu = Uu.chunkData.map((uu => ({
          x: uu.x + qu[0],
          y: uu.y + qu[1],
          z: uu.z + qu[2],
          rle: uu.rle
        }))),
        Cu = new Map;
      for (const [Zu, bu] of fu.entries()) {
        const uu = new Uint16Array(Mu ** 3);
        Xu.decode(bu.rle, uu), Cu.set(`${bu.x},${bu.y},${bu.z}`, uu), Zu % Du === Du - 1 && await du()
      }
      const Yu = (uu, Eu, ju) => uu * Mu * Mu + Eu * Mu + ju,
        hu = (uu, Eu, ju) => {
          var su, Uu;
          const Zu = Math.floor(uu / Mu),
            Xu = Math.floor(Eu / Mu),
            lu = Math.floor(ju / Mu);
          return null !== (su = null === (Uu = Cu.get(`${Zu},${Xu},${lu}`)) || void 0 === Uu ? void 0 : Uu[Yu(uu - Zu * Mu, Eu - Xu * Mu, ju - lu * Mu)]) && void 0 !== su ? su : 0
        },
        gu = new Map,
        Gu = [],
        pu = [];
      for (const [Zu, Xu] of fu.entries()) {
        const uu = Cu.get(`${Xu.x},${Xu.y},${Xu.z}`),
          ju = [Xu.x * Mu, Xu.y * Mu, Xu.z * Mu],
          su = (Eu, su, Uu) => Eu < 0 || su < 0 || Uu < 0 || Eu >= Mu || su >= Mu || Uu >= Mu ? hu(ju[0] + Eu, ju[1] + su, ju[2] + Uu) : uu[Yu(Eu, su, Uu)],
          Uu = `${Xu.x},${Xu.z}`;
        let lu = gu.get(Uu);
        void 0 === lu && (lu = {
          chunkX: Xu.x,
          chunkZ: Xu.z,
          heights: new Int32Array(Mu * Mu).fill(eu),
          colours: new Uint8Array(Mu * Mu * 3)
        }, gu.set(Uu, lu));
        for (let Zu = 0; Zu < Mu; Zu++)
          for (let Uu = 0; Uu < Mu; Uu++)
            for (let Xu = 0; Xu < Mu; Xu++) {
              const qu = uu[Yu(Zu, Uu, Xu)];
              if (0 === qu) continue;
              const fu = ju[0] + Zu,
                Cu = ju[1] + Uu,
                bu = ju[2] + Xu,
                cu = Eu(qu);
              if (null === cu) continue;
              const Nu = Xu * Mu + Zu;
              Cu > lu.heights[Nu] && (lu.heights[Nu] = Cu, lu.colours.set(cu, 3 * Nu));
              !wu(qu) && (wu(su(Zu + 1, Uu, Xu)) || wu(su(Zu - 1, Uu, Xu)) || wu(su(Zu, Uu + 1, Xu)) || wu(su(Zu, Uu - 1, Xu)) || wu(su(Zu, Uu, Xu + 1)) || wu(su(Zu, Uu, Xu - 1))) && (Gu.push(fu, Cu, bu), pu.push(cu[0], cu[1], cu[2]))
            }
        Zu % Du === Du - 1 && await du()
      }
      if (0 === Gu.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: Uu.name,
        surface: {
          positions: Int32Array.from(Gu),
          colours: Uint8Array.from(pu),
          count: Gu.length / 3
        },
        columnTops: [...gu.values()]
      }
    }

    function wu(uu) {
      if (0 === uu) return !0;
      const Eu = qu.f[uu];
      return void 0 === Eu || Eu.XN || Eu.transTex || !1 === Eu.solid
    }

    function Ju(uu) {
      let Eu = 1 / 0,
        ju = -1 / 0,
        su = 1 / 0,
        Uu = -1 / 0;
      for (const {
          chunkX: Ou,
          chunkZ: Yu,
          heights: hu
        }
        of uu) hu.forEach(((uu, Zu) => {
        if (uu === eu) return;
        const Xu = Ou * Mu + Zu % Mu,
          lu = Yu * Mu + Math.floor(Zu / Mu);
        Eu = Math.min(Eu, Xu), ju = Math.max(ju, Xu), su = Math.min(su, lu), Uu = Math.max(Uu, lu)
      }));
      const Zu = ju - Eu + 1,
        Xu = Uu - su + 1,
        lu = Math.max(1, Math.ceil(Zu / gu), Math.ceil(Xu / gu)),
        qu = Math.ceil(Zu / lu),
        fu = Math.ceil(Xu / lu),
        Cu = document.createElement("canvas");
      Cu.width = qu, Cu.height = fu;
      const bu = Cu.getContext("2d");
      if (!bu) throw new Error("Couldn't draw the schematic from above.");
      const cu = bu.createImageData(qu, fu),
        Nu = new Int32Array(qu * fu).fill(eu);
      for (const {
          chunkX: Ou,
          chunkZ: Yu,
          heights: hu,
          colours: Du
        }
        of uu) hu.forEach(((uu, Eu) => {
        const Uu = Ou * Mu + Eu % Mu,
          Zu = Yu * Mu + Math.floor(Eu / Mu),
          Xu = Math.floor((Zu - su) / lu) * qu + Math.floor((ju - Uu) / lu);
        uu === eu || uu <= Nu[Xu] || (Nu[Xu] = uu, cu.data.set(Du.subarray(3 * Eu, 3 * Eu + 3), 4 * Xu), cu.data[4 * Xu + 3] = 255)
      }));
      return bu.putImageData(cu, 0, 0), {
        maxX: ju,
        minZ: su,
        width: qu * lu,
        depth: fu * lu,
        canvas: Cu
      }
    }

    function du() {
      return new Promise((uu => {
        setTimeout(uu, 0)
      }))
    }
  },
  9505: (uu, Eu, ju) => {
    ju.d(Eu, {
      c: () => Uu,
      g: () => Zu
    });
    var su = ju(9456);
    const Uu = "Air",
      Zu = Object.freeze(new su.h(Uu, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);