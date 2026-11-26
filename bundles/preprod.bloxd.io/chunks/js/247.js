/*! For license information please see fecih8.247.ce174003.chunk.js.LICENSE.txt */
export const id = 247;
export const ids = [247, 254];
export const modules = {
  39080: UU => {
    UU.exports = function(UU) {
      return null != UU && null != UU.constructor && "function" === typeof UU.constructor.isBuffer && UU.constructor.isBuffer(UU)
    }
  },
  39062: (UU, XU, zU) => {
    var cU = zU(39067),
      yU = zU(39074),
      QU = zU(39080);
    zU.g.__TYPEDARRAY_POOL || (zU.g.__TYPEDARRAY_POOL = {
      UINT8: yU([32, 0]),
      UINT16: yU([32, 0]),
      UINT32: yU([32, 0]),
      INT8: yU([32, 0]),
      INT16: yU([32, 0]),
      INT32: yU([32, 0]),
      FLOAT: yU([32, 0]),
      DOUBLE: yU([32, 0]),
      DATA: yU([32, 0]),
      UINT8C: yU([32, 0]),
      BUFFER: yU([32, 0])
    });
    var AU = "undefined" !== typeof Uint8ClampedArray,
      FU = zU.g.__TYPEDARRAY_POOL;
    FU.UINT8C || (FU.UINT8C = yU([32, 0])), FU.BUFFER || (FU.BUFFER = yU([32, 0]));
    var oU = FU.DATA,
      DU = FU.BUFFER;

    function EU(UU) {
      if (UU) {
        var XU = UU.length || UU.byteLength,
          zU = cU.log2(XU);
        oU[zU].push(UU)
      }
    }

    function YU(UU) {
      UU = cU.nextPow2(UU);
      var XU = cU.log2(UU),
        zU = oU[XU];
      return zU.length > 0 ? zU.pop() : new ArrayBuffer(UU)
    }

    function NU(UU) {
      return new Uint8Array(YU(UU), 0, UU)
    }

    function IU(UU) {
      return new Uint16Array(YU(2 * UU), 0, UU)
    }

    function pU(UU) {
      return new Uint32Array(YU(4 * UU), 0, UU)
    }

    function aU(UU) {
      return new Int8Array(YU(UU), 0, UU)
    }

    function tU(UU) {
      return new Int16Array(YU(2 * UU), 0, UU)
    }

    function gU(UU) {
      return new Int32Array(YU(4 * UU), 0, UU)
    }

    function kU(UU) {
      return new Float32Array(YU(4 * UU), 0, UU)
    }

    function GU(UU) {
      return new Float64Array(YU(8 * UU), 0, UU)
    }

    function BU(UU) {
      return AU ? new Uint8ClampedArray(YU(UU), 0, UU) : NU(UU)
    }

    function ZU(UU) {
      return new DataView(YU(UU), 0, UU)
    }
    XU.free = function(UU) {
      if (QU(UU)) DU[cU.log2(UU.length)].push(UU);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(UU) && (UU = UU.buffer), !UU) return;
        var XU = UU.length || UU.byteLength,
          zU = 0 | cU.log2(XU);
        oU[zU].push(UU)
      }
    }, XU.freeUint8 = XU.freeUint16 = XU.freeUint32 = XU.freeInt8 = XU.freeInt16 = XU.freeInt32 = XU.freeFloat32 = XU.freeFloat = XU.freeFloat64 = XU.freeDouble = XU.freeUint8Clamped = XU.freeDataView = function(UU) {
      EU(UU.buffer)
    }, XU.freeArrayBuffer = EU, XU.freeBuffer = function(UU) {
      DU[cU.log2(UU.length)].push(UU)
    }, XU.malloc = function(UU, XU) {
      if (void 0 === XU || "arraybuffer" === XU) return YU(UU);
      switch (XU) {
        case "uint8":
          return NU(UU);
        case "uint16":
          return IU(UU);
        case "uint32":
          return pU(UU);
        case "int8":
          return aU(UU);
        case "int16":
          return tU(UU);
        case "int32":
          return gU(UU);
        case "float":
        case "float32":
          return kU(UU);
        case "double":
        case "float64":
          return GU(UU);
        case "uint8_clamped":
          return BU(UU);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return ZU(UU);
        default:
          return null
      }
      return null
    }, XU.mallocArrayBuffer = YU, XU.mallocUint8 = NU, XU.mallocUint16 = IU, XU.mallocUint32 = pU, XU.mallocInt8 = aU, XU.mallocInt16 = tU, XU.mallocInt32 = gU, XU.mallocFloat32 = XU.mallocFloat = kU, XU.mallocFloat64 = XU.mallocDouble = GU, XU.mallocUint8Clamped = BU, XU.mallocDataView = ZU, XU.clearCache = function() {
      for (var UU = 0; UU < 32; ++UU) FU.UINT8[UU].length = 0, FU.UINT16[UU].length = 0, FU.UINT32[UU].length = 0, FU.INT8[UU].length = 0, FU.INT16[UU].length = 0, FU.INT32[UU].length = 0, FU.FLOAT[UU].length = 0, FU.DOUBLE[UU].length = 0, FU.UINT8C[UU].length = 0, oU[UU].length = 0, DU[UU].length = 0
    }
  },
  39067: (UU, XU) => {
    function zU(UU) {
      var XU = 32;
      return (UU &= -UU) && XU--, 65535 & UU && (XU -= 16), 16711935 & UU && (XU -= 8), 252645135 & UU && (XU -= 4), 858993459 & UU && (XU -= 2), 1431655765 & UU && (XU -= 1), XU
    }
    XU.INT_BITS = 32, XU.INT_MAX = 2147483647, XU.INT_MIN = -1 << 31, XU.sign = function(UU) {
      return (UU > 0) - (UU < 0)
    }, XU.abs = function(UU) {
      var XU = UU >> 31;
      return (UU ^ XU) - XU
    }, XU.min = function(UU, XU) {
      return XU ^ (UU ^ XU) & -(UU < XU)
    }, XU.max = function(UU, XU) {
      return UU ^ (UU ^ XU) & -(UU < XU)
    }, XU.isPow2 = function(UU) {
      return !(UU & UU - 1) && !!UU
    }, XU.log2 = function(UU) {
      var XU, zU;
      return XU = (UU > 65535) << 4, XU |= zU = ((UU >>>= XU) > 255) << 3, XU |= zU = ((UU >>>= zU) > 15) << 2, (XU |= zU = ((UU >>>= zU) > 3) << 1) | (UU >>>= zU) >> 1
    }, XU.log10 = function(UU) {
      return UU >= 1e9 ? 9 : UU >= 1e8 ? 8 : UU >= 1e7 ? 7 : UU >= 1e6 ? 6 : UU >= 1e5 ? 5 : UU >= 1e4 ? 4 : UU >= 1e3 ? 3 : UU >= 100 ? 2 : UU >= 10 ? 1 : 0
    }, XU.popCount = function(UU) {
      return 16843009 * ((UU = (858993459 & (UU -= UU >>> 1 & 1431655765)) + (UU >>> 2 & 858993459)) + (UU >>> 4) & 252645135) >>> 24
    }, XU.countTrailingZeros = zU, XU.nextPow2 = function(UU) {
      return UU += 0 === UU, --UU, UU |= UU >>> 1, UU |= UU >>> 2, UU |= UU >>> 4, UU |= UU >>> 8, (UU |= UU >>> 16) + 1
    }, XU.prevPow2 = function(UU) {
      return UU |= UU >>> 1, UU |= UU >>> 2, UU |= UU >>> 4, UU |= UU >>> 8, (UU |= UU >>> 16) - (UU >>> 1)
    }, XU.parity = function(UU) {
      return UU ^= UU >>> 16, UU ^= UU >>> 8, UU ^= UU >>> 4, 27030 >>> (UU &= 15) & 1
    };
    var cU = new Array(256);
    ! function(UU) {
      for (var XU = 0; XU < 256; ++XU) {
        var zU = XU,
          cU = XU,
          yU = 7;
        for (zU >>>= 1; zU; zU >>>= 1) cU <<= 1, cU |= 1 & zU, --yU;
        UU[XU] = cU << yU & 255
      }
    }(cU), XU.reverse = function(UU) {
      return cU[255 & UU] << 24 | cU[UU >>> 8 & 255] << 16 | cU[UU >>> 16 & 255] << 8 | cU[UU >>> 24 & 255]
    }, XU.interleave2 = function(UU, XU) {
      return (UU = 1431655765 & ((UU = 858993459 & ((UU = 252645135 & ((UU = 16711935 & ((UU &= 65535) | UU << 8)) | UU << 4)) | UU << 2)) | UU << 1)) | (XU = 1431655765 & ((XU = 858993459 & ((XU = 252645135 & ((XU = 16711935 & ((XU &= 65535) | XU << 8)) | XU << 4)) | XU << 2)) | XU << 1)) << 1
    }, XU.deinterleave2 = function(UU, XU) {
      return (UU = 65535 & ((UU = 16711935 & ((UU = 252645135 & ((UU = 858993459 & ((UU = UU >>> XU & 1431655765) | UU >>> 1)) | UU >>> 2)) | UU >>> 4)) | UU >>> 16)) << 16 >> 16
    }, XU.interleave3 = function(UU, XU, zU) {
      return UU = 1227133513 & ((UU = 3272356035 & ((UU = 251719695 & ((UU = 4278190335 & ((UU &= 1023) | UU << 16)) | UU << 8)) | UU << 4)) | UU << 2), (UU |= (XU = 1227133513 & ((XU = 3272356035 & ((XU = 251719695 & ((XU = 4278190335 & ((XU &= 1023) | XU << 16)) | XU << 8)) | XU << 4)) | XU << 2)) << 1) | (zU = 1227133513 & ((zU = 3272356035 & ((zU = 251719695 & ((zU = 4278190335 & ((zU &= 1023) | zU << 16)) | zU << 8)) | zU << 4)) | zU << 2)) << 2
    }, XU.deinterleave3 = function(UU, XU) {
      return (UU = 1023 & ((UU = 4278190335 & ((UU = 251719695 & ((UU = 3272356035 & ((UU = UU >>> XU & 1227133513) | UU >>> 2)) | UU >>> 4)) | UU >>> 8)) | UU >>> 16)) << 22 >> 22
    }, XU.nextCombination = function(UU) {
      var XU = UU | UU - 1;
      return XU + 1 | (~XU & -~XU) - 1 >>> zU(UU) + 1
    }
  },
  39056: (UU, XU, zU) => {
    UU.exports = function(UU, XU, zU) {
      switch (arguments.length) {
        case 1:
          return cU = [], DU(yU = UU, yU, EU, !0), cU;
        case 2:
          return "function" === typeof XU ? DU(UU, UU, XU, !0) : function(UU, XU) {
            return cU = [], DU(UU, XU, EU, !1), cU
          }(UU, XU);
        case 3:
          return DU(UU, XU, zU, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var yU
    };
    var cU, yU = zU(39062),
      QU = zU(39082),
      AU = zU(39092);

    function FU(UU, XU) {
      for (var zU = 0; zU < UU; ++zU)
        if (!(XU[zU] <= XU[zU + UU])) return !0;
      return !1
    }

    function oU(UU, XU, zU, cU) {
      for (var yU = 0, QU = 0, AU = 0, oU = UU.length; AU < oU; ++AU) {
        var DU = UU[AU];
        if (!FU(XU, DU)) {
          for (var EU = 0; EU < 2 * XU; ++EU) zU[yU++] = DU[EU];
          cU[QU++] = AU
        }
      }
      return QU
    }

    function DU(UU, XU, zU, cU) {
      var FU = UU.length,
        DU = XU.length;
      if (!(FU <= 0 || DU <= 0)) {
        var EU = UU[0].length >>> 1;
        if (!(EU <= 0)) {
          var YU, NU = yU.mallocDouble(2 * EU * FU),
            IU = yU.mallocInt32(FU);
          if ((FU = oU(UU, EU, NU, IU)) > 0) {
            if (1 === EU && cU) QU.init(FU), YU = QU.sweepComplete(EU, zU, 0, FU, NU, IU, 0, FU, NU, IU);
            else {
              var pU = yU.mallocDouble(2 * EU * DU),
                aU = yU.mallocInt32(DU);
              (DU = oU(XU, EU, pU, aU)) > 0 && (QU.init(FU + DU), YU = 1 === EU ? QU.sweepBipartite(EU, zU, 0, FU, NU, IU, 0, DU, pU, aU) : AU(EU, zU, cU, FU, NU, IU, DU, pU, aU), yU.free(pU), yU.free(aU))
            }
            yU.free(NU), yU.free(IU)
          }
          return YU
        }
      }
    }

    function EU(UU, XU) {
      cU.push([UU, XU])
    }
  },
  39095: (UU, XU) => {
    var zU = "d",
      cU = "ax",
      yU = "fp",
      QU = "es",
      AU = "rs",
      FU = "re",
      oU = "rb",
      DU = "bs",
      EU = "be",
      YU = "bb",
      NU = [zU, cU, "vv", AU, FU, oU, "ri", DU, EU, YU, "bi"];

    function IU(UU) {
      var XU = "bruteForce" + (UU ? "Full" : "Partial"),
        cU = [],
        AU = NU.slice();
      UU || AU.splice(3, 0, yU);
      var FU = ["function " + XU + "(" + AU.join() + "){"];

      function oU(XU, yU) {
        var AU = function(UU, XU, cU) {
          var yU = "bruteForce" + (UU ? "Red" : "Blue") + (XU ? "Flip" : "") + (cU ? "Full" : ""),
            AU = ["function ", yU, "(", NU.join(), "){", "var ", QU, "=2*", zU, ";"],
            FU = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            oU = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (cU ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return UU ? AU.push(FU, "Q", ":", oU) : AU.push(oU, "Q", ":", FU), cU ? AU.push("if(y1<x0||x1<y0)continue;") : XU ? AU.push("if(y0<=x0||x1<y0)continue;") : AU.push("if(y0<x0||x1<y0)continue;"), AU.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), XU ? AU.push("yi,xi") : AU.push("xi,yi"), AU.push(");if(rv!==void 0)return rv;}}}"), {
            name: yU,
            code: AU.join("")
          }
        }(XU, yU, UU);
        cU.push(AU.code), FU.push("return " + AU.name + "(" + NU.join() + ");")
      }
      FU.push("if(re-rs>be-bs){"), UU ? (oU(!0, !1), FU.push("}else{"), oU(!1, !1)) : (FU.push("if(fp){"), oU(!0, !0), FU.push("}else{"), oU(!0, !1), FU.push("}}else{if(fp){"), oU(!1, !0), FU.push("}else{"), oU(!1, !1), FU.push("}")), FU.push("}}return " + XU);
      var DU = cU.join("") + FU.join("");
      return new Function(DU)()
    }
    XU.partial = IU(!1), XU.full = IU(!0)
  },
  39092: (UU, XU, zU) => {
    UU.exports = function(UU, XU, zU, QU, EU, eU, CU, wU, qU) {
      ! function(UU, XU) {
        var zU = 8 * yU.log2(XU + 1) * (UU + 1) | 0,
          QU = yU.nextPow2(BU * zU);
        RU.length < QU && (cU.free(RU), RU = cU.mallocInt32(QU));
        var AU = yU.nextPow2(ZU * zU);
        PU.length < AU && (cU.free(PU), PU = cU.mallocDouble(AU))
      }(UU, QU + CU);
      var OU, SU = 0,
        rU = 2 * UU;
      WU(SU++, 0, 0, QU, 0, CU, zU ? 16 : 0, -1 / 0, 1 / 0), zU || WU(SU++, 0, 0, CU, 0, QU, 1, -1 / 0, 1 / 0);
      for (; SU > 0;) {
        var uU = (SU -= 1) * BU,
          fU = RU[uU],
          iU = RU[uU + 1],
          HU = RU[uU + 2],
          MU = RU[uU + 3],
          vU = RU[uU + 4],
          VU = RU[uU + 5],
          sU = SU * ZU,
          nU = PU[sU],
          mU = PU[sU + 1],
          lU = 1 & VU,
          xU = !!(16 & VU),
          JU = EU,
          jU = eU,
          KU = wU,
          bU = qU;
        if (lU && (JU = wU, jU = qU, KU = EU, bU = eU), !(2 & VU && iU >= (HU = tU(UU, fU, iU, HU, JU, jU, mU))) && !(4 & VU && (iU = gU(UU, fU, iU, HU, JU, jU, nU)) >= HU)) {
          var TU = HU - iU,
            hU = vU - MU;
          if (xU) {
            if (UU * TU * (TU + hU) < IU) {
              if (void 0 !== (OU = oU.scanComplete(UU, fU, XU, iU, HU, JU, jU, MU, vU, KU, bU))) return OU;
              continue
            }
          } else {
            if (UU * Math.min(TU, hU) < YU) {
              if (void 0 !== (OU = AU(UU, fU, XU, lU, iU, HU, JU, jU, MU, vU, KU, bU))) return OU;
              continue
            }
            if (UU * TU * hU < NU) {
              if (void 0 !== (OU = oU.scanBipartite(UU, fU, XU, lU, iU, HU, JU, jU, MU, vU, KU, bU))) return OU;
              continue
            }
          }
          var UX = pU(UU, fU, iU, HU, JU, jU, nU, mU);
          if (iU < UX)
            if (UU * (UX - iU) < YU) {
              if (void 0 !== (OU = FU(UU, fU + 1, XU, iU, UX, JU, jU, MU, vU, KU, bU))) return OU
            } else if (fU === UU - 2) {
            if (void 0 !== (OU = lU ? oU.sweepBipartite(UU, XU, MU, vU, KU, bU, iU, UX, JU, jU) : oU.sweepBipartite(UU, XU, iU, UX, JU, jU, MU, vU, KU, bU))) return OU
          } else WU(SU++, fU + 1, iU, UX, MU, vU, lU, -1 / 0, 1 / 0), WU(SU++, fU + 1, MU, vU, iU, UX, 1 ^ lU, -1 / 0, 1 / 0);
          if (UX < HU) {
            var XX = DU(UU, fU, MU, vU, KU, bU),
              zX = KU[rU * XX + fU],
              cX = aU(UU, fU, XX, vU, KU, bU, zX);
            if (cX < vU && WU(SU++, fU, UX, HU, cX, vU, (4 | lU) + (xU ? 16 : 0), zX, mU), MU < XX && WU(SU++, fU, UX, HU, MU, XX, (2 | lU) + (xU ? 16 : 0), nU, zX), XX + 1 === cX) {
              if (void 0 !== (OU = xU ? LU(UU, fU, XU, UX, HU, JU, jU, XX, KU, bU[XX]) : dU(UU, fU, XU, lU, UX, HU, JU, jU, XX, KU, bU[XX]))) return OU
            } else if (XX < cX) {
              var yX;
              if (xU) {
                if (UX < (yX = kU(UU, fU, UX, HU, JU, jU, zX))) {
                  var QX = aU(UU, fU, UX, yX, JU, jU, zX);
                  if (fU === UU - 2) {
                    if (UX < QX && void 0 !== (OU = oU.sweepComplete(UU, XU, UX, QX, JU, jU, XX, cX, KU, bU))) return OU;
                    if (QX < yX && void 0 !== (OU = oU.sweepBipartite(UU, XU, QX, yX, JU, jU, XX, cX, KU, bU))) return OU
                  } else UX < QX && WU(SU++, fU + 1, UX, QX, XX, cX, 16, -1 / 0, 1 / 0), QX < yX && (WU(SU++, fU + 1, QX, yX, XX, cX, 0, -1 / 0, 1 / 0), WU(SU++, fU + 1, XX, cX, QX, yX, 1, -1 / 0, 1 / 0))
                }
              } else UX < (yX = lU ? GU(UU, fU, UX, HU, JU, jU, zX) : kU(UU, fU, UX, HU, JU, jU, zX)) && (fU === UU - 2 ? OU = lU ? oU.sweepBipartite(UU, XU, XX, cX, KU, bU, UX, yX, JU, jU) : oU.sweepBipartite(UU, XU, UX, yX, JU, jU, XX, cX, KU, bU) : (WU(SU++, fU + 1, UX, yX, XX, cX, lU, -1 / 0, 1 / 0), WU(SU++, fU + 1, XX, cX, UX, yX, 1 ^ lU, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var cU = zU(39062),
      yU = zU(39067),
      QU = zU(39095),
      AU = QU.partial,
      FU = QU.full,
      oU = zU(39082),
      DU = zU(39099),
      EU = zU(39106),
      YU = 128,
      NU = 1 << 22,
      IU = 1 << 22,
      pU = EU("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      aU = EU("lo===p0", ["p0"]),
      tU = EU("lo<p0", ["p0"]),
      gU = EU("hi<=p0", ["p0"]),
      kU = EU("lo<=p0&&p0<=hi", ["p0"]),
      GU = EU("lo<p0&&p0<=hi", ["p0"]),
      BU = 6,
      ZU = 2,
      RU = cU.mallocInt32(1024),
      PU = cU.mallocDouble(1024);

    function WU(UU, XU, zU, cU, yU, QU, AU, FU, oU) {
      var DU = BU * UU;
      RU[DU] = XU, RU[DU + 1] = zU, RU[DU + 2] = cU, RU[DU + 3] = yU, RU[DU + 4] = QU, RU[DU + 5] = AU;
      var EU = ZU * UU;
      PU[EU] = FU, PU[EU + 1] = oU
    }

    function dU(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU, EU) {
      var YU = 2 * UU,
        NU = oU * YU,
        IU = DU[NU + XU];
      UU: for (var pU = yU, aU = yU * YU; pU < QU; ++pU, aU += YU) {
        var tU = AU[aU + XU],
          gU = AU[aU + XU + UU];
        if (!(IU < tU || gU < IU) && (!cU || IU !== tU)) {
          for (var kU, GU = FU[pU], BU = XU + 1; BU < UU; ++BU) {
            tU = AU[aU + BU], gU = AU[aU + BU + UU];
            var ZU = DU[NU + BU],
              RU = DU[NU + BU + UU];
            if (gU < ZU || RU < tU) continue UU
          }
          if (void 0 !== (kU = cU ? zU(EU, GU) : zU(GU, EU))) return kU
        }
      }
    }

    function LU(UU, XU, zU, cU, yU, QU, AU, FU, oU, DU) {
      var EU = 2 * UU,
        YU = FU * EU,
        NU = oU[YU + XU];
      UU: for (var IU = cU, pU = cU * EU; IU < yU; ++IU, pU += EU) {
        var aU = AU[IU];
        if (aU !== DU) {
          var tU = QU[pU + XU],
            gU = QU[pU + XU + UU];
          if (!(NU < tU || gU < NU)) {
            for (var kU = XU + 1; kU < UU; ++kU) {
              tU = QU[pU + kU], gU = QU[pU + kU + UU];
              var GU = oU[YU + kU],
                BU = oU[YU + kU + UU];
              if (gU < GU || BU < tU) continue UU
            }
            var ZU = zU(aU, DU);
            if (void 0 !== ZU) return ZU
          }
        }
      }
    }
  },
  39099: (UU, XU, zU) => {
    UU.exports = function(UU, XU, zU, AU, FU, oU) {
      if (AU <= zU + 1) return zU;
      var DU = zU,
        EU = AU,
        YU = AU + zU >>> 1,
        NU = 2 * UU,
        IU = YU,
        pU = FU[NU * YU + XU];
      for (; DU < EU;) {
        if (EU - DU < yU) {
          QU(UU, XU, DU, EU, FU, oU), pU = FU[NU * YU + XU];
          break
        }
        var aU = EU - DU,
          tU = Math.random() * aU + DU | 0,
          gU = FU[NU * tU + XU],
          kU = Math.random() * aU + DU | 0,
          GU = FU[NU * kU + XU],
          BU = Math.random() * aU + DU | 0,
          ZU = FU[NU * BU + XU];
        gU <= GU ? ZU >= GU ? (IU = kU, pU = GU) : gU >= ZU ? (IU = tU, pU = gU) : (IU = BU, pU = ZU) : GU >= ZU ? (IU = kU, pU = GU) : ZU >= gU ? (IU = tU, pU = gU) : (IU = BU, pU = ZU);
        for (var RU = NU * (EU - 1), PU = NU * IU, WU = 0; WU < NU; ++WU, ++RU, ++PU) {
          var dU = FU[RU];
          FU[RU] = FU[PU], FU[PU] = dU
        }
        var LU = oU[EU - 1];
        oU[EU - 1] = oU[IU], oU[IU] = LU;
        for (RU = NU * (EU - 1), PU = NU * (IU = cU(UU, XU, DU, EU - 1, FU, oU, pU)), WU = 0; WU < NU; ++WU, ++RU, ++PU) {
          dU = FU[RU];
          FU[RU] = FU[PU], FU[PU] = dU
        }
        LU = oU[EU - 1];
        if (oU[EU - 1] = oU[IU], oU[IU] = LU, YU < IU) {
          for (EU = IU - 1; DU < EU && FU[NU * (EU - 1) + XU] === pU;) EU -= 1;
          EU += 1
        } else {
          if (!(IU < YU)) break;
          for (DU = IU + 1; DU < EU && FU[NU * DU + XU] === pU;) DU += 1
        }
      }
      return cU(UU, XU, zU, YU, FU, oU, FU[NU * YU + XU])
    };
    var cU = zU(39106)("lo<p0", ["p0"]),
      yU = 8;

    function QU(UU, XU, zU, cU, yU, QU) {
      for (var AU = 2 * UU, FU = AU * (zU + 1) + XU, oU = zU + 1; oU < cU; ++oU, FU += AU)
        for (var DU = yU[FU], EU = oU, YU = AU * (oU - 1); EU > zU && yU[YU + XU] > DU; --EU, YU -= AU) {
          for (var NU = YU, IU = YU + AU, pU = 0; pU < AU; ++pU, ++NU, ++IU) {
            var aU = yU[NU];
            yU[NU] = yU[IU], yU[IU] = aU
          }
          var tU = QU[EU];
          QU[EU] = QU[EU - 1], QU[EU - 1] = tU
        }
    }
  },
  39106: UU => {
    UU.exports = function(UU, zU) {
      var cU = "abcdef".split("").concat(zU),
        yU = [];
      UU.indexOf("lo") >= 0 && yU.push("lo=e[k+n]");
      UU.indexOf("hi") >= 0 && yU.push("hi=e[k+o]");
      return cU.push(XU.replace("_", yU.join()).replace("$", UU)), Function.apply(void 0, cU)
    };
    var XU = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  39087: UU => {
    UU.exports = function(UU, cU) {
      cU <= 4 * XU ? zU(0, cU - 1, UU) : DU(0, cU - 1, UU)
    };
    var XU = 32;

    function zU(UU, XU, zU) {
      for (var cU = 2 * (UU + 1), yU = UU + 1; yU <= XU; ++yU) {
        for (var QU = zU[cU++], AU = zU[cU++], FU = yU, oU = cU - 2; FU-- > UU;) {
          var DU = zU[oU - 2],
            EU = zU[oU - 1];
          if (DU < QU) break;
          if (DU === QU && EU < AU) break;
          zU[oU] = DU, zU[oU + 1] = EU, oU -= 2
        }
        zU[oU] = QU, zU[oU + 1] = AU
      }
    }

    function cU(UU, XU, zU) {
      XU *= 2;
      var cU = zU[UU *= 2],
        yU = zU[UU + 1];
      zU[UU] = zU[XU], zU[UU + 1] = zU[XU + 1], zU[XU] = cU, zU[XU + 1] = yU
    }

    function yU(UU, XU, zU) {
      XU *= 2, zU[UU *= 2] = zU[XU], zU[UU + 1] = zU[XU + 1]
    }

    function QU(UU, XU, zU, cU) {
      XU *= 2, zU *= 2;
      var yU = cU[UU *= 2],
        QU = cU[UU + 1];
      cU[UU] = cU[XU], cU[UU + 1] = cU[XU + 1], cU[XU] = cU[zU], cU[XU + 1] = cU[zU + 1], cU[zU] = yU, cU[zU + 1] = QU
    }

    function AU(UU, XU, zU, cU, yU) {
      XU *= 2, yU[UU *= 2] = yU[XU], yU[XU] = zU, yU[UU + 1] = yU[XU + 1], yU[XU + 1] = cU
    }

    function FU(UU, XU, zU) {
      XU *= 2;
      var cU = zU[UU *= 2],
        yU = zU[XU];
      return !(cU < yU) && (cU !== yU || zU[UU + 1] > zU[XU + 1])
    }

    function oU(UU, XU, zU, cU) {
      var yU = cU[UU *= 2];
      return yU < XU || yU === XU && cU[UU + 1] < zU
    }

    function DU(UU, EU, YU) {
      var NU = (EU - UU + 1) / 6 | 0,
        IU = UU + NU,
        pU = EU - NU,
        aU = UU + EU >> 1,
        tU = aU - NU,
        gU = aU + NU,
        kU = IU,
        GU = tU,
        BU = aU,
        ZU = gU,
        RU = pU,
        PU = UU + 1,
        WU = EU - 1,
        dU = 0;
      FU(kU, GU, YU) && (dU = kU, kU = GU, GU = dU), FU(ZU, RU, YU) && (dU = ZU, ZU = RU, RU = dU), FU(kU, BU, YU) && (dU = kU, kU = BU, BU = dU), FU(GU, BU, YU) && (dU = GU, GU = BU, BU = dU), FU(kU, ZU, YU) && (dU = kU, kU = ZU, ZU = dU), FU(BU, ZU, YU) && (dU = BU, BU = ZU, ZU = dU), FU(GU, RU, YU) && (dU = GU, GU = RU, RU = dU), FU(GU, BU, YU) && (dU = GU, GU = BU, BU = dU), FU(ZU, RU, YU) && (dU = ZU, ZU = RU, RU = dU);
      for (var LU = YU[2 * GU], eU = YU[2 * GU + 1], CU = YU[2 * ZU], wU = YU[2 * ZU + 1], qU = 2 * kU, OU = 2 * BU, SU = 2 * RU, rU = 2 * IU, uU = 2 * aU, fU = 2 * pU, iU = 0; iU < 2; ++iU) {
        var HU = YU[qU + iU],
          MU = YU[OU + iU],
          vU = YU[SU + iU];
        YU[rU + iU] = HU, YU[uU + iU] = MU, YU[fU + iU] = vU
      }
      yU(tU, UU, YU), yU(gU, EU, YU);
      for (var VU = PU; VU <= WU; ++VU)
        if (oU(VU, LU, eU, YU)) VU !== PU && cU(VU, PU, YU), ++PU;
        else if (!oU(VU, CU, wU, YU))
        for (;;) {
          if (oU(WU, CU, wU, YU)) {
            oU(WU, LU, eU, YU) ? (QU(VU, PU, WU, YU), ++PU, --WU) : (cU(VU, WU, YU), --WU);
            break
          }
          if (--WU < VU) break
        }
      AU(UU, PU - 1, LU, eU, YU), AU(EU, WU + 1, CU, wU, YU), PU - 2 - UU <= XU ? zU(UU, PU - 2, YU) : DU(UU, PU - 2, YU), EU - (WU + 2) <= XU ? zU(WU + 2, EU, YU) : DU(WU + 2, EU, YU), WU - PU <= XU ? zU(PU, WU, YU) : DU(PU, WU, YU)
    }
  },
  39082: (UU, XU, zU) => {
    UU.exports = {
      init: function(UU) {
        var XU = yU.nextPow2(UU);
        oU.length < XU && (cU.free(oU), oU = cU.mallocInt32(XU));
        DU.length < XU && (cU.free(DU), DU = cU.mallocInt32(XU));
        EU.length < XU && (cU.free(EU), EU = cU.mallocInt32(XU));
        YU.length < XU && (cU.free(YU), YU = cU.mallocInt32(XU));
        NU.length < XU && (cU.free(NU), NU = cU.mallocInt32(XU));
        IU.length < XU && (cU.free(IU), IU = cU.mallocInt32(XU));
        var zU = 8 * XU;
        pU.length < zU && (cU.free(pU), pU = cU.mallocDouble(zU))
      },
      sweepBipartite: function(UU, XU, zU, cU, yU, FU, NU, IU, gU, kU) {
        for (var GU = 0, BU = 2 * UU, ZU = UU - 1, RU = BU - 1, PU = zU; PU < cU; ++PU) {
          var WU = FU[PU],
            dU = BU * PU;
          pU[GU++] = yU[dU + ZU], pU[GU++] = -(WU + 1), pU[GU++] = yU[dU + RU], pU[GU++] = WU
        }
        for (PU = NU; PU < IU; ++PU) {
          WU = kU[PU] + AU;
          var LU = BU * PU;
          pU[GU++] = gU[LU + ZU], pU[GU++] = -WU, pU[GU++] = gU[LU + RU], pU[GU++] = WU
        }
        var eU = GU >>> 1;
        QU(pU, eU);
        var CU = 0,
          wU = 0;
        for (PU = 0; PU < eU; ++PU) {
          var qU = 0 | pU[2 * PU + 1];
          if (qU >= AU) aU(EU, YU, wU--, qU = qU - AU | 0);
          else if (qU >= 0) aU(oU, DU, CU--, qU);
          else if (qU <= -AU) {
            qU = -qU - AU | 0;
            for (var OU = 0; OU < CU; ++OU) {
              if (void 0 !== (SU = XU(oU[OU], qU))) return SU
            }
            tU(EU, YU, wU++, qU)
          } else {
            qU = -qU - 1 | 0;
            for (OU = 0; OU < wU; ++OU) {
              var SU;
              if (void 0 !== (SU = XU(qU, EU[OU]))) return SU
            }
            tU(oU, DU, CU++, qU)
          }
        }
      },
      sweepComplete: function(UU, XU, zU, cU, yU, AU, FU, gU, kU, GU) {
        for (var BU = 0, ZU = 2 * UU, RU = UU - 1, PU = ZU - 1, WU = zU; WU < cU; ++WU) {
          var dU = AU[WU] + 1 << 1,
            LU = ZU * WU;
          pU[BU++] = yU[LU + RU], pU[BU++] = -dU, pU[BU++] = yU[LU + PU], pU[BU++] = dU
        }
        for (WU = FU; WU < gU; ++WU) {
          dU = GU[WU] + 1 << 1;
          var eU = ZU * WU;
          pU[BU++] = kU[eU + RU], pU[BU++] = 1 | -dU, pU[BU++] = kU[eU + PU], pU[BU++] = 1 | dU
        }
        var CU = BU >>> 1;
        QU(pU, CU);
        var wU = 0,
          qU = 0,
          OU = 0;
        for (WU = 0; WU < CU; ++WU) {
          var SU = 0 | pU[2 * WU + 1],
            rU = 1 & SU;
          if (WU < CU - 1 && SU >> 1 === pU[2 * WU + 3] >> 1 && (rU = 2, WU += 1), SU < 0) {
            for (var uU = -(SU >> 1) - 1, fU = 0; fU < OU; ++fU) {
              if (void 0 !== (iU = XU(NU[fU], uU))) return iU
            }
            if (0 !== rU)
              for (fU = 0; fU < wU; ++fU) {
                if (void 0 !== (iU = XU(oU[fU], uU))) return iU
              }
            if (1 !== rU)
              for (fU = 0; fU < qU; ++fU) {
                var iU;
                if (void 0 !== (iU = XU(EU[fU], uU))) return iU
              }
            0 === rU ? tU(oU, DU, wU++, uU) : 1 === rU ? tU(EU, YU, qU++, uU) : 2 === rU && tU(NU, IU, OU++, uU)
          } else {
            uU = (SU >> 1) - 1;
            0 === rU ? aU(oU, DU, wU--, uU) : 1 === rU ? aU(EU, YU, qU--, uU) : 2 === rU && aU(NU, IU, OU--, uU)
          }
        }
      },
      scanBipartite: function(UU, XU, zU, cU, yU, FU, EU, YU, NU, IU, gU, kU) {
        var GU = 0,
          BU = 2 * UU,
          ZU = XU,
          RU = XU + UU,
          PU = 1,
          WU = 1;
        cU ? WU = AU : PU = AU;
        for (var dU = yU; dU < FU; ++dU) {
          var LU = dU + PU,
            eU = BU * dU;
          pU[GU++] = EU[eU + ZU], pU[GU++] = -LU, pU[GU++] = EU[eU + RU], pU[GU++] = LU
        }
        for (dU = NU; dU < IU; ++dU) {
          LU = dU + WU;
          var CU = BU * dU;
          pU[GU++] = gU[CU + ZU], pU[GU++] = -LU
        }
        var wU = GU >>> 1;
        QU(pU, wU);
        var qU = 0;
        for (dU = 0; dU < wU; ++dU) {
          var OU = 0 | pU[2 * dU + 1];
          if (OU < 0) {
            var SU = !1;
            if ((LU = -OU) >= AU ? (SU = !cU, LU -= AU) : (SU = !!cU, LU -= 1), SU) tU(oU, DU, qU++, LU);
            else {
              var rU = kU[LU],
                uU = BU * LU,
                fU = gU[uU + XU + 1],
                iU = gU[uU + XU + 1 + UU];
              UU: for (var HU = 0; HU < qU; ++HU) {
                var MU = oU[HU],
                  vU = BU * MU;
                if (!(iU < EU[vU + XU + 1] || EU[vU + XU + 1 + UU] < fU)) {
                  for (var VU = XU + 2; VU < UU; ++VU)
                    if (gU[uU + VU + UU] < EU[vU + VU] || EU[vU + VU + UU] < gU[uU + VU]) continue UU;
                  var sU, nU = YU[MU];
                  if (void 0 !== (sU = cU ? zU(rU, nU) : zU(nU, rU))) return sU
                }
              }
            }
          } else aU(oU, DU, qU--, OU - PU)
        }
      },
      scanComplete: function(UU, XU, zU, cU, yU, FU, DU, EU, YU, NU, IU) {
        for (var aU = 0, tU = 2 * UU, gU = XU, kU = XU + UU, GU = cU; GU < yU; ++GU) {
          var BU = GU + AU,
            ZU = tU * GU;
          pU[aU++] = FU[ZU + gU], pU[aU++] = -BU, pU[aU++] = FU[ZU + kU], pU[aU++] = BU
        }
        for (GU = EU; GU < YU; ++GU) {
          BU = GU + 1;
          var RU = tU * GU;
          pU[aU++] = NU[RU + gU], pU[aU++] = -BU
        }
        var PU = aU >>> 1;
        QU(pU, PU);
        var WU = 0;
        for (GU = 0; GU < PU; ++GU) {
          var dU = 0 | pU[2 * GU + 1];
          if (dU < 0) {
            if ((BU = -dU) >= AU) oU[WU++] = BU - AU;
            else {
              var LU = IU[BU -= 1],
                eU = tU * BU,
                CU = NU[eU + XU + 1],
                wU = NU[eU + XU + 1 + UU];
              UU: for (var qU = 0; qU < WU; ++qU) {
                var OU = oU[qU],
                  SU = DU[OU];
                if (SU === LU) break;
                var rU = tU * OU;
                if (!(wU < FU[rU + XU + 1] || FU[rU + XU + 1 + UU] < CU)) {
                  for (var uU = XU + 2; uU < UU; ++uU)
                    if (NU[eU + uU + UU] < FU[rU + uU] || FU[rU + uU + UU] < NU[eU + uU]) continue UU;
                  var fU = zU(SU, LU);
                  if (void 0 !== fU) return fU
                }
              }
            }
          } else {
            for (BU = dU - AU, qU = WU - 1; qU >= 0; --qU)
              if (oU[qU] === BU) {
                for (uU = qU + 1; uU < WU; ++uU) oU[uU - 1] = oU[uU];
                break
              }-- WU
          }
        }
      }
    };
    var cU = zU(39062),
      yU = zU(39067),
      QU = zU(39087),
      AU = 1 << 28,
      FU = 1024,
      oU = cU.mallocInt32(FU),
      DU = cU.mallocInt32(FU),
      EU = cU.mallocInt32(FU),
      YU = cU.mallocInt32(FU),
      NU = cU.mallocInt32(FU),
      IU = cU.mallocInt32(FU),
      pU = cU.mallocDouble(8192);

    function aU(UU, XU, zU, cU) {
      var yU = XU[cU],
        QU = UU[zU - 1];
      UU[yU] = QU, XU[QU] = yU
    }

    function tU(UU, XU, zU, cU) {
      UU[zU] = cU, XU[cU] = zU
    }
  },
  39074: UU => {
    function XU(UU, zU, cU) {
      var yU = 0 | UU[cU];
      if (yU <= 0) return [];
      var QU, AU = new Array(yU);
      if (cU === UU.length - 1)
        for (QU = 0; QU < yU; ++QU) AU[QU] = zU;
      else
        for (QU = 0; QU < yU; ++QU) AU[QU] = XU(UU, zU, cU + 1);
      return AU
    }
    UU.exports = function(UU, zU) {
      switch ("undefined" === typeof zU && (zU = 0), typeof UU) {
        case "number":
          if (UU > 0) return function(UU, XU) {
            var zU, cU;
            for (zU = new Array(UU), cU = 0; cU < UU; ++cU) zU[cU] = XU;
            return zU
          }(0 | UU, zU);
          break;
        case "object":
          if ("number" === typeof UU.length) return XU(UU, zU, 0)
      }
      return []
    }
  },
  39015: (UU, XU, zU) => {
    UU.exports = function() {
      var UU = this;
      this.components = {}, this.comps = this.components;
      var XU = this.components,
        zU = 1,
        yU = {},
        QU = [],
        AU = [],
        FU = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function oU(UU, zU) {
        var cU = XU[zU],
          QU = yU[zU],
          AU = QU.hash[UU];
        AU && (QU.remove(UU), cU.Cw && (cU.multi ? (AU.forEach((XU => {
          XU && cU.Cw(UU, XU)
        })), AU.length = 0) : cU.Cw(UU, AU)), FU.removals.push(QU), DU())
      }

      function DU() {
        FU.timeout || (FU.timeout = !0, setTimeout(EU, 1))
      }

      function EU() {
        FU.timeout = !1, YU()
      }

      function YU() {
        FU.multiComps.length && function(UU) {
          for (var XU = 0; XU < UU.length; XU++) {
            var {
              entID: zU,
              data: cU
            } = UU[XU], yU = cU.hash[zU];
            if (yU) {
              for (var QU = 0; QU < yU.length; QU++) yU[QU] || (yU.splice(QU, 1), QU--);
              0 === yU.length && (cU.remove(zU), FU.removals.push(cU))
            }
          }
          UU.length = 0
        }(FU.multiComps), FU.removals.length && function(UU) {
          for (var XU = 0; XU < UU.length; XU++) {
            UU[XU].flush()
          }
          UU.length = 0
        }(FU.removals)
      }
      this.Ga = yU, this._systems = QU, this._renderSystems = AU, this.bK = function(XU) {
        var cU = zU++;
        return Array.isArray(XU) && XU.forEach((XU => UU.sH(cU, XU))), cU
      }, this.deleteEntity = function(XU) {
        return Object.keys(yU).forEach((UU => {
          yU[UU].hash[XU] && oU(XU, UU)
        })), UU
      }, this.uzU = function(UU) {
        if (!UU) throw new Error("Missing component definition");
        var zU = UU.name;
        if (!zU) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof zU) throw new Error("Component name must be a string.");
        if ("" === zU) throw new Error("Component name must be a non-empty string.");
        if (yU[zU]) throw new Error(`Component ${zU} already exists.`);
        var FU = {};
        return FU.name = zU, FU.multi = !!UU.multi, FU.order = isNaN(UU.order) ? 99 : UU.order, FU.stateConstructor = UU.stateConstructor || null, FU.state = UU.state || {}, FU.lG = UU.lG || null, FU.Cw = UU.Cw || null, FU.system = UU.system || null, FU.JG = UU.JG || null, XU[zU] = FU, yU[zU] = new cU, yU[zU]._pendingMultiCleanup = !1, yU[zU]._multiCleanupIDs = FU.multi ? [] : null, FU.system && (QU.push(zU), QU.sort(((UU, zU) => XU[UU].order - XU[zU].order))), FU.JG && (AU.push(zU), AU.sort(((UU, zU) => XU[UU].order - XU[zU].order))), zU
      }, this.overwriteComponent = function(UU, zU) {
        var cU = XU[UU];
        if (!cU) throw new Error(`Unknown component: ${UU}`);
        if (!zU) throw new Error("Missing component definition");
        if (cU.name !== zU.name) throw new Error("Overwriting component must use the same name property.");
        var FU = {};
        FU.name = UU, FU.multi = !!zU.multi, FU.order = isNaN(zU.order) ? 99 : zU.order, FU.state = zU.state || {}, FU.lG = zU.lG || null, FU.Cw = zU.Cw || null, FU.system = zU.system || null, FU.JG = zU.JG || null, XU[UU] = FU, yU[UU]._pendingMultiCleanup = !1, yU[UU]._multiCleanupIDs = FU.multi ? [] : null;
        var oU = QU.indexOf(UU);
        FU.system && oU < 0 && QU.push(UU), !FU.system && oU >= 0 && QU.splice(oU, 1), QU.sort(((UU, zU) => XU[UU].order - XU[zU].order));
        var DU = AU.indexOf(UU);
        FU.JG && DU < 0 && AU.push(UU), !FU.JG && DU >= 0 && AU.splice(DU, 1), AU.sort(((UU, zU) => XU[UU].order - XU[zU].order));
        var EU = FU.state;
        return this.uH(UU).forEach((UU => {
          for (var XU in EU) XU in UU || (UU[XU] = EU[XU]);
          FU.lG && FU.lG(UU.iH, UU)
        })), UU
      }, this.deleteComponent = function(zU) {
        var cU = yU[zU];
        if (!cU) throw new Error(`Unknown component: ${zU}`);
        cU.flush(), cU.list.forEach((UU => {
          UU && oU(UU.iH || UU[0].iH, zU)
        }));
        var FU = QU.indexOf(zU),
          DU = AU.indexOf(zU);
        return FU > -1 && QU.splice(FU, 1), DU > -1 && AU.splice(DU, 1), yU[zU].dispose(), delete yU[zU], delete XU[zU], UU
      }, this.sH = function(UU, zU, cU) {
        var QU, AU = XU[zU],
          FU = yU[zU];
        if (!FU) throw new Error(`Unknown component: ${zU}.`);
        if (FU.hash[UU] && !AU.multi) throw new Error(`Entity ${UU} already has component: ${zU}.`);
        if (AU.stateConstructor) {
          if (!(QU = new AU.stateConstructor).hasOwnProperty("iH")) throw new Error(`Component ${AU.name} stateConstructor type does not have property __id`);
          Object.assign(QU, AU.state, cU)
        } else QU = {
          iH: UU,
          ...AU.state,
          ...cU
        };
        if (QU.iH = UU, AU.multi) {
          var oU = FU.hash[UU];
          oU || (oU = [], FU.add(UU, oU)), oU.push(QU)
        } else FU.add(UU, QU);
        return AU.lG && AU.lG(UU, QU), this
      }, this.qXU = function(UU, XU) {
        var zU = yU[XU];
        if (!zU) throw new Error(`Unknown component: ${XU}.`);
        return !!zU.hash[UU]
      }, this.nH = function(XU, zU) {
        if (!yU[zU]) throw new Error(`Unknown component: ${zU}.`);
        return oU(XU, zU), UU
      }, this.getState = function(UU, XU) {
        var zU = yU[XU];
        if (!zU) throw new Error(`Unknown component: ${XU}.`);
        return zU.hash[UU]
      }, this.uH = function(UU) {
        var XU = yU[UU];
        if (!XU) throw new Error(`Unknown component: ${UU}.`);
        return YU(), XU.list
      }, this.pzU = function(UU) {
        if (!yU[UU]) throw new Error(`Unknown component: ${UU}.`);
        var XU = yU[UU].hash;
        return UU => XU[UU]
      }, this.BzU = function(UU) {
        if (!yU[UU]) throw new Error(`Unknown component: ${UU}.`);
        var XU = yU[UU].hash;
        return UU => !!XU[UU]
      }, this.LY = function(zU) {
        YU();
        for (var cU = 0; cU < QU.length; cU++) {
          var AU = QU[cU],
            FU = XU[AU],
            oU = yU[AU];
          FU.system(zU, oU.list), YU()
        }
        return UU
      }, this.render = function(zU) {
        YU();
        for (var cU = 0; cU < AU.length; cU++) {
          var QU = AU[cU],
            FU = XU[QU],
            oU = yU[QU];
          FU.JG(zU, oU.list), YU()
        }
        return UU
      }, this.removeMultiComponent = function(zU, cU, QU) {
        var AU = XU[cU],
          oU = yU[cU];
        if (!oU) throw new Error(`Unknown component: ${cU}.`);
        if (!AU.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(UU, XU, zU, cU) {
          var yU = zU.hash[UU];
          if (yU) {
            var QU = yU[cU];
            QU && (yU[cU] = null, XU.Cw && XU.Cw(UU, QU), FU.multiComps.push({
              entID: UU,
              data: zU
            }), DU())
          }
        }(zU, AU, oU, QU), UU
      }
    };
    var cU = zU(39022)
  },
  39022: UU => {
    function XU(UU, XU) {
      var zU = UU._map[XU];
      if (delete UU.hash[XU], delete UU._map[XU], zU === UU.list.length - 1) UU.list.pop(), UU._idList.pop();
      else {
        var cU = UU.list.pop();
        UU.list[zU] = cU;
        var yU = UU._idList.pop();
        UU._idList[zU] = yU, UU._map[yU] = zU
      }
    }
    UU.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(UU, XU) {
        if ("number" === typeof this._map[UU]) {
          var zU = this._map[UU];
          this.hash[UU] = XU, this.list[zU] = XU, this._idList[zU] = UU
        } else this._map[UU] = this.list.length, this.hash[UU] = XU, this.list.push(XU), this._idList.push(UU)
      }
      remove(UU) {
        var XU = this._map[UU];
        this.hash[UU] = null, this.list[XU] = null, this._pendingRemovals.push(UU)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var UU = 0; UU < this._pendingRemovals.length; UU++) {
          var zU = this._pendingRemovals[UU];
          null === this.hash[zU] && XU(this, zU)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  38801: (UU, XU, zU) => {
    UU = zU.nmd(UU);
    var cU = "__lodash_hash_undefined__",
      yU = 9007199254740991,
      QU = "[object Arguments]",
      AU = "[object Boolean]",
      FU = "[object Date]",
      oU = "[object Function]",
      DU = "[object GeneratorFunction]",
      EU = "[object Map]",
      YU = "[object Number]",
      NU = "[object Object]",
      IU = "[object Promise]",
      pU = "[object RegExp]",
      aU = "[object Set]",
      tU = "[object String]",
      gU = "[object Symbol]",
      kU = "[object WeakMap]",
      GU = "[object ArrayBuffer]",
      BU = "[object DataView]",
      ZU = "[object Float32Array]",
      RU = "[object Float64Array]",
      PU = "[object Int8Array]",
      WU = "[object Int16Array]",
      dU = "[object Int32Array]",
      LU = "[object Uint8Array]",
      eU = "[object Uint8ClampedArray]",
      CU = "[object Uint16Array]",
      wU = "[object Uint32Array]",
      qU = /\w*$/,
      OU = /^\[object .+?Constructor\]$/,
      SU = /^(?:0|[1-9]\d*)$/,
      rU = {};
    rU[QU] = rU["[object Array]"] = rU[GU] = rU[BU] = rU[AU] = rU[FU] = rU[ZU] = rU[RU] = rU[PU] = rU[WU] = rU[dU] = rU[EU] = rU[YU] = rU[NU] = rU[pU] = rU[aU] = rU[tU] = rU[gU] = rU[LU] = rU[eU] = rU[CU] = rU[wU] = !0, rU["[object Error]"] = rU[oU] = rU[kU] = !1;
    var uU = "object" == typeof zU.g && zU.g && zU.g.Object === Object && zU.g,
      fU = "object" == typeof self && self && self.Object === Object && self,
      iU = uU || fU || Function("return this")(),
      HU = XU && !XU.nodeType && XU,
      MU = HU && UU && !UU.nodeType && UU,
      vU = MU && MU.exports === HU;

    function VU(UU, XU) {
      return UU.set(XU[0], XU[1]), UU
    }

    function sU(UU, XU) {
      return UU.add(XU), UU
    }

    function nU(UU, XU, zU, cU) {
      var yU = -1,
        QU = UU ? UU.length : 0;
      for (cU && QU && (zU = UU[++yU]); ++yU < QU;) zU = XU(zU, UU[yU], yU, UU);
      return zU
    }

    function mU(UU) {
      var XU = !1;
      if (null != UU && "function" != typeof UU.toString) try {
        XU = !!(UU + "")
      } catch (zU) {}
      return XU
    }

    function lU(UU) {
      var XU = -1,
        zU = Array(UU.size);
      return UU.forEach((function(UU, cU) {
        zU[++XU] = [cU, UU]
      })), zU
    }

    function xU(UU, XU) {
      return function(zU) {
        return UU(XU(zU))
      }
    }

    function JU(UU) {
      var XU = -1,
        zU = Array(UU.size);
      return UU.forEach((function(UU) {
        zU[++XU] = UU
      })), zU
    }
    var jU = Array.prototype,
      KU = Function.prototype,
      bU = Object.prototype,
      TU = iU["__core-js_shared__"],
      hU = function() {
        var UU = /[^.]+$/.exec(TU && TU.keys && TU.keys.IE_PROTO || "");
        return UU ? "Symbol(src)_1." + UU : ""
      }(),
      UX = KU.toString,
      XX = bU.hasOwnProperty,
      zX = bU.toString,
      cX = RegExp("^" + UX.call(XX).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      yX = vU ? iU.XY : void 0,
      QX = iU.Symbol,
      AX = iU.Uint8Array,
      FX = xU(Object.getPrototypeOf, Object),
      oX = Object.create,
      DX = bU.propertyIsEnumerable,
      EX = jU.splice,
      YX = Object.getOwnPropertySymbols,
      NX = yX ? yX.isBuffer : void 0,
      IX = xU(Object.keys, Object),
      pX = vX(iU, "DataView"),
      aX = vX(iU, "Map"),
      tX = vX(iU, "Promise"),
      gX = vX(iU, "Set"),
      kX = vX(iU, "WeakMap"),
      GX = vX(Object, "create"),
      BX = lX(pX),
      ZX = lX(aX),
      RX = lX(tX),
      PX = lX(gX),
      WX = lX(kX),
      dX = QX ? QX.prototype : void 0,
      LX = dX ? dX.valueOf : void 0;

    function eX(UU) {
      var XU = -1,
        zU = UU ? UU.length : 0;
      for (this.clear(); ++XU < zU;) {
        var cU = UU[XU];
        this.set(cU[0], cU[1])
      }
    }

    function CX(UU) {
      var XU = -1,
        zU = UU ? UU.length : 0;
      for (this.clear(); ++XU < zU;) {
        var cU = UU[XU];
        this.set(cU[0], cU[1])
      }
    }

    function wX(UU) {
      var XU = -1,
        zU = UU ? UU.length : 0;
      for (this.clear(); ++XU < zU;) {
        var cU = UU[XU];
        this.set(cU[0], cU[1])
      }
    }

    function qX(UU) {
      this.__data__ = new CX(UU)
    }

    function OX(UU, XU) {
      var zU = JX(UU) || function(UU) {
          return function(UU) {
            return function(UU) {
              return !!UU && "object" == typeof UU
            }(UU) && jX(UU)
          }(UU) && XX.call(UU, "callee") && (!DX.call(UU, "callee") || zX.call(UU) == QU)
        }(UU) ? function(UU, XU) {
          for (var zU = -1, cU = Array(UU); ++zU < UU;) cU[zU] = XU(zU);
          return cU
        }(UU.length, String) : [],
        cU = zU.length,
        yU = !!cU;
      for (var AU in UU) !XU && !XX.call(UU, AU) || yU && ("length" == AU || nX(AU, cU)) || zU.push(AU);
      return zU
    }

    function SX(UU, XU, zU) {
      var cU = UU[XU];
      XX.call(UU, XU) && xX(cU, zU) && (void 0 !== zU || XU in UU) || (UU[XU] = zU)
    }

    function rX(UU, XU) {
      for (var zU = UU.length; zU--;)
        if (xX(UU[zU][0], XU)) return zU;
      return -1
    }

    function uX(UU, XU, zU, cU, yU, IU, kU) {
      var OU;
      if (cU && (OU = IU ? cU(UU, yU, IU, kU) : cU(UU)), void 0 !== OU) return OU;
      if (!TX(UU)) return UU;
      var SU = JX(UU);
      if (SU) {
        if (OU = function(UU) {
            var XU = UU.length,
              zU = UU.constructor(XU);
            XU && "string" == typeof UU[0] && XX.call(UU, "index") && (zU.index = UU.index, zU.input = UU.input);
            return zU
          }(UU), !XU) return function(UU, XU) {
          var zU = -1,
            cU = UU.length;
          XU || (XU = Array(cU));
          for (; ++zU < cU;) XU[zU] = UU[zU];
          return XU
        }(UU, OU)
      } else {
        var uU = sX(UU),
          fU = uU == oU || uU == DU;
        if (KX(UU)) return function(UU, XU) {
          if (XU) return UU.slice();
          var zU = new UU.constructor(UU.length);
          return UU.copy(zU), zU
        }(UU, XU);
        if (uU == NU || uU == QU || fU && !IU) {
          if (mU(UU)) return IU ? UU : {};
          if (OU = function(UU) {
              return "function" != typeof UU.constructor || mX(UU) ? {} : (XU = FX(UU), TX(XU) ? oX(XU) : {});
              var XU
            }(fU ? {} : UU), !XU) return function(UU, XU) {
            return HX(UU, VX(UU), XU)
          }(UU, function(UU, XU) {
            return UU && HX(XU, hX(XU), UU)
          }(OU, UU))
        } else {
          if (!rU[uU]) return IU ? UU : {};
          OU = function(UU, XU, zU, cU) {
            var yU = UU.constructor;
            switch (XU) {
              case GU:
                return iX(UU);
              case AU:
              case FU:
                return new yU(+UU);
              case BU:
                return function(UU, XU) {
                  var zU = XU ? iX(UU.buffer) : UU.buffer;
                  return new UU.constructor(zU, UU.byteOffset, UU.byteLength)
                }(UU, cU);
              case ZU:
              case RU:
              case PU:
              case WU:
              case dU:
              case LU:
              case eU:
              case CU:
              case wU:
                return function(UU, XU) {
                  var zU = XU ? iX(UU.buffer) : UU.buffer;
                  return new UU.constructor(zU, UU.byteOffset, UU.length)
                }(UU, cU);
              case EU:
                return function(UU, XU, zU) {
                  var cU = XU ? zU(lU(UU), !0) : lU(UU);
                  return nU(cU, VU, new UU.constructor)
                }(UU, cU, zU);
              case YU:
              case tU:
                return new yU(UU);
              case pU:
                return function(UU) {
                  var XU = new UU.constructor(UU.source, qU.exec(UU));
                  return XU.lastIndex = UU.lastIndex, XU
                }(UU);
              case aU:
                return function(UU, XU, zU) {
                  var cU = XU ? zU(JU(UU), !0) : JU(UU);
                  return nU(cU, sU, new UU.constructor)
                }(UU, cU, zU);
              case gU:
                return QU = UU, LX ? Object(LX.call(QU)) : {}
            }
            var QU
          }(UU, uU, uX, XU)
        }
      }
      kU || (kU = new qX);
      var iU = kU.get(UU);
      if (iU) return iU;
      if (kU.set(UU, OU), !SU) var HU = zU ? function(UU) {
        return function(UU, XU, zU) {
          var cU = XU(UU);
          return JX(UU) ? cU : function(UU, XU) {
            for (var zU = -1, cU = XU.length, yU = UU.length; ++zU < cU;) UU[yU + zU] = XU[zU];
            return UU
          }(cU, zU(UU))
        }(UU, hX, VX)
      }(UU) : hX(UU);
      return function(UU, XU) {
        for (var zU = -1, cU = UU ? UU.length : 0; ++zU < cU && !1 !== XU(UU[zU], zU, UU););
      }(HU || UU, (function(yU, QU) {
        HU && (yU = UU[QU = yU]), SX(OU, QU, uX(yU, XU, zU, cU, QU, UU, kU))
      })), OU
    }

    function fX(UU) {
      return !(!TX(UU) || (XU = UU, hU && hU in XU)) && (bX(UU) || mU(UU) ? cX : OU).test(lX(UU));
      var XU
    }

    function iX(UU) {
      var XU = new UU.constructor(UU.byteLength);
      return new AX(XU).set(new AX(UU)), XU
    }

    function HX(UU, XU, zU, cU) {
      zU || (zU = {});
      for (var yU = -1, QU = XU.length; ++yU < QU;) {
        var AU = XU[yU],
          FU = cU ? cU(zU[AU], UU[AU], AU, zU, UU) : void 0;
        SX(zU, AU, void 0 === FU ? UU[AU] : FU)
      }
      return zU
    }

    function MX(UU, XU) {
      var zU = UU.__data__;
      return function(UU) {
        var XU = typeof UU;
        return "string" == XU || "number" == XU || "symbol" == XU || "boolean" == XU ? "__proto__" !== UU : null === UU
      }(XU) ? zU["string" == typeof XU ? "string" : "hash"] : zU.map
    }

    function vX(UU, XU) {
      var zU = function(UU, XU) {
        return null == UU ? void 0 : UU[XU]
      }(UU, XU);
      return fX(zU) ? zU : void 0
    }
    eX.prototype.clear = function() {
      this.__data__ = GX ? GX(null) : {}
    }, eX.prototype.delete = function(UU) {
      return this.has(UU) && delete this.__data__[UU]
    }, eX.prototype.get = function(UU) {
      var XU = this.__data__;
      if (GX) {
        var zU = XU[UU];
        return zU === cU ? void 0 : zU
      }
      return XX.call(XU, UU) ? XU[UU] : void 0
    }, eX.prototype.has = function(UU) {
      var XU = this.__data__;
      return GX ? void 0 !== XU[UU] : XX.call(XU, UU)
    }, eX.prototype.set = function(UU, XU) {
      return this.__data__[UU] = GX && void 0 === XU ? cU : XU, this
    }, CX.prototype.clear = function() {
      this.__data__ = []
    }, CX.prototype.delete = function(UU) {
      var XU = this.__data__,
        zU = rX(XU, UU);
      return !(zU < 0) && (zU == XU.length - 1 ? XU.pop() : EX.call(XU, zU, 1), !0)
    }, CX.prototype.get = function(UU) {
      var XU = this.__data__,
        zU = rX(XU, UU);
      return zU < 0 ? void 0 : XU[zU][1]
    }, CX.prototype.has = function(UU) {
      return rX(this.__data__, UU) > -1
    }, CX.prototype.set = function(UU, XU) {
      var zU = this.__data__,
        cU = rX(zU, UU);
      return cU < 0 ? zU.push([UU, XU]) : zU[cU][1] = XU, this
    }, wX.prototype.clear = function() {
      this.__data__ = {
        hash: new eX,
        map: new(aX || CX),
        string: new eX
      }
    }, wX.prototype.delete = function(UU) {
      return MX(this, UU).delete(UU)
    }, wX.prototype.get = function(UU) {
      return MX(this, UU).get(UU)
    }, wX.prototype.has = function(UU) {
      return MX(this, UU).has(UU)
    }, wX.prototype.set = function(UU, XU) {
      return MX(this, UU).set(UU, XU), this
    }, qX.prototype.clear = function() {
      this.__data__ = new CX
    }, qX.prototype.delete = function(UU) {
      return this.__data__.delete(UU)
    }, qX.prototype.get = function(UU) {
      return this.__data__.get(UU)
    }, qX.prototype.has = function(UU) {
      return this.__data__.has(UU)
    }, qX.prototype.set = function(UU, XU) {
      var zU = this.__data__;
      if (zU instanceof CX) {
        var cU = zU.__data__;
        if (!aX || cU.length < 199) return cU.push([UU, XU]), this;
        zU = this.__data__ = new wX(cU)
      }
      return zU.set(UU, XU), this
    };
    var VX = YX ? xU(YX, Object) : function() {
        return []
      },
      sX = function(UU) {
        return zX.call(UU)
      };

    function nX(UU, XU) {
      return !!(XU = null == XU ? yU : XU) && ("number" == typeof UU || SU.test(UU)) && UU > -1 && UU % 1 == 0 && UU < XU
    }

    function mX(UU) {
      var XU = UU && UU.constructor;
      return UU === ("function" == typeof XU && XU.prototype || bU)
    }

    function lX(UU) {
      if (null != UU) {
        try {
          return UX.call(UU)
        } catch (XU) {}
        try {
          return UU + ""
        } catch (XU) {}
      }
      return ""
    }

    function xX(UU, XU) {
      return UU === XU || UU !== UU && XU !== XU
    }(pX && sX(new pX(new ArrayBuffer(1))) != BU || aX && sX(new aX) != EU || tX && sX(tX.resolve()) != IU || gX && sX(new gX) != aU || kX && sX(new kX) != kU) && (sX = function(UU) {
      var XU = zX.call(UU),
        zU = XU == NU ? UU.constructor : void 0,
        cU = zU ? lX(zU) : void 0;
      if (cU) switch (cU) {
        case BX:
          return BU;
        case ZX:
          return EU;
        case RX:
          return IU;
        case PX:
          return aU;
        case WX:
          return kU
      }
      return XU
    });
    var JX = Array.isArray;

    function jX(UU) {
      return null != UU && function(UU) {
        return "number" == typeof UU && UU > -1 && UU % 1 == 0 && UU <= yU
      }(UU.length) && !bX(UU)
    }
    var KX = NX || function() {
      return !1
    };

    function bX(UU) {
      var XU = TX(UU) ? zX.call(UU) : "";
      return XU == oU || XU == DU
    }

    function TX(UU) {
      var XU = typeof UU;
      return !!UU && ("object" == XU || "function" == XU)
    }

    function hX(UU) {
      return jX(UU) ? OX(UU) : function(UU) {
        if (!mX(UU)) return IX(UU);
        var XU = [];
        for (var zU in Object(UU)) XX.call(UU, zU) && "constructor" != zU && XU.push(zU);
        return XU
      }(UU)
    }
    UU.exports = function(UU) {
      return uX(UU, !0, !0)
    }
  },
  39229: UU => {
    function XU(UU, XU, zU) {
      for (var cU = UU.length, yU = -1 / 0, QU = 1 / 0, AU = 0; AU < cU; AU++) {
        var FU = (zU[0][AU] - UU[AU]) / XU[AU],
          oU = (zU[1][AU] - UU[AU]) / XU[AU];
        if (FU > oU) {
          var DU = FU;
          FU = oU, oU = DU
        }
        if (oU < yU || FU > QU) return 1 / 0;
        FU > yU && (yU = FU), oU < QU && (QU = oU)
      }
      return yU > QU ? 1 / 0 : yU
    }
    UU.exports = function(UU, zU, cU, yU) {
      var QU = XU(zU, cU, yU);
      if (QU === 1 / 0) UU = null;
      else {
        UU = UU || [];
        for (var AU = 0; AU < zU.length; AU++) UU[AU] = zU[AU] + cU[AU] * QU
      }
      return UU
    }, UU.exports.distance = XU
  },
  38473: (UU, XU, zU) => {
    var cU = zU(38476);

    function yU(UU) {
      for (var XU, zU, yU = 0, QU = UU.length, AU = 0; AU < UU.length;) {
        for (XU = UU[AU], zU = 0; AU < QU && UU[AU] === XU;) ++AU, ++zU;
        yU += cU.log2(zU) / 7 | 0, yU += cU.log2(XU >>> 0) / 7 | 0, yU += 2
      }
      return yU
    }
    XU.size = yU, XU.encode = function(UU, XU) {
      XU || (XU = new Uint8Array(yU(UU)));
      for (var zU, cU, QU = 0, AU = XU.length, FU = 0; FU < UU.length;) {
        for (zU = UU[FU], cU = 0; FU < UU.length && UU[FU] === zU;) ++FU, ++cU;
        for (; QU < AU && cU >= 128;) XU[QU++] = 128 + (127 & cU), cU >>>= 7;
        if (QU >= AU) throw new Error("RLE buffer overflow");
        for (XU[QU++] = cU, zU >>>= 0; QU < AU && zU >= 128;) XU[QU++] = 128 + (127 & zU), zU >>>= 7;
        if (QU >= AU) throw new Error("RLE buffer overflow");
        XU[QU++] = zU
      }
      return XU
    }, XU.decode = function(UU, XU) {
      for (var zU, cU, yU, QU, AU = XU.length, FU = UU.length, oU = 0, DU = 0; DU < FU;) {
        for (zU = 0, cU = 0; DU < FU && UU[DU] >= 128;) zU += (127 & UU[DU++]) << cU, cU += 7;
        if (zU += UU[DU++] << cU, DU >= FU) throw new Error("RLE buffer underrun");
        if (oU + zU > AU) throw new Error("Chunk buffer overflow");
        for (yU = 0, cU = 0; DU < FU && UU[DU] >= 128;) yU += (127 & UU[DU++]) << cU, cU += 7;
        if (DU >= FU) throw new Error("RLE buffer underrun");
        for (yU += UU[DU++] << cU, QU = 0; QU < zU; ++QU) XU[oU++] = yU
      }
      return XU
    }
  },
  38476: (UU, XU) => {
    function zU(UU) {
      var XU = 32;
      return (UU &= -UU) && XU--, 65535 & UU && (XU -= 16), 16711935 & UU && (XU -= 8), 252645135 & UU && (XU -= 4), 858993459 & UU && (XU -= 2), 1431655765 & UU && (XU -= 1), XU
    }
    XU.INT_BITS = 32, XU.INT_MAX = 2147483647, XU.INT_MIN = -1 << 31, XU.sign = function(UU) {
      return (UU > 0) - (UU < 0)
    }, XU.abs = function(UU) {
      var XU = UU >> 31;
      return (UU ^ XU) - XU
    }, XU.min = function(UU, XU) {
      return XU ^ (UU ^ XU) & -(UU < XU)
    }, XU.max = function(UU, XU) {
      return UU ^ (UU ^ XU) & -(UU < XU)
    }, XU.isPow2 = function(UU) {
      return !(UU & UU - 1) && !!UU
    }, XU.log2 = function(UU) {
      var XU, zU;
      return XU = (UU > 65535) << 4, XU |= zU = ((UU >>>= XU) > 255) << 3, XU |= zU = ((UU >>>= zU) > 15) << 2, (XU |= zU = ((UU >>>= zU) > 3) << 1) | (UU >>>= zU) >> 1
    }, XU.log10 = function(UU) {
      return UU >= 1e9 ? 9 : UU >= 1e8 ? 8 : UU >= 1e7 ? 7 : UU >= 1e6 ? 6 : UU >= 1e5 ? 5 : UU >= 1e4 ? 4 : UU >= 1e3 ? 3 : UU >= 100 ? 2 : UU >= 10 ? 1 : 0
    }, XU.popCount = function(UU) {
      return 16843009 * ((UU = (858993459 & (UU -= UU >>> 1 & 1431655765)) + (UU >>> 2 & 858993459)) + (UU >>> 4) & 252645135) >>> 24
    }, XU.countTrailingZeros = zU, XU.nextPow2 = function(UU) {
      return UU += 0 === UU, --UU, UU |= UU >>> 1, UU |= UU >>> 2, UU |= UU >>> 4, UU |= UU >>> 8, (UU |= UU >>> 16) + 1
    }, XU.prevPow2 = function(UU) {
      return UU |= UU >>> 1, UU |= UU >>> 2, UU |= UU >>> 4, UU |= UU >>> 8, (UU |= UU >>> 16) - (UU >>> 1)
    }, XU.parity = function(UU) {
      return UU ^= UU >>> 16, UU ^= UU >>> 8, UU ^= UU >>> 4, 27030 >>> (UU &= 15) & 1
    };
    var cU = new Array(256);
    ! function(UU) {
      for (var XU = 0; XU < 256; ++XU) {
        var zU = XU,
          cU = XU,
          yU = 7;
        for (zU >>>= 1; zU; zU >>>= 1) cU <<= 1, cU |= 1 & zU, --yU;
        UU[XU] = cU << yU & 255
      }
    }(cU), XU.reverse = function(UU) {
      return cU[255 & UU] << 24 | cU[UU >>> 8 & 255] << 16 | cU[UU >>> 16 & 255] << 8 | cU[UU >>> 24 & 255]
    }, XU.interleave2 = function(UU, XU) {
      return (UU = 1431655765 & ((UU = 858993459 & ((UU = 252645135 & ((UU = 16711935 & ((UU &= 65535) | UU << 8)) | UU << 4)) | UU << 2)) | UU << 1)) | (XU = 1431655765 & ((XU = 858993459 & ((XU = 252645135 & ((XU = 16711935 & ((XU &= 65535) | XU << 8)) | XU << 4)) | XU << 2)) | XU << 1)) << 1
    }, XU.deinterleave2 = function(UU, XU) {
      return (UU = 65535 & ((UU = 16711935 & ((UU = 252645135 & ((UU = 858993459 & ((UU = UU >>> XU & 1431655765) | UU >>> 1)) | UU >>> 2)) | UU >>> 4)) | UU >>> 16)) << 16 >> 16
    }, XU.interleave3 = function(UU, XU, zU) {
      return UU = 1227133513 & ((UU = 3272356035 & ((UU = 251719695 & ((UU = 4278190335 & ((UU &= 1023) | UU << 16)) | UU << 8)) | UU << 4)) | UU << 2), (UU |= (XU = 1227133513 & ((XU = 3272356035 & ((XU = 251719695 & ((XU = 4278190335 & ((XU &= 1023) | XU << 16)) | XU << 8)) | XU << 4)) | XU << 2)) << 1) | (zU = 1227133513 & ((zU = 3272356035 & ((zU = 251719695 & ((zU = 4278190335 & ((zU &= 1023) | zU << 16)) | zU << 8)) | zU << 4)) | zU << 2)) << 2
    }, XU.deinterleave3 = function(UU, XU) {
      return (UU = 1023 & ((UU = 4278190335 & ((UU = 251719695 & ((UU = 3272356035 & ((UU = UU >>> XU & 1227133513) | UU >>> 2)) | UU >>> 4)) | UU >>> 8)) | UU >>> 16)) << 22 >> 22
    }, XU.nextCombination = function(UU) {
      var XU = UU | UU - 1;
      return XU + 1 | (~XU & -~XU) - 1 >>> zU(UU) + 1
    }
  },
  37919: (UU, XU, zU) => {
    zU.d(XU, {
      Color3: () => cU.b,
      e: () => cU.e
    });
    var cU = zU(37923);
    (0, cU.f)()
  },
  38502: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => yU
    });
    var cU = zU(38505);
    class yU {
      static GetPlanes(UU) {
        const XU = [];
        for (let zU = 0; zU < 6; zU++) XU.push(new cU.d(0, 0, 0, 0));
        return yU.GetPlanesToRef(UU, XU), XU
      }
      static GetNearPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] + zU[2], XU.normal.y = zU[7] + zU[6], XU.normal.z = zU[11] + zU[10], XU.d = zU[15] + zU[14], XU.normalize()
      }
      static GetFarPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] - zU[2], XU.normal.y = zU[7] - zU[6], XU.normal.z = zU[11] - zU[10], XU.d = zU[15] - zU[14], XU.normalize()
      }
      static GetLeftPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] + zU[0], XU.normal.y = zU[7] + zU[4], XU.normal.z = zU[11] + zU[8], XU.d = zU[15] + zU[12], XU.normalize()
      }
      static GetRightPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] - zU[0], XU.normal.y = zU[7] - zU[4], XU.normal.z = zU[11] - zU[8], XU.d = zU[15] - zU[12], XU.normalize()
      }
      static GetTopPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] - zU[1], XU.normal.y = zU[7] - zU[5], XU.normal.z = zU[11] - zU[9], XU.d = zU[15] - zU[13], XU.normalize()
      }
      static GetBottomPlaneToRef(UU, XU) {
        const zU = UU.m;
        XU.normal.x = zU[3] + zU[1], XU.normal.y = zU[7] + zU[5], XU.normal.z = zU[11] + zU[9], XU.d = zU[15] + zU[13], XU.normalize()
      }
      static GetPlanesToRef(UU, XU) {
        yU.GetNearPlaneToRef(UU, XU[0]), yU.GetFarPlaneToRef(UU, XU[1]), yU.GetLeftPlaneToRef(UU, XU[2]), yU.GetRightPlaneToRef(UU, XU[3]), yU.GetTopPlaneToRef(UU, XU[4]), yU.GetBottomPlaneToRef(UU, XU[5])
      }
      static IsPointInFrustum(UU, XU) {
        for (let zU = 0; zU < 6; zU++)
          if (XU[zU].dotCoordinate(UU) < 0) return !1;
        return !0
      }
    }
  },
  38505: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => yU
    });
    var cU = zU(37819);
    class yU {
      constructor(UU, XU, zU, yU) {
        this.normal = new cU.q(UU, XU, zU), this.d = yU
      }
      cyU() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new yU(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let UU = this.normal.getHashCode();
        return UU = 397 * UU ^ this.d, UU
      }
      normalize() {
        const UU = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let XU = 0;
        return 0 !== UU && (XU = 1 / UU), this.normal.x *= XU, this.normal.y *= XU, this.normal.z *= XU, this.d *= XU, this
      }
      transform(UU) {
        const XU = yU._TmpMatrix;
        UU.invertToRef(XU);
        const zU = XU.m,
          cU = this.normal.x,
          QU = this.normal.y,
          AU = this.normal.z,
          FU = this.d,
          oU = cU * zU[0] + QU * zU[1] + AU * zU[2] + FU * zU[3],
          DU = cU * zU[4] + QU * zU[5] + AU * zU[6] + FU * zU[7],
          EU = cU * zU[8] + QU * zU[9] + AU * zU[10] + FU * zU[11],
          YU = cU * zU[12] + QU * zU[13] + AU * zU[14] + FU * zU[15];
        return new yU(oU, DU, EU, YU)
      }
      dotCoordinate(UU) {
        return this.normal.x * UU.x + this.normal.y * UU.y + this.normal.z * UU.z + this.d
      }
      copyFromPoints(UU, XU, zU) {
        const cU = XU.x - UU.x,
          yU = XU.y - UU.y,
          QU = XU.z - UU.z,
          AU = zU.x - UU.x,
          FU = zU.y - UU.y,
          oU = zU.z - UU.z,
          DU = yU * oU - QU * FU,
          EU = QU * AU - cU * oU,
          YU = cU * FU - yU * AU,
          NU = Math.sqrt(DU * DU + EU * EU + YU * YU);
        let IU;
        return IU = 0 !== NU ? 1 / NU : 0, this.normal.x = DU * IU, this.normal.y = EU * IU, this.normal.z = YU * IU, this.d = -(this.normal.x * UU.x + this.normal.y * UU.y + this.normal.z * UU.z), this
      }
      isFrontFacingTo(UU, XU) {
        return cU.q.Dot(this.normal, UU) <= XU
      }
      signedDistanceTo(UU) {
        return cU.q.Dot(UU, this.normal) + this.d
      }
      static FromArray(UU) {
        return new yU(UU[0], UU[1], UU[2], UU[3])
      }
      static FromPoints(UU, XU, zU) {
        const cU = new yU(0, 0, 0, 0);
        return cU.copyFromPoints(UU, XU, zU), cU
      }
      static FromPositionAndNormal(UU, XU) {
        const zU = new yU(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(UU, XU, zU)
      }
      static FromPositionAndNormalToRef(UU, XU, zU) {
        return zU.normal.YL(XU), zU.normal.normalize(), zU.d = -UU.dot(zU.normal), zU
      }
      static SignedDistanceToPlaneFromPositionAndNormal(UU, XU, zU) {
        const yU = -(XU.x * UU.x + XU.y * UU.y + XU.z * UU.z);
        return cU.q.Dot(zU, XU) + yU
      }
    }
    yU._TmpMatrix = cU.e.Identity()
  },
  37814: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      Matrix: () => cU.e,
      Quaternion: () => cU.f,
      RegisterMathVector: () => cU.h,
      TmpVectors: () => cU.l,
      Vector2: () => cU.m,
      Sp: () => cU.q,
      Vector4: () => cU.t
    });
    var cU = zU(37819);
    (0, cU.h)()
  },
  38845: (UU, XU, zU) => {
    zU.d(XU, {
      d: () => cU
    });
    class cU {
      constructor(UU, XU, zU, cU) {
        this.x = UU, this.y = XU, this.width = zU, this.height = cU
      }
      toGlobal(UU, XU) {
        return new cU(this.x * UU, this.y * XU, this.width * UU, this.height * XU)
      }
      toGlobalToRef(UU, XU, zU) {
        return zU.x = this.x * UU, zU.y = this.y * XU, zU.width = this.width * UU, zU.height = this.height * XU, this
      }
      clone() {
        return new cU(this.x, this.y, this.width, this.height)
      }
    }
  },
  38649: (UU, XU, zU) => {
    function cU() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (UU => {
        const XU = 16 * Math.random() | 0;
        return ("x" === UU ? XU : 3 & XU | 8).toString(16)
      }))
    }
    zU.d(XU, {
      d: () => cU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);