export const id = 320;
export const ids = [320];
export const modules = {
  42145: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      ReadExrDataAsync: () => bE,
      _ExrTextureLoader: () => CE
    });
    var su = ju(39032),
      Uu = ju(37519),
      Zu = ju(40326);
    const Xu = 4,
      lu = 4,
      qu = 1,
      fu = 2,
      Cu = 8,
      bu = 65536,
      cu = bu >> 3,
      Nu = 14,
      Ou = 65537,
      Yu = 1 << Nu,
      hu = Yu - 1,
      Du = 59,
      gu = 63,
      Mu = 2 + gu - Du;
    var eu, Gu;

    function pu(uu, Eu) {
      const ju = new Uint8Array(uu);
      let su = 0;
      for (; 0 != ju[Eu.value + su];) su += 1;
      const Uu = (new TextDecoder).decode(ju.slice(Eu.value, Eu.value + su));
      return Eu.value = Eu.value + su + 1, Uu
    }

    function wu(uu, Eu) {
      const ju = uu.getInt32(Eu.value, !0);
      return Eu.value += Xu, ju
    }

    function Ju(uu, Eu) {
      const ju = uu.getUint32(Eu.value, !0);
      return Eu.value += Xu, ju
    }

    function du(uu, Eu) {
      const ju = uu.getUint8(Eu.value);
      return Eu.value += qu, ju
    }

    function au(uu, Eu) {
      const ju = uu.getUint16(Eu.value, !0);
      return Eu.value += fu, ju
    }

    function Pu(uu, Eu) {
      const ju = uu[Eu.value];
      return Eu.value += qu, ju
    }

    function ou(uu, Eu) {
      let ju;
      return ju = "getBigInt64" in DataView.prototype ? Number(uu.getBigInt64(Eu.value, !0)) : uu.getUint32(Eu.value + 4, !0) + Number(uu.getUint32(Eu.value, !0) << 32), Eu.value += Cu, ju
    }

    function ku(uu, Eu) {
      const ju = uu.getFloat32(Eu.value, !0);
      return Eu.value += lu, ju
    }

    function mu(uu, Eu) {
      return (0, Zu.e)(au(uu, Eu))
    }

    function vu(uu, Eu) {
      return (0, Zu.k)((0, Uu.Clamp)(ku(uu, Eu), -Zu.i, Zu.i))
    }

    function Ku(uu, Eu, ju, su) {
      switch (ju) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(uu, Eu, ju) {
            const su = (new TextDecoder).decode(new Uint8Array(uu).slice(Eu.value, Eu.value + ju));
            return Eu.value = Eu.value + ju, su
          }(uu.buffer, Eu, su);
        case "chlist":
          return function(uu, Eu, ju) {
            const su = Eu.value,
              Uu = [];
            for (; Eu.value < su + ju - 1;) {
              const ju = pu(uu.buffer, Eu),
                su = wu(uu, Eu),
                Zu = du(uu, Eu);
              Eu.value += 3;
              const Xu = wu(uu, Eu),
                lu = wu(uu, Eu);
              Uu.push({
                name: ju,
                pixelType: su,
                pLinear: Zu,
                xSampling: Xu,
                ySampling: lu
              })
            }
            return Eu.value += 1, Uu
          }(uu, Eu, su);
        case "chromaticities":
          return function(uu, Eu) {
            return {
              redX: ku(uu, Eu),
              redY: ku(uu, Eu),
              greenX: ku(uu, Eu),
              greenY: ku(uu, Eu),
              blueX: ku(uu, Eu),
              blueY: ku(uu, Eu),
              whiteX: ku(uu, Eu),
              whiteY: ku(uu, Eu)
            }
          }(uu, Eu);
        case "compression":
          return function(uu, Eu) {
            return du(uu, Eu)
          }(uu, Eu);
        case "box2i":
          return function(uu, Eu) {
            return {
              xMin: wu(uu, Eu),
              yMin: wu(uu, Eu),
              xMax: wu(uu, Eu),
              yMax: wu(uu, Eu)
            }
          }(uu, Eu);
        case "lineOrder":
          return function(uu, Eu) {
            const ju = du(uu, Eu);
            return Gu[ju]
          }(uu, Eu);
        case "float":
          return ku(uu, Eu);
        case "v2f":
          return function(uu, Eu) {
            return [ku(uu, Eu), ku(uu, Eu)]
          }(uu, Eu);
        case "v3f":
          return function(uu, Eu) {
            return [ku(uu, Eu), ku(uu, Eu), ku(uu, Eu)]
          }(uu, Eu);
        case "int":
          return wu(uu, Eu);
        case "rational":
          return function(uu, Eu) {
            return [wu(uu, Eu), Ju(uu, Eu)]
          }(uu, Eu);
        case "timecode":
          return function(uu, Eu) {
            return [Ju(uu, Eu), Ju(uu, Eu)]
          }(uu, Eu);
        case "preview":
          return Eu.value += su, "skipped";
        default:
          return void(Eu.value += su)
      }
    }

    function Vu(uu) {
      for (let Eu = 1; Eu < uu.length; Eu++) {
        const ju = uu[Eu - 1] + uu[Eu] - 128;
        uu[Eu] = ju
      }
    }

    function ru(uu, Eu) {
      let ju = 0,
        su = Math.floor((uu.length + 1) / 2),
        Uu = 0;
      const Zu = uu.length - 1;
      for (; !(Uu > Zu) && (Eu[Uu++] = uu[ju++], !(Uu > Zu));) Eu[Uu++] = uu[su++]
    }! function(uu) {
      uu[uu.NO_COMPRESSION = 0] = "NO_COMPRESSION", uu[uu.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", uu[uu.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", uu[uu.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", uu[uu.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", uu[uu.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(eu || (eu = {})),
    function(uu) {
      uu[uu.INCREASING_Y = 0] = "INCREASING_Y", uu[uu.DECREASING_Y = 1] = "DECREASING_Y"
    }(Gu || (Gu = {}));
    const Qu = 20000630;

    function iu(uu, Eu) {
      if (uu.getUint32(0, !0) != Qu) throw new Error("Incorrect OpenEXR format");
      const ju = uu.getUint8(4),
        Uu = uu.getUint8(5),
        Zu = {
          singleTile: !!(2 & Uu),
          longName: !!(4 & Uu),
          deepFormat: !!(8 & Uu),
          multiPart: !!(16 & Uu)
        };
      Eu.value = 8;
      const Xu = {};
      let lu = !0;
      for (; lu;) {
        const ju = pu(uu.buffer, Eu);
        if (ju) {
          const Uu = pu(uu.buffer, Eu),
            Zu = Ku(uu, Eu, Uu, Ju(uu, Eu));
          void 0 === Zu ? su.b.Warn(`Unknown header attribute type ${Uu}'.`) : Xu[ju] = Zu
        } else lu = !1
      }
      if (0 != (-5 & Uu)) throw new Error("Unsupported file format");
      return {
        version: ju,
        spec: Zu,
        ...Xu
      }
    }
    const Wu = 32768,
      Su = 65535;

    function Iu(uu, Eu, ju, su, Uu) {
      for (; ju < uu;) Eu = Eu << 8 | Pu(su, Uu), ju += 8;
      return {
        l: Eu >> (ju -= uu) & (1 << uu) - 1,
        c: Eu,
        lc: ju
      }
    }

    function Fu(uu, Eu, ju, su) {
      return {
        c: uu = uu << 8 | Pu(ju, su),
        lc: Eu += 8
      }
    }

    function Bu(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu) {
      if (uu == Eu) {
        if (su < 8) {
          const uu = Fu(ju, su, Uu, Zu);
          ju = uu.c, su = uu.lc
        }
        let uu = ju >> (su -= 8);
        if (uu = new Uint8Array([uu])[0], lu.value + uu > qu) return null;
        const Eu = Xu[lu.value - 1];
        for (; uu-- > 0;) Xu[lu.value++] = Eu
      } else {
        if (!(lu.value < qu)) return null;
        Xu[lu.value++] = uu
      }
      return {
        c: ju,
        lc: su
      }
    }
    const Lu = new Array(59);

    function tu(uu, Eu, ju, su, Uu, Zu) {
      const Xu = Eu;
      let lu = 0,
        qu = 0;
      for (; su <= Uu; su++) {
        if (Xu.value - Eu.value > ju) return;
        let fu = Iu(6, lu, qu, uu, Xu);
        const Cu = fu.l;
        if (lu = fu.c, qu = fu.lc, Zu[su] = Cu, Cu == gu) {
          if (Xu.value - Eu.value > ju) throw new Error("Error in HufUnpackEncTable");
          fu = Iu(8, lu, qu, uu, Xu);
          let Cu = fu.l + Mu;
          if (lu = fu.c, qu = fu.lc, su + Cu > Uu + 1) throw new Error("Error in HufUnpackEncTable");
          for (; Cu--;) Zu[su++] = 0;
          su--
        } else if (Cu >= Du) {
          let uu = Cu - Du + 2;
          if (su + uu > Uu + 1) throw new Error("Error in HufUnpackEncTable");
          for (; uu--;) Zu[su++] = 0;
          su--
        }
      }! function(uu) {
        for (let ju = 0; ju <= 58; ++ju) Lu[ju] = 0;
        for (let ju = 0; ju < Ou; ++ju) Lu[uu[ju]] += 1;
        let Eu = 0;
        for (let ju = 58; ju > 0; --ju) {
          const uu = Eu + Lu[ju] >> 1;
          Lu[ju] = Eu, Eu = uu
        }
        for (let ju = 0; ju < Ou; ++ju) {
          const Eu = uu[ju];
          Eu > 0 && (uu[ju] = Eu | Lu[Eu]++ << 6)
        }
      }(Zu)
    }

    function xu(uu) {
      return 63 & uu
    }

    function Tu(uu) {
      return uu >> 6
    }

    function Hu(uu, Eu, ju, su, Uu, Zu) {
      const Xu = ju.value,
        lu = Ju(Eu, ju),
        qu = Ju(Eu, ju);
      ju.value += 4;
      const fu = Ju(Eu, ju);
      if (ju.value += 4, lu < 0 || lu >= Ou || qu < 0 || qu >= Ou) throw new Error("Wrong HUF_ENCSIZE");
      const Cu = new Array(Ou),
        bu = new Array(Yu);
      ! function(uu) {
        for (let Eu = 0; Eu < Yu; Eu++) uu[Eu] = {}, uu[Eu].len = 0, uu[Eu].lit = 0, uu[Eu].p = null
      }(bu);
      if (tu(uu, ju, su - (ju.value - Xu), lu, qu, Cu), fu > 8 * (su - (ju.value - Xu))) throw new Error("Wrong hufUncompress");
      ! function(uu, Eu, ju, su) {
        for (; Eu <= ju; Eu++) {
          const ju = Tu(uu[Eu]),
            Uu = xu(uu[Eu]);
          if (ju >> Uu) throw new Error("Invalid table entry");
          if (Uu > Nu) {
            const uu = su[ju >> Uu - Nu];
            if (uu.len) throw new Error("Invalid table entry");
            if (uu.lit++, uu.p) {
              const Eu = uu.p;
              uu.p = new Array(uu.lit);
              for (let ju = 0; ju < uu.lit - 1; ++ju) uu.p[ju] = Eu[ju]
            } else uu.p = new Array(1);
            uu.p[uu.lit - 1] = Eu
          } else if (Uu) {
            let uu = 0;
            for (let Zu = 1 << Nu - Uu; Zu > 0; Zu--) {
              const Zu = su[(ju << Nu - Uu) + uu];
              if (Zu.len || Zu.p) throw new Error("Invalid table entry");
              Zu.len = Uu, Zu.lit = Eu, uu++
            }
          }
        }
      }(Cu, lu, qu, bu),
      function(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu) {
        let fu = 0,
          Cu = 0;
        const bu = Xu,
          cu = Math.trunc(su.value + (Uu + 7) / 8);
        for (; su.value < cu;) {
          let Uu = Fu(fu, Cu, ju, su);
          for (fu = Uu.c, Cu = Uu.lc; Cu >= Nu;) {
            const Xu = Eu[fu >> Cu - Nu & hu];
            if (Xu.len) {
              Cu -= Xu.len;
              const uu = Bu(Xu.lit, Zu, fu, Cu, ju, su, lu, qu, bu);
              uu && (fu = uu.c, Cu = uu.lc)
            } else {
              if (!Xu.p) throw new Error("hufDecode issues");
              let Eu;
              for (Eu = 0; Eu < Xu.lit; Eu++) {
                const Nu = xu(uu[Xu.p[Eu]]);
                for (; Cu < Nu && su.value < cu;) Uu = Fu(fu, Cu, ju, su), fu = Uu.c, Cu = Uu.lc;
                if (Cu >= Nu && Tu(uu[Xu.p[Eu]]) == (fu >> Cu - Nu & (1 << Nu) - 1)) {
                  Cu -= Nu;
                  const uu = Bu(Xu.p[Eu], Zu, fu, Cu, ju, su, lu, qu, bu);
                  uu && (fu = uu.c, Cu = uu.lc);
                  break
                }
              }
              if (Eu == Xu.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const Ou = 8 - Uu & 7;
        for (fu >>= Ou, Cu -= Ou; Cu > 0;) {
          const uu = Eu[fu << Nu - Cu & hu];
          if (!uu.len) throw new Error("HufDecode issues");
          {
            Cu -= uu.len;
            const Eu = Bu(uu.lit, Zu, fu, Cu, ju, su, lu, qu, bu);
            Eu && (fu = Eu.c, Cu = Eu.lc)
          }
        }
      }(Cu, bu, uu, ju, fu, qu, Zu, Uu, {
        value: 0
      })
    }

    function Au(uu) {
      return 65535 & uu
    }

    function nu(uu) {
      const Eu = Au(uu);
      return Eu > 32767 ? Eu - 65536 : Eu
    }

    function yu(uu, Eu) {
      const ju = nu(uu),
        su = nu(Eu),
        Uu = ju + (1 & su) + (su >> 1);
      return {
        a: Uu,
        b: Uu - su
      }
    }

    function zu(uu, Eu) {
      const ju = Au(uu),
        su = Au(Eu),
        Uu = ju - (su >> 1) & Su;
      return {
        a: su + Uu - Wu & Su,
        b: Uu
      }
    }

    function Ru(uu, Eu, ju, su, Uu, Zu, Xu) {
      const lu = Xu < 16384,
        qu = ju > Uu ? Uu : ju;
      let fu, Cu, bu = 1;
      for (; bu <= qu;) bu <<= 1;
      for (bu >>= 1, fu = bu, bu >>= 1; bu >= 1;) {
        Cu = 0;
        const Xu = Cu + Zu * (Uu - fu),
          qu = Zu * bu,
          cu = Zu * fu,
          Nu = su * bu,
          Ou = su * fu;
        let Yu, hu, Du, gu;
        for (; Cu <= Xu; Cu += cu) {
          let Uu = Cu;
          const Zu = Cu + su * (ju - fu);
          for (; Uu <= Zu; Uu += Ou) {
            const ju = Uu + Nu,
              su = Uu + qu,
              Zu = su + Nu;
            if (lu) {
              let Xu = yu(uu[Uu + Eu], uu[su + Eu]);
              Yu = Xu.a, Du = Xu.b, Xu = yu(uu[ju + Eu], uu[Zu + Eu]), hu = Xu.a, gu = Xu.b, Xu = yu(Yu, hu), uu[Uu + Eu] = Xu.a, uu[ju + Eu] = Xu.b, Xu = yu(Du, gu), uu[su + Eu] = Xu.a, uu[Zu + Eu] = Xu.b
            } else {
              let Xu = zu(uu[Uu + Eu], uu[su + Eu]);
              Yu = Xu.a, Du = Xu.b, Xu = zu(uu[ju + Eu], uu[Zu + Eu]), hu = Xu.a, gu = Xu.b, Xu = zu(Yu, hu), uu[Uu + Eu] = Xu.a, uu[ju + Eu] = Xu.b, Xu = zu(Du, gu), uu[su + Eu] = Xu.a, uu[Zu + Eu] = Xu.b
            }
          }
          if (ju & bu) {
            const ju = Uu + qu;
            let su;
            su = lu ? yu(uu[Uu + Eu], uu[ju + Eu]) : zu(uu[Uu + Eu], uu[ju + Eu]), Yu = su.a, uu[ju + Eu] = su.b, uu[Uu + Eu] = Yu
          }
        }
        if (Uu & bu) {
          let Uu = Cu;
          const Zu = Cu + su * (ju - fu);
          for (; Uu <= Zu; Uu += Ou) {
            const ju = Uu + Nu;
            let su;
            su = lu ? yu(uu[Uu + Eu], uu[ju + Eu]) : zu(uu[Uu + Eu], uu[ju + Eu]), Yu = su.a, uu[ju + Eu] = su.b, uu[Uu + Eu] = Yu
          }
        }
        fu = bu, bu >>= 1
      }
      return Cu
    }

    function uE(uu) {
      return new DataView(uu.array.buffer, uu.offset.value, uu.size)
    }

    function EE(uu) {
      const Eu = uu.viewer.buffer.slice(uu.offset.value, uu.offset.value + uu.size),
        ju = new Uint8Array(function(uu) {
          let Eu = uu.byteLength;
          const ju = [];
          let su = 0;
          const Uu = new DataView(uu);
          for (; Eu > 0;) {
            const uu = Uu.getInt8(su++);
            if (uu < 0) {
              const Zu = -uu;
              Eu -= Zu + 1;
              for (let uu = 0; uu < Zu; uu++) ju.push(Uu.getUint8(su++))
            } else {
              const Zu = uu;
              Eu -= 2;
              const Xu = Uu.getUint8(su++);
              for (let uu = 0; uu < Zu + 1; uu++) ju.push(Xu)
            }
          }
          return ju
        }(Eu)),
        su = new Uint8Array(ju.length);
      return Vu(ju), ru(ju, su), new DataView(su.buffer)
    }

    function jE(uu) {
      const Eu = uu.array.slice(uu.offset.value, uu.offset.value + uu.size),
        ju = fflate.unzlibSync(Eu),
        su = new Uint8Array(ju.length);
      return Vu(ju), ru(ju, su), new DataView(su.buffer)
    }

    function sE(uu) {
      const Eu = uu.array.slice(uu.offset.value, uu.offset.value + uu.size),
        ju = fflate.unzlibSync(Eu),
        su = uu.lines * uu.channels * uu.width,
        Uu = 1 == uu.type ? new Uint16Array(su) : new Uint32Array(su);
      let Zu = 0,
        Xu = 0;
      const lu = new Array(4);
      for (let qu = 0; qu < uu.lines; qu++)
        for (let Eu = 0; Eu < uu.channels; Eu++) {
          let Eu = 0;
          switch (uu.type) {
            case 1:
              lu[0] = Zu, lu[1] = lu[0] + uu.width, Zu = lu[1] + uu.width;
              for (let su = 0; su < uu.width; ++su) {
                Eu += ju[lu[0]++] << 8 | ju[lu[1]++], Uu[Xu] = Eu, Xu++
              }
              break;
            case 2:
              lu[0] = Zu, lu[1] = lu[0] + uu.width, lu[2] = lu[1] + uu.width, Zu = lu[2] + uu.width;
              for (let su = 0; su < uu.width; ++su) {
                Eu += ju[lu[0]++] << 24 | ju[lu[1]++] << 16 | ju[lu[2]++] << 8, Uu[Xu] = Eu, Xu++
              }
          }
        }
      return new DataView(Uu.buffer)
    }

    function UE(uu) {
      const Eu = uu.viewer,
        ju = {
          value: uu.offset.value
        },
        su = new Uint16Array(uu.width * uu.scanlineBlockSize * (uu.channels * uu.type)),
        Uu = new Uint8Array(cu);
      let Zu = 0;
      const Xu = new Array(uu.channels);
      for (let fu = 0; fu < uu.channels; fu++) Xu[fu] = {}, Xu[fu].start = Zu, Xu[fu].end = Xu[fu].start, Xu[fu].nx = uu.width, Xu[fu].ny = uu.lines, Xu[fu].size = uu.type, Zu += Xu[fu].nx * Xu[fu].ny * Xu[fu].size;
      const lu = au(Eu, ju),
        qu = au(Eu, ju);
      if (qu >= cu) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (lu <= qu)
        for (let fu = 0; fu < qu - lu + 1; fu++) Uu[fu + lu] = du(Eu, ju);
      const Cu = new Uint16Array(bu),
        Nu = function(uu, Eu) {
          let ju = 0;
          for (let Uu = 0; Uu < bu; ++Uu)(0 == Uu || uu[Uu >> 3] & 1 << (7 & Uu)) && (Eu[ju++] = Uu);
          const su = ju - 1;
          for (; ju < bu;) Eu[ju++] = 0;
          return su
        }(Uu, Cu),
        Ou = Ju(Eu, ju);
      Hu(uu.array, Eu, ju, Ou, su, Zu);
      for (let fu = 0; fu < uu.channels; ++fu) {
        const uu = Xu[fu];
        for (let Eu = 0; Eu < Xu[fu].size; ++Eu) Ru(su, uu.start + Eu, uu.nx, uu.size, uu.ny, uu.nx * uu.size, Nu)
      }! function(uu, Eu, ju) {
        for (let su = 0; su < ju; ++su) Eu[su] = uu[Eu[su]]
      }(Cu, su, Zu);
      let Yu = 0;
      const hu = new Uint8Array(su.buffer.byteLength);
      for (let bu = 0; bu < uu.lines; bu++)
        for (let Eu = 0; Eu < uu.channels; Eu++) {
          const uu = Xu[Eu],
            ju = uu.nx * uu.size,
            Uu = new Uint8Array(su.buffer, uu.end * fu, ju * fu);
          hu.set(Uu, Yu), Yu += ju * fu, uu.end += ju
        }
      return new DataView(hu.buffer)
    }
    var ZE, XE = ju(40356);
    ! function(uu) {
      uu[uu.Float = 0] = "Float", uu[uu.HalfFloat = 1] = "HalfFloat"
    }(ZE || (ZE = {}));
    class lE {}
    async function qE(uu, Eu, ju, su) {
      const Uu = {
        size: 0,
        viewer: Eu,
        array: new Uint8Array(Eu.buffer),
        offset: ju,
        width: uu.dataWindow.xMax - uu.dataWindow.xMin + 1,
        height: uu.dataWindow.yMax - uu.dataWindow.yMin + 1,
        channels: uu.channels.length,
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
      switch (uu.compression) {
        case eu.NO_COMPRESSION:
          Uu.lines = 1, Uu.uncompress = uE;
          break;
        case eu.RLE_COMPRESSION:
          Uu.lines = 1, Uu.uncompress = EE;
          break;
        case eu.ZIPS_COMPRESSION:
          Uu.lines = 1, Uu.uncompress = jE, await XE.h.LoadScriptAsync(lE.FFLATEUrl);
          break;
        case eu.ZIP_COMPRESSION:
          Uu.lines = 16, Uu.uncompress = jE, await XE.h.LoadScriptAsync(lE.FFLATEUrl);
          break;
        case eu.PIZ_COMPRESSION:
          Uu.lines = 32, Uu.uncompress = UE;
          break;
        case eu.PXR24_COMPRESSION:
          Uu.lines = 16, Uu.uncompress = sE, await XE.h.LoadScriptAsync(lE.FFLATEUrl);
          break;
        default:
          throw new Error(eu[uu.compression] + " is unsupported")
      }
      Uu.scanlineBlockSize = Uu.lines;
      const Zu = {};
      for (const lu of uu.channels) switch (lu.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          Zu[lu.name] = !0, Uu.type = lu.pixelType
      }
      let Xu = !1;
      if (Zu.R && Zu.G && Zu.B && Zu.A) Uu.outputChannels = 4, Uu.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (Zu.R && Zu.G && Zu.B) Xu = !0, Uu.outputChannels = 4, Uu.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (Zu.R && Zu.G) Uu.outputChannels = 2, Uu.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (Zu.R) Uu.outputChannels = 1, Uu.decodeChannels = {
        R: 0
      };
      else {
        if (!Zu.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        Uu.outputChannels = 1, Uu.decodeChannels = {
          Y: 0
        }
      }
      if (1 === Uu.type) switch (su) {
        case ZE.Float:
          Uu.getter = mu, Uu.inputSize = fu;
          break;
        case ZE.HalfFloat:
          Uu.getter = au, Uu.inputSize = fu
      } else {
        if (2 !== Uu.type) throw new Error("Unsupported pixelType " + Uu.type + " for " + uu.compression);
        switch (su) {
          case ZE.Float:
            Uu.getter = ku, Uu.inputSize = lu;
            break;
          case ZE.HalfFloat:
            Uu.getter = vu, Uu.inputSize = lu
        }
      }
      Uu.blockCount = Uu.height / Uu.scanlineBlockSize;
      for (let lu = 0; lu < Uu.blockCount; lu++) ou(Eu, ju);
      const qu = Uu.width * Uu.height * Uu.outputChannels;
      switch (su) {
        case ZE.Float:
          Uu.byteArray = new Float32Array(qu), Uu.textureType = 1, Xu && Uu.byteArray.fill(1, 0, qu);
          break;
        case ZE.HalfFloat:
          Uu.byteArray = new Uint16Array(qu), Uu.textureType = 2, Xu && Uu.byteArray.fill(15360, 0, qu);
          break;
        default:
          throw new Error("Unsupported type: " + su)
      }
      let Cu = 0;
      for (const lu of uu.channels) void 0 !== Uu.decodeChannels[lu.name] && (Uu.channelLineOffsets[lu.name] = Cu * Uu.width), Cu += 2 * lu.pixelType;
      return Uu.bytesPerLine = Uu.width * Cu, Uu.outLineWidth = Uu.width * Uu.outputChannels, "INCREASING_Y" === uu.lineOrder ? Uu.scanOrder = uu => uu : Uu.scanOrder = uu => Uu.height - 1 - uu, 4 == Uu.outputChannels ? (Uu.format = 5, Uu.linearSpace = !0) : (Uu.format = 6, Uu.linearSpace = !1), Uu
    }

    function fE(uu, Eu, ju, su) {
      const Uu = {
        value: 0
      };
      for (let Zu = 0; Zu < uu.height / uu.scanlineBlockSize; Zu++) {
        const Xu = wu(ju, su) - Eu.dataWindow.yMin;
        uu.size = Ju(ju, su), uu.lines = Xu + uu.scanlineBlockSize > uu.height ? uu.height - Xu : uu.scanlineBlockSize;
        const lu = uu.size < uu.lines * uu.bytesPerLine && uu.uncompress ? uu.uncompress(uu) : uE(uu);
        su.value += uu.size;
        for (let ju = 0; ju < uu.scanlineBlockSize; ju++) {
          const su = Zu * uu.scanlineBlockSize,
            Xu = ju + uu.scanOrder(su);
          if (Xu >= uu.height) continue;
          const qu = ju * uu.bytesPerLine,
            fu = (uu.height - 1 - Xu) * uu.outLineWidth;
          for (let ju = 0; ju < uu.channels; ju++) {
            const su = Eu.channels[ju].name,
              Zu = uu.channelLineOffsets[su],
              Xu = uu.decodeChannels[su];
            if (void 0 !== Xu) {
              Uu.value = qu + Zu;
              for (let Eu = 0; Eu < uu.width; Eu++) {
                const ju = fu + Eu * uu.outputChannels + Xu;
                uu.byteArray && (uu.byteArray[ju] = uu.getter(lu, Uu))
              }
            }
          }
        }
      }
    }
    lE.DefaultOutputType = ZE.HalfFloat, lE.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class CE {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(uu, Eu, ju, su, Uu) {
        throw ".exr not supported in Cube."
      }
      loadData(uu, Eu, ju) {
        const Uu = new DataView(uu.buffer),
          Zu = {
            value: 0
          },
          Xu = iu(Uu, Zu);
        qE(Xu, Uu, Zu, lE.DefaultOutputType).then((uu => {
          fE(uu, Xu, Uu, Zu);
          const su = Xu.dataWindow.xMax - Xu.dataWindow.xMin + 1,
            lu = Xu.dataWindow.yMax - Xu.dataWindow.yMin + 1;
          ju(su, lu, Eu.generateMipMaps, !1, (() => {
            const ju = Eu.wO();
            Eu.format = Xu.format, Eu.type = uu.textureType, Eu.invertY = !1, Eu._gammaSpace = !Xu.linearSpace, uu.byteArray && ju._uploadDataToTextureDirectly(Eu, uu.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((uu => {
          su.b.Error("Failed to load EXR texture: ", uu)
        }))
      }
    }
    async function bE(uu) {
      const Eu = new DataView(uu),
        ju = {
          value: 0
        },
        Uu = iu(Eu, ju);
      try {
        const uu = await qE(Uu, Eu, ju, ZE.Float);
        return fE(uu, Uu, Eu, ju), uu.byteArray ? {
          width: Uu.dataWindow.xMax - Uu.dataWindow.xMin + 1,
          height: Uu.dataWindow.yMax - Uu.dataWindow.yMin + 1,
          data: new Float32Array(uu.byteArray)
        } : (su.b.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (Zu) {
        su.b.Error("Failed to load EXR data: ", Zu)
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
for (const uu in modules) Object.freeze(modules[uu]);