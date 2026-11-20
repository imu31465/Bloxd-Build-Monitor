export const id = 305;
export const ids = [305];
export const modules = {
  41267: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      ReadExrDataAsync: () => Mc,
      _ExrTextureLoader: () => fc
    });
    var kb = sb(38284),
      Wb = sb(36688),
      ab = sb(39503);
    const Tb = 4,
      Ub = 4,
      Ib = 1,
      Hb = 2,
      fb = 8,
      Mb = 65536,
      Xb = Mb >> 3,
      nb = 14,
      mb = 65537,
      lb = 1 << nb,
      Qb = lb - 1,
      eb = 59,
      Cb = 63,
      Nb = 2 + Cb - eb;
    var Vb, Lb;

    function ub(bb, cb) {
      const sb = new Uint8Array(bb);
      let kb = 0;
      for (; 0 != sb[cb.value + kb];) kb += 1;
      const Wb = (new TextDecoder).decode(sb.slice(cb.value, cb.value + kb));
      return cb.value = cb.value + kb + 1, Wb
    }

    function Yb(bb, cb) {
      const sb = bb.getInt32(cb.value, !0);
      return cb.value += Tb, sb
    }

    function hb(bb, cb) {
      const sb = bb.getUint32(cb.value, !0);
      return cb.value += Tb, sb
    }

    function Jb(bb, cb) {
      const sb = bb.getUint8(cb.value);
      return cb.value += Ib, sb
    }

    function gb(bb, cb) {
      const sb = bb.getUint16(cb.value, !0);
      return cb.value += Hb, sb
    }

    function Bb(bb, cb) {
      const sb = bb[cb.value];
      return cb.value += Ib, sb
    }

    function tb(bb, cb) {
      let sb;
      return sb = "getBigInt64" in DataView.prototype ? Number(bb.getBigInt64(cb.value, !0)) : bb.getUint32(cb.value + 4, !0) + Number(bb.getUint32(cb.value, !0) << 32), cb.value += fb, sb
    }

    function yb(bb, cb) {
      const sb = bb.getFloat32(cb.value, !0);
      return cb.value += Ub, sb
    }

    function Pb(bb, cb) {
      return (0, ab.d)(gb(bb, cb))
    }

    function Db(bb, cb) {
      return (0, ab.f)((0, Wb.Clamp)(yb(bb, cb), -ab.e, ab.e))
    }

    function Eb(bb, cb, sb, kb) {
      switch (sb) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(bb, cb, sb) {
            const kb = (new TextDecoder).decode(new Uint8Array(bb).slice(cb.value, cb.value + sb));
            return cb.value = cb.value + sb, kb
          }(bb.buffer, cb, kb);
        case "chlist":
          return function(bb, cb, sb) {
            const kb = cb.value,
              Wb = [];
            for (; cb.value < kb + sb - 1;) {
              const sb = ub(bb.buffer, cb),
                kb = Yb(bb, cb),
                ab = Jb(bb, cb);
              cb.value += 3;
              const Tb = Yb(bb, cb),
                Ub = Yb(bb, cb);
              Wb.push({
                name: sb,
                pixelType: kb,
                pLinear: ab,
                xSampling: Tb,
                ySampling: Ub
              })
            }
            return cb.value += 1, Wb
          }(bb, cb, kb);
        case "chromaticities":
          return function(bb, cb) {
            return {
              redX: yb(bb, cb),
              redY: yb(bb, cb),
              greenX: yb(bb, cb),
              greenY: yb(bb, cb),
              blueX: yb(bb, cb),
              blueY: yb(bb, cb),
              whiteX: yb(bb, cb),
              whiteY: yb(bb, cb)
            }
          }(bb, cb);
        case "compression":
          return function(bb, cb) {
            return Jb(bb, cb)
          }(bb, cb);
        case "box2i":
          return function(bb, cb) {
            return {
              xMin: Yb(bb, cb),
              yMin: Yb(bb, cb),
              xMax: Yb(bb, cb),
              yMax: Yb(bb, cb)
            }
          }(bb, cb);
        case "lineOrder":
          return function(bb, cb) {
            const sb = Jb(bb, cb);
            return Lb[sb]
          }(bb, cb);
        case "float":
          return yb(bb, cb);
        case "v2f":
          return function(bb, cb) {
            return [yb(bb, cb), yb(bb, cb)]
          }(bb, cb);
        case "v3f":
          return function(bb, cb) {
            return [yb(bb, cb), yb(bb, cb), yb(bb, cb)]
          }(bb, cb);
        case "int":
          return Yb(bb, cb);
        case "rational":
          return function(bb, cb) {
            return [Yb(bb, cb), hb(bb, cb)]
          }(bb, cb);
        case "timecode":
          return function(bb, cb) {
            return [hb(bb, cb), hb(bb, cb)]
          }(bb, cb);
        case "preview":
          return cb.value += kb, "skipped";
        default:
          return void(cb.value += kb)
      }
    }

    function ib(bb) {
      for (let cb = 1; cb < bb.length; cb++) {
        const sb = bb[cb - 1] + bb[cb] - 128;
        bb[cb] = sb
      }
    }

    function Ob(bb, cb) {
      let sb = 0,
        kb = Math.floor((bb.length + 1) / 2),
        Wb = 0;
      const ab = bb.length - 1;
      for (; !(Wb > ab) && (cb[Wb++] = bb[sb++], !(Wb > ab));) cb[Wb++] = bb[kb++]
    }! function(bb) {
      bb[bb.NO_COMPRESSION = 0] = "NO_COMPRESSION", bb[bb.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", bb[bb.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", bb[bb.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", bb[bb.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", bb[bb.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(Vb || (Vb = {})),
    function(bb) {
      bb[bb.INCREASING_Y = 0] = "INCREASING_Y", bb[bb.DECREASING_Y = 1] = "DECREASING_Y"
    }(Lb || (Lb = {}));
    const Gb = 20000630;

    function Kb(bb, cb) {
      if (bb.getUint32(0, !0) != Gb) throw new Error("Incorrect OpenEXR format");
      const sb = bb.getUint8(4),
        Wb = bb.getUint8(5),
        ab = {
          singleTile: !!(2 & Wb),
          longName: !!(4 & Wb),
          deepFormat: !!(8 & Wb),
          multiPart: !!(16 & Wb)
        };
      cb.value = 8;
      const Tb = {};
      let Ub = !0;
      for (; Ub;) {
        const sb = ub(bb.buffer, cb);
        if (sb) {
          const Wb = ub(bb.buffer, cb),
            ab = Eb(bb, cb, Wb, hb(bb, cb));
          void 0 === ab ? kb.c.Warn(`Unknown header attribute type ${Wb}'.`) : Tb[sb] = ab
        } else Ub = !1
      }
      if (0 != (-5 & Wb)) throw new Error("Unsupported file format");
      return {
        version: sb,
        spec: ab,
        ...Tb
      }
    }
    const Zb = 32768,
      zb = 65535;

    function qb(bb, cb, sb, kb, Wb) {
      for (; sb < bb;) cb = cb << 8 | Bb(kb, Wb), sb += 8;
      return {
        l: cb >> (sb -= bb) & (1 << bb) - 1,
        c: cb,
        lc: sb
      }
    }

    function db(bb, cb, sb, kb) {
      return {
        c: bb = bb << 8 | Bb(sb, kb),
        lc: cb += 8
      }
    }

    function Ab(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib) {
      if (bb == cb) {
        if (kb < 8) {
          const bb = db(sb, kb, Wb, ab);
          sb = bb.c, kb = bb.lc
        }
        let bb = sb >> (kb -= 8);
        if (bb = new Uint8Array([bb])[0], Ub.value + bb > Ib) return null;
        const cb = Tb[Ub.value - 1];
        for (; bb-- > 0;) Tb[Ub.value++] = cb
      } else {
        if (!(Ub.value < Ib)) return null;
        Tb[Ub.value++] = bb
      }
      return {
        c: sb,
        lc: kb
      }
    }
    const wb = new Array(59);

    function rb(bb, cb, sb, kb, Wb, ab) {
      const Tb = cb;
      let Ub = 0,
        Ib = 0;
      for (; kb <= Wb; kb++) {
        if (Tb.value - cb.value > sb) return;
        let Hb = qb(6, Ub, Ib, bb, Tb);
        const fb = Hb.l;
        if (Ub = Hb.c, Ib = Hb.lc, ab[kb] = fb, fb == Cb) {
          if (Tb.value - cb.value > sb) throw new Error("Error in HufUnpackEncTable");
          Hb = qb(8, Ub, Ib, bb, Tb);
          let fb = Hb.l + Nb;
          if (Ub = Hb.c, Ib = Hb.lc, kb + fb > Wb + 1) throw new Error("Error in HufUnpackEncTable");
          for (; fb--;) ab[kb++] = 0;
          kb--
        } else if (fb >= eb) {
          let bb = fb - eb + 2;
          if (kb + bb > Wb + 1) throw new Error("Error in HufUnpackEncTable");
          for (; bb--;) ab[kb++] = 0;
          kb--
        }
      }! function(bb) {
        for (let sb = 0; sb <= 58; ++sb) wb[sb] = 0;
        for (let sb = 0; sb < mb; ++sb) wb[bb[sb]] += 1;
        let cb = 0;
        for (let sb = 58; sb > 0; --sb) {
          const bb = cb + wb[sb] >> 1;
          wb[sb] = cb, cb = bb
        }
        for (let sb = 0; sb < mb; ++sb) {
          const cb = bb[sb];
          cb > 0 && (bb[sb] = cb | wb[cb]++ << 6)
        }
      }(ab)
    }

    function ob(bb) {
      return 63 & bb
    }

    function Sb(bb) {
      return bb >> 6
    }

    function Rb(bb, cb, sb, kb, Wb, ab) {
      const Tb = sb.value,
        Ub = hb(cb, sb),
        Ib = hb(cb, sb);
      sb.value += 4;
      const Hb = hb(cb, sb);
      if (sb.value += 4, Ub < 0 || Ub >= mb || Ib < 0 || Ib >= mb) throw new Error("Wrong HUF_ENCSIZE");
      const fb = new Array(mb),
        Mb = new Array(lb);
      ! function(bb) {
        for (let cb = 0; cb < lb; cb++) bb[cb] = {}, bb[cb].len = 0, bb[cb].lit = 0, bb[cb].p = null
      }(Mb);
      if (rb(bb, sb, kb - (sb.value - Tb), Ub, Ib, fb), Hb > 8 * (kb - (sb.value - Tb))) throw new Error("Wrong hufUncompress");
      ! function(bb, cb, sb, kb) {
        for (; cb <= sb; cb++) {
          const sb = Sb(bb[cb]),
            Wb = ob(bb[cb]);
          if (sb >> Wb) throw new Error("Invalid table entry");
          if (Wb > nb) {
            const bb = kb[sb >> Wb - nb];
            if (bb.len) throw new Error("Invalid table entry");
            if (bb.lit++, bb.p) {
              const cb = bb.p;
              bb.p = new Array(bb.lit);
              for (let sb = 0; sb < bb.lit - 1; ++sb) bb.p[sb] = cb[sb]
            } else bb.p = new Array(1);
            bb.p[bb.lit - 1] = cb
          } else if (Wb) {
            let bb = 0;
            for (let ab = 1 << nb - Wb; ab > 0; ab--) {
              const ab = kb[(sb << nb - Wb) + bb];
              if (ab.len || ab.p) throw new Error("Invalid table entry");
              ab.len = Wb, ab.lit = cb, bb++
            }
          }
        }
      }(fb, Ub, Ib, Mb),
      function(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib) {
        let Hb = 0,
          fb = 0;
        const Mb = Tb,
          Xb = Math.trunc(kb.value + (Wb + 7) / 8);
        for (; kb.value < Xb;) {
          let Wb = db(Hb, fb, sb, kb);
          for (Hb = Wb.c, fb = Wb.lc; fb >= nb;) {
            const Tb = cb[Hb >> fb - nb & Qb];
            if (Tb.len) {
              fb -= Tb.len;
              const bb = Ab(Tb.lit, ab, Hb, fb, sb, kb, Ub, Ib, Mb);
              bb && (Hb = bb.c, fb = bb.lc)
            } else {
              if (!Tb.p) throw new Error("hufDecode issues");
              let cb;
              for (cb = 0; cb < Tb.lit; cb++) {
                const nb = ob(bb[Tb.p[cb]]);
                for (; fb < nb && kb.value < Xb;) Wb = db(Hb, fb, sb, kb), Hb = Wb.c, fb = Wb.lc;
                if (fb >= nb && Sb(bb[Tb.p[cb]]) == (Hb >> fb - nb & (1 << nb) - 1)) {
                  fb -= nb;
                  const bb = Ab(Tb.p[cb], ab, Hb, fb, sb, kb, Ub, Ib, Mb);
                  bb && (Hb = bb.c, fb = bb.lc);
                  break
                }
              }
              if (cb == Tb.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const mb = 8 - Wb & 7;
        for (Hb >>= mb, fb -= mb; fb > 0;) {
          const bb = cb[Hb << nb - fb & Qb];
          if (!bb.len) throw new Error("HufDecode issues");
          {
            fb -= bb.len;
            const cb = Ab(bb.lit, ab, Hb, fb, sb, kb, Ub, Ib, Mb);
            cb && (Hb = cb.c, fb = cb.lc)
          }
        }
      }(fb, Mb, bb, sb, Hb, Ib, ab, Wb, {
        value: 0
      })
    }

    function vb(bb) {
      return 65535 & bb
    }

    function Fb(bb) {
      const cb = vb(bb);
      return cb > 32767 ? cb - 65536 : cb
    }

    function xb(bb, cb) {
      const sb = Fb(bb),
        kb = Fb(cb),
        Wb = sb + (1 & kb) + (kb >> 1);
      return {
        a: Wb,
        b: Wb - kb
      }
    }

    function jb(bb, cb) {
      const sb = vb(bb),
        kb = vb(cb),
        Wb = sb - (kb >> 1) & zb;
      return {
        a: kb + Wb - Zb & zb,
        b: Wb
      }
    }

    function pb(bb, cb, sb, kb, Wb, ab, Tb) {
      const Ub = Tb < 16384,
        Ib = sb > Wb ? Wb : sb;
      let Hb, fb, Mb = 1;
      for (; Mb <= Ib;) Mb <<= 1;
      for (Mb >>= 1, Hb = Mb, Mb >>= 1; Mb >= 1;) {
        fb = 0;
        const Tb = fb + ab * (Wb - Hb),
          Ib = ab * Mb,
          Xb = ab * Hb,
          nb = kb * Mb,
          mb = kb * Hb;
        let lb, Qb, eb, Cb;
        for (; fb <= Tb; fb += Xb) {
          let Wb = fb;
          const ab = fb + kb * (sb - Hb);
          for (; Wb <= ab; Wb += mb) {
            const sb = Wb + nb,
              kb = Wb + Ib,
              ab = kb + nb;
            if (Ub) {
              let Tb = xb(bb[Wb + cb], bb[kb + cb]);
              lb = Tb.a, eb = Tb.b, Tb = xb(bb[sb + cb], bb[ab + cb]), Qb = Tb.a, Cb = Tb.b, Tb = xb(lb, Qb), bb[Wb + cb] = Tb.a, bb[sb + cb] = Tb.b, Tb = xb(eb, Cb), bb[kb + cb] = Tb.a, bb[ab + cb] = Tb.b
            } else {
              let Tb = jb(bb[Wb + cb], bb[kb + cb]);
              lb = Tb.a, eb = Tb.b, Tb = jb(bb[sb + cb], bb[ab + cb]), Qb = Tb.a, Cb = Tb.b, Tb = jb(lb, Qb), bb[Wb + cb] = Tb.a, bb[sb + cb] = Tb.b, Tb = jb(eb, Cb), bb[kb + cb] = Tb.a, bb[ab + cb] = Tb.b
            }
          }
          if (sb & Mb) {
            const sb = Wb + Ib;
            let kb;
            kb = Ub ? xb(bb[Wb + cb], bb[sb + cb]) : jb(bb[Wb + cb], bb[sb + cb]), lb = kb.a, bb[sb + cb] = kb.b, bb[Wb + cb] = lb
          }
        }
        if (Wb & Mb) {
          let Wb = fb;
          const ab = fb + kb * (sb - Hb);
          for (; Wb <= ab; Wb += mb) {
            const sb = Wb + nb;
            let kb;
            kb = Ub ? xb(bb[Wb + cb], bb[sb + cb]) : jb(bb[Wb + cb], bb[sb + cb]), lb = kb.a, bb[sb + cb] = kb.b, bb[Wb + cb] = lb
          }
        }
        Hb = Mb, Mb >>= 1
      }
      return fb
    }

    function bc(bb) {
      return new DataView(bb.array.buffer, bb.offset.value, bb.size)
    }

    function cc(bb) {
      const cb = bb.viewer.buffer.slice(bb.offset.value, bb.offset.value + bb.size),
        sb = new Uint8Array(function(bb) {
          let cb = bb.byteLength;
          const sb = [];
          let kb = 0;
          const Wb = new DataView(bb);
          for (; cb > 0;) {
            const bb = Wb.getInt8(kb++);
            if (bb < 0) {
              const ab = -bb;
              cb -= ab + 1;
              for (let bb = 0; bb < ab; bb++) sb.push(Wb.getUint8(kb++))
            } else {
              const ab = bb;
              cb -= 2;
              const Tb = Wb.getUint8(kb++);
              for (let bb = 0; bb < ab + 1; bb++) sb.push(Tb)
            }
          }
          return sb
        }(cb)),
        kb = new Uint8Array(sb.length);
      return ib(sb), Ob(sb, kb), new DataView(kb.buffer)
    }

    function sc(bb) {
      const cb = bb.array.slice(bb.offset.value, bb.offset.value + bb.size),
        sb = fflate.unzlibSync(cb),
        kb = new Uint8Array(sb.length);
      return ib(sb), Ob(sb, kb), new DataView(kb.buffer)
    }

    function kc(bb) {
      const cb = bb.array.slice(bb.offset.value, bb.offset.value + bb.size),
        sb = fflate.unzlibSync(cb),
        kb = bb.lines * bb.channels * bb.width,
        Wb = 1 == bb.type ? new Uint16Array(kb) : new Uint32Array(kb);
      let ab = 0,
        Tb = 0;
      const Ub = new Array(4);
      for (let Ib = 0; Ib < bb.lines; Ib++)
        for (let cb = 0; cb < bb.channels; cb++) {
          let cb = 0;
          switch (bb.type) {
            case 1:
              Ub[0] = ab, Ub[1] = Ub[0] + bb.width, ab = Ub[1] + bb.width;
              for (let kb = 0; kb < bb.width; ++kb) {
                cb += sb[Ub[0]++] << 8 | sb[Ub[1]++], Wb[Tb] = cb, Tb++
              }
              break;
            case 2:
              Ub[0] = ab, Ub[1] = Ub[0] + bb.width, Ub[2] = Ub[1] + bb.width, ab = Ub[2] + bb.width;
              for (let kb = 0; kb < bb.width; ++kb) {
                cb += sb[Ub[0]++] << 24 | sb[Ub[1]++] << 16 | sb[Ub[2]++] << 8, Wb[Tb] = cb, Tb++
              }
          }
        }
      return new DataView(Wb.buffer)
    }

    function Wc(bb) {
      const cb = bb.viewer,
        sb = {
          value: bb.offset.value
        },
        kb = new Uint16Array(bb.width * bb.scanlineBlockSize * (bb.channels * bb.type)),
        Wb = new Uint8Array(Xb);
      let ab = 0;
      const Tb = new Array(bb.channels);
      for (let Hb = 0; Hb < bb.channels; Hb++) Tb[Hb] = {}, Tb[Hb].start = ab, Tb[Hb].end = Tb[Hb].start, Tb[Hb].nx = bb.width, Tb[Hb].ny = bb.lines, Tb[Hb].size = bb.type, ab += Tb[Hb].nx * Tb[Hb].ny * Tb[Hb].size;
      const Ub = gb(cb, sb),
        Ib = gb(cb, sb);
      if (Ib >= Xb) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (Ub <= Ib)
        for (let Hb = 0; Hb < Ib - Ub + 1; Hb++) Wb[Hb + Ub] = Jb(cb, sb);
      const fb = new Uint16Array(Mb),
        nb = function(bb, cb) {
          let sb = 0;
          for (let Wb = 0; Wb < Mb; ++Wb)(0 == Wb || bb[Wb >> 3] & 1 << (7 & Wb)) && (cb[sb++] = Wb);
          const kb = sb - 1;
          for (; sb < Mb;) cb[sb++] = 0;
          return kb
        }(Wb, fb),
        mb = hb(cb, sb);
      Rb(bb.array, cb, sb, mb, kb, ab);
      for (let Hb = 0; Hb < bb.channels; ++Hb) {
        const bb = Tb[Hb];
        for (let cb = 0; cb < Tb[Hb].size; ++cb) pb(kb, bb.start + cb, bb.nx, bb.size, bb.ny, bb.nx * bb.size, nb)
      }! function(bb, cb, sb) {
        for (let kb = 0; kb < sb; ++kb) cb[kb] = bb[cb[kb]]
      }(fb, kb, ab);
      let lb = 0;
      const Qb = new Uint8Array(kb.buffer.byteLength);
      for (let Mb = 0; Mb < bb.lines; Mb++)
        for (let cb = 0; cb < bb.channels; cb++) {
          const bb = Tb[cb],
            sb = bb.nx * bb.size,
            Wb = new Uint8Array(kb.buffer, bb.end * Hb, sb * Hb);
          Qb.set(Wb, lb), lb += sb * Hb, bb.end += sb
        }
      return new DataView(Qb.buffer)
    }
    var ac, Tc = sb(39531);
    ! function(bb) {
      bb[bb.Float = 0] = "Float", bb[bb.HalfFloat = 1] = "HalfFloat"
    }(ac || (ac = {}));
    class Uc {}
    async function Ic(bb, cb, sb, kb) {
      const Wb = {
        size: 0,
        viewer: cb,
        array: new Uint8Array(cb.buffer),
        offset: sb,
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
        case Vb.NO_COMPRESSION:
          Wb.lines = 1, Wb.uncompress = bc;
          break;
        case Vb.RLE_COMPRESSION:
          Wb.lines = 1, Wb.uncompress = cc;
          break;
        case Vb.ZIPS_COMPRESSION:
          Wb.lines = 1, Wb.uncompress = sc, await Tc.g.LoadScriptAsync(Uc.FFLATEUrl);
          break;
        case Vb.ZIP_COMPRESSION:
          Wb.lines = 16, Wb.uncompress = sc, await Tc.g.LoadScriptAsync(Uc.FFLATEUrl);
          break;
        case Vb.PIZ_COMPRESSION:
          Wb.lines = 32, Wb.uncompress = Wc;
          break;
        case Vb.PXR24_COMPRESSION:
          Wb.lines = 16, Wb.uncompress = kc, await Tc.g.LoadScriptAsync(Uc.FFLATEUrl);
          break;
        default:
          throw new Error(Vb[bb.compression] + " is unsupported")
      }
      Wb.scanlineBlockSize = Wb.lines;
      const ab = {};
      for (const Ub of bb.channels) switch (Ub.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          ab[Ub.name] = !0, Wb.type = Ub.pixelType
      }
      let Tb = !1;
      if (ab.R && ab.G && ab.B && ab.A) Wb.outputChannels = 4, Wb.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (ab.R && ab.G && ab.B) Tb = !0, Wb.outputChannels = 4, Wb.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (ab.R && ab.G) Wb.outputChannels = 2, Wb.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (ab.R) Wb.outputChannels = 1, Wb.decodeChannels = {
        R: 0
      };
      else {
        if (!ab.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        Wb.outputChannels = 1, Wb.decodeChannels = {
          Y: 0
        }
      }
      if (1 === Wb.type) switch (kb) {
        case ac.Float:
          Wb.getter = Pb, Wb.inputSize = Hb;
          break;
        case ac.HalfFloat:
          Wb.getter = gb, Wb.inputSize = Hb
      } else {
        if (2 !== Wb.type) throw new Error("Unsupported pixelType " + Wb.type + " for " + bb.compression);
        switch (kb) {
          case ac.Float:
            Wb.getter = yb, Wb.inputSize = Ub;
            break;
          case ac.HalfFloat:
            Wb.getter = Db, Wb.inputSize = Ub
        }
      }
      Wb.blockCount = Wb.height / Wb.scanlineBlockSize;
      for (let Ub = 0; Ub < Wb.blockCount; Ub++) tb(cb, sb);
      const Ib = Wb.width * Wb.height * Wb.outputChannels;
      switch (kb) {
        case ac.Float:
          Wb.byteArray = new Float32Array(Ib), Wb.textureType = 1, Tb && Wb.byteArray.fill(1, 0, Ib);
          break;
        case ac.HalfFloat:
          Wb.byteArray = new Uint16Array(Ib), Wb.textureType = 2, Tb && Wb.byteArray.fill(15360, 0, Ib);
          break;
        default:
          throw new Error("Unsupported type: " + kb)
      }
      let fb = 0;
      for (const Ub of bb.channels) void 0 !== Wb.decodeChannels[Ub.name] && (Wb.channelLineOffsets[Ub.name] = fb * Wb.width), fb += 2 * Ub.pixelType;
      return Wb.bytesPerLine = Wb.width * fb, Wb.outLineWidth = Wb.width * Wb.outputChannels, "INCREASING_Y" === bb.lineOrder ? Wb.scanOrder = bb => bb : Wb.scanOrder = bb => Wb.height - 1 - bb, 4 == Wb.outputChannels ? (Wb.format = 5, Wb.linearSpace = !0) : (Wb.format = 6, Wb.linearSpace = !1), Wb
    }

    function Hc(bb, cb, sb, kb) {
      const Wb = {
        value: 0
      };
      for (let ab = 0; ab < bb.height / bb.scanlineBlockSize; ab++) {
        const Tb = Yb(sb, kb) - cb.dataWindow.yMin;
        bb.size = hb(sb, kb), bb.lines = Tb + bb.scanlineBlockSize > bb.height ? bb.height - Tb : bb.scanlineBlockSize;
        const Ub = bb.size < bb.lines * bb.bytesPerLine && bb.uncompress ? bb.uncompress(bb) : bc(bb);
        kb.value += bb.size;
        for (let sb = 0; sb < bb.scanlineBlockSize; sb++) {
          const kb = ab * bb.scanlineBlockSize,
            Tb = sb + bb.scanOrder(kb);
          if (Tb >= bb.height) continue;
          const Ib = sb * bb.bytesPerLine,
            Hb = (bb.height - 1 - Tb) * bb.outLineWidth;
          for (let sb = 0; sb < bb.channels; sb++) {
            const kb = cb.channels[sb].name,
              ab = bb.channelLineOffsets[kb],
              Tb = bb.decodeChannels[kb];
            if (void 0 !== Tb) {
              Wb.value = Ib + ab;
              for (let cb = 0; cb < bb.width; cb++) {
                const sb = Hb + cb * bb.outputChannels + Tb;
                bb.byteArray && (bb.byteArray[sb] = bb.getter(Ub, Wb))
              }
            }
          }
        }
      }
    }
    Uc.DefaultOutputType = ac.HalfFloat, Uc.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class fc {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(bb, cb, sb, kb, Wb) {
        throw ".exr not supported in Cube."
      }
      loadData(bb, cb, sb) {
        const Wb = new DataView(bb.buffer),
          ab = {
            value: 0
          },
          Tb = Kb(Wb, ab);
        Ic(Tb, Wb, ab, Uc.DefaultOutputType).then((bb => {
          Hc(bb, Tb, Wb, ab);
          const kb = Tb.dataWindow.xMax - Tb.dataWindow.xMin + 1,
            Ub = Tb.dataWindow.yMax - Tb.dataWindow.yMin + 1;
          sb(kb, Ub, cb.generateMipMaps, !1, (() => {
            const sb = cb.Sm();
            cb.format = Tb.format, cb.type = bb.textureType, cb.invertY = !1, cb._gammaSpace = !Tb.linearSpace, bb.byteArray && sb._uploadDataToTextureDirectly(cb, bb.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((bb => {
          kb.c.Error("Failed to load EXR texture: ", bb)
        }))
      }
    }
    async function Mc(bb) {
      const cb = new DataView(bb),
        sb = {
          value: 0
        },
        Wb = Kb(cb, sb);
      try {
        const bb = await Ic(Wb, cb, sb, ac.Float);
        return Hc(bb, Wb, cb, sb), bb.byteArray ? {
          width: Wb.dataWindow.xMax - Wb.dataWindow.xMin + 1,
          height: Wb.dataWindow.yMax - Wb.dataWindow.yMin + 1,
          data: new Float32Array(bb.byteArray)
        } : (kb.c.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (ab) {
        kb.c.Error("Failed to load EXR data: ", ab)
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