/*! For license information please see cwj32u.255.0f0ee1cb.chunk.js.LICENSE.txt */
export const id = 255;
export const ids = [255, 262];
export const modules = {
  39173: HH => {
    HH.exports = function(HH) {
      return null != HH && null != HH.constructor && "function" === typeof HH.constructor.isBuffer && HH.constructor.isBuffer(HH)
    }
  },
  39162: (HH, BH, LH) => {
    var AH = LH(39167),
      rH = LH(39171),
      SH = LH(39173);
    LH.g.__TYPEDARRAY_POOL || (LH.g.__TYPEDARRAY_POOL = {
      UINT8: rH([32, 0]),
      UINT16: rH([32, 0]),
      UINT32: rH([32, 0]),
      INT8: rH([32, 0]),
      INT16: rH([32, 0]),
      INT32: rH([32, 0]),
      FLOAT: rH([32, 0]),
      DOUBLE: rH([32, 0]),
      DATA: rH([32, 0]),
      UINT8C: rH([32, 0]),
      BUFFER: rH([32, 0])
    });
    var hH = "undefined" !== typeof Uint8ClampedArray,
      tH = LH.g.__TYPEDARRAY_POOL;
    tH.UINT8C || (tH.UINT8C = rH([32, 0])), tH.BUFFER || (tH.BUFFER = rH([32, 0]));
    var zH = tH.DATA,
      CH = tH.BUFFER;

    function EH(HH) {
      if (HH) {
        var BH = HH.length || HH.byteLength,
          LH = AH.log2(BH);
        zH[LH].push(HH)
      }
    }

    function XH(HH) {
      HH = AH.nextPow2(HH);
      var BH = AH.log2(HH),
        LH = zH[BH];
      return LH.length > 0 ? LH.pop() : new ArrayBuffer(HH)
    }

    function GH(HH) {
      return new Uint8Array(XH(HH), 0, HH)
    }

    function YH(HH) {
      return new Uint16Array(XH(2 * HH), 0, HH)
    }

    function uH(HH) {
      return new Uint32Array(XH(4 * HH), 0, HH)
    }

    function QH(HH) {
      return new Int8Array(XH(HH), 0, HH)
    }

    function WH(HH) {
      return new Int16Array(XH(2 * HH), 0, HH)
    }

    function MH(HH) {
      return new Int32Array(XH(4 * HH), 0, HH)
    }

    function xH(HH) {
      return new Float32Array(XH(4 * HH), 0, HH)
    }

    function vH(HH) {
      return new Float64Array(XH(8 * HH), 0, HH)
    }

    function PH(HH) {
      return hH ? new Uint8ClampedArray(XH(HH), 0, HH) : GH(HH)
    }

    function TH(HH) {
      return new DataView(XH(HH), 0, HH)
    }
    BH.free = function(HH) {
      if (SH(HH)) CH[AH.log2(HH.length)].push(HH);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(HH) && (HH = HH.buffer), !HH) return;
        var BH = HH.length || HH.byteLength,
          LH = 0 | AH.log2(BH);
        zH[LH].push(HH)
      }
    }, BH.freeUint8 = BH.freeUint16 = BH.freeUint32 = BH.freeInt8 = BH.freeInt16 = BH.freeInt32 = BH.freeFloat32 = BH.freeFloat = BH.freeFloat64 = BH.freeDouble = BH.freeUint8Clamped = BH.freeDataView = function(HH) {
      EH(HH.buffer)
    }, BH.freeArrayBuffer = EH, BH.freeBuffer = function(HH) {
      CH[AH.log2(HH.length)].push(HH)
    }, BH.malloc = function(HH, BH) {
      if (void 0 === BH || "arraybuffer" === BH) return XH(HH);
      switch (BH) {
        case "uint8":
          return GH(HH);
        case "uint16":
          return YH(HH);
        case "uint32":
          return uH(HH);
        case "int8":
          return QH(HH);
        case "int16":
          return WH(HH);
        case "int32":
          return MH(HH);
        case "float":
        case "float32":
          return xH(HH);
        case "double":
        case "float64":
          return vH(HH);
        case "uint8_clamped":
          return PH(HH);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return TH(HH);
        default:
          return null
      }
      return null
    }, BH.mallocArrayBuffer = XH, BH.mallocUint8 = GH, BH.mallocUint16 = YH, BH.mallocUint32 = uH, BH.mallocInt8 = QH, BH.mallocInt16 = WH, BH.mallocInt32 = MH, BH.mallocFloat32 = BH.mallocFloat = xH, BH.mallocFloat64 = BH.mallocDouble = vH, BH.mallocUint8Clamped = PH, BH.mallocDataView = TH, BH.clearCache = function() {
      for (var HH = 0; HH < 32; ++HH) tH.UINT8[HH].length = 0, tH.UINT16[HH].length = 0, tH.UINT32[HH].length = 0, tH.INT8[HH].length = 0, tH.INT16[HH].length = 0, tH.INT32[HH].length = 0, tH.FLOAT[HH].length = 0, tH.DOUBLE[HH].length = 0, tH.UINT8C[HH].length = 0, zH[HH].length = 0, CH[HH].length = 0
    }
  },
  39167: (HH, BH) => {
    function LH(HH) {
      var BH = 32;
      return (HH &= -HH) && BH--, 65535 & HH && (BH -= 16), 16711935 & HH && (BH -= 8), 252645135 & HH && (BH -= 4), 858993459 & HH && (BH -= 2), 1431655765 & HH && (BH -= 1), BH
    }
    BH.INT_BITS = 32, BH.INT_MAX = 2147483647, BH.INT_MIN = -1 << 31, BH.sign = function(HH) {
      return (HH > 0) - (HH < 0)
    }, BH.abs = function(HH) {
      var BH = HH >> 31;
      return (HH ^ BH) - BH
    }, BH.min = function(HH, BH) {
      return BH ^ (HH ^ BH) & -(HH < BH)
    }, BH.max = function(HH, BH) {
      return HH ^ (HH ^ BH) & -(HH < BH)
    }, BH.isPow2 = function(HH) {
      return !(HH & HH - 1) && !!HH
    }, BH.log2 = function(HH) {
      var BH, LH;
      return BH = (HH > 65535) << 4, BH |= LH = ((HH >>>= BH) > 255) << 3, BH |= LH = ((HH >>>= LH) > 15) << 2, (BH |= LH = ((HH >>>= LH) > 3) << 1) | (HH >>>= LH) >> 1
    }, BH.log10 = function(HH) {
      return HH >= 1e9 ? 9 : HH >= 1e8 ? 8 : HH >= 1e7 ? 7 : HH >= 1e6 ? 6 : HH >= 1e5 ? 5 : HH >= 1e4 ? 4 : HH >= 1e3 ? 3 : HH >= 100 ? 2 : HH >= 10 ? 1 : 0
    }, BH.popCount = function(HH) {
      return 16843009 * ((HH = (858993459 & (HH -= HH >>> 1 & 1431655765)) + (HH >>> 2 & 858993459)) + (HH >>> 4) & 252645135) >>> 24
    }, BH.countTrailingZeros = LH, BH.nextPow2 = function(HH) {
      return HH += 0 === HH, --HH, HH |= HH >>> 1, HH |= HH >>> 2, HH |= HH >>> 4, HH |= HH >>> 8, (HH |= HH >>> 16) + 1
    }, BH.prevPow2 = function(HH) {
      return HH |= HH >>> 1, HH |= HH >>> 2, HH |= HH >>> 4, HH |= HH >>> 8, (HH |= HH >>> 16) - (HH >>> 1)
    }, BH.parity = function(HH) {
      return HH ^= HH >>> 16, HH ^= HH >>> 8, HH ^= HH >>> 4, 27030 >>> (HH &= 15) & 1
    };
    var AH = new Array(256);
    ! function(HH) {
      for (var BH = 0; BH < 256; ++BH) {
        var LH = BH,
          AH = BH,
          rH = 7;
        for (LH >>>= 1; LH; LH >>>= 1) AH <<= 1, AH |= 1 & LH, --rH;
        HH[BH] = AH << rH & 255
      }
    }(AH), BH.reverse = function(HH) {
      return AH[255 & HH] << 24 | AH[HH >>> 8 & 255] << 16 | AH[HH >>> 16 & 255] << 8 | AH[HH >>> 24 & 255]
    }, BH.interleave2 = function(HH, BH) {
      return (HH = 1431655765 & ((HH = 858993459 & ((HH = 252645135 & ((HH = 16711935 & ((HH &= 65535) | HH << 8)) | HH << 4)) | HH << 2)) | HH << 1)) | (BH = 1431655765 & ((BH = 858993459 & ((BH = 252645135 & ((BH = 16711935 & ((BH &= 65535) | BH << 8)) | BH << 4)) | BH << 2)) | BH << 1)) << 1
    }, BH.deinterleave2 = function(HH, BH) {
      return (HH = 65535 & ((HH = 16711935 & ((HH = 252645135 & ((HH = 858993459 & ((HH = HH >>> BH & 1431655765) | HH >>> 1)) | HH >>> 2)) | HH >>> 4)) | HH >>> 16)) << 16 >> 16
    }, BH.interleave3 = function(HH, BH, LH) {
      return HH = 1227133513 & ((HH = 3272356035 & ((HH = 251719695 & ((HH = 4278190335 & ((HH &= 1023) | HH << 16)) | HH << 8)) | HH << 4)) | HH << 2), (HH |= (BH = 1227133513 & ((BH = 3272356035 & ((BH = 251719695 & ((BH = 4278190335 & ((BH &= 1023) | BH << 16)) | BH << 8)) | BH << 4)) | BH << 2)) << 1) | (LH = 1227133513 & ((LH = 3272356035 & ((LH = 251719695 & ((LH = 4278190335 & ((LH &= 1023) | LH << 16)) | LH << 8)) | LH << 4)) | LH << 2)) << 2
    }, BH.deinterleave3 = function(HH, BH) {
      return (HH = 1023 & ((HH = 4278190335 & ((HH = 251719695 & ((HH = 3272356035 & ((HH = HH >>> BH & 1227133513) | HH >>> 2)) | HH >>> 4)) | HH >>> 8)) | HH >>> 16)) << 22 >> 22
    }, BH.nextCombination = function(HH) {
      var BH = HH | HH - 1;
      return BH + 1 | (~BH & -~BH) - 1 >>> LH(HH) + 1
    }
  },
  39153: (HH, BH, LH) => {
    HH.exports = function(HH, BH, LH) {
      switch (arguments.length) {
        case 1:
          return AH = [], CH(rH = HH, rH, EH, !0), AH;
        case 2:
          return "function" === typeof BH ? CH(HH, HH, BH, !0) : function(HH, BH) {
            return AH = [], CH(HH, BH, EH, !1), AH
          }(HH, BH);
        case 3:
          return CH(HH, BH, LH, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var rH
    };
    var AH, rH = LH(39162),
      SH = LH(39176),
      hH = LH(39189);

    function tH(HH, BH) {
      for (var LH = 0; LH < HH; ++LH)
        if (!(BH[LH] <= BH[LH + HH])) return !0;
      return !1
    }

    function zH(HH, BH, LH, AH) {
      for (var rH = 0, SH = 0, hH = 0, zH = HH.length; hH < zH; ++hH) {
        var CH = HH[hH];
        if (!tH(BH, CH)) {
          for (var EH = 0; EH < 2 * BH; ++EH) LH[rH++] = CH[EH];
          AH[SH++] = hH
        }
      }
      return SH
    }

    function CH(HH, BH, LH, AH) {
      var tH = HH.length,
        CH = BH.length;
      if (!(tH <= 0 || CH <= 0)) {
        var EH = HH[0].length >>> 1;
        if (!(EH <= 0)) {
          var XH, GH = rH.mallocDouble(2 * EH * tH),
            YH = rH.mallocInt32(tH);
          if ((tH = zH(HH, EH, GH, YH)) > 0) {
            if (1 === EH && AH) SH.init(tH), XH = SH.sweepComplete(EH, LH, 0, tH, GH, YH, 0, tH, GH, YH);
            else {
              var uH = rH.mallocDouble(2 * EH * CH),
                QH = rH.mallocInt32(CH);
              (CH = zH(BH, EH, uH, QH)) > 0 && (SH.init(tH + CH), XH = 1 === EH ? SH.sweepBipartite(EH, LH, 0, tH, GH, YH, 0, CH, uH, QH) : hH(EH, LH, AH, tH, GH, YH, CH, uH, QH), rH.free(uH), rH.free(QH))
            }
            rH.free(GH), rH.free(YH)
          }
          return XH
        }
      }
    }

    function EH(HH, BH) {
      AH.push([HH, BH])
    }
  },
  39194: (HH, BH) => {
    var LH = "d",
      AH = "ax",
      rH = "fp",
      SH = "es",
      hH = "rs",
      tH = "re",
      zH = "rb",
      CH = "bs",
      EH = "be",
      XH = "bb",
      GH = [LH, AH, "vv", hH, tH, zH, "ri", CH, EH, XH, "bi"];

    function YH(HH) {
      var BH = "bruteForce" + (HH ? "Full" : "Partial"),
        AH = [],
        hH = GH.slice();
      HH || hH.splice(3, 0, rH);
      var tH = ["function " + BH + "(" + hH.join() + "){"];

      function zH(BH, rH) {
        var hH = function(HH, BH, AH) {
          var rH = "bruteForce" + (HH ? "Red" : "Blue") + (BH ? "Flip" : "") + (AH ? "Full" : ""),
            hH = ["function ", rH, "(", GH.join(), "){", "var ", SH, "=2*", LH, ";"],
            tH = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            zH = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (AH ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return HH ? hH.push(tH, "Q", ":", zH) : hH.push(zH, "Q", ":", tH), AH ? hH.push("if(y1<x0||x1<y0)continue;") : BH ? hH.push("if(y0<=x0||x1<y0)continue;") : hH.push("if(y0<x0||x1<y0)continue;"), hH.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), BH ? hH.push("yi,xi") : hH.push("xi,yi"), hH.push(");if(rv!==void 0)return rv;}}}"), {
            name: rH,
            code: hH.join("")
          }
        }(BH, rH, HH);
        AH.push(hH.code), tH.push("return " + hH.name + "(" + GH.join() + ");")
      }
      tH.push("if(re-rs>be-bs){"), HH ? (zH(!0, !1), tH.push("}else{"), zH(!1, !1)) : (tH.push("if(fp){"), zH(!0, !0), tH.push("}else{"), zH(!0, !1), tH.push("}}else{if(fp){"), zH(!1, !0), tH.push("}else{"), zH(!1, !1), tH.push("}")), tH.push("}}return " + BH);
      var CH = AH.join("") + tH.join("");
      return new Function(CH)()
    }
    BH.partial = YH(!1), BH.full = YH(!0)
  },
  39189: (HH, BH, LH) => {
    HH.exports = function(HH, BH, LH, SH, EH, mH, oH, IH, fH) {
      ! function(HH, BH) {
        var LH = 8 * rH.log2(BH + 1) * (HH + 1) | 0,
          SH = rH.nextPow2(PH * LH);
        UH.length < SH && (AH.free(UH), UH = AH.mallocInt32(SH));
        var hH = rH.nextPow2(TH * LH);
        VH.length < hH && (AH.free(VH), VH = AH.mallocDouble(hH))
      }(HH, SH + oH);
      var lH, KH = 0,
        cH = 2 * HH;
      OH(KH++, 0, 0, SH, 0, oH, LH ? 16 : 0, -1 / 0, 1 / 0), LH || OH(KH++, 0, 0, oH, 0, SH, 1, -1 / 0, 1 / 0);
      for (; KH > 0;) {
        var eH = (KH -= 1) * PH,
          qH = UH[eH],
          gH = UH[eH + 1],
          NH = UH[eH + 2],
          RH = UH[eH + 3],
          jH = UH[eH + 4],
          nH = UH[eH + 5],
          FH = KH * TH,
          DH = VH[FH],
          wH = VH[FH + 1],
          ZH = 1 & nH,
          dH = !!(16 & nH),
          aH = EH,
          sH = mH,
          JH = IH,
          iH = fH;
        if (ZH && (aH = IH, sH = fH, JH = EH, iH = mH), !(2 & nH && gH >= (NH = WH(HH, qH, gH, NH, aH, sH, wH))) && !(4 & nH && (gH = MH(HH, qH, gH, NH, aH, sH, DH)) >= NH)) {
          var pH = NH - gH,
            yH = jH - RH;
          if (dH) {
            if (HH * pH * (pH + yH) < YH) {
              if (void 0 !== (lH = zH.scanComplete(HH, qH, BH, gH, NH, aH, sH, RH, jH, JH, iH))) return lH;
              continue
            }
          } else {
            if (HH * Math.min(pH, yH) < XH) {
              if (void 0 !== (lH = hH(HH, qH, BH, ZH, gH, NH, aH, sH, RH, jH, JH, iH))) return lH;
              continue
            }
            if (HH * pH * yH < GH) {
              if (void 0 !== (lH = zH.scanBipartite(HH, qH, BH, ZH, gH, NH, aH, sH, RH, jH, JH, iH))) return lH;
              continue
            }
          }
          var HB = uH(HH, qH, gH, NH, aH, sH, DH, wH);
          if (gH < HB)
            if (HH * (HB - gH) < XH) {
              if (void 0 !== (lH = tH(HH, qH + 1, BH, gH, HB, aH, sH, RH, jH, JH, iH))) return lH
            } else if (qH === HH - 2) {
            if (void 0 !== (lH = ZH ? zH.sweepBipartite(HH, BH, RH, jH, JH, iH, gH, HB, aH, sH) : zH.sweepBipartite(HH, BH, gH, HB, aH, sH, RH, jH, JH, iH))) return lH
          } else OH(KH++, qH + 1, gH, HB, RH, jH, ZH, -1 / 0, 1 / 0), OH(KH++, qH + 1, RH, jH, gH, HB, 1 ^ ZH, -1 / 0, 1 / 0);
          if (HB < NH) {
            var BB = CH(HH, qH, RH, jH, JH, iH),
              LB = JH[cH * BB + qH],
              AB = QH(HH, qH, BB, jH, JH, iH, LB);
            if (AB < jH && OH(KH++, qH, HB, NH, AB, jH, (4 | ZH) + (dH ? 16 : 0), LB, wH), RH < BB && OH(KH++, qH, HB, NH, RH, BB, (2 | ZH) + (dH ? 16 : 0), DH, LB), BB + 1 === AB) {
              if (void 0 !== (lH = dH ? kH(HH, qH, BH, HB, NH, aH, sH, BB, JH, iH[BB]) : bH(HH, qH, BH, ZH, HB, NH, aH, sH, BB, JH, iH[BB]))) return lH
            } else if (BB < AB) {
              var rB;
              if (dH) {
                if (HB < (rB = xH(HH, qH, HB, NH, aH, sH, LB))) {
                  var SB = QH(HH, qH, HB, rB, aH, sH, LB);
                  if (qH === HH - 2) {
                    if (HB < SB && void 0 !== (lH = zH.sweepComplete(HH, BH, HB, SB, aH, sH, BB, AB, JH, iH))) return lH;
                    if (SB < rB && void 0 !== (lH = zH.sweepBipartite(HH, BH, SB, rB, aH, sH, BB, AB, JH, iH))) return lH
                  } else HB < SB && OH(KH++, qH + 1, HB, SB, BB, AB, 16, -1 / 0, 1 / 0), SB < rB && (OH(KH++, qH + 1, SB, rB, BB, AB, 0, -1 / 0, 1 / 0), OH(KH++, qH + 1, BB, AB, SB, rB, 1, -1 / 0, 1 / 0))
                }
              } else HB < (rB = ZH ? vH(HH, qH, HB, NH, aH, sH, LB) : xH(HH, qH, HB, NH, aH, sH, LB)) && (qH === HH - 2 ? lH = ZH ? zH.sweepBipartite(HH, BH, BB, AB, JH, iH, HB, rB, aH, sH) : zH.sweepBipartite(HH, BH, HB, rB, aH, sH, BB, AB, JH, iH) : (OH(KH++, qH + 1, HB, rB, BB, AB, ZH, -1 / 0, 1 / 0), OH(KH++, qH + 1, BB, AB, HB, rB, 1 ^ ZH, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var AH = LH(39162),
      rH = LH(39167),
      SH = LH(39194),
      hH = SH.partial,
      tH = SH.full,
      zH = LH(39176),
      CH = LH(39202),
      EH = LH(39211),
      XH = 128,
      GH = 1 << 22,
      YH = 1 << 22,
      uH = EH("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      QH = EH("lo===p0", ["p0"]),
      WH = EH("lo<p0", ["p0"]),
      MH = EH("hi<=p0", ["p0"]),
      xH = EH("lo<=p0&&p0<=hi", ["p0"]),
      vH = EH("lo<p0&&p0<=hi", ["p0"]),
      PH = 6,
      TH = 2,
      UH = AH.mallocInt32(1024),
      VH = AH.mallocDouble(1024);

    function OH(HH, BH, LH, AH, rH, SH, hH, tH, zH) {
      var CH = PH * HH;
      UH[CH] = BH, UH[CH + 1] = LH, UH[CH + 2] = AH, UH[CH + 3] = rH, UH[CH + 4] = SH, UH[CH + 5] = hH;
      var EH = TH * HH;
      VH[EH] = tH, VH[EH + 1] = zH
    }

    function bH(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH, EH) {
      var XH = 2 * HH,
        GH = zH * XH,
        YH = CH[GH + BH];
      HH: for (var uH = rH, QH = rH * XH; uH < SH; ++uH, QH += XH) {
        var WH = hH[QH + BH],
          MH = hH[QH + BH + HH];
        if (!(YH < WH || MH < YH) && (!AH || YH !== WH)) {
          for (var xH, vH = tH[uH], PH = BH + 1; PH < HH; ++PH) {
            WH = hH[QH + PH], MH = hH[QH + PH + HH];
            var TH = CH[GH + PH],
              UH = CH[GH + PH + HH];
            if (MH < TH || UH < WH) continue HH
          }
          if (void 0 !== (xH = AH ? LH(EH, vH) : LH(vH, EH))) return xH
        }
      }
    }

    function kH(HH, BH, LH, AH, rH, SH, hH, tH, zH, CH) {
      var EH = 2 * HH,
        XH = tH * EH,
        GH = zH[XH + BH];
      HH: for (var YH = AH, uH = AH * EH; YH < rH; ++YH, uH += EH) {
        var QH = hH[YH];
        if (QH !== CH) {
          var WH = SH[uH + BH],
            MH = SH[uH + BH + HH];
          if (!(GH < WH || MH < GH)) {
            for (var xH = BH + 1; xH < HH; ++xH) {
              WH = SH[uH + xH], MH = SH[uH + xH + HH];
              var vH = zH[XH + xH],
                PH = zH[XH + xH + HH];
              if (MH < vH || PH < WH) continue HH
            }
            var TH = LH(QH, CH);
            if (void 0 !== TH) return TH
          }
        }
      }
    }
  },
  39202: (HH, BH, LH) => {
    HH.exports = function(HH, BH, LH, hH, tH, zH) {
      if (hH <= LH + 1) return LH;
      var CH = LH,
        EH = hH,
        XH = hH + LH >>> 1,
        GH = 2 * HH,
        YH = XH,
        uH = tH[GH * XH + BH];
      for (; CH < EH;) {
        if (EH - CH < rH) {
          SH(HH, BH, CH, EH, tH, zH), uH = tH[GH * XH + BH];
          break
        }
        var QH = EH - CH,
          WH = Math.random() * QH + CH | 0,
          MH = tH[GH * WH + BH],
          xH = Math.random() * QH + CH | 0,
          vH = tH[GH * xH + BH],
          PH = Math.random() * QH + CH | 0,
          TH = tH[GH * PH + BH];
        MH <= vH ? TH >= vH ? (YH = xH, uH = vH) : MH >= TH ? (YH = WH, uH = MH) : (YH = PH, uH = TH) : vH >= TH ? (YH = xH, uH = vH) : TH >= MH ? (YH = WH, uH = MH) : (YH = PH, uH = TH);
        for (var UH = GH * (EH - 1), VH = GH * YH, OH = 0; OH < GH; ++OH, ++UH, ++VH) {
          var bH = tH[UH];
          tH[UH] = tH[VH], tH[VH] = bH
        }
        var kH = zH[EH - 1];
        zH[EH - 1] = zH[YH], zH[YH] = kH;
        for (UH = GH * (EH - 1), VH = GH * (YH = AH(HH, BH, CH, EH - 1, tH, zH, uH)), OH = 0; OH < GH; ++OH, ++UH, ++VH) {
          bH = tH[UH];
          tH[UH] = tH[VH], tH[VH] = bH
        }
        kH = zH[EH - 1];
        if (zH[EH - 1] = zH[YH], zH[YH] = kH, XH < YH) {
          for (EH = YH - 1; CH < EH && tH[GH * (EH - 1) + BH] === uH;) EH -= 1;
          EH += 1
        } else {
          if (!(YH < XH)) break;
          for (CH = YH + 1; CH < EH && tH[GH * CH + BH] === uH;) CH += 1
        }
      }
      return AH(HH, BH, LH, XH, tH, zH, tH[GH * XH + BH])
    };
    var AH = LH(39211)("lo<p0", ["p0"]),
      rH = 8;

    function SH(HH, BH, LH, AH, rH, SH) {
      for (var hH = 2 * HH, tH = hH * (LH + 1) + BH, zH = LH + 1; zH < AH; ++zH, tH += hH)
        for (var CH = rH[tH], EH = zH, XH = hH * (zH - 1); EH > LH && rH[XH + BH] > CH; --EH, XH -= hH) {
          for (var GH = XH, YH = XH + hH, uH = 0; uH < hH; ++uH, ++GH, ++YH) {
            var QH = rH[GH];
            rH[GH] = rH[YH], rH[YH] = QH
          }
          var WH = SH[EH];
          SH[EH] = SH[EH - 1], SH[EH - 1] = WH
        }
    }
  },
  39211: HH => {
    HH.exports = function(HH, LH) {
      var AH = "abcdef".split("").concat(LH),
        rH = [];
      HH.indexOf("lo") >= 0 && rH.push("lo=e[k+n]");
      HH.indexOf("hi") >= 0 && rH.push("hi=e[k+o]");
      return AH.push(BH.replace("_", rH.join()).replace("$", HH)), Function.apply(void 0, AH)
    };
    var BH = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  39185: HH => {
    HH.exports = function(HH, AH) {
      AH <= 4 * BH ? LH(0, AH - 1, HH) : CH(0, AH - 1, HH)
    };
    var BH = 32;

    function LH(HH, BH, LH) {
      for (var AH = 2 * (HH + 1), rH = HH + 1; rH <= BH; ++rH) {
        for (var SH = LH[AH++], hH = LH[AH++], tH = rH, zH = AH - 2; tH-- > HH;) {
          var CH = LH[zH - 2],
            EH = LH[zH - 1];
          if (CH < SH) break;
          if (CH === SH && EH < hH) break;
          LH[zH] = CH, LH[zH + 1] = EH, zH -= 2
        }
        LH[zH] = SH, LH[zH + 1] = hH
      }
    }

    function AH(HH, BH, LH) {
      BH *= 2;
      var AH = LH[HH *= 2],
        rH = LH[HH + 1];
      LH[HH] = LH[BH], LH[HH + 1] = LH[BH + 1], LH[BH] = AH, LH[BH + 1] = rH
    }

    function rH(HH, BH, LH) {
      BH *= 2, LH[HH *= 2] = LH[BH], LH[HH + 1] = LH[BH + 1]
    }

    function SH(HH, BH, LH, AH) {
      BH *= 2, LH *= 2;
      var rH = AH[HH *= 2],
        SH = AH[HH + 1];
      AH[HH] = AH[BH], AH[HH + 1] = AH[BH + 1], AH[BH] = AH[LH], AH[BH + 1] = AH[LH + 1], AH[LH] = rH, AH[LH + 1] = SH
    }

    function hH(HH, BH, LH, AH, rH) {
      BH *= 2, rH[HH *= 2] = rH[BH], rH[BH] = LH, rH[HH + 1] = rH[BH + 1], rH[BH + 1] = AH
    }

    function tH(HH, BH, LH) {
      BH *= 2;
      var AH = LH[HH *= 2],
        rH = LH[BH];
      return !(AH < rH) && (AH !== rH || LH[HH + 1] > LH[BH + 1])
    }

    function zH(HH, BH, LH, AH) {
      var rH = AH[HH *= 2];
      return rH < BH || rH === BH && AH[HH + 1] < LH
    }

    function CH(HH, EH, XH) {
      var GH = (EH - HH + 1) / 6 | 0,
        YH = HH + GH,
        uH = EH - GH,
        QH = HH + EH >> 1,
        WH = QH - GH,
        MH = QH + GH,
        xH = YH,
        vH = WH,
        PH = QH,
        TH = MH,
        UH = uH,
        VH = HH + 1,
        OH = EH - 1,
        bH = 0;
      tH(xH, vH, XH) && (bH = xH, xH = vH, vH = bH), tH(TH, UH, XH) && (bH = TH, TH = UH, UH = bH), tH(xH, PH, XH) && (bH = xH, xH = PH, PH = bH), tH(vH, PH, XH) && (bH = vH, vH = PH, PH = bH), tH(xH, TH, XH) && (bH = xH, xH = TH, TH = bH), tH(PH, TH, XH) && (bH = PH, PH = TH, TH = bH), tH(vH, UH, XH) && (bH = vH, vH = UH, UH = bH), tH(vH, PH, XH) && (bH = vH, vH = PH, PH = bH), tH(TH, UH, XH) && (bH = TH, TH = UH, UH = bH);
      for (var kH = XH[2 * vH], mH = XH[2 * vH + 1], oH = XH[2 * TH], IH = XH[2 * TH + 1], fH = 2 * xH, lH = 2 * PH, KH = 2 * UH, cH = 2 * YH, eH = 2 * QH, qH = 2 * uH, gH = 0; gH < 2; ++gH) {
        var NH = XH[fH + gH],
          RH = XH[lH + gH],
          jH = XH[KH + gH];
        XH[cH + gH] = NH, XH[eH + gH] = RH, XH[qH + gH] = jH
      }
      rH(WH, HH, XH), rH(MH, EH, XH);
      for (var nH = VH; nH <= OH; ++nH)
        if (zH(nH, kH, mH, XH)) nH !== VH && AH(nH, VH, XH), ++VH;
        else if (!zH(nH, oH, IH, XH))
        for (;;) {
          if (zH(OH, oH, IH, XH)) {
            zH(OH, kH, mH, XH) ? (SH(nH, VH, OH, XH), ++VH, --OH) : (AH(nH, OH, XH), --OH);
            break
          }
          if (--OH < nH) break
        }
      hH(HH, VH - 1, kH, mH, XH), hH(EH, OH + 1, oH, IH, XH), VH - 2 - HH <= BH ? LH(HH, VH - 2, XH) : CH(HH, VH - 2, XH), EH - (OH + 2) <= BH ? LH(OH + 2, EH, XH) : CH(OH + 2, EH, XH), OH - VH <= BH ? LH(VH, OH, XH) : CH(VH, OH, XH)
    }
  },
  39176: (HH, BH, LH) => {
    HH.exports = {
      init: function(HH) {
        var BH = rH.nextPow2(HH);
        zH.length < BH && (AH.free(zH), zH = AH.mallocInt32(BH));
        CH.length < BH && (AH.free(CH), CH = AH.mallocInt32(BH));
        EH.length < BH && (AH.free(EH), EH = AH.mallocInt32(BH));
        XH.length < BH && (AH.free(XH), XH = AH.mallocInt32(BH));
        GH.length < BH && (AH.free(GH), GH = AH.mallocInt32(BH));
        YH.length < BH && (AH.free(YH), YH = AH.mallocInt32(BH));
        var LH = 8 * BH;
        uH.length < LH && (AH.free(uH), uH = AH.mallocDouble(LH))
      },
      sweepBipartite: function(HH, BH, LH, AH, rH, tH, GH, YH, MH, xH) {
        for (var vH = 0, PH = 2 * HH, TH = HH - 1, UH = PH - 1, VH = LH; VH < AH; ++VH) {
          var OH = tH[VH],
            bH = PH * VH;
          uH[vH++] = rH[bH + TH], uH[vH++] = -(OH + 1), uH[vH++] = rH[bH + UH], uH[vH++] = OH
        }
        for (VH = GH; VH < YH; ++VH) {
          OH = xH[VH] + hH;
          var kH = PH * VH;
          uH[vH++] = MH[kH + TH], uH[vH++] = -OH, uH[vH++] = MH[kH + UH], uH[vH++] = OH
        }
        var mH = vH >>> 1;
        SH(uH, mH);
        var oH = 0,
          IH = 0;
        for (VH = 0; VH < mH; ++VH) {
          var fH = 0 | uH[2 * VH + 1];
          if (fH >= hH) QH(EH, XH, IH--, fH = fH - hH | 0);
          else if (fH >= 0) QH(zH, CH, oH--, fH);
          else if (fH <= -hH) {
            fH = -fH - hH | 0;
            for (var lH = 0; lH < oH; ++lH) {
              if (void 0 !== (KH = BH(zH[lH], fH))) return KH
            }
            WH(EH, XH, IH++, fH)
          } else {
            fH = -fH - 1 | 0;
            for (lH = 0; lH < IH; ++lH) {
              var KH;
              if (void 0 !== (KH = BH(fH, EH[lH]))) return KH
            }
            WH(zH, CH, oH++, fH)
          }
        }
      },
      sweepComplete: function(HH, BH, LH, AH, rH, hH, tH, MH, xH, vH) {
        for (var PH = 0, TH = 2 * HH, UH = HH - 1, VH = TH - 1, OH = LH; OH < AH; ++OH) {
          var bH = hH[OH] + 1 << 1,
            kH = TH * OH;
          uH[PH++] = rH[kH + UH], uH[PH++] = -bH, uH[PH++] = rH[kH + VH], uH[PH++] = bH
        }
        for (OH = tH; OH < MH; ++OH) {
          bH = vH[OH] + 1 << 1;
          var mH = TH * OH;
          uH[PH++] = xH[mH + UH], uH[PH++] = 1 | -bH, uH[PH++] = xH[mH + VH], uH[PH++] = 1 | bH
        }
        var oH = PH >>> 1;
        SH(uH, oH);
        var IH = 0,
          fH = 0,
          lH = 0;
        for (OH = 0; OH < oH; ++OH) {
          var KH = 0 | uH[2 * OH + 1],
            cH = 1 & KH;
          if (OH < oH - 1 && KH >> 1 === uH[2 * OH + 3] >> 1 && (cH = 2, OH += 1), KH < 0) {
            for (var eH = -(KH >> 1) - 1, qH = 0; qH < lH; ++qH) {
              if (void 0 !== (gH = BH(GH[qH], eH))) return gH
            }
            if (0 !== cH)
              for (qH = 0; qH < IH; ++qH) {
                if (void 0 !== (gH = BH(zH[qH], eH))) return gH
              }
            if (1 !== cH)
              for (qH = 0; qH < fH; ++qH) {
                var gH;
                if (void 0 !== (gH = BH(EH[qH], eH))) return gH
              }
            0 === cH ? WH(zH, CH, IH++, eH) : 1 === cH ? WH(EH, XH, fH++, eH) : 2 === cH && WH(GH, YH, lH++, eH)
          } else {
            eH = (KH >> 1) - 1;
            0 === cH ? QH(zH, CH, IH--, eH) : 1 === cH ? QH(EH, XH, fH--, eH) : 2 === cH && QH(GH, YH, lH--, eH)
          }
        }
      },
      scanBipartite: function(HH, BH, LH, AH, rH, tH, EH, XH, GH, YH, MH, xH) {
        var vH = 0,
          PH = 2 * HH,
          TH = BH,
          UH = BH + HH,
          VH = 1,
          OH = 1;
        AH ? OH = hH : VH = hH;
        for (var bH = rH; bH < tH; ++bH) {
          var kH = bH + VH,
            mH = PH * bH;
          uH[vH++] = EH[mH + TH], uH[vH++] = -kH, uH[vH++] = EH[mH + UH], uH[vH++] = kH
        }
        for (bH = GH; bH < YH; ++bH) {
          kH = bH + OH;
          var oH = PH * bH;
          uH[vH++] = MH[oH + TH], uH[vH++] = -kH
        }
        var IH = vH >>> 1;
        SH(uH, IH);
        var fH = 0;
        for (bH = 0; bH < IH; ++bH) {
          var lH = 0 | uH[2 * bH + 1];
          if (lH < 0) {
            var KH = !1;
            if ((kH = -lH) >= hH ? (KH = !AH, kH -= hH) : (KH = !!AH, kH -= 1), KH) WH(zH, CH, fH++, kH);
            else {
              var cH = xH[kH],
                eH = PH * kH,
                qH = MH[eH + BH + 1],
                gH = MH[eH + BH + 1 + HH];
              HH: for (var NH = 0; NH < fH; ++NH) {
                var RH = zH[NH],
                  jH = PH * RH;
                if (!(gH < EH[jH + BH + 1] || EH[jH + BH + 1 + HH] < qH)) {
                  for (var nH = BH + 2; nH < HH; ++nH)
                    if (MH[eH + nH + HH] < EH[jH + nH] || EH[jH + nH + HH] < MH[eH + nH]) continue HH;
                  var FH, DH = XH[RH];
                  if (void 0 !== (FH = AH ? LH(cH, DH) : LH(DH, cH))) return FH
                }
              }
            }
          } else QH(zH, CH, fH--, lH - VH)
        }
      },
      scanComplete: function(HH, BH, LH, AH, rH, tH, CH, EH, XH, GH, YH) {
        for (var QH = 0, WH = 2 * HH, MH = BH, xH = BH + HH, vH = AH; vH < rH; ++vH) {
          var PH = vH + hH,
            TH = WH * vH;
          uH[QH++] = tH[TH + MH], uH[QH++] = -PH, uH[QH++] = tH[TH + xH], uH[QH++] = PH
        }
        for (vH = EH; vH < XH; ++vH) {
          PH = vH + 1;
          var UH = WH * vH;
          uH[QH++] = GH[UH + MH], uH[QH++] = -PH
        }
        var VH = QH >>> 1;
        SH(uH, VH);
        var OH = 0;
        for (vH = 0; vH < VH; ++vH) {
          var bH = 0 | uH[2 * vH + 1];
          if (bH < 0) {
            if ((PH = -bH) >= hH) zH[OH++] = PH - hH;
            else {
              var kH = YH[PH -= 1],
                mH = WH * PH,
                oH = GH[mH + BH + 1],
                IH = GH[mH + BH + 1 + HH];
              HH: for (var fH = 0; fH < OH; ++fH) {
                var lH = zH[fH],
                  KH = CH[lH];
                if (KH === kH) break;
                var cH = WH * lH;
                if (!(IH < tH[cH + BH + 1] || tH[cH + BH + 1 + HH] < oH)) {
                  for (var eH = BH + 2; eH < HH; ++eH)
                    if (GH[mH + eH + HH] < tH[cH + eH] || tH[cH + eH + HH] < GH[mH + eH]) continue HH;
                  var qH = LH(KH, kH);
                  if (void 0 !== qH) return qH
                }
              }
            }
          } else {
            for (PH = bH - hH, fH = OH - 1; fH >= 0; --fH)
              if (zH[fH] === PH) {
                for (eH = fH + 1; eH < OH; ++eH) zH[eH - 1] = zH[eH];
                break
              }-- OH
          }
        }
      }
    };
    var AH = LH(39162),
      rH = LH(39167),
      SH = LH(39185),
      hH = 1 << 28,
      tH = 1024,
      zH = AH.mallocInt32(tH),
      CH = AH.mallocInt32(tH),
      EH = AH.mallocInt32(tH),
      XH = AH.mallocInt32(tH),
      GH = AH.mallocInt32(tH),
      YH = AH.mallocInt32(tH),
      uH = AH.mallocDouble(8192);

    function QH(HH, BH, LH, AH) {
      var rH = BH[AH],
        SH = HH[LH - 1];
      HH[rH] = SH, BH[SH] = rH
    }

    function WH(HH, BH, LH, AH) {
      HH[LH] = AH, BH[AH] = LH
    }
  },
  39171: HH => {
    function BH(HH, LH, AH) {
      var rH = 0 | HH[AH];
      if (rH <= 0) return [];
      var SH, hH = new Array(rH);
      if (AH === HH.length - 1)
        for (SH = 0; SH < rH; ++SH) hH[SH] = LH;
      else
        for (SH = 0; SH < rH; ++SH) hH[SH] = BH(HH, LH, AH + 1);
      return hH
    }
    HH.exports = function(HH, LH) {
      switch ("undefined" === typeof LH && (LH = 0), typeof HH) {
        case "number":
          if (HH > 0) return function(HH, BH) {
            var LH, AH;
            for (LH = new Array(HH), AH = 0; AH < HH; ++AH) LH[AH] = BH;
            return LH
          }(0 | HH, LH);
          break;
        case "object":
          if ("number" === typeof HH.length) return BH(HH, LH, 0)
      }
      return []
    }
  },
  39119: (HH, BH, LH) => {
    HH.exports = function() {
      var HH = this;
      this.components = {}, this.comps = this.components;
      var BH = this.components,
        LH = 1,
        rH = {},
        SH = [],
        hH = [],
        tH = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function zH(HH, LH) {
        var AH = BH[LH],
          SH = rH[LH],
          hH = SH.hash[HH];
        hH && (SH.remove(HH), AH.bq && (AH.multi ? (hH.forEach((BH => {
          BH && AH.bq(HH, BH)
        })), hH.length = 0) : AH.bq(HH, hH)), tH.removals.push(SH), CH())
      }

      function CH() {
        tH.timeout || (tH.timeout = !0, setTimeout(EH, 1))
      }

      function EH() {
        tH.timeout = !1, XH()
      }

      function XH() {
        tH.multiComps.length && function(HH) {
          for (var BH = 0; BH < HH.length; BH++) {
            var {
              entID: LH,
              data: AH
            } = HH[BH], rH = AH.hash[LH];
            if (rH) {
              for (var SH = 0; SH < rH.length; SH++) rH[SH] || (rH.splice(SH, 1), SH--);
              0 === rH.length && (AH.remove(LH), tH.removals.push(AH))
            }
          }
          HH.length = 0
        }(tH.multiComps), tH.removals.length && function(HH) {
          for (var BH = 0; BH < HH.length; BH++) {
            HH[BH].flush()
          }
          HH.length = 0
        }(tH.removals)
      }
      this.WQ = rH, this._systems = SH, this._renderSystems = hH, this.Q0 = function(BH) {
        var AH = LH++;
        return Array.isArray(BH) && BH.forEach((BH => HH.yR(AH, BH))), AH
      }, this.deleteEntity = function(BH) {
        return Object.keys(rH).forEach((HH => {
          rH[HH].hash[BH] && zH(BH, HH)
        })), HH
      }, this.JLH = function(HH) {
        if (!HH) throw new Error("Missing component definition");
        var LH = HH.name;
        if (!LH) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof LH) throw new Error("Component name must be a string.");
        if ("" === LH) throw new Error("Component name must be a non-empty string.");
        if (rH[LH]) throw new Error(`Component ${LH} already exists.`);
        var tH = {};
        return tH.name = LH, tH.multi = !!HH.multi, tH.order = isNaN(HH.order) ? 99 : HH.order, tH.stateConstructor = HH.stateConstructor || null, tH.state = HH.state || {}, tH.aT = HH.aT || null, tH.bq = HH.bq || null, tH.system = HH.system || null, tH.rU = HH.rU || null, BH[LH] = tH, rH[LH] = new AH, rH[LH]._pendingMultiCleanup = !1, rH[LH]._multiCleanupIDs = tH.multi ? [] : null, tH.system && (SH.push(LH), SH.sort(((HH, LH) => BH[HH].order - BH[LH].order))), tH.rU && (hH.push(LH), hH.sort(((HH, LH) => BH[HH].order - BH[LH].order))), LH
      }, this.overwriteComponent = function(HH, LH) {
        var AH = BH[HH];
        if (!AH) throw new Error(`Unknown component: ${HH}`);
        if (!LH) throw new Error("Missing component definition");
        if (AH.name !== LH.name) throw new Error("Overwriting component must use the same name property.");
        var tH = {};
        tH.name = HH, tH.multi = !!LH.multi, tH.order = isNaN(LH.order) ? 99 : LH.order, tH.state = LH.state || {}, tH.aT = LH.aT || null, tH.bq = LH.bq || null, tH.system = LH.system || null, tH.rU = LH.rU || null, BH[HH] = tH, rH[HH]._pendingMultiCleanup = !1, rH[HH]._multiCleanupIDs = tH.multi ? [] : null;
        var zH = SH.indexOf(HH);
        tH.system && zH < 0 && SH.push(HH), !tH.system && zH >= 0 && SH.splice(zH, 1), SH.sort(((HH, LH) => BH[HH].order - BH[LH].order));
        var CH = hH.indexOf(HH);
        tH.rU && CH < 0 && hH.push(HH), !tH.rU && CH >= 0 && hH.splice(CH, 1), hH.sort(((HH, LH) => BH[HH].order - BH[LH].order));
        var EH = tH.state;
        return this.JR(HH).forEach((HH => {
          for (var BH in EH) BH in HH || (HH[BH] = EH[BH]);
          tH.aT && tH.aT(HH.pR, HH)
        })), HH
      }, this.deleteComponent = function(LH) {
        var AH = rH[LH];
        if (!AH) throw new Error(`Unknown component: ${LH}`);
        AH.flush(), AH.list.forEach((HH => {
          HH && zH(HH.pR || HH[0].pR, LH)
        }));
        var tH = SH.indexOf(LH),
          CH = hH.indexOf(LH);
        return tH > -1 && SH.splice(tH, 1), CH > -1 && hH.splice(CH, 1), rH[LH].dispose(), delete rH[LH], delete BH[LH], HH
      }, this.yR = function(HH, LH, AH) {
        var SH, hH = BH[LH],
          tH = rH[LH];
        if (!tH) throw new Error(`Unknown component: ${LH}.`);
        if (tH.hash[HH] && !hH.multi) throw new Error(`Entity ${HH} already has component: ${LH}.`);
        if (hH.stateConstructor) {
          if (!(SH = new hH.stateConstructor).hasOwnProperty("pR")) throw new Error(`Component ${hH.name} stateConstructor type does not have property __id`);
          Object.assign(SH, hH.state, AH)
        } else SH = {
          pR: HH,
          ...hH.state,
          ...AH
        };
        if (SH.pR = HH, hH.multi) {
          var zH = tH.hash[HH];
          zH || (zH = [], tH.add(HH, zH)), zH.push(SH)
        } else tH.add(HH, SH);
        return hH.aT && hH.aT(HH, SH), this
      }, this.aBH = function(HH, BH) {
        var LH = rH[BH];
        if (!LH) throw new Error(`Unknown component: ${BH}.`);
        return !!LH.hash[HH]
      }, this.fn = function(BH, LH) {
        if (!rH[LH]) throw new Error(`Unknown component: ${LH}.`);
        return zH(BH, LH), HH
      }, this.getState = function(HH, BH) {
        var LH = rH[BH];
        if (!LH) throw new Error(`Unknown component: ${BH}.`);
        return LH.hash[HH]
      }, this.JR = function(HH) {
        var BH = rH[HH];
        if (!BH) throw new Error(`Unknown component: ${HH}.`);
        return XH(), BH.list
      }, this.oLH = function(HH) {
        if (!rH[HH]) throw new Error(`Unknown component: ${HH}.`);
        var BH = rH[HH].hash;
        return HH => BH[HH]
      }, this.eLH = function(HH) {
        if (!rH[HH]) throw new Error(`Unknown component: ${HH}.`);
        var BH = rH[HH].hash;
        return HH => !!BH[HH]
      }, this.IX = function(LH) {
        XH();
        for (var AH = 0; AH < SH.length; AH++) {
          var hH = SH[AH],
            tH = BH[hH],
            zH = rH[hH];
          tH.system(LH, zH.list), XH()
        }
        return HH
      }, this.render = function(LH) {
        XH();
        for (var AH = 0; AH < hH.length; AH++) {
          var SH = hH[AH],
            tH = BH[SH],
            zH = rH[SH];
          tH.rU(LH, zH.list), XH()
        }
        return HH
      }, this.removeMultiComponent = function(LH, AH, SH) {
        var hH = BH[AH],
          zH = rH[AH];
        if (!zH) throw new Error(`Unknown component: ${AH}.`);
        if (!hH.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(HH, BH, LH, AH) {
          var rH = LH.hash[HH];
          if (rH) {
            var SH = rH[AH];
            SH && (rH[AH] = null, BH.bq && BH.bq(HH, SH), tH.multiComps.push({
              entID: HH,
              data: LH
            }), CH())
          }
        }(LH, hH, zH, SH), HH
      }
    };
    var AH = LH(39127)
  },
  39127: HH => {
    function BH(HH, BH) {
      var LH = HH._map[BH];
      if (delete HH.hash[BH], delete HH._map[BH], LH === HH.list.length - 1) HH.list.pop(), HH._idList.pop();
      else {
        var AH = HH.list.pop();
        HH.list[LH] = AH;
        var rH = HH._idList.pop();
        HH._idList[LH] = rH, HH._map[rH] = LH
      }
    }
    HH.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(HH, BH) {
        if ("number" === typeof this._map[HH]) {
          var LH = this._map[HH];
          this.hash[HH] = BH, this.list[LH] = BH, this._idList[LH] = HH
        } else this._map[HH] = this.list.length, this.hash[HH] = BH, this.list.push(BH), this._idList.push(HH)
      }
      remove(HH) {
        var BH = this._map[HH];
        this.hash[HH] = null, this.list[BH] = null, this._pendingRemovals.push(HH)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var HH = 0; HH < this._pendingRemovals.length; HH++) {
          var LH = this._pendingRemovals[HH];
          null === this.hash[LH] && BH(this, LH)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  38921: (HH, BH, LH) => {
    HH = LH.nmd(HH);
    var AH = "__lodash_hash_undefined__",
      rH = 9007199254740991,
      SH = "[object Arguments]",
      hH = "[object Boolean]",
      tH = "[object Date]",
      zH = "[object Function]",
      CH = "[object GeneratorFunction]",
      EH = "[object Map]",
      XH = "[object Number]",
      GH = "[object Object]",
      YH = "[object Promise]",
      uH = "[object RegExp]",
      QH = "[object Set]",
      WH = "[object String]",
      MH = "[object Symbol]",
      xH = "[object WeakMap]",
      vH = "[object ArrayBuffer]",
      PH = "[object DataView]",
      TH = "[object Float32Array]",
      UH = "[object Float64Array]",
      VH = "[object Int8Array]",
      OH = "[object Int16Array]",
      bH = "[object Int32Array]",
      kH = "[object Uint8Array]",
      mH = "[object Uint8ClampedArray]",
      oH = "[object Uint16Array]",
      IH = "[object Uint32Array]",
      fH = /\w*$/,
      lH = /^\[object .+?Constructor\]$/,
      KH = /^(?:0|[1-9]\d*)$/,
      cH = {};
    cH[SH] = cH["[object Array]"] = cH[vH] = cH[PH] = cH[hH] = cH[tH] = cH[TH] = cH[UH] = cH[VH] = cH[OH] = cH[bH] = cH[EH] = cH[XH] = cH[GH] = cH[uH] = cH[QH] = cH[WH] = cH[MH] = cH[kH] = cH[mH] = cH[oH] = cH[IH] = !0, cH["[object Error]"] = cH[zH] = cH[xH] = !1;
    var eH = "object" == typeof LH.g && LH.g && LH.g.Object === Object && LH.g,
      qH = "object" == typeof self && self && self.Object === Object && self,
      gH = eH || qH || Function("return this")(),
      NH = BH && !BH.nodeType && BH,
      RH = NH && HH && !HH.nodeType && HH,
      jH = RH && RH.exports === NH;

    function nH(HH, BH) {
      return HH.set(BH[0], BH[1]), HH
    }

    function FH(HH, BH) {
      return HH.add(BH), HH
    }

    function DH(HH, BH, LH, AH) {
      var rH = -1,
        SH = HH ? HH.length : 0;
      for (AH && SH && (LH = HH[++rH]); ++rH < SH;) LH = BH(LH, HH[rH], rH, HH);
      return LH
    }

    function wH(HH) {
      var BH = !1;
      if (null != HH && "function" != typeof HH.toString) try {
        BH = !!(HH + "")
      } catch (LH) {}
      return BH
    }

    function ZH(HH) {
      var BH = -1,
        LH = Array(HH.size);
      return HH.forEach((function(HH, AH) {
        LH[++BH] = [AH, HH]
      })), LH
    }

    function dH(HH, BH) {
      return function(LH) {
        return HH(BH(LH))
      }
    }

    function aH(HH) {
      var BH = -1,
        LH = Array(HH.size);
      return HH.forEach((function(HH) {
        LH[++BH] = HH
      })), LH
    }
    var sH = Array.prototype,
      JH = Function.prototype,
      iH = Object.prototype,
      pH = gH["__core-js_shared__"],
      yH = function() {
        var HH = /[^.]+$/.exec(pH && pH.keys && pH.keys.IE_PROTO || "");
        return HH ? "Symbol(src)_1." + HH : ""
      }(),
      HB = JH.toString,
      BB = iH.hasOwnProperty,
      LB = iH.toString,
      AB = RegExp("^" + HB.call(BB).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      rB = jH ? gH.rX : void 0,
      SB = gH.Symbol,
      hB = gH.Uint8Array,
      tB = dH(Object.getPrototypeOf, Object),
      zB = Object.create,
      CB = iH.propertyIsEnumerable,
      EB = sH.splice,
      XB = Object.getOwnPropertySymbols,
      GB = rB ? rB.isBuffer : void 0,
      YB = dH(Object.keys, Object),
      uB = jB(gH, "DataView"),
      QB = jB(gH, "Map"),
      WB = jB(gH, "Promise"),
      MB = jB(gH, "Set"),
      xB = jB(gH, "WeakMap"),
      vB = jB(Object, "create"),
      PB = ZB(uB),
      TB = ZB(QB),
      UB = ZB(WB),
      VB = ZB(MB),
      OB = ZB(xB),
      bB = SB ? SB.prototype : void 0,
      kB = bB ? bB.valueOf : void 0;

    function mB(HH) {
      var BH = -1,
        LH = HH ? HH.length : 0;
      for (this.clear(); ++BH < LH;) {
        var AH = HH[BH];
        this.set(AH[0], AH[1])
      }
    }

    function oB(HH) {
      var BH = -1,
        LH = HH ? HH.length : 0;
      for (this.clear(); ++BH < LH;) {
        var AH = HH[BH];
        this.set(AH[0], AH[1])
      }
    }

    function IB(HH) {
      var BH = -1,
        LH = HH ? HH.length : 0;
      for (this.clear(); ++BH < LH;) {
        var AH = HH[BH];
        this.set(AH[0], AH[1])
      }
    }

    function fB(HH) {
      this.__data__ = new oB(HH)
    }

    function lB(HH, BH) {
      var LH = aB(HH) || function(HH) {
          return function(HH) {
            return function(HH) {
              return !!HH && "object" == typeof HH
            }(HH) && sB(HH)
          }(HH) && BB.call(HH, "callee") && (!CB.call(HH, "callee") || LB.call(HH) == SH)
        }(HH) ? function(HH, BH) {
          for (var LH = -1, AH = Array(HH); ++LH < HH;) AH[LH] = BH(LH);
          return AH
        }(HH.length, String) : [],
        AH = LH.length,
        rH = !!AH;
      for (var hH in HH) !BH && !BB.call(HH, hH) || rH && ("length" == hH || DB(hH, AH)) || LH.push(hH);
      return LH
    }

    function KB(HH, BH, LH) {
      var AH = HH[BH];
      BB.call(HH, BH) && dB(AH, LH) && (void 0 !== LH || BH in HH) || (HH[BH] = LH)
    }

    function cB(HH, BH) {
      for (var LH = HH.length; LH--;)
        if (dB(HH[LH][0], BH)) return LH;
      return -1
    }

    function eB(HH, BH, LH, AH, rH, YH, xH) {
      var lH;
      if (AH && (lH = YH ? AH(HH, rH, YH, xH) : AH(HH)), void 0 !== lH) return lH;
      if (!pB(HH)) return HH;
      var KH = aB(HH);
      if (KH) {
        if (lH = function(HH) {
            var BH = HH.length,
              LH = HH.constructor(BH);
            BH && "string" == typeof HH[0] && BB.call(HH, "index") && (LH.index = HH.index, LH.input = HH.input);
            return LH
          }(HH), !BH) return function(HH, BH) {
          var LH = -1,
            AH = HH.length;
          BH || (BH = Array(AH));
          for (; ++LH < AH;) BH[LH] = HH[LH];
          return BH
        }(HH, lH)
      } else {
        var eH = FB(HH),
          qH = eH == zH || eH == CH;
        if (JB(HH)) return function(HH, BH) {
          if (BH) return HH.slice();
          var LH = new HH.constructor(HH.length);
          return HH.copy(LH), LH
        }(HH, BH);
        if (eH == GH || eH == SH || qH && !YH) {
          if (wH(HH)) return YH ? HH : {};
          if (lH = function(HH) {
              return "function" != typeof HH.constructor || wB(HH) ? {} : (BH = tB(HH), pB(BH) ? zB(BH) : {});
              var BH
            }(qH ? {} : HH), !BH) return function(HH, BH) {
            return NB(HH, nB(HH), BH)
          }(HH, function(HH, BH) {
            return HH && NB(BH, yB(BH), HH)
          }(lH, HH))
        } else {
          if (!cH[eH]) return YH ? HH : {};
          lH = function(HH, BH, LH, AH) {
            var rH = HH.constructor;
            switch (BH) {
              case vH:
                return gB(HH);
              case hH:
              case tH:
                return new rH(+HH);
              case PH:
                return function(HH, BH) {
                  var LH = BH ? gB(HH.buffer) : HH.buffer;
                  return new HH.constructor(LH, HH.byteOffset, HH.byteLength)
                }(HH, AH);
              case TH:
              case UH:
              case VH:
              case OH:
              case bH:
              case kH:
              case mH:
              case oH:
              case IH:
                return function(HH, BH) {
                  var LH = BH ? gB(HH.buffer) : HH.buffer;
                  return new HH.constructor(LH, HH.byteOffset, HH.length)
                }(HH, AH);
              case EH:
                return function(HH, BH, LH) {
                  var AH = BH ? LH(ZH(HH), !0) : ZH(HH);
                  return DH(AH, nH, new HH.constructor)
                }(HH, AH, LH);
              case XH:
              case WH:
                return new rH(HH);
              case uH:
                return function(HH) {
                  var BH = new HH.constructor(HH.source, fH.exec(HH));
                  return BH.lastIndex = HH.lastIndex, BH
                }(HH);
              case QH:
                return function(HH, BH, LH) {
                  var AH = BH ? LH(aH(HH), !0) : aH(HH);
                  return DH(AH, FH, new HH.constructor)
                }(HH, AH, LH);
              case MH:
                return SH = HH, kB ? Object(kB.call(SH)) : {}
            }
            var SH
          }(HH, eH, eB, BH)
        }
      }
      xH || (xH = new fB);
      var gH = xH.get(HH);
      if (gH) return gH;
      if (xH.set(HH, lH), !KH) var NH = LH ? function(HH) {
        return function(HH, BH, LH) {
          var AH = BH(HH);
          return aB(HH) ? AH : function(HH, BH) {
            for (var LH = -1, AH = BH.length, rH = HH.length; ++LH < AH;) HH[rH + LH] = BH[LH];
            return HH
          }(AH, LH(HH))
        }(HH, yB, nB)
      }(HH) : yB(HH);
      return function(HH, BH) {
        for (var LH = -1, AH = HH ? HH.length : 0; ++LH < AH && !1 !== BH(HH[LH], LH, HH););
      }(NH || HH, (function(rH, SH) {
        NH && (rH = HH[SH = rH]), KB(lH, SH, eB(rH, BH, LH, AH, SH, HH, xH))
      })), lH
    }

    function qB(HH) {
      return !(!pB(HH) || (BH = HH, yH && yH in BH)) && (iB(HH) || wH(HH) ? AB : lH).test(ZB(HH));
      var BH
    }

    function gB(HH) {
      var BH = new HH.constructor(HH.byteLength);
      return new hB(BH).set(new hB(HH)), BH
    }

    function NB(HH, BH, LH, AH) {
      LH || (LH = {});
      for (var rH = -1, SH = BH.length; ++rH < SH;) {
        var hH = BH[rH],
          tH = AH ? AH(LH[hH], HH[hH], hH, LH, HH) : void 0;
        KB(LH, hH, void 0 === tH ? HH[hH] : tH)
      }
      return LH
    }

    function RB(HH, BH) {
      var LH = HH.__data__;
      return function(HH) {
        var BH = typeof HH;
        return "string" == BH || "number" == BH || "symbol" == BH || "boolean" == BH ? "__proto__" !== HH : null === HH
      }(BH) ? LH["string" == typeof BH ? "string" : "hash"] : LH.map
    }

    function jB(HH, BH) {
      var LH = function(HH, BH) {
        return null == HH ? void 0 : HH[BH]
      }(HH, BH);
      return qB(LH) ? LH : void 0
    }
    mB.prototype.clear = function() {
      this.__data__ = vB ? vB(null) : {}
    }, mB.prototype.delete = function(HH) {
      return this.has(HH) && delete this.__data__[HH]
    }, mB.prototype.get = function(HH) {
      var BH = this.__data__;
      if (vB) {
        var LH = BH[HH];
        return LH === AH ? void 0 : LH
      }
      return BB.call(BH, HH) ? BH[HH] : void 0
    }, mB.prototype.has = function(HH) {
      var BH = this.__data__;
      return vB ? void 0 !== BH[HH] : BB.call(BH, HH)
    }, mB.prototype.set = function(HH, BH) {
      return this.__data__[HH] = vB && void 0 === BH ? AH : BH, this
    }, oB.prototype.clear = function() {
      this.__data__ = []
    }, oB.prototype.delete = function(HH) {
      var BH = this.__data__,
        LH = cB(BH, HH);
      return !(LH < 0) && (LH == BH.length - 1 ? BH.pop() : EB.call(BH, LH, 1), !0)
    }, oB.prototype.get = function(HH) {
      var BH = this.__data__,
        LH = cB(BH, HH);
      return LH < 0 ? void 0 : BH[LH][1]
    }, oB.prototype.has = function(HH) {
      return cB(this.__data__, HH) > -1
    }, oB.prototype.set = function(HH, BH) {
      var LH = this.__data__,
        AH = cB(LH, HH);
      return AH < 0 ? LH.push([HH, BH]) : LH[AH][1] = BH, this
    }, IB.prototype.clear = function() {
      this.__data__ = {
        hash: new mB,
        map: new(QB || oB),
        string: new mB
      }
    }, IB.prototype.delete = function(HH) {
      return RB(this, HH).delete(HH)
    }, IB.prototype.get = function(HH) {
      return RB(this, HH).get(HH)
    }, IB.prototype.has = function(HH) {
      return RB(this, HH).has(HH)
    }, IB.prototype.set = function(HH, BH) {
      return RB(this, HH).set(HH, BH), this
    }, fB.prototype.clear = function() {
      this.__data__ = new oB
    }, fB.prototype.delete = function(HH) {
      return this.__data__.delete(HH)
    }, fB.prototype.get = function(HH) {
      return this.__data__.get(HH)
    }, fB.prototype.has = function(HH) {
      return this.__data__.has(HH)
    }, fB.prototype.set = function(HH, BH) {
      var LH = this.__data__;
      if (LH instanceof oB) {
        var AH = LH.__data__;
        if (!QB || AH.length < 199) return AH.push([HH, BH]), this;
        LH = this.__data__ = new IB(AH)
      }
      return LH.set(HH, BH), this
    };
    var nB = XB ? dH(XB, Object) : function() {
        return []
      },
      FB = function(HH) {
        return LB.call(HH)
      };

    function DB(HH, BH) {
      return !!(BH = null == BH ? rH : BH) && ("number" == typeof HH || KH.test(HH)) && HH > -1 && HH % 1 == 0 && HH < BH
    }

    function wB(HH) {
      var BH = HH && HH.constructor;
      return HH === ("function" == typeof BH && BH.prototype || iH)
    }

    function ZB(HH) {
      if (null != HH) {
        try {
          return HB.call(HH)
        } catch (BH) {}
        try {
          return HH + ""
        } catch (BH) {}
      }
      return ""
    }

    function dB(HH, BH) {
      return HH === BH || HH !== HH && BH !== BH
    }(uB && FB(new uB(new ArrayBuffer(1))) != PH || QB && FB(new QB) != EH || WB && FB(WB.resolve()) != YH || MB && FB(new MB) != QH || xB && FB(new xB) != xH) && (FB = function(HH) {
      var BH = LB.call(HH),
        LH = BH == GH ? HH.constructor : void 0,
        AH = LH ? ZB(LH) : void 0;
      if (AH) switch (AH) {
        case PB:
          return PH;
        case TB:
          return EH;
        case UB:
          return YH;
        case VB:
          return QH;
        case OB:
          return xH
      }
      return BH
    });
    var aB = Array.isArray;

    function sB(HH) {
      return null != HH && function(HH) {
        return "number" == typeof HH && HH > -1 && HH % 1 == 0 && HH <= rH
      }(HH.length) && !iB(HH)
    }
    var JB = GB || function() {
      return !1
    };

    function iB(HH) {
      var BH = pB(HH) ? LB.call(HH) : "";
      return BH == zH || BH == CH
    }

    function pB(HH) {
      var BH = typeof HH;
      return !!HH && ("object" == BH || "function" == BH)
    }

    function yB(HH) {
      return sB(HH) ? lB(HH) : function(HH) {
        if (!wB(HH)) return YB(HH);
        var BH = [];
        for (var LH in Object(HH)) BB.call(HH, LH) && "constructor" != LH && BH.push(LH);
        return BH
      }(HH)
    }
    HH.exports = function(HH) {
      return eB(HH, !0, !0)
    }
  },
  39318: HH => {
    function BH(HH, BH, LH) {
      for (var AH = HH.length, rH = -1 / 0, SH = 1 / 0, hH = 0; hH < AH; hH++) {
        var tH = (LH[0][hH] - HH[hH]) / BH[hH],
          zH = (LH[1][hH] - HH[hH]) / BH[hH];
        if (tH > zH) {
          var CH = tH;
          tH = zH, zH = CH
        }
        if (zH < rH || tH > SH) return 1 / 0;
        tH > rH && (rH = tH), zH < SH && (SH = zH)
      }
      return rH > SH ? 1 / 0 : rH
    }
    HH.exports = function(HH, LH, AH, rH) {
      var SH = BH(LH, AH, rH);
      if (SH === 1 / 0) HH = null;
      else {
        HH = HH || [];
        for (var hH = 0; hH < LH.length; hH++) HH[hH] = LH[hH] + AH[hH] * SH
      }
      return HH
    }, HH.exports.distance = BH
  },
  38573: (HH, BH, LH) => {
    var AH = LH(38577);

    function rH(HH) {
      for (var BH, LH, rH = 0, SH = HH.length, hH = 0; hH < HH.length;) {
        for (BH = HH[hH], LH = 0; hH < SH && HH[hH] === BH;) ++hH, ++LH;
        rH += AH.log2(LH) / 7 | 0, rH += AH.log2(BH >>> 0) / 7 | 0, rH += 2
      }
      return rH
    }
    BH.size = rH, BH.encode = function(HH, BH) {
      BH || (BH = new Uint8Array(rH(HH)));
      for (var LH, AH, SH = 0, hH = BH.length, tH = 0; tH < HH.length;) {
        for (LH = HH[tH], AH = 0; tH < HH.length && HH[tH] === LH;) ++tH, ++AH;
        for (; SH < hH && AH >= 128;) BH[SH++] = 128 + (127 & AH), AH >>>= 7;
        if (SH >= hH) throw new Error("RLE buffer overflow");
        for (BH[SH++] = AH, LH >>>= 0; SH < hH && LH >= 128;) BH[SH++] = 128 + (127 & LH), LH >>>= 7;
        if (SH >= hH) throw new Error("RLE buffer overflow");
        BH[SH++] = LH
      }
      return BH
    }, BH.decode = function(HH, BH) {
      for (var LH, AH, rH, SH, hH = BH.length, tH = HH.length, zH = 0, CH = 0; CH < tH;) {
        for (LH = 0, AH = 0; CH < tH && HH[CH] >= 128;) LH += (127 & HH[CH++]) << AH, AH += 7;
        if (LH += HH[CH++] << AH, CH >= tH) throw new Error("RLE buffer underrun");
        if (zH + LH > hH) throw new Error("Chunk buffer overflow");
        for (rH = 0, AH = 0; CH < tH && HH[CH] >= 128;) rH += (127 & HH[CH++]) << AH, AH += 7;
        if (CH >= tH) throw new Error("RLE buffer underrun");
        for (rH += HH[CH++] << AH, SH = 0; SH < LH; ++SH) BH[zH++] = rH
      }
      return BH
    }
  },
  38577: (HH, BH) => {
    function LH(HH) {
      var BH = 32;
      return (HH &= -HH) && BH--, 65535 & HH && (BH -= 16), 16711935 & HH && (BH -= 8), 252645135 & HH && (BH -= 4), 858993459 & HH && (BH -= 2), 1431655765 & HH && (BH -= 1), BH
    }
    BH.INT_BITS = 32, BH.INT_MAX = 2147483647, BH.INT_MIN = -1 << 31, BH.sign = function(HH) {
      return (HH > 0) - (HH < 0)
    }, BH.abs = function(HH) {
      var BH = HH >> 31;
      return (HH ^ BH) - BH
    }, BH.min = function(HH, BH) {
      return BH ^ (HH ^ BH) & -(HH < BH)
    }, BH.max = function(HH, BH) {
      return HH ^ (HH ^ BH) & -(HH < BH)
    }, BH.isPow2 = function(HH) {
      return !(HH & HH - 1) && !!HH
    }, BH.log2 = function(HH) {
      var BH, LH;
      return BH = (HH > 65535) << 4, BH |= LH = ((HH >>>= BH) > 255) << 3, BH |= LH = ((HH >>>= LH) > 15) << 2, (BH |= LH = ((HH >>>= LH) > 3) << 1) | (HH >>>= LH) >> 1
    }, BH.log10 = function(HH) {
      return HH >= 1e9 ? 9 : HH >= 1e8 ? 8 : HH >= 1e7 ? 7 : HH >= 1e6 ? 6 : HH >= 1e5 ? 5 : HH >= 1e4 ? 4 : HH >= 1e3 ? 3 : HH >= 100 ? 2 : HH >= 10 ? 1 : 0
    }, BH.popCount = function(HH) {
      return 16843009 * ((HH = (858993459 & (HH -= HH >>> 1 & 1431655765)) + (HH >>> 2 & 858993459)) + (HH >>> 4) & 252645135) >>> 24
    }, BH.countTrailingZeros = LH, BH.nextPow2 = function(HH) {
      return HH += 0 === HH, --HH, HH |= HH >>> 1, HH |= HH >>> 2, HH |= HH >>> 4, HH |= HH >>> 8, (HH |= HH >>> 16) + 1
    }, BH.prevPow2 = function(HH) {
      return HH |= HH >>> 1, HH |= HH >>> 2, HH |= HH >>> 4, HH |= HH >>> 8, (HH |= HH >>> 16) - (HH >>> 1)
    }, BH.parity = function(HH) {
      return HH ^= HH >>> 16, HH ^= HH >>> 8, HH ^= HH >>> 4, 27030 >>> (HH &= 15) & 1
    };
    var AH = new Array(256);
    ! function(HH) {
      for (var BH = 0; BH < 256; ++BH) {
        var LH = BH,
          AH = BH,
          rH = 7;
        for (LH >>>= 1; LH; LH >>>= 1) AH <<= 1, AH |= 1 & LH, --rH;
        HH[BH] = AH << rH & 255
      }
    }(AH), BH.reverse = function(HH) {
      return AH[255 & HH] << 24 | AH[HH >>> 8 & 255] << 16 | AH[HH >>> 16 & 255] << 8 | AH[HH >>> 24 & 255]
    }, BH.interleave2 = function(HH, BH) {
      return (HH = 1431655765 & ((HH = 858993459 & ((HH = 252645135 & ((HH = 16711935 & ((HH &= 65535) | HH << 8)) | HH << 4)) | HH << 2)) | HH << 1)) | (BH = 1431655765 & ((BH = 858993459 & ((BH = 252645135 & ((BH = 16711935 & ((BH &= 65535) | BH << 8)) | BH << 4)) | BH << 2)) | BH << 1)) << 1
    }, BH.deinterleave2 = function(HH, BH) {
      return (HH = 65535 & ((HH = 16711935 & ((HH = 252645135 & ((HH = 858993459 & ((HH = HH >>> BH & 1431655765) | HH >>> 1)) | HH >>> 2)) | HH >>> 4)) | HH >>> 16)) << 16 >> 16
    }, BH.interleave3 = function(HH, BH, LH) {
      return HH = 1227133513 & ((HH = 3272356035 & ((HH = 251719695 & ((HH = 4278190335 & ((HH &= 1023) | HH << 16)) | HH << 8)) | HH << 4)) | HH << 2), (HH |= (BH = 1227133513 & ((BH = 3272356035 & ((BH = 251719695 & ((BH = 4278190335 & ((BH &= 1023) | BH << 16)) | BH << 8)) | BH << 4)) | BH << 2)) << 1) | (LH = 1227133513 & ((LH = 3272356035 & ((LH = 251719695 & ((LH = 4278190335 & ((LH &= 1023) | LH << 16)) | LH << 8)) | LH << 4)) | LH << 2)) << 2
    }, BH.deinterleave3 = function(HH, BH) {
      return (HH = 1023 & ((HH = 4278190335 & ((HH = 251719695 & ((HH = 3272356035 & ((HH = HH >>> BH & 1227133513) | HH >>> 2)) | HH >>> 4)) | HH >>> 8)) | HH >>> 16)) << 22 >> 22
    }, BH.nextCombination = function(HH) {
      var BH = HH | HH - 1;
      return BH + 1 | (~BH & -~BH) - 1 >>> LH(HH) + 1
    }
  },
  38071: (HH, BH, LH) => {
    LH.d(BH, {
      Color3: () => AH.c,
      d: () => AH.g
    });
    var AH = LH(38074);
    (0, AH.j)()
  },
  38610: (HH, BH, LH) => {
    LH.d(BH, {
      e: () => rH
    });
    var AH = LH(38619);
    class rH {
      static GetPlanes(HH) {
        const BH = [];
        for (let LH = 0; LH < 6; LH++) BH.push(new AH.d(0, 0, 0, 0));
        return rH.GetPlanesToRef(HH, BH), BH
      }
      static GetNearPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] + LH[2], BH.normal.y = LH[7] + LH[6], BH.normal.z = LH[11] + LH[10], BH.d = LH[15] + LH[14], BH.normalize()
      }
      static GetFarPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] - LH[2], BH.normal.y = LH[7] - LH[6], BH.normal.z = LH[11] - LH[10], BH.d = LH[15] - LH[14], BH.normalize()
      }
      static GetLeftPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] + LH[0], BH.normal.y = LH[7] + LH[4], BH.normal.z = LH[11] + LH[8], BH.d = LH[15] + LH[12], BH.normalize()
      }
      static GetRightPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] - LH[0], BH.normal.y = LH[7] - LH[4], BH.normal.z = LH[11] - LH[8], BH.d = LH[15] - LH[12], BH.normalize()
      }
      static GetTopPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] - LH[1], BH.normal.y = LH[7] - LH[5], BH.normal.z = LH[11] - LH[9], BH.d = LH[15] - LH[13], BH.normalize()
      }
      static GetBottomPlaneToRef(HH, BH) {
        const LH = HH.m;
        BH.normal.x = LH[3] + LH[1], BH.normal.y = LH[7] + LH[5], BH.normal.z = LH[11] + LH[9], BH.d = LH[15] + LH[13], BH.normalize()
      }
      static GetPlanesToRef(HH, BH) {
        rH.GetNearPlaneToRef(HH, BH[0]), rH.GetFarPlaneToRef(HH, BH[1]), rH.GetLeftPlaneToRef(HH, BH[2]), rH.GetRightPlaneToRef(HH, BH[3]), rH.GetTopPlaneToRef(HH, BH[4]), rH.GetBottomPlaneToRef(HH, BH[5])
      }
      static IsPointInFrustum(HH, BH) {
        for (let LH = 0; LH < 6; LH++)
          if (BH[LH].dotCoordinate(HH) < 0) return !1;
        return !0
      }
    }
  },
  38619: (HH, BH, LH) => {
    LH.d(BH, {
      d: () => rH
    });
    var AH = LH(37963);
    class rH {
      constructor(HH, BH, LH, rH) {
        this.normal = new AH.o(HH, BH, LH), this.d = rH
      }
      xrH() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new rH(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let HH = this.normal.getHashCode();
        return HH = 397 * HH ^ this.d, HH
      }
      normalize() {
        const HH = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let BH = 0;
        return 0 !== HH && (BH = 1 / HH), this.normal.x *= BH, this.normal.y *= BH, this.normal.z *= BH, this.d *= BH, this
      }
      transform(HH) {
        const BH = rH._TmpMatrix;
        HH.invertToRef(BH);
        const LH = BH.m,
          AH = this.normal.x,
          SH = this.normal.y,
          hH = this.normal.z,
          tH = this.d,
          zH = AH * LH[0] + SH * LH[1] + hH * LH[2] + tH * LH[3],
          CH = AH * LH[4] + SH * LH[5] + hH * LH[6] + tH * LH[7],
          EH = AH * LH[8] + SH * LH[9] + hH * LH[10] + tH * LH[11],
          XH = AH * LH[12] + SH * LH[13] + hH * LH[14] + tH * LH[15];
        return new rH(zH, CH, EH, XH)
      }
      dotCoordinate(HH) {
        return this.normal.x * HH.x + this.normal.y * HH.y + this.normal.z * HH.z + this.d
      }
      copyFromPoints(HH, BH, LH) {
        const AH = BH.x - HH.x,
          rH = BH.y - HH.y,
          SH = BH.z - HH.z,
          hH = LH.x - HH.x,
          tH = LH.y - HH.y,
          zH = LH.z - HH.z,
          CH = rH * zH - SH * tH,
          EH = SH * hH - AH * zH,
          XH = AH * tH - rH * hH,
          GH = Math.sqrt(CH * CH + EH * EH + XH * XH);
        let YH;
        return YH = 0 !== GH ? 1 / GH : 0, this.normal.x = CH * YH, this.normal.y = EH * YH, this.normal.z = XH * YH, this.d = -(this.normal.x * HH.x + this.normal.y * HH.y + this.normal.z * HH.z), this
      }
      isFrontFacingTo(HH, BH) {
        return AH.o.Dot(this.normal, HH) <= BH
      }
      signedDistanceTo(HH) {
        return AH.o.Dot(HH, this.normal) + this.d
      }
      static FromArray(HH) {
        return new rH(HH[0], HH[1], HH[2], HH[3])
      }
      static FromPoints(HH, BH, LH) {
        const AH = new rH(0, 0, 0, 0);
        return AH.copyFromPoints(HH, BH, LH), AH
      }
      static FromPositionAndNormal(HH, BH) {
        const LH = new rH(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(HH, BH, LH)
      }
      static FromPositionAndNormalToRef(HH, BH, LH) {
        return LH.normal.Tm(BH), LH.normal.normalize(), LH.d = -HH.dot(LH.normal), LH
      }
      static SignedDistanceToPlaneFromPositionAndNormal(HH, BH, LH) {
        const rH = -(BH.x * HH.x + BH.y * HH.y + BH.z * HH.z);
        return AH.o.Dot(LH, BH) + rH
      }
    }
    rH._TmpMatrix = AH.e.Identity()
  },
  37961: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      Matrix: () => AH.e,
      Quaternion: () => AH.f,
      RegisterMathVector: () => AH.h,
      TmpVectors: () => AH.l,
      Vector2: () => AH.n,
      lu: () => AH.o,
      Vector4: () => AH.q
    });
    var AH = LH(37963);
    (0, AH.h)()
  },
  38966: (HH, BH, LH) => {
    LH.d(BH, {
      c: () => AH
    });
    class AH {
      constructor(HH, BH, LH, AH) {
        this.x = HH, this.y = BH, this.width = LH, this.height = AH
      }
      toGlobal(HH, BH) {
        return new AH(this.x * HH, this.y * BH, this.width * HH, this.height * BH)
      }
      toGlobalToRef(HH, BH, LH) {
        return LH.x = this.x * HH, LH.y = this.y * BH, LH.width = this.width * HH, LH.height = this.height * BH, this
      }
      clone() {
        return new AH(this.x, this.y, this.width, this.height)
      }
    }
  },
  38790: (HH, BH, LH) => {
    function AH() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (HH => {
        const BH = 16 * Math.random() | 0;
        return ("x" === HH ? BH : 3 & BH | 8).toString(16)
      }))
    }
    LH.d(BH, {
      e: () => AH
    })
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);