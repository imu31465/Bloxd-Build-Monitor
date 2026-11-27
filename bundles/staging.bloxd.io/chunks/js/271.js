export const id = 271;
export const ids = [271];
export const modules = {
  39230: (rr, Sr, Qr) => {
    var Zr = Qr(39238);

    function Wr(rr) {
      for (var Sr, Qr, Wr = 0, ar = rr.length, jr = 0; jr < rr.length;) {
        for (Sr = rr[jr], Qr = 0; jr < ar && rr[jr] === Sr;) ++jr, ++Qr;
        Wr += Zr.log2(Qr) / 7 | 0, Wr += Zr.log2(Sr >>> 0) / 7 | 0, Wr += 2
      }
      return Wr
    }
    Sr.size = Wr, Sr.encode = function(rr, Sr) {
      Sr || (Sr = new Uint8Array(Wr(rr)));
      for (var Qr, Zr, ar = 0, jr = Sr.length, Ir = 0; Ir < rr.length;) {
        for (Qr = rr[Ir], Zr = 0; Ir < rr.length && rr[Ir] === Qr;) ++Ir, ++Zr;
        for (; ar < jr && Zr >= 128;) Sr[ar++] = 128 + (127 & Zr), Zr >>>= 7;
        if (ar >= jr) throw new Error("RLE buffer overflow");
        for (Sr[ar++] = Zr, Qr >>>= 0; ar < jr && Qr >= 128;) Sr[ar++] = 128 + (127 & Qr), Qr >>>= 7;
        if (ar >= jr) throw new Error("RLE buffer overflow");
        Sr[ar++] = Qr
      }
      return Sr
    }, Sr.decode = function(rr, Sr) {
      for (var Qr, Zr, Wr, ar, jr = Sr.length, Ir = rr.length, fr = 0, Er = 0; Er < Ir;) {
        for (Qr = 0, Zr = 0; Er < Ir && rr[Er] >= 128;) Qr += (127 & rr[Er++]) << Zr, Zr += 7;
        if (Qr += rr[Er++] << Zr, Er >= Ir) throw new Error("RLE buffer underrun");
        if (fr + Qr > jr) throw new Error("Chunk buffer overflow");
        for (Wr = 0, Zr = 0; Er < Ir && rr[Er] >= 128;) Wr += (127 & rr[Er++]) << Zr, Zr += 7;
        if (Er >= Ir) throw new Error("RLE buffer underrun");
        for (Wr += rr[Er++] << Zr, ar = 0; ar < Qr; ++ar) Sr[fr++] = Wr
      }
      return Sr
    }
  },
  39238: (rr, Sr) => {
    function Qr(rr) {
      var Sr = 32;
      return (rr &= -rr) && Sr--, 65535 & rr && (Sr -= 16), 16711935 & rr && (Sr -= 8), 252645135 & rr && (Sr -= 4), 858993459 & rr && (Sr -= 2), 1431655765 & rr && (Sr -= 1), Sr
    }
    Sr.INT_BITS = 32, Sr.INT_MAX = 2147483647, Sr.INT_MIN = -1 << 31, Sr.sign = function(rr) {
      return (rr > 0) - (rr < 0)
    }, Sr.abs = function(rr) {
      var Sr = rr >> 31;
      return (rr ^ Sr) - Sr
    }, Sr.min = function(rr, Sr) {
      return Sr ^ (rr ^ Sr) & -(rr < Sr)
    }, Sr.max = function(rr, Sr) {
      return rr ^ (rr ^ Sr) & -(rr < Sr)
    }, Sr.isPow2 = function(rr) {
      return !(rr & rr - 1) && !!rr
    }, Sr.log2 = function(rr) {
      var Sr, Qr;
      return Sr = (rr > 65535) << 4, Sr |= Qr = ((rr >>>= Sr) > 255) << 3, Sr |= Qr = ((rr >>>= Qr) > 15) << 2, (Sr |= Qr = ((rr >>>= Qr) > 3) << 1) | (rr >>>= Qr) >> 1
    }, Sr.log10 = function(rr) {
      return rr >= 1e9 ? 9 : rr >= 1e8 ? 8 : rr >= 1e7 ? 7 : rr >= 1e6 ? 6 : rr >= 1e5 ? 5 : rr >= 1e4 ? 4 : rr >= 1e3 ? 3 : rr >= 100 ? 2 : rr >= 10 ? 1 : 0
    }, Sr.popCount = function(rr) {
      return 16843009 * ((rr = (858993459 & (rr -= rr >>> 1 & 1431655765)) + (rr >>> 2 & 858993459)) + (rr >>> 4) & 252645135) >>> 24
    }, Sr.countTrailingZeros = Qr, Sr.nextPow2 = function(rr) {
      return rr += 0 === rr, --rr, rr |= rr >>> 1, rr |= rr >>> 2, rr |= rr >>> 4, rr |= rr >>> 8, (rr |= rr >>> 16) + 1
    }, Sr.prevPow2 = function(rr) {
      return rr |= rr >>> 1, rr |= rr >>> 2, rr |= rr >>> 4, rr |= rr >>> 8, (rr |= rr >>> 16) - (rr >>> 1)
    }, Sr.parity = function(rr) {
      return rr ^= rr >>> 16, rr ^= rr >>> 8, rr ^= rr >>> 4, 27030 >>> (rr &= 15) & 1
    };
    var Zr = new Array(256);
    ! function(rr) {
      for (var Sr = 0; Sr < 256; ++Sr) {
        var Qr = Sr,
          Zr = Sr,
          Wr = 7;
        for (Qr >>>= 1; Qr; Qr >>>= 1) Zr <<= 1, Zr |= 1 & Qr, --Wr;
        rr[Sr] = Zr << Wr & 255
      }
    }(Zr), Sr.reverse = function(rr) {
      return Zr[255 & rr] << 24 | Zr[rr >>> 8 & 255] << 16 | Zr[rr >>> 16 & 255] << 8 | Zr[rr >>> 24 & 255]
    }, Sr.interleave2 = function(rr, Sr) {
      return (rr = 1431655765 & ((rr = 858993459 & ((rr = 252645135 & ((rr = 16711935 & ((rr &= 65535) | rr << 8)) | rr << 4)) | rr << 2)) | rr << 1)) | (Sr = 1431655765 & ((Sr = 858993459 & ((Sr = 252645135 & ((Sr = 16711935 & ((Sr &= 65535) | Sr << 8)) | Sr << 4)) | Sr << 2)) | Sr << 1)) << 1
    }, Sr.deinterleave2 = function(rr, Sr) {
      return (rr = 65535 & ((rr = 16711935 & ((rr = 252645135 & ((rr = 858993459 & ((rr = rr >>> Sr & 1431655765) | rr >>> 1)) | rr >>> 2)) | rr >>> 4)) | rr >>> 16)) << 16 >> 16
    }, Sr.interleave3 = function(rr, Sr, Qr) {
      return rr = 1227133513 & ((rr = 3272356035 & ((rr = 251719695 & ((rr = 4278190335 & ((rr &= 1023) | rr << 16)) | rr << 8)) | rr << 4)) | rr << 2), (rr |= (Sr = 1227133513 & ((Sr = 3272356035 & ((Sr = 251719695 & ((Sr = 4278190335 & ((Sr &= 1023) | Sr << 16)) | Sr << 8)) | Sr << 4)) | Sr << 2)) << 1) | (Qr = 1227133513 & ((Qr = 3272356035 & ((Qr = 251719695 & ((Qr = 4278190335 & ((Qr &= 1023) | Qr << 16)) | Qr << 8)) | Qr << 4)) | Qr << 2)) << 2
    }, Sr.deinterleave3 = function(rr, Sr) {
      return (rr = 1023 & ((rr = 4278190335 & ((rr = 251719695 & ((rr = 3272356035 & ((rr = rr >>> Sr & 1227133513) | rr >>> 2)) | rr >>> 4)) | rr >>> 8)) | rr >>> 16)) << 22 >> 22
    }, Sr.nextCombination = function(rr) {
      var Sr = rr | rr - 1;
      return Sr + 1 | (~Sr & -~Sr) - 1 >>> Qr(rr) + 1
    }
  },
  41710: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      emptyColumnHeight: () => nr,
      loadHeatmapSchematic: () => er,
      readSchematicBlocks: () => Kr
    });
    var Zr = Qr(2493),
      Wr = Qr.n(Zr),
      ar = Qr(2448),
      jr = Qr(39230),
      Ir = Qr(208),
      fr = Qr(5779),
      Er = Qr(41093);
    const pr = [{
        name: "x",
        type: "int"
      }, {
        name: "y",
        type: "int"
      }, {
        name: "z",
        type: "int"
      }],
      xr = [{
        name: "name",
        type: "string"
      }, {
        name: "startOffset",
        type: {
          type: "record",
          fields: pr
        }
      }, {
        name: "dimensions",
        type: {
          type: "record",
          fields: pr
        }
      }, {
        name: "chunkData",
        type: {
          type: "array",
          items: {
            type: "record",
            fields: [...pr, {
              name: "rle",
              type: "bytes"
            }]
          }
        }
      }],
      mr = Wr().Type.forSchema({
        type: "record",
        fields: xr
      }),
      Nr = Wr().Type.forSchema({
        type: "record",
        fields: [...xr, {
          name: "blockData",
          type: {
            type: "array",
            items: {
              type: "record",
              fields: [...pr, {
                name: "data",
                type: "bytes"
              }]
            }
          }
        }, {
          name: "pasteOffset",
          type: {
            type: "record",
            fields: pr
          }
        }]
      }),
      Ur = 2,
      tr = 6,
      hr = 16,
      zr = 4096,
      Yr = Ir.i.hx,
      nr = -2147483648;
    async function er(rr) {
      const Sr = await (0, Er.e)(),
        Qr = await Kr(new Uint8Array(await rr.arrayBuffer()), (rr => Sr.get(rr)));
      return {
        surface: Qr.surface,
        topDown: Br(Qr.columnTops)
      }
    }
    async function Kr(rr, Sr) {
      var Qr;
      if (rr.byteLength < 4) throw new Error("The file is too short to be a schematic.");
      const Zr = new DataView(rr.buffer, rr.byteOffset, rr.byteLength).getUint32(0, !0);
      if (Zr > tr) throw new Error("The file isn't a schematic this version of Bloxd can read.");
      const Wr = (Zr >= Ur ? Nr : mr).decode(ar.Dp.from(rr.subarray(4)), 0).value;
      if (!Wr) throw new Error("The file isn't a schematic.");
      if (0 === Wr.chunkData.length) throw new Error("The schematic has no blocks in it.");
      const Ir = null !== (Qr = Wr.pasteOffset) && void 0 !== Qr ? Qr : {
          x: 0,
          y: 0,
          z: 0
        },
        fr = [Ir.x, Ir.y, Ir.z].map((rr => Math.floor(rr / Yr))),
        Er = Wr.chunkData.map((rr => ({
          x: rr.x + fr[0],
          y: rr.y + fr[1],
          z: rr.z + fr[2],
          rle: rr.rle
        }))),
        pr = new Map;
      for (const [ar, mr] of Er.entries()) {
        const rr = new Uint16Array(Yr ** 3);
        jr.decode(mr.rle, rr), pr.set(`${mr.x},${mr.y},${mr.z}`, rr), ar % hr === hr - 1 && await Tr()
      }
      const xr = (rr, Sr, Qr) => rr * Yr * Yr + Sr * Yr + Qr,
        zr = (rr, Sr, Qr) => {
          var Zr, Wr;
          const ar = Math.floor(rr / Yr),
            jr = Math.floor(Sr / Yr),
            Ir = Math.floor(Qr / Yr);
          return null !== (Zr = null === (Wr = pr.get(`${ar},${jr},${Ir}`)) || void 0 === Wr ? void 0 : Wr[xr(rr - ar * Yr, Sr - jr * Yr, Qr - Ir * Yr)]) && void 0 !== Zr ? Zr : 0
        },
        er = new Map,
        Kr = [],
        Br = [];
      for (const [ar, jr] of Er.entries()) {
        const rr = pr.get(`${jr.x},${jr.y},${jr.z}`),
          Qr = [jr.x * Yr, jr.y * Yr, jr.z * Yr],
          Zr = (Sr, Zr, Wr) => Sr < 0 || Zr < 0 || Wr < 0 || Sr >= Yr || Zr >= Yr || Wr >= Yr ? zr(Qr[0] + Sr, Qr[1] + Zr, Qr[2] + Wr) : rr[xr(Sr, Zr, Wr)],
          Wr = `${jr.x},${jr.z}`;
        let Ir = er.get(Wr);
        void 0 === Ir && (Ir = {
          chunkX: jr.x,
          chunkZ: jr.z,
          heights: new Int32Array(Yr * Yr).fill(nr),
          colours: new Uint8Array(Yr * Yr * 3)
        }, er.set(Wr, Ir));
        for (let ar = 0; ar < Yr; ar++)
          for (let Wr = 0; Wr < Yr; Wr++)
            for (let jr = 0; jr < Yr; jr++) {
              const fr = rr[xr(ar, Wr, jr)];
              if (0 === fr) continue;
              const Er = Qr[0] + ar,
                pr = Qr[1] + Wr,
                mr = Qr[2] + jr,
                Nr = Sr(fr);
              if (null === Nr) continue;
              const Ur = jr * Yr + ar;
              pr > Ir.heights[Ur] && (Ir.heights[Ur] = pr, Ir.colours.set(Nr, 3 * Ur));
              !yr(fr) && (yr(Zr(ar + 1, Wr, jr)) || yr(Zr(ar - 1, Wr, jr)) || yr(Zr(ar, Wr + 1, jr)) || yr(Zr(ar, Wr - 1, jr)) || yr(Zr(ar, Wr, jr + 1)) || yr(Zr(ar, Wr, jr - 1))) && (Kr.push(Er, pr, mr), Br.push(Nr[0], Nr[1], Nr[2]))
            }
        ar % hr === hr - 1 && await Tr()
      }
      if (0 === Kr.length) throw new Error("The schematic has no blocks in it.");
      return {
        name: Wr.name,
        surface: {
          positions: Int32Array.from(Kr),
          colours: Uint8Array.from(Br),
          count: Kr.length / 3
        },
        columnTops: [...er.values()]
      }
    }

    function yr(rr) {
      if (0 === rr) return !0;
      const Sr = fr.j[rr];
      return void 0 === Sr || Sr.HN || Sr.transTex || !1 === Sr.solid
    }

    function Br(rr) {
      let Sr = 1 / 0,
        Qr = -1 / 0,
        Zr = 1 / 0,
        Wr = -1 / 0;
      for (const {
          chunkX: Ur,
          chunkZ: tr,
          heights: hr
        }
        of rr) hr.forEach(((rr, ar) => {
        if (rr === nr) return;
        const jr = Ur * Yr + ar % Yr,
          Ir = tr * Yr + Math.floor(ar / Yr);
        Sr = Math.min(Sr, jr), Qr = Math.max(Qr, jr), Zr = Math.min(Zr, Ir), Wr = Math.max(Wr, Ir)
      }));
      const ar = Qr - Sr + 1,
        jr = Wr - Zr + 1,
        Ir = Math.max(1, Math.ceil(ar / zr), Math.ceil(jr / zr)),
        fr = Math.ceil(ar / Ir),
        Er = Math.ceil(jr / Ir),
        pr = document.createElement("canvas");
      pr.width = fr, pr.height = Er;
      const xr = pr.getContext("2d");
      if (!xr) throw new Error("Couldn't draw the schematic from above.");
      const mr = xr.createImageData(fr, Er),
        Nr = new Int32Array(fr * Er).fill(nr);
      for (const {
          chunkX: Ur,
          chunkZ: tr,
          heights: hr,
          colours: zr
        }
        of rr) hr.forEach(((rr, Sr) => {
        const Wr = Ur * Yr + Sr % Yr,
          ar = tr * Yr + Math.floor(Sr / Yr),
          jr = Math.floor((ar - Zr) / Ir) * fr + Math.floor((Qr - Wr) / Ir);
        rr === nr || rr <= Nr[jr] || (Nr[jr] = rr, mr.data.set(zr.subarray(3 * Sr, 3 * Sr + 3), 4 * jr), mr.data[4 * jr + 3] = 255)
      }));
      return xr.putImageData(mr, 0, 0), {
        maxX: Qr,
        minZ: Zr,
        width: fr * Ir,
        depth: Er * Ir,
        canvas: pr
      }
    }

    function Tr() {
      return new Promise((rr => {
        setTimeout(rr, 0)
      }))
    }
  },
  41093: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Wr
    });
    var Zr = Qr(41096);
    async function Wr() {
      const {
        averageColors: rr
      } = await Qr.e(235).then((() => Qr(35587)));
      return new Zr.e(rr)
    }
  },
  41096: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      e: () => Ir,
      h: () => jr
    });
    var Zr = Qr(5779);
    const Wr = {
        Water: [63, 118, 228],
        Lava: [232, 110, 30]
      },
      ar = [150, 150, 150],
      jr = -2147483648;
    class Ir {
      constructor(rr) {
        this.averages = rr, this.byId = new Map
      }
      get(rr) {
        var Sr, Qr, jr, Ir, fr;
        const Er = this.byId.get(rr);
        if (void 0 !== Er) return Er;
        const pr = null !== (Sr = null === (Qr = Zr.j[rr]) || void 0 === Qr ? void 0 : Qr.name) && void 0 !== Sr ? Sr : "",
          xr = pr.split("|")[0],
          mr = null !== (jr = this.averages[pr]) && void 0 !== jr ? jr : this.averages[xr],
          Nr = null !== (Ir = null !== (fr = null === mr || void 0 === mr ? void 0 : mr[0]) && void 0 !== fr ? fr : Wr[xr]) && void 0 !== Ir ? Ir : 0 === (null === mr || void 0 === mr ? void 0 : mr.length) ? null : ar;
        return this.byId.set(rr, Nr), Nr
      }
      getDrawnIds() {
        const rr = new Uint8Array(65536);
        for (let Sr = 1; Sr < 65536; Sr++) void 0 !== Zr.j[Sr] && null !== this.get(Sr) && (rr[Sr] = 1);
        return rr
      }
      drawPixel(rr, Sr, Qr, Zr, Wr, ar) {
        const Ir = function(rr, Sr, Qr) {
            const Zr = rr - Sr + (rr - Qr);
            return Math.max(.65, Math.min(1.2, .97 + .055 * Zr))
          }(Zr, Wr === jr ? Zr : Wr, ar === jr ? Zr : ar),
          fr = this.get(Qr);
        rr[Sr] = fr[0] * Ir, rr[Sr + 1] = fr[1] * Ir, rr[Sr + 2] = fr[2] * Ir, rr[Sr + 3] = 255
      }
    }
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);