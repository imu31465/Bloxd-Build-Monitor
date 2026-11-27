export const id = 634;
export const ids = [634];
export const modules = {
  54386: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      ReadExrDataAsync: () => xS,
      _ExrTextureLoader: () => pS
    });
    var Zr = Qr(40246),
      Wr = Qr(38599),
      ar = Qr(41922);
    const jr = 4,
      Ir = 4,
      fr = 1,
      Er = 2,
      pr = 8,
      xr = 65536,
      mr = xr >> 3,
      Nr = 14,
      Ur = 65537,
      tr = 1 << Nr,
      hr = tr - 1,
      zr = 59,
      Yr = 63,
      nr = 2 + Yr - zr;
    var er, Kr;

    function yr(rr, Sr) {
      const Qr = new Uint8Array(rr);
      let Zr = 0;
      for (; 0 != Qr[Sr.value + Zr];) Zr += 1;
      const Wr = (new TextDecoder).decode(Qr.slice(Sr.value, Sr.value + Zr));
      return Sr.value = Sr.value + Zr + 1, Wr
    }

    function Br(rr, Sr) {
      const Qr = rr.getInt32(Sr.value, !0);
      return Sr.value += jr, Qr
    }

    function Tr(rr, Sr) {
      const Qr = rr.getUint32(Sr.value, !0);
      return Sr.value += jr, Qr
    }

    function vr(rr, Sr) {
      const Qr = rr.getUint8(Sr.value);
      return Sr.value += fr, Qr
    }

    function Or(rr, Sr) {
      const Qr = rr.getUint16(Sr.value, !0);
      return Sr.value += Er, Qr
    }

    function Lr(rr, Sr) {
      const Qr = rr[Sr.value];
      return Sr.value += fr, Qr
    }

    function lr(rr, Sr) {
      let Qr;
      return Qr = "getBigInt64" in DataView.prototype ? Number(rr.getBigInt64(Sr.value, !0)) : rr.getUint32(Sr.value + 4, !0) + Number(rr.getUint32(Sr.value, !0) << 32), Sr.value += pr, Qr
    }

    function Xr(rr, Sr) {
      const Qr = rr.getFloat32(Sr.value, !0);
      return Sr.value += Ir, Qr
    }

    function Pr(rr, Sr) {
      return (0, ar.c)(Or(rr, Sr))
    }

    function Hr(rr, Sr) {
      return (0, ar.g)((0, Wr.Clamp)(Xr(rr, Sr), -ar.d, ar.d))
    }

    function qr(rr, Sr, Qr, Zr) {
      switch (Qr) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(rr, Sr, Qr) {
            const Zr = (new TextDecoder).decode(new Uint8Array(rr).slice(Sr.value, Sr.value + Qr));
            return Sr.value = Sr.value + Qr, Zr
          }(rr.buffer, Sr, Zr);
        case "chlist":
          return function(rr, Sr, Qr) {
            const Zr = Sr.value,
              Wr = [];
            for (; Sr.value < Zr + Qr - 1;) {
              const Qr = yr(rr.buffer, Sr),
                Zr = Br(rr, Sr),
                ar = vr(rr, Sr);
              Sr.value += 3;
              const jr = Br(rr, Sr),
                Ir = Br(rr, Sr);
              Wr.push({
                name: Qr,
                pixelType: Zr,
                pLinear: ar,
                xSampling: jr,
                ySampling: Ir
              })
            }
            return Sr.value += 1, Wr
          }(rr, Sr, Zr);
        case "chromaticities":
          return function(rr, Sr) {
            return {
              redX: Xr(rr, Sr),
              redY: Xr(rr, Sr),
              greenX: Xr(rr, Sr),
              greenY: Xr(rr, Sr),
              blueX: Xr(rr, Sr),
              blueY: Xr(rr, Sr),
              whiteX: Xr(rr, Sr),
              whiteY: Xr(rr, Sr)
            }
          }(rr, Sr);
        case "compression":
          return function(rr, Sr) {
            return vr(rr, Sr)
          }(rr, Sr);
        case "box2i":
          return function(rr, Sr) {
            return {
              xMin: Br(rr, Sr),
              yMin: Br(rr, Sr),
              xMax: Br(rr, Sr),
              yMax: Br(rr, Sr)
            }
          }(rr, Sr);
        case "lineOrder":
          return function(rr, Sr) {
            const Qr = vr(rr, Sr);
            return Kr[Qr]
          }(rr, Sr);
        case "float":
          return Xr(rr, Sr);
        case "v2f":
          return function(rr, Sr) {
            return [Xr(rr, Sr), Xr(rr, Sr)]
          }(rr, Sr);
        case "v3f":
          return function(rr, Sr) {
            return [Xr(rr, Sr), Xr(rr, Sr), Xr(rr, Sr)]
          }(rr, Sr);
        case "int":
          return Br(rr, Sr);
        case "rational":
          return function(rr, Sr) {
            return [Br(rr, Sr), Tr(rr, Sr)]
          }(rr, Sr);
        case "timecode":
          return function(rr, Sr) {
            return [Tr(rr, Sr), Tr(rr, Sr)]
          }(rr, Sr);
        case "preview":
          return Sr.value += Zr, "skipped";
        default:
          return void(Sr.value += Zr)
      }
    }

    function Rr(rr) {
      for (let Sr = 1; Sr < rr.length; Sr++) {
        const Qr = rr[Sr - 1] + rr[Sr] - 128;
        rr[Sr] = Qr
      }
    }

    function gr(rr, Sr) {
      let Qr = 0,
        Zr = Math.floor((rr.length + 1) / 2),
        Wr = 0;
      const ar = rr.length - 1;
      for (; !(Wr > ar) && (Sr[Wr++] = rr[Qr++], !(Wr > ar));) Sr[Wr++] = rr[Zr++]
    }! function(rr) {
      rr[rr.NO_COMPRESSION = 0] = "NO_COMPRESSION", rr[rr.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", rr[rr.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", rr[rr.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", rr[rr.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", rr[rr.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(er || (er = {})),
    function(rr) {
      rr[rr.INCREASING_Y = 0] = "INCREASING_Y", rr[rr.DECREASING_Y = 1] = "DECREASING_Y"
    }(Kr || (Kr = {}));
    const Cr = 20000630;

    function Mr(rr, Sr) {
      if (rr.getUint32(0, !0) != Cr) throw new Error("Incorrect OpenEXR format");
      const Qr = rr.getUint8(4),
        Wr = rr.getUint8(5),
        ar = {
          singleTile: !!(2 & Wr),
          longName: !!(4 & Wr),
          deepFormat: !!(8 & Wr),
          multiPart: !!(16 & Wr)
        };
      Sr.value = 8;
      const jr = {};
      let Ir = !0;
      for (; Ir;) {
        const Qr = yr(rr.buffer, Sr);
        if (Qr) {
          const Wr = yr(rr.buffer, Sr),
            ar = qr(rr, Sr, Wr, Tr(rr, Sr));
          void 0 === ar ? Zr.c.Warn(`Unknown header attribute type ${Wr}'.`) : jr[Qr] = ar
        } else Ir = !1
      }
      if (0 != (-5 & Wr)) throw new Error("Unsupported file format");
      return {
        version: Qr,
        spec: ar,
        ...jr
      }
    }
    const Gr = 32768,
      kr = 65535;

    function Ar(rr, Sr, Qr, Zr, Wr) {
      for (; Qr < rr;) Sr = Sr << 8 | Lr(Zr, Wr), Qr += 8;
      return {
        l: Sr >> (Qr -= rr) & (1 << rr) - 1,
        c: Sr,
        lc: Qr
      }
    }

    function Vr(rr, Sr, Qr, Zr) {
      return {
        c: rr = rr << 8 | Lr(Qr, Zr),
        lc: Sr += 8
      }
    }

    function ir(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
      if (rr == Sr) {
        if (Zr < 8) {
          const rr = Vr(Qr, Zr, Wr, ar);
          Qr = rr.c, Zr = rr.lc
        }
        let rr = Qr >> (Zr -= 8);
        if (rr = new Uint8Array([rr])[0], Ir.value + rr > fr) return null;
        const Sr = jr[Ir.value - 1];
        for (; rr-- > 0;) jr[Ir.value++] = Sr
      } else {
        if (!(Ir.value < fr)) return null;
        jr[Ir.value++] = rr
      }
      return {
        c: Qr,
        lc: Zr
      }
    }
    const wr = new Array(59);

    function cr(rr, Sr, Qr, Zr, Wr, ar) {
      const jr = Sr;
      let Ir = 0,
        fr = 0;
      for (; Zr <= Wr; Zr++) {
        if (jr.value - Sr.value > Qr) return;
        let Er = Ar(6, Ir, fr, rr, jr);
        const pr = Er.l;
        if (Ir = Er.c, fr = Er.lc, ar[Zr] = pr, pr == Yr) {
          if (jr.value - Sr.value > Qr) throw new Error("Error in HufUnpackEncTable");
          Er = Ar(8, Ir, fr, rr, jr);
          let pr = Er.l + nr;
          if (Ir = Er.c, fr = Er.lc, Zr + pr > Wr + 1) throw new Error("Error in HufUnpackEncTable");
          for (; pr--;) ar[Zr++] = 0;
          Zr--
        } else if (pr >= zr) {
          let rr = pr - zr + 2;
          if (Zr + rr > Wr + 1) throw new Error("Error in HufUnpackEncTable");
          for (; rr--;) ar[Zr++] = 0;
          Zr--
        }
      }! function(rr) {
        for (let Qr = 0; Qr <= 58; ++Qr) wr[Qr] = 0;
        for (let Qr = 0; Qr < Ur; ++Qr) wr[rr[Qr]] += 1;
        let Sr = 0;
        for (let Qr = 58; Qr > 0; --Qr) {
          const rr = Sr + wr[Qr] >> 1;
          wr[Qr] = Sr, Sr = rr
        }
        for (let Qr = 0; Qr < Ur; ++Qr) {
          const Sr = rr[Qr];
          Sr > 0 && (rr[Qr] = Sr | wr[Sr]++ << 6)
        }
      }(ar)
    }

    function Fr(rr) {
      return 63 & rr
    }

    function or(rr) {
      return rr >> 6
    }

    function br(rr, Sr, Qr, Zr, Wr, ar) {
      const jr = Qr.value,
        Ir = Tr(Sr, Qr),
        fr = Tr(Sr, Qr);
      Qr.value += 4;
      const Er = Tr(Sr, Qr);
      if (Qr.value += 4, Ir < 0 || Ir >= Ur || fr < 0 || fr >= Ur) throw new Error("Wrong HUF_ENCSIZE");
      const pr = new Array(Ur),
        xr = new Array(tr);
      ! function(rr) {
        for (let Sr = 0; Sr < tr; Sr++) rr[Sr] = {}, rr[Sr].len = 0, rr[Sr].lit = 0, rr[Sr].p = null
      }(xr);
      if (cr(rr, Qr, Zr - (Qr.value - jr), Ir, fr, pr), Er > 8 * (Zr - (Qr.value - jr))) throw new Error("Wrong hufUncompress");
      ! function(rr, Sr, Qr, Zr) {
        for (; Sr <= Qr; Sr++) {
          const Qr = or(rr[Sr]),
            Wr = Fr(rr[Sr]);
          if (Qr >> Wr) throw new Error("Invalid table entry");
          if (Wr > Nr) {
            const rr = Zr[Qr >> Wr - Nr];
            if (rr.len) throw new Error("Invalid table entry");
            if (rr.lit++, rr.p) {
              const Sr = rr.p;
              rr.p = new Array(rr.lit);
              for (let Qr = 0; Qr < rr.lit - 1; ++Qr) rr.p[Qr] = Sr[Qr]
            } else rr.p = new Array(1);
            rr.p[rr.lit - 1] = Sr
          } else if (Wr) {
            let rr = 0;
            for (let ar = 1 << Nr - Wr; ar > 0; ar--) {
              const ar = Zr[(Qr << Nr - Wr) + rr];
              if (ar.len || ar.p) throw new Error("Invalid table entry");
              ar.len = Wr, ar.lit = Sr, rr++
            }
          }
        }
      }(pr, Ir, fr, xr),
      function(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
        let Er = 0,
          pr = 0;
        const xr = jr,
          mr = Math.trunc(Zr.value + (Wr + 7) / 8);
        for (; Zr.value < mr;) {
          let Wr = Vr(Er, pr, Qr, Zr);
          for (Er = Wr.c, pr = Wr.lc; pr >= Nr;) {
            const jr = Sr[Er >> pr - Nr & hr];
            if (jr.len) {
              pr -= jr.len;
              const rr = ir(jr.lit, ar, Er, pr, Qr, Zr, Ir, fr, xr);
              rr && (Er = rr.c, pr = rr.lc)
            } else {
              if (!jr.p) throw new Error("hufDecode issues");
              let Sr;
              for (Sr = 0; Sr < jr.lit; Sr++) {
                const Nr = Fr(rr[jr.p[Sr]]);
                for (; pr < Nr && Zr.value < mr;) Wr = Vr(Er, pr, Qr, Zr), Er = Wr.c, pr = Wr.lc;
                if (pr >= Nr && or(rr[jr.p[Sr]]) == (Er >> pr - Nr & (1 << Nr) - 1)) {
                  pr -= Nr;
                  const rr = ir(jr.p[Sr], ar, Er, pr, Qr, Zr, Ir, fr, xr);
                  rr && (Er = rr.c, pr = rr.lc);
                  break
                }
              }
              if (Sr == jr.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const Ur = 8 - Wr & 7;
        for (Er >>= Ur, pr -= Ur; pr > 0;) {
          const rr = Sr[Er << Nr - pr & hr];
          if (!rr.len) throw new Error("HufDecode issues");
          {
            pr -= rr.len;
            const Sr = ir(rr.lit, ar, Er, pr, Qr, Zr, Ir, fr, xr);
            Sr && (Er = Sr.c, pr = Sr.lc)
          }
        }
      }(pr, xr, rr, Qr, Er, fr, ar, Wr, {
        value: 0
      })
    }

    function Jr(rr) {
      return 65535 & rr
    }

    function Dr(rr) {
      const Sr = Jr(rr);
      return Sr > 32767 ? Sr - 65536 : Sr
    }

    function dr(rr, Sr) {
      const Qr = Dr(rr),
        Zr = Dr(Sr),
        Wr = Qr + (1 & Zr) + (Zr >> 1);
      return {
        a: Wr,
        b: Wr - Zr
      }
    }

    function sr(rr, Sr) {
      const Qr = Jr(rr),
        Zr = Jr(Sr),
        Wr = Qr - (Zr >> 1) & kr;
      return {
        a: Zr + Wr - Gr & kr,
        b: Wr
      }
    }

    function ur(rr, Sr, Qr, Zr, Wr, ar, jr) {
      const Ir = jr < 16384,
        fr = Qr > Wr ? Wr : Qr;
      let Er, pr, xr = 1;
      for (; xr <= fr;) xr <<= 1;
      for (xr >>= 1, Er = xr, xr >>= 1; xr >= 1;) {
        pr = 0;
        const jr = pr + ar * (Wr - Er),
          fr = ar * xr,
          mr = ar * Er,
          Nr = Zr * xr,
          Ur = Zr * Er;
        let tr, hr, zr, Yr;
        for (; pr <= jr; pr += mr) {
          let Wr = pr;
          const ar = pr + Zr * (Qr - Er);
          for (; Wr <= ar; Wr += Ur) {
            const Qr = Wr + Nr,
              Zr = Wr + fr,
              ar = Zr + Nr;
            if (Ir) {
              let jr = dr(rr[Wr + Sr], rr[Zr + Sr]);
              tr = jr.a, zr = jr.b, jr = dr(rr[Qr + Sr], rr[ar + Sr]), hr = jr.a, Yr = jr.b, jr = dr(tr, hr), rr[Wr + Sr] = jr.a, rr[Qr + Sr] = jr.b, jr = dr(zr, Yr), rr[Zr + Sr] = jr.a, rr[ar + Sr] = jr.b
            } else {
              let jr = sr(rr[Wr + Sr], rr[Zr + Sr]);
              tr = jr.a, zr = jr.b, jr = sr(rr[Qr + Sr], rr[ar + Sr]), hr = jr.a, Yr = jr.b, jr = sr(tr, hr), rr[Wr + Sr] = jr.a, rr[Qr + Sr] = jr.b, jr = sr(zr, Yr), rr[Zr + Sr] = jr.a, rr[ar + Sr] = jr.b
            }
          }
          if (Qr & xr) {
            const Qr = Wr + fr;
            let Zr;
            Zr = Ir ? dr(rr[Wr + Sr], rr[Qr + Sr]) : sr(rr[Wr + Sr], rr[Qr + Sr]), tr = Zr.a, rr[Qr + Sr] = Zr.b, rr[Wr + Sr] = tr
          }
        }
        if (Wr & xr) {
          let Wr = pr;
          const ar = pr + Zr * (Qr - Er);
          for (; Wr <= ar; Wr += Ur) {
            const Qr = Wr + Nr;
            let Zr;
            Zr = Ir ? dr(rr[Wr + Sr], rr[Qr + Sr]) : sr(rr[Wr + Sr], rr[Qr + Sr]), tr = Zr.a, rr[Qr + Sr] = Zr.b, rr[Wr + Sr] = tr
          }
        }
        Er = xr, xr >>= 1
      }
      return pr
    }

    function rS(rr) {
      return new DataView(rr.array.buffer, rr.offset.value, rr.size)
    }

    function SS(rr) {
      const Sr = rr.viewer.buffer.slice(rr.offset.value, rr.offset.value + rr.size),
        Qr = new Uint8Array(function(rr) {
          let Sr = rr.byteLength;
          const Qr = [];
          let Zr = 0;
          const Wr = new DataView(rr);
          for (; Sr > 0;) {
            const rr = Wr.getInt8(Zr++);
            if (rr < 0) {
              const ar = -rr;
              Sr -= ar + 1;
              for (let rr = 0; rr < ar; rr++) Qr.push(Wr.getUint8(Zr++))
            } else {
              const ar = rr;
              Sr -= 2;
              const jr = Wr.getUint8(Zr++);
              for (let rr = 0; rr < ar + 1; rr++) Qr.push(jr)
            }
          }
          return Qr
        }(Sr)),
        Zr = new Uint8Array(Qr.length);
      return Rr(Qr), gr(Qr, Zr), new DataView(Zr.buffer)
    }

    function QS(rr) {
      const Sr = rr.array.slice(rr.offset.value, rr.offset.value + rr.size),
        Qr = fflate.unzlibSync(Sr),
        Zr = new Uint8Array(Qr.length);
      return Rr(Qr), gr(Qr, Zr), new DataView(Zr.buffer)
    }

    function ZS(rr) {
      const Sr = rr.array.slice(rr.offset.value, rr.offset.value + rr.size),
        Qr = fflate.unzlibSync(Sr),
        Zr = rr.lines * rr.channels * rr.width,
        Wr = 1 == rr.type ? new Uint16Array(Zr) : new Uint32Array(Zr);
      let ar = 0,
        jr = 0;
      const Ir = new Array(4);
      for (let fr = 0; fr < rr.lines; fr++)
        for (let Sr = 0; Sr < rr.channels; Sr++) {
          let Sr = 0;
          switch (rr.type) {
            case 1:
              Ir[0] = ar, Ir[1] = Ir[0] + rr.width, ar = Ir[1] + rr.width;
              for (let Zr = 0; Zr < rr.width; ++Zr) {
                Sr += Qr[Ir[0]++] << 8 | Qr[Ir[1]++], Wr[jr] = Sr, jr++
              }
              break;
            case 2:
              Ir[0] = ar, Ir[1] = Ir[0] + rr.width, Ir[2] = Ir[1] + rr.width, ar = Ir[2] + rr.width;
              for (let Zr = 0; Zr < rr.width; ++Zr) {
                Sr += Qr[Ir[0]++] << 24 | Qr[Ir[1]++] << 16 | Qr[Ir[2]++] << 8, Wr[jr] = Sr, jr++
              }
          }
        }
      return new DataView(Wr.buffer)
    }

    function WS(rr) {
      const Sr = rr.viewer,
        Qr = {
          value: rr.offset.value
        },
        Zr = new Uint16Array(rr.width * rr.scanlineBlockSize * (rr.channels * rr.type)),
        Wr = new Uint8Array(mr);
      let ar = 0;
      const jr = new Array(rr.channels);
      for (let Er = 0; Er < rr.channels; Er++) jr[Er] = {}, jr[Er].start = ar, jr[Er].end = jr[Er].start, jr[Er].nx = rr.width, jr[Er].ny = rr.lines, jr[Er].size = rr.type, ar += jr[Er].nx * jr[Er].ny * jr[Er].size;
      const Ir = Or(Sr, Qr),
        fr = Or(Sr, Qr);
      if (fr >= mr) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (Ir <= fr)
        for (let Er = 0; Er < fr - Ir + 1; Er++) Wr[Er + Ir] = vr(Sr, Qr);
      const pr = new Uint16Array(xr),
        Nr = function(rr, Sr) {
          let Qr = 0;
          for (let Wr = 0; Wr < xr; ++Wr)(0 == Wr || rr[Wr >> 3] & 1 << (7 & Wr)) && (Sr[Qr++] = Wr);
          const Zr = Qr - 1;
          for (; Qr < xr;) Sr[Qr++] = 0;
          return Zr
        }(Wr, pr),
        Ur = Tr(Sr, Qr);
      br(rr.array, Sr, Qr, Ur, Zr, ar);
      for (let Er = 0; Er < rr.channels; ++Er) {
        const rr = jr[Er];
        for (let Sr = 0; Sr < jr[Er].size; ++Sr) ur(Zr, rr.start + Sr, rr.nx, rr.size, rr.ny, rr.nx * rr.size, Nr)
      }! function(rr, Sr, Qr) {
        for (let Zr = 0; Zr < Qr; ++Zr) Sr[Zr] = rr[Sr[Zr]]
      }(pr, Zr, ar);
      let tr = 0;
      const hr = new Uint8Array(Zr.buffer.byteLength);
      for (let xr = 0; xr < rr.lines; xr++)
        for (let Sr = 0; Sr < rr.channels; Sr++) {
          const rr = jr[Sr],
            Qr = rr.nx * rr.size,
            Wr = new Uint8Array(Zr.buffer, rr.end * Er, Qr * Er);
          hr.set(Wr, tr), tr += Qr * Er, rr.end += Qr
        }
      return new DataView(hr.buffer)
    }
    var aS, jS = Qr(41950);
    ! function(rr) {
      rr[rr.Float = 0] = "Float", rr[rr.HalfFloat = 1] = "HalfFloat"
    }(aS || (aS = {}));
    class IS {}
    async function fS(rr, Sr, Qr, Zr) {
      const Wr = {
        size: 0,
        viewer: Sr,
        array: new Uint8Array(Sr.buffer),
        offset: Qr,
        width: rr.dataWindow.xMax - rr.dataWindow.xMin + 1,
        height: rr.dataWindow.yMax - rr.dataWindow.yMin + 1,
        channels: rr.channels.length,
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
      switch (rr.compression) {
        case er.NO_COMPRESSION:
          Wr.lines = 1, Wr.uncompress = rS;
          break;
        case er.RLE_COMPRESSION:
          Wr.lines = 1, Wr.uncompress = SS;
          break;
        case er.ZIPS_COMPRESSION:
          Wr.lines = 1, Wr.uncompress = QS, await jS.h.LoadScriptAsync(IS.FFLATEUrl);
          break;
        case er.ZIP_COMPRESSION:
          Wr.lines = 16, Wr.uncompress = QS, await jS.h.LoadScriptAsync(IS.FFLATEUrl);
          break;
        case er.PIZ_COMPRESSION:
          Wr.lines = 32, Wr.uncompress = WS;
          break;
        case er.PXR24_COMPRESSION:
          Wr.lines = 16, Wr.uncompress = ZS, await jS.h.LoadScriptAsync(IS.FFLATEUrl);
          break;
        default:
          throw new Error(er[rr.compression] + " is unsupported")
      }
      Wr.scanlineBlockSize = Wr.lines;
      const ar = {};
      for (const Ir of rr.channels) switch (Ir.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          ar[Ir.name] = !0, Wr.type = Ir.pixelType
      }
      let jr = !1;
      if (ar.R && ar.G && ar.B && ar.A) Wr.outputChannels = 4, Wr.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (ar.R && ar.G && ar.B) jr = !0, Wr.outputChannels = 4, Wr.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (ar.R && ar.G) Wr.outputChannels = 2, Wr.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (ar.R) Wr.outputChannels = 1, Wr.decodeChannels = {
        R: 0
      };
      else {
        if (!ar.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        Wr.outputChannels = 1, Wr.decodeChannels = {
          Y: 0
        }
      }
      if (1 === Wr.type) switch (Zr) {
        case aS.Float:
          Wr.getter = Pr, Wr.inputSize = Er;
          break;
        case aS.HalfFloat:
          Wr.getter = Or, Wr.inputSize = Er
      } else {
        if (2 !== Wr.type) throw new Error("Unsupported pixelType " + Wr.type + " for " + rr.compression);
        switch (Zr) {
          case aS.Float:
            Wr.getter = Xr, Wr.inputSize = Ir;
            break;
          case aS.HalfFloat:
            Wr.getter = Hr, Wr.inputSize = Ir
        }
      }
      Wr.blockCount = Wr.height / Wr.scanlineBlockSize;
      for (let Ir = 0; Ir < Wr.blockCount; Ir++) lr(Sr, Qr);
      const fr = Wr.width * Wr.height * Wr.outputChannels;
      switch (Zr) {
        case aS.Float:
          Wr.byteArray = new Float32Array(fr), Wr.textureType = 1, jr && Wr.byteArray.fill(1, 0, fr);
          break;
        case aS.HalfFloat:
          Wr.byteArray = new Uint16Array(fr), Wr.textureType = 2, jr && Wr.byteArray.fill(15360, 0, fr);
          break;
        default:
          throw new Error("Unsupported type: " + Zr)
      }
      let pr = 0;
      for (const Ir of rr.channels) void 0 !== Wr.decodeChannels[Ir.name] && (Wr.channelLineOffsets[Ir.name] = pr * Wr.width), pr += 2 * Ir.pixelType;
      return Wr.bytesPerLine = Wr.width * pr, Wr.outLineWidth = Wr.width * Wr.outputChannels, "INCREASING_Y" === rr.lineOrder ? Wr.scanOrder = rr => rr : Wr.scanOrder = rr => Wr.height - 1 - rr, 4 == Wr.outputChannels ? (Wr.format = 5, Wr.linearSpace = !0) : (Wr.format = 6, Wr.linearSpace = !1), Wr
    }

    function ES(rr, Sr, Qr, Zr) {
      const Wr = {
        value: 0
      };
      for (let ar = 0; ar < rr.height / rr.scanlineBlockSize; ar++) {
        const jr = Br(Qr, Zr) - Sr.dataWindow.yMin;
        rr.size = Tr(Qr, Zr), rr.lines = jr + rr.scanlineBlockSize > rr.height ? rr.height - jr : rr.scanlineBlockSize;
        const Ir = rr.size < rr.lines * rr.bytesPerLine && rr.uncompress ? rr.uncompress(rr) : rS(rr);
        Zr.value += rr.size;
        for (let Qr = 0; Qr < rr.scanlineBlockSize; Qr++) {
          const Zr = ar * rr.scanlineBlockSize,
            jr = Qr + rr.scanOrder(Zr);
          if (jr >= rr.height) continue;
          const fr = Qr * rr.bytesPerLine,
            Er = (rr.height - 1 - jr) * rr.outLineWidth;
          for (let Qr = 0; Qr < rr.channels; Qr++) {
            const Zr = Sr.channels[Qr].name,
              ar = rr.channelLineOffsets[Zr],
              jr = rr.decodeChannels[Zr];
            if (void 0 !== jr) {
              Wr.value = fr + ar;
              for (let Sr = 0; Sr < rr.width; Sr++) {
                const Qr = Er + Sr * rr.outputChannels + jr;
                rr.byteArray && (rr.byteArray[Qr] = rr.getter(Ir, Wr))
              }
            }
          }
        }
      }
    }
    IS.DefaultOutputType = aS.HalfFloat, IS.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class pS {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(rr, Sr, Qr, Zr, Wr) {
        throw ".exr not supported in Cube."
      }
      loadData(rr, Sr, Qr) {
        const Wr = new DataView(rr.buffer),
          ar = {
            value: 0
          },
          jr = Mr(Wr, ar);
        fS(jr, Wr, ar, IS.DefaultOutputType).then((rr => {
          ES(rr, jr, Wr, ar);
          const Zr = jr.dataWindow.xMax - jr.dataWindow.xMin + 1,
            Ir = jr.dataWindow.yMax - jr.dataWindow.yMin + 1;
          Qr(Zr, Ir, Sr.generateMipMaps, !1, (() => {
            const Qr = Sr.MU();
            Sr.format = jr.format, Sr.type = rr.textureType, Sr.invertY = !1, Sr._gammaSpace = !jr.linearSpace, rr.byteArray && Qr._uploadDataToTextureDirectly(Sr, rr.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((rr => {
          Zr.c.Error("Failed to load EXR texture: ", rr)
        }))
      }
    }
    async function xS(rr) {
      const Sr = new DataView(rr),
        Qr = {
          value: 0
        },
        Wr = Mr(Sr, Qr);
      try {
        const rr = await fS(Wr, Sr, Qr, aS.Float);
        return ES(rr, Wr, Sr, Qr), rr.byteArray ? {
          width: Wr.dataWindow.xMax - Wr.dataWindow.xMin + 1,
          height: Wr.dataWindow.yMax - Wr.dataWindow.yMin + 1,
          data: new Float32Array(rr.byteArray)
        } : (Zr.c.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (ar) {
        Zr.c.Error("Failed to load EXR data: ", ar)
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
for (const rr in modules) Object.freeze(modules[rr]);