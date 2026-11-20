/*! For license information please see fsa8nn.222.a2f8b057.chunk.js.LICENSE.txt */
export const id = 222;
export const ids = [222, 229];
export const modules = {
  37916: bb => {
    bb.exports = function(bb) {
      return null != bb && null != bb.constructor && "function" === typeof bb.constructor.isBuffer && bb.constructor.isBuffer(bb)
    }
  },
  37901: (bb, cb, sb) => {
    var kb = sb(37906),
      Wb = sb(37909),
      ab = sb(37916);
    sb.g.__TYPEDARRAY_POOL || (sb.g.__TYPEDARRAY_POOL = {
      UINT8: Wb([32, 0]),
      UINT16: Wb([32, 0]),
      UINT32: Wb([32, 0]),
      INT8: Wb([32, 0]),
      INT16: Wb([32, 0]),
      INT32: Wb([32, 0]),
      FLOAT: Wb([32, 0]),
      DOUBLE: Wb([32, 0]),
      DATA: Wb([32, 0]),
      UINT8C: Wb([32, 0]),
      BUFFER: Wb([32, 0])
    });
    var Tb = "undefined" !== typeof Uint8ClampedArray,
      Ub = sb.g.__TYPEDARRAY_POOL;
    Ub.UINT8C || (Ub.UINT8C = Wb([32, 0])), Ub.BUFFER || (Ub.BUFFER = Wb([32, 0]));
    var Ib = Ub.DATA,
      Hb = Ub.BUFFER;

    function fb(bb) {
      if (bb) {
        var cb = bb.length || bb.byteLength,
          sb = kb.log2(cb);
        Ib[sb].push(bb)
      }
    }

    function Mb(bb) {
      bb = kb.nextPow2(bb);
      var cb = kb.log2(bb),
        sb = Ib[cb];
      return sb.length > 0 ? sb.pop() : new ArrayBuffer(bb)
    }

    function Xb(bb) {
      return new Uint8Array(Mb(bb), 0, bb)
    }

    function nb(bb) {
      return new Uint16Array(Mb(2 * bb), 0, bb)
    }

    function mb(bb) {
      return new Uint32Array(Mb(4 * bb), 0, bb)
    }

    function lb(bb) {
      return new Int8Array(Mb(bb), 0, bb)
    }

    function Qb(bb) {
      return new Int16Array(Mb(2 * bb), 0, bb)
    }

    function eb(bb) {
      return new Int32Array(Mb(4 * bb), 0, bb)
    }

    function Cb(bb) {
      return new Float32Array(Mb(4 * bb), 0, bb)
    }

    function Nb(bb) {
      return new Float64Array(Mb(8 * bb), 0, bb)
    }

    function Vb(bb) {
      return Tb ? new Uint8ClampedArray(Mb(bb), 0, bb) : Xb(bb)
    }

    function Lb(bb) {
      return new DataView(Mb(bb), 0, bb)
    }
    cb.free = function(bb) {
      if (ab(bb)) Hb[kb.log2(bb.length)].push(bb);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(bb) && (bb = bb.buffer), !bb) return;
        var cb = bb.length || bb.byteLength,
          sb = 0 | kb.log2(cb);
        Ib[sb].push(bb)
      }
    }, cb.freeUint8 = cb.freeUint16 = cb.freeUint32 = cb.freeInt8 = cb.freeInt16 = cb.freeInt32 = cb.freeFloat32 = cb.freeFloat = cb.freeFloat64 = cb.freeDouble = cb.freeUint8Clamped = cb.freeDataView = function(bb) {
      fb(bb.buffer)
    }, cb.freeArrayBuffer = fb, cb.freeBuffer = function(bb) {
      Hb[kb.log2(bb.length)].push(bb)
    }, cb.malloc = function(bb, cb) {
      if (void 0 === cb || "arraybuffer" === cb) return Mb(bb);
      switch (cb) {
        case "uint8":
          return Xb(bb);
        case "uint16":
          return nb(bb);
        case "uint32":
          return mb(bb);
        case "int8":
          return lb(bb);
        case "int16":
          return Qb(bb);
        case "int32":
          return eb(bb);
        case "float":
        case "float32":
          return Cb(bb);
        case "double":
        case "float64":
          return Nb(bb);
        case "uint8_clamped":
          return Vb(bb);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return Lb(bb);
        default:
          return null
      }
      return null
    }, cb.mallocArrayBuffer = Mb, cb.mallocUint8 = Xb, cb.mallocUint16 = nb, cb.mallocUint32 = mb, cb.mallocInt8 = lb, cb.mallocInt16 = Qb, cb.mallocInt32 = eb, cb.mallocFloat32 = cb.mallocFloat = Cb, cb.mallocFloat64 = cb.mallocDouble = Nb, cb.mallocUint8Clamped = Vb, cb.mallocDataView = Lb, cb.clearCache = function() {
      for (var bb = 0; bb < 32; ++bb) Ub.UINT8[bb].length = 0, Ub.UINT16[bb].length = 0, Ub.UINT32[bb].length = 0, Ub.INT8[bb].length = 0, Ub.INT16[bb].length = 0, Ub.INT32[bb].length = 0, Ub.FLOAT[bb].length = 0, Ub.DOUBLE[bb].length = 0, Ub.UINT8C[bb].length = 0, Ib[bb].length = 0, Hb[bb].length = 0
    }
  },
  37906: (bb, cb) => {
    function sb(bb) {
      var cb = 32;
      return (bb &= -bb) && cb--, 65535 & bb && (cb -= 16), 16711935 & bb && (cb -= 8), 252645135 & bb && (cb -= 4), 858993459 & bb && (cb -= 2), 1431655765 & bb && (cb -= 1), cb
    }
    cb.INT_BITS = 32, cb.INT_MAX = 2147483647, cb.INT_MIN = -1 << 31, cb.sign = function(bb) {
      return (bb > 0) - (bb < 0)
    }, cb.abs = function(bb) {
      var cb = bb >> 31;
      return (bb ^ cb) - cb
    }, cb.min = function(bb, cb) {
      return cb ^ (bb ^ cb) & -(bb < cb)
    }, cb.max = function(bb, cb) {
      return bb ^ (bb ^ cb) & -(bb < cb)
    }, cb.isPow2 = function(bb) {
      return !(bb & bb - 1) && !!bb
    }, cb.log2 = function(bb) {
      var cb, sb;
      return cb = (bb > 65535) << 4, cb |= sb = ((bb >>>= cb) > 255) << 3, cb |= sb = ((bb >>>= sb) > 15) << 2, (cb |= sb = ((bb >>>= sb) > 3) << 1) | (bb >>>= sb) >> 1
    }, cb.log10 = function(bb) {
      return bb >= 1e9 ? 9 : bb >= 1e8 ? 8 : bb >= 1e7 ? 7 : bb >= 1e6 ? 6 : bb >= 1e5 ? 5 : bb >= 1e4 ? 4 : bb >= 1e3 ? 3 : bb >= 100 ? 2 : bb >= 10 ? 1 : 0
    }, cb.popCount = function(bb) {
      return 16843009 * ((bb = (858993459 & (bb -= bb >>> 1 & 1431655765)) + (bb >>> 2 & 858993459)) + (bb >>> 4) & 252645135) >>> 24
    }, cb.countTrailingZeros = sb, cb.nextPow2 = function(bb) {
      return bb += 0 === bb, --bb, bb |= bb >>> 1, bb |= bb >>> 2, bb |= bb >>> 4, bb |= bb >>> 8, (bb |= bb >>> 16) + 1
    }, cb.prevPow2 = function(bb) {
      return bb |= bb >>> 1, bb |= bb >>> 2, bb |= bb >>> 4, bb |= bb >>> 8, (bb |= bb >>> 16) - (bb >>> 1)
    }, cb.parity = function(bb) {
      return bb ^= bb >>> 16, bb ^= bb >>> 8, bb ^= bb >>> 4, 27030 >>> (bb &= 15) & 1
    };
    var kb = new Array(256);
    ! function(bb) {
      for (var cb = 0; cb < 256; ++cb) {
        var sb = cb,
          kb = cb,
          Wb = 7;
        for (sb >>>= 1; sb; sb >>>= 1) kb <<= 1, kb |= 1 & sb, --Wb;
        bb[cb] = kb << Wb & 255
      }
    }(kb), cb.reverse = function(bb) {
      return kb[255 & bb] << 24 | kb[bb >>> 8 & 255] << 16 | kb[bb >>> 16 & 255] << 8 | kb[bb >>> 24 & 255]
    }, cb.interleave2 = function(bb, cb) {
      return (bb = 1431655765 & ((bb = 858993459 & ((bb = 252645135 & ((bb = 16711935 & ((bb &= 65535) | bb << 8)) | bb << 4)) | bb << 2)) | bb << 1)) | (cb = 1431655765 & ((cb = 858993459 & ((cb = 252645135 & ((cb = 16711935 & ((cb &= 65535) | cb << 8)) | cb << 4)) | cb << 2)) | cb << 1)) << 1
    }, cb.deinterleave2 = function(bb, cb) {
      return (bb = 65535 & ((bb = 16711935 & ((bb = 252645135 & ((bb = 858993459 & ((bb = bb >>> cb & 1431655765) | bb >>> 1)) | bb >>> 2)) | bb >>> 4)) | bb >>> 16)) << 16 >> 16
    }, cb.interleave3 = function(bb, cb, sb) {
      return bb = 1227133513 & ((bb = 3272356035 & ((bb = 251719695 & ((bb = 4278190335 & ((bb &= 1023) | bb << 16)) | bb << 8)) | bb << 4)) | bb << 2), (bb |= (cb = 1227133513 & ((cb = 3272356035 & ((cb = 251719695 & ((cb = 4278190335 & ((cb &= 1023) | cb << 16)) | cb << 8)) | cb << 4)) | cb << 2)) << 1) | (sb = 1227133513 & ((sb = 3272356035 & ((sb = 251719695 & ((sb = 4278190335 & ((sb &= 1023) | sb << 16)) | sb << 8)) | sb << 4)) | sb << 2)) << 2
    }, cb.deinterleave3 = function(bb, cb) {
      return (bb = 1023 & ((bb = 4278190335 & ((bb = 251719695 & ((bb = 3272356035 & ((bb = bb >>> cb & 1227133513) | bb >>> 2)) | bb >>> 4)) | bb >>> 8)) | bb >>> 16)) << 22 >> 22
    }, cb.nextCombination = function(bb) {
      var cb = bb | bb - 1;
      return cb + 1 | (~cb & -~cb) - 1 >>> sb(bb) + 1
    }
  },
  37893: (bb, cb, sb) => {
    bb.exports = function(bb, cb, sb) {
      switch (arguments.length) {
        case 1:
          return kb = [], Hb(Wb = bb, Wb, fb, !0), kb;
        case 2:
          return "function" === typeof cb ? Hb(bb, bb, cb, !0) : function(bb, cb) {
            return kb = [], Hb(bb, cb, fb, !1), kb
          }(bb, cb);
        case 3:
          return Hb(bb, cb, sb, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var Wb
    };
    var kb, Wb = sb(37901),
      ab = sb(37918),
      Tb = sb(37925);

    function Ub(bb, cb) {
      for (var sb = 0; sb < bb; ++sb)
        if (!(cb[sb] <= cb[sb + bb])) return !0;
      return !1
    }

    function Ib(bb, cb, sb, kb) {
      for (var Wb = 0, ab = 0, Tb = 0, Ib = bb.length; Tb < Ib; ++Tb) {
        var Hb = bb[Tb];
        if (!Ub(cb, Hb)) {
          for (var fb = 0; fb < 2 * cb; ++fb) sb[Wb++] = Hb[fb];
          kb[ab++] = Tb
        }
      }
      return ab
    }

    function Hb(bb, cb, sb, kb) {
      var Ub = bb.length,
        Hb = cb.length;
      if (!(Ub <= 0 || Hb <= 0)) {
        var fb = bb[0].length >>> 1;
        if (!(fb <= 0)) {
          var Mb, Xb = Wb.mallocDouble(2 * fb * Ub),
            nb = Wb.mallocInt32(Ub);
          if ((Ub = Ib(bb, fb, Xb, nb)) > 0) {
            if (1 === fb && kb) ab.init(Ub), Mb = ab.sweepComplete(fb, sb, 0, Ub, Xb, nb, 0, Ub, Xb, nb);
            else {
              var mb = Wb.mallocDouble(2 * fb * Hb),
                lb = Wb.mallocInt32(Hb);
              (Hb = Ib(cb, fb, mb, lb)) > 0 && (ab.init(Ub + Hb), Mb = 1 === fb ? ab.sweepBipartite(fb, sb, 0, Ub, Xb, nb, 0, Hb, mb, lb) : Tb(fb, sb, kb, Ub, Xb, nb, Hb, mb, lb), Wb.free(mb), Wb.free(lb))
            }
            Wb.free(Xb), Wb.free(nb)
          }
          return Mb
        }
      }
    }

    function fb(bb, cb) {
      kb.push([bb, cb])
    }
  },
  37931: (bb, cb) => {
    var sb = "d",
      kb = "ax",
      Wb = "fp",
      ab = "es",
      Tb = "rs",
      Ub = "re",
      Ib = "rb",
      Hb = "bs",
      fb = "be",
      Mb = "bb",
      Xb = [sb, kb, "vv", Tb, Ub, Ib, "ri", Hb, fb, Mb, "bi"];

    function nb(bb) {
      var cb = "bruteForce" + (bb ? "Full" : "Partial"),
        kb = [],
        Tb = Xb.slice();
      bb || Tb.splice(3, 0, Wb);
      var Ub = ["function " + cb + "(" + Tb.join() + "){"];

      function Ib(cb, Wb) {
        var Tb = function(bb, cb, kb) {
          var Wb = "bruteForce" + (bb ? "Red" : "Blue") + (cb ? "Flip" : "") + (kb ? "Full" : ""),
            Tb = ["function ", Wb, "(", Xb.join(), "){", "var ", ab, "=2*", sb, ";"],
            Ub = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            Ib = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (kb ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return bb ? Tb.push(Ub, "Q", ":", Ib) : Tb.push(Ib, "Q", ":", Ub), kb ? Tb.push("if(y1<x0||x1<y0)continue;") : cb ? Tb.push("if(y0<=x0||x1<y0)continue;") : Tb.push("if(y0<x0||x1<y0)continue;"), Tb.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), cb ? Tb.push("yi,xi") : Tb.push("xi,yi"), Tb.push(");if(rv!==void 0)return rv;}}}"), {
            name: Wb,
            code: Tb.join("")
          }
        }(cb, Wb, bb);
        kb.push(Tb.code), Ub.push("return " + Tb.name + "(" + Xb.join() + ");")
      }
      Ub.push("if(re-rs>be-bs){"), bb ? (Ib(!0, !1), Ub.push("}else{"), Ib(!1, !1)) : (Ub.push("if(fp){"), Ib(!0, !0), Ub.push("}else{"), Ib(!0, !1), Ub.push("}}else{if(fp){"), Ib(!1, !0), Ub.push("}else{"), Ib(!1, !1), Ub.push("}")), Ub.push("}}return " + cb);
      var Hb = kb.join("") + Ub.join("");
      return new Function(Hb)()
    }
    cb.partial = nb(!1), cb.full = nb(!0)
  },
  37925: (bb, cb, sb) => {
    bb.exports = function(bb, cb, sb, ab, fb, Bb, tb, yb, Pb) {
      ! function(bb, cb) {
        var sb = 8 * Wb.log2(cb + 1) * (bb + 1) | 0,
          ab = Wb.nextPow2(Vb * sb);
        ub.length < ab && (kb.free(ub), ub = kb.mallocInt32(ab));
        var Tb = Wb.nextPow2(Lb * sb);
        Yb.length < Tb && (kb.free(Yb), Yb = kb.mallocDouble(Tb))
      }(bb, ab + tb);
      var Db, Eb = 0,
        ib = 2 * bb;
      hb(Eb++, 0, 0, ab, 0, tb, sb ? 16 : 0, -1 / 0, 1 / 0), sb || hb(Eb++, 0, 0, tb, 0, ab, 1, -1 / 0, 1 / 0);
      for (; Eb > 0;) {
        var Ob = (Eb -= 1) * Vb,
          Gb = ub[Ob],
          Kb = ub[Ob + 1],
          Zb = ub[Ob + 2],
          zb = ub[Ob + 3],
          qb = ub[Ob + 4],
          db = ub[Ob + 5],
          Ab = Eb * Lb,
          wb = Yb[Ab],
          rb = Yb[Ab + 1],
          ob = 1 & db,
          Sb = !!(16 & db),
          Rb = fb,
          vb = Bb,
          Fb = yb,
          xb = Pb;
        if (ob && (Rb = yb, vb = Pb, Fb = fb, xb = Bb), !(2 & db && Kb >= (Zb = Qb(bb, Gb, Kb, Zb, Rb, vb, rb))) && !(4 & db && (Kb = eb(bb, Gb, Kb, Zb, Rb, vb, wb)) >= Zb)) {
          var jb = Zb - Kb,
            pb = qb - zb;
          if (Sb) {
            if (bb * jb * (jb + pb) < nb) {
              if (void 0 !== (Db = Ib.scanComplete(bb, Gb, cb, Kb, Zb, Rb, vb, zb, qb, Fb, xb))) return Db;
              continue
            }
          } else {
            if (bb * Math.min(jb, pb) < Mb) {
              if (void 0 !== (Db = Tb(bb, Gb, cb, ob, Kb, Zb, Rb, vb, zb, qb, Fb, xb))) return Db;
              continue
            }
            if (bb * jb * pb < Xb) {
              if (void 0 !== (Db = Ib.scanBipartite(bb, Gb, cb, ob, Kb, Zb, Rb, vb, zb, qb, Fb, xb))) return Db;
              continue
            }
          }
          var bc = mb(bb, Gb, Kb, Zb, Rb, vb, wb, rb);
          if (Kb < bc)
            if (bb * (bc - Kb) < Mb) {
              if (void 0 !== (Db = Ub(bb, Gb + 1, cb, Kb, bc, Rb, vb, zb, qb, Fb, xb))) return Db
            } else if (Gb === bb - 2) {
            if (void 0 !== (Db = ob ? Ib.sweepBipartite(bb, cb, zb, qb, Fb, xb, Kb, bc, Rb, vb) : Ib.sweepBipartite(bb, cb, Kb, bc, Rb, vb, zb, qb, Fb, xb))) return Db
          } else hb(Eb++, Gb + 1, Kb, bc, zb, qb, ob, -1 / 0, 1 / 0), hb(Eb++, Gb + 1, zb, qb, Kb, bc, 1 ^ ob, -1 / 0, 1 / 0);
          if (bc < Zb) {
            var cc = Hb(bb, Gb, zb, qb, Fb, xb),
              sc = Fb[ib * cc + Gb],
              kc = lb(bb, Gb, cc, qb, Fb, xb, sc);
            if (kc < qb && hb(Eb++, Gb, bc, Zb, kc, qb, (4 | ob) + (Sb ? 16 : 0), sc, rb), zb < cc && hb(Eb++, Gb, bc, Zb, zb, cc, (2 | ob) + (Sb ? 16 : 0), wb, sc), cc + 1 === kc) {
              if (void 0 !== (Db = Sb ? gb(bb, Gb, cb, bc, Zb, Rb, vb, cc, Fb, xb[cc]) : Jb(bb, Gb, cb, ob, bc, Zb, Rb, vb, cc, Fb, xb[cc]))) return Db
            } else if (cc < kc) {
              var Wc;
              if (Sb) {
                if (bc < (Wc = Cb(bb, Gb, bc, Zb, Rb, vb, sc))) {
                  var ac = lb(bb, Gb, bc, Wc, Rb, vb, sc);
                  if (Gb === bb - 2) {
                    if (bc < ac && void 0 !== (Db = Ib.sweepComplete(bb, cb, bc, ac, Rb, vb, cc, kc, Fb, xb))) return Db;
                    if (ac < Wc && void 0 !== (Db = Ib.sweepBipartite(bb, cb, ac, Wc, Rb, vb, cc, kc, Fb, xb))) return Db
                  } else bc < ac && hb(Eb++, Gb + 1, bc, ac, cc, kc, 16, -1 / 0, 1 / 0), ac < Wc && (hb(Eb++, Gb + 1, ac, Wc, cc, kc, 0, -1 / 0, 1 / 0), hb(Eb++, Gb + 1, cc, kc, ac, Wc, 1, -1 / 0, 1 / 0))
                }
              } else bc < (Wc = ob ? Nb(bb, Gb, bc, Zb, Rb, vb, sc) : Cb(bb, Gb, bc, Zb, Rb, vb, sc)) && (Gb === bb - 2 ? Db = ob ? Ib.sweepBipartite(bb, cb, cc, kc, Fb, xb, bc, Wc, Rb, vb) : Ib.sweepBipartite(bb, cb, bc, Wc, Rb, vb, cc, kc, Fb, xb) : (hb(Eb++, Gb + 1, bc, Wc, cc, kc, ob, -1 / 0, 1 / 0), hb(Eb++, Gb + 1, cc, kc, bc, Wc, 1 ^ ob, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var kb = sb(37901),
      Wb = sb(37906),
      ab = sb(37931),
      Tb = ab.partial,
      Ub = ab.full,
      Ib = sb(37918),
      Hb = sb(37933),
      fb = sb(37936),
      Mb = 128,
      Xb = 1 << 22,
      nb = 1 << 22,
      mb = fb("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      lb = fb("lo===p0", ["p0"]),
      Qb = fb("lo<p0", ["p0"]),
      eb = fb("hi<=p0", ["p0"]),
      Cb = fb("lo<=p0&&p0<=hi", ["p0"]),
      Nb = fb("lo<p0&&p0<=hi", ["p0"]),
      Vb = 6,
      Lb = 2,
      ub = kb.mallocInt32(1024),
      Yb = kb.mallocDouble(1024);

    function hb(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib) {
      var Hb = Vb * bb;
      ub[Hb] = cb, ub[Hb + 1] = sb, ub[Hb + 2] = kb, ub[Hb + 3] = Wb, ub[Hb + 4] = ab, ub[Hb + 5] = Tb;
      var fb = Lb * bb;
      Yb[fb] = Ub, Yb[fb + 1] = Ib
    }

    function Jb(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb, fb) {
      var Mb = 2 * bb,
        Xb = Ib * Mb,
        nb = Hb[Xb + cb];
      bb: for (var mb = Wb, lb = Wb * Mb; mb < ab; ++mb, lb += Mb) {
        var Qb = Tb[lb + cb],
          eb = Tb[lb + cb + bb];
        if (!(nb < Qb || eb < nb) && (!kb || nb !== Qb)) {
          for (var Cb, Nb = Ub[mb], Vb = cb + 1; Vb < bb; ++Vb) {
            Qb = Tb[lb + Vb], eb = Tb[lb + Vb + bb];
            var Lb = Hb[Xb + Vb],
              ub = Hb[Xb + Vb + bb];
            if (eb < Lb || ub < Qb) continue bb
          }
          if (void 0 !== (Cb = kb ? sb(fb, Nb) : sb(Nb, fb))) return Cb
        }
      }
    }

    function gb(bb, cb, sb, kb, Wb, ab, Tb, Ub, Ib, Hb) {
      var fb = 2 * bb,
        Mb = Ub * fb,
        Xb = Ib[Mb + cb];
      bb: for (var nb = kb, mb = kb * fb; nb < Wb; ++nb, mb += fb) {
        var lb = Tb[nb];
        if (lb !== Hb) {
          var Qb = ab[mb + cb],
            eb = ab[mb + cb + bb];
          if (!(Xb < Qb || eb < Xb)) {
            for (var Cb = cb + 1; Cb < bb; ++Cb) {
              Qb = ab[mb + Cb], eb = ab[mb + Cb + bb];
              var Nb = Ib[Mb + Cb],
                Vb = Ib[Mb + Cb + bb];
              if (eb < Nb || Vb < Qb) continue bb
            }
            var Lb = sb(lb, Hb);
            if (void 0 !== Lb) return Lb
          }
        }
      }
    }
  },
  37933: (bb, cb, sb) => {
    bb.exports = function(bb, cb, sb, Tb, Ub, Ib) {
      if (Tb <= sb + 1) return sb;
      var Hb = sb,
        fb = Tb,
        Mb = Tb + sb >>> 1,
        Xb = 2 * bb,
        nb = Mb,
        mb = Ub[Xb * Mb + cb];
      for (; Hb < fb;) {
        if (fb - Hb < Wb) {
          ab(bb, cb, Hb, fb, Ub, Ib), mb = Ub[Xb * Mb + cb];
          break
        }
        var lb = fb - Hb,
          Qb = Math.random() * lb + Hb | 0,
          eb = Ub[Xb * Qb + cb],
          Cb = Math.random() * lb + Hb | 0,
          Nb = Ub[Xb * Cb + cb],
          Vb = Math.random() * lb + Hb | 0,
          Lb = Ub[Xb * Vb + cb];
        eb <= Nb ? Lb >= Nb ? (nb = Cb, mb = Nb) : eb >= Lb ? (nb = Qb, mb = eb) : (nb = Vb, mb = Lb) : Nb >= Lb ? (nb = Cb, mb = Nb) : Lb >= eb ? (nb = Qb, mb = eb) : (nb = Vb, mb = Lb);
        for (var ub = Xb * (fb - 1), Yb = Xb * nb, hb = 0; hb < Xb; ++hb, ++ub, ++Yb) {
          var Jb = Ub[ub];
          Ub[ub] = Ub[Yb], Ub[Yb] = Jb
        }
        var gb = Ib[fb - 1];
        Ib[fb - 1] = Ib[nb], Ib[nb] = gb;
        for (ub = Xb * (fb - 1), Yb = Xb * (nb = kb(bb, cb, Hb, fb - 1, Ub, Ib, mb)), hb = 0; hb < Xb; ++hb, ++ub, ++Yb) {
          Jb = Ub[ub];
          Ub[ub] = Ub[Yb], Ub[Yb] = Jb
        }
        gb = Ib[fb - 1];
        if (Ib[fb - 1] = Ib[nb], Ib[nb] = gb, Mb < nb) {
          for (fb = nb - 1; Hb < fb && Ub[Xb * (fb - 1) + cb] === mb;) fb -= 1;
          fb += 1
        } else {
          if (!(nb < Mb)) break;
          for (Hb = nb + 1; Hb < fb && Ub[Xb * Hb + cb] === mb;) Hb += 1
        }
      }
      return kb(bb, cb, sb, Mb, Ub, Ib, Ub[Xb * Mb + cb])
    };
    var kb = sb(37936)("lo<p0", ["p0"]),
      Wb = 8;

    function ab(bb, cb, sb, kb, Wb, ab) {
      for (var Tb = 2 * bb, Ub = Tb * (sb + 1) + cb, Ib = sb + 1; Ib < kb; ++Ib, Ub += Tb)
        for (var Hb = Wb[Ub], fb = Ib, Mb = Tb * (Ib - 1); fb > sb && Wb[Mb + cb] > Hb; --fb, Mb -= Tb) {
          for (var Xb = Mb, nb = Mb + Tb, mb = 0; mb < Tb; ++mb, ++Xb, ++nb) {
            var lb = Wb[Xb];
            Wb[Xb] = Wb[nb], Wb[nb] = lb
          }
          var Qb = ab[fb];
          ab[fb] = ab[fb - 1], ab[fb - 1] = Qb
        }
    }
  },
  37936: bb => {
    bb.exports = function(bb, sb) {
      var kb = "abcdef".split("").concat(sb),
        Wb = [];
      bb.indexOf("lo") >= 0 && Wb.push("lo=e[k+n]");
      bb.indexOf("hi") >= 0 && Wb.push("hi=e[k+o]");
      return kb.push(cb.replace("_", Wb.join()).replace("$", bb)), Function.apply(void 0, kb)
    };
    var cb = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  37923: bb => {
    bb.exports = function(bb, kb) {
      kb <= 4 * cb ? sb(0, kb - 1, bb) : Hb(0, kb - 1, bb)
    };
    var cb = 32;

    function sb(bb, cb, sb) {
      for (var kb = 2 * (bb + 1), Wb = bb + 1; Wb <= cb; ++Wb) {
        for (var ab = sb[kb++], Tb = sb[kb++], Ub = Wb, Ib = kb - 2; Ub-- > bb;) {
          var Hb = sb[Ib - 2],
            fb = sb[Ib - 1];
          if (Hb < ab) break;
          if (Hb === ab && fb < Tb) break;
          sb[Ib] = Hb, sb[Ib + 1] = fb, Ib -= 2
        }
        sb[Ib] = ab, sb[Ib + 1] = Tb
      }
    }

    function kb(bb, cb, sb) {
      cb *= 2;
      var kb = sb[bb *= 2],
        Wb = sb[bb + 1];
      sb[bb] = sb[cb], sb[bb + 1] = sb[cb + 1], sb[cb] = kb, sb[cb + 1] = Wb
    }

    function Wb(bb, cb, sb) {
      cb *= 2, sb[bb *= 2] = sb[cb], sb[bb + 1] = sb[cb + 1]
    }

    function ab(bb, cb, sb, kb) {
      cb *= 2, sb *= 2;
      var Wb = kb[bb *= 2],
        ab = kb[bb + 1];
      kb[bb] = kb[cb], kb[bb + 1] = kb[cb + 1], kb[cb] = kb[sb], kb[cb + 1] = kb[sb + 1], kb[sb] = Wb, kb[sb + 1] = ab
    }

    function Tb(bb, cb, sb, kb, Wb) {
      cb *= 2, Wb[bb *= 2] = Wb[cb], Wb[cb] = sb, Wb[bb + 1] = Wb[cb + 1], Wb[cb + 1] = kb
    }

    function Ub(bb, cb, sb) {
      cb *= 2;
      var kb = sb[bb *= 2],
        Wb = sb[cb];
      return !(kb < Wb) && (kb !== Wb || sb[bb + 1] > sb[cb + 1])
    }

    function Ib(bb, cb, sb, kb) {
      var Wb = kb[bb *= 2];
      return Wb < cb || Wb === cb && kb[bb + 1] < sb
    }

    function Hb(bb, fb, Mb) {
      var Xb = (fb - bb + 1) / 6 | 0,
        nb = bb + Xb,
        mb = fb - Xb,
        lb = bb + fb >> 1,
        Qb = lb - Xb,
        eb = lb + Xb,
        Cb = nb,
        Nb = Qb,
        Vb = lb,
        Lb = eb,
        ub = mb,
        Yb = bb + 1,
        hb = fb - 1,
        Jb = 0;
      Ub(Cb, Nb, Mb) && (Jb = Cb, Cb = Nb, Nb = Jb), Ub(Lb, ub, Mb) && (Jb = Lb, Lb = ub, ub = Jb), Ub(Cb, Vb, Mb) && (Jb = Cb, Cb = Vb, Vb = Jb), Ub(Nb, Vb, Mb) && (Jb = Nb, Nb = Vb, Vb = Jb), Ub(Cb, Lb, Mb) && (Jb = Cb, Cb = Lb, Lb = Jb), Ub(Vb, Lb, Mb) && (Jb = Vb, Vb = Lb, Lb = Jb), Ub(Nb, ub, Mb) && (Jb = Nb, Nb = ub, ub = Jb), Ub(Nb, Vb, Mb) && (Jb = Nb, Nb = Vb, Vb = Jb), Ub(Lb, ub, Mb) && (Jb = Lb, Lb = ub, ub = Jb);
      for (var gb = Mb[2 * Nb], Bb = Mb[2 * Nb + 1], tb = Mb[2 * Lb], yb = Mb[2 * Lb + 1], Pb = 2 * Cb, Db = 2 * Vb, Eb = 2 * ub, ib = 2 * nb, Ob = 2 * lb, Gb = 2 * mb, Kb = 0; Kb < 2; ++Kb) {
        var Zb = Mb[Pb + Kb],
          zb = Mb[Db + Kb],
          qb = Mb[Eb + Kb];
        Mb[ib + Kb] = Zb, Mb[Ob + Kb] = zb, Mb[Gb + Kb] = qb
      }
      Wb(Qb, bb, Mb), Wb(eb, fb, Mb);
      for (var db = Yb; db <= hb; ++db)
        if (Ib(db, gb, Bb, Mb)) db !== Yb && kb(db, Yb, Mb), ++Yb;
        else if (!Ib(db, tb, yb, Mb))
        for (;;) {
          if (Ib(hb, tb, yb, Mb)) {
            Ib(hb, gb, Bb, Mb) ? (ab(db, Yb, hb, Mb), ++Yb, --hb) : (kb(db, hb, Mb), --hb);
            break
          }
          if (--hb < db) break
        }
      Tb(bb, Yb - 1, gb, Bb, Mb), Tb(fb, hb + 1, tb, yb, Mb), Yb - 2 - bb <= cb ? sb(bb, Yb - 2, Mb) : Hb(bb, Yb - 2, Mb), fb - (hb + 2) <= cb ? sb(hb + 2, fb, Mb) : Hb(hb + 2, fb, Mb), hb - Yb <= cb ? sb(Yb, hb, Mb) : Hb(Yb, hb, Mb)
    }
  },
  37918: (bb, cb, sb) => {
    bb.exports = {
      init: function(bb) {
        var cb = Wb.nextPow2(bb);
        Ib.length < cb && (kb.free(Ib), Ib = kb.mallocInt32(cb));
        Hb.length < cb && (kb.free(Hb), Hb = kb.mallocInt32(cb));
        fb.length < cb && (kb.free(fb), fb = kb.mallocInt32(cb));
        Mb.length < cb && (kb.free(Mb), Mb = kb.mallocInt32(cb));
        Xb.length < cb && (kb.free(Xb), Xb = kb.mallocInt32(cb));
        nb.length < cb && (kb.free(nb), nb = kb.mallocInt32(cb));
        var sb = 8 * cb;
        mb.length < sb && (kb.free(mb), mb = kb.mallocDouble(sb))
      },
      sweepBipartite: function(bb, cb, sb, kb, Wb, Ub, Xb, nb, eb, Cb) {
        for (var Nb = 0, Vb = 2 * bb, Lb = bb - 1, ub = Vb - 1, Yb = sb; Yb < kb; ++Yb) {
          var hb = Ub[Yb],
            Jb = Vb * Yb;
          mb[Nb++] = Wb[Jb + Lb], mb[Nb++] = -(hb + 1), mb[Nb++] = Wb[Jb + ub], mb[Nb++] = hb
        }
        for (Yb = Xb; Yb < nb; ++Yb) {
          hb = Cb[Yb] + Tb;
          var gb = Vb * Yb;
          mb[Nb++] = eb[gb + Lb], mb[Nb++] = -hb, mb[Nb++] = eb[gb + ub], mb[Nb++] = hb
        }
        var Bb = Nb >>> 1;
        ab(mb, Bb);
        var tb = 0,
          yb = 0;
        for (Yb = 0; Yb < Bb; ++Yb) {
          var Pb = 0 | mb[2 * Yb + 1];
          if (Pb >= Tb) lb(fb, Mb, yb--, Pb = Pb - Tb | 0);
          else if (Pb >= 0) lb(Ib, Hb, tb--, Pb);
          else if (Pb <= -Tb) {
            Pb = -Pb - Tb | 0;
            for (var Db = 0; Db < tb; ++Db) {
              if (void 0 !== (Eb = cb(Ib[Db], Pb))) return Eb
            }
            Qb(fb, Mb, yb++, Pb)
          } else {
            Pb = -Pb - 1 | 0;
            for (Db = 0; Db < yb; ++Db) {
              var Eb;
              if (void 0 !== (Eb = cb(Pb, fb[Db]))) return Eb
            }
            Qb(Ib, Hb, tb++, Pb)
          }
        }
      },
      sweepComplete: function(bb, cb, sb, kb, Wb, Tb, Ub, eb, Cb, Nb) {
        for (var Vb = 0, Lb = 2 * bb, ub = bb - 1, Yb = Lb - 1, hb = sb; hb < kb; ++hb) {
          var Jb = Tb[hb] + 1 << 1,
            gb = Lb * hb;
          mb[Vb++] = Wb[gb + ub], mb[Vb++] = -Jb, mb[Vb++] = Wb[gb + Yb], mb[Vb++] = Jb
        }
        for (hb = Ub; hb < eb; ++hb) {
          Jb = Nb[hb] + 1 << 1;
          var Bb = Lb * hb;
          mb[Vb++] = Cb[Bb + ub], mb[Vb++] = 1 | -Jb, mb[Vb++] = Cb[Bb + Yb], mb[Vb++] = 1 | Jb
        }
        var tb = Vb >>> 1;
        ab(mb, tb);
        var yb = 0,
          Pb = 0,
          Db = 0;
        for (hb = 0; hb < tb; ++hb) {
          var Eb = 0 | mb[2 * hb + 1],
            ib = 1 & Eb;
          if (hb < tb - 1 && Eb >> 1 === mb[2 * hb + 3] >> 1 && (ib = 2, hb += 1), Eb < 0) {
            for (var Ob = -(Eb >> 1) - 1, Gb = 0; Gb < Db; ++Gb) {
              if (void 0 !== (Kb = cb(Xb[Gb], Ob))) return Kb
            }
            if (0 !== ib)
              for (Gb = 0; Gb < yb; ++Gb) {
                if (void 0 !== (Kb = cb(Ib[Gb], Ob))) return Kb
              }
            if (1 !== ib)
              for (Gb = 0; Gb < Pb; ++Gb) {
                var Kb;
                if (void 0 !== (Kb = cb(fb[Gb], Ob))) return Kb
              }
            0 === ib ? Qb(Ib, Hb, yb++, Ob) : 1 === ib ? Qb(fb, Mb, Pb++, Ob) : 2 === ib && Qb(Xb, nb, Db++, Ob)
          } else {
            Ob = (Eb >> 1) - 1;
            0 === ib ? lb(Ib, Hb, yb--, Ob) : 1 === ib ? lb(fb, Mb, Pb--, Ob) : 2 === ib && lb(Xb, nb, Db--, Ob)
          }
        }
      },
      scanBipartite: function(bb, cb, sb, kb, Wb, Ub, fb, Mb, Xb, nb, eb, Cb) {
        var Nb = 0,
          Vb = 2 * bb,
          Lb = cb,
          ub = cb + bb,
          Yb = 1,
          hb = 1;
        kb ? hb = Tb : Yb = Tb;
        for (var Jb = Wb; Jb < Ub; ++Jb) {
          var gb = Jb + Yb,
            Bb = Vb * Jb;
          mb[Nb++] = fb[Bb + Lb], mb[Nb++] = -gb, mb[Nb++] = fb[Bb + ub], mb[Nb++] = gb
        }
        for (Jb = Xb; Jb < nb; ++Jb) {
          gb = Jb + hb;
          var tb = Vb * Jb;
          mb[Nb++] = eb[tb + Lb], mb[Nb++] = -gb
        }
        var yb = Nb >>> 1;
        ab(mb, yb);
        var Pb = 0;
        for (Jb = 0; Jb < yb; ++Jb) {
          var Db = 0 | mb[2 * Jb + 1];
          if (Db < 0) {
            var Eb = !1;
            if ((gb = -Db) >= Tb ? (Eb = !kb, gb -= Tb) : (Eb = !!kb, gb -= 1), Eb) Qb(Ib, Hb, Pb++, gb);
            else {
              var ib = Cb[gb],
                Ob = Vb * gb,
                Gb = eb[Ob + cb + 1],
                Kb = eb[Ob + cb + 1 + bb];
              bb: for (var Zb = 0; Zb < Pb; ++Zb) {
                var zb = Ib[Zb],
                  qb = Vb * zb;
                if (!(Kb < fb[qb + cb + 1] || fb[qb + cb + 1 + bb] < Gb)) {
                  for (var db = cb + 2; db < bb; ++db)
                    if (eb[Ob + db + bb] < fb[qb + db] || fb[qb + db + bb] < eb[Ob + db]) continue bb;
                  var Ab, wb = Mb[zb];
                  if (void 0 !== (Ab = kb ? sb(ib, wb) : sb(wb, ib))) return Ab
                }
              }
            }
          } else lb(Ib, Hb, Pb--, Db - Yb)
        }
      },
      scanComplete: function(bb, cb, sb, kb, Wb, Ub, Hb, fb, Mb, Xb, nb) {
        for (var lb = 0, Qb = 2 * bb, eb = cb, Cb = cb + bb, Nb = kb; Nb < Wb; ++Nb) {
          var Vb = Nb + Tb,
            Lb = Qb * Nb;
          mb[lb++] = Ub[Lb + eb], mb[lb++] = -Vb, mb[lb++] = Ub[Lb + Cb], mb[lb++] = Vb
        }
        for (Nb = fb; Nb < Mb; ++Nb) {
          Vb = Nb + 1;
          var ub = Qb * Nb;
          mb[lb++] = Xb[ub + eb], mb[lb++] = -Vb
        }
        var Yb = lb >>> 1;
        ab(mb, Yb);
        var hb = 0;
        for (Nb = 0; Nb < Yb; ++Nb) {
          var Jb = 0 | mb[2 * Nb + 1];
          if (Jb < 0) {
            if ((Vb = -Jb) >= Tb) Ib[hb++] = Vb - Tb;
            else {
              var gb = nb[Vb -= 1],
                Bb = Qb * Vb,
                tb = Xb[Bb + cb + 1],
                yb = Xb[Bb + cb + 1 + bb];
              bb: for (var Pb = 0; Pb < hb; ++Pb) {
                var Db = Ib[Pb],
                  Eb = Hb[Db];
                if (Eb === gb) break;
                var ib = Qb * Db;
                if (!(yb < Ub[ib + cb + 1] || Ub[ib + cb + 1 + bb] < tb)) {
                  for (var Ob = cb + 2; Ob < bb; ++Ob)
                    if (Xb[Bb + Ob + bb] < Ub[ib + Ob] || Ub[ib + Ob + bb] < Xb[Bb + Ob]) continue bb;
                  var Gb = sb(Eb, gb);
                  if (void 0 !== Gb) return Gb
                }
              }
            }
          } else {
            for (Vb = Jb - Tb, Pb = hb - 1; Pb >= 0; --Pb)
              if (Ib[Pb] === Vb) {
                for (Ob = Pb + 1; Ob < hb; ++Ob) Ib[Ob - 1] = Ib[Ob];
                break
              }-- hb
          }
        }
      }
    };
    var kb = sb(37901),
      Wb = sb(37906),
      ab = sb(37923),
      Tb = 1 << 28,
      Ub = 1024,
      Ib = kb.mallocInt32(Ub),
      Hb = kb.mallocInt32(Ub),
      fb = kb.mallocInt32(Ub),
      Mb = kb.mallocInt32(Ub),
      Xb = kb.mallocInt32(Ub),
      nb = kb.mallocInt32(Ub),
      mb = kb.mallocDouble(8192);

    function lb(bb, cb, sb, kb) {
      var Wb = cb[kb],
        ab = bb[sb - 1];
      bb[Wb] = ab, cb[ab] = Wb
    }

    function Qb(bb, cb, sb, kb) {
      bb[sb] = kb, cb[kb] = sb
    }
  },
  37909: bb => {
    function cb(bb, sb, kb) {
      var Wb = 0 | bb[kb];
      if (Wb <= 0) return [];
      var ab, Tb = new Array(Wb);
      if (kb === bb.length - 1)
        for (ab = 0; ab < Wb; ++ab) Tb[ab] = sb;
      else
        for (ab = 0; ab < Wb; ++ab) Tb[ab] = cb(bb, sb, kb + 1);
      return Tb
    }
    bb.exports = function(bb, sb) {
      switch ("undefined" === typeof sb && (sb = 0), typeof bb) {
        case "number":
          if (bb > 0) return function(bb, cb) {
            var sb, kb;
            for (sb = new Array(bb), kb = 0; kb < bb; ++kb) sb[kb] = cb;
            return sb
          }(0 | bb, sb);
          break;
        case "object":
          if ("number" === typeof bb.length) return cb(bb, sb, 0)
      }
      return []
    }
  },
  37852: (bb, cb, sb) => {
    bb.exports = function() {
      var bb = this;
      this.components = {}, this.comps = this.components;
      var cb = this.components,
        sb = 1,
        Wb = {},
        ab = [],
        Tb = [],
        Ub = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function Ib(bb, sb) {
        var kb = cb[sb],
          ab = Wb[sb],
          Tb = ab.hash[bb];
        Tb && (ab.remove(bb), kb.wL && (kb.multi ? (Tb.forEach((cb => {
          cb && kb.wL(bb, cb)
        })), Tb.length = 0) : kb.wL(bb, Tb)), Ub.removals.push(ab), Hb())
      }

      function Hb() {
        Ub.timeout || (Ub.timeout = !0, setTimeout(fb, 1))
      }

      function fb() {
        Ub.timeout = !1, Mb()
      }

      function Mb() {
        Ub.multiComps.length && function(bb) {
          for (var cb = 0; cb < bb.length; cb++) {
            var {
              entID: sb,
              data: kb
            } = bb[cb], Wb = kb.hash[sb];
            if (Wb) {
              for (var ab = 0; ab < Wb.length; ab++) Wb[ab] || (Wb.splice(ab, 1), ab--);
              0 === Wb.length && (kb.remove(sb), Ub.removals.push(kb))
            }
          }
          bb.length = 0
        }(Ub.multiComps), Ub.removals.length && function(bb) {
          for (var cb = 0; cb < bb.length; cb++) {
            bb[cb].flush()
          }
          bb.length = 0
        }(Ub.removals)
      }
      this.Gl = Wb, this._systems = ab, this._renderSystems = Tb, this.hK = function(cb) {
        var kb = sb++;
        return Array.isArray(cb) && cb.forEach((cb => bb.MJ(kb, cb))), kb
      }, this.deleteEntity = function(cb) {
        return Object.keys(Wb).forEach((bb => {
          Wb[bb].hash[cb] && Ib(cb, bb)
        })), bb
      }, this.Hcb = function(bb) {
        if (!bb) throw new Error("Missing component definition");
        var sb = bb.name;
        if (!sb) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof sb) throw new Error("Component name must be a string.");
        if ("" === sb) throw new Error("Component name must be a non-empty string.");
        if (Wb[sb]) throw new Error(`Component ${sb} already exists.`);
        var Ub = {};
        return Ub.name = sb, Ub.multi = !!bb.multi, Ub.order = isNaN(bb.order) ? 99 : bb.order, Ub.stateConstructor = bb.stateConstructor || null, Ub.state = bb.state || {}, Ub.ZN = bb.ZN || null, Ub.wL = bb.wL || null, Ub.system = bb.system || null, Ub.qN = bb.qN || null, cb[sb] = Ub, Wb[sb] = new kb, Wb[sb]._pendingMultiCleanup = !1, Wb[sb]._multiCleanupIDs = Ub.multi ? [] : null, Ub.system && (ab.push(sb), ab.sort(((bb, sb) => cb[bb].order - cb[sb].order))), Ub.qN && (Tb.push(sb), Tb.sort(((bb, sb) => cb[bb].order - cb[sb].order))), sb
      }, this.overwriteComponent = function(bb, sb) {
        var kb = cb[bb];
        if (!kb) throw new Error(`Unknown component: ${bb}`);
        if (!sb) throw new Error("Missing component definition");
        if (kb.name !== sb.name) throw new Error("Overwriting component must use the same name property.");
        var Ub = {};
        Ub.name = bb, Ub.multi = !!sb.multi, Ub.order = isNaN(sb.order) ? 99 : sb.order, Ub.state = sb.state || {}, Ub.ZN = sb.ZN || null, Ub.wL = sb.wL || null, Ub.system = sb.system || null, Ub.qN = sb.qN || null, cb[bb] = Ub, Wb[bb]._pendingMultiCleanup = !1, Wb[bb]._multiCleanupIDs = Ub.multi ? [] : null;
        var Ib = ab.indexOf(bb);
        Ub.system && Ib < 0 && ab.push(bb), !Ub.system && Ib >= 0 && ab.splice(Ib, 1), ab.sort(((bb, sb) => cb[bb].order - cb[sb].order));
        var Hb = Tb.indexOf(bb);
        Ub.qN && Hb < 0 && Tb.push(bb), !Ub.qN && Hb >= 0 && Tb.splice(Hb, 1), Tb.sort(((bb, sb) => cb[bb].order - cb[sb].order));
        var fb = Ub.state;
        return this.aJ(bb).forEach((bb => {
          for (var cb in fb) cb in bb || (bb[cb] = fb[cb]);
          Ub.ZN && Ub.ZN(bb.HJ, bb)
        })), bb
      }, this.deleteComponent = function(sb) {
        var kb = Wb[sb];
        if (!kb) throw new Error(`Unknown component: ${sb}`);
        kb.flush(), kb.list.forEach((bb => {
          bb && Ib(bb.HJ || bb[0].HJ, sb)
        }));
        var Ub = ab.indexOf(sb),
          Hb = Tb.indexOf(sb);
        return Ub > -1 && ab.splice(Ub, 1), Hb > -1 && Tb.splice(Hb, 1), Wb[sb].dispose(), delete Wb[sb], delete cb[sb], bb
      }, this.MJ = function(bb, sb, kb) {
        var ab, Tb = cb[sb],
          Ub = Wb[sb];
        if (!Ub) throw new Error(`Unknown component: ${sb}.`);
        if (Ub.hash[bb] && !Tb.multi) throw new Error(`Entity ${bb} already has component: ${sb}.`);
        if (Tb.stateConstructor) {
          if (!(ab = new Tb.stateConstructor).hasOwnProperty("HJ")) throw new Error(`Component ${Tb.name} stateConstructor type does not have property __id`);
          Object.assign(ab, Tb.state, kb)
        } else ab = {
          HJ: bb,
          ...Tb.state,
          ...kb
        };
        if (ab.HJ = bb, Tb.multi) {
          var Ib = Ub.hash[bb];
          Ib || (Ib = [], Ub.add(bb, Ib)), Ib.push(ab)
        } else Ub.add(bb, ab);
        return Tb.ZN && Tb.ZN(bb, ab), this
      }, this.j_ = function(bb, cb) {
        var sb = Wb[cb];
        if (!sb) throw new Error(`Unknown component: ${cb}.`);
        return !!sb.hash[bb]
      }, this.mJ = function(cb, sb) {
        if (!Wb[sb]) throw new Error(`Unknown component: ${sb}.`);
        return Ib(cb, sb), bb
      }, this.getState = function(bb, cb) {
        var sb = Wb[cb];
        if (!sb) throw new Error(`Unknown component: ${cb}.`);
        return sb.hash[bb]
      }, this.aJ = function(bb) {
        var cb = Wb[bb];
        if (!cb) throw new Error(`Unknown component: ${bb}.`);
        return Mb(), cb.list
      }, this.zbb = function(bb) {
        if (!Wb[bb]) throw new Error(`Unknown component: ${bb}.`);
        var cb = Wb[bb].hash;
        return bb => cb[bb]
      }, this.Sbb = function(bb) {
        if (!Wb[bb]) throw new Error(`Unknown component: ${bb}.`);
        var cb = Wb[bb].hash;
        return bb => !!cb[bb]
      }, this.aX = function(sb) {
        Mb();
        for (var kb = 0; kb < ab.length; kb++) {
          var Tb = ab[kb],
            Ub = cb[Tb],
            Ib = Wb[Tb];
          Ub.system(sb, Ib.list), Mb()
        }
        return bb
      }, this.render = function(sb) {
        Mb();
        for (var kb = 0; kb < Tb.length; kb++) {
          var ab = Tb[kb],
            Ub = cb[ab],
            Ib = Wb[ab];
          Ub.qN(sb, Ib.list), Mb()
        }
        return bb
      }, this.removeMultiComponent = function(sb, kb, ab) {
        var Tb = cb[kb],
          Ib = Wb[kb];
        if (!Ib) throw new Error(`Unknown component: ${kb}.`);
        if (!Tb.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(bb, cb, sb, kb) {
          var Wb = sb.hash[bb];
          if (Wb) {
            var ab = Wb[kb];
            ab && (Wb[kb] = null, cb.wL && cb.wL(bb, ab), Ub.multiComps.push({
              entID: bb,
              data: sb
            }), Hb())
          }
        }(sb, Tb, Ib, ab), bb
      }
    };
    var kb = sb(37860)
  },
  37860: bb => {
    function cb(bb, cb) {
      var sb = bb._map[cb];
      if (delete bb.hash[cb], delete bb._map[cb], sb === bb.list.length - 1) bb.list.pop(), bb._idList.pop();
      else {
        var kb = bb.list.pop();
        bb.list[sb] = kb;
        var Wb = bb._idList.pop();
        bb._idList[sb] = Wb, bb._map[Wb] = sb
      }
    }
    bb.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(bb, cb) {
        if ("number" === typeof this._map[bb]) {
          var sb = this._map[bb];
          this.hash[bb] = cb, this.list[sb] = cb, this._idList[sb] = bb
        } else this._map[bb] = this.list.length, this.hash[bb] = cb, this.list.push(cb), this._idList.push(bb)
      }
      remove(bb) {
        var cb = this._map[bb];
        this.hash[bb] = null, this.list[cb] = null, this._pendingRemovals.push(bb)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var bb = 0; bb < this._pendingRemovals.length; bb++) {
          var sb = this._pendingRemovals[bb];
          null === this.hash[sb] && cb(this, sb)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  37314: bb => {
    bb.exports = function(bb) {
      for (var cb = new Array(bb), sb = 0; sb < bb; ++sb) cb[sb] = sb;
      return cb
    }
  },
  37323: bb => {
    function cb(bb) {
      return !!bb.constructor && "function" === typeof bb.constructor.isBuffer && bb.constructor.isBuffer(bb)
    }
    bb.exports = function(bb) {
      return null != bb && (cb(bb) || function(bb) {
        return "function" === typeof bb.readFloatLE && "function" === typeof bb.slice && cb(bb.slice(0, 0))
      }(bb) || !!bb._isBuffer)
    }
  },
  37641: (bb, cb, sb) => {
    bb = sb.nmd(bb);
    var kb = "__lodash_hash_undefined__",
      Wb = 9007199254740991,
      ab = "[object Arguments]",
      Tb = "[object Boolean]",
      Ub = "[object Date]",
      Ib = "[object Function]",
      Hb = "[object GeneratorFunction]",
      fb = "[object Map]",
      Mb = "[object Number]",
      Xb = "[object Object]",
      nb = "[object Promise]",
      mb = "[object RegExp]",
      lb = "[object Set]",
      Qb = "[object String]",
      eb = "[object Symbol]",
      Cb = "[object WeakMap]",
      Nb = "[object ArrayBuffer]",
      Vb = "[object DataView]",
      Lb = "[object Float32Array]",
      ub = "[object Float64Array]",
      Yb = "[object Int8Array]",
      hb = "[object Int16Array]",
      Jb = "[object Int32Array]",
      gb = "[object Uint8Array]",
      Bb = "[object Uint8ClampedArray]",
      tb = "[object Uint16Array]",
      yb = "[object Uint32Array]",
      Pb = /\w*$/,
      Db = /^\[object .+?Constructor\]$/,
      Eb = /^(?:0|[1-9]\d*)$/,
      ib = {};
    ib[ab] = ib["[object Array]"] = ib[Nb] = ib[Vb] = ib[Tb] = ib[Ub] = ib[Lb] = ib[ub] = ib[Yb] = ib[hb] = ib[Jb] = ib[fb] = ib[Mb] = ib[Xb] = ib[mb] = ib[lb] = ib[Qb] = ib[eb] = ib[gb] = ib[Bb] = ib[tb] = ib[yb] = !0, ib["[object Error]"] = ib[Ib] = ib[Cb] = !1;
    var Ob = "object" == typeof sb.g && sb.g && sb.g.Object === Object && sb.g,
      Gb = "object" == typeof self && self && self.Object === Object && self,
      Kb = Ob || Gb || Function("return this")(),
      Zb = cb && !cb.nodeType && cb,
      zb = Zb && bb && !bb.nodeType && bb,
      qb = zb && zb.exports === Zb;

    function db(bb, cb) {
      return bb.set(cb[0], cb[1]), bb
    }

    function Ab(bb, cb) {
      return bb.add(cb), bb
    }

    function wb(bb, cb, sb, kb) {
      var Wb = -1,
        ab = bb ? bb.length : 0;
      for (kb && ab && (sb = bb[++Wb]); ++Wb < ab;) sb = cb(sb, bb[Wb], Wb, bb);
      return sb
    }

    function rb(bb) {
      var cb = !1;
      if (null != bb && "function" != typeof bb.toString) try {
        cb = !!(bb + "")
      } catch (sb) {}
      return cb
    }

    function ob(bb) {
      var cb = -1,
        sb = Array(bb.size);
      return bb.forEach((function(bb, kb) {
        sb[++cb] = [kb, bb]
      })), sb
    }

    function Sb(bb, cb) {
      return function(sb) {
        return bb(cb(sb))
      }
    }

    function Rb(bb) {
      var cb = -1,
        sb = Array(bb.size);
      return bb.forEach((function(bb) {
        sb[++cb] = bb
      })), sb
    }
    var vb = Array.prototype,
      Fb = Function.prototype,
      xb = Object.prototype,
      jb = Kb["__core-js_shared__"],
      pb = function() {
        var bb = /[^.]+$/.exec(jb && jb.keys && jb.keys.IE_PROTO || "");
        return bb ? "Symbol(src)_1." + bb : ""
      }(),
      bc = Fb.toString,
      cc = xb.hasOwnProperty,
      sc = xb.toString,
      kc = RegExp("^" + bc.call(cc).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      Wc = qb ? Kb.Dm : void 0,
      ac = Kb.Symbol,
      Tc = Kb.Uint8Array,
      Uc = Sb(Object.getPrototypeOf, Object),
      Ic = Object.create,
      Hc = xb.propertyIsEnumerable,
      fc = vb.splice,
      Mc = Object.getOwnPropertySymbols,
      Xc = Wc ? Wc.isBuffer : void 0,
      nc = Sb(Object.keys, Object),
      mc = qc(Kb, "DataView"),
      lc = qc(Kb, "Map"),
      Qc = qc(Kb, "Promise"),
      ec = qc(Kb, "Set"),
      Cc = qc(Kb, "WeakMap"),
      Nc = qc(Object, "create"),
      Vc = oc(mc),
      Lc = oc(lc),
      uc = oc(Qc),
      Yc = oc(ec),
      hc = oc(Cc),
      Jc = ac ? ac.prototype : void 0,
      gc = Jc ? Jc.valueOf : void 0;

    function Bc(bb) {
      var cb = -1,
        sb = bb ? bb.length : 0;
      for (this.clear(); ++cb < sb;) {
        var kb = bb[cb];
        this.set(kb[0], kb[1])
      }
    }

    function tc(bb) {
      var cb = -1,
        sb = bb ? bb.length : 0;
      for (this.clear(); ++cb < sb;) {
        var kb = bb[cb];
        this.set(kb[0], kb[1])
      }
    }

    function yc(bb) {
      var cb = -1,
        sb = bb ? bb.length : 0;
      for (this.clear(); ++cb < sb;) {
        var kb = bb[cb];
        this.set(kb[0], kb[1])
      }
    }

    function Pc(bb) {
      this.__data__ = new tc(bb)
    }

    function Dc(bb, cb) {
      var sb = Rc(bb) || function(bb) {
          return function(bb) {
            return function(bb) {
              return !!bb && "object" == typeof bb
            }(bb) && vc(bb)
          }(bb) && cc.call(bb, "callee") && (!Hc.call(bb, "callee") || sc.call(bb) == ab)
        }(bb) ? function(bb, cb) {
          for (var sb = -1, kb = Array(bb); ++sb < bb;) kb[sb] = cb(sb);
          return kb
        }(bb.length, String) : [],
        kb = sb.length,
        Wb = !!kb;
      for (var Tb in bb) !cb && !cc.call(bb, Tb) || Wb && ("length" == Tb || wc(Tb, kb)) || sb.push(Tb);
      return sb
    }

    function Ec(bb, cb, sb) {
      var kb = bb[cb];
      cc.call(bb, cb) && Sc(kb, sb) && (void 0 !== sb || cb in bb) || (bb[cb] = sb)
    }

    function ic(bb, cb) {
      for (var sb = bb.length; sb--;)
        if (Sc(bb[sb][0], cb)) return sb;
      return -1
    }

    function Oc(bb, cb, sb, kb, Wb, nb, Cb) {
      var Db;
      if (kb && (Db = nb ? kb(bb, Wb, nb, Cb) : kb(bb)), void 0 !== Db) return Db;
      if (!jc(bb)) return bb;
      var Eb = Rc(bb);
      if (Eb) {
        if (Db = function(bb) {
            var cb = bb.length,
              sb = bb.constructor(cb);
            cb && "string" == typeof bb[0] && cc.call(bb, "index") && (sb.index = bb.index, sb.input = bb.input);
            return sb
          }(bb), !cb) return function(bb, cb) {
          var sb = -1,
            kb = bb.length;
          cb || (cb = Array(kb));
          for (; ++sb < kb;) cb[sb] = bb[sb];
          return cb
        }(bb, Db)
      } else {
        var Ob = Ac(bb),
          Gb = Ob == Ib || Ob == Hb;
        if (Fc(bb)) return function(bb, cb) {
          if (cb) return bb.slice();
          var sb = new bb.constructor(bb.length);
          return bb.copy(sb), sb
        }(bb, cb);
        if (Ob == Xb || Ob == ab || Gb && !nb) {
          if (rb(bb)) return nb ? bb : {};
          if (Db = function(bb) {
              return "function" != typeof bb.constructor || rc(bb) ? {} : (cb = Uc(bb), jc(cb) ? Ic(cb) : {});
              var cb
            }(Gb ? {} : bb), !cb) return function(bb, cb) {
            return Zc(bb, dc(bb), cb)
          }(bb, function(bb, cb) {
            return bb && Zc(cb, pc(cb), bb)
          }(Db, bb))
        } else {
          if (!ib[Ob]) return nb ? bb : {};
          Db = function(bb, cb, sb, kb) {
            var Wb = bb.constructor;
            switch (cb) {
              case Nb:
                return Kc(bb);
              case Tb:
              case Ub:
                return new Wb(+bb);
              case Vb:
                return function(bb, cb) {
                  var sb = cb ? Kc(bb.buffer) : bb.buffer;
                  return new bb.constructor(sb, bb.byteOffset, bb.byteLength)
                }(bb, kb);
              case Lb:
              case ub:
              case Yb:
              case hb:
              case Jb:
              case gb:
              case Bb:
              case tb:
              case yb:
                return function(bb, cb) {
                  var sb = cb ? Kc(bb.buffer) : bb.buffer;
                  return new bb.constructor(sb, bb.byteOffset, bb.length)
                }(bb, kb);
              case fb:
                return function(bb, cb, sb) {
                  var kb = cb ? sb(ob(bb), !0) : ob(bb);
                  return wb(kb, db, new bb.constructor)
                }(bb, kb, sb);
              case Mb:
              case Qb:
                return new Wb(bb);
              case mb:
                return function(bb) {
                  var cb = new bb.constructor(bb.source, Pb.exec(bb));
                  return cb.lastIndex = bb.lastIndex, cb
                }(bb);
              case lb:
                return function(bb, cb, sb) {
                  var kb = cb ? sb(Rb(bb), !0) : Rb(bb);
                  return wb(kb, Ab, new bb.constructor)
                }(bb, kb, sb);
              case eb:
                return ab = bb, gc ? Object(gc.call(ab)) : {}
            }
            var ab
          }(bb, Ob, Oc, cb)
        }
      }
      Cb || (Cb = new Pc);
      var Kb = Cb.get(bb);
      if (Kb) return Kb;
      if (Cb.set(bb, Db), !Eb) var Zb = sb ? function(bb) {
        return function(bb, cb, sb) {
          var kb = cb(bb);
          return Rc(bb) ? kb : function(bb, cb) {
            for (var sb = -1, kb = cb.length, Wb = bb.length; ++sb < kb;) bb[Wb + sb] = cb[sb];
            return bb
          }(kb, sb(bb))
        }(bb, pc, dc)
      }(bb) : pc(bb);
      return function(bb, cb) {
        for (var sb = -1, kb = bb ? bb.length : 0; ++sb < kb && !1 !== cb(bb[sb], sb, bb););
      }(Zb || bb, (function(Wb, ab) {
        Zb && (Wb = bb[ab = Wb]), Ec(Db, ab, Oc(Wb, cb, sb, kb, ab, bb, Cb))
      })), Db
    }

    function Gc(bb) {
      return !(!jc(bb) || (cb = bb, pb && pb in cb)) && (xc(bb) || rb(bb) ? kc : Db).test(oc(bb));
      var cb
    }

    function Kc(bb) {
      var cb = new bb.constructor(bb.byteLength);
      return new Tc(cb).set(new Tc(bb)), cb
    }

    function Zc(bb, cb, sb, kb) {
      sb || (sb = {});
      for (var Wb = -1, ab = cb.length; ++Wb < ab;) {
        var Tb = cb[Wb],
          Ub = kb ? kb(sb[Tb], bb[Tb], Tb, sb, bb) : void 0;
        Ec(sb, Tb, void 0 === Ub ? bb[Tb] : Ub)
      }
      return sb
    }

    function zc(bb, cb) {
      var sb = bb.__data__;
      return function(bb) {
        var cb = typeof bb;
        return "string" == cb || "number" == cb || "symbol" == cb || "boolean" == cb ? "__proto__" !== bb : null === bb
      }(cb) ? sb["string" == typeof cb ? "string" : "hash"] : sb.map
    }

    function qc(bb, cb) {
      var sb = function(bb, cb) {
        return null == bb ? void 0 : bb[cb]
      }(bb, cb);
      return Gc(sb) ? sb : void 0
    }
    Bc.prototype.clear = function() {
      this.__data__ = Nc ? Nc(null) : {}
    }, Bc.prototype.delete = function(bb) {
      return this.has(bb) && delete this.__data__[bb]
    }, Bc.prototype.get = function(bb) {
      var cb = this.__data__;
      if (Nc) {
        var sb = cb[bb];
        return sb === kb ? void 0 : sb
      }
      return cc.call(cb, bb) ? cb[bb] : void 0
    }, Bc.prototype.has = function(bb) {
      var cb = this.__data__;
      return Nc ? void 0 !== cb[bb] : cc.call(cb, bb)
    }, Bc.prototype.set = function(bb, cb) {
      return this.__data__[bb] = Nc && void 0 === cb ? kb : cb, this
    }, tc.prototype.clear = function() {
      this.__data__ = []
    }, tc.prototype.delete = function(bb) {
      var cb = this.__data__,
        sb = ic(cb, bb);
      return !(sb < 0) && (sb == cb.length - 1 ? cb.pop() : fc.call(cb, sb, 1), !0)
    }, tc.prototype.get = function(bb) {
      var cb = this.__data__,
        sb = ic(cb, bb);
      return sb < 0 ? void 0 : cb[sb][1]
    }, tc.prototype.has = function(bb) {
      return ic(this.__data__, bb) > -1
    }, tc.prototype.set = function(bb, cb) {
      var sb = this.__data__,
        kb = ic(sb, bb);
      return kb < 0 ? sb.push([bb, cb]) : sb[kb][1] = cb, this
    }, yc.prototype.clear = function() {
      this.__data__ = {
        hash: new Bc,
        map: new(lc || tc),
        string: new Bc
      }
    }, yc.prototype.delete = function(bb) {
      return zc(this, bb).delete(bb)
    }, yc.prototype.get = function(bb) {
      return zc(this, bb).get(bb)
    }, yc.prototype.has = function(bb) {
      return zc(this, bb).has(bb)
    }, yc.prototype.set = function(bb, cb) {
      return zc(this, bb).set(bb, cb), this
    }, Pc.prototype.clear = function() {
      this.__data__ = new tc
    }, Pc.prototype.delete = function(bb) {
      return this.__data__.delete(bb)
    }, Pc.prototype.get = function(bb) {
      return this.__data__.get(bb)
    }, Pc.prototype.has = function(bb) {
      return this.__data__.has(bb)
    }, Pc.prototype.set = function(bb, cb) {
      var sb = this.__data__;
      if (sb instanceof tc) {
        var kb = sb.__data__;
        if (!lc || kb.length < 199) return kb.push([bb, cb]), this;
        sb = this.__data__ = new yc(kb)
      }
      return sb.set(bb, cb), this
    };
    var dc = Mc ? Sb(Mc, Object) : function() {
        return []
      },
      Ac = function(bb) {
        return sc.call(bb)
      };

    function wc(bb, cb) {
      return !!(cb = null == cb ? Wb : cb) && ("number" == typeof bb || Eb.test(bb)) && bb > -1 && bb % 1 == 0 && bb < cb
    }

    function rc(bb) {
      var cb = bb && bb.constructor;
      return bb === ("function" == typeof cb && cb.prototype || xb)
    }

    function oc(bb) {
      if (null != bb) {
        try {
          return bc.call(bb)
        } catch (cb) {}
        try {
          return bb + ""
        } catch (cb) {}
      }
      return ""
    }

    function Sc(bb, cb) {
      return bb === cb || bb !== bb && cb !== cb
    }(mc && Ac(new mc(new ArrayBuffer(1))) != Vb || lc && Ac(new lc) != fb || Qc && Ac(Qc.resolve()) != nb || ec && Ac(new ec) != lb || Cc && Ac(new Cc) != Cb) && (Ac = function(bb) {
      var cb = sc.call(bb),
        sb = cb == Xb ? bb.constructor : void 0,
        kb = sb ? oc(sb) : void 0;
      if (kb) switch (kb) {
        case Vc:
          return Vb;
        case Lc:
          return fb;
        case uc:
          return nb;
        case Yc:
          return lb;
        case hc:
          return Cb
      }
      return cb
    });
    var Rc = Array.isArray;

    function vc(bb) {
      return null != bb && function(bb) {
        return "number" == typeof bb && bb > -1 && bb % 1 == 0 && bb <= Wb
      }(bb.length) && !xc(bb)
    }
    var Fc = Xc || function() {
      return !1
    };

    function xc(bb) {
      var cb = jc(bb) ? sc.call(bb) : "";
      return cb == Ib || cb == Hb
    }

    function jc(bb) {
      var cb = typeof bb;
      return !!bb && ("object" == cb || "function" == cb)
    }

    function pc(bb) {
      return vc(bb) ? Dc(bb) : function(bb) {
        if (!rc(bb)) return nc(bb);
        var cb = [];
        for (var sb in Object(bb)) cc.call(bb, sb) && "constructor" != sb && cb.push(sb);
        return cb
      }(bb)
    }
    bb.exports = function(bb) {
      return Oc(bb, !0, !0)
    }
  },
  37308: (bb, cb, sb) => {
    var kb = sb(37314),
      Wb = sb(37323),
      ab = "undefined" !== typeof Float64Array;

    function Tb(bb, cb) {
      return bb[0] - cb[0]
    }

    function Ub() {
      var bb, cb = this.stride,
        sb = new Array(cb.length);
      for (bb = 0; bb < sb.length; ++bb) sb[bb] = [Math.abs(cb[bb]), bb];
      sb.sort(Tb);
      var kb = new Array(sb.length);
      for (bb = 0; bb < kb.length; ++bb) kb[bb] = sb[bb][1];
      return kb
    }

    function Ib(bb, cb) {
      var sb = ["View", cb, "d", bb].join("");
      cb < 0 && (sb = "View_Nil" + bb);
      var Wb = "generic" === bb;
      if (-1 === cb) {
        var ab = "function " + sb + "(a){this.data=a;};var proto=" + sb + ".prototype;proto.dtype='" + bb + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + sb + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + sb + "(a){return new " + sb + "(a);}";
        return new Function(ab)()
      }
      if (0 === cb) {
        ab = "function " + sb + "(a,d) {this.data = a;this.offset = d};var proto=" + sb + ".prototype;proto.dtype='" + bb + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + sb + "_copy() {return new " + sb + "(this.data,this.offset)};proto.pick=function " + sb + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + sb + "_get(){return " + (Wb ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + sb + "_set(v){return " + (Wb ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + sb + "(a,b,c,d){return new " + sb + "(a,d)}";
        return new Function("TrivialArray", ab)(Hb[bb][0])
      }
      ab = ["'use strict'"];
      var Tb = kb(cb),
        Ib = Tb.map((function(bb) {
          return "i" + bb
        })),
        fb = "this.offset+" + Tb.map((function(bb) {
          return "this.stride[" + bb + "]*i" + bb
        })).join("+"),
        Mb = Tb.map((function(bb) {
          return "b" + bb
        })).join(","),
        Xb = Tb.map((function(bb) {
          return "c" + bb
        })).join(",");
      ab.push("function " + sb + "(a," + Mb + "," + Xb + ",d){this.data=a", "this.shape=[" + Mb + "]", "this.stride=[" + Xb + "]", "this.offset=d|0}", "var proto=" + sb + ".prototype", "proto.dtype='" + bb + "'", "proto.dimension=" + cb), ab.push("Object.defineProperty(proto,'size',{get:function " + sb + "_size(){return " + Tb.map((function(bb) {
        return "this.shape[" + bb + "]"
      })).join("*"), "}})"), 1 === cb ? ab.push("proto.order=[0]") : (ab.push("Object.defineProperty(proto,'order',{get:"), cb < 4 ? (ab.push("function " + sb + "_order(){"), 2 === cb ? ab.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === cb && ab.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : ab.push("ORDER})")), ab.push("proto.set=function " + sb + "_set(" + Ib.join(",") + ",v){"), Wb ? ab.push("return this.data.set(" + fb + ",v)}") : ab.push("return this.data[" + fb + "]=v}"), ab.push("proto.get=function " + sb + "_get(" + Ib.join(",") + "){"), Wb ? ab.push("return this.data.get(" + fb + ")}") : ab.push("return this.data[" + fb + "]}"), ab.push("proto.index=function " + sb + "_index(", Ib.join(), "){return " + fb + "}"), ab.push("proto.hi=function " + sb + "_hi(" + Ib.join(",") + "){return new " + sb + "(this.data," + Tb.map((function(bb) {
        return ["(typeof i", bb, "!=='number'||i", bb, "<0)?this.shape[", bb, "]:i", bb, "|0"].join("")
      })).join(",") + "," + Tb.map((function(bb) {
        return "this.stride[" + bb + "]"
      })).join(",") + ",this.offset)}");
      var nb = Tb.map((function(bb) {
          return "a" + bb + "=this.shape[" + bb + "]"
        })),
        mb = Tb.map((function(bb) {
          return "c" + bb + "=this.stride[" + bb + "]"
        }));
      ab.push("proto.lo=function " + sb + "_lo(" + Ib.join(",") + "){var b=this.offset,d=0," + nb.join(",") + "," + mb.join(","));
      for (var lb = 0; lb < cb; ++lb) ab.push("if(typeof i" + lb + "==='number'&&i" + lb + ">=0){d=i" + lb + "|0;b+=c" + lb + "*d;a" + lb + "-=d}");
      ab.push("return new " + sb + "(this.data," + Tb.map((function(bb) {
        return "a" + bb
      })).join(",") + "," + Tb.map((function(bb) {
        return "c" + bb
      })).join(",") + ",b)}"), ab.push("proto.step=function " + sb + "_step(" + Ib.join(",") + "){var " + Tb.map((function(bb) {
        return "a" + bb + "=this.shape[" + bb + "]"
      })).join(",") + "," + Tb.map((function(bb) {
        return "b" + bb + "=this.stride[" + bb + "]"
      })).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
      for (lb = 0; lb < cb; ++lb) ab.push("if(typeof i" + lb + "==='number'){d=i" + lb + "|0;if(d<0){c+=b" + lb + "*(a" + lb + "-1);a" + lb + "=ceil(-a" + lb + "/d)}else{a" + lb + "=ceil(a" + lb + "/d)}b" + lb + "*=d}");
      ab.push("return new " + sb + "(this.data," + Tb.map((function(bb) {
        return "a" + bb
      })).join(",") + "," + Tb.map((function(bb) {
        return "b" + bb
      })).join(",") + ",c)}");
      var Qb = new Array(cb),
        eb = new Array(cb);
      for (lb = 0; lb < cb; ++lb) Qb[lb] = "a[i" + lb + "]", eb[lb] = "b[i" + lb + "]";
      ab.push("proto.transpose=function " + sb + "_transpose(" + Ib + "){" + Ib.map((function(bb, cb) {
        return bb + "=(" + bb + "===undefined?" + cb + ":" + bb + "|0)"
      })).join(";"), "var a=this.shape,b=this.stride;return new " + sb + "(this.data," + Qb.join(",") + "," + eb.join(",") + ",this.offset)}"), ab.push("proto.pick=function " + sb + "_pick(" + Ib + "){var a=[],b=[],c=this.offset");
      for (lb = 0; lb < cb; ++lb) ab.push("if(typeof i" + lb + "==='number'&&i" + lb + ">=0){c=(c+this.stride[" + lb + "]*i" + lb + ")|0}else{a.push(this.shape[" + lb + "]);b.push(this.stride[" + lb + "])}");
      return ab.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), ab.push("return function construct_" + sb + "(data,shape,stride,offset){return new " + sb + "(data," + Tb.map((function(bb) {
        return "shape[" + bb + "]"
      })).join(",") + "," + Tb.map((function(bb) {
        return "stride[" + bb + "]"
      })).join(",") + ",offset)}"), new Function("CTOR_LIST", "ORDER", ab.join("\n"))(Hb[bb], Ub)
    }
    var Hb = {
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
    bb.exports = function(bb, cb, sb, kb) {
      if (void 0 === bb) return (0, Hb.array[0])([]);
      "number" === typeof bb && (bb = [bb]), void 0 === cb && (cb = [bb.length]);
      var Tb = cb.length;
      if (void 0 === sb) {
        sb = new Array(Tb);
        for (var Ub = Tb - 1, fb = 1; Ub >= 0; --Ub) sb[Ub] = fb, fb *= cb[Ub]
      }
      if (void 0 === kb) {
        kb = 0;
        for (Ub = 0; Ub < Tb; ++Ub) sb[Ub] < 0 && (kb -= (cb[Ub] - 1) * sb[Ub])
      }
      for (var Mb = function(bb) {
          if (Wb(bb)) return "buffer";
          if (ab) switch (Object.prototype.toString.call(bb)) {
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
        }(bb), Xb = Hb[Mb]; Xb.length <= Tb + 1;) Xb.push(Ib(Mb, Xb.length - 1));
      return (0, Xb[Tb + 1])(bb, cb, sb, kb)
    }
  },
  38054: bb => {
    function cb(bb, cb, sb) {
      for (var kb = bb.length, Wb = -1 / 0, ab = 1 / 0, Tb = 0; Tb < kb; Tb++) {
        var Ub = (sb[0][Tb] - bb[Tb]) / cb[Tb],
          Ib = (sb[1][Tb] - bb[Tb]) / cb[Tb];
        if (Ub > Ib) {
          var Hb = Ub;
          Ub = Ib, Ib = Hb
        }
        if (Ib < Wb || Ub > ab) return 1 / 0;
        Ub > Wb && (Wb = Ub), Ib < ab && (ab = Ib)
      }
      return Wb > ab ? 1 / 0 : Wb
    }
    bb.exports = function(bb, sb, kb, Wb) {
      var ab = cb(sb, kb, Wb);
      if (ab === 1 / 0) bb = null;
      else {
        bb = bb || [];
        for (var Tb = 0; Tb < sb.length; Tb++) bb[Tb] = sb[Tb] + kb[Tb] * ab
      }
      return bb
    }, bb.exports.distance = cb
  },
  37335: (bb, cb, sb) => {
    var kb = sb(37338);

    function Wb(bb) {
      for (var cb, sb, Wb = 0, ab = bb.length, Tb = 0; Tb < bb.length;) {
        for (cb = bb[Tb], sb = 0; Tb < ab && bb[Tb] === cb;) ++Tb, ++sb;
        Wb += kb.log2(sb) / 7 | 0, Wb += kb.log2(cb >>> 0) / 7 | 0, Wb += 2
      }
      return Wb
    }
    cb.size = Wb, cb.encode = function(bb, cb) {
      cb || (cb = new Uint8Array(Wb(bb)));
      for (var sb, kb, ab = 0, Tb = cb.length, Ub = 0; Ub < bb.length;) {
        for (sb = bb[Ub], kb = 0; Ub < bb.length && bb[Ub] === sb;) ++Ub, ++kb;
        for (; ab < Tb && kb >= 128;) cb[ab++] = 128 + (127 & kb), kb >>>= 7;
        if (ab >= Tb) throw new Error("RLE buffer overflow");
        for (cb[ab++] = kb, sb >>>= 0; ab < Tb && sb >= 128;) cb[ab++] = 128 + (127 & sb), sb >>>= 7;
        if (ab >= Tb) throw new Error("RLE buffer overflow");
        cb[ab++] = sb
      }
      return cb
    }, cb.decode = function(bb, cb) {
      for (var sb, kb, Wb, ab, Tb = cb.length, Ub = bb.length, Ib = 0, Hb = 0; Hb < Ub;) {
        for (sb = 0, kb = 0; Hb < Ub && bb[Hb] >= 128;) sb += (127 & bb[Hb++]) << kb, kb += 7;
        if (sb += bb[Hb++] << kb, Hb >= Ub) throw new Error("RLE buffer underrun");
        if (Ib + sb > Tb) throw new Error("Chunk buffer overflow");
        for (Wb = 0, kb = 0; Hb < Ub && bb[Hb] >= 128;) Wb += (127 & bb[Hb++]) << kb, kb += 7;
        if (Hb >= Ub) throw new Error("RLE buffer underrun");
        for (Wb += bb[Hb++] << kb, ab = 0; ab < sb; ++ab) cb[Ib++] = Wb
      }
      return cb
    }
  },
  37338: (bb, cb) => {
    function sb(bb) {
      var cb = 32;
      return (bb &= -bb) && cb--, 65535 & bb && (cb -= 16), 16711935 & bb && (cb -= 8), 252645135 & bb && (cb -= 4), 858993459 & bb && (cb -= 2), 1431655765 & bb && (cb -= 1), cb
    }
    cb.INT_BITS = 32, cb.INT_MAX = 2147483647, cb.INT_MIN = -1 << 31, cb.sign = function(bb) {
      return (bb > 0) - (bb < 0)
    }, cb.abs = function(bb) {
      var cb = bb >> 31;
      return (bb ^ cb) - cb
    }, cb.min = function(bb, cb) {
      return cb ^ (bb ^ cb) & -(bb < cb)
    }, cb.max = function(bb, cb) {
      return bb ^ (bb ^ cb) & -(bb < cb)
    }, cb.isPow2 = function(bb) {
      return !(bb & bb - 1) && !!bb
    }, cb.log2 = function(bb) {
      var cb, sb;
      return cb = (bb > 65535) << 4, cb |= sb = ((bb >>>= cb) > 255) << 3, cb |= sb = ((bb >>>= sb) > 15) << 2, (cb |= sb = ((bb >>>= sb) > 3) << 1) | (bb >>>= sb) >> 1
    }, cb.log10 = function(bb) {
      return bb >= 1e9 ? 9 : bb >= 1e8 ? 8 : bb >= 1e7 ? 7 : bb >= 1e6 ? 6 : bb >= 1e5 ? 5 : bb >= 1e4 ? 4 : bb >= 1e3 ? 3 : bb >= 100 ? 2 : bb >= 10 ? 1 : 0
    }, cb.popCount = function(bb) {
      return 16843009 * ((bb = (858993459 & (bb -= bb >>> 1 & 1431655765)) + (bb >>> 2 & 858993459)) + (bb >>> 4) & 252645135) >>> 24
    }, cb.countTrailingZeros = sb, cb.nextPow2 = function(bb) {
      return bb += 0 === bb, --bb, bb |= bb >>> 1, bb |= bb >>> 2, bb |= bb >>> 4, bb |= bb >>> 8, (bb |= bb >>> 16) + 1
    }, cb.prevPow2 = function(bb) {
      return bb |= bb >>> 1, bb |= bb >>> 2, bb |= bb >>> 4, bb |= bb >>> 8, (bb |= bb >>> 16) - (bb >>> 1)
    }, cb.parity = function(bb) {
      return bb ^= bb >>> 16, bb ^= bb >>> 8, bb ^= bb >>> 4, 27030 >>> (bb &= 15) & 1
    };
    var kb = new Array(256);
    ! function(bb) {
      for (var cb = 0; cb < 256; ++cb) {
        var sb = cb,
          kb = cb,
          Wb = 7;
        for (sb >>>= 1; sb; sb >>>= 1) kb <<= 1, kb |= 1 & sb, --Wb;
        bb[cb] = kb << Wb & 255
      }
    }(kb), cb.reverse = function(bb) {
      return kb[255 & bb] << 24 | kb[bb >>> 8 & 255] << 16 | kb[bb >>> 16 & 255] << 8 | kb[bb >>> 24 & 255]
    }, cb.interleave2 = function(bb, cb) {
      return (bb = 1431655765 & ((bb = 858993459 & ((bb = 252645135 & ((bb = 16711935 & ((bb &= 65535) | bb << 8)) | bb << 4)) | bb << 2)) | bb << 1)) | (cb = 1431655765 & ((cb = 858993459 & ((cb = 252645135 & ((cb = 16711935 & ((cb &= 65535) | cb << 8)) | cb << 4)) | cb << 2)) | cb << 1)) << 1
    }, cb.deinterleave2 = function(bb, cb) {
      return (bb = 65535 & ((bb = 16711935 & ((bb = 252645135 & ((bb = 858993459 & ((bb = bb >>> cb & 1431655765) | bb >>> 1)) | bb >>> 2)) | bb >>> 4)) | bb >>> 16)) << 16 >> 16
    }, cb.interleave3 = function(bb, cb, sb) {
      return bb = 1227133513 & ((bb = 3272356035 & ((bb = 251719695 & ((bb = 4278190335 & ((bb &= 1023) | bb << 16)) | bb << 8)) | bb << 4)) | bb << 2), (bb |= (cb = 1227133513 & ((cb = 3272356035 & ((cb = 251719695 & ((cb = 4278190335 & ((cb &= 1023) | cb << 16)) | cb << 8)) | cb << 4)) | cb << 2)) << 1) | (sb = 1227133513 & ((sb = 3272356035 & ((sb = 251719695 & ((sb = 4278190335 & ((sb &= 1023) | sb << 16)) | sb << 8)) | sb << 4)) | sb << 2)) << 2
    }, cb.deinterleave3 = function(bb, cb) {
      return (bb = 1023 & ((bb = 4278190335 & ((bb = 251719695 & ((bb = 3272356035 & ((bb = bb >>> cb & 1227133513) | bb >>> 2)) | bb >>> 4)) | bb >>> 8)) | bb >>> 16)) << 22 >> 22
    }, cb.nextCombination = function(bb) {
      var cb = bb | bb - 1;
      return cb + 1 | (~cb & -~cb) - 1 >>> sb(bb) + 1
    }
  },
  36821: (bb, cb, sb) => {
    sb.d(cb, {
      Color3: () => kb.e,
      e: () => kb.g
    });
    var kb = sb(36830);
    (0, kb.j)()
  },
  37365: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb
    });
    var kb = sb(37368);
    class Wb {
      static GetPlanes(bb) {
        const cb = [];
        for (let sb = 0; sb < 6; sb++) cb.push(new kb.c(0, 0, 0, 0));
        return Wb.GetPlanesToRef(bb, cb), cb
      }
      static GetNearPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] + sb[2], cb.normal.y = sb[7] + sb[6], cb.normal.z = sb[11] + sb[10], cb.d = sb[15] + sb[14], cb.normalize()
      }
      static GetFarPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] - sb[2], cb.normal.y = sb[7] - sb[6], cb.normal.z = sb[11] - sb[10], cb.d = sb[15] - sb[14], cb.normalize()
      }
      static GetLeftPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] + sb[0], cb.normal.y = sb[7] + sb[4], cb.normal.z = sb[11] + sb[8], cb.d = sb[15] + sb[12], cb.normalize()
      }
      static GetRightPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] - sb[0], cb.normal.y = sb[7] - sb[4], cb.normal.z = sb[11] - sb[8], cb.d = sb[15] - sb[12], cb.normalize()
      }
      static GetTopPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] - sb[1], cb.normal.y = sb[7] - sb[5], cb.normal.z = sb[11] - sb[9], cb.d = sb[15] - sb[13], cb.normalize()
      }
      static GetBottomPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] + sb[1], cb.normal.y = sb[7] + sb[5], cb.normal.z = sb[11] + sb[9], cb.d = sb[15] + sb[13], cb.normalize()
      }
      static GetPlanesToRef(bb, cb) {
        Wb.GetNearPlaneToRef(bb, cb[0]), Wb.GetFarPlaneToRef(bb, cb[1]), Wb.GetLeftPlaneToRef(bb, cb[2]), Wb.GetRightPlaneToRef(bb, cb[3]), Wb.GetTopPlaneToRef(bb, cb[4]), Wb.GetBottomPlaneToRef(bb, cb[5])
      }
      static IsPointInFrustum(bb, cb) {
        for (let sb = 0; sb < 6; sb++)
          if (cb[sb].dotCoordinate(bb) < 0) return !1;
        return !0
      }
    }
  },
  37368: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb
    });
    var kb = sb(36656);
    class Wb {
      constructor(bb, cb, sb, Wb) {
        this.normal = new kb.p(bb, cb, sb), this.d = Wb
      }
      Osb() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Wb(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let cb = 0;
        return 0 !== bb && (cb = 1 / bb), this.normal.x *= cb, this.normal.y *= cb, this.normal.z *= cb, this.d *= cb, this
      }
      transform(bb) {
        const cb = Wb._TmpMatrix;
        bb.invertToRef(cb);
        const sb = cb.m,
          kb = this.normal.x,
          ab = this.normal.y,
          Tb = this.normal.z,
          Ub = this.d,
          Ib = kb * sb[0] + ab * sb[1] + Tb * sb[2] + Ub * sb[3],
          Hb = kb * sb[4] + ab * sb[5] + Tb * sb[6] + Ub * sb[7],
          fb = kb * sb[8] + ab * sb[9] + Tb * sb[10] + Ub * sb[11],
          Mb = kb * sb[12] + ab * sb[13] + Tb * sb[14] + Ub * sb[15];
        return new Wb(Ib, Hb, fb, Mb)
      }
      dotCoordinate(bb) {
        return this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z + this.d
      }
      copyFromPoints(bb, cb, sb) {
        const kb = cb.x - bb.x,
          Wb = cb.y - bb.y,
          ab = cb.z - bb.z,
          Tb = sb.x - bb.x,
          Ub = sb.y - bb.y,
          Ib = sb.z - bb.z,
          Hb = Wb * Ib - ab * Ub,
          fb = ab * Tb - kb * Ib,
          Mb = kb * Ub - Wb * Tb,
          Xb = Math.sqrt(Hb * Hb + fb * fb + Mb * Mb);
        let nb;
        return nb = 0 !== Xb ? 1 / Xb : 0, this.normal.x = Hb * nb, this.normal.y = fb * nb, this.normal.z = Mb * nb, this.d = -(this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z), this
      }
      isFrontFacingTo(bb, cb) {
        return kb.p.Dot(this.normal, bb) <= cb
      }
      signedDistanceTo(bb) {
        return kb.p.Dot(bb, this.normal) + this.d
      }
      static FromArray(bb) {
        return new Wb(bb[0], bb[1], bb[2], bb[3])
      }
      static FromPoints(bb, cb, sb) {
        const kb = new Wb(0, 0, 0, 0);
        return kb.copyFromPoints(bb, cb, sb), kb
      }
      static FromPositionAndNormal(bb, cb) {
        const sb = new Wb(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(bb, cb, sb)
      }
      static FromPositionAndNormalToRef(bb, cb, sb) {
        return sb.normal.ssb(cb), sb.normal.normalize(), sb.d = -bb.dot(sb.normal), sb
      }
      static SignedDistanceToPlaneFromPositionAndNormal(bb, cb, sb) {
        const Wb = -(cb.x * bb.x + cb.y * bb.y + cb.z * bb.z);
        return kb.p.Dot(sb, cb) + Wb
      }
    }
    Wb._TmpMatrix = kb.e.Identity()
  },
  36654: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      Matrix: () => kb.e,
      Quaternion: () => kb.f,
      RegisterMathVector: () => kb.j,
      TmpVectors: () => kb.m,
      Vector2: () => kb.n,
      Fm: () => kb.p,
      Vector4: () => kb.t
    });
    var kb = sb(36656);
    (0, kb.j)()
  },
  37700: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb
    });
    class kb {
      constructor(bb, cb, sb, kb) {
        this.x = bb, this.y = cb, this.width = sb, this.height = kb
      }
      toGlobal(bb, cb) {
        return new kb(this.x * bb, this.y * cb, this.width * bb, this.height * cb)
      }
      toGlobalToRef(bb, cb, sb) {
        return sb.x = this.x * bb, sb.y = this.y * cb, sb.width = this.width * bb, sb.height = this.height * cb, this
      }
      clone() {
        return new kb(this.x, this.y, this.width, this.height)
      }
    }
  },
  37501: (bb, cb, sb) => {
    function kb() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (bb => {
        const cb = 16 * Math.random() | 0;
        return ("x" === bb ? cb : 3 & cb | 8).toString(16)
      }))
    }
    sb.d(cb, {
      b: () => kb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);