export const id = 306;
export const ids = [306];
export const modules = {
  41829: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      ReadExrDataAsync: () => lJ,
      _ExrTextureLoader: () => oJ
    });
    var pd = kd(38812),
      Nd = kd(37289),
      Wd = kd(40037);
    const Pd = 4,
      Zd = 4,
      gd = 1,
      Cd = 2,
      Kd = 8,
      od = 65536,
      ld = od >> 3,
      Qd = 14,
      Ld = 65537,
      Od = 1 << Qd,
      ed = Od - 1,
      Rd = 59,
      Id = 63,
      Gd = 2 + Id - Rd;
    var vd, xd;

    function qd(dd, Jd) {
      const kd = new Uint8Array(dd);
      let pd = 0;
      for (; 0 != kd[Jd.value + pd];) pd += 1;
      const Nd = (new TextDecoder).decode(kd.slice(Jd.value, Jd.value + pd));
      return Jd.value = Jd.value + pd + 1, Nd
    }

    function Bd(dd, Jd) {
      const kd = dd.getInt32(Jd.value, !0);
      return Jd.value += Pd, kd
    }

    function sd(dd, Jd) {
      const kd = dd.getUint32(Jd.value, !0);
      return Jd.value += Pd, kd
    }

    function ad(dd, Jd) {
      const kd = dd.getUint8(Jd.value);
      return Jd.value += gd, kd
    }

    function Md(dd, Jd) {
      const kd = dd.getUint16(Jd.value, !0);
      return Jd.value += Cd, kd
    }

    function Fd(dd, Jd) {
      const kd = dd[Jd.value];
      return Jd.value += gd, kd
    }

    function Yd(dd, Jd) {
      let kd;
      return kd = "getBigInt64" in DataView.prototype ? Number(dd.getBigInt64(Jd.value, !0)) : dd.getUint32(Jd.value + 4, !0) + Number(dd.getUint32(Jd.value, !0) << 32), Jd.value += Kd, kd
    }

    function md(dd, Jd) {
      const kd = dd.getFloat32(Jd.value, !0);
      return Jd.value += Zd, kd
    }

    function bd(dd, Jd) {
      return (0, Wd.e)(Md(dd, Jd))
    }

    function Sd(dd, Jd) {
      return (0, Wd.l)((0, Nd.Clamp)(md(dd, Jd), -Wd.h, Wd.h))
    }

    function jd(dd, Jd, kd, pd) {
      switch (kd) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(dd, Jd, kd) {
            const pd = (new TextDecoder).decode(new Uint8Array(dd).slice(Jd.value, Jd.value + kd));
            return Jd.value = Jd.value + kd, pd
          }(dd.buffer, Jd, pd);
        case "chlist":
          return function(dd, Jd, kd) {
            const pd = Jd.value,
              Nd = [];
            for (; Jd.value < pd + kd - 1;) {
              const kd = qd(dd.buffer, Jd),
                pd = Bd(dd, Jd),
                Wd = ad(dd, Jd);
              Jd.value += 3;
              const Pd = Bd(dd, Jd),
                Zd = Bd(dd, Jd);
              Nd.push({
                name: kd,
                pixelType: pd,
                pLinear: Wd,
                xSampling: Pd,
                ySampling: Zd
              })
            }
            return Jd.value += 1, Nd
          }(dd, Jd, pd);
        case "chromaticities":
          return function(dd, Jd) {
            return {
              redX: md(dd, Jd),
              redY: md(dd, Jd),
              greenX: md(dd, Jd),
              greenY: md(dd, Jd),
              blueX: md(dd, Jd),
              blueY: md(dd, Jd),
              whiteX: md(dd, Jd),
              whiteY: md(dd, Jd)
            }
          }(dd, Jd);
        case "compression":
          return function(dd, Jd) {
            return ad(dd, Jd)
          }(dd, Jd);
        case "box2i":
          return function(dd, Jd) {
            return {
              xMin: Bd(dd, Jd),
              yMin: Bd(dd, Jd),
              xMax: Bd(dd, Jd),
              yMax: Bd(dd, Jd)
            }
          }(dd, Jd);
        case "lineOrder":
          return function(dd, Jd) {
            const kd = ad(dd, Jd);
            return xd[kd]
          }(dd, Jd);
        case "float":
          return md(dd, Jd);
        case "v2f":
          return function(dd, Jd) {
            return [md(dd, Jd), md(dd, Jd)]
          }(dd, Jd);
        case "v3f":
          return function(dd, Jd) {
            return [md(dd, Jd), md(dd, Jd), md(dd, Jd)]
          }(dd, Jd);
        case "int":
          return Bd(dd, Jd);
        case "rational":
          return function(dd, Jd) {
            return [Bd(dd, Jd), sd(dd, Jd)]
          }(dd, Jd);
        case "timecode":
          return function(dd, Jd) {
            return [sd(dd, Jd), sd(dd, Jd)]
          }(dd, Jd);
        case "preview":
          return Jd.value += pd, "skipped";
        default:
          return void(Jd.value += pd)
      }
    }

    function Xd(dd) {
      for (let Jd = 1; Jd < dd.length; Jd++) {
        const kd = dd[Jd - 1] + dd[Jd] - 128;
        dd[Jd] = kd
      }
    }

    function fd(dd, Jd) {
      let kd = 0,
        pd = Math.floor((dd.length + 1) / 2),
        Nd = 0;
      const Wd = dd.length - 1;
      for (; !(Nd > Wd) && (Jd[Nd++] = dd[kd++], !(Nd > Wd));) Jd[Nd++] = dd[pd++]
    }! function(dd) {
      dd[dd.NO_COMPRESSION = 0] = "NO_COMPRESSION", dd[dd.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", dd[dd.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", dd[dd.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", dd[dd.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", dd[dd.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(vd || (vd = {})),
    function(dd) {
      dd[dd.INCREASING_Y = 0] = "INCREASING_Y", dd[dd.DECREASING_Y = 1] = "DECREASING_Y"
    }(xd || (xd = {}));
    const nd = 20000630;

    function Ud(dd, Jd) {
      if (dd.getUint32(0, !0) != nd) throw new Error("Incorrect OpenEXR format");
      const kd = dd.getUint8(4),
        Nd = dd.getUint8(5),
        Wd = {
          singleTile: !!(2 & Nd),
          longName: !!(4 & Nd),
          deepFormat: !!(8 & Nd),
          multiPart: !!(16 & Nd)
        };
      Jd.value = 8;
      const Pd = {};
      let Zd = !0;
      for (; Zd;) {
        const kd = qd(dd.buffer, Jd);
        if (kd) {
          const Nd = qd(dd.buffer, Jd),
            Wd = jd(dd, Jd, Nd, sd(dd, Jd));
          void 0 === Wd ? pd.c.Warn(`Unknown header attribute type ${Nd}'.`) : Pd[kd] = Wd
        } else Zd = !1
      }
      if (0 != (-5 & Nd)) throw new Error("Unsupported file format");
      return {
        version: kd,
        spec: Wd,
        ...Pd
      }
    }
    const yd = 32768,
      Dd = 65535;

    function Td(dd, Jd, kd, pd, Nd) {
      for (; kd < dd;) Jd = Jd << 8 | Fd(pd, Nd), kd += 8;
      return {
        l: Jd >> (kd -= dd) & (1 << dd) - 1,
        c: Jd,
        lc: kd
      }
    }

    function Ed(dd, Jd, kd, pd) {
      return {
        c: dd = dd << 8 | Fd(kd, pd),
        lc: Jd += 8
      }
    }

    function cd(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd) {
      if (dd == Jd) {
        if (pd < 8) {
          const dd = Ed(kd, pd, Nd, Wd);
          kd = dd.c, pd = dd.lc
        }
        let dd = kd >> (pd -= 8);
        if (dd = new Uint8Array([dd])[0], Zd.value + dd > gd) return null;
        const Jd = Pd[Zd.value - 1];
        for (; dd-- > 0;) Pd[Zd.value++] = Jd
      } else {
        if (!(Zd.value < gd)) return null;
        Pd[Zd.value++] = dd
      }
      return {
        c: kd,
        lc: pd
      }
    }
    const hd = new Array(59);

    function rd(dd, Jd, kd, pd, Nd, Wd) {
      const Pd = Jd;
      let Zd = 0,
        gd = 0;
      for (; pd <= Nd; pd++) {
        if (Pd.value - Jd.value > kd) return;
        let Cd = Td(6, Zd, gd, dd, Pd);
        const Kd = Cd.l;
        if (Zd = Cd.c, gd = Cd.lc, Wd[pd] = Kd, Kd == Id) {
          if (Pd.value - Jd.value > kd) throw new Error("Error in HufUnpackEncTable");
          Cd = Td(8, Zd, gd, dd, Pd);
          let Kd = Cd.l + Gd;
          if (Zd = Cd.c, gd = Cd.lc, pd + Kd > Nd + 1) throw new Error("Error in HufUnpackEncTable");
          for (; Kd--;) Wd[pd++] = 0;
          pd--
        } else if (Kd >= Rd) {
          let dd = Kd - Rd + 2;
          if (pd + dd > Nd + 1) throw new Error("Error in HufUnpackEncTable");
          for (; dd--;) Wd[pd++] = 0;
          pd--
        }
      }! function(dd) {
        for (let kd = 0; kd <= 58; ++kd) hd[kd] = 0;
        for (let kd = 0; kd < Ld; ++kd) hd[dd[kd]] += 1;
        let Jd = 0;
        for (let kd = 58; kd > 0; --kd) {
          const dd = Jd + hd[kd] >> 1;
          hd[kd] = Jd, Jd = dd
        }
        for (let kd = 0; kd < Ld; ++kd) {
          const Jd = dd[kd];
          Jd > 0 && (dd[kd] = Jd | hd[Jd]++ << 6)
        }
      }(Wd)
    }

    function ud(dd) {
      return 63 & dd
    }

    function td(dd) {
      return dd >> 6
    }

    function Vd(dd, Jd, kd, pd, Nd, Wd) {
      const Pd = kd.value,
        Zd = sd(Jd, kd),
        gd = sd(Jd, kd);
      kd.value += 4;
      const Cd = sd(Jd, kd);
      if (kd.value += 4, Zd < 0 || Zd >= Ld || gd < 0 || gd >= Ld) throw new Error("Wrong HUF_ENCSIZE");
      const Kd = new Array(Ld),
        od = new Array(Od);
      ! function(dd) {
        for (let Jd = 0; Jd < Od; Jd++) dd[Jd] = {}, dd[Jd].len = 0, dd[Jd].lit = 0, dd[Jd].p = null
      }(od);
      if (rd(dd, kd, pd - (kd.value - Pd), Zd, gd, Kd), Cd > 8 * (pd - (kd.value - Pd))) throw new Error("Wrong hufUncompress");
      ! function(dd, Jd, kd, pd) {
        for (; Jd <= kd; Jd++) {
          const kd = td(dd[Jd]),
            Nd = ud(dd[Jd]);
          if (kd >> Nd) throw new Error("Invalid table entry");
          if (Nd > Qd) {
            const dd = pd[kd >> Nd - Qd];
            if (dd.len) throw new Error("Invalid table entry");
            if (dd.lit++, dd.p) {
              const Jd = dd.p;
              dd.p = new Array(dd.lit);
              for (let kd = 0; kd < dd.lit - 1; ++kd) dd.p[kd] = Jd[kd]
            } else dd.p = new Array(1);
            dd.p[dd.lit - 1] = Jd
          } else if (Nd) {
            let dd = 0;
            for (let Wd = 1 << Qd - Nd; Wd > 0; Wd--) {
              const Wd = pd[(kd << Qd - Nd) + dd];
              if (Wd.len || Wd.p) throw new Error("Invalid table entry");
              Wd.len = Nd, Wd.lit = Jd, dd++
            }
          }
        }
      }(Kd, Zd, gd, od),
      function(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd) {
        let Cd = 0,
          Kd = 0;
        const od = Pd,
          ld = Math.trunc(pd.value + (Nd + 7) / 8);
        for (; pd.value < ld;) {
          let Nd = Ed(Cd, Kd, kd, pd);
          for (Cd = Nd.c, Kd = Nd.lc; Kd >= Qd;) {
            const Pd = Jd[Cd >> Kd - Qd & ed];
            if (Pd.len) {
              Kd -= Pd.len;
              const dd = cd(Pd.lit, Wd, Cd, Kd, kd, pd, Zd, gd, od);
              dd && (Cd = dd.c, Kd = dd.lc)
            } else {
              if (!Pd.p) throw new Error("hufDecode issues");
              let Jd;
              for (Jd = 0; Jd < Pd.lit; Jd++) {
                const Qd = ud(dd[Pd.p[Jd]]);
                for (; Kd < Qd && pd.value < ld;) Nd = Ed(Cd, Kd, kd, pd), Cd = Nd.c, Kd = Nd.lc;
                if (Kd >= Qd && td(dd[Pd.p[Jd]]) == (Cd >> Kd - Qd & (1 << Qd) - 1)) {
                  Kd -= Qd;
                  const dd = cd(Pd.p[Jd], Wd, Cd, Kd, kd, pd, Zd, gd, od);
                  dd && (Cd = dd.c, Kd = dd.lc);
                  break
                }
              }
              if (Jd == Pd.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const Ld = 8 - Nd & 7;
        for (Cd >>= Ld, Kd -= Ld; Kd > 0;) {
          const dd = Jd[Cd << Qd - Kd & ed];
          if (!dd.len) throw new Error("HufDecode issues");
          {
            Kd -= dd.len;
            const Jd = cd(dd.lit, Wd, Cd, Kd, kd, pd, Zd, gd, od);
            Jd && (Cd = Jd.c, Kd = Jd.lc)
          }
        }
      }(Kd, od, dd, kd, Cd, gd, Wd, Nd, {
        value: 0
      })
    }

    function zd(dd) {
      return 65535 & dd
    }

    function Hd(dd) {
      const Jd = zd(dd);
      return Jd > 32767 ? Jd - 65536 : Jd
    }

    function wd(dd, Jd) {
      const kd = Hd(dd),
        pd = Hd(Jd),
        Nd = kd + (1 & pd) + (pd >> 1);
      return {
        a: Nd,
        b: Nd - pd
      }
    }

    function Ad(dd, Jd) {
      const kd = zd(dd),
        pd = zd(Jd),
        Nd = kd - (pd >> 1) & Dd;
      return {
        a: pd + Nd - yd & Dd,
        b: Nd
      }
    }

    function dJ(dd, Jd, kd, pd, Nd, Wd, Pd) {
      const Zd = Pd < 16384,
        gd = kd > Nd ? Nd : kd;
      let Cd, Kd, od = 1;
      for (; od <= gd;) od <<= 1;
      for (od >>= 1, Cd = od, od >>= 1; od >= 1;) {
        Kd = 0;
        const Pd = Kd + Wd * (Nd - Cd),
          gd = Wd * od,
          ld = Wd * Cd,
          Qd = pd * od,
          Ld = pd * Cd;
        let Od, ed, Rd, Id;
        for (; Kd <= Pd; Kd += ld) {
          let Nd = Kd;
          const Wd = Kd + pd * (kd - Cd);
          for (; Nd <= Wd; Nd += Ld) {
            const kd = Nd + Qd,
              pd = Nd + gd,
              Wd = pd + Qd;
            if (Zd) {
              let Pd = wd(dd[Nd + Jd], dd[pd + Jd]);
              Od = Pd.a, Rd = Pd.b, Pd = wd(dd[kd + Jd], dd[Wd + Jd]), ed = Pd.a, Id = Pd.b, Pd = wd(Od, ed), dd[Nd + Jd] = Pd.a, dd[kd + Jd] = Pd.b, Pd = wd(Rd, Id), dd[pd + Jd] = Pd.a, dd[Wd + Jd] = Pd.b
            } else {
              let Pd = Ad(dd[Nd + Jd], dd[pd + Jd]);
              Od = Pd.a, Rd = Pd.b, Pd = Ad(dd[kd + Jd], dd[Wd + Jd]), ed = Pd.a, Id = Pd.b, Pd = Ad(Od, ed), dd[Nd + Jd] = Pd.a, dd[kd + Jd] = Pd.b, Pd = Ad(Rd, Id), dd[pd + Jd] = Pd.a, dd[Wd + Jd] = Pd.b
            }
          }
          if (kd & od) {
            const kd = Nd + gd;
            let pd;
            pd = Zd ? wd(dd[Nd + Jd], dd[kd + Jd]) : Ad(dd[Nd + Jd], dd[kd + Jd]), Od = pd.a, dd[kd + Jd] = pd.b, dd[Nd + Jd] = Od
          }
        }
        if (Nd & od) {
          let Nd = Kd;
          const Wd = Kd + pd * (kd - Cd);
          for (; Nd <= Wd; Nd += Ld) {
            const kd = Nd + Qd;
            let pd;
            pd = Zd ? wd(dd[Nd + Jd], dd[kd + Jd]) : Ad(dd[Nd + Jd], dd[kd + Jd]), Od = pd.a, dd[kd + Jd] = pd.b, dd[Nd + Jd] = Od
          }
        }
        Cd = od, od >>= 1
      }
      return Kd
    }

    function JJ(dd) {
      return new DataView(dd.array.buffer, dd.offset.value, dd.size)
    }

    function kJ(dd) {
      const Jd = dd.viewer.buffer.slice(dd.offset.value, dd.offset.value + dd.size),
        kd = new Uint8Array(function(dd) {
          let Jd = dd.byteLength;
          const kd = [];
          let pd = 0;
          const Nd = new DataView(dd);
          for (; Jd > 0;) {
            const dd = Nd.getInt8(pd++);
            if (dd < 0) {
              const Wd = -dd;
              Jd -= Wd + 1;
              for (let dd = 0; dd < Wd; dd++) kd.push(Nd.getUint8(pd++))
            } else {
              const Wd = dd;
              Jd -= 2;
              const Pd = Nd.getUint8(pd++);
              for (let dd = 0; dd < Wd + 1; dd++) kd.push(Pd)
            }
          }
          return kd
        }(Jd)),
        pd = new Uint8Array(kd.length);
      return Xd(kd), fd(kd, pd), new DataView(pd.buffer)
    }

    function pJ(dd) {
      const Jd = dd.array.slice(dd.offset.value, dd.offset.value + dd.size),
        kd = fflate.unzlibSync(Jd),
        pd = new Uint8Array(kd.length);
      return Xd(kd), fd(kd, pd), new DataView(pd.buffer)
    }

    function NJ(dd) {
      const Jd = dd.array.slice(dd.offset.value, dd.offset.value + dd.size),
        kd = fflate.unzlibSync(Jd),
        pd = dd.lines * dd.channels * dd.width,
        Nd = 1 == dd.type ? new Uint16Array(pd) : new Uint32Array(pd);
      let Wd = 0,
        Pd = 0;
      const Zd = new Array(4);
      for (let gd = 0; gd < dd.lines; gd++)
        for (let Jd = 0; Jd < dd.channels; Jd++) {
          let Jd = 0;
          switch (dd.type) {
            case 1:
              Zd[0] = Wd, Zd[1] = Zd[0] + dd.width, Wd = Zd[1] + dd.width;
              for (let pd = 0; pd < dd.width; ++pd) {
                Jd += kd[Zd[0]++] << 8 | kd[Zd[1]++], Nd[Pd] = Jd, Pd++
              }
              break;
            case 2:
              Zd[0] = Wd, Zd[1] = Zd[0] + dd.width, Zd[2] = Zd[1] + dd.width, Wd = Zd[2] + dd.width;
              for (let pd = 0; pd < dd.width; ++pd) {
                Jd += kd[Zd[0]++] << 24 | kd[Zd[1]++] << 16 | kd[Zd[2]++] << 8, Nd[Pd] = Jd, Pd++
              }
          }
        }
      return new DataView(Nd.buffer)
    }

    function WJ(dd) {
      const Jd = dd.viewer,
        kd = {
          value: dd.offset.value
        },
        pd = new Uint16Array(dd.width * dd.scanlineBlockSize * (dd.channels * dd.type)),
        Nd = new Uint8Array(ld);
      let Wd = 0;
      const Pd = new Array(dd.channels);
      for (let Cd = 0; Cd < dd.channels; Cd++) Pd[Cd] = {}, Pd[Cd].start = Wd, Pd[Cd].end = Pd[Cd].start, Pd[Cd].nx = dd.width, Pd[Cd].ny = dd.lines, Pd[Cd].size = dd.type, Wd += Pd[Cd].nx * Pd[Cd].ny * Pd[Cd].size;
      const Zd = Md(Jd, kd),
        gd = Md(Jd, kd);
      if (gd >= ld) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (Zd <= gd)
        for (let Cd = 0; Cd < gd - Zd + 1; Cd++) Nd[Cd + Zd] = ad(Jd, kd);
      const Kd = new Uint16Array(od),
        Qd = function(dd, Jd) {
          let kd = 0;
          for (let Nd = 0; Nd < od; ++Nd)(0 == Nd || dd[Nd >> 3] & 1 << (7 & Nd)) && (Jd[kd++] = Nd);
          const pd = kd - 1;
          for (; kd < od;) Jd[kd++] = 0;
          return pd
        }(Nd, Kd),
        Ld = sd(Jd, kd);
      Vd(dd.array, Jd, kd, Ld, pd, Wd);
      for (let Cd = 0; Cd < dd.channels; ++Cd) {
        const dd = Pd[Cd];
        for (let Jd = 0; Jd < Pd[Cd].size; ++Jd) dJ(pd, dd.start + Jd, dd.nx, dd.size, dd.ny, dd.nx * dd.size, Qd)
      }! function(dd, Jd, kd) {
        for (let pd = 0; pd < kd; ++pd) Jd[pd] = dd[Jd[pd]]
      }(Kd, pd, Wd);
      let Od = 0;
      const ed = new Uint8Array(pd.buffer.byteLength);
      for (let od = 0; od < dd.lines; od++)
        for (let Jd = 0; Jd < dd.channels; Jd++) {
          const dd = Pd[Jd],
            kd = dd.nx * dd.size,
            Nd = new Uint8Array(pd.buffer, dd.end * Cd, kd * Cd);
          ed.set(Nd, Od), Od += kd * Cd, dd.end += kd
        }
      return new DataView(ed.buffer)
    }
    var PJ, ZJ = kd(40066);
    ! function(dd) {
      dd[dd.Float = 0] = "Float", dd[dd.HalfFloat = 1] = "HalfFloat"
    }(PJ || (PJ = {}));
    class gJ {}
    async function CJ(dd, Jd, kd, pd) {
      const Nd = {
        size: 0,
        viewer: Jd,
        array: new Uint8Array(Jd.buffer),
        offset: kd,
        width: dd.dataWindow.xMax - dd.dataWindow.xMin + 1,
        height: dd.dataWindow.yMax - dd.dataWindow.yMin + 1,
        channels: dd.channels.length,
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
      switch (dd.compression) {
        case vd.NO_COMPRESSION:
          Nd.lines = 1, Nd.uncompress = JJ;
          break;
        case vd.RLE_COMPRESSION:
          Nd.lines = 1, Nd.uncompress = kJ;
          break;
        case vd.ZIPS_COMPRESSION:
          Nd.lines = 1, Nd.uncompress = pJ, await ZJ.h.LoadScriptAsync(gJ.FFLATEUrl);
          break;
        case vd.ZIP_COMPRESSION:
          Nd.lines = 16, Nd.uncompress = pJ, await ZJ.h.LoadScriptAsync(gJ.FFLATEUrl);
          break;
        case vd.PIZ_COMPRESSION:
          Nd.lines = 32, Nd.uncompress = WJ;
          break;
        case vd.PXR24_COMPRESSION:
          Nd.lines = 16, Nd.uncompress = NJ, await ZJ.h.LoadScriptAsync(gJ.FFLATEUrl);
          break;
        default:
          throw new Error(vd[dd.compression] + " is unsupported")
      }
      Nd.scanlineBlockSize = Nd.lines;
      const Wd = {};
      for (const Zd of dd.channels) switch (Zd.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          Wd[Zd.name] = !0, Nd.type = Zd.pixelType
      }
      let Pd = !1;
      if (Wd.R && Wd.G && Wd.B && Wd.A) Nd.outputChannels = 4, Nd.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (Wd.R && Wd.G && Wd.B) Pd = !0, Nd.outputChannels = 4, Nd.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (Wd.R && Wd.G) Nd.outputChannels = 2, Nd.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (Wd.R) Nd.outputChannels = 1, Nd.decodeChannels = {
        R: 0
      };
      else {
        if (!Wd.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        Nd.outputChannels = 1, Nd.decodeChannels = {
          Y: 0
        }
      }
      if (1 === Nd.type) switch (pd) {
        case PJ.Float:
          Nd.getter = bd, Nd.inputSize = Cd;
          break;
        case PJ.HalfFloat:
          Nd.getter = Md, Nd.inputSize = Cd
      } else {
        if (2 !== Nd.type) throw new Error("Unsupported pixelType " + Nd.type + " for " + dd.compression);
        switch (pd) {
          case PJ.Float:
            Nd.getter = md, Nd.inputSize = Zd;
            break;
          case PJ.HalfFloat:
            Nd.getter = Sd, Nd.inputSize = Zd
        }
      }
      Nd.blockCount = Nd.height / Nd.scanlineBlockSize;
      for (let Zd = 0; Zd < Nd.blockCount; Zd++) Yd(Jd, kd);
      const gd = Nd.width * Nd.height * Nd.outputChannels;
      switch (pd) {
        case PJ.Float:
          Nd.byteArray = new Float32Array(gd), Nd.textureType = 1, Pd && Nd.byteArray.fill(1, 0, gd);
          break;
        case PJ.HalfFloat:
          Nd.byteArray = new Uint16Array(gd), Nd.textureType = 2, Pd && Nd.byteArray.fill(15360, 0, gd);
          break;
        default:
          throw new Error("Unsupported type: " + pd)
      }
      let Kd = 0;
      for (const Zd of dd.channels) void 0 !== Nd.decodeChannels[Zd.name] && (Nd.channelLineOffsets[Zd.name] = Kd * Nd.width), Kd += 2 * Zd.pixelType;
      return Nd.bytesPerLine = Nd.width * Kd, Nd.outLineWidth = Nd.width * Nd.outputChannels, "INCREASING_Y" === dd.lineOrder ? Nd.scanOrder = dd => dd : Nd.scanOrder = dd => Nd.height - 1 - dd, 4 == Nd.outputChannels ? (Nd.format = 5, Nd.linearSpace = !0) : (Nd.format = 6, Nd.linearSpace = !1), Nd
    }

    function KJ(dd, Jd, kd, pd) {
      const Nd = {
        value: 0
      };
      for (let Wd = 0; Wd < dd.height / dd.scanlineBlockSize; Wd++) {
        const Pd = Bd(kd, pd) - Jd.dataWindow.yMin;
        dd.size = sd(kd, pd), dd.lines = Pd + dd.scanlineBlockSize > dd.height ? dd.height - Pd : dd.scanlineBlockSize;
        const Zd = dd.size < dd.lines * dd.bytesPerLine && dd.uncompress ? dd.uncompress(dd) : JJ(dd);
        pd.value += dd.size;
        for (let kd = 0; kd < dd.scanlineBlockSize; kd++) {
          const pd = Wd * dd.scanlineBlockSize,
            Pd = kd + dd.scanOrder(pd);
          if (Pd >= dd.height) continue;
          const gd = kd * dd.bytesPerLine,
            Cd = (dd.height - 1 - Pd) * dd.outLineWidth;
          for (let kd = 0; kd < dd.channels; kd++) {
            const pd = Jd.channels[kd].name,
              Wd = dd.channelLineOffsets[pd],
              Pd = dd.decodeChannels[pd];
            if (void 0 !== Pd) {
              Nd.value = gd + Wd;
              for (let Jd = 0; Jd < dd.width; Jd++) {
                const kd = Cd + Jd * dd.outputChannels + Pd;
                dd.byteArray && (dd.byteArray[kd] = dd.getter(Zd, Nd))
              }
            }
          }
        }
      }
    }
    gJ.DefaultOutputType = PJ.HalfFloat, gJ.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class oJ {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(dd, Jd, kd, pd, Nd) {
        throw ".exr not supported in Cube."
      }
      loadData(dd, Jd, kd) {
        const Nd = new DataView(dd.buffer),
          Wd = {
            value: 0
          },
          Pd = Ud(Nd, Wd);
        CJ(Pd, Nd, Wd, gJ.DefaultOutputType).then((dd => {
          KJ(dd, Pd, Nd, Wd);
          const pd = Pd.dataWindow.xMax - Pd.dataWindow.xMin + 1,
            Zd = Pd.dataWindow.yMax - Pd.dataWindow.yMin + 1;
          kd(pd, Zd, Jd.generateMipMaps, !1, (() => {
            const kd = Jd.eL();
            Jd.format = Pd.format, Jd.type = dd.textureType, Jd.invertY = !1, Jd._gammaSpace = !Pd.linearSpace, dd.byteArray && kd._uploadDataToTextureDirectly(Jd, dd.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((dd => {
          pd.c.Error("Failed to load EXR texture: ", dd)
        }))
      }
    }
    async function lJ(dd) {
      const Jd = new DataView(dd),
        kd = {
          value: 0
        },
        Nd = Ud(Jd, kd);
      try {
        const dd = await CJ(Nd, Jd, kd, PJ.Float);
        return KJ(dd, Nd, Jd, kd), dd.byteArray ? {
          width: Nd.dataWindow.xMax - Nd.dataWindow.xMin + 1,
          height: Nd.dataWindow.yMax - Nd.dataWindow.yMin + 1,
          data: new Float32Array(dd.byteArray)
        } : (pd.c.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (Wd) {
        pd.c.Error("Failed to load EXR data: ", Wd)
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
for (const dd in modules) Object.freeze(modules[dd]);