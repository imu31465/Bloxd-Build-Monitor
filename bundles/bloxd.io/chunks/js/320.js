export const id = 320;
export const ids = [320];
export const modules = {
  42118: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      ReadExrDataAsync: () => le,
      _ExrTextureLoader: () => Qe
    });
    var Ot = Vt(38899),
      qt = Vt(37372),
      Dt = Vt(40272);
    const mt = 4,
      dt = 4,
      jt = 1,
      Ht = 2,
      Xt = 8,
      Qt = 65536,
      lt = Qt >> 3,
      Et = 14,
      ft = 65537,
      wt = 1 << Et,
      yt = wt - 1,
      Nt = 59,
      Mt = 63,
      bt = 2 + Mt - Nt;
    var Jt, Ct;

    function ut(tt, et) {
      const Vt = new Uint8Array(tt);
      let Ot = 0;
      for (; 0 != Vt[et.value + Ot];) Ot += 1;
      const qt = (new TextDecoder).decode(Vt.slice(et.value, et.value + Ot));
      return et.value = et.value + Ot + 1, qt
    }

    function Kt(tt, et) {
      const Vt = tt.getInt32(et.value, !0);
      return et.value += mt, Vt
    }

    function ht(tt, et) {
      const Vt = tt.getUint32(et.value, !0);
      return et.value += mt, Vt
    }

    function vt(tt, et) {
      const Vt = tt.getUint8(et.value);
      return et.value += jt, Vt
    }

    function Wt(tt, et) {
      const Vt = tt.getUint16(et.value, !0);
      return et.value += Ht, Vt
    }

    function St(tt, et) {
      const Vt = tt[et.value];
      return et.value += jt, Vt
    }

    function ct(tt, et) {
      let Vt;
      return Vt = "getBigInt64" in DataView.prototype ? Number(tt.getBigInt64(et.value, !0)) : tt.getUint32(et.value + 4, !0) + Number(tt.getUint32(et.value, !0) << 32), et.value += Xt, Vt
    }

    function Rt(tt, et) {
      const Vt = tt.getFloat32(et.value, !0);
      return et.value += dt, Vt
    }

    function It(tt, et) {
      return (0, Dt.e)(Wt(tt, et))
    }

    function Pt(tt, et) {
      return (0, Dt.k)((0, qt.Clamp)(Rt(tt, et), -Dt.i, Dt.i))
    }

    function Zt(tt, et, Vt, Ot) {
      switch (Vt) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(tt, et, Vt) {
            const Ot = (new TextDecoder).decode(new Uint8Array(tt).slice(et.value, et.value + Vt));
            return et.value = et.value + Vt, Ot
          }(tt.buffer, et, Ot);
        case "chlist":
          return function(tt, et, Vt) {
            const Ot = et.value,
              qt = [];
            for (; et.value < Ot + Vt - 1;) {
              const Vt = ut(tt.buffer, et),
                Ot = Kt(tt, et),
                Dt = vt(tt, et);
              et.value += 3;
              const mt = Kt(tt, et),
                dt = Kt(tt, et);
              qt.push({
                name: Vt,
                pixelType: Ot,
                pLinear: Dt,
                xSampling: mt,
                ySampling: dt
              })
            }
            return et.value += 1, qt
          }(tt, et, Ot);
        case "chromaticities":
          return function(tt, et) {
            return {
              redX: Rt(tt, et),
              redY: Rt(tt, et),
              greenX: Rt(tt, et),
              greenY: Rt(tt, et),
              blueX: Rt(tt, et),
              blueY: Rt(tt, et),
              whiteX: Rt(tt, et),
              whiteY: Rt(tt, et)
            }
          }(tt, et);
        case "compression":
          return function(tt, et) {
            return vt(tt, et)
          }(tt, et);
        case "box2i":
          return function(tt, et) {
            return {
              xMin: Kt(tt, et),
              yMin: Kt(tt, et),
              xMax: Kt(tt, et),
              yMax: Kt(tt, et)
            }
          }(tt, et);
        case "lineOrder":
          return function(tt, et) {
            const Vt = vt(tt, et);
            return Ct[Vt]
          }(tt, et);
        case "float":
          return Rt(tt, et);
        case "v2f":
          return function(tt, et) {
            return [Rt(tt, et), Rt(tt, et)]
          }(tt, et);
        case "v3f":
          return function(tt, et) {
            return [Rt(tt, et), Rt(tt, et), Rt(tt, et)]
          }(tt, et);
        case "int":
          return Kt(tt, et);
        case "rational":
          return function(tt, et) {
            return [Kt(tt, et), ht(tt, et)]
          }(tt, et);
        case "timecode":
          return function(tt, et) {
            return [ht(tt, et), ht(tt, et)]
          }(tt, et);
        case "preview":
          return et.value += Ot, "skipped";
        default:
          return void(et.value += Ot)
      }
    }

    function Lt(tt) {
      for (let et = 1; et < tt.length; et++) {
        const Vt = tt[et - 1] + tt[et] - 128;
        tt[et] = Vt
      }
    }

    function Ft(tt, et) {
      let Vt = 0,
        Ot = Math.floor((tt.length + 1) / 2),
        qt = 0;
      const Dt = tt.length - 1;
      for (; !(qt > Dt) && (et[qt++] = tt[Vt++], !(qt > Dt));) et[qt++] = tt[Ot++]
    }! function(tt) {
      tt[tt.NO_COMPRESSION = 0] = "NO_COMPRESSION", tt[tt.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", tt[tt.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", tt[tt.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", tt[tt.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", tt[tt.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(Jt || (Jt = {})),
    function(tt) {
      tt[tt.INCREASING_Y = 0] = "INCREASING_Y", tt[tt.DECREASING_Y = 1] = "DECREASING_Y"
    }(Ct || (Ct = {}));
    const kt = 20000630;

    function Gt(tt, et) {
      if (tt.getUint32(0, !0) != kt) throw new Error("Incorrect OpenEXR format");
      const Vt = tt.getUint8(4),
        qt = tt.getUint8(5),
        Dt = {
          singleTile: !!(2 & qt),
          longName: !!(4 & qt),
          deepFormat: !!(8 & qt),
          multiPart: !!(16 & qt)
        };
      et.value = 8;
      const mt = {};
      let dt = !0;
      for (; dt;) {
        const Vt = ut(tt.buffer, et);
        if (Vt) {
          const qt = ut(tt.buffer, et),
            Dt = Zt(tt, et, qt, ht(tt, et));
          void 0 === Dt ? Ot.d.Warn(`Unknown header attribute type ${qt}'.`) : mt[Vt] = Dt
        } else dt = !1
      }
      if (0 != (-5 & qt)) throw new Error("Unsupported file format");
      return {
        version: Vt,
        spec: Dt,
        ...mt
      }
    }
    const zt = 32768,
      ot = 65535;

    function rt(tt, et, Vt, Ot, qt) {
      for (; Vt < tt;) et = et << 8 | St(Ot, qt), Vt += 8;
      return {
        l: et >> (Vt -= tt) & (1 << tt) - 1,
        c: et,
        lc: Vt
      }
    }

    function Ut(tt, et, Vt, Ot) {
      return {
        c: tt = tt << 8 | St(Vt, Ot),
        lc: et += 8
      }
    }

    function At(tt, et, Vt, Ot, qt, Dt, mt, dt, jt) {
      if (tt == et) {
        if (Ot < 8) {
          const tt = Ut(Vt, Ot, qt, Dt);
          Vt = tt.c, Ot = tt.lc
        }
        let tt = Vt >> (Ot -= 8);
        if (tt = new Uint8Array([tt])[0], dt.value + tt > jt) return null;
        const et = mt[dt.value - 1];
        for (; tt-- > 0;) mt[dt.value++] = et
      } else {
        if (!(dt.value < jt)) return null;
        mt[dt.value++] = tt
      }
      return {
        c: Vt,
        lc: Ot
      }
    }
    const it = new Array(59);

    function Yt(tt, et, Vt, Ot, qt, Dt) {
      const mt = et;
      let dt = 0,
        jt = 0;
      for (; Ot <= qt; Ot++) {
        if (mt.value - et.value > Vt) return;
        let Ht = rt(6, dt, jt, tt, mt);
        const Xt = Ht.l;
        if (dt = Ht.c, jt = Ht.lc, Dt[Ot] = Xt, Xt == Mt) {
          if (mt.value - et.value > Vt) throw new Error("Error in HufUnpackEncTable");
          Ht = rt(8, dt, jt, tt, mt);
          let Xt = Ht.l + bt;
          if (dt = Ht.c, jt = Ht.lc, Ot + Xt > qt + 1) throw new Error("Error in HufUnpackEncTable");
          for (; Xt--;) Dt[Ot++] = 0;
          Ot--
        } else if (Xt >= Nt) {
          let tt = Xt - Nt + 2;
          if (Ot + tt > qt + 1) throw new Error("Error in HufUnpackEncTable");
          for (; tt--;) Dt[Ot++] = 0;
          Ot--
        }
      }! function(tt) {
        for (let Vt = 0; Vt <= 58; ++Vt) it[Vt] = 0;
        for (let Vt = 0; Vt < ft; ++Vt) it[tt[Vt]] += 1;
        let et = 0;
        for (let Vt = 58; Vt > 0; --Vt) {
          const tt = et + it[Vt] >> 1;
          it[Vt] = et, et = tt
        }
        for (let Vt = 0; Vt < ft; ++Vt) {
          const et = tt[Vt];
          et > 0 && (tt[Vt] = et | it[et]++ << 6)
        }
      }(Dt)
    }

    function Bt(tt) {
      return 63 & tt
    }

    function pt(tt) {
      return tt >> 6
    }

    function xt(tt, et, Vt, Ot, qt, Dt) {
      const mt = Vt.value,
        dt = ht(et, Vt),
        jt = ht(et, Vt);
      Vt.value += 4;
      const Ht = ht(et, Vt);
      if (Vt.value += 4, dt < 0 || dt >= ft || jt < 0 || jt >= ft) throw new Error("Wrong HUF_ENCSIZE");
      const Xt = new Array(ft),
        Qt = new Array(wt);
      ! function(tt) {
        for (let et = 0; et < wt; et++) tt[et] = {}, tt[et].len = 0, tt[et].lit = 0, tt[et].p = null
      }(Qt);
      if (Yt(tt, Vt, Ot - (Vt.value - mt), dt, jt, Xt), Ht > 8 * (Ot - (Vt.value - mt))) throw new Error("Wrong hufUncompress");
      ! function(tt, et, Vt, Ot) {
        for (; et <= Vt; et++) {
          const Vt = pt(tt[et]),
            qt = Bt(tt[et]);
          if (Vt >> qt) throw new Error("Invalid table entry");
          if (qt > Et) {
            const tt = Ot[Vt >> qt - Et];
            if (tt.len) throw new Error("Invalid table entry");
            if (tt.lit++, tt.p) {
              const et = tt.p;
              tt.p = new Array(tt.lit);
              for (let Vt = 0; Vt < tt.lit - 1; ++Vt) tt.p[Vt] = et[Vt]
            } else tt.p = new Array(1);
            tt.p[tt.lit - 1] = et
          } else if (qt) {
            let tt = 0;
            for (let Dt = 1 << Et - qt; Dt > 0; Dt--) {
              const Dt = Ot[(Vt << Et - qt) + tt];
              if (Dt.len || Dt.p) throw new Error("Invalid table entry");
              Dt.len = qt, Dt.lit = et, tt++
            }
          }
        }
      }(Xt, dt, jt, Qt),
      function(tt, et, Vt, Ot, qt, Dt, mt, dt, jt) {
        let Ht = 0,
          Xt = 0;
        const Qt = mt,
          lt = Math.trunc(Ot.value + (qt + 7) / 8);
        for (; Ot.value < lt;) {
          let qt = Ut(Ht, Xt, Vt, Ot);
          for (Ht = qt.c, Xt = qt.lc; Xt >= Et;) {
            const mt = et[Ht >> Xt - Et & yt];
            if (mt.len) {
              Xt -= mt.len;
              const tt = At(mt.lit, Dt, Ht, Xt, Vt, Ot, dt, jt, Qt);
              tt && (Ht = tt.c, Xt = tt.lc)
            } else {
              if (!mt.p) throw new Error("hufDecode issues");
              let et;
              for (et = 0; et < mt.lit; et++) {
                const Et = Bt(tt[mt.p[et]]);
                for (; Xt < Et && Ot.value < lt;) qt = Ut(Ht, Xt, Vt, Ot), Ht = qt.c, Xt = qt.lc;
                if (Xt >= Et && pt(tt[mt.p[et]]) == (Ht >> Xt - Et & (1 << Et) - 1)) {
                  Xt -= Et;
                  const tt = At(mt.p[et], Dt, Ht, Xt, Vt, Ot, dt, jt, Qt);
                  tt && (Ht = tt.c, Xt = tt.lc);
                  break
                }
              }
              if (et == mt.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const ft = 8 - qt & 7;
        for (Ht >>= ft, Xt -= ft; Xt > 0;) {
          const tt = et[Ht << Et - Xt & yt];
          if (!tt.len) throw new Error("HufDecode issues");
          {
            Xt -= tt.len;
            const et = At(tt.lit, Dt, Ht, Xt, Vt, Ot, dt, jt, Qt);
            et && (Ht = et.c, Xt = et.lc)
          }
        }
      }(Xt, Qt, tt, Vt, Ht, jt, Dt, qt, {
        value: 0
      })
    }

    function Tt(tt) {
      return 65535 & tt
    }

    function gt(tt) {
      const et = Tt(tt);
      return et > 32767 ? et - 65536 : et
    }

    function st(tt, et) {
      const Vt = gt(tt),
        Ot = gt(et),
        qt = Vt + (1 & Ot) + (Ot >> 1);
      return {
        a: qt,
        b: qt - Ot
      }
    }

    function nt(tt, et) {
      const Vt = Tt(tt),
        Ot = Tt(et),
        qt = Vt - (Ot >> 1) & ot;
      return {
        a: Ot + qt - zt & ot,
        b: qt
      }
    }

    function te(tt, et, Vt, Ot, qt, Dt, mt) {
      const dt = mt < 16384,
        jt = Vt > qt ? qt : Vt;
      let Ht, Xt, Qt = 1;
      for (; Qt <= jt;) Qt <<= 1;
      for (Qt >>= 1, Ht = Qt, Qt >>= 1; Qt >= 1;) {
        Xt = 0;
        const mt = Xt + Dt * (qt - Ht),
          jt = Dt * Qt,
          lt = Dt * Ht,
          Et = Ot * Qt,
          ft = Ot * Ht;
        let wt, yt, Nt, Mt;
        for (; Xt <= mt; Xt += lt) {
          let qt = Xt;
          const Dt = Xt + Ot * (Vt - Ht);
          for (; qt <= Dt; qt += ft) {
            const Vt = qt + Et,
              Ot = qt + jt,
              Dt = Ot + Et;
            if (dt) {
              let mt = st(tt[qt + et], tt[Ot + et]);
              wt = mt.a, Nt = mt.b, mt = st(tt[Vt + et], tt[Dt + et]), yt = mt.a, Mt = mt.b, mt = st(wt, yt), tt[qt + et] = mt.a, tt[Vt + et] = mt.b, mt = st(Nt, Mt), tt[Ot + et] = mt.a, tt[Dt + et] = mt.b
            } else {
              let mt = nt(tt[qt + et], tt[Ot + et]);
              wt = mt.a, Nt = mt.b, mt = nt(tt[Vt + et], tt[Dt + et]), yt = mt.a, Mt = mt.b, mt = nt(wt, yt), tt[qt + et] = mt.a, tt[Vt + et] = mt.b, mt = nt(Nt, Mt), tt[Ot + et] = mt.a, tt[Dt + et] = mt.b
            }
          }
          if (Vt & Qt) {
            const Vt = qt + jt;
            let Ot;
            Ot = dt ? st(tt[qt + et], tt[Vt + et]) : nt(tt[qt + et], tt[Vt + et]), wt = Ot.a, tt[Vt + et] = Ot.b, tt[qt + et] = wt
          }
        }
        if (qt & Qt) {
          let qt = Xt;
          const Dt = Xt + Ot * (Vt - Ht);
          for (; qt <= Dt; qt += ft) {
            const Vt = qt + Et;
            let Ot;
            Ot = dt ? st(tt[qt + et], tt[Vt + et]) : nt(tt[qt + et], tt[Vt + et]), wt = Ot.a, tt[Vt + et] = Ot.b, tt[qt + et] = wt
          }
        }
        Ht = Qt, Qt >>= 1
      }
      return Xt
    }

    function ee(tt) {
      return new DataView(tt.array.buffer, tt.offset.value, tt.size)
    }

    function Ve(tt) {
      const et = tt.viewer.buffer.slice(tt.offset.value, tt.offset.value + tt.size),
        Vt = new Uint8Array(function(tt) {
          let et = tt.byteLength;
          const Vt = [];
          let Ot = 0;
          const qt = new DataView(tt);
          for (; et > 0;) {
            const tt = qt.getInt8(Ot++);
            if (tt < 0) {
              const Dt = -tt;
              et -= Dt + 1;
              for (let tt = 0; tt < Dt; tt++) Vt.push(qt.getUint8(Ot++))
            } else {
              const Dt = tt;
              et -= 2;
              const mt = qt.getUint8(Ot++);
              for (let tt = 0; tt < Dt + 1; tt++) Vt.push(mt)
            }
          }
          return Vt
        }(et)),
        Ot = new Uint8Array(Vt.length);
      return Lt(Vt), Ft(Vt, Ot), new DataView(Ot.buffer)
    }

    function Oe(tt) {
      const et = tt.array.slice(tt.offset.value, tt.offset.value + tt.size),
        Vt = fflate.unzlibSync(et),
        Ot = new Uint8Array(Vt.length);
      return Lt(Vt), Ft(Vt, Ot), new DataView(Ot.buffer)
    }

    function qe(tt) {
      const et = tt.array.slice(tt.offset.value, tt.offset.value + tt.size),
        Vt = fflate.unzlibSync(et),
        Ot = tt.lines * tt.channels * tt.width,
        qt = 1 == tt.type ? new Uint16Array(Ot) : new Uint32Array(Ot);
      let Dt = 0,
        mt = 0;
      const dt = new Array(4);
      for (let jt = 0; jt < tt.lines; jt++)
        for (let et = 0; et < tt.channels; et++) {
          let et = 0;
          switch (tt.type) {
            case 1:
              dt[0] = Dt, dt[1] = dt[0] + tt.width, Dt = dt[1] + tt.width;
              for (let Ot = 0; Ot < tt.width; ++Ot) {
                et += Vt[dt[0]++] << 8 | Vt[dt[1]++], qt[mt] = et, mt++
              }
              break;
            case 2:
              dt[0] = Dt, dt[1] = dt[0] + tt.width, dt[2] = dt[1] + tt.width, Dt = dt[2] + tt.width;
              for (let Ot = 0; Ot < tt.width; ++Ot) {
                et += Vt[dt[0]++] << 24 | Vt[dt[1]++] << 16 | Vt[dt[2]++] << 8, qt[mt] = et, mt++
              }
          }
        }
      return new DataView(qt.buffer)
    }

    function De(tt) {
      const et = tt.viewer,
        Vt = {
          value: tt.offset.value
        },
        Ot = new Uint16Array(tt.width * tt.scanlineBlockSize * (tt.channels * tt.type)),
        qt = new Uint8Array(lt);
      let Dt = 0;
      const mt = new Array(tt.channels);
      for (let Ht = 0; Ht < tt.channels; Ht++) mt[Ht] = {}, mt[Ht].start = Dt, mt[Ht].end = mt[Ht].start, mt[Ht].nx = tt.width, mt[Ht].ny = tt.lines, mt[Ht].size = tt.type, Dt += mt[Ht].nx * mt[Ht].ny * mt[Ht].size;
      const dt = Wt(et, Vt),
        jt = Wt(et, Vt);
      if (jt >= lt) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (dt <= jt)
        for (let Ht = 0; Ht < jt - dt + 1; Ht++) qt[Ht + dt] = vt(et, Vt);
      const Xt = new Uint16Array(Qt),
        Et = function(tt, et) {
          let Vt = 0;
          for (let qt = 0; qt < Qt; ++qt)(0 == qt || tt[qt >> 3] & 1 << (7 & qt)) && (et[Vt++] = qt);
          const Ot = Vt - 1;
          for (; Vt < Qt;) et[Vt++] = 0;
          return Ot
        }(qt, Xt),
        ft = ht(et, Vt);
      xt(tt.array, et, Vt, ft, Ot, Dt);
      for (let Ht = 0; Ht < tt.channels; ++Ht) {
        const tt = mt[Ht];
        for (let et = 0; et < mt[Ht].size; ++et) te(Ot, tt.start + et, tt.nx, tt.size, tt.ny, tt.nx * tt.size, Et)
      }! function(tt, et, Vt) {
        for (let Ot = 0; Ot < Vt; ++Ot) et[Ot] = tt[et[Ot]]
      }(Xt, Ot, Dt);
      let wt = 0;
      const yt = new Uint8Array(Ot.buffer.byteLength);
      for (let Qt = 0; Qt < tt.lines; Qt++)
        for (let et = 0; et < tt.channels; et++) {
          const tt = mt[et],
            Vt = tt.nx * tt.size,
            qt = new Uint8Array(Ot.buffer, tt.end * Ht, Vt * Ht);
          yt.set(qt, wt), wt += Vt * Ht, tt.end += Vt
        }
      return new DataView(yt.buffer)
    }
    var me, de = Vt(40300);
    ! function(tt) {
      tt[tt.Float = 0] = "Float", tt[tt.HalfFloat = 1] = "HalfFloat"
    }(me || (me = {}));
    class je {}
    async function He(tt, et, Vt, Ot) {
      const qt = {
        size: 0,
        viewer: et,
        array: new Uint8Array(et.buffer),
        offset: Vt,
        width: tt.dataWindow.xMax - tt.dataWindow.xMin + 1,
        height: tt.dataWindow.yMax - tt.dataWindow.yMin + 1,
        channels: tt.channels.length,
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
      switch (tt.compression) {
        case Jt.NO_COMPRESSION:
          qt.lines = 1, qt.uncompress = ee;
          break;
        case Jt.RLE_COMPRESSION:
          qt.lines = 1, qt.uncompress = Ve;
          break;
        case Jt.ZIPS_COMPRESSION:
          qt.lines = 1, qt.uncompress = Oe, await de.l.LoadScriptAsync(je.FFLATEUrl);
          break;
        case Jt.ZIP_COMPRESSION:
          qt.lines = 16, qt.uncompress = Oe, await de.l.LoadScriptAsync(je.FFLATEUrl);
          break;
        case Jt.PIZ_COMPRESSION:
          qt.lines = 32, qt.uncompress = De;
          break;
        case Jt.PXR24_COMPRESSION:
          qt.lines = 16, qt.uncompress = qe, await de.l.LoadScriptAsync(je.FFLATEUrl);
          break;
        default:
          throw new Error(Jt[tt.compression] + " is unsupported")
      }
      qt.scanlineBlockSize = qt.lines;
      const Dt = {};
      for (const dt of tt.channels) switch (dt.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          Dt[dt.name] = !0, qt.type = dt.pixelType
      }
      let mt = !1;
      if (Dt.R && Dt.G && Dt.B && Dt.A) qt.outputChannels = 4, qt.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (Dt.R && Dt.G && Dt.B) mt = !0, qt.outputChannels = 4, qt.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (Dt.R && Dt.G) qt.outputChannels = 2, qt.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (Dt.R) qt.outputChannels = 1, qt.decodeChannels = {
        R: 0
      };
      else {
        if (!Dt.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        qt.outputChannels = 1, qt.decodeChannels = {
          Y: 0
        }
      }
      if (1 === qt.type) switch (Ot) {
        case me.Float:
          qt.getter = It, qt.inputSize = Ht;
          break;
        case me.HalfFloat:
          qt.getter = Wt, qt.inputSize = Ht
      } else {
        if (2 !== qt.type) throw new Error("Unsupported pixelType " + qt.type + " for " + tt.compression);
        switch (Ot) {
          case me.Float:
            qt.getter = Rt, qt.inputSize = dt;
            break;
          case me.HalfFloat:
            qt.getter = Pt, qt.inputSize = dt
        }
      }
      qt.blockCount = qt.height / qt.scanlineBlockSize;
      for (let dt = 0; dt < qt.blockCount; dt++) ct(et, Vt);
      const jt = qt.width * qt.height * qt.outputChannels;
      switch (Ot) {
        case me.Float:
          qt.byteArray = new Float32Array(jt), qt.textureType = 1, mt && qt.byteArray.fill(1, 0, jt);
          break;
        case me.HalfFloat:
          qt.byteArray = new Uint16Array(jt), qt.textureType = 2, mt && qt.byteArray.fill(15360, 0, jt);
          break;
        default:
          throw new Error("Unsupported type: " + Ot)
      }
      let Xt = 0;
      for (const dt of tt.channels) void 0 !== qt.decodeChannels[dt.name] && (qt.channelLineOffsets[dt.name] = Xt * qt.width), Xt += 2 * dt.pixelType;
      return qt.bytesPerLine = qt.width * Xt, qt.outLineWidth = qt.width * qt.outputChannels, "INCREASING_Y" === tt.lineOrder ? qt.scanOrder = tt => tt : qt.scanOrder = tt => qt.height - 1 - tt, 4 == qt.outputChannels ? (qt.format = 5, qt.linearSpace = !0) : (qt.format = 6, qt.linearSpace = !1), qt
    }

    function Xe(tt, et, Vt, Ot) {
      const qt = {
        value: 0
      };
      for (let Dt = 0; Dt < tt.height / tt.scanlineBlockSize; Dt++) {
        const mt = Kt(Vt, Ot) - et.dataWindow.yMin;
        tt.size = ht(Vt, Ot), tt.lines = mt + tt.scanlineBlockSize > tt.height ? tt.height - mt : tt.scanlineBlockSize;
        const dt = tt.size < tt.lines * tt.bytesPerLine && tt.uncompress ? tt.uncompress(tt) : ee(tt);
        Ot.value += tt.size;
        for (let Vt = 0; Vt < tt.scanlineBlockSize; Vt++) {
          const Ot = Dt * tt.scanlineBlockSize,
            mt = Vt + tt.scanOrder(Ot);
          if (mt >= tt.height) continue;
          const jt = Vt * tt.bytesPerLine,
            Ht = (tt.height - 1 - mt) * tt.outLineWidth;
          for (let Vt = 0; Vt < tt.channels; Vt++) {
            const Ot = et.channels[Vt].name,
              Dt = tt.channelLineOffsets[Ot],
              mt = tt.decodeChannels[Ot];
            if (void 0 !== mt) {
              qt.value = jt + Dt;
              for (let et = 0; et < tt.width; et++) {
                const Vt = Ht + et * tt.outputChannels + mt;
                tt.byteArray && (tt.byteArray[Vt] = tt.getter(dt, qt))
              }
            }
          }
        }
      }
    }
    je.DefaultOutputType = me.HalfFloat, je.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class Qe {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(tt, et, Vt, Ot, qt) {
        throw ".exr not supported in Cube."
      }
      loadData(tt, et, Vt) {
        const qt = new DataView(tt.buffer),
          Dt = {
            value: 0
          },
          mt = Gt(qt, Dt);
        He(mt, qt, Dt, je.DefaultOutputType).then((tt => {
          Xe(tt, mt, qt, Dt);
          const Ot = mt.dataWindow.xMax - mt.dataWindow.xMin + 1,
            dt = mt.dataWindow.yMax - mt.dataWindow.yMin + 1;
          Vt(Ot, dt, et.generateMipMaps, !1, (() => {
            const Vt = et.Jf();
            et.format = mt.format, et.type = tt.textureType, et.invertY = !1, et._gammaSpace = !mt.linearSpace, tt.byteArray && Vt._uploadDataToTextureDirectly(et, tt.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((tt => {
          Ot.d.Error("Failed to load EXR texture: ", tt)
        }))
      }
    }
    async function le(tt) {
      const et = new DataView(tt),
        Vt = {
          value: 0
        },
        qt = Gt(et, Vt);
      try {
        const tt = await He(qt, et, Vt, me.Float);
        return Xe(tt, qt, et, Vt), tt.byteArray ? {
          width: qt.dataWindow.xMax - qt.dataWindow.xMin + 1,
          height: qt.dataWindow.yMax - qt.dataWindow.yMin + 1,
          data: new Float32Array(tt.byteArray)
        } : (Ot.d.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (Dt) {
        Ot.d.Error("Failed to load EXR data: ", Dt)
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
for (const tt in modules) Object.freeze(modules[tt]);