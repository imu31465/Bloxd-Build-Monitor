/*! For license information please see 1yqdn.260.993ae5af.chunk.js.LICENSE.txt */
export const id = 260;
export const ids = [260, 267];
export const modules = {
  39459: WW => {
    WW.exports = function(WW) {
      return null != WW && null != WW.constructor && "function" === typeof WW.constructor.isBuffer && WW.constructor.isBuffer(WW)
    }
  },
  39443: (WW, iW, OW) => {
    var mW = OW(39452),
      EW = OW(39456),
      NW = OW(39459);
    OW.g.__TYPEDARRAY_POOL || (OW.g.__TYPEDARRAY_POOL = {
      UINT8: EW([32, 0]),
      UINT16: EW([32, 0]),
      UINT32: EW([32, 0]),
      INT8: EW([32, 0]),
      INT16: EW([32, 0]),
      INT32: EW([32, 0]),
      FLOAT: EW([32, 0]),
      DOUBLE: EW([32, 0]),
      DATA: EW([32, 0]),
      UINT8C: EW([32, 0]),
      BUFFER: EW([32, 0])
    });
    var PW = "undefined" !== typeof Uint8ClampedArray,
      LW = OW.g.__TYPEDARRAY_POOL;
    LW.UINT8C || (LW.UINT8C = EW([32, 0])), LW.BUFFER || (LW.BUFFER = EW([32, 0]));
    var cW = LW.DATA,
      wW = LW.BUFFER;

    function tW(WW) {
      if (WW) {
        var iW = WW.length || WW.byteLength,
          OW = mW.log2(iW);
        cW[OW].push(WW)
      }
    }

    function ZW(WW) {
      WW = mW.nextPow2(WW);
      var iW = mW.log2(WW),
        OW = cW[iW];
      return OW.length > 0 ? OW.pop() : new ArrayBuffer(WW)
    }

    function xW(WW) {
      return new Uint8Array(ZW(WW), 0, WW)
    }

    function lW(WW) {
      return new Uint16Array(ZW(2 * WW), 0, WW)
    }

    function AW(WW) {
      return new Uint32Array(ZW(4 * WW), 0, WW)
    }

    function bW(WW) {
      return new Int8Array(ZW(WW), 0, WW)
    }

    function jW(WW) {
      return new Int16Array(ZW(2 * WW), 0, WW)
    }

    function UW(WW) {
      return new Int32Array(ZW(4 * WW), 0, WW)
    }

    function kW(WW) {
      return new Float32Array(ZW(4 * WW), 0, WW)
    }

    function sW(WW) {
      return new Float64Array(ZW(8 * WW), 0, WW)
    }

    function MW(WW) {
      return PW ? new Uint8ClampedArray(ZW(WW), 0, WW) : xW(WW)
    }

    function KW(WW) {
      return new DataView(ZW(WW), 0, WW)
    }
    iW.free = function(WW) {
      if (NW(WW)) wW[mW.log2(WW.length)].push(WW);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(WW) && (WW = WW.buffer), !WW) return;
        var iW = WW.length || WW.byteLength,
          OW = 0 | mW.log2(iW);
        cW[OW].push(WW)
      }
    }, iW.freeUint8 = iW.freeUint16 = iW.freeUint32 = iW.freeInt8 = iW.freeInt16 = iW.freeInt32 = iW.freeFloat32 = iW.freeFloat = iW.freeFloat64 = iW.freeDouble = iW.freeUint8Clamped = iW.freeDataView = function(WW) {
      tW(WW.buffer)
    }, iW.freeArrayBuffer = tW, iW.freeBuffer = function(WW) {
      wW[mW.log2(WW.length)].push(WW)
    }, iW.malloc = function(WW, iW) {
      if (void 0 === iW || "arraybuffer" === iW) return ZW(WW);
      switch (iW) {
        case "uint8":
          return xW(WW);
        case "uint16":
          return lW(WW);
        case "uint32":
          return AW(WW);
        case "int8":
          return bW(WW);
        case "int16":
          return jW(WW);
        case "int32":
          return UW(WW);
        case "float":
        case "float32":
          return kW(WW);
        case "double":
        case "float64":
          return sW(WW);
        case "uint8_clamped":
          return MW(WW);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return KW(WW);
        default:
          return null
      }
      return null
    }, iW.mallocArrayBuffer = ZW, iW.mallocUint8 = xW, iW.mallocUint16 = lW, iW.mallocUint32 = AW, iW.mallocInt8 = bW, iW.mallocInt16 = jW, iW.mallocInt32 = UW, iW.mallocFloat32 = iW.mallocFloat = kW, iW.mallocFloat64 = iW.mallocDouble = sW, iW.mallocUint8Clamped = MW, iW.mallocDataView = KW, iW.clearCache = function() {
      for (var WW = 0; WW < 32; ++WW) LW.UINT8[WW].length = 0, LW.UINT16[WW].length = 0, LW.UINT32[WW].length = 0, LW.INT8[WW].length = 0, LW.INT16[WW].length = 0, LW.INT32[WW].length = 0, LW.FLOAT[WW].length = 0, LW.DOUBLE[WW].length = 0, LW.UINT8C[WW].length = 0, cW[WW].length = 0, wW[WW].length = 0
    }
  },
  39452: (WW, iW) => {
    function OW(WW) {
      var iW = 32;
      return (WW &= -WW) && iW--, 65535 & WW && (iW -= 16), 16711935 & WW && (iW -= 8), 252645135 & WW && (iW -= 4), 858993459 & WW && (iW -= 2), 1431655765 & WW && (iW -= 1), iW
    }
    iW.INT_BITS = 32, iW.INT_MAX = 2147483647, iW.INT_MIN = -1 << 31, iW.sign = function(WW) {
      return (WW > 0) - (WW < 0)
    }, iW.abs = function(WW) {
      var iW = WW >> 31;
      return (WW ^ iW) - iW
    }, iW.min = function(WW, iW) {
      return iW ^ (WW ^ iW) & -(WW < iW)
    }, iW.max = function(WW, iW) {
      return WW ^ (WW ^ iW) & -(WW < iW)
    }, iW.isPow2 = function(WW) {
      return !(WW & WW - 1) && !!WW
    }, iW.log2 = function(WW) {
      var iW, OW;
      return iW = (WW > 65535) << 4, iW |= OW = ((WW >>>= iW) > 255) << 3, iW |= OW = ((WW >>>= OW) > 15) << 2, (iW |= OW = ((WW >>>= OW) > 3) << 1) | (WW >>>= OW) >> 1
    }, iW.log10 = function(WW) {
      return WW >= 1e9 ? 9 : WW >= 1e8 ? 8 : WW >= 1e7 ? 7 : WW >= 1e6 ? 6 : WW >= 1e5 ? 5 : WW >= 1e4 ? 4 : WW >= 1e3 ? 3 : WW >= 100 ? 2 : WW >= 10 ? 1 : 0
    }, iW.popCount = function(WW) {
      return 16843009 * ((WW = (858993459 & (WW -= WW >>> 1 & 1431655765)) + (WW >>> 2 & 858993459)) + (WW >>> 4) & 252645135) >>> 24
    }, iW.countTrailingZeros = OW, iW.nextPow2 = function(WW) {
      return WW += 0 === WW, --WW, WW |= WW >>> 1, WW |= WW >>> 2, WW |= WW >>> 4, WW |= WW >>> 8, (WW |= WW >>> 16) + 1
    }, iW.prevPow2 = function(WW) {
      return WW |= WW >>> 1, WW |= WW >>> 2, WW |= WW >>> 4, WW |= WW >>> 8, (WW |= WW >>> 16) - (WW >>> 1)
    }, iW.parity = function(WW) {
      return WW ^= WW >>> 16, WW ^= WW >>> 8, WW ^= WW >>> 4, 27030 >>> (WW &= 15) & 1
    };
    var mW = new Array(256);
    ! function(WW) {
      for (var iW = 0; iW < 256; ++iW) {
        var OW = iW,
          mW = iW,
          EW = 7;
        for (OW >>>= 1; OW; OW >>>= 1) mW <<= 1, mW |= 1 & OW, --EW;
        WW[iW] = mW << EW & 255
      }
    }(mW), iW.reverse = function(WW) {
      return mW[255 & WW] << 24 | mW[WW >>> 8 & 255] << 16 | mW[WW >>> 16 & 255] << 8 | mW[WW >>> 24 & 255]
    }, iW.interleave2 = function(WW, iW) {
      return (WW = 1431655765 & ((WW = 858993459 & ((WW = 252645135 & ((WW = 16711935 & ((WW &= 65535) | WW << 8)) | WW << 4)) | WW << 2)) | WW << 1)) | (iW = 1431655765 & ((iW = 858993459 & ((iW = 252645135 & ((iW = 16711935 & ((iW &= 65535) | iW << 8)) | iW << 4)) | iW << 2)) | iW << 1)) << 1
    }, iW.deinterleave2 = function(WW, iW) {
      return (WW = 65535 & ((WW = 16711935 & ((WW = 252645135 & ((WW = 858993459 & ((WW = WW >>> iW & 1431655765) | WW >>> 1)) | WW >>> 2)) | WW >>> 4)) | WW >>> 16)) << 16 >> 16
    }, iW.interleave3 = function(WW, iW, OW) {
      return WW = 1227133513 & ((WW = 3272356035 & ((WW = 251719695 & ((WW = 4278190335 & ((WW &= 1023) | WW << 16)) | WW << 8)) | WW << 4)) | WW << 2), (WW |= (iW = 1227133513 & ((iW = 3272356035 & ((iW = 251719695 & ((iW = 4278190335 & ((iW &= 1023) | iW << 16)) | iW << 8)) | iW << 4)) | iW << 2)) << 1) | (OW = 1227133513 & ((OW = 3272356035 & ((OW = 251719695 & ((OW = 4278190335 & ((OW &= 1023) | OW << 16)) | OW << 8)) | OW << 4)) | OW << 2)) << 2
    }, iW.deinterleave3 = function(WW, iW) {
      return (WW = 1023 & ((WW = 4278190335 & ((WW = 251719695 & ((WW = 3272356035 & ((WW = WW >>> iW & 1227133513) | WW >>> 2)) | WW >>> 4)) | WW >>> 8)) | WW >>> 16)) << 22 >> 22
    }, iW.nextCombination = function(WW) {
      var iW = WW | WW - 1;
      return iW + 1 | (~iW & -~iW) - 1 >>> OW(WW) + 1
    }
  },
  39441: (WW, iW, OW) => {
    WW.exports = function(WW, iW, OW) {
      switch (arguments.length) {
        case 1:
          return mW = [], wW(EW = WW, EW, tW, !0), mW;
        case 2:
          return "function" === typeof iW ? wW(WW, WW, iW, !0) : function(WW, iW) {
            return mW = [], wW(WW, iW, tW, !1), mW
          }(WW, iW);
        case 3:
          return wW(WW, iW, OW, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var EW
    };
    var mW, EW = OW(39443),
      NW = OW(39468),
      PW = OW(39482);

    function LW(WW, iW) {
      for (var OW = 0; OW < WW; ++OW)
        if (!(iW[OW] <= iW[OW + WW])) return !0;
      return !1
    }

    function cW(WW, iW, OW, mW) {
      for (var EW = 0, NW = 0, PW = 0, cW = WW.length; PW < cW; ++PW) {
        var wW = WW[PW];
        if (!LW(iW, wW)) {
          for (var tW = 0; tW < 2 * iW; ++tW) OW[EW++] = wW[tW];
          mW[NW++] = PW
        }
      }
      return NW
    }

    function wW(WW, iW, OW, mW) {
      var LW = WW.length,
        wW = iW.length;
      if (!(LW <= 0 || wW <= 0)) {
        var tW = WW[0].length >>> 1;
        if (!(tW <= 0)) {
          var ZW, xW = EW.mallocDouble(2 * tW * LW),
            lW = EW.mallocInt32(LW);
          if ((LW = cW(WW, tW, xW, lW)) > 0) {
            if (1 === tW && mW) NW.init(LW), ZW = NW.sweepComplete(tW, OW, 0, LW, xW, lW, 0, LW, xW, lW);
            else {
              var AW = EW.mallocDouble(2 * tW * wW),
                bW = EW.mallocInt32(wW);
              (wW = cW(iW, tW, AW, bW)) > 0 && (NW.init(LW + wW), ZW = 1 === tW ? NW.sweepBipartite(tW, OW, 0, LW, xW, lW, 0, wW, AW, bW) : PW(tW, OW, mW, LW, xW, lW, wW, AW, bW), EW.free(AW), EW.free(bW))
            }
            EW.free(xW), EW.free(lW)
          }
          return ZW
        }
      }
    }

    function tW(WW, iW) {
      mW.push([WW, iW])
    }
  },
  39485: (WW, iW) => {
    var OW = "d",
      mW = "ax",
      EW = "fp",
      NW = "es",
      PW = "rs",
      LW = "re",
      cW = "rb",
      wW = "bs",
      tW = "be",
      ZW = "bb",
      xW = [OW, mW, "vv", PW, LW, cW, "ri", wW, tW, ZW, "bi"];

    function lW(WW) {
      var iW = "bruteForce" + (WW ? "Full" : "Partial"),
        mW = [],
        PW = xW.slice();
      WW || PW.splice(3, 0, EW);
      var LW = ["function " + iW + "(" + PW.join() + "){"];

      function cW(iW, EW) {
        var PW = function(WW, iW, mW) {
          var EW = "bruteForce" + (WW ? "Red" : "Blue") + (iW ? "Flip" : "") + (mW ? "Full" : ""),
            PW = ["function ", EW, "(", xW.join(), "){", "var ", NW, "=2*", OW, ";"],
            LW = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            cW = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (mW ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return WW ? PW.push(LW, "Q", ":", cW) : PW.push(cW, "Q", ":", LW), mW ? PW.push("if(y1<x0||x1<y0)continue;") : iW ? PW.push("if(y0<=x0||x1<y0)continue;") : PW.push("if(y0<x0||x1<y0)continue;"), PW.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), iW ? PW.push("yi,xi") : PW.push("xi,yi"), PW.push(");if(rv!==void 0)return rv;}}}"), {
            name: EW,
            code: PW.join("")
          }
        }(iW, EW, WW);
        mW.push(PW.code), LW.push("return " + PW.name + "(" + xW.join() + ");")
      }
      LW.push("if(re-rs>be-bs){"), WW ? (cW(!0, !1), LW.push("}else{"), cW(!1, !1)) : (LW.push("if(fp){"), cW(!0, !0), LW.push("}else{"), cW(!0, !1), LW.push("}}else{if(fp){"), cW(!1, !0), LW.push("}else{"), cW(!1, !1), LW.push("}")), LW.push("}}return " + iW);
      var wW = mW.join("") + LW.join("");
      return new Function(wW)()
    }
    iW.partial = lW(!1), iW.full = lW(!0)
  },
  39482: (WW, iW, OW) => {
    WW.exports = function(WW, iW, OW, NW, tW, hW, HW, nW, uW) {
      ! function(WW, iW) {
        var OW = 8 * EW.log2(iW + 1) * (WW + 1) | 0,
          NW = EW.nextPow2(MW * OW);
        SW.length < NW && (mW.free(SW), SW = mW.mallocInt32(NW));
        var PW = EW.nextPow2(KW * OW);
        YW.length < PW && (mW.free(YW), YW = mW.mallocDouble(PW))
      }(WW, NW + HW);
      var oW, dW = 0,
        eW = 2 * WW;
      yW(dW++, 0, 0, NW, 0, HW, OW ? 16 : 0, -1 / 0, 1 / 0), OW || yW(dW++, 0, 0, HW, 0, NW, 1, -1 / 0, 1 / 0);
      for (; dW > 0;) {
        var vW = (dW -= 1) * MW,
          gW = SW[vW],
          DW = SW[vW + 1],
          VW = SW[vW + 2],
          pW = SW[vW + 3],
          fW = SW[vW + 4],
          CW = SW[vW + 5],
          XW = dW * KW,
          BW = YW[XW],
          qW = YW[XW + 1],
          RW = 1 & CW,
          GW = !!(16 & CW),
          IW = tW,
          aW = hW,
          rW = nW,
          zW = uW;
        if (RW && (IW = nW, aW = uW, rW = tW, zW = hW), !(2 & CW && DW >= (VW = jW(WW, gW, DW, VW, IW, aW, qW))) && !(4 & CW && (DW = UW(WW, gW, DW, VW, IW, aW, BW)) >= VW)) {
          var FW = VW - DW,
            QW = fW - pW;
          if (GW) {
            if (WW * FW * (FW + QW) < lW) {
              if (void 0 !== (oW = cW.scanComplete(WW, gW, iW, DW, VW, IW, aW, pW, fW, rW, zW))) return oW;
              continue
            }
          } else {
            if (WW * Math.min(FW, QW) < ZW) {
              if (void 0 !== (oW = PW(WW, gW, iW, RW, DW, VW, IW, aW, pW, fW, rW, zW))) return oW;
              continue
            }
            if (WW * FW * QW < xW) {
              if (void 0 !== (oW = cW.scanBipartite(WW, gW, iW, RW, DW, VW, IW, aW, pW, fW, rW, zW))) return oW;
              continue
            }
          }
          var Wi = AW(WW, gW, DW, VW, IW, aW, BW, qW);
          if (DW < Wi)
            if (WW * (Wi - DW) < ZW) {
              if (void 0 !== (oW = LW(WW, gW + 1, iW, DW, Wi, IW, aW, pW, fW, rW, zW))) return oW
            } else if (gW === WW - 2) {
            if (void 0 !== (oW = RW ? cW.sweepBipartite(WW, iW, pW, fW, rW, zW, DW, Wi, IW, aW) : cW.sweepBipartite(WW, iW, DW, Wi, IW, aW, pW, fW, rW, zW))) return oW
          } else yW(dW++, gW + 1, DW, Wi, pW, fW, RW, -1 / 0, 1 / 0), yW(dW++, gW + 1, pW, fW, DW, Wi, 1 ^ RW, -1 / 0, 1 / 0);
          if (Wi < VW) {
            var ii = wW(WW, gW, pW, fW, rW, zW),
              Oi = rW[eW * ii + gW],
              mi = bW(WW, gW, ii, fW, rW, zW, Oi);
            if (mi < fW && yW(dW++, gW, Wi, VW, mi, fW, (4 | RW) + (GW ? 16 : 0), Oi, qW), pW < ii && yW(dW++, gW, Wi, VW, pW, ii, (2 | RW) + (GW ? 16 : 0), BW, Oi), ii + 1 === mi) {
              if (void 0 !== (oW = GW ? JW(WW, gW, iW, Wi, VW, IW, aW, ii, rW, zW[ii]) : TW(WW, gW, iW, RW, Wi, VW, IW, aW, ii, rW, zW[ii]))) return oW
            } else if (ii < mi) {
              var Ei;
              if (GW) {
                if (Wi < (Ei = kW(WW, gW, Wi, VW, IW, aW, Oi))) {
                  var Ni = bW(WW, gW, Wi, Ei, IW, aW, Oi);
                  if (gW === WW - 2) {
                    if (Wi < Ni && void 0 !== (oW = cW.sweepComplete(WW, iW, Wi, Ni, IW, aW, ii, mi, rW, zW))) return oW;
                    if (Ni < Ei && void 0 !== (oW = cW.sweepBipartite(WW, iW, Ni, Ei, IW, aW, ii, mi, rW, zW))) return oW
                  } else Wi < Ni && yW(dW++, gW + 1, Wi, Ni, ii, mi, 16, -1 / 0, 1 / 0), Ni < Ei && (yW(dW++, gW + 1, Ni, Ei, ii, mi, 0, -1 / 0, 1 / 0), yW(dW++, gW + 1, ii, mi, Ni, Ei, 1, -1 / 0, 1 / 0))
                }
              } else Wi < (Ei = RW ? sW(WW, gW, Wi, VW, IW, aW, Oi) : kW(WW, gW, Wi, VW, IW, aW, Oi)) && (gW === WW - 2 ? oW = RW ? cW.sweepBipartite(WW, iW, ii, mi, rW, zW, Wi, Ei, IW, aW) : cW.sweepBipartite(WW, iW, Wi, Ei, IW, aW, ii, mi, rW, zW) : (yW(dW++, gW + 1, Wi, Ei, ii, mi, RW, -1 / 0, 1 / 0), yW(dW++, gW + 1, ii, mi, Wi, Ei, 1 ^ RW, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var mW = OW(39443),
      EW = OW(39452),
      NW = OW(39485),
      PW = NW.partial,
      LW = NW.full,
      cW = OW(39468),
      wW = OW(39487),
      tW = OW(39494),
      ZW = 128,
      xW = 1 << 22,
      lW = 1 << 22,
      AW = tW("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      bW = tW("lo===p0", ["p0"]),
      jW = tW("lo<p0", ["p0"]),
      UW = tW("hi<=p0", ["p0"]),
      kW = tW("lo<=p0&&p0<=hi", ["p0"]),
      sW = tW("lo<p0&&p0<=hi", ["p0"]),
      MW = 6,
      KW = 2,
      SW = mW.mallocInt32(1024),
      YW = mW.mallocDouble(1024);

    function yW(WW, iW, OW, mW, EW, NW, PW, LW, cW) {
      var wW = MW * WW;
      SW[wW] = iW, SW[wW + 1] = OW, SW[wW + 2] = mW, SW[wW + 3] = EW, SW[wW + 4] = NW, SW[wW + 5] = PW;
      var tW = KW * WW;
      YW[tW] = LW, YW[tW + 1] = cW
    }

    function TW(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW, tW) {
      var ZW = 2 * WW,
        xW = cW * ZW,
        lW = wW[xW + iW];
      WW: for (var AW = EW, bW = EW * ZW; AW < NW; ++AW, bW += ZW) {
        var jW = PW[bW + iW],
          UW = PW[bW + iW + WW];
        if (!(lW < jW || UW < lW) && (!mW || lW !== jW)) {
          for (var kW, sW = LW[AW], MW = iW + 1; MW < WW; ++MW) {
            jW = PW[bW + MW], UW = PW[bW + MW + WW];
            var KW = wW[xW + MW],
              SW = wW[xW + MW + WW];
            if (UW < KW || SW < jW) continue WW
          }
          if (void 0 !== (kW = mW ? OW(tW, sW) : OW(sW, tW))) return kW
        }
      }
    }

    function JW(WW, iW, OW, mW, EW, NW, PW, LW, cW, wW) {
      var tW = 2 * WW,
        ZW = LW * tW,
        xW = cW[ZW + iW];
      WW: for (var lW = mW, AW = mW * tW; lW < EW; ++lW, AW += tW) {
        var bW = PW[lW];
        if (bW !== wW) {
          var jW = NW[AW + iW],
            UW = NW[AW + iW + WW];
          if (!(xW < jW || UW < xW)) {
            for (var kW = iW + 1; kW < WW; ++kW) {
              jW = NW[AW + kW], UW = NW[AW + kW + WW];
              var sW = cW[ZW + kW],
                MW = cW[ZW + kW + WW];
              if (UW < sW || MW < jW) continue WW
            }
            var KW = OW(bW, wW);
            if (void 0 !== KW) return KW
          }
        }
      }
    }
  },
  39487: (WW, iW, OW) => {
    WW.exports = function(WW, iW, OW, PW, LW, cW) {
      if (PW <= OW + 1) return OW;
      var wW = OW,
        tW = PW,
        ZW = PW + OW >>> 1,
        xW = 2 * WW,
        lW = ZW,
        AW = LW[xW * ZW + iW];
      for (; wW < tW;) {
        if (tW - wW < EW) {
          NW(WW, iW, wW, tW, LW, cW), AW = LW[xW * ZW + iW];
          break
        }
        var bW = tW - wW,
          jW = Math.random() * bW + wW | 0,
          UW = LW[xW * jW + iW],
          kW = Math.random() * bW + wW | 0,
          sW = LW[xW * kW + iW],
          MW = Math.random() * bW + wW | 0,
          KW = LW[xW * MW + iW];
        UW <= sW ? KW >= sW ? (lW = kW, AW = sW) : UW >= KW ? (lW = jW, AW = UW) : (lW = MW, AW = KW) : sW >= KW ? (lW = kW, AW = sW) : KW >= UW ? (lW = jW, AW = UW) : (lW = MW, AW = KW);
        for (var SW = xW * (tW - 1), YW = xW * lW, yW = 0; yW < xW; ++yW, ++SW, ++YW) {
          var TW = LW[SW];
          LW[SW] = LW[YW], LW[YW] = TW
        }
        var JW = cW[tW - 1];
        cW[tW - 1] = cW[lW], cW[lW] = JW;
        for (SW = xW * (tW - 1), YW = xW * (lW = mW(WW, iW, wW, tW - 1, LW, cW, AW)), yW = 0; yW < xW; ++yW, ++SW, ++YW) {
          TW = LW[SW];
          LW[SW] = LW[YW], LW[YW] = TW
        }
        JW = cW[tW - 1];
        if (cW[tW - 1] = cW[lW], cW[lW] = JW, ZW < lW) {
          for (tW = lW - 1; wW < tW && LW[xW * (tW - 1) + iW] === AW;) tW -= 1;
          tW += 1
        } else {
          if (!(lW < ZW)) break;
          for (wW = lW + 1; wW < tW && LW[xW * wW + iW] === AW;) wW += 1
        }
      }
      return mW(WW, iW, OW, ZW, LW, cW, LW[xW * ZW + iW])
    };
    var mW = OW(39494)("lo<p0", ["p0"]),
      EW = 8;

    function NW(WW, iW, OW, mW, EW, NW) {
      for (var PW = 2 * WW, LW = PW * (OW + 1) + iW, cW = OW + 1; cW < mW; ++cW, LW += PW)
        for (var wW = EW[LW], tW = cW, ZW = PW * (cW - 1); tW > OW && EW[ZW + iW] > wW; --tW, ZW -= PW) {
          for (var xW = ZW, lW = ZW + PW, AW = 0; AW < PW; ++AW, ++xW, ++lW) {
            var bW = EW[xW];
            EW[xW] = EW[lW], EW[lW] = bW
          }
          var jW = NW[tW];
          NW[tW] = NW[tW - 1], NW[tW - 1] = jW
        }
    }
  },
  39494: WW => {
    WW.exports = function(WW, OW) {
      var mW = "abcdef".split("").concat(OW),
        EW = [];
      WW.indexOf("lo") >= 0 && EW.push("lo=e[k+n]");
      WW.indexOf("hi") >= 0 && EW.push("hi=e[k+o]");
      return mW.push(iW.replace("_", EW.join()).replace("$", WW)), Function.apply(void 0, mW)
    };
    var iW = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  39476: WW => {
    WW.exports = function(WW, mW) {
      mW <= 4 * iW ? OW(0, mW - 1, WW) : wW(0, mW - 1, WW)
    };
    var iW = 32;

    function OW(WW, iW, OW) {
      for (var mW = 2 * (WW + 1), EW = WW + 1; EW <= iW; ++EW) {
        for (var NW = OW[mW++], PW = OW[mW++], LW = EW, cW = mW - 2; LW-- > WW;) {
          var wW = OW[cW - 2],
            tW = OW[cW - 1];
          if (wW < NW) break;
          if (wW === NW && tW < PW) break;
          OW[cW] = wW, OW[cW + 1] = tW, cW -= 2
        }
        OW[cW] = NW, OW[cW + 1] = PW
      }
    }

    function mW(WW, iW, OW) {
      iW *= 2;
      var mW = OW[WW *= 2],
        EW = OW[WW + 1];
      OW[WW] = OW[iW], OW[WW + 1] = OW[iW + 1], OW[iW] = mW, OW[iW + 1] = EW
    }

    function EW(WW, iW, OW) {
      iW *= 2, OW[WW *= 2] = OW[iW], OW[WW + 1] = OW[iW + 1]
    }

    function NW(WW, iW, OW, mW) {
      iW *= 2, OW *= 2;
      var EW = mW[WW *= 2],
        NW = mW[WW + 1];
      mW[WW] = mW[iW], mW[WW + 1] = mW[iW + 1], mW[iW] = mW[OW], mW[iW + 1] = mW[OW + 1], mW[OW] = EW, mW[OW + 1] = NW
    }

    function PW(WW, iW, OW, mW, EW) {
      iW *= 2, EW[WW *= 2] = EW[iW], EW[iW] = OW, EW[WW + 1] = EW[iW + 1], EW[iW + 1] = mW
    }

    function LW(WW, iW, OW) {
      iW *= 2;
      var mW = OW[WW *= 2],
        EW = OW[iW];
      return !(mW < EW) && (mW !== EW || OW[WW + 1] > OW[iW + 1])
    }

    function cW(WW, iW, OW, mW) {
      var EW = mW[WW *= 2];
      return EW < iW || EW === iW && mW[WW + 1] < OW
    }

    function wW(WW, tW, ZW) {
      var xW = (tW - WW + 1) / 6 | 0,
        lW = WW + xW,
        AW = tW - xW,
        bW = WW + tW >> 1,
        jW = bW - xW,
        UW = bW + xW,
        kW = lW,
        sW = jW,
        MW = bW,
        KW = UW,
        SW = AW,
        YW = WW + 1,
        yW = tW - 1,
        TW = 0;
      LW(kW, sW, ZW) && (TW = kW, kW = sW, sW = TW), LW(KW, SW, ZW) && (TW = KW, KW = SW, SW = TW), LW(kW, MW, ZW) && (TW = kW, kW = MW, MW = TW), LW(sW, MW, ZW) && (TW = sW, sW = MW, MW = TW), LW(kW, KW, ZW) && (TW = kW, kW = KW, KW = TW), LW(MW, KW, ZW) && (TW = MW, MW = KW, KW = TW), LW(sW, SW, ZW) && (TW = sW, sW = SW, SW = TW), LW(sW, MW, ZW) && (TW = sW, sW = MW, MW = TW), LW(KW, SW, ZW) && (TW = KW, KW = SW, SW = TW);
      for (var JW = ZW[2 * sW], hW = ZW[2 * sW + 1], HW = ZW[2 * KW], nW = ZW[2 * KW + 1], uW = 2 * kW, oW = 2 * MW, dW = 2 * SW, eW = 2 * lW, vW = 2 * bW, gW = 2 * AW, DW = 0; DW < 2; ++DW) {
        var VW = ZW[uW + DW],
          pW = ZW[oW + DW],
          fW = ZW[dW + DW];
        ZW[eW + DW] = VW, ZW[vW + DW] = pW, ZW[gW + DW] = fW
      }
      EW(jW, WW, ZW), EW(UW, tW, ZW);
      for (var CW = YW; CW <= yW; ++CW)
        if (cW(CW, JW, hW, ZW)) CW !== YW && mW(CW, YW, ZW), ++YW;
        else if (!cW(CW, HW, nW, ZW))
        for (;;) {
          if (cW(yW, HW, nW, ZW)) {
            cW(yW, JW, hW, ZW) ? (NW(CW, YW, yW, ZW), ++YW, --yW) : (mW(CW, yW, ZW), --yW);
            break
          }
          if (--yW < CW) break
        }
      PW(WW, YW - 1, JW, hW, ZW), PW(tW, yW + 1, HW, nW, ZW), YW - 2 - WW <= iW ? OW(WW, YW - 2, ZW) : wW(WW, YW - 2, ZW), tW - (yW + 2) <= iW ? OW(yW + 2, tW, ZW) : wW(yW + 2, tW, ZW), yW - YW <= iW ? OW(YW, yW, ZW) : wW(YW, yW, ZW)
    }
  },
  39468: (WW, iW, OW) => {
    WW.exports = {
      init: function(WW) {
        var iW = EW.nextPow2(WW);
        cW.length < iW && (mW.free(cW), cW = mW.mallocInt32(iW));
        wW.length < iW && (mW.free(wW), wW = mW.mallocInt32(iW));
        tW.length < iW && (mW.free(tW), tW = mW.mallocInt32(iW));
        ZW.length < iW && (mW.free(ZW), ZW = mW.mallocInt32(iW));
        xW.length < iW && (mW.free(xW), xW = mW.mallocInt32(iW));
        lW.length < iW && (mW.free(lW), lW = mW.mallocInt32(iW));
        var OW = 8 * iW;
        AW.length < OW && (mW.free(AW), AW = mW.mallocDouble(OW))
      },
      sweepBipartite: function(WW, iW, OW, mW, EW, LW, xW, lW, UW, kW) {
        for (var sW = 0, MW = 2 * WW, KW = WW - 1, SW = MW - 1, YW = OW; YW < mW; ++YW) {
          var yW = LW[YW],
            TW = MW * YW;
          AW[sW++] = EW[TW + KW], AW[sW++] = -(yW + 1), AW[sW++] = EW[TW + SW], AW[sW++] = yW
        }
        for (YW = xW; YW < lW; ++YW) {
          yW = kW[YW] + PW;
          var JW = MW * YW;
          AW[sW++] = UW[JW + KW], AW[sW++] = -yW, AW[sW++] = UW[JW + SW], AW[sW++] = yW
        }
        var hW = sW >>> 1;
        NW(AW, hW);
        var HW = 0,
          nW = 0;
        for (YW = 0; YW < hW; ++YW) {
          var uW = 0 | AW[2 * YW + 1];
          if (uW >= PW) bW(tW, ZW, nW--, uW = uW - PW | 0);
          else if (uW >= 0) bW(cW, wW, HW--, uW);
          else if (uW <= -PW) {
            uW = -uW - PW | 0;
            for (var oW = 0; oW < HW; ++oW) {
              if (void 0 !== (dW = iW(cW[oW], uW))) return dW
            }
            jW(tW, ZW, nW++, uW)
          } else {
            uW = -uW - 1 | 0;
            for (oW = 0; oW < nW; ++oW) {
              var dW;
              if (void 0 !== (dW = iW(uW, tW[oW]))) return dW
            }
            jW(cW, wW, HW++, uW)
          }
        }
      },
      sweepComplete: function(WW, iW, OW, mW, EW, PW, LW, UW, kW, sW) {
        for (var MW = 0, KW = 2 * WW, SW = WW - 1, YW = KW - 1, yW = OW; yW < mW; ++yW) {
          var TW = PW[yW] + 1 << 1,
            JW = KW * yW;
          AW[MW++] = EW[JW + SW], AW[MW++] = -TW, AW[MW++] = EW[JW + YW], AW[MW++] = TW
        }
        for (yW = LW; yW < UW; ++yW) {
          TW = sW[yW] + 1 << 1;
          var hW = KW * yW;
          AW[MW++] = kW[hW + SW], AW[MW++] = 1 | -TW, AW[MW++] = kW[hW + YW], AW[MW++] = 1 | TW
        }
        var HW = MW >>> 1;
        NW(AW, HW);
        var nW = 0,
          uW = 0,
          oW = 0;
        for (yW = 0; yW < HW; ++yW) {
          var dW = 0 | AW[2 * yW + 1],
            eW = 1 & dW;
          if (yW < HW - 1 && dW >> 1 === AW[2 * yW + 3] >> 1 && (eW = 2, yW += 1), dW < 0) {
            for (var vW = -(dW >> 1) - 1, gW = 0; gW < oW; ++gW) {
              if (void 0 !== (DW = iW(xW[gW], vW))) return DW
            }
            if (0 !== eW)
              for (gW = 0; gW < nW; ++gW) {
                if (void 0 !== (DW = iW(cW[gW], vW))) return DW
              }
            if (1 !== eW)
              for (gW = 0; gW < uW; ++gW) {
                var DW;
                if (void 0 !== (DW = iW(tW[gW], vW))) return DW
              }
            0 === eW ? jW(cW, wW, nW++, vW) : 1 === eW ? jW(tW, ZW, uW++, vW) : 2 === eW && jW(xW, lW, oW++, vW)
          } else {
            vW = (dW >> 1) - 1;
            0 === eW ? bW(cW, wW, nW--, vW) : 1 === eW ? bW(tW, ZW, uW--, vW) : 2 === eW && bW(xW, lW, oW--, vW)
          }
        }
      },
      scanBipartite: function(WW, iW, OW, mW, EW, LW, tW, ZW, xW, lW, UW, kW) {
        var sW = 0,
          MW = 2 * WW,
          KW = iW,
          SW = iW + WW,
          YW = 1,
          yW = 1;
        mW ? yW = PW : YW = PW;
        for (var TW = EW; TW < LW; ++TW) {
          var JW = TW + YW,
            hW = MW * TW;
          AW[sW++] = tW[hW + KW], AW[sW++] = -JW, AW[sW++] = tW[hW + SW], AW[sW++] = JW
        }
        for (TW = xW; TW < lW; ++TW) {
          JW = TW + yW;
          var HW = MW * TW;
          AW[sW++] = UW[HW + KW], AW[sW++] = -JW
        }
        var nW = sW >>> 1;
        NW(AW, nW);
        var uW = 0;
        for (TW = 0; TW < nW; ++TW) {
          var oW = 0 | AW[2 * TW + 1];
          if (oW < 0) {
            var dW = !1;
            if ((JW = -oW) >= PW ? (dW = !mW, JW -= PW) : (dW = !!mW, JW -= 1), dW) jW(cW, wW, uW++, JW);
            else {
              var eW = kW[JW],
                vW = MW * JW,
                gW = UW[vW + iW + 1],
                DW = UW[vW + iW + 1 + WW];
              WW: for (var VW = 0; VW < uW; ++VW) {
                var pW = cW[VW],
                  fW = MW * pW;
                if (!(DW < tW[fW + iW + 1] || tW[fW + iW + 1 + WW] < gW)) {
                  for (var CW = iW + 2; CW < WW; ++CW)
                    if (UW[vW + CW + WW] < tW[fW + CW] || tW[fW + CW + WW] < UW[vW + CW]) continue WW;
                  var XW, BW = ZW[pW];
                  if (void 0 !== (XW = mW ? OW(eW, BW) : OW(BW, eW))) return XW
                }
              }
            }
          } else bW(cW, wW, uW--, oW - YW)
        }
      },
      scanComplete: function(WW, iW, OW, mW, EW, LW, wW, tW, ZW, xW, lW) {
        for (var bW = 0, jW = 2 * WW, UW = iW, kW = iW + WW, sW = mW; sW < EW; ++sW) {
          var MW = sW + PW,
            KW = jW * sW;
          AW[bW++] = LW[KW + UW], AW[bW++] = -MW, AW[bW++] = LW[KW + kW], AW[bW++] = MW
        }
        for (sW = tW; sW < ZW; ++sW) {
          MW = sW + 1;
          var SW = jW * sW;
          AW[bW++] = xW[SW + UW], AW[bW++] = -MW
        }
        var YW = bW >>> 1;
        NW(AW, YW);
        var yW = 0;
        for (sW = 0; sW < YW; ++sW) {
          var TW = 0 | AW[2 * sW + 1];
          if (TW < 0) {
            if ((MW = -TW) >= PW) cW[yW++] = MW - PW;
            else {
              var JW = lW[MW -= 1],
                hW = jW * MW,
                HW = xW[hW + iW + 1],
                nW = xW[hW + iW + 1 + WW];
              WW: for (var uW = 0; uW < yW; ++uW) {
                var oW = cW[uW],
                  dW = wW[oW];
                if (dW === JW) break;
                var eW = jW * oW;
                if (!(nW < LW[eW + iW + 1] || LW[eW + iW + 1 + WW] < HW)) {
                  for (var vW = iW + 2; vW < WW; ++vW)
                    if (xW[hW + vW + WW] < LW[eW + vW] || LW[eW + vW + WW] < xW[hW + vW]) continue WW;
                  var gW = OW(dW, JW);
                  if (void 0 !== gW) return gW
                }
              }
            }
          } else {
            for (MW = TW - PW, uW = yW - 1; uW >= 0; --uW)
              if (cW[uW] === MW) {
                for (vW = uW + 1; vW < yW; ++vW) cW[vW - 1] = cW[vW];
                break
              }-- yW
          }
        }
      }
    };
    var mW = OW(39443),
      EW = OW(39452),
      NW = OW(39476),
      PW = 1 << 28,
      LW = 1024,
      cW = mW.mallocInt32(LW),
      wW = mW.mallocInt32(LW),
      tW = mW.mallocInt32(LW),
      ZW = mW.mallocInt32(LW),
      xW = mW.mallocInt32(LW),
      lW = mW.mallocInt32(LW),
      AW = mW.mallocDouble(8192);

    function bW(WW, iW, OW, mW) {
      var EW = iW[mW],
        NW = WW[OW - 1];
      WW[EW] = NW, iW[NW] = EW
    }

    function jW(WW, iW, OW, mW) {
      WW[OW] = mW, iW[mW] = OW
    }
  },
  39456: WW => {
    function iW(WW, OW, mW) {
      var EW = 0 | WW[mW];
      if (EW <= 0) return [];
      var NW, PW = new Array(EW);
      if (mW === WW.length - 1)
        for (NW = 0; NW < EW; ++NW) PW[NW] = OW;
      else
        for (NW = 0; NW < EW; ++NW) PW[NW] = iW(WW, OW, mW + 1);
      return PW
    }
    WW.exports = function(WW, OW) {
      switch ("undefined" === typeof OW && (OW = 0), typeof WW) {
        case "number":
          if (WW > 0) return function(WW, iW) {
            var OW, mW;
            for (OW = new Array(WW), mW = 0; mW < WW; ++mW) OW[mW] = iW;
            return OW
          }(0 | WW, OW);
          break;
        case "object":
          if ("number" === typeof WW.length) return iW(WW, OW, 0)
      }
      return []
    }
  },
  39404: (WW, iW, OW) => {
    WW.exports = function() {
      var WW = this;
      this.components = {}, this.comps = this.components;
      var iW = this.components,
        OW = 1,
        EW = {},
        NW = [],
        PW = [],
        LW = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function cW(WW, OW) {
        var mW = iW[OW],
          NW = EW[OW],
          PW = NW.hash[WW];
        PW && (NW.remove(WW), mW.mH && (mW.multi ? (PW.forEach((iW => {
          iW && mW.mH(WW, iW)
        })), PW.length = 0) : mW.mH(WW, PW)), LW.removals.push(NW), wW())
      }

      function wW() {
        LW.timeout || (LW.timeout = !0, setTimeout(tW, 1))
      }

      function tW() {
        LW.timeout = !1, ZW()
      }

      function ZW() {
        LW.multiComps.length && function(WW) {
          for (var iW = 0; iW < WW.length; iW++) {
            var {
              entID: OW,
              data: mW
            } = WW[iW], EW = mW.hash[OW];
            if (EW) {
              for (var NW = 0; NW < EW.length; NW++) EW[NW] || (EW.splice(NW, 1), NW--);
              0 === EW.length && (mW.remove(OW), LW.removals.push(mW))
            }
          }
          WW.length = 0
        }(LW.multiComps), LW.removals.length && function(WW) {
          for (var iW = 0; iW < WW.length; iW++) {
            WW[iW].flush()
          }
          WW.length = 0
        }(LW.removals)
      }
      this.Tb = EW, this._systems = NW, this._renderSystems = PW, this.sG = function(iW) {
        var mW = OW++;
        return Array.isArray(iW) && iW.forEach((iW => WW.zD(mW, iW))), mW
      }, this.deleteEntity = function(iW) {
        return Object.keys(EW).forEach((WW => {
          EW[WW].hash[iW] && cW(iW, WW)
        })), WW
      }, this.bOW = function(WW) {
        if (!WW) throw new Error("Missing component definition");
        var OW = WW.name;
        if (!OW) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof OW) throw new Error("Component name must be a string.");
        if ("" === OW) throw new Error("Component name must be a non-empty string.");
        if (EW[OW]) throw new Error(`Component ${OW} already exists.`);
        var LW = {};
        return LW.name = OW, LW.multi = !!WW.multi, LW.order = isNaN(WW.order) ? 99 : WW.order, LW.stateConstructor = WW.stateConstructor || null, LW.state = WW.state || {}, LW.mY = WW.mY || null, LW.mH = WW.mH || null, LW.system = WW.system || null, LW.ZY = WW.ZY || null, iW[OW] = LW, EW[OW] = new mW, EW[OW]._pendingMultiCleanup = !1, EW[OW]._multiCleanupIDs = LW.multi ? [] : null, LW.system && (NW.push(OW), NW.sort(((WW, OW) => iW[WW].order - iW[OW].order))), LW.ZY && (PW.push(OW), PW.sort(((WW, OW) => iW[WW].order - iW[OW].order))), OW
      }, this.overwriteComponent = function(WW, OW) {
        var mW = iW[WW];
        if (!mW) throw new Error(`Unknown component: ${WW}`);
        if (!OW) throw new Error("Missing component definition");
        if (mW.name !== OW.name) throw new Error("Overwriting component must use the same name property.");
        var LW = {};
        LW.name = WW, LW.multi = !!OW.multi, LW.order = isNaN(OW.order) ? 99 : OW.order, LW.state = OW.state || {}, LW.mY = OW.mY || null, LW.mH = OW.mH || null, LW.system = OW.system || null, LW.ZY = OW.ZY || null, iW[WW] = LW, EW[WW]._pendingMultiCleanup = !1, EW[WW]._multiCleanupIDs = LW.multi ? [] : null;
        var cW = NW.indexOf(WW);
        LW.system && cW < 0 && NW.push(WW), !LW.system && cW >= 0 && NW.splice(cW, 1), NW.sort(((WW, OW) => iW[WW].order - iW[OW].order));
        var wW = PW.indexOf(WW);
        LW.ZY && wW < 0 && PW.push(WW), !LW.ZY && wW >= 0 && PW.splice(wW, 1), PW.sort(((WW, OW) => iW[WW].order - iW[OW].order));
        var tW = LW.state;
        return this.RD(WW).forEach((WW => {
          for (var iW in tW) iW in WW || (WW[iW] = tW[iW]);
          LW.mY && LW.mY(WW.rD, WW)
        })), WW
      }, this.deleteComponent = function(OW) {
        var mW = EW[OW];
        if (!mW) throw new Error(`Unknown component: ${OW}`);
        mW.flush(), mW.list.forEach((WW => {
          WW && cW(WW.rD || WW[0].rD, OW)
        }));
        var LW = NW.indexOf(OW),
          wW = PW.indexOf(OW);
        return LW > -1 && NW.splice(LW, 1), wW > -1 && PW.splice(wW, 1), EW[OW].dispose(), delete EW[OW], delete iW[OW], WW
      }, this.zD = function(WW, OW, mW) {
        var NW, PW = iW[OW],
          LW = EW[OW];
        if (!LW) throw new Error(`Unknown component: ${OW}.`);
        if (LW.hash[WW] && !PW.multi) throw new Error(`Entity ${WW} already has component: ${OW}.`);
        if (PW.stateConstructor) {
          if (!(NW = new PW.stateConstructor).hasOwnProperty("rD")) throw new Error(`Component ${PW.name} stateConstructor type does not have property __id`);
          Object.assign(NW, PW.state, mW)
        } else NW = {
          rD: WW,
          ...PW.state,
          ...mW
        };
        if (NW.rD = WW, PW.multi) {
          var cW = LW.hash[WW];
          cW || (cW = [], LW.add(WW, cW)), cW.push(NW)
        } else LW.add(WW, NW);
        return PW.mY && PW.mY(WW, NW), this
      }, this.liW = function(WW, iW) {
        var OW = EW[iW];
        if (!OW) throw new Error(`Unknown component: ${iW}.`);
        return !!OW.hash[WW]
      }, this.mV = function(iW, OW) {
        if (!EW[OW]) throw new Error(`Unknown component: ${OW}.`);
        return cW(iW, OW), WW
      }, this.getState = function(WW, iW) {
        var OW = EW[iW];
        if (!OW) throw new Error(`Unknown component: ${iW}.`);
        return OW.hash[WW]
      }, this.RD = function(WW) {
        var iW = EW[WW];
        if (!iW) throw new Error(`Unknown component: ${WW}.`);
        return ZW(), iW.list
      }, this.IiW = function(WW) {
        if (!EW[WW]) throw new Error(`Unknown component: ${WW}.`);
        var iW = EW[WW].hash;
        return WW => iW[WW]
      }, this.WOW = function(WW) {
        if (!EW[WW]) throw new Error(`Unknown component: ${WW}.`);
        var iW = EW[WW].hash;
        return WW => !!iW[WW]
      }, this.hZ = function(OW) {
        ZW();
        for (var mW = 0; mW < NW.length; mW++) {
          var PW = NW[mW],
            LW = iW[PW],
            cW = EW[PW];
          LW.system(OW, cW.list), ZW()
        }
        return WW
      }, this.render = function(OW) {
        ZW();
        for (var mW = 0; mW < PW.length; mW++) {
          var NW = PW[mW],
            LW = iW[NW],
            cW = EW[NW];
          LW.ZY(OW, cW.list), ZW()
        }
        return WW
      }, this.removeMultiComponent = function(OW, mW, NW) {
        var PW = iW[mW],
          cW = EW[mW];
        if (!cW) throw new Error(`Unknown component: ${mW}.`);
        if (!PW.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(WW, iW, OW, mW) {
          var EW = OW.hash[WW];
          if (EW) {
            var NW = EW[mW];
            NW && (EW[mW] = null, iW.mH && iW.mH(WW, NW), LW.multiComps.push({
              entID: WW,
              data: OW
            }), wW())
          }
        }(OW, PW, cW, NW), WW
      }
    };
    var mW = OW(39412)
  },
  39412: WW => {
    function iW(WW, iW) {
      var OW = WW._map[iW];
      if (delete WW.hash[iW], delete WW._map[iW], OW === WW.list.length - 1) WW.list.pop(), WW._idList.pop();
      else {
        var mW = WW.list.pop();
        WW.list[OW] = mW;
        var EW = WW._idList.pop();
        WW._idList[OW] = EW, WW._map[EW] = OW
      }
    }
    WW.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(WW, iW) {
        if ("number" === typeof this._map[WW]) {
          var OW = this._map[WW];
          this.hash[WW] = iW, this.list[OW] = iW, this._idList[OW] = WW
        } else this._map[WW] = this.list.length, this.hash[WW] = iW, this.list.push(iW), this._idList.push(WW)
      }
      remove(WW) {
        var iW = this._map[WW];
        this.hash[WW] = null, this.list[iW] = null, this._pendingRemovals.push(WW)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var WW = 0; WW < this._pendingRemovals.length; WW++) {
          var OW = this._pendingRemovals[WW];
          null === this.hash[OW] && iW(this, OW)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  39234: (WW, iW, OW) => {
    WW = OW.nmd(WW);
    var mW = "__lodash_hash_undefined__",
      EW = 9007199254740991,
      NW = "[object Arguments]",
      PW = "[object Boolean]",
      LW = "[object Date]",
      cW = "[object Function]",
      wW = "[object GeneratorFunction]",
      tW = "[object Map]",
      ZW = "[object Number]",
      xW = "[object Object]",
      lW = "[object Promise]",
      AW = "[object RegExp]",
      bW = "[object Set]",
      jW = "[object String]",
      UW = "[object Symbol]",
      kW = "[object WeakMap]",
      sW = "[object ArrayBuffer]",
      MW = "[object DataView]",
      KW = "[object Float32Array]",
      SW = "[object Float64Array]",
      YW = "[object Int8Array]",
      yW = "[object Int16Array]",
      TW = "[object Int32Array]",
      JW = "[object Uint8Array]",
      hW = "[object Uint8ClampedArray]",
      HW = "[object Uint16Array]",
      nW = "[object Uint32Array]",
      uW = /\w*$/,
      oW = /^\[object .+?Constructor\]$/,
      dW = /^(?:0|[1-9]\d*)$/,
      eW = {};
    eW[NW] = eW["[object Array]"] = eW[sW] = eW[MW] = eW[PW] = eW[LW] = eW[KW] = eW[SW] = eW[YW] = eW[yW] = eW[TW] = eW[tW] = eW[ZW] = eW[xW] = eW[AW] = eW[bW] = eW[jW] = eW[UW] = eW[JW] = eW[hW] = eW[HW] = eW[nW] = !0, eW["[object Error]"] = eW[cW] = eW[kW] = !1;
    var vW = "object" == typeof OW.g && OW.g && OW.g.Object === Object && OW.g,
      gW = "object" == typeof self && self && self.Object === Object && self,
      DW = vW || gW || Function("return this")(),
      VW = iW && !iW.nodeType && iW,
      pW = VW && WW && !WW.nodeType && WW,
      fW = pW && pW.exports === VW;

    function CW(WW, iW) {
      return WW.set(iW[0], iW[1]), WW
    }

    function XW(WW, iW) {
      return WW.add(iW), WW
    }

    function BW(WW, iW, OW, mW) {
      var EW = -1,
        NW = WW ? WW.length : 0;
      for (mW && NW && (OW = WW[++EW]); ++EW < NW;) OW = iW(OW, WW[EW], EW, WW);
      return OW
    }

    function qW(WW) {
      var iW = !1;
      if (null != WW && "function" != typeof WW.toString) try {
        iW = !!(WW + "")
      } catch (OW) {}
      return iW
    }

    function RW(WW) {
      var iW = -1,
        OW = Array(WW.size);
      return WW.forEach((function(WW, mW) {
        OW[++iW] = [mW, WW]
      })), OW
    }

    function GW(WW, iW) {
      return function(OW) {
        return WW(iW(OW))
      }
    }

    function IW(WW) {
      var iW = -1,
        OW = Array(WW.size);
      return WW.forEach((function(WW) {
        OW[++iW] = WW
      })), OW
    }
    var aW = Array.prototype,
      rW = Function.prototype,
      zW = Object.prototype,
      FW = DW["__core-js_shared__"],
      QW = function() {
        var WW = /[^.]+$/.exec(FW && FW.keys && FW.keys.IE_PROTO || "");
        return WW ? "Symbol(src)_1." + WW : ""
      }(),
      Wi = rW.toString,
      ii = zW.hasOwnProperty,
      Oi = zW.toString,
      mi = RegExp("^" + Wi.call(ii).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      Ei = fW ? DW.OZ : void 0,
      Ni = DW.Symbol,
      Pi = DW.Uint8Array,
      Li = GW(Object.getPrototypeOf, Object),
      ci = Object.create,
      wi = zW.propertyIsEnumerable,
      ti = aW.splice,
      Zi = Object.getOwnPropertySymbols,
      xi = Ei ? Ei.isBuffer : void 0,
      li = GW(Object.keys, Object),
      Ai = Xi(DW, "DataView"),
      bi = Xi(DW, "Map"),
      ji = Xi(DW, "Promise"),
      Ui = Xi(DW, "Set"),
      ki = Xi(DW, "WeakMap"),
      si = Xi(Object, "create"),
      Mi = Ii(Ai),
      Ki = Ii(bi),
      Si = Ii(ji),
      Yi = Ii(Ui),
      yi = Ii(ki),
      Ti = Ni ? Ni.prototype : void 0,
      Ji = Ti ? Ti.valueOf : void 0;

    function Hi(WW) {
      var iW = -1,
        OW = WW ? WW.length : 0;
      for (this.clear(); ++iW < OW;) {
        var mW = WW[iW];
        this.set(mW[0], mW[1])
      }
    }

    function ni(WW) {
      var iW = -1,
        OW = WW ? WW.length : 0;
      for (this.clear(); ++iW < OW;) {
        var mW = WW[iW];
        this.set(mW[0], mW[1])
      }
    }

    function ui(WW) {
      var iW = -1,
        OW = WW ? WW.length : 0;
      for (this.clear(); ++iW < OW;) {
        var mW = WW[iW];
        this.set(mW[0], mW[1])
      }
    }

    function oi(WW) {
      this.__data__ = new ni(WW)
    }

    function di(WW, iW) {
      var OW = ri(WW) || function(WW) {
          return function(WW) {
            return function(WW) {
              return !!WW && "object" == typeof WW
            }(WW) && zi(WW)
          }(WW) && ii.call(WW, "callee") && (!wi.call(WW, "callee") || Oi.call(WW) == NW)
        }(WW) ? function(WW, iW) {
          for (var OW = -1, mW = Array(WW); ++OW < WW;) mW[OW] = iW(OW);
          return mW
        }(WW.length, String) : [],
        mW = OW.length,
        EW = !!mW;
      for (var PW in WW) !iW && !ii.call(WW, PW) || EW && ("length" == PW || Ri(PW, mW)) || OW.push(PW);
      return OW
    }

    function ei(WW, iW, OW) {
      var mW = WW[iW];
      ii.call(WW, iW) && ai(mW, OW) && (void 0 !== OW || iW in WW) || (WW[iW] = OW)
    }

    function vi(WW, iW) {
      for (var OW = WW.length; OW--;)
        if (ai(WW[OW][0], iW)) return OW;
      return -1
    }

    function gi(WW, iW, OW, mW, EW, lW, kW) {
      var oW;
      if (mW && (oW = lW ? mW(WW, EW, lW, kW) : mW(WW)), void 0 !== oW) return oW;
      if (!WO(WW)) return WW;
      var dW = ri(WW);
      if (dW) {
        if (oW = function(WW) {
            var iW = WW.length,
              OW = WW.constructor(iW);
            iW && "string" == typeof WW[0] && ii.call(WW, "index") && (OW.index = WW.index, OW.input = WW.input);
            return OW
          }(WW), !iW) return function(WW, iW) {
          var OW = -1,
            mW = WW.length;
          iW || (iW = Array(mW));
          for (; ++OW < mW;) iW[OW] = WW[OW];
          return iW
        }(WW, oW)
      } else {
        var vW = qi(WW),
          gW = vW == cW || vW == wW;
        if (Fi(WW)) return function(WW, iW) {
          if (iW) return WW.slice();
          var OW = new WW.constructor(WW.length);
          return WW.copy(OW), OW
        }(WW, iW);
        if (vW == xW || vW == NW || gW && !lW) {
          if (qW(WW)) return lW ? WW : {};
          if (oW = function(WW) {
              return "function" != typeof WW.constructor || Gi(WW) ? {} : (iW = Li(WW), WO(iW) ? ci(iW) : {});
              var iW
            }(gW ? {} : WW), !iW) return function(WW, iW) {
            return fi(WW, Bi(WW), iW)
          }(WW, function(WW, iW) {
            return WW && fi(iW, iO(iW), WW)
          }(oW, WW))
        } else {
          if (!eW[vW]) return lW ? WW : {};
          oW = function(WW, iW, OW, mW) {
            var EW = WW.constructor;
            switch (iW) {
              case sW:
                return Vi(WW);
              case PW:
              case LW:
                return new EW(+WW);
              case MW:
                return function(WW, iW) {
                  var OW = iW ? Vi(WW.buffer) : WW.buffer;
                  return new WW.constructor(OW, WW.byteOffset, WW.byteLength)
                }(WW, mW);
              case KW:
              case SW:
              case YW:
              case yW:
              case TW:
              case JW:
              case hW:
              case HW:
              case nW:
                return function(WW, iW) {
                  var OW = iW ? Vi(WW.buffer) : WW.buffer;
                  return new WW.constructor(OW, WW.byteOffset, WW.length)
                }(WW, mW);
              case tW:
                return function(WW, iW, OW) {
                  var mW = iW ? OW(RW(WW), !0) : RW(WW);
                  return BW(mW, CW, new WW.constructor)
                }(WW, mW, OW);
              case ZW:
              case jW:
                return new EW(WW);
              case AW:
                return function(WW) {
                  var iW = new WW.constructor(WW.source, uW.exec(WW));
                  return iW.lastIndex = WW.lastIndex, iW
                }(WW);
              case bW:
                return function(WW, iW, OW) {
                  var mW = iW ? OW(IW(WW), !0) : IW(WW);
                  return BW(mW, XW, new WW.constructor)
                }(WW, mW, OW);
              case UW:
                return NW = WW, Ji ? Object(Ji.call(NW)) : {}
            }
            var NW
          }(WW, vW, gi, iW)
        }
      }
      kW || (kW = new oi);
      var DW = kW.get(WW);
      if (DW) return DW;
      if (kW.set(WW, oW), !dW) var VW = OW ? function(WW) {
        return function(WW, iW, OW) {
          var mW = iW(WW);
          return ri(WW) ? mW : function(WW, iW) {
            for (var OW = -1, mW = iW.length, EW = WW.length; ++OW < mW;) WW[EW + OW] = iW[OW];
            return WW
          }(mW, OW(WW))
        }(WW, iO, Bi)
      }(WW) : iO(WW);
      return function(WW, iW) {
        for (var OW = -1, mW = WW ? WW.length : 0; ++OW < mW && !1 !== iW(WW[OW], OW, WW););
      }(VW || WW, (function(EW, NW) {
        VW && (EW = WW[NW = EW]), ei(oW, NW, gi(EW, iW, OW, mW, NW, WW, kW))
      })), oW
    }

    function Di(WW) {
      return !(!WO(WW) || (iW = WW, QW && QW in iW)) && (Qi(WW) || qW(WW) ? mi : oW).test(Ii(WW));
      var iW
    }

    function Vi(WW) {
      var iW = new WW.constructor(WW.byteLength);
      return new Pi(iW).set(new Pi(WW)), iW
    }

    function fi(WW, iW, OW, mW) {
      OW || (OW = {});
      for (var EW = -1, NW = iW.length; ++EW < NW;) {
        var PW = iW[EW],
          LW = mW ? mW(OW[PW], WW[PW], PW, OW, WW) : void 0;
        ei(OW, PW, void 0 === LW ? WW[PW] : LW)
      }
      return OW
    }

    function Ci(WW, iW) {
      var OW = WW.__data__;
      return function(WW) {
        var iW = typeof WW;
        return "string" == iW || "number" == iW || "symbol" == iW || "boolean" == iW ? "__proto__" !== WW : null === WW
      }(iW) ? OW["string" == typeof iW ? "string" : "hash"] : OW.map
    }

    function Xi(WW, iW) {
      var OW = function(WW, iW) {
        return null == WW ? void 0 : WW[iW]
      }(WW, iW);
      return Di(OW) ? OW : void 0
    }
    Hi.prototype.clear = function() {
      this.__data__ = si ? si(null) : {}
    }, Hi.prototype.delete = function(WW) {
      return this.has(WW) && delete this.__data__[WW]
    }, Hi.prototype.get = function(WW) {
      var iW = this.__data__;
      if (si) {
        var OW = iW[WW];
        return OW === mW ? void 0 : OW
      }
      return ii.call(iW, WW) ? iW[WW] : void 0
    }, Hi.prototype.has = function(WW) {
      var iW = this.__data__;
      return si ? void 0 !== iW[WW] : ii.call(iW, WW)
    }, Hi.prototype.set = function(WW, iW) {
      return this.__data__[WW] = si && void 0 === iW ? mW : iW, this
    }, ni.prototype.clear = function() {
      this.__data__ = []
    }, ni.prototype.delete = function(WW) {
      var iW = this.__data__,
        OW = vi(iW, WW);
      return !(OW < 0) && (OW == iW.length - 1 ? iW.pop() : ti.call(iW, OW, 1), !0)
    }, ni.prototype.get = function(WW) {
      var iW = this.__data__,
        OW = vi(iW, WW);
      return OW < 0 ? void 0 : iW[OW][1]
    }, ni.prototype.has = function(WW) {
      return vi(this.__data__, WW) > -1
    }, ni.prototype.set = function(WW, iW) {
      var OW = this.__data__,
        mW = vi(OW, WW);
      return mW < 0 ? OW.push([WW, iW]) : OW[mW][1] = iW, this
    }, ui.prototype.clear = function() {
      this.__data__ = {
        hash: new Hi,
        map: new(bi || ni),
        string: new Hi
      }
    }, ui.prototype.delete = function(WW) {
      return Ci(this, WW).delete(WW)
    }, ui.prototype.get = function(WW) {
      return Ci(this, WW).get(WW)
    }, ui.prototype.has = function(WW) {
      return Ci(this, WW).has(WW)
    }, ui.prototype.set = function(WW, iW) {
      return Ci(this, WW).set(WW, iW), this
    }, oi.prototype.clear = function() {
      this.__data__ = new ni
    }, oi.prototype.delete = function(WW) {
      return this.__data__.delete(WW)
    }, oi.prototype.get = function(WW) {
      return this.__data__.get(WW)
    }, oi.prototype.has = function(WW) {
      return this.__data__.has(WW)
    }, oi.prototype.set = function(WW, iW) {
      var OW = this.__data__;
      if (OW instanceof ni) {
        var mW = OW.__data__;
        if (!bi || mW.length < 199) return mW.push([WW, iW]), this;
        OW = this.__data__ = new ui(mW)
      }
      return OW.set(WW, iW), this
    };
    var Bi = Zi ? GW(Zi, Object) : function() {
        return []
      },
      qi = function(WW) {
        return Oi.call(WW)
      };

    function Ri(WW, iW) {
      return !!(iW = null == iW ? EW : iW) && ("number" == typeof WW || dW.test(WW)) && WW > -1 && WW % 1 == 0 && WW < iW
    }

    function Gi(WW) {
      var iW = WW && WW.constructor;
      return WW === ("function" == typeof iW && iW.prototype || zW)
    }

    function Ii(WW) {
      if (null != WW) {
        try {
          return Wi.call(WW)
        } catch (iW) {}
        try {
          return WW + ""
        } catch (iW) {}
      }
      return ""
    }

    function ai(WW, iW) {
      return WW === iW || WW !== WW && iW !== iW
    }(Ai && qi(new Ai(new ArrayBuffer(1))) != MW || bi && qi(new bi) != tW || ji && qi(ji.resolve()) != lW || Ui && qi(new Ui) != bW || ki && qi(new ki) != kW) && (qi = function(WW) {
      var iW = Oi.call(WW),
        OW = iW == xW ? WW.constructor : void 0,
        mW = OW ? Ii(OW) : void 0;
      if (mW) switch (mW) {
        case Mi:
          return MW;
        case Ki:
          return tW;
        case Si:
          return lW;
        case Yi:
          return bW;
        case yi:
          return kW
      }
      return iW
    });
    var ri = Array.isArray;

    function zi(WW) {
      return null != WW && function(WW) {
        return "number" == typeof WW && WW > -1 && WW % 1 == 0 && WW <= EW
      }(WW.length) && !Qi(WW)
    }
    var Fi = xi || function() {
      return !1
    };

    function Qi(WW) {
      var iW = WO(WW) ? Oi.call(WW) : "";
      return iW == cW || iW == wW
    }

    function WO(WW) {
      var iW = typeof WW;
      return !!WW && ("object" == iW || "function" == iW)
    }

    function iO(WW) {
      return zi(WW) ? di(WW) : function(WW) {
        if (!Gi(WW)) return li(WW);
        var iW = [];
        for (var OW in Object(WW)) ii.call(WW, OW) && "constructor" != OW && iW.push(OW);
        return iW
      }(WW)
    }
    WW.exports = function(WW) {
      return gi(WW, !0, !0)
    }
  },
  39638: WW => {
    function iW(WW, iW, OW) {
      for (var mW = WW.length, EW = -1 / 0, NW = 1 / 0, PW = 0; PW < mW; PW++) {
        var LW = (OW[0][PW] - WW[PW]) / iW[PW],
          cW = (OW[1][PW] - WW[PW]) / iW[PW];
        if (LW > cW) {
          var wW = LW;
          LW = cW, cW = wW
        }
        if (cW < EW || LW > NW) return 1 / 0;
        LW > EW && (EW = LW), cW < NW && (NW = cW)
      }
      return EW > NW ? 1 / 0 : EW
    }
    WW.exports = function(WW, OW, mW, EW) {
      var NW = iW(OW, mW, EW);
      if (NW === 1 / 0) WW = null;
      else {
        WW = WW || [];
        for (var PW = 0; PW < OW.length; PW++) WW[PW] = OW[PW] + mW[PW] * NW
      }
      return WW
    }, WW.exports.distance = iW
  },
  38900: (WW, iW, OW) => {
    var mW = OW(38905);

    function EW(WW) {
      for (var iW, OW, EW = 0, NW = WW.length, PW = 0; PW < WW.length;) {
        for (iW = WW[PW], OW = 0; PW < NW && WW[PW] === iW;) ++PW, ++OW;
        EW += mW.log2(OW) / 7 | 0, EW += mW.log2(iW >>> 0) / 7 | 0, EW += 2
      }
      return EW
    }
    iW.size = EW, iW.encode = function(WW, iW) {
      iW || (iW = new Uint8Array(EW(WW)));
      for (var OW, mW, NW = 0, PW = iW.length, LW = 0; LW < WW.length;) {
        for (OW = WW[LW], mW = 0; LW < WW.length && WW[LW] === OW;) ++LW, ++mW;
        for (; NW < PW && mW >= 128;) iW[NW++] = 128 + (127 & mW), mW >>>= 7;
        if (NW >= PW) throw new Error("RLE buffer overflow");
        for (iW[NW++] = mW, OW >>>= 0; NW < PW && OW >= 128;) iW[NW++] = 128 + (127 & OW), OW >>>= 7;
        if (NW >= PW) throw new Error("RLE buffer overflow");
        iW[NW++] = OW
      }
      return iW
    }, iW.decode = function(WW, iW) {
      for (var OW, mW, EW, NW, PW = iW.length, LW = WW.length, cW = 0, wW = 0; wW < LW;) {
        for (OW = 0, mW = 0; wW < LW && WW[wW] >= 128;) OW += (127 & WW[wW++]) << mW, mW += 7;
        if (OW += WW[wW++] << mW, wW >= LW) throw new Error("RLE buffer underrun");
        if (cW + OW > PW) throw new Error("Chunk buffer overflow");
        for (EW = 0, mW = 0; wW < LW && WW[wW] >= 128;) EW += (127 & WW[wW++]) << mW, mW += 7;
        if (wW >= LW) throw new Error("RLE buffer underrun");
        for (EW += WW[wW++] << mW, NW = 0; NW < OW; ++NW) iW[cW++] = EW
      }
      return iW
    }
  },
  38905: (WW, iW) => {
    function OW(WW) {
      var iW = 32;
      return (WW &= -WW) && iW--, 65535 & WW && (iW -= 16), 16711935 & WW && (iW -= 8), 252645135 & WW && (iW -= 4), 858993459 & WW && (iW -= 2), 1431655765 & WW && (iW -= 1), iW
    }
    iW.INT_BITS = 32, iW.INT_MAX = 2147483647, iW.INT_MIN = -1 << 31, iW.sign = function(WW) {
      return (WW > 0) - (WW < 0)
    }, iW.abs = function(WW) {
      var iW = WW >> 31;
      return (WW ^ iW) - iW
    }, iW.min = function(WW, iW) {
      return iW ^ (WW ^ iW) & -(WW < iW)
    }, iW.max = function(WW, iW) {
      return WW ^ (WW ^ iW) & -(WW < iW)
    }, iW.isPow2 = function(WW) {
      return !(WW & WW - 1) && !!WW
    }, iW.log2 = function(WW) {
      var iW, OW;
      return iW = (WW > 65535) << 4, iW |= OW = ((WW >>>= iW) > 255) << 3, iW |= OW = ((WW >>>= OW) > 15) << 2, (iW |= OW = ((WW >>>= OW) > 3) << 1) | (WW >>>= OW) >> 1
    }, iW.log10 = function(WW) {
      return WW >= 1e9 ? 9 : WW >= 1e8 ? 8 : WW >= 1e7 ? 7 : WW >= 1e6 ? 6 : WW >= 1e5 ? 5 : WW >= 1e4 ? 4 : WW >= 1e3 ? 3 : WW >= 100 ? 2 : WW >= 10 ? 1 : 0
    }, iW.popCount = function(WW) {
      return 16843009 * ((WW = (858993459 & (WW -= WW >>> 1 & 1431655765)) + (WW >>> 2 & 858993459)) + (WW >>> 4) & 252645135) >>> 24
    }, iW.countTrailingZeros = OW, iW.nextPow2 = function(WW) {
      return WW += 0 === WW, --WW, WW |= WW >>> 1, WW |= WW >>> 2, WW |= WW >>> 4, WW |= WW >>> 8, (WW |= WW >>> 16) + 1
    }, iW.prevPow2 = function(WW) {
      return WW |= WW >>> 1, WW |= WW >>> 2, WW |= WW >>> 4, WW |= WW >>> 8, (WW |= WW >>> 16) - (WW >>> 1)
    }, iW.parity = function(WW) {
      return WW ^= WW >>> 16, WW ^= WW >>> 8, WW ^= WW >>> 4, 27030 >>> (WW &= 15) & 1
    };
    var mW = new Array(256);
    ! function(WW) {
      for (var iW = 0; iW < 256; ++iW) {
        var OW = iW,
          mW = iW,
          EW = 7;
        for (OW >>>= 1; OW; OW >>>= 1) mW <<= 1, mW |= 1 & OW, --EW;
        WW[iW] = mW << EW & 255
      }
    }(mW), iW.reverse = function(WW) {
      return mW[255 & WW] << 24 | mW[WW >>> 8 & 255] << 16 | mW[WW >>> 16 & 255] << 8 | mW[WW >>> 24 & 255]
    }, iW.interleave2 = function(WW, iW) {
      return (WW = 1431655765 & ((WW = 858993459 & ((WW = 252645135 & ((WW = 16711935 & ((WW &= 65535) | WW << 8)) | WW << 4)) | WW << 2)) | WW << 1)) | (iW = 1431655765 & ((iW = 858993459 & ((iW = 252645135 & ((iW = 16711935 & ((iW &= 65535) | iW << 8)) | iW << 4)) | iW << 2)) | iW << 1)) << 1
    }, iW.deinterleave2 = function(WW, iW) {
      return (WW = 65535 & ((WW = 16711935 & ((WW = 252645135 & ((WW = 858993459 & ((WW = WW >>> iW & 1431655765) | WW >>> 1)) | WW >>> 2)) | WW >>> 4)) | WW >>> 16)) << 16 >> 16
    }, iW.interleave3 = function(WW, iW, OW) {
      return WW = 1227133513 & ((WW = 3272356035 & ((WW = 251719695 & ((WW = 4278190335 & ((WW &= 1023) | WW << 16)) | WW << 8)) | WW << 4)) | WW << 2), (WW |= (iW = 1227133513 & ((iW = 3272356035 & ((iW = 251719695 & ((iW = 4278190335 & ((iW &= 1023) | iW << 16)) | iW << 8)) | iW << 4)) | iW << 2)) << 1) | (OW = 1227133513 & ((OW = 3272356035 & ((OW = 251719695 & ((OW = 4278190335 & ((OW &= 1023) | OW << 16)) | OW << 8)) | OW << 4)) | OW << 2)) << 2
    }, iW.deinterleave3 = function(WW, iW) {
      return (WW = 1023 & ((WW = 4278190335 & ((WW = 251719695 & ((WW = 3272356035 & ((WW = WW >>> iW & 1227133513) | WW >>> 2)) | WW >>> 4)) | WW >>> 8)) | WW >>> 16)) << 22 >> 22
    }, iW.nextCombination = function(WW) {
      var iW = WW | WW - 1;
      return iW + 1 | (~iW & -~iW) - 1 >>> OW(WW) + 1
    }
  },
  38369: (WW, iW, OW) => {
    OW.d(iW, {
      Color3: () => mW.b,
      c: () => mW.d
    });
    var mW = OW(38372);
    (0, mW.f)()
  },
  38937: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => EW
    });
    var mW = OW(38939);
    class EW {
      static GetPlanes(WW) {
        const iW = [];
        for (let OW = 0; OW < 6; OW++) iW.push(new mW.c(0, 0, 0, 0));
        return EW.GetPlanesToRef(WW, iW), iW
      }
      static GetNearPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] + OW[2], iW.normal.y = OW[7] + OW[6], iW.normal.z = OW[11] + OW[10], iW.d = OW[15] + OW[14], iW.normalize()
      }
      static GetFarPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] - OW[2], iW.normal.y = OW[7] - OW[6], iW.normal.z = OW[11] - OW[10], iW.d = OW[15] - OW[14], iW.normalize()
      }
      static GetLeftPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] + OW[0], iW.normal.y = OW[7] + OW[4], iW.normal.z = OW[11] + OW[8], iW.d = OW[15] + OW[12], iW.normalize()
      }
      static GetRightPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] - OW[0], iW.normal.y = OW[7] - OW[4], iW.normal.z = OW[11] - OW[8], iW.d = OW[15] - OW[12], iW.normalize()
      }
      static GetTopPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] - OW[1], iW.normal.y = OW[7] - OW[5], iW.normal.z = OW[11] - OW[9], iW.d = OW[15] - OW[13], iW.normalize()
      }
      static GetBottomPlaneToRef(WW, iW) {
        const OW = WW.m;
        iW.normal.x = OW[3] + OW[1], iW.normal.y = OW[7] + OW[5], iW.normal.z = OW[11] + OW[9], iW.d = OW[15] + OW[13], iW.normalize()
      }
      static GetPlanesToRef(WW, iW) {
        EW.GetNearPlaneToRef(WW, iW[0]), EW.GetFarPlaneToRef(WW, iW[1]), EW.GetLeftPlaneToRef(WW, iW[2]), EW.GetRightPlaneToRef(WW, iW[3]), EW.GetTopPlaneToRef(WW, iW[4]), EW.GetBottomPlaneToRef(WW, iW[5])
      }
      static IsPointInFrustum(WW, iW) {
        for (let OW = 0; OW < 6; OW++)
          if (iW[OW].dotCoordinate(WW) < 0) return !1;
        return !0
      }
    }
  },
  38939: (WW, iW, OW) => {
    OW.d(iW, {
      c: () => EW
    });
    var mW = OW(38241);
    class EW {
      constructor(WW, iW, OW, EW) {
        this.normal = new mW.q(WW, iW, OW), this.d = EW
      }
      wEW() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new EW(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let WW = this.normal.getHashCode();
        return WW = 397 * WW ^ this.d, WW
      }
      normalize() {
        const WW = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let iW = 0;
        return 0 !== WW && (iW = 1 / WW), this.normal.x *= iW, this.normal.y *= iW, this.normal.z *= iW, this.d *= iW, this
      }
      transform(WW) {
        const iW = EW._TmpMatrix;
        WW.invertToRef(iW);
        const OW = iW.m,
          mW = this.normal.x,
          NW = this.normal.y,
          PW = this.normal.z,
          LW = this.d,
          cW = mW * OW[0] + NW * OW[1] + PW * OW[2] + LW * OW[3],
          wW = mW * OW[4] + NW * OW[5] + PW * OW[6] + LW * OW[7],
          tW = mW * OW[8] + NW * OW[9] + PW * OW[10] + LW * OW[11],
          ZW = mW * OW[12] + NW * OW[13] + PW * OW[14] + LW * OW[15];
        return new EW(cW, wW, tW, ZW)
      }
      dotCoordinate(WW) {
        return this.normal.x * WW.x + this.normal.y * WW.y + this.normal.z * WW.z + this.d
      }
      copyFromPoints(WW, iW, OW) {
        const mW = iW.x - WW.x,
          EW = iW.y - WW.y,
          NW = iW.z - WW.z,
          PW = OW.x - WW.x,
          LW = OW.y - WW.y,
          cW = OW.z - WW.z,
          wW = EW * cW - NW * LW,
          tW = NW * PW - mW * cW,
          ZW = mW * LW - EW * PW,
          xW = Math.sqrt(wW * wW + tW * tW + ZW * ZW);
        let lW;
        return lW = 0 !== xW ? 1 / xW : 0, this.normal.x = wW * lW, this.normal.y = tW * lW, this.normal.z = ZW * lW, this.d = -(this.normal.x * WW.x + this.normal.y * WW.y + this.normal.z * WW.z), this
      }
      isFrontFacingTo(WW, iW) {
        return mW.q.Dot(this.normal, WW) <= iW
      }
      signedDistanceTo(WW) {
        return mW.q.Dot(WW, this.normal) + this.d
      }
      static FromArray(WW) {
        return new EW(WW[0], WW[1], WW[2], WW[3])
      }
      static FromPoints(WW, iW, OW) {
        const mW = new EW(0, 0, 0, 0);
        return mW.copyFromPoints(WW, iW, OW), mW
      }
      static FromPositionAndNormal(WW, iW) {
        const OW = new EW(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(WW, iW, OW)
      }
      static FromPositionAndNormalToRef(WW, iW, OW) {
        return OW.normal.HJ(iW), OW.normal.normalize(), OW.d = -WW.dot(OW.normal), OW
      }
      static SignedDistanceToPlaneFromPositionAndNormal(WW, iW, OW) {
        const EW = -(iW.x * WW.x + iW.y * WW.y + iW.z * WW.z);
        return mW.q.Dot(OW, iW) + EW
      }
    }
    EW._TmpMatrix = mW.d.Identity()
  },
  38235: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      Matrix: () => mW.d,
      Quaternion: () => mW.g,
      RegisterMathVector: () => mW.j,
      TmpVectors: () => mW.l,
      Vector2: () => mW.m,
      fA: () => mW.q,
      Vector4: () => mW.r
    });
    var mW = OW(38241);
    (0, mW.j)()
  },
  39271: (WW, iW, OW) => {
    OW.d(iW, {
      e: () => mW
    });
    class mW {
      constructor(WW, iW, OW, mW) {
        this.x = WW, this.y = iW, this.width = OW, this.height = mW
      }
      toGlobal(WW, iW) {
        return new mW(this.x * WW, this.y * iW, this.width * WW, this.height * iW)
      }
      toGlobalToRef(WW, iW, OW) {
        return OW.x = this.x * WW, OW.y = this.y * iW, OW.width = this.width * WW, OW.height = this.height * iW, this
      }
      clone() {
        return new mW(this.x, this.y, this.width, this.height)
      }
    }
  },
  39088: (WW, iW, OW) => {
    function mW() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (WW => {
        const iW = 16 * Math.random() | 0;
        return ("x" === WW ? iW : 3 & iW | 8).toString(16)
      }))
    }
    OW.d(iW, {
      b: () => mW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);