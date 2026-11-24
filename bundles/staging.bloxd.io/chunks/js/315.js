export const id = 315;
export const ids = [315];
export const modules = {
  41881: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      ReadExrDataAsync: () => ET,
      _ExrTextureLoader: () => pT
    });
    var hm = fm(38766),
      Am = fm(37208),
      am = fm(40186);
    const xm = 4,
      wm = 4,
      Dm = 1,
      im = 2,
      Rm = 8,
      pm = 65536,
      Em = pm >> 3,
      om = 14,
      Om = 65537,
      Ym = 1 << om,
      qm = Ym - 1,
      jm = 59,
      Vm = 63,
      Im = 2 + Vm - jm;
    var Km, Qm;

    function nm(mm, Tm) {
      const fm = new Uint8Array(mm);
      let hm = 0;
      for (; 0 != fm[Tm.value + hm];) hm += 1;
      const Am = (new TextDecoder).decode(fm.slice(Tm.value, Tm.value + hm));
      return Tm.value = Tm.value + hm + 1, Am
    }

    function Jm(mm, Tm) {
      const fm = mm.getInt32(Tm.value, !0);
      return Tm.value += xm, fm
    }

    function cm(mm, Tm) {
      const fm = mm.getUint32(Tm.value, !0);
      return Tm.value += xm, fm
    }

    function zm(mm, Tm) {
      const fm = mm.getUint8(Tm.value);
      return Tm.value += Dm, fm
    }

    function Zm(mm, Tm) {
      const fm = mm.getUint16(Tm.value, !0);
      return Tm.value += im, fm
    }

    function km(mm, Tm) {
      const fm = mm[Tm.value];
      return Tm.value += Dm, fm
    }

    function bm(mm, Tm) {
      let fm;
      return fm = "getBigInt64" in DataView.prototype ? Number(mm.getBigInt64(Tm.value, !0)) : mm.getUint32(Tm.value + 4, !0) + Number(mm.getUint32(Tm.value, !0) << 32), Tm.value += Rm, fm
    }

    function Sm(mm, Tm) {
      const fm = mm.getFloat32(Tm.value, !0);
      return Tm.value += wm, fm
    }

    function em(mm, Tm) {
      return (0, am.d)(Zm(mm, Tm))
    }

    function Nm(mm, Tm) {
      return (0, am.j)((0, Am.Clamp)(Sm(mm, Tm), -am.h, am.h))
    }

    function Gm(mm, Tm, fm, hm) {
      switch (fm) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(mm, Tm, fm) {
            const hm = (new TextDecoder).decode(new Uint8Array(mm).slice(Tm.value, Tm.value + fm));
            return Tm.value = Tm.value + fm, hm
          }(mm.buffer, Tm, hm);
        case "chlist":
          return function(mm, Tm, fm) {
            const hm = Tm.value,
              Am = [];
            for (; Tm.value < hm + fm - 1;) {
              const fm = nm(mm.buffer, Tm),
                hm = Jm(mm, Tm),
                am = zm(mm, Tm);
              Tm.value += 3;
              const xm = Jm(mm, Tm),
                wm = Jm(mm, Tm);
              Am.push({
                name: fm,
                pixelType: hm,
                pLinear: am,
                xSampling: xm,
                ySampling: wm
              })
            }
            return Tm.value += 1, Am
          }(mm, Tm, hm);
        case "chromaticities":
          return function(mm, Tm) {
            return {
              redX: Sm(mm, Tm),
              redY: Sm(mm, Tm),
              greenX: Sm(mm, Tm),
              greenY: Sm(mm, Tm),
              blueX: Sm(mm, Tm),
              blueY: Sm(mm, Tm),
              whiteX: Sm(mm, Tm),
              whiteY: Sm(mm, Tm)
            }
          }(mm, Tm);
        case "compression":
          return function(mm, Tm) {
            return zm(mm, Tm)
          }(mm, Tm);
        case "box2i":
          return function(mm, Tm) {
            return {
              xMin: Jm(mm, Tm),
              yMin: Jm(mm, Tm),
              xMax: Jm(mm, Tm),
              yMax: Jm(mm, Tm)
            }
          }(mm, Tm);
        case "lineOrder":
          return function(mm, Tm) {
            const fm = zm(mm, Tm);
            return Qm[fm]
          }(mm, Tm);
        case "float":
          return Sm(mm, Tm);
        case "v2f":
          return function(mm, Tm) {
            return [Sm(mm, Tm), Sm(mm, Tm)]
          }(mm, Tm);
        case "v3f":
          return function(mm, Tm) {
            return [Sm(mm, Tm), Sm(mm, Tm), Sm(mm, Tm)]
          }(mm, Tm);
        case "int":
          return Jm(mm, Tm);
        case "rational":
          return function(mm, Tm) {
            return [Jm(mm, Tm), cm(mm, Tm)]
          }(mm, Tm);
        case "timecode":
          return function(mm, Tm) {
            return [cm(mm, Tm), cm(mm, Tm)]
          }(mm, Tm);
        case "preview":
          return Tm.value += hm, "skipped";
        default:
          return void(Tm.value += hm)
      }
    }

    function Xm(mm) {
      for (let Tm = 1; Tm < mm.length; Tm++) {
        const fm = mm[Tm - 1] + mm[Tm] - 128;
        mm[Tm] = fm
      }
    }

    function Pm(mm, Tm) {
      let fm = 0,
        hm = Math.floor((mm.length + 1) / 2),
        Am = 0;
      const am = mm.length - 1;
      for (; !(Am > am) && (Tm[Am++] = mm[fm++], !(Am > am));) Tm[Am++] = mm[hm++]
    }! function(mm) {
      mm[mm.NO_COMPRESSION = 0] = "NO_COMPRESSION", mm[mm.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", mm[mm.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", mm[mm.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", mm[mm.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", mm[mm.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(Km || (Km = {})),
    function(mm) {
      mm[mm.INCREASING_Y = 0] = "INCREASING_Y", mm[mm.DECREASING_Y = 1] = "DECREASING_Y"
    }(Qm || (Qm = {}));
    const Hm = 20000630;

    function ym(mm, Tm) {
      if (mm.getUint32(0, !0) != Hm) throw new Error("Incorrect OpenEXR format");
      const fm = mm.getUint8(4),
        Am = mm.getUint8(5),
        am = {
          singleTile: !!(2 & Am),
          longName: !!(4 & Am),
          deepFormat: !!(8 & Am),
          multiPart: !!(16 & Am)
        };
      Tm.value = 8;
      const xm = {};
      let wm = !0;
      for (; wm;) {
        const fm = nm(mm.buffer, Tm);
        if (fm) {
          const Am = nm(mm.buffer, Tm),
            am = Gm(mm, Tm, Am, cm(mm, Tm));
          void 0 === am ? hm.b.Warn(`Unknown header attribute type ${Am}'.`) : xm[fm] = am
        } else wm = !1
      }
      if (0 != (-5 & Am)) throw new Error("Unsupported file format");
      return {
        version: fm,
        spec: am,
        ...xm
      }
    }
    const Cm = 32768,
      rm = 65535;

    function sm(mm, Tm, fm, hm, Am) {
      for (; fm < mm;) Tm = Tm << 8 | km(hm, Am), fm += 8;
      return {
        l: Tm >> (fm -= mm) & (1 << mm) - 1,
        c: Tm,
        lc: fm
      }
    }

    function lm(mm, Tm, fm, hm) {
      return {
        c: mm = mm << 8 | km(fm, hm),
        lc: Tm += 8
      }
    }

    function Mm(mm, Tm, fm, hm, Am, am, xm, wm, Dm) {
      if (mm == Tm) {
        if (hm < 8) {
          const mm = lm(fm, hm, Am, am);
          fm = mm.c, hm = mm.lc
        }
        let mm = fm >> (hm -= 8);
        if (mm = new Uint8Array([mm])[0], wm.value + mm > Dm) return null;
        const Tm = xm[wm.value - 1];
        for (; mm-- > 0;) xm[wm.value++] = Tm
      } else {
        if (!(wm.value < Dm)) return null;
        xm[wm.value++] = mm
      }
      return {
        c: fm,
        lc: hm
      }
    }
    const um = new Array(59);

    function Bm(mm, Tm, fm, hm, Am, am) {
      const xm = Tm;
      let wm = 0,
        Dm = 0;
      for (; hm <= Am; hm++) {
        if (xm.value - Tm.value > fm) return;
        let im = sm(6, wm, Dm, mm, xm);
        const Rm = im.l;
        if (wm = im.c, Dm = im.lc, am[hm] = Rm, Rm == Vm) {
          if (xm.value - Tm.value > fm) throw new Error("Error in HufUnpackEncTable");
          im = sm(8, wm, Dm, mm, xm);
          let Rm = im.l + Im;
          if (wm = im.c, Dm = im.lc, hm + Rm > Am + 1) throw new Error("Error in HufUnpackEncTable");
          for (; Rm--;) am[hm++] = 0;
          hm--
        } else if (Rm >= jm) {
          let mm = Rm - jm + 2;
          if (hm + mm > Am + 1) throw new Error("Error in HufUnpackEncTable");
          for (; mm--;) am[hm++] = 0;
          hm--
        }
      }! function(mm) {
        for (let fm = 0; fm <= 58; ++fm) um[fm] = 0;
        for (let fm = 0; fm < Om; ++fm) um[mm[fm]] += 1;
        let Tm = 0;
        for (let fm = 58; fm > 0; --fm) {
          const mm = Tm + um[fm] >> 1;
          um[fm] = Tm, Tm = mm
        }
        for (let fm = 0; fm < Om; ++fm) {
          const Tm = mm[fm];
          Tm > 0 && (mm[fm] = Tm | um[Tm]++ << 6)
        }
      }(am)
    }

    function Lm(mm) {
      return 63 & mm
    }

    function tm(mm) {
      return mm >> 6
    }

    function Um(mm, Tm, fm, hm, Am, am) {
      const xm = fm.value,
        wm = cm(Tm, fm),
        Dm = cm(Tm, fm);
      fm.value += 4;
      const im = cm(Tm, fm);
      if (fm.value += 4, wm < 0 || wm >= Om || Dm < 0 || Dm >= Om) throw new Error("Wrong HUF_ENCSIZE");
      const Rm = new Array(Om),
        pm = new Array(Ym);
      ! function(mm) {
        for (let Tm = 0; Tm < Ym; Tm++) mm[Tm] = {}, mm[Tm].len = 0, mm[Tm].lit = 0, mm[Tm].p = null
      }(pm);
      if (Bm(mm, fm, hm - (fm.value - xm), wm, Dm, Rm), im > 8 * (hm - (fm.value - xm))) throw new Error("Wrong hufUncompress");
      ! function(mm, Tm, fm, hm) {
        for (; Tm <= fm; Tm++) {
          const fm = tm(mm[Tm]),
            Am = Lm(mm[Tm]);
          if (fm >> Am) throw new Error("Invalid table entry");
          if (Am > om) {
            const mm = hm[fm >> Am - om];
            if (mm.len) throw new Error("Invalid table entry");
            if (mm.lit++, mm.p) {
              const Tm = mm.p;
              mm.p = new Array(mm.lit);
              for (let fm = 0; fm < mm.lit - 1; ++fm) mm.p[fm] = Tm[fm]
            } else mm.p = new Array(1);
            mm.p[mm.lit - 1] = Tm
          } else if (Am) {
            let mm = 0;
            for (let am = 1 << om - Am; am > 0; am--) {
              const am = hm[(fm << om - Am) + mm];
              if (am.len || am.p) throw new Error("Invalid table entry");
              am.len = Am, am.lit = Tm, mm++
            }
          }
        }
      }(Rm, wm, Dm, pm),
      function(mm, Tm, fm, hm, Am, am, xm, wm, Dm) {
        let im = 0,
          Rm = 0;
        const pm = xm,
          Em = Math.trunc(hm.value + (Am + 7) / 8);
        for (; hm.value < Em;) {
          let Am = lm(im, Rm, fm, hm);
          for (im = Am.c, Rm = Am.lc; Rm >= om;) {
            const xm = Tm[im >> Rm - om & qm];
            if (xm.len) {
              Rm -= xm.len;
              const mm = Mm(xm.lit, am, im, Rm, fm, hm, wm, Dm, pm);
              mm && (im = mm.c, Rm = mm.lc)
            } else {
              if (!xm.p) throw new Error("hufDecode issues");
              let Tm;
              for (Tm = 0; Tm < xm.lit; Tm++) {
                const om = Lm(mm[xm.p[Tm]]);
                for (; Rm < om && hm.value < Em;) Am = lm(im, Rm, fm, hm), im = Am.c, Rm = Am.lc;
                if (Rm >= om && tm(mm[xm.p[Tm]]) == (im >> Rm - om & (1 << om) - 1)) {
                  Rm -= om;
                  const mm = Mm(xm.p[Tm], am, im, Rm, fm, hm, wm, Dm, pm);
                  mm && (im = mm.c, Rm = mm.lc);
                  break
                }
              }
              if (Tm == xm.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const Om = 8 - Am & 7;
        for (im >>= Om, Rm -= Om; Rm > 0;) {
          const mm = Tm[im << om - Rm & qm];
          if (!mm.len) throw new Error("HufDecode issues");
          {
            Rm -= mm.len;
            const Tm = Mm(mm.lit, am, im, Rm, fm, hm, wm, Dm, pm);
            Tm && (im = Tm.c, Rm = Tm.lc)
          }
        }
      }(Rm, pm, mm, fm, im, Dm, am, Am, {
        value: 0
      })
    }

    function dm(mm) {
      return 65535 & mm
    }

    function gm(mm) {
      const Tm = dm(mm);
      return Tm > 32767 ? Tm - 65536 : Tm
    }

    function Wm(mm, Tm) {
      const fm = gm(mm),
        hm = gm(Tm),
        Am = fm + (1 & hm) + (hm >> 1);
      return {
        a: Am,
        b: Am - hm
      }
    }

    function Fm(mm, Tm) {
      const fm = dm(mm),
        hm = dm(Tm),
        Am = fm - (hm >> 1) & rm;
      return {
        a: hm + Am - Cm & rm,
        b: Am
      }
    }

    function mT(mm, Tm, fm, hm, Am, am, xm) {
      const wm = xm < 16384,
        Dm = fm > Am ? Am : fm;
      let im, Rm, pm = 1;
      for (; pm <= Dm;) pm <<= 1;
      for (pm >>= 1, im = pm, pm >>= 1; pm >= 1;) {
        Rm = 0;
        const xm = Rm + am * (Am - im),
          Dm = am * pm,
          Em = am * im,
          om = hm * pm,
          Om = hm * im;
        let Ym, qm, jm, Vm;
        for (; Rm <= xm; Rm += Em) {
          let Am = Rm;
          const am = Rm + hm * (fm - im);
          for (; Am <= am; Am += Om) {
            const fm = Am + om,
              hm = Am + Dm,
              am = hm + om;
            if (wm) {
              let xm = Wm(mm[Am + Tm], mm[hm + Tm]);
              Ym = xm.a, jm = xm.b, xm = Wm(mm[fm + Tm], mm[am + Tm]), qm = xm.a, Vm = xm.b, xm = Wm(Ym, qm), mm[Am + Tm] = xm.a, mm[fm + Tm] = xm.b, xm = Wm(jm, Vm), mm[hm + Tm] = xm.a, mm[am + Tm] = xm.b
            } else {
              let xm = Fm(mm[Am + Tm], mm[hm + Tm]);
              Ym = xm.a, jm = xm.b, xm = Fm(mm[fm + Tm], mm[am + Tm]), qm = xm.a, Vm = xm.b, xm = Fm(Ym, qm), mm[Am + Tm] = xm.a, mm[fm + Tm] = xm.b, xm = Fm(jm, Vm), mm[hm + Tm] = xm.a, mm[am + Tm] = xm.b
            }
          }
          if (fm & pm) {
            const fm = Am + Dm;
            let hm;
            hm = wm ? Wm(mm[Am + Tm], mm[fm + Tm]) : Fm(mm[Am + Tm], mm[fm + Tm]), Ym = hm.a, mm[fm + Tm] = hm.b, mm[Am + Tm] = Ym
          }
        }
        if (Am & pm) {
          let Am = Rm;
          const am = Rm + hm * (fm - im);
          for (; Am <= am; Am += Om) {
            const fm = Am + om;
            let hm;
            hm = wm ? Wm(mm[Am + Tm], mm[fm + Tm]) : Fm(mm[Am + Tm], mm[fm + Tm]), Ym = hm.a, mm[fm + Tm] = hm.b, mm[Am + Tm] = Ym
          }
        }
        im = pm, pm >>= 1
      }
      return Rm
    }

    function TT(mm) {
      return new DataView(mm.array.buffer, mm.offset.value, mm.size)
    }

    function fT(mm) {
      const Tm = mm.viewer.buffer.slice(mm.offset.value, mm.offset.value + mm.size),
        fm = new Uint8Array(function(mm) {
          let Tm = mm.byteLength;
          const fm = [];
          let hm = 0;
          const Am = new DataView(mm);
          for (; Tm > 0;) {
            const mm = Am.getInt8(hm++);
            if (mm < 0) {
              const am = -mm;
              Tm -= am + 1;
              for (let mm = 0; mm < am; mm++) fm.push(Am.getUint8(hm++))
            } else {
              const am = mm;
              Tm -= 2;
              const xm = Am.getUint8(hm++);
              for (let mm = 0; mm < am + 1; mm++) fm.push(xm)
            }
          }
          return fm
        }(Tm)),
        hm = new Uint8Array(fm.length);
      return Xm(fm), Pm(fm, hm), new DataView(hm.buffer)
    }

    function hT(mm) {
      const Tm = mm.array.slice(mm.offset.value, mm.offset.value + mm.size),
        fm = fflate.unzlibSync(Tm),
        hm = new Uint8Array(fm.length);
      return Xm(fm), Pm(fm, hm), new DataView(hm.buffer)
    }

    function AT(mm) {
      const Tm = mm.array.slice(mm.offset.value, mm.offset.value + mm.size),
        fm = fflate.unzlibSync(Tm),
        hm = mm.lines * mm.channels * mm.width,
        Am = 1 == mm.type ? new Uint16Array(hm) : new Uint32Array(hm);
      let am = 0,
        xm = 0;
      const wm = new Array(4);
      for (let Dm = 0; Dm < mm.lines; Dm++)
        for (let Tm = 0; Tm < mm.channels; Tm++) {
          let Tm = 0;
          switch (mm.type) {
            case 1:
              wm[0] = am, wm[1] = wm[0] + mm.width, am = wm[1] + mm.width;
              for (let hm = 0; hm < mm.width; ++hm) {
                Tm += fm[wm[0]++] << 8 | fm[wm[1]++], Am[xm] = Tm, xm++
              }
              break;
            case 2:
              wm[0] = am, wm[1] = wm[0] + mm.width, wm[2] = wm[1] + mm.width, am = wm[2] + mm.width;
              for (let hm = 0; hm < mm.width; ++hm) {
                Tm += fm[wm[0]++] << 24 | fm[wm[1]++] << 16 | fm[wm[2]++] << 8, Am[xm] = Tm, xm++
              }
          }
        }
      return new DataView(Am.buffer)
    }

    function aT(mm) {
      const Tm = mm.viewer,
        fm = {
          value: mm.offset.value
        },
        hm = new Uint16Array(mm.width * mm.scanlineBlockSize * (mm.channels * mm.type)),
        Am = new Uint8Array(Em);
      let am = 0;
      const xm = new Array(mm.channels);
      for (let im = 0; im < mm.channels; im++) xm[im] = {}, xm[im].start = am, xm[im].end = xm[im].start, xm[im].nx = mm.width, xm[im].ny = mm.lines, xm[im].size = mm.type, am += xm[im].nx * xm[im].ny * xm[im].size;
      const wm = Zm(Tm, fm),
        Dm = Zm(Tm, fm);
      if (Dm >= Em) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (wm <= Dm)
        for (let im = 0; im < Dm - wm + 1; im++) Am[im + wm] = zm(Tm, fm);
      const Rm = new Uint16Array(pm),
        om = function(mm, Tm) {
          let fm = 0;
          for (let Am = 0; Am < pm; ++Am)(0 == Am || mm[Am >> 3] & 1 << (7 & Am)) && (Tm[fm++] = Am);
          const hm = fm - 1;
          for (; fm < pm;) Tm[fm++] = 0;
          return hm
        }(Am, Rm),
        Om = cm(Tm, fm);
      Um(mm.array, Tm, fm, Om, hm, am);
      for (let im = 0; im < mm.channels; ++im) {
        const mm = xm[im];
        for (let Tm = 0; Tm < xm[im].size; ++Tm) mT(hm, mm.start + Tm, mm.nx, mm.size, mm.ny, mm.nx * mm.size, om)
      }! function(mm, Tm, fm) {
        for (let hm = 0; hm < fm; ++hm) Tm[hm] = mm[Tm[hm]]
      }(Rm, hm, am);
      let Ym = 0;
      const qm = new Uint8Array(hm.buffer.byteLength);
      for (let pm = 0; pm < mm.lines; pm++)
        for (let Tm = 0; Tm < mm.channels; Tm++) {
          const mm = xm[Tm],
            fm = mm.nx * mm.size,
            Am = new Uint8Array(hm.buffer, mm.end * im, fm * im);
          qm.set(Am, Ym), Ym += fm * im, mm.end += fm
        }
      return new DataView(qm.buffer)
    }
    var xT, wT = fm(40203);
    ! function(mm) {
      mm[mm.Float = 0] = "Float", mm[mm.HalfFloat = 1] = "HalfFloat"
    }(xT || (xT = {}));
    class DT {}
    async function iT(mm, Tm, fm, hm) {
      const Am = {
        size: 0,
        viewer: Tm,
        array: new Uint8Array(Tm.buffer),
        offset: fm,
        width: mm.dataWindow.xMax - mm.dataWindow.xMin + 1,
        height: mm.dataWindow.yMax - mm.dataWindow.yMin + 1,
        channels: mm.channels.length,
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
      switch (mm.compression) {
        case Km.NO_COMPRESSION:
          Am.lines = 1, Am.uncompress = TT;
          break;
        case Km.RLE_COMPRESSION:
          Am.lines = 1, Am.uncompress = fT;
          break;
        case Km.ZIPS_COMPRESSION:
          Am.lines = 1, Am.uncompress = hT, await wT.h.LoadScriptAsync(DT.FFLATEUrl);
          break;
        case Km.ZIP_COMPRESSION:
          Am.lines = 16, Am.uncompress = hT, await wT.h.LoadScriptAsync(DT.FFLATEUrl);
          break;
        case Km.PIZ_COMPRESSION:
          Am.lines = 32, Am.uncompress = aT;
          break;
        case Km.PXR24_COMPRESSION:
          Am.lines = 16, Am.uncompress = AT, await wT.h.LoadScriptAsync(DT.FFLATEUrl);
          break;
        default:
          throw new Error(Km[mm.compression] + " is unsupported")
      }
      Am.scanlineBlockSize = Am.lines;
      const am = {};
      for (const wm of mm.channels) switch (wm.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          am[wm.name] = !0, Am.type = wm.pixelType
      }
      let xm = !1;
      if (am.R && am.G && am.B && am.A) Am.outputChannels = 4, Am.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (am.R && am.G && am.B) xm = !0, Am.outputChannels = 4, Am.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (am.R && am.G) Am.outputChannels = 2, Am.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (am.R) Am.outputChannels = 1, Am.decodeChannels = {
        R: 0
      };
      else {
        if (!am.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        Am.outputChannels = 1, Am.decodeChannels = {
          Y: 0
        }
      }
      if (1 === Am.type) switch (hm) {
        case xT.Float:
          Am.getter = em, Am.inputSize = im;
          break;
        case xT.HalfFloat:
          Am.getter = Zm, Am.inputSize = im
      } else {
        if (2 !== Am.type) throw new Error("Unsupported pixelType " + Am.type + " for " + mm.compression);
        switch (hm) {
          case xT.Float:
            Am.getter = Sm, Am.inputSize = wm;
            break;
          case xT.HalfFloat:
            Am.getter = Nm, Am.inputSize = wm
        }
      }
      Am.blockCount = Am.height / Am.scanlineBlockSize;
      for (let wm = 0; wm < Am.blockCount; wm++) bm(Tm, fm);
      const Dm = Am.width * Am.height * Am.outputChannels;
      switch (hm) {
        case xT.Float:
          Am.byteArray = new Float32Array(Dm), Am.textureType = 1, xm && Am.byteArray.fill(1, 0, Dm);
          break;
        case xT.HalfFloat:
          Am.byteArray = new Uint16Array(Dm), Am.textureType = 2, xm && Am.byteArray.fill(15360, 0, Dm);
          break;
        default:
          throw new Error("Unsupported type: " + hm)
      }
      let Rm = 0;
      for (const wm of mm.channels) void 0 !== Am.decodeChannels[wm.name] && (Am.channelLineOffsets[wm.name] = Rm * Am.width), Rm += 2 * wm.pixelType;
      return Am.bytesPerLine = Am.width * Rm, Am.outLineWidth = Am.width * Am.outputChannels, "INCREASING_Y" === mm.lineOrder ? Am.scanOrder = mm => mm : Am.scanOrder = mm => Am.height - 1 - mm, 4 == Am.outputChannels ? (Am.format = 5, Am.linearSpace = !0) : (Am.format = 6, Am.linearSpace = !1), Am
    }

    function RT(mm, Tm, fm, hm) {
      const Am = {
        value: 0
      };
      for (let am = 0; am < mm.height / mm.scanlineBlockSize; am++) {
        const xm = Jm(fm, hm) - Tm.dataWindow.yMin;
        mm.size = cm(fm, hm), mm.lines = xm + mm.scanlineBlockSize > mm.height ? mm.height - xm : mm.scanlineBlockSize;
        const wm = mm.size < mm.lines * mm.bytesPerLine && mm.uncompress ? mm.uncompress(mm) : TT(mm);
        hm.value += mm.size;
        for (let fm = 0; fm < mm.scanlineBlockSize; fm++) {
          const hm = am * mm.scanlineBlockSize,
            xm = fm + mm.scanOrder(hm);
          if (xm >= mm.height) continue;
          const Dm = fm * mm.bytesPerLine,
            im = (mm.height - 1 - xm) * mm.outLineWidth;
          for (let fm = 0; fm < mm.channels; fm++) {
            const hm = Tm.channels[fm].name,
              am = mm.channelLineOffsets[hm],
              xm = mm.decodeChannels[hm];
            if (void 0 !== xm) {
              Am.value = Dm + am;
              for (let Tm = 0; Tm < mm.width; Tm++) {
                const fm = im + Tm * mm.outputChannels + xm;
                mm.byteArray && (mm.byteArray[fm] = mm.getter(wm, Am))
              }
            }
          }
        }
      }
    }
    DT.DefaultOutputType = xT.HalfFloat, DT.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class pT {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(mm, Tm, fm, hm, Am) {
        throw ".exr not supported in Cube."
      }
      loadData(mm, Tm, fm) {
        const Am = new DataView(mm.buffer),
          am = {
            value: 0
          },
          xm = ym(Am, am);
        iT(xm, Am, am, DT.DefaultOutputType).then((mm => {
          RT(mm, xm, Am, am);
          const hm = xm.dataWindow.xMax - xm.dataWindow.xMin + 1,
            wm = xm.dataWindow.yMax - xm.dataWindow.yMin + 1;
          fm(hm, wm, Tm.generateMipMaps, !1, (() => {
            const fm = Tm.dO();
            Tm.format = xm.format, Tm.type = mm.textureType, Tm.invertY = !1, Tm._gammaSpace = !xm.linearSpace, mm.byteArray && fm._uploadDataToTextureDirectly(Tm, mm.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((mm => {
          hm.b.Error("Failed to load EXR texture: ", mm)
        }))
      }
    }
    async function ET(mm) {
      const Tm = new DataView(mm),
        fm = {
          value: 0
        },
        Am = ym(Tm, fm);
      try {
        const mm = await iT(Am, Tm, fm, xT.Float);
        return RT(mm, Am, Tm, fm), mm.byteArray ? {
          width: Am.dataWindow.xMax - Am.dataWindow.xMin + 1,
          height: Am.dataWindow.yMax - Am.dataWindow.yMin + 1,
          data: new Float32Array(mm.byteArray)
        } : (hm.b.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (am) {
        hm.b.Error("Failed to load EXR data: ", am)
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
for (const mm in modules) Object.freeze(modules[mm]);