/*! For license information please see zyyatq.219.7c515297.chunk.js.LICENSE.txt */
export const id = 219;
export const ids = [219, 225];
export const modules = {
  37680: YY => {
    YY.exports = function(YY) {
      return null != YY && null != YY.constructor && "function" === typeof YY.constructor.isBuffer && YY.constructor.isBuffer(YY)
    }
  },
  37660: (YY, rY, DY) => {
    var FY = DY(37668),
      AY = DY(37673),
      IY = DY(37680);
    DY.g.__TYPEDARRAY_POOL || (DY.g.__TYPEDARRAY_POOL = {
      UINT8: AY([32, 0]),
      UINT16: AY([32, 0]),
      UINT32: AY([32, 0]),
      INT8: AY([32, 0]),
      INT16: AY([32, 0]),
      INT32: AY([32, 0]),
      FLOAT: AY([32, 0]),
      DOUBLE: AY([32, 0]),
      DATA: AY([32, 0]),
      UINT8C: AY([32, 0]),
      BUFFER: AY([32, 0])
    });
    var RY = "undefined" !== typeof Uint8ClampedArray,
      OY = DY.g.__TYPEDARRAY_POOL;
    OY.UINT8C || (OY.UINT8C = AY([32, 0])), OY.BUFFER || (OY.BUFFER = AY([32, 0]));
    var gY = OY.DATA,
      aY = OY.BUFFER;

    function vY(YY) {
      if (YY) {
        var rY = YY.length || YY.byteLength,
          DY = FY.log2(rY);
        gY[DY].push(YY)
      }
    }

    function uY(YY) {
      YY = FY.nextPow2(YY);
      var rY = FY.log2(YY),
        DY = gY[rY];
      return DY.length > 0 ? DY.pop() : new ArrayBuffer(YY)
    }

    function sY(YY) {
      return new Uint8Array(uY(YY), 0, YY)
    }

    function iY(YY) {
      return new Uint16Array(uY(2 * YY), 0, YY)
    }

    function yY(YY) {
      return new Uint32Array(uY(4 * YY), 0, YY)
    }

    function QY(YY) {
      return new Int8Array(uY(YY), 0, YY)
    }

    function oY(YY) {
      return new Int16Array(uY(2 * YY), 0, YY)
    }

    function WY(YY) {
      return new Int32Array(uY(4 * YY), 0, YY)
    }

    function EY(YY) {
      return new Float32Array(uY(4 * YY), 0, YY)
    }

    function mY(YY) {
      return new Float64Array(uY(8 * YY), 0, YY)
    }

    function VY(YY) {
      return RY ? new Uint8ClampedArray(uY(YY), 0, YY) : sY(YY)
    }

    function SY(YY) {
      return new DataView(uY(YY), 0, YY)
    }
    rY.free = function(YY) {
      if (IY(YY)) aY[FY.log2(YY.length)].push(YY);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(YY) && (YY = YY.buffer), !YY) return;
        var rY = YY.length || YY.byteLength,
          DY = 0 | FY.log2(rY);
        gY[DY].push(YY)
      }
    }, rY.freeUint8 = rY.freeUint16 = rY.freeUint32 = rY.freeInt8 = rY.freeInt16 = rY.freeInt32 = rY.freeFloat32 = rY.freeFloat = rY.freeFloat64 = rY.freeDouble = rY.freeUint8Clamped = rY.freeDataView = function(YY) {
      vY(YY.buffer)
    }, rY.freeArrayBuffer = vY, rY.freeBuffer = function(YY) {
      aY[FY.log2(YY.length)].push(YY)
    }, rY.malloc = function(YY, rY) {
      if (void 0 === rY || "arraybuffer" === rY) return uY(YY);
      switch (rY) {
        case "uint8":
          return sY(YY);
        case "uint16":
          return iY(YY);
        case "uint32":
          return yY(YY);
        case "int8":
          return QY(YY);
        case "int16":
          return oY(YY);
        case "int32":
          return WY(YY);
        case "float":
        case "float32":
          return EY(YY);
        case "double":
        case "float64":
          return mY(YY);
        case "uint8_clamped":
          return VY(YY);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return SY(YY);
        default:
          return null
      }
      return null
    }, rY.mallocArrayBuffer = uY, rY.mallocUint8 = sY, rY.mallocUint16 = iY, rY.mallocUint32 = yY, rY.mallocInt8 = QY, rY.mallocInt16 = oY, rY.mallocInt32 = WY, rY.mallocFloat32 = rY.mallocFloat = EY, rY.mallocFloat64 = rY.mallocDouble = mY, rY.mallocUint8Clamped = VY, rY.mallocDataView = SY, rY.clearCache = function() {
      for (var YY = 0; YY < 32; ++YY) OY.UINT8[YY].length = 0, OY.UINT16[YY].length = 0, OY.UINT32[YY].length = 0, OY.INT8[YY].length = 0, OY.INT16[YY].length = 0, OY.INT32[YY].length = 0, OY.FLOAT[YY].length = 0, OY.DOUBLE[YY].length = 0, OY.UINT8C[YY].length = 0, gY[YY].length = 0, aY[YY].length = 0
    }
  },
  37668: (YY, rY) => {
    function DY(YY) {
      var rY = 32;
      return (YY &= -YY) && rY--, 65535 & YY && (rY -= 16), 16711935 & YY && (rY -= 8), 252645135 & YY && (rY -= 4), 858993459 & YY && (rY -= 2), 1431655765 & YY && (rY -= 1), rY
    }
    rY.INT_BITS = 32, rY.INT_MAX = 2147483647, rY.INT_MIN = -1 << 31, rY.sign = function(YY) {
      return (YY > 0) - (YY < 0)
    }, rY.abs = function(YY) {
      var rY = YY >> 31;
      return (YY ^ rY) - rY
    }, rY.min = function(YY, rY) {
      return rY ^ (YY ^ rY) & -(YY < rY)
    }, rY.max = function(YY, rY) {
      return YY ^ (YY ^ rY) & -(YY < rY)
    }, rY.isPow2 = function(YY) {
      return !(YY & YY - 1) && !!YY
    }, rY.log2 = function(YY) {
      var rY, DY;
      return rY = (YY > 65535) << 4, rY |= DY = ((YY >>>= rY) > 255) << 3, rY |= DY = ((YY >>>= DY) > 15) << 2, (rY |= DY = ((YY >>>= DY) > 3) << 1) | (YY >>>= DY) >> 1
    }, rY.log10 = function(YY) {
      return YY >= 1e9 ? 9 : YY >= 1e8 ? 8 : YY >= 1e7 ? 7 : YY >= 1e6 ? 6 : YY >= 1e5 ? 5 : YY >= 1e4 ? 4 : YY >= 1e3 ? 3 : YY >= 100 ? 2 : YY >= 10 ? 1 : 0
    }, rY.popCount = function(YY) {
      return 16843009 * ((YY = (858993459 & (YY -= YY >>> 1 & 1431655765)) + (YY >>> 2 & 858993459)) + (YY >>> 4) & 252645135) >>> 24
    }, rY.countTrailingZeros = DY, rY.nextPow2 = function(YY) {
      return YY += 0 === YY, --YY, YY |= YY >>> 1, YY |= YY >>> 2, YY |= YY >>> 4, YY |= YY >>> 8, (YY |= YY >>> 16) + 1
    }, rY.prevPow2 = function(YY) {
      return YY |= YY >>> 1, YY |= YY >>> 2, YY |= YY >>> 4, YY |= YY >>> 8, (YY |= YY >>> 16) - (YY >>> 1)
    }, rY.parity = function(YY) {
      return YY ^= YY >>> 16, YY ^= YY >>> 8, YY ^= YY >>> 4, 27030 >>> (YY &= 15) & 1
    };
    var FY = new Array(256);
    ! function(YY) {
      for (var rY = 0; rY < 256; ++rY) {
        var DY = rY,
          FY = rY,
          AY = 7;
        for (DY >>>= 1; DY; DY >>>= 1) FY <<= 1, FY |= 1 & DY, --AY;
        YY[rY] = FY << AY & 255
      }
    }(FY), rY.reverse = function(YY) {
      return FY[255 & YY] << 24 | FY[YY >>> 8 & 255] << 16 | FY[YY >>> 16 & 255] << 8 | FY[YY >>> 24 & 255]
    }, rY.interleave2 = function(YY, rY) {
      return (YY = 1431655765 & ((YY = 858993459 & ((YY = 252645135 & ((YY = 16711935 & ((YY &= 65535) | YY << 8)) | YY << 4)) | YY << 2)) | YY << 1)) | (rY = 1431655765 & ((rY = 858993459 & ((rY = 252645135 & ((rY = 16711935 & ((rY &= 65535) | rY << 8)) | rY << 4)) | rY << 2)) | rY << 1)) << 1
    }, rY.deinterleave2 = function(YY, rY) {
      return (YY = 65535 & ((YY = 16711935 & ((YY = 252645135 & ((YY = 858993459 & ((YY = YY >>> rY & 1431655765) | YY >>> 1)) | YY >>> 2)) | YY >>> 4)) | YY >>> 16)) << 16 >> 16
    }, rY.interleave3 = function(YY, rY, DY) {
      return YY = 1227133513 & ((YY = 3272356035 & ((YY = 251719695 & ((YY = 4278190335 & ((YY &= 1023) | YY << 16)) | YY << 8)) | YY << 4)) | YY << 2), (YY |= (rY = 1227133513 & ((rY = 3272356035 & ((rY = 251719695 & ((rY = 4278190335 & ((rY &= 1023) | rY << 16)) | rY << 8)) | rY << 4)) | rY << 2)) << 1) | (DY = 1227133513 & ((DY = 3272356035 & ((DY = 251719695 & ((DY = 4278190335 & ((DY &= 1023) | DY << 16)) | DY << 8)) | DY << 4)) | DY << 2)) << 2
    }, rY.deinterleave3 = function(YY, rY) {
      return (YY = 1023 & ((YY = 4278190335 & ((YY = 251719695 & ((YY = 3272356035 & ((YY = YY >>> rY & 1227133513) | YY >>> 2)) | YY >>> 4)) | YY >>> 8)) | YY >>> 16)) << 22 >> 22
    }, rY.nextCombination = function(YY) {
      var rY = YY | YY - 1;
      return rY + 1 | (~rY & -~rY) - 1 >>> DY(YY) + 1
    }
  },
  37653: (YY, rY, DY) => {
    YY.exports = function(YY, rY, DY) {
      switch (arguments.length) {
        case 1:
          return FY = [], aY(AY = YY, AY, vY, !0), FY;
        case 2:
          return "function" === typeof rY ? aY(YY, YY, rY, !0) : function(YY, rY) {
            return FY = [], aY(YY, rY, vY, !1), FY
          }(YY, rY);
        case 3:
          return aY(YY, rY, DY, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var AY
    };
    var FY, AY = DY(37660),
      IY = DY(37687),
      RY = DY(37702);

    function OY(YY, rY) {
      for (var DY = 0; DY < YY; ++DY)
        if (!(rY[DY] <= rY[DY + YY])) return !0;
      return !1
    }

    function gY(YY, rY, DY, FY) {
      for (var AY = 0, IY = 0, RY = 0, gY = YY.length; RY < gY; ++RY) {
        var aY = YY[RY];
        if (!OY(rY, aY)) {
          for (var vY = 0; vY < 2 * rY; ++vY) DY[AY++] = aY[vY];
          FY[IY++] = RY
        }
      }
      return IY
    }

    function aY(YY, rY, DY, FY) {
      var OY = YY.length,
        aY = rY.length;
      if (!(OY <= 0 || aY <= 0)) {
        var vY = YY[0].length >>> 1;
        if (!(vY <= 0)) {
          var uY, sY = AY.mallocDouble(2 * vY * OY),
            iY = AY.mallocInt32(OY);
          if ((OY = gY(YY, vY, sY, iY)) > 0) {
            if (1 === vY && FY) IY.init(OY), uY = IY.sweepComplete(vY, DY, 0, OY, sY, iY, 0, OY, sY, iY);
            else {
              var yY = AY.mallocDouble(2 * vY * aY),
                QY = AY.mallocInt32(aY);
              (aY = gY(rY, vY, yY, QY)) > 0 && (IY.init(OY + aY), uY = 1 === vY ? IY.sweepBipartite(vY, DY, 0, OY, sY, iY, 0, aY, yY, QY) : RY(vY, DY, FY, OY, sY, iY, aY, yY, QY), AY.free(yY), AY.free(QY))
            }
            AY.free(sY), AY.free(iY)
          }
          return uY
        }
      }
    }

    function vY(YY, rY) {
      FY.push([YY, rY])
    }
  },
  37708: (YY, rY) => {
    var DY = "d",
      FY = "ax",
      AY = "fp",
      IY = "es",
      RY = "rs",
      OY = "re",
      gY = "rb",
      aY = "bs",
      vY = "be",
      uY = "bb",
      sY = [DY, FY, "vv", RY, OY, gY, "ri", aY, vY, uY, "bi"];

    function iY(YY) {
      var rY = "bruteForce" + (YY ? "Full" : "Partial"),
        FY = [],
        RY = sY.slice();
      YY || RY.splice(3, 0, AY);
      var OY = ["function " + rY + "(" + RY.join() + "){"];

      function gY(rY, AY) {
        var RY = function(YY, rY, FY) {
          var AY = "bruteForce" + (YY ? "Red" : "Blue") + (rY ? "Flip" : "") + (FY ? "Full" : ""),
            RY = ["function ", AY, "(", sY.join(), "){", "var ", IY, "=2*", DY, ";"],
            OY = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            gY = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (FY ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return YY ? RY.push(OY, "Q", ":", gY) : RY.push(gY, "Q", ":", OY), FY ? RY.push("if(y1<x0||x1<y0)continue;") : rY ? RY.push("if(y0<=x0||x1<y0)continue;") : RY.push("if(y0<x0||x1<y0)continue;"), RY.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), rY ? RY.push("yi,xi") : RY.push("xi,yi"), RY.push(");if(rv!==void 0)return rv;}}}"), {
            name: AY,
            code: RY.join("")
          }
        }(rY, AY, YY);
        FY.push(RY.code), OY.push("return " + RY.name + "(" + sY.join() + ");")
      }
      OY.push("if(re-rs>be-bs){"), YY ? (gY(!0, !1), OY.push("}else{"), gY(!1, !1)) : (OY.push("if(fp){"), gY(!0, !0), OY.push("}else{"), gY(!0, !1), OY.push("}}else{if(fp){"), gY(!1, !0), OY.push("}else{"), gY(!1, !1), OY.push("}")), OY.push("}}return " + rY);
      var aY = FY.join("") + OY.join("");
      return new Function(aY)()
    }
    rY.partial = iY(!1), rY.full = iY(!0)
  },
  37702: (YY, rY, DY) => {
    YY.exports = function(YY, rY, DY, IY, vY, cY, KY, HY, zY) {
      ! function(YY, rY) {
        var DY = 8 * AY.log2(rY + 1) * (YY + 1) | 0,
          IY = AY.nextPow2(VY * DY);
        lY.length < IY && (FY.free(lY), lY = FY.mallocInt32(IY));
        var RY = AY.nextPow2(SY * DY);
        TY.length < RY && (FY.free(TY), TY = FY.mallocDouble(RY))
      }(YY, IY + KY);
      var ZY, CY = 0,
        fY = 2 * YY;
      eY(CY++, 0, 0, IY, 0, KY, DY ? 16 : 0, -1 / 0, 1 / 0), DY || eY(CY++, 0, 0, KY, 0, IY, 1, -1 / 0, 1 / 0);
      for (; CY > 0;) {
        var jY = (CY -= 1) * VY,
          hY = lY[jY],
          dY = lY[jY + 1],
          JY = lY[jY + 2],
          MY = lY[jY + 3],
          wY = lY[jY + 4],
          bY = lY[jY + 5],
          XY = CY * SY,
          qY = TY[XY],
          pY = TY[XY + 1],
          kY = 1 & bY,
          GY = !!(16 & bY),
          xY = vY,
          nY = cY,
          PY = HY,
          UY = zY;
        if (kY && (xY = HY, nY = zY, PY = vY, UY = cY), !(2 & bY && dY >= (JY = oY(YY, hY, dY, JY, xY, nY, pY))) && !(4 & bY && (dY = WY(YY, hY, dY, JY, xY, nY, qY)) >= JY)) {
          var LY = JY - dY,
            tY = wY - MY;
          if (GY) {
            if (YY * LY * (LY + tY) < iY) {
              if (void 0 !== (ZY = gY.scanComplete(YY, hY, rY, dY, JY, xY, nY, MY, wY, PY, UY))) return ZY;
              continue
            }
          } else {
            if (YY * Math.min(LY, tY) < uY) {
              if (void 0 !== (ZY = RY(YY, hY, rY, kY, dY, JY, xY, nY, MY, wY, PY, UY))) return ZY;
              continue
            }
            if (YY * LY * tY < sY) {
              if (void 0 !== (ZY = gY.scanBipartite(YY, hY, rY, kY, dY, JY, xY, nY, MY, wY, PY, UY))) return ZY;
              continue
            }
          }
          var Yr = yY(YY, hY, dY, JY, xY, nY, qY, pY);
          if (dY < Yr)
            if (YY * (Yr - dY) < uY) {
              if (void 0 !== (ZY = OY(YY, hY + 1, rY, dY, Yr, xY, nY, MY, wY, PY, UY))) return ZY
            } else if (hY === YY - 2) {
            if (void 0 !== (ZY = kY ? gY.sweepBipartite(YY, rY, MY, wY, PY, UY, dY, Yr, xY, nY) : gY.sweepBipartite(YY, rY, dY, Yr, xY, nY, MY, wY, PY, UY))) return ZY
          } else eY(CY++, hY + 1, dY, Yr, MY, wY, kY, -1 / 0, 1 / 0), eY(CY++, hY + 1, MY, wY, dY, Yr, 1 ^ kY, -1 / 0, 1 / 0);
          if (Yr < JY) {
            var rr = aY(YY, hY, MY, wY, PY, UY),
              Dr = PY[fY * rr + hY],
              Fr = QY(YY, hY, rr, wY, PY, UY, Dr);
            if (Fr < wY && eY(CY++, hY, Yr, JY, Fr, wY, (4 | kY) + (GY ? 16 : 0), Dr, pY), MY < rr && eY(CY++, hY, Yr, JY, MY, rr, (2 | kY) + (GY ? 16 : 0), qY, Dr), rr + 1 === Fr) {
              if (void 0 !== (ZY = GY ? BY(YY, hY, rY, Yr, JY, xY, nY, rr, PY, UY[rr]) : NY(YY, hY, rY, kY, Yr, JY, xY, nY, rr, PY, UY[rr]))) return ZY
            } else if (rr < Fr) {
              var Ar;
              if (GY) {
                if (Yr < (Ar = EY(YY, hY, Yr, JY, xY, nY, Dr))) {
                  var Ir = QY(YY, hY, Yr, Ar, xY, nY, Dr);
                  if (hY === YY - 2) {
                    if (Yr < Ir && void 0 !== (ZY = gY.sweepComplete(YY, rY, Yr, Ir, xY, nY, rr, Fr, PY, UY))) return ZY;
                    if (Ir < Ar && void 0 !== (ZY = gY.sweepBipartite(YY, rY, Ir, Ar, xY, nY, rr, Fr, PY, UY))) return ZY
                  } else Yr < Ir && eY(CY++, hY + 1, Yr, Ir, rr, Fr, 16, -1 / 0, 1 / 0), Ir < Ar && (eY(CY++, hY + 1, Ir, Ar, rr, Fr, 0, -1 / 0, 1 / 0), eY(CY++, hY + 1, rr, Fr, Ir, Ar, 1, -1 / 0, 1 / 0))
                }
              } else Yr < (Ar = kY ? mY(YY, hY, Yr, JY, xY, nY, Dr) : EY(YY, hY, Yr, JY, xY, nY, Dr)) && (hY === YY - 2 ? ZY = kY ? gY.sweepBipartite(YY, rY, rr, Fr, PY, UY, Yr, Ar, xY, nY) : gY.sweepBipartite(YY, rY, Yr, Ar, xY, nY, rr, Fr, PY, UY) : (eY(CY++, hY + 1, Yr, Ar, rr, Fr, kY, -1 / 0, 1 / 0), eY(CY++, hY + 1, rr, Fr, Yr, Ar, 1 ^ kY, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var FY = DY(37660),
      AY = DY(37668),
      IY = DY(37708),
      RY = IY.partial,
      OY = IY.full,
      gY = DY(37687),
      aY = DY(37714),
      vY = DY(37720),
      uY = 128,
      sY = 1 << 22,
      iY = 1 << 22,
      yY = vY("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      QY = vY("lo===p0", ["p0"]),
      oY = vY("lo<p0", ["p0"]),
      WY = vY("hi<=p0", ["p0"]),
      EY = vY("lo<=p0&&p0<=hi", ["p0"]),
      mY = vY("lo<p0&&p0<=hi", ["p0"]),
      VY = 6,
      SY = 2,
      lY = FY.mallocInt32(1024),
      TY = FY.mallocDouble(1024);

    function eY(YY, rY, DY, FY, AY, IY, RY, OY, gY) {
      var aY = VY * YY;
      lY[aY] = rY, lY[aY + 1] = DY, lY[aY + 2] = FY, lY[aY + 3] = AY, lY[aY + 4] = IY, lY[aY + 5] = RY;
      var vY = SY * YY;
      TY[vY] = OY, TY[vY + 1] = gY
    }

    function NY(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY, vY) {
      var uY = 2 * YY,
        sY = gY * uY,
        iY = aY[sY + rY];
      YY: for (var yY = AY, QY = AY * uY; yY < IY; ++yY, QY += uY) {
        var oY = RY[QY + rY],
          WY = RY[QY + rY + YY];
        if (!(iY < oY || WY < iY) && (!FY || iY !== oY)) {
          for (var EY, mY = OY[yY], VY = rY + 1; VY < YY; ++VY) {
            oY = RY[QY + VY], WY = RY[QY + VY + YY];
            var SY = aY[sY + VY],
              lY = aY[sY + VY + YY];
            if (WY < SY || lY < oY) continue YY
          }
          if (void 0 !== (EY = FY ? DY(vY, mY) : DY(mY, vY))) return EY
        }
      }
    }

    function BY(YY, rY, DY, FY, AY, IY, RY, OY, gY, aY) {
      var vY = 2 * YY,
        uY = OY * vY,
        sY = gY[uY + rY];
      YY: for (var iY = FY, yY = FY * vY; iY < AY; ++iY, yY += vY) {
        var QY = RY[iY];
        if (QY !== aY) {
          var oY = IY[yY + rY],
            WY = IY[yY + rY + YY];
          if (!(sY < oY || WY < sY)) {
            for (var EY = rY + 1; EY < YY; ++EY) {
              oY = IY[yY + EY], WY = IY[yY + EY + YY];
              var mY = gY[uY + EY],
                VY = gY[uY + EY + YY];
              if (WY < mY || VY < oY) continue YY
            }
            var SY = DY(QY, aY);
            if (void 0 !== SY) return SY
          }
        }
      }
    }
  },
  37714: (YY, rY, DY) => {
    YY.exports = function(YY, rY, DY, RY, OY, gY) {
      if (RY <= DY + 1) return DY;
      var aY = DY,
        vY = RY,
        uY = RY + DY >>> 1,
        sY = 2 * YY,
        iY = uY,
        yY = OY[sY * uY + rY];
      for (; aY < vY;) {
        if (vY - aY < AY) {
          IY(YY, rY, aY, vY, OY, gY), yY = OY[sY * uY + rY];
          break
        }
        var QY = vY - aY,
          oY = Math.random() * QY + aY | 0,
          WY = OY[sY * oY + rY],
          EY = Math.random() * QY + aY | 0,
          mY = OY[sY * EY + rY],
          VY = Math.random() * QY + aY | 0,
          SY = OY[sY * VY + rY];
        WY <= mY ? SY >= mY ? (iY = EY, yY = mY) : WY >= SY ? (iY = oY, yY = WY) : (iY = VY, yY = SY) : mY >= SY ? (iY = EY, yY = mY) : SY >= WY ? (iY = oY, yY = WY) : (iY = VY, yY = SY);
        for (var lY = sY * (vY - 1), TY = sY * iY, eY = 0; eY < sY; ++eY, ++lY, ++TY) {
          var NY = OY[lY];
          OY[lY] = OY[TY], OY[TY] = NY
        }
        var BY = gY[vY - 1];
        gY[vY - 1] = gY[iY], gY[iY] = BY;
        for (lY = sY * (vY - 1), TY = sY * (iY = FY(YY, rY, aY, vY - 1, OY, gY, yY)), eY = 0; eY < sY; ++eY, ++lY, ++TY) {
          NY = OY[lY];
          OY[lY] = OY[TY], OY[TY] = NY
        }
        BY = gY[vY - 1];
        if (gY[vY - 1] = gY[iY], gY[iY] = BY, uY < iY) {
          for (vY = iY - 1; aY < vY && OY[sY * (vY - 1) + rY] === yY;) vY -= 1;
          vY += 1
        } else {
          if (!(iY < uY)) break;
          for (aY = iY + 1; aY < vY && OY[sY * aY + rY] === yY;) aY += 1
        }
      }
      return FY(YY, rY, DY, uY, OY, gY, OY[sY * uY + rY])
    };
    var FY = DY(37720)("lo<p0", ["p0"]),
      AY = 8;

    function IY(YY, rY, DY, FY, AY, IY) {
      for (var RY = 2 * YY, OY = RY * (DY + 1) + rY, gY = DY + 1; gY < FY; ++gY, OY += RY)
        for (var aY = AY[OY], vY = gY, uY = RY * (gY - 1); vY > DY && AY[uY + rY] > aY; --vY, uY -= RY) {
          for (var sY = uY, iY = uY + RY, yY = 0; yY < RY; ++yY, ++sY, ++iY) {
            var QY = AY[sY];
            AY[sY] = AY[iY], AY[iY] = QY
          }
          var oY = IY[vY];
          IY[vY] = IY[vY - 1], IY[vY - 1] = oY
        }
    }
  },
  37720: YY => {
    YY.exports = function(YY, DY) {
      var FY = "abcdef".split("").concat(DY),
        AY = [];
      YY.indexOf("lo") >= 0 && AY.push("lo=e[k+n]");
      YY.indexOf("hi") >= 0 && AY.push("hi=e[k+o]");
      return FY.push(rY.replace("_", AY.join()).replace("$", YY)), Function.apply(void 0, FY)
    };
    var rY = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  37693: YY => {
    YY.exports = function(YY, FY) {
      FY <= 4 * rY ? DY(0, FY - 1, YY) : aY(0, FY - 1, YY)
    };
    var rY = 32;

    function DY(YY, rY, DY) {
      for (var FY = 2 * (YY + 1), AY = YY + 1; AY <= rY; ++AY) {
        for (var IY = DY[FY++], RY = DY[FY++], OY = AY, gY = FY - 2; OY-- > YY;) {
          var aY = DY[gY - 2],
            vY = DY[gY - 1];
          if (aY < IY) break;
          if (aY === IY && vY < RY) break;
          DY[gY] = aY, DY[gY + 1] = vY, gY -= 2
        }
        DY[gY] = IY, DY[gY + 1] = RY
      }
    }

    function FY(YY, rY, DY) {
      rY *= 2;
      var FY = DY[YY *= 2],
        AY = DY[YY + 1];
      DY[YY] = DY[rY], DY[YY + 1] = DY[rY + 1], DY[rY] = FY, DY[rY + 1] = AY
    }

    function AY(YY, rY, DY) {
      rY *= 2, DY[YY *= 2] = DY[rY], DY[YY + 1] = DY[rY + 1]
    }

    function IY(YY, rY, DY, FY) {
      rY *= 2, DY *= 2;
      var AY = FY[YY *= 2],
        IY = FY[YY + 1];
      FY[YY] = FY[rY], FY[YY + 1] = FY[rY + 1], FY[rY] = FY[DY], FY[rY + 1] = FY[DY + 1], FY[DY] = AY, FY[DY + 1] = IY
    }

    function RY(YY, rY, DY, FY, AY) {
      rY *= 2, AY[YY *= 2] = AY[rY], AY[rY] = DY, AY[YY + 1] = AY[rY + 1], AY[rY + 1] = FY
    }

    function OY(YY, rY, DY) {
      rY *= 2;
      var FY = DY[YY *= 2],
        AY = DY[rY];
      return !(FY < AY) && (FY !== AY || DY[YY + 1] > DY[rY + 1])
    }

    function gY(YY, rY, DY, FY) {
      var AY = FY[YY *= 2];
      return AY < rY || AY === rY && FY[YY + 1] < DY
    }

    function aY(YY, vY, uY) {
      var sY = (vY - YY + 1) / 6 | 0,
        iY = YY + sY,
        yY = vY - sY,
        QY = YY + vY >> 1,
        oY = QY - sY,
        WY = QY + sY,
        EY = iY,
        mY = oY,
        VY = QY,
        SY = WY,
        lY = yY,
        TY = YY + 1,
        eY = vY - 1,
        NY = 0;
      OY(EY, mY, uY) && (NY = EY, EY = mY, mY = NY), OY(SY, lY, uY) && (NY = SY, SY = lY, lY = NY), OY(EY, VY, uY) && (NY = EY, EY = VY, VY = NY), OY(mY, VY, uY) && (NY = mY, mY = VY, VY = NY), OY(EY, SY, uY) && (NY = EY, EY = SY, SY = NY), OY(VY, SY, uY) && (NY = VY, VY = SY, SY = NY), OY(mY, lY, uY) && (NY = mY, mY = lY, lY = NY), OY(mY, VY, uY) && (NY = mY, mY = VY, VY = NY), OY(SY, lY, uY) && (NY = SY, SY = lY, lY = NY);
      for (var BY = uY[2 * mY], cY = uY[2 * mY + 1], KY = uY[2 * SY], HY = uY[2 * SY + 1], zY = 2 * EY, ZY = 2 * VY, CY = 2 * lY, fY = 2 * iY, jY = 2 * QY, hY = 2 * yY, dY = 0; dY < 2; ++dY) {
        var JY = uY[zY + dY],
          MY = uY[ZY + dY],
          wY = uY[CY + dY];
        uY[fY + dY] = JY, uY[jY + dY] = MY, uY[hY + dY] = wY
      }
      AY(oY, YY, uY), AY(WY, vY, uY);
      for (var bY = TY; bY <= eY; ++bY)
        if (gY(bY, BY, cY, uY)) bY !== TY && FY(bY, TY, uY), ++TY;
        else if (!gY(bY, KY, HY, uY))
        for (;;) {
          if (gY(eY, KY, HY, uY)) {
            gY(eY, BY, cY, uY) ? (IY(bY, TY, eY, uY), ++TY, --eY) : (FY(bY, eY, uY), --eY);
            break
          }
          if (--eY < bY) break
        }
      RY(YY, TY - 1, BY, cY, uY), RY(vY, eY + 1, KY, HY, uY), TY - 2 - YY <= rY ? DY(YY, TY - 2, uY) : aY(YY, TY - 2, uY), vY - (eY + 2) <= rY ? DY(eY + 2, vY, uY) : aY(eY + 2, vY, uY), eY - TY <= rY ? DY(TY, eY, uY) : aY(TY, eY, uY)
    }
  },
  37687: (YY, rY, DY) => {
    YY.exports = {
      init: function(YY) {
        var rY = AY.nextPow2(YY);
        gY.length < rY && (FY.free(gY), gY = FY.mallocInt32(rY));
        aY.length < rY && (FY.free(aY), aY = FY.mallocInt32(rY));
        vY.length < rY && (FY.free(vY), vY = FY.mallocInt32(rY));
        uY.length < rY && (FY.free(uY), uY = FY.mallocInt32(rY));
        sY.length < rY && (FY.free(sY), sY = FY.mallocInt32(rY));
        iY.length < rY && (FY.free(iY), iY = FY.mallocInt32(rY));
        var DY = 8 * rY;
        yY.length < DY && (FY.free(yY), yY = FY.mallocDouble(DY))
      },
      sweepBipartite: function(YY, rY, DY, FY, AY, OY, sY, iY, WY, EY) {
        for (var mY = 0, VY = 2 * YY, SY = YY - 1, lY = VY - 1, TY = DY; TY < FY; ++TY) {
          var eY = OY[TY],
            NY = VY * TY;
          yY[mY++] = AY[NY + SY], yY[mY++] = -(eY + 1), yY[mY++] = AY[NY + lY], yY[mY++] = eY
        }
        for (TY = sY; TY < iY; ++TY) {
          eY = EY[TY] + RY;
          var BY = VY * TY;
          yY[mY++] = WY[BY + SY], yY[mY++] = -eY, yY[mY++] = WY[BY + lY], yY[mY++] = eY
        }
        var cY = mY >>> 1;
        IY(yY, cY);
        var KY = 0,
          HY = 0;
        for (TY = 0; TY < cY; ++TY) {
          var zY = 0 | yY[2 * TY + 1];
          if (zY >= RY) QY(vY, uY, HY--, zY = zY - RY | 0);
          else if (zY >= 0) QY(gY, aY, KY--, zY);
          else if (zY <= -RY) {
            zY = -zY - RY | 0;
            for (var ZY = 0; ZY < KY; ++ZY) {
              if (void 0 !== (CY = rY(gY[ZY], zY))) return CY
            }
            oY(vY, uY, HY++, zY)
          } else {
            zY = -zY - 1 | 0;
            for (ZY = 0; ZY < HY; ++ZY) {
              var CY;
              if (void 0 !== (CY = rY(zY, vY[ZY]))) return CY
            }
            oY(gY, aY, KY++, zY)
          }
        }
      },
      sweepComplete: function(YY, rY, DY, FY, AY, RY, OY, WY, EY, mY) {
        for (var VY = 0, SY = 2 * YY, lY = YY - 1, TY = SY - 1, eY = DY; eY < FY; ++eY) {
          var NY = RY[eY] + 1 << 1,
            BY = SY * eY;
          yY[VY++] = AY[BY + lY], yY[VY++] = -NY, yY[VY++] = AY[BY + TY], yY[VY++] = NY
        }
        for (eY = OY; eY < WY; ++eY) {
          NY = mY[eY] + 1 << 1;
          var cY = SY * eY;
          yY[VY++] = EY[cY + lY], yY[VY++] = 1 | -NY, yY[VY++] = EY[cY + TY], yY[VY++] = 1 | NY
        }
        var KY = VY >>> 1;
        IY(yY, KY);
        var HY = 0,
          zY = 0,
          ZY = 0;
        for (eY = 0; eY < KY; ++eY) {
          var CY = 0 | yY[2 * eY + 1],
            fY = 1 & CY;
          if (eY < KY - 1 && CY >> 1 === yY[2 * eY + 3] >> 1 && (fY = 2, eY += 1), CY < 0) {
            for (var jY = -(CY >> 1) - 1, hY = 0; hY < ZY; ++hY) {
              if (void 0 !== (dY = rY(sY[hY], jY))) return dY
            }
            if (0 !== fY)
              for (hY = 0; hY < HY; ++hY) {
                if (void 0 !== (dY = rY(gY[hY], jY))) return dY
              }
            if (1 !== fY)
              for (hY = 0; hY < zY; ++hY) {
                var dY;
                if (void 0 !== (dY = rY(vY[hY], jY))) return dY
              }
            0 === fY ? oY(gY, aY, HY++, jY) : 1 === fY ? oY(vY, uY, zY++, jY) : 2 === fY && oY(sY, iY, ZY++, jY)
          } else {
            jY = (CY >> 1) - 1;
            0 === fY ? QY(gY, aY, HY--, jY) : 1 === fY ? QY(vY, uY, zY--, jY) : 2 === fY && QY(sY, iY, ZY--, jY)
          }
        }
      },
      scanBipartite: function(YY, rY, DY, FY, AY, OY, vY, uY, sY, iY, WY, EY) {
        var mY = 0,
          VY = 2 * YY,
          SY = rY,
          lY = rY + YY,
          TY = 1,
          eY = 1;
        FY ? eY = RY : TY = RY;
        for (var NY = AY; NY < OY; ++NY) {
          var BY = NY + TY,
            cY = VY * NY;
          yY[mY++] = vY[cY + SY], yY[mY++] = -BY, yY[mY++] = vY[cY + lY], yY[mY++] = BY
        }
        for (NY = sY; NY < iY; ++NY) {
          BY = NY + eY;
          var KY = VY * NY;
          yY[mY++] = WY[KY + SY], yY[mY++] = -BY
        }
        var HY = mY >>> 1;
        IY(yY, HY);
        var zY = 0;
        for (NY = 0; NY < HY; ++NY) {
          var ZY = 0 | yY[2 * NY + 1];
          if (ZY < 0) {
            var CY = !1;
            if ((BY = -ZY) >= RY ? (CY = !FY, BY -= RY) : (CY = !!FY, BY -= 1), CY) oY(gY, aY, zY++, BY);
            else {
              var fY = EY[BY],
                jY = VY * BY,
                hY = WY[jY + rY + 1],
                dY = WY[jY + rY + 1 + YY];
              YY: for (var JY = 0; JY < zY; ++JY) {
                var MY = gY[JY],
                  wY = VY * MY;
                if (!(dY < vY[wY + rY + 1] || vY[wY + rY + 1 + YY] < hY)) {
                  for (var bY = rY + 2; bY < YY; ++bY)
                    if (WY[jY + bY + YY] < vY[wY + bY] || vY[wY + bY + YY] < WY[jY + bY]) continue YY;
                  var XY, qY = uY[MY];
                  if (void 0 !== (XY = FY ? DY(fY, qY) : DY(qY, fY))) return XY
                }
              }
            }
          } else QY(gY, aY, zY--, ZY - TY)
        }
      },
      scanComplete: function(YY, rY, DY, FY, AY, OY, aY, vY, uY, sY, iY) {
        for (var QY = 0, oY = 2 * YY, WY = rY, EY = rY + YY, mY = FY; mY < AY; ++mY) {
          var VY = mY + RY,
            SY = oY * mY;
          yY[QY++] = OY[SY + WY], yY[QY++] = -VY, yY[QY++] = OY[SY + EY], yY[QY++] = VY
        }
        for (mY = vY; mY < uY; ++mY) {
          VY = mY + 1;
          var lY = oY * mY;
          yY[QY++] = sY[lY + WY], yY[QY++] = -VY
        }
        var TY = QY >>> 1;
        IY(yY, TY);
        var eY = 0;
        for (mY = 0; mY < TY; ++mY) {
          var NY = 0 | yY[2 * mY + 1];
          if (NY < 0) {
            if ((VY = -NY) >= RY) gY[eY++] = VY - RY;
            else {
              var BY = iY[VY -= 1],
                cY = oY * VY,
                KY = sY[cY + rY + 1],
                HY = sY[cY + rY + 1 + YY];
              YY: for (var zY = 0; zY < eY; ++zY) {
                var ZY = gY[zY],
                  CY = aY[ZY];
                if (CY === BY) break;
                var fY = oY * ZY;
                if (!(HY < OY[fY + rY + 1] || OY[fY + rY + 1 + YY] < KY)) {
                  for (var jY = rY + 2; jY < YY; ++jY)
                    if (sY[cY + jY + YY] < OY[fY + jY] || OY[fY + jY + YY] < sY[cY + jY]) continue YY;
                  var hY = DY(CY, BY);
                  if (void 0 !== hY) return hY
                }
              }
            }
          } else {
            for (VY = NY - RY, zY = eY - 1; zY >= 0; --zY)
              if (gY[zY] === VY) {
                for (jY = zY + 1; jY < eY; ++jY) gY[jY - 1] = gY[jY];
                break
              }-- eY
          }
        }
      }
    };
    var FY = DY(37660),
      AY = DY(37668),
      IY = DY(37693),
      RY = 1 << 28,
      OY = 1024,
      gY = FY.mallocInt32(OY),
      aY = FY.mallocInt32(OY),
      vY = FY.mallocInt32(OY),
      uY = FY.mallocInt32(OY),
      sY = FY.mallocInt32(OY),
      iY = FY.mallocInt32(OY),
      yY = FY.mallocDouble(8192);

    function QY(YY, rY, DY, FY) {
      var AY = rY[FY],
        IY = YY[DY - 1];
      YY[AY] = IY, rY[IY] = AY
    }

    function oY(YY, rY, DY, FY) {
      YY[DY] = FY, rY[FY] = DY
    }
  },
  37673: YY => {
    function rY(YY, DY, FY) {
      var AY = 0 | YY[FY];
      if (AY <= 0) return [];
      var IY, RY = new Array(AY);
      if (FY === YY.length - 1)
        for (IY = 0; IY < AY; ++IY) RY[IY] = DY;
      else
        for (IY = 0; IY < AY; ++IY) RY[IY] = rY(YY, DY, FY + 1);
      return RY
    }
    YY.exports = function(YY, DY) {
      switch ("undefined" === typeof DY && (DY = 0), typeof YY) {
        case "number":
          if (YY > 0) return function(YY, rY) {
            var DY, FY;
            for (DY = new Array(YY), FY = 0; FY < YY; ++FY) DY[FY] = rY;
            return DY
          }(0 | YY, DY);
          break;
        case "object":
          if ("number" === typeof YY.length) return rY(YY, DY, 0)
      }
      return []
    }
  },
  37625: (YY, rY, DY) => {
    YY.exports = function() {
      var YY = this;
      this.components = {}, this.comps = this.components;
      var rY = this.components,
        DY = 1,
        AY = {},
        IY = [],
        RY = [],
        OY = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function gY(YY, DY) {
        var FY = rY[DY],
          IY = AY[DY],
          RY = IY.hash[YY];
        RY && (IY.remove(YY), FY.kS && (FY.multi ? (RY.forEach((rY => {
          rY && FY.kS(YY, rY)
        })), RY.length = 0) : FY.kS(YY, RY)), OY.removals.push(IY), aY())
      }

      function aY() {
        OY.timeout || (OY.timeout = !0, setTimeout(vY, 1))
      }

      function vY() {
        OY.timeout = !1, uY()
      }

      function uY() {
        OY.multiComps.length && function(YY) {
          for (var rY = 0; rY < YY.length; rY++) {
            var {
              entID: DY,
              data: FY
            } = YY[rY], AY = FY.hash[DY];
            if (AY) {
              for (var IY = 0; IY < AY.length; IY++) AY[IY] || (AY.splice(IY, 1), IY--);
              0 === AY.length && (FY.remove(DY), OY.removals.push(FY))
            }
          }
          YY.length = 0
        }(OY.multiComps), OY.removals.length && function(YY) {
          for (var rY = 0; rY < YY.length; rY++) {
            YY[rY].flush()
          }
          YY.length = 0
        }(OY.removals)
      }
      this.HQ = AY, this._systems = IY, this._renderSystems = RY, this.gM = function(rY) {
        var FY = DY++;
        return Array.isArray(rY) && rY.forEach((rY => YY.zN(FY, rY))), FY
      }, this.deleteEntity = function(rY) {
        return Object.keys(AY).forEach((YY => {
          AY[YY].hash[rY] && gY(rY, YY)
        })), YY
      }, this.LYY = function(YY) {
        if (!YY) throw new Error("Missing component definition");
        var DY = YY.name;
        if (!DY) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof DY) throw new Error("Component name must be a string.");
        if ("" === DY) throw new Error("Component name must be a non-empty string.");
        if (AY[DY]) throw new Error(`Component ${DY} already exists.`);
        var OY = {};
        return OY.name = DY, OY.multi = !!YY.multi, OY.order = isNaN(YY.order) ? 99 : YY.order, OY.stateConstructor = YY.stateConstructor || null, OY.state = YY.state || {}, OY.kE = YY.kE || null, OY.kS = YY.kS || null, OY.system = YY.system || null, OY.Im = YY.Im || null, rY[DY] = OY, AY[DY] = new FY, AY[DY]._pendingMultiCleanup = !1, AY[DY]._multiCleanupIDs = OY.multi ? [] : null, OY.system && (IY.push(DY), IY.sort(((YY, DY) => rY[YY].order - rY[DY].order))), OY.Im && (RY.push(DY), RY.sort(((YY, DY) => rY[YY].order - rY[DY].order))), DY
      }, this.overwriteComponent = function(YY, DY) {
        var FY = rY[YY];
        if (!FY) throw new Error(`Unknown component: ${YY}`);
        if (!DY) throw new Error("Missing component definition");
        if (FY.name !== DY.name) throw new Error("Overwriting component must use the same name property.");
        var OY = {};
        OY.name = YY, OY.multi = !!DY.multi, OY.order = isNaN(DY.order) ? 99 : DY.order, OY.state = DY.state || {}, OY.kE = DY.kE || null, OY.kS = DY.kS || null, OY.system = DY.system || null, OY.Im = DY.Im || null, rY[YY] = OY, AY[YY]._pendingMultiCleanup = !1, AY[YY]._multiCleanupIDs = OY.multi ? [] : null;
        var gY = IY.indexOf(YY);
        OY.system && gY < 0 && IY.push(YY), !OY.system && gY >= 0 && IY.splice(gY, 1), IY.sort(((YY, DY) => rY[YY].order - rY[DY].order));
        var aY = RY.indexOf(YY);
        OY.Im && aY < 0 && RY.push(YY), !OY.Im && aY >= 0 && RY.splice(aY, 1), RY.sort(((YY, DY) => rY[YY].order - rY[DY].order));
        var vY = OY.state;
        return this.oN(YY).forEach((YY => {
          for (var rY in vY) rY in YY || (YY[rY] = vY[rY]);
          OY.kE && OY.kE(YY.mN, YY)
        })), YY
      }, this.deleteComponent = function(DY) {
        var FY = AY[DY];
        if (!FY) throw new Error(`Unknown component: ${DY}`);
        FY.flush(), FY.list.forEach((YY => {
          YY && gY(YY.mN || YY[0].mN, DY)
        }));
        var OY = IY.indexOf(DY),
          aY = RY.indexOf(DY);
        return OY > -1 && IY.splice(OY, 1), aY > -1 && RY.splice(aY, 1), AY[DY].dispose(), delete AY[DY], delete rY[DY], YY
      }, this.zN = function(YY, DY, FY) {
        var IY, RY = rY[DY],
          OY = AY[DY];
        if (!OY) throw new Error(`Unknown component: ${DY}.`);
        if (OY.hash[YY] && !RY.multi) throw new Error(`Entity ${YY} already has component: ${DY}.`);
        if (RY.stateConstructor) {
          if (!(IY = new RY.stateConstructor).hasOwnProperty("mN")) throw new Error(`Component ${RY.name} stateConstructor type does not have property __id`);
          Object.assign(IY, RY.state, FY)
        } else IY = {
          mN: YY,
          ...RY.state,
          ...FY
        };
        if (IY.mN = YY, RY.multi) {
          var gY = OY.hash[YY];
          gY || (gY = [], OY.add(YY, gY)), gY.push(IY)
        } else OY.add(YY, IY);
        return RY.kE && RY.kE(YY, IY), this
      }, this.t5 = function(YY, rY) {
        var DY = AY[rY];
        if (!DY) throw new Error(`Unknown component: ${rY}.`);
        return !!DY.hash[YY]
      }, this.ZN = function(rY, DY) {
        if (!AY[DY]) throw new Error(`Unknown component: ${DY}.`);
        return gY(rY, DY), YY
      }, this.getState = function(YY, rY) {
        var DY = AY[rY];
        if (!DY) throw new Error(`Unknown component: ${rY}.`);
        return DY.hash[YY]
      }, this.oN = function(YY) {
        var rY = AY[YY];
        if (!rY) throw new Error(`Unknown component: ${YY}.`);
        return uY(), rY.list
      }, this.zYY = function(YY) {
        if (!AY[YY]) throw new Error(`Unknown component: ${YY}.`);
        var rY = AY[YY].hash;
        return YY => rY[YY]
      }, this.dYY = function(YY) {
        if (!AY[YY]) throw new Error(`Unknown component: ${YY}.`);
        var rY = AY[YY].hash;
        return YY => !!rY[YY]
      }, this.Zu = function(DY) {
        uY();
        for (var FY = 0; FY < IY.length; FY++) {
          var RY = IY[FY],
            OY = rY[RY],
            gY = AY[RY];
          OY.system(DY, gY.list), uY()
        }
        return YY
      }, this.render = function(DY) {
        uY();
        for (var FY = 0; FY < RY.length; FY++) {
          var IY = RY[FY],
            OY = rY[IY],
            gY = AY[IY];
          OY.Im(DY, gY.list), uY()
        }
        return YY
      }, this.removeMultiComponent = function(DY, FY, IY) {
        var RY = rY[FY],
          gY = AY[FY];
        if (!gY) throw new Error(`Unknown component: ${FY}.`);
        if (!RY.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(YY, rY, DY, FY) {
          var AY = DY.hash[YY];
          if (AY) {
            var IY = AY[FY];
            IY && (AY[FY] = null, rY.kS && rY.kS(YY, IY), OY.multiComps.push({
              entID: YY,
              data: DY
            }), aY())
          }
        }(DY, RY, gY, IY), YY
      }
    };
    var FY = DY(37630)
  },
  37630: YY => {
    function rY(YY, rY) {
      var DY = YY._map[rY];
      if (delete YY.hash[rY], delete YY._map[rY], DY === YY.list.length - 1) YY.list.pop(), YY._idList.pop();
      else {
        var FY = YY.list.pop();
        YY.list[DY] = FY;
        var AY = YY._idList.pop();
        YY._idList[DY] = AY, YY._map[AY] = DY
      }
    }
    YY.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(YY, rY) {
        if ("number" === typeof this._map[YY]) {
          var DY = this._map[YY];
          this.hash[YY] = rY, this.list[DY] = rY, this._idList[DY] = YY
        } else this._map[YY] = this.list.length, this.hash[YY] = rY, this.list.push(rY), this._idList.push(YY)
      }
      remove(YY) {
        var rY = this._map[YY];
        this.hash[YY] = null, this.list[rY] = null, this._pendingRemovals.push(YY)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var YY = 0; YY < this._pendingRemovals.length; YY++) {
          var DY = this._pendingRemovals[YY];
          null === this.hash[DY] && rY(this, DY)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  37051: YY => {
    YY.exports = function(YY) {
      for (var rY = new Array(YY), DY = 0; DY < YY; ++DY) rY[DY] = DY;
      return rY
    }
  },
  37055: YY => {
    function rY(YY) {
      return !!YY.constructor && "function" === typeof YY.constructor.isBuffer && YY.constructor.isBuffer(YY)
    }
    YY.exports = function(YY) {
      return null != YY && (rY(YY) || function(YY) {
        return "function" === typeof YY.readFloatLE && "function" === typeof YY.slice && rY(YY.slice(0, 0))
      }(YY) || !!YY._isBuffer)
    }
  },
  37389: (YY, rY, DY) => {
    YY = DY.nmd(YY);
    var FY = "__lodash_hash_undefined__",
      AY = 9007199254740991,
      IY = "[object Arguments]",
      RY = "[object Boolean]",
      OY = "[object Date]",
      gY = "[object Function]",
      aY = "[object GeneratorFunction]",
      vY = "[object Map]",
      uY = "[object Number]",
      sY = "[object Object]",
      iY = "[object Promise]",
      yY = "[object RegExp]",
      QY = "[object Set]",
      oY = "[object String]",
      WY = "[object Symbol]",
      EY = "[object WeakMap]",
      mY = "[object ArrayBuffer]",
      VY = "[object DataView]",
      SY = "[object Float32Array]",
      lY = "[object Float64Array]",
      TY = "[object Int8Array]",
      eY = "[object Int16Array]",
      NY = "[object Int32Array]",
      BY = "[object Uint8Array]",
      cY = "[object Uint8ClampedArray]",
      KY = "[object Uint16Array]",
      HY = "[object Uint32Array]",
      zY = /\w*$/,
      ZY = /^\[object .+?Constructor\]$/,
      CY = /^(?:0|[1-9]\d*)$/,
      fY = {};
    fY[IY] = fY["[object Array]"] = fY[mY] = fY[VY] = fY[RY] = fY[OY] = fY[SY] = fY[lY] = fY[TY] = fY[eY] = fY[NY] = fY[vY] = fY[uY] = fY[sY] = fY[yY] = fY[QY] = fY[oY] = fY[WY] = fY[BY] = fY[cY] = fY[KY] = fY[HY] = !0, fY["[object Error]"] = fY[gY] = fY[EY] = !1;
    var jY = "object" == typeof DY.g && DY.g && DY.g.Object === Object && DY.g,
      hY = "object" == typeof self && self && self.Object === Object && self,
      dY = jY || hY || Function("return this")(),
      JY = rY && !rY.nodeType && rY,
      MY = JY && YY && !YY.nodeType && YY,
      wY = MY && MY.exports === JY;

    function bY(YY, rY) {
      return YY.set(rY[0], rY[1]), YY
    }

    function XY(YY, rY) {
      return YY.add(rY), YY
    }

    function qY(YY, rY, DY, FY) {
      var AY = -1,
        IY = YY ? YY.length : 0;
      for (FY && IY && (DY = YY[++AY]); ++AY < IY;) DY = rY(DY, YY[AY], AY, YY);
      return DY
    }

    function pY(YY) {
      var rY = !1;
      if (null != YY && "function" != typeof YY.toString) try {
        rY = !!(YY + "")
      } catch (DY) {}
      return rY
    }

    function kY(YY) {
      var rY = -1,
        DY = Array(YY.size);
      return YY.forEach((function(YY, FY) {
        DY[++rY] = [FY, YY]
      })), DY
    }

    function GY(YY, rY) {
      return function(DY) {
        return YY(rY(DY))
      }
    }

    function xY(YY) {
      var rY = -1,
        DY = Array(YY.size);
      return YY.forEach((function(YY) {
        DY[++rY] = YY
      })), DY
    }
    var nY = Array.prototype,
      PY = Function.prototype,
      UY = Object.prototype,
      LY = dY["__core-js_shared__"],
      tY = function() {
        var YY = /[^.]+$/.exec(LY && LY.keys && LY.keys.IE_PROTO || "");
        return YY ? "Symbol(src)_1." + YY : ""
      }(),
      Yr = PY.toString,
      rr = UY.hasOwnProperty,
      Dr = UY.toString,
      Fr = RegExp("^" + Yr.call(rr).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      Ar = wY ? dY.Ny : void 0,
      Ir = dY.Symbol,
      Rr = dY.Uint8Array,
      Or = GY(Object.getPrototypeOf, Object),
      gr = Object.create,
      ar = UY.propertyIsEnumerable,
      vr = nY.splice,
      ur = Object.getOwnPropertySymbols,
      sr = Ar ? Ar.isBuffer : void 0,
      ir = GY(Object.keys, Object),
      yr = wr(dY, "DataView"),
      Qr = wr(dY, "Map"),
      or = wr(dY, "Promise"),
      Wr = wr(dY, "Set"),
      Er = wr(dY, "WeakMap"),
      mr = wr(Object, "create"),
      Vr = kr(yr),
      Sr = kr(Qr),
      lr = kr(or),
      Tr = kr(Wr),
      er = kr(Er),
      Nr = Ir ? Ir.prototype : void 0,
      Br = Nr ? Nr.valueOf : void 0;

    function cr(YY) {
      var rY = -1,
        DY = YY ? YY.length : 0;
      for (this.clear(); ++rY < DY;) {
        var FY = YY[rY];
        this.set(FY[0], FY[1])
      }
    }

    function Kr(YY) {
      var rY = -1,
        DY = YY ? YY.length : 0;
      for (this.clear(); ++rY < DY;) {
        var FY = YY[rY];
        this.set(FY[0], FY[1])
      }
    }

    function Hr(YY) {
      var rY = -1,
        DY = YY ? YY.length : 0;
      for (this.clear(); ++rY < DY;) {
        var FY = YY[rY];
        this.set(FY[0], FY[1])
      }
    }

    function zr(YY) {
      this.__data__ = new Kr(YY)
    }

    function Zr(YY, rY) {
      var DY = xr(YY) || function(YY) {
          return function(YY) {
            return function(YY) {
              return !!YY && "object" == typeof YY
            }(YY) && nr(YY)
          }(YY) && rr.call(YY, "callee") && (!ar.call(YY, "callee") || Dr.call(YY) == IY)
        }(YY) ? function(YY, rY) {
          for (var DY = -1, FY = Array(YY); ++DY < YY;) FY[DY] = rY(DY);
          return FY
        }(YY.length, String) : [],
        FY = DY.length,
        AY = !!FY;
      for (var RY in YY) !rY && !rr.call(YY, RY) || AY && ("length" == RY || qr(RY, FY)) || DY.push(RY);
      return DY
    }

    function Cr(YY, rY, DY) {
      var FY = YY[rY];
      rr.call(YY, rY) && Gr(FY, DY) && (void 0 !== DY || rY in YY) || (YY[rY] = DY)
    }

    function fr(YY, rY) {
      for (var DY = YY.length; DY--;)
        if (Gr(YY[DY][0], rY)) return DY;
      return -1
    }

    function jr(YY, rY, DY, FY, AY, iY, EY) {
      var ZY;
      if (FY && (ZY = iY ? FY(YY, AY, iY, EY) : FY(YY)), void 0 !== ZY) return ZY;
      if (!Lr(YY)) return YY;
      var CY = xr(YY);
      if (CY) {
        if (ZY = function(YY) {
            var rY = YY.length,
              DY = YY.constructor(rY);
            rY && "string" == typeof YY[0] && rr.call(YY, "index") && (DY.index = YY.index, DY.input = YY.input);
            return DY
          }(YY), !rY) return function(YY, rY) {
          var DY = -1,
            FY = YY.length;
          rY || (rY = Array(FY));
          for (; ++DY < FY;) rY[DY] = YY[DY];
          return rY
        }(YY, ZY)
      } else {
        var jY = Xr(YY),
          hY = jY == gY || jY == aY;
        if (Pr(YY)) return function(YY, rY) {
          if (rY) return YY.slice();
          var DY = new YY.constructor(YY.length);
          return YY.copy(DY), DY
        }(YY, rY);
        if (jY == sY || jY == IY || hY && !iY) {
          if (pY(YY)) return iY ? YY : {};
          if (ZY = function(YY) {
              return "function" != typeof YY.constructor || pr(YY) ? {} : (rY = Or(YY), Lr(rY) ? gr(rY) : {});
              var rY
            }(hY ? {} : YY), !rY) return function(YY, rY) {
            return Jr(YY, br(YY), rY)
          }(YY, function(YY, rY) {
            return YY && Jr(rY, tr(rY), YY)
          }(ZY, YY))
        } else {
          if (!fY[jY]) return iY ? YY : {};
          ZY = function(YY, rY, DY, FY) {
            var AY = YY.constructor;
            switch (rY) {
              case mY:
                return dr(YY);
              case RY:
              case OY:
                return new AY(+YY);
              case VY:
                return function(YY, rY) {
                  var DY = rY ? dr(YY.buffer) : YY.buffer;
                  return new YY.constructor(DY, YY.byteOffset, YY.byteLength)
                }(YY, FY);
              case SY:
              case lY:
              case TY:
              case eY:
              case NY:
              case BY:
              case cY:
              case KY:
              case HY:
                return function(YY, rY) {
                  var DY = rY ? dr(YY.buffer) : YY.buffer;
                  return new YY.constructor(DY, YY.byteOffset, YY.length)
                }(YY, FY);
              case vY:
                return function(YY, rY, DY) {
                  var FY = rY ? DY(kY(YY), !0) : kY(YY);
                  return qY(FY, bY, new YY.constructor)
                }(YY, FY, DY);
              case uY:
              case oY:
                return new AY(YY);
              case yY:
                return function(YY) {
                  var rY = new YY.constructor(YY.source, zY.exec(YY));
                  return rY.lastIndex = YY.lastIndex, rY
                }(YY);
              case QY:
                return function(YY, rY, DY) {
                  var FY = rY ? DY(xY(YY), !0) : xY(YY);
                  return qY(FY, XY, new YY.constructor)
                }(YY, FY, DY);
              case WY:
                return IY = YY, Br ? Object(Br.call(IY)) : {}
            }
            var IY
          }(YY, jY, jr, rY)
        }
      }
      EY || (EY = new zr);
      var dY = EY.get(YY);
      if (dY) return dY;
      if (EY.set(YY, ZY), !CY) var JY = DY ? function(YY) {
        return function(YY, rY, DY) {
          var FY = rY(YY);
          return xr(YY) ? FY : function(YY, rY) {
            for (var DY = -1, FY = rY.length, AY = YY.length; ++DY < FY;) YY[AY + DY] = rY[DY];
            return YY
          }(FY, DY(YY))
        }(YY, tr, br)
      }(YY) : tr(YY);
      return function(YY, rY) {
        for (var DY = -1, FY = YY ? YY.length : 0; ++DY < FY && !1 !== rY(YY[DY], DY, YY););
      }(JY || YY, (function(AY, IY) {
        JY && (AY = YY[IY = AY]), Cr(ZY, IY, jr(AY, rY, DY, FY, IY, YY, EY))
      })), ZY
    }

    function hr(YY) {
      return !(!Lr(YY) || (rY = YY, tY && tY in rY)) && (Ur(YY) || pY(YY) ? Fr : ZY).test(kr(YY));
      var rY
    }

    function dr(YY) {
      var rY = new YY.constructor(YY.byteLength);
      return new Rr(rY).set(new Rr(YY)), rY
    }

    function Jr(YY, rY, DY, FY) {
      DY || (DY = {});
      for (var AY = -1, IY = rY.length; ++AY < IY;) {
        var RY = rY[AY],
          OY = FY ? FY(DY[RY], YY[RY], RY, DY, YY) : void 0;
        Cr(DY, RY, void 0 === OY ? YY[RY] : OY)
      }
      return DY
    }

    function Mr(YY, rY) {
      var DY = YY.__data__;
      return function(YY) {
        var rY = typeof YY;
        return "string" == rY || "number" == rY || "symbol" == rY || "boolean" == rY ? "__proto__" !== YY : null === YY
      }(rY) ? DY["string" == typeof rY ? "string" : "hash"] : DY.map
    }

    function wr(YY, rY) {
      var DY = function(YY, rY) {
        return null == YY ? void 0 : YY[rY]
      }(YY, rY);
      return hr(DY) ? DY : void 0
    }
    cr.prototype.clear = function() {
      this.__data__ = mr ? mr(null) : {}
    }, cr.prototype.delete = function(YY) {
      return this.has(YY) && delete this.__data__[YY]
    }, cr.prototype.get = function(YY) {
      var rY = this.__data__;
      if (mr) {
        var DY = rY[YY];
        return DY === FY ? void 0 : DY
      }
      return rr.call(rY, YY) ? rY[YY] : void 0
    }, cr.prototype.has = function(YY) {
      var rY = this.__data__;
      return mr ? void 0 !== rY[YY] : rr.call(rY, YY)
    }, cr.prototype.set = function(YY, rY) {
      return this.__data__[YY] = mr && void 0 === rY ? FY : rY, this
    }, Kr.prototype.clear = function() {
      this.__data__ = []
    }, Kr.prototype.delete = function(YY) {
      var rY = this.__data__,
        DY = fr(rY, YY);
      return !(DY < 0) && (DY == rY.length - 1 ? rY.pop() : vr.call(rY, DY, 1), !0)
    }, Kr.prototype.get = function(YY) {
      var rY = this.__data__,
        DY = fr(rY, YY);
      return DY < 0 ? void 0 : rY[DY][1]
    }, Kr.prototype.has = function(YY) {
      return fr(this.__data__, YY) > -1
    }, Kr.prototype.set = function(YY, rY) {
      var DY = this.__data__,
        FY = fr(DY, YY);
      return FY < 0 ? DY.push([YY, rY]) : DY[FY][1] = rY, this
    }, Hr.prototype.clear = function() {
      this.__data__ = {
        hash: new cr,
        map: new(Qr || Kr),
        string: new cr
      }
    }, Hr.prototype.delete = function(YY) {
      return Mr(this, YY).delete(YY)
    }, Hr.prototype.get = function(YY) {
      return Mr(this, YY).get(YY)
    }, Hr.prototype.has = function(YY) {
      return Mr(this, YY).has(YY)
    }, Hr.prototype.set = function(YY, rY) {
      return Mr(this, YY).set(YY, rY), this
    }, zr.prototype.clear = function() {
      this.__data__ = new Kr
    }, zr.prototype.delete = function(YY) {
      return this.__data__.delete(YY)
    }, zr.prototype.get = function(YY) {
      return this.__data__.get(YY)
    }, zr.prototype.has = function(YY) {
      return this.__data__.has(YY)
    }, zr.prototype.set = function(YY, rY) {
      var DY = this.__data__;
      if (DY instanceof Kr) {
        var FY = DY.__data__;
        if (!Qr || FY.length < 199) return FY.push([YY, rY]), this;
        DY = this.__data__ = new Hr(FY)
      }
      return DY.set(YY, rY), this
    };
    var br = ur ? GY(ur, Object) : function() {
        return []
      },
      Xr = function(YY) {
        return Dr.call(YY)
      };

    function qr(YY, rY) {
      return !!(rY = null == rY ? AY : rY) && ("number" == typeof YY || CY.test(YY)) && YY > -1 && YY % 1 == 0 && YY < rY
    }

    function pr(YY) {
      var rY = YY && YY.constructor;
      return YY === ("function" == typeof rY && rY.prototype || UY)
    }

    function kr(YY) {
      if (null != YY) {
        try {
          return Yr.call(YY)
        } catch (rY) {}
        try {
          return YY + ""
        } catch (rY) {}
      }
      return ""
    }

    function Gr(YY, rY) {
      return YY === rY || YY !== YY && rY !== rY
    }(yr && Xr(new yr(new ArrayBuffer(1))) != VY || Qr && Xr(new Qr) != vY || or && Xr(or.resolve()) != iY || Wr && Xr(new Wr) != QY || Er && Xr(new Er) != EY) && (Xr = function(YY) {
      var rY = Dr.call(YY),
        DY = rY == sY ? YY.constructor : void 0,
        FY = DY ? kr(DY) : void 0;
      if (FY) switch (FY) {
        case Vr:
          return VY;
        case Sr:
          return vY;
        case lr:
          return iY;
        case Tr:
          return QY;
        case er:
          return EY
      }
      return rY
    });
    var xr = Array.isArray;

    function nr(YY) {
      return null != YY && function(YY) {
        return "number" == typeof YY && YY > -1 && YY % 1 == 0 && YY <= AY
      }(YY.length) && !Ur(YY)
    }
    var Pr = sr || function() {
      return !1
    };

    function Ur(YY) {
      var rY = Lr(YY) ? Dr.call(YY) : "";
      return rY == gY || rY == aY
    }

    function Lr(YY) {
      var rY = typeof YY;
      return !!YY && ("object" == rY || "function" == rY)
    }

    function tr(YY) {
      return nr(YY) ? Zr(YY) : function(YY) {
        if (!pr(YY)) return ir(YY);
        var rY = [];
        for (var DY in Object(YY)) rr.call(YY, DY) && "constructor" != DY && rY.push(DY);
        return rY
      }(YY)
    }
    YY.exports = function(YY) {
      return jr(YY, !0, !0)
    }
  },
  37045: (YY, rY, DY) => {
    var FY = DY(37051),
      AY = DY(37055),
      IY = "undefined" !== typeof Float64Array;

    function RY(YY, rY) {
      return YY[0] - rY[0]
    }

    function OY() {
      var YY, rY = this.stride,
        DY = new Array(rY.length);
      for (YY = 0; YY < DY.length; ++YY) DY[YY] = [Math.abs(rY[YY]), YY];
      DY.sort(RY);
      var FY = new Array(DY.length);
      for (YY = 0; YY < FY.length; ++YY) FY[YY] = DY[YY][1];
      return FY
    }

    function gY(YY, rY) {
      var DY = ["View", rY, "d", YY].join("");
      rY < 0 && (DY = "View_Nil" + YY);
      var AY = "generic" === YY;
      if (-1 === rY) {
        var IY = "function " + DY + "(a){this.data=a;};var proto=" + DY + ".prototype;proto.dtype='" + YY + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + DY + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + DY + "(a){return new " + DY + "(a);}";
        return new Function(IY)()
      }
      if (0 === rY) {
        IY = "function " + DY + "(a,d) {this.data = a;this.offset = d};var proto=" + DY + ".prototype;proto.dtype='" + YY + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + DY + "_copy() {return new " + DY + "(this.data,this.offset)};proto.pick=function " + DY + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + DY + "_get(){return " + (AY ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + DY + "_set(v){return " + (AY ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + DY + "(a,b,c,d){return new " + DY + "(a,d)}";
        return new Function("TrivialArray", IY)(aY[YY][0])
      }
      IY = ["'use strict'"];
      var RY = FY(rY),
        gY = RY.map((function(YY) {
          return "i" + YY
        })),
        vY = "this.offset+" + RY.map((function(YY) {
          return "this.stride[" + YY + "]*i" + YY
        })).join("+"),
        uY = RY.map((function(YY) {
          return "b" + YY
        })).join(","),
        sY = RY.map((function(YY) {
          return "c" + YY
        })).join(",");
      IY.push("function " + DY + "(a," + uY + "," + sY + ",d){this.data=a", "this.shape=[" + uY + "]", "this.stride=[" + sY + "]", "this.offset=d|0}", "var proto=" + DY + ".prototype", "proto.dtype='" + YY + "'", "proto.dimension=" + rY), IY.push("Object.defineProperty(proto,'size',{get:function " + DY + "_size(){return " + RY.map((function(YY) {
        return "this.shape[" + YY + "]"
      })).join("*"), "}})"), 1 === rY ? IY.push("proto.order=[0]") : (IY.push("Object.defineProperty(proto,'order',{get:"), rY < 4 ? (IY.push("function " + DY + "_order(){"), 2 === rY ? IY.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === rY && IY.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : IY.push("ORDER})")), IY.push("proto.set=function " + DY + "_set(" + gY.join(",") + ",v){"), AY ? IY.push("return this.data.set(" + vY + ",v)}") : IY.push("return this.data[" + vY + "]=v}"), IY.push("proto.get=function " + DY + "_get(" + gY.join(",") + "){"), AY ? IY.push("return this.data.get(" + vY + ")}") : IY.push("return this.data[" + vY + "]}"), IY.push("proto.index=function " + DY + "_index(", gY.join(), "){return " + vY + "}"), IY.push("proto.hi=function " + DY + "_hi(" + gY.join(",") + "){return new " + DY + "(this.data," + RY.map((function(YY) {
        return ["(typeof i", YY, "!=='number'||i", YY, "<0)?this.shape[", YY, "]:i", YY, "|0"].join("")
      })).join(",") + "," + RY.map((function(YY) {
        return "this.stride[" + YY + "]"
      })).join(",") + ",this.offset)}");
      var iY = RY.map((function(YY) {
          return "a" + YY + "=this.shape[" + YY + "]"
        })),
        yY = RY.map((function(YY) {
          return "c" + YY + "=this.stride[" + YY + "]"
        }));
      IY.push("proto.lo=function " + DY + "_lo(" + gY.join(",") + "){var b=this.offset,d=0," + iY.join(",") + "," + yY.join(","));
      for (var QY = 0; QY < rY; ++QY) IY.push("if(typeof i" + QY + "==='number'&&i" + QY + ">=0){d=i" + QY + "|0;b+=c" + QY + "*d;a" + QY + "-=d}");
      IY.push("return new " + DY + "(this.data," + RY.map((function(YY) {
        return "a" + YY
      })).join(",") + "," + RY.map((function(YY) {
        return "c" + YY
      })).join(",") + ",b)}"), IY.push("proto.step=function " + DY + "_step(" + gY.join(",") + "){var " + RY.map((function(YY) {
        return "a" + YY + "=this.shape[" + YY + "]"
      })).join(",") + "," + RY.map((function(YY) {
        return "b" + YY + "=this.stride[" + YY + "]"
      })).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
      for (QY = 0; QY < rY; ++QY) IY.push("if(typeof i" + QY + "==='number'){d=i" + QY + "|0;if(d<0){c+=b" + QY + "*(a" + QY + "-1);a" + QY + "=ceil(-a" + QY + "/d)}else{a" + QY + "=ceil(a" + QY + "/d)}b" + QY + "*=d}");
      IY.push("return new " + DY + "(this.data," + RY.map((function(YY) {
        return "a" + YY
      })).join(",") + "," + RY.map((function(YY) {
        return "b" + YY
      })).join(",") + ",c)}");
      var oY = new Array(rY),
        WY = new Array(rY);
      for (QY = 0; QY < rY; ++QY) oY[QY] = "a[i" + QY + "]", WY[QY] = "b[i" + QY + "]";
      IY.push("proto.transpose=function " + DY + "_transpose(" + gY + "){" + gY.map((function(YY, rY) {
        return YY + "=(" + YY + "===undefined?" + rY + ":" + YY + "|0)"
      })).join(";"), "var a=this.shape,b=this.stride;return new " + DY + "(this.data," + oY.join(",") + "," + WY.join(",") + ",this.offset)}"), IY.push("proto.pick=function " + DY + "_pick(" + gY + "){var a=[],b=[],c=this.offset");
      for (QY = 0; QY < rY; ++QY) IY.push("if(typeof i" + QY + "==='number'&&i" + QY + ">=0){c=(c+this.stride[" + QY + "]*i" + QY + ")|0}else{a.push(this.shape[" + QY + "]);b.push(this.stride[" + QY + "])}");
      return IY.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), IY.push("return function construct_" + DY + "(data,shape,stride,offset){return new " + DY + "(data," + RY.map((function(YY) {
        return "shape[" + YY + "]"
      })).join(",") + "," + RY.map((function(YY) {
        return "stride[" + YY + "]"
      })).join(",") + ",offset)}"), new Function("CTOR_LIST", "ORDER", IY.join("\n"))(aY[YY], OY)
    }
    var aY = {
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
    YY.exports = function(YY, rY, DY, FY) {
      if (void 0 === YY) return (0, aY.array[0])([]);
      "number" === typeof YY && (YY = [YY]), void 0 === rY && (rY = [YY.length]);
      var RY = rY.length;
      if (void 0 === DY) {
        DY = new Array(RY);
        for (var OY = RY - 1, vY = 1; OY >= 0; --OY) DY[OY] = vY, vY *= rY[OY]
      }
      if (void 0 === FY) {
        FY = 0;
        for (OY = 0; OY < RY; ++OY) DY[OY] < 0 && (FY -= (rY[OY] - 1) * DY[OY])
      }
      for (var uY = function(YY) {
          if (AY(YY)) return "buffer";
          if (IY) switch (Object.prototype.toString.call(YY)) {
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
          return Array.isArray(YY) ? "array" : "generic"
        }(YY), sY = aY[uY]; sY.length <= RY + 1;) sY.push(gY(uY, sY.length - 1));
      return (0, sY[RY + 1])(YY, rY, DY, FY)
    }
  },
  37832: YY => {
    function rY(YY, rY, DY) {
      for (var FY = YY.length, AY = -1 / 0, IY = 1 / 0, RY = 0; RY < FY; RY++) {
        var OY = (DY[0][RY] - YY[RY]) / rY[RY],
          gY = (DY[1][RY] - YY[RY]) / rY[RY];
        if (OY > gY) {
          var aY = OY;
          OY = gY, gY = aY
        }
        if (gY < AY || OY > IY) return 1 / 0;
        OY > AY && (AY = OY), gY < IY && (IY = gY)
      }
      return AY > IY ? 1 / 0 : AY
    }
    YY.exports = function(YY, DY, FY, AY) {
      var IY = rY(DY, FY, AY);
      if (IY === 1 / 0) YY = null;
      else {
        YY = YY || [];
        for (var RY = 0; RY < DY.length; RY++) YY[RY] = DY[RY] + FY[RY] * IY
      }
      return YY
    }, YY.exports.distance = rY
  },
  37066: (YY, rY, DY) => {
    var FY = DY(37072);

    function AY(YY) {
      for (var rY, DY, AY = 0, IY = YY.length, RY = 0; RY < YY.length;) {
        for (rY = YY[RY], DY = 0; RY < IY && YY[RY] === rY;) ++RY, ++DY;
        AY += FY.log2(DY) / 7 | 0, AY += FY.log2(rY >>> 0) / 7 | 0, AY += 2
      }
      return AY
    }
    rY.size = AY, rY.encode = function(YY, rY) {
      rY || (rY = new Uint8Array(AY(YY)));
      for (var DY, FY, IY = 0, RY = rY.length, OY = 0; OY < YY.length;) {
        for (DY = YY[OY], FY = 0; OY < YY.length && YY[OY] === DY;) ++OY, ++FY;
        for (; IY < RY && FY >= 128;) rY[IY++] = 128 + (127 & FY), FY >>>= 7;
        if (IY >= RY) throw new Error("RLE buffer overflow");
        for (rY[IY++] = FY, DY >>>= 0; IY < RY && DY >= 128;) rY[IY++] = 128 + (127 & DY), DY >>>= 7;
        if (IY >= RY) throw new Error("RLE buffer overflow");
        rY[IY++] = DY
      }
      return rY
    }, rY.decode = function(YY, rY) {
      for (var DY, FY, AY, IY, RY = rY.length, OY = YY.length, gY = 0, aY = 0; aY < OY;) {
        for (DY = 0, FY = 0; aY < OY && YY[aY] >= 128;) DY += (127 & YY[aY++]) << FY, FY += 7;
        if (DY += YY[aY++] << FY, aY >= OY) throw new Error("RLE buffer underrun");
        if (gY + DY > RY) throw new Error("Chunk buffer overflow");
        for (AY = 0, FY = 0; aY < OY && YY[aY] >= 128;) AY += (127 & YY[aY++]) << FY, FY += 7;
        if (aY >= OY) throw new Error("RLE buffer underrun");
        for (AY += YY[aY++] << FY, IY = 0; IY < DY; ++IY) rY[gY++] = AY
      }
      return rY
    }
  },
  37072: (YY, rY) => {
    function DY(YY) {
      var rY = 32;
      return (YY &= -YY) && rY--, 65535 & YY && (rY -= 16), 16711935 & YY && (rY -= 8), 252645135 & YY && (rY -= 4), 858993459 & YY && (rY -= 2), 1431655765 & YY && (rY -= 1), rY
    }
    rY.INT_BITS = 32, rY.INT_MAX = 2147483647, rY.INT_MIN = -1 << 31, rY.sign = function(YY) {
      return (YY > 0) - (YY < 0)
    }, rY.abs = function(YY) {
      var rY = YY >> 31;
      return (YY ^ rY) - rY
    }, rY.min = function(YY, rY) {
      return rY ^ (YY ^ rY) & -(YY < rY)
    }, rY.max = function(YY, rY) {
      return YY ^ (YY ^ rY) & -(YY < rY)
    }, rY.isPow2 = function(YY) {
      return !(YY & YY - 1) && !!YY
    }, rY.log2 = function(YY) {
      var rY, DY;
      return rY = (YY > 65535) << 4, rY |= DY = ((YY >>>= rY) > 255) << 3, rY |= DY = ((YY >>>= DY) > 15) << 2, (rY |= DY = ((YY >>>= DY) > 3) << 1) | (YY >>>= DY) >> 1
    }, rY.log10 = function(YY) {
      return YY >= 1e9 ? 9 : YY >= 1e8 ? 8 : YY >= 1e7 ? 7 : YY >= 1e6 ? 6 : YY >= 1e5 ? 5 : YY >= 1e4 ? 4 : YY >= 1e3 ? 3 : YY >= 100 ? 2 : YY >= 10 ? 1 : 0
    }, rY.popCount = function(YY) {
      return 16843009 * ((YY = (858993459 & (YY -= YY >>> 1 & 1431655765)) + (YY >>> 2 & 858993459)) + (YY >>> 4) & 252645135) >>> 24
    }, rY.countTrailingZeros = DY, rY.nextPow2 = function(YY) {
      return YY += 0 === YY, --YY, YY |= YY >>> 1, YY |= YY >>> 2, YY |= YY >>> 4, YY |= YY >>> 8, (YY |= YY >>> 16) + 1
    }, rY.prevPow2 = function(YY) {
      return YY |= YY >>> 1, YY |= YY >>> 2, YY |= YY >>> 4, YY |= YY >>> 8, (YY |= YY >>> 16) - (YY >>> 1)
    }, rY.parity = function(YY) {
      return YY ^= YY >>> 16, YY ^= YY >>> 8, YY ^= YY >>> 4, 27030 >>> (YY &= 15) & 1
    };
    var FY = new Array(256);
    ! function(YY) {
      for (var rY = 0; rY < 256; ++rY) {
        var DY = rY,
          FY = rY,
          AY = 7;
        for (DY >>>= 1; DY; DY >>>= 1) FY <<= 1, FY |= 1 & DY, --AY;
        YY[rY] = FY << AY & 255
      }
    }(FY), rY.reverse = function(YY) {
      return FY[255 & YY] << 24 | FY[YY >>> 8 & 255] << 16 | FY[YY >>> 16 & 255] << 8 | FY[YY >>> 24 & 255]
    }, rY.interleave2 = function(YY, rY) {
      return (YY = 1431655765 & ((YY = 858993459 & ((YY = 252645135 & ((YY = 16711935 & ((YY &= 65535) | YY << 8)) | YY << 4)) | YY << 2)) | YY << 1)) | (rY = 1431655765 & ((rY = 858993459 & ((rY = 252645135 & ((rY = 16711935 & ((rY &= 65535) | rY << 8)) | rY << 4)) | rY << 2)) | rY << 1)) << 1
    }, rY.deinterleave2 = function(YY, rY) {
      return (YY = 65535 & ((YY = 16711935 & ((YY = 252645135 & ((YY = 858993459 & ((YY = YY >>> rY & 1431655765) | YY >>> 1)) | YY >>> 2)) | YY >>> 4)) | YY >>> 16)) << 16 >> 16
    }, rY.interleave3 = function(YY, rY, DY) {
      return YY = 1227133513 & ((YY = 3272356035 & ((YY = 251719695 & ((YY = 4278190335 & ((YY &= 1023) | YY << 16)) | YY << 8)) | YY << 4)) | YY << 2), (YY |= (rY = 1227133513 & ((rY = 3272356035 & ((rY = 251719695 & ((rY = 4278190335 & ((rY &= 1023) | rY << 16)) | rY << 8)) | rY << 4)) | rY << 2)) << 1) | (DY = 1227133513 & ((DY = 3272356035 & ((DY = 251719695 & ((DY = 4278190335 & ((DY &= 1023) | DY << 16)) | DY << 8)) | DY << 4)) | DY << 2)) << 2
    }, rY.deinterleave3 = function(YY, rY) {
      return (YY = 1023 & ((YY = 4278190335 & ((YY = 251719695 & ((YY = 3272356035 & ((YY = YY >>> rY & 1227133513) | YY >>> 2)) | YY >>> 4)) | YY >>> 8)) | YY >>> 16)) << 22 >> 22
    }, rY.nextCombination = function(YY) {
      var rY = YY | YY - 1;
      return rY + 1 | (~rY & -~rY) - 1 >>> DY(YY) + 1
    }
  },
  36586: (YY, rY, DY) => {
    DY.d(rY, {
      Color3: () => FY.c,
      c: () => FY.d
    });
    var FY = DY(36588);
    (0, FY.f)()
  },
  37105: (YY, rY, DY) => {
    DY.d(rY, {
      d: () => AY
    });
    var FY = DY(37107);
    class AY {
      static GetPlanes(YY) {
        const rY = [];
        for (let DY = 0; DY < 6; DY++) rY.push(new FY.c(0, 0, 0, 0));
        return AY.GetPlanesToRef(YY, rY), rY
      }
      static GetNearPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] + DY[2], rY.normal.y = DY[7] + DY[6], rY.normal.z = DY[11] + DY[10], rY.d = DY[15] + DY[14], rY.normalize()
      }
      static GetFarPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] - DY[2], rY.normal.y = DY[7] - DY[6], rY.normal.z = DY[11] - DY[10], rY.d = DY[15] - DY[14], rY.normalize()
      }
      static GetLeftPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] + DY[0], rY.normal.y = DY[7] + DY[4], rY.normal.z = DY[11] + DY[8], rY.d = DY[15] + DY[12], rY.normalize()
      }
      static GetRightPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] - DY[0], rY.normal.y = DY[7] - DY[4], rY.normal.z = DY[11] - DY[8], rY.d = DY[15] - DY[12], rY.normalize()
      }
      static GetTopPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] - DY[1], rY.normal.y = DY[7] - DY[5], rY.normal.z = DY[11] - DY[9], rY.d = DY[15] - DY[13], rY.normalize()
      }
      static GetBottomPlaneToRef(YY, rY) {
        const DY = YY.m;
        rY.normal.x = DY[3] + DY[1], rY.normal.y = DY[7] + DY[5], rY.normal.z = DY[11] + DY[9], rY.d = DY[15] + DY[13], rY.normalize()
      }
      static GetPlanesToRef(YY, rY) {
        AY.GetNearPlaneToRef(YY, rY[0]), AY.GetFarPlaneToRef(YY, rY[1]), AY.GetLeftPlaneToRef(YY, rY[2]), AY.GetRightPlaneToRef(YY, rY[3]), AY.GetTopPlaneToRef(YY, rY[4]), AY.GetBottomPlaneToRef(YY, rY[5])
      }
      static IsPointInFrustum(YY, rY) {
        for (let DY = 0; DY < 6; DY++)
          if (rY[DY].dotCoordinate(YY) < 0) return !1;
        return !0
      }
    }
  },
  37107: (YY, rY, DY) => {
    DY.d(rY, {
      c: () => AY
    });
    var FY = DY(36524);
    class AY {
      constructor(YY, rY, DY, AY) {
        this.normal = new FY.r(YY, rY, DY), this.d = AY
      }
      VDY() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new AY(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let YY = this.normal.getHashCode();
        return YY = 397 * YY ^ this.d, YY
      }
      normalize() {
        const YY = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let rY = 0;
        return 0 !== YY && (rY = 1 / YY), this.normal.x *= rY, this.normal.y *= rY, this.normal.z *= rY, this.d *= rY, this
      }
      transform(YY) {
        const rY = AY._TmpMatrix;
        YY.invertToRef(rY);
        const DY = rY.m,
          FY = this.normal.x,
          IY = this.normal.y,
          RY = this.normal.z,
          OY = this.d,
          gY = FY * DY[0] + IY * DY[1] + RY * DY[2] + OY * DY[3],
          aY = FY * DY[4] + IY * DY[5] + RY * DY[6] + OY * DY[7],
          vY = FY * DY[8] + IY * DY[9] + RY * DY[10] + OY * DY[11],
          uY = FY * DY[12] + IY * DY[13] + RY * DY[14] + OY * DY[15];
        return new AY(gY, aY, vY, uY)
      }
      dotCoordinate(YY) {
        return this.normal.x * YY.x + this.normal.y * YY.y + this.normal.z * YY.z + this.d
      }
      copyFromPoints(YY, rY, DY) {
        const FY = rY.x - YY.x,
          AY = rY.y - YY.y,
          IY = rY.z - YY.z,
          RY = DY.x - YY.x,
          OY = DY.y - YY.y,
          gY = DY.z - YY.z,
          aY = AY * gY - IY * OY,
          vY = IY * RY - FY * gY,
          uY = FY * OY - AY * RY,
          sY = Math.sqrt(aY * aY + vY * vY + uY * uY);
        let iY;
        return iY = 0 !== sY ? 1 / sY : 0, this.normal.x = aY * iY, this.normal.y = vY * iY, this.normal.z = uY * iY, this.d = -(this.normal.x * YY.x + this.normal.y * YY.y + this.normal.z * YY.z), this
      }
      isFrontFacingTo(YY, rY) {
        return FY.r.Dot(this.normal, YY) <= rY
      }
      signedDistanceTo(YY) {
        return FY.r.Dot(YY, this.normal) + this.d
      }
      static FromArray(YY) {
        return new AY(YY[0], YY[1], YY[2], YY[3])
      }
      static FromPoints(YY, rY, DY) {
        const FY = new AY(0, 0, 0, 0);
        return FY.copyFromPoints(YY, rY, DY), FY
      }
      static FromPositionAndNormal(YY, rY) {
        const DY = new AY(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(YY, rY, DY)
      }
      static FromPositionAndNormalToRef(YY, rY, DY) {
        return DY.normal.brY(rY), DY.normal.normalize(), DY.d = -YY.dot(DY.normal), DY
      }
      static SignedDistanceToPlaneFromPositionAndNormal(YY, rY, DY) {
        const AY = -(rY.x * YY.x + rY.y * YY.y + rY.z * YY.z);
        return FY.r.Dot(DY, rY) + AY
      }
    }
    AY._TmpMatrix = FY.e.Identity()
  },
  36518: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      Matrix: () => FY.e,
      Quaternion: () => FY.g,
      RegisterMathVector: () => FY.j,
      TmpVectors: () => FY.n,
      Vector2: () => FY.q,
      xy: () => FY.r,
      Vector4: () => FY.v
    });
    var FY = DY(36524);
    (0, FY.j)()
  },
  37493: (YY, rY, DY) => {
    DY.d(rY, {
      b: () => FY
    });
    class FY {
      constructor(YY, rY, DY, FY) {
        this.x = YY, this.y = rY, this.width = DY, this.height = FY
      }
      toGlobal(YY, rY) {
        return new FY(this.x * YY, this.y * rY, this.width * YY, this.height * rY)
      }
      toGlobalToRef(YY, rY, DY) {
        return DY.x = this.x * YY, DY.y = this.y * rY, DY.width = this.width * YY, DY.height = this.height * rY, this
      }
      clone() {
        return new FY(this.x, this.y, this.width, this.height)
      }
    }
  },
  37242: (YY, rY, DY) => {
    function FY() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (YY => {
        const rY = 16 * Math.random() | 0;
        return ("x" === YY ? rY : 3 & rY | 8).toString(16)
      }))
    }
    DY.d(rY, {
      c: () => FY
    })
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);