export const id = 197;
export const ids = [197];
export const modules = {
  37259: (vv, zv, Pv) => {
    var hv = Pv(37264);

    function Sv(vv) {
      for (var zv, Pv, Sv = 0, ev = vv.length, gv = 0; gv < vv.length;) {
        for (zv = vv[gv], Pv = 0; gv < ev && vv[gv] === zv;) ++gv, ++Pv;
        Sv += hv.log2(Pv) / 7 | 0, Sv += hv.log2(zv >>> 0) / 7 | 0, Sv += 2
      }
      return Sv
    }
    zv.size = Sv, zv.encode = function(vv, zv) {
      zv || (zv = new Uint8Array(Sv(vv)));
      for (var Pv, hv, ev = 0, gv = zv.length, pv = 0; pv < vv.length;) {
        for (Pv = vv[pv], hv = 0; pv < vv.length && vv[pv] === Pv;) ++pv, ++hv;
        for (; ev < gv && hv >= 128;) zv[ev++] = 128 + (127 & hv), hv >>>= 7;
        if (ev >= gv) throw new Error("RLE buffer overflow");
        for (zv[ev++] = hv, Pv >>>= 0; ev < gv && Pv >= 128;) zv[ev++] = 128 + (127 & Pv), Pv >>>= 7;
        if (ev >= gv) throw new Error("RLE buffer overflow");
        zv[ev++] = Pv
      }
      return zv
    }, zv.decode = function(vv, zv) {
      for (var Pv, hv, Sv, ev, gv = zv.length, pv = vv.length, dv = 0, Nv = 0; Nv < pv;) {
        for (Pv = 0, hv = 0; Nv < pv && vv[Nv] >= 128;) Pv += (127 & vv[Nv++]) << hv, hv += 7;
        if (Pv += vv[Nv++] << hv, Nv >= pv) throw new Error("RLE buffer underrun");
        if (dv + Pv > gv) throw new Error("Chunk buffer overflow");
        for (Sv = 0, hv = 0; Nv < pv && vv[Nv] >= 128;) Sv += (127 & vv[Nv++]) << hv, hv += 7;
        if (Nv >= pv) throw new Error("RLE buffer underrun");
        for (Sv += vv[Nv++] << hv, ev = 0; ev < Pv; ++ev) zv[dv++] = Sv
      }
      return zv
    }
  },
  37264: (vv, zv) => {
    function Pv(vv) {
      var zv = 32;
      return (vv &= -vv) && zv--, 65535 & vv && (zv -= 16), 16711935 & vv && (zv -= 8), 252645135 & vv && (zv -= 4), 858993459 & vv && (zv -= 2), 1431655765 & vv && (zv -= 1), zv
    }
    zv.INT_BITS = 32, zv.INT_MAX = 2147483647, zv.INT_MIN = -1 << 31, zv.sign = function(vv) {
      return (vv > 0) - (vv < 0)
    }, zv.abs = function(vv) {
      var zv = vv >> 31;
      return (vv ^ zv) - zv
    }, zv.min = function(vv, zv) {
      return zv ^ (vv ^ zv) & -(vv < zv)
    }, zv.max = function(vv, zv) {
      return vv ^ (vv ^ zv) & -(vv < zv)
    }, zv.isPow2 = function(vv) {
      return !(vv & vv - 1) && !!vv
    }, zv.log2 = function(vv) {
      var zv, Pv;
      return zv = (vv > 65535) << 4, zv |= Pv = ((vv >>>= zv) > 255) << 3, zv |= Pv = ((vv >>>= Pv) > 15) << 2, (zv |= Pv = ((vv >>>= Pv) > 3) << 1) | (vv >>>= Pv) >> 1
    }, zv.log10 = function(vv) {
      return vv >= 1e9 ? 9 : vv >= 1e8 ? 8 : vv >= 1e7 ? 7 : vv >= 1e6 ? 6 : vv >= 1e5 ? 5 : vv >= 1e4 ? 4 : vv >= 1e3 ? 3 : vv >= 100 ? 2 : vv >= 10 ? 1 : 0
    }, zv.popCount = function(vv) {
      return 16843009 * ((vv = (858993459 & (vv -= vv >>> 1 & 1431655765)) + (vv >>> 2 & 858993459)) + (vv >>> 4) & 252645135) >>> 24
    }, zv.countTrailingZeros = Pv, zv.nextPow2 = function(vv) {
      return vv += 0 === vv, --vv, vv |= vv >>> 1, vv |= vv >>> 2, vv |= vv >>> 4, vv |= vv >>> 8, (vv |= vv >>> 16) + 1
    }, zv.prevPow2 = function(vv) {
      return vv |= vv >>> 1, vv |= vv >>> 2, vv |= vv >>> 4, vv |= vv >>> 8, (vv |= vv >>> 16) - (vv >>> 1)
    }, zv.parity = function(vv) {
      return vv ^= vv >>> 16, vv ^= vv >>> 8, vv ^= vv >>> 4, 27030 >>> (vv &= 15) & 1
    };
    var hv = new Array(256);
    ! function(vv) {
      for (var zv = 0; zv < 256; ++zv) {
        var Pv = zv,
          hv = zv,
          Sv = 7;
        for (Pv >>>= 1; Pv; Pv >>>= 1) hv <<= 1, hv |= 1 & Pv, --Sv;
        vv[zv] = hv << Sv & 255
      }
    }(hv), zv.reverse = function(vv) {
      return hv[255 & vv] << 24 | hv[vv >>> 8 & 255] << 16 | hv[vv >>> 16 & 255] << 8 | hv[vv >>> 24 & 255]
    }, zv.interleave2 = function(vv, zv) {
      return (vv = 1431655765 & ((vv = 858993459 & ((vv = 252645135 & ((vv = 16711935 & ((vv &= 65535) | vv << 8)) | vv << 4)) | vv << 2)) | vv << 1)) | (zv = 1431655765 & ((zv = 858993459 & ((zv = 252645135 & ((zv = 16711935 & ((zv &= 65535) | zv << 8)) | zv << 4)) | zv << 2)) | zv << 1)) << 1
    }, zv.deinterleave2 = function(vv, zv) {
      return (vv = 65535 & ((vv = 16711935 & ((vv = 252645135 & ((vv = 858993459 & ((vv = vv >>> zv & 1431655765) | vv >>> 1)) | vv >>> 2)) | vv >>> 4)) | vv >>> 16)) << 16 >> 16
    }, zv.interleave3 = function(vv, zv, Pv) {
      return vv = 1227133513 & ((vv = 3272356035 & ((vv = 251719695 & ((vv = 4278190335 & ((vv &= 1023) | vv << 16)) | vv << 8)) | vv << 4)) | vv << 2), (vv |= (zv = 1227133513 & ((zv = 3272356035 & ((zv = 251719695 & ((zv = 4278190335 & ((zv &= 1023) | zv << 16)) | zv << 8)) | zv << 4)) | zv << 2)) << 1) | (Pv = 1227133513 & ((Pv = 3272356035 & ((Pv = 251719695 & ((Pv = 4278190335 & ((Pv &= 1023) | Pv << 16)) | Pv << 8)) | Pv << 4)) | Pv << 2)) << 2
    }, zv.deinterleave3 = function(vv, zv) {
      return (vv = 1023 & ((vv = 4278190335 & ((vv = 251719695 & ((vv = 3272356035 & ((vv = vv >>> zv & 1227133513) | vv >>> 2)) | vv >>> 4)) | vv >>> 8)) | vv >>> 16)) << 22 >> 22
    }, zv.nextCombination = function(vv) {
      var zv = vv | vv - 1;
      return zv + 1 | (~zv & -~zv) - 1 >>> Pv(vv) + 1
    }
  },
  39117: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      emptyColumnHeight: () => mv,
      loadHeatmapSchematic: () => jv,
      readSchematicBlocks: () => fv
    });
    var hv = Pv(3546),
      Sv = Pv.n(hv),
      ev = Pv(3521),
      gv = Pv(37259),
      pv = Pv(185),
      dv = Pv(9101);
    const Nv = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      lv = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: Nv
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: Nv
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...Nv, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      Tv = Sv().Type.forSchema({
        type: "record",
        fields: lv
      }),
      Wv = Sv().Type.forSchema({
        type: "record",
        fields: [...lv, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...Nv, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: Nv
          }
        }]
      }),
      wv = 2,
      av = 6,
      sv = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      Cv = [150, 150, 150],
      iv = 16,
      cv = 4096,
      Gv = pv.f.aa,
      mv = -2147483648;
    async function jv(vv) {
      const zv = await fv(new Uint8Array(await vv.arrayBuffer()), await async function() {
        const {
          averageColors: vv
        } = await Pv.e(201).then((() => Pv(33871))), zv = new Map;
        return Pv => {
          var hv, Sv, ev, gv, pv;
          const Nv = zv.get(Pv);
          if (void 0 !== Nv) return Nv;
          const lv = null !== (hv = null === (Sv = dv.g[Pv]) || void 0 === Sv ? void 0 : Sv.name) && void 0 !== hv ? hv : "",
            Tv = null !== (ev = vv[lv]) && void 0 !== ev ? ev : vv[lv.split("|")[0]],
            Wv = sv[lv.split("|")[0]],
            wv = null !== (gv = null !== (pv = null === Tv || void 0 === Tv ? void 0 : Tv[0]) && void 0 !== pv ? pv : Wv) && void 0 !== gv ? gv : 0 === (null === Tv || void 0 === Tv ? void 0 : Tv.length) ? null : Cv;
          return zv.set(Pv, wv), wv
        }
      }());
      return {
        surface: zv.surface,
        topDown: Yv(zv.columnTops)
      }
    }
    async function fv(vv, zv) {
      var Pv;
      if (vv.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const hv = new DataView(vv.buffer, vv.byteOffset, vv.byteLength).getUint32(0, !0);
      if (hv > av) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const Sv = (hv >= wv ? Wv : Tv).decode(ev.Sa.from(vv.subarray(4)), 0).value;
      if (!Sv) throw new Error("The file isn't a schematic.");
      if (0 === Sv.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const pv = null !== (Pv = Sv.pasteOffset) && void 0 !== Pv ? Pv : {
          x: 0,
          y: 0,
          z: 0
        },
        dv = [pv.x, pv.y, pv.z].map((vv => Math.floor(vv / Gv))),
        Nv = Sv.chunkData.map((vv => ({
          x: vv.x + dv[0],
          y: vv.y + dv[1],
          z: vv.z + dv[2],
          rle: vv.rle
        }))),
        lv = new Map;
      for (const [ev, Tv] of Nv.entries()) {
        const vv = new Uint16Array(Gv ** 3);
        gv.decode(Tv.rle, vv), lv.set(`${Tv.x},${Tv.y},${Tv.z}`, vv), ev % iv === iv - 1 && await nv()
      }
      const sv = (vv, zv, Pv) => vv * Gv * Gv + zv * Gv + Pv,
        Cv = (vv, zv, Pv) => {
          var hv, Sv;
          const ev = Math.floor(vv / Gv),
            gv = Math.floor(zv / Gv),
            pv = Math.floor(Pv / Gv);
          return null !== (hv = null === (Sv = lv.get(`${ev},${gv},${pv}`)) || void 0 === Sv ? void 0 : Sv[sv(vv - ev * Gv, zv - gv * Gv, Pv - pv * Gv)]) && void 0 !== hv ? hv : 0
        },
        cv = new Map,
        jv = [],
        fv = [];
      for (const [ev, gv] of Nv.entries()) {
        const vv = lv.get(`${gv.x},${gv.y},${gv.z}`),
          Pv = [gv.x * Gv, gv.y * Gv, gv.z * Gv],
          hv = (zv, hv, Sv) => zv < 0 || hv < 0 || Sv < 0 || zv >= Gv || hv >= Gv || Sv >= Gv ? Cv(Pv[0] + zv, Pv[1] + hv, Pv[2] + Sv) : vv[sv(zv, hv, Sv)],
          Sv = `${gv.x},${gv.z}`;
        let pv = cv.get(Sv);
        void 0 === pv && (pv = {
          chunkX: gv.x,
          chunkZ: gv.z,
          heights: new Int32Array(Gv * Gv).fill(mv),
          colours: new Uint8Array(Gv * Gv * 3)
        }, cv.set(Sv, pv));
        for (let ev = 0; ev < Gv; ev++)
          for (let Sv = 0; Sv < Gv; Sv++)
            for (let gv = 0; gv < Gv; gv++) {
              const dv = vv[sv(ev, Sv, gv)];
              if (0 === dv) continue;
              const Nv = Pv[0] + ev,
                lv = Pv[1] + Sv,
                Tv = Pv[2] + gv,
                Wv = zv(dv);
              if (null === Wv) continue;
              const wv = gv * Gv + ev;
              lv > pv.heights[wv] && (pv.heights[wv] = lv, pv.colours.set(Wv, 3 * wv));
              !Fv(dv) && (Fv(hv(ev + 1, Sv, gv)) || Fv(hv(ev - 1, Sv, gv)) || Fv(hv(ev, Sv + 1, gv)) || Fv(hv(ev, Sv - 1, gv)) || Fv(hv(ev, Sv, gv + 1)) || Fv(hv(ev, Sv, gv - 1))) && (jv.push(Nv, lv, Tv), fv.push(Wv[0], Wv[1], Wv[2]))
            }
        ev % iv === iv - 1 && await nv()
      }
      if (0 === jv.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: Sv.name,
        surface: {
          positions: Int32Array.from(jv),
          colours: Uint8Array.from(fv),
          count: jv.length / 3
        },
        columnTops: [...cv.values()]
      }
    }

    function Fv(vv) {
      if (0 === vv) return !0;
      const zv = dv.g[vv];
      return void 0 === zv || zv.zw || zv.transTex || !1 === zv.solid
    }

    function Yv(vv) {
      let zv = 1 / 0,
        Pv = -1 / 0,
        hv = 1 / 0,
        Sv = -1 / 0;
      for (const {
          chunkX: av,
          chunkZ: sv,
          heights: Cv
        }
        of vv) Cv.forEach(((vv, ev) => {
        if (vv === mv) return;
        const gv = av * Gv + ev % Gv,
          pv = sv * Gv + Math.floor(ev / Gv);
        zv = Math.min(zv, gv), Pv = Math.max(Pv, gv), hv = Math.min(hv, pv), Sv = Math.max(Sv, pv)
      }));
      const ev = Pv - zv + 1,
        gv = Sv - hv + 1,
        pv = Math.max(1, Math.ceil(ev / cv), Math.ceil(gv / cv)),
        dv = Math.ceil(ev / pv),
        Nv = Math.ceil(gv / pv),
        lv = document.createElement("canvas");
      lv.width = dv, lv.height = Nv;
      const Tv = lv.getContext("2d");
      if (!Tv) throw new Error("Couldn't draw the schematic from above.");
      const Wv = Tv.createImageData(dv, Nv),
        wv = new Int32Array(dv * Nv).fill(mv);
      for (const {
          chunkX: av,
          chunkZ: sv,
          heights: Cv,
          colours: iv
        }
        of vv) Cv.forEach(((vv, zv) => {
        const Sv = av * Gv + zv % Gv,
          ev = sv * Gv + Math.floor(zv / Gv),
          gv = Math.floor((ev - hv) / pv) * dv + Math.floor((Pv - Sv) / pv);
        vv === mv || vv <= wv[gv] || (wv[gv] = vv, Wv.data.set(iv.subarray(3 * zv, 3 * zv + 3), 4 * gv), Wv.data[4 * gv + 3] = 255)
      }));
      return Tv.putImageData(Wv, 0, 0), {
        maxX: Pv,
        minZ: hv,
        width: dv * pv,
        depth: Nv * pv,
        canvas: lv
      }
    }

    function nv() {
      return new Promise((vv => {
        setTimeout(vv, 0)
      }))
    }
  },
  9185: (vv, zv, Pv) => {
    Pv.d(zv, {
      e: () => Sv,
      f: () => ev
    });
    var hv = Pv(9144);
    const Sv = "Air",
      ev = Object.freeze(new hv.f(Sv, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);