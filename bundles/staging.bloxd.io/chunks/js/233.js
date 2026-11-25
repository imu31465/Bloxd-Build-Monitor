/*! For license information please see wp3j0a.233.6cf7c570.chunk.js.LICENSE.txt */
export const id = 233;
export const ids = [233, 241];
export const modules = {
  38717: GG => {
    GG.exports = function(GG) {
      return null != GG && null != GG.constructor && "function" === typeof GG.constructor.isBuffer && GG.constructor.isBuffer(GG)
    }
  },
  38704: (GG, bG, ZG) => {
    var wG = ZG(38706),
      SG = ZG(38708),
      LG = ZG(38717);
    ZG.g.__TYPEDARRAY_POOL || (ZG.g.__TYPEDARRAY_POOL = {
      UINT8: SG([32, 0]),
      UINT16: SG([32, 0]),
      UINT32: SG([32, 0]),
      INT8: SG([32, 0]),
      INT16: SG([32, 0]),
      INT32: SG([32, 0]),
      FLOAT: SG([32, 0]),
      DOUBLE: SG([32, 0]),
      DATA: SG([32, 0]),
      UINT8C: SG([32, 0]),
      BUFFER: SG([32, 0])
    });
    var yG = "undefined" !== typeof Uint8ClampedArray,
      kG = ZG.g.__TYPEDARRAY_POOL;
    kG.UINT8C || (kG.UINT8C = SG([32, 0])), kG.BUFFER || (kG.BUFFER = SG([32, 0]));
    var UG = kG.DATA,
      YG = kG.BUFFER;

    function VG(GG) {
      if (GG) {
        var bG = GG.length || GG.byteLength,
          ZG = wG.log2(bG);
        UG[ZG].push(GG)
      }
    }

    function pG(GG) {
      GG = wG.nextPow2(GG);
      var bG = wG.log2(GG),
        ZG = UG[bG];
      return ZG.length > 0 ? ZG.pop() : new ArrayBuffer(GG)
    }

    function fG(GG) {
      return new Uint8Array(pG(GG), 0, GG)
    }

    function QG(GG) {
      return new Uint16Array(pG(2 * GG), 0, GG)
    }

    function KG(GG) {
      return new Uint32Array(pG(4 * GG), 0, GG)
    }

    function hG(GG) {
      return new Int8Array(pG(GG), 0, GG)
    }

    function dG(GG) {
      return new Int16Array(pG(2 * GG), 0, GG)
    }

    function JG(GG) {
      return new Int32Array(pG(4 * GG), 0, GG)
    }

    function rG(GG) {
      return new Float32Array(pG(4 * GG), 0, GG)
    }

    function zG(GG) {
      return new Float64Array(pG(8 * GG), 0, GG)
    }

    function EG(GG) {
      return yG ? new Uint8ClampedArray(pG(GG), 0, GG) : fG(GG)
    }

    function oG(GG) {
      return new DataView(pG(GG), 0, GG)
    }
    bG.free = function(GG) {
      if (LG(GG)) YG[wG.log2(GG.length)].push(GG);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(GG) && (GG = GG.buffer), !GG) return;
        var bG = GG.length || GG.byteLength,
          ZG = 0 | wG.log2(bG);
        UG[ZG].push(GG)
      }
    }, bG.freeUint8 = bG.freeUint16 = bG.freeUint32 = bG.freeInt8 = bG.freeInt16 = bG.freeInt32 = bG.freeFloat32 = bG.freeFloat = bG.freeFloat64 = bG.freeDouble = bG.freeUint8Clamped = bG.freeDataView = function(GG) {
      VG(GG.buffer)
    }, bG.freeArrayBuffer = VG, bG.freeBuffer = function(GG) {
      YG[wG.log2(GG.length)].push(GG)
    }, bG.malloc = function(GG, bG) {
      if (void 0 === bG || "arraybuffer" === bG) return pG(GG);
      switch (bG) {
        case "uint8":
          return fG(GG);
        case "uint16":
          return QG(GG);
        case "uint32":
          return KG(GG);
        case "int8":
          return hG(GG);
        case "int16":
          return dG(GG);
        case "int32":
          return JG(GG);
        case "float":
        case "float32":
          return rG(GG);
        case "double":
        case "float64":
          return zG(GG);
        case "uint8_clamped":
          return EG(GG);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return oG(GG);
        default:
          return null
      }
      return null
    }, bG.mallocArrayBuffer = pG, bG.mallocUint8 = fG, bG.mallocUint16 = QG, bG.mallocUint32 = KG, bG.mallocInt8 = hG, bG.mallocInt16 = dG, bG.mallocInt32 = JG, bG.mallocFloat32 = bG.mallocFloat = rG, bG.mallocFloat64 = bG.mallocDouble = zG, bG.mallocUint8Clamped = EG, bG.mallocDataView = oG, bG.clearCache = function() {
      for (var GG = 0; GG < 32; ++GG) kG.UINT8[GG].length = 0, kG.UINT16[GG].length = 0, kG.UINT32[GG].length = 0, kG.INT8[GG].length = 0, kG.INT16[GG].length = 0, kG.INT32[GG].length = 0, kG.FLOAT[GG].length = 0, kG.DOUBLE[GG].length = 0, kG.UINT8C[GG].length = 0, UG[GG].length = 0, YG[GG].length = 0
    }
  },
  38706: (GG, bG) => {
    function ZG(GG) {
      var bG = 32;
      return (GG &= -GG) && bG--, 65535 & GG && (bG -= 16), 16711935 & GG && (bG -= 8), 252645135 & GG && (bG -= 4), 858993459 & GG && (bG -= 2), 1431655765 & GG && (bG -= 1), bG
    }
    bG.INT_BITS = 32, bG.INT_MAX = 2147483647, bG.INT_MIN = -1 << 31, bG.sign = function(GG) {
      return (GG > 0) - (GG < 0)
    }, bG.abs = function(GG) {
      var bG = GG >> 31;
      return (GG ^ bG) - bG
    }, bG.min = function(GG, bG) {
      return bG ^ (GG ^ bG) & -(GG < bG)
    }, bG.max = function(GG, bG) {
      return GG ^ (GG ^ bG) & -(GG < bG)
    }, bG.isPow2 = function(GG) {
      return !(GG & GG - 1) && !!GG
    }, bG.log2 = function(GG) {
      var bG, ZG;
      return bG = (GG > 65535) << 4, bG |= ZG = ((GG >>>= bG) > 255) << 3, bG |= ZG = ((GG >>>= ZG) > 15) << 2, (bG |= ZG = ((GG >>>= ZG) > 3) << 1) | (GG >>>= ZG) >> 1
    }, bG.log10 = function(GG) {
      return GG >= 1e9 ? 9 : GG >= 1e8 ? 8 : GG >= 1e7 ? 7 : GG >= 1e6 ? 6 : GG >= 1e5 ? 5 : GG >= 1e4 ? 4 : GG >= 1e3 ? 3 : GG >= 100 ? 2 : GG >= 10 ? 1 : 0
    }, bG.popCount = function(GG) {
      return 16843009 * ((GG = (858993459 & (GG -= GG >>> 1 & 1431655765)) + (GG >>> 2 & 858993459)) + (GG >>> 4) & 252645135) >>> 24
    }, bG.countTrailingZeros = ZG, bG.nextPow2 = function(GG) {
      return GG += 0 === GG, --GG, GG |= GG >>> 1, GG |= GG >>> 2, GG |= GG >>> 4, GG |= GG >>> 8, (GG |= GG >>> 16) + 1
    }, bG.prevPow2 = function(GG) {
      return GG |= GG >>> 1, GG |= GG >>> 2, GG |= GG >>> 4, GG |= GG >>> 8, (GG |= GG >>> 16) - (GG >>> 1)
    }, bG.parity = function(GG) {
      return GG ^= GG >>> 16, GG ^= GG >>> 8, GG ^= GG >>> 4, 27030 >>> (GG &= 15) & 1
    };
    var wG = new Array(256);
    ! function(GG) {
      for (var bG = 0; bG < 256; ++bG) {
        var ZG = bG,
          wG = bG,
          SG = 7;
        for (ZG >>>= 1; ZG; ZG >>>= 1) wG <<= 1, wG |= 1 & ZG, --SG;
        GG[bG] = wG << SG & 255
      }
    }(wG), bG.reverse = function(GG) {
      return wG[255 & GG] << 24 | wG[GG >>> 8 & 255] << 16 | wG[GG >>> 16 & 255] << 8 | wG[GG >>> 24 & 255]
    }, bG.interleave2 = function(GG, bG) {
      return (GG = 1431655765 & ((GG = 858993459 & ((GG = 252645135 & ((GG = 16711935 & ((GG &= 65535) | GG << 8)) | GG << 4)) | GG << 2)) | GG << 1)) | (bG = 1431655765 & ((bG = 858993459 & ((bG = 252645135 & ((bG = 16711935 & ((bG &= 65535) | bG << 8)) | bG << 4)) | bG << 2)) | bG << 1)) << 1
    }, bG.deinterleave2 = function(GG, bG) {
      return (GG = 65535 & ((GG = 16711935 & ((GG = 252645135 & ((GG = 858993459 & ((GG = GG >>> bG & 1431655765) | GG >>> 1)) | GG >>> 2)) | GG >>> 4)) | GG >>> 16)) << 16 >> 16
    }, bG.interleave3 = function(GG, bG, ZG) {
      return GG = 1227133513 & ((GG = 3272356035 & ((GG = 251719695 & ((GG = 4278190335 & ((GG &= 1023) | GG << 16)) | GG << 8)) | GG << 4)) | GG << 2), (GG |= (bG = 1227133513 & ((bG = 3272356035 & ((bG = 251719695 & ((bG = 4278190335 & ((bG &= 1023) | bG << 16)) | bG << 8)) | bG << 4)) | bG << 2)) << 1) | (ZG = 1227133513 & ((ZG = 3272356035 & ((ZG = 251719695 & ((ZG = 4278190335 & ((ZG &= 1023) | ZG << 16)) | ZG << 8)) | ZG << 4)) | ZG << 2)) << 2
    }, bG.deinterleave3 = function(GG, bG) {
      return (GG = 1023 & ((GG = 4278190335 & ((GG = 251719695 & ((GG = 3272356035 & ((GG = GG >>> bG & 1227133513) | GG >>> 2)) | GG >>> 4)) | GG >>> 8)) | GG >>> 16)) << 22 >> 22
    }, bG.nextCombination = function(GG) {
      var bG = GG | GG - 1;
      return bG + 1 | (~bG & -~bG) - 1 >>> ZG(GG) + 1
    }
  },
  38697: (GG, bG, ZG) => {
    GG.exports = function(GG, bG, ZG) {
      switch (arguments.length) {
        case 1:
          return wG = [], YG(SG = GG, SG, VG, !0), wG;
        case 2:
          return "function" === typeof bG ? YG(GG, GG, bG, !0) : function(GG, bG) {
            return wG = [], YG(GG, bG, VG, !1), wG
          }(GG, bG);
        case 3:
          return YG(GG, bG, ZG, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var SG
    };
    var wG, SG = ZG(38704),
      LG = ZG(38719),
      yG = ZG(38727);

    function kG(GG, bG) {
      for (var ZG = 0; ZG < GG; ++ZG)
        if (!(bG[ZG] <= bG[ZG + GG])) return !0;
      return !1
    }

    function UG(GG, bG, ZG, wG) {
      for (var SG = 0, LG = 0, yG = 0, UG = GG.length; yG < UG; ++yG) {
        var YG = GG[yG];
        if (!kG(bG, YG)) {
          for (var VG = 0; VG < 2 * bG; ++VG) ZG[SG++] = YG[VG];
          wG[LG++] = yG
        }
      }
      return LG
    }

    function YG(GG, bG, ZG, wG) {
      var kG = GG.length,
        YG = bG.length;
      if (!(kG <= 0 || YG <= 0)) {
        var VG = GG[0].length >>> 1;
        if (!(VG <= 0)) {
          var pG, fG = SG.mallocDouble(2 * VG * kG),
            QG = SG.mallocInt32(kG);
          if ((kG = UG(GG, VG, fG, QG)) > 0) {
            if (1 === VG && wG) LG.init(kG), pG = LG.sweepComplete(VG, ZG, 0, kG, fG, QG, 0, kG, fG, QG);
            else {
              var KG = SG.mallocDouble(2 * VG * YG),
                hG = SG.mallocInt32(YG);
              (YG = UG(bG, VG, KG, hG)) > 0 && (LG.init(kG + YG), pG = 1 === VG ? LG.sweepBipartite(VG, ZG, 0, kG, fG, QG, 0, YG, KG, hG) : yG(VG, ZG, wG, kG, fG, QG, YG, KG, hG), SG.free(KG), SG.free(hG))
            }
            SG.free(fG), SG.free(QG)
          }
          return pG
        }
      }
    }

    function VG(GG, bG) {
      wG.push([GG, bG])
    }
  },
  38736: (GG, bG) => {
    var ZG = "d",
      wG = "ax",
      SG = "fp",
      LG = "es",
      yG = "rs",
      kG = "re",
      UG = "rb",
      YG = "bs",
      VG = "be",
      pG = "bb",
      fG = [ZG, wG, "vv", yG, kG, UG, "ri", YG, VG, pG, "bi"];

    function QG(GG) {
      var bG = "bruteForce" + (GG ? "Full" : "Partial"),
        wG = [],
        yG = fG.slice();
      GG || yG.splice(3, 0, SG);
      var kG = ["function " + bG + "(" + yG.join() + "){"];

      function UG(bG, SG) {
        var yG = function(GG, bG, wG) {
          var SG = "bruteForce" + (GG ? "Red" : "Blue") + (bG ? "Flip" : "") + (wG ? "Full" : ""),
            yG = ["function ", SG, "(", fG.join(), "){", "var ", LG, "=2*", ZG, ";"],
            kG = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            UG = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (wG ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return GG ? yG.push(kG, "Q", ":", UG) : yG.push(UG, "Q", ":", kG), wG ? yG.push("if(y1<x0||x1<y0)continue;") : bG ? yG.push("if(y0<=x0||x1<y0)continue;") : yG.push("if(y0<x0||x1<y0)continue;"), yG.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), bG ? yG.push("yi,xi") : yG.push("xi,yi"), yG.push(");if(rv!==void 0)return rv;}}}"), {
            name: SG,
            code: yG.join("")
          }
        }(bG, SG, GG);
        wG.push(yG.code), kG.push("return " + yG.name + "(" + fG.join() + ");")
      }
      kG.push("if(re-rs>be-bs){"), GG ? (UG(!0, !1), kG.push("}else{"), UG(!1, !1)) : (kG.push("if(fp){"), UG(!0, !0), kG.push("}else{"), UG(!0, !1), kG.push("}}else{if(fp){"), UG(!1, !0), kG.push("}else{"), UG(!1, !1), kG.push("}")), kG.push("}}return " + bG);
      var YG = wG.join("") + kG.join("");
      return new Function(YG)()
    }
    bG.partial = QG(!1), bG.full = QG(!0)
  },
  38727: (GG, bG, ZG) => {
    GG.exports = function(GG, bG, ZG, LG, VG, mG, IG, FG, vG) {
      ! function(GG, bG) {
        var ZG = 8 * SG.log2(bG + 1) * (GG + 1) | 0,
          LG = SG.nextPow2(EG * ZG);
        XG.length < LG && (wG.free(XG), XG = wG.mallocInt32(LG));
        var yG = SG.nextPow2(oG * ZG);
        uG.length < yG && (wG.free(uG), uG = wG.mallocDouble(yG))
      }(GG, LG + IG);
      var aG, cG = 0,
        lG = 2 * GG;
      iG(cG++, 0, 0, LG, 0, IG, ZG ? 16 : 0, -1 / 0, 1 / 0), ZG || iG(cG++, 0, 0, IG, 0, LG, 1, -1 / 0, 1 / 0);
      for (; cG > 0;) {
        var jG = (cG -= 1) * EG,
          PG = XG[jG],
          MG = XG[jG + 1],
          AG = XG[jG + 2],
          sG = XG[jG + 3],
          qG = XG[jG + 4],
          nG = XG[jG + 5],
          gG = cG * oG,
          eG = uG[gG],
          RG = uG[gG + 1],
          TG = 1 & nG,
          HG = !!(16 & nG),
          tG = VG,
          DG = mG,
          NG = FG,
          OG = vG;
        if (TG && (tG = FG, DG = vG, NG = VG, OG = mG), !(2 & nG && MG >= (AG = dG(GG, PG, MG, AG, tG, DG, RG))) && !(4 & nG && (MG = JG(GG, PG, MG, AG, tG, DG, eG)) >= AG)) {
          var xG = AG - MG,
            BG = qG - sG;
          if (HG) {
            if (GG * xG * (xG + BG) < QG) {
              if (void 0 !== (aG = UG.scanComplete(GG, PG, bG, MG, AG, tG, DG, sG, qG, NG, OG))) return aG;
              continue
            }
          } else {
            if (GG * Math.min(xG, BG) < pG) {
              if (void 0 !== (aG = yG(GG, PG, bG, TG, MG, AG, tG, DG, sG, qG, NG, OG))) return aG;
              continue
            }
            if (GG * xG * BG < fG) {
              if (void 0 !== (aG = UG.scanBipartite(GG, PG, bG, TG, MG, AG, tG, DG, sG, qG, NG, OG))) return aG;
              continue
            }
          }
          var Gb = KG(GG, PG, MG, AG, tG, DG, eG, RG);
          if (MG < Gb)
            if (GG * (Gb - MG) < pG) {
              if (void 0 !== (aG = kG(GG, PG + 1, bG, MG, Gb, tG, DG, sG, qG, NG, OG))) return aG
            } else if (PG === GG - 2) {
            if (void 0 !== (aG = TG ? UG.sweepBipartite(GG, bG, sG, qG, NG, OG, MG, Gb, tG, DG) : UG.sweepBipartite(GG, bG, MG, Gb, tG, DG, sG, qG, NG, OG))) return aG
          } else iG(cG++, PG + 1, MG, Gb, sG, qG, TG, -1 / 0, 1 / 0), iG(cG++, PG + 1, sG, qG, MG, Gb, 1 ^ TG, -1 / 0, 1 / 0);
          if (Gb < AG) {
            var bb = YG(GG, PG, sG, qG, NG, OG),
              Zb = NG[lG * bb + PG],
              wb = hG(GG, PG, bb, qG, NG, OG, Zb);
            if (wb < qG && iG(cG++, PG, Gb, AG, wb, qG, (4 | TG) + (HG ? 16 : 0), Zb, RG), sG < bb && iG(cG++, PG, Gb, AG, sG, bb, (2 | TG) + (HG ? 16 : 0), eG, Zb), bb + 1 === wb) {
              if (void 0 !== (aG = HG ? WG(GG, PG, bG, Gb, AG, tG, DG, bb, NG, OG[bb]) : CG(GG, PG, bG, TG, Gb, AG, tG, DG, bb, NG, OG[bb]))) return aG
            } else if (bb < wb) {
              var Sb;
              if (HG) {
                if (Gb < (Sb = rG(GG, PG, Gb, AG, tG, DG, Zb))) {
                  var Lb = hG(GG, PG, Gb, Sb, tG, DG, Zb);
                  if (PG === GG - 2) {
                    if (Gb < Lb && void 0 !== (aG = UG.sweepComplete(GG, bG, Gb, Lb, tG, DG, bb, wb, NG, OG))) return aG;
                    if (Lb < Sb && void 0 !== (aG = UG.sweepBipartite(GG, bG, Lb, Sb, tG, DG, bb, wb, NG, OG))) return aG
                  } else Gb < Lb && iG(cG++, PG + 1, Gb, Lb, bb, wb, 16, -1 / 0, 1 / 0), Lb < Sb && (iG(cG++, PG + 1, Lb, Sb, bb, wb, 0, -1 / 0, 1 / 0), iG(cG++, PG + 1, bb, wb, Lb, Sb, 1, -1 / 0, 1 / 0))
                }
              } else Gb < (Sb = TG ? zG(GG, PG, Gb, AG, tG, DG, Zb) : rG(GG, PG, Gb, AG, tG, DG, Zb)) && (PG === GG - 2 ? aG = TG ? UG.sweepBipartite(GG, bG, bb, wb, NG, OG, Gb, Sb, tG, DG) : UG.sweepBipartite(GG, bG, Gb, Sb, tG, DG, bb, wb, NG, OG) : (iG(cG++, PG + 1, Gb, Sb, bb, wb, TG, -1 / 0, 1 / 0), iG(cG++, PG + 1, bb, wb, Gb, Sb, 1 ^ TG, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var wG = ZG(38704),
      SG = ZG(38706),
      LG = ZG(38736),
      yG = LG.partial,
      kG = LG.full,
      UG = ZG(38719),
      YG = ZG(38745),
      VG = ZG(38748),
      pG = 128,
      fG = 1 << 22,
      QG = 1 << 22,
      KG = VG("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      hG = VG("lo===p0", ["p0"]),
      dG = VG("lo<p0", ["p0"]),
      JG = VG("hi<=p0", ["p0"]),
      rG = VG("lo<=p0&&p0<=hi", ["p0"]),
      zG = VG("lo<p0&&p0<=hi", ["p0"]),
      EG = 6,
      oG = 2,
      XG = wG.mallocInt32(1024),
      uG = wG.mallocDouble(1024);

    function iG(GG, bG, ZG, wG, SG, LG, yG, kG, UG) {
      var YG = EG * GG;
      XG[YG] = bG, XG[YG + 1] = ZG, XG[YG + 2] = wG, XG[YG + 3] = SG, XG[YG + 4] = LG, XG[YG + 5] = yG;
      var VG = oG * GG;
      uG[VG] = kG, uG[VG + 1] = UG
    }

    function CG(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG, VG) {
      var pG = 2 * GG,
        fG = UG * pG,
        QG = YG[fG + bG];
      GG: for (var KG = SG, hG = SG * pG; KG < LG; ++KG, hG += pG) {
        var dG = yG[hG + bG],
          JG = yG[hG + bG + GG];
        if (!(QG < dG || JG < QG) && (!wG || QG !== dG)) {
          for (var rG, zG = kG[KG], EG = bG + 1; EG < GG; ++EG) {
            dG = yG[hG + EG], JG = yG[hG + EG + GG];
            var oG = YG[fG + EG],
              XG = YG[fG + EG + GG];
            if (JG < oG || XG < dG) continue GG
          }
          if (void 0 !== (rG = wG ? ZG(VG, zG) : ZG(zG, VG))) return rG
        }
      }
    }

    function WG(GG, bG, ZG, wG, SG, LG, yG, kG, UG, YG) {
      var VG = 2 * GG,
        pG = kG * VG,
        fG = UG[pG + bG];
      GG: for (var QG = wG, KG = wG * VG; QG < SG; ++QG, KG += VG) {
        var hG = yG[QG];
        if (hG !== YG) {
          var dG = LG[KG + bG],
            JG = LG[KG + bG + GG];
          if (!(fG < dG || JG < fG)) {
            for (var rG = bG + 1; rG < GG; ++rG) {
              dG = LG[KG + rG], JG = LG[KG + rG + GG];
              var zG = UG[pG + rG],
                EG = UG[pG + rG + GG];
              if (JG < zG || EG < dG) continue GG
            }
            var oG = ZG(hG, YG);
            if (void 0 !== oG) return oG
          }
        }
      }
    }
  },
  38745: (GG, bG, ZG) => {
    GG.exports = function(GG, bG, ZG, yG, kG, UG) {
      if (yG <= ZG + 1) return ZG;
      var YG = ZG,
        VG = yG,
        pG = yG + ZG >>> 1,
        fG = 2 * GG,
        QG = pG,
        KG = kG[fG * pG + bG];
      for (; YG < VG;) {
        if (VG - YG < SG) {
          LG(GG, bG, YG, VG, kG, UG), KG = kG[fG * pG + bG];
          break
        }
        var hG = VG - YG,
          dG = Math.random() * hG + YG | 0,
          JG = kG[fG * dG + bG],
          rG = Math.random() * hG + YG | 0,
          zG = kG[fG * rG + bG],
          EG = Math.random() * hG + YG | 0,
          oG = kG[fG * EG + bG];
        JG <= zG ? oG >= zG ? (QG = rG, KG = zG) : JG >= oG ? (QG = dG, KG = JG) : (QG = EG, KG = oG) : zG >= oG ? (QG = rG, KG = zG) : oG >= JG ? (QG = dG, KG = JG) : (QG = EG, KG = oG);
        for (var XG = fG * (VG - 1), uG = fG * QG, iG = 0; iG < fG; ++iG, ++XG, ++uG) {
          var CG = kG[XG];
          kG[XG] = kG[uG], kG[uG] = CG
        }
        var WG = UG[VG - 1];
        UG[VG - 1] = UG[QG], UG[QG] = WG;
        for (XG = fG * (VG - 1), uG = fG * (QG = wG(GG, bG, YG, VG - 1, kG, UG, KG)), iG = 0; iG < fG; ++iG, ++XG, ++uG) {
          CG = kG[XG];
          kG[XG] = kG[uG], kG[uG] = CG
        }
        WG = UG[VG - 1];
        if (UG[VG - 1] = UG[QG], UG[QG] = WG, pG < QG) {
          for (VG = QG - 1; YG < VG && kG[fG * (VG - 1) + bG] === KG;) VG -= 1;
          VG += 1
        } else {
          if (!(QG < pG)) break;
          for (YG = QG + 1; YG < VG && kG[fG * YG + bG] === KG;) YG += 1
        }
      }
      return wG(GG, bG, ZG, pG, kG, UG, kG[fG * pG + bG])
    };
    var wG = ZG(38748)("lo<p0", ["p0"]),
      SG = 8;

    function LG(GG, bG, ZG, wG, SG, LG) {
      for (var yG = 2 * GG, kG = yG * (ZG + 1) + bG, UG = ZG + 1; UG < wG; ++UG, kG += yG)
        for (var YG = SG[kG], VG = UG, pG = yG * (UG - 1); VG > ZG && SG[pG + bG] > YG; --VG, pG -= yG) {
          for (var fG = pG, QG = pG + yG, KG = 0; KG < yG; ++KG, ++fG, ++QG) {
            var hG = SG[fG];
            SG[fG] = SG[QG], SG[QG] = hG
          }
          var dG = LG[VG];
          LG[VG] = LG[VG - 1], LG[VG - 1] = dG
        }
    }
  },
  38748: GG => {
    GG.exports = function(GG, ZG) {
      var wG = "abcdef".split("").concat(ZG),
        SG = [];
      GG.indexOf("lo") >= 0 && SG.push("lo=e[k+n]");
      GG.indexOf("hi") >= 0 && SG.push("hi=e[k+o]");
      return wG.push(bG.replace("_", SG.join()).replace("$", GG)), Function.apply(void 0, wG)
    };
    var bG = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  38725: GG => {
    GG.exports = function(GG, wG) {
      wG <= 4 * bG ? ZG(0, wG - 1, GG) : YG(0, wG - 1, GG)
    };
    var bG = 32;

    function ZG(GG, bG, ZG) {
      for (var wG = 2 * (GG + 1), SG = GG + 1; SG <= bG; ++SG) {
        for (var LG = ZG[wG++], yG = ZG[wG++], kG = SG, UG = wG - 2; kG-- > GG;) {
          var YG = ZG[UG - 2],
            VG = ZG[UG - 1];
          if (YG < LG) break;
          if (YG === LG && VG < yG) break;
          ZG[UG] = YG, ZG[UG + 1] = VG, UG -= 2
        }
        ZG[UG] = LG, ZG[UG + 1] = yG
      }
    }

    function wG(GG, bG, ZG) {
      bG *= 2;
      var wG = ZG[GG *= 2],
        SG = ZG[GG + 1];
      ZG[GG] = ZG[bG], ZG[GG + 1] = ZG[bG + 1], ZG[bG] = wG, ZG[bG + 1] = SG
    }

    function SG(GG, bG, ZG) {
      bG *= 2, ZG[GG *= 2] = ZG[bG], ZG[GG + 1] = ZG[bG + 1]
    }

    function LG(GG, bG, ZG, wG) {
      bG *= 2, ZG *= 2;
      var SG = wG[GG *= 2],
        LG = wG[GG + 1];
      wG[GG] = wG[bG], wG[GG + 1] = wG[bG + 1], wG[bG] = wG[ZG], wG[bG + 1] = wG[ZG + 1], wG[ZG] = SG, wG[ZG + 1] = LG
    }

    function yG(GG, bG, ZG, wG, SG) {
      bG *= 2, SG[GG *= 2] = SG[bG], SG[bG] = ZG, SG[GG + 1] = SG[bG + 1], SG[bG + 1] = wG
    }

    function kG(GG, bG, ZG) {
      bG *= 2;
      var wG = ZG[GG *= 2],
        SG = ZG[bG];
      return !(wG < SG) && (wG !== SG || ZG[GG + 1] > ZG[bG + 1])
    }

    function UG(GG, bG, ZG, wG) {
      var SG = wG[GG *= 2];
      return SG < bG || SG === bG && wG[GG + 1] < ZG
    }

    function YG(GG, VG, pG) {
      var fG = (VG - GG + 1) / 6 | 0,
        QG = GG + fG,
        KG = VG - fG,
        hG = GG + VG >> 1,
        dG = hG - fG,
        JG = hG + fG,
        rG = QG,
        zG = dG,
        EG = hG,
        oG = JG,
        XG = KG,
        uG = GG + 1,
        iG = VG - 1,
        CG = 0;
      kG(rG, zG, pG) && (CG = rG, rG = zG, zG = CG), kG(oG, XG, pG) && (CG = oG, oG = XG, XG = CG), kG(rG, EG, pG) && (CG = rG, rG = EG, EG = CG), kG(zG, EG, pG) && (CG = zG, zG = EG, EG = CG), kG(rG, oG, pG) && (CG = rG, rG = oG, oG = CG), kG(EG, oG, pG) && (CG = EG, EG = oG, oG = CG), kG(zG, XG, pG) && (CG = zG, zG = XG, XG = CG), kG(zG, EG, pG) && (CG = zG, zG = EG, EG = CG), kG(oG, XG, pG) && (CG = oG, oG = XG, XG = CG);
      for (var WG = pG[2 * zG], mG = pG[2 * zG + 1], IG = pG[2 * oG], FG = pG[2 * oG + 1], vG = 2 * rG, aG = 2 * EG, cG = 2 * XG, lG = 2 * QG, jG = 2 * hG, PG = 2 * KG, MG = 0; MG < 2; ++MG) {
        var AG = pG[vG + MG],
          sG = pG[aG + MG],
          qG = pG[cG + MG];
        pG[lG + MG] = AG, pG[jG + MG] = sG, pG[PG + MG] = qG
      }
      SG(dG, GG, pG), SG(JG, VG, pG);
      for (var nG = uG; nG <= iG; ++nG)
        if (UG(nG, WG, mG, pG)) nG !== uG && wG(nG, uG, pG), ++uG;
        else if (!UG(nG, IG, FG, pG))
        for (;;) {
          if (UG(iG, IG, FG, pG)) {
            UG(iG, WG, mG, pG) ? (LG(nG, uG, iG, pG), ++uG, --iG) : (wG(nG, iG, pG), --iG);
            break
          }
          if (--iG < nG) break
        }
      yG(GG, uG - 1, WG, mG, pG), yG(VG, iG + 1, IG, FG, pG), uG - 2 - GG <= bG ? ZG(GG, uG - 2, pG) : YG(GG, uG - 2, pG), VG - (iG + 2) <= bG ? ZG(iG + 2, VG, pG) : YG(iG + 2, VG, pG), iG - uG <= bG ? ZG(uG, iG, pG) : YG(uG, iG, pG)
    }
  },
  38719: (GG, bG, ZG) => {
    GG.exports = {
      init: function(GG) {
        var bG = SG.nextPow2(GG);
        UG.length < bG && (wG.free(UG), UG = wG.mallocInt32(bG));
        YG.length < bG && (wG.free(YG), YG = wG.mallocInt32(bG));
        VG.length < bG && (wG.free(VG), VG = wG.mallocInt32(bG));
        pG.length < bG && (wG.free(pG), pG = wG.mallocInt32(bG));
        fG.length < bG && (wG.free(fG), fG = wG.mallocInt32(bG));
        QG.length < bG && (wG.free(QG), QG = wG.mallocInt32(bG));
        var ZG = 8 * bG;
        KG.length < ZG && (wG.free(KG), KG = wG.mallocDouble(ZG))
      },
      sweepBipartite: function(GG, bG, ZG, wG, SG, kG, fG, QG, JG, rG) {
        for (var zG = 0, EG = 2 * GG, oG = GG - 1, XG = EG - 1, uG = ZG; uG < wG; ++uG) {
          var iG = kG[uG],
            CG = EG * uG;
          KG[zG++] = SG[CG + oG], KG[zG++] = -(iG + 1), KG[zG++] = SG[CG + XG], KG[zG++] = iG
        }
        for (uG = fG; uG < QG; ++uG) {
          iG = rG[uG] + yG;
          var WG = EG * uG;
          KG[zG++] = JG[WG + oG], KG[zG++] = -iG, KG[zG++] = JG[WG + XG], KG[zG++] = iG
        }
        var mG = zG >>> 1;
        LG(KG, mG);
        var IG = 0,
          FG = 0;
        for (uG = 0; uG < mG; ++uG) {
          var vG = 0 | KG[2 * uG + 1];
          if (vG >= yG) hG(VG, pG, FG--, vG = vG - yG | 0);
          else if (vG >= 0) hG(UG, YG, IG--, vG);
          else if (vG <= -yG) {
            vG = -vG - yG | 0;
            for (var aG = 0; aG < IG; ++aG) {
              if (void 0 !== (cG = bG(UG[aG], vG))) return cG
            }
            dG(VG, pG, FG++, vG)
          } else {
            vG = -vG - 1 | 0;
            for (aG = 0; aG < FG; ++aG) {
              var cG;
              if (void 0 !== (cG = bG(vG, VG[aG]))) return cG
            }
            dG(UG, YG, IG++, vG)
          }
        }
      },
      sweepComplete: function(GG, bG, ZG, wG, SG, yG, kG, JG, rG, zG) {
        for (var EG = 0, oG = 2 * GG, XG = GG - 1, uG = oG - 1, iG = ZG; iG < wG; ++iG) {
          var CG = yG[iG] + 1 << 1,
            WG = oG * iG;
          KG[EG++] = SG[WG + XG], KG[EG++] = -CG, KG[EG++] = SG[WG + uG], KG[EG++] = CG
        }
        for (iG = kG; iG < JG; ++iG) {
          CG = zG[iG] + 1 << 1;
          var mG = oG * iG;
          KG[EG++] = rG[mG + XG], KG[EG++] = 1 | -CG, KG[EG++] = rG[mG + uG], KG[EG++] = 1 | CG
        }
        var IG = EG >>> 1;
        LG(KG, IG);
        var FG = 0,
          vG = 0,
          aG = 0;
        for (iG = 0; iG < IG; ++iG) {
          var cG = 0 | KG[2 * iG + 1],
            lG = 1 & cG;
          if (iG < IG - 1 && cG >> 1 === KG[2 * iG + 3] >> 1 && (lG = 2, iG += 1), cG < 0) {
            for (var jG = -(cG >> 1) - 1, PG = 0; PG < aG; ++PG) {
              if (void 0 !== (MG = bG(fG[PG], jG))) return MG
            }
            if (0 !== lG)
              for (PG = 0; PG < FG; ++PG) {
                if (void 0 !== (MG = bG(UG[PG], jG))) return MG
              }
            if (1 !== lG)
              for (PG = 0; PG < vG; ++PG) {
                var MG;
                if (void 0 !== (MG = bG(VG[PG], jG))) return MG
              }
            0 === lG ? dG(UG, YG, FG++, jG) : 1 === lG ? dG(VG, pG, vG++, jG) : 2 === lG && dG(fG, QG, aG++, jG)
          } else {
            jG = (cG >> 1) - 1;
            0 === lG ? hG(UG, YG, FG--, jG) : 1 === lG ? hG(VG, pG, vG--, jG) : 2 === lG && hG(fG, QG, aG--, jG)
          }
        }
      },
      scanBipartite: function(GG, bG, ZG, wG, SG, kG, VG, pG, fG, QG, JG, rG) {
        var zG = 0,
          EG = 2 * GG,
          oG = bG,
          XG = bG + GG,
          uG = 1,
          iG = 1;
        wG ? iG = yG : uG = yG;
        for (var CG = SG; CG < kG; ++CG) {
          var WG = CG + uG,
            mG = EG * CG;
          KG[zG++] = VG[mG + oG], KG[zG++] = -WG, KG[zG++] = VG[mG + XG], KG[zG++] = WG
        }
        for (CG = fG; CG < QG; ++CG) {
          WG = CG + iG;
          var IG = EG * CG;
          KG[zG++] = JG[IG + oG], KG[zG++] = -WG
        }
        var FG = zG >>> 1;
        LG(KG, FG);
        var vG = 0;
        for (CG = 0; CG < FG; ++CG) {
          var aG = 0 | KG[2 * CG + 1];
          if (aG < 0) {
            var cG = !1;
            if ((WG = -aG) >= yG ? (cG = !wG, WG -= yG) : (cG = !!wG, WG -= 1), cG) dG(UG, YG, vG++, WG);
            else {
              var lG = rG[WG],
                jG = EG * WG,
                PG = JG[jG + bG + 1],
                MG = JG[jG + bG + 1 + GG];
              GG: for (var AG = 0; AG < vG; ++AG) {
                var sG = UG[AG],
                  qG = EG * sG;
                if (!(MG < VG[qG + bG + 1] || VG[qG + bG + 1 + GG] < PG)) {
                  for (var nG = bG + 2; nG < GG; ++nG)
                    if (JG[jG + nG + GG] < VG[qG + nG] || VG[qG + nG + GG] < JG[jG + nG]) continue GG;
                  var gG, eG = pG[sG];
                  if (void 0 !== (gG = wG ? ZG(lG, eG) : ZG(eG, lG))) return gG
                }
              }
            }
          } else hG(UG, YG, vG--, aG - uG)
        }
      },
      scanComplete: function(GG, bG, ZG, wG, SG, kG, YG, VG, pG, fG, QG) {
        for (var hG = 0, dG = 2 * GG, JG = bG, rG = bG + GG, zG = wG; zG < SG; ++zG) {
          var EG = zG + yG,
            oG = dG * zG;
          KG[hG++] = kG[oG + JG], KG[hG++] = -EG, KG[hG++] = kG[oG + rG], KG[hG++] = EG
        }
        for (zG = VG; zG < pG; ++zG) {
          EG = zG + 1;
          var XG = dG * zG;
          KG[hG++] = fG[XG + JG], KG[hG++] = -EG
        }
        var uG = hG >>> 1;
        LG(KG, uG);
        var iG = 0;
        for (zG = 0; zG < uG; ++zG) {
          var CG = 0 | KG[2 * zG + 1];
          if (CG < 0) {
            if ((EG = -CG) >= yG) UG[iG++] = EG - yG;
            else {
              var WG = QG[EG -= 1],
                mG = dG * EG,
                IG = fG[mG + bG + 1],
                FG = fG[mG + bG + 1 + GG];
              GG: for (var vG = 0; vG < iG; ++vG) {
                var aG = UG[vG],
                  cG = YG[aG];
                if (cG === WG) break;
                var lG = dG * aG;
                if (!(FG < kG[lG + bG + 1] || kG[lG + bG + 1 + GG] < IG)) {
                  for (var jG = bG + 2; jG < GG; ++jG)
                    if (fG[mG + jG + GG] < kG[lG + jG] || kG[lG + jG + GG] < fG[mG + jG]) continue GG;
                  var PG = ZG(cG, WG);
                  if (void 0 !== PG) return PG
                }
              }
            }
          } else {
            for (EG = CG - yG, vG = iG - 1; vG >= 0; --vG)
              if (UG[vG] === EG) {
                for (jG = vG + 1; jG < iG; ++jG) UG[jG - 1] = UG[jG];
                break
              }-- iG
          }
        }
      }
    };
    var wG = ZG(38704),
      SG = ZG(38706),
      LG = ZG(38725),
      yG = 1 << 28,
      kG = 1024,
      UG = wG.mallocInt32(kG),
      YG = wG.mallocInt32(kG),
      VG = wG.mallocInt32(kG),
      pG = wG.mallocInt32(kG),
      fG = wG.mallocInt32(kG),
      QG = wG.mallocInt32(kG),
      KG = wG.mallocDouble(8192);

    function hG(GG, bG, ZG, wG) {
      var SG = bG[wG],
        LG = GG[ZG - 1];
      GG[SG] = LG, bG[LG] = SG
    }

    function dG(GG, bG, ZG, wG) {
      GG[ZG] = wG, bG[wG] = ZG
    }
  },
  38708: GG => {
    function bG(GG, ZG, wG) {
      var SG = 0 | GG[wG];
      if (SG <= 0) return [];
      var LG, yG = new Array(SG);
      if (wG === GG.length - 1)
        for (LG = 0; LG < SG; ++LG) yG[LG] = ZG;
      else
        for (LG = 0; LG < SG; ++LG) yG[LG] = bG(GG, ZG, wG + 1);
      return yG
    }
    GG.exports = function(GG, ZG) {
      switch ("undefined" === typeof ZG && (ZG = 0), typeof GG) {
        case "number":
          if (GG > 0) return function(GG, bG) {
            var ZG, wG;
            for (ZG = new Array(GG), wG = 0; wG < GG; ++wG) ZG[wG] = bG;
            return ZG
          }(0 | GG, ZG);
          break;
        case "object":
          if ("number" === typeof GG.length) return bG(GG, ZG, 0)
      }
      return []
    }
  },
  38661: (GG, bG, ZG) => {
    GG.exports = function() {
      var GG = this;
      this.components = {}, this.comps = this.components;
      var bG = this.components,
        ZG = 1,
        SG = {},
        LG = [],
        yG = [],
        kG = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function UG(GG, ZG) {
        var wG = bG[ZG],
          LG = SG[ZG],
          yG = LG.hash[GG];
        yG && (LG.remove(GG), wG.MI && (wG.multi ? (yG.forEach((bG => {
          bG && wG.MI(GG, bG)
        })), yG.length = 0) : wG.MI(GG, yG)), kG.removals.push(LG), YG())
      }

      function YG() {
        kG.timeout || (kG.timeout = !0, setTimeout(VG, 1))
      }

      function VG() {
        kG.timeout = !1, pG()
      }

      function pG() {
        kG.multiComps.length && function(GG) {
          for (var bG = 0; bG < GG.length; bG++) {
            var {
              entID: ZG,
              data: wG
            } = GG[bG], SG = wG.hash[ZG];
            if (SG) {
              for (var LG = 0; LG < SG.length; LG++) SG[LG] || (SG.splice(LG, 1), LG--);
              0 === SG.length && (wG.remove(ZG), kG.removals.push(wG))
            }
          }
          GG.length = 0
        }(kG.multiComps), kG.removals.length && function(GG) {
          for (var bG = 0; bG < GG.length; bG++) {
            GG[bG].flush()
          }
          GG.length = 0
        }(kG.removals)
      }
      this.Qh = SG, this._systems = LG, this._renderSystems = yG, this.yN = function(bG) {
        var wG = ZG++;
        return Array.isArray(bG) && bG.forEach((bG => GG.bM(wG, bG))), wG
      }, this.deleteEntity = function(bG) {
        return Object.keys(SG).forEach((GG => {
          SG[GG].hash[bG] && UG(bG, GG)
        })), GG
      }, this.yZG = function(GG) {
        if (!GG) throw new Error("Missing component definition");
        var ZG = GG.name;
        if (!ZG) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof ZG) throw new Error("Component name must be a string.");
        if ("" === ZG) throw new Error("Component name must be a non-empty string.");
        if (SG[ZG]) throw new Error(`Component ${ZG} already exists.`);
        var kG = {};
        return kG.name = ZG, kG.multi = !!GG.multi, kG.order = isNaN(GG.order) ? 99 : GG.order, kG.stateConstructor = GG.stateConstructor || null, kG.state = GG.state || {}, kG.Kr = GG.Kr || null, kG.MI = GG.MI || null, kG.system = GG.system || null, kG.Yz = GG.Yz || null, bG[ZG] = kG, SG[ZG] = new wG, SG[ZG]._pendingMultiCleanup = !1, SG[ZG]._multiCleanupIDs = kG.multi ? [] : null, kG.system && (LG.push(ZG), LG.sort(((GG, ZG) => bG[GG].order - bG[ZG].order))), kG.Yz && (yG.push(ZG), yG.sort(((GG, ZG) => bG[GG].order - bG[ZG].order))), ZG
      }, this.overwriteComponent = function(GG, ZG) {
        var wG = bG[GG];
        if (!wG) throw new Error(`Unknown component: ${GG}`);
        if (!ZG) throw new Error("Missing component definition");
        if (wG.name !== ZG.name) throw new Error("Overwriting component must use the same name property.");
        var kG = {};
        kG.name = GG, kG.multi = !!ZG.multi, kG.order = isNaN(ZG.order) ? 99 : ZG.order, kG.state = ZG.state || {}, kG.Kr = ZG.Kr || null, kG.MI = ZG.MI || null, kG.system = ZG.system || null, kG.Yz = ZG.Yz || null, bG[GG] = kG, SG[GG]._pendingMultiCleanup = !1, SG[GG]._multiCleanupIDs = kG.multi ? [] : null;
        var UG = LG.indexOf(GG);
        kG.system && UG < 0 && LG.push(GG), !kG.system && UG >= 0 && LG.splice(UG, 1), LG.sort(((GG, ZG) => bG[GG].order - bG[ZG].order));
        var YG = yG.indexOf(GG);
        kG.Yz && YG < 0 && yG.push(GG), !kG.Yz && YG >= 0 && yG.splice(YG, 1), yG.sort(((GG, ZG) => bG[GG].order - bG[ZG].order));
        var VG = kG.state;
        return this.Bl(GG).forEach((GG => {
          for (var bG in VG) bG in GG || (GG[bG] = VG[bG]);
          kG.Kr && kG.Kr(GG.RP, GG)
        })), GG
      }, this.deleteComponent = function(ZG) {
        var wG = SG[ZG];
        if (!wG) throw new Error(`Unknown component: ${ZG}`);
        wG.flush(), wG.list.forEach((GG => {
          GG && UG(GG.RP || GG[0].RP, ZG)
        }));
        var kG = LG.indexOf(ZG),
          YG = yG.indexOf(ZG);
        return kG > -1 && LG.splice(kG, 1), YG > -1 && yG.splice(YG, 1), SG[ZG].dispose(), delete SG[ZG], delete bG[ZG], GG
      }, this.bM = function(GG, ZG, wG) {
        var LG, yG = bG[ZG],
          kG = SG[ZG];
        if (!kG) throw new Error(`Unknown component: ${ZG}.`);
        if (kG.hash[GG] && !yG.multi) throw new Error(`Entity ${GG} already has component: ${ZG}.`);
        if (yG.stateConstructor) {
          if (!(LG = new yG.stateConstructor).hasOwnProperty("RP")) throw new Error(`Component ${yG.name} stateConstructor type does not have property __id`);
          Object.assign(LG, yG.state, wG)
        } else LG = {
          RP: GG,
          ...yG.state,
          ...wG
        };
        if (LG.RP = GG, yG.multi) {
          var UG = kG.hash[GG];
          UG || (UG = [], kG.add(GG, UG)), UG.push(LG)
        } else kG.add(GG, LG);
        return yG.Kr && yG.Kr(GG, LG), this
      }, this.SbG = function(GG, bG) {
        var ZG = SG[bG];
        if (!ZG) throw new Error(`Unknown component: ${bG}.`);
        return !!ZG.hash[GG]
      }, this.YM = function(bG, ZG) {
        if (!SG[ZG]) throw new Error(`Unknown component: ${ZG}.`);
        return UG(bG, ZG), GG
      }, this.getState = function(GG, bG) {
        var ZG = SG[bG];
        if (!ZG) throw new Error(`Unknown component: ${bG}.`);
        return ZG.hash[GG]
      }, this.Bl = function(GG) {
        var bG = SG[GG];
        if (!bG) throw new Error(`Unknown component: ${GG}.`);
        return pG(), bG.list
      }, this.sbG = function(GG) {
        if (!SG[GG]) throw new Error(`Unknown component: ${GG}.`);
        var bG = SG[GG].hash;
        return GG => bG[GG]
      }, this.TbG = function(GG) {
        if (!SG[GG]) throw new Error(`Unknown component: ${GG}.`);
        var bG = SG[GG].hash;
        return GG => !!bG[GG]
      }, this.Tp = function(ZG) {
        pG();
        for (var wG = 0; wG < LG.length; wG++) {
          var yG = LG[wG],
            kG = bG[yG],
            UG = SG[yG];
          kG.system(ZG, UG.list), pG()
        }
        return GG
      }, this.render = function(ZG) {
        pG();
        for (var wG = 0; wG < yG.length; wG++) {
          var LG = yG[wG],
            kG = bG[LG],
            UG = SG[LG];
          kG.Yz(ZG, UG.list), pG()
        }
        return GG
      }, this.removeMultiComponent = function(ZG, wG, LG) {
        var yG = bG[wG],
          UG = SG[wG];
        if (!UG) throw new Error(`Unknown component: ${wG}.`);
        if (!yG.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(GG, bG, ZG, wG) {
          var SG = ZG.hash[GG];
          if (SG) {
            var LG = SG[wG];
            LG && (SG[wG] = null, bG.MI && bG.MI(GG, LG), kG.multiComps.push({
              entID: GG,
              data: ZG
            }), YG())
          }
        }(ZG, yG, UG, LG), GG
      }
    };
    var wG = ZG(38665)
  },
  38665: GG => {
    function bG(GG, bG) {
      var ZG = GG._map[bG];
      if (delete GG.hash[bG], delete GG._map[bG], ZG === GG.list.length - 1) GG.list.pop(), GG._idList.pop();
      else {
        var wG = GG.list.pop();
        GG.list[ZG] = wG;
        var SG = GG._idList.pop();
        GG._idList[ZG] = SG, GG._map[SG] = ZG
      }
    }
    GG.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(GG, bG) {
        if ("number" === typeof this._map[GG]) {
          var ZG = this._map[GG];
          this.hash[GG] = bG, this.list[ZG] = bG, this._idList[ZG] = GG
        } else this._map[GG] = this.list.length, this.hash[GG] = bG, this.list.push(bG), this._idList.push(GG)
      }
      remove(GG) {
        var bG = this._map[GG];
        this.hash[GG] = null, this.list[bG] = null, this._pendingRemovals.push(GG)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var GG = 0; GG < this._pendingRemovals.length; GG++) {
          var ZG = this._pendingRemovals[GG];
          null === this.hash[ZG] && bG(this, ZG)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  38460: (GG, bG, ZG) => {
    GG = ZG.nmd(GG);
    var wG = "__lodash_hash_undefined__",
      SG = 9007199254740991,
      LG = "[object Arguments]",
      yG = "[object Boolean]",
      kG = "[object Date]",
      UG = "[object Function]",
      YG = "[object GeneratorFunction]",
      VG = "[object Map]",
      pG = "[object Number]",
      fG = "[object Object]",
      QG = "[object Promise]",
      KG = "[object RegExp]",
      hG = "[object Set]",
      dG = "[object String]",
      JG = "[object Symbol]",
      rG = "[object WeakMap]",
      zG = "[object ArrayBuffer]",
      EG = "[object DataView]",
      oG = "[object Float32Array]",
      XG = "[object Float64Array]",
      uG = "[object Int8Array]",
      iG = "[object Int16Array]",
      CG = "[object Int32Array]",
      WG = "[object Uint8Array]",
      mG = "[object Uint8ClampedArray]",
      IG = "[object Uint16Array]",
      FG = "[object Uint32Array]",
      vG = /\w*$/,
      aG = /^\[object .+?Constructor\]$/,
      cG = /^(?:0|[1-9]\d*)$/,
      lG = {};
    lG[LG] = lG["[object Array]"] = lG[zG] = lG[EG] = lG[yG] = lG[kG] = lG[oG] = lG[XG] = lG[uG] = lG[iG] = lG[CG] = lG[VG] = lG[pG] = lG[fG] = lG[KG] = lG[hG] = lG[dG] = lG[JG] = lG[WG] = lG[mG] = lG[IG] = lG[FG] = !0, lG["[object Error]"] = lG[UG] = lG[rG] = !1;
    var jG = "object" == typeof ZG.g && ZG.g && ZG.g.Object === Object && ZG.g,
      PG = "object" == typeof self && self && self.Object === Object && self,
      MG = jG || PG || Function("return this")(),
      AG = bG && !bG.nodeType && bG,
      sG = AG && GG && !GG.nodeType && GG,
      qG = sG && sG.exports === AG;

    function nG(GG, bG) {
      return GG.set(bG[0], bG[1]), GG
    }

    function gG(GG, bG) {
      return GG.add(bG), GG
    }

    function eG(GG, bG, ZG, wG) {
      var SG = -1,
        LG = GG ? GG.length : 0;
      for (wG && LG && (ZG = GG[++SG]); ++SG < LG;) ZG = bG(ZG, GG[SG], SG, GG);
      return ZG
    }

    function RG(GG) {
      var bG = !1;
      if (null != GG && "function" != typeof GG.toString) try {
        bG = !!(GG + "")
      } catch (ZG) {}
      return bG
    }

    function TG(GG) {
      var bG = -1,
        ZG = Array(GG.size);
      return GG.forEach((function(GG, wG) {
        ZG[++bG] = [wG, GG]
      })), ZG
    }

    function HG(GG, bG) {
      return function(ZG) {
        return GG(bG(ZG))
      }
    }

    function tG(GG) {
      var bG = -1,
        ZG = Array(GG.size);
      return GG.forEach((function(GG) {
        ZG[++bG] = GG
      })), ZG
    }
    var DG = Array.prototype,
      NG = Function.prototype,
      OG = Object.prototype,
      xG = MG["__core-js_shared__"],
      BG = function() {
        var GG = /[^.]+$/.exec(xG && xG.keys && xG.keys.IE_PROTO || "");
        return GG ? "Symbol(src)_1." + GG : ""
      }(),
      Gb = NG.toString,
      bb = OG.hasOwnProperty,
      Zb = OG.toString,
      wb = RegExp("^" + Gb.call(bb).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      Sb = qG ? MG.VK : void 0,
      Lb = MG.Symbol,
      yb = MG.Uint8Array,
      kb = HG(Object.getPrototypeOf, Object),
      Ub = Object.create,
      Yb = OG.propertyIsEnumerable,
      Vb = DG.splice,
      pb = Object.getOwnPropertySymbols,
      fb = Sb ? Sb.isBuffer : void 0,
      Qb = HG(Object.keys, Object),
      Kb = qb(MG, "DataView"),
      hb = qb(MG, "Map"),
      db = qb(MG, "Promise"),
      Jb = qb(MG, "Set"),
      rb = qb(MG, "WeakMap"),
      zb = qb(Object, "create"),
      Eb = Tb(Kb),
      ob = Tb(hb),
      Xb = Tb(db),
      ub = Tb(Jb),
      ib = Tb(rb),
      Cb = Lb ? Lb.prototype : void 0,
      Wb = Cb ? Cb.valueOf : void 0;

    function mb(GG) {
      var bG = -1,
        ZG = GG ? GG.length : 0;
      for (this.clear(); ++bG < ZG;) {
        var wG = GG[bG];
        this.set(wG[0], wG[1])
      }
    }

    function Ib(GG) {
      var bG = -1,
        ZG = GG ? GG.length : 0;
      for (this.clear(); ++bG < ZG;) {
        var wG = GG[bG];
        this.set(wG[0], wG[1])
      }
    }

    function Fb(GG) {
      var bG = -1,
        ZG = GG ? GG.length : 0;
      for (this.clear(); ++bG < ZG;) {
        var wG = GG[bG];
        this.set(wG[0], wG[1])
      }
    }

    function vb(GG) {
      this.__data__ = new Ib(GG)
    }

    function ab(GG, bG) {
      var ZG = tb(GG) || function(GG) {
          return function(GG) {
            return function(GG) {
              return !!GG && "object" == typeof GG
            }(GG) && Db(GG)
          }(GG) && bb.call(GG, "callee") && (!Yb.call(GG, "callee") || Zb.call(GG) == LG)
        }(GG) ? function(GG, bG) {
          for (var ZG = -1, wG = Array(GG); ++ZG < GG;) wG[ZG] = bG(ZG);
          return wG
        }(GG.length, String) : [],
        wG = ZG.length,
        SG = !!wG;
      for (var yG in GG) !bG && !bb.call(GG, yG) || SG && ("length" == yG || eb(yG, wG)) || ZG.push(yG);
      return ZG
    }

    function cb(GG, bG, ZG) {
      var wG = GG[bG];
      bb.call(GG, bG) && Hb(wG, ZG) && (void 0 !== ZG || bG in GG) || (GG[bG] = ZG)
    }

    function lb(GG, bG) {
      for (var ZG = GG.length; ZG--;)
        if (Hb(GG[ZG][0], bG)) return ZG;
      return -1
    }

    function jb(GG, bG, ZG, wG, SG, QG, rG) {
      var aG;
      if (wG && (aG = QG ? wG(GG, SG, QG, rG) : wG(GG)), void 0 !== aG) return aG;
      if (!xb(GG)) return GG;
      var cG = tb(GG);
      if (cG) {
        if (aG = function(GG) {
            var bG = GG.length,
              ZG = GG.constructor(bG);
            bG && "string" == typeof GG[0] && bb.call(GG, "index") && (ZG.index = GG.index, ZG.input = GG.input);
            return ZG
          }(GG), !bG) return function(GG, bG) {
          var ZG = -1,
            wG = GG.length;
          bG || (bG = Array(wG));
          for (; ++ZG < wG;) bG[ZG] = GG[ZG];
          return bG
        }(GG, aG)
      } else {
        var jG = gb(GG),
          PG = jG == UG || jG == YG;
        if (Nb(GG)) return function(GG, bG) {
          if (bG) return GG.slice();
          var ZG = new GG.constructor(GG.length);
          return GG.copy(ZG), ZG
        }(GG, bG);
        if (jG == fG || jG == LG || PG && !QG) {
          if (RG(GG)) return QG ? GG : {};
          if (aG = function(GG) {
              return "function" != typeof GG.constructor || Rb(GG) ? {} : (bG = kb(GG), xb(bG) ? Ub(bG) : {});
              var bG
            }(PG ? {} : GG), !bG) return function(GG, bG) {
            return Ab(GG, nb(GG), bG)
          }(GG, function(GG, bG) {
            return GG && Ab(bG, Bb(bG), GG)
          }(aG, GG))
        } else {
          if (!lG[jG]) return QG ? GG : {};
          aG = function(GG, bG, ZG, wG) {
            var SG = GG.constructor;
            switch (bG) {
              case zG:
                return Mb(GG);
              case yG:
              case kG:
                return new SG(+GG);
              case EG:
                return function(GG, bG) {
                  var ZG = bG ? Mb(GG.buffer) : GG.buffer;
                  return new GG.constructor(ZG, GG.byteOffset, GG.byteLength)
                }(GG, wG);
              case oG:
              case XG:
              case uG:
              case iG:
              case CG:
              case WG:
              case mG:
              case IG:
              case FG:
                return function(GG, bG) {
                  var ZG = bG ? Mb(GG.buffer) : GG.buffer;
                  return new GG.constructor(ZG, GG.byteOffset, GG.length)
                }(GG, wG);
              case VG:
                return function(GG, bG, ZG) {
                  var wG = bG ? ZG(TG(GG), !0) : TG(GG);
                  return eG(wG, nG, new GG.constructor)
                }(GG, wG, ZG);
              case pG:
              case dG:
                return new SG(GG);
              case KG:
                return function(GG) {
                  var bG = new GG.constructor(GG.source, vG.exec(GG));
                  return bG.lastIndex = GG.lastIndex, bG
                }(GG);
              case hG:
                return function(GG, bG, ZG) {
                  var wG = bG ? ZG(tG(GG), !0) : tG(GG);
                  return eG(wG, gG, new GG.constructor)
                }(GG, wG, ZG);
              case JG:
                return LG = GG, Wb ? Object(Wb.call(LG)) : {}
            }
            var LG
          }(GG, jG, jb, bG)
        }
      }
      rG || (rG = new vb);
      var MG = rG.get(GG);
      if (MG) return MG;
      if (rG.set(GG, aG), !cG) var AG = ZG ? function(GG) {
        return function(GG, bG, ZG) {
          var wG = bG(GG);
          return tb(GG) ? wG : function(GG, bG) {
            for (var ZG = -1, wG = bG.length, SG = GG.length; ++ZG < wG;) GG[SG + ZG] = bG[ZG];
            return GG
          }(wG, ZG(GG))
        }(GG, Bb, nb)
      }(GG) : Bb(GG);
      return function(GG, bG) {
        for (var ZG = -1, wG = GG ? GG.length : 0; ++ZG < wG && !1 !== bG(GG[ZG], ZG, GG););
      }(AG || GG, (function(SG, LG) {
        AG && (SG = GG[LG = SG]), cb(aG, LG, jb(SG, bG, ZG, wG, LG, GG, rG))
      })), aG
    }

    function Pb(GG) {
      return !(!xb(GG) || (bG = GG, BG && BG in bG)) && (Ob(GG) || RG(GG) ? wb : aG).test(Tb(GG));
      var bG
    }

    function Mb(GG) {
      var bG = new GG.constructor(GG.byteLength);
      return new yb(bG).set(new yb(GG)), bG
    }

    function Ab(GG, bG, ZG, wG) {
      ZG || (ZG = {});
      for (var SG = -1, LG = bG.length; ++SG < LG;) {
        var yG = bG[SG],
          kG = wG ? wG(ZG[yG], GG[yG], yG, ZG, GG) : void 0;
        cb(ZG, yG, void 0 === kG ? GG[yG] : kG)
      }
      return ZG
    }

    function sb(GG, bG) {
      var ZG = GG.__data__;
      return function(GG) {
        var bG = typeof GG;
        return "string" == bG || "number" == bG || "symbol" == bG || "boolean" == bG ? "__proto__" !== GG : null === GG
      }(bG) ? ZG["string" == typeof bG ? "string" : "hash"] : ZG.map
    }

    function qb(GG, bG) {
      var ZG = function(GG, bG) {
        return null == GG ? void 0 : GG[bG]
      }(GG, bG);
      return Pb(ZG) ? ZG : void 0
    }
    mb.prototype.clear = function() {
      this.__data__ = zb ? zb(null) : {}
    }, mb.prototype.delete = function(GG) {
      return this.has(GG) && delete this.__data__[GG]
    }, mb.prototype.get = function(GG) {
      var bG = this.__data__;
      if (zb) {
        var ZG = bG[GG];
        return ZG === wG ? void 0 : ZG
      }
      return bb.call(bG, GG) ? bG[GG] : void 0
    }, mb.prototype.has = function(GG) {
      var bG = this.__data__;
      return zb ? void 0 !== bG[GG] : bb.call(bG, GG)
    }, mb.prototype.set = function(GG, bG) {
      return this.__data__[GG] = zb && void 0 === bG ? wG : bG, this
    }, Ib.prototype.clear = function() {
      this.__data__ = []
    }, Ib.prototype.delete = function(GG) {
      var bG = this.__data__,
        ZG = lb(bG, GG);
      return !(ZG < 0) && (ZG == bG.length - 1 ? bG.pop() : Vb.call(bG, ZG, 1), !0)
    }, Ib.prototype.get = function(GG) {
      var bG = this.__data__,
        ZG = lb(bG, GG);
      return ZG < 0 ? void 0 : bG[ZG][1]
    }, Ib.prototype.has = function(GG) {
      return lb(this.__data__, GG) > -1
    }, Ib.prototype.set = function(GG, bG) {
      var ZG = this.__data__,
        wG = lb(ZG, GG);
      return wG < 0 ? ZG.push([GG, bG]) : ZG[wG][1] = bG, this
    }, Fb.prototype.clear = function() {
      this.__data__ = {
        hash: new mb,
        map: new(hb || Ib),
        string: new mb
      }
    }, Fb.prototype.delete = function(GG) {
      return sb(this, GG).delete(GG)
    }, Fb.prototype.get = function(GG) {
      return sb(this, GG).get(GG)
    }, Fb.prototype.has = function(GG) {
      return sb(this, GG).has(GG)
    }, Fb.prototype.set = function(GG, bG) {
      return sb(this, GG).set(GG, bG), this
    }, vb.prototype.clear = function() {
      this.__data__ = new Ib
    }, vb.prototype.delete = function(GG) {
      return this.__data__.delete(GG)
    }, vb.prototype.get = function(GG) {
      return this.__data__.get(GG)
    }, vb.prototype.has = function(GG) {
      return this.__data__.has(GG)
    }, vb.prototype.set = function(GG, bG) {
      var ZG = this.__data__;
      if (ZG instanceof Ib) {
        var wG = ZG.__data__;
        if (!hb || wG.length < 199) return wG.push([GG, bG]), this;
        ZG = this.__data__ = new Fb(wG)
      }
      return ZG.set(GG, bG), this
    };
    var nb = pb ? HG(pb, Object) : function() {
        return []
      },
      gb = function(GG) {
        return Zb.call(GG)
      };

    function eb(GG, bG) {
      return !!(bG = null == bG ? SG : bG) && ("number" == typeof GG || cG.test(GG)) && GG > -1 && GG % 1 == 0 && GG < bG
    }

    function Rb(GG) {
      var bG = GG && GG.constructor;
      return GG === ("function" == typeof bG && bG.prototype || OG)
    }

    function Tb(GG) {
      if (null != GG) {
        try {
          return Gb.call(GG)
        } catch (bG) {}
        try {
          return GG + ""
        } catch (bG) {}
      }
      return ""
    }

    function Hb(GG, bG) {
      return GG === bG || GG !== GG && bG !== bG
    }(Kb && gb(new Kb(new ArrayBuffer(1))) != EG || hb && gb(new hb) != VG || db && gb(db.resolve()) != QG || Jb && gb(new Jb) != hG || rb && gb(new rb) != rG) && (gb = function(GG) {
      var bG = Zb.call(GG),
        ZG = bG == fG ? GG.constructor : void 0,
        wG = ZG ? Tb(ZG) : void 0;
      if (wG) switch (wG) {
        case Eb:
          return EG;
        case ob:
          return VG;
        case Xb:
          return QG;
        case ub:
          return hG;
        case ib:
          return rG
      }
      return bG
    });
    var tb = Array.isArray;

    function Db(GG) {
      return null != GG && function(GG) {
        return "number" == typeof GG && GG > -1 && GG % 1 == 0 && GG <= SG
      }(GG.length) && !Ob(GG)
    }
    var Nb = fb || function() {
      return !1
    };

    function Ob(GG) {
      var bG = xb(GG) ? Zb.call(GG) : "";
      return bG == UG || bG == YG
    }

    function xb(GG) {
      var bG = typeof GG;
      return !!GG && ("object" == bG || "function" == bG)
    }

    function Bb(GG) {
      return Db(GG) ? ab(GG) : function(GG) {
        if (!Rb(GG)) return Qb(GG);
        var bG = [];
        for (var ZG in Object(GG)) bb.call(GG, ZG) && "constructor" != ZG && bG.push(ZG);
        return bG
      }(GG)
    }
    GG.exports = function(GG) {
      return jb(GG, !0, !0)
    }
  },
  38855: GG => {
    function bG(GG, bG, ZG) {
      for (var wG = GG.length, SG = -1 / 0, LG = 1 / 0, yG = 0; yG < wG; yG++) {
        var kG = (ZG[0][yG] - GG[yG]) / bG[yG],
          UG = (ZG[1][yG] - GG[yG]) / bG[yG];
        if (kG > UG) {
          var YG = kG;
          kG = UG, UG = YG
        }
        if (UG < SG || kG > LG) return 1 / 0;
        kG > SG && (SG = kG), UG < LG && (LG = UG)
      }
      return SG > LG ? 1 / 0 : SG
    }
    GG.exports = function(GG, ZG, wG, SG) {
      var LG = bG(ZG, wG, SG);
      if (LG === 1 / 0) GG = null;
      else {
        GG = GG || [];
        for (var yG = 0; yG < ZG.length; yG++) GG[yG] = ZG[yG] + wG[yG] * LG
      }
      return GG
    }, GG.exports.distance = bG
  },
  38135: (GG, bG, ZG) => {
    var wG = ZG(38141);

    function SG(GG) {
      for (var bG, ZG, SG = 0, LG = GG.length, yG = 0; yG < GG.length;) {
        for (bG = GG[yG], ZG = 0; yG < LG && GG[yG] === bG;) ++yG, ++ZG;
        SG += wG.log2(ZG) / 7 | 0, SG += wG.log2(bG >>> 0) / 7 | 0, SG += 2
      }
      return SG
    }
    bG.size = SG, bG.encode = function(GG, bG) {
      bG || (bG = new Uint8Array(SG(GG)));
      for (var ZG, wG, LG = 0, yG = bG.length, kG = 0; kG < GG.length;) {
        for (ZG = GG[kG], wG = 0; kG < GG.length && GG[kG] === ZG;) ++kG, ++wG;
        for (; LG < yG && wG >= 128;) bG[LG++] = 128 + (127 & wG), wG >>>= 7;
        if (LG >= yG) throw new Error("RLE buffer overflow");
        for (bG[LG++] = wG, ZG >>>= 0; LG < yG && ZG >= 128;) bG[LG++] = 128 + (127 & ZG), ZG >>>= 7;
        if (LG >= yG) throw new Error("RLE buffer overflow");
        bG[LG++] = ZG
      }
      return bG
    }, bG.decode = function(GG, bG) {
      for (var ZG, wG, SG, LG, yG = bG.length, kG = GG.length, UG = 0, YG = 0; YG < kG;) {
        for (ZG = 0, wG = 0; YG < kG && GG[YG] >= 128;) ZG += (127 & GG[YG++]) << wG, wG += 7;
        if (ZG += GG[YG++] << wG, YG >= kG) throw new Error("RLE buffer underrun");
        if (UG + ZG > yG) throw new Error("Chunk buffer overflow");
        for (SG = 0, wG = 0; YG < kG && GG[YG] >= 128;) SG += (127 & GG[YG++]) << wG, wG += 7;
        if (YG >= kG) throw new Error("RLE buffer underrun");
        for (SG += GG[YG++] << wG, LG = 0; LG < ZG; ++LG) bG[UG++] = SG
      }
      return bG
    }
  },
  38141: (GG, bG) => {
    function ZG(GG) {
      var bG = 32;
      return (GG &= -GG) && bG--, 65535 & GG && (bG -= 16), 16711935 & GG && (bG -= 8), 252645135 & GG && (bG -= 4), 858993459 & GG && (bG -= 2), 1431655765 & GG && (bG -= 1), bG
    }
    bG.INT_BITS = 32, bG.INT_MAX = 2147483647, bG.INT_MIN = -1 << 31, bG.sign = function(GG) {
      return (GG > 0) - (GG < 0)
    }, bG.abs = function(GG) {
      var bG = GG >> 31;
      return (GG ^ bG) - bG
    }, bG.min = function(GG, bG) {
      return bG ^ (GG ^ bG) & -(GG < bG)
    }, bG.max = function(GG, bG) {
      return GG ^ (GG ^ bG) & -(GG < bG)
    }, bG.isPow2 = function(GG) {
      return !(GG & GG - 1) && !!GG
    }, bG.log2 = function(GG) {
      var bG, ZG;
      return bG = (GG > 65535) << 4, bG |= ZG = ((GG >>>= bG) > 255) << 3, bG |= ZG = ((GG >>>= ZG) > 15) << 2, (bG |= ZG = ((GG >>>= ZG) > 3) << 1) | (GG >>>= ZG) >> 1
    }, bG.log10 = function(GG) {
      return GG >= 1e9 ? 9 : GG >= 1e8 ? 8 : GG >= 1e7 ? 7 : GG >= 1e6 ? 6 : GG >= 1e5 ? 5 : GG >= 1e4 ? 4 : GG >= 1e3 ? 3 : GG >= 100 ? 2 : GG >= 10 ? 1 : 0
    }, bG.popCount = function(GG) {
      return 16843009 * ((GG = (858993459 & (GG -= GG >>> 1 & 1431655765)) + (GG >>> 2 & 858993459)) + (GG >>> 4) & 252645135) >>> 24
    }, bG.countTrailingZeros = ZG, bG.nextPow2 = function(GG) {
      return GG += 0 === GG, --GG, GG |= GG >>> 1, GG |= GG >>> 2, GG |= GG >>> 4, GG |= GG >>> 8, (GG |= GG >>> 16) + 1
    }, bG.prevPow2 = function(GG) {
      return GG |= GG >>> 1, GG |= GG >>> 2, GG |= GG >>> 4, GG |= GG >>> 8, (GG |= GG >>> 16) - (GG >>> 1)
    }, bG.parity = function(GG) {
      return GG ^= GG >>> 16, GG ^= GG >>> 8, GG ^= GG >>> 4, 27030 >>> (GG &= 15) & 1
    };
    var wG = new Array(256);
    ! function(GG) {
      for (var bG = 0; bG < 256; ++bG) {
        var ZG = bG,
          wG = bG,
          SG = 7;
        for (ZG >>>= 1; ZG; ZG >>>= 1) wG <<= 1, wG |= 1 & ZG, --SG;
        GG[bG] = wG << SG & 255
      }
    }(wG), bG.reverse = function(GG) {
      return wG[255 & GG] << 24 | wG[GG >>> 8 & 255] << 16 | wG[GG >>> 16 & 255] << 8 | wG[GG >>> 24 & 255]
    }, bG.interleave2 = function(GG, bG) {
      return (GG = 1431655765 & ((GG = 858993459 & ((GG = 252645135 & ((GG = 16711935 & ((GG &= 65535) | GG << 8)) | GG << 4)) | GG << 2)) | GG << 1)) | (bG = 1431655765 & ((bG = 858993459 & ((bG = 252645135 & ((bG = 16711935 & ((bG &= 65535) | bG << 8)) | bG << 4)) | bG << 2)) | bG << 1)) << 1
    }, bG.deinterleave2 = function(GG, bG) {
      return (GG = 65535 & ((GG = 16711935 & ((GG = 252645135 & ((GG = 858993459 & ((GG = GG >>> bG & 1431655765) | GG >>> 1)) | GG >>> 2)) | GG >>> 4)) | GG >>> 16)) << 16 >> 16
    }, bG.interleave3 = function(GG, bG, ZG) {
      return GG = 1227133513 & ((GG = 3272356035 & ((GG = 251719695 & ((GG = 4278190335 & ((GG &= 1023) | GG << 16)) | GG << 8)) | GG << 4)) | GG << 2), (GG |= (bG = 1227133513 & ((bG = 3272356035 & ((bG = 251719695 & ((bG = 4278190335 & ((bG &= 1023) | bG << 16)) | bG << 8)) | bG << 4)) | bG << 2)) << 1) | (ZG = 1227133513 & ((ZG = 3272356035 & ((ZG = 251719695 & ((ZG = 4278190335 & ((ZG &= 1023) | ZG << 16)) | ZG << 8)) | ZG << 4)) | ZG << 2)) << 2
    }, bG.deinterleave3 = function(GG, bG) {
      return (GG = 1023 & ((GG = 4278190335 & ((GG = 251719695 & ((GG = 3272356035 & ((GG = GG >>> bG & 1227133513) | GG >>> 2)) | GG >>> 4)) | GG >>> 8)) | GG >>> 16)) << 22 >> 22
    }, bG.nextCombination = function(GG) {
      var bG = GG | GG - 1;
      return bG + 1 | (~bG & -~bG) - 1 >>> ZG(GG) + 1
    }
  },
  37618: (GG, bG, ZG) => {
    ZG.d(bG, {
      Color3: () => wG.c,
      e: () => wG.d
    });
    var wG = ZG(37621);
    (0, wG.h)()
  },
  38167: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => SG
    });
    var wG = ZG(38175);
    class SG {
      static GetPlanes(GG) {
        const bG = [];
        for (let ZG = 0; ZG < 6; ZG++) bG.push(new wG.b(0, 0, 0, 0));
        return SG.GetPlanesToRef(GG, bG), bG
      }
      static GetNearPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] + ZG[2], bG.normal.y = ZG[7] + ZG[6], bG.normal.z = ZG[11] + ZG[10], bG.d = ZG[15] + ZG[14], bG.normalize()
      }
      static GetFarPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] - ZG[2], bG.normal.y = ZG[7] - ZG[6], bG.normal.z = ZG[11] - ZG[10], bG.d = ZG[15] - ZG[14], bG.normalize()
      }
      static GetLeftPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] + ZG[0], bG.normal.y = ZG[7] + ZG[4], bG.normal.z = ZG[11] + ZG[8], bG.d = ZG[15] + ZG[12], bG.normalize()
      }
      static GetRightPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] - ZG[0], bG.normal.y = ZG[7] - ZG[4], bG.normal.z = ZG[11] - ZG[8], bG.d = ZG[15] - ZG[12], bG.normalize()
      }
      static GetTopPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] - ZG[1], bG.normal.y = ZG[7] - ZG[5], bG.normal.z = ZG[11] - ZG[9], bG.d = ZG[15] - ZG[13], bG.normalize()
      }
      static GetBottomPlaneToRef(GG, bG) {
        const ZG = GG.m;
        bG.normal.x = ZG[3] + ZG[1], bG.normal.y = ZG[7] + ZG[5], bG.normal.z = ZG[11] + ZG[9], bG.d = ZG[15] + ZG[13], bG.normalize()
      }
      static GetPlanesToRef(GG, bG) {
        SG.GetNearPlaneToRef(GG, bG[0]), SG.GetFarPlaneToRef(GG, bG[1]), SG.GetLeftPlaneToRef(GG, bG[2]), SG.GetRightPlaneToRef(GG, bG[3]), SG.GetTopPlaneToRef(GG, bG[4]), SG.GetBottomPlaneToRef(GG, bG[5])
      }
      static IsPointInFrustum(GG, bG) {
        for (let ZG = 0; ZG < 6; ZG++)
          if (bG[ZG].dotCoordinate(GG) < 0) return !1;
        return !0
      }
    }
  },
  38175: (GG, bG, ZG) => {
    ZG.d(bG, {
      b: () => SG
    });
    var wG = ZG(37439);
    class SG {
      constructor(GG, bG, ZG, SG) {
        this.normal = new wG.p(GG, bG, ZG), this.d = SG
      }
      mwG() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new SG(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let GG = this.normal.getHashCode();
        return GG = 397 * GG ^ this.d, GG
      }
      normalize() {
        const GG = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let bG = 0;
        return 0 !== GG && (bG = 1 / GG), this.normal.x *= bG, this.normal.y *= bG, this.normal.z *= bG, this.d *= bG, this
      }
      transform(GG) {
        const bG = SG._TmpMatrix;
        GG.invertToRef(bG);
        const ZG = bG.m,
          wG = this.normal.x,
          LG = this.normal.y,
          yG = this.normal.z,
          kG = this.d,
          UG = wG * ZG[0] + LG * ZG[1] + yG * ZG[2] + kG * ZG[3],
          YG = wG * ZG[4] + LG * ZG[5] + yG * ZG[6] + kG * ZG[7],
          VG = wG * ZG[8] + LG * ZG[9] + yG * ZG[10] + kG * ZG[11],
          pG = wG * ZG[12] + LG * ZG[13] + yG * ZG[14] + kG * ZG[15];
        return new SG(UG, YG, VG, pG)
      }
      dotCoordinate(GG) {
        return this.normal.x * GG.x + this.normal.y * GG.y + this.normal.z * GG.z + this.d
      }
      copyFromPoints(GG, bG, ZG) {
        const wG = bG.x - GG.x,
          SG = bG.y - GG.y,
          LG = bG.z - GG.z,
          yG = ZG.x - GG.x,
          kG = ZG.y - GG.y,
          UG = ZG.z - GG.z,
          YG = SG * UG - LG * kG,
          VG = LG * yG - wG * UG,
          pG = wG * kG - SG * yG,
          fG = Math.sqrt(YG * YG + VG * VG + pG * pG);
        let QG;
        return QG = 0 !== fG ? 1 / fG : 0, this.normal.x = YG * QG, this.normal.y = VG * QG, this.normal.z = pG * QG, this.d = -(this.normal.x * GG.x + this.normal.y * GG.y + this.normal.z * GG.z), this
      }
      isFrontFacingTo(GG, bG) {
        return wG.p.Dot(this.normal, GG) <= bG
      }
      signedDistanceTo(GG) {
        return wG.p.Dot(GG, this.normal) + this.d
      }
      static FromArray(GG) {
        return new SG(GG[0], GG[1], GG[2], GG[3])
      }
      static FromPoints(GG, bG, ZG) {
        const wG = new SG(0, 0, 0, 0);
        return wG.copyFromPoints(GG, bG, ZG), wG
      }
      static FromPositionAndNormal(GG, bG) {
        const ZG = new SG(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(GG, bG, ZG)
      }
      static FromPositionAndNormalToRef(GG, bG, ZG) {
        return ZG.normal.oW(bG), ZG.normal.normalize(), ZG.d = -GG.dot(ZG.normal), ZG
      }
      static SignedDistanceToPlaneFromPositionAndNormal(GG, bG, ZG) {
        const SG = -(bG.x * GG.x + bG.y * GG.y + bG.z * GG.z);
        return wG.p.Dot(ZG, bG) + SG
      }
    }
    SG._TmpMatrix = wG.e.Identity()
  },
  37432: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      Matrix: () => wG.e,
      Quaternion: () => wG.g,
      RegisterMathVector: () => wG.h,
      TmpVectors: () => wG.j,
      Vector2: () => wG.m,
      mK: () => wG.p,
      Vector4: () => wG.t
    });
    var wG = ZG(37439);
    (0, wG.h)()
  },
  38499: (GG, bG, ZG) => {
    ZG.d(bG, {
      d: () => wG
    });
    class wG {
      constructor(GG, bG, ZG, wG) {
        this.x = GG, this.y = bG, this.width = ZG, this.height = wG
      }
      toGlobal(GG, bG) {
        return new wG(this.x * GG, this.y * bG, this.width * GG, this.height * bG)
      }
      toGlobalToRef(GG, bG, ZG) {
        return ZG.x = this.x * GG, ZG.y = this.y * bG, ZG.width = this.width * GG, ZG.height = this.height * bG, this
      }
      clone() {
        return new wG(this.x, this.y, this.width, this.height)
      }
    }
  },
  38311: (GG, bG, ZG) => {
    function wG() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (GG => {
        const bG = 16 * Math.random() | 0;
        return ("x" === GG ? bG : 3 & bG | 8).toString(16)
      }))
    }
    ZG.d(bG, {
      e: () => wG
    })
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);