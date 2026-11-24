export const id = 189;
export const ids = [189];
export const modules = {
  37951: (pp, ip, cp) => {
    var Op = cp(37956);

    function op(pp) {
      for (var ip, cp, op = 0, Ip = pp.length, Sp = 0; Sp < pp.length;) {
        for (ip = pp[Sp], cp = 0; Sp < Ip && pp[Sp] === ip;) ++Sp, ++cp;
        op += Op.log2(cp) / 7 | 0, op += Op.log2(ip >>> 0) / 7 | 0, op += 2
      }
      return op
    }
    ip.size = op, ip.encode = function(pp, ip) {
      ip || (ip = new Uint8Array(op(pp)));
      for (var cp, Op, Ip = 0, Sp = ip.length, xp = 0; xp < pp.length;) {
        for (cp = pp[xp], Op = 0; xp < pp.length && pp[xp] === cp;) ++xp, ++Op;
        for (; Ip < Sp && Op >= 128;) ip[Ip++] = 128 + (127 & Op), Op >>>= 7;
        if (Ip >= Sp) throw new Error("RLE buffer overflow");
        for (ip[Ip++] = Op, cp >>>= 0; Ip < Sp && cp >= 128;) ip[Ip++] = 128 + (127 & cp), cp >>>= 7;
        if (Ip >= Sp) throw new Error("RLE buffer overflow");
        ip[Ip++] = cp
      }
      return ip
    }, ip.decode = function(pp, ip) {
      for (var cp, Op, op, Ip, Sp = ip.length, xp = pp.length, Lp = 0, Yp = 0; Yp < xp;) {
        for (cp = 0, Op = 0; Yp < xp && pp[Yp] >= 128;) cp += (127 & pp[Yp++]) << Op, Op += 7;
        if (cp += pp[Yp++] << Op, Yp >= xp) throw new Error("RLE buffer underrun");
        if (Lp + cp > Sp) throw new Error("Chunk buffer overflow");
        for (op = 0, Op = 0; Yp < xp && pp[Yp] >= 128;) op += (127 & pp[Yp++]) << Op, Op += 7;
        if (Yp >= xp) throw new Error("RLE buffer underrun");
        for (op += pp[Yp++] << Op, Ip = 0; Ip < cp; ++Ip) ip[Lp++] = op
      }
      return ip
    }
  },
  37956: (pp, ip) => {
    function cp(pp) {
      var ip = 32;
      return (pp &= -pp) && ip--, 65535 & pp && (ip -= 16), 16711935 & pp && (ip -= 8), 252645135 & pp && (ip -= 4), 858993459 & pp && (ip -= 2), 1431655765 & pp && (ip -= 1), ip
    }
    ip.INT_BITS = 32, ip.INT_MAX = 2147483647, ip.INT_MIN = -1 << 31, ip.sign = function(pp) {
      return (pp > 0) - (pp < 0)
    }, ip.abs = function(pp) {
      var ip = pp >> 31;
      return (pp ^ ip) - ip
    }, ip.min = function(pp, ip) {
      return ip ^ (pp ^ ip) & -(pp < ip)
    }, ip.max = function(pp, ip) {
      return pp ^ (pp ^ ip) & -(pp < ip)
    }, ip.isPow2 = function(pp) {
      return !(pp & pp - 1) && !!pp
    }, ip.log2 = function(pp) {
      var ip, cp;
      return ip = (pp > 65535) << 4, ip |= cp = ((pp >>>= ip) > 255) << 3, ip |= cp = ((pp >>>= cp) > 15) << 2, (ip |= cp = ((pp >>>= cp) > 3) << 1) | (pp >>>= cp) >> 1
    }, ip.log10 = function(pp) {
      return pp >= 1e9 ? 9 : pp >= 1e8 ? 8 : pp >= 1e7 ? 7 : pp >= 1e6 ? 6 : pp >= 1e5 ? 5 : pp >= 1e4 ? 4 : pp >= 1e3 ? 3 : pp >= 100 ? 2 : pp >= 10 ? 1 : 0
    }, ip.popCount = function(pp) {
      return 16843009 * ((pp = (858993459 & (pp -= pp >>> 1 & 1431655765)) + (pp >>> 2 & 858993459)) + (pp >>> 4) & 252645135) >>> 24
    }, ip.countTrailingZeros = cp, ip.nextPow2 = function(pp) {
      return pp += 0 === pp, --pp, pp |= pp >>> 1, pp |= pp >>> 2, pp |= pp >>> 4, pp |= pp >>> 8, (pp |= pp >>> 16) + 1
    }, ip.prevPow2 = function(pp) {
      return pp |= pp >>> 1, pp |= pp >>> 2, pp |= pp >>> 4, pp |= pp >>> 8, (pp |= pp >>> 16) - (pp >>> 1)
    }, ip.parity = function(pp) {
      return pp ^= pp >>> 16, pp ^= pp >>> 8, pp ^= pp >>> 4, 27030 >>> (pp &= 15) & 1
    };
    var Op = new Array(256);
    ! function(pp) {
      for (var ip = 0; ip < 256; ++ip) {
        var cp = ip,
          Op = ip,
          op = 7;
        for (cp >>>= 1; cp; cp >>>= 1) Op <<= 1, Op |= 1 & cp, --op;
        pp[ip] = Op << op & 255
      }
    }(Op), ip.reverse = function(pp) {
      return Op[255 & pp] << 24 | Op[pp >>> 8 & 255] << 16 | Op[pp >>> 16 & 255] << 8 | Op[pp >>> 24 & 255]
    }, ip.interleave2 = function(pp, ip) {
      return (pp = 1431655765 & ((pp = 858993459 & ((pp = 252645135 & ((pp = 16711935 & ((pp &= 65535) | pp << 8)) | pp << 4)) | pp << 2)) | pp << 1)) | (ip = 1431655765 & ((ip = 858993459 & ((ip = 252645135 & ((ip = 16711935 & ((ip &= 65535) | ip << 8)) | ip << 4)) | ip << 2)) | ip << 1)) << 1
    }, ip.deinterleave2 = function(pp, ip) {
      return (pp = 65535 & ((pp = 16711935 & ((pp = 252645135 & ((pp = 858993459 & ((pp = pp >>> ip & 1431655765) | pp >>> 1)) | pp >>> 2)) | pp >>> 4)) | pp >>> 16)) << 16 >> 16
    }, ip.interleave3 = function(pp, ip, cp) {
      return pp = 1227133513 & ((pp = 3272356035 & ((pp = 251719695 & ((pp = 4278190335 & ((pp &= 1023) | pp << 16)) | pp << 8)) | pp << 4)) | pp << 2), (pp |= (ip = 1227133513 & ((ip = 3272356035 & ((ip = 251719695 & ((ip = 4278190335 & ((ip &= 1023) | ip << 16)) | ip << 8)) | ip << 4)) | ip << 2)) << 1) | (cp = 1227133513 & ((cp = 3272356035 & ((cp = 251719695 & ((cp = 4278190335 & ((cp &= 1023) | cp << 16)) | cp << 8)) | cp << 4)) | cp << 2)) << 2
    }, ip.deinterleave3 = function(pp, ip) {
      return (pp = 1023 & ((pp = 4278190335 & ((pp = 251719695 & ((pp = 3272356035 & ((pp = pp >>> ip & 1227133513) | pp >>> 2)) | pp >>> 4)) | pp >>> 8)) | pp >>> 16)) << 22 >> 22
    }, ip.nextCombination = function(pp) {
      var ip = pp | pp - 1;
      return ip + 1 | (~ip & -~ip) - 1 >>> cp(pp) + 1
    }
  },
  40009: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      emptyColumnHeight: () => dp,
      loadHeatmapSchematic: () => ep,
      readSchematicBlocks: () => jp
    });
    var Op = cp(3844),
      op = cp.n(Op),
      Ip = cp(3824),
      Sp = cp(37951),
      xp = cp(195),
      Lp = cp(9338);
    const Yp = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      Dp = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: Yp
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: Yp
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...Yp, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      Ap = op().Type.forSchema({
        type: "record",
        fields: Dp
      }),
      Pp = op().Type.forSchema({
        type: "record",
        fields: [...Dp, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...Yp, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: Yp
          }
        }]
      }),
      Wp = 2,
      yp = 6,
      Up = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      wp = [150, 150, 150],
      vp = 16,
      tp = 4096,
      Hp = xp.g.Qy,
      dp = -2147483648;
    async function ep(pp) {
      const ip = await jp(new Uint8Array(await pp.arrayBuffer()), await async function() {
        const {
          averageColors: pp
        } = await cp.e(207).then((() => cp(34510))), ip = new Map;
        return cp => {
          var Op, op, Ip, Sp, xp;
          const Yp = ip.get(cp);
          if (void 0 !== Yp) return Yp;
          const Dp = null !== (Op = null === (op = Lp.e[cp]) || void 0 === op ? void 0 : op.name) && void 0 !== Op ? Op : "",
            Ap = null !== (Ip = pp[Dp]) && void 0 !== Ip ? Ip : pp[Dp.split("|")[0]],
            Pp = Up[Dp.split("|")[0]],
            Wp = null !== (Sp = null !== (xp = null === Ap || void 0 === Ap ? void 0 : Ap[0]) && void 0 !== xp ? xp : Pp) && void 0 !== Sp ? Sp : 0 === (null === Ap || void 0 === Ap ? void 0 : Ap.length) ? null : wp;
          return ip.set(cp, Wp), Wp
        }
      }());
      return {
        surface: ip.surface,
        topDown: mp(ip.columnTops)
      }
    }
    async function jp(pp, ip) {
      var cp;
      if (pp.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const Op = new DataView(pp.buffer, pp.byteOffset, pp.byteLength).getUint32(0, !0);
      if (Op > yp) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const op = (Op >= Wp ? Pp : Ap).decode(Ip.my.from(pp.subarray(4)), 0).value;
      if (!op) throw new Error("The file isn't a schematic.");
      if (0 === op.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const xp = null !== (cp = op.pasteOffset) && void 0 !== cp ? cp : {
          x: 0,
          y: 0,
          z: 0
        },
        Lp = [xp.x, xp.y, xp.z].map((pp => Math.floor(pp / Hp))),
        Yp = op.chunkData.map((pp => ({
          x: pp.x + Lp[0],
          y: pp.y + Lp[1],
          z: pp.z + Lp[2],
          rle: pp.rle
        }))),
        Dp = new Map;
      for (const [Ip, Ap] of Yp.entries()) {
        const pp = new Uint16Array(Hp ** 3);
        Sp.decode(Ap.rle, pp), Dp.set(`${Ap.x},${Ap.y},${Ap.z}`, pp), Ip % vp === vp - 1 && await Rp()
      }
      const Up = (pp, ip, cp) => pp * Hp * Hp + ip * Hp + cp,
        wp = (pp, ip, cp) => {
          var Op, op;
          const Ip = Math.floor(pp / Hp),
            Sp = Math.floor(ip / Hp),
            xp = Math.floor(cp / Hp);
          return null !== (Op = null === (op = Dp.get(`${Ip},${Sp},${xp}`)) || void 0 === op ? void 0 : op[Up(pp - Ip * Hp, ip - Sp * Hp, cp - xp * Hp)]) && void 0 !== Op ? Op : 0
        },
        tp = new Map,
        ep = [],
        jp = [];
      for (const [Ip, Sp] of Yp.entries()) {
        const pp = Dp.get(`${Sp.x},${Sp.y},${Sp.z}`),
          cp = [Sp.x * Hp, Sp.y * Hp, Sp.z * Hp],
          Op = (ip, Op, op) => ip < 0 || Op < 0 || op < 0 || ip >= Hp || Op >= Hp || op >= Hp ? wp(cp[0] + ip, cp[1] + Op, cp[2] + op) : pp[Up(ip, Op, op)],
          op = `${Sp.x},${Sp.z}`;
        let xp = tp.get(op);
        void 0 === xp && (xp = {
          chunkX: Sp.x,
          chunkZ: Sp.z,
          heights: new Int32Array(Hp * Hp).fill(dp),
          colours: new Uint8Array(Hp * Hp * 3)
        }, tp.set(op, xp));
        for (let Ip = 0; Ip < Hp; Ip++)
          for (let op = 0; op < Hp; op++)
            for (let Sp = 0; Sp < Hp; Sp++) {
              const Lp = pp[Up(Ip, op, Sp)];
              if (0 === Lp) continue;
              const Yp = cp[0] + Ip,
                Dp = cp[1] + op,
                Ap = cp[2] + Sp,
                Pp = ip(Lp);
              if (null === Pp) continue;
              const Wp = Sp * Hp + Ip;
              Dp > xp.heights[Wp] && (xp.heights[Wp] = Dp, xp.colours.set(Pp, 3 * Wp));
              !kp(Lp) && (kp(Op(Ip + 1, op, Sp)) || kp(Op(Ip - 1, op, Sp)) || kp(Op(Ip, op + 1, Sp)) || kp(Op(Ip, op - 1, Sp)) || kp(Op(Ip, op, Sp + 1)) || kp(Op(Ip, op, Sp - 1))) && (ep.push(Yp, Dp, Ap), jp.push(Pp[0], Pp[1], Pp[2]))
            }
        Ip % vp === vp - 1 && await Rp()
      }
      if (0 === ep.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: op.name,
        surface: {
          positions: Int32Array.from(ep),
          colours: Uint8Array.from(jp),
          count: ep.length / 3
        },
        columnTops: [...tp.values()]
      }
    }

    function kp(pp) {
      if (0 === pp) return !0;
      const ip = Lp.e[pp];
      return void 0 === ip || ip.tW || ip.transTex || !1 === ip.solid
    }

    function mp(pp) {
      let ip = 1 / 0,
        cp = -1 / 0,
        Op = 1 / 0,
        op = -1 / 0;
      for (const {
          chunkX: yp,
          chunkZ: Up,
          heights: wp
        }
        of pp) wp.forEach(((pp, Ip) => {
        if (pp === dp) return;
        const Sp = yp * Hp + Ip % Hp,
          xp = Up * Hp + Math.floor(Ip / Hp);
        ip = Math.min(ip, Sp), cp = Math.max(cp, Sp), Op = Math.min(Op, xp), op = Math.max(op, xp)
      }));
      const Ip = cp - ip + 1,
        Sp = op - Op + 1,
        xp = Math.max(1, Math.ceil(Ip / tp), Math.ceil(Sp / tp)),
        Lp = Math.ceil(Ip / xp),
        Yp = Math.ceil(Sp / xp),
        Dp = document.createElement("canvas");
      Dp.width = Lp, Dp.height = Yp;
      const Ap = Dp.getContext("2d");
      if (!Ap) throw new Error("Couldn't draw the schematic from above.");
      const Pp = Ap.createImageData(Lp, Yp),
        Wp = new Int32Array(Lp * Yp).fill(dp);
      for (const {
          chunkX: yp,
          chunkZ: Up,
          heights: wp,
          colours: vp
        }
        of pp) wp.forEach(((pp, ip) => {
        const op = yp * Hp + ip % Hp,
          Ip = Up * Hp + Math.floor(ip / Hp),
          Sp = Math.floor((Ip - Op) / xp) * Lp + Math.floor((cp - op) / xp);
        pp === dp || pp <= Wp[Sp] || (Wp[Sp] = pp, Pp.data.set(vp.subarray(3 * ip, 3 * ip + 3), 4 * Sp), Pp.data[4 * Sp + 3] = 255)
      }));
      return Ap.putImageData(Pp, 0, 0), {
        maxX: cp,
        minZ: Op,
        width: Lp * xp,
        depth: Yp * xp,
        canvas: Dp
      }
    }

    function Rp() {
      return new Promise((pp => {
        setTimeout(pp, 0)
      }))
    }
  },
  9436: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => op,
      h: () => Ip
    });
    var Op = cp(9385);
    const op = "Air",
      Ip = Object.freeze(new Op.e(op, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);