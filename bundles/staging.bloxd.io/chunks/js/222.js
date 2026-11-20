/*! For license information please see 6ndy1f.222.77dad4a4.chunk.js.LICENSE.txt */
export const id = 222;
export const ids = [222, 229];
export const modules = {
  37937: kk => {
    kk.exports = function(kk) {
      return null != kk && null != kk.constructor && "function" === typeof kk.constructor.isBuffer && kk.constructor.isBuffer(kk)
    }
  },
  37923: (kk, Fk, Bk) => {
    var Rk = Bk(37926),
      tk = Bk(37932),
      ak = Bk(37937);
    Bk.g.__TYPEDARRAY_POOL || (Bk.g.__TYPEDARRAY_POOL = {
      UINT8: tk([32, 0]),
      UINT16: tk([32, 0]),
      UINT32: tk([32, 0]),
      INT8: tk([32, 0]),
      INT16: tk([32, 0]),
      INT32: tk([32, 0]),
      FLOAT: tk([32, 0]),
      DOUBLE: tk([32, 0]),
      DATA: tk([32, 0]),
      UINT8C: tk([32, 0]),
      BUFFER: tk([32, 0])
    });
    var Xk = "undefined" !== typeof Uint8ClampedArray,
      bk = Bk.g.__TYPEDARRAY_POOL;
    bk.UINT8C || (bk.UINT8C = tk([32, 0])), bk.BUFFER || (bk.BUFFER = tk([32, 0]));
    var wk = bk.DATA,
      dk = bk.BUFFER;

    function sk(kk) {
      if (kk) {
        var Fk = kk.length || kk.byteLength,
          Bk = Rk.log2(Fk);
        wk[Bk].push(kk)
      }
    }

    function Vk(kk) {
      kk = Rk.nextPow2(kk);
      var Fk = Rk.log2(kk),
        Bk = wk[Fk];
      return Bk.length > 0 ? Bk.pop() : new ArrayBuffer(kk)
    }

    function Jk(kk) {
      return new Uint8Array(Vk(kk), 0, kk)
    }

    function Ak(kk) {
      return new Uint16Array(Vk(2 * kk), 0, kk)
    }

    function ek(kk) {
      return new Uint32Array(Vk(4 * kk), 0, kk)
    }

    function yk(kk) {
      return new Int8Array(Vk(kk), 0, kk)
    }

    function fk(kk) {
      return new Int16Array(Vk(2 * kk), 0, kk)
    }

    function mk(kk) {
      return new Int32Array(Vk(4 * kk), 0, kk)
    }

    function Wk(kk) {
      return new Float32Array(Vk(4 * kk), 0, kk)
    }

    function vk(kk) {
      return new Float64Array(Vk(8 * kk), 0, kk)
    }

    function ik(kk) {
      return Xk ? new Uint8ClampedArray(Vk(kk), 0, kk) : Jk(kk)
    }

    function Yk(kk) {
      return new DataView(Vk(kk), 0, kk)
    }
    Fk.free = function(kk) {
      if (ak(kk)) dk[Rk.log2(kk.length)].push(kk);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(kk) && (kk = kk.buffer), !kk) return;
        var Fk = kk.length || kk.byteLength,
          Bk = 0 | Rk.log2(Fk);
        wk[Bk].push(kk)
      }
    }, Fk.freeUint8 = Fk.freeUint16 = Fk.freeUint32 = Fk.freeInt8 = Fk.freeInt16 = Fk.freeInt32 = Fk.freeFloat32 = Fk.freeFloat = Fk.freeFloat64 = Fk.freeDouble = Fk.freeUint8Clamped = Fk.freeDataView = function(kk) {
      sk(kk.buffer)
    }, Fk.freeArrayBuffer = sk, Fk.freeBuffer = function(kk) {
      dk[Rk.log2(kk.length)].push(kk)
    }, Fk.malloc = function(kk, Fk) {
      if (void 0 === Fk || "arraybuffer" === Fk) return Vk(kk);
      switch (Fk) {
        case "uint8":
          return Jk(kk);
        case "uint16":
          return Ak(kk);
        case "uint32":
          return ek(kk);
        case "int8":
          return yk(kk);
        case "int16":
          return fk(kk);
        case "int32":
          return mk(kk);
        case "float":
        case "float32":
          return Wk(kk);
        case "double":
        case "float64":
          return vk(kk);
        case "uint8_clamped":
          return ik(kk);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return Yk(kk);
        default:
          return null
      }
      return null
    }, Fk.mallocArrayBuffer = Vk, Fk.mallocUint8 = Jk, Fk.mallocUint16 = Ak, Fk.mallocUint32 = ek, Fk.mallocInt8 = yk, Fk.mallocInt16 = fk, Fk.mallocInt32 = mk, Fk.mallocFloat32 = Fk.mallocFloat = Wk, Fk.mallocFloat64 = Fk.mallocDouble = vk, Fk.mallocUint8Clamped = ik, Fk.mallocDataView = Yk, Fk.clearCache = function() {
      for (var kk = 0; kk < 32; ++kk) bk.UINT8[kk].length = 0, bk.UINT16[kk].length = 0, bk.UINT32[kk].length = 0, bk.INT8[kk].length = 0, bk.INT16[kk].length = 0, bk.INT32[kk].length = 0, bk.FLOAT[kk].length = 0, bk.DOUBLE[kk].length = 0, bk.UINT8C[kk].length = 0, wk[kk].length = 0, dk[kk].length = 0
    }
  },
  37926: (kk, Fk) => {
    function Bk(kk) {
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
      var Fk, Bk;
      return Fk = (kk > 65535) << 4, Fk |= Bk = ((kk >>>= Fk) > 255) << 3, Fk |= Bk = ((kk >>>= Bk) > 15) << 2, (Fk |= Bk = ((kk >>>= Bk) > 3) << 1) | (kk >>>= Bk) >> 1
    }, Fk.log10 = function(kk) {
      return kk >= 1e9 ? 9 : kk >= 1e8 ? 8 : kk >= 1e7 ? 7 : kk >= 1e6 ? 6 : kk >= 1e5 ? 5 : kk >= 1e4 ? 4 : kk >= 1e3 ? 3 : kk >= 100 ? 2 : kk >= 10 ? 1 : 0
    }, Fk.popCount = function(kk) {
      return 16843009 * ((kk = (858993459 & (kk -= kk >>> 1 & 1431655765)) + (kk >>> 2 & 858993459)) + (kk >>> 4) & 252645135) >>> 24
    }, Fk.countTrailingZeros = Bk, Fk.nextPow2 = function(kk) {
      return kk += 0 === kk, --kk, kk |= kk >>> 1, kk |= kk >>> 2, kk |= kk >>> 4, kk |= kk >>> 8, (kk |= kk >>> 16) + 1
    }, Fk.prevPow2 = function(kk) {
      return kk |= kk >>> 1, kk |= kk >>> 2, kk |= kk >>> 4, kk |= kk >>> 8, (kk |= kk >>> 16) - (kk >>> 1)
    }, Fk.parity = function(kk) {
      return kk ^= kk >>> 16, kk ^= kk >>> 8, kk ^= kk >>> 4, 27030 >>> (kk &= 15) & 1
    };
    var Rk = new Array(256);
    ! function(kk) {
      for (var Fk = 0; Fk < 256; ++Fk) {
        var Bk = Fk,
          Rk = Fk,
          tk = 7;
        for (Bk >>>= 1; Bk; Bk >>>= 1) Rk <<= 1, Rk |= 1 & Bk, --tk;
        kk[Fk] = Rk << tk & 255
      }
    }(Rk), Fk.reverse = function(kk) {
      return Rk[255 & kk] << 24 | Rk[kk >>> 8 & 255] << 16 | Rk[kk >>> 16 & 255] << 8 | Rk[kk >>> 24 & 255]
    }, Fk.interleave2 = function(kk, Fk) {
      return (kk = 1431655765 & ((kk = 858993459 & ((kk = 252645135 & ((kk = 16711935 & ((kk &= 65535) | kk << 8)) | kk << 4)) | kk << 2)) | kk << 1)) | (Fk = 1431655765 & ((Fk = 858993459 & ((Fk = 252645135 & ((Fk = 16711935 & ((Fk &= 65535) | Fk << 8)) | Fk << 4)) | Fk << 2)) | Fk << 1)) << 1
    }, Fk.deinterleave2 = function(kk, Fk) {
      return (kk = 65535 & ((kk = 16711935 & ((kk = 252645135 & ((kk = 858993459 & ((kk = kk >>> Fk & 1431655765) | kk >>> 1)) | kk >>> 2)) | kk >>> 4)) | kk >>> 16)) << 16 >> 16
    }, Fk.interleave3 = function(kk, Fk, Bk) {
      return kk = 1227133513 & ((kk = 3272356035 & ((kk = 251719695 & ((kk = 4278190335 & ((kk &= 1023) | kk << 16)) | kk << 8)) | kk << 4)) | kk << 2), (kk |= (Fk = 1227133513 & ((Fk = 3272356035 & ((Fk = 251719695 & ((Fk = 4278190335 & ((Fk &= 1023) | Fk << 16)) | Fk << 8)) | Fk << 4)) | Fk << 2)) << 1) | (Bk = 1227133513 & ((Bk = 3272356035 & ((Bk = 251719695 & ((Bk = 4278190335 & ((Bk &= 1023) | Bk << 16)) | Bk << 8)) | Bk << 4)) | Bk << 2)) << 2
    }, Fk.deinterleave3 = function(kk, Fk) {
      return (kk = 1023 & ((kk = 4278190335 & ((kk = 251719695 & ((kk = 3272356035 & ((kk = kk >>> Fk & 1227133513) | kk >>> 2)) | kk >>> 4)) | kk >>> 8)) | kk >>> 16)) << 22 >> 22
    }, Fk.nextCombination = function(kk) {
      var Fk = kk | kk - 1;
      return Fk + 1 | (~Fk & -~Fk) - 1 >>> Bk(kk) + 1
    }
  },
  37916: (kk, Fk, Bk) => {
    kk.exports = function(kk, Fk, Bk) {
      switch (arguments.length) {
        case 1:
          return Rk = [], dk(tk = kk, tk, sk, !0), Rk;
        case 2:
          return "function" === typeof Fk ? dk(kk, kk, Fk, !0) : function(kk, Fk) {
            return Rk = [], dk(kk, Fk, sk, !1), Rk
          }(kk, Fk);
        case 3:
          return dk(kk, Fk, Bk, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var tk
    };
    var Rk, tk = Bk(37923),
      ak = Bk(37944),
      Xk = Bk(37956);

    function bk(kk, Fk) {
      for (var Bk = 0; Bk < kk; ++Bk)
        if (!(Fk[Bk] <= Fk[Bk + kk])) return !0;
      return !1
    }

    function wk(kk, Fk, Bk, Rk) {
      for (var tk = 0, ak = 0, Xk = 0, wk = kk.length; Xk < wk; ++Xk) {
        var dk = kk[Xk];
        if (!bk(Fk, dk)) {
          for (var sk = 0; sk < 2 * Fk; ++sk) Bk[tk++] = dk[sk];
          Rk[ak++] = Xk
        }
      }
      return ak
    }

    function dk(kk, Fk, Bk, Rk) {
      var bk = kk.length,
        dk = Fk.length;
      if (!(bk <= 0 || dk <= 0)) {
        var sk = kk[0].length >>> 1;
        if (!(sk <= 0)) {
          var Vk, Jk = tk.mallocDouble(2 * sk * bk),
            Ak = tk.mallocInt32(bk);
          if ((bk = wk(kk, sk, Jk, Ak)) > 0) {
            if (1 === sk && Rk) ak.init(bk), Vk = ak.sweepComplete(sk, Bk, 0, bk, Jk, Ak, 0, bk, Jk, Ak);
            else {
              var ek = tk.mallocDouble(2 * sk * dk),
                yk = tk.mallocInt32(dk);
              (dk = wk(Fk, sk, ek, yk)) > 0 && (ak.init(bk + dk), Vk = 1 === sk ? ak.sweepBipartite(sk, Bk, 0, bk, Jk, Ak, 0, dk, ek, yk) : Xk(sk, Bk, Rk, bk, Jk, Ak, dk, ek, yk), tk.free(ek), tk.free(yk))
            }
            tk.free(Jk), tk.free(Ak)
          }
          return Vk
        }
      }
    }

    function sk(kk, Fk) {
      Rk.push([kk, Fk])
    }
  },
  37963: (kk, Fk) => {
    var Bk = "d",
      Rk = "ax",
      tk = "fp",
      ak = "es",
      Xk = "rs",
      bk = "re",
      wk = "rb",
      dk = "bs",
      sk = "be",
      Vk = "bb",
      Jk = [Bk, Rk, "vv", Xk, bk, wk, "ri", dk, sk, Vk, "bi"];

    function Ak(kk) {
      var Fk = "bruteForce" + (kk ? "Full" : "Partial"),
        Rk = [],
        Xk = Jk.slice();
      kk || Xk.splice(3, 0, tk);
      var bk = ["function " + Fk + "(" + Xk.join() + "){"];

      function wk(Fk, tk) {
        var Xk = function(kk, Fk, Rk) {
          var tk = "bruteForce" + (kk ? "Red" : "Blue") + (Fk ? "Flip" : "") + (Rk ? "Full" : ""),
            Xk = ["function ", tk, "(", Jk.join(), "){", "var ", ak, "=2*", Bk, ";"],
            bk = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            wk = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (Rk ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return kk ? Xk.push(bk, "Q", ":", wk) : Xk.push(wk, "Q", ":", bk), Rk ? Xk.push("if(y1<x0||x1<y0)continue;") : Fk ? Xk.push("if(y0<=x0||x1<y0)continue;") : Xk.push("if(y0<x0||x1<y0)continue;"), Xk.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), Fk ? Xk.push("yi,xi") : Xk.push("xi,yi"), Xk.push(");if(rv!==void 0)return rv;}}}"), {
            name: tk,
            code: Xk.join("")
          }
        }(Fk, tk, kk);
        Rk.push(Xk.code), bk.push("return " + Xk.name + "(" + Jk.join() + ");")
      }
      bk.push("if(re-rs>be-bs){"), kk ? (wk(!0, !1), bk.push("}else{"), wk(!1, !1)) : (bk.push("if(fp){"), wk(!0, !0), bk.push("}else{"), wk(!0, !1), bk.push("}}else{if(fp){"), wk(!1, !0), bk.push("}else{"), wk(!1, !1), bk.push("}")), bk.push("}}return " + Fk);
      var dk = Rk.join("") + bk.join("");
      return new Function(dk)()
    }
    Fk.partial = Ak(!1), Fk.full = Ak(!0)
  },
  37956: (kk, Fk, Bk) => {
    kk.exports = function(kk, Fk, Bk, ak, sk, Hk, uk, Mk, gk) {
      ! function(kk, Fk) {
        var Bk = 8 * tk.log2(Fk + 1) * (kk + 1) | 0,
          ak = tk.nextPow2(ik * Bk);
        Lk.length < ak && (Rk.free(Lk), Lk = Rk.mallocInt32(ak));
        var Xk = tk.nextPow2(Yk * Bk);
        Ok.length < Xk && (Rk.free(Ok), Ok = Rk.mallocDouble(Xk))
      }(kk, ak + uk);
      var Uk, ck = 0,
        Gk = 2 * kk;
      Ek(ck++, 0, 0, ak, 0, uk, Bk ? 16 : 0, -1 / 0, 1 / 0), Bk || Ek(ck++, 0, 0, uk, 0, ak, 1, -1 / 0, 1 / 0);
      for (; ck > 0;) {
        var Tk = (ck -= 1) * ik,
          rk = Lk[Tk],
          Dk = Lk[Tk + 1],
          zk = Lk[Tk + 2],
          Pk = Lk[Tk + 3],
          hk = Lk[Tk + 4],
          qk = Lk[Tk + 5],
          Ck = ck * Yk,
          Zk = Ok[Ck],
          pk = Ok[Ck + 1],
          Kk = 1 & qk,
          xk = !!(16 & qk),
          jk = sk,
          lk = Hk,
          nk = Mk,
          Ik = gk;
        if (Kk && (jk = Mk, lk = gk, nk = sk, Ik = Hk), !(2 & qk && Dk >= (zk = fk(kk, rk, Dk, zk, jk, lk, pk))) && !(4 & qk && (Dk = mk(kk, rk, Dk, zk, jk, lk, Zk)) >= zk)) {
          var Qk = zk - Dk,
            kF = hk - Pk;
          if (xk) {
            if (kk * Qk * (Qk + kF) < Ak) {
              if (void 0 !== (Uk = wk.scanComplete(kk, rk, Fk, Dk, zk, jk, lk, Pk, hk, nk, Ik))) return Uk;
              continue
            }
          } else {
            if (kk * Math.min(Qk, kF) < Vk) {
              if (void 0 !== (Uk = Xk(kk, rk, Fk, Kk, Dk, zk, jk, lk, Pk, hk, nk, Ik))) return Uk;
              continue
            }
            if (kk * Qk * kF < Jk) {
              if (void 0 !== (Uk = wk.scanBipartite(kk, rk, Fk, Kk, Dk, zk, jk, lk, Pk, hk, nk, Ik))) return Uk;
              continue
            }
          }
          var FF = ek(kk, rk, Dk, zk, jk, lk, Zk, pk);
          if (Dk < FF)
            if (kk * (FF - Dk) < Vk) {
              if (void 0 !== (Uk = bk(kk, rk + 1, Fk, Dk, FF, jk, lk, Pk, hk, nk, Ik))) return Uk
            } else if (rk === kk - 2) {
            if (void 0 !== (Uk = Kk ? wk.sweepBipartite(kk, Fk, Pk, hk, nk, Ik, Dk, FF, jk, lk) : wk.sweepBipartite(kk, Fk, Dk, FF, jk, lk, Pk, hk, nk, Ik))) return Uk
          } else Ek(ck++, rk + 1, Dk, FF, Pk, hk, Kk, -1 / 0, 1 / 0), Ek(ck++, rk + 1, Pk, hk, Dk, FF, 1 ^ Kk, -1 / 0, 1 / 0);
          if (FF < zk) {
            var BF = dk(kk, rk, Pk, hk, nk, Ik),
              RF = nk[Gk * BF + rk],
              tF = yk(kk, rk, BF, hk, nk, Ik, RF);
            if (tF < hk && Ek(ck++, rk, FF, zk, tF, hk, (4 | Kk) + (xk ? 16 : 0), RF, pk), Pk < BF && Ek(ck++, rk, FF, zk, Pk, BF, (2 | Kk) + (xk ? 16 : 0), Zk, RF), BF + 1 === tF) {
              if (void 0 !== (Uk = xk ? Nk(kk, rk, Fk, FF, zk, jk, lk, BF, nk, Ik[BF]) : Sk(kk, rk, Fk, Kk, FF, zk, jk, lk, BF, nk, Ik[BF]))) return Uk
            } else if (BF < tF) {
              var aF;
              if (xk) {
                if (FF < (aF = Wk(kk, rk, FF, zk, jk, lk, RF))) {
                  var XF = yk(kk, rk, FF, aF, jk, lk, RF);
                  if (rk === kk - 2) {
                    if (FF < XF && void 0 !== (Uk = wk.sweepComplete(kk, Fk, FF, XF, jk, lk, BF, tF, nk, Ik))) return Uk;
                    if (XF < aF && void 0 !== (Uk = wk.sweepBipartite(kk, Fk, XF, aF, jk, lk, BF, tF, nk, Ik))) return Uk
                  } else FF < XF && Ek(ck++, rk + 1, FF, XF, BF, tF, 16, -1 / 0, 1 / 0), XF < aF && (Ek(ck++, rk + 1, XF, aF, BF, tF, 0, -1 / 0, 1 / 0), Ek(ck++, rk + 1, BF, tF, XF, aF, 1, -1 / 0, 1 / 0))
                }
              } else FF < (aF = Kk ? vk(kk, rk, FF, zk, jk, lk, RF) : Wk(kk, rk, FF, zk, jk, lk, RF)) && (rk === kk - 2 ? Uk = Kk ? wk.sweepBipartite(kk, Fk, BF, tF, nk, Ik, FF, aF, jk, lk) : wk.sweepBipartite(kk, Fk, FF, aF, jk, lk, BF, tF, nk, Ik) : (Ek(ck++, rk + 1, FF, aF, BF, tF, Kk, -1 / 0, 1 / 0), Ek(ck++, rk + 1, BF, tF, FF, aF, 1 ^ Kk, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var Rk = Bk(37923),
      tk = Bk(37926),
      ak = Bk(37963),
      Xk = ak.partial,
      bk = ak.full,
      wk = Bk(37944),
      dk = Bk(37969),
      sk = Bk(37973),
      Vk = 128,
      Jk = 1 << 22,
      Ak = 1 << 22,
      ek = sk("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      yk = sk("lo===p0", ["p0"]),
      fk = sk("lo<p0", ["p0"]),
      mk = sk("hi<=p0", ["p0"]),
      Wk = sk("lo<=p0&&p0<=hi", ["p0"]),
      vk = sk("lo<p0&&p0<=hi", ["p0"]),
      ik = 6,
      Yk = 2,
      Lk = Rk.mallocInt32(1024),
      Ok = Rk.mallocDouble(1024);

    function Ek(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk) {
      var dk = ik * kk;
      Lk[dk] = Fk, Lk[dk + 1] = Bk, Lk[dk + 2] = Rk, Lk[dk + 3] = tk, Lk[dk + 4] = ak, Lk[dk + 5] = Xk;
      var sk = Yk * kk;
      Ok[sk] = bk, Ok[sk + 1] = wk
    }

    function Sk(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk, sk) {
      var Vk = 2 * kk,
        Jk = wk * Vk,
        Ak = dk[Jk + Fk];
      kk: for (var ek = tk, yk = tk * Vk; ek < ak; ++ek, yk += Vk) {
        var fk = Xk[yk + Fk],
          mk = Xk[yk + Fk + kk];
        if (!(Ak < fk || mk < Ak) && (!Rk || Ak !== fk)) {
          for (var Wk, vk = bk[ek], ik = Fk + 1; ik < kk; ++ik) {
            fk = Xk[yk + ik], mk = Xk[yk + ik + kk];
            var Yk = dk[Jk + ik],
              Lk = dk[Jk + ik + kk];
            if (mk < Yk || Lk < fk) continue kk
          }
          if (void 0 !== (Wk = Rk ? Bk(sk, vk) : Bk(vk, sk))) return Wk
        }
      }
    }

    function Nk(kk, Fk, Bk, Rk, tk, ak, Xk, bk, wk, dk) {
      var sk = 2 * kk,
        Vk = bk * sk,
        Jk = wk[Vk + Fk];
      kk: for (var Ak = Rk, ek = Rk * sk; Ak < tk; ++Ak, ek += sk) {
        var yk = Xk[Ak];
        if (yk !== dk) {
          var fk = ak[ek + Fk],
            mk = ak[ek + Fk + kk];
          if (!(Jk < fk || mk < Jk)) {
            for (var Wk = Fk + 1; Wk < kk; ++Wk) {
              fk = ak[ek + Wk], mk = ak[ek + Wk + kk];
              var vk = wk[Vk + Wk],
                ik = wk[Vk + Wk + kk];
              if (mk < vk || ik < fk) continue kk
            }
            var Yk = Bk(yk, dk);
            if (void 0 !== Yk) return Yk
          }
        }
      }
    }
  },
  37969: (kk, Fk, Bk) => {
    kk.exports = function(kk, Fk, Bk, Xk, bk, wk) {
      if (Xk <= Bk + 1) return Bk;
      var dk = Bk,
        sk = Xk,
        Vk = Xk + Bk >>> 1,
        Jk = 2 * kk,
        Ak = Vk,
        ek = bk[Jk * Vk + Fk];
      for (; dk < sk;) {
        if (sk - dk < tk) {
          ak(kk, Fk, dk, sk, bk, wk), ek = bk[Jk * Vk + Fk];
          break
        }
        var yk = sk - dk,
          fk = Math.random() * yk + dk | 0,
          mk = bk[Jk * fk + Fk],
          Wk = Math.random() * yk + dk | 0,
          vk = bk[Jk * Wk + Fk],
          ik = Math.random() * yk + dk | 0,
          Yk = bk[Jk * ik + Fk];
        mk <= vk ? Yk >= vk ? (Ak = Wk, ek = vk) : mk >= Yk ? (Ak = fk, ek = mk) : (Ak = ik, ek = Yk) : vk >= Yk ? (Ak = Wk, ek = vk) : Yk >= mk ? (Ak = fk, ek = mk) : (Ak = ik, ek = Yk);
        for (var Lk = Jk * (sk - 1), Ok = Jk * Ak, Ek = 0; Ek < Jk; ++Ek, ++Lk, ++Ok) {
          var Sk = bk[Lk];
          bk[Lk] = bk[Ok], bk[Ok] = Sk
        }
        var Nk = wk[sk - 1];
        wk[sk - 1] = wk[Ak], wk[Ak] = Nk;
        for (Lk = Jk * (sk - 1), Ok = Jk * (Ak = Rk(kk, Fk, dk, sk - 1, bk, wk, ek)), Ek = 0; Ek < Jk; ++Ek, ++Lk, ++Ok) {
          Sk = bk[Lk];
          bk[Lk] = bk[Ok], bk[Ok] = Sk
        }
        Nk = wk[sk - 1];
        if (wk[sk - 1] = wk[Ak], wk[Ak] = Nk, Vk < Ak) {
          for (sk = Ak - 1; dk < sk && bk[Jk * (sk - 1) + Fk] === ek;) sk -= 1;
          sk += 1
        } else {
          if (!(Ak < Vk)) break;
          for (dk = Ak + 1; dk < sk && bk[Jk * dk + Fk] === ek;) dk += 1
        }
      }
      return Rk(kk, Fk, Bk, Vk, bk, wk, bk[Jk * Vk + Fk])
    };
    var Rk = Bk(37973)("lo<p0", ["p0"]),
      tk = 8;

    function ak(kk, Fk, Bk, Rk, tk, ak) {
      for (var Xk = 2 * kk, bk = Xk * (Bk + 1) + Fk, wk = Bk + 1; wk < Rk; ++wk, bk += Xk)
        for (var dk = tk[bk], sk = wk, Vk = Xk * (wk - 1); sk > Bk && tk[Vk + Fk] > dk; --sk, Vk -= Xk) {
          for (var Jk = Vk, Ak = Vk + Xk, ek = 0; ek < Xk; ++ek, ++Jk, ++Ak) {
            var yk = tk[Jk];
            tk[Jk] = tk[Ak], tk[Ak] = yk
          }
          var fk = ak[sk];
          ak[sk] = ak[sk - 1], ak[sk - 1] = fk
        }
    }
  },
  37973: kk => {
    kk.exports = function(kk, Bk) {
      var Rk = "abcdef".split("").concat(Bk),
        tk = [];
      kk.indexOf("lo") >= 0 && tk.push("lo=e[k+n]");
      kk.indexOf("hi") >= 0 && tk.push("hi=e[k+o]");
      return Rk.push(Fk.replace("_", tk.join()).replace("$", kk)), Function.apply(void 0, Rk)
    };
    var Fk = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  37950: kk => {
    kk.exports = function(kk, Rk) {
      Rk <= 4 * Fk ? Bk(0, Rk - 1, kk) : dk(0, Rk - 1, kk)
    };
    var Fk = 32;

    function Bk(kk, Fk, Bk) {
      for (var Rk = 2 * (kk + 1), tk = kk + 1; tk <= Fk; ++tk) {
        for (var ak = Bk[Rk++], Xk = Bk[Rk++], bk = tk, wk = Rk - 2; bk-- > kk;) {
          var dk = Bk[wk - 2],
            sk = Bk[wk - 1];
          if (dk < ak) break;
          if (dk === ak && sk < Xk) break;
          Bk[wk] = dk, Bk[wk + 1] = sk, wk -= 2
        }
        Bk[wk] = ak, Bk[wk + 1] = Xk
      }
    }

    function Rk(kk, Fk, Bk) {
      Fk *= 2;
      var Rk = Bk[kk *= 2],
        tk = Bk[kk + 1];
      Bk[kk] = Bk[Fk], Bk[kk + 1] = Bk[Fk + 1], Bk[Fk] = Rk, Bk[Fk + 1] = tk
    }

    function tk(kk, Fk, Bk) {
      Fk *= 2, Bk[kk *= 2] = Bk[Fk], Bk[kk + 1] = Bk[Fk + 1]
    }

    function ak(kk, Fk, Bk, Rk) {
      Fk *= 2, Bk *= 2;
      var tk = Rk[kk *= 2],
        ak = Rk[kk + 1];
      Rk[kk] = Rk[Fk], Rk[kk + 1] = Rk[Fk + 1], Rk[Fk] = Rk[Bk], Rk[Fk + 1] = Rk[Bk + 1], Rk[Bk] = tk, Rk[Bk + 1] = ak
    }

    function Xk(kk, Fk, Bk, Rk, tk) {
      Fk *= 2, tk[kk *= 2] = tk[Fk], tk[Fk] = Bk, tk[kk + 1] = tk[Fk + 1], tk[Fk + 1] = Rk
    }

    function bk(kk, Fk, Bk) {
      Fk *= 2;
      var Rk = Bk[kk *= 2],
        tk = Bk[Fk];
      return !(Rk < tk) && (Rk !== tk || Bk[kk + 1] > Bk[Fk + 1])
    }

    function wk(kk, Fk, Bk, Rk) {
      var tk = Rk[kk *= 2];
      return tk < Fk || tk === Fk && Rk[kk + 1] < Bk
    }

    function dk(kk, sk, Vk) {
      var Jk = (sk - kk + 1) / 6 | 0,
        Ak = kk + Jk,
        ek = sk - Jk,
        yk = kk + sk >> 1,
        fk = yk - Jk,
        mk = yk + Jk,
        Wk = Ak,
        vk = fk,
        ik = yk,
        Yk = mk,
        Lk = ek,
        Ok = kk + 1,
        Ek = sk - 1,
        Sk = 0;
      bk(Wk, vk, Vk) && (Sk = Wk, Wk = vk, vk = Sk), bk(Yk, Lk, Vk) && (Sk = Yk, Yk = Lk, Lk = Sk), bk(Wk, ik, Vk) && (Sk = Wk, Wk = ik, ik = Sk), bk(vk, ik, Vk) && (Sk = vk, vk = ik, ik = Sk), bk(Wk, Yk, Vk) && (Sk = Wk, Wk = Yk, Yk = Sk), bk(ik, Yk, Vk) && (Sk = ik, ik = Yk, Yk = Sk), bk(vk, Lk, Vk) && (Sk = vk, vk = Lk, Lk = Sk), bk(vk, ik, Vk) && (Sk = vk, vk = ik, ik = Sk), bk(Yk, Lk, Vk) && (Sk = Yk, Yk = Lk, Lk = Sk);
      for (var Nk = Vk[2 * vk], Hk = Vk[2 * vk + 1], uk = Vk[2 * Yk], Mk = Vk[2 * Yk + 1], gk = 2 * Wk, Uk = 2 * ik, ck = 2 * Lk, Gk = 2 * Ak, Tk = 2 * yk, rk = 2 * ek, Dk = 0; Dk < 2; ++Dk) {
        var zk = Vk[gk + Dk],
          Pk = Vk[Uk + Dk],
          hk = Vk[ck + Dk];
        Vk[Gk + Dk] = zk, Vk[Tk + Dk] = Pk, Vk[rk + Dk] = hk
      }
      tk(fk, kk, Vk), tk(mk, sk, Vk);
      for (var qk = Ok; qk <= Ek; ++qk)
        if (wk(qk, Nk, Hk, Vk)) qk !== Ok && Rk(qk, Ok, Vk), ++Ok;
        else if (!wk(qk, uk, Mk, Vk))
        for (;;) {
          if (wk(Ek, uk, Mk, Vk)) {
            wk(Ek, Nk, Hk, Vk) ? (ak(qk, Ok, Ek, Vk), ++Ok, --Ek) : (Rk(qk, Ek, Vk), --Ek);
            break
          }
          if (--Ek < qk) break
        }
      Xk(kk, Ok - 1, Nk, Hk, Vk), Xk(sk, Ek + 1, uk, Mk, Vk), Ok - 2 - kk <= Fk ? Bk(kk, Ok - 2, Vk) : dk(kk, Ok - 2, Vk), sk - (Ek + 2) <= Fk ? Bk(Ek + 2, sk, Vk) : dk(Ek + 2, sk, Vk), Ek - Ok <= Fk ? Bk(Ok, Ek, Vk) : dk(Ok, Ek, Vk)
    }
  },
  37944: (kk, Fk, Bk) => {
    kk.exports = {
      init: function(kk) {
        var Fk = tk.nextPow2(kk);
        wk.length < Fk && (Rk.free(wk), wk = Rk.mallocInt32(Fk));
        dk.length < Fk && (Rk.free(dk), dk = Rk.mallocInt32(Fk));
        sk.length < Fk && (Rk.free(sk), sk = Rk.mallocInt32(Fk));
        Vk.length < Fk && (Rk.free(Vk), Vk = Rk.mallocInt32(Fk));
        Jk.length < Fk && (Rk.free(Jk), Jk = Rk.mallocInt32(Fk));
        Ak.length < Fk && (Rk.free(Ak), Ak = Rk.mallocInt32(Fk));
        var Bk = 8 * Fk;
        ek.length < Bk && (Rk.free(ek), ek = Rk.mallocDouble(Bk))
      },
      sweepBipartite: function(kk, Fk, Bk, Rk, tk, bk, Jk, Ak, mk, Wk) {
        for (var vk = 0, ik = 2 * kk, Yk = kk - 1, Lk = ik - 1, Ok = Bk; Ok < Rk; ++Ok) {
          var Ek = bk[Ok],
            Sk = ik * Ok;
          ek[vk++] = tk[Sk + Yk], ek[vk++] = -(Ek + 1), ek[vk++] = tk[Sk + Lk], ek[vk++] = Ek
        }
        for (Ok = Jk; Ok < Ak; ++Ok) {
          Ek = Wk[Ok] + Xk;
          var Nk = ik * Ok;
          ek[vk++] = mk[Nk + Yk], ek[vk++] = -Ek, ek[vk++] = mk[Nk + Lk], ek[vk++] = Ek
        }
        var Hk = vk >>> 1;
        ak(ek, Hk);
        var uk = 0,
          Mk = 0;
        for (Ok = 0; Ok < Hk; ++Ok) {
          var gk = 0 | ek[2 * Ok + 1];
          if (gk >= Xk) yk(sk, Vk, Mk--, gk = gk - Xk | 0);
          else if (gk >= 0) yk(wk, dk, uk--, gk);
          else if (gk <= -Xk) {
            gk = -gk - Xk | 0;
            for (var Uk = 0; Uk < uk; ++Uk) {
              if (void 0 !== (ck = Fk(wk[Uk], gk))) return ck
            }
            fk(sk, Vk, Mk++, gk)
          } else {
            gk = -gk - 1 | 0;
            for (Uk = 0; Uk < Mk; ++Uk) {
              var ck;
              if (void 0 !== (ck = Fk(gk, sk[Uk]))) return ck
            }
            fk(wk, dk, uk++, gk)
          }
        }
      },
      sweepComplete: function(kk, Fk, Bk, Rk, tk, Xk, bk, mk, Wk, vk) {
        for (var ik = 0, Yk = 2 * kk, Lk = kk - 1, Ok = Yk - 1, Ek = Bk; Ek < Rk; ++Ek) {
          var Sk = Xk[Ek] + 1 << 1,
            Nk = Yk * Ek;
          ek[ik++] = tk[Nk + Lk], ek[ik++] = -Sk, ek[ik++] = tk[Nk + Ok], ek[ik++] = Sk
        }
        for (Ek = bk; Ek < mk; ++Ek) {
          Sk = vk[Ek] + 1 << 1;
          var Hk = Yk * Ek;
          ek[ik++] = Wk[Hk + Lk], ek[ik++] = 1 | -Sk, ek[ik++] = Wk[Hk + Ok], ek[ik++] = 1 | Sk
        }
        var uk = ik >>> 1;
        ak(ek, uk);
        var Mk = 0,
          gk = 0,
          Uk = 0;
        for (Ek = 0; Ek < uk; ++Ek) {
          var ck = 0 | ek[2 * Ek + 1],
            Gk = 1 & ck;
          if (Ek < uk - 1 && ck >> 1 === ek[2 * Ek + 3] >> 1 && (Gk = 2, Ek += 1), ck < 0) {
            for (var Tk = -(ck >> 1) - 1, rk = 0; rk < Uk; ++rk) {
              if (void 0 !== (Dk = Fk(Jk[rk], Tk))) return Dk
            }
            if (0 !== Gk)
              for (rk = 0; rk < Mk; ++rk) {
                if (void 0 !== (Dk = Fk(wk[rk], Tk))) return Dk
              }
            if (1 !== Gk)
              for (rk = 0; rk < gk; ++rk) {
                var Dk;
                if (void 0 !== (Dk = Fk(sk[rk], Tk))) return Dk
              }
            0 === Gk ? fk(wk, dk, Mk++, Tk) : 1 === Gk ? fk(sk, Vk, gk++, Tk) : 2 === Gk && fk(Jk, Ak, Uk++, Tk)
          } else {
            Tk = (ck >> 1) - 1;
            0 === Gk ? yk(wk, dk, Mk--, Tk) : 1 === Gk ? yk(sk, Vk, gk--, Tk) : 2 === Gk && yk(Jk, Ak, Uk--, Tk)
          }
        }
      },
      scanBipartite: function(kk, Fk, Bk, Rk, tk, bk, sk, Vk, Jk, Ak, mk, Wk) {
        var vk = 0,
          ik = 2 * kk,
          Yk = Fk,
          Lk = Fk + kk,
          Ok = 1,
          Ek = 1;
        Rk ? Ek = Xk : Ok = Xk;
        for (var Sk = tk; Sk < bk; ++Sk) {
          var Nk = Sk + Ok,
            Hk = ik * Sk;
          ek[vk++] = sk[Hk + Yk], ek[vk++] = -Nk, ek[vk++] = sk[Hk + Lk], ek[vk++] = Nk
        }
        for (Sk = Jk; Sk < Ak; ++Sk) {
          Nk = Sk + Ek;
          var uk = ik * Sk;
          ek[vk++] = mk[uk + Yk], ek[vk++] = -Nk
        }
        var Mk = vk >>> 1;
        ak(ek, Mk);
        var gk = 0;
        for (Sk = 0; Sk < Mk; ++Sk) {
          var Uk = 0 | ek[2 * Sk + 1];
          if (Uk < 0) {
            var ck = !1;
            if ((Nk = -Uk) >= Xk ? (ck = !Rk, Nk -= Xk) : (ck = !!Rk, Nk -= 1), ck) fk(wk, dk, gk++, Nk);
            else {
              var Gk = Wk[Nk],
                Tk = ik * Nk,
                rk = mk[Tk + Fk + 1],
                Dk = mk[Tk + Fk + 1 + kk];
              kk: for (var zk = 0; zk < gk; ++zk) {
                var Pk = wk[zk],
                  hk = ik * Pk;
                if (!(Dk < sk[hk + Fk + 1] || sk[hk + Fk + 1 + kk] < rk)) {
                  for (var qk = Fk + 2; qk < kk; ++qk)
                    if (mk[Tk + qk + kk] < sk[hk + qk] || sk[hk + qk + kk] < mk[Tk + qk]) continue kk;
                  var Ck, Zk = Vk[Pk];
                  if (void 0 !== (Ck = Rk ? Bk(Gk, Zk) : Bk(Zk, Gk))) return Ck
                }
              }
            }
          } else yk(wk, dk, gk--, Uk - Ok)
        }
      },
      scanComplete: function(kk, Fk, Bk, Rk, tk, bk, dk, sk, Vk, Jk, Ak) {
        for (var yk = 0, fk = 2 * kk, mk = Fk, Wk = Fk + kk, vk = Rk; vk < tk; ++vk) {
          var ik = vk + Xk,
            Yk = fk * vk;
          ek[yk++] = bk[Yk + mk], ek[yk++] = -ik, ek[yk++] = bk[Yk + Wk], ek[yk++] = ik
        }
        for (vk = sk; vk < Vk; ++vk) {
          ik = vk + 1;
          var Lk = fk * vk;
          ek[yk++] = Jk[Lk + mk], ek[yk++] = -ik
        }
        var Ok = yk >>> 1;
        ak(ek, Ok);
        var Ek = 0;
        for (vk = 0; vk < Ok; ++vk) {
          var Sk = 0 | ek[2 * vk + 1];
          if (Sk < 0) {
            if ((ik = -Sk) >= Xk) wk[Ek++] = ik - Xk;
            else {
              var Nk = Ak[ik -= 1],
                Hk = fk * ik,
                uk = Jk[Hk + Fk + 1],
                Mk = Jk[Hk + Fk + 1 + kk];
              kk: for (var gk = 0; gk < Ek; ++gk) {
                var Uk = wk[gk],
                  ck = dk[Uk];
                if (ck === Nk) break;
                var Gk = fk * Uk;
                if (!(Mk < bk[Gk + Fk + 1] || bk[Gk + Fk + 1 + kk] < uk)) {
                  for (var Tk = Fk + 2; Tk < kk; ++Tk)
                    if (Jk[Hk + Tk + kk] < bk[Gk + Tk] || bk[Gk + Tk + kk] < Jk[Hk + Tk]) continue kk;
                  var rk = Bk(ck, Nk);
                  if (void 0 !== rk) return rk
                }
              }
            }
          } else {
            for (ik = Sk - Xk, gk = Ek - 1; gk >= 0; --gk)
              if (wk[gk] === ik) {
                for (Tk = gk + 1; Tk < Ek; ++Tk) wk[Tk - 1] = wk[Tk];
                break
              }-- Ek
          }
        }
      }
    };
    var Rk = Bk(37923),
      tk = Bk(37926),
      ak = Bk(37950),
      Xk = 1 << 28,
      bk = 1024,
      wk = Rk.mallocInt32(bk),
      dk = Rk.mallocInt32(bk),
      sk = Rk.mallocInt32(bk),
      Vk = Rk.mallocInt32(bk),
      Jk = Rk.mallocInt32(bk),
      Ak = Rk.mallocInt32(bk),
      ek = Rk.mallocDouble(8192);

    function yk(kk, Fk, Bk, Rk) {
      var tk = Fk[Rk],
        ak = kk[Bk - 1];
      kk[tk] = ak, Fk[ak] = tk
    }

    function fk(kk, Fk, Bk, Rk) {
      kk[Bk] = Rk, Fk[Rk] = Bk
    }
  },
  37932: kk => {
    function Fk(kk, Bk, Rk) {
      var tk = 0 | kk[Rk];
      if (tk <= 0) return [];
      var ak, Xk = new Array(tk);
      if (Rk === kk.length - 1)
        for (ak = 0; ak < tk; ++ak) Xk[ak] = Bk;
      else
        for (ak = 0; ak < tk; ++ak) Xk[ak] = Fk(kk, Bk, Rk + 1);
      return Xk
    }
    kk.exports = function(kk, Bk) {
      switch ("undefined" === typeof Bk && (Bk = 0), typeof kk) {
        case "number":
          if (kk > 0) return function(kk, Fk) {
            var Bk, Rk;
            for (Bk = new Array(kk), Rk = 0; Rk < kk; ++Rk) Bk[Rk] = Fk;
            return Bk
          }(0 | kk, Bk);
          break;
        case "object":
          if ("number" === typeof kk.length) return Fk(kk, Bk, 0)
      }
      return []
    }
  },
  37893: (kk, Fk, Bk) => {
    kk.exports = function() {
      var kk = this;
      this.components = {}, this.comps = this.components;
      var Fk = this.components,
        Bk = 1,
        tk = {},
        ak = [],
        Xk = [],
        bk = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function wk(kk, Bk) {
        var Rk = Fk[Bk],
          ak = tk[Bk],
          Xk = ak.hash[kk];
        Xk && (ak.remove(kk), Rk.yE && (Rk.multi ? (Xk.forEach((Fk => {
          Fk && Rk.yE(kk, Fk)
        })), Xk.length = 0) : Rk.yE(kk, Xk)), bk.removals.push(ak), dk())
      }

      function dk() {
        bk.timeout || (bk.timeout = !0, setTimeout(sk, 1))
      }

      function sk() {
        bk.timeout = !1, Vk()
      }

      function Vk() {
        bk.multiComps.length && function(kk) {
          for (var Fk = 0; Fk < kk.length; Fk++) {
            var {
              entID: Bk,
              data: Rk
            } = kk[Fk], tk = Rk.hash[Bk];
            if (tk) {
              for (var ak = 0; ak < tk.length; ak++) tk[ak] || (tk.splice(ak, 1), ak--);
              0 === tk.length && (Rk.remove(Bk), bk.removals.push(Rk))
            }
          }
          kk.length = 0
        }(bk.multiComps), bk.removals.length && function(kk) {
          for (var Fk = 0; Fk < kk.length; Fk++) {
            kk[Fk].flush()
          }
          kk.length = 0
        }(bk.removals)
      }
      this.Zy = tk, this._systems = ak, this._renderSystems = Xk, this.Iq = function(Fk) {
        var Rk = Bk++;
        return Array.isArray(Fk) && Fk.forEach((Fk => kk.sH(Rk, Fk))), Rk
      }, this.deleteEntity = function(Fk) {
        return Object.keys(tk).forEach((kk => {
          tk[kk].hash[Fk] && wk(Fk, kk)
        })), kk
      }, this.iFk = function(kk) {
        if (!kk) throw new Error("Missing component definition");
        var Bk = kk.name;
        if (!Bk) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof Bk) throw new Error("Component name must be a string.");
        if ("" === Bk) throw new Error("Component name must be a non-empty string.");
        if (tk[Bk]) throw new Error(`Component ${Bk} already exists.`);
        var bk = {};
        return bk.name = Bk, bk.multi = !!kk.multi, bk.order = isNaN(kk.order) ? 99 : kk.order, bk.stateConstructor = kk.stateConstructor || null, bk.state = kk.state || {}, bk.Av = kk.Av || null, bk.yE = kk.yE || null, bk.system = kk.system || null, bk.Dv = kk.Dv || null, Fk[Bk] = bk, tk[Bk] = new Rk, tk[Bk]._pendingMultiCleanup = !1, tk[Bk]._multiCleanupIDs = bk.multi ? [] : null, bk.system && (ak.push(Bk), ak.sort(((kk, Bk) => Fk[kk].order - Fk[Bk].order))), bk.Dv && (Xk.push(Bk), Xk.sort(((kk, Bk) => Fk[kk].order - Fk[Bk].order))), Bk
      }, this.overwriteComponent = function(kk, Bk) {
        var Rk = Fk[kk];
        if (!Rk) throw new Error(`Unknown component: ${kk}`);
        if (!Bk) throw new Error("Missing component definition");
        if (Rk.name !== Bk.name) throw new Error("Overwriting component must use the same name property.");
        var bk = {};
        bk.name = kk, bk.multi = !!Bk.multi, bk.order = isNaN(Bk.order) ? 99 : Bk.order, bk.state = Bk.state || {}, bk.Av = Bk.Av || null, bk.yE = Bk.yE || null, bk.system = Bk.system || null, bk.Dv = Bk.Dv || null, Fk[kk] = bk, tk[kk]._pendingMultiCleanup = !1, tk[kk]._multiCleanupIDs = bk.multi ? [] : null;
        var wk = ak.indexOf(kk);
        bk.system && wk < 0 && ak.push(kk), !bk.system && wk >= 0 && ak.splice(wk, 1), ak.sort(((kk, Bk) => Fk[kk].order - Fk[Bk].order));
        var dk = Xk.indexOf(kk);
        bk.Dv && dk < 0 && Xk.push(kk), !bk.Dv && dk >= 0 && Xk.splice(dk, 1), Xk.sort(((kk, Bk) => Fk[kk].order - Fk[Bk].order));
        var sk = bk.state;
        return this.ZN(kk).forEach((kk => {
          for (var Fk in sk) Fk in kk || (kk[Fk] = sk[Fk]);
          bk.Av && bk.Av(kk.pN, kk)
        })), kk
      }, this.deleteComponent = function(Bk) {
        var Rk = tk[Bk];
        if (!Rk) throw new Error(`Unknown component: ${Bk}`);
        Rk.flush(), Rk.list.forEach((kk => {
          kk && wk(kk.pN || kk[0].pN, Bk)
        }));
        var bk = ak.indexOf(Bk),
          dk = Xk.indexOf(Bk);
        return bk > -1 && ak.splice(bk, 1), dk > -1 && Xk.splice(dk, 1), tk[Bk].dispose(), delete tk[Bk], delete Fk[Bk], kk
      }, this.sH = function(kk, Bk, Rk) {
        var ak, Xk = Fk[Bk],
          bk = tk[Bk];
        if (!bk) throw new Error(`Unknown component: ${Bk}.`);
        if (bk.hash[kk] && !Xk.multi) throw new Error(`Entity ${kk} already has component: ${Bk}.`);
        if (Xk.stateConstructor) {
          if (!(ak = new Xk.stateConstructor).hasOwnProperty("pN")) throw new Error(`Component ${Xk.name} stateConstructor type does not have property __id`);
          Object.assign(ak, Xk.state, Rk)
        } else ak = {
          pN: kk,
          ...Xk.state,
          ...Rk
        };
        if (ak.pN = kk, Xk.multi) {
          var wk = bk.hash[kk];
          wk || (wk = [], bk.add(kk, wk)), wk.push(ak)
        } else bk.add(kk, ak);
        return Xk.Av && Xk.Av(kk, ak), this
      }, this.fkk = function(kk, Fk) {
        var Bk = tk[Fk];
        if (!Bk) throw new Error(`Unknown component: ${Fk}.`);
        return !!Bk.hash[kk]
      }, this.mH = function(Fk, Bk) {
        if (!tk[Bk]) throw new Error(`Unknown component: ${Bk}.`);
        return wk(Fk, Bk), kk
      }, this.getState = function(kk, Fk) {
        var Bk = tk[Fk];
        if (!Bk) throw new Error(`Unknown component: ${Fk}.`);
        return Bk.hash[kk]
      }, this.ZN = function(kk) {
        var Fk = tk[kk];
        if (!Fk) throw new Error(`Unknown component: ${kk}.`);
        return Vk(), Fk.list
      }, this.kFk = function(kk) {
        if (!tk[kk]) throw new Error(`Unknown component: ${kk}.`);
        var Fk = tk[kk].hash;
        return kk => Fk[kk]
      }, this.XFk = function(kk) {
        if (!tk[kk]) throw new Error(`Unknown component: ${kk}.`);
        var Fk = tk[kk].hash;
        return kk => !!Fk[kk]
      }, this.yJ = function(Bk) {
        Vk();
        for (var Rk = 0; Rk < ak.length; Rk++) {
          var Xk = ak[Rk],
            bk = Fk[Xk],
            wk = tk[Xk];
          bk.system(Bk, wk.list), Vk()
        }
        return kk
      }, this.render = function(Bk) {
        Vk();
        for (var Rk = 0; Rk < Xk.length; Rk++) {
          var ak = Xk[Rk],
            bk = Fk[ak],
            wk = tk[ak];
          bk.Dv(Bk, wk.list), Vk()
        }
        return kk
      }, this.removeMultiComponent = function(Bk, Rk, ak) {
        var Xk = Fk[Rk],
          wk = tk[Rk];
        if (!wk) throw new Error(`Unknown component: ${Rk}.`);
        if (!Xk.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(kk, Fk, Bk, Rk) {
          var tk = Bk.hash[kk];
          if (tk) {
            var ak = tk[Rk];
            ak && (tk[Rk] = null, Fk.yE && Fk.yE(kk, ak), bk.multiComps.push({
              entID: kk,
              data: Bk
            }), dk())
          }
        }(Bk, Xk, wk, ak), kk
      }
    };
    var Rk = Bk(37895)
  },
  37895: kk => {
    function Fk(kk, Fk) {
      var Bk = kk._map[Fk];
      if (delete kk.hash[Fk], delete kk._map[Fk], Bk === kk.list.length - 1) kk.list.pop(), kk._idList.pop();
      else {
        var Rk = kk.list.pop();
        kk.list[Bk] = Rk;
        var tk = kk._idList.pop();
        kk._idList[Bk] = tk, kk._map[tk] = Bk
      }
    }
    kk.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(kk, Fk) {
        if ("number" === typeof this._map[kk]) {
          var Bk = this._map[kk];
          this.hash[kk] = Fk, this.list[Bk] = Fk, this._idList[Bk] = kk
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
          var Bk = this._pendingRemovals[kk];
          null === this.hash[Bk] && Fk(this, Bk)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  37394: kk => {
    kk.exports = function(kk) {
      for (var Fk = new Array(kk), Bk = 0; Bk < kk; ++Bk) Fk[Bk] = Bk;
      return Fk
    }
  },
  37403: kk => {
    function Fk(kk) {
      return !!kk.constructor && "function" === typeof kk.constructor.isBuffer && kk.constructor.isBuffer(kk)
    }
    kk.exports = function(kk) {
      return null != kk && (Fk(kk) || function(kk) {
        return "function" === typeof kk.readFloatLE && "function" === typeof kk.slice && Fk(kk.slice(0, 0))
      }(kk) || !!kk._isBuffer)
    }
  },
  37721: (kk, Fk, Bk) => {
    kk = Bk.nmd(kk);
    var Rk = "__lodash_hash_undefined__",
      tk = 9007199254740991,
      ak = "[object Arguments]",
      Xk = "[object Boolean]",
      bk = "[object Date]",
      wk = "[object Function]",
      dk = "[object GeneratorFunction]",
      sk = "[object Map]",
      Vk = "[object Number]",
      Jk = "[object Object]",
      Ak = "[object Promise]",
      ek = "[object RegExp]",
      yk = "[object Set]",
      fk = "[object String]",
      mk = "[object Symbol]",
      Wk = "[object WeakMap]",
      vk = "[object ArrayBuffer]",
      ik = "[object DataView]",
      Yk = "[object Float32Array]",
      Lk = "[object Float64Array]",
      Ok = "[object Int8Array]",
      Ek = "[object Int16Array]",
      Sk = "[object Int32Array]",
      Nk = "[object Uint8Array]",
      Hk = "[object Uint8ClampedArray]",
      uk = "[object Uint16Array]",
      Mk = "[object Uint32Array]",
      gk = /\w*$/,
      Uk = /^\[object .+?Constructor\]$/,
      ck = /^(?:0|[1-9]\d*)$/,
      Gk = {};
    Gk[ak] = Gk["[object Array]"] = Gk[vk] = Gk[ik] = Gk[Xk] = Gk[bk] = Gk[Yk] = Gk[Lk] = Gk[Ok] = Gk[Ek] = Gk[Sk] = Gk[sk] = Gk[Vk] = Gk[Jk] = Gk[ek] = Gk[yk] = Gk[fk] = Gk[mk] = Gk[Nk] = Gk[Hk] = Gk[uk] = Gk[Mk] = !0, Gk["[object Error]"] = Gk[wk] = Gk[Wk] = !1;
    var Tk = "object" == typeof Bk.g && Bk.g && Bk.g.Object === Object && Bk.g,
      rk = "object" == typeof self && self && self.Object === Object && self,
      Dk = Tk || rk || Function("return this")(),
      zk = Fk && !Fk.nodeType && Fk,
      Pk = zk && kk && !kk.nodeType && kk,
      hk = Pk && Pk.exports === zk;

    function qk(kk, Fk) {
      return kk.set(Fk[0], Fk[1]), kk
    }

    function Ck(kk, Fk) {
      return kk.add(Fk), kk
    }

    function Zk(kk, Fk, Bk, Rk) {
      var tk = -1,
        ak = kk ? kk.length : 0;
      for (Rk && ak && (Bk = kk[++tk]); ++tk < ak;) Bk = Fk(Bk, kk[tk], tk, kk);
      return Bk
    }

    function pk(kk) {
      var Fk = !1;
      if (null != kk && "function" != typeof kk.toString) try {
        Fk = !!(kk + "")
      } catch (Bk) {}
      return Fk
    }

    function Kk(kk) {
      var Fk = -1,
        Bk = Array(kk.size);
      return kk.forEach((function(kk, Rk) {
        Bk[++Fk] = [Rk, kk]
      })), Bk
    }

    function xk(kk, Fk) {
      return function(Bk) {
        return kk(Fk(Bk))
      }
    }

    function jk(kk) {
      var Fk = -1,
        Bk = Array(kk.size);
      return kk.forEach((function(kk) {
        Bk[++Fk] = kk
      })), Bk
    }
    var lk = Array.prototype,
      nk = Function.prototype,
      Ik = Object.prototype,
      Qk = Dk["__core-js_shared__"],
      kF = function() {
        var kk = /[^.]+$/.exec(Qk && Qk.keys && Qk.keys.IE_PROTO || "");
        return kk ? "Symbol(src)_1." + kk : ""
      }(),
      FF = nk.toString,
      BF = Ik.hasOwnProperty,
      RF = Ik.toString,
      tF = RegExp("^" + FF.call(BF).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      aF = hk ? Dk.Ge : void 0,
      XF = Dk.Symbol,
      bF = Dk.Uint8Array,
      wF = xk(Object.getPrototypeOf, Object),
      dF = Object.create,
      sF = Ik.propertyIsEnumerable,
      VF = lk.splice,
      JF = Object.getOwnPropertySymbols,
      AF = aF ? aF.isBuffer : void 0,
      eF = xk(Object.keys, Object),
      yF = hF(Dk, "DataView"),
      fF = hF(Dk, "Map"),
      mF = hF(Dk, "Promise"),
      WF = hF(Dk, "Set"),
      vF = hF(Dk, "WeakMap"),
      iF = hF(Object, "create"),
      YF = KF(yF),
      oF = KF(fF),
      LF = KF(mF),
      OF = KF(WF),
      EF = KF(vF),
      SF = XF ? XF.prototype : void 0,
      NF = SF ? SF.valueOf : void 0;

    function HF(kk) {
      var Fk = -1,
        Bk = kk ? kk.length : 0;
      for (this.clear(); ++Fk < Bk;) {
        var Rk = kk[Fk];
        this.set(Rk[0], Rk[1])
      }
    }

    function uF(kk) {
      var Fk = -1,
        Bk = kk ? kk.length : 0;
      for (this.clear(); ++Fk < Bk;) {
        var Rk = kk[Fk];
        this.set(Rk[0], Rk[1])
      }
    }

    function MF(kk) {
      var Fk = -1,
        Bk = kk ? kk.length : 0;
      for (this.clear(); ++Fk < Bk;) {
        var Rk = kk[Fk];
        this.set(Rk[0], Rk[1])
      }
    }

    function gF(kk) {
      this.__data__ = new uF(kk)
    }

    function UF(kk, Fk) {
      var Bk = jF(kk) || function(kk) {
          return function(kk) {
            return function(kk) {
              return !!kk && "object" == typeof kk
            }(kk) && lF(kk)
          }(kk) && BF.call(kk, "callee") && (!sF.call(kk, "callee") || RF.call(kk) == ak)
        }(kk) ? function(kk, Fk) {
          for (var Bk = -1, Rk = Array(kk); ++Bk < kk;) Rk[Bk] = Fk(Bk);
          return Rk
        }(kk.length, String) : [],
        Rk = Bk.length,
        tk = !!Rk;
      for (var Xk in kk) !Fk && !BF.call(kk, Xk) || tk && ("length" == Xk || ZF(Xk, Rk)) || Bk.push(Xk);
      return Bk
    }

    function cF(kk, Fk, Bk) {
      var Rk = kk[Fk];
      BF.call(kk, Fk) && xF(Rk, Bk) && (void 0 !== Bk || Fk in kk) || (kk[Fk] = Bk)
    }

    function GF(kk, Fk) {
      for (var Bk = kk.length; Bk--;)
        if (xF(kk[Bk][0], Fk)) return Bk;
      return -1
    }

    function TF(kk, Fk, Bk, Rk, tk, Ak, Wk) {
      var Uk;
      if (Rk && (Uk = Ak ? Rk(kk, tk, Ak, Wk) : Rk(kk)), void 0 !== Uk) return Uk;
      if (!QF(kk)) return kk;
      var ck = jF(kk);
      if (ck) {
        if (Uk = function(kk) {
            var Fk = kk.length,
              Bk = kk.constructor(Fk);
            Fk && "string" == typeof kk[0] && BF.call(kk, "index") && (Bk.index = kk.index, Bk.input = kk.input);
            return Bk
          }(kk), !Fk) return function(kk, Fk) {
          var Bk = -1,
            Rk = kk.length;
          Fk || (Fk = Array(Rk));
          for (; ++Bk < Rk;) Fk[Bk] = kk[Bk];
          return Fk
        }(kk, Uk)
      } else {
        var Tk = CF(kk),
          rk = Tk == wk || Tk == dk;
        if (nF(kk)) return function(kk, Fk) {
          if (Fk) return kk.slice();
          var Bk = new kk.constructor(kk.length);
          return kk.copy(Bk), Bk
        }(kk, Fk);
        if (Tk == Jk || Tk == ak || rk && !Ak) {
          if (pk(kk)) return Ak ? kk : {};
          if (Uk = function(kk) {
              return "function" != typeof kk.constructor || pF(kk) ? {} : (Fk = wF(kk), QF(Fk) ? dF(Fk) : {});
              var Fk
            }(rk ? {} : kk), !Fk) return function(kk, Fk) {
            return zF(kk, qF(kk), Fk)
          }(kk, function(kk, Fk) {
            return kk && zF(Fk, kB(Fk), kk)
          }(Uk, kk))
        } else {
          if (!Gk[Tk]) return Ak ? kk : {};
          Uk = function(kk, Fk, Bk, Rk) {
            var tk = kk.constructor;
            switch (Fk) {
              case vk:
                return DF(kk);
              case Xk:
              case bk:
                return new tk(+kk);
              case ik:
                return function(kk, Fk) {
                  var Bk = Fk ? DF(kk.buffer) : kk.buffer;
                  return new kk.constructor(Bk, kk.byteOffset, kk.byteLength)
                }(kk, Rk);
              case Yk:
              case Lk:
              case Ok:
              case Ek:
              case Sk:
              case Nk:
              case Hk:
              case uk:
              case Mk:
                return function(kk, Fk) {
                  var Bk = Fk ? DF(kk.buffer) : kk.buffer;
                  return new kk.constructor(Bk, kk.byteOffset, kk.length)
                }(kk, Rk);
              case sk:
                return function(kk, Fk, Bk) {
                  var Rk = Fk ? Bk(Kk(kk), !0) : Kk(kk);
                  return Zk(Rk, qk, new kk.constructor)
                }(kk, Rk, Bk);
              case Vk:
              case fk:
                return new tk(kk);
              case ek:
                return function(kk) {
                  var Fk = new kk.constructor(kk.source, gk.exec(kk));
                  return Fk.lastIndex = kk.lastIndex, Fk
                }(kk);
              case yk:
                return function(kk, Fk, Bk) {
                  var Rk = Fk ? Bk(jk(kk), !0) : jk(kk);
                  return Zk(Rk, Ck, new kk.constructor)
                }(kk, Rk, Bk);
              case mk:
                return ak = kk, NF ? Object(NF.call(ak)) : {}
            }
            var ak
          }(kk, Tk, TF, Fk)
        }
      }
      Wk || (Wk = new gF);
      var Dk = Wk.get(kk);
      if (Dk) return Dk;
      if (Wk.set(kk, Uk), !ck) var zk = Bk ? function(kk) {
        return function(kk, Fk, Bk) {
          var Rk = Fk(kk);
          return jF(kk) ? Rk : function(kk, Fk) {
            for (var Bk = -1, Rk = Fk.length, tk = kk.length; ++Bk < Rk;) kk[tk + Bk] = Fk[Bk];
            return kk
          }(Rk, Bk(kk))
        }(kk, kB, qF)
      }(kk) : kB(kk);
      return function(kk, Fk) {
        for (var Bk = -1, Rk = kk ? kk.length : 0; ++Bk < Rk && !1 !== Fk(kk[Bk], Bk, kk););
      }(zk || kk, (function(tk, ak) {
        zk && (tk = kk[ak = tk]), cF(Uk, ak, TF(tk, Fk, Bk, Rk, ak, kk, Wk))
      })), Uk
    }

    function rF(kk) {
      return !(!QF(kk) || (Fk = kk, kF && kF in Fk)) && (IF(kk) || pk(kk) ? tF : Uk).test(KF(kk));
      var Fk
    }

    function DF(kk) {
      var Fk = new kk.constructor(kk.byteLength);
      return new bF(Fk).set(new bF(kk)), Fk
    }

    function zF(kk, Fk, Bk, Rk) {
      Bk || (Bk = {});
      for (var tk = -1, ak = Fk.length; ++tk < ak;) {
        var Xk = Fk[tk],
          bk = Rk ? Rk(Bk[Xk], kk[Xk], Xk, Bk, kk) : void 0;
        cF(Bk, Xk, void 0 === bk ? kk[Xk] : bk)
      }
      return Bk
    }

    function PF(kk, Fk) {
      var Bk = kk.__data__;
      return function(kk) {
        var Fk = typeof kk;
        return "string" == Fk || "number" == Fk || "symbol" == Fk || "boolean" == Fk ? "__proto__" !== kk : null === kk
      }(Fk) ? Bk["string" == typeof Fk ? "string" : "hash"] : Bk.map
    }

    function hF(kk, Fk) {
      var Bk = function(kk, Fk) {
        return null == kk ? void 0 : kk[Fk]
      }(kk, Fk);
      return rF(Bk) ? Bk : void 0
    }
    HF.prototype.clear = function() {
      this.__data__ = iF ? iF(null) : {}
    }, HF.prototype.delete = function(kk) {
      return this.has(kk) && delete this.__data__[kk]
    }, HF.prototype.get = function(kk) {
      var Fk = this.__data__;
      if (iF) {
        var Bk = Fk[kk];
        return Bk === Rk ? void 0 : Bk
      }
      return BF.call(Fk, kk) ? Fk[kk] : void 0
    }, HF.prototype.has = function(kk) {
      var Fk = this.__data__;
      return iF ? void 0 !== Fk[kk] : BF.call(Fk, kk)
    }, HF.prototype.set = function(kk, Fk) {
      return this.__data__[kk] = iF && void 0 === Fk ? Rk : Fk, this
    }, uF.prototype.clear = function() {
      this.__data__ = []
    }, uF.prototype.delete = function(kk) {
      var Fk = this.__data__,
        Bk = GF(Fk, kk);
      return !(Bk < 0) && (Bk == Fk.length - 1 ? Fk.pop() : VF.call(Fk, Bk, 1), !0)
    }, uF.prototype.get = function(kk) {
      var Fk = this.__data__,
        Bk = GF(Fk, kk);
      return Bk < 0 ? void 0 : Fk[Bk][1]
    }, uF.prototype.has = function(kk) {
      return GF(this.__data__, kk) > -1
    }, uF.prototype.set = function(kk, Fk) {
      var Bk = this.__data__,
        Rk = GF(Bk, kk);
      return Rk < 0 ? Bk.push([kk, Fk]) : Bk[Rk][1] = Fk, this
    }, MF.prototype.clear = function() {
      this.__data__ = {
        hash: new HF,
        map: new(fF || uF),
        string: new HF
      }
    }, MF.prototype.delete = function(kk) {
      return PF(this, kk).delete(kk)
    }, MF.prototype.get = function(kk) {
      return PF(this, kk).get(kk)
    }, MF.prototype.has = function(kk) {
      return PF(this, kk).has(kk)
    }, MF.prototype.set = function(kk, Fk) {
      return PF(this, kk).set(kk, Fk), this
    }, gF.prototype.clear = function() {
      this.__data__ = new uF
    }, gF.prototype.delete = function(kk) {
      return this.__data__.delete(kk)
    }, gF.prototype.get = function(kk) {
      return this.__data__.get(kk)
    }, gF.prototype.has = function(kk) {
      return this.__data__.has(kk)
    }, gF.prototype.set = function(kk, Fk) {
      var Bk = this.__data__;
      if (Bk instanceof uF) {
        var Rk = Bk.__data__;
        if (!fF || Rk.length < 199) return Rk.push([kk, Fk]), this;
        Bk = this.__data__ = new MF(Rk)
      }
      return Bk.set(kk, Fk), this
    };
    var qF = JF ? xk(JF, Object) : function() {
        return []
      },
      CF = function(kk) {
        return RF.call(kk)
      };

    function ZF(kk, Fk) {
      return !!(Fk = null == Fk ? tk : Fk) && ("number" == typeof kk || ck.test(kk)) && kk > -1 && kk % 1 == 0 && kk < Fk
    }

    function pF(kk) {
      var Fk = kk && kk.constructor;
      return kk === ("function" == typeof Fk && Fk.prototype || Ik)
    }

    function KF(kk) {
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

    function xF(kk, Fk) {
      return kk === Fk || kk !== kk && Fk !== Fk
    }(yF && CF(new yF(new ArrayBuffer(1))) != ik || fF && CF(new fF) != sk || mF && CF(mF.resolve()) != Ak || WF && CF(new WF) != yk || vF && CF(new vF) != Wk) && (CF = function(kk) {
      var Fk = RF.call(kk),
        Bk = Fk == Jk ? kk.constructor : void 0,
        Rk = Bk ? KF(Bk) : void 0;
      if (Rk) switch (Rk) {
        case YF:
          return ik;
        case oF:
          return sk;
        case LF:
          return Ak;
        case OF:
          return yk;
        case EF:
          return Wk
      }
      return Fk
    });
    var jF = Array.isArray;

    function lF(kk) {
      return null != kk && function(kk) {
        return "number" == typeof kk && kk > -1 && kk % 1 == 0 && kk <= tk
      }(kk.length) && !IF(kk)
    }
    var nF = AF || function() {
      return !1
    };

    function IF(kk) {
      var Fk = QF(kk) ? RF.call(kk) : "";
      return Fk == wk || Fk == dk
    }

    function QF(kk) {
      var Fk = typeof kk;
      return !!kk && ("object" == Fk || "function" == Fk)
    }

    function kB(kk) {
      return lF(kk) ? UF(kk) : function(kk) {
        if (!pF(kk)) return eF(kk);
        var Fk = [];
        for (var Bk in Object(kk)) BF.call(kk, Bk) && "constructor" != Bk && Fk.push(Bk);
        return Fk
      }(kk)
    }
    kk.exports = function(kk) {
      return TF(kk, !0, !0)
    }
  },
  37391: (kk, Fk, Bk) => {
    var Rk = Bk(37394),
      tk = Bk(37403),
      ak = "undefined" !== typeof Float64Array;

    function Xk(kk, Fk) {
      return kk[0] - Fk[0]
    }

    function bk() {
      var kk, Fk = this.stride,
        Bk = new Array(Fk.length);
      for (kk = 0; kk < Bk.length; ++kk) Bk[kk] = [Math.abs(Fk[kk]), kk];
      Bk.sort(Xk);
      var Rk = new Array(Bk.length);
      for (kk = 0; kk < Rk.length; ++kk) Rk[kk] = Bk[kk][1];
      return Rk
    }

    function wk(kk, Fk) {
      var Bk = ["View", Fk, "d", kk].join("");
      Fk < 0 && (Bk = "View_Nil" + kk);
      var tk = "generic" === kk;
      if (-1 === Fk) {
        var ak = "function " + Bk + "(a){this.data=a;};var proto=" + Bk + ".prototype;proto.dtype='" + kk + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + Bk + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + Bk + "(a){return new " + Bk + "(a);}";
        return new Function(ak)()
      }
      if (0 === Fk) {
        ak = "function " + Bk + "(a,d) {this.data = a;this.offset = d};var proto=" + Bk + ".prototype;proto.dtype='" + kk + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + Bk + "_copy() {return new " + Bk + "(this.data,this.offset)};proto.pick=function " + Bk + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + Bk + "_get(){return " + (tk ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + Bk + "_set(v){return " + (tk ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + Bk + "(a,b,c,d){return new " + Bk + "(a,d)}";
        return new Function("TrivialArray", ak)(dk[kk][0])
      }
      ak = ["'use strict'"];
      var Xk = Rk(Fk),
        wk = Xk.map((function(kk) {
          return "i" + kk
        })),
        sk = "this.offset+" + Xk.map((function(kk) {
          return "this.stride[" + kk + "]*i" + kk
        })).join("+"),
        Vk = Xk.map((function(kk) {
          return "b" + kk
        })).join(","),
        Jk = Xk.map((function(kk) {
          return "c" + kk
        })).join(",");
      ak.push("function " + Bk + "(a," + Vk + "," + Jk + ",d){this.data=a", "this.shape=[" + Vk + "]", "this.stride=[" + Jk + "]", "this.offset=d|0}", "var proto=" + Bk + ".prototype", "proto.dtype='" + kk + "'", "proto.dimension=" + Fk), ak.push("Object.defineProperty(proto,'size',{get:function " + Bk + "_size(){return " + Xk.map((function(kk) {
        return "this.shape[" + kk + "]"
      })).join("*"), "}})"), 1 === Fk ? ak.push("proto.order=[0]") : (ak.push("Object.defineProperty(proto,'order',{get:"), Fk < 4 ? (ak.push("function " + Bk + "_order(){"), 2 === Fk ? ak.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === Fk && ak.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : ak.push("ORDER})")), ak.push("proto.set=function " + Bk + "_set(" + wk.join(",") + ",v){"), tk ? ak.push("return this.data.set(" + sk + ",v)}") : ak.push("return this.data[" + sk + "]=v}"), ak.push("proto.get=function " + Bk + "_get(" + wk.join(",") + "){"), tk ? ak.push("return this.data.get(" + sk + ")}") : ak.push("return this.data[" + sk + "]}"), ak.push("proto.index=function " + Bk + "_index(", wk.join(), "){return " + sk + "}"), ak.push("proto.hi=function " + Bk + "_hi(" + wk.join(",") + "){return new " + Bk + "(this.data," + Xk.map((function(kk) {
        return ["(typeof i", kk, "!=='number'||i", kk, "<0)?this.shape[", kk, "]:i", kk, "|0"].join("")
      })).join(",") + "," + Xk.map((function(kk) {
        return "this.stride[" + kk + "]"
      })).join(",") + ",this.offset)}");
      var Ak = Xk.map((function(kk) {
          return "a" + kk + "=this.shape[" + kk + "]"
        })),
        ek = Xk.map((function(kk) {
          return "c" + kk + "=this.stride[" + kk + "]"
        }));
      ak.push("proto.lo=function " + Bk + "_lo(" + wk.join(",") + "){var b=this.offset,d=0," + Ak.join(",") + "," + ek.join(","));
      for (var yk = 0; yk < Fk; ++yk) ak.push("if(typeof i" + yk + "==='number'&&i" + yk + ">=0){d=i" + yk + "|0;b+=c" + yk + "*d;a" + yk + "-=d}");
      ak.push("return new " + Bk + "(this.data," + Xk.map((function(kk) {
        return "a" + kk
      })).join(",") + "," + Xk.map((function(kk) {
        return "c" + kk
      })).join(",") + ",b)}"), ak.push("proto.step=function " + Bk + "_step(" + wk.join(",") + "){var " + Xk.map((function(kk) {
        return "a" + kk + "=this.shape[" + kk + "]"
      })).join(",") + "," + Xk.map((function(kk) {
        return "b" + kk + "=this.stride[" + kk + "]"
      })).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
      for (yk = 0; yk < Fk; ++yk) ak.push("if(typeof i" + yk + "==='number'){d=i" + yk + "|0;if(d<0){c+=b" + yk + "*(a" + yk + "-1);a" + yk + "=ceil(-a" + yk + "/d)}else{a" + yk + "=ceil(a" + yk + "/d)}b" + yk + "*=d}");
      ak.push("return new " + Bk + "(this.data," + Xk.map((function(kk) {
        return "a" + kk
      })).join(",") + "," + Xk.map((function(kk) {
        return "b" + kk
      })).join(",") + ",c)}");
      var fk = new Array(Fk),
        mk = new Array(Fk);
      for (yk = 0; yk < Fk; ++yk) fk[yk] = "a[i" + yk + "]", mk[yk] = "b[i" + yk + "]";
      ak.push("proto.transpose=function " + Bk + "_transpose(" + wk + "){" + wk.map((function(kk, Fk) {
        return kk + "=(" + kk + "===undefined?" + Fk + ":" + kk + "|0)"
      })).join(";"), "var a=this.shape,b=this.stride;return new " + Bk + "(this.data," + fk.join(",") + "," + mk.join(",") + ",this.offset)}"), ak.push("proto.pick=function " + Bk + "_pick(" + wk + "){var a=[],b=[],c=this.offset");
      for (yk = 0; yk < Fk; ++yk) ak.push("if(typeof i" + yk + "==='number'&&i" + yk + ">=0){c=(c+this.stride[" + yk + "]*i" + yk + ")|0}else{a.push(this.shape[" + yk + "]);b.push(this.stride[" + yk + "])}");
      return ak.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), ak.push("return function construct_" + Bk + "(data,shape,stride,offset){return new " + Bk + "(data," + Xk.map((function(kk) {
        return "shape[" + kk + "]"
      })).join(",") + "," + Xk.map((function(kk) {
        return "stride[" + kk + "]"
      })).join(",") + ",offset)}"), new Function("CTOR_LIST", "ORDER", ak.join("\n"))(dk[kk], bk)
    }
    var dk = {
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
    kk.exports = function(kk, Fk, Bk, Rk) {
      if (void 0 === kk) return (0, dk.array[0])([]);
      "number" === typeof kk && (kk = [kk]), void 0 === Fk && (Fk = [kk.length]);
      var Xk = Fk.length;
      if (void 0 === Bk) {
        Bk = new Array(Xk);
        for (var bk = Xk - 1, sk = 1; bk >= 0; --bk) Bk[bk] = sk, sk *= Fk[bk]
      }
      if (void 0 === Rk) {
        Rk = 0;
        for (bk = 0; bk < Xk; ++bk) Bk[bk] < 0 && (Rk -= (Fk[bk] - 1) * Bk[bk])
      }
      for (var Vk = function(kk) {
          if (tk(kk)) return "buffer";
          if (ak) switch (Object.prototype.toString.call(kk)) {
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
          return Array.isArray(kk) ? "array" : "generic"
        }(kk), Jk = dk[Vk]; Jk.length <= Xk + 1;) Jk.push(wk(Vk, Jk.length - 1));
      return (0, Jk[Xk + 1])(kk, Fk, Bk, Rk)
    }
  },
  38098: kk => {
    function Fk(kk, Fk, Bk) {
      for (var Rk = kk.length, tk = -1 / 0, ak = 1 / 0, Xk = 0; Xk < Rk; Xk++) {
        var bk = (Bk[0][Xk] - kk[Xk]) / Fk[Xk],
          wk = (Bk[1][Xk] - kk[Xk]) / Fk[Xk];
        if (bk > wk) {
          var dk = bk;
          bk = wk, wk = dk
        }
        if (wk < tk || bk > ak) return 1 / 0;
        bk > tk && (tk = bk), wk < ak && (ak = wk)
      }
      return tk > ak ? 1 / 0 : tk
    }
    kk.exports = function(kk, Bk, Rk, tk) {
      var ak = Fk(Bk, Rk, tk);
      if (ak === 1 / 0) kk = null;
      else {
        kk = kk || [];
        for (var Xk = 0; Xk < Bk.length; Xk++) kk[Xk] = Bk[Xk] + Rk[Xk] * ak
      }
      return kk
    }, kk.exports.distance = Fk
  },
  37413: (kk, Fk, Bk) => {
    var Rk = Bk(37421);

    function tk(kk) {
      for (var Fk, Bk, tk = 0, ak = kk.length, Xk = 0; Xk < kk.length;) {
        for (Fk = kk[Xk], Bk = 0; Xk < ak && kk[Xk] === Fk;) ++Xk, ++Bk;
        tk += Rk.log2(Bk) / 7 | 0, tk += Rk.log2(Fk >>> 0) / 7 | 0, tk += 2
      }
      return tk
    }
    Fk.size = tk, Fk.encode = function(kk, Fk) {
      Fk || (Fk = new Uint8Array(tk(kk)));
      for (var Bk, Rk, ak = 0, Xk = Fk.length, bk = 0; bk < kk.length;) {
        for (Bk = kk[bk], Rk = 0; bk < kk.length && kk[bk] === Bk;) ++bk, ++Rk;
        for (; ak < Xk && Rk >= 128;) Fk[ak++] = 128 + (127 & Rk), Rk >>>= 7;
        if (ak >= Xk) throw new Error("RLE buffer overflow");
        for (Fk[ak++] = Rk, Bk >>>= 0; ak < Xk && Bk >= 128;) Fk[ak++] = 128 + (127 & Bk), Bk >>>= 7;
        if (ak >= Xk) throw new Error("RLE buffer overflow");
        Fk[ak++] = Bk
      }
      return Fk
    }, Fk.decode = function(kk, Fk) {
      for (var Bk, Rk, tk, ak, Xk = Fk.length, bk = kk.length, wk = 0, dk = 0; dk < bk;) {
        for (Bk = 0, Rk = 0; dk < bk && kk[dk] >= 128;) Bk += (127 & kk[dk++]) << Rk, Rk += 7;
        if (Bk += kk[dk++] << Rk, dk >= bk) throw new Error("RLE buffer underrun");
        if (wk + Bk > Xk) throw new Error("Chunk buffer overflow");
        for (tk = 0, Rk = 0; dk < bk && kk[dk] >= 128;) tk += (127 & kk[dk++]) << Rk, Rk += 7;
        if (dk >= bk) throw new Error("RLE buffer underrun");
        for (tk += kk[dk++] << Rk, ak = 0; ak < Bk; ++ak) Fk[wk++] = tk
      }
      return Fk
    }
  },
  37421: (kk, Fk) => {
    function Bk(kk) {
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
      var Fk, Bk;
      return Fk = (kk > 65535) << 4, Fk |= Bk = ((kk >>>= Fk) > 255) << 3, Fk |= Bk = ((kk >>>= Bk) > 15) << 2, (Fk |= Bk = ((kk >>>= Bk) > 3) << 1) | (kk >>>= Bk) >> 1
    }, Fk.log10 = function(kk) {
      return kk >= 1e9 ? 9 : kk >= 1e8 ? 8 : kk >= 1e7 ? 7 : kk >= 1e6 ? 6 : kk >= 1e5 ? 5 : kk >= 1e4 ? 4 : kk >= 1e3 ? 3 : kk >= 100 ? 2 : kk >= 10 ? 1 : 0
    }, Fk.popCount = function(kk) {
      return 16843009 * ((kk = (858993459 & (kk -= kk >>> 1 & 1431655765)) + (kk >>> 2 & 858993459)) + (kk >>> 4) & 252645135) >>> 24
    }, Fk.countTrailingZeros = Bk, Fk.nextPow2 = function(kk) {
      return kk += 0 === kk, --kk, kk |= kk >>> 1, kk |= kk >>> 2, kk |= kk >>> 4, kk |= kk >>> 8, (kk |= kk >>> 16) + 1
    }, Fk.prevPow2 = function(kk) {
      return kk |= kk >>> 1, kk |= kk >>> 2, kk |= kk >>> 4, kk |= kk >>> 8, (kk |= kk >>> 16) - (kk >>> 1)
    }, Fk.parity = function(kk) {
      return kk ^= kk >>> 16, kk ^= kk >>> 8, kk ^= kk >>> 4, 27030 >>> (kk &= 15) & 1
    };
    var Rk = new Array(256);
    ! function(kk) {
      for (var Fk = 0; Fk < 256; ++Fk) {
        var Bk = Fk,
          Rk = Fk,
          tk = 7;
        for (Bk >>>= 1; Bk; Bk >>>= 1) Rk <<= 1, Rk |= 1 & Bk, --tk;
        kk[Fk] = Rk << tk & 255
      }
    }(Rk), Fk.reverse = function(kk) {
      return Rk[255 & kk] << 24 | Rk[kk >>> 8 & 255] << 16 | Rk[kk >>> 16 & 255] << 8 | Rk[kk >>> 24 & 255]
    }, Fk.interleave2 = function(kk, Fk) {
      return (kk = 1431655765 & ((kk = 858993459 & ((kk = 252645135 & ((kk = 16711935 & ((kk &= 65535) | kk << 8)) | kk << 4)) | kk << 2)) | kk << 1)) | (Fk = 1431655765 & ((Fk = 858993459 & ((Fk = 252645135 & ((Fk = 16711935 & ((Fk &= 65535) | Fk << 8)) | Fk << 4)) | Fk << 2)) | Fk << 1)) << 1
    }, Fk.deinterleave2 = function(kk, Fk) {
      return (kk = 65535 & ((kk = 16711935 & ((kk = 252645135 & ((kk = 858993459 & ((kk = kk >>> Fk & 1431655765) | kk >>> 1)) | kk >>> 2)) | kk >>> 4)) | kk >>> 16)) << 16 >> 16
    }, Fk.interleave3 = function(kk, Fk, Bk) {
      return kk = 1227133513 & ((kk = 3272356035 & ((kk = 251719695 & ((kk = 4278190335 & ((kk &= 1023) | kk << 16)) | kk << 8)) | kk << 4)) | kk << 2), (kk |= (Fk = 1227133513 & ((Fk = 3272356035 & ((Fk = 251719695 & ((Fk = 4278190335 & ((Fk &= 1023) | Fk << 16)) | Fk << 8)) | Fk << 4)) | Fk << 2)) << 1) | (Bk = 1227133513 & ((Bk = 3272356035 & ((Bk = 251719695 & ((Bk = 4278190335 & ((Bk &= 1023) | Bk << 16)) | Bk << 8)) | Bk << 4)) | Bk << 2)) << 2
    }, Fk.deinterleave3 = function(kk, Fk) {
      return (kk = 1023 & ((kk = 4278190335 & ((kk = 251719695 & ((kk = 3272356035 & ((kk = kk >>> Fk & 1227133513) | kk >>> 2)) | kk >>> 4)) | kk >>> 8)) | kk >>> 16)) << 22 >> 22
    }, Fk.nextCombination = function(kk) {
      var Fk = kk | kk - 1;
      return Fk + 1 | (~Fk & -~Fk) - 1 >>> Bk(kk) + 1
    }
  },
  36911: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      Color3: () => Rk.e,
      c: () => Rk.i
    });
    var Rk = Bk(36917);
    (0, Rk.j)()
  },
  37459: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk
    });
    var Rk = Bk(37467);
    class tk {
      static GetPlanes(kk) {
        const Fk = [];
        for (let Bk = 0; Bk < 6; Bk++) Fk.push(new Rk.c(0, 0, 0, 0));
        return tk.GetPlanesToRef(kk, Fk), Fk
      }
      static GetNearPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] + Bk[2], Fk.normal.y = Bk[7] + Bk[6], Fk.normal.z = Bk[11] + Bk[10], Fk.d = Bk[15] + Bk[14], Fk.normalize()
      }
      static GetFarPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] - Bk[2], Fk.normal.y = Bk[7] - Bk[6], Fk.normal.z = Bk[11] - Bk[10], Fk.d = Bk[15] - Bk[14], Fk.normalize()
      }
      static GetLeftPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] + Bk[0], Fk.normal.y = Bk[7] + Bk[4], Fk.normal.z = Bk[11] + Bk[8], Fk.d = Bk[15] + Bk[12], Fk.normalize()
      }
      static GetRightPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] - Bk[0], Fk.normal.y = Bk[7] - Bk[4], Fk.normal.z = Bk[11] - Bk[8], Fk.d = Bk[15] - Bk[12], Fk.normalize()
      }
      static GetTopPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] - Bk[1], Fk.normal.y = Bk[7] - Bk[5], Fk.normal.z = Bk[11] - Bk[9], Fk.d = Bk[15] - Bk[13], Fk.normalize()
      }
      static GetBottomPlaneToRef(kk, Fk) {
        const Bk = kk.m;
        Fk.normal.x = Bk[3] + Bk[1], Fk.normal.y = Bk[7] + Bk[5], Fk.normal.z = Bk[11] + Bk[9], Fk.d = Bk[15] + Bk[13], Fk.normalize()
      }
      static GetPlanesToRef(kk, Fk) {
        tk.GetNearPlaneToRef(kk, Fk[0]), tk.GetFarPlaneToRef(kk, Fk[1]), tk.GetLeftPlaneToRef(kk, Fk[2]), tk.GetRightPlaneToRef(kk, Fk[3]), tk.GetTopPlaneToRef(kk, Fk[4]), tk.GetBottomPlaneToRef(kk, Fk[5])
      }
      static IsPointInFrustum(kk, Fk) {
        for (let Bk = 0; Bk < 6; Bk++)
          if (Fk[Bk].dotCoordinate(kk) < 0) return !1;
        return !0
      }
    }
  },
  37467: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk
    });
    var Rk = Bk(36758);
    class tk {
      constructor(kk, Fk, Bk, tk) {
        this.normal = new Rk.s(kk, Fk, Bk), this.d = tk
      }
      PBk() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new tk(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        const Fk = tk._TmpMatrix;
        kk.invertToRef(Fk);
        const Bk = Fk.m,
          Rk = this.normal.x,
          ak = this.normal.y,
          Xk = this.normal.z,
          bk = this.d,
          wk = Rk * Bk[0] + ak * Bk[1] + Xk * Bk[2] + bk * Bk[3],
          dk = Rk * Bk[4] + ak * Bk[5] + Xk * Bk[6] + bk * Bk[7],
          sk = Rk * Bk[8] + ak * Bk[9] + Xk * Bk[10] + bk * Bk[11],
          Vk = Rk * Bk[12] + ak * Bk[13] + Xk * Bk[14] + bk * Bk[15];
        return new tk(wk, dk, sk, Vk)
      }
      dotCoordinate(kk) {
        return this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z + this.d
      }
      copyFromPoints(kk, Fk, Bk) {
        const Rk = Fk.x - kk.x,
          tk = Fk.y - kk.y,
          ak = Fk.z - kk.z,
          Xk = Bk.x - kk.x,
          bk = Bk.y - kk.y,
          wk = Bk.z - kk.z,
          dk = tk * wk - ak * bk,
          sk = ak * Xk - Rk * wk,
          Vk = Rk * bk - tk * Xk,
          Jk = Math.sqrt(dk * dk + sk * sk + Vk * Vk);
        let Ak;
        return Ak = 0 !== Jk ? 1 / Jk : 0, this.normal.x = dk * Ak, this.normal.y = sk * Ak, this.normal.z = Vk * Ak, this.d = -(this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z), this
      }
      isFrontFacingTo(kk, Fk) {
        return Rk.s.Dot(this.normal, kk) <= Fk
      }
      signedDistanceTo(kk) {
        return Rk.s.Dot(kk, this.normal) + this.d
      }
      static FromArray(kk) {
        return new tk(kk[0], kk[1], kk[2], kk[3])
      }
      static FromPoints(kk, Fk, Bk) {
        const Rk = new tk(0, 0, 0, 0);
        return Rk.copyFromPoints(kk, Fk, Bk), Rk
      }
      static FromPositionAndNormal(kk, Fk) {
        const Bk = new tk(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(kk, Fk, Bk)
      }
      static FromPositionAndNormalToRef(kk, Fk, Bk) {
        return Bk.normal.sBk(Fk), Bk.normal.normalize(), Bk.d = -kk.dot(Bk.normal), Bk
      }
      static SignedDistanceToPlaneFromPositionAndNormal(kk, Fk, Bk) {
        const tk = -(Fk.x * kk.x + Fk.y * kk.y + Fk.z * kk.z);
        return Rk.s.Dot(Bk, Fk) + tk
      }
    }
    tk._TmpMatrix = Rk.c.Identity()
  },
  36754: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      Matrix: () => Rk.c,
      Quaternion: () => Rk.e,
      RegisterMathVector: () => Rk.i,
      TmpVectors: () => Rk.l,
      Vector2: () => Rk.p,
      Qe: () => Rk.s,
      Vector4: () => Rk.v
    });
    var Rk = Bk(36758);
    (0, Rk.i)()
  },
  37759: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => Rk
    });
    class Rk {
      constructor(kk, Fk, Bk, Rk) {
        this.x = kk, this.y = Fk, this.width = Bk, this.height = Rk
      }
      toGlobal(kk, Fk) {
        return new Rk(this.x * kk, this.y * Fk, this.width * kk, this.height * Fk)
      }
      toGlobalToRef(kk, Fk, Bk) {
        return Bk.x = this.x * kk, Bk.y = this.y * Fk, Bk.width = this.width * kk, Bk.height = this.height * Fk, this
      }
      clone() {
        return new Rk(this.x, this.y, this.width, this.height)
      }
    }
  },
  37578: (kk, Fk, Bk) => {
    function Rk() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (kk => {
        const Fk = 16 * Math.random() | 0;
        return ("x" === kk ? Fk : 3 & Fk | 8).toString(16)
      }))
    }
    Bk.d(Fk, {
      e: () => Rk
    })
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);