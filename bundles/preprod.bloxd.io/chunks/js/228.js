/*! For license information please see w4ddu.228.1e166b87.chunk.js.LICENSE.txt */
export const id = 228;
export const ids = [228, 235];
export const modules = {
  38116: CC => {
    CC.exports = function(CC) {
      return null != CC && null != CC.constructor && "function" === typeof CC.constructor.isBuffer && CC.constructor.isBuffer(CC)
    }
  },
  38096: (CC, zC, ZC) => {
    var QC = ZC(38105),
      wC = ZC(38109),
      bC = ZC(38116);
    ZC.g.__TYPEDARRAY_POOL || (ZC.g.__TYPEDARRAY_POOL = {
      UINT8: wC([32, 0]),
      UINT16: wC([32, 0]),
      UINT32: wC([32, 0]),
      INT8: wC([32, 0]),
      INT16: wC([32, 0]),
      INT32: wC([32, 0]),
      FLOAT: wC([32, 0]),
      DOUBLE: wC([32, 0]),
      DATA: wC([32, 0]),
      UINT8C: wC([32, 0]),
      BUFFER: wC([32, 0])
    });
    var nC = "undefined" !== typeof Uint8ClampedArray,
      fC = ZC.g.__TYPEDARRAY_POOL;
    fC.UINT8C || (fC.UINT8C = wC([32, 0])), fC.BUFFER || (fC.BUFFER = wC([32, 0]));
    var oC = fC.DATA,
      qC = fC.BUFFER;

    function FC(CC) {
      if (CC) {
        var zC = CC.length || CC.byteLength,
          ZC = QC.log2(zC);
        oC[ZC].push(CC)
      }
    }

    function WC(CC) {
      CC = QC.nextPow2(CC);
      var zC = QC.log2(CC),
        ZC = oC[zC];
      return ZC.length > 0 ? ZC.pop() : new ArrayBuffer(CC)
    }

    function NC(CC) {
      return new Uint8Array(WC(CC), 0, CC)
    }

    function MC(CC) {
      return new Uint16Array(WC(2 * CC), 0, CC)
    }

    function gC(CC) {
      return new Uint32Array(WC(4 * CC), 0, CC)
    }

    function SC(CC) {
      return new Int8Array(WC(CC), 0, CC)
    }

    function pC(CC) {
      return new Int16Array(WC(2 * CC), 0, CC)
    }

    function PC(CC) {
      return new Int32Array(WC(4 * CC), 0, CC)
    }

    function GC(CC) {
      return new Float32Array(WC(4 * CC), 0, CC)
    }

    function RC(CC) {
      return new Float64Array(WC(8 * CC), 0, CC)
    }

    function AC(CC) {
      return nC ? new Uint8ClampedArray(WC(CC), 0, CC) : NC(CC)
    }

    function xC(CC) {
      return new DataView(WC(CC), 0, CC)
    }
    zC.free = function(CC) {
      if (bC(CC)) qC[QC.log2(CC.length)].push(CC);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(CC) && (CC = CC.buffer), !CC) return;
        var zC = CC.length || CC.byteLength,
          ZC = 0 | QC.log2(zC);
        oC[ZC].push(CC)
      }
    }, zC.freeUint8 = zC.freeUint16 = zC.freeUint32 = zC.freeInt8 = zC.freeInt16 = zC.freeInt32 = zC.freeFloat32 = zC.freeFloat = zC.freeFloat64 = zC.freeDouble = zC.freeUint8Clamped = zC.freeDataView = function(CC) {
      FC(CC.buffer)
    }, zC.freeArrayBuffer = FC, zC.freeBuffer = function(CC) {
      qC[QC.log2(CC.length)].push(CC)
    }, zC.malloc = function(CC, zC) {
      if (void 0 === zC || "arraybuffer" === zC) return WC(CC);
      switch (zC) {
        case "uint8":
          return NC(CC);
        case "uint16":
          return MC(CC);
        case "uint32":
          return gC(CC);
        case "int8":
          return SC(CC);
        case "int16":
          return pC(CC);
        case "int32":
          return PC(CC);
        case "float":
        case "float32":
          return GC(CC);
        case "double":
        case "float64":
          return RC(CC);
        case "uint8_clamped":
          return AC(CC);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return xC(CC);
        default:
          return null
      }
      return null
    }, zC.mallocArrayBuffer = WC, zC.mallocUint8 = NC, zC.mallocUint16 = MC, zC.mallocUint32 = gC, zC.mallocInt8 = SC, zC.mallocInt16 = pC, zC.mallocInt32 = PC, zC.mallocFloat32 = zC.mallocFloat = GC, zC.mallocFloat64 = zC.mallocDouble = RC, zC.mallocUint8Clamped = AC, zC.mallocDataView = xC, zC.clearCache = function() {
      for (var CC = 0; CC < 32; ++CC) fC.UINT8[CC].length = 0, fC.UINT16[CC].length = 0, fC.UINT32[CC].length = 0, fC.INT8[CC].length = 0, fC.INT16[CC].length = 0, fC.INT32[CC].length = 0, fC.FLOAT[CC].length = 0, fC.DOUBLE[CC].length = 0, fC.UINT8C[CC].length = 0, oC[CC].length = 0, qC[CC].length = 0
    }
  },
  38105: (CC, zC) => {
    function ZC(CC) {
      var zC = 32;
      return (CC &= -CC) && zC--, 65535 & CC && (zC -= 16), 16711935 & CC && (zC -= 8), 252645135 & CC && (zC -= 4), 858993459 & CC && (zC -= 2), 1431655765 & CC && (zC -= 1), zC
    }
    zC.INT_BITS = 32, zC.INT_MAX = 2147483647, zC.INT_MIN = -1 << 31, zC.sign = function(CC) {
      return (CC > 0) - (CC < 0)
    }, zC.abs = function(CC) {
      var zC = CC >> 31;
      return (CC ^ zC) - zC
    }, zC.min = function(CC, zC) {
      return zC ^ (CC ^ zC) & -(CC < zC)
    }, zC.max = function(CC, zC) {
      return CC ^ (CC ^ zC) & -(CC < zC)
    }, zC.isPow2 = function(CC) {
      return !(CC & CC - 1) && !!CC
    }, zC.log2 = function(CC) {
      var zC, ZC;
      return zC = (CC > 65535) << 4, zC |= ZC = ((CC >>>= zC) > 255) << 3, zC |= ZC = ((CC >>>= ZC) > 15) << 2, (zC |= ZC = ((CC >>>= ZC) > 3) << 1) | (CC >>>= ZC) >> 1
    }, zC.log10 = function(CC) {
      return CC >= 1e9 ? 9 : CC >= 1e8 ? 8 : CC >= 1e7 ? 7 : CC >= 1e6 ? 6 : CC >= 1e5 ? 5 : CC >= 1e4 ? 4 : CC >= 1e3 ? 3 : CC >= 100 ? 2 : CC >= 10 ? 1 : 0
    }, zC.popCount = function(CC) {
      return 16843009 * ((CC = (858993459 & (CC -= CC >>> 1 & 1431655765)) + (CC >>> 2 & 858993459)) + (CC >>> 4) & 252645135) >>> 24
    }, zC.countTrailingZeros = ZC, zC.nextPow2 = function(CC) {
      return CC += 0 === CC, --CC, CC |= CC >>> 1, CC |= CC >>> 2, CC |= CC >>> 4, CC |= CC >>> 8, (CC |= CC >>> 16) + 1
    }, zC.prevPow2 = function(CC) {
      return CC |= CC >>> 1, CC |= CC >>> 2, CC |= CC >>> 4, CC |= CC >>> 8, (CC |= CC >>> 16) - (CC >>> 1)
    }, zC.parity = function(CC) {
      return CC ^= CC >>> 16, CC ^= CC >>> 8, CC ^= CC >>> 4, 27030 >>> (CC &= 15) & 1
    };
    var QC = new Array(256);
    ! function(CC) {
      for (var zC = 0; zC < 256; ++zC) {
        var ZC = zC,
          QC = zC,
          wC = 7;
        for (ZC >>>= 1; ZC; ZC >>>= 1) QC <<= 1, QC |= 1 & ZC, --wC;
        CC[zC] = QC << wC & 255
      }
    }(QC), zC.reverse = function(CC) {
      return QC[255 & CC] << 24 | QC[CC >>> 8 & 255] << 16 | QC[CC >>> 16 & 255] << 8 | QC[CC >>> 24 & 255]
    }, zC.interleave2 = function(CC, zC) {
      return (CC = 1431655765 & ((CC = 858993459 & ((CC = 252645135 & ((CC = 16711935 & ((CC &= 65535) | CC << 8)) | CC << 4)) | CC << 2)) | CC << 1)) | (zC = 1431655765 & ((zC = 858993459 & ((zC = 252645135 & ((zC = 16711935 & ((zC &= 65535) | zC << 8)) | zC << 4)) | zC << 2)) | zC << 1)) << 1
    }, zC.deinterleave2 = function(CC, zC) {
      return (CC = 65535 & ((CC = 16711935 & ((CC = 252645135 & ((CC = 858993459 & ((CC = CC >>> zC & 1431655765) | CC >>> 1)) | CC >>> 2)) | CC >>> 4)) | CC >>> 16)) << 16 >> 16
    }, zC.interleave3 = function(CC, zC, ZC) {
      return CC = 1227133513 & ((CC = 3272356035 & ((CC = 251719695 & ((CC = 4278190335 & ((CC &= 1023) | CC << 16)) | CC << 8)) | CC << 4)) | CC << 2), (CC |= (zC = 1227133513 & ((zC = 3272356035 & ((zC = 251719695 & ((zC = 4278190335 & ((zC &= 1023) | zC << 16)) | zC << 8)) | zC << 4)) | zC << 2)) << 1) | (ZC = 1227133513 & ((ZC = 3272356035 & ((ZC = 251719695 & ((ZC = 4278190335 & ((ZC &= 1023) | ZC << 16)) | ZC << 8)) | ZC << 4)) | ZC << 2)) << 2
    }, zC.deinterleave3 = function(CC, zC) {
      return (CC = 1023 & ((CC = 4278190335 & ((CC = 251719695 & ((CC = 3272356035 & ((CC = CC >>> zC & 1227133513) | CC >>> 2)) | CC >>> 4)) | CC >>> 8)) | CC >>> 16)) << 22 >> 22
    }, zC.nextCombination = function(CC) {
      var zC = CC | CC - 1;
      return zC + 1 | (~zC & -~zC) - 1 >>> ZC(CC) + 1
    }
  },
  38091: (CC, zC, ZC) => {
    CC.exports = function(CC, zC, ZC) {
      switch (arguments.length) {
        case 1:
          return QC = [], qC(wC = CC, wC, FC, !0), QC;
        case 2:
          return "function" === typeof zC ? qC(CC, CC, zC, !0) : function(CC, zC) {
            return QC = [], qC(CC, zC, FC, !1), QC
          }(CC, zC);
        case 3:
          return qC(CC, zC, ZC, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var wC
    };
    var QC, wC = ZC(38096),
      bC = ZC(38121),
      nC = ZC(38134);

    function fC(CC, zC) {
      for (var ZC = 0; ZC < CC; ++ZC)
        if (!(zC[ZC] <= zC[ZC + CC])) return !0;
      return !1
    }

    function oC(CC, zC, ZC, QC) {
      for (var wC = 0, bC = 0, nC = 0, oC = CC.length; nC < oC; ++nC) {
        var qC = CC[nC];
        if (!fC(zC, qC)) {
          for (var FC = 0; FC < 2 * zC; ++FC) ZC[wC++] = qC[FC];
          QC[bC++] = nC
        }
      }
      return bC
    }

    function qC(CC, zC, ZC, QC) {
      var fC = CC.length,
        qC = zC.length;
      if (!(fC <= 0 || qC <= 0)) {
        var FC = CC[0].length >>> 1;
        if (!(FC <= 0)) {
          var WC, NC = wC.mallocDouble(2 * FC * fC),
            MC = wC.mallocInt32(fC);
          if ((fC = oC(CC, FC, NC, MC)) > 0) {
            if (1 === FC && QC) bC.init(fC), WC = bC.sweepComplete(FC, ZC, 0, fC, NC, MC, 0, fC, NC, MC);
            else {
              var gC = wC.mallocDouble(2 * FC * qC),
                SC = wC.mallocInt32(qC);
              (qC = oC(zC, FC, gC, SC)) > 0 && (bC.init(fC + qC), WC = 1 === FC ? bC.sweepBipartite(FC, ZC, 0, fC, NC, MC, 0, qC, gC, SC) : nC(FC, ZC, QC, fC, NC, MC, qC, gC, SC), wC.free(gC), wC.free(SC))
            }
            wC.free(NC), wC.free(MC)
          }
          return WC
        }
      }
    }

    function FC(CC, zC) {
      QC.push([CC, zC])
    }
  },
  38142: (CC, zC) => {
    var ZC = "d",
      QC = "ax",
      wC = "fp",
      bC = "es",
      nC = "rs",
      fC = "re",
      oC = "rb",
      qC = "bs",
      FC = "be",
      WC = "bb",
      NC = [ZC, QC, "vv", nC, fC, oC, "ri", qC, FC, WC, "bi"];

    function MC(CC) {
      var zC = "bruteForce" + (CC ? "Full" : "Partial"),
        QC = [],
        nC = NC.slice();
      CC || nC.splice(3, 0, wC);
      var fC = ["function " + zC + "(" + nC.join() + "){"];

      function oC(zC, wC) {
        var nC = function(CC, zC, QC) {
          var wC = "bruteForce" + (CC ? "Red" : "Blue") + (zC ? "Flip" : "") + (QC ? "Full" : ""),
            nC = ["function ", wC, "(", NC.join(), "){", "var ", bC, "=2*", ZC, ";"],
            fC = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            oC = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (QC ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return CC ? nC.push(fC, "Q", ":", oC) : nC.push(oC, "Q", ":", fC), QC ? nC.push("if(y1<x0||x1<y0)continue;") : zC ? nC.push("if(y0<=x0||x1<y0)continue;") : nC.push("if(y0<x0||x1<y0)continue;"), nC.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), zC ? nC.push("yi,xi") : nC.push("xi,yi"), nC.push(");if(rv!==void 0)return rv;}}}"), {
            name: wC,
            code: nC.join("")
          }
        }(zC, wC, CC);
        QC.push(nC.code), fC.push("return " + nC.name + "(" + NC.join() + ");")
      }
      fC.push("if(re-rs>be-bs){"), CC ? (oC(!0, !1), fC.push("}else{"), oC(!1, !1)) : (fC.push("if(fp){"), oC(!0, !0), fC.push("}else{"), oC(!0, !1), fC.push("}}else{if(fp){"), oC(!1, !0), fC.push("}else{"), oC(!1, !1), fC.push("}")), fC.push("}}return " + zC);
      var qC = QC.join("") + fC.join("");
      return new Function(qC)()
    }
    zC.partial = MC(!1), zC.full = MC(!0)
  },
  38134: (CC, zC, ZC) => {
    CC.exports = function(CC, zC, ZC, bC, FC, hC, KC, YC, dC) {
      ! function(CC, zC) {
        var ZC = 8 * wC.log2(zC + 1) * (CC + 1) | 0,
          bC = wC.nextPow2(AC * ZC);
        JC.length < bC && (QC.free(JC), JC = QC.mallocInt32(bC));
        var nC = wC.nextPow2(xC * ZC);
        IC.length < nC && (QC.free(IC), IC = QC.mallocDouble(nC))
      }(CC, bC + KC);
      var mC, HC = 0,
        EC = 2 * CC;
      iC(HC++, 0, 0, bC, 0, KC, ZC ? 16 : 0, -1 / 0, 1 / 0), ZC || iC(HC++, 0, 0, KC, 0, bC, 1, -1 / 0, 1 / 0);
      for (; HC > 0;) {
        var lC = (HC -= 1) * AC,
          XC = JC[lC],
          cC = JC[lC + 1],
          uC = JC[lC + 2],
          rC = JC[lC + 3],
          sC = JC[lC + 4],
          TC = JC[lC + 5],
          aC = HC * xC,
          tC = IC[aC],
          DC = IC[aC + 1],
          jC = 1 & TC,
          yC = !!(16 & TC),
          LC = FC,
          UC = hC,
          BC = YC,
          OC = dC;
        if (jC && (LC = YC, UC = dC, BC = FC, OC = hC), !(2 & TC && cC >= (uC = pC(CC, XC, cC, uC, LC, UC, DC))) && !(4 & TC && (cC = PC(CC, XC, cC, uC, LC, UC, tC)) >= uC)) {
          var kC = uC - cC,
            VC = sC - rC;
          if (yC) {
            if (CC * kC * (kC + VC) < MC) {
              if (void 0 !== (mC = oC.scanComplete(CC, XC, zC, cC, uC, LC, UC, rC, sC, BC, OC))) return mC;
              continue
            }
          } else {
            if (CC * Math.min(kC, VC) < WC) {
              if (void 0 !== (mC = nC(CC, XC, zC, jC, cC, uC, LC, UC, rC, sC, BC, OC))) return mC;
              continue
            }
            if (CC * kC * VC < NC) {
              if (void 0 !== (mC = oC.scanBipartite(CC, XC, zC, jC, cC, uC, LC, UC, rC, sC, BC, OC))) return mC;
              continue
            }
          }
          var Cz = gC(CC, XC, cC, uC, LC, UC, tC, DC);
          if (cC < Cz)
            if (CC * (Cz - cC) < WC) {
              if (void 0 !== (mC = fC(CC, XC + 1, zC, cC, Cz, LC, UC, rC, sC, BC, OC))) return mC
            } else if (XC === CC - 2) {
            if (void 0 !== (mC = jC ? oC.sweepBipartite(CC, zC, rC, sC, BC, OC, cC, Cz, LC, UC) : oC.sweepBipartite(CC, zC, cC, Cz, LC, UC, rC, sC, BC, OC))) return mC
          } else iC(HC++, XC + 1, cC, Cz, rC, sC, jC, -1 / 0, 1 / 0), iC(HC++, XC + 1, rC, sC, cC, Cz, 1 ^ jC, -1 / 0, 1 / 0);
          if (Cz < uC) {
            var zz = qC(CC, XC, rC, sC, BC, OC),
              Zz = BC[EC * zz + XC],
              Qz = SC(CC, XC, zz, sC, BC, OC, Zz);
            if (Qz < sC && iC(HC++, XC, Cz, uC, Qz, sC, (4 | jC) + (yC ? 16 : 0), Zz, DC), rC < zz && iC(HC++, XC, Cz, uC, rC, zz, (2 | jC) + (yC ? 16 : 0), tC, Zz), zz + 1 === Qz) {
              if (void 0 !== (mC = yC ? eC(CC, XC, zC, Cz, uC, LC, UC, zz, BC, OC[zz]) : vC(CC, XC, zC, jC, Cz, uC, LC, UC, zz, BC, OC[zz]))) return mC
            } else if (zz < Qz) {
              var wz;
              if (yC) {
                if (Cz < (wz = GC(CC, XC, Cz, uC, LC, UC, Zz))) {
                  var bz = SC(CC, XC, Cz, wz, LC, UC, Zz);
                  if (XC === CC - 2) {
                    if (Cz < bz && void 0 !== (mC = oC.sweepComplete(CC, zC, Cz, bz, LC, UC, zz, Qz, BC, OC))) return mC;
                    if (bz < wz && void 0 !== (mC = oC.sweepBipartite(CC, zC, bz, wz, LC, UC, zz, Qz, BC, OC))) return mC
                  } else Cz < bz && iC(HC++, XC + 1, Cz, bz, zz, Qz, 16, -1 / 0, 1 / 0), bz < wz && (iC(HC++, XC + 1, bz, wz, zz, Qz, 0, -1 / 0, 1 / 0), iC(HC++, XC + 1, zz, Qz, bz, wz, 1, -1 / 0, 1 / 0))
                }
              } else Cz < (wz = jC ? RC(CC, XC, Cz, uC, LC, UC, Zz) : GC(CC, XC, Cz, uC, LC, UC, Zz)) && (XC === CC - 2 ? mC = jC ? oC.sweepBipartite(CC, zC, zz, Qz, BC, OC, Cz, wz, LC, UC) : oC.sweepBipartite(CC, zC, Cz, wz, LC, UC, zz, Qz, BC, OC) : (iC(HC++, XC + 1, Cz, wz, zz, Qz, jC, -1 / 0, 1 / 0), iC(HC++, XC + 1, zz, Qz, Cz, wz, 1 ^ jC, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var QC = ZC(38096),
      wC = ZC(38105),
      bC = ZC(38142),
      nC = bC.partial,
      fC = bC.full,
      oC = ZC(38121),
      qC = ZC(38150),
      FC = ZC(38153),
      WC = 128,
      NC = 1 << 22,
      MC = 1 << 22,
      gC = FC("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      SC = FC("lo===p0", ["p0"]),
      pC = FC("lo<p0", ["p0"]),
      PC = FC("hi<=p0", ["p0"]),
      GC = FC("lo<=p0&&p0<=hi", ["p0"]),
      RC = FC("lo<p0&&p0<=hi", ["p0"]),
      AC = 6,
      xC = 2,
      JC = QC.mallocInt32(1024),
      IC = QC.mallocDouble(1024);

    function iC(CC, zC, ZC, QC, wC, bC, nC, fC, oC) {
      var qC = AC * CC;
      JC[qC] = zC, JC[qC + 1] = ZC, JC[qC + 2] = QC, JC[qC + 3] = wC, JC[qC + 4] = bC, JC[qC + 5] = nC;
      var FC = xC * CC;
      IC[FC] = fC, IC[FC + 1] = oC
    }

    function vC(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC, FC) {
      var WC = 2 * CC,
        NC = oC * WC,
        MC = qC[NC + zC];
      CC: for (var gC = wC, SC = wC * WC; gC < bC; ++gC, SC += WC) {
        var pC = nC[SC + zC],
          PC = nC[SC + zC + CC];
        if (!(MC < pC || PC < MC) && (!QC || MC !== pC)) {
          for (var GC, RC = fC[gC], AC = zC + 1; AC < CC; ++AC) {
            pC = nC[SC + AC], PC = nC[SC + AC + CC];
            var xC = qC[NC + AC],
              JC = qC[NC + AC + CC];
            if (PC < xC || JC < pC) continue CC
          }
          if (void 0 !== (GC = QC ? ZC(FC, RC) : ZC(RC, FC))) return GC
        }
      }
    }

    function eC(CC, zC, ZC, QC, wC, bC, nC, fC, oC, qC) {
      var FC = 2 * CC,
        WC = fC * FC,
        NC = oC[WC + zC];
      CC: for (var MC = QC, gC = QC * FC; MC < wC; ++MC, gC += FC) {
        var SC = nC[MC];
        if (SC !== qC) {
          var pC = bC[gC + zC],
            PC = bC[gC + zC + CC];
          if (!(NC < pC || PC < NC)) {
            for (var GC = zC + 1; GC < CC; ++GC) {
              pC = bC[gC + GC], PC = bC[gC + GC + CC];
              var RC = oC[WC + GC],
                AC = oC[WC + GC + CC];
              if (PC < RC || AC < pC) continue CC
            }
            var xC = ZC(SC, qC);
            if (void 0 !== xC) return xC
          }
        }
      }
    }
  },
  38150: (CC, zC, ZC) => {
    CC.exports = function(CC, zC, ZC, nC, fC, oC) {
      if (nC <= ZC + 1) return ZC;
      var qC = ZC,
        FC = nC,
        WC = nC + ZC >>> 1,
        NC = 2 * CC,
        MC = WC,
        gC = fC[NC * WC + zC];
      for (; qC < FC;) {
        if (FC - qC < wC) {
          bC(CC, zC, qC, FC, fC, oC), gC = fC[NC * WC + zC];
          break
        }
        var SC = FC - qC,
          pC = Math.random() * SC + qC | 0,
          PC = fC[NC * pC + zC],
          GC = Math.random() * SC + qC | 0,
          RC = fC[NC * GC + zC],
          AC = Math.random() * SC + qC | 0,
          xC = fC[NC * AC + zC];
        PC <= RC ? xC >= RC ? (MC = GC, gC = RC) : PC >= xC ? (MC = pC, gC = PC) : (MC = AC, gC = xC) : RC >= xC ? (MC = GC, gC = RC) : xC >= PC ? (MC = pC, gC = PC) : (MC = AC, gC = xC);
        for (var JC = NC * (FC - 1), IC = NC * MC, iC = 0; iC < NC; ++iC, ++JC, ++IC) {
          var vC = fC[JC];
          fC[JC] = fC[IC], fC[IC] = vC
        }
        var eC = oC[FC - 1];
        oC[FC - 1] = oC[MC], oC[MC] = eC;
        for (JC = NC * (FC - 1), IC = NC * (MC = QC(CC, zC, qC, FC - 1, fC, oC, gC)), iC = 0; iC < NC; ++iC, ++JC, ++IC) {
          vC = fC[JC];
          fC[JC] = fC[IC], fC[IC] = vC
        }
        eC = oC[FC - 1];
        if (oC[FC - 1] = oC[MC], oC[MC] = eC, WC < MC) {
          for (FC = MC - 1; qC < FC && fC[NC * (FC - 1) + zC] === gC;) FC -= 1;
          FC += 1
        } else {
          if (!(MC < WC)) break;
          for (qC = MC + 1; qC < FC && fC[NC * qC + zC] === gC;) qC += 1
        }
      }
      return QC(CC, zC, ZC, WC, fC, oC, fC[NC * WC + zC])
    };
    var QC = ZC(38153)("lo<p0", ["p0"]),
      wC = 8;

    function bC(CC, zC, ZC, QC, wC, bC) {
      for (var nC = 2 * CC, fC = nC * (ZC + 1) + zC, oC = ZC + 1; oC < QC; ++oC, fC += nC)
        for (var qC = wC[fC], FC = oC, WC = nC * (oC - 1); FC > ZC && wC[WC + zC] > qC; --FC, WC -= nC) {
          for (var NC = WC, MC = WC + nC, gC = 0; gC < nC; ++gC, ++NC, ++MC) {
            var SC = wC[NC];
            wC[NC] = wC[MC], wC[MC] = SC
          }
          var pC = bC[FC];
          bC[FC] = bC[FC - 1], bC[FC - 1] = pC
        }
    }
  },
  38153: CC => {
    CC.exports = function(CC, ZC) {
      var QC = "abcdef".split("").concat(ZC),
        wC = [];
      CC.indexOf("lo") >= 0 && wC.push("lo=e[k+n]");
      CC.indexOf("hi") >= 0 && wC.push("hi=e[k+o]");
      return QC.push(zC.replace("_", wC.join()).replace("$", CC)), Function.apply(void 0, QC)
    };
    var zC = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  38128: CC => {
    CC.exports = function(CC, QC) {
      QC <= 4 * zC ? ZC(0, QC - 1, CC) : qC(0, QC - 1, CC)
    };
    var zC = 32;

    function ZC(CC, zC, ZC) {
      for (var QC = 2 * (CC + 1), wC = CC + 1; wC <= zC; ++wC) {
        for (var bC = ZC[QC++], nC = ZC[QC++], fC = wC, oC = QC - 2; fC-- > CC;) {
          var qC = ZC[oC - 2],
            FC = ZC[oC - 1];
          if (qC < bC) break;
          if (qC === bC && FC < nC) break;
          ZC[oC] = qC, ZC[oC + 1] = FC, oC -= 2
        }
        ZC[oC] = bC, ZC[oC + 1] = nC
      }
    }

    function QC(CC, zC, ZC) {
      zC *= 2;
      var QC = ZC[CC *= 2],
        wC = ZC[CC + 1];
      ZC[CC] = ZC[zC], ZC[CC + 1] = ZC[zC + 1], ZC[zC] = QC, ZC[zC + 1] = wC
    }

    function wC(CC, zC, ZC) {
      zC *= 2, ZC[CC *= 2] = ZC[zC], ZC[CC + 1] = ZC[zC + 1]
    }

    function bC(CC, zC, ZC, QC) {
      zC *= 2, ZC *= 2;
      var wC = QC[CC *= 2],
        bC = QC[CC + 1];
      QC[CC] = QC[zC], QC[CC + 1] = QC[zC + 1], QC[zC] = QC[ZC], QC[zC + 1] = QC[ZC + 1], QC[ZC] = wC, QC[ZC + 1] = bC
    }

    function nC(CC, zC, ZC, QC, wC) {
      zC *= 2, wC[CC *= 2] = wC[zC], wC[zC] = ZC, wC[CC + 1] = wC[zC + 1], wC[zC + 1] = QC
    }

    function fC(CC, zC, ZC) {
      zC *= 2;
      var QC = ZC[CC *= 2],
        wC = ZC[zC];
      return !(QC < wC) && (QC !== wC || ZC[CC + 1] > ZC[zC + 1])
    }

    function oC(CC, zC, ZC, QC) {
      var wC = QC[CC *= 2];
      return wC < zC || wC === zC && QC[CC + 1] < ZC
    }

    function qC(CC, FC, WC) {
      var NC = (FC - CC + 1) / 6 | 0,
        MC = CC + NC,
        gC = FC - NC,
        SC = CC + FC >> 1,
        pC = SC - NC,
        PC = SC + NC,
        GC = MC,
        RC = pC,
        AC = SC,
        xC = PC,
        JC = gC,
        IC = CC + 1,
        iC = FC - 1,
        vC = 0;
      fC(GC, RC, WC) && (vC = GC, GC = RC, RC = vC), fC(xC, JC, WC) && (vC = xC, xC = JC, JC = vC), fC(GC, AC, WC) && (vC = GC, GC = AC, AC = vC), fC(RC, AC, WC) && (vC = RC, RC = AC, AC = vC), fC(GC, xC, WC) && (vC = GC, GC = xC, xC = vC), fC(AC, xC, WC) && (vC = AC, AC = xC, xC = vC), fC(RC, JC, WC) && (vC = RC, RC = JC, JC = vC), fC(RC, AC, WC) && (vC = RC, RC = AC, AC = vC), fC(xC, JC, WC) && (vC = xC, xC = JC, JC = vC);
      for (var eC = WC[2 * RC], hC = WC[2 * RC + 1], KC = WC[2 * xC], YC = WC[2 * xC + 1], dC = 2 * GC, mC = 2 * AC, HC = 2 * JC, EC = 2 * MC, lC = 2 * SC, XC = 2 * gC, cC = 0; cC < 2; ++cC) {
        var uC = WC[dC + cC],
          rC = WC[mC + cC],
          sC = WC[HC + cC];
        WC[EC + cC] = uC, WC[lC + cC] = rC, WC[XC + cC] = sC
      }
      wC(pC, CC, WC), wC(PC, FC, WC);
      for (var TC = IC; TC <= iC; ++TC)
        if (oC(TC, eC, hC, WC)) TC !== IC && QC(TC, IC, WC), ++IC;
        else if (!oC(TC, KC, YC, WC))
        for (;;) {
          if (oC(iC, KC, YC, WC)) {
            oC(iC, eC, hC, WC) ? (bC(TC, IC, iC, WC), ++IC, --iC) : (QC(TC, iC, WC), --iC);
            break
          }
          if (--iC < TC) break
        }
      nC(CC, IC - 1, eC, hC, WC), nC(FC, iC + 1, KC, YC, WC), IC - 2 - CC <= zC ? ZC(CC, IC - 2, WC) : qC(CC, IC - 2, WC), FC - (iC + 2) <= zC ? ZC(iC + 2, FC, WC) : qC(iC + 2, FC, WC), iC - IC <= zC ? ZC(IC, iC, WC) : qC(IC, iC, WC)
    }
  },
  38121: (CC, zC, ZC) => {
    CC.exports = {
      init: function(CC) {
        var zC = wC.nextPow2(CC);
        oC.length < zC && (QC.free(oC), oC = QC.mallocInt32(zC));
        qC.length < zC && (QC.free(qC), qC = QC.mallocInt32(zC));
        FC.length < zC && (QC.free(FC), FC = QC.mallocInt32(zC));
        WC.length < zC && (QC.free(WC), WC = QC.mallocInt32(zC));
        NC.length < zC && (QC.free(NC), NC = QC.mallocInt32(zC));
        MC.length < zC && (QC.free(MC), MC = QC.mallocInt32(zC));
        var ZC = 8 * zC;
        gC.length < ZC && (QC.free(gC), gC = QC.mallocDouble(ZC))
      },
      sweepBipartite: function(CC, zC, ZC, QC, wC, fC, NC, MC, PC, GC) {
        for (var RC = 0, AC = 2 * CC, xC = CC - 1, JC = AC - 1, IC = ZC; IC < QC; ++IC) {
          var iC = fC[IC],
            vC = AC * IC;
          gC[RC++] = wC[vC + xC], gC[RC++] = -(iC + 1), gC[RC++] = wC[vC + JC], gC[RC++] = iC
        }
        for (IC = NC; IC < MC; ++IC) {
          iC = GC[IC] + nC;
          var eC = AC * IC;
          gC[RC++] = PC[eC + xC], gC[RC++] = -iC, gC[RC++] = PC[eC + JC], gC[RC++] = iC
        }
        var hC = RC >>> 1;
        bC(gC, hC);
        var KC = 0,
          YC = 0;
        for (IC = 0; IC < hC; ++IC) {
          var dC = 0 | gC[2 * IC + 1];
          if (dC >= nC) SC(FC, WC, YC--, dC = dC - nC | 0);
          else if (dC >= 0) SC(oC, qC, KC--, dC);
          else if (dC <= -nC) {
            dC = -dC - nC | 0;
            for (var mC = 0; mC < KC; ++mC) {
              if (void 0 !== (HC = zC(oC[mC], dC))) return HC
            }
            pC(FC, WC, YC++, dC)
          } else {
            dC = -dC - 1 | 0;
            for (mC = 0; mC < YC; ++mC) {
              var HC;
              if (void 0 !== (HC = zC(dC, FC[mC]))) return HC
            }
            pC(oC, qC, KC++, dC)
          }
        }
      },
      sweepComplete: function(CC, zC, ZC, QC, wC, nC, fC, PC, GC, RC) {
        for (var AC = 0, xC = 2 * CC, JC = CC - 1, IC = xC - 1, iC = ZC; iC < QC; ++iC) {
          var vC = nC[iC] + 1 << 1,
            eC = xC * iC;
          gC[AC++] = wC[eC + JC], gC[AC++] = -vC, gC[AC++] = wC[eC + IC], gC[AC++] = vC
        }
        for (iC = fC; iC < PC; ++iC) {
          vC = RC[iC] + 1 << 1;
          var hC = xC * iC;
          gC[AC++] = GC[hC + JC], gC[AC++] = 1 | -vC, gC[AC++] = GC[hC + IC], gC[AC++] = 1 | vC
        }
        var KC = AC >>> 1;
        bC(gC, KC);
        var YC = 0,
          dC = 0,
          mC = 0;
        for (iC = 0; iC < KC; ++iC) {
          var HC = 0 | gC[2 * iC + 1],
            EC = 1 & HC;
          if (iC < KC - 1 && HC >> 1 === gC[2 * iC + 3] >> 1 && (EC = 2, iC += 1), HC < 0) {
            for (var lC = -(HC >> 1) - 1, XC = 0; XC < mC; ++XC) {
              if (void 0 !== (cC = zC(NC[XC], lC))) return cC
            }
            if (0 !== EC)
              for (XC = 0; XC < YC; ++XC) {
                if (void 0 !== (cC = zC(oC[XC], lC))) return cC
              }
            if (1 !== EC)
              for (XC = 0; XC < dC; ++XC) {
                var cC;
                if (void 0 !== (cC = zC(FC[XC], lC))) return cC
              }
            0 === EC ? pC(oC, qC, YC++, lC) : 1 === EC ? pC(FC, WC, dC++, lC) : 2 === EC && pC(NC, MC, mC++, lC)
          } else {
            lC = (HC >> 1) - 1;
            0 === EC ? SC(oC, qC, YC--, lC) : 1 === EC ? SC(FC, WC, dC--, lC) : 2 === EC && SC(NC, MC, mC--, lC)
          }
        }
      },
      scanBipartite: function(CC, zC, ZC, QC, wC, fC, FC, WC, NC, MC, PC, GC) {
        var RC = 0,
          AC = 2 * CC,
          xC = zC,
          JC = zC + CC,
          IC = 1,
          iC = 1;
        QC ? iC = nC : IC = nC;
        for (var vC = wC; vC < fC; ++vC) {
          var eC = vC + IC,
            hC = AC * vC;
          gC[RC++] = FC[hC + xC], gC[RC++] = -eC, gC[RC++] = FC[hC + JC], gC[RC++] = eC
        }
        for (vC = NC; vC < MC; ++vC) {
          eC = vC + iC;
          var KC = AC * vC;
          gC[RC++] = PC[KC + xC], gC[RC++] = -eC
        }
        var YC = RC >>> 1;
        bC(gC, YC);
        var dC = 0;
        for (vC = 0; vC < YC; ++vC) {
          var mC = 0 | gC[2 * vC + 1];
          if (mC < 0) {
            var HC = !1;
            if ((eC = -mC) >= nC ? (HC = !QC, eC -= nC) : (HC = !!QC, eC -= 1), HC) pC(oC, qC, dC++, eC);
            else {
              var EC = GC[eC],
                lC = AC * eC,
                XC = PC[lC + zC + 1],
                cC = PC[lC + zC + 1 + CC];
              CC: for (var uC = 0; uC < dC; ++uC) {
                var rC = oC[uC],
                  sC = AC * rC;
                if (!(cC < FC[sC + zC + 1] || FC[sC + zC + 1 + CC] < XC)) {
                  for (var TC = zC + 2; TC < CC; ++TC)
                    if (PC[lC + TC + CC] < FC[sC + TC] || FC[sC + TC + CC] < PC[lC + TC]) continue CC;
                  var aC, tC = WC[rC];
                  if (void 0 !== (aC = QC ? ZC(EC, tC) : ZC(tC, EC))) return aC
                }
              }
            }
          } else SC(oC, qC, dC--, mC - IC)
        }
      },
      scanComplete: function(CC, zC, ZC, QC, wC, fC, qC, FC, WC, NC, MC) {
        for (var SC = 0, pC = 2 * CC, PC = zC, GC = zC + CC, RC = QC; RC < wC; ++RC) {
          var AC = RC + nC,
            xC = pC * RC;
          gC[SC++] = fC[xC + PC], gC[SC++] = -AC, gC[SC++] = fC[xC + GC], gC[SC++] = AC
        }
        for (RC = FC; RC < WC; ++RC) {
          AC = RC + 1;
          var JC = pC * RC;
          gC[SC++] = NC[JC + PC], gC[SC++] = -AC
        }
        var IC = SC >>> 1;
        bC(gC, IC);
        var iC = 0;
        for (RC = 0; RC < IC; ++RC) {
          var vC = 0 | gC[2 * RC + 1];
          if (vC < 0) {
            if ((AC = -vC) >= nC) oC[iC++] = AC - nC;
            else {
              var eC = MC[AC -= 1],
                hC = pC * AC,
                KC = NC[hC + zC + 1],
                YC = NC[hC + zC + 1 + CC];
              CC: for (var dC = 0; dC < iC; ++dC) {
                var mC = oC[dC],
                  HC = qC[mC];
                if (HC === eC) break;
                var EC = pC * mC;
                if (!(YC < fC[EC + zC + 1] || fC[EC + zC + 1 + CC] < KC)) {
                  for (var lC = zC + 2; lC < CC; ++lC)
                    if (NC[hC + lC + CC] < fC[EC + lC] || fC[EC + lC + CC] < NC[hC + lC]) continue CC;
                  var XC = ZC(HC, eC);
                  if (void 0 !== XC) return XC
                }
              }
            }
          } else {
            for (AC = vC - nC, dC = iC - 1; dC >= 0; --dC)
              if (oC[dC] === AC) {
                for (lC = dC + 1; lC < iC; ++lC) oC[lC - 1] = oC[lC];
                break
              }-- iC
          }
        }
      }
    };
    var QC = ZC(38096),
      wC = ZC(38105),
      bC = ZC(38128),
      nC = 1 << 28,
      fC = 1024,
      oC = QC.mallocInt32(fC),
      qC = QC.mallocInt32(fC),
      FC = QC.mallocInt32(fC),
      WC = QC.mallocInt32(fC),
      NC = QC.mallocInt32(fC),
      MC = QC.mallocInt32(fC),
      gC = QC.mallocDouble(8192);

    function SC(CC, zC, ZC, QC) {
      var wC = zC[QC],
        bC = CC[ZC - 1];
      CC[wC] = bC, zC[bC] = wC
    }

    function pC(CC, zC, ZC, QC) {
      CC[ZC] = QC, zC[QC] = ZC
    }
  },
  38109: CC => {
    function zC(CC, ZC, QC) {
      var wC = 0 | CC[QC];
      if (wC <= 0) return [];
      var bC, nC = new Array(wC);
      if (QC === CC.length - 1)
        for (bC = 0; bC < wC; ++bC) nC[bC] = ZC;
      else
        for (bC = 0; bC < wC; ++bC) nC[bC] = zC(CC, ZC, QC + 1);
      return nC
    }
    CC.exports = function(CC, ZC) {
      switch ("undefined" === typeof ZC && (ZC = 0), typeof CC) {
        case "number":
          if (CC > 0) return function(CC, zC) {
            var ZC, QC;
            for (ZC = new Array(CC), QC = 0; QC < CC; ++QC) ZC[QC] = zC;
            return ZC
          }(0 | CC, ZC);
          break;
        case "object":
          if ("number" === typeof CC.length) return zC(CC, ZC, 0)
      }
      return []
    }
  },
  38063: (CC, zC, ZC) => {
    CC.exports = function() {
      var CC = this;
      this.components = {}, this.comps = this.components;
      var zC = this.components,
        ZC = 1,
        wC = {},
        bC = [],
        nC = [],
        fC = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function oC(CC, ZC) {
        var QC = zC[ZC],
          bC = wC[ZC],
          nC = bC.hash[CC];
        nC && (bC.remove(CC), QC.lY && (QC.multi ? (nC.forEach((zC => {
          zC && QC.lY(CC, zC)
        })), nC.length = 0) : QC.lY(CC, nC)), fC.removals.push(bC), qC())
      }

      function qC() {
        fC.timeout || (fC.timeout = !0, setTimeout(FC, 1))
      }

      function FC() {
        fC.timeout = !1, WC()
      }

      function WC() {
        fC.multiComps.length && function(CC) {
          for (var zC = 0; zC < CC.length; zC++) {
            var {
              entID: ZC,
              data: QC
            } = CC[zC], wC = QC.hash[ZC];
            if (wC) {
              for (var bC = 0; bC < wC.length; bC++) wC[bC] || (wC.splice(bC, 1), bC--);
              0 === wC.length && (QC.remove(ZC), fC.removals.push(QC))
            }
          }
          CC.length = 0
        }(fC.multiComps), fC.removals.length && function(CC) {
          for (var zC = 0; zC < CC.length; zC++) {
            CC[zC].flush()
          }
          CC.length = 0
        }(fC.removals)
      }
      this.PS = wC, this._systems = bC, this._renderSystems = nC, this.dL = function(zC) {
        var QC = ZC++;
        return Array.isArray(zC) && zC.forEach((zC => CC.lH(QC, zC))), QC
      }, this.deleteEntity = function(zC) {
        return Object.keys(wC).forEach((CC => {
          wC[CC].hash[zC] && oC(zC, CC)
        })), CC
      }, this.HzC = function(CC) {
        if (!CC) throw new Error("Missing component definition");
        var ZC = CC.name;
        if (!ZC) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof ZC) throw new Error("Component name must be a string.");
        if ("" === ZC) throw new Error("Component name must be a non-empty string.");
        if (wC[ZC]) throw new Error(`Component ${ZC} already exists.`);
        var fC = {};
        return fC.name = ZC, fC.multi = !!CC.multi, fC.order = isNaN(CC.order) ? 99 : CC.order, fC.stateConstructor = CC.stateConstructor || null, fC.state = CC.state || {}, fC.xR = CC.xR || null, fC.lY = CC.lY || null, fC.system = CC.system || null, fC.vR = CC.vR || null, zC[ZC] = fC, wC[ZC] = new QC, wC[ZC]._pendingMultiCleanup = !1, wC[ZC]._multiCleanupIDs = fC.multi ? [] : null, fC.system && (bC.push(ZC), bC.sort(((CC, ZC) => zC[CC].order - zC[ZC].order))), fC.vR && (nC.push(ZC), nC.sort(((CC, ZC) => zC[CC].order - zC[ZC].order))), ZC
      }, this.overwriteComponent = function(CC, ZC) {
        var QC = zC[CC];
        if (!QC) throw new Error(`Unknown component: ${CC}`);
        if (!ZC) throw new Error("Missing component definition");
        if (QC.name !== ZC.name) throw new Error("Overwriting component must use the same name property.");
        var fC = {};
        fC.name = CC, fC.multi = !!ZC.multi, fC.order = isNaN(ZC.order) ? 99 : ZC.order, fC.state = ZC.state || {}, fC.xR = ZC.xR || null, fC.lY = ZC.lY || null, fC.system = ZC.system || null, fC.vR = ZC.vR || null, zC[CC] = fC, wC[CC]._pendingMultiCleanup = !1, wC[CC]._multiCleanupIDs = fC.multi ? [] : null;
        var oC = bC.indexOf(CC);
        fC.system && oC < 0 && bC.push(CC), !fC.system && oC >= 0 && bC.splice(oC, 1), bC.sort(((CC, ZC) => zC[CC].order - zC[ZC].order));
        var qC = nC.indexOf(CC);
        fC.vR && qC < 0 && nC.push(CC), !fC.vR && qC >= 0 && nC.splice(qC, 1), nC.sort(((CC, ZC) => zC[CC].order - zC[ZC].order));
        var FC = fC.state;
        return this.YH(CC).forEach((CC => {
          for (var zC in FC) zC in CC || (CC[zC] = FC[zC]);
          fC.xR && fC.xR(CC.mH, CC)
        })), CC
      }, this.deleteComponent = function(ZC) {
        var QC = wC[ZC];
        if (!QC) throw new Error(`Unknown component: ${ZC}`);
        QC.flush(), QC.list.forEach((CC => {
          CC && oC(CC.mH || CC[0].mH, ZC)
        }));
        var fC = bC.indexOf(ZC),
          qC = nC.indexOf(ZC);
        return fC > -1 && bC.splice(fC, 1), qC > -1 && nC.splice(qC, 1), wC[ZC].dispose(), delete wC[ZC], delete zC[ZC], CC
      }, this.lH = function(CC, ZC, QC) {
        var bC, nC = zC[ZC],
          fC = wC[ZC];
        if (!fC) throw new Error(`Unknown component: ${ZC}.`);
        if (fC.hash[CC] && !nC.multi) throw new Error(`Entity ${CC} already has component: ${ZC}.`);
        if (nC.stateConstructor) {
          if (!(bC = new nC.stateConstructor).hasOwnProperty("mH")) throw new Error(`Component ${nC.name} stateConstructor type does not have property __id`);
          Object.assign(bC, nC.state, QC)
        } else bC = {
          mH: CC,
          ...nC.state,
          ...QC
        };
        if (bC.mH = CC, nC.multi) {
          var oC = fC.hash[CC];
          oC || (oC = [], fC.add(CC, oC)), oC.push(bC)
        } else fC.add(CC, bC);
        return nC.xR && nC.xR(CC, bC), this
      }, this.YCC = function(CC, zC) {
        var ZC = wC[zC];
        if (!ZC) throw new Error(`Unknown component: ${zC}.`);
        return !!ZC.hash[CC]
      }, this.uH = function(zC, ZC) {
        if (!wC[ZC]) throw new Error(`Unknown component: ${ZC}.`);
        return oC(zC, ZC), CC
      }, this.getState = function(CC, zC) {
        var ZC = wC[zC];
        if (!ZC) throw new Error(`Unknown component: ${zC}.`);
        return ZC.hash[CC]
      }, this.YH = function(CC) {
        var zC = wC[CC];
        if (!zC) throw new Error(`Unknown component: ${CC}.`);
        return WC(), zC.list
      }, this.NzC = function(CC) {
        if (!wC[CC]) throw new Error(`Unknown component: ${CC}.`);
        var zC = wC[CC].hash;
        return CC => zC[CC]
      }, this.GzC = function(CC) {
        if (!wC[CC]) throw new Error(`Unknown component: ${CC}.`);
        var zC = wC[CC].hash;
        return CC => !!zC[CC]
      }, this.ZN = function(ZC) {
        WC();
        for (var QC = 0; QC < bC.length; QC++) {
          var nC = bC[QC],
            fC = zC[nC],
            oC = wC[nC];
          fC.system(ZC, oC.list), WC()
        }
        return CC
      }, this.render = function(ZC) {
        WC();
        for (var QC = 0; QC < nC.length; QC++) {
          var bC = nC[QC],
            fC = zC[bC],
            oC = wC[bC];
          fC.vR(ZC, oC.list), WC()
        }
        return CC
      }, this.removeMultiComponent = function(ZC, QC, bC) {
        var nC = zC[QC],
          oC = wC[QC];
        if (!oC) throw new Error(`Unknown component: ${QC}.`);
        if (!nC.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(CC, zC, ZC, QC) {
          var wC = ZC.hash[CC];
          if (wC) {
            var bC = wC[QC];
            bC && (wC[QC] = null, zC.lY && zC.lY(CC, bC), fC.multiComps.push({
              entID: CC,
              data: ZC
            }), qC())
          }
        }(ZC, nC, oC, bC), CC
      }
    };
    var QC = ZC(38072)
  },
  38072: CC => {
    function zC(CC, zC) {
      var ZC = CC._map[zC];
      if (delete CC.hash[zC], delete CC._map[zC], ZC === CC.list.length - 1) CC.list.pop(), CC._idList.pop();
      else {
        var QC = CC.list.pop();
        CC.list[ZC] = QC;
        var wC = CC._idList.pop();
        CC._idList[ZC] = wC, CC._map[wC] = ZC
      }
    }
    CC.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(CC, zC) {
        if ("number" === typeof this._map[CC]) {
          var ZC = this._map[CC];
          this.hash[CC] = zC, this.list[ZC] = zC, this._idList[ZC] = CC
        } else this._map[CC] = this.list.length, this.hash[CC] = zC, this.list.push(zC), this._idList.push(CC)
      }
      remove(CC) {
        var zC = this._map[CC];
        this.hash[CC] = null, this.list[zC] = null, this._pendingRemovals.push(CC)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var CC = 0; CC < this._pendingRemovals.length; CC++) {
          var ZC = this._pendingRemovals[CC];
          null === this.hash[ZC] && zC(this, ZC)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  37892: (CC, zC, ZC) => {
    CC = ZC.nmd(CC);
    var QC = "__lodash_hash_undefined__",
      wC = 9007199254740991,
      bC = "[object Arguments]",
      nC = "[object Boolean]",
      fC = "[object Date]",
      oC = "[object Function]",
      qC = "[object GeneratorFunction]",
      FC = "[object Map]",
      WC = "[object Number]",
      NC = "[object Object]",
      MC = "[object Promise]",
      gC = "[object RegExp]",
      SC = "[object Set]",
      pC = "[object String]",
      PC = "[object Symbol]",
      GC = "[object WeakMap]",
      RC = "[object ArrayBuffer]",
      AC = "[object DataView]",
      xC = "[object Float32Array]",
      JC = "[object Float64Array]",
      IC = "[object Int8Array]",
      iC = "[object Int16Array]",
      vC = "[object Int32Array]",
      eC = "[object Uint8Array]",
      hC = "[object Uint8ClampedArray]",
      KC = "[object Uint16Array]",
      YC = "[object Uint32Array]",
      dC = /\w*$/,
      mC = /^\[object .+?Constructor\]$/,
      HC = /^(?:0|[1-9]\d*)$/,
      EC = {};
    EC[bC] = EC["[object Array]"] = EC[RC] = EC[AC] = EC[nC] = EC[fC] = EC[xC] = EC[JC] = EC[IC] = EC[iC] = EC[vC] = EC[FC] = EC[WC] = EC[NC] = EC[gC] = EC[SC] = EC[pC] = EC[PC] = EC[eC] = EC[hC] = EC[KC] = EC[YC] = !0, EC["[object Error]"] = EC[oC] = EC[GC] = !1;
    var lC = "object" == typeof ZC.g && ZC.g && ZC.g.Object === Object && ZC.g,
      XC = "object" == typeof self && self && self.Object === Object && self,
      cC = lC || XC || Function("return this")(),
      uC = zC && !zC.nodeType && zC,
      rC = uC && CC && !CC.nodeType && CC,
      sC = rC && rC.exports === uC;

    function TC(CC, zC) {
      return CC.set(zC[0], zC[1]), CC
    }

    function aC(CC, zC) {
      return CC.add(zC), CC
    }

    function tC(CC, zC, ZC, QC) {
      var wC = -1,
        bC = CC ? CC.length : 0;
      for (QC && bC && (ZC = CC[++wC]); ++wC < bC;) ZC = zC(ZC, CC[wC], wC, CC);
      return ZC
    }

    function DC(CC) {
      var zC = !1;
      if (null != CC && "function" != typeof CC.toString) try {
        zC = !!(CC + "")
      } catch (ZC) {}
      return zC
    }

    function jC(CC) {
      var zC = -1,
        ZC = Array(CC.size);
      return CC.forEach((function(CC, QC) {
        ZC[++zC] = [QC, CC]
      })), ZC
    }

    function yC(CC, zC) {
      return function(ZC) {
        return CC(zC(ZC))
      }
    }

    function LC(CC) {
      var zC = -1,
        ZC = Array(CC.size);
      return CC.forEach((function(CC) {
        ZC[++zC] = CC
      })), ZC
    }
    var UC = Array.prototype,
      BC = Function.prototype,
      OC = Object.prototype,
      kC = cC["__core-js_shared__"],
      VC = function() {
        var CC = /[^.]+$/.exec(kC && kC.keys && kC.keys.IE_PROTO || "");
        return CC ? "Symbol(src)_1." + CC : ""
      }(),
      Cz = BC.toString,
      zz = OC.hasOwnProperty,
      Zz = OC.toString,
      Qz = RegExp("^" + Cz.call(zz).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      wz = sC ? cC.gg : void 0,
      bz = cC.Symbol,
      nz = cC.Uint8Array,
      fz = yC(Object.getPrototypeOf, Object),
      oz = Object.create,
      qz = OC.propertyIsEnumerable,
      Fz = UC.splice,
      Wz = Object.getOwnPropertySymbols,
      Nz = wz ? wz.isBuffer : void 0,
      Mz = yC(Object.keys, Object),
      gz = sz(cC, "DataView"),
      Sz = sz(cC, "Map"),
      pz = sz(cC, "Promise"),
      Pz = sz(cC, "Set"),
      Gz = sz(cC, "WeakMap"),
      Rz = sz(Object, "create"),
      Az = jz(gz),
      xz = jz(Sz),
      Jz = jz(pz),
      Iz = jz(Pz),
      iz = jz(Gz),
      vz = bz ? bz.prototype : void 0,
      ez = vz ? vz.valueOf : void 0;

    function hz(CC) {
      var zC = -1,
        ZC = CC ? CC.length : 0;
      for (this.clear(); ++zC < ZC;) {
        var QC = CC[zC];
        this.set(QC[0], QC[1])
      }
    }

    function Kz(CC) {
      var zC = -1,
        ZC = CC ? CC.length : 0;
      for (this.clear(); ++zC < ZC;) {
        var QC = CC[zC];
        this.set(QC[0], QC[1])
      }
    }

    function Yz(CC) {
      var zC = -1,
        ZC = CC ? CC.length : 0;
      for (this.clear(); ++zC < ZC;) {
        var QC = CC[zC];
        this.set(QC[0], QC[1])
      }
    }

    function dz(CC) {
      this.__data__ = new Kz(CC)
    }

    function mz(CC, zC) {
      var ZC = Lz(CC) || function(CC) {
          return function(CC) {
            return function(CC) {
              return !!CC && "object" == typeof CC
            }(CC) && Uz(CC)
          }(CC) && zz.call(CC, "callee") && (!qz.call(CC, "callee") || Zz.call(CC) == bC)
        }(CC) ? function(CC, zC) {
          for (var ZC = -1, QC = Array(CC); ++ZC < CC;) QC[ZC] = zC(ZC);
          return QC
        }(CC.length, String) : [],
        QC = ZC.length,
        wC = !!QC;
      for (var nC in CC) !zC && !zz.call(CC, nC) || wC && ("length" == nC || tz(nC, QC)) || ZC.push(nC);
      return ZC
    }

    function Hz(CC, zC, ZC) {
      var QC = CC[zC];
      zz.call(CC, zC) && yz(QC, ZC) && (void 0 !== ZC || zC in CC) || (CC[zC] = ZC)
    }

    function Ez(CC, zC) {
      for (var ZC = CC.length; ZC--;)
        if (yz(CC[ZC][0], zC)) return ZC;
      return -1
    }

    function lz(CC, zC, ZC, QC, wC, MC, GC) {
      var mC;
      if (QC && (mC = MC ? QC(CC, wC, MC, GC) : QC(CC)), void 0 !== mC) return mC;
      if (!kz(CC)) return CC;
      var HC = Lz(CC);
      if (HC) {
        if (mC = function(CC) {
            var zC = CC.length,
              ZC = CC.constructor(zC);
            zC && "string" == typeof CC[0] && zz.call(CC, "index") && (ZC.index = CC.index, ZC.input = CC.input);
            return ZC
          }(CC), !zC) return function(CC, zC) {
          var ZC = -1,
            QC = CC.length;
          zC || (zC = Array(QC));
          for (; ++ZC < QC;) zC[ZC] = CC[ZC];
          return zC
        }(CC, mC)
      } else {
        var lC = az(CC),
          XC = lC == oC || lC == qC;
        if (Bz(CC)) return function(CC, zC) {
          if (zC) return CC.slice();
          var ZC = new CC.constructor(CC.length);
          return CC.copy(ZC), ZC
        }(CC, zC);
        if (lC == NC || lC == bC || XC && !MC) {
          if (DC(CC)) return MC ? CC : {};
          if (mC = function(CC) {
              return "function" != typeof CC.constructor || Dz(CC) ? {} : (zC = fz(CC), kz(zC) ? oz(zC) : {});
              var zC
            }(XC ? {} : CC), !zC) return function(CC, zC) {
            return uz(CC, Tz(CC), zC)
          }(CC, function(CC, zC) {
            return CC && uz(zC, Vz(zC), CC)
          }(mC, CC))
        } else {
          if (!EC[lC]) return MC ? CC : {};
          mC = function(CC, zC, ZC, QC) {
            var wC = CC.constructor;
            switch (zC) {
              case RC:
                return cz(CC);
              case nC:
              case fC:
                return new wC(+CC);
              case AC:
                return function(CC, zC) {
                  var ZC = zC ? cz(CC.buffer) : CC.buffer;
                  return new CC.constructor(ZC, CC.byteOffset, CC.byteLength)
                }(CC, QC);
              case xC:
              case JC:
              case IC:
              case iC:
              case vC:
              case eC:
              case hC:
              case KC:
              case YC:
                return function(CC, zC) {
                  var ZC = zC ? cz(CC.buffer) : CC.buffer;
                  return new CC.constructor(ZC, CC.byteOffset, CC.length)
                }(CC, QC);
              case FC:
                return function(CC, zC, ZC) {
                  var QC = zC ? ZC(jC(CC), !0) : jC(CC);
                  return tC(QC, TC, new CC.constructor)
                }(CC, QC, ZC);
              case WC:
              case pC:
                return new wC(CC);
              case gC:
                return function(CC) {
                  var zC = new CC.constructor(CC.source, dC.exec(CC));
                  return zC.lastIndex = CC.lastIndex, zC
                }(CC);
              case SC:
                return function(CC, zC, ZC) {
                  var QC = zC ? ZC(LC(CC), !0) : LC(CC);
                  return tC(QC, aC, new CC.constructor)
                }(CC, QC, ZC);
              case PC:
                return bC = CC, ez ? Object(ez.call(bC)) : {}
            }
            var bC
          }(CC, lC, lz, zC)
        }
      }
      GC || (GC = new dz);
      var cC = GC.get(CC);
      if (cC) return cC;
      if (GC.set(CC, mC), !HC) var uC = ZC ? function(CC) {
        return function(CC, zC, ZC) {
          var QC = zC(CC);
          return Lz(CC) ? QC : function(CC, zC) {
            for (var ZC = -1, QC = zC.length, wC = CC.length; ++ZC < QC;) CC[wC + ZC] = zC[ZC];
            return CC
          }(QC, ZC(CC))
        }(CC, Vz, Tz)
      }(CC) : Vz(CC);
      return function(CC, zC) {
        for (var ZC = -1, QC = CC ? CC.length : 0; ++ZC < QC && !1 !== zC(CC[ZC], ZC, CC););
      }(uC || CC, (function(wC, bC) {
        uC && (wC = CC[bC = wC]), Hz(mC, bC, lz(wC, zC, ZC, QC, bC, CC, GC))
      })), mC
    }

    function Xz(CC) {
      return !(!kz(CC) || (zC = CC, VC && VC in zC)) && (Oz(CC) || DC(CC) ? Qz : mC).test(jz(CC));
      var zC
    }

    function cz(CC) {
      var zC = new CC.constructor(CC.byteLength);
      return new nz(zC).set(new nz(CC)), zC
    }

    function uz(CC, zC, ZC, QC) {
      ZC || (ZC = {});
      for (var wC = -1, bC = zC.length; ++wC < bC;) {
        var nC = zC[wC],
          fC = QC ? QC(ZC[nC], CC[nC], nC, ZC, CC) : void 0;
        Hz(ZC, nC, void 0 === fC ? CC[nC] : fC)
      }
      return ZC
    }

    function rz(CC, zC) {
      var ZC = CC.__data__;
      return function(CC) {
        var zC = typeof CC;
        return "string" == zC || "number" == zC || "symbol" == zC || "boolean" == zC ? "__proto__" !== CC : null === CC
      }(zC) ? ZC["string" == typeof zC ? "string" : "hash"] : ZC.map
    }

    function sz(CC, zC) {
      var ZC = function(CC, zC) {
        return null == CC ? void 0 : CC[zC]
      }(CC, zC);
      return Xz(ZC) ? ZC : void 0
    }
    hz.prototype.clear = function() {
      this.__data__ = Rz ? Rz(null) : {}
    }, hz.prototype.delete = function(CC) {
      return this.has(CC) && delete this.__data__[CC]
    }, hz.prototype.get = function(CC) {
      var zC = this.__data__;
      if (Rz) {
        var ZC = zC[CC];
        return ZC === QC ? void 0 : ZC
      }
      return zz.call(zC, CC) ? zC[CC] : void 0
    }, hz.prototype.has = function(CC) {
      var zC = this.__data__;
      return Rz ? void 0 !== zC[CC] : zz.call(zC, CC)
    }, hz.prototype.set = function(CC, zC) {
      return this.__data__[CC] = Rz && void 0 === zC ? QC : zC, this
    }, Kz.prototype.clear = function() {
      this.__data__ = []
    }, Kz.prototype.delete = function(CC) {
      var zC = this.__data__,
        ZC = Ez(zC, CC);
      return !(ZC < 0) && (ZC == zC.length - 1 ? zC.pop() : Fz.call(zC, ZC, 1), !0)
    }, Kz.prototype.get = function(CC) {
      var zC = this.__data__,
        ZC = Ez(zC, CC);
      return ZC < 0 ? void 0 : zC[ZC][1]
    }, Kz.prototype.has = function(CC) {
      return Ez(this.__data__, CC) > -1
    }, Kz.prototype.set = function(CC, zC) {
      var ZC = this.__data__,
        QC = Ez(ZC, CC);
      return QC < 0 ? ZC.push([CC, zC]) : ZC[QC][1] = zC, this
    }, Yz.prototype.clear = function() {
      this.__data__ = {
        hash: new hz,
        map: new(Sz || Kz),
        string: new hz
      }
    }, Yz.prototype.delete = function(CC) {
      return rz(this, CC).delete(CC)
    }, Yz.prototype.get = function(CC) {
      return rz(this, CC).get(CC)
    }, Yz.prototype.has = function(CC) {
      return rz(this, CC).has(CC)
    }, Yz.prototype.set = function(CC, zC) {
      return rz(this, CC).set(CC, zC), this
    }, dz.prototype.clear = function() {
      this.__data__ = new Kz
    }, dz.prototype.delete = function(CC) {
      return this.__data__.delete(CC)
    }, dz.prototype.get = function(CC) {
      return this.__data__.get(CC)
    }, dz.prototype.has = function(CC) {
      return this.__data__.has(CC)
    }, dz.prototype.set = function(CC, zC) {
      var ZC = this.__data__;
      if (ZC instanceof Kz) {
        var QC = ZC.__data__;
        if (!Sz || QC.length < 199) return QC.push([CC, zC]), this;
        ZC = this.__data__ = new Yz(QC)
      }
      return ZC.set(CC, zC), this
    };
    var Tz = Wz ? yC(Wz, Object) : function() {
        return []
      },
      az = function(CC) {
        return Zz.call(CC)
      };

    function tz(CC, zC) {
      return !!(zC = null == zC ? wC : zC) && ("number" == typeof CC || HC.test(CC)) && CC > -1 && CC % 1 == 0 && CC < zC
    }

    function Dz(CC) {
      var zC = CC && CC.constructor;
      return CC === ("function" == typeof zC && zC.prototype || OC)
    }

    function jz(CC) {
      if (null != CC) {
        try {
          return Cz.call(CC)
        } catch (zC) {}
        try {
          return CC + ""
        } catch (zC) {}
      }
      return ""
    }

    function yz(CC, zC) {
      return CC === zC || CC !== CC && zC !== zC
    }(gz && az(new gz(new ArrayBuffer(1))) != AC || Sz && az(new Sz) != FC || pz && az(pz.resolve()) != MC || Pz && az(new Pz) != SC || Gz && az(new Gz) != GC) && (az = function(CC) {
      var zC = Zz.call(CC),
        ZC = zC == NC ? CC.constructor : void 0,
        QC = ZC ? jz(ZC) : void 0;
      if (QC) switch (QC) {
        case Az:
          return AC;
        case xz:
          return FC;
        case Jz:
          return MC;
        case Iz:
          return SC;
        case iz:
          return GC
      }
      return zC
    });
    var Lz = Array.isArray;

    function Uz(CC) {
      return null != CC && function(CC) {
        return "number" == typeof CC && CC > -1 && CC % 1 == 0 && CC <= wC
      }(CC.length) && !Oz(CC)
    }
    var Bz = Nz || function() {
      return !1
    };

    function Oz(CC) {
      var zC = kz(CC) ? Zz.call(CC) : "";
      return zC == oC || zC == qC
    }

    function kz(CC) {
      var zC = typeof CC;
      return !!CC && ("object" == zC || "function" == zC)
    }

    function Vz(CC) {
      return Uz(CC) ? mz(CC) : function(CC) {
        if (!Dz(CC)) return Mz(CC);
        var zC = [];
        for (var ZC in Object(CC)) zz.call(CC, ZC) && "constructor" != ZC && zC.push(ZC);
        return zC
      }(CC)
    }
    CC.exports = function(CC) {
      return lz(CC, !0, !0)
    }
  },
  38282: CC => {
    function zC(CC, zC, ZC) {
      for (var QC = CC.length, wC = -1 / 0, bC = 1 / 0, nC = 0; nC < QC; nC++) {
        var fC = (ZC[0][nC] - CC[nC]) / zC[nC],
          oC = (ZC[1][nC] - CC[nC]) / zC[nC];
        if (fC > oC) {
          var qC = fC;
          fC = oC, oC = qC
        }
        if (oC < wC || fC > bC) return 1 / 0;
        fC > wC && (wC = fC), oC < bC && (bC = oC)
      }
      return wC > bC ? 1 / 0 : wC
    }
    CC.exports = function(CC, ZC, QC, wC) {
      var bC = zC(ZC, QC, wC);
      if (bC === 1 / 0) CC = null;
      else {
        CC = CC || [];
        for (var nC = 0; nC < ZC.length; nC++) CC[nC] = ZC[nC] + QC[nC] * bC
      }
      return CC
    }, CC.exports.distance = zC
  },
  37555: (CC, zC, ZC) => {
    var QC = ZC(37560);

    function wC(CC) {
      for (var zC, ZC, wC = 0, bC = CC.length, nC = 0; nC < CC.length;) {
        for (zC = CC[nC], ZC = 0; nC < bC && CC[nC] === zC;) ++nC, ++ZC;
        wC += QC.log2(ZC) / 7 | 0, wC += QC.log2(zC >>> 0) / 7 | 0, wC += 2
      }
      return wC
    }
    zC.size = wC, zC.encode = function(CC, zC) {
      zC || (zC = new Uint8Array(wC(CC)));
      for (var ZC, QC, bC = 0, nC = zC.length, fC = 0; fC < CC.length;) {
        for (ZC = CC[fC], QC = 0; fC < CC.length && CC[fC] === ZC;) ++fC, ++QC;
        for (; bC < nC && QC >= 128;) zC[bC++] = 128 + (127 & QC), QC >>>= 7;
        if (bC >= nC) throw new Error("RLE buffer overflow");
        for (zC[bC++] = QC, ZC >>>= 0; bC < nC && ZC >= 128;) zC[bC++] = 128 + (127 & ZC), ZC >>>= 7;
        if (bC >= nC) throw new Error("RLE buffer overflow");
        zC[bC++] = ZC
      }
      return zC
    }, zC.decode = function(CC, zC) {
      for (var ZC, QC, wC, bC, nC = zC.length, fC = CC.length, oC = 0, qC = 0; qC < fC;) {
        for (ZC = 0, QC = 0; qC < fC && CC[qC] >= 128;) ZC += (127 & CC[qC++]) << QC, QC += 7;
        if (ZC += CC[qC++] << QC, qC >= fC) throw new Error("RLE buffer underrun");
        if (oC + ZC > nC) throw new Error("Chunk buffer overflow");
        for (wC = 0, QC = 0; qC < fC && CC[qC] >= 128;) wC += (127 & CC[qC++]) << QC, QC += 7;
        if (qC >= fC) throw new Error("RLE buffer underrun");
        for (wC += CC[qC++] << QC, bC = 0; bC < ZC; ++bC) zC[oC++] = wC
      }
      return zC
    }
  },
  37560: (CC, zC) => {
    function ZC(CC) {
      var zC = 32;
      return (CC &= -CC) && zC--, 65535 & CC && (zC -= 16), 16711935 & CC && (zC -= 8), 252645135 & CC && (zC -= 4), 858993459 & CC && (zC -= 2), 1431655765 & CC && (zC -= 1), zC
    }
    zC.INT_BITS = 32, zC.INT_MAX = 2147483647, zC.INT_MIN = -1 << 31, zC.sign = function(CC) {
      return (CC > 0) - (CC < 0)
    }, zC.abs = function(CC) {
      var zC = CC >> 31;
      return (CC ^ zC) - zC
    }, zC.min = function(CC, zC) {
      return zC ^ (CC ^ zC) & -(CC < zC)
    }, zC.max = function(CC, zC) {
      return CC ^ (CC ^ zC) & -(CC < zC)
    }, zC.isPow2 = function(CC) {
      return !(CC & CC - 1) && !!CC
    }, zC.log2 = function(CC) {
      var zC, ZC;
      return zC = (CC > 65535) << 4, zC |= ZC = ((CC >>>= zC) > 255) << 3, zC |= ZC = ((CC >>>= ZC) > 15) << 2, (zC |= ZC = ((CC >>>= ZC) > 3) << 1) | (CC >>>= ZC) >> 1
    }, zC.log10 = function(CC) {
      return CC >= 1e9 ? 9 : CC >= 1e8 ? 8 : CC >= 1e7 ? 7 : CC >= 1e6 ? 6 : CC >= 1e5 ? 5 : CC >= 1e4 ? 4 : CC >= 1e3 ? 3 : CC >= 100 ? 2 : CC >= 10 ? 1 : 0
    }, zC.popCount = function(CC) {
      return 16843009 * ((CC = (858993459 & (CC -= CC >>> 1 & 1431655765)) + (CC >>> 2 & 858993459)) + (CC >>> 4) & 252645135) >>> 24
    }, zC.countTrailingZeros = ZC, zC.nextPow2 = function(CC) {
      return CC += 0 === CC, --CC, CC |= CC >>> 1, CC |= CC >>> 2, CC |= CC >>> 4, CC |= CC >>> 8, (CC |= CC >>> 16) + 1
    }, zC.prevPow2 = function(CC) {
      return CC |= CC >>> 1, CC |= CC >>> 2, CC |= CC >>> 4, CC |= CC >>> 8, (CC |= CC >>> 16) - (CC >>> 1)
    }, zC.parity = function(CC) {
      return CC ^= CC >>> 16, CC ^= CC >>> 8, CC ^= CC >>> 4, 27030 >>> (CC &= 15) & 1
    };
    var QC = new Array(256);
    ! function(CC) {
      for (var zC = 0; zC < 256; ++zC) {
        var ZC = zC,
          QC = zC,
          wC = 7;
        for (ZC >>>= 1; ZC; ZC >>>= 1) QC <<= 1, QC |= 1 & ZC, --wC;
        CC[zC] = QC << wC & 255
      }
    }(QC), zC.reverse = function(CC) {
      return QC[255 & CC] << 24 | QC[CC >>> 8 & 255] << 16 | QC[CC >>> 16 & 255] << 8 | QC[CC >>> 24 & 255]
    }, zC.interleave2 = function(CC, zC) {
      return (CC = 1431655765 & ((CC = 858993459 & ((CC = 252645135 & ((CC = 16711935 & ((CC &= 65535) | CC << 8)) | CC << 4)) | CC << 2)) | CC << 1)) | (zC = 1431655765 & ((zC = 858993459 & ((zC = 252645135 & ((zC = 16711935 & ((zC &= 65535) | zC << 8)) | zC << 4)) | zC << 2)) | zC << 1)) << 1
    }, zC.deinterleave2 = function(CC, zC) {
      return (CC = 65535 & ((CC = 16711935 & ((CC = 252645135 & ((CC = 858993459 & ((CC = CC >>> zC & 1431655765) | CC >>> 1)) | CC >>> 2)) | CC >>> 4)) | CC >>> 16)) << 16 >> 16
    }, zC.interleave3 = function(CC, zC, ZC) {
      return CC = 1227133513 & ((CC = 3272356035 & ((CC = 251719695 & ((CC = 4278190335 & ((CC &= 1023) | CC << 16)) | CC << 8)) | CC << 4)) | CC << 2), (CC |= (zC = 1227133513 & ((zC = 3272356035 & ((zC = 251719695 & ((zC = 4278190335 & ((zC &= 1023) | zC << 16)) | zC << 8)) | zC << 4)) | zC << 2)) << 1) | (ZC = 1227133513 & ((ZC = 3272356035 & ((ZC = 251719695 & ((ZC = 4278190335 & ((ZC &= 1023) | ZC << 16)) | ZC << 8)) | ZC << 4)) | ZC << 2)) << 2
    }, zC.deinterleave3 = function(CC, zC) {
      return (CC = 1023 & ((CC = 4278190335 & ((CC = 251719695 & ((CC = 3272356035 & ((CC = CC >>> zC & 1227133513) | CC >>> 2)) | CC >>> 4)) | CC >>> 8)) | CC >>> 16)) << 22 >> 22
    }, zC.nextCombination = function(CC) {
      var zC = CC | CC - 1;
      return zC + 1 | (~zC & -~zC) - 1 >>> ZC(CC) + 1
    }
  },
  37138: (CC, zC, ZC) => {
    ZC.d(zC, {
      Color3: () => QC.e,
      e: () => QC.g
    });
    var QC = ZC(37142);
    (0, QC.i)()
  },
  37590: (CC, zC, ZC) => {
    ZC.d(zC, {
      e: () => wC
    });
    var QC = ZC(37596);
    class wC {
      static GetPlanes(CC) {
        const zC = [];
        for (let ZC = 0; ZC < 6; ZC++) zC.push(new QC.d(0, 0, 0, 0));
        return wC.GetPlanesToRef(CC, zC), zC
      }
      static GetNearPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] + ZC[2], zC.normal.y = ZC[7] + ZC[6], zC.normal.z = ZC[11] + ZC[10], zC.d = ZC[15] + ZC[14], zC.normalize()
      }
      static GetFarPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] - ZC[2], zC.normal.y = ZC[7] - ZC[6], zC.normal.z = ZC[11] - ZC[10], zC.d = ZC[15] - ZC[14], zC.normalize()
      }
      static GetLeftPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] + ZC[0], zC.normal.y = ZC[7] + ZC[4], zC.normal.z = ZC[11] + ZC[8], zC.d = ZC[15] + ZC[12], zC.normalize()
      }
      static GetRightPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] - ZC[0], zC.normal.y = ZC[7] - ZC[4], zC.normal.z = ZC[11] - ZC[8], zC.d = ZC[15] - ZC[12], zC.normalize()
      }
      static GetTopPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] - ZC[1], zC.normal.y = ZC[7] - ZC[5], zC.normal.z = ZC[11] - ZC[9], zC.d = ZC[15] - ZC[13], zC.normalize()
      }
      static GetBottomPlaneToRef(CC, zC) {
        const ZC = CC.m;
        zC.normal.x = ZC[3] + ZC[1], zC.normal.y = ZC[7] + ZC[5], zC.normal.z = ZC[11] + ZC[9], zC.d = ZC[15] + ZC[13], zC.normalize()
      }
      static GetPlanesToRef(CC, zC) {
        wC.GetNearPlaneToRef(CC, zC[0]), wC.GetFarPlaneToRef(CC, zC[1]), wC.GetLeftPlaneToRef(CC, zC[2]), wC.GetRightPlaneToRef(CC, zC[3]), wC.GetTopPlaneToRef(CC, zC[4]), wC.GetBottomPlaneToRef(CC, zC[5])
      }
      static IsPointInFrustum(CC, zC) {
        for (let ZC = 0; ZC < 6; ZC++)
          if (zC[ZC].dotCoordinate(CC) < 0) return !1;
        return !0
      }
    }
  },
  37596: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => wC
    });
    var QC = ZC(36963);
    class wC {
      constructor(CC, zC, ZC, wC) {
        this.normal = new QC.r(CC, zC, ZC), this.d = wC
      }
      VZC() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new wC(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let CC = this.normal.getHashCode();
        return CC = 397 * CC ^ this.d, CC
      }
      normalize() {
        const CC = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let zC = 0;
        return 0 !== CC && (zC = 1 / CC), this.normal.x *= zC, this.normal.y *= zC, this.normal.z *= zC, this.d *= zC, this
      }
      transform(CC) {
        const zC = wC._TmpMatrix;
        CC.invertToRef(zC);
        const ZC = zC.m,
          QC = this.normal.x,
          bC = this.normal.y,
          nC = this.normal.z,
          fC = this.d,
          oC = QC * ZC[0] + bC * ZC[1] + nC * ZC[2] + fC * ZC[3],
          qC = QC * ZC[4] + bC * ZC[5] + nC * ZC[6] + fC * ZC[7],
          FC = QC * ZC[8] + bC * ZC[9] + nC * ZC[10] + fC * ZC[11],
          WC = QC * ZC[12] + bC * ZC[13] + nC * ZC[14] + fC * ZC[15];
        return new wC(oC, qC, FC, WC)
      }
      dotCoordinate(CC) {
        return this.normal.x * CC.x + this.normal.y * CC.y + this.normal.z * CC.z + this.d
      }
      copyFromPoints(CC, zC, ZC) {
        const QC = zC.x - CC.x,
          wC = zC.y - CC.y,
          bC = zC.z - CC.z,
          nC = ZC.x - CC.x,
          fC = ZC.y - CC.y,
          oC = ZC.z - CC.z,
          qC = wC * oC - bC * fC,
          FC = bC * nC - QC * oC,
          WC = QC * fC - wC * nC,
          NC = Math.sqrt(qC * qC + FC * FC + WC * WC);
        let MC;
        return MC = 0 !== NC ? 1 / NC : 0, this.normal.x = qC * MC, this.normal.y = FC * MC, this.normal.z = WC * MC, this.d = -(this.normal.x * CC.x + this.normal.y * CC.y + this.normal.z * CC.z), this
      }
      isFrontFacingTo(CC, zC) {
        return QC.r.Dot(this.normal, CC) <= zC
      }
      signedDistanceTo(CC) {
        return QC.r.Dot(CC, this.normal) + this.d
      }
      static FromArray(CC) {
        return new wC(CC[0], CC[1], CC[2], CC[3])
      }
      static FromPoints(CC, zC, ZC) {
        const QC = new wC(0, 0, 0, 0);
        return QC.copyFromPoints(CC, zC, ZC), QC
      }
      static FromPositionAndNormal(CC, zC) {
        const ZC = new wC(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(CC, zC, ZC)
      }
      static FromPositionAndNormalToRef(CC, zC, ZC) {
        return ZC.normal.Av(zC), ZC.normal.normalize(), ZC.d = -CC.dot(ZC.normal), ZC
      }
      static SignedDistanceToPlaneFromPositionAndNormal(CC, zC, ZC) {
        const wC = -(zC.x * CC.x + zC.y * CC.y + zC.z * CC.z);
        return QC.r.Dot(ZC, zC) + wC
      }
    }
    wC._TmpMatrix = QC.b.Identity()
  },
  36961: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      Matrix: () => QC.b,
      Quaternion: () => QC.f,
      RegisterMathVector: () => QC.g,
      TmpVectors: () => QC.j,
      Vector2: () => QC.n,
      Eg: () => QC.r,
      Vector4: () => QC.u
    });
    var QC = ZC(36963);
    (0, QC.g)()
  },
  37931: (CC, zC, ZC) => {
    ZC.d(zC, {
      d: () => QC
    });
    class QC {
      constructor(CC, zC, ZC, QC) {
        this.x = CC, this.y = zC, this.width = ZC, this.height = QC
      }
      toGlobal(CC, zC) {
        return new QC(this.x * CC, this.y * zC, this.width * CC, this.height * zC)
      }
      toGlobalToRef(CC, zC, ZC) {
        return ZC.x = this.x * CC, ZC.y = this.y * zC, ZC.width = this.width * CC, ZC.height = this.height * zC, this
      }
      clone() {
        return new QC(this.x, this.y, this.width, this.height)
      }
    }
  },
  37731: (CC, zC, ZC) => {
    function QC() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (CC => {
        const zC = 16 * Math.random() | 0;
        return ("x" === CC ? zC : 3 & zC | 8).toString(16)
      }))
    }
    ZC.d(zC, {
      b: () => QC
    })
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);