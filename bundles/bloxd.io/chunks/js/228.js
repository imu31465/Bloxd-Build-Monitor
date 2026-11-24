/*! For license information please see mpd96o.228.57ebe301.chunk.js.LICENSE.txt */
export const id = 228;
export const ids = [228, 235];
export const modules = {
  38385: mm => {
    mm.exports = function(mm) {
      return null != mm && null != mm.constructor && "function" === typeof mm.constructor.isBuffer && mm.constructor.isBuffer(mm)
    }
  },
  38362: (mm, Tm, fm) => {
    var hm = fm(38369),
      Am = fm(38377),
      am = fm(38385);
    fm.g.__TYPEDARRAY_POOL || (fm.g.__TYPEDARRAY_POOL = {
      UINT8: Am([32, 0]),
      UINT16: Am([32, 0]),
      UINT32: Am([32, 0]),
      INT8: Am([32, 0]),
      INT16: Am([32, 0]),
      INT32: Am([32, 0]),
      FLOAT: Am([32, 0]),
      DOUBLE: Am([32, 0]),
      DATA: Am([32, 0]),
      UINT8C: Am([32, 0]),
      BUFFER: Am([32, 0])
    });
    var xm = "undefined" !== typeof Uint8ClampedArray,
      wm = fm.g.__TYPEDARRAY_POOL;
    wm.UINT8C || (wm.UINT8C = Am([32, 0])), wm.BUFFER || (wm.BUFFER = Am([32, 0]));
    var Dm = wm.DATA,
      im = wm.BUFFER;

    function Rm(mm) {
      if (mm) {
        var Tm = mm.length || mm.byteLength,
          fm = hm.log2(Tm);
        Dm[fm].push(mm)
      }
    }

    function pm(mm) {
      mm = hm.nextPow2(mm);
      var Tm = hm.log2(mm),
        fm = Dm[Tm];
      return fm.length > 0 ? fm.pop() : new ArrayBuffer(mm)
    }

    function Em(mm) {
      return new Uint8Array(pm(mm), 0, mm)
    }

    function om(mm) {
      return new Uint16Array(pm(2 * mm), 0, mm)
    }

    function Om(mm) {
      return new Uint32Array(pm(4 * mm), 0, mm)
    }

    function Ym(mm) {
      return new Int8Array(pm(mm), 0, mm)
    }

    function qm(mm) {
      return new Int16Array(pm(2 * mm), 0, mm)
    }

    function jm(mm) {
      return new Int32Array(pm(4 * mm), 0, mm)
    }

    function Vm(mm) {
      return new Float32Array(pm(4 * mm), 0, mm)
    }

    function Im(mm) {
      return new Float64Array(pm(8 * mm), 0, mm)
    }

    function Km(mm) {
      return xm ? new Uint8ClampedArray(pm(mm), 0, mm) : Em(mm)
    }

    function Qm(mm) {
      return new DataView(pm(mm), 0, mm)
    }
    Tm.free = function(mm) {
      if (am(mm)) im[hm.log2(mm.length)].push(mm);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(mm) && (mm = mm.buffer), !mm) return;
        var Tm = mm.length || mm.byteLength,
          fm = 0 | hm.log2(Tm);
        Dm[fm].push(mm)
      }
    }, Tm.freeUint8 = Tm.freeUint16 = Tm.freeUint32 = Tm.freeInt8 = Tm.freeInt16 = Tm.freeInt32 = Tm.freeFloat32 = Tm.freeFloat = Tm.freeFloat64 = Tm.freeDouble = Tm.freeUint8Clamped = Tm.freeDataView = function(mm) {
      Rm(mm.buffer)
    }, Tm.freeArrayBuffer = Rm, Tm.freeBuffer = function(mm) {
      im[hm.log2(mm.length)].push(mm)
    }, Tm.malloc = function(mm, Tm) {
      if (void 0 === Tm || "arraybuffer" === Tm) return pm(mm);
      switch (Tm) {
        case "uint8":
          return Em(mm);
        case "uint16":
          return om(mm);
        case "uint32":
          return Om(mm);
        case "int8":
          return Ym(mm);
        case "int16":
          return qm(mm);
        case "int32":
          return jm(mm);
        case "float":
        case "float32":
          return Vm(mm);
        case "double":
        case "float64":
          return Im(mm);
        case "uint8_clamped":
          return Km(mm);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return Qm(mm);
        default:
          return null
      }
      return null
    }, Tm.mallocArrayBuffer = pm, Tm.mallocUint8 = Em, Tm.mallocUint16 = om, Tm.mallocUint32 = Om, Tm.mallocInt8 = Ym, Tm.mallocInt16 = qm, Tm.mallocInt32 = jm, Tm.mallocFloat32 = Tm.mallocFloat = Vm, Tm.mallocFloat64 = Tm.mallocDouble = Im, Tm.mallocUint8Clamped = Km, Tm.mallocDataView = Qm, Tm.clearCache = function() {
      for (var mm = 0; mm < 32; ++mm) wm.UINT8[mm].length = 0, wm.UINT16[mm].length = 0, wm.UINT32[mm].length = 0, wm.INT8[mm].length = 0, wm.INT16[mm].length = 0, wm.INT32[mm].length = 0, wm.FLOAT[mm].length = 0, wm.DOUBLE[mm].length = 0, wm.UINT8C[mm].length = 0, Dm[mm].length = 0, im[mm].length = 0
    }
  },
  38369: (mm, Tm) => {
    function fm(mm) {
      var Tm = 32;
      return (mm &= -mm) && Tm--, 65535 & mm && (Tm -= 16), 16711935 & mm && (Tm -= 8), 252645135 & mm && (Tm -= 4), 858993459 & mm && (Tm -= 2), 1431655765 & mm && (Tm -= 1), Tm
    }
    Tm.INT_BITS = 32, Tm.INT_MAX = 2147483647, Tm.INT_MIN = -1 << 31, Tm.sign = function(mm) {
      return (mm > 0) - (mm < 0)
    }, Tm.abs = function(mm) {
      var Tm = mm >> 31;
      return (mm ^ Tm) - Tm
    }, Tm.min = function(mm, Tm) {
      return Tm ^ (mm ^ Tm) & -(mm < Tm)
    }, Tm.max = function(mm, Tm) {
      return mm ^ (mm ^ Tm) & -(mm < Tm)
    }, Tm.isPow2 = function(mm) {
      return !(mm & mm - 1) && !!mm
    }, Tm.log2 = function(mm) {
      var Tm, fm;
      return Tm = (mm > 65535) << 4, Tm |= fm = ((mm >>>= Tm) > 255) << 3, Tm |= fm = ((mm >>>= fm) > 15) << 2, (Tm |= fm = ((mm >>>= fm) > 3) << 1) | (mm >>>= fm) >> 1
    }, Tm.log10 = function(mm) {
      return mm >= 1e9 ? 9 : mm >= 1e8 ? 8 : mm >= 1e7 ? 7 : mm >= 1e6 ? 6 : mm >= 1e5 ? 5 : mm >= 1e4 ? 4 : mm >= 1e3 ? 3 : mm >= 100 ? 2 : mm >= 10 ? 1 : 0
    }, Tm.popCount = function(mm) {
      return 16843009 * ((mm = (858993459 & (mm -= mm >>> 1 & 1431655765)) + (mm >>> 2 & 858993459)) + (mm >>> 4) & 252645135) >>> 24
    }, Tm.countTrailingZeros = fm, Tm.nextPow2 = function(mm) {
      return mm += 0 === mm, --mm, mm |= mm >>> 1, mm |= mm >>> 2, mm |= mm >>> 4, mm |= mm >>> 8, (mm |= mm >>> 16) + 1
    }, Tm.prevPow2 = function(mm) {
      return mm |= mm >>> 1, mm |= mm >>> 2, mm |= mm >>> 4, mm |= mm >>> 8, (mm |= mm >>> 16) - (mm >>> 1)
    }, Tm.parity = function(mm) {
      return mm ^= mm >>> 16, mm ^= mm >>> 8, mm ^= mm >>> 4, 27030 >>> (mm &= 15) & 1
    };
    var hm = new Array(256);
    ! function(mm) {
      for (var Tm = 0; Tm < 256; ++Tm) {
        var fm = Tm,
          hm = Tm,
          Am = 7;
        for (fm >>>= 1; fm; fm >>>= 1) hm <<= 1, hm |= 1 & fm, --Am;
        mm[Tm] = hm << Am & 255
      }
    }(hm), Tm.reverse = function(mm) {
      return hm[255 & mm] << 24 | hm[mm >>> 8 & 255] << 16 | hm[mm >>> 16 & 255] << 8 | hm[mm >>> 24 & 255]
    }, Tm.interleave2 = function(mm, Tm) {
      return (mm = 1431655765 & ((mm = 858993459 & ((mm = 252645135 & ((mm = 16711935 & ((mm &= 65535) | mm << 8)) | mm << 4)) | mm << 2)) | mm << 1)) | (Tm = 1431655765 & ((Tm = 858993459 & ((Tm = 252645135 & ((Tm = 16711935 & ((Tm &= 65535) | Tm << 8)) | Tm << 4)) | Tm << 2)) | Tm << 1)) << 1
    }, Tm.deinterleave2 = function(mm, Tm) {
      return (mm = 65535 & ((mm = 16711935 & ((mm = 252645135 & ((mm = 858993459 & ((mm = mm >>> Tm & 1431655765) | mm >>> 1)) | mm >>> 2)) | mm >>> 4)) | mm >>> 16)) << 16 >> 16
    }, Tm.interleave3 = function(mm, Tm, fm) {
      return mm = 1227133513 & ((mm = 3272356035 & ((mm = 251719695 & ((mm = 4278190335 & ((mm &= 1023) | mm << 16)) | mm << 8)) | mm << 4)) | mm << 2), (mm |= (Tm = 1227133513 & ((Tm = 3272356035 & ((Tm = 251719695 & ((Tm = 4278190335 & ((Tm &= 1023) | Tm << 16)) | Tm << 8)) | Tm << 4)) | Tm << 2)) << 1) | (fm = 1227133513 & ((fm = 3272356035 & ((fm = 251719695 & ((fm = 4278190335 & ((fm &= 1023) | fm << 16)) | fm << 8)) | fm << 4)) | fm << 2)) << 2
    }, Tm.deinterleave3 = function(mm, Tm) {
      return (mm = 1023 & ((mm = 4278190335 & ((mm = 251719695 & ((mm = 3272356035 & ((mm = mm >>> Tm & 1227133513) | mm >>> 2)) | mm >>> 4)) | mm >>> 8)) | mm >>> 16)) << 22 >> 22
    }, Tm.nextCombination = function(mm) {
      var Tm = mm | mm - 1;
      return Tm + 1 | (~Tm & -~Tm) - 1 >>> fm(mm) + 1
    }
  },
  38353: (mm, Tm, fm) => {
    mm.exports = function(mm, Tm, fm) {
      switch (arguments.length) {
        case 1:
          return hm = [], im(Am = mm, Am, Rm, !0), hm;
        case 2:
          return "function" === typeof Tm ? im(mm, mm, Tm, !0) : function(mm, Tm) {
            return hm = [], im(mm, Tm, Rm, !1), hm
          }(mm, Tm);
        case 3:
          return im(mm, Tm, fm, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var Am
    };
    var hm, Am = fm(38362),
      am = fm(38394),
      xm = fm(38402);

    function wm(mm, Tm) {
      for (var fm = 0; fm < mm; ++fm)
        if (!(Tm[fm] <= Tm[fm + mm])) return !0;
      return !1
    }

    function Dm(mm, Tm, fm, hm) {
      for (var Am = 0, am = 0, xm = 0, Dm = mm.length; xm < Dm; ++xm) {
        var im = mm[xm];
        if (!wm(Tm, im)) {
          for (var Rm = 0; Rm < 2 * Tm; ++Rm) fm[Am++] = im[Rm];
          hm[am++] = xm
        }
      }
      return am
    }

    function im(mm, Tm, fm, hm) {
      var wm = mm.length,
        im = Tm.length;
      if (!(wm <= 0 || im <= 0)) {
        var Rm = mm[0].length >>> 1;
        if (!(Rm <= 0)) {
          var pm, Em = Am.mallocDouble(2 * Rm * wm),
            om = Am.mallocInt32(wm);
          if ((wm = Dm(mm, Rm, Em, om)) > 0) {
            if (1 === Rm && hm) am.init(wm), pm = am.sweepComplete(Rm, fm, 0, wm, Em, om, 0, wm, Em, om);
            else {
              var Om = Am.mallocDouble(2 * Rm * im),
                Ym = Am.mallocInt32(im);
              (im = Dm(Tm, Rm, Om, Ym)) > 0 && (am.init(wm + im), pm = 1 === Rm ? am.sweepBipartite(Rm, fm, 0, wm, Em, om, 0, im, Om, Ym) : xm(Rm, fm, hm, wm, Em, om, im, Om, Ym), Am.free(Om), Am.free(Ym))
            }
            Am.free(Em), Am.free(om)
          }
          return pm
        }
      }
    }

    function Rm(mm, Tm) {
      hm.push([mm, Tm])
    }
  },
  38411: (mm, Tm) => {
    var fm = "d",
      hm = "ax",
      Am = "fp",
      am = "es",
      xm = "rs",
      wm = "re",
      Dm = "rb",
      im = "bs",
      Rm = "be",
      pm = "bb",
      Em = [fm, hm, "vv", xm, wm, Dm, "ri", im, Rm, pm, "bi"];

    function om(mm) {
      var Tm = "bruteForce" + (mm ? "Full" : "Partial"),
        hm = [],
        xm = Em.slice();
      mm || xm.splice(3, 0, Am);
      var wm = ["function " + Tm + "(" + xm.join() + "){"];

      function Dm(Tm, Am) {
        var xm = function(mm, Tm, hm) {
          var Am = "bruteForce" + (mm ? "Red" : "Blue") + (Tm ? "Flip" : "") + (hm ? "Full" : ""),
            xm = ["function ", Am, "(", Em.join(), "){", "var ", am, "=2*", fm, ";"],
            wm = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            Dm = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (hm ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return mm ? xm.push(wm, "Q", ":", Dm) : xm.push(Dm, "Q", ":", wm), hm ? xm.push("if(y1<x0||x1<y0)continue;") : Tm ? xm.push("if(y0<=x0||x1<y0)continue;") : xm.push("if(y0<x0||x1<y0)continue;"), xm.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), Tm ? xm.push("yi,xi") : xm.push("xi,yi"), xm.push(");if(rv!==void 0)return rv;}}}"), {
            name: Am,
            code: xm.join("")
          }
        }(Tm, Am, mm);
        hm.push(xm.code), wm.push("return " + xm.name + "(" + Em.join() + ");")
      }
      wm.push("if(re-rs>be-bs){"), mm ? (Dm(!0, !1), wm.push("}else{"), Dm(!1, !1)) : (wm.push("if(fp){"), Dm(!0, !0), wm.push("}else{"), Dm(!0, !1), wm.push("}}else{if(fp){"), Dm(!1, !0), wm.push("}else{"), Dm(!1, !1), wm.push("}")), wm.push("}}return " + Tm);
      var im = hm.join("") + wm.join("");
      return new Function(im)()
    }
    Tm.partial = om(!1), Tm.full = om(!0)
  },
  38402: (mm, Tm, fm) => {
    mm.exports = function(mm, Tm, fm, am, Rm, km, bm, Sm, em) {
      ! function(mm, Tm) {
        var fm = 8 * Am.log2(Tm + 1) * (mm + 1) | 0,
          am = Am.nextPow2(Km * fm);
        nm.length < am && (hm.free(nm), nm = hm.mallocInt32(am));
        var xm = Am.nextPow2(Qm * fm);
        Jm.length < xm && (hm.free(Jm), Jm = hm.mallocDouble(xm))
      }(mm, am + bm);
      var Nm, Gm = 0,
        Xm = 2 * mm;
      cm(Gm++, 0, 0, am, 0, bm, fm ? 16 : 0, -1 / 0, 1 / 0), fm || cm(Gm++, 0, 0, bm, 0, am, 1, -1 / 0, 1 / 0);
      for (; Gm > 0;) {
        var Pm = (Gm -= 1) * Km,
          Hm = nm[Pm],
          ym = nm[Pm + 1],
          Cm = nm[Pm + 2],
          rm = nm[Pm + 3],
          sm = nm[Pm + 4],
          lm = nm[Pm + 5],
          Mm = Gm * Qm,
          um = Jm[Mm],
          Bm = Jm[Mm + 1],
          Lm = 1 & lm,
          tm = !!(16 & lm),
          Um = Rm,
          dm = km,
          gm = Sm,
          Wm = em;
        if (Lm && (Um = Sm, dm = em, gm = Rm, Wm = km), !(2 & lm && ym >= (Cm = qm(mm, Hm, ym, Cm, Um, dm, Bm))) && !(4 & lm && (ym = jm(mm, Hm, ym, Cm, Um, dm, um)) >= Cm)) {
          var Fm = Cm - ym,
            mT = sm - rm;
          if (tm) {
            if (mm * Fm * (Fm + mT) < om) {
              if (void 0 !== (Nm = Dm.scanComplete(mm, Hm, Tm, ym, Cm, Um, dm, rm, sm, gm, Wm))) return Nm;
              continue
            }
          } else {
            if (mm * Math.min(Fm, mT) < pm) {
              if (void 0 !== (Nm = xm(mm, Hm, Tm, Lm, ym, Cm, Um, dm, rm, sm, gm, Wm))) return Nm;
              continue
            }
            if (mm * Fm * mT < Em) {
              if (void 0 !== (Nm = Dm.scanBipartite(mm, Hm, Tm, Lm, ym, Cm, Um, dm, rm, sm, gm, Wm))) return Nm;
              continue
            }
          }
          var TT = Om(mm, Hm, ym, Cm, Um, dm, um, Bm);
          if (ym < TT)
            if (mm * (TT - ym) < pm) {
              if (void 0 !== (Nm = wm(mm, Hm + 1, Tm, ym, TT, Um, dm, rm, sm, gm, Wm))) return Nm
            } else if (Hm === mm - 2) {
            if (void 0 !== (Nm = Lm ? Dm.sweepBipartite(mm, Tm, rm, sm, gm, Wm, ym, TT, Um, dm) : Dm.sweepBipartite(mm, Tm, ym, TT, Um, dm, rm, sm, gm, Wm))) return Nm
          } else cm(Gm++, Hm + 1, ym, TT, rm, sm, Lm, -1 / 0, 1 / 0), cm(Gm++, Hm + 1, rm, sm, ym, TT, 1 ^ Lm, -1 / 0, 1 / 0);
          if (TT < Cm) {
            var fT = im(mm, Hm, rm, sm, gm, Wm),
              hT = gm[Xm * fT + Hm],
              AT = Ym(mm, Hm, fT, sm, gm, Wm, hT);
            if (AT < sm && cm(Gm++, Hm, TT, Cm, AT, sm, (4 | Lm) + (tm ? 16 : 0), hT, Bm), rm < fT && cm(Gm++, Hm, TT, Cm, rm, fT, (2 | Lm) + (tm ? 16 : 0), um, hT), fT + 1 === AT) {
              if (void 0 !== (Nm = tm ? Zm(mm, Hm, Tm, TT, Cm, Um, dm, fT, gm, Wm[fT]) : zm(mm, Hm, Tm, Lm, TT, Cm, Um, dm, fT, gm, Wm[fT]))) return Nm
            } else if (fT < AT) {
              var aT;
              if (tm) {
                if (TT < (aT = Vm(mm, Hm, TT, Cm, Um, dm, hT))) {
                  var xT = Ym(mm, Hm, TT, aT, Um, dm, hT);
                  if (Hm === mm - 2) {
                    if (TT < xT && void 0 !== (Nm = Dm.sweepComplete(mm, Tm, TT, xT, Um, dm, fT, AT, gm, Wm))) return Nm;
                    if (xT < aT && void 0 !== (Nm = Dm.sweepBipartite(mm, Tm, xT, aT, Um, dm, fT, AT, gm, Wm))) return Nm
                  } else TT < xT && cm(Gm++, Hm + 1, TT, xT, fT, AT, 16, -1 / 0, 1 / 0), xT < aT && (cm(Gm++, Hm + 1, xT, aT, fT, AT, 0, -1 / 0, 1 / 0), cm(Gm++, Hm + 1, fT, AT, xT, aT, 1, -1 / 0, 1 / 0))
                }
              } else TT < (aT = Lm ? Im(mm, Hm, TT, Cm, Um, dm, hT) : Vm(mm, Hm, TT, Cm, Um, dm, hT)) && (Hm === mm - 2 ? Nm = Lm ? Dm.sweepBipartite(mm, Tm, fT, AT, gm, Wm, TT, aT, Um, dm) : Dm.sweepBipartite(mm, Tm, TT, aT, Um, dm, fT, AT, gm, Wm) : (cm(Gm++, Hm + 1, TT, aT, fT, AT, Lm, -1 / 0, 1 / 0), cm(Gm++, Hm + 1, fT, AT, TT, aT, 1 ^ Lm, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var hm = fm(38362),
      Am = fm(38369),
      am = fm(38411),
      xm = am.partial,
      wm = am.full,
      Dm = fm(38394),
      im = fm(38419),
      Rm = fm(38427),
      pm = 128,
      Em = 1 << 22,
      om = 1 << 22,
      Om = Rm("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      Ym = Rm("lo===p0", ["p0"]),
      qm = Rm("lo<p0", ["p0"]),
      jm = Rm("hi<=p0", ["p0"]),
      Vm = Rm("lo<=p0&&p0<=hi", ["p0"]),
      Im = Rm("lo<p0&&p0<=hi", ["p0"]),
      Km = 6,
      Qm = 2,
      nm = hm.mallocInt32(1024),
      Jm = hm.mallocDouble(1024);

    function cm(mm, Tm, fm, hm, Am, am, xm, wm, Dm) {
      var im = Km * mm;
      nm[im] = Tm, nm[im + 1] = fm, nm[im + 2] = hm, nm[im + 3] = Am, nm[im + 4] = am, nm[im + 5] = xm;
      var Rm = Qm * mm;
      Jm[Rm] = wm, Jm[Rm + 1] = Dm
    }

    function zm(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im, Rm) {
      var pm = 2 * mm,
        Em = Dm * pm,
        om = im[Em + Tm];
      mm: for (var Om = Am, Ym = Am * pm; Om < am; ++Om, Ym += pm) {
        var qm = xm[Ym + Tm],
          jm = xm[Ym + Tm + mm];
        if (!(om < qm || jm < om) && (!hm || om !== qm)) {
          for (var Vm, Im = wm[Om], Km = Tm + 1; Km < mm; ++Km) {
            qm = xm[Ym + Km], jm = xm[Ym + Km + mm];
            var Qm = im[Em + Km],
              nm = im[Em + Km + mm];
            if (jm < Qm || nm < qm) continue mm
          }
          if (void 0 !== (Vm = hm ? fm(Rm, Im) : fm(Im, Rm))) return Vm
        }
      }
    }

    function Zm(mm, Tm, fm, hm, Am, am, xm, wm, Dm, im) {
      var Rm = 2 * mm,
        pm = wm * Rm,
        Em = Dm[pm + Tm];
      mm: for (var om = hm, Om = hm * Rm; om < Am; ++om, Om += Rm) {
        var Ym = xm[om];
        if (Ym !== im) {
          var qm = am[Om + Tm],
            jm = am[Om + Tm + mm];
          if (!(Em < qm || jm < Em)) {
            for (var Vm = Tm + 1; Vm < mm; ++Vm) {
              qm = am[Om + Vm], jm = am[Om + Vm + mm];
              var Im = Dm[pm + Vm],
                Km = Dm[pm + Vm + mm];
              if (jm < Im || Km < qm) continue mm
            }
            var Qm = fm(Ym, im);
            if (void 0 !== Qm) return Qm
          }
        }
      }
    }
  },
  38419: (mm, Tm, fm) => {
    mm.exports = function(mm, Tm, fm, xm, wm, Dm) {
      if (xm <= fm + 1) return fm;
      var im = fm,
        Rm = xm,
        pm = xm + fm >>> 1,
        Em = 2 * mm,
        om = pm,
        Om = wm[Em * pm + Tm];
      for (; im < Rm;) {
        if (Rm - im < Am) {
          am(mm, Tm, im, Rm, wm, Dm), Om = wm[Em * pm + Tm];
          break
        }
        var Ym = Rm - im,
          qm = Math.random() * Ym + im | 0,
          jm = wm[Em * qm + Tm],
          Vm = Math.random() * Ym + im | 0,
          Im = wm[Em * Vm + Tm],
          Km = Math.random() * Ym + im | 0,
          Qm = wm[Em * Km + Tm];
        jm <= Im ? Qm >= Im ? (om = Vm, Om = Im) : jm >= Qm ? (om = qm, Om = jm) : (om = Km, Om = Qm) : Im >= Qm ? (om = Vm, Om = Im) : Qm >= jm ? (om = qm, Om = jm) : (om = Km, Om = Qm);
        for (var nm = Em * (Rm - 1), Jm = Em * om, cm = 0; cm < Em; ++cm, ++nm, ++Jm) {
          var zm = wm[nm];
          wm[nm] = wm[Jm], wm[Jm] = zm
        }
        var Zm = Dm[Rm - 1];
        Dm[Rm - 1] = Dm[om], Dm[om] = Zm;
        for (nm = Em * (Rm - 1), Jm = Em * (om = hm(mm, Tm, im, Rm - 1, wm, Dm, Om)), cm = 0; cm < Em; ++cm, ++nm, ++Jm) {
          zm = wm[nm];
          wm[nm] = wm[Jm], wm[Jm] = zm
        }
        Zm = Dm[Rm - 1];
        if (Dm[Rm - 1] = Dm[om], Dm[om] = Zm, pm < om) {
          for (Rm = om - 1; im < Rm && wm[Em * (Rm - 1) + Tm] === Om;) Rm -= 1;
          Rm += 1
        } else {
          if (!(om < pm)) break;
          for (im = om + 1; im < Rm && wm[Em * im + Tm] === Om;) im += 1
        }
      }
      return hm(mm, Tm, fm, pm, wm, Dm, wm[Em * pm + Tm])
    };
    var hm = fm(38427)("lo<p0", ["p0"]),
      Am = 8;

    function am(mm, Tm, fm, hm, Am, am) {
      for (var xm = 2 * mm, wm = xm * (fm + 1) + Tm, Dm = fm + 1; Dm < hm; ++Dm, wm += xm)
        for (var im = Am[wm], Rm = Dm, pm = xm * (Dm - 1); Rm > fm && Am[pm + Tm] > im; --Rm, pm -= xm) {
          for (var Em = pm, om = pm + xm, Om = 0; Om < xm; ++Om, ++Em, ++om) {
            var Ym = Am[Em];
            Am[Em] = Am[om], Am[om] = Ym
          }
          var qm = am[Rm];
          am[Rm] = am[Rm - 1], am[Rm - 1] = qm
        }
    }
  },
  38427: mm => {
    mm.exports = function(mm, fm) {
      var hm = "abcdef".split("").concat(fm),
        Am = [];
      mm.indexOf("lo") >= 0 && Am.push("lo=e[k+n]");
      mm.indexOf("hi") >= 0 && Am.push("hi=e[k+o]");
      return hm.push(Tm.replace("_", Am.join()).replace("$", mm)), Function.apply(void 0, hm)
    };
    var Tm = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  38400: mm => {
    mm.exports = function(mm, hm) {
      hm <= 4 * Tm ? fm(0, hm - 1, mm) : im(0, hm - 1, mm)
    };
    var Tm = 32;

    function fm(mm, Tm, fm) {
      for (var hm = 2 * (mm + 1), Am = mm + 1; Am <= Tm; ++Am) {
        for (var am = fm[hm++], xm = fm[hm++], wm = Am, Dm = hm - 2; wm-- > mm;) {
          var im = fm[Dm - 2],
            Rm = fm[Dm - 1];
          if (im < am) break;
          if (im === am && Rm < xm) break;
          fm[Dm] = im, fm[Dm + 1] = Rm, Dm -= 2
        }
        fm[Dm] = am, fm[Dm + 1] = xm
      }
    }

    function hm(mm, Tm, fm) {
      Tm *= 2;
      var hm = fm[mm *= 2],
        Am = fm[mm + 1];
      fm[mm] = fm[Tm], fm[mm + 1] = fm[Tm + 1], fm[Tm] = hm, fm[Tm + 1] = Am
    }

    function Am(mm, Tm, fm) {
      Tm *= 2, fm[mm *= 2] = fm[Tm], fm[mm + 1] = fm[Tm + 1]
    }

    function am(mm, Tm, fm, hm) {
      Tm *= 2, fm *= 2;
      var Am = hm[mm *= 2],
        am = hm[mm + 1];
      hm[mm] = hm[Tm], hm[mm + 1] = hm[Tm + 1], hm[Tm] = hm[fm], hm[Tm + 1] = hm[fm + 1], hm[fm] = Am, hm[fm + 1] = am
    }

    function xm(mm, Tm, fm, hm, Am) {
      Tm *= 2, Am[mm *= 2] = Am[Tm], Am[Tm] = fm, Am[mm + 1] = Am[Tm + 1], Am[Tm + 1] = hm
    }

    function wm(mm, Tm, fm) {
      Tm *= 2;
      var hm = fm[mm *= 2],
        Am = fm[Tm];
      return !(hm < Am) && (hm !== Am || fm[mm + 1] > fm[Tm + 1])
    }

    function Dm(mm, Tm, fm, hm) {
      var Am = hm[mm *= 2];
      return Am < Tm || Am === Tm && hm[mm + 1] < fm
    }

    function im(mm, Rm, pm) {
      var Em = (Rm - mm + 1) / 6 | 0,
        om = mm + Em,
        Om = Rm - Em,
        Ym = mm + Rm >> 1,
        qm = Ym - Em,
        jm = Ym + Em,
        Vm = om,
        Im = qm,
        Km = Ym,
        Qm = jm,
        nm = Om,
        Jm = mm + 1,
        cm = Rm - 1,
        zm = 0;
      wm(Vm, Im, pm) && (zm = Vm, Vm = Im, Im = zm), wm(Qm, nm, pm) && (zm = Qm, Qm = nm, nm = zm), wm(Vm, Km, pm) && (zm = Vm, Vm = Km, Km = zm), wm(Im, Km, pm) && (zm = Im, Im = Km, Km = zm), wm(Vm, Qm, pm) && (zm = Vm, Vm = Qm, Qm = zm), wm(Km, Qm, pm) && (zm = Km, Km = Qm, Qm = zm), wm(Im, nm, pm) && (zm = Im, Im = nm, nm = zm), wm(Im, Km, pm) && (zm = Im, Im = Km, Km = zm), wm(Qm, nm, pm) && (zm = Qm, Qm = nm, nm = zm);
      for (var Zm = pm[2 * Im], km = pm[2 * Im + 1], bm = pm[2 * Qm], Sm = pm[2 * Qm + 1], em = 2 * Vm, Nm = 2 * Km, Gm = 2 * nm, Xm = 2 * om, Pm = 2 * Ym, Hm = 2 * Om, ym = 0; ym < 2; ++ym) {
        var Cm = pm[em + ym],
          rm = pm[Nm + ym],
          sm = pm[Gm + ym];
        pm[Xm + ym] = Cm, pm[Pm + ym] = rm, pm[Hm + ym] = sm
      }
      Am(qm, mm, pm), Am(jm, Rm, pm);
      for (var lm = Jm; lm <= cm; ++lm)
        if (Dm(lm, Zm, km, pm)) lm !== Jm && hm(lm, Jm, pm), ++Jm;
        else if (!Dm(lm, bm, Sm, pm))
        for (;;) {
          if (Dm(cm, bm, Sm, pm)) {
            Dm(cm, Zm, km, pm) ? (am(lm, Jm, cm, pm), ++Jm, --cm) : (hm(lm, cm, pm), --cm);
            break
          }
          if (--cm < lm) break
        }
      xm(mm, Jm - 1, Zm, km, pm), xm(Rm, cm + 1, bm, Sm, pm), Jm - 2 - mm <= Tm ? fm(mm, Jm - 2, pm) : im(mm, Jm - 2, pm), Rm - (cm + 2) <= Tm ? fm(cm + 2, Rm, pm) : im(cm + 2, Rm, pm), cm - Jm <= Tm ? fm(Jm, cm, pm) : im(Jm, cm, pm)
    }
  },
  38394: (mm, Tm, fm) => {
    mm.exports = {
      init: function(mm) {
        var Tm = Am.nextPow2(mm);
        Dm.length < Tm && (hm.free(Dm), Dm = hm.mallocInt32(Tm));
        im.length < Tm && (hm.free(im), im = hm.mallocInt32(Tm));
        Rm.length < Tm && (hm.free(Rm), Rm = hm.mallocInt32(Tm));
        pm.length < Tm && (hm.free(pm), pm = hm.mallocInt32(Tm));
        Em.length < Tm && (hm.free(Em), Em = hm.mallocInt32(Tm));
        om.length < Tm && (hm.free(om), om = hm.mallocInt32(Tm));
        var fm = 8 * Tm;
        Om.length < fm && (hm.free(Om), Om = hm.mallocDouble(fm))
      },
      sweepBipartite: function(mm, Tm, fm, hm, Am, wm, Em, om, jm, Vm) {
        for (var Im = 0, Km = 2 * mm, Qm = mm - 1, nm = Km - 1, Jm = fm; Jm < hm; ++Jm) {
          var cm = wm[Jm],
            zm = Km * Jm;
          Om[Im++] = Am[zm + Qm], Om[Im++] = -(cm + 1), Om[Im++] = Am[zm + nm], Om[Im++] = cm
        }
        for (Jm = Em; Jm < om; ++Jm) {
          cm = Vm[Jm] + xm;
          var Zm = Km * Jm;
          Om[Im++] = jm[Zm + Qm], Om[Im++] = -cm, Om[Im++] = jm[Zm + nm], Om[Im++] = cm
        }
        var km = Im >>> 1;
        am(Om, km);
        var bm = 0,
          Sm = 0;
        for (Jm = 0; Jm < km; ++Jm) {
          var em = 0 | Om[2 * Jm + 1];
          if (em >= xm) Ym(Rm, pm, Sm--, em = em - xm | 0);
          else if (em >= 0) Ym(Dm, im, bm--, em);
          else if (em <= -xm) {
            em = -em - xm | 0;
            for (var Nm = 0; Nm < bm; ++Nm) {
              if (void 0 !== (Gm = Tm(Dm[Nm], em))) return Gm
            }
            qm(Rm, pm, Sm++, em)
          } else {
            em = -em - 1 | 0;
            for (Nm = 0; Nm < Sm; ++Nm) {
              var Gm;
              if (void 0 !== (Gm = Tm(em, Rm[Nm]))) return Gm
            }
            qm(Dm, im, bm++, em)
          }
        }
      },
      sweepComplete: function(mm, Tm, fm, hm, Am, xm, wm, jm, Vm, Im) {
        for (var Km = 0, Qm = 2 * mm, nm = mm - 1, Jm = Qm - 1, cm = fm; cm < hm; ++cm) {
          var zm = xm[cm] + 1 << 1,
            Zm = Qm * cm;
          Om[Km++] = Am[Zm + nm], Om[Km++] = -zm, Om[Km++] = Am[Zm + Jm], Om[Km++] = zm
        }
        for (cm = wm; cm < jm; ++cm) {
          zm = Im[cm] + 1 << 1;
          var km = Qm * cm;
          Om[Km++] = Vm[km + nm], Om[Km++] = 1 | -zm, Om[Km++] = Vm[km + Jm], Om[Km++] = 1 | zm
        }
        var bm = Km >>> 1;
        am(Om, bm);
        var Sm = 0,
          em = 0,
          Nm = 0;
        for (cm = 0; cm < bm; ++cm) {
          var Gm = 0 | Om[2 * cm + 1],
            Xm = 1 & Gm;
          if (cm < bm - 1 && Gm >> 1 === Om[2 * cm + 3] >> 1 && (Xm = 2, cm += 1), Gm < 0) {
            for (var Pm = -(Gm >> 1) - 1, Hm = 0; Hm < Nm; ++Hm) {
              if (void 0 !== (ym = Tm(Em[Hm], Pm))) return ym
            }
            if (0 !== Xm)
              for (Hm = 0; Hm < Sm; ++Hm) {
                if (void 0 !== (ym = Tm(Dm[Hm], Pm))) return ym
              }
            if (1 !== Xm)
              for (Hm = 0; Hm < em; ++Hm) {
                var ym;
                if (void 0 !== (ym = Tm(Rm[Hm], Pm))) return ym
              }
            0 === Xm ? qm(Dm, im, Sm++, Pm) : 1 === Xm ? qm(Rm, pm, em++, Pm) : 2 === Xm && qm(Em, om, Nm++, Pm)
          } else {
            Pm = (Gm >> 1) - 1;
            0 === Xm ? Ym(Dm, im, Sm--, Pm) : 1 === Xm ? Ym(Rm, pm, em--, Pm) : 2 === Xm && Ym(Em, om, Nm--, Pm)
          }
        }
      },
      scanBipartite: function(mm, Tm, fm, hm, Am, wm, Rm, pm, Em, om, jm, Vm) {
        var Im = 0,
          Km = 2 * mm,
          Qm = Tm,
          nm = Tm + mm,
          Jm = 1,
          cm = 1;
        hm ? cm = xm : Jm = xm;
        for (var zm = Am; zm < wm; ++zm) {
          var Zm = zm + Jm,
            km = Km * zm;
          Om[Im++] = Rm[km + Qm], Om[Im++] = -Zm, Om[Im++] = Rm[km + nm], Om[Im++] = Zm
        }
        for (zm = Em; zm < om; ++zm) {
          Zm = zm + cm;
          var bm = Km * zm;
          Om[Im++] = jm[bm + Qm], Om[Im++] = -Zm
        }
        var Sm = Im >>> 1;
        am(Om, Sm);
        var em = 0;
        for (zm = 0; zm < Sm; ++zm) {
          var Nm = 0 | Om[2 * zm + 1];
          if (Nm < 0) {
            var Gm = !1;
            if ((Zm = -Nm) >= xm ? (Gm = !hm, Zm -= xm) : (Gm = !!hm, Zm -= 1), Gm) qm(Dm, im, em++, Zm);
            else {
              var Xm = Vm[Zm],
                Pm = Km * Zm,
                Hm = jm[Pm + Tm + 1],
                ym = jm[Pm + Tm + 1 + mm];
              mm: for (var Cm = 0; Cm < em; ++Cm) {
                var rm = Dm[Cm],
                  sm = Km * rm;
                if (!(ym < Rm[sm + Tm + 1] || Rm[sm + Tm + 1 + mm] < Hm)) {
                  for (var lm = Tm + 2; lm < mm; ++lm)
                    if (jm[Pm + lm + mm] < Rm[sm + lm] || Rm[sm + lm + mm] < jm[Pm + lm]) continue mm;
                  var Mm, um = pm[rm];
                  if (void 0 !== (Mm = hm ? fm(Xm, um) : fm(um, Xm))) return Mm
                }
              }
            }
          } else Ym(Dm, im, em--, Nm - Jm)
        }
      },
      scanComplete: function(mm, Tm, fm, hm, Am, wm, im, Rm, pm, Em, om) {
        for (var Ym = 0, qm = 2 * mm, jm = Tm, Vm = Tm + mm, Im = hm; Im < Am; ++Im) {
          var Km = Im + xm,
            Qm = qm * Im;
          Om[Ym++] = wm[Qm + jm], Om[Ym++] = -Km, Om[Ym++] = wm[Qm + Vm], Om[Ym++] = Km
        }
        for (Im = Rm; Im < pm; ++Im) {
          Km = Im + 1;
          var nm = qm * Im;
          Om[Ym++] = Em[nm + jm], Om[Ym++] = -Km
        }
        var Jm = Ym >>> 1;
        am(Om, Jm);
        var cm = 0;
        for (Im = 0; Im < Jm; ++Im) {
          var zm = 0 | Om[2 * Im + 1];
          if (zm < 0) {
            if ((Km = -zm) >= xm) Dm[cm++] = Km - xm;
            else {
              var Zm = om[Km -= 1],
                km = qm * Km,
                bm = Em[km + Tm + 1],
                Sm = Em[km + Tm + 1 + mm];
              mm: for (var em = 0; em < cm; ++em) {
                var Nm = Dm[em],
                  Gm = im[Nm];
                if (Gm === Zm) break;
                var Xm = qm * Nm;
                if (!(Sm < wm[Xm + Tm + 1] || wm[Xm + Tm + 1 + mm] < bm)) {
                  for (var Pm = Tm + 2; Pm < mm; ++Pm)
                    if (Em[km + Pm + mm] < wm[Xm + Pm] || wm[Xm + Pm + mm] < Em[km + Pm]) continue mm;
                  var Hm = fm(Gm, Zm);
                  if (void 0 !== Hm) return Hm
                }
              }
            }
          } else {
            for (Km = zm - xm, em = cm - 1; em >= 0; --em)
              if (Dm[em] === Km) {
                for (Pm = em + 1; Pm < cm; ++Pm) Dm[Pm - 1] = Dm[Pm];
                break
              }-- cm
          }
        }
      }
    };
    var hm = fm(38362),
      Am = fm(38369),
      am = fm(38400),
      xm = 1 << 28,
      wm = 1024,
      Dm = hm.mallocInt32(wm),
      im = hm.mallocInt32(wm),
      Rm = hm.mallocInt32(wm),
      pm = hm.mallocInt32(wm),
      Em = hm.mallocInt32(wm),
      om = hm.mallocInt32(wm),
      Om = hm.mallocDouble(8192);

    function Ym(mm, Tm, fm, hm) {
      var Am = Tm[hm],
        am = mm[fm - 1];
      mm[Am] = am, Tm[am] = Am
    }

    function qm(mm, Tm, fm, hm) {
      mm[fm] = hm, Tm[hm] = fm
    }
  },
  38377: mm => {
    function Tm(mm, fm, hm) {
      var Am = 0 | mm[hm];
      if (Am <= 0) return [];
      var am, xm = new Array(Am);
      if (hm === mm.length - 1)
        for (am = 0; am < Am; ++am) xm[am] = fm;
      else
        for (am = 0; am < Am; ++am) xm[am] = Tm(mm, fm, hm + 1);
      return xm
    }
    mm.exports = function(mm, fm) {
      switch ("undefined" === typeof fm && (fm = 0), typeof mm) {
        case "number":
          if (mm > 0) return function(mm, Tm) {
            var fm, hm;
            for (fm = new Array(mm), hm = 0; hm < mm; ++hm) fm[hm] = Tm;
            return fm
          }(0 | mm, fm);
          break;
        case "object":
          if ("number" === typeof mm.length) return Tm(mm, fm, 0)
      }
      return []
    }
  },
  38323: (mm, Tm, fm) => {
    mm.exports = function() {
      var mm = this;
      this.components = {}, this.comps = this.components;
      var Tm = this.components,
        fm = 1,
        Am = {},
        am = [],
        xm = [],
        wm = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function Dm(mm, fm) {
        var hm = Tm[fm],
          am = Am[fm],
          xm = am.hash[mm];
        xm && (am.remove(mm), hm.oN && (hm.multi ? (xm.forEach((Tm => {
          Tm && hm.oN(mm, Tm)
        })), xm.length = 0) : hm.oN(mm, xm)), wm.removals.push(am), im())
      }

      function im() {
        wm.timeout || (wm.timeout = !0, setTimeout(Rm, 1))
      }

      function Rm() {
        wm.timeout = !1, pm()
      }

      function pm() {
        wm.multiComps.length && function(mm) {
          for (var Tm = 0; Tm < mm.length; Tm++) {
            var {
              entID: fm,
              data: hm
            } = mm[Tm], Am = hm.hash[fm];
            if (Am) {
              for (var am = 0; am < Am.length; am++) Am[am] || (Am.splice(am, 1), am--);
              0 === Am.length && (hm.remove(fm), wm.removals.push(hm))
            }
          }
          mm.length = 0
        }(wm.multiComps), wm.removals.length && function(mm) {
          for (var Tm = 0; Tm < mm.length; Tm++) {
            mm[Tm].flush()
          }
          mm.length = 0
        }(wm.removals)
      }
      this.HY = Am, this._systems = am, this._renderSystems = xm, this.lB = function(Tm) {
        var hm = fm++;
        return Array.isArray(Tm) && Tm.forEach((Tm => mm.vG(hm, Tm))), hm
      }, this.deleteEntity = function(Tm) {
        return Object.keys(Am).forEach((mm => {
          Am[mm].hash[Tm] && Dm(Tm, mm)
        })), mm
      }, this.rTm = function(mm) {
        if (!mm) throw new Error("Missing component definition");
        var fm = mm.name;
        if (!fm) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof fm) throw new Error("Component name must be a string.");
        if ("" === fm) throw new Error("Component name must be a non-empty string.");
        if (Am[fm]) throw new Error(`Component ${fm} already exists.`);
        var wm = {};
        return wm.name = fm, wm.multi = !!mm.multi, wm.order = isNaN(mm.order) ? 99 : mm.order, wm.stateConstructor = mm.stateConstructor || null, wm.state = mm.state || {}, wm.pI = mm.pI || null, wm.oN = mm.oN || null, wm.system = mm.system || null, wm.JI = mm.JI || null, Tm[fm] = wm, Am[fm] = new hm, Am[fm]._pendingMultiCleanup = !1, Am[fm]._multiCleanupIDs = wm.multi ? [] : null, wm.system && (am.push(fm), am.sort(((mm, fm) => Tm[mm].order - Tm[fm].order))), wm.JI && (xm.push(fm), xm.sort(((mm, fm) => Tm[mm].order - Tm[fm].order))), fm
      }, this.overwriteComponent = function(mm, fm) {
        var hm = Tm[mm];
        if (!hm) throw new Error(`Unknown component: ${mm}`);
        if (!fm) throw new Error("Missing component definition");
        if (hm.name !== fm.name) throw new Error("Overwriting component must use the same name property.");
        var wm = {};
        wm.name = mm, wm.multi = !!fm.multi, wm.order = isNaN(fm.order) ? 99 : fm.order, wm.state = fm.state || {}, wm.pI = fm.pI || null, wm.oN = fm.oN || null, wm.system = fm.system || null, wm.JI = fm.JI || null, Tm[mm] = wm, Am[mm]._pendingMultiCleanup = !1, Am[mm]._multiCleanupIDs = wm.multi ? [] : null;
        var Dm = am.indexOf(mm);
        wm.system && Dm < 0 && am.push(mm), !wm.system && Dm >= 0 && am.splice(Dm, 1), am.sort(((mm, fm) => Tm[mm].order - Tm[fm].order));
        var im = xm.indexOf(mm);
        wm.JI && im < 0 && xm.push(mm), !wm.JI && im >= 0 && xm.splice(im, 1), xm.sort(((mm, fm) => Tm[mm].order - Tm[fm].order));
        var Rm = wm.state;
        return this.sG(mm).forEach((mm => {
          for (var Tm in Rm) Tm in mm || (mm[Tm] = Rm[Tm]);
          wm.pI && wm.pI(mm.lG, mm)
        })), mm
      }, this.deleteComponent = function(fm) {
        var hm = Am[fm];
        if (!hm) throw new Error(`Unknown component: ${fm}`);
        hm.flush(), hm.list.forEach((mm => {
          mm && Dm(mm.lG || mm[0].lG, fm)
        }));
        var wm = am.indexOf(fm),
          im = xm.indexOf(fm);
        return wm > -1 && am.splice(wm, 1), im > -1 && xm.splice(im, 1), Am[fm].dispose(), delete Am[fm], delete Tm[fm], mm
      }, this.vG = function(mm, fm, hm) {
        var am, xm = Tm[fm],
          wm = Am[fm];
        if (!wm) throw new Error(`Unknown component: ${fm}.`);
        if (wm.hash[mm] && !xm.multi) throw new Error(`Entity ${mm} already has component: ${fm}.`);
        if (xm.stateConstructor) {
          if (!(am = new xm.stateConstructor).hasOwnProperty("lG")) throw new Error(`Component ${xm.name} stateConstructor type does not have property __id`);
          Object.assign(am, xm.state, hm)
        } else am = {
          lG: mm,
          ...xm.state,
          ...hm
        };
        if (am.lG = mm, xm.multi) {
          var Dm = wm.hash[mm];
          Dm || (Dm = [], wm.add(mm, Dm)), Dm.push(am)
        } else wm.add(mm, am);
        return xm.pI && xm.pI(mm, am), this
      }, this.Pmm = function(mm, Tm) {
        var fm = Am[Tm];
        if (!fm) throw new Error(`Unknown component: ${Tm}.`);
        return !!fm.hash[mm]
      }, this.WG = function(Tm, fm) {
        if (!Am[fm]) throw new Error(`Unknown component: ${fm}.`);
        return Dm(Tm, fm), mm
      }, this.getState = function(mm, Tm) {
        var fm = Am[Tm];
        if (!fm) throw new Error(`Unknown component: ${Tm}.`);
        return fm.hash[mm]
      }, this.sG = function(mm) {
        var Tm = Am[mm];
        if (!Tm) throw new Error(`Unknown component: ${mm}.`);
        return pm(), Tm.list
      }, this.VTm = function(mm) {
        if (!Am[mm]) throw new Error(`Unknown component: ${mm}.`);
        var Tm = Am[mm].hash;
        return mm => Tm[mm]
      }, this.cTm = function(mm) {
        if (!Am[mm]) throw new Error(`Unknown component: ${mm}.`);
        var Tm = Am[mm].hash;
        return mm => !!Tm[mm]
      }, this.DE = function(fm) {
        pm();
        for (var hm = 0; hm < am.length; hm++) {
          var xm = am[hm],
            wm = Tm[xm],
            Dm = Am[xm];
          wm.system(fm, Dm.list), pm()
        }
        return mm
      }, this.render = function(fm) {
        pm();
        for (var hm = 0; hm < xm.length; hm++) {
          var am = xm[hm],
            wm = Tm[am],
            Dm = Am[am];
          wm.JI(fm, Dm.list), pm()
        }
        return mm
      }, this.removeMultiComponent = function(fm, hm, am) {
        var xm = Tm[hm],
          Dm = Am[hm];
        if (!Dm) throw new Error(`Unknown component: ${hm}.`);
        if (!xm.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(mm, Tm, fm, hm) {
          var Am = fm.hash[mm];
          if (Am) {
            var am = Am[hm];
            am && (Am[hm] = null, Tm.oN && Tm.oN(mm, am), wm.multiComps.push({
              entID: mm,
              data: fm
            }), im())
          }
        }(fm, xm, Dm, am), mm
      }
    };
    var hm = fm(38328)
  },
  38328: mm => {
    function Tm(mm, Tm) {
      var fm = mm._map[Tm];
      if (delete mm.hash[Tm], delete mm._map[Tm], fm === mm.list.length - 1) mm.list.pop(), mm._idList.pop();
      else {
        var hm = mm.list.pop();
        mm.list[fm] = hm;
        var Am = mm._idList.pop();
        mm._idList[fm] = Am, mm._map[Am] = fm
      }
    }
    mm.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(mm, Tm) {
        if ("number" === typeof this._map[mm]) {
          var fm = this._map[mm];
          this.hash[mm] = Tm, this.list[fm] = Tm, this._idList[fm] = mm
        } else this._map[mm] = this.list.length, this.hash[mm] = Tm, this.list.push(Tm), this._idList.push(mm)
      }
      remove(mm) {
        var Tm = this._map[mm];
        this.hash[mm] = null, this.list[Tm] = null, this._pendingRemovals.push(mm)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var mm = 0; mm < this._pendingRemovals.length; mm++) {
          var fm = this._pendingRemovals[mm];
          null === this.hash[fm] && Tm(this, fm)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  38108: (mm, Tm, fm) => {
    mm = fm.nmd(mm);
    var hm = "__lodash_hash_undefined__",
      Am = 9007199254740991,
      am = "[object Arguments]",
      xm = "[object Boolean]",
      wm = "[object Date]",
      Dm = "[object Function]",
      im = "[object GeneratorFunction]",
      Rm = "[object Map]",
      pm = "[object Number]",
      Em = "[object Object]",
      om = "[object Promise]",
      Om = "[object RegExp]",
      Ym = "[object Set]",
      qm = "[object String]",
      jm = "[object Symbol]",
      Vm = "[object WeakMap]",
      Im = "[object ArrayBuffer]",
      Km = "[object DataView]",
      Qm = "[object Float32Array]",
      nm = "[object Float64Array]",
      Jm = "[object Int8Array]",
      cm = "[object Int16Array]",
      zm = "[object Int32Array]",
      Zm = "[object Uint8Array]",
      km = "[object Uint8ClampedArray]",
      bm = "[object Uint16Array]",
      Sm = "[object Uint32Array]",
      em = /\w*$/,
      Nm = /^\[object .+?Constructor\]$/,
      Gm = /^(?:0|[1-9]\d*)$/,
      Xm = {};
    Xm[am] = Xm["[object Array]"] = Xm[Im] = Xm[Km] = Xm[xm] = Xm[wm] = Xm[Qm] = Xm[nm] = Xm[Jm] = Xm[cm] = Xm[zm] = Xm[Rm] = Xm[pm] = Xm[Em] = Xm[Om] = Xm[Ym] = Xm[qm] = Xm[jm] = Xm[Zm] = Xm[km] = Xm[bm] = Xm[Sm] = !0, Xm["[object Error]"] = Xm[Dm] = Xm[Vm] = !1;
    var Pm = "object" == typeof fm.g && fm.g && fm.g.Object === Object && fm.g,
      Hm = "object" == typeof self && self && self.Object === Object && self,
      ym = Pm || Hm || Function("return this")(),
      Cm = Tm && !Tm.nodeType && Tm,
      rm = Cm && mm && !mm.nodeType && mm,
      sm = rm && rm.exports === Cm;

    function lm(mm, Tm) {
      return mm.set(Tm[0], Tm[1]), mm
    }

    function Mm(mm, Tm) {
      return mm.add(Tm), mm
    }

    function um(mm, Tm, fm, hm) {
      var Am = -1,
        am = mm ? mm.length : 0;
      for (hm && am && (fm = mm[++Am]); ++Am < am;) fm = Tm(fm, mm[Am], Am, mm);
      return fm
    }

    function Bm(mm) {
      var Tm = !1;
      if (null != mm && "function" != typeof mm.toString) try {
        Tm = !!(mm + "")
      } catch (fm) {}
      return Tm
    }

    function Lm(mm) {
      var Tm = -1,
        fm = Array(mm.size);
      return mm.forEach((function(mm, hm) {
        fm[++Tm] = [hm, mm]
      })), fm
    }

    function tm(mm, Tm) {
      return function(fm) {
        return mm(Tm(fm))
      }
    }

    function Um(mm) {
      var Tm = -1,
        fm = Array(mm.size);
      return mm.forEach((function(mm) {
        fm[++Tm] = mm
      })), fm
    }
    var dm = Array.prototype,
      gm = Function.prototype,
      Wm = Object.prototype,
      Fm = ym["__core-js_shared__"],
      mT = function() {
        var mm = /[^.]+$/.exec(Fm && Fm.keys && Fm.keys.IE_PROTO || "");
        return mm ? "Symbol(src)_1." + mm : ""
      }(),
      TT = gm.toString,
      fT = Wm.hasOwnProperty,
      hT = Wm.toString,
      AT = RegExp("^" + TT.call(fT).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      aT = sm ? ym.XO : void 0,
      xT = ym.Symbol,
      wT = ym.Uint8Array,
      DT = tm(Object.getPrototypeOf, Object),
      iT = Object.create,
      RT = Wm.propertyIsEnumerable,
      pT = dm.splice,
      ET = Object.getOwnPropertySymbols,
      oT = aT ? aT.isBuffer : void 0,
      OT = tm(Object.keys, Object),
      YT = lT(ym, "DataView"),
      qT = lT(ym, "Map"),
      jT = lT(ym, "Promise"),
      VT = lT(ym, "Set"),
      IT = lT(ym, "WeakMap"),
      KT = lT(Object, "create"),
      QT = vT(YT),
      nT = vT(qT),
      JT = vT(jT),
      cT = vT(VT),
      zT = vT(IT),
      ZT = xT ? xT.prototype : void 0,
      kT = ZT ? ZT.valueOf : void 0;

    function bT(mm) {
      var Tm = -1,
        fm = mm ? mm.length : 0;
      for (this.clear(); ++Tm < fm;) {
        var hm = mm[Tm];
        this.set(hm[0], hm[1])
      }
    }

    function ST(mm) {
      var Tm = -1,
        fm = mm ? mm.length : 0;
      for (this.clear(); ++Tm < fm;) {
        var hm = mm[Tm];
        this.set(hm[0], hm[1])
      }
    }

    function eT(mm) {
      var Tm = -1,
        fm = mm ? mm.length : 0;
      for (this.clear(); ++Tm < fm;) {
        var hm = mm[Tm];
        this.set(hm[0], hm[1])
      }
    }

    function NT(mm) {
      this.__data__ = new ST(mm)
    }

    function GT(mm, Tm) {
      var fm = UT(mm) || function(mm) {
          return function(mm) {
            return function(mm) {
              return !!mm && "object" == typeof mm
            }(mm) && dT(mm)
          }(mm) && fT.call(mm, "callee") && (!RT.call(mm, "callee") || hT.call(mm) == am)
        }(mm) ? function(mm, Tm) {
          for (var fm = -1, hm = Array(mm); ++fm < mm;) hm[fm] = Tm(fm);
          return hm
        }(mm.length, String) : [],
        hm = fm.length,
        Am = !!hm;
      for (var xm in mm) !Tm && !fT.call(mm, xm) || Am && ("length" == xm || BT(xm, hm)) || fm.push(xm);
      return fm
    }

    function XT(mm, Tm, fm) {
      var hm = mm[Tm];
      fT.call(mm, Tm) && tT(hm, fm) && (void 0 !== fm || Tm in mm) || (mm[Tm] = fm)
    }

    function PT(mm, Tm) {
      for (var fm = mm.length; fm--;)
        if (tT(mm[fm][0], Tm)) return fm;
      return -1
    }

    function HT(mm, Tm, fm, hm, Am, om, Vm) {
      var Nm;
      if (hm && (Nm = om ? hm(mm, Am, om, Vm) : hm(mm)), void 0 !== Nm) return Nm;
      if (!FT(mm)) return mm;
      var Gm = UT(mm);
      if (Gm) {
        if (Nm = function(mm) {
            var Tm = mm.length,
              fm = mm.constructor(Tm);
            Tm && "string" == typeof mm[0] && fT.call(mm, "index") && (fm.index = mm.index, fm.input = mm.input);
            return fm
          }(mm), !Tm) return function(mm, Tm) {
          var fm = -1,
            hm = mm.length;
          Tm || (Tm = Array(hm));
          for (; ++fm < hm;) Tm[fm] = mm[fm];
          return Tm
        }(mm, Nm)
      } else {
        var Pm = uT(mm),
          Hm = Pm == Dm || Pm == im;
        if (gT(mm)) return function(mm, Tm) {
          if (Tm) return mm.slice();
          var fm = new mm.constructor(mm.length);
          return mm.copy(fm), fm
        }(mm, Tm);
        if (Pm == Em || Pm == am || Hm && !om) {
          if (Bm(mm)) return om ? mm : {};
          if (Nm = function(mm) {
              return "function" != typeof mm.constructor || LT(mm) ? {} : (Tm = DT(mm), FT(Tm) ? iT(Tm) : {});
              var Tm
            }(Hm ? {} : mm), !Tm) return function(mm, Tm) {
            return rT(mm, MT(mm), Tm)
          }(mm, function(mm, Tm) {
            return mm && rT(Tm, mf(Tm), mm)
          }(Nm, mm))
        } else {
          if (!Xm[Pm]) return om ? mm : {};
          Nm = function(mm, Tm, fm, hm) {
            var Am = mm.constructor;
            switch (Tm) {
              case Im:
                return CT(mm);
              case xm:
              case wm:
                return new Am(+mm);
              case Km:
                return function(mm, Tm) {
                  var fm = Tm ? CT(mm.buffer) : mm.buffer;
                  return new mm.constructor(fm, mm.byteOffset, mm.byteLength)
                }(mm, hm);
              case Qm:
              case nm:
              case Jm:
              case cm:
              case zm:
              case Zm:
              case km:
              case bm:
              case Sm:
                return function(mm, Tm) {
                  var fm = Tm ? CT(mm.buffer) : mm.buffer;
                  return new mm.constructor(fm, mm.byteOffset, mm.length)
                }(mm, hm);
              case Rm:
                return function(mm, Tm, fm) {
                  var hm = Tm ? fm(Lm(mm), !0) : Lm(mm);
                  return um(hm, lm, new mm.constructor)
                }(mm, hm, fm);
              case pm:
              case qm:
                return new Am(mm);
              case Om:
                return function(mm) {
                  var Tm = new mm.constructor(mm.source, em.exec(mm));
                  return Tm.lastIndex = mm.lastIndex, Tm
                }(mm);
              case Ym:
                return function(mm, Tm, fm) {
                  var hm = Tm ? fm(Um(mm), !0) : Um(mm);
                  return um(hm, Mm, new mm.constructor)
                }(mm, hm, fm);
              case jm:
                return am = mm, kT ? Object(kT.call(am)) : {}
            }
            var am
          }(mm, Pm, HT, Tm)
        }
      }
      Vm || (Vm = new NT);
      var ym = Vm.get(mm);
      if (ym) return ym;
      if (Vm.set(mm, Nm), !Gm) var Cm = fm ? function(mm) {
        return function(mm, Tm, fm) {
          var hm = Tm(mm);
          return UT(mm) ? hm : function(mm, Tm) {
            for (var fm = -1, hm = Tm.length, Am = mm.length; ++fm < hm;) mm[Am + fm] = Tm[fm];
            return mm
          }(hm, fm(mm))
        }(mm, mf, MT)
      }(mm) : mf(mm);
      return function(mm, Tm) {
        for (var fm = -1, hm = mm ? mm.length : 0; ++fm < hm && !1 !== Tm(mm[fm], fm, mm););
      }(Cm || mm, (function(Am, am) {
        Cm && (Am = mm[am = Am]), XT(Nm, am, HT(Am, Tm, fm, hm, am, mm, Vm))
      })), Nm
    }

    function yT(mm) {
      return !(!FT(mm) || (Tm = mm, mT && mT in Tm)) && (WT(mm) || Bm(mm) ? AT : Nm).test(vT(mm));
      var Tm
    }

    function CT(mm) {
      var Tm = new mm.constructor(mm.byteLength);
      return new wT(Tm).set(new wT(mm)), Tm
    }

    function rT(mm, Tm, fm, hm) {
      fm || (fm = {});
      for (var Am = -1, am = Tm.length; ++Am < am;) {
        var xm = Tm[Am],
          wm = hm ? hm(fm[xm], mm[xm], xm, fm, mm) : void 0;
        XT(fm, xm, void 0 === wm ? mm[xm] : wm)
      }
      return fm
    }

    function sT(mm, Tm) {
      var fm = mm.__data__;
      return function(mm) {
        var Tm = typeof mm;
        return "string" == Tm || "number" == Tm || "symbol" == Tm || "boolean" == Tm ? "__proto__" !== mm : null === mm
      }(Tm) ? fm["string" == typeof Tm ? "string" : "hash"] : fm.map
    }

    function lT(mm, Tm) {
      var fm = function(mm, Tm) {
        return null == mm ? void 0 : mm[Tm]
      }(mm, Tm);
      return yT(fm) ? fm : void 0
    }
    bT.prototype.clear = function() {
      this.__data__ = KT ? KT(null) : {}
    }, bT.prototype.delete = function(mm) {
      return this.has(mm) && delete this.__data__[mm]
    }, bT.prototype.get = function(mm) {
      var Tm = this.__data__;
      if (KT) {
        var fm = Tm[mm];
        return fm === hm ? void 0 : fm
      }
      return fT.call(Tm, mm) ? Tm[mm] : void 0
    }, bT.prototype.has = function(mm) {
      var Tm = this.__data__;
      return KT ? void 0 !== Tm[mm] : fT.call(Tm, mm)
    }, bT.prototype.set = function(mm, Tm) {
      return this.__data__[mm] = KT && void 0 === Tm ? hm : Tm, this
    }, ST.prototype.clear = function() {
      this.__data__ = []
    }, ST.prototype.delete = function(mm) {
      var Tm = this.__data__,
        fm = PT(Tm, mm);
      return !(fm < 0) && (fm == Tm.length - 1 ? Tm.pop() : pT.call(Tm, fm, 1), !0)
    }, ST.prototype.get = function(mm) {
      var Tm = this.__data__,
        fm = PT(Tm, mm);
      return fm < 0 ? void 0 : Tm[fm][1]
    }, ST.prototype.has = function(mm) {
      return PT(this.__data__, mm) > -1
    }, ST.prototype.set = function(mm, Tm) {
      var fm = this.__data__,
        hm = PT(fm, mm);
      return hm < 0 ? fm.push([mm, Tm]) : fm[hm][1] = Tm, this
    }, eT.prototype.clear = function() {
      this.__data__ = {
        hash: new bT,
        map: new(qT || ST),
        string: new bT
      }
    }, eT.prototype.delete = function(mm) {
      return sT(this, mm).delete(mm)
    }, eT.prototype.get = function(mm) {
      return sT(this, mm).get(mm)
    }, eT.prototype.has = function(mm) {
      return sT(this, mm).has(mm)
    }, eT.prototype.set = function(mm, Tm) {
      return sT(this, mm).set(mm, Tm), this
    }, NT.prototype.clear = function() {
      this.__data__ = new ST
    }, NT.prototype.delete = function(mm) {
      return this.__data__.delete(mm)
    }, NT.prototype.get = function(mm) {
      return this.__data__.get(mm)
    }, NT.prototype.has = function(mm) {
      return this.__data__.has(mm)
    }, NT.prototype.set = function(mm, Tm) {
      var fm = this.__data__;
      if (fm instanceof ST) {
        var hm = fm.__data__;
        if (!qT || hm.length < 199) return hm.push([mm, Tm]), this;
        fm = this.__data__ = new eT(hm)
      }
      return fm.set(mm, Tm), this
    };
    var MT = ET ? tm(ET, Object) : function() {
        return []
      },
      uT = function(mm) {
        return hT.call(mm)
      };

    function BT(mm, Tm) {
      return !!(Tm = null == Tm ? Am : Tm) && ("number" == typeof mm || Gm.test(mm)) && mm > -1 && mm % 1 == 0 && mm < Tm
    }

    function LT(mm) {
      var Tm = mm && mm.constructor;
      return mm === ("function" == typeof Tm && Tm.prototype || Wm)
    }

    function vT(mm) {
      if (null != mm) {
        try {
          return TT.call(mm)
        } catch (Tm) {}
        try {
          return mm + ""
        } catch (Tm) {}
      }
      return ""
    }

    function tT(mm, Tm) {
      return mm === Tm || mm !== mm && Tm !== Tm
    }(YT && uT(new YT(new ArrayBuffer(1))) != Km || qT && uT(new qT) != Rm || jT && uT(jT.resolve()) != om || VT && uT(new VT) != Ym || IT && uT(new IT) != Vm) && (uT = function(mm) {
      var Tm = hT.call(mm),
        fm = Tm == Em ? mm.constructor : void 0,
        hm = fm ? vT(fm) : void 0;
      if (hm) switch (hm) {
        case QT:
          return Km;
        case nT:
          return Rm;
        case JT:
          return om;
        case cT:
          return Ym;
        case zT:
          return Vm
      }
      return Tm
    });
    var UT = Array.isArray;

    function dT(mm) {
      return null != mm && function(mm) {
        return "number" == typeof mm && mm > -1 && mm % 1 == 0 && mm <= Am
      }(mm.length) && !WT(mm)
    }
    var gT = oT || function() {
      return !1
    };

    function WT(mm) {
      var Tm = FT(mm) ? hT.call(mm) : "";
      return Tm == Dm || Tm == im
    }

    function FT(mm) {
      var Tm = typeof mm;
      return !!mm && ("object" == Tm || "function" == Tm)
    }

    function mf(mm) {
      return dT(mm) ? GT(mm) : function(mm) {
        if (!LT(mm)) return OT(mm);
        var Tm = [];
        for (var fm in Object(mm)) fT.call(mm, fm) && "constructor" != fm && Tm.push(fm);
        return Tm
      }(mm)
    }
    mm.exports = function(mm) {
      return HT(mm, !0, !0)
    }
  },
  38550: mm => {
    function Tm(mm, Tm, fm) {
      for (var hm = mm.length, Am = -1 / 0, am = 1 / 0, xm = 0; xm < hm; xm++) {
        var wm = (fm[0][xm] - mm[xm]) / Tm[xm],
          Dm = (fm[1][xm] - mm[xm]) / Tm[xm];
        if (wm > Dm) {
          var im = wm;
          wm = Dm, Dm = im
        }
        if (Dm < Am || wm > am) return 1 / 0;
        wm > Am && (Am = wm), Dm < am && (am = Dm)
      }
      return Am > am ? 1 / 0 : Am
    }
    mm.exports = function(mm, fm, hm, Am) {
      var am = Tm(fm, hm, Am);
      if (am === 1 / 0) mm = null;
      else {
        mm = mm || [];
        for (var xm = 0; xm < fm.length; xm++) mm[xm] = fm[xm] + hm[xm] * am
      }
      return mm
    }, mm.exports.distance = Tm
  },
  37783: (mm, Tm, fm) => {
    var hm = fm(37785);

    function Am(mm) {
      for (var Tm, fm, Am = 0, am = mm.length, xm = 0; xm < mm.length;) {
        for (Tm = mm[xm], fm = 0; xm < am && mm[xm] === Tm;) ++xm, ++fm;
        Am += hm.log2(fm) / 7 | 0, Am += hm.log2(Tm >>> 0) / 7 | 0, Am += 2
      }
      return Am
    }
    Tm.size = Am, Tm.encode = function(mm, Tm) {
      Tm || (Tm = new Uint8Array(Am(mm)));
      for (var fm, hm, am = 0, xm = Tm.length, wm = 0; wm < mm.length;) {
        for (fm = mm[wm], hm = 0; wm < mm.length && mm[wm] === fm;) ++wm, ++hm;
        for (; am < xm && hm >= 128;) Tm[am++] = 128 + (127 & hm), hm >>>= 7;
        if (am >= xm) throw new Error("RLE buffer overflow");
        for (Tm[am++] = hm, fm >>>= 0; am < xm && fm >= 128;) Tm[am++] = 128 + (127 & fm), fm >>>= 7;
        if (am >= xm) throw new Error("RLE buffer overflow");
        Tm[am++] = fm
      }
      return Tm
    }, Tm.decode = function(mm, Tm) {
      for (var fm, hm, Am, am, xm = Tm.length, wm = mm.length, Dm = 0, im = 0; im < wm;) {
        for (fm = 0, hm = 0; im < wm && mm[im] >= 128;) fm += (127 & mm[im++]) << hm, hm += 7;
        if (fm += mm[im++] << hm, im >= wm) throw new Error("RLE buffer underrun");
        if (Dm + fm > xm) throw new Error("Chunk buffer overflow");
        for (Am = 0, hm = 0; im < wm && mm[im] >= 128;) Am += (127 & mm[im++]) << hm, hm += 7;
        if (im >= wm) throw new Error("RLE buffer underrun");
        for (Am += mm[im++] << hm, am = 0; am < fm; ++am) Tm[Dm++] = Am
      }
      return Tm
    }
  },
  37785: (mm, Tm) => {
    function fm(mm) {
      var Tm = 32;
      return (mm &= -mm) && Tm--, 65535 & mm && (Tm -= 16), 16711935 & mm && (Tm -= 8), 252645135 & mm && (Tm -= 4), 858993459 & mm && (Tm -= 2), 1431655765 & mm && (Tm -= 1), Tm
    }
    Tm.INT_BITS = 32, Tm.INT_MAX = 2147483647, Tm.INT_MIN = -1 << 31, Tm.sign = function(mm) {
      return (mm > 0) - (mm < 0)
    }, Tm.abs = function(mm) {
      var Tm = mm >> 31;
      return (mm ^ Tm) - Tm
    }, Tm.min = function(mm, Tm) {
      return Tm ^ (mm ^ Tm) & -(mm < Tm)
    }, Tm.max = function(mm, Tm) {
      return mm ^ (mm ^ Tm) & -(mm < Tm)
    }, Tm.isPow2 = function(mm) {
      return !(mm & mm - 1) && !!mm
    }, Tm.log2 = function(mm) {
      var Tm, fm;
      return Tm = (mm > 65535) << 4, Tm |= fm = ((mm >>>= Tm) > 255) << 3, Tm |= fm = ((mm >>>= fm) > 15) << 2, (Tm |= fm = ((mm >>>= fm) > 3) << 1) | (mm >>>= fm) >> 1
    }, Tm.log10 = function(mm) {
      return mm >= 1e9 ? 9 : mm >= 1e8 ? 8 : mm >= 1e7 ? 7 : mm >= 1e6 ? 6 : mm >= 1e5 ? 5 : mm >= 1e4 ? 4 : mm >= 1e3 ? 3 : mm >= 100 ? 2 : mm >= 10 ? 1 : 0
    }, Tm.popCount = function(mm) {
      return 16843009 * ((mm = (858993459 & (mm -= mm >>> 1 & 1431655765)) + (mm >>> 2 & 858993459)) + (mm >>> 4) & 252645135) >>> 24
    }, Tm.countTrailingZeros = fm, Tm.nextPow2 = function(mm) {
      return mm += 0 === mm, --mm, mm |= mm >>> 1, mm |= mm >>> 2, mm |= mm >>> 4, mm |= mm >>> 8, (mm |= mm >>> 16) + 1
    }, Tm.prevPow2 = function(mm) {
      return mm |= mm >>> 1, mm |= mm >>> 2, mm |= mm >>> 4, mm |= mm >>> 8, (mm |= mm >>> 16) - (mm >>> 1)
    }, Tm.parity = function(mm) {
      return mm ^= mm >>> 16, mm ^= mm >>> 8, mm ^= mm >>> 4, 27030 >>> (mm &= 15) & 1
    };
    var hm = new Array(256);
    ! function(mm) {
      for (var Tm = 0; Tm < 256; ++Tm) {
        var fm = Tm,
          hm = Tm,
          Am = 7;
        for (fm >>>= 1; fm; fm >>>= 1) hm <<= 1, hm |= 1 & fm, --Am;
        mm[Tm] = hm << Am & 255
      }
    }(hm), Tm.reverse = function(mm) {
      return hm[255 & mm] << 24 | hm[mm >>> 8 & 255] << 16 | hm[mm >>> 16 & 255] << 8 | hm[mm >>> 24 & 255]
    }, Tm.interleave2 = function(mm, Tm) {
      return (mm = 1431655765 & ((mm = 858993459 & ((mm = 252645135 & ((mm = 16711935 & ((mm &= 65535) | mm << 8)) | mm << 4)) | mm << 2)) | mm << 1)) | (Tm = 1431655765 & ((Tm = 858993459 & ((Tm = 252645135 & ((Tm = 16711935 & ((Tm &= 65535) | Tm << 8)) | Tm << 4)) | Tm << 2)) | Tm << 1)) << 1
    }, Tm.deinterleave2 = function(mm, Tm) {
      return (mm = 65535 & ((mm = 16711935 & ((mm = 252645135 & ((mm = 858993459 & ((mm = mm >>> Tm & 1431655765) | mm >>> 1)) | mm >>> 2)) | mm >>> 4)) | mm >>> 16)) << 16 >> 16
    }, Tm.interleave3 = function(mm, Tm, fm) {
      return mm = 1227133513 & ((mm = 3272356035 & ((mm = 251719695 & ((mm = 4278190335 & ((mm &= 1023) | mm << 16)) | mm << 8)) | mm << 4)) | mm << 2), (mm |= (Tm = 1227133513 & ((Tm = 3272356035 & ((Tm = 251719695 & ((Tm = 4278190335 & ((Tm &= 1023) | Tm << 16)) | Tm << 8)) | Tm << 4)) | Tm << 2)) << 1) | (fm = 1227133513 & ((fm = 3272356035 & ((fm = 251719695 & ((fm = 4278190335 & ((fm &= 1023) | fm << 16)) | fm << 8)) | fm << 4)) | fm << 2)) << 2
    }, Tm.deinterleave3 = function(mm, Tm) {
      return (mm = 1023 & ((mm = 4278190335 & ((mm = 251719695 & ((mm = 3272356035 & ((mm = mm >>> Tm & 1227133513) | mm >>> 2)) | mm >>> 4)) | mm >>> 8)) | mm >>> 16)) << 22 >> 22
    }, Tm.nextCombination = function(mm) {
      var Tm = mm | mm - 1;
      return Tm + 1 | (~Tm & -~Tm) - 1 >>> fm(mm) + 1
    }
  },
  37330: (mm, Tm, fm) => {
    fm.d(Tm, {
      Color3: () => hm.b,
      e: () => hm.c
    });
    var hm = fm(37336);
    (0, hm.d)()
  },
  37813: (mm, Tm, fm) => {
    fm.d(Tm, {
      c: () => Am
    });
    var hm = fm(37821);
    class Am {
      static GetPlanes(mm) {
        const Tm = [];
        for (let fm = 0; fm < 6; fm++) Tm.push(new hm.d(0, 0, 0, 0));
        return Am.GetPlanesToRef(mm, Tm), Tm
      }
      static GetNearPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] + fm[2], Tm.normal.y = fm[7] + fm[6], Tm.normal.z = fm[11] + fm[10], Tm.d = fm[15] + fm[14], Tm.normalize()
      }
      static GetFarPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] - fm[2], Tm.normal.y = fm[7] - fm[6], Tm.normal.z = fm[11] - fm[10], Tm.d = fm[15] - fm[14], Tm.normalize()
      }
      static GetLeftPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] + fm[0], Tm.normal.y = fm[7] + fm[4], Tm.normal.z = fm[11] + fm[8], Tm.d = fm[15] + fm[12], Tm.normalize()
      }
      static GetRightPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] - fm[0], Tm.normal.y = fm[7] - fm[4], Tm.normal.z = fm[11] - fm[8], Tm.d = fm[15] - fm[12], Tm.normalize()
      }
      static GetTopPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] - fm[1], Tm.normal.y = fm[7] - fm[5], Tm.normal.z = fm[11] - fm[9], Tm.d = fm[15] - fm[13], Tm.normalize()
      }
      static GetBottomPlaneToRef(mm, Tm) {
        const fm = mm.m;
        Tm.normal.x = fm[3] + fm[1], Tm.normal.y = fm[7] + fm[5], Tm.normal.z = fm[11] + fm[9], Tm.d = fm[15] + fm[13], Tm.normalize()
      }
      static GetPlanesToRef(mm, Tm) {
        Am.GetNearPlaneToRef(mm, Tm[0]), Am.GetFarPlaneToRef(mm, Tm[1]), Am.GetLeftPlaneToRef(mm, Tm[2]), Am.GetRightPlaneToRef(mm, Tm[3]), Am.GetTopPlaneToRef(mm, Tm[4]), Am.GetBottomPlaneToRef(mm, Tm[5])
      }
      static IsPointInFrustum(mm, Tm) {
        for (let fm = 0; fm < 6; fm++)
          if (Tm[fm].dotCoordinate(mm) < 0) return !1;
        return !0
      }
    }
  },
  37821: (mm, Tm, fm) => {
    fm.d(Tm, {
      d: () => Am
    });
    var hm = fm(37185);
    class Am {
      constructor(mm, Tm, fm, Am) {
        this.normal = new hm.p(mm, Tm, fm), this.d = Am
      }
      ahm() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Am(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let mm = this.normal.getHashCode();
        return mm = 397 * mm ^ this.d, mm
      }
      normalize() {
        const mm = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Tm = 0;
        return 0 !== mm && (Tm = 1 / mm), this.normal.x *= Tm, this.normal.y *= Tm, this.normal.z *= Tm, this.d *= Tm, this
      }
      transform(mm) {
        const Tm = Am._TmpMatrix;
        mm.invertToRef(Tm);
        const fm = Tm.m,
          hm = this.normal.x,
          am = this.normal.y,
          xm = this.normal.z,
          wm = this.d,
          Dm = hm * fm[0] + am * fm[1] + xm * fm[2] + wm * fm[3],
          im = hm * fm[4] + am * fm[5] + xm * fm[6] + wm * fm[7],
          Rm = hm * fm[8] + am * fm[9] + xm * fm[10] + wm * fm[11],
          pm = hm * fm[12] + am * fm[13] + xm * fm[14] + wm * fm[15];
        return new Am(Dm, im, Rm, pm)
      }
      dotCoordinate(mm) {
        return this.normal.x * mm.x + this.normal.y * mm.y + this.normal.z * mm.z + this.d
      }
      copyFromPoints(mm, Tm, fm) {
        const hm = Tm.x - mm.x,
          Am = Tm.y - mm.y,
          am = Tm.z - mm.z,
          xm = fm.x - mm.x,
          wm = fm.y - mm.y,
          Dm = fm.z - mm.z,
          im = Am * Dm - am * wm,
          Rm = am * xm - hm * Dm,
          pm = hm * wm - Am * xm,
          Em = Math.sqrt(im * im + Rm * Rm + pm * pm);
        let om;
        return om = 0 !== Em ? 1 / Em : 0, this.normal.x = im * om, this.normal.y = Rm * om, this.normal.z = pm * om, this.d = -(this.normal.x * mm.x + this.normal.y * mm.y + this.normal.z * mm.z), this
      }
      isFrontFacingTo(mm, Tm) {
        return hm.p.Dot(this.normal, mm) <= Tm
      }
      signedDistanceTo(mm) {
        return hm.p.Dot(mm, this.normal) + this.d
      }
      static FromArray(mm) {
        return new Am(mm[0], mm[1], mm[2], mm[3])
      }
      static FromPoints(mm, Tm, fm) {
        const hm = new Am(0, 0, 0, 0);
        return hm.copyFromPoints(mm, Tm, fm), hm
      }
      static FromPositionAndNormal(mm, Tm) {
        const fm = new Am(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(mm, Tm, fm)
      }
      static FromPositionAndNormalToRef(mm, Tm, fm) {
        return fm.normal.ZZ(Tm), fm.normal.normalize(), fm.d = -mm.dot(fm.normal), fm
      }
      static SignedDistanceToPlaneFromPositionAndNormal(mm, Tm, fm) {
        const Am = -(Tm.x * mm.x + Tm.y * mm.y + Tm.z * mm.z);
        return hm.p.Dot(fm, Tm) + Am
      }
    }
    Am._TmpMatrix = hm.e.Identity()
  },
  37181: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      Matrix: () => hm.e,
      Quaternion: () => hm.h,
      RegisterMathVector: () => hm.i,
      TmpVectors: () => hm.j,
      Vector2: () => hm.l,
      WO: () => hm.p,
      Vector4: () => hm.t
    });
    var hm = fm(37185);
    (0, hm.i)()
  },
  38151: (mm, Tm, fm) => {
    fm.d(Tm, {
      b: () => hm
    });
    class hm {
      constructor(mm, Tm, fm, hm) {
        this.x = mm, this.y = Tm, this.width = fm, this.height = hm
      }
      toGlobal(mm, Tm) {
        return new hm(this.x * mm, this.y * Tm, this.width * mm, this.height * Tm)
      }
      toGlobalToRef(mm, Tm, fm) {
        return fm.x = this.x * mm, fm.y = this.y * Tm, fm.width = this.width * mm, fm.height = this.height * Tm, this
      }
      clone() {
        return new hm(this.x, this.y, this.width, this.height)
      }
    }
  },
  37970: (mm, Tm, fm) => {
    function hm() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (mm => {
        const Tm = 16 * Math.random() | 0;
        return ("x" === mm ? Tm : 3 & Tm | 8).toString(16)
      }))
    }
    fm.d(Tm, {
      c: () => hm
    })
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);