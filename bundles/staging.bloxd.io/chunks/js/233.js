/*! For license information please see igzsf.233.88f71f3b.chunk.js.LICENSE.txt */
export const id = 233;
export const ids = [233, 241];
export const modules = {
  38537: tt => {
    tt.exports = function(tt) {
      return null != tt && null != tt.constructor && "function" === typeof tt.constructor.isBuffer && tt.constructor.isBuffer(tt)
    }
  },
  38520: (tt, et, Vt) => {
    var Ot = Vt(38523),
      qt = Vt(38530),
      Dt = Vt(38537);
    Vt.g.__TYPEDARRAY_POOL || (Vt.g.__TYPEDARRAY_POOL = {
      UINT8: qt([32, 0]),
      UINT16: qt([32, 0]),
      UINT32: qt([32, 0]),
      INT8: qt([32, 0]),
      INT16: qt([32, 0]),
      INT32: qt([32, 0]),
      FLOAT: qt([32, 0]),
      DOUBLE: qt([32, 0]),
      DATA: qt([32, 0]),
      UINT8C: qt([32, 0]),
      BUFFER: qt([32, 0])
    });
    var mt = "undefined" !== typeof Uint8ClampedArray,
      dt = Vt.g.__TYPEDARRAY_POOL;
    dt.UINT8C || (dt.UINT8C = qt([32, 0])), dt.BUFFER || (dt.BUFFER = qt([32, 0]));
    var jt = dt.DATA,
      Ht = dt.BUFFER;

    function Xt(tt) {
      if (tt) {
        var et = tt.length || tt.byteLength,
          Vt = Ot.log2(et);
        jt[Vt].push(tt)
      }
    }

    function Qt(tt) {
      tt = Ot.nextPow2(tt);
      var et = Ot.log2(tt),
        Vt = jt[et];
      return Vt.length > 0 ? Vt.pop() : new ArrayBuffer(tt)
    }

    function lt(tt) {
      return new Uint8Array(Qt(tt), 0, tt)
    }

    function Et(tt) {
      return new Uint16Array(Qt(2 * tt), 0, tt)
    }

    function ft(tt) {
      return new Uint32Array(Qt(4 * tt), 0, tt)
    }

    function wt(tt) {
      return new Int8Array(Qt(tt), 0, tt)
    }

    function yt(tt) {
      return new Int16Array(Qt(2 * tt), 0, tt)
    }

    function Nt(tt) {
      return new Int32Array(Qt(4 * tt), 0, tt)
    }

    function Mt(tt) {
      return new Float32Array(Qt(4 * tt), 0, tt)
    }

    function bt(tt) {
      return new Float64Array(Qt(8 * tt), 0, tt)
    }

    function Jt(tt) {
      return mt ? new Uint8ClampedArray(Qt(tt), 0, tt) : lt(tt)
    }

    function Ct(tt) {
      return new DataView(Qt(tt), 0, tt)
    }
    et.free = function(tt) {
      if (Dt(tt)) Ht[Ot.log2(tt.length)].push(tt);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(tt) && (tt = tt.buffer), !tt) return;
        var et = tt.length || tt.byteLength,
          Vt = 0 | Ot.log2(et);
        jt[Vt].push(tt)
      }
    }, et.freeUint8 = et.freeUint16 = et.freeUint32 = et.freeInt8 = et.freeInt16 = et.freeInt32 = et.freeFloat32 = et.freeFloat = et.freeFloat64 = et.freeDouble = et.freeUint8Clamped = et.freeDataView = function(tt) {
      Xt(tt.buffer)
    }, et.freeArrayBuffer = Xt, et.freeBuffer = function(tt) {
      Ht[Ot.log2(tt.length)].push(tt)
    }, et.malloc = function(tt, et) {
      if (void 0 === et || "arraybuffer" === et) return Qt(tt);
      switch (et) {
        case "uint8":
          return lt(tt);
        case "uint16":
          return Et(tt);
        case "uint32":
          return ft(tt);
        case "int8":
          return wt(tt);
        case "int16":
          return yt(tt);
        case "int32":
          return Nt(tt);
        case "float":
        case "float32":
          return Mt(tt);
        case "double":
        case "float64":
          return bt(tt);
        case "uint8_clamped":
          return Jt(tt);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return Ct(tt);
        default:
          return null
      }
      return null
    }, et.mallocArrayBuffer = Qt, et.mallocUint8 = lt, et.mallocUint16 = Et, et.mallocUint32 = ft, et.mallocInt8 = wt, et.mallocInt16 = yt, et.mallocInt32 = Nt, et.mallocFloat32 = et.mallocFloat = Mt, et.mallocFloat64 = et.mallocDouble = bt, et.mallocUint8Clamped = Jt, et.mallocDataView = Ct, et.clearCache = function() {
      for (var tt = 0; tt < 32; ++tt) dt.UINT8[tt].length = 0, dt.UINT16[tt].length = 0, dt.UINT32[tt].length = 0, dt.INT8[tt].length = 0, dt.INT16[tt].length = 0, dt.INT32[tt].length = 0, dt.FLOAT[tt].length = 0, dt.DOUBLE[tt].length = 0, dt.UINT8C[tt].length = 0, jt[tt].length = 0, Ht[tt].length = 0
    }
  },
  38523: (tt, et) => {
    function Vt(tt) {
      var et = 32;
      return (tt &= -tt) && et--, 65535 & tt && (et -= 16), 16711935 & tt && (et -= 8), 252645135 & tt && (et -= 4), 858993459 & tt && (et -= 2), 1431655765 & tt && (et -= 1), et
    }
    et.INT_BITS = 32, et.INT_MAX = 2147483647, et.INT_MIN = -1 << 31, et.sign = function(tt) {
      return (tt > 0) - (tt < 0)
    }, et.abs = function(tt) {
      var et = tt >> 31;
      return (tt ^ et) - et
    }, et.min = function(tt, et) {
      return et ^ (tt ^ et) & -(tt < et)
    }, et.max = function(tt, et) {
      return tt ^ (tt ^ et) & -(tt < et)
    }, et.isPow2 = function(tt) {
      return !(tt & tt - 1) && !!tt
    }, et.log2 = function(tt) {
      var et, Vt;
      return et = (tt > 65535) << 4, et |= Vt = ((tt >>>= et) > 255) << 3, et |= Vt = ((tt >>>= Vt) > 15) << 2, (et |= Vt = ((tt >>>= Vt) > 3) << 1) | (tt >>>= Vt) >> 1
    }, et.log10 = function(tt) {
      return tt >= 1e9 ? 9 : tt >= 1e8 ? 8 : tt >= 1e7 ? 7 : tt >= 1e6 ? 6 : tt >= 1e5 ? 5 : tt >= 1e4 ? 4 : tt >= 1e3 ? 3 : tt >= 100 ? 2 : tt >= 10 ? 1 : 0
    }, et.popCount = function(tt) {
      return 16843009 * ((tt = (858993459 & (tt -= tt >>> 1 & 1431655765)) + (tt >>> 2 & 858993459)) + (tt >>> 4) & 252645135) >>> 24
    }, et.countTrailingZeros = Vt, et.nextPow2 = function(tt) {
      return tt += 0 === tt, --tt, tt |= tt >>> 1, tt |= tt >>> 2, tt |= tt >>> 4, tt |= tt >>> 8, (tt |= tt >>> 16) + 1
    }, et.prevPow2 = function(tt) {
      return tt |= tt >>> 1, tt |= tt >>> 2, tt |= tt >>> 4, tt |= tt >>> 8, (tt |= tt >>> 16) - (tt >>> 1)
    }, et.parity = function(tt) {
      return tt ^= tt >>> 16, tt ^= tt >>> 8, tt ^= tt >>> 4, 27030 >>> (tt &= 15) & 1
    };
    var Ot = new Array(256);
    ! function(tt) {
      for (var et = 0; et < 256; ++et) {
        var Vt = et,
          Ot = et,
          qt = 7;
        for (Vt >>>= 1; Vt; Vt >>>= 1) Ot <<= 1, Ot |= 1 & Vt, --qt;
        tt[et] = Ot << qt & 255
      }
    }(Ot), et.reverse = function(tt) {
      return Ot[255 & tt] << 24 | Ot[tt >>> 8 & 255] << 16 | Ot[tt >>> 16 & 255] << 8 | Ot[tt >>> 24 & 255]
    }, et.interleave2 = function(tt, et) {
      return (tt = 1431655765 & ((tt = 858993459 & ((tt = 252645135 & ((tt = 16711935 & ((tt &= 65535) | tt << 8)) | tt << 4)) | tt << 2)) | tt << 1)) | (et = 1431655765 & ((et = 858993459 & ((et = 252645135 & ((et = 16711935 & ((et &= 65535) | et << 8)) | et << 4)) | et << 2)) | et << 1)) << 1
    }, et.deinterleave2 = function(tt, et) {
      return (tt = 65535 & ((tt = 16711935 & ((tt = 252645135 & ((tt = 858993459 & ((tt = tt >>> et & 1431655765) | tt >>> 1)) | tt >>> 2)) | tt >>> 4)) | tt >>> 16)) << 16 >> 16
    }, et.interleave3 = function(tt, et, Vt) {
      return tt = 1227133513 & ((tt = 3272356035 & ((tt = 251719695 & ((tt = 4278190335 & ((tt &= 1023) | tt << 16)) | tt << 8)) | tt << 4)) | tt << 2), (tt |= (et = 1227133513 & ((et = 3272356035 & ((et = 251719695 & ((et = 4278190335 & ((et &= 1023) | et << 16)) | et << 8)) | et << 4)) | et << 2)) << 1) | (Vt = 1227133513 & ((Vt = 3272356035 & ((Vt = 251719695 & ((Vt = 4278190335 & ((Vt &= 1023) | Vt << 16)) | Vt << 8)) | Vt << 4)) | Vt << 2)) << 2
    }, et.deinterleave3 = function(tt, et) {
      return (tt = 1023 & ((tt = 4278190335 & ((tt = 251719695 & ((tt = 3272356035 & ((tt = tt >>> et & 1227133513) | tt >>> 2)) | tt >>> 4)) | tt >>> 8)) | tt >>> 16)) << 22 >> 22
    }, et.nextCombination = function(tt) {
      var et = tt | tt - 1;
      return et + 1 | (~et & -~et) - 1 >>> Vt(tt) + 1
    }
  },
  38516: (tt, et, Vt) => {
    tt.exports = function(tt, et, Vt) {
      switch (arguments.length) {
        case 1:
          return Ot = [], Ht(qt = tt, qt, Xt, !0), Ot;
        case 2:
          return "function" === typeof et ? Ht(tt, tt, et, !0) : function(tt, et) {
            return Ot = [], Ht(tt, et, Xt, !1), Ot
          }(tt, et);
        case 3:
          return Ht(tt, et, Vt, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var qt
    };
    var Ot, qt = Vt(38520),
      Dt = Vt(38546),
      mt = Vt(38553);

    function dt(tt, et) {
      for (var Vt = 0; Vt < tt; ++Vt)
        if (!(et[Vt] <= et[Vt + tt])) return !0;
      return !1
    }

    function jt(tt, et, Vt, Ot) {
      for (var qt = 0, Dt = 0, mt = 0, jt = tt.length; mt < jt; ++mt) {
        var Ht = tt[mt];
        if (!dt(et, Ht)) {
          for (var Xt = 0; Xt < 2 * et; ++Xt) Vt[qt++] = Ht[Xt];
          Ot[Dt++] = mt
        }
      }
      return Dt
    }

    function Ht(tt, et, Vt, Ot) {
      var dt = tt.length,
        Ht = et.length;
      if (!(dt <= 0 || Ht <= 0)) {
        var Xt = tt[0].length >>> 1;
        if (!(Xt <= 0)) {
          var Qt, lt = qt.mallocDouble(2 * Xt * dt),
            Et = qt.mallocInt32(dt);
          if ((dt = jt(tt, Xt, lt, Et)) > 0) {
            if (1 === Xt && Ot) Dt.init(dt), Qt = Dt.sweepComplete(Xt, Vt, 0, dt, lt, Et, 0, dt, lt, Et);
            else {
              var ft = qt.mallocDouble(2 * Xt * Ht),
                wt = qt.mallocInt32(Ht);
              (Ht = jt(et, Xt, ft, wt)) > 0 && (Dt.init(dt + Ht), Qt = 1 === Xt ? Dt.sweepBipartite(Xt, Vt, 0, dt, lt, Et, 0, Ht, ft, wt) : mt(Xt, Vt, Ot, dt, lt, Et, Ht, ft, wt), qt.free(ft), qt.free(wt))
            }
            qt.free(lt), qt.free(Et)
          }
          return Qt
        }
      }
    }

    function Xt(tt, et) {
      Ot.push([tt, et])
    }
  },
  38555: (tt, et) => {
    var Vt = "d",
      Ot = "ax",
      qt = "fp",
      Dt = "es",
      mt = "rs",
      dt = "re",
      jt = "rb",
      Ht = "bs",
      Xt = "be",
      Qt = "bb",
      lt = [Vt, Ot, "vv", mt, dt, jt, "ri", Ht, Xt, Qt, "bi"];

    function Et(tt) {
      var et = "bruteForce" + (tt ? "Full" : "Partial"),
        Ot = [],
        mt = lt.slice();
      tt || mt.splice(3, 0, qt);
      var dt = ["function " + et + "(" + mt.join() + "){"];

      function jt(et, qt) {
        var mt = function(tt, et, Ot) {
          var qt = "bruteForce" + (tt ? "Red" : "Blue") + (et ? "Flip" : "") + (Ot ? "Full" : ""),
            mt = ["function ", qt, "(", lt.join(), "){", "var ", Dt, "=2*", Vt, ";"],
            dt = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            jt = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (Ot ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return tt ? mt.push(dt, "Q", ":", jt) : mt.push(jt, "Q", ":", dt), Ot ? mt.push("if(y1<x0||x1<y0)continue;") : et ? mt.push("if(y0<=x0||x1<y0)continue;") : mt.push("if(y0<x0||x1<y0)continue;"), mt.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), et ? mt.push("yi,xi") : mt.push("xi,yi"), mt.push(");if(rv!==void 0)return rv;}}}"), {
            name: qt,
            code: mt.join("")
          }
        }(et, qt, tt);
        Ot.push(mt.code), dt.push("return " + mt.name + "(" + lt.join() + ");")
      }
      dt.push("if(re-rs>be-bs){"), tt ? (jt(!0, !1), dt.push("}else{"), jt(!1, !1)) : (dt.push("if(fp){"), jt(!0, !0), dt.push("}else{"), jt(!0, !1), dt.push("}}else{if(fp){"), jt(!1, !0), dt.push("}else{"), jt(!1, !1), dt.push("}")), dt.push("}}return " + et);
      var Ht = Ot.join("") + dt.join("");
      return new Function(Ht)()
    }
    et.partial = Et(!1), et.full = Et(!0)
  },
  38553: (tt, et, Vt) => {
    tt.exports = function(tt, et, Vt, Dt, Xt, St, ct, Rt, It) {
      ! function(tt, et) {
        var Vt = 8 * qt.log2(et + 1) * (tt + 1) | 0,
          Dt = qt.nextPow2(Jt * Vt);
        ut.length < Dt && (Ot.free(ut), ut = Ot.mallocInt32(Dt));
        var mt = qt.nextPow2(Ct * Vt);
        Kt.length < mt && (Ot.free(Kt), Kt = Ot.mallocDouble(mt))
      }(tt, Dt + ct);
      var Pt, Zt = 0,
        Lt = 2 * tt;
      ht(Zt++, 0, 0, Dt, 0, ct, Vt ? 16 : 0, -1 / 0, 1 / 0), Vt || ht(Zt++, 0, 0, ct, 0, Dt, 1, -1 / 0, 1 / 0);
      for (; Zt > 0;) {
        var Ft = (Zt -= 1) * Jt,
          kt = ut[Ft],
          Gt = ut[Ft + 1],
          zt = ut[Ft + 2],
          ot = ut[Ft + 3],
          rt = ut[Ft + 4],
          Ut = ut[Ft + 5],
          At = Zt * Ct,
          it = Kt[At],
          Yt = Kt[At + 1],
          Bt = 1 & Ut,
          pt = !!(16 & Ut),
          xt = Xt,
          Tt = St,
          gt = Rt,
          st = It;
        if (Bt && (xt = Rt, Tt = It, gt = Xt, st = St), !(2 & Ut && Gt >= (zt = yt(tt, kt, Gt, zt, xt, Tt, Yt))) && !(4 & Ut && (Gt = Nt(tt, kt, Gt, zt, xt, Tt, it)) >= zt)) {
          var nt = zt - Gt,
            te = rt - ot;
          if (pt) {
            if (tt * nt * (nt + te) < Et) {
              if (void 0 !== (Pt = jt.scanComplete(tt, kt, et, Gt, zt, xt, Tt, ot, rt, gt, st))) return Pt;
              continue
            }
          } else {
            if (tt * Math.min(nt, te) < Qt) {
              if (void 0 !== (Pt = mt(tt, kt, et, Bt, Gt, zt, xt, Tt, ot, rt, gt, st))) return Pt;
              continue
            }
            if (tt * nt * te < lt) {
              if (void 0 !== (Pt = jt.scanBipartite(tt, kt, et, Bt, Gt, zt, xt, Tt, ot, rt, gt, st))) return Pt;
              continue
            }
          }
          var ee = ft(tt, kt, Gt, zt, xt, Tt, it, Yt);
          if (Gt < ee)
            if (tt * (ee - Gt) < Qt) {
              if (void 0 !== (Pt = dt(tt, kt + 1, et, Gt, ee, xt, Tt, ot, rt, gt, st))) return Pt
            } else if (kt === tt - 2) {
            if (void 0 !== (Pt = Bt ? jt.sweepBipartite(tt, et, ot, rt, gt, st, Gt, ee, xt, Tt) : jt.sweepBipartite(tt, et, Gt, ee, xt, Tt, ot, rt, gt, st))) return Pt
          } else ht(Zt++, kt + 1, Gt, ee, ot, rt, Bt, -1 / 0, 1 / 0), ht(Zt++, kt + 1, ot, rt, Gt, ee, 1 ^ Bt, -1 / 0, 1 / 0);
          if (ee < zt) {
            var Ve = Ht(tt, kt, ot, rt, gt, st),
              Oe = gt[Lt * Ve + kt],
              qe = wt(tt, kt, Ve, rt, gt, st, Oe);
            if (qe < rt && ht(Zt++, kt, ee, zt, qe, rt, (4 | Bt) + (pt ? 16 : 0), Oe, Yt), ot < Ve && ht(Zt++, kt, ee, zt, ot, Ve, (2 | Bt) + (pt ? 16 : 0), it, Oe), Ve + 1 === qe) {
              if (void 0 !== (Pt = pt ? Wt(tt, kt, et, ee, zt, xt, Tt, Ve, gt, st[Ve]) : vt(tt, kt, et, Bt, ee, zt, xt, Tt, Ve, gt, st[Ve]))) return Pt
            } else if (Ve < qe) {
              var De;
              if (pt) {
                if (ee < (De = Mt(tt, kt, ee, zt, xt, Tt, Oe))) {
                  var me = wt(tt, kt, ee, De, xt, Tt, Oe);
                  if (kt === tt - 2) {
                    if (ee < me && void 0 !== (Pt = jt.sweepComplete(tt, et, ee, me, xt, Tt, Ve, qe, gt, st))) return Pt;
                    if (me < De && void 0 !== (Pt = jt.sweepBipartite(tt, et, me, De, xt, Tt, Ve, qe, gt, st))) return Pt
                  } else ee < me && ht(Zt++, kt + 1, ee, me, Ve, qe, 16, -1 / 0, 1 / 0), me < De && (ht(Zt++, kt + 1, me, De, Ve, qe, 0, -1 / 0, 1 / 0), ht(Zt++, kt + 1, Ve, qe, me, De, 1, -1 / 0, 1 / 0))
                }
              } else ee < (De = Bt ? bt(tt, kt, ee, zt, xt, Tt, Oe) : Mt(tt, kt, ee, zt, xt, Tt, Oe)) && (kt === tt - 2 ? Pt = Bt ? jt.sweepBipartite(tt, et, Ve, qe, gt, st, ee, De, xt, Tt) : jt.sweepBipartite(tt, et, ee, De, xt, Tt, Ve, qe, gt, st) : (ht(Zt++, kt + 1, ee, De, Ve, qe, Bt, -1 / 0, 1 / 0), ht(Zt++, kt + 1, Ve, qe, ee, De, 1 ^ Bt, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var Ot = Vt(38520),
      qt = Vt(38523),
      Dt = Vt(38555),
      mt = Dt.partial,
      dt = Dt.full,
      jt = Vt(38546),
      Ht = Vt(38557),
      Xt = Vt(38566),
      Qt = 128,
      lt = 1 << 22,
      Et = 1 << 22,
      ft = Xt("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      wt = Xt("lo===p0", ["p0"]),
      yt = Xt("lo<p0", ["p0"]),
      Nt = Xt("hi<=p0", ["p0"]),
      Mt = Xt("lo<=p0&&p0<=hi", ["p0"]),
      bt = Xt("lo<p0&&p0<=hi", ["p0"]),
      Jt = 6,
      Ct = 2,
      ut = Ot.mallocInt32(1024),
      Kt = Ot.mallocDouble(1024);

    function ht(tt, et, Vt, Ot, qt, Dt, mt, dt, jt) {
      var Ht = Jt * tt;
      ut[Ht] = et, ut[Ht + 1] = Vt, ut[Ht + 2] = Ot, ut[Ht + 3] = qt, ut[Ht + 4] = Dt, ut[Ht + 5] = mt;
      var Xt = Ct * tt;
      Kt[Xt] = dt, Kt[Xt + 1] = jt
    }

    function vt(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht, Xt) {
      var Qt = 2 * tt,
        lt = jt * Qt,
        Et = Ht[lt + et];
      tt: for (var ft = qt, wt = qt * Qt; ft < Dt; ++ft, wt += Qt) {
        var yt = mt[wt + et],
          Nt = mt[wt + et + tt];
        if (!(Et < yt || Nt < Et) && (!Ot || Et !== yt)) {
          for (var Mt, bt = dt[ft], Jt = et + 1; Jt < tt; ++Jt) {
            yt = mt[wt + Jt], Nt = mt[wt + Jt + tt];
            var Ct = Ht[lt + Jt],
              ut = Ht[lt + Jt + tt];
            if (Nt < Ct || ut < yt) continue tt
          }
          if (void 0 !== (Mt = Ot ? Vt(Xt, bt) : Vt(bt, Xt))) return Mt
        }
      }
    }

    function Wt(tt, et, Vt, Ot, qt, Dt, mt, dt, jt, Ht) {
      var Xt = 2 * tt,
        Qt = dt * Xt,
        lt = jt[Qt + et];
      tt: for (var Et = Ot, ft = Ot * Xt; Et < qt; ++Et, ft += Xt) {
        var wt = mt[Et];
        if (wt !== Ht) {
          var yt = Dt[ft + et],
            Nt = Dt[ft + et + tt];
          if (!(lt < yt || Nt < lt)) {
            for (var Mt = et + 1; Mt < tt; ++Mt) {
              yt = Dt[ft + Mt], Nt = Dt[ft + Mt + tt];
              var bt = jt[Qt + Mt],
                Jt = jt[Qt + Mt + tt];
              if (Nt < bt || Jt < yt) continue tt
            }
            var Ct = Vt(wt, Ht);
            if (void 0 !== Ct) return Ct
          }
        }
      }
    }
  },
  38557: (tt, et, Vt) => {
    tt.exports = function(tt, et, Vt, mt, dt, jt) {
      if (mt <= Vt + 1) return Vt;
      var Ht = Vt,
        Xt = mt,
        Qt = mt + Vt >>> 1,
        lt = 2 * tt,
        Et = Qt,
        ft = dt[lt * Qt + et];
      for (; Ht < Xt;) {
        if (Xt - Ht < qt) {
          Dt(tt, et, Ht, Xt, dt, jt), ft = dt[lt * Qt + et];
          break
        }
        var wt = Xt - Ht,
          yt = Math.random() * wt + Ht | 0,
          Nt = dt[lt * yt + et],
          Mt = Math.random() * wt + Ht | 0,
          bt = dt[lt * Mt + et],
          Jt = Math.random() * wt + Ht | 0,
          Ct = dt[lt * Jt + et];
        Nt <= bt ? Ct >= bt ? (Et = Mt, ft = bt) : Nt >= Ct ? (Et = yt, ft = Nt) : (Et = Jt, ft = Ct) : bt >= Ct ? (Et = Mt, ft = bt) : Ct >= Nt ? (Et = yt, ft = Nt) : (Et = Jt, ft = Ct);
        for (var ut = lt * (Xt - 1), Kt = lt * Et, ht = 0; ht < lt; ++ht, ++ut, ++Kt) {
          var vt = dt[ut];
          dt[ut] = dt[Kt], dt[Kt] = vt
        }
        var Wt = jt[Xt - 1];
        jt[Xt - 1] = jt[Et], jt[Et] = Wt;
        for (ut = lt * (Xt - 1), Kt = lt * (Et = Ot(tt, et, Ht, Xt - 1, dt, jt, ft)), ht = 0; ht < lt; ++ht, ++ut, ++Kt) {
          vt = dt[ut];
          dt[ut] = dt[Kt], dt[Kt] = vt
        }
        Wt = jt[Xt - 1];
        if (jt[Xt - 1] = jt[Et], jt[Et] = Wt, Qt < Et) {
          for (Xt = Et - 1; Ht < Xt && dt[lt * (Xt - 1) + et] === ft;) Xt -= 1;
          Xt += 1
        } else {
          if (!(Et < Qt)) break;
          for (Ht = Et + 1; Ht < Xt && dt[lt * Ht + et] === ft;) Ht += 1
        }
      }
      return Ot(tt, et, Vt, Qt, dt, jt, dt[lt * Qt + et])
    };
    var Ot = Vt(38566)("lo<p0", ["p0"]),
      qt = 8;

    function Dt(tt, et, Vt, Ot, qt, Dt) {
      for (var mt = 2 * tt, dt = mt * (Vt + 1) + et, jt = Vt + 1; jt < Ot; ++jt, dt += mt)
        for (var Ht = qt[dt], Xt = jt, Qt = mt * (jt - 1); Xt > Vt && qt[Qt + et] > Ht; --Xt, Qt -= mt) {
          for (var lt = Qt, Et = Qt + mt, ft = 0; ft < mt; ++ft, ++lt, ++Et) {
            var wt = qt[lt];
            qt[lt] = qt[Et], qt[Et] = wt
          }
          var yt = Dt[Xt];
          Dt[Xt] = Dt[Xt - 1], Dt[Xt - 1] = yt
        }
    }
  },
  38566: tt => {
    tt.exports = function(tt, Vt) {
      var Ot = "abcdef".split("").concat(Vt),
        qt = [];
      tt.indexOf("lo") >= 0 && qt.push("lo=e[k+n]");
      tt.indexOf("hi") >= 0 && qt.push("hi=e[k+o]");
      return Ot.push(et.replace("_", qt.join()).replace("$", tt)), Function.apply(void 0, Ot)
    };
    var et = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  38550: tt => {
    tt.exports = function(tt, Ot) {
      Ot <= 4 * et ? Vt(0, Ot - 1, tt) : Ht(0, Ot - 1, tt)
    };
    var et = 32;

    function Vt(tt, et, Vt) {
      for (var Ot = 2 * (tt + 1), qt = tt + 1; qt <= et; ++qt) {
        for (var Dt = Vt[Ot++], mt = Vt[Ot++], dt = qt, jt = Ot - 2; dt-- > tt;) {
          var Ht = Vt[jt - 2],
            Xt = Vt[jt - 1];
          if (Ht < Dt) break;
          if (Ht === Dt && Xt < mt) break;
          Vt[jt] = Ht, Vt[jt + 1] = Xt, jt -= 2
        }
        Vt[jt] = Dt, Vt[jt + 1] = mt
      }
    }

    function Ot(tt, et, Vt) {
      et *= 2;
      var Ot = Vt[tt *= 2],
        qt = Vt[tt + 1];
      Vt[tt] = Vt[et], Vt[tt + 1] = Vt[et + 1], Vt[et] = Ot, Vt[et + 1] = qt
    }

    function qt(tt, et, Vt) {
      et *= 2, Vt[tt *= 2] = Vt[et], Vt[tt + 1] = Vt[et + 1]
    }

    function Dt(tt, et, Vt, Ot) {
      et *= 2, Vt *= 2;
      var qt = Ot[tt *= 2],
        Dt = Ot[tt + 1];
      Ot[tt] = Ot[et], Ot[tt + 1] = Ot[et + 1], Ot[et] = Ot[Vt], Ot[et + 1] = Ot[Vt + 1], Ot[Vt] = qt, Ot[Vt + 1] = Dt
    }

    function mt(tt, et, Vt, Ot, qt) {
      et *= 2, qt[tt *= 2] = qt[et], qt[et] = Vt, qt[tt + 1] = qt[et + 1], qt[et + 1] = Ot
    }

    function dt(tt, et, Vt) {
      et *= 2;
      var Ot = Vt[tt *= 2],
        qt = Vt[et];
      return !(Ot < qt) && (Ot !== qt || Vt[tt + 1] > Vt[et + 1])
    }

    function jt(tt, et, Vt, Ot) {
      var qt = Ot[tt *= 2];
      return qt < et || qt === et && Ot[tt + 1] < Vt
    }

    function Ht(tt, Xt, Qt) {
      var lt = (Xt - tt + 1) / 6 | 0,
        Et = tt + lt,
        ft = Xt - lt,
        wt = tt + Xt >> 1,
        yt = wt - lt,
        Nt = wt + lt,
        Mt = Et,
        bt = yt,
        Jt = wt,
        Ct = Nt,
        ut = ft,
        Kt = tt + 1,
        ht = Xt - 1,
        vt = 0;
      dt(Mt, bt, Qt) && (vt = Mt, Mt = bt, bt = vt), dt(Ct, ut, Qt) && (vt = Ct, Ct = ut, ut = vt), dt(Mt, Jt, Qt) && (vt = Mt, Mt = Jt, Jt = vt), dt(bt, Jt, Qt) && (vt = bt, bt = Jt, Jt = vt), dt(Mt, Ct, Qt) && (vt = Mt, Mt = Ct, Ct = vt), dt(Jt, Ct, Qt) && (vt = Jt, Jt = Ct, Ct = vt), dt(bt, ut, Qt) && (vt = bt, bt = ut, ut = vt), dt(bt, Jt, Qt) && (vt = bt, bt = Jt, Jt = vt), dt(Ct, ut, Qt) && (vt = Ct, Ct = ut, ut = vt);
      for (var Wt = Qt[2 * bt], St = Qt[2 * bt + 1], ct = Qt[2 * Ct], Rt = Qt[2 * Ct + 1], It = 2 * Mt, Pt = 2 * Jt, Zt = 2 * ut, Lt = 2 * Et, Ft = 2 * wt, kt = 2 * ft, Gt = 0; Gt < 2; ++Gt) {
        var zt = Qt[It + Gt],
          ot = Qt[Pt + Gt],
          rt = Qt[Zt + Gt];
        Qt[Lt + Gt] = zt, Qt[Ft + Gt] = ot, Qt[kt + Gt] = rt
      }
      qt(yt, tt, Qt), qt(Nt, Xt, Qt);
      for (var Ut = Kt; Ut <= ht; ++Ut)
        if (jt(Ut, Wt, St, Qt)) Ut !== Kt && Ot(Ut, Kt, Qt), ++Kt;
        else if (!jt(Ut, ct, Rt, Qt))
        for (;;) {
          if (jt(ht, ct, Rt, Qt)) {
            jt(ht, Wt, St, Qt) ? (Dt(Ut, Kt, ht, Qt), ++Kt, --ht) : (Ot(Ut, ht, Qt), --ht);
            break
          }
          if (--ht < Ut) break
        }
      mt(tt, Kt - 1, Wt, St, Qt), mt(Xt, ht + 1, ct, Rt, Qt), Kt - 2 - tt <= et ? Vt(tt, Kt - 2, Qt) : Ht(tt, Kt - 2, Qt), Xt - (ht + 2) <= et ? Vt(ht + 2, Xt, Qt) : Ht(ht + 2, Xt, Qt), ht - Kt <= et ? Vt(Kt, ht, Qt) : Ht(Kt, ht, Qt)
    }
  },
  38546: (tt, et, Vt) => {
    tt.exports = {
      init: function(tt) {
        var et = qt.nextPow2(tt);
        jt.length < et && (Ot.free(jt), jt = Ot.mallocInt32(et));
        Ht.length < et && (Ot.free(Ht), Ht = Ot.mallocInt32(et));
        Xt.length < et && (Ot.free(Xt), Xt = Ot.mallocInt32(et));
        Qt.length < et && (Ot.free(Qt), Qt = Ot.mallocInt32(et));
        lt.length < et && (Ot.free(lt), lt = Ot.mallocInt32(et));
        Et.length < et && (Ot.free(Et), Et = Ot.mallocInt32(et));
        var Vt = 8 * et;
        ft.length < Vt && (Ot.free(ft), ft = Ot.mallocDouble(Vt))
      },
      sweepBipartite: function(tt, et, Vt, Ot, qt, dt, lt, Et, Nt, Mt) {
        for (var bt = 0, Jt = 2 * tt, Ct = tt - 1, ut = Jt - 1, Kt = Vt; Kt < Ot; ++Kt) {
          var ht = dt[Kt],
            vt = Jt * Kt;
          ft[bt++] = qt[vt + Ct], ft[bt++] = -(ht + 1), ft[bt++] = qt[vt + ut], ft[bt++] = ht
        }
        for (Kt = lt; Kt < Et; ++Kt) {
          ht = Mt[Kt] + mt;
          var Wt = Jt * Kt;
          ft[bt++] = Nt[Wt + Ct], ft[bt++] = -ht, ft[bt++] = Nt[Wt + ut], ft[bt++] = ht
        }
        var St = bt >>> 1;
        Dt(ft, St);
        var ct = 0,
          Rt = 0;
        for (Kt = 0; Kt < St; ++Kt) {
          var It = 0 | ft[2 * Kt + 1];
          if (It >= mt) wt(Xt, Qt, Rt--, It = It - mt | 0);
          else if (It >= 0) wt(jt, Ht, ct--, It);
          else if (It <= -mt) {
            It = -It - mt | 0;
            for (var Pt = 0; Pt < ct; ++Pt) {
              if (void 0 !== (Zt = et(jt[Pt], It))) return Zt
            }
            yt(Xt, Qt, Rt++, It)
          } else {
            It = -It - 1 | 0;
            for (Pt = 0; Pt < Rt; ++Pt) {
              var Zt;
              if (void 0 !== (Zt = et(It, Xt[Pt]))) return Zt
            }
            yt(jt, Ht, ct++, It)
          }
        }
      },
      sweepComplete: function(tt, et, Vt, Ot, qt, mt, dt, Nt, Mt, bt) {
        for (var Jt = 0, Ct = 2 * tt, ut = tt - 1, Kt = Ct - 1, ht = Vt; ht < Ot; ++ht) {
          var vt = mt[ht] + 1 << 1,
            Wt = Ct * ht;
          ft[Jt++] = qt[Wt + ut], ft[Jt++] = -vt, ft[Jt++] = qt[Wt + Kt], ft[Jt++] = vt
        }
        for (ht = dt; ht < Nt; ++ht) {
          vt = bt[ht] + 1 << 1;
          var St = Ct * ht;
          ft[Jt++] = Mt[St + ut], ft[Jt++] = 1 | -vt, ft[Jt++] = Mt[St + Kt], ft[Jt++] = 1 | vt
        }
        var ct = Jt >>> 1;
        Dt(ft, ct);
        var Rt = 0,
          It = 0,
          Pt = 0;
        for (ht = 0; ht < ct; ++ht) {
          var Zt = 0 | ft[2 * ht + 1],
            Lt = 1 & Zt;
          if (ht < ct - 1 && Zt >> 1 === ft[2 * ht + 3] >> 1 && (Lt = 2, ht += 1), Zt < 0) {
            for (var Ft = -(Zt >> 1) - 1, kt = 0; kt < Pt; ++kt) {
              if (void 0 !== (Gt = et(lt[kt], Ft))) return Gt
            }
            if (0 !== Lt)
              for (kt = 0; kt < Rt; ++kt) {
                if (void 0 !== (Gt = et(jt[kt], Ft))) return Gt
              }
            if (1 !== Lt)
              for (kt = 0; kt < It; ++kt) {
                var Gt;
                if (void 0 !== (Gt = et(Xt[kt], Ft))) return Gt
              }
            0 === Lt ? yt(jt, Ht, Rt++, Ft) : 1 === Lt ? yt(Xt, Qt, It++, Ft) : 2 === Lt && yt(lt, Et, Pt++, Ft)
          } else {
            Ft = (Zt >> 1) - 1;
            0 === Lt ? wt(jt, Ht, Rt--, Ft) : 1 === Lt ? wt(Xt, Qt, It--, Ft) : 2 === Lt && wt(lt, Et, Pt--, Ft)
          }
        }
      },
      scanBipartite: function(tt, et, Vt, Ot, qt, dt, Xt, Qt, lt, Et, Nt, Mt) {
        var bt = 0,
          Jt = 2 * tt,
          Ct = et,
          ut = et + tt,
          Kt = 1,
          ht = 1;
        Ot ? ht = mt : Kt = mt;
        for (var vt = qt; vt < dt; ++vt) {
          var Wt = vt + Kt,
            St = Jt * vt;
          ft[bt++] = Xt[St + Ct], ft[bt++] = -Wt, ft[bt++] = Xt[St + ut], ft[bt++] = Wt
        }
        for (vt = lt; vt < Et; ++vt) {
          Wt = vt + ht;
          var ct = Jt * vt;
          ft[bt++] = Nt[ct + Ct], ft[bt++] = -Wt
        }
        var Rt = bt >>> 1;
        Dt(ft, Rt);
        var It = 0;
        for (vt = 0; vt < Rt; ++vt) {
          var Pt = 0 | ft[2 * vt + 1];
          if (Pt < 0) {
            var Zt = !1;
            if ((Wt = -Pt) >= mt ? (Zt = !Ot, Wt -= mt) : (Zt = !!Ot, Wt -= 1), Zt) yt(jt, Ht, It++, Wt);
            else {
              var Lt = Mt[Wt],
                Ft = Jt * Wt,
                kt = Nt[Ft + et + 1],
                Gt = Nt[Ft + et + 1 + tt];
              tt: for (var zt = 0; zt < It; ++zt) {
                var ot = jt[zt],
                  rt = Jt * ot;
                if (!(Gt < Xt[rt + et + 1] || Xt[rt + et + 1 + tt] < kt)) {
                  for (var Ut = et + 2; Ut < tt; ++Ut)
                    if (Nt[Ft + Ut + tt] < Xt[rt + Ut] || Xt[rt + Ut + tt] < Nt[Ft + Ut]) continue tt;
                  var At, it = Qt[ot];
                  if (void 0 !== (At = Ot ? Vt(Lt, it) : Vt(it, Lt))) return At
                }
              }
            }
          } else wt(jt, Ht, It--, Pt - Kt)
        }
      },
      scanComplete: function(tt, et, Vt, Ot, qt, dt, Ht, Xt, Qt, lt, Et) {
        for (var wt = 0, yt = 2 * tt, Nt = et, Mt = et + tt, bt = Ot; bt < qt; ++bt) {
          var Jt = bt + mt,
            Ct = yt * bt;
          ft[wt++] = dt[Ct + Nt], ft[wt++] = -Jt, ft[wt++] = dt[Ct + Mt], ft[wt++] = Jt
        }
        for (bt = Xt; bt < Qt; ++bt) {
          Jt = bt + 1;
          var ut = yt * bt;
          ft[wt++] = lt[ut + Nt], ft[wt++] = -Jt
        }
        var Kt = wt >>> 1;
        Dt(ft, Kt);
        var ht = 0;
        for (bt = 0; bt < Kt; ++bt) {
          var vt = 0 | ft[2 * bt + 1];
          if (vt < 0) {
            if ((Jt = -vt) >= mt) jt[ht++] = Jt - mt;
            else {
              var Wt = Et[Jt -= 1],
                St = yt * Jt,
                ct = lt[St + et + 1],
                Rt = lt[St + et + 1 + tt];
              tt: for (var It = 0; It < ht; ++It) {
                var Pt = jt[It],
                  Zt = Ht[Pt];
                if (Zt === Wt) break;
                var Lt = yt * Pt;
                if (!(Rt < dt[Lt + et + 1] || dt[Lt + et + 1 + tt] < ct)) {
                  for (var Ft = et + 2; Ft < tt; ++Ft)
                    if (lt[St + Ft + tt] < dt[Lt + Ft] || dt[Lt + Ft + tt] < lt[St + Ft]) continue tt;
                  var kt = Vt(Zt, Wt);
                  if (void 0 !== kt) return kt
                }
              }
            }
          } else {
            for (Jt = vt - mt, It = ht - 1; It >= 0; --It)
              if (jt[It] === Jt) {
                for (Ft = It + 1; Ft < ht; ++Ft) jt[Ft - 1] = jt[Ft];
                break
              }-- ht
          }
        }
      }
    };
    var Ot = Vt(38520),
      qt = Vt(38523),
      Dt = Vt(38550),
      mt = 1 << 28,
      dt = 1024,
      jt = Ot.mallocInt32(dt),
      Ht = Ot.mallocInt32(dt),
      Xt = Ot.mallocInt32(dt),
      Qt = Ot.mallocInt32(dt),
      lt = Ot.mallocInt32(dt),
      Et = Ot.mallocInt32(dt),
      ft = Ot.mallocDouble(8192);

    function wt(tt, et, Vt, Ot) {
      var qt = et[Ot],
        Dt = tt[Vt - 1];
      tt[qt] = Dt, et[Dt] = qt
    }

    function yt(tt, et, Vt, Ot) {
      tt[Vt] = Ot, et[Ot] = Vt
    }
  },
  38530: tt => {
    function et(tt, Vt, Ot) {
      var qt = 0 | tt[Ot];
      if (qt <= 0) return [];
      var Dt, mt = new Array(qt);
      if (Ot === tt.length - 1)
        for (Dt = 0; Dt < qt; ++Dt) mt[Dt] = Vt;
      else
        for (Dt = 0; Dt < qt; ++Dt) mt[Dt] = et(tt, Vt, Ot + 1);
      return mt
    }
    tt.exports = function(tt, Vt) {
      switch ("undefined" === typeof Vt && (Vt = 0), typeof tt) {
        case "number":
          if (tt > 0) return function(tt, et) {
            var Vt, Ot;
            for (Vt = new Array(tt), Ot = 0; Ot < tt; ++Ot) Vt[Ot] = et;
            return Vt
          }(0 | tt, Vt);
          break;
        case "object":
          if ("number" === typeof tt.length) return et(tt, Vt, 0)
      }
      return []
    }
  },
  38480: (tt, et, Vt) => {
    tt.exports = function() {
      var tt = this;
      this.components = {}, this.comps = this.components;
      var et = this.components,
        Vt = 1,
        qt = {},
        Dt = [],
        mt = [],
        dt = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function jt(tt, Vt) {
        var Ot = et[Vt],
          Dt = qt[Vt],
          mt = Dt.hash[tt];
        mt && (Dt.remove(tt), Ot.nS && (Ot.multi ? (mt.forEach((et => {
          et && Ot.nS(tt, et)
        })), mt.length = 0) : Ot.nS(tt, mt)), dt.removals.push(Dt), Ht())
      }

      function Ht() {
        dt.timeout || (dt.timeout = !0, setTimeout(Xt, 1))
      }

      function Xt() {
        dt.timeout = !1, Qt()
      }

      function Qt() {
        dt.multiComps.length && function(tt) {
          for (var et = 0; et < tt.length; et++) {
            var {
              entID: Vt,
              data: Ot
            } = tt[et], qt = Ot.hash[Vt];
            if (qt) {
              for (var Dt = 0; Dt < qt.length; Dt++) qt[Dt] || (qt.splice(Dt, 1), Dt--);
              0 === qt.length && (Ot.remove(Vt), dt.removals.push(Ot))
            }
          }
          tt.length = 0
        }(dt.multiComps), dt.removals.length && function(tt) {
          for (var et = 0; et < tt.length; et++) {
            tt[et].flush()
          }
          tt.length = 0
        }(dt.removals)
      }
      this.lw = qt, this._systems = Dt, this._renderSystems = mt, this.vY = function(et) {
        var Ot = Vt++;
        return Array.isArray(et) && et.forEach((et => tt.RZ(Ot, et))), Ot
      }, this.deleteEntity = function(et) {
        return Object.keys(qt).forEach((tt => {
          qt[tt].hash[et] && jt(et, tt)
        })), tt
      }, this.NVt = function(tt) {
        if (!tt) throw new Error("Missing component definition");
        var Vt = tt.name;
        if (!Vt) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof Vt) throw new Error("Component name must be a string.");
        if ("" === Vt) throw new Error("Component name must be a non-empty string.");
        if (qt[Vt]) throw new Error(`Component ${Vt} already exists.`);
        var dt = {};
        return dt.name = Vt, dt.multi = !!tt.multi, dt.order = isNaN(tt.order) ? 99 : tt.order, dt.stateConstructor = tt.stateConstructor || null, dt.state = tt.state || {}, dt.qJ = tt.qJ || null, dt.nS = tt.nS || null, dt.system = tt.system || null, dt.dJ = tt.dJ || null, et[Vt] = dt, qt[Vt] = new Ot, qt[Vt]._pendingMultiCleanup = !1, qt[Vt]._multiCleanupIDs = dt.multi ? [] : null, dt.system && (Dt.push(Vt), Dt.sort(((tt, Vt) => et[tt].order - et[Vt].order))), dt.dJ && (mt.push(Vt), mt.sort(((tt, Vt) => et[tt].order - et[Vt].order))), Vt
      }, this.overwriteComponent = function(tt, Vt) {
        var Ot = et[tt];
        if (!Ot) throw new Error(`Unknown component: ${tt}`);
        if (!Vt) throw new Error("Missing component definition");
        if (Ot.name !== Vt.name) throw new Error("Overwriting component must use the same name property.");
        var dt = {};
        dt.name = tt, dt.multi = !!Vt.multi, dt.order = isNaN(Vt.order) ? 99 : Vt.order, dt.state = Vt.state || {}, dt.qJ = Vt.qJ || null, dt.nS = Vt.nS || null, dt.system = Vt.system || null, dt.dJ = Vt.dJ || null, et[tt] = dt, qt[tt]._pendingMultiCleanup = !1, qt[tt]._multiCleanupIDs = dt.multi ? [] : null;
        var jt = Dt.indexOf(tt);
        dt.system && jt < 0 && Dt.push(tt), !dt.system && jt >= 0 && Dt.splice(jt, 1), Dt.sort(((tt, Vt) => et[tt].order - et[Vt].order));
        var Ht = mt.indexOf(tt);
        dt.dJ && Ht < 0 && mt.push(tt), !dt.dJ && Ht >= 0 && mt.splice(Ht, 1), mt.sort(((tt, Vt) => et[tt].order - et[Vt].order));
        var Xt = dt.state;
        return this.bZ(tt).forEach((tt => {
          for (var et in Xt) et in tt || (tt[et] = Xt[et]);
          dt.qJ && dt.qJ(tt.uZ, tt)
        })), tt
      }, this.deleteComponent = function(Vt) {
        var Ot = qt[Vt];
        if (!Ot) throw new Error(`Unknown component: ${Vt}`);
        Ot.flush(), Ot.list.forEach((tt => {
          tt && jt(tt.uZ || tt[0].uZ, Vt)
        }));
        var dt = Dt.indexOf(Vt),
          Ht = mt.indexOf(Vt);
        return dt > -1 && Dt.splice(dt, 1), Ht > -1 && mt.splice(Ht, 1), qt[Vt].dispose(), delete qt[Vt], delete et[Vt], tt
      }, this.RZ = function(tt, Vt, Ot) {
        var Dt, mt = et[Vt],
          dt = qt[Vt];
        if (!dt) throw new Error(`Unknown component: ${Vt}.`);
        if (dt.hash[tt] && !mt.multi) throw new Error(`Entity ${tt} already has component: ${Vt}.`);
        if (mt.stateConstructor) {
          if (!(Dt = new mt.stateConstructor).hasOwnProperty("uZ")) throw new Error(`Component ${mt.name} stateConstructor type does not have property __id`);
          Object.assign(Dt, mt.state, Ot)
        } else Dt = {
          uZ: tt,
          ...mt.state,
          ...Ot
        };
        if (Dt.uZ = tt, mt.multi) {
          var jt = dt.hash[tt];
          jt || (jt = [], dt.add(tt, jt)), jt.push(Dt)
        } else dt.add(tt, Dt);
        return mt.qJ && mt.qJ(tt, Dt), this
      }, this.ptt = function(tt, et) {
        var Vt = qt[et];
        if (!Vt) throw new Error(`Unknown component: ${et}.`);
        return !!Vt.hash[tt]
      }, this.ZZ = function(et, Vt) {
        if (!qt[Vt]) throw new Error(`Unknown component: ${Vt}.`);
        return jt(et, Vt), tt
      }, this.getState = function(tt, et) {
        var Vt = qt[et];
        if (!Vt) throw new Error(`Unknown component: ${et}.`);
        return Vt.hash[tt]
      }, this.bZ = function(tt) {
        var et = qt[tt];
        if (!et) throw new Error(`Unknown component: ${tt}.`);
        return Qt(), et.list
      }, this.Bet = function(tt) {
        if (!qt[tt]) throw new Error(`Unknown component: ${tt}.`);
        var et = qt[tt].hash;
        return tt => et[tt]
      }, this.OVt = function(tt) {
        if (!qt[tt]) throw new Error(`Unknown component: ${tt}.`);
        var et = qt[tt].hash;
        return tt => !!et[tt]
      }, this.BQ = function(Vt) {
        Qt();
        for (var Ot = 0; Ot < Dt.length; Ot++) {
          var mt = Dt[Ot],
            dt = et[mt],
            jt = qt[mt];
          dt.system(Vt, jt.list), Qt()
        }
        return tt
      }, this.render = function(Vt) {
        Qt();
        for (var Ot = 0; Ot < mt.length; Ot++) {
          var Dt = mt[Ot],
            dt = et[Dt],
            jt = qt[Dt];
          dt.dJ(Vt, jt.list), Qt()
        }
        return tt
      }, this.removeMultiComponent = function(Vt, Ot, Dt) {
        var mt = et[Ot],
          jt = qt[Ot];
        if (!jt) throw new Error(`Unknown component: ${Ot}.`);
        if (!mt.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(tt, et, Vt, Ot) {
          var qt = Vt.hash[tt];
          if (qt) {
            var Dt = qt[Ot];
            Dt && (qt[Ot] = null, et.nS && et.nS(tt, Dt), dt.multiComps.push({
              entID: tt,
              data: Vt
            }), Ht())
          }
        }(Vt, mt, jt, Dt), tt
      }
    };
    var Ot = Vt(38486)
  },
  38486: tt => {
    function et(tt, et) {
      var Vt = tt._map[et];
      if (delete tt.hash[et], delete tt._map[et], Vt === tt.list.length - 1) tt.list.pop(), tt._idList.pop();
      else {
        var Ot = tt.list.pop();
        tt.list[Vt] = Ot;
        var qt = tt._idList.pop();
        tt._idList[Vt] = qt, tt._map[qt] = Vt
      }
    }
    tt.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(tt, et) {
        if ("number" === typeof this._map[tt]) {
          var Vt = this._map[tt];
          this.hash[tt] = et, this.list[Vt] = et, this._idList[Vt] = tt
        } else this._map[tt] = this.list.length, this.hash[tt] = et, this.list.push(et), this._idList.push(tt)
      }
      remove(tt) {
        var et = this._map[tt];
        this.hash[tt] = null, this.list[et] = null, this._pendingRemovals.push(tt)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var tt = 0; tt < this._pendingRemovals.length; tt++) {
          var Vt = this._pendingRemovals[tt];
          null === this.hash[Vt] && et(this, Vt)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  38295: (tt, et, Vt) => {
    tt = Vt.nmd(tt);
    var Ot = "__lodash_hash_undefined__",
      qt = 9007199254740991,
      Dt = "[object Arguments]",
      mt = "[object Boolean]",
      dt = "[object Date]",
      jt = "[object Function]",
      Ht = "[object GeneratorFunction]",
      Xt = "[object Map]",
      Qt = "[object Number]",
      lt = "[object Object]",
      Et = "[object Promise]",
      ft = "[object RegExp]",
      wt = "[object Set]",
      yt = "[object String]",
      Nt = "[object Symbol]",
      Mt = "[object WeakMap]",
      bt = "[object ArrayBuffer]",
      Jt = "[object DataView]",
      Ct = "[object Float32Array]",
      ut = "[object Float64Array]",
      Kt = "[object Int8Array]",
      ht = "[object Int16Array]",
      vt = "[object Int32Array]",
      Wt = "[object Uint8Array]",
      St = "[object Uint8ClampedArray]",
      ct = "[object Uint16Array]",
      Rt = "[object Uint32Array]",
      It = /\w*$/,
      Pt = /^\[object .+?Constructor\]$/,
      Zt = /^(?:0|[1-9]\d*)$/,
      Lt = {};
    Lt[Dt] = Lt["[object Array]"] = Lt[bt] = Lt[Jt] = Lt[mt] = Lt[dt] = Lt[Ct] = Lt[ut] = Lt[Kt] = Lt[ht] = Lt[vt] = Lt[Xt] = Lt[Qt] = Lt[lt] = Lt[ft] = Lt[wt] = Lt[yt] = Lt[Nt] = Lt[Wt] = Lt[St] = Lt[ct] = Lt[Rt] = !0, Lt["[object Error]"] = Lt[jt] = Lt[Mt] = !1;
    var Ft = "object" == typeof Vt.g && Vt.g && Vt.g.Object === Object && Vt.g,
      kt = "object" == typeof self && self && self.Object === Object && self,
      Gt = Ft || kt || Function("return this")(),
      zt = et && !et.nodeType && et,
      ot = zt && tt && !tt.nodeType && tt,
      rt = ot && ot.exports === zt;

    function Ut(tt, et) {
      return tt.set(et[0], et[1]), tt
    }

    function At(tt, et) {
      return tt.add(et), tt
    }

    function it(tt, et, Vt, Ot) {
      var qt = -1,
        Dt = tt ? tt.length : 0;
      for (Ot && Dt && (Vt = tt[++qt]); ++qt < Dt;) Vt = et(Vt, tt[qt], qt, tt);
      return Vt
    }

    function Yt(tt) {
      var et = !1;
      if (null != tt && "function" != typeof tt.toString) try {
        et = !!(tt + "")
      } catch (Vt) {}
      return et
    }

    function Bt(tt) {
      var et = -1,
        Vt = Array(tt.size);
      return tt.forEach((function(tt, Ot) {
        Vt[++et] = [Ot, tt]
      })), Vt
    }

    function pt(tt, et) {
      return function(Vt) {
        return tt(et(Vt))
      }
    }

    function xt(tt) {
      var et = -1,
        Vt = Array(tt.size);
      return tt.forEach((function(tt) {
        Vt[++et] = tt
      })), Vt
    }
    var Tt = Array.prototype,
      gt = Function.prototype,
      st = Object.prototype,
      nt = Gt["__core-js_shared__"],
      te = function() {
        var tt = /[^.]+$/.exec(nt && nt.keys && nt.keys.IE_PROTO || "");
        return tt ? "Symbol(src)_1." + tt : ""
      }(),
      ee = gt.toString,
      Ve = st.hasOwnProperty,
      Oe = st.toString,
      qe = RegExp("^" + ee.call(Ve).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      De = rt ? Gt.mf : void 0,
      me = Gt.Symbol,
      de = Gt.Uint8Array,
      je = pt(Object.getPrototypeOf, Object),
      He = Object.create,
      Xe = st.propertyIsEnumerable,
      Qe = Tt.splice,
      le = Object.getOwnPropertySymbols,
      Ee = De ? De.isBuffer : void 0,
      fe = pt(Object.keys, Object),
      we = re(Gt, "DataView"),
      ye = re(Gt, "Map"),
      Ne = re(Gt, "Promise"),
      ae = re(Gt, "Set"),
      Me = re(Gt, "WeakMap"),
      be = re(Object, "create"),
      Je = Be(we),
      Ce = Be(ye),
      ue = Be(Ne),
      Ke = Be(ae),
      he = Be(Me),
      ve = me ? me.prototype : void 0,
      We = ve ? ve.valueOf : void 0;

    function Se(tt) {
      var et = -1,
        Vt = tt ? tt.length : 0;
      for (this.clear(); ++et < Vt;) {
        var Ot = tt[et];
        this.set(Ot[0], Ot[1])
      }
    }

    function ce(tt) {
      var et = -1,
        Vt = tt ? tt.length : 0;
      for (this.clear(); ++et < Vt;) {
        var Ot = tt[et];
        this.set(Ot[0], Ot[1])
      }
    }

    function Re(tt) {
      var et = -1,
        Vt = tt ? tt.length : 0;
      for (this.clear(); ++et < Vt;) {
        var Ot = tt[et];
        this.set(Ot[0], Ot[1])
      }
    }

    function Ie(tt) {
      this.__data__ = new ce(tt)
    }

    function Pe(tt, et) {
      var Vt = xe(tt) || function(tt) {
          return function(tt) {
            return function(tt) {
              return !!tt && "object" == typeof tt
            }(tt) && Te(tt)
          }(tt) && Ve.call(tt, "callee") && (!Xe.call(tt, "callee") || Oe.call(tt) == Dt)
        }(tt) ? function(tt, et) {
          for (var Vt = -1, Ot = Array(tt); ++Vt < tt;) Ot[Vt] = et(Vt);
          return Ot
        }(tt.length, String) : [],
        Ot = Vt.length,
        qt = !!Ot;
      for (var mt in tt) !et && !Ve.call(tt, mt) || qt && ("length" == mt || ie(mt, Ot)) || Vt.push(mt);
      return Vt
    }

    function Ze(tt, et, Vt) {
      var Ot = tt[et];
      Ve.call(tt, et) && pe(Ot, Vt) && (void 0 !== Vt || et in tt) || (tt[et] = Vt)
    }

    function Le(tt, et) {
      for (var Vt = tt.length; Vt--;)
        if (pe(tt[Vt][0], et)) return Vt;
      return -1
    }

    function Fe(tt, et, Vt, Ot, qt, Et, Mt) {
      var Pt;
      if (Ot && (Pt = Et ? Ot(tt, qt, Et, Mt) : Ot(tt)), void 0 !== Pt) return Pt;
      if (!ne(tt)) return tt;
      var Zt = xe(tt);
      if (Zt) {
        if (Pt = function(tt) {
            var et = tt.length,
              Vt = tt.constructor(et);
            et && "string" == typeof tt[0] && Ve.call(tt, "index") && (Vt.index = tt.index, Vt.input = tt.input);
            return Vt
          }(tt), !et) return function(tt, et) {
          var Vt = -1,
            Ot = tt.length;
          et || (et = Array(Ot));
          for (; ++Vt < Ot;) et[Vt] = tt[Vt];
          return et
        }(tt, Pt)
      } else {
        var Ft = Ae(tt),
          kt = Ft == jt || Ft == Ht;
        if (ge(tt)) return function(tt, et) {
          if (et) return tt.slice();
          var Vt = new tt.constructor(tt.length);
          return tt.copy(Vt), Vt
        }(tt, et);
        if (Ft == lt || Ft == Dt || kt && !Et) {
          if (Yt(tt)) return Et ? tt : {};
          if (Pt = function(tt) {
              return "function" != typeof tt.constructor || Ye(tt) ? {} : (et = je(tt), ne(et) ? He(et) : {});
              var et
            }(kt ? {} : tt), !et) return function(tt, et) {
            return ze(tt, Ue(tt), et)
          }(tt, function(tt, et) {
            return tt && ze(et, tV(et), tt)
          }(Pt, tt))
        } else {
          if (!Lt[Ft]) return Et ? tt : {};
          Pt = function(tt, et, Vt, Ot) {
            var qt = tt.constructor;
            switch (et) {
              case bt:
                return Ge(tt);
              case mt:
              case dt:
                return new qt(+tt);
              case Jt:
                return function(tt, et) {
                  var Vt = et ? Ge(tt.buffer) : tt.buffer;
                  return new tt.constructor(Vt, tt.byteOffset, tt.byteLength)
                }(tt, Ot);
              case Ct:
              case ut:
              case Kt:
              case ht:
              case vt:
              case Wt:
              case St:
              case ct:
              case Rt:
                return function(tt, et) {
                  var Vt = et ? Ge(tt.buffer) : tt.buffer;
                  return new tt.constructor(Vt, tt.byteOffset, tt.length)
                }(tt, Ot);
              case Xt:
                return function(tt, et, Vt) {
                  var Ot = et ? Vt(Bt(tt), !0) : Bt(tt);
                  return it(Ot, Ut, new tt.constructor)
                }(tt, Ot, Vt);
              case Qt:
              case yt:
                return new qt(tt);
              case ft:
                return function(tt) {
                  var et = new tt.constructor(tt.source, It.exec(tt));
                  return et.lastIndex = tt.lastIndex, et
                }(tt);
              case wt:
                return function(tt, et, Vt) {
                  var Ot = et ? Vt(xt(tt), !0) : xt(tt);
                  return it(Ot, At, new tt.constructor)
                }(tt, Ot, Vt);
              case Nt:
                return Dt = tt, We ? Object(We.call(Dt)) : {}
            }
            var Dt
          }(tt, Ft, Fe, et)
        }
      }
      Mt || (Mt = new Ie);
      var Gt = Mt.get(tt);
      if (Gt) return Gt;
      if (Mt.set(tt, Pt), !Zt) var zt = Vt ? function(tt) {
        return function(tt, et, Vt) {
          var Ot = et(tt);
          return xe(tt) ? Ot : function(tt, et) {
            for (var Vt = -1, Ot = et.length, qt = tt.length; ++Vt < Ot;) tt[qt + Vt] = et[Vt];
            return tt
          }(Ot, Vt(tt))
        }(tt, tV, Ue)
      }(tt) : tV(tt);
      return function(tt, et) {
        for (var Vt = -1, Ot = tt ? tt.length : 0; ++Vt < Ot && !1 !== et(tt[Vt], Vt, tt););
      }(zt || tt, (function(qt, Dt) {
        zt && (qt = tt[Dt = qt]), Ze(Pt, Dt, Fe(qt, et, Vt, Ot, Dt, tt, Mt))
      })), Pt
    }

    function ke(tt) {
      return !(!ne(tt) || (et = tt, te && te in et)) && (se(tt) || Yt(tt) ? qe : Pt).test(Be(tt));
      var et
    }

    function Ge(tt) {
      var et = new tt.constructor(tt.byteLength);
      return new de(et).set(new de(tt)), et
    }

    function ze(tt, et, Vt, Ot) {
      Vt || (Vt = {});
      for (var qt = -1, Dt = et.length; ++qt < Dt;) {
        var mt = et[qt],
          dt = Ot ? Ot(Vt[mt], tt[mt], mt, Vt, tt) : void 0;
        Ze(Vt, mt, void 0 === dt ? tt[mt] : dt)
      }
      return Vt
    }

    function oe(tt, et) {
      var Vt = tt.__data__;
      return function(tt) {
        var et = typeof tt;
        return "string" == et || "number" == et || "symbol" == et || "boolean" == et ? "__proto__" !== tt : null === tt
      }(et) ? Vt["string" == typeof et ? "string" : "hash"] : Vt.map
    }

    function re(tt, et) {
      var Vt = function(tt, et) {
        return null == tt ? void 0 : tt[et]
      }(tt, et);
      return ke(Vt) ? Vt : void 0
    }
    Se.prototype.clear = function() {
      this.__data__ = be ? be(null) : {}
    }, Se.prototype.delete = function(tt) {
      return this.has(tt) && delete this.__data__[tt]
    }, Se.prototype.get = function(tt) {
      var et = this.__data__;
      if (be) {
        var Vt = et[tt];
        return Vt === Ot ? void 0 : Vt
      }
      return Ve.call(et, tt) ? et[tt] : void 0
    }, Se.prototype.has = function(tt) {
      var et = this.__data__;
      return be ? void 0 !== et[tt] : Ve.call(et, tt)
    }, Se.prototype.set = function(tt, et) {
      return this.__data__[tt] = be && void 0 === et ? Ot : et, this
    }, ce.prototype.clear = function() {
      this.__data__ = []
    }, ce.prototype.delete = function(tt) {
      var et = this.__data__,
        Vt = Le(et, tt);
      return !(Vt < 0) && (Vt == et.length - 1 ? et.pop() : Qe.call(et, Vt, 1), !0)
    }, ce.prototype.get = function(tt) {
      var et = this.__data__,
        Vt = Le(et, tt);
      return Vt < 0 ? void 0 : et[Vt][1]
    }, ce.prototype.has = function(tt) {
      return Le(this.__data__, tt) > -1
    }, ce.prototype.set = function(tt, et) {
      var Vt = this.__data__,
        Ot = Le(Vt, tt);
      return Ot < 0 ? Vt.push([tt, et]) : Vt[Ot][1] = et, this
    }, Re.prototype.clear = function() {
      this.__data__ = {
        hash: new Se,
        map: new(ye || ce),
        string: new Se
      }
    }, Re.prototype.delete = function(tt) {
      return oe(this, tt).delete(tt)
    }, Re.prototype.get = function(tt) {
      return oe(this, tt).get(tt)
    }, Re.prototype.has = function(tt) {
      return oe(this, tt).has(tt)
    }, Re.prototype.set = function(tt, et) {
      return oe(this, tt).set(tt, et), this
    }, Ie.prototype.clear = function() {
      this.__data__ = new ce
    }, Ie.prototype.delete = function(tt) {
      return this.__data__.delete(tt)
    }, Ie.prototype.get = function(tt) {
      return this.__data__.get(tt)
    }, Ie.prototype.has = function(tt) {
      return this.__data__.has(tt)
    }, Ie.prototype.set = function(tt, et) {
      var Vt = this.__data__;
      if (Vt instanceof ce) {
        var Ot = Vt.__data__;
        if (!ye || Ot.length < 199) return Ot.push([tt, et]), this;
        Vt = this.__data__ = new Re(Ot)
      }
      return Vt.set(tt, et), this
    };
    var Ue = le ? pt(le, Object) : function() {
        return []
      },
      Ae = function(tt) {
        return Oe.call(tt)
      };

    function ie(tt, et) {
      return !!(et = null == et ? qt : et) && ("number" == typeof tt || Zt.test(tt)) && tt > -1 && tt % 1 == 0 && tt < et
    }

    function Ye(tt) {
      var et = tt && tt.constructor;
      return tt === ("function" == typeof et && et.prototype || st)
    }

    function Be(tt) {
      if (null != tt) {
        try {
          return ee.call(tt)
        } catch (et) {}
        try {
          return tt + ""
        } catch (et) {}
      }
      return ""
    }

    function pe(tt, et) {
      return tt === et || tt !== tt && et !== et
    }(we && Ae(new we(new ArrayBuffer(1))) != Jt || ye && Ae(new ye) != Xt || Ne && Ae(Ne.resolve()) != Et || ae && Ae(new ae) != wt || Me && Ae(new Me) != Mt) && (Ae = function(tt) {
      var et = Oe.call(tt),
        Vt = et == lt ? tt.constructor : void 0,
        Ot = Vt ? Be(Vt) : void 0;
      if (Ot) switch (Ot) {
        case Je:
          return Jt;
        case Ce:
          return Xt;
        case ue:
          return Et;
        case Ke:
          return wt;
        case he:
          return Mt
      }
      return et
    });
    var xe = Array.isArray;

    function Te(tt) {
      return null != tt && function(tt) {
        return "number" == typeof tt && tt > -1 && tt % 1 == 0 && tt <= qt
      }(tt.length) && !se(tt)
    }
    var ge = Ee || function() {
      return !1
    };

    function se(tt) {
      var et = ne(tt) ? Oe.call(tt) : "";
      return et == jt || et == Ht
    }

    function ne(tt) {
      var et = typeof tt;
      return !!tt && ("object" == et || "function" == et)
    }

    function tV(tt) {
      return Te(tt) ? Pe(tt) : function(tt) {
        if (!Ye(tt)) return fe(tt);
        var et = [];
        for (var Vt in Object(tt)) Ve.call(tt, Vt) && "constructor" != Vt && et.push(Vt);
        return et
      }(tt)
    }
    tt.exports = function(tt) {
      return Fe(tt, !0, !0)
    }
  },
  38670: tt => {
    function et(tt, et, Vt) {
      for (var Ot = tt.length, qt = -1 / 0, Dt = 1 / 0, mt = 0; mt < Ot; mt++) {
        var dt = (Vt[0][mt] - tt[mt]) / et[mt],
          jt = (Vt[1][mt] - tt[mt]) / et[mt];
        if (dt > jt) {
          var Ht = dt;
          dt = jt, jt = Ht
        }
        if (jt < qt || dt > Dt) return 1 / 0;
        dt > qt && (qt = dt), jt < Dt && (Dt = jt)
      }
      return qt > Dt ? 1 / 0 : qt
    }
    tt.exports = function(tt, Vt, Ot, qt) {
      var Dt = et(Vt, Ot, qt);
      if (Dt === 1 / 0) tt = null;
      else {
        tt = tt || [];
        for (var mt = 0; mt < Vt.length; mt++) tt[mt] = Vt[mt] + Ot[mt] * Dt
      }
      return tt
    }, tt.exports.distance = et
  },
  37980: (tt, et, Vt) => {
    var Ot = Vt(37982);

    function qt(tt) {
      for (var et, Vt, qt = 0, Dt = tt.length, mt = 0; mt < tt.length;) {
        for (et = tt[mt], Vt = 0; mt < Dt && tt[mt] === et;) ++mt, ++Vt;
        qt += Ot.log2(Vt) / 7 | 0, qt += Ot.log2(et >>> 0) / 7 | 0, qt += 2
      }
      return qt
    }
    et.size = qt, et.encode = function(tt, et) {
      et || (et = new Uint8Array(qt(tt)));
      for (var Vt, Ot, Dt = 0, mt = et.length, dt = 0; dt < tt.length;) {
        for (Vt = tt[dt], Ot = 0; dt < tt.length && tt[dt] === Vt;) ++dt, ++Ot;
        for (; Dt < mt && Ot >= 128;) et[Dt++] = 128 + (127 & Ot), Ot >>>= 7;
        if (Dt >= mt) throw new Error("RLE buffer overflow");
        for (et[Dt++] = Ot, Vt >>>= 0; Dt < mt && Vt >= 128;) et[Dt++] = 128 + (127 & Vt), Vt >>>= 7;
        if (Dt >= mt) throw new Error("RLE buffer overflow");
        et[Dt++] = Vt
      }
      return et
    }, et.decode = function(tt, et) {
      for (var Vt, Ot, qt, Dt, mt = et.length, dt = tt.length, jt = 0, Ht = 0; Ht < dt;) {
        for (Vt = 0, Ot = 0; Ht < dt && tt[Ht] >= 128;) Vt += (127 & tt[Ht++]) << Ot, Ot += 7;
        if (Vt += tt[Ht++] << Ot, Ht >= dt) throw new Error("RLE buffer underrun");
        if (jt + Vt > mt) throw new Error("Chunk buffer overflow");
        for (qt = 0, Ot = 0; Ht < dt && tt[Ht] >= 128;) qt += (127 & tt[Ht++]) << Ot, Ot += 7;
        if (Ht >= dt) throw new Error("RLE buffer underrun");
        for (qt += tt[Ht++] << Ot, Dt = 0; Dt < Vt; ++Dt) et[jt++] = qt
      }
      return et
    }
  },
  37982: (tt, et) => {
    function Vt(tt) {
      var et = 32;
      return (tt &= -tt) && et--, 65535 & tt && (et -= 16), 16711935 & tt && (et -= 8), 252645135 & tt && (et -= 4), 858993459 & tt && (et -= 2), 1431655765 & tt && (et -= 1), et
    }
    et.INT_BITS = 32, et.INT_MAX = 2147483647, et.INT_MIN = -1 << 31, et.sign = function(tt) {
      return (tt > 0) - (tt < 0)
    }, et.abs = function(tt) {
      var et = tt >> 31;
      return (tt ^ et) - et
    }, et.min = function(tt, et) {
      return et ^ (tt ^ et) & -(tt < et)
    }, et.max = function(tt, et) {
      return tt ^ (tt ^ et) & -(tt < et)
    }, et.isPow2 = function(tt) {
      return !(tt & tt - 1) && !!tt
    }, et.log2 = function(tt) {
      var et, Vt;
      return et = (tt > 65535) << 4, et |= Vt = ((tt >>>= et) > 255) << 3, et |= Vt = ((tt >>>= Vt) > 15) << 2, (et |= Vt = ((tt >>>= Vt) > 3) << 1) | (tt >>>= Vt) >> 1
    }, et.log10 = function(tt) {
      return tt >= 1e9 ? 9 : tt >= 1e8 ? 8 : tt >= 1e7 ? 7 : tt >= 1e6 ? 6 : tt >= 1e5 ? 5 : tt >= 1e4 ? 4 : tt >= 1e3 ? 3 : tt >= 100 ? 2 : tt >= 10 ? 1 : 0
    }, et.popCount = function(tt) {
      return 16843009 * ((tt = (858993459 & (tt -= tt >>> 1 & 1431655765)) + (tt >>> 2 & 858993459)) + (tt >>> 4) & 252645135) >>> 24
    }, et.countTrailingZeros = Vt, et.nextPow2 = function(tt) {
      return tt += 0 === tt, --tt, tt |= tt >>> 1, tt |= tt >>> 2, tt |= tt >>> 4, tt |= tt >>> 8, (tt |= tt >>> 16) + 1
    }, et.prevPow2 = function(tt) {
      return tt |= tt >>> 1, tt |= tt >>> 2, tt |= tt >>> 4, tt |= tt >>> 8, (tt |= tt >>> 16) - (tt >>> 1)
    }, et.parity = function(tt) {
      return tt ^= tt >>> 16, tt ^= tt >>> 8, tt ^= tt >>> 4, 27030 >>> (tt &= 15) & 1
    };
    var Ot = new Array(256);
    ! function(tt) {
      for (var et = 0; et < 256; ++et) {
        var Vt = et,
          Ot = et,
          qt = 7;
        for (Vt >>>= 1; Vt; Vt >>>= 1) Ot <<= 1, Ot |= 1 & Vt, --qt;
        tt[et] = Ot << qt & 255
      }
    }(Ot), et.reverse = function(tt) {
      return Ot[255 & tt] << 24 | Ot[tt >>> 8 & 255] << 16 | Ot[tt >>> 16 & 255] << 8 | Ot[tt >>> 24 & 255]
    }, et.interleave2 = function(tt, et) {
      return (tt = 1431655765 & ((tt = 858993459 & ((tt = 252645135 & ((tt = 16711935 & ((tt &= 65535) | tt << 8)) | tt << 4)) | tt << 2)) | tt << 1)) | (et = 1431655765 & ((et = 858993459 & ((et = 252645135 & ((et = 16711935 & ((et &= 65535) | et << 8)) | et << 4)) | et << 2)) | et << 1)) << 1
    }, et.deinterleave2 = function(tt, et) {
      return (tt = 65535 & ((tt = 16711935 & ((tt = 252645135 & ((tt = 858993459 & ((tt = tt >>> et & 1431655765) | tt >>> 1)) | tt >>> 2)) | tt >>> 4)) | tt >>> 16)) << 16 >> 16
    }, et.interleave3 = function(tt, et, Vt) {
      return tt = 1227133513 & ((tt = 3272356035 & ((tt = 251719695 & ((tt = 4278190335 & ((tt &= 1023) | tt << 16)) | tt << 8)) | tt << 4)) | tt << 2), (tt |= (et = 1227133513 & ((et = 3272356035 & ((et = 251719695 & ((et = 4278190335 & ((et &= 1023) | et << 16)) | et << 8)) | et << 4)) | et << 2)) << 1) | (Vt = 1227133513 & ((Vt = 3272356035 & ((Vt = 251719695 & ((Vt = 4278190335 & ((Vt &= 1023) | Vt << 16)) | Vt << 8)) | Vt << 4)) | Vt << 2)) << 2
    }, et.deinterleave3 = function(tt, et) {
      return (tt = 1023 & ((tt = 4278190335 & ((tt = 251719695 & ((tt = 3272356035 & ((tt = tt >>> et & 1227133513) | tt >>> 2)) | tt >>> 4)) | tt >>> 8)) | tt >>> 16)) << 22 >> 22
    }, et.nextCombination = function(tt) {
      var et = tt | tt - 1;
      return et + 1 | (~et & -~et) - 1 >>> Vt(tt) + 1
    }
  },
  37510: (tt, et, Vt) => {
    Vt.d(et, {
      Color3: () => Ot.b,
      e: () => Ot.c
    });
    var Ot = Vt(37513);
    (0, Ot.e)()
  },
  38009: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => qt
    });
    var Ot = Vt(38016);
    class qt {
      static GetPlanes(tt) {
        const et = [];
        for (let Vt = 0; Vt < 6; Vt++) et.push(new Ot.b(0, 0, 0, 0));
        return qt.GetPlanesToRef(tt, et), et
      }
      static GetNearPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] + Vt[2], et.normal.y = Vt[7] + Vt[6], et.normal.z = Vt[11] + Vt[10], et.d = Vt[15] + Vt[14], et.normalize()
      }
      static GetFarPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] - Vt[2], et.normal.y = Vt[7] - Vt[6], et.normal.z = Vt[11] - Vt[10], et.d = Vt[15] - Vt[14], et.normalize()
      }
      static GetLeftPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] + Vt[0], et.normal.y = Vt[7] + Vt[4], et.normal.z = Vt[11] + Vt[8], et.d = Vt[15] + Vt[12], et.normalize()
      }
      static GetRightPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] - Vt[0], et.normal.y = Vt[7] - Vt[4], et.normal.z = Vt[11] - Vt[8], et.d = Vt[15] - Vt[12], et.normalize()
      }
      static GetTopPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] - Vt[1], et.normal.y = Vt[7] - Vt[5], et.normal.z = Vt[11] - Vt[9], et.d = Vt[15] - Vt[13], et.normalize()
      }
      static GetBottomPlaneToRef(tt, et) {
        const Vt = tt.m;
        et.normal.x = Vt[3] + Vt[1], et.normal.y = Vt[7] + Vt[5], et.normal.z = Vt[11] + Vt[9], et.d = Vt[15] + Vt[13], et.normalize()
      }
      static GetPlanesToRef(tt, et) {
        qt.GetNearPlaneToRef(tt, et[0]), qt.GetFarPlaneToRef(tt, et[1]), qt.GetLeftPlaneToRef(tt, et[2]), qt.GetRightPlaneToRef(tt, et[3]), qt.GetTopPlaneToRef(tt, et[4]), qt.GetBottomPlaneToRef(tt, et[5])
      }
      static IsPointInFrustum(tt, et) {
        for (let Vt = 0; Vt < 6; Vt++)
          if (et[Vt].dotCoordinate(tt) < 0) return !1;
        return !0
      }
    }
  },
  38016: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => qt
    });
    var Ot = Vt(37336);
    class qt {
      constructor(tt, et, Vt, qt) {
        this.normal = new Ot.n(tt, et, Vt), this.d = qt
      }
      GOt() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new qt(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let tt = this.normal.getHashCode();
        return tt = 397 * tt ^ this.d, tt
      }
      normalize() {
        const tt = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let et = 0;
        return 0 !== tt && (et = 1 / tt), this.normal.x *= et, this.normal.y *= et, this.normal.z *= et, this.d *= et, this
      }
      transform(tt) {
        const et = qt._TmpMatrix;
        tt.invertToRef(et);
        const Vt = et.m,
          Ot = this.normal.x,
          Dt = this.normal.y,
          mt = this.normal.z,
          dt = this.d,
          jt = Ot * Vt[0] + Dt * Vt[1] + mt * Vt[2] + dt * Vt[3],
          Ht = Ot * Vt[4] + Dt * Vt[5] + mt * Vt[6] + dt * Vt[7],
          Xt = Ot * Vt[8] + Dt * Vt[9] + mt * Vt[10] + dt * Vt[11],
          Qt = Ot * Vt[12] + Dt * Vt[13] + mt * Vt[14] + dt * Vt[15];
        return new qt(jt, Ht, Xt, Qt)
      }
      dotCoordinate(tt) {
        return this.normal.x * tt.x + this.normal.y * tt.y + this.normal.z * tt.z + this.d
      }
      copyFromPoints(tt, et, Vt) {
        const Ot = et.x - tt.x,
          qt = et.y - tt.y,
          Dt = et.z - tt.z,
          mt = Vt.x - tt.x,
          dt = Vt.y - tt.y,
          jt = Vt.z - tt.z,
          Ht = qt * jt - Dt * dt,
          Xt = Dt * mt - Ot * jt,
          Qt = Ot * dt - qt * mt,
          lt = Math.sqrt(Ht * Ht + Xt * Xt + Qt * Qt);
        let Et;
        return Et = 0 !== lt ? 1 / lt : 0, this.normal.x = Ht * Et, this.normal.y = Xt * Et, this.normal.z = Qt * Et, this.d = -(this.normal.x * tt.x + this.normal.y * tt.y + this.normal.z * tt.z), this
      }
      isFrontFacingTo(tt, et) {
        return Ot.n.Dot(this.normal, tt) <= et
      }
      signedDistanceTo(tt) {
        return Ot.n.Dot(tt, this.normal) + this.d
      }
      static FromArray(tt) {
        return new qt(tt[0], tt[1], tt[2], tt[3])
      }
      static FromPoints(tt, et, Vt) {
        const Ot = new qt(0, 0, 0, 0);
        return Ot.copyFromPoints(tt, et, Vt), Ot
      }
      static FromPositionAndNormal(tt, et) {
        const Vt = new qt(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(tt, et, Vt)
      }
      static FromPositionAndNormalToRef(tt, et, Vt) {
        return Vt.normal.rK(et), Vt.normal.normalize(), Vt.d = -tt.dot(Vt.normal), Vt
      }
      static SignedDistanceToPlaneFromPositionAndNormal(tt, et, Vt) {
        const qt = -(et.x * tt.x + et.y * tt.y + et.z * tt.z);
        return Ot.n.Dot(Vt, et) + qt
      }
    }
    qt._TmpMatrix = Ot.c.Identity()
  },
  37331: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      Matrix: () => Ot.c,
      Quaternion: () => Ot.e,
      RegisterMathVector: () => Ot.h,
      TmpVectors: () => Ot.k,
      Vector2: () => Ot.m,
      uf: () => Ot.n,
      Vector4: () => Ot.r
    });
    var Ot = Vt(37336);
    (0, Ot.h)()
  },
  38340: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ot
    });
    class Ot {
      constructor(tt, et, Vt, Ot) {
        this.x = tt, this.y = et, this.width = Vt, this.height = Ot
      }
      toGlobal(tt, et) {
        return new Ot(this.x * tt, this.y * et, this.width * tt, this.height * et)
      }
      toGlobalToRef(tt, et, Vt) {
        return Vt.x = this.x * tt, Vt.y = this.y * et, Vt.width = this.width * tt, Vt.height = this.height * et, this
      }
      clone() {
        return new Ot(this.x, this.y, this.width, this.height)
      }
    }
  },
  38159: (tt, et, Vt) => {
    function Ot() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (tt => {
        const et = 16 * Math.random() | 0;
        return ("x" === tt ? et : 3 & et | 8).toString(16)
      }))
    }
    Vt.d(et, {
      b: () => Ot
    })
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);