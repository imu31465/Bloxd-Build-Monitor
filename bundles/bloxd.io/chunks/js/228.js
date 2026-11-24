/*! For license information please see fqwnlq.228.41f4bef3.chunk.js.LICENSE.txt */
export const id = 228;
export const ids = [228, 235];
export const modules = {
  38333: SS => {
    SS.exports = function(SS) {
      return null != SS && null != SS.constructor && "function" === typeof SS.constructor.isBuffer && SS.constructor.isBuffer(SS)
    }
  },
  38310: (SS, HS, gS) => {
    var tS = gS(38315),
      bS = gS(38324),
      XS = gS(38333);
    gS.g.__TYPEDARRAY_POOL || (gS.g.__TYPEDARRAY_POOL = {
      UINT8: bS([32, 0]),
      UINT16: bS([32, 0]),
      UINT32: bS([32, 0]),
      INT8: bS([32, 0]),
      INT16: bS([32, 0]),
      INT32: bS([32, 0]),
      FLOAT: bS([32, 0]),
      DOUBLE: bS([32, 0]),
      DATA: bS([32, 0]),
      UINT8C: bS([32, 0]),
      BUFFER: bS([32, 0])
    });
    var xS = "undefined" !== typeof Uint8ClampedArray,
      NS = gS.g.__TYPEDARRAY_POOL;
    NS.UINT8C || (NS.UINT8C = bS([32, 0])), NS.BUFFER || (NS.BUFFER = bS([32, 0]));
    var qS = NS.DATA,
      uS = NS.BUFFER;

    function IS(SS) {
      if (SS) {
        var HS = SS.length || SS.byteLength,
          gS = tS.log2(HS);
        qS[gS].push(SS)
      }
    }

    function fS(SS) {
      SS = tS.nextPow2(SS);
      var HS = tS.log2(SS),
        gS = qS[HS];
      return gS.length > 0 ? gS.pop() : new ArrayBuffer(SS)
    }

    function kS(SS) {
      return new Uint8Array(fS(SS), 0, SS)
    }

    function aS(SS) {
      return new Uint16Array(fS(2 * SS), 0, SS)
    }

    function KS(SS) {
      return new Uint32Array(fS(4 * SS), 0, SS)
    }

    function jS(SS) {
      return new Int8Array(fS(SS), 0, SS)
    }

    function GS(SS) {
      return new Int16Array(fS(2 * SS), 0, SS)
    }

    function CS(SS) {
      return new Int32Array(fS(4 * SS), 0, SS)
    }

    function nS(SS) {
      return new Float32Array(fS(4 * SS), 0, SS)
    }

    function PS(SS) {
      return new Float64Array(fS(8 * SS), 0, SS)
    }

    function QS(SS) {
      return xS ? new Uint8ClampedArray(fS(SS), 0, SS) : kS(SS)
    }

    function DS(SS) {
      return new DataView(fS(SS), 0, SS)
    }
    HS.free = function(SS) {
      if (XS(SS)) uS[tS.log2(SS.length)].push(SS);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(SS) && (SS = SS.buffer), !SS) return;
        var HS = SS.length || SS.byteLength,
          gS = 0 | tS.log2(HS);
        qS[gS].push(SS)
      }
    }, HS.freeUint8 = HS.freeUint16 = HS.freeUint32 = HS.freeInt8 = HS.freeInt16 = HS.freeInt32 = HS.freeFloat32 = HS.freeFloat = HS.freeFloat64 = HS.freeDouble = HS.freeUint8Clamped = HS.freeDataView = function(SS) {
      IS(SS.buffer)
    }, HS.freeArrayBuffer = IS, HS.freeBuffer = function(SS) {
      uS[tS.log2(SS.length)].push(SS)
    }, HS.malloc = function(SS, HS) {
      if (void 0 === HS || "arraybuffer" === HS) return fS(SS);
      switch (HS) {
        case "uint8":
          return kS(SS);
        case "uint16":
          return aS(SS);
        case "uint32":
          return KS(SS);
        case "int8":
          return jS(SS);
        case "int16":
          return GS(SS);
        case "int32":
          return CS(SS);
        case "float":
        case "float32":
          return nS(SS);
        case "double":
        case "float64":
          return PS(SS);
        case "uint8_clamped":
          return QS(SS);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return DS(SS);
        default:
          return null
      }
      return null
    }, HS.mallocArrayBuffer = fS, HS.mallocUint8 = kS, HS.mallocUint16 = aS, HS.mallocUint32 = KS, HS.mallocInt8 = jS, HS.mallocInt16 = GS, HS.mallocInt32 = CS, HS.mallocFloat32 = HS.mallocFloat = nS, HS.mallocFloat64 = HS.mallocDouble = PS, HS.mallocUint8Clamped = QS, HS.mallocDataView = DS, HS.clearCache = function() {
      for (var SS = 0; SS < 32; ++SS) NS.UINT8[SS].length = 0, NS.UINT16[SS].length = 0, NS.UINT32[SS].length = 0, NS.INT8[SS].length = 0, NS.INT16[SS].length = 0, NS.INT32[SS].length = 0, NS.FLOAT[SS].length = 0, NS.DOUBLE[SS].length = 0, NS.UINT8C[SS].length = 0, qS[SS].length = 0, uS[SS].length = 0
    }
  },
  38315: (SS, HS) => {
    function gS(SS) {
      var HS = 32;
      return (SS &= -SS) && HS--, 65535 & SS && (HS -= 16), 16711935 & SS && (HS -= 8), 252645135 & SS && (HS -= 4), 858993459 & SS && (HS -= 2), 1431655765 & SS && (HS -= 1), HS
    }
    HS.INT_BITS = 32, HS.INT_MAX = 2147483647, HS.INT_MIN = -1 << 31, HS.sign = function(SS) {
      return (SS > 0) - (SS < 0)
    }, HS.abs = function(SS) {
      var HS = SS >> 31;
      return (SS ^ HS) - HS
    }, HS.min = function(SS, HS) {
      return HS ^ (SS ^ HS) & -(SS < HS)
    }, HS.max = function(SS, HS) {
      return SS ^ (SS ^ HS) & -(SS < HS)
    }, HS.isPow2 = function(SS) {
      return !(SS & SS - 1) && !!SS
    }, HS.log2 = function(SS) {
      var HS, gS;
      return HS = (SS > 65535) << 4, HS |= gS = ((SS >>>= HS) > 255) << 3, HS |= gS = ((SS >>>= gS) > 15) << 2, (HS |= gS = ((SS >>>= gS) > 3) << 1) | (SS >>>= gS) >> 1
    }, HS.log10 = function(SS) {
      return SS >= 1e9 ? 9 : SS >= 1e8 ? 8 : SS >= 1e7 ? 7 : SS >= 1e6 ? 6 : SS >= 1e5 ? 5 : SS >= 1e4 ? 4 : SS >= 1e3 ? 3 : SS >= 100 ? 2 : SS >= 10 ? 1 : 0
    }, HS.popCount = function(SS) {
      return 16843009 * ((SS = (858993459 & (SS -= SS >>> 1 & 1431655765)) + (SS >>> 2 & 858993459)) + (SS >>> 4) & 252645135) >>> 24
    }, HS.countTrailingZeros = gS, HS.nextPow2 = function(SS) {
      return SS += 0 === SS, --SS, SS |= SS >>> 1, SS |= SS >>> 2, SS |= SS >>> 4, SS |= SS >>> 8, (SS |= SS >>> 16) + 1
    }, HS.prevPow2 = function(SS) {
      return SS |= SS >>> 1, SS |= SS >>> 2, SS |= SS >>> 4, SS |= SS >>> 8, (SS |= SS >>> 16) - (SS >>> 1)
    }, HS.parity = function(SS) {
      return SS ^= SS >>> 16, SS ^= SS >>> 8, SS ^= SS >>> 4, 27030 >>> (SS &= 15) & 1
    };
    var tS = new Array(256);
    ! function(SS) {
      for (var HS = 0; HS < 256; ++HS) {
        var gS = HS,
          tS = HS,
          bS = 7;
        for (gS >>>= 1; gS; gS >>>= 1) tS <<= 1, tS |= 1 & gS, --bS;
        SS[HS] = tS << bS & 255
      }
    }(tS), HS.reverse = function(SS) {
      return tS[255 & SS] << 24 | tS[SS >>> 8 & 255] << 16 | tS[SS >>> 16 & 255] << 8 | tS[SS >>> 24 & 255]
    }, HS.interleave2 = function(SS, HS) {
      return (SS = 1431655765 & ((SS = 858993459 & ((SS = 252645135 & ((SS = 16711935 & ((SS &= 65535) | SS << 8)) | SS << 4)) | SS << 2)) | SS << 1)) | (HS = 1431655765 & ((HS = 858993459 & ((HS = 252645135 & ((HS = 16711935 & ((HS &= 65535) | HS << 8)) | HS << 4)) | HS << 2)) | HS << 1)) << 1
    }, HS.deinterleave2 = function(SS, HS) {
      return (SS = 65535 & ((SS = 16711935 & ((SS = 252645135 & ((SS = 858993459 & ((SS = SS >>> HS & 1431655765) | SS >>> 1)) | SS >>> 2)) | SS >>> 4)) | SS >>> 16)) << 16 >> 16
    }, HS.interleave3 = function(SS, HS, gS) {
      return SS = 1227133513 & ((SS = 3272356035 & ((SS = 251719695 & ((SS = 4278190335 & ((SS &= 1023) | SS << 16)) | SS << 8)) | SS << 4)) | SS << 2), (SS |= (HS = 1227133513 & ((HS = 3272356035 & ((HS = 251719695 & ((HS = 4278190335 & ((HS &= 1023) | HS << 16)) | HS << 8)) | HS << 4)) | HS << 2)) << 1) | (gS = 1227133513 & ((gS = 3272356035 & ((gS = 251719695 & ((gS = 4278190335 & ((gS &= 1023) | gS << 16)) | gS << 8)) | gS << 4)) | gS << 2)) << 2
    }, HS.deinterleave3 = function(SS, HS) {
      return (SS = 1023 & ((SS = 4278190335 & ((SS = 251719695 & ((SS = 3272356035 & ((SS = SS >>> HS & 1227133513) | SS >>> 2)) | SS >>> 4)) | SS >>> 8)) | SS >>> 16)) << 22 >> 22
    }, HS.nextCombination = function(SS) {
      var HS = SS | SS - 1;
      return HS + 1 | (~HS & -~HS) - 1 >>> gS(SS) + 1
    }
  },
  38305: (SS, HS, gS) => {
    SS.exports = function(SS, HS, gS) {
      switch (arguments.length) {
        case 1:
          return tS = [], uS(bS = SS, bS, IS, !0), tS;
        case 2:
          return "function" === typeof HS ? uS(SS, SS, HS, !0) : function(SS, HS) {
            return tS = [], uS(SS, HS, IS, !1), tS
          }(SS, HS);
        case 3:
          return uS(SS, HS, gS, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var bS
    };
    var tS, bS = gS(38310),
      XS = gS(38336),
      xS = gS(38348);

    function NS(SS, HS) {
      for (var gS = 0; gS < SS; ++gS)
        if (!(HS[gS] <= HS[gS + SS])) return !0;
      return !1
    }

    function qS(SS, HS, gS, tS) {
      for (var bS = 0, XS = 0, xS = 0, qS = SS.length; xS < qS; ++xS) {
        var uS = SS[xS];
        if (!NS(HS, uS)) {
          for (var IS = 0; IS < 2 * HS; ++IS) gS[bS++] = uS[IS];
          tS[XS++] = xS
        }
      }
      return XS
    }

    function uS(SS, HS, gS, tS) {
      var NS = SS.length,
        uS = HS.length;
      if (!(NS <= 0 || uS <= 0)) {
        var IS = SS[0].length >>> 1;
        if (!(IS <= 0)) {
          var fS, kS = bS.mallocDouble(2 * IS * NS),
            aS = bS.mallocInt32(NS);
          if ((NS = qS(SS, IS, kS, aS)) > 0) {
            if (1 === IS && tS) XS.init(NS), fS = XS.sweepComplete(IS, gS, 0, NS, kS, aS, 0, NS, kS, aS);
            else {
              var KS = bS.mallocDouble(2 * IS * uS),
                jS = bS.mallocInt32(uS);
              (uS = qS(HS, IS, KS, jS)) > 0 && (XS.init(NS + uS), fS = 1 === IS ? XS.sweepBipartite(IS, gS, 0, NS, kS, aS, 0, uS, KS, jS) : xS(IS, gS, tS, NS, kS, aS, uS, KS, jS), bS.free(KS), bS.free(jS))
            }
            bS.free(kS), bS.free(aS)
          }
          return fS
        }
      }
    }

    function IS(SS, HS) {
      tS.push([SS, HS])
    }
  },
  38355: (SS, HS) => {
    var gS = "d",
      tS = "ax",
      bS = "fp",
      XS = "es",
      xS = "rs",
      NS = "re",
      qS = "rb",
      uS = "bs",
      IS = "be",
      fS = "bb",
      kS = [gS, tS, "vv", xS, NS, qS, "ri", uS, IS, fS, "bi"];

    function aS(SS) {
      var HS = "bruteForce" + (SS ? "Full" : "Partial"),
        tS = [],
        xS = kS.slice();
      SS || xS.splice(3, 0, bS);
      var NS = ["function " + HS + "(" + xS.join() + "){"];

      function qS(HS, bS) {
        var xS = function(SS, HS, tS) {
          var bS = "bruteForce" + (SS ? "Red" : "Blue") + (HS ? "Flip" : "") + (tS ? "Full" : ""),
            xS = ["function ", bS, "(", kS.join(), "){", "var ", XS, "=2*", gS, ";"],
            NS = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            qS = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (tS ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return SS ? xS.push(NS, "Q", ":", qS) : xS.push(qS, "Q", ":", NS), tS ? xS.push("if(y1<x0||x1<y0)continue;") : HS ? xS.push("if(y0<=x0||x1<y0)continue;") : xS.push("if(y0<x0||x1<y0)continue;"), xS.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), HS ? xS.push("yi,xi") : xS.push("xi,yi"), xS.push(");if(rv!==void 0)return rv;}}}"), {
            name: bS,
            code: xS.join("")
          }
        }(HS, bS, SS);
        tS.push(xS.code), NS.push("return " + xS.name + "(" + kS.join() + ");")
      }
      NS.push("if(re-rs>be-bs){"), SS ? (qS(!0, !1), NS.push("}else{"), qS(!1, !1)) : (NS.push("if(fp){"), qS(!0, !0), NS.push("}else{"), qS(!0, !1), NS.push("}}else{if(fp){"), qS(!1, !0), NS.push("}else{"), qS(!1, !1), NS.push("}")), NS.push("}}return " + HS);
      var uS = tS.join("") + NS.join("");
      return new Function(uS)()
    }
    HS.partial = aS(!1), HS.full = aS(!0)
  },
  38348: (SS, HS, gS) => {
    SS.exports = function(SS, HS, gS, XS, IS, dS, cS, vS, ES) {
      ! function(SS, HS) {
        var gS = 8 * bS.log2(HS + 1) * (SS + 1) | 0,
          XS = bS.nextPow2(QS * gS);
        wS.length < XS && (tS.free(wS), wS = tS.mallocInt32(XS));
        var xS = bS.nextPow2(DS * gS);
        hS.length < xS && (tS.free(hS), hS = tS.mallocDouble(xS))
      }(SS, XS + cS);
      var LS, YS = 0,
        AS = 2 * SS;
      ZS(YS++, 0, 0, XS, 0, cS, gS ? 16 : 0, -1 / 0, 1 / 0), gS || ZS(YS++, 0, 0, cS, 0, XS, 1, -1 / 0, 1 / 0);
      for (; YS > 0;) {
        var yS = (YS -= 1) * QS,
          VS = wS[yS],
          iS = wS[yS + 1],
          WS = wS[yS + 2],
          zS = wS[yS + 3],
          US = wS[yS + 4],
          pS = wS[yS + 5],
          sS = YS * DS,
          BS = hS[sS],
          MS = hS[sS + 1],
          FS = 1 & pS,
          RS = !!(16 & pS),
          TS = IS,
          oS = dS,
          lS = vS,
          mS = ES;
        if (FS && (TS = vS, oS = ES, lS = IS, mS = dS), !(2 & pS && iS >= (WS = GS(SS, VS, iS, WS, TS, oS, MS))) && !(4 & pS && (iS = CS(SS, VS, iS, WS, TS, oS, BS)) >= WS)) {
          var eS = WS - iS,
            rS = US - zS;
          if (RS) {
            if (SS * eS * (eS + rS) < aS) {
              if (void 0 !== (LS = qS.scanComplete(SS, VS, HS, iS, WS, TS, oS, zS, US, lS, mS))) return LS;
              continue
            }
          } else {
            if (SS * Math.min(eS, rS) < fS) {
              if (void 0 !== (LS = xS(SS, VS, HS, FS, iS, WS, TS, oS, zS, US, lS, mS))) return LS;
              continue
            }
            if (SS * eS * rS < kS) {
              if (void 0 !== (LS = qS.scanBipartite(SS, VS, HS, FS, iS, WS, TS, oS, zS, US, lS, mS))) return LS;
              continue
            }
          }
          var SH = KS(SS, VS, iS, WS, TS, oS, BS, MS);
          if (iS < SH)
            if (SS * (SH - iS) < fS) {
              if (void 0 !== (LS = NS(SS, VS + 1, HS, iS, SH, TS, oS, zS, US, lS, mS))) return LS
            } else if (VS === SS - 2) {
            if (void 0 !== (LS = FS ? qS.sweepBipartite(SS, HS, zS, US, lS, mS, iS, SH, TS, oS) : qS.sweepBipartite(SS, HS, iS, SH, TS, oS, zS, US, lS, mS))) return LS
          } else ZS(YS++, VS + 1, iS, SH, zS, US, FS, -1 / 0, 1 / 0), ZS(YS++, VS + 1, zS, US, iS, SH, 1 ^ FS, -1 / 0, 1 / 0);
          if (SH < WS) {
            var HH = uS(SS, VS, zS, US, lS, mS),
              gH = lS[AS * HH + VS],
              tH = jS(SS, VS, HH, US, lS, mS, gH);
            if (tH < US && ZS(YS++, VS, SH, WS, tH, US, (4 | FS) + (RS ? 16 : 0), gH, MS), zS < HH && ZS(YS++, VS, SH, WS, zS, HH, (2 | FS) + (RS ? 16 : 0), BS, gH), HH + 1 === tH) {
              if (void 0 !== (LS = RS ? OS(SS, VS, HS, SH, WS, TS, oS, HH, lS, mS[HH]) : JS(SS, VS, HS, FS, SH, WS, TS, oS, HH, lS, mS[HH]))) return LS
            } else if (HH < tH) {
              var bH;
              if (RS) {
                if (SH < (bH = nS(SS, VS, SH, WS, TS, oS, gH))) {
                  var XH = jS(SS, VS, SH, bH, TS, oS, gH);
                  if (VS === SS - 2) {
                    if (SH < XH && void 0 !== (LS = qS.sweepComplete(SS, HS, SH, XH, TS, oS, HH, tH, lS, mS))) return LS;
                    if (XH < bH && void 0 !== (LS = qS.sweepBipartite(SS, HS, XH, bH, TS, oS, HH, tH, lS, mS))) return LS
                  } else SH < XH && ZS(YS++, VS + 1, SH, XH, HH, tH, 16, -1 / 0, 1 / 0), XH < bH && (ZS(YS++, VS + 1, XH, bH, HH, tH, 0, -1 / 0, 1 / 0), ZS(YS++, VS + 1, HH, tH, XH, bH, 1, -1 / 0, 1 / 0))
                }
              } else SH < (bH = FS ? PS(SS, VS, SH, WS, TS, oS, gH) : nS(SS, VS, SH, WS, TS, oS, gH)) && (VS === SS - 2 ? LS = FS ? qS.sweepBipartite(SS, HS, HH, tH, lS, mS, SH, bH, TS, oS) : qS.sweepBipartite(SS, HS, SH, bH, TS, oS, HH, tH, lS, mS) : (ZS(YS++, VS + 1, SH, bH, HH, tH, FS, -1 / 0, 1 / 0), ZS(YS++, VS + 1, HH, tH, SH, bH, 1 ^ FS, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var tS = gS(38310),
      bS = gS(38315),
      XS = gS(38355),
      xS = XS.partial,
      NS = XS.full,
      qS = gS(38336),
      uS = gS(38364),
      IS = gS(38372),
      fS = 128,
      kS = 1 << 22,
      aS = 1 << 22,
      KS = IS("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      jS = IS("lo===p0", ["p0"]),
      GS = IS("lo<p0", ["p0"]),
      CS = IS("hi<=p0", ["p0"]),
      nS = IS("lo<=p0&&p0<=hi", ["p0"]),
      PS = IS("lo<p0&&p0<=hi", ["p0"]),
      QS = 6,
      DS = 2,
      wS = tS.mallocInt32(1024),
      hS = tS.mallocDouble(1024);

    function ZS(SS, HS, gS, tS, bS, XS, xS, NS, qS) {
      var uS = QS * SS;
      wS[uS] = HS, wS[uS + 1] = gS, wS[uS + 2] = tS, wS[uS + 3] = bS, wS[uS + 4] = XS, wS[uS + 5] = xS;
      var IS = DS * SS;
      hS[IS] = NS, hS[IS + 1] = qS
    }

    function JS(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS, IS) {
      var fS = 2 * SS,
        kS = qS * fS,
        aS = uS[kS + HS];
      SS: for (var KS = bS, jS = bS * fS; KS < XS; ++KS, jS += fS) {
        var GS = xS[jS + HS],
          CS = xS[jS + HS + SS];
        if (!(aS < GS || CS < aS) && (!tS || aS !== GS)) {
          for (var nS, PS = NS[KS], QS = HS + 1; QS < SS; ++QS) {
            GS = xS[jS + QS], CS = xS[jS + QS + SS];
            var DS = uS[kS + QS],
              wS = uS[kS + QS + SS];
            if (CS < DS || wS < GS) continue SS
          }
          if (void 0 !== (nS = tS ? gS(IS, PS) : gS(PS, IS))) return nS
        }
      }
    }

    function OS(SS, HS, gS, tS, bS, XS, xS, NS, qS, uS) {
      var IS = 2 * SS,
        fS = NS * IS,
        kS = qS[fS + HS];
      SS: for (var aS = tS, KS = tS * IS; aS < bS; ++aS, KS += IS) {
        var jS = xS[aS];
        if (jS !== uS) {
          var GS = XS[KS + HS],
            CS = XS[KS + HS + SS];
          if (!(kS < GS || CS < kS)) {
            for (var nS = HS + 1; nS < SS; ++nS) {
              GS = XS[KS + nS], CS = XS[KS + nS + SS];
              var PS = qS[fS + nS],
                QS = qS[fS + nS + SS];
              if (CS < PS || QS < GS) continue SS
            }
            var DS = gS(jS, uS);
            if (void 0 !== DS) return DS
          }
        }
      }
    }
  },
  38364: (SS, HS, gS) => {
    SS.exports = function(SS, HS, gS, xS, NS, qS) {
      if (xS <= gS + 1) return gS;
      var uS = gS,
        IS = xS,
        fS = xS + gS >>> 1,
        kS = 2 * SS,
        aS = fS,
        KS = NS[kS * fS + HS];
      for (; uS < IS;) {
        if (IS - uS < bS) {
          XS(SS, HS, uS, IS, NS, qS), KS = NS[kS * fS + HS];
          break
        }
        var jS = IS - uS,
          GS = Math.random() * jS + uS | 0,
          CS = NS[kS * GS + HS],
          nS = Math.random() * jS + uS | 0,
          PS = NS[kS * nS + HS],
          QS = Math.random() * jS + uS | 0,
          DS = NS[kS * QS + HS];
        CS <= PS ? DS >= PS ? (aS = nS, KS = PS) : CS >= DS ? (aS = GS, KS = CS) : (aS = QS, KS = DS) : PS >= DS ? (aS = nS, KS = PS) : DS >= CS ? (aS = GS, KS = CS) : (aS = QS, KS = DS);
        for (var wS = kS * (IS - 1), hS = kS * aS, ZS = 0; ZS < kS; ++ZS, ++wS, ++hS) {
          var JS = NS[wS];
          NS[wS] = NS[hS], NS[hS] = JS
        }
        var OS = qS[IS - 1];
        qS[IS - 1] = qS[aS], qS[aS] = OS;
        for (wS = kS * (IS - 1), hS = kS * (aS = tS(SS, HS, uS, IS - 1, NS, qS, KS)), ZS = 0; ZS < kS; ++ZS, ++wS, ++hS) {
          JS = NS[wS];
          NS[wS] = NS[hS], NS[hS] = JS
        }
        OS = qS[IS - 1];
        if (qS[IS - 1] = qS[aS], qS[aS] = OS, fS < aS) {
          for (IS = aS - 1; uS < IS && NS[kS * (IS - 1) + HS] === KS;) IS -= 1;
          IS += 1
        } else {
          if (!(aS < fS)) break;
          for (uS = aS + 1; uS < IS && NS[kS * uS + HS] === KS;) uS += 1
        }
      }
      return tS(SS, HS, gS, fS, NS, qS, NS[kS * fS + HS])
    };
    var tS = gS(38372)("lo<p0", ["p0"]),
      bS = 8;

    function XS(SS, HS, gS, tS, bS, XS) {
      for (var xS = 2 * SS, NS = xS * (gS + 1) + HS, qS = gS + 1; qS < tS; ++qS, NS += xS)
        for (var uS = bS[NS], IS = qS, fS = xS * (qS - 1); IS > gS && bS[fS + HS] > uS; --IS, fS -= xS) {
          for (var kS = fS, aS = fS + xS, KS = 0; KS < xS; ++KS, ++kS, ++aS) {
            var jS = bS[kS];
            bS[kS] = bS[aS], bS[aS] = jS
          }
          var GS = XS[IS];
          XS[IS] = XS[IS - 1], XS[IS - 1] = GS
        }
    }
  },
  38372: SS => {
    SS.exports = function(SS, gS) {
      var tS = "abcdef".split("").concat(gS),
        bS = [];
      SS.indexOf("lo") >= 0 && bS.push("lo=e[k+n]");
      SS.indexOf("hi") >= 0 && bS.push("hi=e[k+o]");
      return tS.push(HS.replace("_", bS.join()).replace("$", SS)), Function.apply(void 0, tS)
    };
    var HS = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  38343: SS => {
    SS.exports = function(SS, tS) {
      tS <= 4 * HS ? gS(0, tS - 1, SS) : uS(0, tS - 1, SS)
    };
    var HS = 32;

    function gS(SS, HS, gS) {
      for (var tS = 2 * (SS + 1), bS = SS + 1; bS <= HS; ++bS) {
        for (var XS = gS[tS++], xS = gS[tS++], NS = bS, qS = tS - 2; NS-- > SS;) {
          var uS = gS[qS - 2],
            IS = gS[qS - 1];
          if (uS < XS) break;
          if (uS === XS && IS < xS) break;
          gS[qS] = uS, gS[qS + 1] = IS, qS -= 2
        }
        gS[qS] = XS, gS[qS + 1] = xS
      }
    }

    function tS(SS, HS, gS) {
      HS *= 2;
      var tS = gS[SS *= 2],
        bS = gS[SS + 1];
      gS[SS] = gS[HS], gS[SS + 1] = gS[HS + 1], gS[HS] = tS, gS[HS + 1] = bS
    }

    function bS(SS, HS, gS) {
      HS *= 2, gS[SS *= 2] = gS[HS], gS[SS + 1] = gS[HS + 1]
    }

    function XS(SS, HS, gS, tS) {
      HS *= 2, gS *= 2;
      var bS = tS[SS *= 2],
        XS = tS[SS + 1];
      tS[SS] = tS[HS], tS[SS + 1] = tS[HS + 1], tS[HS] = tS[gS], tS[HS + 1] = tS[gS + 1], tS[gS] = bS, tS[gS + 1] = XS
    }

    function xS(SS, HS, gS, tS, bS) {
      HS *= 2, bS[SS *= 2] = bS[HS], bS[HS] = gS, bS[SS + 1] = bS[HS + 1], bS[HS + 1] = tS
    }

    function NS(SS, HS, gS) {
      HS *= 2;
      var tS = gS[SS *= 2],
        bS = gS[HS];
      return !(tS < bS) && (tS !== bS || gS[SS + 1] > gS[HS + 1])
    }

    function qS(SS, HS, gS, tS) {
      var bS = tS[SS *= 2];
      return bS < HS || bS === HS && tS[SS + 1] < gS
    }

    function uS(SS, IS, fS) {
      var kS = (IS - SS + 1) / 6 | 0,
        aS = SS + kS,
        KS = IS - kS,
        jS = SS + IS >> 1,
        GS = jS - kS,
        CS = jS + kS,
        nS = aS,
        PS = GS,
        QS = jS,
        DS = CS,
        wS = KS,
        hS = SS + 1,
        ZS = IS - 1,
        JS = 0;
      NS(nS, PS, fS) && (JS = nS, nS = PS, PS = JS), NS(DS, wS, fS) && (JS = DS, DS = wS, wS = JS), NS(nS, QS, fS) && (JS = nS, nS = QS, QS = JS), NS(PS, QS, fS) && (JS = PS, PS = QS, QS = JS), NS(nS, DS, fS) && (JS = nS, nS = DS, DS = JS), NS(QS, DS, fS) && (JS = QS, QS = DS, DS = JS), NS(PS, wS, fS) && (JS = PS, PS = wS, wS = JS), NS(PS, QS, fS) && (JS = PS, PS = QS, QS = JS), NS(DS, wS, fS) && (JS = DS, DS = wS, wS = JS);
      for (var OS = fS[2 * PS], dS = fS[2 * PS + 1], cS = fS[2 * DS], vS = fS[2 * DS + 1], ES = 2 * nS, LS = 2 * QS, YS = 2 * wS, AS = 2 * aS, yS = 2 * jS, VS = 2 * KS, iS = 0; iS < 2; ++iS) {
        var WS = fS[ES + iS],
          zS = fS[LS + iS],
          US = fS[YS + iS];
        fS[AS + iS] = WS, fS[yS + iS] = zS, fS[VS + iS] = US
      }
      bS(GS, SS, fS), bS(CS, IS, fS);
      for (var pS = hS; pS <= ZS; ++pS)
        if (qS(pS, OS, dS, fS)) pS !== hS && tS(pS, hS, fS), ++hS;
        else if (!qS(pS, cS, vS, fS))
        for (;;) {
          if (qS(ZS, cS, vS, fS)) {
            qS(ZS, OS, dS, fS) ? (XS(pS, hS, ZS, fS), ++hS, --ZS) : (tS(pS, ZS, fS), --ZS);
            break
          }
          if (--ZS < pS) break
        }
      xS(SS, hS - 1, OS, dS, fS), xS(IS, ZS + 1, cS, vS, fS), hS - 2 - SS <= HS ? gS(SS, hS - 2, fS) : uS(SS, hS - 2, fS), IS - (ZS + 2) <= HS ? gS(ZS + 2, IS, fS) : uS(ZS + 2, IS, fS), ZS - hS <= HS ? gS(hS, ZS, fS) : uS(hS, ZS, fS)
    }
  },
  38336: (SS, HS, gS) => {
    SS.exports = {
      init: function(SS) {
        var HS = bS.nextPow2(SS);
        qS.length < HS && (tS.free(qS), qS = tS.mallocInt32(HS));
        uS.length < HS && (tS.free(uS), uS = tS.mallocInt32(HS));
        IS.length < HS && (tS.free(IS), IS = tS.mallocInt32(HS));
        fS.length < HS && (tS.free(fS), fS = tS.mallocInt32(HS));
        kS.length < HS && (tS.free(kS), kS = tS.mallocInt32(HS));
        aS.length < HS && (tS.free(aS), aS = tS.mallocInt32(HS));
        var gS = 8 * HS;
        KS.length < gS && (tS.free(KS), KS = tS.mallocDouble(gS))
      },
      sweepBipartite: function(SS, HS, gS, tS, bS, NS, kS, aS, CS, nS) {
        for (var PS = 0, QS = 2 * SS, DS = SS - 1, wS = QS - 1, hS = gS; hS < tS; ++hS) {
          var ZS = NS[hS],
            JS = QS * hS;
          KS[PS++] = bS[JS + DS], KS[PS++] = -(ZS + 1), KS[PS++] = bS[JS + wS], KS[PS++] = ZS
        }
        for (hS = kS; hS < aS; ++hS) {
          ZS = nS[hS] + xS;
          var OS = QS * hS;
          KS[PS++] = CS[OS + DS], KS[PS++] = -ZS, KS[PS++] = CS[OS + wS], KS[PS++] = ZS
        }
        var dS = PS >>> 1;
        XS(KS, dS);
        var cS = 0,
          vS = 0;
        for (hS = 0; hS < dS; ++hS) {
          var ES = 0 | KS[2 * hS + 1];
          if (ES >= xS) jS(IS, fS, vS--, ES = ES - xS | 0);
          else if (ES >= 0) jS(qS, uS, cS--, ES);
          else if (ES <= -xS) {
            ES = -ES - xS | 0;
            for (var LS = 0; LS < cS; ++LS) {
              if (void 0 !== (YS = HS(qS[LS], ES))) return YS
            }
            GS(IS, fS, vS++, ES)
          } else {
            ES = -ES - 1 | 0;
            for (LS = 0; LS < vS; ++LS) {
              var YS;
              if (void 0 !== (YS = HS(ES, IS[LS]))) return YS
            }
            GS(qS, uS, cS++, ES)
          }
        }
      },
      sweepComplete: function(SS, HS, gS, tS, bS, xS, NS, CS, nS, PS) {
        for (var QS = 0, DS = 2 * SS, wS = SS - 1, hS = DS - 1, ZS = gS; ZS < tS; ++ZS) {
          var JS = xS[ZS] + 1 << 1,
            OS = DS * ZS;
          KS[QS++] = bS[OS + wS], KS[QS++] = -JS, KS[QS++] = bS[OS + hS], KS[QS++] = JS
        }
        for (ZS = NS; ZS < CS; ++ZS) {
          JS = PS[ZS] + 1 << 1;
          var dS = DS * ZS;
          KS[QS++] = nS[dS + wS], KS[QS++] = 1 | -JS, KS[QS++] = nS[dS + hS], KS[QS++] = 1 | JS
        }
        var cS = QS >>> 1;
        XS(KS, cS);
        var vS = 0,
          ES = 0,
          LS = 0;
        for (ZS = 0; ZS < cS; ++ZS) {
          var YS = 0 | KS[2 * ZS + 1],
            AS = 1 & YS;
          if (ZS < cS - 1 && YS >> 1 === KS[2 * ZS + 3] >> 1 && (AS = 2, ZS += 1), YS < 0) {
            for (var yS = -(YS >> 1) - 1, VS = 0; VS < LS; ++VS) {
              if (void 0 !== (iS = HS(kS[VS], yS))) return iS
            }
            if (0 !== AS)
              for (VS = 0; VS < vS; ++VS) {
                if (void 0 !== (iS = HS(qS[VS], yS))) return iS
              }
            if (1 !== AS)
              for (VS = 0; VS < ES; ++VS) {
                var iS;
                if (void 0 !== (iS = HS(IS[VS], yS))) return iS
              }
            0 === AS ? GS(qS, uS, vS++, yS) : 1 === AS ? GS(IS, fS, ES++, yS) : 2 === AS && GS(kS, aS, LS++, yS)
          } else {
            yS = (YS >> 1) - 1;
            0 === AS ? jS(qS, uS, vS--, yS) : 1 === AS ? jS(IS, fS, ES--, yS) : 2 === AS && jS(kS, aS, LS--, yS)
          }
        }
      },
      scanBipartite: function(SS, HS, gS, tS, bS, NS, IS, fS, kS, aS, CS, nS) {
        var PS = 0,
          QS = 2 * SS,
          DS = HS,
          wS = HS + SS,
          hS = 1,
          ZS = 1;
        tS ? ZS = xS : hS = xS;
        for (var JS = bS; JS < NS; ++JS) {
          var OS = JS + hS,
            dS = QS * JS;
          KS[PS++] = IS[dS + DS], KS[PS++] = -OS, KS[PS++] = IS[dS + wS], KS[PS++] = OS
        }
        for (JS = kS; JS < aS; ++JS) {
          OS = JS + ZS;
          var cS = QS * JS;
          KS[PS++] = CS[cS + DS], KS[PS++] = -OS
        }
        var vS = PS >>> 1;
        XS(KS, vS);
        var ES = 0;
        for (JS = 0; JS < vS; ++JS) {
          var LS = 0 | KS[2 * JS + 1];
          if (LS < 0) {
            var YS = !1;
            if ((OS = -LS) >= xS ? (YS = !tS, OS -= xS) : (YS = !!tS, OS -= 1), YS) GS(qS, uS, ES++, OS);
            else {
              var AS = nS[OS],
                yS = QS * OS,
                VS = CS[yS + HS + 1],
                iS = CS[yS + HS + 1 + SS];
              SS: for (var WS = 0; WS < ES; ++WS) {
                var zS = qS[WS],
                  US = QS * zS;
                if (!(iS < IS[US + HS + 1] || IS[US + HS + 1 + SS] < VS)) {
                  for (var pS = HS + 2; pS < SS; ++pS)
                    if (CS[yS + pS + SS] < IS[US + pS] || IS[US + pS + SS] < CS[yS + pS]) continue SS;
                  var sS, BS = fS[zS];
                  if (void 0 !== (sS = tS ? gS(AS, BS) : gS(BS, AS))) return sS
                }
              }
            }
          } else jS(qS, uS, ES--, LS - hS)
        }
      },
      scanComplete: function(SS, HS, gS, tS, bS, NS, uS, IS, fS, kS, aS) {
        for (var jS = 0, GS = 2 * SS, CS = HS, nS = HS + SS, PS = tS; PS < bS; ++PS) {
          var QS = PS + xS,
            DS = GS * PS;
          KS[jS++] = NS[DS + CS], KS[jS++] = -QS, KS[jS++] = NS[DS + nS], KS[jS++] = QS
        }
        for (PS = IS; PS < fS; ++PS) {
          QS = PS + 1;
          var wS = GS * PS;
          KS[jS++] = kS[wS + CS], KS[jS++] = -QS
        }
        var hS = jS >>> 1;
        XS(KS, hS);
        var ZS = 0;
        for (PS = 0; PS < hS; ++PS) {
          var JS = 0 | KS[2 * PS + 1];
          if (JS < 0) {
            if ((QS = -JS) >= xS) qS[ZS++] = QS - xS;
            else {
              var OS = aS[QS -= 1],
                dS = GS * QS,
                cS = kS[dS + HS + 1],
                vS = kS[dS + HS + 1 + SS];
              SS: for (var ES = 0; ES < ZS; ++ES) {
                var LS = qS[ES],
                  YS = uS[LS];
                if (YS === OS) break;
                var AS = GS * LS;
                if (!(vS < NS[AS + HS + 1] || NS[AS + HS + 1 + SS] < cS)) {
                  for (var yS = HS + 2; yS < SS; ++yS)
                    if (kS[dS + yS + SS] < NS[AS + yS] || NS[AS + yS + SS] < kS[dS + yS]) continue SS;
                  var VS = gS(YS, OS);
                  if (void 0 !== VS) return VS
                }
              }
            }
          } else {
            for (QS = JS - xS, ES = ZS - 1; ES >= 0; --ES)
              if (qS[ES] === QS) {
                for (yS = ES + 1; yS < ZS; ++yS) qS[yS - 1] = qS[yS];
                break
              }-- ZS
          }
        }
      }
    };
    var tS = gS(38310),
      bS = gS(38315),
      XS = gS(38343),
      xS = 1 << 28,
      NS = 1024,
      qS = tS.mallocInt32(NS),
      uS = tS.mallocInt32(NS),
      IS = tS.mallocInt32(NS),
      fS = tS.mallocInt32(NS),
      kS = tS.mallocInt32(NS),
      aS = tS.mallocInt32(NS),
      KS = tS.mallocDouble(8192);

    function jS(SS, HS, gS, tS) {
      var bS = HS[tS],
        XS = SS[gS - 1];
      SS[bS] = XS, HS[XS] = bS
    }

    function GS(SS, HS, gS, tS) {
      SS[gS] = tS, HS[tS] = gS
    }
  },
  38324: SS => {
    function HS(SS, gS, tS) {
      var bS = 0 | SS[tS];
      if (bS <= 0) return [];
      var XS, xS = new Array(bS);
      if (tS === SS.length - 1)
        for (XS = 0; XS < bS; ++XS) xS[XS] = gS;
      else
        for (XS = 0; XS < bS; ++XS) xS[XS] = HS(SS, gS, tS + 1);
      return xS
    }
    SS.exports = function(SS, gS) {
      switch ("undefined" === typeof gS && (gS = 0), typeof SS) {
        case "number":
          if (SS > 0) return function(SS, HS) {
            var gS, tS;
            for (gS = new Array(SS), tS = 0; tS < SS; ++tS) gS[tS] = HS;
            return gS
          }(0 | SS, gS);
          break;
        case "object":
          if ("number" === typeof SS.length) return HS(SS, gS, 0)
      }
      return []
    }
  },
  38267: (SS, HS, gS) => {
    SS.exports = function() {
      var SS = this;
      this.components = {}, this.comps = this.components;
      var HS = this.components,
        gS = 1,
        bS = {},
        XS = [],
        xS = [],
        NS = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function qS(SS, gS) {
        var tS = HS[gS],
          XS = bS[gS],
          xS = XS.hash[SS];
        xS && (XS.remove(SS), tS.pE && (tS.multi ? (xS.forEach((HS => {
          HS && tS.pE(SS, HS)
        })), xS.length = 0) : tS.pE(SS, xS)), NS.removals.push(XS), uS())
      }

      function uS() {
        NS.timeout || (NS.timeout = !0, setTimeout(IS, 1))
      }

      function IS() {
        NS.timeout = !1, fS()
      }

      function fS() {
        NS.multiComps.length && function(SS) {
          for (var HS = 0; HS < SS.length; HS++) {
            var {
              entID: gS,
              data: tS
            } = SS[HS], bS = tS.hash[gS];
            if (bS) {
              for (var XS = 0; XS < bS.length; XS++) bS[XS] || (bS.splice(XS, 1), XS--);
              0 === bS.length && (tS.remove(gS), NS.removals.push(tS))
            }
          }
          SS.length = 0
        }(NS.multiComps), NS.removals.length && function(SS) {
          for (var HS = 0; HS < SS.length; HS++) {
            SS[HS].flush()
          }
          SS.length = 0
        }(NS.removals)
      }
      this.Pj = bS, this._systems = XS, this._renderSystems = xS, this.yB = function(HS) {
        var tS = gS++;
        return Array.isArray(HS) && HS.forEach((HS => SS.VY(tS, HS))), tS
      }, this.deleteEntity = function(HS) {
        return Object.keys(bS).forEach((SS => {
          bS[SS].hash[HS] && qS(HS, SS)
        })), SS
      }, this.vHS = function(SS) {
        if (!SS) throw new Error("Missing component definition");
        var gS = SS.name;
        if (!gS) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof gS) throw new Error("Component name must be a string.");
        if ("" === gS) throw new Error("Component name must be a non-empty string.");
        if (bS[gS]) throw new Error(`Component ${gS} already exists.`);
        var NS = {};
        return NS.name = gS, NS.multi = !!SS.multi, NS.order = isNaN(SS.order) ? 99 : SS.order, NS.stateConstructor = SS.stateConstructor || null, NS.state = SS.state || {}, NS.EQ = SS.EQ || null, NS.pE = SS.pE || null, NS.system = SS.system || null, NS.bD = SS.bD || null, HS[gS] = NS, bS[gS] = new tS, bS[gS]._pendingMultiCleanup = !1, bS[gS]._multiCleanupIDs = NS.multi ? [] : null, NS.system && (XS.push(gS), XS.sort(((SS, gS) => HS[SS].order - HS[gS].order))), NS.bD && (xS.push(gS), xS.sort(((SS, gS) => HS[SS].order - HS[gS].order))), gS
      }, this.overwriteComponent = function(SS, gS) {
        var tS = HS[SS];
        if (!tS) throw new Error(`Unknown component: ${SS}`);
        if (!gS) throw new Error("Missing component definition");
        if (tS.name !== gS.name) throw new Error("Overwriting component must use the same name property.");
        var NS = {};
        NS.name = SS, NS.multi = !!gS.multi, NS.order = isNaN(gS.order) ? 99 : gS.order, NS.state = gS.state || {}, NS.EQ = gS.EQ || null, NS.pE = gS.pE || null, NS.system = gS.system || null, NS.bD = gS.bD || null, HS[SS] = NS, bS[SS]._pendingMultiCleanup = !1, bS[SS]._multiCleanupIDs = NS.multi ? [] : null;
        var qS = XS.indexOf(SS);
        NS.system && qS < 0 && XS.push(SS), !NS.system && qS >= 0 && XS.splice(qS, 1), XS.sort(((SS, gS) => HS[SS].order - HS[gS].order));
        var uS = xS.indexOf(SS);
        NS.bD && uS < 0 && xS.push(SS), !NS.bD && uS >= 0 && xS.splice(uS, 1), xS.sort(((SS, gS) => HS[SS].order - HS[gS].order));
        var IS = NS.state;
        return this.EY(SS).forEach((SS => {
          for (var HS in IS) HS in SS || (SS[HS] = IS[HS]);
          NS.EQ && NS.EQ(SS.AY, SS)
        })), SS
      }, this.deleteComponent = function(gS) {
        var tS = bS[gS];
        if (!tS) throw new Error(`Unknown component: ${gS}`);
        tS.flush(), tS.list.forEach((SS => {
          SS && qS(SS.AY || SS[0].AY, gS)
        }));
        var NS = XS.indexOf(gS),
          uS = xS.indexOf(gS);
        return NS > -1 && XS.splice(NS, 1), uS > -1 && xS.splice(uS, 1), bS[gS].dispose(), delete bS[gS], delete HS[gS], SS
      }, this.VY = function(SS, gS, tS) {
        var XS, xS = HS[gS],
          NS = bS[gS];
        if (!NS) throw new Error(`Unknown component: ${gS}.`);
        if (NS.hash[SS] && !xS.multi) throw new Error(`Entity ${SS} already has component: ${gS}.`);
        if (xS.stateConstructor) {
          if (!(XS = new xS.stateConstructor).hasOwnProperty("AY")) throw new Error(`Component ${xS.name} stateConstructor type does not have property __id`);
          Object.assign(XS, xS.state, tS)
        } else XS = {
          AY: SS,
          ...xS.state,
          ...tS
        };
        if (XS.AY = SS, xS.multi) {
          var qS = NS.hash[SS];
          qS || (qS = [], NS.add(SS, qS)), qS.push(XS)
        } else NS.add(SS, XS);
        return xS.EQ && xS.EQ(SS, XS), this
      }, this.ZSS = function(SS, HS) {
        var gS = bS[HS];
        if (!gS) throw new Error(`Unknown component: ${HS}.`);
        return !!gS.hash[SS]
      }, this.pY = function(HS, gS) {
        if (!bS[gS]) throw new Error(`Unknown component: ${gS}.`);
        return qS(HS, gS), SS
      }, this.getState = function(SS, HS) {
        var gS = bS[HS];
        if (!gS) throw new Error(`Unknown component: ${HS}.`);
        return gS.hash[SS]
      }, this.EY = function(SS) {
        var HS = bS[SS];
        if (!HS) throw new Error(`Unknown component: ${SS}.`);
        return fS(), HS.list
      }, this.qHS = function(SS) {
        if (!bS[SS]) throw new Error(`Unknown component: ${SS}.`);
        var HS = bS[SS].hash;
        return SS => HS[SS]
      }, this.KHS = function(SS) {
        if (!bS[SS]) throw new Error(`Unknown component: ${SS}.`);
        var HS = bS[SS].hash;
        return SS => !!HS[SS]
      }, this.mf = function(gS) {
        fS();
        for (var tS = 0; tS < XS.length; tS++) {
          var xS = XS[tS],
            NS = HS[xS],
            qS = bS[xS];
          NS.system(gS, qS.list), fS()
        }
        return SS
      }, this.render = function(gS) {
        fS();
        for (var tS = 0; tS < xS.length; tS++) {
          var XS = xS[tS],
            NS = HS[XS],
            qS = bS[XS];
          NS.bD(gS, qS.list), fS()
        }
        return SS
      }, this.removeMultiComponent = function(gS, tS, XS) {
        var xS = HS[tS],
          qS = bS[tS];
        if (!qS) throw new Error(`Unknown component: ${tS}.`);
        if (!xS.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(SS, HS, gS, tS) {
          var bS = gS.hash[SS];
          if (bS) {
            var XS = bS[tS];
            XS && (bS[tS] = null, HS.pE && HS.pE(SS, XS), NS.multiComps.push({
              entID: SS,
              data: gS
            }), uS())
          }
        }(gS, xS, qS, XS), SS
      }
    };
    var tS = gS(38272)
  },
  38272: SS => {
    function HS(SS, HS) {
      var gS = SS._map[HS];
      if (delete SS.hash[HS], delete SS._map[HS], gS === SS.list.length - 1) SS.list.pop(), SS._idList.pop();
      else {
        var tS = SS.list.pop();
        SS.list[gS] = tS;
        var bS = SS._idList.pop();
        SS._idList[gS] = bS, SS._map[bS] = gS
      }
    }
    SS.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(SS, HS) {
        if ("number" === typeof this._map[SS]) {
          var gS = this._map[SS];
          this.hash[SS] = HS, this.list[gS] = HS, this._idList[gS] = SS
        } else this._map[SS] = this.list.length, this.hash[SS] = HS, this.list.push(HS), this._idList.push(SS)
      }
      remove(SS) {
        var HS = this._map[SS];
        this.hash[SS] = null, this.list[HS] = null, this._pendingRemovals.push(SS)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var SS = 0; SS < this._pendingRemovals.length; SS++) {
          var gS = this._pendingRemovals[SS];
          null === this.hash[gS] && HS(this, gS)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  38068: (SS, HS, gS) => {
    SS = gS.nmd(SS);
    var tS = "__lodash_hash_undefined__",
      bS = 9007199254740991,
      XS = "[object Arguments]",
      xS = "[object Boolean]",
      NS = "[object Date]",
      qS = "[object Function]",
      uS = "[object GeneratorFunction]",
      IS = "[object Map]",
      fS = "[object Number]",
      kS = "[object Object]",
      aS = "[object Promise]",
      KS = "[object RegExp]",
      jS = "[object Set]",
      GS = "[object String]",
      CS = "[object Symbol]",
      nS = "[object WeakMap]",
      PS = "[object ArrayBuffer]",
      QS = "[object DataView]",
      DS = "[object Float32Array]",
      wS = "[object Float64Array]",
      hS = "[object Int8Array]",
      ZS = "[object Int16Array]",
      JS = "[object Int32Array]",
      OS = "[object Uint8Array]",
      dS = "[object Uint8ClampedArray]",
      cS = "[object Uint16Array]",
      vS = "[object Uint32Array]",
      ES = /\w*$/,
      LS = /^\[object .+?Constructor\]$/,
      YS = /^(?:0|[1-9]\d*)$/,
      AS = {};
    AS[XS] = AS["[object Array]"] = AS[PS] = AS[QS] = AS[xS] = AS[NS] = AS[DS] = AS[wS] = AS[hS] = AS[ZS] = AS[JS] = AS[IS] = AS[fS] = AS[kS] = AS[KS] = AS[jS] = AS[GS] = AS[CS] = AS[OS] = AS[dS] = AS[cS] = AS[vS] = !0, AS["[object Error]"] = AS[qS] = AS[nS] = !1;
    var yS = "object" == typeof gS.g && gS.g && gS.g.Object === Object && gS.g,
      VS = "object" == typeof self && self && self.Object === Object && self,
      iS = yS || VS || Function("return this")(),
      WS = HS && !HS.nodeType && HS,
      zS = WS && SS && !SS.nodeType && SS,
      US = zS && zS.exports === WS;

    function pS(SS, HS) {
      return SS.set(HS[0], HS[1]), SS
    }

    function sS(SS, HS) {
      return SS.add(HS), SS
    }

    function BS(SS, HS, gS, tS) {
      var bS = -1,
        XS = SS ? SS.length : 0;
      for (tS && XS && (gS = SS[++bS]); ++bS < XS;) gS = HS(gS, SS[bS], bS, SS);
      return gS
    }

    function MS(SS) {
      var HS = !1;
      if (null != SS && "function" != typeof SS.toString) try {
        HS = !!(SS + "")
      } catch (gS) {}
      return HS
    }

    function FS(SS) {
      var HS = -1,
        gS = Array(SS.size);
      return SS.forEach((function(SS, tS) {
        gS[++HS] = [tS, SS]
      })), gS
    }

    function RS(SS, HS) {
      return function(gS) {
        return SS(HS(gS))
      }
    }

    function TS(SS) {
      var HS = -1,
        gS = Array(SS.size);
      return SS.forEach((function(SS) {
        gS[++HS] = SS
      })), gS
    }
    var oS = Array.prototype,
      lS = Function.prototype,
      mS = Object.prototype,
      eS = iS["__core-js_shared__"],
      rS = function() {
        var SS = /[^.]+$/.exec(eS && eS.keys && eS.keys.IE_PROTO || "");
        return SS ? "Symbol(src)_1." + SS : ""
      }(),
      SH = lS.toString,
      HH = mS.hasOwnProperty,
      gH = mS.toString,
      tH = RegExp("^" + SH.call(HH).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      bH = US ? iS.CK : void 0,
      XH = iS.Symbol,
      xH = iS.Uint8Array,
      NH = RS(Object.getPrototypeOf, Object),
      qH = Object.create,
      uH = mS.propertyIsEnumerable,
      IH = oS.splice,
      fH = Object.getOwnPropertySymbols,
      kH = bH ? bH.isBuffer : void 0,
      aH = RS(Object.keys, Object),
      KH = UH(iS, "DataView"),
      jH = UH(iS, "Map"),
      GH = UH(iS, "Promise"),
      CH = UH(iS, "Set"),
      nH = UH(iS, "WeakMap"),
      PH = UH(Object, "create"),
      QH = FH(KH),
      DH = FH(jH),
      wH = FH(GH),
      hH = FH(CH),
      ZH = FH(nH),
      JH = XH ? XH.prototype : void 0,
      OH = JH ? JH.valueOf : void 0;

    function dH(SS) {
      var HS = -1,
        gS = SS ? SS.length : 0;
      for (this.clear(); ++HS < gS;) {
        var tS = SS[HS];
        this.set(tS[0], tS[1])
      }
    }

    function cH(SS) {
      var HS = -1,
        gS = SS ? SS.length : 0;
      for (this.clear(); ++HS < gS;) {
        var tS = SS[HS];
        this.set(tS[0], tS[1])
      }
    }

    function vH(SS) {
      var HS = -1,
        gS = SS ? SS.length : 0;
      for (this.clear(); ++HS < gS;) {
        var tS = SS[HS];
        this.set(tS[0], tS[1])
      }
    }

    function EH(SS) {
      this.__data__ = new cH(SS)
    }

    function LH(SS, HS) {
      var gS = TH(SS) || function(SS) {
          return function(SS) {
            return function(SS) {
              return !!SS && "object" == typeof SS
            }(SS) && oH(SS)
          }(SS) && HH.call(SS, "callee") && (!uH.call(SS, "callee") || gH.call(SS) == XS)
        }(SS) ? function(SS, HS) {
          for (var gS = -1, tS = Array(SS); ++gS < SS;) tS[gS] = HS(gS);
          return tS
        }(SS.length, String) : [],
        tS = gS.length,
        bS = !!tS;
      for (var xS in SS) !HS && !HH.call(SS, xS) || bS && ("length" == xS || BH(xS, tS)) || gS.push(xS);
      return gS
    }

    function YH(SS, HS, gS) {
      var tS = SS[HS];
      HH.call(SS, HS) && RH(tS, gS) && (void 0 !== gS || HS in SS) || (SS[HS] = gS)
    }

    function AH(SS, HS) {
      for (var gS = SS.length; gS--;)
        if (RH(SS[gS][0], HS)) return gS;
      return -1
    }

    function yH(SS, HS, gS, tS, bS, aS, nS) {
      var LS;
      if (tS && (LS = aS ? tS(SS, bS, aS, nS) : tS(SS)), void 0 !== LS) return LS;
      if (!eH(SS)) return SS;
      var YS = TH(SS);
      if (YS) {
        if (LS = function(SS) {
            var HS = SS.length,
              gS = SS.constructor(HS);
            HS && "string" == typeof SS[0] && HH.call(SS, "index") && (gS.index = SS.index, gS.input = SS.input);
            return gS
          }(SS), !HS) return function(SS, HS) {
          var gS = -1,
            tS = SS.length;
          HS || (HS = Array(tS));
          for (; ++gS < tS;) HS[gS] = SS[gS];
          return HS
        }(SS, LS)
      } else {
        var yS = sH(SS),
          VS = yS == qS || yS == uS;
        if (lH(SS)) return function(SS, HS) {
          if (HS) return SS.slice();
          var gS = new SS.constructor(SS.length);
          return SS.copy(gS), gS
        }(SS, HS);
        if (yS == kS || yS == XS || VS && !aS) {
          if (MS(SS)) return aS ? SS : {};
          if (LS = function(SS) {
              return "function" != typeof SS.constructor || MH(SS) ? {} : (HS = NH(SS), eH(HS) ? qH(HS) : {});
              var HS
            }(VS ? {} : SS), !HS) return function(SS, HS) {
            return WH(SS, pH(SS), HS)
          }(SS, function(SS, HS) {
            return SS && WH(HS, rH(HS), SS)
          }(LS, SS))
        } else {
          if (!AS[yS]) return aS ? SS : {};
          LS = function(SS, HS, gS, tS) {
            var bS = SS.constructor;
            switch (HS) {
              case PS:
                return iH(SS);
              case xS:
              case NS:
                return new bS(+SS);
              case QS:
                return function(SS, HS) {
                  var gS = HS ? iH(SS.buffer) : SS.buffer;
                  return new SS.constructor(gS, SS.byteOffset, SS.byteLength)
                }(SS, tS);
              case DS:
              case wS:
              case hS:
              case ZS:
              case JS:
              case OS:
              case dS:
              case cS:
              case vS:
                return function(SS, HS) {
                  var gS = HS ? iH(SS.buffer) : SS.buffer;
                  return new SS.constructor(gS, SS.byteOffset, SS.length)
                }(SS, tS);
              case IS:
                return function(SS, HS, gS) {
                  var tS = HS ? gS(FS(SS), !0) : FS(SS);
                  return BS(tS, pS, new SS.constructor)
                }(SS, tS, gS);
              case fS:
              case GS:
                return new bS(SS);
              case KS:
                return function(SS) {
                  var HS = new SS.constructor(SS.source, ES.exec(SS));
                  return HS.lastIndex = SS.lastIndex, HS
                }(SS);
              case jS:
                return function(SS, HS, gS) {
                  var tS = HS ? gS(TS(SS), !0) : TS(SS);
                  return BS(tS, sS, new SS.constructor)
                }(SS, tS, gS);
              case CS:
                return XS = SS, OH ? Object(OH.call(XS)) : {}
            }
            var XS
          }(SS, yS, yH, HS)
        }
      }
      nS || (nS = new EH);
      var iS = nS.get(SS);
      if (iS) return iS;
      if (nS.set(SS, LS), !YS) var WS = gS ? function(SS) {
        return function(SS, HS, gS) {
          var tS = HS(SS);
          return TH(SS) ? tS : function(SS, HS) {
            for (var gS = -1, tS = HS.length, bS = SS.length; ++gS < tS;) SS[bS + gS] = HS[gS];
            return SS
          }(tS, gS(SS))
        }(SS, rH, pH)
      }(SS) : rH(SS);
      return function(SS, HS) {
        for (var gS = -1, tS = SS ? SS.length : 0; ++gS < tS && !1 !== HS(SS[gS], gS, SS););
      }(WS || SS, (function(bS, XS) {
        WS && (bS = SS[XS = bS]), YH(LS, XS, yH(bS, HS, gS, tS, XS, SS, nS))
      })), LS
    }

    function VH(SS) {
      return !(!eH(SS) || (HS = SS, rS && rS in HS)) && (mH(SS) || MS(SS) ? tH : LS).test(FH(SS));
      var HS
    }

    function iH(SS) {
      var HS = new SS.constructor(SS.byteLength);
      return new xH(HS).set(new xH(SS)), HS
    }

    function WH(SS, HS, gS, tS) {
      gS || (gS = {});
      for (var bS = -1, XS = HS.length; ++bS < XS;) {
        var xS = HS[bS],
          NS = tS ? tS(gS[xS], SS[xS], xS, gS, SS) : void 0;
        YH(gS, xS, void 0 === NS ? SS[xS] : NS)
      }
      return gS
    }

    function zH(SS, HS) {
      var gS = SS.__data__;
      return function(SS) {
        var HS = typeof SS;
        return "string" == HS || "number" == HS || "symbol" == HS || "boolean" == HS ? "__proto__" !== SS : null === SS
      }(HS) ? gS["string" == typeof HS ? "string" : "hash"] : gS.map
    }

    function UH(SS, HS) {
      var gS = function(SS, HS) {
        return null == SS ? void 0 : SS[HS]
      }(SS, HS);
      return VH(gS) ? gS : void 0
    }
    dH.prototype.clear = function() {
      this.__data__ = PH ? PH(null) : {}
    }, dH.prototype.delete = function(SS) {
      return this.has(SS) && delete this.__data__[SS]
    }, dH.prototype.get = function(SS) {
      var HS = this.__data__;
      if (PH) {
        var gS = HS[SS];
        return gS === tS ? void 0 : gS
      }
      return HH.call(HS, SS) ? HS[SS] : void 0
    }, dH.prototype.has = function(SS) {
      var HS = this.__data__;
      return PH ? void 0 !== HS[SS] : HH.call(HS, SS)
    }, dH.prototype.set = function(SS, HS) {
      return this.__data__[SS] = PH && void 0 === HS ? tS : HS, this
    }, cH.prototype.clear = function() {
      this.__data__ = []
    }, cH.prototype.delete = function(SS) {
      var HS = this.__data__,
        gS = AH(HS, SS);
      return !(gS < 0) && (gS == HS.length - 1 ? HS.pop() : IH.call(HS, gS, 1), !0)
    }, cH.prototype.get = function(SS) {
      var HS = this.__data__,
        gS = AH(HS, SS);
      return gS < 0 ? void 0 : HS[gS][1]
    }, cH.prototype.has = function(SS) {
      return AH(this.__data__, SS) > -1
    }, cH.prototype.set = function(SS, HS) {
      var gS = this.__data__,
        tS = AH(gS, SS);
      return tS < 0 ? gS.push([SS, HS]) : gS[tS][1] = HS, this
    }, vH.prototype.clear = function() {
      this.__data__ = {
        hash: new dH,
        map: new(jH || cH),
        string: new dH
      }
    }, vH.prototype.delete = function(SS) {
      return zH(this, SS).delete(SS)
    }, vH.prototype.get = function(SS) {
      return zH(this, SS).get(SS)
    }, vH.prototype.has = function(SS) {
      return zH(this, SS).has(SS)
    }, vH.prototype.set = function(SS, HS) {
      return zH(this, SS).set(SS, HS), this
    }, EH.prototype.clear = function() {
      this.__data__ = new cH
    }, EH.prototype.delete = function(SS) {
      return this.__data__.delete(SS)
    }, EH.prototype.get = function(SS) {
      return this.__data__.get(SS)
    }, EH.prototype.has = function(SS) {
      return this.__data__.has(SS)
    }, EH.prototype.set = function(SS, HS) {
      var gS = this.__data__;
      if (gS instanceof cH) {
        var tS = gS.__data__;
        if (!jH || tS.length < 199) return tS.push([SS, HS]), this;
        gS = this.__data__ = new vH(tS)
      }
      return gS.set(SS, HS), this
    };
    var pH = fH ? RS(fH, Object) : function() {
        return []
      },
      sH = function(SS) {
        return gH.call(SS)
      };

    function BH(SS, HS) {
      return !!(HS = null == HS ? bS : HS) && ("number" == typeof SS || YS.test(SS)) && SS > -1 && SS % 1 == 0 && SS < HS
    }

    function MH(SS) {
      var HS = SS && SS.constructor;
      return SS === ("function" == typeof HS && HS.prototype || mS)
    }

    function FH(SS) {
      if (null != SS) {
        try {
          return SH.call(SS)
        } catch (HS) {}
        try {
          return SS + ""
        } catch (HS) {}
      }
      return ""
    }

    function RH(SS, HS) {
      return SS === HS || SS !== SS && HS !== HS
    }(KH && sH(new KH(new ArrayBuffer(1))) != QS || jH && sH(new jH) != IS || GH && sH(GH.resolve()) != aS || CH && sH(new CH) != jS || nH && sH(new nH) != nS) && (sH = function(SS) {
      var HS = gH.call(SS),
        gS = HS == kS ? SS.constructor : void 0,
        tS = gS ? FH(gS) : void 0;
      if (tS) switch (tS) {
        case QH:
          return QS;
        case DH:
          return IS;
        case wH:
          return aS;
        case hH:
          return jS;
        case ZH:
          return nS
      }
      return HS
    });
    var TH = Array.isArray;

    function oH(SS) {
      return null != SS && function(SS) {
        return "number" == typeof SS && SS > -1 && SS % 1 == 0 && SS <= bS
      }(SS.length) && !mH(SS)
    }
    var lH = kH || function() {
      return !1
    };

    function mH(SS) {
      var HS = eH(SS) ? gH.call(SS) : "";
      return HS == qS || HS == uS
    }

    function eH(SS) {
      var HS = typeof SS;
      return !!SS && ("object" == HS || "function" == HS)
    }

    function rH(SS) {
      return oH(SS) ? LH(SS) : function(SS) {
        if (!MH(SS)) return aH(SS);
        var HS = [];
        for (var gS in Object(SS)) HH.call(SS, gS) && "constructor" != gS && HS.push(gS);
        return HS
      }(SS)
    }
    SS.exports = function(SS) {
      return yH(SS, !0, !0)
    }
  },
  38487: SS => {
    function HS(SS, HS, gS) {
      for (var tS = SS.length, bS = -1 / 0, XS = 1 / 0, xS = 0; xS < tS; xS++) {
        var NS = (gS[0][xS] - SS[xS]) / HS[xS],
          qS = (gS[1][xS] - SS[xS]) / HS[xS];
        if (NS > qS) {
          var uS = NS;
          NS = qS, qS = uS
        }
        if (qS < bS || NS > XS) return 1 / 0;
        NS > bS && (bS = NS), qS < XS && (XS = qS)
      }
      return bS > XS ? 1 / 0 : bS
    }
    SS.exports = function(SS, gS, tS, bS) {
      var XS = HS(gS, tS, bS);
      if (XS === 1 / 0) SS = null;
      else {
        SS = SS || [];
        for (var xS = 0; xS < gS.length; xS++) SS[xS] = gS[xS] + tS[xS] * XS
      }
      return SS
    }, SS.exports.distance = HS
  },
  37750: (SS, HS, gS) => {
    var tS = gS(37752);

    function bS(SS) {
      for (var HS, gS, bS = 0, XS = SS.length, xS = 0; xS < SS.length;) {
        for (HS = SS[xS], gS = 0; xS < XS && SS[xS] === HS;) ++xS, ++gS;
        bS += tS.log2(gS) / 7 | 0, bS += tS.log2(HS >>> 0) / 7 | 0, bS += 2
      }
      return bS
    }
    HS.size = bS, HS.encode = function(SS, HS) {
      HS || (HS = new Uint8Array(bS(SS)));
      for (var gS, tS, XS = 0, xS = HS.length, NS = 0; NS < SS.length;) {
        for (gS = SS[NS], tS = 0; NS < SS.length && SS[NS] === gS;) ++NS, ++tS;
        for (; XS < xS && tS >= 128;) HS[XS++] = 128 + (127 & tS), tS >>>= 7;
        if (XS >= xS) throw new Error("RLE buffer overflow");
        for (HS[XS++] = tS, gS >>>= 0; XS < xS && gS >= 128;) HS[XS++] = 128 + (127 & gS), gS >>>= 7;
        if (XS >= xS) throw new Error("RLE buffer overflow");
        HS[XS++] = gS
      }
      return HS
    }, HS.decode = function(SS, HS) {
      for (var gS, tS, bS, XS, xS = HS.length, NS = SS.length, qS = 0, uS = 0; uS < NS;) {
        for (gS = 0, tS = 0; uS < NS && SS[uS] >= 128;) gS += (127 & SS[uS++]) << tS, tS += 7;
        if (gS += SS[uS++] << tS, uS >= NS) throw new Error("RLE buffer underrun");
        if (qS + gS > xS) throw new Error("Chunk buffer overflow");
        for (bS = 0, tS = 0; uS < NS && SS[uS] >= 128;) bS += (127 & SS[uS++]) << tS, tS += 7;
        if (uS >= NS) throw new Error("RLE buffer underrun");
        for (bS += SS[uS++] << tS, XS = 0; XS < gS; ++XS) HS[qS++] = bS
      }
      return HS
    }
  },
  37752: (SS, HS) => {
    function gS(SS) {
      var HS = 32;
      return (SS &= -SS) && HS--, 65535 & SS && (HS -= 16), 16711935 & SS && (HS -= 8), 252645135 & SS && (HS -= 4), 858993459 & SS && (HS -= 2), 1431655765 & SS && (HS -= 1), HS
    }
    HS.INT_BITS = 32, HS.INT_MAX = 2147483647, HS.INT_MIN = -1 << 31, HS.sign = function(SS) {
      return (SS > 0) - (SS < 0)
    }, HS.abs = function(SS) {
      var HS = SS >> 31;
      return (SS ^ HS) - HS
    }, HS.min = function(SS, HS) {
      return HS ^ (SS ^ HS) & -(SS < HS)
    }, HS.max = function(SS, HS) {
      return SS ^ (SS ^ HS) & -(SS < HS)
    }, HS.isPow2 = function(SS) {
      return !(SS & SS - 1) && !!SS
    }, HS.log2 = function(SS) {
      var HS, gS;
      return HS = (SS > 65535) << 4, HS |= gS = ((SS >>>= HS) > 255) << 3, HS |= gS = ((SS >>>= gS) > 15) << 2, (HS |= gS = ((SS >>>= gS) > 3) << 1) | (SS >>>= gS) >> 1
    }, HS.log10 = function(SS) {
      return SS >= 1e9 ? 9 : SS >= 1e8 ? 8 : SS >= 1e7 ? 7 : SS >= 1e6 ? 6 : SS >= 1e5 ? 5 : SS >= 1e4 ? 4 : SS >= 1e3 ? 3 : SS >= 100 ? 2 : SS >= 10 ? 1 : 0
    }, HS.popCount = function(SS) {
      return 16843009 * ((SS = (858993459 & (SS -= SS >>> 1 & 1431655765)) + (SS >>> 2 & 858993459)) + (SS >>> 4) & 252645135) >>> 24
    }, HS.countTrailingZeros = gS, HS.nextPow2 = function(SS) {
      return SS += 0 === SS, --SS, SS |= SS >>> 1, SS |= SS >>> 2, SS |= SS >>> 4, SS |= SS >>> 8, (SS |= SS >>> 16) + 1
    }, HS.prevPow2 = function(SS) {
      return SS |= SS >>> 1, SS |= SS >>> 2, SS |= SS >>> 4, SS |= SS >>> 8, (SS |= SS >>> 16) - (SS >>> 1)
    }, HS.parity = function(SS) {
      return SS ^= SS >>> 16, SS ^= SS >>> 8, SS ^= SS >>> 4, 27030 >>> (SS &= 15) & 1
    };
    var tS = new Array(256);
    ! function(SS) {
      for (var HS = 0; HS < 256; ++HS) {
        var gS = HS,
          tS = HS,
          bS = 7;
        for (gS >>>= 1; gS; gS >>>= 1) tS <<= 1, tS |= 1 & gS, --bS;
        SS[HS] = tS << bS & 255
      }
    }(tS), HS.reverse = function(SS) {
      return tS[255 & SS] << 24 | tS[SS >>> 8 & 255] << 16 | tS[SS >>> 16 & 255] << 8 | tS[SS >>> 24 & 255]
    }, HS.interleave2 = function(SS, HS) {
      return (SS = 1431655765 & ((SS = 858993459 & ((SS = 252645135 & ((SS = 16711935 & ((SS &= 65535) | SS << 8)) | SS << 4)) | SS << 2)) | SS << 1)) | (HS = 1431655765 & ((HS = 858993459 & ((HS = 252645135 & ((HS = 16711935 & ((HS &= 65535) | HS << 8)) | HS << 4)) | HS << 2)) | HS << 1)) << 1
    }, HS.deinterleave2 = function(SS, HS) {
      return (SS = 65535 & ((SS = 16711935 & ((SS = 252645135 & ((SS = 858993459 & ((SS = SS >>> HS & 1431655765) | SS >>> 1)) | SS >>> 2)) | SS >>> 4)) | SS >>> 16)) << 16 >> 16
    }, HS.interleave3 = function(SS, HS, gS) {
      return SS = 1227133513 & ((SS = 3272356035 & ((SS = 251719695 & ((SS = 4278190335 & ((SS &= 1023) | SS << 16)) | SS << 8)) | SS << 4)) | SS << 2), (SS |= (HS = 1227133513 & ((HS = 3272356035 & ((HS = 251719695 & ((HS = 4278190335 & ((HS &= 1023) | HS << 16)) | HS << 8)) | HS << 4)) | HS << 2)) << 1) | (gS = 1227133513 & ((gS = 3272356035 & ((gS = 251719695 & ((gS = 4278190335 & ((gS &= 1023) | gS << 16)) | gS << 8)) | gS << 4)) | gS << 2)) << 2
    }, HS.deinterleave3 = function(SS, HS) {
      return (SS = 1023 & ((SS = 4278190335 & ((SS = 251719695 & ((SS = 3272356035 & ((SS = SS >>> HS & 1227133513) | SS >>> 2)) | SS >>> 4)) | SS >>> 8)) | SS >>> 16)) << 22 >> 22
    }, HS.nextCombination = function(SS) {
      var HS = SS | SS - 1;
      return HS + 1 | (~HS & -~HS) - 1 >>> gS(SS) + 1
    }
  },
  37294: (SS, HS, gS) => {
    gS.d(HS, {
      Color3: () => tS.b,
      b: () => tS.c
    });
    var tS = gS(37300);
    (0, tS.e)()
  },
  37783: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => bS
    });
    var tS = gS(37791);
    class bS {
      static GetPlanes(SS) {
        const HS = [];
        for (let gS = 0; gS < 6; gS++) HS.push(new tS.e(0, 0, 0, 0));
        return bS.GetPlanesToRef(SS, HS), HS
      }
      static GetNearPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] + gS[2], HS.normal.y = gS[7] + gS[6], HS.normal.z = gS[11] + gS[10], HS.d = gS[15] + gS[14], HS.normalize()
      }
      static GetFarPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] - gS[2], HS.normal.y = gS[7] - gS[6], HS.normal.z = gS[11] - gS[10], HS.d = gS[15] - gS[14], HS.normalize()
      }
      static GetLeftPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] + gS[0], HS.normal.y = gS[7] + gS[4], HS.normal.z = gS[11] + gS[8], HS.d = gS[15] + gS[12], HS.normalize()
      }
      static GetRightPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] - gS[0], HS.normal.y = gS[7] - gS[4], HS.normal.z = gS[11] - gS[8], HS.d = gS[15] - gS[12], HS.normalize()
      }
      static GetTopPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] - gS[1], HS.normal.y = gS[7] - gS[5], HS.normal.z = gS[11] - gS[9], HS.d = gS[15] - gS[13], HS.normalize()
      }
      static GetBottomPlaneToRef(SS, HS) {
        const gS = SS.m;
        HS.normal.x = gS[3] + gS[1], HS.normal.y = gS[7] + gS[5], HS.normal.z = gS[11] + gS[9], HS.d = gS[15] + gS[13], HS.normalize()
      }
      static GetPlanesToRef(SS, HS) {
        bS.GetNearPlaneToRef(SS, HS[0]), bS.GetFarPlaneToRef(SS, HS[1]), bS.GetLeftPlaneToRef(SS, HS[2]), bS.GetRightPlaneToRef(SS, HS[3]), bS.GetTopPlaneToRef(SS, HS[4]), bS.GetBottomPlaneToRef(SS, HS[5])
      }
      static IsPointInFrustum(SS, HS) {
        for (let gS = 0; gS < 6; gS++)
          if (HS[gS].dotCoordinate(SS) < 0) return !1;
        return !0
      }
    }
  },
  37791: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => bS
    });
    var tS = gS(37117);
    class bS {
      constructor(SS, HS, gS, bS) {
        this.normal = new tS.n(SS, HS, gS), this.d = bS
      }
      lgS() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new bS(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let SS = this.normal.getHashCode();
        return SS = 397 * SS ^ this.d, SS
      }
      normalize() {
        const SS = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let HS = 0;
        return 0 !== SS && (HS = 1 / SS), this.normal.x *= HS, this.normal.y *= HS, this.normal.z *= HS, this.d *= HS, this
      }
      transform(SS) {
        const HS = bS._TmpMatrix;
        SS.invertToRef(HS);
        const gS = HS.m,
          tS = this.normal.x,
          XS = this.normal.y,
          xS = this.normal.z,
          NS = this.d,
          qS = tS * gS[0] + XS * gS[1] + xS * gS[2] + NS * gS[3],
          uS = tS * gS[4] + XS * gS[5] + xS * gS[6] + NS * gS[7],
          IS = tS * gS[8] + XS * gS[9] + xS * gS[10] + NS * gS[11],
          fS = tS * gS[12] + XS * gS[13] + xS * gS[14] + NS * gS[15];
        return new bS(qS, uS, IS, fS)
      }
      dotCoordinate(SS) {
        return this.normal.x * SS.x + this.normal.y * SS.y + this.normal.z * SS.z + this.d
      }
      copyFromPoints(SS, HS, gS) {
        const tS = HS.x - SS.x,
          bS = HS.y - SS.y,
          XS = HS.z - SS.z,
          xS = gS.x - SS.x,
          NS = gS.y - SS.y,
          qS = gS.z - SS.z,
          uS = bS * qS - XS * NS,
          IS = XS * xS - tS * qS,
          fS = tS * NS - bS * xS,
          kS = Math.sqrt(uS * uS + IS * IS + fS * fS);
        let aS;
        return aS = 0 !== kS ? 1 / kS : 0, this.normal.x = uS * aS, this.normal.y = IS * aS, this.normal.z = fS * aS, this.d = -(this.normal.x * SS.x + this.normal.y * SS.y + this.normal.z * SS.z), this
      }
      isFrontFacingTo(SS, HS) {
        return tS.n.Dot(this.normal, SS) <= HS
      }
      signedDistanceTo(SS) {
        return tS.n.Dot(SS, this.normal) + this.d
      }
      static FromArray(SS) {
        return new bS(SS[0], SS[1], SS[2], SS[3])
      }
      static FromPoints(SS, HS, gS) {
        const tS = new bS(0, 0, 0, 0);
        return tS.copyFromPoints(SS, HS, gS), tS
      }
      static FromPositionAndNormal(SS, HS) {
        const gS = new bS(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(SS, HS, gS)
      }
      static FromPositionAndNormalToRef(SS, HS, gS) {
        return gS.normal.dJ(HS), gS.normal.normalize(), gS.d = -SS.dot(gS.normal), gS
      }
      static SignedDistanceToPlaneFromPositionAndNormal(SS, HS, gS) {
        const bS = -(HS.x * SS.x + HS.y * SS.y + HS.z * SS.z);
        return tS.n.Dot(gS, HS) + bS
      }
    }
    bS._TmpMatrix = tS.e.Identity()
  },
  37113: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      Matrix: () => tS.e,
      Quaternion: () => tS.i,
      RegisterMathVector: () => tS.k,
      TmpVectors: () => tS.l,
      Vector2: () => tS.m,
      VK: () => tS.n,
      Vector4: () => tS.r
    });
    var tS = gS(37117);
    (0, tS.k)()
  },
  38134: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => tS
    });
    class tS {
      constructor(SS, HS, gS, tS) {
        this.x = SS, this.y = HS, this.width = gS, this.height = tS
      }
      toGlobal(SS, HS) {
        return new tS(this.x * SS, this.y * HS, this.width * SS, this.height * HS)
      }
      toGlobalToRef(SS, HS, gS) {
        return gS.x = this.x * SS, gS.y = this.y * HS, gS.width = this.width * SS, gS.height = this.height * HS, this
      }
      clone() {
        return new tS(this.x, this.y, this.width, this.height)
      }
    }
  },
  37933: (SS, HS, gS) => {
    function tS() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (SS => {
        const HS = 16 * Math.random() | 0;
        return ("x" === SS ? HS : 3 & HS | 8).toString(16)
      }))
    }
    gS.d(HS, {
      c: () => tS
    })
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);