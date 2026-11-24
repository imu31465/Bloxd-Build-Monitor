export const id = 187;
export const ids = [187];
export const modules = {
  37783: (mm, Tm, fm) => {
    var hm = fm(37785);

    function Am(mm) {
      for (var Tm, fm, Am = 0, am = mm.length, xm = 0; xm < mm.length;) {
        for (Tm = mm[xm], fm = 0; xm < am && mm[xm] === Tm;) ++xm, ++fm;
        Am += hm.log2(fm) / 7 | 0, Am += hm.log2(Tm >>> 0) / 7 | 0, Am += 2
      }
      return Am
    }
    Tm.size = Am, Tm.encode = function(mm, Tm) {
      Tm || (Tm = new Uint8Array(Am(mm)));
      for (var fm, hm, am = 0, xm = Tm.length, wm = 0; wm < mm.length;) {
        for (fm = mm[wm], hm = 0; wm < mm.length && mm[wm] === fm;) ++wm, ++hm;
        for (; am < xm && hm >= 128;) Tm[am++] = 128 + (127 & hm), hm >>>= 7;
        if (am >= xm) throw new Error("RLE buffer overflow");
        for (Tm[am++] = hm, fm >>>= 0; am < xm && fm >= 128;) Tm[am++] = 128 + (127 & fm), fm >>>= 7;
        if (am >= xm) throw new Error("RLE buffer overflow");
        Tm[am++] = fm
      }
      return Tm
    }, Tm.decode = function(mm, Tm) {
      for (var fm, hm, Am, am, xm = Tm.length, wm = mm.length, Dm = 0, im = 0; im < wm;) {
        for (fm = 0, hm = 0; im < wm && mm[im] >= 128;) fm += (127 & mm[im++]) << hm, hm += 7;
        if (fm += mm[im++] << hm, im >= wm) throw new Error("RLE buffer underrun");
        if (Dm + fm > xm) throw new Error("Chunk buffer overflow");
        for (Am = 0, hm = 0; im < wm && mm[im] >= 128;) Am += (127 & mm[im++]) << hm, hm += 7;
        if (im >= wm) throw new Error("RLE buffer underrun");
        for (Am += mm[im++] << hm, am = 0; am < fm; ++am) Tm[Dm++] = Am
      }
      return Tm
    }
  },
  37785: (mm, Tm) => {
    function fm(mm) {
      var Tm = 32;
      return (mm &= -mm) && Tm--, 65535 & mm && (Tm -= 16), 16711935 & mm && (Tm -= 8), 252645135 & mm && (Tm -= 4), 858993459 & mm && (Tm -= 2), 1431655765 & mm && (Tm -= 1), Tm
    }
    Tm.INT_BITS = 32, Tm.INT_MAX = 2147483647, Tm.INT_MIN = -1 << 31, Tm.sign = function(mm) {
      return (mm > 0) - (mm < 0)
    }, Tm.abs = function(mm) {
      var Tm = mm >> 31;
      return (mm ^ Tm) - Tm
    }, Tm.min = function(mm, Tm) {
      return Tm ^ (mm ^ Tm) & -(mm < Tm)
    }, Tm.max = function(mm, Tm) {
      return mm ^ (mm ^ Tm) & -(mm < Tm)
    }, Tm.isPow2 = function(mm) {
      return !(mm & mm - 1) && !!mm
    }, Tm.log2 = function(mm) {
      var Tm, fm;
      return Tm = (mm > 65535) << 4, Tm |= fm = ((mm >>>= Tm) > 255) << 3, Tm |= fm = ((mm >>>= fm) > 15) << 2, (Tm |= fm = ((mm >>>= fm) > 3) << 1) | (mm >>>= fm) >> 1
    }, Tm.log10 = function(mm) {
      return mm >= 1e9 ? 9 : mm >= 1e8 ? 8 : mm >= 1e7 ? 7 : mm >= 1e6 ? 6 : mm >= 1e5 ? 5 : mm >= 1e4 ? 4 : mm >= 1e3 ? 3 : mm >= 100 ? 2 : mm >= 10 ? 1 : 0
    }, Tm.popCount = function(mm) {
      return 16843009 * ((mm = (858993459 & (mm -= mm >>> 1 & 1431655765)) + (mm >>> 2 & 858993459)) + (mm >>> 4) & 252645135) >>> 24
    }, Tm.countTrailingZeros = fm, Tm.nextPow2 = function(mm) {
      return mm += 0 === mm, --mm, mm |= mm >>> 1, mm |= mm >>> 2, mm |= mm >>> 4, mm |= mm >>> 8, (mm |= mm >>> 16) + 1
    }, Tm.prevPow2 = function(mm) {
      return mm |= mm >>> 1, mm |= mm >>> 2, mm |= mm >>> 4, mm |= mm >>> 8, (mm |= mm >>> 16) - (mm >>> 1)
    }, Tm.parity = function(mm) {
      return mm ^= mm >>> 16, mm ^= mm >>> 8, mm ^= mm >>> 4, 27030 >>> (mm &= 15) & 1
    };
    var hm = new Array(256);
    ! function(mm) {
      for (var Tm = 0; Tm < 256; ++Tm) {
        var fm = Tm,
          hm = Tm,
          Am = 7;
        for (fm >>>= 1; fm; fm >>>= 1) hm <<= 1, hm |= 1 & fm, --Am;
        mm[Tm] = hm << Am & 255
      }
    }(hm), Tm.reverse = function(mm) {
      return hm[255 & mm] << 24 | hm[mm >>> 8 & 255] << 16 | hm[mm >>> 16 & 255] << 8 | hm[mm >>> 24 & 255]
    }, Tm.interleave2 = function(mm, Tm) {
      return (mm = 1431655765 & ((mm = 858993459 & ((mm = 252645135 & ((mm = 16711935 & ((mm &= 65535) | mm << 8)) | mm << 4)) | mm << 2)) | mm << 1)) | (Tm = 1431655765 & ((Tm = 858993459 & ((Tm = 252645135 & ((Tm = 16711935 & ((Tm &= 65535) | Tm << 8)) | Tm << 4)) | Tm << 2)) | Tm << 1)) << 1
    }, Tm.deinterleave2 = function(mm, Tm) {
      return (mm = 65535 & ((mm = 16711935 & ((mm = 252645135 & ((mm = 858993459 & ((mm = mm >>> Tm & 1431655765) | mm >>> 1)) | mm >>> 2)) | mm >>> 4)) | mm >>> 16)) << 16 >> 16
    }, Tm.interleave3 = function(mm, Tm, fm) {
      return mm = 1227133513 & ((mm = 3272356035 & ((mm = 251719695 & ((mm = 4278190335 & ((mm &= 1023) | mm << 16)) | mm << 8)) | mm << 4)) | mm << 2), (mm |= (Tm = 1227133513 & ((Tm = 3272356035 & ((Tm = 251719695 & ((Tm = 4278190335 & ((Tm &= 1023) | Tm << 16)) | Tm << 8)) | Tm << 4)) | Tm << 2)) << 1) | (fm = 1227133513 & ((fm = 3272356035 & ((fm = 251719695 & ((fm = 4278190335 & ((fm &= 1023) | fm << 16)) | fm << 8)) | fm << 4)) | fm << 2)) << 2
    }, Tm.deinterleave3 = function(mm, Tm) {
      return (mm = 1023 & ((mm = 4278190335 & ((mm = 251719695 & ((mm = 3272356035 & ((mm = mm >>> Tm & 1227133513) | mm >>> 2)) | mm >>> 4)) | mm >>> 8)) | mm >>> 16)) << 22 >> 22
    }, Tm.nextCombination = function(mm) {
      var Tm = mm | mm - 1;
      return Tm + 1 | (~Tm & -~Tm) - 1 >>> fm(mm) + 1
    }
  },
  39917: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      emptyColumnHeight: () => Km,
      loadHeatmapSchematic: () => Qm,
      readSchematicBlocks: () => nm
    });
    var hm = fm(3731),
      Am = fm.n(hm),
      am = fm(3716),
      xm = fm(37783),
      wm = fm(198),
      Dm = fm(9141);
    const im = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      Rm = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: im
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: im
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...im, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      pm = Am().Type.forSchema({
        type: "record",
        fields: Rm
      }),
      Em = Am().Type.forSchema({
        type: "record",
        fields: [...Rm, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...im, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: im
          }
        }]
      }),
      om = 2,
      Om = 6,
      Ym = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      qm = [150, 150, 150],
      jm = 16,
      Vm = 4096,
      Im = wm.f.MO,
      Km = -2147483648;
    async function Qm(mm) {
      const Tm = await nm(new Uint8Array(await mm.arrayBuffer()), await async function() {
        const {
          averageColors: mm
        } = await fm.e(204).then((() => fm(34376))), Tm = new Map;
        return fm => {
          var hm, Am, am, xm, wm;
          const im = Tm.get(fm);
          if (void 0 !== im) return im;
          const Rm = null !== (hm = null === (Am = Dm.i[fm]) || void 0 === Am ? void 0 : Am.name) && void 0 !== hm ? hm : "",
            pm = null !== (am = mm[Rm]) && void 0 !== am ? am : mm[Rm.split("|")[0]],
            Em = Ym[Rm.split("|")[0]],
            om = null !== (xm = null !== (wm = null === pm || void 0 === pm ? void 0 : pm[0]) && void 0 !== wm ? wm : Em) && void 0 !== xm ? xm : 0 === (null === pm || void 0 === pm ? void 0 : pm.length) ? null : qm;
          return Tm.set(fm, om), om
        }
      }());
      return {
        surface: Tm.surface,
        topDown: cm(Tm.columnTops)
      }
    }
    async function nm(mm, Tm) {
      var fm;
      if (mm.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const hm = new DataView(mm.buffer, mm.byteOffset, mm.byteLength).getUint32(0, !0);
      if (hm > Om) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const Am = (hm >= om ? Em : pm).decode(am.XO.from(mm.subarray(4)), 0).value;
      if (!Am) throw new Error("The file isn't a schematic.");
      if (0 === Am.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const wm = null !== (fm = Am.pasteOffset) && void 0 !== fm ? fm : {
          x: 0,
          y: 0,
          z: 0
        },
        Dm = [wm.x, wm.y, wm.z].map((mm => Math.floor(mm / Im))),
        im = Am.chunkData.map((mm => ({
          x: mm.x + Dm[0],
          y: mm.y + Dm[1],
          z: mm.z + Dm[2],
          rle: mm.rle
        }))),
        Rm = new Map;
      for (const [am, pm] of im.entries()) {
        const mm = new Uint16Array(Im ** 3);
        xm.decode(pm.rle, mm), Rm.set(`${pm.x},${pm.y},${pm.z}`, mm), am % jm === jm - 1 && await zm()
      }
      const Ym = (mm, Tm, fm) => mm * Im * Im + Tm * Im + fm,
        qm = (mm, Tm, fm) => {
          var hm, Am;
          const am = Math.floor(mm / Im),
            xm = Math.floor(Tm / Im),
            wm = Math.floor(fm / Im);
          return null !== (hm = null === (Am = Rm.get(`${am},${xm},${wm}`)) || void 0 === Am ? void 0 : Am[Ym(mm - am * Im, Tm - xm * Im, fm - wm * Im)]) && void 0 !== hm ? hm : 0
        },
        Vm = new Map,
        Qm = [],
        nm = [];
      for (const [am, xm] of im.entries()) {
        const mm = Rm.get(`${xm.x},${xm.y},${xm.z}`),
          fm = [xm.x * Im, xm.y * Im, xm.z * Im],
          hm = (Tm, hm, Am) => Tm < 0 || hm < 0 || Am < 0 || Tm >= Im || hm >= Im || Am >= Im ? qm(fm[0] + Tm, fm[1] + hm, fm[2] + Am) : mm[Ym(Tm, hm, Am)],
          Am = `${xm.x},${xm.z}`;
        let wm = Vm.get(Am);
        void 0 === wm && (wm = {
          chunkX: xm.x,
          chunkZ: xm.z,
          heights: new Int32Array(Im * Im).fill(Km),
          colours: new Uint8Array(Im * Im * 3)
        }, Vm.set(Am, wm));
        for (let am = 0; am < Im; am++)
          for (let Am = 0; Am < Im; Am++)
            for (let xm = 0; xm < Im; xm++) {
              const Dm = mm[Ym(am, Am, xm)];
              if (0 === Dm) continue;
              const im = fm[0] + am,
                Rm = fm[1] + Am,
                pm = fm[2] + xm,
                Em = Tm(Dm);
              if (null === Em) continue;
              const om = xm * Im + am;
              Rm > wm.heights[om] && (wm.heights[om] = Rm, wm.colours.set(Em, 3 * om));
              !Jm(Dm) && (Jm(hm(am + 1, Am, xm)) || Jm(hm(am - 1, Am, xm)) || Jm(hm(am, Am + 1, xm)) || Jm(hm(am, Am - 1, xm)) || Jm(hm(am, Am, xm + 1)) || Jm(hm(am, Am, xm - 1))) && (Qm.push(im, Rm, pm), nm.push(Em[0], Em[1], Em[2]))
            }
        am % jm === jm - 1 && await zm()
      }
      if (0 === Qm.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: Am.name,
        surface: {
          positions: Int32Array.from(Qm),
          colours: Uint8Array.from(nm),
          count: Qm.length / 3
        },
        columnTops: [...Vm.values()]
      }
    }

    function Jm(mm) {
      if (0 === mm) return !0;
      const Tm = Dm.i[mm];
      return void 0 === Tm || Tm.Qo || Tm.transTex || !1 === Tm.solid
    }

    function cm(mm) {
      let Tm = 1 / 0,
        fm = -1 / 0,
        hm = 1 / 0,
        Am = -1 / 0;
      for (const {
          chunkX: Om,
          chunkZ: Ym,
          heights: qm
        }
        of mm) qm.forEach(((mm, am) => {
        if (mm === Km) return;
        const xm = Om * Im + am % Im,
          wm = Ym * Im + Math.floor(am / Im);
        Tm = Math.min(Tm, xm), fm = Math.max(fm, xm), hm = Math.min(hm, wm), Am = Math.max(Am, wm)
      }));
      const am = fm - Tm + 1,
        xm = Am - hm + 1,
        wm = Math.max(1, Math.ceil(am / Vm), Math.ceil(xm / Vm)),
        Dm = Math.ceil(am / wm),
        im = Math.ceil(xm / wm),
        Rm = document.createElement("canvas");
      Rm.width = Dm, Rm.height = im;
      const pm = Rm.getContext("2d");
      if (!pm) throw new Error("Couldn't draw the schematic from above.");
      const Em = pm.createImageData(Dm, im),
        om = new Int32Array(Dm * im).fill(Km);
      for (const {
          chunkX: Om,
          chunkZ: Ym,
          heights: qm,
          colours: jm
        }
        of mm) qm.forEach(((mm, Tm) => {
        const Am = Om * Im + Tm % Im,
          am = Ym * Im + Math.floor(Tm / Im),
          xm = Math.floor((am - hm) / wm) * Dm + Math.floor((fm - Am) / wm);
        mm === Km || mm <= om[xm] || (om[xm] = mm, Em.data.set(jm.subarray(3 * Tm, 3 * Tm + 3), 4 * xm), Em.data[4 * xm + 3] = 255)
      }));
      return pm.putImageData(Em, 0, 0), {
        maxX: fm,
        minZ: hm,
        width: Dm * wm,
        depth: im * wm,
        canvas: Rm
      }
    }

    function zm() {
      return new Promise((mm => {
        setTimeout(mm, 0)
      }))
    }
  },
  9240: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am,
      e: () => am
    });
    var hm = fm(9184);
    const Am = "Air",
      am = Object.freeze(new hm.g(Am, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);