export const id = 180;
export const ids = [180];
export const modules = {
  36386: (yb, bb, Wy) => {
    var Uy = Wy(36395);

    function hy(yb) {
      for (var bb, Wy, hy = 0, fy = yb.length, Zy = 0; Zy < yb.length;) {
        for (bb = yb[Zy], Wy = 0; Zy < fy && yb[Zy] === bb;) ++Zy, ++Wy;
        hy += Uy.log2(Wy) / 7 | 0, hy += Uy.log2(bb >>> 0) / 7 | 0, hy += 2
      }
      return hy
    }
    bb.size = hy, bb.encode = function(yb, bb) {
      bb || (bb = new Uint8Array(hy(yb)));
      for (var Wy, Uy, fy = 0, Zy = bb.length, cb = 0; cb < yb.length;) {
        for (Wy = yb[cb], Uy = 0; cb < yb.length && yb[cb] === Wy;) ++cb, ++Uy;
        for (; fy < Zy && Uy >= 128;) bb[fy++] = 128 + (127 & Uy), Uy >>>= 7;
        if (fy >= Zy) throw new Error("RLE buffer overflow");
        for (bb[fy++] = Uy, Wy >>>= 0; fy < Zy && Wy >= 128;) bb[fy++] = 128 + (127 & Wy), Wy >>>= 7;
        if (fy >= Zy) throw new Error("RLE buffer overflow");
        bb[fy++] = Wy
      }
      return bb
    }, bb.decode = function(yb, bb) {
      for (var Wy, Uy, hy, fy, Zy = bb.length, cb = yb.length, Py = 0, oy = 0; oy < cb;) {
        for (Wy = 0, Uy = 0; oy < cb && yb[oy] >= 128;) Wy += (127 & yb[oy++]) << Uy, Uy += 7;
        if (Wy += yb[oy++] << Uy, oy >= cb) throw new Error("RLE buffer underrun");
        if (Py + Wy > Zy) throw new Error("Chunk buffer overflow");
        for (hy = 0, Uy = 0; oy < cb && yb[oy] >= 128;) hy += (127 & yb[oy++]) << Uy, Uy += 7;
        if (oy >= cb) throw new Error("RLE buffer underrun");
        for (hy += yb[oy++] << Uy, fy = 0; fy < Wy; ++fy) bb[Py++] = hy
      }
      return bb
    }
  },
  36395: (yb, bb) => {
    function Wy(yb) {
      var bb = 32;
      return (yb &= -yb) && bb--, 65535 & yb && (bb -= 16), 16711935 & yb && (bb -= 8), 252645135 & yb && (bb -= 4), 858993459 & yb && (bb -= 2), 1431655765 & yb && (bb -= 1), bb
    }
    bb.INT_BITS = 32, bb.INT_MAX = 2147483647, bb.INT_MIN = -1 << 31, bb.sign = function(yb) {
      return (yb > 0) - (yb < 0)
    }, bb.abs = function(yb) {
      var bb = yb >> 31;
      return (yb ^ bb) - bb
    }, bb.min = function(yb, bb) {
      return bb ^ (yb ^ bb) & -(yb < bb)
    }, bb.max = function(yb, bb) {
      return yb ^ (yb ^ bb) & -(yb < bb)
    }, bb.isPow2 = function(yb) {
      return !(yb & yb - 1) && !!yb
    }, bb.log2 = function(yb) {
      var bb, Wy;
      return bb = (yb > 65535) << 4, bb |= Wy = ((yb >>>= bb) > 255) << 3, bb |= Wy = ((yb >>>= Wy) > 15) << 2, (bb |= Wy = ((yb >>>= Wy) > 3) << 1) | (yb >>>= Wy) >> 1
    }, bb.log10 = function(yb) {
      return yb >= 1e9 ? 9 : yb >= 1e8 ? 8 : yb >= 1e7 ? 7 : yb >= 1e6 ? 6 : yb >= 1e5 ? 5 : yb >= 1e4 ? 4 : yb >= 1e3 ? 3 : yb >= 100 ? 2 : yb >= 10 ? 1 : 0
    }, bb.popCount = function(yb) {
      return 16843009 * ((yb = (858993459 & (yb -= yb >>> 1 & 1431655765)) + (yb >>> 2 & 858993459)) + (yb >>> 4) & 252645135) >>> 24
    }, bb.countTrailingZeros = Wy, bb.nextPow2 = function(yb) {
      return yb += 0 === yb, --yb, yb |= yb >>> 1, yb |= yb >>> 2, yb |= yb >>> 4, yb |= yb >>> 8, (yb |= yb >>> 16) + 1
    }, bb.prevPow2 = function(yb) {
      return yb |= yb >>> 1, yb |= yb >>> 2, yb |= yb >>> 4, yb |= yb >>> 8, (yb |= yb >>> 16) - (yb >>> 1)
    }, bb.parity = function(yb) {
      return yb ^= yb >>> 16, yb ^= yb >>> 8, yb ^= yb >>> 4, 27030 >>> (yb &= 15) & 1
    };
    var Uy = new Array(256);
    ! function(yb) {
      for (var bb = 0; bb < 256; ++bb) {
        var Wy = bb,
          Uy = bb,
          hy = 7;
        for (Wy >>>= 1; Wy; Wy >>>= 1) Uy <<= 1, Uy |= 1 & Wy, --hy;
        yb[bb] = Uy << hy & 255
      }
    }(Uy), bb.reverse = function(yb) {
      return Uy[255 & yb] << 24 | Uy[yb >>> 8 & 255] << 16 | Uy[yb >>> 16 & 255] << 8 | Uy[yb >>> 24 & 255]
    }, bb.interleave2 = function(yb, bb) {
      return (yb = 1431655765 & ((yb = 858993459 & ((yb = 252645135 & ((yb = 16711935 & ((yb &= 65535) | yb << 8)) | yb << 4)) | yb << 2)) | yb << 1)) | (bb = 1431655765 & ((bb = 858993459 & ((bb = 252645135 & ((bb = 16711935 & ((bb &= 65535) | bb << 8)) | bb << 4)) | bb << 2)) | bb << 1)) << 1
    }, bb.deinterleave2 = function(yb, bb) {
      return (yb = 65535 & ((yb = 16711935 & ((yb = 252645135 & ((yb = 858993459 & ((yb = yb >>> bb & 1431655765) | yb >>> 1)) | yb >>> 2)) | yb >>> 4)) | yb >>> 16)) << 16 >> 16
    }, bb.interleave3 = function(yb, bb, Wy) {
      return yb = 1227133513 & ((yb = 3272356035 & ((yb = 251719695 & ((yb = 4278190335 & ((yb &= 1023) | yb << 16)) | yb << 8)) | yb << 4)) | yb << 2), (yb |= (bb = 1227133513 & ((bb = 3272356035 & ((bb = 251719695 & ((bb = 4278190335 & ((bb &= 1023) | bb << 16)) | bb << 8)) | bb << 4)) | bb << 2)) << 1) | (Wy = 1227133513 & ((Wy = 3272356035 & ((Wy = 251719695 & ((Wy = 4278190335 & ((Wy &= 1023) | Wy << 16)) | Wy << 8)) | Wy << 4)) | Wy << 2)) << 2
    }, bb.deinterleave3 = function(yb, bb) {
      return (yb = 1023 & ((yb = 4278190335 & ((yb = 251719695 & ((yb = 3272356035 & ((yb = yb >>> bb & 1227133513) | yb >>> 2)) | yb >>> 4)) | yb >>> 8)) | yb >>> 16)) << 22 >> 22
    }, bb.nextCombination = function(yb) {
      var bb = yb | yb - 1;
      return bb + 1 | (~bb & -~bb) - 1 >>> Wy(yb) + 1
    }
  },
  38265: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      emptyColumnHeight: () => Ty,
      loadHeatmapSchematic: () => Vy,
      readSchematicBlocks: () => Jy
    });
    var Uy = Wy(3059),
      hy = Wy.n(Uy),
      fy = Wy(3036),
      Zy = Wy(36386),
      cb = Wy(167),
      Py = Wy(8459);
    const oy = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      By = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: oy
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: oy
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...oy, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      Ky = hy().Type.forSchema({
        type: "record",
        fields: By
      }),
      ey = hy().Type.forSchema({
        type: "record",
        fields: [...By, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...oy, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: oy
          }
        }]
      }),
      qb = 2,
      sy = 6,
      Sy = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      Ey = [150, 150, 150],
      ly = 16,
      mb = 4096,
      Cy = cb.c.DU,
      Ty = -2147483648;
    async function Vy(yb) {
      const bb = await Jy(new Uint8Array(await yb.arrayBuffer()), await async function() {
        const {
          averageColors: yb
        } = await Wy.e(186).then((() => Wy(33215))), bb = new Map;
        return Wy => {
          var Uy, hy, fy, Zy, cb;
          const oy = bb.get(Wy);
          if (void 0 !== oy) return oy;
          const By = null !== (Uy = null === (hy = Py.h[Wy]) || void 0 === hy ? void 0 : hy.name) && void 0 !== Uy ? Uy : "",
            Ky = null !== (fy = yb[By]) && void 0 !== fy ? fy : yb[By.split("|")[0]],
            ey = Sy[By.split("|")[0]],
            qb = null !== (Zy = null !== (cb = null === Ky || void 0 === Ky ? void 0 : Ky[0]) && void 0 !== cb ? cb : ey) && void 0 !== Zy ? Zy : 0 === (null === Ky || void 0 === Ky ? void 0 : Ky.length) ? null : Ey;
          return bb.set(Wy, qb), qb
        }
      }());
      return {
        surface: bb.surface,
        topDown: Gy(bb.columnTops)
      }
    }
    async function Jy(yb, bb) {
      var Wy;
      if (yb.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const Uy = new DataView(yb.buffer, yb.byteOffset, yb.byteLength).getUint32(0, !0);
      if (Uy > sy) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const hy = (Uy >= qb ? ey : Ky).decode(fy.uU.from(yb.subarray(4)), 0).value;
      if (!hy) throw new Error("The file isn't a schematic.");
      if (0 === hy.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const cb = null !== (Wy = hy.pasteOffset) && void 0 !== Wy ? Wy : {
          x: 0,
          y: 0,
          z: 0
        },
        Py = [cb.x, cb.y, cb.z].map((yb => Math.floor(yb / Cy))),
        oy = hy.chunkData.map((yb => ({
          x: yb.x + Py[0],
          y: yb.y + Py[1],
          z: yb.z + Py[2],
          rle: yb.rle
        }))),
        By = new Map;
      for (const [fy, Ky] of oy.entries()) {
        const yb = new Uint16Array(Cy ** 3);
        Zy.decode(Ky.rle, yb), By.set(`${Ky.x},${Ky.y},${Ky.z}`, yb), fy % ly === ly - 1 && await Oy()
      }
      const Sy = (yb, bb, Wy) => yb * Cy * Cy + bb * Cy + Wy,
        Ey = (yb, bb, Wy) => {
          var Uy, hy;
          const fy = Math.floor(yb / Cy),
            Zy = Math.floor(bb / Cy),
            cb = Math.floor(Wy / Cy);
          return null !== (Uy = null === (hy = By.get(`${fy},${Zy},${cb}`)) || void 0 === hy ? void 0 : hy[Sy(yb - fy * Cy, bb - Zy * Cy, Wy - cb * Cy)]) && void 0 !== Uy ? Uy : 0
        },
        mb = new Map,
        Vy = [],
        Jy = [];
      for (const [fy, Zy] of oy.entries()) {
        const yb = By.get(`${Zy.x},${Zy.y},${Zy.z}`),
          Wy = [Zy.x * Cy, Zy.y * Cy, Zy.z * Cy],
          Uy = (bb, Uy, hy) => bb < 0 || Uy < 0 || hy < 0 || bb >= Cy || Uy >= Cy || hy >= Cy ? Ey(Wy[0] + bb, Wy[1] + Uy, Wy[2] + hy) : yb[Sy(bb, Uy, hy)],
          hy = `${Zy.x},${Zy.z}`;
        let cb = mb.get(hy);
        void 0 === cb && (cb = {
          chunkX: Zy.x,
          chunkZ: Zy.z,
          heights: new Int32Array(Cy * Cy).fill(Ty),
          colours: new Uint8Array(Cy * Cy * 3)
        }, mb.set(hy, cb));
        for (let fy = 0; fy < Cy; fy++)
          for (let hy = 0; hy < Cy; hy++)
            for (let Zy = 0; Zy < Cy; Zy++) {
              const Py = yb[Sy(fy, hy, Zy)];
              if (0 === Py) continue;
              const oy = Wy[0] + fy,
                By = Wy[1] + hy,
                Ky = Wy[2] + Zy,
                ey = bb(Py);
              if (null === ey) continue;
              const qb = Zy * Cy + fy;
              By > cb.heights[qb] && (cb.heights[qb] = By, cb.colours.set(ey, 3 * qb));
              !gb(Py) && (gb(Uy(fy + 1, hy, Zy)) || gb(Uy(fy - 1, hy, Zy)) || gb(Uy(fy, hy + 1, Zy)) || gb(Uy(fy, hy - 1, Zy)) || gb(Uy(fy, hy, Zy + 1)) || gb(Uy(fy, hy, Zy - 1))) && (Vy.push(oy, By, Ky), Jy.push(ey[0], ey[1], ey[2]))
            }
        fy % ly === ly - 1 && await Oy()
      }
      if (0 === Vy.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: hy.name,
        surface: {
          positions: Int32Array.from(Vy),
          colours: Uint8Array.from(Jy),
          count: Vy.length / 3
        },
        columnTops: [...mb.values()]
      }
    }

    function gb(yb) {
      if (0 === yb) return !0;
      const bb = Py.h[yb];
      return void 0 === bb || bb.TW || bb.transTex || !1 === bb.solid
    }

    function Gy(yb) {
      let bb = 1 / 0,
        Wy = -1 / 0,
        Uy = 1 / 0,
        hy = -1 / 0;
      for (const {
          chunkX: sy,
          chunkZ: Sy,
          heights: Ey
        }
        of yb) Ey.forEach(((yb, fy) => {
        if (yb === Ty) return;
        const Zy = sy * Cy + fy % Cy,
          cb = Sy * Cy + Math.floor(fy / Cy);
        bb = Math.min(bb, Zy), Wy = Math.max(Wy, Zy), Uy = Math.min(Uy, cb), hy = Math.max(hy, cb)
      }));
      const fy = Wy - bb + 1,
        Zy = hy - Uy + 1,
        cb = Math.max(1, Math.ceil(fy / mb), Math.ceil(Zy / mb)),
        Py = Math.ceil(fy / cb),
        oy = Math.ceil(Zy / cb),
        By = document.createElement("canvas");
      By.width = Py, By.height = oy;
      const Ky = By.getContext("2d");
      if (!Ky) throw new Error("Couldn't draw the schematic from above.");
      const ey = Ky.createImageData(Py, oy),
        qb = new Int32Array(Py * oy).fill(Ty);
      for (const {
          chunkX: sy,
          chunkZ: Sy,
          heights: Ey,
          colours: ly
        }
        of yb) Ey.forEach(((yb, bb) => {
        const hy = sy * Cy + bb % Cy,
          fy = Sy * Cy + Math.floor(bb / Cy),
          Zy = Math.floor((fy - Uy) / cb) * Py + Math.floor((Wy - hy) / cb);
        yb === Ty || yb <= qb[Zy] || (qb[Zy] = yb, ey.data.set(ly.subarray(3 * bb, 3 * bb + 3), 4 * Zy), ey.data[4 * Zy + 3] = 255)
      }));
      return Ky.putImageData(ey, 0, 0), {
        maxX: Wy,
        minZ: Uy,
        width: Py * cb,
        depth: oy * cb,
        canvas: By
      }
    }

    function Oy() {
      return new Promise((yb => {
        setTimeout(yb, 0)
      }))
    }
  },
  8556: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => hy,
      g: () => fy
    });
    var Uy = Wy(8504);
    const hy = "Air",
      fy = Object.freeze(new Uy.h(hy, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);