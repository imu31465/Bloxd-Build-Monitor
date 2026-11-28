/*! For license information please see yteou.261.0b51049b.chunk.js.LICENSE.txt */
export const id = 261;
export const ids = [261, 268];
export const modules = {
  39827: dd => {
    dd.exports = function(dd) {
      return null != dd && null != dd.constructor && "function" === typeof dd.constructor.isBuffer && dd.constructor.isBuffer(dd)
    }
  },
  39812: (dd, Od, md) => {
    var Wd = md(39820),
      Fd = md(39823),
      Rd = md(39827);
    md.g.__TYPEDARRAY_POOL || (md.g.__TYPEDARRAY_POOL = {
      UINT8: Fd([32, 0]),
      UINT16: Fd([32, 0]),
      UINT32: Fd([32, 0]),
      INT8: Fd([32, 0]),
      INT16: Fd([32, 0]),
      INT32: Fd([32, 0]),
      FLOAT: Fd([32, 0]),
      DOUBLE: Fd([32, 0]),
      DATA: Fd([32, 0]),
      UINT8C: Fd([32, 0]),
      BUFFER: Fd([32, 0])
    });
    var Xd = "undefined" !== typeof Uint8ClampedArray,
      Kd = md.g.__TYPEDARRAY_POOL;
    Kd.UINT8C || (Kd.UINT8C = Fd([32, 0])), Kd.BUFFER || (Kd.BUFFER = Fd([32, 0]));
    var hd = Kd.DATA,
      vd = Kd.BUFFER;

    function Qd(dd) {
      if (dd) {
        var Od = dd.length || dd.byteLength,
          md = Wd.log2(Od);
        hd[md].push(dd)
      }
    }

    function td(dd) {
      dd = Wd.nextPow2(dd);
      var Od = Wd.log2(dd),
        md = hd[Od];
      return md.length > 0 ? md.pop() : new ArrayBuffer(dd)
    }

    function od(dd) {
      return new Uint8Array(td(dd), 0, dd)
    }

    function Nd(dd) {
      return new Uint16Array(td(2 * dd), 0, dd)
    }

    function qd(dd) {
      return new Uint32Array(td(4 * dd), 0, dd)
    }

    function Hd(dd) {
      return new Int8Array(td(dd), 0, dd)
    }

    function yd(dd) {
      return new Int16Array(td(2 * dd), 0, dd)
    }

    function bd(dd) {
      return new Int32Array(td(4 * dd), 0, dd)
    }

    function Td(dd) {
      return new Float32Array(td(4 * dd), 0, dd)
    }

    function pd(dd) {
      return new Float64Array(td(8 * dd), 0, dd)
    }

    function Yd(dd) {
      return Xd ? new Uint8ClampedArray(td(dd), 0, dd) : od(dd)
    }

    function gd(dd) {
      return new DataView(td(dd), 0, dd)
    }
    Od.free = function(dd) {
      if (Rd(dd)) vd[Wd.log2(dd.length)].push(dd);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(dd) && (dd = dd.buffer), !dd) return;
        var Od = dd.length || dd.byteLength,
          md = 0 | Wd.log2(Od);
        hd[md].push(dd)
      }
    }, Od.freeUint8 = Od.freeUint16 = Od.freeUint32 = Od.freeInt8 = Od.freeInt16 = Od.freeInt32 = Od.freeFloat32 = Od.freeFloat = Od.freeFloat64 = Od.freeDouble = Od.freeUint8Clamped = Od.freeDataView = function(dd) {
      Qd(dd.buffer)
    }, Od.freeArrayBuffer = Qd, Od.freeBuffer = function(dd) {
      vd[Wd.log2(dd.length)].push(dd)
    }, Od.malloc = function(dd, Od) {
      if (void 0 === Od || "arraybuffer" === Od) return td(dd);
      switch (Od) {
        case "uint8":
          return od(dd);
        case "uint16":
          return Nd(dd);
        case "uint32":
          return qd(dd);
        case "int8":
          return Hd(dd);
        case "int16":
          return yd(dd);
        case "int32":
          return bd(dd);
        case "float":
        case "float32":
          return Td(dd);
        case "double":
        case "float64":
          return pd(dd);
        case "uint8_clamped":
          return Yd(dd);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return gd(dd);
        default:
          return null
      }
      return null
    }, Od.mallocArrayBuffer = td, Od.mallocUint8 = od, Od.mallocUint16 = Nd, Od.mallocUint32 = qd, Od.mallocInt8 = Hd, Od.mallocInt16 = yd, Od.mallocInt32 = bd, Od.mallocFloat32 = Od.mallocFloat = Td, Od.mallocFloat64 = Od.mallocDouble = pd, Od.mallocUint8Clamped = Yd, Od.mallocDataView = gd, Od.clearCache = function() {
      for (var dd = 0; dd < 32; ++dd) Kd.UINT8[dd].length = 0, Kd.UINT16[dd].length = 0, Kd.UINT32[dd].length = 0, Kd.INT8[dd].length = 0, Kd.INT16[dd].length = 0, Kd.INT32[dd].length = 0, Kd.FLOAT[dd].length = 0, Kd.DOUBLE[dd].length = 0, Kd.UINT8C[dd].length = 0, hd[dd].length = 0, vd[dd].length = 0
    }
  },
  39820: (dd, Od) => {
    function md(dd) {
      var Od = 32;
      return (dd &= -dd) && Od--, 65535 & dd && (Od -= 16), 16711935 & dd && (Od -= 8), 252645135 & dd && (Od -= 4), 858993459 & dd && (Od -= 2), 1431655765 & dd && (Od -= 1), Od
    }
    Od.INT_BITS = 32, Od.INT_MAX = 2147483647, Od.INT_MIN = -1 << 31, Od.sign = function(dd) {
      return (dd > 0) - (dd < 0)
    }, Od.abs = function(dd) {
      var Od = dd >> 31;
      return (dd ^ Od) - Od
    }, Od.min = function(dd, Od) {
      return Od ^ (dd ^ Od) & -(dd < Od)
    }, Od.max = function(dd, Od) {
      return dd ^ (dd ^ Od) & -(dd < Od)
    }, Od.isPow2 = function(dd) {
      return !(dd & dd - 1) && !!dd
    }, Od.log2 = function(dd) {
      var Od, md;
      return Od = (dd > 65535) << 4, Od |= md = ((dd >>>= Od) > 255) << 3, Od |= md = ((dd >>>= md) > 15) << 2, (Od |= md = ((dd >>>= md) > 3) << 1) | (dd >>>= md) >> 1
    }, Od.log10 = function(dd) {
      return dd >= 1e9 ? 9 : dd >= 1e8 ? 8 : dd >= 1e7 ? 7 : dd >= 1e6 ? 6 : dd >= 1e5 ? 5 : dd >= 1e4 ? 4 : dd >= 1e3 ? 3 : dd >= 100 ? 2 : dd >= 10 ? 1 : 0
    }, Od.popCount = function(dd) {
      return 16843009 * ((dd = (858993459 & (dd -= dd >>> 1 & 1431655765)) + (dd >>> 2 & 858993459)) + (dd >>> 4) & 252645135) >>> 24
    }, Od.countTrailingZeros = md, Od.nextPow2 = function(dd) {
      return dd += 0 === dd, --dd, dd |= dd >>> 1, dd |= dd >>> 2, dd |= dd >>> 4, dd |= dd >>> 8, (dd |= dd >>> 16) + 1
    }, Od.prevPow2 = function(dd) {
      return dd |= dd >>> 1, dd |= dd >>> 2, dd |= dd >>> 4, dd |= dd >>> 8, (dd |= dd >>> 16) - (dd >>> 1)
    }, Od.parity = function(dd) {
      return dd ^= dd >>> 16, dd ^= dd >>> 8, dd ^= dd >>> 4, 27030 >>> (dd &= 15) & 1
    };
    var Wd = new Array(256);
    ! function(dd) {
      for (var Od = 0; Od < 256; ++Od) {
        var md = Od,
          Wd = Od,
          Fd = 7;
        for (md >>>= 1; md; md >>>= 1) Wd <<= 1, Wd |= 1 & md, --Fd;
        dd[Od] = Wd << Fd & 255
      }
    }(Wd), Od.reverse = function(dd) {
      return Wd[255 & dd] << 24 | Wd[dd >>> 8 & 255] << 16 | Wd[dd >>> 16 & 255] << 8 | Wd[dd >>> 24 & 255]
    }, Od.interleave2 = function(dd, Od) {
      return (dd = 1431655765 & ((dd = 858993459 & ((dd = 252645135 & ((dd = 16711935 & ((dd &= 65535) | dd << 8)) | dd << 4)) | dd << 2)) | dd << 1)) | (Od = 1431655765 & ((Od = 858993459 & ((Od = 252645135 & ((Od = 16711935 & ((Od &= 65535) | Od << 8)) | Od << 4)) | Od << 2)) | Od << 1)) << 1
    }, Od.deinterleave2 = function(dd, Od) {
      return (dd = 65535 & ((dd = 16711935 & ((dd = 252645135 & ((dd = 858993459 & ((dd = dd >>> Od & 1431655765) | dd >>> 1)) | dd >>> 2)) | dd >>> 4)) | dd >>> 16)) << 16 >> 16
    }, Od.interleave3 = function(dd, Od, md) {
      return dd = 1227133513 & ((dd = 3272356035 & ((dd = 251719695 & ((dd = 4278190335 & ((dd &= 1023) | dd << 16)) | dd << 8)) | dd << 4)) | dd << 2), (dd |= (Od = 1227133513 & ((Od = 3272356035 & ((Od = 251719695 & ((Od = 4278190335 & ((Od &= 1023) | Od << 16)) | Od << 8)) | Od << 4)) | Od << 2)) << 1) | (md = 1227133513 & ((md = 3272356035 & ((md = 251719695 & ((md = 4278190335 & ((md &= 1023) | md << 16)) | md << 8)) | md << 4)) | md << 2)) << 2
    }, Od.deinterleave3 = function(dd, Od) {
      return (dd = 1023 & ((dd = 4278190335 & ((dd = 251719695 & ((dd = 3272356035 & ((dd = dd >>> Od & 1227133513) | dd >>> 2)) | dd >>> 4)) | dd >>> 8)) | dd >>> 16)) << 22 >> 22
    }, Od.nextCombination = function(dd) {
      var Od = dd | dd - 1;
      return Od + 1 | (~Od & -~Od) - 1 >>> md(dd) + 1
    }
  },
  39807: (dd, Od, md) => {
    dd.exports = function(dd, Od, md) {
      switch (arguments.length) {
        case 1:
          return Wd = [], vd(Fd = dd, Fd, Qd, !0), Wd;
        case 2:
          return "function" === typeof Od ? vd(dd, dd, Od, !0) : function(dd, Od) {
            return Wd = [], vd(dd, Od, Qd, !1), Wd
          }(dd, Od);
        case 3:
          return vd(dd, Od, md, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var Fd
    };
    var Wd, Fd = md(39812),
      Rd = md(39836),
      Xd = md(39846);

    function Kd(dd, Od) {
      for (var md = 0; md < dd; ++md)
        if (!(Od[md] <= Od[md + dd])) return !0;
      return !1
    }

    function hd(dd, Od, md, Wd) {
      for (var Fd = 0, Rd = 0, Xd = 0, hd = dd.length; Xd < hd; ++Xd) {
        var vd = dd[Xd];
        if (!Kd(Od, vd)) {
          for (var Qd = 0; Qd < 2 * Od; ++Qd) md[Fd++] = vd[Qd];
          Wd[Rd++] = Xd
        }
      }
      return Rd
    }

    function vd(dd, Od, md, Wd) {
      var Kd = dd.length,
        vd = Od.length;
      if (!(Kd <= 0 || vd <= 0)) {
        var Qd = dd[0].length >>> 1;
        if (!(Qd <= 0)) {
          var td, od = Fd.mallocDouble(2 * Qd * Kd),
            Nd = Fd.mallocInt32(Kd);
          if ((Kd = hd(dd, Qd, od, Nd)) > 0) {
            if (1 === Qd && Wd) Rd.init(Kd), td = Rd.sweepComplete(Qd, md, 0, Kd, od, Nd, 0, Kd, od, Nd);
            else {
              var qd = Fd.mallocDouble(2 * Qd * vd),
                Hd = Fd.mallocInt32(vd);
              (vd = hd(Od, Qd, qd, Hd)) > 0 && (Rd.init(Kd + vd), td = 1 === Qd ? Rd.sweepBipartite(Qd, md, 0, Kd, od, Nd, 0, vd, qd, Hd) : Xd(Qd, md, Wd, Kd, od, Nd, vd, qd, Hd), Fd.free(qd), Fd.free(Hd))
            }
            Fd.free(od), Fd.free(Nd)
          }
          return td
        }
      }
    }

    function Qd(dd, Od) {
      Wd.push([dd, Od])
    }
  },
  39849: (dd, Od) => {
    var md = "d",
      Wd = "ax",
      Fd = "fp",
      Rd = "es",
      Xd = "rs",
      Kd = "re",
      hd = "rb",
      vd = "bs",
      Qd = "be",
      td = "bb",
      od = [md, Wd, "vv", Xd, Kd, hd, "ri", vd, Qd, td, "bi"];

    function Nd(dd) {
      var Od = "bruteForce" + (dd ? "Full" : "Partial"),
        Wd = [],
        Xd = od.slice();
      dd || Xd.splice(3, 0, Fd);
      var Kd = ["function " + Od + "(" + Xd.join() + "){"];

      function hd(Od, Fd) {
        var Xd = function(dd, Od, Wd) {
          var Fd = "bruteForce" + (dd ? "Red" : "Blue") + (Od ? "Flip" : "") + (Wd ? "Full" : ""),
            Xd = ["function ", Fd, "(", od.join(), "){", "var ", Rd, "=2*", md, ";"],
            Kd = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            hd = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (Wd ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return dd ? Xd.push(Kd, "Q", ":", hd) : Xd.push(hd, "Q", ":", Kd), Wd ? Xd.push("if(y1<x0||x1<y0)continue;") : Od ? Xd.push("if(y0<=x0||x1<y0)continue;") : Xd.push("if(y0<x0||x1<y0)continue;"), Xd.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), Od ? Xd.push("yi,xi") : Xd.push("xi,yi"), Xd.push(");if(rv!==void 0)return rv;}}}"), {
            name: Fd,
            code: Xd.join("")
          }
        }(Od, Fd, dd);
        Wd.push(Xd.code), Kd.push("return " + Xd.name + "(" + od.join() + ");")
      }
      Kd.push("if(re-rs>be-bs){"), dd ? (hd(!0, !1), Kd.push("}else{"), hd(!1, !1)) : (Kd.push("if(fp){"), hd(!0, !0), Kd.push("}else{"), hd(!0, !1), Kd.push("}}else{if(fp){"), hd(!1, !0), Kd.push("}else{"), hd(!1, !1), Kd.push("}")), Kd.push("}}return " + Od);
      var vd = Wd.join("") + Kd.join("");
      return new Function(vd)()
    }
    Od.partial = Nd(!1), Od.full = Nd(!0)
  },
  39846: (dd, Od, md) => {
    dd.exports = function(dd, Od, md, Rd, Qd, Bd, Sd, sd, ud) {
      ! function(dd, Od) {
        var md = 8 * Fd.log2(Od + 1) * (dd + 1) | 0,
          Rd = Fd.nextPow2(Yd * md);
        wd.length < Rd && (Wd.free(wd), wd = Wd.mallocInt32(Rd));
        var Xd = Fd.nextPow2(gd * md);
        Ed.length < Xd && (Wd.free(Ed), Ed = Wd.mallocDouble(Xd))
      }(dd, Rd + Sd);
      var Vd, Ad = 0,
        rd = 2 * dd;
      Jd(Ad++, 0, 0, Rd, 0, Sd, md ? 16 : 0, -1 / 0, 1 / 0), md || Jd(Ad++, 0, 0, Sd, 0, Rd, 1, -1 / 0, 1 / 0);
      for (; Ad > 0;) {
        var Gd = (Ad -= 1) * Yd,
          nd = wd[Gd],
          Ld = wd[Gd + 1],
          Pd = wd[Gd + 2],
          zd = wd[Gd + 3],
          cd = wd[Gd + 4],
          jd = wd[Gd + 5],
          Dd = Ad * gd,
          ed = Ed[Dd],
          Id = Ed[Dd + 1],
          ld = 1 & jd,
          Cd = !!(16 & jd),
          Zd = Qd,
          kd = Bd,
          fd = sd,
          Md = ud;
        if (ld && (Zd = sd, kd = ud, fd = Qd, Md = Bd), !(2 & jd && Ld >= (Pd = yd(dd, nd, Ld, Pd, Zd, kd, Id))) && !(4 & jd && (Ld = bd(dd, nd, Ld, Pd, Zd, kd, ed)) >= Pd)) {
          var dO = Pd - Ld,
            OO = cd - zd;
          if (Cd) {
            if (dd * dO * (dO + OO) < Nd) {
              if (void 0 !== (Vd = hd.scanComplete(dd, nd, Od, Ld, Pd, Zd, kd, zd, cd, fd, Md))) return Vd;
              continue
            }
          } else {
            if (dd * Math.min(dO, OO) < td) {
              if (void 0 !== (Vd = Xd(dd, nd, Od, ld, Ld, Pd, Zd, kd, zd, cd, fd, Md))) return Vd;
              continue
            }
            if (dd * dO * OO < od) {
              if (void 0 !== (Vd = hd.scanBipartite(dd, nd, Od, ld, Ld, Pd, Zd, kd, zd, cd, fd, Md))) return Vd;
              continue
            }
          }
          var mO = qd(dd, nd, Ld, Pd, Zd, kd, ed, Id);
          if (Ld < mO)
            if (dd * (mO - Ld) < td) {
              if (void 0 !== (Vd = Kd(dd, nd + 1, Od, Ld, mO, Zd, kd, zd, cd, fd, Md))) return Vd
            } else if (nd === dd - 2) {
            if (void 0 !== (Vd = ld ? hd.sweepBipartite(dd, Od, zd, cd, fd, Md, Ld, mO, Zd, kd) : hd.sweepBipartite(dd, Od, Ld, mO, Zd, kd, zd, cd, fd, Md))) return Vd
          } else Jd(Ad++, nd + 1, Ld, mO, zd, cd, ld, -1 / 0, 1 / 0), Jd(Ad++, nd + 1, zd, cd, Ld, mO, 1 ^ ld, -1 / 0, 1 / 0);
          if (mO < Pd) {
            var WO = vd(dd, nd, zd, cd, fd, Md),
              FO = fd[rd * WO + nd],
              RO = Hd(dd, nd, WO, cd, fd, Md, FO);
            if (RO < cd && Jd(Ad++, nd, mO, Pd, RO, cd, (4 | ld) + (Cd ? 16 : 0), FO, Id), zd < WO && Jd(Ad++, nd, mO, Pd, zd, WO, (2 | ld) + (Cd ? 16 : 0), ed, FO), WO + 1 === RO) {
              if (void 0 !== (Vd = Cd ? xd(dd, nd, Od, mO, Pd, Zd, kd, WO, fd, Md[WO]) : Ud(dd, nd, Od, ld, mO, Pd, Zd, kd, WO, fd, Md[WO]))) return Vd
            } else if (WO < RO) {
              var XO;
              if (Cd) {
                if (mO < (XO = Td(dd, nd, mO, Pd, Zd, kd, FO))) {
                  var KO = Hd(dd, nd, mO, XO, Zd, kd, FO);
                  if (nd === dd - 2) {
                    if (mO < KO && void 0 !== (Vd = hd.sweepComplete(dd, Od, mO, KO, Zd, kd, WO, RO, fd, Md))) return Vd;
                    if (KO < XO && void 0 !== (Vd = hd.sweepBipartite(dd, Od, KO, XO, Zd, kd, WO, RO, fd, Md))) return Vd
                  } else mO < KO && Jd(Ad++, nd + 1, mO, KO, WO, RO, 16, -1 / 0, 1 / 0), KO < XO && (Jd(Ad++, nd + 1, KO, XO, WO, RO, 0, -1 / 0, 1 / 0), Jd(Ad++, nd + 1, WO, RO, KO, XO, 1, -1 / 0, 1 / 0))
                }
              } else mO < (XO = ld ? pd(dd, nd, mO, Pd, Zd, kd, FO) : Td(dd, nd, mO, Pd, Zd, kd, FO)) && (nd === dd - 2 ? Vd = ld ? hd.sweepBipartite(dd, Od, WO, RO, fd, Md, mO, XO, Zd, kd) : hd.sweepBipartite(dd, Od, mO, XO, Zd, kd, WO, RO, fd, Md) : (Jd(Ad++, nd + 1, mO, XO, WO, RO, ld, -1 / 0, 1 / 0), Jd(Ad++, nd + 1, WO, RO, mO, XO, 1 ^ ld, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var Wd = md(39812),
      Fd = md(39820),
      Rd = md(39849),
      Xd = Rd.partial,
      Kd = Rd.full,
      hd = md(39836),
      vd = md(39853),
      Qd = md(39856),
      td = 128,
      od = 1 << 22,
      Nd = 1 << 22,
      qd = Qd("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      Hd = Qd("lo===p0", ["p0"]),
      yd = Qd("lo<p0", ["p0"]),
      bd = Qd("hi<=p0", ["p0"]),
      Td = Qd("lo<=p0&&p0<=hi", ["p0"]),
      pd = Qd("lo<p0&&p0<=hi", ["p0"]),
      Yd = 6,
      gd = 2,
      wd = Wd.mallocInt32(1024),
      Ed = Wd.mallocDouble(1024);

    function Jd(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd) {
      var vd = Yd * dd;
      wd[vd] = Od, wd[vd + 1] = md, wd[vd + 2] = Wd, wd[vd + 3] = Fd, wd[vd + 4] = Rd, wd[vd + 5] = Xd;
      var Qd = gd * dd;
      Ed[Qd] = Kd, Ed[Qd + 1] = hd
    }

    function Ud(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd, Qd) {
      var td = 2 * dd,
        od = hd * td,
        Nd = vd[od + Od];
      dd: for (var qd = Fd, Hd = Fd * td; qd < Rd; ++qd, Hd += td) {
        var yd = Xd[Hd + Od],
          bd = Xd[Hd + Od + dd];
        if (!(Nd < yd || bd < Nd) && (!Wd || Nd !== yd)) {
          for (var Td, pd = Kd[qd], Yd = Od + 1; Yd < dd; ++Yd) {
            yd = Xd[Hd + Yd], bd = Xd[Hd + Yd + dd];
            var gd = vd[od + Yd],
              wd = vd[od + Yd + dd];
            if (bd < gd || wd < yd) continue dd
          }
          if (void 0 !== (Td = Wd ? md(Qd, pd) : md(pd, Qd))) return Td
        }
      }
    }

    function xd(dd, Od, md, Wd, Fd, Rd, Xd, Kd, hd, vd) {
      var Qd = 2 * dd,
        td = Kd * Qd,
        od = hd[td + Od];
      dd: for (var Nd = Wd, qd = Wd * Qd; Nd < Fd; ++Nd, qd += Qd) {
        var Hd = Xd[Nd];
        if (Hd !== vd) {
          var yd = Rd[qd + Od],
            bd = Rd[qd + Od + dd];
          if (!(od < yd || bd < od)) {
            for (var Td = Od + 1; Td < dd; ++Td) {
              yd = Rd[qd + Td], bd = Rd[qd + Td + dd];
              var pd = hd[td + Td],
                Yd = hd[td + Td + dd];
              if (bd < pd || Yd < yd) continue dd
            }
            var gd = md(Hd, vd);
            if (void 0 !== gd) return gd
          }
        }
      }
    }
  },
  39853: (dd, Od, md) => {
    dd.exports = function(dd, Od, md, Xd, Kd, hd) {
      if (Xd <= md + 1) return md;
      var vd = md,
        Qd = Xd,
        td = Xd + md >>> 1,
        od = 2 * dd,
        Nd = td,
        qd = Kd[od * td + Od];
      for (; vd < Qd;) {
        if (Qd - vd < Fd) {
          Rd(dd, Od, vd, Qd, Kd, hd), qd = Kd[od * td + Od];
          break
        }
        var Hd = Qd - vd,
          yd = Math.random() * Hd + vd | 0,
          bd = Kd[od * yd + Od],
          Td = Math.random() * Hd + vd | 0,
          pd = Kd[od * Td + Od],
          Yd = Math.random() * Hd + vd | 0,
          gd = Kd[od * Yd + Od];
        bd <= pd ? gd >= pd ? (Nd = Td, qd = pd) : bd >= gd ? (Nd = yd, qd = bd) : (Nd = Yd, qd = gd) : pd >= gd ? (Nd = Td, qd = pd) : gd >= bd ? (Nd = yd, qd = bd) : (Nd = Yd, qd = gd);
        for (var wd = od * (Qd - 1), Ed = od * Nd, Jd = 0; Jd < od; ++Jd, ++wd, ++Ed) {
          var Ud = Kd[wd];
          Kd[wd] = Kd[Ed], Kd[Ed] = Ud
        }
        var xd = hd[Qd - 1];
        hd[Qd - 1] = hd[Nd], hd[Nd] = xd;
        for (wd = od * (Qd - 1), Ed = od * (Nd = Wd(dd, Od, vd, Qd - 1, Kd, hd, qd)), Jd = 0; Jd < od; ++Jd, ++wd, ++Ed) {
          Ud = Kd[wd];
          Kd[wd] = Kd[Ed], Kd[Ed] = Ud
        }
        xd = hd[Qd - 1];
        if (hd[Qd - 1] = hd[Nd], hd[Nd] = xd, td < Nd) {
          for (Qd = Nd - 1; vd < Qd && Kd[od * (Qd - 1) + Od] === qd;) Qd -= 1;
          Qd += 1
        } else {
          if (!(Nd < td)) break;
          for (vd = Nd + 1; vd < Qd && Kd[od * vd + Od] === qd;) vd += 1
        }
      }
      return Wd(dd, Od, md, td, Kd, hd, Kd[od * td + Od])
    };
    var Wd = md(39856)("lo<p0", ["p0"]),
      Fd = 8;

    function Rd(dd, Od, md, Wd, Fd, Rd) {
      for (var Xd = 2 * dd, Kd = Xd * (md + 1) + Od, hd = md + 1; hd < Wd; ++hd, Kd += Xd)
        for (var vd = Fd[Kd], Qd = hd, td = Xd * (hd - 1); Qd > md && Fd[td + Od] > vd; --Qd, td -= Xd) {
          for (var od = td, Nd = td + Xd, qd = 0; qd < Xd; ++qd, ++od, ++Nd) {
            var Hd = Fd[od];
            Fd[od] = Fd[Nd], Fd[Nd] = Hd
          }
          var yd = Rd[Qd];
          Rd[Qd] = Rd[Qd - 1], Rd[Qd - 1] = yd
        }
    }
  },
  39856: dd => {
    dd.exports = function(dd, md) {
      var Wd = "abcdef".split("").concat(md),
        Fd = [];
      dd.indexOf("lo") >= 0 && Fd.push("lo=e[k+n]");
      dd.indexOf("hi") >= 0 && Fd.push("hi=e[k+o]");
      return Wd.push(Od.replace("_", Fd.join()).replace("$", dd)), Function.apply(void 0, Wd)
    };
    var Od = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  39838: dd => {
    dd.exports = function(dd, Wd) {
      Wd <= 4 * Od ? md(0, Wd - 1, dd) : vd(0, Wd - 1, dd)
    };
    var Od = 32;

    function md(dd, Od, md) {
      for (var Wd = 2 * (dd + 1), Fd = dd + 1; Fd <= Od; ++Fd) {
        for (var Rd = md[Wd++], Xd = md[Wd++], Kd = Fd, hd = Wd - 2; Kd-- > dd;) {
          var vd = md[hd - 2],
            Qd = md[hd - 1];
          if (vd < Rd) break;
          if (vd === Rd && Qd < Xd) break;
          md[hd] = vd, md[hd + 1] = Qd, hd -= 2
        }
        md[hd] = Rd, md[hd + 1] = Xd
      }
    }

    function Wd(dd, Od, md) {
      Od *= 2;
      var Wd = md[dd *= 2],
        Fd = md[dd + 1];
      md[dd] = md[Od], md[dd + 1] = md[Od + 1], md[Od] = Wd, md[Od + 1] = Fd
    }

    function Fd(dd, Od, md) {
      Od *= 2, md[dd *= 2] = md[Od], md[dd + 1] = md[Od + 1]
    }

    function Rd(dd, Od, md, Wd) {
      Od *= 2, md *= 2;
      var Fd = Wd[dd *= 2],
        Rd = Wd[dd + 1];
      Wd[dd] = Wd[Od], Wd[dd + 1] = Wd[Od + 1], Wd[Od] = Wd[md], Wd[Od + 1] = Wd[md + 1], Wd[md] = Fd, Wd[md + 1] = Rd
    }

    function Xd(dd, Od, md, Wd, Fd) {
      Od *= 2, Fd[dd *= 2] = Fd[Od], Fd[Od] = md, Fd[dd + 1] = Fd[Od + 1], Fd[Od + 1] = Wd
    }

    function Kd(dd, Od, md) {
      Od *= 2;
      var Wd = md[dd *= 2],
        Fd = md[Od];
      return !(Wd < Fd) && (Wd !== Fd || md[dd + 1] > md[Od + 1])
    }

    function hd(dd, Od, md, Wd) {
      var Fd = Wd[dd *= 2];
      return Fd < Od || Fd === Od && Wd[dd + 1] < md
    }

    function vd(dd, Qd, td) {
      var od = (Qd - dd + 1) / 6 | 0,
        Nd = dd + od,
        qd = Qd - od,
        Hd = dd + Qd >> 1,
        yd = Hd - od,
        bd = Hd + od,
        Td = Nd,
        pd = yd,
        Yd = Hd,
        gd = bd,
        wd = qd,
        Ed = dd + 1,
        Jd = Qd - 1,
        Ud = 0;
      Kd(Td, pd, td) && (Ud = Td, Td = pd, pd = Ud), Kd(gd, wd, td) && (Ud = gd, gd = wd, wd = Ud), Kd(Td, Yd, td) && (Ud = Td, Td = Yd, Yd = Ud), Kd(pd, Yd, td) && (Ud = pd, pd = Yd, Yd = Ud), Kd(Td, gd, td) && (Ud = Td, Td = gd, gd = Ud), Kd(Yd, gd, td) && (Ud = Yd, Yd = gd, gd = Ud), Kd(pd, wd, td) && (Ud = pd, pd = wd, wd = Ud), Kd(pd, Yd, td) && (Ud = pd, pd = Yd, Yd = Ud), Kd(gd, wd, td) && (Ud = gd, gd = wd, wd = Ud);
      for (var xd = td[2 * pd], Bd = td[2 * pd + 1], Sd = td[2 * gd], sd = td[2 * gd + 1], ud = 2 * Td, Vd = 2 * Yd, Ad = 2 * wd, rd = 2 * Nd, Gd = 2 * Hd, nd = 2 * qd, Ld = 0; Ld < 2; ++Ld) {
        var Pd = td[ud + Ld],
          zd = td[Vd + Ld],
          cd = td[Ad + Ld];
        td[rd + Ld] = Pd, td[Gd + Ld] = zd, td[nd + Ld] = cd
      }
      Fd(yd, dd, td), Fd(bd, Qd, td);
      for (var jd = Ed; jd <= Jd; ++jd)
        if (hd(jd, xd, Bd, td)) jd !== Ed && Wd(jd, Ed, td), ++Ed;
        else if (!hd(jd, Sd, sd, td))
        for (;;) {
          if (hd(Jd, Sd, sd, td)) {
            hd(Jd, xd, Bd, td) ? (Rd(jd, Ed, Jd, td), ++Ed, --Jd) : (Wd(jd, Jd, td), --Jd);
            break
          }
          if (--Jd < jd) break
        }
      Xd(dd, Ed - 1, xd, Bd, td), Xd(Qd, Jd + 1, Sd, sd, td), Ed - 2 - dd <= Od ? md(dd, Ed - 2, td) : vd(dd, Ed - 2, td), Qd - (Jd + 2) <= Od ? md(Jd + 2, Qd, td) : vd(Jd + 2, Qd, td), Jd - Ed <= Od ? md(Ed, Jd, td) : vd(Ed, Jd, td)
    }
  },
  39836: (dd, Od, md) => {
    dd.exports = {
      init: function(dd) {
        var Od = Fd.nextPow2(dd);
        hd.length < Od && (Wd.free(hd), hd = Wd.mallocInt32(Od));
        vd.length < Od && (Wd.free(vd), vd = Wd.mallocInt32(Od));
        Qd.length < Od && (Wd.free(Qd), Qd = Wd.mallocInt32(Od));
        td.length < Od && (Wd.free(td), td = Wd.mallocInt32(Od));
        od.length < Od && (Wd.free(od), od = Wd.mallocInt32(Od));
        Nd.length < Od && (Wd.free(Nd), Nd = Wd.mallocInt32(Od));
        var md = 8 * Od;
        qd.length < md && (Wd.free(qd), qd = Wd.mallocDouble(md))
      },
      sweepBipartite: function(dd, Od, md, Wd, Fd, Kd, od, Nd, bd, Td) {
        for (var pd = 0, Yd = 2 * dd, gd = dd - 1, wd = Yd - 1, Ed = md; Ed < Wd; ++Ed) {
          var Jd = Kd[Ed],
            Ud = Yd * Ed;
          qd[pd++] = Fd[Ud + gd], qd[pd++] = -(Jd + 1), qd[pd++] = Fd[Ud + wd], qd[pd++] = Jd
        }
        for (Ed = od; Ed < Nd; ++Ed) {
          Jd = Td[Ed] + Xd;
          var xd = Yd * Ed;
          qd[pd++] = bd[xd + gd], qd[pd++] = -Jd, qd[pd++] = bd[xd + wd], qd[pd++] = Jd
        }
        var Bd = pd >>> 1;
        Rd(qd, Bd);
        var Sd = 0,
          sd = 0;
        for (Ed = 0; Ed < Bd; ++Ed) {
          var ud = 0 | qd[2 * Ed + 1];
          if (ud >= Xd) Hd(Qd, td, sd--, ud = ud - Xd | 0);
          else if (ud >= 0) Hd(hd, vd, Sd--, ud);
          else if (ud <= -Xd) {
            ud = -ud - Xd | 0;
            for (var Vd = 0; Vd < Sd; ++Vd) {
              if (void 0 !== (Ad = Od(hd[Vd], ud))) return Ad
            }
            yd(Qd, td, sd++, ud)
          } else {
            ud = -ud - 1 | 0;
            for (Vd = 0; Vd < sd; ++Vd) {
              var Ad;
              if (void 0 !== (Ad = Od(ud, Qd[Vd]))) return Ad
            }
            yd(hd, vd, Sd++, ud)
          }
        }
      },
      sweepComplete: function(dd, Od, md, Wd, Fd, Xd, Kd, bd, Td, pd) {
        for (var Yd = 0, gd = 2 * dd, wd = dd - 1, Ed = gd - 1, Jd = md; Jd < Wd; ++Jd) {
          var Ud = Xd[Jd] + 1 << 1,
            xd = gd * Jd;
          qd[Yd++] = Fd[xd + wd], qd[Yd++] = -Ud, qd[Yd++] = Fd[xd + Ed], qd[Yd++] = Ud
        }
        for (Jd = Kd; Jd < bd; ++Jd) {
          Ud = pd[Jd] + 1 << 1;
          var Bd = gd * Jd;
          qd[Yd++] = Td[Bd + wd], qd[Yd++] = 1 | -Ud, qd[Yd++] = Td[Bd + Ed], qd[Yd++] = 1 | Ud
        }
        var Sd = Yd >>> 1;
        Rd(qd, Sd);
        var sd = 0,
          ud = 0,
          Vd = 0;
        for (Jd = 0; Jd < Sd; ++Jd) {
          var Ad = 0 | qd[2 * Jd + 1],
            rd = 1 & Ad;
          if (Jd < Sd - 1 && Ad >> 1 === qd[2 * Jd + 3] >> 1 && (rd = 2, Jd += 1), Ad < 0) {
            for (var Gd = -(Ad >> 1) - 1, nd = 0; nd < Vd; ++nd) {
              if (void 0 !== (Ld = Od(od[nd], Gd))) return Ld
            }
            if (0 !== rd)
              for (nd = 0; nd < sd; ++nd) {
                if (void 0 !== (Ld = Od(hd[nd], Gd))) return Ld
              }
            if (1 !== rd)
              for (nd = 0; nd < ud; ++nd) {
                var Ld;
                if (void 0 !== (Ld = Od(Qd[nd], Gd))) return Ld
              }
            0 === rd ? yd(hd, vd, sd++, Gd) : 1 === rd ? yd(Qd, td, ud++, Gd) : 2 === rd && yd(od, Nd, Vd++, Gd)
          } else {
            Gd = (Ad >> 1) - 1;
            0 === rd ? Hd(hd, vd, sd--, Gd) : 1 === rd ? Hd(Qd, td, ud--, Gd) : 2 === rd && Hd(od, Nd, Vd--, Gd)
          }
        }
      },
      scanBipartite: function(dd, Od, md, Wd, Fd, Kd, Qd, td, od, Nd, bd, Td) {
        var pd = 0,
          Yd = 2 * dd,
          gd = Od,
          wd = Od + dd,
          Ed = 1,
          Jd = 1;
        Wd ? Jd = Xd : Ed = Xd;
        for (var Ud = Fd; Ud < Kd; ++Ud) {
          var xd = Ud + Ed,
            Bd = Yd * Ud;
          qd[pd++] = Qd[Bd + gd], qd[pd++] = -xd, qd[pd++] = Qd[Bd + wd], qd[pd++] = xd
        }
        for (Ud = od; Ud < Nd; ++Ud) {
          xd = Ud + Jd;
          var Sd = Yd * Ud;
          qd[pd++] = bd[Sd + gd], qd[pd++] = -xd
        }
        var sd = pd >>> 1;
        Rd(qd, sd);
        var ud = 0;
        for (Ud = 0; Ud < sd; ++Ud) {
          var Vd = 0 | qd[2 * Ud + 1];
          if (Vd < 0) {
            var Ad = !1;
            if ((xd = -Vd) >= Xd ? (Ad = !Wd, xd -= Xd) : (Ad = !!Wd, xd -= 1), Ad) yd(hd, vd, ud++, xd);
            else {
              var rd = Td[xd],
                Gd = Yd * xd,
                nd = bd[Gd + Od + 1],
                Ld = bd[Gd + Od + 1 + dd];
              dd: for (var Pd = 0; Pd < ud; ++Pd) {
                var zd = hd[Pd],
                  cd = Yd * zd;
                if (!(Ld < Qd[cd + Od + 1] || Qd[cd + Od + 1 + dd] < nd)) {
                  for (var jd = Od + 2; jd < dd; ++jd)
                    if (bd[Gd + jd + dd] < Qd[cd + jd] || Qd[cd + jd + dd] < bd[Gd + jd]) continue dd;
                  var Dd, ed = td[zd];
                  if (void 0 !== (Dd = Wd ? md(rd, ed) : md(ed, rd))) return Dd
                }
              }
            }
          } else Hd(hd, vd, ud--, Vd - Ed)
        }
      },
      scanComplete: function(dd, Od, md, Wd, Fd, Kd, vd, Qd, td, od, Nd) {
        for (var Hd = 0, yd = 2 * dd, bd = Od, Td = Od + dd, pd = Wd; pd < Fd; ++pd) {
          var Yd = pd + Xd,
            gd = yd * pd;
          qd[Hd++] = Kd[gd + bd], qd[Hd++] = -Yd, qd[Hd++] = Kd[gd + Td], qd[Hd++] = Yd
        }
        for (pd = Qd; pd < td; ++pd) {
          Yd = pd + 1;
          var wd = yd * pd;
          qd[Hd++] = od[wd + bd], qd[Hd++] = -Yd
        }
        var Ed = Hd >>> 1;
        Rd(qd, Ed);
        var Jd = 0;
        for (pd = 0; pd < Ed; ++pd) {
          var Ud = 0 | qd[2 * pd + 1];
          if (Ud < 0) {
            if ((Yd = -Ud) >= Xd) hd[Jd++] = Yd - Xd;
            else {
              var xd = Nd[Yd -= 1],
                Bd = yd * Yd,
                Sd = od[Bd + Od + 1],
                sd = od[Bd + Od + 1 + dd];
              dd: for (var ud = 0; ud < Jd; ++ud) {
                var Vd = hd[ud],
                  Ad = vd[Vd];
                if (Ad === xd) break;
                var rd = yd * Vd;
                if (!(sd < Kd[rd + Od + 1] || Kd[rd + Od + 1 + dd] < Sd)) {
                  for (var Gd = Od + 2; Gd < dd; ++Gd)
                    if (od[Bd + Gd + dd] < Kd[rd + Gd] || Kd[rd + Gd + dd] < od[Bd + Gd]) continue dd;
                  var nd = md(Ad, xd);
                  if (void 0 !== nd) return nd
                }
              }
            }
          } else {
            for (Yd = Ud - Xd, ud = Jd - 1; ud >= 0; --ud)
              if (hd[ud] === Yd) {
                for (Gd = ud + 1; Gd < Jd; ++Gd) hd[Gd - 1] = hd[Gd];
                break
              }-- Jd
          }
        }
      }
    };
    var Wd = md(39812),
      Fd = md(39820),
      Rd = md(39838),
      Xd = 1 << 28,
      Kd = 1024,
      hd = Wd.mallocInt32(Kd),
      vd = Wd.mallocInt32(Kd),
      Qd = Wd.mallocInt32(Kd),
      td = Wd.mallocInt32(Kd),
      od = Wd.mallocInt32(Kd),
      Nd = Wd.mallocInt32(Kd),
      qd = Wd.mallocDouble(8192);

    function Hd(dd, Od, md, Wd) {
      var Fd = Od[Wd],
        Rd = dd[md - 1];
      dd[Fd] = Rd, Od[Rd] = Fd
    }

    function yd(dd, Od, md, Wd) {
      dd[md] = Wd, Od[Wd] = md
    }
  },
  39823: dd => {
    function Od(dd, md, Wd) {
      var Fd = 0 | dd[Wd];
      if (Fd <= 0) return [];
      var Rd, Xd = new Array(Fd);
      if (Wd === dd.length - 1)
        for (Rd = 0; Rd < Fd; ++Rd) Xd[Rd] = md;
      else
        for (Rd = 0; Rd < Fd; ++Rd) Xd[Rd] = Od(dd, md, Wd + 1);
      return Xd
    }
    dd.exports = function(dd, md) {
      switch ("undefined" === typeof md && (md = 0), typeof dd) {
        case "number":
          if (dd > 0) return function(dd, Od) {
            var md, Wd;
            for (md = new Array(dd), Wd = 0; Wd < dd; ++Wd) md[Wd] = Od;
            return md
          }(0 | dd, md);
          break;
        case "object":
          if ("number" === typeof dd.length) return Od(dd, md, 0)
      }
      return []
    }
  },
  39770: (dd, Od, md) => {
    dd.exports = function() {
      var dd = this;
      this.components = {}, this.comps = this.components;
      var Od = this.components,
        md = 1,
        Fd = {},
        Rd = [],
        Xd = [],
        Kd = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function hd(dd, md) {
        var Wd = Od[md],
          Rd = Fd[md],
          Xd = Rd.hash[dd];
        Xd && (Rd.remove(dd), Wd.qS && (Wd.multi ? (Xd.forEach((Od => {
          Od && Wd.qS(dd, Od)
        })), Xd.length = 0) : Wd.qS(dd, Xd)), Kd.removals.push(Rd), vd())
      }

      function vd() {
        Kd.timeout || (Kd.timeout = !0, setTimeout(Qd, 1))
      }

      function Qd() {
        Kd.timeout = !1, td()
      }

      function td() {
        Kd.multiComps.length && function(dd) {
          for (var Od = 0; Od < dd.length; Od++) {
            var {
              entID: md,
              data: Wd
            } = dd[Od], Fd = Wd.hash[md];
            if (Fd) {
              for (var Rd = 0; Rd < Fd.length; Rd++) Fd[Rd] || (Fd.splice(Rd, 1), Rd--);
              0 === Fd.length && (Wd.remove(md), Kd.removals.push(Wd))
            }
          }
          dd.length = 0
        }(Kd.multiComps), Kd.removals.length && function(dd) {
          for (var Od = 0; Od < dd.length; Od++) {
            dd[Od].flush()
          }
          dd.length = 0
        }(Kd.removals)
      }
      this.sH = Fd, this._systems = Rd, this._renderSystems = Xd, this.YM = function(Od) {
        var Wd = md++;
        return Array.isArray(Od) && Od.forEach((Od => dd.yG(Wd, Od))), Wd
      }, this.deleteEntity = function(Od) {
        return Object.keys(Fd).forEach((dd => {
          Fd[dd].hash[Od] && hd(Od, dd)
        })), dd
      }, this.QWd = function(dd) {
        if (!dd) throw new Error("Missing component definition");
        var md = dd.name;
        if (!md) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof md) throw new Error("Component name must be a string.");
        if ("" === md) throw new Error("Component name must be a non-empty string.");
        if (Fd[md]) throw new Error(`Component ${md} already exists.`);
        var Kd = {};
        return Kd.name = md, Kd.multi = !!dd.multi, Kd.order = isNaN(dd.order) ? 99 : dd.order, Kd.stateConstructor = dd.stateConstructor || null, Kd.state = dd.state || {}, Kd.QE = dd.QE || null, Kd.qS = dd.qS || null, Kd.system = dd.system || null, Kd.yE = dd.yE || null, Od[md] = Kd, Fd[md] = new Wd, Fd[md]._pendingMultiCleanup = !1, Fd[md]._multiCleanupIDs = Kd.multi ? [] : null, Kd.system && (Rd.push(md), Rd.sort(((dd, md) => Od[dd].order - Od[md].order))), Kd.yE && (Xd.push(md), Xd.sort(((dd, md) => Od[dd].order - Od[md].order))), md
      }, this.overwriteComponent = function(dd, md) {
        var Wd = Od[dd];
        if (!Wd) throw new Error(`Unknown component: ${dd}`);
        if (!md) throw new Error("Missing component definition");
        if (Wd.name !== md.name) throw new Error("Overwriting component must use the same name property.");
        var Kd = {};
        Kd.name = dd, Kd.multi = !!md.multi, Kd.order = isNaN(md.order) ? 99 : md.order, Kd.state = md.state || {}, Kd.QE = md.QE || null, Kd.qS = md.qS || null, Kd.system = md.system || null, Kd.yE = md.yE || null, Od[dd] = Kd, Fd[dd]._pendingMultiCleanup = !1, Fd[dd]._multiCleanupIDs = Kd.multi ? [] : null;
        var hd = Rd.indexOf(dd);
        Kd.system && hd < 0 && Rd.push(dd), !Kd.system && hd >= 0 && Rd.splice(hd, 1), Rd.sort(((dd, md) => Od[dd].order - Od[md].order));
        var vd = Xd.indexOf(dd);
        Kd.yE && vd < 0 && Xd.push(dd), !Kd.yE && vd >= 0 && Xd.splice(vd, 1), Xd.sort(((dd, md) => Od[dd].order - Od[md].order));
        var Qd = Kd.state;
        return this.vG(dd).forEach((dd => {
          for (var Od in Qd) Od in dd || (dd[Od] = Qd[Od]);
          Kd.QE && Kd.QE(dd.QG, dd)
        })), dd
      }, this.deleteComponent = function(md) {
        var Wd = Fd[md];
        if (!Wd) throw new Error(`Unknown component: ${md}`);
        Wd.flush(), Wd.list.forEach((dd => {
          dd && hd(dd.QG || dd[0].QG, md)
        }));
        var Kd = Rd.indexOf(md),
          vd = Xd.indexOf(md);
        return Kd > -1 && Rd.splice(Kd, 1), vd > -1 && Xd.splice(vd, 1), Fd[md].dispose(), delete Fd[md], delete Od[md], dd
      }, this.yG = function(dd, md, Wd) {
        var Rd, Xd = Od[md],
          Kd = Fd[md];
        if (!Kd) throw new Error(`Unknown component: ${md}.`);
        if (Kd.hash[dd] && !Xd.multi) throw new Error(`Entity ${dd} already has component: ${md}.`);
        if (Xd.stateConstructor) {
          if (!(Rd = new Xd.stateConstructor).hasOwnProperty("QG")) throw new Error(`Component ${Xd.name} stateConstructor type does not have property __id`);
          Object.assign(Rd, Xd.state, Wd)
        } else Rd = {
          QG: dd,
          ...Xd.state,
          ...Wd
        };
        if (Rd.QG = dd, Xd.multi) {
          var hd = Kd.hash[dd];
          hd || (hd = [], Kd.add(dd, hd)), hd.push(Rd)
        } else Kd.add(dd, Rd);
        return Xd.QE && Xd.QE(dd, Rd), this
      }, this.MOd = function(dd, Od) {
        var md = Fd[Od];
        if (!md) throw new Error(`Unknown component: ${Od}.`);
        return !!md.hash[dd]
      }, this.pG = function(Od, md) {
        if (!Fd[md]) throw new Error(`Unknown component: ${md}.`);
        return hd(Od, md), dd
      }, this.getState = function(dd, Od) {
        var md = Fd[Od];
        if (!md) throw new Error(`Unknown component: ${Od}.`);
        return md.hash[dd]
      }, this.vG = function(dd) {
        var Od = Fd[dd];
        if (!Od) throw new Error(`Unknown component: ${dd}.`);
        return td(), Od.list
      }, this.Lmd = function(dd) {
        if (!Fd[dd]) throw new Error(`Unknown component: ${dd}.`);
        var Od = Fd[dd].hash;
        return dd => Od[dd]
      }, this.lmd = function(dd) {
        if (!Fd[dd]) throw new Error(`Unknown component: ${dd}.`);
        var Od = Fd[dd].hash;
        return dd => !!Od[dd]
      }, this.Et = function(md) {
        td();
        for (var Wd = 0; Wd < Rd.length; Wd++) {
          var Xd = Rd[Wd],
            Kd = Od[Xd],
            hd = Fd[Xd];
          Kd.system(md, hd.list), td()
        }
        return dd
      }, this.render = function(md) {
        td();
        for (var Wd = 0; Wd < Xd.length; Wd++) {
          var Rd = Xd[Wd],
            Kd = Od[Rd],
            hd = Fd[Rd];
          Kd.yE(md, hd.list), td()
        }
        return dd
      }, this.removeMultiComponent = function(md, Wd, Rd) {
        var Xd = Od[Wd],
          hd = Fd[Wd];
        if (!hd) throw new Error(`Unknown component: ${Wd}.`);
        if (!Xd.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(dd, Od, md, Wd) {
          var Fd = md.hash[dd];
          if (Fd) {
            var Rd = Fd[Wd];
            Rd && (Fd[Wd] = null, Od.qS && Od.qS(dd, Rd), Kd.multiComps.push({
              entID: dd,
              data: md
            }), vd())
          }
        }(md, Xd, hd, Rd), dd
      }
    };
    var Wd = md(39775)
  },
  39775: dd => {
    function Od(dd, Od) {
      var md = dd._map[Od];
      if (delete dd.hash[Od], delete dd._map[Od], md === dd.list.length - 1) dd.list.pop(), dd._idList.pop();
      else {
        var Wd = dd.list.pop();
        dd.list[md] = Wd;
        var Fd = dd._idList.pop();
        dd._idList[md] = Fd, dd._map[Fd] = md
      }
    }
    dd.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(dd, Od) {
        if ("number" === typeof this._map[dd]) {
          var md = this._map[dd];
          this.hash[dd] = Od, this.list[md] = Od, this._idList[md] = dd
        } else this._map[dd] = this.list.length, this.hash[dd] = Od, this.list.push(Od), this._idList.push(dd)
      }
      remove(dd) {
        var Od = this._map[dd];
        this.hash[dd] = null, this.list[Od] = null, this._pendingRemovals.push(dd)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var dd = 0; dd < this._pendingRemovals.length; dd++) {
          var md = this._pendingRemovals[dd];
          null === this.hash[md] && Od(this, md)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  39606: (dd, Od, md) => {
    dd = md.nmd(dd);
    var Wd = "__lodash_hash_undefined__",
      Fd = 9007199254740991,
      Rd = "[object Arguments]",
      Xd = "[object Boolean]",
      Kd = "[object Date]",
      hd = "[object Function]",
      vd = "[object GeneratorFunction]",
      Qd = "[object Map]",
      td = "[object Number]",
      od = "[object Object]",
      Nd = "[object Promise]",
      qd = "[object RegExp]",
      Hd = "[object Set]",
      yd = "[object String]",
      bd = "[object Symbol]",
      Td = "[object WeakMap]",
      pd = "[object ArrayBuffer]",
      Yd = "[object DataView]",
      gd = "[object Float32Array]",
      wd = "[object Float64Array]",
      Ed = "[object Int8Array]",
      Jd = "[object Int16Array]",
      Ud = "[object Int32Array]",
      xd = "[object Uint8Array]",
      Bd = "[object Uint8ClampedArray]",
      Sd = "[object Uint16Array]",
      sd = "[object Uint32Array]",
      ud = /\w*$/,
      Vd = /^\[object .+?Constructor\]$/,
      Ad = /^(?:0|[1-9]\d*)$/,
      rd = {};
    rd[Rd] = rd["[object Array]"] = rd[pd] = rd[Yd] = rd[Xd] = rd[Kd] = rd[gd] = rd[wd] = rd[Ed] = rd[Jd] = rd[Ud] = rd[Qd] = rd[td] = rd[od] = rd[qd] = rd[Hd] = rd[yd] = rd[bd] = rd[xd] = rd[Bd] = rd[Sd] = rd[sd] = !0, rd["[object Error]"] = rd[hd] = rd[Td] = !1;
    var Gd = "object" == typeof md.g && md.g && md.g.Object === Object && md.g,
      nd = "object" == typeof self && self && self.Object === Object && self,
      Ld = Gd || nd || Function("return this")(),
      Pd = Od && !Od.nodeType && Od,
      zd = Pd && dd && !dd.nodeType && dd,
      cd = zd && zd.exports === Pd;

    function jd(dd, Od) {
      return dd.set(Od[0], Od[1]), dd
    }

    function Dd(dd, Od) {
      return dd.add(Od), dd
    }

    function ed(dd, Od, md, Wd) {
      var Fd = -1,
        Rd = dd ? dd.length : 0;
      for (Wd && Rd && (md = dd[++Fd]); ++Fd < Rd;) md = Od(md, dd[Fd], Fd, dd);
      return md
    }

    function Id(dd) {
      var Od = !1;
      if (null != dd && "function" != typeof dd.toString) try {
        Od = !!(dd + "")
      } catch (md) {}
      return Od
    }

    function ld(dd) {
      var Od = -1,
        md = Array(dd.size);
      return dd.forEach((function(dd, Wd) {
        md[++Od] = [Wd, dd]
      })), md
    }

    function Cd(dd, Od) {
      return function(md) {
        return dd(Od(md))
      }
    }

    function Zd(dd) {
      var Od = -1,
        md = Array(dd.size);
      return dd.forEach((function(dd) {
        md[++Od] = dd
      })), md
    }
    var kd = Array.prototype,
      fd = Function.prototype,
      Md = Object.prototype,
      dO = Ld["__core-js_shared__"],
      OO = function() {
        var dd = /[^.]+$/.exec(dO && dO.keys && dO.keys.IE_PROTO || "");
        return dd ? "Symbol(src)_1." + dd : ""
      }(),
      mO = fd.toString,
      WO = Md.hasOwnProperty,
      FO = Md.toString,
      RO = RegExp("^" + mO.call(WO).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      XO = cd ? Ld.CQ : void 0,
      KO = Ld.Symbol,
      hO = Ld.Uint8Array,
      vO = Cd(Object.getPrototypeOf, Object),
      QO = Object.create,
      tO = Md.propertyIsEnumerable,
      oO = kd.splice,
      NO = Object.getOwnPropertySymbols,
      qO = XO ? XO.isBuffer : void 0,
      HO = Cd(Object.keys, Object),
      yO = cO(Ld, "DataView"),
      bO = cO(Ld, "Map"),
      TO = cO(Ld, "Promise"),
      pO = cO(Ld, "Set"),
      YO = cO(Ld, "WeakMap"),
      gO = cO(Object, "create"),
      wO = lO(yO),
      aO = lO(bO),
      EO = lO(TO),
      JO = lO(pO),
      UO = lO(YO),
      xO = KO ? KO.prototype : void 0,
      BO = xO ? xO.valueOf : void 0;

    function SO(dd) {
      var Od = -1,
        md = dd ? dd.length : 0;
      for (this.clear(); ++Od < md;) {
        var Wd = dd[Od];
        this.set(Wd[0], Wd[1])
      }
    }

    function sO(dd) {
      var Od = -1,
        md = dd ? dd.length : 0;
      for (this.clear(); ++Od < md;) {
        var Wd = dd[Od];
        this.set(Wd[0], Wd[1])
      }
    }

    function uO(dd) {
      var Od = -1,
        md = dd ? dd.length : 0;
      for (this.clear(); ++Od < md;) {
        var Wd = dd[Od];
        this.set(Wd[0], Wd[1])
      }
    }

    function VO(dd) {
      this.__data__ = new sO(dd)
    }

    function iO(dd, Od) {
      var md = ZO(dd) || function(dd) {
          return function(dd) {
            return function(dd) {
              return !!dd && "object" == typeof dd
            }(dd) && kO(dd)
          }(dd) && WO.call(dd, "callee") && (!tO.call(dd, "callee") || FO.call(dd) == Rd)
        }(dd) ? function(dd, Od) {
          for (var md = -1, Wd = Array(dd); ++md < dd;) Wd[md] = Od(md);
          return Wd
        }(dd.length, String) : [],
        Wd = md.length,
        Fd = !!Wd;
      for (var Xd in dd) !Od && !WO.call(dd, Xd) || Fd && ("length" == Xd || eO(Xd, Wd)) || md.push(Xd);
      return md
    }

    function AO(dd, Od, md) {
      var Wd = dd[Od];
      WO.call(dd, Od) && CO(Wd, md) && (void 0 !== md || Od in dd) || (dd[Od] = md)
    }

    function rO(dd, Od) {
      for (var md = dd.length; md--;)
        if (CO(dd[md][0], Od)) return md;
      return -1
    }

    function GO(dd, Od, md, Wd, Fd, Nd, Td) {
      var Vd;
      if (Wd && (Vd = Nd ? Wd(dd, Fd, Nd, Td) : Wd(dd)), void 0 !== Vd) return Vd;
      if (!dm(dd)) return dd;
      var Ad = ZO(dd);
      if (Ad) {
        if (Vd = function(dd) {
            var Od = dd.length,
              md = dd.constructor(Od);
            Od && "string" == typeof dd[0] && WO.call(dd, "index") && (md.index = dd.index, md.input = dd.input);
            return md
          }(dd), !Od) return function(dd, Od) {
          var md = -1,
            Wd = dd.length;
          Od || (Od = Array(Wd));
          for (; ++md < Wd;) Od[md] = dd[md];
          return Od
        }(dd, Vd)
      } else {
        var Gd = DO(dd),
          nd = Gd == hd || Gd == vd;
        if (fO(dd)) return function(dd, Od) {
          if (Od) return dd.slice();
          var md = new dd.constructor(dd.length);
          return dd.copy(md), md
        }(dd, Od);
        if (Gd == od || Gd == Rd || nd && !Nd) {
          if (Id(dd)) return Nd ? dd : {};
          if (Vd = function(dd) {
              return "function" != typeof dd.constructor || IO(dd) ? {} : (Od = vO(dd), dm(Od) ? QO(Od) : {});
              var Od
            }(nd ? {} : dd), !Od) return function(dd, Od) {
            return PO(dd, jO(dd), Od)
          }(dd, function(dd, Od) {
            return dd && PO(Od, Om(Od), dd)
          }(Vd, dd))
        } else {
          if (!rd[Gd]) return Nd ? dd : {};
          Vd = function(dd, Od, md, Wd) {
            var Fd = dd.constructor;
            switch (Od) {
              case pd:
                return LO(dd);
              case Xd:
              case Kd:
                return new Fd(+dd);
              case Yd:
                return function(dd, Od) {
                  var md = Od ? LO(dd.buffer) : dd.buffer;
                  return new dd.constructor(md, dd.byteOffset, dd.byteLength)
                }(dd, Wd);
              case gd:
              case wd:
              case Ed:
              case Jd:
              case Ud:
              case xd:
              case Bd:
              case Sd:
              case sd:
                return function(dd, Od) {
                  var md = Od ? LO(dd.buffer) : dd.buffer;
                  return new dd.constructor(md, dd.byteOffset, dd.length)
                }(dd, Wd);
              case Qd:
                return function(dd, Od, md) {
                  var Wd = Od ? md(ld(dd), !0) : ld(dd);
                  return ed(Wd, jd, new dd.constructor)
                }(dd, Wd, md);
              case td:
              case yd:
                return new Fd(dd);
              case qd:
                return function(dd) {
                  var Od = new dd.constructor(dd.source, ud.exec(dd));
                  return Od.lastIndex = dd.lastIndex, Od
                }(dd);
              case Hd:
                return function(dd, Od, md) {
                  var Wd = Od ? md(Zd(dd), !0) : Zd(dd);
                  return ed(Wd, Dd, new dd.constructor)
                }(dd, Wd, md);
              case bd:
                return Rd = dd, BO ? Object(BO.call(Rd)) : {}
            }
            var Rd
          }(dd, Gd, GO, Od)
        }
      }
      Td || (Td = new VO);
      var Ld = Td.get(dd);
      if (Ld) return Ld;
      if (Td.set(dd, Vd), !Ad) var Pd = md ? function(dd) {
        return function(dd, Od, md) {
          var Wd = Od(dd);
          return ZO(dd) ? Wd : function(dd, Od) {
            for (var md = -1, Wd = Od.length, Fd = dd.length; ++md < Wd;) dd[Fd + md] = Od[md];
            return dd
          }(Wd, md(dd))
        }(dd, Om, jO)
      }(dd) : Om(dd);
      return function(dd, Od) {
        for (var md = -1, Wd = dd ? dd.length : 0; ++md < Wd && !1 !== Od(dd[md], md, dd););
      }(Pd || dd, (function(Fd, Rd) {
        Pd && (Fd = dd[Rd = Fd]), AO(Vd, Rd, GO(Fd, Od, md, Wd, Rd, dd, Td))
      })), Vd
    }

    function nO(dd) {
      return !(!dm(dd) || (Od = dd, OO && OO in Od)) && (MO(dd) || Id(dd) ? RO : Vd).test(lO(dd));
      var Od
    }

    function LO(dd) {
      var Od = new dd.constructor(dd.byteLength);
      return new hO(Od).set(new hO(dd)), Od
    }

    function PO(dd, Od, md, Wd) {
      md || (md = {});
      for (var Fd = -1, Rd = Od.length; ++Fd < Rd;) {
        var Xd = Od[Fd],
          Kd = Wd ? Wd(md[Xd], dd[Xd], Xd, md, dd) : void 0;
        AO(md, Xd, void 0 === Kd ? dd[Xd] : Kd)
      }
      return md
    }

    function zO(dd, Od) {
      var md = dd.__data__;
      return function(dd) {
        var Od = typeof dd;
        return "string" == Od || "number" == Od || "symbol" == Od || "boolean" == Od ? "__proto__" !== dd : null === dd
      }(Od) ? md["string" == typeof Od ? "string" : "hash"] : md.map
    }

    function cO(dd, Od) {
      var md = function(dd, Od) {
        return null == dd ? void 0 : dd[Od]
      }(dd, Od);
      return nO(md) ? md : void 0
    }
    SO.prototype.clear = function() {
      this.__data__ = gO ? gO(null) : {}
    }, SO.prototype.delete = function(dd) {
      return this.has(dd) && delete this.__data__[dd]
    }, SO.prototype.get = function(dd) {
      var Od = this.__data__;
      if (gO) {
        var md = Od[dd];
        return md === Wd ? void 0 : md
      }
      return WO.call(Od, dd) ? Od[dd] : void 0
    }, SO.prototype.has = function(dd) {
      var Od = this.__data__;
      return gO ? void 0 !== Od[dd] : WO.call(Od, dd)
    }, SO.prototype.set = function(dd, Od) {
      return this.__data__[dd] = gO && void 0 === Od ? Wd : Od, this
    }, sO.prototype.clear = function() {
      this.__data__ = []
    }, sO.prototype.delete = function(dd) {
      var Od = this.__data__,
        md = rO(Od, dd);
      return !(md < 0) && (md == Od.length - 1 ? Od.pop() : oO.call(Od, md, 1), !0)
    }, sO.prototype.get = function(dd) {
      var Od = this.__data__,
        md = rO(Od, dd);
      return md < 0 ? void 0 : Od[md][1]
    }, sO.prototype.has = function(dd) {
      return rO(this.__data__, dd) > -1
    }, sO.prototype.set = function(dd, Od) {
      var md = this.__data__,
        Wd = rO(md, dd);
      return Wd < 0 ? md.push([dd, Od]) : md[Wd][1] = Od, this
    }, uO.prototype.clear = function() {
      this.__data__ = {
        hash: new SO,
        map: new(bO || sO),
        string: new SO
      }
    }, uO.prototype.delete = function(dd) {
      return zO(this, dd).delete(dd)
    }, uO.prototype.get = function(dd) {
      return zO(this, dd).get(dd)
    }, uO.prototype.has = function(dd) {
      return zO(this, dd).has(dd)
    }, uO.prototype.set = function(dd, Od) {
      return zO(this, dd).set(dd, Od), this
    }, VO.prototype.clear = function() {
      this.__data__ = new sO
    }, VO.prototype.delete = function(dd) {
      return this.__data__.delete(dd)
    }, VO.prototype.get = function(dd) {
      return this.__data__.get(dd)
    }, VO.prototype.has = function(dd) {
      return this.__data__.has(dd)
    }, VO.prototype.set = function(dd, Od) {
      var md = this.__data__;
      if (md instanceof sO) {
        var Wd = md.__data__;
        if (!bO || Wd.length < 199) return Wd.push([dd, Od]), this;
        md = this.__data__ = new uO(Wd)
      }
      return md.set(dd, Od), this
    };
    var jO = NO ? Cd(NO, Object) : function() {
        return []
      },
      DO = function(dd) {
        return FO.call(dd)
      };

    function eO(dd, Od) {
      return !!(Od = null == Od ? Fd : Od) && ("number" == typeof dd || Ad.test(dd)) && dd > -1 && dd % 1 == 0 && dd < Od
    }

    function IO(dd) {
      var Od = dd && dd.constructor;
      return dd === ("function" == typeof Od && Od.prototype || Md)
    }

    function lO(dd) {
      if (null != dd) {
        try {
          return mO.call(dd)
        } catch (Od) {}
        try {
          return dd + ""
        } catch (Od) {}
      }
      return ""
    }

    function CO(dd, Od) {
      return dd === Od || dd !== dd && Od !== Od
    }(yO && DO(new yO(new ArrayBuffer(1))) != Yd || bO && DO(new bO) != Qd || TO && DO(TO.resolve()) != Nd || pO && DO(new pO) != Hd || YO && DO(new YO) != Td) && (DO = function(dd) {
      var Od = FO.call(dd),
        md = Od == od ? dd.constructor : void 0,
        Wd = md ? lO(md) : void 0;
      if (Wd) switch (Wd) {
        case wO:
          return Yd;
        case aO:
          return Qd;
        case EO:
          return Nd;
        case JO:
          return Hd;
        case UO:
          return Td
      }
      return Od
    });
    var ZO = Array.isArray;

    function kO(dd) {
      return null != dd && function(dd) {
        return "number" == typeof dd && dd > -1 && dd % 1 == 0 && dd <= Fd
      }(dd.length) && !MO(dd)
    }
    var fO = qO || function() {
      return !1
    };

    function MO(dd) {
      var Od = dm(dd) ? FO.call(dd) : "";
      return Od == hd || Od == vd
    }

    function dm(dd) {
      var Od = typeof dd;
      return !!dd && ("object" == Od || "function" == Od)
    }

    function Om(dd) {
      return kO(dd) ? iO(dd) : function(dd) {
        if (!IO(dd)) return HO(dd);
        var Od = [];
        for (var md in Object(dd)) WO.call(dd, md) && "constructor" != md && Od.push(md);
        return Od
      }(dd)
    }
    dd.exports = function(dd) {
      return GO(dd, !0, !0)
    }
  },
  39978: dd => {
    function Od(dd, Od, md) {
      for (var Wd = dd.length, Fd = -1 / 0, Rd = 1 / 0, Xd = 0; Xd < Wd; Xd++) {
        var Kd = (md[0][Xd] - dd[Xd]) / Od[Xd],
          hd = (md[1][Xd] - dd[Xd]) / Od[Xd];
        if (Kd > hd) {
          var vd = Kd;
          Kd = hd, hd = vd
        }
        if (hd < Fd || Kd > Rd) return 1 / 0;
        Kd > Fd && (Fd = Kd), hd < Rd && (Rd = hd)
      }
      return Fd > Rd ? 1 / 0 : Fd
    }
    dd.exports = function(dd, md, Wd, Fd) {
      var Rd = Od(md, Wd, Fd);
      if (Rd === 1 / 0) dd = null;
      else {
        dd = dd || [];
        for (var Xd = 0; Xd < md.length; Xd++) dd[Xd] = md[Xd] + Wd[Xd] * Rd
      }
      return dd
    }, dd.exports.distance = Od
  },
  39263: (dd, Od, md) => {
    var Wd = md(39265);

    function Fd(dd) {
      for (var Od, md, Fd = 0, Rd = dd.length, Xd = 0; Xd < dd.length;) {
        for (Od = dd[Xd], md = 0; Xd < Rd && dd[Xd] === Od;) ++Xd, ++md;
        Fd += Wd.log2(md) / 7 | 0, Fd += Wd.log2(Od >>> 0) / 7 | 0, Fd += 2
      }
      return Fd
    }
    Od.size = Fd, Od.encode = function(dd, Od) {
      Od || (Od = new Uint8Array(Fd(dd)));
      for (var md, Wd, Rd = 0, Xd = Od.length, Kd = 0; Kd < dd.length;) {
        for (md = dd[Kd], Wd = 0; Kd < dd.length && dd[Kd] === md;) ++Kd, ++Wd;
        for (; Rd < Xd && Wd >= 128;) Od[Rd++] = 128 + (127 & Wd), Wd >>>= 7;
        if (Rd >= Xd) throw new Error("RLE buffer overflow");
        for (Od[Rd++] = Wd, md >>>= 0; Rd < Xd && md >= 128;) Od[Rd++] = 128 + (127 & md), md >>>= 7;
        if (Rd >= Xd) throw new Error("RLE buffer overflow");
        Od[Rd++] = md
      }
      return Od
    }, Od.decode = function(dd, Od) {
      for (var md, Wd, Fd, Rd, Xd = Od.length, Kd = dd.length, hd = 0, vd = 0; vd < Kd;) {
        for (md = 0, Wd = 0; vd < Kd && dd[vd] >= 128;) md += (127 & dd[vd++]) << Wd, Wd += 7;
        if (md += dd[vd++] << Wd, vd >= Kd) throw new Error("RLE buffer underrun");
        if (hd + md > Xd) throw new Error("Chunk buffer overflow");
        for (Fd = 0, Wd = 0; vd < Kd && dd[vd] >= 128;) Fd += (127 & dd[vd++]) << Wd, Wd += 7;
        if (vd >= Kd) throw new Error("RLE buffer underrun");
        for (Fd += dd[vd++] << Wd, Rd = 0; Rd < md; ++Rd) Od[hd++] = Fd
      }
      return Od
    }
  },
  39265: (dd, Od) => {
    function md(dd) {
      var Od = 32;
      return (dd &= -dd) && Od--, 65535 & dd && (Od -= 16), 16711935 & dd && (Od -= 8), 252645135 & dd && (Od -= 4), 858993459 & dd && (Od -= 2), 1431655765 & dd && (Od -= 1), Od
    }
    Od.INT_BITS = 32, Od.INT_MAX = 2147483647, Od.INT_MIN = -1 << 31, Od.sign = function(dd) {
      return (dd > 0) - (dd < 0)
    }, Od.abs = function(dd) {
      var Od = dd >> 31;
      return (dd ^ Od) - Od
    }, Od.min = function(dd, Od) {
      return Od ^ (dd ^ Od) & -(dd < Od)
    }, Od.max = function(dd, Od) {
      return dd ^ (dd ^ Od) & -(dd < Od)
    }, Od.isPow2 = function(dd) {
      return !(dd & dd - 1) && !!dd
    }, Od.log2 = function(dd) {
      var Od, md;
      return Od = (dd > 65535) << 4, Od |= md = ((dd >>>= Od) > 255) << 3, Od |= md = ((dd >>>= md) > 15) << 2, (Od |= md = ((dd >>>= md) > 3) << 1) | (dd >>>= md) >> 1
    }, Od.log10 = function(dd) {
      return dd >= 1e9 ? 9 : dd >= 1e8 ? 8 : dd >= 1e7 ? 7 : dd >= 1e6 ? 6 : dd >= 1e5 ? 5 : dd >= 1e4 ? 4 : dd >= 1e3 ? 3 : dd >= 100 ? 2 : dd >= 10 ? 1 : 0
    }, Od.popCount = function(dd) {
      return 16843009 * ((dd = (858993459 & (dd -= dd >>> 1 & 1431655765)) + (dd >>> 2 & 858993459)) + (dd >>> 4) & 252645135) >>> 24
    }, Od.countTrailingZeros = md, Od.nextPow2 = function(dd) {
      return dd += 0 === dd, --dd, dd |= dd >>> 1, dd |= dd >>> 2, dd |= dd >>> 4, dd |= dd >>> 8, (dd |= dd >>> 16) + 1
    }, Od.prevPow2 = function(dd) {
      return dd |= dd >>> 1, dd |= dd >>> 2, dd |= dd >>> 4, dd |= dd >>> 8, (dd |= dd >>> 16) - (dd >>> 1)
    }, Od.parity = function(dd) {
      return dd ^= dd >>> 16, dd ^= dd >>> 8, dd ^= dd >>> 4, 27030 >>> (dd &= 15) & 1
    };
    var Wd = new Array(256);
    ! function(dd) {
      for (var Od = 0; Od < 256; ++Od) {
        var md = Od,
          Wd = Od,
          Fd = 7;
        for (md >>>= 1; md; md >>>= 1) Wd <<= 1, Wd |= 1 & md, --Fd;
        dd[Od] = Wd << Fd & 255
      }
    }(Wd), Od.reverse = function(dd) {
      return Wd[255 & dd] << 24 | Wd[dd >>> 8 & 255] << 16 | Wd[dd >>> 16 & 255] << 8 | Wd[dd >>> 24 & 255]
    }, Od.interleave2 = function(dd, Od) {
      return (dd = 1431655765 & ((dd = 858993459 & ((dd = 252645135 & ((dd = 16711935 & ((dd &= 65535) | dd << 8)) | dd << 4)) | dd << 2)) | dd << 1)) | (Od = 1431655765 & ((Od = 858993459 & ((Od = 252645135 & ((Od = 16711935 & ((Od &= 65535) | Od << 8)) | Od << 4)) | Od << 2)) | Od << 1)) << 1
    }, Od.deinterleave2 = function(dd, Od) {
      return (dd = 65535 & ((dd = 16711935 & ((dd = 252645135 & ((dd = 858993459 & ((dd = dd >>> Od & 1431655765) | dd >>> 1)) | dd >>> 2)) | dd >>> 4)) | dd >>> 16)) << 16 >> 16
    }, Od.interleave3 = function(dd, Od, md) {
      return dd = 1227133513 & ((dd = 3272356035 & ((dd = 251719695 & ((dd = 4278190335 & ((dd &= 1023) | dd << 16)) | dd << 8)) | dd << 4)) | dd << 2), (dd |= (Od = 1227133513 & ((Od = 3272356035 & ((Od = 251719695 & ((Od = 4278190335 & ((Od &= 1023) | Od << 16)) | Od << 8)) | Od << 4)) | Od << 2)) << 1) | (md = 1227133513 & ((md = 3272356035 & ((md = 251719695 & ((md = 4278190335 & ((md &= 1023) | md << 16)) | md << 8)) | md << 4)) | md << 2)) << 2
    }, Od.deinterleave3 = function(dd, Od) {
      return (dd = 1023 & ((dd = 4278190335 & ((dd = 251719695 & ((dd = 3272356035 & ((dd = dd >>> Od & 1227133513) | dd >>> 2)) | dd >>> 4)) | dd >>> 8)) | dd >>> 16)) << 22 >> 22
    }, Od.nextCombination = function(dd) {
      var Od = dd | dd - 1;
      return Od + 1 | (~Od & -~Od) - 1 >>> md(dd) + 1
    }
  },
  38736: (dd, Od, md) => {
    md.d(Od, {
      Color3: () => Wd.d,
      b: () => Wd.f
    });
    var Wd = md(38741);
    (0, Wd.g)()
  },
  39297: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd
    });
    var Wd = md(39306);
    class Fd {
      static GetPlanes(dd) {
        const Od = [];
        for (let md = 0; md < 6; md++) Od.push(new Wd.d(0, 0, 0, 0));
        return Fd.GetPlanesToRef(dd, Od), Od
      }
      static GetNearPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] + md[2], Od.normal.y = md[7] + md[6], Od.normal.z = md[11] + md[10], Od.d = md[15] + md[14], Od.normalize()
      }
      static GetFarPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] - md[2], Od.normal.y = md[7] - md[6], Od.normal.z = md[11] - md[10], Od.d = md[15] - md[14], Od.normalize()
      }
      static GetLeftPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] + md[0], Od.normal.y = md[7] + md[4], Od.normal.z = md[11] + md[8], Od.d = md[15] + md[12], Od.normalize()
      }
      static GetRightPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] - md[0], Od.normal.y = md[7] - md[4], Od.normal.z = md[11] - md[8], Od.d = md[15] - md[12], Od.normalize()
      }
      static GetTopPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] - md[1], Od.normal.y = md[7] - md[5], Od.normal.z = md[11] - md[9], Od.d = md[15] - md[13], Od.normalize()
      }
      static GetBottomPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] + md[1], Od.normal.y = md[7] + md[5], Od.normal.z = md[11] + md[9], Od.d = md[15] + md[13], Od.normalize()
      }
      static GetPlanesToRef(dd, Od) {
        Fd.GetNearPlaneToRef(dd, Od[0]), Fd.GetFarPlaneToRef(dd, Od[1]), Fd.GetLeftPlaneToRef(dd, Od[2]), Fd.GetRightPlaneToRef(dd, Od[3]), Fd.GetTopPlaneToRef(dd, Od[4]), Fd.GetBottomPlaneToRef(dd, Od[5])
      }
      static IsPointInFrustum(dd, Od) {
        for (let md = 0; md < 6; md++)
          if (Od[md].dotCoordinate(dd) < 0) return !1;
        return !0
      }
    }
  },
  39306: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd
    });
    var Wd = md(38636);
    class Fd {
      constructor(dd, Od, md, Fd) {
        this.normal = new Wd.j(dd, Od, md), this.d = Fd
      }
      RRd() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Fd(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let Od = 0;
        return 0 !== dd && (Od = 1 / dd), this.normal.x *= Od, this.normal.y *= Od, this.normal.z *= Od, this.d *= Od, this
      }
      transform(dd) {
        const Od = Fd._TmpMatrix;
        dd.invertToRef(Od);
        const md = Od.m,
          Wd = this.normal.x,
          Rd = this.normal.y,
          Xd = this.normal.z,
          Kd = this.d,
          hd = Wd * md[0] + Rd * md[1] + Xd * md[2] + Kd * md[3],
          vd = Wd * md[4] + Rd * md[5] + Xd * md[6] + Kd * md[7],
          Qd = Wd * md[8] + Rd * md[9] + Xd * md[10] + Kd * md[11],
          td = Wd * md[12] + Rd * md[13] + Xd * md[14] + Kd * md[15];
        return new Fd(hd, vd, Qd, td)
      }
      dotCoordinate(dd) {
        return this.normal.x * dd.x + this.normal.y * dd.y + this.normal.z * dd.z + this.d
      }
      copyFromPoints(dd, Od, md) {
        const Wd = Od.x - dd.x,
          Fd = Od.y - dd.y,
          Rd = Od.z - dd.z,
          Xd = md.x - dd.x,
          Kd = md.y - dd.y,
          hd = md.z - dd.z,
          vd = Fd * hd - Rd * Kd,
          Qd = Rd * Xd - Wd * hd,
          td = Wd * Kd - Fd * Xd,
          od = Math.sqrt(vd * vd + Qd * Qd + td * td);
        let Nd;
        return Nd = 0 !== od ? 1 / od : 0, this.normal.x = vd * Nd, this.normal.y = Qd * Nd, this.normal.z = td * Nd, this.d = -(this.normal.x * dd.x + this.normal.y * dd.y + this.normal.z * dd.z), this
      }
      isFrontFacingTo(dd, Od) {
        return Wd.j.Dot(this.normal, dd) <= Od
      }
      signedDistanceTo(dd) {
        return Wd.j.Dot(dd, this.normal) + this.d
      }
      static FromArray(dd) {
        return new Fd(dd[0], dd[1], dd[2], dd[3])
      }
      static FromPoints(dd, Od, md) {
        const Wd = new Fd(0, 0, 0, 0);
        return Wd.copyFromPoints(dd, Od, md), Wd
      }
      static FromPositionAndNormal(dd, Od) {
        const md = new Fd(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(dd, Od, md)
      }
      static FromPositionAndNormalToRef(dd, Od, md) {
        return md.normal.Bx(Od), md.normal.normalize(), md.d = -dd.dot(md.normal), md
      }
      static SignedDistanceToPlaneFromPositionAndNormal(dd, Od, md) {
        const Fd = -(Od.x * dd.x + Od.y * dd.y + Od.z * dd.z);
        return Wd.j.Dot(md, Od) + Fd
      }
    }
    Fd._TmpMatrix = Wd.d.Identity()
  },
  38627: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      Matrix: () => Wd.d,
      Quaternion: () => Wd.e,
      RegisterMathVector: () => Wd.f,
      TmpVectors: () => Wd.h,
      Vector2: () => Wd.i,
      Cq: () => Wd.j,
      Vector4: () => Wd.k
    });
    var Wd = md(38636);
    (0, Wd.f)()
  },
  39642: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd
    });
    class Wd {
      constructor(dd, Od, md, Wd) {
        this.x = dd, this.y = Od, this.width = md, this.height = Wd
      }
      toGlobal(dd, Od) {
        return new Wd(this.x * dd, this.y * Od, this.width * dd, this.height * Od)
      }
      toGlobalToRef(dd, Od, md) {
        return md.x = this.x * dd, md.y = this.y * Od, md.width = this.width * dd, md.height = this.height * Od, this
      }
      clone() {
        return new Wd(this.x, this.y, this.width, this.height)
      }
    }
  },
  39461: (dd, Od, md) => {
    function Wd() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (dd => {
        const Od = 16 * Math.random() | 0;
        return ("x" === dd ? Od : 3 & Od | 8).toString(16)
      }))
    }
    md.d(Od, {
      b: () => Wd
    })
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);