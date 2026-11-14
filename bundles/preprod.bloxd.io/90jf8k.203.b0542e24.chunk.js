/*! For license information please see 90jf8k.203.b0542e24.chunk.js.LICENSE.txt */
export const id = 203;
export const ids = [203, 209];
export const modules = {
  36746: FF => {
    FF.exports = function(FF) {
      return null != FF && null != FF.constructor && "function" === typeof FF.constructor.isBuffer && FF.constructor.isBuffer(FF)
    }
  },
  36730: (FF, WF, SF) => {
    var CF = SF(36736),
      AF = SF(36743),
      uF = SF(36746);
    SF.g.__TYPEDARRAY_POOL || (SF.g.__TYPEDARRAY_POOL = {
      UINT8: AF([32, 0]),
      UINT16: AF([32, 0]),
      UINT32: AF([32, 0]),
      INT8: AF([32, 0]),
      INT16: AF([32, 0]),
      INT32: AF([32, 0]),
      FLOAT: AF([32, 0]),
      DOUBLE: AF([32, 0]),
      DATA: AF([32, 0]),
      UINT8C: AF([32, 0]),
      BUFFER: AF([32, 0])
    });
    var hF = "undefined" !== typeof Uint8ClampedArray,
      bW = SF.g.__TYPEDARRAY_POOL;
    bW.UINT8C || (bW.UINT8C = AF([32, 0])), bW.BUFFER || (bW.BUFFER = AF([32, 0]));
    var dF = bW.DATA,
      PF = bW.BUFFER;

    function RF(FF) {
      if (FF) {
        var WF = FF.length || FF.byteLength,
          SF = CF.log2(WF);
        dF[SF].push(FF)
      }
    }

    function iW(FF) {
      FF = CF.nextPow2(FF);
      var WF = CF.log2(FF),
        SF = dF[WF];
      return SF.length > 0 ? SF.pop() : new ArrayBuffer(FF)
    }

    function eF(FF) {
      return new Uint8Array(iW(FF), 0, FF)
    }

    function EF(FF) {
      return new Uint16Array(iW(2 * FF), 0, FF)
    }

    function QF(FF) {
      return new Uint32Array(iW(4 * FF), 0, FF)
    }

    function rW(FF) {
      return new Int8Array(iW(FF), 0, FF)
    }

    function gW(FF) {
      return new Int16Array(iW(2 * FF), 0, FF)
    }

    function tW(FF) {
      return new Int32Array(iW(4 * FF), 0, FF)
    }

    function TF(FF) {
      return new Float32Array(iW(4 * FF), 0, FF)
    }

    function aW(FF) {
      return new Float64Array(iW(8 * FF), 0, FF)
    }

    function kW(FF) {
      return hF ? new Uint8ClampedArray(iW(FF), 0, FF) : eF(FF)
    }

    function qW(FF) {
      return new DataView(iW(FF), 0, FF)
    }
    WF.free = function(FF) {
      if (uF(FF)) PF[CF.log2(FF.length)].push(FF);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(FF) && (FF = FF.buffer), !FF) return;
        var WF = FF.length || FF.byteLength,
          SF = 0 | CF.log2(WF);
        dF[SF].push(FF)
      }
    }, WF.freeUint8 = WF.freeUint16 = WF.freeUint32 = WF.freeInt8 = WF.freeInt16 = WF.freeInt32 = WF.freeFloat32 = WF.freeFloat = WF.freeFloat64 = WF.freeDouble = WF.freeUint8Clamped = WF.freeDataView = function(FF) {
      RF(FF.buffer)
    }, WF.freeArrayBuffer = RF, WF.freeBuffer = function(FF) {
      PF[CF.log2(FF.length)].push(FF)
    }, WF.malloc = function(FF, WF) {
      if (void 0 === WF || "arraybuffer" === WF) return iW(FF);
      switch (WF) {
        case "uint8":
          return eF(FF);
        case "uint16":
          return EF(FF);
        case "uint32":
          return QF(FF);
        case "int8":
          return rW(FF);
        case "int16":
          return gW(FF);
        case "int32":
          return tW(FF);
        case "float":
        case "float32":
          return TF(FF);
        case "double":
        case "float64":
          return aW(FF);
        case "uint8_clamped":
          return kW(FF);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return qW(FF);
        default:
          return null
      }
      return null
    }, WF.mallocArrayBuffer = iW, WF.mallocUint8 = eF, WF.mallocUint16 = EF, WF.mallocUint32 = QF, WF.mallocInt8 = rW, WF.mallocInt16 = gW, WF.mallocInt32 = tW, WF.mallocFloat32 = WF.mallocFloat = TF, WF.mallocFloat64 = WF.mallocDouble = aW, WF.mallocUint8Clamped = kW, WF.mallocDataView = qW, WF.clearCache = function() {
      for (var FF = 0; FF < 32; ++FF) bW.UINT8[FF].length = 0, bW.UINT16[FF].length = 0, bW.UINT32[FF].length = 0, bW.INT8[FF].length = 0, bW.INT16[FF].length = 0, bW.INT32[FF].length = 0, bW.FLOAT[FF].length = 0, bW.DOUBLE[FF].length = 0, bW.UINT8C[FF].length = 0, dF[FF].length = 0, PF[FF].length = 0
    }
  },
  36736: (FF, WF) => {
    function SF(FF) {
      var WF = 32;
      return (FF &= -FF) && WF--, 65535 & FF && (WF -= 16), 16711935 & FF && (WF -= 8), 252645135 & FF && (WF -= 4), 858993459 & FF && (WF -= 2), 1431655765 & FF && (WF -= 1), WF
    }
    WF.INT_BITS = 32, WF.INT_MAX = 2147483647, WF.INT_MIN = -1 << 31, WF.sign = function(FF) {
      return (FF > 0) - (FF < 0)
    }, WF.abs = function(FF) {
      var WF = FF >> 31;
      return (FF ^ WF) - WF
    }, WF.min = function(FF, WF) {
      return WF ^ (FF ^ WF) & -(FF < WF)
    }, WF.max = function(FF, WF) {
      return FF ^ (FF ^ WF) & -(FF < WF)
    }, WF.isPow2 = function(FF) {
      return !(FF & FF - 1) && !!FF
    }, WF.log2 = function(FF) {
      var WF, SF;
      return WF = (FF > 65535) << 4, WF |= SF = ((FF >>>= WF) > 255) << 3, WF |= SF = ((FF >>>= SF) > 15) << 2, (WF |= SF = ((FF >>>= SF) > 3) << 1) | (FF >>>= SF) >> 1
    }, WF.log10 = function(FF) {
      return FF >= 1e9 ? 9 : FF >= 1e8 ? 8 : FF >= 1e7 ? 7 : FF >= 1e6 ? 6 : FF >= 1e5 ? 5 : FF >= 1e4 ? 4 : FF >= 1e3 ? 3 : FF >= 100 ? 2 : FF >= 10 ? 1 : 0
    }, WF.popCount = function(FF) {
      return 16843009 * ((FF = (858993459 & (FF -= FF >>> 1 & 1431655765)) + (FF >>> 2 & 858993459)) + (FF >>> 4) & 252645135) >>> 24
    }, WF.countTrailingZeros = SF, WF.nextPow2 = function(FF) {
      return FF += 0 === FF, --FF, FF |= FF >>> 1, FF |= FF >>> 2, FF |= FF >>> 4, FF |= FF >>> 8, (FF |= FF >>> 16) + 1
    }, WF.prevPow2 = function(FF) {
      return FF |= FF >>> 1, FF |= FF >>> 2, FF |= FF >>> 4, FF |= FF >>> 8, (FF |= FF >>> 16) - (FF >>> 1)
    }, WF.parity = function(FF) {
      return FF ^= FF >>> 16, FF ^= FF >>> 8, FF ^= FF >>> 4, 27030 >>> (FF &= 15) & 1
    };
    var CF = new Array(256);
    ! function(FF) {
      for (var WF = 0; WF < 256; ++WF) {
        var SF = WF,
          CF = WF,
          AF = 7;
        for (SF >>>= 1; SF; SF >>>= 1) CF <<= 1, CF |= 1 & SF, --AF;
        FF[WF] = CF << AF & 255
      }
    }(CF), WF.reverse = function(FF) {
      return CF[255 & FF] << 24 | CF[FF >>> 8 & 255] << 16 | CF[FF >>> 16 & 255] << 8 | CF[FF >>> 24 & 255]
    }, WF.interleave2 = function(FF, WF) {
      return (FF = 1431655765 & ((FF = 858993459 & ((FF = 252645135 & ((FF = 16711935 & ((FF &= 65535) | FF << 8)) | FF << 4)) | FF << 2)) | FF << 1)) | (WF = 1431655765 & ((WF = 858993459 & ((WF = 252645135 & ((WF = 16711935 & ((WF &= 65535) | WF << 8)) | WF << 4)) | WF << 2)) | WF << 1)) << 1
    }, WF.deinterleave2 = function(FF, WF) {
      return (FF = 65535 & ((FF = 16711935 & ((FF = 252645135 & ((FF = 858993459 & ((FF = FF >>> WF & 1431655765) | FF >>> 1)) | FF >>> 2)) | FF >>> 4)) | FF >>> 16)) << 16 >> 16
    }, WF.interleave3 = function(FF, WF, SF) {
      return FF = 1227133513 & ((FF = 3272356035 & ((FF = 251719695 & ((FF = 4278190335 & ((FF &= 1023) | FF << 16)) | FF << 8)) | FF << 4)) | FF << 2), (FF |= (WF = 1227133513 & ((WF = 3272356035 & ((WF = 251719695 & ((WF = 4278190335 & ((WF &= 1023) | WF << 16)) | WF << 8)) | WF << 4)) | WF << 2)) << 1) | (SF = 1227133513 & ((SF = 3272356035 & ((SF = 251719695 & ((SF = 4278190335 & ((SF &= 1023) | SF << 16)) | SF << 8)) | SF << 4)) | SF << 2)) << 2
    }, WF.deinterleave3 = function(FF, WF) {
      return (FF = 1023 & ((FF = 4278190335 & ((FF = 251719695 & ((FF = 3272356035 & ((FF = FF >>> WF & 1227133513) | FF >>> 2)) | FF >>> 4)) | FF >>> 8)) | FF >>> 16)) << 22 >> 22
    }, WF.nextCombination = function(FF) {
      var WF = FF | FF - 1;
      return WF + 1 | (~WF & -~WF) - 1 >>> SF(FF) + 1
    }
  },
  36726: (FF, WF, SF) => {
    FF.exports = function(FF, WF, SF) {
      switch (arguments.length) {
        case 1:
          return CF = [], PF(AF = FF, AF, RF, !0), CF;
        case 2:
          return "function" === typeof WF ? PF(FF, FF, WF, !0) : function(FF, WF) {
            return CF = [], PF(FF, WF, RF, !1), CF
          }(FF, WF);
        case 3:
          return PF(FF, WF, SF, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var AF
    };
    var CF, AF = SF(36730),
      uF = SF(36749),
      hF = SF(36757);

    function bW(FF, WF) {
      for (var SF = 0; SF < FF; ++SF)
        if (!(WF[SF] <= WF[SF + FF])) return !0;
      return !1
    }

    function dF(FF, WF, SF, CF) {
      for (var AF = 0, uF = 0, hF = 0, dF = FF.length; hF < dF; ++hF) {
        var PF = FF[hF];
        if (!bW(WF, PF)) {
          for (var RF = 0; RF < 2 * WF; ++RF) SF[AF++] = PF[RF];
          CF[uF++] = hF
        }
      }
      return uF
    }

    function PF(FF, WF, SF, CF) {
      var bW = FF.length,
        PF = WF.length;
      if (!(bW <= 0 || PF <= 0)) {
        var RF = FF[0].length >>> 1;
        if (!(RF <= 0)) {
          var iW, eF = AF.mallocDouble(2 * RF * bW),
            EF = AF.mallocInt32(bW);
          if ((bW = dF(FF, RF, eF, EF)) > 0) {
            if (1 === RF && CF) uF.init(bW), iW = uF.sweepComplete(RF, SF, 0, bW, eF, EF, 0, bW, eF, EF);
            else {
              var QF = AF.mallocDouble(2 * RF * PF),
                rW = AF.mallocInt32(PF);
              (PF = dF(WF, RF, QF, rW)) > 0 && (uF.init(bW + PF), iW = 1 === RF ? uF.sweepBipartite(RF, SF, 0, bW, eF, EF, 0, PF, QF, rW) : hF(RF, SF, CF, bW, eF, EF, PF, QF, rW), AF.free(QF), AF.free(rW))
            }
            AF.free(eF), AF.free(EF)
          }
          return iW
        }
      }
    }

    function RF(FF, WF) {
      CF.push([FF, WF])
    }
  },
  36763: (FF, WF) => {
    var SF = "d",
      CF = "ax",
      AF = "fp",
      uF = "es",
      hF = "rs",
      bW = "re",
      dF = "rb",
      PF = "bs",
      RF = "be",
      iW = "bb",
      eF = [SF, CF, "vv", hF, bW, dF, "ri", PF, RF, iW, "bi"];

    function EF(FF) {
      var WF = "bruteForce" + (FF ? "Full" : "Partial"),
        CF = [],
        hF = eF.slice();
      FF || hF.splice(3, 0, AF);
      var bW = ["function " + WF + "(" + hF.join() + "){"];

      function dF(WF, AF) {
        var hF = function(FF, WF, CF) {
          var AF = "bruteForce" + (FF ? "Red" : "Blue") + (WF ? "Flip" : "") + (CF ? "Full" : ""),
            hF = ["function ", AF, "(", eF.join(), "){", "var ", uF, "=2*", SF, ";"],
            bW = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            dF = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (CF ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return FF ? hF.push(bW, "Q", ":", dF) : hF.push(dF, "Q", ":", bW), CF ? hF.push("if(y1<x0||x1<y0)continue;") : WF ? hF.push("if(y0<=x0||x1<y0)continue;") : hF.push("if(y0<x0||x1<y0)continue;"), hF.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), WF ? hF.push("yi,xi") : hF.push("xi,yi"), hF.push(");if(rv!==void 0)return rv;}}}"), {
            name: AF,
            code: hF.join("")
          }
        }(WF, AF, FF);
        CF.push(hF.code), bW.push("return " + hF.name + "(" + eF.join() + ");")
      }
      bW.push("if(re-rs>be-bs){"), FF ? (dF(!0, !1), bW.push("}else{"), dF(!1, !1)) : (bW.push("if(fp){"), dF(!0, !0), bW.push("}else{"), dF(!0, !1), bW.push("}}else{if(fp){"), dF(!1, !0), bW.push("}else{"), dF(!1, !1), bW.push("}")), bW.push("}}return " + WF);
      var PF = CF.join("") + bW.join("");
      return new Function(PF)()
    }
    WF.partial = EF(!1), WF.full = EF(!0)
  },
  36757: (FF, WF, SF) => {
    FF.exports = function(FF, WF, SF, uF, RF, OF, xW, ZF, oF) {
      ! function(FF, WF) {
        var SF = 8 * AF.log2(WF + 1) * (FF + 1) | 0,
          uF = AF.nextPow2(kW * SF);
        VF.length < uF && (CF.free(VF), VF = CF.mallocInt32(uF));
        var hF = AF.nextPow2(qW * SF);
        NF.length < hF && (CF.free(NF), NF = CF.mallocDouble(hF))
      }(FF, uF + xW);
      var YF, MF = 0,
        cW = 2 * FF;
      DF(MF++, 0, 0, uF, 0, xW, SF ? 16 : 0, -1 / 0, 1 / 0), SF || DF(MF++, 0, 0, xW, 0, uF, 1, -1 / 0, 1 / 0);
      for (; MF > 0;) {
        var GF = (MF -= 1) * kW,
          zW = VF[GF],
          IF = VF[GF + 1],
          fF = VF[GF + 2],
          yW = VF[GF + 3],
          sF = VF[GF + 4],
          nF = VF[GF + 5],
          HF = MF * qW,
          KF = NF[HF],
          wF = NF[HF + 1],
          XF = 1 & nF,
          UF = !!(16 & nF),
          BF = RF,
          jW = OF,
          vW = ZF,
          JF = oF;
        if (XF && (BF = ZF, jW = oF, vW = RF, JF = OF), !(2 & nF && IF >= (fF = gW(FF, zW, IF, fF, BF, jW, wF))) && !(4 & nF && (IF = tW(FF, zW, IF, fF, BF, jW, KF)) >= fF)) {
          var pF = fF - IF,
            lF = sF - yW;
          if (UF) {
            if (FF * pF * (pF + lF) < EF) {
              if (void 0 !== (YF = dF.scanComplete(FF, zW, WF, IF, fF, BF, jW, yW, sF, vW, JF))) return YF;
              continue
            }
          } else {
            if (FF * Math.min(pF, lF) < iW) {
              if (void 0 !== (YF = hF(FF, zW, WF, XF, IF, fF, BF, jW, yW, sF, vW, JF))) return YF;
              continue
            }
            if (FF * pF * lF < eF) {
              if (void 0 !== (YF = dF.scanBipartite(FF, zW, WF, XF, IF, fF, BF, jW, yW, sF, vW, JF))) return YF;
              continue
            }
          }
          var FW = QF(FF, zW, IF, fF, BF, jW, KF, wF);
          if (IF < FW)
            if (FF * (FW - IF) < iW) {
              if (void 0 !== (YF = bW(FF, zW + 1, WF, IF, FW, BF, jW, yW, sF, vW, JF))) return YF
            } else if (zW === FF - 2) {
            if (void 0 !== (YF = XF ? dF.sweepBipartite(FF, WF, yW, sF, vW, JF, IF, FW, BF, jW) : dF.sweepBipartite(FF, WF, IF, FW, BF, jW, yW, sF, vW, JF))) return YF
          } else DF(MF++, zW + 1, IF, FW, yW, sF, XF, -1 / 0, 1 / 0), DF(MF++, zW + 1, yW, sF, IF, FW, 1 ^ XF, -1 / 0, 1 / 0);
          if (FW < fF) {
            var WW = PF(FF, zW, yW, sF, vW, JF),
              SW = vW[cW * WW + zW],
              CW = rW(FF, zW, WW, sF, vW, JF, SW);
            if (CW < sF && DF(MF++, zW, FW, fF, CW, sF, (4 | XF) + (UF ? 16 : 0), SW, wF), yW < WW && DF(MF++, zW, FW, fF, yW, WW, (2 | XF) + (UF ? 16 : 0), KF, SW), WW + 1 === CW) {
              if (void 0 !== (YF = UF ? mW(FF, zW, WF, FW, fF, BF, jW, WW, vW, JF[WW]) : LF(FF, zW, WF, XF, FW, fF, BF, jW, WW, vW, JF[WW]))) return YF
            } else if (WW < CW) {
              var AW;
              if (UF) {
                if (FW < (AW = TF(FF, zW, FW, fF, BF, jW, SW))) {
                  var uW = rW(FF, zW, FW, AW, BF, jW, SW);
                  if (zW === FF - 2) {
                    if (FW < uW && void 0 !== (YF = dF.sweepComplete(FF, WF, FW, uW, BF, jW, WW, CW, vW, JF))) return YF;
                    if (uW < AW && void 0 !== (YF = dF.sweepBipartite(FF, WF, uW, AW, BF, jW, WW, CW, vW, JF))) return YF
                  } else FW < uW && DF(MF++, zW + 1, FW, uW, WW, CW, 16, -1 / 0, 1 / 0), uW < AW && (DF(MF++, zW + 1, uW, AW, WW, CW, 0, -1 / 0, 1 / 0), DF(MF++, zW + 1, WW, CW, uW, AW, 1, -1 / 0, 1 / 0))
                }
              } else FW < (AW = XF ? aW(FF, zW, FW, fF, BF, jW, SW) : TF(FF, zW, FW, fF, BF, jW, SW)) && (zW === FF - 2 ? YF = XF ? dF.sweepBipartite(FF, WF, WW, CW, vW, JF, FW, AW, BF, jW) : dF.sweepBipartite(FF, WF, FW, AW, BF, jW, WW, CW, vW, JF) : (DF(MF++, zW + 1, FW, AW, WW, CW, XF, -1 / 0, 1 / 0), DF(MF++, zW + 1, WW, CW, FW, AW, 1 ^ XF, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var CF = SF(36730),
      AF = SF(36736),
      uF = SF(36763),
      hF = uF.partial,
      bW = uF.full,
      dF = SF(36749),
      PF = SF(36770),
      RF = SF(36775),
      iW = 128,
      eF = 1 << 22,
      EF = 1 << 22,
      QF = RF("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      rW = RF("lo===p0", ["p0"]),
      gW = RF("lo<p0", ["p0"]),
      tW = RF("hi<=p0", ["p0"]),
      TF = RF("lo<=p0&&p0<=hi", ["p0"]),
      aW = RF("lo<p0&&p0<=hi", ["p0"]),
      kW = 6,
      qW = 2,
      VF = CF.mallocInt32(1024),
      NF = CF.mallocDouble(1024);

    function DF(FF, WF, SF, CF, AF, uF, hF, bW, dF) {
      var PF = kW * FF;
      VF[PF] = WF, VF[PF + 1] = SF, VF[PF + 2] = CF, VF[PF + 3] = AF, VF[PF + 4] = uF, VF[PF + 5] = hF;
      var RF = qW * FF;
      NF[RF] = bW, NF[RF + 1] = dF
    }

    function LF(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF, RF) {
      var iW = 2 * FF,
        eF = dF * iW,
        EF = PF[eF + WF];
      FF: for (var QF = AF, rW = AF * iW; QF < uF; ++QF, rW += iW) {
        var gW = hF[rW + WF],
          tW = hF[rW + WF + FF];
        if (!(EF < gW || tW < EF) && (!CF || EF !== gW)) {
          for (var TF, aW = bW[QF], kW = WF + 1; kW < FF; ++kW) {
            gW = hF[rW + kW], tW = hF[rW + kW + FF];
            var qW = PF[eF + kW],
              VF = PF[eF + kW + FF];
            if (tW < qW || VF < gW) continue FF
          }
          if (void 0 !== (TF = CF ? SF(RF, aW) : SF(aW, RF))) return TF
        }
      }
    }

    function mW(FF, WF, SF, CF, AF, uF, hF, bW, dF, PF) {
      var RF = 2 * FF,
        iW = bW * RF,
        eF = dF[iW + WF];
      FF: for (var EF = CF, QF = CF * RF; EF < AF; ++EF, QF += RF) {
        var rW = hF[EF];
        if (rW !== PF) {
          var gW = uF[QF + WF],
            tW = uF[QF + WF + FF];
          if (!(eF < gW || tW < eF)) {
            for (var TF = WF + 1; TF < FF; ++TF) {
              gW = uF[QF + TF], tW = uF[QF + TF + FF];
              var aW = dF[iW + TF],
                kW = dF[iW + TF + FF];
              if (tW < aW || kW < gW) continue FF
            }
            var qW = SF(rW, PF);
            if (void 0 !== qW) return qW
          }
        }
      }
    }
  },
  36770: (FF, WF, SF) => {
    FF.exports = function(FF, WF, SF, hF, bW, dF) {
      if (hF <= SF + 1) return SF;
      var PF = SF,
        RF = hF,
        iW = hF + SF >>> 1,
        eF = 2 * FF,
        EF = iW,
        QF = bW[eF * iW + WF];
      for (; PF < RF;) {
        if (RF - PF < AF) {
          uF(FF, WF, PF, RF, bW, dF), QF = bW[eF * iW + WF];
          break
        }
        var rW = RF - PF,
          gW = Math.random() * rW + PF | 0,
          tW = bW[eF * gW + WF],
          TF = Math.random() * rW + PF | 0,
          aW = bW[eF * TF + WF],
          kW = Math.random() * rW + PF | 0,
          qW = bW[eF * kW + WF];
        tW <= aW ? qW >= aW ? (EF = TF, QF = aW) : tW >= qW ? (EF = gW, QF = tW) : (EF = kW, QF = qW) : aW >= qW ? (EF = TF, QF = aW) : qW >= tW ? (EF = gW, QF = tW) : (EF = kW, QF = qW);
        for (var VF = eF * (RF - 1), NF = eF * EF, DF = 0; DF < eF; ++DF, ++VF, ++NF) {
          var LF = bW[VF];
          bW[VF] = bW[NF], bW[NF] = LF
        }
        var mW = dF[RF - 1];
        dF[RF - 1] = dF[EF], dF[EF] = mW;
        for (VF = eF * (RF - 1), NF = eF * (EF = CF(FF, WF, PF, RF - 1, bW, dF, QF)), DF = 0; DF < eF; ++DF, ++VF, ++NF) {
          LF = bW[VF];
          bW[VF] = bW[NF], bW[NF] = LF
        }
        mW = dF[RF - 1];
        if (dF[RF - 1] = dF[EF], dF[EF] = mW, iW < EF) {
          for (RF = EF - 1; PF < RF && bW[eF * (RF - 1) + WF] === QF;) RF -= 1;
          RF += 1
        } else {
          if (!(EF < iW)) break;
          for (PF = EF + 1; PF < RF && bW[eF * PF + WF] === QF;) PF += 1
        }
      }
      return CF(FF, WF, SF, iW, bW, dF, bW[eF * iW + WF])
    };
    var CF = SF(36775)("lo<p0", ["p0"]),
      AF = 8;

    function uF(FF, WF, SF, CF, AF, uF) {
      for (var hF = 2 * FF, bW = hF * (SF + 1) + WF, dF = SF + 1; dF < CF; ++dF, bW += hF)
        for (var PF = AF[bW], RF = dF, iW = hF * (dF - 1); RF > SF && AF[iW + WF] > PF; --RF, iW -= hF) {
          for (var eF = iW, EF = iW + hF, QF = 0; QF < hF; ++QF, ++eF, ++EF) {
            var rW = AF[eF];
            AF[eF] = AF[EF], AF[EF] = rW
          }
          var gW = uF[RF];
          uF[RF] = uF[RF - 1], uF[RF - 1] = gW
        }
    }
  },
  36775: FF => {
    FF.exports = function(FF, SF) {
      var CF = "abcdef".split("").concat(SF),
        AF = [];
      FF.indexOf("lo") >= 0 && AF.push("lo=e[k+n]");
      FF.indexOf("hi") >= 0 && AF.push("hi=e[k+o]");
      return CF.push(WF.replace("_", AF.join()).replace("$", FF)), Function.apply(void 0, CF)
    };
    var WF = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  36752: FF => {
    FF.exports = function(FF, CF) {
      CF <= 4 * WF ? SF(0, CF - 1, FF) : PF(0, CF - 1, FF)
    };
    var WF = 32;

    function SF(FF, WF, SF) {
      for (var CF = 2 * (FF + 1), AF = FF + 1; AF <= WF; ++AF) {
        for (var uF = SF[CF++], hF = SF[CF++], bW = AF, dF = CF - 2; bW-- > FF;) {
          var PF = SF[dF - 2],
            RF = SF[dF - 1];
          if (PF < uF) break;
          if (PF === uF && RF < hF) break;
          SF[dF] = PF, SF[dF + 1] = RF, dF -= 2
        }
        SF[dF] = uF, SF[dF + 1] = hF
      }
    }

    function CF(FF, WF, SF) {
      WF *= 2;
      var CF = SF[FF *= 2],
        AF = SF[FF + 1];
      SF[FF] = SF[WF], SF[FF + 1] = SF[WF + 1], SF[WF] = CF, SF[WF + 1] = AF
    }

    function AF(FF, WF, SF) {
      WF *= 2, SF[FF *= 2] = SF[WF], SF[FF + 1] = SF[WF + 1]
    }

    function uF(FF, WF, SF, CF) {
      WF *= 2, SF *= 2;
      var AF = CF[FF *= 2],
        uF = CF[FF + 1];
      CF[FF] = CF[WF], CF[FF + 1] = CF[WF + 1], CF[WF] = CF[SF], CF[WF + 1] = CF[SF + 1], CF[SF] = AF, CF[SF + 1] = uF
    }

    function hF(FF, WF, SF, CF, AF) {
      WF *= 2, AF[FF *= 2] = AF[WF], AF[WF] = SF, AF[FF + 1] = AF[WF + 1], AF[WF + 1] = CF
    }

    function bW(FF, WF, SF) {
      WF *= 2;
      var CF = SF[FF *= 2],
        AF = SF[WF];
      return !(CF < AF) && (CF !== AF || SF[FF + 1] > SF[WF + 1])
    }

    function dF(FF, WF, SF, CF) {
      var AF = CF[FF *= 2];
      return AF < WF || AF === WF && CF[FF + 1] < SF
    }

    function PF(FF, RF, iW) {
      var eF = (RF - FF + 1) / 6 | 0,
        EF = FF + eF,
        QF = RF - eF,
        rW = FF + RF >> 1,
        gW = rW - eF,
        tW = rW + eF,
        TF = EF,
        aW = gW,
        kW = rW,
        qW = tW,
        VF = QF,
        NF = FF + 1,
        DF = RF - 1,
        LF = 0;
      bW(TF, aW, iW) && (LF = TF, TF = aW, aW = LF), bW(qW, VF, iW) && (LF = qW, qW = VF, VF = LF), bW(TF, kW, iW) && (LF = TF, TF = kW, kW = LF), bW(aW, kW, iW) && (LF = aW, aW = kW, kW = LF), bW(TF, qW, iW) && (LF = TF, TF = qW, qW = LF), bW(kW, qW, iW) && (LF = kW, kW = qW, qW = LF), bW(aW, VF, iW) && (LF = aW, aW = VF, VF = LF), bW(aW, kW, iW) && (LF = aW, aW = kW, kW = LF), bW(qW, VF, iW) && (LF = qW, qW = VF, VF = LF);
      for (var mW = iW[2 * aW], OF = iW[2 * aW + 1], xW = iW[2 * qW], ZF = iW[2 * qW + 1], oF = 2 * TF, YF = 2 * kW, MF = 2 * VF, cW = 2 * EF, GF = 2 * rW, zW = 2 * QF, IF = 0; IF < 2; ++IF) {
        var fF = iW[oF + IF],
          yW = iW[YF + IF],
          sF = iW[MF + IF];
        iW[cW + IF] = fF, iW[GF + IF] = yW, iW[zW + IF] = sF
      }
      AF(gW, FF, iW), AF(tW, RF, iW);
      for (var nF = NF; nF <= DF; ++nF)
        if (dF(nF, mW, OF, iW)) nF !== NF && CF(nF, NF, iW), ++NF;
        else if (!dF(nF, xW, ZF, iW))
        for (;;) {
          if (dF(DF, xW, ZF, iW)) {
            dF(DF, mW, OF, iW) ? (uF(nF, NF, DF, iW), ++NF, --DF) : (CF(nF, DF, iW), --DF);
            break
          }
          if (--DF < nF) break
        }
      hF(FF, NF - 1, mW, OF, iW), hF(RF, DF + 1, xW, ZF, iW), NF - 2 - FF <= WF ? SF(FF, NF - 2, iW) : PF(FF, NF - 2, iW), RF - (DF + 2) <= WF ? SF(DF + 2, RF, iW) : PF(DF + 2, RF, iW), DF - NF <= WF ? SF(NF, DF, iW) : PF(NF, DF, iW)
    }
  },
  36749: (FF, WF, SF) => {
    FF.exports = {
      init: function(FF) {
        var WF = AF.nextPow2(FF);
        dF.length < WF && (CF.free(dF), dF = CF.mallocInt32(WF));
        PF.length < WF && (CF.free(PF), PF = CF.mallocInt32(WF));
        RF.length < WF && (CF.free(RF), RF = CF.mallocInt32(WF));
        iW.length < WF && (CF.free(iW), iW = CF.mallocInt32(WF));
        eF.length < WF && (CF.free(eF), eF = CF.mallocInt32(WF));
        EF.length < WF && (CF.free(EF), EF = CF.mallocInt32(WF));
        var SF = 8 * WF;
        QF.length < SF && (CF.free(QF), QF = CF.mallocDouble(SF))
      },
      sweepBipartite: function(FF, WF, SF, CF, AF, bW, eF, EF, tW, TF) {
        for (var aW = 0, kW = 2 * FF, qW = FF - 1, VF = kW - 1, NF = SF; NF < CF; ++NF) {
          var DF = bW[NF],
            LF = kW * NF;
          QF[aW++] = AF[LF + qW], QF[aW++] = -(DF + 1), QF[aW++] = AF[LF + VF], QF[aW++] = DF
        }
        for (NF = eF; NF < EF; ++NF) {
          DF = TF[NF] + hF;
          var mW = kW * NF;
          QF[aW++] = tW[mW + qW], QF[aW++] = -DF, QF[aW++] = tW[mW + VF], QF[aW++] = DF
        }
        var OF = aW >>> 1;
        uF(QF, OF);
        var xW = 0,
          ZF = 0;
        for (NF = 0; NF < OF; ++NF) {
          var oF = 0 | QF[2 * NF + 1];
          if (oF >= hF) rW(RF, iW, ZF--, oF = oF - hF | 0);
          else if (oF >= 0) rW(dF, PF, xW--, oF);
          else if (oF <= -hF) {
            oF = -oF - hF | 0;
            for (var YF = 0; YF < xW; ++YF) {
              if (void 0 !== (MF = WF(dF[YF], oF))) return MF
            }
            gW(RF, iW, ZF++, oF)
          } else {
            oF = -oF - 1 | 0;
            for (YF = 0; YF < ZF; ++YF) {
              var MF;
              if (void 0 !== (MF = WF(oF, RF[YF]))) return MF
            }
            gW(dF, PF, xW++, oF)
          }
        }
      },
      sweepComplete: function(FF, WF, SF, CF, AF, hF, bW, tW, TF, aW) {
        for (var kW = 0, qW = 2 * FF, VF = FF - 1, NF = qW - 1, DF = SF; DF < CF; ++DF) {
          var LF = hF[DF] + 1 << 1,
            mW = qW * DF;
          QF[kW++] = AF[mW + VF], QF[kW++] = -LF, QF[kW++] = AF[mW + NF], QF[kW++] = LF
        }
        for (DF = bW; DF < tW; ++DF) {
          LF = aW[DF] + 1 << 1;
          var OF = qW * DF;
          QF[kW++] = TF[OF + VF], QF[kW++] = 1 | -LF, QF[kW++] = TF[OF + NF], QF[kW++] = 1 | LF
        }
        var xW = kW >>> 1;
        uF(QF, xW);
        var ZF = 0,
          oF = 0,
          YF = 0;
        for (DF = 0; DF < xW; ++DF) {
          var MF = 0 | QF[2 * DF + 1],
            cW = 1 & MF;
          if (DF < xW - 1 && MF >> 1 === QF[2 * DF + 3] >> 1 && (cW = 2, DF += 1), MF < 0) {
            for (var GF = -(MF >> 1) - 1, zW = 0; zW < YF; ++zW) {
              if (void 0 !== (IF = WF(eF[zW], GF))) return IF
            }
            if (0 !== cW)
              for (zW = 0; zW < ZF; ++zW) {
                if (void 0 !== (IF = WF(dF[zW], GF))) return IF
              }
            if (1 !== cW)
              for (zW = 0; zW < oF; ++zW) {
                var IF;
                if (void 0 !== (IF = WF(RF[zW], GF))) return IF
              }
            0 === cW ? gW(dF, PF, ZF++, GF) : 1 === cW ? gW(RF, iW, oF++, GF) : 2 === cW && gW(eF, EF, YF++, GF)
          } else {
            GF = (MF >> 1) - 1;
            0 === cW ? rW(dF, PF, ZF--, GF) : 1 === cW ? rW(RF, iW, oF--, GF) : 2 === cW && rW(eF, EF, YF--, GF)
          }
        }
      },
      scanBipartite: function(FF, WF, SF, CF, AF, bW, RF, iW, eF, EF, tW, TF) {
        var aW = 0,
          kW = 2 * FF,
          qW = WF,
          VF = WF + FF,
          NF = 1,
          DF = 1;
        CF ? DF = hF : NF = hF;
        for (var LF = AF; LF < bW; ++LF) {
          var mW = LF + NF,
            OF = kW * LF;
          QF[aW++] = RF[OF + qW], QF[aW++] = -mW, QF[aW++] = RF[OF + VF], QF[aW++] = mW
        }
        for (LF = eF; LF < EF; ++LF) {
          mW = LF + DF;
          var xW = kW * LF;
          QF[aW++] = tW[xW + qW], QF[aW++] = -mW
        }
        var ZF = aW >>> 1;
        uF(QF, ZF);
        var oF = 0;
        for (LF = 0; LF < ZF; ++LF) {
          var YF = 0 | QF[2 * LF + 1];
          if (YF < 0) {
            var MF = !1;
            if ((mW = -YF) >= hF ? (MF = !CF, mW -= hF) : (MF = !!CF, mW -= 1), MF) gW(dF, PF, oF++, mW);
            else {
              var cW = TF[mW],
                GF = kW * mW,
                zW = tW[GF + WF + 1],
                IF = tW[GF + WF + 1 + FF];
              FF: for (var fF = 0; fF < oF; ++fF) {
                var yW = dF[fF],
                  sF = kW * yW;
                if (!(IF < RF[sF + WF + 1] || RF[sF + WF + 1 + FF] < zW)) {
                  for (var nF = WF + 2; nF < FF; ++nF)
                    if (tW[GF + nF + FF] < RF[sF + nF] || RF[sF + nF + FF] < tW[GF + nF]) continue FF;
                  var HF, KF = iW[yW];
                  if (void 0 !== (HF = CF ? SF(cW, KF) : SF(KF, cW))) return HF
                }
              }
            }
          } else rW(dF, PF, oF--, YF - NF)
        }
      },
      scanComplete: function(FF, WF, SF, CF, AF, bW, PF, RF, iW, eF, EF) {
        for (var rW = 0, gW = 2 * FF, tW = WF, TF = WF + FF, aW = CF; aW < AF; ++aW) {
          var kW = aW + hF,
            qW = gW * aW;
          QF[rW++] = bW[qW + tW], QF[rW++] = -kW, QF[rW++] = bW[qW + TF], QF[rW++] = kW
        }
        for (aW = RF; aW < iW; ++aW) {
          kW = aW + 1;
          var VF = gW * aW;
          QF[rW++] = eF[VF + tW], QF[rW++] = -kW
        }
        var NF = rW >>> 1;
        uF(QF, NF);
        var DF = 0;
        for (aW = 0; aW < NF; ++aW) {
          var LF = 0 | QF[2 * aW + 1];
          if (LF < 0) {
            if ((kW = -LF) >= hF) dF[DF++] = kW - hF;
            else {
              var mW = EF[kW -= 1],
                OF = gW * kW,
                xW = eF[OF + WF + 1],
                ZF = eF[OF + WF + 1 + FF];
              FF: for (var oF = 0; oF < DF; ++oF) {
                var YF = dF[oF],
                  MF = PF[YF];
                if (MF === mW) break;
                var cW = gW * YF;
                if (!(ZF < bW[cW + WF + 1] || bW[cW + WF + 1 + FF] < xW)) {
                  for (var GF = WF + 2; GF < FF; ++GF)
                    if (eF[OF + GF + FF] < bW[cW + GF] || bW[cW + GF + FF] < eF[OF + GF]) continue FF;
                  var zW = SF(MF, mW);
                  if (void 0 !== zW) return zW
                }
              }
            }
          } else {
            for (kW = LF - hF, oF = DF - 1; oF >= 0; --oF)
              if (dF[oF] === kW) {
                for (GF = oF + 1; GF < DF; ++GF) dF[GF - 1] = dF[GF];
                break
              }-- DF
          }
        }
      }
    };
    var CF = SF(36730),
      AF = SF(36736),
      uF = SF(36752),
      hF = 1 << 28,
      bW = 1024,
      dF = CF.mallocInt32(bW),
      PF = CF.mallocInt32(bW),
      RF = CF.mallocInt32(bW),
      iW = CF.mallocInt32(bW),
      eF = CF.mallocInt32(bW),
      EF = CF.mallocInt32(bW),
      QF = CF.mallocDouble(8192);

    function rW(FF, WF, SF, CF) {
      var AF = WF[CF],
        uF = FF[SF - 1];
      FF[AF] = uF, WF[uF] = AF
    }

    function gW(FF, WF, SF, CF) {
      FF[SF] = CF, WF[CF] = SF
    }
  },
  36743: FF => {
    function WF(FF, SF, CF) {
      var AF = 0 | FF[CF];
      if (AF <= 0) return [];
      var uF, hF = new Array(AF);
      if (CF === FF.length - 1)
        for (uF = 0; uF < AF; ++uF) hF[uF] = SF;
      else
        for (uF = 0; uF < AF; ++uF) hF[uF] = WF(FF, SF, CF + 1);
      return hF
    }
    FF.exports = function(FF, SF) {
      switch ("undefined" === typeof SF && (SF = 0), typeof FF) {
        case "number":
          if (FF > 0) return function(FF, WF) {
            var SF, CF;
            for (SF = new Array(FF), CF = 0; CF < FF; ++CF) SF[CF] = WF;
            return SF
          }(0 | FF, SF);
          break;
        case "object":
          if ("number" === typeof FF.length) return WF(FF, SF, 0)
      }
      return []
    }
  },
  36687: (FF, WF, SF) => {
    FF.exports = function() {
      var FF = this;
      this.components = {}, this.comps = this.components;
      var WF = this.components,
        SF = 1,
        AF = {},
        uF = [],
        hF = [],
        bW = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function dF(FF, SF) {
        var CF = WF[SF],
          uF = AF[SF],
          hF = uF.hash[FF];
        hF && (uF.remove(FF), CF.eWF && (CF.multi ? (hF.forEach((WF => {
          WF && CF.eWF(FF, WF)
        })), hF.length = 0) : CF.eWF(FF, hF)), bW.removals.push(uF), PF())
      }

      function PF() {
        bW.timeout || (bW.timeout = !0, setTimeout(RF, 1))
      }

      function RF() {
        bW.timeout = !1, iW()
      }

      function iW() {
        bW.multiComps.length && function(FF) {
          for (var WF = 0; WF < FF.length; WF++) {
            var {
              entID: SF,
              data: CF
            } = FF[WF], AF = CF.hash[SF];
            if (AF) {
              for (var uF = 0; uF < AF.length; uF++) AF[uF] || (AF.splice(uF, 1), uF--);
              0 === AF.length && (CF.remove(SF), bW.removals.push(CF))
            }
          }
          FF.length = 0
        }(bW.multiComps), bW.removals.length && function(FF) {
          for (var WF = 0; WF < FF.length; WF++) {
            FF[WF].flush()
          }
          FF.length = 0
        }(bW.removals)
      }
      this.DA = AF, this._systems = uF, this._renderSystems = hF, this.xAF = function(WF) {
        var CF = SF++;
        return Array.isArray(WF) && WF.forEach((WF => FF.nWF(CF, WF))), CF
      }, this.deleteEntity = function(WF) {
        return Object.keys(AF).forEach((FF => {
          AF[FF].hash[WF] && dF(WF, FF)
        })), FF
      }, this.jdF = function(FF) {
        if (!FF) throw new Error("Missing component definition");
        var SF = FF.name;
        if (!SF) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof SF) throw new Error("Component name must be a string.");
        if ("" === SF) throw new Error("Component name must be a non-empty string.");
        if (AF[SF]) throw new Error(`Component ${SF} already exists.`);
        var bW = {};
        return bW.name = SF, bW.multi = !!FF.multi, bW.order = isNaN(FF.order) ? 99 : FF.order, bW.stateConstructor = FF.stateConstructor || null, bW.state = FF.state || {}, bW.EL = FF.EL || null, bW.eWF = FF.eWF || null, bW.system = FF.system || null, bW.YL = FF.YL || null, WF[SF] = bW, AF[SF] = new CF, AF[SF]._pendingMultiCleanup = !1, AF[SF]._multiCleanupIDs = bW.multi ? [] : null, bW.system && (uF.push(SF), uF.sort(((FF, SF) => WF[FF].order - WF[SF].order))), bW.YL && (hF.push(SF), hF.sort(((FF, SF) => WF[FF].order - WF[SF].order))), SF
      }, this.overwriteComponent = function(FF, SF) {
        var CF = WF[FF];
        if (!CF) throw new Error(`Unknown component: ${FF}`);
        if (!SF) throw new Error("Missing component definition");
        if (CF.name !== SF.name) throw new Error("Overwriting component must use the same name property.");
        var bW = {};
        bW.name = FF, bW.multi = !!SF.multi, bW.order = isNaN(SF.order) ? 99 : SF.order, bW.state = SF.state || {}, bW.EL = SF.EL || null, bW.eWF = SF.eWF || null, bW.system = SF.system || null, bW.YL = SF.YL || null, WF[FF] = bW, AF[FF]._pendingMultiCleanup = !1, AF[FF]._multiCleanupIDs = bW.multi ? [] : null;
        var dF = uF.indexOf(FF);
        bW.system && dF < 0 && uF.push(FF), !bW.system && dF >= 0 && uF.splice(dF, 1), uF.sort(((FF, SF) => WF[FF].order - WF[SF].order));
        var PF = hF.indexOf(FF);
        bW.YL && PF < 0 && hF.push(FF), !bW.YL && PF >= 0 && hF.splice(PF, 1), hF.sort(((FF, SF) => WF[FF].order - WF[SF].order));
        var RF = bW.state;
        return this.ySF(FF).forEach((FF => {
          for (var WF in RF) WF in FF || (FF[WF] = RF[WF]);
          bW.EL && bW.EL(FF.sWF, FF)
        })), FF
      }, this.deleteComponent = function(SF) {
        var CF = AF[SF];
        if (!CF) throw new Error(`Unknown component: ${SF}`);
        CF.flush(), CF.list.forEach((FF => {
          FF && dF(FF.sWF || FF[0].sWF, SF)
        }));
        var bW = uF.indexOf(SF),
          PF = hF.indexOf(SF);
        return bW > -1 && uF.splice(bW, 1), PF > -1 && hF.splice(PF, 1), AF[SF].dispose(), delete AF[SF], delete WF[SF], FF
      }, this.nWF = function(FF, SF, CF) {
        var uF, hF = WF[SF],
          bW = AF[SF];
        if (!bW) throw new Error(`Unknown component: ${SF}.`);
        if (bW.hash[FF] && !hF.multi) throw new Error(`Entity ${FF} already has component: ${SF}.`);
        if (hF.stateConstructor) {
          if (!(uF = new hF.stateConstructor).hasOwnProperty("sWF")) throw new Error(`Component ${hF.name} stateConstructor type does not have property __id`);
          Object.assign(uF, hF.state, CF)
        } else uF = {
          sWF: FF,
          ...hF.state,
          ...CF
        };
        if (uF.sWF = FF, hF.multi) {
          var dF = bW.hash[FF];
          dF || (dF = [], bW.add(FF, dF)), dF.push(uF)
        } else bW.add(FF, uF);
        return hF.EL && hF.EL(FF, uF), this
      }, this.KhF = function(FF, WF) {
        var SF = AF[WF];
        if (!SF) throw new Error(`Unknown component: ${WF}.`);
        return !!SF.hash[FF]
      }, this.HWF = function(WF, SF) {
        if (!AF[SF]) throw new Error(`Unknown component: ${SF}.`);
        return dF(WF, SF), FF
      }, this.getState = function(FF, WF) {
        var SF = AF[WF];
        if (!SF) throw new Error(`Unknown component: ${WF}.`);
        return SF.hash[FF]
      }, this.ySF = function(FF) {
        var WF = AF[FF];
        if (!WF) throw new Error(`Unknown component: ${FF}.`);
        return iW(), WF.list
      }, this.ObF = function(FF) {
        if (!AF[FF]) throw new Error(`Unknown component: ${FF}.`);
        var WF = AF[FF].hash;
        return FF => WF[FF]
      }, this.cdF = function(FF) {
        if (!AF[FF]) throw new Error(`Unknown component: ${FF}.`);
        var WF = AF[FF].hash;
        return FF => !!WF[FF]
      }, this.lF = function(SF) {
        iW();
        for (var CF = 0; CF < uF.length; CF++) {
          var hF = uF[CF],
            bW = WF[hF],
            dF = AF[hF];
          bW.system(SF, dF.list), iW()
        }
        return FF
      }, this.render = function(SF) {
        iW();
        for (var CF = 0; CF < hF.length; CF++) {
          var uF = hF[CF],
            bW = WF[uF],
            dF = AF[uF];
          bW.YL(SF, dF.list), iW()
        }
        return FF
      }, this.removeMultiComponent = function(SF, CF, uF) {
        var hF = WF[CF],
          dF = AF[CF];
        if (!dF) throw new Error(`Unknown component: ${CF}.`);
        if (!hF.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(FF, WF, SF, CF) {
          var AF = SF.hash[FF];
          if (AF) {
            var uF = AF[CF];
            uF && (AF[CF] = null, WF.eWF && WF.eWF(FF, uF), bW.multiComps.push({
              entID: FF,
              data: SF
            }), PF())
          }
        }(SF, hF, dF, uF), FF
      }
    };
    var CF = SF(36692)
  },
  36692: FF => {
    function WF(FF, WF) {
      var SF = FF._map[WF];
      if (delete FF.hash[WF], delete FF._map[WF], SF === FF.list.length - 1) FF.list.pop(), FF._idList.pop();
      else {
        var CF = FF.list.pop();
        FF.list[SF] = CF;
        var AF = FF._idList.pop();
        FF._idList[SF] = AF, FF._map[AF] = SF
      }
    }
    FF.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(FF, WF) {
        if ("number" === typeof this._map[FF]) {
          var SF = this._map[FF];
          this.hash[FF] = WF, this.list[SF] = WF, this._idList[SF] = FF
        } else this._map[FF] = this.list.length, this.hash[FF] = WF, this.list.push(WF), this._idList.push(FF)
      }
      remove(FF) {
        var WF = this._map[FF];
        this.hash[FF] = null, this.list[WF] = null, this._pendingRemovals.push(FF)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var FF = 0; FF < this._pendingRemovals.length; FF++) {
          var SF = this._pendingRemovals[FF];
          null === this.hash[SF] && WF(this, SF)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  36118: FF => {
    FF.exports = function(FF) {
      for (var WF = new Array(FF), SF = 0; SF < FF; ++SF) WF[SF] = SF;
      return WF
    }
  },
  36121: FF => {
    function WF(FF) {
      return !!FF.constructor && "function" === typeof FF.constructor.isBuffer && FF.constructor.isBuffer(FF)
    }
    FF.exports = function(FF) {
      return null != FF && (WF(FF) || function(FF) {
        return "function" === typeof FF.readFloatLE && "function" === typeof FF.slice && WF(FF.slice(0, 0))
      }(FF) || !!FF._isBuffer)
    }
  },
  36462: (FF, WF, SF) => {
    FF = SF.nmd(FF);
    var CF = "__lodash_hash_undefined__",
      AF = 9007199254740991,
      uF = "[object Arguments]",
      hF = "[object Boolean]",
      bW = "[object Date]",
      dF = "[object Function]",
      PF = "[object GeneratorFunction]",
      RF = "[object Map]",
      iW = "[object Number]",
      eF = "[object Object]",
      EF = "[object Promise]",
      QF = "[object RegExp]",
      rW = "[object Set]",
      gW = "[object String]",
      tW = "[object Symbol]",
      TF = "[object WeakMap]",
      aW = "[object ArrayBuffer]",
      kW = "[object DataView]",
      qW = "[object Float32Array]",
      VF = "[object Float64Array]",
      NF = "[object Int8Array]",
      DF = "[object Int16Array]",
      LF = "[object Int32Array]",
      mW = "[object Uint8Array]",
      OF = "[object Uint8ClampedArray]",
      xW = "[object Uint16Array]",
      ZF = "[object Uint32Array]",
      oF = /\w*$/,
      YF = /^\[object .+?Constructor\]$/,
      MF = /^(?:0|[1-9]\d*)$/,
      cW = {};
    cW[uF] = cW["[object Array]"] = cW[aW] = cW[kW] = cW[hF] = cW[bW] = cW[qW] = cW[VF] = cW[NF] = cW[DF] = cW[LF] = cW[RF] = cW[iW] = cW[eF] = cW[QF] = cW[rW] = cW[gW] = cW[tW] = cW[mW] = cW[OF] = cW[xW] = cW[ZF] = !0, cW["[object Error]"] = cW[dF] = cW[TF] = !1;
    var GF = "object" == typeof SF.g && SF.g && SF.g.Object === Object && SF.g,
      zW = "object" == typeof self && self && self.Object === Object && self,
      IF = GF || zW || Function("return this")(),
      fF = WF && !WF.nodeType && WF,
      yW = fF && FF && !FF.nodeType && FF,
      sF = yW && yW.exports === fF;

    function nF(FF, WF) {
      return FF.set(WF[0], WF[1]), FF
    }

    function HF(FF, WF) {
      return FF.add(WF), FF
    }

    function KF(FF, WF, SF, CF) {
      var AF = -1,
        uF = FF ? FF.length : 0;
      for (CF && uF && (SF = FF[++AF]); ++AF < uF;) SF = WF(SF, FF[AF], AF, FF);
      return SF
    }

    function wF(FF) {
      var WF = !1;
      if (null != FF && "function" != typeof FF.toString) try {
        WF = !!(FF + "")
      } catch (SF) {}
      return WF
    }

    function XF(FF) {
      var WF = -1,
        SF = Array(FF.size);
      return FF.forEach((function(FF, CF) {
        SF[++WF] = [CF, FF]
      })), SF
    }

    function UF(FF, WF) {
      return function(SF) {
        return FF(WF(SF))
      }
    }

    function BF(FF) {
      var WF = -1,
        SF = Array(FF.size);
      return FF.forEach((function(FF) {
        SF[++WF] = FF
      })), SF
    }
    var jW = Array.prototype,
      vW = Function.prototype,
      JF = Object.prototype,
      pF = IF["__core-js_shared__"],
      lF = function() {
        var FF = /[^.]+$/.exec(pF && pF.keys && pF.keys.IE_PROTO || "");
        return FF ? "Symbol(src)_1." + FF : ""
      }(),
      FW = vW.toString,
      WW = JF.hasOwnProperty,
      SW = JF.toString,
      CW = RegExp("^" + FW.call(WW).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      AW = sF ? IF.NC : void 0,
      uW = IF.Symbol,
      hW = IF.Uint8Array,
      bS = UF(Object.getPrototypeOf, Object),
      dW = Object.create,
      PW = JF.propertyIsEnumerable,
      RW = jW.splice,
      iS = Object.getOwnPropertySymbols,
      eW = AW ? AW.isBuffer : void 0,
      EW = UF(Object.keys, Object),
      QW = sW(IF, "DataView"),
      rS = sW(IF, "Map"),
      gS = sW(IF, "Promise"),
      tS = sW(IF, "Set"),
      TW = sW(IF, "WeakMap"),
      aS = sW(Object, "create"),
      kS = XW(QW),
      qS = XW(rS),
      VW = XW(gS),
      NW = XW(tS),
      DW = XW(TW),
      LW = uW ? uW.prototype : void 0,
      mS = LW ? LW.valueOf : void 0;

    function OW(FF) {
      var WF = -1,
        SF = FF ? FF.length : 0;
      for (this.clear(); ++WF < SF;) {
        var CF = FF[WF];
        this.set(CF[0], CF[1])
      }
    }

    function xS(FF) {
      var WF = -1,
        SF = FF ? FF.length : 0;
      for (this.clear(); ++WF < SF;) {
        var CF = FF[WF];
        this.set(CF[0], CF[1])
      }
    }

    function ZW(FF) {
      var WF = -1,
        SF = FF ? FF.length : 0;
      for (this.clear(); ++WF < SF;) {
        var CF = FF[WF];
        this.set(CF[0], CF[1])
      }
    }

    function oW(FF) {
      this.__data__ = new xS(FF)
    }

    function YW(FF, WF) {
      var SF = BW(FF) || function(FF) {
          return function(FF) {
            return function(FF) {
              return !!FF && "object" == typeof FF
            }(FF) && jS(FF)
          }(FF) && WW.call(FF, "callee") && (!PW.call(FF, "callee") || SW.call(FF) == uF)
        }(FF) ? function(FF, WF) {
          for (var SF = -1, CF = Array(FF); ++SF < FF;) CF[SF] = WF(SF);
          return CF
        }(FF.length, String) : [],
        CF = SF.length,
        AF = !!CF;
      for (var hF in FF) !WF && !WW.call(FF, hF) || AF && ("length" == hF || KW(hF, CF)) || SF.push(hF);
      return SF
    }

    function MW(FF, WF, SF) {
      var CF = FF[WF];
      WW.call(FF, WF) && UW(CF, SF) && (void 0 !== SF || WF in FF) || (FF[WF] = SF)
    }

    function cS(FF, WF) {
      for (var SF = FF.length; SF--;)
        if (UW(FF[SF][0], WF)) return SF;
      return -1
    }

    function GW(FF, WF, SF, CF, AF, EF, TF) {
      var YF;
      if (CF && (YF = EF ? CF(FF, AF, EF, TF) : CF(FF)), void 0 !== YF) return YF;
      if (!pW(FF)) return FF;
      var MF = BW(FF);
      if (MF) {
        if (YF = function(FF) {
            var WF = FF.length,
              SF = FF.constructor(WF);
            WF && "string" == typeof FF[0] && WW.call(FF, "index") && (SF.index = FF.index, SF.input = FF.input);
            return SF
          }(FF), !WF) return function(FF, WF) {
          var SF = -1,
            CF = FF.length;
          WF || (WF = Array(CF));
          for (; ++SF < CF;) WF[SF] = FF[SF];
          return WF
        }(FF, YF)
      } else {
        var GF = HW(FF),
          zW = GF == dF || GF == PF;
        if (vS(FF)) return function(FF, WF) {
          if (WF) return FF.slice();
          var SF = new FF.constructor(FF.length);
          return FF.copy(SF), SF
        }(FF, WF);
        if (GF == eF || GF == uF || zW && !EF) {
          if (wF(FF)) return EF ? FF : {};
          if (YF = function(FF) {
              return "function" != typeof FF.constructor || wW(FF) ? {} : (WF = bS(FF), pW(WF) ? dW(WF) : {});
              var WF
            }(zW ? {} : FF), !WF) return function(FF, WF) {
            return fW(FF, nW(FF), WF)
          }(FF, function(FF, WF) {
            return FF && fW(WF, lW(WF), FF)
          }(YF, FF))
        } else {
          if (!cW[GF]) return EF ? FF : {};
          YF = function(FF, WF, SF, CF) {
            var AF = FF.constructor;
            switch (WF) {
              case aW:
                return IW(FF);
              case hF:
              case bW:
                return new AF(+FF);
              case kW:
                return function(FF, WF) {
                  var SF = WF ? IW(FF.buffer) : FF.buffer;
                  return new FF.constructor(SF, FF.byteOffset, FF.byteLength)
                }(FF, CF);
              case qW:
              case VF:
              case NF:
              case DF:
              case LF:
              case mW:
              case OF:
              case xW:
              case ZF:
                return function(FF, WF) {
                  var SF = WF ? IW(FF.buffer) : FF.buffer;
                  return new FF.constructor(SF, FF.byteOffset, FF.length)
                }(FF, CF);
              case RF:
                return function(FF, WF, SF) {
                  var CF = WF ? SF(XF(FF), !0) : XF(FF);
                  return KF(CF, nF, new FF.constructor)
                }(FF, CF, SF);
              case iW:
              case gW:
                return new AF(FF);
              case QF:
                return function(FF) {
                  var WF = new FF.constructor(FF.source, oF.exec(FF));
                  return WF.lastIndex = FF.lastIndex, WF
                }(FF);
              case rW:
                return function(FF, WF, SF) {
                  var CF = WF ? SF(BF(FF), !0) : BF(FF);
                  return KF(CF, HF, new FF.constructor)
                }(FF, CF, SF);
              case tW:
                return uF = FF, mS ? Object(mS.call(uF)) : {}
            }
            var uF
          }(FF, GF, GW, WF)
        }
      }
      TF || (TF = new oW);
      var IF = TF.get(FF);
      if (IF) return IF;
      if (TF.set(FF, YF), !MF) var fF = SF ? function(FF) {
        return function(FF, WF, SF) {
          var CF = WF(FF);
          return BW(FF) ? CF : function(FF, WF) {
            for (var SF = -1, CF = WF.length, AF = FF.length; ++SF < CF;) FF[AF + SF] = WF[SF];
            return FF
          }(CF, SF(FF))
        }(FF, lW, nW)
      }(FF) : lW(FF);
      return function(FF, WF) {
        for (var SF = -1, CF = FF ? FF.length : 0; ++SF < CF && !1 !== WF(FF[SF], SF, FF););
      }(fF || FF, (function(AF, uF) {
        fF && (AF = FF[uF = AF]), MW(YF, uF, GW(AF, WF, SF, CF, uF, FF, TF))
      })), YF
    }

    function zS(FF) {
      return !(!pW(FF) || (WF = FF, lF && lF in WF)) && (JW(FF) || wF(FF) ? CW : YF).test(XW(FF));
      var WF
    }

    function IW(FF) {
      var WF = new FF.constructor(FF.byteLength);
      return new hW(WF).set(new hW(FF)), WF
    }

    function fW(FF, WF, SF, CF) {
      SF || (SF = {});
      for (var AF = -1, uF = WF.length; ++AF < uF;) {
        var hF = WF[AF],
          bW = CF ? CF(SF[hF], FF[hF], hF, SF, FF) : void 0;
        MW(SF, hF, void 0 === bW ? FF[hF] : bW)
      }
      return SF
    }

    function yS(FF, WF) {
      var SF = FF.__data__;
      return function(FF) {
        var WF = typeof FF;
        return "string" == WF || "number" == WF || "symbol" == WF || "boolean" == WF ? "__proto__" !== FF : null === FF
      }(WF) ? SF["string" == typeof WF ? "string" : "hash"] : SF.map
    }

    function sW(FF, WF) {
      var SF = function(FF, WF) {
        return null == FF ? void 0 : FF[WF]
      }(FF, WF);
      return zS(SF) ? SF : void 0
    }
    OW.prototype.clear = function() {
      this.__data__ = aS ? aS(null) : {}
    }, OW.prototype.delete = function(FF) {
      return this.has(FF) && delete this.__data__[FF]
    }, OW.prototype.get = function(FF) {
      var WF = this.__data__;
      if (aS) {
        var SF = WF[FF];
        return SF === CF ? void 0 : SF
      }
      return WW.call(WF, FF) ? WF[FF] : void 0
    }, OW.prototype.has = function(FF) {
      var WF = this.__data__;
      return aS ? void 0 !== WF[FF] : WW.call(WF, FF)
    }, OW.prototype.set = function(FF, WF) {
      return this.__data__[FF] = aS && void 0 === WF ? CF : WF, this
    }, xS.prototype.clear = function() {
      this.__data__ = []
    }, xS.prototype.delete = function(FF) {
      var WF = this.__data__,
        SF = cS(WF, FF);
      return !(SF < 0) && (SF == WF.length - 1 ? WF.pop() : RW.call(WF, SF, 1), !0)
    }, xS.prototype.get = function(FF) {
      var WF = this.__data__,
        SF = cS(WF, FF);
      return SF < 0 ? void 0 : WF[SF][1]
    }, xS.prototype.has = function(FF) {
      return cS(this.__data__, FF) > -1
    }, xS.prototype.set = function(FF, WF) {
      var SF = this.__data__,
        CF = cS(SF, FF);
      return CF < 0 ? SF.push([FF, WF]) : SF[CF][1] = WF, this
    }, ZW.prototype.clear = function() {
      this.__data__ = {
        hash: new OW,
        map: new(rS || xS),
        string: new OW
      }
    }, ZW.prototype.delete = function(FF) {
      return yS(this, FF).delete(FF)
    }, ZW.prototype.get = function(FF) {
      return yS(this, FF).get(FF)
    }, ZW.prototype.has = function(FF) {
      return yS(this, FF).has(FF)
    }, ZW.prototype.set = function(FF, WF) {
      return yS(this, FF).set(FF, WF), this
    }, oW.prototype.clear = function() {
      this.__data__ = new xS
    }, oW.prototype.delete = function(FF) {
      return this.__data__.delete(FF)
    }, oW.prototype.get = function(FF) {
      return this.__data__.get(FF)
    }, oW.prototype.has = function(FF) {
      return this.__data__.has(FF)
    }, oW.prototype.set = function(FF, WF) {
      var SF = this.__data__;
      if (SF instanceof xS) {
        var CF = SF.__data__;
        if (!rS || CF.length < 199) return CF.push([FF, WF]), this;
        SF = this.__data__ = new ZW(CF)
      }
      return SF.set(FF, WF), this
    };
    var nW = iS ? UF(iS, Object) : function() {
        return []
      },
      HW = function(FF) {
        return SW.call(FF)
      };

    function KW(FF, WF) {
      return !!(WF = null == WF ? AF : WF) && ("number" == typeof FF || MF.test(FF)) && FF > -1 && FF % 1 == 0 && FF < WF
    }

    function wW(FF) {
      var WF = FF && FF.constructor;
      return FF === ("function" == typeof WF && WF.prototype || JF)
    }

    function XW(FF) {
      if (null != FF) {
        try {
          return FW.call(FF)
        } catch (WF) {}
        try {
          return FF + ""
        } catch (WF) {}
      }
      return ""
    }

    function UW(FF, WF) {
      return FF === WF || FF !== FF && WF !== WF
    }(QW && HW(new QW(new ArrayBuffer(1))) != kW || rS && HW(new rS) != RF || gS && HW(gS.resolve()) != EF || tS && HW(new tS) != rW || TW && HW(new TW) != TF) && (HW = function(FF) {
      var WF = SW.call(FF),
        SF = WF == eF ? FF.constructor : void 0,
        CF = SF ? XW(SF) : void 0;
      if (CF) switch (CF) {
        case kS:
          return kW;
        case qS:
          return RF;
        case VW:
          return EF;
        case NW:
          return rW;
        case DW:
          return TF
      }
      return WF
    });
    var BW = Array.isArray;

    function jS(FF) {
      return null != FF && function(FF) {
        return "number" == typeof FF && FF > -1 && FF % 1 == 0 && FF <= AF
      }(FF.length) && !JW(FF)
    }
    var vS = eW || function() {
      return !1
    };

    function JW(FF) {
      var WF = pW(FF) ? SW.call(FF) : "";
      return WF == dF || WF == PF
    }

    function pW(FF) {
      var WF = typeof FF;
      return !!FF && ("object" == WF || "function" == WF)
    }

    function lW(FF) {
      return jS(FF) ? YW(FF) : function(FF) {
        if (!wW(FF)) return EW(FF);
        var WF = [];
        for (var SF in Object(FF)) WW.call(FF, SF) && "constructor" != SF && WF.push(SF);
        return WF
      }(FF)
    }
    FF.exports = function(FF) {
      return GW(FF, !0, !0)
    }
  },
  36111: (FF, WF, SF) => {
    var CF = SF(36118),
      AF = SF(36121),
      uF = "undefined" !== typeof Float64Array;

    function hF(FF, WF) {
      return FF[0] - WF[0]
    }

    function bW() {
      var FF, WF = this.stride,
        SF = new Array(WF.length);
      for (FF = 0; FF < SF.length; ++FF) SF[FF] = [Math.abs(WF[FF]), FF];
      SF.sort(hF);
      var CF = new Array(SF.length);
      for (FF = 0; FF < CF.length; ++FF) CF[FF] = SF[FF][1];
      return CF
    }

    function dF(FF, WF) {
      var SF = ["View", WF, "d", FF].join("");
      WF < 0 && (SF = "View_Nil" + FF);
      var AF = "generic" === FF;
      if (-1 === WF) {
        var uF = "function " + SF + "(a){this.data=a;};var proto=" + SF + ".prototype;proto.dtype='" + FF + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + SF + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + SF + "(a){return new " + SF + "(a);}";
        return new Function(uF)()
      }
      if (0 === WF) {
        uF = "function " + SF + "(a,d) {this.data = a;this.offset = d};var proto=" + SF + ".prototype;proto.dtype='" + FF + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + SF + "_copy() {return new " + SF + "(this.data,this.offset)};proto.pick=function " + SF + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + SF + "_get(){return " + (AF ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + SF + "_set(v){return " + (AF ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + SF + "(a,b,c,d){return new " + SF + "(a,d)}";
        return new Function("TrivialArray", uF)(PF[FF][0])
      }
      uF = ["'use strict'"];
      var hF = CF(WF),
        dF = hF.map((function(FF) {
          return "i" + FF
        })),
        RF = "this.offset+" + hF.map((function(FF) {
          return "this.stride[" + FF + "]*i" + FF
        })).join("+"),
        iW = hF.map((function(FF) {
          return "b" + FF
        })).join(","),
        eF = hF.map((function(FF) {
          return "c" + FF
        })).join(",");
      uF.push("function " + SF + "(a," + iW + "," + eF + ",d){this.data=a", "this.shape=[" + iW + "]", "this.stride=[" + eF + "]", "this.offset=d|0}", "var proto=" + SF + ".prototype", "proto.dtype='" + FF + "'", "proto.dimension=" + WF), uF.push("Object.defineProperty(proto,'size',{get:function " + SF + "_size(){return " + hF.map((function(FF) {
        return "this.shape[" + FF + "]"
      })).join("*"), "}})"), 1 === WF ? uF.push("proto.order=[0]") : (uF.push("Object.defineProperty(proto,'order',{get:"), WF < 4 ? (uF.push("function " + SF + "_order(){"), 2 === WF ? uF.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === WF && uF.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : uF.push("ORDER})")), uF.push("proto.set=function " + SF + "_set(" + dF.join(",") + ",v){"), AF ? uF.push("return this.data.set(" + RF + ",v)}") : uF.push("return this.data[" + RF + "]=v}"), uF.push("proto.get=function " + SF + "_get(" + dF.join(",") + "){"), AF ? uF.push("return this.data.get(" + RF + ")}") : uF.push("return this.data[" + RF + "]}"), uF.push("proto.index=function " + SF + "_index(", dF.join(), "){return " + RF + "}"), uF.push("proto.hi=function " + SF + "_hi(" + dF.join(",") + "){return new " + SF + "(this.data," + hF.map((function(FF) {
        return ["(typeof i", FF, "!=='number'||i", FF, "<0)?this.shape[", FF, "]:i", FF, "|0"].join("")
      })).join(",") + "," + hF.map((function(FF) {
        return "this.stride[" + FF + "]"
      })).join(",") + ",this.offset)}");
      var EF = hF.map((function(FF) {
          return "a" + FF + "=this.shape[" + FF + "]"
        })),
        QF = hF.map((function(FF) {
          return "c" + FF + "=this.stride[" + FF + "]"
        }));
      uF.push("proto.lo=function " + SF + "_lo(" + dF.join(",") + "){var b=this.offset,d=0," + EF.join(",") + "," + QF.join(","));
      for (var rW = 0; rW < WF; ++rW) uF.push("if(typeof i" + rW + "==='number'&&i" + rW + ">=0){d=i" + rW + "|0;b+=c" + rW + "*d;a" + rW + "-=d}");
      uF.push("return new " + SF + "(this.data," + hF.map((function(FF) {
        return "a" + FF
      })).join(",") + "," + hF.map((function(FF) {
        return "c" + FF
      })).join(",") + ",b)}"), uF.push("proto.step=function " + SF + "_step(" + dF.join(",") + "){var " + hF.map((function(FF) {
        return "a" + FF + "=this.shape[" + FF + "]"
      })).join(",") + "," + hF.map((function(FF) {
        return "b" + FF + "=this.stride[" + FF + "]"
      })).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
      for (rW = 0; rW < WF; ++rW) uF.push("if(typeof i" + rW + "==='number'){d=i" + rW + "|0;if(d<0){c+=b" + rW + "*(a" + rW + "-1);a" + rW + "=ceil(-a" + rW + "/d)}else{a" + rW + "=ceil(a" + rW + "/d)}b" + rW + "*=d}");
      uF.push("return new " + SF + "(this.data," + hF.map((function(FF) {
        return "a" + FF
      })).join(",") + "," + hF.map((function(FF) {
        return "b" + FF
      })).join(",") + ",c)}");
      var gW = new Array(WF),
        tW = new Array(WF);
      for (rW = 0; rW < WF; ++rW) gW[rW] = "a[i" + rW + "]", tW[rW] = "b[i" + rW + "]";
      uF.push("proto.transpose=function " + SF + "_transpose(" + dF + "){" + dF.map((function(FF, WF) {
        return FF + "=(" + FF + "===undefined?" + WF + ":" + FF + "|0)"
      })).join(";"), "var a=this.shape,b=this.stride;return new " + SF + "(this.data," + gW.join(",") + "," + tW.join(",") + ",this.offset)}"), uF.push("proto.pick=function " + SF + "_pick(" + dF + "){var a=[],b=[],c=this.offset");
      for (rW = 0; rW < WF; ++rW) uF.push("if(typeof i" + rW + "==='number'&&i" + rW + ">=0){c=(c+this.stride[" + rW + "]*i" + rW + ")|0}else{a.push(this.shape[" + rW + "]);b.push(this.stride[" + rW + "])}");
      return uF.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), uF.push("return function construct_" + SF + "(data,shape,stride,offset){return new " + SF + "(data," + hF.map((function(FF) {
        return "shape[" + FF + "]"
      })).join(",") + "," + hF.map((function(FF) {
        return "stride[" + FF + "]"
      })).join(",") + ",offset)}"), new Function("CTOR_LIST", "ORDER", uF.join("\n"))(PF[FF], bW)
    }
    var PF = {
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
    FF.exports = function(FF, WF, SF, CF) {
      if (void 0 === FF) return (0, PF.array[0])([]);
      "number" === typeof FF && (FF = [FF]), void 0 === WF && (WF = [FF.length]);
      var hF = WF.length;
      if (void 0 === SF) {
        SF = new Array(hF);
        for (var bW = hF - 1, RF = 1; bW >= 0; --bW) SF[bW] = RF, RF *= WF[bW]
      }
      if (void 0 === CF) {
        CF = 0;
        for (bW = 0; bW < hF; ++bW) SF[bW] < 0 && (CF -= (WF[bW] - 1) * SF[bW])
      }
      for (var iW = function(FF) {
          if (AF(FF)) return "buffer";
          if (uF) switch (Object.prototype.toString.call(FF)) {
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
          return Array.isArray(FF) ? "array" : "generic"
        }(FF), eF = PF[iW]; eF.length <= hF + 1;) eF.push(dF(iW, eF.length - 1));
      return (0, eF[hF + 1])(FF, WF, SF, CF)
    }
  },
  36890: FF => {
    function WF(FF, WF, SF) {
      for (var CF = FF.length, AF = -1 / 0, uF = 1 / 0, hF = 0; hF < CF; hF++) {
        var bW = (SF[0][hF] - FF[hF]) / WF[hF],
          dF = (SF[1][hF] - FF[hF]) / WF[hF];
        if (bW > dF) {
          var PF = bW;
          bW = dF, dF = PF
        }
        if (dF < AF || bW > uF) return 1 / 0;
        bW > AF && (AF = bW), dF < uF && (uF = dF)
      }
      return AF > uF ? 1 / 0 : AF
    }
    FF.exports = function(FF, SF, CF, AF) {
      var uF = WF(SF, CF, AF);
      if (uF === 1 / 0) FF = null;
      else {
        FF = FF || [];
        for (var hF = 0; hF < SF.length; hF++) FF[hF] = SF[hF] + CF[hF] * uF
      }
      return FF
    }, FF.exports.distance = WF
  },
  36132: (FF, WF, SF) => {
    var CF = SF(36141);

    function AF(FF) {
      for (var WF, SF, AF = 0, uF = FF.length, hF = 0; hF < FF.length;) {
        for (WF = FF[hF], SF = 0; hF < uF && FF[hF] === WF;) ++hF, ++SF;
        AF += CF.log2(SF) / 7 | 0, AF += CF.log2(WF >>> 0) / 7 | 0, AF += 2
      }
      return AF
    }
    WF.size = AF, WF.encode = function(FF, WF) {
      WF || (WF = new Uint8Array(AF(FF)));
      for (var SF, CF, uF = 0, hF = WF.length, bW = 0; bW < FF.length;) {
        for (SF = FF[bW], CF = 0; bW < FF.length && FF[bW] === SF;) ++bW, ++CF;
        for (; uF < hF && CF >= 128;) WF[uF++] = 128 + (127 & CF), CF >>>= 7;
        if (uF >= hF) throw new Error("RLE buffer overflow");
        for (WF[uF++] = CF, SF >>>= 0; uF < hF && SF >= 128;) WF[uF++] = 128 + (127 & SF), SF >>>= 7;
        if (uF >= hF) throw new Error("RLE buffer overflow");
        WF[uF++] = SF
      }
      return WF
    }, WF.decode = function(FF, WF) {
      for (var SF, CF, AF, uF, hF = WF.length, bW = FF.length, dF = 0, PF = 0; PF < bW;) {
        for (SF = 0, CF = 0; PF < bW && FF[PF] >= 128;) SF += (127 & FF[PF++]) << CF, CF += 7;
        if (SF += FF[PF++] << CF, PF >= bW) throw new Error("RLE buffer underrun");
        if (dF + SF > hF) throw new Error("Chunk buffer overflow");
        for (AF = 0, CF = 0; PF < bW && FF[PF] >= 128;) AF += (127 & FF[PF++]) << CF, CF += 7;
        if (PF >= bW) throw new Error("RLE buffer underrun");
        for (AF += FF[PF++] << CF, uF = 0; uF < SF; ++uF) WF[dF++] = AF
      }
      return WF
    }
  },
  36141: (FF, WF) => {
    function SF(FF) {
      var WF = 32;
      return (FF &= -FF) && WF--, 65535 & FF && (WF -= 16), 16711935 & FF && (WF -= 8), 252645135 & FF && (WF -= 4), 858993459 & FF && (WF -= 2), 1431655765 & FF && (WF -= 1), WF
    }
    WF.INT_BITS = 32, WF.INT_MAX = 2147483647, WF.INT_MIN = -1 << 31, WF.sign = function(FF) {
      return (FF > 0) - (FF < 0)
    }, WF.abs = function(FF) {
      var WF = FF >> 31;
      return (FF ^ WF) - WF
    }, WF.min = function(FF, WF) {
      return WF ^ (FF ^ WF) & -(FF < WF)
    }, WF.max = function(FF, WF) {
      return FF ^ (FF ^ WF) & -(FF < WF)
    }, WF.isPow2 = function(FF) {
      return !(FF & FF - 1) && !!FF
    }, WF.log2 = function(FF) {
      var WF, SF;
      return WF = (FF > 65535) << 4, WF |= SF = ((FF >>>= WF) > 255) << 3, WF |= SF = ((FF >>>= SF) > 15) << 2, (WF |= SF = ((FF >>>= SF) > 3) << 1) | (FF >>>= SF) >> 1
    }, WF.log10 = function(FF) {
      return FF >= 1e9 ? 9 : FF >= 1e8 ? 8 : FF >= 1e7 ? 7 : FF >= 1e6 ? 6 : FF >= 1e5 ? 5 : FF >= 1e4 ? 4 : FF >= 1e3 ? 3 : FF >= 100 ? 2 : FF >= 10 ? 1 : 0
    }, WF.popCount = function(FF) {
      return 16843009 * ((FF = (858993459 & (FF -= FF >>> 1 & 1431655765)) + (FF >>> 2 & 858993459)) + (FF >>> 4) & 252645135) >>> 24
    }, WF.countTrailingZeros = SF, WF.nextPow2 = function(FF) {
      return FF += 0 === FF, --FF, FF |= FF >>> 1, FF |= FF >>> 2, FF |= FF >>> 4, FF |= FF >>> 8, (FF |= FF >>> 16) + 1
    }, WF.prevPow2 = function(FF) {
      return FF |= FF >>> 1, FF |= FF >>> 2, FF |= FF >>> 4, FF |= FF >>> 8, (FF |= FF >>> 16) - (FF >>> 1)
    }, WF.parity = function(FF) {
      return FF ^= FF >>> 16, FF ^= FF >>> 8, FF ^= FF >>> 4, 27030 >>> (FF &= 15) & 1
    };
    var CF = new Array(256);
    ! function(FF) {
      for (var WF = 0; WF < 256; ++WF) {
        var SF = WF,
          CF = WF,
          AF = 7;
        for (SF >>>= 1; SF; SF >>>= 1) CF <<= 1, CF |= 1 & SF, --AF;
        FF[WF] = CF << AF & 255
      }
    }(CF), WF.reverse = function(FF) {
      return CF[255 & FF] << 24 | CF[FF >>> 8 & 255] << 16 | CF[FF >>> 16 & 255] << 8 | CF[FF >>> 24 & 255]
    }, WF.interleave2 = function(FF, WF) {
      return (FF = 1431655765 & ((FF = 858993459 & ((FF = 252645135 & ((FF = 16711935 & ((FF &= 65535) | FF << 8)) | FF << 4)) | FF << 2)) | FF << 1)) | (WF = 1431655765 & ((WF = 858993459 & ((WF = 252645135 & ((WF = 16711935 & ((WF &= 65535) | WF << 8)) | WF << 4)) | WF << 2)) | WF << 1)) << 1
    }, WF.deinterleave2 = function(FF, WF) {
      return (FF = 65535 & ((FF = 16711935 & ((FF = 252645135 & ((FF = 858993459 & ((FF = FF >>> WF & 1431655765) | FF >>> 1)) | FF >>> 2)) | FF >>> 4)) | FF >>> 16)) << 16 >> 16
    }, WF.interleave3 = function(FF, WF, SF) {
      return FF = 1227133513 & ((FF = 3272356035 & ((FF = 251719695 & ((FF = 4278190335 & ((FF &= 1023) | FF << 16)) | FF << 8)) | FF << 4)) | FF << 2), (FF |= (WF = 1227133513 & ((WF = 3272356035 & ((WF = 251719695 & ((WF = 4278190335 & ((WF &= 1023) | WF << 16)) | WF << 8)) | WF << 4)) | WF << 2)) << 1) | (SF = 1227133513 & ((SF = 3272356035 & ((SF = 251719695 & ((SF = 4278190335 & ((SF &= 1023) | SF << 16)) | SF << 8)) | SF << 4)) | SF << 2)) << 2
    }, WF.deinterleave3 = function(FF, WF) {
      return (FF = 1023 & ((FF = 4278190335 & ((FF = 251719695 & ((FF = 3272356035 & ((FF = FF >>> WF & 1227133513) | FF >>> 2)) | FF >>> 4)) | FF >>> 8)) | FF >>> 16)) << 22 >> 22
    }, WF.nextCombination = function(FF) {
      var WF = FF | FF - 1;
      return WF + 1 | (~WF & -~WF) - 1 >>> SF(FF) + 1
    }
  },
  35671: (FF, WF, SF) => {
    SF.d(WF, {
      Color3: () => CF.e,
      d: () => CF.i
    });
    var CF = SF(35678);
    (0, CF.k)()
  },
  36173: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => AF
    });
    var CF = SF(36181);
    class AF {
      static GetPlanes(FF) {
        const WF = [];
        for (let SF = 0; SF < 6; SF++) WF.push(new CF.d(0, 0, 0, 0));
        return AF.GetPlanesToRef(FF, WF), WF
      }
      static GetNearPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] + SF[2], WF.normal.y = SF[7] + SF[6], WF.normal.z = SF[11] + SF[10], WF.d = SF[15] + SF[14], WF.normalize()
      }
      static GetFarPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] - SF[2], WF.normal.y = SF[7] - SF[6], WF.normal.z = SF[11] - SF[10], WF.d = SF[15] - SF[14], WF.normalize()
      }
      static GetLeftPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] + SF[0], WF.normal.y = SF[7] + SF[4], WF.normal.z = SF[11] + SF[8], WF.d = SF[15] + SF[12], WF.normalize()
      }
      static GetRightPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] - SF[0], WF.normal.y = SF[7] - SF[4], WF.normal.z = SF[11] - SF[8], WF.d = SF[15] - SF[12], WF.normalize()
      }
      static GetTopPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] - SF[1], WF.normal.y = SF[7] - SF[5], WF.normal.z = SF[11] - SF[9], WF.d = SF[15] - SF[13], WF.normalize()
      }
      static GetBottomPlaneToRef(FF, WF) {
        const SF = FF.m;
        WF.normal.x = SF[3] + SF[1], WF.normal.y = SF[7] + SF[5], WF.normal.z = SF[11] + SF[9], WF.d = SF[15] + SF[13], WF.normalize()
      }
      static GetPlanesToRef(FF, WF) {
        AF.GetNearPlaneToRef(FF, WF[0]), AF.GetFarPlaneToRef(FF, WF[1]), AF.GetLeftPlaneToRef(FF, WF[2]), AF.GetRightPlaneToRef(FF, WF[3]), AF.GetTopPlaneToRef(FF, WF[4]), AF.GetBottomPlaneToRef(FF, WF[5])
      }
      static IsPointInFrustum(FF, WF) {
        for (let SF = 0; SF < 6; SF++)
          if (WF[SF].dotCoordinate(FF) < 0) return !1;
        return !0
      }
    }
  },
  36181: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => AF
    });
    var CF = SF(35623);
    class AF {
      constructor(FF, WF, SF, AF) {
        this.normal = new CF.r(FF, WF, SF), this.d = AF
      }
      kRF() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new AF(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let FF = this.normal.getHashCode();
        return FF = 397 * FF ^ this.d, FF
      }
      normalize() {
        const FF = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let WF = 0;
        return 0 !== FF && (WF = 1 / FF), this.normal.x *= WF, this.normal.y *= WF, this.normal.z *= WF, this.d *= WF, this
      }
      transform(FF) {
        const WF = AF._TmpMatrix;
        FF.invertToRef(WF);
        const SF = WF.m,
          CF = this.normal.x,
          uF = this.normal.y,
          hF = this.normal.z,
          bW = this.d,
          dF = CF * SF[0] + uF * SF[1] + hF * SF[2] + bW * SF[3],
          PF = CF * SF[4] + uF * SF[5] + hF * SF[6] + bW * SF[7],
          RF = CF * SF[8] + uF * SF[9] + hF * SF[10] + bW * SF[11],
          iW = CF * SF[12] + uF * SF[13] + hF * SF[14] + bW * SF[15];
        return new AF(dF, PF, RF, iW)
      }
      dotCoordinate(FF) {
        return this.normal.x * FF.x + this.normal.y * FF.y + this.normal.z * FF.z + this.d
      }
      copyFromPoints(FF, WF, SF) {
        const CF = WF.x - FF.x,
          AF = WF.y - FF.y,
          uF = WF.z - FF.z,
          hF = SF.x - FF.x,
          bW = SF.y - FF.y,
          dF = SF.z - FF.z,
          PF = AF * dF - uF * bW,
          RF = uF * hF - CF * dF,
          iW = CF * bW - AF * hF,
          eF = Math.sqrt(PF * PF + RF * RF + iW * iW);
        let EF;
        return EF = 0 !== eF ? 1 / eF : 0, this.normal.x = PF * EF, this.normal.y = RF * EF, this.normal.z = iW * EF, this.d = -(this.normal.x * FF.x + this.normal.y * FF.y + this.normal.z * FF.z), this
      }
      isFrontFacingTo(FF, WF) {
        return CF.r.Dot(this.normal, FF) <= WF
      }
      signedDistanceTo(FF) {
        return CF.r.Dot(FF, this.normal) + this.d
      }
      static FromArray(FF) {
        return new AF(FF[0], FF[1], FF[2], FF[3])
      }
      static FromPoints(FF, WF, SF) {
        const CF = new AF(0, 0, 0, 0);
        return CF.copyFromPoints(FF, WF, SF), CF
      }
      static FromPositionAndNormal(FF, WF) {
        const SF = new AF(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(FF, WF, SF)
      }
      static FromPositionAndNormalToRef(FF, WF, SF) {
        return SF.normal.fdF(WF), SF.normal.normalize(), SF.d = -FF.dot(SF.normal), SF
      }
      static SignedDistanceToPlaneFromPositionAndNormal(FF, WF, SF) {
        const AF = -(WF.x * FF.x + WF.y * FF.y + WF.z * FF.z);
        return CF.r.Dot(SF, WF) + AF
      }
    }
    AF._TmpMatrix = CF.b.Identity()
  },
  35617: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      Matrix: () => CF.b,
      Quaternion: () => CF.e,
      RegisterMathVector: () => CF.g,
      TmpVectors: () => CF.j,
      Vector2: () => CF.n,
      HC: () => CF.r,
      Vector4: () => CF.v
    });
    var CF = SF(35623);
    (0, CF.g)()
  },
  36545: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => CF
    });
    class CF {
      constructor(FF, WF, SF, CF) {
        this.x = FF, this.y = WF, this.width = SF, this.height = CF
      }
      toGlobal(FF, WF) {
        return new CF(this.x * FF, this.y * WF, this.width * FF, this.height * WF)
      }
      toGlobalToRef(FF, WF, SF) {
        return SF.x = this.x * FF, SF.y = this.y * WF, SF.width = this.width * FF, SF.height = this.height * WF, this
      }
      clone() {
        return new CF(this.x, this.y, this.width, this.height)
      }
    }
  },
  36308: (FF, WF, SF) => {
    function CF() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (FF => {
        const WF = 16 * Math.random() | 0;
        return ("x" === FF ? WF : 3 & WF | 8).toString(16)
      }))
    }
    SF.d(WF, {
      b: () => CF
    })
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);