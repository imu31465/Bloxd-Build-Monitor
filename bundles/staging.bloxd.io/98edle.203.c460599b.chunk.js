/*! For license information please see 98edle.203.c460599b.chunk.js.LICENSE.txt */
export const id = 203;
export const ids = [203, 209];
export const modules = {
  36382: WW => {
    WW.exports = function(WW) {
      return null != WW && null != WW.constructor && "function" === typeof WW.constructor.isBuffer && WW.constructor.isBuffer(WW)
    }
  },
  36369: (WW, RW, MW) => {
    var wW = MW(36374),
      CW = MW(36377),
      zR = MW(36382);
    MW.g.__TYPEDARRAY_POOL || (MW.g.__TYPEDARRAY_POOL = {
      UINT8: CW([32, 0]),
      UINT16: CW([32, 0]),
      UINT32: CW([32, 0]),
      INT8: CW([32, 0]),
      INT16: CW([32, 0]),
      INT32: CW([32, 0]),
      FLOAT: CW([32, 0]),
      DOUBLE: CW([32, 0]),
      DATA: CW([32, 0]),
      UINT8C: CW([32, 0]),
      BUFFER: CW([32, 0])
    });
    var AW = "undefined" !== typeof Uint8ClampedArray,
      bR = MW.g.__TYPEDARRAY_POOL;
    bR.UINT8C || (bR.UINT8C = CW([32, 0])), bR.BUFFER || (bR.BUFFER = CW([32, 0]));
    var yR = bR.DATA,
      NW = bR.BUFFER;

    function eW(WW) {
      if (WW) {
        var RW = WW.length || WW.byteLength,
          MW = wW.log2(RW);
        yR[MW].push(WW)
      }
    }

    function BW(WW) {
      WW = wW.nextPow2(WW);
      var RW = wW.log2(WW),
        MW = yR[RW];
      return MW.length > 0 ? MW.pop() : new ArrayBuffer(WW)
    }

    function tR(WW) {
      return new Uint8Array(BW(WW), 0, WW)
    }

    function TW(WW) {
      return new Uint16Array(BW(2 * WW), 0, WW)
    }

    function gR(WW) {
      return new Uint32Array(BW(4 * WW), 0, WW)
    }

    function iR(WW) {
      return new Int8Array(BW(WW), 0, WW)
    }

    function YW(WW) {
      return new Int16Array(BW(2 * WW), 0, WW)
    }

    function JW(WW) {
      return new Int32Array(BW(4 * WW), 0, WW)
    }

    function PW(WW) {
      return new Float32Array(BW(4 * WW), 0, WW)
    }

    function IW(WW) {
      return new Float64Array(BW(8 * WW), 0, WW)
    }

    function oW(WW) {
      return AW ? new Uint8ClampedArray(BW(WW), 0, WW) : tR(WW)
    }

    function lW(WW) {
      return new DataView(BW(WW), 0, WW)
    }
    RW.free = function(WW) {
      if (zR(WW)) NW[wW.log2(WW.length)].push(WW);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(WW) && (WW = WW.buffer), !WW) return;
        var RW = WW.length || WW.byteLength,
          MW = 0 | wW.log2(RW);
        yR[MW].push(WW)
      }
    }, RW.freeUint8 = RW.freeUint16 = RW.freeUint32 = RW.freeInt8 = RW.freeInt16 = RW.freeInt32 = RW.freeFloat32 = RW.freeFloat = RW.freeFloat64 = RW.freeDouble = RW.freeUint8Clamped = RW.freeDataView = function(WW) {
      eW(WW.buffer)
    }, RW.freeArrayBuffer = eW, RW.freeBuffer = function(WW) {
      NW[wW.log2(WW.length)].push(WW)
    }, RW.malloc = function(WW, RW) {
      if (void 0 === RW || "arraybuffer" === RW) return BW(WW);
      switch (RW) {
        case "uint8":
          return tR(WW);
        case "uint16":
          return TW(WW);
        case "uint32":
          return gR(WW);
        case "int8":
          return iR(WW);
        case "int16":
          return YW(WW);
        case "int32":
          return JW(WW);
        case "float":
        case "float32":
          return PW(WW);
        case "double":
        case "float64":
          return IW(WW);
        case "uint8_clamped":
          return oW(WW);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return lW(WW);
        default:
          return null
      }
      return null
    }, RW.mallocArrayBuffer = BW, RW.mallocUint8 = tR, RW.mallocUint16 = TW, RW.mallocUint32 = gR, RW.mallocInt8 = iR, RW.mallocInt16 = YW, RW.mallocInt32 = JW, RW.mallocFloat32 = RW.mallocFloat = PW, RW.mallocFloat64 = RW.mallocDouble = IW, RW.mallocUint8Clamped = oW, RW.mallocDataView = lW, RW.clearCache = function() {
      for (var WW = 0; WW < 32; ++WW) bR.UINT8[WW].length = 0, bR.UINT16[WW].length = 0, bR.UINT32[WW].length = 0, bR.INT8[WW].length = 0, bR.INT16[WW].length = 0, bR.INT32[WW].length = 0, bR.FLOAT[WW].length = 0, bR.DOUBLE[WW].length = 0, bR.UINT8C[WW].length = 0, yR[WW].length = 0, NW[WW].length = 0
    }
  },
  36374: (WW, RW) => {
    function MW(WW) {
      var RW = 32;
      return (WW &= -WW) && RW--, 65535 & WW && (RW -= 16), 16711935 & WW && (RW -= 8), 252645135 & WW && (RW -= 4), 858993459 & WW && (RW -= 2), 1431655765 & WW && (RW -= 1), RW
    }
    RW.INT_BITS = 32, RW.INT_MAX = 2147483647, RW.INT_MIN = -1 << 31, RW.sign = function(WW) {
      return (WW > 0) - (WW < 0)
    }, RW.abs = function(WW) {
      var RW = WW >> 31;
      return (WW ^ RW) - RW
    }, RW.min = function(WW, RW) {
      return RW ^ (WW ^ RW) & -(WW < RW)
    }, RW.max = function(WW, RW) {
      return WW ^ (WW ^ RW) & -(WW < RW)
    }, RW.isPow2 = function(WW) {
      return !(WW & WW - 1) && !!WW
    }, RW.log2 = function(WW) {
      var RW, MW;
      return RW = (WW > 65535) << 4, RW |= MW = ((WW >>>= RW) > 255) << 3, RW |= MW = ((WW >>>= MW) > 15) << 2, (RW |= MW = ((WW >>>= MW) > 3) << 1) | (WW >>>= MW) >> 1
    }, RW.log10 = function(WW) {
      return WW >= 1e9 ? 9 : WW >= 1e8 ? 8 : WW >= 1e7 ? 7 : WW >= 1e6 ? 6 : WW >= 1e5 ? 5 : WW >= 1e4 ? 4 : WW >= 1e3 ? 3 : WW >= 100 ? 2 : WW >= 10 ? 1 : 0
    }, RW.popCount = function(WW) {
      return 16843009 * ((WW = (858993459 & (WW -= WW >>> 1 & 1431655765)) + (WW >>> 2 & 858993459)) + (WW >>> 4) & 252645135) >>> 24
    }, RW.countTrailingZeros = MW, RW.nextPow2 = function(WW) {
      return WW += 0 === WW, --WW, WW |= WW >>> 1, WW |= WW >>> 2, WW |= WW >>> 4, WW |= WW >>> 8, (WW |= WW >>> 16) + 1
    }, RW.prevPow2 = function(WW) {
      return WW |= WW >>> 1, WW |= WW >>> 2, WW |= WW >>> 4, WW |= WW >>> 8, (WW |= WW >>> 16) - (WW >>> 1)
    }, RW.parity = function(WW) {
      return WW ^= WW >>> 16, WW ^= WW >>> 8, WW ^= WW >>> 4, 27030 >>> (WW &= 15) & 1
    };
    var wW = new Array(256);
    ! function(WW) {
      for (var RW = 0; RW < 256; ++RW) {
        var MW = RW,
          wW = RW,
          CW = 7;
        for (MW >>>= 1; MW; MW >>>= 1) wW <<= 1, wW |= 1 & MW, --CW;
        WW[RW] = wW << CW & 255
      }
    }(wW), RW.reverse = function(WW) {
      return wW[255 & WW] << 24 | wW[WW >>> 8 & 255] << 16 | wW[WW >>> 16 & 255] << 8 | wW[WW >>> 24 & 255]
    }, RW.interleave2 = function(WW, RW) {
      return (WW = 1431655765 & ((WW = 858993459 & ((WW = 252645135 & ((WW = 16711935 & ((WW &= 65535) | WW << 8)) | WW << 4)) | WW << 2)) | WW << 1)) | (RW = 1431655765 & ((RW = 858993459 & ((RW = 252645135 & ((RW = 16711935 & ((RW &= 65535) | RW << 8)) | RW << 4)) | RW << 2)) | RW << 1)) << 1
    }, RW.deinterleave2 = function(WW, RW) {
      return (WW = 65535 & ((WW = 16711935 & ((WW = 252645135 & ((WW = 858993459 & ((WW = WW >>> RW & 1431655765) | WW >>> 1)) | WW >>> 2)) | WW >>> 4)) | WW >>> 16)) << 16 >> 16
    }, RW.interleave3 = function(WW, RW, MW) {
      return WW = 1227133513 & ((WW = 3272356035 & ((WW = 251719695 & ((WW = 4278190335 & ((WW &= 1023) | WW << 16)) | WW << 8)) | WW << 4)) | WW << 2), (WW |= (RW = 1227133513 & ((RW = 3272356035 & ((RW = 251719695 & ((RW = 4278190335 & ((RW &= 1023) | RW << 16)) | RW << 8)) | RW << 4)) | RW << 2)) << 1) | (MW = 1227133513 & ((MW = 3272356035 & ((MW = 251719695 & ((MW = 4278190335 & ((MW &= 1023) | MW << 16)) | MW << 8)) | MW << 4)) | MW << 2)) << 2
    }, RW.deinterleave3 = function(WW, RW) {
      return (WW = 1023 & ((WW = 4278190335 & ((WW = 251719695 & ((WW = 3272356035 & ((WW = WW >>> RW & 1227133513) | WW >>> 2)) | WW >>> 4)) | WW >>> 8)) | WW >>> 16)) << 22 >> 22
    }, RW.nextCombination = function(WW) {
      var RW = WW | WW - 1;
      return RW + 1 | (~RW & -~RW) - 1 >>> MW(WW) + 1
    }
  },
  36362: (WW, RW, MW) => {
    WW.exports = function(WW, RW, MW) {
      switch (arguments.length) {
        case 1:
          return wW = [], NW(CW = WW, CW, eW, !0), wW;
        case 2:
          return "function" === typeof RW ? NW(WW, WW, RW, !0) : function(WW, RW) {
            return wW = [], NW(WW, RW, eW, !1), wW
          }(WW, RW);
        case 3:
          return NW(WW, RW, MW, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var CW
    };
    var wW, CW = MW(36369),
      zR = MW(36387),
      AW = MW(36402);

    function bR(WW, RW) {
      for (var MW = 0; MW < WW; ++MW)
        if (!(RW[MW] <= RW[MW + WW])) return !0;
      return !1
    }

    function yR(WW, RW, MW, wW) {
      for (var CW = 0, zR = 0, AW = 0, yR = WW.length; AW < yR; ++AW) {
        var NW = WW[AW];
        if (!bR(RW, NW)) {
          for (var eW = 0; eW < 2 * RW; ++eW) MW[CW++] = NW[eW];
          wW[zR++] = AW
        }
      }
      return zR
    }

    function NW(WW, RW, MW, wW) {
      var bR = WW.length,
        NW = RW.length;
      if (!(bR <= 0 || NW <= 0)) {
        var eW = WW[0].length >>> 1;
        if (!(eW <= 0)) {
          var BW, tR = CW.mallocDouble(2 * eW * bR),
            TW = CW.mallocInt32(bR);
          if ((bR = yR(WW, eW, tR, TW)) > 0) {
            if (1 === eW && wW) zR.init(bR), BW = zR.sweepComplete(eW, MW, 0, bR, tR, TW, 0, bR, tR, TW);
            else {
              var gR = CW.mallocDouble(2 * eW * NW),
                iR = CW.mallocInt32(NW);
              (NW = yR(RW, eW, gR, iR)) > 0 && (zR.init(bR + NW), BW = 1 === eW ? zR.sweepBipartite(eW, MW, 0, bR, tR, TW, 0, NW, gR, iR) : AW(eW, MW, wW, bR, tR, TW, NW, gR, iR), CW.free(gR), CW.free(iR))
            }
            CW.free(tR), CW.free(TW)
          }
          return BW
        }
      }
    }

    function eW(WW, RW) {
      wW.push([WW, RW])
    }
  },
  36404: (WW, RW) => {
    var MW = "d",
      wW = "ax",
      CW = "fp",
      zR = "es",
      AW = "rs",
      bR = "re",
      yR = "rb",
      NW = "bs",
      eW = "be",
      BW = "bb",
      tR = [MW, wW, "vv", AW, bR, yR, "ri", NW, eW, BW, "bi"];

    function TW(WW) {
      var RW = "bruteForce" + (WW ? "Full" : "Partial"),
        wW = [],
        AW = tR.slice();
      WW || AW.splice(3, 0, CW);
      var bR = ["function " + RW + "(" + AW.join() + "){"];

      function yR(RW, CW) {
        var AW = function(WW, RW, wW) {
          var CW = "bruteForce" + (WW ? "Red" : "Blue") + (RW ? "Flip" : "") + (wW ? "Full" : ""),
            AW = ["function ", CW, "(", tR.join(), "){", "var ", zR, "=2*", MW, ";"],
            bR = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            yR = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (wW ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return WW ? AW.push(bR, "Q", ":", yR) : AW.push(yR, "Q", ":", bR), wW ? AW.push("if(y1<x0||x1<y0)continue;") : RW ? AW.push("if(y0<=x0||x1<y0)continue;") : AW.push("if(y0<x0||x1<y0)continue;"), AW.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), RW ? AW.push("yi,xi") : AW.push("xi,yi"), AW.push(");if(rv!==void 0)return rv;}}}"), {
            name: CW,
            code: AW.join("")
          }
        }(RW, CW, WW);
        wW.push(AW.code), bR.push("return " + AW.name + "(" + tR.join() + ");")
      }
      bR.push("if(re-rs>be-bs){"), WW ? (yR(!0, !1), bR.push("}else{"), yR(!1, !1)) : (bR.push("if(fp){"), yR(!0, !0), bR.push("}else{"), yR(!0, !1), bR.push("}}else{if(fp){"), yR(!1, !0), bR.push("}else{"), yR(!1, !1), bR.push("}")), bR.push("}}return " + RW);
      var NW = wW.join("") + bR.join("");
      return new Function(NW)()
    }
    RW.partial = TW(!1), RW.full = TW(!0)
  },
  36402: (WW, RW, MW) => {
    WW.exports = function(WW, RW, MW, zR, eW, XW, jR, kR, aR) {
      ! function(WW, RW) {
        var MW = 8 * CW.log2(RW + 1) * (WW + 1) | 0,
          zR = CW.nextPow2(oW * MW);
        FW.length < zR && (wW.free(FW), FW = wW.mallocInt32(zR));
        var AW = CW.nextPow2(lW * MW);
        fW.length < AW && (wW.free(fW), fW = wW.mallocDouble(AW))
      }(WW, zR + jR);
      var sW, dW = 0,
        pW = 2 * WW;
      QW(dW++, 0, 0, zR, 0, jR, MW ? 16 : 0, -1 / 0, 1 / 0), MW || QW(dW++, 0, 0, jR, 0, zR, 1, -1 / 0, 1 / 0);
      for (; dW > 0;) {
        var hW = (dW -= 1) * oW,
          UW = FW[hW],
          EW = FW[hW + 1],
          VW = FW[hW + 2],
          mR = FW[hW + 3],
          xR = FW[hW + 4],
          vR = FW[hW + 5],
          KW = dW * lW,
          uW = fW[KW],
          OW = fW[KW + 1],
          nW = 1 & vR,
          GW = !!(16 & vR),
          LW = eW,
          HW = XW,
          DW = kR,
          qR = aR;
        if (nW && (LW = kR, HW = aR, DW = eW, qR = XW), !(2 & vR && EW >= (VW = YW(WW, UW, EW, VW, LW, HW, OW))) && !(4 & vR && (EW = JW(WW, UW, EW, VW, LW, HW, uW)) >= VW)) {
          var ZW = VW - EW,
            SW = xR - mR;
          if (GW) {
            if (WW * ZW * (ZW + SW) < TW) {
              if (void 0 !== (sW = yR.scanComplete(WW, UW, RW, EW, VW, LW, HW, mR, xR, DW, qR))) return sW;
              continue
            }
          } else {
            if (WW * Math.min(ZW, SW) < BW) {
              if (void 0 !== (sW = AW(WW, UW, RW, nW, EW, VW, LW, HW, mR, xR, DW, qR))) return sW;
              continue
            }
            if (WW * ZW * SW < tR) {
              if (void 0 !== (sW = yR.scanBipartite(WW, UW, RW, nW, EW, VW, LW, HW, mR, xR, DW, qR))) return sW;
              continue
            }
          }
          var WR = gR(WW, UW, EW, VW, LW, HW, uW, OW);
          if (EW < WR)
            if (WW * (WR - EW) < BW) {
              if (void 0 !== (sW = bR(WW, UW + 1, RW, EW, WR, LW, HW, mR, xR, DW, qR))) return sW
            } else if (UW === WW - 2) {
            if (void 0 !== (sW = nW ? yR.sweepBipartite(WW, RW, mR, xR, DW, qR, EW, WR, LW, HW) : yR.sweepBipartite(WW, RW, EW, WR, LW, HW, mR, xR, DW, qR))) return sW
          } else QW(dW++, UW + 1, EW, WR, mR, xR, nW, -1 / 0, 1 / 0), QW(dW++, UW + 1, mR, xR, EW, WR, 1 ^ nW, -1 / 0, 1 / 0);
          if (WR < VW) {
            var RR = NW(WW, UW, mR, xR, DW, qR),
              MR = DW[pW * RR + UW],
              wR = iR(WW, UW, RR, xR, DW, qR, MR);
            if (wR < xR && QW(dW++, UW, WR, VW, wR, xR, (4 | nW) + (GW ? 16 : 0), MR, OW), mR < RR && QW(dW++, UW, WR, VW, mR, RR, (2 | nW) + (GW ? 16 : 0), uW, MR), RR + 1 === wR) {
              if (void 0 !== (sW = GW ? cR(WW, UW, RW, WR, VW, LW, HW, RR, DW, qR[RR]) : rR(WW, UW, RW, nW, WR, VW, LW, HW, RR, DW, qR[RR]))) return sW
            } else if (RR < wR) {
              var CR;
              if (GW) {
                if (WR < (CR = PW(WW, UW, WR, VW, LW, HW, MR))) {
                  var zM = iR(WW, UW, WR, CR, LW, HW, MR);
                  if (UW === WW - 2) {
                    if (WR < zM && void 0 !== (sW = yR.sweepComplete(WW, RW, WR, zM, LW, HW, RR, wR, DW, qR))) return sW;
                    if (zM < CR && void 0 !== (sW = yR.sweepBipartite(WW, RW, zM, CR, LW, HW, RR, wR, DW, qR))) return sW
                  } else WR < zM && QW(dW++, UW + 1, WR, zM, RR, wR, 16, -1 / 0, 1 / 0), zM < CR && (QW(dW++, UW + 1, zM, CR, RR, wR, 0, -1 / 0, 1 / 0), QW(dW++, UW + 1, RR, wR, zM, CR, 1, -1 / 0, 1 / 0))
                }
              } else WR < (CR = nW ? IW(WW, UW, WR, VW, LW, HW, MR) : PW(WW, UW, WR, VW, LW, HW, MR)) && (UW === WW - 2 ? sW = nW ? yR.sweepBipartite(WW, RW, RR, wR, DW, qR, WR, CR, LW, HW) : yR.sweepBipartite(WW, RW, WR, CR, LW, HW, RR, wR, DW, qR) : (QW(dW++, UW + 1, WR, CR, RR, wR, nW, -1 / 0, 1 / 0), QW(dW++, UW + 1, RR, wR, WR, CR, 1 ^ nW, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var wW = MW(36369),
      CW = MW(36374),
      zR = MW(36404),
      AW = zR.partial,
      bR = zR.full,
      yR = MW(36387),
      NW = MW(36410),
      eW = MW(36417),
      BW = 128,
      tR = 1 << 22,
      TW = 1 << 22,
      gR = eW("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      iR = eW("lo===p0", ["p0"]),
      YW = eW("lo<p0", ["p0"]),
      JW = eW("hi<=p0", ["p0"]),
      PW = eW("lo<=p0&&p0<=hi", ["p0"]),
      IW = eW("lo<p0&&p0<=hi", ["p0"]),
      oW = 6,
      lW = 2,
      FW = wW.mallocInt32(1024),
      fW = wW.mallocDouble(1024);

    function QW(WW, RW, MW, wW, CW, zR, AW, bR, yR) {
      var NW = oW * WW;
      FW[NW] = RW, FW[NW + 1] = MW, FW[NW + 2] = wW, FW[NW + 3] = CW, FW[NW + 4] = zR, FW[NW + 5] = AW;
      var eW = lW * WW;
      fW[eW] = bR, fW[eW + 1] = yR
    }

    function rR(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW, eW) {
      var BW = 2 * WW,
        tR = yR * BW,
        TW = NW[tR + RW];
      WW: for (var gR = CW, iR = CW * BW; gR < zR; ++gR, iR += BW) {
        var YW = AW[iR + RW],
          JW = AW[iR + RW + WW];
        if (!(TW < YW || JW < TW) && (!wW || TW !== YW)) {
          for (var PW, IW = bR[gR], oW = RW + 1; oW < WW; ++oW) {
            YW = AW[iR + oW], JW = AW[iR + oW + WW];
            var lW = NW[tR + oW],
              FW = NW[tR + oW + WW];
            if (JW < lW || FW < YW) continue WW
          }
          if (void 0 !== (PW = wW ? MW(eW, IW) : MW(IW, eW))) return PW
        }
      }
    }

    function cR(WW, RW, MW, wW, CW, zR, AW, bR, yR, NW) {
      var eW = 2 * WW,
        BW = bR * eW,
        tR = yR[BW + RW];
      WW: for (var TW = wW, gR = wW * eW; TW < CW; ++TW, gR += eW) {
        var iR = AW[TW];
        if (iR !== NW) {
          var YW = zR[gR + RW],
            JW = zR[gR + RW + WW];
          if (!(tR < YW || JW < tR)) {
            for (var PW = RW + 1; PW < WW; ++PW) {
              YW = zR[gR + PW], JW = zR[gR + PW + WW];
              var IW = yR[BW + PW],
                oW = yR[BW + PW + WW];
              if (JW < IW || oW < YW) continue WW
            }
            var lW = MW(iR, NW);
            if (void 0 !== lW) return lW
          }
        }
      }
    }
  },
  36410: (WW, RW, MW) => {
    WW.exports = function(WW, RW, MW, AW, bR, yR) {
      if (AW <= MW + 1) return MW;
      var NW = MW,
        eW = AW,
        BW = AW + MW >>> 1,
        tR = 2 * WW,
        TW = BW,
        gR = bR[tR * BW + RW];
      for (; NW < eW;) {
        if (eW - NW < CW) {
          zR(WW, RW, NW, eW, bR, yR), gR = bR[tR * BW + RW];
          break
        }
        var iR = eW - NW,
          YW = Math.random() * iR + NW | 0,
          JW = bR[tR * YW + RW],
          PW = Math.random() * iR + NW | 0,
          IW = bR[tR * PW + RW],
          oW = Math.random() * iR + NW | 0,
          lW = bR[tR * oW + RW];
        JW <= IW ? lW >= IW ? (TW = PW, gR = IW) : JW >= lW ? (TW = YW, gR = JW) : (TW = oW, gR = lW) : IW >= lW ? (TW = PW, gR = IW) : lW >= JW ? (TW = YW, gR = JW) : (TW = oW, gR = lW);
        for (var FW = tR * (eW - 1), fW = tR * TW, QW = 0; QW < tR; ++QW, ++FW, ++fW) {
          var rR = bR[FW];
          bR[FW] = bR[fW], bR[fW] = rR
        }
        var cR = yR[eW - 1];
        yR[eW - 1] = yR[TW], yR[TW] = cR;
        for (FW = tR * (eW - 1), fW = tR * (TW = wW(WW, RW, NW, eW - 1, bR, yR, gR)), QW = 0; QW < tR; ++QW, ++FW, ++fW) {
          rR = bR[FW];
          bR[FW] = bR[fW], bR[fW] = rR
        }
        cR = yR[eW - 1];
        if (yR[eW - 1] = yR[TW], yR[TW] = cR, BW < TW) {
          for (eW = TW - 1; NW < eW && bR[tR * (eW - 1) + RW] === gR;) eW -= 1;
          eW += 1
        } else {
          if (!(TW < BW)) break;
          for (NW = TW + 1; NW < eW && bR[tR * NW + RW] === gR;) NW += 1
        }
      }
      return wW(WW, RW, MW, BW, bR, yR, bR[tR * BW + RW])
    };
    var wW = MW(36417)("lo<p0", ["p0"]),
      CW = 8;

    function zR(WW, RW, MW, wW, CW, zR) {
      for (var AW = 2 * WW, bR = AW * (MW + 1) + RW, yR = MW + 1; yR < wW; ++yR, bR += AW)
        for (var NW = CW[bR], eW = yR, BW = AW * (yR - 1); eW > MW && CW[BW + RW] > NW; --eW, BW -= AW) {
          for (var tR = BW, TW = BW + AW, gR = 0; gR < AW; ++gR, ++tR, ++TW) {
            var iR = CW[tR];
            CW[tR] = CW[TW], CW[TW] = iR
          }
          var YW = zR[eW];
          zR[eW] = zR[eW - 1], zR[eW - 1] = YW
        }
    }
  },
  36417: WW => {
    WW.exports = function(WW, MW) {
      var wW = "abcdef".split("").concat(MW),
        CW = [];
      WW.indexOf("lo") >= 0 && CW.push("lo=e[k+n]");
      WW.indexOf("hi") >= 0 && CW.push("hi=e[k+o]");
      return wW.push(RW.replace("_", CW.join()).replace("$", WW)), Function.apply(void 0, wW)
    };
    var RW = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  36394: WW => {
    WW.exports = function(WW, wW) {
      wW <= 4 * RW ? MW(0, wW - 1, WW) : NW(0, wW - 1, WW)
    };
    var RW = 32;

    function MW(WW, RW, MW) {
      for (var wW = 2 * (WW + 1), CW = WW + 1; CW <= RW; ++CW) {
        for (var zR = MW[wW++], AW = MW[wW++], bR = CW, yR = wW - 2; bR-- > WW;) {
          var NW = MW[yR - 2],
            eW = MW[yR - 1];
          if (NW < zR) break;
          if (NW === zR && eW < AW) break;
          MW[yR] = NW, MW[yR + 1] = eW, yR -= 2
        }
        MW[yR] = zR, MW[yR + 1] = AW
      }
    }

    function wW(WW, RW, MW) {
      RW *= 2;
      var wW = MW[WW *= 2],
        CW = MW[WW + 1];
      MW[WW] = MW[RW], MW[WW + 1] = MW[RW + 1], MW[RW] = wW, MW[RW + 1] = CW
    }

    function CW(WW, RW, MW) {
      RW *= 2, MW[WW *= 2] = MW[RW], MW[WW + 1] = MW[RW + 1]
    }

    function zR(WW, RW, MW, wW) {
      RW *= 2, MW *= 2;
      var CW = wW[WW *= 2],
        zR = wW[WW + 1];
      wW[WW] = wW[RW], wW[WW + 1] = wW[RW + 1], wW[RW] = wW[MW], wW[RW + 1] = wW[MW + 1], wW[MW] = CW, wW[MW + 1] = zR
    }

    function AW(WW, RW, MW, wW, CW) {
      RW *= 2, CW[WW *= 2] = CW[RW], CW[RW] = MW, CW[WW + 1] = CW[RW + 1], CW[RW + 1] = wW
    }

    function bR(WW, RW, MW) {
      RW *= 2;
      var wW = MW[WW *= 2],
        CW = MW[RW];
      return !(wW < CW) && (wW !== CW || MW[WW + 1] > MW[RW + 1])
    }

    function yR(WW, RW, MW, wW) {
      var CW = wW[WW *= 2];
      return CW < RW || CW === RW && wW[WW + 1] < MW
    }

    function NW(WW, eW, BW) {
      var tR = (eW - WW + 1) / 6 | 0,
        TW = WW + tR,
        gR = eW - tR,
        iR = WW + eW >> 1,
        YW = iR - tR,
        JW = iR + tR,
        PW = TW,
        IW = YW,
        oW = iR,
        lW = JW,
        FW = gR,
        fW = WW + 1,
        QW = eW - 1,
        rR = 0;
      bR(PW, IW, BW) && (rR = PW, PW = IW, IW = rR), bR(lW, FW, BW) && (rR = lW, lW = FW, FW = rR), bR(PW, oW, BW) && (rR = PW, PW = oW, oW = rR), bR(IW, oW, BW) && (rR = IW, IW = oW, oW = rR), bR(PW, lW, BW) && (rR = PW, PW = lW, lW = rR), bR(oW, lW, BW) && (rR = oW, oW = lW, lW = rR), bR(IW, FW, BW) && (rR = IW, IW = FW, FW = rR), bR(IW, oW, BW) && (rR = IW, IW = oW, oW = rR), bR(lW, FW, BW) && (rR = lW, lW = FW, FW = rR);
      for (var cR = BW[2 * IW], XW = BW[2 * IW + 1], jR = BW[2 * lW], kR = BW[2 * lW + 1], aR = 2 * PW, sW = 2 * oW, dW = 2 * FW, pW = 2 * TW, hW = 2 * iR, UW = 2 * gR, EW = 0; EW < 2; ++EW) {
        var VW = BW[aR + EW],
          mR = BW[sW + EW],
          xR = BW[dW + EW];
        BW[pW + EW] = VW, BW[hW + EW] = mR, BW[UW + EW] = xR
      }
      CW(YW, WW, BW), CW(JW, eW, BW);
      for (var vR = fW; vR <= QW; ++vR)
        if (yR(vR, cR, XW, BW)) vR !== fW && wW(vR, fW, BW), ++fW;
        else if (!yR(vR, jR, kR, BW))
        for (;;) {
          if (yR(QW, jR, kR, BW)) {
            yR(QW, cR, XW, BW) ? (zR(vR, fW, QW, BW), ++fW, --QW) : (wW(vR, QW, BW), --QW);
            break
          }
          if (--QW < vR) break
        }
      AW(WW, fW - 1, cR, XW, BW), AW(eW, QW + 1, jR, kR, BW), fW - 2 - WW <= RW ? MW(WW, fW - 2, BW) : NW(WW, fW - 2, BW), eW - (QW + 2) <= RW ? MW(QW + 2, eW, BW) : NW(QW + 2, eW, BW), QW - fW <= RW ? MW(fW, QW, BW) : NW(fW, QW, BW)
    }
  },
  36387: (WW, RW, MW) => {
    WW.exports = {
      init: function(WW) {
        var RW = CW.nextPow2(WW);
        yR.length < RW && (wW.free(yR), yR = wW.mallocInt32(RW));
        NW.length < RW && (wW.free(NW), NW = wW.mallocInt32(RW));
        eW.length < RW && (wW.free(eW), eW = wW.mallocInt32(RW));
        BW.length < RW && (wW.free(BW), BW = wW.mallocInt32(RW));
        tR.length < RW && (wW.free(tR), tR = wW.mallocInt32(RW));
        TW.length < RW && (wW.free(TW), TW = wW.mallocInt32(RW));
        var MW = 8 * RW;
        gR.length < MW && (wW.free(gR), gR = wW.mallocDouble(MW))
      },
      sweepBipartite: function(WW, RW, MW, wW, CW, bR, tR, TW, JW, PW) {
        for (var IW = 0, oW = 2 * WW, lW = WW - 1, FW = oW - 1, fW = MW; fW < wW; ++fW) {
          var QW = bR[fW],
            rR = oW * fW;
          gR[IW++] = CW[rR + lW], gR[IW++] = -(QW + 1), gR[IW++] = CW[rR + FW], gR[IW++] = QW
        }
        for (fW = tR; fW < TW; ++fW) {
          QW = PW[fW] + AW;
          var cR = oW * fW;
          gR[IW++] = JW[cR + lW], gR[IW++] = -QW, gR[IW++] = JW[cR + FW], gR[IW++] = QW
        }
        var XW = IW >>> 1;
        zR(gR, XW);
        var jR = 0,
          kR = 0;
        for (fW = 0; fW < XW; ++fW) {
          var aR = 0 | gR[2 * fW + 1];
          if (aR >= AW) iR(eW, BW, kR--, aR = aR - AW | 0);
          else if (aR >= 0) iR(yR, NW, jR--, aR);
          else if (aR <= -AW) {
            aR = -aR - AW | 0;
            for (var sW = 0; sW < jR; ++sW) {
              if (void 0 !== (dW = RW(yR[sW], aR))) return dW
            }
            YW(eW, BW, kR++, aR)
          } else {
            aR = -aR - 1 | 0;
            for (sW = 0; sW < kR; ++sW) {
              var dW;
              if (void 0 !== (dW = RW(aR, eW[sW]))) return dW
            }
            YW(yR, NW, jR++, aR)
          }
        }
      },
      sweepComplete: function(WW, RW, MW, wW, CW, AW, bR, JW, PW, IW) {
        for (var oW = 0, lW = 2 * WW, FW = WW - 1, fW = lW - 1, QW = MW; QW < wW; ++QW) {
          var rR = AW[QW] + 1 << 1,
            cR = lW * QW;
          gR[oW++] = CW[cR + FW], gR[oW++] = -rR, gR[oW++] = CW[cR + fW], gR[oW++] = rR
        }
        for (QW = bR; QW < JW; ++QW) {
          rR = IW[QW] + 1 << 1;
          var XW = lW * QW;
          gR[oW++] = PW[XW + FW], gR[oW++] = 1 | -rR, gR[oW++] = PW[XW + fW], gR[oW++] = 1 | rR
        }
        var jR = oW >>> 1;
        zR(gR, jR);
        var kR = 0,
          aR = 0,
          sW = 0;
        for (QW = 0; QW < jR; ++QW) {
          var dW = 0 | gR[2 * QW + 1],
            pW = 1 & dW;
          if (QW < jR - 1 && dW >> 1 === gR[2 * QW + 3] >> 1 && (pW = 2, QW += 1), dW < 0) {
            for (var hW = -(dW >> 1) - 1, UW = 0; UW < sW; ++UW) {
              if (void 0 !== (EW = RW(tR[UW], hW))) return EW
            }
            if (0 !== pW)
              for (UW = 0; UW < kR; ++UW) {
                if (void 0 !== (EW = RW(yR[UW], hW))) return EW
              }
            if (1 !== pW)
              for (UW = 0; UW < aR; ++UW) {
                var EW;
                if (void 0 !== (EW = RW(eW[UW], hW))) return EW
              }
            0 === pW ? YW(yR, NW, kR++, hW) : 1 === pW ? YW(eW, BW, aR++, hW) : 2 === pW && YW(tR, TW, sW++, hW)
          } else {
            hW = (dW >> 1) - 1;
            0 === pW ? iR(yR, NW, kR--, hW) : 1 === pW ? iR(eW, BW, aR--, hW) : 2 === pW && iR(tR, TW, sW--, hW)
          }
        }
      },
      scanBipartite: function(WW, RW, MW, wW, CW, bR, eW, BW, tR, TW, JW, PW) {
        var IW = 0,
          oW = 2 * WW,
          lW = RW,
          FW = RW + WW,
          fW = 1,
          QW = 1;
        wW ? QW = AW : fW = AW;
        for (var rR = CW; rR < bR; ++rR) {
          var cR = rR + fW,
            XW = oW * rR;
          gR[IW++] = eW[XW + lW], gR[IW++] = -cR, gR[IW++] = eW[XW + FW], gR[IW++] = cR
        }
        for (rR = tR; rR < TW; ++rR) {
          cR = rR + QW;
          var jR = oW * rR;
          gR[IW++] = JW[jR + lW], gR[IW++] = -cR
        }
        var kR = IW >>> 1;
        zR(gR, kR);
        var aR = 0;
        for (rR = 0; rR < kR; ++rR) {
          var sW = 0 | gR[2 * rR + 1];
          if (sW < 0) {
            var dW = !1;
            if ((cR = -sW) >= AW ? (dW = !wW, cR -= AW) : (dW = !!wW, cR -= 1), dW) YW(yR, NW, aR++, cR);
            else {
              var pW = PW[cR],
                hW = oW * cR,
                UW = JW[hW + RW + 1],
                EW = JW[hW + RW + 1 + WW];
              WW: for (var VW = 0; VW < aR; ++VW) {
                var mR = yR[VW],
                  xR = oW * mR;
                if (!(EW < eW[xR + RW + 1] || eW[xR + RW + 1 + WW] < UW)) {
                  for (var vR = RW + 2; vR < WW; ++vR)
                    if (JW[hW + vR + WW] < eW[xR + vR] || eW[xR + vR + WW] < JW[hW + vR]) continue WW;
                  var KW, uW = BW[mR];
                  if (void 0 !== (KW = wW ? MW(pW, uW) : MW(uW, pW))) return KW
                }
              }
            }
          } else iR(yR, NW, aR--, sW - fW)
        }
      },
      scanComplete: function(WW, RW, MW, wW, CW, bR, NW, eW, BW, tR, TW) {
        for (var iR = 0, YW = 2 * WW, JW = RW, PW = RW + WW, IW = wW; IW < CW; ++IW) {
          var oW = IW + AW,
            lW = YW * IW;
          gR[iR++] = bR[lW + JW], gR[iR++] = -oW, gR[iR++] = bR[lW + PW], gR[iR++] = oW
        }
        for (IW = eW; IW < BW; ++IW) {
          oW = IW + 1;
          var FW = YW * IW;
          gR[iR++] = tR[FW + JW], gR[iR++] = -oW
        }
        var fW = iR >>> 1;
        zR(gR, fW);
        var QW = 0;
        for (IW = 0; IW < fW; ++IW) {
          var rR = 0 | gR[2 * IW + 1];
          if (rR < 0) {
            if ((oW = -rR) >= AW) yR[QW++] = oW - AW;
            else {
              var cR = TW[oW -= 1],
                XW = YW * oW,
                jR = tR[XW + RW + 1],
                kR = tR[XW + RW + 1 + WW];
              WW: for (var aR = 0; aR < QW; ++aR) {
                var sW = yR[aR],
                  dW = NW[sW];
                if (dW === cR) break;
                var pW = YW * sW;
                if (!(kR < bR[pW + RW + 1] || bR[pW + RW + 1 + WW] < jR)) {
                  for (var hW = RW + 2; hW < WW; ++hW)
                    if (tR[XW + hW + WW] < bR[pW + hW] || bR[pW + hW + WW] < tR[XW + hW]) continue WW;
                  var UW = MW(dW, cR);
                  if (void 0 !== UW) return UW
                }
              }
            }
          } else {
            for (oW = rR - AW, aR = QW - 1; aR >= 0; --aR)
              if (yR[aR] === oW) {
                for (hW = aR + 1; hW < QW; ++hW) yR[hW - 1] = yR[hW];
                break
              }-- QW
          }
        }
      }
    };
    var wW = MW(36369),
      CW = MW(36374),
      zR = MW(36394),
      AW = 1 << 28,
      bR = 1024,
      yR = wW.mallocInt32(bR),
      NW = wW.mallocInt32(bR),
      eW = wW.mallocInt32(bR),
      BW = wW.mallocInt32(bR),
      tR = wW.mallocInt32(bR),
      TW = wW.mallocInt32(bR),
      gR = wW.mallocDouble(8192);

    function iR(WW, RW, MW, wW) {
      var CW = RW[wW],
        zR = WW[MW - 1];
      WW[CW] = zR, RW[zR] = CW
    }

    function YW(WW, RW, MW, wW) {
      WW[MW] = wW, RW[wW] = MW
    }
  },
  36377: WW => {
    function RW(WW, MW, wW) {
      var CW = 0 | WW[wW];
      if (CW <= 0) return [];
      var zR, AW = new Array(CW);
      if (wW === WW.length - 1)
        for (zR = 0; zR < CW; ++zR) AW[zR] = MW;
      else
        for (zR = 0; zR < CW; ++zR) AW[zR] = RW(WW, MW, wW + 1);
      return AW
    }
    WW.exports = function(WW, MW) {
      switch ("undefined" === typeof MW && (MW = 0), typeof WW) {
        case "number":
          if (WW > 0) return function(WW, RW) {
            var MW, wW;
            for (MW = new Array(WW), wW = 0; wW < WW; ++wW) MW[wW] = RW;
            return MW
          }(0 | WW, MW);
          break;
        case "object":
          if ("number" === typeof WW.length) return RW(WW, MW, 0)
      }
      return []
    }
  },
  36330: (WW, RW, MW) => {
    WW.exports = function() {
      var WW = this;
      this.components = {}, this.comps = this.components;
      var RW = this.components,
        MW = 1,
        CW = {},
        zR = [],
        AW = [],
        bR = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function yR(WW, MW) {
        var wW = RW[MW],
          zR = CW[MW],
          AW = zR.hash[WW];
        AW && (zR.remove(WW), wW.NRW && (wW.multi ? (AW.forEach((RW => {
          RW && wW.NRW(WW, RW)
        })), AW.length = 0) : wW.NRW(WW, AW)), bR.removals.push(zR), NW())
      }

      function NW() {
        bR.timeout || (bR.timeout = !0, setTimeout(eW, 1))
      }

      function eW() {
        bR.timeout = !1, BW()
      }

      function BW() {
        bR.multiComps.length && function(WW) {
          for (var RW = 0; RW < WW.length; RW++) {
            var {
              entID: MW,
              data: wW
            } = WW[RW], CW = wW.hash[MW];
            if (CW) {
              for (var zR = 0; zR < CW.length; zR++) CW[zR] || (CW.splice(zR, 1), zR--);
              0 === CW.length && (wW.remove(MW), bR.removals.push(wW))
            }
          }
          WW.length = 0
        }(bR.multiComps), bR.removals.length && function(WW) {
          for (var RW = 0; RW < WW.length; RW++) {
            WW[RW].flush()
          }
          WW.length = 0
        }(bR.removals)
      }
      this.FC = CW, this._systems = zR, this._renderSystems = AW, this.fwW = function(RW) {
        var wW = MW++;
        return Array.isArray(RW) && RW.forEach((RW => WW.ERW(wW, RW))), wW
      }, this.deleteEntity = function(RW) {
        return Object.keys(CW).forEach((WW => {
          CW[WW].hash[RW] && yR(RW, WW)
        })), WW
      }, this.nbW = function(WW) {
        if (!WW) throw new Error("Missing component definition");
        var MW = WW.name;
        if (!MW) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof MW) throw new Error("Component name must be a string.");
        if ("" === MW) throw new Error("Component name must be a non-empty string.");
        if (CW[MW]) throw new Error(`Component ${MW} already exists.`);
        var bR = {};
        return bR.name = MW, bR.multi = !!WW.multi, bR.order = isNaN(WW.order) ? 99 : WW.order, bR.stateConstructor = WW.stateConstructor || null, bR.state = WW.state || {}, bR.Tk = WW.Tk || null, bR.NRW = WW.NRW || null, bR.system = WW.system || null, bR.okW = WW.okW || null, RW[MW] = bR, CW[MW] = new wW, CW[MW]._pendingMultiCleanup = !1, CW[MW]._multiCleanupIDs = bR.multi ? [] : null, bR.system && (zR.push(MW), zR.sort(((WW, MW) => RW[WW].order - RW[MW].order))), bR.okW && (AW.push(MW), AW.sort(((WW, MW) => RW[WW].order - RW[MW].order))), MW
      }, this.overwriteComponent = function(WW, MW) {
        var wW = RW[WW];
        if (!wW) throw new Error(`Unknown component: ${WW}`);
        if (!MW) throw new Error("Missing component definition");
        if (wW.name !== MW.name) throw new Error("Overwriting component must use the same name property.");
        var bR = {};
        bR.name = WW, bR.multi = !!MW.multi, bR.order = isNaN(MW.order) ? 99 : MW.order, bR.state = MW.state || {}, bR.Tk = MW.Tk || null, bR.NRW = MW.NRW || null, bR.system = MW.system || null, bR.okW = MW.okW || null, RW[WW] = bR, CW[WW]._pendingMultiCleanup = !1, CW[WW]._multiCleanupIDs = bR.multi ? [] : null;
        var yR = zR.indexOf(WW);
        bR.system && yR < 0 && zR.push(WW), !bR.system && yR >= 0 && zR.splice(yR, 1), zR.sort(((WW, MW) => RW[WW].order - RW[MW].order));
        var NW = AW.indexOf(WW);
        bR.okW && NW < 0 && AW.push(WW), !bR.okW && NW >= 0 && AW.splice(NW, 1), AW.sort(((WW, MW) => RW[WW].order - RW[MW].order));
        var eW = bR.state;
        return this.hRW(WW).forEach((WW => {
          for (var RW in eW) RW in WW || (WW[RW] = eW[RW]);
          bR.Tk && bR.Tk(WW.URW, WW)
        })), WW
      }, this.deleteComponent = function(MW) {
        var wW = CW[MW];
        if (!wW) throw new Error(`Unknown component: ${MW}`);
        wW.flush(), wW.list.forEach((WW => {
          WW && yR(WW.URW || WW[0].URW, MW)
        }));
        var bR = zR.indexOf(MW),
          NW = AW.indexOf(MW);
        return bR > -1 && zR.splice(bR, 1), NW > -1 && AW.splice(NW, 1), CW[MW].dispose(), delete CW[MW], delete RW[MW], WW
      }, this.ERW = function(WW, MW, wW) {
        var zR, AW = RW[MW],
          bR = CW[MW];
        if (!bR) throw new Error(`Unknown component: ${MW}.`);
        if (bR.hash[WW] && !AW.multi) throw new Error(`Entity ${WW} already has component: ${MW}.`);
        if (AW.stateConstructor) {
          if (!(zR = new AW.stateConstructor).hasOwnProperty("URW")) throw new Error(`Component ${AW.name} stateConstructor type does not have property __id`);
          Object.assign(zR, AW.state, wW)
        } else zR = {
          URW: WW,
          ...AW.state,
          ...wW
        };
        if (zR.URW = WW, AW.multi) {
          var yR = bR.hash[WW];
          yR || (yR = [], bR.add(WW, yR)), yR.push(zR)
        } else bR.add(WW, zR);
        return AW.Tk && AW.Tk(WW, zR), this
      }, this.EAW = function(WW, RW) {
        var MW = CW[RW];
        if (!MW) throw new Error(`Unknown component: ${RW}.`);
        return !!MW.hash[WW]
      }, this.VRW = function(RW, MW) {
        if (!CW[MW]) throw new Error(`Unknown component: ${MW}.`);
        return yR(RW, MW), WW
      }, this.getState = function(WW, RW) {
        var MW = CW[RW];
        if (!MW) throw new Error(`Unknown component: ${RW}.`);
        return MW.hash[WW]
      }, this.hRW = function(WW) {
        var RW = CW[WW];
        if (!RW) throw new Error(`Unknown component: ${WW}.`);
        return BW(), RW.list
      }, this.fbW = function(WW) {
        if (!CW[WW]) throw new Error(`Unknown component: ${WW}.`);
        var RW = CW[WW].hash;
        return WW => RW[WW]
      }, this.kyW = function(WW) {
        if (!CW[WW]) throw new Error(`Unknown component: ${WW}.`);
        var RW = CW[WW].hash;
        return WW => !!RW[WW]
      }, this.WR = function(MW) {
        BW();
        for (var wW = 0; wW < zR.length; wW++) {
          var AW = zR[wW],
            bR = RW[AW],
            yR = CW[AW];
          bR.system(MW, yR.list), BW()
        }
        return WW
      }, this.render = function(MW) {
        BW();
        for (var wW = 0; wW < AW.length; wW++) {
          var zR = AW[wW],
            bR = RW[zR],
            yR = CW[zR];
          bR.okW(MW, yR.list), BW()
        }
        return WW
      }, this.removeMultiComponent = function(MW, wW, zR) {
        var AW = RW[wW],
          yR = CW[wW];
        if (!yR) throw new Error(`Unknown component: ${wW}.`);
        if (!AW.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(WW, RW, MW, wW) {
          var CW = MW.hash[WW];
          if (CW) {
            var zR = CW[wW];
            zR && (CW[wW] = null, RW.NRW && RW.NRW(WW, zR), bR.multiComps.push({
              entID: WW,
              data: MW
            }), NW())
          }
        }(MW, AW, yR, zR), WW
      }
    };
    var wW = MW(36333)
  },
  36333: WW => {
    function RW(WW, RW) {
      var MW = WW._map[RW];
      if (delete WW.hash[RW], delete WW._map[RW], MW === WW.list.length - 1) WW.list.pop(), WW._idList.pop();
      else {
        var wW = WW.list.pop();
        WW.list[MW] = wW;
        var CW = WW._idList.pop();
        WW._idList[MW] = CW, WW._map[CW] = MW
      }
    }
    WW.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(WW, RW) {
        if ("number" === typeof this._map[WW]) {
          var MW = this._map[WW];
          this.hash[WW] = RW, this.list[MW] = RW, this._idList[MW] = WW
        } else this._map[WW] = this.list.length, this.hash[WW] = RW, this.list.push(RW), this._idList.push(WW)
      }
      remove(WW) {
        var RW = this._map[WW];
        this.hash[WW] = null, this.list[RW] = null, this._pendingRemovals.push(WW)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var WW = 0; WW < this._pendingRemovals.length; WW++) {
          var MW = this._pendingRemovals[WW];
          null === this.hash[MW] && RW(this, MW)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  35795: WW => {
    WW.exports = function(WW) {
      for (var RW = new Array(WW), MW = 0; MW < WW; ++MW) RW[MW] = MW;
      return RW
    }
  },
  35804: WW => {
    function RW(WW) {
      return !!WW.constructor && "function" === typeof WW.constructor.isBuffer && WW.constructor.isBuffer(WW)
    }
    WW.exports = function(WW) {
      return null != WW && (RW(WW) || function(WW) {
        return "function" === typeof WW.readFloatLE && "function" === typeof WW.slice && RW(WW.slice(0, 0))
      }(WW) || !!WW._isBuffer)
    }
  },
  36109: (WW, RW, MW) => {
    WW = MW.nmd(WW);
    var wW = "__lodash_hash_undefined__",
      CW = 9007199254740991,
      zR = "[object Arguments]",
      AW = "[object Boolean]",
      bR = "[object Date]",
      yR = "[object Function]",
      NW = "[object GeneratorFunction]",
      eW = "[object Map]",
      BW = "[object Number]",
      tR = "[object Object]",
      TW = "[object Promise]",
      gR = "[object RegExp]",
      iR = "[object Set]",
      YW = "[object String]",
      JW = "[object Symbol]",
      PW = "[object WeakMap]",
      IW = "[object ArrayBuffer]",
      oW = "[object DataView]",
      lW = "[object Float32Array]",
      FW = "[object Float64Array]",
      fW = "[object Int8Array]",
      QW = "[object Int16Array]",
      rR = "[object Int32Array]",
      cR = "[object Uint8Array]",
      XW = "[object Uint8ClampedArray]",
      jR = "[object Uint16Array]",
      kR = "[object Uint32Array]",
      aR = /\w*$/,
      sW = /^\[object .+?Constructor\]$/,
      dW = /^(?:0|[1-9]\d*)$/,
      pW = {};
    pW[zR] = pW["[object Array]"] = pW[IW] = pW[oW] = pW[AW] = pW[bR] = pW[lW] = pW[FW] = pW[fW] = pW[QW] = pW[rR] = pW[eW] = pW[BW] = pW[tR] = pW[gR] = pW[iR] = pW[YW] = pW[JW] = pW[cR] = pW[XW] = pW[jR] = pW[kR] = !0, pW["[object Error]"] = pW[yR] = pW[PW] = !1;
    var hW = "object" == typeof MW.g && MW.g && MW.g.Object === Object && MW.g,
      UW = "object" == typeof self && self && self.Object === Object && self,
      EW = hW || UW || Function("return this")(),
      VW = RW && !RW.nodeType && RW,
      mR = VW && WW && !WW.nodeType && WW,
      xR = mR && mR.exports === VW;

    function vR(WW, RW) {
      return WW.set(RW[0], RW[1]), WW
    }

    function KW(WW, RW) {
      return WW.add(RW), WW
    }

    function uW(WW, RW, MW, wW) {
      var CW = -1,
        zR = WW ? WW.length : 0;
      for (wW && zR && (MW = WW[++CW]); ++CW < zR;) MW = RW(MW, WW[CW], CW, WW);
      return MW
    }

    function OW(WW) {
      var RW = !1;
      if (null != WW && "function" != typeof WW.toString) try {
        RW = !!(WW + "")
      } catch (MW) {}
      return RW
    }

    function nW(WW) {
      var RW = -1,
        MW = Array(WW.size);
      return WW.forEach((function(WW, wW) {
        MW[++RW] = [wW, WW]
      })), MW
    }

    function GW(WW, RW) {
      return function(MW) {
        return WW(RW(MW))
      }
    }

    function LW(WW) {
      var RW = -1,
        MW = Array(WW.size);
      return WW.forEach((function(WW) {
        MW[++RW] = WW
      })), MW
    }
    var HW = Array.prototype,
      DW = Function.prototype,
      qR = Object.prototype,
      ZW = EW["__core-js_shared__"],
      SW = function() {
        var WW = /[^.]+$/.exec(ZW && ZW.keys && ZW.keys.IE_PROTO || "");
        return WW ? "Symbol(src)_1." + WW : ""
      }(),
      WR = DW.toString,
      RR = qR.hasOwnProperty,
      MR = qR.toString,
      wR = RegExp("^" + WR.call(RR).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      CR = xR ? EW.fw : void 0,
      zM = EW.Symbol,
      AR = EW.Uint8Array,
      bM = GW(Object.getPrototypeOf, Object),
      yM = Object.create,
      NR = qR.propertyIsEnumerable,
      eR = HW.splice,
      BR = Object.getOwnPropertySymbols,
      tM = CR ? CR.isBuffer : void 0,
      TR = GW(Object.keys, Object),
      gM = xM(EW, "DataView"),
      iM = xM(EW, "Map"),
      YR = xM(EW, "Promise"),
      JR = xM(EW, "Set"),
      PR = xM(EW, "WeakMap"),
      IR = xM(Object, "create"),
      oR = nR(gM),
      lR = nR(iM),
      FR = nR(YR),
      fR = nR(JR),
      QR = nR(PR),
      rM = zM ? zM.prototype : void 0,
      cM = rM ? rM.valueOf : void 0;

    function XR(WW) {
      var RW = -1,
        MW = WW ? WW.length : 0;
      for (this.clear(); ++RW < MW;) {
        var wW = WW[RW];
        this.set(wW[0], wW[1])
      }
    }

    function jM(WW) {
      var RW = -1,
        MW = WW ? WW.length : 0;
      for (this.clear(); ++RW < MW;) {
        var wW = WW[RW];
        this.set(wW[0], wW[1])
      }
    }

    function kM(WW) {
      var RW = -1,
        MW = WW ? WW.length : 0;
      for (this.clear(); ++RW < MW;) {
        var wW = WW[RW];
        this.set(wW[0], wW[1])
      }
    }

    function aM(WW) {
      this.__data__ = new jM(WW)
    }

    function sR(WW, RW) {
      var MW = LR(WW) || function(WW) {
          return function(WW) {
            return function(WW) {
              return !!WW && "object" == typeof WW
            }(WW) && HR(WW)
          }(WW) && RR.call(WW, "callee") && (!NR.call(WW, "callee") || MR.call(WW) == zR)
        }(WW) ? function(WW, RW) {
          for (var MW = -1, wW = Array(WW); ++MW < WW;) wW[MW] = RW(MW);
          return wW
        }(WW.length, String) : [],
        wW = MW.length,
        CW = !!wW;
      for (var AW in WW) !RW && !RR.call(WW, AW) || CW && ("length" == AW || uR(AW, wW)) || MW.push(AW);
      return MW
    }

    function dR(WW, RW, MW) {
      var wW = WW[RW];
      RR.call(WW, RW) && GR(wW, MW) && (void 0 !== MW || RW in WW) || (WW[RW] = MW)
    }

    function pR(WW, RW) {
      for (var MW = WW.length; MW--;)
        if (GR(WW[MW][0], RW)) return MW;
      return -1
    }

    function hR(WW, RW, MW, wW, CW, TW, PW) {
      var sW;
      if (wW && (sW = TW ? wW(WW, CW, TW, PW) : wW(WW)), void 0 !== sW) return sW;
      if (!ZR(WW)) return WW;
      var dW = LR(WW);
      if (dW) {
        if (sW = function(WW) {
            var RW = WW.length,
              MW = WW.constructor(RW);
            RW && "string" == typeof WW[0] && RR.call(WW, "index") && (MW.index = WW.index, MW.input = WW.input);
            return MW
          }(WW), !RW) return function(WW, RW) {
          var MW = -1,
            wW = WW.length;
          RW || (RW = Array(wW));
          for (; ++MW < wW;) RW[MW] = WW[MW];
          return RW
        }(WW, sW)
      } else {
        var hW = KR(WW),
          UW = hW == yR || hW == NW;
        if (DR(WW)) return function(WW, RW) {
          if (RW) return WW.slice();
          var MW = new WW.constructor(WW.length);
          return WW.copy(MW), MW
        }(WW, RW);
        if (hW == tR || hW == zR || UW && !TW) {
          if (OW(WW)) return TW ? WW : {};
          if (sW = function(WW) {
              return "function" != typeof WW.constructor || OR(WW) ? {} : (RW = bM(WW), ZR(RW) ? yM(RW) : {});
              var RW
            }(UW ? {} : WW), !RW) return function(WW, RW) {
            return VR(WW, vM(WW), RW)
          }(WW, function(WW, RW) {
            return WW && VR(RW, SR(RW), WW)
          }(sW, WW))
        } else {
          if (!pW[hW]) return TW ? WW : {};
          sW = function(WW, RW, MW, wW) {
            var CW = WW.constructor;
            switch (RW) {
              case IW:
                return ER(WW);
              case AW:
              case bR:
                return new CW(+WW);
              case oW:
                return function(WW, RW) {
                  var MW = RW ? ER(WW.buffer) : WW.buffer;
                  return new WW.constructor(MW, WW.byteOffset, WW.byteLength)
                }(WW, wW);
              case lW:
              case FW:
              case fW:
              case QW:
              case rR:
              case cR:
              case XW:
              case jR:
              case kR:
                return function(WW, RW) {
                  var MW = RW ? ER(WW.buffer) : WW.buffer;
                  return new WW.constructor(MW, WW.byteOffset, WW.length)
                }(WW, wW);
              case eW:
                return function(WW, RW, MW) {
                  var wW = RW ? MW(nW(WW), !0) : nW(WW);
                  return uW(wW, vR, new WW.constructor)
                }(WW, wW, MW);
              case BW:
              case YW:
                return new CW(WW);
              case gR:
                return function(WW) {
                  var RW = new WW.constructor(WW.source, aR.exec(WW));
                  return RW.lastIndex = WW.lastIndex, RW
                }(WW);
              case iR:
                return function(WW, RW, MW) {
                  var wW = RW ? MW(LW(WW), !0) : LW(WW);
                  return uW(wW, KW, new WW.constructor)
                }(WW, wW, MW);
              case JW:
                return zR = WW, cM ? Object(cM.call(zR)) : {}
            }
            var zR
          }(WW, hW, hR, RW)
        }
      }
      PW || (PW = new aM);
      var EW = PW.get(WW);
      if (EW) return EW;
      if (PW.set(WW, sW), !dW) var VW = MW ? function(WW) {
        return function(WW, RW, MW) {
          var wW = RW(WW);
          return LR(WW) ? wW : function(WW, RW) {
            for (var MW = -1, wW = RW.length, CW = WW.length; ++MW < wW;) WW[CW + MW] = RW[MW];
            return WW
          }(wW, MW(WW))
        }(WW, SR, vM)
      }(WW) : SR(WW);
      return function(WW, RW) {
        for (var MW = -1, wW = WW ? WW.length : 0; ++MW < wW && !1 !== RW(WW[MW], MW, WW););
      }(VW || WW, (function(CW, zR) {
        VW && (CW = WW[zR = CW]), dR(sW, zR, hR(CW, RW, MW, wW, zR, WW, PW))
      })), sW
    }

    function UR(WW) {
      return !(!ZR(WW) || (RW = WW, SW && SW in RW)) && (qM(WW) || OW(WW) ? wR : sW).test(nR(WW));
      var RW
    }

    function ER(WW) {
      var RW = new WW.constructor(WW.byteLength);
      return new AR(RW).set(new AR(WW)), RW
    }

    function VR(WW, RW, MW, wW) {
      MW || (MW = {});
      for (var CW = -1, zR = RW.length; ++CW < zR;) {
        var AW = RW[CW],
          bR = wW ? wW(MW[AW], WW[AW], AW, MW, WW) : void 0;
        dR(MW, AW, void 0 === bR ? WW[AW] : bR)
      }
      return MW
    }

    function mM(WW, RW) {
      var MW = WW.__data__;
      return function(WW) {
        var RW = typeof WW;
        return "string" == RW || "number" == RW || "symbol" == RW || "boolean" == RW ? "__proto__" !== WW : null === WW
      }(RW) ? MW["string" == typeof RW ? "string" : "hash"] : MW.map
    }

    function xM(WW, RW) {
      var MW = function(WW, RW) {
        return null == WW ? void 0 : WW[RW]
      }(WW, RW);
      return UR(MW) ? MW : void 0
    }
    XR.prototype.clear = function() {
      this.__data__ = IR ? IR(null) : {}
    }, XR.prototype.delete = function(WW) {
      return this.has(WW) && delete this.__data__[WW]
    }, XR.prototype.get = function(WW) {
      var RW = this.__data__;
      if (IR) {
        var MW = RW[WW];
        return MW === wW ? void 0 : MW
      }
      return RR.call(RW, WW) ? RW[WW] : void 0
    }, XR.prototype.has = function(WW) {
      var RW = this.__data__;
      return IR ? void 0 !== RW[WW] : RR.call(RW, WW)
    }, XR.prototype.set = function(WW, RW) {
      return this.__data__[WW] = IR && void 0 === RW ? wW : RW, this
    }, jM.prototype.clear = function() {
      this.__data__ = []
    }, jM.prototype.delete = function(WW) {
      var RW = this.__data__,
        MW = pR(RW, WW);
      return !(MW < 0) && (MW == RW.length - 1 ? RW.pop() : eR.call(RW, MW, 1), !0)
    }, jM.prototype.get = function(WW) {
      var RW = this.__data__,
        MW = pR(RW, WW);
      return MW < 0 ? void 0 : RW[MW][1]
    }, jM.prototype.has = function(WW) {
      return pR(this.__data__, WW) > -1
    }, jM.prototype.set = function(WW, RW) {
      var MW = this.__data__,
        wW = pR(MW, WW);
      return wW < 0 ? MW.push([WW, RW]) : MW[wW][1] = RW, this
    }, kM.prototype.clear = function() {
      this.__data__ = {
        hash: new XR,
        map: new(iM || jM),
        string: new XR
      }
    }, kM.prototype.delete = function(WW) {
      return mM(this, WW).delete(WW)
    }, kM.prototype.get = function(WW) {
      return mM(this, WW).get(WW)
    }, kM.prototype.has = function(WW) {
      return mM(this, WW).has(WW)
    }, kM.prototype.set = function(WW, RW) {
      return mM(this, WW).set(WW, RW), this
    }, aM.prototype.clear = function() {
      this.__data__ = new jM
    }, aM.prototype.delete = function(WW) {
      return this.__data__.delete(WW)
    }, aM.prototype.get = function(WW) {
      return this.__data__.get(WW)
    }, aM.prototype.has = function(WW) {
      return this.__data__.has(WW)
    }, aM.prototype.set = function(WW, RW) {
      var MW = this.__data__;
      if (MW instanceof jM) {
        var wW = MW.__data__;
        if (!iM || wW.length < 199) return wW.push([WW, RW]), this;
        MW = this.__data__ = new kM(wW)
      }
      return MW.set(WW, RW), this
    };
    var vM = BR ? GW(BR, Object) : function() {
        return []
      },
      KR = function(WW) {
        return MR.call(WW)
      };

    function uR(WW, RW) {
      return !!(RW = null == RW ? CW : RW) && ("number" == typeof WW || dW.test(WW)) && WW > -1 && WW % 1 == 0 && WW < RW
    }

    function OR(WW) {
      var RW = WW && WW.constructor;
      return WW === ("function" == typeof RW && RW.prototype || qR)
    }

    function nR(WW) {
      if (null != WW) {
        try {
          return WR.call(WW)
        } catch (RW) {}
        try {
          return WW + ""
        } catch (RW) {}
      }
      return ""
    }

    function GR(WW, RW) {
      return WW === RW || WW !== WW && RW !== RW
    }(gM && KR(new gM(new ArrayBuffer(1))) != oW || iM && KR(new iM) != eW || YR && KR(YR.resolve()) != TW || JR && KR(new JR) != iR || PR && KR(new PR) != PW) && (KR = function(WW) {
      var RW = MR.call(WW),
        MW = RW == tR ? WW.constructor : void 0,
        wW = MW ? nR(MW) : void 0;
      if (wW) switch (wW) {
        case oR:
          return oW;
        case lR:
          return eW;
        case FR:
          return TW;
        case fR:
          return iR;
        case QR:
          return PW
      }
      return RW
    });
    var LR = Array.isArray;

    function HR(WW) {
      return null != WW && function(WW) {
        return "number" == typeof WW && WW > -1 && WW % 1 == 0 && WW <= CW
      }(WW.length) && !qM(WW)
    }
    var DR = tM || function() {
      return !1
    };

    function qM(WW) {
      var RW = ZR(WW) ? MR.call(WW) : "";
      return RW == yR || RW == NW
    }

    function ZR(WW) {
      var RW = typeof WW;
      return !!WW && ("object" == RW || "function" == RW)
    }

    function SR(WW) {
      return HR(WW) ? sR(WW) : function(WW) {
        if (!OR(WW)) return TR(WW);
        var RW = [];
        for (var MW in Object(WW)) RR.call(WW, MW) && "constructor" != MW && RW.push(MW);
        return RW
      }(WW)
    }
    WW.exports = function(WW) {
      return hR(WW, !0, !0)
    }
  },
  35786: (WW, RW, MW) => {
    var wW = MW(35795),
      CW = MW(35804),
      zR = "undefined" !== typeof Float64Array;

    function AW(WW, RW) {
      return WW[0] - RW[0]
    }

    function bR() {
      var WW, RW = this.stride,
        MW = new Array(RW.length);
      for (WW = 0; WW < MW.length; ++WW) MW[WW] = [Math.abs(RW[WW]), WW];
      MW.sort(AW);
      var wW = new Array(MW.length);
      for (WW = 0; WW < wW.length; ++WW) wW[WW] = MW[WW][1];
      return wW
    }

    function yR(WW, RW) {
      var MW = ["View", RW, "d", WW].join("");
      RW < 0 && (MW = "View_Nil" + WW);
      var CW = "generic" === WW;
      if (-1 === RW) {
        var zR = "function " + MW + "(a){this.data=a;};var proto=" + MW + ".prototype;proto.dtype='" + WW + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + MW + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + MW + "(a){return new " + MW + "(a);}";
        return new Function(zR)()
      }
      if (0 === RW) {
        zR = "function " + MW + "(a,d) {this.data = a;this.offset = d};var proto=" + MW + ".prototype;proto.dtype='" + WW + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + MW + "_copy() {return new " + MW + "(this.data,this.offset)};proto.pick=function " + MW + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + MW + "_get(){return " + (CW ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + MW + "_set(v){return " + (CW ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + MW + "(a,b,c,d){return new " + MW + "(a,d)}";
        return new Function("TrivialArray", zR)(NW[WW][0])
      }
      zR = ["'use strict'"];
      var AW = wW(RW),
        yR = AW.map((function(WW) {
          return "i" + WW
        })),
        eW = "this.offset+" + AW.map((function(WW) {
          return "this.stride[" + WW + "]*i" + WW
        })).join("+"),
        BW = AW.map((function(WW) {
          return "b" + WW
        })).join(","),
        tR = AW.map((function(WW) {
          return "c" + WW
        })).join(",");
      zR.push("function " + MW + "(a," + BW + "," + tR + ",d){this.data=a", "this.shape=[" + BW + "]", "this.stride=[" + tR + "]", "this.offset=d|0}", "var proto=" + MW + ".prototype", "proto.dtype='" + WW + "'", "proto.dimension=" + RW), zR.push("Object.defineProperty(proto,'size',{get:function " + MW + "_size(){return " + AW.map((function(WW) {
        return "this.shape[" + WW + "]"
      })).join("*"), "}})"), 1 === RW ? zR.push("proto.order=[0]") : (zR.push("Object.defineProperty(proto,'order',{get:"), RW < 4 ? (zR.push("function " + MW + "_order(){"), 2 === RW ? zR.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === RW && zR.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : zR.push("ORDER})")), zR.push("proto.set=function " + MW + "_set(" + yR.join(",") + ",v){"), CW ? zR.push("return this.data.set(" + eW + ",v)}") : zR.push("return this.data[" + eW + "]=v}"), zR.push("proto.get=function " + MW + "_get(" + yR.join(",") + "){"), CW ? zR.push("return this.data.get(" + eW + ")}") : zR.push("return this.data[" + eW + "]}"), zR.push("proto.index=function " + MW + "_index(", yR.join(), "){return " + eW + "}"), zR.push("proto.hi=function " + MW + "_hi(" + yR.join(",") + "){return new " + MW + "(this.data," + AW.map((function(WW) {
        return ["(typeof i", WW, "!=='number'||i", WW, "<0)?this.shape[", WW, "]:i", WW, "|0"].join("")
      })).join(",") + "," + AW.map((function(WW) {
        return "this.stride[" + WW + "]"
      })).join(",") + ",this.offset)}");
      var TW = AW.map((function(WW) {
          return "a" + WW + "=this.shape[" + WW + "]"
        })),
        gR = AW.map((function(WW) {
          return "c" + WW + "=this.stride[" + WW + "]"
        }));
      zR.push("proto.lo=function " + MW + "_lo(" + yR.join(",") + "){var b=this.offset,d=0," + TW.join(",") + "," + gR.join(","));
      for (var iR = 0; iR < RW; ++iR) zR.push("if(typeof i" + iR + "==='number'&&i" + iR + ">=0){d=i" + iR + "|0;b+=c" + iR + "*d;a" + iR + "-=d}");
      zR.push("return new " + MW + "(this.data," + AW.map((function(WW) {
        return "a" + WW
      })).join(",") + "," + AW.map((function(WW) {
        return "c" + WW
      })).join(",") + ",b)}"), zR.push("proto.step=function " + MW + "_step(" + yR.join(",") + "){var " + AW.map((function(WW) {
        return "a" + WW + "=this.shape[" + WW + "]"
      })).join(",") + "," + AW.map((function(WW) {
        return "b" + WW + "=this.stride[" + WW + "]"
      })).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
      for (iR = 0; iR < RW; ++iR) zR.push("if(typeof i" + iR + "==='number'){d=i" + iR + "|0;if(d<0){c+=b" + iR + "*(a" + iR + "-1);a" + iR + "=ceil(-a" + iR + "/d)}else{a" + iR + "=ceil(a" + iR + "/d)}b" + iR + "*=d}");
      zR.push("return new " + MW + "(this.data," + AW.map((function(WW) {
        return "a" + WW
      })).join(",") + "," + AW.map((function(WW) {
        return "b" + WW
      })).join(",") + ",c)}");
      var YW = new Array(RW),
        JW = new Array(RW);
      for (iR = 0; iR < RW; ++iR) YW[iR] = "a[i" + iR + "]", JW[iR] = "b[i" + iR + "]";
      zR.push("proto.transpose=function " + MW + "_transpose(" + yR + "){" + yR.map((function(WW, RW) {
        return WW + "=(" + WW + "===undefined?" + RW + ":" + WW + "|0)"
      })).join(";"), "var a=this.shape,b=this.stride;return new " + MW + "(this.data," + YW.join(",") + "," + JW.join(",") + ",this.offset)}"), zR.push("proto.pick=function " + MW + "_pick(" + yR + "){var a=[],b=[],c=this.offset");
      for (iR = 0; iR < RW; ++iR) zR.push("if(typeof i" + iR + "==='number'&&i" + iR + ">=0){c=(c+this.stride[" + iR + "]*i" + iR + ")|0}else{a.push(this.shape[" + iR + "]);b.push(this.stride[" + iR + "])}");
      return zR.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), zR.push("return function construct_" + MW + "(data,shape,stride,offset){return new " + MW + "(data," + AW.map((function(WW) {
        return "shape[" + WW + "]"
      })).join(",") + "," + AW.map((function(WW) {
        return "stride[" + WW + "]"
      })).join(",") + ",offset)}"), new Function("CTOR_LIST", "ORDER", zR.join("\n"))(NW[WW], bR)
    }
    var NW = {
      float32: [],
      float64: [],
      int8: [],
      int16: [],
      int32: [],
      uint8: [],
      uint16: [],
      uint32: [],
      array: [],
      uint8_clamped: [],
      bigint64: [],
      biguint64: [],
      buffer: [],
      generic: []
    };
    WW.exports = function(WW, RW, MW, wW) {
      if (void 0 === WW) return (0, NW.array[0])([]);
      "number" === typeof WW && (WW = [WW]), void 0 === RW && (RW = [WW.length]);
      var AW = RW.length;
      if (void 0 === MW) {
        MW = new Array(AW);
        for (var bR = AW - 1, eW = 1; bR >= 0; --bR) MW[bR] = eW, eW *= RW[bR]
      }
      if (void 0 === wW) {
        wW = 0;
        for (bR = 0; bR < AW; ++bR) MW[bR] < 0 && (wW -= (RW[bR] - 1) * MW[bR])
      }
      for (var BW = function(WW) {
          if (CW(WW)) return "buffer";
          if (zR) switch (Object.prototype.toString.call(WW)) {
            case "[object Float64Array]":
              return "float64";
            case "[object Float32Array]":
              return "float32";
            case "[object Int8Array]":
              return "int8";
            case "[object Int16Array]":
              return "int16";
            case "[object Int32Array]":
              return "int32";
            case "[object Uint8Array]":
              return "uint8";
            case "[object Uint16Array]":
              return "uint16";
            case "[object Uint32Array]":
              return "uint32";
            case "[object Uint8ClampedArray]":
              return "uint8_clamped";
            case "[object BigInt64Array]":
              return "bigint64";
            case "[object BigUint64Array]":
              return "biguint64"
          }
          return Array.isArray(WW) ? "array" : "generic"
        }(WW), tR = NW[BW]; tR.length <= AW + 1;) tR.push(yR(BW, tR.length - 1));
      return (0, tR[AW + 1])(WW, RW, MW, wW)
    }
  },
  36513: WW => {
    function RW(WW, RW, MW) {
      for (var wW = WW.length, CW = -1 / 0, zR = 1 / 0, AW = 0; AW < wW; AW++) {
        var bR = (MW[0][AW] - WW[AW]) / RW[AW],
          yR = (MW[1][AW] - WW[AW]) / RW[AW];
        if (bR > yR) {
          var NW = bR;
          bR = yR, yR = NW
        }
        if (yR < CW || bR > zR) return 1 / 0;
        bR > CW && (CW = bR), yR < zR && (zR = yR)
      }
      return CW > zR ? 1 / 0 : CW
    }
    WW.exports = function(WW, MW, wW, CW) {
      var zR = RW(MW, wW, CW);
      if (zR === 1 / 0) WW = null;
      else {
        WW = WW || [];
        for (var AW = 0; AW < MW.length; AW++) WW[AW] = MW[AW] + wW[AW] * zR
      }
      return WW
    }, WW.exports.distance = RW
  },
  35816: (WW, RW, MW) => {
    var wW = MW(35824);

    function CW(WW) {
      for (var RW, MW, CW = 0, zR = WW.length, AW = 0; AW < WW.length;) {
        for (RW = WW[AW], MW = 0; AW < zR && WW[AW] === RW;) ++AW, ++MW;
        CW += wW.log2(MW) / 7 | 0, CW += wW.log2(RW >>> 0) / 7 | 0, CW += 2
      }
      return CW
    }
    RW.size = CW, RW.encode = function(WW, RW) {
      RW || (RW = new Uint8Array(CW(WW)));
      for (var MW, wW, zR = 0, AW = RW.length, bR = 0; bR < WW.length;) {
        for (MW = WW[bR], wW = 0; bR < WW.length && WW[bR] === MW;) ++bR, ++wW;
        for (; zR < AW && wW >= 128;) RW[zR++] = 128 + (127 & wW), wW >>>= 7;
        if (zR >= AW) throw new Error("RLE buffer overflow");
        for (RW[zR++] = wW, MW >>>= 0; zR < AW && MW >= 128;) RW[zR++] = 128 + (127 & MW), MW >>>= 7;
        if (zR >= AW) throw new Error("RLE buffer overflow");
        RW[zR++] = MW
      }
      return RW
    }, RW.decode = function(WW, RW) {
      for (var MW, wW, CW, zR, AW = RW.length, bR = WW.length, yR = 0, NW = 0; NW < bR;) {
        for (MW = 0, wW = 0; NW < bR && WW[NW] >= 128;) MW += (127 & WW[NW++]) << wW, wW += 7;
        if (MW += WW[NW++] << wW, NW >= bR) throw new Error("RLE buffer underrun");
        if (yR + MW > AW) throw new Error("Chunk buffer overflow");
        for (CW = 0, wW = 0; NW < bR && WW[NW] >= 128;) CW += (127 & WW[NW++]) << wW, wW += 7;
        if (NW >= bR) throw new Error("RLE buffer underrun");
        for (CW += WW[NW++] << wW, zR = 0; zR < MW; ++zR) RW[yR++] = CW
      }
      return RW
    }
  },
  35824: (WW, RW) => {
    function MW(WW) {
      var RW = 32;
      return (WW &= -WW) && RW--, 65535 & WW && (RW -= 16), 16711935 & WW && (RW -= 8), 252645135 & WW && (RW -= 4), 858993459 & WW && (RW -= 2), 1431655765 & WW && (RW -= 1), RW
    }
    RW.INT_BITS = 32, RW.INT_MAX = 2147483647, RW.INT_MIN = -1 << 31, RW.sign = function(WW) {
      return (WW > 0) - (WW < 0)
    }, RW.abs = function(WW) {
      var RW = WW >> 31;
      return (WW ^ RW) - RW
    }, RW.min = function(WW, RW) {
      return RW ^ (WW ^ RW) & -(WW < RW)
    }, RW.max = function(WW, RW) {
      return WW ^ (WW ^ RW) & -(WW < RW)
    }, RW.isPow2 = function(WW) {
      return !(WW & WW - 1) && !!WW
    }, RW.log2 = function(WW) {
      var RW, MW;
      return RW = (WW > 65535) << 4, RW |= MW = ((WW >>>= RW) > 255) << 3, RW |= MW = ((WW >>>= MW) > 15) << 2, (RW |= MW = ((WW >>>= MW) > 3) << 1) | (WW >>>= MW) >> 1
    }, RW.log10 = function(WW) {
      return WW >= 1e9 ? 9 : WW >= 1e8 ? 8 : WW >= 1e7 ? 7 : WW >= 1e6 ? 6 : WW >= 1e5 ? 5 : WW >= 1e4 ? 4 : WW >= 1e3 ? 3 : WW >= 100 ? 2 : WW >= 10 ? 1 : 0
    }, RW.popCount = function(WW) {
      return 16843009 * ((WW = (858993459 & (WW -= WW >>> 1 & 1431655765)) + (WW >>> 2 & 858993459)) + (WW >>> 4) & 252645135) >>> 24
    }, RW.countTrailingZeros = MW, RW.nextPow2 = function(WW) {
      return WW += 0 === WW, --WW, WW |= WW >>> 1, WW |= WW >>> 2, WW |= WW >>> 4, WW |= WW >>> 8, (WW |= WW >>> 16) + 1
    }, RW.prevPow2 = function(WW) {
      return WW |= WW >>> 1, WW |= WW >>> 2, WW |= WW >>> 4, WW |= WW >>> 8, (WW |= WW >>> 16) - (WW >>> 1)
    }, RW.parity = function(WW) {
      return WW ^= WW >>> 16, WW ^= WW >>> 8, WW ^= WW >>> 4, 27030 >>> (WW &= 15) & 1
    };
    var wW = new Array(256);
    ! function(WW) {
      for (var RW = 0; RW < 256; ++RW) {
        var MW = RW,
          wW = RW,
          CW = 7;
        for (MW >>>= 1; MW; MW >>>= 1) wW <<= 1, wW |= 1 & MW, --CW;
        WW[RW] = wW << CW & 255
      }
    }(wW), RW.reverse = function(WW) {
      return wW[255 & WW] << 24 | wW[WW >>> 8 & 255] << 16 | wW[WW >>> 16 & 255] << 8 | wW[WW >>> 24 & 255]
    }, RW.interleave2 = function(WW, RW) {
      return (WW = 1431655765 & ((WW = 858993459 & ((WW = 252645135 & ((WW = 16711935 & ((WW &= 65535) | WW << 8)) | WW << 4)) | WW << 2)) | WW << 1)) | (RW = 1431655765 & ((RW = 858993459 & ((RW = 252645135 & ((RW = 16711935 & ((RW &= 65535) | RW << 8)) | RW << 4)) | RW << 2)) | RW << 1)) << 1
    }, RW.deinterleave2 = function(WW, RW) {
      return (WW = 65535 & ((WW = 16711935 & ((WW = 252645135 & ((WW = 858993459 & ((WW = WW >>> RW & 1431655765) | WW >>> 1)) | WW >>> 2)) | WW >>> 4)) | WW >>> 16)) << 16 >> 16
    }, RW.interleave3 = function(WW, RW, MW) {
      return WW = 1227133513 & ((WW = 3272356035 & ((WW = 251719695 & ((WW = 4278190335 & ((WW &= 1023) | WW << 16)) | WW << 8)) | WW << 4)) | WW << 2), (WW |= (RW = 1227133513 & ((RW = 3272356035 & ((RW = 251719695 & ((RW = 4278190335 & ((RW &= 1023) | RW << 16)) | RW << 8)) | RW << 4)) | RW << 2)) << 1) | (MW = 1227133513 & ((MW = 3272356035 & ((MW = 251719695 & ((MW = 4278190335 & ((MW &= 1023) | MW << 16)) | MW << 8)) | MW << 4)) | MW << 2)) << 2
    }, RW.deinterleave3 = function(WW, RW) {
      return (WW = 1023 & ((WW = 4278190335 & ((WW = 251719695 & ((WW = 3272356035 & ((WW = WW >>> RW & 1227133513) | WW >>> 2)) | WW >>> 4)) | WW >>> 8)) | WW >>> 16)) << 22 >> 22
    }, RW.nextCombination = function(WW) {
      var RW = WW | WW - 1;
      return RW + 1 | (~RW & -~RW) - 1 >>> MW(WW) + 1
    }
  },
  35373: (WW, RW, MW) => {
    MW.d(RW, {
      Color3: () => wW.d,
      d: () => wW.h
    });
    var wW = MW(35376);
    (0, wW.k)()
  },
  35845: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => CW
    });
    var wW = MW(35852);
    class CW {
      static GetPlanes(WW) {
        const RW = [];
        for (let MW = 0; MW < 6; MW++) RW.push(new wW.c(0, 0, 0, 0));
        return CW.GetPlanesToRef(WW, RW), RW
      }
      static GetNearPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] + MW[2], RW.normal.y = MW[7] + MW[6], RW.normal.z = MW[11] + MW[10], RW.d = MW[15] + MW[14], RW.normalize()
      }
      static GetFarPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] - MW[2], RW.normal.y = MW[7] - MW[6], RW.normal.z = MW[11] - MW[10], RW.d = MW[15] - MW[14], RW.normalize()
      }
      static GetLeftPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] + MW[0], RW.normal.y = MW[7] + MW[4], RW.normal.z = MW[11] + MW[8], RW.d = MW[15] + MW[12], RW.normalize()
      }
      static GetRightPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] - MW[0], RW.normal.y = MW[7] - MW[4], RW.normal.z = MW[11] - MW[8], RW.d = MW[15] - MW[12], RW.normalize()
      }
      static GetTopPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] - MW[1], RW.normal.y = MW[7] - MW[5], RW.normal.z = MW[11] - MW[9], RW.d = MW[15] - MW[13], RW.normalize()
      }
      static GetBottomPlaneToRef(WW, RW) {
        const MW = WW.m;
        RW.normal.x = MW[3] + MW[1], RW.normal.y = MW[7] + MW[5], RW.normal.z = MW[11] + MW[9], RW.d = MW[15] + MW[13], RW.normalize()
      }
      static GetPlanesToRef(WW, RW) {
        CW.GetNearPlaneToRef(WW, RW[0]), CW.GetFarPlaneToRef(WW, RW[1]), CW.GetLeftPlaneToRef(WW, RW[2]), CW.GetRightPlaneToRef(WW, RW[3]), CW.GetTopPlaneToRef(WW, RW[4]), CW.GetBottomPlaneToRef(WW, RW[5])
      }
      static IsPointInFrustum(WW, RW) {
        for (let MW = 0; MW < 6; MW++)
          if (RW[MW].dotCoordinate(WW) < 0) return !1;
        return !0
      }
    }
  },
  35852: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => CW
    });
    var wW = MW(35324);
    class CW {
      constructor(WW, RW, MW, CW) {
        this.normal = new wW.q(WW, RW, MW), this.d = CW
      }
      JNW() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new CW(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let RW = 0;
        return 0 !== WW && (RW = 1 / WW), this.normal.x *= RW, this.normal.y *= RW, this.normal.z *= RW, this.d *= RW, this
      }
      transform(WW) {
        const RW = CW._TmpMatrix;
        WW.invertToRef(RW);
        const MW = RW.m,
          wW = this.normal.x,
          zR = this.normal.y,
          AW = this.normal.z,
          bR = this.d,
          yR = wW * MW[0] + zR * MW[1] + AW * MW[2] + bR * MW[3],
          NW = wW * MW[4] + zR * MW[5] + AW * MW[6] + bR * MW[7],
          eW = wW * MW[8] + zR * MW[9] + AW * MW[10] + bR * MW[11],
          BW = wW * MW[12] + zR * MW[13] + AW * MW[14] + bR * MW[15];
        return new CW(yR, NW, eW, BW)
      }
      dotCoordinate(WW) {
        return this.normal.x * WW.x + this.normal.y * WW.y + this.normal.z * WW.z + this.d
      }
      copyFromPoints(WW, RW, MW) {
        const wW = RW.x - WW.x,
          CW = RW.y - WW.y,
          zR = RW.z - WW.z,
          AW = MW.x - WW.x,
          bR = MW.y - WW.y,
          yR = MW.z - WW.z,
          NW = CW * yR - zR * bR,
          eW = zR * AW - wW * yR,
          BW = wW * bR - CW * AW,
          tR = Math.sqrt(NW * NW + eW * eW + BW * BW);
        let TW;
        return TW = 0 !== tR ? 1 / tR : 0, this.normal.x = NW * TW, this.normal.y = eW * TW, this.normal.z = BW * TW, this.d = -(this.normal.x * WW.x + this.normal.y * WW.y + this.normal.z * WW.z), this
      }
      isFrontFacingTo(WW, RW) {
        return wW.q.Dot(this.normal, WW) <= RW
      }
      signedDistanceTo(WW) {
        return wW.q.Dot(WW, this.normal) + this.d
      }
      static FromArray(WW) {
        return new CW(WW[0], WW[1], WW[2], WW[3])
      }
      static FromPoints(WW, RW, MW) {
        const wW = new CW(0, 0, 0, 0);
        return wW.copyFromPoints(WW, RW, MW), wW
      }
      static FromPositionAndNormal(WW, RW) {
        const MW = new CW(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(WW, RW, MW)
      }
      static FromPositionAndNormalToRef(WW, RW, MW) {
        return MW.normal.hyW(RW), MW.normal.normalize(), MW.d = -WW.dot(MW.normal), MW
      }
      static SignedDistanceToPlaneFromPositionAndNormal(WW, RW, MW) {
        const CW = -(RW.x * WW.x + RW.y * WW.y + RW.z * WW.z);
        return wW.q.Dot(MW, RW) + CW
      }
    }
    CW._TmpMatrix = wW.d.Identity()
  },
  35317: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      Matrix: () => wW.d,
      Quaternion: () => wW.e,
      RegisterMathVector: () => wW.h,
      TmpVectors: () => wW.k,
      Vector2: () => wW.n,
      vC: () => wW.q,
      Vector4: () => wW.s
    });
    var wW = MW(35324);
    (0, wW.h)()
  },
  36185: (WW, RW, MW) => {
    MW.d(RW, {
      d: () => wW
    });
    class wW {
      constructor(WW, RW, MW, wW) {
        this.x = WW, this.y = RW, this.width = MW, this.height = wW
      }
      toGlobal(WW, RW) {
        return new wW(this.x * WW, this.y * RW, this.width * WW, this.height * RW)
      }
      toGlobalToRef(WW, RW, MW) {
        return MW.x = this.x * WW, MW.y = this.y * RW, MW.width = this.width * WW, MW.height = this.height * RW, this
      }
      clone() {
        return new wW(this.x, this.y, this.width, this.height)
      }
    }
  },
  35984: (WW, RW, MW) => {
    function wW() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (WW => {
        const RW = 16 * Math.random() | 0;
        return ("x" === WW ? RW : 3 & RW | 8).toString(16)
      }))
    }
    MW.d(RW, {
      e: () => wW
    })
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);