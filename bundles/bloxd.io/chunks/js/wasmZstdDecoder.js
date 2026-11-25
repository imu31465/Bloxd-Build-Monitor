(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var uu = __webpack_require__.u,
        Eu = __webpack_require__.e,
        ju = {},
        su = {};
      __webpack_require__.u = function(Eu) {
        return uu(Eu) + (ju.hasOwnProperty(Eu) ? "?" + ju[Eu] : "")
      }, __webpack_require__.e = function(Uu) {
        return Eu(Uu).catch((function(Eu) {
          var Zu = su.hasOwnProperty(Uu) ? su[Uu] : 4;
          if (Zu < 1) {
            var Xu = uu(Uu);
            if (Eu.message = "Loading chunk " + Uu + " failed after 4 retries.\n(" + Xu + ")", Eu.request = Xu, ju[Uu] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete su[Uu]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === Eu.code) {
              var lu = __webpack_require__.miniCssF(Uu);
              Eu.message = Eu.message.replace("Loading chunk", "Loading CSS chunk").replace(Xu, lu), Eu.request = lu
            }
            throw Eu
          }
          return new Promise((function(uu) {
            var Eu = 4 - Zu + 1;
            setTimeout((function() {
              var Eu = "cache-bust=" + Date.now();
              ju[Uu] = Eu, su[Uu] = Zu - 1, uu(__webpack_require__.e(Uu))
            }), function(uu) {
              return 500 * Math.pow(2, uu)
            }(Eu))
          }))
        }))
      }
    }
  })();

  function uu(uu) {
    return uu instanceof Error ? uu.message : String(uu)
  }
  const Eu = ArrayBuffer,
    ju = Uint8Array,
    su = Uint16Array,
    Uu = Int16Array,
    Zu = Int32Array,
    Xu = (uu, Eu, su) => {
      if (ju.prototype.slice) return ju.prototype.slice.call(uu, Eu, su);
      (null == Eu || Eu < 0) && (Eu = 0), (null == su || su > uu.length) && (su = uu.length);
      const Uu = new ju(su - Eu);
      return Uu.set(uu.subarray(Eu, su)), Uu
    },
    lu = (uu, Eu, su, Uu) => {
      if (ju.prototype.fill) return ju.prototype.fill.call(uu, Eu, su, Uu);
      for ((null == su || su < 0) && (su = 0), (null == Uu || Uu > uu.length) && (Uu = uu.length); su < Uu; ++su) uu[su] = Eu;
      return uu
    },
    qu = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    fu = (uu, Eu, ju) => {
      const su = new Error(Eu || qu[uu]);
      if (su.code = uu, Error.captureStackTrace && Error.captureStackTrace(su, fu), !ju) throw su;
      return su
    },
    Cu = (uu, Eu, ju) => {
      let su = 0,
        Uu = 0;
      for (; su < ju; ++su) Uu |= uu[Eu++] << (su << 3);
      return Uu
    },
    bu = (uu, Eu) => {
      const su = uu[0] | uu[1] << 8 | uu[2] << 16;
      if (3126568 == su && 253 == uu[3]) {
        const su = uu[4],
          Uu = su >> 5 & 1,
          Xu = su >> 2 & 1,
          lu = 3 & su,
          qu = su >> 6;
        8 & su && fu(0);
        let bu = 6 - Uu;
        const cu = 3 == lu ? 4 : lu,
          Nu = Cu(uu, bu, cu);
        bu += cu;
        const Ou = qu ? 1 << qu : Uu,
          Yu = Cu(uu, bu, Ou) + (1 == qu && 256);
        let hu = Yu;
        if (!Uu) {
          const Eu = 1 << 10 + (uu[5] >> 3);
          hu = Eu + (Eu >> 3) * (7 & uu[5])
        }
        hu > 2145386496 && fu(1);
        const Du = new ju((1 == Eu ? Yu || hu : Eu ? 0 : hu) + 12);
        return Du[0] = 1, Du[4] = 4, Du[8] = 8, {
          b: bu + Ou,
          y: 0,
          l: 0,
          d: Nu,
          w: Eu && 1 != Eu ? Eu : Du.subarray(12),
          e: hu,
          o: new Zu(Du.buffer, 0, 3),
          u: Yu,
          c: Xu,
          m: Math.min(131072, hu)
        }
      }
      if (25481893 == (su >> 4 | uu[3] << 20)) return 8 + (((Uu = uu)[Xu = 4] | Uu[Xu + 1] << 8 | Uu[Xu + 2] << 16 | Uu[Xu + 3] << 24) >>> 0);
      var Uu, Xu;
      fu(0)
    },
    cu = uu => {
      let Eu = 0;
      for (; 1 << Eu <= uu; ++Eu);
      return Eu - 1
    },
    Nu = (uu, Zu, Xu) => {
      let lu = 4 + (Zu << 3);
      const qu = 5 + (15 & uu[Zu]);
      qu > Xu && fu(3);
      const Cu = 1 << qu;
      let bu = Cu,
        Nu = -1,
        Ou = -1,
        Yu = -1,
        hu = Cu;
      const Du = new Eu(512 + (Cu << 2)),
        gu = new Uu(Du, 0, 256),
        Mu = new su(Du, 0, 256),
        eu = new su(Du, 512, Cu),
        Gu = 512 + (Cu << 1),
        pu = new ju(Du, Gu, Cu),
        wu = new ju(Du, Gu + Cu);
      for (; Nu < 255 && bu > 0;) {
        const Eu = cu(bu + 1),
          ju = lu >> 3,
          su = (1 << Eu + 1) - 1;
        let Uu = (uu[ju] | uu[ju + 1] << 8 | uu[ju + 2] << 16) >> (7 & lu) & su;
        const Zu = (1 << Eu) - 1,
          Xu = su - bu - 1,
          qu = Uu & Zu;
        if (qu < Xu ? (lu += Eu, Uu = qu) : (lu += Eu + 1, Uu > Zu && (Uu -= Xu)), gu[++Nu] = --Uu, -1 == Uu ? (bu += Uu, pu[--hu] = Nu) : bu -= Uu, !Uu)
          do {
            const Eu = lu >> 3;
            Ou = (uu[Eu] | uu[Eu + 1] << 8) >> (7 & lu) & 3, lu += 2, Nu += Ou
          } while (3 == Ou)
      }(Nu > 255 || bu) && fu(0);
      let Ju = 0;
      const du = (Cu >> 1) + (Cu >> 3) + 3,
        au = Cu - 1;
      for (let Eu = 0; Eu <= Nu; ++Eu) {
        const uu = gu[Eu];
        if (uu < 1) Mu[Eu] = -uu;
        else
          for (Yu = 0; Yu < uu; ++Yu) {
            pu[Ju] = Eu;
            do {
              Ju = Ju + du & au
            } while (Ju >= hu)
          }
      }
      for (Ju && fu(0), Yu = 0; Yu < Cu; ++Yu) {
        const uu = Mu[pu[Yu]]++,
          Eu = wu[Yu] = qu - cu(uu);
        eu[Yu] = (uu << Eu) - Cu
      }
      return [lu + 7 >> 3, {
        b: qu,
        s: pu,
        n: wu,
        t: eu
      }]
    },
    Ou = Nu(new ju([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    Yu = Nu(new ju([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    hu = Nu(new ju([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    Du = (uu, Eu) => {
      const ju = uu.length,
        su = new Zu(ju);
      for (let Uu = 0; Uu < ju; ++Uu) su[Uu] = Eu, Eu += 1 << uu[Uu];
      return su
    },
    gu = new ju(new Zu([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    Mu = Du(gu, 0),
    eu = new ju(new Zu([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    Gu = Du(eu, 3),
    pu = (uu, Eu, ju) => {
      const su = uu.length,
        Uu = Eu.length,
        Zu = uu[su - 1],
        Xu = (1 << ju.b) - 1,
        lu = -ju.b;
      Zu || fu(0);
      let qu = 0,
        Cu = ju.b,
        bu = (su << 3) - 8 + cu(Zu) - Cu,
        Nu = -1;
      for (; bu > lu && Nu < Uu;) {
        const su = bu >> 3;
        qu = (qu << Cu | (uu[su] | uu[su + 1] << 8 | uu[su + 2] << 16) >> (7 & bu)) & Xu, Eu[++Nu] = ju.s[qu], bu -= Cu = ju.n[qu]
      }
      bu == lu && Nu + 1 == Uu || fu(0)
    },
    wu = (uu, Eu, ju) => {
      let su = 6;
      const Uu = Eu.length + 3 >> 2,
        Zu = Uu << 1,
        Xu = Uu + Zu;
      pu(uu.subarray(su, su += uu[0] | uu[1] << 8), Eu.subarray(0, Uu), ju), pu(uu.subarray(su, su += uu[2] | uu[3] << 8), Eu.subarray(Uu, Zu), ju), pu(uu.subarray(su, su += uu[4] | uu[5] << 8), Eu.subarray(Zu, Xu), ju), pu(uu.subarray(su), Eu.subarray(Xu), ju)
    },
    Ju = (uu, Eu, Uu) => {
      let Zu = Eu.b;
      const qu = uu[Zu],
        Cu = qu >> 1 & 3;
      Eu.l = 1 & qu;
      const bu = qu >> 3 | uu[Zu + 1] << 5 | uu[Zu + 2] << 13,
        Du = (Zu += 3) + bu;
      if (1 == Cu) {
        if (Zu >= uu.length) return;
        return Eu.b = Zu + 1, Uu ? (lu(Uu, uu[Zu], Eu.y, Eu.y += bu), Uu) : lu(new ju(bu), uu[Zu])
      }
      if (!(Du > uu.length)) {
        if (0 == Cu) return Eu.b = Du, Uu ? (Uu.set(uu.subarray(Zu, Du), Eu.y), Eu.y += bu, Uu) : Xu(uu, Zu, Du);
        if (2 == Cu) {
          const qu = uu[Zu],
            Cu = 3 & qu,
            bu = qu >> 2 & 3;
          let Ju = qu >> 4,
            du = 0,
            au = 0;
          Cu < 2 ? 1 & bu ? Ju |= uu[++Zu] << 4 | (2 & bu && uu[++Zu] << 12) : Ju = qu >> 3 : (au = bu, bu < 2 ? (Ju |= (63 & uu[++Zu]) << 4, du = uu[Zu] >> 6 | uu[++Zu] << 2) : 2 == bu ? (Ju |= uu[++Zu] << 4 | (3 & uu[++Zu]) << 12, du = uu[Zu] >> 2 | uu[++Zu] << 6) : (Ju |= uu[++Zu] << 4 | (63 & uu[++Zu]) << 12, du = uu[Zu] >> 6 | uu[++Zu] << 2 | uu[++Zu] << 10)), ++Zu;
          let Pu = Uu ? Uu.subarray(Eu.y, Eu.y + Eu.m) : new ju(Eu.m),
            ou = Pu.length - Ju;
          if (ou < 0 && fu(0), 0 == Cu) Pu.set(uu.subarray(Zu, Zu += Ju), ou);
          else if (1 == Cu) lu(Pu, uu[Zu++], ou);
          else {
            let Uu = Eu.h;
            if (2 == Cu) {
              const Xu = ((uu, Eu) => {
                let Uu = 0,
                  Zu = -1;
                const Xu = new ju(292),
                  qu = uu[Eu],
                  Cu = Xu.subarray(0, 256),
                  bu = Xu.subarray(256, 268),
                  Ou = new su(Xu.buffer, 268);
                if (qu < 128) {
                  const [ju, su] = Nu(uu, Eu + 1, 6), Uu = ju << 3, Xu = uu[Eu += qu];
                  Xu || fu(0);
                  let lu = 0,
                    bu = 0,
                    Ou = su.b,
                    Yu = Ou,
                    hu = (++Eu << 3) - 8 + cu(Xu);
                  for (; Zu > 254 && fu(0), hu -= Ou, !(hu < Uu);) {
                    let Eu = hu >> 3;
                    if (lu += (uu[Eu] | uu[Eu + 1] << 8) >> (7 & hu) & (1 << Ou) - 1, Cu[++Zu] = su.s[lu], hu -= Yu, hu < Uu) break;
                    Eu = hu >> 3, bu += (uu[Eu] | uu[Eu + 1] << 8) >> (7 & hu) & (1 << Yu) - 1, Cu[++Zu] = su.s[bu], Ou = su.n[lu], lu = su.t[lu], Yu = su.n[bu], bu = su.t[bu]
                  }++Zu > 255 && fu(0)
                } else {
                  for (Zu = qu - 127; Uu < Zu; Uu += 2) {
                    const ju = uu[++Eu];
                    Cu[Uu] = ju >> 4, Cu[Uu + 1] = 15 & ju
                  }++Eu
                }
                let Yu = 0;
                for (Uu = 0; Uu < Zu; ++Uu) {
                  const uu = Cu[Uu];
                  uu > 11 && fu(0), Yu += uu && 1 << uu - 1
                }
                const hu = cu(Yu) + 1,
                  Du = 1 << hu,
                  gu = Du - Yu;
                for (gu & gu - 1 && fu(0), Cu[Zu++] = cu(gu) + 1, Uu = 0; Uu < Zu; ++Uu) {
                  const uu = Cu[Uu];
                  ++bu[Cu[Uu] = uu && hu + 1 - uu]
                }
                const Mu = new ju(Du << 1),
                  eu = Mu.subarray(0, Du),
                  Gu = Mu.subarray(Du);
                for (Ou[hu] = 0, Uu = hu; Uu > 0; --Uu) {
                  const uu = Ou[Uu];
                  lu(Gu, Uu, uu, Ou[Uu - 1] = uu + bu[Uu] * (1 << hu - Uu))
                }
                for (Ou[0] != Du && fu(0), Uu = 0; Uu < Zu; ++Uu) {
                  const uu = Cu[Uu];
                  if (uu) {
                    const Eu = Ou[uu];
                    lu(eu, Uu, Eu, Ou[uu] = Eu + (1 << hu - uu))
                  }
                }
                return [Eu, {
                  n: Gu,
                  b: hu,
                  s: eu
                }]
              })(uu, Zu);
              du += Zu - (Zu = Xu[0]), Eu.h = Uu = Xu[1]
            } else Uu || fu(0);
            (au ? wu : pu)(uu.subarray(Zu, Zu += du), Pu.subarray(ou), Uu)
          }
          let ku = uu[Zu++];
          if (ku) {
            255 == ku ? ku = 32512 + (uu[Zu++] | uu[Zu++] << 8) : ku > 127 && (ku = ku - 128 << 8 | uu[Zu++]);
            const lu = uu[Zu++];
            3 & lu && fu(0);
            const qu = [Yu, hu, Ou];
            for (let Uu = 2; Uu > -1; --Uu) {
              const Xu = lu >> 2 + (Uu << 1) & 3;
              if (1 == Xu) {
                const Eu = new ju([0, 0, uu[Zu++]]);
                qu[Uu] = {
                  s: Eu.subarray(2, 3),
                  n: Eu.subarray(0, 1),
                  t: new su(Eu.buffer, 0, 1),
                  b: 0
                }
              } else 2 == Xu ? [Zu, qu[Uu]] = Nu(uu, Zu, 9 - (1 & Uu)) : 3 == Xu && (Eu.t || fu(0), qu[Uu] = Eu.t[Uu])
            }
            const [Cu, bu, pu] = Eu.t = qu, wu = uu[Du - 1];
            wu || fu(0);
            let Ju = (Du << 3) - 8 + cu(wu) - pu.b,
              du = Ju >> 3,
              au = 0,
              mu = (uu[du] | uu[du + 1] << 8) >> (7 & Ju) & (1 << pu.b) - 1;
            du = (Ju -= bu.b) >> 3;
            let vu = (uu[du] | uu[du + 1] << 8) >> (7 & Ju) & (1 << bu.b) - 1;
            du = (Ju -= Cu.b) >> 3;
            let Ku = (uu[du] | uu[du + 1] << 8) >> (7 & Ju) & (1 << Cu.b) - 1;
            for (++ku; --ku;) {
              const ju = pu.s[mu],
                su = pu.n[mu],
                Uu = Cu.s[Ku],
                Zu = Cu.n[Ku],
                Xu = bu.s[vu],
                lu = bu.n[vu];
              du = (Ju -= Xu) >> 3;
              const qu = 1 << Xu;
              let cu = qu + ((uu[du] | uu[du + 1] << 8 | uu[du + 2] << 16 | uu[du + 3] << 24) >>> (7 & Ju) & qu - 1);
              du = (Ju -= eu[Uu]) >> 3;
              let Nu = Gu[Uu] + ((uu[du] | uu[du + 1] << 8 | uu[du + 2] << 16) >> (7 & Ju) & (1 << eu[Uu]) - 1);
              du = (Ju -= gu[ju]) >> 3;
              const Ou = Mu[ju] + ((uu[du] | uu[du + 1] << 8 | uu[du + 2] << 16) >> (7 & Ju) & (1 << gu[ju]) - 1);
              if ((Ju < 0 || ou + Ou > Pu.length || au + Ou + Nu > Pu.length) && fu(0), du = (Ju -= su) >> 3, mu = pu.t[mu] + ((uu[du] | uu[du + 1] << 8) >> (7 & Ju) & (1 << su) - 1), du = (Ju -= Zu) >> 3, Ku = Cu.t[Ku] + ((uu[du] | uu[du + 1] << 8) >> (7 & Ju) & (1 << Zu) - 1), du = (Ju -= lu) >> 3, vu = bu.t[vu] + ((uu[du] | uu[du + 1] << 8) >> (7 & Ju) & (1 << lu) - 1), cu > 3) Eu.o[2] = Eu.o[1], Eu.o[1] = Eu.o[0], Eu.o[0] = cu -= 3;
              else {
                const uu = cu - (0 != Ou);
                uu ? (cu = 3 == uu ? Eu.o[0] - 1 : Eu.o[uu], uu > 1 && (Eu.o[2] = Eu.o[1]), Eu.o[1] = Eu.o[0], Eu.o[0] = cu) : cu = Eu.o[0]
              }
              for (let uu = 0; uu < Ou; ++uu) Pu[au + uu] = Pu[ou + uu];
              au += Ou, ou += Ou;
              let Yu = au - cu;
              if (Yu < 0) {
                let uu = -Yu;
                const ju = Eu.e + Yu;
                ju < 0 && fu(4), uu > Nu && (uu = Nu);
                for (let su = 0; su < uu; ++su) Pu[au + su] = Eu.w[ju + su];
                au += uu, Nu -= uu, Yu = 0
              }
              for (let uu = 0; uu < Nu; ++uu) Pu[au + uu] = Pu[Yu + uu];
              au += Nu
            }
            if (au != ou)
              for (; ou < Pu.length;) Pu[au++] = Pu[ou++];
            else au = Pu.length;
            Uu ? Eu.y += au : Pu = Xu(Pu, 0, au)
          } else if (Uu) {
            if (Eu.y += Ju, ou)
              for (let uu = 0; uu < Ju; ++uu) Pu[uu] = Pu[ou + uu]
          } else ou && (Pu = Xu(Pu, ou));
          return Eu.b = Du, Pu
        }
        fu(2)
      }
    };
  class du {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    dl = 0;
    needed = 18;
    size;
    constructor(uu) {
      this.size = uu
    }
    push(uu) {
      if (this.done) return;
      if (this.parts.push(uu), this.dl += uu.length, this.dl < this.needed) return;
      const Eu = ((uu, Eu) => {
        if (1 == uu.length) return uu[0];
        const su = new ju(Eu);
        for (let ju = 0, Uu = 0; ju < uu.length; ++ju) {
          const Eu = uu[ju];
          su.set(Eu, Uu), Uu += Eu.length
        }
        return su
      })(this.parts, this.dl);
      let su = this.st;
      if (!su) {
        const uu = bu(Eu, new ju(0));
        "number" != typeof uu && uu.u === this.size || fu(0, `not a zstd frame of ${this.size} bytes`), su = this.st = bu(Eu, 1), su.e = 0, this.output = su.w
      }
      for (;;) {
        const uu = Eu.length - su.b;
        if (uu < 3) {
          this.needed = 3;
          break
        }
        const ju = Eu[su.b],
          Uu = ju >> 1 & 3;
        3 == Uu && fu(2);
        const Zu = ju >> 3 | Eu[su.b + 1] << 5 | Eu[su.b + 2] << 13;
        Zu > su.m && fu(0), 0 == Uu && su.y + Zu > su.u && fu(0);
        const Xu = 1 == Uu ? 4 : 3 + Zu;
        if (uu < Xu) {
          this.needed = Xu;
          break
        }
        if (Ju(Eu, su, su.w) || fu(5), su.e = su.y, (su.y > su.u || su.l && su.y != su.u) && fu(0), su.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = su.y;
      const Uu = Eu.subarray(su.b);
      this.parts = Uu.length ? [Uu] : [], this.dl = Uu.length, su.b = 0
    }
  }
  class au {
    post;
    href = "";
    zN = null;
    given = 0;
    stopped = !1;
    constructor(uu) {
      this.post = uu
    }
    take(Eu) {
      if (!this.stopped) try {
        this.answer(Eu)
      } catch (ju) {
        this.stop(ju instanceof RangeError ? `out of memory decoding ${this.href}: ${uu(ju)}` : `${this.href} did not decode: ${uu(ju)}`)
      }
    }
    answer(uu) {
      if (null === this.zN) {
        const [Eu, ju] = uu;
        return this.href = Eu, void(this.zN = new du(ju))
      }
      if (null === uu) return void this.stop(`${this.href} ended before its module did`);
      const Eu = this.zN;
      Eu.push(uu);
      const {
        output: ju,
        decoded: su
      } = Eu;
      if (null !== ju && su > this.given) {
        const uu = ju.slice(this.given, su).buffer;
        this.given = su, this.post(uu, [uu])
      }
      Eu.done && this.stop(!0)
    }
    stop(uu) {
      this.stopped = !0, this.post(uu)
    }
  }
  const Pu = globalThis.WorkerGlobalScope;
  if (void 0 !== Pu && globalThis instanceof Pu) {
    const uu = globalThis,
      Eu = new au((function(Eu) {
        let ju = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        uu.postMessage(Eu, ju)
      }));
    uu.addEventListener("message", (uu => {
      let {
        data: ju
      } = uu;
      Eu.take(ju)
    }))
  }
})();