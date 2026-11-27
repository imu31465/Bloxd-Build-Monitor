/*! For license information please see u88b9b.255.027c5759.chunk.js.LICENSE.txt */
export const id = 255;
export const ids = [255, 262];
export const modules = {
  39102: ee => {
    ee.exports = function(ee) {
      return null != ee && null != ee.constructor && "function" === typeof ee.constructor.isBuffer && ee.constructor.isBuffer(ee)
    }
  },
  39087: (ee, ie, He) => {
    var ye = He(39089),
      be = He(39095),
      Me = He(39102);
    He.g.__TYPEDARRAY_POOL || (He.g.__TYPEDARRAY_POOL = {
      UINT8: be([32, 0]),
      UINT16: be([32, 0]),
      UINT32: be([32, 0]),
      INT8: be([32, 0]),
      INT16: be([32, 0]),
      INT32: be([32, 0]),
      FLOAT: be([32, 0]),
      DOUBLE: be([32, 0]),
      DATA: be([32, 0]),
      UINT8C: be([32, 0]),
      BUFFER: be([32, 0])
    });
    var Ke = "undefined" !== typeof Uint8ClampedArray,
      Ue = He.g.__TYPEDARRAY_POOL;
    Ue.UINT8C || (Ue.UINT8C = be([32, 0])), Ue.BUFFER || (Ue.BUFFER = be([32, 0]));
    var Fe = Ue.DATA,
      Je = Ue.BUFFER;

    function oe(ee) {
      if (ee) {
        var ie = ee.length || ee.byteLength,
          He = ye.log2(ie);
        Fe[He].push(ee)
      }
    }

    function Re(ee) {
      ee = ye.nextPow2(ee);
      var ie = ye.log2(ee),
        He = Fe[ie];
      return He.length > 0 ? He.pop() : new ArrayBuffer(ee)
    }

    function ke(ee) {
      return new Uint8Array(Re(ee), 0, ee)
    }

    function qe(ee) {
      return new Uint16Array(Re(2 * ee), 0, ee)
    }

    function fe(ee) {
      return new Uint32Array(Re(4 * ee), 0, ee)
    }

    function Te(ee) {
      return new Int8Array(Re(ee), 0, ee)
    }

    function pe(ee) {
      return new Int16Array(Re(2 * ee), 0, ee)
    }

    function Xe(ee) {
      return new Int32Array(Re(4 * ee), 0, ee)
    }

    function ze(ee) {
      return new Float32Array(Re(4 * ee), 0, ee)
    }

    function Be(ee) {
      return new Float64Array(Re(8 * ee), 0, ee)
    }

    function Ee(ee) {
      return Ke ? new Uint8ClampedArray(Re(ee), 0, ee) : ke(ee)
    }

    function ge(ee) {
      return new DataView(Re(ee), 0, ee)
    }
    ie.free = function(ee) {
      if (Me(ee)) Je[ye.log2(ee.length)].push(ee);
      else {
        if ("[object ArrayBuffer]" !== Object.prototype.toString.call(ee) && (ee = ee.buffer), !ee) return;
        var ie = ee.length || ee.byteLength,
          He = 0 | ye.log2(ie);
        Fe[He].push(ee)
      }
    }, ie.freeUint8 = ie.freeUint16 = ie.freeUint32 = ie.freeInt8 = ie.freeInt16 = ie.freeInt32 = ie.freeFloat32 = ie.freeFloat = ie.freeFloat64 = ie.freeDouble = ie.freeUint8Clamped = ie.freeDataView = function(ee) {
      oe(ee.buffer)
    }, ie.freeArrayBuffer = oe, ie.freeBuffer = function(ee) {
      Je[ye.log2(ee.length)].push(ee)
    }, ie.malloc = function(ee, ie) {
      if (void 0 === ie || "arraybuffer" === ie) return Re(ee);
      switch (ie) {
        case "uint8":
          return ke(ee);
        case "uint16":
          return qe(ee);
        case "uint32":
          return fe(ee);
        case "int8":
          return Te(ee);
        case "int16":
          return pe(ee);
        case "int32":
          return Xe(ee);
        case "float":
        case "float32":
          return ze(ee);
        case "double":
        case "float64":
          return Be(ee);
        case "uint8_clamped":
          return Ee(ee);
        case "buffer":
          throw "Buffer not supported";
        case "data":
        case "dataview":
          return ge(ee);
        default:
          return null
      }
      return null
    }, ie.mallocArrayBuffer = Re, ie.mallocUint8 = ke, ie.mallocUint16 = qe, ie.mallocUint32 = fe, ie.mallocInt8 = Te, ie.mallocInt16 = pe, ie.mallocInt32 = Xe, ie.mallocFloat32 = ie.mallocFloat = ze, ie.mallocFloat64 = ie.mallocDouble = Be, ie.mallocUint8Clamped = Ee, ie.mallocDataView = ge, ie.clearCache = function() {
      for (var ee = 0; ee < 32; ++ee) Ue.UINT8[ee].length = 0, Ue.UINT16[ee].length = 0, Ue.UINT32[ee].length = 0, Ue.INT8[ee].length = 0, Ue.INT16[ee].length = 0, Ue.INT32[ee].length = 0, Ue.FLOAT[ee].length = 0, Ue.DOUBLE[ee].length = 0, Ue.UINT8C[ee].length = 0, Fe[ee].length = 0, Je[ee].length = 0
    }
  },
  39089: (ee, ie) => {
    function He(ee) {
      var ie = 32;
      return (ee &= -ee) && ie--, 65535 & ee && (ie -= 16), 16711935 & ee && (ie -= 8), 252645135 & ee && (ie -= 4), 858993459 & ee && (ie -= 2), 1431655765 & ee && (ie -= 1), ie
    }
    ie.INT_BITS = 32, ie.INT_MAX = 2147483647, ie.INT_MIN = -1 << 31, ie.sign = function(ee) {
      return (ee > 0) - (ee < 0)
    }, ie.abs = function(ee) {
      var ie = ee >> 31;
      return (ee ^ ie) - ie
    }, ie.min = function(ee, ie) {
      return ie ^ (ee ^ ie) & -(ee < ie)
    }, ie.max = function(ee, ie) {
      return ee ^ (ee ^ ie) & -(ee < ie)
    }, ie.isPow2 = function(ee) {
      return !(ee & ee - 1) && !!ee
    }, ie.log2 = function(ee) {
      var ie, He;
      return ie = (ee > 65535) << 4, ie |= He = ((ee >>>= ie) > 255) << 3, ie |= He = ((ee >>>= He) > 15) << 2, (ie |= He = ((ee >>>= He) > 3) << 1) | (ee >>>= He) >> 1
    }, ie.log10 = function(ee) {
      return ee >= 1e9 ? 9 : ee >= 1e8 ? 8 : ee >= 1e7 ? 7 : ee >= 1e6 ? 6 : ee >= 1e5 ? 5 : ee >= 1e4 ? 4 : ee >= 1e3 ? 3 : ee >= 100 ? 2 : ee >= 10 ? 1 : 0
    }, ie.popCount = function(ee) {
      return 16843009 * ((ee = (858993459 & (ee -= ee >>> 1 & 1431655765)) + (ee >>> 2 & 858993459)) + (ee >>> 4) & 252645135) >>> 24
    }, ie.countTrailingZeros = He, ie.nextPow2 = function(ee) {
      return ee += 0 === ee, --ee, ee |= ee >>> 1, ee |= ee >>> 2, ee |= ee >>> 4, ee |= ee >>> 8, (ee |= ee >>> 16) + 1
    }, ie.prevPow2 = function(ee) {
      return ee |= ee >>> 1, ee |= ee >>> 2, ee |= ee >>> 4, ee |= ee >>> 8, (ee |= ee >>> 16) - (ee >>> 1)
    }, ie.parity = function(ee) {
      return ee ^= ee >>> 16, ee ^= ee >>> 8, ee ^= ee >>> 4, 27030 >>> (ee &= 15) & 1
    };
    var ye = new Array(256);
    ! function(ee) {
      for (var ie = 0; ie < 256; ++ie) {
        var He = ie,
          ye = ie,
          be = 7;
        for (He >>>= 1; He; He >>>= 1) ye <<= 1, ye |= 1 & He, --be;
        ee[ie] = ye << be & 255
      }
    }(ye), ie.reverse = function(ee) {
      return ye[255 & ee] << 24 | ye[ee >>> 8 & 255] << 16 | ye[ee >>> 16 & 255] << 8 | ye[ee >>> 24 & 255]
    }, ie.interleave2 = function(ee, ie) {
      return (ee = 1431655765 & ((ee = 858993459 & ((ee = 252645135 & ((ee = 16711935 & ((ee &= 65535) | ee << 8)) | ee << 4)) | ee << 2)) | ee << 1)) | (ie = 1431655765 & ((ie = 858993459 & ((ie = 252645135 & ((ie = 16711935 & ((ie &= 65535) | ie << 8)) | ie << 4)) | ie << 2)) | ie << 1)) << 1
    }, ie.deinterleave2 = function(ee, ie) {
      return (ee = 65535 & ((ee = 16711935 & ((ee = 252645135 & ((ee = 858993459 & ((ee = ee >>> ie & 1431655765) | ee >>> 1)) | ee >>> 2)) | ee >>> 4)) | ee >>> 16)) << 16 >> 16
    }, ie.interleave3 = function(ee, ie, He) {
      return ee = 1227133513 & ((ee = 3272356035 & ((ee = 251719695 & ((ee = 4278190335 & ((ee &= 1023) | ee << 16)) | ee << 8)) | ee << 4)) | ee << 2), (ee |= (ie = 1227133513 & ((ie = 3272356035 & ((ie = 251719695 & ((ie = 4278190335 & ((ie &= 1023) | ie << 16)) | ie << 8)) | ie << 4)) | ie << 2)) << 1) | (He = 1227133513 & ((He = 3272356035 & ((He = 251719695 & ((He = 4278190335 & ((He &= 1023) | He << 16)) | He << 8)) | He << 4)) | He << 2)) << 2
    }, ie.deinterleave3 = function(ee, ie) {
      return (ee = 1023 & ((ee = 4278190335 & ((ee = 251719695 & ((ee = 3272356035 & ((ee = ee >>> ie & 1227133513) | ee >>> 2)) | ee >>> 4)) | ee >>> 8)) | ee >>> 16)) << 22 >> 22
    }, ie.nextCombination = function(ee) {
      var ie = ee | ee - 1;
      return ie + 1 | (~ie & -~ie) - 1 >>> He(ee) + 1
    }
  },
  39079: (ee, ie, He) => {
    ee.exports = function(ee, ie, He) {
      switch (arguments.length) {
        case 1:
          return ye = [], Je(be = ee, be, oe, !0), ye;
        case 2:
          return "function" === typeof ie ? Je(ee, ee, ie, !0) : function(ee, ie) {
            return ye = [], Je(ee, ie, oe, !1), ye
          }(ee, ie);
        case 3:
          return Je(ee, ie, He, !1);
        default:
          throw new Error("box-intersect: Invalid arguments")
      }
      var be
    };
    var ye, be = He(39087),
      Me = He(39104),
      Ke = He(39112);

    function Ue(ee, ie) {
      for (var He = 0; He < ee; ++He)
        if (!(ie[He] <= ie[He + ee])) return !0;
      return !1
    }

    function Fe(ee, ie, He, ye) {
      for (var be = 0, Me = 0, Ke = 0, Fe = ee.length; Ke < Fe; ++Ke) {
        var Je = ee[Ke];
        if (!Ue(ie, Je)) {
          for (var oe = 0; oe < 2 * ie; ++oe) He[be++] = Je[oe];
          ye[Me++] = Ke
        }
      }
      return Me
    }

    function Je(ee, ie, He, ye) {
      var Ue = ee.length,
        Je = ie.length;
      if (!(Ue <= 0 || Je <= 0)) {
        var oe = ee[0].length >>> 1;
        if (!(oe <= 0)) {
          var Re, ke = be.mallocDouble(2 * oe * Ue),
            qe = be.mallocInt32(Ue);
          if ((Ue = Fe(ee, oe, ke, qe)) > 0) {
            if (1 === oe && ye) Me.init(Ue), Re = Me.sweepComplete(oe, He, 0, Ue, ke, qe, 0, Ue, ke, qe);
            else {
              var fe = be.mallocDouble(2 * oe * Je),
                Te = be.mallocInt32(Je);
              (Je = Fe(ie, oe, fe, Te)) > 0 && (Me.init(Ue + Je), Re = 1 === oe ? Me.sweepBipartite(oe, He, 0, Ue, ke, qe, 0, Je, fe, Te) : Ke(oe, He, ye, Ue, ke, qe, Je, fe, Te), be.free(fe), be.free(Te))
            }
            be.free(ke), be.free(qe)
          }
          return Re
        }
      }
    }

    function oe(ee, ie) {
      ye.push([ee, ie])
    }
  },
  39120: (ee, ie) => {
    var He = "d",
      ye = "ax",
      be = "fp",
      Me = "es",
      Ke = "rs",
      Ue = "re",
      Fe = "rb",
      Je = "bs",
      oe = "be",
      Re = "bb",
      ke = [He, ye, "vv", Ke, Ue, Fe, "ri", Je, oe, Re, "bi"];

    function qe(ee) {
      var ie = "bruteForce" + (ee ? "Full" : "Partial"),
        ye = [],
        Ke = ke.slice();
      ee || Ke.splice(3, 0, be);
      var Ue = ["function " + ie + "(" + Ke.join() + "){"];

      function Fe(ie, be) {
        var Ke = function(ee, ie, ye) {
          var be = "bruteForce" + (ee ? "Red" : "Blue") + (ie ? "Flip" : "") + (ye ? "Full" : ""),
            Ke = ["function ", be, "(", ke.join(), "){", "var ", Me, "=2*", He, ";"],
            Ue = "for(var i=rs,rp=es*rs;i<re;++i,rp+=es){var x0=rb[ax+rp],x1=rb[ax+rp+d],xi=ri[i];",
            Fe = "for(var j=bs,bp=es*bs;j<be;++j,bp+=es){var y0=bb[ax+bp]," + (ye ? "y1=bb[ax+bp+d]," : "") + "yi=bi[j];";
          return ee ? Ke.push(Ue, "Q", ":", Fe) : Ke.push(Fe, "Q", ":", Ue), ye ? Ke.push("if(y1<x0||x1<y0)continue;") : ie ? Ke.push("if(y0<=x0||x1<y0)continue;") : Ke.push("if(y0<x0||x1<y0)continue;"), Ke.push("for(var k=ax+1;k<d;++k){var r0=rb[k+rp],r1=rb[k+d+rp],b0=bb[k+bp],b1=bb[k+d+bp];if(r1<b0||b1<r0)continue Q;}var rv=vv("), ie ? Ke.push("yi,xi") : Ke.push("xi,yi"), Ke.push(");if(rv!==void 0)return rv;}}}"), {
            name: be,
            code: Ke.join("")
          }
        }(ie, be, ee);
        ye.push(Ke.code), Ue.push("return " + Ke.name + "(" + ke.join() + ");")
      }
      Ue.push("if(re-rs>be-bs){"), ee ? (Fe(!0, !1), Ue.push("}else{"), Fe(!1, !1)) : (Ue.push("if(fp){"), Fe(!0, !0), Ue.push("}else{"), Fe(!0, !1), Ue.push("}}else{if(fp){"), Fe(!1, !0), Ue.push("}else{"), Fe(!1, !1), Ue.push("}")), Ue.push("}}return " + ie);
      var Je = ye.join("") + Ue.join("");
      return new Function(Je)()
    }
    ie.partial = qe(!1), ie.full = qe(!0)
  },
  39112: (ee, ie, He) => {
    ee.exports = function(ee, ie, He, Me, oe, we, De, Pe, Ae) {
      ! function(ee, ie) {
        var He = 8 * be.log2(ie + 1) * (ee + 1) | 0,
          Me = be.nextPow2(Ee * He);
        Oe.length < Me && (ye.free(Oe), Oe = ye.mallocInt32(Me));
        var Ke = be.nextPow2(ge * He);
        de.length < Ke && (ye.free(de), de = ye.mallocDouble(Ke))
      }(ee, Me + De);
      var Ye, Ve = 0,
        ae = 2 * ee;
      We(Ve++, 0, 0, Me, 0, De, He ? 16 : 0, -1 / 0, 1 / 0), He || We(Ve++, 0, 0, De, 0, Me, 1, -1 / 0, 1 / 0);
      for (; Ve > 0;) {
        var ce = (Ve -= 1) * Ee,
          xe = Oe[ce],
          Le = Oe[ce + 1],
          Ce = Oe[ce + 2],
          ve = Oe[ce + 3],
          ue = Oe[ce + 4],
          me = Oe[ce + 5],
          le = Ve * ge,
          Se = de[le],
          ne = de[le + 1],
          je = 1 & me,
          se = !!(16 & me),
          Ie = oe,
          he = we,
          Ne = Pe,
          Ge = Ae;
        if (je && (Ie = Pe, he = Ae, Ne = oe, Ge = we), !(2 & me && Le >= (Ce = pe(ee, xe, Le, Ce, Ie, he, ne))) && !(4 & me && (Le = Xe(ee, xe, Le, Ce, Ie, he, Se)) >= Ce)) {
          var re = Ce - Le,
            Qe = ue - ve;
          if (se) {
            if (ee * re * (re + Qe) < qe) {
              if (void 0 !== (Ye = Fe.scanComplete(ee, xe, ie, Le, Ce, Ie, he, ve, ue, Ne, Ge))) return Ye;
              continue
            }
          } else {
            if (ee * Math.min(re, Qe) < Re) {
              if (void 0 !== (Ye = Ke(ee, xe, ie, je, Le, Ce, Ie, he, ve, ue, Ne, Ge))) return Ye;
              continue
            }
            if (ee * re * Qe < ke) {
              if (void 0 !== (Ye = Fe.scanBipartite(ee, xe, ie, je, Le, Ce, Ie, he, ve, ue, Ne, Ge))) return Ye;
              continue
            }
          }
          var ei = fe(ee, xe, Le, Ce, Ie, he, Se, ne);
          if (Le < ei)
            if (ee * (ei - Le) < Re) {
              if (void 0 !== (Ye = Ue(ee, xe + 1, ie, Le, ei, Ie, he, ve, ue, Ne, Ge))) return Ye
            } else if (xe === ee - 2) {
            if (void 0 !== (Ye = je ? Fe.sweepBipartite(ee, ie, ve, ue, Ne, Ge, Le, ei, Ie, he) : Fe.sweepBipartite(ee, ie, Le, ei, Ie, he, ve, ue, Ne, Ge))) return Ye
          } else We(Ve++, xe + 1, Le, ei, ve, ue, je, -1 / 0, 1 / 0), We(Ve++, xe + 1, ve, ue, Le, ei, 1 ^ je, -1 / 0, 1 / 0);
          if (ei < Ce) {
            var ii = Je(ee, xe, ve, ue, Ne, Ge),
              Hi = Ne[ae * ii + xe],
              yi = Te(ee, xe, ii, ue, Ne, Ge, Hi);
            if (yi < ue && We(Ve++, xe, ei, Ce, yi, ue, (4 | je) + (se ? 16 : 0), Hi, ne), ve < ii && We(Ve++, xe, ei, Ce, ve, ii, (2 | je) + (se ? 16 : 0), Se, Hi), ii + 1 === yi) {
              if (void 0 !== (Ye = se ? Ze(ee, xe, ie, ei, Ce, Ie, he, ii, Ne, Ge[ii]) : te(ee, xe, ie, je, ei, Ce, Ie, he, ii, Ne, Ge[ii]))) return Ye
            } else if (ii < yi) {
              var bi;
              if (se) {
                if (ei < (bi = ze(ee, xe, ei, Ce, Ie, he, Hi))) {
                  var Mi = Te(ee, xe, ei, bi, Ie, he, Hi);
                  if (xe === ee - 2) {
                    if (ei < Mi && void 0 !== (Ye = Fe.sweepComplete(ee, ie, ei, Mi, Ie, he, ii, yi, Ne, Ge))) return Ye;
                    if (Mi < bi && void 0 !== (Ye = Fe.sweepBipartite(ee, ie, Mi, bi, Ie, he, ii, yi, Ne, Ge))) return Ye
                  } else ei < Mi && We(Ve++, xe + 1, ei, Mi, ii, yi, 16, -1 / 0, 1 / 0), Mi < bi && (We(Ve++, xe + 1, Mi, bi, ii, yi, 0, -1 / 0, 1 / 0), We(Ve++, xe + 1, ii, yi, Mi, bi, 1, -1 / 0, 1 / 0))
                }
              } else ei < (bi = je ? Be(ee, xe, ei, Ce, Ie, he, Hi) : ze(ee, xe, ei, Ce, Ie, he, Hi)) && (xe === ee - 2 ? Ye = je ? Fe.sweepBipartite(ee, ie, ii, yi, Ne, Ge, ei, bi, Ie, he) : Fe.sweepBipartite(ee, ie, ei, bi, Ie, he, ii, yi, Ne, Ge) : (We(Ve++, xe + 1, ei, bi, ii, yi, je, -1 / 0, 1 / 0), We(Ve++, xe + 1, ii, yi, ei, bi, 1 ^ je, -1 / 0, 1 / 0)))
            }
          }
        }
      }
    };
    var ye = He(39087),
      be = He(39089),
      Me = He(39120),
      Ke = Me.partial,
      Ue = Me.full,
      Fe = He(39104),
      Je = He(39123),
      oe = He(39130),
      Re = 128,
      ke = 1 << 22,
      qe = 1 << 22,
      fe = oe("!(lo>=p0)&&!(p1>=hi)", ["p0", "p1"]),
      Te = oe("lo===p0", ["p0"]),
      pe = oe("lo<p0", ["p0"]),
      Xe = oe("hi<=p0", ["p0"]),
      ze = oe("lo<=p0&&p0<=hi", ["p0"]),
      Be = oe("lo<p0&&p0<=hi", ["p0"]),
      Ee = 6,
      ge = 2,
      Oe = ye.mallocInt32(1024),
      de = ye.mallocDouble(1024);

    function We(ee, ie, He, ye, be, Me, Ke, Ue, Fe) {
      var Je = Ee * ee;
      Oe[Je] = ie, Oe[Je + 1] = He, Oe[Je + 2] = ye, Oe[Je + 3] = be, Oe[Je + 4] = Me, Oe[Je + 5] = Ke;
      var oe = ge * ee;
      de[oe] = Ue, de[oe + 1] = Fe
    }

    function te(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je, oe) {
      var Re = 2 * ee,
        ke = Fe * Re,
        qe = Je[ke + ie];
      ee: for (var fe = be, Te = be * Re; fe < Me; ++fe, Te += Re) {
        var pe = Ke[Te + ie],
          Xe = Ke[Te + ie + ee];
        if (!(qe < pe || Xe < qe) && (!ye || qe !== pe)) {
          for (var ze, Be = Ue[fe], Ee = ie + 1; Ee < ee; ++Ee) {
            pe = Ke[Te + Ee], Xe = Ke[Te + Ee + ee];
            var ge = Je[ke + Ee],
              Oe = Je[ke + Ee + ee];
            if (Xe < ge || Oe < pe) continue ee
          }
          if (void 0 !== (ze = ye ? He(oe, Be) : He(Be, oe))) return ze
        }
      }
    }

    function Ze(ee, ie, He, ye, be, Me, Ke, Ue, Fe, Je) {
      var oe = 2 * ee,
        Re = Ue * oe,
        ke = Fe[Re + ie];
      ee: for (var qe = ye, fe = ye * oe; qe < be; ++qe, fe += oe) {
        var Te = Ke[qe];
        if (Te !== Je) {
          var pe = Me[fe + ie],
            Xe = Me[fe + ie + ee];
          if (!(ke < pe || Xe < ke)) {
            for (var ze = ie + 1; ze < ee; ++ze) {
              pe = Me[fe + ze], Xe = Me[fe + ze + ee];
              var Be = Fe[Re + ze],
                Ee = Fe[Re + ze + ee];
              if (Xe < Be || Ee < pe) continue ee
            }
            var ge = He(Te, Je);
            if (void 0 !== ge) return ge
          }
        }
      }
    }
  },
  39123: (ee, ie, He) => {
    ee.exports = function(ee, ie, He, Ke, Ue, Fe) {
      if (Ke <= He + 1) return He;
      var Je = He,
        oe = Ke,
        Re = Ke + He >>> 1,
        ke = 2 * ee,
        qe = Re,
        fe = Ue[ke * Re + ie];
      for (; Je < oe;) {
        if (oe - Je < be) {
          Me(ee, ie, Je, oe, Ue, Fe), fe = Ue[ke * Re + ie];
          break
        }
        var Te = oe - Je,
          pe = Math.random() * Te + Je | 0,
          Xe = Ue[ke * pe + ie],
          ze = Math.random() * Te + Je | 0,
          Be = Ue[ke * ze + ie],
          Ee = Math.random() * Te + Je | 0,
          ge = Ue[ke * Ee + ie];
        Xe <= Be ? ge >= Be ? (qe = ze, fe = Be) : Xe >= ge ? (qe = pe, fe = Xe) : (qe = Ee, fe = ge) : Be >= ge ? (qe = ze, fe = Be) : ge >= Xe ? (qe = pe, fe = Xe) : (qe = Ee, fe = ge);
        for (var Oe = ke * (oe - 1), de = ke * qe, We = 0; We < ke; ++We, ++Oe, ++de) {
          var te = Ue[Oe];
          Ue[Oe] = Ue[de], Ue[de] = te
        }
        var Ze = Fe[oe - 1];
        Fe[oe - 1] = Fe[qe], Fe[qe] = Ze;
        for (Oe = ke * (oe - 1), de = ke * (qe = ye(ee, ie, Je, oe - 1, Ue, Fe, fe)), We = 0; We < ke; ++We, ++Oe, ++de) {
          te = Ue[Oe];
          Ue[Oe] = Ue[de], Ue[de] = te
        }
        Ze = Fe[oe - 1];
        if (Fe[oe - 1] = Fe[qe], Fe[qe] = Ze, Re < qe) {
          for (oe = qe - 1; Je < oe && Ue[ke * (oe - 1) + ie] === fe;) oe -= 1;
          oe += 1
        } else {
          if (!(qe < Re)) break;
          for (Je = qe + 1; Je < oe && Ue[ke * Je + ie] === fe;) Je += 1
        }
      }
      return ye(ee, ie, He, Re, Ue, Fe, Ue[ke * Re + ie])
    };
    var ye = He(39130)("lo<p0", ["p0"]),
      be = 8;

    function Me(ee, ie, He, ye, be, Me) {
      for (var Ke = 2 * ee, Ue = Ke * (He + 1) + ie, Fe = He + 1; Fe < ye; ++Fe, Ue += Ke)
        for (var Je = be[Ue], oe = Fe, Re = Ke * (Fe - 1); oe > He && be[Re + ie] > Je; --oe, Re -= Ke) {
          for (var ke = Re, qe = Re + Ke, fe = 0; fe < Ke; ++fe, ++ke, ++qe) {
            var Te = be[ke];
            be[ke] = be[qe], be[qe] = Te
          }
          var pe = Me[oe];
          Me[oe] = Me[oe - 1], Me[oe - 1] = pe
        }
    }
  },
  39130: ee => {
    ee.exports = function(ee, He) {
      var ye = "abcdef".split("").concat(He),
        be = [];
      ee.indexOf("lo") >= 0 && be.push("lo=e[k+n]");
      ee.indexOf("hi") >= 0 && be.push("hi=e[k+o]");
      return ye.push(ie.replace("_", be.join()).replace("$", ee)), Function.apply(void 0, ye)
    };
    var ie = "for(var j=2*a,k=j*c,l=k,m=c,n=b,o=a+b,p=c;d>p;++p,k+=j){var _;if($)if(m===p)m+=1,l+=j;else{for(var s=0;j>s;++s){var t=e[k+s];e[k+s]=e[l],e[l++]=t}var u=f[p];f[p]=f[m],f[m++]=u}}return m"
  },
  39106: ee => {
    ee.exports = function(ee, ye) {
      ye <= 4 * ie ? He(0, ye - 1, ee) : Je(0, ye - 1, ee)
    };
    var ie = 32;

    function He(ee, ie, He) {
      for (var ye = 2 * (ee + 1), be = ee + 1; be <= ie; ++be) {
        for (var Me = He[ye++], Ke = He[ye++], Ue = be, Fe = ye - 2; Ue-- > ee;) {
          var Je = He[Fe - 2],
            oe = He[Fe - 1];
          if (Je < Me) break;
          if (Je === Me && oe < Ke) break;
          He[Fe] = Je, He[Fe + 1] = oe, Fe -= 2
        }
        He[Fe] = Me, He[Fe + 1] = Ke
      }
    }

    function ye(ee, ie, He) {
      ie *= 2;
      var ye = He[ee *= 2],
        be = He[ee + 1];
      He[ee] = He[ie], He[ee + 1] = He[ie + 1], He[ie] = ye, He[ie + 1] = be
    }

    function be(ee, ie, He) {
      ie *= 2, He[ee *= 2] = He[ie], He[ee + 1] = He[ie + 1]
    }

    function Me(ee, ie, He, ye) {
      ie *= 2, He *= 2;
      var be = ye[ee *= 2],
        Me = ye[ee + 1];
      ye[ee] = ye[ie], ye[ee + 1] = ye[ie + 1], ye[ie] = ye[He], ye[ie + 1] = ye[He + 1], ye[He] = be, ye[He + 1] = Me
    }

    function Ke(ee, ie, He, ye, be) {
      ie *= 2, be[ee *= 2] = be[ie], be[ie] = He, be[ee + 1] = be[ie + 1], be[ie + 1] = ye
    }

    function Ue(ee, ie, He) {
      ie *= 2;
      var ye = He[ee *= 2],
        be = He[ie];
      return !(ye < be) && (ye !== be || He[ee + 1] > He[ie + 1])
    }

    function Fe(ee, ie, He, ye) {
      var be = ye[ee *= 2];
      return be < ie || be === ie && ye[ee + 1] < He
    }

    function Je(ee, oe, Re) {
      var ke = (oe - ee + 1) / 6 | 0,
        qe = ee + ke,
        fe = oe - ke,
        Te = ee + oe >> 1,
        pe = Te - ke,
        Xe = Te + ke,
        ze = qe,
        Be = pe,
        Ee = Te,
        ge = Xe,
        Oe = fe,
        de = ee + 1,
        We = oe - 1,
        te = 0;
      Ue(ze, Be, Re) && (te = ze, ze = Be, Be = te), Ue(ge, Oe, Re) && (te = ge, ge = Oe, Oe = te), Ue(ze, Ee, Re) && (te = ze, ze = Ee, Ee = te), Ue(Be, Ee, Re) && (te = Be, Be = Ee, Ee = te), Ue(ze, ge, Re) && (te = ze, ze = ge, ge = te), Ue(Ee, ge, Re) && (te = Ee, Ee = ge, ge = te), Ue(Be, Oe, Re) && (te = Be, Be = Oe, Oe = te), Ue(Be, Ee, Re) && (te = Be, Be = Ee, Ee = te), Ue(ge, Oe, Re) && (te = ge, ge = Oe, Oe = te);
      for (var Ze = Re[2 * Be], we = Re[2 * Be + 1], De = Re[2 * ge], Pe = Re[2 * ge + 1], Ae = 2 * ze, Ye = 2 * Ee, Ve = 2 * Oe, ae = 2 * qe, ce = 2 * Te, xe = 2 * fe, Le = 0; Le < 2; ++Le) {
        var Ce = Re[Ae + Le],
          ve = Re[Ye + Le],
          ue = Re[Ve + Le];
        Re[ae + Le] = Ce, Re[ce + Le] = ve, Re[xe + Le] = ue
      }
      be(pe, ee, Re), be(Xe, oe, Re);
      for (var me = de; me <= We; ++me)
        if (Fe(me, Ze, we, Re)) me !== de && ye(me, de, Re), ++de;
        else if (!Fe(me, De, Pe, Re))
        for (;;) {
          if (Fe(We, De, Pe, Re)) {
            Fe(We, Ze, we, Re) ? (Me(me, de, We, Re), ++de, --We) : (ye(me, We, Re), --We);
            break
          }
          if (--We < me) break
        }
      Ke(ee, de - 1, Ze, we, Re), Ke(oe, We + 1, De, Pe, Re), de - 2 - ee <= ie ? He(ee, de - 2, Re) : Je(ee, de - 2, Re), oe - (We + 2) <= ie ? He(We + 2, oe, Re) : Je(We + 2, oe, Re), We - de <= ie ? He(de, We, Re) : Je(de, We, Re)
    }
  },
  39104: (ee, ie, He) => {
    ee.exports = {
      init: function(ee) {
        var ie = be.nextPow2(ee);
        Fe.length < ie && (ye.free(Fe), Fe = ye.mallocInt32(ie));
        Je.length < ie && (ye.free(Je), Je = ye.mallocInt32(ie));
        oe.length < ie && (ye.free(oe), oe = ye.mallocInt32(ie));
        Re.length < ie && (ye.free(Re), Re = ye.mallocInt32(ie));
        ke.length < ie && (ye.free(ke), ke = ye.mallocInt32(ie));
        qe.length < ie && (ye.free(qe), qe = ye.mallocInt32(ie));
        var He = 8 * ie;
        fe.length < He && (ye.free(fe), fe = ye.mallocDouble(He))
      },
      sweepBipartite: function(ee, ie, He, ye, be, Ue, ke, qe, Xe, ze) {
        for (var Be = 0, Ee = 2 * ee, ge = ee - 1, Oe = Ee - 1, de = He; de < ye; ++de) {
          var We = Ue[de],
            te = Ee * de;
          fe[Be++] = be[te + ge], fe[Be++] = -(We + 1), fe[Be++] = be[te + Oe], fe[Be++] = We
        }
        for (de = ke; de < qe; ++de) {
          We = ze[de] + Ke;
          var Ze = Ee * de;
          fe[Be++] = Xe[Ze + ge], fe[Be++] = -We, fe[Be++] = Xe[Ze + Oe], fe[Be++] = We
        }
        var we = Be >>> 1;
        Me(fe, we);
        var De = 0,
          Pe = 0;
        for (de = 0; de < we; ++de) {
          var Ae = 0 | fe[2 * de + 1];
          if (Ae >= Ke) Te(oe, Re, Pe--, Ae = Ae - Ke | 0);
          else if (Ae >= 0) Te(Fe, Je, De--, Ae);
          else if (Ae <= -Ke) {
            Ae = -Ae - Ke | 0;
            for (var Ye = 0; Ye < De; ++Ye) {
              if (void 0 !== (Ve = ie(Fe[Ye], Ae))) return Ve
            }
            pe(oe, Re, Pe++, Ae)
          } else {
            Ae = -Ae - 1 | 0;
            for (Ye = 0; Ye < Pe; ++Ye) {
              var Ve;
              if (void 0 !== (Ve = ie(Ae, oe[Ye]))) return Ve
            }
            pe(Fe, Je, De++, Ae)
          }
        }
      },
      sweepComplete: function(ee, ie, He, ye, be, Ke, Ue, Xe, ze, Be) {
        for (var Ee = 0, ge = 2 * ee, Oe = ee - 1, de = ge - 1, We = He; We < ye; ++We) {
          var te = Ke[We] + 1 << 1,
            Ze = ge * We;
          fe[Ee++] = be[Ze + Oe], fe[Ee++] = -te, fe[Ee++] = be[Ze + de], fe[Ee++] = te
        }
        for (We = Ue; We < Xe; ++We) {
          te = Be[We] + 1 << 1;
          var we = ge * We;
          fe[Ee++] = ze[we + Oe], fe[Ee++] = 1 | -te, fe[Ee++] = ze[we + de], fe[Ee++] = 1 | te
        }
        var De = Ee >>> 1;
        Me(fe, De);
        var Pe = 0,
          Ae = 0,
          Ye = 0;
        for (We = 0; We < De; ++We) {
          var Ve = 0 | fe[2 * We + 1],
            ae = 1 & Ve;
          if (We < De - 1 && Ve >> 1 === fe[2 * We + 3] >> 1 && (ae = 2, We += 1), Ve < 0) {
            for (var ce = -(Ve >> 1) - 1, xe = 0; xe < Ye; ++xe) {
              if (void 0 !== (Le = ie(ke[xe], ce))) return Le
            }
            if (0 !== ae)
              for (xe = 0; xe < Pe; ++xe) {
                if (void 0 !== (Le = ie(Fe[xe], ce))) return Le
              }
            if (1 !== ae)
              for (xe = 0; xe < Ae; ++xe) {
                var Le;
                if (void 0 !== (Le = ie(oe[xe], ce))) return Le
              }
            0 === ae ? pe(Fe, Je, Pe++, ce) : 1 === ae ? pe(oe, Re, Ae++, ce) : 2 === ae && pe(ke, qe, Ye++, ce)
          } else {
            ce = (Ve >> 1) - 1;
            0 === ae ? Te(Fe, Je, Pe--, ce) : 1 === ae ? Te(oe, Re, Ae--, ce) : 2 === ae && Te(ke, qe, Ye--, ce)
          }
        }
      },
      scanBipartite: function(ee, ie, He, ye, be, Ue, oe, Re, ke, qe, Xe, ze) {
        var Be = 0,
          Ee = 2 * ee,
          ge = ie,
          Oe = ie + ee,
          de = 1,
          We = 1;
        ye ? We = Ke : de = Ke;
        for (var te = be; te < Ue; ++te) {
          var Ze = te + de,
            we = Ee * te;
          fe[Be++] = oe[we + ge], fe[Be++] = -Ze, fe[Be++] = oe[we + Oe], fe[Be++] = Ze
        }
        for (te = ke; te < qe; ++te) {
          Ze = te + We;
          var De = Ee * te;
          fe[Be++] = Xe[De + ge], fe[Be++] = -Ze
        }
        var Pe = Be >>> 1;
        Me(fe, Pe);
        var Ae = 0;
        for (te = 0; te < Pe; ++te) {
          var Ye = 0 | fe[2 * te + 1];
          if (Ye < 0) {
            var Ve = !1;
            if ((Ze = -Ye) >= Ke ? (Ve = !ye, Ze -= Ke) : (Ve = !!ye, Ze -= 1), Ve) pe(Fe, Je, Ae++, Ze);
            else {
              var ae = ze[Ze],
                ce = Ee * Ze,
                xe = Xe[ce + ie + 1],
                Le = Xe[ce + ie + 1 + ee];
              ee: for (var Ce = 0; Ce < Ae; ++Ce) {
                var ve = Fe[Ce],
                  ue = Ee * ve;
                if (!(Le < oe[ue + ie + 1] || oe[ue + ie + 1 + ee] < xe)) {
                  for (var me = ie + 2; me < ee; ++me)
                    if (Xe[ce + me + ee] < oe[ue + me] || oe[ue + me + ee] < Xe[ce + me]) continue ee;
                  var le, Se = Re[ve];
                  if (void 0 !== (le = ye ? He(ae, Se) : He(Se, ae))) return le
                }
              }
            }
          } else Te(Fe, Je, Ae--, Ye - de)
        }
      },
      scanComplete: function(ee, ie, He, ye, be, Ue, Je, oe, Re, ke, qe) {
        for (var Te = 0, pe = 2 * ee, Xe = ie, ze = ie + ee, Be = ye; Be < be; ++Be) {
          var Ee = Be + Ke,
            ge = pe * Be;
          fe[Te++] = Ue[ge + Xe], fe[Te++] = -Ee, fe[Te++] = Ue[ge + ze], fe[Te++] = Ee
        }
        for (Be = oe; Be < Re; ++Be) {
          Ee = Be + 1;
          var Oe = pe * Be;
          fe[Te++] = ke[Oe + Xe], fe[Te++] = -Ee
        }
        var de = Te >>> 1;
        Me(fe, de);
        var We = 0;
        for (Be = 0; Be < de; ++Be) {
          var te = 0 | fe[2 * Be + 1];
          if (te < 0) {
            if ((Ee = -te) >= Ke) Fe[We++] = Ee - Ke;
            else {
              var Ze = qe[Ee -= 1],
                we = pe * Ee,
                De = ke[we + ie + 1],
                Pe = ke[we + ie + 1 + ee];
              ee: for (var Ae = 0; Ae < We; ++Ae) {
                var Ye = Fe[Ae],
                  Ve = Je[Ye];
                if (Ve === Ze) break;
                var ae = pe * Ye;
                if (!(Pe < Ue[ae + ie + 1] || Ue[ae + ie + 1 + ee] < De)) {
                  for (var ce = ie + 2; ce < ee; ++ce)
                    if (ke[we + ce + ee] < Ue[ae + ce] || Ue[ae + ce + ee] < ke[we + ce]) continue ee;
                  var xe = He(Ve, Ze);
                  if (void 0 !== xe) return xe
                }
              }
            }
          } else {
            for (Ee = te - Ke, Ae = We - 1; Ae >= 0; --Ae)
              if (Fe[Ae] === Ee) {
                for (ce = Ae + 1; ce < We; ++ce) Fe[ce - 1] = Fe[ce];
                break
              }-- We
          }
        }
      }
    };
    var ye = He(39087),
      be = He(39089),
      Me = He(39106),
      Ke = 1 << 28,
      Ue = 1024,
      Fe = ye.mallocInt32(Ue),
      Je = ye.mallocInt32(Ue),
      oe = ye.mallocInt32(Ue),
      Re = ye.mallocInt32(Ue),
      ke = ye.mallocInt32(Ue),
      qe = ye.mallocInt32(Ue),
      fe = ye.mallocDouble(8192);

    function Te(ee, ie, He, ye) {
      var be = ie[ye],
        Me = ee[He - 1];
      ee[be] = Me, ie[Me] = be
    }

    function pe(ee, ie, He, ye) {
      ee[He] = ye, ie[ye] = He
    }
  },
  39095: ee => {
    function ie(ee, He, ye) {
      var be = 0 | ee[ye];
      if (be <= 0) return [];
      var Me, Ke = new Array(be);
      if (ye === ee.length - 1)
        for (Me = 0; Me < be; ++Me) Ke[Me] = He;
      else
        for (Me = 0; Me < be; ++Me) Ke[Me] = ie(ee, He, ye + 1);
      return Ke
    }
    ee.exports = function(ee, He) {
      switch ("undefined" === typeof He && (He = 0), typeof ee) {
        case "number":
          if (ee > 0) return function(ee, ie) {
            var He, ye;
            for (He = new Array(ee), ye = 0; ye < ee; ++ye) He[ye] = ie;
            return He
          }(0 | ee, He);
          break;
        case "object":
          if ("number" === typeof ee.length) return ie(ee, He, 0)
      }
      return []
    }
  },
  39049: (ee, ie, He) => {
    ee.exports = function() {
      var ee = this;
      this.components = {}, this.comps = this.components;
      var ie = this.components,
        He = 1,
        be = {},
        Me = [],
        Ke = [],
        Ue = {
          timeout: !1,
          removals: [],
          multiComps: []
        };

      function Fe(ee, He) {
        var ye = ie[He],
          Me = be[He],
          Ke = Me.hash[ee];
        Ke && (Me.remove(ee), ye.JV && (ye.multi ? (Ke.forEach((ie => {
          ie && ye.JV(ee, ie)
        })), Ke.length = 0) : ye.JV(ee, Ke)), Ue.removals.push(Me), Je())
      }

      function Je() {
        Ue.timeout || (Ue.timeout = !0, setTimeout(oe, 1))
      }

      function oe() {
        Ue.timeout = !1, Re()
      }

      function Re() {
        Ue.multiComps.length && function(ee) {
          for (var ie = 0; ie < ee.length; ie++) {
            var {
              entID: He,
              data: ye
            } = ee[ie], be = ye.hash[He];
            if (be) {
              for (var Me = 0; Me < be.length; Me++) be[Me] || (be.splice(Me, 1), Me--);
              0 === be.length && (ye.remove(He), Ue.removals.push(ye))
            }
          }
          ee.length = 0
        }(Ue.multiComps), Ue.removals.length && function(ee) {
          for (var ie = 0; ie < ee.length; ie++) {
            ee[ie].flush()
          }
          ee.length = 0
        }(Ue.removals)
      }
      this.aT = be, this._systems = Me, this._renderSystems = Ke, this.b_ = function(ie) {
        var ye = He++;
        return Array.isArray(ie) && ie.forEach((ie => ee.uL(ye, ie))), ye
      }, this.deleteEntity = function(ie) {
        return Object.keys(be).forEach((ee => {
          be[ee].hash[ie] && Fe(ie, ee)
        })), ee
      }, this.Pye = function(ee) {
        if (!ee) throw new Error("Missing component definition");
        var He = ee.name;
        if (!He) throw new Error("Component definition must have a name property.");
        if ("string" !== typeof He) throw new Error("Component name must be a string.");
        if ("" === He) throw new Error("Component name must be a non-empty string.");
        if (be[He]) throw new Error(`Component ${He} already exists.`);
        var Ue = {};
        return Ue.name = He, Ue.multi = !!ee.multi, Ue.order = isNaN(ee.order) ? 99 : ee.order, Ue.stateConstructor = ee.stateConstructor || null, Ue.state = ee.state || {}, Ue.lE = ee.lE || null, Ue.JV = ee.JV || null, Ue.system = ee.system || null, Ue.QE = ee.QE || null, ie[He] = Ue, be[He] = new ye, be[He]._pendingMultiCleanup = !1, be[He]._multiCleanupIDs = Ue.multi ? [] : null, Ue.system && (Me.push(He), Me.sort(((ee, He) => ie[ee].order - ie[He].order))), Ue.QE && (Ke.push(He), Ke.sort(((ee, He) => ie[ee].order - ie[He].order))), He
      }, this.overwriteComponent = function(ee, He) {
        var ye = ie[ee];
        if (!ye) throw new Error(`Unknown component: ${ee}`);
        if (!He) throw new Error("Missing component definition");
        if (ye.name !== He.name) throw new Error("Overwriting component must use the same name property.");
        var Ue = {};
        Ue.name = ee, Ue.multi = !!He.multi, Ue.order = isNaN(He.order) ? 99 : He.order, Ue.state = He.state || {}, Ue.lE = He.lE || null, Ue.JV = He.JV || null, Ue.system = He.system || null, Ue.QE = He.QE || null, ie[ee] = Ue, be[ee]._pendingMultiCleanup = !1, be[ee]._multiCleanupIDs = Ue.multi ? [] : null;
        var Fe = Me.indexOf(ee);
        Ue.system && Fe < 0 && Me.push(ee), !Ue.system && Fe >= 0 && Me.splice(Fe, 1), Me.sort(((ee, He) => ie[ee].order - ie[He].order));
        var Je = Ke.indexOf(ee);
        Ue.QE && Je < 0 && Ke.push(ee), !Ue.QE && Je >= 0 && Ke.splice(Je, 1), Ke.sort(((ee, He) => ie[ee].order - ie[He].order));
        var oe = Ue.state;
        return this.YL(ee).forEach((ee => {
          for (var ie in oe) ie in ee || (ee[ie] = oe[ie]);
          Ue.lE && Ue.lE(ee.cL, ee)
        })), ee
      }, this.deleteComponent = function(He) {
        var ye = be[He];
        if (!ye) throw new Error(`Unknown component: ${He}`);
        ye.flush(), ye.list.forEach((ee => {
          ee && Fe(ee.cL || ee[0].cL, He)
        }));
        var Ue = Me.indexOf(He),
          Je = Ke.indexOf(He);
        return Ue > -1 && Me.splice(Ue, 1), Je > -1 && Ke.splice(Je, 1), be[He].dispose(), delete be[He], delete ie[He], ee
      }, this.uL = function(ee, He, ye) {
        var Me, Ke = ie[He],
          Ue = be[He];
        if (!Ue) throw new Error(`Unknown component: ${He}.`);
        if (Ue.hash[ee] && !Ke.multi) throw new Error(`Entity ${ee} already has component: ${He}.`);
        if (Ke.stateConstructor) {
          if (!(Me = new Ke.stateConstructor).hasOwnProperty("cL")) throw new Error(`Component ${Ke.name} stateConstructor type does not have property __id`);
          Object.assign(Me, Ke.state, ye)
        } else Me = {
          cL: ee,
          ...Ke.state,
          ...ye
        };
        if (Me.cL = ee, Ke.multi) {
          var Fe = Ue.hash[ee];
          Fe || (Fe = [], Ue.add(ee, Fe)), Fe.push(Me)
        } else Ue.add(ee, Me);
        return Ke.lE && Ke.lE(ee, Me), this
      }, this.gHe = function(ee, ie) {
        var He = be[ie];
        if (!He) throw new Error(`Unknown component: ${ie}.`);
        return !!He.hash[ee]
      }, this.lL = function(ie, He) {
        if (!be[He]) throw new Error(`Unknown component: ${He}.`);
        return Fe(ie, He), ee
      }, this.getState = function(ee, ie) {
        var He = be[ie];
        if (!He) throw new Error(`Unknown component: ${ie}.`);
        return He.hash[ee]
      }, this.YL = function(ee) {
        var ie = be[ee];
        if (!ie) throw new Error(`Unknown component: ${ee}.`);
        return Re(), ie.list
      }, this.Kye = function(ee) {
        if (!be[ee]) throw new Error(`Unknown component: ${ee}.`);
        var ie = be[ee].hash;
        return ee => ie[ee]
      }, this.kye = function(ee) {
        if (!be[ee]) throw new Error(`Unknown component: ${ee}.`);
        var ie = be[ee].hash;
        return ee => !!ie[ee]
      }, this.YR = function(He) {
        Re();
        for (var ye = 0; ye < Me.length; ye++) {
          var Ke = Me[ye],
            Ue = ie[Ke],
            Fe = be[Ke];
          Ue.system(He, Fe.list), Re()
        }
        return ee
      }, this.render = function(He) {
        Re();
        for (var ye = 0; ye < Ke.length; ye++) {
          var Me = Ke[ye],
            Ue = ie[Me],
            Fe = be[Me];
          Ue.QE(He, Fe.list), Re()
        }
        return ee
      }, this.removeMultiComponent = function(He, ye, Me) {
        var Ke = ie[ye],
          Fe = be[ye];
        if (!Fe) throw new Error(`Unknown component: ${ye}.`);
        if (!Ke.multi) throw new Error("removeMultiComponent called on non-multi component");
        return function(ee, ie, He, ye) {
          var be = He.hash[ee];
          if (be) {
            var Me = be[ye];
            Me && (be[ye] = null, ie.JV && ie.JV(ee, Me), Ue.multiComps.push({
              entID: ee,
              data: He
            }), Je())
          }
        }(He, Ke, Fe, Me), ee
      }
    };
    var ye = He(39053)
  },
  39053: ee => {
    function ie(ee, ie) {
      var He = ee._map[ie];
      if (delete ee.hash[ie], delete ee._map[ie], He === ee.list.length - 1) ee.list.pop(), ee._idList.pop();
      else {
        var ye = ee.list.pop();
        ee.list[He] = ye;
        var be = ee._idList.pop();
        ee._idList[He] = be, ee._map[be] = He
      }
    }
    ee.exports = class {
      constructor() {
        this.list = [], this.hash = {}, this._map = {}, this._idList = [], this._pendingRemovals = []
      }
      add(ee, ie) {
        if ("number" === typeof this._map[ee]) {
          var He = this._map[ee];
          this.hash[ee] = ie, this.list[He] = ie, this._idList[He] = ee
        } else this._map[ee] = this.list.length, this.hash[ee] = ie, this.list.push(ie), this._idList.push(ee)
      }
      remove(ee) {
        var ie = this._map[ee];
        this.hash[ee] = null, this.list[ie] = null, this._pendingRemovals.push(ee)
      }
      dispose() {
        this.list = null, this.hash = null, this._map = null, this._idList = null, this._pendingRemovals.length = 0
      }
      flush() {
        for (var ee = 0; ee < this._pendingRemovals.length; ee++) {
          var He = this._pendingRemovals[ee];
          null === this.hash[He] && ie(this, He)
        }
        this._pendingRemovals.length = 0
      }
    }
  },
  38886: (ee, ie, He) => {
    ee = He.nmd(ee);
    var ye = "__lodash_hash_undefined__",
      be = 9007199254740991,
      Me = "[object Arguments]",
      Ke = "[object Boolean]",
      Ue = "[object Date]",
      Fe = "[object Function]",
      Je = "[object GeneratorFunction]",
      oe = "[object Map]",
      Re = "[object Number]",
      ke = "[object Object]",
      qe = "[object Promise]",
      fe = "[object RegExp]",
      Te = "[object Set]",
      pe = "[object String]",
      Xe = "[object Symbol]",
      ze = "[object WeakMap]",
      Be = "[object ArrayBuffer]",
      Ee = "[object DataView]",
      ge = "[object Float32Array]",
      Oe = "[object Float64Array]",
      de = "[object Int8Array]",
      We = "[object Int16Array]",
      te = "[object Int32Array]",
      Ze = "[object Uint8Array]",
      we = "[object Uint8ClampedArray]",
      De = "[object Uint16Array]",
      Pe = "[object Uint32Array]",
      Ae = /\w*$/,
      Ye = /^\[object .+?Constructor\]$/,
      Ve = /^(?:0|[1-9]\d*)$/,
      ae = {};
    ae[Me] = ae["[object Array]"] = ae[Be] = ae[Ee] = ae[Ke] = ae[Ue] = ae[ge] = ae[Oe] = ae[de] = ae[We] = ae[te] = ae[oe] = ae[Re] = ae[ke] = ae[fe] = ae[Te] = ae[pe] = ae[Xe] = ae[Ze] = ae[we] = ae[De] = ae[Pe] = !0, ae["[object Error]"] = ae[Fe] = ae[ze] = !1;
    var ce = "object" == typeof He.g && He.g && He.g.Object === Object && He.g,
      xe = "object" == typeof self && self && self.Object === Object && self,
      Le = ce || xe || Function("return this")(),
      Ce = ie && !ie.nodeType && ie,
      ve = Ce && ee && !ee.nodeType && ee,
      ue = ve && ve.exports === Ce;

    function me(ee, ie) {
      return ee.set(ie[0], ie[1]), ee
    }

    function le(ee, ie) {
      return ee.add(ie), ee
    }

    function Se(ee, ie, He, ye) {
      var be = -1,
        Me = ee ? ee.length : 0;
      for (ye && Me && (He = ee[++be]); ++be < Me;) He = ie(He, ee[be], be, ee);
      return He
    }

    function ne(ee) {
      var ie = !1;
      if (null != ee && "function" != typeof ee.toString) try {
        ie = !!(ee + "")
      } catch (He) {}
      return ie
    }

    function je(ee) {
      var ie = -1,
        He = Array(ee.size);
      return ee.forEach((function(ee, ye) {
        He[++ie] = [ye, ee]
      })), He
    }

    function se(ee, ie) {
      return function(He) {
        return ee(ie(He))
      }
    }

    function Ie(ee) {
      var ie = -1,
        He = Array(ee.size);
      return ee.forEach((function(ee) {
        He[++ie] = ee
      })), He
    }
    var he = Array.prototype,
      Ne = Function.prototype,
      Ge = Object.prototype,
      re = Le["__core-js_shared__"],
      Qe = function() {
        var ee = /[^.]+$/.exec(re && re.keys && re.keys.IE_PROTO || "");
        return ee ? "Symbol(src)_1." + ee : ""
      }(),
      ei = Ne.toString,
      ii = Ge.hasOwnProperty,
      Hi = Ge.toString,
      yi = RegExp("^" + ei.call(ii).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
      bi = ue ? Le.bR : void 0,
      Mi = Le.Symbol,
      Ki = Le.Uint8Array,
      Ui = se(Object.getPrototypeOf, Object),
      Fi = Object.create,
      Ji = Ge.propertyIsEnumerable,
      oi = he.splice,
      Ri = Object.getOwnPropertySymbols,
      ki = bi ? bi.isBuffer : void 0,
      qi = se(Object.keys, Object),
      fi = mi(Le, "DataView"),
      Ti = mi(Le, "Map"),
      Xi = mi(Le, "Promise"),
      zi = mi(Le, "Set"),
      Bi = mi(Le, "WeakMap"),
      Ei = mi(Object, "create"),
      gi = si(fi),
      Oi = si(Ti),
      di = si(Xi),
      Wi = si(zi),
      ti = si(Bi),
      Zi = Mi ? Mi.prototype : void 0,
      wi = Zi ? Zi.valueOf : void 0;

    function Di(ee) {
      var ie = -1,
        He = ee ? ee.length : 0;
      for (this.clear(); ++ie < He;) {
        var ye = ee[ie];
        this.set(ye[0], ye[1])
      }
    }

    function Pi(ee) {
      var ie = -1,
        He = ee ? ee.length : 0;
      for (this.clear(); ++ie < He;) {
        var ye = ee[ie];
        this.set(ye[0], ye[1])
      }
    }

    function Ai(ee) {
      var ie = -1,
        He = ee ? ee.length : 0;
      for (this.clear(); ++ie < He;) {
        var ye = ee[ie];
        this.set(ye[0], ye[1])
      }
    }

    function Yi(ee) {
      this.__data__ = new Pi(ee)
    }

    function Vi(ee, ie) {
      var He = Ni(ee) || function(ee) {
          return function(ee) {
            return function(ee) {
              return !!ee && "object" == typeof ee
            }(ee) && Gi(ee)
          }(ee) && ii.call(ee, "callee") && (!Ji.call(ee, "callee") || Hi.call(ee) == Me)
        }(ee) ? function(ee, ie) {
          for (var He = -1, ye = Array(ee); ++He < ee;) ye[He] = ie(He);
          return ye
        }(ee.length, String) : [],
        ye = He.length,
        be = !!ye;
      for (var Ke in ee) !ie && !ii.call(ee, Ke) || be && ("length" == Ke || ni(Ke, ye)) || He.push(Ke);
      return He
    }

    function ai(ee, ie, He) {
      var ye = ee[ie];
      ii.call(ee, ie) && Ii(ye, He) && (void 0 !== He || ie in ee) || (ee[ie] = He)
    }

    function ci(ee, ie) {
      for (var He = ee.length; He--;)
        if (Ii(ee[He][0], ie)) return He;
      return -1
    }

    function xi(ee, ie, He, ye, be, qe, ze) {
      var Ye;
      if (ye && (Ye = qe ? ye(ee, be, qe, ze) : ye(ee)), void 0 !== Ye) return Ye;
      if (!eH(ee)) return ee;
      var Ve = Ni(ee);
      if (Ve) {
        if (Ye = function(ee) {
            var ie = ee.length,
              He = ee.constructor(ie);
            ie && "string" == typeof ee[0] && ii.call(ee, "index") && (He.index = ee.index, He.input = ee.input);
            return He
          }(ee), !ie) return function(ee, ie) {
          var He = -1,
            ye = ee.length;
          ie || (ie = Array(ye));
          for (; ++He < ye;) ie[He] = ee[He];
          return ie
        }(ee, Ye)
      } else {
        var ce = Si(ee),
          xe = ce == Fe || ce == Je;
        if (ri(ee)) return function(ee, ie) {
          if (ie) return ee.slice();
          var He = new ee.constructor(ee.length);
          return ee.copy(He), He
        }(ee, ie);
        if (ce == ke || ce == Me || xe && !qe) {
          if (ne(ee)) return qe ? ee : {};
          if (Ye = function(ee) {
              return "function" != typeof ee.constructor || ji(ee) ? {} : (ie = Ui(ee), eH(ie) ? Fi(ie) : {});
              var ie
            }(xe ? {} : ee), !ie) return function(ee, ie) {
            return vi(ee, li(ee), ie)
          }(ee, function(ee, ie) {
            return ee && vi(ie, iH(ie), ee)
          }(Ye, ee))
        } else {
          if (!ae[ce]) return qe ? ee : {};
          Ye = function(ee, ie, He, ye) {
            var be = ee.constructor;
            switch (ie) {
              case Be:
                return Ci(ee);
              case Ke:
              case Ue:
                return new be(+ee);
              case Ee:
                return function(ee, ie) {
                  var He = ie ? Ci(ee.buffer) : ee.buffer;
                  return new ee.constructor(He, ee.byteOffset, ee.byteLength)
                }(ee, ye);
              case ge:
              case Oe:
              case de:
              case We:
              case te:
              case Ze:
              case we:
              case De:
              case Pe:
                return function(ee, ie) {
                  var He = ie ? Ci(ee.buffer) : ee.buffer;
                  return new ee.constructor(He, ee.byteOffset, ee.length)
                }(ee, ye);
              case oe:
                return function(ee, ie, He) {
                  var ye = ie ? He(je(ee), !0) : je(ee);
                  return Se(ye, me, new ee.constructor)
                }(ee, ye, He);
              case Re:
              case pe:
                return new be(ee);
              case fe:
                return function(ee) {
                  var ie = new ee.constructor(ee.source, Ae.exec(ee));
                  return ie.lastIndex = ee.lastIndex, ie
                }(ee);
              case Te:
                return function(ee, ie, He) {
                  var ye = ie ? He(Ie(ee), !0) : Ie(ee);
                  return Se(ye, le, new ee.constructor)
                }(ee, ye, He);
              case Xe:
                return Me = ee, wi ? Object(wi.call(Me)) : {}
            }
            var Me
          }(ee, ce, xi, ie)
        }
      }
      ze || (ze = new Yi);
      var Le = ze.get(ee);
      if (Le) return Le;
      if (ze.set(ee, Ye), !Ve) var Ce = He ? function(ee) {
        return function(ee, ie, He) {
          var ye = ie(ee);
          return Ni(ee) ? ye : function(ee, ie) {
            for (var He = -1, ye = ie.length, be = ee.length; ++He < ye;) ee[be + He] = ie[He];
            return ee
          }(ye, He(ee))
        }(ee, iH, li)
      }(ee) : iH(ee);
      return function(ee, ie) {
        for (var He = -1, ye = ee ? ee.length : 0; ++He < ye && !1 !== ie(ee[He], He, ee););
      }(Ce || ee, (function(be, Me) {
        Ce && (be = ee[Me = be]), ai(Ye, Me, xi(be, ie, He, ye, Me, ee, ze))
      })), Ye
    }

    function Li(ee) {
      return !(!eH(ee) || (ie = ee, Qe && Qe in ie)) && (Qi(ee) || ne(ee) ? yi : Ye).test(si(ee));
      var ie
    }

    function Ci(ee) {
      var ie = new ee.constructor(ee.byteLength);
      return new Ki(ie).set(new Ki(ee)), ie
    }

    function vi(ee, ie, He, ye) {
      He || (He = {});
      for (var be = -1, Me = ie.length; ++be < Me;) {
        var Ke = ie[be],
          Ue = ye ? ye(He[Ke], ee[Ke], Ke, He, ee) : void 0;
        ai(He, Ke, void 0 === Ue ? ee[Ke] : Ue)
      }
      return He
    }

    function ui(ee, ie) {
      var He = ee.__data__;
      return function(ee) {
        var ie = typeof ee;
        return "string" == ie || "number" == ie || "symbol" == ie || "boolean" == ie ? "__proto__" !== ee : null === ee
      }(ie) ? He["string" == typeof ie ? "string" : "hash"] : He.map
    }

    function mi(ee, ie) {
      var He = function(ee, ie) {
        return null == ee ? void 0 : ee[ie]
      }(ee, ie);
      return Li(He) ? He : void 0
    }
    Di.prototype.clear = function() {
      this.__data__ = Ei ? Ei(null) : {}
    }, Di.prototype.delete = function(ee) {
      return this.has(ee) && delete this.__data__[ee]
    }, Di.prototype.get = function(ee) {
      var ie = this.__data__;
      if (Ei) {
        var He = ie[ee];
        return He === ye ? void 0 : He
      }
      return ii.call(ie, ee) ? ie[ee] : void 0
    }, Di.prototype.has = function(ee) {
      var ie = this.__data__;
      return Ei ? void 0 !== ie[ee] : ii.call(ie, ee)
    }, Di.prototype.set = function(ee, ie) {
      return this.__data__[ee] = Ei && void 0 === ie ? ye : ie, this
    }, Pi.prototype.clear = function() {
      this.__data__ = []
    }, Pi.prototype.delete = function(ee) {
      var ie = this.__data__,
        He = ci(ie, ee);
      return !(He < 0) && (He == ie.length - 1 ? ie.pop() : oi.call(ie, He, 1), !0)
    }, Pi.prototype.get = function(ee) {
      var ie = this.__data__,
        He = ci(ie, ee);
      return He < 0 ? void 0 : ie[He][1]
    }, Pi.prototype.has = function(ee) {
      return ci(this.__data__, ee) > -1
    }, Pi.prototype.set = function(ee, ie) {
      var He = this.__data__,
        ye = ci(He, ee);
      return ye < 0 ? He.push([ee, ie]) : He[ye][1] = ie, this
    }, Ai.prototype.clear = function() {
      this.__data__ = {
        hash: new Di,
        map: new(Ti || Pi),
        string: new Di
      }
    }, Ai.prototype.delete = function(ee) {
      return ui(this, ee).delete(ee)
    }, Ai.prototype.get = function(ee) {
      return ui(this, ee).get(ee)
    }, Ai.prototype.has = function(ee) {
      return ui(this, ee).has(ee)
    }, Ai.prototype.set = function(ee, ie) {
      return ui(this, ee).set(ee, ie), this
    }, Yi.prototype.clear = function() {
      this.__data__ = new Pi
    }, Yi.prototype.delete = function(ee) {
      return this.__data__.delete(ee)
    }, Yi.prototype.get = function(ee) {
      return this.__data__.get(ee)
    }, Yi.prototype.has = function(ee) {
      return this.__data__.has(ee)
    }, Yi.prototype.set = function(ee, ie) {
      var He = this.__data__;
      if (He instanceof Pi) {
        var ye = He.__data__;
        if (!Ti || ye.length < 199) return ye.push([ee, ie]), this;
        He = this.__data__ = new Ai(ye)
      }
      return He.set(ee, ie), this
    };
    var li = Ri ? se(Ri, Object) : function() {
        return []
      },
      Si = function(ee) {
        return Hi.call(ee)
      };

    function ni(ee, ie) {
      return !!(ie = null == ie ? be : ie) && ("number" == typeof ee || Ve.test(ee)) && ee > -1 && ee % 1 == 0 && ee < ie
    }

    function ji(ee) {
      var ie = ee && ee.constructor;
      return ee === ("function" == typeof ie && ie.prototype || Ge)
    }

    function si(ee) {
      if (null != ee) {
        try {
          return ei.call(ee)
        } catch (ie) {}
        try {
          return ee + ""
        } catch (ie) {}
      }
      return ""
    }

    function Ii(ee, ie) {
      return ee === ie || ee !== ee && ie !== ie
    }(fi && Si(new fi(new ArrayBuffer(1))) != Ee || Ti && Si(new Ti) != oe || Xi && Si(Xi.resolve()) != qe || zi && Si(new zi) != Te || Bi && Si(new Bi) != ze) && (Si = function(ee) {
      var ie = Hi.call(ee),
        He = ie == ke ? ee.constructor : void 0,
        ye = He ? si(He) : void 0;
      if (ye) switch (ye) {
        case gi:
          return Ee;
        case Oi:
          return oe;
        case di:
          return qe;
        case Wi:
          return Te;
        case ti:
          return ze
      }
      return ie
    });
    var Ni = Array.isArray;

    function Gi(ee) {
      return null != ee && function(ee) {
        return "number" == typeof ee && ee > -1 && ee % 1 == 0 && ee <= be
      }(ee.length) && !Qi(ee)
    }
    var ri = ki || function() {
      return !1
    };

    function Qi(ee) {
      var ie = eH(ee) ? Hi.call(ee) : "";
      return ie == Fe || ie == Je
    }

    function eH(ee) {
      var ie = typeof ee;
      return !!ee && ("object" == ie || "function" == ie)
    }

    function iH(ee) {
      return Gi(ee) ? Vi(ee) : function(ee) {
        if (!ji(ee)) return qi(ee);
        var ie = [];
        for (var He in Object(ee)) ii.call(ee, He) && "constructor" != He && ie.push(He);
        return ie
      }(ee)
    }
    ee.exports = function(ee) {
      return xi(ee, !0, !0)
    }
  },
  39240: ee => {
    function ie(ee, ie, He) {
      for (var ye = ee.length, be = -1 / 0, Me = 1 / 0, Ke = 0; Ke < ye; Ke++) {
        var Ue = (He[0][Ke] - ee[Ke]) / ie[Ke],
          Fe = (He[1][Ke] - ee[Ke]) / ie[Ke];
        if (Ue > Fe) {
          var Je = Ue;
          Ue = Fe, Fe = Je
        }
        if (Fe < be || Ue > Me) return 1 / 0;
        Ue > be && (be = Ue), Fe < Me && (Me = Fe)
      }
      return be > Me ? 1 / 0 : be
    }
    ee.exports = function(ee, He, ye, be) {
      var Me = ie(He, ye, be);
      if (Me === 1 / 0) ee = null;
      else {
        ee = ee || [];
        for (var Ke = 0; Ke < He.length; Ke++) ee[Ke] = He[Ke] + ye[Ke] * Me
      }
      return ee
    }, ee.exports.distance = ie
  },
  38543: (ee, ie, He) => {
    var ye = He(38552);

    function be(ee) {
      for (var ie, He, be = 0, Me = ee.length, Ke = 0; Ke < ee.length;) {
        for (ie = ee[Ke], He = 0; Ke < Me && ee[Ke] === ie;) ++Ke, ++He;
        be += ye.log2(He) / 7 | 0, be += ye.log2(ie >>> 0) / 7 | 0, be += 2
      }
      return be
    }
    ie.size = be, ie.encode = function(ee, ie) {
      ie || (ie = new Uint8Array(be(ee)));
      for (var He, ye, Me = 0, Ke = ie.length, Ue = 0; Ue < ee.length;) {
        for (He = ee[Ue], ye = 0; Ue < ee.length && ee[Ue] === He;) ++Ue, ++ye;
        for (; Me < Ke && ye >= 128;) ie[Me++] = 128 + (127 & ye), ye >>>= 7;
        if (Me >= Ke) throw new Error("RLE buffer overflow");
        for (ie[Me++] = ye, He >>>= 0; Me < Ke && He >= 128;) ie[Me++] = 128 + (127 & He), He >>>= 7;
        if (Me >= Ke) throw new Error("RLE buffer overflow");
        ie[Me++] = He
      }
      return ie
    }, ie.decode = function(ee, ie) {
      for (var He, ye, be, Me, Ke = ie.length, Ue = ee.length, Fe = 0, Je = 0; Je < Ue;) {
        for (He = 0, ye = 0; Je < Ue && ee[Je] >= 128;) He += (127 & ee[Je++]) << ye, ye += 7;
        if (He += ee[Je++] << ye, Je >= Ue) throw new Error("RLE buffer underrun");
        if (Fe + He > Ke) throw new Error("Chunk buffer overflow");
        for (be = 0, ye = 0; Je < Ue && ee[Je] >= 128;) be += (127 & ee[Je++]) << ye, ye += 7;
        if (Je >= Ue) throw new Error("RLE buffer underrun");
        for (be += ee[Je++] << ye, Me = 0; Me < He; ++Me) ie[Fe++] = be
      }
      return ie
    }
  },
  38552: (ee, ie) => {
    function He(ee) {
      var ie = 32;
      return (ee &= -ee) && ie--, 65535 & ee && (ie -= 16), 16711935 & ee && (ie -= 8), 252645135 & ee && (ie -= 4), 858993459 & ee && (ie -= 2), 1431655765 & ee && (ie -= 1), ie
    }
    ie.INT_BITS = 32, ie.INT_MAX = 2147483647, ie.INT_MIN = -1 << 31, ie.sign = function(ee) {
      return (ee > 0) - (ee < 0)
    }, ie.abs = function(ee) {
      var ie = ee >> 31;
      return (ee ^ ie) - ie
    }, ie.min = function(ee, ie) {
      return ie ^ (ee ^ ie) & -(ee < ie)
    }, ie.max = function(ee, ie) {
      return ee ^ (ee ^ ie) & -(ee < ie)
    }, ie.isPow2 = function(ee) {
      return !(ee & ee - 1) && !!ee
    }, ie.log2 = function(ee) {
      var ie, He;
      return ie = (ee > 65535) << 4, ie |= He = ((ee >>>= ie) > 255) << 3, ie |= He = ((ee >>>= He) > 15) << 2, (ie |= He = ((ee >>>= He) > 3) << 1) | (ee >>>= He) >> 1
    }, ie.log10 = function(ee) {
      return ee >= 1e9 ? 9 : ee >= 1e8 ? 8 : ee >= 1e7 ? 7 : ee >= 1e6 ? 6 : ee >= 1e5 ? 5 : ee >= 1e4 ? 4 : ee >= 1e3 ? 3 : ee >= 100 ? 2 : ee >= 10 ? 1 : 0
    }, ie.popCount = function(ee) {
      return 16843009 * ((ee = (858993459 & (ee -= ee >>> 1 & 1431655765)) + (ee >>> 2 & 858993459)) + (ee >>> 4) & 252645135) >>> 24
    }, ie.countTrailingZeros = He, ie.nextPow2 = function(ee) {
      return ee += 0 === ee, --ee, ee |= ee >>> 1, ee |= ee >>> 2, ee |= ee >>> 4, ee |= ee >>> 8, (ee |= ee >>> 16) + 1
    }, ie.prevPow2 = function(ee) {
      return ee |= ee >>> 1, ee |= ee >>> 2, ee |= ee >>> 4, ee |= ee >>> 8, (ee |= ee >>> 16) - (ee >>> 1)
    }, ie.parity = function(ee) {
      return ee ^= ee >>> 16, ee ^= ee >>> 8, ee ^= ee >>> 4, 27030 >>> (ee &= 15) & 1
    };
    var ye = new Array(256);
    ! function(ee) {
      for (var ie = 0; ie < 256; ++ie) {
        var He = ie,
          ye = ie,
          be = 7;
        for (He >>>= 1; He; He >>>= 1) ye <<= 1, ye |= 1 & He, --be;
        ee[ie] = ye << be & 255
      }
    }(ye), ie.reverse = function(ee) {
      return ye[255 & ee] << 24 | ye[ee >>> 8 & 255] << 16 | ye[ee >>> 16 & 255] << 8 | ye[ee >>> 24 & 255]
    }, ie.interleave2 = function(ee, ie) {
      return (ee = 1431655765 & ((ee = 858993459 & ((ee = 252645135 & ((ee = 16711935 & ((ee &= 65535) | ee << 8)) | ee << 4)) | ee << 2)) | ee << 1)) | (ie = 1431655765 & ((ie = 858993459 & ((ie = 252645135 & ((ie = 16711935 & ((ie &= 65535) | ie << 8)) | ie << 4)) | ie << 2)) | ie << 1)) << 1
    }, ie.deinterleave2 = function(ee, ie) {
      return (ee = 65535 & ((ee = 16711935 & ((ee = 252645135 & ((ee = 858993459 & ((ee = ee >>> ie & 1431655765) | ee >>> 1)) | ee >>> 2)) | ee >>> 4)) | ee >>> 16)) << 16 >> 16
    }, ie.interleave3 = function(ee, ie, He) {
      return ee = 1227133513 & ((ee = 3272356035 & ((ee = 251719695 & ((ee = 4278190335 & ((ee &= 1023) | ee << 16)) | ee << 8)) | ee << 4)) | ee << 2), (ee |= (ie = 1227133513 & ((ie = 3272356035 & ((ie = 251719695 & ((ie = 4278190335 & ((ie &= 1023) | ie << 16)) | ie << 8)) | ie << 4)) | ie << 2)) << 1) | (He = 1227133513 & ((He = 3272356035 & ((He = 251719695 & ((He = 4278190335 & ((He &= 1023) | He << 16)) | He << 8)) | He << 4)) | He << 2)) << 2
    }, ie.deinterleave3 = function(ee, ie) {
      return (ee = 1023 & ((ee = 4278190335 & ((ee = 251719695 & ((ee = 3272356035 & ((ee = ee >>> ie & 1227133513) | ee >>> 2)) | ee >>> 4)) | ee >>> 8)) | ee >>> 16)) << 22 >> 22
    }, ie.nextCombination = function(ee) {
      var ie = ee | ee - 1;
      return ie + 1 | (~ie & -~ie) - 1 >>> He(ee) + 1
    }
  },
  38020: (ee, ie, He) => {
    He.d(ie, {
      Color3: () => ye.c,
      e: () => ye.g
    });
    var ye = He(38022);
    (0, ye.h)()
  },
  38581: (ee, ie, He) => {
    He.d(ie, {
      e: () => be
    });
    var ye = He(38590);
    class be {
      static GetPlanes(ee) {
        const ie = [];
        for (let He = 0; He < 6; He++) ie.push(new ye.c(0, 0, 0, 0));
        return be.GetPlanesToRef(ee, ie), ie
      }
      static GetNearPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] + He[2], ie.normal.y = He[7] + He[6], ie.normal.z = He[11] + He[10], ie.d = He[15] + He[14], ie.normalize()
      }
      static GetFarPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] - He[2], ie.normal.y = He[7] - He[6], ie.normal.z = He[11] - He[10], ie.d = He[15] - He[14], ie.normalize()
      }
      static GetLeftPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] + He[0], ie.normal.y = He[7] + He[4], ie.normal.z = He[11] + He[8], ie.d = He[15] + He[12], ie.normalize()
      }
      static GetRightPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] - He[0], ie.normal.y = He[7] - He[4], ie.normal.z = He[11] - He[8], ie.d = He[15] - He[12], ie.normalize()
      }
      static GetTopPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] - He[1], ie.normal.y = He[7] - He[5], ie.normal.z = He[11] - He[9], ie.d = He[15] - He[13], ie.normalize()
      }
      static GetBottomPlaneToRef(ee, ie) {
        const He = ee.m;
        ie.normal.x = He[3] + He[1], ie.normal.y = He[7] + He[5], ie.normal.z = He[11] + He[9], ie.d = He[15] + He[13], ie.normalize()
      }
      static GetPlanesToRef(ee, ie) {
        be.GetNearPlaneToRef(ee, ie[0]), be.GetFarPlaneToRef(ee, ie[1]), be.GetLeftPlaneToRef(ee, ie[2]), be.GetRightPlaneToRef(ee, ie[3]), be.GetTopPlaneToRef(ee, ie[4]), be.GetBottomPlaneToRef(ee, ie[5])
      }
      static IsPointInFrustum(ee, ie) {
        for (let He = 0; He < 6; He++)
          if (ie[He].dotCoordinate(ee) < 0) return !1;
        return !0
      }
    }
  },
  38590: (ee, ie, He) => {
    He.d(ie, {
      c: () => be
    });
    var ye = He(37917);
    class be {
      constructor(ee, ie, He, be) {
        this.normal = new ye.p(ee, ie, He), this.d = be
      }
      Qbe() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new be(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let ee = this.normal.getHashCode();
        return ee = 397 * ee ^ this.d, ee
      }
      normalize() {
        const ee = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let ie = 0;
        return 0 !== ee && (ie = 1 / ee), this.normal.x *= ie, this.normal.y *= ie, this.normal.z *= ie, this.d *= ie, this
      }
      transform(ee) {
        const ie = be._TmpMatrix;
        ee.invertToRef(ie);
        const He = ie.m,
          ye = this.normal.x,
          Me = this.normal.y,
          Ke = this.normal.z,
          Ue = this.d,
          Fe = ye * He[0] + Me * He[1] + Ke * He[2] + Ue * He[3],
          Je = ye * He[4] + Me * He[5] + Ke * He[6] + Ue * He[7],
          oe = ye * He[8] + Me * He[9] + Ke * He[10] + Ue * He[11],
          Re = ye * He[12] + Me * He[13] + Ke * He[14] + Ue * He[15];
        return new be(Fe, Je, oe, Re)
      }
      dotCoordinate(ee) {
        return this.normal.x * ee.x + this.normal.y * ee.y + this.normal.z * ee.z + this.d
      }
      copyFromPoints(ee, ie, He) {
        const ye = ie.x - ee.x,
          be = ie.y - ee.y,
          Me = ie.z - ee.z,
          Ke = He.x - ee.x,
          Ue = He.y - ee.y,
          Fe = He.z - ee.z,
          Je = be * Fe - Me * Ue,
          oe = Me * Ke - ye * Fe,
          Re = ye * Ue - be * Ke,
          ke = Math.sqrt(Je * Je + oe * oe + Re * Re);
        let qe;
        return qe = 0 !== ke ? 1 / ke : 0, this.normal.x = Je * qe, this.normal.y = oe * qe, this.normal.z = Re * qe, this.d = -(this.normal.x * ee.x + this.normal.y * ee.y + this.normal.z * ee.z), this
      }
      isFrontFacingTo(ee, ie) {
        return ye.p.Dot(this.normal, ee) <= ie
      }
      signedDistanceTo(ee) {
        return ye.p.Dot(ee, this.normal) + this.d
      }
      static FromArray(ee) {
        return new be(ee[0], ee[1], ee[2], ee[3])
      }
      static FromPoints(ee, ie, He) {
        const ye = new be(0, 0, 0, 0);
        return ye.copyFromPoints(ee, ie, He), ye
      }
      static FromPositionAndNormal(ee, ie) {
        const He = new be(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(ee, ie, He)
      }
      static FromPositionAndNormalToRef(ee, ie, He) {
        return He.normal.jD(ie), He.normal.normalize(), He.d = -ee.dot(He.normal), He
      }
      static SignedDistanceToPlaneFromPositionAndNormal(ee, ie, He) {
        const be = -(ie.x * ee.x + ie.y * ee.y + ie.z * ee.z);
        return ye.p.Dot(He, ie) + be
      }
    }
    be._TmpMatrix = ye.b.Identity()
  },
  37913: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      Matrix: () => ye.b,
      Quaternion: () => ye.f,
      RegisterMathVector: () => ye.h,
      TmpVectors: () => ye.j,
      Vector2: () => ye.n,
      rf: () => ye.p,
      Vector4: () => ye.s
    });
    var ye = He(37917);
    (0, ye.h)()
  },
  38919: (ee, ie, He) => {
    He.d(ie, {
      d: () => ye
    });
    class ye {
      constructor(ee, ie, He, ye) {
        this.x = ee, this.y = ie, this.width = He, this.height = ye
      }
      toGlobal(ee, ie) {
        return new ye(this.x * ee, this.y * ie, this.width * ee, this.height * ie)
      }
      toGlobalToRef(ee, ie, He) {
        return He.x = this.x * ee, He.y = this.y * ie, He.width = this.width * ee, He.height = this.height * ie, this
      }
      clone() {
        return new ye(this.x, this.y, this.width, this.height)
      }
    }
  },
  38745: (ee, ie, He) => {
    function ye() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (ee => {
        const ie = 16 * Math.random() | 0;
        return ("x" === ee ? ie : 3 & ie | 8).toString(16)
      }))
    }
    He.d(ie, {
      d: () => ye
    })
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);