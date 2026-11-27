/*! For license information please see fl4vv.261.d1c36353.chunk.js.LICENSE.txt */
export const id = 261;
export const ids = [261, 268];
export const modules = {
  39782: rr => {
    rr.exports = function(rr) {
      return null != rr && null != rr.constructor && "function" === typeof rr.constructor.isBuffer && rr.constructor.isBuffer(rr)
    }
  },
  39760: (rr, Sr, Qr) => {
    var Zr = Qr(39767),
      Wr = Qr(39774),
      ar = Qr(39782);
    Qr.g.__TYPEDARRAY_POOL || (Qr.g.__TYPEDARRAY_POOL = {
      UINT8: Wr([32, 0]),
      UINT16: Wr([32, 0]),
      UINT32: Wr([32, 0]),
      INT8: Wr([32, 0]),
      INT16: Wr([32, 0]),
      INT32: Wr([32, 0]),
      FLOAT: Wr([32, 0]),
      DOUBLE: Wr([32, 0]),
      DATA: Wr([32, 0]),
      UINT8C: Wr([32, 0]),
      BUFFER: Wr([32, 0])
    });
    var jr = "undefined" !== typeof Uint8ClampedArray,
      Ir = Qr.g.__TYPEDARRAY_POOL;
    Ir.UINT8C || (Ir.UINT8C = Wr([32, 0])), Ir.BUFFER || (Ir.BUFFER = Wr([32, 0]));
    var fr = Ir.DATA,
      Er = Ir.BUFFER;

    function pr(rr) {
      if (rr) {
        var Sr = rr.length || rr.byteLength,
          Qr = Zr.log2(Sr);
        fr[Qr].push(rr)
      }
    }

    function xr(rr) {
      rr = Zr.nextPow2(rr);
      var Sr = Zr.log2(rr),
        Qr = fr[Sr];
      return Qr.length > 0 ? Qr.pop() : new ArrayBuffer(rr)
    }

    function mr(rr) {
      return new Uint8Array(xr(rr), 0, rr)
    }

    function Nr(rr) {
      return new Uint16Array(xr(2 * rr), 0, rr)
    }

    function Ur(rr) {
      return new Uint32Array(xr(4 * rr), 0, rr)
    }

    function tr(rr) {
      return new Int8Array(xr(rr), 0, rr)
    }

    function hr(rr) {
      return new Int16Array(xr(2 * rr), 0, rr)
    }

    function zr(rr) {
      return new Int32Array(xr(4 * rr), 0, rr)
    }

    function Yr(rr) {
      return new Float32Array(xr(4 * rr), 0, rr)
    }

    function nr(rr) {
      return new Float64Array(xr(8 * rr), 0, rr)
    }

    function er(rr) {
      return jr ? new Uint8ClampedArray(xr(rr), 0, rr) : mr(rr)
    }

    function Kr(rr) {
      return new DataView(xr(rr), 0, rr)
    }
    Sr.free = function(rr) {
      if (ar(rr)) Er[Zr.log2(rr.length)].push(rr);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(rr) && (rr = rr.buffer), !rr) return;
        var Sr = rr.length || rr.byteLength,
          Qr = 0 | Zr.log2(Sr);
        fr[Qr].push(rr)
      }
    }, Sr.freeUint8 = Sr.freeUint16 = Sr.freeUint32 = Sr.freeInt8 = Sr.freeInt16 = Sr.freeInt32 = Sr.freeFloat32 = Sr.freeFloat = Sr.freeFloat64 = Sr.freeDouble = Sr.freeUint8Clamped = Sr.freeDataView = function(rr) {
      pr(rr.buffer)
    }, Sr.freeArrayBuffer = pr, Sr.freeBuffer = function(rr) {
      Er[Zr.log2(rr.length)].push(rr)
    }, Sr.malloc = function(rr, Sr) {
      if (void 0 === Sr || "arraybuffer" === Sr) return xr(rr);
      switch (Sr) {
        case "uint8":
          return mr(rr);
        case "uint16":
          return Nr(rr);
        case "uint32":
          return Ur(rr);
        case "int8":
          return tr(rr);
        case "int16":
          return hr(rr);
        case "int32":
          return zr(rr);
        case "float":
        case "float32":
          return Yr(rr);
        case "double":
        case "float64":
          return nr(rr);
        case "uint8_clamped":
          return er(rr);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return Kr(rr);
        default:
          return null
      }
      return null
    }, Sr.mallocArrayBuffer = xr, Sr.mallocUint8 = mr, Sr.mallocUint16 = Nr, Sr.mallocUint32 = Ur, Sr.mallocInt8 = tr, Sr.mallocInt16 = hr, Sr.mallocInt32 = zr, Sr.mallocFloat32 = Sr.mallocFloat = Yr, Sr.mallocFloat64 = Sr.mallocDouble = nr, Sr.mallocUint8Clamped = er, Sr.mallocDataView = Kr, Sr.clearCache = function() {
      for (var rr = 0; rr < 32; ++rr) Ir.UINT8[rr].length = 0, Ir.UINT16[rr].length = 0, Ir.UINT32[rr].length = 0, Ir.INT8[rr].length = 0, Ir.INT16[rr].length = 0, Ir.INT32[rr].length = 0, Ir.FLOAT[rr].length = 0, Ir.DOUBLE[rr].length = 0, Ir.UINT8C[rr].length = 0, fr[rr].length = 0, Er[rr].length = 0
    }
  },
  39767: (rr, Sr) => {
    function Qr(rr) {
      var Sr = 32;
      return (rr &= -rr) && Sr--, 65535 & rr && (Sr -= 16), 16711935 & rr && (Sr -= 8), 252645135 & rr && (Sr -= 4), 858993459 & rr && (Sr -= 2), 1431655765 & rr && (Sr -= 1), Sr
    }
    Sr.INT_BITS = 32, Sr.INT_MAX = 2147483647, Sr.INT_MIN = -1 << 31, Sr.sign = function(rr) {
      return (rr > 0) - (rr < 0)
    }, Sr.abs = function(rr) {
      var Sr = rr >> 31;
      return (rr ^ Sr) - Sr
    }, Sr.min = function(rr, Sr) {
      return Sr ^ (rr ^ Sr) & -(rr < Sr)
    }, Sr.max = function(rr, Sr) {
      return rr ^ (rr ^ Sr) & -(rr < Sr)
    }, Sr.isPow2 = function(rr) {
      return !(rr & rr - 1) && !!rr
    }, Sr.log2 = function(rr) {
      var Sr, Qr;
      return Sr = (rr > 65535) << 4, Sr |= Qr = ((rr >>>= Sr) > 255) << 3, Sr |= Qr = ((rr >>>= Qr) > 15) << 2, (Sr |= Qr = ((rr >>>= Qr) > 3) << 1) | (rr >>>= Qr) >> 1
    }, Sr.log10 = function(rr) {
      return rr >= 1e9 ? 9 : rr >= 1e8 ? 8 : rr >= 1e7 ? 7 : rr >= 1e6 ? 6 : rr >= 1e5 ? 5 : rr >= 1e4 ? 4 : rr >= 1e3 ? 3 : rr >= 100 ? 2 : rr >= 10 ? 1 : 0
    }, Sr.popCount = function(rr) {
      return 16843009 * ((rr = (858993459 & (rr -= rr >>> 1 & 1431655765)) + (rr >>> 2 & 858993459)) + (rr >>> 4) & 252645135) >>> 24
    }, Sr.countTrailingZeros = Qr, Sr.nextPow2 = function(rr) {
      return rr += 0 === rr, --rr, rr |= rr >>> 1, rr |= rr >>> 2, rr |= rr >>> 4, rr |= rr >>> 8, (rr |= rr >>> 16) + 1
    }, Sr.prevPow2 = function(rr) {
      return rr |= rr >>> 1, rr |= rr >>> 2, rr |= rr >>> 4, rr |= rr >>> 8, (rr |= rr >>> 16) - (rr >>> 1)
    }, Sr.parity = function(rr) {
      return rr ^= rr >>> 16, rr ^= rr >>> 8, rr ^= rr >>> 4, 27030 >>> (rr &= 15) & 1
    };
    var Zr = new Array(256);
    ! function(rr) {
      for (var Sr = 0; Sr < 256; ++Sr) {
        var Qr = Sr,
          Zr = Sr,
          Wr = 7;
        for (Qr >>>= 1; Qr; Qr >>>= 1) Zr <<= 1, Zr |= 1 & Qr, --Wr;
        rr[Sr] = Zr << Wr & 255
      }
    }(Zr), Sr.reverse = function(rr) {
      return Zr[255 & rr] << 24 | Zr[rr >>> 8 & 255] << 16 | Zr[rr >>> 16 & 255] << 8 | Zr[rr >>> 24 & 255]
    }, Sr.interleave2 = function(rr, Sr) {
      return (rr = 1431655765 & ((rr = 858993459 & ((rr = 252645135 & ((rr = 16711935 & ((rr &= 65535) | rr << 8)) | rr << 4)) | rr << 2)) | rr << 1)) | (Sr = 1431655765 & ((Sr = 858993459 & ((Sr = 252645135 & ((Sr = 16711935 & ((Sr &= 65535) | Sr << 8)) | Sr << 4)) | Sr << 2)) | Sr << 1)) << 1
    }, Sr.deinterleave2 = function(rr, Sr) {
      return (rr = 65535 & ((rr = 16711935 & ((rr = 252645135 & ((rr = 858993459 & ((rr = rr >>> Sr & 1431655765) | rr >>> 1)) | rr >>> 2)) | rr >>> 4)) | rr >>> 16)) << 16 >> 16
    }, Sr.interleave3 = function(rr, Sr, Qr) {
      return rr = 1227133513 & ((rr = 3272356035 & ((rr = 251719695 & ((rr = 4278190335 & ((rr &= 1023) | rr << 16)) | rr << 8)) | rr << 4)) | rr << 2), (rr |= (Sr = 1227133513 & ((Sr = 3272356035 & ((Sr = 251719695 & ((Sr = 4278190335 & ((Sr &= 1023) | Sr << 16)) | Sr << 8)) | Sr << 4)) | Sr << 2)) << 1) | (Qr = 1227133513 & ((Qr = 3272356035 & ((Qr = 251719695 & ((Qr = 4278190335 & ((Qr &= 1023) | Qr << 16)) | Qr << 8)) | Qr << 4)) | Qr << 2)) << 2
    }, Sr.deinterleave3 = function(rr, Sr) {
      return (rr = 1023 & ((rr = 4278190335 & ((rr = 251719695 & ((rr = 3272356035 & ((rr = rr >>> Sr & 1227133513) | rr >>> 2)) | rr >>> 4)) | rr >>> 8)) | rr >>> 16)) << 22 >> 22
    }, Sr.nextCombination = function(rr) {
      var Sr = rr | rr - 1;
      return Sr + 1 | (~Sr & -~Sr) - 1 >>> Qr(rr) + 1
    }
  },
  39757: (rr, Sr, Qr) => {
    rr.exports = function(rr, Sr, Qr) {
      switch (arguments.length) {
        case 1:
          return Zr = [], Er(Wr = rr, Wr, pr, !0), Zr;
        case 2:
          return "function" === typeof Sr ? Er(rr, rr, Sr, !0) : function(rr, Sr) {
            return Zr = [], Er(rr, Sr, pr, !1), Zr
          }(rr, Sr);
        case 3:
          return Er(rr, Sr, Qr, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var Wr
    };
    var Zr, Wr = Qr(39760),
      ar = Qr(39787),
      jr = Qr(39801);

    function Ir(rr, Sr) {
      for (var Qr = 0; Qr < rr; ++Qr)
        if (!(Sr[Qr] <= Sr[Qr + rr])) return !0;
      return !1
    }

    function fr(rr, Sr, Qr, Zr) {
      for (var Wr = 0, ar = 0, jr = 0, fr = rr.length; jr < fr; ++jr) {
        var Er = rr[jr];
        if (!Ir(Sr, Er)) {
          for (var pr = 0; pr < 2 * Sr; ++pr) Qr[Wr++] = Er[pr];
          Zr[ar++] = jr
        }
      }
      return ar
    }

    function Er(rr, Sr, Qr, Zr) {
      var Ir = rr.length,
        Er = Sr.length;
      if (!(Ir <= 0 || Er <= 0)) {
        var pr = rr[0].length >>> 1;
        if (!(pr <= 0)) {
          var xr, mr = Wr.mallocDouble(2 * pr * Ir),
            Nr = Wr.mallocInt32(Ir);
          if ((Ir = fr(rr, pr, mr, Nr)) > 0) {
            if (1 === pr && Zr) ar.init(Ir), xr = ar.sweepComplete(pr, Qr, 0, Ir, mr, Nr, 0, Ir, mr, Nr);
            else {
              var Ur = Wr.mallocDouble(2 * pr * Er),
                tr = Wr.mallocInt32(Er);
              (Er = fr(Sr, pr, Ur, tr)) > 0 && (ar.init(Ir + Er), xr = 1 === pr ? ar.sweepBipartite(pr, Qr, 0, Ir, mr, Nr, 0, Er, Ur, tr) : jr(pr, Qr, Zr, Ir, mr, Nr, Er, Ur, tr), Wr.free(Ur), Wr.free(tr))
            }
            Wr.free(mr), Wr.free(Nr)
          }
          return xr
        }
      }
    }

    function pr(rr, Sr) {
      Zr.push([rr, Sr])
    }
  },
  39803: (rr, Sr) => {
    var Qr = "d",
      Zr = "ax",
      Wr = "fp",
      ar = "es",
      jr = "rs",
      Ir = "re",
      fr = "rb",
      Er = "bs",
      pr = "be",
      xr = "bb",
      mr = [Qr, Zr, "vv", jr, Ir, fr, "ri", Er, pr, xr, "bi"];

    function Nr(rr) {
      var Sr = "bruteForce" + (rr ? "Full" : "Partial"),
        Zr = [],
        jr = mr.slice();
      rr || jr.splice(3, 0, Wr);
      var Ir = ["function " + Sr + "(" + jr.join() + "){"];

      function fr(Sr, Wr) {
        var jr = function(rr, Sr, Zr) {
          var Wr = "bruteForce" + (rr ? "Red" : "Blue") + (Sr ? "Flip" : "") + (Zr ? "Full" : ""),
            jr = ["function ", Wr, "(", mr.join(), "){", "var ", ar, "=2*", Qr, ";"],
            Ir = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            fr = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (Zr ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return rr ? jr.push(Ir, "Q", ":", fr) : jr.push(fr, "Q", ":", Ir), Zr ? jr.push("if(y1<x0||x1<y0)continue;") : Sr ? jr.push("if(y0<=x0||x1<y0)continue;") : jr.push("if(y0<x0||x1<y0)continue;"), jr.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), Sr ? jr.push("yi,xi") : jr.push("xi,yi"), jr.push(");if(rv!==void 0)return rv;}}}"), {
            name: Wr,
            code: jr.join("")
          }
        }(Sr, Wr, rr);
        Zr.push(jr.code), Ir.push("return " + jr.name + "(" + mr.join() + ");")
      }
      Ir.push("if(re-rs>be-bs){"), rr ? (fr(!0, !1), Ir.push("}else{"), fr(!1, !1)) : (Ir.push("if(fp){"), fr(!0, !0), Ir.push("}else{"), fr(!0, !1), Ir.push("}}else{if(fp){"), fr(!1, !0), Ir.push("}else{"), fr(!1, !1), Ir.push("}")), Ir.push("}}return " + Sr);
      var Er = Zr.join("") + Ir.join("");
      return new Function(Er)()
    }
    Sr.partial = Nr(!1), Sr.full = Nr(!0)
  },
  39801: (rr, Sr, Qr) => {
    rr.exports = function(rr, Sr, Qr, ar, pr, Lr, lr, Xr, Pr) {
      ! function(rr, Sr) {
        var Qr = 8 * Wr.log2(Sr + 1) * (rr + 1) | 0,
          ar = Wr.nextPow2(er * Qr);
        yr.length < ar && (Zr.free(yr), yr = Zr.mallocInt32(ar));
        var jr = Wr.nextPow2(Kr * Qr);
        Br.length < jr && (Zr.free(Br), Br = Zr.mallocDouble(jr))
      }(rr, ar + lr);
      var Hr, qr = 0,
        Rr = 2 * rr;
      Tr(qr++, 0, 0, ar, 0, lr, Qr ? 16 : 0, -1 / 0, 1 / 0), Qr || Tr(qr++, 0, 0, lr, 0, ar, 1, -1 / 0, 1 / 0);
      for (; qr > 0;) {
        var gr = (qr -= 1) * er,
          Cr = yr[gr],
          Mr = yr[gr + 1],
          Gr = yr[gr + 2],
          kr = yr[gr + 3],
          Ar = yr[gr + 4],
          Vr = yr[gr + 5],
          ir = qr * Kr,
          wr = Br[ir],
          cr = Br[ir + 1],
          Fr = 1 & Vr,
          or = !!(16 & Vr),
          br = pr,
          Jr = Lr,
          Dr = Xr,
          dr = Pr;
        if (Fr && (br = Xr, Jr = Pr, Dr = pr, dr = Lr), !(2 & Vr && Mr >= (Gr = hr(rr, Cr, Mr, Gr, br, Jr, cr))) && !(4 & Vr && (Mr = zr(rr, Cr, Mr, Gr, br, Jr, wr)) >= Gr)) {
          var sr = Gr - Mr,
            ur = Ar - kr;
          if (or) {
            if (rr * sr * (sr + ur) < Nr) {
              if (void 0 !== (Hr = fr.scanComplete(rr, Cr, Sr, Mr, Gr, br, Jr, kr, Ar, Dr, dr))) return Hr;
              continue
            }
          } else {
            if (rr * Math.min(sr, ur) < xr) {
              if (void 0 !== (Hr = jr(rr, Cr, Sr, Fr, Mr, Gr, br, Jr, kr, Ar, Dr, dr))) return Hr;
              continue
            }
            if (rr * sr * ur < mr) {
              if (void 0 !== (Hr = fr.scanBipartite(rr, Cr, Sr, Fr, Mr, Gr, br, Jr, kr, Ar, Dr, dr))) return Hr;
              continue
            }
          }
          var rS = Ur(rr, Cr, Mr, Gr, br, Jr, wr, cr);
          if (Mr < rS)
            if (rr * (rS - Mr) < xr) {
              if (void 0 !== (Hr = Ir(rr, Cr + 1, Sr, Mr, rS, br, Jr, kr, Ar, Dr, dr))) return Hr
            } else if (Cr === rr - 2) {
            if (void 0 !== (Hr = Fr ? fr.sweepBipartite(rr, Sr, kr, Ar, Dr, dr, Mr, rS, br, Jr) : fr.sweepBipartite(rr, Sr, Mr, rS, br, Jr, kr, Ar, Dr, dr))) return Hr
          } else Tr(qr++, Cr + 1, Mr, rS, kr, Ar, Fr, -1 / 0, 1 / 0), Tr(qr++, Cr + 1, kr, Ar, Mr, rS, 1 ^ Fr, -1 / 0, 1 / 0);
          if (rS < Gr) {
            var SS = Er(rr, Cr, kr, Ar, Dr, dr),
              QS = Dr[Rr * SS + Cr],
              ZS = tr(rr, Cr, SS, Ar, Dr, dr, QS);
            if (ZS < Ar && Tr(qr++, Cr, rS, Gr, ZS, Ar, (4 | Fr) + (or ? 16 : 0), QS, cr), kr < SS && Tr(qr++, Cr, rS, Gr, kr, SS, (2 | Fr) + (or ? 16 : 0), wr, QS), SS + 1 === ZS) {
              if (void 0 !== (Hr = or ? Or(rr, Cr, Sr, rS, Gr, br, Jr, SS, Dr, dr[SS]) : vr(rr, Cr, Sr, Fr, rS, Gr, br, Jr, SS, Dr, dr[SS]))) return Hr
            } else if (SS < ZS) {
              var WS;
              if (or) {
                if (rS < (WS = Yr(rr, Cr, rS, Gr, br, Jr, QS))) {
                  var aS = tr(rr, Cr, rS, WS, br, Jr, QS);
                  if (Cr === rr - 2) {
                    if (rS < aS && void 0 !== (Hr = fr.sweepComplete(rr, Sr, rS, aS, br, Jr, SS, ZS, Dr, dr))) return Hr;
                    if (aS < WS && void 0 !== (Hr = fr.sweepBipartite(rr, Sr, aS, WS, br, Jr, SS, ZS, Dr, dr))) return Hr
                  } else rS < aS && Tr(qr++, Cr + 1, rS, aS, SS, ZS, 16, -1 / 0, 1 / 0), aS < WS && (Tr(qr++, Cr + 1, aS, WS, SS, ZS, 0, -1 / 0, 1 / 0), Tr(qr++, Cr + 1, SS, ZS, aS, WS, 1, -1 / 0, 1 / 0))
                }
              } else rS < (WS = Fr ? nr(rr, Cr, rS, Gr, br, Jr, QS) : Yr(rr, Cr, rS, Gr, br, Jr, QS)) && (Cr === rr - 2 ? Hr = Fr ? fr.sweepBipartite(rr, Sr, SS, ZS, Dr, dr, rS, WS, br, Jr) : fr.sweepBipartite(rr, Sr, rS, WS, br, Jr, SS, ZS, Dr, dr) : (Tr(qr++, Cr + 1, rS, WS, SS, ZS, Fr, -1 / 0, 1 / 0), Tr(qr++, Cr + 1, SS, ZS, rS, WS, 1 ^ Fr, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var Zr = Qr(39760),
      Wr = Qr(39767),
      ar = Qr(39803),
      jr = ar.partial,
      Ir = ar.full,
      fr = Qr(39787),
      Er = Qr(39811),
      pr = Qr(39813),
      xr = 128,
      mr = 1 << 22,
      Nr = 1 << 22,
      Ur = pr("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      tr = pr("lo===p0", ["p0"]),
      hr = pr("lo<p0", ["p0"]),
      zr = pr("hi<=p0", ["p0"]),
      Yr = pr("lo<=p0&&p0<=hi", ["p0"]),
      nr = pr("lo<p0&&p0<=hi", ["p0"]),
      er = 6,
      Kr = 2,
      yr = Zr.mallocInt32(1024),
      Br = Zr.mallocDouble(1024);

    function Tr(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr) {
      var Er = er * rr;
      yr[Er] = Sr, yr[Er + 1] = Qr, yr[Er + 2] = Zr, yr[Er + 3] = Wr, yr[Er + 4] = ar, yr[Er + 5] = jr;
      var pr = Kr * rr;
      Br[pr] = Ir, Br[pr + 1] = fr
    }

    function vr(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er, pr) {
      var xr = 2 * rr,
        mr = fr * xr,
        Nr = Er[mr + Sr];
      rr: for (var Ur = Wr, tr = Wr * xr; Ur < ar; ++Ur, tr += xr) {
        var hr = jr[tr + Sr],
          zr = jr[tr + Sr + rr];
        if (!(Nr < hr || zr < Nr) && (!Zr || Nr !== hr)) {
          for (var Yr, nr = Ir[Ur], er = Sr + 1; er < rr; ++er) {
            hr = jr[tr + er], zr = jr[tr + er + rr];
            var Kr = Er[mr + er],
              yr = Er[mr + er + rr];
            if (zr < Kr || yr < hr) continue rr
          }
          if (void 0 !== (Yr = Zr ? Qr(pr, nr) : Qr(nr, pr))) return Yr
        }
      }
    }

    function Or(rr, Sr, Qr, Zr, Wr, ar, jr, Ir, fr, Er) {
      var pr = 2 * rr,
        xr = Ir * pr,
        mr = fr[xr + Sr];
      rr: for (var Nr = Zr, Ur = Zr * pr; Nr < Wr; ++Nr, Ur += pr) {
        var tr = jr[Nr];
        if (tr !== Er) {
          var hr = ar[Ur + Sr],
            zr = ar[Ur + Sr + rr];
          if (!(mr < hr || zr < mr)) {
            for (var Yr = Sr + 1; Yr < rr; ++Yr) {
              hr = ar[Ur + Yr], zr = ar[Ur + Yr + rr];
              var nr = fr[xr + Yr],
                er = fr[xr + Yr + rr];
              if (zr < nr || er < hr) continue rr
            }
            var Kr = Qr(tr, Er);
            if (void 0 !== Kr) return Kr
          }
        }
      }
    }
  },
  39811: (rr, Sr, Qr) => {
    rr.exports = function(rr, Sr, Qr, jr, Ir, fr) {
      if (jr <= Qr + 1) return Qr;
      var Er = Qr,
        pr = jr,
        xr = jr + Qr >>> 1,
        mr = 2 * rr,
        Nr = xr,
        Ur = Ir[mr * xr + Sr];
      for (; Er < pr;) {
        if (pr - Er < Wr) {
          ar(rr, Sr, Er, pr, Ir, fr), Ur = Ir[mr * xr + Sr];
          break
        }
        var tr = pr - Er,
          hr = Math.random() * tr + Er | 0,
          zr = Ir[mr * hr + Sr],
          Yr = Math.random() * tr + Er | 0,
          nr = Ir[mr * Yr + Sr],
          er = Math.random() * tr + Er | 0,
          Kr = Ir[mr * er + Sr];
        zr <= nr ? Kr >= nr ? (Nr = Yr, Ur = nr) : zr >= Kr ? (Nr = hr, Ur = zr) : (Nr = er, Ur = Kr) : nr >= Kr ? (Nr = Yr, Ur = nr) : Kr >= zr ? (Nr = hr, Ur = zr) : (Nr = er, Ur = Kr);
        for (var yr = mr * (pr - 1), Br = mr * Nr, Tr = 0; Tr < mr; ++Tr, ++yr, ++Br) {
          var vr = Ir[yr];
          Ir[yr] = Ir[Br], Ir[Br] = vr
        }
        var Or = fr[pr - 1];
        fr[pr - 1] = fr[Nr], fr[Nr] = Or;
        for (yr = mr * (pr - 1), Br = mr * (Nr = Zr(rr, Sr, Er, pr - 1, Ir, fr, Ur)), Tr = 0; Tr < mr; ++Tr, ++yr, ++Br) {
          vr = Ir[yr];
          Ir[yr] = Ir[Br], Ir[Br] = vr
        }
        Or = fr[pr - 1];
        if (fr[pr - 1] = fr[Nr], fr[Nr] = Or, xr < Nr) {
          for (pr = Nr - 1; Er < pr && Ir[mr * (pr - 1) + Sr] === Ur;) pr -= 1;
          pr += 1
        } else {
          if (!(Nr < xr)) break;
          for (Er = Nr + 1; Er < pr && Ir[mr * Er + Sr] === Ur;) Er += 1
        }
      }
      return Zr(rr, Sr, Qr, xr, Ir, fr, Ir[mr * xr + Sr])
    };
    var Zr = Qr(39813)("lo<p0", ["p0"]),
      Wr = 8;

    function ar(rr, Sr, Qr, Zr, Wr, ar) {
      for (var jr = 2 * rr, Ir = jr * (Qr + 1) + Sr, fr = Qr + 1; fr < Zr; ++fr, Ir += jr)
        for (var Er = Wr[Ir], pr = fr, xr = jr * (fr - 1); pr > Qr && Wr[xr + Sr] > Er; --pr, xr -= jr) {
          for (var mr = xr, Nr = xr + jr, Ur = 0; Ur < jr; ++Ur, ++mr, ++Nr) {
            var tr = Wr[mr];
            Wr[mr] = Wr[Nr], Wr[Nr] = tr
          }
          var hr = ar[pr];
          ar[pr] = ar[pr - 1], ar[pr - 1] = hr
        }
    }
  },
  39813: rr => {
    rr.exports = function(rr, Qr) {
      var Zr = "abcdef".split("").concat(Qr),
        Wr = [];
      rr.indexOf("lo") >= 0 && Wr.push("lo=e[k+n]");
      rr.indexOf("hi") >= 0 && Wr.push("hi=e[k+o]");
      return Zr.push(Sr.replace("_", Wr.join()).replace("$", rr)), Function.apply(void 0, Zr)
    };
    var Sr = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  39795: rr => {
    rr.exports = function(rr, Zr) {
      Zr <= 4 * Sr ? Qr(0, Zr - 1, rr) : Er(0, Zr - 1, rr)
    };
    var Sr = 32;

    function Qr(rr, Sr, Qr) {
      for (var Zr = 2 * (rr + 1), Wr = rr + 1; Wr <= Sr; ++Wr) {
        for (var ar = Qr[Zr++], jr = Qr[Zr++], Ir = Wr, fr = Zr - 2; Ir-- > rr;) {
          var Er = Qr[fr - 2],
            pr = Qr[fr - 1];
          if (Er < ar) break;
          if (Er === ar && pr < jr) break;
          Qr[fr] = Er, Qr[fr + 1] = pr, fr -= 2
        }
        Qr[fr] = ar, Qr[fr + 1] = jr
      }
    }

    function Zr(rr, Sr, Qr) {
      Sr *= 2;
      var Zr = Qr[rr *= 2],
        Wr = Qr[rr + 1];
      Qr[rr] = Qr[Sr], Qr[rr + 1] = Qr[Sr + 1], Qr[Sr] = Zr, Qr[Sr + 1] = Wr
    }

    function Wr(rr, Sr, Qr) {
      Sr *= 2, Qr[rr *= 2] = Qr[Sr], Qr[rr + 1] = Qr[Sr + 1]
    }

    function ar(rr, Sr, Qr, Zr) {
      Sr *= 2, Qr *= 2;
      var Wr = Zr[rr *= 2],
        ar = Zr[rr + 1];
      Zr[rr] = Zr[Sr], Zr[rr + 1] = Zr[Sr + 1], Zr[Sr] = Zr[Qr], Zr[Sr + 1] = Zr[Qr + 1], Zr[Qr] = Wr, Zr[Qr + 1] = ar
    }

    function jr(rr, Sr, Qr, Zr, Wr) {
      Sr *= 2, Wr[rr *= 2] = Wr[Sr], Wr[Sr] = Qr, Wr[rr + 1] = Wr[Sr + 1], Wr[Sr + 1] = Zr
    }

    function Ir(rr, Sr, Qr) {
      Sr *= 2;
      var Zr = Qr[rr *= 2],
        Wr = Qr[Sr];
      return !(Zr < Wr) && (Zr !== Wr || Qr[rr + 1] > Qr[Sr + 1])
    }

    function fr(rr, Sr, Qr, Zr) {
      var Wr = Zr[rr *= 2];
      return Wr < Sr || Wr === Sr && Zr[rr + 1] < Qr
    }

    function Er(rr, pr, xr) {
      var mr = (pr - rr + 1) / 6 | 0,
        Nr = rr + mr,
        Ur = pr - mr,
        tr = rr + pr >> 1,
        hr = tr - mr,
        zr = tr + mr,
        Yr = Nr,
        nr = hr,
        er = tr,
        Kr = zr,
        yr = Ur,
        Br = rr + 1,
        Tr = pr - 1,
        vr = 0;
      Ir(Yr, nr, xr) && (vr = Yr, Yr = nr, nr = vr), Ir(Kr, yr, xr) && (vr = Kr, Kr = yr, yr = vr), Ir(Yr, er, xr) && (vr = Yr, Yr = er, er = vr), Ir(nr, er, xr) && (vr = nr, nr = er, er = vr), Ir(Yr, Kr, xr) && (vr = Yr, Yr = Kr, Kr = vr), Ir(er, Kr, xr) && (vr = er, er = Kr, Kr = vr), Ir(nr, yr, xr) && (vr = nr, nr = yr, yr = vr), Ir(nr, er, xr) && (vr = nr, nr = er, er = vr), Ir(Kr, yr, xr) && (vr = Kr, Kr = yr, yr = vr);
      for (var Or = xr[2 * nr], Lr = xr[2 * nr + 1], lr = xr[2 * Kr], Xr = xr[2 * Kr + 1], Pr = 2 * Yr, Hr = 2 * er, qr = 2 * yr, Rr = 2 * Nr, gr = 2 * tr, Cr = 2 * Ur, Mr = 0; Mr < 2; ++Mr) {
        var Gr = xr[Pr + Mr],
          kr = xr[Hr + Mr],
          Ar = xr[qr + Mr];
        xr[Rr + Mr] = Gr, xr[gr + Mr] = kr, xr[Cr + Mr] = Ar
      }
      Wr(hr, rr, xr), Wr(zr, pr, xr);
      for (var Vr = Br; Vr <= Tr; ++Vr)
        if (fr(Vr, Or, Lr, xr)) Vr !== Br && Zr(Vr, Br, xr), ++Br;
        else if (!fr(Vr, lr, Xr, xr))
        for (;;) {
          if (fr(Tr, lr, Xr, xr)) {
            fr(Tr, Or, Lr, xr) ? (ar(Vr, Br, Tr, xr), ++Br, --Tr) : (Zr(Vr, Tr, xr), --Tr);
            break
          }
          if (--Tr < Vr) break
        }
      jr(rr, Br - 1, Or, Lr, xr), jr(pr, Tr + 1, lr, Xr, xr), Br - 2 - rr <= Sr ? Qr(rr, Br - 2, xr) : Er(rr, Br - 2, xr), pr - (Tr + 2) <= Sr ? Qr(Tr + 2, pr, xr) : Er(Tr + 2, pr, xr), Tr - Br <= Sr ? Qr(Br, Tr, xr) : Er(Br, Tr, xr)
    }
  },
  39787: (rr, Sr, Qr) => {
    rr.exports = {
      init: function(rr) {
        var Sr = Wr.nextPow2(rr);
        fr.length < Sr && (Zr.free(fr), fr = Zr.mallocInt32(Sr));
        Er.length < Sr && (Zr.free(Er), Er = Zr.mallocInt32(Sr));
        pr.length < Sr && (Zr.free(pr), pr = Zr.mallocInt32(Sr));
        xr.length < Sr && (Zr.free(xr), xr = Zr.mallocInt32(Sr));
        mr.length < Sr && (Zr.free(mr), mr = Zr.mallocInt32(Sr));
        Nr.length < Sr && (Zr.free(Nr), Nr = Zr.mallocInt32(Sr));
        var Qr = 8 * Sr;
        Ur.length < Qr && (Zr.free(Ur), Ur = Zr.mallocDouble(Qr))
      },
      sweepBipartite: function(rr, Sr, Qr, Zr, Wr, Ir, mr, Nr, zr, Yr) {
        for (var nr = 0, er = 2 * rr, Kr = rr - 1, yr = er - 1, Br = Qr; Br < Zr; ++Br) {
          var Tr = Ir[Br],
            vr = er * Br;
          Ur[nr++] = Wr[vr + Kr], Ur[nr++] = -(Tr + 1), Ur[nr++] = Wr[vr + yr], Ur[nr++] = Tr
        }
        for (Br = mr; Br < Nr; ++Br) {
          Tr = Yr[Br] + jr;
          var Or = er * Br;
          Ur[nr++] = zr[Or + Kr], Ur[nr++] = -Tr, Ur[nr++] = zr[Or + yr], Ur[nr++] = Tr
        }
        var Lr = nr >>> 1;
        ar(Ur, Lr);
        var lr = 0,
          Xr = 0;
        for (Br = 0; Br < Lr; ++Br) {
          var Pr = 0 | Ur[2 * Br + 1];
          if (Pr >= jr) tr(pr, xr, Xr--, Pr = Pr - jr | 0);
          else if (Pr >= 0) tr(fr, Er, lr--, Pr);
          else if (Pr <= -jr) {
            Pr = -Pr - jr | 0;
            for (var Hr = 0; Hr < lr; ++Hr) {
              if (void 0 !== (qr = Sr(fr[Hr], Pr))) return qr
            }
            hr(pr, xr, Xr++, Pr)
          } else {
            Pr = -Pr - 1 | 0;
            for (Hr = 0; Hr < Xr; ++Hr) {
              var qr;
              if (void 0 !== (qr = Sr(Pr, pr[Hr]))) return qr
            }
            hr(fr, Er, lr++, Pr)
          }
        }
      },
      sweepComplete: function(rr, Sr, Qr, Zr, Wr, jr, Ir, zr, Yr, nr) {
        for (var er = 0, Kr = 2 * rr, yr = rr - 1, Br = Kr - 1, Tr = Qr; Tr < Zr; ++Tr) {
          var vr = jr[Tr] + 1 << 1,
            Or = Kr * Tr;
          Ur[er++] = Wr[Or + yr], Ur[er++] = -vr, Ur[er++] = Wr[Or + Br], Ur[er++] = vr
        }
        for (Tr = Ir; Tr < zr; ++Tr) {
          vr = nr[Tr] + 1 << 1;
          var Lr = Kr * Tr;
          Ur[er++] = Yr[Lr + yr], Ur[er++] = 1 | -vr, Ur[er++] = Yr[Lr + Br], Ur[er++] = 1 | vr
        }
        var lr = er >>> 1;
        ar(Ur, lr);
        var Xr = 0,
          Pr = 0,
          Hr = 0;
        for (Tr = 0; Tr < lr; ++Tr) {
          var qr = 0 | Ur[2 * Tr + 1],
            Rr = 1 & qr;
          if (Tr < lr - 1 && qr >> 1 === Ur[2 * Tr + 3] >> 1 && (Rr = 2, Tr += 1), qr < 0) {
            for (var gr = -(qr >> 1) - 1, Cr = 0; Cr < Hr; ++Cr) {
              if (void 0 !== (Mr = Sr(mr[Cr], gr))) return Mr
            }
            if (0 !== Rr)
              for (Cr = 0; Cr < Xr; ++Cr) {
                if (void 0 !== (Mr = Sr(fr[Cr], gr))) return Mr
              }
            if (1 !== Rr)
              for (Cr = 0; Cr < Pr; ++Cr) {
                var Mr;
                if (void 0 !== (Mr = Sr(pr[Cr], gr))) return Mr
              }
            0 === Rr ? hr(fr, Er, Xr++, gr) : 1 === Rr ? hr(pr, xr, Pr++, gr) : 2 === Rr && hr(mr, Nr, Hr++, gr)
          } else {
            gr = (qr >> 1) - 1;
            0 === Rr ? tr(fr, Er, Xr--, gr) : 1 === Rr ? tr(pr, xr, Pr--, gr) : 2 === Rr && tr(mr, Nr, Hr--, gr)
          }
        }
      },
      scanBipartite: function(rr, Sr, Qr, Zr, Wr, Ir, pr, xr, mr, Nr, zr, Yr) {
        var nr = 0,
          er = 2 * rr,
          Kr = Sr,
          yr = Sr + rr,
          Br = 1,
          Tr = 1;
        Zr ? Tr = jr : Br = jr;
        for (var vr = Wr; vr < Ir; ++vr) {
          var Or = vr + Br,
            Lr = er * vr;
          Ur[nr++] = pr[Lr + Kr], Ur[nr++] = -Or, Ur[nr++] = pr[Lr + yr], Ur[nr++] = Or
        }
        for (vr = mr; vr < Nr; ++vr) {
          Or = vr + Tr;
          var lr = er * vr;
          Ur[nr++] = zr[lr + Kr], Ur[nr++] = -Or
        }
        var Xr = nr >>> 1;
        ar(Ur, Xr);
        var Pr = 0;
        for (vr = 0; vr < Xr; ++vr) {
          var Hr = 0 | Ur[2 * vr + 1];
          if (Hr < 0) {
            var qr = !1;
            if ((Or = -Hr) >= jr ? (qr = !Zr, Or -= jr) : (qr = !!Zr, Or -= 1), qr) hr(fr, Er, Pr++, Or);
            else {
              var Rr = Yr[Or],
                gr = er * Or,
                Cr = zr[gr + Sr + 1],
                Mr = zr[gr + Sr + 1 + rr];
              rr: for (var Gr = 0; Gr < Pr; ++Gr) {
                var kr = fr[Gr],
                  Ar = er * kr;
                if (!(Mr < pr[Ar + Sr + 1] || pr[Ar + Sr + 1 + rr] < Cr)) {
                  for (var Vr = Sr + 2; Vr < rr; ++Vr)
                    if (zr[gr + Vr + rr] < pr[Ar + Vr] || pr[Ar + Vr + rr] < zr[gr + Vr]) continue rr;
                  var ir, wr = xr[kr];
                  if (void 0 !== (ir = Zr ? Qr(Rr, wr) : Qr(wr, Rr))) return ir
                }
              }
            }
          } else tr(fr, Er, Pr--, Hr - Br)
        }
      },
      scanComplete: function(rr, Sr, Qr, Zr, Wr, Ir, Er, pr, xr, mr, Nr) {
        for (var tr = 0, hr = 2 * rr, zr = Sr, Yr = Sr + rr, nr = Zr; nr < Wr; ++nr) {
          var er = nr + jr,
            Kr = hr * nr;
          Ur[tr++] = Ir[Kr + zr], Ur[tr++] = -er, Ur[tr++] = Ir[Kr + Yr], Ur[tr++] = er
        }
        for (nr = pr; nr < xr; ++nr) {
          er = nr + 1;
          var yr = hr * nr;
          Ur[tr++] = mr[yr + zr], Ur[tr++] = -er
        }
        var Br = tr >>> 1;
        ar(Ur, Br);
        var Tr = 0;
        for (nr = 0; nr < Br; ++nr) {
          var vr = 0 | Ur[2 * nr + 1];
          if (vr < 0) {
            if ((er = -vr) >= jr) fr[Tr++] = er - jr;
            else {
              var Or = Nr[er -= 1],
                Lr = hr * er,
                lr = mr[Lr + Sr + 1],
                Xr = mr[Lr + Sr + 1 + rr];
              rr: for (var Pr = 0; Pr < Tr; ++Pr) {
                var Hr = fr[Pr],
                  qr = Er[Hr];
                if (qr === Or) break;
                var Rr = hr * Hr;
                if (!(Xr < Ir[Rr + Sr + 1] || Ir[Rr + Sr + 1 + rr] < lr)) {
                  for (var gr = Sr + 2; gr < rr; ++gr)
                    if (mr[Lr + gr + rr] < Ir[Rr + gr] || Ir[Rr + gr + rr] < mr[Lr + gr]) continue rr;
                  var Cr = Qr(qr, Or);
                  if (void 0 !== Cr) return Cr
                }
              }
            }
          } else {
            for (er = vr - jr, Pr = Tr - 1; Pr >= 0; --Pr)
              if (fr[Pr] === er) {
                for (gr = Pr + 1; gr < Tr; ++gr) fr[gr - 1] = fr[gr];
                break
              }-- Tr
          }
        }
      }
    };
    var Zr = Qr(39760),
      Wr = Qr(39767),
      ar = Qr(39795),
      jr = 1 << 28,
      Ir = 1024,
      fr = Zr.mallocInt32(Ir),
      Er = Zr.mallocInt32(Ir),
      pr = Zr.mallocInt32(Ir),
      xr = Zr.mallocInt32(Ir),
      mr = Zr.mallocInt32(Ir),
      Nr = Zr.mallocInt32(Ir),
      Ur = Zr.mallocDouble(8192);

    function tr(rr, Sr, Qr, Zr) {
      var Wr = Sr[Zr],
        ar = rr[Qr - 1];
      rr[Wr] = ar, Sr[ar] = Wr
    }

    function hr(rr, Sr, Qr, Zr) {
      rr[Qr] = Zr, Sr[Zr] = Qr
    }
  },
  39774: rr => {
    function Sr(rr, Qr, Zr) {
      var Wr = 0 | rr[Zr];
      if (Wr <= 0) return [];
      var ar, jr = new Array(Wr);
      if (Zr === rr.length - 1)
        for (ar = 0; ar < Wr; ++ar) jr[ar] = Qr;
      else
        for (ar = 0; ar < Wr; ++ar) jr[ar] = Sr(rr, Qr, Zr + 1);
      return jr
    }
    rr.exports = function(rr, Qr) {
      switch ("undefined" === typeof Qr && (Qr = 0), typeof rr) {
        case "number":
          if (rr > 0) return function(rr, Sr) {
            var Qr, Zr;
            for (Qr = new Array(rr), Zr = 0; Zr < rr; ++Zr) Qr[Zr] = Sr;
            return Qr
          }(0 | rr, Qr);
          break;
        case "object":
          if ("number" === typeof rr.length) return Sr(rr, Qr, 0)
      }
      return []
    }
  },
  39729: (rr, Sr, Qr) => {
    rr.exports = function() {
      var rr = this;
      this.components = {}, this.comps = this.components;
      var Sr = this.components,
        Qr = 1,
        Wr = {},
        ar = [],
        jr = [],
        Ir = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function fr(rr, Qr) {
        var Zr = Sr[Qr],
          ar = Wr[Qr],
          jr = ar.hash[rr];
        jr && (ar.remove(rr), Zr.bq && (Zr.multi ? (jr.forEach((Sr => {
          Sr && Zr.bq(rr, Sr)
        })), jr.length = 0) : Zr.bq(rr, jr)), Ir.removals.push(ar), Er())
      }

      function Er() {
        Ir.timeout || (Ir.timeout = !0, setTimeout(pr, 1))
      }

      function pr() {
        Ir.timeout = !1, xr()
      }

      function xr() {
        Ir.multiComps.length && function(rr) {
          for (var Sr = 0; Sr < rr.length; Sr++) {
            var {
              entID: Qr,
              data: Zr
            } = rr[Sr], Wr = Zr.hash[Qr];
            if (Wr) {
              for (var ar = 0; ar < Wr.length; ar++) Wr[ar] || (Wr.splice(ar, 1), ar--);
              0 === Wr.length && (Zr.remove(Qr), Ir.removals.push(Zr))
            }
          }
          rr.length = 0
        }(Ir.multiComps), Ir.removals.length && function(rr) {
          for (var Sr = 0; Sr < rr.length; Sr++) {
            rr[Sr].flush()
          }
          rr.length = 0
        }(Ir.removals)
      }
      this.vt = Wr, this._systems = ar, this._renderSystems = jr, this.RJ = function(Sr) {
        var Zr = Qr++;
        return Array.isArray(Sr) && Sr.forEach((Sr => rr.gM(Zr, Sr))), Zr
      }, this.deleteEntity = function(Sr) {
        return Object.keys(Wr).forEach((rr => {
          Wr[rr].hash[Sr] && fr(Sr, rr)
        })), rr
      }, this.OQr = function(rr) {
        if (!rr) throw new Error("Missing component definition");
        var Qr = rr.name;
        if (!Qr) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof Qr) throw new Error("Component name must be a string.");
        if ("" === Qr) throw new Error("Component name must be a non-empty string.");
        if (Wr[Qr]) throw new Error(`Component ${Qr} already exists.`);
        var Ir = {};
        return Ir.name = Qr, Ir.multi = !!rr.multi, Ir.order = isNaN(rr.order) ? 99 : rr.order, Ir.stateConstructor = rr.stateConstructor || null, Ir.state = rr.state || {}, Ir.zB = rr.zB || null, Ir.bq = rr.bq || null, Ir.system = rr.system || null, Ir.nB = rr.nB || null, Sr[Qr] = Ir, Wr[Qr] = new Zr, Wr[Qr]._pendingMultiCleanup = !1, Wr[Qr]._multiCleanupIDs = Ir.multi ? [] : null, Ir.system && (ar.push(Qr), ar.sort(((rr, Qr) => Sr[rr].order - Sr[Qr].order))), Ir.nB && (jr.push(Qr), jr.sort(((rr, Qr) => Sr[rr].order - Sr[Qr].order))), Qr
      }, this.overwriteComponent = function(rr, Qr) {
        var Zr = Sr[rr];
        if (!Zr) throw new Error(`Unknown component: ${rr}`);
        if (!Qr) throw new Error("Missing component definition");
        if (Zr.name !== Qr.name) throw new Error("Overwriting component must use the same name property.");
        var Ir = {};
        Ir.name = rr, Ir.multi = !!Qr.multi, Ir.order = isNaN(Qr.order) ? 99 : Qr.order, Ir.state = Qr.state || {}, Ir.zB = Qr.zB || null, Ir.bq = Qr.bq || null, Ir.system = Qr.system || null, Ir.nB = Qr.nB || null, Sr[rr] = Ir, Wr[rr]._pendingMultiCleanup = !1, Wr[rr]._multiCleanupIDs = Ir.multi ? [] : null;
        var fr = ar.indexOf(rr);
        Ir.system && fr < 0 && ar.push(rr), !Ir.system && fr >= 0 && ar.splice(fr, 1), ar.sort(((rr, Qr) => Sr[rr].order - Sr[Qr].order));
        var Er = jr.indexOf(rr);
        Ir.nB && Er < 0 && jr.push(rr), !Ir.nB && Er >= 0 && jr.splice(Er, 1), jr.sort(((rr, Qr) => Sr[rr].order - Sr[Qr].order));
        var pr = Ir.state;
        return this.YM(rr).forEach((rr => {
          for (var Sr in pr) Sr in rr || (rr[Sr] = pr[Sr]);
          Ir.zB && Ir.zB(rr.XM, rr)
        })), rr
      }, this.deleteComponent = function(Qr) {
        var Zr = Wr[Qr];
        if (!Zr) throw new Error(`Unknown component: ${Qr}`);
        Zr.flush(), Zr.list.forEach((rr => {
          rr && fr(rr.XM || rr[0].XM, Qr)
        }));
        var Ir = ar.indexOf(Qr),
          Er = jr.indexOf(Qr);
        return Ir > -1 && ar.splice(Ir, 1), Er > -1 && jr.splice(Er, 1), Wr[Qr].dispose(), delete Wr[Qr], delete Sr[Qr], rr
      }, this.gM = function(rr, Qr, Zr) {
        var ar, jr = Sr[Qr],
          Ir = Wr[Qr];
        if (!Ir) throw new Error(`Unknown component: ${Qr}.`);
        if (Ir.hash[rr] && !jr.multi) throw new Error(`Entity ${rr} already has component: ${Qr}.`);
        if (jr.stateConstructor) {
          if (!(ar = new jr.stateConstructor).hasOwnProperty("XM")) throw new Error(`Component ${jr.name} stateConstructor type does not have property __id`);
          Object.assign(ar, jr.state, Zr)
        } else ar = {
          XM: rr,
          ...jr.state,
          ...Zr
        };
        if (ar.XM = rr, jr.multi) {
          var fr = Ir.hash[rr];
          fr || (fr = [], Ir.add(rr, fr)), fr.push(ar)
        } else Ir.add(rr, ar);
        return jr.zB && jr.zB(rr, ar), this
      }, this.TSr = function(rr, Sr) {
        var Qr = Wr[Sr];
        if (!Qr) throw new Error(`Unknown component: ${Sr}.`);
        return !!Qr.hash[rr]
      }, this.bM = function(Sr, Qr) {
        if (!Wr[Qr]) throw new Error(`Unknown component: ${Qr}.`);
        return fr(Sr, Qr), rr
      }, this.getState = function(rr, Sr) {
        var Qr = Wr[Sr];
        if (!Qr) throw new Error(`Unknown component: ${Sr}.`);
        return Qr.hash[rr]
      }, this.YM = function(rr) {
        var Sr = Wr[rr];
        if (!Sr) throw new Error(`Unknown component: ${rr}.`);
        return xr(), Sr.list
      }, this.aQr = function(rr) {
        if (!Wr[rr]) throw new Error(`Unknown component: ${rr}.`);
        var Sr = Wr[rr].hash;
        return rr => Sr[rr]
      }, this.xQr = function(rr) {
        if (!Wr[rr]) throw new Error(`Unknown component: ${rr}.`);
        var Sr = Wr[rr].hash;
        return rr => !!Sr[rr]
      }, this.lx = function(Qr) {
        xr();
        for (var Zr = 0; Zr < ar.length; Zr++) {
          var jr = ar[Zr],
            Ir = Sr[jr],
            fr = Wr[jr];
          Ir.system(Qr, fr.list), xr()
        }
        return rr
      }, this.render = function(Qr) {
        xr();
        for (var Zr = 0; Zr < jr.length; Zr++) {
          var ar = jr[Zr],
            Ir = Sr[ar],
            fr = Wr[ar];
          Ir.nB(Qr, fr.list), xr()
        }
        return rr
      }, this.removeMultiComponent = function(Qr, Zr, ar) {
        var jr = Sr[Zr],
          fr = Wr[Zr];
        if (!fr) throw new Error(`Unknown component: ${Zr}.`);
        if (!jr.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(rr, Sr, Qr, Zr) {
          var Wr = Qr.hash[rr];
          if (Wr) {
            var ar = Wr[Zr];
            ar && (Wr[Zr] = null, Sr.bq && Sr.bq(rr, ar), Ir.multiComps.push({
              entID: rr,
              data: Qr
            }), Er())
          }
        }(Qr, jr, fr, ar), rr
      }
    };
    var Zr = Qr(39735)
  },
  39735: rr => {
    function Sr(rr, Sr) {
      var Qr = rr._map[Sr];
      if (delete rr.hash[Sr], delete rr._map[Sr], Qr === rr.list.length - 1) rr.list.pop(), rr._idList.pop();
      else {
        var Zr = rr.list.pop();
        rr.list[Qr] = Zr;
        var Wr = rr._idList.pop();
        rr._idList[Qr] = Wr, rr._map[Wr] = Qr
      }
    }
    rr.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(rr, Sr) {
        if ("number" === typeof this._map[rr]) {
          var Qr = this._map[rr];
          this.hash[rr] = Sr, this.list[Qr] = Sr, this._idList[Qr] = rr
        } else this._map[rr] = this.list.length, this.hash[rr] = Sr, this.list.push(Sr), this._idList.push(rr)
      }
      remove(rr) {
        var Sr = this._map[rr];
        this.hash[rr] = null, this.list[Sr] = null, this._pendingRemovals.push(rr)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var rr = 0; rr < this._pendingRemovals.length; rr++) {
          var Qr = this._pendingRemovals[rr];
          null === this.hash[Qr] && Sr(this, Qr)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  39546: (rr, Sr, Qr) => {
    rr = Qr.nmd(rr);
    var Zr = "__lodash_hash_undefined__",
      Wr = 9007199254740991,
      ar = "[object Arguments]",
      jr = "[object Boolean]",
      Ir = "[object Date]",
      fr = "[object Function]",
      Er = "[object GeneratorFunction]",
      pr = "[object Map]",
      xr = "[object Number]",
      mr = "[object Object]",
      Nr = "[object Promise]",
      Ur = "[object RegExp]",
      tr = "[object Set]",
      hr = "[object String]",
      zr = "[object Symbol]",
      Yr = "[object WeakMap]",
      nr = "[object ArrayBuffer]",
      er = "[object DataView]",
      Kr = "[object Float32Array]",
      yr = "[object Float64Array]",
      Br = "[object Int8Array]",
      Tr = "[object Int16Array]",
      vr = "[object Int32Array]",
      Or = "[object Uint8Array]",
      Lr = "[object Uint8ClampedArray]",
      lr = "[object Uint16Array]",
      Xr = "[object Uint32Array]",
      Pr = /\w*$/,
      Hr = /^\[object .+?Constructor\]$/,
      qr = /^(?:0|[1-9]\d*)$/,
      Rr = {};
    Rr[ar] = Rr["[object Array]"] = Rr[nr] = Rr[er] = Rr[jr] = Rr[Ir] = Rr[Kr] = Rr[yr] = Rr[Br] = Rr[Tr] = Rr[vr] = Rr[pr] = Rr[xr] = Rr[mr] = Rr[Ur] = Rr[tr] = Rr[hr] = Rr[zr] = Rr[Or] = Rr[Lr] = Rr[lr] = Rr[Xr] = !0, Rr["[object Error]"] = Rr[fr] = Rr[Yr] = !1;
    var gr = "object" == typeof Qr.g && Qr.g && Qr.g.Object === Object && Qr.g,
      Cr = "object" == typeof self && self && self.Object === Object && self,
      Mr = gr || Cr || Function("return this")(),
      Gr = Sr && !Sr.nodeType && Sr,
      kr = Gr && rr && !rr.nodeType && rr,
      Ar = kr && kr.exports === Gr;

    function Vr(rr, Sr) {
      return rr.set(Sr[0], Sr[1]), rr
    }

    function ir(rr, Sr) {
      return rr.add(Sr), rr
    }

    function wr(rr, Sr, Qr, Zr) {
      var Wr = -1,
        ar = rr ? rr.length : 0;
      for (Zr && ar && (Qr = rr[++Wr]); ++Wr < ar;) Qr = Sr(Qr, rr[Wr], Wr, rr);
      return Qr
    }

    function cr(rr) {
      var Sr = !1;
      if (null != rr && "function" != typeof rr.toString) try {
        Sr = !!(rr + "")
      } catch (Qr) {}
      return Sr
    }

    function Fr(rr) {
      var Sr = -1,
        Qr = Array(rr.size);
      return rr.forEach((function(rr, Zr) {
        Qr[++Sr] = [Zr, rr]
      })), Qr
    }

    function or(rr, Sr) {
      return function(Qr) {
        return rr(Sr(Qr))
      }
    }

    function br(rr) {
      var Sr = -1,
        Qr = Array(rr.size);
      return rr.forEach((function(rr) {
        Qr[++Sr] = rr
      })), Qr
    }
    var Jr = Array.prototype,
      Dr = Function.prototype,
      dr = Object.prototype,
      sr = Mr["__core-js_shared__"],
      ur = function() {
        var rr = /[^.]+$/.exec(sr && sr.keys && sr.keys.IE_PROTO || "");
        return rr ? "Symbol(src)_1." + rr : ""
      }(),
      rS = Dr.toString,
      SS = dr.hasOwnProperty,
      QS = dr.toString,
      ZS = RegExp("^" + rS.call(SS).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      WS = Ar ? Mr.Dp : void 0,
      aS = Mr.Symbol,
      jS = Mr.Uint8Array,
      IS = or(Object.getPrototypeOf, Object),
      fS = Object.create,
      ES = dr.propertyIsEnumerable,
      pS = Jr.splice,
      xS = Object.getOwnPropertySymbols,
      mS = WS ? WS.isBuffer : void 0,
      NS = or(Object.keys, Object),
      US = AS(Mr, "DataView"),
      tS = AS(Mr, "Map"),
      hS = AS(Mr, "Promise"),
      zS = AS(Mr, "Set"),
      YS = AS(Mr, "WeakMap"),
      nS = AS(Object, "create"),
      eS = FS(US),
      KS = FS(tS),
      yS = FS(hS),
      BS = FS(zS),
      TS = FS(YS),
      vS = aS ? aS.prototype : void 0,
      OS = vS ? vS.valueOf : void 0;

    function LS(rr) {
      var Sr = -1,
        Qr = rr ? rr.length : 0;
      for (this.clear(); ++Sr < Qr;) {
        var Zr = rr[Sr];
        this.set(Zr[0], Zr[1])
      }
    }

    function lS(rr) {
      var Sr = -1,
        Qr = rr ? rr.length : 0;
      for (this.clear(); ++Sr < Qr;) {
        var Zr = rr[Sr];
        this.set(Zr[0], Zr[1])
      }
    }

    function XS(rr) {
      var Sr = -1,
        Qr = rr ? rr.length : 0;
      for (this.clear(); ++Sr < Qr;) {
        var Zr = rr[Sr];
        this.set(Zr[0], Zr[1])
      }
    }

    function PS(rr) {
      this.__data__ = new lS(rr)
    }

    function HS(rr, Sr) {
      var Qr = bS(rr) || function(rr) {
          return function(rr) {
            return function(rr) {
              return !!rr && "object" == typeof rr
            }(rr) && JS(rr)
          }(rr) && SS.call(rr, "callee") && (!ES.call(rr, "callee") || QS.call(rr) == ar)
        }(rr) ? function(rr, Sr) {
          for (var Qr = -1, Zr = Array(rr); ++Qr < rr;) Zr[Qr] = Sr(Qr);
          return Zr
        }(rr.length, String) : [],
        Zr = Qr.length,
        Wr = !!Zr;
      for (var jr in rr) !Sr && !SS.call(rr, jr) || Wr && ("length" == jr || wS(jr, Zr)) || Qr.push(jr);
      return Qr
    }

    function qS(rr, Sr, Qr) {
      var Zr = rr[Sr];
      SS.call(rr, Sr) && oS(Zr, Qr) && (void 0 !== Qr || Sr in rr) || (rr[Sr] = Qr)
    }

    function RS(rr, Sr) {
      for (var Qr = rr.length; Qr--;)
        if (oS(rr[Qr][0], Sr)) return Qr;
      return -1
    }

    function gS(rr, Sr, Qr, Zr, Wr, Nr, Yr) {
      var Hr;
      if (Zr && (Hr = Nr ? Zr(rr, Wr, Nr, Yr) : Zr(rr)), void 0 !== Hr) return Hr;
      if (!sS(rr)) return rr;
      var qr = bS(rr);
      if (qr) {
        if (Hr = function(rr) {
            var Sr = rr.length,
              Qr = rr.constructor(Sr);
            Sr && "string" == typeof rr[0] && SS.call(rr, "index") && (Qr.index = rr.index, Qr.input = rr.input);
            return Qr
          }(rr), !Sr) return function(rr, Sr) {
          var Qr = -1,
            Zr = rr.length;
          Sr || (Sr = Array(Zr));
          for (; ++Qr < Zr;) Sr[Qr] = rr[Qr];
          return Sr
        }(rr, Hr)
      } else {
        var gr = iS(rr),
          Cr = gr == fr || gr == Er;
        if (DS(rr)) return function(rr, Sr) {
          if (Sr) return rr.slice();
          var Qr = new rr.constructor(rr.length);
          return rr.copy(Qr), Qr
        }(rr, Sr);
        if (gr == mr || gr == ar || Cr && !Nr) {
          if (cr(rr)) return Nr ? rr : {};
          if (Hr = function(rr) {
              return "function" != typeof rr.constructor || cS(rr) ? {} : (Sr = IS(rr), sS(Sr) ? fS(Sr) : {});
              var Sr
            }(Cr ? {} : rr), !Sr) return function(rr, Sr) {
            return GS(rr, VS(rr), Sr)
          }(rr, function(rr, Sr) {
            return rr && GS(Sr, uS(Sr), rr)
          }(Hr, rr))
        } else {
          if (!Rr[gr]) return Nr ? rr : {};
          Hr = function(rr, Sr, Qr, Zr) {
            var Wr = rr.constructor;
            switch (Sr) {
              case nr:
                return MS(rr);
              case jr:
              case Ir:
                return new Wr(+rr);
              case er:
                return function(rr, Sr) {
                  var Qr = Sr ? MS(rr.buffer) : rr.buffer;
                  return new rr.constructor(Qr, rr.byteOffset, rr.byteLength)
                }(rr, Zr);
              case Kr:
              case yr:
              case Br:
              case Tr:
              case vr:
              case Or:
              case Lr:
              case lr:
              case Xr:
                return function(rr, Sr) {
                  var Qr = Sr ? MS(rr.buffer) : rr.buffer;
                  return new rr.constructor(Qr, rr.byteOffset, rr.length)
                }(rr, Zr);
              case pr:
                return function(rr, Sr, Qr) {
                  var Zr = Sr ? Qr(Fr(rr), !0) : Fr(rr);
                  return wr(Zr, Vr, new rr.constructor)
                }(rr, Zr, Qr);
              case xr:
              case hr:
                return new Wr(rr);
              case Ur:
                return function(rr) {
                  var Sr = new rr.constructor(rr.source, Pr.exec(rr));
                  return Sr.lastIndex = rr.lastIndex, Sr
                }(rr);
              case tr:
                return function(rr, Sr, Qr) {
                  var Zr = Sr ? Qr(br(rr), !0) : br(rr);
                  return wr(Zr, ir, new rr.constructor)
                }(rr, Zr, Qr);
              case zr:
                return ar = rr, OS ? Object(OS.call(ar)) : {}
            }
            var ar
          }(rr, gr, gS, Sr)
        }
      }
      Yr || (Yr = new PS);
      var Mr = Yr.get(rr);
      if (Mr) return Mr;
      if (Yr.set(rr, Hr), !qr) var Gr = Qr ? function(rr) {
        return function(rr, Sr, Qr) {
          var Zr = Sr(rr);
          return bS(rr) ? Zr : function(rr, Sr) {
            for (var Qr = -1, Zr = Sr.length, Wr = rr.length; ++Qr < Zr;) rr[Wr + Qr] = Sr[Qr];
            return rr
          }(Zr, Qr(rr))
        }(rr, uS, VS)
      }(rr) : uS(rr);
      return function(rr, Sr) {
        for (var Qr = -1, Zr = rr ? rr.length : 0; ++Qr < Zr && !1 !== Sr(rr[Qr], Qr, rr););
      }(Gr || rr, (function(Wr, ar) {
        Gr && (Wr = rr[ar = Wr]), qS(Hr, ar, gS(Wr, Sr, Qr, Zr, ar, rr, Yr))
      })), Hr
    }

    function CS(rr) {
      return !(!sS(rr) || (Sr = rr, ur && ur in Sr)) && (dS(rr) || cr(rr) ? ZS : Hr).test(FS(rr));
      var Sr
    }

    function MS(rr) {
      var Sr = new rr.constructor(rr.byteLength);
      return new jS(Sr).set(new jS(rr)), Sr
    }

    function GS(rr, Sr, Qr, Zr) {
      Qr || (Qr = {});
      for (var Wr = -1, ar = Sr.length; ++Wr < ar;) {
        var jr = Sr[Wr],
          Ir = Zr ? Zr(Qr[jr], rr[jr], jr, Qr, rr) : void 0;
        qS(Qr, jr, void 0 === Ir ? rr[jr] : Ir)
      }
      return Qr
    }

    function kS(rr, Sr) {
      var Qr = rr.__data__;
      return function(rr) {
        var Sr = typeof rr;
        return "string" == Sr || "number" == Sr || "symbol" == Sr || "boolean" == Sr ? "__proto__" !== rr : null === rr
      }(Sr) ? Qr["string" == typeof Sr ? "string" : "hash"] : Qr.map
    }

    function AS(rr, Sr) {
      var Qr = function(rr, Sr) {
        return null == rr ? void 0 : rr[Sr]
      }(rr, Sr);
      return CS(Qr) ? Qr : void 0
    }
    LS.prototype.clear = function() {
      this.__data__ = nS ? nS(null) : {}
    }, LS.prototype.delete = function(rr) {
      return this.has(rr) && delete this.__data__[rr]
    }, LS.prototype.get = function(rr) {
      var Sr = this.__data__;
      if (nS) {
        var Qr = Sr[rr];
        return Qr === Zr ? void 0 : Qr
      }
      return SS.call(Sr, rr) ? Sr[rr] : void 0
    }, LS.prototype.has = function(rr) {
      var Sr = this.__data__;
      return nS ? void 0 !== Sr[rr] : SS.call(Sr, rr)
    }, LS.prototype.set = function(rr, Sr) {
      return this.__data__[rr] = nS && void 0 === Sr ? Zr : Sr, this
    }, lS.prototype.clear = function() {
      this.__data__ = []
    }, lS.prototype.delete = function(rr) {
      var Sr = this.__data__,
        Qr = RS(Sr, rr);
      return !(Qr < 0) && (Qr == Sr.length - 1 ? Sr.pop() : pS.call(Sr, Qr, 1), !0)
    }, lS.prototype.get = function(rr) {
      var Sr = this.__data__,
        Qr = RS(Sr, rr);
      return Qr < 0 ? void 0 : Sr[Qr][1]
    }, lS.prototype.has = function(rr) {
      return RS(this.__data__, rr) > -1
    }, lS.prototype.set = function(rr, Sr) {
      var Qr = this.__data__,
        Zr = RS(Qr, rr);
      return Zr < 0 ? Qr.push([rr, Sr]) : Qr[Zr][1] = Sr, this
    }, XS.prototype.clear = function() {
      this.__data__ = {
        hash: new LS,
        map: new(tS || lS),
        string: new LS
      }
    }, XS.prototype.delete = function(rr) {
      return kS(this, rr).delete(rr)
    }, XS.prototype.get = function(rr) {
      return kS(this, rr).get(rr)
    }, XS.prototype.has = function(rr) {
      return kS(this, rr).has(rr)
    }, XS.prototype.set = function(rr, Sr) {
      return kS(this, rr).set(rr, Sr), this
    }, PS.prototype.clear = function() {
      this.__data__ = new lS
    }, PS.prototype.delete = function(rr) {
      return this.__data__.delete(rr)
    }, PS.prototype.get = function(rr) {
      return this.__data__.get(rr)
    }, PS.prototype.has = function(rr) {
      return this.__data__.has(rr)
    }, PS.prototype.set = function(rr, Sr) {
      var Qr = this.__data__;
      if (Qr instanceof lS) {
        var Zr = Qr.__data__;
        if (!tS || Zr.length < 199) return Zr.push([rr, Sr]), this;
        Qr = this.__data__ = new XS(Zr)
      }
      return Qr.set(rr, Sr), this
    };
    var VS = xS ? or(xS, Object) : function() {
        return []
      },
      iS = function(rr) {
        return QS.call(rr)
      };

    function wS(rr, Sr) {
      return !!(Sr = null == Sr ? Wr : Sr) && ("number" == typeof rr || qr.test(rr)) && rr > -1 && rr % 1 == 0 && rr < Sr
    }

    function cS(rr) {
      var Sr = rr && rr.constructor;
      return rr === ("function" == typeof Sr && Sr.prototype || dr)
    }

    function FS(rr) {
      if (null != rr) {
        try {
          return rS.call(rr)
        } catch (Sr) {}
        try {
          return rr + ""
        } catch (Sr) {}
      }
      return ""
    }

    function oS(rr, Sr) {
      return rr === Sr || rr !== rr && Sr !== Sr
    }(US && iS(new US(new ArrayBuffer(1))) != er || tS && iS(new tS) != pr || hS && iS(hS.resolve()) != Nr || zS && iS(new zS) != tr || YS && iS(new YS) != Yr) && (iS = function(rr) {
      var Sr = QS.call(rr),
        Qr = Sr == mr ? rr.constructor : void 0,
        Zr = Qr ? FS(Qr) : void 0;
      if (Zr) switch (Zr) {
        case eS:
          return er;
        case KS:
          return pr;
        case yS:
          return Nr;
        case BS:
          return tr;
        case TS:
          return Yr
      }
      return Sr
    });
    var bS = Array.isArray;

    function JS(rr) {
      return null != rr && function(rr) {
        return "number" == typeof rr && rr > -1 && rr % 1 == 0 && rr <= Wr
      }(rr.length) && !dS(rr)
    }
    var DS = mS || function() {
      return !1
    };

    function dS(rr) {
      var Sr = sS(rr) ? QS.call(rr) : "";
      return Sr == fr || Sr == Er
    }

    function sS(rr) {
      var Sr = typeof rr;
      return !!rr && ("object" == Sr || "function" == Sr)
    }

    function uS(rr) {
      return JS(rr) ? HS(rr) : function(rr) {
        if (!cS(rr)) return NS(rr);
        var Sr = [];
        for (var Qr in Object(rr)) SS.call(rr, Qr) && "constructor" != Qr && Sr.push(Qr);
        return Sr
      }(rr)
    }
    rr.exports = function(rr) {
      return gS(rr, !0, !0)
    }
  },
  39947: rr => {
    function Sr(rr, Sr, Qr) {
      for (var Zr = rr.length, Wr = -1 / 0, ar = 1 / 0, jr = 0; jr < Zr; jr++) {
        var Ir = (Qr[0][jr] - rr[jr]) / Sr[jr],
          fr = (Qr[1][jr] - rr[jr]) / Sr[jr];
        if (Ir > fr) {
          var Er = Ir;
          Ir = fr, fr = Er
        }
        if (fr < Wr || Ir > ar) return 1 / 0;
        Ir > Wr && (Wr = Ir), fr < ar && (ar = fr)
      }
      return Wr > ar ? 1 / 0 : Wr
    }
    rr.exports = function(rr, Qr, Zr, Wr) {
      var ar = Sr(Qr, Zr, Wr);
      if (ar === 1 / 0) rr = null;
      else {
        rr = rr || [];
        for (var jr = 0; jr < Qr.length; jr++) rr[jr] = Qr[jr] + Zr[jr] * ar
      }
      return rr
    }, rr.exports.distance = Sr
  },
  39230: (rr, Sr, Qr) => {
    var Zr = Qr(39238);

    function Wr(rr) {
      for (var Sr, Qr, Wr = 0, ar = rr.length, jr = 0; jr < rr.length;) {
        for (Sr = rr[jr], Qr = 0; jr < ar && rr[jr] === Sr;) ++jr, ++Qr;
        Wr += Zr.log2(Qr) / 7 | 0, Wr += Zr.log2(Sr >>> 0) / 7 | 0, Wr += 2
      }
      return Wr
    }
    Sr.size = Wr, Sr.encode = function(rr, Sr) {
      Sr || (Sr = new Uint8Array(Wr(rr)));
      for (var Qr, Zr, ar = 0, jr = Sr.length, Ir = 0; Ir < rr.length;) {
        for (Qr = rr[Ir], Zr = 0; Ir < rr.length && rr[Ir] === Qr;) ++Ir, ++Zr;
        for (; ar < jr && Zr >= 128;) Sr[ar++] = 128 + (127 & Zr), Zr >>>= 7;
        if (ar >= jr) throw new Error("RLE buffer overflow");
        for (Sr[ar++] = Zr, Qr >>>= 0; ar < jr && Qr >= 128;) Sr[ar++] = 128 + (127 & Qr), Qr >>>= 7;
        if (ar >= jr) throw new Error("RLE buffer overflow");
        Sr[ar++] = Qr
      }
      return Sr
    }, Sr.decode = function(rr, Sr) {
      for (var Qr, Zr, Wr, ar, jr = Sr.length, Ir = rr.length, fr = 0, Er = 0; Er < Ir;) {
        for (Qr = 0, Zr = 0; Er < Ir && rr[Er] >= 128;) Qr += (127 & rr[Er++]) << Zr, Zr += 7;
        if (Qr += rr[Er++] << Zr, Er >= Ir) throw new Error("RLE buffer underrun");
        if (fr + Qr > jr) throw new Error("Chunk buffer overflow");
        for (Wr = 0, Zr = 0; Er < Ir && rr[Er] >= 128;) Wr += (127 & rr[Er++]) << Zr, Zr += 7;
        if (Er >= Ir) throw new Error("RLE buffer underrun");
        for (Wr += rr[Er++] << Zr, ar = 0; ar < Qr; ++ar) Sr[fr++] = Wr
      }
      return Sr
    }
  },
  39238: (rr, Sr) => {
    function Qr(rr) {
      var Sr = 32;
      return (rr &= -rr) && Sr--, 65535 & rr && (Sr -= 16), 16711935 & rr && (Sr -= 8), 252645135 & rr && (Sr -= 4), 858993459 & rr && (Sr -= 2), 1431655765 & rr && (Sr -= 1), Sr
    }
    Sr.INT_BITS = 32, Sr.INT_MAX = 2147483647, Sr.INT_MIN = -1 << 31, Sr.sign = function(rr) {
      return (rr > 0) - (rr < 0)
    }, Sr.abs = function(rr) {
      var Sr = rr >> 31;
      return (rr ^ Sr) - Sr
    }, Sr.min = function(rr, Sr) {
      return Sr ^ (rr ^ Sr) & -(rr < Sr)
    }, Sr.max = function(rr, Sr) {
      return rr ^ (rr ^ Sr) & -(rr < Sr)
    }, Sr.isPow2 = function(rr) {
      return !(rr & rr - 1) && !!rr
    }, Sr.log2 = function(rr) {
      var Sr, Qr;
      return Sr = (rr > 65535) << 4, Sr |= Qr = ((rr >>>= Sr) > 255) << 3, Sr |= Qr = ((rr >>>= Qr) > 15) << 2, (Sr |= Qr = ((rr >>>= Qr) > 3) << 1) | (rr >>>= Qr) >> 1
    }, Sr.log10 = function(rr) {
      return rr >= 1e9 ? 9 : rr >= 1e8 ? 8 : rr >= 1e7 ? 7 : rr >= 1e6 ? 6 : rr >= 1e5 ? 5 : rr >= 1e4 ? 4 : rr >= 1e3 ? 3 : rr >= 100 ? 2 : rr >= 10 ? 1 : 0
    }, Sr.popCount = function(rr) {
      return 16843009 * ((rr = (858993459 & (rr -= rr >>> 1 & 1431655765)) + (rr >>> 2 & 858993459)) + (rr >>> 4) & 252645135) >>> 24
    }, Sr.countTrailingZeros = Qr, Sr.nextPow2 = function(rr) {
      return rr += 0 === rr, --rr, rr |= rr >>> 1, rr |= rr >>> 2, rr |= rr >>> 4, rr |= rr >>> 8, (rr |= rr >>> 16) + 1
    }, Sr.prevPow2 = function(rr) {
      return rr |= rr >>> 1, rr |= rr >>> 2, rr |= rr >>> 4, rr |= rr >>> 8, (rr |= rr >>> 16) - (rr >>> 1)
    }, Sr.parity = function(rr) {
      return rr ^= rr >>> 16, rr ^= rr >>> 8, rr ^= rr >>> 4, 27030 >>> (rr &= 15) & 1
    };
    var Zr = new Array(256);
    ! function(rr) {
      for (var Sr = 0; Sr < 256; ++Sr) {
        var Qr = Sr,
          Zr = Sr,
          Wr = 7;
        for (Qr >>>= 1; Qr; Qr >>>= 1) Zr <<= 1, Zr |= 1 & Qr, --Wr;
        rr[Sr] = Zr << Wr & 255
      }
    }(Zr), Sr.reverse = function(rr) {
      return Zr[255 & rr] << 24 | Zr[rr >>> 8 & 255] << 16 | Zr[rr >>> 16 & 255] << 8 | Zr[rr >>> 24 & 255]
    }, Sr.interleave2 = function(rr, Sr) {
      return (rr = 1431655765 & ((rr = 858993459 & ((rr = 252645135 & ((rr = 16711935 & ((rr &= 65535) | rr << 8)) | rr << 4)) | rr << 2)) | rr << 1)) | (Sr = 1431655765 & ((Sr = 858993459 & ((Sr = 252645135 & ((Sr = 16711935 & ((Sr &= 65535) | Sr << 8)) | Sr << 4)) | Sr << 2)) | Sr << 1)) << 1
    }, Sr.deinterleave2 = function(rr, Sr) {
      return (rr = 65535 & ((rr = 16711935 & ((rr = 252645135 & ((rr = 858993459 & ((rr = rr >>> Sr & 1431655765) | rr >>> 1)) | rr >>> 2)) | rr >>> 4)) | rr >>> 16)) << 16 >> 16
    }, Sr.interleave3 = function(rr, Sr, Qr) {
      return rr = 1227133513 & ((rr = 3272356035 & ((rr = 251719695 & ((rr = 4278190335 & ((rr &= 1023) | rr << 16)) | rr << 8)) | rr << 4)) | rr << 2), (rr |= (Sr = 1227133513 & ((Sr = 3272356035 & ((Sr = 251719695 & ((Sr = 4278190335 & ((Sr &= 1023) | Sr << 16)) | Sr << 8)) | Sr << 4)) | Sr << 2)) << 1) | (Qr = 1227133513 & ((Qr = 3272356035 & ((Qr = 251719695 & ((Qr = 4278190335 & ((Qr &= 1023) | Qr << 16)) | Qr << 8)) | Qr << 4)) | Qr << 2)) << 2
    }, Sr.deinterleave3 = function(rr, Sr) {
      return (rr = 1023 & ((rr = 4278190335 & ((rr = 251719695 & ((rr = 3272356035 & ((rr = rr >>> Sr & 1227133513) | rr >>> 2)) | rr >>> 4)) | rr >>> 8)) | rr >>> 16)) << 22 >> 22
    }, Sr.nextCombination = function(rr) {
      var Sr = rr | rr - 1;
      return Sr + 1 | (~Sr & -~Sr) - 1 >>> Qr(rr) + 1
    }
  },
  38679: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      Color3: () => Zr.e,
      d: () => Zr.f
    });
    var Zr = Qr(38684);
    (0, Zr.h)()
  },
  39262: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      b: () => Wr
    });
    var Zr = Qr(39264);
    class Wr {
      static GetPlanes(rr) {
        const Sr = [];
        for (let Qr = 0; Qr < 6; Qr++) Sr.push(new Zr.d(0, 0, 0, 0));
        return Wr.GetPlanesToRef(rr, Sr), Sr
      }
      static GetNearPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] + Qr[2], Sr.normal.y = Qr[7] + Qr[6], Sr.normal.z = Qr[11] + Qr[10], Sr.d = Qr[15] + Qr[14], Sr.normalize()
      }
      static GetFarPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] - Qr[2], Sr.normal.y = Qr[7] - Qr[6], Sr.normal.z = Qr[11] - Qr[10], Sr.d = Qr[15] - Qr[14], Sr.normalize()
      }
      static GetLeftPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] + Qr[0], Sr.normal.y = Qr[7] + Qr[4], Sr.normal.z = Qr[11] + Qr[8], Sr.d = Qr[15] + Qr[12], Sr.normalize()
      }
      static GetRightPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] - Qr[0], Sr.normal.y = Qr[7] - Qr[4], Sr.normal.z = Qr[11] - Qr[8], Sr.d = Qr[15] - Qr[12], Sr.normalize()
      }
      static GetTopPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] - Qr[1], Sr.normal.y = Qr[7] - Qr[5], Sr.normal.z = Qr[11] - Qr[9], Sr.d = Qr[15] - Qr[13], Sr.normalize()
      }
      static GetBottomPlaneToRef(rr, Sr) {
        const Qr = rr.m;
        Sr.normal.x = Qr[3] + Qr[1], Sr.normal.y = Qr[7] + Qr[5], Sr.normal.z = Qr[11] + Qr[9], Sr.d = Qr[15] + Qr[13], Sr.normalize()
      }
      static GetPlanesToRef(rr, Sr) {
        Wr.GetNearPlaneToRef(rr, Sr[0]), Wr.GetFarPlaneToRef(rr, Sr[1]), Wr.GetLeftPlaneToRef(rr, Sr[2]), Wr.GetRightPlaneToRef(rr, Sr[3]), Wr.GetTopPlaneToRef(rr, Sr[4]), Wr.GetBottomPlaneToRef(rr, Sr[5])
      }
      static IsPointInFrustum(rr, Sr) {
        for (let Qr = 0; Qr < 6; Qr++)
          if (Sr[Qr].dotCoordinate(rr) < 0) return !1;
        return !0
      }
    }
  },
  39264: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Wr
    });
    var Zr = Qr(38560);
    class Wr {
      constructor(rr, Sr, Qr, Wr) {
        this.normal = new Zr.u(rr, Sr, Qr), this.d = Wr
      }
      OWr() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Wr(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let rr = this.normal.getHashCode();
        return rr = 397 * rr ^ this.d, rr
      }
      normalize() {
        const rr = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Sr = 0;
        return 0 !== rr && (Sr = 1 / rr), this.normal.x *= Sr, this.normal.y *= Sr, this.normal.z *= Sr, this.d *= Sr, this
      }
      transform(rr) {
        const Sr = Wr._TmpMatrix;
        rr.invertToRef(Sr);
        const Qr = Sr.m,
          Zr = this.normal.x,
          ar = this.normal.y,
          jr = this.normal.z,
          Ir = this.d,
          fr = Zr * Qr[0] + ar * Qr[1] + jr * Qr[2] + Ir * Qr[3],
          Er = Zr * Qr[4] + ar * Qr[5] + jr * Qr[6] + Ir * Qr[7],
          pr = Zr * Qr[8] + ar * Qr[9] + jr * Qr[10] + Ir * Qr[11],
          xr = Zr * Qr[12] + ar * Qr[13] + jr * Qr[14] + Ir * Qr[15];
        return new Wr(fr, Er, pr, xr)
      }
      dotCoordinate(rr) {
        return this.normal.x * rr.x + this.normal.y * rr.y + this.normal.z * rr.z + this.d
      }
      copyFromPoints(rr, Sr, Qr) {
        const Zr = Sr.x - rr.x,
          Wr = Sr.y - rr.y,
          ar = Sr.z - rr.z,
          jr = Qr.x - rr.x,
          Ir = Qr.y - rr.y,
          fr = Qr.z - rr.z,
          Er = Wr * fr - ar * Ir,
          pr = ar * jr - Zr * fr,
          xr = Zr * Ir - Wr * jr,
          mr = Math.sqrt(Er * Er + pr * pr + xr * xr);
        let Nr;
        return Nr = 0 !== mr ? 1 / mr : 0, this.normal.x = Er * Nr, this.normal.y = pr * Nr, this.normal.z = xr * Nr, this.d = -(this.normal.x * rr.x + this.normal.y * rr.y + this.normal.z * rr.z), this
      }
      isFrontFacingTo(rr, Sr) {
        return Zr.u.Dot(this.normal, rr) <= Sr
      }
      signedDistanceTo(rr) {
        return Zr.u.Dot(rr, this.normal) + this.d
      }
      static FromArray(rr) {
        return new Wr(rr[0], rr[1], rr[2], rr[3])
      }
      static FromPoints(rr, Sr, Qr) {
        const Zr = new Wr(0, 0, 0, 0);
        return Zr.copyFromPoints(rr, Sr, Qr), Zr
      }
      static FromPositionAndNormal(rr, Sr) {
        const Qr = new Wr(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(rr, Sr, Qr)
      }
      static FromPositionAndNormalToRef(rr, Sr, Qr) {
        return Qr.normal.iH(Sr), Qr.normal.normalize(), Qr.d = -rr.dot(Qr.normal), Qr
      }
      static SignedDistanceToPlaneFromPositionAndNormal(rr, Sr, Qr) {
        const Wr = -(Sr.x * rr.x + Sr.y * rr.y + Sr.z * rr.z);
        return Zr.u.Dot(Qr, Sr) + Wr
      }
    }
    Wr._TmpMatrix = Zr.d.Identity()
  },
  38555: (rr, Sr, Qr) => {
    Qr.r(Sr), Qr.d(Sr, {
      Matrix: () => Zr.d,
      Quaternion: () => Zr.h,
      RegisterMathVector: () => Zr.k,
      TmpVectors: () => Zr.n,
      Vector2: () => Zr.q,
      kU: () => Zr.u,
      Vector4: () => Zr.x
    });
    var Zr = Qr(38560);
    (0, Zr.k)()
  },
  39607: (rr, Sr, Qr) => {
    Qr.d(Sr, {
      d: () => Zr
    });
    class Zr {
      constructor(rr, Sr, Qr, Zr) {
        this.x = rr, this.y = Sr, this.width = Qr, this.height = Zr
      }
      toGlobal(rr, Sr) {
        return new Zr(this.x * rr, this.y * Sr, this.width * rr, this.height * Sr)
      }
      toGlobalToRef(rr, Sr, Qr) {
        return Qr.x = this.x * rr, Qr.y = this.y * Sr, Qr.width = this.width * rr, Qr.height = this.height * Sr, this
      }
      clone() {
        return new Zr(this.x, this.y, this.width, this.height)
      }
    }
  },
  39405: (rr, Sr, Qr) => {
    function Zr() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (rr => {
        const Sr = 16 * Math.random() | 0;
        return ("x" === rr ? Sr : 3 & Sr | 8).toString(16)
      }))
    }
    Qr.d(Sr, {
      b: () => Zr
    })
  }
};
Object.freeze(modules);
for (const rr in modules) Object.freeze(modules[rr]);