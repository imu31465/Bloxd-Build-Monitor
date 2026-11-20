(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var TT = __webpack_require__.u,
        kT = __webpack_require__.e,
        cT = {},
        lT = {};
      __webpack_require__.u = function(kT) {
        return TT(kT) + (cT.hasOwnProperty(kT) ? "?" + cT[kT] : "")
      }, __webpack_require__.e = function(MT) {
        return kT(MT).catch((function(kT) {
          var KT = lT.hasOwnProperty(MT) ? lT[MT] : 4;
          if (KT < 1) {
            var OT = TT(MT);
            throw kT.message = "Loading chunk " + MT + " failed after 4 retries.\n(" + OT + ")", kT.request = OT, cT[MT] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete lT[MT]
            }), 0), kT
          }
          return new Promise((function(TT) {
            var kT = 4 - KT + 1;
            setTimeout((function() {
              var kT = "cache-bust=" + Date.now();
              cT[MT] = kT, lT[MT] = KT - 1, TT(__webpack_require__.e(MT))
            }), function(TT) {
              return 500 * Math.pow(2, TT)
            }(kT))
          }))
        }))
      }
    }
  })();

  function TT(TT) {
    return TT instanceof Error ? TT.message : String(TT)
  }
  const kT = ArrayBuffer,
    cT = Uint8Array,
    lT = Uint16Array,
    MT = Int16Array,
    KT = Int32Array,
    OT = (TT, kT, lT) => {
      if (cT.prototype.slice) return cT.prototype.slice.call(TT, kT, lT);
      (null == kT || kT < 0) && (kT = 0), (null == lT || lT > TT.length) && (lT = TT.length);
      const MT = new cT(lT - kT);
      return MT.set(TT.subarray(kT, lT)), MT
    },
    yT = (TT, kT, lT, MT) => {
      if (cT.prototype.fill) return cT.prototype.fill.call(TT, kT, lT, MT);
      for ((null == lT || lT < 0) && (lT = 0), (null == MT || MT > TT.length) && (MT = TT.length); lT < MT; ++lT) TT[lT] = kT;
      return TT
    },
    fT = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    xT = (TT, kT, cT) => {
      const lT = new Error(kT || fT[TT]);
      if (lT.code = TT, Error.captureStackTrace && Error.captureStackTrace(lT, xT), !cT) throw lT;
      return lT
    },
    IT = (TT, kT, cT) => {
      let lT = 0,
        MT = 0;
      for (; lT < cT; ++lT) MT |= TT[kT++] << (lT << 3);
      return MT
    },
    AT = (TT, kT) => {
      const lT = TT[0] | TT[1] << 8 | TT[2] << 16;
      if (3126568 == lT && 253 == TT[3]) {
        const lT = TT[4],
          MT = lT >> 5 & 1,
          OT = lT >> 2 & 1,
          yT = 3 & lT,
          fT = lT >> 6;
        8 & lT && xT(0);
        let AT = 6 - MT;
        const CT = 3 == yT ? 4 : yT,
          jT = IT(TT, AT, CT);
        AT += CT;
        const vT = fT ? 1 << fT : MT,
          tT = IT(TT, AT, vT) + (1 == fT && 256);
        let hT = tT;
        if (!MT) {
          const kT = 1 << 10 + (TT[5] >> 3);
          hT = kT + (kT >> 3) * (7 & TT[5])
        }
        hT > 2145386496 && xT(1);
        const NT = new cT((1 == kT ? tT || hT : kT ? 0 : hT) + 12);
        return NT[0] = 1, NT[4] = 4, NT[8] = 8, {
          b: AT + vT,
          y: 0,
          l: 0,
          d: jT,
          w: kT && 1 != kT ? kT : NT.subarray(12),
          e: hT,
          o: new KT(NT.buffer, 0, 3),
          u: tT,
          c: OT,
          m: Math.min(131072, hT)
        }
      }
      if (25481893 == (lT >> 4 | TT[3] << 20)) return 8 + (((MT = TT)[OT = 4] | MT[OT + 1] << 8 | MT[OT + 2] << 16 | MT[OT + 3] << 24) >>> 0);
      var MT, OT;
      xT(0)
    },
    CT = TT => {
      let kT = 0;
      for (; 1 << kT <= TT; ++kT);
      return kT - 1
    },
    jT = (TT, KT, OT) => {
      let yT = 4 + (KT << 3);
      const fT = 5 + (15 & TT[KT]);
      fT > OT && xT(3);
      const IT = 1 << fT;
      let AT = IT,
        jT = -1,
        vT = -1,
        tT = -1,
        hT = IT;
      const NT = new kT(512 + (IT << 2)),
        QT = new MT(NT, 0, 256),
        ST = new lT(NT, 0, 256),
        DT = new lT(NT, 512, IT),
        aT = 512 + (IT << 1),
        FT = new cT(NT, aT, IT),
        rT = new cT(NT, aT + IT);
      for (; jT < 255 && AT > 0;) {
        const kT = CT(AT + 1),
          cT = yT >> 3,
          lT = (1 << kT + 1) - 1;
        let MT = (TT[cT] | TT[cT + 1] << 8 | TT[cT + 2] << 16) >> (7 & yT) & lT;
        const KT = (1 << kT) - 1,
          OT = lT - AT - 1,
          fT = MT & KT;
        if (fT < OT ? (yT += kT, MT = fT) : (yT += kT + 1, MT > KT && (MT -= OT)), QT[++jT] = --MT, -1 == MT ? (AT += MT, FT[--hT] = jT) : AT -= MT, !MT)
          do {
            const kT = yT >> 3;
            vT = (TT[kT] | TT[kT + 1] << 8) >> (7 & yT) & 3, yT += 2, jT += vT
          } while (3 == vT)
      }(jT > 255 || AT) && xT(0);
      let PT = 0;
      const wT = (IT >> 1) + (IT >> 3) + 3,
        mT = IT - 1;
      for (let kT = 0; kT <= jT; ++kT) {
        const TT = QT[kT];
        if (TT < 1) ST[kT] = -TT;
        else
          for (tT = 0; tT < TT; ++tT) {
            FT[PT] = kT;
            do {
              PT = PT + wT & mT
            } while (PT >= hT)
          }
      }
      for (PT && xT(0), tT = 0; tT < IT; ++tT) {
        const TT = ST[FT[tT]]++,
          kT = rT[tT] = fT - CT(TT);
        DT[tT] = (TT << kT) - IT
      }
      return [yT + 7 >> 3, {
        b: fT,
        s: FT,
        n: rT,
        t: DT
      }]
    },
    vT = jT(new cT([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    tT = jT(new cT([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    hT = jT(new cT([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    NT = (TT, kT) => {
      const cT = TT.length,
        lT = new KT(cT);
      for (let MT = 0; MT < cT; ++MT) lT[MT] = kT, kT += 1 << TT[MT];
      return lT
    },
    QT = new cT(new KT([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    ST = NT(QT, 0),
    DT = new cT(new KT([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    aT = NT(DT, 3),
    FT = (TT, kT, cT) => {
      const lT = TT.length,
        MT = kT.length,
        KT = TT[lT - 1],
        OT = (1 << cT.b) - 1,
        yT = -cT.b;
      KT || xT(0);
      let fT = 0,
        IT = cT.b,
        AT = (lT << 3) - 8 + CT(KT) - IT,
        jT = -1;
      for (; AT > yT && jT < MT;) {
        const lT = AT >> 3;
        fT = (fT << IT | (TT[lT] | TT[lT + 1] << 8 | TT[lT + 2] << 16) >> (7 & AT)) & OT, kT[++jT] = cT.s[fT], AT -= IT = cT.n[fT]
      }
      AT == yT && jT + 1 == MT || xT(0)
    },
    rT = (TT, kT, cT) => {
      let lT = 6;
      const MT = kT.length + 3 >> 2,
        KT = MT << 1,
        OT = MT + KT;
      FT(TT.subarray(lT, lT += TT[0] | TT[1] << 8), kT.subarray(0, MT), cT), FT(TT.subarray(lT, lT += TT[2] | TT[3] << 8), kT.subarray(MT, KT), cT), FT(TT.subarray(lT, lT += TT[4] | TT[5] << 8), kT.subarray(KT, OT), cT), FT(TT.subarray(lT), kT.subarray(OT), cT)
    },
    PT = (TT, kT, MT) => {
      let KT = kT.b;
      const fT = TT[KT],
        IT = fT >> 1 & 3;
      kT.l = 1 & fT;
      const AT = fT >> 3 | TT[KT + 1] << 5 | TT[KT + 2] << 13,
        NT = (KT += 3) + AT;
      if (1 == IT) {
        if (KT >= TT.length) return;
        return kT.b = KT + 1, MT ? (yT(MT, TT[KT], kT.y, kT.y += AT), MT) : yT(new cT(AT), TT[KT])
      }
      if (!(NT > TT.length)) {
        if (0 == IT) return kT.b = NT, MT ? (MT.set(TT.subarray(KT, NT), kT.y), kT.y += AT, MT) : OT(TT, KT, NT);
        if (2 == IT) {
          const fT = TT[KT],
            IT = 3 & fT,
            AT = fT >> 2 & 3;
          let PT = fT >> 4,
            wT = 0,
            mT = 0;
          IT < 2 ? 1 & AT ? PT |= TT[++KT] << 4 | (2 & AT && TT[++KT] << 12) : PT = fT >> 3 : (mT = AT, AT < 2 ? (PT |= (63 & TT[++KT]) << 4, wT = TT[KT] >> 6 | TT[++KT] << 2) : 2 == AT ? (PT |= TT[++KT] << 4 | (3 & TT[++KT]) << 12, wT = TT[KT] >> 2 | TT[++KT] << 6) : (PT |= TT[++KT] << 4 | (63 & TT[++KT]) << 12, wT = TT[KT] >> 6 | TT[++KT] << 2 | TT[++KT] << 10)), ++KT;
          let bT = MT ? MT.subarray(kT.y, kT.y + kT.m) : new cT(kT.m),
            zT = bT.length - PT;
          if (zT < 0 && xT(0), 0 == IT) bT.set(TT.subarray(KT, KT += PT), zT);
          else if (1 == IT) yT(bT, TT[KT++], zT);
          else {
            let MT = kT.h;
            if (2 == IT) {
              const OT = ((TT, kT) => {
                let MT = 0,
                  KT = -1;
                const OT = new cT(292),
                  fT = TT[kT],
                  IT = OT.subarray(0, 256),
                  AT = OT.subarray(256, 268),
                  vT = new lT(OT.buffer, 268);
                if (fT < 128) {
                  const [cT, lT] = jT(TT, kT + 1, 6), MT = cT << 3, OT = TT[kT += fT];
                  OT || xT(0);
                  let yT = 0,
                    AT = 0,
                    vT = lT.b,
                    tT = vT,
                    hT = (++kT << 3) - 8 + CT(OT);
                  for (; KT > 254 && xT(0), hT -= vT, !(hT < MT);) {
                    let kT = hT >> 3;
                    if (yT += (TT[kT] | TT[kT + 1] << 8) >> (7 & hT) & (1 << vT) - 1, IT[++KT] = lT.s[yT], hT -= tT, hT < MT) break;
                    kT = hT >> 3, AT += (TT[kT] | TT[kT + 1] << 8) >> (7 & hT) & (1 << tT) - 1, IT[++KT] = lT.s[AT], vT = lT.n[yT], yT = lT.t[yT], tT = lT.n[AT], AT = lT.t[AT]
                  }++KT > 255 && xT(0)
                } else {
                  for (KT = fT - 127; MT < KT; MT += 2) {
                    const cT = TT[++kT];
                    IT[MT] = cT >> 4, IT[MT + 1] = 15 & cT
                  }++kT
                }
                let tT = 0;
                for (MT = 0; MT < KT; ++MT) {
                  const TT = IT[MT];
                  TT > 11 && xT(0), tT += TT && 1 << TT - 1
                }
                const hT = CT(tT) + 1,
                  NT = 1 << hT,
                  QT = NT - tT;
                for (QT & QT - 1 && xT(0), IT[KT++] = CT(QT) + 1, MT = 0; MT < KT; ++MT) {
                  const TT = IT[MT];
                  ++AT[IT[MT] = TT && hT + 1 - TT]
                }
                const ST = new cT(NT << 1),
                  DT = ST.subarray(0, NT),
                  aT = ST.subarray(NT);
                for (vT[hT] = 0, MT = hT; MT > 0; --MT) {
                  const TT = vT[MT];
                  yT(aT, MT, TT, vT[MT - 1] = TT + AT[MT] * (1 << hT - MT))
                }
                for (vT[0] != NT && xT(0), MT = 0; MT < KT; ++MT) {
                  const TT = IT[MT];
                  if (TT) {
                    const kT = vT[TT];
                    yT(DT, MT, kT, vT[TT] = kT + (1 << hT - TT))
                  }
                }
                return [kT, {
                  n: aT,
                  b: hT,
                  s: DT
                }]
              })(TT, KT);
              wT += KT - (KT = OT[0]), kT.h = MT = OT[1]
            } else MT || xT(0);
            (mT ? rT : FT)(TT.subarray(KT, KT += wT), bT.subarray(zT), MT)
          }
          let JT = TT[KT++];
          if (JT) {
            255 == JT ? JT = 32512 + (TT[KT++] | TT[KT++] << 8) : JT > 127 && (JT = JT - 128 << 8 | TT[KT++]);
            const yT = TT[KT++];
            3 & yT && xT(0);
            const fT = [tT, hT, vT];
            for (let MT = 2; MT > -1; --MT) {
              const OT = yT >> 2 + (MT << 1) & 3;
              if (1 == OT) {
                const kT = new cT([0, 0, TT[KT++]]);
                fT[MT] = {
                  s: kT.subarray(2, 3),
                  n: kT.subarray(0, 1),
                  t: new lT(kT.buffer, 0, 1),
                  b: 0
                }
              } else 2 == OT ? [KT, fT[MT]] = jT(TT, KT, 9 - (1 & MT)) : 3 == OT && (kT.t || xT(0), fT[MT] = kT.t[MT])
            }
            const [IT, AT, FT] = kT.t = fT, rT = TT[NT - 1];
            rT || xT(0);
            let PT = (NT << 3) - 8 + CT(rT) - FT.b,
              wT = PT >> 3,
              mT = 0,
              oT = (TT[wT] | TT[wT + 1] << 8) >> (7 & PT) & (1 << FT.b) - 1;
            wT = (PT -= AT.b) >> 3;
            let HT = (TT[wT] | TT[wT + 1] << 8) >> (7 & PT) & (1 << AT.b) - 1;
            wT = (PT -= IT.b) >> 3;
            let eT = (TT[wT] | TT[wT + 1] << 8) >> (7 & PT) & (1 << IT.b) - 1;
            for (++JT; --JT;) {
              const cT = FT.s[oT],
                lT = FT.n[oT],
                MT = IT.s[eT],
                KT = IT.n[eT],
                OT = AT.s[HT],
                yT = AT.n[HT];
              wT = (PT -= OT) >> 3;
              const fT = 1 << OT;
              let CT = fT + ((TT[wT] | TT[wT + 1] << 8 | TT[wT + 2] << 16 | TT[wT + 3] << 24) >>> (7 & PT) & fT - 1);
              wT = (PT -= DT[MT]) >> 3;
              let jT = aT[MT] + ((TT[wT] | TT[wT + 1] << 8 | TT[wT + 2] << 16) >> (7 & PT) & (1 << DT[MT]) - 1);
              wT = (PT -= QT[cT]) >> 3;
              const vT = ST[cT] + ((TT[wT] | TT[wT + 1] << 8 | TT[wT + 2] << 16) >> (7 & PT) & (1 << QT[cT]) - 1);
              if ((PT < 0 || zT + vT > bT.length || mT + vT + jT > bT.length) && xT(0), wT = (PT -= lT) >> 3, oT = FT.t[oT] + ((TT[wT] | TT[wT + 1] << 8) >> (7 & PT) & (1 << lT) - 1), wT = (PT -= KT) >> 3, eT = IT.t[eT] + ((TT[wT] | TT[wT + 1] << 8) >> (7 & PT) & (1 << KT) - 1), wT = (PT -= yT) >> 3, HT = AT.t[HT] + ((TT[wT] | TT[wT + 1] << 8) >> (7 & PT) & (1 << yT) - 1), CT > 3) kT.o[2] = kT.o[1], kT.o[1] = kT.o[0], kT.o[0] = CT -= 3;
              else {
                const TT = CT - (0 != vT);
                TT ? (CT = 3 == TT ? kT.o[0] - 1 : kT.o[TT], TT > 1 && (kT.o[2] = kT.o[1]), kT.o[1] = kT.o[0], kT.o[0] = CT) : CT = kT.o[0]
              }
              for (let TT = 0; TT < vT; ++TT) bT[mT + TT] = bT[zT + TT];
              mT += vT, zT += vT;
              let tT = mT - CT;
              if (tT < 0) {
                let TT = -tT;
                const cT = kT.e + tT;
                cT < 0 && xT(4), TT > jT && (TT = jT);
                for (let lT = 0; lT < TT; ++lT) bT[mT + lT] = kT.w[cT + lT];
                mT += TT, jT -= TT, tT = 0
              }
              for (let TT = 0; TT < jT; ++TT) bT[mT + TT] = bT[tT + TT];
              mT += jT
            }
            if (mT != zT)
              for (; zT < bT.length;) bT[mT++] = bT[zT++];
            else mT = bT.length;
            MT ? kT.y += mT : bT = OT(bT, 0, mT)
          } else if (MT) {
            if (kT.y += PT, zT)
              for (let TT = 0; TT < PT; ++TT) bT[TT] = bT[zT + TT]
          } else zT && (bT = OT(bT, zT));
          return kT.b = NT, bT
        }
        xT(2)
      }
    };
  class wT {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    ty = 0;
    needed = 18;
    size;
    constructor(TT) {
      this.size = TT
    }
    push(TT) {
      if (this.done) return;
      if (this.parts.push(TT), this.ty += TT.length, this.ty < this.needed) return;
      const kT = ((TT, kT) => {
        if (1 == TT.length) return TT[0];
        const lT = new cT(kT);
        for (let cT = 0, MT = 0; cT < TT.length; ++cT) {
          const kT = TT[cT];
          lT.set(kT, MT), MT += kT.length
        }
        return lT
      })(this.parts, this.ty);
      let lT = this.st;
      if (!lT) {
        const TT = AT(kT, new cT(0));
        "number" != typeof TT && TT.u === this.size || xT(0, `not a zstd frame of ${this.size} bytes`), lT = this.st = AT(kT, 1), lT.e = 0, this.output = lT.w
      }
      for (;;) {
        const TT = kT.length - lT.b;
        if (TT < 3) {
          this.needed = 3;
          break
        }
        const cT = kT[lT.b],
          MT = cT >> 1 & 3;
        3 == MT && xT(2);
        const KT = cT >> 3 | kT[lT.b + 1] << 5 | kT[lT.b + 2] << 13;
        KT > lT.m && xT(0), 0 == MT && lT.y + KT > lT.u && xT(0);
        const OT = 1 == MT ? 4 : 3 + KT;
        if (TT < OT) {
          this.needed = OT;
          break
        }
        if (PT(kT, lT, lT.w) || xT(5), lT.e = lT.y, (lT.y > lT.u || lT.l && lT.y != lT.u) && xT(0), lT.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = lT.y;
      const MT = kT.subarray(lT.b);
      this.parts = MT.length ? [MT] : [], this.ty = MT.length, lT.b = 0
    }
  }
  class mT {
    post;
    href = "";
    pj = null;
    given = 0;
    stopped = !1;
    constructor(TT) {
      this.post = TT
    }
    take(kT) {
      if (!this.stopped) try {
        this.answer(kT)
      } catch (cT) {
        this.stop(cT instanceof RangeError ? `out of memory decoding ${this.href}: ${TT(cT)}` : `${this.href} did not decode: ${TT(cT)}`)
      }
    }
    answer(TT) {
      if (null === this.pj) {
        const [kT, cT] = TT;
        return this.href = kT, void(this.pj = new wT(cT))
      }
      if (null === TT) return void this.stop(`${this.href} ended before its module did`);
      const kT = this.pj;
      kT.push(TT);
      const {
        output: cT,
        decoded: lT
      } = kT;
      if (null !== cT && lT > this.given) {
        const TT = cT.slice(this.given, lT).buffer;
        this.given = lT, this.post(TT, [TT])
      }
      kT.done && this.stop(!0)
    }
    stop(TT) {
      this.stopped = !0, this.post(TT)
    }
  }
  const bT = globalThis.WorkerGlobalScope;
  if (void 0 !== bT && globalThis instanceof bT) {
    const TT = globalThis,
      kT = new mT((function(kT) {
        let cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        TT.postMessage(kT, cT)
      }));
    TT.addEventListener("message", (TT => {
      let {
        data: cT
      } = TT;
      kT.take(cT)
    }))
  }
})();