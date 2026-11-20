/*! For license information please see eulrrq.222.a95474a6.chunk.js.LICENSE.txt */
export const id = 222;
export const ids = [222, 229];
export const modules = {
  37865: UU => {
    UU.exports = function(UU) {
      return null != UU && null != UU.constructor && "function" === typeof UU.constructor.isBuffer && UU.constructor.isBuffer(UU)
    }
  },
  37841: (UU, RU, gU) => {
    var tU = gU(37850),
      pU = gU(37858),
      EU = gU(37865);
    gU.g.__TYPEDARRAY_POOL || (gU.g.__TYPEDARRAY_POOL = {
      UINT8: pU([32, 0]),
      UINT16: pU([32, 0]),
      UINT32: pU([32, 0]),
      INT8: pU([32, 0]),
      INT16: pU([32, 0]),
      INT32: pU([32, 0]),
      FLOAT: pU([32, 0]),
      DOUBLE: pU([32, 0]),
      DATA: pU([32, 0]),
      UINT8C: pU([32, 0]),
      BUFFER: pU([32, 0])
    });
    var PU = "undefined" !== typeof Uint8ClampedArray,
      TU = gU.g.__TYPEDARRAY_POOL;
    TU.UINT8C || (TU.UINT8C = pU([32, 0])), TU.BUFFER || (TU.BUFFER = pU([32, 0]));
    var qU = TU.DATA,
      KU = TU.BUFFER;

    function cU(UU) {
      if (UU) {
        var RU = UU.length || UU.byteLength,
          gU = tU.log2(RU);
        qU[gU].push(UU)
      }
    }

    function GU(UU) {
      UU = tU.nextPow2(UU);
      var RU = tU.log2(UU),
        gU = qU[RU];
      return gU.length > 0 ? gU.pop() : new ArrayBuffer(UU)
    }

    function jU(UU) {
      return new Uint8Array(GU(UU), 0, UU)
    }

    function uU(UU) {
      return new Uint16Array(GU(2 * UU), 0, UU)
    }

    function CU(UU) {
      return new Uint32Array(GU(4 * UU), 0, UU)
    }

    function hU(UU) {
      return new Int8Array(GU(UU), 0, UU)
    }

    function QU(UU) {
      return new Int16Array(GU(2 * UU), 0, UU)
    }

    function eU(UU) {
      return new Int32Array(GU(4 * UU), 0, UU)
    }

    function WU(UU) {
      return new Float32Array(GU(4 * UU), 0, UU)
    }

    function fU(UU) {
      return new Float64Array(GU(8 * UU), 0, UU)
    }

    function xU(UU) {
      return PU ? new Uint8ClampedArray(GU(UU), 0, UU) : jU(UU)
    }

    function mU(UU) {
      return new DataView(GU(UU), 0, UU)
    }
    RU.free = function(UU) {
      if (EU(UU)) KU[tU.log2(UU.length)].push(UU);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(UU) && (UU = UU.buffer), !UU) return;
        var RU = UU.length || UU.byteLength,
          gU = 0 | tU.log2(RU);
        qU[gU].push(UU)
      }
    }, RU.freeUint8 = RU.freeUint16 = RU.freeUint32 = RU.freeInt8 = RU.freeInt16 = RU.freeInt32 = RU.freeFloat32 = RU.freeFloat = RU.freeFloat64 = RU.freeDouble = RU.freeUint8Clamped = RU.freeDataView = function(UU) {
      cU(UU.buffer)
    }, RU.freeArrayBuffer = cU, RU.freeBuffer = function(UU) {
      KU[tU.log2(UU.length)].push(UU)
    }, RU.malloc = function(UU, RU) {
      if (void 0 === RU || "arraybuffer" === RU) return GU(UU);
      switch (RU) {
        case "uint8":
          return jU(UU);
        case "uint16":
          return uU(UU);
        case "uint32":
          return CU(UU);
        case "int8":
          return hU(UU);
        case "int16":
          return QU(UU);
        case "int32":
          return eU(UU);
        case "float":
        case "float32":
          return WU(UU);
        case "double":
        case "float64":
          return fU(UU);
        case "uint8_clamped":
          return xU(UU);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return mU(UU);
        default:
          return null
      }
      return null
    }, RU.mallocArrayBuffer = GU, RU.mallocUint8 = jU, RU.mallocUint16 = uU, RU.mallocUint32 = CU, RU.mallocInt8 = hU, RU.mallocInt16 = QU, RU.mallocInt32 = eU, RU.mallocFloat32 = RU.mallocFloat = WU, RU.mallocFloat64 = RU.mallocDouble = fU, RU.mallocUint8Clamped = xU, RU.mallocDataView = mU, RU.clearCache = function() {
      for (var UU = 0; UU < 32; ++UU) TU.UINT8[UU].length = 0, TU.UINT16[UU].length = 0, TU.UINT32[UU].length = 0, TU.INT8[UU].length = 0, TU.INT16[UU].length = 0, TU.INT32[UU].length = 0, TU.FLOAT[UU].length = 0, TU.DOUBLE[UU].length = 0, TU.UINT8C[UU].length = 0, qU[UU].length = 0, KU[UU].length = 0
    }
  },
  37850: (UU, RU) => {
    function gU(UU) {
      var RU = 32;
      return (UU &= -UU) && RU--, 65535 & UU && (RU -= 16), 16711935 & UU && (RU -= 8), 252645135 & UU && (RU -= 4), 858993459 & UU && (RU -= 2), 1431655765 & UU && (RU -= 1), RU
    }
    RU.INT_BITS = 32, RU.INT_MAX = 2147483647, RU.INT_MIN = -1 << 31, RU.sign = function(UU) {
      return (UU > 0) - (UU < 0)
    }, RU.abs = function(UU) {
      var RU = UU >> 31;
      return (UU ^ RU) - RU
    }, RU.min = function(UU, RU) {
      return RU ^ (UU ^ RU) & -(UU < RU)
    }, RU.max = function(UU, RU) {
      return UU ^ (UU ^ RU) & -(UU < RU)
    }, RU.isPow2 = function(UU) {
      return !(UU & UU - 1) && !!UU
    }, RU.log2 = function(UU) {
      var RU, gU;
      return RU = (UU > 65535) << 4, RU |= gU = ((UU >>>= RU) > 255) << 3, RU |= gU = ((UU >>>= gU) > 15) << 2, (RU |= gU = ((UU >>>= gU) > 3) << 1) | (UU >>>= gU) >> 1
    }, RU.log10 = function(UU) {
      return UU >= 1e9 ? 9 : UU >= 1e8 ? 8 : UU >= 1e7 ? 7 : UU >= 1e6 ? 6 : UU >= 1e5 ? 5 : UU >= 1e4 ? 4 : UU >= 1e3 ? 3 : UU >= 100 ? 2 : UU >= 10 ? 1 : 0
    }, RU.popCount = function(UU) {
      return 16843009 * ((UU = (858993459 & (UU -= UU >>> 1 & 1431655765)) + (UU >>> 2 & 858993459)) + (UU >>> 4) & 252645135) >>> 24
    }, RU.countTrailingZeros = gU, RU.nextPow2 = function(UU) {
      return UU += 0 === UU, --UU, UU |= UU >>> 1, UU |= UU >>> 2, UU |= UU >>> 4, UU |= UU >>> 8, (UU |= UU >>> 16) + 1
    }, RU.prevPow2 = function(UU) {
      return UU |= UU >>> 1, UU |= UU >>> 2, UU |= UU >>> 4, UU |= UU >>> 8, (UU |= UU >>> 16) - (UU >>> 1)
    }, RU.parity = function(UU) {
      return UU ^= UU >>> 16, UU ^= UU >>> 8, UU ^= UU >>> 4, 27030 >>> (UU &= 15) & 1
    };
    var tU = new Array(256);
    ! function(UU) {
      for (var RU = 0; RU < 256; ++RU) {
        var gU = RU,
          tU = RU,
          pU = 7;
        for (gU >>>= 1; gU; gU >>>= 1) tU <<= 1, tU |= 1 & gU, --pU;
        UU[RU] = tU << pU & 255
      }
    }(tU), RU.reverse = function(UU) {
      return tU[255 & UU] << 24 | tU[UU >>> 8 & 255] << 16 | tU[UU >>> 16 & 255] << 8 | tU[UU >>> 24 & 255]
    }, RU.interleave2 = function(UU, RU) {
      return (UU = 1431655765 & ((UU = 858993459 & ((UU = 252645135 & ((UU = 16711935 & ((UU &= 65535) | UU << 8)) | UU << 4)) | UU << 2)) | UU << 1)) | (RU = 1431655765 & ((RU = 858993459 & ((RU = 252645135 & ((RU = 16711935 & ((RU &= 65535) | RU << 8)) | RU << 4)) | RU << 2)) | RU << 1)) << 1
    }, RU.deinterleave2 = function(UU, RU) {
      return (UU = 65535 & ((UU = 16711935 & ((UU = 252645135 & ((UU = 858993459 & ((UU = UU >>> RU & 1431655765) | UU >>> 1)) | UU >>> 2)) | UU >>> 4)) | UU >>> 16)) << 16 >> 16
    }, RU.interleave3 = function(UU, RU, gU) {
      return UU = 1227133513 & ((UU = 3272356035 & ((UU = 251719695 & ((UU = 4278190335 & ((UU &= 1023) | UU << 16)) | UU << 8)) | UU << 4)) | UU << 2), (UU |= (RU = 1227133513 & ((RU = 3272356035 & ((RU = 251719695 & ((RU = 4278190335 & ((RU &= 1023) | RU << 16)) | RU << 8)) | RU << 4)) | RU << 2)) << 1) | (gU = 1227133513 & ((gU = 3272356035 & ((gU = 251719695 & ((gU = 4278190335 & ((gU &= 1023) | gU << 16)) | gU << 8)) | gU << 4)) | gU << 2)) << 2
    }, RU.deinterleave3 = function(UU, RU) {
      return (UU = 1023 & ((UU = 4278190335 & ((UU = 251719695 & ((UU = 3272356035 & ((UU = UU >>> RU & 1227133513) | UU >>> 2)) | UU >>> 4)) | UU >>> 8)) | UU >>> 16)) << 22 >> 22
    }, RU.nextCombination = function(UU) {
      var RU = UU | UU - 1;
      return RU + 1 | (~RU & -~RU) - 1 >>> gU(UU) + 1
    }
  },
  37833: (UU, RU, gU) => {
    UU.exports = function(UU, RU, gU) {
      switch (arguments.length) {
        case 1:
          return tU = [], KU(pU = UU, pU, cU, !0), tU;
        case 2:
          return "function" === typeof RU ? KU(UU, UU, RU, !0) : function(UU, RU) {
            return tU = [], KU(UU, RU, cU, !1), tU
          }(UU, RU);
        case 3:
          return KU(UU, RU, gU, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var pU
    };
    var tU, pU = gU(37841),
      EU = gU(37867),
      PU = gU(37879);

    function TU(UU, RU) {
      for (var gU = 0; gU < UU; ++gU)
        if (!(RU[gU] <= RU[gU + UU])) return !0;
      return !1
    }

    function qU(UU, RU, gU, tU) {
      for (var pU = 0, EU = 0, PU = 0, qU = UU.length; PU < qU; ++PU) {
        var KU = UU[PU];
        if (!TU(RU, KU)) {
          for (var cU = 0; cU < 2 * RU; ++cU) gU[pU++] = KU[cU];
          tU[EU++] = PU
        }
      }
      return EU
    }

    function KU(UU, RU, gU, tU) {
      var TU = UU.length,
        KU = RU.length;
      if (!(TU <= 0 || KU <= 0)) {
        var cU = UU[0].length >>> 1;
        if (!(cU <= 0)) {
          var GU, jU = pU.mallocDouble(2 * cU * TU),
            uU = pU.mallocInt32(TU);
          if ((TU = qU(UU, cU, jU, uU)) > 0) {
            if (1 === cU && tU) EU.init(TU), GU = EU.sweepComplete(cU, gU, 0, TU, jU, uU, 0, TU, jU, uU);
            else {
              var CU = pU.mallocDouble(2 * cU * KU),
                hU = pU.mallocInt32(KU);
              (KU = qU(RU, cU, CU, hU)) > 0 && (EU.init(TU + KU), GU = 1 === cU ? EU.sweepBipartite(cU, gU, 0, TU, jU, uU, 0, KU, CU, hU) : PU(cU, gU, tU, TU, jU, uU, KU, CU, hU), pU.free(CU), pU.free(hU))
            }
            pU.free(jU), pU.free(uU)
          }
          return GU
        }
      }
    }

    function cU(UU, RU) {
      tU.push([UU, RU])
    }
  },
  37884: (UU, RU) => {
    var gU = "d",
      tU = "ax",
      pU = "fp",
      EU = "es",
      PU = "rs",
      TU = "re",
      qU = "rb",
      KU = "bs",
      cU = "be",
      GU = "bb",
      jU = [gU, tU, "vv", PU, TU, qU, "ri", KU, cU, GU, "bi"];

    function uU(UU) {
      var RU = "bruteForce" + (UU ? "Full" : "Partial"),
        tU = [],
        PU = jU.slice();
      UU || PU.splice(3, 0, pU);
      var TU = ["function " + RU + "(" + PU.join() + "){"];

      function qU(RU, pU) {
        var PU = function(UU, RU, tU) {
          var pU = "bruteForce" + (UU ? "Red" : "Blue") + (RU ? "Flip" : "") + (tU ? "Full" : ""),
            PU = ["function ", pU, "(", jU.join(), "){", "var ", EU, "=2*", gU, ";"],
            TU = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            qU = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (tU ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return UU ? PU.push(TU, "Q", ":", qU) : PU.push(qU, "Q", ":", TU), tU ? PU.push("if(y1<x0||x1<y0)continue;") : RU ? PU.push("if(y0<=x0||x1<y0)continue;") : PU.push("if(y0<x0||x1<y0)continue;"), PU.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), RU ? PU.push("yi,xi") : PU.push("xi,yi"), PU.push(");if(rv!==void 0)return rv;}}}"), {
            name: pU,
            code: PU.join("")
          }
        }(RU, pU, UU);
        tU.push(PU.code), TU.push("return " + PU.name + "(" + jU.join() + ");")
      }
      TU.push("if(re-rs>be-bs){"), UU ? (qU(!0, !1), TU.push("}else{"), qU(!1, !1)) : (TU.push("if(fp){"), qU(!0, !0), TU.push("}else{"), qU(!0, !1), TU.push("}}else{if(fp){"), qU(!1, !0), TU.push("}else{"), qU(!1, !1), TU.push("}")), TU.push("}}return " + RU);
      var KU = tU.join("") + TU.join("");
      return new Function(KU)()
    }
    RU.partial = uU(!1), RU.full = uU(!0)
  },
  37879: (UU, RU, gU) => {
    UU.exports = function(UU, RU, gU, EU, cU, oU, ZU, aU, YU) {
      ! function(UU, RU) {
        var gU = 8 * pU.log2(RU + 1) * (UU + 1) | 0,
          EU = pU.nextPow2(xU * gU);
        IU.length < EU && (tU.free(IU), IU = tU.mallocInt32(EU));
        var PU = pU.nextPow2(mU * gU);
        JU.length < PU && (tU.free(JU), JU = tU.mallocDouble(PU))
      }(UU, EU + ZU);
      var BU, VU = 0,
        rU = 2 * UU;
      wU(VU++, 0, 0, EU, 0, ZU, gU ? 16 : 0, -1 / 0, 1 / 0), gU || wU(VU++, 0, 0, ZU, 0, EU, 1, -1 / 0, 1 / 0);
      for (; VU > 0;) {
        var XU = (VU -= 1) * xU,
          vU = IU[XU],
          dU = IU[XU + 1],
          HU = IU[XU + 2],
          SU = IU[XU + 3],
          sU = IU[XU + 4],
          yU = IU[XU + 5],
          kU = VU * mU,
          FU = JU[kU],
          iU = JU[kU + 1],
          AU = 1 & yU,
          zU = !!(16 & yU),
          MU = cU,
          DU = oU,
          LU = aU,
          NU = YU;
        if (AU && (MU = aU, DU = YU, LU = cU, NU = oU), !(2 & yU && dU >= (HU = QU(UU, vU, dU, HU, MU, DU, iU))) && !(4 & yU && (dU = eU(UU, vU, dU, HU, MU, DU, FU)) >= HU)) {
          var lU = HU - dU,
            OU = sU - SU;
          if (zU) {
            if (UU * lU * (lU + OU) < uU) {
              if (void 0 !== (BU = qU.scanComplete(UU, vU, RU, dU, HU, MU, DU, SU, sU, LU, NU))) return BU;
              continue
            }
          } else {
            if (UU * Math.min(lU, OU) < GU) {
              if (void 0 !== (BU = PU(UU, vU, RU, AU, dU, HU, MU, DU, SU, sU, LU, NU))) return BU;
              continue
            }
            if (UU * lU * OU < jU) {
              if (void 0 !== (BU = qU.scanBipartite(UU, vU, RU, AU, dU, HU, MU, DU, SU, sU, LU, NU))) return BU;
              continue
            }
          }
          var UR = CU(UU, vU, dU, HU, MU, DU, FU, iU);
          if (dU < UR)
            if (UU * (UR - dU) < GU) {
              if (void 0 !== (BU = TU(UU, vU + 1, RU, dU, UR, MU, DU, SU, sU, LU, NU))) return BU
            } else if (vU === UU - 2) {
            if (void 0 !== (BU = AU ? qU.sweepBipartite(UU, RU, SU, sU, LU, NU, dU, UR, MU, DU) : qU.sweepBipartite(UU, RU, dU, UR, MU, DU, SU, sU, LU, NU))) return BU
          } else wU(VU++, vU + 1, dU, UR, SU, sU, AU, -1 / 0, 1 / 0), wU(VU++, vU + 1, SU, sU, dU, UR, 1 ^ AU, -1 / 0, 1 / 0);
          if (UR < HU) {
            var RR = KU(UU, vU, SU, sU, LU, NU),
              gR = LU[rU * RR + vU],
              tR = hU(UU, vU, RR, sU, LU, NU, gR);
            if (tR < sU && wU(VU++, vU, UR, HU, tR, sU, (4 | AU) + (zU ? 16 : 0), gR, iU), SU < RR && wU(VU++, vU, UR, HU, SU, RR, (2 | AU) + (zU ? 16 : 0), FU, gR), RR + 1 === tR) {
              if (void 0 !== (BU = zU ? bU(UU, vU, RU, UR, HU, MU, DU, RR, LU, NU[RR]) : nU(UU, vU, RU, AU, UR, HU, MU, DU, RR, LU, NU[RR]))) return BU
            } else if (RR < tR) {
              var pR;
              if (zU) {
                if (UR < (pR = WU(UU, vU, UR, HU, MU, DU, gR))) {
                  var ER = hU(UU, vU, UR, pR, MU, DU, gR);
                  if (vU === UU - 2) {
                    if (UR < ER && void 0 !== (BU = qU.sweepComplete(UU, RU, UR, ER, MU, DU, RR, tR, LU, NU))) return BU;
                    if (ER < pR && void 0 !== (BU = qU.sweepBipartite(UU, RU, ER, pR, MU, DU, RR, tR, LU, NU))) return BU
                  } else UR < ER && wU(VU++, vU + 1, UR, ER, RR, tR, 16, -1 / 0, 1 / 0), ER < pR && (wU(VU++, vU + 1, ER, pR, RR, tR, 0, -1 / 0, 1 / 0), wU(VU++, vU + 1, RR, tR, ER, pR, 1, -1 / 0, 1 / 0))
                }
              } else UR < (pR = AU ? fU(UU, vU, UR, HU, MU, DU, gR) : WU(UU, vU, UR, HU, MU, DU, gR)) && (vU === UU - 2 ? BU = AU ? qU.sweepBipartite(UU, RU, RR, tR, LU, NU, UR, pR, MU, DU) : qU.sweepBipartite(UU, RU, UR, pR, MU, DU, RR, tR, LU, NU) : (wU(VU++, vU + 1, UR, pR, RR, tR, AU, -1 / 0, 1 / 0), wU(VU++, vU + 1, RR, tR, UR, pR, 1 ^ AU, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var tU = gU(37841),
      pU = gU(37850),
      EU = gU(37884),
      PU = EU.partial,
      TU = EU.full,
      qU = gU(37867),
      KU = gU(37891),
      cU = gU(37893),
      GU = 128,
      jU = 1 << 22,
      uU = 1 << 22,
      CU = cU("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      hU = cU("lo===p0", ["p0"]),
      QU = cU("lo<p0", ["p0"]),
      eU = cU("hi<=p0", ["p0"]),
      WU = cU("lo<=p0&&p0<=hi", ["p0"]),
      fU = cU("lo<p0&&p0<=hi", ["p0"]),
      xU = 6,
      mU = 2,
      IU = tU.mallocInt32(1024),
      JU = tU.mallocDouble(1024);

    function wU(UU, RU, gU, tU, pU, EU, PU, TU, qU) {
      var KU = xU * UU;
      IU[KU] = RU, IU[KU + 1] = gU, IU[KU + 2] = tU, IU[KU + 3] = pU, IU[KU + 4] = EU, IU[KU + 5] = PU;
      var cU = mU * UU;
      JU[cU] = TU, JU[cU + 1] = qU
    }

    function nU(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU, cU) {
      var GU = 2 * UU,
        jU = qU * GU,
        uU = KU[jU + RU];
      UU: for (var CU = pU, hU = pU * GU; CU < EU; ++CU, hU += GU) {
        var QU = PU[hU + RU],
          eU = PU[hU + RU + UU];
        if (!(uU < QU || eU < uU) && (!tU || uU !== QU)) {
          for (var WU, fU = TU[CU], xU = RU + 1; xU < UU; ++xU) {
            QU = PU[hU + xU], eU = PU[hU + xU + UU];
            var mU = KU[jU + xU],
              IU = KU[jU + xU + UU];
            if (eU < mU || IU < QU) continue UU
          }
          if (void 0 !== (WU = tU ? gU(cU, fU) : gU(fU, cU))) return WU
        }
      }
    }

    function bU(UU, RU, gU, tU, pU, EU, PU, TU, qU, KU) {
      var cU = 2 * UU,
        GU = TU * cU,
        jU = qU[GU + RU];
      UU: for (var uU = tU, CU = tU * cU; uU < pU; ++uU, CU += cU) {
        var hU = PU[uU];
        if (hU !== KU) {
          var QU = EU[CU + RU],
            eU = EU[CU + RU + UU];
          if (!(jU < QU || eU < jU)) {
            for (var WU = RU + 1; WU < UU; ++WU) {
              QU = EU[CU + WU], eU = EU[CU + WU + UU];
              var fU = qU[GU + WU],
                xU = qU[GU + WU + UU];
              if (eU < fU || xU < QU) continue UU
            }
            var mU = gU(hU, KU);
            if (void 0 !== mU) return mU
          }
        }
      }
    }
  },
  37891: (UU, RU, gU) => {
    UU.exports = function(UU, RU, gU, PU, TU, qU) {
      if (PU <= gU + 1) return gU;
      var KU = gU,
        cU = PU,
        GU = PU + gU >>> 1,
        jU = 2 * UU,
        uU = GU,
        CU = TU[jU * GU + RU];
      for (; KU < cU;) {
        if (cU - KU < pU) {
          EU(UU, RU, KU, cU, TU, qU), CU = TU[jU * GU + RU];
          break
        }
        var hU = cU - KU,
          QU = Math.random() * hU + KU | 0,
          eU = TU[jU * QU + RU],
          WU = Math.random() * hU + KU | 0,
          fU = TU[jU * WU + RU],
          xU = Math.random() * hU + KU | 0,
          mU = TU[jU * xU + RU];
        eU <= fU ? mU >= fU ? (uU = WU, CU = fU) : eU >= mU ? (uU = QU, CU = eU) : (uU = xU, CU = mU) : fU >= mU ? (uU = WU, CU = fU) : mU >= eU ? (uU = QU, CU = eU) : (uU = xU, CU = mU);
        for (var IU = jU * (cU - 1), JU = jU * uU, wU = 0; wU < jU; ++wU, ++IU, ++JU) {
          var nU = TU[IU];
          TU[IU] = TU[JU], TU[JU] = nU
        }
        var bU = qU[cU - 1];
        qU[cU - 1] = qU[uU], qU[uU] = bU;
        for (IU = jU * (cU - 1), JU = jU * (uU = tU(UU, RU, KU, cU - 1, TU, qU, CU)), wU = 0; wU < jU; ++wU, ++IU, ++JU) {
          nU = TU[IU];
          TU[IU] = TU[JU], TU[JU] = nU
        }
        bU = qU[cU - 1];
        if (qU[cU - 1] = qU[uU], qU[uU] = bU, GU < uU) {
          for (cU = uU - 1; KU < cU && TU[jU * (cU - 1) + RU] === CU;) cU -= 1;
          cU += 1
        } else {
          if (!(uU < GU)) break;
          for (KU = uU + 1; KU < cU && TU[jU * KU + RU] === CU;) KU += 1
        }
      }
      return tU(UU, RU, gU, GU, TU, qU, TU[jU * GU + RU])
    };
    var tU = gU(37893)("lo<p0", ["p0"]),
      pU = 8;

    function EU(UU, RU, gU, tU, pU, EU) {
      for (var PU = 2 * UU, TU = PU * (gU + 1) + RU, qU = gU + 1; qU < tU; ++qU, TU += PU)
        for (var KU = pU[TU], cU = qU, GU = PU * (qU - 1); cU > gU && pU[GU + RU] > KU; --cU, GU -= PU) {
          for (var jU = GU, uU = GU + PU, CU = 0; CU < PU; ++CU, ++jU, ++uU) {
            var hU = pU[jU];
            pU[jU] = pU[uU], pU[uU] = hU
          }
          var QU = EU[cU];
          EU[cU] = EU[cU - 1], EU[cU - 1] = QU
        }
    }
  },
  37893: UU => {
    UU.exports = function(UU, gU) {
      var tU = "abcdef".split("").concat(gU),
        pU = [];
      UU.indexOf("lo") >= 0 && pU.push("lo=e[k+n]");
      UU.indexOf("hi") >= 0 && pU.push("hi=e[k+o]");
      return tU.push(RU.replace("_", pU.join()).replace("$", UU)), Function.apply(void 0, tU)
    };
    var RU = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  37872: UU => {
    UU.exports = function(UU, tU) {
      tU <= 4 * RU ? gU(0, tU - 1, UU) : KU(0, tU - 1, UU)
    };
    var RU = 32;

    function gU(UU, RU, gU) {
      for (var tU = 2 * (UU + 1), pU = UU + 1; pU <= RU; ++pU) {
        for (var EU = gU[tU++], PU = gU[tU++], TU = pU, qU = tU - 2; TU-- > UU;) {
          var KU = gU[qU - 2],
            cU = gU[qU - 1];
          if (KU < EU) break;
          if (KU === EU && cU < PU) break;
          gU[qU] = KU, gU[qU + 1] = cU, qU -= 2
        }
        gU[qU] = EU, gU[qU + 1] = PU
      }
    }

    function tU(UU, RU, gU) {
      RU *= 2;
      var tU = gU[UU *= 2],
        pU = gU[UU + 1];
      gU[UU] = gU[RU], gU[UU + 1] = gU[RU + 1], gU[RU] = tU, gU[RU + 1] = pU
    }

    function pU(UU, RU, gU) {
      RU *= 2, gU[UU *= 2] = gU[RU], gU[UU + 1] = gU[RU + 1]
    }

    function EU(UU, RU, gU, tU) {
      RU *= 2, gU *= 2;
      var pU = tU[UU *= 2],
        EU = tU[UU + 1];
      tU[UU] = tU[RU], tU[UU + 1] = tU[RU + 1], tU[RU] = tU[gU], tU[RU + 1] = tU[gU + 1], tU[gU] = pU, tU[gU + 1] = EU
    }

    function PU(UU, RU, gU, tU, pU) {
      RU *= 2, pU[UU *= 2] = pU[RU], pU[RU] = gU, pU[UU + 1] = pU[RU + 1], pU[RU + 1] = tU
    }

    function TU(UU, RU, gU) {
      RU *= 2;
      var tU = gU[UU *= 2],
        pU = gU[RU];
      return !(tU < pU) && (tU !== pU || gU[UU + 1] > gU[RU + 1])
    }

    function qU(UU, RU, gU, tU) {
      var pU = tU[UU *= 2];
      return pU < RU || pU === RU && tU[UU + 1] < gU
    }

    function KU(UU, cU, GU) {
      var jU = (cU - UU + 1) / 6 | 0,
        uU = UU + jU,
        CU = cU - jU,
        hU = UU + cU >> 1,
        QU = hU - jU,
        eU = hU + jU,
        WU = uU,
        fU = QU,
        xU = hU,
        mU = eU,
        IU = CU,
        JU = UU + 1,
        wU = cU - 1,
        nU = 0;
      TU(WU, fU, GU) && (nU = WU, WU = fU, fU = nU), TU(mU, IU, GU) && (nU = mU, mU = IU, IU = nU), TU(WU, xU, GU) && (nU = WU, WU = xU, xU = nU), TU(fU, xU, GU) && (nU = fU, fU = xU, xU = nU), TU(WU, mU, GU) && (nU = WU, WU = mU, mU = nU), TU(xU, mU, GU) && (nU = xU, xU = mU, mU = nU), TU(fU, IU, GU) && (nU = fU, fU = IU, IU = nU), TU(fU, xU, GU) && (nU = fU, fU = xU, xU = nU), TU(mU, IU, GU) && (nU = mU, mU = IU, IU = nU);
      for (var bU = GU[2 * fU], oU = GU[2 * fU + 1], ZU = GU[2 * mU], aU = GU[2 * mU + 1], YU = 2 * WU, BU = 2 * xU, VU = 2 * IU, rU = 2 * uU, XU = 2 * hU, vU = 2 * CU, dU = 0; dU < 2; ++dU) {
        var HU = GU[YU + dU],
          SU = GU[BU + dU],
          sU = GU[VU + dU];
        GU[rU + dU] = HU, GU[XU + dU] = SU, GU[vU + dU] = sU
      }
      pU(QU, UU, GU), pU(eU, cU, GU);
      for (var yU = JU; yU <= wU; ++yU)
        if (qU(yU, bU, oU, GU)) yU !== JU && tU(yU, JU, GU), ++JU;
        else if (!qU(yU, ZU, aU, GU))
        for (;;) {
          if (qU(wU, ZU, aU, GU)) {
            qU(wU, bU, oU, GU) ? (EU(yU, JU, wU, GU), ++JU, --wU) : (tU(yU, wU, GU), --wU);
            break
          }
          if (--wU < yU) break
        }
      PU(UU, JU - 1, bU, oU, GU), PU(cU, wU + 1, ZU, aU, GU), JU - 2 - UU <= RU ? gU(UU, JU - 2, GU) : KU(UU, JU - 2, GU), cU - (wU + 2) <= RU ? gU(wU + 2, cU, GU) : KU(wU + 2, cU, GU), wU - JU <= RU ? gU(JU, wU, GU) : KU(JU, wU, GU)
    }
  },
  37867: (UU, RU, gU) => {
    UU.exports = {
      init: function(UU) {
        var RU = pU.nextPow2(UU);
        qU.length < RU && (tU.free(qU), qU = tU.mallocInt32(RU));
        KU.length < RU && (tU.free(KU), KU = tU.mallocInt32(RU));
        cU.length < RU && (tU.free(cU), cU = tU.mallocInt32(RU));
        GU.length < RU && (tU.free(GU), GU = tU.mallocInt32(RU));
        jU.length < RU && (tU.free(jU), jU = tU.mallocInt32(RU));
        uU.length < RU && (tU.free(uU), uU = tU.mallocInt32(RU));
        var gU = 8 * RU;
        CU.length < gU && (tU.free(CU), CU = tU.mallocDouble(gU))
      },
      sweepBipartite: function(UU, RU, gU, tU, pU, TU, jU, uU, eU, WU) {
        for (var fU = 0, xU = 2 * UU, mU = UU - 1, IU = xU - 1, JU = gU; JU < tU; ++JU) {
          var wU = TU[JU],
            nU = xU * JU;
          CU[fU++] = pU[nU + mU], CU[fU++] = -(wU + 1), CU[fU++] = pU[nU + IU], CU[fU++] = wU
        }
        for (JU = jU; JU < uU; ++JU) {
          wU = WU[JU] + PU;
          var bU = xU * JU;
          CU[fU++] = eU[bU + mU], CU[fU++] = -wU, CU[fU++] = eU[bU + IU], CU[fU++] = wU
        }
        var oU = fU >>> 1;
        EU(CU, oU);
        var ZU = 0,
          aU = 0;
        for (JU = 0; JU < oU; ++JU) {
          var YU = 0 | CU[2 * JU + 1];
          if (YU >= PU) hU(cU, GU, aU--, YU = YU - PU | 0);
          else if (YU >= 0) hU(qU, KU, ZU--, YU);
          else if (YU <= -PU) {
            YU = -YU - PU | 0;
            for (var BU = 0; BU < ZU; ++BU) {
              if (void 0 !== (VU = RU(qU[BU], YU))) return VU
            }
            QU(cU, GU, aU++, YU)
          } else {
            YU = -YU - 1 | 0;
            for (BU = 0; BU < aU; ++BU) {
              var VU;
              if (void 0 !== (VU = RU(YU, cU[BU]))) return VU
            }
            QU(qU, KU, ZU++, YU)
          }
        }
      },
      sweepComplete: function(UU, RU, gU, tU, pU, PU, TU, eU, WU, fU) {
        for (var xU = 0, mU = 2 * UU, IU = UU - 1, JU = mU - 1, wU = gU; wU < tU; ++wU) {
          var nU = PU[wU] + 1 << 1,
            bU = mU * wU;
          CU[xU++] = pU[bU + IU], CU[xU++] = -nU, CU[xU++] = pU[bU + JU], CU[xU++] = nU
        }
        for (wU = TU; wU < eU; ++wU) {
          nU = fU[wU] + 1 << 1;
          var oU = mU * wU;
          CU[xU++] = WU[oU + IU], CU[xU++] = 1 | -nU, CU[xU++] = WU[oU + JU], CU[xU++] = 1 | nU
        }
        var ZU = xU >>> 1;
        EU(CU, ZU);
        var aU = 0,
          YU = 0,
          BU = 0;
        for (wU = 0; wU < ZU; ++wU) {
          var VU = 0 | CU[2 * wU + 1],
            rU = 1 & VU;
          if (wU < ZU - 1 && VU >> 1 === CU[2 * wU + 3] >> 1 && (rU = 2, wU += 1), VU < 0) {
            for (var XU = -(VU >> 1) - 1, vU = 0; vU < BU; ++vU) {
              if (void 0 !== (dU = RU(jU[vU], XU))) return dU
            }
            if (0 !== rU)
              for (vU = 0; vU < aU; ++vU) {
                if (void 0 !== (dU = RU(qU[vU], XU))) return dU
              }
            if (1 !== rU)
              for (vU = 0; vU < YU; ++vU) {
                var dU;
                if (void 0 !== (dU = RU(cU[vU], XU))) return dU
              }
            0 === rU ? QU(qU, KU, aU++, XU) : 1 === rU ? QU(cU, GU, YU++, XU) : 2 === rU && QU(jU, uU, BU++, XU)
          } else {
            XU = (VU >> 1) - 1;
            0 === rU ? hU(qU, KU, aU--, XU) : 1 === rU ? hU(cU, GU, YU--, XU) : 2 === rU && hU(jU, uU, BU--, XU)
          }
        }
      },
      scanBipartite: function(UU, RU, gU, tU, pU, TU, cU, GU, jU, uU, eU, WU) {
        var fU = 0,
          xU = 2 * UU,
          mU = RU,
          IU = RU + UU,
          JU = 1,
          wU = 1;
        tU ? wU = PU : JU = PU;
        for (var nU = pU; nU < TU; ++nU) {
          var bU = nU + JU,
            oU = xU * nU;
          CU[fU++] = cU[oU + mU], CU[fU++] = -bU, CU[fU++] = cU[oU + IU], CU[fU++] = bU
        }
        for (nU = jU; nU < uU; ++nU) {
          bU = nU + wU;
          var ZU = xU * nU;
          CU[fU++] = eU[ZU + mU], CU[fU++] = -bU
        }
        var aU = fU >>> 1;
        EU(CU, aU);
        var YU = 0;
        for (nU = 0; nU < aU; ++nU) {
          var BU = 0 | CU[2 * nU + 1];
          if (BU < 0) {
            var VU = !1;
            if ((bU = -BU) >= PU ? (VU = !tU, bU -= PU) : (VU = !!tU, bU -= 1), VU) QU(qU, KU, YU++, bU);
            else {
              var rU = WU[bU],
                XU = xU * bU,
                vU = eU[XU + RU + 1],
                dU = eU[XU + RU + 1 + UU];
              UU: for (var HU = 0; HU < YU; ++HU) {
                var SU = qU[HU],
                  sU = xU * SU;
                if (!(dU < cU[sU + RU + 1] || cU[sU + RU + 1 + UU] < vU)) {
                  for (var yU = RU + 2; yU < UU; ++yU)
                    if (eU[XU + yU + UU] < cU[sU + yU] || cU[sU + yU + UU] < eU[XU + yU]) continue UU;
                  var kU, FU = GU[SU];
                  if (void 0 !== (kU = tU ? gU(rU, FU) : gU(FU, rU))) return kU
                }
              }
            }
          } else hU(qU, KU, YU--, BU - JU)
        }
      },
      scanComplete: function(UU, RU, gU, tU, pU, TU, KU, cU, GU, jU, uU) {
        for (var hU = 0, QU = 2 * UU, eU = RU, WU = RU + UU, fU = tU; fU < pU; ++fU) {
          var xU = fU + PU,
            mU = QU * fU;
          CU[hU++] = TU[mU + eU], CU[hU++] = -xU, CU[hU++] = TU[mU + WU], CU[hU++] = xU
        }
        for (fU = cU; fU < GU; ++fU) {
          xU = fU + 1;
          var IU = QU * fU;
          CU[hU++] = jU[IU + eU], CU[hU++] = -xU
        }
        var JU = hU >>> 1;
        EU(CU, JU);
        var wU = 0;
        for (fU = 0; fU < JU; ++fU) {
          var nU = 0 | CU[2 * fU + 1];
          if (nU < 0) {
            if ((xU = -nU) >= PU) qU[wU++] = xU - PU;
            else {
              var bU = uU[xU -= 1],
                oU = QU * xU,
                ZU = jU[oU + RU + 1],
                aU = jU[oU + RU + 1 + UU];
              UU: for (var YU = 0; YU < wU; ++YU) {
                var BU = qU[YU],
                  VU = KU[BU];
                if (VU === bU) break;
                var rU = QU * BU;
                if (!(aU < TU[rU + RU + 1] || TU[rU + RU + 1 + UU] < ZU)) {
                  for (var XU = RU + 2; XU < UU; ++XU)
                    if (jU[oU + XU + UU] < TU[rU + XU] || TU[rU + XU + UU] < jU[oU + XU]) continue UU;
                  var vU = gU(VU, bU);
                  if (void 0 !== vU) return vU
                }
              }
            }
          } else {
            for (xU = nU - PU, YU = wU - 1; YU >= 0; --YU)
              if (qU[YU] === xU) {
                for (XU = YU + 1; XU < wU; ++XU) qU[XU - 1] = qU[XU];
                break
              }-- wU
          }
        }
      }
    };
    var tU = gU(37841),
      pU = gU(37850),
      EU = gU(37872),
      PU = 1 << 28,
      TU = 1024,
      qU = tU.mallocInt32(TU),
      KU = tU.mallocInt32(TU),
      cU = tU.mallocInt32(TU),
      GU = tU.mallocInt32(TU),
      jU = tU.mallocInt32(TU),
      uU = tU.mallocInt32(TU),
      CU = tU.mallocDouble(8192);

    function hU(UU, RU, gU, tU) {
      var pU = RU[tU],
        EU = UU[gU - 1];
      UU[pU] = EU, RU[EU] = pU
    }

    function QU(UU, RU, gU, tU) {
      UU[gU] = tU, RU[tU] = gU
    }
  },
  37858: UU => {
    function RU(UU, gU, tU) {
      var pU = 0 | UU[tU];
      if (pU <= 0) return [];
      var EU, PU = new Array(pU);
      if (tU === UU.length - 1)
        for (EU = 0; EU < pU; ++EU) PU[EU] = gU;
      else
        for (EU = 0; EU < pU; ++EU) PU[EU] = RU(UU, gU, tU + 1);
      return PU
    }
    UU.exports = function(UU, gU) {
      switch ("undefined" === typeof gU && (gU = 0), typeof UU) {
        case "number":
          if (UU > 0) return function(UU, RU) {
            var gU, tU;
            for (gU = new Array(UU), tU = 0; tU < UU; ++tU) gU[tU] = RU;
            return gU
          }(0 | UU, gU);
          break;
        case "object":
          if ("number" === typeof UU.length) return RU(UU, gU, 0)
      }
      return []
    }
  },
  37800: (UU, RU, gU) => {
    UU.exports = function() {
      var UU = this;
      this.components = {}, this.comps = this.components;
      var RU = this.components,
        gU = 1,
        pU = {},
        EU = [],
        PU = [],
        TU = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function qU(UU, gU) {
        var tU = RU[gU],
          EU = pU[gU],
          PU = EU.hash[UU];
        PU && (EU.remove(UU), tU.Kw && (tU.multi ? (PU.forEach((RU => {
          RU && tU.Kw(UU, RU)
        })), PU.length = 0) : tU.Kw(UU, PU)), TU.removals.push(EU), KU())
      }

      function KU() {
        TU.timeout || (TU.timeout = !0, setTimeout(cU, 1))
      }

      function cU() {
        TU.timeout = !1, GU()
      }

      function GU() {
        TU.multiComps.length && function(UU) {
          for (var RU = 0; RU < UU.length; RU++) {
            var {
              entID: gU,
              data: tU
            } = UU[RU], pU = tU.hash[gU];
            if (pU) {
              for (var EU = 0; EU < pU.length; EU++) pU[EU] || (pU.splice(EU, 1), EU--);
              0 === pU.length && (tU.remove(gU), TU.removals.push(tU))
            }
          }
          UU.length = 0
        }(TU.multiComps), TU.removals.length && function(UU) {
          for (var RU = 0; RU < UU.length; RU++) {
            UU[RU].flush()
          }
          UU.length = 0
        }(TU.removals)
      }
      this.ph = pU, this._systems = EU, this._renderSystems = PU, this.Vk = function(RU) {
        var tU = gU++;
        return Array.isArray(RU) && RU.forEach((RU => UU.JY(tU, RU))), tU
      }, this.deleteEntity = function(RU) {
        return Object.keys(pU).forEach((UU => {
          pU[UU].hash[RU] && qU(RU, UU)
        })), UU
      }, this.uRU = function(UU) {
        if (!UU) throw new Error("Missing component definition");
        var gU = UU.name;
        if (!gU) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof gU) throw new Error("Component name must be a string.");
        if ("" === gU) throw new Error("Component name must be a non-empty string.");
        if (pU[gU]) throw new Error(`Component ${gU} already exists.`);
        var TU = {};
        return TU.name = gU, TU.multi = !!UU.multi, TU.order = isNaN(UU.order) ? 99 : UU.order, TU.stateConstructor = UU.stateConstructor || null, TU.state = UU.state || {}, TU.Wm = UU.Wm || null, TU.Kw = UU.Kw || null, TU.system = UU.system || null, TU.Jm = UU.Jm || null, RU[gU] = TU, pU[gU] = new tU, pU[gU]._pendingMultiCleanup = !1, pU[gU]._multiCleanupIDs = TU.multi ? [] : null, TU.system && (EU.push(gU), EU.sort(((UU, gU) => RU[UU].order - RU[gU].order))), TU.Jm && (PU.push(gU), PU.sort(((UU, gU) => RU[UU].order - RU[gU].order))), gU
      }, this.overwriteComponent = function(UU, gU) {
        var tU = RU[UU];
        if (!tU) throw new Error(`Unknown component: ${UU}`);
        if (!gU) throw new Error("Missing component definition");
        if (tU.name !== gU.name) throw new Error("Overwriting component must use the same name property.");
        var TU = {};
        TU.name = UU, TU.multi = !!gU.multi, TU.order = isNaN(gU.order) ? 99 : gU.order, TU.state = gU.state || {}, TU.Wm = gU.Wm || null, TU.Kw = gU.Kw || null, TU.system = gU.system || null, TU.Jm = gU.Jm || null, RU[UU] = TU, pU[UU]._pendingMultiCleanup = !1, pU[UU]._multiCleanupIDs = TU.multi ? [] : null;
        var qU = EU.indexOf(UU);
        TU.system && qU < 0 && EU.push(UU), !TU.system && qU >= 0 && EU.splice(qU, 1), EU.sort(((UU, gU) => RU[UU].order - RU[gU].order));
        var KU = PU.indexOf(UU);
        TU.Jm && KU < 0 && PU.push(UU), !TU.Jm && KU >= 0 && PU.splice(KU, 1), PU.sort(((UU, gU) => RU[UU].order - RU[gU].order));
        var cU = TU.state;
        return this.hY(UU).forEach((UU => {
          for (var RU in cU) RU in UU || (UU[RU] = cU[RU]);
          TU.Wm && TU.Wm(UU.fY, UU)
        })), UU
      }, this.deleteComponent = function(gU) {
        var tU = pU[gU];
        if (!tU) throw new Error(`Unknown component: ${gU}`);
        tU.flush(), tU.list.forEach((UU => {
          UU && qU(UU.fY || UU[0].fY, gU)
        }));
        var TU = EU.indexOf(gU),
          KU = PU.indexOf(gU);
        return TU > -1 && EU.splice(TU, 1), KU > -1 && PU.splice(KU, 1), pU[gU].dispose(), delete pU[gU], delete RU[gU], UU
      }, this.JY = function(UU, gU, tU) {
        var EU, PU = RU[gU],
          TU = pU[gU];
        if (!TU) throw new Error(`Unknown component: ${gU}.`);
        if (TU.hash[UU] && !PU.multi) throw new Error(`Entity ${UU} already has component: ${gU}.`);
        if (PU.stateConstructor) {
          if (!(EU = new PU.stateConstructor).hasOwnProperty("fY")) throw new Error(`Component ${PU.name} stateConstructor type does not have property __id`);
          Object.assign(EU, PU.state, tU)
        } else EU = {
          fY: UU,
          ...PU.state,
          ...tU
        };
        if (EU.fY = UU, PU.multi) {
          var qU = TU.hash[UU];
          qU || (qU = [], TU.add(UU, qU)), qU.push(EU)
        } else TU.add(UU, EU);
        return PU.Wm && PU.Wm(UU, EU), this
      }, this.cUU = function(UU, RU) {
        var gU = pU[RU];
        if (!gU) throw new Error(`Unknown component: ${RU}.`);
        return !!gU.hash[UU]
      }, this.bY = function(RU, gU) {
        if (!pU[gU]) throw new Error(`Unknown component: ${gU}.`);
        return qU(RU, gU), UU
      }, this.getState = function(UU, RU) {
        var gU = pU[RU];
        if (!gU) throw new Error(`Unknown component: ${RU}.`);
        return gU.hash[UU]
      }, this.hY = function(UU) {
        var RU = pU[UU];
        if (!RU) throw new Error(`Unknown component: ${UU}.`);
        return GU(), RU.list
      }, this.zUU = function(UU) {
        if (!pU[UU]) throw new Error(`Unknown component: ${UU}.`);
        var RU = pU[UU].hash;
        return UU => RU[UU]
      }, this.OUU = function(UU) {
        if (!pU[UU]) throw new Error(`Unknown component: ${UU}.`);
        var RU = pU[UU].hash;
        return UU => !!RU[UU]
      }, this.HG = function(gU) {
        GU();
        for (var tU = 0; tU < EU.length; tU++) {
          var PU = EU[tU],
            TU = RU[PU],
            qU = pU[PU];
          TU.system(gU, qU.list), GU()
        }
        return UU
      }, this.render = function(gU) {
        GU();
        for (var tU = 0; tU < PU.length; tU++) {
          var EU = PU[tU],
            TU = RU[EU],
            qU = pU[EU];
          TU.Jm(gU, qU.list), GU()
        }
        return UU
      }, this.removeMultiComponent = function(gU, tU, EU) {
        var PU = RU[tU],
          qU = pU[tU];
        if (!qU) throw new Error(`Unknown component: ${tU}.`);
        if (!PU.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(UU, RU, gU, tU) {
          var pU = gU.hash[UU];
          if (pU) {
            var EU = pU[tU];
            EU && (pU[tU] = null, RU.Kw && RU.Kw(UU, EU), TU.multiComps.push({
              entID: UU,
              data: gU
            }), KU())
          }
        }(gU, PU, qU, EU), UU
      }
    };
    var tU = gU(37802)
  },
  37802: UU => {
    function RU(UU, RU) {
      var gU = UU._map[RU];
      if (delete UU.hash[RU], delete UU._map[RU], gU === UU.list.length - 1) UU.list.pop(), UU._idList.pop();
      else {
        var tU = UU.list.pop();
        UU.list[gU] = tU;
        var pU = UU._idList.pop();
        UU._idList[gU] = pU, UU._map[pU] = gU
      }
    }
    UU.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(UU, RU) {
        if ("number" === typeof this._map[UU]) {
          var gU = this._map[UU];
          this.hash[UU] = RU, this.list[gU] = RU, this._idList[gU] = UU
        } else this._map[UU] = this.list.length, this.hash[UU] = RU, this.list.push(RU), this._idList.push(UU)
      }
      remove(UU) {
        var RU = this._map[UU];
        this.hash[UU] = null, this.list[RU] = null, this._pendingRemovals.push(UU)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var UU = 0; UU < this._pendingRemovals.length; UU++) {
          var gU = this._pendingRemovals[UU];
          null === this.hash[gU] && RU(this, gU)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  37244: UU => {
    UU.exports = function(UU) {
      for (var RU = new Array(UU), gU = 0; gU < UU; ++gU) RU[gU] = gU;
      return RU
    }
  },
  37253: UU => {
    function RU(UU) {
      return !!UU.constructor && "function" === typeof UU.constructor.isBuffer && UU.constructor.isBuffer(UU)
    }
    UU.exports = function(UU) {
      return null != UU && (RU(UU) || function(UU) {
        return "function" === typeof UU.readFloatLE && "function" === typeof UU.slice && RU(UU.slice(0, 0))
      }(UU) || !!UU._isBuffer)
    }
  },
  37586: (UU, RU, gU) => {
    UU = gU.nmd(UU);
    var tU = "__lodash_hash_undefined__",
      pU = 9007199254740991,
      EU = "[object Arguments]",
      PU = "[object Boolean]",
      TU = "[object Date]",
      qU = "[object Function]",
      KU = "[object GeneratorFunction]",
      cU = "[object Map]",
      GU = "[object Number]",
      jU = "[object Object]",
      uU = "[object Promise]",
      CU = "[object RegExp]",
      hU = "[object Set]",
      QU = "[object String]",
      eU = "[object Symbol]",
      WU = "[object WeakMap]",
      fU = "[object ArrayBuffer]",
      xU = "[object DataView]",
      mU = "[object Float32Array]",
      IU = "[object Float64Array]",
      JU = "[object Int8Array]",
      wU = "[object Int16Array]",
      nU = "[object Int32Array]",
      bU = "[object Uint8Array]",
      oU = "[object Uint8ClampedArray]",
      ZU = "[object Uint16Array]",
      aU = "[object Uint32Array]",
      YU = /\w*$/,
      BU = /^\[object .+?Constructor\]$/,
      VU = /^(?:0|[1-9]\d*)$/,
      rU = {};
    rU[EU] = rU["[object Array]"] = rU[fU] = rU[xU] = rU[PU] = rU[TU] = rU[mU] = rU[IU] = rU[JU] = rU[wU] = rU[nU] = rU[cU] = rU[GU] = rU[jU] = rU[CU] = rU[hU] = rU[QU] = rU[eU] = rU[bU] = rU[oU] = rU[ZU] = rU[aU] = !0, rU["[object Error]"] = rU[qU] = rU[WU] = !1;
    var XU = "object" == typeof gU.g && gU.g && gU.g.Object === Object && gU.g,
      vU = "object" == typeof self && self && self.Object === Object && self,
      dU = XU || vU || Function("return this")(),
      HU = RU && !RU.nodeType && RU,
      SU = HU && UU && !UU.nodeType && UU,
      sU = SU && SU.exports === HU;

    function yU(UU, RU) {
      return UU.set(RU[0], RU[1]), UU
    }

    function kU(UU, RU) {
      return UU.add(RU), UU
    }

    function FU(UU, RU, gU, tU) {
      var pU = -1,
        EU = UU ? UU.length : 0;
      for (tU && EU && (gU = UU[++pU]); ++pU < EU;) gU = RU(gU, UU[pU], pU, UU);
      return gU
    }

    function iU(UU) {
      var RU = !1;
      if (null != UU && "function" != typeof UU.toString) try {
        RU = !!(UU + "")
      } catch (gU) {}
      return RU
    }

    function AU(UU) {
      var RU = -1,
        gU = Array(UU.size);
      return UU.forEach((function(UU, tU) {
        gU[++RU] = [tU, UU]
      })), gU
    }

    function zU(UU, RU) {
      return function(gU) {
        return UU(RU(gU))
      }
    }

    function MU(UU) {
      var RU = -1,
        gU = Array(UU.size);
      return UU.forEach((function(UU) {
        gU[++RU] = UU
      })), gU
    }
    var DU = Array.prototype,
      LU = Function.prototype,
      NU = Object.prototype,
      lU = dU["__core-js_shared__"],
      OU = function() {
        var UU = /[^.]+$/.exec(lU && lU.keys && lU.keys.IE_PROTO || "");
        return UU ? "Symbol(src)_1." + UU : ""
      }(),
      UR = LU.toString,
      RR = NU.hasOwnProperty,
      gR = NU.toString,
      tR = RegExp("^" + UR.call(RR).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      pR = sU ? dU.tC : void 0,
      ER = dU.Symbol,
      PR = dU.Uint8Array,
      TR = zU(Object.getPrototypeOf, Object),
      qR = Object.create,
      KR = NU.propertyIsEnumerable,
      cR = DU.splice,
      GR = Object.getOwnPropertySymbols,
      jR = pR ? pR.isBuffer : void 0,
      uR = zU(Object.keys, Object),
      CR = sR(dU, "DataView"),
      hR = sR(dU, "Map"),
      QR = sR(dU, "Promise"),
      eR = sR(dU, "Set"),
      WR = sR(dU, "WeakMap"),
      fR = sR(Object, "create"),
      xR = AR(CR),
      mR = AR(hR),
      IR = AR(QR),
      JR = AR(eR),
      wR = AR(WR),
      nR = ER ? ER.prototype : void 0,
      bR = nR ? nR.valueOf : void 0;

    function oR(UU) {
      var RU = -1,
        gU = UU ? UU.length : 0;
      for (this.clear(); ++RU < gU;) {
        var tU = UU[RU];
        this.set(tU[0], tU[1])
      }
    }

    function ZR(UU) {
      var RU = -1,
        gU = UU ? UU.length : 0;
      for (this.clear(); ++RU < gU;) {
        var tU = UU[RU];
        this.set(tU[0], tU[1])
      }
    }

    function aR(UU) {
      var RU = -1,
        gU = UU ? UU.length : 0;
      for (this.clear(); ++RU < gU;) {
        var tU = UU[RU];
        this.set(tU[0], tU[1])
      }
    }

    function YR(UU) {
      this.__data__ = new ZR(UU)
    }

    function BR(UU, RU) {
      var gU = MR(UU) || function(UU) {
          return function(UU) {
            return function(UU) {
              return !!UU && "object" == typeof UU
            }(UU) && DR(UU)
          }(UU) && RR.call(UU, "callee") && (!KR.call(UU, "callee") || gR.call(UU) == EU)
        }(UU) ? function(UU, RU) {
          for (var gU = -1, tU = Array(UU); ++gU < UU;) tU[gU] = RU(gU);
          return tU
        }(UU.length, String) : [],
        tU = gU.length,
        pU = !!tU;
      for (var PU in UU) !RU && !RR.call(UU, PU) || pU && ("length" == PU || FR(PU, tU)) || gU.push(PU);
      return gU
    }

    function VR(UU, RU, gU) {
      var tU = UU[RU];
      RR.call(UU, RU) && zR(tU, gU) && (void 0 !== gU || RU in UU) || (UU[RU] = gU)
    }

    function rR(UU, RU) {
      for (var gU = UU.length; gU--;)
        if (zR(UU[gU][0], RU)) return gU;
      return -1
    }

    function XR(UU, RU, gU, tU, pU, uU, WU) {
      var BU;
      if (tU && (BU = uU ? tU(UU, pU, uU, WU) : tU(UU)), void 0 !== BU) return BU;
      if (!lR(UU)) return UU;
      var VU = MR(UU);
      if (VU) {
        if (BU = function(UU) {
            var RU = UU.length,
              gU = UU.constructor(RU);
            RU && "string" == typeof UU[0] && RR.call(UU, "index") && (gU.index = UU.index, gU.input = UU.input);
            return gU
          }(UU), !RU) return function(UU, RU) {
          var gU = -1,
            tU = UU.length;
          RU || (RU = Array(tU));
          for (; ++gU < tU;) RU[gU] = UU[gU];
          return RU
        }(UU, BU)
      } else {
        var XU = kR(UU),
          vU = XU == qU || XU == KU;
        if (LR(UU)) return function(UU, RU) {
          if (RU) return UU.slice();
          var gU = new UU.constructor(UU.length);
          return UU.copy(gU), gU
        }(UU, RU);
        if (XU == jU || XU == EU || vU && !uU) {
          if (iU(UU)) return uU ? UU : {};
          if (BU = function(UU) {
              return "function" != typeof UU.constructor || iR(UU) ? {} : (RU = TR(UU), lR(RU) ? qR(RU) : {});
              var RU
            }(vU ? {} : UU), !RU) return function(UU, RU) {
            return HR(UU, yR(UU), RU)
          }(UU, function(UU, RU) {
            return UU && HR(RU, OR(RU), UU)
          }(BU, UU))
        } else {
          if (!rU[XU]) return uU ? UU : {};
          BU = function(UU, RU, gU, tU) {
            var pU = UU.constructor;
            switch (RU) {
              case fU:
                return dR(UU);
              case PU:
              case TU:
                return new pU(+UU);
              case xU:
                return function(UU, RU) {
                  var gU = RU ? dR(UU.buffer) : UU.buffer;
                  return new UU.constructor(gU, UU.byteOffset, UU.byteLength)
                }(UU, tU);
              case mU:
              case IU:
              case JU:
              case wU:
              case nU:
              case bU:
              case oU:
              case ZU:
              case aU:
                return function(UU, RU) {
                  var gU = RU ? dR(UU.buffer) : UU.buffer;
                  return new UU.constructor(gU, UU.byteOffset, UU.length)
                }(UU, tU);
              case cU:
                return function(UU, RU, gU) {
                  var tU = RU ? gU(AU(UU), !0) : AU(UU);
                  return FU(tU, yU, new UU.constructor)
                }(UU, tU, gU);
              case GU:
              case QU:
                return new pU(UU);
              case CU:
                return function(UU) {
                  var RU = new UU.constructor(UU.source, YU.exec(UU));
                  return RU.lastIndex = UU.lastIndex, RU
                }(UU);
              case hU:
                return function(UU, RU, gU) {
                  var tU = RU ? gU(MU(UU), !0) : MU(UU);
                  return FU(tU, kU, new UU.constructor)
                }(UU, tU, gU);
              case eU:
                return EU = UU, bR ? Object(bR.call(EU)) : {}
            }
            var EU
          }(UU, XU, XR, RU)
        }
      }
      WU || (WU = new YR);
      var dU = WU.get(UU);
      if (dU) return dU;
      if (WU.set(UU, BU), !VU) var HU = gU ? function(UU) {
        return function(UU, RU, gU) {
          var tU = RU(UU);
          return MR(UU) ? tU : function(UU, RU) {
            for (var gU = -1, tU = RU.length, pU = UU.length; ++gU < tU;) UU[pU + gU] = RU[gU];
            return UU
          }(tU, gU(UU))
        }(UU, OR, yR)
      }(UU) : OR(UU);
      return function(UU, RU) {
        for (var gU = -1, tU = UU ? UU.length : 0; ++gU < tU && !1 !== RU(UU[gU], gU, UU););
      }(HU || UU, (function(pU, EU) {
        HU && (pU = UU[EU = pU]), VR(BU, EU, XR(pU, RU, gU, tU, EU, UU, WU))
      })), BU
    }

    function vR(UU) {
      return !(!lR(UU) || (RU = UU, OU && OU in RU)) && (NR(UU) || iU(UU) ? tR : BU).test(AR(UU));
      var RU
    }

    function dR(UU) {
      var RU = new UU.constructor(UU.byteLength);
      return new PR(RU).set(new PR(UU)), RU
    }

    function HR(UU, RU, gU, tU) {
      gU || (gU = {});
      for (var pU = -1, EU = RU.length; ++pU < EU;) {
        var PU = RU[pU],
          TU = tU ? tU(gU[PU], UU[PU], PU, gU, UU) : void 0;
        VR(gU, PU, void 0 === TU ? UU[PU] : TU)
      }
      return gU
    }

    function SR(UU, RU) {
      var gU = UU.__data__;
      return function(UU) {
        var RU = typeof UU;
        return "string" == RU || "number" == RU || "symbol" == RU || "boolean" == RU ? "__proto__" !== UU : null === UU
      }(RU) ? gU["string" == typeof RU ? "string" : "hash"] : gU.map
    }

    function sR(UU, RU) {
      var gU = function(UU, RU) {
        return null == UU ? void 0 : UU[RU]
      }(UU, RU);
      return vR(gU) ? gU : void 0
    }
    oR.prototype.clear = function() {
      this.__data__ = fR ? fR(null) : {}
    }, oR.prototype.delete = function(UU) {
      return this.has(UU) && delete this.__data__[UU]
    }, oR.prototype.get = function(UU) {
      var RU = this.__data__;
      if (fR) {
        var gU = RU[UU];
        return gU === tU ? void 0 : gU
      }
      return RR.call(RU, UU) ? RU[UU] : void 0
    }, oR.prototype.has = function(UU) {
      var RU = this.__data__;
      return fR ? void 0 !== RU[UU] : RR.call(RU, UU)
    }, oR.prototype.set = function(UU, RU) {
      return this.__data__[UU] = fR && void 0 === RU ? tU : RU, this
    }, ZR.prototype.clear = function() {
      this.__data__ = []
    }, ZR.prototype.delete = function(UU) {
      var RU = this.__data__,
        gU = rR(RU, UU);
      return !(gU < 0) && (gU == RU.length - 1 ? RU.pop() : cR.call(RU, gU, 1), !0)
    }, ZR.prototype.get = function(UU) {
      var RU = this.__data__,
        gU = rR(RU, UU);
      return gU < 0 ? void 0 : RU[gU][1]
    }, ZR.prototype.has = function(UU) {
      return rR(this.__data__, UU) > -1
    }, ZR.prototype.set = function(UU, RU) {
      var gU = this.__data__,
        tU = rR(gU, UU);
      return tU < 0 ? gU.push([UU, RU]) : gU[tU][1] = RU, this
    }, aR.prototype.clear = function() {
      this.__data__ = {
        hash: new oR,
        map: new(hR || ZR),
        string: new oR
      }
    }, aR.prototype.delete = function(UU) {
      return SR(this, UU).delete(UU)
    }, aR.prototype.get = function(UU) {
      return SR(this, UU).get(UU)
    }, aR.prototype.has = function(UU) {
      return SR(this, UU).has(UU)
    }, aR.prototype.set = function(UU, RU) {
      return SR(this, UU).set(UU, RU), this
    }, YR.prototype.clear = function() {
      this.__data__ = new ZR
    }, YR.prototype.delete = function(UU) {
      return this.__data__.delete(UU)
    }, YR.prototype.get = function(UU) {
      return this.__data__.get(UU)
    }, YR.prototype.has = function(UU) {
      return this.__data__.has(UU)
    }, YR.prototype.set = function(UU, RU) {
      var gU = this.__data__;
      if (gU instanceof ZR) {
        var tU = gU.__data__;
        if (!hR || tU.length < 199) return tU.push([UU, RU]), this;
        gU = this.__data__ = new aR(tU)
      }
      return gU.set(UU, RU), this
    };
    var yR = GR ? zU(GR, Object) : function() {
        return []
      },
      kR = function(UU) {
        return gR.call(UU)
      };

    function FR(UU, RU) {
      return !!(RU = null == RU ? pU : RU) && ("number" == typeof UU || VU.test(UU)) && UU > -1 && UU % 1 == 0 && UU < RU
    }

    function iR(UU) {
      var RU = UU && UU.constructor;
      return UU === ("function" == typeof RU && RU.prototype || NU)
    }

    function AR(UU) {
      if (null != UU) {
        try {
          return UR.call(UU)
        } catch (RU) {}
        try {
          return UU + ""
        } catch (RU) {}
      }
      return ""
    }

    function zR(UU, RU) {
      return UU === RU || UU !== UU && RU !== RU
    }(CR && kR(new CR(new ArrayBuffer(1))) != xU || hR && kR(new hR) != cU || QR && kR(QR.resolve()) != uU || eR && kR(new eR) != hU || WR && kR(new WR) != WU) && (kR = function(UU) {
      var RU = gR.call(UU),
        gU = RU == jU ? UU.constructor : void 0,
        tU = gU ? AR(gU) : void 0;
      if (tU) switch (tU) {
        case xR:
          return xU;
        case mR:
          return cU;
        case IR:
          return uU;
        case JR:
          return hU;
        case wR:
          return WU
      }
      return RU
    });
    var MR = Array.isArray;

    function DR(UU) {
      return null != UU && function(UU) {
        return "number" == typeof UU && UU > -1 && UU % 1 == 0 && UU <= pU
      }(UU.length) && !NR(UU)
    }
    var LR = jR || function() {
      return !1
    };

    function NR(UU) {
      var RU = lR(UU) ? gR.call(UU) : "";
      return RU == qU || RU == KU
    }

    function lR(UU) {
      var RU = typeof UU;
      return !!UU && ("object" == RU || "function" == RU)
    }

    function OR(UU) {
      return DR(UU) ? BR(UU) : function(UU) {
        if (!iR(UU)) return uR(UU);
        var RU = [];
        for (var gU in Object(UU)) RR.call(UU, gU) && "constructor" != gU && RU.push(gU);
        return RU
      }(UU)
    }
    UU.exports = function(UU) {
      return XR(UU, !0, !0)
    }
  },
  37236: (UU, RU, gU) => {
    var tU = gU(37244),
      pU = gU(37253),
      EU = "undefined" !== typeof Float64Array;

    function PU(UU, RU) {
      return UU[0] - RU[0]
    }

    function TU() {
      var UU, RU = this.stride,
        gU = new Array(RU.length);
      for (UU = 0; UU < gU.length; ++UU) gU[UU] = [Math.abs(RU[UU]), UU];
      gU.sort(PU);
      var tU = new Array(gU.length);
      for (UU = 0; UU < tU.length; ++UU) tU[UU] = gU[UU][1];
      return tU
    }

    function qU(UU, RU) {
      var gU = ["View", RU, "d", UU].join("");
      RU < 0 && (gU = "View_Nil" + UU);
      var pU = "generic" === UU;
      if (-1 === RU) {
        var EU = "function " + gU + "(a){this.data=a;};var proto=" + gU + ".prototype;proto.dtype='" + UU + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + gU + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + gU + "(a){return new " + gU + "(a);}";
        return new Function(EU)()
      }
      if (0 === RU) {
        EU = "function " + gU + "(a,d) {this.data = a;this.offset = d};var proto=" + gU + ".prototype;proto.dtype='" + UU + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + gU + "_copy() {return new " + gU + "(this.data,this.offset)};proto.pick=function " + gU + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + gU + "_get(){return " + (pU ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + gU + "_set(v){return " + (pU ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + gU + "(a,b,c,d){return new " + gU + "(a,d)}";
        return new Function("TrivialArray", EU)(KU[UU][0])
      }
      EU = ["'use strict'"];
      var PU = tU(RU),
        qU = PU.map((function(UU) {
          return "i" + UU
        })),
        cU = "this.offset+" + PU.map((function(UU) {
          return "this.stride[" + UU + "]*i" + UU
        })).join("+"),
        GU = PU.map((function(UU) {
          return "b" + UU
        })).join(","),
        jU = PU.map((function(UU) {
          return "c" + UU
        })).join(",");
      EU.push("function " + gU + "(a," + GU + "," + jU + ",d){this.data=a", "this.shape=[" + GU + "]", "this.stride=[" + jU + "]", "this.offset=d|0}", "var proto=" + gU + ".prototype", "proto.dtype='" + UU + "'", "proto.dimension=" + RU), EU.push("Object.defineProperty(proto,'size',{get:function " + gU + "_size(){return " + PU.map((function(UU) {
        return "this.shape[" + UU + "]"
      })).join("*"), "}})"), 1 === RU ? EU.push("proto.order=[0]") : (EU.push("Object.defineProperty(proto,'order',{get:"), RU < 4 ? (EU.push("function " + gU + "_order(){"), 2 === RU ? EU.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === RU && EU.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : EU.push("ORDER})")), EU.push("proto.set=function " + gU + "_set(" + qU.join(",") + ",v){"), pU ? EU.push("return this.data.set(" + cU + ",v)}") : EU.push("return this.data[" + cU + "]=v}"), EU.push("proto.get=function " + gU + "_get(" + qU.join(",") + "){"), pU ? EU.push("return this.data.get(" + cU + ")}") : EU.push("return this.data[" + cU + "]}"), EU.push("proto.index=function " + gU + "_index(", qU.join(), "){return " + cU + "}"), EU.push("proto.hi=function " + gU + "_hi(" + qU.join(",") + "){return new " + gU + "(this.data," + PU.map((function(UU) {
        return ["(typeof i", UU, "!=='number'||i", UU, "<0)?this.shape[", UU, "]:i", UU, "|0"].join("")
      })).join(",") + "," + PU.map((function(UU) {
        return "this.stride[" + UU + "]"
      })).join(",") + ",this.offset)}");
      var uU = PU.map((function(UU) {
          return "a" + UU + "=this.shape[" + UU + "]"
        })),
        CU = PU.map((function(UU) {
          return "c" + UU + "=this.stride[" + UU + "]"
        }));
      EU.push("proto.lo=function " + gU + "_lo(" + qU.join(",") + "){var b=this.offset,d=0," + uU.join(",") + "," + CU.join(","));
      for (var hU = 0; hU < RU; ++hU) EU.push("if(typeof i" + hU + "==='number'&&i" + hU + ">=0){d=i" + hU + "|0;b+=c" + hU + "*d;a" + hU + "-=d}");
      EU.push("return new " + gU + "(this.data," + PU.map((function(UU) {
        return "a" + UU
      })).join(",") + "," + PU.map((function(UU) {
        return "c" + UU
      })).join(",") + ",b)}"), EU.push("proto.step=function " + gU + "_step(" + qU.join(",") + "){var " + PU.map((function(UU) {
        return "a" + UU + "=this.shape[" + UU + "]"
      })).join(",") + "," + PU.map((function(UU) {
        return "b" + UU + "=this.stride[" + UU + "]"
      })).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
      for (hU = 0; hU < RU; ++hU) EU.push("if(typeof i" + hU + "==='number'){d=i" + hU + "|0;if(d<0){c+=b" + hU + "*(a" + hU + "-1);a" + hU + "=ceil(-a" + hU + "/d)}else{a" + hU + "=ceil(a" + hU + "/d)}b" + hU + "*=d}");
      EU.push("return new " + gU + "(this.data," + PU.map((function(UU) {
        return "a" + UU
      })).join(",") + "," + PU.map((function(UU) {
        return "b" + UU
      })).join(",") + ",c)}");
      var QU = new Array(RU),
        eU = new Array(RU);
      for (hU = 0; hU < RU; ++hU) QU[hU] = "a[i" + hU + "]", eU[hU] = "b[i" + hU + "]";
      EU.push("proto.transpose=function " + gU + "_transpose(" + qU + "){" + qU.map((function(UU, RU) {
        return UU + "=(" + UU + "===undefined?" + RU + ":" + UU + "|0)"
      })).join(";"), "var a=this.shape,b=this.stride;return new " + gU + "(this.data," + QU.join(",") + "," + eU.join(",") + ",this.offset)}"), EU.push("proto.pick=function " + gU + "_pick(" + qU + "){var a=[],b=[],c=this.offset");
      for (hU = 0; hU < RU; ++hU) EU.push("if(typeof i" + hU + "==='number'&&i" + hU + ">=0){c=(c+this.stride[" + hU + "]*i" + hU + ")|0}else{a.push(this.shape[" + hU + "]);b.push(this.stride[" + hU + "])}");
      return EU.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), EU.push("return function construct_" + gU + "(data,shape,stride,offset){return new " + gU + "(data," + PU.map((function(UU) {
        return "shape[" + UU + "]"
      })).join(",") + "," + PU.map((function(UU) {
        return "stride[" + UU + "]"
      })).join(",") + ",offset)}"), new Function("CTOR_LIST", "ORDER", EU.join("\n"))(KU[UU], TU)
    }
    var KU = {
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
    UU.exports = function(UU, RU, gU, tU) {
      if (void 0 === UU) return (0, KU.array[0])([]);
      "number" === typeof UU && (UU = [UU]), void 0 === RU && (RU = [UU.length]);
      var PU = RU.length;
      if (void 0 === gU) {
        gU = new Array(PU);
        for (var TU = PU - 1, cU = 1; TU >= 0; --TU) gU[TU] = cU, cU *= RU[TU]
      }
      if (void 0 === tU) {
        tU = 0;
        for (TU = 0; TU < PU; ++TU) gU[TU] < 0 && (tU -= (RU[TU] - 1) * gU[TU])
      }
      for (var GU = function(UU) {
          if (pU(UU)) return "buffer";
          if (EU) switch (Object.prototype.toString.call(UU)) {
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
          return Array.isArray(UU) ? "array" : "generic"
        }(UU), jU = KU[GU]; jU.length <= PU + 1;) jU.push(qU(GU, jU.length - 1));
      return (0, jU[PU + 1])(UU, RU, gU, tU)
    }
  },
  38006: UU => {
    function RU(UU, RU, gU) {
      for (var tU = UU.length, pU = -1 / 0, EU = 1 / 0, PU = 0; PU < tU; PU++) {
        var TU = (gU[0][PU] - UU[PU]) / RU[PU],
          qU = (gU[1][PU] - UU[PU]) / RU[PU];
        if (TU > qU) {
          var KU = TU;
          TU = qU, qU = KU
        }
        if (qU < pU || TU > EU) return 1 / 0;
        TU > pU && (pU = TU), qU < EU && (EU = qU)
      }
      return pU > EU ? 1 / 0 : pU
    }
    UU.exports = function(UU, gU, tU, pU) {
      var EU = RU(gU, tU, pU);
      if (EU === 1 / 0) UU = null;
      else {
        UU = UU || [];
        for (var PU = 0; PU < gU.length; PU++) UU[PU] = gU[PU] + tU[PU] * EU
      }
      return UU
    }, UU.exports.distance = RU
  },
  37266: (UU, RU, gU) => {
    var tU = gU(37271);

    function pU(UU) {
      for (var RU, gU, pU = 0, EU = UU.length, PU = 0; PU < UU.length;) {
        for (RU = UU[PU], gU = 0; PU < EU && UU[PU] === RU;) ++PU, ++gU;
        pU += tU.log2(gU) / 7 | 0, pU += tU.log2(RU >>> 0) / 7 | 0, pU += 2
      }
      return pU
    }
    RU.size = pU, RU.encode = function(UU, RU) {
      RU || (RU = new Uint8Array(pU(UU)));
      for (var gU, tU, EU = 0, PU = RU.length, TU = 0; TU < UU.length;) {
        for (gU = UU[TU], tU = 0; TU < UU.length && UU[TU] === gU;) ++TU, ++tU;
        for (; EU < PU && tU >= 128;) RU[EU++] = 128 + (127 & tU), tU >>>= 7;
        if (EU >= PU) throw new Error("RLE buffer overflow");
        for (RU[EU++] = tU, gU >>>= 0; EU < PU && gU >= 128;) RU[EU++] = 128 + (127 & gU), gU >>>= 7;
        if (EU >= PU) throw new Error("RLE buffer overflow");
        RU[EU++] = gU
      }
      return RU
    }, RU.decode = function(UU, RU) {
      for (var gU, tU, pU, EU, PU = RU.length, TU = UU.length, qU = 0, KU = 0; KU < TU;) {
        for (gU = 0, tU = 0; KU < TU && UU[KU] >= 128;) gU += (127 & UU[KU++]) << tU, tU += 7;
        if (gU += UU[KU++] << tU, KU >= TU) throw new Error("RLE buffer underrun");
        if (qU + gU > PU) throw new Error("Chunk buffer overflow");
        for (pU = 0, tU = 0; KU < TU && UU[KU] >= 128;) pU += (127 & UU[KU++]) << tU, tU += 7;
        if (KU >= TU) throw new Error("RLE buffer underrun");
        for (pU += UU[KU++] << tU, EU = 0; EU < gU; ++EU) RU[qU++] = pU
      }
      return RU
    }
  },
  37271: (UU, RU) => {
    function gU(UU) {
      var RU = 32;
      return (UU &= -UU) && RU--, 65535 & UU && (RU -= 16), 16711935 & UU && (RU -= 8), 252645135 & UU && (RU -= 4), 858993459 & UU && (RU -= 2), 1431655765 & UU && (RU -= 1), RU
    }
    RU.INT_BITS = 32, RU.INT_MAX = 2147483647, RU.INT_MIN = -1 << 31, RU.sign = function(UU) {
      return (UU > 0) - (UU < 0)
    }, RU.abs = function(UU) {
      var RU = UU >> 31;
      return (UU ^ RU) - RU
    }, RU.min = function(UU, RU) {
      return RU ^ (UU ^ RU) & -(UU < RU)
    }, RU.max = function(UU, RU) {
      return UU ^ (UU ^ RU) & -(UU < RU)
    }, RU.isPow2 = function(UU) {
      return !(UU & UU - 1) && !!UU
    }, RU.log2 = function(UU) {
      var RU, gU;
      return RU = (UU > 65535) << 4, RU |= gU = ((UU >>>= RU) > 255) << 3, RU |= gU = ((UU >>>= gU) > 15) << 2, (RU |= gU = ((UU >>>= gU) > 3) << 1) | (UU >>>= gU) >> 1
    }, RU.log10 = function(UU) {
      return UU >= 1e9 ? 9 : UU >= 1e8 ? 8 : UU >= 1e7 ? 7 : UU >= 1e6 ? 6 : UU >= 1e5 ? 5 : UU >= 1e4 ? 4 : UU >= 1e3 ? 3 : UU >= 100 ? 2 : UU >= 10 ? 1 : 0
    }, RU.popCount = function(UU) {
      return 16843009 * ((UU = (858993459 & (UU -= UU >>> 1 & 1431655765)) + (UU >>> 2 & 858993459)) + (UU >>> 4) & 252645135) >>> 24
    }, RU.countTrailingZeros = gU, RU.nextPow2 = function(UU) {
      return UU += 0 === UU, --UU, UU |= UU >>> 1, UU |= UU >>> 2, UU |= UU >>> 4, UU |= UU >>> 8, (UU |= UU >>> 16) + 1
    }, RU.prevPow2 = function(UU) {
      return UU |= UU >>> 1, UU |= UU >>> 2, UU |= UU >>> 4, UU |= UU >>> 8, (UU |= UU >>> 16) - (UU >>> 1)
    }, RU.parity = function(UU) {
      return UU ^= UU >>> 16, UU ^= UU >>> 8, UU ^= UU >>> 4, 27030 >>> (UU &= 15) & 1
    };
    var tU = new Array(256);
    ! function(UU) {
      for (var RU = 0; RU < 256; ++RU) {
        var gU = RU,
          tU = RU,
          pU = 7;
        for (gU >>>= 1; gU; gU >>>= 1) tU <<= 1, tU |= 1 & gU, --pU;
        UU[RU] = tU << pU & 255
      }
    }(tU), RU.reverse = function(UU) {
      return tU[255 & UU] << 24 | tU[UU >>> 8 & 255] << 16 | tU[UU >>> 16 & 255] << 8 | tU[UU >>> 24 & 255]
    }, RU.interleave2 = function(UU, RU) {
      return (UU = 1431655765 & ((UU = 858993459 & ((UU = 252645135 & ((UU = 16711935 & ((UU &= 65535) | UU << 8)) | UU << 4)) | UU << 2)) | UU << 1)) | (RU = 1431655765 & ((RU = 858993459 & ((RU = 252645135 & ((RU = 16711935 & ((RU &= 65535) | RU << 8)) | RU << 4)) | RU << 2)) | RU << 1)) << 1
    }, RU.deinterleave2 = function(UU, RU) {
      return (UU = 65535 & ((UU = 16711935 & ((UU = 252645135 & ((UU = 858993459 & ((UU = UU >>> RU & 1431655765) | UU >>> 1)) | UU >>> 2)) | UU >>> 4)) | UU >>> 16)) << 16 >> 16
    }, RU.interleave3 = function(UU, RU, gU) {
      return UU = 1227133513 & ((UU = 3272356035 & ((UU = 251719695 & ((UU = 4278190335 & ((UU &= 1023) | UU << 16)) | UU << 8)) | UU << 4)) | UU << 2), (UU |= (RU = 1227133513 & ((RU = 3272356035 & ((RU = 251719695 & ((RU = 4278190335 & ((RU &= 1023) | RU << 16)) | RU << 8)) | RU << 4)) | RU << 2)) << 1) | (gU = 1227133513 & ((gU = 3272356035 & ((gU = 251719695 & ((gU = 4278190335 & ((gU &= 1023) | gU << 16)) | gU << 8)) | gU << 4)) | gU << 2)) << 2
    }, RU.deinterleave3 = function(UU, RU) {
      return (UU = 1023 & ((UU = 4278190335 & ((UU = 251719695 & ((UU = 3272356035 & ((UU = UU >>> RU & 1227133513) | UU >>> 2)) | UU >>> 4)) | UU >>> 8)) | UU >>> 16)) << 22 >> 22
    }, RU.nextCombination = function(UU) {
      var RU = UU | UU - 1;
      return RU + 1 | (~RU & -~RU) - 1 >>> gU(UU) + 1
    }
  },
  36754: (UU, RU, gU) => {
    gU.d(RU, {
      Color3: () => tU.e,
      c: () => tU.g
    });
    var tU = gU(36761);
    (0, tU.k)()
  },
  37301: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU
    });
    var tU = gU(37308);
    class pU {
      static GetPlanes(UU) {
        const RU = [];
        for (let gU = 0; gU < 6; gU++) RU.push(new tU.e(0, 0, 0, 0));
        return pU.GetPlanesToRef(UU, RU), RU
      }
      static GetNearPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] + gU[2], RU.normal.y = gU[7] + gU[6], RU.normal.z = gU[11] + gU[10], RU.d = gU[15] + gU[14], RU.normalize()
      }
      static GetFarPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] - gU[2], RU.normal.y = gU[7] - gU[6], RU.normal.z = gU[11] - gU[10], RU.d = gU[15] - gU[14], RU.normalize()
      }
      static GetLeftPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] + gU[0], RU.normal.y = gU[7] + gU[4], RU.normal.z = gU[11] + gU[8], RU.d = gU[15] + gU[12], RU.normalize()
      }
      static GetRightPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] - gU[0], RU.normal.y = gU[7] - gU[4], RU.normal.z = gU[11] - gU[8], RU.d = gU[15] - gU[12], RU.normalize()
      }
      static GetTopPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] - gU[1], RU.normal.y = gU[7] - gU[5], RU.normal.z = gU[11] - gU[9], RU.d = gU[15] - gU[13], RU.normalize()
      }
      static GetBottomPlaneToRef(UU, RU) {
        const gU = UU.m;
        RU.normal.x = gU[3] + gU[1], RU.normal.y = gU[7] + gU[5], RU.normal.z = gU[11] + gU[9], RU.d = gU[15] + gU[13], RU.normalize()
      }
      static GetPlanesToRef(UU, RU) {
        pU.GetNearPlaneToRef(UU, RU[0]), pU.GetFarPlaneToRef(UU, RU[1]), pU.GetLeftPlaneToRef(UU, RU[2]), pU.GetRightPlaneToRef(UU, RU[3]), pU.GetTopPlaneToRef(UU, RU[4]), pU.GetBottomPlaneToRef(UU, RU[5])
      }
      static IsPointInFrustum(UU, RU) {
        for (let gU = 0; gU < 6; gU++)
          if (RU[gU].dotCoordinate(UU) < 0) return !1;
        return !0
      }
    }
  },
  37308: (UU, RU, gU) => {
    gU.d(RU, {
      e: () => pU
    });
    var tU = gU(36600);
    class pU {
      constructor(UU, RU, gU, pU) {
        this.normal = new tU.n(UU, RU, gU), this.d = pU
      }
      vgU() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new pU(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let RU = 0;
        return 0 !== UU && (RU = 1 / UU), this.normal.x *= RU, this.normal.y *= RU, this.normal.z *= RU, this.d *= RU, this
      }
      transform(UU) {
        const RU = pU._TmpMatrix;
        UU.invertToRef(RU);
        const gU = RU.m,
          tU = this.normal.x,
          EU = this.normal.y,
          PU = this.normal.z,
          TU = this.d,
          qU = tU * gU[0] + EU * gU[1] + PU * gU[2] + TU * gU[3],
          KU = tU * gU[4] + EU * gU[5] + PU * gU[6] + TU * gU[7],
          cU = tU * gU[8] + EU * gU[9] + PU * gU[10] + TU * gU[11],
          GU = tU * gU[12] + EU * gU[13] + PU * gU[14] + TU * gU[15];
        return new pU(qU, KU, cU, GU)
      }
      dotCoordinate(UU) {
        return this.normal.x * UU.x + this.normal.y * UU.y + this.normal.z * UU.z + this.d
      }
      copyFromPoints(UU, RU, gU) {
        const tU = RU.x - UU.x,
          pU = RU.y - UU.y,
          EU = RU.z - UU.z,
          PU = gU.x - UU.x,
          TU = gU.y - UU.y,
          qU = gU.z - UU.z,
          KU = pU * qU - EU * TU,
          cU = EU * PU - tU * qU,
          GU = tU * TU - pU * PU,
          jU = Math.sqrt(KU * KU + cU * cU + GU * GU);
        let uU;
        return uU = 0 !== jU ? 1 / jU : 0, this.normal.x = KU * uU, this.normal.y = cU * uU, this.normal.z = GU * uU, this.d = -(this.normal.x * UU.x + this.normal.y * UU.y + this.normal.z * UU.z), this
      }
      isFrontFacingTo(UU, RU) {
        return tU.n.Dot(this.normal, UU) <= RU
      }
      signedDistanceTo(UU) {
        return tU.n.Dot(UU, this.normal) + this.d
      }
      static FromArray(UU) {
        return new pU(UU[0], UU[1], UU[2], UU[3])
      }
      static FromPoints(UU, RU, gU) {
        const tU = new pU(0, 0, 0, 0);
        return tU.copyFromPoints(UU, RU, gU), tU
      }
      static FromPositionAndNormal(UU, RU) {
        const gU = new pU(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(UU, RU, gU)
      }
      static FromPositionAndNormalToRef(UU, RU, gU) {
        return gU.normal.PgU(RU), gU.normal.normalize(), gU.d = -UU.dot(gU.normal), gU
      }
      static SignedDistanceToPlaneFromPositionAndNormal(UU, RU, gU) {
        const pU = -(RU.x * UU.x + RU.y * UU.y + RU.z * UU.z);
        return tU.n.Dot(gU, RU) + pU
      }
    }
    pU._TmpMatrix = tU.c.Identity()
  },
  36593: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      Matrix: () => tU.c,
      Quaternion: () => tU.d,
      RegisterMathVector: () => tU.g,
      TmpVectors: () => tU.h,
      Vector2: () => tU.l,
      xC: () => tU.n,
      Vector4: () => tU.q
    });
    var tU = gU(36600);
    (0, tU.g)()
  },
  37641: (UU, RU, gU) => {
    gU.d(RU, {
      d: () => tU
    });
    class tU {
      constructor(UU, RU, gU, tU) {
        this.x = UU, this.y = RU, this.width = gU, this.height = tU
      }
      toGlobal(UU, RU) {
        return new tU(this.x * UU, this.y * RU, this.width * UU, this.height * RU)
      }
      toGlobalToRef(UU, RU, gU) {
        return gU.x = this.x * UU, gU.y = this.y * RU, gU.width = this.width * UU, gU.height = this.height * RU, this
      }
      clone() {
        return new tU(this.x, this.y, this.width, this.height)
      }
    }
  },
  37439: (UU, RU, gU) => {
    function tU() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (UU => {
        const RU = 16 * Math.random() | 0;
        return ("x" === UU ? RU : 3 & RU | 8).toString(16)
      }))
    }
    gU.d(RU, {
      b: () => tU
    })
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);