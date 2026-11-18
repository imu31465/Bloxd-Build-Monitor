/*! For license information please see 7jvyee.210.626c1131.chunk.js.LICENSE.txt */
export const id = 210;
export const ids = [210, 216];
export const modules = {
  36991: yb => {
    yb.exports = function(yb) {
      return null != yb && null != yb.constructor && "function" === typeof yb.constructor.isBuffer && yb.constructor.isBuffer(yb)
    }
  },
  36981: (yb, bb, Wy) => {
    var Uy = Wy(36987),
      hy = Wy(36989),
      fy = Wy(36991);
    Wy.g.__TYPEDARRAY_POOL || (Wy.g.__TYPEDARRAY_POOL = {
      UINT8: hy([32, 0]),
      UINT16: hy([32, 0]),
      UINT32: hy([32, 0]),
      INT8: hy([32, 0]),
      INT16: hy([32, 0]),
      INT32: hy([32, 0]),
      FLOAT: hy([32, 0]),
      DOUBLE: hy([32, 0]),
      DATA: hy([32, 0]),
      UINT8C: hy([32, 0]),
      BUFFER: hy([32, 0])
    });
    var Zy = "undefined" !== typeof Uint8ClampedArray,
      cb = Wy.g.__TYPEDARRAY_POOL;
    cb.UINT8C || (cb.UINT8C = hy([32, 0])), cb.BUFFER || (cb.BUFFER = hy([32, 0]));
    var Py = cb.DATA,
      oy = cb.BUFFER;

    function By(yb) {
      if (yb) {
        var bb = yb.length || yb.byteLength,
          Wy = Uy.log2(bb);
        Py[Wy].push(yb)
      }
    }

    function Ky(yb) {
      yb = Uy.nextPow2(yb);
      var bb = Uy.log2(yb),
        Wy = Py[bb];
      return Wy.length > 0 ? Wy.pop() : new ArrayBuffer(yb)
    }

    function ey(yb) {
      return new Uint8Array(Ky(yb), 0, yb)
    }

    function qb(yb) {
      return new Uint16Array(Ky(2 * yb), 0, yb)
    }

    function sy(yb) {
      return new Uint32Array(Ky(4 * yb), 0, yb)
    }

    function Sy(yb) {
      return new Int8Array(Ky(yb), 0, yb)
    }

    function Ey(yb) {
      return new Int16Array(Ky(2 * yb), 0, yb)
    }

    function ly(yb) {
      return new Int32Array(Ky(4 * yb), 0, yb)
    }

    function mb(yb) {
      return new Float32Array(Ky(4 * yb), 0, yb)
    }

    function Cy(yb) {
      return new Float64Array(Ky(8 * yb), 0, yb)
    }

    function Ty(yb) {
      return Zy ? new Uint8ClampedArray(Ky(yb), 0, yb) : ey(yb)
    }

    function Vy(yb) {
      return new DataView(Ky(yb), 0, yb)
    }
    bb.free = function(yb) {
      if (fy(yb)) oy[Uy.log2(yb.length)].push(yb);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(yb) && (yb = yb.buffer), !yb) return;
        var bb = yb.length || yb.byteLength,
          Wy = 0 | Uy.log2(bb);
        Py[Wy].push(yb)
      }
    }, bb.freeUint8 = bb.freeUint16 = bb.freeUint32 = bb.freeInt8 = bb.freeInt16 = bb.freeInt32 = bb.freeFloat32 = bb.freeFloat = bb.freeFloat64 = bb.freeDouble = bb.freeUint8Clamped = bb.freeDataView = function(yb) {
      By(yb.buffer)
    }, bb.freeArrayBuffer = By, bb.freeBuffer = function(yb) {
      oy[Uy.log2(yb.length)].push(yb)
    }, bb.malloc = function(yb, bb) {
      if (void 0 === bb || "arraybuffer" === bb) return Ky(yb);
      switch (bb) {
        case "uint8":
          return ey(yb);
        case "uint16":
          return qb(yb);
        case "uint32":
          return sy(yb);
        case "int8":
          return Sy(yb);
        case "int16":
          return Ey(yb);
        case "int32":
          return ly(yb);
        case "float":
        case "float32":
          return mb(yb);
        case "double":
        case "float64":
          return Cy(yb);
        case "uint8_clamped":
          return Ty(yb);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return Vy(yb);
        default:
          return null
      }
      return null
    }, bb.mallocArrayBuffer = Ky, bb.mallocUint8 = ey, bb.mallocUint16 = qb, bb.mallocUint32 = sy, bb.mallocInt8 = Sy, bb.mallocInt16 = Ey, bb.mallocInt32 = ly, bb.mallocFloat32 = bb.mallocFloat = mb, bb.mallocFloat64 = bb.mallocDouble = Cy, bb.mallocUint8Clamped = Ty, bb.mallocDataView = Vy, bb.clearCache = function() {
      for (var yb = 0; yb < 32; ++yb) cb.UINT8[yb].length = 0, cb.UINT16[yb].length = 0, cb.UINT32[yb].length = 0, cb.INT8[yb].length = 0, cb.INT16[yb].length = 0, cb.INT32[yb].length = 0, cb.FLOAT[yb].length = 0, cb.DOUBLE[yb].length = 0, cb.UINT8C[yb].length = 0, Py[yb].length = 0, oy[yb].length = 0
    }
  },
  36987: (yb, bb) => {
    function Wy(yb) {
      var bb = 32;
      return (yb &= -yb) && bb--, 65535 & yb && (bb -= 16), 16711935 & yb && (bb -= 8), 252645135 & yb && (bb -= 4), 858993459 & yb && (bb -= 2), 1431655765 & yb && (bb -= 1), bb
    }
    bb.INT_BITS = 32, bb.INT_MAX = 2147483647, bb.INT_MIN = -1 << 31, bb.sign = function(yb) {
      return (yb > 0) - (yb < 0)
    }, bb.abs = function(yb) {
      var bb = yb >> 31;
      return (yb ^ bb) - bb
    }, bb.min = function(yb, bb) {
      return bb ^ (yb ^ bb) & -(yb < bb)
    }, bb.max = function(yb, bb) {
      return yb ^ (yb ^ bb) & -(yb < bb)
    }, bb.isPow2 = function(yb) {
      return !(yb & yb - 1) && !!yb
    }, bb.log2 = function(yb) {
      var bb, Wy;
      return bb = (yb > 65535) << 4, bb |= Wy = ((yb >>>= bb) > 255) << 3, bb |= Wy = ((yb >>>= Wy) > 15) << 2, (bb |= Wy = ((yb >>>= Wy) > 3) << 1) | (yb >>>= Wy) >> 1
    }, bb.log10 = function(yb) {
      return yb >= 1e9 ? 9 : yb >= 1e8 ? 8 : yb >= 1e7 ? 7 : yb >= 1e6 ? 6 : yb >= 1e5 ? 5 : yb >= 1e4 ? 4 : yb >= 1e3 ? 3 : yb >= 100 ? 2 : yb >= 10 ? 1 : 0
    }, bb.popCount = function(yb) {
      return 16843009 * ((yb = (858993459 & (yb -= yb >>> 1 & 1431655765)) + (yb >>> 2 & 858993459)) + (yb >>> 4) & 252645135) >>> 24
    }, bb.countTrailingZeros = Wy, bb.nextPow2 = function(yb) {
      return yb += 0 === yb, --yb, yb |= yb >>> 1, yb |= yb >>> 2, yb |= yb >>> 4, yb |= yb >>> 8, (yb |= yb >>> 16) + 1
    }, bb.prevPow2 = function(yb) {
      return yb |= yb >>> 1, yb |= yb >>> 2, yb |= yb >>> 4, yb |= yb >>> 8, (yb |= yb >>> 16) - (yb >>> 1)
    }, bb.parity = function(yb) {
      return yb ^= yb >>> 16, yb ^= yb >>> 8, yb ^= yb >>> 4, 27030 >>> (yb &= 15) & 1
    };
    var Uy = new Array(256);
    ! function(yb) {
      for (var bb = 0; bb < 256; ++bb) {
        var Wy = bb,
          Uy = bb,
          hy = 7;
        for (Wy >>>= 1; Wy; Wy >>>= 1) Uy <<= 1, Uy |= 1 & Wy, --hy;
        yb[bb] = Uy << hy & 255
      }
    }(Uy), bb.reverse = function(yb) {
      return Uy[255 & yb] << 24 | Uy[yb >>> 8 & 255] << 16 | Uy[yb >>> 16 & 255] << 8 | Uy[yb >>> 24 & 255]
    }, bb.interleave2 = function(yb, bb) {
      return (yb = 1431655765 & ((yb = 858993459 & ((yb = 252645135 & ((yb = 16711935 & ((yb &= 65535) | yb << 8)) | yb << 4)) | yb << 2)) | yb << 1)) | (bb = 1431655765 & ((bb = 858993459 & ((bb = 252645135 & ((bb = 16711935 & ((bb &= 65535) | bb << 8)) | bb << 4)) | bb << 2)) | bb << 1)) << 1
    }, bb.deinterleave2 = function(yb, bb) {
      return (yb = 65535 & ((yb = 16711935 & ((yb = 252645135 & ((yb = 858993459 & ((yb = yb >>> bb & 1431655765) | yb >>> 1)) | yb >>> 2)) | yb >>> 4)) | yb >>> 16)) << 16 >> 16
    }, bb.interleave3 = function(yb, bb, Wy) {
      return yb = 1227133513 & ((yb = 3272356035 & ((yb = 251719695 & ((yb = 4278190335 & ((yb &= 1023) | yb << 16)) | yb << 8)) | yb << 4)) | yb << 2), (yb |= (bb = 1227133513 & ((bb = 3272356035 & ((bb = 251719695 & ((bb = 4278190335 & ((bb &= 1023) | bb << 16)) | bb << 8)) | bb << 4)) | bb << 2)) << 1) | (Wy = 1227133513 & ((Wy = 3272356035 & ((Wy = 251719695 & ((Wy = 4278190335 & ((Wy &= 1023) | Wy << 16)) | Wy << 8)) | Wy << 4)) | Wy << 2)) << 2
    }, bb.deinterleave3 = function(yb, bb) {
      return (yb = 1023 & ((yb = 4278190335 & ((yb = 251719695 & ((yb = 3272356035 & ((yb = yb >>> bb & 1227133513) | yb >>> 2)) | yb >>> 4)) | yb >>> 8)) | yb >>> 16)) << 22 >> 22
    }, bb.nextCombination = function(yb) {
      var bb = yb | yb - 1;
      return bb + 1 | (~bb & -~bb) - 1 >>> Wy(yb) + 1
    }
  },
  36979: (yb, bb, Wy) => {
    yb.exports = function(yb, bb, Wy) {
      switch (arguments.length) {
        case 1:
          return Uy = [], oy(hy = yb, hy, By, !0), Uy;
        case 2:
          return "function" === typeof bb ? oy(yb, yb, bb, !0) : function(yb, bb) {
            return Uy = [], oy(yb, bb, By, !1), Uy
          }(yb, bb);
        case 3:
          return oy(yb, bb, Wy, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var hy
    };
    var Uy, hy = Wy(36981),
      fy = Wy(36998),
      Zy = Wy(37014);

    function cb(yb, bb) {
      for (var Wy = 0; Wy < yb; ++Wy)
        if (!(bb[Wy] <= bb[Wy + yb])) return !0;
      return !1
    }

    function Py(yb, bb, Wy, Uy) {
      for (var hy = 0, fy = 0, Zy = 0, Py = yb.length; Zy < Py; ++Zy) {
        var oy = yb[Zy];
        if (!cb(bb, oy)) {
          for (var By = 0; By < 2 * bb; ++By) Wy[hy++] = oy[By];
          Uy[fy++] = Zy
        }
      }
      return fy
    }

    function oy(yb, bb, Wy, Uy) {
      var cb = yb.length,
        oy = bb.length;
      if (!(cb <= 0 || oy <= 0)) {
        var By = yb[0].length >>> 1;
        if (!(By <= 0)) {
          var Ky, ey = hy.mallocDouble(2 * By * cb),
            qb = hy.mallocInt32(cb);
          if ((cb = Py(yb, By, ey, qb)) > 0) {
            if (1 === By && Uy) fy.init(cb), Ky = fy.sweepComplete(By, Wy, 0, cb, ey, qb, 0, cb, ey, qb);
            else {
              var sy = hy.mallocDouble(2 * By * oy),
                Sy = hy.mallocInt32(oy);
              (oy = Py(bb, By, sy, Sy)) > 0 && (fy.init(cb + oy), Ky = 1 === By ? fy.sweepBipartite(By, Wy, 0, cb, ey, qb, 0, oy, sy, Sy) : Zy(By, Wy, Uy, cb, ey, qb, oy, sy, Sy), hy.free(sy), hy.free(Sy))
            }
            hy.free(ey), hy.free(qb)
          }
          return Ky
        }
      }
    }

    function By(yb, bb) {
      Uy.push([yb, bb])
    }
  },
  37016: (yb, bb) => {
    var Wy = "d",
      Uy = "ax",
      hy = "fp",
      fy = "es",
      Zy = "rs",
      cb = "re",
      Py = "rb",
      oy = "bs",
      By = "be",
      Ky = "bb",
      ey = [Wy, Uy, "vv", Zy, cb, Py, "ri", oy, By, Ky, "bi"];

    function qb(yb) {
      var bb = "bruteForce" + (yb ? "Full" : "Partial"),
        Uy = [],
        Zy = ey.slice();
      yb || Zy.splice(3, 0, hy);
      var cb = ["function " + bb + "(" + Zy.join() + "){"];

      function Py(bb, hy) {
        var Zy = function(yb, bb, Uy) {
          var hy = "bruteForce" + (yb ? "Red" : "Blue") + (bb ? "Flip" : "") + (Uy ? "Full" : ""),
            Zy = ["function ", hy, "(", ey.join(), "){", "var ", fy, "=2*", Wy, ";"],
            cb = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            Py = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (Uy ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return yb ? Zy.push(cb, "Q", ":", Py) : Zy.push(Py, "Q", ":", cb), Uy ? Zy.push("if(y1<x0||x1<y0)continue;") : bb ? Zy.push("if(y0<=x0||x1<y0)continue;") : Zy.push("if(y0<x0||x1<y0)continue;"), Zy.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), bb ? Zy.push("yi,xi") : Zy.push("xi,yi"), Zy.push(");if(rv!==void 0)return rv;}}}"), {
            name: hy,
            code: Zy.join("")
          }
        }(bb, hy, yb);
        Uy.push(Zy.code), cb.push("return " + Zy.name + "(" + ey.join() + ");")
      }
      cb.push("if(re-rs>be-bs){"), yb ? (Py(!0, !1), cb.push("}else{"), Py(!1, !1)) : (cb.push("if(fp){"), Py(!0, !0), cb.push("}else{"), Py(!0, !1), cb.push("}}else{if(fp){"), Py(!1, !0), cb.push("}else{"), Py(!1, !1), cb.push("}")), cb.push("}}return " + bb);
      var oy = Uy.join("") + cb.join("");
      return new Function(oy)()
    }
    bb.partial = qb(!1), bb.full = qb(!0)
  },
  37014: (yb, bb, Wy) => {
    yb.exports = function(yb, bb, Wy, fy, By, vb, ib, My, Yy) {
      ! function(yb, bb) {
        var Wy = 8 * hy.log2(bb + 1) * (yb + 1) | 0,
          fy = hy.nextPow2(Ty * Wy);
        Jy.length < fy && (Uy.free(Jy), Jy = Uy.mallocInt32(fy));
        var Zy = hy.nextPow2(Vy * Wy);
        gb.length < Zy && (Uy.free(gb), gb = Uy.mallocDouble(Zy))
      }(yb, fy + ib);
      var Xy, ny = 0,
        uy = 2 * yb;
      Gy(ny++, 0, 0, fy, 0, ib, Wy ? 16 : 0, -1 / 0, 1 / 0), Wy || Gy(ny++, 0, 0, ib, 0, fy, 1, -1 / 0, 1 / 0);
      for (; ny > 0;) {
        var rb = (ny -= 1) * Ty,
          Hy = Jy[rb],
          ab = Jy[rb + 1],
          Fy = Jy[rb + 2],
          py = Jy[rb + 3],
          Ly = Jy[rb + 4],
          Qy = Jy[rb + 5],
          jb = ny * Vy,
          Dy = gb[jb],
          tb = gb[jb + 1],
          wy = 1 & Qy,
          kb = !!(16 & Qy),
          Ny = By,
          zb = vb,
          Iy = My,
          xb = Yy;
        if (wy && (Ny = My, zb = Yy, Iy = By, xb = vb), !(2 & Qy && ab >= (Fy = Ey(yb, Hy, ab, Fy, Ny, zb, tb))) && !(4 & Qy && (ab = ly(yb, Hy, ab, Fy, Ny, zb, Dy)) >= Fy)) {
          var Ay = Fy - ab,
            dy = Ly - py;
          if (kb) {
            if (yb * Ay * (Ay + dy) < qb) {
              if (void 0 !== (Xy = Py.scanComplete(yb, Hy, bb, ab, Fy, Ny, zb, py, Ly, Iy, xb))) return Xy;
              continue
            }
          } else {
            if (yb * Math.min(Ay, dy) < Ky) {
              if (void 0 !== (Xy = Zy(yb, Hy, bb, wy, ab, Fy, Ny, zb, py, Ly, Iy, xb))) return Xy;
              continue
            }
            if (yb * Ay * dy < ey) {
              if (void 0 !== (Xy = Py.scanBipartite(yb, Hy, bb, wy, ab, Fy, Ny, zb, py, Ly, Iy, xb))) return Xy;
              continue
            }
          }
          var yW = sy(yb, Hy, ab, Fy, Ny, zb, Dy, tb);
          if (ab < yW)
            if (yb * (yW - ab) < Ky) {
              if (void 0 !== (Xy = cb(yb, Hy + 1, bb, ab, yW, Ny, zb, py, Ly, Iy, xb))) return Xy
            } else if (Hy === yb - 2) {
            if (void 0 !== (Xy = wy ? Py.sweepBipartite(yb, bb, py, Ly, Iy, xb, ab, yW, Ny, zb) : Py.sweepBipartite(yb, bb, ab, yW, Ny, zb, py, Ly, Iy, xb))) return Xy
          } else Gy(ny++, Hy + 1, ab, yW, py, Ly, wy, -1 / 0, 1 / 0), Gy(ny++, Hy + 1, py, Ly, ab, yW, 1 ^ wy, -1 / 0, 1 / 0);
          if (yW < Fy) {
            var bW = oy(yb, Hy, py, Ly, Iy, xb),
              Wb = Iy[uy * bW + Hy],
              Ub = Sy(yb, Hy, bW, Ly, Iy, xb, Wb);
            if (Ub < Ly && Gy(ny++, Hy, yW, Fy, Ub, Ly, (4 | wy) + (kb ? 16 : 0), Wb, tb), py < bW && Gy(ny++, Hy, yW, Fy, py, bW, (2 | wy) + (kb ? 16 : 0), Dy, Wb), bW + 1 === Ub) {
              if (void 0 !== (Xy = kb ? Ry(yb, Hy, bb, yW, Fy, Ny, zb, bW, Iy, xb[bW]) : Oy(yb, Hy, bb, wy, yW, Fy, Ny, zb, bW, Iy, xb[bW]))) return Xy
            } else if (bW < Ub) {
              var hb;
              if (kb) {
                if (yW < (hb = mb(yb, Hy, yW, Fy, Ny, zb, Wb))) {
                  var fb = Sy(yb, Hy, yW, hb, Ny, zb, Wb);
                  if (Hy === yb - 2) {
                    if (yW < fb && void 0 !== (Xy = Py.sweepComplete(yb, bb, yW, fb, Ny, zb, bW, Ub, Iy, xb))) return Xy;
                    if (fb < hb && void 0 !== (Xy = Py.sweepBipartite(yb, bb, fb, hb, Ny, zb, bW, Ub, Iy, xb))) return Xy
                  } else yW < fb && Gy(ny++, Hy + 1, yW, fb, bW, Ub, 16, -1 / 0, 1 / 0), fb < hb && (Gy(ny++, Hy + 1, fb, hb, bW, Ub, 0, -1 / 0, 1 / 0), Gy(ny++, Hy + 1, bW, Ub, fb, hb, 1, -1 / 0, 1 / 0))
                }
              } else yW < (hb = wy ? Cy(yb, Hy, yW, Fy, Ny, zb, Wb) : mb(yb, Hy, yW, Fy, Ny, zb, Wb)) && (Hy === yb - 2 ? Xy = wy ? Py.sweepBipartite(yb, bb, bW, Ub, Iy, xb, yW, hb, Ny, zb) : Py.sweepBipartite(yb, bb, yW, hb, Ny, zb, bW, Ub, Iy, xb) : (Gy(ny++, Hy + 1, yW, hb, bW, Ub, wy, -1 / 0, 1 / 0), Gy(ny++, Hy + 1, bW, Ub, yW, hb, 1 ^ wy, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var Uy = Wy(36981),
      hy = Wy(36987),
      fy = Wy(37016),
      Zy = fy.partial,
      cb = fy.full,
      Py = Wy(36998),
      oy = Wy(37021),
      By = Wy(37024),
      Ky = 128,
      ey = 1 << 22,
      qb = 1 << 22,
      sy = By("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      Sy = By("lo===p0", ["p0"]),
      Ey = By("lo<p0", ["p0"]),
      ly = By("hi<=p0", ["p0"]),
      mb = By("lo<=p0&&p0<=hi", ["p0"]),
      Cy = By("lo<p0&&p0<=hi", ["p0"]),
      Ty = 6,
      Vy = 2,
      Jy = Uy.mallocInt32(1024),
      gb = Uy.mallocDouble(1024);

    function Gy(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py) {
      var oy = Ty * yb;
      Jy[oy] = bb, Jy[oy + 1] = Wy, Jy[oy + 2] = Uy, Jy[oy + 3] = hy, Jy[oy + 4] = fy, Jy[oy + 5] = Zy;
      var By = Vy * yb;
      gb[By] = cb, gb[By + 1] = Py
    }

    function Oy(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy, By) {
      var Ky = 2 * yb,
        ey = Py * Ky,
        qb = oy[ey + bb];
      yb: for (var sy = hy, Sy = hy * Ky; sy < fy; ++sy, Sy += Ky) {
        var Ey = Zy[Sy + bb],
          ly = Zy[Sy + bb + yb];
        if (!(qb < Ey || ly < qb) && (!Uy || qb !== Ey)) {
          for (var mb, Cy = cb[sy], Ty = bb + 1; Ty < yb; ++Ty) {
            Ey = Zy[Sy + Ty], ly = Zy[Sy + Ty + yb];
            var Vy = oy[ey + Ty],
              Jy = oy[ey + Ty + yb];
            if (ly < Vy || Jy < Ey) continue yb
          }
          if (void 0 !== (mb = Uy ? Wy(By, Cy) : Wy(Cy, By))) return mb
        }
      }
    }

    function Ry(yb, bb, Wy, Uy, hy, fy, Zy, cb, Py, oy) {
      var By = 2 * yb,
        Ky = cb * By,
        ey = Py[Ky + bb];
      yb: for (var qb = Uy, sy = Uy * By; qb < hy; ++qb, sy += By) {
        var Sy = Zy[qb];
        if (Sy !== oy) {
          var Ey = fy[sy + bb],
            ly = fy[sy + bb + yb];
          if (!(ey < Ey || ly < ey)) {
            for (var mb = bb + 1; mb < yb; ++mb) {
              Ey = fy[sy + mb], ly = fy[sy + mb + yb];
              var Cy = Py[Ky + mb],
                Ty = Py[Ky + mb + yb];
              if (ly < Cy || Ty < Ey) continue yb
            }
            var Vy = Wy(Sy, oy);
            if (void 0 !== Vy) return Vy
          }
        }
      }
    }
  },
  37021: (yb, bb, Wy) => {
    yb.exports = function(yb, bb, Wy, Zy, cb, Py) {
      if (Zy <= Wy + 1) return Wy;
      var oy = Wy,
        By = Zy,
        Ky = Zy + Wy >>> 1,
        ey = 2 * yb,
        qb = Ky,
        sy = cb[ey * Ky + bb];
      for (; oy < By;) {
        if (By - oy < hy) {
          fy(yb, bb, oy, By, cb, Py), sy = cb[ey * Ky + bb];
          break
        }
        var Sy = By - oy,
          Ey = Math.random() * Sy + oy | 0,
          ly = cb[ey * Ey + bb],
          mb = Math.random() * Sy + oy | 0,
          Cy = cb[ey * mb + bb],
          Ty = Math.random() * Sy + oy | 0,
          Vy = cb[ey * Ty + bb];
        ly <= Cy ? Vy >= Cy ? (qb = mb, sy = Cy) : ly >= Vy ? (qb = Ey, sy = ly) : (qb = Ty, sy = Vy) : Cy >= Vy ? (qb = mb, sy = Cy) : Vy >= ly ? (qb = Ey, sy = ly) : (qb = Ty, sy = Vy);
        for (var Jy = ey * (By - 1), gb = ey * qb, Gy = 0; Gy < ey; ++Gy, ++Jy, ++gb) {
          var Oy = cb[Jy];
          cb[Jy] = cb[gb], cb[gb] = Oy
        }
        var Ry = Py[By - 1];
        Py[By - 1] = Py[qb], Py[qb] = Ry;
        for (Jy = ey * (By - 1), gb = ey * (qb = Uy(yb, bb, oy, By - 1, cb, Py, sy)), Gy = 0; Gy < ey; ++Gy, ++Jy, ++gb) {
          Oy = cb[Jy];
          cb[Jy] = cb[gb], cb[gb] = Oy
        }
        Ry = Py[By - 1];
        if (Py[By - 1] = Py[qb], Py[qb] = Ry, Ky < qb) {
          for (By = qb - 1; oy < By && cb[ey * (By - 1) + bb] === sy;) By -= 1;
          By += 1
        } else {
          if (!(qb < Ky)) break;
          for (oy = qb + 1; oy < By && cb[ey * oy + bb] === sy;) oy += 1
        }
      }
      return Uy(yb, bb, Wy, Ky, cb, Py, cb[ey * Ky + bb])
    };
    var Uy = Wy(37024)("lo<p0", ["p0"]),
      hy = 8;

    function fy(yb, bb, Wy, Uy, hy, fy) {
      for (var Zy = 2 * yb, cb = Zy * (Wy + 1) + bb, Py = Wy + 1; Py < Uy; ++Py, cb += Zy)
        for (var oy = hy[cb], By = Py, Ky = Zy * (Py - 1); By > Wy && hy[Ky + bb] > oy; --By, Ky -= Zy) {
          for (var ey = Ky, qb = Ky + Zy, sy = 0; sy < Zy; ++sy, ++ey, ++qb) {
            var Sy = hy[ey];
            hy[ey] = hy[qb], hy[qb] = Sy
          }
          var Ey = fy[By];
          fy[By] = fy[By - 1], fy[By - 1] = Ey
        }
    }
  },
  37024: yb => {
    yb.exports = function(yb, Wy) {
      var Uy = "abcdef".split("").concat(Wy),
        hy = [];
      yb.indexOf("lo") >= 0 && hy.push("lo=e[k+n]");
      yb.indexOf("hi") >= 0 && hy.push("hi=e[k+o]");
      return Uy.push(bb.replace("_", hy.join()).replace("$", yb)), Function.apply(void 0, Uy)
    };
    var bb = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  37007: yb => {
    yb.exports = function(yb, Uy) {
      Uy <= 4 * bb ? Wy(0, Uy - 1, yb) : oy(0, Uy - 1, yb)
    };
    var bb = 32;

    function Wy(yb, bb, Wy) {
      for (var Uy = 2 * (yb + 1), hy = yb + 1; hy <= bb; ++hy) {
        for (var fy = Wy[Uy++], Zy = Wy[Uy++], cb = hy, Py = Uy - 2; cb-- > yb;) {
          var oy = Wy[Py - 2],
            By = Wy[Py - 1];
          if (oy < fy) break;
          if (oy === fy && By < Zy) break;
          Wy[Py] = oy, Wy[Py + 1] = By, Py -= 2
        }
        Wy[Py] = fy, Wy[Py + 1] = Zy
      }
    }

    function Uy(yb, bb, Wy) {
      bb *= 2;
      var Uy = Wy[yb *= 2],
        hy = Wy[yb + 1];
      Wy[yb] = Wy[bb], Wy[yb + 1] = Wy[bb + 1], Wy[bb] = Uy, Wy[bb + 1] = hy
    }

    function hy(yb, bb, Wy) {
      bb *= 2, Wy[yb *= 2] = Wy[bb], Wy[yb + 1] = Wy[bb + 1]
    }

    function fy(yb, bb, Wy, Uy) {
      bb *= 2, Wy *= 2;
      var hy = Uy[yb *= 2],
        fy = Uy[yb + 1];
      Uy[yb] = Uy[bb], Uy[yb + 1] = Uy[bb + 1], Uy[bb] = Uy[Wy], Uy[bb + 1] = Uy[Wy + 1], Uy[Wy] = hy, Uy[Wy + 1] = fy
    }

    function Zy(yb, bb, Wy, Uy, hy) {
      bb *= 2, hy[yb *= 2] = hy[bb], hy[bb] = Wy, hy[yb + 1] = hy[bb + 1], hy[bb + 1] = Uy
    }

    function cb(yb, bb, Wy) {
      bb *= 2;
      var Uy = Wy[yb *= 2],
        hy = Wy[bb];
      return !(Uy < hy) && (Uy !== hy || Wy[yb + 1] > Wy[bb + 1])
    }

    function Py(yb, bb, Wy, Uy) {
      var hy = Uy[yb *= 2];
      return hy < bb || hy === bb && Uy[yb + 1] < Wy
    }

    function oy(yb, By, Ky) {
      var ey = (By - yb + 1) / 6 | 0,
        qb = yb + ey,
        sy = By - ey,
        Sy = yb + By >> 1,
        Ey = Sy - ey,
        ly = Sy + ey,
        mb = qb,
        Cy = Ey,
        Ty = Sy,
        Vy = ly,
        Jy = sy,
        gb = yb + 1,
        Gy = By - 1,
        Oy = 0;
      cb(mb, Cy, Ky) && (Oy = mb, mb = Cy, Cy = Oy), cb(Vy, Jy, Ky) && (Oy = Vy, Vy = Jy, Jy = Oy), cb(mb, Ty, Ky) && (Oy = mb, mb = Ty, Ty = Oy), cb(Cy, Ty, Ky) && (Oy = Cy, Cy = Ty, Ty = Oy), cb(mb, Vy, Ky) && (Oy = mb, mb = Vy, Vy = Oy), cb(Ty, Vy, Ky) && (Oy = Ty, Ty = Vy, Vy = Oy), cb(Cy, Jy, Ky) && (Oy = Cy, Cy = Jy, Jy = Oy), cb(Cy, Ty, Ky) && (Oy = Cy, Cy = Ty, Ty = Oy), cb(Vy, Jy, Ky) && (Oy = Vy, Vy = Jy, Jy = Oy);
      for (var Ry = Ky[2 * Cy], vb = Ky[2 * Cy + 1], ib = Ky[2 * Vy], My = Ky[2 * Vy + 1], Yy = 2 * mb, Xy = 2 * Ty, ny = 2 * Jy, uy = 2 * qb, rb = 2 * Sy, Hy = 2 * sy, ab = 0; ab < 2; ++ab) {
        var Fy = Ky[Yy + ab],
          py = Ky[Xy + ab],
          Ly = Ky[ny + ab];
        Ky[uy + ab] = Fy, Ky[rb + ab] = py, Ky[Hy + ab] = Ly
      }
      hy(Ey, yb, Ky), hy(ly, By, Ky);
      for (var Qy = gb; Qy <= Gy; ++Qy)
        if (Py(Qy, Ry, vb, Ky)) Qy !== gb && Uy(Qy, gb, Ky), ++gb;
        else if (!Py(Qy, ib, My, Ky))
        for (;;) {
          if (Py(Gy, ib, My, Ky)) {
            Py(Gy, Ry, vb, Ky) ? (fy(Qy, gb, Gy, Ky), ++gb, --Gy) : (Uy(Qy, Gy, Ky), --Gy);
            break
          }
          if (--Gy < Qy) break
        }
      Zy(yb, gb - 1, Ry, vb, Ky), Zy(By, Gy + 1, ib, My, Ky), gb - 2 - yb <= bb ? Wy(yb, gb - 2, Ky) : oy(yb, gb - 2, Ky), By - (Gy + 2) <= bb ? Wy(Gy + 2, By, Ky) : oy(Gy + 2, By, Ky), Gy - gb <= bb ? Wy(gb, Gy, Ky) : oy(gb, Gy, Ky)
    }
  },
  36998: (yb, bb, Wy) => {
    yb.exports = {
      init: function(yb) {
        var bb = hy.nextPow2(yb);
        Py.length < bb && (Uy.free(Py), Py = Uy.mallocInt32(bb));
        oy.length < bb && (Uy.free(oy), oy = Uy.mallocInt32(bb));
        By.length < bb && (Uy.free(By), By = Uy.mallocInt32(bb));
        Ky.length < bb && (Uy.free(Ky), Ky = Uy.mallocInt32(bb));
        ey.length < bb && (Uy.free(ey), ey = Uy.mallocInt32(bb));
        qb.length < bb && (Uy.free(qb), qb = Uy.mallocInt32(bb));
        var Wy = 8 * bb;
        sy.length < Wy && (Uy.free(sy), sy = Uy.mallocDouble(Wy))
      },
      sweepBipartite: function(yb, bb, Wy, Uy, hy, cb, ey, qb, ly, mb) {
        for (var Cy = 0, Ty = 2 * yb, Vy = yb - 1, Jy = Ty - 1, gb = Wy; gb < Uy; ++gb) {
          var Gy = cb[gb],
            Oy = Ty * gb;
          sy[Cy++] = hy[Oy + Vy], sy[Cy++] = -(Gy + 1), sy[Cy++] = hy[Oy + Jy], sy[Cy++] = Gy
        }
        for (gb = ey; gb < qb; ++gb) {
          Gy = mb[gb] + Zy;
          var Ry = Ty * gb;
          sy[Cy++] = ly[Ry + Vy], sy[Cy++] = -Gy, sy[Cy++] = ly[Ry + Jy], sy[Cy++] = Gy
        }
        var vb = Cy >>> 1;
        fy(sy, vb);
        var ib = 0,
          My = 0;
        for (gb = 0; gb < vb; ++gb) {
          var Yy = 0 | sy[2 * gb + 1];
          if (Yy >= Zy) Sy(By, Ky, My--, Yy = Yy - Zy | 0);
          else if (Yy >= 0) Sy(Py, oy, ib--, Yy);
          else if (Yy <= -Zy) {
            Yy = -Yy - Zy | 0;
            for (var Xy = 0; Xy < ib; ++Xy) {
              if (void 0 !== (ny = bb(Py[Xy], Yy))) return ny
            }
            Ey(By, Ky, My++, Yy)
          } else {
            Yy = -Yy - 1 | 0;
            for (Xy = 0; Xy < My; ++Xy) {
              var ny;
              if (void 0 !== (ny = bb(Yy, By[Xy]))) return ny
            }
            Ey(Py, oy, ib++, Yy)
          }
        }
      },
      sweepComplete: function(yb, bb, Wy, Uy, hy, Zy, cb, ly, mb, Cy) {
        for (var Ty = 0, Vy = 2 * yb, Jy = yb - 1, gb = Vy - 1, Gy = Wy; Gy < Uy; ++Gy) {
          var Oy = Zy[Gy] + 1 << 1,
            Ry = Vy * Gy;
          sy[Ty++] = hy[Ry + Jy], sy[Ty++] = -Oy, sy[Ty++] = hy[Ry + gb], sy[Ty++] = Oy
        }
        for (Gy = cb; Gy < ly; ++Gy) {
          Oy = Cy[Gy] + 1 << 1;
          var vb = Vy * Gy;
          sy[Ty++] = mb[vb + Jy], sy[Ty++] = 1 | -Oy, sy[Ty++] = mb[vb + gb], sy[Ty++] = 1 | Oy
        }
        var ib = Ty >>> 1;
        fy(sy, ib);
        var My = 0,
          Yy = 0,
          Xy = 0;
        for (Gy = 0; Gy < ib; ++Gy) {
          var ny = 0 | sy[2 * Gy + 1],
            uy = 1 & ny;
          if (Gy < ib - 1 && ny >> 1 === sy[2 * Gy + 3] >> 1 && (uy = 2, Gy += 1), ny < 0) {
            for (var rb = -(ny >> 1) - 1, Hy = 0; Hy < Xy; ++Hy) {
              if (void 0 !== (ab = bb(ey[Hy], rb))) return ab
            }
            if (0 !== uy)
              for (Hy = 0; Hy < My; ++Hy) {
                if (void 0 !== (ab = bb(Py[Hy], rb))) return ab
              }
            if (1 !== uy)
              for (Hy = 0; Hy < Yy; ++Hy) {
                var ab;
                if (void 0 !== (ab = bb(By[Hy], rb))) return ab
              }
            0 === uy ? Ey(Py, oy, My++, rb) : 1 === uy ? Ey(By, Ky, Yy++, rb) : 2 === uy && Ey(ey, qb, Xy++, rb)
          } else {
            rb = (ny >> 1) - 1;
            0 === uy ? Sy(Py, oy, My--, rb) : 1 === uy ? Sy(By, Ky, Yy--, rb) : 2 === uy && Sy(ey, qb, Xy--, rb)
          }
        }
      },
      scanBipartite: function(yb, bb, Wy, Uy, hy, cb, By, Ky, ey, qb, ly, mb) {
        var Cy = 0,
          Ty = 2 * yb,
          Vy = bb,
          Jy = bb + yb,
          gb = 1,
          Gy = 1;
        Uy ? Gy = Zy : gb = Zy;
        for (var Oy = hy; Oy < cb; ++Oy) {
          var Ry = Oy + gb,
            vb = Ty * Oy;
          sy[Cy++] = By[vb + Vy], sy[Cy++] = -Ry, sy[Cy++] = By[vb + Jy], sy[Cy++] = Ry
        }
        for (Oy = ey; Oy < qb; ++Oy) {
          Ry = Oy + Gy;
          var ib = Ty * Oy;
          sy[Cy++] = ly[ib + Vy], sy[Cy++] = -Ry
        }
        var My = Cy >>> 1;
        fy(sy, My);
        var Yy = 0;
        for (Oy = 0; Oy < My; ++Oy) {
          var Xy = 0 | sy[2 * Oy + 1];
          if (Xy < 0) {
            var ny = !1;
            if ((Ry = -Xy) >= Zy ? (ny = !Uy, Ry -= Zy) : (ny = !!Uy, Ry -= 1), ny) Ey(Py, oy, Yy++, Ry);
            else {
              var uy = mb[Ry],
                rb = Ty * Ry,
                Hy = ly[rb + bb + 1],
                ab = ly[rb + bb + 1 + yb];
              yb: for (var Fy = 0; Fy < Yy; ++Fy) {
                var py = Py[Fy],
                  Ly = Ty * py;
                if (!(ab < By[Ly + bb + 1] || By[Ly + bb + 1 + yb] < Hy)) {
                  for (var Qy = bb + 2; Qy < yb; ++Qy)
                    if (ly[rb + Qy + yb] < By[Ly + Qy] || By[Ly + Qy + yb] < ly[rb + Qy]) continue yb;
                  var jb, Dy = Ky[py];
                  if (void 0 !== (jb = Uy ? Wy(uy, Dy) : Wy(Dy, uy))) return jb
                }
              }
            }
          } else Sy(Py, oy, Yy--, Xy - gb)
        }
      },
      scanComplete: function(yb, bb, Wy, Uy, hy, cb, oy, By, Ky, ey, qb) {
        for (var Sy = 0, Ey = 2 * yb, ly = bb, mb = bb + yb, Cy = Uy; Cy < hy; ++Cy) {
          var Ty = Cy + Zy,
            Vy = Ey * Cy;
          sy[Sy++] = cb[Vy + ly], sy[Sy++] = -Ty, sy[Sy++] = cb[Vy + mb], sy[Sy++] = Ty
        }
        for (Cy = By; Cy < Ky; ++Cy) {
          Ty = Cy + 1;
          var Jy = Ey * Cy;
          sy[Sy++] = ey[Jy + ly], sy[Sy++] = -Ty
        }
        var gb = Sy >>> 1;
        fy(sy, gb);
        var Gy = 0;
        for (Cy = 0; Cy < gb; ++Cy) {
          var Oy = 0 | sy[2 * Cy + 1];
          if (Oy < 0) {
            if ((Ty = -Oy) >= Zy) Py[Gy++] = Ty - Zy;
            else {
              var Ry = qb[Ty -= 1],
                vb = Ey * Ty,
                ib = ey[vb + bb + 1],
                My = ey[vb + bb + 1 + yb];
              yb: for (var Yy = 0; Yy < Gy; ++Yy) {
                var Xy = Py[Yy],
                  ny = oy[Xy];
                if (ny === Ry) break;
                var uy = Ey * Xy;
                if (!(My < cb[uy + bb + 1] || cb[uy + bb + 1 + yb] < ib)) {
                  for (var rb = bb + 2; rb < yb; ++rb)
                    if (ey[vb + rb + yb] < cb[uy + rb] || cb[uy + rb + yb] < ey[vb + rb]) continue yb;
                  var Hy = Wy(ny, Ry);
                  if (void 0 !== Hy) return Hy
                }
              }
            }
          } else {
            for (Ty = Oy - Zy, Yy = Gy - 1; Yy >= 0; --Yy)
              if (Py[Yy] === Ty) {
                for (rb = Yy + 1; rb < Gy; ++rb) Py[rb - 1] = Py[rb];
                break
              }-- Gy
          }
        }
      }
    };
    var Uy = Wy(36981),
      hy = Wy(36987),
      fy = Wy(37007),
      Zy = 1 << 28,
      cb = 1024,
      Py = Uy.mallocInt32(cb),
      oy = Uy.mallocInt32(cb),
      By = Uy.mallocInt32(cb),
      Ky = Uy.mallocInt32(cb),
      ey = Uy.mallocInt32(cb),
      qb = Uy.mallocInt32(cb),
      sy = Uy.mallocDouble(8192);

    function Sy(yb, bb, Wy, Uy) {
      var hy = bb[Uy],
        fy = yb[Wy - 1];
      yb[hy] = fy, bb[fy] = hy
    }

    function Ey(yb, bb, Wy, Uy) {
      yb[Wy] = Uy, bb[Uy] = Wy
    }
  },
  36989: yb => {
    function bb(yb, Wy, Uy) {
      var hy = 0 | yb[Uy];
      if (hy <= 0) return [];
      var fy, Zy = new Array(hy);
      if (Uy === yb.length - 1)
        for (fy = 0; fy < hy; ++fy) Zy[fy] = Wy;
      else
        for (fy = 0; fy < hy; ++fy) Zy[fy] = bb(yb, Wy, Uy + 1);
      return Zy
    }
    yb.exports = function(yb, Wy) {
      switch ("undefined" === typeof Wy && (Wy = 0), typeof yb) {
        case "number":
          if (yb > 0) return function(yb, bb) {
            var Wy, Uy;
            for (Wy = new Array(yb), Uy = 0; Uy < yb; ++Uy) Wy[Uy] = bb;
            return Wy
          }(0 | yb, Wy);
          break;
        case "object":
          if ("number" === typeof yb.length) return bb(yb, Wy, 0)
      }
      return []
    }
  },
  36941: (yb, bb, Wy) => {
    yb.exports = function() {
      var yb = this;
      this.components = {}, this.comps = this.components;
      var bb = this.components,
        Wy = 1,
        hy = {},
        fy = [],
        Zy = [],
        cb = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function Py(yb, Wy) {
        var Uy = bb[Wy],
          fy = hy[Wy],
          Zy = fy.hash[yb];
        Zy && (fy.remove(yb), Uy.Yby && (Uy.multi ? (Zy.forEach((bb => {
          bb && Uy.Yby(yb, bb)
        })), Zy.length = 0) : Uy.Yby(yb, Zy)), cb.removals.push(fy), oy())
      }

      function oy() {
        cb.timeout || (cb.timeout = !0, setTimeout(By, 1))
      }

      function By() {
        cb.timeout = !1, Ky()
      }

      function Ky() {
        cb.multiComps.length && function(yb) {
          for (var bb = 0; bb < yb.length; bb++) {
            var {
              entID: Wy,
              data: Uy
            } = yb[bb], hy = Uy.hash[Wy];
            if (hy) {
              for (var fy = 0; fy < hy.length; fy++) hy[fy] || (hy.splice(fy, 1), fy--);
              0 === hy.length && (Uy.remove(Wy), cb.removals.push(Uy))
            }
          }
          yb.length = 0
        }(cb.multiComps), cb.removals.length && function(yb) {
          for (var bb = 0; bb < yb.length; bb++) {
            yb[bb].flush()
          }
          yb.length = 0
        }(cb.removals)
      }
      this.Fh = hy, this._systems = fy, this._renderSystems = Zy, this.dUy = function(bb) {
        var Uy = Wy++;
        return Array.isArray(bb) && bb.forEach((bb => yb.hWy(Uy, bb))), Uy
      }, this.deleteEntity = function(bb) {
        return Object.keys(hy).forEach((yb => {
          hy[yb].hash[bb] && Py(bb, yb)
        })), yb
      }, this.RPy = function(yb) {
        if (!yb) throw new Error("Missing component definition");
        var Wy = yb.name;
        if (!Wy) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof Wy) throw new Error("Component name must be a string.");
        if ("" === Wy) throw new Error("Component name must be a non-empty string.");
        if (hy[Wy]) throw new Error(`Component ${Wy} already exists.`);
        var cb = {};
        return cb.name = Wy, cb.multi = !!yb.multi, cb.order = isNaN(yb.order) ? 99 : yb.order, cb.stateConstructor = yb.stateConstructor || null, cb.state = yb.state || {}, cb.cC = yb.cC || null, cb.Yby = yb.Yby || null, cb.system = yb.system || null, cb.mC = yb.mC || null, bb[Wy] = cb, hy[Wy] = new Uy, hy[Wy]._pendingMultiCleanup = !1, hy[Wy]._multiCleanupIDs = cb.multi ? [] : null, cb.system && (fy.push(Wy), fy.sort(((yb, Wy) => bb[yb].order - bb[Wy].order))), cb.mC && (Zy.push(Wy), Zy.sort(((yb, Wy) => bb[yb].order - bb[Wy].order))), Wy
      }, this.overwriteComponent = function(yb, Wy) {
        var Uy = bb[yb];
        if (!Uy) throw new Error(`Unknown component: ${yb}`);
        if (!Wy) throw new Error("Missing component definition");
        if (Uy.name !== Wy.name) throw new Error("Overwriting component must use the same name property.");
        var cb = {};
        cb.name = yb, cb.multi = !!Wy.multi, cb.order = isNaN(Wy.order) ? 99 : Wy.order, cb.state = Wy.state || {}, cb.cC = Wy.cC || null, cb.Yby = Wy.Yby || null, cb.system = Wy.system || null, cb.mC = Wy.mC || null, bb[yb] = cb, hy[yb]._pendingMultiCleanup = !1, hy[yb]._multiCleanupIDs = cb.multi ? [] : null;
        var Py = fy.indexOf(yb);
        cb.system && Py < 0 && fy.push(yb), !cb.system && Py >= 0 && fy.splice(Py, 1), fy.sort(((yb, Wy) => bb[yb].order - bb[Wy].order));
        var oy = Zy.indexOf(yb);
        cb.mC && oy < 0 && Zy.push(yb), !cb.mC && oy >= 0 && Zy.splice(oy, 1), Zy.sort(((yb, Wy) => bb[yb].order - bb[Wy].order));
        var By = cb.state;
        return this.WWy(yb).forEach((yb => {
          for (var bb in By) bb in yb || (yb[bb] = By[bb]);
          cb.cC && cb.cC(yb.UWy, yb)
        })), yb
      }, this.deleteComponent = function(Wy) {
        var Uy = hy[Wy];
        if (!Uy) throw new Error(`Unknown component: ${Wy}`);
        Uy.flush(), Uy.list.forEach((yb => {
          yb && Py(yb.UWy || yb[0].UWy, Wy)
        }));
        var cb = fy.indexOf(Wy),
          oy = Zy.indexOf(Wy);
        return cb > -1 && fy.splice(cb, 1), oy > -1 && Zy.splice(oy, 1), hy[Wy].dispose(), delete hy[Wy], delete bb[Wy], yb
      }, this.hWy = function(yb, Wy, Uy) {
        var fy, Zy = bb[Wy],
          cb = hy[Wy];
        if (!cb) throw new Error(`Unknown component: ${Wy}.`);
        if (cb.hash[yb] && !Zy.multi) throw new Error(`Entity ${yb} already has component: ${Wy}.`);
        if (Zy.stateConstructor) {
          if (!(fy = new Zy.stateConstructor).hasOwnProperty("UWy")) throw new Error(`Component ${Zy.name} stateConstructor type does not have property __id`);
          Object.assign(fy, Zy.state, Uy)
        } else fy = {
          UWy: yb,
          ...Zy.state,
          ...Uy
        };
        if (fy.UWy = yb, Zy.multi) {
          var Py = cb.hash[yb];
          Py || (Py = [], cb.add(yb, Py)), Py.push(fy)
        } else cb.add(yb, fy);
        return Zy.cC && Zy.cC(yb, fy), this
      }, this.Ccy = function(yb, bb) {
        var Wy = hy[bb];
        if (!Wy) throw new Error(`Unknown component: ${bb}.`);
        return !!Wy.hash[yb]
      }, this.fWy = function(bb, Wy) {
        if (!hy[Wy]) throw new Error(`Unknown component: ${Wy}.`);
        return Py(bb, Wy), yb
      }, this.getState = function(yb, bb) {
        var Wy = hy[bb];
        if (!Wy) throw new Error(`Unknown component: ${bb}.`);
        return Wy.hash[yb]
      }, this.WWy = function(yb) {
        var bb = hy[yb];
        if (!bb) throw new Error(`Unknown component: ${yb}.`);
        return Ky(), bb.list
      }, this.ZPy = function(yb) {
        if (!hy[yb]) throw new Error(`Unknown component: ${yb}.`);
        var bb = hy[yb].hash;
        return yb => bb[yb]
      }, this.ePy = function(yb) {
        if (!hy[yb]) throw new Error(`Unknown component: ${yb}.`);
        var bb = hy[yb].hash;
        return yb => !!bb[yb]
      }, this.Zb = function(Wy) {
        Ky();
        for (var Uy = 0; Uy < fy.length; Uy++) {
          var Zy = fy[Uy],
            cb = bb[Zy],
            Py = hy[Zy];
          cb.system(Wy, Py.list), Ky()
        }
        return yb
      }, this.render = function(Wy) {
        Ky();
        for (var Uy = 0; Uy < Zy.length; Uy++) {
          var fy = Zy[Uy],
            cb = bb[fy],
            Py = hy[fy];
          cb.mC(Wy, Py.list), Ky()
        }
        return yb
      }, this.removeMultiComponent = function(Wy, Uy, fy) {
        var Zy = bb[Uy],
          Py = hy[Uy];
        if (!Py) throw new Error(`Unknown component: ${Uy}.`);
        if (!Zy.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(yb, bb, Wy, Uy) {
          var hy = Wy.hash[yb];
          if (hy) {
            var fy = hy[Uy];
            fy && (hy[Uy] = null, bb.Yby && bb.Yby(yb, fy), cb.multiComps.push({
              entID: yb,
              data: Wy
            }), oy())
          }
        }(Wy, Zy, Py, fy), yb
      }
    };
    var Uy = Wy(36948)
  },
  36948: yb => {
    function bb(yb, bb) {
      var Wy = yb._map[bb];
      if (delete yb.hash[bb], delete yb._map[bb], Wy === yb.list.length - 1) yb.list.pop(), yb._idList.pop();
      else {
        var Uy = yb.list.pop();
        yb.list[Wy] = Uy;
        var hy = yb._idList.pop();
        yb._idList[Wy] = hy, yb._map[hy] = Wy
      }
    }
    yb.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(yb, bb) {
        if ("number" === typeof this._map[yb]) {
          var Wy = this._map[yb];
          this.hash[yb] = bb, this.list[Wy] = bb, this._idList[Wy] = yb
        } else this._map[yb] = this.list.length, this.hash[yb] = bb, this.list.push(bb), this._idList.push(yb)
      }
      remove(yb) {
        var bb = this._map[yb];
        this.hash[yb] = null, this.list[bb] = null, this._pendingRemovals.push(yb)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var yb = 0; yb < this._pendingRemovals.length; yb++) {
          var Wy = this._pendingRemovals[yb];
          null === this.hash[Wy] && bb(this, Wy)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  36367: yb => {
    yb.exports = function(yb) {
      for (var bb = new Array(yb), Wy = 0; Wy < yb; ++Wy) bb[Wy] = Wy;
      return bb
    }
  },
  36372: yb => {
    function bb(yb) {
      return !!yb.constructor && "function" === typeof yb.constructor.isBuffer && yb.constructor.isBuffer(yb)
    }
    yb.exports = function(yb) {
      return null != yb && (bb(yb) || function(yb) {
        return "function" === typeof yb.readFloatLE && "function" === typeof yb.slice && bb(yb.slice(0, 0))
      }(yb) || !!yb._isBuffer)
    }
  },
  36708: (yb, bb, Wy) => {
    yb = Wy.nmd(yb);
    var Uy = "__lodash_hash_undefined__",
      hy = 9007199254740991,
      fy = "[object Arguments]",
      Zy = "[object Boolean]",
      cb = "[object Date]",
      Py = "[object Function]",
      oy = "[object GeneratorFunction]",
      By = "[object Map]",
      Ky = "[object Number]",
      ey = "[object Object]",
      qb = "[object Promise]",
      sy = "[object RegExp]",
      Sy = "[object Set]",
      Ey = "[object String]",
      ly = "[object Symbol]",
      mb = "[object WeakMap]",
      Cy = "[object ArrayBuffer]",
      Ty = "[object DataView]",
      Vy = "[object Float32Array]",
      Jy = "[object Float64Array]",
      gb = "[object Int8Array]",
      Gy = "[object Int16Array]",
      Oy = "[object Int32Array]",
      Ry = "[object Uint8Array]",
      vb = "[object Uint8ClampedArray]",
      ib = "[object Uint16Array]",
      My = "[object Uint32Array]",
      Yy = /\w*$/,
      Xy = /^\[object .+?Constructor\]$/,
      ny = /^(?:0|[1-9]\d*)$/,
      uy = {};
    uy[fy] = uy["[object Array]"] = uy[Cy] = uy[Ty] = uy[Zy] = uy[cb] = uy[Vy] = uy[Jy] = uy[gb] = uy[Gy] = uy[Oy] = uy[By] = uy[Ky] = uy[ey] = uy[sy] = uy[Sy] = uy[Ey] = uy[ly] = uy[Ry] = uy[vb] = uy[ib] = uy[My] = !0, uy["[object Error]"] = uy[Py] = uy[mb] = !1;
    var rb = "object" == typeof Wy.g && Wy.g && Wy.g.Object === Object && Wy.g,
      Hy = "object" == typeof self && self && self.Object === Object && self,
      ab = rb || Hy || Function("return this")(),
      Fy = bb && !bb.nodeType && bb,
      py = Fy && yb && !yb.nodeType && yb,
      Ly = py && py.exports === Fy;

    function Qy(yb, bb) {
      return yb.set(bb[0], bb[1]), yb
    }

    function jb(yb, bb) {
      return yb.add(bb), yb
    }

    function Dy(yb, bb, Wy, Uy) {
      var hy = -1,
        fy = yb ? yb.length : 0;
      for (Uy && fy && (Wy = yb[++hy]); ++hy < fy;) Wy = bb(Wy, yb[hy], hy, yb);
      return Wy
    }

    function tb(yb) {
      var bb = !1;
      if (null != yb && "function" != typeof yb.toString) try {
        bb = !!(yb + "")
      } catch (Wy) {}
      return bb
    }

    function wy(yb) {
      var bb = -1,
        Wy = Array(yb.size);
      return yb.forEach((function(yb, Uy) {
        Wy[++bb] = [Uy, yb]
      })), Wy
    }

    function kb(yb, bb) {
      return function(Wy) {
        return yb(bb(Wy))
      }
    }

    function Ny(yb) {
      var bb = -1,
        Wy = Array(yb.size);
      return yb.forEach((function(yb) {
        Wy[++bb] = yb
      })), Wy
    }
    var zb = Array.prototype,
      Iy = Function.prototype,
      xb = Object.prototype,
      Ay = ab["__core-js_shared__"],
      dy = function() {
        var yb = /[^.]+$/.exec(Ay && Ay.keys && Ay.keys.IE_PROTO || "");
        return yb ? "Symbol(src)_1." + yb : ""
      }(),
      yW = Iy.toString,
      bW = xb.hasOwnProperty,
      Wb = xb.toString,
      Ub = RegExp("^" + yW.call(bW).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      hb = Ly ? ab.uU : void 0,
      fb = ab.Symbol,
      Zb = ab.Uint8Array,
      cW = kb(Object.getPrototypeOf, Object),
      Pb = Object.create,
      ob = xb.propertyIsEnumerable,
      Bb = zb.splice,
      Kb = Object.getOwnPropertySymbols,
      eb = hb ? hb.isBuffer : void 0,
      qW = kb(Object.keys, Object),
      sb = Lb(ab, "DataView"),
      Sb = Lb(ab, "Map"),
      Eb = Lb(ab, "Promise"),
      lb = Lb(ab, "Set"),
      mW = Lb(ab, "WeakMap"),
      Cb = Lb(Object, "create"),
      Tb = wb(sb),
      Vb = wb(Sb),
      Jb = wb(Eb),
      gW = wb(lb),
      Gb = wb(mW),
      Ob = fb ? fb.prototype : void 0,
      Rb = Ob ? Ob.valueOf : void 0;

    function vW(yb) {
      var bb = -1,
        Wy = yb ? yb.length : 0;
      for (this.clear(); ++bb < Wy;) {
        var Uy = yb[bb];
        this.set(Uy[0], Uy[1])
      }
    }

    function iW(yb) {
      var bb = -1,
        Wy = yb ? yb.length : 0;
      for (this.clear(); ++bb < Wy;) {
        var Uy = yb[bb];
        this.set(Uy[0], Uy[1])
      }
    }

    function Mb(yb) {
      var bb = -1,
        Wy = yb ? yb.length : 0;
      for (this.clear(); ++bb < Wy;) {
        var Uy = yb[bb];
        this.set(Uy[0], Uy[1])
      }
    }

    function Yb(yb) {
      this.__data__ = new iW(yb)
    }

    function Xb(yb, bb) {
      var Wy = Nb(yb) || function(yb) {
          return function(yb) {
            return function(yb) {
              return !!yb && "object" == typeof yb
            }(yb) && zW(yb)
          }(yb) && bW.call(yb, "callee") && (!ob.call(yb, "callee") || Wb.call(yb) == fy)
        }(yb) ? function(yb, bb) {
          for (var Wy = -1, Uy = Array(yb); ++Wy < yb;) Uy[Wy] = bb(Wy);
          return Uy
        }(yb.length, String) : [],
        Uy = Wy.length,
        hy = !!Uy;
      for (var Zy in yb) !bb && !bW.call(yb, Zy) || hy && ("length" == Zy || Db(Zy, Uy)) || Wy.push(Zy);
      return Wy
    }

    function nb(yb, bb, Wy) {
      var Uy = yb[bb];
      bW.call(yb, bb) && kW(Uy, Wy) && (void 0 !== Wy || bb in yb) || (yb[bb] = Wy)
    }

    function ub(yb, bb) {
      for (var Wy = yb.length; Wy--;)
        if (kW(yb[Wy][0], bb)) return Wy;
      return -1
    }

    function rW(yb, bb, Wy, Uy, hy, qb, mb) {
      var Xy;
      if (Uy && (Xy = qb ? Uy(yb, hy, qb, mb) : Uy(yb)), void 0 !== Xy) return Xy;
      if (!Ab(yb)) return yb;
      var ny = Nb(yb);
      if (ny) {
        if (Xy = function(yb) {
            var bb = yb.length,
              Wy = yb.constructor(bb);
            bb && "string" == typeof yb[0] && bW.call(yb, "index") && (Wy.index = yb.index, Wy.input = yb.input);
            return Wy
          }(yb), !bb) return function(yb, bb) {
          var Wy = -1,
            Uy = yb.length;
          bb || (bb = Array(Uy));
          for (; ++Wy < Uy;) bb[Wy] = yb[Wy];
          return bb
        }(yb, Xy)
      } else {
        var rb = jW(yb),
          Hy = rb == Py || rb == oy;
        if (Ib(yb)) return function(yb, bb) {
          if (bb) return yb.slice();
          var Wy = new yb.constructor(yb.length);
          return yb.copy(Wy), Wy
        }(yb, bb);
        if (rb == ey || rb == fy || Hy && !qb) {
          if (tb(yb)) return qb ? yb : {};
          if (Xy = function(yb) {
              return "function" != typeof yb.constructor || tW(yb) ? {} : (bb = cW(yb), Ab(bb) ? Pb(bb) : {});
              var bb
            }(Hy ? {} : yb), !bb) return function(yb, bb) {
            return Fb(yb, Qb(yb), bb)
          }(yb, function(yb, bb) {
            return yb && Fb(bb, db(bb), yb)
          }(Xy, yb))
        } else {
          if (!uy[rb]) return qb ? yb : {};
          Xy = function(yb, bb, Wy, Uy) {
            var hy = yb.constructor;
            switch (bb) {
              case Cy:
                return aW(yb);
              case Zy:
              case cb:
                return new hy(+yb);
              case Ty:
                return function(yb, bb) {
                  var Wy = bb ? aW(yb.buffer) : yb.buffer;
                  return new yb.constructor(Wy, yb.byteOffset, yb.byteLength)
                }(yb, Uy);
              case Vy:
              case Jy:
              case gb:
              case Gy:
              case Oy:
              case Ry:
              case vb:
              case ib:
              case My:
                return function(yb, bb) {
                  var Wy = bb ? aW(yb.buffer) : yb.buffer;
                  return new yb.constructor(Wy, yb.byteOffset, yb.length)
                }(yb, Uy);
              case By:
                return function(yb, bb, Wy) {
                  var Uy = bb ? Wy(wy(yb), !0) : wy(yb);
                  return Dy(Uy, Qy, new yb.constructor)
                }(yb, Uy, Wy);
              case Ky:
              case Ey:
                return new hy(yb);
              case sy:
                return function(yb) {
                  var bb = new yb.constructor(yb.source, Yy.exec(yb));
                  return bb.lastIndex = yb.lastIndex, bb
                }(yb);
              case Sy:
                return function(yb, bb, Wy) {
                  var Uy = bb ? Wy(Ny(yb), !0) : Ny(yb);
                  return Dy(Uy, jb, new yb.constructor)
                }(yb, Uy, Wy);
              case ly:
                return fy = yb, Rb ? Object(Rb.call(fy)) : {}
            }
            var fy
          }(yb, rb, rW, bb)
        }
      }
      mb || (mb = new Yb);
      var ab = mb.get(yb);
      if (ab) return ab;
      if (mb.set(yb, Xy), !ny) var Fy = Wy ? function(yb) {
        return function(yb, bb, Wy) {
          var Uy = bb(yb);
          return Nb(yb) ? Uy : function(yb, bb) {
            for (var Wy = -1, Uy = bb.length, hy = yb.length; ++Wy < Uy;) yb[hy + Wy] = bb[Wy];
            return yb
          }(Uy, Wy(yb))
        }(yb, db, Qb)
      }(yb) : db(yb);
      return function(yb, bb) {
        for (var Wy = -1, Uy = yb ? yb.length : 0; ++Wy < Uy && !1 !== bb(yb[Wy], Wy, yb););
      }(Fy || yb, (function(hy, fy) {
        Fy && (hy = yb[fy = hy]), nb(Xy, fy, rW(hy, bb, Wy, Uy, fy, yb, mb))
      })), Xy
    }

    function Hb(yb) {
      return !(!Ab(yb) || (bb = yb, dy && dy in bb)) && (xW(yb) || tb(yb) ? Ub : Xy).test(wb(yb));
      var bb
    }

    function aW(yb) {
      var bb = new yb.constructor(yb.byteLength);
      return new Zb(bb).set(new Zb(yb)), bb
    }

    function Fb(yb, bb, Wy, Uy) {
      Wy || (Wy = {});
      for (var hy = -1, fy = bb.length; ++hy < fy;) {
        var Zy = bb[hy],
          cb = Uy ? Uy(Wy[Zy], yb[Zy], Zy, Wy, yb) : void 0;
        nb(Wy, Zy, void 0 === cb ? yb[Zy] : cb)
      }
      return Wy
    }

    function pb(yb, bb) {
      var Wy = yb.__data__;
      return function(yb) {
        var bb = typeof yb;
        return "string" == bb || "number" == bb || "symbol" == bb || "boolean" == bb ? "__proto__" !== yb : null === yb
      }(bb) ? Wy["string" == typeof bb ? "string" : "hash"] : Wy.map
    }

    function Lb(yb, bb) {
      var Wy = function(yb, bb) {
        return null == yb ? void 0 : yb[bb]
      }(yb, bb);
      return Hb(Wy) ? Wy : void 0
    }
    vW.prototype.clear = function() {
      this.__data__ = Cb ? Cb(null) : {}
    }, vW.prototype.delete = function(yb) {
      return this.has(yb) && delete this.__data__[yb]
    }, vW.prototype.get = function(yb) {
      var bb = this.__data__;
      if (Cb) {
        var Wy = bb[yb];
        return Wy === Uy ? void 0 : Wy
      }
      return bW.call(bb, yb) ? bb[yb] : void 0
    }, vW.prototype.has = function(yb) {
      var bb = this.__data__;
      return Cb ? void 0 !== bb[yb] : bW.call(bb, yb)
    }, vW.prototype.set = function(yb, bb) {
      return this.__data__[yb] = Cb && void 0 === bb ? Uy : bb, this
    }, iW.prototype.clear = function() {
      this.__data__ = []
    }, iW.prototype.delete = function(yb) {
      var bb = this.__data__,
        Wy = ub(bb, yb);
      return !(Wy < 0) && (Wy == bb.length - 1 ? bb.pop() : Bb.call(bb, Wy, 1), !0)
    }, iW.prototype.get = function(yb) {
      var bb = this.__data__,
        Wy = ub(bb, yb);
      return Wy < 0 ? void 0 : bb[Wy][1]
    }, iW.prototype.has = function(yb) {
      return ub(this.__data__, yb) > -1
    }, iW.prototype.set = function(yb, bb) {
      var Wy = this.__data__,
        Uy = ub(Wy, yb);
      return Uy < 0 ? Wy.push([yb, bb]) : Wy[Uy][1] = bb, this
    }, Mb.prototype.clear = function() {
      this.__data__ = {
        hash: new vW,
        map: new(Sb || iW),
        string: new vW
      }
    }, Mb.prototype.delete = function(yb) {
      return pb(this, yb).delete(yb)
    }, Mb.prototype.get = function(yb) {
      return pb(this, yb).get(yb)
    }, Mb.prototype.has = function(yb) {
      return pb(this, yb).has(yb)
    }, Mb.prototype.set = function(yb, bb) {
      return pb(this, yb).set(yb, bb), this
    }, Yb.prototype.clear = function() {
      this.__data__ = new iW
    }, Yb.prototype.delete = function(yb) {
      return this.__data__.delete(yb)
    }, Yb.prototype.get = function(yb) {
      return this.__data__.get(yb)
    }, Yb.prototype.has = function(yb) {
      return this.__data__.has(yb)
    }, Yb.prototype.set = function(yb, bb) {
      var Wy = this.__data__;
      if (Wy instanceof iW) {
        var Uy = Wy.__data__;
        if (!Sb || Uy.length < 199) return Uy.push([yb, bb]), this;
        Wy = this.__data__ = new Mb(Uy)
      }
      return Wy.set(yb, bb), this
    };
    var Qb = Kb ? kb(Kb, Object) : function() {
        return []
      },
      jW = function(yb) {
        return Wb.call(yb)
      };

    function Db(yb, bb) {
      return !!(bb = null == bb ? hy : bb) && ("number" == typeof yb || ny.test(yb)) && yb > -1 && yb % 1 == 0 && yb < bb
    }

    function tW(yb) {
      var bb = yb && yb.constructor;
      return yb === ("function" == typeof bb && bb.prototype || xb)
    }

    function wb(yb) {
      if (null != yb) {
        try {
          return yW.call(yb)
        } catch (bb) {}
        try {
          return yb + ""
        } catch (bb) {}
      }
      return ""
    }

    function kW(yb, bb) {
      return yb === bb || yb !== yb && bb !== bb
    }(sb && jW(new sb(new ArrayBuffer(1))) != Ty || Sb && jW(new Sb) != By || Eb && jW(Eb.resolve()) != qb || lb && jW(new lb) != Sy || mW && jW(new mW) != mb) && (jW = function(yb) {
      var bb = Wb.call(yb),
        Wy = bb == ey ? yb.constructor : void 0,
        Uy = Wy ? wb(Wy) : void 0;
      if (Uy) switch (Uy) {
        case Tb:
          return Ty;
        case Vb:
          return By;
        case Jb:
          return qb;
        case gW:
          return Sy;
        case Gb:
          return mb
      }
      return bb
    });
    var Nb = Array.isArray;

    function zW(yb) {
      return null != yb && function(yb) {
        return "number" == typeof yb && yb > -1 && yb % 1 == 0 && yb <= hy
      }(yb.length) && !xW(yb)
    }
    var Ib = eb || function() {
      return !1
    };

    function xW(yb) {
      var bb = Ab(yb) ? Wb.call(yb) : "";
      return bb == Py || bb == oy
    }

    function Ab(yb) {
      var bb = typeof yb;
      return !!yb && ("object" == bb || "function" == bb)
    }

    function db(yb) {
      return zW(yb) ? Xb(yb) : function(yb) {
        if (!tW(yb)) return qW(yb);
        var bb = [];
        for (var Wy in Object(yb)) bW.call(yb, Wy) && "constructor" != Wy && bb.push(Wy);
        return bb
      }(yb)
    }
    yb.exports = function(yb) {
      return rW(yb, !0, !0)
    }
  },
  36360: (yb, bb, Wy) => {
    var Uy = Wy(36367),
      hy = Wy(36372),
      fy = "undefined" !== typeof Float64Array;

    function Zy(yb, bb) {
      return yb[0] - bb[0]
    }

    function cb() {
      var yb, bb = this.stride,
        Wy = new Array(bb.length);
      for (yb = 0; yb < Wy.length; ++yb) Wy[yb] = [Math.abs(bb[yb]), yb];
      Wy.sort(Zy);
      var Uy = new Array(Wy.length);
      for (yb = 0; yb < Uy.length; ++yb) Uy[yb] = Wy[yb][1];
      return Uy
    }

    function Py(yb, bb) {
      var Wy = ["View", bb, "d", yb].join("");
      bb < 0 && (Wy = "View_Nil" + yb);
      var hy = "generic" === yb;
      if (-1 === bb) {
        var fy = "function " + Wy + "(a){this.data=a;};var proto=" + Wy + ".prototype;proto.dtype='" + yb + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + Wy + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + Wy + "(a){return new " + Wy + "(a);}";
        return new Function(fy)()
      }
      if (0 === bb) {
        fy = "function " + Wy + "(a,d) {this.data = a;this.offset = d};var proto=" + Wy + ".prototype;proto.dtype='" + yb + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + Wy + "_copy() {return new " + Wy + "(this.data,this.offset)};proto.pick=function " + Wy + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + Wy + "_get(){return " + (hy ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + Wy + "_set(v){return " + (hy ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + Wy + "(a,b,c,d){return new " + Wy + "(a,d)}";
        return new Function("TrivialArray", fy)(oy[yb][0])
      }
      fy = ["'use strict'"];
      var Zy = Uy(bb),
        Py = Zy.map((function(yb) {
          return "i" + yb
        })),
        By = "this.offset+" + Zy.map((function(yb) {
          return "this.stride[" + yb + "]*i" + yb
        })).join("+"),
        Ky = Zy.map((function(yb) {
          return "b" + yb
        })).join(","),
        ey = Zy.map((function(yb) {
          return "c" + yb
        })).join(",");
      fy.push("function " + Wy + "(a," + Ky + "," + ey + ",d){this.data=a", "this.shape=[" + Ky + "]", "this.stride=[" + ey + "]", "this.offset=d|0}", "var proto=" + Wy + ".prototype", "proto.dtype='" + yb + "'", "proto.dimension=" + bb), fy.push("Object.defineProperty(proto,'size',{get:function " + Wy + "_size(){return " + Zy.map((function(yb) {
        return "this.shape[" + yb + "]"
      })).join("*"), "}})"), 1 === bb ? fy.push("proto.order=[0]") : (fy.push("Object.defineProperty(proto,'order',{get:"), bb < 4 ? (fy.push("function " + Wy + "_order(){"), 2 === bb ? fy.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === bb && fy.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : fy.push("ORDER})")), fy.push("proto.set=function " + Wy + "_set(" + Py.join(",") + ",v){"), hy ? fy.push("return this.data.set(" + By + ",v)}") : fy.push("return this.data[" + By + "]=v}"), fy.push("proto.get=function " + Wy + "_get(" + Py.join(",") + "){"), hy ? fy.push("return this.data.get(" + By + ")}") : fy.push("return this.data[" + By + "]}"), fy.push("proto.index=function " + Wy + "_index(", Py.join(), "){return " + By + "}"), fy.push("proto.hi=function " + Wy + "_hi(" + Py.join(",") + "){return new " + Wy + "(this.data," + Zy.map((function(yb) {
        return ["(typeof i", yb, "!=='number'||i", yb, "<0)?this.shape[", yb, "]:i", yb, "|0"].join("")
      })).join(",") + "," + Zy.map((function(yb) {
        return "this.stride[" + yb + "]"
      })).join(",") + ",this.offset)}");
      var qb = Zy.map((function(yb) {
          return "a" + yb + "=this.shape[" + yb + "]"
        })),
        sy = Zy.map((function(yb) {
          return "c" + yb + "=this.stride[" + yb + "]"
        }));
      fy.push("proto.lo=function " + Wy + "_lo(" + Py.join(",") + "){var b=this.offset,d=0," + qb.join(",") + "," + sy.join(","));
      for (var Sy = 0; Sy < bb; ++Sy) fy.push("if(typeof i" + Sy + "==='number'&&i" + Sy + ">=0){d=i" + Sy + "|0;b+=c" + Sy + "*d;a" + Sy + "-=d}");
      fy.push("return new " + Wy + "(this.data," + Zy.map((function(yb) {
        return "a" + yb
      })).join(",") + "," + Zy.map((function(yb) {
        return "c" + yb
      })).join(",") + ",b)}"), fy.push("proto.step=function " + Wy + "_step(" + Py.join(",") + "){var " + Zy.map((function(yb) {
        return "a" + yb + "=this.shape[" + yb + "]"
      })).join(",") + "," + Zy.map((function(yb) {
        return "b" + yb + "=this.stride[" + yb + "]"
      })).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
      for (Sy = 0; Sy < bb; ++Sy) fy.push("if(typeof i" + Sy + "==='number'){d=i" + Sy + "|0;if(d<0){c+=b" + Sy + "*(a" + Sy + "-1);a" + Sy + "=ceil(-a" + Sy + "/d)}else{a" + Sy + "=ceil(a" + Sy + "/d)}b" + Sy + "*=d}");
      fy.push("return new " + Wy + "(this.data," + Zy.map((function(yb) {
        return "a" + yb
      })).join(",") + "," + Zy.map((function(yb) {
        return "b" + yb
      })).join(",") + ",c)}");
      var Ey = new Array(bb),
        ly = new Array(bb);
      for (Sy = 0; Sy < bb; ++Sy) Ey[Sy] = "a[i" + Sy + "]", ly[Sy] = "b[i" + Sy + "]";
      fy.push("proto.transpose=function " + Wy + "_transpose(" + Py + "){" + Py.map((function(yb, bb) {
        return yb + "=(" + yb + "===undefined?" + bb + ":" + yb + "|0)"
      })).join(";"), "var a=this.shape,b=this.stride;return new " + Wy + "(this.data," + Ey.join(",") + "," + ly.join(",") + ",this.offset)}"), fy.push("proto.pick=function " + Wy + "_pick(" + Py + "){var a=[],b=[],c=this.offset");
      for (Sy = 0; Sy < bb; ++Sy) fy.push("if(typeof i" + Sy + "==='number'&&i" + Sy + ">=0){c=(c+this.stride[" + Sy + "]*i" + Sy + ")|0}else{a.push(this.shape[" + Sy + "]);b.push(this.stride[" + Sy + "])}");
      return fy.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), fy.push("return function construct_" + Wy + "(data,shape,stride,offset){return new " + Wy + "(data," + Zy.map((function(yb) {
        return "shape[" + yb + "]"
      })).join(",") + "," + Zy.map((function(yb) {
        return "stride[" + yb + "]"
      })).join(",") + ",offset)}"), new Function("CTOR_LIST", "ORDER", fy.join("\n"))(oy[yb], cb)
    }
    var oy = {
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
    yb.exports = function(yb, bb, Wy, Uy) {
      if (void 0 === yb) return (0, oy.array[0])([]);
      "number" === typeof yb && (yb = [yb]), void 0 === bb && (bb = [yb.length]);
      var Zy = bb.length;
      if (void 0 === Wy) {
        Wy = new Array(Zy);
        for (var cb = Zy - 1, By = 1; cb >= 0; --cb) Wy[cb] = By, By *= bb[cb]
      }
      if (void 0 === Uy) {
        Uy = 0;
        for (cb = 0; cb < Zy; ++cb) Wy[cb] < 0 && (Uy -= (bb[cb] - 1) * Wy[cb])
      }
      for (var Ky = function(yb) {
          if (hy(yb)) return "buffer";
          if (fy) switch (Object.prototype.toString.call(yb)) {
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
          return Array.isArray(yb) ? "array" : "generic"
        }(yb), ey = oy[Ky]; ey.length <= Zy + 1;) ey.push(Py(Ky, ey.length - 1));
      return (0, ey[Zy + 1])(yb, bb, Wy, Uy)
    }
  },
  37135: yb => {
    function bb(yb, bb, Wy) {
      for (var Uy = yb.length, hy = -1 / 0, fy = 1 / 0, Zy = 0; Zy < Uy; Zy++) {
        var cb = (Wy[0][Zy] - yb[Zy]) / bb[Zy],
          Py = (Wy[1][Zy] - yb[Zy]) / bb[Zy];
        if (cb > Py) {
          var oy = cb;
          cb = Py, Py = oy
        }
        if (Py < hy || cb > fy) return 1 / 0;
        cb > hy && (hy = cb), Py < fy && (fy = Py)
      }
      return hy > fy ? 1 / 0 : hy
    }
    yb.exports = function(yb, Wy, Uy, hy) {
      var fy = bb(Wy, Uy, hy);
      if (fy === 1 / 0) yb = null;
      else {
        yb = yb || [];
        for (var Zy = 0; Zy < Wy.length; Zy++) yb[Zy] = Wy[Zy] + Uy[Zy] * fy
      }
      return yb
    }, yb.exports.distance = bb
  },
  36386: (yb, bb, Wy) => {
    var Uy = Wy(36395);

    function hy(yb) {
      for (var bb, Wy, hy = 0, fy = yb.length, Zy = 0; Zy < yb.length;) {
        for (bb = yb[Zy], Wy = 0; Zy < fy && yb[Zy] === bb;) ++Zy, ++Wy;
        hy += Uy.log2(Wy) / 7 | 0, hy += Uy.log2(bb >>> 0) / 7 | 0, hy += 2
      }
      return hy
    }
    bb.size = hy, bb.encode = function(yb, bb) {
      bb || (bb = new Uint8Array(hy(yb)));
      for (var Wy, Uy, fy = 0, Zy = bb.length, cb = 0; cb < yb.length;) {
        for (Wy = yb[cb], Uy = 0; cb < yb.length && yb[cb] === Wy;) ++cb, ++Uy;
        for (; fy < Zy && Uy >= 128;) bb[fy++] = 128 + (127 & Uy), Uy >>>= 7;
        if (fy >= Zy) throw new Error("RLE buffer overflow");
        for (bb[fy++] = Uy, Wy >>>= 0; fy < Zy && Wy >= 128;) bb[fy++] = 128 + (127 & Wy), Wy >>>= 7;
        if (fy >= Zy) throw new Error("RLE buffer overflow");
        bb[fy++] = Wy
      }
      return bb
    }, bb.decode = function(yb, bb) {
      for (var Wy, Uy, hy, fy, Zy = bb.length, cb = yb.length, Py = 0, oy = 0; oy < cb;) {
        for (Wy = 0, Uy = 0; oy < cb && yb[oy] >= 128;) Wy += (127 & yb[oy++]) << Uy, Uy += 7;
        if (Wy += yb[oy++] << Uy, oy >= cb) throw new Error("RLE buffer underrun");
        if (Py + Wy > Zy) throw new Error("Chunk buffer overflow");
        for (hy = 0, Uy = 0; oy < cb && yb[oy] >= 128;) hy += (127 & yb[oy++]) << Uy, Uy += 7;
        if (oy >= cb) throw new Error("RLE buffer underrun");
        for (hy += yb[oy++] << Uy, fy = 0; fy < Wy; ++fy) bb[Py++] = hy
      }
      return bb
    }
  },
  36395: (yb, bb) => {
    function Wy(yb) {
      var bb = 32;
      return (yb &= -yb) && bb--, 65535 & yb && (bb -= 16), 16711935 & yb && (bb -= 8), 252645135 & yb && (bb -= 4), 858993459 & yb && (bb -= 2), 1431655765 & yb && (bb -= 1), bb
    }
    bb.INT_BITS = 32, bb.INT_MAX = 2147483647, bb.INT_MIN = -1 << 31, bb.sign = function(yb) {
      return (yb > 0) - (yb < 0)
    }, bb.abs = function(yb) {
      var bb = yb >> 31;
      return (yb ^ bb) - bb
    }, bb.min = function(yb, bb) {
      return bb ^ (yb ^ bb) & -(yb < bb)
    }, bb.max = function(yb, bb) {
      return yb ^ (yb ^ bb) & -(yb < bb)
    }, bb.isPow2 = function(yb) {
      return !(yb & yb - 1) && !!yb
    }, bb.log2 = function(yb) {
      var bb, Wy;
      return bb = (yb > 65535) << 4, bb |= Wy = ((yb >>>= bb) > 255) << 3, bb |= Wy = ((yb >>>= Wy) > 15) << 2, (bb |= Wy = ((yb >>>= Wy) > 3) << 1) | (yb >>>= Wy) >> 1
    }, bb.log10 = function(yb) {
      return yb >= 1e9 ? 9 : yb >= 1e8 ? 8 : yb >= 1e7 ? 7 : yb >= 1e6 ? 6 : yb >= 1e5 ? 5 : yb >= 1e4 ? 4 : yb >= 1e3 ? 3 : yb >= 100 ? 2 : yb >= 10 ? 1 : 0
    }, bb.popCount = function(yb) {
      return 16843009 * ((yb = (858993459 & (yb -= yb >>> 1 & 1431655765)) + (yb >>> 2 & 858993459)) + (yb >>> 4) & 252645135) >>> 24
    }, bb.countTrailingZeros = Wy, bb.nextPow2 = function(yb) {
      return yb += 0 === yb, --yb, yb |= yb >>> 1, yb |= yb >>> 2, yb |= yb >>> 4, yb |= yb >>> 8, (yb |= yb >>> 16) + 1
    }, bb.prevPow2 = function(yb) {
      return yb |= yb >>> 1, yb |= yb >>> 2, yb |= yb >>> 4, yb |= yb >>> 8, (yb |= yb >>> 16) - (yb >>> 1)
    }, bb.parity = function(yb) {
      return yb ^= yb >>> 16, yb ^= yb >>> 8, yb ^= yb >>> 4, 27030 >>> (yb &= 15) & 1
    };
    var Uy = new Array(256);
    ! function(yb) {
      for (var bb = 0; bb < 256; ++bb) {
        var Wy = bb,
          Uy = bb,
          hy = 7;
        for (Wy >>>= 1; Wy; Wy >>>= 1) Uy <<= 1, Uy |= 1 & Wy, --hy;
        yb[bb] = Uy << hy & 255
      }
    }(Uy), bb.reverse = function(yb) {
      return Uy[255 & yb] << 24 | Uy[yb >>> 8 & 255] << 16 | Uy[yb >>> 16 & 255] << 8 | Uy[yb >>> 24 & 255]
    }, bb.interleave2 = function(yb, bb) {
      return (yb = 1431655765 & ((yb = 858993459 & ((yb = 252645135 & ((yb = 16711935 & ((yb &= 65535) | yb << 8)) | yb << 4)) | yb << 2)) | yb << 1)) | (bb = 1431655765 & ((bb = 858993459 & ((bb = 252645135 & ((bb = 16711935 & ((bb &= 65535) | bb << 8)) | bb << 4)) | bb << 2)) | bb << 1)) << 1
    }, bb.deinterleave2 = function(yb, bb) {
      return (yb = 65535 & ((yb = 16711935 & ((yb = 252645135 & ((yb = 858993459 & ((yb = yb >>> bb & 1431655765) | yb >>> 1)) | yb >>> 2)) | yb >>> 4)) | yb >>> 16)) << 16 >> 16
    }, bb.interleave3 = function(yb, bb, Wy) {
      return yb = 1227133513 & ((yb = 3272356035 & ((yb = 251719695 & ((yb = 4278190335 & ((yb &= 1023) | yb << 16)) | yb << 8)) | yb << 4)) | yb << 2), (yb |= (bb = 1227133513 & ((bb = 3272356035 & ((bb = 251719695 & ((bb = 4278190335 & ((bb &= 1023) | bb << 16)) | bb << 8)) | bb << 4)) | bb << 2)) << 1) | (Wy = 1227133513 & ((Wy = 3272356035 & ((Wy = 251719695 & ((Wy = 4278190335 & ((Wy &= 1023) | Wy << 16)) | Wy << 8)) | Wy << 4)) | Wy << 2)) << 2
    }, bb.deinterleave3 = function(yb, bb) {
      return (yb = 1023 & ((yb = 4278190335 & ((yb = 251719695 & ((yb = 3272356035 & ((yb = yb >>> bb & 1227133513) | yb >>> 2)) | yb >>> 4)) | yb >>> 8)) | yb >>> 16)) << 22 >> 22
    }, bb.nextCombination = function(yb) {
      var bb = yb | yb - 1;
      return bb + 1 | (~bb & -~bb) - 1 >>> Wy(yb) + 1
    }
  },
  35917: (yb, bb, Wy) => {
    Wy.d(bb, {
      Color3: () => Uy.d,
      e: () => Uy.e
    });
    var Uy = Wy(35919);
    (0, Uy.i)()
  },
  36425: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy
    });
    var Uy = Wy(36434);
    class hy {
      static GetPlanes(yb) {
        const bb = [];
        for (let Wy = 0; Wy < 6; Wy++) bb.push(new Uy.c(0, 0, 0, 0));
        return hy.GetPlanesToRef(yb, bb), bb
      }
      static GetNearPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] + Wy[2], bb.normal.y = Wy[7] + Wy[6], bb.normal.z = Wy[11] + Wy[10], bb.d = Wy[15] + Wy[14], bb.normalize()
      }
      static GetFarPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] - Wy[2], bb.normal.y = Wy[7] - Wy[6], bb.normal.z = Wy[11] - Wy[10], bb.d = Wy[15] - Wy[14], bb.normalize()
      }
      static GetLeftPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] + Wy[0], bb.normal.y = Wy[7] + Wy[4], bb.normal.z = Wy[11] + Wy[8], bb.d = Wy[15] + Wy[12], bb.normalize()
      }
      static GetRightPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] - Wy[0], bb.normal.y = Wy[7] - Wy[4], bb.normal.z = Wy[11] - Wy[8], bb.d = Wy[15] - Wy[12], bb.normalize()
      }
      static GetTopPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] - Wy[1], bb.normal.y = Wy[7] - Wy[5], bb.normal.z = Wy[11] - Wy[9], bb.d = Wy[15] - Wy[13], bb.normalize()
      }
      static GetBottomPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] + Wy[1], bb.normal.y = Wy[7] + Wy[5], bb.normal.z = Wy[11] + Wy[9], bb.d = Wy[15] + Wy[13], bb.normalize()
      }
      static GetPlanesToRef(yb, bb) {
        hy.GetNearPlaneToRef(yb, bb[0]), hy.GetFarPlaneToRef(yb, bb[1]), hy.GetLeftPlaneToRef(yb, bb[2]), hy.GetRightPlaneToRef(yb, bb[3]), hy.GetTopPlaneToRef(yb, bb[4]), hy.GetBottomPlaneToRef(yb, bb[5])
      }
      static IsPointInFrustum(yb, bb) {
        for (let Wy = 0; Wy < 6; Wy++)
          if (bb[Wy].dotCoordinate(yb) < 0) return !1;
        return !0
      }
    }
  },
  36434: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy
    });
    var Uy = Wy(35861);
    class hy {
      constructor(yb, bb, Wy, hy) {
        this.normal = new Uy.n(yb, bb, Wy), this.d = hy
      }
      hBy() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new hy(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let yb = this.normal.getHashCode();
        return yb = 397 * yb ^ this.d, yb
      }
      normalize() {
        const yb = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let bb = 0;
        return 0 !== yb && (bb = 1 / yb), this.normal.x *= bb, this.normal.y *= bb, this.normal.z *= bb, this.d *= bb, this
      }
      transform(yb) {
        const bb = hy._TmpMatrix;
        yb.invertToRef(bb);
        const Wy = bb.m,
          Uy = this.normal.x,
          fy = this.normal.y,
          Zy = this.normal.z,
          cb = this.d,
          Py = Uy * Wy[0] + fy * Wy[1] + Zy * Wy[2] + cb * Wy[3],
          oy = Uy * Wy[4] + fy * Wy[5] + Zy * Wy[6] + cb * Wy[7],
          By = Uy * Wy[8] + fy * Wy[9] + Zy * Wy[10] + cb * Wy[11],
          Ky = Uy * Wy[12] + fy * Wy[13] + Zy * Wy[14] + cb * Wy[15];
        return new hy(Py, oy, By, Ky)
      }
      dotCoordinate(yb) {
        return this.normal.x * yb.x + this.normal.y * yb.y + this.normal.z * yb.z + this.d
      }
      copyFromPoints(yb, bb, Wy) {
        const Uy = bb.x - yb.x,
          hy = bb.y - yb.y,
          fy = bb.z - yb.z,
          Zy = Wy.x - yb.x,
          cb = Wy.y - yb.y,
          Py = Wy.z - yb.z,
          oy = hy * Py - fy * cb,
          By = fy * Zy - Uy * Py,
          Ky = Uy * cb - hy * Zy,
          ey = Math.sqrt(oy * oy + By * By + Ky * Ky);
        let qb;
        return qb = 0 !== ey ? 1 / ey : 0, this.normal.x = oy * qb, this.normal.y = By * qb, this.normal.z = Ky * qb, this.d = -(this.normal.x * yb.x + this.normal.y * yb.y + this.normal.z * yb.z), this
      }
      isFrontFacingTo(yb, bb) {
        return Uy.n.Dot(this.normal, yb) <= bb
      }
      signedDistanceTo(yb) {
        return Uy.n.Dot(yb, this.normal) + this.d
      }
      static FromArray(yb) {
        return new hy(yb[0], yb[1], yb[2], yb[3])
      }
      static FromPoints(yb, bb, Wy) {
        const Uy = new hy(0, 0, 0, 0);
        return Uy.copyFromPoints(yb, bb, Wy), Uy
      }
      static FromPositionAndNormal(yb, bb) {
        const Wy = new hy(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(yb, bb, Wy)
      }
      static FromPositionAndNormalToRef(yb, bb, Wy) {
        return Wy.normal.Coy(bb), Wy.normal.normalize(), Wy.d = -yb.dot(Wy.normal), Wy
      }
      static SignedDistanceToPlaneFromPositionAndNormal(yb, bb, Wy) {
        const hy = -(bb.x * yb.x + bb.y * yb.y + bb.z * yb.z);
        return Uy.n.Dot(Wy, bb) + hy
      }
    }
    hy._TmpMatrix = Uy.c.Identity()
  },
  35856: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      Matrix: () => Uy.c,
      Quaternion: () => Uy.e,
      RegisterMathVector: () => Uy.i,
      TmpVectors: () => Uy.j,
      Vector2: () => Uy.m,
      dU: () => Uy.n,
      Vector4: () => Uy.p
    });
    var Uy = Wy(35861);
    (0, Uy.i)()
  },
  36794: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Uy
    });
    class Uy {
      constructor(yb, bb, Wy, Uy) {
        this.x = yb, this.y = bb, this.width = Wy, this.height = Uy
      }
      toGlobal(yb, bb) {
        return new Uy(this.x * yb, this.y * bb, this.width * yb, this.height * bb)
      }
      toGlobalToRef(yb, bb, Wy) {
        return Wy.x = this.x * yb, Wy.y = this.y * bb, Wy.width = this.width * yb, Wy.height = this.height * bb, this
      }
      clone() {
        return new Uy(this.x, this.y, this.width, this.height)
      }
    }
  },
  36559: (yb, bb, Wy) => {
    function Uy() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (yb => {
        const bb = 16 * Math.random() | 0;
        return ("x" === yb ? bb : 3 & bb | 8).toString(16)
      }))
    }
    Wy.d(bb, {
      e: () => Uy
    })
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);