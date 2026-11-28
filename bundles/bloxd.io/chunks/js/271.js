export const id = 271;
export const ids = [271];
export const modules = {
  39263: (dd, Od, md) => {
    var Wd = md(39265);

    function Fd(dd) {
      for (var Od, md, Fd = 0, Rd = dd.length, Xd = 0; Xd < dd.length;) {
        for (Od = dd[Xd], md = 0; Xd < Rd && dd[Xd] === Od;) ++Xd, ++md;
        Fd += Wd.log2(md) / 7 | 0, Fd += Wd.log2(Od >>> 0) / 7 | 0, Fd += 2
      }
      return Fd
    }
    Od.size = Fd, Od.encode = function(dd, Od) {
      Od || (Od = new Uint8Array(Fd(dd)));
      for (var md, Wd, Rd = 0, Xd = Od.length, Kd = 0; Kd < dd.length;) {
        for (md = dd[Kd], Wd = 0; Kd < dd.length && dd[Kd] === md;) ++Kd, ++Wd;
        for (; Rd < Xd && Wd >= 128;) Od[Rd++] = 128 + (127 & Wd), Wd >>>= 7;
        if (Rd >= Xd) throw new Error("RLE buffer overflow");
        for (Od[Rd++] = Wd, md >>>= 0; Rd < Xd && md >= 128;) Od[Rd++] = 128 + (127 & md), md >>>= 7;
        if (Rd >= Xd) throw new Error("RLE buffer overflow");
        Od[Rd++] = md
      }
      return Od
    }, Od.decode = function(dd, Od) {
      for (var md, Wd, Fd, Rd, Xd = Od.length, Kd = dd.length, hd = 0, vd = 0; vd < Kd;) {
        for (md = 0, Wd = 0; vd < Kd && dd[vd] >= 128;) md += (127 & dd[vd++]) << Wd, Wd += 7;
        if (md += dd[vd++] << Wd, vd >= Kd) throw new Error("RLE buffer underrun");
        if (hd + md > Xd) throw new Error("Chunk buffer overflow");
        for (Fd = 0, Wd = 0; vd < Kd && dd[vd] >= 128;) Fd += (127 & dd[vd++]) << Wd, Wd += 7;
        if (vd >= Kd) throw new Error("RLE buffer underrun");
        for (Fd += dd[vd++] << Wd, Rd = 0; Rd < md; ++Rd) Od[hd++] = Fd
      }
      return Od
    }
  },
  39265: (dd, Od) => {
    function md(dd) {
      var Od = 32;
      return (dd &= -dd) && Od--, 65535 & dd && (Od -= 16), 16711935 & dd && (Od -= 8), 252645135 & dd && (Od -= 4), 858993459 & dd && (Od -= 2), 1431655765 & dd && (Od -= 1), Od
    }
    Od.INT_BITS = 32, Od.INT_MAX = 2147483647, Od.INT_MIN = -1 << 31, Od.sign = function(dd) {
      return (dd > 0) - (dd < 0)
    }, Od.abs = function(dd) {
      var Od = dd >> 31;
      return (dd ^ Od) - Od
    }, Od.min = function(dd, Od) {
      return Od ^ (dd ^ Od) & -(dd < Od)
    }, Od.max = function(dd, Od) {
      return dd ^ (dd ^ Od) & -(dd < Od)
    }, Od.isPow2 = function(dd) {
      return !(dd & dd - 1) && !!dd
    }, Od.log2 = function(dd) {
      var Od, md;
      return Od = (dd > 65535) << 4, Od |= md = ((dd >>>= Od) > 255) << 3, Od |= md = ((dd >>>= md) > 15) << 2, (Od |= md = ((dd >>>= md) > 3) << 1) | (dd >>>= md) >> 1
    }, Od.log10 = function(dd) {
      return dd >= 1e9 ? 9 : dd >= 1e8 ? 8 : dd >= 1e7 ? 7 : dd >= 1e6 ? 6 : dd >= 1e5 ? 5 : dd >= 1e4 ? 4 : dd >= 1e3 ? 3 : dd >= 100 ? 2 : dd >= 10 ? 1 : 0
    }, Od.popCount = function(dd) {
      return 16843009 * ((dd = (858993459 & (dd -= dd >>> 1 & 1431655765)) + (dd >>> 2 & 858993459)) + (dd >>> 4) & 252645135) >>> 24
    }, Od.countTrailingZeros = md, Od.nextPow2 = function(dd) {
      return dd += 0 === dd, --dd, dd |= dd >>> 1, dd |= dd >>> 2, dd |= dd >>> 4, dd |= dd >>> 8, (dd |= dd >>> 16) + 1
    }, Od.prevPow2 = function(dd) {
      return dd |= dd >>> 1, dd |= dd >>> 2, dd |= dd >>> 4, dd |= dd >>> 8, (dd |= dd >>> 16) - (dd >>> 1)
    }, Od.parity = function(dd) {
      return dd ^= dd >>> 16, dd ^= dd >>> 8, dd ^= dd >>> 4, 27030 >>> (dd &= 15) & 1
    };
    var Wd = new Array(256);
    ! function(dd) {
      for (var Od = 0; Od < 256; ++Od) {
        var md = Od,
          Wd = Od,
          Fd = 7;
        for (md >>>= 1; md; md >>>= 1) Wd <<= 1, Wd |= 1 & md, --Fd;
        dd[Od] = Wd << Fd & 255
      }
    }(Wd), Od.reverse = function(dd) {
      return Wd[255 & dd] << 24 | Wd[dd >>> 8 & 255] << 16 | Wd[dd >>> 16 & 255] << 8 | Wd[dd >>> 24 & 255]
    }, Od.interleave2 = function(dd, Od) {
      return (dd = 1431655765 & ((dd = 858993459 & ((dd = 252645135 & ((dd = 16711935 & ((dd &= 65535) | dd << 8)) | dd << 4)) | dd << 2)) | dd << 1)) | (Od = 1431655765 & ((Od = 858993459 & ((Od = 252645135 & ((Od = 16711935 & ((Od &= 65535) | Od << 8)) | Od << 4)) | Od << 2)) | Od << 1)) << 1
    }, Od.deinterleave2 = function(dd, Od) {
      return (dd = 65535 & ((dd = 16711935 & ((dd = 252645135 & ((dd = 858993459 & ((dd = dd >>> Od & 1431655765) | dd >>> 1)) | dd >>> 2)) | dd >>> 4)) | dd >>> 16)) << 16 >> 16
    }, Od.interleave3 = function(dd, Od, md) {
      return dd = 1227133513 & ((dd = 3272356035 & ((dd = 251719695 & ((dd = 4278190335 & ((dd &= 1023) | dd << 16)) | dd << 8)) | dd << 4)) | dd << 2), (dd |= (Od = 1227133513 & ((Od = 3272356035 & ((Od = 251719695 & ((Od = 4278190335 & ((Od &= 1023) | Od << 16)) | Od << 8)) | Od << 4)) | Od << 2)) << 1) | (md = 1227133513 & ((md = 3272356035 & ((md = 251719695 & ((md = 4278190335 & ((md &= 1023) | md << 16)) | md << 8)) | md << 4)) | md << 2)) << 2
    }, Od.deinterleave3 = function(dd, Od) {
      return (dd = 1023 & ((dd = 4278190335 & ((dd = 251719695 & ((dd = 3272356035 & ((dd = dd >>> Od & 1227133513) | dd >>> 2)) | dd >>> 4)) | dd >>> 8)) | dd >>> 16)) << 22 >> 22
    }, Od.nextCombination = function(dd) {
      var Od = dd | dd - 1;
      return Od + 1 | (~Od & -~Od) - 1 >>> md(dd) + 1
    }
  },
  41744: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      emptyColumnHeight: () => pd,
      loadHeatmapSchematic: () => Yd,
      readSchematicBlocks: () => gd
    });
    var Wd = md(2499),
      Fd = md.n(Wd),
      Rd = md(2471),
      Xd = md(39263),
      Kd = md(218),
      hd = md(5733),
      vd = md(41087);
    const Qd = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      td = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: Qd
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: Qd
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...Qd, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      od = Fd().Type.forSchema({
        type: "record",
        fields: td
      }),
      Nd = Fd().Type.forSchema({
        type: "record",
        fields: [...td, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...Qd, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: Qd
          }
        }]
      }),
      qd = 2,
      Hd = 6,
      yd = 16,
      bd = 4096,
      Td = Kd.i.Qt,
      pd = -2147483648;
    async function Yd(dd) {
      const Od = await (0, vd.e)(),
        md = await gd(new Uint8Array(await dd.arrayBuffer()), (dd => Od.get(dd)));
      return {
        surface: md.surface,
        topDown: Ed(md.columnTops)
      }
    }
    async function gd(dd, Od) {
      var md;
      if (dd.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const Wd = new DataView(dd.buffer, dd.byteOffset, dd.byteLength).getUint32(0, !0);
      if (Wd > Hd) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const Fd = (Wd >= qd ? Nd : od).decode(Rd.CQ.from(dd.subarray(4)), 0).value;
      if (!Fd) throw new Error("The file isn't a schematic.");
      if (0 === Fd.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const Kd = null !== (md = Fd.pasteOffset) && void 0 !== md ? md : {
          x: 0,
          y: 0,
          z: 0
        },
        hd = [Kd.x, Kd.y, Kd.z].map((dd => Math.floor(dd / Td))),
        vd = Fd.chunkData.map((dd => ({
          x: dd.x + hd[0],
          y: dd.y + hd[1],
          z: dd.z + hd[2],
          rle: dd.rle
        }))),
        Qd = new Map;
      for (const [Rd, od] of vd.entries()) {
        const dd = new Uint16Array(Td ** 3);
        Xd.decode(od.rle, dd), Qd.set(`${od.x},${od.y},${od.z}`, dd), Rd % yd === yd - 1 && await Jd()
      }
      const td = (dd, Od, md) => dd * Td * Td + Od * Td + md,
        bd = (dd, Od, md) => {
          var Wd, Fd;
          const Rd = Math.floor(dd / Td),
            Xd = Math.floor(Od / Td),
            Kd = Math.floor(md / Td);
          return null !== (Wd = null === (Fd = Qd.get(`${Rd},${Xd},${Kd}`)) || void 0 === Fd ? void 0 : Fd[td(dd - Rd * Td, Od - Xd * Td, md - Kd * Td)]) && void 0 !== Wd ? Wd : 0
        },
        Yd = new Map,
        gd = [],
        Ed = [];
      for (const [Rd, Xd] of vd.entries()) {
        const dd = Qd.get(`${Xd.x},${Xd.y},${Xd.z}`),
          md = [Xd.x * Td, Xd.y * Td, Xd.z * Td],
          Wd = (Od, Wd, Fd) => Od < 0 || Wd < 0 || Fd < 0 || Od >= Td || Wd >= Td || Fd >= Td ? bd(md[0] + Od, md[1] + Wd, md[2] + Fd) : dd[td(Od, Wd, Fd)],
          Fd = `${Xd.x},${Xd.z}`;
        let Kd = Yd.get(Fd);
        void 0 === Kd && (Kd = {
          chunkX: Xd.x,
          chunkZ: Xd.z,
          heights: new Int32Array(Td * Td).fill(pd),
          colours: new Uint8Array(Td * Td * 3)
        }, Yd.set(Fd, Kd));
        for (let Rd = 0; Rd < Td; Rd++)
          for (let Fd = 0; Fd < Td; Fd++)
            for (let Xd = 0; Xd < Td; Xd++) {
              const hd = dd[td(Rd, Fd, Xd)];
              if (0 === hd) continue;
              const vd = md[0] + Rd,
                Qd = md[1] + Fd,
                od = md[2] + Xd,
                Nd = Od(hd);
              if (null === Nd) continue;
              const qd = Xd * Td + Rd;
              Qd > Kd.heights[qd] && (Kd.heights[qd] = Qd, Kd.colours.set(Nd, 3 * qd));
              !wd(hd) && (wd(Wd(Rd + 1, Fd, Xd)) || wd(Wd(Rd - 1, Fd, Xd)) || wd(Wd(Rd, Fd + 1, Xd)) || wd(Wd(Rd, Fd - 1, Xd)) || wd(Wd(Rd, Fd, Xd + 1)) || wd(Wd(Rd, Fd, Xd - 1))) && (gd.push(vd, Qd, od), Ed.push(Nd[0], Nd[1], Nd[2]))
            }
        Rd % yd === yd - 1 && await Jd()
      }
      if (0 === gd.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: Fd.name,
        surface: {
          positions: Int32Array.from(gd),
          colours: Uint8Array.from(Ed),
          count: gd.length / 3
        },
        columnTops: [...Yd.values()]
      }
    }

    function wd(dd) {
      if (0 === dd) return !0;
      const Od = hd.i[dd];
      return void 0 === Od || Od.LN || Od.transTex || !1 === Od.solid
    }

    function Ed(dd) {
      let Od = 1 / 0,
        md = -1 / 0,
        Wd = 1 / 0,
        Fd = -1 / 0;
      for (const {
          chunkX: qd,
          chunkZ: Hd,
          heights: yd
        }
        of dd) yd.forEach(((dd, Rd) => {
        if (dd === pd) return;
        const Xd = qd * Td + Rd % Td,
          Kd = Hd * Td + Math.floor(Rd / Td);
        Od = Math.min(Od, Xd), md = Math.max(md, Xd), Wd = Math.min(Wd, Kd), Fd = Math.max(Fd, Kd)
      }));
      const Rd = md - Od + 1,
        Xd = Fd - Wd + 1,
        Kd = Math.max(1, Math.ceil(Rd / bd), Math.ceil(Xd / bd)),
        hd = Math.ceil(Rd / Kd),
        vd = Math.ceil(Xd / Kd),
        Qd = document.createElement("canvas");
      Qd.width = hd, Qd.height = vd;
      const td = Qd.getContext("2d");
      if (!td) throw new Error("Couldn't draw the schematic from above.");
      const od = td.createImageData(hd, vd),
        Nd = new Int32Array(hd * vd).fill(pd);
      for (const {
          chunkX: qd,
          chunkZ: Hd,
          heights: yd,
          colours: bd
        }
        of dd) yd.forEach(((dd, Od) => {
        const Fd = qd * Td + Od % Td,
          Rd = Hd * Td + Math.floor(Od / Td),
          Xd = Math.floor((Rd - Wd) / Kd) * hd + Math.floor((md - Fd) / Kd);
        dd === pd || dd <= Nd[Xd] || (Nd[Xd] = dd, od.data.set(bd.subarray(3 * Od, 3 * Od + 3), 4 * Xd), od.data[4 * Xd + 3] = 255)
      }));
      return td.putImageData(od, 0, 0), {
        maxX: md,
        minZ: Wd,
        width: hd * Kd,
        depth: vd * Kd,
        canvas: Qd
      }
    }

    function Jd() {
      return new Promise((dd => {
        setTimeout(dd, 0)
      }))
    }
  },
  41087: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd
    });
    var Wd = md(41089);
    async function Fd() {
      const {
        averageColors: dd
      } = await md.e(235).then((() => md(35669)));
      return new Wd.d(dd)
    }
  },
  41089: (dd, Od, md) => {
    md.d(Od, {
      d: () => Kd,
      g: () => Xd
    });
    var Wd = md(5733);
    const Fd = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      Rd = [150, 150, 150],
      Xd = -2147483648;
    class Kd {
      constructor(dd) {
        this.averages = dd, this.byId = new Map
      }
      get(dd) {
        var Od, md, Xd, Kd, hd;
        const vd = this.byId.get(dd);
        if (void 0 !== vd) return vd;
        const Qd = null !== (Od = null === (md = Wd.i[dd]) || void 0 === md ? void 0 : md.name) && void 0 !== Od ? Od : "",
          td = Qd.split("|")[0],
          od = null !== (Xd = this.averages[Qd]) && void 0 !== Xd ? Xd : this.averages[td],
          Nd = null !== (Kd = null !== (hd = null === od || void 0 === od ? void 0 : od[0]) && void 0 !== hd ? hd : Fd[td]) && void 0 !== Kd ? Kd : 0 === (null === od || void 0 === od ? void 0 : od.length) ? null : Rd;
        return this.byId.set(dd, Nd), Nd
      }
      getDrawnIds() {
        const dd = new Uint8Array(65536);
        for (let Od = 1; Od < 65536; Od++) void 0 !== Wd.i[Od] && null !== this.get(Od) && (dd[Od] = 1);
        return dd
      }
      drawPixel(dd, Od, md, Wd, Fd, Rd) {
        const Kd = function(dd, Od, md) {
            const Wd = dd - Od + (dd - md);
            return Math.max(.65, Math.min(1.2, .97 + .055 * Wd))
          }(Wd, Fd === Xd ? Wd : Fd, Rd === Xd ? Wd : Rd),
          hd = this.get(md);
        dd[Od] = hd[0] * Kd, dd[Od + 1] = hd[1] * Kd, dd[Od + 2] = hd[2] * Kd, dd[Od + 3] = 255
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);