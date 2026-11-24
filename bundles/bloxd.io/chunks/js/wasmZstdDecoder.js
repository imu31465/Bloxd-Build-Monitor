(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var TT = __webpack_require__.u,
        UT = __webpack_require__.e,
        mT = {},
        WT = {};
      __webpack_require__.u = function(UT) {
        return TT(UT) + (mT.hasOwnProperty(UT) ? "?" + mT[UT] : "")
      }, __webpack_require__.e = function(zT) {
        return UT(zT).catch((function(UT) {
          var MT = WT.hasOwnProperty(zT) ? WT[zT] : 4;
          if (MT < 1) {
            var gT = TT(zT);
            if (UT.message = "Loading chunk " + zT + " failed after 4 retries.\n(" + gT + ")", UT.request = gT, mT[zT] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete WT[zT]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === UT.code) {
              var nT = __webpack_require__.miniCssF(zT);
              UT.message = UT.message.replace("Loading chunk", "Loading CSS chunk").replace(gT, nT), UT.request = nT
            }
            throw UT
          }
          return new Promise((function(TT) {
            var UT = 4 - MT + 1;
            setTimeout((function() {
              var UT = "cache-bust=" + Date.now();
              mT[zT] = UT, WT[zT] = MT - 1, TT(__webpack_require__.e(zT))
            }), function(TT) {
              return 500 * Math.pow(2, TT)
            }(UT))
          }))
        }))
      }
    }
  })();

  function TT(TT) {
    return TT instanceof Error ? TT.message : String(TT)
  }
  const UT = ArrayBuffer,
    mT = Uint8Array,
    WT = Uint16Array,
    zT = Int16Array,
    MT = Int32Array,
    gT = (TT, UT, WT) => {
      if (mT.prototype.slice) return mT.prototype.slice.call(TT, UT, WT);
      (null == UT || UT < 0) && (UT = 0), (null == WT || WT > TT.length) && (WT = TT.length);
      const zT = new mT(WT - UT);
      return zT.set(TT.subarray(UT, WT)), zT
    },
    nT = (TT, UT, WT, zT) => {
      if (mT.prototype.fill) return mT.prototype.fill.call(TT, UT, WT, zT);
      for ((null == WT || WT < 0) && (WT = 0), (null == zT || zT > TT.length) && (zT = TT.length); WT < zT; ++WT) TT[WT] = UT;
      return TT
    },
    HT = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    kT = (TT, UT, mT) => {
      const WT = new Error(UT || HT[TT]);
      if (WT.code = TT, Error.captureStackTrace && Error.captureStackTrace(WT, kT), !mT) throw WT;
      return WT
    },
    jT = (TT, UT, mT) => {
      let WT = 0,
        zT = 0;
      for (; WT < mT; ++WT) zT |= TT[UT++] << (WT << 3);
      return zT
    },
    lT = (TT, UT) => {
      const WT = TT[0] | TT[1] << 8 | TT[2] << 16;
      if (3126568 == WT && 253 == TT[3]) {
        const WT = TT[4],
          zT = WT >> 5 & 1,
          gT = WT >> 2 & 1,
          nT = 3 & WT,
          HT = WT >> 6;
        8 & WT && kT(0);
        let lT = 6 - zT;
        const LT = 3 == nT ? 4 : nT,
          pT = jT(TT, lT, LT);
        lT += LT;
        const BT = HT ? 1 << HT : zT,
          ZT = jT(TT, lT, BT) + (1 == HT && 256);
        let cT = ZT;
        if (!zT) {
          const UT = 1 << 10 + (TT[5] >> 3);
          cT = UT + (UT >> 3) * (7 & TT[5])
        }
        cT > 2145386496 && kT(1);
        const vT = new mT((1 == UT ? ZT || cT : UT ? 0 : cT) + 12);
        return vT[0] = 1, vT[4] = 4, vT[8] = 8, {
          b: lT + BT,
          y: 0,
          l: 0,
          d: pT,
          w: UT && 1 != UT ? UT : vT.subarray(12),
          e: cT,
          o: new MT(vT.buffer, 0, 3),
          u: ZT,
          c: gT,
          m: Math.min(131072, cT)
        }
      }
      if (25481893 == (WT >> 4 | TT[3] << 20)) return 8 + (((zT = TT)[gT = 4] | zT[gT + 1] << 8 | zT[gT + 2] << 16 | zT[gT + 3] << 24) >>> 0);
      var zT, gT;
      kT(0)
    },
    LT = TT => {
      let UT = 0;
      for (; 1 << UT <= TT; ++UT);
      return UT - 1
    },
    pT = (TT, MT, gT) => {
      let nT = 4 + (MT << 3);
      const HT = 5 + (15 & TT[MT]);
      HT > gT && kT(3);
      const jT = 1 << HT;
      let lT = jT,
        pT = -1,
        BT = -1,
        ZT = -1,
        cT = jT;
      const vT = new UT(512 + (jT << 2)),
        fT = new zT(vT, 0, 256),
        qT = new WT(vT, 0, 256),
        iT = new WT(vT, 512, jT),
        bT = 512 + (jT << 1),
        OT = new mT(vT, bT, jT),
        eT = new mT(vT, bT + jT);
      for (; pT < 255 && lT > 0;) {
        const UT = LT(lT + 1),
          mT = nT >> 3,
          WT = (1 << UT + 1) - 1;
        let zT = (TT[mT] | TT[mT + 1] << 8 | TT[mT + 2] << 16) >> (7 & nT) & WT;
        const MT = (1 << UT) - 1,
          gT = WT - lT - 1,
          HT = zT & MT;
        if (HT < gT ? (nT += UT, zT = HT) : (nT += UT + 1, zT > MT && (zT -= gT)), fT[++pT] = --zT, -1 == zT ? (lT += zT, OT[--cT] = pT) : lT -= zT, !zT)
          do {
            const UT = nT >> 3;
            BT = (TT[UT] | TT[UT + 1] << 8) >> (7 & nT) & 3, nT += 2, pT += BT
          } while (3 == BT)
      }(pT > 255 || lT) && kT(0);
      let YT = 0;
      const JT = (jT >> 1) + (jT >> 3) + 3,
        xT = jT - 1;
      for (let UT = 0; UT <= pT; ++UT) {
        const TT = fT[UT];
        if (TT < 1) qT[UT] = -TT;
        else
          for (ZT = 0; ZT < TT; ++ZT) {
            OT[YT] = UT;
            do {
              YT = YT + JT & xT
            } while (YT >= cT)
          }
      }
      for (YT && kT(0), ZT = 0; ZT < jT; ++ZT) {
        const TT = qT[OT[ZT]]++,
          UT = eT[ZT] = HT - LT(TT);
        iT[ZT] = (TT << UT) - jT
      }
      return [nT + 7 >> 3, {
        b: HT,
        s: OT,
        n: eT,
        t: iT
      }]
    },
    BT = pT(new mT([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    ZT = pT(new mT([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    cT = pT(new mT([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    vT = (TT, UT) => {
      const mT = TT.length,
        WT = new MT(mT);
      for (let zT = 0; zT < mT; ++zT) WT[zT] = UT, UT += 1 << TT[zT];
      return WT
    },
    fT = new mT(new MT([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    qT = vT(fT, 0),
    iT = new mT(new MT([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    bT = vT(iT, 3),
    OT = (TT, UT, mT) => {
      const WT = TT.length,
        zT = UT.length,
        MT = TT[WT - 1],
        gT = (1 << mT.b) - 1,
        nT = -mT.b;
      MT || kT(0);
      let HT = 0,
        jT = mT.b,
        lT = (WT << 3) - 8 + LT(MT) - jT,
        pT = -1;
      for (; lT > nT && pT < zT;) {
        const WT = lT >> 3;
        HT = (HT << jT | (TT[WT] | TT[WT + 1] << 8 | TT[WT + 2] << 16) >> (7 & lT)) & gT, UT[++pT] = mT.s[HT], lT -= jT = mT.n[HT]
      }
      lT == nT && pT + 1 == zT || kT(0)
    },
    eT = (TT, UT, mT) => {
      let WT = 6;
      const zT = UT.length + 3 >> 2,
        MT = zT << 1,
        gT = zT + MT;
      OT(TT.subarray(WT, WT += TT[0] | TT[1] << 8), UT.subarray(0, zT), mT), OT(TT.subarray(WT, WT += TT[2] | TT[3] << 8), UT.subarray(zT, MT), mT), OT(TT.subarray(WT, WT += TT[4] | TT[5] << 8), UT.subarray(MT, gT), mT), OT(TT.subarray(WT), UT.subarray(gT), mT)
    },
    YT = (TT, UT, zT) => {
      let MT = UT.b;
      const HT = TT[MT],
        jT = HT >> 1 & 3;
      UT.l = 1 & HT;
      const lT = HT >> 3 | TT[MT + 1] << 5 | TT[MT + 2] << 13,
        vT = (MT += 3) + lT;
      if (1 == jT) {
        if (MT >= TT.length) return;
        return UT.b = MT + 1, zT ? (nT(zT, TT[MT], UT.y, UT.y += lT), zT) : nT(new mT(lT), TT[MT])
      }
      if (!(vT > TT.length)) {
        if (0 == jT) return UT.b = vT, zT ? (zT.set(TT.subarray(MT, vT), UT.y), UT.y += lT, zT) : gT(TT, MT, vT);
        if (2 == jT) {
          const HT = TT[MT],
            jT = 3 & HT,
            lT = HT >> 2 & 3;
          let YT = HT >> 4,
            JT = 0,
            xT = 0;
          jT < 2 ? 1 & lT ? YT |= TT[++MT] << 4 | (2 & lT && TT[++MT] << 12) : YT = HT >> 3 : (xT = lT, lT < 2 ? (YT |= (63 & TT[++MT]) << 4, JT = TT[MT] >> 6 | TT[++MT] << 2) : 2 == lT ? (YT |= TT[++MT] << 4 | (3 & TT[++MT]) << 12, JT = TT[MT] >> 2 | TT[++MT] << 6) : (YT |= TT[++MT] << 4 | (63 & TT[++MT]) << 12, JT = TT[MT] >> 6 | TT[++MT] << 2 | TT[++MT] << 10)), ++MT;
          let dT = zT ? zT.subarray(UT.y, UT.y + UT.m) : new mT(UT.m),
            wT = dT.length - YT;
          if (wT < 0 && kT(0), 0 == jT) dT.set(TT.subarray(MT, MT += YT), wT);
          else if (1 == jT) nT(dT, TT[MT++], wT);
          else {
            let zT = UT.h;
            if (2 == jT) {
              const gT = ((TT, UT) => {
                let zT = 0,
                  MT = -1;
                const gT = new mT(292),
                  HT = TT[UT],
                  jT = gT.subarray(0, 256),
                  lT = gT.subarray(256, 268),
                  BT = new WT(gT.buffer, 268);
                if (HT < 128) {
                  const [mT, WT] = pT(TT, UT + 1, 6), zT = mT << 3, gT = TT[UT += HT];
                  gT || kT(0);
                  let nT = 0,
                    lT = 0,
                    BT = WT.b,
                    ZT = BT,
                    cT = (++UT << 3) - 8 + LT(gT);
                  for (; MT > 254 && kT(0), cT -= BT, !(cT < zT);) {
                    let UT = cT >> 3;
                    if (nT += (TT[UT] | TT[UT + 1] << 8) >> (7 & cT) & (1 << BT) - 1, jT[++MT] = WT.s[nT], cT -= ZT, cT < zT) break;
                    UT = cT >> 3, lT += (TT[UT] | TT[UT + 1] << 8) >> (7 & cT) & (1 << ZT) - 1, jT[++MT] = WT.s[lT], BT = WT.n[nT], nT = WT.t[nT], ZT = WT.n[lT], lT = WT.t[lT]
                  }++MT > 255 && kT(0)
                } else {
                  for (MT = HT - 127; zT < MT; zT += 2) {
                    const mT = TT[++UT];
                    jT[zT] = mT >> 4, jT[zT + 1] = 15 & mT
                  }++UT
                }
                let ZT = 0;
                for (zT = 0; zT < MT; ++zT) {
                  const TT = jT[zT];
                  TT > 11 && kT(0), ZT += TT && 1 << TT - 1
                }
                const cT = LT(ZT) + 1,
                  vT = 1 << cT,
                  fT = vT - ZT;
                for (fT & fT - 1 && kT(0), jT[MT++] = LT(fT) + 1, zT = 0; zT < MT; ++zT) {
                  const TT = jT[zT];
                  ++lT[jT[zT] = TT && cT + 1 - TT]
                }
                const qT = new mT(vT << 1),
                  iT = qT.subarray(0, vT),
                  bT = qT.subarray(vT);
                for (BT[cT] = 0, zT = cT; zT > 0; --zT) {
                  const TT = BT[zT];
                  nT(bT, zT, TT, BT[zT - 1] = TT + lT[zT] * (1 << cT - zT))
                }
                for (BT[0] != vT && kT(0), zT = 0; zT < MT; ++zT) {
                  const TT = jT[zT];
                  if (TT) {
                    const UT = BT[TT];
                    nT(iT, zT, UT, BT[TT] = UT + (1 << cT - TT))
                  }
                }
                return [UT, {
                  n: bT,
                  b: cT,
                  s: iT
                }]
              })(TT, MT);
              JT += MT - (MT = gT[0]), UT.h = zT = gT[1]
            } else zT || kT(0);
            (xT ? eT : OT)(TT.subarray(MT, MT += JT), dT.subarray(wT), zT)
          }
          let tT = TT[MT++];
          if (tT) {
            255 == tT ? tT = 32512 + (TT[MT++] | TT[MT++] << 8) : tT > 127 && (tT = tT - 128 << 8 | TT[MT++]);
            const nT = TT[MT++];
            3 & nT && kT(0);
            const HT = [ZT, cT, BT];
            for (let zT = 2; zT > -1; --zT) {
              const gT = nT >> 2 + (zT << 1) & 3;
              if (1 == gT) {
                const UT = new mT([0, 0, TT[MT++]]);
                HT[zT] = {
                  s: UT.subarray(2, 3),
                  n: UT.subarray(0, 1),
                  t: new WT(UT.buffer, 0, 1),
                  b: 0
                }
              } else 2 == gT ? [MT, HT[zT]] = pT(TT, MT, 9 - (1 & zT)) : 3 == gT && (UT.t || kT(0), HT[zT] = UT.t[zT])
            }
            const [jT, lT, OT] = UT.t = HT, eT = TT[vT - 1];
            eT || kT(0);
            let YT = (vT << 3) - 8 + LT(eT) - OT.b,
              JT = YT >> 3,
              xT = 0,
              aT = (TT[JT] | TT[JT + 1] << 8) >> (7 & YT) & (1 << OT.b) - 1;
            JT = (YT -= lT.b) >> 3;
            let yT = (TT[JT] | TT[JT + 1] << 8) >> (7 & YT) & (1 << lT.b) - 1;
            JT = (YT -= jT.b) >> 3;
            let XT = (TT[JT] | TT[JT + 1] << 8) >> (7 & YT) & (1 << jT.b) - 1;
            for (++tT; --tT;) {
              const mT = OT.s[aT],
                WT = OT.n[aT],
                zT = jT.s[XT],
                MT = jT.n[XT],
                gT = lT.s[yT],
                nT = lT.n[yT];
              JT = (YT -= gT) >> 3;
              const HT = 1 << gT;
              let LT = HT + ((TT[JT] | TT[JT + 1] << 8 | TT[JT + 2] << 16 | TT[JT + 3] << 24) >>> (7 & YT) & HT - 1);
              JT = (YT -= iT[zT]) >> 3;
              let pT = bT[zT] + ((TT[JT] | TT[JT + 1] << 8 | TT[JT + 2] << 16) >> (7 & YT) & (1 << iT[zT]) - 1);
              JT = (YT -= fT[mT]) >> 3;
              const BT = qT[mT] + ((TT[JT] | TT[JT + 1] << 8 | TT[JT + 2] << 16) >> (7 & YT) & (1 << fT[mT]) - 1);
              if ((YT < 0 || wT + BT > dT.length || xT + BT + pT > dT.length) && kT(0), JT = (YT -= WT) >> 3, aT = OT.t[aT] + ((TT[JT] | TT[JT + 1] << 8) >> (7 & YT) & (1 << WT) - 1), JT = (YT -= MT) >> 3, XT = jT.t[XT] + ((TT[JT] | TT[JT + 1] << 8) >> (7 & YT) & (1 << MT) - 1), JT = (YT -= nT) >> 3, yT = lT.t[yT] + ((TT[JT] | TT[JT + 1] << 8) >> (7 & YT) & (1 << nT) - 1), LT > 3) UT.o[2] = UT.o[1], UT.o[1] = UT.o[0], UT.o[0] = LT -= 3;
              else {
                const TT = LT - (0 != BT);
                TT ? (LT = 3 == TT ? UT.o[0] - 1 : UT.o[TT], TT > 1 && (UT.o[2] = UT.o[1]), UT.o[1] = UT.o[0], UT.o[0] = LT) : LT = UT.o[0]
              }
              for (let TT = 0; TT < BT; ++TT) dT[xT + TT] = dT[wT + TT];
              xT += BT, wT += BT;
              let ZT = xT - LT;
              if (ZT < 0) {
                let TT = -ZT;
                const mT = UT.e + ZT;
                mT < 0 && kT(4), TT > pT && (TT = pT);
                for (let WT = 0; WT < TT; ++WT) dT[xT + WT] = UT.w[mT + WT];
                xT += TT, pT -= TT, ZT = 0
              }
              for (let TT = 0; TT < pT; ++TT) dT[xT + TT] = dT[ZT + TT];
              xT += pT
            }
            if (xT != wT)
              for (; wT < dT.length;) dT[xT++] = dT[wT++];
            else xT = dT.length;
            zT ? UT.y += xT : dT = gT(dT, 0, xT)
          } else if (zT) {
            if (UT.y += YT, wT)
              for (let TT = 0; TT < YT; ++TT) dT[TT] = dT[wT + TT]
          } else wT && (dT = gT(dT, wT));
          return UT.b = vT, dT
        }
        kT(2)
      }
    };
  class JT {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    fn = 0;
    needed = 18;
    size;
    constructor(TT) {
      this.size = TT
    }
    push(TT) {
      if (this.done) return;
      if (this.parts.push(TT), this.fn += TT.length, this.fn < this.needed) return;
      const UT = ((TT, UT) => {
        if (1 == TT.length) return TT[0];
        const WT = new mT(UT);
        for (let mT = 0, zT = 0; mT < TT.length; ++mT) {
          const UT = TT[mT];
          WT.set(UT, zT), zT += UT.length
        }
        return WT
      })(this.parts, this.fn);
      let WT = this.st;
      if (!WT) {
        const TT = lT(UT, new mT(0));
        "number" != typeof TT && TT.u === this.size || kT(0, `not a zstd frame of ${this.size} bytes`), WT = this.st = lT(UT, 1), WT.e = 0, this.output = WT.w
      }
      for (;;) {
        const TT = UT.length - WT.b;
        if (TT < 3) {
          this.needed = 3;
          break
        }
        const mT = UT[WT.b],
          zT = mT >> 1 & 3;
        3 == zT && kT(2);
        const MT = mT >> 3 | UT[WT.b + 1] << 5 | UT[WT.b + 2] << 13;
        MT > WT.m && kT(0), 0 == zT && WT.y + MT > WT.u && kT(0);
        const gT = 1 == zT ? 4 : 3 + MT;
        if (TT < gT) {
          this.needed = gT;
          break
        }
        if (YT(UT, WT, WT.w) || kT(5), WT.e = WT.y, (WT.y > WT.u || WT.l && WT.y != WT.u) && kT(0), WT.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = WT.y;
      const zT = UT.subarray(WT.b);
      this.parts = zT.length ? [zT] : [], this.fn = zT.length, WT.b = 0
    }
  }
  class xT {
    post;
    href = "";
    Dp = null;
    given = 0;
    stopped = !1;
    constructor(TT) {
      this.post = TT
    }
    take(UT) {
      if (!this.stopped) try {
        this.answer(UT)
      } catch (mT) {
        this.stop(mT instanceof RangeError ? `out of memory decoding ${this.href}: ${TT(mT)}` : `${this.href} did not decode: ${TT(mT)}`)
      }
    }
    answer(TT) {
      if (null === this.Dp) {
        const [UT, mT] = TT;
        return this.href = UT, void(this.Dp = new JT(mT))
      }
      if (null === TT) return void this.stop(`${this.href} ended before its module did`);
      const UT = this.Dp;
      UT.push(TT);
      const {
        output: mT,
        decoded: WT
      } = UT;
      if (null !== mT && WT > this.given) {
        const TT = mT.slice(this.given, WT).buffer;
        this.given = WT, this.post(TT, [TT])
      }
      UT.done && this.stop(!0)
    }
    stop(TT) {
      this.stopped = !0, this.post(TT)
    }
  }
  const dT = globalThis.WorkerGlobalScope;
  if (void 0 !== dT && globalThis instanceof dT) {
    const TT = globalThis,
      UT = new xT((function(UT) {
        let mT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        TT.postMessage(UT, mT)
      }));
    TT.addEventListener("message", (TT => {
      let {
        data: mT
      } = TT;
      UT.take(mT)
    }))
  }
})();