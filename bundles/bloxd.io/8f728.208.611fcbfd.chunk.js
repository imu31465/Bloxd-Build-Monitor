/*! For license information please see 8f728.208.611fcbfd.chunk.js.LICENSE.txt */
export const id = 208;
export const ids = [208, 214];
export const modules = {
  36855: cB => {
    cB.exports = function(cB) {
      return null != cB && null != cB.constructor && "function" === typeof cB.constructor.isBuffer && cB.constructor.isBuffer(cB)
    }
  },
  36841: (cB, Bc, nc) => {
    var Vc = nc(36846),
      Ic = nc(36849),
      rB = nc(36855);
    nc.g.__TYPEDARRAY_POOL || (nc.g.__TYPEDARRAY_POOL = {
      UINT8: Ic([32, 0]),
      UINT16: Ic([32, 0]),
      UINT32: Ic([32, 0]),
      INT8: Ic([32, 0]),
      INT16: Ic([32, 0]),
      INT32: Ic([32, 0]),
      FLOAT: Ic([32, 0]),
      DOUBLE: Ic([32, 0]),
      DATA: Ic([32, 0]),
      UINT8C: Ic([32, 0]),
      BUFFER: Ic([32, 0])
    });
    var uc = "undefined" !== typeof Uint8ClampedArray,
      sc = nc.g.__TYPEDARRAY_POOL;
    sc.UINT8C || (sc.UINT8C = Ic([32, 0])), sc.BUFFER || (sc.BUFFER = Ic([32, 0]));
    var Mc = sc.DATA,
      Pc = sc.BUFFER;

    function qB(cB) {
      if (cB) {
        var Bc = cB.length || cB.byteLength,
          nc = Vc.log2(Bc);
        Mc[nc].push(cB)
      }
    }

    function Oc(cB) {
      cB = Vc.nextPow2(cB);
      var Bc = Vc.log2(cB),
        nc = Mc[Bc];
      return nc.length > 0 ? nc.pop() : new ArrayBuffer(cB)
    }

    function Tc(cB) {
      return new Uint8Array(Oc(cB), 0, cB)
    }

    function fc(cB) {
      return new Uint16Array(Oc(2 * cB), 0, cB)
    }

    function mB(cB) {
      return new Uint32Array(Oc(4 * cB), 0, cB)
    }

    function ec(cB) {
      return new Int8Array(Oc(cB), 0, cB)
    }

    function tB(cB) {
      return new Int16Array(Oc(2 * cB), 0, cB)
    }

    function Sc(cB) {
      return new Int32Array(Oc(4 * cB), 0, cB)
    }

    function yB(cB) {
      return new Float32Array(Oc(4 * cB), 0, cB)
    }

    function zB(cB) {
      return new Float64Array(Oc(8 * cB), 0, cB)
    }

    function pc(cB) {
      return uc ? new Uint8ClampedArray(Oc(cB), 0, cB) : Tc(cB)
    }

    function hc(cB) {
      return new DataView(Oc(cB), 0, cB)
    }
    Bc.free = function(cB) {
      if (rB(cB)) Pc[Vc.log2(cB.length)].push(cB);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(cB) && (cB = cB.buffer), !cB) return;
        var Bc = cB.length || cB.byteLength,
          nc = 0 | Vc.log2(Bc);
        Mc[nc].push(cB)
      }
    }, Bc.freeUint8 = Bc.freeUint16 = Bc.freeUint32 = Bc.freeInt8 = Bc.freeInt16 = Bc.freeInt32 = Bc.freeFloat32 = Bc.freeFloat = Bc.freeFloat64 = Bc.freeDouble = Bc.freeUint8Clamped = Bc.freeDataView = function(cB) {
      qB(cB.buffer)
    }, Bc.freeArrayBuffer = qB, Bc.freeBuffer = function(cB) {
      Pc[Vc.log2(cB.length)].push(cB)
    }, Bc.malloc = function(cB, Bc) {
      if (void 0 === Bc || "arraybuffer" === Bc) return Oc(cB);
      switch (Bc) {
        case "uint8":
          return Tc(cB);
        case "uint16":
          return fc(cB);
        case "uint32":
          return mB(cB);
        case "int8":
          return ec(cB);
        case "int16":
          return tB(cB);
        case "int32":
          return Sc(cB);
        case "float":
        case "float32":
          return yB(cB);
        case "double":
        case "float64":
          return zB(cB);
        case "uint8_clamped":
          return pc(cB);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return hc(cB);
        default:
          return null
      }
      return null
    }, Bc.mallocArrayBuffer = Oc, Bc.mallocUint8 = Tc, Bc.mallocUint16 = fc, Bc.mallocUint32 = mB, Bc.mallocInt8 = ec, Bc.mallocInt16 = tB, Bc.mallocInt32 = Sc, Bc.mallocFloat32 = Bc.mallocFloat = yB, Bc.mallocFloat64 = Bc.mallocDouble = zB, Bc.mallocUint8Clamped = pc, Bc.mallocDataView = hc, Bc.clearCache = function() {
      for (var cB = 0; cB < 32; ++cB) sc.UINT8[cB].length = 0, sc.UINT16[cB].length = 0, sc.UINT32[cB].length = 0, sc.INT8[cB].length = 0, sc.INT16[cB].length = 0, sc.INT32[cB].length = 0, sc.FLOAT[cB].length = 0, sc.DOUBLE[cB].length = 0, sc.UINT8C[cB].length = 0, Mc[cB].length = 0, Pc[cB].length = 0
    }
  },
  36846: (cB, Bc) => {
    function nc(cB) {
      var Bc = 32;
      return (cB &= -cB) && Bc--, 65535 & cB && (Bc -= 16), 16711935 & cB && (Bc -= 8), 252645135 & cB && (Bc -= 4), 858993459 & cB && (Bc -= 2), 1431655765 & cB && (Bc -= 1), Bc
    }
    Bc.INT_BITS = 32, Bc.INT_MAX = 2147483647, Bc.INT_MIN = -1 << 31, Bc.sign = function(cB) {
      return (cB > 0) - (cB < 0)
    }, Bc.abs = function(cB) {
      var Bc = cB >> 31;
      return (cB ^ Bc) - Bc
    }, Bc.min = function(cB, Bc) {
      return Bc ^ (cB ^ Bc) & -(cB < Bc)
    }, Bc.max = function(cB, Bc) {
      return cB ^ (cB ^ Bc) & -(cB < Bc)
    }, Bc.isPow2 = function(cB) {
      return !(cB & cB - 1) && !!cB
    }, Bc.log2 = function(cB) {
      var Bc, nc;
      return Bc = (cB > 65535) << 4, Bc |= nc = ((cB >>>= Bc) > 255) << 3, Bc |= nc = ((cB >>>= nc) > 15) << 2, (Bc |= nc = ((cB >>>= nc) > 3) << 1) | (cB >>>= nc) >> 1
    }, Bc.log10 = function(cB) {
      return cB >= 1e9 ? 9 : cB >= 1e8 ? 8 : cB >= 1e7 ? 7 : cB >= 1e6 ? 6 : cB >= 1e5 ? 5 : cB >= 1e4 ? 4 : cB >= 1e3 ? 3 : cB >= 100 ? 2 : cB >= 10 ? 1 : 0
    }, Bc.popCount = function(cB) {
      return 16843009 * ((cB = (858993459 & (cB -= cB >>> 1 & 1431655765)) + (cB >>> 2 & 858993459)) + (cB >>> 4) & 252645135) >>> 24
    }, Bc.countTrailingZeros = nc, Bc.nextPow2 = function(cB) {
      return cB += 0 === cB, --cB, cB |= cB >>> 1, cB |= cB >>> 2, cB |= cB >>> 4, cB |= cB >>> 8, (cB |= cB >>> 16) + 1
    }, Bc.prevPow2 = function(cB) {
      return cB |= cB >>> 1, cB |= cB >>> 2, cB |= cB >>> 4, cB |= cB >>> 8, (cB |= cB >>> 16) - (cB >>> 1)
    }, Bc.parity = function(cB) {
      return cB ^= cB >>> 16, cB ^= cB >>> 8, cB ^= cB >>> 4, 27030 >>> (cB &= 15) & 1
    };
    var Vc = new Array(256);
    ! function(cB) {
      for (var Bc = 0; Bc < 256; ++Bc) {
        var nc = Bc,
          Vc = Bc,
          Ic = 7;
        for (nc >>>= 1; nc; nc >>>= 1) Vc <<= 1, Vc |= 1 & nc, --Ic;
        cB[Bc] = Vc << Ic & 255
      }
    }(Vc), Bc.reverse = function(cB) {
      return Vc[255 & cB] << 24 | Vc[cB >>> 8 & 255] << 16 | Vc[cB >>> 16 & 255] << 8 | Vc[cB >>> 24 & 255]
    }, Bc.interleave2 = function(cB, Bc) {
      return (cB = 1431655765 & ((cB = 858993459 & ((cB = 252645135 & ((cB = 16711935 & ((cB &= 65535) | cB << 8)) | cB << 4)) | cB << 2)) | cB << 1)) | (Bc = 1431655765 & ((Bc = 858993459 & ((Bc = 252645135 & ((Bc = 16711935 & ((Bc &= 65535) | Bc << 8)) | Bc << 4)) | Bc << 2)) | Bc << 1)) << 1
    }, Bc.deinterleave2 = function(cB, Bc) {
      return (cB = 65535 & ((cB = 16711935 & ((cB = 252645135 & ((cB = 858993459 & ((cB = cB >>> Bc & 1431655765) | cB >>> 1)) | cB >>> 2)) | cB >>> 4)) | cB >>> 16)) << 16 >> 16
    }, Bc.interleave3 = function(cB, Bc, nc) {
      return cB = 1227133513 & ((cB = 3272356035 & ((cB = 251719695 & ((cB = 4278190335 & ((cB &= 1023) | cB << 16)) | cB << 8)) | cB << 4)) | cB << 2), (cB |= (Bc = 1227133513 & ((Bc = 3272356035 & ((Bc = 251719695 & ((Bc = 4278190335 & ((Bc &= 1023) | Bc << 16)) | Bc << 8)) | Bc << 4)) | Bc << 2)) << 1) | (nc = 1227133513 & ((nc = 3272356035 & ((nc = 251719695 & ((nc = 4278190335 & ((nc &= 1023) | nc << 16)) | nc << 8)) | nc << 4)) | nc << 2)) << 2
    }, Bc.deinterleave3 = function(cB, Bc) {
      return (cB = 1023 & ((cB = 4278190335 & ((cB = 251719695 & ((cB = 3272356035 & ((cB = cB >>> Bc & 1227133513) | cB >>> 2)) | cB >>> 4)) | cB >>> 8)) | cB >>> 16)) << 22 >> 22
    }, Bc.nextCombination = function(cB) {
      var Bc = cB | cB - 1;
      return Bc + 1 | (~Bc & -~Bc) - 1 >>> nc(cB) + 1
    }
  },
  36837: (cB, Bc, nc) => {
    cB.exports = function(cB, Bc, nc) {
      switch (arguments.length) {
        case 1:
          return Vc = [], Pc(Ic = cB, Ic, qB, !0), Vc;
        case 2:
          return "function" === typeof Bc ? Pc(cB, cB, Bc, !0) : function(cB, Bc) {
            return Vc = [], Pc(cB, Bc, qB, !1), Vc
          }(cB, Bc);
        case 3:
          return Pc(cB, Bc, nc, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var Ic
    };
    var Vc, Ic = nc(36841),
      rB = nc(36863),
      uc = nc(36874);

    function sc(cB, Bc) {
      for (var nc = 0; nc < cB; ++nc)
        if (!(Bc[nc] <= Bc[nc + cB])) return !0;
      return !1
    }

    function Mc(cB, Bc, nc, Vc) {
      for (var Ic = 0, rB = 0, uc = 0, Mc = cB.length; uc < Mc; ++uc) {
        var Pc = cB[uc];
        if (!sc(Bc, Pc)) {
          for (var qB = 0; qB < 2 * Bc; ++qB) nc[Ic++] = Pc[qB];
          Vc[rB++] = uc
        }
      }
      return rB
    }

    function Pc(cB, Bc, nc, Vc) {
      var sc = cB.length,
        Pc = Bc.length;
      if (!(sc <= 0 || Pc <= 0)) {
        var qB = cB[0].length >>> 1;
        if (!(qB <= 0)) {
          var Oc, Tc = Ic.mallocDouble(2 * qB * sc),
            fc = Ic.mallocInt32(sc);
          if ((sc = Mc(cB, qB, Tc, fc)) > 0) {
            if (1 === qB && Vc) rB.init(sc), Oc = rB.sweepComplete(qB, nc, 0, sc, Tc, fc, 0, sc, Tc, fc);
            else {
              var mB = Ic.mallocDouble(2 * qB * Pc),
                ec = Ic.mallocInt32(Pc);
              (Pc = Mc(Bc, qB, mB, ec)) > 0 && (rB.init(sc + Pc), Oc = 1 === qB ? rB.sweepBipartite(qB, nc, 0, sc, Tc, fc, 0, Pc, mB, ec) : uc(qB, nc, Vc, sc, Tc, fc, Pc, mB, ec), Ic.free(mB), Ic.free(ec))
            }
            Ic.free(Tc), Ic.free(fc)
          }
          return Oc
        }
      }
    }

    function qB(cB, Bc) {
      Vc.push([cB, Bc])
    }
  },
  36881: (cB, Bc) => {
    var nc = "d",
      Vc = "ax",
      Ic = "fp",
      rB = "es",
      uc = "rs",
      sc = "re",
      Mc = "rb",
      Pc = "bs",
      qB = "be",
      Oc = "bb",
      Tc = [nc, Vc, "vv", uc, sc, Mc, "ri", Pc, qB, Oc, "bi"];

    function fc(cB) {
      var Bc = "bruteForce" + (cB ? "Full" : "Partial"),
        Vc = [],
        uc = Tc.slice();
      cB || uc.splice(3, 0, Ic);
      var sc = ["function " + Bc + "(" + uc.join() + "){"];

      function Mc(Bc, Ic) {
        var uc = function(cB, Bc, Vc) {
          var Ic = "bruteForce" + (cB ? "Red" : "Blue") + (Bc ? "Flip" : "") + (Vc ? "Full" : ""),
            uc = ["function ", Ic, "(", Tc.join(), "){", "var ", rB, "=2*", nc, ";"],
            sc = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            Mc = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (Vc ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return cB ? uc.push(sc, "Q", ":", Mc) : uc.push(Mc, "Q", ":", sc), Vc ? uc.push("if(y1<x0||x1<y0)continue;") : Bc ? uc.push("if(y0<=x0||x1<y0)continue;") : uc.push("if(y0<x0||x1<y0)continue;"), uc.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), Bc ? uc.push("yi,xi") : uc.push("xi,yi"), uc.push(");if(rv!==void 0)return rv;}}}"), {
            name: Ic,
            code: uc.join("")
          }
        }(Bc, Ic, cB);
        Vc.push(uc.code), sc.push("return " + uc.name + "(" + Tc.join() + ");")
      }
      sc.push("if(re-rs>be-bs){"), cB ? (Mc(!0, !1), sc.push("}else{"), Mc(!1, !1)) : (sc.push("if(fp){"), Mc(!0, !0), sc.push("}else{"), Mc(!0, !1), sc.push("}}else{if(fp){"), Mc(!1, !0), sc.push("}else{"), Mc(!1, !1), sc.push("}")), sc.push("}}return " + Bc);
      var Pc = Vc.join("") + sc.join("");
      return new Function(Pc)()
    }
    Bc.partial = fc(!1), Bc.full = fc(!0)
  },
  36874: (cB, Bc, nc) => {
    cB.exports = function(cB, Bc, nc, rB, qB, Uc, bB, Zc, Qc) {
      ! function(cB, Bc) {
        var nc = 8 * Ic.log2(Bc + 1) * (cB + 1) | 0,
          rB = Ic.nextPow2(pc * nc);
        aB.length < rB && (Vc.free(aB), aB = Vc.mallocInt32(rB));
        var uc = Ic.nextPow2(hc * nc);
        lc.length < uc && (Vc.free(lc), lc = Vc.mallocDouble(uc))
      }(cB, rB + bB);
      var Cc, vB = 0,
        Dc = 2 * cB;
      Yc(vB++, 0, 0, rB, 0, bB, nc ? 16 : 0, -1 / 0, 1 / 0), nc || Yc(vB++, 0, 0, bB, 0, rB, 1, -1 / 0, 1 / 0);
      for (; vB > 0;) {
        var Nc = (vB -= 1) * pc,
          Ec = aB[Nc],
          oc = aB[Nc + 1],
          Wc = aB[Nc + 2],
          wc = aB[Nc + 3],
          kB = aB[Nc + 4],
          Xc = aB[Nc + 5],
          Hc = vB * hc,
          Fc = lc[Hc],
          Jc = lc[Hc + 1],
          jB = 1 & Xc,
          Rc = !!(16 & Xc),
          iB = qB,
          Kc = Uc,
          xB = Zc,
          dc = Qc;
        if (jB && (iB = Zc, Kc = Qc, xB = qB, dc = Uc), !(2 & Xc && oc >= (Wc = tB(cB, Ec, oc, Wc, iB, Kc, Jc))) && !(4 & Xc && (oc = Sc(cB, Ec, oc, Wc, iB, Kc, Fc)) >= Wc)) {
          var Ac = Wc - oc,
            Gc = kB - wc;
          if (Rc) {
            if (cB * Ac * (Ac + Gc) < fc) {
              if (void 0 !== (Cc = Mc.scanComplete(cB, Ec, Bc, oc, Wc, iB, Kc, wc, kB, xB, dc))) return Cc;
              continue
            }
          } else {
            if (cB * Math.min(Ac, Gc) < Oc) {
              if (void 0 !== (Cc = uc(cB, Ec, Bc, jB, oc, Wc, iB, Kc, wc, kB, xB, dc))) return Cc;
              continue
            }
            if (cB * Ac * Gc < Tc) {
              if (void 0 !== (Cc = Mc.scanBipartite(cB, Ec, Bc, jB, oc, Wc, iB, Kc, wc, kB, xB, dc))) return Cc;
              continue
            }
          }
          var cn = mB(cB, Ec, oc, Wc, iB, Kc, Fc, Jc);
          if (oc < cn)
            if (cB * (cn - oc) < Oc) {
              if (void 0 !== (Cc = sc(cB, Ec + 1, Bc, oc, cn, iB, Kc, wc, kB, xB, dc))) return Cc
            } else if (Ec === cB - 2) {
            if (void 0 !== (Cc = jB ? Mc.sweepBipartite(cB, Bc, wc, kB, xB, dc, oc, cn, iB, Kc) : Mc.sweepBipartite(cB, Bc, oc, cn, iB, Kc, wc, kB, xB, dc))) return Cc
          } else Yc(vB++, Ec + 1, oc, cn, wc, kB, jB, -1 / 0, 1 / 0), Yc(vB++, Ec + 1, wc, kB, oc, cn, 1 ^ jB, -1 / 0, 1 / 0);
          if (cn < Wc) {
            var BB = Pc(cB, Ec, wc, kB, xB, dc),
              nB = xB[Dc * BB + Ec],
              VB = ec(cB, Ec, BB, kB, xB, dc, nB);
            if (VB < kB && Yc(vB++, Ec, cn, Wc, VB, kB, (4 | jB) + (Rc ? 16 : 0), nB, Jc), wc < BB && Yc(vB++, Ec, cn, Wc, wc, BB, (2 | jB) + (Rc ? 16 : 0), Fc, nB), BB + 1 === VB) {
              if (void 0 !== (Cc = Rc ? gB(cB, Ec, Bc, cn, Wc, iB, Kc, BB, xB, dc[BB]) : Lc(cB, Ec, Bc, jB, cn, Wc, iB, Kc, BB, xB, dc[BB]))) return Cc
            } else if (BB < VB) {
              var IB;
              if (Rc) {
                if (cn < (IB = yB(cB, Ec, cn, Wc, iB, Kc, nB))) {
                  var rn = ec(cB, Ec, cn, IB, iB, Kc, nB);
                  if (Ec === cB - 2) {
                    if (cn < rn && void 0 !== (Cc = Mc.sweepComplete(cB, Bc, cn, rn, iB, Kc, BB, VB, xB, dc))) return Cc;
                    if (rn < IB && void 0 !== (Cc = Mc.sweepBipartite(cB, Bc, rn, IB, iB, Kc, BB, VB, xB, dc))) return Cc
                  } else cn < rn && Yc(vB++, Ec + 1, cn, rn, BB, VB, 16, -1 / 0, 1 / 0), rn < IB && (Yc(vB++, Ec + 1, rn, IB, BB, VB, 0, -1 / 0, 1 / 0), Yc(vB++, Ec + 1, BB, VB, rn, IB, 1, -1 / 0, 1 / 0))
                }
              } else cn < (IB = jB ? zB(cB, Ec, cn, Wc, iB, Kc, nB) : yB(cB, Ec, cn, Wc, iB, Kc, nB)) && (Ec === cB - 2 ? Cc = jB ? Mc.sweepBipartite(cB, Bc, BB, VB, xB, dc, cn, IB, iB, Kc) : Mc.sweepBipartite(cB, Bc, cn, IB, iB, Kc, BB, VB, xB, dc) : (Yc(vB++, Ec + 1, cn, IB, BB, VB, jB, -1 / 0, 1 / 0), Yc(vB++, Ec + 1, BB, VB, cn, IB, 1 ^ jB, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var Vc = nc(36841),
      Ic = nc(36846),
      rB = nc(36881),
      uc = rB.partial,
      sc = rB.full,
      Mc = nc(36863),
      Pc = nc(36886),
      qB = nc(36894),
      Oc = 128,
      Tc = 1 << 22,
      fc = 1 << 22,
      mB = qB("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      ec = qB("lo===p0", ["p0"]),
      tB = qB("lo<p0", ["p0"]),
      Sc = qB("hi<=p0", ["p0"]),
      yB = qB("lo<=p0&&p0<=hi", ["p0"]),
      zB = qB("lo<p0&&p0<=hi", ["p0"]),
      pc = 6,
      hc = 2,
      aB = Vc.mallocInt32(1024),
      lc = Vc.mallocDouble(1024);

    function Yc(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc) {
      var Pc = pc * cB;
      aB[Pc] = Bc, aB[Pc + 1] = nc, aB[Pc + 2] = Vc, aB[Pc + 3] = Ic, aB[Pc + 4] = rB, aB[Pc + 5] = uc;
      var qB = hc * cB;
      lc[qB] = sc, lc[qB + 1] = Mc
    }

    function Lc(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc, qB) {
      var Oc = 2 * cB,
        Tc = Mc * Oc,
        fc = Pc[Tc + Bc];
      cB: for (var mB = Ic, ec = Ic * Oc; mB < rB; ++mB, ec += Oc) {
        var tB = uc[ec + Bc],
          Sc = uc[ec + Bc + cB];
        if (!(fc < tB || Sc < fc) && (!Vc || fc !== tB)) {
          for (var yB, zB = sc[mB], pc = Bc + 1; pc < cB; ++pc) {
            tB = uc[ec + pc], Sc = uc[ec + pc + cB];
            var hc = Pc[Tc + pc],
              aB = Pc[Tc + pc + cB];
            if (Sc < hc || aB < tB) continue cB
          }
          if (void 0 !== (yB = Vc ? nc(qB, zB) : nc(zB, qB))) return yB
        }
      }
    }

    function gB(cB, Bc, nc, Vc, Ic, rB, uc, sc, Mc, Pc) {
      var qB = 2 * cB,
        Oc = sc * qB,
        Tc = Mc[Oc + Bc];
      cB: for (var fc = Vc, mB = Vc * qB; fc < Ic; ++fc, mB += qB) {
        var ec = uc[fc];
        if (ec !== Pc) {
          var tB = rB[mB + Bc],
            Sc = rB[mB + Bc + cB];
          if (!(Tc < tB || Sc < Tc)) {
            for (var yB = Bc + 1; yB < cB; ++yB) {
              tB = rB[mB + yB], Sc = rB[mB + yB + cB];
              var zB = Mc[Oc + yB],
                pc = Mc[Oc + yB + cB];
              if (Sc < zB || pc < tB) continue cB
            }
            var hc = nc(ec, Pc);
            if (void 0 !== hc) return hc
          }
        }
      }
    }
  },
  36886: (cB, Bc, nc) => {
    cB.exports = function(cB, Bc, nc, uc, sc, Mc) {
      if (uc <= nc + 1) return nc;
      var Pc = nc,
        qB = uc,
        Oc = uc + nc >>> 1,
        Tc = 2 * cB,
        fc = Oc,
        mB = sc[Tc * Oc + Bc];
      for (; Pc < qB;) {
        if (qB - Pc < Ic) {
          rB(cB, Bc, Pc, qB, sc, Mc), mB = sc[Tc * Oc + Bc];
          break
        }
        var ec = qB - Pc,
          tB = Math.random() * ec + Pc | 0,
          Sc = sc[Tc * tB + Bc],
          yB = Math.random() * ec + Pc | 0,
          zB = sc[Tc * yB + Bc],
          pc = Math.random() * ec + Pc | 0,
          hc = sc[Tc * pc + Bc];
        Sc <= zB ? hc >= zB ? (fc = yB, mB = zB) : Sc >= hc ? (fc = tB, mB = Sc) : (fc = pc, mB = hc) : zB >= hc ? (fc = yB, mB = zB) : hc >= Sc ? (fc = tB, mB = Sc) : (fc = pc, mB = hc);
        for (var aB = Tc * (qB - 1), lc = Tc * fc, Yc = 0; Yc < Tc; ++Yc, ++aB, ++lc) {
          var Lc = sc[aB];
          sc[aB] = sc[lc], sc[lc] = Lc
        }
        var gB = Mc[qB - 1];
        Mc[qB - 1] = Mc[fc], Mc[fc] = gB;
        for (aB = Tc * (qB - 1), lc = Tc * (fc = Vc(cB, Bc, Pc, qB - 1, sc, Mc, mB)), Yc = 0; Yc < Tc; ++Yc, ++aB, ++lc) {
          Lc = sc[aB];
          sc[aB] = sc[lc], sc[lc] = Lc
        }
        gB = Mc[qB - 1];
        if (Mc[qB - 1] = Mc[fc], Mc[fc] = gB, Oc < fc) {
          for (qB = fc - 1; Pc < qB && sc[Tc * (qB - 1) + Bc] === mB;) qB -= 1;
          qB += 1
        } else {
          if (!(fc < Oc)) break;
          for (Pc = fc + 1; Pc < qB && sc[Tc * Pc + Bc] === mB;) Pc += 1
        }
      }
      return Vc(cB, Bc, nc, Oc, sc, Mc, sc[Tc * Oc + Bc])
    };
    var Vc = nc(36894)("lo<p0", ["p0"]),
      Ic = 8;

    function rB(cB, Bc, nc, Vc, Ic, rB) {
      for (var uc = 2 * cB, sc = uc * (nc + 1) + Bc, Mc = nc + 1; Mc < Vc; ++Mc, sc += uc)
        for (var Pc = Ic[sc], qB = Mc, Oc = uc * (Mc - 1); qB > nc && Ic[Oc + Bc] > Pc; --qB, Oc -= uc) {
          for (var Tc = Oc, fc = Oc + uc, mB = 0; mB < uc; ++mB, ++Tc, ++fc) {
            var ec = Ic[Tc];
            Ic[Tc] = Ic[fc], Ic[fc] = ec
          }
          var tB = rB[qB];
          rB[qB] = rB[qB - 1], rB[qB - 1] = tB
        }
    }
  },
  36894: cB => {
    cB.exports = function(cB, nc) {
      var Vc = "abcdef".split("").concat(nc),
        Ic = [];
      cB.indexOf("lo") >= 0 && Ic.push("lo=e[k+n]");
      cB.indexOf("hi") >= 0 && Ic.push("hi=e[k+o]");
      return Vc.push(Bc.replace("_", Ic.join()).replace("$", cB)), Function.apply(void 0, Vc)
    };
    var Bc = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  36871: cB => {
    cB.exports = function(cB, Vc) {
      Vc <= 4 * Bc ? nc(0, Vc - 1, cB) : Pc(0, Vc - 1, cB)
    };
    var Bc = 32;

    function nc(cB, Bc, nc) {
      for (var Vc = 2 * (cB + 1), Ic = cB + 1; Ic <= Bc; ++Ic) {
        for (var rB = nc[Vc++], uc = nc[Vc++], sc = Ic, Mc = Vc - 2; sc-- > cB;) {
          var Pc = nc[Mc - 2],
            qB = nc[Mc - 1];
          if (Pc < rB) break;
          if (Pc === rB && qB < uc) break;
          nc[Mc] = Pc, nc[Mc + 1] = qB, Mc -= 2
        }
        nc[Mc] = rB, nc[Mc + 1] = uc
      }
    }

    function Vc(cB, Bc, nc) {
      Bc *= 2;
      var Vc = nc[cB *= 2],
        Ic = nc[cB + 1];
      nc[cB] = nc[Bc], nc[cB + 1] = nc[Bc + 1], nc[Bc] = Vc, nc[Bc + 1] = Ic
    }

    function Ic(cB, Bc, nc) {
      Bc *= 2, nc[cB *= 2] = nc[Bc], nc[cB + 1] = nc[Bc + 1]
    }

    function rB(cB, Bc, nc, Vc) {
      Bc *= 2, nc *= 2;
      var Ic = Vc[cB *= 2],
        rB = Vc[cB + 1];
      Vc[cB] = Vc[Bc], Vc[cB + 1] = Vc[Bc + 1], Vc[Bc] = Vc[nc], Vc[Bc + 1] = Vc[nc + 1], Vc[nc] = Ic, Vc[nc + 1] = rB
    }

    function uc(cB, Bc, nc, Vc, Ic) {
      Bc *= 2, Ic[cB *= 2] = Ic[Bc], Ic[Bc] = nc, Ic[cB + 1] = Ic[Bc + 1], Ic[Bc + 1] = Vc
    }

    function sc(cB, Bc, nc) {
      Bc *= 2;
      var Vc = nc[cB *= 2],
        Ic = nc[Bc];
      return !(Vc < Ic) && (Vc !== Ic || nc[cB + 1] > nc[Bc + 1])
    }

    function Mc(cB, Bc, nc, Vc) {
      var Ic = Vc[cB *= 2];
      return Ic < Bc || Ic === Bc && Vc[cB + 1] < nc
    }

    function Pc(cB, qB, Oc) {
      var Tc = (qB - cB + 1) / 6 | 0,
        fc = cB + Tc,
        mB = qB - Tc,
        ec = cB + qB >> 1,
        tB = ec - Tc,
        Sc = ec + Tc,
        yB = fc,
        zB = tB,
        pc = ec,
        hc = Sc,
        aB = mB,
        lc = cB + 1,
        Yc = qB - 1,
        Lc = 0;
      sc(yB, zB, Oc) && (Lc = yB, yB = zB, zB = Lc), sc(hc, aB, Oc) && (Lc = hc, hc = aB, aB = Lc), sc(yB, pc, Oc) && (Lc = yB, yB = pc, pc = Lc), sc(zB, pc, Oc) && (Lc = zB, zB = pc, pc = Lc), sc(yB, hc, Oc) && (Lc = yB, yB = hc, hc = Lc), sc(pc, hc, Oc) && (Lc = pc, pc = hc, hc = Lc), sc(zB, aB, Oc) && (Lc = zB, zB = aB, aB = Lc), sc(zB, pc, Oc) && (Lc = zB, zB = pc, pc = Lc), sc(hc, aB, Oc) && (Lc = hc, hc = aB, aB = Lc);
      for (var gB = Oc[2 * zB], Uc = Oc[2 * zB + 1], bB = Oc[2 * hc], Zc = Oc[2 * hc + 1], Qc = 2 * yB, Cc = 2 * pc, vB = 2 * aB, Dc = 2 * fc, Nc = 2 * ec, Ec = 2 * mB, oc = 0; oc < 2; ++oc) {
        var Wc = Oc[Qc + oc],
          wc = Oc[Cc + oc],
          kB = Oc[vB + oc];
        Oc[Dc + oc] = Wc, Oc[Nc + oc] = wc, Oc[Ec + oc] = kB
      }
      Ic(tB, cB, Oc), Ic(Sc, qB, Oc);
      for (var Xc = lc; Xc <= Yc; ++Xc)
        if (Mc(Xc, gB, Uc, Oc)) Xc !== lc && Vc(Xc, lc, Oc), ++lc;
        else if (!Mc(Xc, bB, Zc, Oc))
        for (;;) {
          if (Mc(Yc, bB, Zc, Oc)) {
            Mc(Yc, gB, Uc, Oc) ? (rB(Xc, lc, Yc, Oc), ++lc, --Yc) : (Vc(Xc, Yc, Oc), --Yc);
            break
          }
          if (--Yc < Xc) break
        }
      uc(cB, lc - 1, gB, Uc, Oc), uc(qB, Yc + 1, bB, Zc, Oc), lc - 2 - cB <= Bc ? nc(cB, lc - 2, Oc) : Pc(cB, lc - 2, Oc), qB - (Yc + 2) <= Bc ? nc(Yc + 2, qB, Oc) : Pc(Yc + 2, qB, Oc), Yc - lc <= Bc ? nc(lc, Yc, Oc) : Pc(lc, Yc, Oc)
    }
  },
  36863: (cB, Bc, nc) => {
    cB.exports = {
      init: function(cB) {
        var Bc = Ic.nextPow2(cB);
        Mc.length < Bc && (Vc.free(Mc), Mc = Vc.mallocInt32(Bc));
        Pc.length < Bc && (Vc.free(Pc), Pc = Vc.mallocInt32(Bc));
        qB.length < Bc && (Vc.free(qB), qB = Vc.mallocInt32(Bc));
        Oc.length < Bc && (Vc.free(Oc), Oc = Vc.mallocInt32(Bc));
        Tc.length < Bc && (Vc.free(Tc), Tc = Vc.mallocInt32(Bc));
        fc.length < Bc && (Vc.free(fc), fc = Vc.mallocInt32(Bc));
        var nc = 8 * Bc;
        mB.length < nc && (Vc.free(mB), mB = Vc.mallocDouble(nc))
      },
      sweepBipartite: function(cB, Bc, nc, Vc, Ic, sc, Tc, fc, Sc, yB) {
        for (var zB = 0, pc = 2 * cB, hc = cB - 1, aB = pc - 1, lc = nc; lc < Vc; ++lc) {
          var Yc = sc[lc],
            Lc = pc * lc;
          mB[zB++] = Ic[Lc + hc], mB[zB++] = -(Yc + 1), mB[zB++] = Ic[Lc + aB], mB[zB++] = Yc
        }
        for (lc = Tc; lc < fc; ++lc) {
          Yc = yB[lc] + uc;
          var gB = pc * lc;
          mB[zB++] = Sc[gB + hc], mB[zB++] = -Yc, mB[zB++] = Sc[gB + aB], mB[zB++] = Yc
        }
        var Uc = zB >>> 1;
        rB(mB, Uc);
        var bB = 0,
          Zc = 0;
        for (lc = 0; lc < Uc; ++lc) {
          var Qc = 0 | mB[2 * lc + 1];
          if (Qc >= uc) ec(qB, Oc, Zc--, Qc = Qc - uc | 0);
          else if (Qc >= 0) ec(Mc, Pc, bB--, Qc);
          else if (Qc <= -uc) {
            Qc = -Qc - uc | 0;
            for (var Cc = 0; Cc < bB; ++Cc) {
              if (void 0 !== (vB = Bc(Mc[Cc], Qc))) return vB
            }
            tB(qB, Oc, Zc++, Qc)
          } else {
            Qc = -Qc - 1 | 0;
            for (Cc = 0; Cc < Zc; ++Cc) {
              var vB;
              if (void 0 !== (vB = Bc(Qc, qB[Cc]))) return vB
            }
            tB(Mc, Pc, bB++, Qc)
          }
        }
      },
      sweepComplete: function(cB, Bc, nc, Vc, Ic, uc, sc, Sc, yB, zB) {
        for (var pc = 0, hc = 2 * cB, aB = cB - 1, lc = hc - 1, Yc = nc; Yc < Vc; ++Yc) {
          var Lc = uc[Yc] + 1 << 1,
            gB = hc * Yc;
          mB[pc++] = Ic[gB + aB], mB[pc++] = -Lc, mB[pc++] = Ic[gB + lc], mB[pc++] = Lc
        }
        for (Yc = sc; Yc < Sc; ++Yc) {
          Lc = zB[Yc] + 1 << 1;
          var Uc = hc * Yc;
          mB[pc++] = yB[Uc + aB], mB[pc++] = 1 | -Lc, mB[pc++] = yB[Uc + lc], mB[pc++] = 1 | Lc
        }
        var bB = pc >>> 1;
        rB(mB, bB);
        var Zc = 0,
          Qc = 0,
          Cc = 0;
        for (Yc = 0; Yc < bB; ++Yc) {
          var vB = 0 | mB[2 * Yc + 1],
            Dc = 1 & vB;
          if (Yc < bB - 1 && vB >> 1 === mB[2 * Yc + 3] >> 1 && (Dc = 2, Yc += 1), vB < 0) {
            for (var Nc = -(vB >> 1) - 1, Ec = 0; Ec < Cc; ++Ec) {
              if (void 0 !== (oc = Bc(Tc[Ec], Nc))) return oc
            }
            if (0 !== Dc)
              for (Ec = 0; Ec < Zc; ++Ec) {
                if (void 0 !== (oc = Bc(Mc[Ec], Nc))) return oc
              }
            if (1 !== Dc)
              for (Ec = 0; Ec < Qc; ++Ec) {
                var oc;
                if (void 0 !== (oc = Bc(qB[Ec], Nc))) return oc
              }
            0 === Dc ? tB(Mc, Pc, Zc++, Nc) : 1 === Dc ? tB(qB, Oc, Qc++, Nc) : 2 === Dc && tB(Tc, fc, Cc++, Nc)
          } else {
            Nc = (vB >> 1) - 1;
            0 === Dc ? ec(Mc, Pc, Zc--, Nc) : 1 === Dc ? ec(qB, Oc, Qc--, Nc) : 2 === Dc && ec(Tc, fc, Cc--, Nc)
          }
        }
      },
      scanBipartite: function(cB, Bc, nc, Vc, Ic, sc, qB, Oc, Tc, fc, Sc, yB) {
        var zB = 0,
          pc = 2 * cB,
          hc = Bc,
          aB = Bc + cB,
          lc = 1,
          Yc = 1;
        Vc ? Yc = uc : lc = uc;
        for (var Lc = Ic; Lc < sc; ++Lc) {
          var gB = Lc + lc,
            Uc = pc * Lc;
          mB[zB++] = qB[Uc + hc], mB[zB++] = -gB, mB[zB++] = qB[Uc + aB], mB[zB++] = gB
        }
        for (Lc = Tc; Lc < fc; ++Lc) {
          gB = Lc + Yc;
          var bB = pc * Lc;
          mB[zB++] = Sc[bB + hc], mB[zB++] = -gB
        }
        var Zc = zB >>> 1;
        rB(mB, Zc);
        var Qc = 0;
        for (Lc = 0; Lc < Zc; ++Lc) {
          var Cc = 0 | mB[2 * Lc + 1];
          if (Cc < 0) {
            var vB = !1;
            if ((gB = -Cc) >= uc ? (vB = !Vc, gB -= uc) : (vB = !!Vc, gB -= 1), vB) tB(Mc, Pc, Qc++, gB);
            else {
              var Dc = yB[gB],
                Nc = pc * gB,
                Ec = Sc[Nc + Bc + 1],
                oc = Sc[Nc + Bc + 1 + cB];
              cB: for (var Wc = 0; Wc < Qc; ++Wc) {
                var wc = Mc[Wc],
                  kB = pc * wc;
                if (!(oc < qB[kB + Bc + 1] || qB[kB + Bc + 1 + cB] < Ec)) {
                  for (var Xc = Bc + 2; Xc < cB; ++Xc)
                    if (Sc[Nc + Xc + cB] < qB[kB + Xc] || qB[kB + Xc + cB] < Sc[Nc + Xc]) continue cB;
                  var Hc, Fc = Oc[wc];
                  if (void 0 !== (Hc = Vc ? nc(Dc, Fc) : nc(Fc, Dc))) return Hc
                }
              }
            }
          } else ec(Mc, Pc, Qc--, Cc - lc)
        }
      },
      scanComplete: function(cB, Bc, nc, Vc, Ic, sc, Pc, qB, Oc, Tc, fc) {
        for (var ec = 0, tB = 2 * cB, Sc = Bc, yB = Bc + cB, zB = Vc; zB < Ic; ++zB) {
          var pc = zB + uc,
            hc = tB * zB;
          mB[ec++] = sc[hc + Sc], mB[ec++] = -pc, mB[ec++] = sc[hc + yB], mB[ec++] = pc
        }
        for (zB = qB; zB < Oc; ++zB) {
          pc = zB + 1;
          var aB = tB * zB;
          mB[ec++] = Tc[aB + Sc], mB[ec++] = -pc
        }
        var lc = ec >>> 1;
        rB(mB, lc);
        var Yc = 0;
        for (zB = 0; zB < lc; ++zB) {
          var Lc = 0 | mB[2 * zB + 1];
          if (Lc < 0) {
            if ((pc = -Lc) >= uc) Mc[Yc++] = pc - uc;
            else {
              var gB = fc[pc -= 1],
                Uc = tB * pc,
                bB = Tc[Uc + Bc + 1],
                Zc = Tc[Uc + Bc + 1 + cB];
              cB: for (var Qc = 0; Qc < Yc; ++Qc) {
                var Cc = Mc[Qc],
                  vB = Pc[Cc];
                if (vB === gB) break;
                var Dc = tB * Cc;
                if (!(Zc < sc[Dc + Bc + 1] || sc[Dc + Bc + 1 + cB] < bB)) {
                  for (var Nc = Bc + 2; Nc < cB; ++Nc)
                    if (Tc[Uc + Nc + cB] < sc[Dc + Nc] || sc[Dc + Nc + cB] < Tc[Uc + Nc]) continue cB;
                  var Ec = nc(vB, gB);
                  if (void 0 !== Ec) return Ec
                }
              }
            }
          } else {
            for (pc = Lc - uc, Qc = Yc - 1; Qc >= 0; --Qc)
              if (Mc[Qc] === pc) {
                for (Nc = Qc + 1; Nc < Yc; ++Nc) Mc[Nc - 1] = Mc[Nc];
                break
              }-- Yc
          }
        }
      }
    };
    var Vc = nc(36841),
      Ic = nc(36846),
      rB = nc(36871),
      uc = 1 << 28,
      sc = 1024,
      Mc = Vc.mallocInt32(sc),
      Pc = Vc.mallocInt32(sc),
      qB = Vc.mallocInt32(sc),
      Oc = Vc.mallocInt32(sc),
      Tc = Vc.mallocInt32(sc),
      fc = Vc.mallocInt32(sc),
      mB = Vc.mallocDouble(8192);

    function ec(cB, Bc, nc, Vc) {
      var Ic = Bc[Vc],
        rB = cB[nc - 1];
      cB[Ic] = rB, Bc[rB] = Ic
    }

    function tB(cB, Bc, nc, Vc) {
      cB[nc] = Vc, Bc[Vc] = nc
    }
  },
  36849: cB => {
    function Bc(cB, nc, Vc) {
      var Ic = 0 | cB[Vc];
      if (Ic <= 0) return [];
      var rB, uc = new Array(Ic);
      if (Vc === cB.length - 1)
        for (rB = 0; rB < Ic; ++rB) uc[rB] = nc;
      else
        for (rB = 0; rB < Ic; ++rB) uc[rB] = Bc(cB, nc, Vc + 1);
      return uc
    }
    cB.exports = function(cB, nc) {
      switch ("undefined" === typeof nc && (nc = 0), typeof cB) {
        case "number":
          if (cB > 0) return function(cB, Bc) {
            var nc, Vc;
            for (nc = new Array(cB), Vc = 0; Vc < cB; ++Vc) nc[Vc] = Bc;
            return nc
          }(0 | cB, nc);
          break;
        case "object":
          if ("number" === typeof cB.length) return Bc(cB, nc, 0)
      }
      return []
    }
  },
  36802: (cB, Bc, nc) => {
    cB.exports = function() {
      var cB = this;
      this.components = {}, this.comps = this.components;
      var Bc = this.components,
        nc = 1,
        Ic = {},
        rB = [],
        uc = [],
        sc = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function Mc(cB, nc) {
        var Vc = Bc[nc],
          rB = Ic[nc],
          uc = rB.hash[cB];
        uc && (rB.remove(cB), Vc.YBc && (Vc.multi ? (uc.forEach((Bc => {
          Bc && Vc.YBc(cB, Bc)
        })), uc.length = 0) : Vc.YBc(cB, uc)), sc.removals.push(rB), Pc())
      }

      function Pc() {
        sc.timeout || (sc.timeout = !0, setTimeout(qB, 1))
      }

      function qB() {
        sc.timeout = !1, Oc()
      }

      function Oc() {
        sc.multiComps.length && function(cB) {
          for (var Bc = 0; Bc < cB.length; Bc++) {
            var {
              entID: nc,
              data: Vc
            } = cB[Bc], Ic = Vc.hash[nc];
            if (Ic) {
              for (var rB = 0; rB < Ic.length; rB++) Ic[rB] || (Ic.splice(rB, 1), rB--);
              0 === Ic.length && (Vc.remove(nc), sc.removals.push(Vc))
            }
          }
          cB.length = 0
        }(sc.multiComps), sc.removals.length && function(cB) {
          for (var Bc = 0; Bc < cB.length; Bc++) {
            cB[Bc].flush()
          }
          cB.length = 0
        }(sc.removals)
      }
      this.DI = Ic, this._systems = rB, this._renderSystems = uc, this.wVc = function(Bc) {
        var Vc = nc++;
        return Array.isArray(Bc) && Bc.forEach((Bc => cB.cVc(Vc, Bc))), Vc
      }, this.deleteEntity = function(Bc) {
        return Object.keys(Ic).forEach((cB => {
          Ic[cB].hash[Bc] && Mc(Bc, cB)
        })), cB
      }, this.pMc = function(cB) {
        if (!cB) throw new Error("Missing component definition");
        var nc = cB.name;
        if (!nc) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof nc) throw new Error("Component name must be a string.");
        if ("" === nc) throw new Error("Component name must be a non-empty string.");
        if (Ic[nc]) throw new Error(`Component ${nc} already exists.`);
        var sc = {};
        return sc.name = nc, sc.multi = !!cB.multi, sc.order = isNaN(cB.order) ? 99 : cB.order, sc.stateConstructor = cB.stateConstructor || null, sc.state = cB.state || {}, sc.FQ = cB.FQ || null, sc.YBc = cB.YBc || null, sc.system = cB.system || null, sc.nC = cB.nC || null, Bc[nc] = sc, Ic[nc] = new Vc, Ic[nc]._pendingMultiCleanup = !1, Ic[nc]._multiCleanupIDs = sc.multi ? [] : null, sc.system && (rB.push(nc), rB.sort(((cB, nc) => Bc[cB].order - Bc[nc].order))), sc.nC && (uc.push(nc), uc.sort(((cB, nc) => Bc[cB].order - Bc[nc].order))), nc
      }, this.overwriteComponent = function(cB, nc) {
        var Vc = Bc[cB];
        if (!Vc) throw new Error(`Unknown component: ${cB}`);
        if (!nc) throw new Error("Missing component definition");
        if (Vc.name !== nc.name) throw new Error("Overwriting component must use the same name property.");
        var sc = {};
        sc.name = cB, sc.multi = !!nc.multi, sc.order = isNaN(nc.order) ? 99 : nc.order, sc.state = nc.state || {}, sc.FQ = nc.FQ || null, sc.YBc = nc.YBc || null, sc.system = nc.system || null, sc.nC = nc.nC || null, Bc[cB] = sc, Ic[cB]._pendingMultiCleanup = !1, Ic[cB]._multiCleanupIDs = sc.multi ? [] : null;
        var Mc = rB.indexOf(cB);
        sc.system && Mc < 0 && rB.push(cB), !sc.system && Mc >= 0 && rB.splice(Mc, 1), rB.sort(((cB, nc) => Bc[cB].order - Bc[nc].order));
        var Pc = uc.indexOf(cB);
        sc.nC && Pc < 0 && uc.push(cB), !sc.nC && Pc >= 0 && uc.splice(Pc, 1), uc.sort(((cB, nc) => Bc[cB].order - Bc[nc].order));
        var qB = sc.state;
        return this.ABc(cB).forEach((cB => {
          for (var Bc in qB) Bc in cB || (cB[Bc] = qB[Bc]);
          sc.FQ && sc.FQ(cB.GBc, cB)
        })), cB
      }, this.deleteComponent = function(nc) {
        var Vc = Ic[nc];
        if (!Vc) throw new Error(`Unknown component: ${nc}`);
        Vc.flush(), Vc.list.forEach((cB => {
          cB && Mc(cB.GBc || cB[0].GBc, nc)
        }));
        var sc = rB.indexOf(nc),
          Pc = uc.indexOf(nc);
        return sc > -1 && rB.splice(sc, 1), Pc > -1 && uc.splice(Pc, 1), Ic[nc].dispose(), delete Ic[nc], delete Bc[nc], cB
      }, this.cVc = function(cB, nc, Vc) {
        var rB, uc = Bc[nc],
          sc = Ic[nc];
        if (!sc) throw new Error(`Unknown component: ${nc}.`);
        if (sc.hash[cB] && !uc.multi) throw new Error(`Entity ${cB} already has component: ${nc}.`);
        if (uc.stateConstructor) {
          if (!(rB = new uc.stateConstructor).hasOwnProperty("GBc")) throw new Error(`Component ${uc.name} stateConstructor type does not have property __id`);
          Object.assign(rB, uc.state, Vc)
        } else rB = {
          GBc: cB,
          ...uc.state,
          ...Vc
        };
        if (rB.GBc = cB, uc.multi) {
          var Mc = sc.hash[cB];
          Mc || (Mc = [], sc.add(cB, Mc)), Mc.push(rB)
        } else sc.add(cB, rB);
        return uc.FQ && uc.FQ(cB, rB), this
      }, this.Tsc = function(cB, Bc) {
        var nc = Ic[Bc];
        if (!nc) throw new Error(`Unknown component: ${Bc}.`);
        return !!nc.hash[cB]
      }, this.Bnc = function(Bc, nc) {
        if (!Ic[nc]) throw new Error(`Unknown component: ${nc}.`);
        return Mc(Bc, nc), cB
      }, this.getState = function(cB, Bc) {
        var nc = Ic[Bc];
        if (!nc) throw new Error(`Unknown component: ${Bc}.`);
        return nc.hash[cB]
      }, this.ABc = function(cB) {
        var Bc = Ic[cB];
        if (!Bc) throw new Error(`Unknown component: ${cB}.`);
        return Oc(), Bc.list
      }, this.Gsc = function(cB) {
        if (!Ic[cB]) throw new Error(`Unknown component: ${cB}.`);
        var Bc = Ic[cB].hash;
        return cB => Bc[cB]
      }, this.rPc = function(cB) {
        if (!Ic[cB]) throw new Error(`Unknown component: ${cB}.`);
        var Bc = Ic[cB].hash;
        return cB => !!Bc[cB]
      }, this.cn = function(nc) {
        Oc();
        for (var Vc = 0; Vc < rB.length; Vc++) {
          var uc = rB[Vc],
            sc = Bc[uc],
            Mc = Ic[uc];
          sc.system(nc, Mc.list), Oc()
        }
        return cB
      }, this.render = function(nc) {
        Oc();
        for (var Vc = 0; Vc < uc.length; Vc++) {
          var rB = uc[Vc],
            sc = Bc[rB],
            Mc = Ic[rB];
          sc.nC(nc, Mc.list), Oc()
        }
        return cB
      }, this.removeMultiComponent = function(nc, Vc, rB) {
        var uc = Bc[Vc],
          Mc = Ic[Vc];
        if (!Mc) throw new Error(`Unknown component: ${Vc}.`);
        if (!uc.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(cB, Bc, nc, Vc) {
          var Ic = nc.hash[cB];
          if (Ic) {
            var rB = Ic[Vc];
            rB && (Ic[Vc] = null, Bc.YBc && Bc.YBc(cB, rB), sc.multiComps.push({
              entID: cB,
              data: nc
            }), Pc())
          }
        }(nc, uc, Mc, rB), cB
      }
    };
    var Vc = nc(36807)
  },
  36807: cB => {
    function Bc(cB, Bc) {
      var nc = cB._map[Bc];
      if (delete cB.hash[Bc], delete cB._map[Bc], nc === cB.list.length - 1) cB.list.pop(), cB._idList.pop();
      else {
        var Vc = cB.list.pop();
        cB.list[nc] = Vc;
        var Ic = cB._idList.pop();
        cB._idList[nc] = Ic, cB._map[Ic] = nc
      }
    }
    cB.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(cB, Bc) {
        if ("number" === typeof this._map[cB]) {
          var nc = this._map[cB];
          this.hash[cB] = Bc, this.list[nc] = Bc, this._idList[nc] = cB
        } else this._map[cB] = this.list.length, this.hash[cB] = Bc, this.list.push(Bc), this._idList.push(cB)
      }
      remove(cB) {
        var Bc = this._map[cB];
        this.hash[cB] = null, this.list[Bc] = null, this._pendingRemovals.push(cB)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var cB = 0; cB < this._pendingRemovals.length; cB++) {
          var nc = this._pendingRemovals[cB];
          null === this.hash[nc] && Bc(this, nc)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  36263: cB => {
    cB.exports = function(cB) {
      for (var Bc = new Array(cB), nc = 0; nc < cB; ++nc) Bc[nc] = nc;
      return Bc
    }
  },
  36271: cB => {
    function Bc(cB) {
      return !!cB.constructor && "function" === typeof cB.constructor.isBuffer && cB.constructor.isBuffer(cB)
    }
    cB.exports = function(cB) {
      return null != cB && (Bc(cB) || function(cB) {
        return "function" === typeof cB.readFloatLE && "function" === typeof cB.slice && Bc(cB.slice(0, 0))
      }(cB) || !!cB._isBuffer)
    }
  },
  36607: (cB, Bc, nc) => {
    cB = nc.nmd(cB);
    var Vc = "__lodash_hash_undefined__",
      Ic = 9007199254740991,
      rB = "[object Arguments]",
      uc = "[object Boolean]",
      sc = "[object Date]",
      Mc = "[object Function]",
      Pc = "[object GeneratorFunction]",
      qB = "[object Map]",
      Oc = "[object Number]",
      Tc = "[object Object]",
      fc = "[object Promise]",
      mB = "[object RegExp]",
      ec = "[object Set]",
      tB = "[object String]",
      Sc = "[object Symbol]",
      yB = "[object WeakMap]",
      zB = "[object ArrayBuffer]",
      pc = "[object DataView]",
      hc = "[object Float32Array]",
      aB = "[object Float64Array]",
      lc = "[object Int8Array]",
      Yc = "[object Int16Array]",
      Lc = "[object Int32Array]",
      gB = "[object Uint8Array]",
      Uc = "[object Uint8ClampedArray]",
      bB = "[object Uint16Array]",
      Zc = "[object Uint32Array]",
      Qc = /\w*$/,
      Cc = /^\[object .+?Constructor\]$/,
      vB = /^(?:0|[1-9]\d*)$/,
      Dc = {};
    Dc[rB] = Dc["[object Array]"] = Dc[zB] = Dc[pc] = Dc[uc] = Dc[sc] = Dc[hc] = Dc[aB] = Dc[lc] = Dc[Yc] = Dc[Lc] = Dc[qB] = Dc[Oc] = Dc[Tc] = Dc[mB] = Dc[ec] = Dc[tB] = Dc[Sc] = Dc[gB] = Dc[Uc] = Dc[bB] = Dc[Zc] = !0, Dc["[object Error]"] = Dc[Mc] = Dc[yB] = !1;
    var Nc = "object" == typeof nc.g && nc.g && nc.g.Object === Object && nc.g,
      Ec = "object" == typeof self && self && self.Object === Object && self,
      oc = Nc || Ec || Function("return this")(),
      Wc = Bc && !Bc.nodeType && Bc,
      wc = Wc && cB && !cB.nodeType && cB,
      kB = wc && wc.exports === Wc;

    function Xc(cB, Bc) {
      return cB.set(Bc[0], Bc[1]), cB
    }

    function Hc(cB, Bc) {
      return cB.add(Bc), cB
    }

    function Fc(cB, Bc, nc, Vc) {
      var Ic = -1,
        rB = cB ? cB.length : 0;
      for (Vc && rB && (nc = cB[++Ic]); ++Ic < rB;) nc = Bc(nc, cB[Ic], Ic, cB);
      return nc
    }

    function Jc(cB) {
      var Bc = !1;
      if (null != cB && "function" != typeof cB.toString) try {
        Bc = !!(cB + "")
      } catch (nc) {}
      return Bc
    }

    function jB(cB) {
      var Bc = -1,
        nc = Array(cB.size);
      return cB.forEach((function(cB, Vc) {
        nc[++Bc] = [Vc, cB]
      })), nc
    }

    function Rc(cB, Bc) {
      return function(nc) {
        return cB(Bc(nc))
      }
    }

    function iB(cB) {
      var Bc = -1,
        nc = Array(cB.size);
      return cB.forEach((function(cB) {
        nc[++Bc] = cB
      })), nc
    }
    var Kc = Array.prototype,
      xB = Function.prototype,
      dc = Object.prototype,
      Ac = oc["__core-js_shared__"],
      Gc = function() {
        var cB = /[^.]+$/.exec(Ac && Ac.keys && Ac.keys.IE_PROTO || "");
        return cB ? "Symbol(src)_1." + cB : ""
      }(),
      cn = xB.toString,
      BB = dc.hasOwnProperty,
      nB = dc.toString,
      VB = RegExp("^" + cn.call(BB).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      IB = kB ? oc.QV : void 0,
      rn = oc.Symbol,
      uB = oc.Uint8Array,
      sB = Rc(Object.getPrototypeOf, Object),
      MB = Object.create,
      PB = dc.propertyIsEnumerable,
      qn = Kc.splice,
      OB = Object.getOwnPropertySymbols,
      TB = IB ? IB.isBuffer : void 0,
      fB = Rc(Object.keys, Object),
      mn = kn(oc, "DataView"),
      eB = kn(oc, "Map"),
      tn = kn(oc, "Promise"),
      SB = kn(oc, "Set"),
      yn = kn(oc, "WeakMap"),
      zn = kn(Object, "create"),
      pB = jn(mn),
      hB = jn(eB),
      an = jn(tn),
      lB = jn(SB),
      YB = jn(yn),
      LB = rn ? rn.prototype : void 0,
      gn = LB ? LB.valueOf : void 0;

    function UB(cB) {
      var Bc = -1,
        nc = cB ? cB.length : 0;
      for (this.clear(); ++Bc < nc;) {
        var Vc = cB[Bc];
        this.set(Vc[0], Vc[1])
      }
    }

    function bn(cB) {
      var Bc = -1,
        nc = cB ? cB.length : 0;
      for (this.clear(); ++Bc < nc;) {
        var Vc = cB[Bc];
        this.set(Vc[0], Vc[1])
      }
    }

    function ZB(cB) {
      var Bc = -1,
        nc = cB ? cB.length : 0;
      for (this.clear(); ++Bc < nc;) {
        var Vc = cB[Bc];
        this.set(Vc[0], Vc[1])
      }
    }

    function QB(cB) {
      this.__data__ = new bn(cB)
    }

    function CB(cB, Bc) {
      var nc = KB(cB) || function(cB) {
          return function(cB) {
            return function(cB) {
              return !!cB && "object" == typeof cB
            }(cB) && xn(cB)
          }(cB) && BB.call(cB, "callee") && (!PB.call(cB, "callee") || nB.call(cB) == rB)
        }(cB) ? function(cB, Bc) {
          for (var nc = -1, Vc = Array(cB); ++nc < cB;) Vc[nc] = Bc(nc);
          return Vc
        }(cB.length, String) : [],
        Vc = nc.length,
        Ic = !!Vc;
      for (var uc in cB) !Bc && !BB.call(cB, uc) || Ic && ("length" == uc || FB(uc, Vc)) || nc.push(uc);
      return nc
    }

    function vn(cB, Bc, nc) {
      var Vc = cB[Bc];
      BB.call(cB, Bc) && RB(Vc, nc) && (void 0 !== nc || Bc in cB) || (cB[Bc] = nc)
    }

    function DB(cB, Bc) {
      for (var nc = cB.length; nc--;)
        if (RB(cB[nc][0], Bc)) return nc;
      return -1
    }

    function NB(cB, Bc, nc, Vc, Ic, fc, yB) {
      var Cc;
      if (Vc && (Cc = fc ? Vc(cB, Ic, fc, yB) : Vc(cB)), void 0 !== Cc) return Cc;
      if (!GB(cB)) return cB;
      var vB = KB(cB);
      if (vB) {
        if (Cc = function(cB) {
            var Bc = cB.length,
              nc = cB.constructor(Bc);
            Bc && "string" == typeof cB[0] && BB.call(cB, "index") && (nc.index = cB.index, nc.input = cB.input);
            return nc
          }(cB), !Bc) return function(cB, Bc) {
          var nc = -1,
            Vc = cB.length;
          Bc || (Bc = Array(Vc));
          for (; ++nc < Vc;) Bc[nc] = cB[nc];
          return Bc
        }(cB, Cc)
      } else {
        var Nc = HB(cB),
          Ec = Nc == Mc || Nc == Pc;
        if (dB(cB)) return function(cB, Bc) {
          if (Bc) return cB.slice();
          var nc = new cB.constructor(cB.length);
          return cB.copy(nc), nc
        }(cB, Bc);
        if (Nc == Tc || Nc == rB || Ec && !fc) {
          if (Jc(cB)) return fc ? cB : {};
          if (Cc = function(cB) {
              return "function" != typeof cB.constructor || JB(cB) ? {} : (Bc = sB(cB), GB(Bc) ? MB(Bc) : {});
              var Bc
            }(Ec ? {} : cB), !Bc) return function(cB, Bc) {
            return WB(cB, XB(cB), Bc)
          }(cB, function(cB, Bc) {
            return cB && WB(Bc, cV(Bc), cB)
          }(Cc, cB))
        } else {
          if (!Dc[Nc]) return fc ? cB : {};
          Cc = function(cB, Bc, nc, Vc) {
            var Ic = cB.constructor;
            switch (Bc) {
              case zB:
                return oB(cB);
              case uc:
              case sc:
                return new Ic(+cB);
              case pc:
                return function(cB, Bc) {
                  var nc = Bc ? oB(cB.buffer) : cB.buffer;
                  return new cB.constructor(nc, cB.byteOffset, cB.byteLength)
                }(cB, Vc);
              case hc:
              case aB:
              case lc:
              case Yc:
              case Lc:
              case gB:
              case Uc:
              case bB:
              case Zc:
                return function(cB, Bc) {
                  var nc = Bc ? oB(cB.buffer) : cB.buffer;
                  return new cB.constructor(nc, cB.byteOffset, cB.length)
                }(cB, Vc);
              case qB:
                return function(cB, Bc, nc) {
                  var Vc = Bc ? nc(jB(cB), !0) : jB(cB);
                  return Fc(Vc, Xc, new cB.constructor)
                }(cB, Vc, nc);
              case Oc:
              case tB:
                return new Ic(cB);
              case mB:
                return function(cB) {
                  var Bc = new cB.constructor(cB.source, Qc.exec(cB));
                  return Bc.lastIndex = cB.lastIndex, Bc
                }(cB);
              case ec:
                return function(cB, Bc, nc) {
                  var Vc = Bc ? nc(iB(cB), !0) : iB(cB);
                  return Fc(Vc, Hc, new cB.constructor)
                }(cB, Vc, nc);
              case Sc:
                return rB = cB, gn ? Object(gn.call(rB)) : {}
            }
            var rB
          }(cB, Nc, NB, Bc)
        }
      }
      yB || (yB = new QB);
      var oc = yB.get(cB);
      if (oc) return oc;
      if (yB.set(cB, Cc), !vB) var Wc = nc ? function(cB) {
        return function(cB, Bc, nc) {
          var Vc = Bc(cB);
          return KB(cB) ? Vc : function(cB, Bc) {
            for (var nc = -1, Vc = Bc.length, Ic = cB.length; ++nc < Vc;) cB[Ic + nc] = Bc[nc];
            return cB
          }(Vc, nc(cB))
        }(cB, cV, XB)
      }(cB) : cV(cB);
      return function(cB, Bc) {
        for (var nc = -1, Vc = cB ? cB.length : 0; ++nc < Vc && !1 !== Bc(cB[nc], nc, cB););
      }(Wc || cB, (function(Ic, rB) {
        Wc && (Ic = cB[rB = Ic]), vn(Cc, rB, NB(Ic, Bc, nc, Vc, rB, cB, yB))
      })), Cc
    }

    function EB(cB) {
      return !(!GB(cB) || (Bc = cB, Gc && Gc in Bc)) && (AB(cB) || Jc(cB) ? VB : Cc).test(jn(cB));
      var Bc
    }

    function oB(cB) {
      var Bc = new cB.constructor(cB.byteLength);
      return new uB(Bc).set(new uB(cB)), Bc
    }

    function WB(cB, Bc, nc, Vc) {
      nc || (nc = {});
      for (var Ic = -1, rB = Bc.length; ++Ic < rB;) {
        var uc = Bc[Ic],
          sc = Vc ? Vc(nc[uc], cB[uc], uc, nc, cB) : void 0;
        vn(nc, uc, void 0 === sc ? cB[uc] : sc)
      }
      return nc
    }

    function wB(cB, Bc) {
      var nc = cB.__data__;
      return function(cB) {
        var Bc = typeof cB;
        return "string" == Bc || "number" == Bc || "symbol" == Bc || "boolean" == Bc ? "__proto__" !== cB : null === cB
      }(Bc) ? nc["string" == typeof Bc ? "string" : "hash"] : nc.map
    }

    function kn(cB, Bc) {
      var nc = function(cB, Bc) {
        return null == cB ? void 0 : cB[Bc]
      }(cB, Bc);
      return EB(nc) ? nc : void 0
    }
    UB.prototype.clear = function() {
      this.__data__ = zn ? zn(null) : {}
    }, UB.prototype.delete = function(cB) {
      return this.has(cB) && delete this.__data__[cB]
    }, UB.prototype.get = function(cB) {
      var Bc = this.__data__;
      if (zn) {
        var nc = Bc[cB];
        return nc === Vc ? void 0 : nc
      }
      return BB.call(Bc, cB) ? Bc[cB] : void 0
    }, UB.prototype.has = function(cB) {
      var Bc = this.__data__;
      return zn ? void 0 !== Bc[cB] : BB.call(Bc, cB)
    }, UB.prototype.set = function(cB, Bc) {
      return this.__data__[cB] = zn && void 0 === Bc ? Vc : Bc, this
    }, bn.prototype.clear = function() {
      this.__data__ = []
    }, bn.prototype.delete = function(cB) {
      var Bc = this.__data__,
        nc = DB(Bc, cB);
      return !(nc < 0) && (nc == Bc.length - 1 ? Bc.pop() : qn.call(Bc, nc, 1), !0)
    }, bn.prototype.get = function(cB) {
      var Bc = this.__data__,
        nc = DB(Bc, cB);
      return nc < 0 ? void 0 : Bc[nc][1]
    }, bn.prototype.has = function(cB) {
      return DB(this.__data__, cB) > -1
    }, bn.prototype.set = function(cB, Bc) {
      var nc = this.__data__,
        Vc = DB(nc, cB);
      return Vc < 0 ? nc.push([cB, Bc]) : nc[Vc][1] = Bc, this
    }, ZB.prototype.clear = function() {
      this.__data__ = {
        hash: new UB,
        map: new(eB || bn),
        string: new UB
      }
    }, ZB.prototype.delete = function(cB) {
      return wB(this, cB).delete(cB)
    }, ZB.prototype.get = function(cB) {
      return wB(this, cB).get(cB)
    }, ZB.prototype.has = function(cB) {
      return wB(this, cB).has(cB)
    }, ZB.prototype.set = function(cB, Bc) {
      return wB(this, cB).set(cB, Bc), this
    }, QB.prototype.clear = function() {
      this.__data__ = new bn
    }, QB.prototype.delete = function(cB) {
      return this.__data__.delete(cB)
    }, QB.prototype.get = function(cB) {
      return this.__data__.get(cB)
    }, QB.prototype.has = function(cB) {
      return this.__data__.has(cB)
    }, QB.prototype.set = function(cB, Bc) {
      var nc = this.__data__;
      if (nc instanceof bn) {
        var Vc = nc.__data__;
        if (!eB || Vc.length < 199) return Vc.push([cB, Bc]), this;
        nc = this.__data__ = new ZB(Vc)
      }
      return nc.set(cB, Bc), this
    };
    var XB = OB ? Rc(OB, Object) : function() {
        return []
      },
      HB = function(cB) {
        return nB.call(cB)
      };

    function FB(cB, Bc) {
      return !!(Bc = null == Bc ? Ic : Bc) && ("number" == typeof cB || vB.test(cB)) && cB > -1 && cB % 1 == 0 && cB < Bc
    }

    function JB(cB) {
      var Bc = cB && cB.constructor;
      return cB === ("function" == typeof Bc && Bc.prototype || dc)
    }

    function jn(cB) {
      if (null != cB) {
        try {
          return cn.call(cB)
        } catch (Bc) {}
        try {
          return cB + ""
        } catch (Bc) {}
      }
      return ""
    }

    function RB(cB, Bc) {
      return cB === Bc || cB !== cB && Bc !== Bc
    }(mn && HB(new mn(new ArrayBuffer(1))) != pc || eB && HB(new eB) != qB || tn && HB(tn.resolve()) != fc || SB && HB(new SB) != ec || yn && HB(new yn) != yB) && (HB = function(cB) {
      var Bc = nB.call(cB),
        nc = Bc == Tc ? cB.constructor : void 0,
        Vc = nc ? jn(nc) : void 0;
      if (Vc) switch (Vc) {
        case pB:
          return pc;
        case hB:
          return qB;
        case an:
          return fc;
        case lB:
          return ec;
        case YB:
          return yB
      }
      return Bc
    });
    var KB = Array.isArray;

    function xn(cB) {
      return null != cB && function(cB) {
        return "number" == typeof cB && cB > -1 && cB % 1 == 0 && cB <= Ic
      }(cB.length) && !AB(cB)
    }
    var dB = TB || function() {
      return !1
    };

    function AB(cB) {
      var Bc = GB(cB) ? nB.call(cB) : "";
      return Bc == Mc || Bc == Pc
    }

    function GB(cB) {
      var Bc = typeof cB;
      return !!cB && ("object" == Bc || "function" == Bc)
    }

    function cV(cB) {
      return xn(cB) ? CB(cB) : function(cB) {
        if (!JB(cB)) return fB(cB);
        var Bc = [];
        for (var nc in Object(cB)) BB.call(cB, nc) && "constructor" != nc && Bc.push(nc);
        return Bc
      }(cB)
    }
    cB.exports = function(cB) {
      return NB(cB, !0, !0)
    }
  },
  36261: (cB, Bc, nc) => {
    var Vc = nc(36263),
      Ic = nc(36271),
      rB = "undefined" !== typeof Float64Array;

    function uc(cB, Bc) {
      return cB[0] - Bc[0]
    }

    function sc() {
      var cB, Bc = this.stride,
        nc = new Array(Bc.length);
      for (cB = 0; cB < nc.length; ++cB) nc[cB] = [Math.abs(Bc[cB]), cB];
      nc.sort(uc);
      var Vc = new Array(nc.length);
      for (cB = 0; cB < Vc.length; ++cB) Vc[cB] = nc[cB][1];
      return Vc
    }

    function Mc(cB, Bc) {
      var nc = ["View", Bc, "d", cB].join("");
      Bc < 0 && (nc = "View_Nil" + cB);
      var Ic = "generic" === cB;
      if (-1 === Bc) {
        var rB = "function " + nc + "(a){this.data=a;};var proto=" + nc + ".prototype;proto.dtype='" + cB + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + nc + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + nc + "(a){return new " + nc + "(a);}";
        return new Function(rB)()
      }
      if (0 === Bc) {
        rB = "function " + nc + "(a,d) {this.data = a;this.offset = d};var proto=" + nc + ".prototype;proto.dtype='" + cB + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + nc + "_copy() {return new " + nc + "(this.data,this.offset)};proto.pick=function " + nc + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + nc + "_get(){return " + (Ic ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + nc + "_set(v){return " + (Ic ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + nc + "(a,b,c,d){return new " + nc + "(a,d)}";
        return new Function("TrivialArray", rB)(Pc[cB][0])
      }
      rB = ["'use strict'"];
      var uc = Vc(Bc),
        Mc = uc.map((function(cB) {
          return "i" + cB
        })),
        qB = "this.offset+" + uc.map((function(cB) {
          return "this.stride[" + cB + "]*i" + cB
        })).join("+"),
        Oc = uc.map((function(cB) {
          return "b" + cB
        })).join(","),
        Tc = uc.map((function(cB) {
          return "c" + cB
        })).join(",");
      rB.push("function " + nc + "(a," + Oc + "," + Tc + ",d){this.data=a", "this.shape=[" + Oc + "]", "this.stride=[" + Tc + "]", "this.offset=d|0}", "var proto=" + nc + ".prototype", "proto.dtype='" + cB + "'", "proto.dimension=" + Bc), rB.push("Object.defineProperty(proto,'size',{get:function " + nc + "_size(){return " + uc.map((function(cB) {
        return "this.shape[" + cB + "]"
      })).join("*"), "}})"), 1 === Bc ? rB.push("proto.order=[0]") : (rB.push("Object.defineProperty(proto,'order',{get:"), Bc < 4 ? (rB.push("function " + nc + "_order(){"), 2 === Bc ? rB.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === Bc && rB.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : rB.push("ORDER})")), rB.push("proto.set=function " + nc + "_set(" + Mc.join(",") + ",v){"), Ic ? rB.push("return this.data.set(" + qB + ",v)}") : rB.push("return this.data[" + qB + "]=v}"), rB.push("proto.get=function " + nc + "_get(" + Mc.join(",") + "){"), Ic ? rB.push("return this.data.get(" + qB + ")}") : rB.push("return this.data[" + qB + "]}"), rB.push("proto.index=function " + nc + "_index(", Mc.join(), "){return " + qB + "}"), rB.push("proto.hi=function " + nc + "_hi(" + Mc.join(",") + "){return new " + nc + "(this.data," + uc.map((function(cB) {
        return ["(typeof i", cB, "!=='number'||i", cB, "<0)?this.shape[", cB, "]:i", cB, "|0"].join("")
      })).join(",") + "," + uc.map((function(cB) {
        return "this.stride[" + cB + "]"
      })).join(",") + ",this.offset)}");
      var fc = uc.map((function(cB) {
          return "a" + cB + "=this.shape[" + cB + "]"
        })),
        mB = uc.map((function(cB) {
          return "c" + cB + "=this.stride[" + cB + "]"
        }));
      rB.push("proto.lo=function " + nc + "_lo(" + Mc.join(",") + "){var b=this.offset,d=0," + fc.join(",") + "," + mB.join(","));
      for (var ec = 0; ec < Bc; ++ec) rB.push("if(typeof i" + ec + "==='number'&&i" + ec + ">=0){d=i" + ec + "|0;b+=c" + ec + "*d;a" + ec + "-=d}");
      rB.push("return new " + nc + "(this.data," + uc.map((function(cB) {
        return "a" + cB
      })).join(",") + "," + uc.map((function(cB) {
        return "c" + cB
      })).join(",") + ",b)}"), rB.push("proto.step=function " + nc + "_step(" + Mc.join(",") + "){var " + uc.map((function(cB) {
        return "a" + cB + "=this.shape[" + cB + "]"
      })).join(",") + "," + uc.map((function(cB) {
        return "b" + cB + "=this.stride[" + cB + "]"
      })).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
      for (ec = 0; ec < Bc; ++ec) rB.push("if(typeof i" + ec + "==='number'){d=i" + ec + "|0;if(d<0){c+=b" + ec + "*(a" + ec + "-1);a" + ec + "=ceil(-a" + ec + "/d)}else{a" + ec + "=ceil(a" + ec + "/d)}b" + ec + "*=d}");
      rB.push("return new " + nc + "(this.data," + uc.map((function(cB) {
        return "a" + cB
      })).join(",") + "," + uc.map((function(cB) {
        return "b" + cB
      })).join(",") + ",c)}");
      var tB = new Array(Bc),
        Sc = new Array(Bc);
      for (ec = 0; ec < Bc; ++ec) tB[ec] = "a[i" + ec + "]", Sc[ec] = "b[i" + ec + "]";
      rB.push("proto.transpose=function " + nc + "_transpose(" + Mc + "){" + Mc.map((function(cB, Bc) {
        return cB + "=(" + cB + "===undefined?" + Bc + ":" + cB + "|0)"
      })).join(";"), "var a=this.shape,b=this.stride;return new " + nc + "(this.data," + tB.join(",") + "," + Sc.join(",") + ",this.offset)}"), rB.push("proto.pick=function " + nc + "_pick(" + Mc + "){var a=[],b=[],c=this.offset");
      for (ec = 0; ec < Bc; ++ec) rB.push("if(typeof i" + ec + "==='number'&&i" + ec + ">=0){c=(c+this.stride[" + ec + "]*i" + ec + ")|0}else{a.push(this.shape[" + ec + "]);b.push(this.stride[" + ec + "])}");
      return rB.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), rB.push("return function construct_" + nc + "(data,shape,stride,offset){return new " + nc + "(data," + uc.map((function(cB) {
        return "shape[" + cB + "]"
      })).join(",") + "," + uc.map((function(cB) {
        return "stride[" + cB + "]"
      })).join(",") + ",offset)}"), new Function("CTOR_LIST", "ORDER", rB.join("\n"))(Pc[cB], sc)
    }
    var Pc = {
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
    cB.exports = function(cB, Bc, nc, Vc) {
      if (void 0 === cB) return (0, Pc.array[0])([]);
      "number" === typeof cB && (cB = [cB]), void 0 === Bc && (Bc = [cB.length]);
      var uc = Bc.length;
      if (void 0 === nc) {
        nc = new Array(uc);
        for (var sc = uc - 1, qB = 1; sc >= 0; --sc) nc[sc] = qB, qB *= Bc[sc]
      }
      if (void 0 === Vc) {
        Vc = 0;
        for (sc = 0; sc < uc; ++sc) nc[sc] < 0 && (Vc -= (Bc[sc] - 1) * nc[sc])
      }
      for (var Oc = function(cB) {
          if (Ic(cB)) return "buffer";
          if (rB) switch (Object.prototype.toString.call(cB)) {
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
          return Array.isArray(cB) ? "array" : "generic"
        }(cB), Tc = Pc[Oc]; Tc.length <= uc + 1;) Tc.push(Mc(Oc, Tc.length - 1));
      return (0, Tc[uc + 1])(cB, Bc, nc, Vc)
    }
  },
  37001: cB => {
    function Bc(cB, Bc, nc) {
      for (var Vc = cB.length, Ic = -1 / 0, rB = 1 / 0, uc = 0; uc < Vc; uc++) {
        var sc = (nc[0][uc] - cB[uc]) / Bc[uc],
          Mc = (nc[1][uc] - cB[uc]) / Bc[uc];
        if (sc > Mc) {
          var Pc = sc;
          sc = Mc, Mc = Pc
        }
        if (Mc < Ic || sc > rB) return 1 / 0;
        sc > Ic && (Ic = sc), Mc < rB && (rB = Mc)
      }
      return Ic > rB ? 1 / 0 : Ic
    }
    cB.exports = function(cB, nc, Vc, Ic) {
      var rB = Bc(nc, Vc, Ic);
      if (rB === 1 / 0) cB = null;
      else {
        cB = cB || [];
        for (var uc = 0; uc < nc.length; uc++) cB[uc] = nc[uc] + Vc[uc] * rB
      }
      return cB
    }, cB.exports.distance = Bc
  },
  36282: (cB, Bc, nc) => {
    var Vc = nc(36291);

    function Ic(cB) {
      for (var Bc, nc, Ic = 0, rB = cB.length, uc = 0; uc < cB.length;) {
        for (Bc = cB[uc], nc = 0; uc < rB && cB[uc] === Bc;) ++uc, ++nc;
        Ic += Vc.log2(nc) / 7 | 0, Ic += Vc.log2(Bc >>> 0) / 7 | 0, Ic += 2
      }
      return Ic
    }
    Bc.size = Ic, Bc.encode = function(cB, Bc) {
      Bc || (Bc = new Uint8Array(Ic(cB)));
      for (var nc, Vc, rB = 0, uc = Bc.length, sc = 0; sc < cB.length;) {
        for (nc = cB[sc], Vc = 0; sc < cB.length && cB[sc] === nc;) ++sc, ++Vc;
        for (; rB < uc && Vc >= 128;) Bc[rB++] = 128 + (127 & Vc), Vc >>>= 7;
        if (rB >= uc) throw new Error("RLE buffer overflow");
        for (Bc[rB++] = Vc, nc >>>= 0; rB < uc && nc >= 128;) Bc[rB++] = 128 + (127 & nc), nc >>>= 7;
        if (rB >= uc) throw new Error("RLE buffer overflow");
        Bc[rB++] = nc
      }
      return Bc
    }, Bc.decode = function(cB, Bc) {
      for (var nc, Vc, Ic, rB, uc = Bc.length, sc = cB.length, Mc = 0, Pc = 0; Pc < sc;) {
        for (nc = 0, Vc = 0; Pc < sc && cB[Pc] >= 128;) nc += (127 & cB[Pc++]) << Vc, Vc += 7;
        if (nc += cB[Pc++] << Vc, Pc >= sc) throw new Error("RLE buffer underrun");
        if (Mc + nc > uc) throw new Error("Chunk buffer overflow");
        for (Ic = 0, Vc = 0; Pc < sc && cB[Pc] >= 128;) Ic += (127 & cB[Pc++]) << Vc, Vc += 7;
        if (Pc >= sc) throw new Error("RLE buffer underrun");
        for (Ic += cB[Pc++] << Vc, rB = 0; rB < nc; ++rB) Bc[Mc++] = Ic
      }
      return Bc
    }
  },
  36291: (cB, Bc) => {
    function nc(cB) {
      var Bc = 32;
      return (cB &= -cB) && Bc--, 65535 & cB && (Bc -= 16), 16711935 & cB && (Bc -= 8), 252645135 & cB && (Bc -= 4), 858993459 & cB && (Bc -= 2), 1431655765 & cB && (Bc -= 1), Bc
    }
    Bc.INT_BITS = 32, Bc.INT_MAX = 2147483647, Bc.INT_MIN = -1 << 31, Bc.sign = function(cB) {
      return (cB > 0) - (cB < 0)
    }, Bc.abs = function(cB) {
      var Bc = cB >> 31;
      return (cB ^ Bc) - Bc
    }, Bc.min = function(cB, Bc) {
      return Bc ^ (cB ^ Bc) & -(cB < Bc)
    }, Bc.max = function(cB, Bc) {
      return cB ^ (cB ^ Bc) & -(cB < Bc)
    }, Bc.isPow2 = function(cB) {
      return !(cB & cB - 1) && !!cB
    }, Bc.log2 = function(cB) {
      var Bc, nc;
      return Bc = (cB > 65535) << 4, Bc |= nc = ((cB >>>= Bc) > 255) << 3, Bc |= nc = ((cB >>>= nc) > 15) << 2, (Bc |= nc = ((cB >>>= nc) > 3) << 1) | (cB >>>= nc) >> 1
    }, Bc.log10 = function(cB) {
      return cB >= 1e9 ? 9 : cB >= 1e8 ? 8 : cB >= 1e7 ? 7 : cB >= 1e6 ? 6 : cB >= 1e5 ? 5 : cB >= 1e4 ? 4 : cB >= 1e3 ? 3 : cB >= 100 ? 2 : cB >= 10 ? 1 : 0
    }, Bc.popCount = function(cB) {
      return 16843009 * ((cB = (858993459 & (cB -= cB >>> 1 & 1431655765)) + (cB >>> 2 & 858993459)) + (cB >>> 4) & 252645135) >>> 24
    }, Bc.countTrailingZeros = nc, Bc.nextPow2 = function(cB) {
      return cB += 0 === cB, --cB, cB |= cB >>> 1, cB |= cB >>> 2, cB |= cB >>> 4, cB |= cB >>> 8, (cB |= cB >>> 16) + 1
    }, Bc.prevPow2 = function(cB) {
      return cB |= cB >>> 1, cB |= cB >>> 2, cB |= cB >>> 4, cB |= cB >>> 8, (cB |= cB >>> 16) - (cB >>> 1)
    }, Bc.parity = function(cB) {
      return cB ^= cB >>> 16, cB ^= cB >>> 8, cB ^= cB >>> 4, 27030 >>> (cB &= 15) & 1
    };
    var Vc = new Array(256);
    ! function(cB) {
      for (var Bc = 0; Bc < 256; ++Bc) {
        var nc = Bc,
          Vc = Bc,
          Ic = 7;
        for (nc >>>= 1; nc; nc >>>= 1) Vc <<= 1, Vc |= 1 & nc, --Ic;
        cB[Bc] = Vc << Ic & 255
      }
    }(Vc), Bc.reverse = function(cB) {
      return Vc[255 & cB] << 24 | Vc[cB >>> 8 & 255] << 16 | Vc[cB >>> 16 & 255] << 8 | Vc[cB >>> 24 & 255]
    }, Bc.interleave2 = function(cB, Bc) {
      return (cB = 1431655765 & ((cB = 858993459 & ((cB = 252645135 & ((cB = 16711935 & ((cB &= 65535) | cB << 8)) | cB << 4)) | cB << 2)) | cB << 1)) | (Bc = 1431655765 & ((Bc = 858993459 & ((Bc = 252645135 & ((Bc = 16711935 & ((Bc &= 65535) | Bc << 8)) | Bc << 4)) | Bc << 2)) | Bc << 1)) << 1
    }, Bc.deinterleave2 = function(cB, Bc) {
      return (cB = 65535 & ((cB = 16711935 & ((cB = 252645135 & ((cB = 858993459 & ((cB = cB >>> Bc & 1431655765) | cB >>> 1)) | cB >>> 2)) | cB >>> 4)) | cB >>> 16)) << 16 >> 16
    }, Bc.interleave3 = function(cB, Bc, nc) {
      return cB = 1227133513 & ((cB = 3272356035 & ((cB = 251719695 & ((cB = 4278190335 & ((cB &= 1023) | cB << 16)) | cB << 8)) | cB << 4)) | cB << 2), (cB |= (Bc = 1227133513 & ((Bc = 3272356035 & ((Bc = 251719695 & ((Bc = 4278190335 & ((Bc &= 1023) | Bc << 16)) | Bc << 8)) | Bc << 4)) | Bc << 2)) << 1) | (nc = 1227133513 & ((nc = 3272356035 & ((nc = 251719695 & ((nc = 4278190335 & ((nc &= 1023) | nc << 16)) | nc << 8)) | nc << 4)) | nc << 2)) << 2
    }, Bc.deinterleave3 = function(cB, Bc) {
      return (cB = 1023 & ((cB = 4278190335 & ((cB = 251719695 & ((cB = 3272356035 & ((cB = cB >>> Bc & 1227133513) | cB >>> 2)) | cB >>> 4)) | cB >>> 8)) | cB >>> 16)) << 22 >> 22
    }, Bc.nextCombination = function(cB) {
      var Bc = cB | cB - 1;
      return Bc + 1 | (~Bc & -~Bc) - 1 >>> nc(cB) + 1
    }
  },
  35808: (cB, Bc, nc) => {
    nc.d(Bc, {
      Color3: () => Vc.e,
      c: () => Vc.g
    });
    var Vc = nc(35815);
    (0, Vc.i)()
  },
  36327: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Ic
    });
    var Vc = nc(36329);
    class Ic {
      static GetPlanes(cB) {
        const Bc = [];
        for (let nc = 0; nc < 6; nc++) Bc.push(new Vc.d(0, 0, 0, 0));
        return Ic.GetPlanesToRef(cB, Bc), Bc
      }
      static GetNearPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] + nc[2], Bc.normal.y = nc[7] + nc[6], Bc.normal.z = nc[11] + nc[10], Bc.d = nc[15] + nc[14], Bc.normalize()
      }
      static GetFarPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] - nc[2], Bc.normal.y = nc[7] - nc[6], Bc.normal.z = nc[11] - nc[10], Bc.d = nc[15] - nc[14], Bc.normalize()
      }
      static GetLeftPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] + nc[0], Bc.normal.y = nc[7] + nc[4], Bc.normal.z = nc[11] + nc[8], Bc.d = nc[15] + nc[12], Bc.normalize()
      }
      static GetRightPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] - nc[0], Bc.normal.y = nc[7] - nc[4], Bc.normal.z = nc[11] - nc[8], Bc.d = nc[15] - nc[12], Bc.normalize()
      }
      static GetTopPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] - nc[1], Bc.normal.y = nc[7] - nc[5], Bc.normal.z = nc[11] - nc[9], Bc.d = nc[15] - nc[13], Bc.normalize()
      }
      static GetBottomPlaneToRef(cB, Bc) {
        const nc = cB.m;
        Bc.normal.x = nc[3] + nc[1], Bc.normal.y = nc[7] + nc[5], Bc.normal.z = nc[11] + nc[9], Bc.d = nc[15] + nc[13], Bc.normalize()
      }
      static GetPlanesToRef(cB, Bc) {
        Ic.GetNearPlaneToRef(cB, Bc[0]), Ic.GetFarPlaneToRef(cB, Bc[1]), Ic.GetLeftPlaneToRef(cB, Bc[2]), Ic.GetRightPlaneToRef(cB, Bc[3]), Ic.GetTopPlaneToRef(cB, Bc[4]), Ic.GetBottomPlaneToRef(cB, Bc[5])
      }
      static IsPointInFrustum(cB, Bc) {
        for (let nc = 0; nc < 6; nc++)
          if (Bc[nc].dotCoordinate(cB) < 0) return !1;
        return !0
      }
    }
  },
  36329: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => Ic
    });
    var Vc = nc(35756);
    class Ic {
      constructor(cB, Bc, nc, Ic) {
        this.normal = new Vc.p(cB, Bc, nc), this.d = Ic
      }
      KPc() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Ic(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let cB = this.normal.getHashCode();
        return cB = 397 * cB ^ this.d, cB
      }
      normalize() {
        const cB = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Bc = 0;
        return 0 !== cB && (Bc = 1 / cB), this.normal.x *= Bc, this.normal.y *= Bc, this.normal.z *= Bc, this.d *= Bc, this
      }
      transform(cB) {
        const Bc = Ic._TmpMatrix;
        cB.invertToRef(Bc);
        const nc = Bc.m,
          Vc = this.normal.x,
          rB = this.normal.y,
          uc = this.normal.z,
          sc = this.d,
          Mc = Vc * nc[0] + rB * nc[1] + uc * nc[2] + sc * nc[3],
          Pc = Vc * nc[4] + rB * nc[5] + uc * nc[6] + sc * nc[7],
          qB = Vc * nc[8] + rB * nc[9] + uc * nc[10] + sc * nc[11],
          Oc = Vc * nc[12] + rB * nc[13] + uc * nc[14] + sc * nc[15];
        return new Ic(Mc, Pc, qB, Oc)
      }
      dotCoordinate(cB) {
        return this.normal.x * cB.x + this.normal.y * cB.y + this.normal.z * cB.z + this.d
      }
      copyFromPoints(cB, Bc, nc) {
        const Vc = Bc.x - cB.x,
          Ic = Bc.y - cB.y,
          rB = Bc.z - cB.z,
          uc = nc.x - cB.x,
          sc = nc.y - cB.y,
          Mc = nc.z - cB.z,
          Pc = Ic * Mc - rB * sc,
          qB = rB * uc - Vc * Mc,
          Oc = Vc * sc - Ic * uc,
          Tc = Math.sqrt(Pc * Pc + qB * qB + Oc * Oc);
        let fc;
        return fc = 0 !== Tc ? 1 / Tc : 0, this.normal.x = Pc * fc, this.normal.y = qB * fc, this.normal.z = Oc * fc, this.d = -(this.normal.x * cB.x + this.normal.y * cB.y + this.normal.z * cB.z), this
      }
      isFrontFacingTo(cB, Bc) {
        return Vc.p.Dot(this.normal, cB) <= Bc
      }
      signedDistanceTo(cB) {
        return Vc.p.Dot(cB, this.normal) + this.d
      }
      static FromArray(cB) {
        return new Ic(cB[0], cB[1], cB[2], cB[3])
      }
      static FromPoints(cB, Bc, nc) {
        const Vc = new Ic(0, 0, 0, 0);
        return Vc.copyFromPoints(cB, Bc, nc), Vc
      }
      static FromPositionAndNormal(cB, Bc) {
        const nc = new Ic(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(cB, Bc, nc)
      }
      static FromPositionAndNormalToRef(cB, Bc, nc) {
        return nc.normal.qqc(Bc), nc.normal.normalize(), nc.d = -cB.dot(nc.normal), nc
      }
      static SignedDistanceToPlaneFromPositionAndNormal(cB, Bc, nc) {
        const Ic = -(Bc.x * cB.x + Bc.y * cB.y + Bc.z * cB.z);
        return Vc.p.Dot(nc, Bc) + Ic
      }
    }
    Ic._TmpMatrix = Vc.d.Identity()
  },
  35753: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      Matrix: () => Vc.d,
      Quaternion: () => Vc.f,
      RegisterMathVector: () => Vc.h,
      TmpVectors: () => Vc.i,
      Vector2: () => Vc.m,
      KV: () => Vc.p,
      Vector4: () => Vc.t
    });
    var Vc = nc(35756);
    (0, Vc.h)()
  },
  36675: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => Vc
    });
    class Vc {
      constructor(cB, Bc, nc, Vc) {
        this.x = cB, this.y = Bc, this.width = nc, this.height = Vc
      }
      toGlobal(cB, Bc) {
        return new Vc(this.x * cB, this.y * Bc, this.width * cB, this.height * Bc)
      }
      toGlobalToRef(cB, Bc, nc) {
        return nc.x = this.x * cB, nc.y = this.y * Bc, nc.width = this.width * cB, nc.height = this.height * Bc, this
      }
      clone() {
        return new Vc(this.x, this.y, this.width, this.height)
      }
    }
  },
  36472: (cB, Bc, nc) => {
    function Vc() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (cB => {
        const Bc = 16 * Math.random() | 0;
        return ("x" === cB ? Bc : 3 & Bc | 8).toString(16)
      }))
    }
    nc.d(Bc, {
      d: () => Vc
    })
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);