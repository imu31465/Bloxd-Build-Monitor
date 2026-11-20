export const id = 305;
export const ids = [305];
export const modules = {
  41446: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      ReadExrDataAsync: () => rR,
      _ExrTextureLoader: () => VR
    });
    var Eu = yu(38448),
      Ku = yu(36865),
      Qu = yu(39633);
    const mu = 4,
      Ju = 4,
      Nu = 1,
      Xu = 2,
      Vu = 8,
      ru = 65536,
      Bu = ru >> 3,
      xu = 14,
      Su = 65537,
      pu = 1 << xu,
      Tu = pu - 1,
      Wu = 59,
      ju = 63,
      Hu = 2 + ju - Wu;
    var du, bu;

    function Cu(uu, Ru) {
      const yu = new Uint8Array(uu);
      let Eu = 0;
      for (; 0 != yu[Ru.value + Eu];) Eu += 1;
      const Ku = (new TextDecoder).decode(yu.slice(Ru.value, Ru.value + Eu));
      return Ru.value = Ru.value + Eu + 1, Ku
    }

    function ku(uu, Ru) {
      const yu = uu.getInt32(Ru.value, !0);
      return Ru.value += mu, yu
    }

    function eu(uu, Ru) {
      const yu = uu.getUint32(Ru.value, !0);
      return Ru.value += mu, yu
    }

    function Au(uu, Ru) {
      const yu = uu.getUint8(Ru.value);
      return Ru.value += Nu, yu
    }

    function Du(uu, Ru) {
      const yu = uu.getUint16(Ru.value, !0);
      return Ru.value += Xu, yu
    }

    function Mu(uu, Ru) {
      const yu = uu[Ru.value];
      return Ru.value += Nu, yu
    }

    function Iu(uu, Ru) {
      let yu;
      return yu = "getBigInt64" in DataView.prototype ? Number(uu.getBigInt64(Ru.value, !0)) : uu.getUint32(Ru.value + 4, !0) + Number(uu.getUint32(Ru.value, !0) << 32), Ru.value += Vu, yu
    }

    function Gu(uu, Ru) {
      const yu = uu.getFloat32(Ru.value, !0);
      return Ru.value += Ju, yu
    }

    function Uu(uu, Ru) {
      return (0, Qu.c)(Du(uu, Ru))
    }

    function nu(uu, Ru) {
      return (0, Qu.i)((0, Ku.Clamp)(Gu(uu, Ru), -Qu.e, Qu.e))
    }

    function su(uu, Ru, yu, Eu) {
      switch (yu) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(uu, Ru, yu) {
            const Eu = (new TextDecoder).decode(new Uint8Array(uu).slice(Ru.value, Ru.value + yu));
            return Ru.value = Ru.value + yu, Eu
          }(uu.buffer, Ru, Eu);
        case "chlist":
          return function(uu, Ru, yu) {
            const Eu = Ru.value,
              Ku = [];
            for (; Ru.value < Eu + yu - 1;) {
              const yu = Cu(uu.buffer, Ru),
                Eu = ku(uu, Ru),
                Qu = Au(uu, Ru);
              Ru.value += 3;
              const mu = ku(uu, Ru),
                Ju = ku(uu, Ru);
              Ku.push({
                name: yu,
                pixelType: Eu,
                pLinear: Qu,
                xSampling: mu,
                ySampling: Ju
              })
            }
            return Ru.value += 1, Ku
          }(uu, Ru, Eu);
        case "chromaticities":
          return function(uu, Ru) {
            return {
              redX: Gu(uu, Ru),
              redY: Gu(uu, Ru),
              greenX: Gu(uu, Ru),
              greenY: Gu(uu, Ru),
              blueX: Gu(uu, Ru),
              blueY: Gu(uu, Ru),
              whiteX: Gu(uu, Ru),
              whiteY: Gu(uu, Ru)
            }
          }(uu, Ru);
        case "compression":
          return function(uu, Ru) {
            return Au(uu, Ru)
          }(uu, Ru);
        case "box2i":
          return function(uu, Ru) {
            return {
              xMin: ku(uu, Ru),
              yMin: ku(uu, Ru),
              xMax: ku(uu, Ru),
              yMax: ku(uu, Ru)
            }
          }(uu, Ru);
        case "lineOrder":
          return function(uu, Ru) {
            const yu = Au(uu, Ru);
            return bu[yu]
          }(uu, Ru);
        case "float":
          return Gu(uu, Ru);
        case "v2f":
          return function(uu, Ru) {
            return [Gu(uu, Ru), Gu(uu, Ru)]
          }(uu, Ru);
        case "v3f":
          return function(uu, Ru) {
            return [Gu(uu, Ru), Gu(uu, Ru), Gu(uu, Ru)]
          }(uu, Ru);
        case "int":
          return ku(uu, Ru);
        case "rational":
          return function(uu, Ru) {
            return [ku(uu, Ru), eu(uu, Ru)]
          }(uu, Ru);
        case "timecode":
          return function(uu, Ru) {
            return [eu(uu, Ru), eu(uu, Ru)]
          }(uu, Ru);
        case "preview":
          return Ru.value += Eu, "skipped";
        default:
          return void(Ru.value += Eu)
      }
    }

    function tu(uu) {
      for (let Ru = 1; Ru < uu.length; Ru++) {
        const yu = uu[Ru - 1] + uu[Ru] - 128;
        uu[Ru] = yu
      }
    }

    function lu(uu, Ru) {
      let yu = 0,
        Eu = Math.floor((uu.length + 1) / 2),
        Ku = 0;
      const Qu = uu.length - 1;
      for (; !(Ku > Qu) && (Ru[Ku++] = uu[yu++], !(Ku > Qu));) Ru[Ku++] = uu[Eu++]
    }! function(uu) {
      uu[uu.NO_COMPRESSION = 0] = "NO_COMPRESSION", uu[uu.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", uu[uu.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", uu[uu.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", uu[uu.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", uu[uu.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(du || (du = {})),
    function(uu) {
      uu[uu.INCREASING_Y = 0] = "INCREASING_Y", uu[uu.DECREASING_Y = 1] = "DECREASING_Y"
    }(bu || (bu = {}));
    const gu = 20000630;

    function cu(uu, Ru) {
      if (uu.getUint32(0, !0) != gu) throw new Error("Incorrect OpenEXR format");
      const yu = uu.getUint8(4),
        Ku = uu.getUint8(5),
        Qu = {
          singleTile: !!(2 & Ku),
          longName: !!(4 & Ku),
          deepFormat: !!(8 & Ku),
          multiPart: !!(16 & Ku)
        };
      Ru.value = 8;
      const mu = {};
      let Ju = !0;
      for (; Ju;) {
        const yu = Cu(uu.buffer, Ru);
        if (yu) {
          const Ku = Cu(uu.buffer, Ru),
            Qu = su(uu, Ru, Ku, eu(uu, Ru));
          void 0 === Qu ? Eu.e.Warn(`Unknown header attribute type ${Ku}'.`) : mu[yu] = Qu
        } else Ju = !1
      }
      if (0 != (-5 & Ku)) throw new Error("Unsupported file format");
      return {
        version: yu,
        spec: Qu,
        ...mu
      }
    }
    const Lu = 32768,
      zu = 65535;

    function Fu(uu, Ru, yu, Eu, Ku) {
      for (; yu < uu;) Ru = Ru << 8 | Mu(Eu, Ku), yu += 8;
      return {
        l: Ru >> (yu -= uu) & (1 << uu) - 1,
        c: Ru,
        lc: yu
      }
    }

    function wu(uu, Ru, yu, Eu) {
      return {
        c: uu = uu << 8 | Mu(yu, Eu),
        lc: Ru += 8
      }
    }

    function Zu(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu) {
      if (uu == Ru) {
        if (Eu < 8) {
          const uu = wu(yu, Eu, Ku, Qu);
          yu = uu.c, Eu = uu.lc
        }
        let uu = yu >> (Eu -= 8);
        if (uu = new Uint8Array([uu])[0], Ju.value + uu > Nu) return null;
        const Ru = mu[Ju.value - 1];
        for (; uu-- > 0;) mu[Ju.value++] = Ru
      } else {
        if (!(Ju.value < Nu)) return null;
        mu[Ju.value++] = uu
      }
      return {
        c: yu,
        lc: Eu
      }
    }
    const hu = new Array(59);

    function Pu(uu, Ru, yu, Eu, Ku, Qu) {
      const mu = Ru;
      let Ju = 0,
        Nu = 0;
      for (; Eu <= Ku; Eu++) {
        if (mu.value - Ru.value > yu) return;
        let Xu = Fu(6, Ju, Nu, uu, mu);
        const Vu = Xu.l;
        if (Ju = Xu.c, Nu = Xu.lc, Qu[Eu] = Vu, Vu == ju) {
          if (mu.value - Ru.value > yu) throw new Error("Error in HufUnpackEncTable");
          Xu = Fu(8, Ju, Nu, uu, mu);
          let Vu = Xu.l + Hu;
          if (Ju = Xu.c, Nu = Xu.lc, Eu + Vu > Ku + 1) throw new Error("Error in HufUnpackEncTable");
          for (; Vu--;) Qu[Eu++] = 0;
          Eu--
        } else if (Vu >= Wu) {
          let uu = Vu - Wu + 2;
          if (Eu + uu > Ku + 1) throw new Error("Error in HufUnpackEncTable");
          for (; uu--;) Qu[Eu++] = 0;
          Eu--
        }
      }! function(uu) {
        for (let yu = 0; yu <= 58; ++yu) hu[yu] = 0;
        for (let yu = 0; yu < Su; ++yu) hu[uu[yu]] += 1;
        let Ru = 0;
        for (let yu = 58; yu > 0; --yu) {
          const uu = Ru + hu[yu] >> 1;
          hu[yu] = Ru, Ru = uu
        }
        for (let yu = 0; yu < Su; ++yu) {
          const Ru = uu[yu];
          Ru > 0 && (uu[yu] = Ru | hu[Ru]++ << 6)
        }
      }(Qu)
    }

    function iu(uu) {
      return 63 & uu
    }

    function Yu(uu) {
      return uu >> 6
    }

    function ou(uu, Ru, yu, Eu, Ku, Qu) {
      const mu = yu.value,
        Ju = eu(Ru, yu),
        Nu = eu(Ru, yu);
      yu.value += 4;
      const Xu = eu(Ru, yu);
      if (yu.value += 4, Ju < 0 || Ju >= Su || Nu < 0 || Nu >= Su) throw new Error("Wrong HUF_ENCSIZE");
      const Vu = new Array(Su),
        ru = new Array(pu);
      ! function(uu) {
        for (let Ru = 0; Ru < pu; Ru++) uu[Ru] = {}, uu[Ru].len = 0, uu[Ru].lit = 0, uu[Ru].p = null
      }(ru);
      if (Pu(uu, yu, Eu - (yu.value - mu), Ju, Nu, Vu), Xu > 8 * (Eu - (yu.value - mu))) throw new Error("Wrong hufUncompress");
      ! function(uu, Ru, yu, Eu) {
        for (; Ru <= yu; Ru++) {
          const yu = Yu(uu[Ru]),
            Ku = iu(uu[Ru]);
          if (yu >> Ku) throw new Error("Invalid table entry");
          if (Ku > xu) {
            const uu = Eu[yu >> Ku - xu];
            if (uu.len) throw new Error("Invalid table entry");
            if (uu.lit++, uu.p) {
              const Ru = uu.p;
              uu.p = new Array(uu.lit);
              for (let yu = 0; yu < uu.lit - 1; ++yu) uu.p[yu] = Ru[yu]
            } else uu.p = new Array(1);
            uu.p[uu.lit - 1] = Ru
          } else if (Ku) {
            let uu = 0;
            for (let Qu = 1 << xu - Ku; Qu > 0; Qu--) {
              const Qu = Eu[(yu << xu - Ku) + uu];
              if (Qu.len || Qu.p) throw new Error("Invalid table entry");
              Qu.len = Ku, Qu.lit = Ru, uu++
            }
          }
        }
      }(Vu, Ju, Nu, ru),
      function(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu) {
        let Xu = 0,
          Vu = 0;
        const ru = mu,
          Bu = Math.trunc(Eu.value + (Ku + 7) / 8);
        for (; Eu.value < Bu;) {
          let Ku = wu(Xu, Vu, yu, Eu);
          for (Xu = Ku.c, Vu = Ku.lc; Vu >= xu;) {
            const mu = Ru[Xu >> Vu - xu & Tu];
            if (mu.len) {
              Vu -= mu.len;
              const uu = Zu(mu.lit, Qu, Xu, Vu, yu, Eu, Ju, Nu, ru);
              uu && (Xu = uu.c, Vu = uu.lc)
            } else {
              if (!mu.p) throw new Error("hufDecode issues");
              let Ru;
              for (Ru = 0; Ru < mu.lit; Ru++) {
                const xu = iu(uu[mu.p[Ru]]);
                for (; Vu < xu && Eu.value < Bu;) Ku = wu(Xu, Vu, yu, Eu), Xu = Ku.c, Vu = Ku.lc;
                if (Vu >= xu && Yu(uu[mu.p[Ru]]) == (Xu >> Vu - xu & (1 << xu) - 1)) {
                  Vu -= xu;
                  const uu = Zu(mu.p[Ru], Qu, Xu, Vu, yu, Eu, Ju, Nu, ru);
                  uu && (Xu = uu.c, Vu = uu.lc);
                  break
                }
              }
              if (Ru == mu.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const Su = 8 - Ku & 7;
        for (Xu >>= Su, Vu -= Su; Vu > 0;) {
          const uu = Ru[Xu << xu - Vu & Tu];
          if (!uu.len) throw new Error("HufDecode issues");
          {
            Vu -= uu.len;
            const Ru = Zu(uu.lit, Qu, Xu, Vu, yu, Eu, Ju, Nu, ru);
            Ru && (Xu = Ru.c, Vu = Ru.lc)
          }
        }
      }(Vu, ru, uu, yu, Xu, Nu, Qu, Ku, {
        value: 0
      })
    }

    function qu(uu) {
      return 65535 & uu
    }

    function Ou(uu) {
      const Ru = qu(uu);
      return Ru > 32767 ? Ru - 65536 : Ru
    }

    function vu(uu, Ru) {
      const yu = Ou(uu),
        Eu = Ou(Ru),
        Ku = yu + (1 & Eu) + (Eu >> 1);
      return {
        a: Ku,
        b: Ku - Eu
      }
    }

    function au(uu, Ru) {
      const yu = qu(uu),
        Eu = qu(Ru),
        Ku = yu - (Eu >> 1) & zu;
      return {
        a: Eu + Ku - Lu & zu,
        b: Ku
      }
    }

    function fu(uu, Ru, yu, Eu, Ku, Qu, mu) {
      const Ju = mu < 16384,
        Nu = yu > Ku ? Ku : yu;
      let Xu, Vu, ru = 1;
      for (; ru <= Nu;) ru <<= 1;
      for (ru >>= 1, Xu = ru, ru >>= 1; ru >= 1;) {
        Vu = 0;
        const mu = Vu + Qu * (Ku - Xu),
          Nu = Qu * ru,
          Bu = Qu * Xu,
          xu = Eu * ru,
          Su = Eu * Xu;
        let pu, Tu, Wu, ju;
        for (; Vu <= mu; Vu += Bu) {
          let Ku = Vu;
          const Qu = Vu + Eu * (yu - Xu);
          for (; Ku <= Qu; Ku += Su) {
            const yu = Ku + xu,
              Eu = Ku + Nu,
              Qu = Eu + xu;
            if (Ju) {
              let mu = vu(uu[Ku + Ru], uu[Eu + Ru]);
              pu = mu.a, Wu = mu.b, mu = vu(uu[yu + Ru], uu[Qu + Ru]), Tu = mu.a, ju = mu.b, mu = vu(pu, Tu), uu[Ku + Ru] = mu.a, uu[yu + Ru] = mu.b, mu = vu(Wu, ju), uu[Eu + Ru] = mu.a, uu[Qu + Ru] = mu.b
            } else {
              let mu = au(uu[Ku + Ru], uu[Eu + Ru]);
              pu = mu.a, Wu = mu.b, mu = au(uu[yu + Ru], uu[Qu + Ru]), Tu = mu.a, ju = mu.b, mu = au(pu, Tu), uu[Ku + Ru] = mu.a, uu[yu + Ru] = mu.b, mu = au(Wu, ju), uu[Eu + Ru] = mu.a, uu[Qu + Ru] = mu.b
            }
          }
          if (yu & ru) {
            const yu = Ku + Nu;
            let Eu;
            Eu = Ju ? vu(uu[Ku + Ru], uu[yu + Ru]) : au(uu[Ku + Ru], uu[yu + Ru]), pu = Eu.a, uu[yu + Ru] = Eu.b, uu[Ku + Ru] = pu
          }
        }
        if (Ku & ru) {
          let Ku = Vu;
          const Qu = Vu + Eu * (yu - Xu);
          for (; Ku <= Qu; Ku += Su) {
            const yu = Ku + xu;
            let Eu;
            Eu = Ju ? vu(uu[Ku + Ru], uu[yu + Ru]) : au(uu[Ku + Ru], uu[yu + Ru]), pu = Eu.a, uu[yu + Ru] = Eu.b, uu[Ku + Ru] = pu
          }
        }
        Xu = ru, ru >>= 1
      }
      return Vu
    }

    function uR(uu) {
      return new DataView(uu.array.buffer, uu.offset.value, uu.size)
    }

    function RR(uu) {
      const Ru = uu.viewer.buffer.slice(uu.offset.value, uu.offset.value + uu.size),
        yu = new Uint8Array(function(uu) {
          let Ru = uu.byteLength;
          const yu = [];
          let Eu = 0;
          const Ku = new DataView(uu);
          for (; Ru > 0;) {
            const uu = Ku.getInt8(Eu++);
            if (uu < 0) {
              const Qu = -uu;
              Ru -= Qu + 1;
              for (let uu = 0; uu < Qu; uu++) yu.push(Ku.getUint8(Eu++))
            } else {
              const Qu = uu;
              Ru -= 2;
              const mu = Ku.getUint8(Eu++);
              for (let uu = 0; uu < Qu + 1; uu++) yu.push(mu)
            }
          }
          return yu
        }(Ru)),
        Eu = new Uint8Array(yu.length);
      return tu(yu), lu(yu, Eu), new DataView(Eu.buffer)
    }

    function yR(uu) {
      const Ru = uu.array.slice(uu.offset.value, uu.offset.value + uu.size),
        yu = fflate.unzlibSync(Ru),
        Eu = new Uint8Array(yu.length);
      return tu(yu), lu(yu, Eu), new DataView(Eu.buffer)
    }

    function ER(uu) {
      const Ru = uu.array.slice(uu.offset.value, uu.offset.value + uu.size),
        yu = fflate.unzlibSync(Ru),
        Eu = uu.lines * uu.channels * uu.width,
        Ku = 1 == uu.type ? new Uint16Array(Eu) : new Uint32Array(Eu);
      let Qu = 0,
        mu = 0;
      const Ju = new Array(4);
      for (let Nu = 0; Nu < uu.lines; Nu++)
        for (let Ru = 0; Ru < uu.channels; Ru++) {
          let Ru = 0;
          switch (uu.type) {
            case 1:
              Ju[0] = Qu, Ju[1] = Ju[0] + uu.width, Qu = Ju[1] + uu.width;
              for (let Eu = 0; Eu < uu.width; ++Eu) {
                Ru += yu[Ju[0]++] << 8 | yu[Ju[1]++], Ku[mu] = Ru, mu++
              }
              break;
            case 2:
              Ju[0] = Qu, Ju[1] = Ju[0] + uu.width, Ju[2] = Ju[1] + uu.width, Qu = Ju[2] + uu.width;
              for (let Eu = 0; Eu < uu.width; ++Eu) {
                Ru += yu[Ju[0]++] << 24 | yu[Ju[1]++] << 16 | yu[Ju[2]++] << 8, Ku[mu] = Ru, mu++
              }
          }
        }
      return new DataView(Ku.buffer)
    }

    function KR(uu) {
      const Ru = uu.viewer,
        yu = {
          value: uu.offset.value
        },
        Eu = new Uint16Array(uu.width * uu.scanlineBlockSize * (uu.channels * uu.type)),
        Ku = new Uint8Array(Bu);
      let Qu = 0;
      const mu = new Array(uu.channels);
      for (let Xu = 0; Xu < uu.channels; Xu++) mu[Xu] = {}, mu[Xu].start = Qu, mu[Xu].end = mu[Xu].start, mu[Xu].nx = uu.width, mu[Xu].ny = uu.lines, mu[Xu].size = uu.type, Qu += mu[Xu].nx * mu[Xu].ny * mu[Xu].size;
      const Ju = Du(Ru, yu),
        Nu = Du(Ru, yu);
      if (Nu >= Bu) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (Ju <= Nu)
        for (let Xu = 0; Xu < Nu - Ju + 1; Xu++) Ku[Xu + Ju] = Au(Ru, yu);
      const Vu = new Uint16Array(ru),
        xu = function(uu, Ru) {
          let yu = 0;
          for (let Ku = 0; Ku < ru; ++Ku)(0 == Ku || uu[Ku >> 3] & 1 << (7 & Ku)) && (Ru[yu++] = Ku);
          const Eu = yu - 1;
          for (; yu < ru;) Ru[yu++] = 0;
          return Eu
        }(Ku, Vu),
        Su = eu(Ru, yu);
      ou(uu.array, Ru, yu, Su, Eu, Qu);
      for (let Xu = 0; Xu < uu.channels; ++Xu) {
        const uu = mu[Xu];
        for (let Ru = 0; Ru < mu[Xu].size; ++Ru) fu(Eu, uu.start + Ru, uu.nx, uu.size, uu.ny, uu.nx * uu.size, xu)
      }! function(uu, Ru, yu) {
        for (let Eu = 0; Eu < yu; ++Eu) Ru[Eu] = uu[Ru[Eu]]
      }(Vu, Eu, Qu);
      let pu = 0;
      const Tu = new Uint8Array(Eu.buffer.byteLength);
      for (let ru = 0; ru < uu.lines; ru++)
        for (let Ru = 0; Ru < uu.channels; Ru++) {
          const uu = mu[Ru],
            yu = uu.nx * uu.size,
            Ku = new Uint8Array(Eu.buffer, uu.end * Xu, yu * Xu);
          Tu.set(Ku, pu), pu += yu * Xu, uu.end += yu
        }
      return new DataView(Tu.buffer)
    }
    var QR, mR = yu(39655);
    ! function(uu) {
      uu[uu.Float = 0] = "Float", uu[uu.HalfFloat = 1] = "HalfFloat"
    }(QR || (QR = {}));
    class JR {}
    async function NR(uu, Ru, yu, Eu) {
      const Ku = {
        size: 0,
        viewer: Ru,
        array: new Uint8Array(Ru.buffer),
        offset: yu,
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
        case du.NO_COMPRESSION:
          Ku.lines = 1, Ku.uncompress = uR;
          break;
        case du.RLE_COMPRESSION:
          Ku.lines = 1, Ku.uncompress = RR;
          break;
        case du.ZIPS_COMPRESSION:
          Ku.lines = 1, Ku.uncompress = yR, await mR.i.LoadScriptAsync(JR.FFLATEUrl);
          break;
        case du.ZIP_COMPRESSION:
          Ku.lines = 16, Ku.uncompress = yR, await mR.i.LoadScriptAsync(JR.FFLATEUrl);
          break;
        case du.PIZ_COMPRESSION:
          Ku.lines = 32, Ku.uncompress = KR;
          break;
        case du.PXR24_COMPRESSION:
          Ku.lines = 16, Ku.uncompress = ER, await mR.i.LoadScriptAsync(JR.FFLATEUrl);
          break;
        default:
          throw new Error(du[uu.compression] + " is unsupported")
      }
      Ku.scanlineBlockSize = Ku.lines;
      const Qu = {};
      for (const Ju of uu.channels) switch (Ju.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          Qu[Ju.name] = !0, Ku.type = Ju.pixelType
      }
      let mu = !1;
      if (Qu.R && Qu.G && Qu.B && Qu.A) Ku.outputChannels = 4, Ku.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (Qu.R && Qu.G && Qu.B) mu = !0, Ku.outputChannels = 4, Ku.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (Qu.R && Qu.G) Ku.outputChannels = 2, Ku.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (Qu.R) Ku.outputChannels = 1, Ku.decodeChannels = {
        R: 0
      };
      else {
        if (!Qu.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        Ku.outputChannels = 1, Ku.decodeChannels = {
          Y: 0
        }
      }
      if (1 === Ku.type) switch (Eu) {
        case QR.Float:
          Ku.getter = Uu, Ku.inputSize = Xu;
          break;
        case QR.HalfFloat:
          Ku.getter = Du, Ku.inputSize = Xu
      } else {
        if (2 !== Ku.type) throw new Error("Unsupported pixelType " + Ku.type + " for " + uu.compression);
        switch (Eu) {
          case QR.Float:
            Ku.getter = Gu, Ku.inputSize = Ju;
            break;
          case QR.HalfFloat:
            Ku.getter = nu, Ku.inputSize = Ju
        }
      }
      Ku.blockCount = Ku.height / Ku.scanlineBlockSize;
      for (let Ju = 0; Ju < Ku.blockCount; Ju++) Iu(Ru, yu);
      const Nu = Ku.width * Ku.height * Ku.outputChannels;
      switch (Eu) {
        case QR.Float:
          Ku.byteArray = new Float32Array(Nu), Ku.textureType = 1, mu && Ku.byteArray.fill(1, 0, Nu);
          break;
        case QR.HalfFloat:
          Ku.byteArray = new Uint16Array(Nu), Ku.textureType = 2, mu && Ku.byteArray.fill(15360, 0, Nu);
          break;
        default:
          throw new Error("Unsupported type: " + Eu)
      }
      let Vu = 0;
      for (const Ju of uu.channels) void 0 !== Ku.decodeChannels[Ju.name] && (Ku.channelLineOffsets[Ju.name] = Vu * Ku.width), Vu += 2 * Ju.pixelType;
      return Ku.bytesPerLine = Ku.width * Vu, Ku.outLineWidth = Ku.width * Ku.outputChannels, "INCREASING_Y" === uu.lineOrder ? Ku.scanOrder = uu => uu : Ku.scanOrder = uu => Ku.height - 1 - uu, 4 == Ku.outputChannels ? (Ku.format = 5, Ku.linearSpace = !0) : (Ku.format = 6, Ku.linearSpace = !1), Ku
    }

    function XR(uu, Ru, yu, Eu) {
      const Ku = {
        value: 0
      };
      for (let Qu = 0; Qu < uu.height / uu.scanlineBlockSize; Qu++) {
        const mu = ku(yu, Eu) - Ru.dataWindow.yMin;
        uu.size = eu(yu, Eu), uu.lines = mu + uu.scanlineBlockSize > uu.height ? uu.height - mu : uu.scanlineBlockSize;
        const Ju = uu.size < uu.lines * uu.bytesPerLine && uu.uncompress ? uu.uncompress(uu) : uR(uu);
        Eu.value += uu.size;
        for (let yu = 0; yu < uu.scanlineBlockSize; yu++) {
          const Eu = Qu * uu.scanlineBlockSize,
            mu = yu + uu.scanOrder(Eu);
          if (mu >= uu.height) continue;
          const Nu = yu * uu.bytesPerLine,
            Xu = (uu.height - 1 - mu) * uu.outLineWidth;
          for (let yu = 0; yu < uu.channels; yu++) {
            const Eu = Ru.channels[yu].name,
              Qu = uu.channelLineOffsets[Eu],
              mu = uu.decodeChannels[Eu];
            if (void 0 !== mu) {
              Ku.value = Nu + Qu;
              for (let Ru = 0; Ru < uu.width; Ru++) {
                const yu = Xu + Ru * uu.outputChannels + mu;
                uu.byteArray && (uu.byteArray[yu] = uu.getter(Ju, Ku))
              }
            }
          }
        }
      }
    }
    JR.DefaultOutputType = QR.HalfFloat, JR.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class VR {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(uu, Ru, yu, Eu, Ku) {
        throw ".exr not supported in Cube."
      }
      loadData(uu, Ru, yu) {
        const Ku = new DataView(uu.buffer),
          Qu = {
            value: 0
          },
          mu = cu(Ku, Qu);
        NR(mu, Ku, Qu, JR.DefaultOutputType).then((uu => {
          XR(uu, mu, Ku, Qu);
          const Eu = mu.dataWindow.xMax - mu.dataWindow.xMin + 1,
            Ju = mu.dataWindow.yMax - mu.dataWindow.yMin + 1;
          yu(Eu, Ju, Ru.generateMipMaps, !1, (() => {
            const yu = Ru.eS();
            Ru.format = mu.format, Ru.type = uu.textureType, Ru.invertY = !1, Ru._gammaSpace = !mu.linearSpace, uu.byteArray && yu._uploadDataToTextureDirectly(Ru, uu.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((uu => {
          Eu.e.Error("Failed to load EXR texture: ", uu)
        }))
      }
    }
    async function rR(uu) {
      const Ru = new DataView(uu),
        yu = {
          value: 0
        },
        Ku = cu(Ru, yu);
      try {
        const uu = await NR(Ku, Ru, yu, QR.Float);
        return XR(uu, Ku, Ru, yu), uu.byteArray ? {
          width: Ku.dataWindow.xMax - Ku.dataWindow.xMin + 1,
          height: Ku.dataWindow.yMax - Ku.dataWindow.yMin + 1,
          data: new Float32Array(uu.byteArray)
        } : (Eu.e.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (Qu) {
        Eu.e.Error("Failed to load EXR data: ", Qu)
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