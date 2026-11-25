/*! For license information please see dz8ef.233.d1674e71.chunk.js.LICENSE.txt */
export const id = 233;
export const ids = [233, 241];
export const modules = {
  38646: uu => {
    uu.exports = function(uu) {
      return null != uu && null != uu.constructor && "function" === typeof uu.constructor.isBuffer && uu.constructor.isBuffer(uu)
    }
  },
  38633: (uu, Eu, ju) => {
    var su = ju(38636),
      Uu = ju(38639),
      Zu = ju(38646);
    ju.g.__TYPEDARRAY_POOL || (ju.g.__TYPEDARRAY_POOL = {
      UINT8: Uu([32, 0]),
      UINT16: Uu([32, 0]),
      UINT32: Uu([32, 0]),
      INT8: Uu([32, 0]),
      INT16: Uu([32, 0]),
      INT32: Uu([32, 0]),
      FLOAT: Uu([32, 0]),
      DOUBLE: Uu([32, 0]),
      DATA: Uu([32, 0]),
      UINT8C: Uu([32, 0]),
      BUFFER: Uu([32, 0])
    });
    var Xu = "undefined" !== typeof Uint8ClampedArray,
      lu = ju.g.__TYPEDARRAY_POOL;
    lu.UINT8C || (lu.UINT8C = Uu([32, 0])), lu.BUFFER || (lu.BUFFER = Uu([32, 0]));
    var qu = lu.DATA,
      fu = lu.BUFFER;

    function Cu(uu) {
      if (uu) {
        var Eu = uu.length || uu.byteLength,
          ju = su.log2(Eu);
        qu[ju].push(uu)
      }
    }

    function bu(uu) {
      uu = su.nextPow2(uu);
      var Eu = su.log2(uu),
        ju = qu[Eu];
      return ju.length > 0 ? ju.pop() : new ArrayBuffer(uu)
    }

    function cu(uu) {
      return new Uint8Array(bu(uu), 0, uu)
    }

    function Nu(uu) {
      return new Uint16Array(bu(2 * uu), 0, uu)
    }

    function Ou(uu) {
      return new Uint32Array(bu(4 * uu), 0, uu)
    }

    function Yu(uu) {
      return new Int8Array(bu(uu), 0, uu)
    }

    function hu(uu) {
      return new Int16Array(bu(2 * uu), 0, uu)
    }

    function Du(uu) {
      return new Int32Array(bu(4 * uu), 0, uu)
    }

    function gu(uu) {
      return new Float32Array(bu(4 * uu), 0, uu)
    }

    function Mu(uu) {
      return new Float64Array(bu(8 * uu), 0, uu)
    }

    function eu(uu) {
      return Xu ? new Uint8ClampedArray(bu(uu), 0, uu) : cu(uu)
    }

    function Gu(uu) {
      return new DataView(bu(uu), 0, uu)
    }
    Eu.free = function(uu) {
      if (Zu(uu)) fu[su.log2(uu.length)].push(uu);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(uu) && (uu = uu.buffer), !uu) return;
        var Eu = uu.length || uu.byteLength,
          ju = 0 | su.log2(Eu);
        qu[ju].push(uu)
      }
    }, Eu.freeUint8 = Eu.freeUint16 = Eu.freeUint32 = Eu.freeInt8 = Eu.freeInt16 = Eu.freeInt32 = Eu.freeFloat32 = Eu.freeFloat = Eu.freeFloat64 = Eu.freeDouble = Eu.freeUint8Clamped = Eu.freeDataView = function(uu) {
      Cu(uu.buffer)
    }, Eu.freeArrayBuffer = Cu, Eu.freeBuffer = function(uu) {
      fu[su.log2(uu.length)].push(uu)
    }, Eu.malloc = function(uu, Eu) {
      if (void 0 === Eu || "arraybuffer" === Eu) return bu(uu);
      switch (Eu) {
        case "uint8":
          return cu(uu);
        case "uint16":
          return Nu(uu);
        case "uint32":
          return Ou(uu);
        case "int8":
          return Yu(uu);
        case "int16":
          return hu(uu);
        case "int32":
          return Du(uu);
        case "float":
        case "float32":
          return gu(uu);
        case "double":
        case "float64":
          return Mu(uu);
        case "uint8_clamped":
          return eu(uu);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return Gu(uu);
        default:
          return null
      }
      return null
    }, Eu.mallocArrayBuffer = bu, Eu.mallocUint8 = cu, Eu.mallocUint16 = Nu, Eu.mallocUint32 = Ou, Eu.mallocInt8 = Yu, Eu.mallocInt16 = hu, Eu.mallocInt32 = Du, Eu.mallocFloat32 = Eu.mallocFloat = gu, Eu.mallocFloat64 = Eu.mallocDouble = Mu, Eu.mallocUint8Clamped = eu, Eu.mallocDataView = Gu, Eu.clearCache = function() {
      for (var uu = 0; uu < 32; ++uu) lu.UINT8[uu].length = 0, lu.UINT16[uu].length = 0, lu.UINT32[uu].length = 0, lu.INT8[uu].length = 0, lu.INT16[uu].length = 0, lu.INT32[uu].length = 0, lu.FLOAT[uu].length = 0, lu.DOUBLE[uu].length = 0, lu.UINT8C[uu].length = 0, qu[uu].length = 0, fu[uu].length = 0
    }
  },
  38636: (uu, Eu) => {
    function ju(uu) {
      var Eu = 32;
      return (uu &= -uu) && Eu--, 65535 & uu && (Eu -= 16), 16711935 & uu && (Eu -= 8), 252645135 & uu && (Eu -= 4), 858993459 & uu && (Eu -= 2), 1431655765 & uu && (Eu -= 1), Eu
    }
    Eu.INT_BITS = 32, Eu.INT_MAX = 2147483647, Eu.INT_MIN = -1 << 31, Eu.sign = function(uu) {
      return (uu > 0) - (uu < 0)
    }, Eu.abs = function(uu) {
      var Eu = uu >> 31;
      return (uu ^ Eu) - Eu
    }, Eu.min = function(uu, Eu) {
      return Eu ^ (uu ^ Eu) & -(uu < Eu)
    }, Eu.max = function(uu, Eu) {
      return uu ^ (uu ^ Eu) & -(uu < Eu)
    }, Eu.isPow2 = function(uu) {
      return !(uu & uu - 1) && !!uu
    }, Eu.log2 = function(uu) {
      var Eu, ju;
      return Eu = (uu > 65535) << 4, Eu |= ju = ((uu >>>= Eu) > 255) << 3, Eu |= ju = ((uu >>>= ju) > 15) << 2, (Eu |= ju = ((uu >>>= ju) > 3) << 1) | (uu >>>= ju) >> 1
    }, Eu.log10 = function(uu) {
      return uu >= 1e9 ? 9 : uu >= 1e8 ? 8 : uu >= 1e7 ? 7 : uu >= 1e6 ? 6 : uu >= 1e5 ? 5 : uu >= 1e4 ? 4 : uu >= 1e3 ? 3 : uu >= 100 ? 2 : uu >= 10 ? 1 : 0
    }, Eu.popCount = function(uu) {
      return 16843009 * ((uu = (858993459 & (uu -= uu >>> 1 & 1431655765)) + (uu >>> 2 & 858993459)) + (uu >>> 4) & 252645135) >>> 24
    }, Eu.countTrailingZeros = ju, Eu.nextPow2 = function(uu) {
      return uu += 0 === uu, --uu, uu |= uu >>> 1, uu |= uu >>> 2, uu |= uu >>> 4, uu |= uu >>> 8, (uu |= uu >>> 16) + 1
    }, Eu.prevPow2 = function(uu) {
      return uu |= uu >>> 1, uu |= uu >>> 2, uu |= uu >>> 4, uu |= uu >>> 8, (uu |= uu >>> 16) - (uu >>> 1)
    }, Eu.parity = function(uu) {
      return uu ^= uu >>> 16, uu ^= uu >>> 8, uu ^= uu >>> 4, 27030 >>> (uu &= 15) & 1
    };
    var su = new Array(256);
    ! function(uu) {
      for (var Eu = 0; Eu < 256; ++Eu) {
        var ju = Eu,
          su = Eu,
          Uu = 7;
        for (ju >>>= 1; ju; ju >>>= 1) su <<= 1, su |= 1 & ju, --Uu;
        uu[Eu] = su << Uu & 255
      }
    }(su), Eu.reverse = function(uu) {
      return su[255 & uu] << 24 | su[uu >>> 8 & 255] << 16 | su[uu >>> 16 & 255] << 8 | su[uu >>> 24 & 255]
    }, Eu.interleave2 = function(uu, Eu) {
      return (uu = 1431655765 & ((uu = 858993459 & ((uu = 252645135 & ((uu = 16711935 & ((uu &= 65535) | uu << 8)) | uu << 4)) | uu << 2)) | uu << 1)) | (Eu = 1431655765 & ((Eu = 858993459 & ((Eu = 252645135 & ((Eu = 16711935 & ((Eu &= 65535) | Eu << 8)) | Eu << 4)) | Eu << 2)) | Eu << 1)) << 1
    }, Eu.deinterleave2 = function(uu, Eu) {
      return (uu = 65535 & ((uu = 16711935 & ((uu = 252645135 & ((uu = 858993459 & ((uu = uu >>> Eu & 1431655765) | uu >>> 1)) | uu >>> 2)) | uu >>> 4)) | uu >>> 16)) << 16 >> 16
    }, Eu.interleave3 = function(uu, Eu, ju) {
      return uu = 1227133513 & ((uu = 3272356035 & ((uu = 251719695 & ((uu = 4278190335 & ((uu &= 1023) | uu << 16)) | uu << 8)) | uu << 4)) | uu << 2), (uu |= (Eu = 1227133513 & ((Eu = 3272356035 & ((Eu = 251719695 & ((Eu = 4278190335 & ((Eu &= 1023) | Eu << 16)) | Eu << 8)) | Eu << 4)) | Eu << 2)) << 1) | (ju = 1227133513 & ((ju = 3272356035 & ((ju = 251719695 & ((ju = 4278190335 & ((ju &= 1023) | ju << 16)) | ju << 8)) | ju << 4)) | ju << 2)) << 2
    }, Eu.deinterleave3 = function(uu, Eu) {
      return (uu = 1023 & ((uu = 4278190335 & ((uu = 251719695 & ((uu = 3272356035 & ((uu = uu >>> Eu & 1227133513) | uu >>> 2)) | uu >>> 4)) | uu >>> 8)) | uu >>> 16)) << 22 >> 22
    }, Eu.nextCombination = function(uu) {
      var Eu = uu | uu - 1;
      return Eu + 1 | (~Eu & -~Eu) - 1 >>> ju(uu) + 1
    }
  },
  38631: (uu, Eu, ju) => {
    uu.exports = function(uu, Eu, ju) {
      switch (arguments.length) {
        case 1:
          return su = [], fu(Uu = uu, Uu, Cu, !0), su;
        case 2:
          return "function" === typeof Eu ? fu(uu, uu, Eu, !0) : function(uu, Eu) {
            return su = [], fu(uu, Eu, Cu, !1), su
          }(uu, Eu);
        case 3:
          return fu(uu, Eu, ju, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var Uu
    };
    var su, Uu = ju(38633),
      Zu = ju(38651),
      Xu = ju(38656);

    function lu(uu, Eu) {
      for (var ju = 0; ju < uu; ++ju)
        if (!(Eu[ju] <= Eu[ju + uu])) return !0;
      return !1
    }

    function qu(uu, Eu, ju, su) {
      for (var Uu = 0, Zu = 0, Xu = 0, qu = uu.length; Xu < qu; ++Xu) {
        var fu = uu[Xu];
        if (!lu(Eu, fu)) {
          for (var Cu = 0; Cu < 2 * Eu; ++Cu) ju[Uu++] = fu[Cu];
          su[Zu++] = Xu
        }
      }
      return Zu
    }

    function fu(uu, Eu, ju, su) {
      var lu = uu.length,
        fu = Eu.length;
      if (!(lu <= 0 || fu <= 0)) {
        var Cu = uu[0].length >>> 1;
        if (!(Cu <= 0)) {
          var bu, cu = Uu.mallocDouble(2 * Cu * lu),
            Nu = Uu.mallocInt32(lu);
          if ((lu = qu(uu, Cu, cu, Nu)) > 0) {
            if (1 === Cu && su) Zu.init(lu), bu = Zu.sweepComplete(Cu, ju, 0, lu, cu, Nu, 0, lu, cu, Nu);
            else {
              var Ou = Uu.mallocDouble(2 * Cu * fu),
                Yu = Uu.mallocInt32(fu);
              (fu = qu(Eu, Cu, Ou, Yu)) > 0 && (Zu.init(lu + fu), bu = 1 === Cu ? Zu.sweepBipartite(Cu, ju, 0, lu, cu, Nu, 0, fu, Ou, Yu) : Xu(Cu, ju, su, lu, cu, Nu, fu, Ou, Yu), Uu.free(Ou), Uu.free(Yu))
            }
            Uu.free(cu), Uu.free(Nu)
          }
          return bu
        }
      }
    }

    function Cu(uu, Eu) {
      su.push([uu, Eu])
    }
  },
  38663: (uu, Eu) => {
    var ju = "d",
      su = "ax",
      Uu = "fp",
      Zu = "es",
      Xu = "rs",
      lu = "re",
      qu = "rb",
      fu = "bs",
      Cu = "be",
      bu = "bb",
      cu = [ju, su, "vv", Xu, lu, qu, "ri", fu, Cu, bu, "bi"];

    function Nu(uu) {
      var Eu = "bruteForce" + (uu ? "Full" : "Partial"),
        su = [],
        Xu = cu.slice();
      uu || Xu.splice(3, 0, Uu);
      var lu = ["function " + Eu + "(" + Xu.join() + "){"];

      function qu(Eu, Uu) {
        var Xu = function(uu, Eu, su) {
          var Uu = "bruteForce" + (uu ? "Red" : "Blue") + (Eu ? "Flip" : "") + (su ? "Full" : ""),
            Xu = ["function ", Uu, "(", cu.join(), "){", "var ", Zu, "=2*", ju, ";"],
            lu = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            qu = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (su ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return uu ? Xu.push(lu, "Q", ":", qu) : Xu.push(qu, "Q", ":", lu), su ? Xu.push("if(y1<x0||x1<y0)continue;") : Eu ? Xu.push("if(y0<=x0||x1<y0)continue;") : Xu.push("if(y0<x0||x1<y0)continue;"), Xu.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), Eu ? Xu.push("yi,xi") : Xu.push("xi,yi"), Xu.push(");if(rv!==void 0)return rv;}}}"), {
            name: Uu,
            code: Xu.join("")
          }
        }(Eu, Uu, uu);
        su.push(Xu.code), lu.push("return " + Xu.name + "(" + cu.join() + ");")
      }
      lu.push("if(re-rs>be-bs){"), uu ? (qu(!0, !1), lu.push("}else{"), qu(!1, !1)) : (lu.push("if(fp){"), qu(!0, !0), lu.push("}else{"), qu(!0, !1), lu.push("}}else{if(fp){"), qu(!1, !0), lu.push("}else{"), qu(!1, !1), lu.push("}")), lu.push("}}return " + Eu);
      var fu = su.join("") + lu.join("");
      return new Function(fu)()
    }
    Eu.partial = Nu(!1), Eu.full = Nu(!0)
  },
  38656: (uu, Eu, ju) => {
    uu.exports = function(uu, Eu, ju, Zu, Cu, Pu, ou, ku, mu) {
      ! function(uu, Eu) {
        var ju = 8 * Uu.log2(Eu + 1) * (uu + 1) | 0,
          Zu = Uu.nextPow2(eu * ju);
        pu.length < Zu && (su.free(pu), pu = su.mallocInt32(Zu));
        var Xu = Uu.nextPow2(Gu * ju);
        wu.length < Xu && (su.free(wu), wu = su.mallocDouble(Xu))
      }(uu, Zu + ou);
      var vu, Ku = 0,
        Vu = 2 * uu;
      Ju(Ku++, 0, 0, Zu, 0, ou, ju ? 16 : 0, -1 / 0, 1 / 0), ju || Ju(Ku++, 0, 0, ou, 0, Zu, 1, -1 / 0, 1 / 0);
      for (; Ku > 0;) {
        var ru = (Ku -= 1) * eu,
          Qu = pu[ru],
          iu = pu[ru + 1],
          Wu = pu[ru + 2],
          Su = pu[ru + 3],
          Iu = pu[ru + 4],
          Fu = pu[ru + 5],
          Bu = Ku * Gu,
          Lu = wu[Bu],
          tu = wu[Bu + 1],
          xu = 1 & Fu,
          Tu = !!(16 & Fu),
          Hu = Cu,
          Au = Pu,
          nu = ku,
          yu = mu;
        if (xu && (Hu = ku, Au = mu, nu = Cu, yu = Pu), !(2 & Fu && iu >= (Wu = hu(uu, Qu, iu, Wu, Hu, Au, tu))) && !(4 & Fu && (iu = Du(uu, Qu, iu, Wu, Hu, Au, Lu)) >= Wu)) {
          var zu = Wu - iu,
            Ru = Iu - Su;
          if (Tu) {
            if (uu * zu * (zu + Ru) < Nu) {
              if (void 0 !== (vu = qu.scanComplete(uu, Qu, Eu, iu, Wu, Hu, Au, Su, Iu, nu, yu))) return vu;
              continue
            }
          } else {
            if (uu * Math.min(zu, Ru) < bu) {
              if (void 0 !== (vu = Xu(uu, Qu, Eu, xu, iu, Wu, Hu, Au, Su, Iu, nu, yu))) return vu;
              continue
            }
            if (uu * zu * Ru < cu) {
              if (void 0 !== (vu = qu.scanBipartite(uu, Qu, Eu, xu, iu, Wu, Hu, Au, Su, Iu, nu, yu))) return vu;
              continue
            }
          }
          var uE = Ou(uu, Qu, iu, Wu, Hu, Au, Lu, tu);
          if (iu < uE)
            if (uu * (uE - iu) < bu) {
              if (void 0 !== (vu = lu(uu, Qu + 1, Eu, iu, uE, Hu, Au, Su, Iu, nu, yu))) return vu
            } else if (Qu === uu - 2) {
            if (void 0 !== (vu = xu ? qu.sweepBipartite(uu, Eu, Su, Iu, nu, yu, iu, uE, Hu, Au) : qu.sweepBipartite(uu, Eu, iu, uE, Hu, Au, Su, Iu, nu, yu))) return vu
          } else Ju(Ku++, Qu + 1, iu, uE, Su, Iu, xu, -1 / 0, 1 / 0), Ju(Ku++, Qu + 1, Su, Iu, iu, uE, 1 ^ xu, -1 / 0, 1 / 0);
          if (uE < Wu) {
            var EE = fu(uu, Qu, Su, Iu, nu, yu),
              jE = nu[Vu * EE + Qu],
              sE = Yu(uu, Qu, EE, Iu, nu, yu, jE);
            if (sE < Iu && Ju(Ku++, Qu, uE, Wu, sE, Iu, (4 | xu) + (Tu ? 16 : 0), jE, tu), Su < EE && Ju(Ku++, Qu, uE, Wu, Su, EE, (2 | xu) + (Tu ? 16 : 0), Lu, jE), EE + 1 === sE) {
              if (void 0 !== (vu = Tu ? au(uu, Qu, Eu, uE, Wu, Hu, Au, EE, nu, yu[EE]) : du(uu, Qu, Eu, xu, uE, Wu, Hu, Au, EE, nu, yu[EE]))) return vu
            } else if (EE < sE) {
              var UE;
              if (Tu) {
                if (uE < (UE = gu(uu, Qu, uE, Wu, Hu, Au, jE))) {
                  var ZE = Yu(uu, Qu, uE, UE, Hu, Au, jE);
                  if (Qu === uu - 2) {
                    if (uE < ZE && void 0 !== (vu = qu.sweepComplete(uu, Eu, uE, ZE, Hu, Au, EE, sE, nu, yu))) return vu;
                    if (ZE < UE && void 0 !== (vu = qu.sweepBipartite(uu, Eu, ZE, UE, Hu, Au, EE, sE, nu, yu))) return vu
                  } else uE < ZE && Ju(Ku++, Qu + 1, uE, ZE, EE, sE, 16, -1 / 0, 1 / 0), ZE < UE && (Ju(Ku++, Qu + 1, ZE, UE, EE, sE, 0, -1 / 0, 1 / 0), Ju(Ku++, Qu + 1, EE, sE, ZE, UE, 1, -1 / 0, 1 / 0))
                }
              } else uE < (UE = xu ? Mu(uu, Qu, uE, Wu, Hu, Au, jE) : gu(uu, Qu, uE, Wu, Hu, Au, jE)) && (Qu === uu - 2 ? vu = xu ? qu.sweepBipartite(uu, Eu, EE, sE, nu, yu, uE, UE, Hu, Au) : qu.sweepBipartite(uu, Eu, uE, UE, Hu, Au, EE, sE, nu, yu) : (Ju(Ku++, Qu + 1, uE, UE, EE, sE, xu, -1 / 0, 1 / 0), Ju(Ku++, Qu + 1, EE, sE, uE, UE, 1 ^ xu, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var su = ju(38633),
      Uu = ju(38636),
      Zu = ju(38663),
      Xu = Zu.partial,
      lu = Zu.full,
      qu = ju(38651),
      fu = ju(38665),
      Cu = ju(38673),
      bu = 128,
      cu = 1 << 22,
      Nu = 1 << 22,
      Ou = Cu("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      Yu = Cu("lo===p0", ["p0"]),
      hu = Cu("lo<p0", ["p0"]),
      Du = Cu("hi<=p0", ["p0"]),
      gu = Cu("lo<=p0&&p0<=hi", ["p0"]),
      Mu = Cu("lo<p0&&p0<=hi", ["p0"]),
      eu = 6,
      Gu = 2,
      pu = su.mallocInt32(1024),
      wu = su.mallocDouble(1024);

    function Ju(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu) {
      var fu = eu * uu;
      pu[fu] = Eu, pu[fu + 1] = ju, pu[fu + 2] = su, pu[fu + 3] = Uu, pu[fu + 4] = Zu, pu[fu + 5] = Xu;
      var Cu = Gu * uu;
      wu[Cu] = lu, wu[Cu + 1] = qu
    }

    function du(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu, Cu) {
      var bu = 2 * uu,
        cu = qu * bu,
        Nu = fu[cu + Eu];
      uu: for (var Ou = Uu, Yu = Uu * bu; Ou < Zu; ++Ou, Yu += bu) {
        var hu = Xu[Yu + Eu],
          Du = Xu[Yu + Eu + uu];
        if (!(Nu < hu || Du < Nu) && (!su || Nu !== hu)) {
          for (var gu, Mu = lu[Ou], eu = Eu + 1; eu < uu; ++eu) {
            hu = Xu[Yu + eu], Du = Xu[Yu + eu + uu];
            var Gu = fu[cu + eu],
              pu = fu[cu + eu + uu];
            if (Du < Gu || pu < hu) continue uu
          }
          if (void 0 !== (gu = su ? ju(Cu, Mu) : ju(Mu, Cu))) return gu
        }
      }
    }

    function au(uu, Eu, ju, su, Uu, Zu, Xu, lu, qu, fu) {
      var Cu = 2 * uu,
        bu = lu * Cu,
        cu = qu[bu + Eu];
      uu: for (var Nu = su, Ou = su * Cu; Nu < Uu; ++Nu, Ou += Cu) {
        var Yu = Xu[Nu];
        if (Yu !== fu) {
          var hu = Zu[Ou + Eu],
            Du = Zu[Ou + Eu + uu];
          if (!(cu < hu || Du < cu)) {
            for (var gu = Eu + 1; gu < uu; ++gu) {
              hu = Zu[Ou + gu], Du = Zu[Ou + gu + uu];
              var Mu = qu[bu + gu],
                eu = qu[bu + gu + uu];
              if (Du < Mu || eu < hu) continue uu
            }
            var Gu = ju(Yu, fu);
            if (void 0 !== Gu) return Gu
          }
        }
      }
    }
  },
  38665: (uu, Eu, ju) => {
    uu.exports = function(uu, Eu, ju, Xu, lu, qu) {
      if (Xu <= ju + 1) return ju;
      var fu = ju,
        Cu = Xu,
        bu = Xu + ju >>> 1,
        cu = 2 * uu,
        Nu = bu,
        Ou = lu[cu * bu + Eu];
      for (; fu < Cu;) {
        if (Cu - fu < Uu) {
          Zu(uu, Eu, fu, Cu, lu, qu), Ou = lu[cu * bu + Eu];
          break
        }
        var Yu = Cu - fu,
          hu = Math.random() * Yu + fu | 0,
          Du = lu[cu * hu + Eu],
          gu = Math.random() * Yu + fu | 0,
          Mu = lu[cu * gu + Eu],
          eu = Math.random() * Yu + fu | 0,
          Gu = lu[cu * eu + Eu];
        Du <= Mu ? Gu >= Mu ? (Nu = gu, Ou = Mu) : Du >= Gu ? (Nu = hu, Ou = Du) : (Nu = eu, Ou = Gu) : Mu >= Gu ? (Nu = gu, Ou = Mu) : Gu >= Du ? (Nu = hu, Ou = Du) : (Nu = eu, Ou = Gu);
        for (var pu = cu * (Cu - 1), wu = cu * Nu, Ju = 0; Ju < cu; ++Ju, ++pu, ++wu) {
          var du = lu[pu];
          lu[pu] = lu[wu], lu[wu] = du
        }
        var au = qu[Cu - 1];
        qu[Cu - 1] = qu[Nu], qu[Nu] = au;
        for (pu = cu * (Cu - 1), wu = cu * (Nu = su(uu, Eu, fu, Cu - 1, lu, qu, Ou)), Ju = 0; Ju < cu; ++Ju, ++pu, ++wu) {
          du = lu[pu];
          lu[pu] = lu[wu], lu[wu] = du
        }
        au = qu[Cu - 1];
        if (qu[Cu - 1] = qu[Nu], qu[Nu] = au, bu < Nu) {
          for (Cu = Nu - 1; fu < Cu && lu[cu * (Cu - 1) + Eu] === Ou;) Cu -= 1;
          Cu += 1
        } else {
          if (!(Nu < bu)) break;
          for (fu = Nu + 1; fu < Cu && lu[cu * fu + Eu] === Ou;) fu += 1
        }
      }
      return su(uu, Eu, ju, bu, lu, qu, lu[cu * bu + Eu])
    };
    var su = ju(38673)("lo<p0", ["p0"]),
      Uu = 8;

    function Zu(uu, Eu, ju, su, Uu, Zu) {
      for (var Xu = 2 * uu, lu = Xu * (ju + 1) + Eu, qu = ju + 1; qu < su; ++qu, lu += Xu)
        for (var fu = Uu[lu], Cu = qu, bu = Xu * (qu - 1); Cu > ju && Uu[bu + Eu] > fu; --Cu, bu -= Xu) {
          for (var cu = bu, Nu = bu + Xu, Ou = 0; Ou < Xu; ++Ou, ++cu, ++Nu) {
            var Yu = Uu[cu];
            Uu[cu] = Uu[Nu], Uu[Nu] = Yu
          }
          var hu = Zu[Cu];
          Zu[Cu] = Zu[Cu - 1], Zu[Cu - 1] = hu
        }
    }
  },
  38673: uu => {
    uu.exports = function(uu, ju) {
      var su = "abcdef".split("").concat(ju),
        Uu = [];
      uu.indexOf("lo") >= 0 && Uu.push("lo=e[k+n]");
      uu.indexOf("hi") >= 0 && Uu.push("hi=e[k+o]");
      return su.push(Eu.replace("_", Uu.join()).replace("$", uu)), Function.apply(void 0, su)
    };
    var Eu = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  38653: uu => {
    uu.exports = function(uu, su) {
      su <= 4 * Eu ? ju(0, su - 1, uu) : fu(0, su - 1, uu)
    };
    var Eu = 32;

    function ju(uu, Eu, ju) {
      for (var su = 2 * (uu + 1), Uu = uu + 1; Uu <= Eu; ++Uu) {
        for (var Zu = ju[su++], Xu = ju[su++], lu = Uu, qu = su - 2; lu-- > uu;) {
          var fu = ju[qu - 2],
            Cu = ju[qu - 1];
          if (fu < Zu) break;
          if (fu === Zu && Cu < Xu) break;
          ju[qu] = fu, ju[qu + 1] = Cu, qu -= 2
        }
        ju[qu] = Zu, ju[qu + 1] = Xu
      }
    }

    function su(uu, Eu, ju) {
      Eu *= 2;
      var su = ju[uu *= 2],
        Uu = ju[uu + 1];
      ju[uu] = ju[Eu], ju[uu + 1] = ju[Eu + 1], ju[Eu] = su, ju[Eu + 1] = Uu
    }

    function Uu(uu, Eu, ju) {
      Eu *= 2, ju[uu *= 2] = ju[Eu], ju[uu + 1] = ju[Eu + 1]
    }

    function Zu(uu, Eu, ju, su) {
      Eu *= 2, ju *= 2;
      var Uu = su[uu *= 2],
        Zu = su[uu + 1];
      su[uu] = su[Eu], su[uu + 1] = su[Eu + 1], su[Eu] = su[ju], su[Eu + 1] = su[ju + 1], su[ju] = Uu, su[ju + 1] = Zu
    }

    function Xu(uu, Eu, ju, su, Uu) {
      Eu *= 2, Uu[uu *= 2] = Uu[Eu], Uu[Eu] = ju, Uu[uu + 1] = Uu[Eu + 1], Uu[Eu + 1] = su
    }

    function lu(uu, Eu, ju) {
      Eu *= 2;
      var su = ju[uu *= 2],
        Uu = ju[Eu];
      return !(su < Uu) && (su !== Uu || ju[uu + 1] > ju[Eu + 1])
    }

    function qu(uu, Eu, ju, su) {
      var Uu = su[uu *= 2];
      return Uu < Eu || Uu === Eu && su[uu + 1] < ju
    }

    function fu(uu, Cu, bu) {
      var cu = (Cu - uu + 1) / 6 | 0,
        Nu = uu + cu,
        Ou = Cu - cu,
        Yu = uu + Cu >> 1,
        hu = Yu - cu,
        Du = Yu + cu,
        gu = Nu,
        Mu = hu,
        eu = Yu,
        Gu = Du,
        pu = Ou,
        wu = uu + 1,
        Ju = Cu - 1,
        du = 0;
      lu(gu, Mu, bu) && (du = gu, gu = Mu, Mu = du), lu(Gu, pu, bu) && (du = Gu, Gu = pu, pu = du), lu(gu, eu, bu) && (du = gu, gu = eu, eu = du), lu(Mu, eu, bu) && (du = Mu, Mu = eu, eu = du), lu(gu, Gu, bu) && (du = gu, gu = Gu, Gu = du), lu(eu, Gu, bu) && (du = eu, eu = Gu, Gu = du), lu(Mu, pu, bu) && (du = Mu, Mu = pu, pu = du), lu(Mu, eu, bu) && (du = Mu, Mu = eu, eu = du), lu(Gu, pu, bu) && (du = Gu, Gu = pu, pu = du);
      for (var au = bu[2 * Mu], Pu = bu[2 * Mu + 1], ou = bu[2 * Gu], ku = bu[2 * Gu + 1], mu = 2 * gu, vu = 2 * eu, Ku = 2 * pu, Vu = 2 * Nu, ru = 2 * Yu, Qu = 2 * Ou, iu = 0; iu < 2; ++iu) {
        var Wu = bu[mu + iu],
          Su = bu[vu + iu],
          Iu = bu[Ku + iu];
        bu[Vu + iu] = Wu, bu[ru + iu] = Su, bu[Qu + iu] = Iu
      }
      Uu(hu, uu, bu), Uu(Du, Cu, bu);
      for (var Fu = wu; Fu <= Ju; ++Fu)
        if (qu(Fu, au, Pu, bu)) Fu !== wu && su(Fu, wu, bu), ++wu;
        else if (!qu(Fu, ou, ku, bu))
        for (;;) {
          if (qu(Ju, ou, ku, bu)) {
            qu(Ju, au, Pu, bu) ? (Zu(Fu, wu, Ju, bu), ++wu, --Ju) : (su(Fu, Ju, bu), --Ju);
            break
          }
          if (--Ju < Fu) break
        }
      Xu(uu, wu - 1, au, Pu, bu), Xu(Cu, Ju + 1, ou, ku, bu), wu - 2 - uu <= Eu ? ju(uu, wu - 2, bu) : fu(uu, wu - 2, bu), Cu - (Ju + 2) <= Eu ? ju(Ju + 2, Cu, bu) : fu(Ju + 2, Cu, bu), Ju - wu <= Eu ? ju(wu, Ju, bu) : fu(wu, Ju, bu)
    }
  },
  38651: (uu, Eu, ju) => {
    uu.exports = {
      init: function(uu) {
        var Eu = Uu.nextPow2(uu);
        qu.length < Eu && (su.free(qu), qu = su.mallocInt32(Eu));
        fu.length < Eu && (su.free(fu), fu = su.mallocInt32(Eu));
        Cu.length < Eu && (su.free(Cu), Cu = su.mallocInt32(Eu));
        bu.length < Eu && (su.free(bu), bu = su.mallocInt32(Eu));
        cu.length < Eu && (su.free(cu), cu = su.mallocInt32(Eu));
        Nu.length < Eu && (su.free(Nu), Nu = su.mallocInt32(Eu));
        var ju = 8 * Eu;
        Ou.length < ju && (su.free(Ou), Ou = su.mallocDouble(ju))
      },
      sweepBipartite: function(uu, Eu, ju, su, Uu, lu, cu, Nu, Du, gu) {
        for (var Mu = 0, eu = 2 * uu, Gu = uu - 1, pu = eu - 1, wu = ju; wu < su; ++wu) {
          var Ju = lu[wu],
            du = eu * wu;
          Ou[Mu++] = Uu[du + Gu], Ou[Mu++] = -(Ju + 1), Ou[Mu++] = Uu[du + pu], Ou[Mu++] = Ju
        }
        for (wu = cu; wu < Nu; ++wu) {
          Ju = gu[wu] + Xu;
          var au = eu * wu;
          Ou[Mu++] = Du[au + Gu], Ou[Mu++] = -Ju, Ou[Mu++] = Du[au + pu], Ou[Mu++] = Ju
        }
        var Pu = Mu >>> 1;
        Zu(Ou, Pu);
        var ou = 0,
          ku = 0;
        for (wu = 0; wu < Pu; ++wu) {
          var mu = 0 | Ou[2 * wu + 1];
          if (mu >= Xu) Yu(Cu, bu, ku--, mu = mu - Xu | 0);
          else if (mu >= 0) Yu(qu, fu, ou--, mu);
          else if (mu <= -Xu) {
            mu = -mu - Xu | 0;
            for (var vu = 0; vu < ou; ++vu) {
              if (void 0 !== (Ku = Eu(qu[vu], mu))) return Ku
            }
            hu(Cu, bu, ku++, mu)
          } else {
            mu = -mu - 1 | 0;
            for (vu = 0; vu < ku; ++vu) {
              var Ku;
              if (void 0 !== (Ku = Eu(mu, Cu[vu]))) return Ku
            }
            hu(qu, fu, ou++, mu)
          }
        }
      },
      sweepComplete: function(uu, Eu, ju, su, Uu, Xu, lu, Du, gu, Mu) {
        for (var eu = 0, Gu = 2 * uu, pu = uu - 1, wu = Gu - 1, Ju = ju; Ju < su; ++Ju) {
          var du = Xu[Ju] + 1 << 1,
            au = Gu * Ju;
          Ou[eu++] = Uu[au + pu], Ou[eu++] = -du, Ou[eu++] = Uu[au + wu], Ou[eu++] = du
        }
        for (Ju = lu; Ju < Du; ++Ju) {
          du = Mu[Ju] + 1 << 1;
          var Pu = Gu * Ju;
          Ou[eu++] = gu[Pu + pu], Ou[eu++] = 1 | -du, Ou[eu++] = gu[Pu + wu], Ou[eu++] = 1 | du
        }
        var ou = eu >>> 1;
        Zu(Ou, ou);
        var ku = 0,
          mu = 0,
          vu = 0;
        for (Ju = 0; Ju < ou; ++Ju) {
          var Ku = 0 | Ou[2 * Ju + 1],
            Vu = 1 & Ku;
          if (Ju < ou - 1 && Ku >> 1 === Ou[2 * Ju + 3] >> 1 && (Vu = 2, Ju += 1), Ku < 0) {
            for (var ru = -(Ku >> 1) - 1, Qu = 0; Qu < vu; ++Qu) {
              if (void 0 !== (iu = Eu(cu[Qu], ru))) return iu
            }
            if (0 !== Vu)
              for (Qu = 0; Qu < ku; ++Qu) {
                if (void 0 !== (iu = Eu(qu[Qu], ru))) return iu
              }
            if (1 !== Vu)
              for (Qu = 0; Qu < mu; ++Qu) {
                var iu;
                if (void 0 !== (iu = Eu(Cu[Qu], ru))) return iu
              }
            0 === Vu ? hu(qu, fu, ku++, ru) : 1 === Vu ? hu(Cu, bu, mu++, ru) : 2 === Vu && hu(cu, Nu, vu++, ru)
          } else {
            ru = (Ku >> 1) - 1;
            0 === Vu ? Yu(qu, fu, ku--, ru) : 1 === Vu ? Yu(Cu, bu, mu--, ru) : 2 === Vu && Yu(cu, Nu, vu--, ru)
          }
        }
      },
      scanBipartite: function(uu, Eu, ju, su, Uu, lu, Cu, bu, cu, Nu, Du, gu) {
        var Mu = 0,
          eu = 2 * uu,
          Gu = Eu,
          pu = Eu + uu,
          wu = 1,
          Ju = 1;
        su ? Ju = Xu : wu = Xu;
        for (var du = Uu; du < lu; ++du) {
          var au = du + wu,
            Pu = eu * du;
          Ou[Mu++] = Cu[Pu + Gu], Ou[Mu++] = -au, Ou[Mu++] = Cu[Pu + pu], Ou[Mu++] = au
        }
        for (du = cu; du < Nu; ++du) {
          au = du + Ju;
          var ou = eu * du;
          Ou[Mu++] = Du[ou + Gu], Ou[Mu++] = -au
        }
        var ku = Mu >>> 1;
        Zu(Ou, ku);
        var mu = 0;
        for (du = 0; du < ku; ++du) {
          var vu = 0 | Ou[2 * du + 1];
          if (vu < 0) {
            var Ku = !1;
            if ((au = -vu) >= Xu ? (Ku = !su, au -= Xu) : (Ku = !!su, au -= 1), Ku) hu(qu, fu, mu++, au);
            else {
              var Vu = gu[au],
                ru = eu * au,
                Qu = Du[ru + Eu + 1],
                iu = Du[ru + Eu + 1 + uu];
              uu: for (var Wu = 0; Wu < mu; ++Wu) {
                var Su = qu[Wu],
                  Iu = eu * Su;
                if (!(iu < Cu[Iu + Eu + 1] || Cu[Iu + Eu + 1 + uu] < Qu)) {
                  for (var Fu = Eu + 2; Fu < uu; ++Fu)
                    if (Du[ru + Fu + uu] < Cu[Iu + Fu] || Cu[Iu + Fu + uu] < Du[ru + Fu]) continue uu;
                  var Bu, Lu = bu[Su];
                  if (void 0 !== (Bu = su ? ju(Vu, Lu) : ju(Lu, Vu))) return Bu
                }
              }
            }
          } else Yu(qu, fu, mu--, vu - wu)
        }
      },
      scanComplete: function(uu, Eu, ju, su, Uu, lu, fu, Cu, bu, cu, Nu) {
        for (var Yu = 0, hu = 2 * uu, Du = Eu, gu = Eu + uu, Mu = su; Mu < Uu; ++Mu) {
          var eu = Mu + Xu,
            Gu = hu * Mu;
          Ou[Yu++] = lu[Gu + Du], Ou[Yu++] = -eu, Ou[Yu++] = lu[Gu + gu], Ou[Yu++] = eu
        }
        for (Mu = Cu; Mu < bu; ++Mu) {
          eu = Mu + 1;
          var pu = hu * Mu;
          Ou[Yu++] = cu[pu + Du], Ou[Yu++] = -eu
        }
        var wu = Yu >>> 1;
        Zu(Ou, wu);
        var Ju = 0;
        for (Mu = 0; Mu < wu; ++Mu) {
          var du = 0 | Ou[2 * Mu + 1];
          if (du < 0) {
            if ((eu = -du) >= Xu) qu[Ju++] = eu - Xu;
            else {
              var au = Nu[eu -= 1],
                Pu = hu * eu,
                ou = cu[Pu + Eu + 1],
                ku = cu[Pu + Eu + 1 + uu];
              uu: for (var mu = 0; mu < Ju; ++mu) {
                var vu = qu[mu],
                  Ku = fu[vu];
                if (Ku === au) break;
                var Vu = hu * vu;
                if (!(ku < lu[Vu + Eu + 1] || lu[Vu + Eu + 1 + uu] < ou)) {
                  for (var ru = Eu + 2; ru < uu; ++ru)
                    if (cu[Pu + ru + uu] < lu[Vu + ru] || lu[Vu + ru + uu] < cu[Pu + ru]) continue uu;
                  var Qu = ju(Ku, au);
                  if (void 0 !== Qu) return Qu
                }
              }
            }
          } else {
            for (eu = du - Xu, mu = Ju - 1; mu >= 0; --mu)
              if (qu[mu] === eu) {
                for (ru = mu + 1; ru < Ju; ++ru) qu[ru - 1] = qu[ru];
                break
              }-- Ju
          }
        }
      }
    };
    var su = ju(38633),
      Uu = ju(38636),
      Zu = ju(38653),
      Xu = 1 << 28,
      lu = 1024,
      qu = su.mallocInt32(lu),
      fu = su.mallocInt32(lu),
      Cu = su.mallocInt32(lu),
      bu = su.mallocInt32(lu),
      cu = su.mallocInt32(lu),
      Nu = su.mallocInt32(lu),
      Ou = su.mallocDouble(8192);

    function Yu(uu, Eu, ju, su) {
      var Uu = Eu[su],
        Zu = uu[ju - 1];
      uu[Uu] = Zu, Eu[Zu] = Uu
    }

    function hu(uu, Eu, ju, su) {
      uu[ju] = su, Eu[su] = ju
    }
  },
  38639: uu => {
    function Eu(uu, ju, su) {
      var Uu = 0 | uu[su];
      if (Uu <= 0) return [];
      var Zu, Xu = new Array(Uu);
      if (su === uu.length - 1)
        for (Zu = 0; Zu < Uu; ++Zu) Xu[Zu] = ju;
      else
        for (Zu = 0; Zu < Uu; ++Zu) Xu[Zu] = Eu(uu, ju, su + 1);
      return Xu
    }
    uu.exports = function(uu, ju) {
      switch ("undefined" === typeof ju && (ju = 0), typeof uu) {
        case "number":
          if (uu > 0) return function(uu, Eu) {
            var ju, su;
            for (ju = new Array(uu), su = 0; su < uu; ++su) ju[su] = Eu;
            return ju
          }(0 | uu, ju);
          break;
        case "object":
          if ("number" === typeof uu.length) return Eu(uu, ju, 0)
      }
      return []
    }
  },
  38599: (uu, Eu, ju) => {
    uu.exports = function() {
      var uu = this;
      this.components = {}, this.comps = this.components;
      var Eu = this.components,
        ju = 1,
        Uu = {},
        Zu = [],
        Xu = [],
        lu = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function qu(uu, ju) {
        var su = Eu[ju],
          Zu = Uu[ju],
          Xu = Zu.hash[uu];
        Xu && (Zu.remove(uu), su.jK && (su.multi ? (Xu.forEach((Eu => {
          Eu && su.jK(uu, Eu)
        })), Xu.length = 0) : su.jK(uu, Xu)), lu.removals.push(Zu), fu())
      }

      function fu() {
        lu.timeout || (lu.timeout = !0, setTimeout(Cu, 1))
      }

      function Cu() {
        lu.timeout = !1, bu()
      }

      function bu() {
        lu.multiComps.length && function(uu) {
          for (var Eu = 0; Eu < uu.length; Eu++) {
            var {
              entID: ju,
              data: su
            } = uu[Eu], Uu = su.hash[ju];
            if (Uu) {
              for (var Zu = 0; Zu < Uu.length; Zu++) Uu[Zu] || (Uu.splice(Zu, 1), Zu--);
              0 === Uu.length && (su.remove(ju), lu.removals.push(su))
            }
          }
          uu.length = 0
        }(lu.multiComps), lu.removals.length && function(uu) {
          for (var Eu = 0; Eu < uu.length; Eu++) {
            uu[Eu].flush()
          }
          uu.length = 0
        }(lu.removals)
      }
      this.CY = Uu, this._systems = Zu, this._renderSystems = Xu, this.pT = function(Eu) {
        var su = ju++;
        return Array.isArray(Eu) && Eu.forEach((Eu => uu.yV(su, Eu))), su
      }, this.deleteEntity = function(Eu) {
        return Object.keys(Uu).forEach((uu => {
          Uu[uu].hash[Eu] && qu(Eu, uu)
        })), uu
      }, this.HEu = function(uu) {
        if (!uu) throw new Error("Missing component definition");
        var ju = uu.name;
        if (!ju) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof ju) throw new Error("Component name must be a string.");
        if ("" === ju) throw new Error("Component name must be a non-empty string.");
        if (Uu[ju]) throw new Error(`Component ${ju} already exists.`);
        var lu = {};
        return lu.name = ju, lu.multi = !!uu.multi, lu.order = isNaN(uu.order) ? 99 : uu.order, lu.stateConstructor = uu.stateConstructor || null, lu.state = uu.state || {}, lu.lG = uu.lG || null, lu.jK = uu.jK || null, lu.system = uu.system || null, lu.hG = uu.hG || null, Eu[ju] = lu, Uu[ju] = new su, Uu[ju]._pendingMultiCleanup = !1, Uu[ju]._multiCleanupIDs = lu.multi ? [] : null, lu.system && (Zu.push(ju), Zu.sort(((uu, ju) => Eu[uu].order - Eu[ju].order))), lu.hG && (Xu.push(ju), Xu.sort(((uu, ju) => Eu[uu].order - Eu[ju].order))), ju
      }, this.overwriteComponent = function(uu, ju) {
        var su = Eu[uu];
        if (!su) throw new Error(`Unknown component: ${uu}`);
        if (!ju) throw new Error("Missing component definition");
        if (su.name !== ju.name) throw new Error("Overwriting component must use the same name property.");
        var lu = {};
        lu.name = uu, lu.multi = !!ju.multi, lu.order = isNaN(ju.order) ? 99 : ju.order, lu.state = ju.state || {}, lu.lG = ju.lG || null, lu.jK = ju.jK || null, lu.system = ju.system || null, lu.hG = ju.hG || null, Eu[uu] = lu, Uu[uu]._pendingMultiCleanup = !1, Uu[uu]._multiCleanupIDs = lu.multi ? [] : null;
        var qu = Zu.indexOf(uu);
        lu.system && qu < 0 && Zu.push(uu), !lu.system && qu >= 0 && Zu.splice(qu, 1), Zu.sort(((uu, ju) => Eu[uu].order - Eu[ju].order));
        var fu = Xu.indexOf(uu);
        lu.hG && fu < 0 && Xu.push(uu), !lu.hG && fu >= 0 && Xu.splice(fu, 1), Xu.sort(((uu, ju) => Eu[uu].order - Eu[ju].order));
        var Cu = lu.state;
        return this.xV(uu).forEach((uu => {
          for (var Eu in Cu) Eu in uu || (uu[Eu] = Cu[Eu]);
          lu.lG && lu.lG(uu.HV, uu)
        })), uu
      }, this.deleteComponent = function(ju) {
        var su = Uu[ju];
        if (!su) throw new Error(`Unknown component: ${ju}`);
        su.flush(), su.list.forEach((uu => {
          uu && qu(uu.HV || uu[0].HV, ju)
        }));
        var lu = Zu.indexOf(ju),
          fu = Xu.indexOf(ju);
        return lu > -1 && Zu.splice(lu, 1), fu > -1 && Xu.splice(fu, 1), Uu[ju].dispose(), delete Uu[ju], delete Eu[ju], uu
      }, this.yV = function(uu, ju, su) {
        var Zu, Xu = Eu[ju],
          lu = Uu[ju];
        if (!lu) throw new Error(`Unknown component: ${ju}.`);
        if (lu.hash[uu] && !Xu.multi) throw new Error(`Entity ${uu} already has component: ${ju}.`);
        if (Xu.stateConstructor) {
          if (!(Zu = new Xu.stateConstructor).hasOwnProperty("HV")) throw new Error(`Component ${Xu.name} stateConstructor type does not have property __id`);
          Object.assign(Zu, Xu.state, su)
        } else Zu = {
          HV: uu,
          ...Xu.state,
          ...su
        };
        if (Zu.HV = uu, Xu.multi) {
          var qu = lu.hash[uu];
          qu || (qu = [], lu.add(uu, qu)), qu.push(Zu)
        } else lu.add(uu, Zu);
        return Xu.lG && Xu.lG(uu, Zu), this
      }, this.xuu = function(uu, Eu) {
        var ju = Uu[Eu];
        if (!ju) throw new Error(`Unknown component: ${Eu}.`);
        return !!ju.hash[uu]
      }, this.zV = function(Eu, ju) {
        if (!Uu[ju]) throw new Error(`Unknown component: ${ju}.`);
        return qu(Eu, ju), uu
      }, this.getState = function(uu, Eu) {
        var ju = Uu[Eu];
        if (!ju) throw new Error(`Unknown component: ${Eu}.`);
        return ju.hash[uu]
      }, this.xV = function(uu) {
        var Eu = Uu[uu];
        if (!Eu) throw new Error(`Unknown component: ${uu}.`);
        return bu(), Eu.list
      }, this.aEu = function(uu) {
        if (!Uu[uu]) throw new Error(`Unknown component: ${uu}.`);
        var Eu = Uu[uu].hash;
        return uu => Eu[uu]
      }, this.KEu = function(uu) {
        if (!Uu[uu]) throw new Error(`Unknown component: ${uu}.`);
        var Eu = Uu[uu].hash;
        return uu => !!Eu[uu]
      }, this.Tb = function(ju) {
        bu();
        for (var su = 0; su < Zu.length; su++) {
          var Xu = Zu[su],
            lu = Eu[Xu],
            qu = Uu[Xu];
          lu.system(ju, qu.list), bu()
        }
        return uu
      }, this.render = function(ju) {
        bu();
        for (var su = 0; su < Xu.length; su++) {
          var Zu = Xu[su],
            lu = Eu[Zu],
            qu = Uu[Zu];
          lu.hG(ju, qu.list), bu()
        }
        return uu
      }, this.removeMultiComponent = function(ju, su, Zu) {
        var Xu = Eu[su],
          qu = Uu[su];
        if (!qu) throw new Error(`Unknown component: ${su}.`);
        if (!Xu.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(uu, Eu, ju, su) {
          var Uu = ju.hash[uu];
          if (Uu) {
            var Zu = Uu[su];
            Zu && (Uu[su] = null, Eu.jK && Eu.jK(uu, Zu), lu.multiComps.push({
              entID: uu,
              data: ju
            }), fu())
          }
        }(ju, Xu, qu, Zu), uu
      }
    };
    var su = ju(38606)
  },
  38606: uu => {
    function Eu(uu, Eu) {
      var ju = uu._map[Eu];
      if (delete uu.hash[Eu], delete uu._map[Eu], ju === uu.list.length - 1) uu.list.pop(), uu._idList.pop();
      else {
        var su = uu.list.pop();
        uu.list[ju] = su;
        var Uu = uu._idList.pop();
        uu._idList[ju] = Uu, uu._map[Uu] = ju
      }
    }
    uu.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(uu, Eu) {
        if ("number" === typeof this._map[uu]) {
          var ju = this._map[uu];
          this.hash[uu] = Eu, this.list[ju] = Eu, this._idList[ju] = uu
        } else this._map[uu] = this.list.length, this.hash[uu] = Eu, this.list.push(Eu), this._idList.push(uu)
      }
      remove(uu) {
        var Eu = this._map[uu];
        this.hash[uu] = null, this.list[Eu] = null, this._pendingRemovals.push(uu)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var uu = 0; uu < this._pendingRemovals.length; uu++) {
          var ju = this._pendingRemovals[uu];
          null === this.hash[ju] && Eu(this, ju)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  38423: (uu, Eu, ju) => {
    uu = ju.nmd(uu);
    var su = "__lodash_hash_undefined__",
      Uu = 9007199254740991,
      Zu = "[object Arguments]",
      Xu = "[object Boolean]",
      lu = "[object Date]",
      qu = "[object Function]",
      fu = "[object GeneratorFunction]",
      Cu = "[object Map]",
      bu = "[object Number]",
      cu = "[object Object]",
      Nu = "[object Promise]",
      Ou = "[object RegExp]",
      Yu = "[object Set]",
      hu = "[object String]",
      Du = "[object Symbol]",
      gu = "[object WeakMap]",
      Mu = "[object ArrayBuffer]",
      eu = "[object DataView]",
      Gu = "[object Float32Array]",
      pu = "[object Float64Array]",
      wu = "[object Int8Array]",
      Ju = "[object Int16Array]",
      du = "[object Int32Array]",
      au = "[object Uint8Array]",
      Pu = "[object Uint8ClampedArray]",
      ou = "[object Uint16Array]",
      ku = "[object Uint32Array]",
      mu = /\w*$/,
      vu = /^\[object .+?Constructor\]$/,
      Ku = /^(?:0|[1-9]\d*)$/,
      Vu = {};
    Vu[Zu] = Vu["[object Array]"] = Vu[Mu] = Vu[eu] = Vu[Xu] = Vu[lu] = Vu[Gu] = Vu[pu] = Vu[wu] = Vu[Ju] = Vu[du] = Vu[Cu] = Vu[bu] = Vu[cu] = Vu[Ou] = Vu[Yu] = Vu[hu] = Vu[Du] = Vu[au] = Vu[Pu] = Vu[ou] = Vu[ku] = !0, Vu["[object Error]"] = Vu[qu] = Vu[gu] = !1;
    var ru = "object" == typeof ju.g && ju.g && ju.g.Object === Object && ju.g,
      Qu = "object" == typeof self && self && self.Object === Object && self,
      iu = ru || Qu || Function("return this")(),
      Wu = Eu && !Eu.nodeType && Eu,
      Su = Wu && uu && !uu.nodeType && uu,
      Iu = Su && Su.exports === Wu;

    function Fu(uu, Eu) {
      return uu.set(Eu[0], Eu[1]), uu
    }

    function Bu(uu, Eu) {
      return uu.add(Eu), uu
    }

    function Lu(uu, Eu, ju, su) {
      var Uu = -1,
        Zu = uu ? uu.length : 0;
      for (su && Zu && (ju = uu[++Uu]); ++Uu < Zu;) ju = Eu(ju, uu[Uu], Uu, uu);
      return ju
    }

    function tu(uu) {
      var Eu = !1;
      if (null != uu && "function" != typeof uu.toString) try {
        Eu = !!(uu + "")
      } catch (ju) {}
      return Eu
    }

    function xu(uu) {
      var Eu = -1,
        ju = Array(uu.size);
      return uu.forEach((function(uu, su) {
        ju[++Eu] = [su, uu]
      })), ju
    }

    function Tu(uu, Eu) {
      return function(ju) {
        return uu(Eu(ju))
      }
    }

    function Hu(uu) {
      var Eu = -1,
        ju = Array(uu.size);
      return uu.forEach((function(uu) {
        ju[++Eu] = uu
      })), ju
    }
    var Au = Array.prototype,
      nu = Function.prototype,
      yu = Object.prototype,
      zu = iu["__core-js_shared__"],
      Ru = function() {
        var uu = /[^.]+$/.exec(zu && zu.keys && zu.keys.IE_PROTO || "");
        return uu ? "Symbol(src)_1." + uu : ""
      }(),
      uE = nu.toString,
      EE = yu.hasOwnProperty,
      jE = yu.toString,
      sE = RegExp("^" + uE.call(EE).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      UE = Iu ? iu.qO : void 0,
      ZE = iu.Symbol,
      XE = iu.Uint8Array,
      lE = Tu(Object.getPrototypeOf, Object),
      qE = Object.create,
      fE = yu.propertyIsEnumerable,
      CE = Au.splice,
      bE = Object.getOwnPropertySymbols,
      cE = UE ? UE.isBuffer : void 0,
      NE = Tu(Object.keys, Object),
      OE = IE(iu, "DataView"),
      YE = IE(iu, "Map"),
      hE = IE(iu, "Promise"),
      DE = IE(iu, "Set"),
      gE = IE(iu, "WeakMap"),
      ME = IE(Object, "create"),
      eE = xE(OE),
      GE = xE(YE),
      pE = xE(hE),
      wE = xE(DE),
      JE = xE(gE),
      dE = ZE ? ZE.prototype : void 0,
      aE = dE ? dE.valueOf : void 0;

    function PE(uu) {
      var Eu = -1,
        ju = uu ? uu.length : 0;
      for (this.clear(); ++Eu < ju;) {
        var su = uu[Eu];
        this.set(su[0], su[1])
      }
    }

    function oE(uu) {
      var Eu = -1,
        ju = uu ? uu.length : 0;
      for (this.clear(); ++Eu < ju;) {
        var su = uu[Eu];
        this.set(su[0], su[1])
      }
    }

    function kE(uu) {
      var Eu = -1,
        ju = uu ? uu.length : 0;
      for (this.clear(); ++Eu < ju;) {
        var su = uu[Eu];
        this.set(su[0], su[1])
      }
    }

    function mE(uu) {
      this.__data__ = new oE(uu)
    }

    function vE(uu, Eu) {
      var ju = HE(uu) || function(uu) {
          return function(uu) {
            return function(uu) {
              return !!uu && "object" == typeof uu
            }(uu) && AE(uu)
          }(uu) && EE.call(uu, "callee") && (!fE.call(uu, "callee") || jE.call(uu) == Zu)
        }(uu) ? function(uu, Eu) {
          for (var ju = -1, su = Array(uu); ++ju < uu;) su[ju] = Eu(ju);
          return su
        }(uu.length, String) : [],
        su = ju.length,
        Uu = !!su;
      for (var Xu in uu) !Eu && !EE.call(uu, Xu) || Uu && ("length" == Xu || LE(Xu, su)) || ju.push(Xu);
      return ju
    }

    function KE(uu, Eu, ju) {
      var su = uu[Eu];
      EE.call(uu, Eu) && TE(su, ju) && (void 0 !== ju || Eu in uu) || (uu[Eu] = ju)
    }

    function VE(uu, Eu) {
      for (var ju = uu.length; ju--;)
        if (TE(uu[ju][0], Eu)) return ju;
      return -1
    }

    function rE(uu, Eu, ju, su, Uu, Nu, gu) {
      var vu;
      if (su && (vu = Nu ? su(uu, Uu, Nu, gu) : su(uu)), void 0 !== vu) return vu;
      if (!zE(uu)) return uu;
      var Ku = HE(uu);
      if (Ku) {
        if (vu = function(uu) {
            var Eu = uu.length,
              ju = uu.constructor(Eu);
            Eu && "string" == typeof uu[0] && EE.call(uu, "index") && (ju.index = uu.index, ju.input = uu.input);
            return ju
          }(uu), !Eu) return function(uu, Eu) {
          var ju = -1,
            su = uu.length;
          Eu || (Eu = Array(su));
          for (; ++ju < su;) Eu[ju] = uu[ju];
          return Eu
        }(uu, vu)
      } else {
        var ru = BE(uu),
          Qu = ru == qu || ru == fu;
        if (nE(uu)) return function(uu, Eu) {
          if (Eu) return uu.slice();
          var ju = new uu.constructor(uu.length);
          return uu.copy(ju), ju
        }(uu, Eu);
        if (ru == cu || ru == Zu || Qu && !Nu) {
          if (tu(uu)) return Nu ? uu : {};
          if (vu = function(uu) {
              return "function" != typeof uu.constructor || tE(uu) ? {} : (Eu = lE(uu), zE(Eu) ? qE(Eu) : {});
              var Eu
            }(Qu ? {} : uu), !Eu) return function(uu, Eu) {
            return WE(uu, FE(uu), Eu)
          }(uu, function(uu, Eu) {
            return uu && WE(Eu, RE(Eu), uu)
          }(vu, uu))
        } else {
          if (!Vu[ru]) return Nu ? uu : {};
          vu = function(uu, Eu, ju, su) {
            var Uu = uu.constructor;
            switch (Eu) {
              case Mu:
                return iE(uu);
              case Xu:
              case lu:
                return new Uu(+uu);
              case eu:
                return function(uu, Eu) {
                  var ju = Eu ? iE(uu.buffer) : uu.buffer;
                  return new uu.constructor(ju, uu.byteOffset, uu.byteLength)
                }(uu, su);
              case Gu:
              case pu:
              case wu:
              case Ju:
              case du:
              case au:
              case Pu:
              case ou:
              case ku:
                return function(uu, Eu) {
                  var ju = Eu ? iE(uu.buffer) : uu.buffer;
                  return new uu.constructor(ju, uu.byteOffset, uu.length)
                }(uu, su);
              case Cu:
                return function(uu, Eu, ju) {
                  var su = Eu ? ju(xu(uu), !0) : xu(uu);
                  return Lu(su, Fu, new uu.constructor)
                }(uu, su, ju);
              case bu:
              case hu:
                return new Uu(uu);
              case Ou:
                return function(uu) {
                  var Eu = new uu.constructor(uu.source, mu.exec(uu));
                  return Eu.lastIndex = uu.lastIndex, Eu
                }(uu);
              case Yu:
                return function(uu, Eu, ju) {
                  var su = Eu ? ju(Hu(uu), !0) : Hu(uu);
                  return Lu(su, Bu, new uu.constructor)
                }(uu, su, ju);
              case Du:
                return Zu = uu, aE ? Object(aE.call(Zu)) : {}
            }
            var Zu
          }(uu, ru, rE, Eu)
        }
      }
      gu || (gu = new mE);
      var iu = gu.get(uu);
      if (iu) return iu;
      if (gu.set(uu, vu), !Ku) var Wu = ju ? function(uu) {
        return function(uu, Eu, ju) {
          var su = Eu(uu);
          return HE(uu) ? su : function(uu, Eu) {
            for (var ju = -1, su = Eu.length, Uu = uu.length; ++ju < su;) uu[Uu + ju] = Eu[ju];
            return uu
          }(su, ju(uu))
        }(uu, RE, FE)
      }(uu) : RE(uu);
      return function(uu, Eu) {
        for (var ju = -1, su = uu ? uu.length : 0; ++ju < su && !1 !== Eu(uu[ju], ju, uu););
      }(Wu || uu, (function(Uu, Zu) {
        Wu && (Uu = uu[Zu = Uu]), KE(vu, Zu, rE(Uu, Eu, ju, su, Zu, uu, gu))
      })), vu
    }

    function QE(uu) {
      return !(!zE(uu) || (Eu = uu, Ru && Ru in Eu)) && (yE(uu) || tu(uu) ? sE : vu).test(xE(uu));
      var Eu
    }

    function iE(uu) {
      var Eu = new uu.constructor(uu.byteLength);
      return new XE(Eu).set(new XE(uu)), Eu
    }

    function WE(uu, Eu, ju, su) {
      ju || (ju = {});
      for (var Uu = -1, Zu = Eu.length; ++Uu < Zu;) {
        var Xu = Eu[Uu],
          lu = su ? su(ju[Xu], uu[Xu], Xu, ju, uu) : void 0;
        KE(ju, Xu, void 0 === lu ? uu[Xu] : lu)
      }
      return ju
    }

    function SE(uu, Eu) {
      var ju = uu.__data__;
      return function(uu) {
        var Eu = typeof uu;
        return "string" == Eu || "number" == Eu || "symbol" == Eu || "boolean" == Eu ? "__proto__" !== uu : null === uu
      }(Eu) ? ju["string" == typeof Eu ? "string" : "hash"] : ju.map
    }

    function IE(uu, Eu) {
      var ju = function(uu, Eu) {
        return null == uu ? void 0 : uu[Eu]
      }(uu, Eu);
      return QE(ju) ? ju : void 0
    }
    PE.prototype.clear = function() {
      this.__data__ = ME ? ME(null) : {}
    }, PE.prototype.delete = function(uu) {
      return this.has(uu) && delete this.__data__[uu]
    }, PE.prototype.get = function(uu) {
      var Eu = this.__data__;
      if (ME) {
        var ju = Eu[uu];
        return ju === su ? void 0 : ju
      }
      return EE.call(Eu, uu) ? Eu[uu] : void 0
    }, PE.prototype.has = function(uu) {
      var Eu = this.__data__;
      return ME ? void 0 !== Eu[uu] : EE.call(Eu, uu)
    }, PE.prototype.set = function(uu, Eu) {
      return this.__data__[uu] = ME && void 0 === Eu ? su : Eu, this
    }, oE.prototype.clear = function() {
      this.__data__ = []
    }, oE.prototype.delete = function(uu) {
      var Eu = this.__data__,
        ju = VE(Eu, uu);
      return !(ju < 0) && (ju == Eu.length - 1 ? Eu.pop() : CE.call(Eu, ju, 1), !0)
    }, oE.prototype.get = function(uu) {
      var Eu = this.__data__,
        ju = VE(Eu, uu);
      return ju < 0 ? void 0 : Eu[ju][1]
    }, oE.prototype.has = function(uu) {
      return VE(this.__data__, uu) > -1
    }, oE.prototype.set = function(uu, Eu) {
      var ju = this.__data__,
        su = VE(ju, uu);
      return su < 0 ? ju.push([uu, Eu]) : ju[su][1] = Eu, this
    }, kE.prototype.clear = function() {
      this.__data__ = {
        hash: new PE,
        map: new(YE || oE),
        string: new PE
      }
    }, kE.prototype.delete = function(uu) {
      return SE(this, uu).delete(uu)
    }, kE.prototype.get = function(uu) {
      return SE(this, uu).get(uu)
    }, kE.prototype.has = function(uu) {
      return SE(this, uu).has(uu)
    }, kE.prototype.set = function(uu, Eu) {
      return SE(this, uu).set(uu, Eu), this
    }, mE.prototype.clear = function() {
      this.__data__ = new oE
    }, mE.prototype.delete = function(uu) {
      return this.__data__.delete(uu)
    }, mE.prototype.get = function(uu) {
      return this.__data__.get(uu)
    }, mE.prototype.has = function(uu) {
      return this.__data__.has(uu)
    }, mE.prototype.set = function(uu, Eu) {
      var ju = this.__data__;
      if (ju instanceof oE) {
        var su = ju.__data__;
        if (!YE || su.length < 199) return su.push([uu, Eu]), this;
        ju = this.__data__ = new kE(su)
      }
      return ju.set(uu, Eu), this
    };
    var FE = bE ? Tu(bE, Object) : function() {
        return []
      },
      BE = function(uu) {
        return jE.call(uu)
      };

    function LE(uu, Eu) {
      return !!(Eu = null == Eu ? Uu : Eu) && ("number" == typeof uu || Ku.test(uu)) && uu > -1 && uu % 1 == 0 && uu < Eu
    }

    function tE(uu) {
      var Eu = uu && uu.constructor;
      return uu === ("function" == typeof Eu && Eu.prototype || yu)
    }

    function xE(uu) {
      if (null != uu) {
        try {
          return uE.call(uu)
        } catch (Eu) {}
        try {
          return uu + ""
        } catch (Eu) {}
      }
      return ""
    }

    function TE(uu, Eu) {
      return uu === Eu || uu !== uu && Eu !== Eu
    }(OE && BE(new OE(new ArrayBuffer(1))) != eu || YE && BE(new YE) != Cu || hE && BE(hE.resolve()) != Nu || DE && BE(new DE) != Yu || gE && BE(new gE) != gu) && (BE = function(uu) {
      var Eu = jE.call(uu),
        ju = Eu == cu ? uu.constructor : void 0,
        su = ju ? xE(ju) : void 0;
      if (su) switch (su) {
        case eE:
          return eu;
        case GE:
          return Cu;
        case pE:
          return Nu;
        case wE:
          return Yu;
        case JE:
          return gu
      }
      return Eu
    });
    var HE = Array.isArray;

    function AE(uu) {
      return null != uu && function(uu) {
        return "number" == typeof uu && uu > -1 && uu % 1 == 0 && uu <= Uu
      }(uu.length) && !yE(uu)
    }
    var nE = cE || function() {
      return !1
    };

    function yE(uu) {
      var Eu = zE(uu) ? jE.call(uu) : "";
      return Eu == qu || Eu == fu
    }

    function zE(uu) {
      var Eu = typeof uu;
      return !!uu && ("object" == Eu || "function" == Eu)
    }

    function RE(uu) {
      return AE(uu) ? vE(uu) : function(uu) {
        if (!tE(uu)) return NE(uu);
        var Eu = [];
        for (var ju in Object(uu)) EE.call(uu, ju) && "constructor" != ju && Eu.push(ju);
        return Eu
      }(uu)
    }
    uu.exports = function(uu) {
      return rE(uu, !0, !0)
    }
  },
  38772: uu => {
    function Eu(uu, Eu, ju) {
      for (var su = uu.length, Uu = -1 / 0, Zu = 1 / 0, Xu = 0; Xu < su; Xu++) {
        var lu = (ju[0][Xu] - uu[Xu]) / Eu[Xu],
          qu = (ju[1][Xu] - uu[Xu]) / Eu[Xu];
        if (lu > qu) {
          var fu = lu;
          lu = qu, qu = fu
        }
        if (qu < Uu || lu > Zu) return 1 / 0;
        lu > Uu && (Uu = lu), qu < Zu && (Zu = qu)
      }
      return Uu > Zu ? 1 / 0 : Uu
    }
    uu.exports = function(uu, ju, su, Uu) {
      var Zu = Eu(ju, su, Uu);
      if (Zu === 1 / 0) uu = null;
      else {
        uu = uu || [];
        for (var Xu = 0; Xu < ju.length; Xu++) uu[Xu] = ju[Xu] + su[Xu] * Zu
      }
      return uu
    }, uu.exports.distance = Eu
  },
  38123: (uu, Eu, ju) => {
    var su = ju(38126);

    function Uu(uu) {
      for (var Eu, ju, Uu = 0, Zu = uu.length, Xu = 0; Xu < uu.length;) {
        for (Eu = uu[Xu], ju = 0; Xu < Zu && uu[Xu] === Eu;) ++Xu, ++ju;
        Uu += su.log2(ju) / 7 | 0, Uu += su.log2(Eu >>> 0) / 7 | 0, Uu += 2
      }
      return Uu
    }
    Eu.size = Uu, Eu.encode = function(uu, Eu) {
      Eu || (Eu = new Uint8Array(Uu(uu)));
      for (var ju, su, Zu = 0, Xu = Eu.length, lu = 0; lu < uu.length;) {
        for (ju = uu[lu], su = 0; lu < uu.length && uu[lu] === ju;) ++lu, ++su;
        for (; Zu < Xu && su >= 128;) Eu[Zu++] = 128 + (127 & su), su >>>= 7;
        if (Zu >= Xu) throw new Error("RLE buffer overflow");
        for (Eu[Zu++] = su, ju >>>= 0; Zu < Xu && ju >= 128;) Eu[Zu++] = 128 + (127 & ju), ju >>>= 7;
        if (Zu >= Xu) throw new Error("RLE buffer overflow");
        Eu[Zu++] = ju
      }
      return Eu
    }, Eu.decode = function(uu, Eu) {
      for (var ju, su, Uu, Zu, Xu = Eu.length, lu = uu.length, qu = 0, fu = 0; fu < lu;) {
        for (ju = 0, su = 0; fu < lu && uu[fu] >= 128;) ju += (127 & uu[fu++]) << su, su += 7;
        if (ju += uu[fu++] << su, fu >= lu) throw new Error("RLE buffer underrun");
        if (qu + ju > Xu) throw new Error("Chunk buffer overflow");
        for (Uu = 0, su = 0; fu < lu && uu[fu] >= 128;) Uu += (127 & uu[fu++]) << su, su += 7;
        if (fu >= lu) throw new Error("RLE buffer underrun");
        for (Uu += uu[fu++] << su, Zu = 0; Zu < ju; ++Zu) Eu[qu++] = Uu
      }
      return Eu
    }
  },
  38126: (uu, Eu) => {
    function ju(uu) {
      var Eu = 32;
      return (uu &= -uu) && Eu--, 65535 & uu && (Eu -= 16), 16711935 & uu && (Eu -= 8), 252645135 & uu && (Eu -= 4), 858993459 & uu && (Eu -= 2), 1431655765 & uu && (Eu -= 1), Eu
    }
    Eu.INT_BITS = 32, Eu.INT_MAX = 2147483647, Eu.INT_MIN = -1 << 31, Eu.sign = function(uu) {
      return (uu > 0) - (uu < 0)
    }, Eu.abs = function(uu) {
      var Eu = uu >> 31;
      return (uu ^ Eu) - Eu
    }, Eu.min = function(uu, Eu) {
      return Eu ^ (uu ^ Eu) & -(uu < Eu)
    }, Eu.max = function(uu, Eu) {
      return uu ^ (uu ^ Eu) & -(uu < Eu)
    }, Eu.isPow2 = function(uu) {
      return !(uu & uu - 1) && !!uu
    }, Eu.log2 = function(uu) {
      var Eu, ju;
      return Eu = (uu > 65535) << 4, Eu |= ju = ((uu >>>= Eu) > 255) << 3, Eu |= ju = ((uu >>>= ju) > 15) << 2, (Eu |= ju = ((uu >>>= ju) > 3) << 1) | (uu >>>= ju) >> 1
    }, Eu.log10 = function(uu) {
      return uu >= 1e9 ? 9 : uu >= 1e8 ? 8 : uu >= 1e7 ? 7 : uu >= 1e6 ? 6 : uu >= 1e5 ? 5 : uu >= 1e4 ? 4 : uu >= 1e3 ? 3 : uu >= 100 ? 2 : uu >= 10 ? 1 : 0
    }, Eu.popCount = function(uu) {
      return 16843009 * ((uu = (858993459 & (uu -= uu >>> 1 & 1431655765)) + (uu >>> 2 & 858993459)) + (uu >>> 4) & 252645135) >>> 24
    }, Eu.countTrailingZeros = ju, Eu.nextPow2 = function(uu) {
      return uu += 0 === uu, --uu, uu |= uu >>> 1, uu |= uu >>> 2, uu |= uu >>> 4, uu |= uu >>> 8, (uu |= uu >>> 16) + 1
    }, Eu.prevPow2 = function(uu) {
      return uu |= uu >>> 1, uu |= uu >>> 2, uu |= uu >>> 4, uu |= uu >>> 8, (uu |= uu >>> 16) - (uu >>> 1)
    }, Eu.parity = function(uu) {
      return uu ^= uu >>> 16, uu ^= uu >>> 8, uu ^= uu >>> 4, 27030 >>> (uu &= 15) & 1
    };
    var su = new Array(256);
    ! function(uu) {
      for (var Eu = 0; Eu < 256; ++Eu) {
        var ju = Eu,
          su = Eu,
          Uu = 7;
        for (ju >>>= 1; ju; ju >>>= 1) su <<= 1, su |= 1 & ju, --Uu;
        uu[Eu] = su << Uu & 255
      }
    }(su), Eu.reverse = function(uu) {
      return su[255 & uu] << 24 | su[uu >>> 8 & 255] << 16 | su[uu >>> 16 & 255] << 8 | su[uu >>> 24 & 255]
    }, Eu.interleave2 = function(uu, Eu) {
      return (uu = 1431655765 & ((uu = 858993459 & ((uu = 252645135 & ((uu = 16711935 & ((uu &= 65535) | uu << 8)) | uu << 4)) | uu << 2)) | uu << 1)) | (Eu = 1431655765 & ((Eu = 858993459 & ((Eu = 252645135 & ((Eu = 16711935 & ((Eu &= 65535) | Eu << 8)) | Eu << 4)) | Eu << 2)) | Eu << 1)) << 1
    }, Eu.deinterleave2 = function(uu, Eu) {
      return (uu = 65535 & ((uu = 16711935 & ((uu = 252645135 & ((uu = 858993459 & ((uu = uu >>> Eu & 1431655765) | uu >>> 1)) | uu >>> 2)) | uu >>> 4)) | uu >>> 16)) << 16 >> 16
    }, Eu.interleave3 = function(uu, Eu, ju) {
      return uu = 1227133513 & ((uu = 3272356035 & ((uu = 251719695 & ((uu = 4278190335 & ((uu &= 1023) | uu << 16)) | uu << 8)) | uu << 4)) | uu << 2), (uu |= (Eu = 1227133513 & ((Eu = 3272356035 & ((Eu = 251719695 & ((Eu = 4278190335 & ((Eu &= 1023) | Eu << 16)) | Eu << 8)) | Eu << 4)) | Eu << 2)) << 1) | (ju = 1227133513 & ((ju = 3272356035 & ((ju = 251719695 & ((ju = 4278190335 & ((ju &= 1023) | ju << 16)) | ju << 8)) | ju << 4)) | ju << 2)) << 2
    }, Eu.deinterleave3 = function(uu, Eu) {
      return (uu = 1023 & ((uu = 4278190335 & ((uu = 251719695 & ((uu = 3272356035 & ((uu = uu >>> Eu & 1227133513) | uu >>> 2)) | uu >>> 4)) | uu >>> 8)) | uu >>> 16)) << 22 >> 22
    }, Eu.nextCombination = function(uu) {
      var Eu = uu | uu - 1;
      return Eu + 1 | (~Eu & -~Eu) - 1 >>> ju(uu) + 1
    }
  },
  37671: (uu, Eu, ju) => {
    ju.d(Eu, {
      Color3: () => su.c,
      b: () => su.g
    });
    var su = ju(37680);
    (0, su.i)()
  },
  38152: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu
    });
    var su = ju(38154);
    class Uu {
      static GetPlanes(uu) {
        const Eu = [];
        for (let ju = 0; ju < 6; ju++) Eu.push(new su.d(0, 0, 0, 0));
        return Uu.GetPlanesToRef(uu, Eu), Eu
      }
      static GetNearPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] + ju[2], Eu.normal.y = ju[7] + ju[6], Eu.normal.z = ju[11] + ju[10], Eu.d = ju[15] + ju[14], Eu.normalize()
      }
      static GetFarPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] - ju[2], Eu.normal.y = ju[7] - ju[6], Eu.normal.z = ju[11] - ju[10], Eu.d = ju[15] - ju[14], Eu.normalize()
      }
      static GetLeftPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] + ju[0], Eu.normal.y = ju[7] + ju[4], Eu.normal.z = ju[11] + ju[8], Eu.d = ju[15] + ju[12], Eu.normalize()
      }
      static GetRightPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] - ju[0], Eu.normal.y = ju[7] - ju[4], Eu.normal.z = ju[11] - ju[8], Eu.d = ju[15] - ju[12], Eu.normalize()
      }
      static GetTopPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] - ju[1], Eu.normal.y = ju[7] - ju[5], Eu.normal.z = ju[11] - ju[9], Eu.d = ju[15] - ju[13], Eu.normalize()
      }
      static GetBottomPlaneToRef(uu, Eu) {
        const ju = uu.m;
        Eu.normal.x = ju[3] + ju[1], Eu.normal.y = ju[7] + ju[5], Eu.normal.z = ju[11] + ju[9], Eu.d = ju[15] + ju[13], Eu.normalize()
      }
      static GetPlanesToRef(uu, Eu) {
        Uu.GetNearPlaneToRef(uu, Eu[0]), Uu.GetFarPlaneToRef(uu, Eu[1]), Uu.GetLeftPlaneToRef(uu, Eu[2]), Uu.GetRightPlaneToRef(uu, Eu[3]), Uu.GetTopPlaneToRef(uu, Eu[4]), Uu.GetBottomPlaneToRef(uu, Eu[5])
      }
      static IsPointInFrustum(uu, Eu) {
        for (let ju = 0; ju < 6; ju++)
          if (Eu[ju].dotCoordinate(uu) < 0) return !1;
        return !0
      }
    }
  },
  38154: (uu, Eu, ju) => {
    ju.d(Eu, {
      d: () => Uu
    });
    var su = ju(37494);
    class Uu {
      constructor(uu, Eu, ju, Uu) {
        this.normal = new su.t(uu, Eu, ju), this.d = Uu
      }
      Osu() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Uu(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let uu = this.normal.getHashCode();
        return uu = 397 * uu ^ this.d, uu
      }
      normalize() {
        const uu = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Eu = 0;
        return 0 !== uu && (Eu = 1 / uu), this.normal.x *= Eu, this.normal.y *= Eu, this.normal.z *= Eu, this.d *= Eu, this
      }
      transform(uu) {
        const Eu = Uu._TmpMatrix;
        uu.invertToRef(Eu);
        const ju = Eu.m,
          su = this.normal.x,
          Zu = this.normal.y,
          Xu = this.normal.z,
          lu = this.d,
          qu = su * ju[0] + Zu * ju[1] + Xu * ju[2] + lu * ju[3],
          fu = su * ju[4] + Zu * ju[5] + Xu * ju[6] + lu * ju[7],
          Cu = su * ju[8] + Zu * ju[9] + Xu * ju[10] + lu * ju[11],
          bu = su * ju[12] + Zu * ju[13] + Xu * ju[14] + lu * ju[15];
        return new Uu(qu, fu, Cu, bu)
      }
      dotCoordinate(uu) {
        return this.normal.x * uu.x + this.normal.y * uu.y + this.normal.z * uu.z + this.d
      }
      copyFromPoints(uu, Eu, ju) {
        const su = Eu.x - uu.x,
          Uu = Eu.y - uu.y,
          Zu = Eu.z - uu.z,
          Xu = ju.x - uu.x,
          lu = ju.y - uu.y,
          qu = ju.z - uu.z,
          fu = Uu * qu - Zu * lu,
          Cu = Zu * Xu - su * qu,
          bu = su * lu - Uu * Xu,
          cu = Math.sqrt(fu * fu + Cu * Cu + bu * bu);
        let Nu;
        return Nu = 0 !== cu ? 1 / cu : 0, this.normal.x = fu * Nu, this.normal.y = Cu * Nu, this.normal.z = bu * Nu, this.d = -(this.normal.x * uu.x + this.normal.y * uu.y + this.normal.z * uu.z), this
      }
      isFrontFacingTo(uu, Eu) {
        return su.t.Dot(this.normal, uu) <= Eu
      }
      signedDistanceTo(uu) {
        return su.t.Dot(uu, this.normal) + this.d
      }
      static FromArray(uu) {
        return new Uu(uu[0], uu[1], uu[2], uu[3])
      }
      static FromPoints(uu, Eu, ju) {
        const su = new Uu(0, 0, 0, 0);
        return su.copyFromPoints(uu, Eu, ju), su
      }
      static FromPositionAndNormal(uu, Eu) {
        const ju = new Uu(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(uu, Eu, ju)
      }
      static FromPositionAndNormalToRef(uu, Eu, ju) {
        return ju.normal.yJ(Eu), ju.normal.normalize(), ju.d = -uu.dot(ju.normal), ju
      }
      static SignedDistanceToPlaneFromPositionAndNormal(uu, Eu, ju) {
        const Uu = -(Eu.x * uu.x + Eu.y * uu.y + Eu.z * uu.z);
        return su.t.Dot(ju, Eu) + Uu
      }
    }
    Uu._TmpMatrix = su.e.Identity()
  },
  37488: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      Matrix: () => su.e,
      Quaternion: () => su.i,
      RegisterMathVector: () => su.l,
      TmpVectors: () => su.m,
      Vector2: () => su.p,
      dO: () => su.t,
      Vector4: () => su.u
    });
    var su = ju(37494);
    (0, su.l)()
  },
  38458: (uu, Eu, ju) => {
    ju.d(Eu, {
      b: () => su
    });
    class su {
      constructor(uu, Eu, ju, su) {
        this.x = uu, this.y = Eu, this.width = ju, this.height = su
      }
      toGlobal(uu, Eu) {
        return new su(this.x * uu, this.y * Eu, this.width * uu, this.height * Eu)
      }
      toGlobalToRef(uu, Eu, ju) {
        return ju.x = this.x * uu, ju.y = this.y * Eu, ju.width = this.width * uu, ju.height = this.height * Eu, this
      }
      clone() {
        return new su(this.x, this.y, this.width, this.height)
      }
    }
  },
  38303: (uu, Eu, ju) => {
    function su() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (uu => {
        const Eu = 16 * Math.random() | 0;
        return ("x" === uu ? Eu : 3 & Eu | 8).toString(16)
      }))
    }
    ju.d(Eu, {
      e: () => su
    })
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);