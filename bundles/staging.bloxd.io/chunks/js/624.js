export const id = 624;
export const ids = [624];
export const modules = {
  45062: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      ReadExrDataAsync: () => Ri,
      _ExrTextureLoader: () => oi
    });
    var ye = He(39467),
      be = He(37938),
      Me = He(41178);
    const Ke = 4,
      Ue = 4,
      Fe = 1,
      Je = 2,
      oe = 8,
      Re = 65536,
      ke = Re >> 3,
      qe = 14,
      fe = 65537,
      Te = 1 << qe,
      pe = Te - 1,
      Xe = 59,
      ze = 63,
      Be = 2 + ze - Xe;
    var Ee, ge;

    function Oe(ee, ie) {
      const He = new Uint8Array(ee);
      let ye = 0;
      for (; 0 != He[ie.value + ye];) ye += 1;
      const be = (new TextDecoder).decode(He.slice(ie.value, ie.value + ye));
      return ie.value = ie.value + ye + 1, be
    }

    function de(ee, ie) {
      const He = ee.getInt32(ie.value, !0);
      return ie.value += Ke, He
    }

    function We(ee, ie) {
      const He = ee.getUint32(ie.value, !0);
      return ie.value += Ke, He
    }

    function te(ee, ie) {
      const He = ee.getUint8(ie.value);
      return ie.value += Fe, He
    }

    function Ze(ee, ie) {
      const He = ee.getUint16(ie.value, !0);
      return ie.value += Je, He
    }

    function we(ee, ie) {
      const He = ee[ie.value];
      return ie.value += Fe, He
    }

    function De(ee, ie) {
      let He;
      return He = "getBigInt64" in DataView.prototype ? Number(ee.getBigInt64(ie.value, !0)) : ee.getUint32(ie.value + 4, !0) + Number(ee.getUint32(ie.value, !0) << 32), ie.value += oe, He
    }

    function Pe(ee, ie) {
      const He = ee.getFloat32(ie.value, !0);
      return ie.value += Ue, He
    }

    function Ae(ee, ie) {
      return (0, Me.d)(Ze(ee, ie))
    }

    function Ye(ee, ie) {
      return (0, Me.j)((0, be.Clamp)(Pe(ee, ie), -Me.h, Me.h))
    }

    function Ve(ee, ie, He, ye) {
      switch (He) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(ee, ie, He) {
            const ye = (new TextDecoder).decode(new Uint8Array(ee).slice(ie.value, ie.value + He));
            return ie.value = ie.value + He, ye
          }(ee.buffer, ie, ye);
        case "chlist":
          return function(ee, ie, He) {
            const ye = ie.value,
              be = [];
            for (; ie.value < ye + He - 1;) {
              const He = Oe(ee.buffer, ie),
                ye = de(ee, ie),
                Me = te(ee, ie);
              ie.value += 3;
              const Ke = de(ee, ie),
                Ue = de(ee, ie);
              be.push({
                name: He,
                pixelType: ye,
                pLinear: Me,
                xSampling: Ke,
                ySampling: Ue
              })
            }
            return ie.value += 1, be
          }(ee, ie, ye);
        case "chromaticities":
          return function(ee, ie) {
            return {
              redX: Pe(ee, ie),
              redY: Pe(ee, ie),
              greenX: Pe(ee, ie),
              greenY: Pe(ee, ie),
              blueX: Pe(ee, ie),
              blueY: Pe(ee, ie),
              whiteX: Pe(ee, ie),
              whiteY: Pe(ee, ie)
            }
          }(ee, ie);
        case "compression":
          return function(ee, ie) {
            return te(ee, ie)
          }(ee, ie);
        case "box2i":
          return function(ee, ie) {
            return {
              xMin: de(ee, ie),
              yMin: de(ee, ie),
              xMax: de(ee, ie),
              yMax: de(ee, ie)
            }
          }(ee, ie);
        case "lineOrder":
          return function(ee, ie) {
            const He = te(ee, ie);
            return ge[He]
          }(ee, ie);
        case "float":
          return Pe(ee, ie);
        case "v2f":
          return function(ee, ie) {
            return [Pe(ee, ie), Pe(ee, ie)]
          }(ee, ie);
        case "v3f":
          return function(ee, ie) {
            return [Pe(ee, ie), Pe(ee, ie), Pe(ee, ie)]
          }(ee, ie);
        case "int":
          return de(ee, ie);
        case "rational":
          return function(ee, ie) {
            return [de(ee, ie), We(ee, ie)]
          }(ee, ie);
        case "timecode":
          return function(ee, ie) {
            return [We(ee, ie), We(ee, ie)]
          }(ee, ie);
        case "preview":
          return ie.value += ye, "skipped";
        default:
          return void(ie.value += ye)
      }
    }

    function ae(ee) {
      for (let ie = 1; ie < ee.length; ie++) {
        const He = ee[ie - 1] + ee[ie] - 128;
        ee[ie] = He
      }
    }

    function ce(ee, ie) {
      let He = 0,
        ye = Math.floor((ee.length + 1) / 2),
        be = 0;
      const Me = ee.length - 1;
      for (; !(be > Me) && (ie[be++] = ee[He++], !(be > Me));) ie[be++] = ee[ye++]
    }! function(ee) {
      ee[ee.NO_COMPRESSION = 0] = "NO_COMPRESSION", ee[ee.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", ee[ee.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", ee[ee.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", ee[ee.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", ee[ee.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(Ee || (Ee = {})),
    function(ee) {
      ee[ee.INCREASING_Y = 0] = "INCREASING_Y", ee[ee.DECREASING_Y = 1] = "DECREASING_Y"
    }(ge || (ge = {}));
    const xe = 20000630;

    function Le(ee, ie) {
      if (ee.getUint32(0, !0) != xe) throw new Error("Incorrect OpenEXR format");
      const He = ee.getUint8(4),
        be = ee.getUint8(5),
        Me = {
          singleTile: !!(2 & be),
          longName: !!(4 & be),
          deepFormat: !!(8 & be),
          multiPart: !!(16 & be)
        };
      ie.value = 8;
      const Ke = {};
      let Ue = !0;
      for (; Ue;) {
        const He = Oe(ee.buffer, ie);
        if (He) {
          const be = Oe(ee.buffer, ie),
            Me = Ve(ee, ie, be, We(ee, ie));
          void 0 === Me ? ye.e.Warn(`Unknown header attribute type ${be}'.`) : Ke[He] = Me
        } else Ue = !1
      }
      if (0 != (-5 & be)) throw new Error("Unsupported file format");
      return {
        version: He,
        spec: Me,
        ...Ke
      }
    }
    const Ce = 32768,
      ve = 65535;

    function ue(ee, ie, He, ye, be) {
      for (; He < ee;) ie = ie << 8 | we(ye, be), He += 8;
      return {
        l: ie >> (He -= ee) & (1 << ee) - 1,
        c: ie,
        lc: He
      }
    }

    function me(ee, ie, He, ye) {
      return {
        c: ee = ee << 8 | we(He, ye),
        lc: ie += 8
      }
    }

    function le(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
      if (ee == ie) {
        if (ye < 8) {
          const ee = me(He, ye, be, Me);
          He = ee.c, ye = ee.lc
        }
        let ee = He >> (ye -= 8);
        if (ee = new Uint8Array([ee])[0], Ue.value + ee > Fe) return null;
        const ie = Ke[Ue.value - 1];
        for (; ee-- > 0;) Ke[Ue.value++] = ie
      } else {
        if (!(Ue.value < Fe)) return null;
        Ke[Ue.value++] = ee
      }
      return {
        c: He,
        lc: ye
      }
    }
    const Se = new Array(59);

    function ne(ee, ie, He, ye, be, Me) {
      const Ke = ie;
      let Ue = 0,
        Fe = 0;
      for (; ye <= be; ye++) {
        if (Ke.value - ie.value > He) return;
        let Je = ue(6, Ue, Fe, ee, Ke);
        const oe = Je.l;
        if (Ue = Je.c, Fe = Je.lc, Me[ye] = oe, oe == ze) {
          if (Ke.value - ie.value > He) throw new Error("Error in HufUnpackEncTable");
          Je = ue(8, Ue, Fe, ee, Ke);
          let oe = Je.l + Be;
          if (Ue = Je.c, Fe = Je.lc, ye + oe > be + 1) throw new Error("Error in HufUnpackEncTable");
          for (; oe--;) Me[ye++] = 0;
          ye--
        } else if (oe >= Xe) {
          let ee = oe - Xe + 2;
          if (ye + ee > be + 1) throw new Error("Error in HufUnpackEncTable");
          for (; ee--;) Me[ye++] = 0;
          ye--
        }
      }! function(ee) {
        for (let He = 0; He <= 58; ++He) Se[He] = 0;
        for (let He = 0; He < fe; ++He) Se[ee[He]] += 1;
        let ie = 0;
        for (let He = 58; He > 0; --He) {
          const ee = ie + Se[He] >> 1;
          Se[He] = ie, ie = ee
        }
        for (let He = 0; He < fe; ++He) {
          const ie = ee[He];
          ie > 0 && (ee[He] = ie | Se[ie]++ << 6)
        }
      }(Me)
    }

    function je(ee) {
      return 63 & ee
    }

    function se(ee) {
      return ee >> 6
    }

    function Ie(ee, ie, He, ye, be, Me) {
      const Ke = He.value,
        Ue = We(ie, He),
        Fe = We(ie, He);
      He.value += 4;
      const Je = We(ie, He);
      if (He.value += 4, Ue < 0 || Ue >= fe || Fe < 0 || Fe >= fe) throw new Error("Wrong HUF_ENCSIZE");
      const oe = new Array(fe),
        Re = new Array(Te);
      ! function(ee) {
        for (let ie = 0; ie < Te; ie++) ee[ie] = {}, ee[ie].len = 0, ee[ie].lit = 0, ee[ie].p = null
      }(Re);
      if (ne(ee, He, ye - (He.value - Ke), Ue, Fe, oe), Je > 8 * (ye - (He.value - Ke))) throw new Error("Wrong hufUncompress");
      ! function(ee, ie, He, ye) {
        for (; ie <= He; ie++) {
          const He = se(ee[ie]),
            be = je(ee[ie]);
          if (He >> be) throw new Error("Invalid table entry");
          if (be > qe) {
            const ee = ye[He >> be - qe];
            if (ee.len) throw new Error("Invalid table entry");
            if (ee.lit++, ee.p) {
              const ie = ee.p;
              ee.p = new Array(ee.lit);
              for (let He = 0; He < ee.lit - 1; ++He) ee.p[He] = ie[He]
            } else ee.p = new Array(1);
            ee.p[ee.lit - 1] = ie
          } else if (be) {
            let ee = 0;
            for (let Me = 1 << qe - be; Me > 0; Me--) {
              const Me = ye[(He << qe - be) + ee];
              if (Me.len || Me.p) throw new Error("Invalid table entry");
              Me.len = be, Me.lit = ie, ee++
            }
          }
        }
      }(oe, Ue, Fe, Re),
      function(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
        let Je = 0,
          oe = 0;
        const Re = Ke,
          ke = Math.trunc(ye.value + (be + 7) / 8);
        for (; ye.value < ke;) {
          let be = me(Je, oe, He, ye);
          for (Je = be.c, oe = be.lc; oe >= qe;) {
            const Ke = ie[Je >> oe - qe & pe];
            if (Ke.len) {
              oe -= Ke.len;
              const ee = le(Ke.lit, Me, Je, oe, He, ye, Ue, Fe, Re);
              ee && (Je = ee.c, oe = ee.lc)
            } else {
              if (!Ke.p) throw new Error("hufDecode issues");
              let ie;
              for (ie = 0; ie < Ke.lit; ie++) {
                const qe = je(ee[Ke.p[ie]]);
                for (; oe < qe && ye.value < ke;) be = me(Je, oe, He, ye), Je = be.c, oe = be.lc;
                if (oe >= qe && se(ee[Ke.p[ie]]) == (Je >> oe - qe & (1 << qe) - 1)) {
                  oe -= qe;
                  const ee = le(Ke.p[ie], Me, Je, oe, He, ye, Ue, Fe, Re);
                  ee && (Je = ee.c, oe = ee.lc);
                  break
                }
              }
              if (ie == Ke.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const fe = 8 - be & 7;
        for (Je >>= fe, oe -= fe; oe > 0;) {
          const ee = ie[Je << qe - oe & pe];
          if (!ee.len) throw new Error("HufDecode issues");
          {
            oe -= ee.len;
            const ie = le(ee.lit, Me, Je, oe, He, ye, Ue, Fe, Re);
            ie && (Je = ie.c, oe = ie.lc)
          }
        }
      }(oe, Re, ee, He, Je, Fe, Me, be, {
        value: 0
      })
    }

    function he(ee) {
      return 65535 & ee
    }

    function Ne(ee) {
      const ie = he(ee);
      return ie > 32767 ? ie - 65536 : ie
    }

    function Ge(ee, ie) {
      const He = Ne(ee),
        ye = Ne(ie),
        be = He + (1 & ye) + (ye >> 1);
      return {
        a: be,
        b: be - ye
      }
    }

    function re(ee, ie) {
      const He = he(ee),
        ye = he(ie),
        be = He - (ye >> 1) & ve;
      return {
        a: ye + be - Ce & ve,
        b: be
      }
    }

    function Qe(ee, ie, He, ye, be, Me, Ke) {
      const Ue = Ke < 16384,
        Fe = He > be ? be : He;
      let Je, oe, Re = 1;
      for (; Re <= Fe;) Re <<= 1;
      for (Re >>= 1, Je = Re, Re >>= 1; Re >= 1;) {
        oe = 0;
        const Ke = oe + Me * (be - Je),
          Fe = Me * Re,
          ke = Me * Je,
          qe = ye * Re,
          fe = ye * Je;
        let Te, pe, Xe, ze;
        for (; oe <= Ke; oe += ke) {
          let be = oe;
          const Me = oe + ye * (He - Je);
          for (; be <= Me; be += fe) {
            const He = be + qe,
              ye = be + Fe,
              Me = ye + qe;
            if (Ue) {
              let Ke = Ge(ee[be + ie], ee[ye + ie]);
              Te = Ke.a, Xe = Ke.b, Ke = Ge(ee[He + ie], ee[Me + ie]), pe = Ke.a, ze = Ke.b, Ke = Ge(Te, pe), ee[be + ie] = Ke.a, ee[He + ie] = Ke.b, Ke = Ge(Xe, ze), ee[ye + ie] = Ke.a, ee[Me + ie] = Ke.b
            } else {
              let Ke = re(ee[be + ie], ee[ye + ie]);
              Te = Ke.a, Xe = Ke.b, Ke = re(ee[He + ie], ee[Me + ie]), pe = Ke.a, ze = Ke.b, Ke = re(Te, pe), ee[be + ie] = Ke.a, ee[He + ie] = Ke.b, Ke = re(Xe, ze), ee[ye + ie] = Ke.a, ee[Me + ie] = Ke.b
            }
          }
          if (He & Re) {
            const He = be + Fe;
            let ye;
            ye = Ue ? Ge(ee[be + ie], ee[He + ie]) : re(ee[be + ie], ee[He + ie]), Te = ye.a, ee[He + ie] = ye.b, ee[be + ie] = Te
          }
        }
        if (be & Re) {
          let be = oe;
          const Me = oe + ye * (He - Je);
          for (; be <= Me; be += fe) {
            const He = be + qe;
            let ye;
            ye = Ue ? Ge(ee[be + ie], ee[He + ie]) : re(ee[be + ie], ee[He + ie]), Te = ye.a, ee[He + ie] = ye.b, ee[be + ie] = Te
          }
        }
        Je = Re, Re >>= 1
      }
      return oe
    }

    function ei(ee) {
      return new DataView(ee.array.buffer, ee.offset.value, ee.size)
    }

    function ii(ee) {
      const ie = ee.viewer.buffer.slice(ee.offset.value, ee.offset.value + ee.size),
        He = new Uint8Array(function(ee) {
          let ie = ee.byteLength;
          const He = [];
          let ye = 0;
          const be = new DataView(ee);
          for (; ie > 0;) {
            const ee = be.getInt8(ye++);
            if (ee < 0) {
              const Me = -ee;
              ie -= Me + 1;
              for (let ee = 0; ee < Me; ee++) He.push(be.getUint8(ye++))
            } else {
              const Me = ee;
              ie -= 2;
              const Ke = be.getUint8(ye++);
              for (let ee = 0; ee < Me + 1; ee++) He.push(Ke)
            }
          }
          return He
        }(ie)),
        ye = new Uint8Array(He.length);
      return ae(He), ce(He, ye), new DataView(ye.buffer)
    }

    function Hi(ee) {
      const ie = ee.array.slice(ee.offset.value, ee.offset.value + ee.size),
        He = fflate.unzlibSync(ie),
        ye = new Uint8Array(He.length);
      return ae(He), ce(He, ye), new DataView(ye.buffer)
    }

    function yi(ee) {
      const ie = ee.array.slice(ee.offset.value, ee.offset.value + ee.size),
        He = fflate.unzlibSync(ie),
        ye = ee.lines * ee.channels * ee.width,
        be = 1 == ee.type ? new Uint16Array(ye) : new Uint32Array(ye);
      let Me = 0,
        Ke = 0;
      const Ue = new Array(4);
      for (let Fe = 0; Fe < ee.lines; Fe++)
        for (let ie = 0; ie < ee.channels; ie++) {
          let ie = 0;
          switch (ee.type) {
            case 1:
              Ue[0] = Me, Ue[1] = Ue[0] + ee.width, Me = Ue[1] + ee.width;
              for (let ye = 0; ye < ee.width; ++ye) {
                ie += He[Ue[0]++] << 8 | He[Ue[1]++], be[Ke] = ie, Ke++
              }
              break;
            case 2:
              Ue[0] = Me, Ue[1] = Ue[0] + ee.width, Ue[2] = Ue[1] + ee.width, Me = Ue[2] + ee.width;
              for (let ye = 0; ye < ee.width; ++ye) {
                ie += He[Ue[0]++] << 24 | He[Ue[1]++] << 16 | He[Ue[2]++] << 8, be[Ke] = ie, Ke++
              }
          }
        }
      return new DataView(be.buffer)
    }

    function bi(ee) {
      const ie = ee.viewer,
        He = {
          value: ee.offset.value
        },
        ye = new Uint16Array(ee.width * ee.scanlineBlockSize * (ee.channels * ee.type)),
        be = new Uint8Array(ke);
      let Me = 0;
      const Ke = new Array(ee.channels);
      for (let Je = 0; Je < ee.channels; Je++) Ke[Je] = {}, Ke[Je].start = Me, Ke[Je].end = Ke[Je].start, Ke[Je].nx = ee.width, Ke[Je].ny = ee.lines, Ke[Je].size = ee.type, Me += Ke[Je].nx * Ke[Je].ny * Ke[Je].size;
      const Ue = Ze(ie, He),
        Fe = Ze(ie, He);
      if (Fe >= ke) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (Ue <= Fe)
        for (let Je = 0; Je < Fe - Ue + 1; Je++) be[Je + Ue] = te(ie, He);
      const oe = new Uint16Array(Re),
        qe = function(ee, ie) {
          let He = 0;
          for (let be = 0; be < Re; ++be)(0 == be || ee[be >> 3] & 1 << (7 & be)) && (ie[He++] = be);
          const ye = He - 1;
          for (; He < Re;) ie[He++] = 0;
          return ye
        }(be, oe),
        fe = We(ie, He);
      Ie(ee.array, ie, He, fe, ye, Me);
      for (let Je = 0; Je < ee.channels; ++Je) {
        const ee = Ke[Je];
        for (let ie = 0; ie < Ke[Je].size; ++ie) Qe(ye, ee.start + ie, ee.nx, ee.size, ee.ny, ee.nx * ee.size, qe)
      }! function(ee, ie, He) {
        for (let ye = 0; ye < He; ++ye) ie[ye] = ee[ie[ye]]
      }(oe, ye, Me);
      let Te = 0;
      const pe = new Uint8Array(ye.buffer.byteLength);
      for (let Re = 0; Re < ee.lines; Re++)
        for (let ie = 0; ie < ee.channels; ie++) {
          const ee = Ke[ie],
            He = ee.nx * ee.size,
            be = new Uint8Array(ye.buffer, ee.end * Je, He * Je);
          pe.set(be, Te), Te += He * Je, ee.end += He
        }
      return new DataView(pe.buffer)
    }
    var Mi, Ki = He(41203);
    ! function(ee) {
      ee[ee.Float = 0] = "Float", ee[ee.HalfFloat = 1] = "HalfFloat"
    }(Mi || (Mi = {}));
    class Ui {}
    async function Fi(ee, ie, He, ye) {
      const be = {
        size: 0,
        viewer: ie,
        array: new Uint8Array(ie.buffer),
        offset: He,
        width: ee.dataWindow.xMax - ee.dataWindow.xMin + 1,
        height: ee.dataWindow.yMax - ee.dataWindow.yMin + 1,
        channels: ee.channels.length,
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
      switch (ee.compression) {
        case Ee.NO_COMPRESSION:
          be.lines = 1, be.uncompress = ei;
          break;
        case Ee.RLE_COMPRESSION:
          be.lines = 1, be.uncompress = ii;
          break;
        case Ee.ZIPS_COMPRESSION:
          be.lines = 1, be.uncompress = Hi, await Ki.h.LoadScriptAsync(Ui.FFLATEUrl);
          break;
        case Ee.ZIP_COMPRESSION:
          be.lines = 16, be.uncompress = Hi, await Ki.h.LoadScriptAsync(Ui.FFLATEUrl);
          break;
        case Ee.PIZ_COMPRESSION:
          be.lines = 32, be.uncompress = bi;
          break;
        case Ee.PXR24_COMPRESSION:
          be.lines = 16, be.uncompress = yi, await Ki.h.LoadScriptAsync(Ui.FFLATEUrl);
          break;
        default:
          throw new Error(Ee[ee.compression] + " is unsupported")
      }
      be.scanlineBlockSize = be.lines;
      const Me = {};
      for (const Ue of ee.channels) switch (Ue.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          Me[Ue.name] = !0, be.type = Ue.pixelType
      }
      let Ke = !1;
      if (Me.R && Me.G && Me.B && Me.A) be.outputChannels = 4, be.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (Me.R && Me.G && Me.B) Ke = !0, be.outputChannels = 4, be.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (Me.R && Me.G) be.outputChannels = 2, be.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (Me.R) be.outputChannels = 1, be.decodeChannels = {
        R: 0
      };
      else {
        if (!Me.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        be.outputChannels = 1, be.decodeChannels = {
          Y: 0
        }
      }
      if (1 === be.type) switch (ye) {
        case Mi.Float:
          be.getter = Ae, be.inputSize = Je;
          break;
        case Mi.HalfFloat:
          be.getter = Ze, be.inputSize = Je
      } else {
        if (2 !== be.type) throw new Error("Unsupported pixelType " + be.type + " for " + ee.compression);
        switch (ye) {
          case Mi.Float:
            be.getter = Pe, be.inputSize = Ue;
            break;
          case Mi.HalfFloat:
            be.getter = Ye, be.inputSize = Ue
        }
      }
      be.blockCount = be.height / be.scanlineBlockSize;
      for (let Ue = 0; Ue < be.blockCount; Ue++) De(ie, He);
      const Fe = be.width * be.height * be.outputChannels;
      switch (ye) {
        case Mi.Float:
          be.byteArray = new Float32Array(Fe), be.textureType = 1, Ke && be.byteArray.fill(1, 0, Fe);
          break;
        case Mi.HalfFloat:
          be.byteArray = new Uint16Array(Fe), be.textureType = 2, Ke && be.byteArray.fill(15360, 0, Fe);
          break;
        default:
          throw new Error("Unsupported type: " + ye)
      }
      let oe = 0;
      for (const Ue of ee.channels) void 0 !== be.decodeChannels[Ue.name] && (be.channelLineOffsets[Ue.name] = oe * be.width), oe += 2 * Ue.pixelType;
      return be.bytesPerLine = be.width * oe, be.outLineWidth = be.width * be.outputChannels, "INCREASING_Y" === ee.lineOrder ? be.scanOrder = ee => ee : be.scanOrder = ee => be.height - 1 - ee, 4 == be.outputChannels ? (be.format = 5, be.linearSpace = !0) : (be.format = 6, be.linearSpace = !1), be
    }

    function Ji(ee, ie, He, ye) {
      const be = {
        value: 0
      };
      for (let Me = 0; Me < ee.height / ee.scanlineBlockSize; Me++) {
        const Ke = de(He, ye) - ie.dataWindow.yMin;
        ee.size = We(He, ye), ee.lines = Ke + ee.scanlineBlockSize > ee.height ? ee.height - Ke : ee.scanlineBlockSize;
        const Ue = ee.size < ee.lines * ee.bytesPerLine && ee.uncompress ? ee.uncompress(ee) : ei(ee);
        ye.value += ee.size;
        for (let He = 0; He < ee.scanlineBlockSize; He++) {
          const ye = Me * ee.scanlineBlockSize,
            Ke = He + ee.scanOrder(ye);
          if (Ke >= ee.height) continue;
          const Fe = He * ee.bytesPerLine,
            Je = (ee.height - 1 - Ke) * ee.outLineWidth;
          for (let He = 0; He < ee.channels; He++) {
            const ye = ie.channels[He].name,
              Me = ee.channelLineOffsets[ye],
              Ke = ee.decodeChannels[ye];
            if (void 0 !== Ke) {
              be.value = Fe + Me;
              for (let ie = 0; ie < ee.width; ie++) {
                const He = Je + ie * ee.outputChannels + Ke;
                ee.byteArray && (ee.byteArray[He] = ee.getter(Ue, be))
              }
            }
          }
        }
      }
    }
    Ui.DefaultOutputType = Mi.HalfFloat, Ui.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class oi {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(ee, ie, He, ye, be) {
        throw ".exr not supported in Cube."
      }
      loadData(ee, ie, He) {
        const be = new DataView(ee.buffer),
          Me = {
            value: 0
          },
          Ke = Le(be, Me);
        Fi(Ke, be, Me, Ui.DefaultOutputType).then((ee => {
          Ji(ee, Ke, be, Me);
          const ye = Ke.dataWindow.xMax - Ke.dataWindow.xMin + 1,
            Ue = Ke.dataWindow.yMax - Ke.dataWindow.yMin + 1;
          He(ye, Ue, ie.generateMipMaps, !1, (() => {
            const He = ie.Nf();
            ie.format = Ke.format, ie.type = ee.textureType, ie.invertY = !1, ie._gammaSpace = !Ke.linearSpace, ee.byteArray && He._uploadDataToTextureDirectly(ie, ee.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((ee => {
          ye.e.Error("Failed to load EXR texture: ", ee)
        }))
      }
    }
    async function Ri(ee) {
      const ie = new DataView(ee),
        He = {
          value: 0
        },
        be = Le(ie, He);
      try {
        const ee = await Fi(be, ie, He, Mi.Float);
        return Ji(ee, be, ie, He), ee.byteArray ? {
          width: be.dataWindow.xMax - be.dataWindow.xMin + 1,
          height: be.dataWindow.yMax - be.dataWindow.yMin + 1,
          data: new Float32Array(ee.byteArray)
        } : (ye.e.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (Me) {
        ye.e.Error("Failed to load EXR data: ", Me)
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
for (const ee in modules) Object.freeze(modules[ee]);