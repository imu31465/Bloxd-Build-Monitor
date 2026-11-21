export const id = 198;
export const ids = [198];
export const modules = {
  37929: (dd, Jd, kd) => {
    var pd = kd(37932);

    function Nd(dd) {
      for (var Jd, kd, Nd = 0, Wd = dd.length, Pd = 0; Pd < dd.length;) {
        for (Jd = dd[Pd], kd = 0; Pd < Wd && dd[Pd] === Jd;) ++Pd, ++kd;
        Nd += pd.log2(kd) / 7 | 0, Nd += pd.log2(Jd >>> 0) / 7 | 0, Nd += 2
      }
      return Nd
    }
    Jd.size = Nd, Jd.encode = function(dd, Jd) {
      Jd || (Jd = new Uint8Array(Nd(dd)));
      for (var kd, pd, Wd = 0, Pd = Jd.length, Zd = 0; Zd < dd.length;) {
        for (kd = dd[Zd], pd = 0; Zd < dd.length && dd[Zd] === kd;) ++Zd, ++pd;
        for (; Wd < Pd && pd >= 128;) Jd[Wd++] = 128 + (127 & pd), pd >>>= 7;
        if (Wd >= Pd) throw new Error("RLE buffer overflow");
        for (Jd[Wd++] = pd, kd >>>= 0; Wd < Pd && kd >= 128;) Jd[Wd++] = 128 + (127 & kd), kd >>>= 7;
        if (Wd >= Pd) throw new Error("RLE buffer overflow");
        Jd[Wd++] = kd
      }
      return Jd
    }, Jd.decode = function(dd, Jd) {
      for (var kd, pd, Nd, Wd, Pd = Jd.length, Zd = dd.length, gd = 0, Cd = 0; Cd < Zd;) {
        for (kd = 0, pd = 0; Cd < Zd && dd[Cd] >= 128;) kd += (127 & dd[Cd++]) << pd, pd += 7;
        if (kd += dd[Cd++] << pd, Cd >= Zd) throw new Error("RLE buffer underrun");
        if (gd + kd > Pd) throw new Error("Chunk buffer overflow");
        for (Nd = 0, pd = 0; Cd < Zd && dd[Cd] >= 128;) Nd += (127 & dd[Cd++]) << pd, pd += 7;
        if (Cd >= Zd) throw new Error("RLE buffer underrun");
        for (Nd += dd[Cd++] << pd, Wd = 0; Wd < kd; ++Wd) Jd[gd++] = Nd
      }
      return Jd
    }
  },
  37932: (dd, Jd) => {
    function kd(dd) {
      var Jd = 32;
      return (dd &= -dd) && Jd--, 65535 & dd && (Jd -= 16), 16711935 & dd && (Jd -= 8), 252645135 & dd && (Jd -= 4), 858993459 & dd && (Jd -= 2), 1431655765 & dd && (Jd -= 1), Jd
    }
    Jd.INT_BITS = 32, Jd.INT_MAX = 2147483647, Jd.INT_MIN = -1 << 31, Jd.sign = function(dd) {
      return (dd > 0) - (dd < 0)
    }, Jd.abs = function(dd) {
      var Jd = dd >> 31;
      return (dd ^ Jd) - Jd
    }, Jd.min = function(dd, Jd) {
      return Jd ^ (dd ^ Jd) & -(dd < Jd)
    }, Jd.max = function(dd, Jd) {
      return dd ^ (dd ^ Jd) & -(dd < Jd)
    }, Jd.isPow2 = function(dd) {
      return !(dd & dd - 1) && !!dd
    }, Jd.log2 = function(dd) {
      var Jd, kd;
      return Jd = (dd > 65535) << 4, Jd |= kd = ((dd >>>= Jd) > 255) << 3, Jd |= kd = ((dd >>>= kd) > 15) << 2, (Jd |= kd = ((dd >>>= kd) > 3) << 1) | (dd >>>= kd) >> 1
    }, Jd.log10 = function(dd) {
      return dd >= 1e9 ? 9 : dd >= 1e8 ? 8 : dd >= 1e7 ? 7 : dd >= 1e6 ? 6 : dd >= 1e5 ? 5 : dd >= 1e4 ? 4 : dd >= 1e3 ? 3 : dd >= 100 ? 2 : dd >= 10 ? 1 : 0
    }, Jd.popCount = function(dd) {
      return 16843009 * ((dd = (858993459 & (dd -= dd >>> 1 & 1431655765)) + (dd >>> 2 & 858993459)) + (dd >>> 4) & 252645135) >>> 24
    }, Jd.countTrailingZeros = kd, Jd.nextPow2 = function(dd) {
      return dd += 0 === dd, --dd, dd |= dd >>> 1, dd |= dd >>> 2, dd |= dd >>> 4, dd |= dd >>> 8, (dd |= dd >>> 16) + 1
    }, Jd.prevPow2 = function(dd) {
      return dd |= dd >>> 1, dd |= dd >>> 2, dd |= dd >>> 4, dd |= dd >>> 8, (dd |= dd >>> 16) - (dd >>> 1)
    }, Jd.parity = function(dd) {
      return dd ^= dd >>> 16, dd ^= dd >>> 8, dd ^= dd >>> 4, 27030 >>> (dd &= 15) & 1
    };
    var pd = new Array(256);
    ! function(dd) {
      for (var Jd = 0; Jd < 256; ++Jd) {
        var kd = Jd,
          pd = Jd,
          Nd = 7;
        for (kd >>>= 1; kd; kd >>>= 1) pd <<= 1, pd |= 1 & kd, --Nd;
        dd[Jd] = pd << Nd & 255
      }
    }(pd), Jd.reverse = function(dd) {
      return pd[255 & dd] << 24 | pd[dd >>> 8 & 255] << 16 | pd[dd >>> 16 & 255] << 8 | pd[dd >>> 24 & 255]
    }, Jd.interleave2 = function(dd, Jd) {
      return (dd = 1431655765 & ((dd = 858993459 & ((dd = 252645135 & ((dd = 16711935 & ((dd &= 65535) | dd << 8)) | dd << 4)) | dd << 2)) | dd << 1)) | (Jd = 1431655765 & ((Jd = 858993459 & ((Jd = 252645135 & ((Jd = 16711935 & ((Jd &= 65535) | Jd << 8)) | Jd << 4)) | Jd << 2)) | Jd << 1)) << 1
    }, Jd.deinterleave2 = function(dd, Jd) {
      return (dd = 65535 & ((dd = 16711935 & ((dd = 252645135 & ((dd = 858993459 & ((dd = dd >>> Jd & 1431655765) | dd >>> 1)) | dd >>> 2)) | dd >>> 4)) | dd >>> 16)) << 16 >> 16
    }, Jd.interleave3 = function(dd, Jd, kd) {
      return dd = 1227133513 & ((dd = 3272356035 & ((dd = 251719695 & ((dd = 4278190335 & ((dd &= 1023) | dd << 16)) | dd << 8)) | dd << 4)) | dd << 2), (dd |= (Jd = 1227133513 & ((Jd = 3272356035 & ((Jd = 251719695 & ((Jd = 4278190335 & ((Jd &= 1023) | Jd << 16)) | Jd << 8)) | Jd << 4)) | Jd << 2)) << 1) | (kd = 1227133513 & ((kd = 3272356035 & ((kd = 251719695 & ((kd = 4278190335 & ((kd &= 1023) | kd << 16)) | kd << 8)) | kd << 4)) | kd << 2)) << 2
    }, Jd.deinterleave3 = function(dd, Jd) {
      return (dd = 1023 & ((dd = 4278190335 & ((dd = 251719695 & ((dd = 3272356035 & ((dd = dd >>> Jd & 1227133513) | dd >>> 2)) | dd >>> 4)) | dd >>> 8)) | dd >>> 16)) << 22 >> 22
    }, Jd.nextCombination = function(dd) {
      var Jd = dd | dd - 1;
      return Jd + 1 | (~Jd & -~Jd) - 1 >>> kd(dd) + 1
    }
  },
  39778: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      emptyColumnHeight: () => vd,
      loadHeatmapSchematic: () => xd,
      readSchematicBlocks: () => qd
    });
    var pd = kd(3633),
      Nd = kd.n(pd),
      Wd = kd(3615),
      Pd = kd(37929),
      Zd = kd(193),
      gd = kd(9331);
    const Cd = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      Kd = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: Cd
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: Cd
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...Cd, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      od = Nd().Type.forSchema({
        type: "record",
        fields: Kd
      }),
      ld = Nd().Type.forSchema({
        type: "record",
        fields: [...Kd, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...Cd, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: Cd
          }
        }]
      }),
      Qd = 2,
      Ld = 6,
      Od = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      ed = [150, 150, 150],
      Rd = 16,
      Id = 4096,
      Gd = Zd.g.KL,
      vd = -2147483648;
    async function xd(dd) {
      const Jd = await qd(new Uint8Array(await dd.arrayBuffer()), await async function() {
        const {
          averageColors: dd
        } = await kd.e(202).then((() => kd(34385))), Jd = new Map;
        return kd => {
          var pd, Nd, Wd, Pd, Zd;
          const Cd = Jd.get(kd);
          if (void 0 !== Cd) return Cd;
          const Kd = null !== (pd = null === (Nd = gd.g[kd]) || void 0 === Nd ? void 0 : Nd.name) && void 0 !== pd ? pd : "",
            od = null !== (Wd = dd[Kd]) && void 0 !== Wd ? Wd : dd[Kd.split("|")[0]],
            ld = Od[Kd.split("|")[0]],
            Qd = null !== (Pd = null !== (Zd = null === od || void 0 === od ? void 0 : od[0]) && void 0 !== Zd ? Zd : ld) && void 0 !== Pd ? Pd : 0 === (null === od || void 0 === od ? void 0 : od.length) ? null : ed;
          return Jd.set(kd, Qd), Qd
        }
      }());
      return {
        surface: Jd.surface,
        topDown: sd(Jd.columnTops)
      }
    }
    async function qd(dd, Jd) {
      var kd;
      if (dd.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const pd = new DataView(dd.buffer, dd.byteOffset, dd.byteLength).getUint32(0, !0);
      if (pd > Ld) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const Nd = (pd >= Qd ? ld : od).decode(Wd.kL.from(dd.subarray(4)), 0).value;
      if (!Nd) throw new Error("The file isn't a schematic.");
      if (0 === Nd.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const Zd = null !== (kd = Nd.pasteOffset) && void 0 !== kd ? kd : {
          x: 0,
          y: 0,
          z: 0
        },
        gd = [Zd.x, Zd.y, Zd.z].map((dd => Math.floor(dd / Gd))),
        Cd = Nd.chunkData.map((dd => ({
          x: dd.x + gd[0],
          y: dd.y + gd[1],
          z: dd.z + gd[2],
          rle: dd.rle
        }))),
        Kd = new Map;
      for (const [Wd, od] of Cd.entries()) {
        const dd = new Uint16Array(Gd ** 3);
        Pd.decode(od.rle, dd), Kd.set(`${od.x},${od.y},${od.z}`, dd), Wd % Rd === Rd - 1 && await ad()
      }
      const Od = (dd, Jd, kd) => dd * Gd * Gd + Jd * Gd + kd,
        ed = (dd, Jd, kd) => {
          var pd, Nd;
          const Wd = Math.floor(dd / Gd),
            Pd = Math.floor(Jd / Gd),
            Zd = Math.floor(kd / Gd);
          return null !== (pd = null === (Nd = Kd.get(`${Wd},${Pd},${Zd}`)) || void 0 === Nd ? void 0 : Nd[Od(dd - Wd * Gd, Jd - Pd * Gd, kd - Zd * Gd)]) && void 0 !== pd ? pd : 0
        },
        Id = new Map,
        xd = [],
        qd = [];
      for (const [Wd, Pd] of Cd.entries()) {
        const dd = Kd.get(`${Pd.x},${Pd.y},${Pd.z}`),
          kd = [Pd.x * Gd, Pd.y * Gd, Pd.z * Gd],
          pd = (Jd, pd, Nd) => Jd < 0 || pd < 0 || Nd < 0 || Jd >= Gd || pd >= Gd || Nd >= Gd ? ed(kd[0] + Jd, kd[1] + pd, kd[2] + Nd) : dd[Od(Jd, pd, Nd)],
          Nd = `${Pd.x},${Pd.z}`;
        let Zd = Id.get(Nd);
        void 0 === Zd && (Zd = {
          chunkX: Pd.x,
          chunkZ: Pd.z,
          heights: new Int32Array(Gd * Gd).fill(vd),
          colours: new Uint8Array(Gd * Gd * 3)
        }, Id.set(Nd, Zd));
        for (let Wd = 0; Wd < Gd; Wd++)
          for (let Nd = 0; Nd < Gd; Nd++)
            for (let Pd = 0; Pd < Gd; Pd++) {
              const gd = dd[Od(Wd, Nd, Pd)];
              if (0 === gd) continue;
              const Cd = kd[0] + Wd,
                Kd = kd[1] + Nd,
                od = kd[2] + Pd,
                ld = Jd(gd);
              if (null === ld) continue;
              const Qd = Pd * Gd + Wd;
              Kd > Zd.heights[Qd] && (Zd.heights[Qd] = Kd, Zd.colours.set(ld, 3 * Qd));
              !Bd(gd) && (Bd(pd(Wd + 1, Nd, Pd)) || Bd(pd(Wd - 1, Nd, Pd)) || Bd(pd(Wd, Nd + 1, Pd)) || Bd(pd(Wd, Nd - 1, Pd)) || Bd(pd(Wd, Nd, Pd + 1)) || Bd(pd(Wd, Nd, Pd - 1))) && (xd.push(Cd, Kd, od), qd.push(ld[0], ld[1], ld[2]))
            }
        Wd % Rd === Rd - 1 && await ad()
      }
      if (0 === xd.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: Nd.name,
        surface: {
          positions: Int32Array.from(xd),
          colours: Uint8Array.from(qd),
          count: xd.length / 3
        },
        columnTops: [...Id.values()]
      }
    }

    function Bd(dd) {
      if (0 === dd) return !0;
      const Jd = gd.g[dd];
      return void 0 === Jd || Jd.dQ || Jd.transTex || !1 === Jd.solid
    }

    function sd(dd) {
      let Jd = 1 / 0,
        kd = -1 / 0,
        pd = 1 / 0,
        Nd = -1 / 0;
      for (const {
          chunkX: Ld,
          chunkZ: Od,
          heights: ed
        }
        of dd) ed.forEach(((dd, Wd) => {
        if (dd === vd) return;
        const Pd = Ld * Gd + Wd % Gd,
          Zd = Od * Gd + Math.floor(Wd / Gd);
        Jd = Math.min(Jd, Pd), kd = Math.max(kd, Pd), pd = Math.min(pd, Zd), Nd = Math.max(Nd, Zd)
      }));
      const Wd = kd - Jd + 1,
        Pd = Nd - pd + 1,
        Zd = Math.max(1, Math.ceil(Wd / Id), Math.ceil(Pd / Id)),
        gd = Math.ceil(Wd / Zd),
        Cd = Math.ceil(Pd / Zd),
        Kd = document.createElement("canvas");
      Kd.width = gd, Kd.height = Cd;
      const od = Kd.getContext("2d");
      if (!od) throw new Error("Couldn't draw the schematic from above.");
      const ld = od.createImageData(gd, Cd),
        Qd = new Int32Array(gd * Cd).fill(vd);
      for (const {
          chunkX: Ld,
          chunkZ: Od,
          heights: ed,
          colours: Rd
        }
        of dd) ed.forEach(((dd, Jd) => {
        const Nd = Ld * Gd + Jd % Gd,
          Wd = Od * Gd + Math.floor(Jd / Gd),
          Pd = Math.floor((Wd - pd) / Zd) * gd + Math.floor((kd - Nd) / Zd);
        dd === vd || dd <= Qd[Pd] || (Qd[Pd] = dd, ld.data.set(Rd.subarray(3 * Jd, 3 * Jd + 3), 4 * Pd), ld.data[4 * Pd + 3] = 255)
      }));
      return od.putImageData(ld, 0, 0), {
        maxX: kd,
        minZ: pd,
        width: gd * Zd,
        depth: Cd * Zd,
        canvas: Kd
      }
    }

    function ad() {
      return new Promise((dd => {
        setTimeout(dd, 0)
      }))
    }
  },
  9422: (dd, Jd, kd) => {
    kd.d(Jd, {
      d: () => Nd,
      h: () => Wd
    });
    var pd = kd(9383);
    const Nd = "Air",
      Wd = Object.freeze(new pd.f(Nd, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);