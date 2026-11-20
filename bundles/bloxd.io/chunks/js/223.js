/*! For license information please see bbb6l5.223.d383e0d8.chunk.js.LICENSE.txt */
export const id = 223;
export const ids = [223, 230];
export const modules = {
  38280: qq => {
    qq.exports = function(qq) {
      return null != qq && null != qq.constructor && "function" === typeof qq.constructor.isBuffer && qq.constructor.isBuffer(qq)
    }
  },
  38264: (qq, Eq, gq) => {
    var Yq = gq(38267),
      lq = gq(38273),
      Oq = gq(38280);
    gq.g.__TYPEDARRAY_POOL || (gq.g.__TYPEDARRAY_POOL = {
      UINT8: lq([32, 0]),
      UINT16: lq([32, 0]),
      UINT32: lq([32, 0]),
      INT8: lq([32, 0]),
      INT16: lq([32, 0]),
      INT32: lq([32, 0]),
      FLOAT: lq([32, 0]),
      DOUBLE: lq([32, 0]),
      DATA: lq([32, 0]),
      UINT8C: lq([32, 0]),
      BUFFER: lq([32, 0])
    });
    var mq = "undefined" !== typeof Uint8ClampedArray,
      xq = gq.g.__TYPEDARRAY_POOL;
    xq.UINT8C || (xq.UINT8C = lq([32, 0])), xq.BUFFER || (xq.BUFFER = lq([32, 0]));
    var Aq = xq.DATA,
      cq = xq.BUFFER;

    function uq(qq) {
      if (qq) {
        var Eq = qq.length || qq.byteLength,
          gq = Yq.log2(Eq);
        Aq[gq].push(qq)
      }
    }

    function Bq(qq) {
      qq = Yq.nextPow2(qq);
      var Eq = Yq.log2(qq),
        gq = Aq[Eq];
      return gq.length > 0 ? gq.pop() : new ArrayBuffer(qq)
    }

    function Wq(qq) {
      return new Uint8Array(Bq(qq), 0, qq)
    }

    function Nq(qq) {
      return new Uint16Array(Bq(2 * qq), 0, qq)
    }

    function aq(qq) {
      return new Uint32Array(Bq(4 * qq), 0, qq)
    }

    function Vq(qq) {
      return new Int8Array(Bq(qq), 0, qq)
    }

    function dq(qq) {
      return new Int16Array(Bq(2 * qq), 0, qq)
    }

    function jq(qq) {
      return new Int32Array(Bq(4 * qq), 0, qq)
    }

    function Hq(qq) {
      return new Float32Array(Bq(4 * qq), 0, qq)
    }

    function oq(qq) {
      return new Float64Array(Bq(8 * qq), 0, qq)
    }

    function Pq(qq) {
      return mq ? new Uint8ClampedArray(Bq(qq), 0, qq) : Wq(qq)
    }

    function Qq(qq) {
      return new DataView(Bq(qq), 0, qq)
    }
    Eq.free = function(qq) {
      if (Oq(qq)) cq[Yq.log2(qq.length)].push(qq);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(qq) && (qq = qq.buffer), !qq) return;
        var Eq = qq.length || qq.byteLength,
          gq = 0 | Yq.log2(Eq);
        Aq[gq].push(qq)
      }
    }, Eq.freeUint8 = Eq.freeUint16 = Eq.freeUint32 = Eq.freeInt8 = Eq.freeInt16 = Eq.freeInt32 = Eq.freeFloat32 = Eq.freeFloat = Eq.freeFloat64 = Eq.freeDouble = Eq.freeUint8Clamped = Eq.freeDataView = function(qq) {
      uq(qq.buffer)
    }, Eq.freeArrayBuffer = uq, Eq.freeBuffer = function(qq) {
      cq[Yq.log2(qq.length)].push(qq)
    }, Eq.malloc = function(qq, Eq) {
      if (void 0 === Eq || "arraybuffer" === Eq) return Bq(qq);
      switch (Eq) {
        case "uint8":
          return Wq(qq);
        case "uint16":
          return Nq(qq);
        case "uint32":
          return aq(qq);
        case "int8":
          return Vq(qq);
        case "int16":
          return dq(qq);
        case "int32":
          return jq(qq);
        case "float":
        case "float32":
          return Hq(qq);
        case "double":
        case "float64":
          return oq(qq);
        case "uint8_clamped":
          return Pq(qq);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return Qq(qq);
        default:
          return null
      }
      return null
    }, Eq.mallocArrayBuffer = Bq, Eq.mallocUint8 = Wq, Eq.mallocUint16 = Nq, Eq.mallocUint32 = aq, Eq.mallocInt8 = Vq, Eq.mallocInt16 = dq, Eq.mallocInt32 = jq, Eq.mallocFloat32 = Eq.mallocFloat = Hq, Eq.mallocFloat64 = Eq.mallocDouble = oq, Eq.mallocUint8Clamped = Pq, Eq.mallocDataView = Qq, Eq.clearCache = function() {
      for (var qq = 0; qq < 32; ++qq) xq.UINT8[qq].length = 0, xq.UINT16[qq].length = 0, xq.UINT32[qq].length = 0, xq.INT8[qq].length = 0, xq.INT16[qq].length = 0, xq.INT32[qq].length = 0, xq.FLOAT[qq].length = 0, xq.DOUBLE[qq].length = 0, xq.UINT8C[qq].length = 0, Aq[qq].length = 0, cq[qq].length = 0
    }
  },
  38267: (qq, Eq) => {
    function gq(qq) {
      var Eq = 32;
      return (qq &= -qq) && Eq--, 65535 & qq && (Eq -= 16), 16711935 & qq && (Eq -= 8), 252645135 & qq && (Eq -= 4), 858993459 & qq && (Eq -= 2), 1431655765 & qq && (Eq -= 1), Eq
    }
    Eq.INT_BITS = 32, Eq.INT_MAX = 2147483647, Eq.INT_MIN = -1 << 31, Eq.sign = function(qq) {
      return (qq > 0) - (qq < 0)
    }, Eq.abs = function(qq) {
      var Eq = qq >> 31;
      return (qq ^ Eq) - Eq
    }, Eq.min = function(qq, Eq) {
      return Eq ^ (qq ^ Eq) & -(qq < Eq)
    }, Eq.max = function(qq, Eq) {
      return qq ^ (qq ^ Eq) & -(qq < Eq)
    }, Eq.isPow2 = function(qq) {
      return !(qq & qq - 1) && !!qq
    }, Eq.log2 = function(qq) {
      var Eq, gq;
      return Eq = (qq > 65535) << 4, Eq |= gq = ((qq >>>= Eq) > 255) << 3, Eq |= gq = ((qq >>>= gq) > 15) << 2, (Eq |= gq = ((qq >>>= gq) > 3) << 1) | (qq >>>= gq) >> 1
    }, Eq.log10 = function(qq) {
      return qq >= 1e9 ? 9 : qq >= 1e8 ? 8 : qq >= 1e7 ? 7 : qq >= 1e6 ? 6 : qq >= 1e5 ? 5 : qq >= 1e4 ? 4 : qq >= 1e3 ? 3 : qq >= 100 ? 2 : qq >= 10 ? 1 : 0
    }, Eq.popCount = function(qq) {
      return 16843009 * ((qq = (858993459 & (qq -= qq >>> 1 & 1431655765)) + (qq >>> 2 & 858993459)) + (qq >>> 4) & 252645135) >>> 24
    }, Eq.countTrailingZeros = gq, Eq.nextPow2 = function(qq) {
      return qq += 0 === qq, --qq, qq |= qq >>> 1, qq |= qq >>> 2, qq |= qq >>> 4, qq |= qq >>> 8, (qq |= qq >>> 16) + 1
    }, Eq.prevPow2 = function(qq) {
      return qq |= qq >>> 1, qq |= qq >>> 2, qq |= qq >>> 4, qq |= qq >>> 8, (qq |= qq >>> 16) - (qq >>> 1)
    }, Eq.parity = function(qq) {
      return qq ^= qq >>> 16, qq ^= qq >>> 8, qq ^= qq >>> 4, 27030 >>> (qq &= 15) & 1
    };
    var Yq = new Array(256);
    ! function(qq) {
      for (var Eq = 0; Eq < 256; ++Eq) {
        var gq = Eq,
          Yq = Eq,
          lq = 7;
        for (gq >>>= 1; gq; gq >>>= 1) Yq <<= 1, Yq |= 1 & gq, --lq;
        qq[Eq] = Yq << lq & 255
      }
    }(Yq), Eq.reverse = function(qq) {
      return Yq[255 & qq] << 24 | Yq[qq >>> 8 & 255] << 16 | Yq[qq >>> 16 & 255] << 8 | Yq[qq >>> 24 & 255]
    }, Eq.interleave2 = function(qq, Eq) {
      return (qq = 1431655765 & ((qq = 858993459 & ((qq = 252645135 & ((qq = 16711935 & ((qq &= 65535) | qq << 8)) | qq << 4)) | qq << 2)) | qq << 1)) | (Eq = 1431655765 & ((Eq = 858993459 & ((Eq = 252645135 & ((Eq = 16711935 & ((Eq &= 65535) | Eq << 8)) | Eq << 4)) | Eq << 2)) | Eq << 1)) << 1
    }, Eq.deinterleave2 = function(qq, Eq) {
      return (qq = 65535 & ((qq = 16711935 & ((qq = 252645135 & ((qq = 858993459 & ((qq = qq >>> Eq & 1431655765) | qq >>> 1)) | qq >>> 2)) | qq >>> 4)) | qq >>> 16)) << 16 >> 16
    }, Eq.interleave3 = function(qq, Eq, gq) {
      return qq = 1227133513 & ((qq = 3272356035 & ((qq = 251719695 & ((qq = 4278190335 & ((qq &= 1023) | qq << 16)) | qq << 8)) | qq << 4)) | qq << 2), (qq |= (Eq = 1227133513 & ((Eq = 3272356035 & ((Eq = 251719695 & ((Eq = 4278190335 & ((Eq &= 1023) | Eq << 16)) | Eq << 8)) | Eq << 4)) | Eq << 2)) << 1) | (gq = 1227133513 & ((gq = 3272356035 & ((gq = 251719695 & ((gq = 4278190335 & ((gq &= 1023) | gq << 16)) | gq << 8)) | gq << 4)) | gq << 2)) << 2
    }, Eq.deinterleave3 = function(qq, Eq) {
      return (qq = 1023 & ((qq = 4278190335 & ((qq = 251719695 & ((qq = 3272356035 & ((qq = qq >>> Eq & 1227133513) | qq >>> 2)) | qq >>> 4)) | qq >>> 8)) | qq >>> 16)) << 22 >> 22
    }, Eq.nextCombination = function(qq) {
      var Eq = qq | qq - 1;
      return Eq + 1 | (~Eq & -~Eq) - 1 >>> gq(qq) + 1
    }
  },
  38258: (qq, Eq, gq) => {
    qq.exports = function(qq, Eq, gq) {
      switch (arguments.length) {
        case 1:
          return Yq = [], cq(lq = qq, lq, uq, !0), Yq;
        case 2:
          return "function" === typeof Eq ? cq(qq, qq, Eq, !0) : function(qq, Eq) {
            return Yq = [], cq(qq, Eq, uq, !1), Yq
          }(qq, Eq);
        case 3:
          return cq(qq, Eq, gq, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var lq
    };
    var Yq, lq = gq(38264),
      Oq = gq(38284),
      mq = gq(38302);

    function xq(qq, Eq) {
      for (var gq = 0; gq < qq; ++gq)
        if (!(Eq[gq] <= Eq[gq + qq])) return !0;
      return !1
    }

    function Aq(qq, Eq, gq, Yq) {
      for (var lq = 0, Oq = 0, mq = 0, Aq = qq.length; mq < Aq; ++mq) {
        var cq = qq[mq];
        if (!xq(Eq, cq)) {
          for (var uq = 0; uq < 2 * Eq; ++uq) gq[lq++] = cq[uq];
          Yq[Oq++] = mq
        }
      }
      return Oq
    }

    function cq(qq, Eq, gq, Yq) {
      var xq = qq.length,
        cq = Eq.length;
      if (!(xq <= 0 || cq <= 0)) {
        var uq = qq[0].length >>> 1;
        if (!(uq <= 0)) {
          var Bq, Wq = lq.mallocDouble(2 * uq * xq),
            Nq = lq.mallocInt32(xq);
          if ((xq = Aq(qq, uq, Wq, Nq)) > 0) {
            if (1 === uq && Yq) Oq.init(xq), Bq = Oq.sweepComplete(uq, gq, 0, xq, Wq, Nq, 0, xq, Wq, Nq);
            else {
              var aq = lq.mallocDouble(2 * uq * cq),
                Vq = lq.mallocInt32(cq);
              (cq = Aq(Eq, uq, aq, Vq)) > 0 && (Oq.init(xq + cq), Bq = 1 === uq ? Oq.sweepBipartite(uq, gq, 0, xq, Wq, Nq, 0, cq, aq, Vq) : mq(uq, gq, Yq, xq, Wq, Nq, cq, aq, Vq), lq.free(aq), lq.free(Vq))
            }
            lq.free(Wq), lq.free(Nq)
          }
          return Bq
        }
      }
    }

    function uq(qq, Eq) {
      Yq.push([qq, Eq])
    }
  },
  38309: (qq, Eq) => {
    var gq = "d",
      Yq = "ax",
      lq = "fp",
      Oq = "es",
      mq = "rs",
      xq = "re",
      Aq = "rb",
      cq = "bs",
      uq = "be",
      Bq = "bb",
      Wq = [gq, Yq, "vv", mq, xq, Aq, "ri", cq, uq, Bq, "bi"];

    function Nq(qq) {
      var Eq = "bruteForce" + (qq ? "Full" : "Partial"),
        Yq = [],
        mq = Wq.slice();
      qq || mq.splice(3, 0, lq);
      var xq = ["function " + Eq + "(" + mq.join() + "){"];

      function Aq(Eq, lq) {
        var mq = function(qq, Eq, Yq) {
          var lq = "bruteForce" + (qq ? "Red" : "Blue") + (Eq ? "Flip" : "") + (Yq ? "Full" : ""),
            mq = ["function ", lq, "(", Wq.join(), "){", "var ", Oq, "=2*", gq, ";"],
            xq = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            Aq = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (Yq ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return qq ? mq.push(xq, "Q", ":", Aq) : mq.push(Aq, "Q", ":", xq), Yq ? mq.push("if(y1<x0||x1<y0)continue;") : Eq ? mq.push("if(y0<=x0||x1<y0)continue;") : mq.push("if(y0<x0||x1<y0)continue;"), mq.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), Eq ? mq.push("yi,xi") : mq.push("xi,yi"), mq.push(");if(rv!==void 0)return rv;}}}"), {
            name: lq,
            code: mq.join("")
          }
        }(Eq, lq, qq);
        Yq.push(mq.code), xq.push("return " + mq.name + "(" + Wq.join() + ");")
      }
      xq.push("if(re-rs>be-bs){"), qq ? (Aq(!0, !1), xq.push("}else{"), Aq(!1, !1)) : (xq.push("if(fp){"), Aq(!0, !0), xq.push("}else{"), Aq(!0, !1), xq.push("}}else{if(fp){"), Aq(!1, !0), xq.push("}else{"), Aq(!1, !1), xq.push("}")), xq.push("}}return " + Eq);
      var cq = Yq.join("") + xq.join("");
      return new Function(cq)()
    }
    Eq.partial = Nq(!1), Eq.full = Nq(!0)
  },
  38302: (qq, Eq, gq) => {
    qq.exports = function(qq, Eq, gq, Oq, uq, nq, bq, iq, Zq) {
      ! function(qq, Eq) {
        var gq = 8 * lq.log2(Eq + 1) * (qq + 1) | 0,
          Oq = lq.nextPow2(Pq * gq);
        yq.length < Oq && (Yq.free(yq), yq = Yq.mallocInt32(Oq));
        var mq = lq.nextPow2(Qq * gq);
        tq.length < mq && (Yq.free(tq), tq = Yq.mallocDouble(mq))
      }(qq, Oq + bq);
      var fq, Mq = 0,
        Tq = 2 * qq;
      rq(Mq++, 0, 0, Oq, 0, bq, gq ? 16 : 0, -1 / 0, 1 / 0), gq || rq(Mq++, 0, 0, bq, 0, Oq, 1, -1 / 0, 1 / 0);
      for (; Mq > 0;) {
        var zq = (Mq -= 1) * Pq,
          Sq = yq[zq],
          pq = yq[zq + 1],
          Gq = yq[zq + 2],
          Lq = yq[zq + 3],
          Jq = yq[zq + 4],
          kq = yq[zq + 5],
          Rq = Mq * Qq,
          Uq = tq[Rq],
          Fq = tq[Rq + 1],
          sq = 1 & kq,
          Xq = !!(16 & kq),
          wq = uq,
          Kq = nq,
          Cq = iq,
          Iq = Zq;
        if (sq && (wq = iq, Kq = Zq, Cq = uq, Iq = nq), !(2 & kq && pq >= (Gq = dq(qq, Sq, pq, Gq, wq, Kq, Fq))) && !(4 & kq && (pq = jq(qq, Sq, pq, Gq, wq, Kq, Uq)) >= Gq)) {
          var eq = Gq - pq,
            Dq = Jq - Lq;
          if (Xq) {
            if (qq * eq * (eq + Dq) < Nq) {
              if (void 0 !== (fq = Aq.scanComplete(qq, Sq, Eq, pq, Gq, wq, Kq, Lq, Jq, Cq, Iq))) return fq;
              continue
            }
          } else {
            if (qq * Math.min(eq, Dq) < Bq) {
              if (void 0 !== (fq = mq(qq, Sq, Eq, sq, pq, Gq, wq, Kq, Lq, Jq, Cq, Iq))) return fq;
              continue
            }
            if (qq * eq * Dq < Wq) {
              if (void 0 !== (fq = Aq.scanBipartite(qq, Sq, Eq, sq, pq, Gq, wq, Kq, Lq, Jq, Cq, Iq))) return fq;
              continue
            }
          }
          var qE = aq(qq, Sq, pq, Gq, wq, Kq, Uq, Fq);
          if (pq < qE)
            if (qq * (qE - pq) < Bq) {
              if (void 0 !== (fq = xq(qq, Sq + 1, Eq, pq, qE, wq, Kq, Lq, Jq, Cq, Iq))) return fq
            } else if (Sq === qq - 2) {
            if (void 0 !== (fq = sq ? Aq.sweepBipartite(qq, Eq, Lq, Jq, Cq, Iq, pq, qE, wq, Kq) : Aq.sweepBipartite(qq, Eq, pq, qE, wq, Kq, Lq, Jq, Cq, Iq))) return fq
          } else rq(Mq++, Sq + 1, pq, qE, Lq, Jq, sq, -1 / 0, 1 / 0), rq(Mq++, Sq + 1, Lq, Jq, pq, qE, 1 ^ sq, -1 / 0, 1 / 0);
          if (qE < Gq) {
            var EE = cq(qq, Sq, Lq, Jq, Cq, Iq),
              gE = Cq[Tq * EE + Sq],
              YE = Vq(qq, Sq, EE, Jq, Cq, Iq, gE);
            if (YE < Jq && rq(Mq++, Sq, qE, Gq, YE, Jq, (4 | sq) + (Xq ? 16 : 0), gE, Fq), Lq < EE && rq(Mq++, Sq, qE, Gq, Lq, EE, (2 | sq) + (Xq ? 16 : 0), Uq, gE), EE + 1 === YE) {
              if (void 0 !== (fq = Xq ? hq(qq, Sq, Eq, qE, Gq, wq, Kq, EE, Cq, Iq[EE]) : vq(qq, Sq, Eq, sq, qE, Gq, wq, Kq, EE, Cq, Iq[EE]))) return fq
            } else if (EE < YE) {
              var lE;
              if (Xq) {
                if (qE < (lE = Hq(qq, Sq, qE, Gq, wq, Kq, gE))) {
                  var OE = Vq(qq, Sq, qE, lE, wq, Kq, gE);
                  if (Sq === qq - 2) {
                    if (qE < OE && void 0 !== (fq = Aq.sweepComplete(qq, Eq, qE, OE, wq, Kq, EE, YE, Cq, Iq))) return fq;
                    if (OE < lE && void 0 !== (fq = Aq.sweepBipartite(qq, Eq, OE, lE, wq, Kq, EE, YE, Cq, Iq))) return fq
                  } else qE < OE && rq(Mq++, Sq + 1, qE, OE, EE, YE, 16, -1 / 0, 1 / 0), OE < lE && (rq(Mq++, Sq + 1, OE, lE, EE, YE, 0, -1 / 0, 1 / 0), rq(Mq++, Sq + 1, EE, YE, OE, lE, 1, -1 / 0, 1 / 0))
                }
              } else qE < (lE = sq ? oq(qq, Sq, qE, Gq, wq, Kq, gE) : Hq(qq, Sq, qE, Gq, wq, Kq, gE)) && (Sq === qq - 2 ? fq = sq ? Aq.sweepBipartite(qq, Eq, EE, YE, Cq, Iq, qE, lE, wq, Kq) : Aq.sweepBipartite(qq, Eq, qE, lE, wq, Kq, EE, YE, Cq, Iq) : (rq(Mq++, Sq + 1, qE, lE, EE, YE, sq, -1 / 0, 1 / 0), rq(Mq++, Sq + 1, EE, YE, qE, lE, 1 ^ sq, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var Yq = gq(38264),
      lq = gq(38267),
      Oq = gq(38309),
      mq = Oq.partial,
      xq = Oq.full,
      Aq = gq(38284),
      cq = gq(38317),
      uq = gq(38319),
      Bq = 128,
      Wq = 1 << 22,
      Nq = 1 << 22,
      aq = uq("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      Vq = uq("lo===p0", ["p0"]),
      dq = uq("lo<p0", ["p0"]),
      jq = uq("hi<=p0", ["p0"]),
      Hq = uq("lo<=p0&&p0<=hi", ["p0"]),
      oq = uq("lo<p0&&p0<=hi", ["p0"]),
      Pq = 6,
      Qq = 2,
      yq = Yq.mallocInt32(1024),
      tq = Yq.mallocDouble(1024);

    function rq(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq) {
      var cq = Pq * qq;
      yq[cq] = Eq, yq[cq + 1] = gq, yq[cq + 2] = Yq, yq[cq + 3] = lq, yq[cq + 4] = Oq, yq[cq + 5] = mq;
      var uq = Qq * qq;
      tq[uq] = xq, tq[uq + 1] = Aq
    }

    function vq(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq) {
      var Bq = 2 * qq,
        Wq = Aq * Bq,
        Nq = cq[Wq + Eq];
      qq: for (var aq = lq, Vq = lq * Bq; aq < Oq; ++aq, Vq += Bq) {
        var dq = mq[Vq + Eq],
          jq = mq[Vq + Eq + qq];
        if (!(Nq < dq || jq < Nq) && (!Yq || Nq !== dq)) {
          for (var Hq, oq = xq[aq], Pq = Eq + 1; Pq < qq; ++Pq) {
            dq = mq[Vq + Pq], jq = mq[Vq + Pq + qq];
            var Qq = cq[Wq + Pq],
              yq = cq[Wq + Pq + qq];
            if (jq < Qq || yq < dq) continue qq
          }
          if (void 0 !== (Hq = Yq ? gq(uq, oq) : gq(oq, uq))) return Hq
        }
      }
    }

    function hq(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq) {
      var uq = 2 * qq,
        Bq = xq * uq,
        Wq = Aq[Bq + Eq];
      qq: for (var Nq = Yq, aq = Yq * uq; Nq < lq; ++Nq, aq += uq) {
        var Vq = mq[Nq];
        if (Vq !== cq) {
          var dq = Oq[aq + Eq],
            jq = Oq[aq + Eq + qq];
          if (!(Wq < dq || jq < Wq)) {
            for (var Hq = Eq + 1; Hq < qq; ++Hq) {
              dq = Oq[aq + Hq], jq = Oq[aq + Hq + qq];
              var oq = Aq[Bq + Hq],
                Pq = Aq[Bq + Hq + qq];
              if (jq < oq || Pq < dq) continue qq
            }
            var Qq = gq(Vq, cq);
            if (void 0 !== Qq) return Qq
          }
        }
      }
    }
  },
  38317: (qq, Eq, gq) => {
    qq.exports = function(qq, Eq, gq, mq, xq, Aq) {
      if (mq <= gq + 1) return gq;
      var cq = gq,
        uq = mq,
        Bq = mq + gq >>> 1,
        Wq = 2 * qq,
        Nq = Bq,
        aq = xq[Wq * Bq + Eq];
      for (; cq < uq;) {
        if (uq - cq < lq) {
          Oq(qq, Eq, cq, uq, xq, Aq), aq = xq[Wq * Bq + Eq];
          break
        }
        var Vq = uq - cq,
          dq = Math.random() * Vq + cq | 0,
          jq = xq[Wq * dq + Eq],
          Hq = Math.random() * Vq + cq | 0,
          oq = xq[Wq * Hq + Eq],
          Pq = Math.random() * Vq + cq | 0,
          Qq = xq[Wq * Pq + Eq];
        jq <= oq ? Qq >= oq ? (Nq = Hq, aq = oq) : jq >= Qq ? (Nq = dq, aq = jq) : (Nq = Pq, aq = Qq) : oq >= Qq ? (Nq = Hq, aq = oq) : Qq >= jq ? (Nq = dq, aq = jq) : (Nq = Pq, aq = Qq);
        for (var yq = Wq * (uq - 1), tq = Wq * Nq, rq = 0; rq < Wq; ++rq, ++yq, ++tq) {
          var vq = xq[yq];
          xq[yq] = xq[tq], xq[tq] = vq
        }
        var hq = Aq[uq - 1];
        Aq[uq - 1] = Aq[Nq], Aq[Nq] = hq;
        for (yq = Wq * (uq - 1), tq = Wq * (Nq = Yq(qq, Eq, cq, uq - 1, xq, Aq, aq)), rq = 0; rq < Wq; ++rq, ++yq, ++tq) {
          vq = xq[yq];
          xq[yq] = xq[tq], xq[tq] = vq
        }
        hq = Aq[uq - 1];
        if (Aq[uq - 1] = Aq[Nq], Aq[Nq] = hq, Bq < Nq) {
          for (uq = Nq - 1; cq < uq && xq[Wq * (uq - 1) + Eq] === aq;) uq -= 1;
          uq += 1
        } else {
          if (!(Nq < Bq)) break;
          for (cq = Nq + 1; cq < uq && xq[Wq * cq + Eq] === aq;) cq += 1
        }
      }
      return Yq(qq, Eq, gq, Bq, xq, Aq, xq[Wq * Bq + Eq])
    };
    var Yq = gq(38319)("lo<p0", ["p0"]),
      lq = 8;

    function Oq(qq, Eq, gq, Yq, lq, Oq) {
      for (var mq = 2 * qq, xq = mq * (gq + 1) + Eq, Aq = gq + 1; Aq < Yq; ++Aq, xq += mq)
        for (var cq = lq[xq], uq = Aq, Bq = mq * (Aq - 1); uq > gq && lq[Bq + Eq] > cq; --uq, Bq -= mq) {
          for (var Wq = Bq, Nq = Bq + mq, aq = 0; aq < mq; ++aq, ++Wq, ++Nq) {
            var Vq = lq[Wq];
            lq[Wq] = lq[Nq], lq[Nq] = Vq
          }
          var dq = Oq[uq];
          Oq[uq] = Oq[uq - 1], Oq[uq - 1] = dq
        }
    }
  },
  38319: qq => {
    qq.exports = function(qq, gq) {
      var Yq = "abcdef".split("").concat(gq),
        lq = [];
      qq.indexOf("lo") >= 0 && lq.push("lo=e[k+n]");
      qq.indexOf("hi") >= 0 && lq.push("hi=e[k+o]");
      return Yq.push(Eq.replace("_", lq.join()).replace("$", qq)), Function.apply(void 0, Yq)
    };
    var Eq = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  38293: qq => {
    qq.exports = function(qq, Yq) {
      Yq <= 4 * Eq ? gq(0, Yq - 1, qq) : cq(0, Yq - 1, qq)
    };
    var Eq = 32;

    function gq(qq, Eq, gq) {
      for (var Yq = 2 * (qq + 1), lq = qq + 1; lq <= Eq; ++lq) {
        for (var Oq = gq[Yq++], mq = gq[Yq++], xq = lq, Aq = Yq - 2; xq-- > qq;) {
          var cq = gq[Aq - 2],
            uq = gq[Aq - 1];
          if (cq < Oq) break;
          if (cq === Oq && uq < mq) break;
          gq[Aq] = cq, gq[Aq + 1] = uq, Aq -= 2
        }
        gq[Aq] = Oq, gq[Aq + 1] = mq
      }
    }

    function Yq(qq, Eq, gq) {
      Eq *= 2;
      var Yq = gq[qq *= 2],
        lq = gq[qq + 1];
      gq[qq] = gq[Eq], gq[qq + 1] = gq[Eq + 1], gq[Eq] = Yq, gq[Eq + 1] = lq
    }

    function lq(qq, Eq, gq) {
      Eq *= 2, gq[qq *= 2] = gq[Eq], gq[qq + 1] = gq[Eq + 1]
    }

    function Oq(qq, Eq, gq, Yq) {
      Eq *= 2, gq *= 2;
      var lq = Yq[qq *= 2],
        Oq = Yq[qq + 1];
      Yq[qq] = Yq[Eq], Yq[qq + 1] = Yq[Eq + 1], Yq[Eq] = Yq[gq], Yq[Eq + 1] = Yq[gq + 1], Yq[gq] = lq, Yq[gq + 1] = Oq
    }

    function mq(qq, Eq, gq, Yq, lq) {
      Eq *= 2, lq[qq *= 2] = lq[Eq], lq[Eq] = gq, lq[qq + 1] = lq[Eq + 1], lq[Eq + 1] = Yq
    }

    function xq(qq, Eq, gq) {
      Eq *= 2;
      var Yq = gq[qq *= 2],
        lq = gq[Eq];
      return !(Yq < lq) && (Yq !== lq || gq[qq + 1] > gq[Eq + 1])
    }

    function Aq(qq, Eq, gq, Yq) {
      var lq = Yq[qq *= 2];
      return lq < Eq || lq === Eq && Yq[qq + 1] < gq
    }

    function cq(qq, uq, Bq) {
      var Wq = (uq - qq + 1) / 6 | 0,
        Nq = qq + Wq,
        aq = uq - Wq,
        Vq = qq + uq >> 1,
        dq = Vq - Wq,
        jq = Vq + Wq,
        Hq = Nq,
        oq = dq,
        Pq = Vq,
        Qq = jq,
        yq = aq,
        tq = qq + 1,
        rq = uq - 1,
        vq = 0;
      xq(Hq, oq, Bq) && (vq = Hq, Hq = oq, oq = vq), xq(Qq, yq, Bq) && (vq = Qq, Qq = yq, yq = vq), xq(Hq, Pq, Bq) && (vq = Hq, Hq = Pq, Pq = vq), xq(oq, Pq, Bq) && (vq = oq, oq = Pq, Pq = vq), xq(Hq, Qq, Bq) && (vq = Hq, Hq = Qq, Qq = vq), xq(Pq, Qq, Bq) && (vq = Pq, Pq = Qq, Qq = vq), xq(oq, yq, Bq) && (vq = oq, oq = yq, yq = vq), xq(oq, Pq, Bq) && (vq = oq, oq = Pq, Pq = vq), xq(Qq, yq, Bq) && (vq = Qq, Qq = yq, yq = vq);
      for (var hq = Bq[2 * oq], nq = Bq[2 * oq + 1], bq = Bq[2 * Qq], iq = Bq[2 * Qq + 1], Zq = 2 * Hq, fq = 2 * Pq, Mq = 2 * yq, Tq = 2 * Nq, zq = 2 * Vq, Sq = 2 * aq, pq = 0; pq < 2; ++pq) {
        var Gq = Bq[Zq + pq],
          Lq = Bq[fq + pq],
          Jq = Bq[Mq + pq];
        Bq[Tq + pq] = Gq, Bq[zq + pq] = Lq, Bq[Sq + pq] = Jq
      }
      lq(dq, qq, Bq), lq(jq, uq, Bq);
      for (var kq = tq; kq <= rq; ++kq)
        if (Aq(kq, hq, nq, Bq)) kq !== tq && Yq(kq, tq, Bq), ++tq;
        else if (!Aq(kq, bq, iq, Bq))
        for (;;) {
          if (Aq(rq, bq, iq, Bq)) {
            Aq(rq, hq, nq, Bq) ? (Oq(kq, tq, rq, Bq), ++tq, --rq) : (Yq(kq, rq, Bq), --rq);
            break
          }
          if (--rq < kq) break
        }
      mq(qq, tq - 1, hq, nq, Bq), mq(uq, rq + 1, bq, iq, Bq), tq - 2 - qq <= Eq ? gq(qq, tq - 2, Bq) : cq(qq, tq - 2, Bq), uq - (rq + 2) <= Eq ? gq(rq + 2, uq, Bq) : cq(rq + 2, uq, Bq), rq - tq <= Eq ? gq(tq, rq, Bq) : cq(tq, rq, Bq)
    }
  },
  38284: (qq, Eq, gq) => {
    qq.exports = {
      init: function(qq) {
        var Eq = lq.nextPow2(qq);
        Aq.length < Eq && (Yq.free(Aq), Aq = Yq.mallocInt32(Eq));
        cq.length < Eq && (Yq.free(cq), cq = Yq.mallocInt32(Eq));
        uq.length < Eq && (Yq.free(uq), uq = Yq.mallocInt32(Eq));
        Bq.length < Eq && (Yq.free(Bq), Bq = Yq.mallocInt32(Eq));
        Wq.length < Eq && (Yq.free(Wq), Wq = Yq.mallocInt32(Eq));
        Nq.length < Eq && (Yq.free(Nq), Nq = Yq.mallocInt32(Eq));
        var gq = 8 * Eq;
        aq.length < gq && (Yq.free(aq), aq = Yq.mallocDouble(gq))
      },
      sweepBipartite: function(qq, Eq, gq, Yq, lq, xq, Wq, Nq, jq, Hq) {
        for (var oq = 0, Pq = 2 * qq, Qq = qq - 1, yq = Pq - 1, tq = gq; tq < Yq; ++tq) {
          var rq = xq[tq],
            vq = Pq * tq;
          aq[oq++] = lq[vq + Qq], aq[oq++] = -(rq + 1), aq[oq++] = lq[vq + yq], aq[oq++] = rq
        }
        for (tq = Wq; tq < Nq; ++tq) {
          rq = Hq[tq] + mq;
          var hq = Pq * tq;
          aq[oq++] = jq[hq + Qq], aq[oq++] = -rq, aq[oq++] = jq[hq + yq], aq[oq++] = rq
        }
        var nq = oq >>> 1;
        Oq(aq, nq);
        var bq = 0,
          iq = 0;
        for (tq = 0; tq < nq; ++tq) {
          var Zq = 0 | aq[2 * tq + 1];
          if (Zq >= mq) Vq(uq, Bq, iq--, Zq = Zq - mq | 0);
          else if (Zq >= 0) Vq(Aq, cq, bq--, Zq);
          else if (Zq <= -mq) {
            Zq = -Zq - mq | 0;
            for (var fq = 0; fq < bq; ++fq) {
              if (void 0 !== (Mq = Eq(Aq[fq], Zq))) return Mq
            }
            dq(uq, Bq, iq++, Zq)
          } else {
            Zq = -Zq - 1 | 0;
            for (fq = 0; fq < iq; ++fq) {
              var Mq;
              if (void 0 !== (Mq = Eq(Zq, uq[fq]))) return Mq
            }
            dq(Aq, cq, bq++, Zq)
          }
        }
      },
      sweepComplete: function(qq, Eq, gq, Yq, lq, mq, xq, jq, Hq, oq) {
        for (var Pq = 0, Qq = 2 * qq, yq = qq - 1, tq = Qq - 1, rq = gq; rq < Yq; ++rq) {
          var vq = mq[rq] + 1 << 1,
            hq = Qq * rq;
          aq[Pq++] = lq[hq + yq], aq[Pq++] = -vq, aq[Pq++] = lq[hq + tq], aq[Pq++] = vq
        }
        for (rq = xq; rq < jq; ++rq) {
          vq = oq[rq] + 1 << 1;
          var nq = Qq * rq;
          aq[Pq++] = Hq[nq + yq], aq[Pq++] = 1 | -vq, aq[Pq++] = Hq[nq + tq], aq[Pq++] = 1 | vq
        }
        var bq = Pq >>> 1;
        Oq(aq, bq);
        var iq = 0,
          Zq = 0,
          fq = 0;
        for (rq = 0; rq < bq; ++rq) {
          var Mq = 0 | aq[2 * rq + 1],
            Tq = 1 & Mq;
          if (rq < bq - 1 && Mq >> 1 === aq[2 * rq + 3] >> 1 && (Tq = 2, rq += 1), Mq < 0) {
            for (var zq = -(Mq >> 1) - 1, Sq = 0; Sq < fq; ++Sq) {
              if (void 0 !== (pq = Eq(Wq[Sq], zq))) return pq
            }
            if (0 !== Tq)
              for (Sq = 0; Sq < iq; ++Sq) {
                if (void 0 !== (pq = Eq(Aq[Sq], zq))) return pq
              }
            if (1 !== Tq)
              for (Sq = 0; Sq < Zq; ++Sq) {
                var pq;
                if (void 0 !== (pq = Eq(uq[Sq], zq))) return pq
              }
            0 === Tq ? dq(Aq, cq, iq++, zq) : 1 === Tq ? dq(uq, Bq, Zq++, zq) : 2 === Tq && dq(Wq, Nq, fq++, zq)
          } else {
            zq = (Mq >> 1) - 1;
            0 === Tq ? Vq(Aq, cq, iq--, zq) : 1 === Tq ? Vq(uq, Bq, Zq--, zq) : 2 === Tq && Vq(Wq, Nq, fq--, zq)
          }
        }
      },
      scanBipartite: function(qq, Eq, gq, Yq, lq, xq, uq, Bq, Wq, Nq, jq, Hq) {
        var oq = 0,
          Pq = 2 * qq,
          Qq = Eq,
          yq = Eq + qq,
          tq = 1,
          rq = 1;
        Yq ? rq = mq : tq = mq;
        for (var vq = lq; vq < xq; ++vq) {
          var hq = vq + tq,
            nq = Pq * vq;
          aq[oq++] = uq[nq + Qq], aq[oq++] = -hq, aq[oq++] = uq[nq + yq], aq[oq++] = hq
        }
        for (vq = Wq; vq < Nq; ++vq) {
          hq = vq + rq;
          var bq = Pq * vq;
          aq[oq++] = jq[bq + Qq], aq[oq++] = -hq
        }
        var iq = oq >>> 1;
        Oq(aq, iq);
        var Zq = 0;
        for (vq = 0; vq < iq; ++vq) {
          var fq = 0 | aq[2 * vq + 1];
          if (fq < 0) {
            var Mq = !1;
            if ((hq = -fq) >= mq ? (Mq = !Yq, hq -= mq) : (Mq = !!Yq, hq -= 1), Mq) dq(Aq, cq, Zq++, hq);
            else {
              var Tq = Hq[hq],
                zq = Pq * hq,
                Sq = jq[zq + Eq + 1],
                pq = jq[zq + Eq + 1 + qq];
              qq: for (var Gq = 0; Gq < Zq; ++Gq) {
                var Lq = Aq[Gq],
                  Jq = Pq * Lq;
                if (!(pq < uq[Jq + Eq + 1] || uq[Jq + Eq + 1 + qq] < Sq)) {
                  for (var kq = Eq + 2; kq < qq; ++kq)
                    if (jq[zq + kq + qq] < uq[Jq + kq] || uq[Jq + kq + qq] < jq[zq + kq]) continue qq;
                  var Rq, Uq = Bq[Lq];
                  if (void 0 !== (Rq = Yq ? gq(Tq, Uq) : gq(Uq, Tq))) return Rq
                }
              }
            }
          } else Vq(Aq, cq, Zq--, fq - tq)
        }
      },
      scanComplete: function(qq, Eq, gq, Yq, lq, xq, cq, uq, Bq, Wq, Nq) {
        for (var Vq = 0, dq = 2 * qq, jq = Eq, Hq = Eq + qq, oq = Yq; oq < lq; ++oq) {
          var Pq = oq + mq,
            Qq = dq * oq;
          aq[Vq++] = xq[Qq + jq], aq[Vq++] = -Pq, aq[Vq++] = xq[Qq + Hq], aq[Vq++] = Pq
        }
        for (oq = uq; oq < Bq; ++oq) {
          Pq = oq + 1;
          var yq = dq * oq;
          aq[Vq++] = Wq[yq + jq], aq[Vq++] = -Pq
        }
        var tq = Vq >>> 1;
        Oq(aq, tq);
        var rq = 0;
        for (oq = 0; oq < tq; ++oq) {
          var vq = 0 | aq[2 * oq + 1];
          if (vq < 0) {
            if ((Pq = -vq) >= mq) Aq[rq++] = Pq - mq;
            else {
              var hq = Nq[Pq -= 1],
                nq = dq * Pq,
                bq = Wq[nq + Eq + 1],
                iq = Wq[nq + Eq + 1 + qq];
              qq: for (var Zq = 0; Zq < rq; ++Zq) {
                var fq = Aq[Zq],
                  Mq = cq[fq];
                if (Mq === hq) break;
                var Tq = dq * fq;
                if (!(iq < xq[Tq + Eq + 1] || xq[Tq + Eq + 1 + qq] < bq)) {
                  for (var zq = Eq + 2; zq < qq; ++zq)
                    if (Wq[nq + zq + qq] < xq[Tq + zq] || xq[Tq + zq + qq] < Wq[nq + zq]) continue qq;
                  var Sq = gq(Mq, hq);
                  if (void 0 !== Sq) return Sq
                }
              }
            }
          } else {
            for (Pq = vq - mq, Zq = rq - 1; Zq >= 0; --Zq)
              if (Aq[Zq] === Pq) {
                for (zq = Zq + 1; zq < rq; ++zq) Aq[zq - 1] = Aq[zq];
                break
              }-- rq
          }
        }
      }
    };
    var Yq = gq(38264),
      lq = gq(38267),
      Oq = gq(38293),
      mq = 1 << 28,
      xq = 1024,
      Aq = Yq.mallocInt32(xq),
      cq = Yq.mallocInt32(xq),
      uq = Yq.mallocInt32(xq),
      Bq = Yq.mallocInt32(xq),
      Wq = Yq.mallocInt32(xq),
      Nq = Yq.mallocInt32(xq),
      aq = Yq.mallocDouble(8192);

    function Vq(qq, Eq, gq, Yq) {
      var lq = Eq[Yq],
        Oq = qq[gq - 1];
      qq[lq] = Oq, Eq[Oq] = lq
    }

    function dq(qq, Eq, gq, Yq) {
      qq[gq] = Yq, Eq[Yq] = gq
    }
  },
  38273: qq => {
    function Eq(qq, gq, Yq) {
      var lq = 0 | qq[Yq];
      if (lq <= 0) return [];
      var Oq, mq = new Array(lq);
      if (Yq === qq.length - 1)
        for (Oq = 0; Oq < lq; ++Oq) mq[Oq] = gq;
      else
        for (Oq = 0; Oq < lq; ++Oq) mq[Oq] = Eq(qq, gq, Yq + 1);
      return mq
    }
    qq.exports = function(qq, gq) {
      switch ("undefined" === typeof gq && (gq = 0), typeof qq) {
        case "number":
          if (qq > 0) return function(qq, Eq) {
            var gq, Yq;
            for (gq = new Array(qq), Yq = 0; Yq < qq; ++Yq) gq[Yq] = Eq;
            return gq
          }(0 | qq, gq);
          break;
        case "object":
          if ("number" === typeof qq.length) return Eq(qq, gq, 0)
      }
      return []
    }
  },
  38224: (qq, Eq, gq) => {
    qq.exports = function() {
      var qq = this;
      this.components = {}, this.comps = this.components;
      var Eq = this.components,
        gq = 1,
        lq = {},
        Oq = [],
        mq = [],
        xq = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function Aq(qq, gq) {
        var Yq = Eq[gq],
          Oq = lq[gq],
          mq = Oq.hash[qq];
        mq && (Oq.remove(qq), Yq.OJ && (Yq.multi ? (mq.forEach((Eq => {
          Eq && Yq.OJ(qq, Eq)
        })), mq.length = 0) : Yq.OJ(qq, mq)), xq.removals.push(Oq), cq())
      }

      function cq() {
        xq.timeout || (xq.timeout = !0, setTimeout(uq, 1))
      }

      function uq() {
        xq.timeout = !1, Bq()
      }

      function Bq() {
        xq.multiComps.length && function(qq) {
          for (var Eq = 0; Eq < qq.length; Eq++) {
            var {
              entID: gq,
              data: Yq
            } = qq[Eq], lq = Yq.hash[gq];
            if (lq) {
              for (var Oq = 0; Oq < lq.length; Oq++) lq[Oq] || (lq.splice(Oq, 1), Oq--);
              0 === lq.length && (Yq.remove(gq), xq.removals.push(Yq))
            }
          }
          qq.length = 0
        }(xq.multiComps), xq.removals.length && function(qq) {
          for (var Eq = 0; Eq < qq.length; Eq++) {
            qq[Eq].flush()
          }
          qq.length = 0
        }(xq.removals)
      }
      this.qV = lq, this._systems = Oq, this._renderSystems = mq, this.eC = function(Eq) {
        var Yq = gq++;
        return Array.isArray(Eq) && Eq.forEach((Eq => qq.zk(Yq, Eq))), Yq
      }, this.deleteEntity = function(Eq) {
        return Object.keys(lq).forEach((qq => {
          lq[qq].hash[Eq] && Aq(Eq, qq)
        })), qq
      }, this.ugq = function(qq) {
        if (!qq) throw new Error("Missing component definition");
        var gq = qq.name;
        if (!gq) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof gq) throw new Error("Component name must be a string.");
        if ("" === gq) throw new Error("Component name must be a non-empty string.");
        if (lq[gq]) throw new Error(`Component ${gq} already exists.`);
        var xq = {};
        return xq.name = gq, xq.multi = !!qq.multi, xq.order = isNaN(qq.order) ? 99 : qq.order, xq.stateConstructor = qq.stateConstructor || null, xq.state = qq.state || {}, xq.Fy = qq.Fy || null, xq.OJ = qq.OJ || null, xq.system = qq.system || null, xq.Vr = qq.Vr || null, Eq[gq] = xq, lq[gq] = new Yq, lq[gq]._pendingMultiCleanup = !1, lq[gq]._multiCleanupIDs = xq.multi ? [] : null, xq.system && (Oq.push(gq), Oq.sort(((qq, gq) => Eq[qq].order - Eq[gq].order))), xq.Vr && (mq.push(gq), mq.sort(((qq, gq) => Eq[qq].order - Eq[gq].order))), gq
      }, this.overwriteComponent = function(qq, gq) {
        var Yq = Eq[qq];
        if (!Yq) throw new Error(`Unknown component: ${qq}`);
        if (!gq) throw new Error("Missing component definition");
        if (Yq.name !== gq.name) throw new Error("Overwriting component must use the same name property.");
        var xq = {};
        xq.name = qq, xq.multi = !!gq.multi, xq.order = isNaN(gq.order) ? 99 : gq.order, xq.state = gq.state || {}, xq.Fy = gq.Fy || null, xq.OJ = gq.OJ || null, xq.system = gq.system || null, xq.Vr = gq.Vr || null, Eq[qq] = xq, lq[qq]._pendingMultiCleanup = !1, lq[qq]._multiCleanupIDs = xq.multi ? [] : null;
        var Aq = Oq.indexOf(qq);
        xq.system && Aq < 0 && Oq.push(qq), !xq.system && Aq >= 0 && Oq.splice(Aq, 1), Oq.sort(((qq, gq) => Eq[qq].order - Eq[gq].order));
        var cq = mq.indexOf(qq);
        xq.Vr && cq < 0 && mq.push(qq), !xq.Vr && cq >= 0 && mq.splice(cq, 1), mq.sort(((qq, gq) => Eq[qq].order - Eq[gq].order));
        var uq = xq.state;
        return this.Hk(qq).forEach((qq => {
          for (var Eq in uq) Eq in qq || (qq[Eq] = uq[Eq]);
          xq.Fy && xq.Fy(qq.Zk, qq)
        })), qq
      }, this.deleteComponent = function(gq) {
        var Yq = lq[gq];
        if (!Yq) throw new Error(`Unknown component: ${gq}`);
        Yq.flush(), Yq.list.forEach((qq => {
          qq && Aq(qq.Zk || qq[0].Zk, gq)
        }));
        var xq = Oq.indexOf(gq),
          cq = mq.indexOf(gq);
        return xq > -1 && Oq.splice(xq, 1), cq > -1 && mq.splice(cq, 1), lq[gq].dispose(), delete lq[gq], delete Eq[gq], qq
      }, this.zk = function(qq, gq, Yq) {
        var Oq, mq = Eq[gq],
          xq = lq[gq];
        if (!xq) throw new Error(`Unknown component: ${gq}.`);
        if (xq.hash[qq] && !mq.multi) throw new Error(`Entity ${qq} already has component: ${gq}.`);
        if (mq.stateConstructor) {
          if (!(Oq = new mq.stateConstructor).hasOwnProperty("Zk")) throw new Error(`Component ${mq.name} stateConstructor type does not have property __id`);
          Object.assign(Oq, mq.state, Yq)
        } else Oq = {
          Zk: qq,
          ...mq.state,
          ...Yq
        };
        if (Oq.Zk = qq, mq.multi) {
          var Aq = xq.hash[qq];
          Aq || (Aq = [], xq.add(qq, Aq)), Aq.push(Oq)
        } else xq.add(qq, Oq);
        return mq.Fy && mq.Fy(qq, Oq), this
      }, this.mEq = function(qq, Eq) {
        var gq = lq[Eq];
        if (!gq) throw new Error(`Unknown component: ${Eq}.`);
        return !!gq.hash[qq]
      }, this.Lk = function(Eq, gq) {
        if (!lq[gq]) throw new Error(`Unknown component: ${gq}.`);
        return Aq(Eq, gq), qq
      }, this.getState = function(qq, Eq) {
        var gq = lq[Eq];
        if (!gq) throw new Error(`Unknown component: ${Eq}.`);
        return gq.hash[qq]
      }, this.Hk = function(qq) {
        var Eq = lq[qq];
        if (!Eq) throw new Error(`Unknown component: ${qq}.`);
        return Bq(), Eq.list
      }, this.kEq = function(qq) {
        if (!lq[qq]) throw new Error(`Unknown component: ${qq}.`);
        var Eq = lq[qq].hash;
        return qq => Eq[qq]
      }, this.KEq = function(qq) {
        if (!lq[qq]) throw new Error(`Unknown component: ${qq}.`);
        var Eq = lq[qq].hash;
        return qq => !!Eq[qq]
      }, this.SB = function(gq) {
        Bq();
        for (var Yq = 0; Yq < Oq.length; Yq++) {
          var mq = Oq[Yq],
            xq = Eq[mq],
            Aq = lq[mq];
          xq.system(gq, Aq.list), Bq()
        }
        return qq
      }, this.render = function(gq) {
        Bq();
        for (var Yq = 0; Yq < mq.length; Yq++) {
          var Oq = mq[Yq],
            xq = Eq[Oq],
            Aq = lq[Oq];
          xq.Vr(gq, Aq.list), Bq()
        }
        return qq
      }, this.removeMultiComponent = function(gq, Yq, Oq) {
        var mq = Eq[Yq],
          Aq = lq[Yq];
        if (!Aq) throw new Error(`Unknown component: ${Yq}.`);
        if (!mq.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(qq, Eq, gq, Yq) {
          var lq = gq.hash[qq];
          if (lq) {
            var Oq = lq[Yq];
            Oq && (lq[Yq] = null, Eq.OJ && Eq.OJ(qq, Oq), xq.multiComps.push({
              entID: qq,
              data: gq
            }), cq())
          }
        }(gq, mq, Aq, Oq), qq
      }
    };
    var Yq = gq(38231)
  },
  38231: qq => {
    function Eq(qq, Eq) {
      var gq = qq._map[Eq];
      if (delete qq.hash[Eq], delete qq._map[Eq], gq === qq.list.length - 1) qq.list.pop(), qq._idList.pop();
      else {
        var Yq = qq.list.pop();
        qq.list[gq] = Yq;
        var lq = qq._idList.pop();
        qq._idList[gq] = lq, qq._map[lq] = gq
      }
    }
    qq.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(qq, Eq) {
        if ("number" === typeof this._map[qq]) {
          var gq = this._map[qq];
          this.hash[qq] = Eq, this.list[gq] = Eq, this._idList[gq] = qq
        } else this._map[qq] = this.list.length, this.hash[qq] = Eq, this.list.push(Eq), this._idList.push(qq)
      }
      remove(qq) {
        var Eq = this._map[qq];
        this.hash[qq] = null, this.list[Eq] = null, this._pendingRemovals.push(qq)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var qq = 0; qq < this._pendingRemovals.length; qq++) {
          var gq = this._pendingRemovals[qq];
          null === this.hash[gq] && Eq(this, gq)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  38031: (qq, Eq, gq) => {
    qq = gq.nmd(qq);
    var Yq = "__lodash_hash_undefined__",
      lq = 9007199254740991,
      Oq = "[object Arguments]",
      mq = "[object Boolean]",
      xq = "[object Date]",
      Aq = "[object Function]",
      cq = "[object GeneratorFunction]",
      uq = "[object Map]",
      Bq = "[object Number]",
      Wq = "[object Object]",
      Nq = "[object Promise]",
      aq = "[object RegExp]",
      Vq = "[object Set]",
      dq = "[object String]",
      jq = "[object Symbol]",
      Hq = "[object WeakMap]",
      oq = "[object ArrayBuffer]",
      Pq = "[object DataView]",
      Qq = "[object Float32Array]",
      yq = "[object Float64Array]",
      tq = "[object Int8Array]",
      rq = "[object Int16Array]",
      vq = "[object Int32Array]",
      hq = "[object Uint8Array]",
      nq = "[object Uint8ClampedArray]",
      bq = "[object Uint16Array]",
      iq = "[object Uint32Array]",
      Zq = /\w*$/,
      fq = /^\[object .+?Constructor\]$/,
      Mq = /^(?:0|[1-9]\d*)$/,
      Tq = {};
    Tq[Oq] = Tq["[object Array]"] = Tq[oq] = Tq[Pq] = Tq[mq] = Tq[xq] = Tq[Qq] = Tq[yq] = Tq[tq] = Tq[rq] = Tq[vq] = Tq[uq] = Tq[Bq] = Tq[Wq] = Tq[aq] = Tq[Vq] = Tq[dq] = Tq[jq] = Tq[hq] = Tq[nq] = Tq[bq] = Tq[iq] = !0, Tq["[object Error]"] = Tq[Aq] = Tq[Hq] = !1;
    var zq = "object" == typeof gq.g && gq.g && gq.g.Object === Object && gq.g,
      Sq = "object" == typeof self && self && self.Object === Object && self,
      pq = zq || Sq || Function("return this")(),
      Gq = Eq && !Eq.nodeType && Eq,
      Lq = Gq && qq && !qq.nodeType && qq,
      Jq = Lq && Lq.exports === Gq;

    function kq(qq, Eq) {
      return qq.set(Eq[0], Eq[1]), qq
    }

    function Rq(qq, Eq) {
      return qq.add(Eq), qq
    }

    function Uq(qq, Eq, gq, Yq) {
      var lq = -1,
        Oq = qq ? qq.length : 0;
      for (Yq && Oq && (gq = qq[++lq]); ++lq < Oq;) gq = Eq(gq, qq[lq], lq, qq);
      return gq
    }

    function Fq(qq) {
      var Eq = !1;
      if (null != qq && "function" != typeof qq.toString) try {
        Eq = !!(qq + "")
      } catch (gq) {}
      return Eq
    }

    function sq(qq) {
      var Eq = -1,
        gq = Array(qq.size);
      return qq.forEach((function(qq, Yq) {
        gq[++Eq] = [Yq, qq]
      })), gq
    }

    function Xq(qq, Eq) {
      return function(gq) {
        return qq(Eq(gq))
      }
    }

    function wq(qq) {
      var Eq = -1,
        gq = Array(qq.size);
      return qq.forEach((function(qq) {
        gq[++Eq] = qq
      })), gq
    }
    var Kq = Array.prototype,
      Cq = Function.prototype,
      Iq = Object.prototype,
      eq = pq["__core-js_shared__"],
      Dq = function() {
        var qq = /[^.]+$/.exec(eq && eq.keys && eq.keys.IE_PROTO || "");
        return qq ? "Symbol(src)_1." + qq : ""
      }(),
      qE = Cq.toString,
      EE = Iq.hasOwnProperty,
      gE = Iq.toString,
      YE = RegExp("^" + qE.call(EE).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      lE = Jq ? pq.IN : void 0,
      OE = pq.Symbol,
      mE = pq.Uint8Array,
      xE = Xq(Object.getPrototypeOf, Object),
      AE = Object.create,
      cE = Iq.propertyIsEnumerable,
      uE = Kq.splice,
      BE = Object.getOwnPropertySymbols,
      WE = lE ? lE.isBuffer : void 0,
      NE = Xq(Object.keys, Object),
      aE = JE(pq, "DataView"),
      VE = JE(pq, "Map"),
      dE = JE(pq, "Promise"),
      jE = JE(pq, "Set"),
      HE = JE(pq, "WeakMap"),
      oE = JE(Object, "create"),
      PE = sE(aE),
      QE = sE(VE),
      yE = sE(dE),
      tE = sE(jE),
      rE = sE(HE),
      vE = OE ? OE.prototype : void 0,
      hE = vE ? vE.valueOf : void 0;

    function nE(qq) {
      var Eq = -1,
        gq = qq ? qq.length : 0;
      for (this.clear(); ++Eq < gq;) {
        var Yq = qq[Eq];
        this.set(Yq[0], Yq[1])
      }
    }

    function bE(qq) {
      var Eq = -1,
        gq = qq ? qq.length : 0;
      for (this.clear(); ++Eq < gq;) {
        var Yq = qq[Eq];
        this.set(Yq[0], Yq[1])
      }
    }

    function iE(qq) {
      var Eq = -1,
        gq = qq ? qq.length : 0;
      for (this.clear(); ++Eq < gq;) {
        var Yq = qq[Eq];
        this.set(Yq[0], Yq[1])
      }
    }

    function ZE(qq) {
      this.__data__ = new bE(qq)
    }

    function fE(qq, Eq) {
      var gq = wE(qq) || function(qq) {
          return function(qq) {
            return function(qq) {
              return !!qq && "object" == typeof qq
            }(qq) && KE(qq)
          }(qq) && EE.call(qq, "callee") && (!cE.call(qq, "callee") || gE.call(qq) == Oq)
        }(qq) ? function(qq, Eq) {
          for (var gq = -1, Yq = Array(qq); ++gq < qq;) Yq[gq] = Eq(gq);
          return Yq
        }(qq.length, String) : [],
        Yq = gq.length,
        lq = !!Yq;
      for (var mq in qq) !Eq && !EE.call(qq, mq) || lq && ("length" == mq || UE(mq, Yq)) || gq.push(mq);
      return gq
    }

    function ME(qq, Eq, gq) {
      var Yq = qq[Eq];
      EE.call(qq, Eq) && XE(Yq, gq) && (void 0 !== gq || Eq in qq) || (qq[Eq] = gq)
    }

    function TE(qq, Eq) {
      for (var gq = qq.length; gq--;)
        if (XE(qq[gq][0], Eq)) return gq;
      return -1
    }

    function zE(qq, Eq, gq, Yq, lq, Nq, Hq) {
      var fq;
      if (Yq && (fq = Nq ? Yq(qq, lq, Nq, Hq) : Yq(qq)), void 0 !== fq) return fq;
      if (!eE(qq)) return qq;
      var Mq = wE(qq);
      if (Mq) {
        if (fq = function(qq) {
            var Eq = qq.length,
              gq = qq.constructor(Eq);
            Eq && "string" == typeof qq[0] && EE.call(qq, "index") && (gq.index = qq.index, gq.input = qq.input);
            return gq
          }(qq), !Eq) return function(qq, Eq) {
          var gq = -1,
            Yq = qq.length;
          Eq || (Eq = Array(Yq));
          for (; ++gq < Yq;) Eq[gq] = qq[gq];
          return Eq
        }(qq, fq)
      } else {
        var zq = RE(qq),
          Sq = zq == Aq || zq == cq;
        if (CE(qq)) return function(qq, Eq) {
          if (Eq) return qq.slice();
          var gq = new qq.constructor(qq.length);
          return qq.copy(gq), gq
        }(qq, Eq);
        if (zq == Wq || zq == Oq || Sq && !Nq) {
          if (Fq(qq)) return Nq ? qq : {};
          if (fq = function(qq) {
              return "function" != typeof qq.constructor || FE(qq) ? {} : (Eq = xE(qq), eE(Eq) ? AE(Eq) : {});
              var Eq
            }(Sq ? {} : qq), !Eq) return function(qq, Eq) {
            return GE(qq, kE(qq), Eq)
          }(qq, function(qq, Eq) {
            return qq && GE(Eq, DE(Eq), qq)
          }(fq, qq))
        } else {
          if (!Tq[zq]) return Nq ? qq : {};
          fq = function(qq, Eq, gq, Yq) {
            var lq = qq.constructor;
            switch (Eq) {
              case oq:
                return pE(qq);
              case mq:
              case xq:
                return new lq(+qq);
              case Pq:
                return function(qq, Eq) {
                  var gq = Eq ? pE(qq.buffer) : qq.buffer;
                  return new qq.constructor(gq, qq.byteOffset, qq.byteLength)
                }(qq, Yq);
              case Qq:
              case yq:
              case tq:
              case rq:
              case vq:
              case hq:
              case nq:
              case bq:
              case iq:
                return function(qq, Eq) {
                  var gq = Eq ? pE(qq.buffer) : qq.buffer;
                  return new qq.constructor(gq, qq.byteOffset, qq.length)
                }(qq, Yq);
              case uq:
                return function(qq, Eq, gq) {
                  var Yq = Eq ? gq(sq(qq), !0) : sq(qq);
                  return Uq(Yq, kq, new qq.constructor)
                }(qq, Yq, gq);
              case Bq:
              case dq:
                return new lq(qq);
              case aq:
                return function(qq) {
                  var Eq = new qq.constructor(qq.source, Zq.exec(qq));
                  return Eq.lastIndex = qq.lastIndex, Eq
                }(qq);
              case Vq:
                return function(qq, Eq, gq) {
                  var Yq = Eq ? gq(wq(qq), !0) : wq(qq);
                  return Uq(Yq, Rq, new qq.constructor)
                }(qq, Yq, gq);
              case jq:
                return Oq = qq, hE ? Object(hE.call(Oq)) : {}
            }
            var Oq
          }(qq, zq, zE, Eq)
        }
      }
      Hq || (Hq = new ZE);
      var pq = Hq.get(qq);
      if (pq) return pq;
      if (Hq.set(qq, fq), !Mq) var Gq = gq ? function(qq) {
        return function(qq, Eq, gq) {
          var Yq = Eq(qq);
          return wE(qq) ? Yq : function(qq, Eq) {
            for (var gq = -1, Yq = Eq.length, lq = qq.length; ++gq < Yq;) qq[lq + gq] = Eq[gq];
            return qq
          }(Yq, gq(qq))
        }(qq, DE, kE)
      }(qq) : DE(qq);
      return function(qq, Eq) {
        for (var gq = -1, Yq = qq ? qq.length : 0; ++gq < Yq && !1 !== Eq(qq[gq], gq, qq););
      }(Gq || qq, (function(lq, Oq) {
        Gq && (lq = qq[Oq = lq]), ME(fq, Oq, zE(lq, Eq, gq, Yq, Oq, qq, Hq))
      })), fq
    }

    function SE(qq) {
      return !(!eE(qq) || (Eq = qq, Dq && Dq in Eq)) && (IE(qq) || Fq(qq) ? YE : fq).test(sE(qq));
      var Eq
    }

    function pE(qq) {
      var Eq = new qq.constructor(qq.byteLength);
      return new mE(Eq).set(new mE(qq)), Eq
    }

    function GE(qq, Eq, gq, Yq) {
      gq || (gq = {});
      for (var lq = -1, Oq = Eq.length; ++lq < Oq;) {
        var mq = Eq[lq],
          xq = Yq ? Yq(gq[mq], qq[mq], mq, gq, qq) : void 0;
        ME(gq, mq, void 0 === xq ? qq[mq] : xq)
      }
      return gq
    }

    function LE(qq, Eq) {
      var gq = qq.__data__;
      return function(qq) {
        var Eq = typeof qq;
        return "string" == Eq || "number" == Eq || "symbol" == Eq || "boolean" == Eq ? "__proto__" !== qq : null === qq
      }(Eq) ? gq["string" == typeof Eq ? "string" : "hash"] : gq.map
    }

    function JE(qq, Eq) {
      var gq = function(qq, Eq) {
        return null == qq ? void 0 : qq[Eq]
      }(qq, Eq);
      return SE(gq) ? gq : void 0
    }
    nE.prototype.clear = function() {
      this.__data__ = oE ? oE(null) : {}
    }, nE.prototype.delete = function(qq) {
      return this.has(qq) && delete this.__data__[qq]
    }, nE.prototype.get = function(qq) {
      var Eq = this.__data__;
      if (oE) {
        var gq = Eq[qq];
        return gq === Yq ? void 0 : gq
      }
      return EE.call(Eq, qq) ? Eq[qq] : void 0
    }, nE.prototype.has = function(qq) {
      var Eq = this.__data__;
      return oE ? void 0 !== Eq[qq] : EE.call(Eq, qq)
    }, nE.prototype.set = function(qq, Eq) {
      return this.__data__[qq] = oE && void 0 === Eq ? Yq : Eq, this
    }, bE.prototype.clear = function() {
      this.__data__ = []
    }, bE.prototype.delete = function(qq) {
      var Eq = this.__data__,
        gq = TE(Eq, qq);
      return !(gq < 0) && (gq == Eq.length - 1 ? Eq.pop() : uE.call(Eq, gq, 1), !0)
    }, bE.prototype.get = function(qq) {
      var Eq = this.__data__,
        gq = TE(Eq, qq);
      return gq < 0 ? void 0 : Eq[gq][1]
    }, bE.prototype.has = function(qq) {
      return TE(this.__data__, qq) > -1
    }, bE.prototype.set = function(qq, Eq) {
      var gq = this.__data__,
        Yq = TE(gq, qq);
      return Yq < 0 ? gq.push([qq, Eq]) : gq[Yq][1] = Eq, this
    }, iE.prototype.clear = function() {
      this.__data__ = {
        hash: new nE,
        map: new(VE || bE),
        string: new nE
      }
    }, iE.prototype.delete = function(qq) {
      return LE(this, qq).delete(qq)
    }, iE.prototype.get = function(qq) {
      return LE(this, qq).get(qq)
    }, iE.prototype.has = function(qq) {
      return LE(this, qq).has(qq)
    }, iE.prototype.set = function(qq, Eq) {
      return LE(this, qq).set(qq, Eq), this
    }, ZE.prototype.clear = function() {
      this.__data__ = new bE
    }, ZE.prototype.delete = function(qq) {
      return this.__data__.delete(qq)
    }, ZE.prototype.get = function(qq) {
      return this.__data__.get(qq)
    }, ZE.prototype.has = function(qq) {
      return this.__data__.has(qq)
    }, ZE.prototype.set = function(qq, Eq) {
      var gq = this.__data__;
      if (gq instanceof bE) {
        var Yq = gq.__data__;
        if (!VE || Yq.length < 199) return Yq.push([qq, Eq]), this;
        gq = this.__data__ = new iE(Yq)
      }
      return gq.set(qq, Eq), this
    };
    var kE = BE ? Xq(BE, Object) : function() {
        return []
      },
      RE = function(qq) {
        return gE.call(qq)
      };

    function UE(qq, Eq) {
      return !!(Eq = null == Eq ? lq : Eq) && ("number" == typeof qq || Mq.test(qq)) && qq > -1 && qq % 1 == 0 && qq < Eq
    }

    function FE(qq) {
      var Eq = qq && qq.constructor;
      return qq === ("function" == typeof Eq && Eq.prototype || Iq)
    }

    function sE(qq) {
      if (null != qq) {
        try {
          return qE.call(qq)
        } catch (Eq) {}
        try {
          return qq + ""
        } catch (Eq) {}
      }
      return ""
    }

    function XE(qq, Eq) {
      return qq === Eq || qq !== qq && Eq !== Eq
    }(aE && RE(new aE(new ArrayBuffer(1))) != Pq || VE && RE(new VE) != uq || dE && RE(dE.resolve()) != Nq || jE && RE(new jE) != Vq || HE && RE(new HE) != Hq) && (RE = function(qq) {
      var Eq = gE.call(qq),
        gq = Eq == Wq ? qq.constructor : void 0,
        Yq = gq ? sE(gq) : void 0;
      if (Yq) switch (Yq) {
        case PE:
          return Pq;
        case QE:
          return uq;
        case yE:
          return Nq;
        case tE:
          return Vq;
        case rE:
          return Hq
      }
      return Eq
    });
    var wE = Array.isArray;

    function KE(qq) {
      return null != qq && function(qq) {
        return "number" == typeof qq && qq > -1 && qq % 1 == 0 && qq <= lq
      }(qq.length) && !IE(qq)
    }
    var CE = WE || function() {
      return !1
    };

    function IE(qq) {
      var Eq = eE(qq) ? gE.call(qq) : "";
      return Eq == Aq || Eq == cq
    }

    function eE(qq) {
      var Eq = typeof qq;
      return !!qq && ("object" == Eq || "function" == Eq)
    }

    function DE(qq) {
      return KE(qq) ? fE(qq) : function(qq) {
        if (!FE(qq)) return NE(qq);
        var Eq = [];
        for (var gq in Object(qq)) EE.call(qq, gq) && "constructor" != gq && Eq.push(gq);
        return Eq
      }(qq)
    }
    qq.exports = function(qq) {
      return zE(qq, !0, !0)
    }
  },
  38434: qq => {
    function Eq(qq, Eq, gq) {
      for (var Yq = qq.length, lq = -1 / 0, Oq = 1 / 0, mq = 0; mq < Yq; mq++) {
        var xq = (gq[0][mq] - qq[mq]) / Eq[mq],
          Aq = (gq[1][mq] - qq[mq]) / Eq[mq];
        if (xq > Aq) {
          var cq = xq;
          xq = Aq, Aq = cq
        }
        if (Aq < lq || xq > Oq) return 1 / 0;
        xq > lq && (lq = xq), Aq < Oq && (Oq = Aq)
      }
      return lq > Oq ? 1 / 0 : lq
    }
    qq.exports = function(qq, gq, Yq, lq) {
      var Oq = Eq(gq, Yq, lq);
      if (Oq === 1 / 0) qq = null;
      else {
        qq = qq || [];
        for (var mq = 0; mq < gq.length; mq++) qq[mq] = gq[mq] + Yq[mq] * Oq
      }
      return qq
    }, qq.exports.distance = Eq
  },
  37725: (qq, Eq, gq) => {
    var Yq = gq(37734);

    function lq(qq) {
      for (var Eq, gq, lq = 0, Oq = qq.length, mq = 0; mq < qq.length;) {
        for (Eq = qq[mq], gq = 0; mq < Oq && qq[mq] === Eq;) ++mq, ++gq;
        lq += Yq.log2(gq) / 7 | 0, lq += Yq.log2(Eq >>> 0) / 7 | 0, lq += 2
      }
      return lq
    }
    Eq.size = lq, Eq.encode = function(qq, Eq) {
      Eq || (Eq = new Uint8Array(lq(qq)));
      for (var gq, Yq, Oq = 0, mq = Eq.length, xq = 0; xq < qq.length;) {
        for (gq = qq[xq], Yq = 0; xq < qq.length && qq[xq] === gq;) ++xq, ++Yq;
        for (; Oq < mq && Yq >= 128;) Eq[Oq++] = 128 + (127 & Yq), Yq >>>= 7;
        if (Oq >= mq) throw new Error("RLE buffer overflow");
        for (Eq[Oq++] = Yq, gq >>>= 0; Oq < mq && gq >= 128;) Eq[Oq++] = 128 + (127 & gq), gq >>>= 7;
        if (Oq >= mq) throw new Error("RLE buffer overflow");
        Eq[Oq++] = gq
      }
      return Eq
    }, Eq.decode = function(qq, Eq) {
      for (var gq, Yq, lq, Oq, mq = Eq.length, xq = qq.length, Aq = 0, cq = 0; cq < xq;) {
        for (gq = 0, Yq = 0; cq < xq && qq[cq] >= 128;) gq += (127 & qq[cq++]) << Yq, Yq += 7;
        if (gq += qq[cq++] << Yq, cq >= xq) throw new Error("RLE buffer underrun");
        if (Aq + gq > mq) throw new Error("Chunk buffer overflow");
        for (lq = 0, Yq = 0; cq < xq && qq[cq] >= 128;) lq += (127 & qq[cq++]) << Yq, Yq += 7;
        if (cq >= xq) throw new Error("RLE buffer underrun");
        for (lq += qq[cq++] << Yq, Oq = 0; Oq < gq; ++Oq) Eq[Aq++] = lq
      }
      return Eq
    }
  },
  37734: (qq, Eq) => {
    function gq(qq) {
      var Eq = 32;
      return (qq &= -qq) && Eq--, 65535 & qq && (Eq -= 16), 16711935 & qq && (Eq -= 8), 252645135 & qq && (Eq -= 4), 858993459 & qq && (Eq -= 2), 1431655765 & qq && (Eq -= 1), Eq
    }
    Eq.INT_BITS = 32, Eq.INT_MAX = 2147483647, Eq.INT_MIN = -1 << 31, Eq.sign = function(qq) {
      return (qq > 0) - (qq < 0)
    }, Eq.abs = function(qq) {
      var Eq = qq >> 31;
      return (qq ^ Eq) - Eq
    }, Eq.min = function(qq, Eq) {
      return Eq ^ (qq ^ Eq) & -(qq < Eq)
    }, Eq.max = function(qq, Eq) {
      return qq ^ (qq ^ Eq) & -(qq < Eq)
    }, Eq.isPow2 = function(qq) {
      return !(qq & qq - 1) && !!qq
    }, Eq.log2 = function(qq) {
      var Eq, gq;
      return Eq = (qq > 65535) << 4, Eq |= gq = ((qq >>>= Eq) > 255) << 3, Eq |= gq = ((qq >>>= gq) > 15) << 2, (Eq |= gq = ((qq >>>= gq) > 3) << 1) | (qq >>>= gq) >> 1
    }, Eq.log10 = function(qq) {
      return qq >= 1e9 ? 9 : qq >= 1e8 ? 8 : qq >= 1e7 ? 7 : qq >= 1e6 ? 6 : qq >= 1e5 ? 5 : qq >= 1e4 ? 4 : qq >= 1e3 ? 3 : qq >= 100 ? 2 : qq >= 10 ? 1 : 0
    }, Eq.popCount = function(qq) {
      return 16843009 * ((qq = (858993459 & (qq -= qq >>> 1 & 1431655765)) + (qq >>> 2 & 858993459)) + (qq >>> 4) & 252645135) >>> 24
    }, Eq.countTrailingZeros = gq, Eq.nextPow2 = function(qq) {
      return qq += 0 === qq, --qq, qq |= qq >>> 1, qq |= qq >>> 2, qq |= qq >>> 4, qq |= qq >>> 8, (qq |= qq >>> 16) + 1
    }, Eq.prevPow2 = function(qq) {
      return qq |= qq >>> 1, qq |= qq >>> 2, qq |= qq >>> 4, qq |= qq >>> 8, (qq |= qq >>> 16) - (qq >>> 1)
    }, Eq.parity = function(qq) {
      return qq ^= qq >>> 16, qq ^= qq >>> 8, qq ^= qq >>> 4, 27030 >>> (qq &= 15) & 1
    };
    var Yq = new Array(256);
    ! function(qq) {
      for (var Eq = 0; Eq < 256; ++Eq) {
        var gq = Eq,
          Yq = Eq,
          lq = 7;
        for (gq >>>= 1; gq; gq >>>= 1) Yq <<= 1, Yq |= 1 & gq, --lq;
        qq[Eq] = Yq << lq & 255
      }
    }(Yq), Eq.reverse = function(qq) {
      return Yq[255 & qq] << 24 | Yq[qq >>> 8 & 255] << 16 | Yq[qq >>> 16 & 255] << 8 | Yq[qq >>> 24 & 255]
    }, Eq.interleave2 = function(qq, Eq) {
      return (qq = 1431655765 & ((qq = 858993459 & ((qq = 252645135 & ((qq = 16711935 & ((qq &= 65535) | qq << 8)) | qq << 4)) | qq << 2)) | qq << 1)) | (Eq = 1431655765 & ((Eq = 858993459 & ((Eq = 252645135 & ((Eq = 16711935 & ((Eq &= 65535) | Eq << 8)) | Eq << 4)) | Eq << 2)) | Eq << 1)) << 1
    }, Eq.deinterleave2 = function(qq, Eq) {
      return (qq = 65535 & ((qq = 16711935 & ((qq = 252645135 & ((qq = 858993459 & ((qq = qq >>> Eq & 1431655765) | qq >>> 1)) | qq >>> 2)) | qq >>> 4)) | qq >>> 16)) << 16 >> 16
    }, Eq.interleave3 = function(qq, Eq, gq) {
      return qq = 1227133513 & ((qq = 3272356035 & ((qq = 251719695 & ((qq = 4278190335 & ((qq &= 1023) | qq << 16)) | qq << 8)) | qq << 4)) | qq << 2), (qq |= (Eq = 1227133513 & ((Eq = 3272356035 & ((Eq = 251719695 & ((Eq = 4278190335 & ((Eq &= 1023) | Eq << 16)) | Eq << 8)) | Eq << 4)) | Eq << 2)) << 1) | (gq = 1227133513 & ((gq = 3272356035 & ((gq = 251719695 & ((gq = 4278190335 & ((gq &= 1023) | gq << 16)) | gq << 8)) | gq << 4)) | gq << 2)) << 2
    }, Eq.deinterleave3 = function(qq, Eq) {
      return (qq = 1023 & ((qq = 4278190335 & ((qq = 251719695 & ((qq = 3272356035 & ((qq = qq >>> Eq & 1227133513) | qq >>> 2)) | qq >>> 4)) | qq >>> 8)) | qq >>> 16)) << 22 >> 22
    }, Eq.nextCombination = function(qq) {
      var Eq = qq | qq - 1;
      return Eq + 1 | (~Eq & -~Eq) - 1 >>> gq(qq) + 1
    }
  },
  37286: (qq, Eq, gq) => {
    gq.d(Eq, {
      Color3: () => Yq.d,
      e: () => Yq.g
    });
    var Yq = gq(37289);
    (0, Yq.h)()
  },
  37758: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => lq
    });
    var Yq = gq(37767);
    class lq {
      static GetPlanes(qq) {
        const Eq = [];
        for (let gq = 0; gq < 6; gq++) Eq.push(new Yq.d(0, 0, 0, 0));
        return lq.GetPlanesToRef(qq, Eq), Eq
      }
      static GetNearPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] + gq[2], Eq.normal.y = gq[7] + gq[6], Eq.normal.z = gq[11] + gq[10], Eq.d = gq[15] + gq[14], Eq.normalize()
      }
      static GetFarPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] - gq[2], Eq.normal.y = gq[7] - gq[6], Eq.normal.z = gq[11] - gq[10], Eq.d = gq[15] - gq[14], Eq.normalize()
      }
      static GetLeftPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] + gq[0], Eq.normal.y = gq[7] + gq[4], Eq.normal.z = gq[11] + gq[8], Eq.d = gq[15] + gq[12], Eq.normalize()
      }
      static GetRightPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] - gq[0], Eq.normal.y = gq[7] - gq[4], Eq.normal.z = gq[11] - gq[8], Eq.d = gq[15] - gq[12], Eq.normalize()
      }
      static GetTopPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] - gq[1], Eq.normal.y = gq[7] - gq[5], Eq.normal.z = gq[11] - gq[9], Eq.d = gq[15] - gq[13], Eq.normalize()
      }
      static GetBottomPlaneToRef(qq, Eq) {
        const gq = qq.m;
        Eq.normal.x = gq[3] + gq[1], Eq.normal.y = gq[7] + gq[5], Eq.normal.z = gq[11] + gq[9], Eq.d = gq[15] + gq[13], Eq.normalize()
      }
      static GetPlanesToRef(qq, Eq) {
        lq.GetNearPlaneToRef(qq, Eq[0]), lq.GetFarPlaneToRef(qq, Eq[1]), lq.GetLeftPlaneToRef(qq, Eq[2]), lq.GetRightPlaneToRef(qq, Eq[3]), lq.GetTopPlaneToRef(qq, Eq[4]), lq.GetBottomPlaneToRef(qq, Eq[5])
      }
      static IsPointInFrustum(qq, Eq) {
        for (let gq = 0; gq < 6; gq++)
          if (Eq[gq].dotCoordinate(qq) < 0) return !1;
        return !0
      }
    }
  },
  37767: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => lq
    });
    var Yq = gq(37139);
    class lq {
      constructor(qq, Eq, gq, lq) {
        this.normal = new Yq.q(qq, Eq, gq), this.d = lq
      }
      bYq() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new lq(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let qq = this.normal.getHashCode();
        return qq = 397 * qq ^ this.d, qq
      }
      normalize() {
        const qq = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Eq = 0;
        return 0 !== qq && (Eq = 1 / qq), this.normal.x *= Eq, this.normal.y *= Eq, this.normal.z *= Eq, this.d *= Eq, this
      }
      transform(qq) {
        const Eq = lq._TmpMatrix;
        qq.invertToRef(Eq);
        const gq = Eq.m,
          Yq = this.normal.x,
          Oq = this.normal.y,
          mq = this.normal.z,
          xq = this.d,
          Aq = Yq * gq[0] + Oq * gq[1] + mq * gq[2] + xq * gq[3],
          cq = Yq * gq[4] + Oq * gq[5] + mq * gq[6] + xq * gq[7],
          uq = Yq * gq[8] + Oq * gq[9] + mq * gq[10] + xq * gq[11],
          Bq = Yq * gq[12] + Oq * gq[13] + mq * gq[14] + xq * gq[15];
        return new lq(Aq, cq, uq, Bq)
      }
      dotCoordinate(qq) {
        return this.normal.x * qq.x + this.normal.y * qq.y + this.normal.z * qq.z + this.d
      }
      copyFromPoints(qq, Eq, gq) {
        const Yq = Eq.x - qq.x,
          lq = Eq.y - qq.y,
          Oq = Eq.z - qq.z,
          mq = gq.x - qq.x,
          xq = gq.y - qq.y,
          Aq = gq.z - qq.z,
          cq = lq * Aq - Oq * xq,
          uq = Oq * mq - Yq * Aq,
          Bq = Yq * xq - lq * mq,
          Wq = Math.sqrt(cq * cq + uq * uq + Bq * Bq);
        let Nq;
        return Nq = 0 !== Wq ? 1 / Wq : 0, this.normal.x = cq * Nq, this.normal.y = uq * Nq, this.normal.z = Bq * Nq, this.d = -(this.normal.x * qq.x + this.normal.y * qq.y + this.normal.z * qq.z), this
      }
      isFrontFacingTo(qq, Eq) {
        return Yq.q.Dot(this.normal, qq) <= Eq
      }
      signedDistanceTo(qq) {
        return Yq.q.Dot(qq, this.normal) + this.d
      }
      static FromArray(qq) {
        return new lq(qq[0], qq[1], qq[2], qq[3])
      }
      static FromPoints(qq, Eq, gq) {
        const Yq = new lq(0, 0, 0, 0);
        return Yq.copyFromPoints(qq, Eq, gq), Yq
      }
      static FromPositionAndNormal(qq, Eq) {
        const gq = new lq(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(qq, Eq, gq)
      }
      static FromPositionAndNormalToRef(qq, Eq, gq) {
        return gq.normal.WG(Eq), gq.normal.normalize(), gq.d = -qq.dot(gq.normal), gq
      }
      static SignedDistanceToPlaneFromPositionAndNormal(qq, Eq, gq) {
        const lq = -(Eq.x * qq.x + Eq.y * qq.y + Eq.z * qq.z);
        return Yq.q.Dot(gq, Eq) + lq
      }
    }
    lq._TmpMatrix = Yq.e.Identity()
  },
  37131: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      Matrix: () => Yq.e,
      Quaternion: () => Yq.h,
      RegisterMathVector: () => Yq.l,
      TmpVectors: () => Yq.o,
      Vector2: () => Yq.p,
      Na: () => Yq.q,
      Vector4: () => Yq.r
    });
    var Yq = gq(37139);
    (0, Yq.l)()
  },
  38065: (qq, Eq, gq) => {
    gq.d(Eq, {
      c: () => Yq
    });
    class Yq {
      constructor(qq, Eq, gq, Yq) {
        this.x = qq, this.y = Eq, this.width = gq, this.height = Yq
      }
      toGlobal(qq, Eq) {
        return new Yq(this.x * qq, this.y * Eq, this.width * qq, this.height * Eq)
      }
      toGlobalToRef(qq, Eq, gq) {
        return gq.x = this.x * qq, gq.y = this.y * Eq, gq.width = this.width * qq, gq.height = this.height * Eq, this
      }
      clone() {
        return new Yq(this.x, this.y, this.width, this.height)
      }
    }
  },
  37872: (qq, Eq, gq) => {
    function Yq() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (qq => {
        const Eq = 16 * Math.random() | 0;
        return ("x" === qq ? Eq : 3 & Eq | 8).toString(16)
      }))
    }
    gq.d(Eq, {
      d: () => Yq
    })
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);