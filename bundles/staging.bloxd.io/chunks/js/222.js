/*! For license information please see q3ynmh.222.3bddd1ed.chunk.js.LICENSE.txt */
export const id = 222;
export const ids = [222, 229];
export const modules = {
  38061: uu => {
    uu.exports = function(uu) {
      return null != uu && null != uu.constructor && "function" === typeof uu.constructor.isBuffer && uu.constructor.isBuffer(uu)
    }
  },
  38038: (uu, Ru, yu) => {
    var Eu = yu(38046),
      Ku = yu(38053),
      Qu = yu(38061);
    yu.g.__TYPEDARRAY_POOL || (yu.g.__TYPEDARRAY_POOL = {
      UINT8: Ku([32, 0]),
      UINT16: Ku([32, 0]),
      UINT32: Ku([32, 0]),
      INT8: Ku([32, 0]),
      INT16: Ku([32, 0]),
      INT32: Ku([32, 0]),
      FLOAT: Ku([32, 0]),
      DOUBLE: Ku([32, 0]),
      DATA: Ku([32, 0]),
      UINT8C: Ku([32, 0]),
      BUFFER: Ku([32, 0])
    });
    var mu = "undefined" !== typeof Uint8ClampedArray,
      Ju = yu.g.__TYPEDARRAY_POOL;
    Ju.UINT8C || (Ju.UINT8C = Ku([32, 0])), Ju.BUFFER || (Ju.BUFFER = Ku([32, 0]));
    var Nu = Ju.DATA,
      Xu = Ju.BUFFER;

    function Vu(uu) {
      if (uu) {
        var Ru = uu.length || uu.byteLength,
          yu = Eu.log2(Ru);
        Nu[yu].push(uu)
      }
    }

    function ru(uu) {
      uu = Eu.nextPow2(uu);
      var Ru = Eu.log2(uu),
        yu = Nu[Ru];
      return yu.length > 0 ? yu.pop() : new ArrayBuffer(uu)
    }

    function Bu(uu) {
      return new Uint8Array(ru(uu), 0, uu)
    }

    function xu(uu) {
      return new Uint16Array(ru(2 * uu), 0, uu)
    }

    function Su(uu) {
      return new Uint32Array(ru(4 * uu), 0, uu)
    }

    function pu(uu) {
      return new Int8Array(ru(uu), 0, uu)
    }

    function Tu(uu) {
      return new Int16Array(ru(2 * uu), 0, uu)
    }

    function Wu(uu) {
      return new Int32Array(ru(4 * uu), 0, uu)
    }

    function ju(uu) {
      return new Float32Array(ru(4 * uu), 0, uu)
    }

    function Hu(uu) {
      return new Float64Array(ru(8 * uu), 0, uu)
    }

    function du(uu) {
      return mu ? new Uint8ClampedArray(ru(uu), 0, uu) : Bu(uu)
    }

    function bu(uu) {
      return new DataView(ru(uu), 0, uu)
    }
    Ru.free = function(uu) {
      if (Qu(uu)) Xu[Eu.log2(uu.length)].push(uu);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(uu) && (uu = uu.buffer), !uu) return;
        var Ru = uu.length || uu.byteLength,
          yu = 0 | Eu.log2(Ru);
        Nu[yu].push(uu)
      }
    }, Ru.freeUint8 = Ru.freeUint16 = Ru.freeUint32 = Ru.freeInt8 = Ru.freeInt16 = Ru.freeInt32 = Ru.freeFloat32 = Ru.freeFloat = Ru.freeFloat64 = Ru.freeDouble = Ru.freeUint8Clamped = Ru.freeDataView = function(uu) {
      Vu(uu.buffer)
    }, Ru.freeArrayBuffer = Vu, Ru.freeBuffer = function(uu) {
      Xu[Eu.log2(uu.length)].push(uu)
    }, Ru.malloc = function(uu, Ru) {
      if (void 0 === Ru || "arraybuffer" === Ru) return ru(uu);
      switch (Ru) {
        case "uint8":
          return Bu(uu);
        case "uint16":
          return xu(uu);
        case "uint32":
          return Su(uu);
        case "int8":
          return pu(uu);
        case "int16":
          return Tu(uu);
        case "int32":
          return Wu(uu);
        case "float":
        case "float32":
          return ju(uu);
        case "double":
        case "float64":
          return Hu(uu);
        case "uint8_clamped":
          return du(uu);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return bu(uu);
        default:
          return null
      }
      return null
    }, Ru.mallocArrayBuffer = ru, Ru.mallocUint8 = Bu, Ru.mallocUint16 = xu, Ru.mallocUint32 = Su, Ru.mallocInt8 = pu, Ru.mallocInt16 = Tu, Ru.mallocInt32 = Wu, Ru.mallocFloat32 = Ru.mallocFloat = ju, Ru.mallocFloat64 = Ru.mallocDouble = Hu, Ru.mallocUint8Clamped = du, Ru.mallocDataView = bu, Ru.clearCache = function() {
      for (var uu = 0; uu < 32; ++uu) Ju.UINT8[uu].length = 0, Ju.UINT16[uu].length = 0, Ju.UINT32[uu].length = 0, Ju.INT8[uu].length = 0, Ju.INT16[uu].length = 0, Ju.INT32[uu].length = 0, Ju.FLOAT[uu].length = 0, Ju.DOUBLE[uu].length = 0, Ju.UINT8C[uu].length = 0, Nu[uu].length = 0, Xu[uu].length = 0
    }
  },
  38046: (uu, Ru) => {
    function yu(uu) {
      var Ru = 32;
      return (uu &= -uu) && Ru--, 65535 & uu && (Ru -= 16), 16711935 & uu && (Ru -= 8), 252645135 & uu && (Ru -= 4), 858993459 & uu && (Ru -= 2), 1431655765 & uu && (Ru -= 1), Ru
    }
    Ru.INT_BITS = 32, Ru.INT_MAX = 2147483647, Ru.INT_MIN = -1 << 31, Ru.sign = function(uu) {
      return (uu > 0) - (uu < 0)
    }, Ru.abs = function(uu) {
      var Ru = uu >> 31;
      return (uu ^ Ru) - Ru
    }, Ru.min = function(uu, Ru) {
      return Ru ^ (uu ^ Ru) & -(uu < Ru)
    }, Ru.max = function(uu, Ru) {
      return uu ^ (uu ^ Ru) & -(uu < Ru)
    }, Ru.isPow2 = function(uu) {
      return !(uu & uu - 1) && !!uu
    }, Ru.log2 = function(uu) {
      var Ru, yu;
      return Ru = (uu > 65535) << 4, Ru |= yu = ((uu >>>= Ru) > 255) << 3, Ru |= yu = ((uu >>>= yu) > 15) << 2, (Ru |= yu = ((uu >>>= yu) > 3) << 1) | (uu >>>= yu) >> 1
    }, Ru.log10 = function(uu) {
      return uu >= 1e9 ? 9 : uu >= 1e8 ? 8 : uu >= 1e7 ? 7 : uu >= 1e6 ? 6 : uu >= 1e5 ? 5 : uu >= 1e4 ? 4 : uu >= 1e3 ? 3 : uu >= 100 ? 2 : uu >= 10 ? 1 : 0
    }, Ru.popCount = function(uu) {
      return 16843009 * ((uu = (858993459 & (uu -= uu >>> 1 & 1431655765)) + (uu >>> 2 & 858993459)) + (uu >>> 4) & 252645135) >>> 24
    }, Ru.countTrailingZeros = yu, Ru.nextPow2 = function(uu) {
      return uu += 0 === uu, --uu, uu |= uu >>> 1, uu |= uu >>> 2, uu |= uu >>> 4, uu |= uu >>> 8, (uu |= uu >>> 16) + 1
    }, Ru.prevPow2 = function(uu) {
      return uu |= uu >>> 1, uu |= uu >>> 2, uu |= uu >>> 4, uu |= uu >>> 8, (uu |= uu >>> 16) - (uu >>> 1)
    }, Ru.parity = function(uu) {
      return uu ^= uu >>> 16, uu ^= uu >>> 8, uu ^= uu >>> 4, 27030 >>> (uu &= 15) & 1
    };
    var Eu = new Array(256);
    ! function(uu) {
      for (var Ru = 0; Ru < 256; ++Ru) {
        var yu = Ru,
          Eu = Ru,
          Ku = 7;
        for (yu >>>= 1; yu; yu >>>= 1) Eu <<= 1, Eu |= 1 & yu, --Ku;
        uu[Ru] = Eu << Ku & 255
      }
    }(Eu), Ru.reverse = function(uu) {
      return Eu[255 & uu] << 24 | Eu[uu >>> 8 & 255] << 16 | Eu[uu >>> 16 & 255] << 8 | Eu[uu >>> 24 & 255]
    }, Ru.interleave2 = function(uu, Ru) {
      return (uu = 1431655765 & ((uu = 858993459 & ((uu = 252645135 & ((uu = 16711935 & ((uu &= 65535) | uu << 8)) | uu << 4)) | uu << 2)) | uu << 1)) | (Ru = 1431655765 & ((Ru = 858993459 & ((Ru = 252645135 & ((Ru = 16711935 & ((Ru &= 65535) | Ru << 8)) | Ru << 4)) | Ru << 2)) | Ru << 1)) << 1
    }, Ru.deinterleave2 = function(uu, Ru) {
      return (uu = 65535 & ((uu = 16711935 & ((uu = 252645135 & ((uu = 858993459 & ((uu = uu >>> Ru & 1431655765) | uu >>> 1)) | uu >>> 2)) | uu >>> 4)) | uu >>> 16)) << 16 >> 16
    }, Ru.interleave3 = function(uu, Ru, yu) {
      return uu = 1227133513 & ((uu = 3272356035 & ((uu = 251719695 & ((uu = 4278190335 & ((uu &= 1023) | uu << 16)) | uu << 8)) | uu << 4)) | uu << 2), (uu |= (Ru = 1227133513 & ((Ru = 3272356035 & ((Ru = 251719695 & ((Ru = 4278190335 & ((Ru &= 1023) | Ru << 16)) | Ru << 8)) | Ru << 4)) | Ru << 2)) << 1) | (yu = 1227133513 & ((yu = 3272356035 & ((yu = 251719695 & ((yu = 4278190335 & ((yu &= 1023) | yu << 16)) | yu << 8)) | yu << 4)) | yu << 2)) << 2
    }, Ru.deinterleave3 = function(uu, Ru) {
      return (uu = 1023 & ((uu = 4278190335 & ((uu = 251719695 & ((uu = 3272356035 & ((uu = uu >>> Ru & 1227133513) | uu >>> 2)) | uu >>> 4)) | uu >>> 8)) | uu >>> 16)) << 22 >> 22
    }, Ru.nextCombination = function(uu) {
      var Ru = uu | uu - 1;
      return Ru + 1 | (~Ru & -~Ru) - 1 >>> yu(uu) + 1
    }
  },
  38029: (uu, Ru, yu) => {
    uu.exports = function(uu, Ru, yu) {
      switch (arguments.length) {
        case 1:
          return Eu = [], Xu(Ku = uu, Ku, Vu, !0), Eu;
        case 2:
          return "function" === typeof Ru ? Xu(uu, uu, Ru, !0) : function(uu, Ru) {
            return Eu = [], Xu(uu, Ru, Vu, !1), Eu
          }(uu, Ru);
        case 3:
          return Xu(uu, Ru, yu, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var Ku
    };
    var Eu, Ku = yu(38038),
      Qu = yu(38064),
      mu = yu(38074);

    function Ju(uu, Ru) {
      for (var yu = 0; yu < uu; ++yu)
        if (!(Ru[yu] <= Ru[yu + uu])) return !0;
      return !1
    }

    function Nu(uu, Ru, yu, Eu) {
      for (var Ku = 0, Qu = 0, mu = 0, Nu = uu.length; mu < Nu; ++mu) {
        var Xu = uu[mu];
        if (!Ju(Ru, Xu)) {
          for (var Vu = 0; Vu < 2 * Ru; ++Vu) yu[Ku++] = Xu[Vu];
          Eu[Qu++] = mu
        }
      }
      return Qu
    }

    function Xu(uu, Ru, yu, Eu) {
      var Ju = uu.length,
        Xu = Ru.length;
      if (!(Ju <= 0 || Xu <= 0)) {
        var Vu = uu[0].length >>> 1;
        if (!(Vu <= 0)) {
          var ru, Bu = Ku.mallocDouble(2 * Vu * Ju),
            xu = Ku.mallocInt32(Ju);
          if ((Ju = Nu(uu, Vu, Bu, xu)) > 0) {
            if (1 === Vu && Eu) Qu.init(Ju), ru = Qu.sweepComplete(Vu, yu, 0, Ju, Bu, xu, 0, Ju, Bu, xu);
            else {
              var Su = Ku.mallocDouble(2 * Vu * Xu),
                pu = Ku.mallocInt32(Xu);
              (Xu = Nu(Ru, Vu, Su, pu)) > 0 && (Qu.init(Ju + Xu), ru = 1 === Vu ? Qu.sweepBipartite(Vu, yu, 0, Ju, Bu, xu, 0, Xu, Su, pu) : mu(Vu, yu, Eu, Ju, Bu, xu, Xu, Su, pu), Ku.free(Su), Ku.free(pu))
            }
            Ku.free(Bu), Ku.free(xu)
          }
          return ru
        }
      }
    }

    function Vu(uu, Ru) {
      Eu.push([uu, Ru])
    }
  },
  38080: (uu, Ru) => {
    var yu = "d",
      Eu = "ax",
      Ku = "fp",
      Qu = "es",
      mu = "rs",
      Ju = "re",
      Nu = "rb",
      Xu = "bs",
      Vu = "be",
      ru = "bb",
      Bu = [yu, Eu, "vv", mu, Ju, Nu, "ri", Xu, Vu, ru, "bi"];

    function xu(uu) {
      var Ru = "bruteForce" + (uu ? "Full" : "Partial"),
        Eu = [],
        mu = Bu.slice();
      uu || mu.splice(3, 0, Ku);
      var Ju = ["function " + Ru + "(" + mu.join() + "){"];

      function Nu(Ru, Ku) {
        var mu = function(uu, Ru, Eu) {
          var Ku = "bruteForce" + (uu ? "Red" : "Blue") + (Ru ? "Flip" : "") + (Eu ? "Full" : ""),
            mu = ["function ", Ku, "(", Bu.join(), "){", "var ", Qu, "=2*", yu, ";"],
            Ju = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            Nu = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (Eu ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return uu ? mu.push(Ju, "Q", ":", Nu) : mu.push(Nu, "Q", ":", Ju), Eu ? mu.push("if(y1<x0||x1<y0)continue;") : Ru ? mu.push("if(y0<=x0||x1<y0)continue;") : mu.push("if(y0<x0||x1<y0)continue;"), mu.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), Ru ? mu.push("yi,xi") : mu.push("xi,yi"), mu.push(");if(rv!==void 0)return rv;}}}"), {
            name: Ku,
            code: mu.join("")
          }
        }(Ru, Ku, uu);
        Eu.push(mu.code), Ju.push("return " + mu.name + "(" + Bu.join() + ");")
      }
      Ju.push("if(re-rs>be-bs){"), uu ? (Nu(!0, !1), Ju.push("}else{"), Nu(!1, !1)) : (Ju.push("if(fp){"), Nu(!0, !0), Ju.push("}else{"), Nu(!0, !1), Ju.push("}}else{if(fp){"), Nu(!1, !0), Ju.push("}else{"), Nu(!1, !1), Ju.push("}")), Ju.push("}}return " + Ru);
      var Xu = Eu.join("") + Ju.join("");
      return new Function(Xu)()
    }
    Ru.partial = xu(!1), Ru.full = xu(!0)
  },
  38074: (uu, Ru, yu) => {
    uu.exports = function(uu, Ru, yu, Qu, Vu, Mu, Iu, Gu, Uu) {
      ! function(uu, Ru) {
        var yu = 8 * Ku.log2(Ru + 1) * (uu + 1) | 0,
          Qu = Ku.nextPow2(du * yu);
        Cu.length < Qu && (Eu.free(Cu), Cu = Eu.mallocInt32(Qu));
        var mu = Ku.nextPow2(bu * yu);
        ku.length < mu && (Eu.free(ku), ku = Eu.mallocDouble(mu))
      }(uu, Qu + Iu);
      var nu, su = 0,
        tu = 2 * uu;
      eu(su++, 0, 0, Qu, 0, Iu, yu ? 16 : 0, -1 / 0, 1 / 0), yu || eu(su++, 0, 0, Iu, 0, Qu, 1, -1 / 0, 1 / 0);
      for (; su > 0;) {
        var lu = (su -= 1) * du,
          gu = Cu[lu],
          cu = Cu[lu + 1],
          Lu = Cu[lu + 2],
          zu = Cu[lu + 3],
          Fu = Cu[lu + 4],
          wu = Cu[lu + 5],
          Zu = su * bu,
          hu = ku[Zu],
          Pu = ku[Zu + 1],
          iu = 1 & wu,
          Yu = !!(16 & wu),
          ou = Vu,
          qu = Mu,
          Ou = Gu,
          vu = Uu;
        if (iu && (ou = Gu, qu = Uu, Ou = Vu, vu = Mu), !(2 & wu && cu >= (Lu = Tu(uu, gu, cu, Lu, ou, qu, Pu))) && !(4 & wu && (cu = Wu(uu, gu, cu, Lu, ou, qu, hu)) >= Lu)) {
          var au = Lu - cu,
            fu = Fu - zu;
          if (Yu) {
            if (uu * au * (au + fu) < xu) {
              if (void 0 !== (nu = Nu.scanComplete(uu, gu, Ru, cu, Lu, ou, qu, zu, Fu, Ou, vu))) return nu;
              continue
            }
          } else {
            if (uu * Math.min(au, fu) < ru) {
              if (void 0 !== (nu = mu(uu, gu, Ru, iu, cu, Lu, ou, qu, zu, Fu, Ou, vu))) return nu;
              continue
            }
            if (uu * au * fu < Bu) {
              if (void 0 !== (nu = Nu.scanBipartite(uu, gu, Ru, iu, cu, Lu, ou, qu, zu, Fu, Ou, vu))) return nu;
              continue
            }
          }
          var uR = Su(uu, gu, cu, Lu, ou, qu, hu, Pu);
          if (cu < uR)
            if (uu * (uR - cu) < ru) {
              if (void 0 !== (nu = Ju(uu, gu + 1, Ru, cu, uR, ou, qu, zu, Fu, Ou, vu))) return nu
            } else if (gu === uu - 2) {
            if (void 0 !== (nu = iu ? Nu.sweepBipartite(uu, Ru, zu, Fu, Ou, vu, cu, uR, ou, qu) : Nu.sweepBipartite(uu, Ru, cu, uR, ou, qu, zu, Fu, Ou, vu))) return nu
          } else eu(su++, gu + 1, cu, uR, zu, Fu, iu, -1 / 0, 1 / 0), eu(su++, gu + 1, zu, Fu, cu, uR, 1 ^ iu, -1 / 0, 1 / 0);
          if (uR < Lu) {
            var RR = Xu(uu, gu, zu, Fu, Ou, vu),
              yR = Ou[tu * RR + gu],
              ER = pu(uu, gu, RR, Fu, Ou, vu, yR);
            if (ER < Fu && eu(su++, gu, uR, Lu, ER, Fu, (4 | iu) + (Yu ? 16 : 0), yR, Pu), zu < RR && eu(su++, gu, uR, Lu, zu, RR, (2 | iu) + (Yu ? 16 : 0), hu, yR), RR + 1 === ER) {
              if (void 0 !== (nu = Yu ? Du(uu, gu, Ru, uR, Lu, ou, qu, RR, Ou, vu[RR]) : Au(uu, gu, Ru, iu, uR, Lu, ou, qu, RR, Ou, vu[RR]))) return nu
            } else if (RR < ER) {
              var KR;
              if (Yu) {
                if (uR < (KR = ju(uu, gu, uR, Lu, ou, qu, yR))) {
                  var QR = pu(uu, gu, uR, KR, ou, qu, yR);
                  if (gu === uu - 2) {
                    if (uR < QR && void 0 !== (nu = Nu.sweepComplete(uu, Ru, uR, QR, ou, qu, RR, ER, Ou, vu))) return nu;
                    if (QR < KR && void 0 !== (nu = Nu.sweepBipartite(uu, Ru, QR, KR, ou, qu, RR, ER, Ou, vu))) return nu
                  } else uR < QR && eu(su++, gu + 1, uR, QR, RR, ER, 16, -1 / 0, 1 / 0), QR < KR && (eu(su++, gu + 1, QR, KR, RR, ER, 0, -1 / 0, 1 / 0), eu(su++, gu + 1, RR, ER, QR, KR, 1, -1 / 0, 1 / 0))
                }
              } else uR < (KR = iu ? Hu(uu, gu, uR, Lu, ou, qu, yR) : ju(uu, gu, uR, Lu, ou, qu, yR)) && (gu === uu - 2 ? nu = iu ? Nu.sweepBipartite(uu, Ru, RR, ER, Ou, vu, uR, KR, ou, qu) : Nu.sweepBipartite(uu, Ru, uR, KR, ou, qu, RR, ER, Ou, vu) : (eu(su++, gu + 1, uR, KR, RR, ER, iu, -1 / 0, 1 / 0), eu(su++, gu + 1, RR, ER, uR, KR, 1 ^ iu, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var Eu = yu(38038),
      Ku = yu(38046),
      Qu = yu(38080),
      mu = Qu.partial,
      Ju = Qu.full,
      Nu = yu(38064),
      Xu = yu(38084),
      Vu = yu(38093),
      ru = 128,
      Bu = 1 << 22,
      xu = 1 << 22,
      Su = Vu("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      pu = Vu("lo===p0", ["p0"]),
      Tu = Vu("lo<p0", ["p0"]),
      Wu = Vu("hi<=p0", ["p0"]),
      ju = Vu("lo<=p0&&p0<=hi", ["p0"]),
      Hu = Vu("lo<p0&&p0<=hi", ["p0"]),
      du = 6,
      bu = 2,
      Cu = Eu.mallocInt32(1024),
      ku = Eu.mallocDouble(1024);

    function eu(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu) {
      var Xu = du * uu;
      Cu[Xu] = Ru, Cu[Xu + 1] = yu, Cu[Xu + 2] = Eu, Cu[Xu + 3] = Ku, Cu[Xu + 4] = Qu, Cu[Xu + 5] = mu;
      var Vu = bu * uu;
      ku[Vu] = Ju, ku[Vu + 1] = Nu
    }

    function Au(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu, Vu) {
      var ru = 2 * uu,
        Bu = Nu * ru,
        xu = Xu[Bu + Ru];
      uu: for (var Su = Ku, pu = Ku * ru; Su < Qu; ++Su, pu += ru) {
        var Tu = mu[pu + Ru],
          Wu = mu[pu + Ru + uu];
        if (!(xu < Tu || Wu < xu) && (!Eu || xu !== Tu)) {
          for (var ju, Hu = Ju[Su], du = Ru + 1; du < uu; ++du) {
            Tu = mu[pu + du], Wu = mu[pu + du + uu];
            var bu = Xu[Bu + du],
              Cu = Xu[Bu + du + uu];
            if (Wu < bu || Cu < Tu) continue uu
          }
          if (void 0 !== (ju = Eu ? yu(Vu, Hu) : yu(Hu, Vu))) return ju
        }
      }
    }

    function Du(uu, Ru, yu, Eu, Ku, Qu, mu, Ju, Nu, Xu) {
      var Vu = 2 * uu,
        ru = Ju * Vu,
        Bu = Nu[ru + Ru];
      uu: for (var xu = Eu, Su = Eu * Vu; xu < Ku; ++xu, Su += Vu) {
        var pu = mu[xu];
        if (pu !== Xu) {
          var Tu = Qu[Su + Ru],
            Wu = Qu[Su + Ru + uu];
          if (!(Bu < Tu || Wu < Bu)) {
            for (var ju = Ru + 1; ju < uu; ++ju) {
              Tu = Qu[Su + ju], Wu = Qu[Su + ju + uu];
              var Hu = Nu[ru + ju],
                du = Nu[ru + ju + uu];
              if (Wu < Hu || du < Tu) continue uu
            }
            var bu = yu(pu, Xu);
            if (void 0 !== bu) return bu
          }
        }
      }
    }
  },
  38084: (uu, Ru, yu) => {
    uu.exports = function(uu, Ru, yu, mu, Ju, Nu) {
      if (mu <= yu + 1) return yu;
      var Xu = yu,
        Vu = mu,
        ru = mu + yu >>> 1,
        Bu = 2 * uu,
        xu = ru,
        Su = Ju[Bu * ru + Ru];
      for (; Xu < Vu;) {
        if (Vu - Xu < Ku) {
          Qu(uu, Ru, Xu, Vu, Ju, Nu), Su = Ju[Bu * ru + Ru];
          break
        }
        var pu = Vu - Xu,
          Tu = Math.random() * pu + Xu | 0,
          Wu = Ju[Bu * Tu + Ru],
          ju = Math.random() * pu + Xu | 0,
          Hu = Ju[Bu * ju + Ru],
          du = Math.random() * pu + Xu | 0,
          bu = Ju[Bu * du + Ru];
        Wu <= Hu ? bu >= Hu ? (xu = ju, Su = Hu) : Wu >= bu ? (xu = Tu, Su = Wu) : (xu = du, Su = bu) : Hu >= bu ? (xu = ju, Su = Hu) : bu >= Wu ? (xu = Tu, Su = Wu) : (xu = du, Su = bu);
        for (var Cu = Bu * (Vu - 1), ku = Bu * xu, eu = 0; eu < Bu; ++eu, ++Cu, ++ku) {
          var Au = Ju[Cu];
          Ju[Cu] = Ju[ku], Ju[ku] = Au
        }
        var Du = Nu[Vu - 1];
        Nu[Vu - 1] = Nu[xu], Nu[xu] = Du;
        for (Cu = Bu * (Vu - 1), ku = Bu * (xu = Eu(uu, Ru, Xu, Vu - 1, Ju, Nu, Su)), eu = 0; eu < Bu; ++eu, ++Cu, ++ku) {
          Au = Ju[Cu];
          Ju[Cu] = Ju[ku], Ju[ku] = Au
        }
        Du = Nu[Vu - 1];
        if (Nu[Vu - 1] = Nu[xu], Nu[xu] = Du, ru < xu) {
          for (Vu = xu - 1; Xu < Vu && Ju[Bu * (Vu - 1) + Ru] === Su;) Vu -= 1;
          Vu += 1
        } else {
          if (!(xu < ru)) break;
          for (Xu = xu + 1; Xu < Vu && Ju[Bu * Xu + Ru] === Su;) Xu += 1
        }
      }
      return Eu(uu, Ru, yu, ru, Ju, Nu, Ju[Bu * ru + Ru])
    };
    var Eu = yu(38093)("lo<p0", ["p0"]),
      Ku = 8;

    function Qu(uu, Ru, yu, Eu, Ku, Qu) {
      for (var mu = 2 * uu, Ju = mu * (yu + 1) + Ru, Nu = yu + 1; Nu < Eu; ++Nu, Ju += mu)
        for (var Xu = Ku[Ju], Vu = Nu, ru = mu * (Nu - 1); Vu > yu && Ku[ru + Ru] > Xu; --Vu, ru -= mu) {
          for (var Bu = ru, xu = ru + mu, Su = 0; Su < mu; ++Su, ++Bu, ++xu) {
            var pu = Ku[Bu];
            Ku[Bu] = Ku[xu], Ku[xu] = pu
          }
          var Tu = Qu[Vu];
          Qu[Vu] = Qu[Vu - 1], Qu[Vu - 1] = Tu
        }
    }
  },
  38093: uu => {
    uu.exports = function(uu, yu) {
      var Eu = "abcdef".split("").concat(yu),
        Ku = [];
      uu.indexOf("lo") >= 0 && Ku.push("lo=e[k+n]");
      uu.indexOf("hi") >= 0 && Ku.push("hi=e[k+o]");
      return Eu.push(Ru.replace("_", Ku.join()).replace("$", uu)), Function.apply(void 0, Eu)
    };
    var Ru = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  38069: uu => {
    uu.exports = function(uu, Eu) {
      Eu <= 4 * Ru ? yu(0, Eu - 1, uu) : Xu(0, Eu - 1, uu)
    };
    var Ru = 32;

    function yu(uu, Ru, yu) {
      for (var Eu = 2 * (uu + 1), Ku = uu + 1; Ku <= Ru; ++Ku) {
        for (var Qu = yu[Eu++], mu = yu[Eu++], Ju = Ku, Nu = Eu - 2; Ju-- > uu;) {
          var Xu = yu[Nu - 2],
            Vu = yu[Nu - 1];
          if (Xu < Qu) break;
          if (Xu === Qu && Vu < mu) break;
          yu[Nu] = Xu, yu[Nu + 1] = Vu, Nu -= 2
        }
        yu[Nu] = Qu, yu[Nu + 1] = mu
      }
    }

    function Eu(uu, Ru, yu) {
      Ru *= 2;
      var Eu = yu[uu *= 2],
        Ku = yu[uu + 1];
      yu[uu] = yu[Ru], yu[uu + 1] = yu[Ru + 1], yu[Ru] = Eu, yu[Ru + 1] = Ku
    }

    function Ku(uu, Ru, yu) {
      Ru *= 2, yu[uu *= 2] = yu[Ru], yu[uu + 1] = yu[Ru + 1]
    }

    function Qu(uu, Ru, yu, Eu) {
      Ru *= 2, yu *= 2;
      var Ku = Eu[uu *= 2],
        Qu = Eu[uu + 1];
      Eu[uu] = Eu[Ru], Eu[uu + 1] = Eu[Ru + 1], Eu[Ru] = Eu[yu], Eu[Ru + 1] = Eu[yu + 1], Eu[yu] = Ku, Eu[yu + 1] = Qu
    }

    function mu(uu, Ru, yu, Eu, Ku) {
      Ru *= 2, Ku[uu *= 2] = Ku[Ru], Ku[Ru] = yu, Ku[uu + 1] = Ku[Ru + 1], Ku[Ru + 1] = Eu
    }

    function Ju(uu, Ru, yu) {
      Ru *= 2;
      var Eu = yu[uu *= 2],
        Ku = yu[Ru];
      return !(Eu < Ku) && (Eu !== Ku || yu[uu + 1] > yu[Ru + 1])
    }

    function Nu(uu, Ru, yu, Eu) {
      var Ku = Eu[uu *= 2];
      return Ku < Ru || Ku === Ru && Eu[uu + 1] < yu
    }

    function Xu(uu, Vu, ru) {
      var Bu = (Vu - uu + 1) / 6 | 0,
        xu = uu + Bu,
        Su = Vu - Bu,
        pu = uu + Vu >> 1,
        Tu = pu - Bu,
        Wu = pu + Bu,
        ju = xu,
        Hu = Tu,
        du = pu,
        bu = Wu,
        Cu = Su,
        ku = uu + 1,
        eu = Vu - 1,
        Au = 0;
      Ju(ju, Hu, ru) && (Au = ju, ju = Hu, Hu = Au), Ju(bu, Cu, ru) && (Au = bu, bu = Cu, Cu = Au), Ju(ju, du, ru) && (Au = ju, ju = du, du = Au), Ju(Hu, du, ru) && (Au = Hu, Hu = du, du = Au), Ju(ju, bu, ru) && (Au = ju, ju = bu, bu = Au), Ju(du, bu, ru) && (Au = du, du = bu, bu = Au), Ju(Hu, Cu, ru) && (Au = Hu, Hu = Cu, Cu = Au), Ju(Hu, du, ru) && (Au = Hu, Hu = du, du = Au), Ju(bu, Cu, ru) && (Au = bu, bu = Cu, Cu = Au);
      for (var Du = ru[2 * Hu], Mu = ru[2 * Hu + 1], Iu = ru[2 * bu], Gu = ru[2 * bu + 1], Uu = 2 * ju, nu = 2 * du, su = 2 * Cu, tu = 2 * xu, lu = 2 * pu, gu = 2 * Su, cu = 0; cu < 2; ++cu) {
        var Lu = ru[Uu + cu],
          zu = ru[nu + cu],
          Fu = ru[su + cu];
        ru[tu + cu] = Lu, ru[lu + cu] = zu, ru[gu + cu] = Fu
      }
      Ku(Tu, uu, ru), Ku(Wu, Vu, ru);
      for (var wu = ku; wu <= eu; ++wu)
        if (Nu(wu, Du, Mu, ru)) wu !== ku && Eu(wu, ku, ru), ++ku;
        else if (!Nu(wu, Iu, Gu, ru))
        for (;;) {
          if (Nu(eu, Iu, Gu, ru)) {
            Nu(eu, Du, Mu, ru) ? (Qu(wu, ku, eu, ru), ++ku, --eu) : (Eu(wu, eu, ru), --eu);
            break
          }
          if (--eu < wu) break
        }
      mu(uu, ku - 1, Du, Mu, ru), mu(Vu, eu + 1, Iu, Gu, ru), ku - 2 - uu <= Ru ? yu(uu, ku - 2, ru) : Xu(uu, ku - 2, ru), Vu - (eu + 2) <= Ru ? yu(eu + 2, Vu, ru) : Xu(eu + 2, Vu, ru), eu - ku <= Ru ? yu(ku, eu, ru) : Xu(ku, eu, ru)
    }
  },
  38064: (uu, Ru, yu) => {
    uu.exports = {
      init: function(uu) {
        var Ru = Ku.nextPow2(uu);
        Nu.length < Ru && (Eu.free(Nu), Nu = Eu.mallocInt32(Ru));
        Xu.length < Ru && (Eu.free(Xu), Xu = Eu.mallocInt32(Ru));
        Vu.length < Ru && (Eu.free(Vu), Vu = Eu.mallocInt32(Ru));
        ru.length < Ru && (Eu.free(ru), ru = Eu.mallocInt32(Ru));
        Bu.length < Ru && (Eu.free(Bu), Bu = Eu.mallocInt32(Ru));
        xu.length < Ru && (Eu.free(xu), xu = Eu.mallocInt32(Ru));
        var yu = 8 * Ru;
        Su.length < yu && (Eu.free(Su), Su = Eu.mallocDouble(yu))
      },
      sweepBipartite: function(uu, Ru, yu, Eu, Ku, Ju, Bu, xu, Wu, ju) {
        for (var Hu = 0, du = 2 * uu, bu = uu - 1, Cu = du - 1, ku = yu; ku < Eu; ++ku) {
          var eu = Ju[ku],
            Au = du * ku;
          Su[Hu++] = Ku[Au + bu], Su[Hu++] = -(eu + 1), Su[Hu++] = Ku[Au + Cu], Su[Hu++] = eu
        }
        for (ku = Bu; ku < xu; ++ku) {
          eu = ju[ku] + mu;
          var Du = du * ku;
          Su[Hu++] = Wu[Du + bu], Su[Hu++] = -eu, Su[Hu++] = Wu[Du + Cu], Su[Hu++] = eu
        }
        var Mu = Hu >>> 1;
        Qu(Su, Mu);
        var Iu = 0,
          Gu = 0;
        for (ku = 0; ku < Mu; ++ku) {
          var Uu = 0 | Su[2 * ku + 1];
          if (Uu >= mu) pu(Vu, ru, Gu--, Uu = Uu - mu | 0);
          else if (Uu >= 0) pu(Nu, Xu, Iu--, Uu);
          else if (Uu <= -mu) {
            Uu = -Uu - mu | 0;
            for (var nu = 0; nu < Iu; ++nu) {
              if (void 0 !== (su = Ru(Nu[nu], Uu))) return su
            }
            Tu(Vu, ru, Gu++, Uu)
          } else {
            Uu = -Uu - 1 | 0;
            for (nu = 0; nu < Gu; ++nu) {
              var su;
              if (void 0 !== (su = Ru(Uu, Vu[nu]))) return su
            }
            Tu(Nu, Xu, Iu++, Uu)
          }
        }
      },
      sweepComplete: function(uu, Ru, yu, Eu, Ku, mu, Ju, Wu, ju, Hu) {
        for (var du = 0, bu = 2 * uu, Cu = uu - 1, ku = bu - 1, eu = yu; eu < Eu; ++eu) {
          var Au = mu[eu] + 1 << 1,
            Du = bu * eu;
          Su[du++] = Ku[Du + Cu], Su[du++] = -Au, Su[du++] = Ku[Du + ku], Su[du++] = Au
        }
        for (eu = Ju; eu < Wu; ++eu) {
          Au = Hu[eu] + 1 << 1;
          var Mu = bu * eu;
          Su[du++] = ju[Mu + Cu], Su[du++] = 1 | -Au, Su[du++] = ju[Mu + ku], Su[du++] = 1 | Au
        }
        var Iu = du >>> 1;
        Qu(Su, Iu);
        var Gu = 0,
          Uu = 0,
          nu = 0;
        for (eu = 0; eu < Iu; ++eu) {
          var su = 0 | Su[2 * eu + 1],
            tu = 1 & su;
          if (eu < Iu - 1 && su >> 1 === Su[2 * eu + 3] >> 1 && (tu = 2, eu += 1), su < 0) {
            for (var lu = -(su >> 1) - 1, gu = 0; gu < nu; ++gu) {
              if (void 0 !== (cu = Ru(Bu[gu], lu))) return cu
            }
            if (0 !== tu)
              for (gu = 0; gu < Gu; ++gu) {
                if (void 0 !== (cu = Ru(Nu[gu], lu))) return cu
              }
            if (1 !== tu)
              for (gu = 0; gu < Uu; ++gu) {
                var cu;
                if (void 0 !== (cu = Ru(Vu[gu], lu))) return cu
              }
            0 === tu ? Tu(Nu, Xu, Gu++, lu) : 1 === tu ? Tu(Vu, ru, Uu++, lu) : 2 === tu && Tu(Bu, xu, nu++, lu)
          } else {
            lu = (su >> 1) - 1;
            0 === tu ? pu(Nu, Xu, Gu--, lu) : 1 === tu ? pu(Vu, ru, Uu--, lu) : 2 === tu && pu(Bu, xu, nu--, lu)
          }
        }
      },
      scanBipartite: function(uu, Ru, yu, Eu, Ku, Ju, Vu, ru, Bu, xu, Wu, ju) {
        var Hu = 0,
          du = 2 * uu,
          bu = Ru,
          Cu = Ru + uu,
          ku = 1,
          eu = 1;
        Eu ? eu = mu : ku = mu;
        for (var Au = Ku; Au < Ju; ++Au) {
          var Du = Au + ku,
            Mu = du * Au;
          Su[Hu++] = Vu[Mu + bu], Su[Hu++] = -Du, Su[Hu++] = Vu[Mu + Cu], Su[Hu++] = Du
        }
        for (Au = Bu; Au < xu; ++Au) {
          Du = Au + eu;
          var Iu = du * Au;
          Su[Hu++] = Wu[Iu + bu], Su[Hu++] = -Du
        }
        var Gu = Hu >>> 1;
        Qu(Su, Gu);
        var Uu = 0;
        for (Au = 0; Au < Gu; ++Au) {
          var nu = 0 | Su[2 * Au + 1];
          if (nu < 0) {
            var su = !1;
            if ((Du = -nu) >= mu ? (su = !Eu, Du -= mu) : (su = !!Eu, Du -= 1), su) Tu(Nu, Xu, Uu++, Du);
            else {
              var tu = ju[Du],
                lu = du * Du,
                gu = Wu[lu + Ru + 1],
                cu = Wu[lu + Ru + 1 + uu];
              uu: for (var Lu = 0; Lu < Uu; ++Lu) {
                var zu = Nu[Lu],
                  Fu = du * zu;
                if (!(cu < Vu[Fu + Ru + 1] || Vu[Fu + Ru + 1 + uu] < gu)) {
                  for (var wu = Ru + 2; wu < uu; ++wu)
                    if (Wu[lu + wu + uu] < Vu[Fu + wu] || Vu[Fu + wu + uu] < Wu[lu + wu]) continue uu;
                  var Zu, hu = ru[zu];
                  if (void 0 !== (Zu = Eu ? yu(tu, hu) : yu(hu, tu))) return Zu
                }
              }
            }
          } else pu(Nu, Xu, Uu--, nu - ku)
        }
      },
      scanComplete: function(uu, Ru, yu, Eu, Ku, Ju, Xu, Vu, ru, Bu, xu) {
        for (var pu = 0, Tu = 2 * uu, Wu = Ru, ju = Ru + uu, Hu = Eu; Hu < Ku; ++Hu) {
          var du = Hu + mu,
            bu = Tu * Hu;
          Su[pu++] = Ju[bu + Wu], Su[pu++] = -du, Su[pu++] = Ju[bu + ju], Su[pu++] = du
        }
        for (Hu = Vu; Hu < ru; ++Hu) {
          du = Hu + 1;
          var Cu = Tu * Hu;
          Su[pu++] = Bu[Cu + Wu], Su[pu++] = -du
        }
        var ku = pu >>> 1;
        Qu(Su, ku);
        var eu = 0;
        for (Hu = 0; Hu < ku; ++Hu) {
          var Au = 0 | Su[2 * Hu + 1];
          if (Au < 0) {
            if ((du = -Au) >= mu) Nu[eu++] = du - mu;
            else {
              var Du = xu[du -= 1],
                Mu = Tu * du,
                Iu = Bu[Mu + Ru + 1],
                Gu = Bu[Mu + Ru + 1 + uu];
              uu: for (var Uu = 0; Uu < eu; ++Uu) {
                var nu = Nu[Uu],
                  su = Xu[nu];
                if (su === Du) break;
                var tu = Tu * nu;
                if (!(Gu < Ju[tu + Ru + 1] || Ju[tu + Ru + 1 + uu] < Iu)) {
                  for (var lu = Ru + 2; lu < uu; ++lu)
                    if (Bu[Mu + lu + uu] < Ju[tu + lu] || Ju[tu + lu + uu] < Bu[Mu + lu]) continue uu;
                  var gu = yu(su, Du);
                  if (void 0 !== gu) return gu
                }
              }
            }
          } else {
            for (du = Au - mu, Uu = eu - 1; Uu >= 0; --Uu)
              if (Nu[Uu] === du) {
                for (lu = Uu + 1; lu < eu; ++lu) Nu[lu - 1] = Nu[lu];
                break
              }-- eu
          }
        }
      }
    };
    var Eu = yu(38038),
      Ku = yu(38046),
      Qu = yu(38069),
      mu = 1 << 28,
      Ju = 1024,
      Nu = Eu.mallocInt32(Ju),
      Xu = Eu.mallocInt32(Ju),
      Vu = Eu.mallocInt32(Ju),
      ru = Eu.mallocInt32(Ju),
      Bu = Eu.mallocInt32(Ju),
      xu = Eu.mallocInt32(Ju),
      Su = Eu.mallocDouble(8192);

    function pu(uu, Ru, yu, Eu) {
      var Ku = Ru[Eu],
        Qu = uu[yu - 1];
      uu[Ku] = Qu, Ru[Qu] = Ku
    }

    function Tu(uu, Ru, yu, Eu) {
      uu[yu] = Eu, Ru[Eu] = yu
    }
  },
  38053: uu => {
    function Ru(uu, yu, Eu) {
      var Ku = 0 | uu[Eu];
      if (Ku <= 0) return [];
      var Qu, mu = new Array(Ku);
      if (Eu === uu.length - 1)
        for (Qu = 0; Qu < Ku; ++Qu) mu[Qu] = yu;
      else
        for (Qu = 0; Qu < Ku; ++Qu) mu[Qu] = Ru(uu, yu, Eu + 1);
      return mu
    }
    uu.exports = function(uu, yu) {
      switch ("undefined" === typeof yu && (yu = 0), typeof uu) {
        case "number":
          if (uu > 0) return function(uu, Ru) {
            var yu, Eu;
            for (yu = new Array(uu), Eu = 0; Eu < uu; ++Eu) yu[Eu] = Ru;
            return yu
          }(0 | uu, yu);
          break;
        case "object":
          if ("number" === typeof uu.length) return Ru(uu, yu, 0)
      }
      return []
    }
  },
  37997: (uu, Ru, yu) => {
    uu.exports = function() {
      var uu = this;
      this.components = {}, this.comps = this.components;
      var Ru = this.components,
        yu = 1,
        Ku = {},
        Qu = [],
        mu = [],
        Ju = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function Nu(uu, yu) {
        var Eu = Ru[yu],
          Qu = Ku[yu],
          mu = Qu.hash[uu];
        mu && (Qu.remove(uu), Eu.JA && (Eu.multi ? (mu.forEach((Ru => {
          Ru && Eu.JA(uu, Ru)
        })), mu.length = 0) : Eu.JA(uu, mu)), Ju.removals.push(Qu), Xu())
      }

      function Xu() {
        Ju.timeout || (Ju.timeout = !0, setTimeout(Vu, 1))
      }

      function Vu() {
        Ju.timeout = !1, ru()
      }

      function ru() {
        Ju.multiComps.length && function(uu) {
          for (var Ru = 0; Ru < uu.length; Ru++) {
            var {
              entID: yu,
              data: Eu
            } = uu[Ru], Ku = Eu.hash[yu];
            if (Ku) {
              for (var Qu = 0; Qu < Ku.length; Qu++) Ku[Qu] || (Ku.splice(Qu, 1), Qu--);
              0 === Ku.length && (Eu.remove(yu), Ju.removals.push(Eu))
            }
          }
          uu.length = 0
        }(Ju.multiComps), Ju.removals.length && function(uu) {
          for (var Ru = 0; Ru < uu.length; Ru++) {
            uu[Ru].flush()
          }
          uu.length = 0
        }(Ju.removals)
      }
      this.Bp = Ku, this._systems = Qu, this._renderSystems = mu, this.iZ = function(Ru) {
        var Eu = yu++;
        return Array.isArray(Ru) && Ru.forEach((Ru => uu.yI(Eu, Ru))), Eu
      }, this.deleteEntity = function(Ru) {
        return Object.keys(Ku).forEach((uu => {
          Ku[uu].hash[Ru] && Nu(Ru, uu)
        })), uu
      }, this.myu = function(uu) {
        if (!uu) throw new Error("Missing component definition");
        var yu = uu.name;
        if (!yu) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof yu) throw new Error("Component name must be a string.");
        if ("" === yu) throw new Error("Component name must be a non-empty string.");
        if (Ku[yu]) throw new Error(`Component ${yu} already exists.`);
        var Ju = {};
        return Ju.name = yu, Ju.multi = !!uu.multi, Ju.order = isNaN(uu.order) ? 99 : uu.order, Ju.stateConstructor = uu.stateConstructor || null, Ju.state = uu.state || {}, Ju.UH = uu.UH || null, Ju.JA = uu.JA || null, Ju.system = uu.system || null, Ju.sH = uu.sH || null, Ru[yu] = Ju, Ku[yu] = new Eu, Ku[yu]._pendingMultiCleanup = !1, Ku[yu]._multiCleanupIDs = Ju.multi ? [] : null, Ju.system && (Qu.push(yu), Qu.sort(((uu, yu) => Ru[uu].order - Ru[yu].order))), Ju.sH && (mu.push(yu), mu.sort(((uu, yu) => Ru[uu].order - Ru[yu].order))), yu
      }, this.overwriteComponent = function(uu, yu) {
        var Eu = Ru[uu];
        if (!Eu) throw new Error(`Unknown component: ${uu}`);
        if (!yu) throw new Error("Missing component definition");
        if (Eu.name !== yu.name) throw new Error("Overwriting component must use the same name property.");
        var Ju = {};
        Ju.name = uu, Ju.multi = !!yu.multi, Ju.order = isNaN(yu.order) ? 99 : yu.order, Ju.state = yu.state || {}, Ju.UH = yu.UH || null, Ju.JA = yu.JA || null, Ju.system = yu.system || null, Ju.sH = yu.sH || null, Ru[uu] = Ju, Ku[uu]._pendingMultiCleanup = !1, Ku[uu]._multiCleanupIDs = Ju.multi ? [] : null;
        var Nu = Qu.indexOf(uu);
        Ju.system && Nu < 0 && Qu.push(uu), !Ju.system && Nu >= 0 && Qu.splice(Nu, 1), Qu.sort(((uu, yu) => Ru[uu].order - Ru[yu].order));
        var Xu = mu.indexOf(uu);
        Ju.sH && Xu < 0 && mu.push(uu), !Ju.sH && Xu >= 0 && mu.splice(Xu, 1), mu.sort(((uu, yu) => Ru[uu].order - Ru[yu].order));
        var Vu = Ju.state;
        return this.bM(uu).forEach((uu => {
          for (var Ru in Vu) Ru in uu || (uu[Ru] = Vu[Ru]);
          Ju.UH && Ju.UH(uu.gM, uu)
        })), uu
      }, this.deleteComponent = function(yu) {
        var Eu = Ku[yu];
        if (!Eu) throw new Error(`Unknown component: ${yu}`);
        Eu.flush(), Eu.list.forEach((uu => {
          uu && Nu(uu.gM || uu[0].gM, yu)
        }));
        var Ju = Qu.indexOf(yu),
          Xu = mu.indexOf(yu);
        return Ju > -1 && Qu.splice(Ju, 1), Xu > -1 && mu.splice(Xu, 1), Ku[yu].dispose(), delete Ku[yu], delete Ru[yu], uu
      }, this.yI = function(uu, yu, Eu) {
        var Qu, mu = Ru[yu],
          Ju = Ku[yu];
        if (!Ju) throw new Error(`Unknown component: ${yu}.`);
        if (Ju.hash[uu] && !mu.multi) throw new Error(`Entity ${uu} already has component: ${yu}.`);
        if (mu.stateConstructor) {
          if (!(Qu = new mu.stateConstructor).hasOwnProperty("gM")) throw new Error(`Component ${mu.name} stateConstructor type does not have property __id`);
          Object.assign(Qu, mu.state, Eu)
        } else Qu = {
          gM: uu,
          ...mu.state,
          ...Eu
        };
        if (Qu.gM = uu, mu.multi) {
          var Nu = Ju.hash[uu];
          Nu || (Nu = [], Ju.add(uu, Nu)), Nu.push(Qu)
        } else Ju.add(uu, Qu);
        return mu.UH && mu.UH(uu, Qu), this
      }, this.RRu = function(uu, Ru) {
        var yu = Ku[Ru];
        if (!yu) throw new Error(`Unknown component: ${Ru}.`);
        return !!yu.hash[uu]
      }, this.mI = function(Ru, yu) {
        if (!Ku[yu]) throw new Error(`Unknown component: ${yu}.`);
        return Nu(Ru, yu), uu
      }, this.getState = function(uu, Ru) {
        var yu = Ku[Ru];
        if (!yu) throw new Error(`Unknown component: ${Ru}.`);
        return yu.hash[uu]
      }, this.bM = function(uu) {
        var Ru = Ku[uu];
        if (!Ru) throw new Error(`Unknown component: ${uu}.`);
        return ru(), Ru.list
      }, this.cRu = function(uu) {
        if (!Ku[uu]) throw new Error(`Unknown component: ${uu}.`);
        var Ru = Ku[uu].hash;
        return uu => Ru[uu]
      }, this.PRu = function(uu) {
        if (!Ku[uu]) throw new Error(`Unknown component: ${uu}.`);
        var Ru = Ku[uu].hash;
        return uu => !!Ru[uu]
      }, this.sr = function(yu) {
        ru();
        for (var Eu = 0; Eu < Qu.length; Eu++) {
          var mu = Qu[Eu],
            Ju = Ru[mu],
            Nu = Ku[mu];
          Ju.system(yu, Nu.list), ru()
        }
        return uu
      }, this.render = function(yu) {
        ru();
        for (var Eu = 0; Eu < mu.length; Eu++) {
          var Qu = mu[Eu],
            Ju = Ru[Qu],
            Nu = Ku[Qu];
          Ju.sH(yu, Nu.list), ru()
        }
        return uu
      }, this.removeMultiComponent = function(yu, Eu, Qu) {
        var mu = Ru[Eu],
          Nu = Ku[Eu];
        if (!Nu) throw new Error(`Unknown component: ${Eu}.`);
        if (!mu.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(uu, Ru, yu, Eu) {
          var Ku = yu.hash[uu];
          if (Ku) {
            var Qu = Ku[Eu];
            Qu && (Ku[Eu] = null, Ru.JA && Ru.JA(uu, Qu), Ju.multiComps.push({
              entID: uu,
              data: yu
            }), Xu())
          }
        }(yu, mu, Nu, Qu), uu
      }
    };
    var Eu = yu(38004)
  },
  38004: uu => {
    function Ru(uu, Ru) {
      var yu = uu._map[Ru];
      if (delete uu.hash[Ru], delete uu._map[Ru], yu === uu.list.length - 1) uu.list.pop(), uu._idList.pop();
      else {
        var Eu = uu.list.pop();
        uu.list[yu] = Eu;
        var Ku = uu._idList.pop();
        uu._idList[yu] = Ku, uu._map[Ku] = yu
      }
    }
    uu.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(uu, Ru) {
        if ("number" === typeof this._map[uu]) {
          var yu = this._map[uu];
          this.hash[uu] = Ru, this.list[yu] = Ru, this._idList[yu] = uu
        } else this._map[uu] = this.list.length, this.hash[uu] = Ru, this.list.push(Ru), this._idList.push(uu)
      }
      remove(uu) {
        var Ru = this._map[uu];
        this.hash[uu] = null, this.list[Ru] = null, this._pendingRemovals.push(uu)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var uu = 0; uu < this._pendingRemovals.length; uu++) {
          var yu = this._pendingRemovals[uu];
          null === this.hash[yu] && Ru(this, yu)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  37476: uu => {
    uu.exports = function(uu) {
      for (var Ru = new Array(uu), yu = 0; yu < uu; ++yu) Ru[yu] = yu;
      return Ru
    }
  },
  37481: uu => {
    function Ru(uu) {
      return !!uu.constructor && "function" === typeof uu.constructor.isBuffer && uu.constructor.isBuffer(uu)
    }
    uu.exports = function(uu) {
      return null != uu && (Ru(uu) || function(uu) {
        return "function" === typeof uu.readFloatLE && "function" === typeof uu.slice && Ru(uu.slice(0, 0))
      }(uu) || !!uu._isBuffer)
    }
  },
  37798: (uu, Ru, yu) => {
    uu = yu.nmd(uu);
    var Eu = "__lodash_hash_undefined__",
      Ku = 9007199254740991,
      Qu = "[object Arguments]",
      mu = "[object Boolean]",
      Ju = "[object Date]",
      Nu = "[object Function]",
      Xu = "[object GeneratorFunction]",
      Vu = "[object Map]",
      ru = "[object Number]",
      Bu = "[object Object]",
      xu = "[object Promise]",
      Su = "[object RegExp]",
      pu = "[object Set]",
      Tu = "[object String]",
      Wu = "[object Symbol]",
      ju = "[object WeakMap]",
      Hu = "[object ArrayBuffer]",
      du = "[object DataView]",
      bu = "[object Float32Array]",
      Cu = "[object Float64Array]",
      ku = "[object Int8Array]",
      eu = "[object Int16Array]",
      Au = "[object Int32Array]",
      Du = "[object Uint8Array]",
      Mu = "[object Uint8ClampedArray]",
      Iu = "[object Uint16Array]",
      Gu = "[object Uint32Array]",
      Uu = /\w*$/,
      nu = /^\[object .+?Constructor\]$/,
      su = /^(?:0|[1-9]\d*)$/,
      tu = {};
    tu[Qu] = tu["[object Array]"] = tu[Hu] = tu[du] = tu[mu] = tu[Ju] = tu[bu] = tu[Cu] = tu[ku] = tu[eu] = tu[Au] = tu[Vu] = tu[ru] = tu[Bu] = tu[Su] = tu[pu] = tu[Tu] = tu[Wu] = tu[Du] = tu[Mu] = tu[Iu] = tu[Gu] = !0, tu["[object Error]"] = tu[Nu] = tu[ju] = !1;
    var lu = "object" == typeof yu.g && yu.g && yu.g.Object === Object && yu.g,
      gu = "object" == typeof self && self && self.Object === Object && self,
      cu = lu || gu || Function("return this")(),
      Lu = Ru && !Ru.nodeType && Ru,
      zu = Lu && uu && !uu.nodeType && uu,
      Fu = zu && zu.exports === Lu;

    function wu(uu, Ru) {
      return uu.set(Ru[0], Ru[1]), uu
    }

    function Zu(uu, Ru) {
      return uu.add(Ru), uu
    }

    function hu(uu, Ru, yu, Eu) {
      var Ku = -1,
        Qu = uu ? uu.length : 0;
      for (Eu && Qu && (yu = uu[++Ku]); ++Ku < Qu;) yu = Ru(yu, uu[Ku], Ku, uu);
      return yu
    }

    function Pu(uu) {
      var Ru = !1;
      if (null != uu && "function" != typeof uu.toString) try {
        Ru = !!(uu + "")
      } catch (yu) {}
      return Ru
    }

    function iu(uu) {
      var Ru = -1,
        yu = Array(uu.size);
      return uu.forEach((function(uu, Eu) {
        yu[++Ru] = [Eu, uu]
      })), yu
    }

    function Yu(uu, Ru) {
      return function(yu) {
        return uu(Ru(yu))
      }
    }

    function ou(uu) {
      var Ru = -1,
        yu = Array(uu.size);
      return uu.forEach((function(uu) {
        yu[++Ru] = uu
      })), yu
    }
    var qu = Array.prototype,
      Ou = Function.prototype,
      vu = Object.prototype,
      au = cu["__core-js_shared__"],
      fu = function() {
        var uu = /[^.]+$/.exec(au && au.keys && au.keys.IE_PROTO || "");
        return uu ? "Symbol(src)_1." + uu : ""
      }(),
      uR = Ou.toString,
      RR = vu.hasOwnProperty,
      yR = vu.toString,
      ER = RegExp("^" + uR.call(RR).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      KR = Fu ? cu.XS : void 0,
      QR = cu.Symbol,
      mR = cu.Uint8Array,
      JR = Yu(Object.getPrototypeOf, Object),
      NR = Object.create,
      XR = vu.propertyIsEnumerable,
      VR = qu.splice,
      rR = Object.getOwnPropertySymbols,
      BR = KR ? KR.isBuffer : void 0,
      xR = Yu(Object.keys, Object),
      SR = FR(cu, "DataView"),
      pR = FR(cu, "Map"),
      TR = FR(cu, "Promise"),
      WR = FR(cu, "Set"),
      jR = FR(cu, "WeakMap"),
      HR = FR(Object, "create"),
      dR = iR(SR),
      bR = iR(pR),
      CR = iR(TR),
      kR = iR(WR),
      eR = iR(jR),
      AR = QR ? QR.prototype : void 0,
      DR = AR ? AR.valueOf : void 0;

    function MR(uu) {
      var Ru = -1,
        yu = uu ? uu.length : 0;
      for (this.clear(); ++Ru < yu;) {
        var Eu = uu[Ru];
        this.set(Eu[0], Eu[1])
      }
    }

    function IR(uu) {
      var Ru = -1,
        yu = uu ? uu.length : 0;
      for (this.clear(); ++Ru < yu;) {
        var Eu = uu[Ru];
        this.set(Eu[0], Eu[1])
      }
    }

    function GR(uu) {
      var Ru = -1,
        yu = uu ? uu.length : 0;
      for (this.clear(); ++Ru < yu;) {
        var Eu = uu[Ru];
        this.set(Eu[0], Eu[1])
      }
    }

    function UR(uu) {
      this.__data__ = new IR(uu)
    }

    function nR(uu, Ru) {
      var yu = oR(uu) || function(uu) {
          return function(uu) {
            return function(uu) {
              return !!uu && "object" == typeof uu
            }(uu) && qR(uu)
          }(uu) && RR.call(uu, "callee") && (!XR.call(uu, "callee") || yR.call(uu) == Qu)
        }(uu) ? function(uu, Ru) {
          for (var yu = -1, Eu = Array(uu); ++yu < uu;) Eu[yu] = Ru(yu);
          return Eu
        }(uu.length, String) : [],
        Eu = yu.length,
        Ku = !!Eu;
      for (var mu in uu) !Ru && !RR.call(uu, mu) || Ku && ("length" == mu || hR(mu, Eu)) || yu.push(mu);
      return yu
    }

    function sR(uu, Ru, yu) {
      var Eu = uu[Ru];
      RR.call(uu, Ru) && YR(Eu, yu) && (void 0 !== yu || Ru in uu) || (uu[Ru] = yu)
    }

    function tR(uu, Ru) {
      for (var yu = uu.length; yu--;)
        if (YR(uu[yu][0], Ru)) return yu;
      return -1
    }

    function lR(uu, Ru, yu, Eu, Ku, xu, ju) {
      var nu;
      if (Eu && (nu = xu ? Eu(uu, Ku, xu, ju) : Eu(uu)), void 0 !== nu) return nu;
      if (!aR(uu)) return uu;
      var su = oR(uu);
      if (su) {
        if (nu = function(uu) {
            var Ru = uu.length,
              yu = uu.constructor(Ru);
            Ru && "string" == typeof uu[0] && RR.call(uu, "index") && (yu.index = uu.index, yu.input = uu.input);
            return yu
          }(uu), !Ru) return function(uu, Ru) {
          var yu = -1,
            Eu = uu.length;
          Ru || (Ru = Array(Eu));
          for (; ++yu < Eu;) Ru[yu] = uu[yu];
          return Ru
        }(uu, nu)
      } else {
        var lu = ZR(uu),
          gu = lu == Nu || lu == Xu;
        if (OR(uu)) return function(uu, Ru) {
          if (Ru) return uu.slice();
          var yu = new uu.constructor(uu.length);
          return uu.copy(yu), yu
        }(uu, Ru);
        if (lu == Bu || lu == Qu || gu && !xu) {
          if (Pu(uu)) return xu ? uu : {};
          if (nu = function(uu) {
              return "function" != typeof uu.constructor || PR(uu) ? {} : (Ru = JR(uu), aR(Ru) ? NR(Ru) : {});
              var Ru
            }(gu ? {} : uu), !Ru) return function(uu, Ru) {
            return LR(uu, wR(uu), Ru)
          }(uu, function(uu, Ru) {
            return uu && LR(Ru, fR(Ru), uu)
          }(nu, uu))
        } else {
          if (!tu[lu]) return xu ? uu : {};
          nu = function(uu, Ru, yu, Eu) {
            var Ku = uu.constructor;
            switch (Ru) {
              case Hu:
                return cR(uu);
              case mu:
              case Ju:
                return new Ku(+uu);
              case du:
                return function(uu, Ru) {
                  var yu = Ru ? cR(uu.buffer) : uu.buffer;
                  return new uu.constructor(yu, uu.byteOffset, uu.byteLength)
                }(uu, Eu);
              case bu:
              case Cu:
              case ku:
              case eu:
              case Au:
              case Du:
              case Mu:
              case Iu:
              case Gu:
                return function(uu, Ru) {
                  var yu = Ru ? cR(uu.buffer) : uu.buffer;
                  return new uu.constructor(yu, uu.byteOffset, uu.length)
                }(uu, Eu);
              case Vu:
                return function(uu, Ru, yu) {
                  var Eu = Ru ? yu(iu(uu), !0) : iu(uu);
                  return hu(Eu, wu, new uu.constructor)
                }(uu, Eu, yu);
              case ru:
              case Tu:
                return new Ku(uu);
              case Su:
                return function(uu) {
                  var Ru = new uu.constructor(uu.source, Uu.exec(uu));
                  return Ru.lastIndex = uu.lastIndex, Ru
                }(uu);
              case pu:
                return function(uu, Ru, yu) {
                  var Eu = Ru ? yu(ou(uu), !0) : ou(uu);
                  return hu(Eu, Zu, new uu.constructor)
                }(uu, Eu, yu);
              case Wu:
                return Qu = uu, DR ? Object(DR.call(Qu)) : {}
            }
            var Qu
          }(uu, lu, lR, Ru)
        }
      }
      ju || (ju = new UR);
      var cu = ju.get(uu);
      if (cu) return cu;
      if (ju.set(uu, nu), !su) var Lu = yu ? function(uu) {
        return function(uu, Ru, yu) {
          var Eu = Ru(uu);
          return oR(uu) ? Eu : function(uu, Ru) {
            for (var yu = -1, Eu = Ru.length, Ku = uu.length; ++yu < Eu;) uu[Ku + yu] = Ru[yu];
            return uu
          }(Eu, yu(uu))
        }(uu, fR, wR)
      }(uu) : fR(uu);
      return function(uu, Ru) {
        for (var yu = -1, Eu = uu ? uu.length : 0; ++yu < Eu && !1 !== Ru(uu[yu], yu, uu););
      }(Lu || uu, (function(Ku, Qu) {
        Lu && (Ku = uu[Qu = Ku]), sR(nu, Qu, lR(Ku, Ru, yu, Eu, Qu, uu, ju))
      })), nu
    }

    function gR(uu) {
      return !(!aR(uu) || (Ru = uu, fu && fu in Ru)) && (vR(uu) || Pu(uu) ? ER : nu).test(iR(uu));
      var Ru
    }

    function cR(uu) {
      var Ru = new uu.constructor(uu.byteLength);
      return new mR(Ru).set(new mR(uu)), Ru
    }

    function LR(uu, Ru, yu, Eu) {
      yu || (yu = {});
      for (var Ku = -1, Qu = Ru.length; ++Ku < Qu;) {
        var mu = Ru[Ku],
          Ju = Eu ? Eu(yu[mu], uu[mu], mu, yu, uu) : void 0;
        sR(yu, mu, void 0 === Ju ? uu[mu] : Ju)
      }
      return yu
    }

    function zR(uu, Ru) {
      var yu = uu.__data__;
      return function(uu) {
        var Ru = typeof uu;
        return "string" == Ru || "number" == Ru || "symbol" == Ru || "boolean" == Ru ? "__proto__" !== uu : null === uu
      }(Ru) ? yu["string" == typeof Ru ? "string" : "hash"] : yu.map
    }

    function FR(uu, Ru) {
      var yu = function(uu, Ru) {
        return null == uu ? void 0 : uu[Ru]
      }(uu, Ru);
      return gR(yu) ? yu : void 0
    }
    MR.prototype.clear = function() {
      this.__data__ = HR ? HR(null) : {}
    }, MR.prototype.delete = function(uu) {
      return this.has(uu) && delete this.__data__[uu]
    }, MR.prototype.get = function(uu) {
      var Ru = this.__data__;
      if (HR) {
        var yu = Ru[uu];
        return yu === Eu ? void 0 : yu
      }
      return RR.call(Ru, uu) ? Ru[uu] : void 0
    }, MR.prototype.has = function(uu) {
      var Ru = this.__data__;
      return HR ? void 0 !== Ru[uu] : RR.call(Ru, uu)
    }, MR.prototype.set = function(uu, Ru) {
      return this.__data__[uu] = HR && void 0 === Ru ? Eu : Ru, this
    }, IR.prototype.clear = function() {
      this.__data__ = []
    }, IR.prototype.delete = function(uu) {
      var Ru = this.__data__,
        yu = tR(Ru, uu);
      return !(yu < 0) && (yu == Ru.length - 1 ? Ru.pop() : VR.call(Ru, yu, 1), !0)
    }, IR.prototype.get = function(uu) {
      var Ru = this.__data__,
        yu = tR(Ru, uu);
      return yu < 0 ? void 0 : Ru[yu][1]
    }, IR.prototype.has = function(uu) {
      return tR(this.__data__, uu) > -1
    }, IR.prototype.set = function(uu, Ru) {
      var yu = this.__data__,
        Eu = tR(yu, uu);
      return Eu < 0 ? yu.push([uu, Ru]) : yu[Eu][1] = Ru, this
    }, GR.prototype.clear = function() {
      this.__data__ = {
        hash: new MR,
        map: new(pR || IR),
        string: new MR
      }
    }, GR.prototype.delete = function(uu) {
      return zR(this, uu).delete(uu)
    }, GR.prototype.get = function(uu) {
      return zR(this, uu).get(uu)
    }, GR.prototype.has = function(uu) {
      return zR(this, uu).has(uu)
    }, GR.prototype.set = function(uu, Ru) {
      return zR(this, uu).set(uu, Ru), this
    }, UR.prototype.clear = function() {
      this.__data__ = new IR
    }, UR.prototype.delete = function(uu) {
      return this.__data__.delete(uu)
    }, UR.prototype.get = function(uu) {
      return this.__data__.get(uu)
    }, UR.prototype.has = function(uu) {
      return this.__data__.has(uu)
    }, UR.prototype.set = function(uu, Ru) {
      var yu = this.__data__;
      if (yu instanceof IR) {
        var Eu = yu.__data__;
        if (!pR || Eu.length < 199) return Eu.push([uu, Ru]), this;
        yu = this.__data__ = new GR(Eu)
      }
      return yu.set(uu, Ru), this
    };
    var wR = rR ? Yu(rR, Object) : function() {
        return []
      },
      ZR = function(uu) {
        return yR.call(uu)
      };

    function hR(uu, Ru) {
      return !!(Ru = null == Ru ? Ku : Ru) && ("number" == typeof uu || su.test(uu)) && uu > -1 && uu % 1 == 0 && uu < Ru
    }

    function PR(uu) {
      var Ru = uu && uu.constructor;
      return uu === ("function" == typeof Ru && Ru.prototype || vu)
    }

    function iR(uu) {
      if (null != uu) {
        try {
          return uR.call(uu)
        } catch (Ru) {}
        try {
          return uu + ""
        } catch (Ru) {}
      }
      return ""
    }

    function YR(uu, Ru) {
      return uu === Ru || uu !== uu && Ru !== Ru
    }(SR && ZR(new SR(new ArrayBuffer(1))) != du || pR && ZR(new pR) != Vu || TR && ZR(TR.resolve()) != xu || WR && ZR(new WR) != pu || jR && ZR(new jR) != ju) && (ZR = function(uu) {
      var Ru = yR.call(uu),
        yu = Ru == Bu ? uu.constructor : void 0,
        Eu = yu ? iR(yu) : void 0;
      if (Eu) switch (Eu) {
        case dR:
          return du;
        case bR:
          return Vu;
        case CR:
          return xu;
        case kR:
          return pu;
        case eR:
          return ju
      }
      return Ru
    });
    var oR = Array.isArray;

    function qR(uu) {
      return null != uu && function(uu) {
        return "number" == typeof uu && uu > -1 && uu % 1 == 0 && uu <= Ku
      }(uu.length) && !vR(uu)
    }
    var OR = BR || function() {
      return !1
    };

    function vR(uu) {
      var Ru = aR(uu) ? yR.call(uu) : "";
      return Ru == Nu || Ru == Xu
    }

    function aR(uu) {
      var Ru = typeof uu;
      return !!uu && ("object" == Ru || "function" == Ru)
    }

    function fR(uu) {
      return qR(uu) ? nR(uu) : function(uu) {
        if (!PR(uu)) return xR(uu);
        var Ru = [];
        for (var yu in Object(uu)) RR.call(uu, yu) && "constructor" != yu && Ru.push(yu);
        return Ru
      }(uu)
    }
    uu.exports = function(uu) {
      return lR(uu, !0, !0)
    }
  },
  37467: (uu, Ru, yu) => {
    var Eu = yu(37476),
      Ku = yu(37481),
      Qu = "undefined" !== typeof Float64Array;

    function mu(uu, Ru) {
      return uu[0] - Ru[0]
    }

    function Ju() {
      var uu, Ru = this.stride,
        yu = new Array(Ru.length);
      for (uu = 0; uu < yu.length; ++uu) yu[uu] = [Math.abs(Ru[uu]), uu];
      yu.sort(mu);
      var Eu = new Array(yu.length);
      for (uu = 0; uu < Eu.length; ++uu) Eu[uu] = yu[uu][1];
      return Eu
    }

    function Nu(uu, Ru) {
      var yu = ["View", Ru, "d", uu].join("");
      Ru < 0 && (yu = "View_Nil" + uu);
      var Ku = "generic" === uu;
      if (-1 === Ru) {
        var Qu = "function " + yu + "(a){this.data=a;};var proto=" + yu + ".prototype;proto.dtype='" + uu + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + yu + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + yu + "(a){return new " + yu + "(a);}";
        return new Function(Qu)()
      }
      if (0 === Ru) {
        Qu = "function " + yu + "(a,d) {this.data = a;this.offset = d};var proto=" + yu + ".prototype;proto.dtype='" + uu + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + yu + "_copy() {return new " + yu + "(this.data,this.offset)};proto.pick=function " + yu + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + yu + "_get(){return " + (Ku ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + yu + "_set(v){return " + (Ku ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + yu + "(a,b,c,d){return new " + yu + "(a,d)}";
        return new Function("TrivialArray", Qu)(Xu[uu][0])
      }
      Qu = ["'use strict'"];
      var mu = Eu(Ru),
        Nu = mu.map((function(uu) {
          return "i" + uu
        })),
        Vu = "this.offset+" + mu.map((function(uu) {
          return "this.stride[" + uu + "]*i" + uu
        })).join("+"),
        ru = mu.map((function(uu) {
          return "b" + uu
        })).join(","),
        Bu = mu.map((function(uu) {
          return "c" + uu
        })).join(",");
      Qu.push("function " + yu + "(a," + ru + "," + Bu + ",d){this.data=a", "this.shape=[" + ru + "]", "this.stride=[" + Bu + "]", "this.offset=d|0}", "var proto=" + yu + ".prototype", "proto.dtype='" + uu + "'", "proto.dimension=" + Ru), Qu.push("Object.defineProperty(proto,'size',{get:function " + yu + "_size(){return " + mu.map((function(uu) {
        return "this.shape[" + uu + "]"
      })).join("*"), "}})"), 1 === Ru ? Qu.push("proto.order=[0]") : (Qu.push("Object.defineProperty(proto,'order',{get:"), Ru < 4 ? (Qu.push("function " + yu + "_order(){"), 2 === Ru ? Qu.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === Ru && Qu.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : Qu.push("ORDER})")), Qu.push("proto.set=function " + yu + "_set(" + Nu.join(",") + ",v){"), Ku ? Qu.push("return this.data.set(" + Vu + ",v)}") : Qu.push("return this.data[" + Vu + "]=v}"), Qu.push("proto.get=function " + yu + "_get(" + Nu.join(",") + "){"), Ku ? Qu.push("return this.data.get(" + Vu + ")}") : Qu.push("return this.data[" + Vu + "]}"), Qu.push("proto.index=function " + yu + "_index(", Nu.join(), "){return " + Vu + "}"), Qu.push("proto.hi=function " + yu + "_hi(" + Nu.join(",") + "){return new " + yu + "(this.data," + mu.map((function(uu) {
        return ["(typeof i", uu, "!=='number'||i", uu, "<0)?this.shape[", uu, "]:i", uu, "|0"].join("")
      })).join(",") + "," + mu.map((function(uu) {
        return "this.stride[" + uu + "]"
      })).join(",") + ",this.offset)}");
      var xu = mu.map((function(uu) {
          return "a" + uu + "=this.shape[" + uu + "]"
        })),
        Su = mu.map((function(uu) {
          return "c" + uu + "=this.stride[" + uu + "]"
        }));
      Qu.push("proto.lo=function " + yu + "_lo(" + Nu.join(",") + "){var b=this.offset,d=0," + xu.join(",") + "," + Su.join(","));
      for (var pu = 0; pu < Ru; ++pu) Qu.push("if(typeof i" + pu + "==='number'&&i" + pu + ">=0){d=i" + pu + "|0;b+=c" + pu + "*d;a" + pu + "-=d}");
      Qu.push("return new " + yu + "(this.data," + mu.map((function(uu) {
        return "a" + uu
      })).join(",") + "," + mu.map((function(uu) {
        return "c" + uu
      })).join(",") + ",b)}"), Qu.push("proto.step=function " + yu + "_step(" + Nu.join(",") + "){var " + mu.map((function(uu) {
        return "a" + uu + "=this.shape[" + uu + "]"
      })).join(",") + "," + mu.map((function(uu) {
        return "b" + uu + "=this.stride[" + uu + "]"
      })).join(",") + ",c=this.offset,d=0,ceil=Math.ceil");
      for (pu = 0; pu < Ru; ++pu) Qu.push("if(typeof i" + pu + "==='number'){d=i" + pu + "|0;if(d<0){c+=b" + pu + "*(a" + pu + "-1);a" + pu + "=ceil(-a" + pu + "/d)}else{a" + pu + "=ceil(a" + pu + "/d)}b" + pu + "*=d}");
      Qu.push("return new " + yu + "(this.data," + mu.map((function(uu) {
        return "a" + uu
      })).join(",") + "," + mu.map((function(uu) {
        return "b" + uu
      })).join(",") + ",c)}");
      var Tu = new Array(Ru),
        Wu = new Array(Ru);
      for (pu = 0; pu < Ru; ++pu) Tu[pu] = "a[i" + pu + "]", Wu[pu] = "b[i" + pu + "]";
      Qu.push("proto.transpose=function " + yu + "_transpose(" + Nu + "){" + Nu.map((function(uu, Ru) {
        return uu + "=(" + uu + "===undefined?" + Ru + ":" + uu + "|0)"
      })).join(";"), "var a=this.shape,b=this.stride;return new " + yu + "(this.data," + Tu.join(",") + "," + Wu.join(",") + ",this.offset)}"), Qu.push("proto.pick=function " + yu + "_pick(" + Nu + "){var a=[],b=[],c=this.offset");
      for (pu = 0; pu < Ru; ++pu) Qu.push("if(typeof i" + pu + "==='number'&&i" + pu + ">=0){c=(c+this.stride[" + pu + "]*i" + pu + ")|0}else{a.push(this.shape[" + pu + "]);b.push(this.stride[" + pu + "])}");
      return Qu.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), Qu.push("return function construct_" + yu + "(data,shape,stride,offset){return new " + yu + "(data," + mu.map((function(uu) {
        return "shape[" + uu + "]"
      })).join(",") + "," + mu.map((function(uu) {
        return "stride[" + uu + "]"
      })).join(",") + ",offset)}"), new Function("CTOR_LIST", "ORDER", Qu.join("\n"))(Xu[uu], Ju)
    }
    var Xu = {
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
    uu.exports = function(uu, Ru, yu, Eu) {
      if (void 0 === uu) return (0, Xu.array[0])([]);
      "number" === typeof uu && (uu = [uu]), void 0 === Ru && (Ru = [uu.length]);
      var mu = Ru.length;
      if (void 0 === yu) {
        yu = new Array(mu);
        for (var Ju = mu - 1, Vu = 1; Ju >= 0; --Ju) yu[Ju] = Vu, Vu *= Ru[Ju]
      }
      if (void 0 === Eu) {
        Eu = 0;
        for (Ju = 0; Ju < mu; ++Ju) yu[Ju] < 0 && (Eu -= (Ru[Ju] - 1) * yu[Ju])
      }
      for (var ru = function(uu) {
          if (Ku(uu)) return "buffer";
          if (Qu) switch (Object.prototype.toString.call(uu)) {
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
          return Array.isArray(uu) ? "array" : "generic"
        }(uu), Bu = Xu[ru]; Bu.length <= mu + 1;) Bu.push(Nu(ru, Bu.length - 1));
      return (0, Bu[mu + 1])(uu, Ru, yu, Eu)
    }
  },
  38215: uu => {
    function Ru(uu, Ru, yu) {
      for (var Eu = uu.length, Ku = -1 / 0, Qu = 1 / 0, mu = 0; mu < Eu; mu++) {
        var Ju = (yu[0][mu] - uu[mu]) / Ru[mu],
          Nu = (yu[1][mu] - uu[mu]) / Ru[mu];
        if (Ju > Nu) {
          var Xu = Ju;
          Ju = Nu, Nu = Xu
        }
        if (Nu < Ku || Ju > Qu) return 1 / 0;
        Ju > Ku && (Ku = Ju), Nu < Qu && (Qu = Nu)
      }
      return Ku > Qu ? 1 / 0 : Ku
    }
    uu.exports = function(uu, yu, Eu, Ku) {
      var Qu = Ru(yu, Eu, Ku);
      if (Qu === 1 / 0) uu = null;
      else {
        uu = uu || [];
        for (var mu = 0; mu < yu.length; mu++) uu[mu] = yu[mu] + Eu[mu] * Qu
      }
      return uu
    }, uu.exports.distance = Ru
  },
  37493: (uu, Ru, yu) => {
    var Eu = yu(37499);

    function Ku(uu) {
      for (var Ru, yu, Ku = 0, Qu = uu.length, mu = 0; mu < uu.length;) {
        for (Ru = uu[mu], yu = 0; mu < Qu && uu[mu] === Ru;) ++mu, ++yu;
        Ku += Eu.log2(yu) / 7 | 0, Ku += Eu.log2(Ru >>> 0) / 7 | 0, Ku += 2
      }
      return Ku
    }
    Ru.size = Ku, Ru.encode = function(uu, Ru) {
      Ru || (Ru = new Uint8Array(Ku(uu)));
      for (var yu, Eu, Qu = 0, mu = Ru.length, Ju = 0; Ju < uu.length;) {
        for (yu = uu[Ju], Eu = 0; Ju < uu.length && uu[Ju] === yu;) ++Ju, ++Eu;
        for (; Qu < mu && Eu >= 128;) Ru[Qu++] = 128 + (127 & Eu), Eu >>>= 7;
        if (Qu >= mu) throw new Error("RLE buffer overflow");
        for (Ru[Qu++] = Eu, yu >>>= 0; Qu < mu && yu >= 128;) Ru[Qu++] = 128 + (127 & yu), yu >>>= 7;
        if (Qu >= mu) throw new Error("RLE buffer overflow");
        Ru[Qu++] = yu
      }
      return Ru
    }, Ru.decode = function(uu, Ru) {
      for (var yu, Eu, Ku, Qu, mu = Ru.length, Ju = uu.length, Nu = 0, Xu = 0; Xu < Ju;) {
        for (yu = 0, Eu = 0; Xu < Ju && uu[Xu] >= 128;) yu += (127 & uu[Xu++]) << Eu, Eu += 7;
        if (yu += uu[Xu++] << Eu, Xu >= Ju) throw new Error("RLE buffer underrun");
        if (Nu + yu > mu) throw new Error("Chunk buffer overflow");
        for (Ku = 0, Eu = 0; Xu < Ju && uu[Xu] >= 128;) Ku += (127 & uu[Xu++]) << Eu, Eu += 7;
        if (Xu >= Ju) throw new Error("RLE buffer underrun");
        for (Ku += uu[Xu++] << Eu, Qu = 0; Qu < yu; ++Qu) Ru[Nu++] = Ku
      }
      return Ru
    }
  },
  37499: (uu, Ru) => {
    function yu(uu) {
      var Ru = 32;
      return (uu &= -uu) && Ru--, 65535 & uu && (Ru -= 16), 16711935 & uu && (Ru -= 8), 252645135 & uu && (Ru -= 4), 858993459 & uu && (Ru -= 2), 1431655765 & uu && (Ru -= 1), Ru
    }
    Ru.INT_BITS = 32, Ru.INT_MAX = 2147483647, Ru.INT_MIN = -1 << 31, Ru.sign = function(uu) {
      return (uu > 0) - (uu < 0)
    }, Ru.abs = function(uu) {
      var Ru = uu >> 31;
      return (uu ^ Ru) - Ru
    }, Ru.min = function(uu, Ru) {
      return Ru ^ (uu ^ Ru) & -(uu < Ru)
    }, Ru.max = function(uu, Ru) {
      return uu ^ (uu ^ Ru) & -(uu < Ru)
    }, Ru.isPow2 = function(uu) {
      return !(uu & uu - 1) && !!uu
    }, Ru.log2 = function(uu) {
      var Ru, yu;
      return Ru = (uu > 65535) << 4, Ru |= yu = ((uu >>>= Ru) > 255) << 3, Ru |= yu = ((uu >>>= yu) > 15) << 2, (Ru |= yu = ((uu >>>= yu) > 3) << 1) | (uu >>>= yu) >> 1
    }, Ru.log10 = function(uu) {
      return uu >= 1e9 ? 9 : uu >= 1e8 ? 8 : uu >= 1e7 ? 7 : uu >= 1e6 ? 6 : uu >= 1e5 ? 5 : uu >= 1e4 ? 4 : uu >= 1e3 ? 3 : uu >= 100 ? 2 : uu >= 10 ? 1 : 0
    }, Ru.popCount = function(uu) {
      return 16843009 * ((uu = (858993459 & (uu -= uu >>> 1 & 1431655765)) + (uu >>> 2 & 858993459)) + (uu >>> 4) & 252645135) >>> 24
    }, Ru.countTrailingZeros = yu, Ru.nextPow2 = function(uu) {
      return uu += 0 === uu, --uu, uu |= uu >>> 1, uu |= uu >>> 2, uu |= uu >>> 4, uu |= uu >>> 8, (uu |= uu >>> 16) + 1
    }, Ru.prevPow2 = function(uu) {
      return uu |= uu >>> 1, uu |= uu >>> 2, uu |= uu >>> 4, uu |= uu >>> 8, (uu |= uu >>> 16) - (uu >>> 1)
    }, Ru.parity = function(uu) {
      return uu ^= uu >>> 16, uu ^= uu >>> 8, uu ^= uu >>> 4, 27030 >>> (uu &= 15) & 1
    };
    var Eu = new Array(256);
    ! function(uu) {
      for (var Ru = 0; Ru < 256; ++Ru) {
        var yu = Ru,
          Eu = Ru,
          Ku = 7;
        for (yu >>>= 1; yu; yu >>>= 1) Eu <<= 1, Eu |= 1 & yu, --Ku;
        uu[Ru] = Eu << Ku & 255
      }
    }(Eu), Ru.reverse = function(uu) {
      return Eu[255 & uu] << 24 | Eu[uu >>> 8 & 255] << 16 | Eu[uu >>> 16 & 255] << 8 | Eu[uu >>> 24 & 255]
    }, Ru.interleave2 = function(uu, Ru) {
      return (uu = 1431655765 & ((uu = 858993459 & ((uu = 252645135 & ((uu = 16711935 & ((uu &= 65535) | uu << 8)) | uu << 4)) | uu << 2)) | uu << 1)) | (Ru = 1431655765 & ((Ru = 858993459 & ((Ru = 252645135 & ((Ru = 16711935 & ((Ru &= 65535) | Ru << 8)) | Ru << 4)) | Ru << 2)) | Ru << 1)) << 1
    }, Ru.deinterleave2 = function(uu, Ru) {
      return (uu = 65535 & ((uu = 16711935 & ((uu = 252645135 & ((uu = 858993459 & ((uu = uu >>> Ru & 1431655765) | uu >>> 1)) | uu >>> 2)) | uu >>> 4)) | uu >>> 16)) << 16 >> 16
    }, Ru.interleave3 = function(uu, Ru, yu) {
      return uu = 1227133513 & ((uu = 3272356035 & ((uu = 251719695 & ((uu = 4278190335 & ((uu &= 1023) | uu << 16)) | uu << 8)) | uu << 4)) | uu << 2), (uu |= (Ru = 1227133513 & ((Ru = 3272356035 & ((Ru = 251719695 & ((Ru = 4278190335 & ((Ru &= 1023) | Ru << 16)) | Ru << 8)) | Ru << 4)) | Ru << 2)) << 1) | (yu = 1227133513 & ((yu = 3272356035 & ((yu = 251719695 & ((yu = 4278190335 & ((yu &= 1023) | yu << 16)) | yu << 8)) | yu << 4)) | yu << 2)) << 2
    }, Ru.deinterleave3 = function(uu, Ru) {
      return (uu = 1023 & ((uu = 4278190335 & ((uu = 251719695 & ((uu = 3272356035 & ((uu = uu >>> Ru & 1227133513) | uu >>> 2)) | uu >>> 4)) | uu >>> 8)) | uu >>> 16)) << 22 >> 22
    }, Ru.nextCombination = function(uu) {
      var Ru = uu | uu - 1;
      return Ru + 1 | (~Ru & -~Ru) - 1 >>> yu(uu) + 1
    }
  },
  36986: (uu, Ru, yu) => {
    yu.d(Ru, {
      Color3: () => Eu.d,
      c: () => Eu.h
    });
    var Eu = yu(36991);
    (0, Eu.j)()
  },
  37525: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku
    });
    var Eu = yu(37528);
    class Ku {
      static GetPlanes(uu) {
        const Ru = [];
        for (let yu = 0; yu < 6; yu++) Ru.push(new Eu.d(0, 0, 0, 0));
        return Ku.GetPlanesToRef(uu, Ru), Ru
      }
      static GetNearPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] + yu[2], Ru.normal.y = yu[7] + yu[6], Ru.normal.z = yu[11] + yu[10], Ru.d = yu[15] + yu[14], Ru.normalize()
      }
      static GetFarPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] - yu[2], Ru.normal.y = yu[7] - yu[6], Ru.normal.z = yu[11] - yu[10], Ru.d = yu[15] - yu[14], Ru.normalize()
      }
      static GetLeftPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] + yu[0], Ru.normal.y = yu[7] + yu[4], Ru.normal.z = yu[11] + yu[8], Ru.d = yu[15] + yu[12], Ru.normalize()
      }
      static GetRightPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] - yu[0], Ru.normal.y = yu[7] - yu[4], Ru.normal.z = yu[11] - yu[8], Ru.d = yu[15] - yu[12], Ru.normalize()
      }
      static GetTopPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] - yu[1], Ru.normal.y = yu[7] - yu[5], Ru.normal.z = yu[11] - yu[9], Ru.d = yu[15] - yu[13], Ru.normalize()
      }
      static GetBottomPlaneToRef(uu, Ru) {
        const yu = uu.m;
        Ru.normal.x = yu[3] + yu[1], Ru.normal.y = yu[7] + yu[5], Ru.normal.z = yu[11] + yu[9], Ru.d = yu[15] + yu[13], Ru.normalize()
      }
      static GetPlanesToRef(uu, Ru) {
        Ku.GetNearPlaneToRef(uu, Ru[0]), Ku.GetFarPlaneToRef(uu, Ru[1]), Ku.GetLeftPlaneToRef(uu, Ru[2]), Ku.GetRightPlaneToRef(uu, Ru[3]), Ku.GetTopPlaneToRef(uu, Ru[4]), Ku.GetBottomPlaneToRef(uu, Ru[5])
      }
      static IsPointInFrustum(uu, Ru) {
        for (let yu = 0; yu < 6; yu++)
          if (Ru[yu].dotCoordinate(uu) < 0) return !1;
        return !0
      }
    }
  },
  37528: (uu, Ru, yu) => {
    yu.d(Ru, {
      d: () => Ku
    });
    var Eu = yu(36830);
    class Ku {
      constructor(uu, Ru, yu, Ku) {
        this.normal = new Eu.p(uu, Ru, yu), this.d = Ku
      }
      AEu() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Ku(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let Ru = 0;
        return 0 !== uu && (Ru = 1 / uu), this.normal.x *= Ru, this.normal.y *= Ru, this.normal.z *= Ru, this.d *= Ru, this
      }
      transform(uu) {
        const Ru = Ku._TmpMatrix;
        uu.invertToRef(Ru);
        const yu = Ru.m,
          Eu = this.normal.x,
          Qu = this.normal.y,
          mu = this.normal.z,
          Ju = this.d,
          Nu = Eu * yu[0] + Qu * yu[1] + mu * yu[2] + Ju * yu[3],
          Xu = Eu * yu[4] + Qu * yu[5] + mu * yu[6] + Ju * yu[7],
          Vu = Eu * yu[8] + Qu * yu[9] + mu * yu[10] + Ju * yu[11],
          ru = Eu * yu[12] + Qu * yu[13] + mu * yu[14] + Ju * yu[15];
        return new Ku(Nu, Xu, Vu, ru)
      }
      dotCoordinate(uu) {
        return this.normal.x * uu.x + this.normal.y * uu.y + this.normal.z * uu.z + this.d
      }
      copyFromPoints(uu, Ru, yu) {
        const Eu = Ru.x - uu.x,
          Ku = Ru.y - uu.y,
          Qu = Ru.z - uu.z,
          mu = yu.x - uu.x,
          Ju = yu.y - uu.y,
          Nu = yu.z - uu.z,
          Xu = Ku * Nu - Qu * Ju,
          Vu = Qu * mu - Eu * Nu,
          ru = Eu * Ju - Ku * mu,
          Bu = Math.sqrt(Xu * Xu + Vu * Vu + ru * ru);
        let xu;
        return xu = 0 !== Bu ? 1 / Bu : 0, this.normal.x = Xu * xu, this.normal.y = Vu * xu, this.normal.z = ru * xu, this.d = -(this.normal.x * uu.x + this.normal.y * uu.y + this.normal.z * uu.z), this
      }
      isFrontFacingTo(uu, Ru) {
        return Eu.p.Dot(this.normal, uu) <= Ru
      }
      signedDistanceTo(uu) {
        return Eu.p.Dot(uu, this.normal) + this.d
      }
      static FromArray(uu) {
        return new Ku(uu[0], uu[1], uu[2], uu[3])
      }
      static FromPoints(uu, Ru, yu) {
        const Eu = new Ku(0, 0, 0, 0);
        return Eu.copyFromPoints(uu, Ru, yu), Eu
      }
      static FromPositionAndNormal(uu, Ru) {
        const yu = new Ku(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(uu, Ru, yu)
      }
      static FromPositionAndNormalToRef(uu, Ru, yu) {
        return yu.normal.Oyu(Ru), yu.normal.normalize(), yu.d = -uu.dot(yu.normal), yu
      }
      static SignedDistanceToPlaneFromPositionAndNormal(uu, Ru, yu) {
        const Ku = -(Ru.x * uu.x + Ru.y * uu.y + Ru.z * uu.z);
        return Eu.p.Dot(yu, Ru) + Ku
      }
    }
    Ku._TmpMatrix = Eu.d.Identity()
  },
  36828: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      Matrix: () => Eu.d,
      Quaternion: () => Eu.f,
      RegisterMathVector: () => Eu.j,
      TmpVectors: () => Eu.m,
      Vector2: () => Eu.n,
      MS: () => Eu.p,
      Vector4: () => Eu.r
    });
    var Eu = yu(36830);
    (0, Eu.j)()
  },
  37842: (uu, Ru, yu) => {
    yu.d(Ru, {
      c: () => Eu
    });
    class Eu {
      constructor(uu, Ru, yu, Eu) {
        this.x = uu, this.y = Ru, this.width = yu, this.height = Eu
      }
      toGlobal(uu, Ru) {
        return new Eu(this.x * uu, this.y * Ru, this.width * uu, this.height * Ru)
      }
      toGlobalToRef(uu, Ru, yu) {
        return yu.x = this.x * uu, yu.y = this.y * Ru, yu.width = this.width * uu, yu.height = this.height * Ru, this
      }
      clone() {
        return new Eu(this.x, this.y, this.width, this.height)
      }
    }
  },
  37665: (uu, Ru, yu) => {
    function Eu() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (uu => {
        const Ru = 16 * Math.random() | 0;
        return ("x" === uu ? Ru : 3 & Ru | 8).toString(16)
      }))
    }
    yu.d(Ru, {
      b: () => Eu
    })
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);