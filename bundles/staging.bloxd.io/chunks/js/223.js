/*! For license information please see halsg.223.13ded7ab.chunk.js.LICENSE.txt */
export const id = 223;
export const ids = [223, 230];
export const modules = {
  37904: bb => {
    bb.exports = function(bb) {
      return null != bb && null != bb.constructor && "function" === typeof bb.constructor.isBuffer && bb.constructor.isBuffer(bb)
    }
  },
  37887: (bb, ub, hb) => {
    var Bb = hb(37896),
      Ob = hb(37900),
      Gb = hb(37904);
    hb.g.__TYPEDARRAY_POOL || (hb.g.__TYPEDARRAY_POOL = {
      UINT8: Ob([32, 0]),
      UINT16: Ob([32, 0]),
      UINT32: Ob([32, 0]),
      INT8: Ob([32, 0]),
      INT16: Ob([32, 0]),
      INT32: Ob([32, 0]),
      FLOAT: Ob([32, 0]),
      DOUBLE: Ob([32, 0]),
      DATA: Ob([32, 0]),
      UINT8C: Ob([32, 0]),
      BUFFER: Ob([32, 0])
    });
    var Ub = "undefined" !== typeof Uint8ClampedArray,
      Lb = hb.g.__TYPEDARRAY_POOL;
    Lb.UINT8C || (Lb.UINT8C = Ob([32, 0])), Lb.BUFFER || (Lb.BUFFER = Ob([32, 0]));
    var Yb = Lb.DATA,
      Sb = Lb.BUFFER;

    function ab(bb) {
      if (bb) {
        var ub = bb.length || bb.byteLength,
          hb = Bb.log2(ub);
        Yb[hb].push(bb)
      }
    }

    function Hb(bb) {
      bb = Bb.nextPow2(bb);
      var ub = Bb.log2(bb),
        hb = Yb[ub];
      return hb.length > 0 ? hb.pop() : new ArrayBuffer(bb)
    }

    function wb(bb) {
      return new Uint8Array(Hb(bb), 0, bb)
    }

    function Zb(bb) {
      return new Uint16Array(Hb(2 * bb), 0, bb)
    }

    function Xb(bb) {
      return new Uint32Array(Hb(4 * bb), 0, bb)
    }

    function pb(bb) {
      return new Int8Array(Hb(bb), 0, bb)
    }

    function ob(bb) {
      return new Int16Array(Hb(2 * bb), 0, bb)
    }

    function Ab(bb) {
      return new Int32Array(Hb(4 * bb), 0, bb)
    }

    function lb(bb) {
      return new Float32Array(Hb(4 * bb), 0, bb)
    }

    function Kb(bb) {
      return new Float64Array(Hb(8 * bb), 0, bb)
    }

    function Wb(bb) {
      return Ub ? new Uint8ClampedArray(Hb(bb), 0, bb) : wb(bb)
    }

    function Cb(bb) {
      return new DataView(Hb(bb), 0, bb)
    }
    ub.free = function(bb) {
      if (Gb(bb)) Sb[Bb.log2(bb.length)].push(bb);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(bb) && (bb = bb.buffer), !bb) return;
        var ub = bb.length || bb.byteLength,
          hb = 0 | Bb.log2(ub);
        Yb[hb].push(bb)
      }
    }, ub.freeUint8 = ub.freeUint16 = ub.freeUint32 = ub.freeInt8 = ub.freeInt16 = ub.freeInt32 = ub.freeFloat32 = ub.freeFloat = ub.freeFloat64 = ub.freeDouble = ub.freeUint8Clamped = ub.freeDataView = function(bb) {
      ab(bb.buffer)
    }, ub.freeArrayBuffer = ab, ub.freeBuffer = function(bb) {
      Sb[Bb.log2(bb.length)].push(bb)
    }, ub.malloc = function(bb, ub) {
      if (void 0 === ub || "arraybuffer" === ub) return Hb(bb);
      switch (ub) {
        case "uint8":
          return wb(bb);
        case "uint16":
          return Zb(bb);
        case "uint32":
          return Xb(bb);
        case "int8":
          return pb(bb);
        case "int16":
          return ob(bb);
        case "int32":
          return Ab(bb);
        case "float":
        case "float32":
          return lb(bb);
        case "double":
        case "float64":
          return Kb(bb);
        case "uint8_clamped":
          return Wb(bb);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return Cb(bb);
        default:
          return null
      }
      return null
    }, ub.mallocArrayBuffer = Hb, ub.mallocUint8 = wb, ub.mallocUint16 = Zb, ub.mallocUint32 = Xb, ub.mallocInt8 = pb, ub.mallocInt16 = ob, ub.mallocInt32 = Ab, ub.mallocFloat32 = ub.mallocFloat = lb, ub.mallocFloat64 = ub.mallocDouble = Kb, ub.mallocUint8Clamped = Wb, ub.mallocDataView = Cb, ub.clearCache = function() {
      for (var bb = 0; bb < 32; ++bb) Lb.UINT8[bb].length = 0, Lb.UINT16[bb].length = 0, Lb.UINT32[bb].length = 0, Lb.INT8[bb].length = 0, Lb.INT16[bb].length = 0, Lb.INT32[bb].length = 0, Lb.FLOAT[bb].length = 0, Lb.DOUBLE[bb].length = 0, Lb.UINT8C[bb].length = 0, Yb[bb].length = 0, Sb[bb].length = 0
    }
  },
  37896: (bb, ub) => {
    function hb(bb) {
      var ub = 32;
      return (bb &= -bb) && ub--, 65535 & bb && (ub -= 16), 16711935 & bb && (ub -= 8), 252645135 & bb && (ub -= 4), 858993459 & bb && (ub -= 2), 1431655765 & bb && (ub -= 1), ub
    }
    ub.INT_BITS = 32, ub.INT_MAX = 2147483647, ub.INT_MIN = -1 << 31, ub.sign = function(bb) {
      return (bb > 0) - (bb < 0)
    }, ub.abs = function(bb) {
      var ub = bb >> 31;
      return (bb ^ ub) - ub
    }, ub.min = function(bb, ub) {
      return ub ^ (bb ^ ub) & -(bb < ub)
    }, ub.max = function(bb, ub) {
      return bb ^ (bb ^ ub) & -(bb < ub)
    }, ub.isPow2 = function(bb) {
      return !(bb & bb - 1) && !!bb
    }, ub.log2 = function(bb) {
      var ub, hb;
      return ub = (bb > 65535) << 4, ub |= hb = ((bb >>>= ub) > 255) << 3, ub |= hb = ((bb >>>= hb) > 15) << 2, (ub |= hb = ((bb >>>= hb) > 3) << 1) | (bb >>>= hb) >> 1
    }, ub.log10 = function(bb) {
      return bb >= 1e9 ? 9 : bb >= 1e8 ? 8 : bb >= 1e7 ? 7 : bb >= 1e6 ? 6 : bb >= 1e5 ? 5 : bb >= 1e4 ? 4 : bb >= 1e3 ? 3 : bb >= 100 ? 2 : bb >= 10 ? 1 : 0
    }, ub.popCount = function(bb) {
      return 16843009 * ((bb = (858993459 & (bb -= bb >>> 1 & 1431655765)) + (bb >>> 2 & 858993459)) + (bb >>> 4) & 252645135) >>> 24
    }, ub.countTrailingZeros = hb, ub.nextPow2 = function(bb) {
      return bb += 0 === bb, --bb, bb |= bb >>> 1, bb |= bb >>> 2, bb |= bb >>> 4, bb |= bb >>> 8, (bb |= bb >>> 16) + 1
    }, ub.prevPow2 = function(bb) {
      return bb |= bb >>> 1, bb |= bb >>> 2, bb |= bb >>> 4, bb |= bb >>> 8, (bb |= bb >>> 16) - (bb >>> 1)
    }, ub.parity = function(bb) {
      return bb ^= bb >>> 16, bb ^= bb >>> 8, bb ^= bb >>> 4, 27030 >>> (bb &= 15) & 1
    };
    var Bb = new Array(256);
    ! function(bb) {
      for (var ub = 0; ub < 256; ++ub) {
        var hb = ub,
          Bb = ub,
          Ob = 7;
        for (hb >>>= 1; hb; hb >>>= 1) Bb <<= 1, Bb |= 1 & hb, --Ob;
        bb[ub] = Bb << Ob & 255
      }
    }(Bb), ub.reverse = function(bb) {
      return Bb[255 & bb] << 24 | Bb[bb >>> 8 & 255] << 16 | Bb[bb >>> 16 & 255] << 8 | Bb[bb >>> 24 & 255]
    }, ub.interleave2 = function(bb, ub) {
      return (bb = 1431655765 & ((bb = 858993459 & ((bb = 252645135 & ((bb = 16711935 & ((bb &= 65535) | bb << 8)) | bb << 4)) | bb << 2)) | bb << 1)) | (ub = 1431655765 & ((ub = 858993459 & ((ub = 252645135 & ((ub = 16711935 & ((ub &= 65535) | ub << 8)) | ub << 4)) | ub << 2)) | ub << 1)) << 1
    }, ub.deinterleave2 = function(bb, ub) {
      return (bb = 65535 & ((bb = 16711935 & ((bb = 252645135 & ((bb = 858993459 & ((bb = bb >>> ub & 1431655765) | bb >>> 1)) | bb >>> 2)) | bb >>> 4)) | bb >>> 16)) << 16 >> 16
    }, ub.interleave3 = function(bb, ub, hb) {
      return bb = 1227133513 & ((bb = 3272356035 & ((bb = 251719695 & ((bb = 4278190335 & ((bb &= 1023) | bb << 16)) | bb << 8)) | bb << 4)) | bb << 2), (bb |= (ub = 1227133513 & ((ub = 3272356035 & ((ub = 251719695 & ((ub = 4278190335 & ((ub &= 1023) | ub << 16)) | ub << 8)) | ub << 4)) | ub << 2)) << 1) | (hb = 1227133513 & ((hb = 3272356035 & ((hb = 251719695 & ((hb = 4278190335 & ((hb &= 1023) | hb << 16)) | hb << 8)) | hb << 4)) | hb << 2)) << 2
    }, ub.deinterleave3 = function(bb, ub) {
      return (bb = 1023 & ((bb = 4278190335 & ((bb = 251719695 & ((bb = 3272356035 & ((bb = bb >>> ub & 1227133513) | bb >>> 2)) | bb >>> 4)) | bb >>> 8)) | bb >>> 16)) << 22 >> 22
    }, ub.nextCombination = function(bb) {
      var ub = bb | bb - 1;
      return ub + 1 | (~ub & -~ub) - 1 >>> hb(bb) + 1
    }
  },
  37878: (bb, ub, hb) => {
    bb.exports = function(bb, ub, hb) {
      switch (arguments.length) {
        case 1:
          return Bb = [], Sb(Ob = bb, Ob, ab, !0), Bb;
        case 2:
          return "function" === typeof ub ? Sb(bb, bb, ub, !0) : function(bb, ub) {
            return Bb = [], Sb(bb, ub, ab, !1), Bb
          }(bb, ub);
        case 3:
          return Sb(bb, ub, hb, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var Ob
    };
    var Bb, Ob = hb(37887),
      Gb = hb(37911),
      Ub = hb(37918);

    function Lb(bb, ub) {
      for (var hb = 0; hb < bb; ++hb)
        if (!(ub[hb] <= ub[hb + bb])) return !0;
      return !1
    }

    function Yb(bb, ub, hb, Bb) {
      for (var Ob = 0, Gb = 0, Ub = 0, Yb = bb.length; Ub < Yb; ++Ub) {
        var Sb = bb[Ub];
        if (!Lb(ub, Sb)) {
          for (var ab = 0; ab < 2 * ub; ++ab) hb[Ob++] = Sb[ab];
          Bb[Gb++] = Ub
        }
      }
      return Gb
    }

    function Sb(bb, ub, hb, Bb) {
      var Lb = bb.length,
        Sb = ub.length;
      if (!(Lb <= 0 || Sb <= 0)) {
        var ab = bb[0].length >>> 1;
        if (!(ab <= 0)) {
          var Hb, wb = Ob.mallocDouble(2 * ab * Lb),
            Zb = Ob.mallocInt32(Lb);
          if ((Lb = Yb(bb, ab, wb, Zb)) > 0) {
            if (1 === ab && Bb) Gb.init(Lb), Hb = Gb.sweepComplete(ab, hb, 0, Lb, wb, Zb, 0, Lb, wb, Zb);
            else {
              var Xb = Ob.mallocDouble(2 * ab * Sb),
                pb = Ob.mallocInt32(Sb);
              (Sb = Yb(ub, ab, Xb, pb)) > 0 && (Gb.init(Lb + Sb), Hb = 1 === ab ? Gb.sweepBipartite(ab, hb, 0, Lb, wb, Zb, 0, Sb, Xb, pb) : Ub(ab, hb, Bb, Lb, wb, Zb, Sb, Xb, pb), Ob.free(Xb), Ob.free(pb))
            }
            Ob.free(wb), Ob.free(Zb)
          }
          return Hb
        }
      }
    }

    function ab(bb, ub) {
      Bb.push([bb, ub])
    }
  },
  37927: (bb, ub) => {
    var hb = "d",
      Bb = "ax",
      Ob = "fp",
      Gb = "es",
      Ub = "rs",
      Lb = "re",
      Yb = "rb",
      Sb = "bs",
      ab = "be",
      Hb = "bb",
      wb = [hb, Bb, "vv", Ub, Lb, Yb, "ri", Sb, ab, Hb, "bi"];

    function Zb(bb) {
      var ub = "bruteForce" + (bb ? "Full" : "Partial"),
        Bb = [],
        Ub = wb.slice();
      bb || Ub.splice(3, 0, Ob);
      var Lb = ["function " + ub + "(" + Ub.join() + "){"];

      function Yb(ub, Ob) {
        var Ub = function(bb, ub, Bb) {
          var Ob = "bruteForce" + (bb ? "Red" : "Blue") + (ub ? "Flip" : "") + (Bb ? "Full" : ""),
            Ub = ["function ", Ob, "(", wb.join(), "){", "var ", Gb, "=2*", hb, ";"],
            Lb = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            Yb = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (Bb ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return bb ? Ub.push(Lb, "Q", ":", Yb) : Ub.push(Yb, "Q", ":", Lb), Bb ? Ub.push("if(y1<x0||x1<y0)continue;") : ub ? Ub.push("if(y0<=x0||x1<y0)continue;") : Ub.push("if(y0<x0||x1<y0)continue;"), Ub.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), ub ? Ub.push("yi,xi") : Ub.push("xi,yi"), Ub.push(");if(rv!==void 0)return rv;}}}"), {
            name: Ob,
            code: Ub.join("")
          }
        }(ub, Ob, bb);
        Bb.push(Ub.code), Lb.push("return " + Ub.name + "(" + wb.join() + ");")
      }
      Lb.push("if(re-rs>be-bs){"), bb ? (Yb(!0, !1), Lb.push("}else{"), Yb(!1, !1)) : (Lb.push("if(fp){"), Yb(!0, !0), Lb.push("}else{"), Yb(!0, !1), Lb.push("}}else{if(fp){"), Yb(!1, !0), Lb.push("}else{"), Yb(!1, !1), Lb.push("}")), Lb.push("}}return " + ub);
      var Sb = Bb.join("") + Lb.join("");
      return new Function(Sb)()
    }
    ub.partial = Zb(!1), ub.full = Zb(!0)
  },
  37918: (bb, ub, hb) => {
    bb.exports = function(bb, ub, hb, Gb, ab, xb, zb, gb, ib) {
      ! function(bb, ub) {
        var hb = 8 * Ob.log2(ub + 1) * (bb + 1) | 0,
          Gb = Ob.nextPow2(Wb * hb);
        db.length < Gb && (Bb.free(db), db = Bb.mallocInt32(Gb));
        var Ub = Ob.nextPow2(Cb * hb);
        rb.length < Ub && (Bb.free(rb), rb = Bb.mallocDouble(Ub))
      }(bb, Gb + zb);
      var vb, tb = 0,
        Jb = 2 * bb;
      jb(tb++, 0, 0, Gb, 0, zb, hb ? 16 : 0, -1 / 0, 1 / 0), hb || jb(tb++, 0, 0, zb, 0, Gb, 1, -1 / 0, 1 / 0);
      for (; tb > 0;) {
        var eb = (tb -= 1) * Wb,
          Nb = db[eb],
          sb = db[eb + 1],
          Mb = db[eb + 2],
          mb = db[eb + 3],
          Ib = db[eb + 4],
          Pb = db[eb + 5],
          qb = tb * Cb,
          Eb = rb[qb],
          yb = rb[qb + 1],
          Vb = 1 & Pb,
          Fb = !!(16 & Pb),
          fb = ab,
          kb = xb,
          Tb = gb,
          cb = ib;
        if (Vb && (fb = gb, kb = ib, Tb = ab, cb = xb), !(2 & Pb && sb >= (Mb = ob(bb, Nb, sb, Mb, fb, kb, yb))) && !(4 & Pb && (sb = Ab(bb, Nb, sb, Mb, fb, kb, Eb)) >= Mb)) {
          var Qb = Mb - sb,
            Rb = Ib - mb;
          if (Fb) {
            if (bb * Qb * (Qb + Rb) < Zb) {
              if (void 0 !== (vb = Yb.scanComplete(bb, Nb, ub, sb, Mb, fb, kb, mb, Ib, Tb, cb))) return vb;
              continue
            }
          } else {
            if (bb * Math.min(Qb, Rb) < Hb) {
              if (void 0 !== (vb = Ub(bb, Nb, ub, Vb, sb, Mb, fb, kb, mb, Ib, Tb, cb))) return vb;
              continue
            }
            if (bb * Qb * Rb < wb) {
              if (void 0 !== (vb = Yb.scanBipartite(bb, Nb, ub, Vb, sb, Mb, fb, kb, mb, Ib, Tb, cb))) return vb;
              continue
            }
          }
          var bu = Xb(bb, Nb, sb, Mb, fb, kb, Eb, yb);
          if (sb < bu)
            if (bb * (bu - sb) < Hb) {
              if (void 0 !== (vb = Lb(bb, Nb + 1, ub, sb, bu, fb, kb, mb, Ib, Tb, cb))) return vb
            } else if (Nb === bb - 2) {
            if (void 0 !== (vb = Vb ? Yb.sweepBipartite(bb, ub, mb, Ib, Tb, cb, sb, bu, fb, kb) : Yb.sweepBipartite(bb, ub, sb, bu, fb, kb, mb, Ib, Tb, cb))) return vb
          } else jb(tb++, Nb + 1, sb, bu, mb, Ib, Vb, -1 / 0, 1 / 0), jb(tb++, Nb + 1, mb, Ib, sb, bu, 1 ^ Vb, -1 / 0, 1 / 0);
          if (bu < Mb) {
            var uu = Sb(bb, Nb, mb, Ib, Tb, cb),
              hu = Tb[Jb * uu + Nb],
              Bu = pb(bb, Nb, uu, Ib, Tb, cb, hu);
            if (Bu < Ib && jb(tb++, Nb, bu, Mb, Bu, Ib, (4 | Vb) + (Fb ? 16 : 0), hu, yb), mb < uu && jb(tb++, Nb, bu, Mb, mb, uu, (2 | Vb) + (Fb ? 16 : 0), Eb, hu), uu + 1 === Bu) {
              if (void 0 !== (vb = Fb ? Db(bb, Nb, ub, bu, Mb, fb, kb, uu, Tb, cb[uu]) : nb(bb, Nb, ub, Vb, bu, Mb, fb, kb, uu, Tb, cb[uu]))) return vb
            } else if (uu < Bu) {
              var Ou;
              if (Fb) {
                if (bu < (Ou = lb(bb, Nb, bu, Mb, fb, kb, hu))) {
                  var Gu = pb(bb, Nb, bu, Ou, fb, kb, hu);
                  if (Nb === bb - 2) {
                    if (bu < Gu && void 0 !== (vb = Yb.sweepComplete(bb, ub, bu, Gu, fb, kb, uu, Bu, Tb, cb))) return vb;
                    if (Gu < Ou && void 0 !== (vb = Yb.sweepBipartite(bb, ub, Gu, Ou, fb, kb, uu, Bu, Tb, cb))) return vb
                  } else bu < Gu && jb(tb++, Nb + 1, bu, Gu, uu, Bu, 16, -1 / 0, 1 / 0), Gu < Ou && (jb(tb++, Nb + 1, Gu, Ou, uu, Bu, 0, -1 / 0, 1 / 0), jb(tb++, Nb + 1, uu, Bu, Gu, Ou, 1, -1 / 0, 1 / 0))
                }
              } else bu < (Ou = Vb ? Kb(bb, Nb, bu, Mb, fb, kb, hu) : lb(bb, Nb, bu, Mb, fb, kb, hu)) && (Nb === bb - 2 ? vb = Vb ? Yb.sweepBipartite(bb, ub, uu, Bu, Tb, cb, bu, Ou, fb, kb) : Yb.sweepBipartite(bb, ub, bu, Ou, fb, kb, uu, Bu, Tb, cb) : (jb(tb++, Nb + 1, bu, Ou, uu, Bu, Vb, -1 / 0, 1 / 0), jb(tb++, Nb + 1, uu, Bu, bu, Ou, 1 ^ Vb, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var Bb = hb(37887),
      Ob = hb(37896),
      Gb = hb(37927),
      Ub = Gb.partial,
      Lb = Gb.full,
      Yb = hb(37911),
      Sb = hb(37936),
      ab = hb(37945),
      Hb = 128,
      wb = 1 << 22,
      Zb = 1 << 22,
      Xb = ab("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      pb = ab("lo===p0", ["p0"]),
      ob = ab("lo<p0", ["p0"]),
      Ab = ab("hi<=p0", ["p0"]),
      lb = ab("lo<=p0&&p0<=hi", ["p0"]),
      Kb = ab("lo<p0&&p0<=hi", ["p0"]),
      Wb = 6,
      Cb = 2,
      db = Bb.mallocInt32(1024),
      rb = Bb.mallocDouble(1024);

    function jb(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb) {
      var Sb = Wb * bb;
      db[Sb] = ub, db[Sb + 1] = hb, db[Sb + 2] = Bb, db[Sb + 3] = Ob, db[Sb + 4] = Gb, db[Sb + 5] = Ub;
      var ab = Cb * bb;
      rb[ab] = Lb, rb[ab + 1] = Yb
    }

    function nb(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb, ab) {
      var Hb = 2 * bb,
        wb = Yb * Hb,
        Zb = Sb[wb + ub];
      bb: for (var Xb = Ob, pb = Ob * Hb; Xb < Gb; ++Xb, pb += Hb) {
        var ob = Ub[pb + ub],
          Ab = Ub[pb + ub + bb];
        if (!(Zb < ob || Ab < Zb) && (!Bb || Zb !== ob)) {
          for (var lb, Kb = Lb[Xb], Wb = ub + 1; Wb < bb; ++Wb) {
            ob = Ub[pb + Wb], Ab = Ub[pb + Wb + bb];
            var Cb = Sb[wb + Wb],
              db = Sb[wb + Wb + bb];
            if (Ab < Cb || db < ob) continue bb
          }
          if (void 0 !== (lb = Bb ? hb(ab, Kb) : hb(Kb, ab))) return lb
        }
      }
    }

    function Db(bb, ub, hb, Bb, Ob, Gb, Ub, Lb, Yb, Sb) {
      var ab = 2 * bb,
        Hb = Lb * ab,
        wb = Yb[Hb + ub];
      bb: for (var Zb = Bb, Xb = Bb * ab; Zb < Ob; ++Zb, Xb += ab) {
        var pb = Ub[Zb];
        if (pb !== Sb) {
          var ob = Gb[Xb + ub],
            Ab = Gb[Xb + ub + bb];
          if (!(wb < ob || Ab < wb)) {
            for (var lb = ub + 1; lb < bb; ++lb) {
              ob = Gb[Xb + lb], Ab = Gb[Xb + lb + bb];
              var Kb = Yb[Hb + lb],
                Wb = Yb[Hb + lb + bb];
              if (Ab < Kb || Wb < ob) continue bb
            }
            var Cb = hb(pb, Sb);
            if (void 0 !== Cb) return Cb
          }
        }
      }
    }
  },
  37936: (bb, ub, hb) => {
    bb.exports = function(bb, ub, hb, Ub, Lb, Yb) {
      if (Ub <= hb + 1) return hb;
      var Sb = hb,
        ab = Ub,
        Hb = Ub + hb >>> 1,
        wb = 2 * bb,
        Zb = Hb,
        Xb = Lb[wb * Hb + ub];
      for (; Sb < ab;) {
        if (ab - Sb < Ob) {
          Gb(bb, ub, Sb, ab, Lb, Yb), Xb = Lb[wb * Hb + ub];
          break
        }
        var pb = ab - Sb,
          ob = Math.random() * pb + Sb | 0,
          Ab = Lb[wb * ob + ub],
          lb = Math.random() * pb + Sb | 0,
          Kb = Lb[wb * lb + ub],
          Wb = Math.random() * pb + Sb | 0,
          Cb = Lb[wb * Wb + ub];
        Ab <= Kb ? Cb >= Kb ? (Zb = lb, Xb = Kb) : Ab >= Cb ? (Zb = ob, Xb = Ab) : (Zb = Wb, Xb = Cb) : Kb >= Cb ? (Zb = lb, Xb = Kb) : Cb >= Ab ? (Zb = ob, Xb = Ab) : (Zb = Wb, Xb = Cb);
        for (var db = wb * (ab - 1), rb = wb * Zb, jb = 0; jb < wb; ++jb, ++db, ++rb) {
          var nb = Lb[db];
          Lb[db] = Lb[rb], Lb[rb] = nb
        }
        var Db = Yb[ab - 1];
        Yb[ab - 1] = Yb[Zb], Yb[Zb] = Db;
        for (db = wb * (ab - 1), rb = wb * (Zb = Bb(bb, ub, Sb, ab - 1, Lb, Yb, Xb)), jb = 0; jb < wb; ++jb, ++db, ++rb) {
          nb = Lb[db];
          Lb[db] = Lb[rb], Lb[rb] = nb
        }
        Db = Yb[ab - 1];
        if (Yb[ab - 1] = Yb[Zb], Yb[Zb] = Db, Hb < Zb) {
          for (ab = Zb - 1; Sb < ab && Lb[wb * (ab - 1) + ub] === Xb;) ab -= 1;
          ab += 1
        } else {
          if (!(Zb < Hb)) break;
          for (Sb = Zb + 1; Sb < ab && Lb[wb * Sb + ub] === Xb;) Sb += 1
        }
      }
      return Bb(bb, ub, hb, Hb, Lb, Yb, Lb[wb * Hb + ub])
    };
    var Bb = hb(37945)("lo<p0", ["p0"]),
      Ob = 8;

    function Gb(bb, ub, hb, Bb, Ob, Gb) {
      for (var Ub = 2 * bb, Lb = Ub * (hb + 1) + ub, Yb = hb + 1; Yb < Bb; ++Yb, Lb += Ub)
        for (var Sb = Ob[Lb], ab = Yb, Hb = Ub * (Yb - 1); ab > hb && Ob[Hb + ub] > Sb; --ab, Hb -= Ub) {
          for (var wb = Hb, Zb = Hb + Ub, Xb = 0; Xb < Ub; ++Xb, ++wb, ++Zb) {
            var pb = Ob[wb];
            Ob[wb] = Ob[Zb], Ob[Zb] = pb
          }
          var ob = Gb[ab];
          Gb[ab] = Gb[ab - 1], Gb[ab - 1] = ob
        }
    }
  },
  37945: bb => {
    bb.exports = function(bb, hb) {
      var Bb = "abcdef".split("").concat(hb),
        Ob = [];
      bb.indexOf("lo") >= 0 && Ob.push("lo=e[k+n]");
      bb.indexOf("hi") >= 0 && Ob.push("hi=e[k+o]");
      return Bb.push(ub.replace("_", Ob.join()).replace("$", bb)), Function.apply(void 0, Bb)
    };
    var ub = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  37914: bb => {
    bb.exports = function(bb, Bb) {
      Bb <= 4 * ub ? hb(0, Bb - 1, bb) : Sb(0, Bb - 1, bb)
    };
    var ub = 32;

    function hb(bb, ub, hb) {
      for (var Bb = 2 * (bb + 1), Ob = bb + 1; Ob <= ub; ++Ob) {
        for (var Gb = hb[Bb++], Ub = hb[Bb++], Lb = Ob, Yb = Bb - 2; Lb-- > bb;) {
          var Sb = hb[Yb - 2],
            ab = hb[Yb - 1];
          if (Sb < Gb) break;
          if (Sb === Gb && ab < Ub) break;
          hb[Yb] = Sb, hb[Yb + 1] = ab, Yb -= 2
        }
        hb[Yb] = Gb, hb[Yb + 1] = Ub
      }
    }

    function Bb(bb, ub, hb) {
      ub *= 2;
      var Bb = hb[bb *= 2],
        Ob = hb[bb + 1];
      hb[bb] = hb[ub], hb[bb + 1] = hb[ub + 1], hb[ub] = Bb, hb[ub + 1] = Ob
    }

    function Ob(bb, ub, hb) {
      ub *= 2, hb[bb *= 2] = hb[ub], hb[bb + 1] = hb[ub + 1]
    }

    function Gb(bb, ub, hb, Bb) {
      ub *= 2, hb *= 2;
      var Ob = Bb[bb *= 2],
        Gb = Bb[bb + 1];
      Bb[bb] = Bb[ub], Bb[bb + 1] = Bb[ub + 1], Bb[ub] = Bb[hb], Bb[ub + 1] = Bb[hb + 1], Bb[hb] = Ob, Bb[hb + 1] = Gb
    }

    function Ub(bb, ub, hb, Bb, Ob) {
      ub *= 2, Ob[bb *= 2] = Ob[ub], Ob[ub] = hb, Ob[bb + 1] = Ob[ub + 1], Ob[ub + 1] = Bb
    }

    function Lb(bb, ub, hb) {
      ub *= 2;
      var Bb = hb[bb *= 2],
        Ob = hb[ub];
      return !(Bb < Ob) && (Bb !== Ob || hb[bb + 1] > hb[ub + 1])
    }

    function Yb(bb, ub, hb, Bb) {
      var Ob = Bb[bb *= 2];
      return Ob < ub || Ob === ub && Bb[bb + 1] < hb
    }

    function Sb(bb, ab, Hb) {
      var wb = (ab - bb + 1) / 6 | 0,
        Zb = bb + wb,
        Xb = ab - wb,
        pb = bb + ab >> 1,
        ob = pb - wb,
        Ab = pb + wb,
        lb = Zb,
        Kb = ob,
        Wb = pb,
        Cb = Ab,
        db = Xb,
        rb = bb + 1,
        jb = ab - 1,
        nb = 0;
      Lb(lb, Kb, Hb) && (nb = lb, lb = Kb, Kb = nb), Lb(Cb, db, Hb) && (nb = Cb, Cb = db, db = nb), Lb(lb, Wb, Hb) && (nb = lb, lb = Wb, Wb = nb), Lb(Kb, Wb, Hb) && (nb = Kb, Kb = Wb, Wb = nb), Lb(lb, Cb, Hb) && (nb = lb, lb = Cb, Cb = nb), Lb(Wb, Cb, Hb) && (nb = Wb, Wb = Cb, Cb = nb), Lb(Kb, db, Hb) && (nb = Kb, Kb = db, db = nb), Lb(Kb, Wb, Hb) && (nb = Kb, Kb = Wb, Wb = nb), Lb(Cb, db, Hb) && (nb = Cb, Cb = db, db = nb);
      for (var Db = Hb[2 * Kb], xb = Hb[2 * Kb + 1], zb = Hb[2 * Cb], gb = Hb[2 * Cb + 1], ib = 2 * lb, vb = 2 * Wb, tb = 2 * db, Jb = 2 * Zb, eb = 2 * pb, Nb = 2 * Xb, sb = 0; sb < 2; ++sb) {
        var Mb = Hb[ib + sb],
          mb = Hb[vb + sb],
          Ib = Hb[tb + sb];
        Hb[Jb + sb] = Mb, Hb[eb + sb] = mb, Hb[Nb + sb] = Ib
      }
      Ob(ob, bb, Hb), Ob(Ab, ab, Hb);
      for (var Pb = rb; Pb <= jb; ++Pb)
        if (Yb(Pb, Db, xb, Hb)) Pb !== rb && Bb(Pb, rb, Hb), ++rb;
        else if (!Yb(Pb, zb, gb, Hb))
        for (;;) {
          if (Yb(jb, zb, gb, Hb)) {
            Yb(jb, Db, xb, Hb) ? (Gb(Pb, rb, jb, Hb), ++rb, --jb) : (Bb(Pb, jb, Hb), --jb);
            break
          }
          if (--jb < Pb) break
        }
      Ub(bb, rb - 1, Db, xb, Hb), Ub(ab, jb + 1, zb, gb, Hb), rb - 2 - bb <= ub ? hb(bb, rb - 2, Hb) : Sb(bb, rb - 2, Hb), ab - (jb + 2) <= ub ? hb(jb + 2, ab, Hb) : Sb(jb + 2, ab, Hb), jb - rb <= ub ? hb(rb, jb, Hb) : Sb(rb, jb, Hb)
    }
  },
  37911: (bb, ub, hb) => {
    bb.exports = {
      init: function(bb) {
        var ub = Ob.nextPow2(bb);
        Yb.length < ub && (Bb.free(Yb), Yb = Bb.mallocInt32(ub));
        Sb.length < ub && (Bb.free(Sb), Sb = Bb.mallocInt32(ub));
        ab.length < ub && (Bb.free(ab), ab = Bb.mallocInt32(ub));
        Hb.length < ub && (Bb.free(Hb), Hb = Bb.mallocInt32(ub));
        wb.length < ub && (Bb.free(wb), wb = Bb.mallocInt32(ub));
        Zb.length < ub && (Bb.free(Zb), Zb = Bb.mallocInt32(ub));
        var hb = 8 * ub;
        Xb.length < hb && (Bb.free(Xb), Xb = Bb.mallocDouble(hb))
      },
      sweepBipartite: function(bb, ub, hb, Bb, Ob, Lb, wb, Zb, Ab, lb) {
        for (var Kb = 0, Wb = 2 * bb, Cb = bb - 1, db = Wb - 1, rb = hb; rb < Bb; ++rb) {
          var jb = Lb[rb],
            nb = Wb * rb;
          Xb[Kb++] = Ob[nb + Cb], Xb[Kb++] = -(jb + 1), Xb[Kb++] = Ob[nb + db], Xb[Kb++] = jb
        }
        for (rb = wb; rb < Zb; ++rb) {
          jb = lb[rb] + Ub;
          var Db = Wb * rb;
          Xb[Kb++] = Ab[Db + Cb], Xb[Kb++] = -jb, Xb[Kb++] = Ab[Db + db], Xb[Kb++] = jb
        }
        var xb = Kb >>> 1;
        Gb(Xb, xb);
        var zb = 0,
          gb = 0;
        for (rb = 0; rb < xb; ++rb) {
          var ib = 0 | Xb[2 * rb + 1];
          if (ib >= Ub) pb(ab, Hb, gb--, ib = ib - Ub | 0);
          else if (ib >= 0) pb(Yb, Sb, zb--, ib);
          else if (ib <= -Ub) {
            ib = -ib - Ub | 0;
            for (var vb = 0; vb < zb; ++vb) {
              if (void 0 !== (tb = ub(Yb[vb], ib))) return tb
            }
            ob(ab, Hb, gb++, ib)
          } else {
            ib = -ib - 1 | 0;
            for (vb = 0; vb < gb; ++vb) {
              var tb;
              if (void 0 !== (tb = ub(ib, ab[vb]))) return tb
            }
            ob(Yb, Sb, zb++, ib)
          }
        }
      },
      sweepComplete: function(bb, ub, hb, Bb, Ob, Ub, Lb, Ab, lb, Kb) {
        for (var Wb = 0, Cb = 2 * bb, db = bb - 1, rb = Cb - 1, jb = hb; jb < Bb; ++jb) {
          var nb = Ub[jb] + 1 << 1,
            Db = Cb * jb;
          Xb[Wb++] = Ob[Db + db], Xb[Wb++] = -nb, Xb[Wb++] = Ob[Db + rb], Xb[Wb++] = nb
        }
        for (jb = Lb; jb < Ab; ++jb) {
          nb = Kb[jb] + 1 << 1;
          var xb = Cb * jb;
          Xb[Wb++] = lb[xb + db], Xb[Wb++] = 1 | -nb, Xb[Wb++] = lb[xb + rb], Xb[Wb++] = 1 | nb
        }
        var zb = Wb >>> 1;
        Gb(Xb, zb);
        var gb = 0,
          ib = 0,
          vb = 0;
        for (jb = 0; jb < zb; ++jb) {
          var tb = 0 | Xb[2 * jb + 1],
            Jb = 1 & tb;
          if (jb < zb - 1 && tb >> 1 === Xb[2 * jb + 3] >> 1 && (Jb = 2, jb += 1), tb < 0) {
            for (var eb = -(tb >> 1) - 1, Nb = 0; Nb < vb; ++Nb) {
              if (void 0 !== (sb = ub(wb[Nb], eb))) return sb
            }
            if (0 !== Jb)
              for (Nb = 0; Nb < gb; ++Nb) {
                if (void 0 !== (sb = ub(Yb[Nb], eb))) return sb
              }
            if (1 !== Jb)
              for (Nb = 0; Nb < ib; ++Nb) {
                var sb;
                if (void 0 !== (sb = ub(ab[Nb], eb))) return sb
              }
            0 === Jb ? ob(Yb, Sb, gb++, eb) : 1 === Jb ? ob(ab, Hb, ib++, eb) : 2 === Jb && ob(wb, Zb, vb++, eb)
          } else {
            eb = (tb >> 1) - 1;
            0 === Jb ? pb(Yb, Sb, gb--, eb) : 1 === Jb ? pb(ab, Hb, ib--, eb) : 2 === Jb && pb(wb, Zb, vb--, eb)
          }
        }
      },
      scanBipartite: function(bb, ub, hb, Bb, Ob, Lb, ab, Hb, wb, Zb, Ab, lb) {
        var Kb = 0,
          Wb = 2 * bb,
          Cb = ub,
          db = ub + bb,
          rb = 1,
          jb = 1;
        Bb ? jb = Ub : rb = Ub;
        for (var nb = Ob; nb < Lb; ++nb) {
          var Db = nb + rb,
            xb = Wb * nb;
          Xb[Kb++] = ab[xb + Cb], Xb[Kb++] = -Db, Xb[Kb++] = ab[xb + db], Xb[Kb++] = Db
        }
        for (nb = wb; nb < Zb; ++nb) {
          Db = nb + jb;
          var zb = Wb * nb;
          Xb[Kb++] = Ab[zb + Cb], Xb[Kb++] = -Db
        }
        var gb = Kb >>> 1;
        Gb(Xb, gb);
        var ib = 0;
        for (nb = 0; nb < gb; ++nb) {
          var vb = 0 | Xb[2 * nb + 1];
          if (vb < 0) {
            var tb = !1;
            if ((Db = -vb) >= Ub ? (tb = !Bb, Db -= Ub) : (tb = !!Bb, Db -= 1), tb) ob(Yb, Sb, ib++, Db);
            else {
              var Jb = lb[Db],
                eb = Wb * Db,
                Nb = Ab[eb + ub + 1],
                sb = Ab[eb + ub + 1 + bb];
              bb: for (var Mb = 0; Mb < ib; ++Mb) {
                var mb = Yb[Mb],
                  Ib = Wb * mb;
                if (!(sb < ab[Ib + ub + 1] || ab[Ib + ub + 1 + bb] < Nb)) {
                  for (var Pb = ub + 2; Pb < bb; ++Pb)
                    if (Ab[eb + Pb + bb] < ab[Ib + Pb] || ab[Ib + Pb + bb] < Ab[eb + Pb]) continue bb;
                  var qb, Eb = Hb[mb];
                  if (void 0 !== (qb = Bb ? hb(Jb, Eb) : hb(Eb, Jb))) return qb
                }
              }
            }
          } else pb(Yb, Sb, ib--, vb - rb)
        }
      },
      scanComplete: function(bb, ub, hb, Bb, Ob, Lb, Sb, ab, Hb, wb, Zb) {
        for (var pb = 0, ob = 2 * bb, Ab = ub, lb = ub + bb, Kb = Bb; Kb < Ob; ++Kb) {
          var Wb = Kb + Ub,
            Cb = ob * Kb;
          Xb[pb++] = Lb[Cb + Ab], Xb[pb++] = -Wb, Xb[pb++] = Lb[Cb + lb], Xb[pb++] = Wb
        }
        for (Kb = ab; Kb < Hb; ++Kb) {
          Wb = Kb + 1;
          var db = ob * Kb;
          Xb[pb++] = wb[db + Ab], Xb[pb++] = -Wb
        }
        var rb = pb >>> 1;
        Gb(Xb, rb);
        var jb = 0;
        for (Kb = 0; Kb < rb; ++Kb) {
          var nb = 0 | Xb[2 * Kb + 1];
          if (nb < 0) {
            if ((Wb = -nb) >= Ub) Yb[jb++] = Wb - Ub;
            else {
              var Db = Zb[Wb -= 1],
                xb = ob * Wb,
                zb = wb[xb + ub + 1],
                gb = wb[xb + ub + 1 + bb];
              bb: for (var ib = 0; ib < jb; ++ib) {
                var vb = Yb[ib],
                  tb = Sb[vb];
                if (tb === Db) break;
                var Jb = ob * vb;
                if (!(gb < Lb[Jb + ub + 1] || Lb[Jb + ub + 1 + bb] < zb)) {
                  for (var eb = ub + 2; eb < bb; ++eb)
                    if (wb[xb + eb + bb] < Lb[Jb + eb] || Lb[Jb + eb + bb] < wb[xb + eb]) continue bb;
                  var Nb = hb(tb, Db);
                  if (void 0 !== Nb) return Nb
                }
              }
            }
          } else {
            for (Wb = nb - Ub, ib = jb - 1; ib >= 0; --ib)
              if (Yb[ib] === Wb) {
                for (eb = ib + 1; eb < jb; ++eb) Yb[eb - 1] = Yb[eb];
                break
              }-- jb
          }
        }
      }
    };
    var Bb = hb(37887),
      Ob = hb(37896),
      Gb = hb(37914),
      Ub = 1 << 28,
      Lb = 1024,
      Yb = Bb.mallocInt32(Lb),
      Sb = Bb.mallocInt32(Lb),
      ab = Bb.mallocInt32(Lb),
      Hb = Bb.mallocInt32(Lb),
      wb = Bb.mallocInt32(Lb),
      Zb = Bb.mallocInt32(Lb),
      Xb = Bb.mallocDouble(8192);

    function pb(bb, ub, hb, Bb) {
      var Ob = ub[Bb],
        Gb = bb[hb - 1];
      bb[Ob] = Gb, ub[Gb] = Ob
    }

    function ob(bb, ub, hb, Bb) {
      bb[hb] = Bb, ub[Bb] = hb
    }
  },
  37900: bb => {
    function ub(bb, hb, Bb) {
      var Ob = 0 | bb[Bb];
      if (Ob <= 0) return [];
      var Gb, Ub = new Array(Ob);
      if (Bb === bb.length - 1)
        for (Gb = 0; Gb < Ob; ++Gb) Ub[Gb] = hb;
      else
        for (Gb = 0; Gb < Ob; ++Gb) Ub[Gb] = ub(bb, hb, Bb + 1);
      return Ub
    }
    bb.exports = function(bb, hb) {
      switch ("undefined" === typeof hb && (hb = 0), typeof bb) {
        case "number":
          if (bb > 0) return function(bb, ub) {
            var hb, Bb;
            for (hb = new Array(bb), Bb = 0; Bb < bb; ++Bb) hb[Bb] = ub;
            return hb
          }(0 | bb, hb);
          break;
        case "object":
          if ("number" === typeof bb.length) return ub(bb, hb, 0)
      }
      return []
    }
  },
  37845: (bb, ub, hb) => {
    bb.exports = function() {
      var bb = this;
      this.components = {}, this.comps = this.components;
      var ub = this.components,
        hb = 1,
        Ob = {},
        Gb = [],
        Ub = [],
        Lb = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function Yb(bb, hb) {
        var Bb = ub[hb],
          Gb = Ob[hb],
          Ub = Gb.hash[bb];
        Ub && (Gb.remove(bb), Bb.gJ && (Bb.multi ? (Ub.forEach((ub => {
          ub && Bb.gJ(bb, ub)
        })), Ub.length = 0) : Bb.gJ(bb, Ub)), Lb.removals.push(Gb), Sb())
      }

      function Sb() {
        Lb.timeout || (Lb.timeout = !0, setTimeout(ab, 1))
      }

      function ab() {
        Lb.timeout = !1, Hb()
      }

      function Hb() {
        Lb.multiComps.length && function(bb) {
          for (var ub = 0; ub < bb.length; ub++) {
            var {
              entID: hb,
              data: Bb
            } = bb[ub], Ob = Bb.hash[hb];
            if (Ob) {
              for (var Gb = 0; Gb < Ob.length; Gb++) Ob[Gb] || (Ob.splice(Gb, 1), Gb--);
              0 === Ob.length && (Bb.remove(hb), Lb.removals.push(Bb))
            }
          }
          bb.length = 0
        }(Lb.multiComps), Lb.removals.length && function(bb) {
          for (var ub = 0; ub < bb.length; ub++) {
            bb[ub].flush()
          }
          bb.length = 0
        }(Lb.removals)
      }
      this.FX = Ob, this._systems = Gb, this._renderSystems = Ub, this.tV = function(ub) {
        var Bb = hb++;
        return Array.isArray(ub) && ub.forEach((ub => bb.FN(Bb, ub))), Bb
      }, this.deleteEntity = function(ub) {
        return Object.keys(Ob).forEach((bb => {
          Ob[bb].hash[ub] && Yb(ub, bb)
        })), bb
      }, this.fub = function(bb) {
        if (!bb) throw new Error("Missing component definition");
        var hb = bb.name;
        if (!hb) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof hb) throw new Error("Component name must be a string.");
        if ("" === hb) throw new Error("Component name must be a non-empty string.");
        if (Ob[hb]) throw new Error(`Component ${hb} already exists.`);
        var Lb = {};
        return Lb.name = hb, Lb.multi = !!bb.multi, Lb.order = isNaN(bb.order) ? 99 : bb.order, Lb.stateConstructor = bb.stateConstructor || null, Lb.state = bb.state || {}, Lb.UW = bb.UW || null, Lb.gJ = bb.gJ || null, Lb.system = bb.system || null, Lb.oW = bb.oW || null, ub[hb] = Lb, Ob[hb] = new Bb, Ob[hb]._pendingMultiCleanup = !1, Ob[hb]._multiCleanupIDs = Lb.multi ? [] : null, Lb.system && (Gb.push(hb), Gb.sort(((bb, hb) => ub[bb].order - ub[hb].order))), Lb.oW && (Ub.push(hb), Ub.sort(((bb, hb) => ub[bb].order - ub[hb].order))), hb
      }, this.overwriteComponent = function(bb, hb) {
        var Bb = ub[bb];
        if (!Bb) throw new Error(`Unknown component: ${bb}`);
        if (!hb) throw new Error("Missing component definition");
        if (Bb.name !== hb.name) throw new Error("Overwriting component must use the same name property.");
        var Lb = {};
        Lb.name = bb, Lb.multi = !!hb.multi, Lb.order = isNaN(hb.order) ? 99 : hb.order, Lb.state = hb.state || {}, Lb.UW = hb.UW || null, Lb.gJ = hb.gJ || null, Lb.system = hb.system || null, Lb.oW = hb.oW || null, ub[bb] = Lb, Ob[bb]._pendingMultiCleanup = !1, Ob[bb]._multiCleanupIDs = Lb.multi ? [] : null;
        var Yb = Gb.indexOf(bb);
        Lb.system && Yb < 0 && Gb.push(bb), !Lb.system && Yb >= 0 && Gb.splice(Yb, 1), Gb.sort(((bb, hb) => ub[bb].order - ub[hb].order));
        var Sb = Ub.indexOf(bb);
        Lb.oW && Sb < 0 && Ub.push(bb), !Lb.oW && Sb >= 0 && Ub.splice(Sb, 1), Ub.sort(((bb, hb) => ub[bb].order - ub[hb].order));
        var ab = Lb.state;
        return this.qN(bb).forEach((bb => {
          for (var ub in ab) ub in bb || (bb[ub] = ab[ub]);
          Lb.UW && Lb.UW(bb.yN, bb)
        })), bb
      }, this.deleteComponent = function(hb) {
        var Bb = Ob[hb];
        if (!Bb) throw new Error(`Unknown component: ${hb}`);
        Bb.flush(), Bb.list.forEach((bb => {
          bb && Yb(bb.yN || bb[0].yN, hb)
        }));
        var Lb = Gb.indexOf(hb),
          Sb = Ub.indexOf(hb);
        return Lb > -1 && Gb.splice(Lb, 1), Sb > -1 && Ub.splice(Sb, 1), Ob[hb].dispose(), delete Ob[hb], delete ub[hb], bb
      }, this.FN = function(bb, hb, Bb) {
        var Gb, Ub = ub[hb],
          Lb = Ob[hb];
        if (!Lb) throw new Error(`Unknown component: ${hb}.`);
        if (Lb.hash[bb] && !Ub.multi) throw new Error(`Entity ${bb} already has component: ${hb}.`);
        if (Ub.stateConstructor) {
          if (!(Gb = new Ub.stateConstructor).hasOwnProperty("yN")) throw new Error(`Component ${Ub.name} stateConstructor type does not have property __id`);
          Object.assign(Gb, Ub.state, Bb)
        } else Gb = {
          yN: bb,
          ...Ub.state,
          ...Bb
        };
        if (Gb.yN = bb, Ub.multi) {
          var Yb = Lb.hash[bb];
          Yb || (Yb = [], Lb.add(bb, Yb)), Yb.push(Gb)
        } else Lb.add(bb, Gb);
        return Ub.UW && Ub.UW(bb, Gb), this
      }, this.Nbb = function(bb, ub) {
        var hb = Ob[ub];
        if (!hb) throw new Error(`Unknown component: ${ub}.`);
        return !!hb.hash[bb]
      }, this.kN = function(ub, hb) {
        if (!Ob[hb]) throw new Error(`Unknown component: ${hb}.`);
        return Yb(ub, hb), bb
      }, this.getState = function(bb, ub) {
        var hb = Ob[ub];
        if (!hb) throw new Error(`Unknown component: ${ub}.`);
        return hb.hash[bb]
      }, this.qN = function(bb) {
        var ub = Ob[bb];
        if (!ub) throw new Error(`Unknown component: ${bb}.`);
        return Hb(), ub.list
      }, this.jub = function(bb) {
        if (!Ob[bb]) throw new Error(`Unknown component: ${bb}.`);
        var ub = Ob[bb].hash;
        return bb => ub[bb]
      }, this.iub = function(bb) {
        if (!Ob[bb]) throw new Error(`Unknown component: ${bb}.`);
        var ub = Ob[bb].hash;
        return bb => !!ub[bb]
      }, this.gH = function(hb) {
        Hb();
        for (var Bb = 0; Bb < Gb.length; Bb++) {
          var Ub = Gb[Bb],
            Lb = ub[Ub],
            Yb = Ob[Ub];
          Lb.system(hb, Yb.list), Hb()
        }
        return bb
      }, this.render = function(hb) {
        Hb();
        for (var Bb = 0; Bb < Ub.length; Bb++) {
          var Gb = Ub[Bb],
            Lb = ub[Gb],
            Yb = Ob[Gb];
          Lb.oW(hb, Yb.list), Hb()
        }
        return bb
      }, this.removeMultiComponent = function(hb, Bb, Gb) {
        var Ub = ub[Bb],
          Yb = Ob[Bb];
        if (!Yb) throw new Error(`Unknown component: ${Bb}.`);
        if (!Ub.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(bb, ub, hb, Bb) {
          var Ob = hb.hash[bb];
          if (Ob) {
            var Gb = Ob[Bb];
            Gb && (Ob[Bb] = null, ub.gJ && ub.gJ(bb, Gb), Lb.multiComps.push({
              entID: bb,
              data: hb
            }), Sb())
          }
        }(hb, Ub, Yb, Gb), bb
      }
    };
    var Bb = hb(37848)
  },
  37848: bb => {
    function ub(bb, ub) {
      var hb = bb._map[ub];
      if (delete bb.hash[ub], delete bb._map[ub], hb === bb.list.length - 1) bb.list.pop(), bb._idList.pop();
      else {
        var Bb = bb.list.pop();
        bb.list[hb] = Bb;
        var Ob = bb._idList.pop();
        bb._idList[hb] = Ob, bb._map[Ob] = hb
      }
    }
    bb.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(bb, ub) {
        if ("number" === typeof this._map[bb]) {
          var hb = this._map[bb];
          this.hash[bb] = ub, this.list[hb] = ub, this._idList[hb] = bb
        } else this._map[bb] = this.list.length, this.hash[bb] = ub, this.list.push(ub), this._idList.push(bb)
      }
      remove(bb) {
        var ub = this._map[bb];
        this.hash[bb] = null, this.list[ub] = null, this._pendingRemovals.push(bb)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var bb = 0; bb < this._pendingRemovals.length; bb++) {
          var hb = this._pendingRemovals[bb];
          null === this.hash[hb] && ub(this, hb)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  37649: (bb, ub, hb) => {
    bb = hb.nmd(bb);
    var Bb = "__lodash_hash_undefined__",
      Ob = 9007199254740991,
      Gb = "[object Arguments]",
      Ub = "[object Boolean]",
      Lb = "[object Date]",
      Yb = "[object Function]",
      Sb = "[object GeneratorFunction]",
      ab = "[object Map]",
      Hb = "[object Number]",
      wb = "[object Object]",
      Zb = "[object Promise]",
      Xb = "[object RegExp]",
      pb = "[object Set]",
      ob = "[object String]",
      Ab = "[object Symbol]",
      lb = "[object WeakMap]",
      Kb = "[object ArrayBuffer]",
      Wb = "[object DataView]",
      Cb = "[object Float32Array]",
      db = "[object Float64Array]",
      rb = "[object Int8Array]",
      jb = "[object Int16Array]",
      nb = "[object Int32Array]",
      Db = "[object Uint8Array]",
      xb = "[object Uint8ClampedArray]",
      zb = "[object Uint16Array]",
      gb = "[object Uint32Array]",
      ib = /\w*$/,
      vb = /^\[object .+?Constructor\]$/,
      tb = /^(?:0|[1-9]\d*)$/,
      Jb = {};
    Jb[Gb] = Jb["[object Array]"] = Jb[Kb] = Jb[Wb] = Jb[Ub] = Jb[Lb] = Jb[Cb] = Jb[db] = Jb[rb] = Jb[jb] = Jb[nb] = Jb[ab] = Jb[Hb] = Jb[wb] = Jb[Xb] = Jb[pb] = Jb[ob] = Jb[Ab] = Jb[Db] = Jb[xb] = Jb[zb] = Jb[gb] = !0, Jb["[object Error]"] = Jb[Yb] = Jb[lb] = !1;
    var eb = "object" == typeof hb.g && hb.g && hb.g.Object === Object && hb.g,
      Nb = "object" == typeof self && self && self.Object === Object && self,
      sb = eb || Nb || Function("return this")(),
      Mb = ub && !ub.nodeType && ub,
      mb = Mb && bb && !bb.nodeType && bb,
      Ib = mb && mb.exports === Mb;

    function Pb(bb, ub) {
      return bb.set(ub[0], ub[1]), bb
    }

    function qb(bb, ub) {
      return bb.add(ub), bb
    }

    function Eb(bb, ub, hb, Bb) {
      var Ob = -1,
        Gb = bb ? bb.length : 0;
      for (Bb && Gb && (hb = bb[++Ob]); ++Ob < Gb;) hb = ub(hb, bb[Ob], Ob, bb);
      return hb
    }

    function yb(bb) {
      var ub = !1;
      if (null != bb && "function" != typeof bb.toString) try {
        ub = !!(bb + "")
      } catch (hb) {}
      return ub
    }

    function Vb(bb) {
      var ub = -1,
        hb = Array(bb.size);
      return bb.forEach((function(bb, Bb) {
        hb[++ub] = [Bb, bb]
      })), hb
    }

    function Fb(bb, ub) {
      return function(hb) {
        return bb(ub(hb))
      }
    }

    function fb(bb) {
      var ub = -1,
        hb = Array(bb.size);
      return bb.forEach((function(bb) {
        hb[++ub] = bb
      })), hb
    }
    var kb = Array.prototype,
      Tb = Function.prototype,
      cb = Object.prototype,
      Qb = sb["__core-js_shared__"],
      Rb = function() {
        var bb = /[^.]+$/.exec(Qb && Qb.keys && Qb.keys.IE_PROTO || "");
        return bb ? "Symbol(src)_1." + bb : ""
      }(),
      bu = Tb.toString,
      uu = cb.hasOwnProperty,
      hu = cb.toString,
      Bu = RegExp("^" + bu.call(uu).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      Ou = Ib ? sb.VZ : void 0,
      Gu = sb.Symbol,
      Uu = sb.Uint8Array,
      Lu = Fb(Object.getPrototypeOf, Object),
      Yu = Object.create,
      Su = cb.propertyIsEnumerable,
      au = kb.splice,
      Hu = Object.getOwnPropertySymbols,
      wu = Ou ? Ou.isBuffer : void 0,
      Zu = Fb(Object.keys, Object),
      Xu = Iu(sb, "DataView"),
      pu = Iu(sb, "Map"),
      ou = Iu(sb, "Promise"),
      Au = Iu(sb, "Set"),
      lu = Iu(sb, "WeakMap"),
      Ku = Iu(Object, "create"),
      Wu = Vu(Xu),
      Cu = Vu(pu),
      du = Vu(ou),
      ru = Vu(Au),
      ju = Vu(lu),
      nu = Gu ? Gu.prototype : void 0,
      Du = nu ? nu.valueOf : void 0;

    function xu(bb) {
      var ub = -1,
        hb = bb ? bb.length : 0;
      for (this.clear(); ++ub < hb;) {
        var Bb = bb[ub];
        this.set(Bb[0], Bb[1])
      }
    }

    function zu(bb) {
      var ub = -1,
        hb = bb ? bb.length : 0;
      for (this.clear(); ++ub < hb;) {
        var Bb = bb[ub];
        this.set(Bb[0], Bb[1])
      }
    }

    function gu(bb) {
      var ub = -1,
        hb = bb ? bb.length : 0;
      for (this.clear(); ++ub < hb;) {
        var Bb = bb[ub];
        this.set(Bb[0], Bb[1])
      }
    }

    function iu(bb) {
      this.__data__ = new zu(bb)
    }

    function vu(bb, ub) {
      var hb = fu(bb) || function(bb) {
          return function(bb) {
            return function(bb) {
              return !!bb && "object" == typeof bb
            }(bb) && ku(bb)
          }(bb) && uu.call(bb, "callee") && (!Su.call(bb, "callee") || hu.call(bb) == Gb)
        }(bb) ? function(bb, ub) {
          for (var hb = -1, Bb = Array(bb); ++hb < bb;) Bb[hb] = ub(hb);
          return Bb
        }(bb.length, String) : [],
        Bb = hb.length,
        Ob = !!Bb;
      for (var Ub in bb) !ub && !uu.call(bb, Ub) || Ob && ("length" == Ub || Eu(Ub, Bb)) || hb.push(Ub);
      return hb
    }

    function tu(bb, ub, hb) {
      var Bb = bb[ub];
      uu.call(bb, ub) && Fu(Bb, hb) && (void 0 !== hb || ub in bb) || (bb[ub] = hb)
    }

    function Ju(bb, ub) {
      for (var hb = bb.length; hb--;)
        if (Fu(bb[hb][0], ub)) return hb;
      return -1
    }

    function eu(bb, ub, hb, Bb, Ob, Zb, lb) {
      var vb;
      if (Bb && (vb = Zb ? Bb(bb, Ob, Zb, lb) : Bb(bb)), void 0 !== vb) return vb;
      if (!Qu(bb)) return bb;
      var tb = fu(bb);
      if (tb) {
        if (vb = function(bb) {
            var ub = bb.length,
              hb = bb.constructor(ub);
            ub && "string" == typeof bb[0] && uu.call(bb, "index") && (hb.index = bb.index, hb.input = bb.input);
            return hb
          }(bb), !ub) return function(bb, ub) {
          var hb = -1,
            Bb = bb.length;
          ub || (ub = Array(Bb));
          for (; ++hb < Bb;) ub[hb] = bb[hb];
          return ub
        }(bb, vb)
      } else {
        var eb = qu(bb),
          Nb = eb == Yb || eb == Sb;
        if (Tu(bb)) return function(bb, ub) {
          if (ub) return bb.slice();
          var hb = new bb.constructor(bb.length);
          return bb.copy(hb), hb
        }(bb, ub);
        if (eb == wb || eb == Gb || Nb && !Zb) {
          if (yb(bb)) return Zb ? bb : {};
          if (vb = function(bb) {
              return "function" != typeof bb.constructor || yu(bb) ? {} : (ub = Lu(bb), Qu(ub) ? Yu(ub) : {});
              var ub
            }(Nb ? {} : bb), !ub) return function(bb, ub) {
            return Mu(bb, Pu(bb), ub)
          }(bb, function(bb, ub) {
            return bb && Mu(ub, Ru(ub), bb)
          }(vb, bb))
        } else {
          if (!Jb[eb]) return Zb ? bb : {};
          vb = function(bb, ub, hb, Bb) {
            var Ob = bb.constructor;
            switch (ub) {
              case Kb:
                return su(bb);
              case Ub:
              case Lb:
                return new Ob(+bb);
              case Wb:
                return function(bb, ub) {
                  var hb = ub ? su(bb.buffer) : bb.buffer;
                  return new bb.constructor(hb, bb.byteOffset, bb.byteLength)
                }(bb, Bb);
              case Cb:
              case db:
              case rb:
              case jb:
              case nb:
              case Db:
              case xb:
              case zb:
              case gb:
                return function(bb, ub) {
                  var hb = ub ? su(bb.buffer) : bb.buffer;
                  return new bb.constructor(hb, bb.byteOffset, bb.length)
                }(bb, Bb);
              case ab:
                return function(bb, ub, hb) {
                  var Bb = ub ? hb(Vb(bb), !0) : Vb(bb);
                  return Eb(Bb, Pb, new bb.constructor)
                }(bb, Bb, hb);
              case Hb:
              case ob:
                return new Ob(bb);
              case Xb:
                return function(bb) {
                  var ub = new bb.constructor(bb.source, ib.exec(bb));
                  return ub.lastIndex = bb.lastIndex, ub
                }(bb);
              case pb:
                return function(bb, ub, hb) {
                  var Bb = ub ? hb(fb(bb), !0) : fb(bb);
                  return Eb(Bb, qb, new bb.constructor)
                }(bb, Bb, hb);
              case Ab:
                return Gb = bb, Du ? Object(Du.call(Gb)) : {}
            }
            var Gb
          }(bb, eb, eu, ub)
        }
      }
      lb || (lb = new iu);
      var sb = lb.get(bb);
      if (sb) return sb;
      if (lb.set(bb, vb), !tb) var Mb = hb ? function(bb) {
        return function(bb, ub, hb) {
          var Bb = ub(bb);
          return fu(bb) ? Bb : function(bb, ub) {
            for (var hb = -1, Bb = ub.length, Ob = bb.length; ++hb < Bb;) bb[Ob + hb] = ub[hb];
            return bb
          }(Bb, hb(bb))
        }(bb, Ru, Pu)
      }(bb) : Ru(bb);
      return function(bb, ub) {
        for (var hb = -1, Bb = bb ? bb.length : 0; ++hb < Bb && !1 !== ub(bb[hb], hb, bb););
      }(Mb || bb, (function(Ob, Gb) {
        Mb && (Ob = bb[Gb = Ob]), tu(vb, Gb, eu(Ob, ub, hb, Bb, Gb, bb, lb))
      })), vb
    }

    function Nu(bb) {
      return !(!Qu(bb) || (ub = bb, Rb && Rb in ub)) && (cu(bb) || yb(bb) ? Bu : vb).test(Vu(bb));
      var ub
    }

    function su(bb) {
      var ub = new bb.constructor(bb.byteLength);
      return new Uu(ub).set(new Uu(bb)), ub
    }

    function Mu(bb, ub, hb, Bb) {
      hb || (hb = {});
      for (var Ob = -1, Gb = ub.length; ++Ob < Gb;) {
        var Ub = ub[Ob],
          Lb = Bb ? Bb(hb[Ub], bb[Ub], Ub, hb, bb) : void 0;
        tu(hb, Ub, void 0 === Lb ? bb[Ub] : Lb)
      }
      return hb
    }

    function mu(bb, ub) {
      var hb = bb.__data__;
      return function(bb) {
        var ub = typeof bb;
        return "string" == ub || "number" == ub || "symbol" == ub || "boolean" == ub ? "__proto__" !== bb : null === bb
      }(ub) ? hb["string" == typeof ub ? "string" : "hash"] : hb.map
    }

    function Iu(bb, ub) {
      var hb = function(bb, ub) {
        return null == bb ? void 0 : bb[ub]
      }(bb, ub);
      return Nu(hb) ? hb : void 0
    }
    xu.prototype.clear = function() {
      this.__data__ = Ku ? Ku(null) : {}
    }, xu.prototype.delete = function(bb) {
      return this.has(bb) && delete this.__data__[bb]
    }, xu.prototype.get = function(bb) {
      var ub = this.__data__;
      if (Ku) {
        var hb = ub[bb];
        return hb === Bb ? void 0 : hb
      }
      return uu.call(ub, bb) ? ub[bb] : void 0
    }, xu.prototype.has = function(bb) {
      var ub = this.__data__;
      return Ku ? void 0 !== ub[bb] : uu.call(ub, bb)
    }, xu.prototype.set = function(bb, ub) {
      return this.__data__[bb] = Ku && void 0 === ub ? Bb : ub, this
    }, zu.prototype.clear = function() {
      this.__data__ = []
    }, zu.prototype.delete = function(bb) {
      var ub = this.__data__,
        hb = Ju(ub, bb);
      return !(hb < 0) && (hb == ub.length - 1 ? ub.pop() : au.call(ub, hb, 1), !0)
    }, zu.prototype.get = function(bb) {
      var ub = this.__data__,
        hb = Ju(ub, bb);
      return hb < 0 ? void 0 : ub[hb][1]
    }, zu.prototype.has = function(bb) {
      return Ju(this.__data__, bb) > -1
    }, zu.prototype.set = function(bb, ub) {
      var hb = this.__data__,
        Bb = Ju(hb, bb);
      return Bb < 0 ? hb.push([bb, ub]) : hb[Bb][1] = ub, this
    }, gu.prototype.clear = function() {
      this.__data__ = {
        hash: new xu,
        map: new(pu || zu),
        string: new xu
      }
    }, gu.prototype.delete = function(bb) {
      return mu(this, bb).delete(bb)
    }, gu.prototype.get = function(bb) {
      return mu(this, bb).get(bb)
    }, gu.prototype.has = function(bb) {
      return mu(this, bb).has(bb)
    }, gu.prototype.set = function(bb, ub) {
      return mu(this, bb).set(bb, ub), this
    }, iu.prototype.clear = function() {
      this.__data__ = new zu
    }, iu.prototype.delete = function(bb) {
      return this.__data__.delete(bb)
    }, iu.prototype.get = function(bb) {
      return this.__data__.get(bb)
    }, iu.prototype.has = function(bb) {
      return this.__data__.has(bb)
    }, iu.prototype.set = function(bb, ub) {
      var hb = this.__data__;
      if (hb instanceof zu) {
        var Bb = hb.__data__;
        if (!pu || Bb.length < 199) return Bb.push([bb, ub]), this;
        hb = this.__data__ = new gu(Bb)
      }
      return hb.set(bb, ub), this
    };
    var Pu = Hu ? Fb(Hu, Object) : function() {
        return []
      },
      qu = function(bb) {
        return hu.call(bb)
      };

    function Eu(bb, ub) {
      return !!(ub = null == ub ? Ob : ub) && ("number" == typeof bb || tb.test(bb)) && bb > -1 && bb % 1 == 0 && bb < ub
    }

    function yu(bb) {
      var ub = bb && bb.constructor;
      return bb === ("function" == typeof ub && ub.prototype || cb)
    }

    function Vu(bb) {
      if (null != bb) {
        try {
          return bu.call(bb)
        } catch (ub) {}
        try {
          return bb + ""
        } catch (ub) {}
      }
      return ""
    }

    function Fu(bb, ub) {
      return bb === ub || bb !== bb && ub !== ub
    }(Xu && qu(new Xu(new ArrayBuffer(1))) != Wb || pu && qu(new pu) != ab || ou && qu(ou.resolve()) != Zb || Au && qu(new Au) != pb || lu && qu(new lu) != lb) && (qu = function(bb) {
      var ub = hu.call(bb),
        hb = ub == wb ? bb.constructor : void 0,
        Bb = hb ? Vu(hb) : void 0;
      if (Bb) switch (Bb) {
        case Wu:
          return Wb;
        case Cu:
          return ab;
        case du:
          return Zb;
        case ru:
          return pb;
        case ju:
          return lb
      }
      return ub
    });
    var fu = Array.isArray;

    function ku(bb) {
      return null != bb && function(bb) {
        return "number" == typeof bb && bb > -1 && bb % 1 == 0 && bb <= Ob
      }(bb.length) && !cu(bb)
    }
    var Tu = wu || function() {
      return !1
    };

    function cu(bb) {
      var ub = Qu(bb) ? hu.call(bb) : "";
      return ub == Yb || ub == Sb
    }

    function Qu(bb) {
      var ub = typeof bb;
      return !!bb && ("object" == ub || "function" == ub)
    }

    function Ru(bb) {
      return ku(bb) ? vu(bb) : function(bb) {
        if (!yu(bb)) return Zu(bb);
        var ub = [];
        for (var hb in Object(bb)) uu.call(bb, hb) && "constructor" != hb && ub.push(hb);
        return ub
      }(bb)
    }
    bb.exports = function(bb) {
      return eu(bb, !0, !0)
    }
  },
  38079: bb => {
    function ub(bb, ub, hb) {
      for (var Bb = bb.length, Ob = -1 / 0, Gb = 1 / 0, Ub = 0; Ub < Bb; Ub++) {
        var Lb = (hb[0][Ub] - bb[Ub]) / ub[Ub],
          Yb = (hb[1][Ub] - bb[Ub]) / ub[Ub];
        if (Lb > Yb) {
          var Sb = Lb;
          Lb = Yb, Yb = Sb
        }
        if (Yb < Ob || Lb > Gb) return 1 / 0;
        Lb > Ob && (Ob = Lb), Yb < Gb && (Gb = Yb)
      }
      return Ob > Gb ? 1 / 0 : Ob
    }
    bb.exports = function(bb, hb, Bb, Ob) {
      var Gb = ub(hb, Bb, Ob);
      if (Gb === 1 / 0) bb = null;
      else {
        bb = bb || [];
        for (var Ub = 0; Ub < hb.length; Ub++) bb[Ub] = hb[Ub] + Bb[Ub] * Gb
      }
      return bb
    }, bb.exports.distance = ub
  },
  37357: (bb, ub, hb) => {
    var Bb = hb(37363);

    function Ob(bb) {
      for (var ub, hb, Ob = 0, Gb = bb.length, Ub = 0; Ub < bb.length;) {
        for (ub = bb[Ub], hb = 0; Ub < Gb && bb[Ub] === ub;) ++Ub, ++hb;
        Ob += Bb.log2(hb) / 7 | 0, Ob += Bb.log2(ub >>> 0) / 7 | 0, Ob += 2
      }
      return Ob
    }
    ub.size = Ob, ub.encode = function(bb, ub) {
      ub || (ub = new Uint8Array(Ob(bb)));
      for (var hb, Bb, Gb = 0, Ub = ub.length, Lb = 0; Lb < bb.length;) {
        for (hb = bb[Lb], Bb = 0; Lb < bb.length && bb[Lb] === hb;) ++Lb, ++Bb;
        for (; Gb < Ub && Bb >= 128;) ub[Gb++] = 128 + (127 & Bb), Bb >>>= 7;
        if (Gb >= Ub) throw new Error("RLE buffer overflow");
        for (ub[Gb++] = Bb, hb >>>= 0; Gb < Ub && hb >= 128;) ub[Gb++] = 128 + (127 & hb), hb >>>= 7;
        if (Gb >= Ub) throw new Error("RLE buffer overflow");
        ub[Gb++] = hb
      }
      return ub
    }, ub.decode = function(bb, ub) {
      for (var hb, Bb, Ob, Gb, Ub = ub.length, Lb = bb.length, Yb = 0, Sb = 0; Sb < Lb;) {
        for (hb = 0, Bb = 0; Sb < Lb && bb[Sb] >= 128;) hb += (127 & bb[Sb++]) << Bb, Bb += 7;
        if (hb += bb[Sb++] << Bb, Sb >= Lb) throw new Error("RLE buffer underrun");
        if (Yb + hb > Ub) throw new Error("Chunk buffer overflow");
        for (Ob = 0, Bb = 0; Sb < Lb && bb[Sb] >= 128;) Ob += (127 & bb[Sb++]) << Bb, Bb += 7;
        if (Sb >= Lb) throw new Error("RLE buffer underrun");
        for (Ob += bb[Sb++] << Bb, Gb = 0; Gb < hb; ++Gb) ub[Yb++] = Ob
      }
      return ub
    }
  },
  37363: (bb, ub) => {
    function hb(bb) {
      var ub = 32;
      return (bb &= -bb) && ub--, 65535 & bb && (ub -= 16), 16711935 & bb && (ub -= 8), 252645135 & bb && (ub -= 4), 858993459 & bb && (ub -= 2), 1431655765 & bb && (ub -= 1), ub
    }
    ub.INT_BITS = 32, ub.INT_MAX = 2147483647, ub.INT_MIN = -1 << 31, ub.sign = function(bb) {
      return (bb > 0) - (bb < 0)
    }, ub.abs = function(bb) {
      var ub = bb >> 31;
      return (bb ^ ub) - ub
    }, ub.min = function(bb, ub) {
      return ub ^ (bb ^ ub) & -(bb < ub)
    }, ub.max = function(bb, ub) {
      return bb ^ (bb ^ ub) & -(bb < ub)
    }, ub.isPow2 = function(bb) {
      return !(bb & bb - 1) && !!bb
    }, ub.log2 = function(bb) {
      var ub, hb;
      return ub = (bb > 65535) << 4, ub |= hb = ((bb >>>= ub) > 255) << 3, ub |= hb = ((bb >>>= hb) > 15) << 2, (ub |= hb = ((bb >>>= hb) > 3) << 1) | (bb >>>= hb) >> 1
    }, ub.log10 = function(bb) {
      return bb >= 1e9 ? 9 : bb >= 1e8 ? 8 : bb >= 1e7 ? 7 : bb >= 1e6 ? 6 : bb >= 1e5 ? 5 : bb >= 1e4 ? 4 : bb >= 1e3 ? 3 : bb >= 100 ? 2 : bb >= 10 ? 1 : 0
    }, ub.popCount = function(bb) {
      return 16843009 * ((bb = (858993459 & (bb -= bb >>> 1 & 1431655765)) + (bb >>> 2 & 858993459)) + (bb >>> 4) & 252645135) >>> 24
    }, ub.countTrailingZeros = hb, ub.nextPow2 = function(bb) {
      return bb += 0 === bb, --bb, bb |= bb >>> 1, bb |= bb >>> 2, bb |= bb >>> 4, bb |= bb >>> 8, (bb |= bb >>> 16) + 1
    }, ub.prevPow2 = function(bb) {
      return bb |= bb >>> 1, bb |= bb >>> 2, bb |= bb >>> 4, bb |= bb >>> 8, (bb |= bb >>> 16) - (bb >>> 1)
    }, ub.parity = function(bb) {
      return bb ^= bb >>> 16, bb ^= bb >>> 8, bb ^= bb >>> 4, 27030 >>> (bb &= 15) & 1
    };
    var Bb = new Array(256);
    ! function(bb) {
      for (var ub = 0; ub < 256; ++ub) {
        var hb = ub,
          Bb = ub,
          Ob = 7;
        for (hb >>>= 1; hb; hb >>>= 1) Bb <<= 1, Bb |= 1 & hb, --Ob;
        bb[ub] = Bb << Ob & 255
      }
    }(Bb), ub.reverse = function(bb) {
      return Bb[255 & bb] << 24 | Bb[bb >>> 8 & 255] << 16 | Bb[bb >>> 16 & 255] << 8 | Bb[bb >>> 24 & 255]
    }, ub.interleave2 = function(bb, ub) {
      return (bb = 1431655765 & ((bb = 858993459 & ((bb = 252645135 & ((bb = 16711935 & ((bb &= 65535) | bb << 8)) | bb << 4)) | bb << 2)) | bb << 1)) | (ub = 1431655765 & ((ub = 858993459 & ((ub = 252645135 & ((ub = 16711935 & ((ub &= 65535) | ub << 8)) | ub << 4)) | ub << 2)) | ub << 1)) << 1
    }, ub.deinterleave2 = function(bb, ub) {
      return (bb = 65535 & ((bb = 16711935 & ((bb = 252645135 & ((bb = 858993459 & ((bb = bb >>> ub & 1431655765) | bb >>> 1)) | bb >>> 2)) | bb >>> 4)) | bb >>> 16)) << 16 >> 16
    }, ub.interleave3 = function(bb, ub, hb) {
      return bb = 1227133513 & ((bb = 3272356035 & ((bb = 251719695 & ((bb = 4278190335 & ((bb &= 1023) | bb << 16)) | bb << 8)) | bb << 4)) | bb << 2), (bb |= (ub = 1227133513 & ((ub = 3272356035 & ((ub = 251719695 & ((ub = 4278190335 & ((ub &= 1023) | ub << 16)) | ub << 8)) | ub << 4)) | ub << 2)) << 1) | (hb = 1227133513 & ((hb = 3272356035 & ((hb = 251719695 & ((hb = 4278190335 & ((hb &= 1023) | hb << 16)) | hb << 8)) | hb << 4)) | hb << 2)) << 2
    }, ub.deinterleave3 = function(bb, ub) {
      return (bb = 1023 & ((bb = 4278190335 & ((bb = 251719695 & ((bb = 3272356035 & ((bb = bb >>> ub & 1227133513) | bb >>> 2)) | bb >>> 4)) | bb >>> 8)) | bb >>> 16)) << 22 >> 22
    }, ub.nextCombination = function(bb) {
      var ub = bb | bb - 1;
      return ub + 1 | (~ub & -~ub) - 1 >>> hb(bb) + 1
    }
  },
  36889: (bb, ub, hb) => {
    hb.d(ub, {
      Color3: () => Bb.b,
      b: () => Bb.c
    });
    var Bb = hb(36893);
    (0, Bb.g)()
  },
  37390: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob
    });
    var Bb = hb(37399);
    class Ob {
      static GetPlanes(bb) {
        const ub = [];
        for (let hb = 0; hb < 6; hb++) ub.push(new Bb.d(0, 0, 0, 0));
        return Ob.GetPlanesToRef(bb, ub), ub
      }
      static GetNearPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] + hb[2], ub.normal.y = hb[7] + hb[6], ub.normal.z = hb[11] + hb[10], ub.d = hb[15] + hb[14], ub.normalize()
      }
      static GetFarPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] - hb[2], ub.normal.y = hb[7] - hb[6], ub.normal.z = hb[11] - hb[10], ub.d = hb[15] - hb[14], ub.normalize()
      }
      static GetLeftPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] + hb[0], ub.normal.y = hb[7] + hb[4], ub.normal.z = hb[11] + hb[8], ub.d = hb[15] + hb[12], ub.normalize()
      }
      static GetRightPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] - hb[0], ub.normal.y = hb[7] - hb[4], ub.normal.z = hb[11] - hb[8], ub.d = hb[15] - hb[12], ub.normalize()
      }
      static GetTopPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] - hb[1], ub.normal.y = hb[7] - hb[5], ub.normal.z = hb[11] - hb[9], ub.d = hb[15] - hb[13], ub.normalize()
      }
      static GetBottomPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] + hb[1], ub.normal.y = hb[7] + hb[5], ub.normal.z = hb[11] + hb[9], ub.d = hb[15] + hb[13], ub.normalize()
      }
      static GetPlanesToRef(bb, ub) {
        Ob.GetNearPlaneToRef(bb, ub[0]), Ob.GetFarPlaneToRef(bb, ub[1]), Ob.GetLeftPlaneToRef(bb, ub[2]), Ob.GetRightPlaneToRef(bb, ub[3]), Ob.GetTopPlaneToRef(bb, ub[4]), Ob.GetBottomPlaneToRef(bb, ub[5])
      }
      static IsPointInFrustum(bb, ub) {
        for (let hb = 0; hb < 6; hb++)
          if (ub[hb].dotCoordinate(bb) < 0) return !1;
        return !0
      }
    }
  },
  37399: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob
    });
    var Bb = hb(36727);
    class Ob {
      constructor(bb, ub, hb, Ob) {
        this.normal = new Bb.q(bb, ub, hb), this.d = Ob
      }
      ZBb() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Ob(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let ub = 0;
        return 0 !== bb && (ub = 1 / bb), this.normal.x *= ub, this.normal.y *= ub, this.normal.z *= ub, this.d *= ub, this
      }
      transform(bb) {
        const ub = Ob._TmpMatrix;
        bb.invertToRef(ub);
        const hb = ub.m,
          Bb = this.normal.x,
          Gb = this.normal.y,
          Ub = this.normal.z,
          Lb = this.d,
          Yb = Bb * hb[0] + Gb * hb[1] + Ub * hb[2] + Lb * hb[3],
          Sb = Bb * hb[4] + Gb * hb[5] + Ub * hb[6] + Lb * hb[7],
          ab = Bb * hb[8] + Gb * hb[9] + Ub * hb[10] + Lb * hb[11],
          Hb = Bb * hb[12] + Gb * hb[13] + Ub * hb[14] + Lb * hb[15];
        return new Ob(Yb, Sb, ab, Hb)
      }
      dotCoordinate(bb) {
        return this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z + this.d
      }
      copyFromPoints(bb, ub, hb) {
        const Bb = ub.x - bb.x,
          Ob = ub.y - bb.y,
          Gb = ub.z - bb.z,
          Ub = hb.x - bb.x,
          Lb = hb.y - bb.y,
          Yb = hb.z - bb.z,
          Sb = Ob * Yb - Gb * Lb,
          ab = Gb * Ub - Bb * Yb,
          Hb = Bb * Lb - Ob * Ub,
          wb = Math.sqrt(Sb * Sb + ab * ab + Hb * Hb);
        let Zb;
        return Zb = 0 !== wb ? 1 / wb : 0, this.normal.x = Sb * Zb, this.normal.y = ab * Zb, this.normal.z = Hb * Zb, this.d = -(this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z), this
      }
      isFrontFacingTo(bb, ub) {
        return Bb.q.Dot(this.normal, bb) <= ub
      }
      signedDistanceTo(bb) {
        return Bb.q.Dot(bb, this.normal) + this.d
      }
      static FromArray(bb) {
        return new Ob(bb[0], bb[1], bb[2], bb[3])
      }
      static FromPoints(bb, ub, hb) {
        const Bb = new Ob(0, 0, 0, 0);
        return Bb.copyFromPoints(bb, ub, hb), Bb
      }
      static FromPositionAndNormal(bb, ub) {
        const hb = new Ob(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(bb, ub, hb)
      }
      static FromPositionAndNormalToRef(bb, ub, hb) {
        return hb.normal.mD(ub), hb.normal.normalize(), hb.d = -bb.dot(hb.normal), hb
      }
      static SignedDistanceToPlaneFromPositionAndNormal(bb, ub, hb) {
        const Ob = -(ub.x * bb.x + ub.y * bb.y + ub.z * bb.z);
        return Bb.q.Dot(hb, ub) + Ob
      }
    }
    Ob._TmpMatrix = Bb.d.Identity()
  },
  36720: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      Matrix: () => Bb.d,
      Quaternion: () => Bb.f,
      RegisterMathVector: () => Bb.h,
      TmpVectors: () => Bb.i,
      Vector2: () => Bb.m,
      YX: () => Bb.q,
      Vector4: () => Bb.r
    });
    var Bb = hb(36727);
    (0, Bb.h)()
  },
  37699: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb
    });
    class Bb {
      constructor(bb, ub, hb, Bb) {
        this.x = bb, this.y = ub, this.width = hb, this.height = Bb
      }
      toGlobal(bb, ub) {
        return new Bb(this.x * bb, this.y * ub, this.width * bb, this.height * ub)
      }
      toGlobalToRef(bb, ub, hb) {
        return hb.x = this.x * bb, hb.y = this.y * ub, hb.width = this.width * bb, hb.height = this.height * ub, this
      }
      clone() {
        return new Bb(this.x, this.y, this.width, this.height)
      }
    }
  },
  37507: (bb, ub, hb) => {
    function Bb() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (bb => {
        const ub = 16 * Math.random() | 0;
        return ("x" === bb ? ub : 3 & ub | 8).toString(16)
      }))
    }
    hb.d(ub, {
      d: () => Bb
    })
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);