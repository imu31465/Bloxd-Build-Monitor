/*! For license information please see 31kiid.228.7d23316f.chunk.js.LICENSE.txt */
export const id = 228;
export const ids = [228, 235];
export const modules = {
  38286: kk => {
    kk.exports = function(kk) {
      return null != kk && null != kk.constructor && "function" === typeof kk.constructor.isBuffer && kk.constructor.isBuffer(kk)
    }
  },
  38271: (kk, Fk, Ik) => {
    var Xk = Ik(38276),
      Tk = Ik(38280),
      ik = Ik(38286);
    Ik.g.__TYPEDARRAY_POOL || (Ik.g.__TYPEDARRAY_POOL = {
      UINT8: Tk([32, 0]),
      UINT16: Tk([32, 0]),
      UINT32: Tk([32, 0]),
      INT8: Tk([32, 0]),
      INT16: Tk([32, 0]),
      INT32: Tk([32, 0]),
      FLOAT: Tk([32, 0]),
      DOUBLE: Tk([32, 0]),
      DATA: Tk([32, 0]),
      UINT8C: Tk([32, 0]),
      BUFFER: Tk([32, 0])
    });
    var yk = "undefined" !== typeof Uint8ClampedArray,
      lk = Ik.g.__TYPEDARRAY_POOL;
    lk.UINT8C || (lk.UINT8C = Tk([32, 0])), lk.BUFFER || (lk.BUFFER = Tk([32, 0]));
    var ak = lk.DATA,
      qk = lk.BUFFER;

    function Lk(kk) {
      if (kk) {
        var Fk = kk.length || kk.byteLength,
          Ik = Xk.log2(Fk);
        ak[Ik].push(kk)
      }
    }

    function tk(kk) {
      kk = Xk.nextPow2(kk);
      var Fk = Xk.log2(kk),
        Ik = ak[Fk];
      return Ik.length > 0 ? Ik.pop() : new ArrayBuffer(kk)
    }

    function Zk(kk) {
      return new Uint8Array(tk(kk), 0, kk)
    }

    function jk(kk) {
      return new Uint16Array(tk(2 * kk), 0, kk)
    }

    function ek(kk) {
      return new Uint32Array(tk(4 * kk), 0, kk)
    }

    function wk(kk) {
      return new Int8Array(tk(kk), 0, kk)
    }

    function Hk(kk) {
      return new Int16Array(tk(2 * kk), 0, kk)
    }

    function Jk(kk) {
      return new Int32Array(tk(4 * kk), 0, kk)
    }

    function xk(kk) {
      return new Float32Array(tk(4 * kk), 0, kk)
    }

    function Pk(kk) {
      return new Float64Array(tk(8 * kk), 0, kk)
    }

    function Kk(kk) {
      return yk ? new Uint8ClampedArray(tk(kk), 0, kk) : Zk(kk)
    }

    function Qk(kk) {
      return new DataView(tk(kk), 0, kk)
    }
    Fk.free = function(kk) {
      if (ik(kk)) qk[Xk.log2(kk.length)].push(kk);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(kk) && (kk = kk.buffer), !kk) return;
        var Fk = kk.length || kk.byteLength,
          Ik = 0 | Xk.log2(Fk);
        ak[Ik].push(kk)
      }
    }, Fk.freeUint8 = Fk.freeUint16 = Fk.freeUint32 = Fk.freeInt8 = Fk.freeInt16 = Fk.freeInt32 = Fk.freeFloat32 = Fk.freeFloat = Fk.freeFloat64 = Fk.freeDouble = Fk.freeUint8Clamped = Fk.freeDataView = function(kk) {
      Lk(kk.buffer)
    }, Fk.freeArrayBuffer = Lk, Fk.freeBuffer = function(kk) {
      qk[Xk.log2(kk.length)].push(kk)
    }, Fk.malloc = function(kk, Fk) {
      if (void 0 === Fk || "arraybuffer" === Fk) return tk(kk);
      switch (Fk) {
        case "uint8":
          return Zk(kk);
        case "uint16":
          return jk(kk);
        case "uint32":
          return ek(kk);
        case "int8":
          return wk(kk);
        case "int16":
          return Hk(kk);
        case "int32":
          return Jk(kk);
        case "float":
        case "float32":
          return xk(kk);
        case "double":
        case "float64":
          return Pk(kk);
        case "uint8_clamped":
          return Kk(kk);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return Qk(kk);
        default:
          return null
      }
      return null
    }, Fk.mallocArrayBuffer = tk, Fk.mallocUint8 = Zk, Fk.mallocUint16 = jk, Fk.mallocUint32 = ek, Fk.mallocInt8 = wk, Fk.mallocInt16 = Hk, Fk.mallocInt32 = Jk, Fk.mallocFloat32 = Fk.mallocFloat = xk, Fk.mallocFloat64 = Fk.mallocDouble = Pk, Fk.mallocUint8Clamped = Kk, Fk.mallocDataView = Qk, Fk.clearCache = function() {
      for (var kk = 0; kk < 32; ++kk) lk.UINT8[kk].length = 0, lk.UINT16[kk].length = 0, lk.UINT32[kk].length = 0, lk.INT8[kk].length = 0, lk.INT16[kk].length = 0, lk.INT32[kk].length = 0, lk.FLOAT[kk].length = 0, lk.DOUBLE[kk].length = 0, lk.UINT8C[kk].length = 0, ak[kk].length = 0, qk[kk].length = 0
    }
  },
  38276: (kk, Fk) => {
    function Ik(kk) {
      var Fk = 32;
      return (kk &= -kk) && Fk--, 65535 & kk && (Fk -= 16), 16711935 & kk && (Fk -= 8), 252645135 & kk && (Fk -= 4), 858993459 & kk && (Fk -= 2), 1431655765 & kk && (Fk -= 1), Fk
    }
    Fk.INT_BITS = 32, Fk.INT_MAX = 2147483647, Fk.INT_MIN = -1 << 31, Fk.sign = function(kk) {
      return (kk > 0) - (kk < 0)
    }, Fk.abs = function(kk) {
      var Fk = kk >> 31;
      return (kk ^ Fk) - Fk
    }, Fk.min = function(kk, Fk) {
      return Fk ^ (kk ^ Fk) & -(kk < Fk)
    }, Fk.max = function(kk, Fk) {
      return kk ^ (kk ^ Fk) & -(kk < Fk)
    }, Fk.isPow2 = function(kk) {
      return !(kk & kk - 1) && !!kk
    }, Fk.log2 = function(kk) {
      var Fk, Ik;
      return Fk = (kk > 65535) << 4, Fk |= Ik = ((kk >>>= Fk) > 255) << 3, Fk |= Ik = ((kk >>>= Ik) > 15) << 2, (Fk |= Ik = ((kk >>>= Ik) > 3) << 1) | (kk >>>= Ik) >> 1
    }, Fk.log10 = function(kk) {
      return kk >= 1e9 ? 9 : kk >= 1e8 ? 8 : kk >= 1e7 ? 7 : kk >= 1e6 ? 6 : kk >= 1e5 ? 5 : kk >= 1e4 ? 4 : kk >= 1e3 ? 3 : kk >= 100 ? 2 : kk >= 10 ? 1 : 0
    }, Fk.popCount = function(kk) {
      return 16843009 * ((kk = (858993459 & (kk -= kk >>> 1 & 1431655765)) + (kk >>> 2 & 858993459)) + (kk >>> 4) & 252645135) >>> 24
    }, Fk.countTrailingZeros = Ik, Fk.nextPow2 = function(kk) {
      return kk += 0 === kk, --kk, kk |= kk >>> 1, kk |= kk >>> 2, kk |= kk >>> 4, kk |= kk >>> 8, (kk |= kk >>> 16) + 1
    }, Fk.prevPow2 = function(kk) {
      return kk |= kk >>> 1, kk |= kk >>> 2, kk |= kk >>> 4, kk |= kk >>> 8, (kk |= kk >>> 16) - (kk >>> 1)
    }, Fk.parity = function(kk) {
      return kk ^= kk >>> 16, kk ^= kk >>> 8, kk ^= kk >>> 4, 27030 >>> (kk &= 15) & 1
    };
    var Xk = new Array(256);
    ! function(kk) {
      for (var Fk = 0; Fk < 256; ++Fk) {
        var Ik = Fk,
          Xk = Fk,
          Tk = 7;
        for (Ik >>>= 1; Ik; Ik >>>= 1) Xk <<= 1, Xk |= 1 & Ik, --Tk;
        kk[Fk] = Xk << Tk & 255
      }
    }(Xk), Fk.reverse = function(kk) {
      return Xk[255 & kk] << 24 | Xk[kk >>> 8 & 255] << 16 | Xk[kk >>> 16 & 255] << 8 | Xk[kk >>> 24 & 255]
    }, Fk.interleave2 = function(kk, Fk) {
      return (kk = 1431655765 & ((kk = 858993459 & ((kk = 252645135 & ((kk = 16711935 & ((kk &= 65535) | kk << 8)) | kk << 4)) | kk << 2)) | kk << 1)) | (Fk = 1431655765 & ((Fk = 858993459 & ((Fk = 252645135 & ((Fk = 16711935 & ((Fk &= 65535) | Fk << 8)) | Fk << 4)) | Fk << 2)) | Fk << 1)) << 1
    }, Fk.deinterleave2 = function(kk, Fk) {
      return (kk = 65535 & ((kk = 16711935 & ((kk = 252645135 & ((kk = 858993459 & ((kk = kk >>> Fk & 1431655765) | kk >>> 1)) | kk >>> 2)) | kk >>> 4)) | kk >>> 16)) << 16 >> 16
    }, Fk.interleave3 = function(kk, Fk, Ik) {
      return kk = 1227133513 & ((kk = 3272356035 & ((kk = 251719695 & ((kk = 4278190335 & ((kk &= 1023) | kk << 16)) | kk << 8)) | kk << 4)) | kk << 2), (kk |= (Fk = 1227133513 & ((Fk = 3272356035 & ((Fk = 251719695 & ((Fk = 4278190335 & ((Fk &= 1023) | Fk << 16)) | Fk << 8)) | Fk << 4)) | Fk << 2)) << 1) | (Ik = 1227133513 & ((Ik = 3272356035 & ((Ik = 251719695 & ((Ik = 4278190335 & ((Ik &= 1023) | Ik << 16)) | Ik << 8)) | Ik << 4)) | Ik << 2)) << 2
    }, Fk.deinterleave3 = function(kk, Fk) {
      return (kk = 1023 & ((kk = 4278190335 & ((kk = 251719695 & ((kk = 3272356035 & ((kk = kk >>> Fk & 1227133513) | kk >>> 2)) | kk >>> 4)) | kk >>> 8)) | kk >>> 16)) << 22 >> 22
    }, Fk.nextCombination = function(kk) {
      var Fk = kk | kk - 1;
      return Fk + 1 | (~Fk & -~Fk) - 1 >>> Ik(kk) + 1
    }
  },
  38266: (kk, Fk, Ik) => {
    kk.exports = function(kk, Fk, Ik) {
      switch (arguments.length) {
        case 1:
          return Xk = [], qk(Tk = kk, Tk, Lk, !0), Xk;
        case 2:
          return "function" === typeof Fk ? qk(kk, kk, Fk, !0) : function(kk, Fk) {
            return Xk = [], qk(kk, Fk, Lk, !1), Xk
          }(kk, Fk);
        case 3:
          return qk(kk, Fk, Ik, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var Tk
    };
    var Xk, Tk = Ik(38271),
      ik = Ik(38292),
      yk = Ik(38301);

    function lk(kk, Fk) {
      for (var Ik = 0; Ik < kk; ++Ik)
        if (!(Fk[Ik] <= Fk[Ik + kk])) return !0;
      return !1
    }

    function ak(kk, Fk, Ik, Xk) {
      for (var Tk = 0, ik = 0, yk = 0, ak = kk.length; yk < ak; ++yk) {
        var qk = kk[yk];
        if (!lk(Fk, qk)) {
          for (var Lk = 0; Lk < 2 * Fk; ++Lk) Ik[Tk++] = qk[Lk];
          Xk[ik++] = yk
        }
      }
      return ik
    }

    function qk(kk, Fk, Ik, Xk) {
      var lk = kk.length,
        qk = Fk.length;
      if (!(lk <= 0 || qk <= 0)) {
        var Lk = kk[0].length >>> 1;
        if (!(Lk <= 0)) {
          var tk, Zk = Tk.mallocDouble(2 * Lk * lk),
            jk = Tk.mallocInt32(lk);
          if ((lk = ak(kk, Lk, Zk, jk)) > 0) {
            if (1 === Lk && Xk) ik.init(lk), tk = ik.sweepComplete(Lk, Ik, 0, lk, Zk, jk, 0, lk, Zk, jk);
            else {
              var ek = Tk.mallocDouble(2 * Lk * qk),
                wk = Tk.mallocInt32(qk);
              (qk = ak(Fk, Lk, ek, wk)) > 0 && (ik.init(lk + qk), tk = 1 === Lk ? ik.sweepBipartite(Lk, Ik, 0, lk, Zk, jk, 0, qk, ek, wk) : yk(Lk, Ik, Xk, lk, Zk, jk, qk, ek, wk), Tk.free(ek), Tk.free(wk))
            }
            Tk.free(Zk), Tk.free(jk)
          }
          return tk
        }
      }
    }

    function Lk(kk, Fk) {
      Xk.push([kk, Fk])
    }
  },
  38310: (kk, Fk) => {
    var Ik = "d",
      Xk = "ax",
      Tk = "fp",
      ik = "es",
      yk = "rs",
      lk = "re",
      ak = "rb",
      qk = "bs",
      Lk = "be",
      tk = "bb",
      Zk = [Ik, Xk, "vv", yk, lk, ak, "ri", qk, Lk, tk, "bi"];

    function jk(kk) {
      var Fk = "bruteForce" + (kk ? "Full" : "Partial"),
        Xk = [],
        yk = Zk.slice();
      kk || yk.splice(3, 0, Tk);
      var lk = ["function " + Fk + "(" + yk.join() + "){"];

      function ak(Fk, Tk) {
        var yk = function(kk, Fk, Xk) {
          var Tk = "bruteForce" + (kk ? "Red" : "Blue") + (Fk ? "Flip" : "") + (Xk ? "Full" : ""),
            yk = ["function ", Tk, "(", Zk.join(), "){", "var ", ik, "=2*", Ik, ";"],
            lk = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            ak = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (Xk ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return kk ? yk.push(lk, "Q", ":", ak) : yk.push(ak, "Q", ":", lk), Xk ? yk.push("if(y1<x0||x1<y0)continue;") : Fk ? yk.push("if(y0<=x0||x1<y0)continue;") : yk.push("if(y0<x0||x1<y0)continue;"), yk.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), Fk ? yk.push("yi,xi") : yk.push("xi,yi"), yk.push(");if(rv!==void 0)return rv;}}}"), {
            name: Tk,
            code: yk.join("")
          }
        }(Fk, Tk, kk);
        Xk.push(yk.code), lk.push("return " + yk.name + "(" + Zk.join() + ");")
      }
      lk.push("if(re-rs>be-bs){"), kk ? (ak(!0, !1), lk.push("}else{"), ak(!1, !1)) : (lk.push("if(fp){"), ak(!0, !0), lk.push("}else{"), ak(!0, !1), lk.push("}}else{if(fp){"), ak(!1, !0), lk.push("}else{"), ak(!1, !1), lk.push("}")), lk.push("}}return " + Fk);
      var qk = Xk.join("") + lk.join("");
      return new Function(qk)()
    }
    Fk.partial = jk(!1), Fk.full = jk(!0)
  },
  38301: (kk, Fk, Ik) => {
    kk.exports = function(kk, Fk, Ik, ik, Lk, Ek, Ok, nk, Gk) {
      ! function(kk, Fk) {
        var Ik = 8 * Tk.log2(Fk + 1) * (kk + 1) | 0,
          ik = Tk.nextPow2(Kk * Ik);
        sk.length < ik && (Xk.free(sk), sk = Xk.mallocInt32(ik));
        var yk = Tk.nextPow2(Qk * Ik);
        Vk.length < yk && (Xk.free(Vk), Vk = Xk.mallocDouble(yk))
      }(kk, ik + Ok);
      var pk, uk = 0,
        bk = 2 * kk;
      zk(uk++, 0, 0, ik, 0, Ok, Ik ? 16 : 0, -1 / 0, 1 / 0), Ik || zk(uk++, 0, 0, Ok, 0, ik, 1, -1 / 0, 1 / 0);
      for (; uk > 0;) {
        var Rk = (uk -= 1) * Kk,
          Uk = sk[Rk],
          Ck = sk[Rk + 1],
          Nk = sk[Rk + 2],
          ck = sk[Rk + 3],
          Wk = sk[Rk + 4],
          fk = sk[Rk + 5],
          Bk = uk * Qk,
          dk = Vk[Bk],
          Yk = Vk[Bk + 1],
          Ak = 1 & fk,
          gk = !!(16 & fk),
          mk = Lk,
          hk = Ek,
          rk = nk,
          Dk = Gk;
        if (Ak && (mk = nk, hk = Gk, rk = Lk, Dk = Ek), !(2 & fk && Ck >= (Nk = Hk(kk, Uk, Ck, Nk, mk, hk, Yk))) && !(4 & fk && (Ck = Jk(kk, Uk, Ck, Nk, mk, hk, dk)) >= Nk)) {
          var Mk = Nk - Ck,
            kF = Wk - ck;
          if (gk) {
            if (kk * Mk * (Mk + kF) < jk) {
              if (void 0 !== (pk = ak.scanComplete(kk, Uk, Fk, Ck, Nk, mk, hk, ck, Wk, rk, Dk))) return pk;
              continue
            }
          } else {
            if (kk * Math.min(Mk, kF) < tk) {
              if (void 0 !== (pk = yk(kk, Uk, Fk, Ak, Ck, Nk, mk, hk, ck, Wk, rk, Dk))) return pk;
              continue
            }
            if (kk * Mk * kF < Zk) {
              if (void 0 !== (pk = ak.scanBipartite(kk, Uk, Fk, Ak, Ck, Nk, mk, hk, ck, Wk, rk, Dk))) return pk;
              continue
            }
          }
          var FF = ek(kk, Uk, Ck, Nk, mk, hk, dk, Yk);
          if (Ck < FF)
            if (kk * (FF - Ck) < tk) {
              if (void 0 !== (pk = lk(kk, Uk + 1, Fk, Ck, FF, mk, hk, ck, Wk, rk, Dk))) return pk
            } else if (Uk === kk - 2) {
            if (void 0 !== (pk = Ak ? ak.sweepBipartite(kk, Fk, ck, Wk, rk, Dk, Ck, FF, mk, hk) : ak.sweepBipartite(kk, Fk, Ck, FF, mk, hk, ck, Wk, rk, Dk))) return pk
          } else zk(uk++, Uk + 1, Ck, FF, ck, Wk, Ak, -1 / 0, 1 / 0), zk(uk++, Uk + 1, ck, Wk, Ck, FF, 1 ^ Ak, -1 / 0, 1 / 0);
          if (FF < Nk) {
            var IF = qk(kk, Uk, ck, Wk, rk, Dk),
              XF = rk[bk * IF + Uk],
              TF = wk(kk, Uk, IF, Wk, rk, Dk, XF);
            if (TF < Wk && zk(uk++, Uk, FF, Nk, TF, Wk, (4 | Ak) + (gk ? 16 : 0), XF, Yk), ck < IF && zk(uk++, Uk, FF, Nk, ck, IF, (2 | Ak) + (gk ? 16 : 0), dk, XF), IF + 1 === TF) {
              if (void 0 !== (pk = gk ? vk(kk, Uk, Fk, FF, Nk, mk, hk, IF, rk, Dk[IF]) : Sk(kk, Uk, Fk, Ak, FF, Nk, mk, hk, IF, rk, Dk[IF]))) return pk
            } else if (IF < TF) {
              var iF;
              if (gk) {
                if (FF < (iF = xk(kk, Uk, FF, Nk, mk, hk, XF))) {
                  var yF = wk(kk, Uk, FF, iF, mk, hk, XF);
                  if (Uk === kk - 2) {
                    if (FF < yF && void 0 !== (pk = ak.sweepComplete(kk, Fk, FF, yF, mk, hk, IF, TF, rk, Dk))) return pk;
                    if (yF < iF && void 0 !== (pk = ak.sweepBipartite(kk, Fk, yF, iF, mk, hk, IF, TF, rk, Dk))) return pk
                  } else FF < yF && zk(uk++, Uk + 1, FF, yF, IF, TF, 16, -1 / 0, 1 / 0), yF < iF && (zk(uk++, Uk + 1, yF, iF, IF, TF, 0, -1 / 0, 1 / 0), zk(uk++, Uk + 1, IF, TF, yF, iF, 1, -1 / 0, 1 / 0))
                }
              } else FF < (iF = Ak ? Pk(kk, Uk, FF, Nk, mk, hk, XF) : xk(kk, Uk, FF, Nk, mk, hk, XF)) && (Uk === kk - 2 ? pk = Ak ? ak.sweepBipartite(kk, Fk, IF, TF, rk, Dk, FF, iF, mk, hk) : ak.sweepBipartite(kk, Fk, FF, iF, mk, hk, IF, TF, rk, Dk) : (zk(uk++, Uk + 1, FF, iF, IF, TF, Ak, -1 / 0, 1 / 0), zk(uk++, Uk + 1, IF, TF, FF, iF, 1 ^ Ak, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var Xk = Ik(38271),
      Tk = Ik(38276),
      ik = Ik(38310),
      yk = ik.partial,
      lk = ik.full,
      ak = Ik(38292),
      qk = Ik(38314),
      Lk = Ik(38317),
      tk = 128,
      Zk = 1 << 22,
      jk = 1 << 22,
      ek = Lk("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      wk = Lk("lo===p0", ["p0"]),
      Hk = Lk("lo<p0", ["p0"]),
      Jk = Lk("hi<=p0", ["p0"]),
      xk = Lk("lo<=p0&&p0<=hi", ["p0"]),
      Pk = Lk("lo<p0&&p0<=hi", ["p0"]),
      Kk = 6,
      Qk = 2,
      sk = Xk.mallocInt32(1024),
      Vk = Xk.mallocDouble(1024);

    function zk(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak) {
      var qk = Kk * kk;
      sk[qk] = Fk, sk[qk + 1] = Ik, sk[qk + 2] = Xk, sk[qk + 3] = Tk, sk[qk + 4] = ik, sk[qk + 5] = yk;
      var Lk = Qk * kk;
      Vk[Lk] = lk, Vk[Lk + 1] = ak
    }

    function Sk(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk, Lk) {
      var tk = 2 * kk,
        Zk = ak * tk,
        jk = qk[Zk + Fk];
      kk: for (var ek = Tk, wk = Tk * tk; ek < ik; ++ek, wk += tk) {
        var Hk = yk[wk + Fk],
          Jk = yk[wk + Fk + kk];
        if (!(jk < Hk || Jk < jk) && (!Xk || jk !== Hk)) {
          for (var xk, Pk = lk[ek], Kk = Fk + 1; Kk < kk; ++Kk) {
            Hk = yk[wk + Kk], Jk = yk[wk + Kk + kk];
            var Qk = qk[Zk + Kk],
              sk = qk[Zk + Kk + kk];
            if (Jk < Qk || sk < Hk) continue kk
          }
          if (void 0 !== (xk = Xk ? Ik(Lk, Pk) : Ik(Pk, Lk))) return xk
        }
      }
    }

    function vk(kk, Fk, Ik, Xk, Tk, ik, yk, lk, ak, qk) {
      var Lk = 2 * kk,
        tk = lk * Lk,
        Zk = ak[tk + Fk];
      kk: for (var jk = Xk, ek = Xk * Lk; jk < Tk; ++jk, ek += Lk) {
        var wk = yk[jk];
        if (wk !== qk) {
          var Hk = ik[ek + Fk],
            Jk = ik[ek + Fk + kk];
          if (!(Zk < Hk || Jk < Zk)) {
            for (var xk = Fk + 1; xk < kk; ++xk) {
              Hk = ik[ek + xk], Jk = ik[ek + xk + kk];
              var Pk = ak[tk + xk],
                Kk = ak[tk + xk + kk];
              if (Jk < Pk || Kk < Hk) continue kk
            }
            var Qk = Ik(wk, qk);
            if (void 0 !== Qk) return Qk
          }
        }
      }
    }
  },
  38314: (kk, Fk, Ik) => {
    kk.exports = function(kk, Fk, Ik, yk, lk, ak) {
      if (yk <= Ik + 1) return Ik;
      var qk = Ik,
        Lk = yk,
        tk = yk + Ik >>> 1,
        Zk = 2 * kk,
        jk = tk,
        ek = lk[Zk * tk + Fk];
      for (; qk < Lk;) {
        if (Lk - qk < Tk) {
          ik(kk, Fk, qk, Lk, lk, ak), ek = lk[Zk * tk + Fk];
          break
        }
        var wk = Lk - qk,
          Hk = Math.random() * wk + qk | 0,
          Jk = lk[Zk * Hk + Fk],
          xk = Math.random() * wk + qk | 0,
          Pk = lk[Zk * xk + Fk],
          Kk = Math.random() * wk + qk | 0,
          Qk = lk[Zk * Kk + Fk];
        Jk <= Pk ? Qk >= Pk ? (jk = xk, ek = Pk) : Jk >= Qk ? (jk = Hk, ek = Jk) : (jk = Kk, ek = Qk) : Pk >= Qk ? (jk = xk, ek = Pk) : Qk >= Jk ? (jk = Hk, ek = Jk) : (jk = Kk, ek = Qk);
        for (var sk = Zk * (Lk - 1), Vk = Zk * jk, zk = 0; zk < Zk; ++zk, ++sk, ++Vk) {
          var Sk = lk[sk];
          lk[sk] = lk[Vk], lk[Vk] = Sk
        }
        var vk = ak[Lk - 1];
        ak[Lk - 1] = ak[jk], ak[jk] = vk;
        for (sk = Zk * (Lk - 1), Vk = Zk * (jk = Xk(kk, Fk, qk, Lk - 1, lk, ak, ek)), zk = 0; zk < Zk; ++zk, ++sk, ++Vk) {
          Sk = lk[sk];
          lk[sk] = lk[Vk], lk[Vk] = Sk
        }
        vk = ak[Lk - 1];
        if (ak[Lk - 1] = ak[jk], ak[jk] = vk, tk < jk) {
          for (Lk = jk - 1; qk < Lk && lk[Zk * (Lk - 1) + Fk] === ek;) Lk -= 1;
          Lk += 1
        } else {
          if (!(jk < tk)) break;
          for (qk = jk + 1; qk < Lk && lk[Zk * qk + Fk] === ek;) qk += 1
        }
      }
      return Xk(kk, Fk, Ik, tk, lk, ak, lk[Zk * tk + Fk])
    };
    var Xk = Ik(38317)("lo<p0", ["p0"]),
      Tk = 8;

    function ik(kk, Fk, Ik, Xk, Tk, ik) {
      for (var yk = 2 * kk, lk = yk * (Ik + 1) + Fk, ak = Ik + 1; ak < Xk; ++ak, lk += yk)
        for (var qk = Tk[lk], Lk = ak, tk = yk * (ak - 1); Lk > Ik && Tk[tk + Fk] > qk; --Lk, tk -= yk) {
          for (var Zk = tk, jk = tk + yk, ek = 0; ek < yk; ++ek, ++Zk, ++jk) {
            var wk = Tk[Zk];
            Tk[Zk] = Tk[jk], Tk[jk] = wk
          }
          var Hk = ik[Lk];
          ik[Lk] = ik[Lk - 1], ik[Lk - 1] = Hk
        }
    }
  },
  38317: kk => {
    kk.exports = function(kk, Ik) {
      var Xk = "abcdef".split("").concat(Ik),
        Tk = [];
      kk.indexOf("lo") >= 0 && Tk.push("lo=e[k+n]");
      kk.indexOf("hi") >= 0 && Tk.push("hi=e[k+o]");
      return Xk.push(Fk.replace("_", Tk.join()).replace("$", kk)), Function.apply(void 0, Xk)
    };
    var Fk = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  38294: kk => {
    kk.exports = function(kk, Xk) {
      Xk <= 4 * Fk ? Ik(0, Xk - 1, kk) : qk(0, Xk - 1, kk)
    };
    var Fk = 32;

    function Ik(kk, Fk, Ik) {
      for (var Xk = 2 * (kk + 1), Tk = kk + 1; Tk <= Fk; ++Tk) {
        for (var ik = Ik[Xk++], yk = Ik[Xk++], lk = Tk, ak = Xk - 2; lk-- > kk;) {
          var qk = Ik[ak - 2],
            Lk = Ik[ak - 1];
          if (qk < ik) break;
          if (qk === ik && Lk < yk) break;
          Ik[ak] = qk, Ik[ak + 1] = Lk, ak -= 2
        }
        Ik[ak] = ik, Ik[ak + 1] = yk
      }
    }

    function Xk(kk, Fk, Ik) {
      Fk *= 2;
      var Xk = Ik[kk *= 2],
        Tk = Ik[kk + 1];
      Ik[kk] = Ik[Fk], Ik[kk + 1] = Ik[Fk + 1], Ik[Fk] = Xk, Ik[Fk + 1] = Tk
    }

    function Tk(kk, Fk, Ik) {
      Fk *= 2, Ik[kk *= 2] = Ik[Fk], Ik[kk + 1] = Ik[Fk + 1]
    }

    function ik(kk, Fk, Ik, Xk) {
      Fk *= 2, Ik *= 2;
      var Tk = Xk[kk *= 2],
        ik = Xk[kk + 1];
      Xk[kk] = Xk[Fk], Xk[kk + 1] = Xk[Fk + 1], Xk[Fk] = Xk[Ik], Xk[Fk + 1] = Xk[Ik + 1], Xk[Ik] = Tk, Xk[Ik + 1] = ik
    }

    function yk(kk, Fk, Ik, Xk, Tk) {
      Fk *= 2, Tk[kk *= 2] = Tk[Fk], Tk[Fk] = Ik, Tk[kk + 1] = Tk[Fk + 1], Tk[Fk + 1] = Xk
    }

    function lk(kk, Fk, Ik) {
      Fk *= 2;
      var Xk = Ik[kk *= 2],
        Tk = Ik[Fk];
      return !(Xk < Tk) && (Xk !== Tk || Ik[kk + 1] > Ik[Fk + 1])
    }

    function ak(kk, Fk, Ik, Xk) {
      var Tk = Xk[kk *= 2];
      return Tk < Fk || Tk === Fk && Xk[kk + 1] < Ik
    }

    function qk(kk, Lk, tk) {
      var Zk = (Lk - kk + 1) / 6 | 0,
        jk = kk + Zk,
        ek = Lk - Zk,
        wk = kk + Lk >> 1,
        Hk = wk - Zk,
        Jk = wk + Zk,
        xk = jk,
        Pk = Hk,
        Kk = wk,
        Qk = Jk,
        sk = ek,
        Vk = kk + 1,
        zk = Lk - 1,
        Sk = 0;
      lk(xk, Pk, tk) && (Sk = xk, xk = Pk, Pk = Sk), lk(Qk, sk, tk) && (Sk = Qk, Qk = sk, sk = Sk), lk(xk, Kk, tk) && (Sk = xk, xk = Kk, Kk = Sk), lk(Pk, Kk, tk) && (Sk = Pk, Pk = Kk, Kk = Sk), lk(xk, Qk, tk) && (Sk = xk, xk = Qk, Qk = Sk), lk(Kk, Qk, tk) && (Sk = Kk, Kk = Qk, Qk = Sk), lk(Pk, sk, tk) && (Sk = Pk, Pk = sk, sk = Sk), lk(Pk, Kk, tk) && (Sk = Pk, Pk = Kk, Kk = Sk), lk(Qk, sk, tk) && (Sk = Qk, Qk = sk, sk = Sk);
      for (var vk = tk[2 * Pk], Ek = tk[2 * Pk + 1], Ok = tk[2 * Qk], nk = tk[2 * Qk + 1], Gk = 2 * xk, pk = 2 * Kk, uk = 2 * sk, bk = 2 * jk, Rk = 2 * wk, Uk = 2 * ek, Ck = 0; Ck < 2; ++Ck) {
        var Nk = tk[Gk + Ck],
          ck = tk[pk + Ck],
          Wk = tk[uk + Ck];
        tk[bk + Ck] = Nk, tk[Rk + Ck] = ck, tk[Uk + Ck] = Wk
      }
      Tk(Hk, kk, tk), Tk(Jk, Lk, tk);
      for (var fk = Vk; fk <= zk; ++fk)
        if (ak(fk, vk, Ek, tk)) fk !== Vk && Xk(fk, Vk, tk), ++Vk;
        else if (!ak(fk, Ok, nk, tk))
        for (;;) {
          if (ak(zk, Ok, nk, tk)) {
            ak(zk, vk, Ek, tk) ? (ik(fk, Vk, zk, tk), ++Vk, --zk) : (Xk(fk, zk, tk), --zk);
            break
          }
          if (--zk < fk) break
        }
      yk(kk, Vk - 1, vk, Ek, tk), yk(Lk, zk + 1, Ok, nk, tk), Vk - 2 - kk <= Fk ? Ik(kk, Vk - 2, tk) : qk(kk, Vk - 2, tk), Lk - (zk + 2) <= Fk ? Ik(zk + 2, Lk, tk) : qk(zk + 2, Lk, tk), zk - Vk <= Fk ? Ik(Vk, zk, tk) : qk(Vk, zk, tk)
    }
  },
  38292: (kk, Fk, Ik) => {
    kk.exports = {
      init: function(kk) {
        var Fk = Tk.nextPow2(kk);
        ak.length < Fk && (Xk.free(ak), ak = Xk.mallocInt32(Fk));
        qk.length < Fk && (Xk.free(qk), qk = Xk.mallocInt32(Fk));
        Lk.length < Fk && (Xk.free(Lk), Lk = Xk.mallocInt32(Fk));
        tk.length < Fk && (Xk.free(tk), tk = Xk.mallocInt32(Fk));
        Zk.length < Fk && (Xk.free(Zk), Zk = Xk.mallocInt32(Fk));
        jk.length < Fk && (Xk.free(jk), jk = Xk.mallocInt32(Fk));
        var Ik = 8 * Fk;
        ek.length < Ik && (Xk.free(ek), ek = Xk.mallocDouble(Ik))
      },
      sweepBipartite: function(kk, Fk, Ik, Xk, Tk, lk, Zk, jk, Jk, xk) {
        for (var Pk = 0, Kk = 2 * kk, Qk = kk - 1, sk = Kk - 1, Vk = Ik; Vk < Xk; ++Vk) {
          var zk = lk[Vk],
            Sk = Kk * Vk;
          ek[Pk++] = Tk[Sk + Qk], ek[Pk++] = -(zk + 1), ek[Pk++] = Tk[Sk + sk], ek[Pk++] = zk
        }
        for (Vk = Zk; Vk < jk; ++Vk) {
          zk = xk[Vk] + yk;
          var vk = Kk * Vk;
          ek[Pk++] = Jk[vk + Qk], ek[Pk++] = -zk, ek[Pk++] = Jk[vk + sk], ek[Pk++] = zk
        }
        var Ek = Pk >>> 1;
        ik(ek, Ek);
        var Ok = 0,
          nk = 0;
        for (Vk = 0; Vk < Ek; ++Vk) {
          var Gk = 0 | ek[2 * Vk + 1];
          if (Gk >= yk) wk(Lk, tk, nk--, Gk = Gk - yk | 0);
          else if (Gk >= 0) wk(ak, qk, Ok--, Gk);
          else if (Gk <= -yk) {
            Gk = -Gk - yk | 0;
            for (var pk = 0; pk < Ok; ++pk) {
              if (void 0 !== (uk = Fk(ak[pk], Gk))) return uk
            }
            Hk(Lk, tk, nk++, Gk)
          } else {
            Gk = -Gk - 1 | 0;
            for (pk = 0; pk < nk; ++pk) {
              var uk;
              if (void 0 !== (uk = Fk(Gk, Lk[pk]))) return uk
            }
            Hk(ak, qk, Ok++, Gk)
          }
        }
      },
      sweepComplete: function(kk, Fk, Ik, Xk, Tk, yk, lk, Jk, xk, Pk) {
        for (var Kk = 0, Qk = 2 * kk, sk = kk - 1, Vk = Qk - 1, zk = Ik; zk < Xk; ++zk) {
          var Sk = yk[zk] + 1 << 1,
            vk = Qk * zk;
          ek[Kk++] = Tk[vk + sk], ek[Kk++] = -Sk, ek[Kk++] = Tk[vk + Vk], ek[Kk++] = Sk
        }
        for (zk = lk; zk < Jk; ++zk) {
          Sk = Pk[zk] + 1 << 1;
          var Ek = Qk * zk;
          ek[Kk++] = xk[Ek + sk], ek[Kk++] = 1 | -Sk, ek[Kk++] = xk[Ek + Vk], ek[Kk++] = 1 | Sk
        }
        var Ok = Kk >>> 1;
        ik(ek, Ok);
        var nk = 0,
          Gk = 0,
          pk = 0;
        for (zk = 0; zk < Ok; ++zk) {
          var uk = 0 | ek[2 * zk + 1],
            bk = 1 & uk;
          if (zk < Ok - 1 && uk >> 1 === ek[2 * zk + 3] >> 1 && (bk = 2, zk += 1), uk < 0) {
            for (var Rk = -(uk >> 1) - 1, Uk = 0; Uk < pk; ++Uk) {
              if (void 0 !== (Ck = Fk(Zk[Uk], Rk))) return Ck
            }
            if (0 !== bk)
              for (Uk = 0; Uk < nk; ++Uk) {
                if (void 0 !== (Ck = Fk(ak[Uk], Rk))) return Ck
              }
            if (1 !== bk)
              for (Uk = 0; Uk < Gk; ++Uk) {
                var Ck;
                if (void 0 !== (Ck = Fk(Lk[Uk], Rk))) return Ck
              }
            0 === bk ? Hk(ak, qk, nk++, Rk) : 1 === bk ? Hk(Lk, tk, Gk++, Rk) : 2 === bk && Hk(Zk, jk, pk++, Rk)
          } else {
            Rk = (uk >> 1) - 1;
            0 === bk ? wk(ak, qk, nk--, Rk) : 1 === bk ? wk(Lk, tk, Gk--, Rk) : 2 === bk && wk(Zk, jk, pk--, Rk)
          }
        }
      },
      scanBipartite: function(kk, Fk, Ik, Xk, Tk, lk, Lk, tk, Zk, jk, Jk, xk) {
        var Pk = 0,
          Kk = 2 * kk,
          Qk = Fk,
          sk = Fk + kk,
          Vk = 1,
          zk = 1;
        Xk ? zk = yk : Vk = yk;
        for (var Sk = Tk; Sk < lk; ++Sk) {
          var vk = Sk + Vk,
            Ek = Kk * Sk;
          ek[Pk++] = Lk[Ek + Qk], ek[Pk++] = -vk, ek[Pk++] = Lk[Ek + sk], ek[Pk++] = vk
        }
        for (Sk = Zk; Sk < jk; ++Sk) {
          vk = Sk + zk;
          var Ok = Kk * Sk;
          ek[Pk++] = Jk[Ok + Qk], ek[Pk++] = -vk
        }
        var nk = Pk >>> 1;
        ik(ek, nk);
        var Gk = 0;
        for (Sk = 0; Sk < nk; ++Sk) {
          var pk = 0 | ek[2 * Sk + 1];
          if (pk < 0) {
            var uk = !1;
            if ((vk = -pk) >= yk ? (uk = !Xk, vk -= yk) : (uk = !!Xk, vk -= 1), uk) Hk(ak, qk, Gk++, vk);
            else {
              var bk = xk[vk],
                Rk = Kk * vk,
                Uk = Jk[Rk + Fk + 1],
                Ck = Jk[Rk + Fk + 1 + kk];
              kk: for (var Nk = 0; Nk < Gk; ++Nk) {
                var ck = ak[Nk],
                  Wk = Kk * ck;
                if (!(Ck < Lk[Wk + Fk + 1] || Lk[Wk + Fk + 1 + kk] < Uk)) {
                  for (var fk = Fk + 2; fk < kk; ++fk)
                    if (Jk[Rk + fk + kk] < Lk[Wk + fk] || Lk[Wk + fk + kk] < Jk[Rk + fk]) continue kk;
                  var Bk, dk = tk[ck];
                  if (void 0 !== (Bk = Xk ? Ik(bk, dk) : Ik(dk, bk))) return Bk
                }
              }
            }
          } else wk(ak, qk, Gk--, pk - Vk)
        }
      },
      scanComplete: function(kk, Fk, Ik, Xk, Tk, lk, qk, Lk, tk, Zk, jk) {
        for (var wk = 0, Hk = 2 * kk, Jk = Fk, xk = Fk + kk, Pk = Xk; Pk < Tk; ++Pk) {
          var Kk = Pk + yk,
            Qk = Hk * Pk;
          ek[wk++] = lk[Qk + Jk], ek[wk++] = -Kk, ek[wk++] = lk[Qk + xk], ek[wk++] = Kk
        }
        for (Pk = Lk; Pk < tk; ++Pk) {
          Kk = Pk + 1;
          var sk = Hk * Pk;
          ek[wk++] = Zk[sk + Jk], ek[wk++] = -Kk
        }
        var Vk = wk >>> 1;
        ik(ek, Vk);
        var zk = 0;
        for (Pk = 0; Pk < Vk; ++Pk) {
          var Sk = 0 | ek[2 * Pk + 1];
          if (Sk < 0) {
            if ((Kk = -Sk) >= yk) ak[zk++] = Kk - yk;
            else {
              var vk = jk[Kk -= 1],
                Ek = Hk * Kk,
                Ok = Zk[Ek + Fk + 1],
                nk = Zk[Ek + Fk + 1 + kk];
              kk: for (var Gk = 0; Gk < zk; ++Gk) {
                var pk = ak[Gk],
                  uk = qk[pk];
                if (uk === vk) break;
                var bk = Hk * pk;
                if (!(nk < lk[bk + Fk + 1] || lk[bk + Fk + 1 + kk] < Ok)) {
                  for (var Rk = Fk + 2; Rk < kk; ++Rk)
                    if (Zk[Ek + Rk + kk] < lk[bk + Rk] || lk[bk + Rk + kk] < Zk[Ek + Rk]) continue kk;
                  var Uk = Ik(uk, vk);
                  if (void 0 !== Uk) return Uk
                }
              }
            }
          } else {
            for (Kk = Sk - yk, Gk = zk - 1; Gk >= 0; --Gk)
              if (ak[Gk] === Kk) {
                for (Rk = Gk + 1; Rk < zk; ++Rk) ak[Rk - 1] = ak[Rk];
                break
              }-- zk
          }
        }
      }
    };
    var Xk = Ik(38271),
      Tk = Ik(38276),
      ik = Ik(38294),
      yk = 1 << 28,
      lk = 1024,
      ak = Xk.mallocInt32(lk),
      qk = Xk.mallocInt32(lk),
      Lk = Xk.mallocInt32(lk),
      tk = Xk.mallocInt32(lk),
      Zk = Xk.mallocInt32(lk),
      jk = Xk.mallocInt32(lk),
      ek = Xk.mallocDouble(8192);

    function wk(kk, Fk, Ik, Xk) {
      var Tk = Fk[Xk],
        ik = kk[Ik - 1];
      kk[Tk] = ik, Fk[ik] = Tk
    }

    function Hk(kk, Fk, Ik, Xk) {
      kk[Ik] = Xk, Fk[Xk] = Ik
    }
  },
  38280: kk => {
    function Fk(kk, Ik, Xk) {
      var Tk = 0 | kk[Xk];
      if (Tk <= 0) return [];
      var ik, yk = new Array(Tk);
      if (Xk === kk.length - 1)
        for (ik = 0; ik < Tk; ++ik) yk[ik] = Ik;
      else
        for (ik = 0; ik < Tk; ++ik) yk[ik] = Fk(kk, Ik, Xk + 1);
      return yk
    }
    kk.exports = function(kk, Ik) {
      switch ("undefined" === typeof Ik && (Ik = 0), typeof kk) {
        case "number":
          if (kk > 0) return function(kk, Fk) {
            var Ik, Xk;
            for (Ik = new Array(kk), Xk = 0; Xk < kk; ++Xk) Ik[Xk] = Fk;
            return Ik
          }(0 | kk, Ik);
          break;
        case "object":
          if ("number" === typeof kk.length) return Fk(kk, Ik, 0)
      }
      return []
    }
  },
  38228: (kk, Fk, Ik) => {
    kk.exports = function() {
      var kk = this;
      this.components = {}, this.comps = this.components;
      var Fk = this.components,
        Ik = 1,
        Tk = {},
        ik = [],
        yk = [],
        lk = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function ak(kk, Ik) {
        var Xk = Fk[Ik],
          ik = Tk[Ik],
          yk = ik.hash[kk];
        yk && (ik.remove(kk), Xk.iG && (Xk.multi ? (yk.forEach((Fk => {
          Fk && Xk.iG(kk, Fk)
        })), yk.length = 0) : Xk.iG(kk, yk)), lk.removals.push(ik), qk())
      }

      function qk() {
        lk.timeout || (lk.timeout = !0, setTimeout(Lk, 1))
      }

      function Lk() {
        lk.timeout = !1, tk()
      }

      function tk() {
        lk.multiComps.length && function(kk) {
          for (var Fk = 0; Fk < kk.length; Fk++) {
            var {
              entID: Ik,
              data: Xk
            } = kk[Fk], Tk = Xk.hash[Ik];
            if (Tk) {
              for (var ik = 0; ik < Tk.length; ik++) Tk[ik] || (Tk.splice(ik, 1), ik--);
              0 === Tk.length && (Xk.remove(Ik), lk.removals.push(Xk))
            }
          }
          kk.length = 0
        }(lk.multiComps), lk.removals.length && function(kk) {
          for (var Fk = 0; Fk < kk.length; Fk++) {
            kk[Fk].flush()
          }
          kk.length = 0
        }(lk.removals)
      }
      this.Qw = Tk, this._systems = ik, this._renderSystems = yk, this.qY = function(Fk) {
        var Xk = Ik++;
        return Array.isArray(Fk) && Fk.forEach((Fk => kk.Tu(Xk, Fk))), Xk
      }, this.deleteEntity = function(Fk) {
        return Object.keys(Tk).forEach((kk => {
          Tk[kk].hash[Fk] && ak(Fk, kk)
        })), kk
      }, this.cFk = function(kk) {
        if (!kk) throw new Error("Missing component definition");
        var Ik = kk.name;
        if (!Ik) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof Ik) throw new Error("Component name must be a string.");
        if ("" === Ik) throw new Error("Component name must be a non-empty string.");
        if (Tk[Ik]) throw new Error(`Component ${Ik} already exists.`);
        var lk = {};
        return lk.name = Ik, lk.multi = !!kk.multi, lk.order = isNaN(kk.order) ? 99 : kk.order, lk.stateConstructor = kk.stateConstructor || null, lk.state = kk.state || {}, lk.mJ = kk.mJ || null, lk.iG = kk.iG || null, lk.system = kk.system || null, lk.Ix = kk.Ix || null, Fk[Ik] = lk, Tk[Ik] = new Xk, Tk[Ik]._pendingMultiCleanup = !1, Tk[Ik]._multiCleanupIDs = lk.multi ? [] : null, lk.system && (ik.push(Ik), ik.sort(((kk, Ik) => Fk[kk].order - Fk[Ik].order))), lk.Ix && (yk.push(Ik), yk.sort(((kk, Ik) => Fk[kk].order - Fk[Ik].order))), Ik
      }, this.overwriteComponent = function(kk, Ik) {
        var Xk = Fk[kk];
        if (!Xk) throw new Error(`Unknown component: ${kk}`);
        if (!Ik) throw new Error("Missing component definition");
        if (Xk.name !== Ik.name) throw new Error("Overwriting component must use the same name property.");
        var lk = {};
        lk.name = kk, lk.multi = !!Ik.multi, lk.order = isNaN(Ik.order) ? 99 : Ik.order, lk.state = Ik.state || {}, lk.mJ = Ik.mJ || null, lk.iG = Ik.iG || null, lk.system = Ik.system || null, lk.Ix = Ik.Ix || null, Fk[kk] = lk, Tk[kk]._pendingMultiCleanup = !1, Tk[kk]._multiCleanupIDs = lk.multi ? [] : null;
        var ak = ik.indexOf(kk);
        lk.system && ak < 0 && ik.push(kk), !lk.system && ak >= 0 && ik.splice(ak, 1), ik.sort(((kk, Ik) => Fk[kk].order - Fk[Ik].order));
        var qk = yk.indexOf(kk);
        lk.Ix && qk < 0 && yk.push(kk), !lk.Ix && qk >= 0 && yk.splice(qk, 1), yk.sort(((kk, Ik) => Fk[kk].order - Fk[Ik].order));
        var Lk = lk.state;
        return this.ku(kk).forEach((kk => {
          for (var Fk in Lk) Fk in kk || (kk[Fk] = Lk[Fk]);
          lk.mJ && lk.mJ(kk.Xu, kk)
        })), kk
      }, this.deleteComponent = function(Ik) {
        var Xk = Tk[Ik];
        if (!Xk) throw new Error(`Unknown component: ${Ik}`);
        Xk.flush(), Xk.list.forEach((kk => {
          kk && ak(kk.Xu || kk[0].Xu, Ik)
        }));
        var lk = ik.indexOf(Ik),
          qk = yk.indexOf(Ik);
        return lk > -1 && ik.splice(lk, 1), qk > -1 && yk.splice(qk, 1), Tk[Ik].dispose(), delete Tk[Ik], delete Fk[Ik], kk
      }, this.Tu = function(kk, Ik, Xk) {
        var ik, yk = Fk[Ik],
          lk = Tk[Ik];
        if (!lk) throw new Error(`Unknown component: ${Ik}.`);
        if (lk.hash[kk] && !yk.multi) throw new Error(`Entity ${kk} already has component: ${Ik}.`);
        if (yk.stateConstructor) {
          if (!(ik = new yk.stateConstructor).hasOwnProperty("Xu")) throw new Error(`Component ${yk.name} stateConstructor type does not have property __id`);
          Object.assign(ik, yk.state, Xk)
        } else ik = {
          Xu: kk,
          ...yk.state,
          ...Xk
        };
        if (ik.Xu = kk, yk.multi) {
          var ak = lk.hash[kk];
          ak || (ak = [], lk.add(kk, ak)), ak.push(ik)
        } else lk.add(kk, ik);
        return yk.mJ && yk.mJ(kk, ik), this
      }, this.Ukk = function(kk, Fk) {
        var Ik = Tk[Fk];
        if (!Ik) throw new Error(`Unknown component: ${Fk}.`);
        return !!Ik.hash[kk]
      }, this.Eu = function(Fk, Ik) {
        if (!Tk[Ik]) throw new Error(`Unknown component: ${Ik}.`);
        return ak(Fk, Ik), kk
      }, this.getState = function(kk, Fk) {
        var Ik = Tk[Fk];
        if (!Ik) throw new Error(`Unknown component: ${Fk}.`);
        return Ik.hash[kk]
      }, this.ku = function(kk) {
        var Fk = Tk[kk];
        if (!Fk) throw new Error(`Unknown component: ${kk}.`);
        return tk(), Fk.list
      }, this.PFk = function(kk) {
        if (!Tk[kk]) throw new Error(`Unknown component: ${kk}.`);
        var Fk = Tk[kk].hash;
        return kk => Fk[kk]
      }, this.SFk = function(kk) {
        if (!Tk[kk]) throw new Error(`Unknown component: ${kk}.`);
        var Fk = Tk[kk].hash;
        return kk => !!Fk[kk]
      }, this.Dt = function(Ik) {
        tk();
        for (var Xk = 0; Xk < ik.length; Xk++) {
          var yk = ik[Xk],
            lk = Fk[yk],
            ak = Tk[yk];
          lk.system(Ik, ak.list), tk()
        }
        return kk
      }, this.render = function(Ik) {
        tk();
        for (var Xk = 0; Xk < yk.length; Xk++) {
          var ik = yk[Xk],
            lk = Fk[ik],
            ak = Tk[ik];
          lk.Ix(Ik, ak.list), tk()
        }
        return kk
      }, this.removeMultiComponent = function(Ik, Xk, ik) {
        var yk = Fk[Xk],
          ak = Tk[Xk];
        if (!ak) throw new Error(`Unknown component: ${Xk}.`);
        if (!yk.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(kk, Fk, Ik, Xk) {
          var Tk = Ik.hash[kk];
          if (Tk) {
            var ik = Tk[Xk];
            ik && (Tk[Xk] = null, Fk.iG && Fk.iG(kk, ik), lk.multiComps.push({
              entID: kk,
              data: Ik
            }), qk())
          }
        }(Ik, yk, ak, ik), kk
      }
    };
    var Xk = Ik(38237)
  },
  38237: kk => {
    function Fk(kk, Fk) {
      var Ik = kk._map[Fk];
      if (delete kk.hash[Fk], delete kk._map[Fk], Ik === kk.list.length - 1) kk.list.pop(), kk._idList.pop();
      else {
        var Xk = kk.list.pop();
        kk.list[Ik] = Xk;
        var Tk = kk._idList.pop();
        kk._idList[Ik] = Tk, kk._map[Tk] = Ik
      }
    }
    kk.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(kk, Fk) {
        if ("number" === typeof this._map[kk]) {
          var Ik = this._map[kk];
          this.hash[kk] = Fk, this.list[Ik] = Fk, this._idList[Ik] = kk
        } else this._map[kk] = this.list.length, this.hash[kk] = Fk, this.list.push(Fk), this._idList.push(kk)
      }
      remove(kk) {
        var Fk = this._map[kk];
        this.hash[kk] = null, this.list[Fk] = null, this._pendingRemovals.push(kk)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var kk = 0; kk < this._pendingRemovals.length; kk++) {
          var Ik = this._pendingRemovals[kk];
          null === this.hash[Ik] && Fk(this, Ik)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  38063: (kk, Fk, Ik) => {
    kk = Ik.nmd(kk);
    var Xk = "__lodash_hash_undefined__",
      Tk = 9007199254740991,
      ik = "[object Arguments]",
      yk = "[object Boolean]",
      lk = "[object Date]",
      ak = "[object Function]",
      qk = "[object GeneratorFunction]",
      Lk = "[object Map]",
      tk = "[object Number]",
      Zk = "[object Object]",
      jk = "[object Promise]",
      ek = "[object RegExp]",
      wk = "[object Set]",
      Hk = "[object String]",
      Jk = "[object Symbol]",
      xk = "[object WeakMap]",
      Pk = "[object ArrayBuffer]",
      Kk = "[object DataView]",
      Qk = "[object Float32Array]",
      sk = "[object Float64Array]",
      Vk = "[object Int8Array]",
      zk = "[object Int16Array]",
      Sk = "[object Int32Array]",
      vk = "[object Uint8Array]",
      Ek = "[object Uint8ClampedArray]",
      Ok = "[object Uint16Array]",
      nk = "[object Uint32Array]",
      Gk = /\w*$/,
      pk = /^\[object .+?Constructor\]$/,
      uk = /^(?:0|[1-9]\d*)$/,
      bk = {};
    bk[ik] = bk["[object Array]"] = bk[Pk] = bk[Kk] = bk[yk] = bk[lk] = bk[Qk] = bk[sk] = bk[Vk] = bk[zk] = bk[Sk] = bk[Lk] = bk[tk] = bk[Zk] = bk[ek] = bk[wk] = bk[Hk] = bk[Jk] = bk[vk] = bk[Ek] = bk[Ok] = bk[nk] = !0, bk["[object Error]"] = bk[ak] = bk[xk] = !1;
    var Rk = "object" == typeof Ik.g && Ik.g && Ik.g.Object === Object && Ik.g,
      Uk = "object" == typeof self && self && self.Object === Object && self,
      Ck = Rk || Uk || Function("return this")(),
      Nk = Fk && !Fk.nodeType && Fk,
      ck = Nk && kk && !kk.nodeType && kk,
      Wk = ck && ck.exports === Nk;

    function fk(kk, Fk) {
      return kk.set(Fk[0], Fk[1]), kk
    }

    function Bk(kk, Fk) {
      return kk.add(Fk), kk
    }

    function dk(kk, Fk, Ik, Xk) {
      var Tk = -1,
        ik = kk ? kk.length : 0;
      for (Xk && ik && (Ik = kk[++Tk]); ++Tk < ik;) Ik = Fk(Ik, kk[Tk], Tk, kk);
      return Ik
    }

    function Yk(kk) {
      var Fk = !1;
      if (null != kk && "function" != typeof kk.toString) try {
        Fk = !!(kk + "")
      } catch (Ik) {}
      return Fk
    }

    function Ak(kk) {
      var Fk = -1,
        Ik = Array(kk.size);
      return kk.forEach((function(kk, Xk) {
        Ik[++Fk] = [Xk, kk]
      })), Ik
    }

    function gk(kk, Fk) {
      return function(Ik) {
        return kk(Fk(Ik))
      }
    }

    function mk(kk) {
      var Fk = -1,
        Ik = Array(kk.size);
      return kk.forEach((function(kk) {
        Ik[++Fk] = kk
      })), Ik
    }
    var hk = Array.prototype,
      rk = Function.prototype,
      Dk = Object.prototype,
      Mk = Ck["__core-js_shared__"],
      kF = function() {
        var kk = /[^.]+$/.exec(Mk && Mk.keys && Mk.keys.IE_PROTO || "");
        return kk ? "Symbol(src)_1." + kk : ""
      }(),
      FF = rk.toString,
      IF = Dk.hasOwnProperty,
      XF = Dk.toString,
      TF = RegExp("^" + FF.call(IF).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      iF = Wk ? Ck.je : void 0,
      yF = Ck.Symbol,
      lF = Ck.Uint8Array,
      aF = gk(Object.getPrototypeOf, Object),
      qF = Object.create,
      LF = Dk.propertyIsEnumerable,
      tF = hk.splice,
      ZF = Object.getOwnPropertySymbols,
      jF = iF ? iF.isBuffer : void 0,
      eF = gk(Object.keys, Object),
      wF = WF(Ck, "DataView"),
      HF = WF(Ck, "Map"),
      JF = WF(Ck, "Promise"),
      xF = WF(Ck, "Set"),
      PF = WF(Ck, "WeakMap"),
      KF = WF(Object, "create"),
      QF = AF(wF),
      sF = AF(HF),
      VF = AF(JF),
      zF = AF(xF),
      SF = AF(PF),
      oF = yF ? yF.prototype : void 0,
      vF = oF ? oF.valueOf : void 0;

    function EF(kk) {
      var Fk = -1,
        Ik = kk ? kk.length : 0;
      for (this.clear(); ++Fk < Ik;) {
        var Xk = kk[Fk];
        this.set(Xk[0], Xk[1])
      }
    }

    function OF(kk) {
      var Fk = -1,
        Ik = kk ? kk.length : 0;
      for (this.clear(); ++Fk < Ik;) {
        var Xk = kk[Fk];
        this.set(Xk[0], Xk[1])
      }
    }

    function nF(kk) {
      var Fk = -1,
        Ik = kk ? kk.length : 0;
      for (this.clear(); ++Fk < Ik;) {
        var Xk = kk[Fk];
        this.set(Xk[0], Xk[1])
      }
    }

    function GF(kk) {
      this.__data__ = new OF(kk)
    }

    function pF(kk, Fk) {
      var Ik = mF(kk) || function(kk) {
          return function(kk) {
            return function(kk) {
              return !!kk && "object" == typeof kk
            }(kk) && hF(kk)
          }(kk) && IF.call(kk, "callee") && (!LF.call(kk, "callee") || XF.call(kk) == ik)
        }(kk) ? function(kk, Fk) {
          for (var Ik = -1, Xk = Array(kk); ++Ik < kk;) Xk[Ik] = Fk(Ik);
          return Xk
        }(kk.length, String) : [],
        Xk = Ik.length,
        Tk = !!Xk;
      for (var yk in kk) !Fk && !IF.call(kk, yk) || Tk && ("length" == yk || dF(yk, Xk)) || Ik.push(yk);
      return Ik
    }

    function uF(kk, Fk, Ik) {
      var Xk = kk[Fk];
      IF.call(kk, Fk) && gF(Xk, Ik) && (void 0 !== Ik || Fk in kk) || (kk[Fk] = Ik)
    }

    function bF(kk, Fk) {
      for (var Ik = kk.length; Ik--;)
        if (gF(kk[Ik][0], Fk)) return Ik;
      return -1
    }

    function RF(kk, Fk, Ik, Xk, Tk, jk, xk) {
      var pk;
      if (Xk && (pk = jk ? Xk(kk, Tk, jk, xk) : Xk(kk)), void 0 !== pk) return pk;
      if (!MF(kk)) return kk;
      var uk = mF(kk);
      if (uk) {
        if (pk = function(kk) {
            var Fk = kk.length,
              Ik = kk.constructor(Fk);
            Fk && "string" == typeof kk[0] && IF.call(kk, "index") && (Ik.index = kk.index, Ik.input = kk.input);
            return Ik
          }(kk), !Fk) return function(kk, Fk) {
          var Ik = -1,
            Xk = kk.length;
          Fk || (Fk = Array(Xk));
          for (; ++Ik < Xk;) Fk[Ik] = kk[Ik];
          return Fk
        }(kk, pk)
      } else {
        var Rk = BF(kk),
          Uk = Rk == ak || Rk == qk;
        if (rF(kk)) return function(kk, Fk) {
          if (Fk) return kk.slice();
          var Ik = new kk.constructor(kk.length);
          return kk.copy(Ik), Ik
        }(kk, Fk);
        if (Rk == Zk || Rk == ik || Uk && !jk) {
          if (Yk(kk)) return jk ? kk : {};
          if (pk = function(kk) {
              return "function" != typeof kk.constructor || YF(kk) ? {} : (Fk = aF(kk), MF(Fk) ? qF(Fk) : {});
              var Fk
            }(Uk ? {} : kk), !Fk) return function(kk, Fk) {
            return NF(kk, fF(kk), Fk)
          }(kk, function(kk, Fk) {
            return kk && NF(Fk, kI(Fk), kk)
          }(pk, kk))
        } else {
          if (!bk[Rk]) return jk ? kk : {};
          pk = function(kk, Fk, Ik, Xk) {
            var Tk = kk.constructor;
            switch (Fk) {
              case Pk:
                return CF(kk);
              case yk:
              case lk:
                return new Tk(+kk);
              case Kk:
                return function(kk, Fk) {
                  var Ik = Fk ? CF(kk.buffer) : kk.buffer;
                  return new kk.constructor(Ik, kk.byteOffset, kk.byteLength)
                }(kk, Xk);
              case Qk:
              case sk:
              case Vk:
              case zk:
              case Sk:
              case vk:
              case Ek:
              case Ok:
              case nk:
                return function(kk, Fk) {
                  var Ik = Fk ? CF(kk.buffer) : kk.buffer;
                  return new kk.constructor(Ik, kk.byteOffset, kk.length)
                }(kk, Xk);
              case Lk:
                return function(kk, Fk, Ik) {
                  var Xk = Fk ? Ik(Ak(kk), !0) : Ak(kk);
                  return dk(Xk, fk, new kk.constructor)
                }(kk, Xk, Ik);
              case tk:
              case Hk:
                return new Tk(kk);
              case ek:
                return function(kk) {
                  var Fk = new kk.constructor(kk.source, Gk.exec(kk));
                  return Fk.lastIndex = kk.lastIndex, Fk
                }(kk);
              case wk:
                return function(kk, Fk, Ik) {
                  var Xk = Fk ? Ik(mk(kk), !0) : mk(kk);
                  return dk(Xk, Bk, new kk.constructor)
                }(kk, Xk, Ik);
              case Jk:
                return ik = kk, vF ? Object(vF.call(ik)) : {}
            }
            var ik
          }(kk, Rk, RF, Fk)
        }
      }
      xk || (xk = new GF);
      var Ck = xk.get(kk);
      if (Ck) return Ck;
      if (xk.set(kk, pk), !uk) var Nk = Ik ? function(kk) {
        return function(kk, Fk, Ik) {
          var Xk = Fk(kk);
          return mF(kk) ? Xk : function(kk, Fk) {
            for (var Ik = -1, Xk = Fk.length, Tk = kk.length; ++Ik < Xk;) kk[Tk + Ik] = Fk[Ik];
            return kk
          }(Xk, Ik(kk))
        }(kk, kI, fF)
      }(kk) : kI(kk);
      return function(kk, Fk) {
        for (var Ik = -1, Xk = kk ? kk.length : 0; ++Ik < Xk && !1 !== Fk(kk[Ik], Ik, kk););
      }(Nk || kk, (function(Tk, ik) {
        Nk && (Tk = kk[ik = Tk]), uF(pk, ik, RF(Tk, Fk, Ik, Xk, ik, kk, xk))
      })), pk
    }

    function UF(kk) {
      return !(!MF(kk) || (Fk = kk, kF && kF in Fk)) && (DF(kk) || Yk(kk) ? TF : pk).test(AF(kk));
      var Fk
    }

    function CF(kk) {
      var Fk = new kk.constructor(kk.byteLength);
      return new lF(Fk).set(new lF(kk)), Fk
    }

    function NF(kk, Fk, Ik, Xk) {
      Ik || (Ik = {});
      for (var Tk = -1, ik = Fk.length; ++Tk < ik;) {
        var yk = Fk[Tk],
          lk = Xk ? Xk(Ik[yk], kk[yk], yk, Ik, kk) : void 0;
        uF(Ik, yk, void 0 === lk ? kk[yk] : lk)
      }
      return Ik
    }

    function cF(kk, Fk) {
      var Ik = kk.__data__;
      return function(kk) {
        var Fk = typeof kk;
        return "string" == Fk || "number" == Fk || "symbol" == Fk || "boolean" == Fk ? "__proto__" !== kk : null === kk
      }(Fk) ? Ik["string" == typeof Fk ? "string" : "hash"] : Ik.map
    }

    function WF(kk, Fk) {
      var Ik = function(kk, Fk) {
        return null == kk ? void 0 : kk[Fk]
      }(kk, Fk);
      return UF(Ik) ? Ik : void 0
    }
    EF.prototype.clear = function() {
      this.__data__ = KF ? KF(null) : {}
    }, EF.prototype.delete = function(kk) {
      return this.has(kk) && delete this.__data__[kk]
    }, EF.prototype.get = function(kk) {
      var Fk = this.__data__;
      if (KF) {
        var Ik = Fk[kk];
        return Ik === Xk ? void 0 : Ik
      }
      return IF.call(Fk, kk) ? Fk[kk] : void 0
    }, EF.prototype.has = function(kk) {
      var Fk = this.__data__;
      return KF ? void 0 !== Fk[kk] : IF.call(Fk, kk)
    }, EF.prototype.set = function(kk, Fk) {
      return this.__data__[kk] = KF && void 0 === Fk ? Xk : Fk, this
    }, OF.prototype.clear = function() {
      this.__data__ = []
    }, OF.prototype.delete = function(kk) {
      var Fk = this.__data__,
        Ik = bF(Fk, kk);
      return !(Ik < 0) && (Ik == Fk.length - 1 ? Fk.pop() : tF.call(Fk, Ik, 1), !0)
    }, OF.prototype.get = function(kk) {
      var Fk = this.__data__,
        Ik = bF(Fk, kk);
      return Ik < 0 ? void 0 : Fk[Ik][1]
    }, OF.prototype.has = function(kk) {
      return bF(this.__data__, kk) > -1
    }, OF.prototype.set = function(kk, Fk) {
      var Ik = this.__data__,
        Xk = bF(Ik, kk);
      return Xk < 0 ? Ik.push([kk, Fk]) : Ik[Xk][1] = Fk, this
    }, nF.prototype.clear = function() {
      this.__data__ = {
        hash: new EF,
        map: new(HF || OF),
        string: new EF
      }
    }, nF.prototype.delete = function(kk) {
      return cF(this, kk).delete(kk)
    }, nF.prototype.get = function(kk) {
      return cF(this, kk).get(kk)
    }, nF.prototype.has = function(kk) {
      return cF(this, kk).has(kk)
    }, nF.prototype.set = function(kk, Fk) {
      return cF(this, kk).set(kk, Fk), this
    }, GF.prototype.clear = function() {
      this.__data__ = new OF
    }, GF.prototype.delete = function(kk) {
      return this.__data__.delete(kk)
    }, GF.prototype.get = function(kk) {
      return this.__data__.get(kk)
    }, GF.prototype.has = function(kk) {
      return this.__data__.has(kk)
    }, GF.prototype.set = function(kk, Fk) {
      var Ik = this.__data__;
      if (Ik instanceof OF) {
        var Xk = Ik.__data__;
        if (!HF || Xk.length < 199) return Xk.push([kk, Fk]), this;
        Ik = this.__data__ = new nF(Xk)
      }
      return Ik.set(kk, Fk), this
    };
    var fF = ZF ? gk(ZF, Object) : function() {
        return []
      },
      BF = function(kk) {
        return XF.call(kk)
      };

    function dF(kk, Fk) {
      return !!(Fk = null == Fk ? Tk : Fk) && ("number" == typeof kk || uk.test(kk)) && kk > -1 && kk % 1 == 0 && kk < Fk
    }

    function YF(kk) {
      var Fk = kk && kk.constructor;
      return kk === ("function" == typeof Fk && Fk.prototype || Dk)
    }

    function AF(kk) {
      if (null != kk) {
        try {
          return FF.call(kk)
        } catch (Fk) {}
        try {
          return kk + ""
        } catch (Fk) {}
      }
      return ""
    }

    function gF(kk, Fk) {
      return kk === Fk || kk !== kk && Fk !== Fk
    }(wF && BF(new wF(new ArrayBuffer(1))) != Kk || HF && BF(new HF) != Lk || JF && BF(JF.resolve()) != jk || xF && BF(new xF) != wk || PF && BF(new PF) != xk) && (BF = function(kk) {
      var Fk = XF.call(kk),
        Ik = Fk == Zk ? kk.constructor : void 0,
        Xk = Ik ? AF(Ik) : void 0;
      if (Xk) switch (Xk) {
        case QF:
          return Kk;
        case sF:
          return Lk;
        case VF:
          return jk;
        case zF:
          return wk;
        case SF:
          return xk
      }
      return Fk
    });
    var mF = Array.isArray;

    function hF(kk) {
      return null != kk && function(kk) {
        return "number" == typeof kk && kk > -1 && kk % 1 == 0 && kk <= Tk
      }(kk.length) && !DF(kk)
    }
    var rF = jF || function() {
      return !1
    };

    function DF(kk) {
      var Fk = MF(kk) ? XF.call(kk) : "";
      return Fk == ak || Fk == qk
    }

    function MF(kk) {
      var Fk = typeof kk;
      return !!kk && ("object" == Fk || "function" == Fk)
    }

    function kI(kk) {
      return hF(kk) ? pF(kk) : function(kk) {
        if (!YF(kk)) return eF(kk);
        var Fk = [];
        for (var Ik in Object(kk)) IF.call(kk, Ik) && "constructor" != Ik && Fk.push(Ik);
        return Fk
      }(kk)
    }
    kk.exports = function(kk) {
      return RF(kk, !0, !0)
    }
  },
  38431: kk => {
    function Fk(kk, Fk, Ik) {
      for (var Xk = kk.length, Tk = -1 / 0, ik = 1 / 0, yk = 0; yk < Xk; yk++) {
        var lk = (Ik[0][yk] - kk[yk]) / Fk[yk],
          ak = (Ik[1][yk] - kk[yk]) / Fk[yk];
        if (lk > ak) {
          var qk = lk;
          lk = ak, ak = qk
        }
        if (ak < Tk || lk > ik) return 1 / 0;
        lk > Tk && (Tk = lk), ak < ik && (ik = ak)
      }
      return Tk > ik ? 1 / 0 : Tk
    }
    kk.exports = function(kk, Ik, Xk, Tk) {
      var ik = Fk(Ik, Xk, Tk);
      if (ik === 1 / 0) kk = null;
      else {
        kk = kk || [];
        for (var yk = 0; yk < Ik.length; yk++) kk[yk] = Ik[yk] + Xk[yk] * ik
      }
      return kk
    }, kk.exports.distance = Fk
  },
  37749: (kk, Fk, Ik) => {
    var Xk = Ik(37758);

    function Tk(kk) {
      for (var Fk, Ik, Tk = 0, ik = kk.length, yk = 0; yk < kk.length;) {
        for (Fk = kk[yk], Ik = 0; yk < ik && kk[yk] === Fk;) ++yk, ++Ik;
        Tk += Xk.log2(Ik) / 7 | 0, Tk += Xk.log2(Fk >>> 0) / 7 | 0, Tk += 2
      }
      return Tk
    }
    Fk.size = Tk, Fk.encode = function(kk, Fk) {
      Fk || (Fk = new Uint8Array(Tk(kk)));
      for (var Ik, Xk, ik = 0, yk = Fk.length, lk = 0; lk < kk.length;) {
        for (Ik = kk[lk], Xk = 0; lk < kk.length && kk[lk] === Ik;) ++lk, ++Xk;
        for (; ik < yk && Xk >= 128;) Fk[ik++] = 128 + (127 & Xk), Xk >>>= 7;
        if (ik >= yk) throw new Error("RLE buffer overflow");
        for (Fk[ik++] = Xk, Ik >>>= 0; ik < yk && Ik >= 128;) Fk[ik++] = 128 + (127 & Ik), Ik >>>= 7;
        if (ik >= yk) throw new Error("RLE buffer overflow");
        Fk[ik++] = Ik
      }
      return Fk
    }, Fk.decode = function(kk, Fk) {
      for (var Ik, Xk, Tk, ik, yk = Fk.length, lk = kk.length, ak = 0, qk = 0; qk < lk;) {
        for (Ik = 0, Xk = 0; qk < lk && kk[qk] >= 128;) Ik += (127 & kk[qk++]) << Xk, Xk += 7;
        if (Ik += kk[qk++] << Xk, qk >= lk) throw new Error("RLE buffer underrun");
        if (ak + Ik > yk) throw new Error("Chunk buffer overflow");
        for (Tk = 0, Xk = 0; qk < lk && kk[qk] >= 128;) Tk += (127 & kk[qk++]) << Xk, Xk += 7;
        if (qk >= lk) throw new Error("RLE buffer underrun");
        for (Tk += kk[qk++] << Xk, ik = 0; ik < Ik; ++ik) Fk[ak++] = Tk
      }
      return Fk
    }
  },
  37758: (kk, Fk) => {
    function Ik(kk) {
      var Fk = 32;
      return (kk &= -kk) && Fk--, 65535 & kk && (Fk -= 16), 16711935 & kk && (Fk -= 8), 252645135 & kk && (Fk -= 4), 858993459 & kk && (Fk -= 2), 1431655765 & kk && (Fk -= 1), Fk
    }
    Fk.INT_BITS = 32, Fk.INT_MAX = 2147483647, Fk.INT_MIN = -1 << 31, Fk.sign = function(kk) {
      return (kk > 0) - (kk < 0)
    }, Fk.abs = function(kk) {
      var Fk = kk >> 31;
      return (kk ^ Fk) - Fk
    }, Fk.min = function(kk, Fk) {
      return Fk ^ (kk ^ Fk) & -(kk < Fk)
    }, Fk.max = function(kk, Fk) {
      return kk ^ (kk ^ Fk) & -(kk < Fk)
    }, Fk.isPow2 = function(kk) {
      return !(kk & kk - 1) && !!kk
    }, Fk.log2 = function(kk) {
      var Fk, Ik;
      return Fk = (kk > 65535) << 4, Fk |= Ik = ((kk >>>= Fk) > 255) << 3, Fk |= Ik = ((kk >>>= Ik) > 15) << 2, (Fk |= Ik = ((kk >>>= Ik) > 3) << 1) | (kk >>>= Ik) >> 1
    }, Fk.log10 = function(kk) {
      return kk >= 1e9 ? 9 : kk >= 1e8 ? 8 : kk >= 1e7 ? 7 : kk >= 1e6 ? 6 : kk >= 1e5 ? 5 : kk >= 1e4 ? 4 : kk >= 1e3 ? 3 : kk >= 100 ? 2 : kk >= 10 ? 1 : 0
    }, Fk.popCount = function(kk) {
      return 16843009 * ((kk = (858993459 & (kk -= kk >>> 1 & 1431655765)) + (kk >>> 2 & 858993459)) + (kk >>> 4) & 252645135) >>> 24
    }, Fk.countTrailingZeros = Ik, Fk.nextPow2 = function(kk) {
      return kk += 0 === kk, --kk, kk |= kk >>> 1, kk |= kk >>> 2, kk |= kk >>> 4, kk |= kk >>> 8, (kk |= kk >>> 16) + 1
    }, Fk.prevPow2 = function(kk) {
      return kk |= kk >>> 1, kk |= kk >>> 2, kk |= kk >>> 4, kk |= kk >>> 8, (kk |= kk >>> 16) - (kk >>> 1)
    }, Fk.parity = function(kk) {
      return kk ^= kk >>> 16, kk ^= kk >>> 8, kk ^= kk >>> 4, 27030 >>> (kk &= 15) & 1
    };
    var Xk = new Array(256);
    ! function(kk) {
      for (var Fk = 0; Fk < 256; ++Fk) {
        var Ik = Fk,
          Xk = Fk,
          Tk = 7;
        for (Ik >>>= 1; Ik; Ik >>>= 1) Xk <<= 1, Xk |= 1 & Ik, --Tk;
        kk[Fk] = Xk << Tk & 255
      }
    }(Xk), Fk.reverse = function(kk) {
      return Xk[255 & kk] << 24 | Xk[kk >>> 8 & 255] << 16 | Xk[kk >>> 16 & 255] << 8 | Xk[kk >>> 24 & 255]
    }, Fk.interleave2 = function(kk, Fk) {
      return (kk = 1431655765 & ((kk = 858993459 & ((kk = 252645135 & ((kk = 16711935 & ((kk &= 65535) | kk << 8)) | kk << 4)) | kk << 2)) | kk << 1)) | (Fk = 1431655765 & ((Fk = 858993459 & ((Fk = 252645135 & ((Fk = 16711935 & ((Fk &= 65535) | Fk << 8)) | Fk << 4)) | Fk << 2)) | Fk << 1)) << 1
    }, Fk.deinterleave2 = function(kk, Fk) {
      return (kk = 65535 & ((kk = 16711935 & ((kk = 252645135 & ((kk = 858993459 & ((kk = kk >>> Fk & 1431655765) | kk >>> 1)) | kk >>> 2)) | kk >>> 4)) | kk >>> 16)) << 16 >> 16
    }, Fk.interleave3 = function(kk, Fk, Ik) {
      return kk = 1227133513 & ((kk = 3272356035 & ((kk = 251719695 & ((kk = 4278190335 & ((kk &= 1023) | kk << 16)) | kk << 8)) | kk << 4)) | kk << 2), (kk |= (Fk = 1227133513 & ((Fk = 3272356035 & ((Fk = 251719695 & ((Fk = 4278190335 & ((Fk &= 1023) | Fk << 16)) | Fk << 8)) | Fk << 4)) | Fk << 2)) << 1) | (Ik = 1227133513 & ((Ik = 3272356035 & ((Ik = 251719695 & ((Ik = 4278190335 & ((Ik &= 1023) | Ik << 16)) | Ik << 8)) | Ik << 4)) | Ik << 2)) << 2
    }, Fk.deinterleave3 = function(kk, Fk) {
      return (kk = 1023 & ((kk = 4278190335 & ((kk = 251719695 & ((kk = 3272356035 & ((kk = kk >>> Fk & 1227133513) | kk >>> 2)) | kk >>> 4)) | kk >>> 8)) | kk >>> 16)) << 22 >> 22
    }, Fk.nextCombination = function(kk) {
      var Fk = kk | kk - 1;
      return Fk + 1 | (~Fk & -~Fk) - 1 >>> Ik(kk) + 1
    }
  },
  37327: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      Color3: () => Xk.e,
      b: () => Xk.h
    });
    var Xk = Ik(37331);
    (0, Xk.i)()
  },
  37780: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Tk
    });
    var Xk = Ik(37785);
    class Tk {
      static GetPlanes(kk) {
        const Fk = [];
        for (let Ik = 0; Ik < 6; Ik++) Fk.push(new Xk.e(0, 0, 0, 0));
        return Tk.GetPlanesToRef(kk, Fk), Fk
      }
      static GetNearPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] + Ik[2], Fk.normal.y = Ik[7] + Ik[6], Fk.normal.z = Ik[11] + Ik[10], Fk.d = Ik[15] + Ik[14], Fk.normalize()
      }
      static GetFarPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] - Ik[2], Fk.normal.y = Ik[7] - Ik[6], Fk.normal.z = Ik[11] - Ik[10], Fk.d = Ik[15] - Ik[14], Fk.normalize()
      }
      static GetLeftPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] + Ik[0], Fk.normal.y = Ik[7] + Ik[4], Fk.normal.z = Ik[11] + Ik[8], Fk.d = Ik[15] + Ik[12], Fk.normalize()
      }
      static GetRightPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] - Ik[0], Fk.normal.y = Ik[7] - Ik[4], Fk.normal.z = Ik[11] - Ik[8], Fk.d = Ik[15] - Ik[12], Fk.normalize()
      }
      static GetTopPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] - Ik[1], Fk.normal.y = Ik[7] - Ik[5], Fk.normal.z = Ik[11] - Ik[9], Fk.d = Ik[15] - Ik[13], Fk.normalize()
      }
      static GetBottomPlaneToRef(kk, Fk) {
        const Ik = kk.m;
        Fk.normal.x = Ik[3] + Ik[1], Fk.normal.y = Ik[7] + Ik[5], Fk.normal.z = Ik[11] + Ik[9], Fk.d = Ik[15] + Ik[13], Fk.normalize()
      }
      static GetPlanesToRef(kk, Fk) {
        Tk.GetNearPlaneToRef(kk, Fk[0]), Tk.GetFarPlaneToRef(kk, Fk[1]), Tk.GetLeftPlaneToRef(kk, Fk[2]), Tk.GetRightPlaneToRef(kk, Fk[3]), Tk.GetTopPlaneToRef(kk, Fk[4]), Tk.GetBottomPlaneToRef(kk, Fk[5])
      }
      static IsPointInFrustum(kk, Fk) {
        for (let Ik = 0; Ik < 6; Ik++)
          if (Fk[Ik].dotCoordinate(kk) < 0) return !1;
        return !0
      }
    }
  },
  37785: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      e: () => Tk
    });
    var Xk = Ik(37153);
    class Tk {
      constructor(kk, Fk, Ik, Tk) {
        this.normal = new Xk.t(kk, Fk, Ik), this.d = Tk
      }
      iXk() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Tk(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let Fk = 0;
        return 0 !== kk && (Fk = 1 / kk), this.normal.x *= Fk, this.normal.y *= Fk, this.normal.z *= Fk, this.d *= Fk, this
      }
      transform(kk) {
        const Fk = Tk._TmpMatrix;
        kk.invertToRef(Fk);
        const Ik = Fk.m,
          Xk = this.normal.x,
          ik = this.normal.y,
          yk = this.normal.z,
          lk = this.d,
          ak = Xk * Ik[0] + ik * Ik[1] + yk * Ik[2] + lk * Ik[3],
          qk = Xk * Ik[4] + ik * Ik[5] + yk * Ik[6] + lk * Ik[7],
          Lk = Xk * Ik[8] + ik * Ik[9] + yk * Ik[10] + lk * Ik[11],
          tk = Xk * Ik[12] + ik * Ik[13] + yk * Ik[14] + lk * Ik[15];
        return new Tk(ak, qk, Lk, tk)
      }
      dotCoordinate(kk) {
        return this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z + this.d
      }
      copyFromPoints(kk, Fk, Ik) {
        const Xk = Fk.x - kk.x,
          Tk = Fk.y - kk.y,
          ik = Fk.z - kk.z,
          yk = Ik.x - kk.x,
          lk = Ik.y - kk.y,
          ak = Ik.z - kk.z,
          qk = Tk * ak - ik * lk,
          Lk = ik * yk - Xk * ak,
          tk = Xk * lk - Tk * yk,
          Zk = Math.sqrt(qk * qk + Lk * Lk + tk * tk);
        let jk;
        return jk = 0 !== Zk ? 1 / Zk : 0, this.normal.x = qk * jk, this.normal.y = Lk * jk, this.normal.z = tk * jk, this.d = -(this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z), this
      }
      isFrontFacingTo(kk, Fk) {
        return Xk.t.Dot(this.normal, kk) <= Fk
      }
      signedDistanceTo(kk) {
        return Xk.t.Dot(kk, this.normal) + this.d
      }
      static FromArray(kk) {
        return new Tk(kk[0], kk[1], kk[2], kk[3])
      }
      static FromPoints(kk, Fk, Ik) {
        const Xk = new Tk(0, 0, 0, 0);
        return Xk.copyFromPoints(kk, Fk, Ik), Xk
      }
      static FromPositionAndNormal(kk, Fk) {
        const Ik = new Tk(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(kk, Fk, Ik)
      }
      static FromPositionAndNormalToRef(kk, Fk, Ik) {
        return Ik.normal.kS(Fk), Ik.normal.normalize(), Ik.d = -kk.dot(Ik.normal), Ik
      }
      static SignedDistanceToPlaneFromPositionAndNormal(kk, Fk, Ik) {
        const Tk = -(Fk.x * kk.x + Fk.y * kk.y + Fk.z * kk.z);
        return Xk.t.Dot(Ik, Fk) + Tk
      }
    }
    Tk._TmpMatrix = Xk.c.Identity()
  },
  37144: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      Matrix: () => Xk.c,
      Quaternion: () => Xk.f,
      RegisterMathVector: () => Xk.h,
      TmpVectors: () => Xk.l,
      Vector2: () => Xk.p,
      Ge: () => Xk.t,
      Vector4: () => Xk.u
    });
    var Xk = Ik(37153);
    (0, Xk.h)()
  },
  38099: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk
    });
    class Xk {
      constructor(kk, Fk, Ik, Xk) {
        this.x = kk, this.y = Fk, this.width = Ik, this.height = Xk
      }
      toGlobal(kk, Fk) {
        return new Xk(this.x * kk, this.y * Fk, this.width * kk, this.height * Fk)
      }
      toGlobalToRef(kk, Fk, Ik) {
        return Ik.x = this.x * kk, Ik.y = this.y * Fk, Ik.width = this.width * kk, Ik.height = this.height * Fk, this
      }
      clone() {
        return new Xk(this.x, this.y, this.width, this.height)
      }
    }
  },
  37902: (kk, Fk, Ik) => {
    function Xk() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (kk => {
        const Fk = 16 * Math.random() | 0;
        return ("x" === kk ? Fk : 3 & Fk | 8).toString(16)
      }))
    }
    Ik.d(Fk, {
      e: () => Xk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);