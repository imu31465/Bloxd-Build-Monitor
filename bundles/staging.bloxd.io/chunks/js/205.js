export const id = 205;
export const ids = [205];
export const modules = {
  38543: (ee, ie, He) => {
    var ye = He(38552);

    function be(ee) {
      for (var ie, He, be = 0, Me = ee.length, Ke = 0; Ke < ee.length;) {
        for (ie = ee[Ke], He = 0; Ke < Me && ee[Ke] === ie;) ++Ke, ++He;
        be += ye.log2(He) / 7 | 0, be += ye.log2(ie >>> 0) / 7 | 0, be += 2
      }
      return be
    }
    ie.size = be, ie.encode = function(ee, ie) {
      ie || (ie = new Uint8Array(be(ee)));
      for (var He, ye, Me = 0, Ke = ie.length, Ue = 0; Ue < ee.length;) {
        for (He = ee[Ue], ye = 0; Ue < ee.length && ee[Ue] === He;) ++Ue, ++ye;
        for (; Me < Ke && ye >= 128;) ie[Me++] = 128 + (127 & ye), ye >>>= 7;
        if (Me >= Ke) throw new Error("RLE buffer overflow");
        for (ie[Me++] = ye, He >>>= 0; Me < Ke && He >= 128;) ie[Me++] = 128 + (127 & He), He >>>= 7;
        if (Me >= Ke) throw new Error("RLE buffer overflow");
        ie[Me++] = He
      }
      return ie
    }, ie.decode = function(ee, ie) {
      for (var He, ye, be, Me, Ke = ie.length, Ue = ee.length, Fe = 0, Je = 0; Je < Ue;) {
        for (He = 0, ye = 0; Je < Ue && ee[Je] >= 128;) He += (127 & ee[Je++]) << ye, ye += 7;
        if (He += ee[Je++] << ye, Je >= Ue) throw new Error("RLE buffer underrun");
        if (Fe + He > Ke) throw new Error("Chunk buffer overflow");
        for (be = 0, ye = 0; Je < Ue && ee[Je] >= 128;) be += (127 & ee[Je++]) << ye, ye += 7;
        if (Je >= Ue) throw new Error("RLE buffer underrun");
        for (be += ee[Je++] << ye, Me = 0; Me < He; ++Me) ie[Fe++] = be
      }
      return ie
    }
  },
  38552: (ee, ie) => {
    function He(ee) {
      var ie = 32;
      return (ee &= -ee) && ie--, 65535 & ee && (ie -= 16), 16711935 & ee && (ie -= 8), 252645135 & ee && (ie -= 4), 858993459 & ee && (ie -= 2), 1431655765 & ee && (ie -= 1), ie
    }
    ie.INT_BITS = 32, ie.INT_MAX = 2147483647, ie.INT_MIN = -1 << 31, ie.sign = function(ee) {
      return (ee > 0) - (ee < 0)
    }, ie.abs = function(ee) {
      var ie = ee >> 31;
      return (ee ^ ie) - ie
    }, ie.min = function(ee, ie) {
      return ie ^ (ee ^ ie) & -(ee < ie)
    }, ie.max = function(ee, ie) {
      return ee ^ (ee ^ ie) & -(ee < ie)
    }, ie.isPow2 = function(ee) {
      return !(ee & ee - 1) && !!ee
    }, ie.log2 = function(ee) {
      var ie, He;
      return ie = (ee > 65535) << 4, ie |= He = ((ee >>>= ie) > 255) << 3, ie |= He = ((ee >>>= He) > 15) << 2, (ie |= He = ((ee >>>= He) > 3) << 1) | (ee >>>= He) >> 1
    }, ie.log10 = function(ee) {
      return ee >= 1e9 ? 9 : ee >= 1e8 ? 8 : ee >= 1e7 ? 7 : ee >= 1e6 ? 6 : ee >= 1e5 ? 5 : ee >= 1e4 ? 4 : ee >= 1e3 ? 3 : ee >= 100 ? 2 : ee >= 10 ? 1 : 0
    }, ie.popCount = function(ee) {
      return 16843009 * ((ee = (858993459 & (ee -= ee >>> 1 & 1431655765)) + (ee >>> 2 & 858993459)) + (ee >>> 4) & 252645135) >>> 24
    }, ie.countTrailingZeros = He, ie.nextPow2 = function(ee) {
      return ee += 0 === ee, --ee, ee |= ee >>> 1, ee |= ee >>> 2, ee |= ee >>> 4, ee |= ee >>> 8, (ee |= ee >>> 16) + 1
    }, ie.prevPow2 = function(ee) {
      return ee |= ee >>> 1, ee |= ee >>> 2, ee |= ee >>> 4, ee |= ee >>> 8, (ee |= ee >>> 16) - (ee >>> 1)
    }, ie.parity = function(ee) {
      return ee ^= ee >>> 16, ee ^= ee >>> 8, ee ^= ee >>> 4, 27030 >>> (ee &= 15) & 1
    };
    var ye = new Array(256);
    ! function(ee) {
      for (var ie = 0; ie < 256; ++ie) {
        var He = ie,
          ye = ie,
          be = 7;
        for (He >>>= 1; He; He >>>= 1) ye <<= 1, ye |= 1 & He, --be;
        ee[ie] = ye << be & 255
      }
    }(ye), ie.reverse = function(ee) {
      return ye[255 & ee] << 24 | ye[ee >>> 8 & 255] << 16 | ye[ee >>> 16 & 255] << 8 | ye[ee >>> 24 & 255]
    }, ie.interleave2 = function(ee, ie) {
      return (ee = 1431655765 & ((ee = 858993459 & ((ee = 252645135 & ((ee = 16711935 & ((ee &= 65535) | ee << 8)) | ee << 4)) | ee << 2)) | ee << 1)) | (ie = 1431655765 & ((ie = 858993459 & ((ie = 252645135 & ((ie = 16711935 & ((ie &= 65535) | ie << 8)) | ie << 4)) | ie << 2)) | ie << 1)) << 1
    }, ie.deinterleave2 = function(ee, ie) {
      return (ee = 65535 & ((ee = 16711935 & ((ee = 252645135 & ((ee = 858993459 & ((ee = ee >>> ie & 1431655765) | ee >>> 1)) | ee >>> 2)) | ee >>> 4)) | ee >>> 16)) << 16 >> 16
    }, ie.interleave3 = function(ee, ie, He) {
      return ee = 1227133513 & ((ee = 3272356035 & ((ee = 251719695 & ((ee = 4278190335 & ((ee &= 1023) | ee << 16)) | ee << 8)) | ee << 4)) | ee << 2), (ee |= (ie = 1227133513 & ((ie = 3272356035 & ((ie = 251719695 & ((ie = 4278190335 & ((ie &= 1023) | ie << 16)) | ie << 8)) | ie << 4)) | ie << 2)) << 1) | (He = 1227133513 & ((He = 3272356035 & ((He = 251719695 & ((He = 4278190335 & ((He &= 1023) | He << 16)) | He << 8)) | He << 4)) | He << 2)) << 2
    }, ie.deinterleave3 = function(ee, ie) {
      return (ee = 1023 & ((ee = 4278190335 & ((ee = 251719695 & ((ee = 3272356035 & ((ee = ee >>> ie & 1227133513) | ee >>> 2)) | ee >>> 4)) | ee >>> 8)) | ee >>> 16)) << 22 >> 22
    }, ie.nextCombination = function(ee) {
      var ie = ee | ee - 1;
      return ie + 1 | (~ie & -~ie) - 1 >>> He(ee) + 1
    }
  },
  40900: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      emptyColumnHeight: () => Be,
      loadHeatmapSchematic: () => Ee,
      readSchematicBlocks: () => ge
    });
    var ye = He(4146),
      be = He.n(ye),
      Me = He(4128),
      Ke = He(38543),
      Ue = He(186),
      Fe = He(9961),
      Je = He(40301);
    const oe = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      Re = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: oe
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: oe
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...oe, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      ke = be().Type.forSchema({
        type: "record",
        fields: Re
      }),
      qe = be().Type.forSchema({
        type: "record",
        fields: [...Re, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...oe, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: oe
          }
        }]
      }),
      fe = 2,
      Te = 6,
      pe = 16,
      Xe = 4096,
      ze = Ue.g.BR,
      Be = -2147483648;
    async function Ee(ee) {
      const ie = await (0, Je.b)(),
        He = await ge(new Uint8Array(await ee.arrayBuffer()), (ee => ie.get(ee)));
      return {
        surface: He.surface,
        topDown: de(He.columnTops)
      }
    }
    async function ge(ee, ie) {
      var He;
      if (ee.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const ye = new DataView(ee.buffer, ee.byteOffset, ee.byteLength).getUint32(0, !0);
      if (ye > Te) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const be = (ye >= fe ? qe : ke).decode(Me.bR.from(ee.subarray(4)), 0).value;
      if (!be) throw new Error("The file isn't a schematic.");
      if (0 === be.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const Ue = null !== (He = be.pasteOffset) && void 0 !== He ? He : {
          x: 0,
          y: 0,
          z: 0
        },
        Fe = [Ue.x, Ue.y, Ue.z].map((ee => Math.floor(ee / ze))),
        Je = be.chunkData.map((ee => ({
          x: ee.x + Fe[0],
          y: ee.y + Fe[1],
          z: ee.z + Fe[2],
          rle: ee.rle
        }))),
        oe = new Map;
      for (const [Me, ke] of Je.entries()) {
        const ee = new Uint16Array(ze ** 3);
        Ke.decode(ke.rle, ee), oe.set(`${ke.x},${ke.y},${ke.z}`, ee), Me % pe === pe - 1 && await We()
      }
      const Re = (ee, ie, He) => ee * ze * ze + ie * ze + He,
        Xe = (ee, ie, He) => {
          var ye, be;
          const Me = Math.floor(ee / ze),
            Ke = Math.floor(ie / ze),
            Ue = Math.floor(He / ze);
          return null !== (ye = null === (be = oe.get(`${Me},${Ke},${Ue}`)) || void 0 === be ? void 0 : be[Re(ee - Me * ze, ie - Ke * ze, He - Ue * ze)]) && void 0 !== ye ? ye : 0
        },
        Ee = new Map,
        ge = [],
        de = [];
      for (const [Me, Ke] of Je.entries()) {
        const ee = oe.get(`${Ke.x},${Ke.y},${Ke.z}`),
          He = [Ke.x * ze, Ke.y * ze, Ke.z * ze],
          ye = (ie, ye, be) => ie < 0 || ye < 0 || be < 0 || ie >= ze || ye >= ze || be >= ze ? Xe(He[0] + ie, He[1] + ye, He[2] + be) : ee[Re(ie, ye, be)],
          be = `${Ke.x},${Ke.z}`;
        let Ue = Ee.get(be);
        void 0 === Ue && (Ue = {
          chunkX: Ke.x,
          chunkZ: Ke.z,
          heights: new Int32Array(ze * ze).fill(Be),
          colours: new Uint8Array(ze * ze * 3)
        }, Ee.set(be, Ue));
        for (let Me = 0; Me < ze; Me++)
          for (let be = 0; be < ze; be++)
            for (let Ke = 0; Ke < ze; Ke++) {
              const Fe = ee[Re(Me, be, Ke)];
              if (0 === Fe) continue;
              const Je = He[0] + Me,
                oe = He[1] + be,
                ke = He[2] + Ke,
                qe = ie(Fe);
              if (null === qe) continue;
              const fe = Ke * ze + Me;
              oe > Ue.heights[fe] && (Ue.heights[fe] = oe, Ue.colours.set(qe, 3 * fe));
              !Oe(Fe) && (Oe(ye(Me + 1, be, Ke)) || Oe(ye(Me - 1, be, Ke)) || Oe(ye(Me, be + 1, Ke)) || Oe(ye(Me, be - 1, Ke)) || Oe(ye(Me, be, Ke + 1)) || Oe(ye(Me, be, Ke - 1))) && (ge.push(Je, oe, ke), de.push(qe[0], qe[1], qe[2]))
            }
        Me % pe === pe - 1 && await We()
      }
      if (0 === ge.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: be.name,
        surface: {
          positions: Int32Array.from(ge),
          colours: Uint8Array.from(de),
          count: ge.length / 3
        },
        columnTops: [...Ee.values()]
      }
    }

    function Oe(ee) {
      if (0 === ee) return !0;
      const ie = Fe.i[ee];
      return void 0 === ie || ie.Lq || ie.transTex || !1 === ie.solid
    }

    function de(ee) {
      let ie = 1 / 0,
        He = -1 / 0,
        ye = 1 / 0,
        be = -1 / 0;
      for (const {
          chunkX: fe,
          chunkZ: Te,
          heights: pe
        }
        of ee) pe.forEach(((ee, Me) => {
        if (ee === Be) return;
        const Ke = fe * ze + Me % ze,
          Ue = Te * ze + Math.floor(Me / ze);
        ie = Math.min(ie, Ke), He = Math.max(He, Ke), ye = Math.min(ye, Ue), be = Math.max(be, Ue)
      }));
      const Me = He - ie + 1,
        Ke = be - ye + 1,
        Ue = Math.max(1, Math.ceil(Me / Xe), Math.ceil(Ke / Xe)),
        Fe = Math.ceil(Me / Ue),
        Je = Math.ceil(Ke / Ue),
        oe = document.createElement("canvas");
      oe.width = Fe, oe.height = Je;
      const Re = oe.getContext("2d");
      if (!Re) throw new Error("Couldn't draw the schematic from above.");
      const ke = Re.createImageData(Fe, Je),
        qe = new Int32Array(Fe * Je).fill(Be);
      for (const {
          chunkX: fe,
          chunkZ: Te,
          heights: pe,
          colours: Xe
        }
        of ee) pe.forEach(((ee, ie) => {
        const be = fe * ze + ie % ze,
          Me = Te * ze + Math.floor(ie / ze),
          Ke = Math.floor((Me - ye) / Ue) * Fe + Math.floor((He - be) / Ue);
        ee === Be || ee <= qe[Ke] || (qe[Ke] = ee, ke.data.set(Xe.subarray(3 * ie, 3 * ie + 3), 4 * Ke), ke.data[4 * Ke + 3] = 255)
      }));
      return Re.putImageData(ke, 0, 0), {
        maxX: He,
        minZ: ye,
        width: Fe * Ue,
        depth: Je * Ue,
        canvas: oe
      }
    }

    function We() {
      return new Promise((ee => {
        setTimeout(ee, 0)
      }))
    }
  },
  40301: (ee, ie, He) => {
    He.d(ie, {
      b: () => be
    });
    var ye = He(40306);
    async function be() {
      const {
        averageColors: ee
      } = await He.e(228).then((() => He(34995)));
      return new ye.e(ee)
    }
  },
  40306: (ee, ie, He) => {
    He.d(ie, {
      e: () => Ue,
      h: () => Ke
    });
    var ye = He(9961);
    const be = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      Me = [150, 150, 150],
      Ke = -2147483648;
    class Ue {
      constructor(ee) {
        this.averages = ee, this.byId = new Map
      }
      get(ee) {
        var ie, He, Ke, Ue, Fe;
        const Je = this.byId.get(ee);
        if (void 0 !== Je) return Je;
        const oe = null !== (ie = null === (He = ye.i[ee]) || void 0 === He ? void 0 : He.name) && void 0 !== ie ? ie : "",
          Re = oe.split("|")[0],
          ke = null !== (Ke = this.averages[oe]) && void 0 !== Ke ? Ke : this.averages[Re],
          qe = null !== (Ue = null !== (Fe = null === ke || void 0 === ke ? void 0 : ke[0]) && void 0 !== Fe ? Fe : be[Re]) && void 0 !== Ue ? Ue : 0 === (null === ke || void 0 === ke ? void 0 : ke.length) ? null : Me;
        return this.byId.set(ee, qe), qe
      }
      getDrawnIds() {
        const ee = new Uint8Array(65536);
        for (let ie = 1; ie < 65536; ie++) void 0 !== ye.i[ie] && null !== this.get(ie) && (ee[ie] = 1);
        return ee
      }
      drawPixel(ee, ie, He, ye, be, Me) {
        const Ue = function(ee, ie, He) {
            const ye = ee - ie + (ee - He);
            return Math.max(.65, Math.min(1.2, .97 + .055 * ye))
          }(ye, be === Ke ? ye : be, Me === Ke ? ye : Me),
          Fe = this.get(He);
        ee[ie] = Fe[0] * Ue, ee[ie + 1] = Fe[1] * Ue, ee[ie + 2] = Fe[2] * Ue, ee[ie + 3] = 255
      }
    }
  },
  10063: (ee, ie, He) => {
    He.d(ie, {
      e: () => be,
      f: () => Me
    });
    var ye = He(10008);
    const be = "Air",
      Me = Object.freeze(new ye.e(be, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);