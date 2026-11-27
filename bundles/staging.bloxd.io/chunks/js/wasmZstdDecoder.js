(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var ee = __webpack_require__.u,
        ie = __webpack_require__.e,
        He = {},
        ye = {};
      __webpack_require__.u = function(ie) {
        return ee(ie) + (He.hasOwnProperty(ie) ? "?" + He[ie] : "")
      }, __webpack_require__.e = function(be) {
        return ie(be).catch((function(ie) {
          var Me = ye.hasOwnProperty(be) ? ye[be] : 4;
          if (Me < 1) {
            var Ke = ee(be);
            if (ie.message = "Loading chunk " + be + " failed after 4 retries.\n(" + Ke + ")", ie.request = Ke, He[be] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete ye[be]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === ie.code) {
              var Ue = __webpack_require__.miniCssF(be);
              ie.message = ie.message.replace("Loading chunk", "Loading CSS chunk").replace(Ke, Ue), ie.request = Ue
            }
            throw ie
          }
          return new Promise((function(ee) {
            var ie = 4 - Me + 1;
            setTimeout((function() {
              var ie = "cache-bust=" + Date.now();
              He[be] = ie, ye[be] = Me - 1, ee(__webpack_require__.e(be))
            }), function(ee) {
              return 500 * Math.pow(2, ee)
            }(ie))
          }))
        }))
      }
    }
  })();

  function ee(ee) {
    return ee instanceof Error ? ee.message : String(ee)
  }
  const ie = ArrayBuffer,
    He = Uint8Array,
    ye = Uint16Array,
    be = Int16Array,
    Me = Int32Array,
    Ke = (ee, ie, ye) => {
      if (He.prototype.slice) return He.prototype.slice.call(ee, ie, ye);
      (null == ie || ie < 0) && (ie = 0), (null == ye || ye > ee.length) && (ye = ee.length);
      const be = new He(ye - ie);
      return be.set(ee.subarray(ie, ye)), be
    },
    Ue = (ee, ie, ye, be) => {
      if (He.prototype.fill) return He.prototype.fill.call(ee, ie, ye, be);
      for ((null == ye || ye < 0) && (ye = 0), (null == be || be > ee.length) && (be = ee.length); ye < be; ++ye) ee[ye] = ie;
      return ee
    },
    Fe = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    Je = (ee, ie, He) => {
      const ye = new Error(ie || Fe[ee]);
      if (ye.code = ee, Error.captureStackTrace && Error.captureStackTrace(ye, Je), !He) throw ye;
      return ye
    },
    oe = (ee, ie, He) => {
      let ye = 0,
        be = 0;
      for (; ye < He; ++ye) be |= ee[ie++] << (ye << 3);
      return be
    },
    Re = (ee, ie) => {
      const ye = ee[0] | ee[1] << 8 | ee[2] << 16;
      if (3126568 == ye && 253 == ee[3]) {
        const ye = ee[4],
          be = ye >> 5 & 1,
          Ke = ye >> 2 & 1,
          Ue = 3 & ye,
          Fe = ye >> 6;
        8 & ye && Je(0);
        let Re = 6 - be;
        const ke = 3 == Ue ? 4 : Ue,
          qe = oe(ee, Re, ke);
        Re += ke;
        const fe = Fe ? 1 << Fe : be,
          Te = oe(ee, Re, fe) + (1 == Fe && 256);
        let pe = Te;
        if (!be) {
          const ie = 1 << 10 + (ee[5] >> 3);
          pe = ie + (ie >> 3) * (7 & ee[5])
        }
        pe > 2145386496 && Je(1);
        const Xe = new He((1 == ie ? Te || pe : ie ? 0 : pe) + 12);
        return Xe[0] = 1, Xe[4] = 4, Xe[8] = 8, {
          b: Re + fe,
          y: 0,
          l: 0,
          d: qe,
          w: ie && 1 != ie ? ie : Xe.subarray(12),
          e: pe,
          o: new Me(Xe.buffer, 0, 3),
          u: Te,
          c: Ke,
          m: Math.min(131072, pe)
        }
      }
      if (25481893 == (ye >> 4 | ee[3] << 20)) return 8 + (((be = ee)[Ke = 4] | be[Ke + 1] << 8 | be[Ke + 2] << 16 | be[Ke + 3] << 24) >>> 0);
      var be, Ke;
      Je(0)
    },
    ke = ee => {
      let ie = 0;
      for (; 1 << ie <= ee; ++ie);
      return ie - 1
    },
    qe = (ee, Me, Ke) => {
      let Ue = 4 + (Me << 3);
      const Fe = 5 + (15 & ee[Me]);
      Fe > Ke && Je(3);
      const oe = 1 << Fe;
      let Re = oe,
        qe = -1,
        fe = -1,
        Te = -1,
        pe = oe;
      const Xe = new ie(512 + (oe << 2)),
        ze = new be(Xe, 0, 256),
        Be = new ye(Xe, 0, 256),
        Ee = new ye(Xe, 512, oe),
        ge = 512 + (oe << 1),
        Oe = new He(Xe, ge, oe),
        de = new He(Xe, ge + oe);
      for (; qe < 255 && Re > 0;) {
        const ie = ke(Re + 1),
          He = Ue >> 3,
          ye = (1 << ie + 1) - 1;
        let be = (ee[He] | ee[He + 1] << 8 | ee[He + 2] << 16) >> (7 & Ue) & ye;
        const Me = (1 << ie) - 1,
          Ke = ye - Re - 1,
          Fe = be & Me;
        if (Fe < Ke ? (Ue += ie, be = Fe) : (Ue += ie + 1, be > Me && (be -= Ke)), ze[++qe] = --be, -1 == be ? (Re += be, Oe[--pe] = qe) : Re -= be, !be)
          do {
            const ie = Ue >> 3;
            fe = (ee[ie] | ee[ie + 1] << 8) >> (7 & Ue) & 3, Ue += 2, qe += fe
          } while (3 == fe)
      }(qe > 255 || Re) && Je(0);
      let We = 0;
      const te = (oe >> 1) + (oe >> 3) + 3,
        Ze = oe - 1;
      for (let ie = 0; ie <= qe; ++ie) {
        const ee = ze[ie];
        if (ee < 1) Be[ie] = -ee;
        else
          for (Te = 0; Te < ee; ++Te) {
            Oe[We] = ie;
            do {
              We = We + te & Ze
            } while (We >= pe)
          }
      }
      for (We && Je(0), Te = 0; Te < oe; ++Te) {
        const ee = Be[Oe[Te]]++,
          ie = de[Te] = Fe - ke(ee);
        Ee[Te] = (ee << ie) - oe
      }
      return [Ue + 7 >> 3, {
        b: Fe,
        s: Oe,
        n: de,
        t: Ee
      }]
    },
    fe = qe(new He([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    Te = qe(new He([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    pe = qe(new He([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    Xe = (ee, ie) => {
      const He = ee.length,
        ye = new Me(He);
      for (let be = 0; be < He; ++be) ye[be] = ie, ie += 1 << ee[be];
      return ye
    },
    ze = new He(new Me([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    Be = Xe(ze, 0),
    Ee = new He(new Me([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    ge = Xe(Ee, 3),
    Oe = (ee, ie, He) => {
      const ye = ee.length,
        be = ie.length,
        Me = ee[ye - 1],
        Ke = (1 << He.b) - 1,
        Ue = -He.b;
      Me || Je(0);
      let Fe = 0,
        oe = He.b,
        Re = (ye << 3) - 8 + ke(Me) - oe,
        qe = -1;
      for (; Re > Ue && qe < be;) {
        const ye = Re >> 3;
        Fe = (Fe << oe | (ee[ye] | ee[ye + 1] << 8 | ee[ye + 2] << 16) >> (7 & Re)) & Ke, ie[++qe] = He.s[Fe], Re -= oe = He.n[Fe]
      }
      Re == Ue && qe + 1 == be || Je(0)
    },
    de = (ee, ie, He) => {
      let ye = 6;
      const be = ie.length + 3 >> 2,
        Me = be << 1,
        Ke = be + Me;
      Oe(ee.subarray(ye, ye += ee[0] | ee[1] << 8), ie.subarray(0, be), He), Oe(ee.subarray(ye, ye += ee[2] | ee[3] << 8), ie.subarray(be, Me), He), Oe(ee.subarray(ye, ye += ee[4] | ee[5] << 8), ie.subarray(Me, Ke), He), Oe(ee.subarray(ye), ie.subarray(Ke), He)
    },
    We = (ee, ie, be) => {
      let Me = ie.b;
      const Fe = ee[Me],
        oe = Fe >> 1 & 3;
      ie.l = 1 & Fe;
      const Re = Fe >> 3 | ee[Me + 1] << 5 | ee[Me + 2] << 13,
        Xe = (Me += 3) + Re;
      if (1 == oe) {
        if (Me >= ee.length) return;
        return ie.b = Me + 1, be ? (Ue(be, ee[Me], ie.y, ie.y += Re), be) : Ue(new He(Re), ee[Me])
      }
      if (!(Xe > ee.length)) {
        if (0 == oe) return ie.b = Xe, be ? (be.set(ee.subarray(Me, Xe), ie.y), ie.y += Re, be) : Ke(ee, Me, Xe);
        if (2 == oe) {
          const Fe = ee[Me],
            oe = 3 & Fe,
            Re = Fe >> 2 & 3;
          let We = Fe >> 4,
            te = 0,
            Ze = 0;
          oe < 2 ? 1 & Re ? We |= ee[++Me] << 4 | (2 & Re && ee[++Me] << 12) : We = Fe >> 3 : (Ze = Re, Re < 2 ? (We |= (63 & ee[++Me]) << 4, te = ee[Me] >> 6 | ee[++Me] << 2) : 2 == Re ? (We |= ee[++Me] << 4 | (3 & ee[++Me]) << 12, te = ee[Me] >> 2 | ee[++Me] << 6) : (We |= ee[++Me] << 4 | (63 & ee[++Me]) << 12, te = ee[Me] >> 6 | ee[++Me] << 2 | ee[++Me] << 10)), ++Me;
          let we = be ? be.subarray(ie.y, ie.y + ie.m) : new He(ie.m),
            De = we.length - We;
          if (De < 0 && Je(0), 0 == oe) we.set(ee.subarray(Me, Me += We), De);
          else if (1 == oe) Ue(we, ee[Me++], De);
          else {
            let be = ie.h;
            if (2 == oe) {
              const Ke = ((ee, ie) => {
                let be = 0,
                  Me = -1;
                const Ke = new He(292),
                  Fe = ee[ie],
                  oe = Ke.subarray(0, 256),
                  Re = Ke.subarray(256, 268),
                  fe = new ye(Ke.buffer, 268);
                if (Fe < 128) {
                  const [He, ye] = qe(ee, ie + 1, 6), be = He << 3, Ke = ee[ie += Fe];
                  Ke || Je(0);
                  let Ue = 0,
                    Re = 0,
                    fe = ye.b,
                    Te = fe,
                    pe = (++ie << 3) - 8 + ke(Ke);
                  for (; Me > 254 && Je(0), pe -= fe, !(pe < be);) {
                    let ie = pe >> 3;
                    if (Ue += (ee[ie] | ee[ie + 1] << 8) >> (7 & pe) & (1 << fe) - 1, oe[++Me] = ye.s[Ue], pe -= Te, pe < be) break;
                    ie = pe >> 3, Re += (ee[ie] | ee[ie + 1] << 8) >> (7 & pe) & (1 << Te) - 1, oe[++Me] = ye.s[Re], fe = ye.n[Ue], Ue = ye.t[Ue], Te = ye.n[Re], Re = ye.t[Re]
                  }++Me > 255 && Je(0)
                } else {
                  for (Me = Fe - 127; be < Me; be += 2) {
                    const He = ee[++ie];
                    oe[be] = He >> 4, oe[be + 1] = 15 & He
                  }++ie
                }
                let Te = 0;
                for (be = 0; be < Me; ++be) {
                  const ee = oe[be];
                  ee > 11 && Je(0), Te += ee && 1 << ee - 1
                }
                const pe = ke(Te) + 1,
                  Xe = 1 << pe,
                  ze = Xe - Te;
                for (ze & ze - 1 && Je(0), oe[Me++] = ke(ze) + 1, be = 0; be < Me; ++be) {
                  const ee = oe[be];
                  ++Re[oe[be] = ee && pe + 1 - ee]
                }
                const Be = new He(Xe << 1),
                  Ee = Be.subarray(0, Xe),
                  ge = Be.subarray(Xe);
                for (fe[pe] = 0, be = pe; be > 0; --be) {
                  const ee = fe[be];
                  Ue(ge, be, ee, fe[be - 1] = ee + Re[be] * (1 << pe - be))
                }
                for (fe[0] != Xe && Je(0), be = 0; be < Me; ++be) {
                  const ee = oe[be];
                  if (ee) {
                    const ie = fe[ee];
                    Ue(Ee, be, ie, fe[ee] = ie + (1 << pe - ee))
                  }
                }
                return [ie, {
                  n: ge,
                  b: pe,
                  s: Ee
                }]
              })(ee, Me);
              te += Me - (Me = Ke[0]), ie.h = be = Ke[1]
            } else be || Je(0);
            (Ze ? de : Oe)(ee.subarray(Me, Me += te), we.subarray(De), be)
          }
          let Pe = ee[Me++];
          if (Pe) {
            255 == Pe ? Pe = 32512 + (ee[Me++] | ee[Me++] << 8) : Pe > 127 && (Pe = Pe - 128 << 8 | ee[Me++]);
            const Ue = ee[Me++];
            3 & Ue && Je(0);
            const Fe = [Te, pe, fe];
            for (let be = 2; be > -1; --be) {
              const Ke = Ue >> 2 + (be << 1) & 3;
              if (1 == Ke) {
                const ie = new He([0, 0, ee[Me++]]);
                Fe[be] = {
                  s: ie.subarray(2, 3),
                  n: ie.subarray(0, 1),
                  t: new ye(ie.buffer, 0, 1),
                  b: 0
                }
              } else 2 == Ke ? [Me, Fe[be]] = qe(ee, Me, 9 - (1 & be)) : 3 == Ke && (ie.t || Je(0), Fe[be] = ie.t[be])
            }
            const [oe, Re, Oe] = ie.t = Fe, de = ee[Xe - 1];
            de || Je(0);
            let We = (Xe << 3) - 8 + ke(de) - Oe.b,
              te = We >> 3,
              Ze = 0,
              Ae = (ee[te] | ee[te + 1] << 8) >> (7 & We) & (1 << Oe.b) - 1;
            te = (We -= Re.b) >> 3;
            let Ye = (ee[te] | ee[te + 1] << 8) >> (7 & We) & (1 << Re.b) - 1;
            te = (We -= oe.b) >> 3;
            let Ve = (ee[te] | ee[te + 1] << 8) >> (7 & We) & (1 << oe.b) - 1;
            for (++Pe; --Pe;) {
              const He = Oe.s[Ae],
                ye = Oe.n[Ae],
                be = oe.s[Ve],
                Me = oe.n[Ve],
                Ke = Re.s[Ye],
                Ue = Re.n[Ye];
              te = (We -= Ke) >> 3;
              const Fe = 1 << Ke;
              let ke = Fe + ((ee[te] | ee[te + 1] << 8 | ee[te + 2] << 16 | ee[te + 3] << 24) >>> (7 & We) & Fe - 1);
              te = (We -= Ee[be]) >> 3;
              let qe = ge[be] + ((ee[te] | ee[te + 1] << 8 | ee[te + 2] << 16) >> (7 & We) & (1 << Ee[be]) - 1);
              te = (We -= ze[He]) >> 3;
              const fe = Be[He] + ((ee[te] | ee[te + 1] << 8 | ee[te + 2] << 16) >> (7 & We) & (1 << ze[He]) - 1);
              if ((We < 0 || De + fe > we.length || Ze + fe + qe > we.length) && Je(0), te = (We -= ye) >> 3, Ae = Oe.t[Ae] + ((ee[te] | ee[te + 1] << 8) >> (7 & We) & (1 << ye) - 1), te = (We -= Me) >> 3, Ve = oe.t[Ve] + ((ee[te] | ee[te + 1] << 8) >> (7 & We) & (1 << Me) - 1), te = (We -= Ue) >> 3, Ye = Re.t[Ye] + ((ee[te] | ee[te + 1] << 8) >> (7 & We) & (1 << Ue) - 1), ke > 3) ie.o[2] = ie.o[1], ie.o[1] = ie.o[0], ie.o[0] = ke -= 3;
              else {
                const ee = ke - (0 != fe);
                ee ? (ke = 3 == ee ? ie.o[0] - 1 : ie.o[ee], ee > 1 && (ie.o[2] = ie.o[1]), ie.o[1] = ie.o[0], ie.o[0] = ke) : ke = ie.o[0]
              }
              for (let ee = 0; ee < fe; ++ee) we[Ze + ee] = we[De + ee];
              Ze += fe, De += fe;
              let Te = Ze - ke;
              if (Te < 0) {
                let ee = -Te;
                const He = ie.e + Te;
                He < 0 && Je(4), ee > qe && (ee = qe);
                for (let ye = 0; ye < ee; ++ye) we[Ze + ye] = ie.w[He + ye];
                Ze += ee, qe -= ee, Te = 0
              }
              for (let ee = 0; ee < qe; ++ee) we[Ze + ee] = we[Te + ee];
              Ze += qe
            }
            if (Ze != De)
              for (; De < we.length;) we[Ze++] = we[De++];
            else Ze = we.length;
            be ? ie.y += Ze : we = Ke(we, 0, Ze)
          } else if (be) {
            if (ie.y += We, De)
              for (let ee = 0; ee < We; ++ee) we[ee] = we[De + ee]
          } else De && (we = Ke(we, De));
          return ie.b = Xe, we
        }
        Je(2)
      }
    };
  class te {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    lJ = 0;
    needed = 18;
    size;
    constructor(ee) {
      this.size = ee
    }
    push(ee) {
      if (this.done) return;
      if (this.parts.push(ee), this.lJ += ee.length, this.lJ < this.needed) return;
      const ie = ((ee, ie) => {
        if (1 == ee.length) return ee[0];
        const ye = new He(ie);
        for (let He = 0, be = 0; He < ee.length; ++He) {
          const ie = ee[He];
          ye.set(ie, be), be += ie.length
        }
        return ye
      })(this.parts, this.lJ);
      let ye = this.st;
      if (!ye) {
        const ee = Re(ie, new He(0));
        "number" != typeof ee && ee.u === this.size || Je(0, `not a zstd frame of ${this.size} bytes`), ye = this.st = Re(ie, 1), ye.e = 0, this.output = ye.w
      }
      for (;;) {
        const ee = ie.length - ye.b;
        if (ee < 3) {
          this.needed = 3;
          break
        }
        const He = ie[ye.b],
          be = He >> 1 & 3;
        3 == be && Je(2);
        const Me = He >> 3 | ie[ye.b + 1] << 5 | ie[ye.b + 2] << 13;
        Me > ye.m && Je(0), 0 == be && ye.y + Me > ye.u && Je(0);
        const Ke = 1 == be ? 4 : 3 + Me;
        if (ee < Ke) {
          this.needed = Ke;
          break
        }
        if (We(ie, ye, ye.w) || Je(5), ye.e = ye.y, (ye.y > ye.u || ye.l && ye.y != ye.u) && Je(0), ye.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = ye.y;
      const be = ie.subarray(ye.b);
      this.parts = be.length ? [be] : [], this.lJ = be.length, ye.b = 0
    }
  }
  class Ze {
    post;
    href = "";
    kR = null;
    given = 0;
    stopped = !1;
    constructor(ee) {
      this.post = ee
    }
    take(ie) {
      if (!this.stopped) try {
        this.answer(ie)
      } catch (He) {
        this.stop(He instanceof RangeError ? `out of memory decoding ${this.href}: ${ee(He)}` : `${this.href} did not decode: ${ee(He)}`)
      }
    }
    answer(ee) {
      if (null === this.kR) {
        const [ie, He] = ee;
        return this.href = ie, void(this.kR = new te(He))
      }
      if (null === ee) return void this.stop(`${this.href} ended before its module did`);
      const ie = this.kR;
      ie.push(ee);
      const {
        output: He,
        decoded: ye
      } = ie;
      if (null !== He && ye > this.given) {
        const ee = He.slice(this.given, ye).buffer;
        this.given = ye, this.post(ee, [ee])
      }
      ie.done && this.stop(!0)
    }
    stop(ee) {
      this.stopped = !0, this.post(ee)
    }
  }
  const we = globalThis.WorkerGlobalScope;
  if (void 0 !== we && globalThis instanceof we) {
    const ee = globalThis,
      ie = new Ze((function(ie) {
        let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        ee.postMessage(ie, He)
      }));
    ee.addEventListener("message", (ee => {
      let {
        data: He
      } = ee;
      ie.take(He)
    }))
  }
})();