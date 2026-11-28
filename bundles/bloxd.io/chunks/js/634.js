export const id = 634;
export const ids = [634];
export const modules = {
  54284: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      ReadExrDataAsync: () => NO,
      _ExrTextureLoader: () => oO
    });
    var Wd = md(40262),
      Fd = md(38663),
      Rd = md(41997);
    const Xd = 4,
      Kd = 4,
      hd = 1,
      vd = 2,
      Qd = 8,
      td = 65536,
      od = td >> 3,
      Nd = 14,
      qd = 65537,
      Hd = 1 << Nd,
      yd = Hd - 1,
      bd = 59,
      Td = 63,
      pd = 2 + Td - bd;
    var Yd, gd;

    function wd(dd, Od) {
      const md = new Uint8Array(dd);
      let Wd = 0;
      for (; 0 != md[Od.value + Wd];) Wd += 1;
      const Fd = (new TextDecoder).decode(md.slice(Od.value, Od.value + Wd));
      return Od.value = Od.value + Wd + 1, Fd
    }

    function Ed(dd, Od) {
      const md = dd.getInt32(Od.value, !0);
      return Od.value += Xd, md
    }

    function Jd(dd, Od) {
      const md = dd.getUint32(Od.value, !0);
      return Od.value += Xd, md
    }

    function Ud(dd, Od) {
      const md = dd.getUint8(Od.value);
      return Od.value += hd, md
    }

    function xd(dd, Od) {
      const md = dd.getUint16(Od.value, !0);
      return Od.value += vd, md
    }

    function Bd(dd, Od) {
      const md = dd[Od.value];
      return Od.value += hd, md
    }

    function Sd(dd, Od) {
      let md;
      return md = "getBigInt64" in DataView.prototype ? Number(dd.getBigInt64(Od.value, !0)) : dd.getUint32(Od.value + 4, !0) + Number(dd.getUint32(Od.value, !0) << 32), Od.value += Qd, md
    }

    function sd(dd, Od) {
      const md = dd.getFloat32(Od.value, !0);
      return Od.value += Kd, md
    }

    function ud(dd, Od) {
      return (0, Rd.b)(xd(dd, Od))
    }

    function Vd(dd, Od) {
      return (0, Rd.g)((0, Fd.Clamp)(sd(dd, Od), -Rd.d, Rd.d))
    }

    function Ad(dd, Od, md, Wd) {
      switch (md) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(dd, Od, md) {
            const Wd = (new TextDecoder).decode(new Uint8Array(dd).slice(Od.value, Od.value + md));
            return Od.value = Od.value + md, Wd
          }(dd.buffer, Od, Wd);
        case "chlist":
          return function(dd, Od, md) {
            const Wd = Od.value,
              Fd = [];
            for (; Od.value < Wd + md - 1;) {
              const md = wd(dd.buffer, Od),
                Wd = Ed(dd, Od),
                Rd = Ud(dd, Od);
              Od.value += 3;
              const Xd = Ed(dd, Od),
                Kd = Ed(dd, Od);
              Fd.push({
                name: md,
                pixelType: Wd,
                pLinear: Rd,
                xSampling: Xd,
                ySampling: Kd
              })
            }
            return Od.value += 1, Fd
          }(dd, Od, Wd);
        case "chromaticities":
          return function(dd, Od) {
            return {
              redX: sd(dd, Od),
              redY: sd(dd, Od),
              greenX: sd(dd, Od),
              greenY: sd(dd, Od),
              blueX: sd(dd, Od),
              blueY: sd(dd, Od),
              whiteX: sd(dd, Od),
              whiteY: sd(dd, Od)
            }
          }(dd, Od);
        case "compression":
          return function(dd, Od) {
            return Ud(dd, Od)
          }(dd, Od);
        case "box2i":
          return function(dd, Od) {
            return {
              xMin: Ed(dd, Od),
              yMin: Ed(dd, Od),
              xMax: Ed(dd, Od),
              yMax: Ed(dd, Od)
            }
          }(dd, Od);
        case "lineOrder":
          return function(dd, Od) {
            const md = Ud(dd, Od);
            return gd[md]
          }(dd, Od);
        case "float":
          return sd(dd, Od);
        case "v2f":
          return function(dd, Od) {
            return [sd(dd, Od), sd(dd, Od)]
          }(dd, Od);
        case "v3f":
          return function(dd, Od) {
            return [sd(dd, Od), sd(dd, Od), sd(dd, Od)]
          }(dd, Od);
        case "int":
          return Ed(dd, Od);
        case "rational":
          return function(dd, Od) {
            return [Ed(dd, Od), Jd(dd, Od)]
          }(dd, Od);
        case "timecode":
          return function(dd, Od) {
            return [Jd(dd, Od), Jd(dd, Od)]
          }(dd, Od);
        case "preview":
          return Od.value += Wd, "skipped";
        default:
          return void(Od.value += Wd)
      }
    }

    function rd(dd) {
      for (let Od = 1; Od < dd.length; Od++) {
        const md = dd[Od - 1] + dd[Od] - 128;
        dd[Od] = md
      }
    }

    function Gd(dd, Od) {
      let md = 0,
        Wd = Math.floor((dd.length + 1) / 2),
        Fd = 0;
      const Rd = dd.length - 1;
      for (; !(Fd > Rd) && (Od[Fd++] = dd[md++], !(Fd > Rd));) Od[Fd++] = dd[Wd++]
    }! function(dd) {
      dd[dd.NO_COMPRESSION = 0] = "NO_COMPRESSION", dd[dd.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", dd[dd.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", dd[dd.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", dd[dd.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", dd[dd.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(Yd || (Yd = {})),
    function(dd) {
      dd[dd.INCREASING_Y = 0] = "INCREASING_Y", dd[dd.DECREASING_Y = 1] = "DECREASING_Y"
    }(gd || (gd = {}));
    const nd = 20000630;

    function Ld(dd, Od) {
      if (dd.getUint32(0, !0) != nd) throw new Error("Incorrect OpenEXR format");
      const md = dd.getUint8(4),
        Fd = dd.getUint8(5),
        Rd = {
          singleTile: !!(2 & Fd),
          longName: !!(4 & Fd),
          deepFormat: !!(8 & Fd),
          multiPart: !!(16 & Fd)
        };
      Od.value = 8;
      const Xd = {};
      let Kd = !0;
      for (; Kd;) {
        const md = wd(dd.buffer, Od);
        if (md) {
          const Fd = wd(dd.buffer, Od),
            Rd = Ad(dd, Od, Fd, Jd(dd, Od));
          void 0 === Rd ? Wd.c.Warn(`Unknown header attribute type ${Fd}'.`) : Xd[md] = Rd
        } else Kd = !1
      }
      if (0 != (-5 & Fd)) throw new Error("Unsupported file format");
      return {
        version: md,
        spec: Rd,
        ...Xd
      }
    }
    const Pd = 32768,
      zd = 65535;

    function cd(dd, Od, md, Wd, Fd) {
      for (; md < dd;) Od = Od << 8 | Bd(Wd, Fd), md += 8;
      return {
        l: Od >> (md -= dd) & (1 << dd) - 1,
        c: Od,
        lc: md
      }
    }

    function jd(dd, Od, md, Wd) {
      return {
        c: dd = dd << 8 | Bd(md, Wd),
        lc: Od += 8
      }
    }

    function Dd(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd) {
      if (dd == Od) {
        if (Wd < 8) {
          const dd = jd(md, Wd, Fd, Rd);
          md = dd.c, Wd = dd.lc
        }
        let dd = md >> (Wd -= 8);
        if (dd = new Uint8Array([dd])[0], Kd.value + dd > hd) return null;
        const Od = Xd[Kd.value - 1];
        for (; dd-- > 0;) Xd[Kd.value++] = Od
      } else {
        if (!(Kd.value < hd)) return null;
        Xd[Kd.value++] = dd
      }
      return {
        c: md,
        lc: Wd
      }
    }
    const ed = new Array(59);

    function Id(dd, Od, md, Wd, Fd, Rd) {
      const Xd = Od;
      let Kd = 0,
        hd = 0;
      for (; Wd <= Fd; Wd++) {
        if (Xd.value - Od.value > md) return;
        let vd = cd(6, Kd, hd, dd, Xd);
        const Qd = vd.l;
        if (Kd = vd.c, hd = vd.lc, Rd[Wd] = Qd, Qd == Td) {
          if (Xd.value - Od.value > md) throw new Error("Error in HufUnpackEncTable");
          vd = cd(8, Kd, hd, dd, Xd);
          let Qd = vd.l + pd;
          if (Kd = vd.c, hd = vd.lc, Wd + Qd > Fd + 1) throw new Error("Error in HufUnpackEncTable");
          for (; Qd--;) Rd[Wd++] = 0;
          Wd--
        } else if (Qd >= bd) {
          let dd = Qd - bd + 2;
          if (Wd + dd > Fd + 1) throw new Error("Error in HufUnpackEncTable");
          for (; dd--;) Rd[Wd++] = 0;
          Wd--
        }
      }! function(dd) {
        for (let md = 0; md <= 58; ++md) ed[md] = 0;
        for (let md = 0; md < qd; ++md) ed[dd[md]] += 1;
        let Od = 0;
        for (let md = 58; md > 0; --md) {
          const dd = Od + ed[md] >> 1;
          ed[md] = Od, Od = dd
        }
        for (let md = 0; md < qd; ++md) {
          const Od = dd[md];
          Od > 0 && (dd[md] = Od | ed[Od]++ << 6)
        }
      }(Rd)
    }

    function ld(dd) {
      return 63 & dd
    }

    function Cd(dd) {
      return dd >> 6
    }

    function Zd(dd, Od, md, Wd, Fd, Rd) {
      const Xd = md.value,
        Kd = Jd(Od, md),
        hd = Jd(Od, md);
      md.value += 4;
      const vd = Jd(Od, md);
      if (md.value += 4, Kd < 0 || Kd >= qd || hd < 0 || hd >= qd) throw new Error("Wrong HUF_ENCSIZE");
      const Qd = new Array(qd),
        td = new Array(Hd);
      ! function(dd) {
        for (let Od = 0; Od < Hd; Od++) dd[Od] = {}, dd[Od].len = 0, dd[Od].lit = 0, dd[Od].p = null
      }(td);
      if (Id(dd, md, Wd - (md.value - Xd), Kd, hd, Qd), vd > 8 * (Wd - (md.value - Xd))) throw new Error("Wrong hufUncompress");
      ! function(dd, Od, md, Wd) {
        for (; Od <= md; Od++) {
          const md = Cd(dd[Od]),
            Fd = ld(dd[Od]);
          if (md >> Fd) throw new Error("Invalid table entry");
          if (Fd > Nd) {
            const dd = Wd[md >> Fd - Nd];
            if (dd.len) throw new Error("Invalid table entry");
            if (dd.lit++, dd.p) {
              const Od = dd.p;
              dd.p = new Array(dd.lit);
              for (let md = 0; md < dd.lit - 1; ++md) dd.p[md] = Od[md]
            } else dd.p = new Array(1);
            dd.p[dd.lit - 1] = Od
          } else if (Fd) {
            let dd = 0;
            for (let Rd = 1 << Nd - Fd; Rd > 0; Rd--) {
              const Rd = Wd[(md << Nd - Fd) + dd];
              if (Rd.len || Rd.p) throw new Error("Invalid table entry");
              Rd.len = Fd, Rd.lit = Od, dd++
            }
          }
        }
      }(Qd, Kd, hd, td),
      function(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd) {
        let vd = 0,
          Qd = 0;
        const td = Xd,
          od = Math.trunc(Wd.value + (Fd + 7) / 8);
        for (; Wd.value < od;) {
          let Fd = jd(vd, Qd, md, Wd);
          for (vd = Fd.c, Qd = Fd.lc; Qd >= Nd;) {
            const Xd = Od[vd >> Qd - Nd & yd];
            if (Xd.len) {
              Qd -= Xd.len;
              const dd = Dd(Xd.lit, Rd, vd, Qd, md, Wd, Kd, hd, td);
              dd && (vd = dd.c, Qd = dd.lc)
            } else {
              if (!Xd.p) throw new Error("hufDecode issues");
              let Od;
              for (Od = 0; Od < Xd.lit; Od++) {
                const Nd = ld(dd[Xd.p[Od]]);
                for (; Qd < Nd && Wd.value < od;) Fd = jd(vd, Qd, md, Wd), vd = Fd.c, Qd = Fd.lc;
                if (Qd >= Nd && Cd(dd[Xd.p[Od]]) == (vd >> Qd - Nd & (1 << Nd) - 1)) {
                  Qd -= Nd;
                  const dd = Dd(Xd.p[Od], Rd, vd, Qd, md, Wd, Kd, hd, td);
                  dd && (vd = dd.c, Qd = dd.lc);
                  break
                }
              }
              if (Od == Xd.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const qd = 8 - Fd & 7;
        for (vd >>= qd, Qd -= qd; Qd > 0;) {
          const dd = Od[vd << Nd - Qd & yd];
          if (!dd.len) throw new Error("HufDecode issues");
          {
            Qd -= dd.len;
            const Od = Dd(dd.lit, Rd, vd, Qd, md, Wd, Kd, hd, td);
            Od && (vd = Od.c, Qd = Od.lc)
          }
        }
      }(Qd, td, dd, md, vd, hd, Rd, Fd, {
        value: 0
      })
    }

    function kd(dd) {
      return 65535 & dd
    }

    function fd(dd) {
      const Od = kd(dd);
      return Od > 32767 ? Od - 65536 : Od
    }

    function Md(dd, Od) {
      const md = fd(dd),
        Wd = fd(Od),
        Fd = md + (1 & Wd) + (Wd >> 1);
      return {
        a: Fd,
        b: Fd - Wd
      }
    }

    function dO(dd, Od) {
      const md = kd(dd),
        Wd = kd(Od),
        Fd = md - (Wd >> 1) & zd;
      return {
        a: Wd + Fd - Pd & zd,
        b: Fd
      }
    }

    function OO(dd, Od, md, Wd, Fd, Rd, Xd) {
      const Kd = Xd < 16384,
        hd = md > Fd ? Fd : md;
      let vd, Qd, td = 1;
      for (; td <= hd;) td <<= 1;
      for (td >>= 1, vd = td, td >>= 1; td >= 1;) {
        Qd = 0;
        const Xd = Qd + Rd * (Fd - vd),
          hd = Rd * td,
          od = Rd * vd,
          Nd = Wd * td,
          qd = Wd * vd;
        let Hd, yd, bd, Td;
        for (; Qd <= Xd; Qd += od) {
          let Fd = Qd;
          const Rd = Qd + Wd * (md - vd);
          for (; Fd <= Rd; Fd += qd) {
            const md = Fd + Nd,
              Wd = Fd + hd,
              Rd = Wd + Nd;
            if (Kd) {
              let Xd = Md(dd[Fd + Od], dd[Wd + Od]);
              Hd = Xd.a, bd = Xd.b, Xd = Md(dd[md + Od], dd[Rd + Od]), yd = Xd.a, Td = Xd.b, Xd = Md(Hd, yd), dd[Fd + Od] = Xd.a, dd[md + Od] = Xd.b, Xd = Md(bd, Td), dd[Wd + Od] = Xd.a, dd[Rd + Od] = Xd.b
            } else {
              let Xd = dO(dd[Fd + Od], dd[Wd + Od]);
              Hd = Xd.a, bd = Xd.b, Xd = dO(dd[md + Od], dd[Rd + Od]), yd = Xd.a, Td = Xd.b, Xd = dO(Hd, yd), dd[Fd + Od] = Xd.a, dd[md + Od] = Xd.b, Xd = dO(bd, Td), dd[Wd + Od] = Xd.a, dd[Rd + Od] = Xd.b
            }
          }
          if (md & td) {
            const md = Fd + hd;
            let Wd;
            Wd = Kd ? Md(dd[Fd + Od], dd[md + Od]) : dO(dd[Fd + Od], dd[md + Od]), Hd = Wd.a, dd[md + Od] = Wd.b, dd[Fd + Od] = Hd
          }
        }
        if (Fd & td) {
          let Fd = Qd;
          const Rd = Qd + Wd * (md - vd);
          for (; Fd <= Rd; Fd += qd) {
            const md = Fd + Nd;
            let Wd;
            Wd = Kd ? Md(dd[Fd + Od], dd[md + Od]) : dO(dd[Fd + Od], dd[md + Od]), Hd = Wd.a, dd[md + Od] = Wd.b, dd[Fd + Od] = Hd
          }
        }
        vd = td, td >>= 1
      }
      return Qd
    }

    function mO(dd) {
      return new DataView(dd.array.buffer, dd.offset.value, dd.size)
    }

    function WO(dd) {
      const Od = dd.viewer.buffer.slice(dd.offset.value, dd.offset.value + dd.size),
        md = new Uint8Array(function(dd) {
          let Od = dd.byteLength;
          const md = [];
          let Wd = 0;
          const Fd = new DataView(dd);
          for (; Od > 0;) {
            const dd = Fd.getInt8(Wd++);
            if (dd < 0) {
              const Rd = -dd;
              Od -= Rd + 1;
              for (let dd = 0; dd < Rd; dd++) md.push(Fd.getUint8(Wd++))
            } else {
              const Rd = dd;
              Od -= 2;
              const Xd = Fd.getUint8(Wd++);
              for (let dd = 0; dd < Rd + 1; dd++) md.push(Xd)
            }
          }
          return md
        }(Od)),
        Wd = new Uint8Array(md.length);
      return rd(md), Gd(md, Wd), new DataView(Wd.buffer)
    }

    function FO(dd) {
      const Od = dd.array.slice(dd.offset.value, dd.offset.value + dd.size),
        md = fflate.unzlibSync(Od),
        Wd = new Uint8Array(md.length);
      return rd(md), Gd(md, Wd), new DataView(Wd.buffer)
    }

    function RO(dd) {
      const Od = dd.array.slice(dd.offset.value, dd.offset.value + dd.size),
        md = fflate.unzlibSync(Od),
        Wd = dd.lines * dd.channels * dd.width,
        Fd = 1 == dd.type ? new Uint16Array(Wd) : new Uint32Array(Wd);
      let Rd = 0,
        Xd = 0;
      const Kd = new Array(4);
      for (let hd = 0; hd < dd.lines; hd++)
        for (let Od = 0; Od < dd.channels; Od++) {
          let Od = 0;
          switch (dd.type) {
            case 1:
              Kd[0] = Rd, Kd[1] = Kd[0] + dd.width, Rd = Kd[1] + dd.width;
              for (let Wd = 0; Wd < dd.width; ++Wd) {
                Od += md[Kd[0]++] << 8 | md[Kd[1]++], Fd[Xd] = Od, Xd++
              }
              break;
            case 2:
              Kd[0] = Rd, Kd[1] = Kd[0] + dd.width, Kd[2] = Kd[1] + dd.width, Rd = Kd[2] + dd.width;
              for (let Wd = 0; Wd < dd.width; ++Wd) {
                Od += md[Kd[0]++] << 24 | md[Kd[1]++] << 16 | md[Kd[2]++] << 8, Fd[Xd] = Od, Xd++
              }
          }
        }
      return new DataView(Fd.buffer)
    }

    function XO(dd) {
      const Od = dd.viewer,
        md = {
          value: dd.offset.value
        },
        Wd = new Uint16Array(dd.width * dd.scanlineBlockSize * (dd.channels * dd.type)),
        Fd = new Uint8Array(od);
      let Rd = 0;
      const Xd = new Array(dd.channels);
      for (let vd = 0; vd < dd.channels; vd++) Xd[vd] = {}, Xd[vd].start = Rd, Xd[vd].end = Xd[vd].start, Xd[vd].nx = dd.width, Xd[vd].ny = dd.lines, Xd[vd].size = dd.type, Rd += Xd[vd].nx * Xd[vd].ny * Xd[vd].size;
      const Kd = xd(Od, md),
        hd = xd(Od, md);
      if (hd >= od) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (Kd <= hd)
        for (let vd = 0; vd < hd - Kd + 1; vd++) Fd[vd + Kd] = Ud(Od, md);
      const Qd = new Uint16Array(td),
        Nd = function(dd, Od) {
          let md = 0;
          for (let Fd = 0; Fd < td; ++Fd)(0 == Fd || dd[Fd >> 3] & 1 << (7 & Fd)) && (Od[md++] = Fd);
          const Wd = md - 1;
          for (; md < td;) Od[md++] = 0;
          return Wd
        }(Fd, Qd),
        qd = Jd(Od, md);
      Zd(dd.array, Od, md, qd, Wd, Rd);
      for (let vd = 0; vd < dd.channels; ++vd) {
        const dd = Xd[vd];
        for (let Od = 0; Od < Xd[vd].size; ++Od) OO(Wd, dd.start + Od, dd.nx, dd.size, dd.ny, dd.nx * dd.size, Nd)
      }! function(dd, Od, md) {
        for (let Wd = 0; Wd < md; ++Wd) Od[Wd] = dd[Od[Wd]]
      }(Qd, Wd, Rd);
      let Hd = 0;
      const yd = new Uint8Array(Wd.buffer.byteLength);
      for (let td = 0; td < dd.lines; td++)
        for (let Od = 0; Od < dd.channels; Od++) {
          const dd = Xd[Od],
            md = dd.nx * dd.size,
            Fd = new Uint8Array(Wd.buffer, dd.end * vd, md * vd);
          yd.set(Fd, Hd), Hd += md * vd, dd.end += md
        }
      return new DataView(yd.buffer)
    }
    var KO, hO = md(42029);
    ! function(dd) {
      dd[dd.Float = 0] = "Float", dd[dd.HalfFloat = 1] = "HalfFloat"
    }(KO || (KO = {}));
    class vO {}
    async function QO(dd, Od, md, Wd) {
      const Fd = {
        size: 0,
        viewer: Od,
        array: new Uint8Array(Od.buffer),
        offset: md,
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
        case Yd.NO_COMPRESSION:
          Fd.lines = 1, Fd.uncompress = mO;
          break;
        case Yd.RLE_COMPRESSION:
          Fd.lines = 1, Fd.uncompress = WO;
          break;
        case Yd.ZIPS_COMPRESSION:
          Fd.lines = 1, Fd.uncompress = FO, await hO.g.LoadScriptAsync(vO.FFLATEUrl);
          break;
        case Yd.ZIP_COMPRESSION:
          Fd.lines = 16, Fd.uncompress = FO, await hO.g.LoadScriptAsync(vO.FFLATEUrl);
          break;
        case Yd.PIZ_COMPRESSION:
          Fd.lines = 32, Fd.uncompress = XO;
          break;
        case Yd.PXR24_COMPRESSION:
          Fd.lines = 16, Fd.uncompress = RO, await hO.g.LoadScriptAsync(vO.FFLATEUrl);
          break;
        default:
          throw new Error(Yd[dd.compression] + " is unsupported")
      }
      Fd.scanlineBlockSize = Fd.lines;
      const Rd = {};
      for (const Kd of dd.channels) switch (Kd.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          Rd[Kd.name] = !0, Fd.type = Kd.pixelType
      }
      let Xd = !1;
      if (Rd.R && Rd.G && Rd.B && Rd.A) Fd.outputChannels = 4, Fd.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (Rd.R && Rd.G && Rd.B) Xd = !0, Fd.outputChannels = 4, Fd.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (Rd.R && Rd.G) Fd.outputChannels = 2, Fd.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (Rd.R) Fd.outputChannels = 1, Fd.decodeChannels = {
        R: 0
      };
      else {
        if (!Rd.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        Fd.outputChannels = 1, Fd.decodeChannels = {
          Y: 0
        }
      }
      if (1 === Fd.type) switch (Wd) {
        case KO.Float:
          Fd.getter = ud, Fd.inputSize = vd;
          break;
        case KO.HalfFloat:
          Fd.getter = xd, Fd.inputSize = vd
      } else {
        if (2 !== Fd.type) throw new Error("Unsupported pixelType " + Fd.type + " for " + dd.compression);
        switch (Wd) {
          case KO.Float:
            Fd.getter = sd, Fd.inputSize = Kd;
            break;
          case KO.HalfFloat:
            Fd.getter = Vd, Fd.inputSize = Kd
        }
      }
      Fd.blockCount = Fd.height / Fd.scanlineBlockSize;
      for (let Kd = 0; Kd < Fd.blockCount; Kd++) Sd(Od, md);
      const hd = Fd.width * Fd.height * Fd.outputChannels;
      switch (Wd) {
        case KO.Float:
          Fd.byteArray = new Float32Array(hd), Fd.textureType = 1, Xd && Fd.byteArray.fill(1, 0, hd);
          break;
        case KO.HalfFloat:
          Fd.byteArray = new Uint16Array(hd), Fd.textureType = 2, Xd && Fd.byteArray.fill(15360, 0, hd);
          break;
        default:
          throw new Error("Unsupported type: " + Wd)
      }
      let Qd = 0;
      for (const Kd of dd.channels) void 0 !== Fd.decodeChannels[Kd.name] && (Fd.channelLineOffsets[Kd.name] = Qd * Fd.width), Qd += 2 * Kd.pixelType;
      return Fd.bytesPerLine = Fd.width * Qd, Fd.outLineWidth = Fd.width * Fd.outputChannels, "INCREASING_Y" === dd.lineOrder ? Fd.scanOrder = dd => dd : Fd.scanOrder = dd => Fd.height - 1 - dd, 4 == Fd.outputChannels ? (Fd.format = 5, Fd.linearSpace = !0) : (Fd.format = 6, Fd.linearSpace = !1), Fd
    }

    function tO(dd, Od, md, Wd) {
      const Fd = {
        value: 0
      };
      for (let Rd = 0; Rd < dd.height / dd.scanlineBlockSize; Rd++) {
        const Xd = Ed(md, Wd) - Od.dataWindow.yMin;
        dd.size = Jd(md, Wd), dd.lines = Xd + dd.scanlineBlockSize > dd.height ? dd.height - Xd : dd.scanlineBlockSize;
        const Kd = dd.size < dd.lines * dd.bytesPerLine && dd.uncompress ? dd.uncompress(dd) : mO(dd);
        Wd.value += dd.size;
        for (let md = 0; md < dd.scanlineBlockSize; md++) {
          const Wd = Rd * dd.scanlineBlockSize,
            Xd = md + dd.scanOrder(Wd);
          if (Xd >= dd.height) continue;
          const hd = md * dd.bytesPerLine,
            vd = (dd.height - 1 - Xd) * dd.outLineWidth;
          for (let md = 0; md < dd.channels; md++) {
            const Wd = Od.channels[md].name,
              Rd = dd.channelLineOffsets[Wd],
              Xd = dd.decodeChannels[Wd];
            if (void 0 !== Xd) {
              Fd.value = hd + Rd;
              for (let Od = 0; Od < dd.width; Od++) {
                const md = vd + Od * dd.outputChannels + Xd;
                dd.byteArray && (dd.byteArray[md] = dd.getter(Kd, Fd))
              }
            }
          }
        }
      }
    }
    vO.DefaultOutputType = KO.HalfFloat, vO.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class oO {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(dd, Od, md, Wd, Fd) {
        throw ".exr not supported in Cube."
      }
      loadData(dd, Od, md) {
        const Fd = new DataView(dd.buffer),
          Rd = {
            value: 0
          },
          Xd = Ld(Fd, Rd);
        QO(Xd, Fd, Rd, vO.DefaultOutputType).then((dd => {
          tO(dd, Xd, Fd, Rd);
          const Wd = Xd.dataWindow.xMax - Xd.dataWindow.xMin + 1,
            Kd = Xd.dataWindow.yMax - Xd.dataWindow.yMin + 1;
          md(Wd, Kd, Od.generateMipMaps, !1, (() => {
            const md = Od.Iq();
            Od.format = Xd.format, Od.type = dd.textureType, Od.invertY = !1, Od._gammaSpace = !Xd.linearSpace, dd.byteArray && md._uploadDataToTextureDirectly(Od, dd.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((dd => {
          Wd.c.Error("Failed to load EXR texture: ", dd)
        }))
      }
    }
    async function NO(dd) {
      const Od = new DataView(dd),
        md = {
          value: 0
        },
        Fd = Ld(Od, md);
      try {
        const dd = await QO(Fd, Od, md, KO.Float);
        return tO(dd, Fd, Od, md), dd.byteArray ? {
          width: Fd.dataWindow.xMax - Fd.dataWindow.xMin + 1,
          height: Fd.dataWindow.yMax - Fd.dataWindow.yMin + 1,
          data: new Float32Array(dd.byteArray)
        } : (Wd.c.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (Rd) {
        Wd.c.Error("Failed to load EXR data: ", Rd)
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