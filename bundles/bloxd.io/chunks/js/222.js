/*! For license information please see wd13r.222.718c380d.chunk.js.LICENSE.txt */
export const id = 222;
export const ids = [222, 229];
export const modules = {
  37674: DD => {
    DD.exports = function(DD) {
      return null != DD && null != DD.constructor && "function" === typeof DD.constructor.isBuffer && DD.constructor.isBuffer(DD)
    }
  },
  37657: (DD, CD, cD) => {
    var ID = cD(37661),
      pD = cD(37668),
      iD = cD(37674);
    cD.g.__TYPEDARRAY_POOL || (cD.g.__TYPEDARRAY_POOL = {
      UINT8: pD([32, 0]),
      UINT16: pD([32, 0]),
      UINT32: pD([32, 0]),
      INT8: pD([32, 0]),
      INT16: pD([32, 0]),
      INT32: pD([32, 0]),
      FLOAT: pD([32, 0]),
      DOUBLE: pD([32, 0]),
      DATA: pD([32, 0]),
      UINT8C: pD([32, 0]),
      BUFFER: pD([32, 0])
    });
    var fD = "undefined" !== typeof Uint8ClampedArray,
      bD = cD.g.__TYPEDARRAY_POOL;
    bD.UINT8C || (bD.UINT8C = pD([32, 0])), bD.BUFFER || (bD.BUFFER = pD([32, 0]));
    var QD = bD.DATA,
      wD = bD.BUFFER;

    function SD(DD) {
      if (DD) {
        var CD = DD.length || DD.byteLength,
          cD = ID.log2(CD);
        QD[cD].push(DD)
      }
    }

    function BD(DD) {
      DD = ID.nextPow2(DD);
      var CD = ID.log2(DD),
        cD = QD[CD];
      return cD.length > 0 ? cD.pop() : new ArrayBuffer(DD)
    }

    function yD(DD) {
      return new Uint8Array(BD(DD), 0, DD)
    }

    function MD(DD) {
      return new Uint16Array(BD(2 * DD), 0, DD)
    }

    function tD(DD) {
      return new Uint32Array(BD(4 * DD), 0, DD)
    }

    function ZD(DD) {
      return new Int8Array(BD(DD), 0, DD)
    }

    function oD(DD) {
      return new Int16Array(BD(2 * DD), 0, DD)
    }

    function vD(DD) {
      return new Int32Array(BD(4 * DD), 0, DD)
    }

    function ND(DD) {
      return new Float32Array(BD(4 * DD), 0, DD)
    }

    function gD(DD) {
      return new Float64Array(BD(8 * DD), 0, DD)
    }

    function XD(DD) {
      return fD ? new Uint8ClampedArray(BD(DD), 0, DD) : yD(DD)
    }

    function mD(DD) {
      return new DataView(BD(DD), 0, DD)
    }
    CD.free = function(DD) {
      if (iD(DD)) wD[ID.log2(DD.length)].push(DD);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(DD) && (DD = DD.buffer), !DD) return;
        var CD = DD.length || DD.byteLength,
          cD = 0 | ID.log2(CD);
        QD[cD].push(DD)
      }
    }, CD.freeUint8 = CD.freeUint16 = CD.freeUint32 = CD.freeInt8 = CD.freeInt16 = CD.freeInt32 = CD.freeFloat32 = CD.freeFloat = CD.freeFloat64 = CD.freeDouble = CD.freeUint8Clamped = CD.freeDataView = function(DD) {
      SD(DD.buffer)
    }, CD.freeArrayBuffer = SD, CD.freeBuffer = function(DD) {
      wD[ID.log2(DD.length)].push(DD)
    }, CD.malloc = function(DD, CD) {
      if (void 0 === CD || "arraybuffer" === CD) return BD(DD);
      switch (CD) {
        case "uint8":
          return yD(DD);
        case "uint16":
          return MD(DD);
        case "uint32":
          return tD(DD);
        case "int8":
          return ZD(DD);
        case "int16":
          return oD(DD);
        case "int32":
          return vD(DD);
        case "float":
        case "float32":
          return ND(DD);
        case "double":
        case "float64":
          return gD(DD);
        case "uint8_clamped":
          return XD(DD);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return mD(DD);
        default:
          return null
      }
      return null
    }, CD.mallocArrayBuffer = BD, CD.mallocUint8 = yD, CD.mallocUint16 = MD, CD.mallocUint32 = tD, CD.mallocInt8 = ZD, CD.mallocInt16 = oD, CD.mallocInt32 = vD, CD.mallocFloat32 = CD.mallocFloat = ND, CD.mallocFloat64 = CD.mallocDouble = gD, CD.mallocUint8Clamped = XD, CD.mallocDataView = mD, CD.clearCache = function() {
      for (var DD = 0; DD < 32; ++DD) bD.UINT8[DD].length = 0, bD.UINT16[DD].length = 0, bD.UINT32[DD].length = 0, bD.INT8[DD].length = 0, bD.INT16[DD].length = 0, bD.INT32[DD].length = 0, bD.FLOAT[DD].length = 0, bD.DOUBLE[DD].length = 0, bD.UINT8C[DD].length = 0, QD[DD].length = 0, wD[DD].length = 0
    }
  },
  37661: (DD, CD) => {
    function cD(DD) {
      var CD = 32;
      return (DD &= -DD) && CD--, 65535 & DD && (CD -= 16), 16711935 & DD && (CD -= 8), 252645135 & DD && (CD -= 4), 858993459 & DD && (CD -= 2), 1431655765 & DD && (CD -= 1), CD
    }
    CD.INT_BITS = 32, CD.INT_MAX = 2147483647, CD.INT_MIN = -1 << 31, CD.sign = function(DD) {
      return (DD > 0) - (DD < 0)
    }, CD.abs = function(DD) {
      var CD = DD >> 31;
      return (DD ^ CD) - CD
    }, CD.min = function(DD, CD) {
      return CD ^ (DD ^ CD) & -(DD < CD)
    }, CD.max = function(DD, CD) {
      return DD ^ (DD ^ CD) & -(DD < CD)
    }, CD.isPow2 = function(DD) {
      return !(DD & DD - 1) && !!DD
    }, CD.log2 = function(DD) {
      var CD, cD;
      return CD = (DD > 65535) << 4, CD |= cD = ((DD >>>= CD) > 255) << 3, CD |= cD = ((DD >>>= cD) > 15) << 2, (CD |= cD = ((DD >>>= cD) > 3) << 1) | (DD >>>= cD) >> 1
    }, CD.log10 = function(DD) {
      return DD >= 1e9 ? 9 : DD >= 1e8 ? 8 : DD >= 1e7 ? 7 : DD >= 1e6 ? 6 : DD >= 1e5 ? 5 : DD >= 1e4 ? 4 : DD >= 1e3 ? 3 : DD >= 100 ? 2 : DD >= 10 ? 1 : 0
    }, CD.popCount = function(DD) {
      return 16843009 * ((DD = (858993459 & (DD -= DD >>> 1 & 1431655765)) + (DD >>> 2 & 858993459)) + (DD >>> 4) & 252645135) >>> 24
    }, CD.countTrailingZeros = cD, CD.nextPow2 = function(DD) {
      return DD += 0 === DD, --DD, DD |= DD >>> 1, DD |= DD >>> 2, DD |= DD >>> 4, DD |= DD >>> 8, (DD |= DD >>> 16) + 1
    }, CD.prevPow2 = function(DD) {
      return DD |= DD >>> 1, DD |= DD >>> 2, DD |= DD >>> 4, DD |= DD >>> 8, (DD |= DD >>> 16) - (DD >>> 1)
    }, CD.parity = function(DD) {
      return DD ^= DD >>> 16, DD ^= DD >>> 8, DD ^= DD >>> 4, 27030 >>> (DD &= 15) & 1
    };
    var ID = new Array(256);
    ! function(DD) {
      for (var CD = 0; CD < 256; ++CD) {
        var cD = CD,
          ID = CD,
          pD = 7;
        for (cD >>>= 1; cD; cD >>>= 1) ID <<= 1, ID |= 1 & cD, --pD;
        DD[CD] = ID << pD & 255
      }
    }(ID), CD.reverse = function(DD) {
      return ID[255 & DD] << 24 | ID[DD >>> 8 & 255] << 16 | ID[DD >>> 16 & 255] << 8 | ID[DD >>> 24 & 255]
    }, CD.interleave2 = function(DD, CD) {
      return (DD = 1431655765 & ((DD = 858993459 & ((DD = 252645135 & ((DD = 16711935 & ((DD &= 65535) | DD << 8)) | DD << 4)) | DD << 2)) | DD << 1)) | (CD = 1431655765 & ((CD = 858993459 & ((CD = 252645135 & ((CD = 16711935 & ((CD &= 65535) | CD << 8)) | CD << 4)) | CD << 2)) | CD << 1)) << 1
    }, CD.deinterleave2 = function(DD, CD) {
      return (DD = 65535 & ((DD = 16711935 & ((DD = 252645135 & ((DD = 858993459 & ((DD = DD >>> CD & 1431655765) | DD >>> 1)) | DD >>> 2)) | DD >>> 4)) | DD >>> 16)) << 16 >> 16
    }, CD.interleave3 = function(DD, CD, cD) {
      return DD = 1227133513 & ((DD = 3272356035 & ((DD = 251719695 & ((DD = 4278190335 & ((DD &= 1023) | DD << 16)) | DD << 8)) | DD << 4)) | DD << 2), (DD |= (CD = 1227133513 & ((CD = 3272356035 & ((CD = 251719695 & ((CD = 4278190335 & ((CD &= 1023) | CD << 16)) | CD << 8)) | CD << 4)) | CD << 2)) << 1) | (cD = 1227133513 & ((cD = 3272356035 & ((cD = 251719695 & ((cD = 4278190335 & ((cD &= 1023) | cD << 16)) | cD << 8)) | cD << 4)) | cD << 2)) << 2
    }, CD.deinterleave3 = function(DD, CD) {
      return (DD = 1023 & ((DD = 4278190335 & ((DD = 251719695 & ((DD = 3272356035 & ((DD = DD >>> CD & 1227133513) | DD >>> 2)) | DD >>> 4)) | DD >>> 8)) | DD >>> 16)) << 22 >> 22
    }, CD.nextCombination = function(DD) {
      var CD = DD | DD - 1;
      return CD + 1 | (~CD & -~CD) - 1 >>> cD(DD) + 1
    }
  },
  37651: (DD, CD, cD) => {
    DD.exports = function(DD, CD, cD) {
      switch (arguments.length) {
        case 1:
          return ID = [], wD(pD = DD, pD, SD, !0), ID;
        case 2:
          return "function" === typeof CD ? wD(DD, DD, CD, !0) : function(DD, CD) {
            return ID = [], wD(DD, CD, SD, !1), ID
          }(DD, CD);
        case 3:
          return wD(DD, CD, cD, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var pD
    };
    var ID, pD = cD(37657),
      iD = cD(37678),
      fD = cD(37689);

    function bD(DD, CD) {
      for (var cD = 0; cD < DD; ++cD)
        if (!(CD[cD] <= CD[cD + DD])) return !0;
      return !1
    }

    function QD(DD, CD, cD, ID) {
      for (var pD = 0, iD = 0, fD = 0, QD = DD.length; fD < QD; ++fD) {
        var wD = DD[fD];
        if (!bD(CD, wD)) {
          for (var SD = 0; SD < 2 * CD; ++SD) cD[pD++] = wD[SD];
          ID[iD++] = fD
        }
      }
      return iD
    }

    function wD(DD, CD, cD, ID) {
      var bD = DD.length,
        wD = CD.length;
      if (!(bD <= 0 || wD <= 0)) {
        var SD = DD[0].length >>> 1;
        if (!(SD <= 0)) {
          var BD, yD = pD.mallocDouble(2 * SD * bD),
            MD = pD.mallocInt32(bD);
          if ((bD = QD(DD, SD, yD, MD)) > 0) {
            if (1 === SD && ID) iD.init(bD), BD = iD.sweepComplete(SD, cD, 0, bD, yD, MD, 0, bD, yD, MD);
            else {
              var tD = pD.mallocDouble(2 * SD * wD),
                ZD = pD.mallocInt32(wD);
              (wD = QD(CD, SD, tD, ZD)) > 0 && (iD.init(bD + wD), BD = 1 === SD ? iD.sweepBipartite(SD, cD, 0, bD, yD, MD, 0, wD, tD, ZD) : fD(SD, cD, ID, bD, yD, MD, wD, tD, ZD), pD.free(tD), pD.free(ZD))
            }
            pD.free(yD), pD.free(MD)
          }
          return BD
        }
      }
    }

    function SD(DD, CD) {
      ID.push([DD, CD])
    }
  },
  37694: (DD, CD) => {
    var cD = "d",
      ID = "ax",
      pD = "fp",
      iD = "es",
      fD = "rs",
      bD = "re",
      QD = "rb",
      wD = "bs",
      SD = "be",
      BD = "bb",
      yD = [cD, ID, "vv", fD, bD, QD, "ri", wD, SD, BD, "bi"];

    function MD(DD) {
      var CD = "bruteForce" + (DD ? "Full" : "Partial"),
        ID = [],
        fD = yD.slice();
      DD || fD.splice(3, 0, pD);
      var bD = ["function " + CD + "(" + fD.join() + "){"];

      function QD(CD, pD) {
        var fD = function(DD, CD, ID) {
          var pD = "bruteForce" + (DD ? "Red" : "Blue") + (CD ? "Flip" : "") + (ID ? "Full" : ""),
            fD = ["function ", pD, "(", yD.join(), "){", "var ", iD, "=2*", cD, ";"],
            bD = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            QD = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (ID ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return DD ? fD.push(bD, "Q", ":", QD) : fD.push(QD, "Q", ":", bD), ID ? fD.push("if(y1<x0||x1<y0)continue;") : CD ? fD.push("if(y0<=x0||x1<y0)continue;") : fD.push("if(y0<x0||x1<y0)continue;"), fD.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), CD ? fD.push("yi,xi") : fD.push("xi,yi"), fD.push(");if(rv!==void 0)return rv;}}}"), {
            name: pD,
            code: fD.join("")
          }
        }(CD, pD, DD);
        ID.push(fD.code), bD.push("return " + fD.name + "(" + yD.join() + ");")
      }
      bD.push("if(re-rs>be-bs){"), DD ? (QD(!0, !1), bD.push("}else{"), QD(!1, !1)) : (bD.push("if(fp){"), QD(!0, !0), bD.push("}else{"), QD(!0, !1), bD.push("}}else{if(fp){"), QD(!1, !0), bD.push("}else{"), QD(!1, !1), bD.push("}")), bD.push("}}return " + CD);
      var wD = ID.join("") + bD.join("");
      return new Function(wD)()
    }
    CD.partial = MD(!1), CD.full = MD(!0)
  },
  37689: (DD, CD, cD) => {
    DD.exports = function(DD, CD, cD, iD, SD, xD, qD, JD, KD) {
      ! function(DD, CD) {
        var cD = 8 * pD.log2(CD + 1) * (DD + 1) | 0,
          iD = pD.nextPow2(XD * cD);
        nD.length < iD && (ID.free(nD), nD = ID.mallocInt32(iD));
        var fD = pD.nextPow2(mD * cD);
        OD.length < fD && (ID.free(OD), OD = ID.mallocDouble(fD))
      }(DD, iD + qD);
      var aD, VD = 0,
        zD = 2 * DD;
      PD(VD++, 0, 0, iD, 0, qD, cD ? 16 : 0, -1 / 0, 1 / 0), cD || PD(VD++, 0, 0, qD, 0, iD, 1, -1 / 0, 1 / 0);
      for (; VD > 0;) {
        var jD = (VD -= 1) * XD,
          lD = nD[jD],
          LD = nD[jD + 1],
          TD = nD[jD + 2],
          GD = nD[jD + 3],
          RD = nD[jD + 4],
          kD = nD[jD + 5],
          dD = VD * mD,
          YD = OD[dD],
          WD = OD[dD + 1],
          sD = 1 & kD,
          ED = !!(16 & kD),
          eD = SD,
          uD = xD,
          hD = JD,
          rD = KD;
        if (sD && (eD = JD, uD = KD, hD = SD, rD = xD), !(2 & kD && LD >= (TD = oD(DD, lD, LD, TD, eD, uD, WD))) && !(4 & kD && (LD = vD(DD, lD, LD, TD, eD, uD, YD)) >= TD)) {
          var AD = TD - LD,
            FD = RD - GD;
          if (ED) {
            if (DD * AD * (AD + FD) < MD) {
              if (void 0 !== (aD = QD.scanComplete(DD, lD, CD, LD, TD, eD, uD, GD, RD, hD, rD))) return aD;
              continue
            }
          } else {
            if (DD * Math.min(AD, FD) < BD) {
              if (void 0 !== (aD = fD(DD, lD, CD, sD, LD, TD, eD, uD, GD, RD, hD, rD))) return aD;
              continue
            }
            if (DD * AD * FD < yD) {
              if (void 0 !== (aD = QD.scanBipartite(DD, lD, CD, sD, LD, TD, eD, uD, GD, RD, hD, rD))) return aD;
              continue
            }
          }
          var DC = tD(DD, lD, LD, TD, eD, uD, YD, WD);
          if (LD < DC)
            if (DD * (DC - LD) < BD) {
              if (void 0 !== (aD = bD(DD, lD + 1, CD, LD, DC, eD, uD, GD, RD, hD, rD))) return aD
            } else if (lD === DD - 2) {
            if (void 0 !== (aD = sD ? QD.sweepBipartite(DD, CD, GD, RD, hD, rD, LD, DC, eD, uD) : QD.sweepBipartite(DD, CD, LD, DC, eD, uD, GD, RD, hD, rD))) return aD
          } else PD(VD++, lD + 1, LD, DC, GD, RD, sD, -1 / 0, 1 / 0), PD(VD++, lD + 1, GD, RD, LD, DC, 1 ^ sD, -1 / 0, 1 / 0);
          if (DC < TD) {
            var CC = wD(DD, lD, GD, RD, hD, rD),
              cC = hD[zD * CC + lD],
              IC = ZD(DD, lD, CC, RD, hD, rD, cC);
            if (IC < RD && PD(VD++, lD, DC, TD, IC, RD, (4 | sD) + (ED ? 16 : 0), cC, WD), GD < CC && PD(VD++, lD, DC, TD, GD, CC, (2 | sD) + (ED ? 16 : 0), YD, cC), CC + 1 === IC) {
              if (void 0 !== (aD = ED ? UD(DD, lD, CD, DC, TD, eD, uD, CC, hD, rD[CC]) : HD(DD, lD, CD, sD, DC, TD, eD, uD, CC, hD, rD[CC]))) return aD
            } else if (CC < IC) {
              var pC;
              if (ED) {
                if (DC < (pC = ND(DD, lD, DC, TD, eD, uD, cC))) {
                  var iC = ZD(DD, lD, DC, pC, eD, uD, cC);
                  if (lD === DD - 2) {
                    if (DC < iC && void 0 !== (aD = QD.sweepComplete(DD, CD, DC, iC, eD, uD, CC, IC, hD, rD))) return aD;
                    if (iC < pC && void 0 !== (aD = QD.sweepBipartite(DD, CD, iC, pC, eD, uD, CC, IC, hD, rD))) return aD
                  } else DC < iC && PD(VD++, lD + 1, DC, iC, CC, IC, 16, -1 / 0, 1 / 0), iC < pC && (PD(VD++, lD + 1, iC, pC, CC, IC, 0, -1 / 0, 1 / 0), PD(VD++, lD + 1, CC, IC, iC, pC, 1, -1 / 0, 1 / 0))
                }
              } else DC < (pC = sD ? gD(DD, lD, DC, TD, eD, uD, cC) : ND(DD, lD, DC, TD, eD, uD, cC)) && (lD === DD - 2 ? aD = sD ? QD.sweepBipartite(DD, CD, CC, IC, hD, rD, DC, pC, eD, uD) : QD.sweepBipartite(DD, CD, DC, pC, eD, uD, CC, IC, hD, rD) : (PD(VD++, lD + 1, DC, pC, CC, IC, sD, -1 / 0, 1 / 0), PD(VD++, lD + 1, CC, IC, DC, pC, 1 ^ sD, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var ID = cD(37657),
      pD = cD(37661),
      iD = cD(37694),
      fD = iD.partial,
      bD = iD.full,
      QD = cD(37678),
      wD = cD(37702),
      SD = cD(37709),
      BD = 128,
      yD = 1 << 22,
      MD = 1 << 22,
      tD = SD("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      ZD = SD("lo===p0", ["p0"]),
      oD = SD("lo<p0", ["p0"]),
      vD = SD("hi<=p0", ["p0"]),
      ND = SD("lo<=p0&&p0<=hi", ["p0"]),
      gD = SD("lo<p0&&p0<=hi", ["p0"]),
      XD = 6,
      mD = 2,
      nD = ID.mallocInt32(1024),
      OD = ID.mallocDouble(1024);

    function PD(DD, CD, cD, ID, pD, iD, fD, bD, QD) {
      var wD = XD * DD;
      nD[wD] = CD, nD[wD + 1] = cD, nD[wD + 2] = ID, nD[wD + 3] = pD, nD[wD + 4] = iD, nD[wD + 5] = fD;
      var SD = mD * DD;
      OD[SD] = bD, OD[SD + 1] = QD
    }

    function HD(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD, SD) {
      var BD = 2 * DD,
        yD = QD * BD,
        MD = wD[yD + CD];
      DD: for (var tD = pD, ZD = pD * BD; tD < iD; ++tD, ZD += BD) {
        var oD = fD[ZD + CD],
          vD = fD[ZD + CD + DD];
        if (!(MD < oD || vD < MD) && (!ID || MD !== oD)) {
          for (var ND, gD = bD[tD], XD = CD + 1; XD < DD; ++XD) {
            oD = fD[ZD + XD], vD = fD[ZD + XD + DD];
            var mD = wD[yD + XD],
              nD = wD[yD + XD + DD];
            if (vD < mD || nD < oD) continue DD
          }
          if (void 0 !== (ND = ID ? cD(SD, gD) : cD(gD, SD))) return ND
        }
      }
    }

    function UD(DD, CD, cD, ID, pD, iD, fD, bD, QD, wD) {
      var SD = 2 * DD,
        BD = bD * SD,
        yD = QD[BD + CD];
      DD: for (var MD = ID, tD = ID * SD; MD < pD; ++MD, tD += SD) {
        var ZD = fD[MD];
        if (ZD !== wD) {
          var oD = iD[tD + CD],
            vD = iD[tD + CD + DD];
          if (!(yD < oD || vD < yD)) {
            for (var ND = CD + 1; ND < DD; ++ND) {
              oD = iD[tD + ND], vD = iD[tD + ND + DD];
              var gD = QD[BD + ND],
                XD = QD[BD + ND + DD];
              if (vD < gD || XD < oD) continue DD
            }
            var mD = cD(ZD, wD);
            if (void 0 !== mD) return mD
          }
        }
      }
    }
  },
  37702: (DD, CD, cD) => {
    DD.exports = function(DD, CD, cD, fD, bD, QD) {
      if (fD <= cD + 1) return cD;
      var wD = cD,
        SD = fD,
        BD = fD + cD >>> 1,
        yD = 2 * DD,
        MD = BD,
        tD = bD[yD * BD + CD];
      for (; wD < SD;) {
        if (SD - wD < pD) {
          iD(DD, CD, wD, SD, bD, QD), tD = bD[yD * BD + CD];
          break
        }
        var ZD = SD - wD,
          oD = Math.random() * ZD + wD | 0,
          vD = bD[yD * oD + CD],
          ND = Math.random() * ZD + wD | 0,
          gD = bD[yD * ND + CD],
          XD = Math.random() * ZD + wD | 0,
          mD = bD[yD * XD + CD];
        vD <= gD ? mD >= gD ? (MD = ND, tD = gD) : vD >= mD ? (MD = oD, tD = vD) : (MD = XD, tD = mD) : gD >= mD ? (MD = ND, tD = gD) : mD >= vD ? (MD = oD, tD = vD) : (MD = XD, tD = mD);
        for (var nD = yD * (SD - 1), OD = yD * MD, PD = 0; PD < yD; ++PD, ++nD, ++OD) {
          var HD = bD[nD];
          bD[nD] = bD[OD], bD[OD] = HD
        }
        var UD = QD[SD - 1];
        QD[SD - 1] = QD[MD], QD[MD] = UD;
        for (nD = yD * (SD - 1), OD = yD * (MD = ID(DD, CD, wD, SD - 1, bD, QD, tD)), PD = 0; PD < yD; ++PD, ++nD, ++OD) {
          HD = bD[nD];
          bD[nD] = bD[OD], bD[OD] = HD
        }
        UD = QD[SD - 1];
        if (QD[SD - 1] = QD[MD], QD[MD] = UD, BD < MD) {
          for (SD = MD - 1; wD < SD && bD[yD * (SD - 1) + CD] === tD;) SD -= 1;
          SD += 1
        } else {
          if (!(MD < BD)) break;
          for (wD = MD + 1; wD < SD && bD[yD * wD + CD] === tD;) wD += 1
        }
      }
      return ID(DD, CD, cD, BD, bD, QD, bD[yD * BD + CD])
    };
    var ID = cD(37709)("lo<p0", ["p0"]),
      pD = 8;

    function iD(DD, CD, cD, ID, pD, iD) {
      for (var fD = 2 * DD, bD = fD * (cD + 1) + CD, QD = cD + 1; QD < ID; ++QD, bD += fD)
        for (var wD = pD[bD], SD = QD, BD = fD * (QD - 1); SD > cD && pD[BD + CD] > wD; --SD, BD -= fD) {
          for (var yD = BD, MD = BD + fD, tD = 0; tD < fD; ++tD, ++yD, ++MD) {
            var ZD = pD[yD];
            pD[yD] = pD[MD], pD[MD] = ZD
          }
          var oD = iD[SD];
          iD[SD] = iD[SD - 1], iD[SD - 1] = oD
        }
    }
  },
  37709: DD => {
    DD.exports = function(DD, cD) {
      var ID = "abcdef".split("").concat(cD),
        pD = [];
      DD.indexOf("lo") >= 0 && pD.push("lo=e[k+n]");
      DD.indexOf("hi") >= 0 && pD.push("hi=e[k+o]");
      return ID.push(CD.replace("_", pD.join()).replace("$", DD)), Function.apply(void 0, ID)
    };
    var CD = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  37683: DD => {
    DD.exports = function(DD, ID) {
      ID <= 4 * CD ? cD(0, ID - 1, DD) : wD(0, ID - 1, DD)
    };
    var CD = 32;

    function cD(DD, CD, cD) {
      for (var ID = 2 * (DD + 1), pD = DD + 1; pD <= CD; ++pD) {
        for (var iD = cD[ID++], fD = cD[ID++], bD = pD, QD = ID - 2; bD-- > DD;) {
          var wD = cD[QD - 2],
            SD = cD[QD - 1];
          if (wD < iD) break;
          if (wD === iD && SD < fD) break;
          cD[QD] = wD, cD[QD + 1] = SD, QD -= 2
        }
        cD[QD] = iD, cD[QD + 1] = fD
      }
    }

    function ID(DD, CD, cD) {
      CD *= 2;
      var ID = cD[DD *= 2],
        pD = cD[DD + 1];
      cD[DD] = cD[CD], cD[DD + 1] = cD[CD + 1], cD[CD] = ID, cD[CD + 1] = pD
    }

    function pD(DD, CD, cD) {
      CD *= 2, cD[DD *= 2] = cD[CD], cD[DD + 1] = cD[CD + 1]
    }

    function iD(DD, CD, cD, ID) {
      CD *= 2, cD *= 2;
      var pD = ID[DD *= 2],
        iD = ID[DD + 1];
      ID[DD] = ID[CD], ID[DD + 1] = ID[CD + 1], ID[CD] = ID[cD], ID[CD + 1] = ID[cD + 1], ID[cD] = pD, ID[cD + 1] = iD
    }

    function fD(DD, CD, cD, ID, pD) {
      CD *= 2, pD[DD *= 2] = pD[CD], pD[CD] = cD, pD[DD + 1] = pD[CD + 1], pD[CD + 1] = ID
    }

    function bD(DD, CD, cD) {
      CD *= 2;
      var ID = cD[DD *= 2],
        pD = cD[CD];
      return !(ID < pD) && (ID !== pD || cD[DD + 1] > cD[CD + 1])
    }

    function QD(DD, CD, cD, ID) {
      var pD = ID[DD *= 2];
      return pD < CD || pD === CD && ID[DD + 1] < cD
    }

    function wD(DD, SD, BD) {
      var yD = (SD - DD + 1) / 6 | 0,
        MD = DD + yD,
        tD = SD - yD,
        ZD = DD + SD >> 1,
        oD = ZD - yD,
        vD = ZD + yD,
        ND = MD,
        gD = oD,
        XD = ZD,
        mD = vD,
        nD = tD,
        OD = DD + 1,
        PD = SD - 1,
        HD = 0;
      bD(ND, gD, BD) && (HD = ND, ND = gD, gD = HD), bD(mD, nD, BD) && (HD = mD, mD = nD, nD = HD), bD(ND, XD, BD) && (HD = ND, ND = XD, XD = HD), bD(gD, XD, BD) && (HD = gD, gD = XD, XD = HD), bD(ND, mD, BD) && (HD = ND, ND = mD, mD = HD), bD(XD, mD, BD) && (HD = XD, XD = mD, mD = HD), bD(gD, nD, BD) && (HD = gD, gD = nD, nD = HD), bD(gD, XD, BD) && (HD = gD, gD = XD, XD = HD), bD(mD, nD, BD) && (HD = mD, mD = nD, nD = HD);
      for (var UD = BD[2 * gD], xD = BD[2 * gD + 1], qD = BD[2 * mD], JD = BD[2 * mD + 1], KD = 2 * ND, aD = 2 * XD, VD = 2 * nD, zD = 2 * MD, jD = 2 * ZD, lD = 2 * tD, LD = 0; LD < 2; ++LD) {
        var TD = BD[KD + LD],
          GD = BD[aD + LD],
          RD = BD[VD + LD];
        BD[zD + LD] = TD, BD[jD + LD] = GD, BD[lD + LD] = RD
      }
      pD(oD, DD, BD), pD(vD, SD, BD);
      for (var kD = OD; kD <= PD; ++kD)
        if (QD(kD, UD, xD, BD)) kD !== OD && ID(kD, OD, BD), ++OD;
        else if (!QD(kD, qD, JD, BD))
        for (;;) {
          if (QD(PD, qD, JD, BD)) {
            QD(PD, UD, xD, BD) ? (iD(kD, OD, PD, BD), ++OD, --PD) : (ID(kD, PD, BD), --PD);
            break
          }
          if (--PD < kD) break
        }
      fD(DD, OD - 1, UD, xD, BD), fD(SD, PD + 1, qD, JD, BD), OD - 2 - DD <= CD ? cD(DD, OD - 2, BD) : wD(DD, OD - 2, BD), SD - (PD + 2) <= CD ? cD(PD + 2, SD, BD) : wD(PD + 2, SD, BD), PD - OD <= CD ? cD(OD, PD, BD) : wD(OD, PD, BD)
    }
  },
  37678: (DD, CD, cD) => {
    DD.exports = {
      init: function(DD) {
        var CD = pD.nextPow2(DD);
        QD.length < CD && (ID.free(QD), QD = ID.mallocInt32(CD));
        wD.length < CD && (ID.free(wD), wD = ID.mallocInt32(CD));
        SD.length < CD && (ID.free(SD), SD = ID.mallocInt32(CD));
        BD.length < CD && (ID.free(BD), BD = ID.mallocInt32(CD));
        yD.length < CD && (ID.free(yD), yD = ID.mallocInt32(CD));
        MD.length < CD && (ID.free(MD), MD = ID.mallocInt32(CD));
        var cD = 8 * CD;
        tD.length < cD && (ID.free(tD), tD = ID.mallocDouble(cD))
      },
      sweepBipartite: function(DD, CD, cD, ID, pD, bD, yD, MD, vD, ND) {
        for (var gD = 0, XD = 2 * DD, mD = DD - 1, nD = XD - 1, OD = cD; OD < ID; ++OD) {
          var PD = bD[OD],
            HD = XD * OD;
          tD[gD++] = pD[HD + mD], tD[gD++] = -(PD + 1), tD[gD++] = pD[HD + nD], tD[gD++] = PD
        }
        for (OD = yD; OD < MD; ++OD) {
          PD = ND[OD] + fD;
          var UD = XD * OD;
          tD[gD++] = vD[UD + mD], tD[gD++] = -PD, tD[gD++] = vD[UD + nD], tD[gD++] = PD
        }
        var xD = gD >>> 1;
        iD(tD, xD);
        var qD = 0,
          JD = 0;
        for (OD = 0; OD < xD; ++OD) {
          var KD = 0 | tD[2 * OD + 1];
          if (KD >= fD) ZD(SD, BD, JD--, KD = KD - fD | 0);
          else if (KD >= 0) ZD(QD, wD, qD--, KD);
          else if (KD <= -fD) {
            KD = -KD - fD | 0;
            for (var aD = 0; aD < qD; ++aD) {
              if (void 0 !== (VD = CD(QD[aD], KD))) return VD
            }
            oD(SD, BD, JD++, KD)
          } else {
            KD = -KD - 1 | 0;
            for (aD = 0; aD < JD; ++aD) {
              var VD;
              if (void 0 !== (VD = CD(KD, SD[aD]))) return VD
            }
            oD(QD, wD, qD++, KD)
          }
        }
      },
      sweepComplete: function(DD, CD, cD, ID, pD, fD, bD, vD, ND, gD) {
        for (var XD = 0, mD = 2 * DD, nD = DD - 1, OD = mD - 1, PD = cD; PD < ID; ++PD) {
          var HD = fD[PD] + 1 << 1,
            UD = mD * PD;
          tD[XD++] = pD[UD + nD], tD[XD++] = -HD, tD[XD++] = pD[UD + OD], tD[XD++] = HD
        }
        for (PD = bD; PD < vD; ++PD) {
          HD = gD[PD] + 1 << 1;
          var xD = mD * PD;
          tD[XD++] = ND[xD + nD], tD[XD++] = 1 | -HD, tD[XD++] = ND[xD + OD], tD[XD++] = 1 | HD
        }
        var qD = XD >>> 1;
        iD(tD, qD);
        var JD = 0,
          KD = 0,
          aD = 0;
        for (PD = 0; PD < qD; ++PD) {
          var VD = 0 | tD[2 * PD + 1],
            zD = 1 & VD;
          if (PD < qD - 1 && VD >> 1 === tD[2 * PD + 3] >> 1 && (zD = 2, PD += 1), VD < 0) {
            for (var jD = -(VD >> 1) - 1, lD = 0; lD < aD; ++lD) {
              if (void 0 !== (LD = CD(yD[lD], jD))) return LD
            }
            if (0 !== zD)
              for (lD = 0; lD < JD; ++lD) {
                if (void 0 !== (LD = CD(QD[lD], jD))) return LD
              }
            if (1 !== zD)
              for (lD = 0; lD < KD; ++lD) {
                var LD;
                if (void 0 !== (LD = CD(SD[lD], jD))) return LD
              }
            0 === zD ? oD(QD, wD, JD++, jD) : 1 === zD ? oD(SD, BD, KD++, jD) : 2 === zD && oD(yD, MD, aD++, jD)
          } else {
            jD = (VD >> 1) - 1;
            0 === zD ? ZD(QD, wD, JD--, jD) : 1 === zD ? ZD(SD, BD, KD--, jD) : 2 === zD && ZD(yD, MD, aD--, jD)
          }
        }
      },
      scanBipartite: function(DD, CD, cD, ID, pD, bD, SD, BD, yD, MD, vD, ND) {
        var gD = 0,
          XD = 2 * DD,
          mD = CD,
          nD = CD + DD,
          OD = 1,
          PD = 1;
        ID ? PD = fD : OD = fD;
        for (var HD = pD; HD < bD; ++HD) {
          var UD = HD + OD,
            xD = XD * HD;
          tD[gD++] = SD[xD + mD], tD[gD++] = -UD, tD[gD++] = SD[xD + nD], tD[gD++] = UD
        }
        for (HD = yD; HD < MD; ++HD) {
          UD = HD + PD;
          var qD = XD * HD;
          tD[gD++] = vD[qD + mD], tD[gD++] = -UD
        }
        var JD = gD >>> 1;
        iD(tD, JD);
        var KD = 0;
        for (HD = 0; HD < JD; ++HD) {
          var aD = 0 | tD[2 * HD + 1];
          if (aD < 0) {
            var VD = !1;
            if ((UD = -aD) >= fD ? (VD = !ID, UD -= fD) : (VD = !!ID, UD -= 1), VD) oD(QD, wD, KD++, UD);
            else {
              var zD = ND[UD],
                jD = XD * UD,
                lD = vD[jD + CD + 1],
                LD = vD[jD + CD + 1 + DD];
              DD: for (var TD = 0; TD < KD; ++TD) {
                var GD = QD[TD],
                  RD = XD * GD;
                if (!(LD < SD[RD + CD + 1] || SD[RD + CD + 1 + DD] < lD)) {
                  for (var kD = CD + 2; kD < DD; ++kD)
                    if (vD[jD + kD + DD] < SD[RD + kD] || SD[RD + kD + DD] < vD[jD + kD]) continue DD;
                  var dD, YD = BD[GD];
                  if (void 0 !== (dD = ID ? cD(zD, YD) : cD(YD, zD))) return dD
                }
              }
            }
          } else ZD(QD, wD, KD--, aD - OD)
        }
      },
      scanComplete: function(DD, CD, cD, ID, pD, bD, wD, SD, BD, yD, MD) {
        for (var ZD = 0, oD = 2 * DD, vD = CD, ND = CD + DD, gD = ID; gD < pD; ++gD) {
          var XD = gD + fD,
            mD = oD * gD;
          tD[ZD++] = bD[mD + vD], tD[ZD++] = -XD, tD[ZD++] = bD[mD + ND], tD[ZD++] = XD
        }
        for (gD = SD; gD < BD; ++gD) {
          XD = gD + 1;
          var nD = oD * gD;
          tD[ZD++] = yD[nD + vD], tD[ZD++] = -XD
        }
        var OD = ZD >>> 1;
        iD(tD, OD);
        var PD = 0;
        for (gD = 0; gD < OD; ++gD) {
          var HD = 0 | tD[2 * gD + 1];
          if (HD < 0) {
            if ((XD = -HD) >= fD) QD[PD++] = XD - fD;
            else {
              var UD = MD[XD -= 1],
                xD = oD * XD,
                qD = yD[xD + CD + 1],
                JD = yD[xD + CD + 1 + DD];
              DD: for (var KD = 0; KD < PD; ++KD) {
                var aD = QD[KD],
                  VD = wD[aD];
                if (VD === UD) break;
                var zD = oD * aD;
                if (!(JD < bD[zD + CD + 1] || bD[zD + CD + 1 + DD] < qD)) {
                  for (var jD = CD + 2; jD < DD; ++jD)
                    if (yD[xD + jD + DD] < bD[zD + jD] || bD[zD + jD + DD] < yD[xD + jD]) continue DD;
                  var lD = cD(VD, UD);
                  if (void 0 !== lD) return lD
                }
              }
            }
          } else {
            for (XD = HD - fD, KD = PD - 1; KD >= 0; --KD)
              if (QD[KD] === XD) {
                for (jD = KD + 1; jD < PD; ++jD) QD[jD - 1] = QD[jD];
                break
              }-- PD
          }
        }
      }
    };
    var ID = cD(37657),
      pD = cD(37661),
      iD = cD(37683),
      fD = 1 << 28,
      bD = 1024,
      QD = ID.mallocInt32(bD),
      wD = ID.mallocInt32(bD),
      SD = ID.mallocInt32(bD),
      BD = ID.mallocInt32(bD),
      yD = ID.mallocInt32(bD),
      MD = ID.mallocInt32(bD),
      tD = ID.mallocDouble(8192);

    function ZD(DD, CD, cD, ID) {
      var pD = CD[ID],
        iD = DD[cD - 1];
      DD[pD] = iD, CD[iD] = pD
    }

    function oD(DD, CD, cD, ID) {
      DD[cD] = ID, CD[ID] = cD
    }
  },
  37668: DD => {
    function CD(DD, cD, ID) {
      var pD = 0 | DD[ID];
      if (pD <= 0) return [];
      var iD, fD = new Array(pD);
      if (ID === DD.length - 1)
        for (iD = 0; iD < pD; ++iD) fD[iD] = cD;
      else
        for (iD = 0; iD < pD; ++iD) fD[iD] = CD(DD, cD, ID + 1);
      return fD
    }
    DD.exports = function(DD, cD) {
      switch ("undefined" === typeof cD && (cD = 0), typeof DD) {
        case "number":
          if (DD > 0) return function(DD, CD) {
            var cD, ID;
            for (cD = new Array(DD), ID = 0; ID < DD; ++ID) cD[ID] = CD;
            return cD
          }(0 | DD, cD);
          break;
        case "object":
          if ("number" === typeof DD.length) return CD(DD, cD, 0)
      }
      return []
    }
  },
  37610: (DD, CD, cD) => {
    DD.exports = function() {
      var DD = this;
      this.components = {}, this.comps = this.components;
      var CD = this.components,
        cD = 1,
        pD = {},
        iD = [],
        fD = [],
        bD = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function QD(DD, cD) {
        var ID = CD[cD],
          iD = pD[cD],
          fD = iD.hash[DD];
        fD && (iD.remove(DD), ID.Zx && (ID.multi ? (fD.forEach((CD => {
          CD && ID.Zx(DD, CD)
        })), fD.length = 0) : ID.Zx(DD, fD)), bD.removals.push(iD), wD())
      }

      function wD() {
        bD.timeout || (bD.timeout = !0, setTimeout(SD, 1))
      }

      function SD() {
        bD.timeout = !1, BD()
      }

      function BD() {
        bD.multiComps.length && function(DD) {
          for (var CD = 0; CD < DD.length; CD++) {
            var {
              entID: cD,
              data: ID
            } = DD[CD], pD = ID.hash[cD];
            if (pD) {
              for (var iD = 0; iD < pD.length; iD++) pD[iD] || (pD.splice(iD, 1), iD--);
              0 === pD.length && (ID.remove(cD), bD.removals.push(ID))
            }
          }
          DD.length = 0
        }(bD.multiComps), bD.removals.length && function(DD) {
          for (var CD = 0; CD < DD.length; CD++) {
            DD[CD].flush()
          }
          DD.length = 0
        }(bD.removals)
      }
      this.GZ = pD, this._systems = iD, this._renderSystems = fD, this.pR = function(CD) {
        var ID = cD++;
        return Array.isArray(CD) && CD.forEach((CD => DD.gJ(ID, CD))), ID
      }, this.deleteEntity = function(CD) {
        return Object.keys(pD).forEach((DD => {
          pD[DD].hash[CD] && QD(CD, DD)
        })), DD
      }, this.uDD = function(DD) {
        if (!DD) throw new Error("Missing component definition");
        var cD = DD.name;
        if (!cD) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof cD) throw new Error("Component name must be a string.");
        if ("" === cD) throw new Error("Component name must be a non-empty string.");
        if (pD[cD]) throw new Error(`Component ${cD} already exists.`);
        var bD = {};
        return bD.name = cD, bD.multi = !!DD.multi, bD.order = isNaN(DD.order) ? 99 : DD.order, bD.stateConstructor = DD.stateConstructor || null, bD.state = DD.state || {}, bD.Jm = DD.Jm || null, bD.Zx = DD.Zx || null, bD.system = DD.system || null, bD.Tm = DD.Tm || null, CD[cD] = bD, pD[cD] = new ID, pD[cD]._pendingMultiCleanup = !1, pD[cD]._multiCleanupIDs = bD.multi ? [] : null, bD.system && (iD.push(cD), iD.sort(((DD, cD) => CD[DD].order - CD[cD].order))), bD.Tm && (fD.push(cD), fD.sort(((DD, cD) => CD[DD].order - CD[cD].order))), cD
      }, this.overwriteComponent = function(DD, cD) {
        var ID = CD[DD];
        if (!ID) throw new Error(`Unknown component: ${DD}`);
        if (!cD) throw new Error("Missing component definition");
        if (ID.name !== cD.name) throw new Error("Overwriting component must use the same name property.");
        var bD = {};
        bD.name = DD, bD.multi = !!cD.multi, bD.order = isNaN(cD.order) ? 99 : cD.order, bD.state = cD.state || {}, bD.Jm = cD.Jm || null, bD.Zx = cD.Zx || null, bD.system = cD.system || null, bD.Tm = cD.Tm || null, CD[DD] = bD, pD[DD]._pendingMultiCleanup = !1, pD[DD]._multiCleanupIDs = bD.multi ? [] : null;
        var QD = iD.indexOf(DD);
        bD.system && QD < 0 && iD.push(DD), !bD.system && QD >= 0 && iD.splice(QD, 1), iD.sort(((DD, cD) => CD[DD].order - CD[cD].order));
        var wD = fD.indexOf(DD);
        bD.Tm && wD < 0 && fD.push(DD), !bD.Tm && wD >= 0 && fD.splice(wD, 1), fD.sort(((DD, cD) => CD[DD].order - CD[cD].order));
        var SD = bD.state;
        return this.vJ(DD).forEach((DD => {
          for (var CD in SD) CD in DD || (DD[CD] = SD[CD]);
          bD.Jm && bD.Jm(DD.NJ, DD)
        })), DD
      }, this.deleteComponent = function(cD) {
        var ID = pD[cD];
        if (!ID) throw new Error(`Unknown component: ${cD}`);
        ID.flush(), ID.list.forEach((DD => {
          DD && QD(DD.NJ || DD[0].NJ, cD)
        }));
        var bD = iD.indexOf(cD),
          wD = fD.indexOf(cD);
        return bD > -1 && iD.splice(bD, 1), wD > -1 && fD.splice(wD, 1), pD[cD].dispose(), delete pD[cD], delete CD[cD], DD
      }, this.gJ = function(DD, cD, ID) {
        var iD, fD = CD[cD],
          bD = pD[cD];
        if (!bD) throw new Error(`Unknown component: ${cD}.`);
        if (bD.hash[DD] && !fD.multi) throw new Error(`Entity ${DD} already has component: ${cD}.`);
        if (fD.stateConstructor) {
          if (!(iD = new fD.stateConstructor).hasOwnProperty("NJ")) throw new Error(`Component ${fD.name} stateConstructor type does not have property __id`);
          Object.assign(iD, fD.state, ID)
        } else iD = {
          NJ: DD,
          ...fD.state,
          ...ID
        };
        if (iD.NJ = DD, fD.multi) {
          var QD = bD.hash[DD];
          QD || (QD = [], bD.add(DD, QD)), QD.push(iD)
        } else bD.add(DD, iD);
        return fD.Jm && fD.Jm(DD, iD), this
      }, this.R7 = function(DD, CD) {
        var cD = pD[CD];
        if (!cD) throw new Error(`Unknown component: ${CD}.`);
        return !!cD.hash[DD]
      }, this.mJ = function(CD, cD) {
        if (!pD[cD]) throw new Error(`Unknown component: ${cD}.`);
        return QD(CD, cD), DD
      }, this.getState = function(DD, CD) {
        var cD = pD[CD];
        if (!cD) throw new Error(`Unknown component: ${CD}.`);
        return cD.hash[DD]
      }, this.vJ = function(DD) {
        var CD = pD[DD];
        if (!CD) throw new Error(`Unknown component: ${DD}.`);
        return BD(), CD.list
      }, this.xDD = function(DD) {
        if (!pD[DD]) throw new Error(`Unknown component: ${DD}.`);
        var CD = pD[DD].hash;
        return DD => CD[DD]
      }, this.zDD = function(DD) {
        if (!pD[DD]) throw new Error(`Unknown component: ${DD}.`);
        var CD = pD[DD].hash;
        return DD => !!CD[DD]
      }, this.wy = function(cD) {
        BD();
        for (var ID = 0; ID < iD.length; ID++) {
          var fD = iD[ID],
            bD = CD[fD],
            QD = pD[fD];
          bD.system(cD, QD.list), BD()
        }
        return DD
      }, this.render = function(cD) {
        BD();
        for (var ID = 0; ID < fD.length; ID++) {
          var iD = fD[ID],
            bD = CD[iD],
            QD = pD[iD];
          bD.Tm(cD, QD.list), BD()
        }
        return DD
      }, this.removeMultiComponent = function(cD, ID, iD) {
        var fD = CD[ID],
          QD = pD[ID];
        if (!QD) throw new Error(`Unknown component: ${ID}.`);
        if (!fD.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(DD, CD, cD, ID) {
          var pD = cD.hash[DD];
          if (pD) {
            var iD = pD[ID];
            iD && (pD[ID] = null, CD.Zx && CD.Zx(DD, iD), bD.multiComps.push({
              entID: DD,
              data: cD
            }), wD())
          }
        }(cD, fD, QD, iD), DD
      }
    };
    var ID = cD(37617)
  },
  37617: DD => {
    function CD(DD, CD) {
      var cD = DD._map[CD];
      if (delete DD.hash[CD], delete DD._map[CD], cD === DD.list.length - 1) DD.list.pop(), DD._idList.pop();
      else {
        var ID = DD.list.pop();
        DD.list[cD] = ID;
        var pD = DD._idList.pop();
        DD._idList[cD] = pD, DD._map[pD] = cD
      }
    }
    DD.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(DD, CD) {
        if ("number" === typeof this._map[DD]) {
          var cD = this._map[DD];
          this.hash[DD] = CD, this.list[cD] = CD, this._idList[cD] = DD
        } else this._map[DD] = this.list.length, this.hash[DD] = CD, this.list.push(CD), this._idList.push(DD)
      }
      remove(DD) {
        var CD = this._map[DD];
        this.hash[DD] = null, this.list[CD] = null, this._pendingRemovals.push(DD)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var DD = 0; DD < this._pendingRemovals.length; DD++) {
          var cD = this._pendingRemovals[DD];
          null === this.hash[cD] && CD(this, cD)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  37098: DD => {
    DD.exports = function(DD) {
      for (var CD = new Array(DD), cD = 0; cD < DD; ++cD) CD[cD] = cD;
      return CD
    }
  },
  37102: DD => {
    function CD(DD) {
      return !!DD.constructor && "function" === typeof DD.constructor.isBuffer && DD.constructor.isBuffer(DD)
    }
    DD.exports = function(DD) {
      return null != DD && (CD(DD) || function(DD) {
        return "function" === typeof DD.readFloatLE && "function" === typeof DD.slice && CD(DD.slice(0, 0))
      }(DD) || !!DD._isBuffer)
    }
  },
  37439: (DD, CD, cD) => {
    DD = cD.nmd(DD);
    var ID = "__lodash_hash_undefined__",
      pD = 9007199254740991,
      iD = "[object Arguments]",
      fD = "[object Boolean]",
      bD = "[object Date]",
      QD = "[object Function]",
      wD = "[object GeneratorFunction]",
      SD = "[object Map]",
      BD = "[object Number]",
      yD = "[object Object]",
      MD = "[object Promise]",
      tD = "[object RegExp]",
      ZD = "[object Set]",
      oD = "[object String]",
      vD = "[object Symbol]",
      ND = "[object WeakMap]",
      gD = "[object ArrayBuffer]",
      XD = "[object DataView]",
      mD = "[object Float32Array]",
      nD = "[object Float64Array]",
      OD = "[object Int8Array]",
      PD = "[object Int16Array]",
      HD = "[object Int32Array]",
      UD = "[object Uint8Array]",
      xD = "[object Uint8ClampedArray]",
      qD = "[object Uint16Array]",
      JD = "[object Uint32Array]",
      KD = /\w*$/,
      aD = /^\[object .+?Constructor\]$/,
      VD = /^(?:0|[1-9]\d*)$/,
      zD = {};
    zD[iD] = zD["[object Array]"] = zD[gD] = zD[XD] = zD[fD] = zD[bD] = zD[mD] = zD[nD] = zD[OD] = zD[PD] = zD[HD] = zD[SD] = zD[BD] = zD[yD] = zD[tD] = zD[ZD] = zD[oD] = zD[vD] = zD[UD] = zD[xD] = zD[qD] = zD[JD] = !0, zD["[object Error]"] = zD[QD] = zD[ND] = !1;
    var jD = "object" == typeof cD.g && cD.g && cD.g.Object === Object && cD.g,
      lD = "object" == typeof self && self && self.Object === Object && self,
      LD = jD || lD || Function("return this")(),
      TD = CD && !CD.nodeType && CD,
      GD = TD && DD && !DD.nodeType && DD,
      RD = GD && GD.exports === TD;

    function kD(DD, CD) {
      return DD.set(CD[0], CD[1]), DD
    }

    function dD(DD, CD) {
      return DD.add(CD), DD
    }

    function YD(DD, CD, cD, ID) {
      var pD = -1,
        iD = DD ? DD.length : 0;
      for (ID && iD && (cD = DD[++pD]); ++pD < iD;) cD = CD(cD, DD[pD], pD, DD);
      return cD
    }

    function WD(DD) {
      var CD = !1;
      if (null != DD && "function" != typeof DD.toString) try {
        CD = !!(DD + "")
      } catch (cD) {}
      return CD
    }

    function sD(DD) {
      var CD = -1,
        cD = Array(DD.size);
      return DD.forEach((function(DD, ID) {
        cD[++CD] = [ID, DD]
      })), cD
    }

    function ED(DD, CD) {
      return function(cD) {
        return DD(CD(cD))
      }
    }

    function eD(DD) {
      var CD = -1,
        cD = Array(DD.size);
      return DD.forEach((function(DD) {
        cD[++CD] = DD
      })), cD
    }
    var uD = Array.prototype,
      hD = Function.prototype,
      rD = Object.prototype,
      AD = LD["__core-js_shared__"],
      FD = function() {
        var DD = /[^.]+$/.exec(AD && AD.keys && AD.keys.IE_PROTO || "");
        return DD ? "Symbol(src)_1." + DD : ""
      }(),
      DC = hD.toString,
      CC = rD.hasOwnProperty,
      cC = rD.toString,
      IC = RegExp("^" + DC.call(CC).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      pC = RD ? LD.lt : void 0,
      iC = LD.Symbol,
      fC = LD.Uint8Array,
      bC = ED(Object.getPrototypeOf, Object),
      QC = Object.create,
      wC = rD.propertyIsEnumerable,
      SC = uD.splice,
      BC = Object.getOwnPropertySymbols,
      yC = pC ? pC.isBuffer : void 0,
      MC = ED(Object.keys, Object),
      tC = RC(LD, "DataView"),
      ZC = RC(LD, "Map"),
      oC = RC(LD, "Promise"),
      vC = RC(LD, "Set"),
      NC = RC(LD, "WeakMap"),
      gC = RC(Object, "create"),
      XC = sC(tC),
      mC = sC(ZC),
      nC = sC(oC),
      OC = sC(vC),
      PC = sC(NC),
      HC = iC ? iC.prototype : void 0,
      UC = HC ? HC.valueOf : void 0;

    function xC(DD) {
      var CD = -1,
        cD = DD ? DD.length : 0;
      for (this.clear(); ++CD < cD;) {
        var ID = DD[CD];
        this.set(ID[0], ID[1])
      }
    }

    function qC(DD) {
      var CD = -1,
        cD = DD ? DD.length : 0;
      for (this.clear(); ++CD < cD;) {
        var ID = DD[CD];
        this.set(ID[0], ID[1])
      }
    }

    function JC(DD) {
      var CD = -1,
        cD = DD ? DD.length : 0;
      for (this.clear(); ++CD < cD;) {
        var ID = DD[CD];
        this.set(ID[0], ID[1])
      }
    }

    function KC(DD) {
      this.__data__ = new qC(DD)
    }

    function aC(DD, CD) {
      var cD = eC(DD) || function(DD) {
          return function(DD) {
            return function(DD) {
              return !!DD && "object" == typeof DD
            }(DD) && uC(DD)
          }(DD) && CC.call(DD, "callee") && (!wC.call(DD, "callee") || cC.call(DD) == iD)
        }(DD) ? function(DD, CD) {
          for (var cD = -1, ID = Array(DD); ++cD < DD;) ID[cD] = CD(cD);
          return ID
        }(DD.length, String) : [],
        ID = cD.length,
        pD = !!ID;
      for (var fD in DD) !CD && !CC.call(DD, fD) || pD && ("length" == fD || YC(fD, ID)) || cD.push(fD);
      return cD
    }

    function VC(DD, CD, cD) {
      var ID = DD[CD];
      CC.call(DD, CD) && EC(ID, cD) && (void 0 !== cD || CD in DD) || (DD[CD] = cD)
    }

    function zC(DD, CD) {
      for (var cD = DD.length; cD--;)
        if (EC(DD[cD][0], CD)) return cD;
      return -1
    }

    function jC(DD, CD, cD, ID, pD, MD, ND) {
      var aD;
      if (ID && (aD = MD ? ID(DD, pD, MD, ND) : ID(DD)), void 0 !== aD) return aD;
      if (!AC(DD)) return DD;
      var VD = eC(DD);
      if (VD) {
        if (aD = function(DD) {
            var CD = DD.length,
              cD = DD.constructor(CD);
            CD && "string" == typeof DD[0] && CC.call(DD, "index") && (cD.index = DD.index, cD.input = DD.input);
            return cD
          }(DD), !CD) return function(DD, CD) {
          var cD = -1,
            ID = DD.length;
          CD || (CD = Array(ID));
          for (; ++cD < ID;) CD[cD] = DD[cD];
          return CD
        }(DD, aD)
      } else {
        var jD = dC(DD),
          lD = jD == QD || jD == wD;
        if (hC(DD)) return function(DD, CD) {
          if (CD) return DD.slice();
          var cD = new DD.constructor(DD.length);
          return DD.copy(cD), cD
        }(DD, CD);
        if (jD == yD || jD == iD || lD && !MD) {
          if (WD(DD)) return MD ? DD : {};
          if (aD = function(DD) {
              return "function" != typeof DD.constructor || WC(DD) ? {} : (CD = bC(DD), AC(CD) ? QC(CD) : {});
              var CD
            }(lD ? {} : DD), !CD) return function(DD, CD) {
            return TC(DD, kC(DD), CD)
          }(DD, function(DD, CD) {
            return DD && TC(CD, FC(CD), DD)
          }(aD, DD))
        } else {
          if (!zD[jD]) return MD ? DD : {};
          aD = function(DD, CD, cD, ID) {
            var pD = DD.constructor;
            switch (CD) {
              case gD:
                return LC(DD);
              case fD:
              case bD:
                return new pD(+DD);
              case XD:
                return function(DD, CD) {
                  var cD = CD ? LC(DD.buffer) : DD.buffer;
                  return new DD.constructor(cD, DD.byteOffset, DD.byteLength)
                }(DD, ID);
              case mD:
              case nD:
              case OD:
              case PD:
              case HD:
              case UD:
              case xD:
              case qD:
              case JD:
                return function(DD, CD) {
                  var cD = CD ? LC(DD.buffer) : DD.buffer;
                  return new DD.constructor(cD, DD.byteOffset, DD.length)
                }(DD, ID);
              case SD:
                return function(DD, CD, cD) {
                  var ID = CD ? cD(sD(DD), !0) : sD(DD);
                  return YD(ID, kD, new DD.constructor)
                }(DD, ID, cD);
              case BD:
              case oD:
                return new pD(DD);
              case tD:
                return function(DD) {
                  var CD = new DD.constructor(DD.source, KD.exec(DD));
                  return CD.lastIndex = DD.lastIndex, CD
                }(DD);
              case ZD:
                return function(DD, CD, cD) {
                  var ID = CD ? cD(eD(DD), !0) : eD(DD);
                  return YD(ID, dD, new DD.constructor)
                }(DD, ID, cD);
              case vD:
                return iD = DD, UC ? Object(UC.call(iD)) : {}
            }
            var iD
          }(DD, jD, jC, CD)
        }
      }
      ND || (ND = new KC);
      var LD = ND.get(DD);
      if (LD) return LD;
      if (ND.set(DD, aD), !VD) var TD = cD ? function(DD) {
        return function(DD, CD, cD) {
          var ID = CD(DD);
          return eC(DD) ? ID : function(DD, CD) {
            for (var cD = -1, ID = CD.length, pD = DD.length; ++cD < ID;) DD[pD + cD] = CD[cD];
            return DD
          }(ID, cD(DD))
        }(DD, FC, kC)
      }(DD) : FC(DD);
      return function(DD, CD) {
        for (var cD = -1, ID = DD ? DD.length : 0; ++cD < ID && !1 !== CD(DD[cD], cD, DD););
      }(TD || DD, (function(pD, iD) {
        TD && (pD = DD[iD = pD]), VC(aD, iD, jC(pD, CD, cD, ID, iD, DD, ND))
      })), aD
    }

    function lC(DD) {
      return !(!AC(DD) || (CD = DD, FD && FD in CD)) && (rC(DD) || WD(DD) ? IC : aD).test(sC(DD));
      var CD
    }

    function LC(DD) {
      var CD = new DD.constructor(DD.byteLength);
      return new fC(CD).set(new fC(DD)), CD
    }

    function TC(DD, CD, cD, ID) {
      cD || (cD = {});
      for (var pD = -1, iD = CD.length; ++pD < iD;) {
        var fD = CD[pD],
          bD = ID ? ID(cD[fD], DD[fD], fD, cD, DD) : void 0;
        VC(cD, fD, void 0 === bD ? DD[fD] : bD)
      }
      return cD
    }

    function GC(DD, CD) {
      var cD = DD.__data__;
      return function(DD) {
        var CD = typeof DD;
        return "string" == CD || "number" == CD || "symbol" == CD || "boolean" == CD ? "__proto__" !== DD : null === DD
      }(CD) ? cD["string" == typeof CD ? "string" : "hash"] : cD.map
    }

    function RC(DD, CD) {
      var cD = function(DD, CD) {
        return null == DD ? void 0 : DD[CD]
      }(DD, CD);
      return lC(cD) ? cD : void 0
    }
    xC.prototype.clear = function() {
      this.__data__ = gC ? gC(null) : {}
    }, xC.prototype.delete = function(DD) {
      return this.has(DD) && delete this.__data__[DD]
    }, xC.prototype.get = function(DD) {
      var CD = this.__data__;
      if (gC) {
        var cD = CD[DD];
        return cD === ID ? void 0 : cD
      }
      return CC.call(CD, DD) ? CD[DD] : void 0
    }, xC.prototype.has = function(DD) {
      var CD = this.__data__;
      return gC ? void 0 !== CD[DD] : CC.call(CD, DD)
    }, xC.prototype.set = function(DD, CD) {
      return this.__data__[DD] = gC && void 0 === CD ? ID : CD, this
    }, qC.prototype.clear = function() {
      this.__data__ = []
    }, qC.prototype.delete = function(DD) {
      var CD = this.__data__,
        cD = zC(CD, DD);
      return !(cD < 0) && (cD == CD.length - 1 ? CD.pop() : SC.call(CD, cD, 1), !0)
    }, qC.prototype.get = function(DD) {
      var CD = this.__data__,
        cD = zC(CD, DD);
      return cD < 0 ? void 0 : CD[cD][1]
    }, qC.prototype.has = function(DD) {
      return zC(this.__data__, DD) > -1
    }, qC.prototype.set = function(DD, CD) {
      var cD = this.__data__,
        ID = zC(cD, DD);
      return ID < 0 ? cD.push([DD, CD]) : cD[ID][1] = CD, this
    }, JC.prototype.clear = function() {
      this.__data__ = {
        hash: new xC,
        map: new(ZC || qC),
        string: new xC
      }
    }, JC.prototype.delete = function(DD) {
      return GC(this, DD).delete(DD)
    }, JC.prototype.get = function(DD) {
      return GC(this, DD).get(DD)
    }, JC.prototype.has = function(DD) {
      return GC(this, DD).has(DD)
    }, JC.prototype.set = function(DD, CD) {
      return GC(this, DD).set(DD, CD), this
    }, KC.prototype.clear = function() {
      this.__data__ = new qC
    }, KC.prototype.delete = function(DD) {
      return this.__data__.delete(DD)
    }, KC.prototype.get = function(DD) {
      return this.__data__.get(DD)
    }, KC.prototype.has = function(DD) {
      return this.__data__.has(DD)
    }, KC.prototype.set = function(DD, CD) {
      var cD = this.__data__;
      if (cD instanceof qC) {
        var ID = cD.__data__;
        if (!ZC || ID.length < 199) return ID.push([DD, CD]), this;
        cD = this.__data__ = new JC(ID)
      }
      return cD.set(DD, CD), this
    };
    var kC = BC ? ED(BC, Object) : function() {
        return []
      },
      dC = function(DD) {
        return cC.call(DD)
      };

    function YC(DD, CD) {
      return !!(CD = null == CD ? pD : CD) && ("number" == typeof DD || VD.test(DD)) && DD > -1 && DD % 1 == 0 && DD < CD
    }

    function WC(DD) {
      var CD = DD && DD.constructor;
      return DD === ("function" == typeof CD && CD.prototype || rD)
    }

    function sC(DD) {
      if (null != DD) {
        try {
          return DC.call(DD)
        } catch (CD) {}
        try {
          return DD + ""
        } catch (CD) {}
      }
      return ""
    }

    function EC(DD, CD) {
      return DD === CD || DD !== DD && CD !== CD
    }(tC && dC(new tC(new ArrayBuffer(1))) != XD || ZC && dC(new ZC) != SD || oC && dC(oC.resolve()) != MD || vC && dC(new vC) != ZD || NC && dC(new NC) != ND) && (dC = function(DD) {
      var CD = cC.call(DD),
        cD = CD == yD ? DD.constructor : void 0,
        ID = cD ? sC(cD) : void 0;
      if (ID) switch (ID) {
        case XC:
          return XD;
        case mC:
          return SD;
        case nC:
          return MD;
        case OC:
          return ZD;
        case PC:
          return ND
      }
      return CD
    });
    var eC = Array.isArray;

    function uC(DD) {
      return null != DD && function(DD) {
        return "number" == typeof DD && DD > -1 && DD % 1 == 0 && DD <= pD
      }(DD.length) && !rC(DD)
    }
    var hC = yC || function() {
      return !1
    };

    function rC(DD) {
      var CD = AC(DD) ? cC.call(DD) : "";
      return CD == QD || CD == wD
    }

    function AC(DD) {
      var CD = typeof DD;
      return !!DD && ("object" == CD || "function" == CD)
    }

    function FC(DD) {
      return uC(DD) ? aC(DD) : function(DD) {
        if (!WC(DD)) return MC(DD);
        var CD = [];
        for (var cD in Object(DD)) CC.call(DD, cD) && "constructor" != cD && CD.push(cD);
        return CD
      }(DD)
    }
    DD.exports = function(DD) {
      return jC(DD, !0, !0)
    }
  },
  37092: (DD, CD, cD) => {
    var ID = cD(37098),
      pD = cD(37102),
      iD = "undefined" !== typeof Float64Array;

    function fD(DD, CD) {
      return DD[0] - CD[0]
    }

    function bD() {
      var DD, CD = this.stride,
        cD = new Array(CD.length);
      for (DD = 0; DD < cD.length; ++DD) cD[DD] = [Math.abs(CD[DD]), DD];
      cD.sort(fD);
      var ID = new Array(cD.length);
      for (DD = 0; DD < ID.length; ++DD) ID[DD] = cD[DD][1];
      return ID
    }

    function QD(DD, CD) {
      var cD = ["View", CD, "d", DD].join("");
      CD < 0 && (cD = "View_Nil" + DD);
      var pD = "generic" === DD;
      if (-1 === CD) {
        var iD = "function " + cD + "(a){this.data=a;};var proto=" + cD + ".prototype;proto.dtype='" + DD + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + cD + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + cD + "(a){return new " + cD + "(a);}";
        return new Function(iD)()
      }
      if (0 === CD) {
        iD = "function " + cD + "(a,d) {this.data = a;this.offset = d};var proto=" + cD + ".prototype;proto.dtype='" + DD + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + cD + "_copy() {return new " + cD + "(this.data,this.offset)};proto.pick=function " + cD + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + cD + "_get(){return " + (pD ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + cD + "_set(v){return " + (pD ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + cD + "(a,b,c,d){return new " + cD + "(a,d)}";
        return new Function("TrivialArray", iD)(wD[DD][0])
      }
      iD = ["'use strict'"];
      var fD = ID(CD),
        QD = fD.map((function(DD) {
          return "i" + DD
        })),
        SD = "this.offset+" + fD.map((function(DD) {
          return "this.stride[" + DD + "]*i" + DD
        })).join("+"),
        BD = fD.map((function(DD) {
          return "b" + DD
        })).join(","),
        yD = fD.map((function(DD) {
          return "c" + DD
        })).join(",");
      iD.push("function " + cD + "(a," + BD + "," + yD + ",d){this.data=a", "this.shape=[" + BD + "]", "this.stride=[" + yD + "]", "this.offset=d|0}", "var proto=" + cD + ".prototype", "proto.dtype='" + DD + "'", "proto.dimension=" + CD), iD.push("Object.defineProperty(proto,'size',{get:function " + cD + "_size(){return " + fD.map((function(DD) {
        return "this.shape[" + DD + "]"
      })).join("*"), "}})"), 1 === CD ? iD.push("proto.order=[0]") : (iD.push("Object.defineProperty(proto,'order',{get:"), CD < 4 ? (iD.push("function " + cD + "_order(){"), 2 === CD ? iD.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === CD && iD.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : iD.push("ORDER})")), iD.push("proto.set=function " + cD + "_set(" + QD.join(",") + ",v){"), pD ? iD.push("return this.data.set(" + SD + ",v)}") : iD.push("return this.data[" + SD + "]=v}"), iD.push("proto.get=function " + cD + "_get(" + QD.join(",") + "){"), pD ? iD.push("return this.data.get(" + SD + ")}") : iD.push("return this.data[" + SD + "]}"), iD.push("proto.index=function " + cD + "_index(", QD.join(), "){return " + SD + "}"), iD.push("proto.hi=function " + cD + "_hi(" + QD.join(",") + "){return new " + cD + "(this.data," + fD.map((function(DD) {
        return ["(typeof i", DD, "!=='number'||i", DD, "<0)?this.shape[", DD, "]:i", DD, "|0"].join("")
      })).join(",") + "," + fD.map((function(DD) {
        return "this.stride[" + DD + "]"
      })).join(",") + ",this.offset)}");
      var MD = fD.map((function(DD) {
          return "a" + DD + "=this.shape[" + DD + "]"
        })),
        tD = fD.map((function(DD) {
          return "c" + DD + "=this.stride[" + DD + "]"
        }));
      iD.push("proto.lo=function " + cD + "_lo(" + QD.join(",") + "){var b=this.offset,d=0," + MD.join(",") + "," + tD.join(","));
      for (var ZD = 0; ZD < CD; ++ZD) iD.push("if(typeof i" + ZD + "==='number'&&i" + ZD + ">=0){d=i" + ZD + "|0;b+=c" + ZD + "*d;a" + ZD + "-=d}");
      iD.push("return new " + cD + "(this.data," + fD.map((function(DD) {
        return "a" + DD
      })).join(",") + "," + fD.map((function(DD) {
        return "c" + DD
      })).join(",") + ",b)}"), iD.push("proto.step=function " + cD + "_step(" + QD.join(",") + "){var " + fD.map((function(DD) {
        return "a" + DD + "=this.shape[" + DD + "]"
      })).join(",") + "," + fD.map((function(DD) {
        return "b" + DD + "=this.stride[" + DD + "]"
      })).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
      for (ZD = 0; ZD < CD; ++ZD) iD.push("if(typeof i" + ZD + "==='number'){d=i" + ZD + "|0;if(d<0){c+=b" + ZD + "*(a" + ZD + "-1);a" + ZD + "=ceil(-a" + ZD + "/d)}else{a" + ZD + "=ceil(a" + ZD + "/d)}b" + ZD + "*=d}");
      iD.push("return new " + cD + "(this.data," + fD.map((function(DD) {
        return "a" + DD
      })).join(",") + "," + fD.map((function(DD) {
        return "b" + DD
      })).join(",") + ",c)}");
      var oD = new Array(CD),
        vD = new Array(CD);
      for (ZD = 0; ZD < CD; ++ZD) oD[ZD] = "a[i" + ZD + "]", vD[ZD] = "b[i" + ZD + "]";
      iD.push("proto.transpose=function " + cD + "_transpose(" + QD + "){" + QD.map((function(DD, CD) {
        return DD + "=(" + DD + "===undefined?" + CD + ":" + DD + "|0)"
      })).join(";"), "var a=this.shape,b=this.stride;return new " + cD + "(this.data," + oD.join(",") + "," + vD.join(",") + ",this.offset)}"), iD.push("proto.pick=function " + cD + "_pick(" + QD + "){var a=[],b=[],c=this.offset");
      for (ZD = 0; ZD < CD; ++ZD) iD.push("if(typeof i" + ZD + "==='number'&&i" + ZD + ">=0){c=(c+this.stride[" + ZD + "]*i" + ZD + ")|0}else{a.push(this.shape[" + ZD + "]);b.push(this.stride[" + ZD + "])}");
      return iD.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), iD.push("return function construct_" + cD + "(data,shape,stride,offset){return new " + cD + "(data," + fD.map((function(DD) {
        return "shape[" + DD + "]"
      })).join(",") + "," + fD.map((function(DD) {
        return "stride[" + DD + "]"
      })).join(",") + ",offset)}"), new Function("CTOR_LIST", "ORDER", iD.join("\n"))(wD[DD], bD)
    }
    var wD = {
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
    DD.exports = function(DD, CD, cD, ID) {
      if (void 0 === DD) return (0, wD.array[0])([]);
      "number" === typeof DD && (DD = [DD]), void 0 === CD && (CD = [DD.length]);
      var fD = CD.length;
      if (void 0 === cD) {
        cD = new Array(fD);
        for (var bD = fD - 1, SD = 1; bD >= 0; --bD) cD[bD] = SD, SD *= CD[bD]
      }
      if (void 0 === ID) {
        ID = 0;
        for (bD = 0; bD < fD; ++bD) cD[bD] < 0 && (ID -= (CD[bD] - 1) * cD[bD])
      }
      for (var BD = function(DD) {
          if (pD(DD)) return "buffer";
          if (iD) switch (Object.prototype.toString.call(DD)) {
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
          return Array.isArray(DD) ? "array" : "generic"
        }(DD), yD = wD[BD]; yD.length <= fD + 1;) yD.push(QD(BD, yD.length - 1));
      return (0, yD[fD + 1])(DD, CD, cD, ID)
    }
  },
  37823: DD => {
    function CD(DD, CD, cD) {
      for (var ID = DD.length, pD = -1 / 0, iD = 1 / 0, fD = 0; fD < ID; fD++) {
        var bD = (cD[0][fD] - DD[fD]) / CD[fD],
          QD = (cD[1][fD] - DD[fD]) / CD[fD];
        if (bD > QD) {
          var wD = bD;
          bD = QD, QD = wD
        }
        if (QD < pD || bD > iD) return 1 / 0;
        bD > pD && (pD = bD), QD < iD && (iD = QD)
      }
      return pD > iD ? 1 / 0 : pD
    }
    DD.exports = function(DD, cD, ID, pD) {
      var iD = CD(cD, ID, pD);
      if (iD === 1 / 0) DD = null;
      else {
        DD = DD || [];
        for (var fD = 0; fD < cD.length; fD++) DD[fD] = cD[fD] + ID[fD] * iD
      }
      return DD
    }, DD.exports.distance = CD
  },
  37119: (DD, CD, cD) => {
    var ID = cD(37127);

    function pD(DD) {
      for (var CD, cD, pD = 0, iD = DD.length, fD = 0; fD < DD.length;) {
        for (CD = DD[fD], cD = 0; fD < iD && DD[fD] === CD;) ++fD, ++cD;
        pD += ID.log2(cD) / 7 | 0, pD += ID.log2(CD >>> 0) / 7 | 0, pD += 2
      }
      return pD
    }
    CD.size = pD, CD.encode = function(DD, CD) {
      CD || (CD = new Uint8Array(pD(DD)));
      for (var cD, ID, iD = 0, fD = CD.length, bD = 0; bD < DD.length;) {
        for (cD = DD[bD], ID = 0; bD < DD.length && DD[bD] === cD;) ++bD, ++ID;
        for (; iD < fD && ID >= 128;) CD[iD++] = 128 + (127 & ID), ID >>>= 7;
        if (iD >= fD) throw new Error("RLE buffer overflow");
        for (CD[iD++] = ID, cD >>>= 0; iD < fD && cD >= 128;) CD[iD++] = 128 + (127 & cD), cD >>>= 7;
        if (iD >= fD) throw new Error("RLE buffer overflow");
        CD[iD++] = cD
      }
      return CD
    }, CD.decode = function(DD, CD) {
      for (var cD, ID, pD, iD, fD = CD.length, bD = DD.length, QD = 0, wD = 0; wD < bD;) {
        for (cD = 0, ID = 0; wD < bD && DD[wD] >= 128;) cD += (127 & DD[wD++]) << ID, ID += 7;
        if (cD += DD[wD++] << ID, wD >= bD) throw new Error("RLE buffer underrun");
        if (QD + cD > fD) throw new Error("Chunk buffer overflow");
        for (pD = 0, ID = 0; wD < bD && DD[wD] >= 128;) pD += (127 & DD[wD++]) << ID, ID += 7;
        if (wD >= bD) throw new Error("RLE buffer underrun");
        for (pD += DD[wD++] << ID, iD = 0; iD < cD; ++iD) CD[QD++] = pD
      }
      return CD
    }
  },
  37127: (DD, CD) => {
    function cD(DD) {
      var CD = 32;
      return (DD &= -DD) && CD--, 65535 & DD && (CD -= 16), 16711935 & DD && (CD -= 8), 252645135 & DD && (CD -= 4), 858993459 & DD && (CD -= 2), 1431655765 & DD && (CD -= 1), CD
    }
    CD.INT_BITS = 32, CD.INT_MAX = 2147483647, CD.INT_MIN = -1 << 31, CD.sign = function(DD) {
      return (DD > 0) - (DD < 0)
    }, CD.abs = function(DD) {
      var CD = DD >> 31;
      return (DD ^ CD) - CD
    }, CD.min = function(DD, CD) {
      return CD ^ (DD ^ CD) & -(DD < CD)
    }, CD.max = function(DD, CD) {
      return DD ^ (DD ^ CD) & -(DD < CD)
    }, CD.isPow2 = function(DD) {
      return !(DD & DD - 1) && !!DD
    }, CD.log2 = function(DD) {
      var CD, cD;
      return CD = (DD > 65535) << 4, CD |= cD = ((DD >>>= CD) > 255) << 3, CD |= cD = ((DD >>>= cD) > 15) << 2, (CD |= cD = ((DD >>>= cD) > 3) << 1) | (DD >>>= cD) >> 1
    }, CD.log10 = function(DD) {
      return DD >= 1e9 ? 9 : DD >= 1e8 ? 8 : DD >= 1e7 ? 7 : DD >= 1e6 ? 6 : DD >= 1e5 ? 5 : DD >= 1e4 ? 4 : DD >= 1e3 ? 3 : DD >= 100 ? 2 : DD >= 10 ? 1 : 0
    }, CD.popCount = function(DD) {
      return 16843009 * ((DD = (858993459 & (DD -= DD >>> 1 & 1431655765)) + (DD >>> 2 & 858993459)) + (DD >>> 4) & 252645135) >>> 24
    }, CD.countTrailingZeros = cD, CD.nextPow2 = function(DD) {
      return DD += 0 === DD, --DD, DD |= DD >>> 1, DD |= DD >>> 2, DD |= DD >>> 4, DD |= DD >>> 8, (DD |= DD >>> 16) + 1
    }, CD.prevPow2 = function(DD) {
      return DD |= DD >>> 1, DD |= DD >>> 2, DD |= DD >>> 4, DD |= DD >>> 8, (DD |= DD >>> 16) - (DD >>> 1)
    }, CD.parity = function(DD) {
      return DD ^= DD >>> 16, DD ^= DD >>> 8, DD ^= DD >>> 4, 27030 >>> (DD &= 15) & 1
    };
    var ID = new Array(256);
    ! function(DD) {
      for (var CD = 0; CD < 256; ++CD) {
        var cD = CD,
          ID = CD,
          pD = 7;
        for (cD >>>= 1; cD; cD >>>= 1) ID <<= 1, ID |= 1 & cD, --pD;
        DD[CD] = ID << pD & 255
      }
    }(ID), CD.reverse = function(DD) {
      return ID[255 & DD] << 24 | ID[DD >>> 8 & 255] << 16 | ID[DD >>> 16 & 255] << 8 | ID[DD >>> 24 & 255]
    }, CD.interleave2 = function(DD, CD) {
      return (DD = 1431655765 & ((DD = 858993459 & ((DD = 252645135 & ((DD = 16711935 & ((DD &= 65535) | DD << 8)) | DD << 4)) | DD << 2)) | DD << 1)) | (CD = 1431655765 & ((CD = 858993459 & ((CD = 252645135 & ((CD = 16711935 & ((CD &= 65535) | CD << 8)) | CD << 4)) | CD << 2)) | CD << 1)) << 1
    }, CD.deinterleave2 = function(DD, CD) {
      return (DD = 65535 & ((DD = 16711935 & ((DD = 252645135 & ((DD = 858993459 & ((DD = DD >>> CD & 1431655765) | DD >>> 1)) | DD >>> 2)) | DD >>> 4)) | DD >>> 16)) << 16 >> 16
    }, CD.interleave3 = function(DD, CD, cD) {
      return DD = 1227133513 & ((DD = 3272356035 & ((DD = 251719695 & ((DD = 4278190335 & ((DD &= 1023) | DD << 16)) | DD << 8)) | DD << 4)) | DD << 2), (DD |= (CD = 1227133513 & ((CD = 3272356035 & ((CD = 251719695 & ((CD = 4278190335 & ((CD &= 1023) | CD << 16)) | CD << 8)) | CD << 4)) | CD << 2)) << 1) | (cD = 1227133513 & ((cD = 3272356035 & ((cD = 251719695 & ((cD = 4278190335 & ((cD &= 1023) | cD << 16)) | cD << 8)) | cD << 4)) | cD << 2)) << 2
    }, CD.deinterleave3 = function(DD, CD) {
      return (DD = 1023 & ((DD = 4278190335 & ((DD = 251719695 & ((DD = 3272356035 & ((DD = DD >>> CD & 1227133513) | DD >>> 2)) | DD >>> 4)) | DD >>> 8)) | DD >>> 16)) << 22 >> 22
    }, CD.nextCombination = function(DD) {
      var CD = DD | DD - 1;
      return CD + 1 | (~CD & -~CD) - 1 >>> cD(DD) + 1
    }
  },
  36613: (DD, CD, cD) => {
    cD.d(CD, {
      Color3: () => ID.d,
      c: () => ID.e
    });
    var ID = cD(36622);
    (0, ID.h)()
  },
  37159: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD
    });
    var ID = cD(37167);
    class pD {
      static GetPlanes(DD) {
        const CD = [];
        for (let cD = 0; cD < 6; cD++) CD.push(new ID.c(0, 0, 0, 0));
        return pD.GetPlanesToRef(DD, CD), CD
      }
      static GetNearPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] + cD[2], CD.normal.y = cD[7] + cD[6], CD.normal.z = cD[11] + cD[10], CD.d = cD[15] + cD[14], CD.normalize()
      }
      static GetFarPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] - cD[2], CD.normal.y = cD[7] - cD[6], CD.normal.z = cD[11] - cD[10], CD.d = cD[15] - cD[14], CD.normalize()
      }
      static GetLeftPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] + cD[0], CD.normal.y = cD[7] + cD[4], CD.normal.z = cD[11] + cD[8], CD.d = cD[15] + cD[12], CD.normalize()
      }
      static GetRightPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] - cD[0], CD.normal.y = cD[7] - cD[4], CD.normal.z = cD[11] - cD[8], CD.d = cD[15] - cD[12], CD.normalize()
      }
      static GetTopPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] - cD[1], CD.normal.y = cD[7] - cD[5], CD.normal.z = cD[11] - cD[9], CD.d = cD[15] - cD[13], CD.normalize()
      }
      static GetBottomPlaneToRef(DD, CD) {
        const cD = DD.m;
        CD.normal.x = cD[3] + cD[1], CD.normal.y = cD[7] + cD[5], CD.normal.z = cD[11] + cD[9], CD.d = cD[15] + cD[13], CD.normalize()
      }
      static GetPlanesToRef(DD, CD) {
        pD.GetNearPlaneToRef(DD, CD[0]), pD.GetFarPlaneToRef(DD, CD[1]), pD.GetLeftPlaneToRef(DD, CD[2]), pD.GetRightPlaneToRef(DD, CD[3]), pD.GetTopPlaneToRef(DD, CD[4]), pD.GetBottomPlaneToRef(DD, CD[5])
      }
      static IsPointInFrustum(DD, CD) {
        for (let cD = 0; cD < 6; cD++)
          if (CD[cD].dotCoordinate(DD) < 0) return !1;
        return !0
      }
    }
  },
  37167: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => pD
    });
    var ID = cD(36446);
    class pD {
      constructor(DD, CD, cD, pD) {
        this.normal = new ID.p(DD, CD, cD), this.d = pD
      }
      XcD() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new pD(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let DD = this.normal.getHashCode();
        return DD = 397 * DD ^ this.d, DD
      }
      normalize() {
        const DD = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let CD = 0;
        return 0 !== DD && (CD = 1 / DD), this.normal.x *= CD, this.normal.y *= CD, this.normal.z *= CD, this.d *= CD, this
      }
      transform(DD) {
        const CD = pD._TmpMatrix;
        DD.invertToRef(CD);
        const cD = CD.m,
          ID = this.normal.x,
          iD = this.normal.y,
          fD = this.normal.z,
          bD = this.d,
          QD = ID * cD[0] + iD * cD[1] + fD * cD[2] + bD * cD[3],
          wD = ID * cD[4] + iD * cD[5] + fD * cD[6] + bD * cD[7],
          SD = ID * cD[8] + iD * cD[9] + fD * cD[10] + bD * cD[11],
          BD = ID * cD[12] + iD * cD[13] + fD * cD[14] + bD * cD[15];
        return new pD(QD, wD, SD, BD)
      }
      dotCoordinate(DD) {
        return this.normal.x * DD.x + this.normal.y * DD.y + this.normal.z * DD.z + this.d
      }
      copyFromPoints(DD, CD, cD) {
        const ID = CD.x - DD.x,
          pD = CD.y - DD.y,
          iD = CD.z - DD.z,
          fD = cD.x - DD.x,
          bD = cD.y - DD.y,
          QD = cD.z - DD.z,
          wD = pD * QD - iD * bD,
          SD = iD * fD - ID * QD,
          BD = ID * bD - pD * fD,
          yD = Math.sqrt(wD * wD + SD * SD + BD * BD);
        let MD;
        return MD = 0 !== yD ? 1 / yD : 0, this.normal.x = wD * MD, this.normal.y = SD * MD, this.normal.z = BD * MD, this.d = -(this.normal.x * DD.x + this.normal.y * DD.y + this.normal.z * DD.z), this
      }
      isFrontFacingTo(DD, CD) {
        return ID.p.Dot(this.normal, DD) <= CD
      }
      signedDistanceTo(DD) {
        return ID.p.Dot(DD, this.normal) + this.d
      }
      static FromArray(DD) {
        return new pD(DD[0], DD[1], DD[2], DD[3])
      }
      static FromPoints(DD, CD, cD) {
        const ID = new pD(0, 0, 0, 0);
        return ID.copyFromPoints(DD, CD, cD), ID
      }
      static FromPositionAndNormal(DD, CD) {
        const cD = new pD(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(DD, CD, cD)
      }
      static FromPositionAndNormalToRef(DD, CD, cD) {
        return cD.normal.YCD(CD), cD.normal.normalize(), cD.d = -DD.dot(cD.normal), cD
      }
      static SignedDistanceToPlaneFromPositionAndNormal(DD, CD, cD) {
        const pD = -(CD.x * DD.x + CD.y * DD.y + CD.z * DD.z);
        return ID.p.Dot(cD, CD) + pD
      }
    }
    pD._TmpMatrix = ID.d.Identity()
  },
  36440: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      Matrix: () => ID.d,
      Quaternion: () => ID.h,
      RegisterMathVector: () => ID.k,
      TmpVectors: () => ID.l,
      Vector2: () => ID.n,
      cZ: () => ID.p,
      Vector4: () => ID.s
    });
    var ID = cD(36446);
    (0, ID.k)()
  },
  37479: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => ID
    });
    class ID {
      constructor(DD, CD, cD, ID) {
        this.x = DD, this.y = CD, this.width = cD, this.height = ID
      }
      toGlobal(DD, CD) {
        return new ID(this.x * DD, this.y * CD, this.width * DD, this.height * CD)
      }
      toGlobalToRef(DD, CD, cD) {
        return cD.x = this.x * DD, cD.y = this.y * CD, cD.width = this.width * DD, cD.height = this.height * CD, this
      }
      clone() {
        return new ID(this.x, this.y, this.width, this.height)
      }
    }
  },
  37290: (DD, CD, cD) => {
    function ID() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (DD => {
        const CD = 16 * Math.random() | 0;
        return ("x" === DD ? CD : 3 & CD | 8).toString(16)
      }))
    }
    cD.d(CD, {
      d: () => ID
    })
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);