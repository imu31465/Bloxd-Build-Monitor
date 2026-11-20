export const id = 305;
export const ids = [305];
export const modules = {
  40961: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      ReadExrDataAsync: () => La,
      _ExrTextureLoader: () => va
    });
    var Ab = Ub(37989),
      Mb = Ub(36436),
      Tb = Ub(39169);
    const Eb = 4,
      Yb = 4,
      Bb = 1,
      eb = 2,
      vb = 8,
      Lb = 65536,
      Pb = Lb >> 3,
      Xb = 14,
      jb = 65537,
      Rb = 1 << Xb,
      kb = Rb - 1,
      yb = 59,
      Zb = 63,
      Db = 2 + Zb - yb;
    var zb, xb;

    function ib(bb, ab) {
      const Ub = new Uint8Array(bb);
      let Ab = 0;
      for (; 0 != Ub[ab.value + Ab];) Ab += 1;
      const Mb = (new TextDecoder).decode(Ub.slice(ab.value, ab.value + Ab));
      return ab.value = ab.value + Ab + 1, Mb
    }

    function fb(bb, ab) {
      const Ub = bb.getInt32(ab.value, !0);
      return ab.value += Eb, Ub
    }

    function mb(bb, ab) {
      const Ub = bb.getUint32(ab.value, !0);
      return ab.value += Eb, Ub
    }

    function pb(bb, ab) {
      const Ub = bb.getUint8(ab.value);
      return ab.value += Bb, Ub
    }

    function Nb(bb, ab) {
      const Ub = bb.getUint16(ab.value, !0);
      return ab.value += eb, Ub
    }

    function Wb(bb, ab) {
      const Ub = bb[ab.value];
      return ab.value += Bb, Ub
    }

    function Hb(bb, ab) {
      let Ub;
      return Ub = "getBigInt64" in DataView.prototype ? Number(bb.getBigInt64(ab.value, !0)) : bb.getUint32(ab.value + 4, !0) + Number(bb.getUint32(ab.value, !0) << 32), ab.value += vb, Ub
    }

    function Ib(bb, ab) {
      const Ub = bb.getFloat32(ab.value, !0);
      return ab.value += Yb, Ub
    }

    function db(bb, ab) {
      return (0, Tb.e)(Nb(bb, ab))
    }

    function Fb(bb, ab) {
      return (0, Tb.j)((0, Mb.Clamp)(Ib(bb, ab), -Tb.h, Tb.h))
    }

    function hb(bb, ab, Ub, Ab) {
      switch (Ub) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(bb, ab, Ub) {
            const Ab = (new TextDecoder).decode(new Uint8Array(bb).slice(ab.value, ab.value + Ub));
            return ab.value = ab.value + Ub, Ab
          }(bb.buffer, ab, Ab);
        case "chlist":
          return function(bb, ab, Ub) {
            const Ab = ab.value,
              Mb = [];
            for (; ab.value < Ab + Ub - 1;) {
              const Ub = ib(bb.buffer, ab),
                Ab = fb(bb, ab),
                Tb = pb(bb, ab);
              ab.value += 3;
              const Eb = fb(bb, ab),
                Yb = fb(bb, ab);
              Mb.push({
                name: Ub,
                pixelType: Ab,
                pLinear: Tb,
                xSampling: Eb,
                ySampling: Yb
              })
            }
            return ab.value += 1, Mb
          }(bb, ab, Ab);
        case "chromaticities":
          return function(bb, ab) {
            return {
              redX: Ib(bb, ab),
              redY: Ib(bb, ab),
              greenX: Ib(bb, ab),
              greenY: Ib(bb, ab),
              blueX: Ib(bb, ab),
              blueY: Ib(bb, ab),
              whiteX: Ib(bb, ab),
              whiteY: Ib(bb, ab)
            }
          }(bb, ab);
        case "compression":
          return function(bb, ab) {
            return pb(bb, ab)
          }(bb, ab);
        case "box2i":
          return function(bb, ab) {
            return {
              xMin: fb(bb, ab),
              yMin: fb(bb, ab),
              xMax: fb(bb, ab),
              yMax: fb(bb, ab)
            }
          }(bb, ab);
        case "lineOrder":
          return function(bb, ab) {
            const Ub = pb(bb, ab);
            return xb[Ub]
          }(bb, ab);
        case "float":
          return Ib(bb, ab);
        case "v2f":
          return function(bb, ab) {
            return [Ib(bb, ab), Ib(bb, ab)]
          }(bb, ab);
        case "v3f":
          return function(bb, ab) {
            return [Ib(bb, ab), Ib(bb, ab), Ib(bb, ab)]
          }(bb, ab);
        case "int":
          return fb(bb, ab);
        case "rational":
          return function(bb, ab) {
            return [fb(bb, ab), mb(bb, ab)]
          }(bb, ab);
        case "timecode":
          return function(bb, ab) {
            return [mb(bb, ab), mb(bb, ab)]
          }(bb, ab);
        case "preview":
          return ab.value += Ab, "skipped";
        default:
          return void(ab.value += Ab)
      }
    }

    function Gb(bb) {
      for (let ab = 1; ab < bb.length; ab++) {
        const Ub = bb[ab - 1] + bb[ab] - 128;
        bb[ab] = Ub
      }
    }

    function Qb(bb, ab) {
      let Ub = 0,
        Ab = Math.floor((bb.length + 1) / 2),
        Mb = 0;
      const Tb = bb.length - 1;
      for (; !(Mb > Tb) && (ab[Mb++] = bb[Ub++], !(Mb > Tb));) ab[Mb++] = bb[Ab++]
    }! function(bb) {
      bb[bb.NO_COMPRESSION = 0] = "NO_COMPRESSION", bb[bb.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", bb[bb.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", bb[bb.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", bb[bb.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", bb[bb.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(zb || (zb = {})),
    function(bb) {
      bb[bb.INCREASING_Y = 0] = "INCREASING_Y", bb[bb.DECREASING_Y = 1] = "DECREASING_Y"
    }(xb || (xb = {}));
    const qb = 20000630;

    function ub(bb, ab) {
      if (bb.getUint32(0, !0) != qb) throw new Error("Incorrect OpenEXR format");
      const Ub = bb.getUint8(4),
        Mb = bb.getUint8(5),
        Tb = {
          singleTile: !!(2 & Mb),
          longName: !!(4 & Mb),
          deepFormat: !!(8 & Mb),
          multiPart: !!(16 & Mb)
        };
      ab.value = 8;
      const Eb = {};
      let Yb = !0;
      for (; Yb;) {
        const Ub = ib(bb.buffer, ab);
        if (Ub) {
          const Mb = ib(bb.buffer, ab),
            Tb = hb(bb, ab, Mb, mb(bb, ab));
          void 0 === Tb ? Ab.e.Warn(`Unknown header attribute type ${Mb}'.`) : Eb[Ub] = Tb
        } else Yb = !1
      }
      if (0 != (-5 & Mb)) throw new Error("Unsupported file format");
      return {
        version: Ub,
        spec: Tb,
        ...Eb
      }
    }
    const rb = 32768,
      Kb = 65535;

    function ob(bb, ab, Ub, Ab, Mb) {
      for (; Ub < bb;) ab = ab << 8 | Wb(Ab, Mb), Ub += 8;
      return {
        l: ab >> (Ub -= bb) & (1 << bb) - 1,
        c: ab,
        lc: Ub
      }
    }

    function lb(bb, ab, Ub, Ab) {
      return {
        c: bb = bb << 8 | Wb(Ub, Ab),
        lc: ab += 8
      }
    }

    function tb(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb) {
      if (bb == ab) {
        if (Ab < 8) {
          const bb = lb(Ub, Ab, Mb, Tb);
          Ub = bb.c, Ab = bb.lc
        }
        let bb = Ub >> (Ab -= 8);
        if (bb = new Uint8Array([bb])[0], Yb.value + bb > Bb) return null;
        const ab = Eb[Yb.value - 1];
        for (; bb-- > 0;) Eb[Yb.value++] = ab
      } else {
        if (!(Yb.value < Bb)) return null;
        Eb[Yb.value++] = bb
      }
      return {
        c: Ub,
        lc: Ab
      }
    }
    const wb = new Array(59);

    function sb(bb, ab, Ub, Ab, Mb, Tb) {
      const Eb = ab;
      let Yb = 0,
        Bb = 0;
      for (; Ab <= Mb; Ab++) {
        if (Eb.value - ab.value > Ub) return;
        let eb = ob(6, Yb, Bb, bb, Eb);
        const vb = eb.l;
        if (Yb = eb.c, Bb = eb.lc, Tb[Ab] = vb, vb == Zb) {
          if (Eb.value - ab.value > Ub) throw new Error("Error in HufUnpackEncTable");
          eb = ob(8, Yb, Bb, bb, Eb);
          let vb = eb.l + Db;
          if (Yb = eb.c, Bb = eb.lc, Ab + vb > Mb + 1) throw new Error("Error in HufUnpackEncTable");
          for (; vb--;) Tb[Ab++] = 0;
          Ab--
        } else if (vb >= yb) {
          let bb = vb - yb + 2;
          if (Ab + bb > Mb + 1) throw new Error("Error in HufUnpackEncTable");
          for (; bb--;) Tb[Ab++] = 0;
          Ab--
        }
      }! function(bb) {
        for (let Ub = 0; Ub <= 58; ++Ub) wb[Ub] = 0;
        for (let Ub = 0; Ub < jb; ++Ub) wb[bb[Ub]] += 1;
        let ab = 0;
        for (let Ub = 58; Ub > 0; --Ub) {
          const bb = ab + wb[Ub] >> 1;
          wb[Ub] = ab, ab = bb
        }
        for (let Ub = 0; Ub < jb; ++Ub) {
          const ab = bb[Ub];
          ab > 0 && (bb[Ub] = ab | wb[ab]++ << 6)
        }
      }(Tb)
    }

    function gb(bb) {
      return 63 & bb
    }

    function Cb(bb) {
      return bb >> 6
    }

    function Vb(bb, ab, Ub, Ab, Mb, Tb) {
      const Eb = Ub.value,
        Yb = mb(ab, Ub),
        Bb = mb(ab, Ub);
      Ub.value += 4;
      const eb = mb(ab, Ub);
      if (Ub.value += 4, Yb < 0 || Yb >= jb || Bb < 0 || Bb >= jb) throw new Error("Wrong HUF_ENCSIZE");
      const vb = new Array(jb),
        Lb = new Array(Rb);
      ! function(bb) {
        for (let ab = 0; ab < Rb; ab++) bb[ab] = {}, bb[ab].len = 0, bb[ab].lit = 0, bb[ab].p = null
      }(Lb);
      if (sb(bb, Ub, Ab - (Ub.value - Eb), Yb, Bb, vb), eb > 8 * (Ab - (Ub.value - Eb))) throw new Error("Wrong hufUncompress");
      ! function(bb, ab, Ub, Ab) {
        for (; ab <= Ub; ab++) {
          const Ub = Cb(bb[ab]),
            Mb = gb(bb[ab]);
          if (Ub >> Mb) throw new Error("Invalid table entry");
          if (Mb > Xb) {
            const bb = Ab[Ub >> Mb - Xb];
            if (bb.len) throw new Error("Invalid table entry");
            if (bb.lit++, bb.p) {
              const ab = bb.p;
              bb.p = new Array(bb.lit);
              for (let Ub = 0; Ub < bb.lit - 1; ++Ub) bb.p[Ub] = ab[Ub]
            } else bb.p = new Array(1);
            bb.p[bb.lit - 1] = ab
          } else if (Mb) {
            let bb = 0;
            for (let Tb = 1 << Xb - Mb; Tb > 0; Tb--) {
              const Tb = Ab[(Ub << Xb - Mb) + bb];
              if (Tb.len || Tb.p) throw new Error("Invalid table entry");
              Tb.len = Mb, Tb.lit = ab, bb++
            }
          }
        }
      }(vb, Yb, Bb, Lb),
      function(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb) {
        let eb = 0,
          vb = 0;
        const Lb = Eb,
          Pb = Math.trunc(Ab.value + (Mb + 7) / 8);
        for (; Ab.value < Pb;) {
          let Mb = lb(eb, vb, Ub, Ab);
          for (eb = Mb.c, vb = Mb.lc; vb >= Xb;) {
            const Eb = ab[eb >> vb - Xb & kb];
            if (Eb.len) {
              vb -= Eb.len;
              const bb = tb(Eb.lit, Tb, eb, vb, Ub, Ab, Yb, Bb, Lb);
              bb && (eb = bb.c, vb = bb.lc)
            } else {
              if (!Eb.p) throw new Error("hufDecode issues");
              let ab;
              for (ab = 0; ab < Eb.lit; ab++) {
                const Xb = gb(bb[Eb.p[ab]]);
                for (; vb < Xb && Ab.value < Pb;) Mb = lb(eb, vb, Ub, Ab), eb = Mb.c, vb = Mb.lc;
                if (vb >= Xb && Cb(bb[Eb.p[ab]]) == (eb >> vb - Xb & (1 << Xb) - 1)) {
                  vb -= Xb;
                  const bb = tb(Eb.p[ab], Tb, eb, vb, Ub, Ab, Yb, Bb, Lb);
                  bb && (eb = bb.c, vb = bb.lc);
                  break
                }
              }
              if (ab == Eb.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const jb = 8 - Mb & 7;
        for (eb >>= jb, vb -= jb; vb > 0;) {
          const bb = ab[eb << Xb - vb & kb];
          if (!bb.len) throw new Error("HufDecode issues");
          {
            vb -= bb.len;
            const ab = tb(bb.lit, Tb, eb, vb, Ub, Ab, Yb, Bb, Lb);
            ab && (eb = ab.c, vb = ab.lc)
          }
        }
      }(vb, Lb, bb, Ub, eb, Bb, Tb, Mb, {
        value: 0
      })
    }

    function Ob(bb) {
      return 65535 & bb
    }

    function cb(bb) {
      const ab = Ob(bb);
      return ab > 32767 ? ab - 65536 : ab
    }

    function Jb(bb, ab) {
      const Ub = cb(bb),
        Ab = cb(ab),
        Mb = Ub + (1 & Ab) + (Ab >> 1);
      return {
        a: Mb,
        b: Mb - Ab
      }
    }

    function nb(bb, ab) {
      const Ub = Ob(bb),
        Ab = Ob(ab),
        Mb = Ub - (Ab >> 1) & Kb;
      return {
        a: Ab + Mb - rb & Kb,
        b: Mb
      }
    }

    function Sb(bb, ab, Ub, Ab, Mb, Tb, Eb) {
      const Yb = Eb < 16384,
        Bb = Ub > Mb ? Mb : Ub;
      let eb, vb, Lb = 1;
      for (; Lb <= Bb;) Lb <<= 1;
      for (Lb >>= 1, eb = Lb, Lb >>= 1; Lb >= 1;) {
        vb = 0;
        const Eb = vb + Tb * (Mb - eb),
          Bb = Tb * Lb,
          Pb = Tb * eb,
          Xb = Ab * Lb,
          jb = Ab * eb;
        let Rb, kb, yb, Zb;
        for (; vb <= Eb; vb += Pb) {
          let Mb = vb;
          const Tb = vb + Ab * (Ub - eb);
          for (; Mb <= Tb; Mb += jb) {
            const Ub = Mb + Xb,
              Ab = Mb + Bb,
              Tb = Ab + Xb;
            if (Yb) {
              let Eb = Jb(bb[Mb + ab], bb[Ab + ab]);
              Rb = Eb.a, yb = Eb.b, Eb = Jb(bb[Ub + ab], bb[Tb + ab]), kb = Eb.a, Zb = Eb.b, Eb = Jb(Rb, kb), bb[Mb + ab] = Eb.a, bb[Ub + ab] = Eb.b, Eb = Jb(yb, Zb), bb[Ab + ab] = Eb.a, bb[Tb + ab] = Eb.b
            } else {
              let Eb = nb(bb[Mb + ab], bb[Ab + ab]);
              Rb = Eb.a, yb = Eb.b, Eb = nb(bb[Ub + ab], bb[Tb + ab]), kb = Eb.a, Zb = Eb.b, Eb = nb(Rb, kb), bb[Mb + ab] = Eb.a, bb[Ub + ab] = Eb.b, Eb = nb(yb, Zb), bb[Ab + ab] = Eb.a, bb[Tb + ab] = Eb.b
            }
          }
          if (Ub & Lb) {
            const Ub = Mb + Bb;
            let Ab;
            Ab = Yb ? Jb(bb[Mb + ab], bb[Ub + ab]) : nb(bb[Mb + ab], bb[Ub + ab]), Rb = Ab.a, bb[Ub + ab] = Ab.b, bb[Mb + ab] = Rb
          }
        }
        if (Mb & Lb) {
          let Mb = vb;
          const Tb = vb + Ab * (Ub - eb);
          for (; Mb <= Tb; Mb += jb) {
            const Ub = Mb + Xb;
            let Ab;
            Ab = Yb ? Jb(bb[Mb + ab], bb[Ub + ab]) : nb(bb[Mb + ab], bb[Ub + ab]), Rb = Ab.a, bb[Ub + ab] = Ab.b, bb[Mb + ab] = Rb
          }
        }
        eb = Lb, Lb >>= 1
      }
      return vb
    }

    function ba(bb) {
      return new DataView(bb.array.buffer, bb.offset.value, bb.size)
    }

    function aa(bb) {
      const ab = bb.viewer.buffer.slice(bb.offset.value, bb.offset.value + bb.size),
        Ub = new Uint8Array(function(bb) {
          let ab = bb.byteLength;
          const Ub = [];
          let Ab = 0;
          const Mb = new DataView(bb);
          for (; ab > 0;) {
            const bb = Mb.getInt8(Ab++);
            if (bb < 0) {
              const Tb = -bb;
              ab -= Tb + 1;
              for (let bb = 0; bb < Tb; bb++) Ub.push(Mb.getUint8(Ab++))
            } else {
              const Tb = bb;
              ab -= 2;
              const Eb = Mb.getUint8(Ab++);
              for (let bb = 0; bb < Tb + 1; bb++) Ub.push(Eb)
            }
          }
          return Ub
        }(ab)),
        Ab = new Uint8Array(Ub.length);
      return Gb(Ub), Qb(Ub, Ab), new DataView(Ab.buffer)
    }

    function Ua(bb) {
      const ab = bb.array.slice(bb.offset.value, bb.offset.value + bb.size),
        Ub = fflate.unzlibSync(ab),
        Ab = new Uint8Array(Ub.length);
      return Gb(Ub), Qb(Ub, Ab), new DataView(Ab.buffer)
    }

    function Aa(bb) {
      const ab = bb.array.slice(bb.offset.value, bb.offset.value + bb.size),
        Ub = fflate.unzlibSync(ab),
        Ab = bb.lines * bb.channels * bb.width,
        Mb = 1 == bb.type ? new Uint16Array(Ab) : new Uint32Array(Ab);
      let Tb = 0,
        Eb = 0;
      const Yb = new Array(4);
      for (let Bb = 0; Bb < bb.lines; Bb++)
        for (let ab = 0; ab < bb.channels; ab++) {
          let ab = 0;
          switch (bb.type) {
            case 1:
              Yb[0] = Tb, Yb[1] = Yb[0] + bb.width, Tb = Yb[1] + bb.width;
              for (let Ab = 0; Ab < bb.width; ++Ab) {
                ab += Ub[Yb[0]++] << 8 | Ub[Yb[1]++], Mb[Eb] = ab, Eb++
              }
              break;
            case 2:
              Yb[0] = Tb, Yb[1] = Yb[0] + bb.width, Yb[2] = Yb[1] + bb.width, Tb = Yb[2] + bb.width;
              for (let Ab = 0; Ab < bb.width; ++Ab) {
                ab += Ub[Yb[0]++] << 24 | Ub[Yb[1]++] << 16 | Ub[Yb[2]++] << 8, Mb[Eb] = ab, Eb++
              }
          }
        }
      return new DataView(Mb.buffer)
    }

    function Ma(bb) {
      const ab = bb.viewer,
        Ub = {
          value: bb.offset.value
        },
        Ab = new Uint16Array(bb.width * bb.scanlineBlockSize * (bb.channels * bb.type)),
        Mb = new Uint8Array(Pb);
      let Tb = 0;
      const Eb = new Array(bb.channels);
      for (let eb = 0; eb < bb.channels; eb++) Eb[eb] = {}, Eb[eb].start = Tb, Eb[eb].end = Eb[eb].start, Eb[eb].nx = bb.width, Eb[eb].ny = bb.lines, Eb[eb].size = bb.type, Tb += Eb[eb].nx * Eb[eb].ny * Eb[eb].size;
      const Yb = Nb(ab, Ub),
        Bb = Nb(ab, Ub);
      if (Bb >= Pb) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (Yb <= Bb)
        for (let eb = 0; eb < Bb - Yb + 1; eb++) Mb[eb + Yb] = pb(ab, Ub);
      const vb = new Uint16Array(Lb),
        Xb = function(bb, ab) {
          let Ub = 0;
          for (let Mb = 0; Mb < Lb; ++Mb)(0 == Mb || bb[Mb >> 3] & 1 << (7 & Mb)) && (ab[Ub++] = Mb);
          const Ab = Ub - 1;
          for (; Ub < Lb;) ab[Ub++] = 0;
          return Ab
        }(Mb, vb),
        jb = mb(ab, Ub);
      Vb(bb.array, ab, Ub, jb, Ab, Tb);
      for (let eb = 0; eb < bb.channels; ++eb) {
        const bb = Eb[eb];
        for (let ab = 0; ab < Eb[eb].size; ++ab) Sb(Ab, bb.start + ab, bb.nx, bb.size, bb.ny, bb.nx * bb.size, Xb)
      }! function(bb, ab, Ub) {
        for (let Ab = 0; Ab < Ub; ++Ab) ab[Ab] = bb[ab[Ab]]
      }(vb, Ab, Tb);
      let Rb = 0;
      const kb = new Uint8Array(Ab.buffer.byteLength);
      for (let Lb = 0; Lb < bb.lines; Lb++)
        for (let ab = 0; ab < bb.channels; ab++) {
          const bb = Eb[ab],
            Ub = bb.nx * bb.size,
            Mb = new Uint8Array(Ab.buffer, bb.end * eb, Ub * eb);
          kb.set(Mb, Rb), Rb += Ub * eb, bb.end += Ub
        }
      return new DataView(kb.buffer)
    }
    var Ta, Ea = Ub(39195);
    ! function(bb) {
      bb[bb.Float = 0] = "Float", bb[bb.HalfFloat = 1] = "HalfFloat"
    }(Ta || (Ta = {}));
    class Ya {}
    async function Ba(bb, ab, Ub, Ab) {
      const Mb = {
        size: 0,
        viewer: ab,
        array: new Uint8Array(ab.buffer),
        offset: Ub,
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
        case zb.NO_COMPRESSION:
          Mb.lines = 1, Mb.uncompress = ba;
          break;
        case zb.RLE_COMPRESSION:
          Mb.lines = 1, Mb.uncompress = aa;
          break;
        case zb.ZIPS_COMPRESSION:
          Mb.lines = 1, Mb.uncompress = Ua, await Ea.h.LoadScriptAsync(Ya.FFLATEUrl);
          break;
        case zb.ZIP_COMPRESSION:
          Mb.lines = 16, Mb.uncompress = Ua, await Ea.h.LoadScriptAsync(Ya.FFLATEUrl);
          break;
        case zb.PIZ_COMPRESSION:
          Mb.lines = 32, Mb.uncompress = Ma;
          break;
        case zb.PXR24_COMPRESSION:
          Mb.lines = 16, Mb.uncompress = Aa, await Ea.h.LoadScriptAsync(Ya.FFLATEUrl);
          break;
        default:
          throw new Error(zb[bb.compression] + " is unsupported")
      }
      Mb.scanlineBlockSize = Mb.lines;
      const Tb = {};
      for (const Yb of bb.channels) switch (Yb.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          Tb[Yb.name] = !0, Mb.type = Yb.pixelType
      }
      let Eb = !1;
      if (Tb.R && Tb.G && Tb.B && Tb.A) Mb.outputChannels = 4, Mb.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (Tb.R && Tb.G && Tb.B) Eb = !0, Mb.outputChannels = 4, Mb.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (Tb.R && Tb.G) Mb.outputChannels = 2, Mb.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (Tb.R) Mb.outputChannels = 1, Mb.decodeChannels = {
        R: 0
      };
      else {
        if (!Tb.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        Mb.outputChannels = 1, Mb.decodeChannels = {
          Y: 0
        }
      }
      if (1 === Mb.type) switch (Ab) {
        case Ta.Float:
          Mb.getter = db, Mb.inputSize = eb;
          break;
        case Ta.HalfFloat:
          Mb.getter = Nb, Mb.inputSize = eb
      } else {
        if (2 !== Mb.type) throw new Error("Unsupported pixelType " + Mb.type + " for " + bb.compression);
        switch (Ab) {
          case Ta.Float:
            Mb.getter = Ib, Mb.inputSize = Yb;
            break;
          case Ta.HalfFloat:
            Mb.getter = Fb, Mb.inputSize = Yb
        }
      }
      Mb.blockCount = Mb.height / Mb.scanlineBlockSize;
      for (let Yb = 0; Yb < Mb.blockCount; Yb++) Hb(ab, Ub);
      const Bb = Mb.width * Mb.height * Mb.outputChannels;
      switch (Ab) {
        case Ta.Float:
          Mb.byteArray = new Float32Array(Bb), Mb.textureType = 1, Eb && Mb.byteArray.fill(1, 0, Bb);
          break;
        case Ta.HalfFloat:
          Mb.byteArray = new Uint16Array(Bb), Mb.textureType = 2, Eb && Mb.byteArray.fill(15360, 0, Bb);
          break;
        default:
          throw new Error("Unsupported type: " + Ab)
      }
      let vb = 0;
      for (const Yb of bb.channels) void 0 !== Mb.decodeChannels[Yb.name] && (Mb.channelLineOffsets[Yb.name] = vb * Mb.width), vb += 2 * Yb.pixelType;
      return Mb.bytesPerLine = Mb.width * vb, Mb.outLineWidth = Mb.width * Mb.outputChannels, "INCREASING_Y" === bb.lineOrder ? Mb.scanOrder = bb => bb : Mb.scanOrder = bb => Mb.height - 1 - bb, 4 == Mb.outputChannels ? (Mb.format = 5, Mb.linearSpace = !0) : (Mb.format = 6, Mb.linearSpace = !1), Mb
    }

    function ea(bb, ab, Ub, Ab) {
      const Mb = {
        value: 0
      };
      for (let Tb = 0; Tb < bb.height / bb.scanlineBlockSize; Tb++) {
        const Eb = fb(Ub, Ab) - ab.dataWindow.yMin;
        bb.size = mb(Ub, Ab), bb.lines = Eb + bb.scanlineBlockSize > bb.height ? bb.height - Eb : bb.scanlineBlockSize;
        const Yb = bb.size < bb.lines * bb.bytesPerLine && bb.uncompress ? bb.uncompress(bb) : ba(bb);
        Ab.value += bb.size;
        for (let Ub = 0; Ub < bb.scanlineBlockSize; Ub++) {
          const Ab = Tb * bb.scanlineBlockSize,
            Eb = Ub + bb.scanOrder(Ab);
          if (Eb >= bb.height) continue;
          const Bb = Ub * bb.bytesPerLine,
            eb = (bb.height - 1 - Eb) * bb.outLineWidth;
          for (let Ub = 0; Ub < bb.channels; Ub++) {
            const Ab = ab.channels[Ub].name,
              Tb = bb.channelLineOffsets[Ab],
              Eb = bb.decodeChannels[Ab];
            if (void 0 !== Eb) {
              Mb.value = Bb + Tb;
              for (let ab = 0; ab < bb.width; ab++) {
                const Ub = eb + ab * bb.outputChannels + Eb;
                bb.byteArray && (bb.byteArray[Ub] = bb.getter(Yb, Mb))
              }
            }
          }
        }
      }
    }
    Ya.DefaultOutputType = Ta.HalfFloat, Ya.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class va {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(bb, ab, Ub, Ab, Mb) {
        throw ".exr not supported in Cube."
      }
      loadData(bb, ab, Ub) {
        const Mb = new DataView(bb.buffer),
          Tb = {
            value: 0
          },
          Eb = ub(Mb, Tb);
        Ba(Eb, Mb, Tb, Ya.DefaultOutputType).then((bb => {
          ea(bb, Eb, Mb, Tb);
          const Ab = Eb.dataWindow.xMax - Eb.dataWindow.xMin + 1,
            Yb = Eb.dataWindow.yMax - Eb.dataWindow.yMin + 1;
          Ub(Ab, Yb, ab.generateMipMaps, !1, (() => {
            const Ub = ab.vj();
            ab.format = Eb.format, ab.type = bb.textureType, ab.invertY = !1, ab._gammaSpace = !Eb.linearSpace, bb.byteArray && Ub._uploadDataToTextureDirectly(ab, bb.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((bb => {
          Ab.e.Error("Failed to load EXR texture: ", bb)
        }))
      }
    }
    async function La(bb) {
      const ab = new DataView(bb),
        Ub = {
          value: 0
        },
        Mb = ub(ab, Ub);
      try {
        const bb = await Ba(Mb, ab, Ub, Ta.Float);
        return ea(bb, Mb, ab, Ub), bb.byteArray ? {
          width: Mb.dataWindow.xMax - Mb.dataWindow.xMin + 1,
          height: Mb.dataWindow.yMax - Mb.dataWindow.yMin + 1,
          data: new Float32Array(bb.byteArray)
        } : (Ab.e.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (Tb) {
        Ab.e.Error("Failed to load EXR data: ", Tb)
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