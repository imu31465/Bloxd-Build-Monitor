/*! For license information please see sn3sfj.233.6ceeec2b.chunk.js.LICENSE.txt */
export const id = 233;
export const ids = [233, 241];
export const modules = {
  38517: pp => {
    pp.exports = function(pp) {
      return null != pp && null != pp.constructor && "function" === typeof pp.constructor.isBuffer && pp.constructor.isBuffer(pp)
    }
  },
  38497: (pp, ip, cp) => {
    var Op = cp(38502),
      op = cp(38510),
      Ip = cp(38517);
    cp.g.__TYPEDARRAY_POOL || (cp.g.__TYPEDARRAY_POOL = {
      UINT8: op([32, 0]),
      UINT16: op([32, 0]),
      UINT32: op([32, 0]),
      INT8: op([32, 0]),
      INT16: op([32, 0]),
      INT32: op([32, 0]),
      FLOAT: op([32, 0]),
      DOUBLE: op([32, 0]),
      DATA: op([32, 0]),
      UINT8C: op([32, 0]),
      BUFFER: op([32, 0])
    });
    var Sp = "undefined" !== typeof Uint8ClampedArray,
      xp = cp.g.__TYPEDARRAY_POOL;
    xp.UINT8C || (xp.UINT8C = op([32, 0])), xp.BUFFER || (xp.BUFFER = op([32, 0]));
    var Lp = xp.DATA,
      Yp = xp.BUFFER;

    function Dp(pp) {
      if (pp) {
        var ip = pp.length || pp.byteLength,
          cp = Op.log2(ip);
        Lp[cp].push(pp)
      }
    }

    function Ap(pp) {
      pp = Op.nextPow2(pp);
      var ip = Op.log2(pp),
        cp = Lp[ip];
      return cp.length > 0 ? cp.pop() : new ArrayBuffer(pp)
    }

    function Pp(pp) {
      return new Uint8Array(Ap(pp), 0, pp)
    }

    function Wp(pp) {
      return new Uint16Array(Ap(2 * pp), 0, pp)
    }

    function yp(pp) {
      return new Uint32Array(Ap(4 * pp), 0, pp)
    }

    function Up(pp) {
      return new Int8Array(Ap(pp), 0, pp)
    }

    function wp(pp) {
      return new Int16Array(Ap(2 * pp), 0, pp)
    }

    function vp(pp) {
      return new Int32Array(Ap(4 * pp), 0, pp)
    }

    function tp(pp) {
      return new Float32Array(Ap(4 * pp), 0, pp)
    }

    function Hp(pp) {
      return new Float64Array(Ap(8 * pp), 0, pp)
    }

    function dp(pp) {
      return Sp ? new Uint8ClampedArray(Ap(pp), 0, pp) : Pp(pp)
    }

    function ep(pp) {
      return new DataView(Ap(pp), 0, pp)
    }
    ip.free = function(pp) {
      if (Ip(pp)) Yp[Op.log2(pp.length)].push(pp);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(pp) && (pp = pp.buffer), !pp) return;
        var ip = pp.length || pp.byteLength,
          cp = 0 | Op.log2(ip);
        Lp[cp].push(pp)
      }
    }, ip.freeUint8 = ip.freeUint16 = ip.freeUint32 = ip.freeInt8 = ip.freeInt16 = ip.freeInt32 = ip.freeFloat32 = ip.freeFloat = ip.freeFloat64 = ip.freeDouble = ip.freeUint8Clamped = ip.freeDataView = function(pp) {
      Dp(pp.buffer)
    }, ip.freeArrayBuffer = Dp, ip.freeBuffer = function(pp) {
      Yp[Op.log2(pp.length)].push(pp)
    }, ip.malloc = function(pp, ip) {
      if (void 0 === ip || "arraybuffer" === ip) return Ap(pp);
      switch (ip) {
        case "uint8":
          return Pp(pp);
        case "uint16":
          return Wp(pp);
        case "uint32":
          return yp(pp);
        case "int8":
          return Up(pp);
        case "int16":
          return wp(pp);
        case "int32":
          return vp(pp);
        case "float":
        case "float32":
          return tp(pp);
        case "double":
        case "float64":
          return Hp(pp);
        case "uint8_clamped":
          return dp(pp);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return ep(pp);
        default:
          return null
      }
      return null
    }, ip.mallocArrayBuffer = Ap, ip.mallocUint8 = Pp, ip.mallocUint16 = Wp, ip.mallocUint32 = yp, ip.mallocInt8 = Up, ip.mallocInt16 = wp, ip.mallocInt32 = vp, ip.mallocFloat32 = ip.mallocFloat = tp, ip.mallocFloat64 = ip.mallocDouble = Hp, ip.mallocUint8Clamped = dp, ip.mallocDataView = ep, ip.clearCache = function() {
      for (var pp = 0; pp < 32; ++pp) xp.UINT8[pp].length = 0, xp.UINT16[pp].length = 0, xp.UINT32[pp].length = 0, xp.INT8[pp].length = 0, xp.INT16[pp].length = 0, xp.INT32[pp].length = 0, xp.FLOAT[pp].length = 0, xp.DOUBLE[pp].length = 0, xp.UINT8C[pp].length = 0, Lp[pp].length = 0, Yp[pp].length = 0
    }
  },
  38502: (pp, ip) => {
    function cp(pp) {
      var ip = 32;
      return (pp &= -pp) && ip--, 65535 & pp && (ip -= 16), 16711935 & pp && (ip -= 8), 252645135 & pp && (ip -= 4), 858993459 & pp && (ip -= 2), 1431655765 & pp && (ip -= 1), ip
    }
    ip.INT_BITS = 32, ip.INT_MAX = 2147483647, ip.INT_MIN = -1 << 31, ip.sign = function(pp) {
      return (pp > 0) - (pp < 0)
    }, ip.abs = function(pp) {
      var ip = pp >> 31;
      return (pp ^ ip) - ip
    }, ip.min = function(pp, ip) {
      return ip ^ (pp ^ ip) & -(pp < ip)
    }, ip.max = function(pp, ip) {
      return pp ^ (pp ^ ip) & -(pp < ip)
    }, ip.isPow2 = function(pp) {
      return !(pp & pp - 1) && !!pp
    }, ip.log2 = function(pp) {
      var ip, cp;
      return ip = (pp > 65535) << 4, ip |= cp = ((pp >>>= ip) > 255) << 3, ip |= cp = ((pp >>>= cp) > 15) << 2, (ip |= cp = ((pp >>>= cp) > 3) << 1) | (pp >>>= cp) >> 1
    }, ip.log10 = function(pp) {
      return pp >= 1e9 ? 9 : pp >= 1e8 ? 8 : pp >= 1e7 ? 7 : pp >= 1e6 ? 6 : pp >= 1e5 ? 5 : pp >= 1e4 ? 4 : pp >= 1e3 ? 3 : pp >= 100 ? 2 : pp >= 10 ? 1 : 0
    }, ip.popCount = function(pp) {
      return 16843009 * ((pp = (858993459 & (pp -= pp >>> 1 & 1431655765)) + (pp >>> 2 & 858993459)) + (pp >>> 4) & 252645135) >>> 24
    }, ip.countTrailingZeros = cp, ip.nextPow2 = function(pp) {
      return pp += 0 === pp, --pp, pp |= pp >>> 1, pp |= pp >>> 2, pp |= pp >>> 4, pp |= pp >>> 8, (pp |= pp >>> 16) + 1
    }, ip.prevPow2 = function(pp) {
      return pp |= pp >>> 1, pp |= pp >>> 2, pp |= pp >>> 4, pp |= pp >>> 8, (pp |= pp >>> 16) - (pp >>> 1)
    }, ip.parity = function(pp) {
      return pp ^= pp >>> 16, pp ^= pp >>> 8, pp ^= pp >>> 4, 27030 >>> (pp &= 15) & 1
    };
    var Op = new Array(256);
    ! function(pp) {
      for (var ip = 0; ip < 256; ++ip) {
        var cp = ip,
          Op = ip,
          op = 7;
        for (cp >>>= 1; cp; cp >>>= 1) Op <<= 1, Op |= 1 & cp, --op;
        pp[ip] = Op << op & 255
      }
    }(Op), ip.reverse = function(pp) {
      return Op[255 & pp] << 24 | Op[pp >>> 8 & 255] << 16 | Op[pp >>> 16 & 255] << 8 | Op[pp >>> 24 & 255]
    }, ip.interleave2 = function(pp, ip) {
      return (pp = 1431655765 & ((pp = 858993459 & ((pp = 252645135 & ((pp = 16711935 & ((pp &= 65535) | pp << 8)) | pp << 4)) | pp << 2)) | pp << 1)) | (ip = 1431655765 & ((ip = 858993459 & ((ip = 252645135 & ((ip = 16711935 & ((ip &= 65535) | ip << 8)) | ip << 4)) | ip << 2)) | ip << 1)) << 1
    }, ip.deinterleave2 = function(pp, ip) {
      return (pp = 65535 & ((pp = 16711935 & ((pp = 252645135 & ((pp = 858993459 & ((pp = pp >>> ip & 1431655765) | pp >>> 1)) | pp >>> 2)) | pp >>> 4)) | pp >>> 16)) << 16 >> 16
    }, ip.interleave3 = function(pp, ip, cp) {
      return pp = 1227133513 & ((pp = 3272356035 & ((pp = 251719695 & ((pp = 4278190335 & ((pp &= 1023) | pp << 16)) | pp << 8)) | pp << 4)) | pp << 2), (pp |= (ip = 1227133513 & ((ip = 3272356035 & ((ip = 251719695 & ((ip = 4278190335 & ((ip &= 1023) | ip << 16)) | ip << 8)) | ip << 4)) | ip << 2)) << 1) | (cp = 1227133513 & ((cp = 3272356035 & ((cp = 251719695 & ((cp = 4278190335 & ((cp &= 1023) | cp << 16)) | cp << 8)) | cp << 4)) | cp << 2)) << 2
    }, ip.deinterleave3 = function(pp, ip) {
      return (pp = 1023 & ((pp = 4278190335 & ((pp = 251719695 & ((pp = 3272356035 & ((pp = pp >>> ip & 1227133513) | pp >>> 2)) | pp >>> 4)) | pp >>> 8)) | pp >>> 16)) << 22 >> 22
    }, ip.nextCombination = function(pp) {
      var ip = pp | pp - 1;
      return ip + 1 | (~ip & -~ip) - 1 >>> cp(pp) + 1
    }
  },
  38488: (pp, ip, cp) => {
    pp.exports = function(pp, ip, cp) {
      switch (arguments.length) {
        case 1:
          return Op = [], Yp(op = pp, op, Dp, !0), Op;
        case 2:
          return "function" === typeof ip ? Yp(pp, pp, ip, !0) : function(pp, ip) {
            return Op = [], Yp(pp, ip, Dp, !1), Op
          }(pp, ip);
        case 3:
          return Yp(pp, ip, cp, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var op
    };
    var Op, op = cp(38497),
      Ip = cp(38519),
      Sp = cp(38531);

    function xp(pp, ip) {
      for (var cp = 0; cp < pp; ++cp)
        if (!(ip[cp] <= ip[cp + pp])) return !0;
      return !1
    }

    function Lp(pp, ip, cp, Op) {
      for (var op = 0, Ip = 0, Sp = 0, Lp = pp.length; Sp < Lp; ++Sp) {
        var Yp = pp[Sp];
        if (!xp(ip, Yp)) {
          for (var Dp = 0; Dp < 2 * ip; ++Dp) cp[op++] = Yp[Dp];
          Op[Ip++] = Sp
        }
      }
      return Ip
    }

    function Yp(pp, ip, cp, Op) {
      var xp = pp.length,
        Yp = ip.length;
      if (!(xp <= 0 || Yp <= 0)) {
        var Dp = pp[0].length >>> 1;
        if (!(Dp <= 0)) {
          var Ap, Pp = op.mallocDouble(2 * Dp * xp),
            Wp = op.mallocInt32(xp);
          if ((xp = Lp(pp, Dp, Pp, Wp)) > 0) {
            if (1 === Dp && Op) Ip.init(xp), Ap = Ip.sweepComplete(Dp, cp, 0, xp, Pp, Wp, 0, xp, Pp, Wp);
            else {
              var yp = op.mallocDouble(2 * Dp * Yp),
                Up = op.mallocInt32(Yp);
              (Yp = Lp(ip, Dp, yp, Up)) > 0 && (Ip.init(xp + Yp), Ap = 1 === Dp ? Ip.sweepBipartite(Dp, cp, 0, xp, Pp, Wp, 0, Yp, yp, Up) : Sp(Dp, cp, Op, xp, Pp, Wp, Yp, yp, Up), op.free(yp), op.free(Up))
            }
            op.free(Pp), op.free(Wp)
          }
          return Ap
        }
      }
    }

    function Dp(pp, ip) {
      Op.push([pp, ip])
    }
  },
  38533: (pp, ip) => {
    var cp = "d",
      Op = "ax",
      op = "fp",
      Ip = "es",
      Sp = "rs",
      xp = "re",
      Lp = "rb",
      Yp = "bs",
      Dp = "be",
      Ap = "bb",
      Pp = [cp, Op, "vv", Sp, xp, Lp, "ri", Yp, Dp, Ap, "bi"];

    function Wp(pp) {
      var ip = "bruteForce" + (pp ? "Full" : "Partial"),
        Op = [],
        Sp = Pp.slice();
      pp || Sp.splice(3, 0, op);
      var xp = ["function " + ip + "(" + Sp.join() + "){"];

      function Lp(ip, op) {
        var Sp = function(pp, ip, Op) {
          var op = "bruteForce" + (pp ? "Red" : "Blue") + (ip ? "Flip" : "") + (Op ? "Full" : ""),
            Sp = ["function ", op, "(", Pp.join(), "){", "var ", Ip, "=2*", cp, ";"],
            xp = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            Lp = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (Op ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return pp ? Sp.push(xp, "Q", ":", Lp) : Sp.push(Lp, "Q", ":", xp), Op ? Sp.push("if(y1<x0||x1<y0)continue;") : ip ? Sp.push("if(y0<=x0||x1<y0)continue;") : Sp.push("if(y0<x0||x1<y0)continue;"), Sp.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), ip ? Sp.push("yi,xi") : Sp.push("xi,yi"), Sp.push(");if(rv!==void 0)return rv;}}}"), {
            name: op,
            code: Sp.join("")
          }
        }(ip, op, pp);
        Op.push(Sp.code), xp.push("return " + Sp.name + "(" + Pp.join() + ");")
      }
      xp.push("if(re-rs>be-bs){"), pp ? (Lp(!0, !1), xp.push("}else{"), Lp(!1, !1)) : (xp.push("if(fp){"), Lp(!0, !0), xp.push("}else{"), Lp(!0, !1), xp.push("}}else{if(fp){"), Lp(!1, !0), xp.push("}else{"), Lp(!1, !1), xp.push("}")), xp.push("}}return " + ip);
      var Yp = Op.join("") + xp.join("");
      return new Function(Yp)()
    }
    ip.partial = Wp(!1), ip.full = Wp(!0)
  },
  38531: (pp, ip, cp) => {
    pp.exports = function(pp, ip, cp, Ip, Dp, Mp, Cp, Ep, Xp) {
      ! function(pp, ip) {
        var cp = 8 * op.log2(ip + 1) * (pp + 1) | 0,
          Ip = op.nextPow2(dp * cp);
        jp.length < Ip && (Op.free(jp), jp = Op.mallocInt32(Ip));
        var Sp = op.nextPow2(ep * cp);
        kp.length < Sp && (Op.free(kp), kp = Op.mallocDouble(Sp))
      }(pp, Ip + Cp);
      var lp, Qp = 0,
        Jp = 2 * pp;
      mp(Qp++, 0, 0, Ip, 0, Cp, cp ? 16 : 0, -1 / 0, 1 / 0), cp || mp(Qp++, 0, 0, Cp, 0, Ip, 1, -1 / 0, 1 / 0);
      for (; Qp > 0;) {
        var Bp = (Qp -= 1) * dp,
          Np = jp[Bp],
          Tp = jp[Bp + 1],
          fp = jp[Bp + 2],
          bp = jp[Bp + 3],
          hp = jp[Bp + 4],
          ap = jp[Bp + 5],
          np = Qp * ep,
          Fp = kp[np],
          gp = kp[np + 1],
          Gp = 1 & ap,
          rp = !!(16 & ap),
          Zp = Dp,
          zp = Mp,
          sp = Ep,
          Kp = Xp;
        if (Gp && (Zp = Ep, zp = Xp, sp = Dp, Kp = Mp), !(2 & ap && Tp >= (fp = wp(pp, Np, Tp, fp, Zp, zp, gp))) && !(4 & ap && (Tp = vp(pp, Np, Tp, fp, Zp, zp, Fp)) >= fp)) {
          var Vp = fp - Tp,
            ii = hp - bp;
          if (rp) {
            if (pp * Vp * (Vp + ii) < Wp) {
              if (void 0 !== (lp = Lp.scanComplete(pp, Np, ip, Tp, fp, Zp, zp, bp, hp, sp, Kp))) return lp;
              continue
            }
          } else {
            if (pp * Math.min(Vp, ii) < Ap) {
              if (void 0 !== (lp = Sp(pp, Np, ip, Gp, Tp, fp, Zp, zp, bp, hp, sp, Kp))) return lp;
              continue
            }
            if (pp * Vp * ii < Pp) {
              if (void 0 !== (lp = Lp.scanBipartite(pp, Np, ip, Gp, Tp, fp, Zp, zp, bp, hp, sp, Kp))) return lp;
              continue
            }
          }
          var ci = yp(pp, Np, Tp, fp, Zp, zp, Fp, gp);
          if (Tp < ci)
            if (pp * (ci - Tp) < Ap) {
              if (void 0 !== (lp = xp(pp, Np + 1, ip, Tp, ci, Zp, zp, bp, hp, sp, Kp))) return lp
            } else if (Np === pp - 2) {
            if (void 0 !== (lp = Gp ? Lp.sweepBipartite(pp, ip, bp, hp, sp, Kp, Tp, ci, Zp, zp) : Lp.sweepBipartite(pp, ip, Tp, ci, Zp, zp, bp, hp, sp, Kp))) return lp
          } else mp(Qp++, Np + 1, Tp, ci, bp, hp, Gp, -1 / 0, 1 / 0), mp(Qp++, Np + 1, bp, hp, Tp, ci, 1 ^ Gp, -1 / 0, 1 / 0);
          if (ci < fp) {
            var Oi = Yp(pp, Np, bp, hp, sp, Kp),
              oi = sp[Jp * Oi + Np],
              Ii = Up(pp, Np, Oi, hp, sp, Kp, oi);
            if (Ii < hp && mp(Qp++, Np, ci, fp, Ii, hp, (4 | Gp) + (rp ? 16 : 0), oi, gp), bp < Oi && mp(Qp++, Np, ci, fp, bp, Oi, (2 | Gp) + (rp ? 16 : 0), Fp, oi), Oi + 1 === Ii) {
              if (void 0 !== (lp = rp ? qp(pp, Np, ip, ci, fp, Zp, zp, Oi, sp, Kp[Oi]) : Rp(pp, Np, ip, Gp, ci, fp, Zp, zp, Oi, sp, Kp[Oi]))) return lp
            } else if (Oi < Ii) {
              var Si;
              if (rp) {
                if (ci < (Si = tp(pp, Np, ci, fp, Zp, zp, oi))) {
                  var xi = Up(pp, Np, ci, Si, Zp, zp, oi);
                  if (Np === pp - 2) {
                    if (ci < xi && void 0 !== (lp = Lp.sweepComplete(pp, ip, ci, xi, Zp, zp, Oi, Ii, sp, Kp))) return lp;
                    if (xi < Si && void 0 !== (lp = Lp.sweepBipartite(pp, ip, xi, Si, Zp, zp, Oi, Ii, sp, Kp))) return lp
                  } else ci < xi && mp(Qp++, Np + 1, ci, xi, Oi, Ii, 16, -1 / 0, 1 / 0), xi < Si && (mp(Qp++, Np + 1, xi, Si, Oi, Ii, 0, -1 / 0, 1 / 0), mp(Qp++, Np + 1, Oi, Ii, xi, Si, 1, -1 / 0, 1 / 0))
                }
              } else ci < (Si = Gp ? Hp(pp, Np, ci, fp, Zp, zp, oi) : tp(pp, Np, ci, fp, Zp, zp, oi)) && (Np === pp - 2 ? lp = Gp ? Lp.sweepBipartite(pp, ip, Oi, Ii, sp, Kp, ci, Si, Zp, zp) : Lp.sweepBipartite(pp, ip, ci, Si, Zp, zp, Oi, Ii, sp, Kp) : (mp(Qp++, Np + 1, ci, Si, Oi, Ii, Gp, -1 / 0, 1 / 0), mp(Qp++, Np + 1, Oi, Ii, ci, Si, 1 ^ Gp, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var Op = cp(38497),
      op = cp(38502),
      Ip = cp(38533),
      Sp = Ip.partial,
      xp = Ip.full,
      Lp = cp(38519),
      Yp = cp(38541),
      Dp = cp(38548),
      Ap = 128,
      Pp = 1 << 22,
      Wp = 1 << 22,
      yp = Dp("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      Up = Dp("lo===p0", ["p0"]),
      wp = Dp("lo<p0", ["p0"]),
      vp = Dp("hi<=p0", ["p0"]),
      tp = Dp("lo<=p0&&p0<=hi", ["p0"]),
      Hp = Dp("lo<p0&&p0<=hi", ["p0"]),
      dp = 6,
      ep = 2,
      jp = Op.mallocInt32(1024),
      kp = Op.mallocDouble(1024);

    function mp(pp, ip, cp, Op, op, Ip, Sp, xp, Lp) {
      var Yp = dp * pp;
      jp[Yp] = ip, jp[Yp + 1] = cp, jp[Yp + 2] = Op, jp[Yp + 3] = op, jp[Yp + 4] = Ip, jp[Yp + 5] = Sp;
      var Dp = ep * pp;
      kp[Dp] = xp, kp[Dp + 1] = Lp
    }

    function Rp(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp, Dp) {
      var Ap = 2 * pp,
        Pp = Lp * Ap,
        Wp = Yp[Pp + ip];
      pp: for (var yp = op, Up = op * Ap; yp < Ip; ++yp, Up += Ap) {
        var wp = Sp[Up + ip],
          vp = Sp[Up + ip + pp];
        if (!(Wp < wp || vp < Wp) && (!Op || Wp !== wp)) {
          for (var tp, Hp = xp[yp], dp = ip + 1; dp < pp; ++dp) {
            wp = Sp[Up + dp], vp = Sp[Up + dp + pp];
            var ep = Yp[Pp + dp],
              jp = Yp[Pp + dp + pp];
            if (vp < ep || jp < wp) continue pp
          }
          if (void 0 !== (tp = Op ? cp(Dp, Hp) : cp(Hp, Dp))) return tp
        }
      }
    }

    function qp(pp, ip, cp, Op, op, Ip, Sp, xp, Lp, Yp) {
      var Dp = 2 * pp,
        Ap = xp * Dp,
        Pp = Lp[Ap + ip];
      pp: for (var Wp = Op, yp = Op * Dp; Wp < op; ++Wp, yp += Dp) {
        var Up = Sp[Wp];
        if (Up !== Yp) {
          var wp = Ip[yp + ip],
            vp = Ip[yp + ip + pp];
          if (!(Pp < wp || vp < Pp)) {
            for (var tp = ip + 1; tp < pp; ++tp) {
              wp = Ip[yp + tp], vp = Ip[yp + tp + pp];
              var Hp = Lp[Ap + tp],
                dp = Lp[Ap + tp + pp];
              if (vp < Hp || dp < wp) continue pp
            }
            var ep = cp(Up, Yp);
            if (void 0 !== ep) return ep
          }
        }
      }
    }
  },
  38541: (pp, ip, cp) => {
    pp.exports = function(pp, ip, cp, Sp, xp, Lp) {
      if (Sp <= cp + 1) return cp;
      var Yp = cp,
        Dp = Sp,
        Ap = Sp + cp >>> 1,
        Pp = 2 * pp,
        Wp = Ap,
        yp = xp[Pp * Ap + ip];
      for (; Yp < Dp;) {
        if (Dp - Yp < op) {
          Ip(pp, ip, Yp, Dp, xp, Lp), yp = xp[Pp * Ap + ip];
          break
        }
        var Up = Dp - Yp,
          wp = Math.random() * Up + Yp | 0,
          vp = xp[Pp * wp + ip],
          tp = Math.random() * Up + Yp | 0,
          Hp = xp[Pp * tp + ip],
          dp = Math.random() * Up + Yp | 0,
          ep = xp[Pp * dp + ip];
        vp <= Hp ? ep >= Hp ? (Wp = tp, yp = Hp) : vp >= ep ? (Wp = wp, yp = vp) : (Wp = dp, yp = ep) : Hp >= ep ? (Wp = tp, yp = Hp) : ep >= vp ? (Wp = wp, yp = vp) : (Wp = dp, yp = ep);
        for (var jp = Pp * (Dp - 1), kp = Pp * Wp, mp = 0; mp < Pp; ++mp, ++jp, ++kp) {
          var Rp = xp[jp];
          xp[jp] = xp[kp], xp[kp] = Rp
        }
        var qp = Lp[Dp - 1];
        Lp[Dp - 1] = Lp[Wp], Lp[Wp] = qp;
        for (jp = Pp * (Dp - 1), kp = Pp * (Wp = Op(pp, ip, Yp, Dp - 1, xp, Lp, yp)), mp = 0; mp < Pp; ++mp, ++jp, ++kp) {
          Rp = xp[jp];
          xp[jp] = xp[kp], xp[kp] = Rp
        }
        qp = Lp[Dp - 1];
        if (Lp[Dp - 1] = Lp[Wp], Lp[Wp] = qp, Ap < Wp) {
          for (Dp = Wp - 1; Yp < Dp && xp[Pp * (Dp - 1) + ip] === yp;) Dp -= 1;
          Dp += 1
        } else {
          if (!(Wp < Ap)) break;
          for (Yp = Wp + 1; Yp < Dp && xp[Pp * Yp + ip] === yp;) Yp += 1
        }
      }
      return Op(pp, ip, cp, Ap, xp, Lp, xp[Pp * Ap + ip])
    };
    var Op = cp(38548)("lo<p0", ["p0"]),
      op = 8;

    function Ip(pp, ip, cp, Op, op, Ip) {
      for (var Sp = 2 * pp, xp = Sp * (cp + 1) + ip, Lp = cp + 1; Lp < Op; ++Lp, xp += Sp)
        for (var Yp = op[xp], Dp = Lp, Ap = Sp * (Lp - 1); Dp > cp && op[Ap + ip] > Yp; --Dp, Ap -= Sp) {
          for (var Pp = Ap, Wp = Ap + Sp, yp = 0; yp < Sp; ++yp, ++Pp, ++Wp) {
            var Up = op[Pp];
            op[Pp] = op[Wp], op[Wp] = Up
          }
          var wp = Ip[Dp];
          Ip[Dp] = Ip[Dp - 1], Ip[Dp - 1] = wp
        }
    }
  },
  38548: pp => {
    pp.exports = function(pp, cp) {
      var Op = "abcdef".split("").concat(cp),
        op = [];
      pp.indexOf("lo") >= 0 && op.push("lo=e[k+n]");
      pp.indexOf("hi") >= 0 && op.push("hi=e[k+o]");
      return Op.push(ip.replace("_", op.join()).replace("$", pp)), Function.apply(void 0, Op)
    };
    var ip = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  38526: pp => {
    pp.exports = function(pp, Op) {
      Op <= 4 * ip ? cp(0, Op - 1, pp) : Yp(0, Op - 1, pp)
    };
    var ip = 32;

    function cp(pp, ip, cp) {
      for (var Op = 2 * (pp + 1), op = pp + 1; op <= ip; ++op) {
        for (var Ip = cp[Op++], Sp = cp[Op++], xp = op, Lp = Op - 2; xp-- > pp;) {
          var Yp = cp[Lp - 2],
            Dp = cp[Lp - 1];
          if (Yp < Ip) break;
          if (Yp === Ip && Dp < Sp) break;
          cp[Lp] = Yp, cp[Lp + 1] = Dp, Lp -= 2
        }
        cp[Lp] = Ip, cp[Lp + 1] = Sp
      }
    }

    function Op(pp, ip, cp) {
      ip *= 2;
      var Op = cp[pp *= 2],
        op = cp[pp + 1];
      cp[pp] = cp[ip], cp[pp + 1] = cp[ip + 1], cp[ip] = Op, cp[ip + 1] = op
    }

    function op(pp, ip, cp) {
      ip *= 2, cp[pp *= 2] = cp[ip], cp[pp + 1] = cp[ip + 1]
    }

    function Ip(pp, ip, cp, Op) {
      ip *= 2, cp *= 2;
      var op = Op[pp *= 2],
        Ip = Op[pp + 1];
      Op[pp] = Op[ip], Op[pp + 1] = Op[ip + 1], Op[ip] = Op[cp], Op[ip + 1] = Op[cp + 1], Op[cp] = op, Op[cp + 1] = Ip
    }

    function Sp(pp, ip, cp, Op, op) {
      ip *= 2, op[pp *= 2] = op[ip], op[ip] = cp, op[pp + 1] = op[ip + 1], op[ip + 1] = Op
    }

    function xp(pp, ip, cp) {
      ip *= 2;
      var Op = cp[pp *= 2],
        op = cp[ip];
      return !(Op < op) && (Op !== op || cp[pp + 1] > cp[ip + 1])
    }

    function Lp(pp, ip, cp, Op) {
      var op = Op[pp *= 2];
      return op < ip || op === ip && Op[pp + 1] < cp
    }

    function Yp(pp, Dp, Ap) {
      var Pp = (Dp - pp + 1) / 6 | 0,
        Wp = pp + Pp,
        yp = Dp - Pp,
        Up = pp + Dp >> 1,
        wp = Up - Pp,
        vp = Up + Pp,
        tp = Wp,
        Hp = wp,
        dp = Up,
        ep = vp,
        jp = yp,
        kp = pp + 1,
        mp = Dp - 1,
        Rp = 0;
      xp(tp, Hp, Ap) && (Rp = tp, tp = Hp, Hp = Rp), xp(ep, jp, Ap) && (Rp = ep, ep = jp, jp = Rp), xp(tp, dp, Ap) && (Rp = tp, tp = dp, dp = Rp), xp(Hp, dp, Ap) && (Rp = Hp, Hp = dp, dp = Rp), xp(tp, ep, Ap) && (Rp = tp, tp = ep, ep = Rp), xp(dp, ep, Ap) && (Rp = dp, dp = ep, ep = Rp), xp(Hp, jp, Ap) && (Rp = Hp, Hp = jp, jp = Rp), xp(Hp, dp, Ap) && (Rp = Hp, Hp = dp, dp = Rp), xp(ep, jp, Ap) && (Rp = ep, ep = jp, jp = Rp);
      for (var qp = Ap[2 * Hp], Mp = Ap[2 * Hp + 1], Cp = Ap[2 * ep], Ep = Ap[2 * ep + 1], Xp = 2 * tp, lp = 2 * dp, Qp = 2 * jp, Jp = 2 * Wp, Bp = 2 * Up, Np = 2 * yp, Tp = 0; Tp < 2; ++Tp) {
        var fp = Ap[Xp + Tp],
          bp = Ap[lp + Tp],
          hp = Ap[Qp + Tp];
        Ap[Jp + Tp] = fp, Ap[Bp + Tp] = bp, Ap[Np + Tp] = hp
      }
      op(wp, pp, Ap), op(vp, Dp, Ap);
      for (var ap = kp; ap <= mp; ++ap)
        if (Lp(ap, qp, Mp, Ap)) ap !== kp && Op(ap, kp, Ap), ++kp;
        else if (!Lp(ap, Cp, Ep, Ap))
        for (;;) {
          if (Lp(mp, Cp, Ep, Ap)) {
            Lp(mp, qp, Mp, Ap) ? (Ip(ap, kp, mp, Ap), ++kp, --mp) : (Op(ap, mp, Ap), --mp);
            break
          }
          if (--mp < ap) break
        }
      Sp(pp, kp - 1, qp, Mp, Ap), Sp(Dp, mp + 1, Cp, Ep, Ap), kp - 2 - pp <= ip ? cp(pp, kp - 2, Ap) : Yp(pp, kp - 2, Ap), Dp - (mp + 2) <= ip ? cp(mp + 2, Dp, Ap) : Yp(mp + 2, Dp, Ap), mp - kp <= ip ? cp(kp, mp, Ap) : Yp(kp, mp, Ap)
    }
  },
  38519: (pp, ip, cp) => {
    pp.exports = {
      init: function(pp) {
        var ip = op.nextPow2(pp);
        Lp.length < ip && (Op.free(Lp), Lp = Op.mallocInt32(ip));
        Yp.length < ip && (Op.free(Yp), Yp = Op.mallocInt32(ip));
        Dp.length < ip && (Op.free(Dp), Dp = Op.mallocInt32(ip));
        Ap.length < ip && (Op.free(Ap), Ap = Op.mallocInt32(ip));
        Pp.length < ip && (Op.free(Pp), Pp = Op.mallocInt32(ip));
        Wp.length < ip && (Op.free(Wp), Wp = Op.mallocInt32(ip));
        var cp = 8 * ip;
        yp.length < cp && (Op.free(yp), yp = Op.mallocDouble(cp))
      },
      sweepBipartite: function(pp, ip, cp, Op, op, xp, Pp, Wp, vp, tp) {
        for (var Hp = 0, dp = 2 * pp, ep = pp - 1, jp = dp - 1, kp = cp; kp < Op; ++kp) {
          var mp = xp[kp],
            Rp = dp * kp;
          yp[Hp++] = op[Rp + ep], yp[Hp++] = -(mp + 1), yp[Hp++] = op[Rp + jp], yp[Hp++] = mp
        }
        for (kp = Pp; kp < Wp; ++kp) {
          mp = tp[kp] + Sp;
          var qp = dp * kp;
          yp[Hp++] = vp[qp + ep], yp[Hp++] = -mp, yp[Hp++] = vp[qp + jp], yp[Hp++] = mp
        }
        var Mp = Hp >>> 1;
        Ip(yp, Mp);
        var Cp = 0,
          Ep = 0;
        for (kp = 0; kp < Mp; ++kp) {
          var Xp = 0 | yp[2 * kp + 1];
          if (Xp >= Sp) Up(Dp, Ap, Ep--, Xp = Xp - Sp | 0);
          else if (Xp >= 0) Up(Lp, Yp, Cp--, Xp);
          else if (Xp <= -Sp) {
            Xp = -Xp - Sp | 0;
            for (var lp = 0; lp < Cp; ++lp) {
              if (void 0 !== (Qp = ip(Lp[lp], Xp))) return Qp
            }
            wp(Dp, Ap, Ep++, Xp)
          } else {
            Xp = -Xp - 1 | 0;
            for (lp = 0; lp < Ep; ++lp) {
              var Qp;
              if (void 0 !== (Qp = ip(Xp, Dp[lp]))) return Qp
            }
            wp(Lp, Yp, Cp++, Xp)
          }
        }
      },
      sweepComplete: function(pp, ip, cp, Op, op, Sp, xp, vp, tp, Hp) {
        for (var dp = 0, ep = 2 * pp, jp = pp - 1, kp = ep - 1, mp = cp; mp < Op; ++mp) {
          var Rp = Sp[mp] + 1 << 1,
            qp = ep * mp;
          yp[dp++] = op[qp + jp], yp[dp++] = -Rp, yp[dp++] = op[qp + kp], yp[dp++] = Rp
        }
        for (mp = xp; mp < vp; ++mp) {
          Rp = Hp[mp] + 1 << 1;
          var Mp = ep * mp;
          yp[dp++] = tp[Mp + jp], yp[dp++] = 1 | -Rp, yp[dp++] = tp[Mp + kp], yp[dp++] = 1 | Rp
        }
        var Cp = dp >>> 1;
        Ip(yp, Cp);
        var Ep = 0,
          Xp = 0,
          lp = 0;
        for (mp = 0; mp < Cp; ++mp) {
          var Qp = 0 | yp[2 * mp + 1],
            Jp = 1 & Qp;
          if (mp < Cp - 1 && Qp >> 1 === yp[2 * mp + 3] >> 1 && (Jp = 2, mp += 1), Qp < 0) {
            for (var Bp = -(Qp >> 1) - 1, Np = 0; Np < lp; ++Np) {
              if (void 0 !== (Tp = ip(Pp[Np], Bp))) return Tp
            }
            if (0 !== Jp)
              for (Np = 0; Np < Ep; ++Np) {
                if (void 0 !== (Tp = ip(Lp[Np], Bp))) return Tp
              }
            if (1 !== Jp)
              for (Np = 0; Np < Xp; ++Np) {
                var Tp;
                if (void 0 !== (Tp = ip(Dp[Np], Bp))) return Tp
              }
            0 === Jp ? wp(Lp, Yp, Ep++, Bp) : 1 === Jp ? wp(Dp, Ap, Xp++, Bp) : 2 === Jp && wp(Pp, Wp, lp++, Bp)
          } else {
            Bp = (Qp >> 1) - 1;
            0 === Jp ? Up(Lp, Yp, Ep--, Bp) : 1 === Jp ? Up(Dp, Ap, Xp--, Bp) : 2 === Jp && Up(Pp, Wp, lp--, Bp)
          }
        }
      },
      scanBipartite: function(pp, ip, cp, Op, op, xp, Dp, Ap, Pp, Wp, vp, tp) {
        var Hp = 0,
          dp = 2 * pp,
          ep = ip,
          jp = ip + pp,
          kp = 1,
          mp = 1;
        Op ? mp = Sp : kp = Sp;
        for (var Rp = op; Rp < xp; ++Rp) {
          var qp = Rp + kp,
            Mp = dp * Rp;
          yp[Hp++] = Dp[Mp + ep], yp[Hp++] = -qp, yp[Hp++] = Dp[Mp + jp], yp[Hp++] = qp
        }
        for (Rp = Pp; Rp < Wp; ++Rp) {
          qp = Rp + mp;
          var Cp = dp * Rp;
          yp[Hp++] = vp[Cp + ep], yp[Hp++] = -qp
        }
        var Ep = Hp >>> 1;
        Ip(yp, Ep);
        var Xp = 0;
        for (Rp = 0; Rp < Ep; ++Rp) {
          var lp = 0 | yp[2 * Rp + 1];
          if (lp < 0) {
            var Qp = !1;
            if ((qp = -lp) >= Sp ? (Qp = !Op, qp -= Sp) : (Qp = !!Op, qp -= 1), Qp) wp(Lp, Yp, Xp++, qp);
            else {
              var Jp = tp[qp],
                Bp = dp * qp,
                Np = vp[Bp + ip + 1],
                Tp = vp[Bp + ip + 1 + pp];
              pp: for (var fp = 0; fp < Xp; ++fp) {
                var bp = Lp[fp],
                  hp = dp * bp;
                if (!(Tp < Dp[hp + ip + 1] || Dp[hp + ip + 1 + pp] < Np)) {
                  for (var ap = ip + 2; ap < pp; ++ap)
                    if (vp[Bp + ap + pp] < Dp[hp + ap] || Dp[hp + ap + pp] < vp[Bp + ap]) continue pp;
                  var np, Fp = Ap[bp];
                  if (void 0 !== (np = Op ? cp(Jp, Fp) : cp(Fp, Jp))) return np
                }
              }
            }
          } else Up(Lp, Yp, Xp--, lp - kp)
        }
      },
      scanComplete: function(pp, ip, cp, Op, op, xp, Yp, Dp, Ap, Pp, Wp) {
        for (var Up = 0, wp = 2 * pp, vp = ip, tp = ip + pp, Hp = Op; Hp < op; ++Hp) {
          var dp = Hp + Sp,
            ep = wp * Hp;
          yp[Up++] = xp[ep + vp], yp[Up++] = -dp, yp[Up++] = xp[ep + tp], yp[Up++] = dp
        }
        for (Hp = Dp; Hp < Ap; ++Hp) {
          dp = Hp + 1;
          var jp = wp * Hp;
          yp[Up++] = Pp[jp + vp], yp[Up++] = -dp
        }
        var kp = Up >>> 1;
        Ip(yp, kp);
        var mp = 0;
        for (Hp = 0; Hp < kp; ++Hp) {
          var Rp = 0 | yp[2 * Hp + 1];
          if (Rp < 0) {
            if ((dp = -Rp) >= Sp) Lp[mp++] = dp - Sp;
            else {
              var qp = Wp[dp -= 1],
                Mp = wp * dp,
                Cp = Pp[Mp + ip + 1],
                Ep = Pp[Mp + ip + 1 + pp];
              pp: for (var Xp = 0; Xp < mp; ++Xp) {
                var lp = Lp[Xp],
                  Qp = Yp[lp];
                if (Qp === qp) break;
                var Jp = wp * lp;
                if (!(Ep < xp[Jp + ip + 1] || xp[Jp + ip + 1 + pp] < Cp)) {
                  for (var Bp = ip + 2; Bp < pp; ++Bp)
                    if (Pp[Mp + Bp + pp] < xp[Jp + Bp] || xp[Jp + Bp + pp] < Pp[Mp + Bp]) continue pp;
                  var Np = cp(Qp, qp);
                  if (void 0 !== Np) return Np
                }
              }
            }
          } else {
            for (dp = Rp - Sp, Xp = mp - 1; Xp >= 0; --Xp)
              if (Lp[Xp] === dp) {
                for (Bp = Xp + 1; Bp < mp; ++Bp) Lp[Bp - 1] = Lp[Bp];
                break
              }-- mp
          }
        }
      }
    };
    var Op = cp(38497),
      op = cp(38502),
      Ip = cp(38526),
      Sp = 1 << 28,
      xp = 1024,
      Lp = Op.mallocInt32(xp),
      Yp = Op.mallocInt32(xp),
      Dp = Op.mallocInt32(xp),
      Ap = Op.mallocInt32(xp),
      Pp = Op.mallocInt32(xp),
      Wp = Op.mallocInt32(xp),
      yp = Op.mallocDouble(8192);

    function Up(pp, ip, cp, Op) {
      var op = ip[Op],
        Ip = pp[cp - 1];
      pp[op] = Ip, ip[Ip] = op
    }

    function wp(pp, ip, cp, Op) {
      pp[cp] = Op, ip[Op] = cp
    }
  },
  38510: pp => {
    function ip(pp, cp, Op) {
      var op = 0 | pp[Op];
      if (op <= 0) return [];
      var Ip, Sp = new Array(op);
      if (Op === pp.length - 1)
        for (Ip = 0; Ip < op; ++Ip) Sp[Ip] = cp;
      else
        for (Ip = 0; Ip < op; ++Ip) Sp[Ip] = ip(pp, cp, Op + 1);
      return Sp
    }
    pp.exports = function(pp, cp) {
      switch ("undefined" === typeof cp && (cp = 0), typeof pp) {
        case "number":
          if (pp > 0) return function(pp, ip) {
            var cp, Op;
            for (cp = new Array(pp), Op = 0; Op < pp; ++Op) cp[Op] = ip;
            return cp
          }(0 | pp, cp);
          break;
        case "object":
          if ("number" === typeof pp.length) return ip(pp, cp, 0)
      }
      return []
    }
  },
  38455: (pp, ip, cp) => {
    pp.exports = function() {
      var pp = this;
      this.components = {}, this.comps = this.components;
      var ip = this.components,
        cp = 1,
        op = {},
        Ip = [],
        Sp = [],
        xp = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function Lp(pp, cp) {
        var Op = ip[cp],
          Ip = op[cp],
          Sp = Ip.hash[pp];
        Sp && (Ip.remove(pp), Op.uE && (Op.multi ? (Sp.forEach((ip => {
          ip && Op.uE(pp, ip)
        })), Sp.length = 0) : Op.uE(pp, Sp)), xp.removals.push(Ip), Yp())
      }

      function Yp() {
        xp.timeout || (xp.timeout = !0, setTimeout(Dp, 1))
      }

      function Dp() {
        xp.timeout = !1, Ap()
      }

      function Ap() {
        xp.multiComps.length && function(pp) {
          for (var ip = 0; ip < pp.length; ip++) {
            var {
              entID: cp,
              data: Op
            } = pp[ip], op = Op.hash[cp];
            if (op) {
              for (var Ip = 0; Ip < op.length; Ip++) op[Ip] || (op.splice(Ip, 1), Ip--);
              0 === op.length && (Op.remove(cp), xp.removals.push(Op))
            }
          }
          pp.length = 0
        }(xp.multiComps), xp.removals.length && function(pp) {
          for (var ip = 0; ip < pp.length; ip++) {
            pp[ip].flush()
          }
          pp.length = 0
        }(xp.removals)
      }
      this.XU = op, this._systems = Ip, this._renderSystems = Sp, this.iZ = function(ip) {
        var Op = cp++;
        return Array.isArray(ip) && ip.forEach((ip => pp.vJ(Op, ip))), Op
      }, this.deleteEntity = function(ip) {
        return Object.keys(op).forEach((pp => {
          op[pp].hash[ip] && Lp(ip, pp)
        })), pp
      }, this.Lcp = function(pp) {
        if (!pp) throw new Error("Missing component definition");
        var cp = pp.name;
        if (!cp) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof cp) throw new Error("Component name must be a string.");
        if ("" === cp) throw new Error("Component name must be a non-empty string.");
        if (op[cp]) throw new Error(`Component ${cp} already exists.`);
        var xp = {};
        return xp.name = cp, xp.multi = !!pp.multi, xp.order = isNaN(pp.order) ? 99 : pp.order, xp.stateConstructor = pp.stateConstructor || null, xp.state = pp.state || {}, xp.Lk = pp.Lk || null, xp.uE = pp.uE || null, xp.system = pp.system || null, xp.Dk = pp.Dk || null, ip[cp] = xp, op[cp] = new Op, op[cp]._pendingMultiCleanup = !1, op[cp]._multiCleanupIDs = xp.multi ? [] : null, xp.system && (Ip.push(cp), Ip.sort(((pp, cp) => ip[pp].order - ip[cp].order))), xp.Dk && (Sp.push(cp), Sp.sort(((pp, cp) => ip[pp].order - ip[cp].order))), cp
      }, this.overwriteComponent = function(pp, cp) {
        var Op = ip[pp];
        if (!Op) throw new Error(`Unknown component: ${pp}`);
        if (!cp) throw new Error("Missing component definition");
        if (Op.name !== cp.name) throw new Error("Overwriting component must use the same name property.");
        var xp = {};
        xp.name = pp, xp.multi = !!cp.multi, xp.order = isNaN(cp.order) ? 99 : cp.order, xp.state = cp.state || {}, xp.Lk = cp.Lk || null, xp.uE = cp.uE || null, xp.system = cp.system || null, xp.Dk = cp.Dk || null, ip[pp] = xp, op[pp]._pendingMultiCleanup = !1, op[pp]._multiCleanupIDs = xp.multi ? [] : null;
        var Lp = Ip.indexOf(pp);
        xp.system && Lp < 0 && Ip.push(pp), !xp.system && Lp >= 0 && Ip.splice(Lp, 1), Ip.sort(((pp, cp) => ip[pp].order - ip[cp].order));
        var Yp = Sp.indexOf(pp);
        xp.Dk && Yp < 0 && Sp.push(pp), !xp.Dk && Yp >= 0 && Sp.splice(Yp, 1), Sp.sort(((pp, cp) => ip[pp].order - ip[cp].order));
        var Dp = xp.state;
        return this.PJ(pp).forEach((pp => {
          for (var ip in Dp) ip in pp || (pp[ip] = Dp[ip]);
          xp.Lk && xp.Lk(pp.yJ, pp)
        })), pp
      }, this.deleteComponent = function(cp) {
        var Op = op[cp];
        if (!Op) throw new Error(`Unknown component: ${cp}`);
        Op.flush(), Op.list.forEach((pp => {
          pp && Lp(pp.yJ || pp[0].yJ, cp)
        }));
        var xp = Ip.indexOf(cp),
          Yp = Sp.indexOf(cp);
        return xp > -1 && Ip.splice(xp, 1), Yp > -1 && Sp.splice(Yp, 1), op[cp].dispose(), delete op[cp], delete ip[cp], pp
      }, this.vJ = function(pp, cp, Op) {
        var Ip, Sp = ip[cp],
          xp = op[cp];
        if (!xp) throw new Error(`Unknown component: ${cp}.`);
        if (xp.hash[pp] && !Sp.multi) throw new Error(`Entity ${pp} already has component: ${cp}.`);
        if (Sp.stateConstructor) {
          if (!(Ip = new Sp.stateConstructor).hasOwnProperty("yJ")) throw new Error(`Component ${Sp.name} stateConstructor type does not have property __id`);
          Object.assign(Ip, Sp.state, Op)
        } else Ip = {
          yJ: pp,
          ...Sp.state,
          ...Op
        };
        if (Ip.yJ = pp, Sp.multi) {
          var Lp = xp.hash[pp];
          Lp || (Lp = [], xp.add(pp, Lp)), Lp.push(Ip)
        } else xp.add(pp, Ip);
        return Sp.Lk && Sp.Lk(pp, Ip), this
      }, this.hpp = function(pp, ip) {
        var cp = op[ip];
        if (!cp) throw new Error(`Unknown component: ${ip}.`);
        return !!cp.hash[pp]
      }, this.HJ = function(ip, cp) {
        if (!op[cp]) throw new Error(`Unknown component: ${cp}.`);
        return Lp(ip, cp), pp
      }, this.getState = function(pp, ip) {
        var cp = op[ip];
        if (!cp) throw new Error(`Unknown component: ${ip}.`);
        return cp.hash[pp]
      }, this.PJ = function(pp) {
        var ip = op[pp];
        if (!ip) throw new Error(`Unknown component: ${pp}.`);
        return Ap(), ip.list
      }, this.Qip = function(pp) {
        if (!op[pp]) throw new Error(`Unknown component: ${pp}.`);
        var ip = op[pp].hash;
        return pp => ip[pp]
      }, this.hip = function(pp) {
        if (!op[pp]) throw new Error(`Unknown component: ${pp}.`);
        var ip = op[pp].hash;
        return pp => !!ip[pp]
      }, this.LP = function(cp) {
        Ap();
        for (var Op = 0; Op < Ip.length; Op++) {
          var Sp = Ip[Op],
            xp = ip[Sp],
            Lp = op[Sp];
          xp.system(cp, Lp.list), Ap()
        }
        return pp
      }, this.render = function(cp) {
        Ap();
        for (var Op = 0; Op < Sp.length; Op++) {
          var Ip = Sp[Op],
            xp = ip[Ip],
            Lp = op[Ip];
          xp.Dk(cp, Lp.list), Ap()
        }
        return pp
      }, this.removeMultiComponent = function(cp, Op, Ip) {
        var Sp = ip[Op],
          Lp = op[Op];
        if (!Lp) throw new Error(`Unknown component: ${Op}.`);
        if (!Sp.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(pp, ip, cp, Op) {
          var op = cp.hash[pp];
          if (op) {
            var Ip = op[Op];
            Ip && (op[Op] = null, ip.uE && ip.uE(pp, Ip), xp.multiComps.push({
              entID: pp,
              data: cp
            }), Yp())
          }
        }(cp, Sp, Lp, Ip), pp
      }
    };
    var Op = cp(38458)
  },
  38458: pp => {
    function ip(pp, ip) {
      var cp = pp._map[ip];
      if (delete pp.hash[ip], delete pp._map[ip], cp === pp.list.length - 1) pp.list.pop(), pp._idList.pop();
      else {
        var Op = pp.list.pop();
        pp.list[cp] = Op;
        var op = pp._idList.pop();
        pp._idList[cp] = op, pp._map[op] = cp
      }
    }
    pp.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(pp, ip) {
        if ("number" === typeof this._map[pp]) {
          var cp = this._map[pp];
          this.hash[pp] = ip, this.list[cp] = ip, this._idList[cp] = pp
        } else this._map[pp] = this.list.length, this.hash[pp] = ip, this.list.push(ip), this._idList.push(pp)
      }
      remove(pp) {
        var ip = this._map[pp];
        this.hash[pp] = null, this.list[ip] = null, this._pendingRemovals.push(pp)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var pp = 0; pp < this._pendingRemovals.length; pp++) {
          var cp = this._pendingRemovals[pp];
          null === this.hash[cp] && ip(this, cp)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  38272: (pp, ip, cp) => {
    pp = cp.nmd(pp);
    var Op = "__lodash_hash_undefined__",
      op = 9007199254740991,
      Ip = "[object Arguments]",
      Sp = "[object Boolean]",
      xp = "[object Date]",
      Lp = "[object Function]",
      Yp = "[object GeneratorFunction]",
      Dp = "[object Map]",
      Ap = "[object Number]",
      Pp = "[object Object]",
      Wp = "[object Promise]",
      yp = "[object RegExp]",
      Up = "[object Set]",
      wp = "[object String]",
      vp = "[object Symbol]",
      tp = "[object WeakMap]",
      Hp = "[object ArrayBuffer]",
      dp = "[object DataView]",
      ep = "[object Float32Array]",
      jp = "[object Float64Array]",
      kp = "[object Int8Array]",
      mp = "[object Int16Array]",
      Rp = "[object Int32Array]",
      qp = "[object Uint8Array]",
      Mp = "[object Uint8ClampedArray]",
      Cp = "[object Uint16Array]",
      Ep = "[object Uint32Array]",
      Xp = /\w*$/,
      lp = /^\[object .+?Constructor\]$/,
      Qp = /^(?:0|[1-9]\d*)$/,
      Jp = {};
    Jp[Ip] = Jp["[object Array]"] = Jp[Hp] = Jp[dp] = Jp[Sp] = Jp[xp] = Jp[ep] = Jp[jp] = Jp[kp] = Jp[mp] = Jp[Rp] = Jp[Dp] = Jp[Ap] = Jp[Pp] = Jp[yp] = Jp[Up] = Jp[wp] = Jp[vp] = Jp[qp] = Jp[Mp] = Jp[Cp] = Jp[Ep] = !0, Jp["[object Error]"] = Jp[Lp] = Jp[tp] = !1;
    var Bp = "object" == typeof cp.g && cp.g && cp.g.Object === Object && cp.g,
      Np = "object" == typeof self && self && self.Object === Object && self,
      Tp = Bp || Np || Function("return this")(),
      fp = ip && !ip.nodeType && ip,
      bp = fp && pp && !pp.nodeType && pp,
      hp = bp && bp.exports === fp;

    function ap(pp, ip) {
      return pp.set(ip[0], ip[1]), pp
    }

    function np(pp, ip) {
      return pp.add(ip), pp
    }

    function Fp(pp, ip, cp, Op) {
      var op = -1,
        Ip = pp ? pp.length : 0;
      for (Op && Ip && (cp = pp[++op]); ++op < Ip;) cp = ip(cp, pp[op], op, pp);
      return cp
    }

    function gp(pp) {
      var ip = !1;
      if (null != pp && "function" != typeof pp.toString) try {
        ip = !!(pp + "")
      } catch (cp) {}
      return ip
    }

    function Gp(pp) {
      var ip = -1,
        cp = Array(pp.size);
      return pp.forEach((function(pp, Op) {
        cp[++ip] = [Op, pp]
      })), cp
    }

    function rp(pp, ip) {
      return function(cp) {
        return pp(ip(cp))
      }
    }

    function Zp(pp) {
      var ip = -1,
        cp = Array(pp.size);
      return pp.forEach((function(pp) {
        cp[++ip] = pp
      })), cp
    }
    var zp = Array.prototype,
      sp = Function.prototype,
      Kp = Object.prototype,
      Vp = Tp["__core-js_shared__"],
      ii = function() {
        var pp = /[^.]+$/.exec(Vp && Vp.keys && Vp.keys.IE_PROTO || "");
        return pp ? "Symbol(src)_1." + pp : ""
      }(),
      ci = sp.toString,
      Oi = Kp.hasOwnProperty,
      oi = Kp.toString,
      Ii = RegExp("^" + ci.call(Oi).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      Si = hp ? Tp.my : void 0,
      xi = Tp.Symbol,
      Li = Tp.Uint8Array,
      Yi = rp(Object.getPrototypeOf, Object),
      Di = Object.create,
      Ai = Kp.propertyIsEnumerable,
      Pi = zp.splice,
      Wi = Object.getOwnPropertySymbols,
      yi = Si ? Si.isBuffer : void 0,
      Ui = rp(Object.keys, Object),
      wi = ni(Tp, "DataView"),
      vi = ni(Tp, "Map"),
      ti = ni(Tp, "Promise"),
      Hi = ni(Tp, "Set"),
      di = ni(Tp, "WeakMap"),
      ei = ni(Object, "create"),
      ui = Zi(wi),
      ji = Zi(vi),
      ki = Zi(ti),
      mi = Zi(Hi),
      Ri = Zi(di),
      qi = xi ? xi.prototype : void 0,
      Mi = qi ? qi.valueOf : void 0;

    function Ci(pp) {
      var ip = -1,
        cp = pp ? pp.length : 0;
      for (this.clear(); ++ip < cp;) {
        var Op = pp[ip];
        this.set(Op[0], Op[1])
      }
    }

    function Ei(pp) {
      var ip = -1,
        cp = pp ? pp.length : 0;
      for (this.clear(); ++ip < cp;) {
        var Op = pp[ip];
        this.set(Op[0], Op[1])
      }
    }

    function Xi(pp) {
      var ip = -1,
        cp = pp ? pp.length : 0;
      for (this.clear(); ++ip < cp;) {
        var Op = pp[ip];
        this.set(Op[0], Op[1])
      }
    }

    function li(pp) {
      this.__data__ = new Ei(pp)
    }

    function Qi(pp, ip) {
      var cp = si(pp) || function(pp) {
          return function(pp) {
            return function(pp) {
              return !!pp && "object" == typeof pp
            }(pp) && Ki(pp)
          }(pp) && Oi.call(pp, "callee") && (!Ai.call(pp, "callee") || oi.call(pp) == Ip)
        }(pp) ? function(pp, ip) {
          for (var cp = -1, Op = Array(pp); ++cp < pp;) Op[cp] = ip(cp);
          return Op
        }(pp.length, String) : [],
        Op = cp.length,
        op = !!Op;
      for (var Sp in pp) !ip && !Oi.call(pp, Sp) || op && ("length" == Sp || Gi(Sp, Op)) || cp.push(Sp);
      return cp
    }

    function Ji(pp, ip, cp) {
      var Op = pp[ip];
      Oi.call(pp, ip) && zi(Op, cp) && (void 0 !== cp || ip in pp) || (pp[ip] = cp)
    }

    function Bi(pp, ip) {
      for (var cp = pp.length; cp--;)
        if (zi(pp[cp][0], ip)) return cp;
      return -1
    }

    function Ni(pp, ip, cp, Op, op, Wp, tp) {
      var lp;
      if (Op && (lp = Wp ? Op(pp, op, Wp, tp) : Op(pp)), void 0 !== lp) return lp;
      if (!ic(pp)) return pp;
      var Qp = si(pp);
      if (Qp) {
        if (lp = function(pp) {
            var ip = pp.length,
              cp = pp.constructor(ip);
            ip && "string" == typeof pp[0] && Oi.call(pp, "index") && (cp.index = pp.index, cp.input = pp.input);
            return cp
          }(pp), !ip) return function(pp, ip) {
          var cp = -1,
            Op = pp.length;
          ip || (ip = Array(Op));
          for (; ++cp < Op;) ip[cp] = pp[cp];
          return ip
        }(pp, lp)
      } else {
        var Bp = gi(pp),
          Np = Bp == Lp || Bp == Yp;
        if (Vi(pp)) return function(pp, ip) {
          if (ip) return pp.slice();
          var cp = new pp.constructor(pp.length);
          return pp.copy(cp), cp
        }(pp, ip);
        if (Bp == Pp || Bp == Ip || Np && !Wp) {
          if (gp(pp)) return Wp ? pp : {};
          if (lp = function(pp) {
              return "function" != typeof pp.constructor || ri(pp) ? {} : (ip = Yi(pp), ic(ip) ? Di(ip) : {});
              var ip
            }(Np ? {} : pp), !ip) return function(pp, ip) {
            return bi(pp, Fi(pp), ip)
          }(pp, function(pp, ip) {
            return pp && bi(ip, cc(ip), pp)
          }(lp, pp))
        } else {
          if (!Jp[Bp]) return Wp ? pp : {};
          lp = function(pp, ip, cp, Op) {
            var op = pp.constructor;
            switch (ip) {
              case Hp:
                return fi(pp);
              case Sp:
              case xp:
                return new op(+pp);
              case dp:
                return function(pp, ip) {
                  var cp = ip ? fi(pp.buffer) : pp.buffer;
                  return new pp.constructor(cp, pp.byteOffset, pp.byteLength)
                }(pp, Op);
              case ep:
              case jp:
              case kp:
              case mp:
              case Rp:
              case qp:
              case Mp:
              case Cp:
              case Ep:
                return function(pp, ip) {
                  var cp = ip ? fi(pp.buffer) : pp.buffer;
                  return new pp.constructor(cp, pp.byteOffset, pp.length)
                }(pp, Op);
              case Dp:
                return function(pp, ip, cp) {
                  var Op = ip ? cp(Gp(pp), !0) : Gp(pp);
                  return Fp(Op, ap, new pp.constructor)
                }(pp, Op, cp);
              case Ap:
              case wp:
                return new op(pp);
              case yp:
                return function(pp) {
                  var ip = new pp.constructor(pp.source, Xp.exec(pp));
                  return ip.lastIndex = pp.lastIndex, ip
                }(pp);
              case Up:
                return function(pp, ip, cp) {
                  var Op = ip ? cp(Zp(pp), !0) : Zp(pp);
                  return Fp(Op, np, new pp.constructor)
                }(pp, Op, cp);
              case vp:
                return Ip = pp, Mi ? Object(Mi.call(Ip)) : {}
            }
            var Ip
          }(pp, Bp, Ni, ip)
        }
      }
      tp || (tp = new li);
      var Tp = tp.get(pp);
      if (Tp) return Tp;
      if (tp.set(pp, lp), !Qp) var fp = cp ? function(pp) {
        return function(pp, ip, cp) {
          var Op = ip(pp);
          return si(pp) ? Op : function(pp, ip) {
            for (var cp = -1, Op = ip.length, op = pp.length; ++cp < Op;) pp[op + cp] = ip[cp];
            return pp
          }(Op, cp(pp))
        }(pp, cc, Fi)
      }(pp) : cc(pp);
      return function(pp, ip) {
        for (var cp = -1, Op = pp ? pp.length : 0; ++cp < Op && !1 !== ip(pp[cp], cp, pp););
      }(fp || pp, (function(op, Ip) {
        fp && (op = pp[Ip = op]), Ji(lp, Ip, Ni(op, ip, cp, Op, Ip, pp, tp))
      })), lp
    }

    function Ti(pp) {
      return !(!ic(pp) || (ip = pp, ii && ii in ip)) && (pc(pp) || gp(pp) ? Ii : lp).test(Zi(pp));
      var ip
    }

    function fi(pp) {
      var ip = new pp.constructor(pp.byteLength);
      return new Li(ip).set(new Li(pp)), ip
    }

    function bi(pp, ip, cp, Op) {
      cp || (cp = {});
      for (var op = -1, Ip = ip.length; ++op < Ip;) {
        var Sp = ip[op],
          xp = Op ? Op(cp[Sp], pp[Sp], Sp, cp, pp) : void 0;
        Ji(cp, Sp, void 0 === xp ? pp[Sp] : xp)
      }
      return cp
    }

    function ai(pp, ip) {
      var cp = pp.__data__;
      return function(pp) {
        var ip = typeof pp;
        return "string" == ip || "number" == ip || "symbol" == ip || "boolean" == ip ? "__proto__" !== pp : null === pp
      }(ip) ? cp["string" == typeof ip ? "string" : "hash"] : cp.map
    }

    function ni(pp, ip) {
      var cp = function(pp, ip) {
        return null == pp ? void 0 : pp[ip]
      }(pp, ip);
      return Ti(cp) ? cp : void 0
    }
    Ci.prototype.clear = function() {
      this.__data__ = ei ? ei(null) : {}
    }, Ci.prototype.delete = function(pp) {
      return this.has(pp) && delete this.__data__[pp]
    }, Ci.prototype.get = function(pp) {
      var ip = this.__data__;
      if (ei) {
        var cp = ip[pp];
        return cp === Op ? void 0 : cp
      }
      return Oi.call(ip, pp) ? ip[pp] : void 0
    }, Ci.prototype.has = function(pp) {
      var ip = this.__data__;
      return ei ? void 0 !== ip[pp] : Oi.call(ip, pp)
    }, Ci.prototype.set = function(pp, ip) {
      return this.__data__[pp] = ei && void 0 === ip ? Op : ip, this
    }, Ei.prototype.clear = function() {
      this.__data__ = []
    }, Ei.prototype.delete = function(pp) {
      var ip = this.__data__,
        cp = Bi(ip, pp);
      return !(cp < 0) && (cp == ip.length - 1 ? ip.pop() : Pi.call(ip, cp, 1), !0)
    }, Ei.prototype.get = function(pp) {
      var ip = this.__data__,
        cp = Bi(ip, pp);
      return cp < 0 ? void 0 : ip[cp][1]
    }, Ei.prototype.has = function(pp) {
      return Bi(this.__data__, pp) > -1
    }, Ei.prototype.set = function(pp, ip) {
      var cp = this.__data__,
        Op = Bi(cp, pp);
      return Op < 0 ? cp.push([pp, ip]) : cp[Op][1] = ip, this
    }, Xi.prototype.clear = function() {
      this.__data__ = {
        hash: new Ci,
        map: new(vi || Ei),
        string: new Ci
      }
    }, Xi.prototype.delete = function(pp) {
      return ai(this, pp).delete(pp)
    }, Xi.prototype.get = function(pp) {
      return ai(this, pp).get(pp)
    }, Xi.prototype.has = function(pp) {
      return ai(this, pp).has(pp)
    }, Xi.prototype.set = function(pp, ip) {
      return ai(this, pp).set(pp, ip), this
    }, li.prototype.clear = function() {
      this.__data__ = new Ei
    }, li.prototype.delete = function(pp) {
      return this.__data__.delete(pp)
    }, li.prototype.get = function(pp) {
      return this.__data__.get(pp)
    }, li.prototype.has = function(pp) {
      return this.__data__.has(pp)
    }, li.prototype.set = function(pp, ip) {
      var cp = this.__data__;
      if (cp instanceof Ei) {
        var Op = cp.__data__;
        if (!vi || Op.length < 199) return Op.push([pp, ip]), this;
        cp = this.__data__ = new Xi(Op)
      }
      return cp.set(pp, ip), this
    };
    var Fi = Wi ? rp(Wi, Object) : function() {
        return []
      },
      gi = function(pp) {
        return oi.call(pp)
      };

    function Gi(pp, ip) {
      return !!(ip = null == ip ? op : ip) && ("number" == typeof pp || Qp.test(pp)) && pp > -1 && pp % 1 == 0 && pp < ip
    }

    function ri(pp) {
      var ip = pp && pp.constructor;
      return pp === ("function" == typeof ip && ip.prototype || Kp)
    }

    function Zi(pp) {
      if (null != pp) {
        try {
          return ci.call(pp)
        } catch (ip) {}
        try {
          return pp + ""
        } catch (ip) {}
      }
      return ""
    }

    function zi(pp, ip) {
      return pp === ip || pp !== pp && ip !== ip
    }(wi && gi(new wi(new ArrayBuffer(1))) != dp || vi && gi(new vi) != Dp || ti && gi(ti.resolve()) != Wp || Hi && gi(new Hi) != Up || di && gi(new di) != tp) && (gi = function(pp) {
      var ip = oi.call(pp),
        cp = ip == Pp ? pp.constructor : void 0,
        Op = cp ? Zi(cp) : void 0;
      if (Op) switch (Op) {
        case ui:
          return dp;
        case ji:
          return Dp;
        case ki:
          return Wp;
        case mi:
          return Up;
        case Ri:
          return tp
      }
      return ip
    });
    var si = Array.isArray;

    function Ki(pp) {
      return null != pp && function(pp) {
        return "number" == typeof pp && pp > -1 && pp % 1 == 0 && pp <= op
      }(pp.length) && !pc(pp)
    }
    var Vi = yi || function() {
      return !1
    };

    function pc(pp) {
      var ip = ic(pp) ? oi.call(pp) : "";
      return ip == Lp || ip == Yp
    }

    function ic(pp) {
      var ip = typeof pp;
      return !!pp && ("object" == ip || "function" == ip)
    }

    function cc(pp) {
      return Ki(pp) ? Qi(pp) : function(pp) {
        if (!ri(pp)) return Ui(pp);
        var ip = [];
        for (var cp in Object(pp)) Oi.call(pp, cp) && "constructor" != cp && ip.push(cp);
        return ip
      }(pp)
    }
    pp.exports = function(pp) {
      return Ni(pp, !0, !0)
    }
  },
  38668: pp => {
    function ip(pp, ip, cp) {
      for (var Op = pp.length, op = -1 / 0, Ip = 1 / 0, Sp = 0; Sp < Op; Sp++) {
        var xp = (cp[0][Sp] - pp[Sp]) / ip[Sp],
          Lp = (cp[1][Sp] - pp[Sp]) / ip[Sp];
        if (xp > Lp) {
          var Yp = xp;
          xp = Lp, Lp = Yp
        }
        if (Lp < op || xp > Ip) return 1 / 0;
        xp > op && (op = xp), Lp < Ip && (Ip = Lp)
      }
      return op > Ip ? 1 / 0 : op
    }
    pp.exports = function(pp, cp, Op, op) {
      var Ip = ip(cp, Op, op);
      if (Ip === 1 / 0) pp = null;
      else {
        pp = pp || [];
        for (var Sp = 0; Sp < cp.length; Sp++) pp[Sp] = cp[Sp] + Op[Sp] * Ip
      }
      return pp
    }, pp.exports.distance = ip
  },
  37951: (pp, ip, cp) => {
    var Op = cp(37956);

    function op(pp) {
      for (var ip, cp, op = 0, Ip = pp.length, Sp = 0; Sp < pp.length;) {
        for (ip = pp[Sp], cp = 0; Sp < Ip && pp[Sp] === ip;) ++Sp, ++cp;
        op += Op.log2(cp) / 7 | 0, op += Op.log2(ip >>> 0) / 7 | 0, op += 2
      }
      return op
    }
    ip.size = op, ip.encode = function(pp, ip) {
      ip || (ip = new Uint8Array(op(pp)));
      for (var cp, Op, Ip = 0, Sp = ip.length, xp = 0; xp < pp.length;) {
        for (cp = pp[xp], Op = 0; xp < pp.length && pp[xp] === cp;) ++xp, ++Op;
        for (; Ip < Sp && Op >= 128;) ip[Ip++] = 128 + (127 & Op), Op >>>= 7;
        if (Ip >= Sp) throw new Error("RLE buffer overflow");
        for (ip[Ip++] = Op, cp >>>= 0; Ip < Sp && cp >= 128;) ip[Ip++] = 128 + (127 & cp), cp >>>= 7;
        if (Ip >= Sp) throw new Error("RLE buffer overflow");
        ip[Ip++] = cp
      }
      return ip
    }, ip.decode = function(pp, ip) {
      for (var cp, Op, op, Ip, Sp = ip.length, xp = pp.length, Lp = 0, Yp = 0; Yp < xp;) {
        for (cp = 0, Op = 0; Yp < xp && pp[Yp] >= 128;) cp += (127 & pp[Yp++]) << Op, Op += 7;
        if (cp += pp[Yp++] << Op, Yp >= xp) throw new Error("RLE buffer underrun");
        if (Lp + cp > Sp) throw new Error("Chunk buffer overflow");
        for (op = 0, Op = 0; Yp < xp && pp[Yp] >= 128;) op += (127 & pp[Yp++]) << Op, Op += 7;
        if (Yp >= xp) throw new Error("RLE buffer underrun");
        for (op += pp[Yp++] << Op, Ip = 0; Ip < cp; ++Ip) ip[Lp++] = op
      }
      return ip
    }
  },
  37956: (pp, ip) => {
    function cp(pp) {
      var ip = 32;
      return (pp &= -pp) && ip--, 65535 & pp && (ip -= 16), 16711935 & pp && (ip -= 8), 252645135 & pp && (ip -= 4), 858993459 & pp && (ip -= 2), 1431655765 & pp && (ip -= 1), ip
    }
    ip.INT_BITS = 32, ip.INT_MAX = 2147483647, ip.INT_MIN = -1 << 31, ip.sign = function(pp) {
      return (pp > 0) - (pp < 0)
    }, ip.abs = function(pp) {
      var ip = pp >> 31;
      return (pp ^ ip) - ip
    }, ip.min = function(pp, ip) {
      return ip ^ (pp ^ ip) & -(pp < ip)
    }, ip.max = function(pp, ip) {
      return pp ^ (pp ^ ip) & -(pp < ip)
    }, ip.isPow2 = function(pp) {
      return !(pp & pp - 1) && !!pp
    }, ip.log2 = function(pp) {
      var ip, cp;
      return ip = (pp > 65535) << 4, ip |= cp = ((pp >>>= ip) > 255) << 3, ip |= cp = ((pp >>>= cp) > 15) << 2, (ip |= cp = ((pp >>>= cp) > 3) << 1) | (pp >>>= cp) >> 1
    }, ip.log10 = function(pp) {
      return pp >= 1e9 ? 9 : pp >= 1e8 ? 8 : pp >= 1e7 ? 7 : pp >= 1e6 ? 6 : pp >= 1e5 ? 5 : pp >= 1e4 ? 4 : pp >= 1e3 ? 3 : pp >= 100 ? 2 : pp >= 10 ? 1 : 0
    }, ip.popCount = function(pp) {
      return 16843009 * ((pp = (858993459 & (pp -= pp >>> 1 & 1431655765)) + (pp >>> 2 & 858993459)) + (pp >>> 4) & 252645135) >>> 24
    }, ip.countTrailingZeros = cp, ip.nextPow2 = function(pp) {
      return pp += 0 === pp, --pp, pp |= pp >>> 1, pp |= pp >>> 2, pp |= pp >>> 4, pp |= pp >>> 8, (pp |= pp >>> 16) + 1
    }, ip.prevPow2 = function(pp) {
      return pp |= pp >>> 1, pp |= pp >>> 2, pp |= pp >>> 4, pp |= pp >>> 8, (pp |= pp >>> 16) - (pp >>> 1)
    }, ip.parity = function(pp) {
      return pp ^= pp >>> 16, pp ^= pp >>> 8, pp ^= pp >>> 4, 27030 >>> (pp &= 15) & 1
    };
    var Op = new Array(256);
    ! function(pp) {
      for (var ip = 0; ip < 256; ++ip) {
        var cp = ip,
          Op = ip,
          op = 7;
        for (cp >>>= 1; cp; cp >>>= 1) Op <<= 1, Op |= 1 & cp, --op;
        pp[ip] = Op << op & 255
      }
    }(Op), ip.reverse = function(pp) {
      return Op[255 & pp] << 24 | Op[pp >>> 8 & 255] << 16 | Op[pp >>> 16 & 255] << 8 | Op[pp >>> 24 & 255]
    }, ip.interleave2 = function(pp, ip) {
      return (pp = 1431655765 & ((pp = 858993459 & ((pp = 252645135 & ((pp = 16711935 & ((pp &= 65535) | pp << 8)) | pp << 4)) | pp << 2)) | pp << 1)) | (ip = 1431655765 & ((ip = 858993459 & ((ip = 252645135 & ((ip = 16711935 & ((ip &= 65535) | ip << 8)) | ip << 4)) | ip << 2)) | ip << 1)) << 1
    }, ip.deinterleave2 = function(pp, ip) {
      return (pp = 65535 & ((pp = 16711935 & ((pp = 252645135 & ((pp = 858993459 & ((pp = pp >>> ip & 1431655765) | pp >>> 1)) | pp >>> 2)) | pp >>> 4)) | pp >>> 16)) << 16 >> 16
    }, ip.interleave3 = function(pp, ip, cp) {
      return pp = 1227133513 & ((pp = 3272356035 & ((pp = 251719695 & ((pp = 4278190335 & ((pp &= 1023) | pp << 16)) | pp << 8)) | pp << 4)) | pp << 2), (pp |= (ip = 1227133513 & ((ip = 3272356035 & ((ip = 251719695 & ((ip = 4278190335 & ((ip &= 1023) | ip << 16)) | ip << 8)) | ip << 4)) | ip << 2)) << 1) | (cp = 1227133513 & ((cp = 3272356035 & ((cp = 251719695 & ((cp = 4278190335 & ((cp &= 1023) | cp << 16)) | cp << 8)) | cp << 4)) | cp << 2)) << 2
    }, ip.deinterleave3 = function(pp, ip) {
      return (pp = 1023 & ((pp = 4278190335 & ((pp = 251719695 & ((pp = 3272356035 & ((pp = pp >>> ip & 1227133513) | pp >>> 2)) | pp >>> 4)) | pp >>> 8)) | pp >>> 16)) << 22 >> 22
    }, ip.nextCombination = function(pp) {
      var ip = pp | pp - 1;
      return ip + 1 | (~ip & -~ip) - 1 >>> cp(pp) + 1
    }
  },
  37479: (pp, ip, cp) => {
    cp.d(ip, {
      Color3: () => Op.d,
      b: () => Op.h
    });
    var Op = cp(37487);
    (0, Op.i)()
  },
  37985: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => op
    });
    var Op = cp(37989);
    class op {
      static GetPlanes(pp) {
        const ip = [];
        for (let cp = 0; cp < 6; cp++) ip.push(new Op.e(0, 0, 0, 0));
        return op.GetPlanesToRef(pp, ip), ip
      }
      static GetNearPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] + cp[2], ip.normal.y = cp[7] + cp[6], ip.normal.z = cp[11] + cp[10], ip.d = cp[15] + cp[14], ip.normalize()
      }
      static GetFarPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] - cp[2], ip.normal.y = cp[7] - cp[6], ip.normal.z = cp[11] - cp[10], ip.d = cp[15] - cp[14], ip.normalize()
      }
      static GetLeftPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] + cp[0], ip.normal.y = cp[7] + cp[4], ip.normal.z = cp[11] + cp[8], ip.d = cp[15] + cp[12], ip.normalize()
      }
      static GetRightPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] - cp[0], ip.normal.y = cp[7] - cp[4], ip.normal.z = cp[11] - cp[8], ip.d = cp[15] - cp[12], ip.normalize()
      }
      static GetTopPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] - cp[1], ip.normal.y = cp[7] - cp[5], ip.normal.z = cp[11] - cp[9], ip.d = cp[15] - cp[13], ip.normalize()
      }
      static GetBottomPlaneToRef(pp, ip) {
        const cp = pp.m;
        ip.normal.x = cp[3] + cp[1], ip.normal.y = cp[7] + cp[5], ip.normal.z = cp[11] + cp[9], ip.d = cp[15] + cp[13], ip.normalize()
      }
      static GetPlanesToRef(pp, ip) {
        op.GetNearPlaneToRef(pp, ip[0]), op.GetFarPlaneToRef(pp, ip[1]), op.GetLeftPlaneToRef(pp, ip[2]), op.GetRightPlaneToRef(pp, ip[3]), op.GetTopPlaneToRef(pp, ip[4]), op.GetBottomPlaneToRef(pp, ip[5])
      }
      static IsPointInFrustum(pp, ip) {
        for (let cp = 0; cp < 6; cp++)
          if (ip[cp].dotCoordinate(pp) < 0) return !1;
        return !0
      }
    }
  },
  37989: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => op
    });
    var Op = cp(37320);
    class op {
      constructor(pp, ip, cp, op) {
        this.normal = new Op.o(pp, ip, cp), this.d = op
      }
      BOp() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new op(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let pp = this.normal.getHashCode();
        return pp = 397 * pp ^ this.d, pp
      }
      normalize() {
        const pp = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let ip = 0;
        return 0 !== pp && (ip = 1 / pp), this.normal.x *= ip, this.normal.y *= ip, this.normal.z *= ip, this.d *= ip, this
      }
      transform(pp) {
        const ip = op._TmpMatrix;
        pp.invertToRef(ip);
        const cp = ip.m,
          Op = this.normal.x,
          Ip = this.normal.y,
          Sp = this.normal.z,
          xp = this.d,
          Lp = Op * cp[0] + Ip * cp[1] + Sp * cp[2] + xp * cp[3],
          Yp = Op * cp[4] + Ip * cp[5] + Sp * cp[6] + xp * cp[7],
          Dp = Op * cp[8] + Ip * cp[9] + Sp * cp[10] + xp * cp[11],
          Ap = Op * cp[12] + Ip * cp[13] + Sp * cp[14] + xp * cp[15];
        return new op(Lp, Yp, Dp, Ap)
      }
      dotCoordinate(pp) {
        return this.normal.x * pp.x + this.normal.y * pp.y + this.normal.z * pp.z + this.d
      }
      copyFromPoints(pp, ip, cp) {
        const Op = ip.x - pp.x,
          op = ip.y - pp.y,
          Ip = ip.z - pp.z,
          Sp = cp.x - pp.x,
          xp = cp.y - pp.y,
          Lp = cp.z - pp.z,
          Yp = op * Lp - Ip * xp,
          Dp = Ip * Sp - Op * Lp,
          Ap = Op * xp - op * Sp,
          Pp = Math.sqrt(Yp * Yp + Dp * Dp + Ap * Ap);
        let Wp;
        return Wp = 0 !== Pp ? 1 / Pp : 0, this.normal.x = Yp * Wp, this.normal.y = Dp * Wp, this.normal.z = Ap * Wp, this.d = -(this.normal.x * pp.x + this.normal.y * pp.y + this.normal.z * pp.z), this
      }
      isFrontFacingTo(pp, ip) {
        return Op.o.Dot(this.normal, pp) <= ip
      }
      signedDistanceTo(pp) {
        return Op.o.Dot(pp, this.normal) + this.d
      }
      static FromArray(pp) {
        return new op(pp[0], pp[1], pp[2], pp[3])
      }
      static FromPoints(pp, ip, cp) {
        const Op = new op(0, 0, 0, 0);
        return Op.copyFromPoints(pp, ip, cp), Op
      }
      static FromPositionAndNormal(pp, ip) {
        const cp = new op(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(pp, ip, cp)
      }
      static FromPositionAndNormalToRef(pp, ip, cp) {
        return cp.normal.rM(ip), cp.normal.normalize(), cp.d = -pp.dot(cp.normal), cp
      }
      static SignedDistanceToPlaneFromPositionAndNormal(pp, ip, cp) {
        const op = -(ip.x * pp.x + ip.y * pp.y + ip.z * pp.z);
        return Op.o.Dot(cp, ip) + op
      }
    }
    op._TmpMatrix = Op.b.Identity()
  },
  37313: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      Matrix: () => Op.b,
      Quaternion: () => Op.f,
      RegisterMathVector: () => Op.h,
      TmpVectors: () => Op.i,
      Vector2: () => Op.l,
      Zy: () => Op.o,
      Vector4: () => Op.q
    });
    var Op = cp(37320);
    (0, Op.h)()
  },
  38313: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op
    });
    class Op {
      constructor(pp, ip, cp, Op) {
        this.x = pp, this.y = ip, this.width = cp, this.height = Op
      }
      toGlobal(pp, ip) {
        return new Op(this.x * pp, this.y * ip, this.width * pp, this.height * ip)
      }
      toGlobalToRef(pp, ip, cp) {
        return cp.x = this.x * pp, cp.y = this.y * ip, cp.width = this.width * pp, cp.height = this.height * ip, this
      }
      clone() {
        return new Op(this.x, this.y, this.width, this.height)
      }
    }
  },
  38124: (pp, ip, cp) => {
    function Op() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (pp => {
        const ip = 16 * Math.random() | 0;
        return ("x" === pp ? ip : 3 & ip | 8).toString(16)
      }))
    }
    cp.d(ip, {
      e: () => Op
    })
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);