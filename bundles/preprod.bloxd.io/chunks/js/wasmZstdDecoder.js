(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var WW = __webpack_require__.u,
        iW = __webpack_require__.e,
        OW = {},
        mW = {};
      __webpack_require__.u = function(iW) {
        return WW(iW) + (OW.hasOwnProperty(iW) ? "?" + OW[iW] : "")
      }, __webpack_require__.e = function(EW) {
        return iW(EW).catch((function(iW) {
          var NW = mW.hasOwnProperty(EW) ? mW[EW] : 4;
          if (NW < 1) {
            var PW = WW(EW);
            if (iW.message = "Loading chunk " + EW + " failed after 4 retries.\n(" + PW + ")", iW.request = PW, OW[EW] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete mW[EW]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === iW.code) {
              var LW = __webpack_require__.miniCssF(EW);
              iW.message = iW.message.replace("Loading chunk", "Loading CSS chunk").replace(PW, LW), iW.request = LW
            }
            throw iW
          }
          return new Promise((function(WW) {
            var iW = 4 - NW + 1;
            setTimeout((function() {
              var iW = "cache-bust=" + Date.now();
              OW[EW] = iW, mW[EW] = NW - 1, WW(__webpack_require__.e(EW))
            }), function(WW) {
              return 500 * Math.pow(2, WW)
            }(iW))
          }))
        }))
      }
    }
  })();

  function WW(WW) {
    return WW instanceof Error ? WW.message : String(WW)
  }
  const iW = ArrayBuffer,
    OW = Uint8Array,
    mW = Uint16Array,
    EW = Int16Array,
    NW = Int32Array,
    PW = (WW, iW, mW) => {
      if (OW.prototype.slice) return OW.prototype.slice.call(WW, iW, mW);
      (null == iW || iW < 0) && (iW = 0), (null == mW || mW > WW.length) && (mW = WW.length);
      const EW = new OW(mW - iW);
      return EW.set(WW.subarray(iW, mW)), EW
    },
    LW = (WW, iW, mW, EW) => {
      if (OW.prototype.fill) return OW.prototype.fill.call(WW, iW, mW, EW);
      for ((null == mW || mW < 0) && (mW = 0), (null == EW || EW > WW.length) && (EW = WW.length); mW < EW; ++mW) WW[mW] = iW;
      return WW
    },
    cW = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    wW = (WW, iW, OW) => {
      const mW = new Error(iW || cW[WW]);
      if (mW.code = WW, Error.captureStackTrace && Error.captureStackTrace(mW, wW), !OW) throw mW;
      return mW
    },
    tW = (WW, iW, OW) => {
      let mW = 0,
        EW = 0;
      for (; mW < OW; ++mW) EW |= WW[iW++] << (mW << 3);
      return EW
    },
    ZW = (WW, iW) => {
      const mW = WW[0] | WW[1] << 8 | WW[2] << 16;
      if (3126568 == mW && 253 == WW[3]) {
        const mW = WW[4],
          EW = mW >> 5 & 1,
          PW = mW >> 2 & 1,
          LW = 3 & mW,
          cW = mW >> 6;
        8 & mW && wW(0);
        let ZW = 6 - EW;
        const xW = 3 == LW ? 4 : LW,
          lW = tW(WW, ZW, xW);
        ZW += xW;
        const AW = cW ? 1 << cW : EW,
          bW = tW(WW, ZW, AW) + (1 == cW && 256);
        let jW = bW;
        if (!EW) {
          const iW = 1 << 10 + (WW[5] >> 3);
          jW = iW + (iW >> 3) * (7 & WW[5])
        }
        jW > 2145386496 && wW(1);
        const UW = new OW((1 == iW ? bW || jW : iW ? 0 : jW) + 12);
        return UW[0] = 1, UW[4] = 4, UW[8] = 8, {
          b: ZW + AW,
          y: 0,
          l: 0,
          d: lW,
          w: iW && 1 != iW ? iW : UW.subarray(12),
          e: jW,
          o: new NW(UW.buffer, 0, 3),
          u: bW,
          c: PW,
          m: Math.min(131072, jW)
        }
      }
      if (25481893 == (mW >> 4 | WW[3] << 20)) return 8 + (((EW = WW)[PW = 4] | EW[PW + 1] << 8 | EW[PW + 2] << 16 | EW[PW + 3] << 24) >>> 0);
      var EW, PW;
      wW(0)
    },
    xW = WW => {
      let iW = 0;
      for (; 1 << iW <= WW; ++iW);
      return iW - 1
    },
    lW = (WW, NW, PW) => {
      let LW = 4 + (NW << 3);
      const cW = 5 + (15 & WW[NW]);
      cW > PW && wW(3);
      const tW = 1 << cW;
      let ZW = tW,
        lW = -1,
        AW = -1,
        bW = -1,
        jW = tW;
      const UW = new iW(512 + (tW << 2)),
        kW = new EW(UW, 0, 256),
        sW = new mW(UW, 0, 256),
        MW = new mW(UW, 512, tW),
        KW = 512 + (tW << 1),
        SW = new OW(UW, KW, tW),
        YW = new OW(UW, KW + tW);
      for (; lW < 255 && ZW > 0;) {
        const iW = xW(ZW + 1),
          OW = LW >> 3,
          mW = (1 << iW + 1) - 1;
        let EW = (WW[OW] | WW[OW + 1] << 8 | WW[OW + 2] << 16) >> (7 & LW) & mW;
        const NW = (1 << iW) - 1,
          PW = mW - ZW - 1,
          cW = EW & NW;
        if (cW < PW ? (LW += iW, EW = cW) : (LW += iW + 1, EW > NW && (EW -= PW)), kW[++lW] = --EW, -1 == EW ? (ZW += EW, SW[--jW] = lW) : ZW -= EW, !EW)
          do {
            const iW = LW >> 3;
            AW = (WW[iW] | WW[iW + 1] << 8) >> (7 & LW) & 3, LW += 2, lW += AW
          } while (3 == AW)
      }(lW > 255 || ZW) && wW(0);
      let yW = 0;
      const TW = (tW >> 1) + (tW >> 3) + 3,
        JW = tW - 1;
      for (let iW = 0; iW <= lW; ++iW) {
        const WW = kW[iW];
        if (WW < 1) sW[iW] = -WW;
        else
          for (bW = 0; bW < WW; ++bW) {
            SW[yW] = iW;
            do {
              yW = yW + TW & JW
            } while (yW >= jW)
          }
      }
      for (yW && wW(0), bW = 0; bW < tW; ++bW) {
        const WW = sW[SW[bW]]++,
          iW = YW[bW] = cW - xW(WW);
        MW[bW] = (WW << iW) - tW
      }
      return [LW + 7 >> 3, {
        b: cW,
        s: SW,
        n: YW,
        t: MW
      }]
    },
    AW = lW(new OW([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    bW = lW(new OW([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    jW = lW(new OW([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    UW = (WW, iW) => {
      const OW = WW.length,
        mW = new NW(OW);
      for (let EW = 0; EW < OW; ++EW) mW[EW] = iW, iW += 1 << WW[EW];
      return mW
    },
    kW = new OW(new NW([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    sW = UW(kW, 0),
    MW = new OW(new NW([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    KW = UW(MW, 3),
    SW = (WW, iW, OW) => {
      const mW = WW.length,
        EW = iW.length,
        NW = WW[mW - 1],
        PW = (1 << OW.b) - 1,
        LW = -OW.b;
      NW || wW(0);
      let cW = 0,
        tW = OW.b,
        ZW = (mW << 3) - 8 + xW(NW) - tW,
        lW = -1;
      for (; ZW > LW && lW < EW;) {
        const mW = ZW >> 3;
        cW = (cW << tW | (WW[mW] | WW[mW + 1] << 8 | WW[mW + 2] << 16) >> (7 & ZW)) & PW, iW[++lW] = OW.s[cW], ZW -= tW = OW.n[cW]
      }
      ZW == LW && lW + 1 == EW || wW(0)
    },
    YW = (WW, iW, OW) => {
      let mW = 6;
      const EW = iW.length + 3 >> 2,
        NW = EW << 1,
        PW = EW + NW;
      SW(WW.subarray(mW, mW += WW[0] | WW[1] << 8), iW.subarray(0, EW), OW), SW(WW.subarray(mW, mW += WW[2] | WW[3] << 8), iW.subarray(EW, NW), OW), SW(WW.subarray(mW, mW += WW[4] | WW[5] << 8), iW.subarray(NW, PW), OW), SW(WW.subarray(mW), iW.subarray(PW), OW)
    },
    yW = (WW, iW, EW) => {
      let NW = iW.b;
      const cW = WW[NW],
        tW = cW >> 1 & 3;
      iW.l = 1 & cW;
      const ZW = cW >> 3 | WW[NW + 1] << 5 | WW[NW + 2] << 13,
        UW = (NW += 3) + ZW;
      if (1 == tW) {
        if (NW >= WW.length) return;
        return iW.b = NW + 1, EW ? (LW(EW, WW[NW], iW.y, iW.y += ZW), EW) : LW(new OW(ZW), WW[NW])
      }
      if (!(UW > WW.length)) {
        if (0 == tW) return iW.b = UW, EW ? (EW.set(WW.subarray(NW, UW), iW.y), iW.y += ZW, EW) : PW(WW, NW, UW);
        if (2 == tW) {
          const cW = WW[NW],
            tW = 3 & cW,
            ZW = cW >> 2 & 3;
          let yW = cW >> 4,
            TW = 0,
            JW = 0;
          tW < 2 ? 1 & ZW ? yW |= WW[++NW] << 4 | (2 & ZW && WW[++NW] << 12) : yW = cW >> 3 : (JW = ZW, ZW < 2 ? (yW |= (63 & WW[++NW]) << 4, TW = WW[NW] >> 6 | WW[++NW] << 2) : 2 == ZW ? (yW |= WW[++NW] << 4 | (3 & WW[++NW]) << 12, TW = WW[NW] >> 2 | WW[++NW] << 6) : (yW |= WW[++NW] << 4 | (63 & WW[++NW]) << 12, TW = WW[NW] >> 6 | WW[++NW] << 2 | WW[++NW] << 10)), ++NW;
          let hW = EW ? EW.subarray(iW.y, iW.y + iW.m) : new OW(iW.m),
            HW = hW.length - yW;
          if (HW < 0 && wW(0), 0 == tW) hW.set(WW.subarray(NW, NW += yW), HW);
          else if (1 == tW) LW(hW, WW[NW++], HW);
          else {
            let EW = iW.h;
            if (2 == tW) {
              const PW = ((WW, iW) => {
                let EW = 0,
                  NW = -1;
                const PW = new OW(292),
                  cW = WW[iW],
                  tW = PW.subarray(0, 256),
                  ZW = PW.subarray(256, 268),
                  AW = new mW(PW.buffer, 268);
                if (cW < 128) {
                  const [OW, mW] = lW(WW, iW + 1, 6), EW = OW << 3, PW = WW[iW += cW];
                  PW || wW(0);
                  let LW = 0,
                    ZW = 0,
                    AW = mW.b,
                    bW = AW,
                    jW = (++iW << 3) - 8 + xW(PW);
                  for (; NW > 254 && wW(0), jW -= AW, !(jW < EW);) {
                    let iW = jW >> 3;
                    if (LW += (WW[iW] | WW[iW + 1] << 8) >> (7 & jW) & (1 << AW) - 1, tW[++NW] = mW.s[LW], jW -= bW, jW < EW) break;
                    iW = jW >> 3, ZW += (WW[iW] | WW[iW + 1] << 8) >> (7 & jW) & (1 << bW) - 1, tW[++NW] = mW.s[ZW], AW = mW.n[LW], LW = mW.t[LW], bW = mW.n[ZW], ZW = mW.t[ZW]
                  }++NW > 255 && wW(0)
                } else {
                  for (NW = cW - 127; EW < NW; EW += 2) {
                    const OW = WW[++iW];
                    tW[EW] = OW >> 4, tW[EW + 1] = 15 & OW
                  }++iW
                }
                let bW = 0;
                for (EW = 0; EW < NW; ++EW) {
                  const WW = tW[EW];
                  WW > 11 && wW(0), bW += WW && 1 << WW - 1
                }
                const jW = xW(bW) + 1,
                  UW = 1 << jW,
                  kW = UW - bW;
                for (kW & kW - 1 && wW(0), tW[NW++] = xW(kW) + 1, EW = 0; EW < NW; ++EW) {
                  const WW = tW[EW];
                  ++ZW[tW[EW] = WW && jW + 1 - WW]
                }
                const sW = new OW(UW << 1),
                  MW = sW.subarray(0, UW),
                  KW = sW.subarray(UW);
                for (AW[jW] = 0, EW = jW; EW > 0; --EW) {
                  const WW = AW[EW];
                  LW(KW, EW, WW, AW[EW - 1] = WW + ZW[EW] * (1 << jW - EW))
                }
                for (AW[0] != UW && wW(0), EW = 0; EW < NW; ++EW) {
                  const WW = tW[EW];
                  if (WW) {
                    const iW = AW[WW];
                    LW(MW, EW, iW, AW[WW] = iW + (1 << jW - WW))
                  }
                }
                return [iW, {
                  n: KW,
                  b: jW,
                  s: MW
                }]
              })(WW, NW);
              TW += NW - (NW = PW[0]), iW.h = EW = PW[1]
            } else EW || wW(0);
            (JW ? YW : SW)(WW.subarray(NW, NW += TW), hW.subarray(HW), EW)
          }
          let nW = WW[NW++];
          if (nW) {
            255 == nW ? nW = 32512 + (WW[NW++] | WW[NW++] << 8) : nW > 127 && (nW = nW - 128 << 8 | WW[NW++]);
            const LW = WW[NW++];
            3 & LW && wW(0);
            const cW = [bW, jW, AW];
            for (let EW = 2; EW > -1; --EW) {
              const PW = LW >> 2 + (EW << 1) & 3;
              if (1 == PW) {
                const iW = new OW([0, 0, WW[NW++]]);
                cW[EW] = {
                  s: iW.subarray(2, 3),
                  n: iW.subarray(0, 1),
                  t: new mW(iW.buffer, 0, 1),
                  b: 0
                }
              } else 2 == PW ? [NW, cW[EW]] = lW(WW, NW, 9 - (1 & EW)) : 3 == PW && (iW.t || wW(0), cW[EW] = iW.t[EW])
            }
            const [tW, ZW, SW] = iW.t = cW, YW = WW[UW - 1];
            YW || wW(0);
            let yW = (UW << 3) - 8 + xW(YW) - SW.b,
              TW = yW >> 3,
              JW = 0,
              uW = (WW[TW] | WW[TW + 1] << 8) >> (7 & yW) & (1 << SW.b) - 1;
            TW = (yW -= ZW.b) >> 3;
            let oW = (WW[TW] | WW[TW + 1] << 8) >> (7 & yW) & (1 << ZW.b) - 1;
            TW = (yW -= tW.b) >> 3;
            let dW = (WW[TW] | WW[TW + 1] << 8) >> (7 & yW) & (1 << tW.b) - 1;
            for (++nW; --nW;) {
              const OW = SW.s[uW],
                mW = SW.n[uW],
                EW = tW.s[dW],
                NW = tW.n[dW],
                PW = ZW.s[oW],
                LW = ZW.n[oW];
              TW = (yW -= PW) >> 3;
              const cW = 1 << PW;
              let xW = cW + ((WW[TW] | WW[TW + 1] << 8 | WW[TW + 2] << 16 | WW[TW + 3] << 24) >>> (7 & yW) & cW - 1);
              TW = (yW -= MW[EW]) >> 3;
              let lW = KW[EW] + ((WW[TW] | WW[TW + 1] << 8 | WW[TW + 2] << 16) >> (7 & yW) & (1 << MW[EW]) - 1);
              TW = (yW -= kW[OW]) >> 3;
              const AW = sW[OW] + ((WW[TW] | WW[TW + 1] << 8 | WW[TW + 2] << 16) >> (7 & yW) & (1 << kW[OW]) - 1);
              if ((yW < 0 || HW + AW > hW.length || JW + AW + lW > hW.length) && wW(0), TW = (yW -= mW) >> 3, uW = SW.t[uW] + ((WW[TW] | WW[TW + 1] << 8) >> (7 & yW) & (1 << mW) - 1), TW = (yW -= NW) >> 3, dW = tW.t[dW] + ((WW[TW] | WW[TW + 1] << 8) >> (7 & yW) & (1 << NW) - 1), TW = (yW -= LW) >> 3, oW = ZW.t[oW] + ((WW[TW] | WW[TW + 1] << 8) >> (7 & yW) & (1 << LW) - 1), xW > 3) iW.o[2] = iW.o[1], iW.o[1] = iW.o[0], iW.o[0] = xW -= 3;
              else {
                const WW = xW - (0 != AW);
                WW ? (xW = 3 == WW ? iW.o[0] - 1 : iW.o[WW], WW > 1 && (iW.o[2] = iW.o[1]), iW.o[1] = iW.o[0], iW.o[0] = xW) : xW = iW.o[0]
              }
              for (let WW = 0; WW < AW; ++WW) hW[JW + WW] = hW[HW + WW];
              JW += AW, HW += AW;
              let bW = JW - xW;
              if (bW < 0) {
                let WW = -bW;
                const OW = iW.e + bW;
                OW < 0 && wW(4), WW > lW && (WW = lW);
                for (let mW = 0; mW < WW; ++mW) hW[JW + mW] = iW.w[OW + mW];
                JW += WW, lW -= WW, bW = 0
              }
              for (let WW = 0; WW < lW; ++WW) hW[JW + WW] = hW[bW + WW];
              JW += lW
            }
            if (JW != HW)
              for (; HW < hW.length;) hW[JW++] = hW[HW++];
            else JW = hW.length;
            EW ? iW.y += JW : hW = PW(hW, 0, JW)
          } else if (EW) {
            if (iW.y += yW, HW)
              for (let WW = 0; WW < yW; ++WW) hW[WW] = hW[HW + WW]
          } else HW && (hW = PW(hW, HW));
          return iW.b = UW, hW
        }
        wW(2)
      }
    };
  class TW {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    BL = 0;
    needed = 18;
    size;
    constructor(WW) {
      this.size = WW
    }
    push(WW) {
      if (this.done) return;
      if (this.parts.push(WW), this.BL += WW.length, this.BL < this.needed) return;
      const iW = ((WW, iW) => {
        if (1 == WW.length) return WW[0];
        const mW = new OW(iW);
        for (let OW = 0, EW = 0; OW < WW.length; ++OW) {
          const iW = WW[OW];
          mW.set(iW, EW), EW += iW.length
        }
        return mW
      })(this.parts, this.BL);
      let mW = this.st;
      if (!mW) {
        const WW = ZW(iW, new OW(0));
        "number" != typeof WW && WW.u === this.size || wW(0, `not a zstd frame of ${this.size} bytes`), mW = this.st = ZW(iW, 1), mW.e = 0, this.output = mW.w
      }
      for (;;) {
        const WW = iW.length - mW.b;
        if (WW < 3) {
          this.needed = 3;
          break
        }
        const OW = iW[mW.b],
          EW = OW >> 1 & 3;
        3 == EW && wW(2);
        const NW = OW >> 3 | iW[mW.b + 1] << 5 | iW[mW.b + 2] << 13;
        NW > mW.m && wW(0), 0 == EW && mW.y + NW > mW.u && wW(0);
        const PW = 1 == EW ? 4 : 3 + NW;
        if (WW < PW) {
          this.needed = PW;
          break
        }
        if (yW(iW, mW, mW.w) || wW(5), mW.e = mW.y, (mW.y > mW.u || mW.l && mW.y != mW.u) && wW(0), mW.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = mW.y;
      const EW = iW.subarray(mW.b);
      this.parts = EW.length ? [EW] : [], this.BL = EW.length, mW.b = 0
    }
  }
  class JW {
    post;
    href = "";
    tZ = null;
    given = 0;
    stopped = !1;
    constructor(WW) {
      this.post = WW
    }
    take(iW) {
      if (!this.stopped) try {
        this.answer(iW)
      } catch (OW) {
        this.stop(OW instanceof RangeError ? `out of memory decoding ${this.href}: ${WW(OW)}` : `${this.href} did not decode: ${WW(OW)}`)
      }
    }
    answer(WW) {
      if (null === this.tZ) {
        const [iW, OW] = WW;
        return this.href = iW, void(this.tZ = new TW(OW))
      }
      if (null === WW) return void this.stop(`${this.href} ended before its module did`);
      const iW = this.tZ;
      iW.push(WW);
      const {
        output: OW,
        decoded: mW
      } = iW;
      if (null !== OW && mW > this.given) {
        const WW = OW.slice(this.given, mW).buffer;
        this.given = mW, this.post(WW, [WW])
      }
      iW.done && this.stop(!0)
    }
    stop(WW) {
      this.stopped = !0, this.post(WW)
    }
  }
  const hW = globalThis.WorkerGlobalScope;
  if (void 0 !== hW && globalThis instanceof hW) {
    const WW = globalThis,
      iW = new JW((function(iW) {
        let OW = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        WW.postMessage(iW, OW)
      }));
    WW.addEventListener("message", (WW => {
      let {
        data: OW
      } = WW;
      iW.take(OW)
    }))
  }
})();