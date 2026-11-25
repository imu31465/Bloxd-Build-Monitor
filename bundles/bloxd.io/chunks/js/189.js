export const id = 189;
export const ids = [189];
export const modules = {
  37980: (tt, et, Vt) => {
    var Ot = Vt(37982);

    function qt(tt) {
      for (var et, Vt, qt = 0, Dt = tt.length, mt = 0; mt < tt.length;) {
        for (et = tt[mt], Vt = 0; mt < Dt && tt[mt] === et;) ++mt, ++Vt;
        qt += Ot.log2(Vt) / 7 | 0, qt += Ot.log2(et >>> 0) / 7 | 0, qt += 2
      }
      return qt
    }
    et.size = qt, et.encode = function(tt, et) {
      et || (et = new Uint8Array(qt(tt)));
      for (var Vt, Ot, Dt = 0, mt = et.length, dt = 0; dt < tt.length;) {
        for (Vt = tt[dt], Ot = 0; dt < tt.length && tt[dt] === Vt;) ++dt, ++Ot;
        for (; Dt < mt && Ot >= 128;) et[Dt++] = 128 + (127 & Ot), Ot >>>= 7;
        if (Dt >= mt) throw new Error("RLE buffer overflow");
        for (et[Dt++] = Ot, Vt >>>= 0; Dt < mt && Vt >= 128;) et[Dt++] = 128 + (127 & Vt), Vt >>>= 7;
        if (Dt >= mt) throw new Error("RLE buffer overflow");
        et[Dt++] = Vt
      }
      return et
    }, et.decode = function(tt, et) {
      for (var Vt, Ot, qt, Dt, mt = et.length, dt = tt.length, jt = 0, Ht = 0; Ht < dt;) {
        for (Vt = 0, Ot = 0; Ht < dt && tt[Ht] >= 128;) Vt += (127 & tt[Ht++]) << Ot, Ot += 7;
        if (Vt += tt[Ht++] << Ot, Ht >= dt) throw new Error("RLE buffer underrun");
        if (jt + Vt > mt) throw new Error("Chunk buffer overflow");
        for (qt = 0, Ot = 0; Ht < dt && tt[Ht] >= 128;) qt += (127 & tt[Ht++]) << Ot, Ot += 7;
        if (Ht >= dt) throw new Error("RLE buffer underrun");
        for (qt += tt[Ht++] << Ot, Dt = 0; Dt < Vt; ++Dt) et[jt++] = qt
      }
      return et
    }
  },
  37982: (tt, et) => {
    function Vt(tt) {
      var et = 32;
      return (tt &= -tt) && et--, 65535 & tt && (et -= 16), 16711935 & tt && (et -= 8), 252645135 & tt && (et -= 4), 858993459 & tt && (et -= 2), 1431655765 & tt && (et -= 1), et
    }
    et.INT_BITS = 32, et.INT_MAX = 2147483647, et.INT_MIN = -1 << 31, et.sign = function(tt) {
      return (tt > 0) - (tt < 0)
    }, et.abs = function(tt) {
      var et = tt >> 31;
      return (tt ^ et) - et
    }, et.min = function(tt, et) {
      return et ^ (tt ^ et) & -(tt < et)
    }, et.max = function(tt, et) {
      return tt ^ (tt ^ et) & -(tt < et)
    }, et.isPow2 = function(tt) {
      return !(tt & tt - 1) && !!tt
    }, et.log2 = function(tt) {
      var et, Vt;
      return et = (tt > 65535) << 4, et |= Vt = ((tt >>>= et) > 255) << 3, et |= Vt = ((tt >>>= Vt) > 15) << 2, (et |= Vt = ((tt >>>= Vt) > 3) << 1) | (tt >>>= Vt) >> 1
    }, et.log10 = function(tt) {
      return tt >= 1e9 ? 9 : tt >= 1e8 ? 8 : tt >= 1e7 ? 7 : tt >= 1e6 ? 6 : tt >= 1e5 ? 5 : tt >= 1e4 ? 4 : tt >= 1e3 ? 3 : tt >= 100 ? 2 : tt >= 10 ? 1 : 0
    }, et.popCount = function(tt) {
      return 16843009 * ((tt = (858993459 & (tt -= tt >>> 1 & 1431655765)) + (tt >>> 2 & 858993459)) + (tt >>> 4) & 252645135) >>> 24
    }, et.countTrailingZeros = Vt, et.nextPow2 = function(tt) {
      return tt += 0 === tt, --tt, tt |= tt >>> 1, tt |= tt >>> 2, tt |= tt >>> 4, tt |= tt >>> 8, (tt |= tt >>> 16) + 1
    }, et.prevPow2 = function(tt) {
      return tt |= tt >>> 1, tt |= tt >>> 2, tt |= tt >>> 4, tt |= tt >>> 8, (tt |= tt >>> 16) - (tt >>> 1)
    }, et.parity = function(tt) {
      return tt ^= tt >>> 16, tt ^= tt >>> 8, tt ^= tt >>> 4, 27030 >>> (tt &= 15) & 1
    };
    var Ot = new Array(256);
    ! function(tt) {
      for (var et = 0; et < 256; ++et) {
        var Vt = et,
          Ot = et,
          qt = 7;
        for (Vt >>>= 1; Vt; Vt >>>= 1) Ot <<= 1, Ot |= 1 & Vt, --qt;
        tt[et] = Ot << qt & 255
      }
    }(Ot), et.reverse = function(tt) {
      return Ot[255 & tt] << 24 | Ot[tt >>> 8 & 255] << 16 | Ot[tt >>> 16 & 255] << 8 | Ot[tt >>> 24 & 255]
    }, et.interleave2 = function(tt, et) {
      return (tt = 1431655765 & ((tt = 858993459 & ((tt = 252645135 & ((tt = 16711935 & ((tt &= 65535) | tt << 8)) | tt << 4)) | tt << 2)) | tt << 1)) | (et = 1431655765 & ((et = 858993459 & ((et = 252645135 & ((et = 16711935 & ((et &= 65535) | et << 8)) | et << 4)) | et << 2)) | et << 1)) << 1
    }, et.deinterleave2 = function(tt, et) {
      return (tt = 65535 & ((tt = 16711935 & ((tt = 252645135 & ((tt = 858993459 & ((tt = tt >>> et & 1431655765) | tt >>> 1)) | tt >>> 2)) | tt >>> 4)) | tt >>> 16)) << 16 >> 16
    }, et.interleave3 = function(tt, et, Vt) {
      return tt = 1227133513 & ((tt = 3272356035 & ((tt = 251719695 & ((tt = 4278190335 & ((tt &= 1023) | tt << 16)) | tt << 8)) | tt << 4)) | tt << 2), (tt |= (et = 1227133513 & ((et = 3272356035 & ((et = 251719695 & ((et = 4278190335 & ((et &= 1023) | et << 16)) | et << 8)) | et << 4)) | et << 2)) << 1) | (Vt = 1227133513 & ((Vt = 3272356035 & ((Vt = 251719695 & ((Vt = 4278190335 & ((Vt &= 1023) | Vt << 16)) | Vt << 8)) | Vt << 4)) | Vt << 2)) << 2
    }, et.deinterleave3 = function(tt, et) {
      return (tt = 1023 & ((tt = 4278190335 & ((tt = 251719695 & ((tt = 3272356035 & ((tt = tt >>> et & 1227133513) | tt >>> 2)) | tt >>> 4)) | tt >>> 8)) | tt >>> 16)) << 22 >> 22
    }, et.nextCombination = function(tt) {
      var et = tt | tt - 1;
      return et + 1 | (~et & -~et) - 1 >>> Vt(tt) + 1
    }
  },
  40016: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      emptyColumnHeight: () => Jt,
      loadHeatmapSchematic: () => Ct,
      readSchematicBlocks: () => ut
    });
    var Ot = Vt(3824),
      qt = Vt.n(Ot),
      Dt = Vt(3800),
      mt = Vt(37980),
      dt = Vt(229),
      jt = Vt(9425);
    const Ht = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      Xt = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: Ht
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: Ht
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...Ht, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      Qt = qt().Type.forSchema({
        type: "record",
        fields: Xt
      }),
      lt = qt().Type.forSchema({
        type: "record",
        fields: [...Xt, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...Ht, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: Ht
          }
        }]
      }),
      Et = 2,
      ft = 6,
      wt = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      yt = [150, 150, 150],
      Nt = 16,
      Mt = 4096,
      bt = dt.e.ff,
      Jt = -2147483648;
    async function Ct(tt) {
      const et = await ut(new Uint8Array(await tt.arrayBuffer()), await async function() {
        const {
          averageColors: tt
        } = await Vt.e(207).then((() => Vt(34482))), et = new Map;
        return Vt => {
          var Ot, qt, Dt, mt, dt;
          const Ht = et.get(Vt);
          if (void 0 !== Ht) return Ht;
          const Xt = null !== (Ot = null === (qt = jt.h[Vt]) || void 0 === qt ? void 0 : qt.name) && void 0 !== Ot ? Ot : "",
            Qt = null !== (Dt = tt[Xt]) && void 0 !== Dt ? Dt : tt[Xt.split("|")[0]],
            lt = wt[Xt.split("|")[0]],
            Et = null !== (mt = null !== (dt = null === Qt || void 0 === Qt ? void 0 : Qt[0]) && void 0 !== dt ? dt : lt) && void 0 !== mt ? mt : 0 === (null === Qt || void 0 === Qt ? void 0 : Qt.length) ? null : yt;
          return et.set(Vt, Et), Et
        }
      }());
      return {
        surface: et.surface,
        topDown: ht(et.columnTops)
      }
    }
    async function ut(tt, et) {
      var Vt;
      if (tt.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const Ot = new DataView(tt.buffer, tt.byteOffset, tt.byteLength).getUint32(0, !0);
      if (Ot > ft) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const qt = (Ot >= Et ? lt : Qt).decode(Dt.mf.from(tt.subarray(4)), 0).value;
      if (!qt) throw new Error("The file isn't a schematic.");
      if (0 === qt.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const dt = null !== (Vt = qt.pasteOffset) && void 0 !== Vt ? Vt : {
          x: 0,
          y: 0,
          z: 0
        },
        jt = [dt.x, dt.y, dt.z].map((tt => Math.floor(tt / bt))),
        Ht = qt.chunkData.map((tt => ({
          x: tt.x + jt[0],
          y: tt.y + jt[1],
          z: tt.z + jt[2],
          rle: tt.rle
        }))),
        Xt = new Map;
      for (const [Dt, Qt] of Ht.entries()) {
        const tt = new Uint16Array(bt ** 3);
        mt.decode(Qt.rle, tt), Xt.set(`${Qt.x},${Qt.y},${Qt.z}`, tt), Dt % Nt === Nt - 1 && await vt()
      }
      const wt = (tt, et, Vt) => tt * bt * bt + et * bt + Vt,
        yt = (tt, et, Vt) => {
          var Ot, qt;
          const Dt = Math.floor(tt / bt),
            mt = Math.floor(et / bt),
            dt = Math.floor(Vt / bt);
          return null !== (Ot = null === (qt = Xt.get(`${Dt},${mt},${dt}`)) || void 0 === qt ? void 0 : qt[wt(tt - Dt * bt, et - mt * bt, Vt - dt * bt)]) && void 0 !== Ot ? Ot : 0
        },
        Mt = new Map,
        Ct = [],
        ut = [];
      for (const [Dt, mt] of Ht.entries()) {
        const tt = Xt.get(`${mt.x},${mt.y},${mt.z}`),
          Vt = [mt.x * bt, mt.y * bt, mt.z * bt],
          Ot = (et, Ot, qt) => et < 0 || Ot < 0 || qt < 0 || et >= bt || Ot >= bt || qt >= bt ? yt(Vt[0] + et, Vt[1] + Ot, Vt[2] + qt) : tt[wt(et, Ot, qt)],
          qt = `${mt.x},${mt.z}`;
        let dt = Mt.get(qt);
        void 0 === dt && (dt = {
          chunkX: mt.x,
          chunkZ: mt.z,
          heights: new Int32Array(bt * bt).fill(Jt),
          colours: new Uint8Array(bt * bt * 3)
        }, Mt.set(qt, dt));
        for (let Dt = 0; Dt < bt; Dt++)
          for (let qt = 0; qt < bt; qt++)
            for (let mt = 0; mt < bt; mt++) {
              const jt = tt[wt(Dt, qt, mt)];
              if (0 === jt) continue;
              const Ht = Vt[0] + Dt,
                Xt = Vt[1] + qt,
                Qt = Vt[2] + mt,
                lt = et(jt);
              if (null === lt) continue;
              const Et = mt * bt + Dt;
              Xt > dt.heights[Et] && (dt.heights[Et] = Xt, dt.colours.set(lt, 3 * Et));
              !Kt(jt) && (Kt(Ot(Dt + 1, qt, mt)) || Kt(Ot(Dt - 1, qt, mt)) || Kt(Ot(Dt, qt + 1, mt)) || Kt(Ot(Dt, qt - 1, mt)) || Kt(Ot(Dt, qt, mt + 1)) || Kt(Ot(Dt, qt, mt - 1))) && (Ct.push(Ht, Xt, Qt), ut.push(lt[0], lt[1], lt[2]))
            }
        Dt % Nt === Nt - 1 && await vt()
      }
      if (0 === Ct.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: qt.name,
        surface: {
          positions: Int32Array.from(Ct),
          colours: Uint8Array.from(ut),
          count: Ct.length / 3
        },
        columnTops: [...Mt.values()]
      }
    }

    function Kt(tt) {
      if (0 === tt) return !0;
      const et = jt.h[tt];
      return void 0 === et || et.OE || et.transTex || !1 === et.solid
    }

    function ht(tt) {
      let et = 1 / 0,
        Vt = -1 / 0,
        Ot = 1 / 0,
        qt = -1 / 0;
      for (const {
          chunkX: ft,
          chunkZ: wt,
          heights: yt
        }
        of tt) yt.forEach(((tt, Dt) => {
        if (tt === Jt) return;
        const mt = ft * bt + Dt % bt,
          dt = wt * bt + Math.floor(Dt / bt);
        et = Math.min(et, mt), Vt = Math.max(Vt, mt), Ot = Math.min(Ot, dt), qt = Math.max(qt, dt)
      }));
      const Dt = Vt - et + 1,
        mt = qt - Ot + 1,
        dt = Math.max(1, Math.ceil(Dt / Mt), Math.ceil(mt / Mt)),
        jt = Math.ceil(Dt / dt),
        Ht = Math.ceil(mt / dt),
        Xt = document.createElement("canvas");
      Xt.width = jt, Xt.height = Ht;
      const Qt = Xt.getContext("2d");
      if (!Qt) throw new Error("Couldn't draw the schematic from above.");
      const lt = Qt.createImageData(jt, Ht),
        Et = new Int32Array(jt * Ht).fill(Jt);
      for (const {
          chunkX: ft,
          chunkZ: wt,
          heights: yt,
          colours: Nt
        }
        of tt) yt.forEach(((tt, et) => {
        const qt = ft * bt + et % bt,
          Dt = wt * bt + Math.floor(et / bt),
          mt = Math.floor((Dt - Ot) / dt) * jt + Math.floor((Vt - qt) / dt);
        tt === Jt || tt <= Et[mt] || (Et[mt] = tt, lt.data.set(Nt.subarray(3 * et, 3 * et + 3), 4 * mt), lt.data[4 * mt + 3] = 255)
      }));
      return Qt.putImageData(lt, 0, 0), {
        maxX: Vt,
        minZ: Ot,
        width: jt * dt,
        depth: Ht * dt,
        canvas: Xt
      }
    }

    function vt() {
      return new Promise((tt => {
        setTimeout(tt, 0)
      }))
    }
  },
  9512: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => qt,
      e: () => Dt
    });
    var Ot = Vt(9466);
    const qt = "Air",
      Dt = Object.freeze(new Ot.d(qt, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);