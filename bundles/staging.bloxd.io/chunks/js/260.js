/*! For license information please see 4udp6d.260.68443e07.chunk.js.LICENSE.txt */
export const id = 260;
export const ids = [260, 267];
export const modules = {
  39451: RR => {
    RR.exports = function(RR) {
      return null != RR && null != RR.constructor && "function" === typeof RR.constructor.isBuffer && RR.constructor.isBuffer(RR)
    }
  },
  39438: (RR, JR, GR) => {
    var yR = GR(39442),
      tR = GR(39448),
      uR = GR(39451);
    GR.g.__TYPEDARRAY_POOL || (GR.g.__TYPEDARRAY_POOL = {
      UINT8: tR([32, 0]),
      UINT16: tR([32, 0]),
      UINT32: tR([32, 0]),
      INT8: tR([32, 0]),
      INT16: tR([32, 0]),
      INT32: tR([32, 0]),
      FLOAT: tR([32, 0]),
      DOUBLE: tR([32, 0]),
      DATA: tR([32, 0]),
      UINT8C: tR([32, 0]),
      BUFFER: tR([32, 0])
    });
    var ZR = "undefined" !== typeof Uint8ClampedArray,
      qR = GR.g.__TYPEDARRAY_POOL;
    qR.UINT8C || (qR.UINT8C = tR([32, 0])), qR.BUFFER || (qR.BUFFER = tR([32, 0]));
    var iR = qR.DATA,
      fR = qR.BUFFER;

    function VR(RR) {
      if (RR) {
        var JR = RR.length || RR.byteLength,
          GR = yR.log2(JR);
        iR[GR].push(RR)
      }
    }

    function KR(RR) {
      RR = yR.nextPow2(RR);
      var JR = yR.log2(RR),
        GR = iR[JR];
      return GR.length > 0 ? GR.pop() : new ArrayBuffer(RR)
    }

    function wR(RR) {
      return new Uint8Array(KR(RR), 0, RR)
    }

    function rR(RR) {
      return new Uint16Array(KR(2 * RR), 0, RR)
    }

    function eR(RR) {
      return new Uint32Array(KR(4 * RR), 0, RR)
    }

    function aR(RR) {
      return new Int8Array(KR(RR), 0, RR)
    }

    function LR(RR) {
      return new Int16Array(KR(2 * RR), 0, RR)
    }

    function nR(RR) {
      return new Int32Array(KR(4 * RR), 0, RR)
    }

    function UR(RR) {
      return new Float32Array(KR(4 * RR), 0, RR)
    }

    function WR(RR) {
      return new Float64Array(KR(8 * RR), 0, RR)
    }

    function AR(RR) {
      return ZR ? new Uint8ClampedArray(KR(RR), 0, RR) : wR(RR)
    }

    function CR(RR) {
      return new DataView(KR(RR), 0, RR)
    }
    JR.free = function(RR) {
      if (uR(RR)) fR[yR.log2(RR.length)].push(RR);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(RR) && (RR = RR.buffer), !RR) return;
        var JR = RR.length || RR.byteLength,
          GR = 0 | yR.log2(JR);
        iR[GR].push(RR)
      }
    }, JR.freeUint8 = JR.freeUint16 = JR.freeUint32 = JR.freeInt8 = JR.freeInt16 = JR.freeInt32 = JR.freeFloat32 = JR.freeFloat = JR.freeFloat64 = JR.freeDouble = JR.freeUint8Clamped = JR.freeDataView = function(RR) {
      VR(RR.buffer)
    }, JR.freeArrayBuffer = VR, JR.freeBuffer = function(RR) {
      fR[yR.log2(RR.length)].push(RR)
    }, JR.malloc = function(RR, JR) {
      if (void 0 === JR || "arraybuffer" === JR) return KR(RR);
      switch (JR) {
        case "uint8":
          return wR(RR);
        case "uint16":
          return rR(RR);
        case "uint32":
          return eR(RR);
        case "int8":
          return aR(RR);
        case "int16":
          return LR(RR);
        case "int32":
          return nR(RR);
        case "float":
        case "float32":
          return UR(RR);
        case "double":
        case "float64":
          return WR(RR);
        case "uint8_clamped":
          return AR(RR);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return CR(RR);
        default:
          return null
      }
      return null
    }, JR.mallocArrayBuffer = KR, JR.mallocUint8 = wR, JR.mallocUint16 = rR, JR.mallocUint32 = eR, JR.mallocInt8 = aR, JR.mallocInt16 = LR, JR.mallocInt32 = nR, JR.mallocFloat32 = JR.mallocFloat = UR, JR.mallocFloat64 = JR.mallocDouble = WR, JR.mallocUint8Clamped = AR, JR.mallocDataView = CR, JR.clearCache = function() {
      for (var RR = 0; RR < 32; ++RR) qR.UINT8[RR].length = 0, qR.UINT16[RR].length = 0, qR.UINT32[RR].length = 0, qR.INT8[RR].length = 0, qR.INT16[RR].length = 0, qR.INT32[RR].length = 0, qR.FLOAT[RR].length = 0, qR.DOUBLE[RR].length = 0, qR.UINT8C[RR].length = 0, iR[RR].length = 0, fR[RR].length = 0
    }
  },
  39442: (RR, JR) => {
    function GR(RR) {
      var JR = 32;
      return (RR &= -RR) && JR--, 65535 & RR && (JR -= 16), 16711935 & RR && (JR -= 8), 252645135 & RR && (JR -= 4), 858993459 & RR && (JR -= 2), 1431655765 & RR && (JR -= 1), JR
    }
    JR.INT_BITS = 32, JR.INT_MAX = 2147483647, JR.INT_MIN = -1 << 31, JR.sign = function(RR) {
      return (RR > 0) - (RR < 0)
    }, JR.abs = function(RR) {
      var JR = RR >> 31;
      return (RR ^ JR) - JR
    }, JR.min = function(RR, JR) {
      return JR ^ (RR ^ JR) & -(RR < JR)
    }, JR.max = function(RR, JR) {
      return RR ^ (RR ^ JR) & -(RR < JR)
    }, JR.isPow2 = function(RR) {
      return !(RR & RR - 1) && !!RR
    }, JR.log2 = function(RR) {
      var JR, GR;
      return JR = (RR > 65535) << 4, JR |= GR = ((RR >>>= JR) > 255) << 3, JR |= GR = ((RR >>>= GR) > 15) << 2, (JR |= GR = ((RR >>>= GR) > 3) << 1) | (RR >>>= GR) >> 1
    }, JR.log10 = function(RR) {
      return RR >= 1e9 ? 9 : RR >= 1e8 ? 8 : RR >= 1e7 ? 7 : RR >= 1e6 ? 6 : RR >= 1e5 ? 5 : RR >= 1e4 ? 4 : RR >= 1e3 ? 3 : RR >= 100 ? 2 : RR >= 10 ? 1 : 0
    }, JR.popCount = function(RR) {
      return 16843009 * ((RR = (858993459 & (RR -= RR >>> 1 & 1431655765)) + (RR >>> 2 & 858993459)) + (RR >>> 4) & 252645135) >>> 24
    }, JR.countTrailingZeros = GR, JR.nextPow2 = function(RR) {
      return RR += 0 === RR, --RR, RR |= RR >>> 1, RR |= RR >>> 2, RR |= RR >>> 4, RR |= RR >>> 8, (RR |= RR >>> 16) + 1
    }, JR.prevPow2 = function(RR) {
      return RR |= RR >>> 1, RR |= RR >>> 2, RR |= RR >>> 4, RR |= RR >>> 8, (RR |= RR >>> 16) - (RR >>> 1)
    }, JR.parity = function(RR) {
      return RR ^= RR >>> 16, RR ^= RR >>> 8, RR ^= RR >>> 4, 27030 >>> (RR &= 15) & 1
    };
    var yR = new Array(256);
    ! function(RR) {
      for (var JR = 0; JR < 256; ++JR) {
        var GR = JR,
          yR = JR,
          tR = 7;
        for (GR >>>= 1; GR; GR >>>= 1) yR <<= 1, yR |= 1 & GR, --tR;
        RR[JR] = yR << tR & 255
      }
    }(yR), JR.reverse = function(RR) {
      return yR[255 & RR] << 24 | yR[RR >>> 8 & 255] << 16 | yR[RR >>> 16 & 255] << 8 | yR[RR >>> 24 & 255]
    }, JR.interleave2 = function(RR, JR) {
      return (RR = 1431655765 & ((RR = 858993459 & ((RR = 252645135 & ((RR = 16711935 & ((RR &= 65535) | RR << 8)) | RR << 4)) | RR << 2)) | RR << 1)) | (JR = 1431655765 & ((JR = 858993459 & ((JR = 252645135 & ((JR = 16711935 & ((JR &= 65535) | JR << 8)) | JR << 4)) | JR << 2)) | JR << 1)) << 1
    }, JR.deinterleave2 = function(RR, JR) {
      return (RR = 65535 & ((RR = 16711935 & ((RR = 252645135 & ((RR = 858993459 & ((RR = RR >>> JR & 1431655765) | RR >>> 1)) | RR >>> 2)) | RR >>> 4)) | RR >>> 16)) << 16 >> 16
    }, JR.interleave3 = function(RR, JR, GR) {
      return RR = 1227133513 & ((RR = 3272356035 & ((RR = 251719695 & ((RR = 4278190335 & ((RR &= 1023) | RR << 16)) | RR << 8)) | RR << 4)) | RR << 2), (RR |= (JR = 1227133513 & ((JR = 3272356035 & ((JR = 251719695 & ((JR = 4278190335 & ((JR &= 1023) | JR << 16)) | JR << 8)) | JR << 4)) | JR << 2)) << 1) | (GR = 1227133513 & ((GR = 3272356035 & ((GR = 251719695 & ((GR = 4278190335 & ((GR &= 1023) | GR << 16)) | GR << 8)) | GR << 4)) | GR << 2)) << 2
    }, JR.deinterleave3 = function(RR, JR) {
      return (RR = 1023 & ((RR = 4278190335 & ((RR = 251719695 & ((RR = 3272356035 & ((RR = RR >>> JR & 1227133513) | RR >>> 2)) | RR >>> 4)) | RR >>> 8)) | RR >>> 16)) << 22 >> 22
    }, JR.nextCombination = function(RR) {
      var JR = RR | RR - 1;
      return JR + 1 | (~JR & -~JR) - 1 >>> GR(RR) + 1
    }
  },
  39430: (RR, JR, GR) => {
    RR.exports = function(RR, JR, GR) {
      switch (arguments.length) {
        case 1:
          return yR = [], fR(tR = RR, tR, VR, !0), yR;
        case 2:
          return "function" === typeof JR ? fR(RR, RR, JR, !0) : function(RR, JR) {
            return yR = [], fR(RR, JR, VR, !1), yR
          }(RR, JR);
        case 3:
          return fR(RR, JR, GR, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var tR
    };
    var yR, tR = GR(39438),
      uR = GR(39453),
      ZR = GR(39460);

    function qR(RR, JR) {
      for (var GR = 0; GR < RR; ++GR)
        if (!(JR[GR] <= JR[GR + RR])) return !0;
      return !1
    }

    function iR(RR, JR, GR, yR) {
      for (var tR = 0, uR = 0, ZR = 0, iR = RR.length; ZR < iR; ++ZR) {
        var fR = RR[ZR];
        if (!qR(JR, fR)) {
          for (var VR = 0; VR < 2 * JR; ++VR) GR[tR++] = fR[VR];
          yR[uR++] = ZR
        }
      }
      return uR
    }

    function fR(RR, JR, GR, yR) {
      var qR = RR.length,
        fR = JR.length;
      if (!(qR <= 0 || fR <= 0)) {
        var VR = RR[0].length >>> 1;
        if (!(VR <= 0)) {
          var KR, wR = tR.mallocDouble(2 * VR * qR),
            rR = tR.mallocInt32(qR);
          if ((qR = iR(RR, VR, wR, rR)) > 0) {
            if (1 === VR && yR) uR.init(qR), KR = uR.sweepComplete(VR, GR, 0, qR, wR, rR, 0, qR, wR, rR);
            else {
              var eR = tR.mallocDouble(2 * VR * fR),
                aR = tR.mallocInt32(fR);
              (fR = iR(JR, VR, eR, aR)) > 0 && (uR.init(qR + fR), KR = 1 === VR ? uR.sweepBipartite(VR, GR, 0, qR, wR, rR, 0, fR, eR, aR) : ZR(VR, GR, yR, qR, wR, rR, fR, eR, aR), tR.free(eR), tR.free(aR))
            }
            tR.free(wR), tR.free(rR)
          }
          return KR
        }
      }
    }

    function VR(RR, JR) {
      yR.push([RR, JR])
    }
  },
  39465: (RR, JR) => {
    var GR = "d",
      yR = "ax",
      tR = "fp",
      uR = "es",
      ZR = "rs",
      qR = "re",
      iR = "rb",
      fR = "bs",
      VR = "be",
      KR = "bb",
      wR = [GR, yR, "vv", ZR, qR, iR, "ri", fR, VR, KR, "bi"];

    function rR(RR) {
      var JR = "bruteForce" + (RR ? "Full" : "Partial"),
        yR = [],
        ZR = wR.slice();
      RR || ZR.splice(3, 0, tR);
      var qR = ["function " + JR + "(" + ZR.join() + "){"];

      function iR(JR, tR) {
        var ZR = function(RR, JR, yR) {
          var tR = "bruteForce" + (RR ? "Red" : "Blue") + (JR ? "Flip" : "") + (yR ? "Full" : ""),
            ZR = ["function ", tR, "(", wR.join(), "){", "var ", uR, "=2*", GR, ";"],
            qR = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            iR = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (yR ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return RR ? ZR.push(qR, "Q", ":", iR) : ZR.push(iR, "Q", ":", qR), yR ? ZR.push("if(y1<x0||x1<y0)continue;") : JR ? ZR.push("if(y0<=x0||x1<y0)continue;") : ZR.push("if(y0<x0||x1<y0)continue;"), ZR.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), JR ? ZR.push("yi,xi") : ZR.push("xi,yi"), ZR.push(");if(rv!==void 0)return rv;}}}"), {
            name: tR,
            code: ZR.join("")
          }
        }(JR, tR, RR);
        yR.push(ZR.code), qR.push("return " + ZR.name + "(" + wR.join() + ");")
      }
      qR.push("if(re-rs>be-bs){"), RR ? (iR(!0, !1), qR.push("}else{"), iR(!1, !1)) : (qR.push("if(fp){"), iR(!0, !0), qR.push("}else{"), iR(!0, !1), qR.push("}}else{if(fp){"), iR(!1, !0), qR.push("}else{"), iR(!1, !1), qR.push("}")), qR.push("}}return " + JR);
      var fR = yR.join("") + qR.join("");
      return new Function(fR)()
    }
    JR.partial = rR(!1), JR.full = rR(!0)
  },
  39460: (RR, JR, GR) => {
    RR.exports = function(RR, JR, GR, uR, VR, gR, bR, vR, OR) {
      ! function(RR, JR) {
        var GR = 8 * tR.log2(JR + 1) * (RR + 1) | 0,
          uR = tR.nextPow2(AR * GR);
        XR.length < uR && (yR.free(XR), XR = yR.mallocInt32(uR));
        var ZR = tR.nextPow2(CR * GR);
        MR.length < ZR && (yR.free(MR), MR = yR.mallocDouble(ZR))
      }(RR, uR + bR);
      var xR, NR = 0,
        DR = 2 * RR;
      BR(NR++, 0, 0, uR, 0, bR, GR ? 16 : 0, -1 / 0, 1 / 0), GR || BR(NR++, 0, 0, bR, 0, uR, 1, -1 / 0, 1 / 0);
      for (; NR > 0;) {
        var HR = (NR -= 1) * AR,
          oR = XR[HR],
          cR = XR[HR + 1],
          PR = XR[HR + 2],
          IR = XR[HR + 3],
          mR = XR[HR + 4],
          zR = XR[HR + 5],
          SR = NR * CR,
          jR = MR[SR],
          dR = MR[SR + 1],
          ER = 1 & zR,
          YR = !!(16 & zR),
          kR = VR,
          QR = gR,
          FR = vR,
          TR = OR;
        if (ER && (kR = vR, QR = OR, FR = VR, TR = gR), !(2 & zR && cR >= (PR = LR(RR, oR, cR, PR, kR, QR, dR))) && !(4 & zR && (cR = nR(RR, oR, cR, PR, kR, QR, jR)) >= PR)) {
          var sR = PR - cR,
            hR = mR - IR;
          if (YR) {
            if (RR * sR * (sR + hR) < rR) {
              if (void 0 !== (xR = iR.scanComplete(RR, oR, JR, cR, PR, kR, QR, IR, mR, FR, TR))) return xR;
              continue
            }
          } else {
            if (RR * Math.min(sR, hR) < KR) {
              if (void 0 !== (xR = ZR(RR, oR, JR, ER, cR, PR, kR, QR, IR, mR, FR, TR))) return xR;
              continue
            }
            if (RR * sR * hR < wR) {
              if (void 0 !== (xR = iR.scanBipartite(RR, oR, JR, ER, cR, PR, kR, QR, IR, mR, FR, TR))) return xR;
              continue
            }
          }
          var RJ = eR(RR, oR, cR, PR, kR, QR, jR, dR);
          if (cR < RJ)
            if (RR * (RJ - cR) < KR) {
              if (void 0 !== (xR = qR(RR, oR + 1, JR, cR, RJ, kR, QR, IR, mR, FR, TR))) return xR
            } else if (oR === RR - 2) {
            if (void 0 !== (xR = ER ? iR.sweepBipartite(RR, JR, IR, mR, FR, TR, cR, RJ, kR, QR) : iR.sweepBipartite(RR, JR, cR, RJ, kR, QR, IR, mR, FR, TR))) return xR
          } else BR(NR++, oR + 1, cR, RJ, IR, mR, ER, -1 / 0, 1 / 0), BR(NR++, oR + 1, IR, mR, cR, RJ, 1 ^ ER, -1 / 0, 1 / 0);
          if (RJ < PR) {
            var JJ = fR(RR, oR, IR, mR, FR, TR),
              GJ = FR[DR * JJ + oR],
              yJ = aR(RR, oR, JJ, mR, FR, TR, GJ);
            if (yJ < mR && BR(NR++, oR, RJ, PR, yJ, mR, (4 | ER) + (YR ? 16 : 0), GJ, dR), IR < JJ && BR(NR++, oR, RJ, PR, IR, JJ, (2 | ER) + (YR ? 16 : 0), jR, GJ), JJ + 1 === yJ) {
              if (void 0 !== (xR = YR ? pR(RR, oR, JR, RJ, PR, kR, QR, JJ, FR, TR[JJ]) : lR(RR, oR, JR, ER, RJ, PR, kR, QR, JJ, FR, TR[JJ]))) return xR
            } else if (JJ < yJ) {
              var tJ;
              if (YR) {
                if (RJ < (tJ = UR(RR, oR, RJ, PR, kR, QR, GJ))) {
                  var uJ = aR(RR, oR, RJ, tJ, kR, QR, GJ);
                  if (oR === RR - 2) {
                    if (RJ < uJ && void 0 !== (xR = iR.sweepComplete(RR, JR, RJ, uJ, kR, QR, JJ, yJ, FR, TR))) return xR;
                    if (uJ < tJ && void 0 !== (xR = iR.sweepBipartite(RR, JR, uJ, tJ, kR, QR, JJ, yJ, FR, TR))) return xR
                  } else RJ < uJ && BR(NR++, oR + 1, RJ, uJ, JJ, yJ, 16, -1 / 0, 1 / 0), uJ < tJ && (BR(NR++, oR + 1, uJ, tJ, JJ, yJ, 0, -1 / 0, 1 / 0), BR(NR++, oR + 1, JJ, yJ, uJ, tJ, 1, -1 / 0, 1 / 0))
                }
              } else RJ < (tJ = ER ? WR(RR, oR, RJ, PR, kR, QR, GJ) : UR(RR, oR, RJ, PR, kR, QR, GJ)) && (oR === RR - 2 ? xR = ER ? iR.sweepBipartite(RR, JR, JJ, yJ, FR, TR, RJ, tJ, kR, QR) : iR.sweepBipartite(RR, JR, RJ, tJ, kR, QR, JJ, yJ, FR, TR) : (BR(NR++, oR + 1, RJ, tJ, JJ, yJ, ER, -1 / 0, 1 / 0), BR(NR++, oR + 1, JJ, yJ, RJ, tJ, 1 ^ ER, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var yR = GR(39438),
      tR = GR(39442),
      uR = GR(39465),
      ZR = uR.partial,
      qR = uR.full,
      iR = GR(39453),
      fR = GR(39470),
      VR = GR(39479),
      KR = 128,
      wR = 1 << 22,
      rR = 1 << 22,
      eR = VR("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      aR = VR("lo===p0", ["p0"]),
      LR = VR("lo<p0", ["p0"]),
      nR = VR("hi<=p0", ["p0"]),
      UR = VR("lo<=p0&&p0<=hi", ["p0"]),
      WR = VR("lo<p0&&p0<=hi", ["p0"]),
      AR = 6,
      CR = 2,
      XR = yR.mallocInt32(1024),
      MR = yR.mallocDouble(1024);

    function BR(RR, JR, GR, yR, tR, uR, ZR, qR, iR) {
      var fR = AR * RR;
      XR[fR] = JR, XR[fR + 1] = GR, XR[fR + 2] = yR, XR[fR + 3] = tR, XR[fR + 4] = uR, XR[fR + 5] = ZR;
      var VR = CR * RR;
      MR[VR] = qR, MR[VR + 1] = iR
    }

    function lR(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR, VR) {
      var KR = 2 * RR,
        wR = iR * KR,
        rR = fR[wR + JR];
      RR: for (var eR = tR, aR = tR * KR; eR < uR; ++eR, aR += KR) {
        var LR = ZR[aR + JR],
          nR = ZR[aR + JR + RR];
        if (!(rR < LR || nR < rR) && (!yR || rR !== LR)) {
          for (var UR, WR = qR[eR], AR = JR + 1; AR < RR; ++AR) {
            LR = ZR[aR + AR], nR = ZR[aR + AR + RR];
            var CR = fR[wR + AR],
              XR = fR[wR + AR + RR];
            if (nR < CR || XR < LR) continue RR
          }
          if (void 0 !== (UR = yR ? GR(VR, WR) : GR(WR, VR))) return UR
        }
      }
    }

    function pR(RR, JR, GR, yR, tR, uR, ZR, qR, iR, fR) {
      var VR = 2 * RR,
        KR = qR * VR,
        wR = iR[KR + JR];
      RR: for (var rR = yR, eR = yR * VR; rR < tR; ++rR, eR += VR) {
        var aR = ZR[rR];
        if (aR !== fR) {
          var LR = uR[eR + JR],
            nR = uR[eR + JR + RR];
          if (!(wR < LR || nR < wR)) {
            for (var UR = JR + 1; UR < RR; ++UR) {
              LR = uR[eR + UR], nR = uR[eR + UR + RR];
              var WR = iR[KR + UR],
                AR = iR[KR + UR + RR];
              if (nR < WR || AR < LR) continue RR
            }
            var CR = GR(aR, fR);
            if (void 0 !== CR) return CR
          }
        }
      }
    }
  },
  39470: (RR, JR, GR) => {
    RR.exports = function(RR, JR, GR, ZR, qR, iR) {
      if (ZR <= GR + 1) return GR;
      var fR = GR,
        VR = ZR,
        KR = ZR + GR >>> 1,
        wR = 2 * RR,
        rR = KR,
        eR = qR[wR * KR + JR];
      for (; fR < VR;) {
        if (VR - fR < tR) {
          uR(RR, JR, fR, VR, qR, iR), eR = qR[wR * KR + JR];
          break
        }
        var aR = VR - fR,
          LR = Math.random() * aR + fR | 0,
          nR = qR[wR * LR + JR],
          UR = Math.random() * aR + fR | 0,
          WR = qR[wR * UR + JR],
          AR = Math.random() * aR + fR | 0,
          CR = qR[wR * AR + JR];
        nR <= WR ? CR >= WR ? (rR = UR, eR = WR) : nR >= CR ? (rR = LR, eR = nR) : (rR = AR, eR = CR) : WR >= CR ? (rR = UR, eR = WR) : CR >= nR ? (rR = LR, eR = nR) : (rR = AR, eR = CR);
        for (var XR = wR * (VR - 1), MR = wR * rR, BR = 0; BR < wR; ++BR, ++XR, ++MR) {
          var lR = qR[XR];
          qR[XR] = qR[MR], qR[MR] = lR
        }
        var pR = iR[VR - 1];
        iR[VR - 1] = iR[rR], iR[rR] = pR;
        for (XR = wR * (VR - 1), MR = wR * (rR = yR(RR, JR, fR, VR - 1, qR, iR, eR)), BR = 0; BR < wR; ++BR, ++XR, ++MR) {
          lR = qR[XR];
          qR[XR] = qR[MR], qR[MR] = lR
        }
        pR = iR[VR - 1];
        if (iR[VR - 1] = iR[rR], iR[rR] = pR, KR < rR) {
          for (VR = rR - 1; fR < VR && qR[wR * (VR - 1) + JR] === eR;) VR -= 1;
          VR += 1
        } else {
          if (!(rR < KR)) break;
          for (fR = rR + 1; fR < VR && qR[wR * fR + JR] === eR;) fR += 1
        }
      }
      return yR(RR, JR, GR, KR, qR, iR, qR[wR * KR + JR])
    };
    var yR = GR(39479)("lo<p0", ["p0"]),
      tR = 8;

    function uR(RR, JR, GR, yR, tR, uR) {
      for (var ZR = 2 * RR, qR = ZR * (GR + 1) + JR, iR = GR + 1; iR < yR; ++iR, qR += ZR)
        for (var fR = tR[qR], VR = iR, KR = ZR * (iR - 1); VR > GR && tR[KR + JR] > fR; --VR, KR -= ZR) {
          for (var wR = KR, rR = KR + ZR, eR = 0; eR < ZR; ++eR, ++wR, ++rR) {
            var aR = tR[wR];
            tR[wR] = tR[rR], tR[rR] = aR
          }
          var LR = uR[VR];
          uR[VR] = uR[VR - 1], uR[VR - 1] = LR
        }
    }
  },
  39479: RR => {
    RR.exports = function(RR, GR) {
      var yR = "abcdef".split("").concat(GR),
        tR = [];
      RR.indexOf("lo") >= 0 && tR.push("lo=e[k+n]");
      RR.indexOf("hi") >= 0 && tR.push("hi=e[k+o]");
      return yR.push(JR.replace("_", tR.join()).replace("$", RR)), Function.apply(void 0, yR)
    };
    var JR = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  39458: RR => {
    RR.exports = function(RR, yR) {
      yR <= 4 * JR ? GR(0, yR - 1, RR) : fR(0, yR - 1, RR)
    };
    var JR = 32;

    function GR(RR, JR, GR) {
      for (var yR = 2 * (RR + 1), tR = RR + 1; tR <= JR; ++tR) {
        for (var uR = GR[yR++], ZR = GR[yR++], qR = tR, iR = yR - 2; qR-- > RR;) {
          var fR = GR[iR - 2],
            VR = GR[iR - 1];
          if (fR < uR) break;
          if (fR === uR && VR < ZR) break;
          GR[iR] = fR, GR[iR + 1] = VR, iR -= 2
        }
        GR[iR] = uR, GR[iR + 1] = ZR
      }
    }

    function yR(RR, JR, GR) {
      JR *= 2;
      var yR = GR[RR *= 2],
        tR = GR[RR + 1];
      GR[RR] = GR[JR], GR[RR + 1] = GR[JR + 1], GR[JR] = yR, GR[JR + 1] = tR
    }

    function tR(RR, JR, GR) {
      JR *= 2, GR[RR *= 2] = GR[JR], GR[RR + 1] = GR[JR + 1]
    }

    function uR(RR, JR, GR, yR) {
      JR *= 2, GR *= 2;
      var tR = yR[RR *= 2],
        uR = yR[RR + 1];
      yR[RR] = yR[JR], yR[RR + 1] = yR[JR + 1], yR[JR] = yR[GR], yR[JR + 1] = yR[GR + 1], yR[GR] = tR, yR[GR + 1] = uR
    }

    function ZR(RR, JR, GR, yR, tR) {
      JR *= 2, tR[RR *= 2] = tR[JR], tR[JR] = GR, tR[RR + 1] = tR[JR + 1], tR[JR + 1] = yR
    }

    function qR(RR, JR, GR) {
      JR *= 2;
      var yR = GR[RR *= 2],
        tR = GR[JR];
      return !(yR < tR) && (yR !== tR || GR[RR + 1] > GR[JR + 1])
    }

    function iR(RR, JR, GR, yR) {
      var tR = yR[RR *= 2];
      return tR < JR || tR === JR && yR[RR + 1] < GR
    }

    function fR(RR, VR, KR) {
      var wR = (VR - RR + 1) / 6 | 0,
        rR = RR + wR,
        eR = VR - wR,
        aR = RR + VR >> 1,
        LR = aR - wR,
        nR = aR + wR,
        UR = rR,
        WR = LR,
        AR = aR,
        CR = nR,
        XR = eR,
        MR = RR + 1,
        BR = VR - 1,
        lR = 0;
      qR(UR, WR, KR) && (lR = UR, UR = WR, WR = lR), qR(CR, XR, KR) && (lR = CR, CR = XR, XR = lR), qR(UR, AR, KR) && (lR = UR, UR = AR, AR = lR), qR(WR, AR, KR) && (lR = WR, WR = AR, AR = lR), qR(UR, CR, KR) && (lR = UR, UR = CR, CR = lR), qR(AR, CR, KR) && (lR = AR, AR = CR, CR = lR), qR(WR, XR, KR) && (lR = WR, WR = XR, XR = lR), qR(WR, AR, KR) && (lR = WR, WR = AR, AR = lR), qR(CR, XR, KR) && (lR = CR, CR = XR, XR = lR);
      for (var pR = KR[2 * WR], gR = KR[2 * WR + 1], bR = KR[2 * CR], vR = KR[2 * CR + 1], OR = 2 * UR, xR = 2 * AR, NR = 2 * XR, DR = 2 * rR, HR = 2 * aR, oR = 2 * eR, cR = 0; cR < 2; ++cR) {
        var PR = KR[OR + cR],
          IR = KR[xR + cR],
          mR = KR[NR + cR];
        KR[DR + cR] = PR, KR[HR + cR] = IR, KR[oR + cR] = mR
      }
      tR(LR, RR, KR), tR(nR, VR, KR);
      for (var zR = MR; zR <= BR; ++zR)
        if (iR(zR, pR, gR, KR)) zR !== MR && yR(zR, MR, KR), ++MR;
        else if (!iR(zR, bR, vR, KR))
        for (;;) {
          if (iR(BR, bR, vR, KR)) {
            iR(BR, pR, gR, KR) ? (uR(zR, MR, BR, KR), ++MR, --BR) : (yR(zR, BR, KR), --BR);
            break
          }
          if (--BR < zR) break
        }
      ZR(RR, MR - 1, pR, gR, KR), ZR(VR, BR + 1, bR, vR, KR), MR - 2 - RR <= JR ? GR(RR, MR - 2, KR) : fR(RR, MR - 2, KR), VR - (BR + 2) <= JR ? GR(BR + 2, VR, KR) : fR(BR + 2, VR, KR), BR - MR <= JR ? GR(MR, BR, KR) : fR(MR, BR, KR)
    }
  },
  39453: (RR, JR, GR) => {
    RR.exports = {
      init: function(RR) {
        var JR = tR.nextPow2(RR);
        iR.length < JR && (yR.free(iR), iR = yR.mallocInt32(JR));
        fR.length < JR && (yR.free(fR), fR = yR.mallocInt32(JR));
        VR.length < JR && (yR.free(VR), VR = yR.mallocInt32(JR));
        KR.length < JR && (yR.free(KR), KR = yR.mallocInt32(JR));
        wR.length < JR && (yR.free(wR), wR = yR.mallocInt32(JR));
        rR.length < JR && (yR.free(rR), rR = yR.mallocInt32(JR));
        var GR = 8 * JR;
        eR.length < GR && (yR.free(eR), eR = yR.mallocDouble(GR))
      },
      sweepBipartite: function(RR, JR, GR, yR, tR, qR, wR, rR, nR, UR) {
        for (var WR = 0, AR = 2 * RR, CR = RR - 1, XR = AR - 1, MR = GR; MR < yR; ++MR) {
          var BR = qR[MR],
            lR = AR * MR;
          eR[WR++] = tR[lR + CR], eR[WR++] = -(BR + 1), eR[WR++] = tR[lR + XR], eR[WR++] = BR
        }
        for (MR = wR; MR < rR; ++MR) {
          BR = UR[MR] + ZR;
          var pR = AR * MR;
          eR[WR++] = nR[pR + CR], eR[WR++] = -BR, eR[WR++] = nR[pR + XR], eR[WR++] = BR
        }
        var gR = WR >>> 1;
        uR(eR, gR);
        var bR = 0,
          vR = 0;
        for (MR = 0; MR < gR; ++MR) {
          var OR = 0 | eR[2 * MR + 1];
          if (OR >= ZR) aR(VR, KR, vR--, OR = OR - ZR | 0);
          else if (OR >= 0) aR(iR, fR, bR--, OR);
          else if (OR <= -ZR) {
            OR = -OR - ZR | 0;
            for (var xR = 0; xR < bR; ++xR) {
              if (void 0 !== (NR = JR(iR[xR], OR))) return NR
            }
            LR(VR, KR, vR++, OR)
          } else {
            OR = -OR - 1 | 0;
            for (xR = 0; xR < vR; ++xR) {
              var NR;
              if (void 0 !== (NR = JR(OR, VR[xR]))) return NR
            }
            LR(iR, fR, bR++, OR)
          }
        }
      },
      sweepComplete: function(RR, JR, GR, yR, tR, ZR, qR, nR, UR, WR) {
        for (var AR = 0, CR = 2 * RR, XR = RR - 1, MR = CR - 1, BR = GR; BR < yR; ++BR) {
          var lR = ZR[BR] + 1 << 1,
            pR = CR * BR;
          eR[AR++] = tR[pR + XR], eR[AR++] = -lR, eR[AR++] = tR[pR + MR], eR[AR++] = lR
        }
        for (BR = qR; BR < nR; ++BR) {
          lR = WR[BR] + 1 << 1;
          var gR = CR * BR;
          eR[AR++] = UR[gR + XR], eR[AR++] = 1 | -lR, eR[AR++] = UR[gR + MR], eR[AR++] = 1 | lR
        }
        var bR = AR >>> 1;
        uR(eR, bR);
        var vR = 0,
          OR = 0,
          xR = 0;
        for (BR = 0; BR < bR; ++BR) {
          var NR = 0 | eR[2 * BR + 1],
            DR = 1 & NR;
          if (BR < bR - 1 && NR >> 1 === eR[2 * BR + 3] >> 1 && (DR = 2, BR += 1), NR < 0) {
            for (var HR = -(NR >> 1) - 1, oR = 0; oR < xR; ++oR) {
              if (void 0 !== (cR = JR(wR[oR], HR))) return cR
            }
            if (0 !== DR)
              for (oR = 0; oR < vR; ++oR) {
                if (void 0 !== (cR = JR(iR[oR], HR))) return cR
              }
            if (1 !== DR)
              for (oR = 0; oR < OR; ++oR) {
                var cR;
                if (void 0 !== (cR = JR(VR[oR], HR))) return cR
              }
            0 === DR ? LR(iR, fR, vR++, HR) : 1 === DR ? LR(VR, KR, OR++, HR) : 2 === DR && LR(wR, rR, xR++, HR)
          } else {
            HR = (NR >> 1) - 1;
            0 === DR ? aR(iR, fR, vR--, HR) : 1 === DR ? aR(VR, KR, OR--, HR) : 2 === DR && aR(wR, rR, xR--, HR)
          }
        }
      },
      scanBipartite: function(RR, JR, GR, yR, tR, qR, VR, KR, wR, rR, nR, UR) {
        var WR = 0,
          AR = 2 * RR,
          CR = JR,
          XR = JR + RR,
          MR = 1,
          BR = 1;
        yR ? BR = ZR : MR = ZR;
        for (var lR = tR; lR < qR; ++lR) {
          var pR = lR + MR,
            gR = AR * lR;
          eR[WR++] = VR[gR + CR], eR[WR++] = -pR, eR[WR++] = VR[gR + XR], eR[WR++] = pR
        }
        for (lR = wR; lR < rR; ++lR) {
          pR = lR + BR;
          var bR = AR * lR;
          eR[WR++] = nR[bR + CR], eR[WR++] = -pR
        }
        var vR = WR >>> 1;
        uR(eR, vR);
        var OR = 0;
        for (lR = 0; lR < vR; ++lR) {
          var xR = 0 | eR[2 * lR + 1];
          if (xR < 0) {
            var NR = !1;
            if ((pR = -xR) >= ZR ? (NR = !yR, pR -= ZR) : (NR = !!yR, pR -= 1), NR) LR(iR, fR, OR++, pR);
            else {
              var DR = UR[pR],
                HR = AR * pR,
                oR = nR[HR + JR + 1],
                cR = nR[HR + JR + 1 + RR];
              RR: for (var PR = 0; PR < OR; ++PR) {
                var IR = iR[PR],
                  mR = AR * IR;
                if (!(cR < VR[mR + JR + 1] || VR[mR + JR + 1 + RR] < oR)) {
                  for (var zR = JR + 2; zR < RR; ++zR)
                    if (nR[HR + zR + RR] < VR[mR + zR] || VR[mR + zR + RR] < nR[HR + zR]) continue RR;
                  var SR, jR = KR[IR];
                  if (void 0 !== (SR = yR ? GR(DR, jR) : GR(jR, DR))) return SR
                }
              }
            }
          } else aR(iR, fR, OR--, xR - MR)
        }
      },
      scanComplete: function(RR, JR, GR, yR, tR, qR, fR, VR, KR, wR, rR) {
        for (var aR = 0, LR = 2 * RR, nR = JR, UR = JR + RR, WR = yR; WR < tR; ++WR) {
          var AR = WR + ZR,
            CR = LR * WR;
          eR[aR++] = qR[CR + nR], eR[aR++] = -AR, eR[aR++] = qR[CR + UR], eR[aR++] = AR
        }
        for (WR = VR; WR < KR; ++WR) {
          AR = WR + 1;
          var XR = LR * WR;
          eR[aR++] = wR[XR + nR], eR[aR++] = -AR
        }
        var MR = aR >>> 1;
        uR(eR, MR);
        var BR = 0;
        for (WR = 0; WR < MR; ++WR) {
          var lR = 0 | eR[2 * WR + 1];
          if (lR < 0) {
            if ((AR = -lR) >= ZR) iR[BR++] = AR - ZR;
            else {
              var pR = rR[AR -= 1],
                gR = LR * AR,
                bR = wR[gR + JR + 1],
                vR = wR[gR + JR + 1 + RR];
              RR: for (var OR = 0; OR < BR; ++OR) {
                var xR = iR[OR],
                  NR = fR[xR];
                if (NR === pR) break;
                var DR = LR * xR;
                if (!(vR < qR[DR + JR + 1] || qR[DR + JR + 1 + RR] < bR)) {
                  for (var HR = JR + 2; HR < RR; ++HR)
                    if (wR[gR + HR + RR] < qR[DR + HR] || qR[DR + HR + RR] < wR[gR + HR]) continue RR;
                  var oR = GR(NR, pR);
                  if (void 0 !== oR) return oR
                }
              }
            }
          } else {
            for (AR = lR - ZR, OR = BR - 1; OR >= 0; --OR)
              if (iR[OR] === AR) {
                for (HR = OR + 1; HR < BR; ++HR) iR[HR - 1] = iR[HR];
                break
              }-- BR
          }
        }
      }
    };
    var yR = GR(39438),
      tR = GR(39442),
      uR = GR(39458),
      ZR = 1 << 28,
      qR = 1024,
      iR = yR.mallocInt32(qR),
      fR = yR.mallocInt32(qR),
      VR = yR.mallocInt32(qR),
      KR = yR.mallocInt32(qR),
      wR = yR.mallocInt32(qR),
      rR = yR.mallocInt32(qR),
      eR = yR.mallocDouble(8192);

    function aR(RR, JR, GR, yR) {
      var tR = JR[yR],
        uR = RR[GR - 1];
      RR[tR] = uR, JR[uR] = tR
    }

    function LR(RR, JR, GR, yR) {
      RR[GR] = yR, JR[yR] = GR
    }
  },
  39448: RR => {
    function JR(RR, GR, yR) {
      var tR = 0 | RR[yR];
      if (tR <= 0) return [];
      var uR, ZR = new Array(tR);
      if (yR === RR.length - 1)
        for (uR = 0; uR < tR; ++uR) ZR[uR] = GR;
      else
        for (uR = 0; uR < tR; ++uR) ZR[uR] = JR(RR, GR, yR + 1);
      return ZR
    }
    RR.exports = function(RR, GR) {
      switch ("undefined" === typeof GR && (GR = 0), typeof RR) {
        case "number":
          if (RR > 0) return function(RR, JR) {
            var GR, yR;
            for (GR = new Array(RR), yR = 0; yR < RR; ++yR) GR[yR] = JR;
            return GR
          }(0 | RR, GR);
          break;
        case "object":
          if ("number" === typeof RR.length) return JR(RR, GR, 0)
      }
      return []
    }
  },
  39393: (RR, JR, GR) => {
    RR.exports = function() {
      var RR = this;
      this.components = {}, this.comps = this.components;
      var JR = this.components,
        GR = 1,
        tR = {},
        uR = [],
        ZR = [],
        qR = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function iR(RR, GR) {
        var yR = JR[GR],
          uR = tR[GR],
          ZR = uR.hash[RR];
        ZR && (uR.remove(RR), yR.eD && (yR.multi ? (ZR.forEach((JR => {
          JR && yR.eD(RR, JR)
        })), ZR.length = 0) : yR.eD(RR, ZR)), qR.removals.push(uR), fR())
      }

      function fR() {
        qR.timeout || (qR.timeout = !0, setTimeout(VR, 1))
      }

      function VR() {
        qR.timeout = !1, KR()
      }

      function KR() {
        qR.multiComps.length && function(RR) {
          for (var JR = 0; JR < RR.length; JR++) {
            var {
              entID: GR,
              data: yR
            } = RR[JR], tR = yR.hash[GR];
            if (tR) {
              for (var uR = 0; uR < tR.length; uR++) tR[uR] || (tR.splice(uR, 1), uR--);
              0 === tR.length && (yR.remove(GR), qR.removals.push(yR))
            }
          }
          RR.length = 0
        }(qR.multiComps), qR.removals.length && function(RR) {
          for (var JR = 0; JR < RR.length; JR++) {
            RR[JR].flush()
          }
          RR.length = 0
        }(qR.removals)
      }
      this.Ha = tR, this._systems = uR, this._renderSystems = ZR, this.Z6 = function(JR) {
        var yR = GR++;
        return Array.isArray(JR) && JR.forEach((JR => RR.Jm(yR, JR))), yR
      }, this.deleteEntity = function(JR) {
        return Object.keys(tR).forEach((RR => {
          tR[RR].hash[JR] && iR(JR, RR)
        })), RR
      }, this.GyR = function(RR) {
        if (!RR) throw new Error("Missing component definition");
        var GR = RR.name;
        if (!GR) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof GR) throw new Error("Component name must be a string.");
        if ("" === GR) throw new Error("Component name must be a non-empty string.");
        if (tR[GR]) throw new Error(`Component ${GR} already exists.`);
        var qR = {};
        return qR.name = GR, qR.multi = !!RR.multi, qR.order = isNaN(RR.order) ? 99 : RR.order, qR.stateConstructor = RR.stateConstructor || null, qR.state = RR.state || {}, qR.mC = RR.mC || null, qR.eD = RR.eD || null, qR.system = RR.system || null, qR.YC = RR.YC || null, JR[GR] = qR, tR[GR] = new yR, tR[GR]._pendingMultiCleanup = !1, tR[GR]._multiCleanupIDs = qR.multi ? [] : null, qR.system && (uR.push(GR), uR.sort(((RR, GR) => JR[RR].order - JR[GR].order))), qR.YC && (ZR.push(GR), ZR.sort(((RR, GR) => JR[RR].order - JR[GR].order))), GR
      }, this.overwriteComponent = function(RR, GR) {
        var yR = JR[RR];
        if (!yR) throw new Error(`Unknown component: ${RR}`);
        if (!GR) throw new Error("Missing component definition");
        if (yR.name !== GR.name) throw new Error("Overwriting component must use the same name property.");
        var qR = {};
        qR.name = RR, qR.multi = !!GR.multi, qR.order = isNaN(GR.order) ? 99 : GR.order, qR.state = GR.state || {}, qR.mC = GR.mC || null, qR.eD = GR.eD || null, qR.system = GR.system || null, qR.YC = GR.YC || null, JR[RR] = qR, tR[RR]._pendingMultiCleanup = !1, tR[RR]._multiCleanupIDs = qR.multi ? [] : null;
        var iR = uR.indexOf(RR);
        qR.system && iR < 0 && uR.push(RR), !qR.system && iR >= 0 && uR.splice(iR, 1), uR.sort(((RR, GR) => JR[RR].order - JR[GR].order));
        var fR = ZR.indexOf(RR);
        qR.YC && fR < 0 && ZR.push(RR), !qR.YC && fR >= 0 && ZR.splice(fR, 1), ZR.sort(((RR, GR) => JR[RR].order - JR[GR].order));
        var VR = qR.state;
        return this.mI(RR).forEach((RR => {
          for (var JR in VR) JR in RR || (RR[JR] = VR[JR]);
          qR.mC && qR.mC(RR.Rm, RR)
        })), RR
      }, this.deleteComponent = function(GR) {
        var yR = tR[GR];
        if (!yR) throw new Error(`Unknown component: ${GR}`);
        yR.flush(), yR.list.forEach((RR => {
          RR && iR(RR.Rm || RR[0].Rm, GR)
        }));
        var qR = uR.indexOf(GR),
          fR = ZR.indexOf(GR);
        return qR > -1 && uR.splice(qR, 1), fR > -1 && ZR.splice(fR, 1), tR[GR].dispose(), delete tR[GR], delete JR[GR], RR
      }, this.Jm = function(RR, GR, yR) {
        var uR, ZR = JR[GR],
          qR = tR[GR];
        if (!qR) throw new Error(`Unknown component: ${GR}.`);
        if (qR.hash[RR] && !ZR.multi) throw new Error(`Entity ${RR} already has component: ${GR}.`);
        if (ZR.stateConstructor) {
          if (!(uR = new ZR.stateConstructor).hasOwnProperty("Rm")) throw new Error(`Component ${ZR.name} stateConstructor type does not have property __id`);
          Object.assign(uR, ZR.state, yR)
        } else uR = {
          Rm: RR,
          ...ZR.state,
          ...yR
        };
        if (uR.Rm = RR, ZR.multi) {
          var iR = qR.hash[RR];
          iR || (iR = [], qR.add(RR, iR)), iR.push(uR)
        } else qR.add(RR, uR);
        return ZR.mC && ZR.mC(RR, uR), this
      }, this.RGR = function(RR, JR) {
        var GR = tR[JR];
        if (!GR) throw new Error(`Unknown component: ${JR}.`);
        return !!GR.hash[RR]
      }, this.Zm = function(JR, GR) {
        if (!tR[GR]) throw new Error(`Unknown component: ${GR}.`);
        return iR(JR, GR), RR
      }, this.getState = function(RR, JR) {
        var GR = tR[JR];
        if (!GR) throw new Error(`Unknown component: ${JR}.`);
        return GR.hash[RR]
      }, this.mI = function(RR) {
        var JR = tR[RR];
        if (!JR) throw new Error(`Unknown component: ${RR}.`);
        return KR(), JR.list
      }, this.HGR = function(RR) {
        if (!tR[RR]) throw new Error(`Unknown component: ${RR}.`);
        var JR = tR[RR].hash;
        return RR => JR[RR]
      }, this.zGR = function(RR) {
        if (!tR[RR]) throw new Error(`Unknown component: ${RR}.`);
        var JR = tR[RR].hash;
        return RR => !!JR[RR]
      }, this.gK = function(GR) {
        KR();
        for (var yR = 0; yR < uR.length; yR++) {
          var ZR = uR[yR],
            qR = JR[ZR],
            iR = tR[ZR];
          qR.system(GR, iR.list), KR()
        }
        return RR
      }, this.render = function(GR) {
        KR();
        for (var yR = 0; yR < ZR.length; yR++) {
          var uR = ZR[yR],
            qR = JR[uR],
            iR = tR[uR];
          qR.YC(GR, iR.list), KR()
        }
        return RR
      }, this.removeMultiComponent = function(GR, yR, uR) {
        var ZR = JR[yR],
          iR = tR[yR];
        if (!iR) throw new Error(`Unknown component: ${yR}.`);
        if (!ZR.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(RR, JR, GR, yR) {
          var tR = GR.hash[RR];
          if (tR) {
            var uR = tR[yR];
            uR && (tR[yR] = null, JR.eD && JR.eD(RR, uR), qR.multiComps.push({
              entID: RR,
              data: GR
            }), fR())
          }
        }(GR, ZR, iR, uR), RR
      }
    };
    var yR = GR(39402)
  },
  39402: RR => {
    function JR(RR, JR) {
      var GR = RR._map[JR];
      if (delete RR.hash[JR], delete RR._map[JR], GR === RR.list.length - 1) RR.list.pop(), RR._idList.pop();
      else {
        var yR = RR.list.pop();
        RR.list[GR] = yR;
        var tR = RR._idList.pop();
        RR._idList[GR] = tR, RR._map[tR] = GR
      }
    }
    RR.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(RR, JR) {
        if ("number" === typeof this._map[RR]) {
          var GR = this._map[RR];
          this.hash[RR] = JR, this.list[GR] = JR, this._idList[GR] = RR
        } else this._map[RR] = this.list.length, this.hash[RR] = JR, this.list.push(JR), this._idList.push(RR)
      }
      remove(RR) {
        var JR = this._map[RR];
        this.hash[RR] = null, this.list[JR] = null, this._pendingRemovals.push(RR)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var RR = 0; RR < this._pendingRemovals.length; RR++) {
          var GR = this._pendingRemovals[RR];
          null === this.hash[GR] && JR(this, GR)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  39214: (RR, JR, GR) => {
    RR = GR.nmd(RR);
    var yR = "__lodash_hash_undefined__",
      tR = 9007199254740991,
      uR = "[object Arguments]",
      ZR = "[object Boolean]",
      qR = "[object Date]",
      iR = "[object Function]",
      fR = "[object GeneratorFunction]",
      VR = "[object Map]",
      KR = "[object Number]",
      wR = "[object Object]",
      rR = "[object Promise]",
      eR = "[object RegExp]",
      aR = "[object Set]",
      LR = "[object String]",
      nR = "[object Symbol]",
      UR = "[object WeakMap]",
      WR = "[object ArrayBuffer]",
      AR = "[object DataView]",
      CR = "[object Float32Array]",
      XR = "[object Float64Array]",
      MR = "[object Int8Array]",
      BR = "[object Int16Array]",
      lR = "[object Int32Array]",
      pR = "[object Uint8Array]",
      gR = "[object Uint8ClampedArray]",
      bR = "[object Uint16Array]",
      vR = "[object Uint32Array]",
      OR = /\w*$/,
      xR = /^\[object .+?Constructor\]$/,
      NR = /^(?:0|[1-9]\d*)$/,
      DR = {};
    DR[uR] = DR["[object Array]"] = DR[WR] = DR[AR] = DR[ZR] = DR[qR] = DR[CR] = DR[XR] = DR[MR] = DR[BR] = DR[lR] = DR[VR] = DR[KR] = DR[wR] = DR[eR] = DR[aR] = DR[LR] = DR[nR] = DR[pR] = DR[gR] = DR[bR] = DR[vR] = !0, DR["[object Error]"] = DR[iR] = DR[UR] = !1;
    var HR = "object" == typeof GR.g && GR.g && GR.g.Object === Object && GR.g,
      oR = "object" == typeof self && self && self.Object === Object && self,
      cR = HR || oR || Function("return this")(),
      PR = JR && !JR.nodeType && JR,
      IR = PR && RR && !RR.nodeType && RR,
      mR = IR && IR.exports === PR;

    function zR(RR, JR) {
      return RR.set(JR[0], JR[1]), RR
    }

    function SR(RR, JR) {
      return RR.add(JR), RR
    }

    function jR(RR, JR, GR, yR) {
      var tR = -1,
        uR = RR ? RR.length : 0;
      for (yR && uR && (GR = RR[++tR]); ++tR < uR;) GR = JR(GR, RR[tR], tR, RR);
      return GR
    }

    function dR(RR) {
      var JR = !1;
      if (null != RR && "function" != typeof RR.toString) try {
        JR = !!(RR + "")
      } catch (GR) {}
      return JR
    }

    function ER(RR) {
      var JR = -1,
        GR = Array(RR.size);
      return RR.forEach((function(RR, yR) {
        GR[++JR] = [yR, RR]
      })), GR
    }

    function YR(RR, JR) {
      return function(GR) {
        return RR(JR(GR))
      }
    }

    function kR(RR) {
      var JR = -1,
        GR = Array(RR.size);
      return RR.forEach((function(RR) {
        GR[++JR] = RR
      })), GR
    }
    var QR = Array.prototype,
      FR = Function.prototype,
      TR = Object.prototype,
      sR = cR["__core-js_shared__"],
      hR = function() {
        var RR = /[^.]+$/.exec(sR && sR.keys && sR.keys.IE_PROTO || "");
        return RR ? "Symbol(src)_1." + RR : ""
      }(),
      RJ = FR.toString,
      JJ = TR.hasOwnProperty,
      GJ = TR.toString,
      yJ = RegExp("^" + RJ.call(JJ).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      tJ = mR ? cR.GK : void 0,
      uJ = cR.Symbol,
      ZJ = cR.Uint8Array,
      qJ = YR(Object.getPrototypeOf, Object),
      iJ = Object.create,
      fJ = TR.propertyIsEnumerable,
      VJ = QR.splice,
      KJ = Object.getOwnPropertySymbols,
      wJ = tJ ? tJ.isBuffer : void 0,
      rJ = YR(Object.keys, Object),
      eJ = mJ(cR, "DataView"),
      aJ = mJ(cR, "Map"),
      LJ = mJ(cR, "Promise"),
      nJ = mJ(cR, "Set"),
      UJ = mJ(cR, "WeakMap"),
      WJ = mJ(Object, "create"),
      AJ = EJ(eJ),
      CJ = EJ(aJ),
      XJ = EJ(LJ),
      MJ = EJ(nJ),
      BJ = EJ(UJ),
      lJ = uJ ? uJ.prototype : void 0,
      pJ = lJ ? lJ.valueOf : void 0;

    function gJ(RR) {
      var JR = -1,
        GR = RR ? RR.length : 0;
      for (this.clear(); ++JR < GR;) {
        var yR = RR[JR];
        this.set(yR[0], yR[1])
      }
    }

    function bJ(RR) {
      var JR = -1,
        GR = RR ? RR.length : 0;
      for (this.clear(); ++JR < GR;) {
        var yR = RR[JR];
        this.set(yR[0], yR[1])
      }
    }

    function vJ(RR) {
      var JR = -1,
        GR = RR ? RR.length : 0;
      for (this.clear(); ++JR < GR;) {
        var yR = RR[JR];
        this.set(yR[0], yR[1])
      }
    }

    function OJ(RR) {
      this.__data__ = new bJ(RR)
    }

    function xJ(RR, JR) {
      var GR = kJ(RR) || function(RR) {
          return function(RR) {
            return function(RR) {
              return !!RR && "object" == typeof RR
            }(RR) && QJ(RR)
          }(RR) && JJ.call(RR, "callee") && (!fJ.call(RR, "callee") || GJ.call(RR) == uR)
        }(RR) ? function(RR, JR) {
          for (var GR = -1, yR = Array(RR); ++GR < RR;) yR[GR] = JR(GR);
          return yR
        }(RR.length, String) : [],
        yR = GR.length,
        tR = !!yR;
      for (var ZR in RR) !JR && !JJ.call(RR, ZR) || tR && ("length" == ZR || jJ(ZR, yR)) || GR.push(ZR);
      return GR
    }

    function NJ(RR, JR, GR) {
      var yR = RR[JR];
      JJ.call(RR, JR) && YJ(yR, GR) && (void 0 !== GR || JR in RR) || (RR[JR] = GR)
    }

    function DJ(RR, JR) {
      for (var GR = RR.length; GR--;)
        if (YJ(RR[GR][0], JR)) return GR;
      return -1
    }

    function HJ(RR, JR, GR, yR, tR, rR, UR) {
      var xR;
      if (yR && (xR = rR ? yR(RR, tR, rR, UR) : yR(RR)), void 0 !== xR) return xR;
      if (!sJ(RR)) return RR;
      var NR = kJ(RR);
      if (NR) {
        if (xR = function(RR) {
            var JR = RR.length,
              GR = RR.constructor(JR);
            JR && "string" == typeof RR[0] && JJ.call(RR, "index") && (GR.index = RR.index, GR.input = RR.input);
            return GR
          }(RR), !JR) return function(RR, JR) {
          var GR = -1,
            yR = RR.length;
          JR || (JR = Array(yR));
          for (; ++GR < yR;) JR[GR] = RR[GR];
          return JR
        }(RR, xR)
      } else {
        var HR = SJ(RR),
          oR = HR == iR || HR == fR;
        if (FJ(RR)) return function(RR, JR) {
          if (JR) return RR.slice();
          var GR = new RR.constructor(RR.length);
          return RR.copy(GR), GR
        }(RR, JR);
        if (HR == wR || HR == uR || oR && !rR) {
          if (dR(RR)) return rR ? RR : {};
          if (xR = function(RR) {
              return "function" != typeof RR.constructor || dJ(RR) ? {} : (JR = qJ(RR), sJ(JR) ? iJ(JR) : {});
              var JR
            }(oR ? {} : RR), !JR) return function(RR, JR) {
            return PJ(RR, zJ(RR), JR)
          }(RR, function(RR, JR) {
            return RR && PJ(JR, hJ(JR), RR)
          }(xR, RR))
        } else {
          if (!DR[HR]) return rR ? RR : {};
          xR = function(RR, JR, GR, yR) {
            var tR = RR.constructor;
            switch (JR) {
              case WR:
                return cJ(RR);
              case ZR:
              case qR:
                return new tR(+RR);
              case AR:
                return function(RR, JR) {
                  var GR = JR ? cJ(RR.buffer) : RR.buffer;
                  return new RR.constructor(GR, RR.byteOffset, RR.byteLength)
                }(RR, yR);
              case CR:
              case XR:
              case MR:
              case BR:
              case lR:
              case pR:
              case gR:
              case bR:
              case vR:
                return function(RR, JR) {
                  var GR = JR ? cJ(RR.buffer) : RR.buffer;
                  return new RR.constructor(GR, RR.byteOffset, RR.length)
                }(RR, yR);
              case VR:
                return function(RR, JR, GR) {
                  var yR = JR ? GR(ER(RR), !0) : ER(RR);
                  return jR(yR, zR, new RR.constructor)
                }(RR, yR, GR);
              case KR:
              case LR:
                return new tR(RR);
              case eR:
                return function(RR) {
                  var JR = new RR.constructor(RR.source, OR.exec(RR));
                  return JR.lastIndex = RR.lastIndex, JR
                }(RR);
              case aR:
                return function(RR, JR, GR) {
                  var yR = JR ? GR(kR(RR), !0) : kR(RR);
                  return jR(yR, SR, new RR.constructor)
                }(RR, yR, GR);
              case nR:
                return uR = RR, pJ ? Object(pJ.call(uR)) : {}
            }
            var uR
          }(RR, HR, HJ, JR)
        }
      }
      UR || (UR = new OJ);
      var cR = UR.get(RR);
      if (cR) return cR;
      if (UR.set(RR, xR), !NR) var PR = GR ? function(RR) {
        return function(RR, JR, GR) {
          var yR = JR(RR);
          return kJ(RR) ? yR : function(RR, JR) {
            for (var GR = -1, yR = JR.length, tR = RR.length; ++GR < yR;) RR[tR + GR] = JR[GR];
            return RR
          }(yR, GR(RR))
        }(RR, hJ, zJ)
      }(RR) : hJ(RR);
      return function(RR, JR) {
        for (var GR = -1, yR = RR ? RR.length : 0; ++GR < yR && !1 !== JR(RR[GR], GR, RR););
      }(PR || RR, (function(tR, uR) {
        PR && (tR = RR[uR = tR]), NJ(xR, uR, HJ(tR, JR, GR, yR, uR, RR, UR))
      })), xR
    }

    function oJ(RR) {
      return !(!sJ(RR) || (JR = RR, hR && hR in JR)) && (TJ(RR) || dR(RR) ? yJ : xR).test(EJ(RR));
      var JR
    }

    function cJ(RR) {
      var JR = new RR.constructor(RR.byteLength);
      return new ZJ(JR).set(new ZJ(RR)), JR
    }

    function PJ(RR, JR, GR, yR) {
      GR || (GR = {});
      for (var tR = -1, uR = JR.length; ++tR < uR;) {
        var ZR = JR[tR],
          qR = yR ? yR(GR[ZR], RR[ZR], ZR, GR, RR) : void 0;
        NJ(GR, ZR, void 0 === qR ? RR[ZR] : qR)
      }
      return GR
    }

    function IJ(RR, JR) {
      var GR = RR.__data__;
      return function(RR) {
        var JR = typeof RR;
        return "string" == JR || "number" == JR || "symbol" == JR || "boolean" == JR ? "__proto__" !== RR : null === RR
      }(JR) ? GR["string" == typeof JR ? "string" : "hash"] : GR.map
    }

    function mJ(RR, JR) {
      var GR = function(RR, JR) {
        return null == RR ? void 0 : RR[JR]
      }(RR, JR);
      return oJ(GR) ? GR : void 0
    }
    gJ.prototype.clear = function() {
      this.__data__ = WJ ? WJ(null) : {}
    }, gJ.prototype.delete = function(RR) {
      return this.has(RR) && delete this.__data__[RR]
    }, gJ.prototype.get = function(RR) {
      var JR = this.__data__;
      if (WJ) {
        var GR = JR[RR];
        return GR === yR ? void 0 : GR
      }
      return JJ.call(JR, RR) ? JR[RR] : void 0
    }, gJ.prototype.has = function(RR) {
      var JR = this.__data__;
      return WJ ? void 0 !== JR[RR] : JJ.call(JR, RR)
    }, gJ.prototype.set = function(RR, JR) {
      return this.__data__[RR] = WJ && void 0 === JR ? yR : JR, this
    }, bJ.prototype.clear = function() {
      this.__data__ = []
    }, bJ.prototype.delete = function(RR) {
      var JR = this.__data__,
        GR = DJ(JR, RR);
      return !(GR < 0) && (GR == JR.length - 1 ? JR.pop() : VJ.call(JR, GR, 1), !0)
    }, bJ.prototype.get = function(RR) {
      var JR = this.__data__,
        GR = DJ(JR, RR);
      return GR < 0 ? void 0 : JR[GR][1]
    }, bJ.prototype.has = function(RR) {
      return DJ(this.__data__, RR) > -1
    }, bJ.prototype.set = function(RR, JR) {
      var GR = this.__data__,
        yR = DJ(GR, RR);
      return yR < 0 ? GR.push([RR, JR]) : GR[yR][1] = JR, this
    }, vJ.prototype.clear = function() {
      this.__data__ = {
        hash: new gJ,
        map: new(aJ || bJ),
        string: new gJ
      }
    }, vJ.prototype.delete = function(RR) {
      return IJ(this, RR).delete(RR)
    }, vJ.prototype.get = function(RR) {
      return IJ(this, RR).get(RR)
    }, vJ.prototype.has = function(RR) {
      return IJ(this, RR).has(RR)
    }, vJ.prototype.set = function(RR, JR) {
      return IJ(this, RR).set(RR, JR), this
    }, OJ.prototype.clear = function() {
      this.__data__ = new bJ
    }, OJ.prototype.delete = function(RR) {
      return this.__data__.delete(RR)
    }, OJ.prototype.get = function(RR) {
      return this.__data__.get(RR)
    }, OJ.prototype.has = function(RR) {
      return this.__data__.has(RR)
    }, OJ.prototype.set = function(RR, JR) {
      var GR = this.__data__;
      if (GR instanceof bJ) {
        var yR = GR.__data__;
        if (!aJ || yR.length < 199) return yR.push([RR, JR]), this;
        GR = this.__data__ = new vJ(yR)
      }
      return GR.set(RR, JR), this
    };
    var zJ = KJ ? YR(KJ, Object) : function() {
        return []
      },
      SJ = function(RR) {
        return GJ.call(RR)
      };

    function jJ(RR, JR) {
      return !!(JR = null == JR ? tR : JR) && ("number" == typeof RR || NR.test(RR)) && RR > -1 && RR % 1 == 0 && RR < JR
    }

    function dJ(RR) {
      var JR = RR && RR.constructor;
      return RR === ("function" == typeof JR && JR.prototype || TR)
    }

    function EJ(RR) {
      if (null != RR) {
        try {
          return RJ.call(RR)
        } catch (JR) {}
        try {
          return RR + ""
        } catch (JR) {}
      }
      return ""
    }

    function YJ(RR, JR) {
      return RR === JR || RR !== RR && JR !== JR
    }(eJ && SJ(new eJ(new ArrayBuffer(1))) != AR || aJ && SJ(new aJ) != VR || LJ && SJ(LJ.resolve()) != rR || nJ && SJ(new nJ) != aR || UJ && SJ(new UJ) != UR) && (SJ = function(RR) {
      var JR = GJ.call(RR),
        GR = JR == wR ? RR.constructor : void 0,
        yR = GR ? EJ(GR) : void 0;
      if (yR) switch (yR) {
        case AJ:
          return AR;
        case CJ:
          return VR;
        case XJ:
          return rR;
        case MJ:
          return aR;
        case BJ:
          return UR
      }
      return JR
    });
    var kJ = Array.isArray;

    function QJ(RR) {
      return null != RR && function(RR) {
        return "number" == typeof RR && RR > -1 && RR % 1 == 0 && RR <= tR
      }(RR.length) && !TJ(RR)
    }
    var FJ = wJ || function() {
      return !1
    };

    function TJ(RR) {
      var JR = sJ(RR) ? GJ.call(RR) : "";
      return JR == iR || JR == fR
    }

    function sJ(RR) {
      var JR = typeof RR;
      return !!RR && ("object" == JR || "function" == JR)
    }

    function hJ(RR) {
      return QJ(RR) ? xJ(RR) : function(RR) {
        if (!dJ(RR)) return rJ(RR);
        var JR = [];
        for (var GR in Object(RR)) JJ.call(RR, GR) && "constructor" != GR && JR.push(GR);
        return JR
      }(RR)
    }
    RR.exports = function(RR) {
      return HJ(RR, !0, !0)
    }
  },
  39611: RR => {
    function JR(RR, JR, GR) {
      for (var yR = RR.length, tR = -1 / 0, uR = 1 / 0, ZR = 0; ZR < yR; ZR++) {
        var qR = (GR[0][ZR] - RR[ZR]) / JR[ZR],
          iR = (GR[1][ZR] - RR[ZR]) / JR[ZR];
        if (qR > iR) {
          var fR = qR;
          qR = iR, iR = fR
        }
        if (iR < tR || qR > uR) return 1 / 0;
        qR > tR && (tR = qR), iR < uR && (uR = iR)
      }
      return tR > uR ? 1 / 0 : tR
    }
    RR.exports = function(RR, GR, yR, tR) {
      var uR = JR(GR, yR, tR);
      if (uR === 1 / 0) RR = null;
      else {
        RR = RR || [];
        for (var ZR = 0; ZR < GR.length; ZR++) RR[ZR] = GR[ZR] + yR[ZR] * uR
      }
      return RR
    }, RR.exports.distance = JR
  },
  38891: (RR, JR, GR) => {
    var yR = GR(38898);

    function tR(RR) {
      for (var JR, GR, tR = 0, uR = RR.length, ZR = 0; ZR < RR.length;) {
        for (JR = RR[ZR], GR = 0; ZR < uR && RR[ZR] === JR;) ++ZR, ++GR;
        tR += yR.log2(GR) / 7 | 0, tR += yR.log2(JR >>> 0) / 7 | 0, tR += 2
      }
      return tR
    }
    JR.size = tR, JR.encode = function(RR, JR) {
      JR || (JR = new Uint8Array(tR(RR)));
      for (var GR, yR, uR = 0, ZR = JR.length, qR = 0; qR < RR.length;) {
        for (GR = RR[qR], yR = 0; qR < RR.length && RR[qR] === GR;) ++qR, ++yR;
        for (; uR < ZR && yR >= 128;) JR[uR++] = 128 + (127 & yR), yR >>>= 7;
        if (uR >= ZR) throw new Error("RLE buffer overflow");
        for (JR[uR++] = yR, GR >>>= 0; uR < ZR && GR >= 128;) JR[uR++] = 128 + (127 & GR), GR >>>= 7;
        if (uR >= ZR) throw new Error("RLE buffer overflow");
        JR[uR++] = GR
      }
      return JR
    }, JR.decode = function(RR, JR) {
      for (var GR, yR, tR, uR, ZR = JR.length, qR = RR.length, iR = 0, fR = 0; fR < qR;) {
        for (GR = 0, yR = 0; fR < qR && RR[fR] >= 128;) GR += (127 & RR[fR++]) << yR, yR += 7;
        if (GR += RR[fR++] << yR, fR >= qR) throw new Error("RLE buffer underrun");
        if (iR + GR > ZR) throw new Error("Chunk buffer overflow");
        for (tR = 0, yR = 0; fR < qR && RR[fR] >= 128;) tR += (127 & RR[fR++]) << yR, yR += 7;
        if (fR >= qR) throw new Error("RLE buffer underrun");
        for (tR += RR[fR++] << yR, uR = 0; uR < GR; ++uR) JR[iR++] = tR
      }
      return JR
    }
  },
  38898: (RR, JR) => {
    function GR(RR) {
      var JR = 32;
      return (RR &= -RR) && JR--, 65535 & RR && (JR -= 16), 16711935 & RR && (JR -= 8), 252645135 & RR && (JR -= 4), 858993459 & RR && (JR -= 2), 1431655765 & RR && (JR -= 1), JR
    }
    JR.INT_BITS = 32, JR.INT_MAX = 2147483647, JR.INT_MIN = -1 << 31, JR.sign = function(RR) {
      return (RR > 0) - (RR < 0)
    }, JR.abs = function(RR) {
      var JR = RR >> 31;
      return (RR ^ JR) - JR
    }, JR.min = function(RR, JR) {
      return JR ^ (RR ^ JR) & -(RR < JR)
    }, JR.max = function(RR, JR) {
      return RR ^ (RR ^ JR) & -(RR < JR)
    }, JR.isPow2 = function(RR) {
      return !(RR & RR - 1) && !!RR
    }, JR.log2 = function(RR) {
      var JR, GR;
      return JR = (RR > 65535) << 4, JR |= GR = ((RR >>>= JR) > 255) << 3, JR |= GR = ((RR >>>= GR) > 15) << 2, (JR |= GR = ((RR >>>= GR) > 3) << 1) | (RR >>>= GR) >> 1
    }, JR.log10 = function(RR) {
      return RR >= 1e9 ? 9 : RR >= 1e8 ? 8 : RR >= 1e7 ? 7 : RR >= 1e6 ? 6 : RR >= 1e5 ? 5 : RR >= 1e4 ? 4 : RR >= 1e3 ? 3 : RR >= 100 ? 2 : RR >= 10 ? 1 : 0
    }, JR.popCount = function(RR) {
      return 16843009 * ((RR = (858993459 & (RR -= RR >>> 1 & 1431655765)) + (RR >>> 2 & 858993459)) + (RR >>> 4) & 252645135) >>> 24
    }, JR.countTrailingZeros = GR, JR.nextPow2 = function(RR) {
      return RR += 0 === RR, --RR, RR |= RR >>> 1, RR |= RR >>> 2, RR |= RR >>> 4, RR |= RR >>> 8, (RR |= RR >>> 16) + 1
    }, JR.prevPow2 = function(RR) {
      return RR |= RR >>> 1, RR |= RR >>> 2, RR |= RR >>> 4, RR |= RR >>> 8, (RR |= RR >>> 16) - (RR >>> 1)
    }, JR.parity = function(RR) {
      return RR ^= RR >>> 16, RR ^= RR >>> 8, RR ^= RR >>> 4, 27030 >>> (RR &= 15) & 1
    };
    var yR = new Array(256);
    ! function(RR) {
      for (var JR = 0; JR < 256; ++JR) {
        var GR = JR,
          yR = JR,
          tR = 7;
        for (GR >>>= 1; GR; GR >>>= 1) yR <<= 1, yR |= 1 & GR, --tR;
        RR[JR] = yR << tR & 255
      }
    }(yR), JR.reverse = function(RR) {
      return yR[255 & RR] << 24 | yR[RR >>> 8 & 255] << 16 | yR[RR >>> 16 & 255] << 8 | yR[RR >>> 24 & 255]
    }, JR.interleave2 = function(RR, JR) {
      return (RR = 1431655765 & ((RR = 858993459 & ((RR = 252645135 & ((RR = 16711935 & ((RR &= 65535) | RR << 8)) | RR << 4)) | RR << 2)) | RR << 1)) | (JR = 1431655765 & ((JR = 858993459 & ((JR = 252645135 & ((JR = 16711935 & ((JR &= 65535) | JR << 8)) | JR << 4)) | JR << 2)) | JR << 1)) << 1
    }, JR.deinterleave2 = function(RR, JR) {
      return (RR = 65535 & ((RR = 16711935 & ((RR = 252645135 & ((RR = 858993459 & ((RR = RR >>> JR & 1431655765) | RR >>> 1)) | RR >>> 2)) | RR >>> 4)) | RR >>> 16)) << 16 >> 16
    }, JR.interleave3 = function(RR, JR, GR) {
      return RR = 1227133513 & ((RR = 3272356035 & ((RR = 251719695 & ((RR = 4278190335 & ((RR &= 1023) | RR << 16)) | RR << 8)) | RR << 4)) | RR << 2), (RR |= (JR = 1227133513 & ((JR = 3272356035 & ((JR = 251719695 & ((JR = 4278190335 & ((JR &= 1023) | JR << 16)) | JR << 8)) | JR << 4)) | JR << 2)) << 1) | (GR = 1227133513 & ((GR = 3272356035 & ((GR = 251719695 & ((GR = 4278190335 & ((GR &= 1023) | GR << 16)) | GR << 8)) | GR << 4)) | GR << 2)) << 2
    }, JR.deinterleave3 = function(RR, JR) {
      return (RR = 1023 & ((RR = 4278190335 & ((RR = 251719695 & ((RR = 3272356035 & ((RR = RR >>> JR & 1227133513) | RR >>> 2)) | RR >>> 4)) | RR >>> 8)) | RR >>> 16)) << 22 >> 22
    }, JR.nextCombination = function(RR) {
      var JR = RR | RR - 1;
      return JR + 1 | (~JR & -~JR) - 1 >>> GR(RR) + 1
    }
  },
  38329: (RR, JR, GR) => {
    GR.d(JR, {
      Color3: () => yR.d,
      e: () => yR.e
    });
    var yR = GR(38331);
    (0, yR.g)()
  },
  38928: (RR, JR, GR) => {
    GR.d(JR, {
      e: () => tR
    });
    var yR = GR(38933);
    class tR {
      static GetPlanes(RR) {
        const JR = [];
        for (let GR = 0; GR < 6; GR++) JR.push(new yR.c(0, 0, 0, 0));
        return tR.GetPlanesToRef(RR, JR), JR
      }
      static GetNearPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] + GR[2], JR.normal.y = GR[7] + GR[6], JR.normal.z = GR[11] + GR[10], JR.d = GR[15] + GR[14], JR.normalize()
      }
      static GetFarPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] - GR[2], JR.normal.y = GR[7] - GR[6], JR.normal.z = GR[11] - GR[10], JR.d = GR[15] - GR[14], JR.normalize()
      }
      static GetLeftPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] + GR[0], JR.normal.y = GR[7] + GR[4], JR.normal.z = GR[11] + GR[8], JR.d = GR[15] + GR[12], JR.normalize()
      }
      static GetRightPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] - GR[0], JR.normal.y = GR[7] - GR[4], JR.normal.z = GR[11] - GR[8], JR.d = GR[15] - GR[12], JR.normalize()
      }
      static GetTopPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] - GR[1], JR.normal.y = GR[7] - GR[5], JR.normal.z = GR[11] - GR[9], JR.d = GR[15] - GR[13], JR.normalize()
      }
      static GetBottomPlaneToRef(RR, JR) {
        const GR = RR.m;
        JR.normal.x = GR[3] + GR[1], JR.normal.y = GR[7] + GR[5], JR.normal.z = GR[11] + GR[9], JR.d = GR[15] + GR[13], JR.normalize()
      }
      static GetPlanesToRef(RR, JR) {
        tR.GetNearPlaneToRef(RR, JR[0]), tR.GetFarPlaneToRef(RR, JR[1]), tR.GetLeftPlaneToRef(RR, JR[2]), tR.GetRightPlaneToRef(RR, JR[3]), tR.GetTopPlaneToRef(RR, JR[4]), tR.GetBottomPlaneToRef(RR, JR[5])
      }
      static IsPointInFrustum(RR, JR) {
        for (let GR = 0; GR < 6; GR++)
          if (JR[GR].dotCoordinate(RR) < 0) return !1;
        return !0
      }
    }
  },
  38933: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => tR
    });
    var yR = GR(38204);
    class tR {
      constructor(RR, JR, GR, tR) {
        this.normal = new yR.r(RR, JR, GR), this.d = tR
      }
      QtR() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new tR(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let RR = this.normal.getHashCode();
        return RR = 397 * RR ^ this.d, RR
      }
      normalize() {
        const RR = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let JR = 0;
        return 0 !== RR && (JR = 1 / RR), this.normal.x *= JR, this.normal.y *= JR, this.normal.z *= JR, this.d *= JR, this
      }
      transform(RR) {
        const JR = tR._TmpMatrix;
        RR.invertToRef(JR);
        const GR = JR.m,
          yR = this.normal.x,
          uR = this.normal.y,
          ZR = this.normal.z,
          qR = this.d,
          iR = yR * GR[0] + uR * GR[1] + ZR * GR[2] + qR * GR[3],
          fR = yR * GR[4] + uR * GR[5] + ZR * GR[6] + qR * GR[7],
          VR = yR * GR[8] + uR * GR[9] + ZR * GR[10] + qR * GR[11],
          KR = yR * GR[12] + uR * GR[13] + ZR * GR[14] + qR * GR[15];
        return new tR(iR, fR, VR, KR)
      }
      dotCoordinate(RR) {
        return this.normal.x * RR.x + this.normal.y * RR.y + this.normal.z * RR.z + this.d
      }
      copyFromPoints(RR, JR, GR) {
        const yR = JR.x - RR.x,
          tR = JR.y - RR.y,
          uR = JR.z - RR.z,
          ZR = GR.x - RR.x,
          qR = GR.y - RR.y,
          iR = GR.z - RR.z,
          fR = tR * iR - uR * qR,
          VR = uR * ZR - yR * iR,
          KR = yR * qR - tR * ZR,
          wR = Math.sqrt(fR * fR + VR * VR + KR * KR);
        let rR;
        return rR = 0 !== wR ? 1 / wR : 0, this.normal.x = fR * rR, this.normal.y = VR * rR, this.normal.z = KR * rR, this.d = -(this.normal.x * RR.x + this.normal.y * RR.y + this.normal.z * RR.z), this
      }
      isFrontFacingTo(RR, JR) {
        return yR.r.Dot(this.normal, RR) <= JR
      }
      signedDistanceTo(RR) {
        return yR.r.Dot(RR, this.normal) + this.d
      }
      static FromArray(RR) {
        return new tR(RR[0], RR[1], RR[2], RR[3])
      }
      static FromPoints(RR, JR, GR) {
        const yR = new tR(0, 0, 0, 0);
        return yR.copyFromPoints(RR, JR, GR), yR
      }
      static FromPositionAndNormal(RR, JR) {
        const GR = new tR(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(RR, JR, GR)
      }
      static FromPositionAndNormalToRef(RR, JR, GR) {
        return GR.normal.vN(JR), GR.normal.normalize(), GR.d = -RR.dot(GR.normal), GR
      }
      static SignedDistanceToPlaneFromPositionAndNormal(RR, JR, GR) {
        const tR = -(JR.x * RR.x + JR.y * RR.y + JR.z * RR.z);
        return yR.r.Dot(GR, JR) + tR
      }
    }
    tR._TmpMatrix = yR.e.Identity()
  },
  38195: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      Matrix: () => yR.e,
      Quaternion: () => yR.i,
      RegisterMathVector: () => yR.j,
      TmpVectors: () => yR.l,
      Vector2: () => yR.n,
      Fe: () => yR.r,
      Vector4: () => yR.s
    });
    var yR = GR(38204);
    (0, yR.j)()
  },
  39248: (RR, JR, GR) => {
    GR.d(JR, {
      c: () => yR
    });
    class yR {
      constructor(RR, JR, GR, yR) {
        this.x = RR, this.y = JR, this.width = GR, this.height = yR
      }
      toGlobal(RR, JR) {
        return new yR(this.x * RR, this.y * JR, this.width * RR, this.height * JR)
      }
      toGlobalToRef(RR, JR, GR) {
        return GR.x = this.x * RR, GR.y = this.y * JR, GR.width = this.width * RR, GR.height = this.height * JR, this
      }
      clone() {
        return new yR(this.x, this.y, this.width, this.height)
      }
    }
  },
  39062: (RR, JR, GR) => {
    function yR() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (RR => {
        const JR = 16 * Math.random() | 0;
        return ("x" === RR ? JR : 3 & JR | 8).toString(16)
      }))
    }
    GR.d(JR, {
      c: () => yR
    })
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);