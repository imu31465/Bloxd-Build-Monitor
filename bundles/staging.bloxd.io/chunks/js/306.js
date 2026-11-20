export const id = 306;
export const ids = [306];
export const modules = {
  41299: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      ReadExrDataAsync: () => Hu,
      _ExrTextureLoader: () => au
    });
    var Bb = hb(38302),
      Ob = hb(36757),
      Gb = hb(39536);
    const Ub = 4,
      Lb = 4,
      Yb = 1,
      Sb = 2,
      ab = 8,
      Hb = 65536,
      wb = Hb >> 3,
      Zb = 14,
      Xb = 65537,
      pb = 1 << Zb,
      ob = pb - 1,
      Ab = 59,
      lb = 63,
      Kb = 2 + lb - Ab;
    var Wb, Cb;

    function db(bb, ub) {
      const hb = new Uint8Array(bb);
      let Bb = 0;
      for (; 0 != hb[ub.value + Bb];) Bb += 1;
      const Ob = (new TextDecoder).decode(hb.slice(ub.value, ub.value + Bb));
      return ub.value = ub.value + Bb + 1, Ob
    }

    function rb(bb, ub) {
      const hb = bb.getInt32(ub.value, !0);
      return ub.value += Ub, hb
    }

    function jb(bb, ub) {
      const hb = bb.getUint32(ub.value, !0);
      return ub.value += Ub, hb
    }

    function nb(bb, ub) {
      const hb = bb.getUint8(ub.value);
      return ub.value += Yb, hb
    }

    function Db(bb, ub) {
      const hb = bb.getUint16(ub.value, !0);
      return ub.value += Sb, hb
    }

    function xb(bb, ub) {
      const hb = bb[ub.value];
      return ub.value += Yb, hb
    }

    function zb(bb, ub) {
      let hb;
      return hb = "getBigInt64" in DataView.prototype ? Number(bb.getBigInt64(ub.value, !0)) : bb.getUint32(ub.value + 4, !0) + Number(bb.getUint32(ub.value, !0) << 32), ub.value += ab, hb
    }

    function gb(bb, ub) {
      const hb = bb.getFloat32(ub.value, !0);
      return ub.value += Lb, hb
    }

    function ib(bb, ub) {
      return (0, Gb.b)(Db(bb, ub))
    }

    function vb(bb, ub) {
      return (0, Gb.i)((0, Ob.Clamp)(gb(bb, ub), -Gb.e, Gb.e))
    }

    function tb(bb, ub, hb, Bb) {
      switch (hb) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(bb, ub, hb) {
            const Bb = (new TextDecoder).decode(new Uint8Array(bb).slice(ub.value, ub.value + hb));
            return ub.value = ub.value + hb, Bb
          }(bb.buffer, ub, Bb);
        case "chlist":
          return function(bb, ub, hb) {
            const Bb = ub.value,
              Ob = [];
            for (; ub.value < Bb + hb - 1;) {
              const hb = db(bb.buffer, ub),
                Bb = rb(bb, ub),
                Gb = nb(bb, ub);
              ub.value += 3;
              const Ub = rb(bb, ub),
                Lb = rb(bb, ub);
              Ob.push({
                name: hb,
                pixelType: Bb,
                pLinear: Gb,
                xSampling: Ub,
                ySampling: Lb
              })
            }
            return ub.value += 1, Ob
          }(bb, ub, Bb);
        case "chromaticities":
          return function(bb, ub) {
            return {
              redX: gb(bb, ub),
              redY: gb(bb, ub),
              greenX: gb(bb, ub),
              greenY: gb(bb, ub),
              blueX: gb(bb, ub),
              blueY: gb(bb, ub),
              whiteX: gb(bb, ub),
              whiteY: gb(bb, ub)
            }
          }(bb, ub);
        case "compression":
          return function(bb, ub) {
            return nb(bb, ub)
          }(bb, ub);
        case "box2i":
          return function(bb, ub) {
            return {
              xMin: rb(bb, ub),
              yMin: rb(bb, ub),
              xMax: rb(bb, ub),
              yMax: rb(bb, ub)
            }
          }(bb, ub);
        case "lineOrder":
          return function(bb, ub) {
            const hb = nb(bb, ub);
            return Cb[hb]
          }(bb, ub);
        case "float":
          return gb(bb, ub);
        case "v2f":
          return function(bb, ub) {
            return [gb(bb, ub), gb(bb, ub)]
          }(bb, ub);
        case "v3f":
          return function(bb, ub) {
            return [gb(bb, ub), gb(bb, ub), gb(bb, ub)]
          }(bb, ub);
        case "int":
          return rb(bb, ub);
        case "rational":
          return function(bb, ub) {
            return [rb(bb, ub), jb(bb, ub)]
          }(bb, ub);
        case "timecode":
          return function(bb, ub) {
            return [jb(bb, ub), jb(bb, ub)]
          }(bb, ub);
        case "preview":
          return ub.value += Bb, "skipped";
        default:
          return void(ub.value += Bb)
      }
    }

    function Jb(bb) {
      for (let ub = 1; ub < bb.length; ub++) {
        const hb = bb[ub - 1] + bb[ub] - 128;
        bb[ub] = hb
      }
    }

    function eb(bb, ub) {
      let hb = 0,
        Bb = Math.floor((bb.length + 1) / 2),
        Ob = 0;
      const Gb = bb.length - 1;
      for (; !(Ob > Gb) && (ub[Ob++] = bb[hb++], !(Ob > Gb));) ub[Ob++] = bb[Bb++]
    }! function(bb) {
      bb[bb.NO_COMPRESSION = 0] = "NO_COMPRESSION", bb[bb.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", bb[bb.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", bb[bb.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", bb[bb.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", bb[bb.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(Wb || (Wb = {})),
    function(bb) {
      bb[bb.INCREASING_Y = 0] = "INCREASING_Y", bb[bb.DECREASING_Y = 1] = "DECREASING_Y"
    }(Cb || (Cb = {}));
    const Nb = 20000630;

    function sb(bb, ub) {
      if (bb.getUint32(0, !0) != Nb) throw new Error("Incorrect OpenEXR format");
      const hb = bb.getUint8(4),
        Ob = bb.getUint8(5),
        Gb = {
          singleTile: !!(2 & Ob),
          longName: !!(4 & Ob),
          deepFormat: !!(8 & Ob),
          multiPart: !!(16 & Ob)
        };
      ub.value = 8;
      const Ub = {};
      let Lb = !0;
      for (; Lb;) {
        const hb = db(bb.buffer, ub);
        if (hb) {
          const Ob = db(bb.buffer, ub),
            Gb = tb(bb, ub, Ob, jb(bb, ub));
          void 0 === Gb ? Bb.b.Warn(`Unknown header attribute type ${Ob}'.`) : Ub[hb] = Gb
        } else Lb = !1
      }
      if (0 != (-5 & Ob)) throw new Error("Unsupported file format");
      return {
        version: hb,
        spec: Gb,
        ...Ub
      }
    }
    const Mb = 32768,
      mb = 65535;

    function Ib(bb, ub, hb, Bb, Ob) {
      for (; hb < bb;) ub = ub << 8 | xb(Bb, Ob), hb += 8;
      return {
        l: ub >> (hb -= bb) & (1 << bb) - 1,
        c: ub,
        lc: hb
      }
    }

    function Pb(bb, ub, hb, Bb) {
      return {
        c: bb = bb << 8 | xb(hb, Bb),
        lc: ub += 8
      }
    }

    function qb(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb) {
      if (bb == ub) {
        if (Bb < 8) {
          const bb = Pb(hb, Bb, Ob, Gb);
          hb = bb.c, Bb = bb.lc
        }
        let bb = hb >> (Bb -= 8);
        if (bb = new Uint8Array([bb])[0], Lb.value + bb > Yb) return null;
        const ub = Ub[Lb.value - 1];
        for (; bb-- > 0;) Ub[Lb.value++] = ub
      } else {
        if (!(Lb.value < Yb)) return null;
        Ub[Lb.value++] = bb
      }
      return {
        c: hb,
        lc: Bb
      }
    }
    const Eb = new Array(59);

    function yb(bb, ub, hb, Bb, Ob, Gb) {
      const Ub = ub;
      let Lb = 0,
        Yb = 0;
      for (; Bb <= Ob; Bb++) {
        if (Ub.value - ub.value > hb) return;
        let Sb = Ib(6, Lb, Yb, bb, Ub);
        const ab = Sb.l;
        if (Lb = Sb.c, Yb = Sb.lc, Gb[Bb] = ab, ab == lb) {
          if (Ub.value - ub.value > hb) throw new Error("Error in HufUnpackEncTable");
          Sb = Ib(8, Lb, Yb, bb, Ub);
          let ab = Sb.l + Kb;
          if (Lb = Sb.c, Yb = Sb.lc, Bb + ab > Ob + 1) throw new Error("Error in HufUnpackEncTable");
          for (; ab--;) Gb[Bb++] = 0;
          Bb--
        } else if (ab >= Ab) {
          let bb = ab - Ab + 2;
          if (Bb + bb > Ob + 1) throw new Error("Error in HufUnpackEncTable");
          for (; bb--;) Gb[Bb++] = 0;
          Bb--
        }
      }! function(bb) {
        for (let hb = 0; hb <= 58; ++hb) Eb[hb] = 0;
        for (let hb = 0; hb < Xb; ++hb) Eb[bb[hb]] += 1;
        let ub = 0;
        for (let hb = 58; hb > 0; --hb) {
          const bb = ub + Eb[hb] >> 1;
          Eb[hb] = ub, ub = bb
        }
        for (let hb = 0; hb < Xb; ++hb) {
          const ub = bb[hb];
          ub > 0 && (bb[hb] = ub | Eb[ub]++ << 6)
        }
      }(Gb)
    }

    function Vb(bb) {
      return 63 & bb
    }

    function Fb(bb) {
      return bb >> 6
    }

    function fb(bb, ub, hb, Bb, Ob, Gb) {
      const Ub = hb.value,
        Lb = jb(ub, hb),
        Yb = jb(ub, hb);
      hb.value += 4;
      const Sb = jb(ub, hb);
      if (hb.value += 4, Lb < 0 || Lb >= Xb || Yb < 0 || Yb >= Xb) throw new Error("Wrong HUF_ENCSIZE");
      const ab = new Array(Xb),
        Hb = new Array(pb);
      ! function(bb) {
        for (let ub = 0; ub < pb; ub++) bb[ub] = {}, bb[ub].len = 0, bb[ub].lit = 0, bb[ub].p = null
      }(Hb);
      if (yb(bb, hb, Bb - (hb.value - Ub), Lb, Yb, ab), Sb > 8 * (Bb - (hb.value - Ub))) throw new Error("Wrong hufUncompress");
      ! function(bb, ub, hb, Bb) {
        for (; ub <= hb; ub++) {
          const hb = Fb(bb[ub]),
            Ob = Vb(bb[ub]);
          if (hb >> Ob) throw new Error("Invalid table entry");
          if (Ob > Zb) {
            const bb = Bb[hb >> Ob - Zb];
            if (bb.len) throw new Error("Invalid table entry");
            if (bb.lit++, bb.p) {
              const ub = bb.p;
              bb.p = new Array(bb.lit);
              for (let hb = 0; hb < bb.lit - 1; ++hb) bb.p[hb] = ub[hb]
            } else bb.p = new Array(1);
            bb.p[bb.lit - 1] = ub
          } else if (Ob) {
            let bb = 0;
            for (let Gb = 1 << Zb - Ob; Gb > 0; Gb--) {
              const Gb = Bb[(hb << Zb - Ob) + bb];
              if (Gb.len || Gb.p) throw new Error("Invalid table entry");
              Gb.len = Ob, Gb.lit = ub, bb++
            }
          }
        }
      }(ab, Lb, Yb, Hb),
      function(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb) {
        let Sb = 0,
          ab = 0;
        const Hb = Ub,
          wb = Math.trunc(Bb.value + (Ob + 7) / 8);
        for (; Bb.value < wb;) {
          let Ob = Pb(Sb, ab, hb, Bb);
          for (Sb = Ob.c, ab = Ob.lc; ab >= Zb;) {
            const Ub = ub[Sb >> ab - Zb & ob];
            if (Ub.len) {
              ab -= Ub.len;
              const bb = qb(Ub.lit, Gb, Sb, ab, hb, Bb, Lb, Yb, Hb);
              bb && (Sb = bb.c, ab = bb.lc)
            } else {
              if (!Ub.p) throw new Error("hufDecode issues");
              let ub;
              for (ub = 0; ub < Ub.lit; ub++) {
                const Zb = Vb(bb[Ub.p[ub]]);
                for (; ab < Zb && Bb.value < wb;) Ob = Pb(Sb, ab, hb, Bb), Sb = Ob.c, ab = Ob.lc;
                if (ab >= Zb && Fb(bb[Ub.p[ub]]) == (Sb >> ab - Zb & (1 << Zb) - 1)) {
                  ab -= Zb;
                  const bb = qb(Ub.p[ub], Gb, Sb, ab, hb, Bb, Lb, Yb, Hb);
                  bb && (Sb = bb.c, ab = bb.lc);
                  break
                }
              }
              if (ub == Ub.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const Xb = 8 - Ob & 7;
        for (Sb >>= Xb, ab -= Xb; ab > 0;) {
          const bb = ub[Sb << Zb - ab & ob];
          if (!bb.len) throw new Error("HufDecode issues");
          {
            ab -= bb.len;
            const ub = qb(bb.lit, Gb, Sb, ab, hb, Bb, Lb, Yb, Hb);
            ub && (Sb = ub.c, ab = ub.lc)
          }
        }
      }(ab, Hb, bb, hb, Sb, Yb, Gb, Ob, {
        value: 0
      })
    }

    function kb(bb) {
      return 65535 & bb
    }

    function Tb(bb) {
      const ub = kb(bb);
      return ub > 32767 ? ub - 65536 : ub
    }

    function cb(bb, ub) {
      const hb = Tb(bb),
        Bb = Tb(ub),
        Ob = hb + (1 & Bb) + (Bb >> 1);
      return {
        a: Ob,
        b: Ob - Bb
      }
    }

    function Qb(bb, ub) {
      const hb = kb(bb),
        Bb = kb(ub),
        Ob = hb - (Bb >> 1) & mb;
      return {
        a: Bb + Ob - Mb & mb,
        b: Ob
      }
    }

    function Rb(bb, ub, hb, Bb, Ob, Gb, Ub) {
      const Lb = Ub < 16384,
        Yb = hb > Ob ? Ob : hb;
      let Sb, ab, Hb = 1;
      for (; Hb <= Yb;) Hb <<= 1;
      for (Hb >>= 1, Sb = Hb, Hb >>= 1; Hb >= 1;) {
        ab = 0;
        const Ub = ab + Gb * (Ob - Sb),
          Yb = Gb * Hb,
          wb = Gb * Sb,
          Zb = Bb * Hb,
          Xb = Bb * Sb;
        let pb, ob, Ab, lb;
        for (; ab <= Ub; ab += wb) {
          let Ob = ab;
          const Gb = ab + Bb * (hb - Sb);
          for (; Ob <= Gb; Ob += Xb) {
            const hb = Ob + Zb,
              Bb = Ob + Yb,
              Gb = Bb + Zb;
            if (Lb) {
              let Ub = cb(bb[Ob + ub], bb[Bb + ub]);
              pb = Ub.a, Ab = Ub.b, Ub = cb(bb[hb + ub], bb[Gb + ub]), ob = Ub.a, lb = Ub.b, Ub = cb(pb, ob), bb[Ob + ub] = Ub.a, bb[hb + ub] = Ub.b, Ub = cb(Ab, lb), bb[Bb + ub] = Ub.a, bb[Gb + ub] = Ub.b
            } else {
              let Ub = Qb(bb[Ob + ub], bb[Bb + ub]);
              pb = Ub.a, Ab = Ub.b, Ub = Qb(bb[hb + ub], bb[Gb + ub]), ob = Ub.a, lb = Ub.b, Ub = Qb(pb, ob), bb[Ob + ub] = Ub.a, bb[hb + ub] = Ub.b, Ub = Qb(Ab, lb), bb[Bb + ub] = Ub.a, bb[Gb + ub] = Ub.b
            }
          }
          if (hb & Hb) {
            const hb = Ob + Yb;
            let Bb;
            Bb = Lb ? cb(bb[Ob + ub], bb[hb + ub]) : Qb(bb[Ob + ub], bb[hb + ub]), pb = Bb.a, bb[hb + ub] = Bb.b, bb[Ob + ub] = pb
          }
        }
        if (Ob & Hb) {
          let Ob = ab;
          const Gb = ab + Bb * (hb - Sb);
          for (; Ob <= Gb; Ob += Xb) {
            const hb = Ob + Zb;
            let Bb;
            Bb = Lb ? cb(bb[Ob + ub], bb[hb + ub]) : Qb(bb[Ob + ub], bb[hb + ub]), pb = Bb.a, bb[hb + ub] = Bb.b, bb[Ob + ub] = pb
          }
        }
        Sb = Hb, Hb >>= 1
      }
      return ab
    }

    function bu(bb) {
      return new DataView(bb.array.buffer, bb.offset.value, bb.size)
    }

    function uu(bb) {
      const ub = bb.viewer.buffer.slice(bb.offset.value, bb.offset.value + bb.size),
        hb = new Uint8Array(function(bb) {
          let ub = bb.byteLength;
          const hb = [];
          let Bb = 0;
          const Ob = new DataView(bb);
          for (; ub > 0;) {
            const bb = Ob.getInt8(Bb++);
            if (bb < 0) {
              const Gb = -bb;
              ub -= Gb + 1;
              for (let bb = 0; bb < Gb; bb++) hb.push(Ob.getUint8(Bb++))
            } else {
              const Gb = bb;
              ub -= 2;
              const Ub = Ob.getUint8(Bb++);
              for (let bb = 0; bb < Gb + 1; bb++) hb.push(Ub)
            }
          }
          return hb
        }(ub)),
        Bb = new Uint8Array(hb.length);
      return Jb(hb), eb(hb, Bb), new DataView(Bb.buffer)
    }

    function hu(bb) {
      const ub = bb.array.slice(bb.offset.value, bb.offset.value + bb.size),
        hb = fflate.unzlibSync(ub),
        Bb = new Uint8Array(hb.length);
      return Jb(hb), eb(hb, Bb), new DataView(Bb.buffer)
    }

    function Bu(bb) {
      const ub = bb.array.slice(bb.offset.value, bb.offset.value + bb.size),
        hb = fflate.unzlibSync(ub),
        Bb = bb.lines * bb.channels * bb.width,
        Ob = 1 == bb.type ? new Uint16Array(Bb) : new Uint32Array(Bb);
      let Gb = 0,
        Ub = 0;
      const Lb = new Array(4);
      for (let Yb = 0; Yb < bb.lines; Yb++)
        for (let ub = 0; ub < bb.channels; ub++) {
          let ub = 0;
          switch (bb.type) {
            case 1:
              Lb[0] = Gb, Lb[1] = Lb[0] + bb.width, Gb = Lb[1] + bb.width;
              for (let Bb = 0; Bb < bb.width; ++Bb) {
                ub += hb[Lb[0]++] << 8 | hb[Lb[1]++], Ob[Ub] = ub, Ub++
              }
              break;
            case 2:
              Lb[0] = Gb, Lb[1] = Lb[0] + bb.width, Lb[2] = Lb[1] + bb.width, Gb = Lb[2] + bb.width;
              for (let Bb = 0; Bb < bb.width; ++Bb) {
                ub += hb[Lb[0]++] << 24 | hb[Lb[1]++] << 16 | hb[Lb[2]++] << 8, Ob[Ub] = ub, Ub++
              }
          }
        }
      return new DataView(Ob.buffer)
    }

    function Ou(bb) {
      const ub = bb.viewer,
        hb = {
          value: bb.offset.value
        },
        Bb = new Uint16Array(bb.width * bb.scanlineBlockSize * (bb.channels * bb.type)),
        Ob = new Uint8Array(wb);
      let Gb = 0;
      const Ub = new Array(bb.channels);
      for (let Sb = 0; Sb < bb.channels; Sb++) Ub[Sb] = {}, Ub[Sb].start = Gb, Ub[Sb].end = Ub[Sb].start, Ub[Sb].nx = bb.width, Ub[Sb].ny = bb.lines, Ub[Sb].size = bb.type, Gb += Ub[Sb].nx * Ub[Sb].ny * Ub[Sb].size;
      const Lb = Db(ub, hb),
        Yb = Db(ub, hb);
      if (Yb >= wb) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (Lb <= Yb)
        for (let Sb = 0; Sb < Yb - Lb + 1; Sb++) Ob[Sb + Lb] = nb(ub, hb);
      const ab = new Uint16Array(Hb),
        Zb = function(bb, ub) {
          let hb = 0;
          for (let Ob = 0; Ob < Hb; ++Ob)(0 == Ob || bb[Ob >> 3] & 1 << (7 & Ob)) && (ub[hb++] = Ob);
          const Bb = hb - 1;
          for (; hb < Hb;) ub[hb++] = 0;
          return Bb
        }(Ob, ab),
        Xb = jb(ub, hb);
      fb(bb.array, ub, hb, Xb, Bb, Gb);
      for (let Sb = 0; Sb < bb.channels; ++Sb) {
        const bb = Ub[Sb];
        for (let ub = 0; ub < Ub[Sb].size; ++ub) Rb(Bb, bb.start + ub, bb.nx, bb.size, bb.ny, bb.nx * bb.size, Zb)
      }! function(bb, ub, hb) {
        for (let Bb = 0; Bb < hb; ++Bb) ub[Bb] = bb[ub[Bb]]
      }(ab, Bb, Gb);
      let pb = 0;
      const ob = new Uint8Array(Bb.buffer.byteLength);
      for (let Hb = 0; Hb < bb.lines; Hb++)
        for (let ub = 0; ub < bb.channels; ub++) {
          const bb = Ub[ub],
            hb = bb.nx * bb.size,
            Ob = new Uint8Array(Bb.buffer, bb.end * Sb, hb * Sb);
          ob.set(Ob, pb), pb += hb * Sb, bb.end += hb
        }
      return new DataView(ob.buffer)
    }
    var Gu, Uu = hb(39559);
    ! function(bb) {
      bb[bb.Float = 0] = "Float", bb[bb.HalfFloat = 1] = "HalfFloat"
    }(Gu || (Gu = {}));
    class Lu {}
    async function Yu(bb, ub, hb, Bb) {
      const Ob = {
        size: 0,
        viewer: ub,
        array: new Uint8Array(ub.buffer),
        offset: hb,
        width: bb.dataWindow.xMax - bb.dataWindow.xMin + 1,
        height: bb.dataWindow.yMax - bb.dataWindow.yMin + 1,
        channels: bb.channels.length,
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
      switch (bb.compression) {
        case Wb.NO_COMPRESSION:
          Ob.lines = 1, Ob.uncompress = bu;
          break;
        case Wb.RLE_COMPRESSION:
          Ob.lines = 1, Ob.uncompress = uu;
          break;
        case Wb.ZIPS_COMPRESSION:
          Ob.lines = 1, Ob.uncompress = hu, await Uu.k.LoadScriptAsync(Lu.FFLATEUrl);
          break;
        case Wb.ZIP_COMPRESSION:
          Ob.lines = 16, Ob.uncompress = hu, await Uu.k.LoadScriptAsync(Lu.FFLATEUrl);
          break;
        case Wb.PIZ_COMPRESSION:
          Ob.lines = 32, Ob.uncompress = Ou;
          break;
        case Wb.PXR24_COMPRESSION:
          Ob.lines = 16, Ob.uncompress = Bu, await Uu.k.LoadScriptAsync(Lu.FFLATEUrl);
          break;
        default:
          throw new Error(Wb[bb.compression] + " is unsupported")
      }
      Ob.scanlineBlockSize = Ob.lines;
      const Gb = {};
      for (const Lb of bb.channels) switch (Lb.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          Gb[Lb.name] = !0, Ob.type = Lb.pixelType
      }
      let Ub = !1;
      if (Gb.R && Gb.G && Gb.B && Gb.A) Ob.outputChannels = 4, Ob.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (Gb.R && Gb.G && Gb.B) Ub = !0, Ob.outputChannels = 4, Ob.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (Gb.R && Gb.G) Ob.outputChannels = 2, Ob.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (Gb.R) Ob.outputChannels = 1, Ob.decodeChannels = {
        R: 0
      };
      else {
        if (!Gb.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        Ob.outputChannels = 1, Ob.decodeChannels = {
          Y: 0
        }
      }
      if (1 === Ob.type) switch (Bb) {
        case Gu.Float:
          Ob.getter = ib, Ob.inputSize = Sb;
          break;
        case Gu.HalfFloat:
          Ob.getter = Db, Ob.inputSize = Sb
      } else {
        if (2 !== Ob.type) throw new Error("Unsupported pixelType " + Ob.type + " for " + bb.compression);
        switch (Bb) {
          case Gu.Float:
            Ob.getter = gb, Ob.inputSize = Lb;
            break;
          case Gu.HalfFloat:
            Ob.getter = vb, Ob.inputSize = Lb
        }
      }
      Ob.blockCount = Ob.height / Ob.scanlineBlockSize;
      for (let Lb = 0; Lb < Ob.blockCount; Lb++) zb(ub, hb);
      const Yb = Ob.width * Ob.height * Ob.outputChannels;
      switch (Bb) {
        case Gu.Float:
          Ob.byteArray = new Float32Array(Yb), Ob.textureType = 1, Ub && Ob.byteArray.fill(1, 0, Yb);
          break;
        case Gu.HalfFloat:
          Ob.byteArray = new Uint16Array(Yb), Ob.textureType = 2, Ub && Ob.byteArray.fill(15360, 0, Yb);
          break;
        default:
          throw new Error("Unsupported type: " + Bb)
      }
      let ab = 0;
      for (const Lb of bb.channels) void 0 !== Ob.decodeChannels[Lb.name] && (Ob.channelLineOffsets[Lb.name] = ab * Ob.width), ab += 2 * Lb.pixelType;
      return Ob.bytesPerLine = Ob.width * ab, Ob.outLineWidth = Ob.width * Ob.outputChannels, "INCREASING_Y" === bb.lineOrder ? Ob.scanOrder = bb => bb : Ob.scanOrder = bb => Ob.height - 1 - bb, 4 == Ob.outputChannels ? (Ob.format = 5, Ob.linearSpace = !0) : (Ob.format = 6, Ob.linearSpace = !1), Ob
    }

    function Su(bb, ub, hb, Bb) {
      const Ob = {
        value: 0
      };
      for (let Gb = 0; Gb < bb.height / bb.scanlineBlockSize; Gb++) {
        const Ub = rb(hb, Bb) - ub.dataWindow.yMin;
        bb.size = jb(hb, Bb), bb.lines = Ub + bb.scanlineBlockSize > bb.height ? bb.height - Ub : bb.scanlineBlockSize;
        const Lb = bb.size < bb.lines * bb.bytesPerLine && bb.uncompress ? bb.uncompress(bb) : bu(bb);
        Bb.value += bb.size;
        for (let hb = 0; hb < bb.scanlineBlockSize; hb++) {
          const Bb = Gb * bb.scanlineBlockSize,
            Ub = hb + bb.scanOrder(Bb);
          if (Ub >= bb.height) continue;
          const Yb = hb * bb.bytesPerLine,
            Sb = (bb.height - 1 - Ub) * bb.outLineWidth;
          for (let hb = 0; hb < bb.channels; hb++) {
            const Bb = ub.channels[hb].name,
              Gb = bb.channelLineOffsets[Bb],
              Ub = bb.decodeChannels[Bb];
            if (void 0 !== Ub) {
              Ob.value = Yb + Gb;
              for (let ub = 0; ub < bb.width; ub++) {
                const hb = Sb + ub * bb.outputChannels + Ub;
                bb.byteArray && (bb.byteArray[hb] = bb.getter(Lb, Ob))
              }
            }
          }
        }
      }
    }
    Lu.DefaultOutputType = Gu.HalfFloat, Lu.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class au {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(bb, ub, hb, Bb, Ob) {
        throw ".exr not supported in Cube."
      }
      loadData(bb, ub, hb) {
        const Ob = new DataView(bb.buffer),
          Gb = {
            value: 0
          },
          Ub = sb(Ob, Gb);
        Yu(Ub, Ob, Gb, Lu.DefaultOutputType).then((bb => {
          Su(bb, Ub, Ob, Gb);
          const Bb = Ub.dataWindow.xMax - Ub.dataWindow.xMin + 1,
            Lb = Ub.dataWindow.yMax - Ub.dataWindow.yMin + 1;
          hb(Bb, Lb, ub.generateMipMaps, !1, (() => {
            const hb = ub.UX();
            ub.format = Ub.format, ub.type = bb.textureType, ub.invertY = !1, ub._gammaSpace = !Ub.linearSpace, bb.byteArray && hb._uploadDataToTextureDirectly(ub, bb.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((bb => {
          Bb.b.Error("Failed to load EXR texture: ", bb)
        }))
      }
    }
    async function Hu(bb) {
      const ub = new DataView(bb),
        hb = {
          value: 0
        },
        Ob = sb(ub, hb);
      try {
        const bb = await Yu(Ob, ub, hb, Gu.Float);
        return Su(bb, Ob, ub, hb), bb.byteArray ? {
          width: Ob.dataWindow.xMax - Ob.dataWindow.xMin + 1,
          height: Ob.dataWindow.yMax - Ob.dataWindow.yMin + 1,
          data: new Float32Array(bb.byteArray)
        } : (Bb.b.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (Gb) {
        Bb.b.Error("Failed to load EXR data: ", Gb)
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
for (const bb in modules) Object.freeze(modules[bb]);