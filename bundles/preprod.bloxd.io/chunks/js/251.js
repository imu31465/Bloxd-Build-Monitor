/*! For license information please see fo1voe.251.1a226e65.chunk.js.LICENSE.txt */
export const id = 251;
export const ids = [251, 258];
export const modules = {
  39285: MM => {
    MM.exports = function(MM) {
      return null != MM && null != MM.constructor && "function" === typeof MM.constructor.isBuffer && MM.constructor.isBuffer(MM)
    }
  },
  39276: (MM, rM, iM) => {
    var OM = iM(39280),
      SM = iM(39283),
      jM = iM(39285);
    iM.g.__TYPEDARRAY_POOL || (iM.g.__TYPEDARRAY_POOL = {
      UINT8: SM([32, 0]),
      UINT16: SM([32, 0]),
      UINT32: SM([32, 0]),
      INT8: SM([32, 0]),
      INT16: SM([32, 0]),
      INT32: SM([32, 0]),
      FLOAT: SM([32, 0]),
      DOUBLE: SM([32, 0]),
      DATA: SM([32, 0]),
      UINT8C: SM([32, 0]),
      BUFFER: SM([32, 0])
    });
    var aM = "undefined" !== typeof Uint8ClampedArray,
      PM = iM.g.__TYPEDARRAY_POOL;
    PM.UINT8C || (PM.UINT8C = SM([32, 0])), PM.BUFFER || (PM.BUFFER = SM([32, 0]));
    var nM = PM.DATA,
      QM = PM.BUFFER;

    function zM(MM) {
      if (MM) {
        var rM = MM.length || MM.byteLength,
          iM = OM.log2(rM);
        nM[iM].push(MM)
      }
    }

    function LM(MM) {
      MM = OM.nextPow2(MM);
      var rM = OM.log2(MM),
        iM = nM[rM];
      return iM.length > 0 ? iM.pop() : new ArrayBuffer(MM)
    }

    function mM(MM) {
      return new Uint8Array(LM(MM), 0, MM)
    }

    function HM(MM) {
      return new Uint16Array(LM(2 * MM), 0, MM)
    }

    function hM(MM) {
      return new Uint32Array(LM(4 * MM), 0, MM)
    }

    function JM(MM) {
      return new Int8Array(LM(MM), 0, MM)
    }

    function dM(MM) {
      return new Int16Array(LM(2 * MM), 0, MM)
    }

    function yM(MM) {
      return new Int32Array(LM(4 * MM), 0, MM)
    }

    function lM(MM) {
      return new Float32Array(LM(4 * MM), 0, MM)
    }

    function EM(MM) {
      return new Float64Array(LM(8 * MM), 0, MM)
    }

    function UM(MM) {
      return aM ? new Uint8ClampedArray(LM(MM), 0, MM) : mM(MM)
    }

    function GM(MM) {
      return new DataView(LM(MM), 0, MM)
    }
    rM.free = function(MM) {
      if (jM(MM)) QM[OM.log2(MM.length)].push(MM);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(MM) && (MM = MM.buffer), !MM) return;
        var rM = MM.length || MM.byteLength,
          iM = 0 | OM.log2(rM);
        nM[iM].push(MM)
      }
    }, rM.freeUint8 = rM.freeUint16 = rM.freeUint32 = rM.freeInt8 = rM.freeInt16 = rM.freeInt32 = rM.freeFloat32 = rM.freeFloat = rM.freeFloat64 = rM.freeDouble = rM.freeUint8Clamped = rM.freeDataView = function(MM) {
      zM(MM.buffer)
    }, rM.freeArrayBuffer = zM, rM.freeBuffer = function(MM) {
      QM[OM.log2(MM.length)].push(MM)
    }, rM.malloc = function(MM, rM) {
      if (void 0 === rM || "arraybuffer" === rM) return LM(MM);
      switch (rM) {
        case "uint8":
          return mM(MM);
        case "uint16":
          return HM(MM);
        case "uint32":
          return hM(MM);
        case "int8":
          return JM(MM);
        case "int16":
          return dM(MM);
        case "int32":
          return yM(MM);
        case "float":
        case "float32":
          return lM(MM);
        case "double":
        case "float64":
          return EM(MM);
        case "uint8_clamped":
          return UM(MM);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return GM(MM);
        default:
          return null
      }
      return null
    }, rM.mallocArrayBuffer = LM, rM.mallocUint8 = mM, rM.mallocUint16 = HM, rM.mallocUint32 = hM, rM.mallocInt8 = JM, rM.mallocInt16 = dM, rM.mallocInt32 = yM, rM.mallocFloat32 = rM.mallocFloat = lM, rM.mallocFloat64 = rM.mallocDouble = EM, rM.mallocUint8Clamped = UM, rM.mallocDataView = GM, rM.clearCache = function() {
      for (var MM = 0; MM < 32; ++MM) PM.UINT8[MM].length = 0, PM.UINT16[MM].length = 0, PM.UINT32[MM].length = 0, PM.INT8[MM].length = 0, PM.INT16[MM].length = 0, PM.INT32[MM].length = 0, PM.FLOAT[MM].length = 0, PM.DOUBLE[MM].length = 0, PM.UINT8C[MM].length = 0, nM[MM].length = 0, QM[MM].length = 0
    }
  },
  39280: (MM, rM) => {
    function iM(MM) {
      var rM = 32;
      return (MM &= -MM) && rM--, 65535 & MM && (rM -= 16), 16711935 & MM && (rM -= 8), 252645135 & MM && (rM -= 4), 858993459 & MM && (rM -= 2), 1431655765 & MM && (rM -= 1), rM
    }
    rM.INT_BITS = 32, rM.INT_MAX = 2147483647, rM.INT_MIN = -1 << 31, rM.sign = function(MM) {
      return (MM > 0) - (MM < 0)
    }, rM.abs = function(MM) {
      var rM = MM >> 31;
      return (MM ^ rM) - rM
    }, rM.min = function(MM, rM) {
      return rM ^ (MM ^ rM) & -(MM < rM)
    }, rM.max = function(MM, rM) {
      return MM ^ (MM ^ rM) & -(MM < rM)
    }, rM.isPow2 = function(MM) {
      return !(MM & MM - 1) && !!MM
    }, rM.log2 = function(MM) {
      var rM, iM;
      return rM = (MM > 65535) << 4, rM |= iM = ((MM >>>= rM) > 255) << 3, rM |= iM = ((MM >>>= iM) > 15) << 2, (rM |= iM = ((MM >>>= iM) > 3) << 1) | (MM >>>= iM) >> 1
    }, rM.log10 = function(MM) {
      return MM >= 1e9 ? 9 : MM >= 1e8 ? 8 : MM >= 1e7 ? 7 : MM >= 1e6 ? 6 : MM >= 1e5 ? 5 : MM >= 1e4 ? 4 : MM >= 1e3 ? 3 : MM >= 100 ? 2 : MM >= 10 ? 1 : 0
    }, rM.popCount = function(MM) {
      return 16843009 * ((MM = (858993459 & (MM -= MM >>> 1 & 1431655765)) + (MM >>> 2 & 858993459)) + (MM >>> 4) & 252645135) >>> 24
    }, rM.countTrailingZeros = iM, rM.nextPow2 = function(MM) {
      return MM += 0 === MM, --MM, MM |= MM >>> 1, MM |= MM >>> 2, MM |= MM >>> 4, MM |= MM >>> 8, (MM |= MM >>> 16) + 1
    }, rM.prevPow2 = function(MM) {
      return MM |= MM >>> 1, MM |= MM >>> 2, MM |= MM >>> 4, MM |= MM >>> 8, (MM |= MM >>> 16) - (MM >>> 1)
    }, rM.parity = function(MM) {
      return MM ^= MM >>> 16, MM ^= MM >>> 8, MM ^= MM >>> 4, 27030 >>> (MM &= 15) & 1
    };
    var OM = new Array(256);
    ! function(MM) {
      for (var rM = 0; rM < 256; ++rM) {
        var iM = rM,
          OM = rM,
          SM = 7;
        for (iM >>>= 1; iM; iM >>>= 1) OM <<= 1, OM |= 1 & iM, --SM;
        MM[rM] = OM << SM & 255
      }
    }(OM), rM.reverse = function(MM) {
      return OM[255 & MM] << 24 | OM[MM >>> 8 & 255] << 16 | OM[MM >>> 16 & 255] << 8 | OM[MM >>> 24 & 255]
    }, rM.interleave2 = function(MM, rM) {
      return (MM = 1431655765 & ((MM = 858993459 & ((MM = 252645135 & ((MM = 16711935 & ((MM &= 65535) | MM << 8)) | MM << 4)) | MM << 2)) | MM << 1)) | (rM = 1431655765 & ((rM = 858993459 & ((rM = 252645135 & ((rM = 16711935 & ((rM &= 65535) | rM << 8)) | rM << 4)) | rM << 2)) | rM << 1)) << 1
    }, rM.deinterleave2 = function(MM, rM) {
      return (MM = 65535 & ((MM = 16711935 & ((MM = 252645135 & ((MM = 858993459 & ((MM = MM >>> rM & 1431655765) | MM >>> 1)) | MM >>> 2)) | MM >>> 4)) | MM >>> 16)) << 16 >> 16
    }, rM.interleave3 = function(MM, rM, iM) {
      return MM = 1227133513 & ((MM = 3272356035 & ((MM = 251719695 & ((MM = 4278190335 & ((MM &= 1023) | MM << 16)) | MM << 8)) | MM << 4)) | MM << 2), (MM |= (rM = 1227133513 & ((rM = 3272356035 & ((rM = 251719695 & ((rM = 4278190335 & ((rM &= 1023) | rM << 16)) | rM << 8)) | rM << 4)) | rM << 2)) << 1) | (iM = 1227133513 & ((iM = 3272356035 & ((iM = 251719695 & ((iM = 4278190335 & ((iM &= 1023) | iM << 16)) | iM << 8)) | iM << 4)) | iM << 2)) << 2
    }, rM.deinterleave3 = function(MM, rM) {
      return (MM = 1023 & ((MM = 4278190335 & ((MM = 251719695 & ((MM = 3272356035 & ((MM = MM >>> rM & 1227133513) | MM >>> 2)) | MM >>> 4)) | MM >>> 8)) | MM >>> 16)) << 22 >> 22
    }, rM.nextCombination = function(MM) {
      var rM = MM | MM - 1;
      return rM + 1 | (~rM & -~rM) - 1 >>> iM(MM) + 1
    }
  },
  39271: (MM, rM, iM) => {
    MM.exports = function(MM, rM, iM) {
      switch (arguments.length) {
        case 1:
          return OM = [], QM(SM = MM, SM, zM, !0), OM;
        case 2:
          return "function" === typeof rM ? QM(MM, MM, rM, !0) : function(MM, rM) {
            return OM = [], QM(MM, rM, zM, !1), OM
          }(MM, rM);
        case 3:
          return QM(MM, rM, iM, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var SM
    };
    var OM, SM = iM(39276),
      jM = iM(39288),
      aM = iM(39296);

    function PM(MM, rM) {
      for (var iM = 0; iM < MM; ++iM)
        if (!(rM[iM] <= rM[iM + MM])) return !0;
      return !1
    }

    function nM(MM, rM, iM, OM) {
      for (var SM = 0, jM = 0, aM = 0, nM = MM.length; aM < nM; ++aM) {
        var QM = MM[aM];
        if (!PM(rM, QM)) {
          for (var zM = 0; zM < 2 * rM; ++zM) iM[SM++] = QM[zM];
          OM[jM++] = aM
        }
      }
      return jM
    }

    function QM(MM, rM, iM, OM) {
      var PM = MM.length,
        QM = rM.length;
      if (!(PM <= 0 || QM <= 0)) {
        var zM = MM[0].length >>> 1;
        if (!(zM <= 0)) {
          var LM, mM = SM.mallocDouble(2 * zM * PM),
            HM = SM.mallocInt32(PM);
          if ((PM = nM(MM, zM, mM, HM)) > 0) {
            if (1 === zM && OM) jM.init(PM), LM = jM.sweepComplete(zM, iM, 0, PM, mM, HM, 0, PM, mM, HM);
            else {
              var hM = SM.mallocDouble(2 * zM * QM),
                JM = SM.mallocInt32(QM);
              (QM = nM(rM, zM, hM, JM)) > 0 && (jM.init(PM + QM), LM = 1 === zM ? jM.sweepBipartite(zM, iM, 0, PM, mM, HM, 0, QM, hM, JM) : aM(zM, iM, OM, PM, mM, HM, QM, hM, JM), SM.free(hM), SM.free(JM))
            }
            SM.free(mM), SM.free(HM)
          }
          return LM
        }
      }
    }

    function zM(MM, rM) {
      OM.push([MM, rM])
    }
  },
  39299: (MM, rM) => {
    var iM = "d",
      OM = "ax",
      SM = "fp",
      jM = "es",
      aM = "rs",
      PM = "re",
      nM = "rb",
      QM = "bs",
      zM = "be",
      LM = "bb",
      mM = [iM, OM, "vv", aM, PM, nM, "ri", QM, zM, LM, "bi"];

    function HM(MM) {
      var rM = "bruteForce" + (MM ? "Full" : "Partial"),
        OM = [],
        aM = mM.slice();
      MM || aM.splice(3, 0, SM);
      var PM = ["function " + rM + "(" + aM.join() + "){"];

      function nM(rM, SM) {
        var aM = function(MM, rM, OM) {
          var SM = "bruteForce" + (MM ? "Red" : "Blue") + (rM ? "Flip" : "") + (OM ? "Full" : ""),
            aM = ["function ", SM, "(", mM.join(), "){", "var ", jM, "=2*", iM, ";"],
            PM = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            nM = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (OM ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return MM ? aM.push(PM, "Q", ":", nM) : aM.push(nM, "Q", ":", PM), OM ? aM.push("if(y1<x0||x1<y0)continue;") : rM ? aM.push("if(y0<=x0||x1<y0)continue;") : aM.push("if(y0<x0||x1<y0)continue;"), aM.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), rM ? aM.push("yi,xi") : aM.push("xi,yi"), aM.push(");if(rv!==void 0)return rv;}}}"), {
            name: SM,
            code: aM.join("")
          }
        }(rM, SM, MM);
        OM.push(aM.code), PM.push("return " + aM.name + "(" + mM.join() + ");")
      }
      PM.push("if(re-rs>be-bs){"), MM ? (nM(!0, !1), PM.push("}else{"), nM(!1, !1)) : (PM.push("if(fp){"), nM(!0, !0), PM.push("}else{"), nM(!0, !1), PM.push("}}else{if(fp){"), nM(!1, !0), PM.push("}else{"), nM(!1, !1), PM.push("}")), PM.push("}}return " + rM);
      var QM = OM.join("") + PM.join("");
      return new Function(QM)()
    }
    rM.partial = HM(!1), rM.full = HM(!0)
  },
  39296: (MM, rM, iM) => {
    MM.exports = function(MM, rM, iM, jM, zM, gM, uM, RM, pM) {
      ! function(MM, rM) {
        var iM = 8 * SM.log2(rM + 1) * (MM + 1) | 0,
          jM = SM.nextPow2(UM * iM);
        CM.length < jM && (OM.free(CM), CM = OM.mallocInt32(jM));
        var aM = SM.nextPow2(GM * iM);
        eM.length < aM && (OM.free(eM), eM = OM.mallocDouble(aM))
      }(MM, jM + uM);
      var WM, sM = 0,
        DM = 2 * MM;
      bM(sM++, 0, 0, jM, 0, uM, iM ? 16 : 0, -1 / 0, 1 / 0), iM || bM(sM++, 0, 0, uM, 0, jM, 1, -1 / 0, 1 / 0);
      for (; sM > 0;) {
        var kM = (sM -= 1) * UM,
          ZM = CM[kM],
          oM = CM[kM + 1],
          fM = CM[kM + 2],
          YM = CM[kM + 3],
          NM = CM[kM + 4],
          AM = CM[kM + 5],
          xM = sM * GM,
          vM = eM[xM],
          FM = eM[xM + 1],
          BM = 1 & AM,
          XM = !!(16 & AM),
          IM = zM,
          KM = gM,
          qM = RM,
          TM = pM;
        if (BM && (IM = RM, KM = pM, qM = zM, TM = gM), !(2 & AM && oM >= (fM = dM(MM, ZM, oM, fM, IM, KM, FM))) && !(4 & AM && (oM = yM(MM, ZM, oM, fM, IM, KM, vM)) >= fM)) {
          var VM = fM - oM,
            cM = NM - YM;
          if (XM) {
            if (MM * VM * (VM + cM) < HM) {
              if (void 0 !== (WM = nM.scanComplete(MM, ZM, rM, oM, fM, IM, KM, YM, NM, qM, TM))) return WM;
              continue
            }
          } else {
            if (MM * Math.min(VM, cM) < LM) {
              if (void 0 !== (WM = aM(MM, ZM, rM, BM, oM, fM, IM, KM, YM, NM, qM, TM))) return WM;
              continue
            }
            if (MM * VM * cM < mM) {
              if (void 0 !== (WM = nM.scanBipartite(MM, ZM, rM, BM, oM, fM, IM, KM, YM, NM, qM, TM))) return WM;
              continue
            }
          }
          var Mr = hM(MM, ZM, oM, fM, IM, KM, vM, FM);
          if (oM < Mr)
            if (MM * (Mr - oM) < LM) {
              if (void 0 !== (WM = PM(MM, ZM + 1, rM, oM, Mr, IM, KM, YM, NM, qM, TM))) return WM
            } else if (ZM === MM - 2) {
            if (void 0 !== (WM = BM ? nM.sweepBipartite(MM, rM, YM, NM, qM, TM, oM, Mr, IM, KM) : nM.sweepBipartite(MM, rM, oM, Mr, IM, KM, YM, NM, qM, TM))) return WM
          } else bM(sM++, ZM + 1, oM, Mr, YM, NM, BM, -1 / 0, 1 / 0), bM(sM++, ZM + 1, YM, NM, oM, Mr, 1 ^ BM, -1 / 0, 1 / 0);
          if (Mr < fM) {
            var rr = QM(MM, ZM, YM, NM, qM, TM),
              ir = qM[DM * rr + ZM],
              Or = JM(MM, ZM, rr, NM, qM, TM, ir);
            if (Or < NM && bM(sM++, ZM, Mr, fM, Or, NM, (4 | BM) + (XM ? 16 : 0), ir, FM), YM < rr && bM(sM++, ZM, Mr, fM, YM, rr, (2 | BM) + (XM ? 16 : 0), vM, ir), rr + 1 === Or) {
              if (void 0 !== (WM = XM ? tM(MM, ZM, rM, Mr, fM, IM, KM, rr, qM, TM[rr]) : wM(MM, ZM, rM, BM, Mr, fM, IM, KM, rr, qM, TM[rr]))) return WM
            } else if (rr < Or) {
              var Sr;
              if (XM) {
                if (Mr < (Sr = lM(MM, ZM, Mr, fM, IM, KM, ir))) {
                  var jr = JM(MM, ZM, Mr, Sr, IM, KM, ir);
                  if (ZM === MM - 2) {
                    if (Mr < jr && void 0 !== (WM = nM.sweepComplete(MM, rM, Mr, jr, IM, KM, rr, Or, qM, TM))) return WM;
                    if (jr < Sr && void 0 !== (WM = nM.sweepBipartite(MM, rM, jr, Sr, IM, KM, rr, Or, qM, TM))) return WM
                  } else Mr < jr && bM(sM++, ZM + 1, Mr, jr, rr, Or, 16, -1 / 0, 1 / 0), jr < Sr && (bM(sM++, ZM + 1, jr, Sr, rr, Or, 0, -1 / 0, 1 / 0), bM(sM++, ZM + 1, rr, Or, jr, Sr, 1, -1 / 0, 1 / 0))
                }
              } else Mr < (Sr = BM ? EM(MM, ZM, Mr, fM, IM, KM, ir) : lM(MM, ZM, Mr, fM, IM, KM, ir)) && (ZM === MM - 2 ? WM = BM ? nM.sweepBipartite(MM, rM, rr, Or, qM, TM, Mr, Sr, IM, KM) : nM.sweepBipartite(MM, rM, Mr, Sr, IM, KM, rr, Or, qM, TM) : (bM(sM++, ZM + 1, Mr, Sr, rr, Or, BM, -1 / 0, 1 / 0), bM(sM++, ZM + 1, rr, Or, Mr, Sr, 1 ^ BM, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var OM = iM(39276),
      SM = iM(39280),
      jM = iM(39299),
      aM = jM.partial,
      PM = jM.full,
      nM = iM(39288),
      QM = iM(39308),
      zM = iM(39316),
      LM = 128,
      mM = 1 << 22,
      HM = 1 << 22,
      hM = zM("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      JM = zM("lo===p0", ["p0"]),
      dM = zM("lo<p0", ["p0"]),
      yM = zM("hi<=p0", ["p0"]),
      lM = zM("lo<=p0&&p0<=hi", ["p0"]),
      EM = zM("lo<p0&&p0<=hi", ["p0"]),
      UM = 6,
      GM = 2,
      CM = OM.mallocInt32(1024),
      eM = OM.mallocDouble(1024);

    function bM(MM, rM, iM, OM, SM, jM, aM, PM, nM) {
      var QM = UM * MM;
      CM[QM] = rM, CM[QM + 1] = iM, CM[QM + 2] = OM, CM[QM + 3] = SM, CM[QM + 4] = jM, CM[QM + 5] = aM;
      var zM = GM * MM;
      eM[zM] = PM, eM[zM + 1] = nM
    }

    function wM(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM, zM) {
      var LM = 2 * MM,
        mM = nM * LM,
        HM = QM[mM + rM];
      MM: for (var hM = SM, JM = SM * LM; hM < jM; ++hM, JM += LM) {
        var dM = aM[JM + rM],
          yM = aM[JM + rM + MM];
        if (!(HM < dM || yM < HM) && (!OM || HM !== dM)) {
          for (var lM, EM = PM[hM], UM = rM + 1; UM < MM; ++UM) {
            dM = aM[JM + UM], yM = aM[JM + UM + MM];
            var GM = QM[mM + UM],
              CM = QM[mM + UM + MM];
            if (yM < GM || CM < dM) continue MM
          }
          if (void 0 !== (lM = OM ? iM(zM, EM) : iM(EM, zM))) return lM
        }
      }
    }

    function tM(MM, rM, iM, OM, SM, jM, aM, PM, nM, QM) {
      var zM = 2 * MM,
        LM = PM * zM,
        mM = nM[LM + rM];
      MM: for (var HM = OM, hM = OM * zM; HM < SM; ++HM, hM += zM) {
        var JM = aM[HM];
        if (JM !== QM) {
          var dM = jM[hM + rM],
            yM = jM[hM + rM + MM];
          if (!(mM < dM || yM < mM)) {
            for (var lM = rM + 1; lM < MM; ++lM) {
              dM = jM[hM + lM], yM = jM[hM + lM + MM];
              var EM = nM[LM + lM],
                UM = nM[LM + lM + MM];
              if (yM < EM || UM < dM) continue MM
            }
            var GM = iM(JM, QM);
            if (void 0 !== GM) return GM
          }
        }
      }
    }
  },
  39308: (MM, rM, iM) => {
    MM.exports = function(MM, rM, iM, aM, PM, nM) {
      if (aM <= iM + 1) return iM;
      var QM = iM,
        zM = aM,
        LM = aM + iM >>> 1,
        mM = 2 * MM,
        HM = LM,
        hM = PM[mM * LM + rM];
      for (; QM < zM;) {
        if (zM - QM < SM) {
          jM(MM, rM, QM, zM, PM, nM), hM = PM[mM * LM + rM];
          break
        }
        var JM = zM - QM,
          dM = Math.random() * JM + QM | 0,
          yM = PM[mM * dM + rM],
          lM = Math.random() * JM + QM | 0,
          EM = PM[mM * lM + rM],
          UM = Math.random() * JM + QM | 0,
          GM = PM[mM * UM + rM];
        yM <= EM ? GM >= EM ? (HM = lM, hM = EM) : yM >= GM ? (HM = dM, hM = yM) : (HM = UM, hM = GM) : EM >= GM ? (HM = lM, hM = EM) : GM >= yM ? (HM = dM, hM = yM) : (HM = UM, hM = GM);
        for (var CM = mM * (zM - 1), eM = mM * HM, bM = 0; bM < mM; ++bM, ++CM, ++eM) {
          var wM = PM[CM];
          PM[CM] = PM[eM], PM[eM] = wM
        }
        var tM = nM[zM - 1];
        nM[zM - 1] = nM[HM], nM[HM] = tM;
        for (CM = mM * (zM - 1), eM = mM * (HM = OM(MM, rM, QM, zM - 1, PM, nM, hM)), bM = 0; bM < mM; ++bM, ++CM, ++eM) {
          wM = PM[CM];
          PM[CM] = PM[eM], PM[eM] = wM
        }
        tM = nM[zM - 1];
        if (nM[zM - 1] = nM[HM], nM[HM] = tM, LM < HM) {
          for (zM = HM - 1; QM < zM && PM[mM * (zM - 1) + rM] === hM;) zM -= 1;
          zM += 1
        } else {
          if (!(HM < LM)) break;
          for (QM = HM + 1; QM < zM && PM[mM * QM + rM] === hM;) QM += 1
        }
      }
      return OM(MM, rM, iM, LM, PM, nM, PM[mM * LM + rM])
    };
    var OM = iM(39316)("lo<p0", ["p0"]),
      SM = 8;

    function jM(MM, rM, iM, OM, SM, jM) {
      for (var aM = 2 * MM, PM = aM * (iM + 1) + rM, nM = iM + 1; nM < OM; ++nM, PM += aM)
        for (var QM = SM[PM], zM = nM, LM = aM * (nM - 1); zM > iM && SM[LM + rM] > QM; --zM, LM -= aM) {
          for (var mM = LM, HM = LM + aM, hM = 0; hM < aM; ++hM, ++mM, ++HM) {
            var JM = SM[mM];
            SM[mM] = SM[HM], SM[HM] = JM
          }
          var dM = jM[zM];
          jM[zM] = jM[zM - 1], jM[zM - 1] = dM
        }
    }
  },
  39316: MM => {
    MM.exports = function(MM, iM) {
      var OM = "abcdef".split("").concat(iM),
        SM = [];
      MM.indexOf("lo") >= 0 && SM.push("lo=e[k+n]");
      MM.indexOf("hi") >= 0 && SM.push("hi=e[k+o]");
      return OM.push(rM.replace("_", SM.join()).replace("$", MM)), Function.apply(void 0, OM)
    };
    var rM = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  39294: MM => {
    MM.exports = function(MM, OM) {
      OM <= 4 * rM ? iM(0, OM - 1, MM) : QM(0, OM - 1, MM)
    };
    var rM = 32;

    function iM(MM, rM, iM) {
      for (var OM = 2 * (MM + 1), SM = MM + 1; SM <= rM; ++SM) {
        for (var jM = iM[OM++], aM = iM[OM++], PM = SM, nM = OM - 2; PM-- > MM;) {
          var QM = iM[nM - 2],
            zM = iM[nM - 1];
          if (QM < jM) break;
          if (QM === jM && zM < aM) break;
          iM[nM] = QM, iM[nM + 1] = zM, nM -= 2
        }
        iM[nM] = jM, iM[nM + 1] = aM
      }
    }

    function OM(MM, rM, iM) {
      rM *= 2;
      var OM = iM[MM *= 2],
        SM = iM[MM + 1];
      iM[MM] = iM[rM], iM[MM + 1] = iM[rM + 1], iM[rM] = OM, iM[rM + 1] = SM
    }

    function SM(MM, rM, iM) {
      rM *= 2, iM[MM *= 2] = iM[rM], iM[MM + 1] = iM[rM + 1]
    }

    function jM(MM, rM, iM, OM) {
      rM *= 2, iM *= 2;
      var SM = OM[MM *= 2],
        jM = OM[MM + 1];
      OM[MM] = OM[rM], OM[MM + 1] = OM[rM + 1], OM[rM] = OM[iM], OM[rM + 1] = OM[iM + 1], OM[iM] = SM, OM[iM + 1] = jM
    }

    function aM(MM, rM, iM, OM, SM) {
      rM *= 2, SM[MM *= 2] = SM[rM], SM[rM] = iM, SM[MM + 1] = SM[rM + 1], SM[rM + 1] = OM
    }

    function PM(MM, rM, iM) {
      rM *= 2;
      var OM = iM[MM *= 2],
        SM = iM[rM];
      return !(OM < SM) && (OM !== SM || iM[MM + 1] > iM[rM + 1])
    }

    function nM(MM, rM, iM, OM) {
      var SM = OM[MM *= 2];
      return SM < rM || SM === rM && OM[MM + 1] < iM
    }

    function QM(MM, zM, LM) {
      var mM = (zM - MM + 1) / 6 | 0,
        HM = MM + mM,
        hM = zM - mM,
        JM = MM + zM >> 1,
        dM = JM - mM,
        yM = JM + mM,
        lM = HM,
        EM = dM,
        UM = JM,
        GM = yM,
        CM = hM,
        eM = MM + 1,
        bM = zM - 1,
        wM = 0;
      PM(lM, EM, LM) && (wM = lM, lM = EM, EM = wM), PM(GM, CM, LM) && (wM = GM, GM = CM, CM = wM), PM(lM, UM, LM) && (wM = lM, lM = UM, UM = wM), PM(EM, UM, LM) && (wM = EM, EM = UM, UM = wM), PM(lM, GM, LM) && (wM = lM, lM = GM, GM = wM), PM(UM, GM, LM) && (wM = UM, UM = GM, GM = wM), PM(EM, CM, LM) && (wM = EM, EM = CM, CM = wM), PM(EM, UM, LM) && (wM = EM, EM = UM, UM = wM), PM(GM, CM, LM) && (wM = GM, GM = CM, CM = wM);
      for (var tM = LM[2 * EM], gM = LM[2 * EM + 1], uM = LM[2 * GM], RM = LM[2 * GM + 1], pM = 2 * lM, WM = 2 * UM, sM = 2 * CM, DM = 2 * HM, kM = 2 * JM, ZM = 2 * hM, oM = 0; oM < 2; ++oM) {
        var fM = LM[pM + oM],
          YM = LM[WM + oM],
          NM = LM[sM + oM];
        LM[DM + oM] = fM, LM[kM + oM] = YM, LM[ZM + oM] = NM
      }
      SM(dM, MM, LM), SM(yM, zM, LM);
      for (var AM = eM; AM <= bM; ++AM)
        if (nM(AM, tM, gM, LM)) AM !== eM && OM(AM, eM, LM), ++eM;
        else if (!nM(AM, uM, RM, LM))
        for (;;) {
          if (nM(bM, uM, RM, LM)) {
            nM(bM, tM, gM, LM) ? (jM(AM, eM, bM, LM), ++eM, --bM) : (OM(AM, bM, LM), --bM);
            break
          }
          if (--bM < AM) break
        }
      aM(MM, eM - 1, tM, gM, LM), aM(zM, bM + 1, uM, RM, LM), eM - 2 - MM <= rM ? iM(MM, eM - 2, LM) : QM(MM, eM - 2, LM), zM - (bM + 2) <= rM ? iM(bM + 2, zM, LM) : QM(bM + 2, zM, LM), bM - eM <= rM ? iM(eM, bM, LM) : QM(eM, bM, LM)
    }
  },
  39288: (MM, rM, iM) => {
    MM.exports = {
      init: function(MM) {
        var rM = SM.nextPow2(MM);
        nM.length < rM && (OM.free(nM), nM = OM.mallocInt32(rM));
        QM.length < rM && (OM.free(QM), QM = OM.mallocInt32(rM));
        zM.length < rM && (OM.free(zM), zM = OM.mallocInt32(rM));
        LM.length < rM && (OM.free(LM), LM = OM.mallocInt32(rM));
        mM.length < rM && (OM.free(mM), mM = OM.mallocInt32(rM));
        HM.length < rM && (OM.free(HM), HM = OM.mallocInt32(rM));
        var iM = 8 * rM;
        hM.length < iM && (OM.free(hM), hM = OM.mallocDouble(iM))
      },
      sweepBipartite: function(MM, rM, iM, OM, SM, PM, mM, HM, yM, lM) {
        for (var EM = 0, UM = 2 * MM, GM = MM - 1, CM = UM - 1, eM = iM; eM < OM; ++eM) {
          var bM = PM[eM],
            wM = UM * eM;
          hM[EM++] = SM[wM + GM], hM[EM++] = -(bM + 1), hM[EM++] = SM[wM + CM], hM[EM++] = bM
        }
        for (eM = mM; eM < HM; ++eM) {
          bM = lM[eM] + aM;
          var tM = UM * eM;
          hM[EM++] = yM[tM + GM], hM[EM++] = -bM, hM[EM++] = yM[tM + CM], hM[EM++] = bM
        }
        var gM = EM >>> 1;
        jM(hM, gM);
        var uM = 0,
          RM = 0;
        for (eM = 0; eM < gM; ++eM) {
          var pM = 0 | hM[2 * eM + 1];
          if (pM >= aM) JM(zM, LM, RM--, pM = pM - aM | 0);
          else if (pM >= 0) JM(nM, QM, uM--, pM);
          else if (pM <= -aM) {
            pM = -pM - aM | 0;
            for (var WM = 0; WM < uM; ++WM) {
              if (void 0 !== (sM = rM(nM[WM], pM))) return sM
            }
            dM(zM, LM, RM++, pM)
          } else {
            pM = -pM - 1 | 0;
            for (WM = 0; WM < RM; ++WM) {
              var sM;
              if (void 0 !== (sM = rM(pM, zM[WM]))) return sM
            }
            dM(nM, QM, uM++, pM)
          }
        }
      },
      sweepComplete: function(MM, rM, iM, OM, SM, aM, PM, yM, lM, EM) {
        for (var UM = 0, GM = 2 * MM, CM = MM - 1, eM = GM - 1, bM = iM; bM < OM; ++bM) {
          var wM = aM[bM] + 1 << 1,
            tM = GM * bM;
          hM[UM++] = SM[tM + CM], hM[UM++] = -wM, hM[UM++] = SM[tM + eM], hM[UM++] = wM
        }
        for (bM = PM; bM < yM; ++bM) {
          wM = EM[bM] + 1 << 1;
          var gM = GM * bM;
          hM[UM++] = lM[gM + CM], hM[UM++] = 1 | -wM, hM[UM++] = lM[gM + eM], hM[UM++] = 1 | wM
        }
        var uM = UM >>> 1;
        jM(hM, uM);
        var RM = 0,
          pM = 0,
          WM = 0;
        for (bM = 0; bM < uM; ++bM) {
          var sM = 0 | hM[2 * bM + 1],
            DM = 1 & sM;
          if (bM < uM - 1 && sM >> 1 === hM[2 * bM + 3] >> 1 && (DM = 2, bM += 1), sM < 0) {
            for (var kM = -(sM >> 1) - 1, ZM = 0; ZM < WM; ++ZM) {
              if (void 0 !== (oM = rM(mM[ZM], kM))) return oM
            }
            if (0 !== DM)
              for (ZM = 0; ZM < RM; ++ZM) {
                if (void 0 !== (oM = rM(nM[ZM], kM))) return oM
              }
            if (1 !== DM)
              for (ZM = 0; ZM < pM; ++ZM) {
                var oM;
                if (void 0 !== (oM = rM(zM[ZM], kM))) return oM
              }
            0 === DM ? dM(nM, QM, RM++, kM) : 1 === DM ? dM(zM, LM, pM++, kM) : 2 === DM && dM(mM, HM, WM++, kM)
          } else {
            kM = (sM >> 1) - 1;
            0 === DM ? JM(nM, QM, RM--, kM) : 1 === DM ? JM(zM, LM, pM--, kM) : 2 === DM && JM(mM, HM, WM--, kM)
          }
        }
      },
      scanBipartite: function(MM, rM, iM, OM, SM, PM, zM, LM, mM, HM, yM, lM) {
        var EM = 0,
          UM = 2 * MM,
          GM = rM,
          CM = rM + MM,
          eM = 1,
          bM = 1;
        OM ? bM = aM : eM = aM;
        for (var wM = SM; wM < PM; ++wM) {
          var tM = wM + eM,
            gM = UM * wM;
          hM[EM++] = zM[gM + GM], hM[EM++] = -tM, hM[EM++] = zM[gM + CM], hM[EM++] = tM
        }
        for (wM = mM; wM < HM; ++wM) {
          tM = wM + bM;
          var uM = UM * wM;
          hM[EM++] = yM[uM + GM], hM[EM++] = -tM
        }
        var RM = EM >>> 1;
        jM(hM, RM);
        var pM = 0;
        for (wM = 0; wM < RM; ++wM) {
          var WM = 0 | hM[2 * wM + 1];
          if (WM < 0) {
            var sM = !1;
            if ((tM = -WM) >= aM ? (sM = !OM, tM -= aM) : (sM = !!OM, tM -= 1), sM) dM(nM, QM, pM++, tM);
            else {
              var DM = lM[tM],
                kM = UM * tM,
                ZM = yM[kM + rM + 1],
                oM = yM[kM + rM + 1 + MM];
              MM: for (var fM = 0; fM < pM; ++fM) {
                var YM = nM[fM],
                  NM = UM * YM;
                if (!(oM < zM[NM + rM + 1] || zM[NM + rM + 1 + MM] < ZM)) {
                  for (var AM = rM + 2; AM < MM; ++AM)
                    if (yM[kM + AM + MM] < zM[NM + AM] || zM[NM + AM + MM] < yM[kM + AM]) continue MM;
                  var xM, vM = LM[YM];
                  if (void 0 !== (xM = OM ? iM(DM, vM) : iM(vM, DM))) return xM
                }
              }
            }
          } else JM(nM, QM, pM--, WM - eM)
        }
      },
      scanComplete: function(MM, rM, iM, OM, SM, PM, QM, zM, LM, mM, HM) {
        for (var JM = 0, dM = 2 * MM, yM = rM, lM = rM + MM, EM = OM; EM < SM; ++EM) {
          var UM = EM + aM,
            GM = dM * EM;
          hM[JM++] = PM[GM + yM], hM[JM++] = -UM, hM[JM++] = PM[GM + lM], hM[JM++] = UM
        }
        for (EM = zM; EM < LM; ++EM) {
          UM = EM + 1;
          var CM = dM * EM;
          hM[JM++] = mM[CM + yM], hM[JM++] = -UM
        }
        var eM = JM >>> 1;
        jM(hM, eM);
        var bM = 0;
        for (EM = 0; EM < eM; ++EM) {
          var wM = 0 | hM[2 * EM + 1];
          if (wM < 0) {
            if ((UM = -wM) >= aM) nM[bM++] = UM - aM;
            else {
              var tM = HM[UM -= 1],
                gM = dM * UM,
                uM = mM[gM + rM + 1],
                RM = mM[gM + rM + 1 + MM];
              MM: for (var pM = 0; pM < bM; ++pM) {
                var WM = nM[pM],
                  sM = QM[WM];
                if (sM === tM) break;
                var DM = dM * WM;
                if (!(RM < PM[DM + rM + 1] || PM[DM + rM + 1 + MM] < uM)) {
                  for (var kM = rM + 2; kM < MM; ++kM)
                    if (mM[gM + kM + MM] < PM[DM + kM] || PM[DM + kM + MM] < mM[gM + kM]) continue MM;
                  var ZM = iM(sM, tM);
                  if (void 0 !== ZM) return ZM
                }
              }
            }
          } else {
            for (UM = wM - aM, pM = bM - 1; pM >= 0; --pM)
              if (nM[pM] === UM) {
                for (kM = pM + 1; kM < bM; ++kM) nM[kM - 1] = nM[kM];
                break
              }-- bM
          }
        }
      }
    };
    var OM = iM(39276),
      SM = iM(39280),
      jM = iM(39294),
      aM = 1 << 28,
      PM = 1024,
      nM = OM.mallocInt32(PM),
      QM = OM.mallocInt32(PM),
      zM = OM.mallocInt32(PM),
      LM = OM.mallocInt32(PM),
      mM = OM.mallocInt32(PM),
      HM = OM.mallocInt32(PM),
      hM = OM.mallocDouble(8192);

    function JM(MM, rM, iM, OM) {
      var SM = rM[OM],
        jM = MM[iM - 1];
      MM[SM] = jM, rM[jM] = SM
    }

    function dM(MM, rM, iM, OM) {
      MM[iM] = OM, rM[OM] = iM
    }
  },
  39283: MM => {
    function rM(MM, iM, OM) {
      var SM = 0 | MM[OM];
      if (SM <= 0) return [];
      var jM, aM = new Array(SM);
      if (OM === MM.length - 1)
        for (jM = 0; jM < SM; ++jM) aM[jM] = iM;
      else
        for (jM = 0; jM < SM; ++jM) aM[jM] = rM(MM, iM, OM + 1);
      return aM
    }
    MM.exports = function(MM, iM) {
      switch ("undefined" === typeof iM && (iM = 0), typeof MM) {
        case "number":
          if (MM > 0) return function(MM, rM) {
            var iM, OM;
            for (iM = new Array(MM), OM = 0; OM < MM; ++OM) iM[OM] = rM;
            return iM
          }(0 | MM, iM);
          break;
        case "object":
          if ("number" === typeof MM.length) return rM(MM, iM, 0)
      }
      return []
    }
  },
  39240: (MM, rM, iM) => {
    MM.exports = function() {
      var MM = this;
      this.components = {}, this.comps = this.components;
      var rM = this.components,
        iM = 1,
        SM = {},
        jM = [],
        aM = [],
        PM = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function nM(MM, iM) {
        var OM = rM[iM],
          jM = SM[iM],
          aM = jM.hash[MM];
        aM && (jM.remove(MM), OM.vW && (OM.multi ? (aM.forEach((rM => {
          rM && OM.vW(MM, rM)
        })), aM.length = 0) : OM.vW(MM, aM)), PM.removals.push(jM), QM())
      }

      function QM() {
        PM.timeout || (PM.timeout = !0, setTimeout(zM, 1))
      }

      function zM() {
        PM.timeout = !1, LM()
      }

      function LM() {
        PM.multiComps.length && function(MM) {
          for (var rM = 0; rM < MM.length; rM++) {
            var {
              entID: iM,
              data: OM
            } = MM[rM], SM = OM.hash[iM];
            if (SM) {
              for (var jM = 0; jM < SM.length; jM++) SM[jM] || (SM.splice(jM, 1), jM--);
              0 === SM.length && (OM.remove(iM), PM.removals.push(OM))
            }
          }
          MM.length = 0
        }(PM.multiComps), PM.removals.length && function(MM) {
          for (var rM = 0; rM < MM.length; rM++) {
            MM[rM].flush()
          }
          MM.length = 0
        }(PM.removals)
      }
      this.yJ = SM, this._systems = jM, this._renderSystems = aM, this.iK = function(rM) {
        var OM = iM++;
        return Array.isArray(rM) && rM.forEach((rM => MM.eZ(OM, rM))), OM
      }, this.deleteEntity = function(rM) {
        return Object.keys(SM).forEach((MM => {
          SM[MM].hash[rM] && nM(rM, MM)
        })), MM
      }, this.IrM = function(MM) {
        if (!MM) throw new Error("Missing component definition");
        var iM = MM.name;
        if (!iM) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof iM) throw new Error("Component name must be a string.");
        if ("" === iM) throw new Error("Component name must be a non-empty string.");
        if (SM[iM]) throw new Error(`Component ${iM} already exists.`);
        var PM = {};
        return PM.name = iM, PM.multi = !!MM.multi, PM.order = isNaN(MM.order) ? 99 : MM.order, PM.stateConstructor = MM.stateConstructor || null, PM.state = MM.state || {}, PM.PU = MM.PU || null, PM.vW = MM.vW || null, PM.system = MM.system || null, PM.dU = MM.dU || null, rM[iM] = PM, SM[iM] = new OM, SM[iM]._pendingMultiCleanup = !1, SM[iM]._multiCleanupIDs = PM.multi ? [] : null, PM.system && (jM.push(iM), jM.sort(((MM, iM) => rM[MM].order - rM[iM].order))), PM.dU && (aM.push(iM), aM.sort(((MM, iM) => rM[MM].order - rM[iM].order))), iM
      }, this.overwriteComponent = function(MM, iM) {
        var OM = rM[MM];
        if (!OM) throw new Error(`Unknown component: ${MM}`);
        if (!iM) throw new Error("Missing component definition");
        if (OM.name !== iM.name) throw new Error("Overwriting component must use the same name property.");
        var PM = {};
        PM.name = MM, PM.multi = !!iM.multi, PM.order = isNaN(iM.order) ? 99 : iM.order, PM.state = iM.state || {}, PM.PU = iM.PU || null, PM.vW = iM.vW || null, PM.system = iM.system || null, PM.dU = iM.dU || null, rM[MM] = PM, SM[MM]._pendingMultiCleanup = !1, SM[MM]._multiCleanupIDs = PM.multi ? [] : null;
        var nM = jM.indexOf(MM);
        PM.system && nM < 0 && jM.push(MM), !PM.system && nM >= 0 && jM.splice(nM, 1), jM.sort(((MM, iM) => rM[MM].order - rM[iM].order));
        var QM = aM.indexOf(MM);
        PM.dU && QM < 0 && aM.push(MM), !PM.dU && QM >= 0 && aM.splice(QM, 1), aM.sort(((MM, iM) => rM[MM].order - rM[iM].order));
        var zM = PM.state;
        return this.iZ(MM).forEach((MM => {
          for (var rM in zM) rM in MM || (MM[rM] = zM[rM]);
          PM.PU && PM.PU(MM.HZ, MM)
        })), MM
      }, this.deleteComponent = function(iM) {
        var OM = SM[iM];
        if (!OM) throw new Error(`Unknown component: ${iM}`);
        OM.flush(), OM.list.forEach((MM => {
          MM && nM(MM.HZ || MM[0].HZ, iM)
        }));
        var PM = jM.indexOf(iM),
          QM = aM.indexOf(iM);
        return PM > -1 && jM.splice(PM, 1), QM > -1 && aM.splice(QM, 1), SM[iM].dispose(), delete SM[iM], delete rM[iM], MM
      }, this.eZ = function(MM, iM, OM) {
        var jM, aM = rM[iM],
          PM = SM[iM];
        if (!PM) throw new Error(`Unknown component: ${iM}.`);
        if (PM.hash[MM] && !aM.multi) throw new Error(`Entity ${MM} already has component: ${iM}.`);
        if (aM.stateConstructor) {
          if (!(jM = new aM.stateConstructor).hasOwnProperty("HZ")) throw new Error(`Component ${aM.name} stateConstructor type does not have property __id`);
          Object.assign(jM, aM.state, OM)
        } else jM = {
          HZ: MM,
          ...aM.state,
          ...OM
        };
        if (jM.HZ = MM, aM.multi) {
          var nM = PM.hash[MM];
          nM || (nM = [], PM.add(MM, nM)), nM.push(jM)
        } else PM.add(MM, jM);
        return aM.PU && aM.PU(MM, jM), this
      }, this.BMM = function(MM, rM) {
        var iM = SM[rM];
        if (!iM) throw new Error(`Unknown component: ${rM}.`);
        return !!iM.hash[MM]
      }, this.bZ = function(rM, iM) {
        if (!SM[iM]) throw new Error(`Unknown component: ${iM}.`);
        return nM(rM, iM), MM
      }, this.getState = function(MM, rM) {
        var iM = SM[rM];
        if (!iM) throw new Error(`Unknown component: ${rM}.`);
        return iM.hash[MM]
      }, this.iZ = function(MM) {
        var rM = SM[MM];
        if (!rM) throw new Error(`Unknown component: ${MM}.`);
        return LM(), rM.list
      }, this.trM = function(MM) {
        if (!SM[MM]) throw new Error(`Unknown component: ${MM}.`);
        var rM = SM[MM].hash;
        return MM => rM[MM]
      }, this.srM = function(MM) {
        if (!SM[MM]) throw new Error(`Unknown component: ${MM}.`);
        var rM = SM[MM].hash;
        return MM => !!rM[MM]
      }, this.bL = function(iM) {
        LM();
        for (var OM = 0; OM < jM.length; OM++) {
          var aM = jM[OM],
            PM = rM[aM],
            nM = SM[aM];
          PM.system(iM, nM.list), LM()
        }
        return MM
      }, this.render = function(iM) {
        LM();
        for (var OM = 0; OM < aM.length; OM++) {
          var jM = aM[OM],
            PM = rM[jM],
            nM = SM[jM];
          PM.dU(iM, nM.list), LM()
        }
        return MM
      }, this.removeMultiComponent = function(iM, OM, jM) {
        var aM = rM[OM],
          nM = SM[OM];
        if (!nM) throw new Error(`Unknown component: ${OM}.`);
        if (!aM.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(MM, rM, iM, OM) {
          var SM = iM.hash[MM];
          if (SM) {
            var jM = SM[OM];
            jM && (SM[OM] = null, rM.vW && rM.vW(MM, jM), PM.multiComps.push({
              entID: MM,
              data: iM
            }), QM())
          }
        }(iM, aM, nM, jM), MM
      }
    };
    var OM = iM(39243)
  },
  39243: MM => {
    function rM(MM, rM) {
      var iM = MM._map[rM];
      if (delete MM.hash[rM], delete MM._map[rM], iM === MM.list.length - 1) MM.list.pop(), MM._idList.pop();
      else {
        var OM = MM.list.pop();
        MM.list[iM] = OM;
        var SM = MM._idList.pop();
        MM._idList[iM] = SM, MM._map[SM] = iM
      }
    }
    MM.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(MM, rM) {
        if ("number" === typeof this._map[MM]) {
          var iM = this._map[MM];
          this.hash[MM] = rM, this.list[iM] = rM, this._idList[iM] = MM
        } else this._map[MM] = this.list.length, this.hash[MM] = rM, this.list.push(rM), this._idList.push(MM)
      }
      remove(MM) {
        var rM = this._map[MM];
        this.hash[MM] = null, this.list[rM] = null, this._pendingRemovals.push(MM)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var MM = 0; MM < this._pendingRemovals.length; MM++) {
          var iM = this._pendingRemovals[MM];
          null === this.hash[iM] && rM(this, iM)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  39027: (MM, rM, iM) => {
    MM = iM.nmd(MM);
    var OM = "__lodash_hash_undefined__",
      SM = 9007199254740991,
      jM = "[object Arguments]",
      aM = "[object Boolean]",
      PM = "[object Date]",
      nM = "[object Function]",
      QM = "[object GeneratorFunction]",
      zM = "[object Map]",
      LM = "[object Number]",
      mM = "[object Object]",
      HM = "[object Promise]",
      hM = "[object RegExp]",
      JM = "[object Set]",
      dM = "[object String]",
      yM = "[object Symbol]",
      lM = "[object WeakMap]",
      EM = "[object ArrayBuffer]",
      UM = "[object DataView]",
      GM = "[object Float32Array]",
      CM = "[object Float64Array]",
      eM = "[object Int8Array]",
      bM = "[object Int16Array]",
      wM = "[object Int32Array]",
      tM = "[object Uint8Array]",
      gM = "[object Uint8ClampedArray]",
      uM = "[object Uint16Array]",
      RM = "[object Uint32Array]",
      pM = /\w*$/,
      WM = /^\[object .+?Constructor\]$/,
      sM = /^(?:0|[1-9]\d*)$/,
      DM = {};
    DM[jM] = DM["[object Array]"] = DM[EM] = DM[UM] = DM[aM] = DM[PM] = DM[GM] = DM[CM] = DM[eM] = DM[bM] = DM[wM] = DM[zM] = DM[LM] = DM[mM] = DM[hM] = DM[JM] = DM[dM] = DM[yM] = DM[tM] = DM[gM] = DM[uM] = DM[RM] = !0, DM["[object Error]"] = DM[nM] = DM[lM] = !1;
    var kM = "object" == typeof iM.g && iM.g && iM.g.Object === Object && iM.g,
      ZM = "object" == typeof self && self && self.Object === Object && self,
      oM = kM || ZM || Function("return this")(),
      fM = rM && !rM.nodeType && rM,
      YM = fM && MM && !MM.nodeType && MM,
      NM = YM && YM.exports === fM;

    function AM(MM, rM) {
      return MM.set(rM[0], rM[1]), MM
    }

    function xM(MM, rM) {
      return MM.add(rM), MM
    }

    function vM(MM, rM, iM, OM) {
      var SM = -1,
        jM = MM ? MM.length : 0;
      for (OM && jM && (iM = MM[++SM]); ++SM < jM;) iM = rM(iM, MM[SM], SM, MM);
      return iM
    }

    function FM(MM) {
      var rM = !1;
      if (null != MM && "function" != typeof MM.toString) try {
        rM = !!(MM + "")
      } catch (iM) {}
      return rM
    }

    function BM(MM) {
      var rM = -1,
        iM = Array(MM.size);
      return MM.forEach((function(MM, OM) {
        iM[++rM] = [OM, MM]
      })), iM
    }

    function XM(MM, rM) {
      return function(iM) {
        return MM(rM(iM))
      }
    }

    function IM(MM) {
      var rM = -1,
        iM = Array(MM.size);
      return MM.forEach((function(MM) {
        iM[++rM] = MM
      })), iM
    }
    var KM = Array.prototype,
      qM = Function.prototype,
      TM = Object.prototype,
      VM = oM["__core-js_shared__"],
      cM = function() {
        var MM = /[^.]+$/.exec(VM && VM.keys && VM.keys.IE_PROTO || "");
        return MM ? "Symbol(src)_1." + MM : ""
      }(),
      Mr = qM.toString,
      rr = TM.hasOwnProperty,
      ir = TM.toString,
      Or = RegExp("^" + Mr.call(rr).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      Sr = NM ? oM.Vz : void 0,
      jr = oM.Symbol,
      ar = oM.Uint8Array,
      Pr = XM(Object.getPrototypeOf, Object),
      nr = Object.create,
      Qr = TM.propertyIsEnumerable,
      zr = KM.splice,
      Lr = Object.getOwnPropertySymbols,
      mr = Sr ? Sr.isBuffer : void 0,
      Hr = XM(Object.keys, Object),
      hr = Nr(oM, "DataView"),
      Jr = Nr(oM, "Map"),
      dr = Nr(oM, "Promise"),
      yr = Nr(oM, "Set"),
      lr = Nr(oM, "WeakMap"),
      Er = Nr(Object, "create"),
      Ur = Br(hr),
      Gr = Br(Jr),
      Cr = Br(dr),
      er = Br(yr),
      br = Br(lr),
      wr = jr ? jr.prototype : void 0,
      tr = wr ? wr.valueOf : void 0;

    function gr(MM) {
      var rM = -1,
        iM = MM ? MM.length : 0;
      for (this.clear(); ++rM < iM;) {
        var OM = MM[rM];
        this.set(OM[0], OM[1])
      }
    }

    function ur(MM) {
      var rM = -1,
        iM = MM ? MM.length : 0;
      for (this.clear(); ++rM < iM;) {
        var OM = MM[rM];
        this.set(OM[0], OM[1])
      }
    }

    function Rr(MM) {
      var rM = -1,
        iM = MM ? MM.length : 0;
      for (this.clear(); ++rM < iM;) {
        var OM = MM[rM];
        this.set(OM[0], OM[1])
      }
    }

    function pr(MM) {
      this.__data__ = new ur(MM)
    }

    function Wr(MM, rM) {
      var iM = Ir(MM) || function(MM) {
          return function(MM) {
            return function(MM) {
              return !!MM && "object" == typeof MM
            }(MM) && Kr(MM)
          }(MM) && rr.call(MM, "callee") && (!Qr.call(MM, "callee") || ir.call(MM) == jM)
        }(MM) ? function(MM, rM) {
          for (var iM = -1, OM = Array(MM); ++iM < MM;) OM[iM] = rM(iM);
          return OM
        }(MM.length, String) : [],
        OM = iM.length,
        SM = !!OM;
      for (var aM in MM) !rM && !rr.call(MM, aM) || SM && ("length" == aM || vr(aM, OM)) || iM.push(aM);
      return iM
    }

    function sr(MM, rM, iM) {
      var OM = MM[rM];
      rr.call(MM, rM) && Xr(OM, iM) && (void 0 !== iM || rM in MM) || (MM[rM] = iM)
    }

    function Dr(MM, rM) {
      for (var iM = MM.length; iM--;)
        if (Xr(MM[iM][0], rM)) return iM;
      return -1
    }

    function kr(MM, rM, iM, OM, SM, HM, lM) {
      var WM;
      if (OM && (WM = HM ? OM(MM, SM, HM, lM) : OM(MM)), void 0 !== WM) return WM;
      if (!Vr(MM)) return MM;
      var sM = Ir(MM);
      if (sM) {
        if (WM = function(MM) {
            var rM = MM.length,
              iM = MM.constructor(rM);
            rM && "string" == typeof MM[0] && rr.call(MM, "index") && (iM.index = MM.index, iM.input = MM.input);
            return iM
          }(MM), !rM) return function(MM, rM) {
          var iM = -1,
            OM = MM.length;
          rM || (rM = Array(OM));
          for (; ++iM < OM;) rM[iM] = MM[iM];
          return rM
        }(MM, WM)
      } else {
        var kM = xr(MM),
          ZM = kM == nM || kM == QM;
        if (qr(MM)) return function(MM, rM) {
          if (rM) return MM.slice();
          var iM = new MM.constructor(MM.length);
          return MM.copy(iM), iM
        }(MM, rM);
        if (kM == mM || kM == jM || ZM && !HM) {
          if (FM(MM)) return HM ? MM : {};
          if (WM = function(MM) {
              return "function" != typeof MM.constructor || Fr(MM) ? {} : (rM = Pr(MM), Vr(rM) ? nr(rM) : {});
              var rM
            }(ZM ? {} : MM), !rM) return function(MM, rM) {
            return fr(MM, Ar(MM), rM)
          }(MM, function(MM, rM) {
            return MM && fr(rM, cr(rM), MM)
          }(WM, MM))
        } else {
          if (!DM[kM]) return HM ? MM : {};
          WM = function(MM, rM, iM, OM) {
            var SM = MM.constructor;
            switch (rM) {
              case EM:
                return or(MM);
              case aM:
              case PM:
                return new SM(+MM);
              case UM:
                return function(MM, rM) {
                  var iM = rM ? or(MM.buffer) : MM.buffer;
                  return new MM.constructor(iM, MM.byteOffset, MM.byteLength)
                }(MM, OM);
              case GM:
              case CM:
              case eM:
              case bM:
              case wM:
              case tM:
              case gM:
              case uM:
              case RM:
                return function(MM, rM) {
                  var iM = rM ? or(MM.buffer) : MM.buffer;
                  return new MM.constructor(iM, MM.byteOffset, MM.length)
                }(MM, OM);
              case zM:
                return function(MM, rM, iM) {
                  var OM = rM ? iM(BM(MM), !0) : BM(MM);
                  return vM(OM, AM, new MM.constructor)
                }(MM, OM, iM);
              case LM:
              case dM:
                return new SM(MM);
              case hM:
                return function(MM) {
                  var rM = new MM.constructor(MM.source, pM.exec(MM));
                  return rM.lastIndex = MM.lastIndex, rM
                }(MM);
              case JM:
                return function(MM, rM, iM) {
                  var OM = rM ? iM(IM(MM), !0) : IM(MM);
                  return vM(OM, xM, new MM.constructor)
                }(MM, OM, iM);
              case yM:
                return jM = MM, tr ? Object(tr.call(jM)) : {}
            }
            var jM
          }(MM, kM, kr, rM)
        }
      }
      lM || (lM = new pr);
      var oM = lM.get(MM);
      if (oM) return oM;
      if (lM.set(MM, WM), !sM) var fM = iM ? function(MM) {
        return function(MM, rM, iM) {
          var OM = rM(MM);
          return Ir(MM) ? OM : function(MM, rM) {
            for (var iM = -1, OM = rM.length, SM = MM.length; ++iM < OM;) MM[SM + iM] = rM[iM];
            return MM
          }(OM, iM(MM))
        }(MM, cr, Ar)
      }(MM) : cr(MM);
      return function(MM, rM) {
        for (var iM = -1, OM = MM ? MM.length : 0; ++iM < OM && !1 !== rM(MM[iM], iM, MM););
      }(fM || MM, (function(SM, jM) {
        fM && (SM = MM[jM = SM]), sr(WM, jM, kr(SM, rM, iM, OM, jM, MM, lM))
      })), WM
    }

    function Zr(MM) {
      return !(!Vr(MM) || (rM = MM, cM && cM in rM)) && (Tr(MM) || FM(MM) ? Or : WM).test(Br(MM));
      var rM
    }

    function or(MM) {
      var rM = new MM.constructor(MM.byteLength);
      return new ar(rM).set(new ar(MM)), rM
    }

    function fr(MM, rM, iM, OM) {
      iM || (iM = {});
      for (var SM = -1, jM = rM.length; ++SM < jM;) {
        var aM = rM[SM],
          PM = OM ? OM(iM[aM], MM[aM], aM, iM, MM) : void 0;
        sr(iM, aM, void 0 === PM ? MM[aM] : PM)
      }
      return iM
    }

    function Yr(MM, rM) {
      var iM = MM.__data__;
      return function(MM) {
        var rM = typeof MM;
        return "string" == rM || "number" == rM || "symbol" == rM || "boolean" == rM ? "__proto__" !== MM : null === MM
      }(rM) ? iM["string" == typeof rM ? "string" : "hash"] : iM.map
    }

    function Nr(MM, rM) {
      var iM = function(MM, rM) {
        return null == MM ? void 0 : MM[rM]
      }(MM, rM);
      return Zr(iM) ? iM : void 0
    }
    gr.prototype.clear = function() {
      this.__data__ = Er ? Er(null) : {}
    }, gr.prototype.delete = function(MM) {
      return this.has(MM) && delete this.__data__[MM]
    }, gr.prototype.get = function(MM) {
      var rM = this.__data__;
      if (Er) {
        var iM = rM[MM];
        return iM === OM ? void 0 : iM
      }
      return rr.call(rM, MM) ? rM[MM] : void 0
    }, gr.prototype.has = function(MM) {
      var rM = this.__data__;
      return Er ? void 0 !== rM[MM] : rr.call(rM, MM)
    }, gr.prototype.set = function(MM, rM) {
      return this.__data__[MM] = Er && void 0 === rM ? OM : rM, this
    }, ur.prototype.clear = function() {
      this.__data__ = []
    }, ur.prototype.delete = function(MM) {
      var rM = this.__data__,
        iM = Dr(rM, MM);
      return !(iM < 0) && (iM == rM.length - 1 ? rM.pop() : zr.call(rM, iM, 1), !0)
    }, ur.prototype.get = function(MM) {
      var rM = this.__data__,
        iM = Dr(rM, MM);
      return iM < 0 ? void 0 : rM[iM][1]
    }, ur.prototype.has = function(MM) {
      return Dr(this.__data__, MM) > -1
    }, ur.prototype.set = function(MM, rM) {
      var iM = this.__data__,
        OM = Dr(iM, MM);
      return OM < 0 ? iM.push([MM, rM]) : iM[OM][1] = rM, this
    }, Rr.prototype.clear = function() {
      this.__data__ = {
        hash: new gr,
        map: new(Jr || ur),
        string: new gr
      }
    }, Rr.prototype.delete = function(MM) {
      return Yr(this, MM).delete(MM)
    }, Rr.prototype.get = function(MM) {
      return Yr(this, MM).get(MM)
    }, Rr.prototype.has = function(MM) {
      return Yr(this, MM).has(MM)
    }, Rr.prototype.set = function(MM, rM) {
      return Yr(this, MM).set(MM, rM), this
    }, pr.prototype.clear = function() {
      this.__data__ = new ur
    }, pr.prototype.delete = function(MM) {
      return this.__data__.delete(MM)
    }, pr.prototype.get = function(MM) {
      return this.__data__.get(MM)
    }, pr.prototype.has = function(MM) {
      return this.__data__.has(MM)
    }, pr.prototype.set = function(MM, rM) {
      var iM = this.__data__;
      if (iM instanceof ur) {
        var OM = iM.__data__;
        if (!Jr || OM.length < 199) return OM.push([MM, rM]), this;
        iM = this.__data__ = new Rr(OM)
      }
      return iM.set(MM, rM), this
    };
    var Ar = Lr ? XM(Lr, Object) : function() {
        return []
      },
      xr = function(MM) {
        return ir.call(MM)
      };

    function vr(MM, rM) {
      return !!(rM = null == rM ? SM : rM) && ("number" == typeof MM || sM.test(MM)) && MM > -1 && MM % 1 == 0 && MM < rM
    }

    function Fr(MM) {
      var rM = MM && MM.constructor;
      return MM === ("function" == typeof rM && rM.prototype || TM)
    }

    function Br(MM) {
      if (null != MM) {
        try {
          return Mr.call(MM)
        } catch (rM) {}
        try {
          return MM + ""
        } catch (rM) {}
      }
      return ""
    }

    function Xr(MM, rM) {
      return MM === rM || MM !== MM && rM !== rM
    }(hr && xr(new hr(new ArrayBuffer(1))) != UM || Jr && xr(new Jr) != zM || dr && xr(dr.resolve()) != HM || yr && xr(new yr) != JM || lr && xr(new lr) != lM) && (xr = function(MM) {
      var rM = ir.call(MM),
        iM = rM == mM ? MM.constructor : void 0,
        OM = iM ? Br(iM) : void 0;
      if (OM) switch (OM) {
        case Ur:
          return UM;
        case Gr:
          return zM;
        case Cr:
          return HM;
        case er:
          return JM;
        case br:
          return lM
      }
      return rM
    });
    var Ir = Array.isArray;

    function Kr(MM) {
      return null != MM && function(MM) {
        return "number" == typeof MM && MM > -1 && MM % 1 == 0 && MM <= SM
      }(MM.length) && !Tr(MM)
    }
    var qr = mr || function() {
      return !1
    };

    function Tr(MM) {
      var rM = Vr(MM) ? ir.call(MM) : "";
      return rM == nM || rM == QM
    }

    function Vr(MM) {
      var rM = typeof MM;
      return !!MM && ("object" == rM || "function" == rM)
    }

    function cr(MM) {
      return Kr(MM) ? Wr(MM) : function(MM) {
        if (!Fr(MM)) return Hr(MM);
        var rM = [];
        for (var iM in Object(MM)) rr.call(MM, iM) && "constructor" != iM && rM.push(iM);
        return rM
      }(MM)
    }
    MM.exports = function(MM) {
      return kr(MM, !0, !0)
    }
  },
  39447: MM => {
    function rM(MM, rM, iM) {
      for (var OM = MM.length, SM = -1 / 0, jM = 1 / 0, aM = 0; aM < OM; aM++) {
        var PM = (iM[0][aM] - MM[aM]) / rM[aM],
          nM = (iM[1][aM] - MM[aM]) / rM[aM];
        if (PM > nM) {
          var QM = PM;
          PM = nM, nM = QM
        }
        if (nM < SM || PM > jM) return 1 / 0;
        PM > SM && (SM = PM), nM < jM && (jM = nM)
      }
      return SM > jM ? 1 / 0 : SM
    }
    MM.exports = function(MM, iM, OM, SM) {
      var jM = rM(iM, OM, SM);
      if (jM === 1 / 0) MM = null;
      else {
        MM = MM || [];
        for (var aM = 0; aM < iM.length; aM++) MM[aM] = iM[aM] + OM[aM] * jM
      }
      return MM
    }, MM.exports.distance = rM
  },
  38710: (MM, rM, iM) => {
    var OM = iM(38716);

    function SM(MM) {
      for (var rM, iM, SM = 0, jM = MM.length, aM = 0; aM < MM.length;) {
        for (rM = MM[aM], iM = 0; aM < jM && MM[aM] === rM;) ++aM, ++iM;
        SM += OM.log2(iM) / 7 | 0, SM += OM.log2(rM >>> 0) / 7 | 0, SM += 2
      }
      return SM
    }
    rM.size = SM, rM.encode = function(MM, rM) {
      rM || (rM = new Uint8Array(SM(MM)));
      for (var iM, OM, jM = 0, aM = rM.length, PM = 0; PM < MM.length;) {
        for (iM = MM[PM], OM = 0; PM < MM.length && MM[PM] === iM;) ++PM, ++OM;
        for (; jM < aM && OM >= 128;) rM[jM++] = 128 + (127 & OM), OM >>>= 7;
        if (jM >= aM) throw new Error("RLE buffer overflow");
        for (rM[jM++] = OM, iM >>>= 0; jM < aM && iM >= 128;) rM[jM++] = 128 + (127 & iM), iM >>>= 7;
        if (jM >= aM) throw new Error("RLE buffer overflow");
        rM[jM++] = iM
      }
      return rM
    }, rM.decode = function(MM, rM) {
      for (var iM, OM, SM, jM, aM = rM.length, PM = MM.length, nM = 0, QM = 0; QM < PM;) {
        for (iM = 0, OM = 0; QM < PM && MM[QM] >= 128;) iM += (127 & MM[QM++]) << OM, OM += 7;
        if (iM += MM[QM++] << OM, QM >= PM) throw new Error("RLE buffer underrun");
        if (nM + iM > aM) throw new Error("Chunk buffer overflow");
        for (SM = 0, OM = 0; QM < PM && MM[QM] >= 128;) SM += (127 & MM[QM++]) << OM, OM += 7;
        if (QM >= PM) throw new Error("RLE buffer underrun");
        for (SM += MM[QM++] << OM, jM = 0; jM < iM; ++jM) rM[nM++] = SM
      }
      return rM
    }
  },
  38716: (MM, rM) => {
    function iM(MM) {
      var rM = 32;
      return (MM &= -MM) && rM--, 65535 & MM && (rM -= 16), 16711935 & MM && (rM -= 8), 252645135 & MM && (rM -= 4), 858993459 & MM && (rM -= 2), 1431655765 & MM && (rM -= 1), rM
    }
    rM.INT_BITS = 32, rM.INT_MAX = 2147483647, rM.INT_MIN = -1 << 31, rM.sign = function(MM) {
      return (MM > 0) - (MM < 0)
    }, rM.abs = function(MM) {
      var rM = MM >> 31;
      return (MM ^ rM) - rM
    }, rM.min = function(MM, rM) {
      return rM ^ (MM ^ rM) & -(MM < rM)
    }, rM.max = function(MM, rM) {
      return MM ^ (MM ^ rM) & -(MM < rM)
    }, rM.isPow2 = function(MM) {
      return !(MM & MM - 1) && !!MM
    }, rM.log2 = function(MM) {
      var rM, iM;
      return rM = (MM > 65535) << 4, rM |= iM = ((MM >>>= rM) > 255) << 3, rM |= iM = ((MM >>>= iM) > 15) << 2, (rM |= iM = ((MM >>>= iM) > 3) << 1) | (MM >>>= iM) >> 1
    }, rM.log10 = function(MM) {
      return MM >= 1e9 ? 9 : MM >= 1e8 ? 8 : MM >= 1e7 ? 7 : MM >= 1e6 ? 6 : MM >= 1e5 ? 5 : MM >= 1e4 ? 4 : MM >= 1e3 ? 3 : MM >= 100 ? 2 : MM >= 10 ? 1 : 0
    }, rM.popCount = function(MM) {
      return 16843009 * ((MM = (858993459 & (MM -= MM >>> 1 & 1431655765)) + (MM >>> 2 & 858993459)) + (MM >>> 4) & 252645135) >>> 24
    }, rM.countTrailingZeros = iM, rM.nextPow2 = function(MM) {
      return MM += 0 === MM, --MM, MM |= MM >>> 1, MM |= MM >>> 2, MM |= MM >>> 4, MM |= MM >>> 8, (MM |= MM >>> 16) + 1
    }, rM.prevPow2 = function(MM) {
      return MM |= MM >>> 1, MM |= MM >>> 2, MM |= MM >>> 4, MM |= MM >>> 8, (MM |= MM >>> 16) - (MM >>> 1)
    }, rM.parity = function(MM) {
      return MM ^= MM >>> 16, MM ^= MM >>> 8, MM ^= MM >>> 4, 27030 >>> (MM &= 15) & 1
    };
    var OM = new Array(256);
    ! function(MM) {
      for (var rM = 0; rM < 256; ++rM) {
        var iM = rM,
          OM = rM,
          SM = 7;
        for (iM >>>= 1; iM; iM >>>= 1) OM <<= 1, OM |= 1 & iM, --SM;
        MM[rM] = OM << SM & 255
      }
    }(OM), rM.reverse = function(MM) {
      return OM[255 & MM] << 24 | OM[MM >>> 8 & 255] << 16 | OM[MM >>> 16 & 255] << 8 | OM[MM >>> 24 & 255]
    }, rM.interleave2 = function(MM, rM) {
      return (MM = 1431655765 & ((MM = 858993459 & ((MM = 252645135 & ((MM = 16711935 & ((MM &= 65535) | MM << 8)) | MM << 4)) | MM << 2)) | MM << 1)) | (rM = 1431655765 & ((rM = 858993459 & ((rM = 252645135 & ((rM = 16711935 & ((rM &= 65535) | rM << 8)) | rM << 4)) | rM << 2)) | rM << 1)) << 1
    }, rM.deinterleave2 = function(MM, rM) {
      return (MM = 65535 & ((MM = 16711935 & ((MM = 252645135 & ((MM = 858993459 & ((MM = MM >>> rM & 1431655765) | MM >>> 1)) | MM >>> 2)) | MM >>> 4)) | MM >>> 16)) << 16 >> 16
    }, rM.interleave3 = function(MM, rM, iM) {
      return MM = 1227133513 & ((MM = 3272356035 & ((MM = 251719695 & ((MM = 4278190335 & ((MM &= 1023) | MM << 16)) | MM << 8)) | MM << 4)) | MM << 2), (MM |= (rM = 1227133513 & ((rM = 3272356035 & ((rM = 251719695 & ((rM = 4278190335 & ((rM &= 1023) | rM << 16)) | rM << 8)) | rM << 4)) | rM << 2)) << 1) | (iM = 1227133513 & ((iM = 3272356035 & ((iM = 251719695 & ((iM = 4278190335 & ((iM &= 1023) | iM << 16)) | iM << 8)) | iM << 4)) | iM << 2)) << 2
    }, rM.deinterleave3 = function(MM, rM) {
      return (MM = 1023 & ((MM = 4278190335 & ((MM = 251719695 & ((MM = 3272356035 & ((MM = MM >>> rM & 1227133513) | MM >>> 2)) | MM >>> 4)) | MM >>> 8)) | MM >>> 16)) << 22 >> 22
    }, rM.nextCombination = function(MM) {
      var rM = MM | MM - 1;
      return rM + 1 | (~rM & -~rM) - 1 >>> iM(MM) + 1
    }
  },
  38167: (MM, rM, iM) => {
    iM.d(rM, {
      Color3: () => OM.d,
      d: () => OM.h
    });
    var OM = iM(38173);
    (0, OM.i)()
  },
  38740: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM
    });
    var OM = iM(38744);
    class SM {
      static GetPlanes(MM) {
        const rM = [];
        for (let iM = 0; iM < 6; iM++) rM.push(new OM.d(0, 0, 0, 0));
        return SM.GetPlanesToRef(MM, rM), rM
      }
      static GetNearPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] + iM[2], rM.normal.y = iM[7] + iM[6], rM.normal.z = iM[11] + iM[10], rM.d = iM[15] + iM[14], rM.normalize()
      }
      static GetFarPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] - iM[2], rM.normal.y = iM[7] - iM[6], rM.normal.z = iM[11] - iM[10], rM.d = iM[15] - iM[14], rM.normalize()
      }
      static GetLeftPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] + iM[0], rM.normal.y = iM[7] + iM[4], rM.normal.z = iM[11] + iM[8], rM.d = iM[15] + iM[12], rM.normalize()
      }
      static GetRightPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] - iM[0], rM.normal.y = iM[7] - iM[4], rM.normal.z = iM[11] - iM[8], rM.d = iM[15] - iM[12], rM.normalize()
      }
      static GetTopPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] - iM[1], rM.normal.y = iM[7] - iM[5], rM.normal.z = iM[11] - iM[9], rM.d = iM[15] - iM[13], rM.normalize()
      }
      static GetBottomPlaneToRef(MM, rM) {
        const iM = MM.m;
        rM.normal.x = iM[3] + iM[1], rM.normal.y = iM[7] + iM[5], rM.normal.z = iM[11] + iM[9], rM.d = iM[15] + iM[13], rM.normalize()
      }
      static GetPlanesToRef(MM, rM) {
        SM.GetNearPlaneToRef(MM, rM[0]), SM.GetFarPlaneToRef(MM, rM[1]), SM.GetLeftPlaneToRef(MM, rM[2]), SM.GetRightPlaneToRef(MM, rM[3]), SM.GetTopPlaneToRef(MM, rM[4]), SM.GetBottomPlaneToRef(MM, rM[5])
      }
      static IsPointInFrustum(MM, rM) {
        for (let iM = 0; iM < 6; iM++)
          if (rM[iM].dotCoordinate(MM) < 0) return !1;
        return !0
      }
    }
  },
  38744: (MM, rM, iM) => {
    iM.d(rM, {
      d: () => SM
    });
    var OM = iM(38040);
    class SM {
      constructor(MM, rM, iM, SM) {
        this.normal = new OM.q(MM, rM, iM), this.d = SM
      }
      HOM() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new SM(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let MM = this.normal.getHashCode();
        return MM = 397 * MM ^ this.d, MM
      }
      normalize() {
        const MM = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let rM = 0;
        return 0 !== MM && (rM = 1 / MM), this.normal.x *= rM, this.normal.y *= rM, this.normal.z *= rM, this.d *= rM, this
      }
      transform(MM) {
        const rM = SM._TmpMatrix;
        MM.invertToRef(rM);
        const iM = rM.m,
          OM = this.normal.x,
          jM = this.normal.y,
          aM = this.normal.z,
          PM = this.d,
          nM = OM * iM[0] + jM * iM[1] + aM * iM[2] + PM * iM[3],
          QM = OM * iM[4] + jM * iM[5] + aM * iM[6] + PM * iM[7],
          zM = OM * iM[8] + jM * iM[9] + aM * iM[10] + PM * iM[11],
          LM = OM * iM[12] + jM * iM[13] + aM * iM[14] + PM * iM[15];
        return new SM(nM, QM, zM, LM)
      }
      dotCoordinate(MM) {
        return this.normal.x * MM.x + this.normal.y * MM.y + this.normal.z * MM.z + this.d
      }
      copyFromPoints(MM, rM, iM) {
        const OM = rM.x - MM.x,
          SM = rM.y - MM.y,
          jM = rM.z - MM.z,
          aM = iM.x - MM.x,
          PM = iM.y - MM.y,
          nM = iM.z - MM.z,
          QM = SM * nM - jM * PM,
          zM = jM * aM - OM * nM,
          LM = OM * PM - SM * aM,
          mM = Math.sqrt(QM * QM + zM * zM + LM * LM);
        let HM;
        return HM = 0 !== mM ? 1 / mM : 0, this.normal.x = QM * HM, this.normal.y = zM * HM, this.normal.z = LM * HM, this.d = -(this.normal.x * MM.x + this.normal.y * MM.y + this.normal.z * MM.z), this
      }
      isFrontFacingTo(MM, rM) {
        return OM.q.Dot(this.normal, MM) <= rM
      }
      signedDistanceTo(MM) {
        return OM.q.Dot(MM, this.normal) + this.d
      }
      static FromArray(MM) {
        return new SM(MM[0], MM[1], MM[2], MM[3])
      }
      static FromPoints(MM, rM, iM) {
        const OM = new SM(0, 0, 0, 0);
        return OM.copyFromPoints(MM, rM, iM), OM
      }
      static FromPositionAndNormal(MM, rM) {
        const iM = new SM(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(MM, rM, iM)
      }
      static FromPositionAndNormalToRef(MM, rM, iM) {
        return iM.normal.jR(rM), iM.normal.normalize(), iM.d = -MM.dot(iM.normal), iM
      }
      static SignedDistanceToPlaneFromPositionAndNormal(MM, rM, iM) {
        const SM = -(rM.x * MM.x + rM.y * MM.y + rM.z * MM.z);
        return OM.q.Dot(iM, rM) + SM
      }
    }
    SM._TmpMatrix = OM.d.Identity()
  },
  38034: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      Matrix: () => OM.d,
      Quaternion: () => OM.h,
      RegisterMathVector: () => OM.i,
      TmpVectors: () => OM.l,
      Vector2: () => OM.o,
      sh: () => OM.q,
      Vector4: () => OM.u
    });
    var OM = iM(38040);
    (0, OM.i)()
  },
  39078: (MM, rM, iM) => {
    iM.d(rM, {
      e: () => OM
    });
    class OM {
      constructor(MM, rM, iM, OM) {
        this.x = MM, this.y = rM, this.width = iM, this.height = OM
      }
      toGlobal(MM, rM) {
        return new OM(this.x * MM, this.y * rM, this.width * MM, this.height * rM)
      }
      toGlobalToRef(MM, rM, iM) {
        return iM.x = this.x * MM, iM.y = this.y * rM, iM.width = this.width * MM, iM.height = this.height * rM, this
      }
      clone() {
        return new OM(this.x, this.y, this.width, this.height)
      }
    }
  },
  38885: (MM, rM, iM) => {
    function OM() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (MM => {
        const rM = 16 * Math.random() | 0;
        return ("x" === MM ? rM : 3 & rM | 8).toString(16)
      }))
    }
    iM.d(rM, {
      d: () => OM
    })
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);