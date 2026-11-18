export const id = 293;
export const ids = [293];
export const modules = {
  40346: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      ReadExrDataAsync: () => Kb,
      _ExrTextureLoader: () => Bb
    });
    var Uy = Wy(37350),
      hy = Wy(35902),
      fy = Wy(38547);
    const Zy = 4,
      cb = 4,
      Py = 1,
      oy = 2,
      By = 8,
      Ky = 65536,
      ey = Ky >> 3,
      qb = 14,
      sy = 65537,
      Sy = 1 << qb,
      Ey = Sy - 1,
      ly = 59,
      mb = 63,
      Cy = 2 + mb - ly;
    var Ty, Vy;

    function Jy(yb, bb) {
      const Wy = new Uint8Array(yb);
      let Uy = 0;
      for (; 0 != Wy[bb.value + Uy];) Uy += 1;
      const hy = (new TextDecoder).decode(Wy.slice(bb.value, bb.value + Uy));
      return bb.value = bb.value + Uy + 1, hy
    }

    function gb(yb, bb) {
      const Wy = yb.getInt32(bb.value, !0);
      return bb.value += Zy, Wy
    }

    function Gy(yb, bb) {
      const Wy = yb.getUint32(bb.value, !0);
      return bb.value += Zy, Wy
    }

    function Oy(yb, bb) {
      const Wy = yb.getUint8(bb.value);
      return bb.value += Py, Wy
    }

    function Ry(yb, bb) {
      const Wy = yb.getUint16(bb.value, !0);
      return bb.value += oy, Wy
    }

    function vb(yb, bb) {
      const Wy = yb[bb.value];
      return bb.value += Py, Wy
    }

    function ib(yb, bb) {
      let Wy;
      return Wy = "getBigInt64" in DataView.prototype ? Number(yb.getBigInt64(bb.value, !0)) : yb.getUint32(bb.value + 4, !0) + Number(yb.getUint32(bb.value, !0) << 32), bb.value += By, Wy
    }

    function My(yb, bb) {
      const Wy = yb.getFloat32(bb.value, !0);
      return bb.value += cb, Wy
    }

    function Yy(yb, bb) {
      return (0, fy.d)(Ry(yb, bb))
    }

    function Xy(yb, bb) {
      return (0, fy.k)((0, hy.Clamp)(My(yb, bb), -fy.g, fy.g))
    }

    function ny(yb, bb, Wy, Uy) {
      switch (Wy) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(yb, bb, Wy) {
            const Uy = (new TextDecoder).decode(new Uint8Array(yb).slice(bb.value, bb.value + Wy));
            return bb.value = bb.value + Wy, Uy
          }(yb.buffer, bb, Uy);
        case "chlist":
          return function(yb, bb, Wy) {
            const Uy = bb.value,
              hy = [];
            for (; bb.value < Uy + Wy - 1;) {
              const Wy = Jy(yb.buffer, bb),
                Uy = gb(yb, bb),
                fy = Oy(yb, bb);
              bb.value += 3;
              const Zy = gb(yb, bb),
                cb = gb(yb, bb);
              hy.push({
                name: Wy,
                pixelType: Uy,
                pLinear: fy,
                xSampling: Zy,
                ySampling: cb
              })
            }
            return bb.value += 1, hy
          }(yb, bb, Uy);
        case "chromaticities":
          return function(yb, bb) {
            return {
              redX: My(yb, bb),
              redY: My(yb, bb),
              greenX: My(yb, bb),
              greenY: My(yb, bb),
              blueX: My(yb, bb),
              blueY: My(yb, bb),
              whiteX: My(yb, bb),
              whiteY: My(yb, bb)
            }
          }(yb, bb);
        case "compression":
          return function(yb, bb) {
            return Oy(yb, bb)
          }(yb, bb);
        case "box2i":
          return function(yb, bb) {
            return {
              xMin: gb(yb, bb),
              yMin: gb(yb, bb),
              xMax: gb(yb, bb),
              yMax: gb(yb, bb)
            }
          }(yb, bb);
        case "lineOrder":
          return function(yb, bb) {
            const Wy = Oy(yb, bb);
            return Vy[Wy]
          }(yb, bb);
        case "float":
          return My(yb, bb);
        case "v2f":
          return function(yb, bb) {
            return [My(yb, bb), My(yb, bb)]
          }(yb, bb);
        case "v3f":
          return function(yb, bb) {
            return [My(yb, bb), My(yb, bb), My(yb, bb)]
          }(yb, bb);
        case "int":
          return gb(yb, bb);
        case "rational":
          return function(yb, bb) {
            return [gb(yb, bb), Gy(yb, bb)]
          }(yb, bb);
        case "timecode":
          return function(yb, bb) {
            return [Gy(yb, bb), Gy(yb, bb)]
          }(yb, bb);
        case "preview":
          return bb.value += Uy, "skipped";
        default:
          return void(bb.value += Uy)
      }
    }

    function uy(yb) {
      for (let bb = 1; bb < yb.length; bb++) {
        const Wy = yb[bb - 1] + yb[bb] - 128;
        yb[bb] = Wy
      }
    }

    function rb(yb, bb) {
      let Wy = 0,
        Uy = Math.floor((yb.length + 1) / 2),
        hy = 0;
      const fy = yb.length - 1;
      for (; !(hy > fy) && (bb[hy++] = yb[Wy++], !(hy > fy));) bb[hy++] = yb[Uy++]
    }! function(yb) {
      yb[yb.NO_COMPRESSION = 0] = "NO_COMPRESSION", yb[yb.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", yb[yb.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", yb[yb.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", yb[yb.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", yb[yb.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(Ty || (Ty = {})),
    function(yb) {
      yb[yb.INCREASING_Y = 0] = "INCREASING_Y", yb[yb.DECREASING_Y = 1] = "DECREASING_Y"
    }(Vy || (Vy = {}));
    const Hy = 20000630;

    function ab(yb, bb) {
      if (yb.getUint32(0, !0) != Hy) throw new Error("Incorrect OpenEXR format");
      const Wy = yb.getUint8(4),
        hy = yb.getUint8(5),
        fy = {
          singleTile: !!(2 & hy),
          longName: !!(4 & hy),
          deepFormat: !!(8 & hy),
          multiPart: !!(16 & hy)
        };
      bb.value = 8;
      const Zy = {};
      let cb = !0;
      for (; cb;) {
        const Wy = Jy(yb.buffer, bb);
        if (Wy) {
          const hy = Jy(yb.buffer, bb),
            fy = ny(yb, bb, hy, Gy(yb, bb));
          void 0 === fy ? Uy.b.Warn(`Unknown header attribute type ${hy}'.`) : Zy[Wy] = fy
        } else cb = !1
      }
      if (0 != (-5 & hy)) throw new Error("Unsupported file format");
      return {
        version: Wy,
        spec: fy,
        ...Zy
      }
    }
    const Fy = 32768,
      py = 65535;

    function Ly(yb, bb, Wy, Uy, hy) {
      for (; Wy < yb;) bb = bb << 8 | vb(Uy, hy), Wy += 8;
      return {
        l: bb >> (Wy -= yb) & (1 << yb) - 1,
        c: bb,
        lc: Wy
      }
    }

    function Qy(yb, bb, Wy, Uy) {
      return {
        c: yb = yb << 8 | vb(Wy, Uy),
        lc: bb += 8
      }
    }

    function jb(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py) {
      if (yb == bb) {
        if (Uy < 8) {
          const yb = Qy(Wy, Uy, hy, fy);
          Wy = yb.c, Uy = yb.lc
        }
        let yb = Wy >> (Uy -= 8);
        if (yb = new Uint8Array([yb])[0], cb.value + yb > Py) return null;
        const bb = Zy[cb.value - 1];
        for (; yb-- > 0;) Zy[cb.value++] = bb
      } else {
        if (!(cb.value < Py)) return null;
        Zy[cb.value++] = yb
      }
      return {
        c: Wy,
        lc: Uy
      }
    }
    const Dy = new Array(59);

    function tb(yb, bb, Wy, Uy, hy, fy) {
      const Zy = bb;
      let cb = 0,
        Py = 0;
      for (; Uy <= hy; Uy++) {
        if (Zy.value - bb.value > Wy) return;
        let oy = Ly(6, cb, Py, yb, Zy);
        const By = oy.l;
        if (cb = oy.c, Py = oy.lc, fy[Uy] = By, By == mb) {
          if (Zy.value - bb.value > Wy) throw new Error("Error in HufUnpackEncTable");
          oy = Ly(8, cb, Py, yb, Zy);
          let By = oy.l + Cy;
          if (cb = oy.c, Py = oy.lc, Uy + By > hy + 1) throw new Error("Error in HufUnpackEncTable");
          for (; By--;) fy[Uy++] = 0;
          Uy--
        } else if (By >= ly) {
          let yb = By - ly + 2;
          if (Uy + yb > hy + 1) throw new Error("Error in HufUnpackEncTable");
          for (; yb--;) fy[Uy++] = 0;
          Uy--
        }
      }! function(yb) {
        for (let Wy = 0; Wy <= 58; ++Wy) Dy[Wy] = 0;
        for (let Wy = 0; Wy < sy; ++Wy) Dy[yb[Wy]] += 1;
        let bb = 0;
        for (let Wy = 58; Wy > 0; --Wy) {
          const yb = bb + Dy[Wy] >> 1;
          Dy[Wy] = bb, bb = yb
        }
        for (let Wy = 0; Wy < sy; ++Wy) {
          const bb = yb[Wy];
          bb > 0 && (yb[Wy] = bb | Dy[bb]++ << 6)
        }
      }(fy)
    }

    function wy(yb) {
      return 63 & yb
    }

    function kb(yb) {
      return yb >> 6
    }

    function Ny(yb, bb, Wy, Uy, hy, fy) {
      const Zy = Wy.value,
        cb = Gy(bb, Wy),
        Py = Gy(bb, Wy);
      Wy.value += 4;
      const oy = Gy(bb, Wy);
      if (Wy.value += 4, cb < 0 || cb >= sy || Py < 0 || Py >= sy) throw new Error("Wrong HUF_ENCSIZE");
      const By = new Array(sy),
        Ky = new Array(Sy);
      ! function(yb) {
        for (let bb = 0; bb < Sy; bb++) yb[bb] = {}, yb[bb].len = 0, yb[bb].lit = 0, yb[bb].p = null
      }(Ky);
      if (tb(yb, Wy, Uy - (Wy.value - Zy), cb, Py, By), oy > 8 * (Uy - (Wy.value - Zy))) throw new Error("Wrong hufUncompress");
      ! function(yb, bb, Wy, Uy) {
        for (; bb <= Wy; bb++) {
          const Wy = kb(yb[bb]),
            hy = wy(yb[bb]);
          if (Wy >> hy) throw new Error("Invalid table entry");
          if (hy > qb) {
            const yb = Uy[Wy >> hy - qb];
            if (yb.len) throw new Error("Invalid table entry");
            if (yb.lit++, yb.p) {
              const bb = yb.p;
              yb.p = new Array(yb.lit);
              for (let Wy = 0; Wy < yb.lit - 1; ++Wy) yb.p[Wy] = bb[Wy]
            } else yb.p = new Array(1);
            yb.p[yb.lit - 1] = bb
          } else if (hy) {
            let yb = 0;
            for (let fy = 1 << qb - hy; fy > 0; fy--) {
              const fy = Uy[(Wy << qb - hy) + yb];
              if (fy.len || fy.p) throw new Error("Invalid table entry");
              fy.len = hy, fy.lit = bb, yb++
            }
          }
        }
      }(By, cb, Py, Ky),
      function(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py) {
        let oy = 0,
          By = 0;
        const Ky = Zy,
          ey = Math.trunc(Uy.value + (hy + 7) / 8);
        for (; Uy.value < ey;) {
          let hy = Qy(oy, By, Wy, Uy);
          for (oy = hy.c, By = hy.lc; By >= qb;) {
            const Zy = bb[oy >> By - qb & Ey];
            if (Zy.len) {
              By -= Zy.len;
              const yb = jb(Zy.lit, fy, oy, By, Wy, Uy, cb, Py, Ky);
              yb && (oy = yb.c, By = yb.lc)
            } else {
              if (!Zy.p) throw new Error("hufDecode issues");
              let bb;
              for (bb = 0; bb < Zy.lit; bb++) {
                const qb = wy(yb[Zy.p[bb]]);
                for (; By < qb && Uy.value < ey;) hy = Qy(oy, By, Wy, Uy), oy = hy.c, By = hy.lc;
                if (By >= qb && kb(yb[Zy.p[bb]]) == (oy >> By - qb & (1 << qb) - 1)) {
                  By -= qb;
                  const yb = jb(Zy.p[bb], fy, oy, By, Wy, Uy, cb, Py, Ky);
                  yb && (oy = yb.c, By = yb.lc);
                  break
                }
              }
              if (bb == Zy.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const sy = 8 - hy & 7;
        for (oy >>= sy, By -= sy; By > 0;) {
          const yb = bb[oy << qb - By & Ey];
          if (!yb.len) throw new Error("HufDecode issues");
          {
            By -= yb.len;
            const bb = jb(yb.lit, fy, oy, By, Wy, Uy, cb, Py, Ky);
            bb && (oy = bb.c, By = bb.lc)
          }
        }
      }(By, Ky, yb, Wy, oy, Py, fy, hy, {
        value: 0
      })
    }

    function zb(yb) {
      return 65535 & yb
    }

    function Iy(yb) {
      const bb = zb(yb);
      return bb > 32767 ? bb - 65536 : bb
    }

    function xb(yb, bb) {
      const Wy = Iy(yb),
        Uy = Iy(bb),
        hy = Wy + (1 & Uy) + (Uy >> 1);
      return {
        a: hy,
        b: hy - Uy
      }
    }

    function Ay(yb, bb) {
      const Wy = zb(yb),
        Uy = zb(bb),
        hy = Wy - (Uy >> 1) & py;
      return {
        a: Uy + hy - Fy & py,
        b: hy
      }
    }

    function dy(yb, bb, Wy, Uy, hy, fy, Zy) {
      const cb = Zy < 16384,
        Py = Wy > hy ? hy : Wy;
      let oy, By, Ky = 1;
      for (; Ky <= Py;) Ky <<= 1;
      for (Ky >>= 1, oy = Ky, Ky >>= 1; Ky >= 1;) {
        By = 0;
        const Zy = By + fy * (hy - oy),
          Py = fy * Ky,
          ey = fy * oy,
          qb = Uy * Ky,
          sy = Uy * oy;
        let Sy, Ey, ly, mb;
        for (; By <= Zy; By += ey) {
          let hy = By;
          const fy = By + Uy * (Wy - oy);
          for (; hy <= fy; hy += sy) {
            const Wy = hy + qb,
              Uy = hy + Py,
              fy = Uy + qb;
            if (cb) {
              let Zy = xb(yb[hy + bb], yb[Uy + bb]);
              Sy = Zy.a, ly = Zy.b, Zy = xb(yb[Wy + bb], yb[fy + bb]), Ey = Zy.a, mb = Zy.b, Zy = xb(Sy, Ey), yb[hy + bb] = Zy.a, yb[Wy + bb] = Zy.b, Zy = xb(ly, mb), yb[Uy + bb] = Zy.a, yb[fy + bb] = Zy.b
            } else {
              let Zy = Ay(yb[hy + bb], yb[Uy + bb]);
              Sy = Zy.a, ly = Zy.b, Zy = Ay(yb[Wy + bb], yb[fy + bb]), Ey = Zy.a, mb = Zy.b, Zy = Ay(Sy, Ey), yb[hy + bb] = Zy.a, yb[Wy + bb] = Zy.b, Zy = Ay(ly, mb), yb[Uy + bb] = Zy.a, yb[fy + bb] = Zy.b
            }
          }
          if (Wy & Ky) {
            const Wy = hy + Py;
            let Uy;
            Uy = cb ? xb(yb[hy + bb], yb[Wy + bb]) : Ay(yb[hy + bb], yb[Wy + bb]), Sy = Uy.a, yb[Wy + bb] = Uy.b, yb[hy + bb] = Sy
          }
        }
        if (hy & Ky) {
          let hy = By;
          const fy = By + Uy * (Wy - oy);
          for (; hy <= fy; hy += sy) {
            const Wy = hy + qb;
            let Uy;
            Uy = cb ? xb(yb[hy + bb], yb[Wy + bb]) : Ay(yb[hy + bb], yb[Wy + bb]), Sy = Uy.a, yb[Wy + bb] = Uy.b, yb[hy + bb] = Sy
          }
        }
        oy = Ky, Ky >>= 1
      }
      return By
    }

    function yW(yb) {
      return new DataView(yb.array.buffer, yb.offset.value, yb.size)
    }

    function bW(yb) {
      const bb = yb.viewer.buffer.slice(yb.offset.value, yb.offset.value + yb.size),
        Wy = new Uint8Array(function(yb) {
          let bb = yb.byteLength;
          const Wy = [];
          let Uy = 0;
          const hy = new DataView(yb);
          for (; bb > 0;) {
            const yb = hy.getInt8(Uy++);
            if (yb < 0) {
              const fy = -yb;
              bb -= fy + 1;
              for (let yb = 0; yb < fy; yb++) Wy.push(hy.getUint8(Uy++))
            } else {
              const fy = yb;
              bb -= 2;
              const Zy = hy.getUint8(Uy++);
              for (let yb = 0; yb < fy + 1; yb++) Wy.push(Zy)
            }
          }
          return Wy
        }(bb)),
        Uy = new Uint8Array(Wy.length);
      return uy(Wy), rb(Wy, Uy), new DataView(Uy.buffer)
    }

    function Wb(yb) {
      const bb = yb.array.slice(yb.offset.value, yb.offset.value + yb.size),
        Wy = fflate.unzlibSync(bb),
        Uy = new Uint8Array(Wy.length);
      return uy(Wy), rb(Wy, Uy), new DataView(Uy.buffer)
    }

    function Ub(yb) {
      const bb = yb.array.slice(yb.offset.value, yb.offset.value + yb.size),
        Wy = fflate.unzlibSync(bb),
        Uy = yb.lines * yb.channels * yb.width,
        hy = 1 == yb.type ? new Uint16Array(Uy) : new Uint32Array(Uy);
      let fy = 0,
        Zy = 0;
      const cb = new Array(4);
      for (let Py = 0; Py < yb.lines; Py++)
        for (let bb = 0; bb < yb.channels; bb++) {
          let bb = 0;
          switch (yb.type) {
            case 1:
              cb[0] = fy, cb[1] = cb[0] + yb.width, fy = cb[1] + yb.width;
              for (let Uy = 0; Uy < yb.width; ++Uy) {
                bb += Wy[cb[0]++] << 8 | Wy[cb[1]++], hy[Zy] = bb, Zy++
              }
              break;
            case 2:
              cb[0] = fy, cb[1] = cb[0] + yb.width, cb[2] = cb[1] + yb.width, fy = cb[2] + yb.width;
              for (let Uy = 0; Uy < yb.width; ++Uy) {
                bb += Wy[cb[0]++] << 24 | Wy[cb[1]++] << 16 | Wy[cb[2]++] << 8, hy[Zy] = bb, Zy++
              }
          }
        }
      return new DataView(hy.buffer)
    }

    function hb(yb) {
      const bb = yb.viewer,
        Wy = {
          value: yb.offset.value
        },
        Uy = new Uint16Array(yb.width * yb.scanlineBlockSize * (yb.channels * yb.type)),
        hy = new Uint8Array(ey);
      let fy = 0;
      const Zy = new Array(yb.channels);
      for (let oy = 0; oy < yb.channels; oy++) Zy[oy] = {}, Zy[oy].start = fy, Zy[oy].end = Zy[oy].start, Zy[oy].nx = yb.width, Zy[oy].ny = yb.lines, Zy[oy].size = yb.type, fy += Zy[oy].nx * Zy[oy].ny * Zy[oy].size;
      const cb = Ry(bb, Wy),
        Py = Ry(bb, Wy);
      if (Py >= ey) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (cb <= Py)
        for (let oy = 0; oy < Py - cb + 1; oy++) hy[oy + cb] = Oy(bb, Wy);
      const By = new Uint16Array(Ky),
        qb = function(yb, bb) {
          let Wy = 0;
          for (let hy = 0; hy < Ky; ++hy)(0 == hy || yb[hy >> 3] & 1 << (7 & hy)) && (bb[Wy++] = hy);
          const Uy = Wy - 1;
          for (; Wy < Ky;) bb[Wy++] = 0;
          return Uy
        }(hy, By),
        sy = Gy(bb, Wy);
      Ny(yb.array, bb, Wy, sy, Uy, fy);
      for (let oy = 0; oy < yb.channels; ++oy) {
        const yb = Zy[oy];
        for (let bb = 0; bb < Zy[oy].size; ++bb) dy(Uy, yb.start + bb, yb.nx, yb.size, yb.ny, yb.nx * yb.size, qb)
      }! function(yb, bb, Wy) {
        for (let Uy = 0; Uy < Wy; ++Uy) bb[Uy] = yb[bb[Uy]]
      }(By, Uy, fy);
      let Sy = 0;
      const Ey = new Uint8Array(Uy.buffer.byteLength);
      for (let Ky = 0; Ky < yb.lines; Ky++)
        for (let bb = 0; bb < yb.channels; bb++) {
          const yb = Zy[bb],
            Wy = yb.nx * yb.size,
            hy = new Uint8Array(Uy.buffer, yb.end * oy, Wy * oy);
          Ey.set(hy, Sy), Sy += Wy * oy, yb.end += Wy
        }
      return new DataView(Ey.buffer)
    }
    var fb, Zb = Wy(38576);
    ! function(yb) {
      yb[yb.Float = 0] = "Float", yb[yb.HalfFloat = 1] = "HalfFloat"
    }(fb || (fb = {}));
    class cW {}
    async function Pb(yb, bb, Wy, Uy) {
      const hy = {
        size: 0,
        viewer: bb,
        array: new Uint8Array(bb.buffer),
        offset: Wy,
        width: yb.dataWindow.xMax - yb.dataWindow.xMin + 1,
        height: yb.dataWindow.yMax - yb.dataWindow.yMin + 1,
        channels: yb.channels.length,
        channelLineOffsets: {},
        scanOrder: () => 0,
        bytesPerLine: 0,
        outLineWidth: 0,
        lines: 0,
        scanlineBlockSize: 0,
        inputSize: null,
        type: 0,
        uncompress: null,
        getter: () => 0,
        format: 5,
        outputChannels: 0,
        decodeChannels: {},
        blockCount: null,
        byteArray: null,
        linearSpace: !1,
        textureType: 0
      };
      switch (yb.compression) {
        case Ty.NO_COMPRESSION:
          hy.lines = 1, hy.uncompress = yW;
          break;
        case Ty.RLE_COMPRESSION:
          hy.lines = 1, hy.uncompress = bW;
          break;
        case Ty.ZIPS_COMPRESSION:
          hy.lines = 1, hy.uncompress = Wb, await Zb.k.LoadScriptAsync(cW.FFLATEUrl);
          break;
        case Ty.ZIP_COMPRESSION:
          hy.lines = 16, hy.uncompress = Wb, await Zb.k.LoadScriptAsync(cW.FFLATEUrl);
          break;
        case Ty.PIZ_COMPRESSION:
          hy.lines = 32, hy.uncompress = hb;
          break;
        case Ty.PXR24_COMPRESSION:
          hy.lines = 16, hy.uncompress = Ub, await Zb.k.LoadScriptAsync(cW.FFLATEUrl);
          break;
        default:
          throw new Error(Ty[yb.compression] + " is unsupported")
      }
      hy.scanlineBlockSize = hy.lines;
      const fy = {};
      for (const cb of yb.channels) switch (cb.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          fy[cb.name] = !0, hy.type = cb.pixelType
      }
      let Zy = !1;
      if (fy.R && fy.G && fy.B && fy.A) hy.outputChannels = 4, hy.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (fy.R && fy.G && fy.B) Zy = !0, hy.outputChannels = 4, hy.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (fy.R && fy.G) hy.outputChannels = 2, hy.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (fy.R) hy.outputChannels = 1, hy.decodeChannels = {
        R: 0
      };
      else {
        if (!fy.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        hy.outputChannels = 1, hy.decodeChannels = {
          Y: 0
        }
      }
      if (1 === hy.type) switch (Uy) {
        case fb.Float:
          hy.getter = Yy, hy.inputSize = oy;
          break;
        case fb.HalfFloat:
          hy.getter = Ry, hy.inputSize = oy
      } else {
        if (2 !== hy.type) throw new Error("Unsupported pixelType " + hy.type + " for " + yb.compression);
        switch (Uy) {
          case fb.Float:
            hy.getter = My, hy.inputSize = cb;
            break;
          case fb.HalfFloat:
            hy.getter = Xy, hy.inputSize = cb
        }
      }
      hy.blockCount = hy.height / hy.scanlineBlockSize;
      for (let cb = 0; cb < hy.blockCount; cb++) ib(bb, Wy);
      const Py = hy.width * hy.height * hy.outputChannels;
      switch (Uy) {
        case fb.Float:
          hy.byteArray = new Float32Array(Py), hy.textureType = 1, Zy && hy.byteArray.fill(1, 0, Py);
          break;
        case fb.HalfFloat:
          hy.byteArray = new Uint16Array(Py), hy.textureType = 2, Zy && hy.byteArray.fill(15360, 0, Py);
          break;
        default:
          throw new Error("Unsupported type: " + Uy)
      }
      let By = 0;
      for (const cb of yb.channels) void 0 !== hy.decodeChannels[cb.name] && (hy.channelLineOffsets[cb.name] = By * hy.width), By += 2 * cb.pixelType;
      return hy.bytesPerLine = hy.width * By, hy.outLineWidth = hy.width * hy.outputChannels, "INCREASING_Y" === yb.lineOrder ? hy.scanOrder = yb => yb : hy.scanOrder = yb => hy.height - 1 - yb, 4 == hy.outputChannels ? (hy.format = 5, hy.linearSpace = !0) : (hy.format = 6, hy.linearSpace = !1), hy
    }

    function ob(yb, bb, Wy, Uy) {
      const hy = {
        value: 0
      };
      for (let fy = 0; fy < yb.height / yb.scanlineBlockSize; fy++) {
        const Zy = gb(Wy, Uy) - bb.dataWindow.yMin;
        yb.size = Gy(Wy, Uy), yb.lines = Zy + yb.scanlineBlockSize > yb.height ? yb.height - Zy : yb.scanlineBlockSize;
        const cb = yb.size < yb.lines * yb.bytesPerLine && yb.uncompress ? yb.uncompress(yb) : yW(yb);
        Uy.value += yb.size;
        for (let Wy = 0; Wy < yb.scanlineBlockSize; Wy++) {
          const Uy = fy * yb.scanlineBlockSize,
            Zy = Wy + yb.scanOrder(Uy);
          if (Zy >= yb.height) continue;
          const Py = Wy * yb.bytesPerLine,
            oy = (yb.height - 1 - Zy) * yb.outLineWidth;
          for (let Wy = 0; Wy < yb.channels; Wy++) {
            const Uy = bb.channels[Wy].name,
              fy = yb.channelLineOffsets[Uy],
              Zy = yb.decodeChannels[Uy];
            if (void 0 !== Zy) {
              hy.value = Py + fy;
              for (let bb = 0; bb < yb.width; bb++) {
                const Wy = oy + bb * yb.outputChannels + Zy;
                yb.byteArray && (yb.byteArray[Wy] = yb.getter(cb, hy))
              }
            }
          }
        }
      }
    }
    cW.DefaultOutputType = fb.HalfFloat, cW.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class Bb {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(yb, bb, Wy, Uy, hy) {
        throw ".exr not supported in Cube."
      }
      loadData(yb, bb, Wy) {
        const hy = new DataView(yb.buffer),
          fy = {
            value: 0
          },
          Zy = ab(hy, fy);
        Pb(Zy, hy, fy, cW.DefaultOutputType).then((yb => {
          ob(yb, Zy, hy, fy);
          const Uy = Zy.dataWindow.xMax - Zy.dataWindow.xMin + 1,
            cb = Zy.dataWindow.yMax - Zy.dataWindow.yMin + 1;
          Wy(Uy, cb, bb.generateMipMaps, !1, (() => {
            const Wy = bb.xh();
            bb.format = Zy.format, bb.type = yb.textureType, bb.invertY = !1, bb._gammaSpace = !Zy.linearSpace, yb.byteArray && Wy._uploadDataToTextureDirectly(bb, yb.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((yb => {
          Uy.b.Error("Failed to load EXR texture: ", yb)
        }))
      }
    }
    async function Kb(yb) {
      const bb = new DataView(yb),
        Wy = {
          value: 0
        },
        hy = ab(bb, Wy);
      try {
        const yb = await Pb(hy, bb, Wy, fb.Float);
        return ob(yb, hy, bb, Wy), yb.byteArray ? {
          width: hy.dataWindow.xMax - hy.dataWindow.xMin + 1,
          height: hy.dataWindow.yMax - hy.dataWindow.yMin + 1,
          data: new Float32Array(yb.byteArray)
        } : (Uy.b.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (fy) {
        Uy.b.Error("Failed to load EXR data: ", fy)
      }
      return {
        width: 0,
        height: 0,
        data: null
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);