/*! For license information please see qepqb8.223.8c62da95.chunk.js.LICENSE.txt */
export const id = 223;
export const ids = [223, 230];
export const modules = {
  37834: vv => {
    vv.exports = function(vv) {
      return null != vv && null != vv.constructor && "function" === typeof vv.constructor.isBuffer && vv.constructor.isBuffer(vv)
    }
  },
  37816: (vv, zv, Pv) => {
    var hv = Pv(37825),
      Sv = Pv(37832),
      ev = Pv(37834);
    Pv.g.__TYPEDARRAY_POOL || (Pv.g.__TYPEDARRAY_POOL = {
      UINT8: Sv([32, 0]),
      UINT16: Sv([32, 0]),
      UINT32: Sv([32, 0]),
      INT8: Sv([32, 0]),
      INT16: Sv([32, 0]),
      INT32: Sv([32, 0]),
      FLOAT: Sv([32, 0]),
      DOUBLE: Sv([32, 0]),
      DATA: Sv([32, 0]),
      UINT8C: Sv([32, 0]),
      BUFFER: Sv([32, 0])
    });
    var gv = "undefined" !== typeof Uint8ClampedArray,
      pv = Pv.g.__TYPEDARRAY_POOL;
    pv.UINT8C || (pv.UINT8C = Sv([32, 0])), pv.BUFFER || (pv.BUFFER = Sv([32, 0]));
    var dv = pv.DATA,
      Nv = pv.BUFFER;

    function lv(vv) {
      if (vv) {
        var zv = vv.length || vv.byteLength,
          Pv = hv.log2(zv);
        dv[Pv].push(vv)
      }
    }

    function Tv(vv) {
      vv = hv.nextPow2(vv);
      var zv = hv.log2(vv),
        Pv = dv[zv];
      return Pv.length > 0 ? Pv.pop() : new ArrayBuffer(vv)
    }

    function Wv(vv) {
      return new Uint8Array(Tv(vv), 0, vv)
    }

    function wv(vv) {
      return new Uint16Array(Tv(2 * vv), 0, vv)
    }

    function av(vv) {
      return new Uint32Array(Tv(4 * vv), 0, vv)
    }

    function sv(vv) {
      return new Int8Array(Tv(vv), 0, vv)
    }

    function Cv(vv) {
      return new Int16Array(Tv(2 * vv), 0, vv)
    }

    function iv(vv) {
      return new Int32Array(Tv(4 * vv), 0, vv)
    }

    function cv(vv) {
      return new Float32Array(Tv(4 * vv), 0, vv)
    }

    function Gv(vv) {
      return new Float64Array(Tv(8 * vv), 0, vv)
    }

    function mv(vv) {
      return gv ? new Uint8ClampedArray(Tv(vv), 0, vv) : Wv(vv)
    }

    function jv(vv) {
      return new DataView(Tv(vv), 0, vv)
    }
    zv.free = function(vv) {
      if (ev(vv)) Nv[hv.log2(vv.length)].push(vv);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(vv) && (vv = vv.buffer), !vv) return;
        var zv = vv.length || vv.byteLength,
          Pv = 0 | hv.log2(zv);
        dv[Pv].push(vv)
      }
    }, zv.freeUint8 = zv.freeUint16 = zv.freeUint32 = zv.freeInt8 = zv.freeInt16 = zv.freeInt32 = zv.freeFloat32 = zv.freeFloat = zv.freeFloat64 = zv.freeDouble = zv.freeUint8Clamped = zv.freeDataView = function(vv) {
      lv(vv.buffer)
    }, zv.freeArrayBuffer = lv, zv.freeBuffer = function(vv) {
      Nv[hv.log2(vv.length)].push(vv)
    }, zv.malloc = function(vv, zv) {
      if (void 0 === zv || "arraybuffer" === zv) return Tv(vv);
      switch (zv) {
        case "uint8":
          return Wv(vv);
        case "uint16":
          return wv(vv);
        case "uint32":
          return av(vv);
        case "int8":
          return sv(vv);
        case "int16":
          return Cv(vv);
        case "int32":
          return iv(vv);
        case "float":
        case "float32":
          return cv(vv);
        case "double":
        case "float64":
          return Gv(vv);
        case "uint8_clamped":
          return mv(vv);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return jv(vv);
        default:
          return null
      }
      return null
    }, zv.mallocArrayBuffer = Tv, zv.mallocUint8 = Wv, zv.mallocUint16 = wv, zv.mallocUint32 = av, zv.mallocInt8 = sv, zv.mallocInt16 = Cv, zv.mallocInt32 = iv, zv.mallocFloat32 = zv.mallocFloat = cv, zv.mallocFloat64 = zv.mallocDouble = Gv, zv.mallocUint8Clamped = mv, zv.mallocDataView = jv, zv.clearCache = function() {
      for (var vv = 0; vv < 32; ++vv) pv.UINT8[vv].length = 0, pv.UINT16[vv].length = 0, pv.UINT32[vv].length = 0, pv.INT8[vv].length = 0, pv.INT16[vv].length = 0, pv.INT32[vv].length = 0, pv.FLOAT[vv].length = 0, pv.DOUBLE[vv].length = 0, pv.UINT8C[vv].length = 0, dv[vv].length = 0, Nv[vv].length = 0
    }
  },
  37825: (vv, zv) => {
    function Pv(vv) {
      var zv = 32;
      return (vv &= -vv) && zv--, 65535 & vv && (zv -= 16), 16711935 & vv && (zv -= 8), 252645135 & vv && (zv -= 4), 858993459 & vv && (zv -= 2), 1431655765 & vv && (zv -= 1), zv
    }
    zv.INT_BITS = 32, zv.INT_MAX = 2147483647, zv.INT_MIN = -1 << 31, zv.sign = function(vv) {
      return (vv > 0) - (vv < 0)
    }, zv.abs = function(vv) {
      var zv = vv >> 31;
      return (vv ^ zv) - zv
    }, zv.min = function(vv, zv) {
      return zv ^ (vv ^ zv) & -(vv < zv)
    }, zv.max = function(vv, zv) {
      return vv ^ (vv ^ zv) & -(vv < zv)
    }, zv.isPow2 = function(vv) {
      return !(vv & vv - 1) && !!vv
    }, zv.log2 = function(vv) {
      var zv, Pv;
      return zv = (vv > 65535) << 4, zv |= Pv = ((vv >>>= zv) > 255) << 3, zv |= Pv = ((vv >>>= Pv) > 15) << 2, (zv |= Pv = ((vv >>>= Pv) > 3) << 1) | (vv >>>= Pv) >> 1
    }, zv.log10 = function(vv) {
      return vv >= 1e9 ? 9 : vv >= 1e8 ? 8 : vv >= 1e7 ? 7 : vv >= 1e6 ? 6 : vv >= 1e5 ? 5 : vv >= 1e4 ? 4 : vv >= 1e3 ? 3 : vv >= 100 ? 2 : vv >= 10 ? 1 : 0
    }, zv.popCount = function(vv) {
      return 16843009 * ((vv = (858993459 & (vv -= vv >>> 1 & 1431655765)) + (vv >>> 2 & 858993459)) + (vv >>> 4) & 252645135) >>> 24
    }, zv.countTrailingZeros = Pv, zv.nextPow2 = function(vv) {
      return vv += 0 === vv, --vv, vv |= vv >>> 1, vv |= vv >>> 2, vv |= vv >>> 4, vv |= vv >>> 8, (vv |= vv >>> 16) + 1
    }, zv.prevPow2 = function(vv) {
      return vv |= vv >>> 1, vv |= vv >>> 2, vv |= vv >>> 4, vv |= vv >>> 8, (vv |= vv >>> 16) - (vv >>> 1)
    }, zv.parity = function(vv) {
      return vv ^= vv >>> 16, vv ^= vv >>> 8, vv ^= vv >>> 4, 27030 >>> (vv &= 15) & 1
    };
    var hv = new Array(256);
    ! function(vv) {
      for (var zv = 0; zv < 256; ++zv) {
        var Pv = zv,
          hv = zv,
          Sv = 7;
        for (Pv >>>= 1; Pv; Pv >>>= 1) hv <<= 1, hv |= 1 & Pv, --Sv;
        vv[zv] = hv << Sv & 255
      }
    }(hv), zv.reverse = function(vv) {
      return hv[255 & vv] << 24 | hv[vv >>> 8 & 255] << 16 | hv[vv >>> 16 & 255] << 8 | hv[vv >>> 24 & 255]
    }, zv.interleave2 = function(vv, zv) {
      return (vv = 1431655765 & ((vv = 858993459 & ((vv = 252645135 & ((vv = 16711935 & ((vv &= 65535) | vv << 8)) | vv << 4)) | vv << 2)) | vv << 1)) | (zv = 1431655765 & ((zv = 858993459 & ((zv = 252645135 & ((zv = 16711935 & ((zv &= 65535) | zv << 8)) | zv << 4)) | zv << 2)) | zv << 1)) << 1
    }, zv.deinterleave2 = function(vv, zv) {
      return (vv = 65535 & ((vv = 16711935 & ((vv = 252645135 & ((vv = 858993459 & ((vv = vv >>> zv & 1431655765) | vv >>> 1)) | vv >>> 2)) | vv >>> 4)) | vv >>> 16)) << 16 >> 16
    }, zv.interleave3 = function(vv, zv, Pv) {
      return vv = 1227133513 & ((vv = 3272356035 & ((vv = 251719695 & ((vv = 4278190335 & ((vv &= 1023) | vv << 16)) | vv << 8)) | vv << 4)) | vv << 2), (vv |= (zv = 1227133513 & ((zv = 3272356035 & ((zv = 251719695 & ((zv = 4278190335 & ((zv &= 1023) | zv << 16)) | zv << 8)) | zv << 4)) | zv << 2)) << 1) | (Pv = 1227133513 & ((Pv = 3272356035 & ((Pv = 251719695 & ((Pv = 4278190335 & ((Pv &= 1023) | Pv << 16)) | Pv << 8)) | Pv << 4)) | Pv << 2)) << 2
    }, zv.deinterleave3 = function(vv, zv) {
      return (vv = 1023 & ((vv = 4278190335 & ((vv = 251719695 & ((vv = 3272356035 & ((vv = vv >>> zv & 1227133513) | vv >>> 2)) | vv >>> 4)) | vv >>> 8)) | vv >>> 16)) << 22 >> 22
    }, zv.nextCombination = function(vv) {
      var zv = vv | vv - 1;
      return zv + 1 | (~zv & -~zv) - 1 >>> Pv(vv) + 1
    }
  },
  37807: (vv, zv, Pv) => {
    vv.exports = function(vv, zv, Pv) {
      switch (arguments.length) {
        case 1:
          return hv = [], Nv(Sv = vv, Sv, lv, !0), hv;
        case 2:
          return "function" === typeof zv ? Nv(vv, vv, zv, !0) : function(vv, zv) {
            return hv = [], Nv(vv, zv, lv, !1), hv
          }(vv, zv);
        case 3:
          return Nv(vv, zv, Pv, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var Sv
    };
    var hv, Sv = Pv(37816),
      ev = Pv(37840),
      gv = Pv(37851);

    function pv(vv, zv) {
      for (var Pv = 0; Pv < vv; ++Pv)
        if (!(zv[Pv] <= zv[Pv + vv])) return !0;
      return !1
    }

    function dv(vv, zv, Pv, hv) {
      for (var Sv = 0, ev = 0, gv = 0, dv = vv.length; gv < dv; ++gv) {
        var Nv = vv[gv];
        if (!pv(zv, Nv)) {
          for (var lv = 0; lv < 2 * zv; ++lv) Pv[Sv++] = Nv[lv];
          hv[ev++] = gv
        }
      }
      return ev
    }

    function Nv(vv, zv, Pv, hv) {
      var pv = vv.length,
        Nv = zv.length;
      if (!(pv <= 0 || Nv <= 0)) {
        var lv = vv[0].length >>> 1;
        if (!(lv <= 0)) {
          var Tv, Wv = Sv.mallocDouble(2 * lv * pv),
            wv = Sv.mallocInt32(pv);
          if ((pv = dv(vv, lv, Wv, wv)) > 0) {
            if (1 === lv && hv) ev.init(pv), Tv = ev.sweepComplete(lv, Pv, 0, pv, Wv, wv, 0, pv, Wv, wv);
            else {
              var av = Sv.mallocDouble(2 * lv * Nv),
                sv = Sv.mallocInt32(Nv);
              (Nv = dv(zv, lv, av, sv)) > 0 && (ev.init(pv + Nv), Tv = 1 === lv ? ev.sweepBipartite(lv, Pv, 0, pv, Wv, wv, 0, Nv, av, sv) : gv(lv, Pv, hv, pv, Wv, wv, Nv, av, sv), Sv.free(av), Sv.free(sv))
            }
            Sv.free(Wv), Sv.free(wv)
          }
          return Tv
        }
      }
    }

    function lv(vv, zv) {
      hv.push([vv, zv])
    }
  },
  37857: (vv, zv) => {
    var Pv = "d",
      hv = "ax",
      Sv = "fp",
      ev = "es",
      gv = "rs",
      pv = "re",
      dv = "rb",
      Nv = "bs",
      lv = "be",
      Tv = "bb",
      Wv = [Pv, hv, "vv", gv, pv, dv, "ri", Nv, lv, Tv, "bi"];

    function wv(vv) {
      var zv = "bruteForce" + (vv ? "Full" : "Partial"),
        hv = [],
        gv = Wv.slice();
      vv || gv.splice(3, 0, Sv);
      var pv = ["function " + zv + "(" + gv.join() + "){"];

      function dv(zv, Sv) {
        var gv = function(vv, zv, hv) {
          var Sv = "bruteForce" + (vv ? "Red" : "Blue") + (zv ? "Flip" : "") + (hv ? "Full" : ""),
            gv = ["function ", Sv, "(", Wv.join(), "){", "var ", ev, "=2*", Pv, ";"],
            pv = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            dv = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (hv ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return vv ? gv.push(pv, "Q", ":", dv) : gv.push(dv, "Q", ":", pv), hv ? gv.push("if(y1<x0||x1<y0)continue;") : zv ? gv.push("if(y0<=x0||x1<y0)continue;") : gv.push("if(y0<x0||x1<y0)continue;"), gv.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), zv ? gv.push("yi,xi") : gv.push("xi,yi"), gv.push(");if(rv!==void 0)return rv;}}}"), {
            name: Sv,
            code: gv.join("")
          }
        }(zv, Sv, vv);
        hv.push(gv.code), pv.push("return " + gv.name + "(" + Wv.join() + ");")
      }
      pv.push("if(re-rs>be-bs){"), vv ? (dv(!0, !1), pv.push("}else{"), dv(!1, !1)) : (pv.push("if(fp){"), dv(!0, !0), pv.push("}else{"), dv(!0, !1), pv.push("}}else{if(fp){"), dv(!1, !0), pv.push("}else{"), dv(!1, !1), pv.push("}")), pv.push("}}return " + zv);
      var Nv = hv.join("") + pv.join("");
      return new Function(Nv)()
    }
    zv.partial = wv(!1), zv.full = wv(!0)
  },
  37851: (vv, zv, Pv) => {
    vv.exports = function(vv, zv, Pv, ev, lv, Dv, Kv, Vv, Uv) {
      ! function(vv, zv) {
        var Pv = 8 * Sv.log2(zv + 1) * (vv + 1) | 0,
          ev = Sv.nextPow2(mv * Pv);
        fv.length < ev && (hv.free(fv), fv = hv.mallocInt32(ev));
        var gv = Sv.nextPow2(jv * Pv);
        Fv.length < gv && (hv.free(Fv), Fv = hv.mallocDouble(gv))
      }(vv, ev + Kv);
      var Rv, xv = 0,
        tv = 2 * vv;
      Yv(xv++, 0, 0, ev, 0, Kv, Pv ? 16 : 0, -1 / 0, 1 / 0), Pv || Yv(xv++, 0, 0, Kv, 0, ev, 1, -1 / 0, 1 / 0);
      for (; xv > 0;) {
        var qv = (xv -= 1) * mv,
          Iv = fv[qv],
          Qv = fv[qv + 1],
          Zv = fv[qv + 2],
          Av = fv[qv + 3],
          Lv = fv[qv + 4],
          Hv = fv[qv + 5],
          Mv = xv * jv,
          yv = Fv[Mv],
          Bv = Fv[Mv + 1],
          Jv = 1 & Hv,
          Ev = !!(16 & Hv),
          ov = lv,
          bv = Dv,
          rv = Vv,
          kv = Uv;
        if (Jv && (ov = Vv, bv = Uv, rv = lv, kv = Dv), !(2 & Hv && Qv >= (Zv = Cv(vv, Iv, Qv, Zv, ov, bv, Bv))) && !(4 & Hv && (Qv = iv(vv, Iv, Qv, Zv, ov, bv, yv)) >= Zv)) {
          var Xv = Zv - Qv,
            uv = Lv - Av;
          if (Ev) {
            if (vv * Xv * (Xv + uv) < wv) {
              if (void 0 !== (Rv = dv.scanComplete(vv, Iv, zv, Qv, Zv, ov, bv, Av, Lv, rv, kv))) return Rv;
              continue
            }
          } else {
            if (vv * Math.min(Xv, uv) < Tv) {
              if (void 0 !== (Rv = gv(vv, Iv, zv, Jv, Qv, Zv, ov, bv, Av, Lv, rv, kv))) return Rv;
              continue
            }
            if (vv * Xv * uv < Wv) {
              if (void 0 !== (Rv = dv.scanBipartite(vv, Iv, zv, Jv, Qv, Zv, ov, bv, Av, Lv, rv, kv))) return Rv;
              continue
            }
          }
          var vz = av(vv, Iv, Qv, Zv, ov, bv, yv, Bv);
          if (Qv < vz)
            if (vv * (vz - Qv) < Tv) {
              if (void 0 !== (Rv = pv(vv, Iv + 1, zv, Qv, vz, ov, bv, Av, Lv, rv, kv))) return Rv
            } else if (Iv === vv - 2) {
            if (void 0 !== (Rv = Jv ? dv.sweepBipartite(vv, zv, Av, Lv, rv, kv, Qv, vz, ov, bv) : dv.sweepBipartite(vv, zv, Qv, vz, ov, bv, Av, Lv, rv, kv))) return Rv
          } else Yv(xv++, Iv + 1, Qv, vz, Av, Lv, Jv, -1 / 0, 1 / 0), Yv(xv++, Iv + 1, Av, Lv, Qv, vz, 1 ^ Jv, -1 / 0, 1 / 0);
          if (vz < Zv) {
            var zz = Nv(vv, Iv, Av, Lv, rv, kv),
              Pz = rv[tv * zz + Iv],
              hz = sv(vv, Iv, zz, Lv, rv, kv, Pz);
            if (hz < Lv && Yv(xv++, Iv, vz, Zv, hz, Lv, (4 | Jv) + (Ev ? 16 : 0), Pz, Bv), Av < zz && Yv(xv++, Iv, vz, Zv, Av, zz, (2 | Jv) + (Ev ? 16 : 0), yv, Pz), zz + 1 === hz) {
              if (void 0 !== (Rv = Ev ? Ov(vv, Iv, zv, vz, Zv, ov, bv, zz, rv, kv[zz]) : nv(vv, Iv, zv, Jv, vz, Zv, ov, bv, zz, rv, kv[zz]))) return Rv
            } else if (zz < hz) {
              var Sz;
              if (Ev) {
                if (vz < (Sz = cv(vv, Iv, vz, Zv, ov, bv, Pz))) {
                  var ez = sv(vv, Iv, vz, Sz, ov, bv, Pz);
                  if (Iv === vv - 2) {
                    if (vz < ez && void 0 !== (Rv = dv.sweepComplete(vv, zv, vz, ez, ov, bv, zz, hz, rv, kv))) return Rv;
                    if (ez < Sz && void 0 !== (Rv = dv.sweepBipartite(vv, zv, ez, Sz, ov, bv, zz, hz, rv, kv))) return Rv
                  } else vz < ez && Yv(xv++, Iv + 1, vz, ez, zz, hz, 16, -1 / 0, 1 / 0), ez < Sz && (Yv(xv++, Iv + 1, ez, Sz, zz, hz, 0, -1 / 0, 1 / 0), Yv(xv++, Iv + 1, zz, hz, ez, Sz, 1, -1 / 0, 1 / 0))
                }
              } else vz < (Sz = Jv ? Gv(vv, Iv, vz, Zv, ov, bv, Pz) : cv(vv, Iv, vz, Zv, ov, bv, Pz)) && (Iv === vv - 2 ? Rv = Jv ? dv.sweepBipartite(vv, zv, zz, hz, rv, kv, vz, Sz, ov, bv) : dv.sweepBipartite(vv, zv, vz, Sz, ov, bv, zz, hz, rv, kv) : (Yv(xv++, Iv + 1, vz, Sz, zz, hz, Jv, -1 / 0, 1 / 0), Yv(xv++, Iv + 1, zz, hz, vz, Sz, 1 ^ Jv, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var hv = Pv(37816),
      Sv = Pv(37825),
      ev = Pv(37857),
      gv = ev.partial,
      pv = ev.full,
      dv = Pv(37840),
      Nv = Pv(37863),
      lv = Pv(37865),
      Tv = 128,
      Wv = 1 << 22,
      wv = 1 << 22,
      av = lv("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      sv = lv("lo===p0", ["p0"]),
      Cv = lv("lo<p0", ["p0"]),
      iv = lv("hi<=p0", ["p0"]),
      cv = lv("lo<=p0&&p0<=hi", ["p0"]),
      Gv = lv("lo<p0&&p0<=hi", ["p0"]),
      mv = 6,
      jv = 2,
      fv = hv.mallocInt32(1024),
      Fv = hv.mallocDouble(1024);

    function Yv(vv, zv, Pv, hv, Sv, ev, gv, pv, dv) {
      var Nv = mv * vv;
      fv[Nv] = zv, fv[Nv + 1] = Pv, fv[Nv + 2] = hv, fv[Nv + 3] = Sv, fv[Nv + 4] = ev, fv[Nv + 5] = gv;
      var lv = jv * vv;
      Fv[lv] = pv, Fv[lv + 1] = dv
    }

    function nv(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv, lv) {
      var Tv = 2 * vv,
        Wv = dv * Tv,
        wv = Nv[Wv + zv];
      vv: for (var av = Sv, sv = Sv * Tv; av < ev; ++av, sv += Tv) {
        var Cv = gv[sv + zv],
          iv = gv[sv + zv + vv];
        if (!(wv < Cv || iv < wv) && (!hv || wv !== Cv)) {
          for (var cv, Gv = pv[av], mv = zv + 1; mv < vv; ++mv) {
            Cv = gv[sv + mv], iv = gv[sv + mv + vv];
            var jv = Nv[Wv + mv],
              fv = Nv[Wv + mv + vv];
            if (iv < jv || fv < Cv) continue vv
          }
          if (void 0 !== (cv = hv ? Pv(lv, Gv) : Pv(Gv, lv))) return cv
        }
      }
    }

    function Ov(vv, zv, Pv, hv, Sv, ev, gv, pv, dv, Nv) {
      var lv = 2 * vv,
        Tv = pv * lv,
        Wv = dv[Tv + zv];
      vv: for (var wv = hv, av = hv * lv; wv < Sv; ++wv, av += lv) {
        var sv = gv[wv];
        if (sv !== Nv) {
          var Cv = ev[av + zv],
            iv = ev[av + zv + vv];
          if (!(Wv < Cv || iv < Wv)) {
            for (var cv = zv + 1; cv < vv; ++cv) {
              Cv = ev[av + cv], iv = ev[av + cv + vv];
              var Gv = dv[Tv + cv],
                mv = dv[Tv + cv + vv];
              if (iv < Gv || mv < Cv) continue vv
            }
            var jv = Pv(sv, Nv);
            if (void 0 !== jv) return jv
          }
        }
      }
    }
  },
  37863: (vv, zv, Pv) => {
    vv.exports = function(vv, zv, Pv, gv, pv, dv) {
      if (gv <= Pv + 1) return Pv;
      var Nv = Pv,
        lv = gv,
        Tv = gv + Pv >>> 1,
        Wv = 2 * vv,
        wv = Tv,
        av = pv[Wv * Tv + zv];
      for (; Nv < lv;) {
        if (lv - Nv < Sv) {
          ev(vv, zv, Nv, lv, pv, dv), av = pv[Wv * Tv + zv];
          break
        }
        var sv = lv - Nv,
          Cv = Math.random() * sv + Nv | 0,
          iv = pv[Wv * Cv + zv],
          cv = Math.random() * sv + Nv | 0,
          Gv = pv[Wv * cv + zv],
          mv = Math.random() * sv + Nv | 0,
          jv = pv[Wv * mv + zv];
        iv <= Gv ? jv >= Gv ? (wv = cv, av = Gv) : iv >= jv ? (wv = Cv, av = iv) : (wv = mv, av = jv) : Gv >= jv ? (wv = cv, av = Gv) : jv >= iv ? (wv = Cv, av = iv) : (wv = mv, av = jv);
        for (var fv = Wv * (lv - 1), Fv = Wv * wv, Yv = 0; Yv < Wv; ++Yv, ++fv, ++Fv) {
          var nv = pv[fv];
          pv[fv] = pv[Fv], pv[Fv] = nv
        }
        var Ov = dv[lv - 1];
        dv[lv - 1] = dv[wv], dv[wv] = Ov;
        for (fv = Wv * (lv - 1), Fv = Wv * (wv = hv(vv, zv, Nv, lv - 1, pv, dv, av)), Yv = 0; Yv < Wv; ++Yv, ++fv, ++Fv) {
          nv = pv[fv];
          pv[fv] = pv[Fv], pv[Fv] = nv
        }
        Ov = dv[lv - 1];
        if (dv[lv - 1] = dv[wv], dv[wv] = Ov, Tv < wv) {
          for (lv = wv - 1; Nv < lv && pv[Wv * (lv - 1) + zv] === av;) lv -= 1;
          lv += 1
        } else {
          if (!(wv < Tv)) break;
          for (Nv = wv + 1; Nv < lv && pv[Wv * Nv + zv] === av;) Nv += 1
        }
      }
      return hv(vv, zv, Pv, Tv, pv, dv, pv[Wv * Tv + zv])
    };
    var hv = Pv(37865)("lo<p0", ["p0"]),
      Sv = 8;

    function ev(vv, zv, Pv, hv, Sv, ev) {
      for (var gv = 2 * vv, pv = gv * (Pv + 1) + zv, dv = Pv + 1; dv < hv; ++dv, pv += gv)
        for (var Nv = Sv[pv], lv = dv, Tv = gv * (dv - 1); lv > Pv && Sv[Tv + zv] > Nv; --lv, Tv -= gv) {
          for (var Wv = Tv, wv = Tv + gv, av = 0; av < gv; ++av, ++Wv, ++wv) {
            var sv = Sv[Wv];
            Sv[Wv] = Sv[wv], Sv[wv] = sv
          }
          var Cv = ev[lv];
          ev[lv] = ev[lv - 1], ev[lv - 1] = Cv
        }
    }
  },
  37865: vv => {
    vv.exports = function(vv, Pv) {
      var hv = "abcdef".split("").concat(Pv),
        Sv = [];
      vv.indexOf("lo") >= 0 && Sv.push("lo=e[k+n]");
      vv.indexOf("hi") >= 0 && Sv.push("hi=e[k+o]");
      return hv.push(zv.replace("_", Sv.join()).replace("$", vv)), Function.apply(void 0, hv)
    };
    var zv = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  37846: vv => {
    vv.exports = function(vv, hv) {
      hv <= 4 * zv ? Pv(0, hv - 1, vv) : Nv(0, hv - 1, vv)
    };
    var zv = 32;

    function Pv(vv, zv, Pv) {
      for (var hv = 2 * (vv + 1), Sv = vv + 1; Sv <= zv; ++Sv) {
        for (var ev = Pv[hv++], gv = Pv[hv++], pv = Sv, dv = hv - 2; pv-- > vv;) {
          var Nv = Pv[dv - 2],
            lv = Pv[dv - 1];
          if (Nv < ev) break;
          if (Nv === ev && lv < gv) break;
          Pv[dv] = Nv, Pv[dv + 1] = lv, dv -= 2
        }
        Pv[dv] = ev, Pv[dv + 1] = gv
      }
    }

    function hv(vv, zv, Pv) {
      zv *= 2;
      var hv = Pv[vv *= 2],
        Sv = Pv[vv + 1];
      Pv[vv] = Pv[zv], Pv[vv + 1] = Pv[zv + 1], Pv[zv] = hv, Pv[zv + 1] = Sv
    }

    function Sv(vv, zv, Pv) {
      zv *= 2, Pv[vv *= 2] = Pv[zv], Pv[vv + 1] = Pv[zv + 1]
    }

    function ev(vv, zv, Pv, hv) {
      zv *= 2, Pv *= 2;
      var Sv = hv[vv *= 2],
        ev = hv[vv + 1];
      hv[vv] = hv[zv], hv[vv + 1] = hv[zv + 1], hv[zv] = hv[Pv], hv[zv + 1] = hv[Pv + 1], hv[Pv] = Sv, hv[Pv + 1] = ev
    }

    function gv(vv, zv, Pv, hv, Sv) {
      zv *= 2, Sv[vv *= 2] = Sv[zv], Sv[zv] = Pv, Sv[vv + 1] = Sv[zv + 1], Sv[zv + 1] = hv
    }

    function pv(vv, zv, Pv) {
      zv *= 2;
      var hv = Pv[vv *= 2],
        Sv = Pv[zv];
      return !(hv < Sv) && (hv !== Sv || Pv[vv + 1] > Pv[zv + 1])
    }

    function dv(vv, zv, Pv, hv) {
      var Sv = hv[vv *= 2];
      return Sv < zv || Sv === zv && hv[vv + 1] < Pv
    }

    function Nv(vv, lv, Tv) {
      var Wv = (lv - vv + 1) / 6 | 0,
        wv = vv + Wv,
        av = lv - Wv,
        sv = vv + lv >> 1,
        Cv = sv - Wv,
        iv = sv + Wv,
        cv = wv,
        Gv = Cv,
        mv = sv,
        jv = iv,
        fv = av,
        Fv = vv + 1,
        Yv = lv - 1,
        nv = 0;
      pv(cv, Gv, Tv) && (nv = cv, cv = Gv, Gv = nv), pv(jv, fv, Tv) && (nv = jv, jv = fv, fv = nv), pv(cv, mv, Tv) && (nv = cv, cv = mv, mv = nv), pv(Gv, mv, Tv) && (nv = Gv, Gv = mv, mv = nv), pv(cv, jv, Tv) && (nv = cv, cv = jv, jv = nv), pv(mv, jv, Tv) && (nv = mv, mv = jv, jv = nv), pv(Gv, fv, Tv) && (nv = Gv, Gv = fv, fv = nv), pv(Gv, mv, Tv) && (nv = Gv, Gv = mv, mv = nv), pv(jv, fv, Tv) && (nv = jv, jv = fv, fv = nv);
      for (var Ov = Tv[2 * Gv], Dv = Tv[2 * Gv + 1], Kv = Tv[2 * jv], Vv = Tv[2 * jv + 1], Uv = 2 * cv, Rv = 2 * mv, xv = 2 * fv, tv = 2 * wv, qv = 2 * sv, Iv = 2 * av, Qv = 0; Qv < 2; ++Qv) {
        var Zv = Tv[Uv + Qv],
          Av = Tv[Rv + Qv],
          Lv = Tv[xv + Qv];
        Tv[tv + Qv] = Zv, Tv[qv + Qv] = Av, Tv[Iv + Qv] = Lv
      }
      Sv(Cv, vv, Tv), Sv(iv, lv, Tv);
      for (var Hv = Fv; Hv <= Yv; ++Hv)
        if (dv(Hv, Ov, Dv, Tv)) Hv !== Fv && hv(Hv, Fv, Tv), ++Fv;
        else if (!dv(Hv, Kv, Vv, Tv))
        for (;;) {
          if (dv(Yv, Kv, Vv, Tv)) {
            dv(Yv, Ov, Dv, Tv) ? (ev(Hv, Fv, Yv, Tv), ++Fv, --Yv) : (hv(Hv, Yv, Tv), --Yv);
            break
          }
          if (--Yv < Hv) break
        }
      gv(vv, Fv - 1, Ov, Dv, Tv), gv(lv, Yv + 1, Kv, Vv, Tv), Fv - 2 - vv <= zv ? Pv(vv, Fv - 2, Tv) : Nv(vv, Fv - 2, Tv), lv - (Yv + 2) <= zv ? Pv(Yv + 2, lv, Tv) : Nv(Yv + 2, lv, Tv), Yv - Fv <= zv ? Pv(Fv, Yv, Tv) : Nv(Fv, Yv, Tv)
    }
  },
  37840: (vv, zv, Pv) => {
    vv.exports = {
      init: function(vv) {
        var zv = Sv.nextPow2(vv);
        dv.length < zv && (hv.free(dv), dv = hv.mallocInt32(zv));
        Nv.length < zv && (hv.free(Nv), Nv = hv.mallocInt32(zv));
        lv.length < zv && (hv.free(lv), lv = hv.mallocInt32(zv));
        Tv.length < zv && (hv.free(Tv), Tv = hv.mallocInt32(zv));
        Wv.length < zv && (hv.free(Wv), Wv = hv.mallocInt32(zv));
        wv.length < zv && (hv.free(wv), wv = hv.mallocInt32(zv));
        var Pv = 8 * zv;
        av.length < Pv && (hv.free(av), av = hv.mallocDouble(Pv))
      },
      sweepBipartite: function(vv, zv, Pv, hv, Sv, pv, Wv, wv, iv, cv) {
        for (var Gv = 0, mv = 2 * vv, jv = vv - 1, fv = mv - 1, Fv = Pv; Fv < hv; ++Fv) {
          var Yv = pv[Fv],
            nv = mv * Fv;
          av[Gv++] = Sv[nv + jv], av[Gv++] = -(Yv + 1), av[Gv++] = Sv[nv + fv], av[Gv++] = Yv
        }
        for (Fv = Wv; Fv < wv; ++Fv) {
          Yv = cv[Fv] + gv;
          var Ov = mv * Fv;
          av[Gv++] = iv[Ov + jv], av[Gv++] = -Yv, av[Gv++] = iv[Ov + fv], av[Gv++] = Yv
        }
        var Dv = Gv >>> 1;
        ev(av, Dv);
        var Kv = 0,
          Vv = 0;
        for (Fv = 0; Fv < Dv; ++Fv) {
          var Uv = 0 | av[2 * Fv + 1];
          if (Uv >= gv) sv(lv, Tv, Vv--, Uv = Uv - gv | 0);
          else if (Uv >= 0) sv(dv, Nv, Kv--, Uv);
          else if (Uv <= -gv) {
            Uv = -Uv - gv | 0;
            for (var Rv = 0; Rv < Kv; ++Rv) {
              if (void 0 !== (xv = zv(dv[Rv], Uv))) return xv
            }
            Cv(lv, Tv, Vv++, Uv)
          } else {
            Uv = -Uv - 1 | 0;
            for (Rv = 0; Rv < Vv; ++Rv) {
              var xv;
              if (void 0 !== (xv = zv(Uv, lv[Rv]))) return xv
            }
            Cv(dv, Nv, Kv++, Uv)
          }
        }
      },
      sweepComplete: function(vv, zv, Pv, hv, Sv, gv, pv, iv, cv, Gv) {
        for (var mv = 0, jv = 2 * vv, fv = vv - 1, Fv = jv - 1, Yv = Pv; Yv < hv; ++Yv) {
          var nv = gv[Yv] + 1 << 1,
            Ov = jv * Yv;
          av[mv++] = Sv[Ov + fv], av[mv++] = -nv, av[mv++] = Sv[Ov + Fv], av[mv++] = nv
        }
        for (Yv = pv; Yv < iv; ++Yv) {
          nv = Gv[Yv] + 1 << 1;
          var Dv = jv * Yv;
          av[mv++] = cv[Dv + fv], av[mv++] = 1 | -nv, av[mv++] = cv[Dv + Fv], av[mv++] = 1 | nv
        }
        var Kv = mv >>> 1;
        ev(av, Kv);
        var Vv = 0,
          Uv = 0,
          Rv = 0;
        for (Yv = 0; Yv < Kv; ++Yv) {
          var xv = 0 | av[2 * Yv + 1],
            tv = 1 & xv;
          if (Yv < Kv - 1 && xv >> 1 === av[2 * Yv + 3] >> 1 && (tv = 2, Yv += 1), xv < 0) {
            for (var qv = -(xv >> 1) - 1, Iv = 0; Iv < Rv; ++Iv) {
              if (void 0 !== (Qv = zv(Wv[Iv], qv))) return Qv
            }
            if (0 !== tv)
              for (Iv = 0; Iv < Vv; ++Iv) {
                if (void 0 !== (Qv = zv(dv[Iv], qv))) return Qv
              }
            if (1 !== tv)
              for (Iv = 0; Iv < Uv; ++Iv) {
                var Qv;
                if (void 0 !== (Qv = zv(lv[Iv], qv))) return Qv
              }
            0 === tv ? Cv(dv, Nv, Vv++, qv) : 1 === tv ? Cv(lv, Tv, Uv++, qv) : 2 === tv && Cv(Wv, wv, Rv++, qv)
          } else {
            qv = (xv >> 1) - 1;
            0 === tv ? sv(dv, Nv, Vv--, qv) : 1 === tv ? sv(lv, Tv, Uv--, qv) : 2 === tv && sv(Wv, wv, Rv--, qv)
          }
        }
      },
      scanBipartite: function(vv, zv, Pv, hv, Sv, pv, lv, Tv, Wv, wv, iv, cv) {
        var Gv = 0,
          mv = 2 * vv,
          jv = zv,
          fv = zv + vv,
          Fv = 1,
          Yv = 1;
        hv ? Yv = gv : Fv = gv;
        for (var nv = Sv; nv < pv; ++nv) {
          var Ov = nv + Fv,
            Dv = mv * nv;
          av[Gv++] = lv[Dv + jv], av[Gv++] = -Ov, av[Gv++] = lv[Dv + fv], av[Gv++] = Ov
        }
        for (nv = Wv; nv < wv; ++nv) {
          Ov = nv + Yv;
          var Kv = mv * nv;
          av[Gv++] = iv[Kv + jv], av[Gv++] = -Ov
        }
        var Vv = Gv >>> 1;
        ev(av, Vv);
        var Uv = 0;
        for (nv = 0; nv < Vv; ++nv) {
          var Rv = 0 | av[2 * nv + 1];
          if (Rv < 0) {
            var xv = !1;
            if ((Ov = -Rv) >= gv ? (xv = !hv, Ov -= gv) : (xv = !!hv, Ov -= 1), xv) Cv(dv, Nv, Uv++, Ov);
            else {
              var tv = cv[Ov],
                qv = mv * Ov,
                Iv = iv[qv + zv + 1],
                Qv = iv[qv + zv + 1 + vv];
              vv: for (var Zv = 0; Zv < Uv; ++Zv) {
                var Av = dv[Zv],
                  Lv = mv * Av;
                if (!(Qv < lv[Lv + zv + 1] || lv[Lv + zv + 1 + vv] < Iv)) {
                  for (var Hv = zv + 2; Hv < vv; ++Hv)
                    if (iv[qv + Hv + vv] < lv[Lv + Hv] || lv[Lv + Hv + vv] < iv[qv + Hv]) continue vv;
                  var Mv, yv = Tv[Av];
                  if (void 0 !== (Mv = hv ? Pv(tv, yv) : Pv(yv, tv))) return Mv
                }
              }
            }
          } else sv(dv, Nv, Uv--, Rv - Fv)
        }
      },
      scanComplete: function(vv, zv, Pv, hv, Sv, pv, Nv, lv, Tv, Wv, wv) {
        for (var sv = 0, Cv = 2 * vv, iv = zv, cv = zv + vv, Gv = hv; Gv < Sv; ++Gv) {
          var mv = Gv + gv,
            jv = Cv * Gv;
          av[sv++] = pv[jv + iv], av[sv++] = -mv, av[sv++] = pv[jv + cv], av[sv++] = mv
        }
        for (Gv = lv; Gv < Tv; ++Gv) {
          mv = Gv + 1;
          var fv = Cv * Gv;
          av[sv++] = Wv[fv + iv], av[sv++] = -mv
        }
        var Fv = sv >>> 1;
        ev(av, Fv);
        var Yv = 0;
        for (Gv = 0; Gv < Fv; ++Gv) {
          var nv = 0 | av[2 * Gv + 1];
          if (nv < 0) {
            if ((mv = -nv) >= gv) dv[Yv++] = mv - gv;
            else {
              var Ov = wv[mv -= 1],
                Dv = Cv * mv,
                Kv = Wv[Dv + zv + 1],
                Vv = Wv[Dv + zv + 1 + vv];
              vv: for (var Uv = 0; Uv < Yv; ++Uv) {
                var Rv = dv[Uv],
                  xv = Nv[Rv];
                if (xv === Ov) break;
                var tv = Cv * Rv;
                if (!(Vv < pv[tv + zv + 1] || pv[tv + zv + 1 + vv] < Kv)) {
                  for (var qv = zv + 2; qv < vv; ++qv)
                    if (Wv[Dv + qv + vv] < pv[tv + qv] || pv[tv + qv + vv] < Wv[Dv + qv]) continue vv;
                  var Iv = Pv(xv, Ov);
                  if (void 0 !== Iv) return Iv
                }
              }
            }
          } else {
            for (mv = nv - gv, Uv = Yv - 1; Uv >= 0; --Uv)
              if (dv[Uv] === mv) {
                for (qv = Uv + 1; qv < Yv; ++qv) dv[qv - 1] = dv[qv];
                break
              }-- Yv
          }
        }
      }
    };
    var hv = Pv(37816),
      Sv = Pv(37825),
      ev = Pv(37846),
      gv = 1 << 28,
      pv = 1024,
      dv = hv.mallocInt32(pv),
      Nv = hv.mallocInt32(pv),
      lv = hv.mallocInt32(pv),
      Tv = hv.mallocInt32(pv),
      Wv = hv.mallocInt32(pv),
      wv = hv.mallocInt32(pv),
      av = hv.mallocDouble(8192);

    function sv(vv, zv, Pv, hv) {
      var Sv = zv[hv],
        ev = vv[Pv - 1];
      vv[Sv] = ev, zv[ev] = Sv
    }

    function Cv(vv, zv, Pv, hv) {
      vv[Pv] = hv, zv[hv] = Pv
    }
  },
  37832: vv => {
    function zv(vv, Pv, hv) {
      var Sv = 0 | vv[hv];
      if (Sv <= 0) return [];
      var ev, gv = new Array(Sv);
      if (hv === vv.length - 1)
        for (ev = 0; ev < Sv; ++ev) gv[ev] = Pv;
      else
        for (ev = 0; ev < Sv; ++ev) gv[ev] = zv(vv, Pv, hv + 1);
      return gv
    }
    vv.exports = function(vv, Pv) {
      switch ("undefined" === typeof Pv && (Pv = 0), typeof vv) {
        case "number":
          if (vv > 0) return function(vv, zv) {
            var Pv, hv;
            for (Pv = new Array(vv), hv = 0; hv < vv; ++hv) Pv[hv] = zv;
            return Pv
          }(0 | vv, Pv);
          break;
        case "object":
          if ("number" === typeof vv.length) return zv(vv, Pv, 0)
      }
      return []
    }
  },
  37775: (vv, zv, Pv) => {
    vv.exports = function() {
      var vv = this;
      this.components = {}, this.comps = this.components;
      var zv = this.components,
        Pv = 1,
        Sv = {},
        ev = [],
        gv = [],
        pv = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function dv(vv, Pv) {
        var hv = zv[Pv],
          ev = Sv[Pv],
          gv = ev.hash[vv];
        gv && (ev.remove(vv), hv.HO && (hv.multi ? (gv.forEach((zv => {
          zv && hv.HO(vv, zv)
        })), gv.length = 0) : hv.HO(vv, gv)), pv.removals.push(ev), Nv())
      }

      function Nv() {
        pv.timeout || (pv.timeout = !0, setTimeout(lv, 1))
      }

      function lv() {
        pv.timeout = !1, Tv()
      }

      function Tv() {
        pv.multiComps.length && function(vv) {
          for (var zv = 0; zv < vv.length; zv++) {
            var {
              entID: Pv,
              data: hv
            } = vv[zv], Sv = hv.hash[Pv];
            if (Sv) {
              for (var ev = 0; ev < Sv.length; ev++) Sv[ev] || (Sv.splice(ev, 1), ev--);
              0 === Sv.length && (hv.remove(Pv), pv.removals.push(hv))
            }
          }
          vv.length = 0
        }(pv.multiComps), pv.removals.length && function(vv) {
          for (var zv = 0; zv < vv.length; zv++) {
            vv[zv].flush()
          }
          vv.length = 0
        }(pv.removals)
      }
      this.Ns = Sv, this._systems = ev, this._renderSystems = gv, this.JA = function(zv) {
        var hv = Pv++;
        return Array.isArray(zv) && zv.forEach((zv => vv.IK(hv, zv))), hv
      }, this.deleteEntity = function(zv) {
        return Object.keys(Sv).forEach((vv => {
          Sv[vv].hash[zv] && dv(zv, vv)
        })), vv
      }, this.Ivv = function(vv) {
        if (!vv) throw new Error("Missing component definition");
        var Pv = vv.name;
        if (!Pv) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof Pv) throw new Error("Component name must be a string.");
        if ("" === Pv) throw new Error("Component name must be a non-empty string.");
        if (Sv[Pv]) throw new Error(`Component ${Pv} already exists.`);
        var pv = {};
        return pv.name = Pv, pv.multi = !!vv.multi, pv.order = isNaN(vv.order) ? 99 : vv.order, pv.stateConstructor = vv.stateConstructor || null, pv.state = vv.state || {}, pv.Km = vv.Km || null, pv.HO = vv.HO || null, pv.system = vv.system || null, pv.qm = vv.qm || null, zv[Pv] = pv, Sv[Pv] = new hv, Sv[Pv]._pendingMultiCleanup = !1, Sv[Pv]._multiCleanupIDs = pv.multi ? [] : null, pv.system && (ev.push(Pv), ev.sort(((vv, Pv) => zv[vv].order - zv[Pv].order))), pv.qm && (gv.push(Pv), gv.sort(((vv, Pv) => zv[vv].order - zv[Pv].order))), Pv
      }, this.overwriteComponent = function(vv, Pv) {
        var hv = zv[vv];
        if (!hv) throw new Error(`Unknown component: ${vv}`);
        if (!Pv) throw new Error("Missing component definition");
        if (hv.name !== Pv.name) throw new Error("Overwriting component must use the same name property.");
        var pv = {};
        pv.name = vv, pv.multi = !!Pv.multi, pv.order = isNaN(Pv.order) ? 99 : Pv.order, pv.state = Pv.state || {}, pv.Km = Pv.Km || null, pv.HO = Pv.HO || null, pv.system = Pv.system || null, pv.qm = Pv.qm || null, zv[vv] = pv, Sv[vv]._pendingMultiCleanup = !1, Sv[vv]._multiCleanupIDs = pv.multi ? [] : null;
        var dv = ev.indexOf(vv);
        pv.system && dv < 0 && ev.push(vv), !pv.system && dv >= 0 && ev.splice(dv, 1), ev.sort(((vv, Pv) => zv[vv].order - zv[Pv].order));
        var Nv = gv.indexOf(vv);
        pv.qm && Nv < 0 && gv.push(vv), !pv.qm && Nv >= 0 && gv.splice(Nv, 1), gv.sort(((vv, Pv) => zv[vv].order - zv[Pv].order));
        var lv = pv.state;
        return this.jK(vv).forEach((vv => {
          for (var zv in lv) zv in vv || (vv[zv] = lv[zv]);
          pv.Km && pv.Km(vv.VK, vv)
        })), vv
      }, this.deleteComponent = function(Pv) {
        var hv = Sv[Pv];
        if (!hv) throw new Error(`Unknown component: ${Pv}`);
        hv.flush(), hv.list.forEach((vv => {
          vv && dv(vv.VK || vv[0].VK, Pv)
        }));
        var pv = ev.indexOf(Pv),
          Nv = gv.indexOf(Pv);
        return pv > -1 && ev.splice(pv, 1), Nv > -1 && gv.splice(Nv, 1), Sv[Pv].dispose(), delete Sv[Pv], delete zv[Pv], vv
      }, this.IK = function(vv, Pv, hv) {
        var ev, gv = zv[Pv],
          pv = Sv[Pv];
        if (!pv) throw new Error(`Unknown component: ${Pv}.`);
        if (pv.hash[vv] && !gv.multi) throw new Error(`Entity ${vv} already has component: ${Pv}.`);
        if (gv.stateConstructor) {
          if (!(ev = new gv.stateConstructor).hasOwnProperty("VK")) throw new Error(`Component ${gv.name} stateConstructor type does not have property __id`);
          Object.assign(ev, gv.state, hv)
        } else ev = {
          VK: vv,
          ...gv.state,
          ...hv
        };
        if (ev.VK = vv, gv.multi) {
          var dv = pv.hash[vv];
          dv || (dv = [], pv.add(vv, dv)), dv.push(ev)
        } else pv.add(vv, ev);
        return gv.Km && gv.Km(vv, ev), this
      }, this.R7 = function(vv, zv) {
        var Pv = Sv[zv];
        if (!Pv) throw new Error(`Unknown component: ${zv}.`);
        return !!Pv.hash[vv]
      }, this.bK = function(zv, Pv) {
        if (!Sv[Pv]) throw new Error(`Unknown component: ${Pv}.`);
        return dv(zv, Pv), vv
      }, this.getState = function(vv, zv) {
        var Pv = Sv[zv];
        if (!Pv) throw new Error(`Unknown component: ${zv}.`);
        return Pv.hash[vv]
      }, this.jK = function(vv) {
        var zv = Sv[vv];
        if (!zv) throw new Error(`Unknown component: ${vv}.`);
        return Tv(), zv.list
      }, this.avv = function(vv) {
        if (!Sv[vv]) throw new Error(`Unknown component: ${vv}.`);
        var zv = Sv[vv].hash;
        return vv => zv[vv]
      }, this.mvv = function(vv) {
        if (!Sv[vv]) throw new Error(`Unknown component: ${vv}.`);
        var zv = Sv[vv].hash;
        return vv => !!zv[vv]
      }, this.MT = function(Pv) {
        Tv();
        for (var hv = 0; hv < ev.length; hv++) {
          var gv = ev[hv],
            pv = zv[gv],
            dv = Sv[gv];
          pv.system(Pv, dv.list), Tv()
        }
        return vv
      }, this.render = function(Pv) {
        Tv();
        for (var hv = 0; hv < gv.length; hv++) {
          var ev = gv[hv],
            pv = zv[ev],
            dv = Sv[ev];
          pv.qm(Pv, dv.list), Tv()
        }
        return vv
      }, this.removeMultiComponent = function(Pv, hv, ev) {
        var gv = zv[hv],
          dv = Sv[hv];
        if (!dv) throw new Error(`Unknown component: ${hv}.`);
        if (!gv.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(vv, zv, Pv, hv) {
          var Sv = Pv.hash[vv];
          if (Sv) {
            var ev = Sv[hv];
            ev && (Sv[hv] = null, zv.HO && zv.HO(vv, ev), pv.multiComps.push({
              entID: vv,
              data: Pv
            }), Nv())
          }
        }(Pv, gv, dv, ev), vv
      }
    };
    var hv = Pv(37784)
  },
  37784: vv => {
    function zv(vv, zv) {
      var Pv = vv._map[zv];
      if (delete vv.hash[zv], delete vv._map[zv], Pv === vv.list.length - 1) vv.list.pop(), vv._idList.pop();
      else {
        var hv = vv.list.pop();
        vv.list[Pv] = hv;
        var Sv = vv._idList.pop();
        vv._idList[Pv] = Sv, vv._map[Sv] = Pv
      }
    }
    vv.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(vv, zv) {
        if ("number" === typeof this._map[vv]) {
          var Pv = this._map[vv];
          this.hash[vv] = zv, this.list[Pv] = zv, this._idList[Pv] = vv
        } else this._map[vv] = this.list.length, this.hash[vv] = zv, this.list.push(zv), this._idList.push(vv)
      }
      remove(vv) {
        var zv = this._map[vv];
        this.hash[vv] = null, this.list[zv] = null, this._pendingRemovals.push(vv)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var vv = 0; vv < this._pendingRemovals.length; vv++) {
          var Pv = this._pendingRemovals[vv];
          null === this.hash[Pv] && zv(this, Pv)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  37238: vv => {
    vv.exports = function(vv) {
      for (var zv = new Array(vv), Pv = 0; Pv < vv; ++Pv) zv[Pv] = Pv;
      return zv
    }
  },
  37247: vv => {
    function zv(vv) {
      return !!vv.constructor && "function" === typeof vv.constructor.isBuffer && vv.constructor.isBuffer(vv)
    }
    vv.exports = function(vv) {
      return null != vv && (zv(vv) || function(vv) {
        return "function" === typeof vv.readFloatLE && "function" === typeof vv.slice && zv(vv.slice(0, 0))
      }(vv) || !!vv._isBuffer)
    }
  },
  37585: (vv, zv, Pv) => {
    vv = Pv.nmd(vv);
    var hv = "__lodash_hash_undefined__",
      Sv = 9007199254740991,
      ev = "[object Arguments]",
      gv = "[object Boolean]",
      pv = "[object Date]",
      dv = "[object Function]",
      Nv = "[object GeneratorFunction]",
      lv = "[object Map]",
      Tv = "[object Number]",
      Wv = "[object Object]",
      wv = "[object Promise]",
      av = "[object RegExp]",
      sv = "[object Set]",
      Cv = "[object String]",
      iv = "[object Symbol]",
      cv = "[object WeakMap]",
      Gv = "[object ArrayBuffer]",
      mv = "[object DataView]",
      jv = "[object Float32Array]",
      fv = "[object Float64Array]",
      Fv = "[object Int8Array]",
      Yv = "[object Int16Array]",
      nv = "[object Int32Array]",
      Ov = "[object Uint8Array]",
      Dv = "[object Uint8ClampedArray]",
      Kv = "[object Uint16Array]",
      Vv = "[object Uint32Array]",
      Uv = /\w*$/,
      Rv = /^\[object .+?Constructor\]$/,
      xv = /^(?:0|[1-9]\d*)$/,
      tv = {};
    tv[ev] = tv["[object Array]"] = tv[Gv] = tv[mv] = tv[gv] = tv[pv] = tv[jv] = tv[fv] = tv[Fv] = tv[Yv] = tv[nv] = tv[lv] = tv[Tv] = tv[Wv] = tv[av] = tv[sv] = tv[Cv] = tv[iv] = tv[Ov] = tv[Dv] = tv[Kv] = tv[Vv] = !0, tv["[object Error]"] = tv[dv] = tv[cv] = !1;
    var qv = "object" == typeof Pv.g && Pv.g && Pv.g.Object === Object && Pv.g,
      Iv = "object" == typeof self && self && self.Object === Object && self,
      Qv = qv || Iv || Function("return this")(),
      Zv = zv && !zv.nodeType && zv,
      Av = Zv && vv && !vv.nodeType && vv,
      Lv = Av && Av.exports === Zv;

    function Hv(vv, zv) {
      return vv.set(zv[0], zv[1]), vv
    }

    function Mv(vv, zv) {
      return vv.add(zv), vv
    }

    function yv(vv, zv, Pv, hv) {
      var Sv = -1,
        ev = vv ? vv.length : 0;
      for (hv && ev && (Pv = vv[++Sv]); ++Sv < ev;) Pv = zv(Pv, vv[Sv], Sv, vv);
      return Pv
    }

    function Bv(vv) {
      var zv = !1;
      if (null != vv && "function" != typeof vv.toString) try {
        zv = !!(vv + "")
      } catch (Pv) {}
      return zv
    }

    function Jv(vv) {
      var zv = -1,
        Pv = Array(vv.size);
      return vv.forEach((function(vv, hv) {
        Pv[++zv] = [hv, vv]
      })), Pv
    }

    function Ev(vv, zv) {
      return function(Pv) {
        return vv(zv(Pv))
      }
    }

    function ov(vv) {
      var zv = -1,
        Pv = Array(vv.size);
      return vv.forEach((function(vv) {
        Pv[++zv] = vv
      })), Pv
    }
    var bv = Array.prototype,
      rv = Function.prototype,
      kv = Object.prototype,
      Xv = Qv["__core-js_shared__"],
      uv = function() {
        var vv = /[^.]+$/.exec(Xv && Xv.keys && Xv.keys.IE_PROTO || "");
        return vv ? "Symbol(src)_1." + vv : ""
      }(),
      vz = rv.toString,
      zz = kv.hasOwnProperty,
      Pz = kv.toString,
      hz = RegExp("^" + vz.call(zz).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      Sz = Lv ? Qv.Sa : void 0,
      ez = Qv.Symbol,
      gz = Qv.Uint8Array,
      pz = Ev(Object.getPrototypeOf, Object),
      dz = Object.create,
      Nz = kv.propertyIsEnumerable,
      lz = bv.splice,
      Tz = Object.getOwnPropertySymbols,
      Wz = Sz ? Sz.isBuffer : void 0,
      wz = Ev(Object.keys, Object),
      az = Lz(Qv, "DataView"),
      sz = Lz(Qv, "Map"),
      Cz = Lz(Qv, "Promise"),
      iz = Lz(Qv, "Set"),
      cz = Lz(Qv, "WeakMap"),
      Gz = Lz(Object, "create"),
      mz = Jz(az),
      jz = Jz(sz),
      fz = Jz(Cz),
      Fz = Jz(iz),
      Yz = Jz(cz),
      nz = ez ? ez.prototype : void 0,
      Oz = nz ? nz.valueOf : void 0;

    function Dz(vv) {
      var zv = -1,
        Pv = vv ? vv.length : 0;
      for (this.clear(); ++zv < Pv;) {
        var hv = vv[zv];
        this.set(hv[0], hv[1])
      }
    }

    function Kz(vv) {
      var zv = -1,
        Pv = vv ? vv.length : 0;
      for (this.clear(); ++zv < Pv;) {
        var hv = vv[zv];
        this.set(hv[0], hv[1])
      }
    }

    function Vz(vv) {
      var zv = -1,
        Pv = vv ? vv.length : 0;
      for (this.clear(); ++zv < Pv;) {
        var hv = vv[zv];
        this.set(hv[0], hv[1])
      }
    }

    function Uz(vv) {
      this.__data__ = new Kz(vv)
    }

    function Rz(vv, zv) {
      var Pv = oz(vv) || function(vv) {
          return function(vv) {
            return function(vv) {
              return !!vv && "object" == typeof vv
            }(vv) && bz(vv)
          }(vv) && zz.call(vv, "callee") && (!Nz.call(vv, "callee") || Pz.call(vv) == ev)
        }(vv) ? function(vv, zv) {
          for (var Pv = -1, hv = Array(vv); ++Pv < vv;) hv[Pv] = zv(Pv);
          return hv
        }(vv.length, String) : [],
        hv = Pv.length,
        Sv = !!hv;
      for (var gv in vv) !zv && !zz.call(vv, gv) || Sv && ("length" == gv || yz(gv, hv)) || Pv.push(gv);
      return Pv
    }

    function xz(vv, zv, Pv) {
      var hv = vv[zv];
      zz.call(vv, zv) && Ez(hv, Pv) && (void 0 !== Pv || zv in vv) || (vv[zv] = Pv)
    }

    function tz(vv, zv) {
      for (var Pv = vv.length; Pv--;)
        if (Ez(vv[Pv][0], zv)) return Pv;
      return -1
    }

    function qz(vv, zv, Pv, hv, Sv, wv, cv) {
      var Rv;
      if (hv && (Rv = wv ? hv(vv, Sv, wv, cv) : hv(vv)), void 0 !== Rv) return Rv;
      if (!Xz(vv)) return vv;
      var xv = oz(vv);
      if (xv) {
        if (Rv = function(vv) {
            var zv = vv.length,
              Pv = vv.constructor(zv);
            zv && "string" == typeof vv[0] && zz.call(vv, "index") && (Pv.index = vv.index, Pv.input = vv.input);
            return Pv
          }(vv), !zv) return function(vv, zv) {
          var Pv = -1,
            hv = vv.length;
          zv || (zv = Array(hv));
          for (; ++Pv < hv;) zv[Pv] = vv[Pv];
          return zv
        }(vv, Rv)
      } else {
        var qv = Mz(vv),
          Iv = qv == dv || qv == Nv;
        if (rz(vv)) return function(vv, zv) {
          if (zv) return vv.slice();
          var Pv = new vv.constructor(vv.length);
          return vv.copy(Pv), Pv
        }(vv, zv);
        if (qv == Wv || qv == ev || Iv && !wv) {
          if (Bv(vv)) return wv ? vv : {};
          if (Rv = function(vv) {
              return "function" != typeof vv.constructor || Bz(vv) ? {} : (zv = pz(vv), Xz(zv) ? dz(zv) : {});
              var zv
            }(Iv ? {} : vv), !zv) return function(vv, zv) {
            return Zz(vv, Hz(vv), zv)
          }(vv, function(vv, zv) {
            return vv && Zz(zv, uz(zv), vv)
          }(Rv, vv))
        } else {
          if (!tv[qv]) return wv ? vv : {};
          Rv = function(vv, zv, Pv, hv) {
            var Sv = vv.constructor;
            switch (zv) {
              case Gv:
                return Qz(vv);
              case gv:
              case pv:
                return new Sv(+vv);
              case mv:
                return function(vv, zv) {
                  var Pv = zv ? Qz(vv.buffer) : vv.buffer;
                  return new vv.constructor(Pv, vv.byteOffset, vv.byteLength)
                }(vv, hv);
              case jv:
              case fv:
              case Fv:
              case Yv:
              case nv:
              case Ov:
              case Dv:
              case Kv:
              case Vv:
                return function(vv, zv) {
                  var Pv = zv ? Qz(vv.buffer) : vv.buffer;
                  return new vv.constructor(Pv, vv.byteOffset, vv.length)
                }(vv, hv);
              case lv:
                return function(vv, zv, Pv) {
                  var hv = zv ? Pv(Jv(vv), !0) : Jv(vv);
                  return yv(hv, Hv, new vv.constructor)
                }(vv, hv, Pv);
              case Tv:
              case Cv:
                return new Sv(vv);
              case av:
                return function(vv) {
                  var zv = new vv.constructor(vv.source, Uv.exec(vv));
                  return zv.lastIndex = vv.lastIndex, zv
                }(vv);
              case sv:
                return function(vv, zv, Pv) {
                  var hv = zv ? Pv(ov(vv), !0) : ov(vv);
                  return yv(hv, Mv, new vv.constructor)
                }(vv, hv, Pv);
              case iv:
                return ev = vv, Oz ? Object(Oz.call(ev)) : {}
            }
            var ev
          }(vv, qv, qz, zv)
        }
      }
      cv || (cv = new Uz);
      var Qv = cv.get(vv);
      if (Qv) return Qv;
      if (cv.set(vv, Rv), !xv) var Zv = Pv ? function(vv) {
        return function(vv, zv, Pv) {
          var hv = zv(vv);
          return oz(vv) ? hv : function(vv, zv) {
            for (var Pv = -1, hv = zv.length, Sv = vv.length; ++Pv < hv;) vv[Sv + Pv] = zv[Pv];
            return vv
          }(hv, Pv(vv))
        }(vv, uz, Hz)
      }(vv) : uz(vv);
      return function(vv, zv) {
        for (var Pv = -1, hv = vv ? vv.length : 0; ++Pv < hv && !1 !== zv(vv[Pv], Pv, vv););
      }(Zv || vv, (function(Sv, ev) {
        Zv && (Sv = vv[ev = Sv]), xz(Rv, ev, qz(Sv, zv, Pv, hv, ev, vv, cv))
      })), Rv
    }

    function Iz(vv) {
      return !(!Xz(vv) || (zv = vv, uv && uv in zv)) && (kz(vv) || Bv(vv) ? hz : Rv).test(Jz(vv));
      var zv
    }

    function Qz(vv) {
      var zv = new vv.constructor(vv.byteLength);
      return new gz(zv).set(new gz(vv)), zv
    }

    function Zz(vv, zv, Pv, hv) {
      Pv || (Pv = {});
      for (var Sv = -1, ev = zv.length; ++Sv < ev;) {
        var gv = zv[Sv],
          pv = hv ? hv(Pv[gv], vv[gv], gv, Pv, vv) : void 0;
        xz(Pv, gv, void 0 === pv ? vv[gv] : pv)
      }
      return Pv
    }

    function Az(vv, zv) {
      var Pv = vv.__data__;
      return function(vv) {
        var zv = typeof vv;
        return "string" == zv || "number" == zv || "symbol" == zv || "boolean" == zv ? "__proto__" !== vv : null === vv
      }(zv) ? Pv["string" == typeof zv ? "string" : "hash"] : Pv.map
    }

    function Lz(vv, zv) {
      var Pv = function(vv, zv) {
        return null == vv ? void 0 : vv[zv]
      }(vv, zv);
      return Iz(Pv) ? Pv : void 0
    }
    Dz.prototype.clear = function() {
      this.__data__ = Gz ? Gz(null) : {}
    }, Dz.prototype.delete = function(vv) {
      return this.has(vv) && delete this.__data__[vv]
    }, Dz.prototype.get = function(vv) {
      var zv = this.__data__;
      if (Gz) {
        var Pv = zv[vv];
        return Pv === hv ? void 0 : Pv
      }
      return zz.call(zv, vv) ? zv[vv] : void 0
    }, Dz.prototype.has = function(vv) {
      var zv = this.__data__;
      return Gz ? void 0 !== zv[vv] : zz.call(zv, vv)
    }, Dz.prototype.set = function(vv, zv) {
      return this.__data__[vv] = Gz && void 0 === zv ? hv : zv, this
    }, Kz.prototype.clear = function() {
      this.__data__ = []
    }, Kz.prototype.delete = function(vv) {
      var zv = this.__data__,
        Pv = tz(zv, vv);
      return !(Pv < 0) && (Pv == zv.length - 1 ? zv.pop() : lz.call(zv, Pv, 1), !0)
    }, Kz.prototype.get = function(vv) {
      var zv = this.__data__,
        Pv = tz(zv, vv);
      return Pv < 0 ? void 0 : zv[Pv][1]
    }, Kz.prototype.has = function(vv) {
      return tz(this.__data__, vv) > -1
    }, Kz.prototype.set = function(vv, zv) {
      var Pv = this.__data__,
        hv = tz(Pv, vv);
      return hv < 0 ? Pv.push([vv, zv]) : Pv[hv][1] = zv, this
    }, Vz.prototype.clear = function() {
      this.__data__ = {
        hash: new Dz,
        map: new(sz || Kz),
        string: new Dz
      }
    }, Vz.prototype.delete = function(vv) {
      return Az(this, vv).delete(vv)
    }, Vz.prototype.get = function(vv) {
      return Az(this, vv).get(vv)
    }, Vz.prototype.has = function(vv) {
      return Az(this, vv).has(vv)
    }, Vz.prototype.set = function(vv, zv) {
      return Az(this, vv).set(vv, zv), this
    }, Uz.prototype.clear = function() {
      this.__data__ = new Kz
    }, Uz.prototype.delete = function(vv) {
      return this.__data__.delete(vv)
    }, Uz.prototype.get = function(vv) {
      return this.__data__.get(vv)
    }, Uz.prototype.has = function(vv) {
      return this.__data__.has(vv)
    }, Uz.prototype.set = function(vv, zv) {
      var Pv = this.__data__;
      if (Pv instanceof Kz) {
        var hv = Pv.__data__;
        if (!sz || hv.length < 199) return hv.push([vv, zv]), this;
        Pv = this.__data__ = new Vz(hv)
      }
      return Pv.set(vv, zv), this
    };
    var Hz = Tz ? Ev(Tz, Object) : function() {
        return []
      },
      Mz = function(vv) {
        return Pz.call(vv)
      };

    function yz(vv, zv) {
      return !!(zv = null == zv ? Sv : zv) && ("number" == typeof vv || xv.test(vv)) && vv > -1 && vv % 1 == 0 && vv < zv
    }

    function Bz(vv) {
      var zv = vv && vv.constructor;
      return vv === ("function" == typeof zv && zv.prototype || kv)
    }

    function Jz(vv) {
      if (null != vv) {
        try {
          return vz.call(vv)
        } catch (zv) {}
        try {
          return vv + ""
        } catch (zv) {}
      }
      return ""
    }

    function Ez(vv, zv) {
      return vv === zv || vv !== vv && zv !== zv
    }(az && Mz(new az(new ArrayBuffer(1))) != mv || sz && Mz(new sz) != lv || Cz && Mz(Cz.resolve()) != wv || iz && Mz(new iz) != sv || cz && Mz(new cz) != cv) && (Mz = function(vv) {
      var zv = Pz.call(vv),
        Pv = zv == Wv ? vv.constructor : void 0,
        hv = Pv ? Jz(Pv) : void 0;
      if (hv) switch (hv) {
        case mz:
          return mv;
        case jz:
          return lv;
        case fz:
          return wv;
        case Fz:
          return sv;
        case Yz:
          return cv
      }
      return zv
    });
    var oz = Array.isArray;

    function bz(vv) {
      return null != vv && function(vv) {
        return "number" == typeof vv && vv > -1 && vv % 1 == 0 && vv <= Sv
      }(vv.length) && !kz(vv)
    }
    var rz = Wz || function() {
      return !1
    };

    function kz(vv) {
      var zv = Xz(vv) ? Pz.call(vv) : "";
      return zv == dv || zv == Nv
    }

    function Xz(vv) {
      var zv = typeof vv;
      return !!vv && ("object" == zv || "function" == zv)
    }

    function uz(vv) {
      return bz(vv) ? Rz(vv) : function(vv) {
        if (!Bz(vv)) return wz(vv);
        var zv = [];
        for (var Pv in Object(vv)) zz.call(vv, Pv) && "constructor" != Pv && zv.push(Pv);
        return zv
      }(vv)
    }
    vv.exports = function(vv) {
      return qz(vv, !0, !0)
    }
  },
  37234: (vv, zv, Pv) => {
    var hv = Pv(37238),
      Sv = Pv(37247),
      ev = "undefined" !== typeof Float64Array;

    function gv(vv, zv) {
      return vv[0] - zv[0]
    }

    function pv() {
      var vv, zv = this.stride,
        Pv = new Array(zv.length);
      for (vv = 0; vv < Pv.length; ++vv) Pv[vv] = [Math.abs(zv[vv]), vv];
      Pv.sort(gv);
      var hv = new Array(Pv.length);
      for (vv = 0; vv < hv.length; ++vv) hv[vv] = Pv[vv][1];
      return hv
    }

    function dv(vv, zv) {
      var Pv = ["View", zv, "d", vv].join("");
      zv < 0 && (Pv = "View_Nil" + vv);
      var Sv = "generic" === vv;
      if (-1 === zv) {
        var ev = "function " + Pv + "(a){this.data=a;};var proto=" + Pv + ".prototype;proto.dtype='" + vv + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + Pv + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + Pv + "(a){return new " + Pv + "(a);}";
        return new Function(ev)()
      }
      if (0 === zv) {
        ev = "function " + Pv + "(a,d) {this.data = a;this.offset = d};var proto=" + Pv + ".prototype;proto.dtype='" + vv + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + Pv + "_copy() {return new " + Pv + "(this.data,this.offset)};proto.pick=function " + Pv + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + Pv + "_get(){return " + (Sv ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + Pv + "_set(v){return " + (Sv ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + Pv + "(a,b,c,d){return new " + Pv + "(a,d)}";
        return new Function("TrivialArray", ev)(Nv[vv][0])
      }
      ev = ["'use strict'"];
      var gv = hv(zv),
        dv = gv.map((function(vv) {
          return "i" + vv
        })),
        lv = "this.offset+" + gv.map((function(vv) {
          return "this.stride[" + vv + "]*i" + vv
        })).join("+"),
        Tv = gv.map((function(vv) {
          return "b" + vv
        })).join(","),
        Wv = gv.map((function(vv) {
          return "c" + vv
        })).join(",");
      ev.push("function " + Pv + "(a," + Tv + "," + Wv + ",d){this.data=a", "this.shape=[" + Tv + "]", "this.stride=[" + Wv + "]", "this.offset=d|0}", "var proto=" + Pv + ".prototype", "proto.dtype='" + vv + "'", "proto.dimension=" + zv), ev.push("Object.defineProperty(proto,'size',{get:function " + Pv + "_size(){return " + gv.map((function(vv) {
        return "this.shape[" + vv + "]"
      })).join("*"), "}})"), 1 === zv ? ev.push("proto.order=[0]") : (ev.push("Object.defineProperty(proto,'order',{get:"), zv < 4 ? (ev.push("function " + Pv + "_order(){"), 2 === zv ? ev.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === zv && ev.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : ev.push("ORDER})")), ev.push("proto.set=function " + Pv + "_set(" + dv.join(",") + ",v){"), Sv ? ev.push("return this.data.set(" + lv + ",v)}") : ev.push("return this.data[" + lv + "]=v}"), ev.push("proto.get=function " + Pv + "_get(" + dv.join(",") + "){"), Sv ? ev.push("return this.data.get(" + lv + ")}") : ev.push("return this.data[" + lv + "]}"), ev.push("proto.index=function " + Pv + "_index(", dv.join(), "){return " + lv + "}"), ev.push("proto.hi=function " + Pv + "_hi(" + dv.join(",") + "){return new " + Pv + "(this.data," + gv.map((function(vv) {
        return ["(typeof i", vv, "!=='number'||i", vv, "<0)?this.shape[", vv, "]:i", vv, "|0"].join("")
      })).join(",") + "," + gv.map((function(vv) {
        return "this.stride[" + vv + "]"
      })).join(",") + ",this.offset)}");
      var wv = gv.map((function(vv) {
          return "a" + vv + "=this.shape[" + vv + "]"
        })),
        av = gv.map((function(vv) {
          return "c" + vv + "=this.stride[" + vv + "]"
        }));
      ev.push("proto.lo=function " + Pv + "_lo(" + dv.join(",") + "){var b=this.offset,d=0," + wv.join(",") + "," + av.join(","));
      for (var sv = 0; sv < zv; ++sv) ev.push("if(typeof i" + sv + "==='number'&&i" + sv + ">=0){d=i" + sv + "|0;b+=c" + sv + "*d;a" + sv + "-=d}");
      ev.push("return new " + Pv + "(this.data," + gv.map((function(vv) {
        return "a" + vv
      })).join(",") + "," + gv.map((function(vv) {
        return "c" + vv
      })).join(",") + ",b)}"), ev.push("proto.step=function " + Pv + "_step(" + dv.join(",") + "){var " + gv.map((function(vv) {
        return "a" + vv + "=this.shape[" + vv + "]"
      })).join(",") + "," + gv.map((function(vv) {
        return "b" + vv + "=this.stride[" + vv + "]"
      })).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
      for (sv = 0; sv < zv; ++sv) ev.push("if(typeof i" + sv + "==='number'){d=i" + sv + "|0;if(d<0){c+=b" + sv + "*(a" + sv + "-1);a" + sv + "=ceil(-a" + sv + "/d)}else{a" + sv + "=ceil(a" + sv + "/d)}b" + sv + "*=d}");
      ev.push("return new " + Pv + "(this.data," + gv.map((function(vv) {
        return "a" + vv
      })).join(",") + "," + gv.map((function(vv) {
        return "b" + vv
      })).join(",") + ",c)}");
      var Cv = new Array(zv),
        iv = new Array(zv);
      for (sv = 0; sv < zv; ++sv) Cv[sv] = "a[i" + sv + "]", iv[sv] = "b[i" + sv + "]";
      ev.push("proto.transpose=function " + Pv + "_transpose(" + dv + "){" + dv.map((function(vv, zv) {
        return vv + "=(" + vv + "===undefined?" + zv + ":" + vv + "|0)"
      })).join(";"), "var a=this.shape,b=this.stride;return new " + Pv + "(this.data," + Cv.join(",") + "," + iv.join(",") + ",this.offset)}"), ev.push("proto.pick=function " + Pv + "_pick(" + dv + "){var a=[],b=[],c=this.offset");
      for (sv = 0; sv < zv; ++sv) ev.push("if(typeof i" + sv + "==='number'&&i" + sv + ">=0){c=(c+this.stride[" + sv + "]*i" + sv + ")|0}else{a.push(this.shape[" + sv + "]);b.push(this.stride[" + sv + "])}");
      return ev.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), ev.push("return function construct_" + Pv + "(data,shape,stride,offset){return new " + Pv + "(data," + gv.map((function(vv) {
        return "shape[" + vv + "]"
      })).join(",") + "," + gv.map((function(vv) {
        return "stride[" + vv + "]"
      })).join(",") + ",offset)}"), new Function("CTOR_LIST", "ORDER", ev.join("\n"))(Nv[vv], pv)
    }
    var Nv = {
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
    vv.exports = function(vv, zv, Pv, hv) {
      if (void 0 === vv) return (0, Nv.array[0])([]);
      "number" === typeof vv && (vv = [vv]), void 0 === zv && (zv = [vv.length]);
      var gv = zv.length;
      if (void 0 === Pv) {
        Pv = new Array(gv);
        for (var pv = gv - 1, lv = 1; pv >= 0; --pv) Pv[pv] = lv, lv *= zv[pv]
      }
      if (void 0 === hv) {
        hv = 0;
        for (pv = 0; pv < gv; ++pv) Pv[pv] < 0 && (hv -= (zv[pv] - 1) * Pv[pv])
      }
      for (var Tv = function(vv) {
          if (Sv(vv)) return "buffer";
          if (ev) switch (Object.prototype.toString.call(vv)) {
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
          return Array.isArray(vv) ? "array" : "generic"
        }(vv), Wv = Nv[Tv]; Wv.length <= gv + 1;) Wv.push(dv(Tv, Wv.length - 1));
      return (0, Wv[gv + 1])(vv, zv, Pv, hv)
    }
  },
  37969: vv => {
    function zv(vv, zv, Pv) {
      for (var hv = vv.length, Sv = -1 / 0, ev = 1 / 0, gv = 0; gv < hv; gv++) {
        var pv = (Pv[0][gv] - vv[gv]) / zv[gv],
          dv = (Pv[1][gv] - vv[gv]) / zv[gv];
        if (pv > dv) {
          var Nv = pv;
          pv = dv, dv = Nv
        }
        if (dv < Sv || pv > ev) return 1 / 0;
        pv > Sv && (Sv = pv), dv < ev && (ev = dv)
      }
      return Sv > ev ? 1 / 0 : Sv
    }
    vv.exports = function(vv, Pv, hv, Sv) {
      var ev = zv(Pv, hv, Sv);
      if (ev === 1 / 0) vv = null;
      else {
        vv = vv || [];
        for (var gv = 0; gv < Pv.length; gv++) vv[gv] = Pv[gv] + hv[gv] * ev
      }
      return vv
    }, vv.exports.distance = zv
  },
  37259: (vv, zv, Pv) => {
    var hv = Pv(37264);

    function Sv(vv) {
      for (var zv, Pv, Sv = 0, ev = vv.length, gv = 0; gv < vv.length;) {
        for (zv = vv[gv], Pv = 0; gv < ev && vv[gv] === zv;) ++gv, ++Pv;
        Sv += hv.log2(Pv) / 7 | 0, Sv += hv.log2(zv >>> 0) / 7 | 0, Sv += 2
      }
      return Sv
    }
    zv.size = Sv, zv.encode = function(vv, zv) {
      zv || (zv = new Uint8Array(Sv(vv)));
      for (var Pv, hv, ev = 0, gv = zv.length, pv = 0; pv < vv.length;) {
        for (Pv = vv[pv], hv = 0; pv < vv.length && vv[pv] === Pv;) ++pv, ++hv;
        for (; ev < gv && hv >= 128;) zv[ev++] = 128 + (127 & hv), hv >>>= 7;
        if (ev >= gv) throw new Error("RLE buffer overflow");
        for (zv[ev++] = hv, Pv >>>= 0; ev < gv && Pv >= 128;) zv[ev++] = 128 + (127 & Pv), Pv >>>= 7;
        if (ev >= gv) throw new Error("RLE buffer overflow");
        zv[ev++] = Pv
      }
      return zv
    }, zv.decode = function(vv, zv) {
      for (var Pv, hv, Sv, ev, gv = zv.length, pv = vv.length, dv = 0, Nv = 0; Nv < pv;) {
        for (Pv = 0, hv = 0; Nv < pv && vv[Nv] >= 128;) Pv += (127 & vv[Nv++]) << hv, hv += 7;
        if (Pv += vv[Nv++] << hv, Nv >= pv) throw new Error("RLE buffer underrun");
        if (dv + Pv > gv) throw new Error("Chunk buffer overflow");
        for (Sv = 0, hv = 0; Nv < pv && vv[Nv] >= 128;) Sv += (127 & vv[Nv++]) << hv, hv += 7;
        if (Nv >= pv) throw new Error("RLE buffer underrun");
        for (Sv += vv[Nv++] << hv, ev = 0; ev < Pv; ++ev) zv[dv++] = Sv
      }
      return zv
    }
  },
  37264: (vv, zv) => {
    function Pv(vv) {
      var zv = 32;
      return (vv &= -vv) && zv--, 65535 & vv && (zv -= 16), 16711935 & vv && (zv -= 8), 252645135 & vv && (zv -= 4), 858993459 & vv && (zv -= 2), 1431655765 & vv && (zv -= 1), zv
    }
    zv.INT_BITS = 32, zv.INT_MAX = 2147483647, zv.INT_MIN = -1 << 31, zv.sign = function(vv) {
      return (vv > 0) - (vv < 0)
    }, zv.abs = function(vv) {
      var zv = vv >> 31;
      return (vv ^ zv) - zv
    }, zv.min = function(vv, zv) {
      return zv ^ (vv ^ zv) & -(vv < zv)
    }, zv.max = function(vv, zv) {
      return vv ^ (vv ^ zv) & -(vv < zv)
    }, zv.isPow2 = function(vv) {
      return !(vv & vv - 1) && !!vv
    }, zv.log2 = function(vv) {
      var zv, Pv;
      return zv = (vv > 65535) << 4, zv |= Pv = ((vv >>>= zv) > 255) << 3, zv |= Pv = ((vv >>>= Pv) > 15) << 2, (zv |= Pv = ((vv >>>= Pv) > 3) << 1) | (vv >>>= Pv) >> 1
    }, zv.log10 = function(vv) {
      return vv >= 1e9 ? 9 : vv >= 1e8 ? 8 : vv >= 1e7 ? 7 : vv >= 1e6 ? 6 : vv >= 1e5 ? 5 : vv >= 1e4 ? 4 : vv >= 1e3 ? 3 : vv >= 100 ? 2 : vv >= 10 ? 1 : 0
    }, zv.popCount = function(vv) {
      return 16843009 * ((vv = (858993459 & (vv -= vv >>> 1 & 1431655765)) + (vv >>> 2 & 858993459)) + (vv >>> 4) & 252645135) >>> 24
    }, zv.countTrailingZeros = Pv, zv.nextPow2 = function(vv) {
      return vv += 0 === vv, --vv, vv |= vv >>> 1, vv |= vv >>> 2, vv |= vv >>> 4, vv |= vv >>> 8, (vv |= vv >>> 16) + 1
    }, zv.prevPow2 = function(vv) {
      return vv |= vv >>> 1, vv |= vv >>> 2, vv |= vv >>> 4, vv |= vv >>> 8, (vv |= vv >>> 16) - (vv >>> 1)
    }, zv.parity = function(vv) {
      return vv ^= vv >>> 16, vv ^= vv >>> 8, vv ^= vv >>> 4, 27030 >>> (vv &= 15) & 1
    };
    var hv = new Array(256);
    ! function(vv) {
      for (var zv = 0; zv < 256; ++zv) {
        var Pv = zv,
          hv = zv,
          Sv = 7;
        for (Pv >>>= 1; Pv; Pv >>>= 1) hv <<= 1, hv |= 1 & Pv, --Sv;
        vv[zv] = hv << Sv & 255
      }
    }(hv), zv.reverse = function(vv) {
      return hv[255 & vv] << 24 | hv[vv >>> 8 & 255] << 16 | hv[vv >>> 16 & 255] << 8 | hv[vv >>> 24 & 255]
    }, zv.interleave2 = function(vv, zv) {
      return (vv = 1431655765 & ((vv = 858993459 & ((vv = 252645135 & ((vv = 16711935 & ((vv &= 65535) | vv << 8)) | vv << 4)) | vv << 2)) | vv << 1)) | (zv = 1431655765 & ((zv = 858993459 & ((zv = 252645135 & ((zv = 16711935 & ((zv &= 65535) | zv << 8)) | zv << 4)) | zv << 2)) | zv << 1)) << 1
    }, zv.deinterleave2 = function(vv, zv) {
      return (vv = 65535 & ((vv = 16711935 & ((vv = 252645135 & ((vv = 858993459 & ((vv = vv >>> zv & 1431655765) | vv >>> 1)) | vv >>> 2)) | vv >>> 4)) | vv >>> 16)) << 16 >> 16
    }, zv.interleave3 = function(vv, zv, Pv) {
      return vv = 1227133513 & ((vv = 3272356035 & ((vv = 251719695 & ((vv = 4278190335 & ((vv &= 1023) | vv << 16)) | vv << 8)) | vv << 4)) | vv << 2), (vv |= (zv = 1227133513 & ((zv = 3272356035 & ((zv = 251719695 & ((zv = 4278190335 & ((zv &= 1023) | zv << 16)) | zv << 8)) | zv << 4)) | zv << 2)) << 1) | (Pv = 1227133513 & ((Pv = 3272356035 & ((Pv = 251719695 & ((Pv = 4278190335 & ((Pv &= 1023) | Pv << 16)) | Pv << 8)) | Pv << 4)) | Pv << 2)) << 2
    }, zv.deinterleave3 = function(vv, zv) {
      return (vv = 1023 & ((vv = 4278190335 & ((vv = 251719695 & ((vv = 3272356035 & ((vv = vv >>> zv & 1227133513) | vv >>> 2)) | vv >>> 4)) | vv >>> 8)) | vv >>> 16)) << 22 >> 22
    }, zv.nextCombination = function(vv) {
      var zv = vv | vv - 1;
      return zv + 1 | (~zv & -~zv) - 1 >>> Pv(vv) + 1
    }
  },
  36745: (vv, zv, Pv) => {
    Pv.d(zv, {
      Color3: () => hv.b,
      d: () => hv.e
    });
    var hv = Pv(36751);
    (0, hv.h)()
  },
  37290: (vv, zv, Pv) => {
    Pv.d(zv, {
      c: () => Sv
    });
    var hv = Pv(37293);
    class Sv {
      static GetPlanes(vv) {
        const zv = [];
        for (let Pv = 0; Pv < 6; Pv++) zv.push(new hv.b(0, 0, 0, 0));
        return Sv.GetPlanesToRef(vv, zv), zv
      }
      static GetNearPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] + Pv[2], zv.normal.y = Pv[7] + Pv[6], zv.normal.z = Pv[11] + Pv[10], zv.d = Pv[15] + Pv[14], zv.normalize()
      }
      static GetFarPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] - Pv[2], zv.normal.y = Pv[7] - Pv[6], zv.normal.z = Pv[11] - Pv[10], zv.d = Pv[15] - Pv[14], zv.normalize()
      }
      static GetLeftPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] + Pv[0], zv.normal.y = Pv[7] + Pv[4], zv.normal.z = Pv[11] + Pv[8], zv.d = Pv[15] + Pv[12], zv.normalize()
      }
      static GetRightPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] - Pv[0], zv.normal.y = Pv[7] - Pv[4], zv.normal.z = Pv[11] - Pv[8], zv.d = Pv[15] - Pv[12], zv.normalize()
      }
      static GetTopPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] - Pv[1], zv.normal.y = Pv[7] - Pv[5], zv.normal.z = Pv[11] - Pv[9], zv.d = Pv[15] - Pv[13], zv.normalize()
      }
      static GetBottomPlaneToRef(vv, zv) {
        const Pv = vv.m;
        zv.normal.x = Pv[3] + Pv[1], zv.normal.y = Pv[7] + Pv[5], zv.normal.z = Pv[11] + Pv[9], zv.d = Pv[15] + Pv[13], zv.normalize()
      }
      static GetPlanesToRef(vv, zv) {
        Sv.GetNearPlaneToRef(vv, zv[0]), Sv.GetFarPlaneToRef(vv, zv[1]), Sv.GetLeftPlaneToRef(vv, zv[2]), Sv.GetRightPlaneToRef(vv, zv[3]), Sv.GetTopPlaneToRef(vv, zv[4]), Sv.GetBottomPlaneToRef(vv, zv[5])
      }
      static IsPointInFrustum(vv, zv) {
        for (let Pv = 0; Pv < 6; Pv++)
          if (zv[Pv].dotCoordinate(vv) < 0) return !1;
        return !0
      }
    }
  },
  37293: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Sv
    });
    var hv = Pv(36594);
    class Sv {
      constructor(vv, zv, Pv, Sv) {
        this.normal = new hv.l(vv, zv, Pv), this.d = Sv
      }
      pPv() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Sv(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let vv = this.normal.getHashCode();
        return vv = 397 * vv ^ this.d, vv
      }
      normalize() {
        const vv = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let zv = 0;
        return 0 !== vv && (zv = 1 / vv), this.normal.x *= zv, this.normal.y *= zv, this.normal.z *= zv, this.d *= zv, this
      }
      transform(vv) {
        const zv = Sv._TmpMatrix;
        vv.invertToRef(zv);
        const Pv = zv.m,
          hv = this.normal.x,
          ev = this.normal.y,
          gv = this.normal.z,
          pv = this.d,
          dv = hv * Pv[0] + ev * Pv[1] + gv * Pv[2] + pv * Pv[3],
          Nv = hv * Pv[4] + ev * Pv[5] + gv * Pv[6] + pv * Pv[7],
          lv = hv * Pv[8] + ev * Pv[9] + gv * Pv[10] + pv * Pv[11],
          Tv = hv * Pv[12] + ev * Pv[13] + gv * Pv[14] + pv * Pv[15];
        return new Sv(dv, Nv, lv, Tv)
      }
      dotCoordinate(vv) {
        return this.normal.x * vv.x + this.normal.y * vv.y + this.normal.z * vv.z + this.d
      }
      copyFromPoints(vv, zv, Pv) {
        const hv = zv.x - vv.x,
          Sv = zv.y - vv.y,
          ev = zv.z - vv.z,
          gv = Pv.x - vv.x,
          pv = Pv.y - vv.y,
          dv = Pv.z - vv.z,
          Nv = Sv * dv - ev * pv,
          lv = ev * gv - hv * dv,
          Tv = hv * pv - Sv * gv,
          Wv = Math.sqrt(Nv * Nv + lv * lv + Tv * Tv);
        let wv;
        return wv = 0 !== Wv ? 1 / Wv : 0, this.normal.x = Nv * wv, this.normal.y = lv * wv, this.normal.z = Tv * wv, this.d = -(this.normal.x * vv.x + this.normal.y * vv.y + this.normal.z * vv.z), this
      }
      isFrontFacingTo(vv, zv) {
        return hv.l.Dot(this.normal, vv) <= zv
      }
      signedDistanceTo(vv) {
        return hv.l.Dot(vv, this.normal) + this.d
      }
      static FromArray(vv) {
        return new Sv(vv[0], vv[1], vv[2], vv[3])
      }
      static FromPoints(vv, zv, Pv) {
        const hv = new Sv(0, 0, 0, 0);
        return hv.copyFromPoints(vv, zv, Pv), hv
      }
      static FromPositionAndNormal(vv, zv) {
        const Pv = new Sv(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(vv, zv, Pv)
      }
      static FromPositionAndNormalToRef(vv, zv, Pv) {
        return Pv.normal.Vzv(zv), Pv.normal.normalize(), Pv.d = -vv.dot(Pv.normal), Pv
      }
      static SignedDistanceToPlaneFromPositionAndNormal(vv, zv, Pv) {
        const Sv = -(zv.x * vv.x + zv.y * vv.y + zv.z * vv.z);
        return hv.l.Dot(Pv, zv) + Sv
      }
    }
    Sv._TmpMatrix = hv.c.Identity()
  },
  36591: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      Matrix: () => hv.c,
      Quaternion: () => hv.d,
      RegisterMathVector: () => hv.e,
      TmpVectors: () => hv.i,
      Vector2: () => hv.j,
      fa: () => hv.l,
      Vector4: () => hv.m
    });
    var hv = Pv(36594);
    (0, hv.e)()
  },
  37633: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => hv
    });
    class hv {
      constructor(vv, zv, Pv, hv) {
        this.x = vv, this.y = zv, this.width = Pv, this.height = hv
      }
      toGlobal(vv, zv) {
        return new hv(this.x * vv, this.y * zv, this.width * vv, this.height * zv)
      }
      toGlobalToRef(vv, zv, Pv) {
        return Pv.x = this.x * vv, Pv.y = this.y * zv, Pv.width = this.width * vv, Pv.height = this.height * zv, this
      }
      clone() {
        return new hv(this.x, this.y, this.width, this.height)
      }
    }
  },
  37431: (vv, zv, Pv) => {
    function hv() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (vv => {
        const zv = 16 * Math.random() | 0;
        return ("x" === vv ? zv : 3 & zv | 8).toString(16)
      }))
    }
    Pv.d(zv, {
      b: () => hv
    })
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);