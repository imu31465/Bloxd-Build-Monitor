/*! For license information please see welxxc.261.8288cf16.chunk.js.LICENSE.txt */
export const id = 261;
export const ids = [261, 268];
export const modules = {
  39534: bb => {
    bb.exports = function(bb) {
      return null != bb && null != bb.constructor && "function" === typeof bb.constructor.isBuffer && bb.constructor.isBuffer(bb)
    }
  },
  39518: (bb, wb, Mb) => {
    var eb = Mb(39526),
      Hb = Mb(39531),
      pb = Mb(39534);
    Mb.g.__TYPEDARRAY_POOL || (Mb.g.__TYPEDARRAY_POOL = {
      UINT8: Hb([32, 0]),
      UINT16: Hb([32, 0]),
      UINT32: Hb([32, 0]),
      INT8: Hb([32, 0]),
      INT16: Hb([32, 0]),
      INT32: Hb([32, 0]),
      FLOAT: Hb([32, 0]),
      DOUBLE: Hb([32, 0]),
      DATA: Hb([32, 0]),
      UINT8C: Hb([32, 0]),
      BUFFER: Hb([32, 0])
    });
    var Vb = "undefined" !== typeof Uint8ClampedArray,
      gb = Mb.g.__TYPEDARRAY_POOL;
    gb.UINT8C || (gb.UINT8C = Hb([32, 0])), gb.BUFFER || (gb.BUFFER = Hb([32, 0]));
    var lb = gb.DATA,
      Lb = gb.BUFFER;

    function Ib(bb) {
      if (bb) {
        var wb = bb.length || bb.byteLength,
          Mb = eb.log2(wb);
        lb[Mb].push(bb)
      }
    }

    function Ob(bb) {
      bb = eb.nextPow2(bb);
      var wb = eb.log2(bb),
        Mb = lb[wb];
      return Mb.length > 0 ? Mb.pop() : new ArrayBuffer(bb)
    }

    function Ub(bb) {
      return new Uint8Array(Ob(bb), 0, bb)
    }

    function tb(bb) {
      return new Uint16Array(Ob(2 * bb), 0, bb)
    }

    function Cb(bb) {
      return new Uint32Array(Ob(4 * bb), 0, bb)
    }

    function Eb(bb) {
      return new Int8Array(Ob(bb), 0, bb)
    }

    function Fb(bb) {
      return new Int16Array(Ob(2 * bb), 0, bb)
    }

    function Bb(bb) {
      return new Int32Array(Ob(4 * bb), 0, bb)
    }

    function sb(bb) {
      return new Float32Array(Ob(4 * bb), 0, bb)
    }

    function mb(bb) {
      return new Float64Array(Ob(8 * bb), 0, bb)
    }

    function hb(bb) {
      return Vb ? new Uint8ClampedArray(Ob(bb), 0, bb) : Ub(bb)
    }

    function zb(bb) {
      return new DataView(Ob(bb), 0, bb)
    }
    wb.free = function(bb) {
      if (pb(bb)) Lb[eb.log2(bb.length)].push(bb);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(bb) && (bb = bb.buffer), !bb) return;
        var wb = bb.length || bb.byteLength,
          Mb = 0 | eb.log2(wb);
        lb[Mb].push(bb)
      }
    }, wb.freeUint8 = wb.freeUint16 = wb.freeUint32 = wb.freeInt8 = wb.freeInt16 = wb.freeInt32 = wb.freeFloat32 = wb.freeFloat = wb.freeFloat64 = wb.freeDouble = wb.freeUint8Clamped = wb.freeDataView = function(bb) {
      Ib(bb.buffer)
    }, wb.freeArrayBuffer = Ib, wb.freeBuffer = function(bb) {
      Lb[eb.log2(bb.length)].push(bb)
    }, wb.malloc = function(bb, wb) {
      if (void 0 === wb || "arraybuffer" === wb) return Ob(bb);
      switch (wb) {
        case "uint8":
          return Ub(bb);
        case "uint16":
          return tb(bb);
        case "uint32":
          return Cb(bb);
        case "int8":
          return Eb(bb);
        case "int16":
          return Fb(bb);
        case "int32":
          return Bb(bb);
        case "float":
        case "float32":
          return sb(bb);
        case "double":
        case "float64":
          return mb(bb);
        case "uint8_clamped":
          return hb(bb);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return zb(bb);
        default:
          return null
      }
      return null
    }, wb.mallocArrayBuffer = Ob, wb.mallocUint8 = Ub, wb.mallocUint16 = tb, wb.mallocUint32 = Cb, wb.mallocInt8 = Eb, wb.mallocInt16 = Fb, wb.mallocInt32 = Bb, wb.mallocFloat32 = wb.mallocFloat = sb, wb.mallocFloat64 = wb.mallocDouble = mb, wb.mallocUint8Clamped = hb, wb.mallocDataView = zb, wb.clearCache = function() {
      for (var bb = 0; bb < 32; ++bb) gb.UINT8[bb].length = 0, gb.UINT16[bb].length = 0, gb.UINT32[bb].length = 0, gb.INT8[bb].length = 0, gb.INT16[bb].length = 0, gb.INT32[bb].length = 0, gb.FLOAT[bb].length = 0, gb.DOUBLE[bb].length = 0, gb.UINT8C[bb].length = 0, lb[bb].length = 0, Lb[bb].length = 0
    }
  },
  39526: (bb, wb) => {
    function Mb(bb) {
      var wb = 32;
      return (bb &= -bb) && wb--, 65535 & bb && (wb -= 16), 16711935 & bb && (wb -= 8), 252645135 & bb && (wb -= 4), 858993459 & bb && (wb -= 2), 1431655765 & bb && (wb -= 1), wb
    }
    wb.INT_BITS = 32, wb.INT_MAX = 2147483647, wb.INT_MIN = -1 << 31, wb.sign = function(bb) {
      return (bb > 0) - (bb < 0)
    }, wb.abs = function(bb) {
      var wb = bb >> 31;
      return (bb ^ wb) - wb
    }, wb.min = function(bb, wb) {
      return wb ^ (bb ^ wb) & -(bb < wb)
    }, wb.max = function(bb, wb) {
      return bb ^ (bb ^ wb) & -(bb < wb)
    }, wb.isPow2 = function(bb) {
      return !(bb & bb - 1) && !!bb
    }, wb.log2 = function(bb) {
      var wb, Mb;
      return wb = (bb > 65535) << 4, wb |= Mb = ((bb >>>= wb) > 255) << 3, wb |= Mb = ((bb >>>= Mb) > 15) << 2, (wb |= Mb = ((bb >>>= Mb) > 3) << 1) | (bb >>>= Mb) >> 1
    }, wb.log10 = function(bb) {
      return bb >= 1e9 ? 9 : bb >= 1e8 ? 8 : bb >= 1e7 ? 7 : bb >= 1e6 ? 6 : bb >= 1e5 ? 5 : bb >= 1e4 ? 4 : bb >= 1e3 ? 3 : bb >= 100 ? 2 : bb >= 10 ? 1 : 0
    }, wb.popCount = function(bb) {
      return 16843009 * ((bb = (858993459 & (bb -= bb >>> 1 & 1431655765)) + (bb >>> 2 & 858993459)) + (bb >>> 4) & 252645135) >>> 24
    }, wb.countTrailingZeros = Mb, wb.nextPow2 = function(bb) {
      return bb += 0 === bb, --bb, bb |= bb >>> 1, bb |= bb >>> 2, bb |= bb >>> 4, bb |= bb >>> 8, (bb |= bb >>> 16) + 1
    }, wb.prevPow2 = function(bb) {
      return bb |= bb >>> 1, bb |= bb >>> 2, bb |= bb >>> 4, bb |= bb >>> 8, (bb |= bb >>> 16) - (bb >>> 1)
    }, wb.parity = function(bb) {
      return bb ^= bb >>> 16, bb ^= bb >>> 8, bb ^= bb >>> 4, 27030 >>> (bb &= 15) & 1
    };
    var eb = new Array(256);
    ! function(bb) {
      for (var wb = 0; wb < 256; ++wb) {
        var Mb = wb,
          eb = wb,
          Hb = 7;
        for (Mb >>>= 1; Mb; Mb >>>= 1) eb <<= 1, eb |= 1 & Mb, --Hb;
        bb[wb] = eb << Hb & 255
      }
    }(eb), wb.reverse = function(bb) {
      return eb[255 & bb] << 24 | eb[bb >>> 8 & 255] << 16 | eb[bb >>> 16 & 255] << 8 | eb[bb >>> 24 & 255]
    }, wb.interleave2 = function(bb, wb) {
      return (bb = 1431655765 & ((bb = 858993459 & ((bb = 252645135 & ((bb = 16711935 & ((bb &= 65535) | bb << 8)) | bb << 4)) | bb << 2)) | bb << 1)) | (wb = 1431655765 & ((wb = 858993459 & ((wb = 252645135 & ((wb = 16711935 & ((wb &= 65535) | wb << 8)) | wb << 4)) | wb << 2)) | wb << 1)) << 1
    }, wb.deinterleave2 = function(bb, wb) {
      return (bb = 65535 & ((bb = 16711935 & ((bb = 252645135 & ((bb = 858993459 & ((bb = bb >>> wb & 1431655765) | bb >>> 1)) | bb >>> 2)) | bb >>> 4)) | bb >>> 16)) << 16 >> 16
    }, wb.interleave3 = function(bb, wb, Mb) {
      return bb = 1227133513 & ((bb = 3272356035 & ((bb = 251719695 & ((bb = 4278190335 & ((bb &= 1023) | bb << 16)) | bb << 8)) | bb << 4)) | bb << 2), (bb |= (wb = 1227133513 & ((wb = 3272356035 & ((wb = 251719695 & ((wb = 4278190335 & ((wb &= 1023) | wb << 16)) | wb << 8)) | wb << 4)) | wb << 2)) << 1) | (Mb = 1227133513 & ((Mb = 3272356035 & ((Mb = 251719695 & ((Mb = 4278190335 & ((Mb &= 1023) | Mb << 16)) | Mb << 8)) | Mb << 4)) | Mb << 2)) << 2
    }, wb.deinterleave3 = function(bb, wb) {
      return (bb = 1023 & ((bb = 4278190335 & ((bb = 251719695 & ((bb = 3272356035 & ((bb = bb >>> wb & 1227133513) | bb >>> 2)) | bb >>> 4)) | bb >>> 8)) | bb >>> 16)) << 22 >> 22
    }, wb.nextCombination = function(bb) {
      var wb = bb | bb - 1;
      return wb + 1 | (~wb & -~wb) - 1 >>> Mb(bb) + 1
    }
  },
  39509: (bb, wb, Mb) => {
    bb.exports = function(bb, wb, Mb) {
      switch (arguments.length) {
        case 1:
          return eb = [], Lb(Hb = bb, Hb, Ib, !0), eb;
        case 2:
          return "function" === typeof wb ? Lb(bb, bb, wb, !0) : function(bb, wb) {
            return eb = [], Lb(bb, wb, Ib, !1), eb
          }(bb, wb);
        case 3:
          return Lb(bb, wb, Mb, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var Hb
    };
    var eb, Hb = Mb(39518),
      pb = Mb(39536),
      Vb = Mb(39548);

    function gb(bb, wb) {
      for (var Mb = 0; Mb < bb; ++Mb)
        if (!(wb[Mb] <= wb[Mb + bb])) return !0;
      return !1
    }

    function lb(bb, wb, Mb, eb) {
      for (var Hb = 0, pb = 0, Vb = 0, lb = bb.length; Vb < lb; ++Vb) {
        var Lb = bb[Vb];
        if (!gb(wb, Lb)) {
          for (var Ib = 0; Ib < 2 * wb; ++Ib) Mb[Hb++] = Lb[Ib];
          eb[pb++] = Vb
        }
      }
      return pb
    }

    function Lb(bb, wb, Mb, eb) {
      var gb = bb.length,
        Lb = wb.length;
      if (!(gb <= 0 || Lb <= 0)) {
        var Ib = bb[0].length >>> 1;
        if (!(Ib <= 0)) {
          var Ob, Ub = Hb.mallocDouble(2 * Ib * gb),
            tb = Hb.mallocInt32(gb);
          if ((gb = lb(bb, Ib, Ub, tb)) > 0) {
            if (1 === Ib && eb) pb.init(gb), Ob = pb.sweepComplete(Ib, Mb, 0, gb, Ub, tb, 0, gb, Ub, tb);
            else {
              var Cb = Hb.mallocDouble(2 * Ib * Lb),
                Eb = Hb.mallocInt32(Lb);
              (Lb = lb(wb, Ib, Cb, Eb)) > 0 && (pb.init(gb + Lb), Ob = 1 === Ib ? pb.sweepBipartite(Ib, Mb, 0, gb, Ub, tb, 0, Lb, Cb, Eb) : Vb(Ib, Mb, eb, gb, Ub, tb, Lb, Cb, Eb), Hb.free(Cb), Hb.free(Eb))
            }
            Hb.free(Ub), Hb.free(tb)
          }
          return Ob
        }
      }
    }

    function Ib(bb, wb) {
      eb.push([bb, wb])
    }
  },
  39550: (bb, wb) => {
    var Mb = "d",
      eb = "ax",
      Hb = "fp",
      pb = "es",
      Vb = "rs",
      gb = "re",
      lb = "rb",
      Lb = "bs",
      Ib = "be",
      Ob = "bb",
      Ub = [Mb, eb, "vv", Vb, gb, lb, "ri", Lb, Ib, Ob, "bi"];

    function tb(bb) {
      var wb = "bruteForce" + (bb ? "Full" : "Partial"),
        eb = [],
        Vb = Ub.slice();
      bb || Vb.splice(3, 0, Hb);
      var gb = ["function " + wb + "(" + Vb.join() + "){"];

      function lb(wb, Hb) {
        var Vb = function(bb, wb, eb) {
          var Hb = "bruteForce" + (bb ? "Red" : "Blue") + (wb ? "Flip" : "") + (eb ? "Full" : ""),
            Vb = ["function ", Hb, "(", Ub.join(), "){", "var ", pb, "=2*", Mb, ";"],
            gb = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            lb = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (eb ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return bb ? Vb.push(gb, "Q", ":", lb) : Vb.push(lb, "Q", ":", gb), eb ? Vb.push("if(y1<x0||x1<y0)continue;") : wb ? Vb.push("if(y0<=x0||x1<y0)continue;") : Vb.push("if(y0<x0||x1<y0)continue;"), Vb.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), wb ? Vb.push("yi,xi") : Vb.push("xi,yi"), Vb.push(");if(rv!==void 0)return rv;}}}"), {
            name: Hb,
            code: Vb.join("")
          }
        }(wb, Hb, bb);
        eb.push(Vb.code), gb.push("return " + Vb.name + "(" + Ub.join() + ");")
      }
      gb.push("if(re-rs>be-bs){"), bb ? (lb(!0, !1), gb.push("}else{"), lb(!1, !1)) : (gb.push("if(fp){"), lb(!0, !0), gb.push("}else{"), lb(!0, !1), gb.push("}}else{if(fp){"), lb(!1, !0), gb.push("}else{"), lb(!1, !1), gb.push("}")), gb.push("}}return " + wb);
      var Lb = eb.join("") + gb.join("");
      return new Function(Lb)()
    }
    wb.partial = tb(!1), wb.full = tb(!0)
  },
  39548: (bb, wb, Mb) => {
    bb.exports = function(bb, wb, Mb, pb, Ib, Rb, Db, cb, Yb) {
      ! function(bb, wb) {
        var Mb = 8 * Hb.log2(wb + 1) * (bb + 1) | 0,
          pb = Hb.nextPow2(hb * Mb);
        Xb.length < pb && (eb.free(Xb), Xb = eb.mallocInt32(pb));
        var Vb = Hb.nextPow2(zb * Mb);
        xb.length < Vb && (eb.free(xb), xb = eb.mallocDouble(Vb))
      }(bb, pb + Db);
      var Zb, fb = 0,
        Ab = 2 * bb;
      jb(fb++, 0, 0, pb, 0, Db, Mb ? 16 : 0, -1 / 0, 1 / 0), Mb || jb(fb++, 0, 0, Db, 0, pb, 1, -1 / 0, 1 / 0);
      for (; fb > 0;) {
        var Wb = (fb -= 1) * hb,
          Jb = Xb[Wb],
          Sb = Xb[Wb + 1],
          Nb = Xb[Wb + 2],
          vb = Xb[Wb + 3],
          Qb = Xb[Wb + 4],
          Gb = Xb[Wb + 5],
          qb = fb * zb,
          ab = xb[qb],
          ib = xb[qb + 1],
          ub = 1 & Gb,
          db = !!(16 & Gb),
          Pb = Ib,
          nb = Rb,
          yb = cb,
          ob = Yb;
        if (ub && (Pb = cb, nb = Yb, yb = Ib, ob = Rb), !(2 & Gb && Sb >= (Nb = Fb(bb, Jb, Sb, Nb, Pb, nb, ib))) && !(4 & Gb && (Sb = Bb(bb, Jb, Sb, Nb, Pb, nb, ab)) >= Nb)) {
          var Tb = Nb - Sb,
            kb = Qb - vb;
          if (db) {
            if (bb * Tb * (Tb + kb) < tb) {
              if (void 0 !== (Zb = lb.scanComplete(bb, Jb, wb, Sb, Nb, Pb, nb, vb, Qb, yb, ob))) return Zb;
              continue
            }
          } else {
            if (bb * Math.min(Tb, kb) < Ob) {
              if (void 0 !== (Zb = Vb(bb, Jb, wb, ub, Sb, Nb, Pb, nb, vb, Qb, yb, ob))) return Zb;
              continue
            }
            if (bb * Tb * kb < Ub) {
              if (void 0 !== (Zb = lb.scanBipartite(bb, Jb, wb, ub, Sb, Nb, Pb, nb, vb, Qb, yb, ob))) return Zb;
              continue
            }
          }
          var bw = Cb(bb, Jb, Sb, Nb, Pb, nb, ab, ib);
          if (Sb < bw)
            if (bb * (bw - Sb) < Ob) {
              if (void 0 !== (Zb = gb(bb, Jb + 1, wb, Sb, bw, Pb, nb, vb, Qb, yb, ob))) return Zb
            } else if (Jb === bb - 2) {
            if (void 0 !== (Zb = ub ? lb.sweepBipartite(bb, wb, vb, Qb, yb, ob, Sb, bw, Pb, nb) : lb.sweepBipartite(bb, wb, Sb, bw, Pb, nb, vb, Qb, yb, ob))) return Zb
          } else jb(fb++, Jb + 1, Sb, bw, vb, Qb, ub, -1 / 0, 1 / 0), jb(fb++, Jb + 1, vb, Qb, Sb, bw, 1 ^ ub, -1 / 0, 1 / 0);
          if (bw < Nb) {
            var ww = Lb(bb, Jb, vb, Qb, yb, ob),
              Mw = yb[Ab * ww + Jb],
              ew = Eb(bb, Jb, ww, Qb, yb, ob, Mw);
            if (ew < Qb && jb(fb++, Jb, bw, Nb, ew, Qb, (4 | ub) + (db ? 16 : 0), Mw, ib), vb < ww && jb(fb++, Jb, bw, Nb, vb, ww, (2 | ub) + (db ? 16 : 0), ab, Mw), ww + 1 === ew) {
              if (void 0 !== (Zb = db ? rb(bb, Jb, wb, bw, Nb, Pb, nb, ww, yb, ob[ww]) : Kb(bb, Jb, wb, ub, bw, Nb, Pb, nb, ww, yb, ob[ww]))) return Zb
            } else if (ww < ew) {
              var Hw;
              if (db) {
                if (bw < (Hw = sb(bb, Jb, bw, Nb, Pb, nb, Mw))) {
                  var pw = Eb(bb, Jb, bw, Hw, Pb, nb, Mw);
                  if (Jb === bb - 2) {
                    if (bw < pw && void 0 !== (Zb = lb.sweepComplete(bb, wb, bw, pw, Pb, nb, ww, ew, yb, ob))) return Zb;
                    if (pw < Hw && void 0 !== (Zb = lb.sweepBipartite(bb, wb, pw, Hw, Pb, nb, ww, ew, yb, ob))) return Zb
                  } else bw < pw && jb(fb++, Jb + 1, bw, pw, ww, ew, 16, -1 / 0, 1 / 0), pw < Hw && (jb(fb++, Jb + 1, pw, Hw, ww, ew, 0, -1 / 0, 1 / 0), jb(fb++, Jb + 1, ww, ew, pw, Hw, 1, -1 / 0, 1 / 0))
                }
              } else bw < (Hw = ub ? mb(bb, Jb, bw, Nb, Pb, nb, Mw) : sb(bb, Jb, bw, Nb, Pb, nb, Mw)) && (Jb === bb - 2 ? Zb = ub ? lb.sweepBipartite(bb, wb, ww, ew, yb, ob, bw, Hw, Pb, nb) : lb.sweepBipartite(bb, wb, bw, Hw, Pb, nb, ww, ew, yb, ob) : (jb(fb++, Jb + 1, bw, Hw, ww, ew, ub, -1 / 0, 1 / 0), jb(fb++, Jb + 1, ww, ew, bw, Hw, 1 ^ ub, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var eb = Mb(39518),
      Hb = Mb(39526),
      pb = Mb(39550),
      Vb = pb.partial,
      gb = pb.full,
      lb = Mb(39536),
      Lb = Mb(39556),
      Ib = Mb(39563),
      Ob = 128,
      Ub = 1 << 22,
      tb = 1 << 22,
      Cb = Ib("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      Eb = Ib("lo===p0", ["p0"]),
      Fb = Ib("lo<p0", ["p0"]),
      Bb = Ib("hi<=p0", ["p0"]),
      sb = Ib("lo<=p0&&p0<=hi", ["p0"]),
      mb = Ib("lo<p0&&p0<=hi", ["p0"]),
      hb = 6,
      zb = 2,
      Xb = eb.mallocInt32(1024),
      xb = eb.mallocDouble(1024);

    function jb(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb) {
      var Lb = hb * bb;
      Xb[Lb] = wb, Xb[Lb + 1] = Mb, Xb[Lb + 2] = eb, Xb[Lb + 3] = Hb, Xb[Lb + 4] = pb, Xb[Lb + 5] = Vb;
      var Ib = zb * bb;
      xb[Ib] = gb, xb[Ib + 1] = lb
    }

    function Kb(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb, Ib) {
      var Ob = 2 * bb,
        Ub = lb * Ob,
        tb = Lb[Ub + wb];
      bb: for (var Cb = Hb, Eb = Hb * Ob; Cb < pb; ++Cb, Eb += Ob) {
        var Fb = Vb[Eb + wb],
          Bb = Vb[Eb + wb + bb];
        if (!(tb < Fb || Bb < tb) && (!eb || tb !== Fb)) {
          for (var sb, mb = gb[Cb], hb = wb + 1; hb < bb; ++hb) {
            Fb = Vb[Eb + hb], Bb = Vb[Eb + hb + bb];
            var zb = Lb[Ub + hb],
              Xb = Lb[Ub + hb + bb];
            if (Bb < zb || Xb < Fb) continue bb
          }
          if (void 0 !== (sb = eb ? Mb(Ib, mb) : Mb(mb, Ib))) return sb
        }
      }
    }

    function rb(bb, wb, Mb, eb, Hb, pb, Vb, gb, lb, Lb) {
      var Ib = 2 * bb,
        Ob = gb * Ib,
        Ub = lb[Ob + wb];
      bb: for (var tb = eb, Cb = eb * Ib; tb < Hb; ++tb, Cb += Ib) {
        var Eb = Vb[tb];
        if (Eb !== Lb) {
          var Fb = pb[Cb + wb],
            Bb = pb[Cb + wb + bb];
          if (!(Ub < Fb || Bb < Ub)) {
            for (var sb = wb + 1; sb < bb; ++sb) {
              Fb = pb[Cb + sb], Bb = pb[Cb + sb + bb];
              var mb = lb[Ob + sb],
                hb = lb[Ob + sb + bb];
              if (Bb < mb || hb < Fb) continue bb
            }
            var zb = Mb(Eb, Lb);
            if (void 0 !== zb) return zb
          }
        }
      }
    }
  },
  39556: (bb, wb, Mb) => {
    bb.exports = function(bb, wb, Mb, Vb, gb, lb) {
      if (Vb <= Mb + 1) return Mb;
      var Lb = Mb,
        Ib = Vb,
        Ob = Vb + Mb >>> 1,
        Ub = 2 * bb,
        tb = Ob,
        Cb = gb[Ub * Ob + wb];
      for (; Lb < Ib;) {
        if (Ib - Lb < Hb) {
          pb(bb, wb, Lb, Ib, gb, lb), Cb = gb[Ub * Ob + wb];
          break
        }
        var Eb = Ib - Lb,
          Fb = Math.random() * Eb + Lb | 0,
          Bb = gb[Ub * Fb + wb],
          sb = Math.random() * Eb + Lb | 0,
          mb = gb[Ub * sb + wb],
          hb = Math.random() * Eb + Lb | 0,
          zb = gb[Ub * hb + wb];
        Bb <= mb ? zb >= mb ? (tb = sb, Cb = mb) : Bb >= zb ? (tb = Fb, Cb = Bb) : (tb = hb, Cb = zb) : mb >= zb ? (tb = sb, Cb = mb) : zb >= Bb ? (tb = Fb, Cb = Bb) : (tb = hb, Cb = zb);
        for (var Xb = Ub * (Ib - 1), xb = Ub * tb, jb = 0; jb < Ub; ++jb, ++Xb, ++xb) {
          var Kb = gb[Xb];
          gb[Xb] = gb[xb], gb[xb] = Kb
        }
        var rb = lb[Ib - 1];
        lb[Ib - 1] = lb[tb], lb[tb] = rb;
        for (Xb = Ub * (Ib - 1), xb = Ub * (tb = eb(bb, wb, Lb, Ib - 1, gb, lb, Cb)), jb = 0; jb < Ub; ++jb, ++Xb, ++xb) {
          Kb = gb[Xb];
          gb[Xb] = gb[xb], gb[xb] = Kb
        }
        rb = lb[Ib - 1];
        if (lb[Ib - 1] = lb[tb], lb[tb] = rb, Ob < tb) {
          for (Ib = tb - 1; Lb < Ib && gb[Ub * (Ib - 1) + wb] === Cb;) Ib -= 1;
          Ib += 1
        } else {
          if (!(tb < Ob)) break;
          for (Lb = tb + 1; Lb < Ib && gb[Ub * Lb + wb] === Cb;) Lb += 1
        }
      }
      return eb(bb, wb, Mb, Ob, gb, lb, gb[Ub * Ob + wb])
    };
    var eb = Mb(39563)("lo<p0", ["p0"]),
      Hb = 8;

    function pb(bb, wb, Mb, eb, Hb, pb) {
      for (var Vb = 2 * bb, gb = Vb * (Mb + 1) + wb, lb = Mb + 1; lb < eb; ++lb, gb += Vb)
        for (var Lb = Hb[gb], Ib = lb, Ob = Vb * (lb - 1); Ib > Mb && Hb[Ob + wb] > Lb; --Ib, Ob -= Vb) {
          for (var Ub = Ob, tb = Ob + Vb, Cb = 0; Cb < Vb; ++Cb, ++Ub, ++tb) {
            var Eb = Hb[Ub];
            Hb[Ub] = Hb[tb], Hb[tb] = Eb
          }
          var Fb = pb[Ib];
          pb[Ib] = pb[Ib - 1], pb[Ib - 1] = Fb
        }
    }
  },
  39563: bb => {
    bb.exports = function(bb, Mb) {
      var eb = "abcdef".split("").concat(Mb),
        Hb = [];
      bb.indexOf("lo") >= 0 && Hb.push("lo=e[k+n]");
      bb.indexOf("hi") >= 0 && Hb.push("hi=e[k+o]");
      return eb.push(wb.replace("_", Hb.join()).replace("$", bb)), Function.apply(void 0, eb)
    };
    var wb = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  39541: bb => {
    bb.exports = function(bb, eb) {
      eb <= 4 * wb ? Mb(0, eb - 1, bb) : Lb(0, eb - 1, bb)
    };
    var wb = 32;

    function Mb(bb, wb, Mb) {
      for (var eb = 2 * (bb + 1), Hb = bb + 1; Hb <= wb; ++Hb) {
        for (var pb = Mb[eb++], Vb = Mb[eb++], gb = Hb, lb = eb - 2; gb-- > bb;) {
          var Lb = Mb[lb - 2],
            Ib = Mb[lb - 1];
          if (Lb < pb) break;
          if (Lb === pb && Ib < Vb) break;
          Mb[lb] = Lb, Mb[lb + 1] = Ib, lb -= 2
        }
        Mb[lb] = pb, Mb[lb + 1] = Vb
      }
    }

    function eb(bb, wb, Mb) {
      wb *= 2;
      var eb = Mb[bb *= 2],
        Hb = Mb[bb + 1];
      Mb[bb] = Mb[wb], Mb[bb + 1] = Mb[wb + 1], Mb[wb] = eb, Mb[wb + 1] = Hb
    }

    function Hb(bb, wb, Mb) {
      wb *= 2, Mb[bb *= 2] = Mb[wb], Mb[bb + 1] = Mb[wb + 1]
    }

    function pb(bb, wb, Mb, eb) {
      wb *= 2, Mb *= 2;
      var Hb = eb[bb *= 2],
        pb = eb[bb + 1];
      eb[bb] = eb[wb], eb[bb + 1] = eb[wb + 1], eb[wb] = eb[Mb], eb[wb + 1] = eb[Mb + 1], eb[Mb] = Hb, eb[Mb + 1] = pb
    }

    function Vb(bb, wb, Mb, eb, Hb) {
      wb *= 2, Hb[bb *= 2] = Hb[wb], Hb[wb] = Mb, Hb[bb + 1] = Hb[wb + 1], Hb[wb + 1] = eb
    }

    function gb(bb, wb, Mb) {
      wb *= 2;
      var eb = Mb[bb *= 2],
        Hb = Mb[wb];
      return !(eb < Hb) && (eb !== Hb || Mb[bb + 1] > Mb[wb + 1])
    }

    function lb(bb, wb, Mb, eb) {
      var Hb = eb[bb *= 2];
      return Hb < wb || Hb === wb && eb[bb + 1] < Mb
    }

    function Lb(bb, Ib, Ob) {
      var Ub = (Ib - bb + 1) / 6 | 0,
        tb = bb + Ub,
        Cb = Ib - Ub,
        Eb = bb + Ib >> 1,
        Fb = Eb - Ub,
        Bb = Eb + Ub,
        sb = tb,
        mb = Fb,
        hb = Eb,
        zb = Bb,
        Xb = Cb,
        xb = bb + 1,
        jb = Ib - 1,
        Kb = 0;
      gb(sb, mb, Ob) && (Kb = sb, sb = mb, mb = Kb), gb(zb, Xb, Ob) && (Kb = zb, zb = Xb, Xb = Kb), gb(sb, hb, Ob) && (Kb = sb, sb = hb, hb = Kb), gb(mb, hb, Ob) && (Kb = mb, mb = hb, hb = Kb), gb(sb, zb, Ob) && (Kb = sb, sb = zb, zb = Kb), gb(hb, zb, Ob) && (Kb = hb, hb = zb, zb = Kb), gb(mb, Xb, Ob) && (Kb = mb, mb = Xb, Xb = Kb), gb(mb, hb, Ob) && (Kb = mb, mb = hb, hb = Kb), gb(zb, Xb, Ob) && (Kb = zb, zb = Xb, Xb = Kb);
      for (var rb = Ob[2 * mb], Rb = Ob[2 * mb + 1], Db = Ob[2 * zb], cb = Ob[2 * zb + 1], Yb = 2 * sb, Zb = 2 * hb, fb = 2 * Xb, Ab = 2 * tb, Wb = 2 * Eb, Jb = 2 * Cb, Sb = 0; Sb < 2; ++Sb) {
        var Nb = Ob[Yb + Sb],
          vb = Ob[Zb + Sb],
          Qb = Ob[fb + Sb];
        Ob[Ab + Sb] = Nb, Ob[Wb + Sb] = vb, Ob[Jb + Sb] = Qb
      }
      Hb(Fb, bb, Ob), Hb(Bb, Ib, Ob);
      for (var Gb = xb; Gb <= jb; ++Gb)
        if (lb(Gb, rb, Rb, Ob)) Gb !== xb && eb(Gb, xb, Ob), ++xb;
        else if (!lb(Gb, Db, cb, Ob))
        for (;;) {
          if (lb(jb, Db, cb, Ob)) {
            lb(jb, rb, Rb, Ob) ? (pb(Gb, xb, jb, Ob), ++xb, --jb) : (eb(Gb, jb, Ob), --jb);
            break
          }
          if (--jb < Gb) break
        }
      Vb(bb, xb - 1, rb, Rb, Ob), Vb(Ib, jb + 1, Db, cb, Ob), xb - 2 - bb <= wb ? Mb(bb, xb - 2, Ob) : Lb(bb, xb - 2, Ob), Ib - (jb + 2) <= wb ? Mb(jb + 2, Ib, Ob) : Lb(jb + 2, Ib, Ob), jb - xb <= wb ? Mb(xb, jb, Ob) : Lb(xb, jb, Ob)
    }
  },
  39536: (bb, wb, Mb) => {
    bb.exports = {
      init: function(bb) {
        var wb = Hb.nextPow2(bb);
        lb.length < wb && (eb.free(lb), lb = eb.mallocInt32(wb));
        Lb.length < wb && (eb.free(Lb), Lb = eb.mallocInt32(wb));
        Ib.length < wb && (eb.free(Ib), Ib = eb.mallocInt32(wb));
        Ob.length < wb && (eb.free(Ob), Ob = eb.mallocInt32(wb));
        Ub.length < wb && (eb.free(Ub), Ub = eb.mallocInt32(wb));
        tb.length < wb && (eb.free(tb), tb = eb.mallocInt32(wb));
        var Mb = 8 * wb;
        Cb.length < Mb && (eb.free(Cb), Cb = eb.mallocDouble(Mb))
      },
      sweepBipartite: function(bb, wb, Mb, eb, Hb, gb, Ub, tb, Bb, sb) {
        for (var mb = 0, hb = 2 * bb, zb = bb - 1, Xb = hb - 1, xb = Mb; xb < eb; ++xb) {
          var jb = gb[xb],
            Kb = hb * xb;
          Cb[mb++] = Hb[Kb + zb], Cb[mb++] = -(jb + 1), Cb[mb++] = Hb[Kb + Xb], Cb[mb++] = jb
        }
        for (xb = Ub; xb < tb; ++xb) {
          jb = sb[xb] + Vb;
          var rb = hb * xb;
          Cb[mb++] = Bb[rb + zb], Cb[mb++] = -jb, Cb[mb++] = Bb[rb + Xb], Cb[mb++] = jb
        }
        var Rb = mb >>> 1;
        pb(Cb, Rb);
        var Db = 0,
          cb = 0;
        for (xb = 0; xb < Rb; ++xb) {
          var Yb = 0 | Cb[2 * xb + 1];
          if (Yb >= Vb) Eb(Ib, Ob, cb--, Yb = Yb - Vb | 0);
          else if (Yb >= 0) Eb(lb, Lb, Db--, Yb);
          else if (Yb <= -Vb) {
            Yb = -Yb - Vb | 0;
            for (var Zb = 0; Zb < Db; ++Zb) {
              if (void 0 !== (fb = wb(lb[Zb], Yb))) return fb
            }
            Fb(Ib, Ob, cb++, Yb)
          } else {
            Yb = -Yb - 1 | 0;
            for (Zb = 0; Zb < cb; ++Zb) {
              var fb;
              if (void 0 !== (fb = wb(Yb, Ib[Zb]))) return fb
            }
            Fb(lb, Lb, Db++, Yb)
          }
        }
      },
      sweepComplete: function(bb, wb, Mb, eb, Hb, Vb, gb, Bb, sb, mb) {
        for (var hb = 0, zb = 2 * bb, Xb = bb - 1, xb = zb - 1, jb = Mb; jb < eb; ++jb) {
          var Kb = Vb[jb] + 1 << 1,
            rb = zb * jb;
          Cb[hb++] = Hb[rb + Xb], Cb[hb++] = -Kb, Cb[hb++] = Hb[rb + xb], Cb[hb++] = Kb
        }
        for (jb = gb; jb < Bb; ++jb) {
          Kb = mb[jb] + 1 << 1;
          var Rb = zb * jb;
          Cb[hb++] = sb[Rb + Xb], Cb[hb++] = 1 | -Kb, Cb[hb++] = sb[Rb + xb], Cb[hb++] = 1 | Kb
        }
        var Db = hb >>> 1;
        pb(Cb, Db);
        var cb = 0,
          Yb = 0,
          Zb = 0;
        for (jb = 0; jb < Db; ++jb) {
          var fb = 0 | Cb[2 * jb + 1],
            Ab = 1 & fb;
          if (jb < Db - 1 && fb >> 1 === Cb[2 * jb + 3] >> 1 && (Ab = 2, jb += 1), fb < 0) {
            for (var Wb = -(fb >> 1) - 1, Jb = 0; Jb < Zb; ++Jb) {
              if (void 0 !== (Sb = wb(Ub[Jb], Wb))) return Sb
            }
            if (0 !== Ab)
              for (Jb = 0; Jb < cb; ++Jb) {
                if (void 0 !== (Sb = wb(lb[Jb], Wb))) return Sb
              }
            if (1 !== Ab)
              for (Jb = 0; Jb < Yb; ++Jb) {
                var Sb;
                if (void 0 !== (Sb = wb(Ib[Jb], Wb))) return Sb
              }
            0 === Ab ? Fb(lb, Lb, cb++, Wb) : 1 === Ab ? Fb(Ib, Ob, Yb++, Wb) : 2 === Ab && Fb(Ub, tb, Zb++, Wb)
          } else {
            Wb = (fb >> 1) - 1;
            0 === Ab ? Eb(lb, Lb, cb--, Wb) : 1 === Ab ? Eb(Ib, Ob, Yb--, Wb) : 2 === Ab && Eb(Ub, tb, Zb--, Wb)
          }
        }
      },
      scanBipartite: function(bb, wb, Mb, eb, Hb, gb, Ib, Ob, Ub, tb, Bb, sb) {
        var mb = 0,
          hb = 2 * bb,
          zb = wb,
          Xb = wb + bb,
          xb = 1,
          jb = 1;
        eb ? jb = Vb : xb = Vb;
        for (var Kb = Hb; Kb < gb; ++Kb) {
          var rb = Kb + xb,
            Rb = hb * Kb;
          Cb[mb++] = Ib[Rb + zb], Cb[mb++] = -rb, Cb[mb++] = Ib[Rb + Xb], Cb[mb++] = rb
        }
        for (Kb = Ub; Kb < tb; ++Kb) {
          rb = Kb + jb;
          var Db = hb * Kb;
          Cb[mb++] = Bb[Db + zb], Cb[mb++] = -rb
        }
        var cb = mb >>> 1;
        pb(Cb, cb);
        var Yb = 0;
        for (Kb = 0; Kb < cb; ++Kb) {
          var Zb = 0 | Cb[2 * Kb + 1];
          if (Zb < 0) {
            var fb = !1;
            if ((rb = -Zb) >= Vb ? (fb = !eb, rb -= Vb) : (fb = !!eb, rb -= 1), fb) Fb(lb, Lb, Yb++, rb);
            else {
              var Ab = sb[rb],
                Wb = hb * rb,
                Jb = Bb[Wb + wb + 1],
                Sb = Bb[Wb + wb + 1 + bb];
              bb: for (var Nb = 0; Nb < Yb; ++Nb) {
                var vb = lb[Nb],
                  Qb = hb * vb;
                if (!(Sb < Ib[Qb + wb + 1] || Ib[Qb + wb + 1 + bb] < Jb)) {
                  for (var Gb = wb + 2; Gb < bb; ++Gb)
                    if (Bb[Wb + Gb + bb] < Ib[Qb + Gb] || Ib[Qb + Gb + bb] < Bb[Wb + Gb]) continue bb;
                  var qb, ab = Ob[vb];
                  if (void 0 !== (qb = eb ? Mb(Ab, ab) : Mb(ab, Ab))) return qb
                }
              }
            }
          } else Eb(lb, Lb, Yb--, Zb - xb)
        }
      },
      scanComplete: function(bb, wb, Mb, eb, Hb, gb, Lb, Ib, Ob, Ub, tb) {
        for (var Eb = 0, Fb = 2 * bb, Bb = wb, sb = wb + bb, mb = eb; mb < Hb; ++mb) {
          var hb = mb + Vb,
            zb = Fb * mb;
          Cb[Eb++] = gb[zb + Bb], Cb[Eb++] = -hb, Cb[Eb++] = gb[zb + sb], Cb[Eb++] = hb
        }
        for (mb = Ib; mb < Ob; ++mb) {
          hb = mb + 1;
          var Xb = Fb * mb;
          Cb[Eb++] = Ub[Xb + Bb], Cb[Eb++] = -hb
        }
        var xb = Eb >>> 1;
        pb(Cb, xb);
        var jb = 0;
        for (mb = 0; mb < xb; ++mb) {
          var Kb = 0 | Cb[2 * mb + 1];
          if (Kb < 0) {
            if ((hb = -Kb) >= Vb) lb[jb++] = hb - Vb;
            else {
              var rb = tb[hb -= 1],
                Rb = Fb * hb,
                Db = Ub[Rb + wb + 1],
                cb = Ub[Rb + wb + 1 + bb];
              bb: for (var Yb = 0; Yb < jb; ++Yb) {
                var Zb = lb[Yb],
                  fb = Lb[Zb];
                if (fb === rb) break;
                var Ab = Fb * Zb;
                if (!(cb < gb[Ab + wb + 1] || gb[Ab + wb + 1 + bb] < Db)) {
                  for (var Wb = wb + 2; Wb < bb; ++Wb)
                    if (Ub[Rb + Wb + bb] < gb[Ab + Wb] || gb[Ab + Wb + bb] < Ub[Rb + Wb]) continue bb;
                  var Jb = Mb(fb, rb);
                  if (void 0 !== Jb) return Jb
                }
              }
            }
          } else {
            for (hb = Kb - Vb, Yb = jb - 1; Yb >= 0; --Yb)
              if (lb[Yb] === hb) {
                for (Wb = Yb + 1; Wb < jb; ++Wb) lb[Wb - 1] = lb[Wb];
                break
              }-- jb
          }
        }
      }
    };
    var eb = Mb(39518),
      Hb = Mb(39526),
      pb = Mb(39541),
      Vb = 1 << 28,
      gb = 1024,
      lb = eb.mallocInt32(gb),
      Lb = eb.mallocInt32(gb),
      Ib = eb.mallocInt32(gb),
      Ob = eb.mallocInt32(gb),
      Ub = eb.mallocInt32(gb),
      tb = eb.mallocInt32(gb),
      Cb = eb.mallocDouble(8192);

    function Eb(bb, wb, Mb, eb) {
      var Hb = wb[eb],
        pb = bb[Mb - 1];
      bb[Hb] = pb, wb[pb] = Hb
    }

    function Fb(bb, wb, Mb, eb) {
      bb[Mb] = eb, wb[eb] = Mb
    }
  },
  39531: bb => {
    function wb(bb, Mb, eb) {
      var Hb = 0 | bb[eb];
      if (Hb <= 0) return [];
      var pb, Vb = new Array(Hb);
      if (eb === bb.length - 1)
        for (pb = 0; pb < Hb; ++pb) Vb[pb] = Mb;
      else
        for (pb = 0; pb < Hb; ++pb) Vb[pb] = wb(bb, Mb, eb + 1);
      return Vb
    }
    bb.exports = function(bb, Mb) {
      switch ("undefined" === typeof Mb && (Mb = 0), typeof bb) {
        case "number":
          if (bb > 0) return function(bb, wb) {
            var Mb, eb;
            for (Mb = new Array(bb), eb = 0; eb < bb; ++eb) Mb[eb] = wb;
            return Mb
          }(0 | bb, Mb);
          break;
        case "object":
          if ("number" === typeof bb.length) return wb(bb, Mb, 0)
      }
      return []
    }
  },
  39471: (bb, wb, Mb) => {
    bb.exports = function() {
      var bb = this;
      this.components = {}, this.comps = this.components;
      var wb = this.components,
        Mb = 1,
        Hb = {},
        pb = [],
        Vb = [],
        gb = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function lb(bb, Mb) {
        var eb = wb[Mb],
          pb = Hb[Mb],
          Vb = pb.hash[bb];
        Vb && (pb.remove(bb), eb.FW && (eb.multi ? (Vb.forEach((wb => {
          wb && eb.FW(bb, wb)
        })), Vb.length = 0) : eb.FW(bb, Vb)), gb.removals.push(pb), Lb())
      }

      function Lb() {
        gb.timeout || (gb.timeout = !0, setTimeout(Ib, 1))
      }

      function Ib() {
        gb.timeout = !1, Ob()
      }

      function Ob() {
        gb.multiComps.length && function(bb) {
          for (var wb = 0; wb < bb.length; wb++) {
            var {
              entID: Mb,
              data: eb
            } = bb[wb], Hb = eb.hash[Mb];
            if (Hb) {
              for (var pb = 0; pb < Hb.length; pb++) Hb[pb] || (Hb.splice(pb, 1), pb--);
              0 === Hb.length && (eb.remove(Mb), gb.removals.push(eb))
            }
          }
          bb.length = 0
        }(gb.multiComps), gb.removals.length && function(bb) {
          for (var wb = 0; wb < bb.length; wb++) {
            bb[wb].flush()
          }
          bb.length = 0
        }(gb.removals)
      }
      this.CE = Hb, this._systems = pb, this._renderSystems = Vb, this.o5 = function(wb) {
        var eb = Mb++;
        return Array.isArray(wb) && wb.forEach((wb => bb.qS(eb, wb))), eb
      }, this.deleteEntity = function(wb) {
        return Object.keys(Hb).forEach((bb => {
          Hb[bb].hash[wb] && lb(wb, bb)
        })), bb
      }, this.Veb = function(bb) {
        if (!bb) throw new Error("Missing component definition");
        var Mb = bb.name;
        if (!Mb) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof Mb) throw new Error("Component name must be a string.");
        if ("" === Mb) throw new Error("Component name must be a non-empty string.");
        if (Hb[Mb]) throw new Error(`Component ${Mb} already exists.`);
        var gb = {};
        return gb.name = Mb, gb.multi = !!bb.multi, gb.order = isNaN(bb.order) ? 99 : bb.order, gb.stateConstructor = bb.stateConstructor || null, gb.state = bb.state || {}, gb.bR = bb.bR || null, gb.FW = bb.FW || null, gb.system = bb.system || null, gb.gR = bb.gR || null, wb[Mb] = gb, Hb[Mb] = new eb, Hb[Mb]._pendingMultiCleanup = !1, Hb[Mb]._multiCleanupIDs = gb.multi ? [] : null, gb.system && (pb.push(Mb), pb.sort(((bb, Mb) => wb[bb].order - wb[Mb].order))), gb.gR && (Vb.push(Mb), Vb.sort(((bb, Mb) => wb[bb].order - wb[Mb].order))), Mb
      }, this.overwriteComponent = function(bb, Mb) {
        var eb = wb[bb];
        if (!eb) throw new Error(`Unknown component: ${bb}`);
        if (!Mb) throw new Error("Missing component definition");
        if (eb.name !== Mb.name) throw new Error("Overwriting component must use the same name property.");
        var gb = {};
        gb.name = bb, gb.multi = !!Mb.multi, gb.order = isNaN(Mb.order) ? 99 : Mb.order, gb.state = Mb.state || {}, gb.bR = Mb.bR || null, gb.FW = Mb.FW || null, gb.system = Mb.system || null, gb.gR = Mb.gR || null, wb[bb] = gb, Hb[bb]._pendingMultiCleanup = !1, Hb[bb]._multiCleanupIDs = gb.multi ? [] : null;
        var lb = pb.indexOf(bb);
        gb.system && lb < 0 && pb.push(bb), !gb.system && lb >= 0 && pb.splice(lb, 1), pb.sort(((bb, Mb) => wb[bb].order - wb[Mb].order));
        var Lb = Vb.indexOf(bb);
        gb.gR && Lb < 0 && Vb.push(bb), !gb.gR && Lb >= 0 && Vb.splice(Lb, 1), Vb.sort(((bb, Mb) => wb[bb].order - wb[Mb].order));
        var Ib = gb.state;
        return this.yJ(bb).forEach((bb => {
          for (var wb in Ib) wb in bb || (bb[wb] = Ib[wb]);
          gb.bR && gb.bR(bb.bS, bb)
        })), bb
      }, this.deleteComponent = function(Mb) {
        var eb = Hb[Mb];
        if (!eb) throw new Error(`Unknown component: ${Mb}`);
        eb.flush(), eb.list.forEach((bb => {
          bb && lb(bb.bS || bb[0].bS, Mb)
        }));
        var gb = pb.indexOf(Mb),
          Lb = Vb.indexOf(Mb);
        return gb > -1 && pb.splice(gb, 1), Lb > -1 && Vb.splice(Lb, 1), Hb[Mb].dispose(), delete Hb[Mb], delete wb[Mb], bb
      }, this.qS = function(bb, Mb, eb) {
        var pb, Vb = wb[Mb],
          gb = Hb[Mb];
        if (!gb) throw new Error(`Unknown component: ${Mb}.`);
        if (gb.hash[bb] && !Vb.multi) throw new Error(`Entity ${bb} already has component: ${Mb}.`);
        if (Vb.stateConstructor) {
          if (!(pb = new Vb.stateConstructor).hasOwnProperty("bS")) throw new Error(`Component ${Vb.name} stateConstructor type does not have property __id`);
          Object.assign(pb, Vb.state, eb)
        } else pb = {
          bS: bb,
          ...Vb.state,
          ...eb
        };
        if (pb.bS = bb, Vb.multi) {
          var lb = gb.hash[bb];
          lb || (lb = [], gb.add(bb, lb)), lb.push(pb)
        } else gb.add(bb, pb);
        return Vb.bR && Vb.bR(bb, pb), this
      }, this.eMb = function(bb, wb) {
        var Mb = Hb[wb];
        if (!Mb) throw new Error(`Unknown component: ${wb}.`);
        return !!Mb.hash[bb]
      }, this.nS = function(wb, Mb) {
        if (!Hb[Mb]) throw new Error(`Unknown component: ${Mb}.`);
        return lb(wb, Mb), bb
      }, this.getState = function(bb, wb) {
        var Mb = Hb[wb];
        if (!Mb) throw new Error(`Unknown component: ${wb}.`);
        return Mb.hash[bb]
      }, this.yJ = function(bb) {
        var wb = Hb[bb];
        if (!wb) throw new Error(`Unknown component: ${bb}.`);
        return Ob(), wb.list
      }, this.SMb = function(bb) {
        if (!Hb[bb]) throw new Error(`Unknown component: ${bb}.`);
        var wb = Hb[bb].hash;
        return bb => wb[bb]
      }, this.aMb = function(bb) {
        if (!Hb[bb]) throw new Error(`Unknown component: ${bb}.`);
        var wb = Hb[bb].hash;
        return bb => !!wb[bb]
      }, this.sO = function(Mb) {
        Ob();
        for (var eb = 0; eb < pb.length; eb++) {
          var Vb = pb[eb],
            gb = wb[Vb],
            lb = Hb[Vb];
          gb.system(Mb, lb.list), Ob()
        }
        return bb
      }, this.render = function(Mb) {
        Ob();
        for (var eb = 0; eb < Vb.length; eb++) {
          var pb = Vb[eb],
            gb = wb[pb],
            lb = Hb[pb];
          gb.gR(Mb, lb.list), Ob()
        }
        return bb
      }, this.removeMultiComponent = function(Mb, eb, pb) {
        var Vb = wb[eb],
          lb = Hb[eb];
        if (!lb) throw new Error(`Unknown component: ${eb}.`);
        if (!Vb.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(bb, wb, Mb, eb) {
          var Hb = Mb.hash[bb];
          if (Hb) {
            var pb = Hb[eb];
            pb && (Hb[eb] = null, wb.FW && wb.FW(bb, pb), gb.multiComps.push({
              entID: bb,
              data: Mb
            }), Lb())
          }
        }(Mb, Vb, lb, pb), bb
      }
    };
    var eb = Mb(39475)
  },
  39475: bb => {
    function wb(bb, wb) {
      var Mb = bb._map[wb];
      if (delete bb.hash[wb], delete bb._map[wb], Mb === bb.list.length - 1) bb.list.pop(), bb._idList.pop();
      else {
        var eb = bb.list.pop();
        bb.list[Mb] = eb;
        var Hb = bb._idList.pop();
        bb._idList[Mb] = Hb, bb._map[Hb] = Mb
      }
    }
    bb.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(bb, wb) {
        if ("number" === typeof this._map[bb]) {
          var Mb = this._map[bb];
          this.hash[bb] = wb, this.list[Mb] = wb, this._idList[Mb] = bb
        } else this._map[bb] = this.list.length, this.hash[bb] = wb, this.list.push(wb), this._idList.push(bb)
      }
      remove(bb) {
        var wb = this._map[bb];
        this.hash[bb] = null, this.list[wb] = null, this._pendingRemovals.push(bb)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var bb = 0; bb < this._pendingRemovals.length; bb++) {
          var Mb = this._pendingRemovals[bb];
          null === this.hash[Mb] && wb(this, Mb)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  39283: (bb, wb, Mb) => {
    bb = Mb.nmd(bb);
    var eb = "__lodash_hash_undefined__",
      Hb = 9007199254740991,
      pb = "[object Arguments]",
      Vb = "[object Boolean]",
      gb = "[object Date]",
      lb = "[object Function]",
      Lb = "[object GeneratorFunction]",
      Ib = "[object Map]",
      Ob = "[object Number]",
      Ub = "[object Object]",
      tb = "[object Promise]",
      Cb = "[object RegExp]",
      Eb = "[object Set]",
      Fb = "[object String]",
      Bb = "[object Symbol]",
      sb = "[object WeakMap]",
      mb = "[object ArrayBuffer]",
      hb = "[object DataView]",
      zb = "[object Float32Array]",
      Xb = "[object Float64Array]",
      xb = "[object Int8Array]",
      jb = "[object Int16Array]",
      Kb = "[object Int32Array]",
      rb = "[object Uint8Array]",
      Rb = "[object Uint8ClampedArray]",
      Db = "[object Uint16Array]",
      cb = "[object Uint32Array]",
      Yb = /\w*$/,
      Zb = /^\[object .+?Constructor\]$/,
      fb = /^(?:0|[1-9]\d*)$/,
      Ab = {};
    Ab[pb] = Ab["[object Array]"] = Ab[mb] = Ab[hb] = Ab[Vb] = Ab[gb] = Ab[zb] = Ab[Xb] = Ab[xb] = Ab[jb] = Ab[Kb] = Ab[Ib] = Ab[Ob] = Ab[Ub] = Ab[Cb] = Ab[Eb] = Ab[Fb] = Ab[Bb] = Ab[rb] = Ab[Rb] = Ab[Db] = Ab[cb] = !0, Ab["[object Error]"] = Ab[lb] = Ab[sb] = !1;
    var Wb = "object" == typeof Mb.g && Mb.g && Mb.g.Object === Object && Mb.g,
      Jb = "object" == typeof self && self && self.Object === Object && self,
      Sb = Wb || Jb || Function("return this")(),
      Nb = wb && !wb.nodeType && wb,
      vb = Nb && bb && !bb.nodeType && bb,
      Qb = vb && vb.exports === Nb;

    function Gb(bb, wb) {
      return bb.set(wb[0], wb[1]), bb
    }

    function qb(bb, wb) {
      return bb.add(wb), bb
    }

    function ab(bb, wb, Mb, eb) {
      var Hb = -1,
        pb = bb ? bb.length : 0;
      for (eb && pb && (Mb = bb[++Hb]); ++Hb < pb;) Mb = wb(Mb, bb[Hb], Hb, bb);
      return Mb
    }

    function ib(bb) {
      var wb = !1;
      if (null != bb && "function" != typeof bb.toString) try {
        wb = !!(bb + "")
      } catch (Mb) {}
      return wb
    }

    function ub(bb) {
      var wb = -1,
        Mb = Array(bb.size);
      return bb.forEach((function(bb, eb) {
        Mb[++wb] = [eb, bb]
      })), Mb
    }

    function db(bb, wb) {
      return function(Mb) {
        return bb(wb(Mb))
      }
    }

    function Pb(bb) {
      var wb = -1,
        Mb = Array(bb.size);
      return bb.forEach((function(bb) {
        Mb[++wb] = bb
      })), Mb
    }
    var nb = Array.prototype,
      yb = Function.prototype,
      ob = Object.prototype,
      Tb = Sb["__core-js_shared__"],
      kb = function() {
        var bb = /[^.]+$/.exec(Tb && Tb.keys && Tb.keys.IE_PROTO || "");
        return bb ? "Symbol(src)_1." + bb : ""
      }(),
      bw = yb.toString,
      ww = ob.hasOwnProperty,
      Mw = ob.toString,
      ew = RegExp("^" + bw.call(ww).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      Hw = Qb ? Sb.uI : void 0,
      pw = Sb.Symbol,
      Vw = Sb.Uint8Array,
      gw = db(Object.getPrototypeOf, Object),
      lw = Object.create,
      Lw = ob.propertyIsEnumerable,
      Iw = nb.splice,
      Ow = Object.getOwnPropertySymbols,
      Uw = Hw ? Hw.isBuffer : void 0,
      tw = db(Object.keys, Object),
      Cw = Gw(Sb, "DataView"),
      Ew = Gw(Sb, "Map"),
      Fw = Gw(Sb, "Promise"),
      Bw = Gw(Sb, "Set"),
      sw = Gw(Sb, "WeakMap"),
      mw = Gw(Object, "create"),
      hw = dw(Cw),
      zw = dw(Ew),
      Xw = dw(Fw),
      xw = dw(Bw),
      jw = dw(sw),
      Kw = pw ? pw.prototype : void 0,
      rw = Kw ? Kw.valueOf : void 0;

    function Rw(bb) {
      var wb = -1,
        Mb = bb ? bb.length : 0;
      for (this.clear(); ++wb < Mb;) {
        var eb = bb[wb];
        this.set(eb[0], eb[1])
      }
    }

    function Dw(bb) {
      var wb = -1,
        Mb = bb ? bb.length : 0;
      for (this.clear(); ++wb < Mb;) {
        var eb = bb[wb];
        this.set(eb[0], eb[1])
      }
    }

    function Yw(bb) {
      var wb = -1,
        Mb = bb ? bb.length : 0;
      for (this.clear(); ++wb < Mb;) {
        var eb = bb[wb];
        this.set(eb[0], eb[1])
      }
    }

    function Zw(bb) {
      this.__data__ = new Dw(bb)
    }

    function fw(bb, wb) {
      var Mb = nw(bb) || function(bb) {
          return function(bb) {
            return function(bb) {
              return !!bb && "object" == typeof bb
            }(bb) && yw(bb)
          }(bb) && ww.call(bb, "callee") && (!Lw.call(bb, "callee") || Mw.call(bb) == pb)
        }(bb) ? function(bb, wb) {
          for (var Mb = -1, eb = Array(bb); ++Mb < bb;) eb[Mb] = wb(Mb);
          return eb
        }(bb.length, String) : [],
        eb = Mb.length,
        Hb = !!eb;
      for (var Vb in bb) !wb && !ww.call(bb, Vb) || Hb && ("length" == Vb || iw(Vb, eb)) || Mb.push(Vb);
      return Mb
    }

    function Aw(bb, wb, Mb) {
      var eb = bb[wb];
      ww.call(bb, wb) && Pw(eb, Mb) && (void 0 !== Mb || wb in bb) || (bb[wb] = Mb)
    }

    function Ww(bb, wb) {
      for (var Mb = bb.length; Mb--;)
        if (Pw(bb[Mb][0], wb)) return Mb;
      return -1
    }

    function Jw(bb, wb, Mb, eb, Hb, tb, sb) {
      var Zb;
      if (eb && (Zb = tb ? eb(bb, Hb, tb, sb) : eb(bb)), void 0 !== Zb) return Zb;
      if (!kw(bb)) return bb;
      var fb = nw(bb);
      if (fb) {
        if (Zb = function(bb) {
            var wb = bb.length,
              Mb = bb.constructor(wb);
            wb && "string" == typeof bb[0] && ww.call(bb, "index") && (Mb.index = bb.index, Mb.input = bb.input);
            return Mb
          }(bb), !wb) return function(bb, wb) {
          var Mb = -1,
            eb = bb.length;
          wb || (wb = Array(eb));
          for (; ++Mb < eb;) wb[Mb] = bb[Mb];
          return wb
        }(bb, Zb)
      } else {
        var Wb = aw(bb),
          Jb = Wb == lb || Wb == Lb;
        if (ow(bb)) return function(bb, wb) {
          if (wb) return bb.slice();
          var Mb = new bb.constructor(bb.length);
          return bb.copy(Mb), Mb
        }(bb, wb);
        if (Wb == Ub || Wb == pb || Jb && !tb) {
          if (ib(bb)) return tb ? bb : {};
          if (Zb = function(bb) {
              return "function" != typeof bb.constructor || uw(bb) ? {} : (wb = gw(bb), kw(wb) ? lw(wb) : {});
              var wb
            }(Jb ? {} : bb), !wb) return function(bb, wb) {
            return vw(bb, qw(bb), wb)
          }(bb, function(bb, wb) {
            return bb && vw(wb, bM(wb), bb)
          }(Zb, bb))
        } else {
          if (!Ab[Wb]) return tb ? bb : {};
          Zb = function(bb, wb, Mb, eb) {
            var Hb = bb.constructor;
            switch (wb) {
              case mb:
                return Nw(bb);
              case Vb:
              case gb:
                return new Hb(+bb);
              case hb:
                return function(bb, wb) {
                  var Mb = wb ? Nw(bb.buffer) : bb.buffer;
                  return new bb.constructor(Mb, bb.byteOffset, bb.byteLength)
                }(bb, eb);
              case zb:
              case Xb:
              case xb:
              case jb:
              case Kb:
              case rb:
              case Rb:
              case Db:
              case cb:
                return function(bb, wb) {
                  var Mb = wb ? Nw(bb.buffer) : bb.buffer;
                  return new bb.constructor(Mb, bb.byteOffset, bb.length)
                }(bb, eb);
              case Ib:
                return function(bb, wb, Mb) {
                  var eb = wb ? Mb(ub(bb), !0) : ub(bb);
                  return ab(eb, Gb, new bb.constructor)
                }(bb, eb, Mb);
              case Ob:
              case Fb:
                return new Hb(bb);
              case Cb:
                return function(bb) {
                  var wb = new bb.constructor(bb.source, Yb.exec(bb));
                  return wb.lastIndex = bb.lastIndex, wb
                }(bb);
              case Eb:
                return function(bb, wb, Mb) {
                  var eb = wb ? Mb(Pb(bb), !0) : Pb(bb);
                  return ab(eb, qb, new bb.constructor)
                }(bb, eb, Mb);
              case Bb:
                return pb = bb, rw ? Object(rw.call(pb)) : {}
            }
            var pb
          }(bb, Wb, Jw, wb)
        }
      }
      sb || (sb = new Zw);
      var Sb = sb.get(bb);
      if (Sb) return Sb;
      if (sb.set(bb, Zb), !fb) var Nb = Mb ? function(bb) {
        return function(bb, wb, Mb) {
          var eb = wb(bb);
          return nw(bb) ? eb : function(bb, wb) {
            for (var Mb = -1, eb = wb.length, Hb = bb.length; ++Mb < eb;) bb[Hb + Mb] = wb[Mb];
            return bb
          }(eb, Mb(bb))
        }(bb, bM, qw)
      }(bb) : bM(bb);
      return function(bb, wb) {
        for (var Mb = -1, eb = bb ? bb.length : 0; ++Mb < eb && !1 !== wb(bb[Mb], Mb, bb););
      }(Nb || bb, (function(Hb, pb) {
        Nb && (Hb = bb[pb = Hb]), Aw(Zb, pb, Jw(Hb, wb, Mb, eb, pb, bb, sb))
      })), Zb
    }

    function Sw(bb) {
      return !(!kw(bb) || (wb = bb, kb && kb in wb)) && (Tw(bb) || ib(bb) ? ew : Zb).test(dw(bb));
      var wb
    }

    function Nw(bb) {
      var wb = new bb.constructor(bb.byteLength);
      return new Vw(wb).set(new Vw(bb)), wb
    }

    function vw(bb, wb, Mb, eb) {
      Mb || (Mb = {});
      for (var Hb = -1, pb = wb.length; ++Hb < pb;) {
        var Vb = wb[Hb],
          gb = eb ? eb(Mb[Vb], bb[Vb], Vb, Mb, bb) : void 0;
        Aw(Mb, Vb, void 0 === gb ? bb[Vb] : gb)
      }
      return Mb
    }

    function Qw(bb, wb) {
      var Mb = bb.__data__;
      return function(bb) {
        var wb = typeof bb;
        return "string" == wb || "number" == wb || "symbol" == wb || "boolean" == wb ? "__proto__" !== bb : null === bb
      }(wb) ? Mb["string" == typeof wb ? "string" : "hash"] : Mb.map
    }

    function Gw(bb, wb) {
      var Mb = function(bb, wb) {
        return null == bb ? void 0 : bb[wb]
      }(bb, wb);
      return Sw(Mb) ? Mb : void 0
    }
    Rw.prototype.clear = function() {
      this.__data__ = mw ? mw(null) : {}
    }, Rw.prototype.delete = function(bb) {
      return this.has(bb) && delete this.__data__[bb]
    }, Rw.prototype.get = function(bb) {
      var wb = this.__data__;
      if (mw) {
        var Mb = wb[bb];
        return Mb === eb ? void 0 : Mb
      }
      return ww.call(wb, bb) ? wb[bb] : void 0
    }, Rw.prototype.has = function(bb) {
      var wb = this.__data__;
      return mw ? void 0 !== wb[bb] : ww.call(wb, bb)
    }, Rw.prototype.set = function(bb, wb) {
      return this.__data__[bb] = mw && void 0 === wb ? eb : wb, this
    }, Dw.prototype.clear = function() {
      this.__data__ = []
    }, Dw.prototype.delete = function(bb) {
      var wb = this.__data__,
        Mb = Ww(wb, bb);
      return !(Mb < 0) && (Mb == wb.length - 1 ? wb.pop() : Iw.call(wb, Mb, 1), !0)
    }, Dw.prototype.get = function(bb) {
      var wb = this.__data__,
        Mb = Ww(wb, bb);
      return Mb < 0 ? void 0 : wb[Mb][1]
    }, Dw.prototype.has = function(bb) {
      return Ww(this.__data__, bb) > -1
    }, Dw.prototype.set = function(bb, wb) {
      var Mb = this.__data__,
        eb = Ww(Mb, bb);
      return eb < 0 ? Mb.push([bb, wb]) : Mb[eb][1] = wb, this
    }, Yw.prototype.clear = function() {
      this.__data__ = {
        hash: new Rw,
        map: new(Ew || Dw),
        string: new Rw
      }
    }, Yw.prototype.delete = function(bb) {
      return Qw(this, bb).delete(bb)
    }, Yw.prototype.get = function(bb) {
      return Qw(this, bb).get(bb)
    }, Yw.prototype.has = function(bb) {
      return Qw(this, bb).has(bb)
    }, Yw.prototype.set = function(bb, wb) {
      return Qw(this, bb).set(bb, wb), this
    }, Zw.prototype.clear = function() {
      this.__data__ = new Dw
    }, Zw.prototype.delete = function(bb) {
      return this.__data__.delete(bb)
    }, Zw.prototype.get = function(bb) {
      return this.__data__.get(bb)
    }, Zw.prototype.has = function(bb) {
      return this.__data__.has(bb)
    }, Zw.prototype.set = function(bb, wb) {
      var Mb = this.__data__;
      if (Mb instanceof Dw) {
        var eb = Mb.__data__;
        if (!Ew || eb.length < 199) return eb.push([bb, wb]), this;
        Mb = this.__data__ = new Yw(eb)
      }
      return Mb.set(bb, wb), this
    };
    var qw = Ow ? db(Ow, Object) : function() {
        return []
      },
      aw = function(bb) {
        return Mw.call(bb)
      };

    function iw(bb, wb) {
      return !!(wb = null == wb ? Hb : wb) && ("number" == typeof bb || fb.test(bb)) && bb > -1 && bb % 1 == 0 && bb < wb
    }

    function uw(bb) {
      var wb = bb && bb.constructor;
      return bb === ("function" == typeof wb && wb.prototype || ob)
    }

    function dw(bb) {
      if (null != bb) {
        try {
          return bw.call(bb)
        } catch (wb) {}
        try {
          return bb + ""
        } catch (wb) {}
      }
      return ""
    }

    function Pw(bb, wb) {
      return bb === wb || bb !== bb && wb !== wb
    }(Cw && aw(new Cw(new ArrayBuffer(1))) != hb || Ew && aw(new Ew) != Ib || Fw && aw(Fw.resolve()) != tb || Bw && aw(new Bw) != Eb || sw && aw(new sw) != sb) && (aw = function(bb) {
      var wb = Mw.call(bb),
        Mb = wb == Ub ? bb.constructor : void 0,
        eb = Mb ? dw(Mb) : void 0;
      if (eb) switch (eb) {
        case hw:
          return hb;
        case zw:
          return Ib;
        case Xw:
          return tb;
        case xw:
          return Eb;
        case jw:
          return sb
      }
      return wb
    });
    var nw = Array.isArray;

    function yw(bb) {
      return null != bb && function(bb) {
        return "number" == typeof bb && bb > -1 && bb % 1 == 0 && bb <= Hb
      }(bb.length) && !Tw(bb)
    }
    var ow = Uw || function() {
      return !1
    };

    function Tw(bb) {
      var wb = kw(bb) ? Mw.call(bb) : "";
      return wb == lb || wb == Lb
    }

    function kw(bb) {
      var wb = typeof bb;
      return !!bb && ("object" == wb || "function" == wb)
    }

    function bM(bb) {
      return yw(bb) ? fw(bb) : function(bb) {
        if (!uw(bb)) return tw(bb);
        var wb = [];
        for (var Mb in Object(bb)) ww.call(bb, Mb) && "constructor" != Mb && wb.push(Mb);
        return wb
      }(bb)
    }
    bb.exports = function(bb) {
      return Jw(bb, !0, !0)
    }
  },
  39667: bb => {
    function wb(bb, wb, Mb) {
      for (var eb = bb.length, Hb = -1 / 0, pb = 1 / 0, Vb = 0; Vb < eb; Vb++) {
        var gb = (Mb[0][Vb] - bb[Vb]) / wb[Vb],
          lb = (Mb[1][Vb] - bb[Vb]) / wb[Vb];
        if (gb > lb) {
          var Lb = gb;
          gb = lb, lb = Lb
        }
        if (lb < Hb || gb > pb) return 1 / 0;
        gb > Hb && (Hb = gb), lb < pb && (pb = lb)
      }
      return Hb > pb ? 1 / 0 : Hb
    }
    bb.exports = function(bb, Mb, eb, Hb) {
      var pb = wb(Mb, eb, Hb);
      if (pb === 1 / 0) bb = null;
      else {
        bb = bb || [];
        for (var Vb = 0; Vb < Mb.length; Vb++) bb[Vb] = Mb[Vb] + eb[Vb] * pb
      }
      return bb
    }, bb.exports.distance = wb
  },
  38961: (bb, wb, Mb) => {
    var eb = Mb(38967);

    function Hb(bb) {
      for (var wb, Mb, Hb = 0, pb = bb.length, Vb = 0; Vb < bb.length;) {
        for (wb = bb[Vb], Mb = 0; Vb < pb && bb[Vb] === wb;) ++Vb, ++Mb;
        Hb += eb.log2(Mb) / 7 | 0, Hb += eb.log2(wb >>> 0) / 7 | 0, Hb += 2
      }
      return Hb
    }
    wb.size = Hb, wb.encode = function(bb, wb) {
      wb || (wb = new Uint8Array(Hb(bb)));
      for (var Mb, eb, pb = 0, Vb = wb.length, gb = 0; gb < bb.length;) {
        for (Mb = bb[gb], eb = 0; gb < bb.length && bb[gb] === Mb;) ++gb, ++eb;
        for (; pb < Vb && eb >= 128;) wb[pb++] = 128 + (127 & eb), eb >>>= 7;
        if (pb >= Vb) throw new Error("RLE buffer overflow");
        for (wb[pb++] = eb, Mb >>>= 0; pb < Vb && Mb >= 128;) wb[pb++] = 128 + (127 & Mb), Mb >>>= 7;
        if (pb >= Vb) throw new Error("RLE buffer overflow");
        wb[pb++] = Mb
      }
      return wb
    }, wb.decode = function(bb, wb) {
      for (var Mb, eb, Hb, pb, Vb = wb.length, gb = bb.length, lb = 0, Lb = 0; Lb < gb;) {
        for (Mb = 0, eb = 0; Lb < gb && bb[Lb] >= 128;) Mb += (127 & bb[Lb++]) << eb, eb += 7;
        if (Mb += bb[Lb++] << eb, Lb >= gb) throw new Error("RLE buffer underrun");
        if (lb + Mb > Vb) throw new Error("Chunk buffer overflow");
        for (Hb = 0, eb = 0; Lb < gb && bb[Lb] >= 128;) Hb += (127 & bb[Lb++]) << eb, eb += 7;
        if (Lb >= gb) throw new Error("RLE buffer underrun");
        for (Hb += bb[Lb++] << eb, pb = 0; pb < Mb; ++pb) wb[lb++] = Hb
      }
      return wb
    }
  },
  38967: (bb, wb) => {
    function Mb(bb) {
      var wb = 32;
      return (bb &= -bb) && wb--, 65535 & bb && (wb -= 16), 16711935 & bb && (wb -= 8), 252645135 & bb && (wb -= 4), 858993459 & bb && (wb -= 2), 1431655765 & bb && (wb -= 1), wb
    }
    wb.INT_BITS = 32, wb.INT_MAX = 2147483647, wb.INT_MIN = -1 << 31, wb.sign = function(bb) {
      return (bb > 0) - (bb < 0)
    }, wb.abs = function(bb) {
      var wb = bb >> 31;
      return (bb ^ wb) - wb
    }, wb.min = function(bb, wb) {
      return wb ^ (bb ^ wb) & -(bb < wb)
    }, wb.max = function(bb, wb) {
      return bb ^ (bb ^ wb) & -(bb < wb)
    }, wb.isPow2 = function(bb) {
      return !(bb & bb - 1) && !!bb
    }, wb.log2 = function(bb) {
      var wb, Mb;
      return wb = (bb > 65535) << 4, wb |= Mb = ((bb >>>= wb) > 255) << 3, wb |= Mb = ((bb >>>= Mb) > 15) << 2, (wb |= Mb = ((bb >>>= Mb) > 3) << 1) | (bb >>>= Mb) >> 1
    }, wb.log10 = function(bb) {
      return bb >= 1e9 ? 9 : bb >= 1e8 ? 8 : bb >= 1e7 ? 7 : bb >= 1e6 ? 6 : bb >= 1e5 ? 5 : bb >= 1e4 ? 4 : bb >= 1e3 ? 3 : bb >= 100 ? 2 : bb >= 10 ? 1 : 0
    }, wb.popCount = function(bb) {
      return 16843009 * ((bb = (858993459 & (bb -= bb >>> 1 & 1431655765)) + (bb >>> 2 & 858993459)) + (bb >>> 4) & 252645135) >>> 24
    }, wb.countTrailingZeros = Mb, wb.nextPow2 = function(bb) {
      return bb += 0 === bb, --bb, bb |= bb >>> 1, bb |= bb >>> 2, bb |= bb >>> 4, bb |= bb >>> 8, (bb |= bb >>> 16) + 1
    }, wb.prevPow2 = function(bb) {
      return bb |= bb >>> 1, bb |= bb >>> 2, bb |= bb >>> 4, bb |= bb >>> 8, (bb |= bb >>> 16) - (bb >>> 1)
    }, wb.parity = function(bb) {
      return bb ^= bb >>> 16, bb ^= bb >>> 8, bb ^= bb >>> 4, 27030 >>> (bb &= 15) & 1
    };
    var eb = new Array(256);
    ! function(bb) {
      for (var wb = 0; wb < 256; ++wb) {
        var Mb = wb,
          eb = wb,
          Hb = 7;
        for (Mb >>>= 1; Mb; Mb >>>= 1) eb <<= 1, eb |= 1 & Mb, --Hb;
        bb[wb] = eb << Hb & 255
      }
    }(eb), wb.reverse = function(bb) {
      return eb[255 & bb] << 24 | eb[bb >>> 8 & 255] << 16 | eb[bb >>> 16 & 255] << 8 | eb[bb >>> 24 & 255]
    }, wb.interleave2 = function(bb, wb) {
      return (bb = 1431655765 & ((bb = 858993459 & ((bb = 252645135 & ((bb = 16711935 & ((bb &= 65535) | bb << 8)) | bb << 4)) | bb << 2)) | bb << 1)) | (wb = 1431655765 & ((wb = 858993459 & ((wb = 252645135 & ((wb = 16711935 & ((wb &= 65535) | wb << 8)) | wb << 4)) | wb << 2)) | wb << 1)) << 1
    }, wb.deinterleave2 = function(bb, wb) {
      return (bb = 65535 & ((bb = 16711935 & ((bb = 252645135 & ((bb = 858993459 & ((bb = bb >>> wb & 1431655765) | bb >>> 1)) | bb >>> 2)) | bb >>> 4)) | bb >>> 16)) << 16 >> 16
    }, wb.interleave3 = function(bb, wb, Mb) {
      return bb = 1227133513 & ((bb = 3272356035 & ((bb = 251719695 & ((bb = 4278190335 & ((bb &= 1023) | bb << 16)) | bb << 8)) | bb << 4)) | bb << 2), (bb |= (wb = 1227133513 & ((wb = 3272356035 & ((wb = 251719695 & ((wb = 4278190335 & ((wb &= 1023) | wb << 16)) | wb << 8)) | wb << 4)) | wb << 2)) << 1) | (Mb = 1227133513 & ((Mb = 3272356035 & ((Mb = 251719695 & ((Mb = 4278190335 & ((Mb &= 1023) | Mb << 16)) | Mb << 8)) | Mb << 4)) | Mb << 2)) << 2
    }, wb.deinterleave3 = function(bb, wb) {
      return (bb = 1023 & ((bb = 4278190335 & ((bb = 251719695 & ((bb = 3272356035 & ((bb = bb >>> wb & 1227133513) | bb >>> 2)) | bb >>> 4)) | bb >>> 8)) | bb >>> 16)) << 22 >> 22
    }, wb.nextCombination = function(bb) {
      var wb = bb | bb - 1;
      return wb + 1 | (~wb & -~wb) - 1 >>> Mb(bb) + 1
    }
  },
  38401: (bb, wb, Mb) => {
    Mb.d(wb, {
      Color3: () => eb.e,
      c: () => eb.f
    });
    var eb = Mb(38406);
    (0, eb.h)()
  },
  38994: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb
    });
    var eb = Mb(39001);
    class Hb {
      static GetPlanes(bb) {
        const wb = [];
        for (let Mb = 0; Mb < 6; Mb++) wb.push(new eb.d(0, 0, 0, 0));
        return Hb.GetPlanesToRef(bb, wb), wb
      }
      static GetNearPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] + Mb[2], wb.normal.y = Mb[7] + Mb[6], wb.normal.z = Mb[11] + Mb[10], wb.d = Mb[15] + Mb[14], wb.normalize()
      }
      static GetFarPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] - Mb[2], wb.normal.y = Mb[7] - Mb[6], wb.normal.z = Mb[11] - Mb[10], wb.d = Mb[15] - Mb[14], wb.normalize()
      }
      static GetLeftPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] + Mb[0], wb.normal.y = Mb[7] + Mb[4], wb.normal.z = Mb[11] + Mb[8], wb.d = Mb[15] + Mb[12], wb.normalize()
      }
      static GetRightPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] - Mb[0], wb.normal.y = Mb[7] - Mb[4], wb.normal.z = Mb[11] - Mb[8], wb.d = Mb[15] - Mb[12], wb.normalize()
      }
      static GetTopPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] - Mb[1], wb.normal.y = Mb[7] - Mb[5], wb.normal.z = Mb[11] - Mb[9], wb.d = Mb[15] - Mb[13], wb.normalize()
      }
      static GetBottomPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] + Mb[1], wb.normal.y = Mb[7] + Mb[5], wb.normal.z = Mb[11] + Mb[9], wb.d = Mb[15] + Mb[13], wb.normalize()
      }
      static GetPlanesToRef(bb, wb) {
        Hb.GetNearPlaneToRef(bb, wb[0]), Hb.GetFarPlaneToRef(bb, wb[1]), Hb.GetLeftPlaneToRef(bb, wb[2]), Hb.GetRightPlaneToRef(bb, wb[3]), Hb.GetTopPlaneToRef(bb, wb[4]), Hb.GetBottomPlaneToRef(bb, wb[5])
      }
      static IsPointInFrustum(bb, wb) {
        for (let Mb = 0; Mb < 6; Mb++)
          if (wb[Mb].dotCoordinate(bb) < 0) return !1;
        return !0
      }
    }
  },
  39001: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb
    });
    var eb = Mb(38285);
    class Hb {
      constructor(bb, wb, Mb, Hb) {
        this.normal = new eb.o(bb, wb, Mb), this.d = Hb
      }
      ppb() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Hb(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let wb = 0;
        return 0 !== bb && (wb = 1 / bb), this.normal.x *= wb, this.normal.y *= wb, this.normal.z *= wb, this.d *= wb, this
      }
      transform(bb) {
        const wb = Hb._TmpMatrix;
        bb.invertToRef(wb);
        const Mb = wb.m,
          eb = this.normal.x,
          pb = this.normal.y,
          Vb = this.normal.z,
          gb = this.d,
          lb = eb * Mb[0] + pb * Mb[1] + Vb * Mb[2] + gb * Mb[3],
          Lb = eb * Mb[4] + pb * Mb[5] + Vb * Mb[6] + gb * Mb[7],
          Ib = eb * Mb[8] + pb * Mb[9] + Vb * Mb[10] + gb * Mb[11],
          Ob = eb * Mb[12] + pb * Mb[13] + Vb * Mb[14] + gb * Mb[15];
        return new Hb(lb, Lb, Ib, Ob)
      }
      dotCoordinate(bb) {
        return this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z + this.d
      }
      copyFromPoints(bb, wb, Mb) {
        const eb = wb.x - bb.x,
          Hb = wb.y - bb.y,
          pb = wb.z - bb.z,
          Vb = Mb.x - bb.x,
          gb = Mb.y - bb.y,
          lb = Mb.z - bb.z,
          Lb = Hb * lb - pb * gb,
          Ib = pb * Vb - eb * lb,
          Ob = eb * gb - Hb * Vb,
          Ub = Math.sqrt(Lb * Lb + Ib * Ib + Ob * Ob);
        let tb;
        return tb = 0 !== Ub ? 1 / Ub : 0, this.normal.x = Lb * tb, this.normal.y = Ib * tb, this.normal.z = Ob * tb, this.d = -(this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z), this
      }
      isFrontFacingTo(bb, wb) {
        return eb.o.Dot(this.normal, bb) <= wb
      }
      signedDistanceTo(bb) {
        return eb.o.Dot(bb, this.normal) + this.d
      }
      static FromArray(bb) {
        return new Hb(bb[0], bb[1], bb[2], bb[3])
      }
      static FromPoints(bb, wb, Mb) {
        const eb = new Hb(0, 0, 0, 0);
        return eb.copyFromPoints(bb, wb, Mb), eb
      }
      static FromPositionAndNormal(bb, wb) {
        const Mb = new Hb(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(bb, wb, Mb)
      }
      static FromPositionAndNormalToRef(bb, wb, Mb) {
        return Mb.normal.eZ(wb), Mb.normal.normalize(), Mb.d = -bb.dot(Mb.normal), Mb
      }
      static SignedDistanceToPlaneFromPositionAndNormal(bb, wb, Mb) {
        const Hb = -(wb.x * bb.x + wb.y * bb.y + wb.z * bb.z);
        return eb.o.Dot(Mb, wb) + Hb
      }
    }
    Hb._TmpMatrix = eb.b.Identity()
  },
  38281: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      Matrix: () => eb.b,
      Quaternion: () => eb.e,
      RegisterMathVector: () => eb.g,
      TmpVectors: () => eb.j,
      Vector2: () => eb.m,
      YC: () => eb.o,
      Vector4: () => eb.q
    });
    var eb = Mb(38285);
    (0, eb.g)()
  },
  39323: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb
    });
    class eb {
      constructor(bb, wb, Mb, eb) {
        this.x = bb, this.y = wb, this.width = Mb, this.height = eb
      }
      toGlobal(bb, wb) {
        return new eb(this.x * bb, this.y * wb, this.width * bb, this.height * wb)
      }
      toGlobalToRef(bb, wb, Mb) {
        return Mb.x = this.x * bb, Mb.y = this.y * wb, Mb.width = this.width * bb, Mb.height = this.height * wb, this
      }
      clone() {
        return new eb(this.x, this.y, this.width, this.height)
      }
    }
  },
  39148: (bb, wb, Mb) => {
    function eb() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (bb => {
        const wb = 16 * Math.random() | 0;
        return ("x" === bb ? wb : 3 & wb | 8).toString(16)
      }))
    }
    Mb.d(wb, {
      c: () => eb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);