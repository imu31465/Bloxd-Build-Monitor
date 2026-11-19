/*! For license information please see ad2avs.222.108b0263.chunk.js.LICENSE.txt */
export const id = 222;
export const ids = [222, 229];
export const modules = {
  37703: zz => {
    zz.exports = function(zz) {
      return null != zz && null != zz.constructor && "function" === typeof zz.constructor.isBuffer && zz.constructor.isBuffer(zz)
    }
  },
  37684: (zz, uz, bz) => {
    var Ez = bz(37692),
      nz = bz(37695),
      iz = bz(37703);
    bz.g.__TYPEDARRAY_POOL || (bz.g.__TYPEDARRAY_POOL = {
      UINT8: nz([32, 0]),
      UINT16: nz([32, 0]),
      UINT32: nz([32, 0]),
      INT8: nz([32, 0]),
      INT16: nz([32, 0]),
      INT32: nz([32, 0]),
      FLOAT: nz([32, 0]),
      DOUBLE: nz([32, 0]),
      DATA: nz([32, 0]),
      UINT8C: nz([32, 0]),
      BUFFER: nz([32, 0])
    });
    var lz = "undefined" !== typeof Uint8ClampedArray,
      Mz = bz.g.__TYPEDARRAY_POOL;
    Mz.UINT8C || (Mz.UINT8C = nz([32, 0])), Mz.BUFFER || (Mz.BUFFER = nz([32, 0]));
    var tz = Mz.DATA,
      Hz = Mz.BUFFER;

    function Oz(zz) {
      if (zz) {
        var uz = zz.length || zz.byteLength,
          bz = Ez.log2(uz);
        tz[bz].push(zz)
      }
    }

    function pz(zz) {
      zz = Ez.nextPow2(zz);
      var uz = Ez.log2(zz),
        bz = tz[uz];
      return bz.length > 0 ? bz.pop() : new ArrayBuffer(zz)
    }

    function dz(zz) {
      return new Uint8Array(pz(zz), 0, zz)
    }

    function Fz(zz) {
      return new Uint16Array(pz(2 * zz), 0, zz)
    }

    function Zz(zz) {
      return new Uint32Array(pz(4 * zz), 0, zz)
    }

    function Rz(zz) {
      return new Int8Array(pz(zz), 0, zz)
    }

    function Kz(zz) {
      return new Int16Array(pz(2 * zz), 0, zz)
    }

    function wz(zz) {
      return new Int32Array(pz(4 * zz), 0, zz)
    }

    function Xz(zz) {
      return new Float32Array(pz(4 * zz), 0, zz)
    }

    function fz(zz) {
      return new Float64Array(pz(8 * zz), 0, zz)
    }

    function sz(zz) {
      return lz ? new Uint8ClampedArray(pz(zz), 0, zz) : dz(zz)
    }

    function rz(zz) {
      return new DataView(pz(zz), 0, zz)
    }
    uz.free = function(zz) {
      if (iz(zz)) Hz[Ez.log2(zz.length)].push(zz);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(zz) && (zz = zz.buffer), !zz) return;
        var uz = zz.length || zz.byteLength,
          bz = 0 | Ez.log2(uz);
        tz[bz].push(zz)
      }
    }, uz.freeUint8 = uz.freeUint16 = uz.freeUint32 = uz.freeInt8 = uz.freeInt16 = uz.freeInt32 = uz.freeFloat32 = uz.freeFloat = uz.freeFloat64 = uz.freeDouble = uz.freeUint8Clamped = uz.freeDataView = function(zz) {
      Oz(zz.buffer)
    }, uz.freeArrayBuffer = Oz, uz.freeBuffer = function(zz) {
      Hz[Ez.log2(zz.length)].push(zz)
    }, uz.malloc = function(zz, uz) {
      if (void 0 === uz || "arraybuffer" === uz) return pz(zz);
      switch (uz) {
        case "uint8":
          return dz(zz);
        case "uint16":
          return Fz(zz);
        case "uint32":
          return Zz(zz);
        case "int8":
          return Rz(zz);
        case "int16":
          return Kz(zz);
        case "int32":
          return wz(zz);
        case "float":
        case "float32":
          return Xz(zz);
        case "double":
        case "float64":
          return fz(zz);
        case "uint8_clamped":
          return sz(zz);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return rz(zz);
        default:
          return null
      }
      return null
    }, uz.mallocArrayBuffer = pz, uz.mallocUint8 = dz, uz.mallocUint16 = Fz, uz.mallocUint32 = Zz, uz.mallocInt8 = Rz, uz.mallocInt16 = Kz, uz.mallocInt32 = wz, uz.mallocFloat32 = uz.mallocFloat = Xz, uz.mallocFloat64 = uz.mallocDouble = fz, uz.mallocUint8Clamped = sz, uz.mallocDataView = rz, uz.clearCache = function() {
      for (var zz = 0; zz < 32; ++zz) Mz.UINT8[zz].length = 0, Mz.UINT16[zz].length = 0, Mz.UINT32[zz].length = 0, Mz.INT8[zz].length = 0, Mz.INT16[zz].length = 0, Mz.INT32[zz].length = 0, Mz.FLOAT[zz].length = 0, Mz.DOUBLE[zz].length = 0, Mz.UINT8C[zz].length = 0, tz[zz].length = 0, Hz[zz].length = 0
    }
  },
  37692: (zz, uz) => {
    function bz(zz) {
      var uz = 32;
      return (zz &= -zz) && uz--, 65535 & zz && (uz -= 16), 16711935 & zz && (uz -= 8), 252645135 & zz && (uz -= 4), 858993459 & zz && (uz -= 2), 1431655765 & zz && (uz -= 1), uz
    }
    uz.INT_BITS = 32, uz.INT_MAX = 2147483647, uz.INT_MIN = -1 << 31, uz.sign = function(zz) {
      return (zz > 0) - (zz < 0)
    }, uz.abs = function(zz) {
      var uz = zz >> 31;
      return (zz ^ uz) - uz
    }, uz.min = function(zz, uz) {
      return uz ^ (zz ^ uz) & -(zz < uz)
    }, uz.max = function(zz, uz) {
      return zz ^ (zz ^ uz) & -(zz < uz)
    }, uz.isPow2 = function(zz) {
      return !(zz & zz - 1) && !!zz
    }, uz.log2 = function(zz) {
      var uz, bz;
      return uz = (zz > 65535) << 4, uz |= bz = ((zz >>>= uz) > 255) << 3, uz |= bz = ((zz >>>= bz) > 15) << 2, (uz |= bz = ((zz >>>= bz) > 3) << 1) | (zz >>>= bz) >> 1
    }, uz.log10 = function(zz) {
      return zz >= 1e9 ? 9 : zz >= 1e8 ? 8 : zz >= 1e7 ? 7 : zz >= 1e6 ? 6 : zz >= 1e5 ? 5 : zz >= 1e4 ? 4 : zz >= 1e3 ? 3 : zz >= 100 ? 2 : zz >= 10 ? 1 : 0
    }, uz.popCount = function(zz) {
      return 16843009 * ((zz = (858993459 & (zz -= zz >>> 1 & 1431655765)) + (zz >>> 2 & 858993459)) + (zz >>> 4) & 252645135) >>> 24
    }, uz.countTrailingZeros = bz, uz.nextPow2 = function(zz) {
      return zz += 0 === zz, --zz, zz |= zz >>> 1, zz |= zz >>> 2, zz |= zz >>> 4, zz |= zz >>> 8, (zz |= zz >>> 16) + 1
    }, uz.prevPow2 = function(zz) {
      return zz |= zz >>> 1, zz |= zz >>> 2, zz |= zz >>> 4, zz |= zz >>> 8, (zz |= zz >>> 16) - (zz >>> 1)
    }, uz.parity = function(zz) {
      return zz ^= zz >>> 16, zz ^= zz >>> 8, zz ^= zz >>> 4, 27030 >>> (zz &= 15) & 1
    };
    var Ez = new Array(256);
    ! function(zz) {
      for (var uz = 0; uz < 256; ++uz) {
        var bz = uz,
          Ez = uz,
          nz = 7;
        for (bz >>>= 1; bz; bz >>>= 1) Ez <<= 1, Ez |= 1 & bz, --nz;
        zz[uz] = Ez << nz & 255
      }
    }(Ez), uz.reverse = function(zz) {
      return Ez[255 & zz] << 24 | Ez[zz >>> 8 & 255] << 16 | Ez[zz >>> 16 & 255] << 8 | Ez[zz >>> 24 & 255]
    }, uz.interleave2 = function(zz, uz) {
      return (zz = 1431655765 & ((zz = 858993459 & ((zz = 252645135 & ((zz = 16711935 & ((zz &= 65535) | zz << 8)) | zz << 4)) | zz << 2)) | zz << 1)) | (uz = 1431655765 & ((uz = 858993459 & ((uz = 252645135 & ((uz = 16711935 & ((uz &= 65535) | uz << 8)) | uz << 4)) | uz << 2)) | uz << 1)) << 1
    }, uz.deinterleave2 = function(zz, uz) {
      return (zz = 65535 & ((zz = 16711935 & ((zz = 252645135 & ((zz = 858993459 & ((zz = zz >>> uz & 1431655765) | zz >>> 1)) | zz >>> 2)) | zz >>> 4)) | zz >>> 16)) << 16 >> 16
    }, uz.interleave3 = function(zz, uz, bz) {
      return zz = 1227133513 & ((zz = 3272356035 & ((zz = 251719695 & ((zz = 4278190335 & ((zz &= 1023) | zz << 16)) | zz << 8)) | zz << 4)) | zz << 2), (zz |= (uz = 1227133513 & ((uz = 3272356035 & ((uz = 251719695 & ((uz = 4278190335 & ((uz &= 1023) | uz << 16)) | uz << 8)) | uz << 4)) | uz << 2)) << 1) | (bz = 1227133513 & ((bz = 3272356035 & ((bz = 251719695 & ((bz = 4278190335 & ((bz &= 1023) | bz << 16)) | bz << 8)) | bz << 4)) | bz << 2)) << 2
    }, uz.deinterleave3 = function(zz, uz) {
      return (zz = 1023 & ((zz = 4278190335 & ((zz = 251719695 & ((zz = 3272356035 & ((zz = zz >>> uz & 1227133513) | zz >>> 2)) | zz >>> 4)) | zz >>> 8)) | zz >>> 16)) << 22 >> 22
    }, uz.nextCombination = function(zz) {
      var uz = zz | zz - 1;
      return uz + 1 | (~uz & -~uz) - 1 >>> bz(zz) + 1
    }
  },
  37681: (zz, uz, bz) => {
    zz.exports = function(zz, uz, bz) {
      switch (arguments.length) {
        case 1:
          return Ez = [], Hz(nz = zz, nz, Oz, !0), Ez;
        case 2:
          return "function" === typeof uz ? Hz(zz, zz, uz, !0) : function(zz, uz) {
            return Ez = [], Hz(zz, uz, Oz, !1), Ez
          }(zz, uz);
        case 3:
          return Hz(zz, uz, bz, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var nz
    };
    var Ez, nz = bz(37684),
      iz = bz(37706),
      lz = bz(37720);

    function Mz(zz, uz) {
      for (var bz = 0; bz < zz; ++bz)
        if (!(uz[bz] <= uz[bz + zz])) return !0;
      return !1
    }

    function tz(zz, uz, bz, Ez) {
      for (var nz = 0, iz = 0, lz = 0, tz = zz.length; lz < tz; ++lz) {
        var Hz = zz[lz];
        if (!Mz(uz, Hz)) {
          for (var Oz = 0; Oz < 2 * uz; ++Oz) bz[nz++] = Hz[Oz];
          Ez[iz++] = lz
        }
      }
      return iz
    }

    function Hz(zz, uz, bz, Ez) {
      var Mz = zz.length,
        Hz = uz.length;
      if (!(Mz <= 0 || Hz <= 0)) {
        var Oz = zz[0].length >>> 1;
        if (!(Oz <= 0)) {
          var pz, dz = nz.mallocDouble(2 * Oz * Mz),
            Fz = nz.mallocInt32(Mz);
          if ((Mz = tz(zz, Oz, dz, Fz)) > 0) {
            if (1 === Oz && Ez) iz.init(Mz), pz = iz.sweepComplete(Oz, bz, 0, Mz, dz, Fz, 0, Mz, dz, Fz);
            else {
              var Zz = nz.mallocDouble(2 * Oz * Hz),
                Rz = nz.mallocInt32(Hz);
              (Hz = tz(uz, Oz, Zz, Rz)) > 0 && (iz.init(Mz + Hz), pz = 1 === Oz ? iz.sweepBipartite(Oz, bz, 0, Mz, dz, Fz, 0, Hz, Zz, Rz) : lz(Oz, bz, Ez, Mz, dz, Fz, Hz, Zz, Rz), nz.free(Zz), nz.free(Rz))
            }
            nz.free(dz), nz.free(Fz)
          }
          return pz
        }
      }
    }

    function Oz(zz, uz) {
      Ez.push([zz, uz])
    }
  },
  37724: (zz, uz) => {
    var bz = "d",
      Ez = "ax",
      nz = "fp",
      iz = "es",
      lz = "rs",
      Mz = "re",
      tz = "rb",
      Hz = "bs",
      Oz = "be",
      pz = "bb",
      dz = [bz, Ez, "vv", lz, Mz, tz, "ri", Hz, Oz, pz, "bi"];

    function Fz(zz) {
      var uz = "bruteForce" + (zz ? "Full" : "Partial"),
        Ez = [],
        lz = dz.slice();
      zz || lz.splice(3, 0, nz);
      var Mz = ["function " + uz + "(" + lz.join() + "){"];

      function tz(uz, nz) {
        var lz = function(zz, uz, Ez) {
          var nz = "bruteForce" + (zz ? "Red" : "Blue") + (uz ? "Flip" : "") + (Ez ? "Full" : ""),
            lz = ["function ", nz, "(", dz.join(), "){", "var ", iz, "=2*", bz, ";"],
            Mz = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            tz = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (Ez ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return zz ? lz.push(Mz, "Q", ":", tz) : lz.push(tz, "Q", ":", Mz), Ez ? lz.push("if(y1<x0||x1<y0)continue;") : uz ? lz.push("if(y0<=x0||x1<y0)continue;") : lz.push("if(y0<x0||x1<y0)continue;"), lz.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), uz ? lz.push("yi,xi") : lz.push("xi,yi"), lz.push(");if(rv!==void 0)return rv;}}}"), {
            name: nz,
            code: lz.join("")
          }
        }(uz, nz, zz);
        Ez.push(lz.code), Mz.push("return " + lz.name + "(" + dz.join() + ");")
      }
      Mz.push("if(re-rs>be-bs){"), zz ? (tz(!0, !1), Mz.push("}else{"), tz(!1, !1)) : (Mz.push("if(fp){"), tz(!0, !0), Mz.push("}else{"), tz(!0, !1), Mz.push("}}else{if(fp){"), tz(!1, !0), Mz.push("}else{"), tz(!1, !1), Mz.push("}")), Mz.push("}}return " + uz);
      var Hz = Ez.join("") + Mz.join("");
      return new Function(Hz)()
    }
    uz.partial = Fz(!1), uz.full = Fz(!0)
  },
  37720: (zz, uz, bz) => {
    zz.exports = function(zz, uz, bz, iz, Oz, Az, Tz, Lz, Pz) {
      ! function(zz, uz) {
        var bz = 8 * nz.log2(uz + 1) * (zz + 1) | 0,
          iz = nz.nextPow2(sz * bz);
        oz.length < iz && (Ez.free(oz), oz = Ez.mallocInt32(iz));
        var lz = nz.nextPow2(rz * bz);
        Nz.length < lz && (Ez.free(Nz), Nz = Ez.mallocDouble(lz))
      }(zz, iz + Tz);
      var Gz, az = 0,
        Vz = 2 * zz;
      vz(az++, 0, 0, iz, 0, Tz, bz ? 16 : 0, -1 / 0, 1 / 0), bz || vz(az++, 0, 0, Tz, 0, iz, 1, -1 / 0, 1 / 0);
      for (; az > 0;) {
        var mz = (az -= 1) * sz,
          qz = oz[mz],
          hz = oz[mz + 1],
          Uz = oz[mz + 2],
          cz = oz[mz + 3],
          gz = oz[mz + 4],
          Sz = oz[mz + 5],
          yz = az * rz,
          Dz = Nz[yz],
          Qz = Nz[yz + 1],
          Wz = 1 & Sz,
          ez = !!(16 & Sz),
          jz = Oz,
          Iz = Az,
          Bz = Lz,
          Cz = Pz;
        if (Wz && (jz = Lz, Iz = Pz, Bz = Oz, Cz = Az), !(2 & Sz && hz >= (Uz = Kz(zz, qz, hz, Uz, jz, Iz, Qz))) && !(4 & Sz && (hz = wz(zz, qz, hz, Uz, jz, Iz, Dz)) >= Uz)) {
          var Yz = Uz - hz,
            kz = gz - cz;
          if (ez) {
            if (zz * Yz * (Yz + kz) < Fz) {
              if (void 0 !== (Gz = tz.scanComplete(zz, qz, uz, hz, Uz, jz, Iz, cz, gz, Bz, Cz))) return Gz;
              continue
            }
          } else {
            if (zz * Math.min(Yz, kz) < pz) {
              if (void 0 !== (Gz = lz(zz, qz, uz, Wz, hz, Uz, jz, Iz, cz, gz, Bz, Cz))) return Gz;
              continue
            }
            if (zz * Yz * kz < dz) {
              if (void 0 !== (Gz = tz.scanBipartite(zz, qz, uz, Wz, hz, Uz, jz, Iz, cz, gz, Bz, Cz))) return Gz;
              continue
            }
          }
          var zu = Zz(zz, qz, hz, Uz, jz, Iz, Dz, Qz);
          if (hz < zu)
            if (zz * (zu - hz) < pz) {
              if (void 0 !== (Gz = Mz(zz, qz + 1, uz, hz, zu, jz, Iz, cz, gz, Bz, Cz))) return Gz
            } else if (qz === zz - 2) {
            if (void 0 !== (Gz = Wz ? tz.sweepBipartite(zz, uz, cz, gz, Bz, Cz, hz, zu, jz, Iz) : tz.sweepBipartite(zz, uz, hz, zu, jz, Iz, cz, gz, Bz, Cz))) return Gz
          } else vz(az++, qz + 1, hz, zu, cz, gz, Wz, -1 / 0, 1 / 0), vz(az++, qz + 1, cz, gz, hz, zu, 1 ^ Wz, -1 / 0, 1 / 0);
          if (zu < Uz) {
            var uu = Hz(zz, qz, cz, gz, Bz, Cz),
              bu = Bz[Vz * uu + qz],
              Eu = Rz(zz, qz, uu, gz, Bz, Cz, bu);
            if (Eu < gz && vz(az++, qz, zu, Uz, Eu, gz, (4 | Wz) + (ez ? 16 : 0), bu, Qz), cz < uu && vz(az++, qz, zu, Uz, cz, uu, (2 | Wz) + (ez ? 16 : 0), Dz, bu), uu + 1 === Eu) {
              if (void 0 !== (Gz = ez ? Jz(zz, qz, uz, zu, Uz, jz, Iz, uu, Bz, Cz[uu]) : xz(zz, qz, uz, Wz, zu, Uz, jz, Iz, uu, Bz, Cz[uu]))) return Gz
            } else if (uu < Eu) {
              var nu;
              if (ez) {
                if (zu < (nu = Xz(zz, qz, zu, Uz, jz, Iz, bu))) {
                  var iu = Rz(zz, qz, zu, nu, jz, Iz, bu);
                  if (qz === zz - 2) {
                    if (zu < iu && void 0 !== (Gz = tz.sweepComplete(zz, uz, zu, iu, jz, Iz, uu, Eu, Bz, Cz))) return Gz;
                    if (iu < nu && void 0 !== (Gz = tz.sweepBipartite(zz, uz, iu, nu, jz, Iz, uu, Eu, Bz, Cz))) return Gz
                  } else zu < iu && vz(az++, qz + 1, zu, iu, uu, Eu, 16, -1 / 0, 1 / 0), iu < nu && (vz(az++, qz + 1, iu, nu, uu, Eu, 0, -1 / 0, 1 / 0), vz(az++, qz + 1, uu, Eu, iu, nu, 1, -1 / 0, 1 / 0))
                }
              } else zu < (nu = Wz ? fz(zz, qz, zu, Uz, jz, Iz, bu) : Xz(zz, qz, zu, Uz, jz, Iz, bu)) && (qz === zz - 2 ? Gz = Wz ? tz.sweepBipartite(zz, uz, uu, Eu, Bz, Cz, zu, nu, jz, Iz) : tz.sweepBipartite(zz, uz, zu, nu, jz, Iz, uu, Eu, Bz, Cz) : (vz(az++, qz + 1, zu, nu, uu, Eu, Wz, -1 / 0, 1 / 0), vz(az++, qz + 1, uu, Eu, zu, nu, 1 ^ Wz, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var Ez = bz(37684),
      nz = bz(37692),
      iz = bz(37724),
      lz = iz.partial,
      Mz = iz.full,
      tz = bz(37706),
      Hz = bz(37726),
      Oz = bz(37733),
      pz = 128,
      dz = 1 << 22,
      Fz = 1 << 22,
      Zz = Oz("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      Rz = Oz("lo===p0", ["p0"]),
      Kz = Oz("lo<p0", ["p0"]),
      wz = Oz("hi<=p0", ["p0"]),
      Xz = Oz("lo<=p0&&p0<=hi", ["p0"]),
      fz = Oz("lo<p0&&p0<=hi", ["p0"]),
      sz = 6,
      rz = 2,
      oz = Ez.mallocInt32(1024),
      Nz = Ez.mallocDouble(1024);

    function vz(zz, uz, bz, Ez, nz, iz, lz, Mz, tz) {
      var Hz = sz * zz;
      oz[Hz] = uz, oz[Hz + 1] = bz, oz[Hz + 2] = Ez, oz[Hz + 3] = nz, oz[Hz + 4] = iz, oz[Hz + 5] = lz;
      var Oz = rz * zz;
      Nz[Oz] = Mz, Nz[Oz + 1] = tz
    }

    function xz(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz, Oz) {
      var pz = 2 * zz,
        dz = tz * pz,
        Fz = Hz[dz + uz];
      zz: for (var Zz = nz, Rz = nz * pz; Zz < iz; ++Zz, Rz += pz) {
        var Kz = lz[Rz + uz],
          wz = lz[Rz + uz + zz];
        if (!(Fz < Kz || wz < Fz) && (!Ez || Fz !== Kz)) {
          for (var Xz, fz = Mz[Zz], sz = uz + 1; sz < zz; ++sz) {
            Kz = lz[Rz + sz], wz = lz[Rz + sz + zz];
            var rz = Hz[dz + sz],
              oz = Hz[dz + sz + zz];
            if (wz < rz || oz < Kz) continue zz
          }
          if (void 0 !== (Xz = Ez ? bz(Oz, fz) : bz(fz, Oz))) return Xz
        }
      }
    }

    function Jz(zz, uz, bz, Ez, nz, iz, lz, Mz, tz, Hz) {
      var Oz = 2 * zz,
        pz = Mz * Oz,
        dz = tz[pz + uz];
      zz: for (var Fz = Ez, Zz = Ez * Oz; Fz < nz; ++Fz, Zz += Oz) {
        var Rz = lz[Fz];
        if (Rz !== Hz) {
          var Kz = iz[Zz + uz],
            wz = iz[Zz + uz + zz];
          if (!(dz < Kz || wz < dz)) {
            for (var Xz = uz + 1; Xz < zz; ++Xz) {
              Kz = iz[Zz + Xz], wz = iz[Zz + Xz + zz];
              var fz = tz[pz + Xz],
                sz = tz[pz + Xz + zz];
              if (wz < fz || sz < Kz) continue zz
            }
            var rz = bz(Rz, Hz);
            if (void 0 !== rz) return rz
          }
        }
      }
    }
  },
  37726: (zz, uz, bz) => {
    zz.exports = function(zz, uz, bz, lz, Mz, tz) {
      if (lz <= bz + 1) return bz;
      var Hz = bz,
        Oz = lz,
        pz = lz + bz >>> 1,
        dz = 2 * zz,
        Fz = pz,
        Zz = Mz[dz * pz + uz];
      for (; Hz < Oz;) {
        if (Oz - Hz < nz) {
          iz(zz, uz, Hz, Oz, Mz, tz), Zz = Mz[dz * pz + uz];
          break
        }
        var Rz = Oz - Hz,
          Kz = Math.random() * Rz + Hz | 0,
          wz = Mz[dz * Kz + uz],
          Xz = Math.random() * Rz + Hz | 0,
          fz = Mz[dz * Xz + uz],
          sz = Math.random() * Rz + Hz | 0,
          rz = Mz[dz * sz + uz];
        wz <= fz ? rz >= fz ? (Fz = Xz, Zz = fz) : wz >= rz ? (Fz = Kz, Zz = wz) : (Fz = sz, Zz = rz) : fz >= rz ? (Fz = Xz, Zz = fz) : rz >= wz ? (Fz = Kz, Zz = wz) : (Fz = sz, Zz = rz);
        for (var oz = dz * (Oz - 1), Nz = dz * Fz, vz = 0; vz < dz; ++vz, ++oz, ++Nz) {
          var xz = Mz[oz];
          Mz[oz] = Mz[Nz], Mz[Nz] = xz
        }
        var Jz = tz[Oz - 1];
        tz[Oz - 1] = tz[Fz], tz[Fz] = Jz;
        for (oz = dz * (Oz - 1), Nz = dz * (Fz = Ez(zz, uz, Hz, Oz - 1, Mz, tz, Zz)), vz = 0; vz < dz; ++vz, ++oz, ++Nz) {
          xz = Mz[oz];
          Mz[oz] = Mz[Nz], Mz[Nz] = xz
        }
        Jz = tz[Oz - 1];
        if (tz[Oz - 1] = tz[Fz], tz[Fz] = Jz, pz < Fz) {
          for (Oz = Fz - 1; Hz < Oz && Mz[dz * (Oz - 1) + uz] === Zz;) Oz -= 1;
          Oz += 1
        } else {
          if (!(Fz < pz)) break;
          for (Hz = Fz + 1; Hz < Oz && Mz[dz * Hz + uz] === Zz;) Hz += 1
        }
      }
      return Ez(zz, uz, bz, pz, Mz, tz, Mz[dz * pz + uz])
    };
    var Ez = bz(37733)("lo<p0", ["p0"]),
      nz = 8;

    function iz(zz, uz, bz, Ez, nz, iz) {
      for (var lz = 2 * zz, Mz = lz * (bz + 1) + uz, tz = bz + 1; tz < Ez; ++tz, Mz += lz)
        for (var Hz = nz[Mz], Oz = tz, pz = lz * (tz - 1); Oz > bz && nz[pz + uz] > Hz; --Oz, pz -= lz) {
          for (var dz = pz, Fz = pz + lz, Zz = 0; Zz < lz; ++Zz, ++dz, ++Fz) {
            var Rz = nz[dz];
            nz[dz] = nz[Fz], nz[Fz] = Rz
          }
          var Kz = iz[Oz];
          iz[Oz] = iz[Oz - 1], iz[Oz - 1] = Kz
        }
    }
  },
  37733: zz => {
    zz.exports = function(zz, bz) {
      var Ez = "abcdef".split("").concat(bz),
        nz = [];
      zz.indexOf("lo") >= 0 && nz.push("lo=e[k+n]");
      zz.indexOf("hi") >= 0 && nz.push("hi=e[k+o]");
      return Ez.push(uz.replace("_", nz.join()).replace("$", zz)), Function.apply(void 0, Ez)
    };
    var uz = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  37714: zz => {
    zz.exports = function(zz, Ez) {
      Ez <= 4 * uz ? bz(0, Ez - 1, zz) : Hz(0, Ez - 1, zz)
    };
    var uz = 32;

    function bz(zz, uz, bz) {
      for (var Ez = 2 * (zz + 1), nz = zz + 1; nz <= uz; ++nz) {
        for (var iz = bz[Ez++], lz = bz[Ez++], Mz = nz, tz = Ez - 2; Mz-- > zz;) {
          var Hz = bz[tz - 2],
            Oz = bz[tz - 1];
          if (Hz < iz) break;
          if (Hz === iz && Oz < lz) break;
          bz[tz] = Hz, bz[tz + 1] = Oz, tz -= 2
        }
        bz[tz] = iz, bz[tz + 1] = lz
      }
    }

    function Ez(zz, uz, bz) {
      uz *= 2;
      var Ez = bz[zz *= 2],
        nz = bz[zz + 1];
      bz[zz] = bz[uz], bz[zz + 1] = bz[uz + 1], bz[uz] = Ez, bz[uz + 1] = nz
    }

    function nz(zz, uz, bz) {
      uz *= 2, bz[zz *= 2] = bz[uz], bz[zz + 1] = bz[uz + 1]
    }

    function iz(zz, uz, bz, Ez) {
      uz *= 2, bz *= 2;
      var nz = Ez[zz *= 2],
        iz = Ez[zz + 1];
      Ez[zz] = Ez[uz], Ez[zz + 1] = Ez[uz + 1], Ez[uz] = Ez[bz], Ez[uz + 1] = Ez[bz + 1], Ez[bz] = nz, Ez[bz + 1] = iz
    }

    function lz(zz, uz, bz, Ez, nz) {
      uz *= 2, nz[zz *= 2] = nz[uz], nz[uz] = bz, nz[zz + 1] = nz[uz + 1], nz[uz + 1] = Ez
    }

    function Mz(zz, uz, bz) {
      uz *= 2;
      var Ez = bz[zz *= 2],
        nz = bz[uz];
      return !(Ez < nz) && (Ez !== nz || bz[zz + 1] > bz[uz + 1])
    }

    function tz(zz, uz, bz, Ez) {
      var nz = Ez[zz *= 2];
      return nz < uz || nz === uz && Ez[zz + 1] < bz
    }

    function Hz(zz, Oz, pz) {
      var dz = (Oz - zz + 1) / 6 | 0,
        Fz = zz + dz,
        Zz = Oz - dz,
        Rz = zz + Oz >> 1,
        Kz = Rz - dz,
        wz = Rz + dz,
        Xz = Fz,
        fz = Kz,
        sz = Rz,
        rz = wz,
        oz = Zz,
        Nz = zz + 1,
        vz = Oz - 1,
        xz = 0;
      Mz(Xz, fz, pz) && (xz = Xz, Xz = fz, fz = xz), Mz(rz, oz, pz) && (xz = rz, rz = oz, oz = xz), Mz(Xz, sz, pz) && (xz = Xz, Xz = sz, sz = xz), Mz(fz, sz, pz) && (xz = fz, fz = sz, sz = xz), Mz(Xz, rz, pz) && (xz = Xz, Xz = rz, rz = xz), Mz(sz, rz, pz) && (xz = sz, sz = rz, rz = xz), Mz(fz, oz, pz) && (xz = fz, fz = oz, oz = xz), Mz(fz, sz, pz) && (xz = fz, fz = sz, sz = xz), Mz(rz, oz, pz) && (xz = rz, rz = oz, oz = xz);
      for (var Jz = pz[2 * fz], Az = pz[2 * fz + 1], Tz = pz[2 * rz], Lz = pz[2 * rz + 1], Pz = 2 * Xz, Gz = 2 * sz, az = 2 * oz, Vz = 2 * Fz, mz = 2 * Rz, qz = 2 * Zz, hz = 0; hz < 2; ++hz) {
        var Uz = pz[Pz + hz],
          cz = pz[Gz + hz],
          gz = pz[az + hz];
        pz[Vz + hz] = Uz, pz[mz + hz] = cz, pz[qz + hz] = gz
      }
      nz(Kz, zz, pz), nz(wz, Oz, pz);
      for (var Sz = Nz; Sz <= vz; ++Sz)
        if (tz(Sz, Jz, Az, pz)) Sz !== Nz && Ez(Sz, Nz, pz), ++Nz;
        else if (!tz(Sz, Tz, Lz, pz))
        for (;;) {
          if (tz(vz, Tz, Lz, pz)) {
            tz(vz, Jz, Az, pz) ? (iz(Sz, Nz, vz, pz), ++Nz, --vz) : (Ez(Sz, vz, pz), --vz);
            break
          }
          if (--vz < Sz) break
        }
      lz(zz, Nz - 1, Jz, Az, pz), lz(Oz, vz + 1, Tz, Lz, pz), Nz - 2 - zz <= uz ? bz(zz, Nz - 2, pz) : Hz(zz, Nz - 2, pz), Oz - (vz + 2) <= uz ? bz(vz + 2, Oz, pz) : Hz(vz + 2, Oz, pz), vz - Nz <= uz ? bz(Nz, vz, pz) : Hz(Nz, vz, pz)
    }
  },
  37706: (zz, uz, bz) => {
    zz.exports = {
      init: function(zz) {
        var uz = nz.nextPow2(zz);
        tz.length < uz && (Ez.free(tz), tz = Ez.mallocInt32(uz));
        Hz.length < uz && (Ez.free(Hz), Hz = Ez.mallocInt32(uz));
        Oz.length < uz && (Ez.free(Oz), Oz = Ez.mallocInt32(uz));
        pz.length < uz && (Ez.free(pz), pz = Ez.mallocInt32(uz));
        dz.length < uz && (Ez.free(dz), dz = Ez.mallocInt32(uz));
        Fz.length < uz && (Ez.free(Fz), Fz = Ez.mallocInt32(uz));
        var bz = 8 * uz;
        Zz.length < bz && (Ez.free(Zz), Zz = Ez.mallocDouble(bz))
      },
      sweepBipartite: function(zz, uz, bz, Ez, nz, Mz, dz, Fz, wz, Xz) {
        for (var fz = 0, sz = 2 * zz, rz = zz - 1, oz = sz - 1, Nz = bz; Nz < Ez; ++Nz) {
          var vz = Mz[Nz],
            xz = sz * Nz;
          Zz[fz++] = nz[xz + rz], Zz[fz++] = -(vz + 1), Zz[fz++] = nz[xz + oz], Zz[fz++] = vz
        }
        for (Nz = dz; Nz < Fz; ++Nz) {
          vz = Xz[Nz] + lz;
          var Jz = sz * Nz;
          Zz[fz++] = wz[Jz + rz], Zz[fz++] = -vz, Zz[fz++] = wz[Jz + oz], Zz[fz++] = vz
        }
        var Az = fz >>> 1;
        iz(Zz, Az);
        var Tz = 0,
          Lz = 0;
        for (Nz = 0; Nz < Az; ++Nz) {
          var Pz = 0 | Zz[2 * Nz + 1];
          if (Pz >= lz) Rz(Oz, pz, Lz--, Pz = Pz - lz | 0);
          else if (Pz >= 0) Rz(tz, Hz, Tz--, Pz);
          else if (Pz <= -lz) {
            Pz = -Pz - lz | 0;
            for (var Gz = 0; Gz < Tz; ++Gz) {
              if (void 0 !== (az = uz(tz[Gz], Pz))) return az
            }
            Kz(Oz, pz, Lz++, Pz)
          } else {
            Pz = -Pz - 1 | 0;
            for (Gz = 0; Gz < Lz; ++Gz) {
              var az;
              if (void 0 !== (az = uz(Pz, Oz[Gz]))) return az
            }
            Kz(tz, Hz, Tz++, Pz)
          }
        }
      },
      sweepComplete: function(zz, uz, bz, Ez, nz, lz, Mz, wz, Xz, fz) {
        for (var sz = 0, rz = 2 * zz, oz = zz - 1, Nz = rz - 1, vz = bz; vz < Ez; ++vz) {
          var xz = lz[vz] + 1 << 1,
            Jz = rz * vz;
          Zz[sz++] = nz[Jz + oz], Zz[sz++] = -xz, Zz[sz++] = nz[Jz + Nz], Zz[sz++] = xz
        }
        for (vz = Mz; vz < wz; ++vz) {
          xz = fz[vz] + 1 << 1;
          var Az = rz * vz;
          Zz[sz++] = Xz[Az + oz], Zz[sz++] = 1 | -xz, Zz[sz++] = Xz[Az + Nz], Zz[sz++] = 1 | xz
        }
        var Tz = sz >>> 1;
        iz(Zz, Tz);
        var Lz = 0,
          Pz = 0,
          Gz = 0;
        for (vz = 0; vz < Tz; ++vz) {
          var az = 0 | Zz[2 * vz + 1],
            Vz = 1 & az;
          if (vz < Tz - 1 && az >> 1 === Zz[2 * vz + 3] >> 1 && (Vz = 2, vz += 1), az < 0) {
            for (var mz = -(az >> 1) - 1, qz = 0; qz < Gz; ++qz) {
              if (void 0 !== (hz = uz(dz[qz], mz))) return hz
            }
            if (0 !== Vz)
              for (qz = 0; qz < Lz; ++qz) {
                if (void 0 !== (hz = uz(tz[qz], mz))) return hz
              }
            if (1 !== Vz)
              for (qz = 0; qz < Pz; ++qz) {
                var hz;
                if (void 0 !== (hz = uz(Oz[qz], mz))) return hz
              }
            0 === Vz ? Kz(tz, Hz, Lz++, mz) : 1 === Vz ? Kz(Oz, pz, Pz++, mz) : 2 === Vz && Kz(dz, Fz, Gz++, mz)
          } else {
            mz = (az >> 1) - 1;
            0 === Vz ? Rz(tz, Hz, Lz--, mz) : 1 === Vz ? Rz(Oz, pz, Pz--, mz) : 2 === Vz && Rz(dz, Fz, Gz--, mz)
          }
        }
      },
      scanBipartite: function(zz, uz, bz, Ez, nz, Mz, Oz, pz, dz, Fz, wz, Xz) {
        var fz = 0,
          sz = 2 * zz,
          rz = uz,
          oz = uz + zz,
          Nz = 1,
          vz = 1;
        Ez ? vz = lz : Nz = lz;
        for (var xz = nz; xz < Mz; ++xz) {
          var Jz = xz + Nz,
            Az = sz * xz;
          Zz[fz++] = Oz[Az + rz], Zz[fz++] = -Jz, Zz[fz++] = Oz[Az + oz], Zz[fz++] = Jz
        }
        for (xz = dz; xz < Fz; ++xz) {
          Jz = xz + vz;
          var Tz = sz * xz;
          Zz[fz++] = wz[Tz + rz], Zz[fz++] = -Jz
        }
        var Lz = fz >>> 1;
        iz(Zz, Lz);
        var Pz = 0;
        for (xz = 0; xz < Lz; ++xz) {
          var Gz = 0 | Zz[2 * xz + 1];
          if (Gz < 0) {
            var az = !1;
            if ((Jz = -Gz) >= lz ? (az = !Ez, Jz -= lz) : (az = !!Ez, Jz -= 1), az) Kz(tz, Hz, Pz++, Jz);
            else {
              var Vz = Xz[Jz],
                mz = sz * Jz,
                qz = wz[mz + uz + 1],
                hz = wz[mz + uz + 1 + zz];
              zz: for (var Uz = 0; Uz < Pz; ++Uz) {
                var cz = tz[Uz],
                  gz = sz * cz;
                if (!(hz < Oz[gz + uz + 1] || Oz[gz + uz + 1 + zz] < qz)) {
                  for (var Sz = uz + 2; Sz < zz; ++Sz)
                    if (wz[mz + Sz + zz] < Oz[gz + Sz] || Oz[gz + Sz + zz] < wz[mz + Sz]) continue zz;
                  var yz, Dz = pz[cz];
                  if (void 0 !== (yz = Ez ? bz(Vz, Dz) : bz(Dz, Vz))) return yz
                }
              }
            }
          } else Rz(tz, Hz, Pz--, Gz - Nz)
        }
      },
      scanComplete: function(zz, uz, bz, Ez, nz, Mz, Hz, Oz, pz, dz, Fz) {
        for (var Rz = 0, Kz = 2 * zz, wz = uz, Xz = uz + zz, fz = Ez; fz < nz; ++fz) {
          var sz = fz + lz,
            rz = Kz * fz;
          Zz[Rz++] = Mz[rz + wz], Zz[Rz++] = -sz, Zz[Rz++] = Mz[rz + Xz], Zz[Rz++] = sz
        }
        for (fz = Oz; fz < pz; ++fz) {
          sz = fz + 1;
          var oz = Kz * fz;
          Zz[Rz++] = dz[oz + wz], Zz[Rz++] = -sz
        }
        var Nz = Rz >>> 1;
        iz(Zz, Nz);
        var vz = 0;
        for (fz = 0; fz < Nz; ++fz) {
          var xz = 0 | Zz[2 * fz + 1];
          if (xz < 0) {
            if ((sz = -xz) >= lz) tz[vz++] = sz - lz;
            else {
              var Jz = Fz[sz -= 1],
                Az = Kz * sz,
                Tz = dz[Az + uz + 1],
                Lz = dz[Az + uz + 1 + zz];
              zz: for (var Pz = 0; Pz < vz; ++Pz) {
                var Gz = tz[Pz],
                  az = Hz[Gz];
                if (az === Jz) break;
                var Vz = Kz * Gz;
                if (!(Lz < Mz[Vz + uz + 1] || Mz[Vz + uz + 1 + zz] < Tz)) {
                  for (var mz = uz + 2; mz < zz; ++mz)
                    if (dz[Az + mz + zz] < Mz[Vz + mz] || Mz[Vz + mz + zz] < dz[Az + mz]) continue zz;
                  var qz = bz(az, Jz);
                  if (void 0 !== qz) return qz
                }
              }
            }
          } else {
            for (sz = xz - lz, Pz = vz - 1; Pz >= 0; --Pz)
              if (tz[Pz] === sz) {
                for (mz = Pz + 1; mz < vz; ++mz) tz[mz - 1] = tz[mz];
                break
              }-- vz
          }
        }
      }
    };
    var Ez = bz(37684),
      nz = bz(37692),
      iz = bz(37714),
      lz = 1 << 28,
      Mz = 1024,
      tz = Ez.mallocInt32(Mz),
      Hz = Ez.mallocInt32(Mz),
      Oz = Ez.mallocInt32(Mz),
      pz = Ez.mallocInt32(Mz),
      dz = Ez.mallocInt32(Mz),
      Fz = Ez.mallocInt32(Mz),
      Zz = Ez.mallocDouble(8192);

    function Rz(zz, uz, bz, Ez) {
      var nz = uz[Ez],
        iz = zz[bz - 1];
      zz[nz] = iz, uz[iz] = nz
    }

    function Kz(zz, uz, bz, Ez) {
      zz[bz] = Ez, uz[Ez] = bz
    }
  },
  37695: zz => {
    function uz(zz, bz, Ez) {
      var nz = 0 | zz[Ez];
      if (nz <= 0) return [];
      var iz, lz = new Array(nz);
      if (Ez === zz.length - 1)
        for (iz = 0; iz < nz; ++iz) lz[iz] = bz;
      else
        for (iz = 0; iz < nz; ++iz) lz[iz] = uz(zz, bz, Ez + 1);
      return lz
    }
    zz.exports = function(zz, bz) {
      switch ("undefined" === typeof bz && (bz = 0), typeof zz) {
        case "number":
          if (zz > 0) return function(zz, uz) {
            var bz, Ez;
            for (bz = new Array(zz), Ez = 0; Ez < zz; ++Ez) bz[Ez] = uz;
            return bz
          }(0 | zz, bz);
          break;
        case "object":
          if ("number" === typeof zz.length) return uz(zz, bz, 0)
      }
      return []
    }
  },
  37646: (zz, uz, bz) => {
    zz.exports = function() {
      var zz = this;
      this.components = {}, this.comps = this.components;
      var uz = this.components,
        bz = 1,
        nz = {},
        iz = [],
        lz = [],
        Mz = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function tz(zz, bz) {
        var Ez = uz[bz],
          iz = nz[bz],
          lz = iz.hash[zz];
        lz && (iz.remove(zz), Ez.aJ && (Ez.multi ? (lz.forEach((uz => {
          uz && Ez.aJ(zz, uz)
        })), lz.length = 0) : Ez.aJ(zz, lz)), Mz.removals.push(iz), Hz())
      }

      function Hz() {
        Mz.timeout || (Mz.timeout = !0, setTimeout(Oz, 1))
      }

      function Oz() {
        Mz.timeout = !1, pz()
      }

      function pz() {
        Mz.multiComps.length && function(zz) {
          for (var uz = 0; uz < zz.length; uz++) {
            var {
              entID: bz,
              data: Ez
            } = zz[uz], nz = Ez.hash[bz];
            if (nz) {
              for (var iz = 0; iz < nz.length; iz++) nz[iz] || (nz.splice(iz, 1), iz--);
              0 === nz.length && (Ez.remove(bz), Mz.removals.push(Ez))
            }
          }
          zz.length = 0
        }(Mz.multiComps), Mz.removals.length && function(zz) {
          for (var uz = 0; uz < zz.length; uz++) {
            zz[uz].flush()
          }
          zz.length = 0
        }(Mz.removals)
      }
      this.gR = nz, this._systems = iz, this._renderSystems = lz, this.jy = function(uz) {
        var Ez = bz++;
        return Array.isArray(uz) && uz.forEach((uz => zz.wL(Ez, uz))), Ez
      }, this.deleteEntity = function(uz) {
        return Object.keys(nz).forEach((zz => {
          nz[zz].hash[uz] && tz(uz, zz)
        })), zz
      }, this.Euz = function(zz) {
        if (!zz) throw new Error("Missing component definition");
        var bz = zz.name;
        if (!bz) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof bz) throw new Error("Component name must be a string.");
        if ("" === bz) throw new Error("Component name must be a non-empty string.");
        if (nz[bz]) throw new Error(`Component ${bz} already exists.`);
        var Mz = {};
        return Mz.name = bz, Mz.multi = !!zz.multi, Mz.order = isNaN(zz.order) ? 99 : zz.order, Mz.stateConstructor = zz.stateConstructor || null, Mz.state = zz.state || {}, Mz.Qr = zz.Qr || null, Mz.aJ = zz.aJ || null, Mz.system = zz.system || null, Mz.iN = zz.iN || null, uz[bz] = Mz, nz[bz] = new Ez, nz[bz]._pendingMultiCleanup = !1, nz[bz]._multiCleanupIDs = Mz.multi ? [] : null, Mz.system && (iz.push(bz), iz.sort(((zz, bz) => uz[zz].order - uz[bz].order))), Mz.iN && (lz.push(bz), lz.sort(((zz, bz) => uz[zz].order - uz[bz].order))), bz
      }, this.overwriteComponent = function(zz, bz) {
        var Ez = uz[zz];
        if (!Ez) throw new Error(`Unknown component: ${zz}`);
        if (!bz) throw new Error("Missing component definition");
        if (Ez.name !== bz.name) throw new Error("Overwriting component must use the same name property.");
        var Mz = {};
        Mz.name = zz, Mz.multi = !!bz.multi, Mz.order = isNaN(bz.order) ? 99 : bz.order, Mz.state = bz.state || {}, Mz.Qr = bz.Qr || null, Mz.aJ = bz.aJ || null, Mz.system = bz.system || null, Mz.iN = bz.iN || null, uz[zz] = Mz, nz[zz]._pendingMultiCleanup = !1, nz[zz]._multiCleanupIDs = Mz.multi ? [] : null;
        var tz = iz.indexOf(zz);
        Mz.system && tz < 0 && iz.push(zz), !Mz.system && tz >= 0 && iz.splice(tz, 1), iz.sort(((zz, bz) => uz[zz].order - uz[bz].order));
        var Hz = lz.indexOf(zz);
        Mz.iN && Hz < 0 && lz.push(zz), !Mz.iN && Hz >= 0 && lz.splice(Hz, 1), lz.sort(((zz, bz) => uz[zz].order - uz[bz].order));
        var Oz = Mz.state;
        return this.dL(zz).forEach((zz => {
          for (var uz in Oz) uz in zz || (zz[uz] = Oz[uz]);
          Mz.Qr && Mz.Qr(zz.RL, zz)
        })), zz
      }, this.deleteComponent = function(bz) {
        var Ez = nz[bz];
        if (!Ez) throw new Error(`Unknown component: ${bz}`);
        Ez.flush(), Ez.list.forEach((zz => {
          zz && tz(zz.RL || zz[0].RL, bz)
        }));
        var Mz = iz.indexOf(bz),
          Hz = lz.indexOf(bz);
        return Mz > -1 && iz.splice(Mz, 1), Hz > -1 && lz.splice(Hz, 1), nz[bz].dispose(), delete nz[bz], delete uz[bz], zz
      }, this.wL = function(zz, bz, Ez) {
        var iz, lz = uz[bz],
          Mz = nz[bz];
        if (!Mz) throw new Error(`Unknown component: ${bz}.`);
        if (Mz.hash[zz] && !lz.multi) throw new Error(`Entity ${zz} already has component: ${bz}.`);
        if (lz.stateConstructor) {
          if (!(iz = new lz.stateConstructor).hasOwnProperty("RL")) throw new Error(`Component ${lz.name} stateConstructor type does not have property __id`);
          Object.assign(iz, lz.state, Ez)
        } else iz = {
          RL: zz,
          ...lz.state,
          ...Ez
        };
        if (iz.RL = zz, lz.multi) {
          var tz = Mz.hash[zz];
          tz || (tz = [], Mz.add(zz, tz)), tz.push(iz)
        } else Mz.add(zz, iz);
        return lz.Qr && lz.Qr(zz, iz), this
      }, this.U1 = function(zz, uz) {
        var bz = nz[uz];
        if (!bz) throw new Error(`Unknown component: ${uz}.`);
        return !!bz.hash[zz]
      }, this.fL = function(uz, bz) {
        if (!nz[bz]) throw new Error(`Unknown component: ${bz}.`);
        return tz(uz, bz), zz
      }, this.getState = function(zz, uz) {
        var bz = nz[uz];
        if (!bz) throw new Error(`Unknown component: ${uz}.`);
        return bz.hash[zz]
      }, this.dL = function(zz) {
        var uz = nz[zz];
        if (!uz) throw new Error(`Unknown component: ${zz}.`);
        return pz(), uz.list
      }, this.Gzz = function(zz) {
        if (!nz[zz]) throw new Error(`Unknown component: ${zz}.`);
        var uz = nz[zz].hash;
        return zz => uz[zz]
      }, this.gzz = function(zz) {
        if (!nz[zz]) throw new Error(`Unknown component: ${zz}.`);
        var uz = nz[zz].hash;
        return zz => !!uz[zz]
      }, this.sd = function(bz) {
        pz();
        for (var Ez = 0; Ez < iz.length; Ez++) {
          var lz = iz[Ez],
            Mz = uz[lz],
            tz = nz[lz];
          Mz.system(bz, tz.list), pz()
        }
        return zz
      }, this.render = function(bz) {
        pz();
        for (var Ez = 0; Ez < lz.length; Ez++) {
          var iz = lz[Ez],
            Mz = uz[iz],
            tz = nz[iz];
          Mz.iN(bz, tz.list), pz()
        }
        return zz
      }, this.removeMultiComponent = function(bz, Ez, iz) {
        var lz = uz[Ez],
          tz = nz[Ez];
        if (!tz) throw new Error(`Unknown component: ${Ez}.`);
        if (!lz.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(zz, uz, bz, Ez) {
          var nz = bz.hash[zz];
          if (nz) {
            var iz = nz[Ez];
            iz && (nz[Ez] = null, uz.aJ && uz.aJ(zz, iz), Mz.multiComps.push({
              entID: zz,
              data: bz
            }), Hz())
          }
        }(bz, lz, tz, iz), zz
      }
    };
    var Ez = bz(37648)
  },
  37648: zz => {
    function uz(zz, uz) {
      var bz = zz._map[uz];
      if (delete zz.hash[uz], delete zz._map[uz], bz === zz.list.length - 1) zz.list.pop(), zz._idList.pop();
      else {
        var Ez = zz.list.pop();
        zz.list[bz] = Ez;
        var nz = zz._idList.pop();
        zz._idList[bz] = nz, zz._map[nz] = bz
      }
    }
    zz.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(zz, uz) {
        if ("number" === typeof this._map[zz]) {
          var bz = this._map[zz];
          this.hash[zz] = uz, this.list[bz] = uz, this._idList[bz] = zz
        } else this._map[zz] = this.list.length, this.hash[zz] = uz, this.list.push(uz), this._idList.push(zz)
      }
      remove(zz) {
        var uz = this._map[zz];
        this.hash[zz] = null, this.list[uz] = null, this._pendingRemovals.push(zz)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var zz = 0; zz < this._pendingRemovals.length; zz++) {
          var bz = this._pendingRemovals[zz];
          null === this.hash[bz] && uz(this, bz)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  37190: zz => {
    zz.exports = function(zz) {
      for (var uz = new Array(zz), bz = 0; bz < zz; ++bz) uz[bz] = bz;
      return uz
    }
  },
  37194: zz => {
    function uz(zz) {
      return !!zz.constructor && "function" === typeof zz.constructor.isBuffer && zz.constructor.isBuffer(zz)
    }
    zz.exports = function(zz) {
      return null != zz && (uz(zz) || function(zz) {
        return "function" === typeof zz.readFloatLE && "function" === typeof zz.slice && uz(zz.slice(0, 0))
      }(zz) || !!zz._isBuffer)
    }
  },
  37465: (zz, uz, bz) => {
    zz = bz.nmd(zz);
    var Ez = "__lodash_hash_undefined__",
      nz = 9007199254740991,
      iz = "[object Arguments]",
      lz = "[object Boolean]",
      Mz = "[object Date]",
      tz = "[object Function]",
      Hz = "[object GeneratorFunction]",
      Oz = "[object Map]",
      pz = "[object Number]",
      dz = "[object Object]",
      Fz = "[object Promise]",
      Zz = "[object RegExp]",
      Rz = "[object Set]",
      Kz = "[object String]",
      wz = "[object Symbol]",
      Xz = "[object WeakMap]",
      fz = "[object ArrayBuffer]",
      sz = "[object DataView]",
      rz = "[object Float32Array]",
      oz = "[object Float64Array]",
      Nz = "[object Int8Array]",
      vz = "[object Int16Array]",
      xz = "[object Int32Array]",
      Jz = "[object Uint8Array]",
      Az = "[object Uint8ClampedArray]",
      Tz = "[object Uint16Array]",
      Lz = "[object Uint32Array]",
      Pz = /\w*$/,
      Gz = /^\[object .+?Constructor\]$/,
      az = /^(?:0|[1-9]\d*)$/,
      Vz = {};
    Vz[iz] = Vz["[object Array]"] = Vz[fz] = Vz[sz] = Vz[lz] = Vz[Mz] = Vz[rz] = Vz[oz] = Vz[Nz] = Vz[vz] = Vz[xz] = Vz[Oz] = Vz[pz] = Vz[dz] = Vz[Zz] = Vz[Rz] = Vz[Kz] = Vz[wz] = Vz[Jz] = Vz[Az] = Vz[Tz] = Vz[Lz] = !0, Vz["[object Error]"] = Vz[tz] = Vz[Xz] = !1;
    var mz = "object" == typeof bz.g && bz.g && bz.g.Object === Object && bz.g,
      qz = "object" == typeof self && self && self.Object === Object && self,
      hz = mz || qz || Function("return this")(),
      Uz = uz && !uz.nodeType && uz,
      cz = Uz && zz && !zz.nodeType && zz,
      gz = cz && cz.exports === Uz;

    function Sz(zz, uz) {
      return zz.set(uz[0], uz[1]), zz
    }

    function yz(zz, uz) {
      return zz.add(uz), zz
    }

    function Dz(zz, uz, bz, Ez) {
      var nz = -1,
        iz = zz ? zz.length : 0;
      for (Ez && iz && (bz = zz[++nz]); ++nz < iz;) bz = uz(bz, zz[nz], nz, zz);
      return bz
    }

    function Qz(zz) {
      var uz = !1;
      if (null != zz && "function" != typeof zz.toString) try {
        uz = !!(zz + "")
      } catch (bz) {}
      return uz
    }

    function Wz(zz) {
      var uz = -1,
        bz = Array(zz.size);
      return zz.forEach((function(zz, Ez) {
        bz[++uz] = [Ez, zz]
      })), bz
    }

    function ez(zz, uz) {
      return function(bz) {
        return zz(uz(bz))
      }
    }

    function jz(zz) {
      var uz = -1,
        bz = Array(zz.size);
      return zz.forEach((function(zz) {
        bz[++uz] = zz
      })), bz
    }
    var Iz = Array.prototype,
      Bz = Function.prototype,
      Cz = Object.prototype,
      Yz = hz["__core-js_shared__"],
      kz = function() {
        var zz = /[^.]+$/.exec(Yz && Yz.keys && Yz.keys.IE_PROTO || "");
        return zz ? "Symbol(src)_1." + zz : ""
      }(),
      zu = Bz.toString,
      uu = Cz.hasOwnProperty,
      bu = Cz.toString,
      Eu = RegExp("^" + zu.call(uu).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      nu = gz ? hz.gZ : void 0,
      iu = hz.Symbol,
      lu = hz.Uint8Array,
      Mu = ez(Object.getPrototypeOf, Object),
      tu = Object.create,
      Hu = Cz.propertyIsEnumerable,
      Ou = Iz.splice,
      pu = Object.getOwnPropertySymbols,
      du = nu ? nu.isBuffer : void 0,
      Fu = ez(Object.keys, Object),
      Zu = gu(hz, "DataView"),
      Ru = gu(hz, "Map"),
      Ku = gu(hz, "Promise"),
      wu = gu(hz, "Set"),
      Xu = gu(hz, "WeakMap"),
      fu = gu(Object, "create"),
      su = Wu(Zu),
      ru = Wu(Ru),
      ou = Wu(Ku),
      Nu = Wu(wu),
      vu = Wu(Xu),
      xu = iu ? iu.prototype : void 0,
      Ju = xu ? xu.valueOf : void 0;

    function Au(zz) {
      var uz = -1,
        bz = zz ? zz.length : 0;
      for (this.clear(); ++uz < bz;) {
        var Ez = zz[uz];
        this.set(Ez[0], Ez[1])
      }
    }

    function Tu(zz) {
      var uz = -1,
        bz = zz ? zz.length : 0;
      for (this.clear(); ++uz < bz;) {
        var Ez = zz[uz];
        this.set(Ez[0], Ez[1])
      }
    }

    function Lu(zz) {
      var uz = -1,
        bz = zz ? zz.length : 0;
      for (this.clear(); ++uz < bz;) {
        var Ez = zz[uz];
        this.set(Ez[0], Ez[1])
      }
    }

    function Pu(zz) {
      this.__data__ = new Tu(zz)
    }

    function Gu(zz, uz) {
      var bz = ju(zz) || function(zz) {
          return function(zz) {
            return function(zz) {
              return !!zz && "object" == typeof zz
            }(zz) && Iu(zz)
          }(zz) && uu.call(zz, "callee") && (!Hu.call(zz, "callee") || bu.call(zz) == iz)
        }(zz) ? function(zz, uz) {
          for (var bz = -1, Ez = Array(zz); ++bz < zz;) Ez[bz] = uz(bz);
          return Ez
        }(zz.length, String) : [],
        Ez = bz.length,
        nz = !!Ez;
      for (var lz in zz) !uz && !uu.call(zz, lz) || nz && ("length" == lz || Du(lz, Ez)) || bz.push(lz);
      return bz
    }

    function au(zz, uz, bz) {
      var Ez = zz[uz];
      uu.call(zz, uz) && eu(Ez, bz) && (void 0 !== bz || uz in zz) || (zz[uz] = bz)
    }

    function Vu(zz, uz) {
      for (var bz = zz.length; bz--;)
        if (eu(zz[bz][0], uz)) return bz;
      return -1
    }

    function mu(zz, uz, bz, Ez, nz, Fz, Xz) {
      var Gz;
      if (Ez && (Gz = Fz ? Ez(zz, nz, Fz, Xz) : Ez(zz)), void 0 !== Gz) return Gz;
      if (!Yu(zz)) return zz;
      var az = ju(zz);
      if (az) {
        if (Gz = function(zz) {
            var uz = zz.length,
              bz = zz.constructor(uz);
            uz && "string" == typeof zz[0] && uu.call(zz, "index") && (bz.index = zz.index, bz.input = zz.input);
            return bz
          }(zz), !uz) return function(zz, uz) {
          var bz = -1,
            Ez = zz.length;
          uz || (uz = Array(Ez));
          for (; ++bz < Ez;) uz[bz] = zz[bz];
          return uz
        }(zz, Gz)
      } else {
        var mz = yu(zz),
          qz = mz == tz || mz == Hz;
        if (Bu(zz)) return function(zz, uz) {
          if (uz) return zz.slice();
          var bz = new zz.constructor(zz.length);
          return zz.copy(bz), bz
        }(zz, uz);
        if (mz == dz || mz == iz || qz && !Fz) {
          if (Qz(zz)) return Fz ? zz : {};
          if (Gz = function(zz) {
              return "function" != typeof zz.constructor || Qu(zz) ? {} : (uz = Mu(zz), Yu(uz) ? tu(uz) : {});
              var uz
            }(qz ? {} : zz), !uz) return function(zz, uz) {
            return Uu(zz, Su(zz), uz)
          }(zz, function(zz, uz) {
            return zz && Uu(uz, ku(uz), zz)
          }(Gz, zz))
        } else {
          if (!Vz[mz]) return Fz ? zz : {};
          Gz = function(zz, uz, bz, Ez) {
            var nz = zz.constructor;
            switch (uz) {
              case fz:
                return hu(zz);
              case lz:
              case Mz:
                return new nz(+zz);
              case sz:
                return function(zz, uz) {
                  var bz = uz ? hu(zz.buffer) : zz.buffer;
                  return new zz.constructor(bz, zz.byteOffset, zz.byteLength)
                }(zz, Ez);
              case rz:
              case oz:
              case Nz:
              case vz:
              case xz:
              case Jz:
              case Az:
              case Tz:
              case Lz:
                return function(zz, uz) {
                  var bz = uz ? hu(zz.buffer) : zz.buffer;
                  return new zz.constructor(bz, zz.byteOffset, zz.length)
                }(zz, Ez);
              case Oz:
                return function(zz, uz, bz) {
                  var Ez = uz ? bz(Wz(zz), !0) : Wz(zz);
                  return Dz(Ez, Sz, new zz.constructor)
                }(zz, Ez, bz);
              case pz:
              case Kz:
                return new nz(zz);
              case Zz:
                return function(zz) {
                  var uz = new zz.constructor(zz.source, Pz.exec(zz));
                  return uz.lastIndex = zz.lastIndex, uz
                }(zz);
              case Rz:
                return function(zz, uz, bz) {
                  var Ez = uz ? bz(jz(zz), !0) : jz(zz);
                  return Dz(Ez, yz, new zz.constructor)
                }(zz, Ez, bz);
              case wz:
                return iz = zz, Ju ? Object(Ju.call(iz)) : {}
            }
            var iz
          }(zz, mz, mu, uz)
        }
      }
      Xz || (Xz = new Pu);
      var hz = Xz.get(zz);
      if (hz) return hz;
      if (Xz.set(zz, Gz), !az) var Uz = bz ? function(zz) {
        return function(zz, uz, bz) {
          var Ez = uz(zz);
          return ju(zz) ? Ez : function(zz, uz) {
            for (var bz = -1, Ez = uz.length, nz = zz.length; ++bz < Ez;) zz[nz + bz] = uz[bz];
            return zz
          }(Ez, bz(zz))
        }(zz, ku, Su)
      }(zz) : ku(zz);
      return function(zz, uz) {
        for (var bz = -1, Ez = zz ? zz.length : 0; ++bz < Ez && !1 !== uz(zz[bz], bz, zz););
      }(Uz || zz, (function(nz, iz) {
        Uz && (nz = zz[iz = nz]), au(Gz, iz, mu(nz, uz, bz, Ez, iz, zz, Xz))
      })), Gz
    }

    function qu(zz) {
      return !(!Yu(zz) || (uz = zz, kz && kz in uz)) && (Cu(zz) || Qz(zz) ? Eu : Gz).test(Wu(zz));
      var uz
    }

    function hu(zz) {
      var uz = new zz.constructor(zz.byteLength);
      return new lu(uz).set(new lu(zz)), uz
    }

    function Uu(zz, uz, bz, Ez) {
      bz || (bz = {});
      for (var nz = -1, iz = uz.length; ++nz < iz;) {
        var lz = uz[nz],
          Mz = Ez ? Ez(bz[lz], zz[lz], lz, bz, zz) : void 0;
        au(bz, lz, void 0 === Mz ? zz[lz] : Mz)
      }
      return bz
    }

    function cu(zz, uz) {
      var bz = zz.__data__;
      return function(zz) {
        var uz = typeof zz;
        return "string" == uz || "number" == uz || "symbol" == uz || "boolean" == uz ? "__proto__" !== zz : null === zz
      }(uz) ? bz["string" == typeof uz ? "string" : "hash"] : bz.map
    }

    function gu(zz, uz) {
      var bz = function(zz, uz) {
        return null == zz ? void 0 : zz[uz]
      }(zz, uz);
      return qu(bz) ? bz : void 0
    }
    Au.prototype.clear = function() {
      this.__data__ = fu ? fu(null) : {}
    }, Au.prototype.delete = function(zz) {
      return this.has(zz) && delete this.__data__[zz]
    }, Au.prototype.get = function(zz) {
      var uz = this.__data__;
      if (fu) {
        var bz = uz[zz];
        return bz === Ez ? void 0 : bz
      }
      return uu.call(uz, zz) ? uz[zz] : void 0
    }, Au.prototype.has = function(zz) {
      var uz = this.__data__;
      return fu ? void 0 !== uz[zz] : uu.call(uz, zz)
    }, Au.prototype.set = function(zz, uz) {
      return this.__data__[zz] = fu && void 0 === uz ? Ez : uz, this
    }, Tu.prototype.clear = function() {
      this.__data__ = []
    }, Tu.prototype.delete = function(zz) {
      var uz = this.__data__,
        bz = Vu(uz, zz);
      return !(bz < 0) && (bz == uz.length - 1 ? uz.pop() : Ou.call(uz, bz, 1), !0)
    }, Tu.prototype.get = function(zz) {
      var uz = this.__data__,
        bz = Vu(uz, zz);
      return bz < 0 ? void 0 : uz[bz][1]
    }, Tu.prototype.has = function(zz) {
      return Vu(this.__data__, zz) > -1
    }, Tu.prototype.set = function(zz, uz) {
      var bz = this.__data__,
        Ez = Vu(bz, zz);
      return Ez < 0 ? bz.push([zz, uz]) : bz[Ez][1] = uz, this
    }, Lu.prototype.clear = function() {
      this.__data__ = {
        hash: new Au,
        map: new(Ru || Tu),
        string: new Au
      }
    }, Lu.prototype.delete = function(zz) {
      return cu(this, zz).delete(zz)
    }, Lu.prototype.get = function(zz) {
      return cu(this, zz).get(zz)
    }, Lu.prototype.has = function(zz) {
      return cu(this, zz).has(zz)
    }, Lu.prototype.set = function(zz, uz) {
      return cu(this, zz).set(zz, uz), this
    }, Pu.prototype.clear = function() {
      this.__data__ = new Tu
    }, Pu.prototype.delete = function(zz) {
      return this.__data__.delete(zz)
    }, Pu.prototype.get = function(zz) {
      return this.__data__.get(zz)
    }, Pu.prototype.has = function(zz) {
      return this.__data__.has(zz)
    }, Pu.prototype.set = function(zz, uz) {
      var bz = this.__data__;
      if (bz instanceof Tu) {
        var Ez = bz.__data__;
        if (!Ru || Ez.length < 199) return Ez.push([zz, uz]), this;
        bz = this.__data__ = new Lu(Ez)
      }
      return bz.set(zz, uz), this
    };
    var Su = pu ? ez(pu, Object) : function() {
        return []
      },
      yu = function(zz) {
        return bu.call(zz)
      };

    function Du(zz, uz) {
      return !!(uz = null == uz ? nz : uz) && ("number" == typeof zz || az.test(zz)) && zz > -1 && zz % 1 == 0 && zz < uz
    }

    function Qu(zz) {
      var uz = zz && zz.constructor;
      return zz === ("function" == typeof uz && uz.prototype || Cz)
    }

    function Wu(zz) {
      if (null != zz) {
        try {
          return zu.call(zz)
        } catch (uz) {}
        try {
          return zz + ""
        } catch (uz) {}
      }
      return ""
    }

    function eu(zz, uz) {
      return zz === uz || zz !== zz && uz !== uz
    }(Zu && yu(new Zu(new ArrayBuffer(1))) != sz || Ru && yu(new Ru) != Oz || Ku && yu(Ku.resolve()) != Fz || wu && yu(new wu) != Rz || Xu && yu(new Xu) != Xz) && (yu = function(zz) {
      var uz = bu.call(zz),
        bz = uz == dz ? zz.constructor : void 0,
        Ez = bz ? Wu(bz) : void 0;
      if (Ez) switch (Ez) {
        case su:
          return sz;
        case ru:
          return Oz;
        case ou:
          return Fz;
        case Nu:
          return Rz;
        case vu:
          return Xz
      }
      return uz
    });
    var ju = Array.isArray;

    function Iu(zz) {
      return null != zz && function(zz) {
        return "number" == typeof zz && zz > -1 && zz % 1 == 0 && zz <= nz
      }(zz.length) && !Cu(zz)
    }
    var Bu = du || function() {
      return !1
    };

    function Cu(zz) {
      var uz = Yu(zz) ? bu.call(zz) : "";
      return uz == tz || uz == Hz
    }

    function Yu(zz) {
      var uz = typeof zz;
      return !!zz && ("object" == uz || "function" == uz)
    }

    function ku(zz) {
      return Iu(zz) ? Gu(zz) : function(zz) {
        if (!Qu(zz)) return Fu(zz);
        var uz = [];
        for (var bz in Object(zz)) uu.call(zz, bz) && "constructor" != bz && uz.push(bz);
        return uz
      }(zz)
    }
    zz.exports = function(zz) {
      return mu(zz, !0, !0)
    }
  },
  37182: (zz, uz, bz) => {
    var Ez = bz(37190),
      nz = bz(37194),
      iz = "undefined" !== typeof Float64Array;

    function lz(zz, uz) {
      return zz[0] - uz[0]
    }

    function Mz() {
      var zz, uz = this.stride,
        bz = new Array(uz.length);
      for (zz = 0; zz < bz.length; ++zz) bz[zz] = [Math.abs(uz[zz]), zz];
      bz.sort(lz);
      var Ez = new Array(bz.length);
      for (zz = 0; zz < Ez.length; ++zz) Ez[zz] = bz[zz][1];
      return Ez
    }

    function tz(zz, uz) {
      var bz = ["View", uz, "d", zz].join("");
      uz < 0 && (bz = "View_Nil" + zz);
      var nz = "generic" === zz;
      if (-1 === uz) {
        var iz = "function " + bz + "(a){this.data=a;};var proto=" + bz + ".prototype;proto.dtype='" + zz + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + bz + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + bz + "(a){return new " + bz + "(a);}";
        return new Function(iz)()
      }
      if (0 === uz) {
        iz = "function " + bz + "(a,d) {this.data = a;this.offset = d};var proto=" + bz + ".prototype;proto.dtype='" + zz + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + bz + "_copy() {return new " + bz + "(this.data,this.offset)};proto.pick=function " + bz + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + bz + "_get(){return " + (nz ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + bz + "_set(v){return " + (nz ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + bz + "(a,b,c,d){return new " + bz + "(a,d)}";
        return new Function("TrivialArray", iz)(Hz[zz][0])
      }
      iz = ["'use strict'"];
      var lz = Ez(uz),
        tz = lz.map((function(zz) {
          return "i" + zz
        })),
        Oz = "this.offset+" + lz.map((function(zz) {
          return "this.stride[" + zz + "]*i" + zz
        })).join("+"),
        pz = lz.map((function(zz) {
          return "b" + zz
        })).join(","),
        dz = lz.map((function(zz) {
          return "c" + zz
        })).join(",");
      iz.push("function " + bz + "(a," + pz + "," + dz + ",d){this.data=a", "this.shape=[" + pz + "]", "this.stride=[" + dz + "]", "this.offset=d|0}", "var proto=" + bz + ".prototype", "proto.dtype='" + zz + "'", "proto.dimension=" + uz), iz.push("Object.defineProperty(proto,'size',{get:function " + bz + "_size(){return " + lz.map((function(zz) {
        return "this.shape[" + zz + "]"
      })).join("*"), "}})"), 1 === uz ? iz.push("proto.order=[0]") : (iz.push("Object.defineProperty(proto,'order',{get:"), uz < 4 ? (iz.push("function " + bz + "_order(){"), 2 === uz ? iz.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === uz && iz.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : iz.push("ORDER})")), iz.push("proto.set=function " + bz + "_set(" + tz.join(",") + ",v){"), nz ? iz.push("return this.data.set(" + Oz + ",v)}") : iz.push("return this.data[" + Oz + "]=v}"), iz.push("proto.get=function " + bz + "_get(" + tz.join(",") + "){"), nz ? iz.push("return this.data.get(" + Oz + ")}") : iz.push("return this.data[" + Oz + "]}"), iz.push("proto.index=function " + bz + "_index(", tz.join(), "){return " + Oz + "}"), iz.push("proto.hi=function " + bz + "_hi(" + tz.join(",") + "){return new " + bz + "(this.data," + lz.map((function(zz) {
        return ["(typeof i", zz, "!=='number'||i", zz, "<0)?this.shape[", zz, "]:i", zz, "|0"].join("")
      })).join(",") + "," + lz.map((function(zz) {
        return "this.stride[" + zz + "]"
      })).join(",") + ",this.offset)}");
      var Fz = lz.map((function(zz) {
          return "a" + zz + "=this.shape[" + zz + "]"
        })),
        Zz = lz.map((function(zz) {
          return "c" + zz + "=this.stride[" + zz + "]"
        }));
      iz.push("proto.lo=function " + bz + "_lo(" + tz.join(",") + "){var b=this.offset,d=0," + Fz.join(",") + "," + Zz.join(","));
      for (var Rz = 0; Rz < uz; ++Rz) iz.push("if(typeof i" + Rz + "==='number'&&i" + Rz + ">=0){d=i" + Rz + "|0;b+=c" + Rz + "*d;a" + Rz + "-=d}");
      iz.push("return new " + bz + "(this.data," + lz.map((function(zz) {
        return "a" + zz
      })).join(",") + "," + lz.map((function(zz) {
        return "c" + zz
      })).join(",") + ",b)}"), iz.push("proto.step=function " + bz + "_step(" + tz.join(",") + "){var " + lz.map((function(zz) {
        return "a" + zz + "=this.shape[" + zz + "]"
      })).join(",") + "," + lz.map((function(zz) {
        return "b" + zz + "=this.stride[" + zz + "]"
      })).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
      for (Rz = 0; Rz < uz; ++Rz) iz.push("if(typeof i" + Rz + "==='number'){d=i" + Rz + "|0;if(d<0){c+=b" + Rz + "*(a" + Rz + "-1);a" + Rz + "=ceil(-a" + Rz + "/d)}else{a" + Rz + "=ceil(a" + Rz + "/d)}b" + Rz + "*=d}");
      iz.push("return new " + bz + "(this.data," + lz.map((function(zz) {
        return "a" + zz
      })).join(",") + "," + lz.map((function(zz) {
        return "b" + zz
      })).join(",") + ",c)}");
      var Kz = new Array(uz),
        wz = new Array(uz);
      for (Rz = 0; Rz < uz; ++Rz) Kz[Rz] = "a[i" + Rz + "]", wz[Rz] = "b[i" + Rz + "]";
      iz.push("proto.transpose=function " + bz + "_transpose(" + tz + "){" + tz.map((function(zz, uz) {
        return zz + "=(" + zz + "===undefined?" + uz + ":" + zz + "|0)"
      })).join(";"), "var a=this.shape,b=this.stride;return new " + bz + "(this.data," + Kz.join(",") + "," + wz.join(",") + ",this.offset)}"), iz.push("proto.pick=function " + bz + "_pick(" + tz + "){var a=[],b=[],c=this.offset");
      for (Rz = 0; Rz < uz; ++Rz) iz.push("if(typeof i" + Rz + "==='number'&&i" + Rz + ">=0){c=(c+this.stride[" + Rz + "]*i" + Rz + ")|0}else{a.push(this.shape[" + Rz + "]);b.push(this.stride[" + Rz + "])}");
      return iz.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), iz.push("return function construct_" + bz + "(data,shape,stride,offset){return new " + bz + "(data," + lz.map((function(zz) {
        return "shape[" + zz + "]"
      })).join(",") + "," + lz.map((function(zz) {
        return "stride[" + zz + "]"
      })).join(",") + ",offset)}"), new Function("CTOR_LIST", "ORDER", iz.join("\n"))(Hz[zz], Mz)
    }
    var Hz = {
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
    zz.exports = function(zz, uz, bz, Ez) {
      if (void 0 === zz) return (0, Hz.array[0])([]);
      "number" === typeof zz && (zz = [zz]), void 0 === uz && (uz = [zz.length]);
      var lz = uz.length;
      if (void 0 === bz) {
        bz = new Array(lz);
        for (var Mz = lz - 1, Oz = 1; Mz >= 0; --Mz) bz[Mz] = Oz, Oz *= uz[Mz]
      }
      if (void 0 === Ez) {
        Ez = 0;
        for (Mz = 0; Mz < lz; ++Mz) bz[Mz] < 0 && (Ez -= (uz[Mz] - 1) * bz[Mz])
      }
      for (var pz = function(zz) {
          if (nz(zz)) return "buffer";
          if (iz) switch (Object.prototype.toString.call(zz)) {
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
        }(zz), dz = Hz[pz]; dz.length <= lz + 1;) dz.push(tz(pz, dz.length - 1));
      return (0, dz[lz + 1])(zz, uz, bz, Ez)
    }
  },
  37840: zz => {
    function uz(zz, uz, bz) {
      for (var Ez = zz.length, nz = -1 / 0, iz = 1 / 0, lz = 0; lz < Ez; lz++) {
        var Mz = (bz[0][lz] - zz[lz]) / uz[lz],
          tz = (bz[1][lz] - zz[lz]) / uz[lz];
        if (Mz > tz) {
          var Hz = Mz;
          Mz = tz, tz = Hz
        }
        if (tz < nz || Mz > iz) return 1 / 0;
        Mz > nz && (nz = Mz), tz < iz && (iz = tz)
      }
      return nz > iz ? 1 / 0 : nz
    }
    zz.exports = function(zz, bz, Ez, nz) {
      var iz = uz(bz, Ez, nz);
      if (iz === 1 / 0) zz = null;
      else {
        zz = zz || [];
        for (var lz = 0; lz < bz.length; lz++) zz[lz] = bz[lz] + Ez[lz] * iz
      }
      return zz
    }, zz.exports.distance = uz
  },
  37204: (zz, uz, bz) => {
    var Ez = bz(37213);

    function nz(zz) {
      for (var uz, bz, nz = 0, iz = zz.length, lz = 0; lz < zz.length;) {
        for (uz = zz[lz], bz = 0; lz < iz && zz[lz] === uz;) ++lz, ++bz;
        nz += Ez.log2(bz) / 7 | 0, nz += Ez.log2(uz >>> 0) / 7 | 0, nz += 2
      }
      return nz
    }
    uz.size = nz, uz.encode = function(zz, uz) {
      uz || (uz = new Uint8Array(nz(zz)));
      for (var bz, Ez, iz = 0, lz = uz.length, Mz = 0; Mz < zz.length;) {
        for (bz = zz[Mz], Ez = 0; Mz < zz.length && zz[Mz] === bz;) ++Mz, ++Ez;
        for (; iz < lz && Ez >= 128;) uz[iz++] = 128 + (127 & Ez), Ez >>>= 7;
        if (iz >= lz) throw new Error("RLE buffer overflow");
        for (uz[iz++] = Ez, bz >>>= 0; iz < lz && bz >= 128;) uz[iz++] = 128 + (127 & bz), bz >>>= 7;
        if (iz >= lz) throw new Error("RLE buffer overflow");
        uz[iz++] = bz
      }
      return uz
    }, uz.decode = function(zz, uz) {
      for (var bz, Ez, nz, iz, lz = uz.length, Mz = zz.length, tz = 0, Hz = 0; Hz < Mz;) {
        for (bz = 0, Ez = 0; Hz < Mz && zz[Hz] >= 128;) bz += (127 & zz[Hz++]) << Ez, Ez += 7;
        if (bz += zz[Hz++] << Ez, Hz >= Mz) throw new Error("RLE buffer underrun");
        if (tz + bz > lz) throw new Error("Chunk buffer overflow");
        for (nz = 0, Ez = 0; Hz < Mz && zz[Hz] >= 128;) nz += (127 & zz[Hz++]) << Ez, Ez += 7;
        if (Hz >= Mz) throw new Error("RLE buffer underrun");
        for (nz += zz[Hz++] << Ez, iz = 0; iz < bz; ++iz) uz[tz++] = nz
      }
      return uz
    }
  },
  37213: (zz, uz) => {
    function bz(zz) {
      var uz = 32;
      return (zz &= -zz) && uz--, 65535 & zz && (uz -= 16), 16711935 & zz && (uz -= 8), 252645135 & zz && (uz -= 4), 858993459 & zz && (uz -= 2), 1431655765 & zz && (uz -= 1), uz
    }
    uz.INT_BITS = 32, uz.INT_MAX = 2147483647, uz.INT_MIN = -1 << 31, uz.sign = function(zz) {
      return (zz > 0) - (zz < 0)
    }, uz.abs = function(zz) {
      var uz = zz >> 31;
      return (zz ^ uz) - uz
    }, uz.min = function(zz, uz) {
      return uz ^ (zz ^ uz) & -(zz < uz)
    }, uz.max = function(zz, uz) {
      return zz ^ (zz ^ uz) & -(zz < uz)
    }, uz.isPow2 = function(zz) {
      return !(zz & zz - 1) && !!zz
    }, uz.log2 = function(zz) {
      var uz, bz;
      return uz = (zz > 65535) << 4, uz |= bz = ((zz >>>= uz) > 255) << 3, uz |= bz = ((zz >>>= bz) > 15) << 2, (uz |= bz = ((zz >>>= bz) > 3) << 1) | (zz >>>= bz) >> 1
    }, uz.log10 = function(zz) {
      return zz >= 1e9 ? 9 : zz >= 1e8 ? 8 : zz >= 1e7 ? 7 : zz >= 1e6 ? 6 : zz >= 1e5 ? 5 : zz >= 1e4 ? 4 : zz >= 1e3 ? 3 : zz >= 100 ? 2 : zz >= 10 ? 1 : 0
    }, uz.popCount = function(zz) {
      return 16843009 * ((zz = (858993459 & (zz -= zz >>> 1 & 1431655765)) + (zz >>> 2 & 858993459)) + (zz >>> 4) & 252645135) >>> 24
    }, uz.countTrailingZeros = bz, uz.nextPow2 = function(zz) {
      return zz += 0 === zz, --zz, zz |= zz >>> 1, zz |= zz >>> 2, zz |= zz >>> 4, zz |= zz >>> 8, (zz |= zz >>> 16) + 1
    }, uz.prevPow2 = function(zz) {
      return zz |= zz >>> 1, zz |= zz >>> 2, zz |= zz >>> 4, zz |= zz >>> 8, (zz |= zz >>> 16) - (zz >>> 1)
    }, uz.parity = function(zz) {
      return zz ^= zz >>> 16, zz ^= zz >>> 8, zz ^= zz >>> 4, 27030 >>> (zz &= 15) & 1
    };
    var Ez = new Array(256);
    ! function(zz) {
      for (var uz = 0; uz < 256; ++uz) {
        var bz = uz,
          Ez = uz,
          nz = 7;
        for (bz >>>= 1; bz; bz >>>= 1) Ez <<= 1, Ez |= 1 & bz, --nz;
        zz[uz] = Ez << nz & 255
      }
    }(Ez), uz.reverse = function(zz) {
      return Ez[255 & zz] << 24 | Ez[zz >>> 8 & 255] << 16 | Ez[zz >>> 16 & 255] << 8 | Ez[zz >>> 24 & 255]
    }, uz.interleave2 = function(zz, uz) {
      return (zz = 1431655765 & ((zz = 858993459 & ((zz = 252645135 & ((zz = 16711935 & ((zz &= 65535) | zz << 8)) | zz << 4)) | zz << 2)) | zz << 1)) | (uz = 1431655765 & ((uz = 858993459 & ((uz = 252645135 & ((uz = 16711935 & ((uz &= 65535) | uz << 8)) | uz << 4)) | uz << 2)) | uz << 1)) << 1
    }, uz.deinterleave2 = function(zz, uz) {
      return (zz = 65535 & ((zz = 16711935 & ((zz = 252645135 & ((zz = 858993459 & ((zz = zz >>> uz & 1431655765) | zz >>> 1)) | zz >>> 2)) | zz >>> 4)) | zz >>> 16)) << 16 >> 16
    }, uz.interleave3 = function(zz, uz, bz) {
      return zz = 1227133513 & ((zz = 3272356035 & ((zz = 251719695 & ((zz = 4278190335 & ((zz &= 1023) | zz << 16)) | zz << 8)) | zz << 4)) | zz << 2), (zz |= (uz = 1227133513 & ((uz = 3272356035 & ((uz = 251719695 & ((uz = 4278190335 & ((uz &= 1023) | uz << 16)) | uz << 8)) | uz << 4)) | uz << 2)) << 1) | (bz = 1227133513 & ((bz = 3272356035 & ((bz = 251719695 & ((bz = 4278190335 & ((bz &= 1023) | bz << 16)) | bz << 8)) | bz << 4)) | bz << 2)) << 2
    }, uz.deinterleave3 = function(zz, uz) {
      return (zz = 1023 & ((zz = 4278190335 & ((zz = 251719695 & ((zz = 3272356035 & ((zz = zz >>> uz & 1227133513) | zz >>> 2)) | zz >>> 4)) | zz >>> 8)) | zz >>> 16)) << 22 >> 22
    }, uz.nextCombination = function(zz) {
      var uz = zz | zz - 1;
      return uz + 1 | (~uz & -~uz) - 1 >>> bz(zz) + 1
    }
  },
  36709: (zz, uz, bz) => {
    bz.d(uz, {
      Color3: () => Ez.c,
      d: () => Ez.g
    });
    var Ez = bz(36715);
    (0, Ez.j)()
  },
  37235: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => nz
    });
    var Ez = bz(37239);
    class nz {
      static GetPlanes(zz) {
        const uz = [];
        for (let bz = 0; bz < 6; bz++) uz.push(new Ez.b(0, 0, 0, 0));
        return nz.GetPlanesToRef(zz, uz), uz
      }
      static GetNearPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] + bz[2], uz.normal.y = bz[7] + bz[6], uz.normal.z = bz[11] + bz[10], uz.d = bz[15] + bz[14], uz.normalize()
      }
      static GetFarPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] - bz[2], uz.normal.y = bz[7] - bz[6], uz.normal.z = bz[11] - bz[10], uz.d = bz[15] - bz[14], uz.normalize()
      }
      static GetLeftPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] + bz[0], uz.normal.y = bz[7] + bz[4], uz.normal.z = bz[11] + bz[8], uz.d = bz[15] + bz[12], uz.normalize()
      }
      static GetRightPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] - bz[0], uz.normal.y = bz[7] - bz[4], uz.normal.z = bz[11] - bz[8], uz.d = bz[15] - bz[12], uz.normalize()
      }
      static GetTopPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] - bz[1], uz.normal.y = bz[7] - bz[5], uz.normal.z = bz[11] - bz[9], uz.d = bz[15] - bz[13], uz.normalize()
      }
      static GetBottomPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] + bz[1], uz.normal.y = bz[7] + bz[5], uz.normal.z = bz[11] + bz[9], uz.d = bz[15] + bz[13], uz.normalize()
      }
      static GetPlanesToRef(zz, uz) {
        nz.GetNearPlaneToRef(zz, uz[0]), nz.GetFarPlaneToRef(zz, uz[1]), nz.GetLeftPlaneToRef(zz, uz[2]), nz.GetRightPlaneToRef(zz, uz[3]), nz.GetTopPlaneToRef(zz, uz[4]), nz.GetBottomPlaneToRef(zz, uz[5])
      }
      static IsPointInFrustum(zz, uz) {
        for (let bz = 0; bz < 6; bz++)
          if (uz[bz].dotCoordinate(zz) < 0) return !1;
        return !0
      }
    }
  },
  37239: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => nz
    });
    var Ez = bz(36519);
    class nz {
      constructor(zz, uz, bz, nz) {
        this.normal = new Ez.n(zz, uz, bz), this.d = nz
      }
      obz() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new nz(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let uz = 0;
        return 0 !== zz && (uz = 1 / zz), this.normal.x *= uz, this.normal.y *= uz, this.normal.z *= uz, this.d *= uz, this
      }
      transform(zz) {
        const uz = nz._TmpMatrix;
        zz.invertToRef(uz);
        const bz = uz.m,
          Ez = this.normal.x,
          iz = this.normal.y,
          lz = this.normal.z,
          Mz = this.d,
          tz = Ez * bz[0] + iz * bz[1] + lz * bz[2] + Mz * bz[3],
          Hz = Ez * bz[4] + iz * bz[5] + lz * bz[6] + Mz * bz[7],
          Oz = Ez * bz[8] + iz * bz[9] + lz * bz[10] + Mz * bz[11],
          pz = Ez * bz[12] + iz * bz[13] + lz * bz[14] + Mz * bz[15];
        return new nz(tz, Hz, Oz, pz)
      }
      dotCoordinate(zz) {
        return this.normal.x * zz.x + this.normal.y * zz.y + this.normal.z * zz.z + this.d
      }
      copyFromPoints(zz, uz, bz) {
        const Ez = uz.x - zz.x,
          nz = uz.y - zz.y,
          iz = uz.z - zz.z,
          lz = bz.x - zz.x,
          Mz = bz.y - zz.y,
          tz = bz.z - zz.z,
          Hz = nz * tz - iz * Mz,
          Oz = iz * lz - Ez * tz,
          pz = Ez * Mz - nz * lz,
          dz = Math.sqrt(Hz * Hz + Oz * Oz + pz * pz);
        let Fz;
        return Fz = 0 !== dz ? 1 / dz : 0, this.normal.x = Hz * Fz, this.normal.y = Oz * Fz, this.normal.z = pz * Fz, this.d = -(this.normal.x * zz.x + this.normal.y * zz.y + this.normal.z * zz.z), this
      }
      isFrontFacingTo(zz, uz) {
        return Ez.n.Dot(this.normal, zz) <= uz
      }
      signedDistanceTo(zz) {
        return Ez.n.Dot(zz, this.normal) + this.d
      }
      static FromArray(zz) {
        return new nz(zz[0], zz[1], zz[2], zz[3])
      }
      static FromPoints(zz, uz, bz) {
        const Ez = new nz(0, 0, 0, 0);
        return Ez.copyFromPoints(zz, uz, bz), Ez
      }
      static FromPositionAndNormal(zz, uz) {
        const bz = new nz(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(zz, uz, bz)
      }
      static FromPositionAndNormalToRef(zz, uz, bz) {
        return bz.normal.euz(uz), bz.normal.normalize(), bz.d = -zz.dot(bz.normal), bz
      }
      static SignedDistanceToPlaneFromPositionAndNormal(zz, uz, bz) {
        const nz = -(uz.x * zz.x + uz.y * zz.y + uz.z * zz.z);
        return Ez.n.Dot(bz, uz) + nz
      }
    }
    nz._TmpMatrix = Ez.d.Identity()
  },
  36514: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      Matrix: () => Ez.d,
      Quaternion: () => Ez.h,
      RegisterMathVector: () => Ez.j,
      TmpVectors: () => Ez.l,
      Vector2: () => Ez.m,
      ER: () => Ez.n,
      Vector4: () => Ez.r
    });
    var Ez = bz(36519);
    (0, Ez.j)()
  },
  37519: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Ez
    });
    class Ez {
      constructor(zz, uz, bz, Ez) {
        this.x = zz, this.y = uz, this.width = bz, this.height = Ez
      }
      toGlobal(zz, uz) {
        return new Ez(this.x * zz, this.y * uz, this.width * zz, this.height * uz)
      }
      toGlobalToRef(zz, uz, bz) {
        return bz.x = this.x * zz, bz.y = this.y * uz, bz.width = this.width * zz, bz.height = this.height * uz, this
      }
      clone() {
        return new Ez(this.x, this.y, this.width, this.height)
      }
    }
  },
  37335: (zz, uz, bz) => {
    function Ez() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (zz => {
        const uz = 16 * Math.random() | 0;
        return ("x" === zz ? uz : 3 & uz | 8).toString(16)
      }))
    }
    bz.d(uz, {
      c: () => Ez
    })
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);