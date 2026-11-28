export const id = 634;
export const ids = [634];
export const modules = {
  54094: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      ReadExrDataAsync: () => Ow,
      _ExrTextureLoader: () => Iw
    });
    var eb = Mb(39971),
      Hb = Mb(38322),
      pb = Mb(41742);
    const Vb = 4,
      gb = 4,
      lb = 1,
      Lb = 2,
      Ib = 8,
      Ob = 65536,
      Ub = Ob >> 3,
      tb = 14,
      Cb = 65537,
      Eb = 1 << tb,
      Fb = Eb - 1,
      Bb = 59,
      sb = 63,
      mb = 2 + sb - Bb;
    var hb, zb;

    function Xb(bb, wb) {
      const Mb = new Uint8Array(bb);
      let eb = 0;
      for (; 0 != Mb[wb.value + eb];) eb += 1;
      const Hb = (new TextDecoder).decode(Mb.slice(wb.value, wb.value + eb));
      return wb.value = wb.value + eb + 1, Hb
    }

    function xb(bb, wb) {
      const Mb = bb.getInt32(wb.value, !0);
      return wb.value += Vb, Mb
    }

    function jb(bb, wb) {
      const Mb = bb.getUint32(wb.value, !0);
      return wb.value += Vb, Mb
    }

    function Kb(bb, wb) {
      const Mb = bb.getUint8(wb.value);
      return wb.value += lb, Mb
    }

    function rb(bb, wb) {
      const Mb = bb.getUint16(wb.value, !0);
      return wb.value += Lb, Mb
    }

    function Rb(bb, wb) {
      const Mb = bb[wb.value];
      return wb.value += lb, Mb
    }

    function Db(bb, wb) {
      let Mb;
      return Mb = "getBigInt64" in DataView.prototype ? Number(bb.getBigInt64(wb.value, !0)) : bb.getUint32(wb.value + 4, !0) + Number(bb.getUint32(wb.value, !0) << 32), wb.value += Ib, Mb
    }

    function cb(bb, wb) {
      const Mb = bb.getFloat32(wb.value, !0);
      return wb.value += gb, Mb
    }

    function Yb(bb, wb) {
      return (0, pb.c)(rb(bb, wb))
    }

    function Zb(bb, wb) {
      return (0, pb.i)((0, Hb.Clamp)(cb(bb, wb), -pb.e, pb.e))
    }

    function fb(bb, wb, Mb, eb) {
      switch (Mb) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(bb, wb, Mb) {
            const eb = (new TextDecoder).decode(new Uint8Array(bb).slice(wb.value, wb.value + Mb));
            return wb.value = wb.value + Mb, eb
          }(bb.buffer, wb, eb);
        case "chlist":
          return function(bb, wb, Mb) {
            const eb = wb.value,
              Hb = [];
            for (; wb.value < eb + Mb - 1;) {
              const Mb = Xb(bb.buffer, wb),
                eb = xb(bb, wb),
                pb = Kb(bb, wb);
              wb.value += 3;
              const Vb = xb(bb, wb),
                gb = xb(bb, wb);
              Hb.push({
                name: Mb,
                pixelType: eb,
                pLinear: pb,
                xSampling: Vb,
                ySampling: gb
              })
            }
            return wb.value += 1, Hb
          }(bb, wb, eb);
        case "chromaticities":
          return function(bb, wb) {
            return {
              redX: cb(bb, wb),
              redY: cb(bb, wb),
              greenX: cb(bb, wb),
              greenY: cb(bb, wb),
              blueX: cb(bb, wb),
              blueY: cb(bb, wb),
              whiteX: cb(bb, wb),
              whiteY: cb(bb, wb)
            }
          }(bb, wb);
        case "compression":
          return function(bb, wb) {
            return Kb(bb, wb)
          }(bb, wb);
        case "box2i":
          return function(bb, wb) {
            return {
              xMin: xb(bb, wb),
              yMin: xb(bb, wb),
              xMax: xb(bb, wb),
              yMax: xb(bb, wb)
            }
          }(bb, wb);
        case "lineOrder":
          return function(bb, wb) {
            const Mb = Kb(bb, wb);
            return zb[Mb]
          }(bb, wb);
        case "float":
          return cb(bb, wb);
        case "v2f":
          return function(bb, wb) {
            return [cb(bb, wb), cb(bb, wb)]
          }(bb, wb);
        case "v3f":
          return function(bb, wb) {
            return [cb(bb, wb), cb(bb, wb), cb(bb, wb)]
          }(bb, wb);
        case "int":
          return xb(bb, wb);
        case "rational":
          return function(bb, wb) {
            return [xb(bb, wb), jb(bb, wb)]
          }(bb, wb);
        case "timecode":
          return function(bb, wb) {
            return [jb(bb, wb), jb(bb, wb)]
          }(bb, wb);
        case "preview":
          return wb.value += eb, "skipped";
        default:
          return void(wb.value += eb)
      }
    }

    function Ab(bb) {
      for (let wb = 1; wb < bb.length; wb++) {
        const Mb = bb[wb - 1] + bb[wb] - 128;
        bb[wb] = Mb
      }
    }

    function Wb(bb, wb) {
      let Mb = 0,
        eb = Math.floor((bb.length + 1) / 2),
        Hb = 0;
      const pb = bb.length - 1;
      for (; !(Hb > pb) && (wb[Hb++] = bb[Mb++], !(Hb > pb));) wb[Hb++] = bb[eb++]
    }! function(bb) {
      bb[bb.NO_COMPRESSION = 0] = "NO_COMPRESSION", bb[bb.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", bb[bb.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", bb[bb.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", bb[bb.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", bb[bb.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(hb || (hb = {})),
    function(bb) {
      bb[bb.INCREASING_Y = 0] = "INCREASING_Y", bb[bb.DECREASING_Y = 1] = "DECREASING_Y"
    }(zb || (zb = {}));
    const Jb = 20000630;

    function Sb(bb, wb) {
      if (bb.getUint32(0, !0) != Jb) throw new Error("Incorrect OpenEXR format");
      const Mb = bb.getUint8(4),
        Hb = bb.getUint8(5),
        pb = {
          singleTile: !!(2 & Hb),
          longName: !!(4 & Hb),
          deepFormat: !!(8 & Hb),
          multiPart: !!(16 & Hb)
        };
      wb.value = 8;
      const Vb = {};
      let gb = !0;
      for (; gb;) {
        const Mb = Xb(bb.buffer, wb);
        if (Mb) {
          const Hb = Xb(bb.buffer, wb),
            pb = fb(bb, wb, Hb, jb(bb, wb));
          void 0 === pb ? eb.b.Warn(`Unknown header attribute type ${Hb}'.`) : Vb[Mb] = pb
        } else gb = !1
      }
      if (0 != (-5 & Hb)) throw new Error("Unsupported file format");
      return {
        version: Mb,
        spec: pb,
        ...Vb
      }
    }
    const Nb = 32768,
      vb = 65535;

    function Qb(bb, wb, Mb, eb, Hb) {
      for (; Mb < bb;) wb = wb << 8 | Rb(eb, Hb), Mb += 8;
      return {
        l: wb >> (Mb -= bb) & (1 << bb) - 1,
        c: wb,
        lc: Mb
      }
    }

    function Gb(bb, wb, Mb, eb) {
      return {
        c: bb = bb << 8 | Rb(Mb, eb),
        lc: wb += 8
      }
    }

    function qb(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) {
      if (bb == wb) {
        if (eb < 8) {
          const bb = Gb(Mb, eb, Hb, pb);
          Mb = bb.c, eb = bb.lc
        }
        let bb = Mb >> (eb -= 8);
        if (bb = new Uint8Array([bb])[0], gb.value + bb > lb) return null;
        const wb = Vb[gb.value - 1];
        for (; bb-- > 0;) Vb[gb.value++] = wb
      } else {
        if (!(gb.value < lb)) return null;
        Vb[gb.value++] = bb
      }
      return {
        c: Mb,
        lc: eb
      }
    }
    const ab = new Array(59);

    function ib(bb, wb, Mb, eb, Hb, pb) {
      const Vb = wb;
      let gb = 0,
        lb = 0;
      for (; eb <= Hb; eb++) {
        if (Vb.value - wb.value > Mb) return;
        let Lb = Qb(6, gb, lb, bb, Vb);
        const Ib = Lb.l;
        if (gb = Lb.c, lb = Lb.lc, pb[eb] = Ib, Ib == sb) {
          if (Vb.value - wb.value > Mb) throw new Error("Error in HufUnpackEncTable");
          Lb = Qb(8, gb, lb, bb, Vb);
          let Ib = Lb.l + mb;
          if (gb = Lb.c, lb = Lb.lc, eb + Ib > Hb + 1) throw new Error("Error in HufUnpackEncTable");
          for (; Ib--;) pb[eb++] = 0;
          eb--
        } else if (Ib >= Bb) {
          let bb = Ib - Bb + 2;
          if (eb + bb > Hb + 1) throw new Error("Error in HufUnpackEncTable");
          for (; bb--;) pb[eb++] = 0;
          eb--
        }
      }! function(bb) {
        for (let Mb = 0; Mb <= 58; ++Mb) ab[Mb] = 0;
        for (let Mb = 0; Mb < Cb; ++Mb) ab[bb[Mb]] += 1;
        let wb = 0;
        for (let Mb = 58; Mb > 0; --Mb) {
          const bb = wb + ab[Mb] >> 1;
          ab[Mb] = wb, wb = bb
        }
        for (let Mb = 0; Mb < Cb; ++Mb) {
          const wb = bb[Mb];
          wb > 0 && (bb[Mb] = wb | ab[wb]++ << 6)
        }
      }(pb)
    }

    function ub(bb) {
      return 63 & bb
    }

    function db(bb) {
      return bb >> 6
    }

    function Pb(bb, wb, Mb, eb, Hb, pb) {
      const Vb = Mb.value,
        gb = jb(wb, Mb),
        lb = jb(wb, Mb);
      Mb.value += 4;
      const Lb = jb(wb, Mb);
      if (Mb.value += 4, gb < 0 || gb >= Cb || lb < 0 || lb >= Cb) throw new Error("Wrong HUF_ENCSIZE");
      const Ib = new Array(Cb),
        Ob = new Array(Eb);
      ! function(bb) {
        for (let wb = 0; wb < Eb; wb++) bb[wb] = {}, bb[wb].len = 0, bb[wb].lit = 0, bb[wb].p = null
      }(Ob);
      if (ib(bb, Mb, eb - (Mb.value - Vb), gb, lb, Ib), Lb > 8 * (eb - (Mb.value - Vb))) throw new Error("Wrong hufUncompress");
      ! function(bb, wb, Mb, eb) {
        for (; wb <= Mb; wb++) {
          const Mb = db(bb[wb]),
            Hb = ub(bb[wb]);
          if (Mb >> Hb) throw new Error("Invalid table entry");
          if (Hb > tb) {
            const bb = eb[Mb >> Hb - tb];
            if (bb.len) throw new Error("Invalid table entry");
            if (bb.lit++, bb.p) {
              const wb = bb.p;
              bb.p = new Array(bb.lit);
              for (let Mb = 0; Mb < bb.lit - 1; ++Mb) bb.p[Mb] = wb[Mb]
            } else bb.p = new Array(1);
            bb.p[bb.lit - 1] = wb
          } else if (Hb) {
            let bb = 0;
            for (let pb = 1 << tb - Hb; pb > 0; pb--) {
              const pb = eb[(Mb << tb - Hb) + bb];
              if (pb.len || pb.p) throw new Error("Invalid table entry");
              pb.len = Hb, pb.lit = wb, bb++
            }
          }
        }
      }(Ib, gb, lb, Ob),
      function(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) {
        let Lb = 0,
          Ib = 0;
        const Ob = Vb,
          Ub = Math.trunc(eb.value + (Hb + 7) / 8);
        for (; eb.value < Ub;) {
          let Hb = Gb(Lb, Ib, Mb, eb);
          for (Lb = Hb.c, Ib = Hb.lc; Ib >= tb;) {
            const Vb = wb[Lb >> Ib - tb & Fb];
            if (Vb.len) {
              Ib -= Vb.len;
              const bb = qb(Vb.lit, pb, Lb, Ib, Mb, eb, gb, lb, Ob);
              bb && (Lb = bb.c, Ib = bb.lc)
            } else {
              if (!Vb.p) throw new Error("hufDecode issues");
              let wb;
              for (wb = 0; wb < Vb.lit; wb++) {
                const tb = ub(bb[Vb.p[wb]]);
                for (; Ib < tb && eb.value < Ub;) Hb = Gb(Lb, Ib, Mb, eb), Lb = Hb.c, Ib = Hb.lc;
                if (Ib >= tb && db(bb[Vb.p[wb]]) == (Lb >> Ib - tb & (1 << tb) - 1)) {
                  Ib -= tb;
                  const bb = qb(Vb.p[wb], pb, Lb, Ib, Mb, eb, gb, lb, Ob);
                  bb && (Lb = bb.c, Ib = bb.lc);
                  break
                }
              }
              if (wb == Vb.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const Cb = 8 - Hb & 7;
        for (Lb >>= Cb, Ib -= Cb; Ib > 0;) {
          const bb = wb[Lb << tb - Ib & Fb];
          if (!bb.len) throw new Error("HufDecode issues");
          {
            Ib -= bb.len;
            const wb = qb(bb.lit, pb, Lb, Ib, Mb, eb, gb, lb, Ob);
            wb && (Lb = wb.c, Ib = wb.lc)
          }
        }
      }(Ib, Ob, bb, Mb, Lb, lb, pb, Hb, {
        value: 0
      })
    }

    function nb(bb) {
      return 65535 & bb
    }

    function yb(bb) {
      const wb = nb(bb);
      return wb > 32767 ? wb - 65536 : wb
    }

    function ob(bb, wb) {
      const Mb = yb(bb),
        eb = yb(wb),
        Hb = Mb + (1 & eb) + (eb >> 1);
      return {
        a: Hb,
        b: Hb - eb
      }
    }

    function Tb(bb, wb) {
      const Mb = nb(bb),
        eb = nb(wb),
        Hb = Mb - (eb >> 1) & vb;
      return {
        a: eb + Hb - Nb & vb,
        b: Hb
      }
    }

    function kb(bb, wb, Mb, eb, Hb, pb, Vb) {
      const gb = Vb < 16384,
        lb = Mb > Hb ? Hb : Mb;
      let Lb, Ib, Ob = 1;
      for (; Ob <= lb;) Ob <<= 1;
      for (Ob >>= 1, Lb = Ob, Ob >>= 1; Ob >= 1;) {
        Ib = 0;
        const Vb = Ib + pb * (Hb - Lb),
          lb = pb * Ob,
          Ub = pb * Lb,
          tb = eb * Ob,
          Cb = eb * Lb;
        let Eb, Fb, Bb, sb;
        for (; Ib <= Vb; Ib += Ub) {
          let Hb = Ib;
          const pb = Ib + eb * (Mb - Lb);
          for (; Hb <= pb; Hb += Cb) {
            const Mb = Hb + tb,
              eb = Hb + lb,
              pb = eb + tb;
            if (gb) {
              let Vb = ob(bb[Hb + wb], bb[eb + wb]);
              Eb = Vb.a, Bb = Vb.b, Vb = ob(bb[Mb + wb], bb[pb + wb]), Fb = Vb.a, sb = Vb.b, Vb = ob(Eb, Fb), bb[Hb + wb] = Vb.a, bb[Mb + wb] = Vb.b, Vb = ob(Bb, sb), bb[eb + wb] = Vb.a, bb[pb + wb] = Vb.b
            } else {
              let Vb = Tb(bb[Hb + wb], bb[eb + wb]);
              Eb = Vb.a, Bb = Vb.b, Vb = Tb(bb[Mb + wb], bb[pb + wb]), Fb = Vb.a, sb = Vb.b, Vb = Tb(Eb, Fb), bb[Hb + wb] = Vb.a, bb[Mb + wb] = Vb.b, Vb = Tb(Bb, sb), bb[eb + wb] = Vb.a, bb[pb + wb] = Vb.b
            }
          }
          if (Mb & Ob) {
            const Mb = Hb + lb;
            let eb;
            eb = gb ? ob(bb[Hb + wb], bb[Mb + wb]) : Tb(bb[Hb + wb], bb[Mb + wb]), Eb = eb.a, bb[Mb + wb] = eb.b, bb[Hb + wb] = Eb
          }
        }
        if (Hb & Ob) {
          let Hb = Ib;
          const pb = Ib + eb * (Mb - Lb);
          for (; Hb <= pb; Hb += Cb) {
            const Mb = Hb + tb;
            let eb;
            eb = gb ? ob(bb[Hb + wb], bb[Mb + wb]) : Tb(bb[Hb + wb], bb[Mb + wb]), Eb = eb.a, bb[Mb + wb] = eb.b, bb[Hb + wb] = Eb
          }
        }
        Lb = Ob, Ob >>= 1
      }
      return Ib
    }

    function bw(bb) {
      return new DataView(bb.array.buffer, bb.offset.value, bb.size)
    }

    function ww(bb) {
      const wb = bb.viewer.buffer.slice(bb.offset.value, bb.offset.value + bb.size),
        Mb = new Uint8Array(function(bb) {
          let wb = bb.byteLength;
          const Mb = [];
          let eb = 0;
          const Hb = new DataView(bb);
          for (; wb > 0;) {
            const bb = Hb.getInt8(eb++);
            if (bb < 0) {
              const pb = -bb;
              wb -= pb + 1;
              for (let bb = 0; bb < pb; bb++) Mb.push(Hb.getUint8(eb++))
            } else {
              const pb = bb;
              wb -= 2;
              const Vb = Hb.getUint8(eb++);
              for (let bb = 0; bb < pb + 1; bb++) Mb.push(Vb)
            }
          }
          return Mb
        }(wb)),
        eb = new Uint8Array(Mb.length);
      return Ab(Mb), Wb(Mb, eb), new DataView(eb.buffer)
    }

    function Mw(bb) {
      const wb = bb.array.slice(bb.offset.value, bb.offset.value + bb.size),
        Mb = fflate.unzlibSync(wb),
        eb = new Uint8Array(Mb.length);
      return Ab(Mb), Wb(Mb, eb), new DataView(eb.buffer)
    }

    function ew(bb) {
      const wb = bb.array.slice(bb.offset.value, bb.offset.value + bb.size),
        Mb = fflate.unzlibSync(wb),
        eb = bb.lines * bb.channels * bb.width,
        Hb = 1 == bb.type ? new Uint16Array(eb) : new Uint32Array(eb);
      let pb = 0,
        Vb = 0;
      const gb = new Array(4);
      for (let lb = 0; lb < bb.lines; lb++)
        for (let wb = 0; wb < bb.channels; wb++) {
          let wb = 0;
          switch (bb.type) {
            case 1:
              gb[0] = pb, gb[1] = gb[0] + bb.width, pb = gb[1] + bb.width;
              for (let eb = 0; eb < bb.width; ++eb) {
                wb += Mb[gb[0]++] << 8 | Mb[gb[1]++], Hb[Vb] = wb, Vb++
              }
              break;
            case 2:
              gb[0] = pb, gb[1] = gb[0] + bb.width, gb[2] = gb[1] + bb.width, pb = gb[2] + bb.width;
              for (let eb = 0; eb < bb.width; ++eb) {
                wb += Mb[gb[0]++] << 24 | Mb[gb[1]++] << 16 | Mb[gb[2]++] << 8, Hb[Vb] = wb, Vb++
              }
          }
        }
      return new DataView(Hb.buffer)
    }

    function Hw(bb) {
      const wb = bb.viewer,
        Mb = {
          value: bb.offset.value
        },
        eb = new Uint16Array(bb.width * bb.scanlineBlockSize * (bb.channels * bb.type)),
        Hb = new Uint8Array(Ub);
      let pb = 0;
      const Vb = new Array(bb.channels);
      for (let Lb = 0; Lb < bb.channels; Lb++) Vb[Lb] = {}, Vb[Lb].start = pb, Vb[Lb].end = Vb[Lb].start, Vb[Lb].nx = bb.width, Vb[Lb].ny = bb.lines, Vb[Lb].size = bb.type, pb += Vb[Lb].nx * Vb[Lb].ny * Vb[Lb].size;
      const gb = rb(wb, Mb),
        lb = rb(wb, Mb);
      if (lb >= Ub) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (gb <= lb)
        for (let Lb = 0; Lb < lb - gb + 1; Lb++) Hb[Lb + gb] = Kb(wb, Mb);
      const Ib = new Uint16Array(Ob),
        tb = function(bb, wb) {
          let Mb = 0;
          for (let Hb = 0; Hb < Ob; ++Hb)(0 == Hb || bb[Hb >> 3] & 1 << (7 & Hb)) && (wb[Mb++] = Hb);
          const eb = Mb - 1;
          for (; Mb < Ob;) wb[Mb++] = 0;
          return eb
        }(Hb, Ib),
        Cb = jb(wb, Mb);
      Pb(bb.array, wb, Mb, Cb, eb, pb);
      for (let Lb = 0; Lb < bb.channels; ++Lb) {
        const bb = Vb[Lb];
        for (let wb = 0; wb < Vb[Lb].size; ++wb) kb(eb, bb.start + wb, bb.nx, bb.size, bb.ny, bb.nx * bb.size, tb)
      }! function(bb, wb, Mb) {
        for (let eb = 0; eb < Mb; ++eb) wb[eb] = bb[wb[eb]]
      }(Ib, eb, pb);
      let Eb = 0;
      const Fb = new Uint8Array(eb.buffer.byteLength);
      for (let Ob = 0; Ob < bb.lines; Ob++)
        for (let wb = 0; wb < bb.channels; wb++) {
          const bb = Vb[wb],
            Mb = bb.nx * bb.size,
            Hb = new Uint8Array(eb.buffer, bb.end * Lb, Mb * Lb);
          Fb.set(Hb, Eb), Eb += Mb * Lb, bb.end += Mb
        }
      return new DataView(Fb.buffer)
    }
    var pw, Vw = Mb(41771);
    ! function(bb) {
      bb[bb.Float = 0] = "Float", bb[bb.HalfFloat = 1] = "HalfFloat"
    }(pw || (pw = {}));
    class gw {}
    async function lw(bb, wb, Mb, eb) {
      const Hb = {
        size: 0,
        viewer: wb,
        array: new Uint8Array(wb.buffer),
        offset: Mb,
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
        case hb.NO_COMPRESSION:
          Hb.lines = 1, Hb.uncompress = bw;
          break;
        case hb.RLE_COMPRESSION:
          Hb.lines = 1, Hb.uncompress = ww;
          break;
        case hb.ZIPS_COMPRESSION:
          Hb.lines = 1, Hb.uncompress = Mw, await Vw.e.LoadScriptAsync(gw.FFLATEUrl);
          break;
        case hb.ZIP_COMPRESSION:
          Hb.lines = 16, Hb.uncompress = Mw, await Vw.e.LoadScriptAsync(gw.FFLATEUrl);
          break;
        case hb.PIZ_COMPRESSION:
          Hb.lines = 32, Hb.uncompress = Hw;
          break;
        case hb.PXR24_COMPRESSION:
          Hb.lines = 16, Hb.uncompress = ew, await Vw.e.LoadScriptAsync(gw.FFLATEUrl);
          break;
        default:
          throw new Error(hb[bb.compression] + " is unsupported")
      }
      Hb.scanlineBlockSize = Hb.lines;
      const pb = {};
      for (const gb of bb.channels) switch (gb.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          pb[gb.name] = !0, Hb.type = gb.pixelType
      }
      let Vb = !1;
      if (pb.R && pb.G && pb.B && pb.A) Hb.outputChannels = 4, Hb.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (pb.R && pb.G && pb.B) Vb = !0, Hb.outputChannels = 4, Hb.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (pb.R && pb.G) Hb.outputChannels = 2, Hb.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (pb.R) Hb.outputChannels = 1, Hb.decodeChannels = {
        R: 0
      };
      else {
        if (!pb.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        Hb.outputChannels = 1, Hb.decodeChannels = {
          Y: 0
        }
      }
      if (1 === Hb.type) switch (eb) {
        case pw.Float:
          Hb.getter = Yb, Hb.inputSize = Lb;
          break;
        case pw.HalfFloat:
          Hb.getter = rb, Hb.inputSize = Lb
      } else {
        if (2 !== Hb.type) throw new Error("Unsupported pixelType " + Hb.type + " for " + bb.compression);
        switch (eb) {
          case pw.Float:
            Hb.getter = cb, Hb.inputSize = gb;
            break;
          case pw.HalfFloat:
            Hb.getter = Zb, Hb.inputSize = gb
        }
      }
      Hb.blockCount = Hb.height / Hb.scanlineBlockSize;
      for (let gb = 0; gb < Hb.blockCount; gb++) Db(wb, Mb);
      const lb = Hb.width * Hb.height * Hb.outputChannels;
      switch (eb) {
        case pw.Float:
          Hb.byteArray = new Float32Array(lb), Hb.textureType = 1, Vb && Hb.byteArray.fill(1, 0, lb);
          break;
        case pw.HalfFloat:
          Hb.byteArray = new Uint16Array(lb), Hb.textureType = 2, Vb && Hb.byteArray.fill(15360, 0, lb);
          break;
        default:
          throw new Error("Unsupported type: " + eb)
      }
      let Ib = 0;
      for (const gb of bb.channels) void 0 !== Hb.decodeChannels[gb.name] && (Hb.channelLineOffsets[gb.name] = Ib * Hb.width), Ib += 2 * gb.pixelType;
      return Hb.bytesPerLine = Hb.width * Ib, Hb.outLineWidth = Hb.width * Hb.outputChannels, "INCREASING_Y" === bb.lineOrder ? Hb.scanOrder = bb => bb : Hb.scanOrder = bb => Hb.height - 1 - bb, 4 == Hb.outputChannels ? (Hb.format = 5, Hb.linearSpace = !0) : (Hb.format = 6, Hb.linearSpace = !1), Hb
    }

    function Lw(bb, wb, Mb, eb) {
      const Hb = {
        value: 0
      };
      for (let pb = 0; pb < bb.height / bb.scanlineBlockSize; pb++) {
        const Vb = xb(Mb, eb) - wb.dataWindow.yMin;
        bb.size = jb(Mb, eb), bb.lines = Vb + bb.scanlineBlockSize > bb.height ? bb.height - Vb : bb.scanlineBlockSize;
        const gb = bb.size < bb.lines * bb.bytesPerLine && bb.uncompress ? bb.uncompress(bb) : bw(bb);
        eb.value += bb.size;
        for (let Mb = 0; Mb < bb.scanlineBlockSize; Mb++) {
          const eb = pb * bb.scanlineBlockSize,
            Vb = Mb + bb.scanOrder(eb);
          if (Vb >= bb.height) continue;
          const lb = Mb * bb.bytesPerLine,
            Lb = (bb.height - 1 - Vb) * bb.outLineWidth;
          for (let Mb = 0; Mb < bb.channels; Mb++) {
            const eb = wb.channels[Mb].name,
              pb = bb.channelLineOffsets[eb],
              Vb = bb.decodeChannels[eb];
            if (void 0 !== Vb) {
              Hb.value = lb + pb;
              for (let wb = 0; wb < bb.width; wb++) {
                const Mb = Lb + wb * bb.outputChannels + Vb;
                bb.byteArray && (bb.byteArray[Mb] = bb.getter(gb, Hb))
              }
            }
          }
        }
      }
    }
    gw.DefaultOutputType = pw.HalfFloat, gw.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class Iw {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(bb, wb, Mb, eb, Hb) {
        throw ".exr not supported in Cube."
      }
      loadData(bb, wb, Mb) {
        const Hb = new DataView(bb.buffer),
          pb = {
            value: 0
          },
          Vb = Sb(Hb, pb);
        lw(Vb, Hb, pb, gw.DefaultOutputType).then((bb => {
          Lw(bb, Vb, Hb, pb);
          const eb = Vb.dataWindow.xMax - Vb.dataWindow.xMin + 1,
            gb = Vb.dataWindow.yMax - Vb.dataWindow.yMin + 1;
          Mb(eb, gb, wb.generateMipMaps, !1, (() => {
            const Mb = wb.DC();
            wb.format = Vb.format, wb.type = bb.textureType, wb.invertY = !1, wb._gammaSpace = !Vb.linearSpace, bb.byteArray && Mb._uploadDataToTextureDirectly(wb, bb.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((bb => {
          eb.b.Error("Failed to load EXR texture: ", bb)
        }))
      }
    }
    async function Ow(bb) {
      const wb = new DataView(bb),
        Mb = {
          value: 0
        },
        Hb = Sb(wb, Mb);
      try {
        const bb = await lw(Hb, wb, Mb, pw.Float);
        return Lw(bb, Hb, wb, Mb), bb.byteArray ? {
          width: Hb.dataWindow.xMax - Hb.dataWindow.xMin + 1,
          height: Hb.dataWindow.yMax - Hb.dataWindow.yMin + 1,
          data: new Float32Array(bb.byteArray)
        } : (eb.b.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (pb) {
        eb.b.Error("Failed to load EXR data: ", pb)
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