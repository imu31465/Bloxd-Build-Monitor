export const id = 320;
export const ids = [320];
export const modules = {
  42e3: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      ReadExrDataAsync: () => lU,
      _ExrTextureLoader: () => jU
    });
    var WT = mT(38800),
      zT = mT(37226),
      MT = mT(40178);
    const gT = 4,
      nT = 4,
      HT = 1,
      kT = 2,
      jT = 8,
      lT = 65536,
      LT = lT >> 3,
      pT = 14,
      BT = 65537,
      ZT = 1 << pT,
      cT = ZT - 1,
      vT = 59,
      fT = 63,
      qT = 2 + fT - vT;
    var iT, bT;

    function OT(TT, UT) {
      const mT = new Uint8Array(TT);
      let WT = 0;
      for (; 0 != mT[UT.value + WT];) WT += 1;
      const zT = (new TextDecoder).decode(mT.slice(UT.value, UT.value + WT));
      return UT.value = UT.value + WT + 1, zT
    }

    function eT(TT, UT) {
      const mT = TT.getInt32(UT.value, !0);
      return UT.value += gT, mT
    }

    function YT(TT, UT) {
      const mT = TT.getUint32(UT.value, !0);
      return UT.value += gT, mT
    }

    function JT(TT, UT) {
      const mT = TT.getUint8(UT.value);
      return UT.value += HT, mT
    }

    function xT(TT, UT) {
      const mT = TT.getUint16(UT.value, !0);
      return UT.value += kT, mT
    }

    function dT(TT, UT) {
      const mT = TT[UT.value];
      return UT.value += HT, mT
    }

    function wT(TT, UT) {
      let mT;
      return mT = "getBigInt64" in DataView.prototype ? Number(TT.getBigInt64(UT.value, !0)) : TT.getUint32(UT.value + 4, !0) + Number(TT.getUint32(UT.value, !0) << 32), UT.value += jT, mT
    }

    function tT(TT, UT) {
      const mT = TT.getFloat32(UT.value, !0);
      return UT.value += nT, mT
    }

    function aT(TT, UT) {
      return (0, MT.c)(xT(TT, UT))
    }

    function yT(TT, UT) {
      return (0, MT.j)((0, zT.Clamp)(tT(TT, UT), -MT.f, MT.f))
    }

    function XT(TT, UT, mT, WT) {
      switch (mT) {
        case "string":
        case "stringvector":
        case "iccProfile":
          return function(TT, UT, mT) {
            const WT = (new TextDecoder).decode(new Uint8Array(TT).slice(UT.value, UT.value + mT));
            return UT.value = UT.value + mT, WT
          }(TT.buffer, UT, WT);
        case "chlist":
          return function(TT, UT, mT) {
            const WT = UT.value,
              zT = [];
            for (; UT.value < WT + mT - 1;) {
              const mT = OT(TT.buffer, UT),
                WT = eT(TT, UT),
                MT = JT(TT, UT);
              UT.value += 3;
              const gT = eT(TT, UT),
                nT = eT(TT, UT);
              zT.push({
                name: mT,
                pixelType: WT,
                pLinear: MT,
                xSampling: gT,
                ySampling: nT
              })
            }
            return UT.value += 1, zT
          }(TT, UT, WT);
        case "chromaticities":
          return function(TT, UT) {
            return {
              redX: tT(TT, UT),
              redY: tT(TT, UT),
              greenX: tT(TT, UT),
              greenY: tT(TT, UT),
              blueX: tT(TT, UT),
              blueY: tT(TT, UT),
              whiteX: tT(TT, UT),
              whiteY: tT(TT, UT)
            }
          }(TT, UT);
        case "compression":
          return function(TT, UT) {
            return JT(TT, UT)
          }(TT, UT);
        case "box2i":
          return function(TT, UT) {
            return {
              xMin: eT(TT, UT),
              yMin: eT(TT, UT),
              xMax: eT(TT, UT),
              yMax: eT(TT, UT)
            }
          }(TT, UT);
        case "lineOrder":
          return function(TT, UT) {
            const mT = JT(TT, UT);
            return bT[mT]
          }(TT, UT);
        case "float":
          return tT(TT, UT);
        case "v2f":
          return function(TT, UT) {
            return [tT(TT, UT), tT(TT, UT)]
          }(TT, UT);
        case "v3f":
          return function(TT, UT) {
            return [tT(TT, UT), tT(TT, UT), tT(TT, UT)]
          }(TT, UT);
        case "int":
          return eT(TT, UT);
        case "rational":
          return function(TT, UT) {
            return [eT(TT, UT), YT(TT, UT)]
          }(TT, UT);
        case "timecode":
          return function(TT, UT) {
            return [YT(TT, UT), YT(TT, UT)]
          }(TT, UT);
        case "preview":
          return UT.value += WT, "skipped";
        default:
          return void(UT.value += WT)
      }
    }

    function IT(TT) {
      for (let UT = 1; UT < TT.length; UT++) {
        const mT = TT[UT - 1] + TT[UT] - 128;
        TT[UT] = mT
      }
    }

    function QT(TT, UT) {
      let mT = 0,
        WT = Math.floor((TT.length + 1) / 2),
        zT = 0;
      const MT = TT.length - 1;
      for (; !(zT > MT) && (UT[zT++] = TT[mT++], !(zT > MT));) UT[zT++] = TT[WT++]
    }! function(TT) {
      TT[TT.NO_COMPRESSION = 0] = "NO_COMPRESSION", TT[TT.RLE_COMPRESSION = 1] = "RLE_COMPRESSION", TT[TT.ZIPS_COMPRESSION = 2] = "ZIPS_COMPRESSION", TT[TT.ZIP_COMPRESSION = 3] = "ZIP_COMPRESSION", TT[TT.PIZ_COMPRESSION = 4] = "PIZ_COMPRESSION", TT[TT.PXR24_COMPRESSION = 5] = "PXR24_COMPRESSION"
    }(iT || (iT = {})),
    function(TT) {
      TT[TT.INCREASING_Y = 0] = "INCREASING_Y", TT[TT.DECREASING_Y = 1] = "DECREASING_Y"
    }(bT || (bT = {}));
    const sT = 20000630;

    function FT(TT, UT) {
      if (TT.getUint32(0, !0) != sT) throw new Error("Incorrect OpenEXR format");
      const mT = TT.getUint8(4),
        zT = TT.getUint8(5),
        MT = {
          singleTile: !!(2 & zT),
          longName: !!(4 & zT),
          deepFormat: !!(8 & zT),
          multiPart: !!(16 & zT)
        };
      UT.value = 8;
      const gT = {};
      let nT = !0;
      for (; nT;) {
        const mT = OT(TT.buffer, UT);
        if (mT) {
          const zT = OT(TT.buffer, UT),
            MT = XT(TT, UT, zT, YT(TT, UT));
          void 0 === MT ? WT.b.Warn(`Unknown header attribute type ${zT}'.`) : gT[mT] = MT
        } else nT = !1
      }
      if (0 != (-5 & zT)) throw new Error("Unsupported file format");
      return {
        version: mT,
        spec: MT,
        ...gT
      }
    }
    const PT = 32768,
      VT = 65535;

    function uT(TT, UT, mT, WT, zT) {
      for (; mT < TT;) UT = UT << 8 | dT(WT, zT), mT += 8;
      return {
        l: UT >> (mT -= TT) & (1 << TT) - 1,
        c: UT,
        lc: mT
      }
    }

    function CT(TT, UT, mT, WT) {
      return {
        c: TT = TT << 8 | dT(mT, WT),
        lc: UT += 8
      }
    }

    function rT(TT, UT, mT, WT, zT, MT, gT, nT, HT) {
      if (TT == UT) {
        if (WT < 8) {
          const TT = CT(mT, WT, zT, MT);
          mT = TT.c, WT = TT.lc
        }
        let TT = mT >> (WT -= 8);
        if (TT = new Uint8Array([TT])[0], nT.value + TT > HT) return null;
        const UT = gT[nT.value - 1];
        for (; TT-- > 0;) gT[nT.value++] = UT
      } else {
        if (!(nT.value < HT)) return null;
        gT[nT.value++] = TT
      }
      return {
        c: mT,
        lc: WT
      }
    }
    const KT = new Array(59);

    function ST(TT, UT, mT, WT, zT, MT) {
      const gT = UT;
      let nT = 0,
        HT = 0;
      for (; WT <= zT; WT++) {
        if (gT.value - UT.value > mT) return;
        let kT = uT(6, nT, HT, TT, gT);
        const jT = kT.l;
        if (nT = kT.c, HT = kT.lc, MT[WT] = jT, jT == fT) {
          if (gT.value - UT.value > mT) throw new Error("Error in HufUnpackEncTable");
          kT = uT(8, nT, HT, TT, gT);
          let jT = kT.l + qT;
          if (nT = kT.c, HT = kT.lc, WT + jT > zT + 1) throw new Error("Error in HufUnpackEncTable");
          for (; jT--;) MT[WT++] = 0;
          WT--
        } else if (jT >= vT) {
          let TT = jT - vT + 2;
          if (WT + TT > zT + 1) throw new Error("Error in HufUnpackEncTable");
          for (; TT--;) MT[WT++] = 0;
          WT--
        }
      }! function(TT) {
        for (let mT = 0; mT <= 58; ++mT) KT[mT] = 0;
        for (let mT = 0; mT < BT; ++mT) KT[TT[mT]] += 1;
        let UT = 0;
        for (let mT = 58; mT > 0; --mT) {
          const TT = UT + KT[mT] >> 1;
          KT[mT] = UT, UT = TT
        }
        for (let mT = 0; mT < BT; ++mT) {
          const UT = TT[mT];
          UT > 0 && (TT[mT] = UT | KT[UT]++ << 6)
        }
      }(MT)
    }

    function GT(TT) {
      return 63 & TT
    }

    function NT(TT) {
      return TT >> 6
    }

    function ET(TT, UT, mT, WT, zT, MT) {
      const gT = mT.value,
        nT = YT(UT, mT),
        HT = YT(UT, mT);
      mT.value += 4;
      const kT = YT(UT, mT);
      if (mT.value += 4, nT < 0 || nT >= BT || HT < 0 || HT >= BT) throw new Error("Wrong HUF_ENCSIZE");
      const jT = new Array(BT),
        lT = new Array(ZT);
      ! function(TT) {
        for (let UT = 0; UT < ZT; UT++) TT[UT] = {}, TT[UT].len = 0, TT[UT].lit = 0, TT[UT].p = null
      }(lT);
      if (ST(TT, mT, WT - (mT.value - gT), nT, HT, jT), kT > 8 * (WT - (mT.value - gT))) throw new Error("Wrong hufUncompress");
      ! function(TT, UT, mT, WT) {
        for (; UT <= mT; UT++) {
          const mT = NT(TT[UT]),
            zT = GT(TT[UT]);
          if (mT >> zT) throw new Error("Invalid table entry");
          if (zT > pT) {
            const TT = WT[mT >> zT - pT];
            if (TT.len) throw new Error("Invalid table entry");
            if (TT.lit++, TT.p) {
              const UT = TT.p;
              TT.p = new Array(TT.lit);
              for (let mT = 0; mT < TT.lit - 1; ++mT) TT.p[mT] = UT[mT]
            } else TT.p = new Array(1);
            TT.p[TT.lit - 1] = UT
          } else if (zT) {
            let TT = 0;
            for (let MT = 1 << pT - zT; MT > 0; MT--) {
              const MT = WT[(mT << pT - zT) + TT];
              if (MT.len || MT.p) throw new Error("Invalid table entry");
              MT.len = zT, MT.lit = UT, TT++
            }
          }
        }
      }(jT, nT, HT, lT),
      function(TT, UT, mT, WT, zT, MT, gT, nT, HT) {
        let kT = 0,
          jT = 0;
        const lT = gT,
          LT = Math.trunc(WT.value + (zT + 7) / 8);
        for (; WT.value < LT;) {
          let zT = CT(kT, jT, mT, WT);
          for (kT = zT.c, jT = zT.lc; jT >= pT;) {
            const gT = UT[kT >> jT - pT & cT];
            if (gT.len) {
              jT -= gT.len;
              const TT = rT(gT.lit, MT, kT, jT, mT, WT, nT, HT, lT);
              TT && (kT = TT.c, jT = TT.lc)
            } else {
              if (!gT.p) throw new Error("hufDecode issues");
              let UT;
              for (UT = 0; UT < gT.lit; UT++) {
                const pT = GT(TT[gT.p[UT]]);
                for (; jT < pT && WT.value < LT;) zT = CT(kT, jT, mT, WT), kT = zT.c, jT = zT.lc;
                if (jT >= pT && NT(TT[gT.p[UT]]) == (kT >> jT - pT & (1 << pT) - 1)) {
                  jT -= pT;
                  const TT = rT(gT.p[UT], MT, kT, jT, mT, WT, nT, HT, lT);
                  TT && (kT = TT.c, jT = TT.lc);
                  break
                }
              }
              if (UT == gT.lit) throw new Error("HufDecode issues")
            }
          }
        }
        const BT = 8 - zT & 7;
        for (kT >>= BT, jT -= BT; jT > 0;) {
          const TT = UT[kT << pT - jT & cT];
          if (!TT.len) throw new Error("HufDecode issues");
          {
            jT -= TT.len;
            const UT = rT(TT.lit, MT, kT, jT, mT, WT, nT, HT, lT);
            UT && (kT = UT.c, jT = UT.lc)
          }
        }
      }(jT, lT, TT, mT, kT, HT, MT, zT, {
        value: 0
      })
    }

    function hT(TT) {
      return 65535 & TT
    }

    function DT(TT) {
      const UT = hT(TT);
      return UT > 32767 ? UT - 65536 : UT
    }

    function oT(TT, UT) {
      const mT = DT(TT),
        WT = DT(UT),
        zT = mT + (1 & WT) + (WT >> 1);
      return {
        a: zT,
        b: zT - WT
      }
    }

    function AT(TT, UT) {
      const mT = hT(TT),
        WT = hT(UT),
        zT = mT - (WT >> 1) & VT;
      return {
        a: WT + zT - PT & VT,
        b: zT
      }
    }

    function RT(TT, UT, mT, WT, zT, MT, gT) {
      const nT = gT < 16384,
        HT = mT > zT ? zT : mT;
      let kT, jT, lT = 1;
      for (; lT <= HT;) lT <<= 1;
      for (lT >>= 1, kT = lT, lT >>= 1; lT >= 1;) {
        jT = 0;
        const gT = jT + MT * (zT - kT),
          HT = MT * lT,
          LT = MT * kT,
          pT = WT * lT,
          BT = WT * kT;
        let ZT, cT, vT, fT;
        for (; jT <= gT; jT += LT) {
          let zT = jT;
          const MT = jT + WT * (mT - kT);
          for (; zT <= MT; zT += BT) {
            const mT = zT + pT,
              WT = zT + HT,
              MT = WT + pT;
            if (nT) {
              let gT = oT(TT[zT + UT], TT[WT + UT]);
              ZT = gT.a, vT = gT.b, gT = oT(TT[mT + UT], TT[MT + UT]), cT = gT.a, fT = gT.b, gT = oT(ZT, cT), TT[zT + UT] = gT.a, TT[mT + UT] = gT.b, gT = oT(vT, fT), TT[WT + UT] = gT.a, TT[MT + UT] = gT.b
            } else {
              let gT = AT(TT[zT + UT], TT[WT + UT]);
              ZT = gT.a, vT = gT.b, gT = AT(TT[mT + UT], TT[MT + UT]), cT = gT.a, fT = gT.b, gT = AT(ZT, cT), TT[zT + UT] = gT.a, TT[mT + UT] = gT.b, gT = AT(vT, fT), TT[WT + UT] = gT.a, TT[MT + UT] = gT.b
            }
          }
          if (mT & lT) {
            const mT = zT + HT;
            let WT;
            WT = nT ? oT(TT[zT + UT], TT[mT + UT]) : AT(TT[zT + UT], TT[mT + UT]), ZT = WT.a, TT[mT + UT] = WT.b, TT[zT + UT] = ZT
          }
        }
        if (zT & lT) {
          let zT = jT;
          const MT = jT + WT * (mT - kT);
          for (; zT <= MT; zT += BT) {
            const mT = zT + pT;
            let WT;
            WT = nT ? oT(TT[zT + UT], TT[mT + UT]) : AT(TT[zT + UT], TT[mT + UT]), ZT = WT.a, TT[mT + UT] = WT.b, TT[zT + UT] = ZT
          }
        }
        kT = lT, lT >>= 1
      }
      return jT
    }

    function TU(TT) {
      return new DataView(TT.array.buffer, TT.offset.value, TT.size)
    }

    function UU(TT) {
      const UT = TT.viewer.buffer.slice(TT.offset.value, TT.offset.value + TT.size),
        mT = new Uint8Array(function(TT) {
          let UT = TT.byteLength;
          const mT = [];
          let WT = 0;
          const zT = new DataView(TT);
          for (; UT > 0;) {
            const TT = zT.getInt8(WT++);
            if (TT < 0) {
              const MT = -TT;
              UT -= MT + 1;
              for (let TT = 0; TT < MT; TT++) mT.push(zT.getUint8(WT++))
            } else {
              const MT = TT;
              UT -= 2;
              const gT = zT.getUint8(WT++);
              for (let TT = 0; TT < MT + 1; TT++) mT.push(gT)
            }
          }
          return mT
        }(UT)),
        WT = new Uint8Array(mT.length);
      return IT(mT), QT(mT, WT), new DataView(WT.buffer)
    }

    function mU(TT) {
      const UT = TT.array.slice(TT.offset.value, TT.offset.value + TT.size),
        mT = fflate.unzlibSync(UT),
        WT = new Uint8Array(mT.length);
      return IT(mT), QT(mT, WT), new DataView(WT.buffer)
    }

    function WU(TT) {
      const UT = TT.array.slice(TT.offset.value, TT.offset.value + TT.size),
        mT = fflate.unzlibSync(UT),
        WT = TT.lines * TT.channels * TT.width,
        zT = 1 == TT.type ? new Uint16Array(WT) : new Uint32Array(WT);
      let MT = 0,
        gT = 0;
      const nT = new Array(4);
      for (let HT = 0; HT < TT.lines; HT++)
        for (let UT = 0; UT < TT.channels; UT++) {
          let UT = 0;
          switch (TT.type) {
            case 1:
              nT[0] = MT, nT[1] = nT[0] + TT.width, MT = nT[1] + TT.width;
              for (let WT = 0; WT < TT.width; ++WT) {
                UT += mT[nT[0]++] << 8 | mT[nT[1]++], zT[gT] = UT, gT++
              }
              break;
            case 2:
              nT[0] = MT, nT[1] = nT[0] + TT.width, nT[2] = nT[1] + TT.width, MT = nT[2] + TT.width;
              for (let WT = 0; WT < TT.width; ++WT) {
                UT += mT[nT[0]++] << 24 | mT[nT[1]++] << 16 | mT[nT[2]++] << 8, zT[gT] = UT, gT++
              }
          }
        }
      return new DataView(zT.buffer)
    }

    function zU(TT) {
      const UT = TT.viewer,
        mT = {
          value: TT.offset.value
        },
        WT = new Uint16Array(TT.width * TT.scanlineBlockSize * (TT.channels * TT.type)),
        zT = new Uint8Array(LT);
      let MT = 0;
      const gT = new Array(TT.channels);
      for (let kT = 0; kT < TT.channels; kT++) gT[kT] = {}, gT[kT].start = MT, gT[kT].end = gT[kT].start, gT[kT].nx = TT.width, gT[kT].ny = TT.lines, gT[kT].size = TT.type, MT += gT[kT].nx * gT[kT].ny * gT[kT].size;
      const nT = xT(UT, mT),
        HT = xT(UT, mT);
      if (HT >= LT) throw new Error("Wrong PIZ_COMPRESSION BITMAP_SIZE");
      if (nT <= HT)
        for (let kT = 0; kT < HT - nT + 1; kT++) zT[kT + nT] = JT(UT, mT);
      const jT = new Uint16Array(lT),
        pT = function(TT, UT) {
          let mT = 0;
          for (let zT = 0; zT < lT; ++zT)(0 == zT || TT[zT >> 3] & 1 << (7 & zT)) && (UT[mT++] = zT);
          const WT = mT - 1;
          for (; mT < lT;) UT[mT++] = 0;
          return WT
        }(zT, jT),
        BT = YT(UT, mT);
      ET(TT.array, UT, mT, BT, WT, MT);
      for (let kT = 0; kT < TT.channels; ++kT) {
        const TT = gT[kT];
        for (let UT = 0; UT < gT[kT].size; ++UT) RT(WT, TT.start + UT, TT.nx, TT.size, TT.ny, TT.nx * TT.size, pT)
      }! function(TT, UT, mT) {
        for (let WT = 0; WT < mT; ++WT) UT[WT] = TT[UT[WT]]
      }(jT, WT, MT);
      let ZT = 0;
      const cT = new Uint8Array(WT.buffer.byteLength);
      for (let lT = 0; lT < TT.lines; lT++)
        for (let UT = 0; UT < TT.channels; UT++) {
          const TT = gT[UT],
            mT = TT.nx * TT.size,
            zT = new Uint8Array(WT.buffer, TT.end * kT, mT * kT);
          cT.set(zT, ZT), ZT += mT * kT, TT.end += mT
        }
      return new DataView(cT.buffer)
    }
    var MU, gU = mT(40201);
    ! function(TT) {
      TT[TT.Float = 0] = "Float", TT[TT.HalfFloat = 1] = "HalfFloat"
    }(MU || (MU = {}));
    class nU {}
    async function HU(TT, UT, mT, WT) {
      const zT = {
        size: 0,
        viewer: UT,
        array: new Uint8Array(UT.buffer),
        offset: mT,
        width: TT.dataWindow.xMax - TT.dataWindow.xMin + 1,
        height: TT.dataWindow.yMax - TT.dataWindow.yMin + 1,
        channels: TT.channels.length,
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
      switch (TT.compression) {
        case iT.NO_COMPRESSION:
          zT.lines = 1, zT.uncompress = TU;
          break;
        case iT.RLE_COMPRESSION:
          zT.lines = 1, zT.uncompress = UU;
          break;
        case iT.ZIPS_COMPRESSION:
          zT.lines = 1, zT.uncompress = mU, await gU.j.LoadScriptAsync(nU.FFLATEUrl);
          break;
        case iT.ZIP_COMPRESSION:
          zT.lines = 16, zT.uncompress = mU, await gU.j.LoadScriptAsync(nU.FFLATEUrl);
          break;
        case iT.PIZ_COMPRESSION:
          zT.lines = 32, zT.uncompress = zU;
          break;
        case iT.PXR24_COMPRESSION:
          zT.lines = 16, zT.uncompress = WU, await gU.j.LoadScriptAsync(nU.FFLATEUrl);
          break;
        default:
          throw new Error(iT[TT.compression] + " is unsupported")
      }
      zT.scanlineBlockSize = zT.lines;
      const MT = {};
      for (const nT of TT.channels) switch (nT.name) {
        case "R":
        case "G":
        case "B":
        case "A":
        case "Y":
          MT[nT.name] = !0, zT.type = nT.pixelType
      }
      let gT = !1;
      if (MT.R && MT.G && MT.B && MT.A) zT.outputChannels = 4, zT.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (MT.R && MT.G && MT.B) gT = !0, zT.outputChannels = 4, zT.decodeChannels = {
        R: 0,
        G: 1,
        B: 2,
        A: 3
      };
      else if (MT.R && MT.G) zT.outputChannels = 2, zT.decodeChannels = {
        R: 0,
        G: 1
      };
      else if (MT.R) zT.outputChannels = 1, zT.decodeChannels = {
        R: 0
      };
      else {
        if (!MT.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
        zT.outputChannels = 1, zT.decodeChannels = {
          Y: 0
        }
      }
      if (1 === zT.type) switch (WT) {
        case MU.Float:
          zT.getter = aT, zT.inputSize = kT;
          break;
        case MU.HalfFloat:
          zT.getter = xT, zT.inputSize = kT
      } else {
        if (2 !== zT.type) throw new Error("Unsupported pixelType " + zT.type + " for " + TT.compression);
        switch (WT) {
          case MU.Float:
            zT.getter = tT, zT.inputSize = nT;
            break;
          case MU.HalfFloat:
            zT.getter = yT, zT.inputSize = nT
        }
      }
      zT.blockCount = zT.height / zT.scanlineBlockSize;
      for (let nT = 0; nT < zT.blockCount; nT++) wT(UT, mT);
      const HT = zT.width * zT.height * zT.outputChannels;
      switch (WT) {
        case MU.Float:
          zT.byteArray = new Float32Array(HT), zT.textureType = 1, gT && zT.byteArray.fill(1, 0, HT);
          break;
        case MU.HalfFloat:
          zT.byteArray = new Uint16Array(HT), zT.textureType = 2, gT && zT.byteArray.fill(15360, 0, HT);
          break;
        default:
          throw new Error("Unsupported type: " + WT)
      }
      let jT = 0;
      for (const nT of TT.channels) void 0 !== zT.decodeChannels[nT.name] && (zT.channelLineOffsets[nT.name] = jT * zT.width), jT += 2 * nT.pixelType;
      return zT.bytesPerLine = zT.width * jT, zT.outLineWidth = zT.width * zT.outputChannels, "INCREASING_Y" === TT.lineOrder ? zT.scanOrder = TT => TT : zT.scanOrder = TT => zT.height - 1 - TT, 4 == zT.outputChannels ? (zT.format = 5, zT.linearSpace = !0) : (zT.format = 6, zT.linearSpace = !1), zT
    }

    function kU(TT, UT, mT, WT) {
      const zT = {
        value: 0
      };
      for (let MT = 0; MT < TT.height / TT.scanlineBlockSize; MT++) {
        const gT = eT(mT, WT) - UT.dataWindow.yMin;
        TT.size = YT(mT, WT), TT.lines = gT + TT.scanlineBlockSize > TT.height ? TT.height - gT : TT.scanlineBlockSize;
        const nT = TT.size < TT.lines * TT.bytesPerLine && TT.uncompress ? TT.uncompress(TT) : TU(TT);
        WT.value += TT.size;
        for (let mT = 0; mT < TT.scanlineBlockSize; mT++) {
          const WT = MT * TT.scanlineBlockSize,
            gT = mT + TT.scanOrder(WT);
          if (gT >= TT.height) continue;
          const HT = mT * TT.bytesPerLine,
            kT = (TT.height - 1 - gT) * TT.outLineWidth;
          for (let mT = 0; mT < TT.channels; mT++) {
            const WT = UT.channels[mT].name,
              MT = TT.channelLineOffsets[WT],
              gT = TT.decodeChannels[WT];
            if (void 0 !== gT) {
              zT.value = HT + MT;
              for (let UT = 0; UT < TT.width; UT++) {
                const mT = kT + UT * TT.outputChannels + gT;
                TT.byteArray && (TT.byteArray[mT] = TT.getter(nT, zT))
              }
            }
          }
        }
      }
    }
    nU.DefaultOutputType = MU.HalfFloat, nU.FFLATEUrl = "https://unpkg.com/fflate@0.8.2";
    class jU {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData(TT, UT, mT, WT, zT) {
        throw ".exr not supported in Cube."
      }
      loadData(TT, UT, mT) {
        const zT = new DataView(TT.buffer),
          MT = {
            value: 0
          },
          gT = FT(zT, MT);
        HU(gT, zT, MT, nU.DefaultOutputType).then((TT => {
          kU(TT, gT, zT, MT);
          const WT = gT.dataWindow.xMax - gT.dataWindow.xMin + 1,
            nT = gT.dataWindow.yMax - gT.dataWindow.yMin + 1;
          mT(WT, nT, UT.generateMipMaps, !1, (() => {
            const mT = UT.eB();
            UT.format = gT.format, UT.type = TT.textureType, UT.invertY = !1, UT._gammaSpace = !gT.linearSpace, TT.byteArray && mT._uploadDataToTextureDirectly(UT, TT.byteArray, 0, 0, void 0, !0)
          }))
        })).catch((TT => {
          WT.b.Error("Failed to load EXR texture: ", TT)
        }))
      }
    }
    async function lU(TT) {
      const UT = new DataView(TT),
        mT = {
          value: 0
        },
        zT = FT(UT, mT);
      try {
        const TT = await HU(zT, UT, mT, MU.Float);
        return kU(TT, zT, UT, mT), TT.byteArray ? {
          width: zT.dataWindow.xMax - zT.dataWindow.xMin + 1,
          height: zT.dataWindow.yMax - zT.dataWindow.yMin + 1,
          data: new Float32Array(TT.byteArray)
        } : (WT.b.Error("Failed to decode EXR data: No byte array available."), {
          width: 0,
          height: 0,
          data: null
        })
      } catch (MT) {
        WT.b.Error("Failed to load EXR data: ", MT)
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
for (const TT in modules) Object.freeze(modules[TT]);