/*! For license information please see 7rj44.222.7e16e428.chunk.js.LICENSE.txt */
export const id = 222;
export const ids = [222, 229];
export const modules = {
  37745: zz => {
    zz.exports = function(zz) {
      return null != zz && null != zz.constructor && "function" === typeof zz.constructor.isBuffer && zz.constructor.isBuffer(zz)
    }
  },
  37728: (zz, tz, sz) => {
    var Fz = sz(37737),
      Wz = sz(37742),
      Xz = sz(37745);
    sz.g.__TYPEDARRAY_POOL || (sz.g.__TYPEDARRAY_POOL = {
      UINT8: Wz([32, 0]),
      UINT16: Wz([32, 0]),
      UINT32: Wz([32, 0]),
      INT8: Wz([32, 0]),
      INT16: Wz([32, 0]),
      INT32: Wz([32, 0]),
      FLOAT: Wz([32, 0]),
      DOUBLE: Wz([32, 0]),
      DATA: Wz([32, 0]),
      UINT8C: Wz([32, 0]),
      BUFFER: Wz([32, 0])
    });
    var Oz = "undefined" !== typeof Uint8ClampedArray,
      oz = sz.g.__TYPEDARRAY_POOL;
    oz.UINT8C || (oz.UINT8C = Wz([32, 0])), oz.BUFFER || (oz.BUFFER = Wz([32, 0]));
    var vz = oz.DATA,
      Uz = oz.BUFFER;

    function Kz(zz) {
      if (zz) {
        var tz = zz.length || zz.byteLength,
          sz = Fz.log2(tz);
        vz[sz].push(zz)
      }
    }

    function uz(zz) {
      zz = Fz.nextPow2(zz);
      var tz = Fz.log2(zz),
        sz = vz[tz];
      return sz.length > 0 ? sz.pop() : new ArrayBuffer(zz)
    }

    function Nz(zz) {
      return new Uint8Array(uz(zz), 0, zz)
    }

    function bz(zz) {
      return new Uint16Array(uz(2 * zz), 0, zz)
    }

    function wz(zz) {
      return new Uint32Array(uz(4 * zz), 0, zz)
    }

    function Dz(zz) {
      return new Int8Array(uz(zz), 0, zz)
    }

    function gz(zz) {
      return new Int16Array(uz(2 * zz), 0, zz)
    }

    function Hz(zz) {
      return new Int32Array(uz(4 * zz), 0, zz)
    }

    function Bz(zz) {
      return new Float32Array(uz(4 * zz), 0, zz)
    }

    function Pz(zz) {
      return new Float64Array(uz(8 * zz), 0, zz)
    }

    function rz(zz) {
      return Oz ? new Uint8ClampedArray(uz(zz), 0, zz) : Nz(zz)
    }

    function Yz(zz) {
      return new DataView(uz(zz), 0, zz)
    }
    tz.free = function(zz) {
      if (Xz(zz)) Uz[Fz.log2(zz.length)].push(zz);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(zz) && (zz = zz.buffer), !zz) return;
        var tz = zz.length || zz.byteLength,
          sz = 0 | Fz.log2(tz);
        vz[sz].push(zz)
      }
    }, tz.freeUint8 = tz.freeUint16 = tz.freeUint32 = tz.freeInt8 = tz.freeInt16 = tz.freeInt32 = tz.freeFloat32 = tz.freeFloat = tz.freeFloat64 = tz.freeDouble = tz.freeUint8Clamped = tz.freeDataView = function(zz) {
      Kz(zz.buffer)
    }, tz.freeArrayBuffer = Kz, tz.freeBuffer = function(zz) {
      Uz[Fz.log2(zz.length)].push(zz)
    }, tz.malloc = function(zz, tz) {
      if (void 0 === tz || "arraybuffer" === tz) return uz(zz);
      switch (tz) {
        case "uint8":
          return Nz(zz);
        case "uint16":
          return bz(zz);
        case "uint32":
          return wz(zz);
        case "int8":
          return Dz(zz);
        case "int16":
          return gz(zz);
        case "int32":
          return Hz(zz);
        case "float":
        case "float32":
          return Bz(zz);
        case "double":
        case "float64":
          return Pz(zz);
        case "uint8_clamped":
          return rz(zz);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return Yz(zz);
        default:
          return null
      }
      return null
    }, tz.mallocArrayBuffer = uz, tz.mallocUint8 = Nz, tz.mallocUint16 = bz, tz.mallocUint32 = wz, tz.mallocInt8 = Dz, tz.mallocInt16 = gz, tz.mallocInt32 = Hz, tz.mallocFloat32 = tz.mallocFloat = Bz, tz.mallocFloat64 = tz.mallocDouble = Pz, tz.mallocUint8Clamped = rz, tz.mallocDataView = Yz, tz.clearCache = function() {
      for (var zz = 0; zz < 32; ++zz) oz.UINT8[zz].length = 0, oz.UINT16[zz].length = 0, oz.UINT32[zz].length = 0, oz.INT8[zz].length = 0, oz.INT16[zz].length = 0, oz.INT32[zz].length = 0, oz.FLOAT[zz].length = 0, oz.DOUBLE[zz].length = 0, oz.UINT8C[zz].length = 0, vz[zz].length = 0, Uz[zz].length = 0
    }
  },
  37737: (zz, tz) => {
    function sz(zz) {
      var tz = 32;
      return (zz &= -zz) && tz--, 65535 & zz && (tz -= 16), 16711935 & zz && (tz -= 8), 252645135 & zz && (tz -= 4), 858993459 & zz && (tz -= 2), 1431655765 & zz && (tz -= 1), tz
    }
    tz.INT_BITS = 32, tz.INT_MAX = 2147483647, tz.INT_MIN = -1 << 31, tz.sign = function(zz) {
      return (zz > 0) - (zz < 0)
    }, tz.abs = function(zz) {
      var tz = zz >> 31;
      return (zz ^ tz) - tz
    }, tz.min = function(zz, tz) {
      return tz ^ (zz ^ tz) & -(zz < tz)
    }, tz.max = function(zz, tz) {
      return zz ^ (zz ^ tz) & -(zz < tz)
    }, tz.isPow2 = function(zz) {
      return !(zz & zz - 1) && !!zz
    }, tz.log2 = function(zz) {
      var tz, sz;
      return tz = (zz > 65535) << 4, tz |= sz = ((zz >>>= tz) > 255) << 3, tz |= sz = ((zz >>>= sz) > 15) << 2, (tz |= sz = ((zz >>>= sz) > 3) << 1) | (zz >>>= sz) >> 1
    }, tz.log10 = function(zz) {
      return zz >= 1e9 ? 9 : zz >= 1e8 ? 8 : zz >= 1e7 ? 7 : zz >= 1e6 ? 6 : zz >= 1e5 ? 5 : zz >= 1e4 ? 4 : zz >= 1e3 ? 3 : zz >= 100 ? 2 : zz >= 10 ? 1 : 0
    }, tz.popCount = function(zz) {
      return 16843009 * ((zz = (858993459 & (zz -= zz >>> 1 & 1431655765)) + (zz >>> 2 & 858993459)) + (zz >>> 4) & 252645135) >>> 24
    }, tz.countTrailingZeros = sz, tz.nextPow2 = function(zz) {
      return zz += 0 === zz, --zz, zz |= zz >>> 1, zz |= zz >>> 2, zz |= zz >>> 4, zz |= zz >>> 8, (zz |= zz >>> 16) + 1
    }, tz.prevPow2 = function(zz) {
      return zz |= zz >>> 1, zz |= zz >>> 2, zz |= zz >>> 4, zz |= zz >>> 8, (zz |= zz >>> 16) - (zz >>> 1)
    }, tz.parity = function(zz) {
      return zz ^= zz >>> 16, zz ^= zz >>> 8, zz ^= zz >>> 4, 27030 >>> (zz &= 15) & 1
    };
    var Fz = new Array(256);
    ! function(zz) {
      for (var tz = 0; tz < 256; ++tz) {
        var sz = tz,
          Fz = tz,
          Wz = 7;
        for (sz >>>= 1; sz; sz >>>= 1) Fz <<= 1, Fz |= 1 & sz, --Wz;
        zz[tz] = Fz << Wz & 255
      }
    }(Fz), tz.reverse = function(zz) {
      return Fz[255 & zz] << 24 | Fz[zz >>> 8 & 255] << 16 | Fz[zz >>> 16 & 255] << 8 | Fz[zz >>> 24 & 255]
    }, tz.interleave2 = function(zz, tz) {
      return (zz = 1431655765 & ((zz = 858993459 & ((zz = 252645135 & ((zz = 16711935 & ((zz &= 65535) | zz << 8)) | zz << 4)) | zz << 2)) | zz << 1)) | (tz = 1431655765 & ((tz = 858993459 & ((tz = 252645135 & ((tz = 16711935 & ((tz &= 65535) | tz << 8)) | tz << 4)) | tz << 2)) | tz << 1)) << 1
    }, tz.deinterleave2 = function(zz, tz) {
      return (zz = 65535 & ((zz = 16711935 & ((zz = 252645135 & ((zz = 858993459 & ((zz = zz >>> tz & 1431655765) | zz >>> 1)) | zz >>> 2)) | zz >>> 4)) | zz >>> 16)) << 16 >> 16
    }, tz.interleave3 = function(zz, tz, sz) {
      return zz = 1227133513 & ((zz = 3272356035 & ((zz = 251719695 & ((zz = 4278190335 & ((zz &= 1023) | zz << 16)) | zz << 8)) | zz << 4)) | zz << 2), (zz |= (tz = 1227133513 & ((tz = 3272356035 & ((tz = 251719695 & ((tz = 4278190335 & ((tz &= 1023) | tz << 16)) | tz << 8)) | tz << 4)) | tz << 2)) << 1) | (sz = 1227133513 & ((sz = 3272356035 & ((sz = 251719695 & ((sz = 4278190335 & ((sz &= 1023) | sz << 16)) | sz << 8)) | sz << 4)) | sz << 2)) << 2
    }, tz.deinterleave3 = function(zz, tz) {
      return (zz = 1023 & ((zz = 4278190335 & ((zz = 251719695 & ((zz = 3272356035 & ((zz = zz >>> tz & 1227133513) | zz >>> 2)) | zz >>> 4)) | zz >>> 8)) | zz >>> 16)) << 22 >> 22
    }, tz.nextCombination = function(zz) {
      var tz = zz | zz - 1;
      return tz + 1 | (~tz & -~tz) - 1 >>> sz(zz) + 1
    }
  },
  37723: (zz, tz, sz) => {
    zz.exports = function(zz, tz, sz) {
      switch (arguments.length) {
        case 1:
          return Fz = [], Uz(Wz = zz, Wz, Kz, !0), Fz;
        case 2:
          return "function" === typeof tz ? Uz(zz, zz, tz, !0) : function(zz, tz) {
            return Fz = [], Uz(zz, tz, Kz, !1), Fz
          }(zz, tz);
        case 3:
          return Uz(zz, tz, sz, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var Wz
    };
    var Fz, Wz = sz(37728),
      Xz = sz(37748),
      Oz = sz(37756);

    function oz(zz, tz) {
      for (var sz = 0; sz < zz; ++sz)
        if (!(tz[sz] <= tz[sz + zz])) return !0;
      return !1
    }

    function vz(zz, tz, sz, Fz) {
      for (var Wz = 0, Xz = 0, Oz = 0, vz = zz.length; Oz < vz; ++Oz) {
        var Uz = zz[Oz];
        if (!oz(tz, Uz)) {
          for (var Kz = 0; Kz < 2 * tz; ++Kz) sz[Wz++] = Uz[Kz];
          Fz[Xz++] = Oz
        }
      }
      return Xz
    }

    function Uz(zz, tz, sz, Fz) {
      var oz = zz.length,
        Uz = tz.length;
      if (!(oz <= 0 || Uz <= 0)) {
        var Kz = zz[0].length >>> 1;
        if (!(Kz <= 0)) {
          var uz, Nz = Wz.mallocDouble(2 * Kz * oz),
            bz = Wz.mallocInt32(oz);
          if ((oz = vz(zz, Kz, Nz, bz)) > 0) {
            if (1 === Kz && Fz) Xz.init(oz), uz = Xz.sweepComplete(Kz, sz, 0, oz, Nz, bz, 0, oz, Nz, bz);
            else {
              var wz = Wz.mallocDouble(2 * Kz * Uz),
                Dz = Wz.mallocInt32(Uz);
              (Uz = vz(tz, Kz, wz, Dz)) > 0 && (Xz.init(oz + Uz), uz = 1 === Kz ? Xz.sweepBipartite(Kz, sz, 0, oz, Nz, bz, 0, Uz, wz, Dz) : Oz(Kz, sz, Fz, oz, Nz, bz, Uz, wz, Dz), Wz.free(wz), Wz.free(Dz))
            }
            Wz.free(Nz), Wz.free(bz)
          }
          return uz
        }
      }
    }

    function Kz(zz, tz) {
      Fz.push([zz, tz])
    }
  },
  37758: (zz, tz) => {
    var sz = "d",
      Fz = "ax",
      Wz = "fp",
      Xz = "es",
      Oz = "rs",
      oz = "re",
      vz = "rb",
      Uz = "bs",
      Kz = "be",
      uz = "bb",
      Nz = [sz, Fz, "vv", Oz, oz, vz, "ri", Uz, Kz, uz, "bi"];

    function bz(zz) {
      var tz = "bruteForce" + (zz ? "Full" : "Partial"),
        Fz = [],
        Oz = Nz.slice();
      zz || Oz.splice(3, 0, Wz);
      var oz = ["function " + tz + "(" + Oz.join() + "){"];

      function vz(tz, Wz) {
        var Oz = function(zz, tz, Fz) {
          var Wz = "bruteForce" + (zz ? "Red" : "Blue") + (tz ? "Flip" : "") + (Fz ? "Full" : ""),
            Oz = ["function ", Wz, "(", Nz.join(), "){", "var ", Xz, "=2*", sz, ";"],
            oz = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            vz = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (Fz ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return zz ? Oz.push(oz, "Q", ":", vz) : Oz.push(vz, "Q", ":", oz), Fz ? Oz.push("if(y1<x0||x1<y0)continue;") : tz ? Oz.push("if(y0<=x0||x1<y0)continue;") : Oz.push("if(y0<x0||x1<y0)continue;"), Oz.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), tz ? Oz.push("yi,xi") : Oz.push("xi,yi"), Oz.push(");if(rv!==void 0)return rv;}}}"), {
            name: Wz,
            code: Oz.join("")
          }
        }(tz, Wz, zz);
        Fz.push(Oz.code), oz.push("return " + Oz.name + "(" + Nz.join() + ");")
      }
      oz.push("if(re-rs>be-bs){"), zz ? (vz(!0, !1), oz.push("}else{"), vz(!1, !1)) : (oz.push("if(fp){"), vz(!0, !0), oz.push("}else{"), vz(!0, !1), oz.push("}}else{if(fp){"), vz(!1, !0), oz.push("}else{"), vz(!1, !1), oz.push("}")), oz.push("}}return " + tz);
      var Uz = Fz.join("") + oz.join("");
      return new Function(Uz)()
    }
    tz.partial = bz(!1), tz.full = bz(!0)
  },
  37756: (zz, tz, sz) => {
    zz.exports = function(zz, tz, sz, Xz, Kz, ez, Zz, Gz, Tz) {
      ! function(zz, tz) {
        var sz = 8 * Wz.log2(tz + 1) * (zz + 1) | 0,
          Xz = Wz.nextPow2(rz * sz);
        xz.length < Xz && (Fz.free(xz), xz = Fz.mallocInt32(Xz));
        var Oz = Wz.nextPow2(Yz * sz);
        mz.length < Oz && (Fz.free(mz), mz = Fz.mallocDouble(Oz))
      }(zz, Xz + Zz);
      var cz, jz = 0,
        Az = 2 * zz;
      Jz(jz++, 0, 0, Xz, 0, Zz, sz ? 16 : 0, -1 / 0, 1 / 0), sz || Jz(jz++, 0, 0, Zz, 0, Xz, 1, -1 / 0, 1 / 0);
      for (; jz > 0;) {
        var yz = (jz -= 1) * rz,
          Mz = xz[yz],
          dz = xz[yz + 1],
          hz = xz[yz + 2],
          Qz = xz[yz + 3],
          kz = xz[yz + 4],
          iz = xz[yz + 5],
          Lz = jz * Yz,
          lz = mz[Lz],
          nz = mz[Lz + 1],
          az = 1 & iz,
          qz = !!(16 & iz),
          Sz = Kz,
          Vz = ez,
          Rz = Gz,
          pz = Tz;
        if (az && (Sz = Gz, Vz = Tz, Rz = Kz, pz = ez), !(2 & iz && dz >= (hz = gz(zz, Mz, dz, hz, Sz, Vz, nz))) && !(4 & iz && (dz = Hz(zz, Mz, dz, hz, Sz, Vz, lz)) >= hz)) {
          var fz = hz - dz,
            Ez = kz - Qz;
          if (qz) {
            if (zz * fz * (fz + Ez) < bz) {
              if (void 0 !== (cz = vz.scanComplete(zz, Mz, tz, dz, hz, Sz, Vz, Qz, kz, Rz, pz))) return cz;
              continue
            }
          } else {
            if (zz * Math.min(fz, Ez) < uz) {
              if (void 0 !== (cz = Oz(zz, Mz, tz, az, dz, hz, Sz, Vz, Qz, kz, Rz, pz))) return cz;
              continue
            }
            if (zz * fz * Ez < Nz) {
              if (void 0 !== (cz = vz.scanBipartite(zz, Mz, tz, az, dz, hz, Sz, Vz, Qz, kz, Rz, pz))) return cz;
              continue
            }
          }
          var zt = wz(zz, Mz, dz, hz, Sz, Vz, lz, nz);
          if (dz < zt)
            if (zz * (zt - dz) < uz) {
              if (void 0 !== (cz = oz(zz, Mz + 1, tz, dz, zt, Sz, Vz, Qz, kz, Rz, pz))) return cz
            } else if (Mz === zz - 2) {
            if (void 0 !== (cz = az ? vz.sweepBipartite(zz, tz, Qz, kz, Rz, pz, dz, zt, Sz, Vz) : vz.sweepBipartite(zz, tz, dz, zt, Sz, Vz, Qz, kz, Rz, pz))) return cz
          } else Jz(jz++, Mz + 1, dz, zt, Qz, kz, az, -1 / 0, 1 / 0), Jz(jz++, Mz + 1, Qz, kz, dz, zt, 1 ^ az, -1 / 0, 1 / 0);
          if (zt < hz) {
            var tt = Uz(zz, Mz, Qz, kz, Rz, pz),
              st = Rz[Az * tt + Mz],
              Ft = Dz(zz, Mz, tt, kz, Rz, pz, st);
            if (Ft < kz && Jz(jz++, Mz, zt, hz, Ft, kz, (4 | az) + (qz ? 16 : 0), st, nz), Qz < tt && Jz(jz++, Mz, zt, hz, Qz, tt, (2 | az) + (qz ? 16 : 0), lz, st), tt + 1 === Ft) {
              if (void 0 !== (cz = qz ? Cz(zz, Mz, tz, zt, hz, Sz, Vz, tt, Rz, pz[tt]) : Iz(zz, Mz, tz, az, zt, hz, Sz, Vz, tt, Rz, pz[tt]))) return cz
            } else if (tt < Ft) {
              var Wt;
              if (qz) {
                if (zt < (Wt = Bz(zz, Mz, zt, hz, Sz, Vz, st))) {
                  var Xt = Dz(zz, Mz, zt, Wt, Sz, Vz, st);
                  if (Mz === zz - 2) {
                    if (zt < Xt && void 0 !== (cz = vz.sweepComplete(zz, tz, zt, Xt, Sz, Vz, tt, Ft, Rz, pz))) return cz;
                    if (Xt < Wt && void 0 !== (cz = vz.sweepBipartite(zz, tz, Xt, Wt, Sz, Vz, tt, Ft, Rz, pz))) return cz
                  } else zt < Xt && Jz(jz++, Mz + 1, zt, Xt, tt, Ft, 16, -1 / 0, 1 / 0), Xt < Wt && (Jz(jz++, Mz + 1, Xt, Wt, tt, Ft, 0, -1 / 0, 1 / 0), Jz(jz++, Mz + 1, tt, Ft, Xt, Wt, 1, -1 / 0, 1 / 0))
                }
              } else zt < (Wt = az ? Pz(zz, Mz, zt, hz, Sz, Vz, st) : Bz(zz, Mz, zt, hz, Sz, Vz, st)) && (Mz === zz - 2 ? cz = az ? vz.sweepBipartite(zz, tz, tt, Ft, Rz, pz, zt, Wt, Sz, Vz) : vz.sweepBipartite(zz, tz, zt, Wt, Sz, Vz, tt, Ft, Rz, pz) : (Jz(jz++, Mz + 1, zt, Wt, tt, Ft, az, -1 / 0, 1 / 0), Jz(jz++, Mz + 1, tt, Ft, zt, Wt, 1 ^ az, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var Fz = sz(37728),
      Wz = sz(37737),
      Xz = sz(37758),
      Oz = Xz.partial,
      oz = Xz.full,
      vz = sz(37748),
      Uz = sz(37767),
      Kz = sz(37772),
      uz = 128,
      Nz = 1 << 22,
      bz = 1 << 22,
      wz = Kz("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      Dz = Kz("lo===p0", ["p0"]),
      gz = Kz("lo<p0", ["p0"]),
      Hz = Kz("hi<=p0", ["p0"]),
      Bz = Kz("lo<=p0&&p0<=hi", ["p0"]),
      Pz = Kz("lo<p0&&p0<=hi", ["p0"]),
      rz = 6,
      Yz = 2,
      xz = Fz.mallocInt32(1024),
      mz = Fz.mallocDouble(1024);

    function Jz(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz) {
      var Uz = rz * zz;
      xz[Uz] = tz, xz[Uz + 1] = sz, xz[Uz + 2] = Fz, xz[Uz + 3] = Wz, xz[Uz + 4] = Xz, xz[Uz + 5] = Oz;
      var Kz = Yz * zz;
      mz[Kz] = oz, mz[Kz + 1] = vz
    }

    function Iz(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz, Kz) {
      var uz = 2 * zz,
        Nz = vz * uz,
        bz = Uz[Nz + tz];
      zz: for (var wz = Wz, Dz = Wz * uz; wz < Xz; ++wz, Dz += uz) {
        var gz = Oz[Dz + tz],
          Hz = Oz[Dz + tz + zz];
        if (!(bz < gz || Hz < bz) && (!Fz || bz !== gz)) {
          for (var Bz, Pz = oz[wz], rz = tz + 1; rz < zz; ++rz) {
            gz = Oz[Dz + rz], Hz = Oz[Dz + rz + zz];
            var Yz = Uz[Nz + rz],
              xz = Uz[Nz + rz + zz];
            if (Hz < Yz || xz < gz) continue zz
          }
          if (void 0 !== (Bz = Fz ? sz(Kz, Pz) : sz(Pz, Kz))) return Bz
        }
      }
    }

    function Cz(zz, tz, sz, Fz, Wz, Xz, Oz, oz, vz, Uz) {
      var Kz = 2 * zz,
        uz = oz * Kz,
        Nz = vz[uz + tz];
      zz: for (var bz = Fz, wz = Fz * Kz; bz < Wz; ++bz, wz += Kz) {
        var Dz = Oz[bz];
        if (Dz !== Uz) {
          var gz = Xz[wz + tz],
            Hz = Xz[wz + tz + zz];
          if (!(Nz < gz || Hz < Nz)) {
            for (var Bz = tz + 1; Bz < zz; ++Bz) {
              gz = Xz[wz + Bz], Hz = Xz[wz + Bz + zz];
              var Pz = vz[uz + Bz],
                rz = vz[uz + Bz + zz];
              if (Hz < Pz || rz < gz) continue zz
            }
            var Yz = sz(Dz, Uz);
            if (void 0 !== Yz) return Yz
          }
        }
      }
    }
  },
  37767: (zz, tz, sz) => {
    zz.exports = function(zz, tz, sz, Oz, oz, vz) {
      if (Oz <= sz + 1) return sz;
      var Uz = sz,
        Kz = Oz,
        uz = Oz + sz >>> 1,
        Nz = 2 * zz,
        bz = uz,
        wz = oz[Nz * uz + tz];
      for (; Uz < Kz;) {
        if (Kz - Uz < Wz) {
          Xz(zz, tz, Uz, Kz, oz, vz), wz = oz[Nz * uz + tz];
          break
        }
        var Dz = Kz - Uz,
          gz = Math.random() * Dz + Uz | 0,
          Hz = oz[Nz * gz + tz],
          Bz = Math.random() * Dz + Uz | 0,
          Pz = oz[Nz * Bz + tz],
          rz = Math.random() * Dz + Uz | 0,
          Yz = oz[Nz * rz + tz];
        Hz <= Pz ? Yz >= Pz ? (bz = Bz, wz = Pz) : Hz >= Yz ? (bz = gz, wz = Hz) : (bz = rz, wz = Yz) : Pz >= Yz ? (bz = Bz, wz = Pz) : Yz >= Hz ? (bz = gz, wz = Hz) : (bz = rz, wz = Yz);
        for (var xz = Nz * (Kz - 1), mz = Nz * bz, Jz = 0; Jz < Nz; ++Jz, ++xz, ++mz) {
          var Iz = oz[xz];
          oz[xz] = oz[mz], oz[mz] = Iz
        }
        var Cz = vz[Kz - 1];
        vz[Kz - 1] = vz[bz], vz[bz] = Cz;
        for (xz = Nz * (Kz - 1), mz = Nz * (bz = Fz(zz, tz, Uz, Kz - 1, oz, vz, wz)), Jz = 0; Jz < Nz; ++Jz, ++xz, ++mz) {
          Iz = oz[xz];
          oz[xz] = oz[mz], oz[mz] = Iz
        }
        Cz = vz[Kz - 1];
        if (vz[Kz - 1] = vz[bz], vz[bz] = Cz, uz < bz) {
          for (Kz = bz - 1; Uz < Kz && oz[Nz * (Kz - 1) + tz] === wz;) Kz -= 1;
          Kz += 1
        } else {
          if (!(bz < uz)) break;
          for (Uz = bz + 1; Uz < Kz && oz[Nz * Uz + tz] === wz;) Uz += 1
        }
      }
      return Fz(zz, tz, sz, uz, oz, vz, oz[Nz * uz + tz])
    };
    var Fz = sz(37772)("lo<p0", ["p0"]),
      Wz = 8;

    function Xz(zz, tz, sz, Fz, Wz, Xz) {
      for (var Oz = 2 * zz, oz = Oz * (sz + 1) + tz, vz = sz + 1; vz < Fz; ++vz, oz += Oz)
        for (var Uz = Wz[oz], Kz = vz, uz = Oz * (vz - 1); Kz > sz && Wz[uz + tz] > Uz; --Kz, uz -= Oz) {
          for (var Nz = uz, bz = uz + Oz, wz = 0; wz < Oz; ++wz, ++Nz, ++bz) {
            var Dz = Wz[Nz];
            Wz[Nz] = Wz[bz], Wz[bz] = Dz
          }
          var gz = Xz[Kz];
          Xz[Kz] = Xz[Kz - 1], Xz[Kz - 1] = gz
        }
    }
  },
  37772: zz => {
    zz.exports = function(zz, sz) {
      var Fz = "abcdef".split("").concat(sz),
        Wz = [];
      zz.indexOf("lo") >= 0 && Wz.push("lo=e[k+n]");
      zz.indexOf("hi") >= 0 && Wz.push("hi=e[k+o]");
      return Fz.push(tz.replace("_", Wz.join()).replace("$", zz)), Function.apply(void 0, Fz)
    };
    var tz = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  37752: zz => {
    zz.exports = function(zz, Fz) {
      Fz <= 4 * tz ? sz(0, Fz - 1, zz) : Uz(0, Fz - 1, zz)
    };
    var tz = 32;

    function sz(zz, tz, sz) {
      for (var Fz = 2 * (zz + 1), Wz = zz + 1; Wz <= tz; ++Wz) {
        for (var Xz = sz[Fz++], Oz = sz[Fz++], oz = Wz, vz = Fz - 2; oz-- > zz;) {
          var Uz = sz[vz - 2],
            Kz = sz[vz - 1];
          if (Uz < Xz) break;
          if (Uz === Xz && Kz < Oz) break;
          sz[vz] = Uz, sz[vz + 1] = Kz, vz -= 2
        }
        sz[vz] = Xz, sz[vz + 1] = Oz
      }
    }

    function Fz(zz, tz, sz) {
      tz *= 2;
      var Fz = sz[zz *= 2],
        Wz = sz[zz + 1];
      sz[zz] = sz[tz], sz[zz + 1] = sz[tz + 1], sz[tz] = Fz, sz[tz + 1] = Wz
    }

    function Wz(zz, tz, sz) {
      tz *= 2, sz[zz *= 2] = sz[tz], sz[zz + 1] = sz[tz + 1]
    }

    function Xz(zz, tz, sz, Fz) {
      tz *= 2, sz *= 2;
      var Wz = Fz[zz *= 2],
        Xz = Fz[zz + 1];
      Fz[zz] = Fz[tz], Fz[zz + 1] = Fz[tz + 1], Fz[tz] = Fz[sz], Fz[tz + 1] = Fz[sz + 1], Fz[sz] = Wz, Fz[sz + 1] = Xz
    }

    function Oz(zz, tz, sz, Fz, Wz) {
      tz *= 2, Wz[zz *= 2] = Wz[tz], Wz[tz] = sz, Wz[zz + 1] = Wz[tz + 1], Wz[tz + 1] = Fz
    }

    function oz(zz, tz, sz) {
      tz *= 2;
      var Fz = sz[zz *= 2],
        Wz = sz[tz];
      return !(Fz < Wz) && (Fz !== Wz || sz[zz + 1] > sz[tz + 1])
    }

    function vz(zz, tz, sz, Fz) {
      var Wz = Fz[zz *= 2];
      return Wz < tz || Wz === tz && Fz[zz + 1] < sz
    }

    function Uz(zz, Kz, uz) {
      var Nz = (Kz - zz + 1) / 6 | 0,
        bz = zz + Nz,
        wz = Kz - Nz,
        Dz = zz + Kz >> 1,
        gz = Dz - Nz,
        Hz = Dz + Nz,
        Bz = bz,
        Pz = gz,
        rz = Dz,
        Yz = Hz,
        xz = wz,
        mz = zz + 1,
        Jz = Kz - 1,
        Iz = 0;
      oz(Bz, Pz, uz) && (Iz = Bz, Bz = Pz, Pz = Iz), oz(Yz, xz, uz) && (Iz = Yz, Yz = xz, xz = Iz), oz(Bz, rz, uz) && (Iz = Bz, Bz = rz, rz = Iz), oz(Pz, rz, uz) && (Iz = Pz, Pz = rz, rz = Iz), oz(Bz, Yz, uz) && (Iz = Bz, Bz = Yz, Yz = Iz), oz(rz, Yz, uz) && (Iz = rz, rz = Yz, Yz = Iz), oz(Pz, xz, uz) && (Iz = Pz, Pz = xz, xz = Iz), oz(Pz, rz, uz) && (Iz = Pz, Pz = rz, rz = Iz), oz(Yz, xz, uz) && (Iz = Yz, Yz = xz, xz = Iz);
      for (var Cz = uz[2 * Pz], ez = uz[2 * Pz + 1], Zz = uz[2 * Yz], Gz = uz[2 * Yz + 1], Tz = 2 * Bz, cz = 2 * rz, jz = 2 * xz, Az = 2 * bz, yz = 2 * Dz, Mz = 2 * wz, dz = 0; dz < 2; ++dz) {
        var hz = uz[Tz + dz],
          Qz = uz[cz + dz],
          kz = uz[jz + dz];
        uz[Az + dz] = hz, uz[yz + dz] = Qz, uz[Mz + dz] = kz
      }
      Wz(gz, zz, uz), Wz(Hz, Kz, uz);
      for (var iz = mz; iz <= Jz; ++iz)
        if (vz(iz, Cz, ez, uz)) iz !== mz && Fz(iz, mz, uz), ++mz;
        else if (!vz(iz, Zz, Gz, uz))
        for (;;) {
          if (vz(Jz, Zz, Gz, uz)) {
            vz(Jz, Cz, ez, uz) ? (Xz(iz, mz, Jz, uz), ++mz, --Jz) : (Fz(iz, Jz, uz), --Jz);
            break
          }
          if (--Jz < iz) break
        }
      Oz(zz, mz - 1, Cz, ez, uz), Oz(Kz, Jz + 1, Zz, Gz, uz), mz - 2 - zz <= tz ? sz(zz, mz - 2, uz) : Uz(zz, mz - 2, uz), Kz - (Jz + 2) <= tz ? sz(Jz + 2, Kz, uz) : Uz(Jz + 2, Kz, uz), Jz - mz <= tz ? sz(mz, Jz, uz) : Uz(mz, Jz, uz)
    }
  },
  37748: (zz, tz, sz) => {
    zz.exports = {
      init: function(zz) {
        var tz = Wz.nextPow2(zz);
        vz.length < tz && (Fz.free(vz), vz = Fz.mallocInt32(tz));
        Uz.length < tz && (Fz.free(Uz), Uz = Fz.mallocInt32(tz));
        Kz.length < tz && (Fz.free(Kz), Kz = Fz.mallocInt32(tz));
        uz.length < tz && (Fz.free(uz), uz = Fz.mallocInt32(tz));
        Nz.length < tz && (Fz.free(Nz), Nz = Fz.mallocInt32(tz));
        bz.length < tz && (Fz.free(bz), bz = Fz.mallocInt32(tz));
        var sz = 8 * tz;
        wz.length < sz && (Fz.free(wz), wz = Fz.mallocDouble(sz))
      },
      sweepBipartite: function(zz, tz, sz, Fz, Wz, oz, Nz, bz, Hz, Bz) {
        for (var Pz = 0, rz = 2 * zz, Yz = zz - 1, xz = rz - 1, mz = sz; mz < Fz; ++mz) {
          var Jz = oz[mz],
            Iz = rz * mz;
          wz[Pz++] = Wz[Iz + Yz], wz[Pz++] = -(Jz + 1), wz[Pz++] = Wz[Iz + xz], wz[Pz++] = Jz
        }
        for (mz = Nz; mz < bz; ++mz) {
          Jz = Bz[mz] + Oz;
          var Cz = rz * mz;
          wz[Pz++] = Hz[Cz + Yz], wz[Pz++] = -Jz, wz[Pz++] = Hz[Cz + xz], wz[Pz++] = Jz
        }
        var ez = Pz >>> 1;
        Xz(wz, ez);
        var Zz = 0,
          Gz = 0;
        for (mz = 0; mz < ez; ++mz) {
          var Tz = 0 | wz[2 * mz + 1];
          if (Tz >= Oz) Dz(Kz, uz, Gz--, Tz = Tz - Oz | 0);
          else if (Tz >= 0) Dz(vz, Uz, Zz--, Tz);
          else if (Tz <= -Oz) {
            Tz = -Tz - Oz | 0;
            for (var cz = 0; cz < Zz; ++cz) {
              if (void 0 !== (jz = tz(vz[cz], Tz))) return jz
            }
            gz(Kz, uz, Gz++, Tz)
          } else {
            Tz = -Tz - 1 | 0;
            for (cz = 0; cz < Gz; ++cz) {
              var jz;
              if (void 0 !== (jz = tz(Tz, Kz[cz]))) return jz
            }
            gz(vz, Uz, Zz++, Tz)
          }
        }
      },
      sweepComplete: function(zz, tz, sz, Fz, Wz, Oz, oz, Hz, Bz, Pz) {
        for (var rz = 0, Yz = 2 * zz, xz = zz - 1, mz = Yz - 1, Jz = sz; Jz < Fz; ++Jz) {
          var Iz = Oz[Jz] + 1 << 1,
            Cz = Yz * Jz;
          wz[rz++] = Wz[Cz + xz], wz[rz++] = -Iz, wz[rz++] = Wz[Cz + mz], wz[rz++] = Iz
        }
        for (Jz = oz; Jz < Hz; ++Jz) {
          Iz = Pz[Jz] + 1 << 1;
          var ez = Yz * Jz;
          wz[rz++] = Bz[ez + xz], wz[rz++] = 1 | -Iz, wz[rz++] = Bz[ez + mz], wz[rz++] = 1 | Iz
        }
        var Zz = rz >>> 1;
        Xz(wz, Zz);
        var Gz = 0,
          Tz = 0,
          cz = 0;
        for (Jz = 0; Jz < Zz; ++Jz) {
          var jz = 0 | wz[2 * Jz + 1],
            Az = 1 & jz;
          if (Jz < Zz - 1 && jz >> 1 === wz[2 * Jz + 3] >> 1 && (Az = 2, Jz += 1), jz < 0) {
            for (var yz = -(jz >> 1) - 1, Mz = 0; Mz < cz; ++Mz) {
              if (void 0 !== (dz = tz(Nz[Mz], yz))) return dz
            }
            if (0 !== Az)
              for (Mz = 0; Mz < Gz; ++Mz) {
                if (void 0 !== (dz = tz(vz[Mz], yz))) return dz
              }
            if (1 !== Az)
              for (Mz = 0; Mz < Tz; ++Mz) {
                var dz;
                if (void 0 !== (dz = tz(Kz[Mz], yz))) return dz
              }
            0 === Az ? gz(vz, Uz, Gz++, yz) : 1 === Az ? gz(Kz, uz, Tz++, yz) : 2 === Az && gz(Nz, bz, cz++, yz)
          } else {
            yz = (jz >> 1) - 1;
            0 === Az ? Dz(vz, Uz, Gz--, yz) : 1 === Az ? Dz(Kz, uz, Tz--, yz) : 2 === Az && Dz(Nz, bz, cz--, yz)
          }
        }
      },
      scanBipartite: function(zz, tz, sz, Fz, Wz, oz, Kz, uz, Nz, bz, Hz, Bz) {
        var Pz = 0,
          rz = 2 * zz,
          Yz = tz,
          xz = tz + zz,
          mz = 1,
          Jz = 1;
        Fz ? Jz = Oz : mz = Oz;
        for (var Iz = Wz; Iz < oz; ++Iz) {
          var Cz = Iz + mz,
            ez = rz * Iz;
          wz[Pz++] = Kz[ez + Yz], wz[Pz++] = -Cz, wz[Pz++] = Kz[ez + xz], wz[Pz++] = Cz
        }
        for (Iz = Nz; Iz < bz; ++Iz) {
          Cz = Iz + Jz;
          var Zz = rz * Iz;
          wz[Pz++] = Hz[Zz + Yz], wz[Pz++] = -Cz
        }
        var Gz = Pz >>> 1;
        Xz(wz, Gz);
        var Tz = 0;
        for (Iz = 0; Iz < Gz; ++Iz) {
          var cz = 0 | wz[2 * Iz + 1];
          if (cz < 0) {
            var jz = !1;
            if ((Cz = -cz) >= Oz ? (jz = !Fz, Cz -= Oz) : (jz = !!Fz, Cz -= 1), jz) gz(vz, Uz, Tz++, Cz);
            else {
              var Az = Bz[Cz],
                yz = rz * Cz,
                Mz = Hz[yz + tz + 1],
                dz = Hz[yz + tz + 1 + zz];
              zz: for (var hz = 0; hz < Tz; ++hz) {
                var Qz = vz[hz],
                  kz = rz * Qz;
                if (!(dz < Kz[kz + tz + 1] || Kz[kz + tz + 1 + zz] < Mz)) {
                  for (var iz = tz + 2; iz < zz; ++iz)
                    if (Hz[yz + iz + zz] < Kz[kz + iz] || Kz[kz + iz + zz] < Hz[yz + iz]) continue zz;
                  var Lz, lz = uz[Qz];
                  if (void 0 !== (Lz = Fz ? sz(Az, lz) : sz(lz, Az))) return Lz
                }
              }
            }
          } else Dz(vz, Uz, Tz--, cz - mz)
        }
      },
      scanComplete: function(zz, tz, sz, Fz, Wz, oz, Uz, Kz, uz, Nz, bz) {
        for (var Dz = 0, gz = 2 * zz, Hz = tz, Bz = tz + zz, Pz = Fz; Pz < Wz; ++Pz) {
          var rz = Pz + Oz,
            Yz = gz * Pz;
          wz[Dz++] = oz[Yz + Hz], wz[Dz++] = -rz, wz[Dz++] = oz[Yz + Bz], wz[Dz++] = rz
        }
        for (Pz = Kz; Pz < uz; ++Pz) {
          rz = Pz + 1;
          var xz = gz * Pz;
          wz[Dz++] = Nz[xz + Hz], wz[Dz++] = -rz
        }
        var mz = Dz >>> 1;
        Xz(wz, mz);
        var Jz = 0;
        for (Pz = 0; Pz < mz; ++Pz) {
          var Iz = 0 | wz[2 * Pz + 1];
          if (Iz < 0) {
            if ((rz = -Iz) >= Oz) vz[Jz++] = rz - Oz;
            else {
              var Cz = bz[rz -= 1],
                ez = gz * rz,
                Zz = Nz[ez + tz + 1],
                Gz = Nz[ez + tz + 1 + zz];
              zz: for (var Tz = 0; Tz < Jz; ++Tz) {
                var cz = vz[Tz],
                  jz = Uz[cz];
                if (jz === Cz) break;
                var Az = gz * cz;
                if (!(Gz < oz[Az + tz + 1] || oz[Az + tz + 1 + zz] < Zz)) {
                  for (var yz = tz + 2; yz < zz; ++yz)
                    if (Nz[ez + yz + zz] < oz[Az + yz] || oz[Az + yz + zz] < Nz[ez + yz]) continue zz;
                  var Mz = sz(jz, Cz);
                  if (void 0 !== Mz) return Mz
                }
              }
            }
          } else {
            for (rz = Iz - Oz, Tz = Jz - 1; Tz >= 0; --Tz)
              if (vz[Tz] === rz) {
                for (yz = Tz + 1; yz < Jz; ++yz) vz[yz - 1] = vz[yz];
                break
              }-- Jz
          }
        }
      }
    };
    var Fz = sz(37728),
      Wz = sz(37737),
      Xz = sz(37752),
      Oz = 1 << 28,
      oz = 1024,
      vz = Fz.mallocInt32(oz),
      Uz = Fz.mallocInt32(oz),
      Kz = Fz.mallocInt32(oz),
      uz = Fz.mallocInt32(oz),
      Nz = Fz.mallocInt32(oz),
      bz = Fz.mallocInt32(oz),
      wz = Fz.mallocDouble(8192);

    function Dz(zz, tz, sz, Fz) {
      var Wz = tz[Fz],
        Xz = zz[sz - 1];
      zz[Wz] = Xz, tz[Xz] = Wz
    }

    function gz(zz, tz, sz, Fz) {
      zz[sz] = Fz, tz[Fz] = sz
    }
  },
  37742: zz => {
    function tz(zz, sz, Fz) {
      var Wz = 0 | zz[Fz];
      if (Wz <= 0) return [];
      var Xz, Oz = new Array(Wz);
      if (Fz === zz.length - 1)
        for (Xz = 0; Xz < Wz; ++Xz) Oz[Xz] = sz;
      else
        for (Xz = 0; Xz < Wz; ++Xz) Oz[Xz] = tz(zz, sz, Fz + 1);
      return Oz
    }
    zz.exports = function(zz, sz) {
      switch ("undefined" === typeof sz && (sz = 0), typeof zz) {
        case "number":
          if (zz > 0) return function(zz, tz) {
            var sz, Fz;
            for (sz = new Array(zz), Fz = 0; Fz < zz; ++Fz) sz[Fz] = tz;
            return sz
          }(0 | zz, sz);
          break;
        case "object":
          if ("number" === typeof zz.length) return tz(zz, sz, 0)
      }
      return []
    }
  },
  37683: (zz, tz, sz) => {
    zz.exports = function() {
      var zz = this;
      this.components = {}, this.comps = this.components;
      var tz = this.components,
        sz = 1,
        Wz = {},
        Xz = [],
        Oz = [],
        oz = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function vz(zz, sz) {
        var Fz = tz[sz],
          Xz = Wz[sz],
          Oz = Xz.hash[zz];
        Oz && (Xz.remove(zz), Fz.NJ && (Fz.multi ? (Oz.forEach((tz => {
          tz && Fz.NJ(zz, tz)
        })), Oz.length = 0) : Fz.NJ(zz, Oz)), oz.removals.push(Xz), Uz())
      }

      function Uz() {
        oz.timeout || (oz.timeout = !0, setTimeout(Kz, 1))
      }

      function Kz() {
        oz.timeout = !1, uz()
      }

      function uz() {
        oz.multiComps.length && function(zz) {
          for (var tz = 0; tz < zz.length; tz++) {
            var {
              entID: sz,
              data: Fz
            } = zz[tz], Wz = Fz.hash[sz];
            if (Wz) {
              for (var Xz = 0; Xz < Wz.length; Xz++) Wz[Xz] || (Wz.splice(Xz, 1), Xz--);
              0 === Wz.length && (Fz.remove(sz), oz.removals.push(Fz))
            }
          }
          zz.length = 0
        }(oz.multiComps), oz.removals.length && function(zz) {
          for (var tz = 0; tz < zz.length; tz++) {
            zz[tz].flush()
          }
          zz.length = 0
        }(oz.removals)
      }
      this.LD = Wz, this._systems = Xz, this._renderSystems = Oz, this.lL = function(tz) {
        var Fz = sz++;
        return Array.isArray(tz) && tz.forEach((tz => zz.MI(Fz, tz))), Fz
      }, this.deleteEntity = function(tz) {
        return Object.keys(Wz).forEach((zz => {
          Wz[zz].hash[tz] && vz(tz, zz)
        })), zz
      }, this.Htz = function(zz) {
        if (!zz) throw new Error("Missing component definition");
        var sz = zz.name;
        if (!sz) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof sz) throw new Error("Component name must be a string.");
        if ("" === sz) throw new Error("Component name must be a non-empty string.");
        if (Wz[sz]) throw new Error(`Component ${sz} already exists.`);
        var oz = {};
        return oz.name = sz, oz.multi = !!zz.multi, oz.order = isNaN(zz.order) ? 99 : zz.order, oz.stateConstructor = zz.stateConstructor || null, oz.state = zz.state || {}, oz.Hr = zz.Hr || null, oz.NJ = zz.NJ || null, oz.system = zz.system || null, oz.Vr = zz.Vr || null, tz[sz] = oz, Wz[sz] = new Fz, Wz[sz]._pendingMultiCleanup = !1, Wz[sz]._multiCleanupIDs = oz.multi ? [] : null, oz.system && (Xz.push(sz), Xz.sort(((zz, sz) => tz[zz].order - tz[sz].order))), oz.Vr && (Oz.push(sz), Oz.sort(((zz, sz) => tz[zz].order - tz[sz].order))), sz
      }, this.overwriteComponent = function(zz, sz) {
        var Fz = tz[zz];
        if (!Fz) throw new Error(`Unknown component: ${zz}`);
        if (!sz) throw new Error("Missing component definition");
        if (Fz.name !== sz.name) throw new Error("Overwriting component must use the same name property.");
        var oz = {};
        oz.name = zz, oz.multi = !!sz.multi, oz.order = isNaN(sz.order) ? 99 : sz.order, oz.state = sz.state || {}, oz.Hr = sz.Hr || null, oz.NJ = sz.NJ || null, oz.system = sz.system || null, oz.Vr = sz.Vr || null, tz[zz] = oz, Wz[zz]._pendingMultiCleanup = !1, Wz[zz]._multiCleanupIDs = oz.multi ? [] : null;
        var vz = Xz.indexOf(zz);
        oz.system && vz < 0 && Xz.push(zz), !oz.system && vz >= 0 && Xz.splice(vz, 1), Xz.sort(((zz, sz) => tz[zz].order - tz[sz].order));
        var Uz = Oz.indexOf(zz);
        oz.Vr && Uz < 0 && Oz.push(zz), !oz.Vr && Uz >= 0 && Oz.splice(Uz, 1), Oz.sort(((zz, sz) => tz[zz].order - tz[sz].order));
        var Kz = oz.state;
        return this.ZI(zz).forEach((zz => {
          for (var tz in Kz) tz in zz || (zz[tz] = Kz[tz]);
          oz.Hr && oz.Hr(zz.yI, zz)
        })), zz
      }, this.deleteComponent = function(sz) {
        var Fz = Wz[sz];
        if (!Fz) throw new Error(`Unknown component: ${sz}`);
        Fz.flush(), Fz.list.forEach((zz => {
          zz && vz(zz.yI || zz[0].yI, sz)
        }));
        var oz = Xz.indexOf(sz),
          Uz = Oz.indexOf(sz);
        return oz > -1 && Xz.splice(oz, 1), Uz > -1 && Oz.splice(Uz, 1), Wz[sz].dispose(), delete Wz[sz], delete tz[sz], zz
      }, this.MI = function(zz, sz, Fz) {
        var Xz, Oz = tz[sz],
          oz = Wz[sz];
        if (!oz) throw new Error(`Unknown component: ${sz}.`);
        if (oz.hash[zz] && !Oz.multi) throw new Error(`Entity ${zz} already has component: ${sz}.`);
        if (Oz.stateConstructor) {
          if (!(Xz = new Oz.stateConstructor).hasOwnProperty("yI")) throw new Error(`Component ${Oz.name} stateConstructor type does not have property __id`);
          Object.assign(Xz, Oz.state, Fz)
        } else Xz = {
          yI: zz,
          ...Oz.state,
          ...Fz
        };
        if (Xz.yI = zz, Oz.multi) {
          var vz = oz.hash[zz];
          vz || (vz = [], oz.add(zz, vz)), vz.push(Xz)
        } else oz.add(zz, Xz);
        return Oz.Hr && Oz.Hr(zz, Xz), this
      }, this.Xzz = function(zz, tz) {
        var sz = Wz[tz];
        if (!sz) throw new Error(`Unknown component: ${tz}.`);
        return !!sz.hash[zz]
      }, this.pI = function(tz, sz) {
        if (!Wz[sz]) throw new Error(`Unknown component: ${sz}.`);
        return vz(tz, sz), zz
      }, this.getState = function(zz, tz) {
        var sz = Wz[tz];
        if (!sz) throw new Error(`Unknown component: ${tz}.`);
        return sz.hash[zz]
      }, this.ZI = function(zz) {
        var tz = Wz[zz];
        if (!tz) throw new Error(`Unknown component: ${zz}.`);
        return uz(), tz.list
      }, this.Szz = function(zz) {
        if (!Wz[zz]) throw new Error(`Unknown component: ${zz}.`);
        var tz = Wz[zz].hash;
        return zz => tz[zz]
      }, this.ttz = function(zz) {
        if (!Wz[zz]) throw new Error(`Unknown component: ${zz}.`);
        var tz = Wz[zz].hash;
        return zz => !!tz[zz]
      }, this.wN = function(sz) {
        uz();
        for (var Fz = 0; Fz < Xz.length; Fz++) {
          var Oz = Xz[Fz],
            oz = tz[Oz],
            vz = Wz[Oz];
          oz.system(sz, vz.list), uz()
        }
        return zz
      }, this.render = function(sz) {
        uz();
        for (var Fz = 0; Fz < Oz.length; Fz++) {
          var Xz = Oz[Fz],
            oz = tz[Xz],
            vz = Wz[Xz];
          oz.Vr(sz, vz.list), uz()
        }
        return zz
      }, this.removeMultiComponent = function(sz, Fz, Xz) {
        var Oz = tz[Fz],
          vz = Wz[Fz];
        if (!vz) throw new Error(`Unknown component: ${Fz}.`);
        if (!Oz.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(zz, tz, sz, Fz) {
          var Wz = sz.hash[zz];
          if (Wz) {
            var Xz = Wz[Fz];
            Xz && (Wz[Fz] = null, tz.NJ && tz.NJ(zz, Xz), oz.multiComps.push({
              entID: zz,
              data: sz
            }), Uz())
          }
        }(sz, Oz, vz, Xz), zz
      }
    };
    var Fz = sz(37692)
  },
  37692: zz => {
    function tz(zz, tz) {
      var sz = zz._map[tz];
      if (delete zz.hash[tz], delete zz._map[tz], sz === zz.list.length - 1) zz.list.pop(), zz._idList.pop();
      else {
        var Fz = zz.list.pop();
        zz.list[sz] = Fz;
        var Wz = zz._idList.pop();
        zz._idList[sz] = Wz, zz._map[Wz] = sz
      }
    }
    zz.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(zz, tz) {
        if ("number" === typeof this._map[zz]) {
          var sz = this._map[zz];
          this.hash[zz] = tz, this.list[sz] = tz, this._idList[sz] = zz
        } else this._map[zz] = this.list.length, this.hash[zz] = tz, this.list.push(tz), this._idList.push(zz)
      }
      remove(zz) {
        var tz = this._map[zz];
        this.hash[zz] = null, this.list[tz] = null, this._pendingRemovals.push(zz)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var zz = 0; zz < this._pendingRemovals.length; zz++) {
          var sz = this._pendingRemovals[zz];
          null === this.hash[sz] && tz(this, sz)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  37142: zz => {
    zz.exports = function(zz) {
      for (var tz = new Array(zz), sz = 0; sz < zz; ++sz) tz[sz] = sz;
      return tz
    }
  },
  37150: zz => {
    function tz(zz) {
      return !!zz.constructor && "function" === typeof zz.constructor.isBuffer && zz.constructor.isBuffer(zz)
    }
    zz.exports = function(zz) {
      return null != zz && (tz(zz) || function(zz) {
        return "function" === typeof zz.readFloatLE && "function" === typeof zz.slice && tz(zz.slice(0, 0))
      }(zz) || !!zz._isBuffer)
    }
  },
  37484: (zz, tz, sz) => {
    zz = sz.nmd(zz);
    var Fz = "__lodash_hash_undefined__",
      Wz = 9007199254740991,
      Xz = "[object Arguments]",
      Oz = "[object Boolean]",
      oz = "[object Date]",
      vz = "[object Function]",
      Uz = "[object GeneratorFunction]",
      Kz = "[object Map]",
      uz = "[object Number]",
      Nz = "[object Object]",
      bz = "[object Promise]",
      wz = "[object RegExp]",
      Dz = "[object Set]",
      gz = "[object String]",
      Hz = "[object Symbol]",
      Bz = "[object WeakMap]",
      Pz = "[object ArrayBuffer]",
      rz = "[object DataView]",
      Yz = "[object Float32Array]",
      xz = "[object Float64Array]",
      mz = "[object Int8Array]",
      Jz = "[object Int16Array]",
      Iz = "[object Int32Array]",
      Cz = "[object Uint8Array]",
      ez = "[object Uint8ClampedArray]",
      Zz = "[object Uint16Array]",
      Gz = "[object Uint32Array]",
      Tz = /\w*$/,
      cz = /^\[object .+?Constructor\]$/,
      jz = /^(?:0|[1-9]\d*)$/,
      Az = {};
    Az[Xz] = Az["[object Array]"] = Az[Pz] = Az[rz] = Az[Oz] = Az[oz] = Az[Yz] = Az[xz] = Az[mz] = Az[Jz] = Az[Iz] = Az[Kz] = Az[uz] = Az[Nz] = Az[wz] = Az[Dz] = Az[gz] = Az[Hz] = Az[Cz] = Az[ez] = Az[Zz] = Az[Gz] = !0, Az["[object Error]"] = Az[vz] = Az[Bz] = !1;
    var yz = "object" == typeof sz.g && sz.g && sz.g.Object === Object && sz.g,
      Mz = "object" == typeof self && self && self.Object === Object && self,
      dz = yz || Mz || Function("return this")(),
      hz = tz && !tz.nodeType && tz,
      Qz = hz && zz && !zz.nodeType && zz,
      kz = Qz && Qz.exports === hz;

    function iz(zz, tz) {
      return zz.set(tz[0], tz[1]), zz
    }

    function Lz(zz, tz) {
      return zz.add(tz), zz
    }

    function lz(zz, tz, sz, Fz) {
      var Wz = -1,
        Xz = zz ? zz.length : 0;
      for (Fz && Xz && (sz = zz[++Wz]); ++Wz < Xz;) sz = tz(sz, zz[Wz], Wz, zz);
      return sz
    }

    function nz(zz) {
      var tz = !1;
      if (null != zz && "function" != typeof zz.toString) try {
        tz = !!(zz + "")
      } catch (sz) {}
      return tz
    }

    function az(zz) {
      var tz = -1,
        sz = Array(zz.size);
      return zz.forEach((function(zz, Fz) {
        sz[++tz] = [Fz, zz]
      })), sz
    }

    function qz(zz, tz) {
      return function(sz) {
        return zz(tz(sz))
      }
    }

    function Sz(zz) {
      var tz = -1,
        sz = Array(zz.size);
      return zz.forEach((function(zz) {
        sz[++tz] = zz
      })), sz
    }
    var Vz = Array.prototype,
      Rz = Function.prototype,
      pz = Object.prototype,
      fz = dz["__core-js_shared__"],
      Ez = function() {
        var zz = /[^.]+$/.exec(fz && fz.keys && fz.keys.IE_PROTO || "");
        return zz ? "Symbol(src)_1." + zz : ""
      }(),
      zt = Rz.toString,
      tt = pz.hasOwnProperty,
      st = pz.toString,
      Ft = RegExp("^" + zt.call(tt).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      Wt = kz ? dz.Lw : void 0,
      Xt = dz.Symbol,
      Ot = dz.Uint8Array,
      ot = qz(Object.getPrototypeOf, Object),
      vt = Object.create,
      Ut = pz.propertyIsEnumerable,
      Kt = Vz.splice,
      ut = Object.getOwnPropertySymbols,
      Nt = Wt ? Wt.isBuffer : void 0,
      bt = qz(Object.keys, Object),
      wt = kt(dz, "DataView"),
      Dt = kt(dz, "Map"),
      gt = kt(dz, "Promise"),
      Ht = kt(dz, "Set"),
      Bt = kt(dz, "WeakMap"),
      Pt = kt(Object, "create"),
      rt = qt(wt),
      Yt = qt(Dt),
      xt = qt(gt),
      mt = qt(Ht),
      Jt = qt(Bt),
      It = Xt ? Xt.prototype : void 0,
      Ct = It ? It.valueOf : void 0;

    function et(zz) {
      var tz = -1,
        sz = zz ? zz.length : 0;
      for (this.clear(); ++tz < sz;) {
        var Fz = zz[tz];
        this.set(Fz[0], Fz[1])
      }
    }

    function Zt(zz) {
      var tz = -1,
        sz = zz ? zz.length : 0;
      for (this.clear(); ++tz < sz;) {
        var Fz = zz[tz];
        this.set(Fz[0], Fz[1])
      }
    }

    function Gt(zz) {
      var tz = -1,
        sz = zz ? zz.length : 0;
      for (this.clear(); ++tz < sz;) {
        var Fz = zz[tz];
        this.set(Fz[0], Fz[1])
      }
    }

    function Tt(zz) {
      this.__data__ = new Zt(zz)
    }

    function ct(zz, tz) {
      var sz = Vt(zz) || function(zz) {
          return function(zz) {
            return function(zz) {
              return !!zz && "object" == typeof zz
            }(zz) && Rt(zz)
          }(zz) && tt.call(zz, "callee") && (!Ut.call(zz, "callee") || st.call(zz) == Xz)
        }(zz) ? function(zz, tz) {
          for (var sz = -1, Fz = Array(zz); ++sz < zz;) Fz[sz] = tz(sz);
          return Fz
        }(zz.length, String) : [],
        Fz = sz.length,
        Wz = !!Fz;
      for (var Oz in zz) !tz && !tt.call(zz, Oz) || Wz && ("length" == Oz || lt(Oz, Fz)) || sz.push(Oz);
      return sz
    }

    function jt(zz, tz, sz) {
      var Fz = zz[tz];
      tt.call(zz, tz) && St(Fz, sz) && (void 0 !== sz || tz in zz) || (zz[tz] = sz)
    }

    function At(zz, tz) {
      for (var sz = zz.length; sz--;)
        if (St(zz[sz][0], tz)) return sz;
      return -1
    }

    function yt(zz, tz, sz, Fz, Wz, bz, Bz) {
      var cz;
      if (Fz && (cz = bz ? Fz(zz, Wz, bz, Bz) : Fz(zz)), void 0 !== cz) return cz;
      if (!Et(zz)) return zz;
      var jz = Vt(zz);
      if (jz) {
        if (cz = function(zz) {
            var tz = zz.length,
              sz = zz.constructor(tz);
            tz && "string" == typeof zz[0] && tt.call(zz, "index") && (sz.index = zz.index, sz.input = zz.input);
            return sz
          }(zz), !tz) return function(zz, tz) {
          var sz = -1,
            Fz = zz.length;
          tz || (tz = Array(Fz));
          for (; ++sz < Fz;) tz[sz] = zz[sz];
          return tz
        }(zz, cz)
      } else {
        var yz = Lt(zz),
          Mz = yz == vz || yz == Uz;
        if (pt(zz)) return function(zz, tz) {
          if (tz) return zz.slice();
          var sz = new zz.constructor(zz.length);
          return zz.copy(sz), sz
        }(zz, tz);
        if (yz == Nz || yz == Xz || Mz && !bz) {
          if (nz(zz)) return bz ? zz : {};
          if (cz = function(zz) {
              return "function" != typeof zz.constructor || nt(zz) ? {} : (tz = ot(zz), Et(tz) ? vt(tz) : {});
              var tz
            }(Mz ? {} : zz), !tz) return function(zz, tz) {
            return ht(zz, it(zz), tz)
          }(zz, function(zz, tz) {
            return zz && ht(tz, zs(tz), zz)
          }(cz, zz))
        } else {
          if (!Az[yz]) return bz ? zz : {};
          cz = function(zz, tz, sz, Fz) {
            var Wz = zz.constructor;
            switch (tz) {
              case Pz:
                return dt(zz);
              case Oz:
              case oz:
                return new Wz(+zz);
              case rz:
                return function(zz, tz) {
                  var sz = tz ? dt(zz.buffer) : zz.buffer;
                  return new zz.constructor(sz, zz.byteOffset, zz.byteLength)
                }(zz, Fz);
              case Yz:
              case xz:
              case mz:
              case Jz:
              case Iz:
              case Cz:
              case ez:
              case Zz:
              case Gz:
                return function(zz, tz) {
                  var sz = tz ? dt(zz.buffer) : zz.buffer;
                  return new zz.constructor(sz, zz.byteOffset, zz.length)
                }(zz, Fz);
              case Kz:
                return function(zz, tz, sz) {
                  var Fz = tz ? sz(az(zz), !0) : az(zz);
                  return lz(Fz, iz, new zz.constructor)
                }(zz, Fz, sz);
              case uz:
              case gz:
                return new Wz(zz);
              case wz:
                return function(zz) {
                  var tz = new zz.constructor(zz.source, Tz.exec(zz));
                  return tz.lastIndex = zz.lastIndex, tz
                }(zz);
              case Dz:
                return function(zz, tz, sz) {
                  var Fz = tz ? sz(Sz(zz), !0) : Sz(zz);
                  return lz(Fz, Lz, new zz.constructor)
                }(zz, Fz, sz);
              case Hz:
                return Xz = zz, Ct ? Object(Ct.call(Xz)) : {}
            }
            var Xz
          }(zz, yz, yt, tz)
        }
      }
      Bz || (Bz = new Tt);
      var dz = Bz.get(zz);
      if (dz) return dz;
      if (Bz.set(zz, cz), !jz) var hz = sz ? function(zz) {
        return function(zz, tz, sz) {
          var Fz = tz(zz);
          return Vt(zz) ? Fz : function(zz, tz) {
            for (var sz = -1, Fz = tz.length, Wz = zz.length; ++sz < Fz;) zz[Wz + sz] = tz[sz];
            return zz
          }(Fz, sz(zz))
        }(zz, zs, it)
      }(zz) : zs(zz);
      return function(zz, tz) {
        for (var sz = -1, Fz = zz ? zz.length : 0; ++sz < Fz && !1 !== tz(zz[sz], sz, zz););
      }(hz || zz, (function(Wz, Xz) {
        hz && (Wz = zz[Xz = Wz]), jt(cz, Xz, yt(Wz, tz, sz, Fz, Xz, zz, Bz))
      })), cz
    }

    function Mt(zz) {
      return !(!Et(zz) || (tz = zz, Ez && Ez in tz)) && (ft(zz) || nz(zz) ? Ft : cz).test(qt(zz));
      var tz
    }

    function dt(zz) {
      var tz = new zz.constructor(zz.byteLength);
      return new Ot(tz).set(new Ot(zz)), tz
    }

    function ht(zz, tz, sz, Fz) {
      sz || (sz = {});
      for (var Wz = -1, Xz = tz.length; ++Wz < Xz;) {
        var Oz = tz[Wz],
          oz = Fz ? Fz(sz[Oz], zz[Oz], Oz, sz, zz) : void 0;
        jt(sz, Oz, void 0 === oz ? zz[Oz] : oz)
      }
      return sz
    }

    function Qt(zz, tz) {
      var sz = zz.__data__;
      return function(zz) {
        var tz = typeof zz;
        return "string" == tz || "number" == tz || "symbol" == tz || "boolean" == tz ? "__proto__" !== zz : null === zz
      }(tz) ? sz["string" == typeof tz ? "string" : "hash"] : sz.map
    }

    function kt(zz, tz) {
      var sz = function(zz, tz) {
        return null == zz ? void 0 : zz[tz]
      }(zz, tz);
      return Mt(sz) ? sz : void 0
    }
    et.prototype.clear = function() {
      this.__data__ = Pt ? Pt(null) : {}
    }, et.prototype.delete = function(zz) {
      return this.has(zz) && delete this.__data__[zz]
    }, et.prototype.get = function(zz) {
      var tz = this.__data__;
      if (Pt) {
        var sz = tz[zz];
        return sz === Fz ? void 0 : sz
      }
      return tt.call(tz, zz) ? tz[zz] : void 0
    }, et.prototype.has = function(zz) {
      var tz = this.__data__;
      return Pt ? void 0 !== tz[zz] : tt.call(tz, zz)
    }, et.prototype.set = function(zz, tz) {
      return this.__data__[zz] = Pt && void 0 === tz ? Fz : tz, this
    }, Zt.prototype.clear = function() {
      this.__data__ = []
    }, Zt.prototype.delete = function(zz) {
      var tz = this.__data__,
        sz = At(tz, zz);
      return !(sz < 0) && (sz == tz.length - 1 ? tz.pop() : Kt.call(tz, sz, 1), !0)
    }, Zt.prototype.get = function(zz) {
      var tz = this.__data__,
        sz = At(tz, zz);
      return sz < 0 ? void 0 : tz[sz][1]
    }, Zt.prototype.has = function(zz) {
      return At(this.__data__, zz) > -1
    }, Zt.prototype.set = function(zz, tz) {
      var sz = this.__data__,
        Fz = At(sz, zz);
      return Fz < 0 ? sz.push([zz, tz]) : sz[Fz][1] = tz, this
    }, Gt.prototype.clear = function() {
      this.__data__ = {
        hash: new et,
        map: new(Dt || Zt),
        string: new et
      }
    }, Gt.prototype.delete = function(zz) {
      return Qt(this, zz).delete(zz)
    }, Gt.prototype.get = function(zz) {
      return Qt(this, zz).get(zz)
    }, Gt.prototype.has = function(zz) {
      return Qt(this, zz).has(zz)
    }, Gt.prototype.set = function(zz, tz) {
      return Qt(this, zz).set(zz, tz), this
    }, Tt.prototype.clear = function() {
      this.__data__ = new Zt
    }, Tt.prototype.delete = function(zz) {
      return this.__data__.delete(zz)
    }, Tt.prototype.get = function(zz) {
      return this.__data__.get(zz)
    }, Tt.prototype.has = function(zz) {
      return this.__data__.has(zz)
    }, Tt.prototype.set = function(zz, tz) {
      var sz = this.__data__;
      if (sz instanceof Zt) {
        var Fz = sz.__data__;
        if (!Dt || Fz.length < 199) return Fz.push([zz, tz]), this;
        sz = this.__data__ = new Gt(Fz)
      }
      return sz.set(zz, tz), this
    };
    var it = ut ? qz(ut, Object) : function() {
        return []
      },
      Lt = function(zz) {
        return st.call(zz)
      };

    function lt(zz, tz) {
      return !!(tz = null == tz ? Wz : tz) && ("number" == typeof zz || jz.test(zz)) && zz > -1 && zz % 1 == 0 && zz < tz
    }

    function nt(zz) {
      var tz = zz && zz.constructor;
      return zz === ("function" == typeof tz && tz.prototype || pz)
    }

    function qt(zz) {
      if (null != zz) {
        try {
          return zt.call(zz)
        } catch (tz) {}
        try {
          return zz + ""
        } catch (tz) {}
      }
      return ""
    }

    function St(zz, tz) {
      return zz === tz || zz !== zz && tz !== tz
    }(wt && Lt(new wt(new ArrayBuffer(1))) != rz || Dt && Lt(new Dt) != Kz || gt && Lt(gt.resolve()) != bz || Ht && Lt(new Ht) != Dz || Bt && Lt(new Bt) != Bz) && (Lt = function(zz) {
      var tz = st.call(zz),
        sz = tz == Nz ? zz.constructor : void 0,
        Fz = sz ? qt(sz) : void 0;
      if (Fz) switch (Fz) {
        case rt:
          return rz;
        case Yt:
          return Kz;
        case xt:
          return bz;
        case mt:
          return Dz;
        case Jt:
          return Bz
      }
      return tz
    });
    var Vt = Array.isArray;

    function Rt(zz) {
      return null != zz && function(zz) {
        return "number" == typeof zz && zz > -1 && zz % 1 == 0 && zz <= Wz
      }(zz.length) && !ft(zz)
    }
    var pt = Nt || function() {
      return !1
    };

    function ft(zz) {
      var tz = Et(zz) ? st.call(zz) : "";
      return tz == vz || tz == Uz
    }

    function Et(zz) {
      var tz = typeof zz;
      return !!zz && ("object" == tz || "function" == tz)
    }

    function zs(zz) {
      return Rt(zz) ? ct(zz) : function(zz) {
        if (!nt(zz)) return bt(zz);
        var tz = [];
        for (var sz in Object(zz)) tt.call(zz, sz) && "constructor" != sz && tz.push(sz);
        return tz
      }(zz)
    }
    zz.exports = function(zz) {
      return yt(zz, !0, !0)
    }
  },
  37133: (zz, tz, sz) => {
    var Fz = sz(37142),
      Wz = sz(37150),
      Xz = "undefined" !== typeof Float64Array;

    function Oz(zz, tz) {
      return zz[0] - tz[0]
    }

    function oz() {
      var zz, tz = this.stride,
        sz = new Array(tz.length);
      for (zz = 0; zz < sz.length; ++zz) sz[zz] = [Math.abs(tz[zz]), zz];
      sz.sort(Oz);
      var Fz = new Array(sz.length);
      for (zz = 0; zz < Fz.length; ++zz) Fz[zz] = sz[zz][1];
      return Fz
    }

    function vz(zz, tz) {
      var sz = ["View", tz, "d", zz].join("");
      tz < 0 && (sz = "View_Nil" + zz);
      var Wz = "generic" === zz;
      if (-1 === tz) {
        var Xz = "function " + sz + "(a){this.data=a;};var proto=" + sz + ".prototype;proto.dtype='" + zz + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + sz + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + sz + "(a){return new " + sz + "(a);}";
        return new Function(Xz)()
      }
      if (0 === tz) {
        Xz = "function " + sz + "(a,d) {this.data = a;this.offset = d};var proto=" + sz + ".prototype;proto.dtype='" + zz + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + sz + "_copy() {return new " + sz + "(this.data,this.offset)};proto.pick=function " + sz + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + sz + "_get(){return " + (Wz ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + sz + "_set(v){return " + (Wz ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + sz + "(a,b,c,d){return new " + sz + "(a,d)}";
        return new Function("TrivialArray", Xz)(Uz[zz][0])
      }
      Xz = ["'use strict'"];
      var Oz = Fz(tz),
        vz = Oz.map((function(zz) {
          return "i" + zz
        })),
        Kz = "this.offset+" + Oz.map((function(zz) {
          return "this.stride[" + zz + "]*i" + zz
        })).join("+"),
        uz = Oz.map((function(zz) {
          return "b" + zz
        })).join(","),
        Nz = Oz.map((function(zz) {
          return "c" + zz
        })).join(",");
      Xz.push("function " + sz + "(a," + uz + "," + Nz + ",d){this.data=a", "this.shape=[" + uz + "]", "this.stride=[" + Nz + "]", "this.offset=d|0}", "var proto=" + sz + ".prototype", "proto.dtype='" + zz + "'", "proto.dimension=" + tz), Xz.push("Object.defineProperty(proto,'size',{get:function " + sz + "_size(){return " + Oz.map((function(zz) {
        return "this.shape[" + zz + "]"
      })).join("*"), "}})"), 1 === tz ? Xz.push("proto.order=[0]") : (Xz.push("Object.defineProperty(proto,'order',{get:"), tz < 4 ? (Xz.push("function " + sz + "_order(){"), 2 === tz ? Xz.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === tz && Xz.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : Xz.push("ORDER})")), Xz.push("proto.set=function " + sz + "_set(" + vz.join(",") + ",v){"), Wz ? Xz.push("return this.data.set(" + Kz + ",v)}") : Xz.push("return this.data[" + Kz + "]=v}"), Xz.push("proto.get=function " + sz + "_get(" + vz.join(",") + "){"), Wz ? Xz.push("return this.data.get(" + Kz + ")}") : Xz.push("return this.data[" + Kz + "]}"), Xz.push("proto.index=function " + sz + "_index(", vz.join(), "){return " + Kz + "}"), Xz.push("proto.hi=function " + sz + "_hi(" + vz.join(",") + "){return new " + sz + "(this.data," + Oz.map((function(zz) {
        return ["(typeof i", zz, "!=='number'||i", zz, "<0)?this.shape[", zz, "]:i", zz, "|0"].join("")
      })).join(",") + "," + Oz.map((function(zz) {
        return "this.stride[" + zz + "]"
      })).join(",") + ",this.offset)}");
      var bz = Oz.map((function(zz) {
          return "a" + zz + "=this.shape[" + zz + "]"
        })),
        wz = Oz.map((function(zz) {
          return "c" + zz + "=this.stride[" + zz + "]"
        }));
      Xz.push("proto.lo=function " + sz + "_lo(" + vz.join(",") + "){var b=this.offset,d=0," + bz.join(",") + "," + wz.join(","));
      for (var Dz = 0; Dz < tz; ++Dz) Xz.push("if(typeof i" + Dz + "==='number'&&i" + Dz + ">=0){d=i" + Dz + "|0;b+=c" + Dz + "*d;a" + Dz + "-=d}");
      Xz.push("return new " + sz + "(this.data," + Oz.map((function(zz) {
        return "a" + zz
      })).join(",") + "," + Oz.map((function(zz) {
        return "c" + zz
      })).join(",") + ",b)}"), Xz.push("proto.step=function " + sz + "_step(" + vz.join(",") + "){var " + Oz.map((function(zz) {
        return "a" + zz + "=this.shape[" + zz + "]"
      })).join(",") + "," + Oz.map((function(zz) {
        return "b" + zz + "=this.stride[" + zz + "]"
      })).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
      for (Dz = 0; Dz < tz; ++Dz) Xz.push("if(typeof i" + Dz + "==='number'){d=i" + Dz + "|0;if(d<0){c+=b" + Dz + "*(a" + Dz + "-1);a" + Dz + "=ceil(-a" + Dz + "/d)}else{a" + Dz + "=ceil(a" + Dz + "/d)}b" + Dz + "*=d}");
      Xz.push("return new " + sz + "(this.data," + Oz.map((function(zz) {
        return "a" + zz
      })).join(",") + "," + Oz.map((function(zz) {
        return "b" + zz
      })).join(",") + ",c)}");
      var gz = new Array(tz),
        Hz = new Array(tz);
      for (Dz = 0; Dz < tz; ++Dz) gz[Dz] = "a[i" + Dz + "]", Hz[Dz] = "b[i" + Dz + "]";
      Xz.push("proto.transpose=function " + sz + "_transpose(" + vz + "){" + vz.map((function(zz, tz) {
        return zz + "=(" + zz + "===undefined?" + tz + ":" + zz + "|0)"
      })).join(";"), "var a=this.shape,b=this.stride;return new " + sz + "(this.data," + gz.join(",") + "," + Hz.join(",") + ",this.offset)}"), Xz.push("proto.pick=function " + sz + "_pick(" + vz + "){var a=[],b=[],c=this.offset");
      for (Dz = 0; Dz < tz; ++Dz) Xz.push("if(typeof i" + Dz + "==='number'&&i" + Dz + ">=0){c=(c+this.stride[" + Dz + "]*i" + Dz + ")|0}else{a.push(this.shape[" + Dz + "]);b.push(this.stride[" + Dz + "])}");
      return Xz.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), Xz.push("return function construct_" + sz + "(data,shape,stride,offset){return new " + sz + "(data," + Oz.map((function(zz) {
        return "shape[" + zz + "]"
      })).join(",") + "," + Oz.map((function(zz) {
        return "stride[" + zz + "]"
      })).join(",") + ",offset)}"), new Function("CTOR_LIST", "ORDER", Xz.join("\n"))(Uz[zz], oz)
    }
    var Uz = {
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
    zz.exports = function(zz, tz, sz, Fz) {
      if (void 0 === zz) return (0, Uz.array[0])([]);
      "number" === typeof zz && (zz = [zz]), void 0 === tz && (tz = [zz.length]);
      var Oz = tz.length;
      if (void 0 === sz) {
        sz = new Array(Oz);
        for (var oz = Oz - 1, Kz = 1; oz >= 0; --oz) sz[oz] = Kz, Kz *= tz[oz]
      }
      if (void 0 === Fz) {
        Fz = 0;
        for (oz = 0; oz < Oz; ++oz) sz[oz] < 0 && (Fz -= (tz[oz] - 1) * sz[oz])
      }
      for (var uz = function(zz) {
          if (Wz(zz)) return "buffer";
          if (Xz) switch (Object.prototype.toString.call(zz)) {
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
          return Array.isArray(zz) ? "array" : "generic"
        }(zz), Nz = Uz[uz]; Nz.length <= Oz + 1;) Nz.push(vz(uz, Nz.length - 1));
      return (0, Nz[Oz + 1])(zz, tz, sz, Fz)
    }
  },
  37867: zz => {
    function tz(zz, tz, sz) {
      for (var Fz = zz.length, Wz = -1 / 0, Xz = 1 / 0, Oz = 0; Oz < Fz; Oz++) {
        var oz = (sz[0][Oz] - zz[Oz]) / tz[Oz],
          vz = (sz[1][Oz] - zz[Oz]) / tz[Oz];
        if (oz > vz) {
          var Uz = oz;
          oz = vz, vz = Uz
        }
        if (vz < Wz || oz > Xz) return 1 / 0;
        oz > Wz && (Wz = oz), vz < Xz && (Xz = vz)
      }
      return Wz > Xz ? 1 / 0 : Wz
    }
    zz.exports = function(zz, sz, Fz, Wz) {
      var Xz = tz(sz, Fz, Wz);
      if (Xz === 1 / 0) zz = null;
      else {
        zz = zz || [];
        for (var Oz = 0; Oz < sz.length; Oz++) zz[Oz] = sz[Oz] + Fz[Oz] * Xz
      }
      return zz
    }, zz.exports.distance = tz
  },
  37158: (zz, tz, sz) => {
    var Fz = sz(37166);

    function Wz(zz) {
      for (var tz, sz, Wz = 0, Xz = zz.length, Oz = 0; Oz < zz.length;) {
        for (tz = zz[Oz], sz = 0; Oz < Xz && zz[Oz] === tz;) ++Oz, ++sz;
        Wz += Fz.log2(sz) / 7 | 0, Wz += Fz.log2(tz >>> 0) / 7 | 0, Wz += 2
      }
      return Wz
    }
    tz.size = Wz, tz.encode = function(zz, tz) {
      tz || (tz = new Uint8Array(Wz(zz)));
      for (var sz, Fz, Xz = 0, Oz = tz.length, oz = 0; oz < zz.length;) {
        for (sz = zz[oz], Fz = 0; oz < zz.length && zz[oz] === sz;) ++oz, ++Fz;
        for (; Xz < Oz && Fz >= 128;) tz[Xz++] = 128 + (127 & Fz), Fz >>>= 7;
        if (Xz >= Oz) throw new Error("RLE buffer overflow");
        for (tz[Xz++] = Fz, sz >>>= 0; Xz < Oz && sz >= 128;) tz[Xz++] = 128 + (127 & sz), sz >>>= 7;
        if (Xz >= Oz) throw new Error("RLE buffer overflow");
        tz[Xz++] = sz
      }
      return tz
    }, tz.decode = function(zz, tz) {
      for (var sz, Fz, Wz, Xz, Oz = tz.length, oz = zz.length, vz = 0, Uz = 0; Uz < oz;) {
        for (sz = 0, Fz = 0; Uz < oz && zz[Uz] >= 128;) sz += (127 & zz[Uz++]) << Fz, Fz += 7;
        if (sz += zz[Uz++] << Fz, Uz >= oz) throw new Error("RLE buffer underrun");
        if (vz + sz > Oz) throw new Error("Chunk buffer overflow");
        for (Wz = 0, Fz = 0; Uz < oz && zz[Uz] >= 128;) Wz += (127 & zz[Uz++]) << Fz, Fz += 7;
        if (Uz >= oz) throw new Error("RLE buffer underrun");
        for (Wz += zz[Uz++] << Fz, Xz = 0; Xz < sz; ++Xz) tz[vz++] = Wz
      }
      return tz
    }
  },
  37166: (zz, tz) => {
    function sz(zz) {
      var tz = 32;
      return (zz &= -zz) && tz--, 65535 & zz && (tz -= 16), 16711935 & zz && (tz -= 8), 252645135 & zz && (tz -= 4), 858993459 & zz && (tz -= 2), 1431655765 & zz && (tz -= 1), tz
    }
    tz.INT_BITS = 32, tz.INT_MAX = 2147483647, tz.INT_MIN = -1 << 31, tz.sign = function(zz) {
      return (zz > 0) - (zz < 0)
    }, tz.abs = function(zz) {
      var tz = zz >> 31;
      return (zz ^ tz) - tz
    }, tz.min = function(zz, tz) {
      return tz ^ (zz ^ tz) & -(zz < tz)
    }, tz.max = function(zz, tz) {
      return zz ^ (zz ^ tz) & -(zz < tz)
    }, tz.isPow2 = function(zz) {
      return !(zz & zz - 1) && !!zz
    }, tz.log2 = function(zz) {
      var tz, sz;
      return tz = (zz > 65535) << 4, tz |= sz = ((zz >>>= tz) > 255) << 3, tz |= sz = ((zz >>>= sz) > 15) << 2, (tz |= sz = ((zz >>>= sz) > 3) << 1) | (zz >>>= sz) >> 1
    }, tz.log10 = function(zz) {
      return zz >= 1e9 ? 9 : zz >= 1e8 ? 8 : zz >= 1e7 ? 7 : zz >= 1e6 ? 6 : zz >= 1e5 ? 5 : zz >= 1e4 ? 4 : zz >= 1e3 ? 3 : zz >= 100 ? 2 : zz >= 10 ? 1 : 0
    }, tz.popCount = function(zz) {
      return 16843009 * ((zz = (858993459 & (zz -= zz >>> 1 & 1431655765)) + (zz >>> 2 & 858993459)) + (zz >>> 4) & 252645135) >>> 24
    }, tz.countTrailingZeros = sz, tz.nextPow2 = function(zz) {
      return zz += 0 === zz, --zz, zz |= zz >>> 1, zz |= zz >>> 2, zz |= zz >>> 4, zz |= zz >>> 8, (zz |= zz >>> 16) + 1
    }, tz.prevPow2 = function(zz) {
      return zz |= zz >>> 1, zz |= zz >>> 2, zz |= zz >>> 4, zz |= zz >>> 8, (zz |= zz >>> 16) - (zz >>> 1)
    }, tz.parity = function(zz) {
      return zz ^= zz >>> 16, zz ^= zz >>> 8, zz ^= zz >>> 4, 27030 >>> (zz &= 15) & 1
    };
    var Fz = new Array(256);
    ! function(zz) {
      for (var tz = 0; tz < 256; ++tz) {
        var sz = tz,
          Fz = tz,
          Wz = 7;
        for (sz >>>= 1; sz; sz >>>= 1) Fz <<= 1, Fz |= 1 & sz, --Wz;
        zz[tz] = Fz << Wz & 255
      }
    }(Fz), tz.reverse = function(zz) {
      return Fz[255 & zz] << 24 | Fz[zz >>> 8 & 255] << 16 | Fz[zz >>> 16 & 255] << 8 | Fz[zz >>> 24 & 255]
    }, tz.interleave2 = function(zz, tz) {
      return (zz = 1431655765 & ((zz = 858993459 & ((zz = 252645135 & ((zz = 16711935 & ((zz &= 65535) | zz << 8)) | zz << 4)) | zz << 2)) | zz << 1)) | (tz = 1431655765 & ((tz = 858993459 & ((tz = 252645135 & ((tz = 16711935 & ((tz &= 65535) | tz << 8)) | tz << 4)) | tz << 2)) | tz << 1)) << 1
    }, tz.deinterleave2 = function(zz, tz) {
      return (zz = 65535 & ((zz = 16711935 & ((zz = 252645135 & ((zz = 858993459 & ((zz = zz >>> tz & 1431655765) | zz >>> 1)) | zz >>> 2)) | zz >>> 4)) | zz >>> 16)) << 16 >> 16
    }, tz.interleave3 = function(zz, tz, sz) {
      return zz = 1227133513 & ((zz = 3272356035 & ((zz = 251719695 & ((zz = 4278190335 & ((zz &= 1023) | zz << 16)) | zz << 8)) | zz << 4)) | zz << 2), (zz |= (tz = 1227133513 & ((tz = 3272356035 & ((tz = 251719695 & ((tz = 4278190335 & ((tz &= 1023) | tz << 16)) | tz << 8)) | tz << 4)) | tz << 2)) << 1) | (sz = 1227133513 & ((sz = 3272356035 & ((sz = 251719695 & ((sz = 4278190335 & ((sz &= 1023) | sz << 16)) | sz << 8)) | sz << 4)) | sz << 2)) << 2
    }, tz.deinterleave3 = function(zz, tz) {
      return (zz = 1023 & ((zz = 4278190335 & ((zz = 251719695 & ((zz = 3272356035 & ((zz = zz >>> tz & 1227133513) | zz >>> 2)) | zz >>> 4)) | zz >>> 8)) | zz >>> 16)) << 22 >> 22
    }, tz.nextCombination = function(zz) {
      var tz = zz | zz - 1;
      return tz + 1 | (~tz & -~tz) - 1 >>> sz(zz) + 1
    }
  },
  36652: (zz, tz, sz) => {
    sz.d(tz, {
      Color3: () => Fz.c,
      c: () => Fz.d
    });
    var Fz = sz(36654);
    (0, Fz.e)()
  },
  37191: (zz, tz, sz) => {
    sz.d(tz, {
      e: () => Wz
    });
    var Fz = sz(37199);
    class Wz {
      static GetPlanes(zz) {
        const tz = [];
        for (let sz = 0; sz < 6; sz++) tz.push(new Fz.c(0, 0, 0, 0));
        return Wz.GetPlanesToRef(zz, tz), tz
      }
      static GetNearPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] + sz[2], tz.normal.y = sz[7] + sz[6], tz.normal.z = sz[11] + sz[10], tz.d = sz[15] + sz[14], tz.normalize()
      }
      static GetFarPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] - sz[2], tz.normal.y = sz[7] - sz[6], tz.normal.z = sz[11] - sz[10], tz.d = sz[15] - sz[14], tz.normalize()
      }
      static GetLeftPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] + sz[0], tz.normal.y = sz[7] + sz[4], tz.normal.z = sz[11] + sz[8], tz.d = sz[15] + sz[12], tz.normalize()
      }
      static GetRightPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] - sz[0], tz.normal.y = sz[7] - sz[4], tz.normal.z = sz[11] - sz[8], tz.d = sz[15] - sz[12], tz.normalize()
      }
      static GetTopPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] - sz[1], tz.normal.y = sz[7] - sz[5], tz.normal.z = sz[11] - sz[9], tz.d = sz[15] - sz[13], tz.normalize()
      }
      static GetBottomPlaneToRef(zz, tz) {
        const sz = zz.m;
        tz.normal.x = sz[3] + sz[1], tz.normal.y = sz[7] + sz[5], tz.normal.z = sz[11] + sz[9], tz.d = sz[15] + sz[13], tz.normalize()
      }
      static GetPlanesToRef(zz, tz) {
        Wz.GetNearPlaneToRef(zz, tz[0]), Wz.GetFarPlaneToRef(zz, tz[1]), Wz.GetLeftPlaneToRef(zz, tz[2]), Wz.GetRightPlaneToRef(zz, tz[3]), Wz.GetTopPlaneToRef(zz, tz[4]), Wz.GetBottomPlaneToRef(zz, tz[5])
      }
      static IsPointInFrustum(zz, tz) {
        for (let sz = 0; sz < 6; sz++)
          if (tz[sz].dotCoordinate(zz) < 0) return !1;
        return !0
      }
    }
  },
  37199: (zz, tz, sz) => {
    sz.d(tz, {
      c: () => Wz
    });
    var Fz = sz(36475);
    class Wz {
      constructor(zz, tz, sz, Wz) {
        this.normal = new Fz.p(zz, tz, sz), this.d = Wz
      }
      hsz() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Wz(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let zz = this.normal.getHashCode();
        return zz = 397 * zz ^ this.d, zz
      }
      normalize() {
        const zz = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let tz = 0;
        return 0 !== zz && (tz = 1 / zz), this.normal.x *= tz, this.normal.y *= tz, this.normal.z *= tz, this.d *= tz, this
      }
      transform(zz) {
        const tz = Wz._TmpMatrix;
        zz.invertToRef(tz);
        const sz = tz.m,
          Fz = this.normal.x,
          Xz = this.normal.y,
          Oz = this.normal.z,
          oz = this.d,
          vz = Fz * sz[0] + Xz * sz[1] + Oz * sz[2] + oz * sz[3],
          Uz = Fz * sz[4] + Xz * sz[5] + Oz * sz[6] + oz * sz[7],
          Kz = Fz * sz[8] + Xz * sz[9] + Oz * sz[10] + oz * sz[11],
          uz = Fz * sz[12] + Xz * sz[13] + Oz * sz[14] + oz * sz[15];
        return new Wz(vz, Uz, Kz, uz)
      }
      dotCoordinate(zz) {
        return this.normal.x * zz.x + this.normal.y * zz.y + this.normal.z * zz.z + this.d
      }
      copyFromPoints(zz, tz, sz) {
        const Fz = tz.x - zz.x,
          Wz = tz.y - zz.y,
          Xz = tz.z - zz.z,
          Oz = sz.x - zz.x,
          oz = sz.y - zz.y,
          vz = sz.z - zz.z,
          Uz = Wz * vz - Xz * oz,
          Kz = Xz * Oz - Fz * vz,
          uz = Fz * oz - Wz * Oz,
          Nz = Math.sqrt(Uz * Uz + Kz * Kz + uz * uz);
        let bz;
        return bz = 0 !== Nz ? 1 / Nz : 0, this.normal.x = Uz * bz, this.normal.y = Kz * bz, this.normal.z = uz * bz, this.d = -(this.normal.x * zz.x + this.normal.y * zz.y + this.normal.z * zz.z), this
      }
      isFrontFacingTo(zz, tz) {
        return Fz.p.Dot(this.normal, zz) <= tz
      }
      signedDistanceTo(zz) {
        return Fz.p.Dot(zz, this.normal) + this.d
      }
      static FromArray(zz) {
        return new Wz(zz[0], zz[1], zz[2], zz[3])
      }
      static FromPoints(zz, tz, sz) {
        const Fz = new Wz(0, 0, 0, 0);
        return Fz.copyFromPoints(zz, tz, sz), Fz
      }
      static FromPositionAndNormal(zz, tz) {
        const sz = new Wz(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(zz, tz, sz)
      }
      static FromPositionAndNormalToRef(zz, tz, sz) {
        return sz.normal.vsz(tz), sz.normal.normalize(), sz.d = -zz.dot(sz.normal), sz
      }
      static SignedDistanceToPlaneFromPositionAndNormal(zz, tz, sz) {
        const Wz = -(tz.x * zz.x + tz.y * zz.y + tz.z * zz.z);
        return Fz.p.Dot(sz, tz) + Wz
      }
    }
    Wz._TmpMatrix = Fz.e.Identity()
  },
  36473: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      Matrix: () => Fz.e,
      Quaternion: () => Fz.h,
      RegisterMathVector: () => Fz.k,
      TmpVectors: () => Fz.m,
      Vector2: () => Fz.n,
      XD: () => Fz.p,
      Vector4: () => Fz.q
    });
    var Fz = sz(36475);
    (0, Fz.k)()
  },
  37536: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Fz
    });
    class Fz {
      constructor(zz, tz, sz, Fz) {
        this.x = zz, this.y = tz, this.width = sz, this.height = Fz
      }
      toGlobal(zz, tz) {
        return new Fz(this.x * zz, this.y * tz, this.width * zz, this.height * tz)
      }
      toGlobalToRef(zz, tz, sz) {
        return sz.x = this.x * zz, sz.y = this.y * tz, sz.width = this.width * zz, sz.height = this.height * tz, this
      }
      clone() {
        return new Fz(this.x, this.y, this.width, this.height)
      }
    }
  },
  37333: (zz, tz, sz) => {
    function Fz() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (zz => {
        const tz = 16 * Math.random() | 0;
        return ("x" === zz ? tz : 3 & tz | 8).toString(16)
      }))
    }
    sz.d(tz, {
      d: () => Fz
    })
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);