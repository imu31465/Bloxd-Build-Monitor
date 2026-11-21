/*! For license information please see x17cru.223.926e30c6.chunk.js.LICENSE.txt */
export const id = 223;
export const ids = [223, 230];
export const modules = {
  38465: dd => {
    dd.exports = function(dd) {
      return null != dd && null != dd.constructor && "function" === typeof dd.constructor.isBuffer && dd.constructor.isBuffer(dd)
    }
  },
  38451: (dd, Jd, kd) => {
    var pd = kd(38454),
      Nd = kd(38461),
      Wd = kd(38465);
    kd.g.__TYPEDARRAY_POOL || (kd.g.__TYPEDARRAY_POOL = {
      UINT8: Nd([32, 0]),
      UINT16: Nd([32, 0]),
      UINT32: Nd([32, 0]),
      INT8: Nd([32, 0]),
      INT16: Nd([32, 0]),
      INT32: Nd([32, 0]),
      FLOAT: Nd([32, 0]),
      DOUBLE: Nd([32, 0]),
      DATA: Nd([32, 0]),
      UINT8C: Nd([32, 0]),
      BUFFER: Nd([32, 0])
    });
    var Pd = "undefined" !== typeof Uint8ClampedArray,
      Zd = kd.g.__TYPEDARRAY_POOL;
    Zd.UINT8C || (Zd.UINT8C = Nd([32, 0])), Zd.BUFFER || (Zd.BUFFER = Nd([32, 0]));
    var gd = Zd.DATA,
      Cd = Zd.BUFFER;

    function Kd(dd) {
      if (dd) {
        var Jd = dd.length || dd.byteLength,
          kd = pd.log2(Jd);
        gd[kd].push(dd)
      }
    }

    function od(dd) {
      dd = pd.nextPow2(dd);
      var Jd = pd.log2(dd),
        kd = gd[Jd];
      return kd.length > 0 ? kd.pop() : new ArrayBuffer(dd)
    }

    function ld(dd) {
      return new Uint8Array(od(dd), 0, dd)
    }

    function Qd(dd) {
      return new Uint16Array(od(2 * dd), 0, dd)
    }

    function Ld(dd) {
      return new Uint32Array(od(4 * dd), 0, dd)
    }

    function Od(dd) {
      return new Int8Array(od(dd), 0, dd)
    }

    function ed(dd) {
      return new Int16Array(od(2 * dd), 0, dd)
    }

    function Rd(dd) {
      return new Int32Array(od(4 * dd), 0, dd)
    }

    function Id(dd) {
      return new Float32Array(od(4 * dd), 0, dd)
    }

    function Gd(dd) {
      return new Float64Array(od(8 * dd), 0, dd)
    }

    function vd(dd) {
      return Pd ? new Uint8ClampedArray(od(dd), 0, dd) : ld(dd)
    }

    function xd(dd) {
      return new DataView(od(dd), 0, dd)
    }
    Jd.free = function(dd) {
      if (Wd(dd)) Cd[pd.log2(dd.length)].push(dd);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(dd) && (dd = dd.buffer), !dd) return;
        var Jd = dd.length || dd.byteLength,
          kd = 0 | pd.log2(Jd);
        gd[kd].push(dd)
      }
    }, Jd.freeUint8 = Jd.freeUint16 = Jd.freeUint32 = Jd.freeInt8 = Jd.freeInt16 = Jd.freeInt32 = Jd.freeFloat32 = Jd.freeFloat = Jd.freeFloat64 = Jd.freeDouble = Jd.freeUint8Clamped = Jd.freeDataView = function(dd) {
      Kd(dd.buffer)
    }, Jd.freeArrayBuffer = Kd, Jd.freeBuffer = function(dd) {
      Cd[pd.log2(dd.length)].push(dd)
    }, Jd.malloc = function(dd, Jd) {
      if (void 0 === Jd || "arraybuffer" === Jd) return od(dd);
      switch (Jd) {
        case "uint8":
          return ld(dd);
        case "uint16":
          return Qd(dd);
        case "uint32":
          return Ld(dd);
        case "int8":
          return Od(dd);
        case "int16":
          return ed(dd);
        case "int32":
          return Rd(dd);
        case "float":
        case "float32":
          return Id(dd);
        case "double":
        case "float64":
          return Gd(dd);
        case "uint8_clamped":
          return vd(dd);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return xd(dd);
        default:
          return null
      }
      return null
    }, Jd.mallocArrayBuffer = od, Jd.mallocUint8 = ld, Jd.mallocUint16 = Qd, Jd.mallocUint32 = Ld, Jd.mallocInt8 = Od, Jd.mallocInt16 = ed, Jd.mallocInt32 = Rd, Jd.mallocFloat32 = Jd.mallocFloat = Id, Jd.mallocFloat64 = Jd.mallocDouble = Gd, Jd.mallocUint8Clamped = vd, Jd.mallocDataView = xd, Jd.clearCache = function() {
      for (var dd = 0; dd < 32; ++dd) Zd.UINT8[dd].length = 0, Zd.UINT16[dd].length = 0, Zd.UINT32[dd].length = 0, Zd.INT8[dd].length = 0, Zd.INT16[dd].length = 0, Zd.INT32[dd].length = 0, Zd.FLOAT[dd].length = 0, Zd.DOUBLE[dd].length = 0, Zd.UINT8C[dd].length = 0, gd[dd].length = 0, Cd[dd].length = 0
    }
  },
  38454: (dd, Jd) => {
    function kd(dd) {
      var Jd = 32;
      return (dd &= -dd) && Jd--, 65535 & dd && (Jd -= 16), 16711935 & dd && (Jd -= 8), 252645135 & dd && (Jd -= 4), 858993459 & dd && (Jd -= 2), 1431655765 & dd && (Jd -= 1), Jd
    }
    Jd.INT_BITS = 32, Jd.INT_MAX = 2147483647, Jd.INT_MIN = -1 << 31, Jd.sign = function(dd) {
      return (dd > 0) - (dd < 0)
    }, Jd.abs = function(dd) {
      var Jd = dd >> 31;
      return (dd ^ Jd) - Jd
    }, Jd.min = function(dd, Jd) {
      return Jd ^ (dd ^ Jd) & -(dd < Jd)
    }, Jd.max = function(dd, Jd) {
      return dd ^ (dd ^ Jd) & -(dd < Jd)
    }, Jd.isPow2 = function(dd) {
      return !(dd & dd - 1) && !!dd
    }, Jd.log2 = function(dd) {
      var Jd, kd;
      return Jd = (dd > 65535) << 4, Jd |= kd = ((dd >>>= Jd) > 255) << 3, Jd |= kd = ((dd >>>= kd) > 15) << 2, (Jd |= kd = ((dd >>>= kd) > 3) << 1) | (dd >>>= kd) >> 1
    }, Jd.log10 = function(dd) {
      return dd >= 1e9 ? 9 : dd >= 1e8 ? 8 : dd >= 1e7 ? 7 : dd >= 1e6 ? 6 : dd >= 1e5 ? 5 : dd >= 1e4 ? 4 : dd >= 1e3 ? 3 : dd >= 100 ? 2 : dd >= 10 ? 1 : 0
    }, Jd.popCount = function(dd) {
      return 16843009 * ((dd = (858993459 & (dd -= dd >>> 1 & 1431655765)) + (dd >>> 2 & 858993459)) + (dd >>> 4) & 252645135) >>> 24
    }, Jd.countTrailingZeros = kd, Jd.nextPow2 = function(dd) {
      return dd += 0 === dd, --dd, dd |= dd >>> 1, dd |= dd >>> 2, dd |= dd >>> 4, dd |= dd >>> 8, (dd |= dd >>> 16) + 1
    }, Jd.prevPow2 = function(dd) {
      return dd |= dd >>> 1, dd |= dd >>> 2, dd |= dd >>> 4, dd |= dd >>> 8, (dd |= dd >>> 16) - (dd >>> 1)
    }, Jd.parity = function(dd) {
      return dd ^= dd >>> 16, dd ^= dd >>> 8, dd ^= dd >>> 4, 27030 >>> (dd &= 15) & 1
    };
    var pd = new Array(256);
    ! function(dd) {
      for (var Jd = 0; Jd < 256; ++Jd) {
        var kd = Jd,
          pd = Jd,
          Nd = 7;
        for (kd >>>= 1; kd; kd >>>= 1) pd <<= 1, pd |= 1 & kd, --Nd;
        dd[Jd] = pd << Nd & 255
      }
    }(pd), Jd.reverse = function(dd) {
      return pd[255 & dd] << 24 | pd[dd >>> 8 & 255] << 16 | pd[dd >>> 16 & 255] << 8 | pd[dd >>> 24 & 255]
    }, Jd.interleave2 = function(dd, Jd) {
      return (dd = 1431655765 & ((dd = 858993459 & ((dd = 252645135 & ((dd = 16711935 & ((dd &= 65535) | dd << 8)) | dd << 4)) | dd << 2)) | dd << 1)) | (Jd = 1431655765 & ((Jd = 858993459 & ((Jd = 252645135 & ((Jd = 16711935 & ((Jd &= 65535) | Jd << 8)) | Jd << 4)) | Jd << 2)) | Jd << 1)) << 1
    }, Jd.deinterleave2 = function(dd, Jd) {
      return (dd = 65535 & ((dd = 16711935 & ((dd = 252645135 & ((dd = 858993459 & ((dd = dd >>> Jd & 1431655765) | dd >>> 1)) | dd >>> 2)) | dd >>> 4)) | dd >>> 16)) << 16 >> 16
    }, Jd.interleave3 = function(dd, Jd, kd) {
      return dd = 1227133513 & ((dd = 3272356035 & ((dd = 251719695 & ((dd = 4278190335 & ((dd &= 1023) | dd << 16)) | dd << 8)) | dd << 4)) | dd << 2), (dd |= (Jd = 1227133513 & ((Jd = 3272356035 & ((Jd = 251719695 & ((Jd = 4278190335 & ((Jd &= 1023) | Jd << 16)) | Jd << 8)) | Jd << 4)) | Jd << 2)) << 1) | (kd = 1227133513 & ((kd = 3272356035 & ((kd = 251719695 & ((kd = 4278190335 & ((kd &= 1023) | kd << 16)) | kd << 8)) | kd << 4)) | kd << 2)) << 2
    }, Jd.deinterleave3 = function(dd, Jd) {
      return (dd = 1023 & ((dd = 4278190335 & ((dd = 251719695 & ((dd = 3272356035 & ((dd = dd >>> Jd & 1227133513) | dd >>> 2)) | dd >>> 4)) | dd >>> 8)) | dd >>> 16)) << 22 >> 22
    }, Jd.nextCombination = function(dd) {
      var Jd = dd | dd - 1;
      return Jd + 1 | (~Jd & -~Jd) - 1 >>> kd(dd) + 1
    }
  },
  38449: (dd, Jd, kd) => {
    dd.exports = function(dd, Jd, kd) {
      switch (arguments.length) {
        case 1:
          return pd = [], Cd(Nd = dd, Nd, Kd, !0), pd;
        case 2:
          return "function" === typeof Jd ? Cd(dd, dd, Jd, !0) : function(dd, Jd) {
            return pd = [], Cd(dd, Jd, Kd, !1), pd
          }(dd, Jd);
        case 3:
          return Cd(dd, Jd, kd, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var Nd
    };
    var pd, Nd = kd(38451),
      Wd = kd(38469),
      Pd = kd(38476);

    function Zd(dd, Jd) {
      for (var kd = 0; kd < dd; ++kd)
        if (!(Jd[kd] <= Jd[kd + dd])) return !0;
      return !1
    }

    function gd(dd, Jd, kd, pd) {
      for (var Nd = 0, Wd = 0, Pd = 0, gd = dd.length; Pd < gd; ++Pd) {
        var Cd = dd[Pd];
        if (!Zd(Jd, Cd)) {
          for (var Kd = 0; Kd < 2 * Jd; ++Kd) kd[Nd++] = Cd[Kd];
          pd[Wd++] = Pd
        }
      }
      return Wd
    }

    function Cd(dd, Jd, kd, pd) {
      var Zd = dd.length,
        Cd = Jd.length;
      if (!(Zd <= 0 || Cd <= 0)) {
        var Kd = dd[0].length >>> 1;
        if (!(Kd <= 0)) {
          var od, ld = Nd.mallocDouble(2 * Kd * Zd),
            Qd = Nd.mallocInt32(Zd);
          if ((Zd = gd(dd, Kd, ld, Qd)) > 0) {
            if (1 === Kd && pd) Wd.init(Zd), od = Wd.sweepComplete(Kd, kd, 0, Zd, ld, Qd, 0, Zd, ld, Qd);
            else {
              var Ld = Nd.mallocDouble(2 * Kd * Cd),
                Od = Nd.mallocInt32(Cd);
              (Cd = gd(Jd, Kd, Ld, Od)) > 0 && (Wd.init(Zd + Cd), od = 1 === Kd ? Wd.sweepBipartite(Kd, kd, 0, Zd, ld, Qd, 0, Cd, Ld, Od) : Pd(Kd, kd, pd, Zd, ld, Qd, Cd, Ld, Od), Nd.free(Ld), Nd.free(Od))
            }
            Nd.free(ld), Nd.free(Qd)
          }
          return od
        }
      }
    }

    function Kd(dd, Jd) {
      pd.push([dd, Jd])
    }
  },
  38480: (dd, Jd) => {
    var kd = "d",
      pd = "ax",
      Nd = "fp",
      Wd = "es",
      Pd = "rs",
      Zd = "re",
      gd = "rb",
      Cd = "bs",
      Kd = "be",
      od = "bb",
      ld = [kd, pd, "vv", Pd, Zd, gd, "ri", Cd, Kd, od, "bi"];

    function Qd(dd) {
      var Jd = "bruteForce" + (dd ? "Full" : "Partial"),
        pd = [],
        Pd = ld.slice();
      dd || Pd.splice(3, 0, Nd);
      var Zd = ["function " + Jd + "(" + Pd.join() + "){"];

      function gd(Jd, Nd) {
        var Pd = function(dd, Jd, pd) {
          var Nd = "bruteForce" + (dd ? "Red" : "Blue") + (Jd ? "Flip" : "") + (pd ? "Full" : ""),
            Pd = ["function ", Nd, "(", ld.join(), "){", "var ", Wd, "=2*", kd, ";"],
            Zd = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            gd = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (pd ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return dd ? Pd.push(Zd, "Q", ":", gd) : Pd.push(gd, "Q", ":", Zd), pd ? Pd.push("if(y1<x0||x1<y0)continue;") : Jd ? Pd.push("if(y0<=x0||x1<y0)continue;") : Pd.push("if(y0<x0||x1<y0)continue;"), Pd.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), Jd ? Pd.push("yi,xi") : Pd.push("xi,yi"), Pd.push(");if(rv!==void 0)return rv;}}}"), {
            name: Nd,
            code: Pd.join("")
          }
        }(Jd, Nd, dd);
        pd.push(Pd.code), Zd.push("return " + Pd.name + "(" + ld.join() + ");")
      }
      Zd.push("if(re-rs>be-bs){"), dd ? (gd(!0, !1), Zd.push("}else{"), gd(!1, !1)) : (Zd.push("if(fp){"), gd(!0, !0), Zd.push("}else{"), gd(!0, !1), Zd.push("}}else{if(fp){"), gd(!1, !0), Zd.push("}else{"), gd(!1, !1), Zd.push("}")), Zd.push("}}return " + Jd);
      var Cd = pd.join("") + Zd.join("");
      return new Function(Cd)()
    }
    Jd.partial = Qd(!1), Jd.full = Qd(!0)
  },
  38476: (dd, Jd, kd) => {
    dd.exports = function(dd, Jd, kd, Wd, Kd, Fd, Yd, md, bd) {
      ! function(dd, Jd) {
        var kd = 8 * Nd.log2(Jd + 1) * (dd + 1) | 0,
          Wd = Nd.nextPow2(vd * kd);
        qd.length < Wd && (pd.free(qd), qd = pd.mallocInt32(Wd));
        var Pd = Nd.nextPow2(xd * kd);
        Bd.length < Pd && (pd.free(Bd), Bd = pd.mallocDouble(Pd))
      }(dd, Wd + Yd);
      var Sd, jd = 0,
        Xd = 2 * dd;
      sd(jd++, 0, 0, Wd, 0, Yd, kd ? 16 : 0, -1 / 0, 1 / 0), kd || sd(jd++, 0, 0, Yd, 0, Wd, 1, -1 / 0, 1 / 0);
      for (; jd > 0;) {
        var fd = (jd -= 1) * vd,
          nd = qd[fd],
          Ud = qd[fd + 1],
          yd = qd[fd + 2],
          Dd = qd[fd + 3],
          Td = qd[fd + 4],
          Ed = qd[fd + 5],
          cd = jd * xd,
          hd = Bd[cd],
          rd = Bd[cd + 1],
          ud = 1 & Ed,
          td = !!(16 & Ed),
          Vd = Kd,
          zd = Fd,
          Hd = md,
          wd = bd;
        if (ud && (Vd = md, zd = bd, Hd = Kd, wd = Fd), !(2 & Ed && Ud >= (yd = ed(dd, nd, Ud, yd, Vd, zd, rd))) && !(4 & Ed && (Ud = Rd(dd, nd, Ud, yd, Vd, zd, hd)) >= yd)) {
          var Ad = yd - Ud,
            dJ = Td - Dd;
          if (td) {
            if (dd * Ad * (Ad + dJ) < Qd) {
              if (void 0 !== (Sd = gd.scanComplete(dd, nd, Jd, Ud, yd, Vd, zd, Dd, Td, Hd, wd))) return Sd;
              continue
            }
          } else {
            if (dd * Math.min(Ad, dJ) < od) {
              if (void 0 !== (Sd = Pd(dd, nd, Jd, ud, Ud, yd, Vd, zd, Dd, Td, Hd, wd))) return Sd;
              continue
            }
            if (dd * Ad * dJ < ld) {
              if (void 0 !== (Sd = gd.scanBipartite(dd, nd, Jd, ud, Ud, yd, Vd, zd, Dd, Td, Hd, wd))) return Sd;
              continue
            }
          }
          var JJ = Ld(dd, nd, Ud, yd, Vd, zd, hd, rd);
          if (Ud < JJ)
            if (dd * (JJ - Ud) < od) {
              if (void 0 !== (Sd = Zd(dd, nd + 1, Jd, Ud, JJ, Vd, zd, Dd, Td, Hd, wd))) return Sd
            } else if (nd === dd - 2) {
            if (void 0 !== (Sd = ud ? gd.sweepBipartite(dd, Jd, Dd, Td, Hd, wd, Ud, JJ, Vd, zd) : gd.sweepBipartite(dd, Jd, Ud, JJ, Vd, zd, Dd, Td, Hd, wd))) return Sd
          } else sd(jd++, nd + 1, Ud, JJ, Dd, Td, ud, -1 / 0, 1 / 0), sd(jd++, nd + 1, Dd, Td, Ud, JJ, 1 ^ ud, -1 / 0, 1 / 0);
          if (JJ < yd) {
            var kJ = Cd(dd, nd, Dd, Td, Hd, wd),
              pJ = Hd[Xd * kJ + nd],
              NJ = Od(dd, nd, kJ, Td, Hd, wd, pJ);
            if (NJ < Td && sd(jd++, nd, JJ, yd, NJ, Td, (4 | ud) + (td ? 16 : 0), pJ, rd), Dd < kJ && sd(jd++, nd, JJ, yd, Dd, kJ, (2 | ud) + (td ? 16 : 0), hd, pJ), kJ + 1 === NJ) {
              if (void 0 !== (Sd = td ? Md(dd, nd, Jd, JJ, yd, Vd, zd, kJ, Hd, wd[kJ]) : ad(dd, nd, Jd, ud, JJ, yd, Vd, zd, kJ, Hd, wd[kJ]))) return Sd
            } else if (kJ < NJ) {
              var WJ;
              if (td) {
                if (JJ < (WJ = Id(dd, nd, JJ, yd, Vd, zd, pJ))) {
                  var PJ = Od(dd, nd, JJ, WJ, Vd, zd, pJ);
                  if (nd === dd - 2) {
                    if (JJ < PJ && void 0 !== (Sd = gd.sweepComplete(dd, Jd, JJ, PJ, Vd, zd, kJ, NJ, Hd, wd))) return Sd;
                    if (PJ < WJ && void 0 !== (Sd = gd.sweepBipartite(dd, Jd, PJ, WJ, Vd, zd, kJ, NJ, Hd, wd))) return Sd
                  } else JJ < PJ && sd(jd++, nd + 1, JJ, PJ, kJ, NJ, 16, -1 / 0, 1 / 0), PJ < WJ && (sd(jd++, nd + 1, PJ, WJ, kJ, NJ, 0, -1 / 0, 1 / 0), sd(jd++, nd + 1, kJ, NJ, PJ, WJ, 1, -1 / 0, 1 / 0))
                }
              } else JJ < (WJ = ud ? Gd(dd, nd, JJ, yd, Vd, zd, pJ) : Id(dd, nd, JJ, yd, Vd, zd, pJ)) && (nd === dd - 2 ? Sd = ud ? gd.sweepBipartite(dd, Jd, kJ, NJ, Hd, wd, JJ, WJ, Vd, zd) : gd.sweepBipartite(dd, Jd, JJ, WJ, Vd, zd, kJ, NJ, Hd, wd) : (sd(jd++, nd + 1, JJ, WJ, kJ, NJ, ud, -1 / 0, 1 / 0), sd(jd++, nd + 1, kJ, NJ, JJ, WJ, 1 ^ ud, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var pd = kd(38451),
      Nd = kd(38454),
      Wd = kd(38480),
      Pd = Wd.partial,
      Zd = Wd.full,
      gd = kd(38469),
      Cd = kd(38488),
      Kd = kd(38491),
      od = 128,
      ld = 1 << 22,
      Qd = 1 << 22,
      Ld = Kd("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      Od = Kd("lo===p0", ["p0"]),
      ed = Kd("lo<p0", ["p0"]),
      Rd = Kd("hi<=p0", ["p0"]),
      Id = Kd("lo<=p0&&p0<=hi", ["p0"]),
      Gd = Kd("lo<p0&&p0<=hi", ["p0"]),
      vd = 6,
      xd = 2,
      qd = pd.mallocInt32(1024),
      Bd = pd.mallocDouble(1024);

    function sd(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd) {
      var Cd = vd * dd;
      qd[Cd] = Jd, qd[Cd + 1] = kd, qd[Cd + 2] = pd, qd[Cd + 3] = Nd, qd[Cd + 4] = Wd, qd[Cd + 5] = Pd;
      var Kd = xd * dd;
      Bd[Kd] = Zd, Bd[Kd + 1] = gd
    }

    function ad(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd, Kd) {
      var od = 2 * dd,
        ld = gd * od,
        Qd = Cd[ld + Jd];
      dd: for (var Ld = Nd, Od = Nd * od; Ld < Wd; ++Ld, Od += od) {
        var ed = Pd[Od + Jd],
          Rd = Pd[Od + Jd + dd];
        if (!(Qd < ed || Rd < Qd) && (!pd || Qd !== ed)) {
          for (var Id, Gd = Zd[Ld], vd = Jd + 1; vd < dd; ++vd) {
            ed = Pd[Od + vd], Rd = Pd[Od + vd + dd];
            var xd = Cd[ld + vd],
              qd = Cd[ld + vd + dd];
            if (Rd < xd || qd < ed) continue dd
          }
          if (void 0 !== (Id = pd ? kd(Kd, Gd) : kd(Gd, Kd))) return Id
        }
      }
    }

    function Md(dd, Jd, kd, pd, Nd, Wd, Pd, Zd, gd, Cd) {
      var Kd = 2 * dd,
        od = Zd * Kd,
        ld = gd[od + Jd];
      dd: for (var Qd = pd, Ld = pd * Kd; Qd < Nd; ++Qd, Ld += Kd) {
        var Od = Pd[Qd];
        if (Od !== Cd) {
          var ed = Wd[Ld + Jd],
            Rd = Wd[Ld + Jd + dd];
          if (!(ld < ed || Rd < ld)) {
            for (var Id = Jd + 1; Id < dd; ++Id) {
              ed = Wd[Ld + Id], Rd = Wd[Ld + Id + dd];
              var Gd = gd[od + Id],
                vd = gd[od + Id + dd];
              if (Rd < Gd || vd < ed) continue dd
            }
            var xd = kd(Od, Cd);
            if (void 0 !== xd) return xd
          }
        }
      }
    }
  },
  38488: (dd, Jd, kd) => {
    dd.exports = function(dd, Jd, kd, Pd, Zd, gd) {
      if (Pd <= kd + 1) return kd;
      var Cd = kd,
        Kd = Pd,
        od = Pd + kd >>> 1,
        ld = 2 * dd,
        Qd = od,
        Ld = Zd[ld * od + Jd];
      for (; Cd < Kd;) {
        if (Kd - Cd < Nd) {
          Wd(dd, Jd, Cd, Kd, Zd, gd), Ld = Zd[ld * od + Jd];
          break
        }
        var Od = Kd - Cd,
          ed = Math.random() * Od + Cd | 0,
          Rd = Zd[ld * ed + Jd],
          Id = Math.random() * Od + Cd | 0,
          Gd = Zd[ld * Id + Jd],
          vd = Math.random() * Od + Cd | 0,
          xd = Zd[ld * vd + Jd];
        Rd <= Gd ? xd >= Gd ? (Qd = Id, Ld = Gd) : Rd >= xd ? (Qd = ed, Ld = Rd) : (Qd = vd, Ld = xd) : Gd >= xd ? (Qd = Id, Ld = Gd) : xd >= Rd ? (Qd = ed, Ld = Rd) : (Qd = vd, Ld = xd);
        for (var qd = ld * (Kd - 1), Bd = ld * Qd, sd = 0; sd < ld; ++sd, ++qd, ++Bd) {
          var ad = Zd[qd];
          Zd[qd] = Zd[Bd], Zd[Bd] = ad
        }
        var Md = gd[Kd - 1];
        gd[Kd - 1] = gd[Qd], gd[Qd] = Md;
        for (qd = ld * (Kd - 1), Bd = ld * (Qd = pd(dd, Jd, Cd, Kd - 1, Zd, gd, Ld)), sd = 0; sd < ld; ++sd, ++qd, ++Bd) {
          ad = Zd[qd];
          Zd[qd] = Zd[Bd], Zd[Bd] = ad
        }
        Md = gd[Kd - 1];
        if (gd[Kd - 1] = gd[Qd], gd[Qd] = Md, od < Qd) {
          for (Kd = Qd - 1; Cd < Kd && Zd[ld * (Kd - 1) + Jd] === Ld;) Kd -= 1;
          Kd += 1
        } else {
          if (!(Qd < od)) break;
          for (Cd = Qd + 1; Cd < Kd && Zd[ld * Cd + Jd] === Ld;) Cd += 1
        }
      }
      return pd(dd, Jd, kd, od, Zd, gd, Zd[ld * od + Jd])
    };
    var pd = kd(38491)("lo<p0", ["p0"]),
      Nd = 8;

    function Wd(dd, Jd, kd, pd, Nd, Wd) {
      for (var Pd = 2 * dd, Zd = Pd * (kd + 1) + Jd, gd = kd + 1; gd < pd; ++gd, Zd += Pd)
        for (var Cd = Nd[Zd], Kd = gd, od = Pd * (gd - 1); Kd > kd && Nd[od + Jd] > Cd; --Kd, od -= Pd) {
          for (var ld = od, Qd = od + Pd, Ld = 0; Ld < Pd; ++Ld, ++ld, ++Qd) {
            var Od = Nd[ld];
            Nd[ld] = Nd[Qd], Nd[Qd] = Od
          }
          var ed = Wd[Kd];
          Wd[Kd] = Wd[Kd - 1], Wd[Kd - 1] = ed
        }
    }
  },
  38491: dd => {
    dd.exports = function(dd, kd) {
      var pd = "abcdef".split("").concat(kd),
        Nd = [];
      dd.indexOf("lo") >= 0 && Nd.push("lo=e[k+n]");
      dd.indexOf("hi") >= 0 && Nd.push("hi=e[k+o]");
      return pd.push(Jd.replace("_", Nd.join()).replace("$", dd)), Function.apply(void 0, pd)
    };
    var Jd = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  38474: dd => {
    dd.exports = function(dd, pd) {
      pd <= 4 * Jd ? kd(0, pd - 1, dd) : Cd(0, pd - 1, dd)
    };
    var Jd = 32;

    function kd(dd, Jd, kd) {
      for (var pd = 2 * (dd + 1), Nd = dd + 1; Nd <= Jd; ++Nd) {
        for (var Wd = kd[pd++], Pd = kd[pd++], Zd = Nd, gd = pd - 2; Zd-- > dd;) {
          var Cd = kd[gd - 2],
            Kd = kd[gd - 1];
          if (Cd < Wd) break;
          if (Cd === Wd && Kd < Pd) break;
          kd[gd] = Cd, kd[gd + 1] = Kd, gd -= 2
        }
        kd[gd] = Wd, kd[gd + 1] = Pd
      }
    }

    function pd(dd, Jd, kd) {
      Jd *= 2;
      var pd = kd[dd *= 2],
        Nd = kd[dd + 1];
      kd[dd] = kd[Jd], kd[dd + 1] = kd[Jd + 1], kd[Jd] = pd, kd[Jd + 1] = Nd
    }

    function Nd(dd, Jd, kd) {
      Jd *= 2, kd[dd *= 2] = kd[Jd], kd[dd + 1] = kd[Jd + 1]
    }

    function Wd(dd, Jd, kd, pd) {
      Jd *= 2, kd *= 2;
      var Nd = pd[dd *= 2],
        Wd = pd[dd + 1];
      pd[dd] = pd[Jd], pd[dd + 1] = pd[Jd + 1], pd[Jd] = pd[kd], pd[Jd + 1] = pd[kd + 1], pd[kd] = Nd, pd[kd + 1] = Wd
    }

    function Pd(dd, Jd, kd, pd, Nd) {
      Jd *= 2, Nd[dd *= 2] = Nd[Jd], Nd[Jd] = kd, Nd[dd + 1] = Nd[Jd + 1], Nd[Jd + 1] = pd
    }

    function Zd(dd, Jd, kd) {
      Jd *= 2;
      var pd = kd[dd *= 2],
        Nd = kd[Jd];
      return !(pd < Nd) && (pd !== Nd || kd[dd + 1] > kd[Jd + 1])
    }

    function gd(dd, Jd, kd, pd) {
      var Nd = pd[dd *= 2];
      return Nd < Jd || Nd === Jd && pd[dd + 1] < kd
    }

    function Cd(dd, Kd, od) {
      var ld = (Kd - dd + 1) / 6 | 0,
        Qd = dd + ld,
        Ld = Kd - ld,
        Od = dd + Kd >> 1,
        ed = Od - ld,
        Rd = Od + ld,
        Id = Qd,
        Gd = ed,
        vd = Od,
        xd = Rd,
        qd = Ld,
        Bd = dd + 1,
        sd = Kd - 1,
        ad = 0;
      Zd(Id, Gd, od) && (ad = Id, Id = Gd, Gd = ad), Zd(xd, qd, od) && (ad = xd, xd = qd, qd = ad), Zd(Id, vd, od) && (ad = Id, Id = vd, vd = ad), Zd(Gd, vd, od) && (ad = Gd, Gd = vd, vd = ad), Zd(Id, xd, od) && (ad = Id, Id = xd, xd = ad), Zd(vd, xd, od) && (ad = vd, vd = xd, xd = ad), Zd(Gd, qd, od) && (ad = Gd, Gd = qd, qd = ad), Zd(Gd, vd, od) && (ad = Gd, Gd = vd, vd = ad), Zd(xd, qd, od) && (ad = xd, xd = qd, qd = ad);
      for (var Md = od[2 * Gd], Fd = od[2 * Gd + 1], Yd = od[2 * xd], md = od[2 * xd + 1], bd = 2 * Id, Sd = 2 * vd, jd = 2 * qd, Xd = 2 * Qd, fd = 2 * Od, nd = 2 * Ld, Ud = 0; Ud < 2; ++Ud) {
        var yd = od[bd + Ud],
          Dd = od[Sd + Ud],
          Td = od[jd + Ud];
        od[Xd + Ud] = yd, od[fd + Ud] = Dd, od[nd + Ud] = Td
      }
      Nd(ed, dd, od), Nd(Rd, Kd, od);
      for (var Ed = Bd; Ed <= sd; ++Ed)
        if (gd(Ed, Md, Fd, od)) Ed !== Bd && pd(Ed, Bd, od), ++Bd;
        else if (!gd(Ed, Yd, md, od))
        for (;;) {
          if (gd(sd, Yd, md, od)) {
            gd(sd, Md, Fd, od) ? (Wd(Ed, Bd, sd, od), ++Bd, --sd) : (pd(Ed, sd, od), --sd);
            break
          }
          if (--sd < Ed) break
        }
      Pd(dd, Bd - 1, Md, Fd, od), Pd(Kd, sd + 1, Yd, md, od), Bd - 2 - dd <= Jd ? kd(dd, Bd - 2, od) : Cd(dd, Bd - 2, od), Kd - (sd + 2) <= Jd ? kd(sd + 2, Kd, od) : Cd(sd + 2, Kd, od), sd - Bd <= Jd ? kd(Bd, sd, od) : Cd(Bd, sd, od)
    }
  },
  38469: (dd, Jd, kd) => {
    dd.exports = {
      init: function(dd) {
        var Jd = Nd.nextPow2(dd);
        gd.length < Jd && (pd.free(gd), gd = pd.mallocInt32(Jd));
        Cd.length < Jd && (pd.free(Cd), Cd = pd.mallocInt32(Jd));
        Kd.length < Jd && (pd.free(Kd), Kd = pd.mallocInt32(Jd));
        od.length < Jd && (pd.free(od), od = pd.mallocInt32(Jd));
        ld.length < Jd && (pd.free(ld), ld = pd.mallocInt32(Jd));
        Qd.length < Jd && (pd.free(Qd), Qd = pd.mallocInt32(Jd));
        var kd = 8 * Jd;
        Ld.length < kd && (pd.free(Ld), Ld = pd.mallocDouble(kd))
      },
      sweepBipartite: function(dd, Jd, kd, pd, Nd, Zd, ld, Qd, Rd, Id) {
        for (var Gd = 0, vd = 2 * dd, xd = dd - 1, qd = vd - 1, Bd = kd; Bd < pd; ++Bd) {
          var sd = Zd[Bd],
            ad = vd * Bd;
          Ld[Gd++] = Nd[ad + xd], Ld[Gd++] = -(sd + 1), Ld[Gd++] = Nd[ad + qd], Ld[Gd++] = sd
        }
        for (Bd = ld; Bd < Qd; ++Bd) {
          sd = Id[Bd] + Pd;
          var Md = vd * Bd;
          Ld[Gd++] = Rd[Md + xd], Ld[Gd++] = -sd, Ld[Gd++] = Rd[Md + qd], Ld[Gd++] = sd
        }
        var Fd = Gd >>> 1;
        Wd(Ld, Fd);
        var Yd = 0,
          md = 0;
        for (Bd = 0; Bd < Fd; ++Bd) {
          var bd = 0 | Ld[2 * Bd + 1];
          if (bd >= Pd) Od(Kd, od, md--, bd = bd - Pd | 0);
          else if (bd >= 0) Od(gd, Cd, Yd--, bd);
          else if (bd <= -Pd) {
            bd = -bd - Pd | 0;
            for (var Sd = 0; Sd < Yd; ++Sd) {
              if (void 0 !== (jd = Jd(gd[Sd], bd))) return jd
            }
            ed(Kd, od, md++, bd)
          } else {
            bd = -bd - 1 | 0;
            for (Sd = 0; Sd < md; ++Sd) {
              var jd;
              if (void 0 !== (jd = Jd(bd, Kd[Sd]))) return jd
            }
            ed(gd, Cd, Yd++, bd)
          }
        }
      },
      sweepComplete: function(dd, Jd, kd, pd, Nd, Pd, Zd, Rd, Id, Gd) {
        for (var vd = 0, xd = 2 * dd, qd = dd - 1, Bd = xd - 1, sd = kd; sd < pd; ++sd) {
          var ad = Pd[sd] + 1 << 1,
            Md = xd * sd;
          Ld[vd++] = Nd[Md + qd], Ld[vd++] = -ad, Ld[vd++] = Nd[Md + Bd], Ld[vd++] = ad
        }
        for (sd = Zd; sd < Rd; ++sd) {
          ad = Gd[sd] + 1 << 1;
          var Fd = xd * sd;
          Ld[vd++] = Id[Fd + qd], Ld[vd++] = 1 | -ad, Ld[vd++] = Id[Fd + Bd], Ld[vd++] = 1 | ad
        }
        var Yd = vd >>> 1;
        Wd(Ld, Yd);
        var md = 0,
          bd = 0,
          Sd = 0;
        for (sd = 0; sd < Yd; ++sd) {
          var jd = 0 | Ld[2 * sd + 1],
            Xd = 1 & jd;
          if (sd < Yd - 1 && jd >> 1 === Ld[2 * sd + 3] >> 1 && (Xd = 2, sd += 1), jd < 0) {
            for (var fd = -(jd >> 1) - 1, nd = 0; nd < Sd; ++nd) {
              if (void 0 !== (Ud = Jd(ld[nd], fd))) return Ud
            }
            if (0 !== Xd)
              for (nd = 0; nd < md; ++nd) {
                if (void 0 !== (Ud = Jd(gd[nd], fd))) return Ud
              }
            if (1 !== Xd)
              for (nd = 0; nd < bd; ++nd) {
                var Ud;
                if (void 0 !== (Ud = Jd(Kd[nd], fd))) return Ud
              }
            0 === Xd ? ed(gd, Cd, md++, fd) : 1 === Xd ? ed(Kd, od, bd++, fd) : 2 === Xd && ed(ld, Qd, Sd++, fd)
          } else {
            fd = (jd >> 1) - 1;
            0 === Xd ? Od(gd, Cd, md--, fd) : 1 === Xd ? Od(Kd, od, bd--, fd) : 2 === Xd && Od(ld, Qd, Sd--, fd)
          }
        }
      },
      scanBipartite: function(dd, Jd, kd, pd, Nd, Zd, Kd, od, ld, Qd, Rd, Id) {
        var Gd = 0,
          vd = 2 * dd,
          xd = Jd,
          qd = Jd + dd,
          Bd = 1,
          sd = 1;
        pd ? sd = Pd : Bd = Pd;
        for (var ad = Nd; ad < Zd; ++ad) {
          var Md = ad + Bd,
            Fd = vd * ad;
          Ld[Gd++] = Kd[Fd + xd], Ld[Gd++] = -Md, Ld[Gd++] = Kd[Fd + qd], Ld[Gd++] = Md
        }
        for (ad = ld; ad < Qd; ++ad) {
          Md = ad + sd;
          var Yd = vd * ad;
          Ld[Gd++] = Rd[Yd + xd], Ld[Gd++] = -Md
        }
        var md = Gd >>> 1;
        Wd(Ld, md);
        var bd = 0;
        for (ad = 0; ad < md; ++ad) {
          var Sd = 0 | Ld[2 * ad + 1];
          if (Sd < 0) {
            var jd = !1;
            if ((Md = -Sd) >= Pd ? (jd = !pd, Md -= Pd) : (jd = !!pd, Md -= 1), jd) ed(gd, Cd, bd++, Md);
            else {
              var Xd = Id[Md],
                fd = vd * Md,
                nd = Rd[fd + Jd + 1],
                Ud = Rd[fd + Jd + 1 + dd];
              dd: for (var yd = 0; yd < bd; ++yd) {
                var Dd = gd[yd],
                  Td = vd * Dd;
                if (!(Ud < Kd[Td + Jd + 1] || Kd[Td + Jd + 1 + dd] < nd)) {
                  for (var Ed = Jd + 2; Ed < dd; ++Ed)
                    if (Rd[fd + Ed + dd] < Kd[Td + Ed] || Kd[Td + Ed + dd] < Rd[fd + Ed]) continue dd;
                  var cd, hd = od[Dd];
                  if (void 0 !== (cd = pd ? kd(Xd, hd) : kd(hd, Xd))) return cd
                }
              }
            }
          } else Od(gd, Cd, bd--, Sd - Bd)
        }
      },
      scanComplete: function(dd, Jd, kd, pd, Nd, Zd, Cd, Kd, od, ld, Qd) {
        for (var Od = 0, ed = 2 * dd, Rd = Jd, Id = Jd + dd, Gd = pd; Gd < Nd; ++Gd) {
          var vd = Gd + Pd,
            xd = ed * Gd;
          Ld[Od++] = Zd[xd + Rd], Ld[Od++] = -vd, Ld[Od++] = Zd[xd + Id], Ld[Od++] = vd
        }
        for (Gd = Kd; Gd < od; ++Gd) {
          vd = Gd + 1;
          var qd = ed * Gd;
          Ld[Od++] = ld[qd + Rd], Ld[Od++] = -vd
        }
        var Bd = Od >>> 1;
        Wd(Ld, Bd);
        var sd = 0;
        for (Gd = 0; Gd < Bd; ++Gd) {
          var ad = 0 | Ld[2 * Gd + 1];
          if (ad < 0) {
            if ((vd = -ad) >= Pd) gd[sd++] = vd - Pd;
            else {
              var Md = Qd[vd -= 1],
                Fd = ed * vd,
                Yd = ld[Fd + Jd + 1],
                md = ld[Fd + Jd + 1 + dd];
              dd: for (var bd = 0; bd < sd; ++bd) {
                var Sd = gd[bd],
                  jd = Cd[Sd];
                if (jd === Md) break;
                var Xd = ed * Sd;
                if (!(md < Zd[Xd + Jd + 1] || Zd[Xd + Jd + 1 + dd] < Yd)) {
                  for (var fd = Jd + 2; fd < dd; ++fd)
                    if (ld[Fd + fd + dd] < Zd[Xd + fd] || Zd[Xd + fd + dd] < ld[Fd + fd]) continue dd;
                  var nd = kd(jd, Md);
                  if (void 0 !== nd) return nd
                }
              }
            }
          } else {
            for (vd = ad - Pd, bd = sd - 1; bd >= 0; --bd)
              if (gd[bd] === vd) {
                for (fd = bd + 1; fd < sd; ++fd) gd[fd - 1] = gd[fd];
                break
              }-- sd
          }
        }
      }
    };
    var pd = kd(38451),
      Nd = kd(38454),
      Wd = kd(38474),
      Pd = 1 << 28,
      Zd = 1024,
      gd = pd.mallocInt32(Zd),
      Cd = pd.mallocInt32(Zd),
      Kd = pd.mallocInt32(Zd),
      od = pd.mallocInt32(Zd),
      ld = pd.mallocInt32(Zd),
      Qd = pd.mallocInt32(Zd),
      Ld = pd.mallocDouble(8192);

    function Od(dd, Jd, kd, pd) {
      var Nd = Jd[pd],
        Wd = dd[kd - 1];
      dd[Nd] = Wd, Jd[Wd] = Nd
    }

    function ed(dd, Jd, kd, pd) {
      dd[kd] = pd, Jd[pd] = kd
    }
  },
  38461: dd => {
    function Jd(dd, kd, pd) {
      var Nd = 0 | dd[pd];
      if (Nd <= 0) return [];
      var Wd, Pd = new Array(Nd);
      if (pd === dd.length - 1)
        for (Wd = 0; Wd < Nd; ++Wd) Pd[Wd] = kd;
      else
        for (Wd = 0; Wd < Nd; ++Wd) Pd[Wd] = Jd(dd, kd, pd + 1);
      return Pd
    }
    dd.exports = function(dd, kd) {
      switch ("undefined" === typeof kd && (kd = 0), typeof dd) {
        case "number":
          if (dd > 0) return function(dd, Jd) {
            var kd, pd;
            for (kd = new Array(dd), pd = 0; pd < dd; ++pd) kd[pd] = Jd;
            return kd
          }(0 | dd, kd);
          break;
        case "object":
          if ("number" === typeof dd.length) return Jd(dd, kd, 0)
      }
      return []
    }
  },
  38414: (dd, Jd, kd) => {
    dd.exports = function() {
      var dd = this;
      this.components = {}, this.comps = this.components;
      var Jd = this.components,
        kd = 1,
        Nd = {},
        Wd = [],
        Pd = [],
        Zd = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function gd(dd, kd) {
        var pd = Jd[kd],
          Wd = Nd[kd],
          Pd = Wd.hash[dd];
        Pd && (Wd.remove(dd), pd.RY && (pd.multi ? (Pd.forEach((Jd => {
          Jd && pd.RY(dd, Jd)
        })), Pd.length = 0) : pd.RY(dd, Pd)), Zd.removals.push(Wd), Cd())
      }

      function Cd() {
        Zd.timeout || (Zd.timeout = !0, setTimeout(Kd, 1))
      }

      function Kd() {
        Zd.timeout = !1, od()
      }

      function od() {
        Zd.multiComps.length && function(dd) {
          for (var Jd = 0; Jd < dd.length; Jd++) {
            var {
              entID: kd,
              data: pd
            } = dd[Jd], Nd = pd.hash[kd];
            if (Nd) {
              for (var Wd = 0; Wd < Nd.length; Wd++) Nd[Wd] || (Nd.splice(Wd, 1), Wd--);
              0 === Nd.length && (pd.remove(kd), Zd.removals.push(pd))
            }
          }
          dd.length = 0
        }(Zd.multiComps), Zd.removals.length && function(dd) {
          for (var Jd = 0; Jd < dd.length; Jd++) {
            dd[Jd].flush()
          }
          dd.length = 0
        }(Zd.removals)
      }
      this.pO = Nd, this._systems = Wd, this._renderSystems = Pd, this.mV = function(Jd) {
        var pd = kd++;
        return Array.isArray(Jd) && Jd.forEach((Jd => dd.bS(pd, Jd))), pd
      }, this.deleteEntity = function(Jd) {
        return Object.keys(Nd).forEach((dd => {
          Nd[dd].hash[Jd] && gd(Jd, dd)
        })), dd
      }, this.pkd = function(dd) {
        if (!dd) throw new Error("Missing component definition");
        var kd = dd.name;
        if (!kd) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof kd) throw new Error("Component name must be a string.");
        if ("" === kd) throw new Error("Component name must be a non-empty string.");
        if (Nd[kd]) throw new Error(`Component ${kd} already exists.`);
        var Zd = {};
        return Zd.name = kd, Zd.multi = !!dd.multi, Zd.order = isNaN(dd.order) ? 99 : dd.order, Zd.stateConstructor = dd.stateConstructor || null, Zd.state = dd.state || {}, Zd.QG = dd.QG || null, Zd.RY = dd.RY || null, Zd.system = dd.system || null, Zd.xG = dd.xG || null, Jd[kd] = Zd, Nd[kd] = new pd, Nd[kd]._pendingMultiCleanup = !1, Nd[kd]._multiCleanupIDs = Zd.multi ? [] : null, Zd.system && (Wd.push(kd), Wd.sort(((dd, kd) => Jd[dd].order - Jd[kd].order))), Zd.xG && (Pd.push(kd), Pd.sort(((dd, kd) => Jd[dd].order - Jd[kd].order))), kd
      }, this.overwriteComponent = function(dd, kd) {
        var pd = Jd[dd];
        if (!pd) throw new Error(`Unknown component: ${dd}`);
        if (!kd) throw new Error("Missing component definition");
        if (pd.name !== kd.name) throw new Error("Overwriting component must use the same name property.");
        var Zd = {};
        Zd.name = dd, Zd.multi = !!kd.multi, Zd.order = isNaN(kd.order) ? 99 : kd.order, Zd.state = kd.state || {}, Zd.QG = kd.QG || null, Zd.RY = kd.RY || null, Zd.system = kd.system || null, Zd.xG = kd.xG || null, Jd[dd] = Zd, Nd[dd]._pendingMultiCleanup = !1, Nd[dd]._multiCleanupIDs = Zd.multi ? [] : null;
        var gd = Wd.indexOf(dd);
        Zd.system && gd < 0 && Wd.push(dd), !Zd.system && gd >= 0 && Wd.splice(gd, 1), Wd.sort(((dd, kd) => Jd[dd].order - Jd[kd].order));
        var Cd = Pd.indexOf(dd);
        Zd.xG && Cd < 0 && Pd.push(dd), !Zd.xG && Cd >= 0 && Pd.splice(Cd, 1), Pd.sort(((dd, kd) => Jd[dd].order - Jd[kd].order));
        var Kd = Zd.state;
        return this.kS(dd).forEach((dd => {
          for (var Jd in Kd) Jd in dd || (dd[Jd] = Kd[Jd]);
          Zd.QG && Zd.QG(dd.qS, dd)
        })), dd
      }, this.deleteComponent = function(kd) {
        var pd = Nd[kd];
        if (!pd) throw new Error(`Unknown component: ${kd}`);
        pd.flush(), pd.list.forEach((dd => {
          dd && gd(dd.qS || dd[0].qS, kd)
        }));
        var Zd = Wd.indexOf(kd),
          Cd = Pd.indexOf(kd);
        return Zd > -1 && Wd.splice(Zd, 1), Cd > -1 && Pd.splice(Cd, 1), Nd[kd].dispose(), delete Nd[kd], delete Jd[kd], dd
      }, this.bS = function(dd, kd, pd) {
        var Wd, Pd = Jd[kd],
          Zd = Nd[kd];
        if (!Zd) throw new Error(`Unknown component: ${kd}.`);
        if (Zd.hash[dd] && !Pd.multi) throw new Error(`Entity ${dd} already has component: ${kd}.`);
        if (Pd.stateConstructor) {
          if (!(Wd = new Pd.stateConstructor).hasOwnProperty("qS")) throw new Error(`Component ${Pd.name} stateConstructor type does not have property __id`);
          Object.assign(Wd, Pd.state, pd)
        } else Wd = {
          qS: dd,
          ...Pd.state,
          ...pd
        };
        if (Wd.qS = dd, Pd.multi) {
          var gd = Zd.hash[dd];
          gd || (gd = [], Zd.add(dd, gd)), gd.push(Wd)
        } else Zd.add(dd, Wd);
        return Pd.QG && Pd.QG(dd, Wd), this
      }, this.JJd = function(dd, Jd) {
        var kd = Nd[Jd];
        if (!kd) throw new Error(`Unknown component: ${Jd}.`);
        return !!kd.hash[dd]
      }, this.nS = function(Jd, kd) {
        if (!Nd[kd]) throw new Error(`Unknown component: ${kd}.`);
        return gd(Jd, kd), dd
      }, this.getState = function(dd, Jd) {
        var kd = Nd[Jd];
        if (!kd) throw new Error(`Unknown component: ${Jd}.`);
        return kd.hash[dd]
      }, this.kS = function(dd) {
        var Jd = Nd[dd];
        if (!Jd) throw new Error(`Unknown component: ${dd}.`);
        return od(), Jd.list
      }, this.fJd = function(dd) {
        if (!Nd[dd]) throw new Error(`Unknown component: ${dd}.`);
        var Jd = Nd[dd].hash;
        return dd => Jd[dd]
      }, this.EJd = function(dd) {
        if (!Nd[dd]) throw new Error(`Unknown component: ${dd}.`);
        var Jd = Nd[dd].hash;
        return dd => !!Jd[dd]
      }, this.Do = function(kd) {
        od();
        for (var pd = 0; pd < Wd.length; pd++) {
          var Pd = Wd[pd],
            Zd = Jd[Pd],
            gd = Nd[Pd];
          Zd.system(kd, gd.list), od()
        }
        return dd
      }, this.render = function(kd) {
        od();
        for (var pd = 0; pd < Pd.length; pd++) {
          var Wd = Pd[pd],
            Zd = Jd[Wd],
            gd = Nd[Wd];
          Zd.xG(kd, gd.list), od()
        }
        return dd
      }, this.removeMultiComponent = function(kd, pd, Wd) {
        var Pd = Jd[pd],
          gd = Nd[pd];
        if (!gd) throw new Error(`Unknown component: ${pd}.`);
        if (!Pd.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(dd, Jd, kd, pd) {
          var Nd = kd.hash[dd];
          if (Nd) {
            var Wd = Nd[pd];
            Wd && (Nd[pd] = null, Jd.RY && Jd.RY(dd, Wd), Zd.multiComps.push({
              entID: dd,
              data: kd
            }), Cd())
          }
        }(kd, Pd, gd, Wd), dd
      }
    };
    var pd = kd(38419)
  },
  38419: dd => {
    function Jd(dd, Jd) {
      var kd = dd._map[Jd];
      if (delete dd.hash[Jd], delete dd._map[Jd], kd === dd.list.length - 1) dd.list.pop(), dd._idList.pop();
      else {
        var pd = dd.list.pop();
        dd.list[kd] = pd;
        var Nd = dd._idList.pop();
        dd._idList[kd] = Nd, dd._map[Nd] = kd
      }
    }
    dd.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(dd, Jd) {
        if ("number" === typeof this._map[dd]) {
          var kd = this._map[dd];
          this.hash[dd] = Jd, this.list[kd] = Jd, this._idList[kd] = dd
        } else this._map[dd] = this.list.length, this.hash[dd] = Jd, this.list.push(Jd), this._idList.push(dd)
      }
      remove(dd) {
        var Jd = this._map[dd];
        this.hash[dd] = null, this.list[Jd] = null, this._pendingRemovals.push(dd)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var dd = 0; dd < this._pendingRemovals.length; dd++) {
          var kd = this._pendingRemovals[dd];
          null === this.hash[kd] && Jd(this, kd)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  38242: (dd, Jd, kd) => {
    dd = kd.nmd(dd);
    var pd = "__lodash_hash_undefined__",
      Nd = 9007199254740991,
      Wd = "[object Arguments]",
      Pd = "[object Boolean]",
      Zd = "[object Date]",
      gd = "[object Function]",
      Cd = "[object GeneratorFunction]",
      Kd = "[object Map]",
      od = "[object Number]",
      ld = "[object Object]",
      Qd = "[object Promise]",
      Ld = "[object RegExp]",
      Od = "[object Set]",
      ed = "[object String]",
      Rd = "[object Symbol]",
      Id = "[object WeakMap]",
      Gd = "[object ArrayBuffer]",
      vd = "[object DataView]",
      xd = "[object Float32Array]",
      qd = "[object Float64Array]",
      Bd = "[object Int8Array]",
      sd = "[object Int16Array]",
      ad = "[object Int32Array]",
      Md = "[object Uint8Array]",
      Fd = "[object Uint8ClampedArray]",
      Yd = "[object Uint16Array]",
      md = "[object Uint32Array]",
      bd = /\w*$/,
      Sd = /^\[object .+?Constructor\]$/,
      jd = /^(?:0|[1-9]\d*)$/,
      Xd = {};
    Xd[Wd] = Xd["[object Array]"] = Xd[Gd] = Xd[vd] = Xd[Pd] = Xd[Zd] = Xd[xd] = Xd[qd] = Xd[Bd] = Xd[sd] = Xd[ad] = Xd[Kd] = Xd[od] = Xd[ld] = Xd[Ld] = Xd[Od] = Xd[ed] = Xd[Rd] = Xd[Md] = Xd[Fd] = Xd[Yd] = Xd[md] = !0, Xd["[object Error]"] = Xd[gd] = Xd[Id] = !1;
    var fd = "object" == typeof kd.g && kd.g && kd.g.Object === Object && kd.g,
      nd = "object" == typeof self && self && self.Object === Object && self,
      Ud = fd || nd || Function("return this")(),
      yd = Jd && !Jd.nodeType && Jd,
      Dd = yd && dd && !dd.nodeType && dd,
      Td = Dd && Dd.exports === yd;

    function Ed(dd, Jd) {
      return dd.set(Jd[0], Jd[1]), dd
    }

    function cd(dd, Jd) {
      return dd.add(Jd), dd
    }

    function hd(dd, Jd, kd, pd) {
      var Nd = -1,
        Wd = dd ? dd.length : 0;
      for (pd && Wd && (kd = dd[++Nd]); ++Nd < Wd;) kd = Jd(kd, dd[Nd], Nd, dd);
      return kd
    }

    function rd(dd) {
      var Jd = !1;
      if (null != dd && "function" != typeof dd.toString) try {
        Jd = !!(dd + "")
      } catch (kd) {}
      return Jd
    }

    function ud(dd) {
      var Jd = -1,
        kd = Array(dd.size);
      return dd.forEach((function(dd, pd) {
        kd[++Jd] = [pd, dd]
      })), kd
    }

    function td(dd, Jd) {
      return function(kd) {
        return dd(Jd(kd))
      }
    }

    function Vd(dd) {
      var Jd = -1,
        kd = Array(dd.size);
      return dd.forEach((function(dd) {
        kd[++Jd] = dd
      })), kd
    }
    var zd = Array.prototype,
      Hd = Function.prototype,
      wd = Object.prototype,
      Ad = Ud["__core-js_shared__"],
      dJ = function() {
        var dd = /[^.]+$/.exec(Ad && Ad.keys && Ad.keys.IE_PROTO || "");
        return dd ? "Symbol(src)_1." + dd : ""
      }(),
      JJ = Hd.toString,
      kJ = wd.hasOwnProperty,
      pJ = wd.toString,
      NJ = RegExp("^" + JJ.call(kJ).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      WJ = Td ? Ud.kL : void 0,
      PJ = Ud.Symbol,
      ZJ = Ud.Uint8Array,
      gJ = td(Object.getPrototypeOf, Object),
      CJ = Object.create,
      KJ = wd.propertyIsEnumerable,
      oJ = zd.splice,
      lJ = Object.getOwnPropertySymbols,
      QJ = WJ ? WJ.isBuffer : void 0,
      LJ = td(Object.keys, Object),
      OJ = TJ(Ud, "DataView"),
      eJ = TJ(Ud, "Map"),
      RJ = TJ(Ud, "Promise"),
      IJ = TJ(Ud, "Set"),
      GJ = TJ(Ud, "WeakMap"),
      vJ = TJ(Object, "create"),
      xJ = uJ(OJ),
      qJ = uJ(eJ),
      BJ = uJ(RJ),
      sJ = uJ(IJ),
      iJ = uJ(GJ),
      aJ = PJ ? PJ.prototype : void 0,
      MJ = aJ ? aJ.valueOf : void 0;

    function FJ(dd) {
      var Jd = -1,
        kd = dd ? dd.length : 0;
      for (this.clear(); ++Jd < kd;) {
        var pd = dd[Jd];
        this.set(pd[0], pd[1])
      }
    }

    function YJ(dd) {
      var Jd = -1,
        kd = dd ? dd.length : 0;
      for (this.clear(); ++Jd < kd;) {
        var pd = dd[Jd];
        this.set(pd[0], pd[1])
      }
    }

    function mJ(dd) {
      var Jd = -1,
        kd = dd ? dd.length : 0;
      for (this.clear(); ++Jd < kd;) {
        var pd = dd[Jd];
        this.set(pd[0], pd[1])
      }
    }

    function bJ(dd) {
      this.__data__ = new YJ(dd)
    }

    function SJ(dd, Jd) {
      var kd = VJ(dd) || function(dd) {
          return function(dd) {
            return function(dd) {
              return !!dd && "object" == typeof dd
            }(dd) && zJ(dd)
          }(dd) && kJ.call(dd, "callee") && (!KJ.call(dd, "callee") || pJ.call(dd) == Wd)
        }(dd) ? function(dd, Jd) {
          for (var kd = -1, pd = Array(dd); ++kd < dd;) pd[kd] = Jd(kd);
          return pd
        }(dd.length, String) : [],
        pd = kd.length,
        Nd = !!pd;
      for (var Pd in dd) !Jd && !kJ.call(dd, Pd) || Nd && ("length" == Pd || hJ(Pd, pd)) || kd.push(Pd);
      return kd
    }

    function jJ(dd, Jd, kd) {
      var pd = dd[Jd];
      kJ.call(dd, Jd) && tJ(pd, kd) && (void 0 !== kd || Jd in dd) || (dd[Jd] = kd)
    }

    function XJ(dd, Jd) {
      for (var kd = dd.length; kd--;)
        if (tJ(dd[kd][0], Jd)) return kd;
      return -1
    }

    function fJ(dd, Jd, kd, pd, Nd, Qd, Id) {
      var Sd;
      if (pd && (Sd = Qd ? pd(dd, Nd, Qd, Id) : pd(dd)), void 0 !== Sd) return Sd;
      if (!AJ(dd)) return dd;
      var jd = VJ(dd);
      if (jd) {
        if (Sd = function(dd) {
            var Jd = dd.length,
              kd = dd.constructor(Jd);
            Jd && "string" == typeof dd[0] && kJ.call(dd, "index") && (kd.index = dd.index, kd.input = dd.input);
            return kd
          }(dd), !Jd) return function(dd, Jd) {
          var kd = -1,
            pd = dd.length;
          Jd || (Jd = Array(pd));
          for (; ++kd < pd;) Jd[kd] = dd[kd];
          return Jd
        }(dd, Sd)
      } else {
        var fd = cJ(dd),
          nd = fd == gd || fd == Cd;
        if (HJ(dd)) return function(dd, Jd) {
          if (Jd) return dd.slice();
          var kd = new dd.constructor(dd.length);
          return dd.copy(kd), kd
        }(dd, Jd);
        if (fd == ld || fd == Wd || nd && !Qd) {
          if (rd(dd)) return Qd ? dd : {};
          if (Sd = function(dd) {
              return "function" != typeof dd.constructor || rJ(dd) ? {} : (Jd = gJ(dd), AJ(Jd) ? CJ(Jd) : {});
              var Jd
            }(nd ? {} : dd), !Jd) return function(dd, Jd) {
            return yJ(dd, EJ(dd), Jd)
          }(dd, function(dd, Jd) {
            return dd && yJ(Jd, dk(Jd), dd)
          }(Sd, dd))
        } else {
          if (!Xd[fd]) return Qd ? dd : {};
          Sd = function(dd, Jd, kd, pd) {
            var Nd = dd.constructor;
            switch (Jd) {
              case Gd:
                return UJ(dd);
              case Pd:
              case Zd:
                return new Nd(+dd);
              case vd:
                return function(dd, Jd) {
                  var kd = Jd ? UJ(dd.buffer) : dd.buffer;
                  return new dd.constructor(kd, dd.byteOffset, dd.byteLength)
                }(dd, pd);
              case xd:
              case qd:
              case Bd:
              case sd:
              case ad:
              case Md:
              case Fd:
              case Yd:
              case md:
                return function(dd, Jd) {
                  var kd = Jd ? UJ(dd.buffer) : dd.buffer;
                  return new dd.constructor(kd, dd.byteOffset, dd.length)
                }(dd, pd);
              case Kd:
                return function(dd, Jd, kd) {
                  var pd = Jd ? kd(ud(dd), !0) : ud(dd);
                  return hd(pd, Ed, new dd.constructor)
                }(dd, pd, kd);
              case od:
              case ed:
                return new Nd(dd);
              case Ld:
                return function(dd) {
                  var Jd = new dd.constructor(dd.source, bd.exec(dd));
                  return Jd.lastIndex = dd.lastIndex, Jd
                }(dd);
              case Od:
                return function(dd, Jd, kd) {
                  var pd = Jd ? kd(Vd(dd), !0) : Vd(dd);
                  return hd(pd, cd, new dd.constructor)
                }(dd, pd, kd);
              case Rd:
                return Wd = dd, MJ ? Object(MJ.call(Wd)) : {}
            }
            var Wd
          }(dd, fd, fJ, Jd)
        }
      }
      Id || (Id = new bJ);
      var Ud = Id.get(dd);
      if (Ud) return Ud;
      if (Id.set(dd, Sd), !jd) var yd = kd ? function(dd) {
        return function(dd, Jd, kd) {
          var pd = Jd(dd);
          return VJ(dd) ? pd : function(dd, Jd) {
            for (var kd = -1, pd = Jd.length, Nd = dd.length; ++kd < pd;) dd[Nd + kd] = Jd[kd];
            return dd
          }(pd, kd(dd))
        }(dd, dk, EJ)
      }(dd) : dk(dd);
      return function(dd, Jd) {
        for (var kd = -1, pd = dd ? dd.length : 0; ++kd < pd && !1 !== Jd(dd[kd], kd, dd););
      }(yd || dd, (function(Nd, Wd) {
        yd && (Nd = dd[Wd = Nd]), jJ(Sd, Wd, fJ(Nd, Jd, kd, pd, Wd, dd, Id))
      })), Sd
    }

    function nJ(dd) {
      return !(!AJ(dd) || (Jd = dd, dJ && dJ in Jd)) && (wJ(dd) || rd(dd) ? NJ : Sd).test(uJ(dd));
      var Jd
    }

    function UJ(dd) {
      var Jd = new dd.constructor(dd.byteLength);
      return new ZJ(Jd).set(new ZJ(dd)), Jd
    }

    function yJ(dd, Jd, kd, pd) {
      kd || (kd = {});
      for (var Nd = -1, Wd = Jd.length; ++Nd < Wd;) {
        var Pd = Jd[Nd],
          Zd = pd ? pd(kd[Pd], dd[Pd], Pd, kd, dd) : void 0;
        jJ(kd, Pd, void 0 === Zd ? dd[Pd] : Zd)
      }
      return kd
    }

    function DJ(dd, Jd) {
      var kd = dd.__data__;
      return function(dd) {
        var Jd = typeof dd;
        return "string" == Jd || "number" == Jd || "symbol" == Jd || "boolean" == Jd ? "__proto__" !== dd : null === dd
      }(Jd) ? kd["string" == typeof Jd ? "string" : "hash"] : kd.map
    }

    function TJ(dd, Jd) {
      var kd = function(dd, Jd) {
        return null == dd ? void 0 : dd[Jd]
      }(dd, Jd);
      return nJ(kd) ? kd : void 0
    }
    FJ.prototype.clear = function() {
      this.__data__ = vJ ? vJ(null) : {}
    }, FJ.prototype.delete = function(dd) {
      return this.has(dd) && delete this.__data__[dd]
    }, FJ.prototype.get = function(dd) {
      var Jd = this.__data__;
      if (vJ) {
        var kd = Jd[dd];
        return kd === pd ? void 0 : kd
      }
      return kJ.call(Jd, dd) ? Jd[dd] : void 0
    }, FJ.prototype.has = function(dd) {
      var Jd = this.__data__;
      return vJ ? void 0 !== Jd[dd] : kJ.call(Jd, dd)
    }, FJ.prototype.set = function(dd, Jd) {
      return this.__data__[dd] = vJ && void 0 === Jd ? pd : Jd, this
    }, YJ.prototype.clear = function() {
      this.__data__ = []
    }, YJ.prototype.delete = function(dd) {
      var Jd = this.__data__,
        kd = XJ(Jd, dd);
      return !(kd < 0) && (kd == Jd.length - 1 ? Jd.pop() : oJ.call(Jd, kd, 1), !0)
    }, YJ.prototype.get = function(dd) {
      var Jd = this.__data__,
        kd = XJ(Jd, dd);
      return kd < 0 ? void 0 : Jd[kd][1]
    }, YJ.prototype.has = function(dd) {
      return XJ(this.__data__, dd) > -1
    }, YJ.prototype.set = function(dd, Jd) {
      var kd = this.__data__,
        pd = XJ(kd, dd);
      return pd < 0 ? kd.push([dd, Jd]) : kd[pd][1] = Jd, this
    }, mJ.prototype.clear = function() {
      this.__data__ = {
        hash: new FJ,
        map: new(eJ || YJ),
        string: new FJ
      }
    }, mJ.prototype.delete = function(dd) {
      return DJ(this, dd).delete(dd)
    }, mJ.prototype.get = function(dd) {
      return DJ(this, dd).get(dd)
    }, mJ.prototype.has = function(dd) {
      return DJ(this, dd).has(dd)
    }, mJ.prototype.set = function(dd, Jd) {
      return DJ(this, dd).set(dd, Jd), this
    }, bJ.prototype.clear = function() {
      this.__data__ = new YJ
    }, bJ.prototype.delete = function(dd) {
      return this.__data__.delete(dd)
    }, bJ.prototype.get = function(dd) {
      return this.__data__.get(dd)
    }, bJ.prototype.has = function(dd) {
      return this.__data__.has(dd)
    }, bJ.prototype.set = function(dd, Jd) {
      var kd = this.__data__;
      if (kd instanceof YJ) {
        var pd = kd.__data__;
        if (!eJ || pd.length < 199) return pd.push([dd, Jd]), this;
        kd = this.__data__ = new mJ(pd)
      }
      return kd.set(dd, Jd), this
    };
    var EJ = lJ ? td(lJ, Object) : function() {
        return []
      },
      cJ = function(dd) {
        return pJ.call(dd)
      };

    function hJ(dd, Jd) {
      return !!(Jd = null == Jd ? Nd : Jd) && ("number" == typeof dd || jd.test(dd)) && dd > -1 && dd % 1 == 0 && dd < Jd
    }

    function rJ(dd) {
      var Jd = dd && dd.constructor;
      return dd === ("function" == typeof Jd && Jd.prototype || wd)
    }

    function uJ(dd) {
      if (null != dd) {
        try {
          return JJ.call(dd)
        } catch (Jd) {}
        try {
          return dd + ""
        } catch (Jd) {}
      }
      return ""
    }

    function tJ(dd, Jd) {
      return dd === Jd || dd !== dd && Jd !== Jd
    }(OJ && cJ(new OJ(new ArrayBuffer(1))) != vd || eJ && cJ(new eJ) != Kd || RJ && cJ(RJ.resolve()) != Qd || IJ && cJ(new IJ) != Od || GJ && cJ(new GJ) != Id) && (cJ = function(dd) {
      var Jd = pJ.call(dd),
        kd = Jd == ld ? dd.constructor : void 0,
        pd = kd ? uJ(kd) : void 0;
      if (pd) switch (pd) {
        case xJ:
          return vd;
        case qJ:
          return Kd;
        case BJ:
          return Qd;
        case sJ:
          return Od;
        case iJ:
          return Id
      }
      return Jd
    });
    var VJ = Array.isArray;

    function zJ(dd) {
      return null != dd && function(dd) {
        return "number" == typeof dd && dd > -1 && dd % 1 == 0 && dd <= Nd
      }(dd.length) && !wJ(dd)
    }
    var HJ = QJ || function() {
      return !1
    };

    function wJ(dd) {
      var Jd = AJ(dd) ? pJ.call(dd) : "";
      return Jd == gd || Jd == Cd
    }

    function AJ(dd) {
      var Jd = typeof dd;
      return !!dd && ("object" == Jd || "function" == Jd)
    }

    function dk(dd) {
      return zJ(dd) ? SJ(dd) : function(dd) {
        if (!rJ(dd)) return LJ(dd);
        var Jd = [];
        for (var kd in Object(dd)) kJ.call(dd, kd) && "constructor" != kd && Jd.push(kd);
        return Jd
      }(dd)
    }
    dd.exports = function(dd) {
      return fJ(dd, !0, !0)
    }
  },
  38597: dd => {
    function Jd(dd, Jd, kd) {
      for (var pd = dd.length, Nd = -1 / 0, Wd = 1 / 0, Pd = 0; Pd < pd; Pd++) {
        var Zd = (kd[0][Pd] - dd[Pd]) / Jd[Pd],
          gd = (kd[1][Pd] - dd[Pd]) / Jd[Pd];
        if (Zd > gd) {
          var Cd = Zd;
          Zd = gd, gd = Cd
        }
        if (gd < Nd || Zd > Wd) return 1 / 0;
        Zd > Nd && (Nd = Zd), gd < Wd && (Wd = gd)
      }
      return Nd > Wd ? 1 / 0 : Nd
    }
    dd.exports = function(dd, kd, pd, Nd) {
      var Wd = Jd(kd, pd, Nd);
      if (Wd === 1 / 0) dd = null;
      else {
        dd = dd || [];
        for (var Pd = 0; Pd < kd.length; Pd++) dd[Pd] = kd[Pd] + pd[Pd] * Wd
      }
      return dd
    }, dd.exports.distance = Jd
  },
  37929: (dd, Jd, kd) => {
    var pd = kd(37932);

    function Nd(dd) {
      for (var Jd, kd, Nd = 0, Wd = dd.length, Pd = 0; Pd < dd.length;) {
        for (Jd = dd[Pd], kd = 0; Pd < Wd && dd[Pd] === Jd;) ++Pd, ++kd;
        Nd += pd.log2(kd) / 7 | 0, Nd += pd.log2(Jd >>> 0) / 7 | 0, Nd += 2
      }
      return Nd
    }
    Jd.size = Nd, Jd.encode = function(dd, Jd) {
      Jd || (Jd = new Uint8Array(Nd(dd)));
      for (var kd, pd, Wd = 0, Pd = Jd.length, Zd = 0; Zd < dd.length;) {
        for (kd = dd[Zd], pd = 0; Zd < dd.length && dd[Zd] === kd;) ++Zd, ++pd;
        for (; Wd < Pd && pd >= 128;) Jd[Wd++] = 128 + (127 & pd), pd >>>= 7;
        if (Wd >= Pd) throw new Error("RLE buffer overflow");
        for (Jd[Wd++] = pd, kd >>>= 0; Wd < Pd && kd >= 128;) Jd[Wd++] = 128 + (127 & kd), kd >>>= 7;
        if (Wd >= Pd) throw new Error("RLE buffer overflow");
        Jd[Wd++] = kd
      }
      return Jd
    }, Jd.decode = function(dd, Jd) {
      for (var kd, pd, Nd, Wd, Pd = Jd.length, Zd = dd.length, gd = 0, Cd = 0; Cd < Zd;) {
        for (kd = 0, pd = 0; Cd < Zd && dd[Cd] >= 128;) kd += (127 & dd[Cd++]) << pd, pd += 7;
        if (kd += dd[Cd++] << pd, Cd >= Zd) throw new Error("RLE buffer underrun");
        if (gd + kd > Pd) throw new Error("Chunk buffer overflow");
        for (Nd = 0, pd = 0; Cd < Zd && dd[Cd] >= 128;) Nd += (127 & dd[Cd++]) << pd, pd += 7;
        if (Cd >= Zd) throw new Error("RLE buffer underrun");
        for (Nd += dd[Cd++] << pd, Wd = 0; Wd < kd; ++Wd) Jd[gd++] = Nd
      }
      return Jd
    }
  },
  37932: (dd, Jd) => {
    function kd(dd) {
      var Jd = 32;
      return (dd &= -dd) && Jd--, 65535 & dd && (Jd -= 16), 16711935 & dd && (Jd -= 8), 252645135 & dd && (Jd -= 4), 858993459 & dd && (Jd -= 2), 1431655765 & dd && (Jd -= 1), Jd
    }
    Jd.INT_BITS = 32, Jd.INT_MAX = 2147483647, Jd.INT_MIN = -1 << 31, Jd.sign = function(dd) {
      return (dd > 0) - (dd < 0)
    }, Jd.abs = function(dd) {
      var Jd = dd >> 31;
      return (dd ^ Jd) - Jd
    }, Jd.min = function(dd, Jd) {
      return Jd ^ (dd ^ Jd) & -(dd < Jd)
    }, Jd.max = function(dd, Jd) {
      return dd ^ (dd ^ Jd) & -(dd < Jd)
    }, Jd.isPow2 = function(dd) {
      return !(dd & dd - 1) && !!dd
    }, Jd.log2 = function(dd) {
      var Jd, kd;
      return Jd = (dd > 65535) << 4, Jd |= kd = ((dd >>>= Jd) > 255) << 3, Jd |= kd = ((dd >>>= kd) > 15) << 2, (Jd |= kd = ((dd >>>= kd) > 3) << 1) | (dd >>>= kd) >> 1
    }, Jd.log10 = function(dd) {
      return dd >= 1e9 ? 9 : dd >= 1e8 ? 8 : dd >= 1e7 ? 7 : dd >= 1e6 ? 6 : dd >= 1e5 ? 5 : dd >= 1e4 ? 4 : dd >= 1e3 ? 3 : dd >= 100 ? 2 : dd >= 10 ? 1 : 0
    }, Jd.popCount = function(dd) {
      return 16843009 * ((dd = (858993459 & (dd -= dd >>> 1 & 1431655765)) + (dd >>> 2 & 858993459)) + (dd >>> 4) & 252645135) >>> 24
    }, Jd.countTrailingZeros = kd, Jd.nextPow2 = function(dd) {
      return dd += 0 === dd, --dd, dd |= dd >>> 1, dd |= dd >>> 2, dd |= dd >>> 4, dd |= dd >>> 8, (dd |= dd >>> 16) + 1
    }, Jd.prevPow2 = function(dd) {
      return dd |= dd >>> 1, dd |= dd >>> 2, dd |= dd >>> 4, dd |= dd >>> 8, (dd |= dd >>> 16) - (dd >>> 1)
    }, Jd.parity = function(dd) {
      return dd ^= dd >>> 16, dd ^= dd >>> 8, dd ^= dd >>> 4, 27030 >>> (dd &= 15) & 1
    };
    var pd = new Array(256);
    ! function(dd) {
      for (var Jd = 0; Jd < 256; ++Jd) {
        var kd = Jd,
          pd = Jd,
          Nd = 7;
        for (kd >>>= 1; kd; kd >>>= 1) pd <<= 1, pd |= 1 & kd, --Nd;
        dd[Jd] = pd << Nd & 255
      }
    }(pd), Jd.reverse = function(dd) {
      return pd[255 & dd] << 24 | pd[dd >>> 8 & 255] << 16 | pd[dd >>> 16 & 255] << 8 | pd[dd >>> 24 & 255]
    }, Jd.interleave2 = function(dd, Jd) {
      return (dd = 1431655765 & ((dd = 858993459 & ((dd = 252645135 & ((dd = 16711935 & ((dd &= 65535) | dd << 8)) | dd << 4)) | dd << 2)) | dd << 1)) | (Jd = 1431655765 & ((Jd = 858993459 & ((Jd = 252645135 & ((Jd = 16711935 & ((Jd &= 65535) | Jd << 8)) | Jd << 4)) | Jd << 2)) | Jd << 1)) << 1
    }, Jd.deinterleave2 = function(dd, Jd) {
      return (dd = 65535 & ((dd = 16711935 & ((dd = 252645135 & ((dd = 858993459 & ((dd = dd >>> Jd & 1431655765) | dd >>> 1)) | dd >>> 2)) | dd >>> 4)) | dd >>> 16)) << 16 >> 16
    }, Jd.interleave3 = function(dd, Jd, kd) {
      return dd = 1227133513 & ((dd = 3272356035 & ((dd = 251719695 & ((dd = 4278190335 & ((dd &= 1023) | dd << 16)) | dd << 8)) | dd << 4)) | dd << 2), (dd |= (Jd = 1227133513 & ((Jd = 3272356035 & ((Jd = 251719695 & ((Jd = 4278190335 & ((Jd &= 1023) | Jd << 16)) | Jd << 8)) | Jd << 4)) | Jd << 2)) << 1) | (kd = 1227133513 & ((kd = 3272356035 & ((kd = 251719695 & ((kd = 4278190335 & ((kd &= 1023) | kd << 16)) | kd << 8)) | kd << 4)) | kd << 2)) << 2
    }, Jd.deinterleave3 = function(dd, Jd) {
      return (dd = 1023 & ((dd = 4278190335 & ((dd = 251719695 & ((dd = 3272356035 & ((dd = dd >>> Jd & 1227133513) | dd >>> 2)) | dd >>> 4)) | dd >>> 8)) | dd >>> 16)) << 22 >> 22
    }, Jd.nextCombination = function(dd) {
      var Jd = dd | dd - 1;
      return Jd + 1 | (~Jd & -~Jd) - 1 >>> kd(dd) + 1
    }
  },
  37438: (dd, Jd, kd) => {
    kd.d(Jd, {
      Color3: () => pd.c,
      c: () => pd.g
    });
    var pd = kd(37443);
    (0, pd.k)()
  },
  37966: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => Nd
    });
    var pd = kd(37969);
    class Nd {
      static GetPlanes(dd) {
        const Jd = [];
        for (let kd = 0; kd < 6; kd++) Jd.push(new pd.c(0, 0, 0, 0));
        return Nd.GetPlanesToRef(dd, Jd), Jd
      }
      static GetNearPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] + kd[2], Jd.normal.y = kd[7] + kd[6], Jd.normal.z = kd[11] + kd[10], Jd.d = kd[15] + kd[14], Jd.normalize()
      }
      static GetFarPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] - kd[2], Jd.normal.y = kd[7] - kd[6], Jd.normal.z = kd[11] - kd[10], Jd.d = kd[15] - kd[14], Jd.normalize()
      }
      static GetLeftPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] + kd[0], Jd.normal.y = kd[7] + kd[4], Jd.normal.z = kd[11] + kd[8], Jd.d = kd[15] + kd[12], Jd.normalize()
      }
      static GetRightPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] - kd[0], Jd.normal.y = kd[7] - kd[4], Jd.normal.z = kd[11] - kd[8], Jd.d = kd[15] - kd[12], Jd.normalize()
      }
      static GetTopPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] - kd[1], Jd.normal.y = kd[7] - kd[5], Jd.normal.z = kd[11] - kd[9], Jd.d = kd[15] - kd[13], Jd.normalize()
      }
      static GetBottomPlaneToRef(dd, Jd) {
        const kd = dd.m;
        Jd.normal.x = kd[3] + kd[1], Jd.normal.y = kd[7] + kd[5], Jd.normal.z = kd[11] + kd[9], Jd.d = kd[15] + kd[13], Jd.normalize()
      }
      static GetPlanesToRef(dd, Jd) {
        Nd.GetNearPlaneToRef(dd, Jd[0]), Nd.GetFarPlaneToRef(dd, Jd[1]), Nd.GetLeftPlaneToRef(dd, Jd[2]), Nd.GetRightPlaneToRef(dd, Jd[3]), Nd.GetTopPlaneToRef(dd, Jd[4]), Nd.GetBottomPlaneToRef(dd, Jd[5])
      }
      static IsPointInFrustum(dd, Jd) {
        for (let kd = 0; kd < 6; kd++)
          if (Jd[kd].dotCoordinate(dd) < 0) return !1;
        return !0
      }
    }
  },
  37969: (dd, Jd, kd) => {
    kd.d(Jd, {
      c: () => Nd
    });
    var pd = kd(37251);
    class Nd {
      constructor(dd, Jd, kd, Nd) {
        this.normal = new pd.n(dd, Jd, kd), this.d = Nd
      }
      spd() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Nd(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let dd = this.normal.getHashCode();
        return dd = 397 * dd ^ this.d, dd
      }
      normalize() {
        const dd = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Jd = 0;
        return 0 !== dd && (Jd = 1 / dd), this.normal.x *= Jd, this.normal.y *= Jd, this.normal.z *= Jd, this.d *= Jd, this
      }
      transform(dd) {
        const Jd = Nd._TmpMatrix;
        dd.invertToRef(Jd);
        const kd = Jd.m,
          pd = this.normal.x,
          Wd = this.normal.y,
          Pd = this.normal.z,
          Zd = this.d,
          gd = pd * kd[0] + Wd * kd[1] + Pd * kd[2] + Zd * kd[3],
          Cd = pd * kd[4] + Wd * kd[5] + Pd * kd[6] + Zd * kd[7],
          Kd = pd * kd[8] + Wd * kd[9] + Pd * kd[10] + Zd * kd[11],
          od = pd * kd[12] + Wd * kd[13] + Pd * kd[14] + Zd * kd[15];
        return new Nd(gd, Cd, Kd, od)
      }
      dotCoordinate(dd) {
        return this.normal.x * dd.x + this.normal.y * dd.y + this.normal.z * dd.z + this.d
      }
      copyFromPoints(dd, Jd, kd) {
        const pd = Jd.x - dd.x,
          Nd = Jd.y - dd.y,
          Wd = Jd.z - dd.z,
          Pd = kd.x - dd.x,
          Zd = kd.y - dd.y,
          gd = kd.z - dd.z,
          Cd = Nd * gd - Wd * Zd,
          Kd = Wd * Pd - pd * gd,
          od = pd * Zd - Nd * Pd,
          ld = Math.sqrt(Cd * Cd + Kd * Kd + od * od);
        let Qd;
        return Qd = 0 !== ld ? 1 / ld : 0, this.normal.x = Cd * Qd, this.normal.y = Kd * Qd, this.normal.z = od * Qd, this.d = -(this.normal.x * dd.x + this.normal.y * dd.y + this.normal.z * dd.z), this
      }
      isFrontFacingTo(dd, Jd) {
        return pd.n.Dot(this.normal, dd) <= Jd
      }
      signedDistanceTo(dd) {
        return pd.n.Dot(dd, this.normal) + this.d
      }
      static FromArray(dd) {
        return new Nd(dd[0], dd[1], dd[2], dd[3])
      }
      static FromPoints(dd, Jd, kd) {
        const pd = new Nd(0, 0, 0, 0);
        return pd.copyFromPoints(dd, Jd, kd), pd
      }
      static FromPositionAndNormal(dd, Jd) {
        const kd = new Nd(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(dd, Jd, kd)
      }
      static FromPositionAndNormalToRef(dd, Jd, kd) {
        return kd.normal.Fs(Jd), kd.normal.normalize(), kd.d = -dd.dot(kd.normal), kd
      }
      static SignedDistanceToPlaneFromPositionAndNormal(dd, Jd, kd) {
        const Nd = -(Jd.x * dd.x + Jd.y * dd.y + Jd.z * dd.z);
        return pd.n.Dot(kd, Jd) + Nd
      }
    }
    Nd._TmpMatrix = pd.b.Identity()
  },
  37245: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      Matrix: () => pd.b,
      Quaternion: () => pd.d,
      RegisterMathVector: () => pd.f,
      TmpVectors: () => pd.h,
      Vector2: () => pd.k,
      IL: () => pd.n,
      Vector4: () => pd.o
    });
    var pd = kd(37251);
    (0, pd.f)()
  },
  38281: (dd, Jd, kd) => {
    kd.d(Jd, {
      b: () => pd
    });
    class pd {
      constructor(dd, Jd, kd, pd) {
        this.x = dd, this.y = Jd, this.width = kd, this.height = pd
      }
      toGlobal(dd, Jd) {
        return new pd(this.x * dd, this.y * Jd, this.width * dd, this.height * Jd)
      }
      toGlobalToRef(dd, Jd, kd) {
        return kd.x = this.x * dd, kd.y = this.y * Jd, kd.width = this.width * dd, kd.height = this.height * Jd, this
      }
      clone() {
        return new pd(this.x, this.y, this.width, this.height)
      }
    }
  },
  38105: (dd, Jd, kd) => {
    function pd() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (dd => {
        const Jd = 16 * Math.random() | 0;
        return ("x" === dd ? Jd : 3 & Jd | 8).toString(16)
      }))
    }
    kd.d(Jd, {
      c: () => pd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);