/*! For license information please see 3lwmg.226.d4c2bbba.chunk.js.LICENSE.txt */
export const id = 226;
export const ids = [226, 233];
export const modules = {
  37881: kk => {
    kk.exports = function(kk) {
      return null != kk && null != kk.constructor && "function" === typeof kk.constructor.isBuffer && kk.constructor.isBuffer(kk)
    }
  },
  37867: (kk, ek, ik) => {
    var Dk = ik(37871),
      fk = ik(37877),
      Sk = ik(37881);
    ik.g.__TYPEDARRAY_POOL || (ik.g.__TYPEDARRAY_POOL = {
      UINT8: fk([32, 0]),
      UINT16: fk([32, 0]),
      UINT32: fk([32, 0]),
      INT8: fk([32, 0]),
      INT16: fk([32, 0]),
      INT32: fk([32, 0]),
      FLOAT: fk([32, 0]),
      DOUBLE: fk([32, 0]),
      DATA: fk([32, 0]),
      UINT8C: fk([32, 0]),
      BUFFER: fk([32, 0])
    });
    var bk = "undefined" !== typeof Uint8ClampedArray,
      rk = ik.g.__TYPEDARRAY_POOL;
    rk.UINT8C || (rk.UINT8C = fk([32, 0])), rk.BUFFER || (rk.BUFFER = fk([32, 0]));
    var Pk = rk.DATA,
      mk = rk.BUFFER;

    function Mk(kk) {
      if (kk) {
        var ek = kk.length || kk.byteLength,
          ik = Dk.log2(ek);
        Pk[ik].push(kk)
      }
    }

    function Kk(kk) {
      kk = Dk.nextPow2(kk);
      var ek = Dk.log2(kk),
        ik = Pk[ek];
      return ik.length > 0 ? ik.pop() : new ArrayBuffer(kk)
    }

    function xk(kk) {
      return new Uint8Array(Kk(kk), 0, kk)
    }

    function nk(kk) {
      return new Uint16Array(Kk(2 * kk), 0, kk)
    }

    function Uk(kk) {
      return new Uint32Array(Kk(4 * kk), 0, kk)
    }

    function Hk(kk) {
      return new Int8Array(Kk(kk), 0, kk)
    }

    function wk(kk) {
      return new Int16Array(Kk(2 * kk), 0, kk)
    }

    function lk(kk) {
      return new Int32Array(Kk(4 * kk), 0, kk)
    }

    function pk(kk) {
      return new Float32Array(Kk(4 * kk), 0, kk)
    }

    function yk(kk) {
      return new Float64Array(Kk(8 * kk), 0, kk)
    }

    function Yk(kk) {
      return bk ? new Uint8ClampedArray(Kk(kk), 0, kk) : xk(kk)
    }

    function Lk(kk) {
      return new DataView(Kk(kk), 0, kk)
    }
    ek.free = function(kk) {
      if (Sk(kk)) mk[Dk.log2(kk.length)].push(kk);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(kk) && (kk = kk.buffer), !kk) return;
        var ek = kk.length || kk.byteLength,
          ik = 0 | Dk.log2(ek);
        Pk[ik].push(kk)
      }
    }, ek.freeUint8 = ek.freeUint16 = ek.freeUint32 = ek.freeInt8 = ek.freeInt16 = ek.freeInt32 = ek.freeFloat32 = ek.freeFloat = ek.freeFloat64 = ek.freeDouble = ek.freeUint8Clamped = ek.freeDataView = function(kk) {
      Mk(kk.buffer)
    }, ek.freeArrayBuffer = Mk, ek.freeBuffer = function(kk) {
      mk[Dk.log2(kk.length)].push(kk)
    }, ek.malloc = function(kk, ek) {
      if (void 0 === ek || "arraybuffer" === ek) return Kk(kk);
      switch (ek) {
        case "uint8":
          return xk(kk);
        case "uint16":
          return nk(kk);
        case "uint32":
          return Uk(kk);
        case "int8":
          return Hk(kk);
        case "int16":
          return wk(kk);
        case "int32":
          return lk(kk);
        case "float":
        case "float32":
          return pk(kk);
        case "double":
        case "float64":
          return yk(kk);
        case "uint8_clamped":
          return Yk(kk);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return Lk(kk);
        default:
          return null
      }
      return null
    }, ek.mallocArrayBuffer = Kk, ek.mallocUint8 = xk, ek.mallocUint16 = nk, ek.mallocUint32 = Uk, ek.mallocInt8 = Hk, ek.mallocInt16 = wk, ek.mallocInt32 = lk, ek.mallocFloat32 = ek.mallocFloat = pk, ek.mallocFloat64 = ek.mallocDouble = yk, ek.mallocUint8Clamped = Yk, ek.mallocDataView = Lk, ek.clearCache = function() {
      for (var kk = 0; kk < 32; ++kk) rk.UINT8[kk].length = 0, rk.UINT16[kk].length = 0, rk.UINT32[kk].length = 0, rk.INT8[kk].length = 0, rk.INT16[kk].length = 0, rk.INT32[kk].length = 0, rk.FLOAT[kk].length = 0, rk.DOUBLE[kk].length = 0, rk.UINT8C[kk].length = 0, Pk[kk].length = 0, mk[kk].length = 0
    }
  },
  37871: (kk, ek) => {
    function ik(kk) {
      var ek = 32;
      return (kk &= -kk) && ek--, 65535 & kk && (ek -= 16), 16711935 & kk && (ek -= 8), 252645135 & kk && (ek -= 4), 858993459 & kk && (ek -= 2), 1431655765 & kk && (ek -= 1), ek
    }
    ek.INT_BITS = 32, ek.INT_MAX = 2147483647, ek.INT_MIN = -1 << 31, ek.sign = function(kk) {
      return (kk > 0) - (kk < 0)
    }, ek.abs = function(kk) {
      var ek = kk >> 31;
      return (kk ^ ek) - ek
    }, ek.min = function(kk, ek) {
      return ek ^ (kk ^ ek) & -(kk < ek)
    }, ek.max = function(kk, ek) {
      return kk ^ (kk ^ ek) & -(kk < ek)
    }, ek.isPow2 = function(kk) {
      return !(kk & kk - 1) && !!kk
    }, ek.log2 = function(kk) {
      var ek, ik;
      return ek = (kk > 65535) << 4, ek |= ik = ((kk >>>= ek) > 255) << 3, ek |= ik = ((kk >>>= ik) > 15) << 2, (ek |= ik = ((kk >>>= ik) > 3) << 1) | (kk >>>= ik) >> 1
    }, ek.log10 = function(kk) {
      return kk >= 1e9 ? 9 : kk >= 1e8 ? 8 : kk >= 1e7 ? 7 : kk >= 1e6 ? 6 : kk >= 1e5 ? 5 : kk >= 1e4 ? 4 : kk >= 1e3 ? 3 : kk >= 100 ? 2 : kk >= 10 ? 1 : 0
    }, ek.popCount = function(kk) {
      return 16843009 * ((kk = (858993459 & (kk -= kk >>> 1 & 1431655765)) + (kk >>> 2 & 858993459)) + (kk >>> 4) & 252645135) >>> 24
    }, ek.countTrailingZeros = ik, ek.nextPow2 = function(kk) {
      return kk += 0 === kk, --kk, kk |= kk >>> 1, kk |= kk >>> 2, kk |= kk >>> 4, kk |= kk >>> 8, (kk |= kk >>> 16) + 1
    }, ek.prevPow2 = function(kk) {
      return kk |= kk >>> 1, kk |= kk >>> 2, kk |= kk >>> 4, kk |= kk >>> 8, (kk |= kk >>> 16) - (kk >>> 1)
    }, ek.parity = function(kk) {
      return kk ^= kk >>> 16, kk ^= kk >>> 8, kk ^= kk >>> 4, 27030 >>> (kk &= 15) & 1
    };
    var Dk = new Array(256);
    ! function(kk) {
      for (var ek = 0; ek < 256; ++ek) {
        var ik = ek,
          Dk = ek,
          fk = 7;
        for (ik >>>= 1; ik; ik >>>= 1) Dk <<= 1, Dk |= 1 & ik, --fk;
        kk[ek] = Dk << fk & 255
      }
    }(Dk), ek.reverse = function(kk) {
      return Dk[255 & kk] << 24 | Dk[kk >>> 8 & 255] << 16 | Dk[kk >>> 16 & 255] << 8 | Dk[kk >>> 24 & 255]
    }, ek.interleave2 = function(kk, ek) {
      return (kk = 1431655765 & ((kk = 858993459 & ((kk = 252645135 & ((kk = 16711935 & ((kk &= 65535) | kk << 8)) | kk << 4)) | kk << 2)) | kk << 1)) | (ek = 1431655765 & ((ek = 858993459 & ((ek = 252645135 & ((ek = 16711935 & ((ek &= 65535) | ek << 8)) | ek << 4)) | ek << 2)) | ek << 1)) << 1
    }, ek.deinterleave2 = function(kk, ek) {
      return (kk = 65535 & ((kk = 16711935 & ((kk = 252645135 & ((kk = 858993459 & ((kk = kk >>> ek & 1431655765) | kk >>> 1)) | kk >>> 2)) | kk >>> 4)) | kk >>> 16)) << 16 >> 16
    }, ek.interleave3 = function(kk, ek, ik) {
      return kk = 1227133513 & ((kk = 3272356035 & ((kk = 251719695 & ((kk = 4278190335 & ((kk &= 1023) | kk << 16)) | kk << 8)) | kk << 4)) | kk << 2), (kk |= (ek = 1227133513 & ((ek = 3272356035 & ((ek = 251719695 & ((ek = 4278190335 & ((ek &= 1023) | ek << 16)) | ek << 8)) | ek << 4)) | ek << 2)) << 1) | (ik = 1227133513 & ((ik = 3272356035 & ((ik = 251719695 & ((ik = 4278190335 & ((ik &= 1023) | ik << 16)) | ik << 8)) | ik << 4)) | ik << 2)) << 2
    }, ek.deinterleave3 = function(kk, ek) {
      return (kk = 1023 & ((kk = 4278190335 & ((kk = 251719695 & ((kk = 3272356035 & ((kk = kk >>> ek & 1227133513) | kk >>> 2)) | kk >>> 4)) | kk >>> 8)) | kk >>> 16)) << 22 >> 22
    }, ek.nextCombination = function(kk) {
      var ek = kk | kk - 1;
      return ek + 1 | (~ek & -~ek) - 1 >>> ik(kk) + 1
    }
  },
  37861: (kk, ek, ik) => {
    kk.exports = function(kk, ek, ik) {
      switch (arguments.length) {
        case 1:
          return Dk = [], mk(fk = kk, fk, Mk, !0), Dk;
        case 2:
          return "function" === typeof ek ? mk(kk, kk, ek, !0) : function(kk, ek) {
            return Dk = [], mk(kk, ek, Mk, !1), Dk
          }(kk, ek);
        case 3:
          return mk(kk, ek, ik, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var fk
    };
    var Dk, fk = ik(37867),
      Sk = ik(37887),
      bk = ik(37895);

    function rk(kk, ek) {
      for (var ik = 0; ik < kk; ++ik)
        if (!(ek[ik] <= ek[ik + kk])) return !0;
      return !1
    }

    function Pk(kk, ek, ik, Dk) {
      for (var fk = 0, Sk = 0, bk = 0, Pk = kk.length; bk < Pk; ++bk) {
        var mk = kk[bk];
        if (!rk(ek, mk)) {
          for (var Mk = 0; Mk < 2 * ek; ++Mk) ik[fk++] = mk[Mk];
          Dk[Sk++] = bk
        }
      }
      return Sk
    }

    function mk(kk, ek, ik, Dk) {
      var rk = kk.length,
        mk = ek.length;
      if (!(rk <= 0 || mk <= 0)) {
        var Mk = kk[0].length >>> 1;
        if (!(Mk <= 0)) {
          var Kk, xk = fk.mallocDouble(2 * Mk * rk),
            nk = fk.mallocInt32(rk);
          if ((rk = Pk(kk, Mk, xk, nk)) > 0) {
            if (1 === Mk && Dk) Sk.init(rk), Kk = Sk.sweepComplete(Mk, ik, 0, rk, xk, nk, 0, rk, xk, nk);
            else {
              var Uk = fk.mallocDouble(2 * Mk * mk),
                Hk = fk.mallocInt32(mk);
              (mk = Pk(ek, Mk, Uk, Hk)) > 0 && (Sk.init(rk + mk), Kk = 1 === Mk ? Sk.sweepBipartite(Mk, ik, 0, rk, xk, nk, 0, mk, Uk, Hk) : bk(Mk, ik, Dk, rk, xk, nk, mk, Uk, Hk), fk.free(Uk), fk.free(Hk))
            }
            fk.free(xk), fk.free(nk)
          }
          return Kk
        }
      }
    }

    function Mk(kk, ek) {
      Dk.push([kk, ek])
    }
  },
  37902: (kk, ek) => {
    var ik = "d",
      Dk = "ax",
      fk = "fp",
      Sk = "es",
      bk = "rs",
      rk = "re",
      Pk = "rb",
      mk = "bs",
      Mk = "be",
      Kk = "bb",
      xk = [ik, Dk, "vv", bk, rk, Pk, "ri", mk, Mk, Kk, "bi"];

    function nk(kk) {
      var ek = "bruteForce" + (kk ? "Full" : "Partial"),
        Dk = [],
        bk = xk.slice();
      kk || bk.splice(3, 0, fk);
      var rk = ["function " + ek + "(" + bk.join() + "){"];

      function Pk(ek, fk) {
        var bk = function(kk, ek, Dk) {
          var fk = "bruteForce" + (kk ? "Red" : "Blue") + (ek ? "Flip" : "") + (Dk ? "Full" : ""),
            bk = ["function ", fk, "(", xk.join(), "){", "var ", Sk, "=2*", ik, ";"],
            rk = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            Pk = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (Dk ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return kk ? bk.push(rk, "Q", ":", Pk) : bk.push(Pk, "Q", ":", rk), Dk ? bk.push("if(y1<x0||x1<y0)continue;") : ek ? bk.push("if(y0<=x0||x1<y0)continue;") : bk.push("if(y0<x0||x1<y0)continue;"), bk.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), ek ? bk.push("yi,xi") : bk.push("xi,yi"), bk.push(");if(rv!==void 0)return rv;}}}"), {
            name: fk,
            code: bk.join("")
          }
        }(ek, fk, kk);
        Dk.push(bk.code), rk.push("return " + bk.name + "(" + xk.join() + ");")
      }
      rk.push("if(re-rs>be-bs){"), kk ? (Pk(!0, !1), rk.push("}else{"), Pk(!1, !1)) : (rk.push("if(fp){"), Pk(!0, !0), rk.push("}else{"), Pk(!0, !1), rk.push("}}else{if(fp){"), Pk(!1, !0), rk.push("}else{"), Pk(!1, !1), rk.push("}")), rk.push("}}return " + ek);
      var mk = Dk.join("") + rk.join("");
      return new Function(mk)()
    }
    ek.partial = nk(!1), ek.full = nk(!0)
  },
  37895: (kk, ek, ik) => {
    kk.exports = function(kk, ek, ik, Sk, Mk, Vk, Fk, uk, qk) {
      ! function(kk, ek) {
        var ik = 8 * fk.log2(ek + 1) * (kk + 1) | 0,
          Sk = fk.nextPow2(Yk * ik);
        Ck.length < Sk && (Dk.free(Ck), Ck = Dk.mallocInt32(Sk));
        var bk = fk.nextPow2(Lk * ik);
        Ak.length < bk && (Dk.free(Ak), Ak = Dk.mallocDouble(bk))
      }(kk, Sk + Fk);
      var Ik, zk = 0,
        Qk = 2 * kk;
      jk(zk++, 0, 0, Sk, 0, Fk, ik ? 16 : 0, -1 / 0, 1 / 0), ik || jk(zk++, 0, 0, Fk, 0, Sk, 1, -1 / 0, 1 / 0);
      for (; zk > 0;) {
        var vk = (zk -= 1) * Yk,
          Ek = Ck[vk],
          hk = Ck[vk + 1],
          ak = Ck[vk + 2],
          Wk = Ck[vk + 3],
          tk = Ck[vk + 4],
          Xk = Ck[vk + 5],
          Bk = zk * Lk,
          ck = Ak[Bk],
          Tk = Ak[Bk + 1],
          Zk = 1 & Xk,
          Ok = !!(16 & Xk),
          gk = Mk,
          Gk = Vk,
          Nk = uk,
          Rk = qk;
        if (Zk && (gk = uk, Gk = qk, Nk = Mk, Rk = Vk), !(2 & Xk && hk >= (ak = wk(kk, Ek, hk, ak, gk, Gk, Tk))) && !(4 & Xk && (hk = lk(kk, Ek, hk, ak, gk, Gk, ck)) >= ak)) {
          var Jk = ak - hk,
            ke = tk - Wk;
          if (Ok) {
            if (kk * Jk * (Jk + ke) < nk) {
              if (void 0 !== (Ik = Pk.scanComplete(kk, Ek, ek, hk, ak, gk, Gk, Wk, tk, Nk, Rk))) return Ik;
              continue
            }
          } else {
            if (kk * Math.min(Jk, ke) < Kk) {
              if (void 0 !== (Ik = bk(kk, Ek, ek, Zk, hk, ak, gk, Gk, Wk, tk, Nk, Rk))) return Ik;
              continue
            }
            if (kk * Jk * ke < xk) {
              if (void 0 !== (Ik = Pk.scanBipartite(kk, Ek, ek, Zk, hk, ak, gk, Gk, Wk, tk, Nk, Rk))) return Ik;
              continue
            }
          }
          var ee = Uk(kk, Ek, hk, ak, gk, Gk, ck, Tk);
          if (hk < ee)
            if (kk * (ee - hk) < Kk) {
              if (void 0 !== (Ik = rk(kk, Ek + 1, ek, hk, ee, gk, Gk, Wk, tk, Nk, Rk))) return Ik
            } else if (Ek === kk - 2) {
            if (void 0 !== (Ik = Zk ? Pk.sweepBipartite(kk, ek, Wk, tk, Nk, Rk, hk, ee, gk, Gk) : Pk.sweepBipartite(kk, ek, hk, ee, gk, Gk, Wk, tk, Nk, Rk))) return Ik
          } else jk(zk++, Ek + 1, hk, ee, Wk, tk, Zk, -1 / 0, 1 / 0), jk(zk++, Ek + 1, Wk, tk, hk, ee, 1 ^ Zk, -1 / 0, 1 / 0);
          if (ee < ak) {
            var ie = mk(kk, Ek, Wk, tk, Nk, Rk),
              De = Nk[Qk * ie + Ek],
              fe = Hk(kk, Ek, ie, tk, Nk, Rk, De);
            if (fe < tk && jk(zk++, Ek, ee, ak, fe, tk, (4 | Zk) + (Ok ? 16 : 0), De, Tk), Wk < ie && jk(zk++, Ek, ee, ak, Wk, ie, (2 | Zk) + (Ok ? 16 : 0), ck, De), ie + 1 === fe) {
              if (void 0 !== (Ik = Ok ? dk(kk, Ek, ek, ee, ak, gk, Gk, ie, Nk, Rk[ie]) : sk(kk, Ek, ek, Zk, ee, ak, gk, Gk, ie, Nk, Rk[ie]))) return Ik
            } else if (ie < fe) {
              var Se;
              if (Ok) {
                if (ee < (Se = pk(kk, Ek, ee, ak, gk, Gk, De))) {
                  var be = Hk(kk, Ek, ee, Se, gk, Gk, De);
                  if (Ek === kk - 2) {
                    if (ee < be && void 0 !== (Ik = Pk.sweepComplete(kk, ek, ee, be, gk, Gk, ie, fe, Nk, Rk))) return Ik;
                    if (be < Se && void 0 !== (Ik = Pk.sweepBipartite(kk, ek, be, Se, gk, Gk, ie, fe, Nk, Rk))) return Ik
                  } else ee < be && jk(zk++, Ek + 1, ee, be, ie, fe, 16, -1 / 0, 1 / 0), be < Se && (jk(zk++, Ek + 1, be, Se, ie, fe, 0, -1 / 0, 1 / 0), jk(zk++, Ek + 1, ie, fe, be, Se, 1, -1 / 0, 1 / 0))
                }
              } else ee < (Se = Zk ? yk(kk, Ek, ee, ak, gk, Gk, De) : pk(kk, Ek, ee, ak, gk, Gk, De)) && (Ek === kk - 2 ? Ik = Zk ? Pk.sweepBipartite(kk, ek, ie, fe, Nk, Rk, ee, Se, gk, Gk) : Pk.sweepBipartite(kk, ek, ee, Se, gk, Gk, ie, fe, Nk, Rk) : (jk(zk++, Ek + 1, ee, Se, ie, fe, Zk, -1 / 0, 1 / 0), jk(zk++, Ek + 1, ie, fe, ee, Se, 1 ^ Zk, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var Dk = ik(37867),
      fk = ik(37871),
      Sk = ik(37902),
      bk = Sk.partial,
      rk = Sk.full,
      Pk = ik(37887),
      mk = ik(37905),
      Mk = ik(37909),
      Kk = 128,
      xk = 1 << 22,
      nk = 1 << 22,
      Uk = Mk("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      Hk = Mk("lo===p0", ["p0"]),
      wk = Mk("lo<p0", ["p0"]),
      lk = Mk("hi<=p0", ["p0"]),
      pk = Mk("lo<=p0&&p0<=hi", ["p0"]),
      yk = Mk("lo<p0&&p0<=hi", ["p0"]),
      Yk = 6,
      Lk = 2,
      Ck = Dk.mallocInt32(1024),
      Ak = Dk.mallocDouble(1024);

    function jk(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk) {
      var mk = Yk * kk;
      Ck[mk] = ek, Ck[mk + 1] = ik, Ck[mk + 2] = Dk, Ck[mk + 3] = fk, Ck[mk + 4] = Sk, Ck[mk + 5] = bk;
      var Mk = Lk * kk;
      Ak[Mk] = rk, Ak[Mk + 1] = Pk
    }

    function sk(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk, Mk) {
      var Kk = 2 * kk,
        xk = Pk * Kk,
        nk = mk[xk + ek];
      kk: for (var Uk = fk, Hk = fk * Kk; Uk < Sk; ++Uk, Hk += Kk) {
        var wk = bk[Hk + ek],
          lk = bk[Hk + ek + kk];
        if (!(nk < wk || lk < nk) && (!Dk || nk !== wk)) {
          for (var pk, yk = rk[Uk], Yk = ek + 1; Yk < kk; ++Yk) {
            wk = bk[Hk + Yk], lk = bk[Hk + Yk + kk];
            var Lk = mk[xk + Yk],
              Ck = mk[xk + Yk + kk];
            if (lk < Lk || Ck < wk) continue kk
          }
          if (void 0 !== (pk = Dk ? ik(Mk, yk) : ik(yk, Mk))) return pk
        }
      }
    }

    function dk(kk, ek, ik, Dk, fk, Sk, bk, rk, Pk, mk) {
      var Mk = 2 * kk,
        Kk = rk * Mk,
        xk = Pk[Kk + ek];
      kk: for (var nk = Dk, Uk = Dk * Mk; nk < fk; ++nk, Uk += Mk) {
        var Hk = bk[nk];
        if (Hk !== mk) {
          var wk = Sk[Uk + ek],
            lk = Sk[Uk + ek + kk];
          if (!(xk < wk || lk < xk)) {
            for (var pk = ek + 1; pk < kk; ++pk) {
              wk = Sk[Uk + pk], lk = Sk[Uk + pk + kk];
              var yk = Pk[Kk + pk],
                Yk = Pk[Kk + pk + kk];
              if (lk < yk || Yk < wk) continue kk
            }
            var Lk = ik(Hk, mk);
            if (void 0 !== Lk) return Lk
          }
        }
      }
    }
  },
  37905: (kk, ek, ik) => {
    kk.exports = function(kk, ek, ik, bk, rk, Pk) {
      if (bk <= ik + 1) return ik;
      var mk = ik,
        Mk = bk,
        Kk = bk + ik >>> 1,
        xk = 2 * kk,
        nk = Kk,
        Uk = rk[xk * Kk + ek];
      for (; mk < Mk;) {
        if (Mk - mk < fk) {
          Sk(kk, ek, mk, Mk, rk, Pk), Uk = rk[xk * Kk + ek];
          break
        }
        var Hk = Mk - mk,
          wk = Math.random() * Hk + mk | 0,
          lk = rk[xk * wk + ek],
          pk = Math.random() * Hk + mk | 0,
          yk = rk[xk * pk + ek],
          Yk = Math.random() * Hk + mk | 0,
          Lk = rk[xk * Yk + ek];
        lk <= yk ? Lk >= yk ? (nk = pk, Uk = yk) : lk >= Lk ? (nk = wk, Uk = lk) : (nk = Yk, Uk = Lk) : yk >= Lk ? (nk = pk, Uk = yk) : Lk >= lk ? (nk = wk, Uk = lk) : (nk = Yk, Uk = Lk);
        for (var Ck = xk * (Mk - 1), Ak = xk * nk, jk = 0; jk < xk; ++jk, ++Ck, ++Ak) {
          var sk = rk[Ck];
          rk[Ck] = rk[Ak], rk[Ak] = sk
        }
        var dk = Pk[Mk - 1];
        Pk[Mk - 1] = Pk[nk], Pk[nk] = dk;
        for (Ck = xk * (Mk - 1), Ak = xk * (nk = Dk(kk, ek, mk, Mk - 1, rk, Pk, Uk)), jk = 0; jk < xk; ++jk, ++Ck, ++Ak) {
          sk = rk[Ck];
          rk[Ck] = rk[Ak], rk[Ak] = sk
        }
        dk = Pk[Mk - 1];
        if (Pk[Mk - 1] = Pk[nk], Pk[nk] = dk, Kk < nk) {
          for (Mk = nk - 1; mk < Mk && rk[xk * (Mk - 1) + ek] === Uk;) Mk -= 1;
          Mk += 1
        } else {
          if (!(nk < Kk)) break;
          for (mk = nk + 1; mk < Mk && rk[xk * mk + ek] === Uk;) mk += 1
        }
      }
      return Dk(kk, ek, ik, Kk, rk, Pk, rk[xk * Kk + ek])
    };
    var Dk = ik(37909)("lo<p0", ["p0"]),
      fk = 8;

    function Sk(kk, ek, ik, Dk, fk, Sk) {
      for (var bk = 2 * kk, rk = bk * (ik + 1) + ek, Pk = ik + 1; Pk < Dk; ++Pk, rk += bk)
        for (var mk = fk[rk], Mk = Pk, Kk = bk * (Pk - 1); Mk > ik && fk[Kk + ek] > mk; --Mk, Kk -= bk) {
          for (var xk = Kk, nk = Kk + bk, Uk = 0; Uk < bk; ++Uk, ++xk, ++nk) {
            var Hk = fk[xk];
            fk[xk] = fk[nk], fk[nk] = Hk
          }
          var wk = Sk[Mk];
          Sk[Mk] = Sk[Mk - 1], Sk[Mk - 1] = wk
        }
    }
  },
  37909: kk => {
    kk.exports = function(kk, ik) {
      var Dk = "abcdef".split("").concat(ik),
        fk = [];
      kk.indexOf("lo") >= 0 && fk.push("lo=e[k+n]");
      kk.indexOf("hi") >= 0 && fk.push("hi=e[k+o]");
      return Dk.push(ek.replace("_", fk.join()).replace("$", kk)), Function.apply(void 0, Dk)
    };
    var ek = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  37893: kk => {
    kk.exports = function(kk, Dk) {
      Dk <= 4 * ek ? ik(0, Dk - 1, kk) : mk(0, Dk - 1, kk)
    };
    var ek = 32;

    function ik(kk, ek, ik) {
      for (var Dk = 2 * (kk + 1), fk = kk + 1; fk <= ek; ++fk) {
        for (var Sk = ik[Dk++], bk = ik[Dk++], rk = fk, Pk = Dk - 2; rk-- > kk;) {
          var mk = ik[Pk - 2],
            Mk = ik[Pk - 1];
          if (mk < Sk) break;
          if (mk === Sk && Mk < bk) break;
          ik[Pk] = mk, ik[Pk + 1] = Mk, Pk -= 2
        }
        ik[Pk] = Sk, ik[Pk + 1] = bk
      }
    }

    function Dk(kk, ek, ik) {
      ek *= 2;
      var Dk = ik[kk *= 2],
        fk = ik[kk + 1];
      ik[kk] = ik[ek], ik[kk + 1] = ik[ek + 1], ik[ek] = Dk, ik[ek + 1] = fk
    }

    function fk(kk, ek, ik) {
      ek *= 2, ik[kk *= 2] = ik[ek], ik[kk + 1] = ik[ek + 1]
    }

    function Sk(kk, ek, ik, Dk) {
      ek *= 2, ik *= 2;
      var fk = Dk[kk *= 2],
        Sk = Dk[kk + 1];
      Dk[kk] = Dk[ek], Dk[kk + 1] = Dk[ek + 1], Dk[ek] = Dk[ik], Dk[ek + 1] = Dk[ik + 1], Dk[ik] = fk, Dk[ik + 1] = Sk
    }

    function bk(kk, ek, ik, Dk, fk) {
      ek *= 2, fk[kk *= 2] = fk[ek], fk[ek] = ik, fk[kk + 1] = fk[ek + 1], fk[ek + 1] = Dk
    }

    function rk(kk, ek, ik) {
      ek *= 2;
      var Dk = ik[kk *= 2],
        fk = ik[ek];
      return !(Dk < fk) && (Dk !== fk || ik[kk + 1] > ik[ek + 1])
    }

    function Pk(kk, ek, ik, Dk) {
      var fk = Dk[kk *= 2];
      return fk < ek || fk === ek && Dk[kk + 1] < ik
    }

    function mk(kk, Mk, Kk) {
      var xk = (Mk - kk + 1) / 6 | 0,
        nk = kk + xk,
        Uk = Mk - xk,
        Hk = kk + Mk >> 1,
        wk = Hk - xk,
        lk = Hk + xk,
        pk = nk,
        yk = wk,
        Yk = Hk,
        Lk = lk,
        Ck = Uk,
        Ak = kk + 1,
        jk = Mk - 1,
        sk = 0;
      rk(pk, yk, Kk) && (sk = pk, pk = yk, yk = sk), rk(Lk, Ck, Kk) && (sk = Lk, Lk = Ck, Ck = sk), rk(pk, Yk, Kk) && (sk = pk, pk = Yk, Yk = sk), rk(yk, Yk, Kk) && (sk = yk, yk = Yk, Yk = sk), rk(pk, Lk, Kk) && (sk = pk, pk = Lk, Lk = sk), rk(Yk, Lk, Kk) && (sk = Yk, Yk = Lk, Lk = sk), rk(yk, Ck, Kk) && (sk = yk, yk = Ck, Ck = sk), rk(yk, Yk, Kk) && (sk = yk, yk = Yk, Yk = sk), rk(Lk, Ck, Kk) && (sk = Lk, Lk = Ck, Ck = sk);
      for (var dk = Kk[2 * yk], Vk = Kk[2 * yk + 1], Fk = Kk[2 * Lk], uk = Kk[2 * Lk + 1], qk = 2 * pk, Ik = 2 * Yk, zk = 2 * Ck, Qk = 2 * nk, vk = 2 * Hk, Ek = 2 * Uk, hk = 0; hk < 2; ++hk) {
        var ak = Kk[qk + hk],
          Wk = Kk[Ik + hk],
          tk = Kk[zk + hk];
        Kk[Qk + hk] = ak, Kk[vk + hk] = Wk, Kk[Ek + hk] = tk
      }
      fk(wk, kk, Kk), fk(lk, Mk, Kk);
      for (var Xk = Ak; Xk <= jk; ++Xk)
        if (Pk(Xk, dk, Vk, Kk)) Xk !== Ak && Dk(Xk, Ak, Kk), ++Ak;
        else if (!Pk(Xk, Fk, uk, Kk))
        for (;;) {
          if (Pk(jk, Fk, uk, Kk)) {
            Pk(jk, dk, Vk, Kk) ? (Sk(Xk, Ak, jk, Kk), ++Ak, --jk) : (Dk(Xk, jk, Kk), --jk);
            break
          }
          if (--jk < Xk) break
        }
      bk(kk, Ak - 1, dk, Vk, Kk), bk(Mk, jk + 1, Fk, uk, Kk), Ak - 2 - kk <= ek ? ik(kk, Ak - 2, Kk) : mk(kk, Ak - 2, Kk), Mk - (jk + 2) <= ek ? ik(jk + 2, Mk, Kk) : mk(jk + 2, Mk, Kk), jk - Ak <= ek ? ik(Ak, jk, Kk) : mk(Ak, jk, Kk)
    }
  },
  37887: (kk, ek, ik) => {
    kk.exports = {
      init: function(kk) {
        var ek = fk.nextPow2(kk);
        Pk.length < ek && (Dk.free(Pk), Pk = Dk.mallocInt32(ek));
        mk.length < ek && (Dk.free(mk), mk = Dk.mallocInt32(ek));
        Mk.length < ek && (Dk.free(Mk), Mk = Dk.mallocInt32(ek));
        Kk.length < ek && (Dk.free(Kk), Kk = Dk.mallocInt32(ek));
        xk.length < ek && (Dk.free(xk), xk = Dk.mallocInt32(ek));
        nk.length < ek && (Dk.free(nk), nk = Dk.mallocInt32(ek));
        var ik = 8 * ek;
        Uk.length < ik && (Dk.free(Uk), Uk = Dk.mallocDouble(ik))
      },
      sweepBipartite: function(kk, ek, ik, Dk, fk, rk, xk, nk, lk, pk) {
        for (var yk = 0, Yk = 2 * kk, Lk = kk - 1, Ck = Yk - 1, Ak = ik; Ak < Dk; ++Ak) {
          var jk = rk[Ak],
            sk = Yk * Ak;
          Uk[yk++] = fk[sk + Lk], Uk[yk++] = -(jk + 1), Uk[yk++] = fk[sk + Ck], Uk[yk++] = jk
        }
        for (Ak = xk; Ak < nk; ++Ak) {
          jk = pk[Ak] + bk;
          var dk = Yk * Ak;
          Uk[yk++] = lk[dk + Lk], Uk[yk++] = -jk, Uk[yk++] = lk[dk + Ck], Uk[yk++] = jk
        }
        var Vk = yk >>> 1;
        Sk(Uk, Vk);
        var Fk = 0,
          uk = 0;
        for (Ak = 0; Ak < Vk; ++Ak) {
          var qk = 0 | Uk[2 * Ak + 1];
          if (qk >= bk) Hk(Mk, Kk, uk--, qk = qk - bk | 0);
          else if (qk >= 0) Hk(Pk, mk, Fk--, qk);
          else if (qk <= -bk) {
            qk = -qk - bk | 0;
            for (var Ik = 0; Ik < Fk; ++Ik) {
              if (void 0 !== (zk = ek(Pk[Ik], qk))) return zk
            }
            wk(Mk, Kk, uk++, qk)
          } else {
            qk = -qk - 1 | 0;
            for (Ik = 0; Ik < uk; ++Ik) {
              var zk;
              if (void 0 !== (zk = ek(qk, Mk[Ik]))) return zk
            }
            wk(Pk, mk, Fk++, qk)
          }
        }
      },
      sweepComplete: function(kk, ek, ik, Dk, fk, bk, rk, lk, pk, yk) {
        for (var Yk = 0, Lk = 2 * kk, Ck = kk - 1, Ak = Lk - 1, jk = ik; jk < Dk; ++jk) {
          var sk = bk[jk] + 1 << 1,
            dk = Lk * jk;
          Uk[Yk++] = fk[dk + Ck], Uk[Yk++] = -sk, Uk[Yk++] = fk[dk + Ak], Uk[Yk++] = sk
        }
        for (jk = rk; jk < lk; ++jk) {
          sk = yk[jk] + 1 << 1;
          var Vk = Lk * jk;
          Uk[Yk++] = pk[Vk + Ck], Uk[Yk++] = 1 | -sk, Uk[Yk++] = pk[Vk + Ak], Uk[Yk++] = 1 | sk
        }
        var Fk = Yk >>> 1;
        Sk(Uk, Fk);
        var uk = 0,
          qk = 0,
          Ik = 0;
        for (jk = 0; jk < Fk; ++jk) {
          var zk = 0 | Uk[2 * jk + 1],
            Qk = 1 & zk;
          if (jk < Fk - 1 && zk >> 1 === Uk[2 * jk + 3] >> 1 && (Qk = 2, jk += 1), zk < 0) {
            for (var vk = -(zk >> 1) - 1, Ek = 0; Ek < Ik; ++Ek) {
              if (void 0 !== (hk = ek(xk[Ek], vk))) return hk
            }
            if (0 !== Qk)
              for (Ek = 0; Ek < uk; ++Ek) {
                if (void 0 !== (hk = ek(Pk[Ek], vk))) return hk
              }
            if (1 !== Qk)
              for (Ek = 0; Ek < qk; ++Ek) {
                var hk;
                if (void 0 !== (hk = ek(Mk[Ek], vk))) return hk
              }
            0 === Qk ? wk(Pk, mk, uk++, vk) : 1 === Qk ? wk(Mk, Kk, qk++, vk) : 2 === Qk && wk(xk, nk, Ik++, vk)
          } else {
            vk = (zk >> 1) - 1;
            0 === Qk ? Hk(Pk, mk, uk--, vk) : 1 === Qk ? Hk(Mk, Kk, qk--, vk) : 2 === Qk && Hk(xk, nk, Ik--, vk)
          }
        }
      },
      scanBipartite: function(kk, ek, ik, Dk, fk, rk, Mk, Kk, xk, nk, lk, pk) {
        var yk = 0,
          Yk = 2 * kk,
          Lk = ek,
          Ck = ek + kk,
          Ak = 1,
          jk = 1;
        Dk ? jk = bk : Ak = bk;
        for (var sk = fk; sk < rk; ++sk) {
          var dk = sk + Ak,
            Vk = Yk * sk;
          Uk[yk++] = Mk[Vk + Lk], Uk[yk++] = -dk, Uk[yk++] = Mk[Vk + Ck], Uk[yk++] = dk
        }
        for (sk = xk; sk < nk; ++sk) {
          dk = sk + jk;
          var Fk = Yk * sk;
          Uk[yk++] = lk[Fk + Lk], Uk[yk++] = -dk
        }
        var uk = yk >>> 1;
        Sk(Uk, uk);
        var qk = 0;
        for (sk = 0; sk < uk; ++sk) {
          var Ik = 0 | Uk[2 * sk + 1];
          if (Ik < 0) {
            var zk = !1;
            if ((dk = -Ik) >= bk ? (zk = !Dk, dk -= bk) : (zk = !!Dk, dk -= 1), zk) wk(Pk, mk, qk++, dk);
            else {
              var Qk = pk[dk],
                vk = Yk * dk,
                Ek = lk[vk + ek + 1],
                hk = lk[vk + ek + 1 + kk];
              kk: for (var ak = 0; ak < qk; ++ak) {
                var Wk = Pk[ak],
                  tk = Yk * Wk;
                if (!(hk < Mk[tk + ek + 1] || Mk[tk + ek + 1 + kk] < Ek)) {
                  for (var Xk = ek + 2; Xk < kk; ++Xk)
                    if (lk[vk + Xk + kk] < Mk[tk + Xk] || Mk[tk + Xk + kk] < lk[vk + Xk]) continue kk;
                  var Bk, ck = Kk[Wk];
                  if (void 0 !== (Bk = Dk ? ik(Qk, ck) : ik(ck, Qk))) return Bk
                }
              }
            }
          } else Hk(Pk, mk, qk--, Ik - Ak)
        }
      },
      scanComplete: function(kk, ek, ik, Dk, fk, rk, mk, Mk, Kk, xk, nk) {
        for (var Hk = 0, wk = 2 * kk, lk = ek, pk = ek + kk, yk = Dk; yk < fk; ++yk) {
          var Yk = yk + bk,
            Lk = wk * yk;
          Uk[Hk++] = rk[Lk + lk], Uk[Hk++] = -Yk, Uk[Hk++] = rk[Lk + pk], Uk[Hk++] = Yk
        }
        for (yk = Mk; yk < Kk; ++yk) {
          Yk = yk + 1;
          var Ck = wk * yk;
          Uk[Hk++] = xk[Ck + lk], Uk[Hk++] = -Yk
        }
        var Ak = Hk >>> 1;
        Sk(Uk, Ak);
        var jk = 0;
        for (yk = 0; yk < Ak; ++yk) {
          var sk = 0 | Uk[2 * yk + 1];
          if (sk < 0) {
            if ((Yk = -sk) >= bk) Pk[jk++] = Yk - bk;
            else {
              var dk = nk[Yk -= 1],
                Vk = wk * Yk,
                Fk = xk[Vk + ek + 1],
                uk = xk[Vk + ek + 1 + kk];
              kk: for (var qk = 0; qk < jk; ++qk) {
                var Ik = Pk[qk],
                  zk = mk[Ik];
                if (zk === dk) break;
                var Qk = wk * Ik;
                if (!(uk < rk[Qk + ek + 1] || rk[Qk + ek + 1 + kk] < Fk)) {
                  for (var vk = ek + 2; vk < kk; ++vk)
                    if (xk[Vk + vk + kk] < rk[Qk + vk] || rk[Qk + vk + kk] < xk[Vk + vk]) continue kk;
                  var Ek = ik(zk, dk);
                  if (void 0 !== Ek) return Ek
                }
              }
            }
          } else {
            for (Yk = sk - bk, qk = jk - 1; qk >= 0; --qk)
              if (Pk[qk] === Yk) {
                for (vk = qk + 1; vk < jk; ++vk) Pk[vk - 1] = Pk[vk];
                break
              }-- jk
          }
        }
      }
    };
    var Dk = ik(37867),
      fk = ik(37871),
      Sk = ik(37893),
      bk = 1 << 28,
      rk = 1024,
      Pk = Dk.mallocInt32(rk),
      mk = Dk.mallocInt32(rk),
      Mk = Dk.mallocInt32(rk),
      Kk = Dk.mallocInt32(rk),
      xk = Dk.mallocInt32(rk),
      nk = Dk.mallocInt32(rk),
      Uk = Dk.mallocDouble(8192);

    function Hk(kk, ek, ik, Dk) {
      var fk = ek[Dk],
        Sk = kk[ik - 1];
      kk[fk] = Sk, ek[Sk] = fk
    }

    function wk(kk, ek, ik, Dk) {
      kk[ik] = Dk, ek[Dk] = ik
    }
  },
  37877: kk => {
    function ek(kk, ik, Dk) {
      var fk = 0 | kk[Dk];
      if (fk <= 0) return [];
      var Sk, bk = new Array(fk);
      if (Dk === kk.length - 1)
        for (Sk = 0; Sk < fk; ++Sk) bk[Sk] = ik;
      else
        for (Sk = 0; Sk < fk; ++Sk) bk[Sk] = ek(kk, ik, Dk + 1);
      return bk
    }
    kk.exports = function(kk, ik) {
      switch ("undefined" === typeof ik && (ik = 0), typeof kk) {
        case "number":
          if (kk > 0) return function(kk, ek) {
            var ik, Dk;
            for (ik = new Array(kk), Dk = 0; Dk < kk; ++Dk) ik[Dk] = ek;
            return ik
          }(0 | kk, ik);
          break;
        case "object":
          if ("number" === typeof kk.length) return ek(kk, ik, 0)
      }
      return []
    }
  },
  37830: (kk, ek, ik) => {
    kk.exports = function() {
      var kk = this;
      this.components = {}, this.comps = this.components;
      var ek = this.components,
        ik = 1,
        fk = {},
        Sk = [],
        bk = [],
        rk = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function Pk(kk, ik) {
        var Dk = ek[ik],
          Sk = fk[ik],
          bk = Sk.hash[kk];
        bk && (Sk.remove(kk), Dk.oV && (Dk.multi ? (bk.forEach((ek => {
          ek && Dk.oV(kk, ek)
        })), bk.length = 0) : Dk.oV(kk, bk)), rk.removals.push(Sk), mk())
      }

      function mk() {
        rk.timeout || (rk.timeout = !0, setTimeout(Mk, 1))
      }

      function Mk() {
        rk.timeout = !1, Kk()
      }

      function Kk() {
        rk.multiComps.length && function(kk) {
          for (var ek = 0; ek < kk.length; ek++) {
            var {
              entID: ik,
              data: Dk
            } = kk[ek], fk = Dk.hash[ik];
            if (fk) {
              for (var Sk = 0; Sk < fk.length; Sk++) fk[Sk] || (fk.splice(Sk, 1), Sk--);
              0 === fk.length && (Dk.remove(ik), rk.removals.push(Dk))
            }
          }
          kk.length = 0
        }(rk.multiComps), rk.removals.length && function(kk) {
          for (var ek = 0; ek < kk.length; ek++) {
            kk[ek].flush()
          }
          kk.length = 0
        }(rk.removals)
      }
      this.aH = fk, this._systems = Sk, this._renderSystems = bk, this.aZ = function(ek) {
        var Dk = ik++;
        return Array.isArray(ek) && ek.forEach((ek => kk.wq(Dk, ek))), Dk
      }, this.deleteEntity = function(ek) {
        return Object.keys(fk).forEach((kk => {
          fk[kk].hash[ek] && Pk(ek, kk)
        })), kk
      }, this.Lek = function(kk) {
        if (!kk) throw new Error("Missing component definition");
        var ik = kk.name;
        if (!ik) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof ik) throw new Error("Component name must be a string.");
        if ("" === ik) throw new Error("Component name must be a non-empty string.");
        if (fk[ik]) throw new Error(`Component ${ik} already exists.`);
        var rk = {};
        return rk.name = ik, rk.multi = !!kk.multi, rk.order = isNaN(kk.order) ? 99 : kk.order, rk.stateConstructor = kk.stateConstructor || null, rk.state = kk.state || {}, rk.rY = kk.rY || null, rk.oV = kk.oV || null, rk.system = kk.system || null, rk.lY = kk.lY || null, ek[ik] = rk, fk[ik] = new Dk, fk[ik]._pendingMultiCleanup = !1, fk[ik]._multiCleanupIDs = rk.multi ? [] : null, rk.system && (Sk.push(ik), Sk.sort(((kk, ik) => ek[kk].order - ek[ik].order))), rk.lY && (bk.push(ik), bk.sort(((kk, ik) => ek[kk].order - ek[ik].order))), ik
      }, this.overwriteComponent = function(kk, ik) {
        var Dk = ek[kk];
        if (!Dk) throw new Error(`Unknown component: ${kk}`);
        if (!ik) throw new Error("Missing component definition");
        if (Dk.name !== ik.name) throw new Error("Overwriting component must use the same name property.");
        var rk = {};
        rk.name = kk, rk.multi = !!ik.multi, rk.order = isNaN(ik.order) ? 99 : ik.order, rk.state = ik.state || {}, rk.rY = ik.rY || null, rk.oV = ik.oV || null, rk.system = ik.system || null, rk.lY = ik.lY || null, ek[kk] = rk, fk[kk]._pendingMultiCleanup = !1, fk[kk]._multiCleanupIDs = rk.multi ? [] : null;
        var Pk = Sk.indexOf(kk);
        rk.system && Pk < 0 && Sk.push(kk), !rk.system && Pk >= 0 && Sk.splice(Pk, 1), Sk.sort(((kk, ik) => ek[kk].order - ek[ik].order));
        var mk = bk.indexOf(kk);
        rk.lY && mk < 0 && bk.push(kk), !rk.lY && mk >= 0 && bk.splice(mk, 1), bk.sort(((kk, ik) => ek[kk].order - ek[ik].order));
        var Mk = rk.state;
        return this.mq(kk).forEach((kk => {
          for (var ek in Mk) ek in kk || (kk[ek] = Mk[ek]);
          rk.rY && rk.rY(kk.Mq, kk)
        })), kk
      }, this.deleteComponent = function(ik) {
        var Dk = fk[ik];
        if (!Dk) throw new Error(`Unknown component: ${ik}`);
        Dk.flush(), Dk.list.forEach((kk => {
          kk && Pk(kk.Mq || kk[0].Mq, ik)
        }));
        var rk = Sk.indexOf(ik),
          mk = bk.indexOf(ik);
        return rk > -1 && Sk.splice(rk, 1), mk > -1 && bk.splice(mk, 1), fk[ik].dispose(), delete fk[ik], delete ek[ik], kk
      }, this.wq = function(kk, ik, Dk) {
        var Sk, bk = ek[ik],
          rk = fk[ik];
        if (!rk) throw new Error(`Unknown component: ${ik}.`);
        if (rk.hash[kk] && !bk.multi) throw new Error(`Entity ${kk} already has component: ${ik}.`);
        if (bk.stateConstructor) {
          if (!(Sk = new bk.stateConstructor).hasOwnProperty("Mq")) throw new Error(`Component ${bk.name} stateConstructor type does not have property __id`);
          Object.assign(Sk, bk.state, Dk)
        } else Sk = {
          Mq: kk,
          ...bk.state,
          ...Dk
        };
        if (Sk.Mq = kk, bk.multi) {
          var Pk = rk.hash[kk];
          Pk || (Pk = [], rk.add(kk, Pk)), Pk.push(Sk)
        } else rk.add(kk, Sk);
        return bk.rY && bk.rY(kk, Sk), this
      }, this.lkk = function(kk, ek) {
        var ik = fk[ek];
        if (!ik) throw new Error(`Unknown component: ${ek}.`);
        return !!ik.hash[kk]
      }, this.lq = function(ek, ik) {
        if (!fk[ik]) throw new Error(`Unknown component: ${ik}.`);
        return Pk(ek, ik), kk
      }, this.getState = function(kk, ek) {
        var ik = fk[ek];
        if (!ik) throw new Error(`Unknown component: ${ek}.`);
        return ik.hash[kk]
      }, this.mq = function(kk) {
        var ek = fk[kk];
        if (!ek) throw new Error(`Unknown component: ${kk}.`);
        return Kk(), ek.list
      }, this.kek = function(kk) {
        if (!fk[kk]) throw new Error(`Unknown component: ${kk}.`);
        var ek = fk[kk].hash;
        return kk => ek[kk]
      }, this.bek = function(kk) {
        if (!fk[kk]) throw new Error(`Unknown component: ${kk}.`);
        var ek = fk[kk].hash;
        return kk => !!ek[kk]
      }, this.Px = function(ik) {
        Kk();
        for (var Dk = 0; Dk < Sk.length; Dk++) {
          var bk = Sk[Dk],
            rk = ek[bk],
            Pk = fk[bk];
          rk.system(ik, Pk.list), Kk()
        }
        return kk
      }, this.render = function(ik) {
        Kk();
        for (var Dk = 0; Dk < bk.length; Dk++) {
          var Sk = bk[Dk],
            rk = ek[Sk],
            Pk = fk[Sk];
          rk.lY(ik, Pk.list), Kk()
        }
        return kk
      }, this.removeMultiComponent = function(ik, Dk, Sk) {
        var bk = ek[Dk],
          Pk = fk[Dk];
        if (!Pk) throw new Error(`Unknown component: ${Dk}.`);
        if (!bk.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(kk, ek, ik, Dk) {
          var fk = ik.hash[kk];
          if (fk) {
            var Sk = fk[Dk];
            Sk && (fk[Dk] = null, ek.oV && ek.oV(kk, Sk), rk.multiComps.push({
              entID: kk,
              data: ik
            }), mk())
          }
        }(ik, bk, Pk, Sk), kk
      }
    };
    var Dk = ik(37834)
  },
  37834: kk => {
    function ek(kk, ek) {
      var ik = kk._map[ek];
      if (delete kk.hash[ek], delete kk._map[ek], ik === kk.list.length - 1) kk.list.pop(), kk._idList.pop();
      else {
        var Dk = kk.list.pop();
        kk.list[ik] = Dk;
        var fk = kk._idList.pop();
        kk._idList[ik] = fk, kk._map[fk] = ik
      }
    }
    kk.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(kk, ek) {
        if ("number" === typeof this._map[kk]) {
          var ik = this._map[kk];
          this.hash[kk] = ek, this.list[ik] = ek, this._idList[ik] = kk
        } else this._map[kk] = this.list.length, this.hash[kk] = ek, this.list.push(ek), this._idList.push(kk)
      }
      remove(kk) {
        var ek = this._map[kk];
        this.hash[kk] = null, this.list[ek] = null, this._pendingRemovals.push(kk)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var kk = 0; kk < this._pendingRemovals.length; kk++) {
          var ik = this._pendingRemovals[kk];
          null === this.hash[ik] && ek(this, ik)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  37634: (kk, ek, ik) => {
    kk = ik.nmd(kk);
    var Dk = "__lodash_hash_undefined__",
      fk = 9007199254740991,
      Sk = "[object Arguments]",
      bk = "[object Boolean]",
      rk = "[object Date]",
      Pk = "[object Function]",
      mk = "[object GeneratorFunction]",
      Mk = "[object Map]",
      Kk = "[object Number]",
      xk = "[object Object]",
      nk = "[object Promise]",
      Uk = "[object RegExp]",
      Hk = "[object Set]",
      wk = "[object String]",
      lk = "[object Symbol]",
      pk = "[object WeakMap]",
      yk = "[object ArrayBuffer]",
      Yk = "[object DataView]",
      Lk = "[object Float32Array]",
      Ck = "[object Float64Array]",
      Ak = "[object Int8Array]",
      jk = "[object Int16Array]",
      sk = "[object Int32Array]",
      dk = "[object Uint8Array]",
      Vk = "[object Uint8ClampedArray]",
      Fk = "[object Uint16Array]",
      uk = "[object Uint32Array]",
      qk = /\w*$/,
      Ik = /^\[object .+?Constructor\]$/,
      zk = /^(?:0|[1-9]\d*)$/,
      Qk = {};
    Qk[Sk] = Qk["[object Array]"] = Qk[yk] = Qk[Yk] = Qk[bk] = Qk[rk] = Qk[Lk] = Qk[Ck] = Qk[Ak] = Qk[jk] = Qk[sk] = Qk[Mk] = Qk[Kk] = Qk[xk] = Qk[Uk] = Qk[Hk] = Qk[wk] = Qk[lk] = Qk[dk] = Qk[Vk] = Qk[Fk] = Qk[uk] = !0, Qk["[object Error]"] = Qk[Pk] = Qk[pk] = !1;
    var vk = "object" == typeof ik.g && ik.g && ik.g.Object === Object && ik.g,
      Ek = "object" == typeof self && self && self.Object === Object && self,
      hk = vk || Ek || Function("return this")(),
      ak = ek && !ek.nodeType && ek,
      Wk = ak && kk && !kk.nodeType && kk,
      tk = Wk && Wk.exports === ak;

    function Xk(kk, ek) {
      return kk.set(ek[0], ek[1]), kk
    }

    function Bk(kk, ek) {
      return kk.add(ek), kk
    }

    function ck(kk, ek, ik, Dk) {
      var fk = -1,
        Sk = kk ? kk.length : 0;
      for (Dk && Sk && (ik = kk[++fk]); ++fk < Sk;) ik = ek(ik, kk[fk], fk, kk);
      return ik
    }

    function Tk(kk) {
      var ek = !1;
      if (null != kk && "function" != typeof kk.toString) try {
        ek = !!(kk + "")
      } catch (ik) {}
      return ek
    }

    function Zk(kk) {
      var ek = -1,
        ik = Array(kk.size);
      return kk.forEach((function(kk, Dk) {
        ik[++ek] = [Dk, kk]
      })), ik
    }

    function Ok(kk, ek) {
      return function(ik) {
        return kk(ek(ik))
      }
    }

    function gk(kk) {
      var ek = -1,
        ik = Array(kk.size);
      return kk.forEach((function(kk) {
        ik[++ek] = kk
      })), ik
    }
    var Gk = Array.prototype,
      Nk = Function.prototype,
      Rk = Object.prototype,
      Jk = hk["__core-js_shared__"],
      ke = function() {
        var kk = /[^.]+$/.exec(Jk && Jk.keys && Jk.keys.IE_PROTO || "");
        return kk ? "Symbol(src)_1." + kk : ""
      }(),
      ee = Nk.toString,
      ie = Rk.hasOwnProperty,
      De = Rk.toString,
      fe = RegExp("^" + ee.call(ie).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      Se = tk ? hk.hU : void 0,
      be = hk.Symbol,
      re = hk.Uint8Array,
      Pe = Ok(Object.getPrototypeOf, Object),
      me = Object.create,
      Me = Rk.propertyIsEnumerable,
      Ke = Gk.splice,
      xe = Object.getOwnPropertySymbols,
      ne = Se ? Se.isBuffer : void 0,
      Ue = Ok(Object.keys, Object),
      He = Xe(hk, "DataView"),
      we = Xe(hk, "Map"),
      le = Xe(hk, "Promise"),
      pe = Xe(hk, "Set"),
      ye = Xe(hk, "WeakMap"),
      Ye = Xe(Object, "create"),
      Le = Ze(He),
      Ce = Ze(we),
      Ae = Ze(le),
      je = Ze(pe),
      se = Ze(ye),
      de = be ? be.prototype : void 0,
      Ve = de ? de.valueOf : void 0;

    function Fe(kk) {
      var ek = -1,
        ik = kk ? kk.length : 0;
      for (this.clear(); ++ek < ik;) {
        var Dk = kk[ek];
        this.set(Dk[0], Dk[1])
      }
    }

    function ue(kk) {
      var ek = -1,
        ik = kk ? kk.length : 0;
      for (this.clear(); ++ek < ik;) {
        var Dk = kk[ek];
        this.set(Dk[0], Dk[1])
      }
    }

    function qe(kk) {
      var ek = -1,
        ik = kk ? kk.length : 0;
      for (this.clear(); ++ek < ik;) {
        var Dk = kk[ek];
        this.set(Dk[0], Dk[1])
      }
    }

    function Ie(kk) {
      this.__data__ = new ue(kk)
    }

    function ze(kk, ek) {
      var ik = ge(kk) || function(kk) {
          return function(kk) {
            return function(kk) {
              return !!kk && "object" == typeof kk
            }(kk) && Ge(kk)
          }(kk) && ie.call(kk, "callee") && (!Me.call(kk, "callee") || De.call(kk) == Sk)
        }(kk) ? function(kk, ek) {
          for (var ik = -1, Dk = Array(kk); ++ik < kk;) Dk[ik] = ek(ik);
          return Dk
        }(kk.length, String) : [],
        Dk = ik.length,
        fk = !!Dk;
      for (var bk in kk) !ek && !ie.call(kk, bk) || fk && ("length" == bk || Te(bk, Dk)) || ik.push(bk);
      return ik
    }

    function Qe(kk, ek, ik) {
      var Dk = kk[ek];
      ie.call(kk, ek) && Oe(Dk, ik) && (void 0 !== ik || ek in kk) || (kk[ek] = ik)
    }

    function ve(kk, ek) {
      for (var ik = kk.length; ik--;)
        if (Oe(kk[ik][0], ek)) return ik;
      return -1
    }

    function Ee(kk, ek, ik, Dk, fk, nk, pk) {
      var Ik;
      if (Dk && (Ik = nk ? Dk(kk, fk, nk, pk) : Dk(kk)), void 0 !== Ik) return Ik;
      if (!Je(kk)) return kk;
      var zk = ge(kk);
      if (zk) {
        if (Ik = function(kk) {
            var ek = kk.length,
              ik = kk.constructor(ek);
            ek && "string" == typeof kk[0] && ie.call(kk, "index") && (ik.index = kk.index, ik.input = kk.input);
            return ik
          }(kk), !ek) return function(kk, ek) {
          var ik = -1,
            Dk = kk.length;
          ek || (ek = Array(Dk));
          for (; ++ik < Dk;) ek[ik] = kk[ik];
          return ek
        }(kk, Ik)
      } else {
        var vk = ce(kk),
          Ek = vk == Pk || vk == mk;
        if (Ne(kk)) return function(kk, ek) {
          if (ek) return kk.slice();
          var ik = new kk.constructor(kk.length);
          return kk.copy(ik), ik
        }(kk, ek);
        if (vk == xk || vk == Sk || Ek && !nk) {
          if (Tk(kk)) return nk ? kk : {};
          if (Ik = function(kk) {
              return "function" != typeof kk.constructor || oe(kk) ? {} : (ek = Pe(kk), Je(ek) ? me(ek) : {});
              var ek
            }(Ek ? {} : kk), !ek) return function(kk, ek) {
            return We(kk, Be(kk), ek)
          }(kk, function(kk, ek) {
            return kk && We(ek, ki(ek), kk)
          }(Ik, kk))
        } else {
          if (!Qk[vk]) return nk ? kk : {};
          Ik = function(kk, ek, ik, Dk) {
            var fk = kk.constructor;
            switch (ek) {
              case yk:
                return ae(kk);
              case bk:
              case rk:
                return new fk(+kk);
              case Yk:
                return function(kk, ek) {
                  var ik = ek ? ae(kk.buffer) : kk.buffer;
                  return new kk.constructor(ik, kk.byteOffset, kk.byteLength)
                }(kk, Dk);
              case Lk:
              case Ck:
              case Ak:
              case jk:
              case sk:
              case dk:
              case Vk:
              case Fk:
              case uk:
                return function(kk, ek) {
                  var ik = ek ? ae(kk.buffer) : kk.buffer;
                  return new kk.constructor(ik, kk.byteOffset, kk.length)
                }(kk, Dk);
              case Mk:
                return function(kk, ek, ik) {
                  var Dk = ek ? ik(Zk(kk), !0) : Zk(kk);
                  return ck(Dk, Xk, new kk.constructor)
                }(kk, Dk, ik);
              case Kk:
              case wk:
                return new fk(kk);
              case Uk:
                return function(kk) {
                  var ek = new kk.constructor(kk.source, qk.exec(kk));
                  return ek.lastIndex = kk.lastIndex, ek
                }(kk);
              case Hk:
                return function(kk, ek, ik) {
                  var Dk = ek ? ik(gk(kk), !0) : gk(kk);
                  return ck(Dk, Bk, new kk.constructor)
                }(kk, Dk, ik);
              case lk:
                return Sk = kk, Ve ? Object(Ve.call(Sk)) : {}
            }
            var Sk
          }(kk, vk, Ee, ek)
        }
      }
      pk || (pk = new Ie);
      var hk = pk.get(kk);
      if (hk) return hk;
      if (pk.set(kk, Ik), !zk) var ak = ik ? function(kk) {
        return function(kk, ek, ik) {
          var Dk = ek(kk);
          return ge(kk) ? Dk : function(kk, ek) {
            for (var ik = -1, Dk = ek.length, fk = kk.length; ++ik < Dk;) kk[fk + ik] = ek[ik];
            return kk
          }(Dk, ik(kk))
        }(kk, ki, Be)
      }(kk) : ki(kk);
      return function(kk, ek) {
        for (var ik = -1, Dk = kk ? kk.length : 0; ++ik < Dk && !1 !== ek(kk[ik], ik, kk););
      }(ak || kk, (function(fk, Sk) {
        ak && (fk = kk[Sk = fk]), Qe(Ik, Sk, Ee(fk, ek, ik, Dk, Sk, kk, pk))
      })), Ik
    }

    function he(kk) {
      return !(!Je(kk) || (ek = kk, ke && ke in ek)) && (Re(kk) || Tk(kk) ? fe : Ik).test(Ze(kk));
      var ek
    }

    function ae(kk) {
      var ek = new kk.constructor(kk.byteLength);
      return new re(ek).set(new re(kk)), ek
    }

    function We(kk, ek, ik, Dk) {
      ik || (ik = {});
      for (var fk = -1, Sk = ek.length; ++fk < Sk;) {
        var bk = ek[fk],
          rk = Dk ? Dk(ik[bk], kk[bk], bk, ik, kk) : void 0;
        Qe(ik, bk, void 0 === rk ? kk[bk] : rk)
      }
      return ik
    }

    function te(kk, ek) {
      var ik = kk.__data__;
      return function(kk) {
        var ek = typeof kk;
        return "string" == ek || "number" == ek || "symbol" == ek || "boolean" == ek ? "__proto__" !== kk : null === kk
      }(ek) ? ik["string" == typeof ek ? "string" : "hash"] : ik.map
    }

    function Xe(kk, ek) {
      var ik = function(kk, ek) {
        return null == kk ? void 0 : kk[ek]
      }(kk, ek);
      return he(ik) ? ik : void 0
    }
    Fe.prototype.clear = function() {
      this.__data__ = Ye ? Ye(null) : {}
    }, Fe.prototype.delete = function(kk) {
      return this.has(kk) && delete this.__data__[kk]
    }, Fe.prototype.get = function(kk) {
      var ek = this.__data__;
      if (Ye) {
        var ik = ek[kk];
        return ik === Dk ? void 0 : ik
      }
      return ie.call(ek, kk) ? ek[kk] : void 0
    }, Fe.prototype.has = function(kk) {
      var ek = this.__data__;
      return Ye ? void 0 !== ek[kk] : ie.call(ek, kk)
    }, Fe.prototype.set = function(kk, ek) {
      return this.__data__[kk] = Ye && void 0 === ek ? Dk : ek, this
    }, ue.prototype.clear = function() {
      this.__data__ = []
    }, ue.prototype.delete = function(kk) {
      var ek = this.__data__,
        ik = ve(ek, kk);
      return !(ik < 0) && (ik == ek.length - 1 ? ek.pop() : Ke.call(ek, ik, 1), !0)
    }, ue.prototype.get = function(kk) {
      var ek = this.__data__,
        ik = ve(ek, kk);
      return ik < 0 ? void 0 : ek[ik][1]
    }, ue.prototype.has = function(kk) {
      return ve(this.__data__, kk) > -1
    }, ue.prototype.set = function(kk, ek) {
      var ik = this.__data__,
        Dk = ve(ik, kk);
      return Dk < 0 ? ik.push([kk, ek]) : ik[Dk][1] = ek, this
    }, qe.prototype.clear = function() {
      this.__data__ = {
        hash: new Fe,
        map: new(we || ue),
        string: new Fe
      }
    }, qe.prototype.delete = function(kk) {
      return te(this, kk).delete(kk)
    }, qe.prototype.get = function(kk) {
      return te(this, kk).get(kk)
    }, qe.prototype.has = function(kk) {
      return te(this, kk).has(kk)
    }, qe.prototype.set = function(kk, ek) {
      return te(this, kk).set(kk, ek), this
    }, Ie.prototype.clear = function() {
      this.__data__ = new ue
    }, Ie.prototype.delete = function(kk) {
      return this.__data__.delete(kk)
    }, Ie.prototype.get = function(kk) {
      return this.__data__.get(kk)
    }, Ie.prototype.has = function(kk) {
      return this.__data__.has(kk)
    }, Ie.prototype.set = function(kk, ek) {
      var ik = this.__data__;
      if (ik instanceof ue) {
        var Dk = ik.__data__;
        if (!we || Dk.length < 199) return Dk.push([kk, ek]), this;
        ik = this.__data__ = new qe(Dk)
      }
      return ik.set(kk, ek), this
    };
    var Be = xe ? Ok(xe, Object) : function() {
        return []
      },
      ce = function(kk) {
        return De.call(kk)
      };

    function Te(kk, ek) {
      return !!(ek = null == ek ? fk : ek) && ("number" == typeof kk || zk.test(kk)) && kk > -1 && kk % 1 == 0 && kk < ek
    }

    function oe(kk) {
      var ek = kk && kk.constructor;
      return kk === ("function" == typeof ek && ek.prototype || Rk)
    }

    function Ze(kk) {
      if (null != kk) {
        try {
          return ee.call(kk)
        } catch (ek) {}
        try {
          return kk + ""
        } catch (ek) {}
      }
      return ""
    }

    function Oe(kk, ek) {
      return kk === ek || kk !== kk && ek !== ek
    }(He && ce(new He(new ArrayBuffer(1))) != Yk || we && ce(new we) != Mk || le && ce(le.resolve()) != nk || pe && ce(new pe) != Hk || ye && ce(new ye) != pk) && (ce = function(kk) {
      var ek = De.call(kk),
        ik = ek == xk ? kk.constructor : void 0,
        Dk = ik ? Ze(ik) : void 0;
      if (Dk) switch (Dk) {
        case Le:
          return Yk;
        case Ce:
          return Mk;
        case Ae:
          return nk;
        case je:
          return Hk;
        case se:
          return pk
      }
      return ek
    });
    var ge = Array.isArray;

    function Ge(kk) {
      return null != kk && function(kk) {
        return "number" == typeof kk && kk > -1 && kk % 1 == 0 && kk <= fk
      }(kk.length) && !Re(kk)
    }
    var Ne = ne || function() {
      return !1
    };

    function Re(kk) {
      var ek = Je(kk) ? De.call(kk) : "";
      return ek == Pk || ek == mk
    }

    function Je(kk) {
      var ek = typeof kk;
      return !!kk && ("object" == ek || "function" == ek)
    }

    function ki(kk) {
      return Ge(kk) ? ze(kk) : function(kk) {
        if (!oe(kk)) return Ue(kk);
        var ek = [];
        for (var ik in Object(kk)) ie.call(kk, ik) && "constructor" != ik && ek.push(ik);
        return ek
      }(kk)
    }
    kk.exports = function(kk) {
      return Ee(kk, !0, !0)
    }
  },
  38031: kk => {
    function ek(kk, ek, ik) {
      for (var Dk = kk.length, fk = -1 / 0, Sk = 1 / 0, bk = 0; bk < Dk; bk++) {
        var rk = (ik[0][bk] - kk[bk]) / ek[bk],
          Pk = (ik[1][bk] - kk[bk]) / ek[bk];
        if (rk > Pk) {
          var mk = rk;
          rk = Pk, Pk = mk
        }
        if (Pk < fk || rk > Sk) return 1 / 0;
        rk > fk && (fk = rk), Pk < Sk && (Sk = Pk)
      }
      return fk > Sk ? 1 / 0 : fk
    }
    kk.exports = function(kk, ik, Dk, fk) {
      var Sk = ek(ik, Dk, fk);
      if (Sk === 1 / 0) kk = null;
      else {
        kk = kk || [];
        for (var bk = 0; bk < ik.length; bk++) kk[bk] = ik[bk] + Dk[bk] * Sk
      }
      return kk
    }, kk.exports.distance = ek
  },
  37327: (kk, ek, ik) => {
    var Dk = ik(37335);

    function fk(kk) {
      for (var ek, ik, fk = 0, Sk = kk.length, bk = 0; bk < kk.length;) {
        for (ek = kk[bk], ik = 0; bk < Sk && kk[bk] === ek;) ++bk, ++ik;
        fk += Dk.log2(ik) / 7 | 0, fk += Dk.log2(ek >>> 0) / 7 | 0, fk += 2
      }
      return fk
    }
    ek.size = fk, ek.encode = function(kk, ek) {
      ek || (ek = new Uint8Array(fk(kk)));
      for (var ik, Dk, Sk = 0, bk = ek.length, rk = 0; rk < kk.length;) {
        for (ik = kk[rk], Dk = 0; rk < kk.length && kk[rk] === ik;) ++rk, ++Dk;
        for (; Sk < bk && Dk >= 128;) ek[Sk++] = 128 + (127 & Dk), Dk >>>= 7;
        if (Sk >= bk) throw new Error("RLE buffer overflow");
        for (ek[Sk++] = Dk, ik >>>= 0; Sk < bk && ik >= 128;) ek[Sk++] = 128 + (127 & ik), ik >>>= 7;
        if (Sk >= bk) throw new Error("RLE buffer overflow");
        ek[Sk++] = ik
      }
      return ek
    }, ek.decode = function(kk, ek) {
      for (var ik, Dk, fk, Sk, bk = ek.length, rk = kk.length, Pk = 0, mk = 0; mk < rk;) {
        for (ik = 0, Dk = 0; mk < rk && kk[mk] >= 128;) ik += (127 & kk[mk++]) << Dk, Dk += 7;
        if (ik += kk[mk++] << Dk, mk >= rk) throw new Error("RLE buffer underrun");
        if (Pk + ik > bk) throw new Error("Chunk buffer overflow");
        for (fk = 0, Dk = 0; mk < rk && kk[mk] >= 128;) fk += (127 & kk[mk++]) << Dk, Dk += 7;
        if (mk >= rk) throw new Error("RLE buffer underrun");
        for (fk += kk[mk++] << Dk, Sk = 0; Sk < ik; ++Sk) ek[Pk++] = fk
      }
      return ek
    }
  },
  37335: (kk, ek) => {
    function ik(kk) {
      var ek = 32;
      return (kk &= -kk) && ek--, 65535 & kk && (ek -= 16), 16711935 & kk && (ek -= 8), 252645135 & kk && (ek -= 4), 858993459 & kk && (ek -= 2), 1431655765 & kk && (ek -= 1), ek
    }
    ek.INT_BITS = 32, ek.INT_MAX = 2147483647, ek.INT_MIN = -1 << 31, ek.sign = function(kk) {
      return (kk > 0) - (kk < 0)
    }, ek.abs = function(kk) {
      var ek = kk >> 31;
      return (kk ^ ek) - ek
    }, ek.min = function(kk, ek) {
      return ek ^ (kk ^ ek) & -(kk < ek)
    }, ek.max = function(kk, ek) {
      return kk ^ (kk ^ ek) & -(kk < ek)
    }, ek.isPow2 = function(kk) {
      return !(kk & kk - 1) && !!kk
    }, ek.log2 = function(kk) {
      var ek, ik;
      return ek = (kk > 65535) << 4, ek |= ik = ((kk >>>= ek) > 255) << 3, ek |= ik = ((kk >>>= ik) > 15) << 2, (ek |= ik = ((kk >>>= ik) > 3) << 1) | (kk >>>= ik) >> 1
    }, ek.log10 = function(kk) {
      return kk >= 1e9 ? 9 : kk >= 1e8 ? 8 : kk >= 1e7 ? 7 : kk >= 1e6 ? 6 : kk >= 1e5 ? 5 : kk >= 1e4 ? 4 : kk >= 1e3 ? 3 : kk >= 100 ? 2 : kk >= 10 ? 1 : 0
    }, ek.popCount = function(kk) {
      return 16843009 * ((kk = (858993459 & (kk -= kk >>> 1 & 1431655765)) + (kk >>> 2 & 858993459)) + (kk >>> 4) & 252645135) >>> 24
    }, ek.countTrailingZeros = ik, ek.nextPow2 = function(kk) {
      return kk += 0 === kk, --kk, kk |= kk >>> 1, kk |= kk >>> 2, kk |= kk >>> 4, kk |= kk >>> 8, (kk |= kk >>> 16) + 1
    }, ek.prevPow2 = function(kk) {
      return kk |= kk >>> 1, kk |= kk >>> 2, kk |= kk >>> 4, kk |= kk >>> 8, (kk |= kk >>> 16) - (kk >>> 1)
    }, ek.parity = function(kk) {
      return kk ^= kk >>> 16, kk ^= kk >>> 8, kk ^= kk >>> 4, 27030 >>> (kk &= 15) & 1
    };
    var Dk = new Array(256);
    ! function(kk) {
      for (var ek = 0; ek < 256; ++ek) {
        var ik = ek,
          Dk = ek,
          fk = 7;
        for (ik >>>= 1; ik; ik >>>= 1) Dk <<= 1, Dk |= 1 & ik, --fk;
        kk[ek] = Dk << fk & 255
      }
    }(Dk), ek.reverse = function(kk) {
      return Dk[255 & kk] << 24 | Dk[kk >>> 8 & 255] << 16 | Dk[kk >>> 16 & 255] << 8 | Dk[kk >>> 24 & 255]
    }, ek.interleave2 = function(kk, ek) {
      return (kk = 1431655765 & ((kk = 858993459 & ((kk = 252645135 & ((kk = 16711935 & ((kk &= 65535) | kk << 8)) | kk << 4)) | kk << 2)) | kk << 1)) | (ek = 1431655765 & ((ek = 858993459 & ((ek = 252645135 & ((ek = 16711935 & ((ek &= 65535) | ek << 8)) | ek << 4)) | ek << 2)) | ek << 1)) << 1
    }, ek.deinterleave2 = function(kk, ek) {
      return (kk = 65535 & ((kk = 16711935 & ((kk = 252645135 & ((kk = 858993459 & ((kk = kk >>> ek & 1431655765) | kk >>> 1)) | kk >>> 2)) | kk >>> 4)) | kk >>> 16)) << 16 >> 16
    }, ek.interleave3 = function(kk, ek, ik) {
      return kk = 1227133513 & ((kk = 3272356035 & ((kk = 251719695 & ((kk = 4278190335 & ((kk &= 1023) | kk << 16)) | kk << 8)) | kk << 4)) | kk << 2), (kk |= (ek = 1227133513 & ((ek = 3272356035 & ((ek = 251719695 & ((ek = 4278190335 & ((ek &= 1023) | ek << 16)) | ek << 8)) | ek << 4)) | ek << 2)) << 1) | (ik = 1227133513 & ((ik = 3272356035 & ((ik = 251719695 & ((ik = 4278190335 & ((ik &= 1023) | ik << 16)) | ik << 8)) | ik << 4)) | ik << 2)) << 2
    }, ek.deinterleave3 = function(kk, ek) {
      return (kk = 1023 & ((kk = 4278190335 & ((kk = 251719695 & ((kk = 3272356035 & ((kk = kk >>> ek & 1227133513) | kk >>> 2)) | kk >>> 4)) | kk >>> 8)) | kk >>> 16)) << 22 >> 22
    }, ek.nextCombination = function(kk) {
      var ek = kk | kk - 1;
      return ek + 1 | (~ek & -~ek) - 1 >>> ik(kk) + 1
    }
  },
  36868: (kk, ek, ik) => {
    ik.d(ek, {
      Color3: () => Dk.e,
      e: () => Dk.f
    });
    var Dk = ik(36874);
    (0, Dk.h)()
  },
  37365: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => fk
    });
    var Dk = ik(37372);
    class fk {
      static GetPlanes(kk) {
        const ek = [];
        for (let ik = 0; ik < 6; ik++) ek.push(new Dk.c(0, 0, 0, 0));
        return fk.GetPlanesToRef(kk, ek), ek
      }
      static GetNearPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] + ik[2], ek.normal.y = ik[7] + ik[6], ek.normal.z = ik[11] + ik[10], ek.d = ik[15] + ik[14], ek.normalize()
      }
      static GetFarPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] - ik[2], ek.normal.y = ik[7] - ik[6], ek.normal.z = ik[11] - ik[10], ek.d = ik[15] - ik[14], ek.normalize()
      }
      static GetLeftPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] + ik[0], ek.normal.y = ik[7] + ik[4], ek.normal.z = ik[11] + ik[8], ek.d = ik[15] + ik[12], ek.normalize()
      }
      static GetRightPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] - ik[0], ek.normal.y = ik[7] - ik[4], ek.normal.z = ik[11] - ik[8], ek.d = ik[15] - ik[12], ek.normalize()
      }
      static GetTopPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] - ik[1], ek.normal.y = ik[7] - ik[5], ek.normal.z = ik[11] - ik[9], ek.d = ik[15] - ik[13], ek.normalize()
      }
      static GetBottomPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] + ik[1], ek.normal.y = ik[7] + ik[5], ek.normal.z = ik[11] + ik[9], ek.d = ik[15] + ik[13], ek.normalize()
      }
      static GetPlanesToRef(kk, ek) {
        fk.GetNearPlaneToRef(kk, ek[0]), fk.GetFarPlaneToRef(kk, ek[1]), fk.GetLeftPlaneToRef(kk, ek[2]), fk.GetRightPlaneToRef(kk, ek[3]), fk.GetTopPlaneToRef(kk, ek[4]), fk.GetBottomPlaneToRef(kk, ek[5])
      }
      static IsPointInFrustum(kk, ek) {
        for (let ik = 0; ik < 6; ik++)
          if (ek[ik].dotCoordinate(kk) < 0) return !1;
        return !0
      }
    }
  },
  37372: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk
    });
    var Dk = ik(36698);
    class fk {
      constructor(kk, ek, ik, fk) {
        this.normal = new Dk.o(kk, ek, ik), this.d = fk
      }
      Tik() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new fk(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let kk = this.normal.getHashCode();
        return kk = 397 * kk ^ this.d, kk
      }
      normalize() {
        const kk = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let ek = 0;
        return 0 !== kk && (ek = 1 / kk), this.normal.x *= ek, this.normal.y *= ek, this.normal.z *= ek, this.d *= ek, this
      }
      transform(kk) {
        const ek = fk._TmpMatrix;
        kk.invertToRef(ek);
        const ik = ek.m,
          Dk = this.normal.x,
          Sk = this.normal.y,
          bk = this.normal.z,
          rk = this.d,
          Pk = Dk * ik[0] + Sk * ik[1] + bk * ik[2] + rk * ik[3],
          mk = Dk * ik[4] + Sk * ik[5] + bk * ik[6] + rk * ik[7],
          Mk = Dk * ik[8] + Sk * ik[9] + bk * ik[10] + rk * ik[11],
          Kk = Dk * ik[12] + Sk * ik[13] + bk * ik[14] + rk * ik[15];
        return new fk(Pk, mk, Mk, Kk)
      }
      dotCoordinate(kk) {
        return this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z + this.d
      }
      copyFromPoints(kk, ek, ik) {
        const Dk = ek.x - kk.x,
          fk = ek.y - kk.y,
          Sk = ek.z - kk.z,
          bk = ik.x - kk.x,
          rk = ik.y - kk.y,
          Pk = ik.z - kk.z,
          mk = fk * Pk - Sk * rk,
          Mk = Sk * bk - Dk * Pk,
          Kk = Dk * rk - fk * bk,
          xk = Math.sqrt(mk * mk + Mk * Mk + Kk * Kk);
        let nk;
        return nk = 0 !== xk ? 1 / xk : 0, this.normal.x = mk * nk, this.normal.y = Mk * nk, this.normal.z = Kk * nk, this.d = -(this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z), this
      }
      isFrontFacingTo(kk, ek) {
        return Dk.o.Dot(this.normal, kk) <= ek
      }
      signedDistanceTo(kk) {
        return Dk.o.Dot(kk, this.normal) + this.d
      }
      static FromArray(kk) {
        return new fk(kk[0], kk[1], kk[2], kk[3])
      }
      static FromPoints(kk, ek, ik) {
        const Dk = new fk(0, 0, 0, 0);
        return Dk.copyFromPoints(kk, ek, ik), Dk
      }
      static FromPositionAndNormal(kk, ek) {
        const ik = new fk(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(kk, ek, ik)
      }
      static FromPositionAndNormalToRef(kk, ek, ik) {
        return ik.normal.Fs(ek), ik.normal.normalize(), ik.d = -kk.dot(ik.normal), ik
      }
      static SignedDistanceToPlaneFromPositionAndNormal(kk, ek, ik) {
        const fk = -(ek.x * kk.x + ek.y * kk.y + ek.z * kk.z);
        return Dk.o.Dot(ik, ek) + fk
      }
    }
    fk._TmpMatrix = Dk.b.Identity()
  },
  36690: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      Matrix: () => Dk.b,
      Quaternion: () => Dk.c,
      RegisterMathVector: () => Dk.g,
      TmpVectors: () => Dk.j,
      Vector2: () => Dk.l,
      eH: () => Dk.o,
      Vector4: () => Dk.p
    });
    var Dk = ik(36698);
    (0, Dk.g)()
  },
  37679: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Dk
    });
    class Dk {
      constructor(kk, ek, ik, Dk) {
        this.x = kk, this.y = ek, this.width = ik, this.height = Dk
      }
      toGlobal(kk, ek) {
        return new Dk(this.x * kk, this.y * ek, this.width * kk, this.height * ek)
      }
      toGlobalToRef(kk, ek, ik) {
        return ik.x = this.x * kk, ik.y = this.y * ek, ik.width = this.width * kk, ik.height = this.height * ek, this
      }
      clone() {
        return new Dk(this.x, this.y, this.width, this.height)
      }
    }
  },
  37497: (kk, ek, ik) => {
    function Dk() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (kk => {
        const ek = 16 * Math.random() | 0;
        return ("x" === kk ? ek : 3 & ek | 8).toString(16)
      }))
    }
    ik.d(ek, {
      b: () => Dk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);