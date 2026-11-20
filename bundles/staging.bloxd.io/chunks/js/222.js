/*! For license information please see teusab.222.e87f1170.chunk.js.LICENSE.txt */
export const id = 222;
export const ids = [222, 229];
export const modules = {
  37637: bb => {
    bb.exports = function(bb) {
      return null != bb && null != bb.constructor && "function" === typeof bb.constructor.isBuffer && bb.constructor.isBuffer(bb)
    }
  },
  37616: (bb, ab, Ub) => {
    var Ab = Ub(37624),
      Mb = Ub(37628),
      Tb = Ub(37637);
    Ub.g.__TYPEDARRAY_POOL || (Ub.g.__TYPEDARRAY_POOL = {
      UINT8: Mb([32, 0]),
      UINT16: Mb([32, 0]),
      UINT32: Mb([32, 0]),
      INT8: Mb([32, 0]),
      INT16: Mb([32, 0]),
      INT32: Mb([32, 0]),
      FLOAT: Mb([32, 0]),
      DOUBLE: Mb([32, 0]),
      DATA: Mb([32, 0]),
      UINT8C: Mb([32, 0]),
      BUFFER: Mb([32, 0])
    });
    var Eb = "undefined" !== typeof Uint8ClampedArray,
      Yb = Ub.g.__TYPEDARRAY_POOL;
    Yb.UINT8C || (Yb.UINT8C = Mb([32, 0])), Yb.BUFFER || (Yb.BUFFER = Mb([32, 0]));
    var Bb = Yb.DATA,
      eb = Yb.BUFFER;

    function vb(bb) {
      if (bb) {
        var ab = bb.length || bb.byteLength,
          Ub = Ab.log2(ab);
        Bb[Ub].push(bb)
      }
    }

    function Lb(bb) {
      bb = Ab.nextPow2(bb);
      var ab = Ab.log2(bb),
        Ub = Bb[ab];
      return Ub.length > 0 ? Ub.pop() : new ArrayBuffer(bb)
    }

    function Pb(bb) {
      return new Uint8Array(Lb(bb), 0, bb)
    }

    function Xb(bb) {
      return new Uint16Array(Lb(2 * bb), 0, bb)
    }

    function jb(bb) {
      return new Uint32Array(Lb(4 * bb), 0, bb)
    }

    function Rb(bb) {
      return new Int8Array(Lb(bb), 0, bb)
    }

    function kb(bb) {
      return new Int16Array(Lb(2 * bb), 0, bb)
    }

    function yb(bb) {
      return new Int32Array(Lb(4 * bb), 0, bb)
    }

    function Zb(bb) {
      return new Float32Array(Lb(4 * bb), 0, bb)
    }

    function Db(bb) {
      return new Float64Array(Lb(8 * bb), 0, bb)
    }

    function zb(bb) {
      return Eb ? new Uint8ClampedArray(Lb(bb), 0, bb) : Pb(bb)
    }

    function xb(bb) {
      return new DataView(Lb(bb), 0, bb)
    }
    ab.free = function(bb) {
      if (Tb(bb)) eb[Ab.log2(bb.length)].push(bb);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(bb) && (bb = bb.buffer), !bb) return;
        var ab = bb.length || bb.byteLength,
          Ub = 0 | Ab.log2(ab);
        Bb[Ub].push(bb)
      }
    }, ab.freeUint8 = ab.freeUint16 = ab.freeUint32 = ab.freeInt8 = ab.freeInt16 = ab.freeInt32 = ab.freeFloat32 = ab.freeFloat = ab.freeFloat64 = ab.freeDouble = ab.freeUint8Clamped = ab.freeDataView = function(bb) {
      vb(bb.buffer)
    }, ab.freeArrayBuffer = vb, ab.freeBuffer = function(bb) {
      eb[Ab.log2(bb.length)].push(bb)
    }, ab.malloc = function(bb, ab) {
      if (void 0 === ab || "arraybuffer" === ab) return Lb(bb);
      switch (ab) {
        case "uint8":
          return Pb(bb);
        case "uint16":
          return Xb(bb);
        case "uint32":
          return jb(bb);
        case "int8":
          return Rb(bb);
        case "int16":
          return kb(bb);
        case "int32":
          return yb(bb);
        case "float":
        case "float32":
          return Zb(bb);
        case "double":
        case "float64":
          return Db(bb);
        case "uint8_clamped":
          return zb(bb);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return xb(bb);
        default:
          return null
      }
      return null
    }, ab.mallocArrayBuffer = Lb, ab.mallocUint8 = Pb, ab.mallocUint16 = Xb, ab.mallocUint32 = jb, ab.mallocInt8 = Rb, ab.mallocInt16 = kb, ab.mallocInt32 = yb, ab.mallocFloat32 = ab.mallocFloat = Zb, ab.mallocFloat64 = ab.mallocDouble = Db, ab.mallocUint8Clamped = zb, ab.mallocDataView = xb, ab.clearCache = function() {
      for (var bb = 0; bb < 32; ++bb) Yb.UINT8[bb].length = 0, Yb.UINT16[bb].length = 0, Yb.UINT32[bb].length = 0, Yb.INT8[bb].length = 0, Yb.INT16[bb].length = 0, Yb.INT32[bb].length = 0, Yb.FLOAT[bb].length = 0, Yb.DOUBLE[bb].length = 0, Yb.UINT8C[bb].length = 0, Bb[bb].length = 0, eb[bb].length = 0
    }
  },
  37624: (bb, ab) => {
    function Ub(bb) {
      var ab = 32;
      return (bb &= -bb) && ab--, 65535 & bb && (ab -= 16), 16711935 & bb && (ab -= 8), 252645135 & bb && (ab -= 4), 858993459 & bb && (ab -= 2), 1431655765 & bb && (ab -= 1), ab
    }
    ab.INT_BITS = 32, ab.INT_MAX = 2147483647, ab.INT_MIN = -1 << 31, ab.sign = function(bb) {
      return (bb > 0) - (bb < 0)
    }, ab.abs = function(bb) {
      var ab = bb >> 31;
      return (bb ^ ab) - ab
    }, ab.min = function(bb, ab) {
      return ab ^ (bb ^ ab) & -(bb < ab)
    }, ab.max = function(bb, ab) {
      return bb ^ (bb ^ ab) & -(bb < ab)
    }, ab.isPow2 = function(bb) {
      return !(bb & bb - 1) && !!bb
    }, ab.log2 = function(bb) {
      var ab, Ub;
      return ab = (bb > 65535) << 4, ab |= Ub = ((bb >>>= ab) > 255) << 3, ab |= Ub = ((bb >>>= Ub) > 15) << 2, (ab |= Ub = ((bb >>>= Ub) > 3) << 1) | (bb >>>= Ub) >> 1
    }, ab.log10 = function(bb) {
      return bb >= 1e9 ? 9 : bb >= 1e8 ? 8 : bb >= 1e7 ? 7 : bb >= 1e6 ? 6 : bb >= 1e5 ? 5 : bb >= 1e4 ? 4 : bb >= 1e3 ? 3 : bb >= 100 ? 2 : bb >= 10 ? 1 : 0
    }, ab.popCount = function(bb) {
      return 16843009 * ((bb = (858993459 & (bb -= bb >>> 1 & 1431655765)) + (bb >>> 2 & 858993459)) + (bb >>> 4) & 252645135) >>> 24
    }, ab.countTrailingZeros = Ub, ab.nextPow2 = function(bb) {
      return bb += 0 === bb, --bb, bb |= bb >>> 1, bb |= bb >>> 2, bb |= bb >>> 4, bb |= bb >>> 8, (bb |= bb >>> 16) + 1
    }, ab.prevPow2 = function(bb) {
      return bb |= bb >>> 1, bb |= bb >>> 2, bb |= bb >>> 4, bb |= bb >>> 8, (bb |= bb >>> 16) - (bb >>> 1)
    }, ab.parity = function(bb) {
      return bb ^= bb >>> 16, bb ^= bb >>> 8, bb ^= bb >>> 4, 27030 >>> (bb &= 15) & 1
    };
    var Ab = new Array(256);
    ! function(bb) {
      for (var ab = 0; ab < 256; ++ab) {
        var Ub = ab,
          Ab = ab,
          Mb = 7;
        for (Ub >>>= 1; Ub; Ub >>>= 1) Ab <<= 1, Ab |= 1 & Ub, --Mb;
        bb[ab] = Ab << Mb & 255
      }
    }(Ab), ab.reverse = function(bb) {
      return Ab[255 & bb] << 24 | Ab[bb >>> 8 & 255] << 16 | Ab[bb >>> 16 & 255] << 8 | Ab[bb >>> 24 & 255]
    }, ab.interleave2 = function(bb, ab) {
      return (bb = 1431655765 & ((bb = 858993459 & ((bb = 252645135 & ((bb = 16711935 & ((bb &= 65535) | bb << 8)) | bb << 4)) | bb << 2)) | bb << 1)) | (ab = 1431655765 & ((ab = 858993459 & ((ab = 252645135 & ((ab = 16711935 & ((ab &= 65535) | ab << 8)) | ab << 4)) | ab << 2)) | ab << 1)) << 1
    }, ab.deinterleave2 = function(bb, ab) {
      return (bb = 65535 & ((bb = 16711935 & ((bb = 252645135 & ((bb = 858993459 & ((bb = bb >>> ab & 1431655765) | bb >>> 1)) | bb >>> 2)) | bb >>> 4)) | bb >>> 16)) << 16 >> 16
    }, ab.interleave3 = function(bb, ab, Ub) {
      return bb = 1227133513 & ((bb = 3272356035 & ((bb = 251719695 & ((bb = 4278190335 & ((bb &= 1023) | bb << 16)) | bb << 8)) | bb << 4)) | bb << 2), (bb |= (ab = 1227133513 & ((ab = 3272356035 & ((ab = 251719695 & ((ab = 4278190335 & ((ab &= 1023) | ab << 16)) | ab << 8)) | ab << 4)) | ab << 2)) << 1) | (Ub = 1227133513 & ((Ub = 3272356035 & ((Ub = 251719695 & ((Ub = 4278190335 & ((Ub &= 1023) | Ub << 16)) | Ub << 8)) | Ub << 4)) | Ub << 2)) << 2
    }, ab.deinterleave3 = function(bb, ab) {
      return (bb = 1023 & ((bb = 4278190335 & ((bb = 251719695 & ((bb = 3272356035 & ((bb = bb >>> ab & 1227133513) | bb >>> 2)) | bb >>> 4)) | bb >>> 8)) | bb >>> 16)) << 22 >> 22
    }, ab.nextCombination = function(bb) {
      var ab = bb | bb - 1;
      return ab + 1 | (~ab & -~ab) - 1 >>> Ub(bb) + 1
    }
  },
  37608: (bb, ab, Ub) => {
    bb.exports = function(bb, ab, Ub) {
      switch (arguments.length) {
        case 1:
          return Ab = [], eb(Mb = bb, Mb, vb, !0), Ab;
        case 2:
          return "function" === typeof ab ? eb(bb, bb, ab, !0) : function(bb, ab) {
            return Ab = [], eb(bb, ab, vb, !1), Ab
          }(bb, ab);
        case 3:
          return eb(bb, ab, Ub, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var Mb
    };
    var Ab, Mb = Ub(37616),
      Tb = Ub(37639),
      Eb = Ub(37652);

    function Yb(bb, ab) {
      for (var Ub = 0; Ub < bb; ++Ub)
        if (!(ab[Ub] <= ab[Ub + bb])) return !0;
      return !1
    }

    function Bb(bb, ab, Ub, Ab) {
      for (var Mb = 0, Tb = 0, Eb = 0, Bb = bb.length; Eb < Bb; ++Eb) {
        var eb = bb[Eb];
        if (!Yb(ab, eb)) {
          for (var vb = 0; vb < 2 * ab; ++vb) Ub[Mb++] = eb[vb];
          Ab[Tb++] = Eb
        }
      }
      return Tb
    }

    function eb(bb, ab, Ub, Ab) {
      var Yb = bb.length,
        eb = ab.length;
      if (!(Yb <= 0 || eb <= 0)) {
        var vb = bb[0].length >>> 1;
        if (!(vb <= 0)) {
          var Lb, Pb = Mb.mallocDouble(2 * vb * Yb),
            Xb = Mb.mallocInt32(Yb);
          if ((Yb = Bb(bb, vb, Pb, Xb)) > 0) {
            if (1 === vb && Ab) Tb.init(Yb), Lb = Tb.sweepComplete(vb, Ub, 0, Yb, Pb, Xb, 0, Yb, Pb, Xb);
            else {
              var jb = Mb.mallocDouble(2 * vb * eb),
                Rb = Mb.mallocInt32(eb);
              (eb = Bb(ab, vb, jb, Rb)) > 0 && (Tb.init(Yb + eb), Lb = 1 === vb ? Tb.sweepBipartite(vb, Ub, 0, Yb, Pb, Xb, 0, eb, jb, Rb) : Eb(vb, Ub, Ab, Yb, Pb, Xb, eb, jb, Rb), Mb.free(jb), Mb.free(Rb))
            }
            Mb.free(Pb), Mb.free(Xb)
          }
          return Lb
        }
      }
    }

    function vb(bb, ab) {
      Ab.push([bb, ab])
    }
  },
  37660: (bb, ab) => {
    var Ub = "d",
      Ab = "ax",
      Mb = "fp",
      Tb = "es",
      Eb = "rs",
      Yb = "re",
      Bb = "rb",
      eb = "bs",
      vb = "be",
      Lb = "bb",
      Pb = [Ub, Ab, "vv", Eb, Yb, Bb, "ri", eb, vb, Lb, "bi"];

    function Xb(bb) {
      var ab = "bruteForce" + (bb ? "Full" : "Partial"),
        Ab = [],
        Eb = Pb.slice();
      bb || Eb.splice(3, 0, Mb);
      var Yb = ["function " + ab + "(" + Eb.join() + "){"];

      function Bb(ab, Mb) {
        var Eb = function(bb, ab, Ab) {
          var Mb = "bruteForce" + (bb ? "Red" : "Blue") + (ab ? "Flip" : "") + (Ab ? "Full" : ""),
            Eb = ["function ", Mb, "(", Pb.join(), "){", "var ", Tb, "=2*", Ub, ";"],
            Yb = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            Bb = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (Ab ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return bb ? Eb.push(Yb, "Q", ":", Bb) : Eb.push(Bb, "Q", ":", Yb), Ab ? Eb.push("if(y1<x0||x1<y0)continue;") : ab ? Eb.push("if(y0<=x0||x1<y0)continue;") : Eb.push("if(y0<x0||x1<y0)continue;"), Eb.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), ab ? Eb.push("yi,xi") : Eb.push("xi,yi"), Eb.push(");if(rv!==void 0)return rv;}}}"), {
            name: Mb,
            code: Eb.join("")
          }
        }(ab, Mb, bb);
        Ab.push(Eb.code), Yb.push("return " + Eb.name + "(" + Pb.join() + ");")
      }
      Yb.push("if(re-rs>be-bs){"), bb ? (Bb(!0, !1), Yb.push("}else{"), Bb(!1, !1)) : (Yb.push("if(fp){"), Bb(!0, !0), Yb.push("}else{"), Bb(!0, !1), Yb.push("}}else{if(fp){"), Bb(!1, !0), Yb.push("}else{"), Bb(!1, !1), Yb.push("}")), Yb.push("}}return " + ab);
      var eb = Ab.join("") + Yb.join("");
      return new Function(eb)()
    }
    ab.partial = Xb(!1), ab.full = Xb(!0)
  },
  37652: (bb, ab, Ub) => {
    bb.exports = function(bb, ab, Ub, Tb, vb, Wb, Hb, Ib, db) {
      ! function(bb, ab) {
        var Ub = 8 * Mb.log2(ab + 1) * (bb + 1) | 0,
          Tb = Mb.nextPow2(zb * Ub);
        ib.length < Tb && (Ab.free(ib), ib = Ab.mallocInt32(Tb));
        var Eb = Mb.nextPow2(xb * Ub);
        fb.length < Eb && (Ab.free(fb), fb = Ab.mallocDouble(Eb))
      }(bb, Tb + Hb);
      var Fb, hb = 0,
        Gb = 2 * bb;
      mb(hb++, 0, 0, Tb, 0, Hb, Ub ? 16 : 0, -1 / 0, 1 / 0), Ub || mb(hb++, 0, 0, Hb, 0, Tb, 1, -1 / 0, 1 / 0);
      for (; hb > 0;) {
        var Qb = (hb -= 1) * zb,
          qb = ib[Qb],
          ub = ib[Qb + 1],
          rb = ib[Qb + 2],
          Kb = ib[Qb + 3],
          ob = ib[Qb + 4],
          lb = ib[Qb + 5],
          tb = hb * xb,
          wb = fb[tb],
          sb = fb[tb + 1],
          gb = 1 & lb,
          Cb = !!(16 & lb),
          Vb = vb,
          Ob = Wb,
          cb = Ib,
          Jb = db;
        if (gb && (Vb = Ib, Ob = db, cb = vb, Jb = Wb), !(2 & lb && ub >= (rb = kb(bb, qb, ub, rb, Vb, Ob, sb))) && !(4 & lb && (ub = yb(bb, qb, ub, rb, Vb, Ob, wb)) >= rb)) {
          var nb = rb - ub,
            Sb = ob - Kb;
          if (Cb) {
            if (bb * nb * (nb + Sb) < Xb) {
              if (void 0 !== (Fb = Bb.scanComplete(bb, qb, ab, ub, rb, Vb, Ob, Kb, ob, cb, Jb))) return Fb;
              continue
            }
          } else {
            if (bb * Math.min(nb, Sb) < Lb) {
              if (void 0 !== (Fb = Eb(bb, qb, ab, gb, ub, rb, Vb, Ob, Kb, ob, cb, Jb))) return Fb;
              continue
            }
            if (bb * nb * Sb < Pb) {
              if (void 0 !== (Fb = Bb.scanBipartite(bb, qb, ab, gb, ub, rb, Vb, Ob, Kb, ob, cb, Jb))) return Fb;
              continue
            }
          }
          var ba = jb(bb, qb, ub, rb, Vb, Ob, wb, sb);
          if (ub < ba)
            if (bb * (ba - ub) < Lb) {
              if (void 0 !== (Fb = Yb(bb, qb + 1, ab, ub, ba, Vb, Ob, Kb, ob, cb, Jb))) return Fb
            } else if (qb === bb - 2) {
            if (void 0 !== (Fb = gb ? Bb.sweepBipartite(bb, ab, Kb, ob, cb, Jb, ub, ba, Vb, Ob) : Bb.sweepBipartite(bb, ab, ub, ba, Vb, Ob, Kb, ob, cb, Jb))) return Fb
          } else mb(hb++, qb + 1, ub, ba, Kb, ob, gb, -1 / 0, 1 / 0), mb(hb++, qb + 1, Kb, ob, ub, ba, 1 ^ gb, -1 / 0, 1 / 0);
          if (ba < rb) {
            var aa = eb(bb, qb, Kb, ob, cb, Jb),
              Ua = cb[Gb * aa + qb],
              Aa = Rb(bb, qb, aa, ob, cb, Jb, Ua);
            if (Aa < ob && mb(hb++, qb, ba, rb, Aa, ob, (4 | gb) + (Cb ? 16 : 0), Ua, sb), Kb < aa && mb(hb++, qb, ba, rb, Kb, aa, (2 | gb) + (Cb ? 16 : 0), wb, Ua), aa + 1 === Aa) {
              if (void 0 !== (Fb = Cb ? Nb(bb, qb, ab, ba, rb, Vb, Ob, aa, cb, Jb[aa]) : pb(bb, qb, ab, gb, ba, rb, Vb, Ob, aa, cb, Jb[aa]))) return Fb
            } else if (aa < Aa) {
              var Ma;
              if (Cb) {
                if (ba < (Ma = Zb(bb, qb, ba, rb, Vb, Ob, Ua))) {
                  var Ta = Rb(bb, qb, ba, Ma, Vb, Ob, Ua);
                  if (qb === bb - 2) {
                    if (ba < Ta && void 0 !== (Fb = Bb.sweepComplete(bb, ab, ba, Ta, Vb, Ob, aa, Aa, cb, Jb))) return Fb;
                    if (Ta < Ma && void 0 !== (Fb = Bb.sweepBipartite(bb, ab, Ta, Ma, Vb, Ob, aa, Aa, cb, Jb))) return Fb
                  } else ba < Ta && mb(hb++, qb + 1, ba, Ta, aa, Aa, 16, -1 / 0, 1 / 0), Ta < Ma && (mb(hb++, qb + 1, Ta, Ma, aa, Aa, 0, -1 / 0, 1 / 0), mb(hb++, qb + 1, aa, Aa, Ta, Ma, 1, -1 / 0, 1 / 0))
                }
              } else ba < (Ma = gb ? Db(bb, qb, ba, rb, Vb, Ob, Ua) : Zb(bb, qb, ba, rb, Vb, Ob, Ua)) && (qb === bb - 2 ? Fb = gb ? Bb.sweepBipartite(bb, ab, aa, Aa, cb, Jb, ba, Ma, Vb, Ob) : Bb.sweepBipartite(bb, ab, ba, Ma, Vb, Ob, aa, Aa, cb, Jb) : (mb(hb++, qb + 1, ba, Ma, aa, Aa, gb, -1 / 0, 1 / 0), mb(hb++, qb + 1, aa, Aa, ba, Ma, 1 ^ gb, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var Ab = Ub(37616),
      Mb = Ub(37624),
      Tb = Ub(37660),
      Eb = Tb.partial,
      Yb = Tb.full,
      Bb = Ub(37639),
      eb = Ub(37663),
      vb = Ub(37665),
      Lb = 128,
      Pb = 1 << 22,
      Xb = 1 << 22,
      jb = vb("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      Rb = vb("lo===p0", ["p0"]),
      kb = vb("lo<p0", ["p0"]),
      yb = vb("hi<=p0", ["p0"]),
      Zb = vb("lo<=p0&&p0<=hi", ["p0"]),
      Db = vb("lo<p0&&p0<=hi", ["p0"]),
      zb = 6,
      xb = 2,
      ib = Ab.mallocInt32(1024),
      fb = Ab.mallocDouble(1024);

    function mb(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb) {
      var eb = zb * bb;
      ib[eb] = ab, ib[eb + 1] = Ub, ib[eb + 2] = Ab, ib[eb + 3] = Mb, ib[eb + 4] = Tb, ib[eb + 5] = Eb;
      var vb = xb * bb;
      fb[vb] = Yb, fb[vb + 1] = Bb
    }

    function pb(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb, vb) {
      var Lb = 2 * bb,
        Pb = Bb * Lb,
        Xb = eb[Pb + ab];
      bb: for (var jb = Mb, Rb = Mb * Lb; jb < Tb; ++jb, Rb += Lb) {
        var kb = Eb[Rb + ab],
          yb = Eb[Rb + ab + bb];
        if (!(Xb < kb || yb < Xb) && (!Ab || Xb !== kb)) {
          for (var Zb, Db = Yb[jb], zb = ab + 1; zb < bb; ++zb) {
            kb = Eb[Rb + zb], yb = Eb[Rb + zb + bb];
            var xb = eb[Pb + zb],
              ib = eb[Pb + zb + bb];
            if (yb < xb || ib < kb) continue bb
          }
          if (void 0 !== (Zb = Ab ? Ub(vb, Db) : Ub(Db, vb))) return Zb
        }
      }
    }

    function Nb(bb, ab, Ub, Ab, Mb, Tb, Eb, Yb, Bb, eb) {
      var vb = 2 * bb,
        Lb = Yb * vb,
        Pb = Bb[Lb + ab];
      bb: for (var Xb = Ab, jb = Ab * vb; Xb < Mb; ++Xb, jb += vb) {
        var Rb = Eb[Xb];
        if (Rb !== eb) {
          var kb = Tb[jb + ab],
            yb = Tb[jb + ab + bb];
          if (!(Pb < kb || yb < Pb)) {
            for (var Zb = ab + 1; Zb < bb; ++Zb) {
              kb = Tb[jb + Zb], yb = Tb[jb + Zb + bb];
              var Db = Bb[Lb + Zb],
                zb = Bb[Lb + Zb + bb];
              if (yb < Db || zb < kb) continue bb
            }
            var xb = Ub(Rb, eb);
            if (void 0 !== xb) return xb
          }
        }
      }
    }
  },
  37663: (bb, ab, Ub) => {
    bb.exports = function(bb, ab, Ub, Eb, Yb, Bb) {
      if (Eb <= Ub + 1) return Ub;
      var eb = Ub,
        vb = Eb,
        Lb = Eb + Ub >>> 1,
        Pb = 2 * bb,
        Xb = Lb,
        jb = Yb[Pb * Lb + ab];
      for (; eb < vb;) {
        if (vb - eb < Mb) {
          Tb(bb, ab, eb, vb, Yb, Bb), jb = Yb[Pb * Lb + ab];
          break
        }
        var Rb = vb - eb,
          kb = Math.random() * Rb + eb | 0,
          yb = Yb[Pb * kb + ab],
          Zb = Math.random() * Rb + eb | 0,
          Db = Yb[Pb * Zb + ab],
          zb = Math.random() * Rb + eb | 0,
          xb = Yb[Pb * zb + ab];
        yb <= Db ? xb >= Db ? (Xb = Zb, jb = Db) : yb >= xb ? (Xb = kb, jb = yb) : (Xb = zb, jb = xb) : Db >= xb ? (Xb = Zb, jb = Db) : xb >= yb ? (Xb = kb, jb = yb) : (Xb = zb, jb = xb);
        for (var ib = Pb * (vb - 1), fb = Pb * Xb, mb = 0; mb < Pb; ++mb, ++ib, ++fb) {
          var pb = Yb[ib];
          Yb[ib] = Yb[fb], Yb[fb] = pb
        }
        var Nb = Bb[vb - 1];
        Bb[vb - 1] = Bb[Xb], Bb[Xb] = Nb;
        for (ib = Pb * (vb - 1), fb = Pb * (Xb = Ab(bb, ab, eb, vb - 1, Yb, Bb, jb)), mb = 0; mb < Pb; ++mb, ++ib, ++fb) {
          pb = Yb[ib];
          Yb[ib] = Yb[fb], Yb[fb] = pb
        }
        Nb = Bb[vb - 1];
        if (Bb[vb - 1] = Bb[Xb], Bb[Xb] = Nb, Lb < Xb) {
          for (vb = Xb - 1; eb < vb && Yb[Pb * (vb - 1) + ab] === jb;) vb -= 1;
          vb += 1
        } else {
          if (!(Xb < Lb)) break;
          for (eb = Xb + 1; eb < vb && Yb[Pb * eb + ab] === jb;) eb += 1
        }
      }
      return Ab(bb, ab, Ub, Lb, Yb, Bb, Yb[Pb * Lb + ab])
    };
    var Ab = Ub(37665)("lo<p0", ["p0"]),
      Mb = 8;

    function Tb(bb, ab, Ub, Ab, Mb, Tb) {
      for (var Eb = 2 * bb, Yb = Eb * (Ub + 1) + ab, Bb = Ub + 1; Bb < Ab; ++Bb, Yb += Eb)
        for (var eb = Mb[Yb], vb = Bb, Lb = Eb * (Bb - 1); vb > Ub && Mb[Lb + ab] > eb; --vb, Lb -= Eb) {
          for (var Pb = Lb, Xb = Lb + Eb, jb = 0; jb < Eb; ++jb, ++Pb, ++Xb) {
            var Rb = Mb[Pb];
            Mb[Pb] = Mb[Xb], Mb[Xb] = Rb
          }
          var kb = Tb[vb];
          Tb[vb] = Tb[vb - 1], Tb[vb - 1] = kb
        }
    }
  },
  37665: bb => {
    bb.exports = function(bb, Ub) {
      var Ab = "abcdef".split("").concat(Ub),
        Mb = [];
      bb.indexOf("lo") >= 0 && Mb.push("lo=e[k+n]");
      bb.indexOf("hi") >= 0 && Mb.push("hi=e[k+o]");
      return Ab.push(ab.replace("_", Mb.join()).replace("$", bb)), Function.apply(void 0, Ab)
    };
    var ab = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  37646: bb => {
    bb.exports = function(bb, Ab) {
      Ab <= 4 * ab ? Ub(0, Ab - 1, bb) : eb(0, Ab - 1, bb)
    };
    var ab = 32;

    function Ub(bb, ab, Ub) {
      for (var Ab = 2 * (bb + 1), Mb = bb + 1; Mb <= ab; ++Mb) {
        for (var Tb = Ub[Ab++], Eb = Ub[Ab++], Yb = Mb, Bb = Ab - 2; Yb-- > bb;) {
          var eb = Ub[Bb - 2],
            vb = Ub[Bb - 1];
          if (eb < Tb) break;
          if (eb === Tb && vb < Eb) break;
          Ub[Bb] = eb, Ub[Bb + 1] = vb, Bb -= 2
        }
        Ub[Bb] = Tb, Ub[Bb + 1] = Eb
      }
    }

    function Ab(bb, ab, Ub) {
      ab *= 2;
      var Ab = Ub[bb *= 2],
        Mb = Ub[bb + 1];
      Ub[bb] = Ub[ab], Ub[bb + 1] = Ub[ab + 1], Ub[ab] = Ab, Ub[ab + 1] = Mb
    }

    function Mb(bb, ab, Ub) {
      ab *= 2, Ub[bb *= 2] = Ub[ab], Ub[bb + 1] = Ub[ab + 1]
    }

    function Tb(bb, ab, Ub, Ab) {
      ab *= 2, Ub *= 2;
      var Mb = Ab[bb *= 2],
        Tb = Ab[bb + 1];
      Ab[bb] = Ab[ab], Ab[bb + 1] = Ab[ab + 1], Ab[ab] = Ab[Ub], Ab[ab + 1] = Ab[Ub + 1], Ab[Ub] = Mb, Ab[Ub + 1] = Tb
    }

    function Eb(bb, ab, Ub, Ab, Mb) {
      ab *= 2, Mb[bb *= 2] = Mb[ab], Mb[ab] = Ub, Mb[bb + 1] = Mb[ab + 1], Mb[ab + 1] = Ab
    }

    function Yb(bb, ab, Ub) {
      ab *= 2;
      var Ab = Ub[bb *= 2],
        Mb = Ub[ab];
      return !(Ab < Mb) && (Ab !== Mb || Ub[bb + 1] > Ub[ab + 1])
    }

    function Bb(bb, ab, Ub, Ab) {
      var Mb = Ab[bb *= 2];
      return Mb < ab || Mb === ab && Ab[bb + 1] < Ub
    }

    function eb(bb, vb, Lb) {
      var Pb = (vb - bb + 1) / 6 | 0,
        Xb = bb + Pb,
        jb = vb - Pb,
        Rb = bb + vb >> 1,
        kb = Rb - Pb,
        yb = Rb + Pb,
        Zb = Xb,
        Db = kb,
        zb = Rb,
        xb = yb,
        ib = jb,
        fb = bb + 1,
        mb = vb - 1,
        pb = 0;
      Yb(Zb, Db, Lb) && (pb = Zb, Zb = Db, Db = pb), Yb(xb, ib, Lb) && (pb = xb, xb = ib, ib = pb), Yb(Zb, zb, Lb) && (pb = Zb, Zb = zb, zb = pb), Yb(Db, zb, Lb) && (pb = Db, Db = zb, zb = pb), Yb(Zb, xb, Lb) && (pb = Zb, Zb = xb, xb = pb), Yb(zb, xb, Lb) && (pb = zb, zb = xb, xb = pb), Yb(Db, ib, Lb) && (pb = Db, Db = ib, ib = pb), Yb(Db, zb, Lb) && (pb = Db, Db = zb, zb = pb), Yb(xb, ib, Lb) && (pb = xb, xb = ib, ib = pb);
      for (var Nb = Lb[2 * Db], Wb = Lb[2 * Db + 1], Hb = Lb[2 * xb], Ib = Lb[2 * xb + 1], db = 2 * Zb, Fb = 2 * zb, hb = 2 * ib, Gb = 2 * Xb, Qb = 2 * Rb, qb = 2 * jb, ub = 0; ub < 2; ++ub) {
        var rb = Lb[db + ub],
          Kb = Lb[Fb + ub],
          ob = Lb[hb + ub];
        Lb[Gb + ub] = rb, Lb[Qb + ub] = Kb, Lb[qb + ub] = ob
      }
      Mb(kb, bb, Lb), Mb(yb, vb, Lb);
      for (var lb = fb; lb <= mb; ++lb)
        if (Bb(lb, Nb, Wb, Lb)) lb !== fb && Ab(lb, fb, Lb), ++fb;
        else if (!Bb(lb, Hb, Ib, Lb))
        for (;;) {
          if (Bb(mb, Hb, Ib, Lb)) {
            Bb(mb, Nb, Wb, Lb) ? (Tb(lb, fb, mb, Lb), ++fb, --mb) : (Ab(lb, mb, Lb), --mb);
            break
          }
          if (--mb < lb) break
        }
      Eb(bb, fb - 1, Nb, Wb, Lb), Eb(vb, mb + 1, Hb, Ib, Lb), fb - 2 - bb <= ab ? Ub(bb, fb - 2, Lb) : eb(bb, fb - 2, Lb), vb - (mb + 2) <= ab ? Ub(mb + 2, vb, Lb) : eb(mb + 2, vb, Lb), mb - fb <= ab ? Ub(fb, mb, Lb) : eb(fb, mb, Lb)
    }
  },
  37639: (bb, ab, Ub) => {
    bb.exports = {
      init: function(bb) {
        var ab = Mb.nextPow2(bb);
        Bb.length < ab && (Ab.free(Bb), Bb = Ab.mallocInt32(ab));
        eb.length < ab && (Ab.free(eb), eb = Ab.mallocInt32(ab));
        vb.length < ab && (Ab.free(vb), vb = Ab.mallocInt32(ab));
        Lb.length < ab && (Ab.free(Lb), Lb = Ab.mallocInt32(ab));
        Pb.length < ab && (Ab.free(Pb), Pb = Ab.mallocInt32(ab));
        Xb.length < ab && (Ab.free(Xb), Xb = Ab.mallocInt32(ab));
        var Ub = 8 * ab;
        jb.length < Ub && (Ab.free(jb), jb = Ab.mallocDouble(Ub))
      },
      sweepBipartite: function(bb, ab, Ub, Ab, Mb, Yb, Pb, Xb, yb, Zb) {
        for (var Db = 0, zb = 2 * bb, xb = bb - 1, ib = zb - 1, fb = Ub; fb < Ab; ++fb) {
          var mb = Yb[fb],
            pb = zb * fb;
          jb[Db++] = Mb[pb + xb], jb[Db++] = -(mb + 1), jb[Db++] = Mb[pb + ib], jb[Db++] = mb
        }
        for (fb = Pb; fb < Xb; ++fb) {
          mb = Zb[fb] + Eb;
          var Nb = zb * fb;
          jb[Db++] = yb[Nb + xb], jb[Db++] = -mb, jb[Db++] = yb[Nb + ib], jb[Db++] = mb
        }
        var Wb = Db >>> 1;
        Tb(jb, Wb);
        var Hb = 0,
          Ib = 0;
        for (fb = 0; fb < Wb; ++fb) {
          var db = 0 | jb[2 * fb + 1];
          if (db >= Eb) Rb(vb, Lb, Ib--, db = db - Eb | 0);
          else if (db >= 0) Rb(Bb, eb, Hb--, db);
          else if (db <= -Eb) {
            db = -db - Eb | 0;
            for (var Fb = 0; Fb < Hb; ++Fb) {
              if (void 0 !== (hb = ab(Bb[Fb], db))) return hb
            }
            kb(vb, Lb, Ib++, db)
          } else {
            db = -db - 1 | 0;
            for (Fb = 0; Fb < Ib; ++Fb) {
              var hb;
              if (void 0 !== (hb = ab(db, vb[Fb]))) return hb
            }
            kb(Bb, eb, Hb++, db)
          }
        }
      },
      sweepComplete: function(bb, ab, Ub, Ab, Mb, Eb, Yb, yb, Zb, Db) {
        for (var zb = 0, xb = 2 * bb, ib = bb - 1, fb = xb - 1, mb = Ub; mb < Ab; ++mb) {
          var pb = Eb[mb] + 1 << 1,
            Nb = xb * mb;
          jb[zb++] = Mb[Nb + ib], jb[zb++] = -pb, jb[zb++] = Mb[Nb + fb], jb[zb++] = pb
        }
        for (mb = Yb; mb < yb; ++mb) {
          pb = Db[mb] + 1 << 1;
          var Wb = xb * mb;
          jb[zb++] = Zb[Wb + ib], jb[zb++] = 1 | -pb, jb[zb++] = Zb[Wb + fb], jb[zb++] = 1 | pb
        }
        var Hb = zb >>> 1;
        Tb(jb, Hb);
        var Ib = 0,
          db = 0,
          Fb = 0;
        for (mb = 0; mb < Hb; ++mb) {
          var hb = 0 | jb[2 * mb + 1],
            Gb = 1 & hb;
          if (mb < Hb - 1 && hb >> 1 === jb[2 * mb + 3] >> 1 && (Gb = 2, mb += 1), hb < 0) {
            for (var Qb = -(hb >> 1) - 1, qb = 0; qb < Fb; ++qb) {
              if (void 0 !== (ub = ab(Pb[qb], Qb))) return ub
            }
            if (0 !== Gb)
              for (qb = 0; qb < Ib; ++qb) {
                if (void 0 !== (ub = ab(Bb[qb], Qb))) return ub
              }
            if (1 !== Gb)
              for (qb = 0; qb < db; ++qb) {
                var ub;
                if (void 0 !== (ub = ab(vb[qb], Qb))) return ub
              }
            0 === Gb ? kb(Bb, eb, Ib++, Qb) : 1 === Gb ? kb(vb, Lb, db++, Qb) : 2 === Gb && kb(Pb, Xb, Fb++, Qb)
          } else {
            Qb = (hb >> 1) - 1;
            0 === Gb ? Rb(Bb, eb, Ib--, Qb) : 1 === Gb ? Rb(vb, Lb, db--, Qb) : 2 === Gb && Rb(Pb, Xb, Fb--, Qb)
          }
        }
      },
      scanBipartite: function(bb, ab, Ub, Ab, Mb, Yb, vb, Lb, Pb, Xb, yb, Zb) {
        var Db = 0,
          zb = 2 * bb,
          xb = ab,
          ib = ab + bb,
          fb = 1,
          mb = 1;
        Ab ? mb = Eb : fb = Eb;
        for (var pb = Mb; pb < Yb; ++pb) {
          var Nb = pb + fb,
            Wb = zb * pb;
          jb[Db++] = vb[Wb + xb], jb[Db++] = -Nb, jb[Db++] = vb[Wb + ib], jb[Db++] = Nb
        }
        for (pb = Pb; pb < Xb; ++pb) {
          Nb = pb + mb;
          var Hb = zb * pb;
          jb[Db++] = yb[Hb + xb], jb[Db++] = -Nb
        }
        var Ib = Db >>> 1;
        Tb(jb, Ib);
        var db = 0;
        for (pb = 0; pb < Ib; ++pb) {
          var Fb = 0 | jb[2 * pb + 1];
          if (Fb < 0) {
            var hb = !1;
            if ((Nb = -Fb) >= Eb ? (hb = !Ab, Nb -= Eb) : (hb = !!Ab, Nb -= 1), hb) kb(Bb, eb, db++, Nb);
            else {
              var Gb = Zb[Nb],
                Qb = zb * Nb,
                qb = yb[Qb + ab + 1],
                ub = yb[Qb + ab + 1 + bb];
              bb: for (var rb = 0; rb < db; ++rb) {
                var Kb = Bb[rb],
                  ob = zb * Kb;
                if (!(ub < vb[ob + ab + 1] || vb[ob + ab + 1 + bb] < qb)) {
                  for (var lb = ab + 2; lb < bb; ++lb)
                    if (yb[Qb + lb + bb] < vb[ob + lb] || vb[ob + lb + bb] < yb[Qb + lb]) continue bb;
                  var tb, wb = Lb[Kb];
                  if (void 0 !== (tb = Ab ? Ub(Gb, wb) : Ub(wb, Gb))) return tb
                }
              }
            }
          } else Rb(Bb, eb, db--, Fb - fb)
        }
      },
      scanComplete: function(bb, ab, Ub, Ab, Mb, Yb, eb, vb, Lb, Pb, Xb) {
        for (var Rb = 0, kb = 2 * bb, yb = ab, Zb = ab + bb, Db = Ab; Db < Mb; ++Db) {
          var zb = Db + Eb,
            xb = kb * Db;
          jb[Rb++] = Yb[xb + yb], jb[Rb++] = -zb, jb[Rb++] = Yb[xb + Zb], jb[Rb++] = zb
        }
        for (Db = vb; Db < Lb; ++Db) {
          zb = Db + 1;
          var ib = kb * Db;
          jb[Rb++] = Pb[ib + yb], jb[Rb++] = -zb
        }
        var fb = Rb >>> 1;
        Tb(jb, fb);
        var mb = 0;
        for (Db = 0; Db < fb; ++Db) {
          var pb = 0 | jb[2 * Db + 1];
          if (pb < 0) {
            if ((zb = -pb) >= Eb) Bb[mb++] = zb - Eb;
            else {
              var Nb = Xb[zb -= 1],
                Wb = kb * zb,
                Hb = Pb[Wb + ab + 1],
                Ib = Pb[Wb + ab + 1 + bb];
              bb: for (var db = 0; db < mb; ++db) {
                var Fb = Bb[db],
                  hb = eb[Fb];
                if (hb === Nb) break;
                var Gb = kb * Fb;
                if (!(Ib < Yb[Gb + ab + 1] || Yb[Gb + ab + 1 + bb] < Hb)) {
                  for (var Qb = ab + 2; Qb < bb; ++Qb)
                    if (Pb[Wb + Qb + bb] < Yb[Gb + Qb] || Yb[Gb + Qb + bb] < Pb[Wb + Qb]) continue bb;
                  var qb = Ub(hb, Nb);
                  if (void 0 !== qb) return qb
                }
              }
            }
          } else {
            for (zb = pb - Eb, db = mb - 1; db >= 0; --db)
              if (Bb[db] === zb) {
                for (Qb = db + 1; Qb < mb; ++Qb) Bb[Qb - 1] = Bb[Qb];
                break
              }-- mb
          }
        }
      }
    };
    var Ab = Ub(37616),
      Mb = Ub(37624),
      Tb = Ub(37646),
      Eb = 1 << 28,
      Yb = 1024,
      Bb = Ab.mallocInt32(Yb),
      eb = Ab.mallocInt32(Yb),
      vb = Ab.mallocInt32(Yb),
      Lb = Ab.mallocInt32(Yb),
      Pb = Ab.mallocInt32(Yb),
      Xb = Ab.mallocInt32(Yb),
      jb = Ab.mallocDouble(8192);

    function Rb(bb, ab, Ub, Ab) {
      var Mb = ab[Ab],
        Tb = bb[Ub - 1];
      bb[Mb] = Tb, ab[Tb] = Mb
    }

    function kb(bb, ab, Ub, Ab) {
      bb[Ub] = Ab, ab[Ab] = Ub
    }
  },
  37628: bb => {
    function ab(bb, Ub, Ab) {
      var Mb = 0 | bb[Ab];
      if (Mb <= 0) return [];
      var Tb, Eb = new Array(Mb);
      if (Ab === bb.length - 1)
        for (Tb = 0; Tb < Mb; ++Tb) Eb[Tb] = Ub;
      else
        for (Tb = 0; Tb < Mb; ++Tb) Eb[Tb] = ab(bb, Ub, Ab + 1);
      return Eb
    }
    bb.exports = function(bb, Ub) {
      switch ("undefined" === typeof Ub && (Ub = 0), typeof bb) {
        case "number":
          if (bb > 0) return function(bb, ab) {
            var Ub, Ab;
            for (Ub = new Array(bb), Ab = 0; Ab < bb; ++Ab) Ub[Ab] = ab;
            return Ub
          }(0 | bb, Ub);
          break;
        case "object":
          if ("number" === typeof bb.length) return ab(bb, Ub, 0)
      }
      return []
    }
  },
  37574: (bb, ab, Ub) => {
    bb.exports = function() {
      var bb = this;
      this.components = {}, this.comps = this.components;
      var ab = this.components,
        Ub = 1,
        Mb = {},
        Tb = [],
        Eb = [],
        Yb = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function Bb(bb, Ub) {
        var Ab = ab[Ub],
          Tb = Mb[Ub],
          Eb = Tb.hash[bb];
        Eb && (Tb.remove(bb), Ab.kp && (Ab.multi ? (Eb.forEach((ab => {
          ab && Ab.kp(bb, ab)
        })), Eb.length = 0) : Ab.kp(bb, Eb)), Yb.removals.push(Tb), eb())
      }

      function eb() {
        Yb.timeout || (Yb.timeout = !0, setTimeout(vb, 1))
      }

      function vb() {
        Yb.timeout = !1, Lb()
      }

      function Lb() {
        Yb.multiComps.length && function(bb) {
          for (var ab = 0; ab < bb.length; ab++) {
            var {
              entID: Ub,
              data: Ab
            } = bb[ab], Mb = Ab.hash[Ub];
            if (Mb) {
              for (var Tb = 0; Tb < Mb.length; Tb++) Mb[Tb] || (Mb.splice(Tb, 1), Tb--);
              0 === Mb.length && (Ab.remove(Ub), Yb.removals.push(Ab))
            }
          }
          bb.length = 0
        }(Yb.multiComps), Yb.removals.length && function(bb) {
          for (var ab = 0; ab < bb.length; ab++) {
            bb[ab].flush()
          }
          bb.length = 0
        }(Yb.removals)
      }
      this.Jj = Mb, this._systems = Tb, this._renderSystems = Eb, this.Ul = function(ab) {
        var Ab = Ub++;
        return Array.isArray(ab) && ab.forEach((ab => bb.FW(Ab, ab))), Ab
      }, this.deleteEntity = function(ab) {
        return Object.keys(Mb).forEach((bb => {
          Mb[bb].hash[ab] && Bb(ab, bb)
        })), bb
      }, this.Yab = function(bb) {
        if (!bb) throw new Error("Missing component definition");
        var Ub = bb.name;
        if (!Ub) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof Ub) throw new Error("Component name must be a string.");
        if ("" === Ub) throw new Error("Component name must be a non-empty string.");
        if (Mb[Ub]) throw new Error(`Component ${Ub} already exists.`);
        var Yb = {};
        return Yb.name = Ub, Yb.multi = !!bb.multi, Yb.order = isNaN(bb.order) ? 99 : bb.order, Yb.stateConstructor = bb.stateConstructor || null, Yb.state = bb.state || {}, Yb.uZ = bb.uZ || null, Yb.kp = bb.kp || null, Yb.system = bb.system || null, Yb.sZ = bb.sZ || null, ab[Ub] = Yb, Mb[Ub] = new Ab, Mb[Ub]._pendingMultiCleanup = !1, Mb[Ub]._multiCleanupIDs = Yb.multi ? [] : null, Yb.system && (Tb.push(Ub), Tb.sort(((bb, Ub) => ab[bb].order - ab[Ub].order))), Yb.sZ && (Eb.push(Ub), Eb.sort(((bb, Ub) => ab[bb].order - ab[Ub].order))), Ub
      }, this.overwriteComponent = function(bb, Ub) {
        var Ab = ab[bb];
        if (!Ab) throw new Error(`Unknown component: ${bb}`);
        if (!Ub) throw new Error("Missing component definition");
        if (Ab.name !== Ub.name) throw new Error("Overwriting component must use the same name property.");
        var Yb = {};
        Yb.name = bb, Yb.multi = !!Ub.multi, Yb.order = isNaN(Ub.order) ? 99 : Ub.order, Yb.state = Ub.state || {}, Yb.uZ = Ub.uZ || null, Yb.kp = Ub.kp || null, Yb.system = Ub.system || null, Yb.sZ = Ub.sZ || null, ab[bb] = Yb, Mb[bb]._pendingMultiCleanup = !1, Mb[bb]._multiCleanupIDs = Yb.multi ? [] : null;
        var Bb = Tb.indexOf(bb);
        Yb.system && Bb < 0 && Tb.push(bb), !Yb.system && Bb >= 0 && Tb.splice(Bb, 1), Tb.sort(((bb, Ub) => ab[bb].order - ab[Ub].order));
        var eb = Eb.indexOf(bb);
        Yb.sZ && eb < 0 && Eb.push(bb), !Yb.sZ && eb >= 0 && Eb.splice(eb, 1), Eb.sort(((bb, Ub) => ab[bb].order - ab[Ub].order));
        var vb = Yb.state;
        return this.pW(bb).forEach((bb => {
          for (var ab in vb) ab in bb || (bb[ab] = vb[ab]);
          Yb.uZ && Yb.uZ(bb.dW, bb)
        })), bb
      }, this.deleteComponent = function(Ub) {
        var Ab = Mb[Ub];
        if (!Ab) throw new Error(`Unknown component: ${Ub}`);
        Ab.flush(), Ab.list.forEach((bb => {
          bb && Bb(bb.dW || bb[0].dW, Ub)
        }));
        var Yb = Tb.indexOf(Ub),
          eb = Eb.indexOf(Ub);
        return Yb > -1 && Tb.splice(Yb, 1), eb > -1 && Eb.splice(eb, 1), Mb[Ub].dispose(), delete Mb[Ub], delete ab[Ub], bb
      }, this.FW = function(bb, Ub, Ab) {
        var Tb, Eb = ab[Ub],
          Yb = Mb[Ub];
        if (!Yb) throw new Error(`Unknown component: ${Ub}.`);
        if (Yb.hash[bb] && !Eb.multi) throw new Error(`Entity ${bb} already has component: ${Ub}.`);
        if (Eb.stateConstructor) {
          if (!(Tb = new Eb.stateConstructor).hasOwnProperty("dW")) throw new Error(`Component ${Eb.name} stateConstructor type does not have property __id`);
          Object.assign(Tb, Eb.state, Ab)
        } else Tb = {
          dW: bb,
          ...Eb.state,
          ...Ab
        };
        if (Tb.dW = bb, Eb.multi) {
          var Bb = Yb.hash[bb];
          Bb || (Bb = [], Yb.add(bb, Bb)), Bb.push(Tb)
        } else Yb.add(bb, Tb);
        return Eb.uZ && Eb.uZ(bb, Tb), this
      }, this.l_ = function(bb, ab) {
        var Ub = Mb[ab];
        if (!Ub) throw new Error(`Unknown component: ${ab}.`);
        return !!Ub.hash[bb]
      }, this.rW = function(ab, Ub) {
        if (!Mb[Ub]) throw new Error(`Unknown component: ${Ub}.`);
        return Bb(ab, Ub), bb
      }, this.getState = function(bb, ab) {
        var Ub = Mb[ab];
        if (!Ub) throw new Error(`Unknown component: ${ab}.`);
        return Ub.hash[bb]
      }, this.pW = function(bb) {
        var ab = Mb[bb];
        if (!ab) throw new Error(`Unknown component: ${bb}.`);
        return Lb(), ab.list
      }, this.rbb = function(bb) {
        if (!Mb[bb]) throw new Error(`Unknown component: ${bb}.`);
        var ab = Mb[bb].hash;
        return bb => ab[bb]
      }, this.sbb = function(bb) {
        if (!Mb[bb]) throw new Error(`Unknown component: ${bb}.`);
        var ab = Mb[bb].hash;
        return bb => !!ab[bb]
      }, this.qL = function(Ub) {
        Lb();
        for (var Ab = 0; Ab < Tb.length; Ab++) {
          var Eb = Tb[Ab],
            Yb = ab[Eb],
            Bb = Mb[Eb];
          Yb.system(Ub, Bb.list), Lb()
        }
        return bb
      }, this.render = function(Ub) {
        Lb();
        for (var Ab = 0; Ab < Eb.length; Ab++) {
          var Tb = Eb[Ab],
            Yb = ab[Tb],
            Bb = Mb[Tb];
          Yb.sZ(Ub, Bb.list), Lb()
        }
        return bb
      }, this.removeMultiComponent = function(Ub, Ab, Tb) {
        var Eb = ab[Ab],
          Bb = Mb[Ab];
        if (!Bb) throw new Error(`Unknown component: ${Ab}.`);
        if (!Eb.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(bb, ab, Ub, Ab) {
          var Mb = Ub.hash[bb];
          if (Mb) {
            var Tb = Mb[Ab];
            Tb && (Mb[Ab] = null, ab.kp && ab.kp(bb, Tb), Yb.multiComps.push({
              entID: bb,
              data: Ub
            }), eb())
          }
        }(Ub, Eb, Bb, Tb), bb
      }
    };
    var Ab = Ub(37579)
  },
  37579: bb => {
    function ab(bb, ab) {
      var Ub = bb._map[ab];
      if (delete bb.hash[ab], delete bb._map[ab], Ub === bb.list.length - 1) bb.list.pop(), bb._idList.pop();
      else {
        var Ab = bb.list.pop();
        bb.list[Ub] = Ab;
        var Mb = bb._idList.pop();
        bb._idList[Ub] = Mb, bb._map[Mb] = Ub
      }
    }
    bb.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(bb, ab) {
        if ("number" === typeof this._map[bb]) {
          var Ub = this._map[bb];
          this.hash[bb] = ab, this.list[Ub] = ab, this._idList[Ub] = bb
        } else this._map[bb] = this.list.length, this.hash[bb] = ab, this.list.push(ab), this._idList.push(bb)
      }
      remove(bb) {
        var ab = this._map[bb];
        this.hash[bb] = null, this.list[ab] = null, this._pendingRemovals.push(bb)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var bb = 0; bb < this._pendingRemovals.length; bb++) {
          var Ub = this._pendingRemovals[bb];
          null === this.hash[Ub] && ab(this, Ub)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  37066: bb => {
    bb.exports = function(bb) {
      for (var ab = new Array(bb), Ub = 0; Ub < bb; ++Ub) ab[Ub] = Ub;
      return ab
    }
  },
  37070: bb => {
    function ab(bb) {
      return !!bb.constructor && "function" === typeof bb.constructor.isBuffer && bb.constructor.isBuffer(bb)
    }
    bb.exports = function(bb) {
      return null != bb && (ab(bb) || function(bb) {
        return "function" === typeof bb.readFloatLE && "function" === typeof bb.slice && ab(bb.slice(0, 0))
      }(bb) || !!bb._isBuffer)
    }
  },
  37383: (bb, ab, Ub) => {
    bb = Ub.nmd(bb);
    var Ab = "__lodash_hash_undefined__",
      Mb = 9007199254740991,
      Tb = "[object Arguments]",
      Eb = "[object Boolean]",
      Yb = "[object Date]",
      Bb = "[object Function]",
      eb = "[object GeneratorFunction]",
      vb = "[object Map]",
      Lb = "[object Number]",
      Pb = "[object Object]",
      Xb = "[object Promise]",
      jb = "[object RegExp]",
      Rb = "[object Set]",
      kb = "[object String]",
      yb = "[object Symbol]",
      Zb = "[object WeakMap]",
      Db = "[object ArrayBuffer]",
      zb = "[object DataView]",
      xb = "[object Float32Array]",
      ib = "[object Float64Array]",
      fb = "[object Int8Array]",
      mb = "[object Int16Array]",
      pb = "[object Int32Array]",
      Nb = "[object Uint8Array]",
      Wb = "[object Uint8ClampedArray]",
      Hb = "[object Uint16Array]",
      Ib = "[object Uint32Array]",
      db = /\w*$/,
      Fb = /^\[object .+?Constructor\]$/,
      hb = /^(?:0|[1-9]\d*)$/,
      Gb = {};
    Gb[Tb] = Gb["[object Array]"] = Gb[Db] = Gb[zb] = Gb[Eb] = Gb[Yb] = Gb[xb] = Gb[ib] = Gb[fb] = Gb[mb] = Gb[pb] = Gb[vb] = Gb[Lb] = Gb[Pb] = Gb[jb] = Gb[Rb] = Gb[kb] = Gb[yb] = Gb[Nb] = Gb[Wb] = Gb[Hb] = Gb[Ib] = !0, Gb["[object Error]"] = Gb[Bb] = Gb[Zb] = !1;
    var Qb = "object" == typeof Ub.g && Ub.g && Ub.g.Object === Object && Ub.g,
      qb = "object" == typeof self && self && self.Object === Object && self,
      ub = Qb || qb || Function("return this")(),
      rb = ab && !ab.nodeType && ab,
      Kb = rb && bb && !bb.nodeType && bb,
      ob = Kb && Kb.exports === rb;

    function lb(bb, ab) {
      return bb.set(ab[0], ab[1]), bb
    }

    function tb(bb, ab) {
      return bb.add(ab), bb
    }

    function wb(bb, ab, Ub, Ab) {
      var Mb = -1,
        Tb = bb ? bb.length : 0;
      for (Ab && Tb && (Ub = bb[++Mb]); ++Mb < Tb;) Ub = ab(Ub, bb[Mb], Mb, bb);
      return Ub
    }

    function sb(bb) {
      var ab = !1;
      if (null != bb && "function" != typeof bb.toString) try {
        ab = !!(bb + "")
      } catch (Ub) {}
      return ab
    }

    function gb(bb) {
      var ab = -1,
        Ub = Array(bb.size);
      return bb.forEach((function(bb, Ab) {
        Ub[++ab] = [Ab, bb]
      })), Ub
    }

    function Cb(bb, ab) {
      return function(Ub) {
        return bb(ab(Ub))
      }
    }

    function Vb(bb) {
      var ab = -1,
        Ub = Array(bb.size);
      return bb.forEach((function(bb) {
        Ub[++ab] = bb
      })), Ub
    }
    var Ob = Array.prototype,
      cb = Function.prototype,
      Jb = Object.prototype,
      nb = ub["__core-js_shared__"],
      Sb = function() {
        var bb = /[^.]+$/.exec(nb && nb.keys && nb.keys.IE_PROTO || "");
        return bb ? "Symbol(src)_1." + bb : ""
      }(),
      ba = cb.toString,
      aa = Jb.hasOwnProperty,
      Ua = Jb.toString,
      Aa = RegExp("^" + ba.call(aa).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      Ma = ob ? ub.OX : void 0,
      Ta = ub.Symbol,
      Ea = ub.Uint8Array,
      Ya = Cb(Object.getPrototypeOf, Object),
      Ba = Object.create,
      ea = Jb.propertyIsEnumerable,
      va = Ob.splice,
      La = Object.getOwnPropertySymbols,
      Pa = Ma ? Ma.isBuffer : void 0,
      Xa = Cb(Object.keys, Object),
      ja = oa(ub, "DataView"),
      Ra = oa(ub, "Map"),
      ka = oa(ub, "Promise"),
      ya = oa(ub, "Set"),
      Za = oa(ub, "WeakMap"),
      Da = oa(Object, "create"),
      za = ga(ja),
      xa = ga(Ra),
      ia = ga(ka),
      fa = ga(ya),
      ma = ga(Za),
      pa = Ta ? Ta.prototype : void 0,
      Na = pa ? pa.valueOf : void 0;

    function Wa(bb) {
      var ab = -1,
        Ub = bb ? bb.length : 0;
      for (this.clear(); ++ab < Ub;) {
        var Ab = bb[ab];
        this.set(Ab[0], Ab[1])
      }
    }

    function Ha(bb) {
      var ab = -1,
        Ub = bb ? bb.length : 0;
      for (this.clear(); ++ab < Ub;) {
        var Ab = bb[ab];
        this.set(Ab[0], Ab[1])
      }
    }

    function Ia(bb) {
      var ab = -1,
        Ub = bb ? bb.length : 0;
      for (this.clear(); ++ab < Ub;) {
        var Ab = bb[ab];
        this.set(Ab[0], Ab[1])
      }
    }

    function da(bb) {
      this.__data__ = new Ha(bb)
    }

    function Fa(bb, ab) {
      var Ub = Va(bb) || function(bb) {
          return function(bb) {
            return function(bb) {
              return !!bb && "object" == typeof bb
            }(bb) && Oa(bb)
          }(bb) && aa.call(bb, "callee") && (!ea.call(bb, "callee") || Ua.call(bb) == Tb)
        }(bb) ? function(bb, ab) {
          for (var Ub = -1, Ab = Array(bb); ++Ub < bb;) Ab[Ub] = ab(Ub);
          return Ab
        }(bb.length, String) : [],
        Ab = Ub.length,
        Mb = !!Ab;
      for (var Eb in bb) !ab && !aa.call(bb, Eb) || Mb && ("length" == Eb || wa(Eb, Ab)) || Ub.push(Eb);
      return Ub
    }

    function ha(bb, ab, Ub) {
      var Ab = bb[ab];
      aa.call(bb, ab) && Ca(Ab, Ub) && (void 0 !== Ub || ab in bb) || (bb[ab] = Ub)
    }

    function Ga(bb, ab) {
      for (var Ub = bb.length; Ub--;)
        if (Ca(bb[Ub][0], ab)) return Ub;
      return -1
    }

    function Qa(bb, ab, Ub, Ab, Mb, Xb, Zb) {
      var Fb;
      if (Ab && (Fb = Xb ? Ab(bb, Mb, Xb, Zb) : Ab(bb)), void 0 !== Fb) return Fb;
      if (!na(bb)) return bb;
      var hb = Va(bb);
      if (hb) {
        if (Fb = function(bb) {
            var ab = bb.length,
              Ub = bb.constructor(ab);
            ab && "string" == typeof bb[0] && aa.call(bb, "index") && (Ub.index = bb.index, Ub.input = bb.input);
            return Ub
          }(bb), !ab) return function(bb, ab) {
          var Ub = -1,
            Ab = bb.length;
          ab || (ab = Array(Ab));
          for (; ++Ub < Ab;) ab[Ub] = bb[Ub];
          return ab
        }(bb, Fb)
      } else {
        var Qb = ta(bb),
          qb = Qb == Bb || Qb == eb;
        if (ca(bb)) return function(bb, ab) {
          if (ab) return bb.slice();
          var Ub = new bb.constructor(bb.length);
          return bb.copy(Ub), Ub
        }(bb, ab);
        if (Qb == Pb || Qb == Tb || qb && !Xb) {
          if (sb(bb)) return Xb ? bb : {};
          if (Fb = function(bb) {
              return "function" != typeof bb.constructor || sa(bb) ? {} : (ab = Ya(bb), na(ab) ? Ba(ab) : {});
              var ab
            }(qb ? {} : bb), !ab) return function(bb, ab) {
            return ra(bb, la(bb), ab)
          }(bb, function(bb, ab) {
            return bb && ra(ab, Sa(ab), bb)
          }(Fb, bb))
        } else {
          if (!Gb[Qb]) return Xb ? bb : {};
          Fb = function(bb, ab, Ub, Ab) {
            var Mb = bb.constructor;
            switch (ab) {
              case Db:
                return ua(bb);
              case Eb:
              case Yb:
                return new Mb(+bb);
              case zb:
                return function(bb, ab) {
                  var Ub = ab ? ua(bb.buffer) : bb.buffer;
                  return new bb.constructor(Ub, bb.byteOffset, bb.byteLength)
                }(bb, Ab);
              case xb:
              case ib:
              case fb:
              case mb:
              case pb:
              case Nb:
              case Wb:
              case Hb:
              case Ib:
                return function(bb, ab) {
                  var Ub = ab ? ua(bb.buffer) : bb.buffer;
                  return new bb.constructor(Ub, bb.byteOffset, bb.length)
                }(bb, Ab);
              case vb:
                return function(bb, ab, Ub) {
                  var Ab = ab ? Ub(gb(bb), !0) : gb(bb);
                  return wb(Ab, lb, new bb.constructor)
                }(bb, Ab, Ub);
              case Lb:
              case kb:
                return new Mb(bb);
              case jb:
                return function(bb) {
                  var ab = new bb.constructor(bb.source, db.exec(bb));
                  return ab.lastIndex = bb.lastIndex, ab
                }(bb);
              case Rb:
                return function(bb, ab, Ub) {
                  var Ab = ab ? Ub(Vb(bb), !0) : Vb(bb);
                  return wb(Ab, tb, new bb.constructor)
                }(bb, Ab, Ub);
              case yb:
                return Tb = bb, Na ? Object(Na.call(Tb)) : {}
            }
            var Tb
          }(bb, Qb, Qa, ab)
        }
      }
      Zb || (Zb = new da);
      var ub = Zb.get(bb);
      if (ub) return ub;
      if (Zb.set(bb, Fb), !hb) var rb = Ub ? function(bb) {
        return function(bb, ab, Ub) {
          var Ab = ab(bb);
          return Va(bb) ? Ab : function(bb, ab) {
            for (var Ub = -1, Ab = ab.length, Mb = bb.length; ++Ub < Ab;) bb[Mb + Ub] = ab[Ub];
            return bb
          }(Ab, Ub(bb))
        }(bb, Sa, la)
      }(bb) : Sa(bb);
      return function(bb, ab) {
        for (var Ub = -1, Ab = bb ? bb.length : 0; ++Ub < Ab && !1 !== ab(bb[Ub], Ub, bb););
      }(rb || bb, (function(Mb, Tb) {
        rb && (Mb = bb[Tb = Mb]), ha(Fb, Tb, Qa(Mb, ab, Ub, Ab, Tb, bb, Zb))
      })), Fb
    }

    function qa(bb) {
      return !(!na(bb) || (ab = bb, Sb && Sb in ab)) && (Ja(bb) || sb(bb) ? Aa : Fb).test(ga(bb));
      var ab
    }

    function ua(bb) {
      var ab = new bb.constructor(bb.byteLength);
      return new Ea(ab).set(new Ea(bb)), ab
    }

    function ra(bb, ab, Ub, Ab) {
      Ub || (Ub = {});
      for (var Mb = -1, Tb = ab.length; ++Mb < Tb;) {
        var Eb = ab[Mb],
          Yb = Ab ? Ab(Ub[Eb], bb[Eb], Eb, Ub, bb) : void 0;
        ha(Ub, Eb, void 0 === Yb ? bb[Eb] : Yb)
      }
      return Ub
    }

    function Ka(bb, ab) {
      var Ub = bb.__data__;
      return function(bb) {
        var ab = typeof bb;
        return "string" == ab || "number" == ab || "symbol" == ab || "boolean" == ab ? "__proto__" !== bb : null === bb
      }(ab) ? Ub["string" == typeof ab ? "string" : "hash"] : Ub.map
    }

    function oa(bb, ab) {
      var Ub = function(bb, ab) {
        return null == bb ? void 0 : bb[ab]
      }(bb, ab);
      return qa(Ub) ? Ub : void 0
    }
    Wa.prototype.clear = function() {
      this.__data__ = Da ? Da(null) : {}
    }, Wa.prototype.delete = function(bb) {
      return this.has(bb) && delete this.__data__[bb]
    }, Wa.prototype.get = function(bb) {
      var ab = this.__data__;
      if (Da) {
        var Ub = ab[bb];
        return Ub === Ab ? void 0 : Ub
      }
      return aa.call(ab, bb) ? ab[bb] : void 0
    }, Wa.prototype.has = function(bb) {
      var ab = this.__data__;
      return Da ? void 0 !== ab[bb] : aa.call(ab, bb)
    }, Wa.prototype.set = function(bb, ab) {
      return this.__data__[bb] = Da && void 0 === ab ? Ab : ab, this
    }, Ha.prototype.clear = function() {
      this.__data__ = []
    }, Ha.prototype.delete = function(bb) {
      var ab = this.__data__,
        Ub = Ga(ab, bb);
      return !(Ub < 0) && (Ub == ab.length - 1 ? ab.pop() : va.call(ab, Ub, 1), !0)
    }, Ha.prototype.get = function(bb) {
      var ab = this.__data__,
        Ub = Ga(ab, bb);
      return Ub < 0 ? void 0 : ab[Ub][1]
    }, Ha.prototype.has = function(bb) {
      return Ga(this.__data__, bb) > -1
    }, Ha.prototype.set = function(bb, ab) {
      var Ub = this.__data__,
        Ab = Ga(Ub, bb);
      return Ab < 0 ? Ub.push([bb, ab]) : Ub[Ab][1] = ab, this
    }, Ia.prototype.clear = function() {
      this.__data__ = {
        hash: new Wa,
        map: new(Ra || Ha),
        string: new Wa
      }
    }, Ia.prototype.delete = function(bb) {
      return Ka(this, bb).delete(bb)
    }, Ia.prototype.get = function(bb) {
      return Ka(this, bb).get(bb)
    }, Ia.prototype.has = function(bb) {
      return Ka(this, bb).has(bb)
    }, Ia.prototype.set = function(bb, ab) {
      return Ka(this, bb).set(bb, ab), this
    }, da.prototype.clear = function() {
      this.__data__ = new Ha
    }, da.prototype.delete = function(bb) {
      return this.__data__.delete(bb)
    }, da.prototype.get = function(bb) {
      return this.__data__.get(bb)
    }, da.prototype.has = function(bb) {
      return this.__data__.has(bb)
    }, da.prototype.set = function(bb, ab) {
      var Ub = this.__data__;
      if (Ub instanceof Ha) {
        var Ab = Ub.__data__;
        if (!Ra || Ab.length < 199) return Ab.push([bb, ab]), this;
        Ub = this.__data__ = new Ia(Ab)
      }
      return Ub.set(bb, ab), this
    };
    var la = La ? Cb(La, Object) : function() {
        return []
      },
      ta = function(bb) {
        return Ua.call(bb)
      };

    function wa(bb, ab) {
      return !!(ab = null == ab ? Mb : ab) && ("number" == typeof bb || hb.test(bb)) && bb > -1 && bb % 1 == 0 && bb < ab
    }

    function sa(bb) {
      var ab = bb && bb.constructor;
      return bb === ("function" == typeof ab && ab.prototype || Jb)
    }

    function ga(bb) {
      if (null != bb) {
        try {
          return ba.call(bb)
        } catch (ab) {}
        try {
          return bb + ""
        } catch (ab) {}
      }
      return ""
    }

    function Ca(bb, ab) {
      return bb === ab || bb !== bb && ab !== ab
    }(ja && ta(new ja(new ArrayBuffer(1))) != zb || Ra && ta(new Ra) != vb || ka && ta(ka.resolve()) != Xb || ya && ta(new ya) != Rb || Za && ta(new Za) != Zb) && (ta = function(bb) {
      var ab = Ua.call(bb),
        Ub = ab == Pb ? bb.constructor : void 0,
        Ab = Ub ? ga(Ub) : void 0;
      if (Ab) switch (Ab) {
        case za:
          return zb;
        case xa:
          return vb;
        case ia:
          return Xb;
        case fa:
          return Rb;
        case ma:
          return Zb
      }
      return ab
    });
    var Va = Array.isArray;

    function Oa(bb) {
      return null != bb && function(bb) {
        return "number" == typeof bb && bb > -1 && bb % 1 == 0 && bb <= Mb
      }(bb.length) && !Ja(bb)
    }
    var ca = Pa || function() {
      return !1
    };

    function Ja(bb) {
      var ab = na(bb) ? Ua.call(bb) : "";
      return ab == Bb || ab == eb
    }

    function na(bb) {
      var ab = typeof bb;
      return !!bb && ("object" == ab || "function" == ab)
    }

    function Sa(bb) {
      return Oa(bb) ? Fa(bb) : function(bb) {
        if (!sa(bb)) return Xa(bb);
        var ab = [];
        for (var Ub in Object(bb)) aa.call(bb, Ub) && "constructor" != Ub && ab.push(Ub);
        return ab
      }(bb)
    }
    bb.exports = function(bb) {
      return Qa(bb, !0, !0)
    }
  },
  37064: (bb, ab, Ub) => {
    var Ab = Ub(37066),
      Mb = Ub(37070),
      Tb = "undefined" !== typeof Float64Array;

    function Eb(bb, ab) {
      return bb[0] - ab[0]
    }

    function Yb() {
      var bb, ab = this.stride,
        Ub = new Array(ab.length);
      for (bb = 0; bb < Ub.length; ++bb) Ub[bb] = [Math.abs(ab[bb]), bb];
      Ub.sort(Eb);
      var Ab = new Array(Ub.length);
      for (bb = 0; bb < Ab.length; ++bb) Ab[bb] = Ub[bb][1];
      return Ab
    }

    function Bb(bb, ab) {
      var Ub = ["View", ab, "d", bb].join("");
      ab < 0 && (Ub = "View_Nil" + bb);
      var Mb = "generic" === bb;
      if (-1 === ab) {
        var Tb = "function " + Ub + "(a){this.data=a;};var proto=" + Ub + ".prototype;proto.dtype='" + bb + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + Ub + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + Ub + "(a){return new " + Ub + "(a);}";
        return new Function(Tb)()
      }
      if (0 === ab) {
        Tb = "function " + Ub + "(a,d) {this.data = a;this.offset = d};var proto=" + Ub + ".prototype;proto.dtype='" + bb + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + Ub + "_copy() {return new " + Ub + "(this.data,this.offset)};proto.pick=function " + Ub + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + Ub + "_get(){return " + (Mb ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + Ub + "_set(v){return " + (Mb ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + Ub + "(a,b,c,d){return new " + Ub + "(a,d)}";
        return new Function("TrivialArray", Tb)(eb[bb][0])
      }
      Tb = ["'use strict'"];
      var Eb = Ab(ab),
        Bb = Eb.map((function(bb) {
          return "i" + bb
        })),
        vb = "this.offset+" + Eb.map((function(bb) {
          return "this.stride[" + bb + "]*i" + bb
        })).join("+"),
        Lb = Eb.map((function(bb) {
          return "b" + bb
        })).join(","),
        Pb = Eb.map((function(bb) {
          return "c" + bb
        })).join(",");
      Tb.push("function " + Ub + "(a," + Lb + "," + Pb + ",d){this.data=a", "this.shape=[" + Lb + "]", "this.stride=[" + Pb + "]", "this.offset=d|0}", "var proto=" + Ub + ".prototype", "proto.dtype='" + bb + "'", "proto.dimension=" + ab), Tb.push("Object.defineProperty(proto,'size',{get:function " + Ub + "_size(){return " + Eb.map((function(bb) {
        return "this.shape[" + bb + "]"
      })).join("*"), "}})"), 1 === ab ? Tb.push("proto.order=[0]") : (Tb.push("Object.defineProperty(proto,'order',{get:"), ab < 4 ? (Tb.push("function " + Ub + "_order(){"), 2 === ab ? Tb.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === ab && Tb.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : Tb.push("ORDER})")), Tb.push("proto.set=function " + Ub + "_set(" + Bb.join(",") + ",v){"), Mb ? Tb.push("return this.data.set(" + vb + ",v)}") : Tb.push("return this.data[" + vb + "]=v}"), Tb.push("proto.get=function " + Ub + "_get(" + Bb.join(",") + "){"), Mb ? Tb.push("return this.data.get(" + vb + ")}") : Tb.push("return this.data[" + vb + "]}"), Tb.push("proto.index=function " + Ub + "_index(", Bb.join(), "){return " + vb + "}"), Tb.push("proto.hi=function " + Ub + "_hi(" + Bb.join(",") + "){return new " + Ub + "(this.data," + Eb.map((function(bb) {
        return ["(typeof i", bb, "!=='number'||i", bb, "<0)?this.shape[", bb, "]:i", bb, "|0"].join("")
      })).join(",") + "," + Eb.map((function(bb) {
        return "this.stride[" + bb + "]"
      })).join(",") + ",this.offset)}");
      var Xb = Eb.map((function(bb) {
          return "a" + bb + "=this.shape[" + bb + "]"
        })),
        jb = Eb.map((function(bb) {
          return "c" + bb + "=this.stride[" + bb + "]"
        }));
      Tb.push("proto.lo=function " + Ub + "_lo(" + Bb.join(",") + "){var b=this.offset,d=0," + Xb.join(",") + "," + jb.join(","));
      for (var Rb = 0; Rb < ab; ++Rb) Tb.push("if(typeof i" + Rb + "==='number'&&i" + Rb + ">=0){d=i" + Rb + "|0;b+=c" + Rb + "*d;a" + Rb + "-=d}");
      Tb.push("return new " + Ub + "(this.data," + Eb.map((function(bb) {
        return "a" + bb
      })).join(",") + "," + Eb.map((function(bb) {
        return "c" + bb
      })).join(",") + ",b)}"), Tb.push("proto.step=function " + Ub + "_step(" + Bb.join(",") + "){var " + Eb.map((function(bb) {
        return "a" + bb + "=this.shape[" + bb + "]"
      })).join(",") + "," + Eb.map((function(bb) {
        return "b" + bb + "=this.stride[" + bb + "]"
      })).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
      for (Rb = 0; Rb < ab; ++Rb) Tb.push("if(typeof i" + Rb + "==='number'){d=i" + Rb + "|0;if(d<0){c+=b" + Rb + "*(a" + Rb + "-1);a" + Rb + "=ceil(-a" + Rb + "/d)}else{a" + Rb + "=ceil(a" + Rb + "/d)}b" + Rb + "*=d}");
      Tb.push("return new " + Ub + "(this.data," + Eb.map((function(bb) {
        return "a" + bb
      })).join(",") + "," + Eb.map((function(bb) {
        return "b" + bb
      })).join(",") + ",c)}");
      var kb = new Array(ab),
        yb = new Array(ab);
      for (Rb = 0; Rb < ab; ++Rb) kb[Rb] = "a[i" + Rb + "]", yb[Rb] = "b[i" + Rb + "]";
      Tb.push("proto.transpose=function " + Ub + "_transpose(" + Bb + "){" + Bb.map((function(bb, ab) {
        return bb + "=(" + bb + "===undefined?" + ab + ":" + bb + "|0)"
      })).join(";"), "var a=this.shape,b=this.stride;return new " + Ub + "(this.data," + kb.join(",") + "," + yb.join(",") + ",this.offset)}"), Tb.push("proto.pick=function " + Ub + "_pick(" + Bb + "){var a=[],b=[],c=this.offset");
      for (Rb = 0; Rb < ab; ++Rb) Tb.push("if(typeof i" + Rb + "==='number'&&i" + Rb + ">=0){c=(c+this.stride[" + Rb + "]*i" + Rb + ")|0}else{a.push(this.shape[" + Rb + "]);b.push(this.stride[" + Rb + "])}");
      return Tb.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), Tb.push("return function construct_" + Ub + "(data,shape,stride,offset){return new " + Ub + "(data," + Eb.map((function(bb) {
        return "shape[" + bb + "]"
      })).join(",") + "," + Eb.map((function(bb) {
        return "stride[" + bb + "]"
      })).join(",") + ",offset)}"), new Function("CTOR_LIST", "ORDER", Tb.join("\n"))(eb[bb], Yb)
    }
    var eb = {
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
    bb.exports = function(bb, ab, Ub, Ab) {
      if (void 0 === bb) return (0, eb.array[0])([]);
      "number" === typeof bb && (bb = [bb]), void 0 === ab && (ab = [bb.length]);
      var Eb = ab.length;
      if (void 0 === Ub) {
        Ub = new Array(Eb);
        for (var Yb = Eb - 1, vb = 1; Yb >= 0; --Yb) Ub[Yb] = vb, vb *= ab[Yb]
      }
      if (void 0 === Ab) {
        Ab = 0;
        for (Yb = 0; Yb < Eb; ++Yb) Ub[Yb] < 0 && (Ab -= (ab[Yb] - 1) * Ub[Yb])
      }
      for (var Lb = function(bb) {
          if (Mb(bb)) return "buffer";
          if (Tb) switch (Object.prototype.toString.call(bb)) {
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
          return Array.isArray(bb) ? "array" : "generic"
        }(bb), Pb = eb[Lb]; Pb.length <= Eb + 1;) Pb.push(Bb(Lb, Pb.length - 1));
      return (0, Pb[Eb + 1])(bb, ab, Ub, Ab)
    }
  },
  37786: bb => {
    function ab(bb, ab, Ub) {
      for (var Ab = bb.length, Mb = -1 / 0, Tb = 1 / 0, Eb = 0; Eb < Ab; Eb++) {
        var Yb = (Ub[0][Eb] - bb[Eb]) / ab[Eb],
          Bb = (Ub[1][Eb] - bb[Eb]) / ab[Eb];
        if (Yb > Bb) {
          var eb = Yb;
          Yb = Bb, Bb = eb
        }
        if (Bb < Mb || Yb > Tb) return 1 / 0;
        Yb > Mb && (Mb = Yb), Bb < Tb && (Tb = Bb)
      }
      return Mb > Tb ? 1 / 0 : Mb
    }
    bb.exports = function(bb, Ub, Ab, Mb) {
      var Tb = ab(Ub, Ab, Mb);
      if (Tb === 1 / 0) bb = null;
      else {
        bb = bb || [];
        for (var Eb = 0; Eb < Ub.length; Eb++) bb[Eb] = Ub[Eb] + Ab[Eb] * Tb
      }
      return bb
    }, bb.exports.distance = ab
  },
  37079: (bb, ab, Ub) => {
    var Ab = Ub(37086);

    function Mb(bb) {
      for (var ab, Ub, Mb = 0, Tb = bb.length, Eb = 0; Eb < bb.length;) {
        for (ab = bb[Eb], Ub = 0; Eb < Tb && bb[Eb] === ab;) ++Eb, ++Ub;
        Mb += Ab.log2(Ub) / 7 | 0, Mb += Ab.log2(ab >>> 0) / 7 | 0, Mb += 2
      }
      return Mb
    }
    ab.size = Mb, ab.encode = function(bb, ab) {
      ab || (ab = new Uint8Array(Mb(bb)));
      for (var Ub, Ab, Tb = 0, Eb = ab.length, Yb = 0; Yb < bb.length;) {
        for (Ub = bb[Yb], Ab = 0; Yb < bb.length && bb[Yb] === Ub;) ++Yb, ++Ab;
        for (; Tb < Eb && Ab >= 128;) ab[Tb++] = 128 + (127 & Ab), Ab >>>= 7;
        if (Tb >= Eb) throw new Error("RLE buffer overflow");
        for (ab[Tb++] = Ab, Ub >>>= 0; Tb < Eb && Ub >= 128;) ab[Tb++] = 128 + (127 & Ub), Ub >>>= 7;
        if (Tb >= Eb) throw new Error("RLE buffer overflow");
        ab[Tb++] = Ub
      }
      return ab
    }, ab.decode = function(bb, ab) {
      for (var Ub, Ab, Mb, Tb, Eb = ab.length, Yb = bb.length, Bb = 0, eb = 0; eb < Yb;) {
        for (Ub = 0, Ab = 0; eb < Yb && bb[eb] >= 128;) Ub += (127 & bb[eb++]) << Ab, Ab += 7;
        if (Ub += bb[eb++] << Ab, eb >= Yb) throw new Error("RLE buffer underrun");
        if (Bb + Ub > Eb) throw new Error("Chunk buffer overflow");
        for (Mb = 0, Ab = 0; eb < Yb && bb[eb] >= 128;) Mb += (127 & bb[eb++]) << Ab, Ab += 7;
        if (eb >= Yb) throw new Error("RLE buffer underrun");
        for (Mb += bb[eb++] << Ab, Tb = 0; Tb < Ub; ++Tb) ab[Bb++] = Mb
      }
      return ab
    }
  },
  37086: (bb, ab) => {
    function Ub(bb) {
      var ab = 32;
      return (bb &= -bb) && ab--, 65535 & bb && (ab -= 16), 16711935 & bb && (ab -= 8), 252645135 & bb && (ab -= 4), 858993459 & bb && (ab -= 2), 1431655765 & bb && (ab -= 1), ab
    }
    ab.INT_BITS = 32, ab.INT_MAX = 2147483647, ab.INT_MIN = -1 << 31, ab.sign = function(bb) {
      return (bb > 0) - (bb < 0)
    }, ab.abs = function(bb) {
      var ab = bb >> 31;
      return (bb ^ ab) - ab
    }, ab.min = function(bb, ab) {
      return ab ^ (bb ^ ab) & -(bb < ab)
    }, ab.max = function(bb, ab) {
      return bb ^ (bb ^ ab) & -(bb < ab)
    }, ab.isPow2 = function(bb) {
      return !(bb & bb - 1) && !!bb
    }, ab.log2 = function(bb) {
      var ab, Ub;
      return ab = (bb > 65535) << 4, ab |= Ub = ((bb >>>= ab) > 255) << 3, ab |= Ub = ((bb >>>= Ub) > 15) << 2, (ab |= Ub = ((bb >>>= Ub) > 3) << 1) | (bb >>>= Ub) >> 1
    }, ab.log10 = function(bb) {
      return bb >= 1e9 ? 9 : bb >= 1e8 ? 8 : bb >= 1e7 ? 7 : bb >= 1e6 ? 6 : bb >= 1e5 ? 5 : bb >= 1e4 ? 4 : bb >= 1e3 ? 3 : bb >= 100 ? 2 : bb >= 10 ? 1 : 0
    }, ab.popCount = function(bb) {
      return 16843009 * ((bb = (858993459 & (bb -= bb >>> 1 & 1431655765)) + (bb >>> 2 & 858993459)) + (bb >>> 4) & 252645135) >>> 24
    }, ab.countTrailingZeros = Ub, ab.nextPow2 = function(bb) {
      return bb += 0 === bb, --bb, bb |= bb >>> 1, bb |= bb >>> 2, bb |= bb >>> 4, bb |= bb >>> 8, (bb |= bb >>> 16) + 1
    }, ab.prevPow2 = function(bb) {
      return bb |= bb >>> 1, bb |= bb >>> 2, bb |= bb >>> 4, bb |= bb >>> 8, (bb |= bb >>> 16) - (bb >>> 1)
    }, ab.parity = function(bb) {
      return bb ^= bb >>> 16, bb ^= bb >>> 8, bb ^= bb >>> 4, 27030 >>> (bb &= 15) & 1
    };
    var Ab = new Array(256);
    ! function(bb) {
      for (var ab = 0; ab < 256; ++ab) {
        var Ub = ab,
          Ab = ab,
          Mb = 7;
        for (Ub >>>= 1; Ub; Ub >>>= 1) Ab <<= 1, Ab |= 1 & Ub, --Mb;
        bb[ab] = Ab << Mb & 255
      }
    }(Ab), ab.reverse = function(bb) {
      return Ab[255 & bb] << 24 | Ab[bb >>> 8 & 255] << 16 | Ab[bb >>> 16 & 255] << 8 | Ab[bb >>> 24 & 255]
    }, ab.interleave2 = function(bb, ab) {
      return (bb = 1431655765 & ((bb = 858993459 & ((bb = 252645135 & ((bb = 16711935 & ((bb &= 65535) | bb << 8)) | bb << 4)) | bb << 2)) | bb << 1)) | (ab = 1431655765 & ((ab = 858993459 & ((ab = 252645135 & ((ab = 16711935 & ((ab &= 65535) | ab << 8)) | ab << 4)) | ab << 2)) | ab << 1)) << 1
    }, ab.deinterleave2 = function(bb, ab) {
      return (bb = 65535 & ((bb = 16711935 & ((bb = 252645135 & ((bb = 858993459 & ((bb = bb >>> ab & 1431655765) | bb >>> 1)) | bb >>> 2)) | bb >>> 4)) | bb >>> 16)) << 16 >> 16
    }, ab.interleave3 = function(bb, ab, Ub) {
      return bb = 1227133513 & ((bb = 3272356035 & ((bb = 251719695 & ((bb = 4278190335 & ((bb &= 1023) | bb << 16)) | bb << 8)) | bb << 4)) | bb << 2), (bb |= (ab = 1227133513 & ((ab = 3272356035 & ((ab = 251719695 & ((ab = 4278190335 & ((ab &= 1023) | ab << 16)) | ab << 8)) | ab << 4)) | ab << 2)) << 1) | (Ub = 1227133513 & ((Ub = 3272356035 & ((Ub = 251719695 & ((Ub = 4278190335 & ((Ub &= 1023) | Ub << 16)) | Ub << 8)) | Ub << 4)) | Ub << 2)) << 2
    }, ab.deinterleave3 = function(bb, ab) {
      return (bb = 1023 & ((bb = 4278190335 & ((bb = 251719695 & ((bb = 3272356035 & ((bb = bb >>> ab & 1227133513) | bb >>> 2)) | bb >>> 4)) | bb >>> 8)) | bb >>> 16)) << 22 >> 22
    }, ab.nextCombination = function(bb) {
      var ab = bb | bb - 1;
      return ab + 1 | (~ab & -~ab) - 1 >>> Ub(bb) + 1
    }
  },
  36587: (bb, ab, Ub) => {
    Ub.d(ab, {
      Color3: () => Ab.c,
      b: () => Ab.g
    });
    var Ab = Ub(36593);
    (0, Ab.k)()
  },
  37113: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb
    });
    var Ab = Ub(37122);
    class Mb {
      static GetPlanes(bb) {
        const ab = [];
        for (let Ub = 0; Ub < 6; Ub++) ab.push(new Ab.b(0, 0, 0, 0));
        return Mb.GetPlanesToRef(bb, ab), ab
      }
      static GetNearPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] + Ub[2], ab.normal.y = Ub[7] + Ub[6], ab.normal.z = Ub[11] + Ub[10], ab.d = Ub[15] + Ub[14], ab.normalize()
      }
      static GetFarPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] - Ub[2], ab.normal.y = Ub[7] - Ub[6], ab.normal.z = Ub[11] - Ub[10], ab.d = Ub[15] - Ub[14], ab.normalize()
      }
      static GetLeftPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] + Ub[0], ab.normal.y = Ub[7] + Ub[4], ab.normal.z = Ub[11] + Ub[8], ab.d = Ub[15] + Ub[12], ab.normalize()
      }
      static GetRightPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] - Ub[0], ab.normal.y = Ub[7] - Ub[4], ab.normal.z = Ub[11] - Ub[8], ab.d = Ub[15] - Ub[12], ab.normalize()
      }
      static GetTopPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] - Ub[1], ab.normal.y = Ub[7] - Ub[5], ab.normal.z = Ub[11] - Ub[9], ab.d = Ub[15] - Ub[13], ab.normalize()
      }
      static GetBottomPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] + Ub[1], ab.normal.y = Ub[7] + Ub[5], ab.normal.z = Ub[11] + Ub[9], ab.d = Ub[15] + Ub[13], ab.normalize()
      }
      static GetPlanesToRef(bb, ab) {
        Mb.GetNearPlaneToRef(bb, ab[0]), Mb.GetFarPlaneToRef(bb, ab[1]), Mb.GetLeftPlaneToRef(bb, ab[2]), Mb.GetRightPlaneToRef(bb, ab[3]), Mb.GetTopPlaneToRef(bb, ab[4]), Mb.GetBottomPlaneToRef(bb, ab[5])
      }
      static IsPointInFrustum(bb, ab) {
        for (let Ub = 0; Ub < 6; Ub++)
          if (ab[Ub].dotCoordinate(bb) < 0) return !1;
        return !0
      }
    }
  },
  37122: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Mb
    });
    var Ab = Ub(36401);
    class Mb {
      constructor(bb, ab, Ub, Mb) {
        this.normal = new Ab.m(bb, ab, Ub), this.d = Mb
      }
      qUb() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Mb(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let bb = this.normal.getHashCode();
        return bb = 397 * bb ^ this.d, bb
      }
      normalize() {
        const bb = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let ab = 0;
        return 0 !== bb && (ab = 1 / bb), this.normal.x *= ab, this.normal.y *= ab, this.normal.z *= ab, this.d *= ab, this
      }
      transform(bb) {
        const ab = Mb._TmpMatrix;
        bb.invertToRef(ab);
        const Ub = ab.m,
          Ab = this.normal.x,
          Tb = this.normal.y,
          Eb = this.normal.z,
          Yb = this.d,
          Bb = Ab * Ub[0] + Tb * Ub[1] + Eb * Ub[2] + Yb * Ub[3],
          eb = Ab * Ub[4] + Tb * Ub[5] + Eb * Ub[6] + Yb * Ub[7],
          vb = Ab * Ub[8] + Tb * Ub[9] + Eb * Ub[10] + Yb * Ub[11],
          Lb = Ab * Ub[12] + Tb * Ub[13] + Eb * Ub[14] + Yb * Ub[15];
        return new Mb(Bb, eb, vb, Lb)
      }
      dotCoordinate(bb) {
        return this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z + this.d
      }
      copyFromPoints(bb, ab, Ub) {
        const Ab = ab.x - bb.x,
          Mb = ab.y - bb.y,
          Tb = ab.z - bb.z,
          Eb = Ub.x - bb.x,
          Yb = Ub.y - bb.y,
          Bb = Ub.z - bb.z,
          eb = Mb * Bb - Tb * Yb,
          vb = Tb * Eb - Ab * Bb,
          Lb = Ab * Yb - Mb * Eb,
          Pb = Math.sqrt(eb * eb + vb * vb + Lb * Lb);
        let Xb;
        return Xb = 0 !== Pb ? 1 / Pb : 0, this.normal.x = eb * Xb, this.normal.y = vb * Xb, this.normal.z = Lb * Xb, this.d = -(this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z), this
      }
      isFrontFacingTo(bb, ab) {
        return Ab.m.Dot(this.normal, bb) <= ab
      }
      signedDistanceTo(bb) {
        return Ab.m.Dot(bb, this.normal) + this.d
      }
      static FromArray(bb) {
        return new Mb(bb[0], bb[1], bb[2], bb[3])
      }
      static FromPoints(bb, ab, Ub) {
        const Ab = new Mb(0, 0, 0, 0);
        return Ab.copyFromPoints(bb, ab, Ub), Ab
      }
      static FromPositionAndNormal(bb, ab) {
        const Ub = new Mb(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(bb, ab, Ub)
      }
      static FromPositionAndNormalToRef(bb, ab, Ub) {
        return Ub.normal.EUb(ab), Ub.normal.normalize(), Ub.d = -bb.dot(Ub.normal), Ub
      }
      static SignedDistanceToPlaneFromPositionAndNormal(bb, ab, Ub) {
        const Mb = -(ab.x * bb.x + ab.y * bb.y + ab.z * bb.z);
        return Ab.m.Dot(Ub, ab) + Mb
      }
    }
    Mb._TmpMatrix = Ab.b.Identity()
  },
  36392: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      Matrix: () => Ab.b,
      Quaternion: () => Ab.e,
      RegisterMathVector: () => Ab.i,
      TmpVectors: () => Ab.j,
      Vector2: () => Ab.l,
      Pj: () => Ab.m,
      Vector4: () => Ab.o
    });
    var Ab = Ub(36401);
    (0, Ab.i)()
  },
  37429: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab
    });
    class Ab {
      constructor(bb, ab, Ub, Ab) {
        this.x = bb, this.y = ab, this.width = Ub, this.height = Ab
      }
      toGlobal(bb, ab) {
        return new Ab(this.x * bb, this.y * ab, this.width * bb, this.height * ab)
      }
      toGlobalToRef(bb, ab, Ub) {
        return Ub.x = this.x * bb, Ub.y = this.y * ab, Ub.width = this.width * bb, Ub.height = this.height * ab, this
      }
      clone() {
        return new Ab(this.x, this.y, this.width, this.height)
      }
    }
  },
  37251: (bb, ab, Ub) => {
    function Ab() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (bb => {
        const ab = 16 * Math.random() | 0;
        return ("x" === bb ? ab : 3 & ab | 8).toString(16)
      }))
    }
    Ub.d(ab, {
      b: () => Ab
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);