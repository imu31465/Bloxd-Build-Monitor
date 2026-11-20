export const id = 197;
export const ids = [197];
export const modules = {
  37493: (uu, Ru, yu) => {
    var Eu = yu(37499);

    function Ku(uu) {
      for (var Ru, yu, Ku = 0, Qu = uu.length, mu = 0; mu < uu.length;) {
        for (Ru = uu[mu], yu = 0; mu < Qu && uu[mu] === Ru;) ++mu, ++yu;
        Ku += Eu.log2(yu) / 7 | 0, Ku += Eu.log2(Ru >>> 0) / 7 | 0, Ku += 2
      }
      return Ku
    }
    Ru.size = Ku, Ru.encode = function(uu, Ru) {
      Ru || (Ru = new Uint8Array(Ku(uu)));
      for (var yu, Eu, Qu = 0, mu = Ru.length, Ju = 0; Ju < uu.length;) {
        for (yu = uu[Ju], Eu = 0; Ju < uu.length && uu[Ju] === yu;) ++Ju, ++Eu;
        for (; Qu < mu && Eu >= 128;) Ru[Qu++] = 128 + (127 & Eu), Eu >>>= 7;
        if (Qu >= mu) throw new Error("RLE buffer overflow");
        for (Ru[Qu++] = Eu, yu >>>= 0; Qu < mu && yu >= 128;) Ru[Qu++] = 128 + (127 & yu), yu >>>= 7;
        if (Qu >= mu) throw new Error("RLE buffer overflow");
        Ru[Qu++] = yu
      }
      return Ru
    }, Ru.decode = function(uu, Ru) {
      for (var yu, Eu, Ku, Qu, mu = Ru.length, Ju = uu.length, Nu = 0, Xu = 0; Xu < Ju;) {
        for (yu = 0, Eu = 0; Xu < Ju && uu[Xu] >= 128;) yu += (127 & uu[Xu++]) << Eu, Eu += 7;
        if (yu += uu[Xu++] << Eu, Xu >= Ju) throw new Error("RLE buffer underrun");
        if (Nu + yu > mu) throw new Error("Chunk buffer overflow");
        for (Ku = 0, Eu = 0; Xu < Ju && uu[Xu] >= 128;) Ku += (127 & uu[Xu++]) << Eu, Eu += 7;
        if (Xu >= Ju) throw new Error("RLE buffer underrun");
        for (Ku += uu[Xu++] << Eu, Qu = 0; Qu < yu; ++Qu) Ru[Nu++] = Ku
      }
      return Ru
    }
  },
  37499: (uu, Ru) => {
    function yu(uu) {
      var Ru = 32;
      return (uu &= -uu) && Ru--, 65535 & uu && (Ru -= 16), 16711935 & uu && (Ru -= 8), 252645135 & uu && (Ru -= 4), 858993459 & uu && (Ru -= 2), 1431655765 & uu && (Ru -= 1), Ru
    }
    Ru.INT_BITS = 32, Ru.INT_MAX = 2147483647, Ru.INT_MIN = -1 << 31, Ru.sign = function(uu) {
      return (uu > 0) - (uu < 0)
    }, Ru.abs = function(uu) {
      var Ru = uu >> 31;
      return (uu ^ Ru) - Ru
    }, Ru.min = function(uu, Ru) {
      return Ru ^ (uu ^ Ru) & -(uu < Ru)
    }, Ru.max = function(uu, Ru) {
      return uu ^ (uu ^ Ru) & -(uu < Ru)
    }, Ru.isPow2 = function(uu) {
      return !(uu & uu - 1) && !!uu
    }, Ru.log2 = function(uu) {
      var Ru, yu;
      return Ru = (uu > 65535) << 4, Ru |= yu = ((uu >>>= Ru) > 255) << 3, Ru |= yu = ((uu >>>= yu) > 15) << 2, (Ru |= yu = ((uu >>>= yu) > 3) << 1) | (uu >>>= yu) >> 1
    }, Ru.log10 = function(uu) {
      return uu >= 1e9 ? 9 : uu >= 1e8 ? 8 : uu >= 1e7 ? 7 : uu >= 1e6 ? 6 : uu >= 1e5 ? 5 : uu >= 1e4 ? 4 : uu >= 1e3 ? 3 : uu >= 100 ? 2 : uu >= 10 ? 1 : 0
    }, Ru.popCount = function(uu) {
      return 16843009 * ((uu = (858993459 & (uu -= uu >>> 1 & 1431655765)) + (uu >>> 2 & 858993459)) + (uu >>> 4) & 252645135) >>> 24
    }, Ru.countTrailingZeros = yu, Ru.nextPow2 = function(uu) {
      return uu += 0 === uu, --uu, uu |= uu >>> 1, uu |= uu >>> 2, uu |= uu >>> 4, uu |= uu >>> 8, (uu |= uu >>> 16) + 1
    }, Ru.prevPow2 = function(uu) {
      return uu |= uu >>> 1, uu |= uu >>> 2, uu |= uu >>> 4, uu |= uu >>> 8, (uu |= uu >>> 16) - (uu >>> 1)
    }, Ru.parity = function(uu) {
      return uu ^= uu >>> 16, uu ^= uu >>> 8, uu ^= uu >>> 4, 27030 >>> (uu &= 15) & 1
    };
    var Eu = new Array(256);
    ! function(uu) {
      for (var Ru = 0; Ru < 256; ++Ru) {
        var yu = Ru,
          Eu = Ru,
          Ku = 7;
        for (yu >>>= 1; yu; yu >>>= 1) Eu <<= 1, Eu |= 1 & yu, --Ku;
        uu[Ru] = Eu << Ku & 255
      }
    }(Eu), Ru.reverse = function(uu) {
      return Eu[255 & uu] << 24 | Eu[uu >>> 8 & 255] << 16 | Eu[uu >>> 16 & 255] << 8 | Eu[uu >>> 24 & 255]
    }, Ru.interleave2 = function(uu, Ru) {
      return (uu = 1431655765 & ((uu = 858993459 & ((uu = 252645135 & ((uu = 16711935 & ((uu &= 65535) | uu << 8)) | uu << 4)) | uu << 2)) | uu << 1)) | (Ru = 1431655765 & ((Ru = 858993459 & ((Ru = 252645135 & ((Ru = 16711935 & ((Ru &= 65535) | Ru << 8)) | Ru << 4)) | Ru << 2)) | Ru << 1)) << 1
    }, Ru.deinterleave2 = function(uu, Ru) {
      return (uu = 65535 & ((uu = 16711935 & ((uu = 252645135 & ((uu = 858993459 & ((uu = uu >>> Ru & 1431655765) | uu >>> 1)) | uu >>> 2)) | uu >>> 4)) | uu >>> 16)) << 16 >> 16
    }, Ru.interleave3 = function(uu, Ru, yu) {
      return uu = 1227133513 & ((uu = 3272356035 & ((uu = 251719695 & ((uu = 4278190335 & ((uu &= 1023) | uu << 16)) | uu << 8)) | uu << 4)) | uu << 2), (uu |= (Ru = 1227133513 & ((Ru = 3272356035 & ((Ru = 251719695 & ((Ru = 4278190335 & ((Ru &= 1023) | Ru << 16)) | Ru << 8)) | Ru << 4)) | Ru << 2)) << 1) | (yu = 1227133513 & ((yu = 3272356035 & ((yu = 251719695 & ((yu = 4278190335 & ((yu &= 1023) | yu << 16)) | yu << 8)) | yu << 4)) | yu << 2)) << 2
    }, Ru.deinterleave3 = function(uu, Ru) {
      return (uu = 1023 & ((uu = 4278190335 & ((uu = 251719695 & ((uu = 3272356035 & ((uu = uu >>> Ru & 1227133513) | uu >>> 2)) | uu >>> 4)) | uu >>> 8)) | uu >>> 16)) << 22 >> 22
    }, Ru.nextCombination = function(uu) {
      var Ru = uu | uu - 1;
      return Ru + 1 | (~Ru & -~Ru) - 1 >>> yu(uu) + 1
    }
  },
  39363: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      emptyColumnHeight: () => du,
      loadHeatmapSchematic: () => bu,
      readSchematicBlocks: () => Cu
    });
    var Eu = yu(3576),
      Ku = yu.n(Eu),
      Qu = yu(3548),
      mu = yu(37493),
      Ju = yu(212),
      Nu = yu(9158);
    const Xu = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      Vu = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: Xu
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: Xu
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...Xu, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      ru = Ku().Type.forSchema({
        type: "record",
        fields: Vu
      }),
      Bu = Ku().Type.forSchema({
        type: "record",
        fields: [...Vu, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...Xu, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: Xu
          }
        }]
      }),
      xu = 2,
      Su = 6,
      pu = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      Tu = [150, 150, 150],
      Wu = 16,
      ju = 4096,
      Hu = Ju.f.jS,
      du = -2147483648;
    async function bu(uu) {
      const Ru = await Cu(new Uint8Array(await uu.arrayBuffer()), await async function() {
        const {
          averageColors: uu
        } = await yu.e(201).then((() => yu(34131))), Ru = new Map;
        return yu => {
          var Eu, Ku, Qu, mu, Ju;
          const Xu = Ru.get(yu);
          if (void 0 !== Xu) return Xu;
          const Vu = null !== (Eu = null === (Ku = Nu.j[yu]) || void 0 === Ku ? void 0 : Ku.name) && void 0 !== Eu ? Eu : "",
            ru = null !== (Qu = uu[Vu]) && void 0 !== Qu ? Qu : uu[Vu.split("|")[0]],
            Bu = pu[Vu.split("|")[0]],
            xu = null !== (mu = null !== (Ju = null === ru || void 0 === ru ? void 0 : ru[0]) && void 0 !== Ju ? Ju : Bu) && void 0 !== mu ? mu : 0 === (null === ru || void 0 === ru ? void 0 : ru.length) ? null : Tu;
          return Ru.set(yu, xu), xu
        }
      }());
      return {
        surface: Ru.surface,
        topDown: eu(Ru.columnTops)
      }
    }
    async function Cu(uu, Ru) {
      var yu;
      if (uu.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const Eu = new DataView(uu.buffer, uu.byteOffset, uu.byteLength).getUint32(0, !0);
      if (Eu > Su) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const Ku = (Eu >= xu ? Bu : ru).decode(Qu.XS.from(uu.subarray(4)), 0).value;
      if (!Ku) throw new Error("The file isn't a schematic.");
      if (0 === Ku.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const Ju = null !== (yu = Ku.pasteOffset) && void 0 !== yu ? yu : {
          x: 0,
          y: 0,
          z: 0
        },
        Nu = [Ju.x, Ju.y, Ju.z].map((uu => Math.floor(uu / Hu))),
        Xu = Ku.chunkData.map((uu => ({
          x: uu.x + Nu[0],
          y: uu.y + Nu[1],
          z: uu.z + Nu[2],
          rle: uu.rle
        }))),
        Vu = new Map;
      for (const [Qu, ru] of Xu.entries()) {
        const uu = new Uint16Array(Hu ** 3);
        mu.decode(ru.rle, uu), Vu.set(`${ru.x},${ru.y},${ru.z}`, uu), Qu % Wu === Wu - 1 && await Au()
      }
      const pu = (uu, Ru, yu) => uu * Hu * Hu + Ru * Hu + yu,
        Tu = (uu, Ru, yu) => {
          var Eu, Ku;
          const Qu = Math.floor(uu / Hu),
            mu = Math.floor(Ru / Hu),
            Ju = Math.floor(yu / Hu);
          return null !== (Eu = null === (Ku = Vu.get(`${Qu},${mu},${Ju}`)) || void 0 === Ku ? void 0 : Ku[pu(uu - Qu * Hu, Ru - mu * Hu, yu - Ju * Hu)]) && void 0 !== Eu ? Eu : 0
        },
        ju = new Map,
        bu = [],
        Cu = [];
      for (const [Qu, mu] of Xu.entries()) {
        const uu = Vu.get(`${mu.x},${mu.y},${mu.z}`),
          yu = [mu.x * Hu, mu.y * Hu, mu.z * Hu],
          Eu = (Ru, Eu, Ku) => Ru < 0 || Eu < 0 || Ku < 0 || Ru >= Hu || Eu >= Hu || Ku >= Hu ? Tu(yu[0] + Ru, yu[1] + Eu, yu[2] + Ku) : uu[pu(Ru, Eu, Ku)],
          Ku = `${mu.x},${mu.z}`;
        let Ju = ju.get(Ku);
        void 0 === Ju && (Ju = {
          chunkX: mu.x,
          chunkZ: mu.z,
          heights: new Int32Array(Hu * Hu).fill(du),
          colours: new Uint8Array(Hu * Hu * 3)
        }, ju.set(Ku, Ju));
        for (let Qu = 0; Qu < Hu; Qu++)
          for (let Ku = 0; Ku < Hu; Ku++)
            for (let mu = 0; mu < Hu; mu++) {
              const Nu = uu[pu(Qu, Ku, mu)];
              if (0 === Nu) continue;
              const Xu = yu[0] + Qu,
                Vu = yu[1] + Ku,
                ru = yu[2] + mu,
                Bu = Ru(Nu);
              if (null === Bu) continue;
              const xu = mu * Hu + Qu;
              Vu > Ju.heights[xu] && (Ju.heights[xu] = Vu, Ju.colours.set(Bu, 3 * xu));
              !ku(Nu) && (ku(Eu(Qu + 1, Ku, mu)) || ku(Eu(Qu - 1, Ku, mu)) || ku(Eu(Qu, Ku + 1, mu)) || ku(Eu(Qu, Ku - 1, mu)) || ku(Eu(Qu, Ku, mu + 1)) || ku(Eu(Qu, Ku, mu - 1))) && (bu.push(Xu, Vu, ru), Cu.push(Bu[0], Bu[1], Bu[2]))
            }
        Qu % Wu === Wu - 1 && await Au()
      }
      if (0 === bu.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: Ku.name,
        surface: {
          positions: Int32Array.from(bu),
          colours: Uint8Array.from(Cu),
          count: bu.length / 3
        },
        columnTops: [...ju.values()]
      }
    }

    function ku(uu) {
      if (0 === uu) return !0;
      const Ru = Nu.j[uu];
      return void 0 === Ru || Ru.OB || Ru.transTex || !1 === Ru.solid
    }

    function eu(uu) {
      let Ru = 1 / 0,
        yu = -1 / 0,
        Eu = 1 / 0,
        Ku = -1 / 0;
      for (const {
          chunkX: Su,
          chunkZ: pu,
          heights: Tu
        }
        of uu) Tu.forEach(((uu, Qu) => {
        if (uu === du) return;
        const mu = Su * Hu + Qu % Hu,
          Ju = pu * Hu + Math.floor(Qu / Hu);
        Ru = Math.min(Ru, mu), yu = Math.max(yu, mu), Eu = Math.min(Eu, Ju), Ku = Math.max(Ku, Ju)
      }));
      const Qu = yu - Ru + 1,
        mu = Ku - Eu + 1,
        Ju = Math.max(1, Math.ceil(Qu / ju), Math.ceil(mu / ju)),
        Nu = Math.ceil(Qu / Ju),
        Xu = Math.ceil(mu / Ju),
        Vu = document.createElement("canvas");
      Vu.width = Nu, Vu.height = Xu;
      const ru = Vu.getContext("2d");
      if (!ru) throw new Error("Couldn't draw the schematic from above.");
      const Bu = ru.createImageData(Nu, Xu),
        xu = new Int32Array(Nu * Xu).fill(du);
      for (const {
          chunkX: Su,
          chunkZ: pu,
          heights: Tu,
          colours: Wu
        }
        of uu) Tu.forEach(((uu, Ru) => {
        const Ku = Su * Hu + Ru % Hu,
          Qu = pu * Hu + Math.floor(Ru / Hu),
          mu = Math.floor((Qu - Eu) / Ju) * Nu + Math.floor((yu - Ku) / Ju);
        uu === du || uu <= xu[mu] || (xu[mu] = uu, Bu.data.set(Wu.subarray(3 * Ru, 3 * Ru + 3), 4 * mu), Bu.data[4 * mu + 3] = 255)
      }));
      return ru.putImageData(Bu, 0, 0), {
        maxX: yu,
        minZ: Eu,
        width: Nu * Ju,
        depth: Xu * Ju,
        canvas: Vu
      }
    }

    function Au() {
      return new Promise((uu => {
        setTimeout(uu, 0)
      }))
    }
  },
  9247: (uu, Ru, yu) => {
    yu.d(Ru, {
      e: () => Ku,
      h: () => Qu
    });
    var Eu = yu(9205);
    const Ku = "Air",
      Qu = Object.freeze(new Eu.e(Ku, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);