(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var HH = __webpack_require__.u,
        BH = __webpack_require__.e,
        LH = {},
        AH = {};
      __webpack_require__.u = function(BH) {
        return HH(BH) + (LH.hasOwnProperty(BH) ? "?" + LH[BH] : "")
      }, __webpack_require__.e = function(rH) {
        return BH(rH).catch((function(BH) {
          var SH = AH.hasOwnProperty(rH) ? AH[rH] : 4;
          if (SH < 1) {
            var hH = HH(rH);
            if (BH.message = "Loading chunk " + rH + " failed after 4 retries.\n(" + hH + ")", BH.request = hH, LH[rH] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete AH[rH]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === BH.code) {
              var tH = __webpack_require__.miniCssF(rH);
              BH.message = BH.message.replace("Loading chunk", "Loading CSS chunk").replace(hH, tH), BH.request = tH
            }
            throw BH
          }
          return new Promise((function(HH) {
            var BH = 4 - SH + 1;
            setTimeout((function() {
              var BH = "cache-bust=" + Date.now();
              LH[rH] = BH, AH[rH] = SH - 1, HH(__webpack_require__.e(rH))
            }), function(HH) {
              return 500 * Math.pow(2, HH)
            }(BH))
          }))
        }))
      }
    }
  })();

  function HH(HH) {
    return HH instanceof Error ? HH.message : String(HH)
  }
  const BH = ArrayBuffer,
    LH = Uint8Array,
    AH = Uint16Array,
    rH = Int16Array,
    SH = Int32Array,
    hH = (HH, BH, AH) => {
      if (LH.prototype.slice) return LH.prototype.slice.call(HH, BH, AH);
      (null == BH || BH < 0) && (BH = 0), (null == AH || AH > HH.length) && (AH = HH.length);
      const rH = new LH(AH - BH);
      return rH.set(HH.subarray(BH, AH)), rH
    },
    tH = (HH, BH, AH, rH) => {
      if (LH.prototype.fill) return LH.prototype.fill.call(HH, BH, AH, rH);
      for ((null == AH || AH < 0) && (AH = 0), (null == rH || rH > HH.length) && (rH = HH.length); AH < rH; ++AH) HH[AH] = BH;
      return HH
    },
    zH = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    CH = (HH, BH, LH) => {
      const AH = new Error(BH || zH[HH]);
      if (AH.code = HH, Error.captureStackTrace && Error.captureStackTrace(AH, CH), !LH) throw AH;
      return AH
    },
    EH = (HH, BH, LH) => {
      let AH = 0,
        rH = 0;
      for (; AH < LH; ++AH) rH |= HH[BH++] << (AH << 3);
      return rH
    },
    XH = (HH, BH) => {
      const AH = HH[0] | HH[1] << 8 | HH[2] << 16;
      if (3126568 == AH && 253 == HH[3]) {
        const AH = HH[4],
          rH = AH >> 5 & 1,
          hH = AH >> 2 & 1,
          tH = 3 & AH,
          zH = AH >> 6;
        8 & AH && CH(0);
        let XH = 6 - rH;
        const GH = 3 == tH ? 4 : tH,
          YH = EH(HH, XH, GH);
        XH += GH;
        const uH = zH ? 1 << zH : rH,
          QH = EH(HH, XH, uH) + (1 == zH && 256);
        let WH = QH;
        if (!rH) {
          const BH = 1 << 10 + (HH[5] >> 3);
          WH = BH + (BH >> 3) * (7 & HH[5])
        }
        WH > 2145386496 && CH(1);
        const MH = new LH((1 == BH ? QH || WH : BH ? 0 : WH) + 12);
        return MH[0] = 1, MH[4] = 4, MH[8] = 8, {
          b: XH + uH,
          y: 0,
          l: 0,
          d: YH,
          w: BH && 1 != BH ? BH : MH.subarray(12),
          e: WH,
          o: new SH(MH.buffer, 0, 3),
          u: QH,
          c: hH,
          m: Math.min(131072, WH)
        }
      }
      if (25481893 == (AH >> 4 | HH[3] << 20)) return 8 + (((rH = HH)[hH = 4] | rH[hH + 1] << 8 | rH[hH + 2] << 16 | rH[hH + 3] << 24) >>> 0);
      var rH, hH;
      CH(0)
    },
    GH = HH => {
      let BH = 0;
      for (; 1 << BH <= HH; ++BH);
      return BH - 1
    },
    YH = (HH, SH, hH) => {
      let tH = 4 + (SH << 3);
      const zH = 5 + (15 & HH[SH]);
      zH > hH && CH(3);
      const EH = 1 << zH;
      let XH = EH,
        YH = -1,
        uH = -1,
        QH = -1,
        WH = EH;
      const MH = new BH(512 + (EH << 2)),
        xH = new rH(MH, 0, 256),
        vH = new AH(MH, 0, 256),
        PH = new AH(MH, 512, EH),
        TH = 512 + (EH << 1),
        UH = new LH(MH, TH, EH),
        VH = new LH(MH, TH + EH);
      for (; YH < 255 && XH > 0;) {
        const BH = GH(XH + 1),
          LH = tH >> 3,
          AH = (1 << BH + 1) - 1;
        let rH = (HH[LH] | HH[LH + 1] << 8 | HH[LH + 2] << 16) >> (7 & tH) & AH;
        const SH = (1 << BH) - 1,
          hH = AH - XH - 1,
          zH = rH & SH;
        if (zH < hH ? (tH += BH, rH = zH) : (tH += BH + 1, rH > SH && (rH -= hH)), xH[++YH] = --rH, -1 == rH ? (XH += rH, UH[--WH] = YH) : XH -= rH, !rH)
          do {
            const BH = tH >> 3;
            uH = (HH[BH] | HH[BH + 1] << 8) >> (7 & tH) & 3, tH += 2, YH += uH
          } while (3 == uH)
      }(YH > 255 || XH) && CH(0);
      let OH = 0;
      const bH = (EH >> 1) + (EH >> 3) + 3,
        kH = EH - 1;
      for (let BH = 0; BH <= YH; ++BH) {
        const HH = xH[BH];
        if (HH < 1) vH[BH] = -HH;
        else
          for (QH = 0; QH < HH; ++QH) {
            UH[OH] = BH;
            do {
              OH = OH + bH & kH
            } while (OH >= WH)
          }
      }
      for (OH && CH(0), QH = 0; QH < EH; ++QH) {
        const HH = vH[UH[QH]]++,
          BH = VH[QH] = zH - GH(HH);
        PH[QH] = (HH << BH) - EH
      }
      return [tH + 7 >> 3, {
        b: zH,
        s: UH,
        n: VH,
        t: PH
      }]
    },
    uH = YH(new LH([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    QH = YH(new LH([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    WH = YH(new LH([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    MH = (HH, BH) => {
      const LH = HH.length,
        AH = new SH(LH);
      for (let rH = 0; rH < LH; ++rH) AH[rH] = BH, BH += 1 << HH[rH];
      return AH
    },
    xH = new LH(new SH([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    vH = MH(xH, 0),
    PH = new LH(new SH([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    TH = MH(PH, 3),
    UH = (HH, BH, LH) => {
      const AH = HH.length,
        rH = BH.length,
        SH = HH[AH - 1],
        hH = (1 << LH.b) - 1,
        tH = -LH.b;
      SH || CH(0);
      let zH = 0,
        EH = LH.b,
        XH = (AH << 3) - 8 + GH(SH) - EH,
        YH = -1;
      for (; XH > tH && YH < rH;) {
        const AH = XH >> 3;
        zH = (zH << EH | (HH[AH] | HH[AH + 1] << 8 | HH[AH + 2] << 16) >> (7 & XH)) & hH, BH[++YH] = LH.s[zH], XH -= EH = LH.n[zH]
      }
      XH == tH && YH + 1 == rH || CH(0)
    },
    VH = (HH, BH, LH) => {
      let AH = 6;
      const rH = BH.length + 3 >> 2,
        SH = rH << 1,
        hH = rH + SH;
      UH(HH.subarray(AH, AH += HH[0] | HH[1] << 8), BH.subarray(0, rH), LH), UH(HH.subarray(AH, AH += HH[2] | HH[3] << 8), BH.subarray(rH, SH), LH), UH(HH.subarray(AH, AH += HH[4] | HH[5] << 8), BH.subarray(SH, hH), LH), UH(HH.subarray(AH), BH.subarray(hH), LH)
    },
    OH = (HH, BH, rH) => {
      let SH = BH.b;
      const zH = HH[SH],
        EH = zH >> 1 & 3;
      BH.l = 1 & zH;
      const XH = zH >> 3 | HH[SH + 1] << 5 | HH[SH + 2] << 13,
        MH = (SH += 3) + XH;
      if (1 == EH) {
        if (SH >= HH.length) return;
        return BH.b = SH + 1, rH ? (tH(rH, HH[SH], BH.y, BH.y += XH), rH) : tH(new LH(XH), HH[SH])
      }
      if (!(MH > HH.length)) {
        if (0 == EH) return BH.b = MH, rH ? (rH.set(HH.subarray(SH, MH), BH.y), BH.y += XH, rH) : hH(HH, SH, MH);
        if (2 == EH) {
          const zH = HH[SH],
            EH = 3 & zH,
            XH = zH >> 2 & 3;
          let OH = zH >> 4,
            bH = 0,
            kH = 0;
          EH < 2 ? 1 & XH ? OH |= HH[++SH] << 4 | (2 & XH && HH[++SH] << 12) : OH = zH >> 3 : (kH = XH, XH < 2 ? (OH |= (63 & HH[++SH]) << 4, bH = HH[SH] >> 6 | HH[++SH] << 2) : 2 == XH ? (OH |= HH[++SH] << 4 | (3 & HH[++SH]) << 12, bH = HH[SH] >> 2 | HH[++SH] << 6) : (OH |= HH[++SH] << 4 | (63 & HH[++SH]) << 12, bH = HH[SH] >> 6 | HH[++SH] << 2 | HH[++SH] << 10)), ++SH;
          let mH = rH ? rH.subarray(BH.y, BH.y + BH.m) : new LH(BH.m),
            oH = mH.length - OH;
          if (oH < 0 && CH(0), 0 == EH) mH.set(HH.subarray(SH, SH += OH), oH);
          else if (1 == EH) tH(mH, HH[SH++], oH);
          else {
            let rH = BH.h;
            if (2 == EH) {
              const hH = ((HH, BH) => {
                let rH = 0,
                  SH = -1;
                const hH = new LH(292),
                  zH = HH[BH],
                  EH = hH.subarray(0, 256),
                  XH = hH.subarray(256, 268),
                  uH = new AH(hH.buffer, 268);
                if (zH < 128) {
                  const [LH, AH] = YH(HH, BH + 1, 6), rH = LH << 3, hH = HH[BH += zH];
                  hH || CH(0);
                  let tH = 0,
                    XH = 0,
                    uH = AH.b,
                    QH = uH,
                    WH = (++BH << 3) - 8 + GH(hH);
                  for (; SH > 254 && CH(0), WH -= uH, !(WH < rH);) {
                    let BH = WH >> 3;
                    if (tH += (HH[BH] | HH[BH + 1] << 8) >> (7 & WH) & (1 << uH) - 1, EH[++SH] = AH.s[tH], WH -= QH, WH < rH) break;
                    BH = WH >> 3, XH += (HH[BH] | HH[BH + 1] << 8) >> (7 & WH) & (1 << QH) - 1, EH[++SH] = AH.s[XH], uH = AH.n[tH], tH = AH.t[tH], QH = AH.n[XH], XH = AH.t[XH]
                  }++SH > 255 && CH(0)
                } else {
                  for (SH = zH - 127; rH < SH; rH += 2) {
                    const LH = HH[++BH];
                    EH[rH] = LH >> 4, EH[rH + 1] = 15 & LH
                  }++BH
                }
                let QH = 0;
                for (rH = 0; rH < SH; ++rH) {
                  const HH = EH[rH];
                  HH > 11 && CH(0), QH += HH && 1 << HH - 1
                }
                const WH = GH(QH) + 1,
                  MH = 1 << WH,
                  xH = MH - QH;
                for (xH & xH - 1 && CH(0), EH[SH++] = GH(xH) + 1, rH = 0; rH < SH; ++rH) {
                  const HH = EH[rH];
                  ++XH[EH[rH] = HH && WH + 1 - HH]
                }
                const vH = new LH(MH << 1),
                  PH = vH.subarray(0, MH),
                  TH = vH.subarray(MH);
                for (uH[WH] = 0, rH = WH; rH > 0; --rH) {
                  const HH = uH[rH];
                  tH(TH, rH, HH, uH[rH - 1] = HH + XH[rH] * (1 << WH - rH))
                }
                for (uH[0] != MH && CH(0), rH = 0; rH < SH; ++rH) {
                  const HH = EH[rH];
                  if (HH) {
                    const BH = uH[HH];
                    tH(PH, rH, BH, uH[HH] = BH + (1 << WH - HH))
                  }
                }
                return [BH, {
                  n: TH,
                  b: WH,
                  s: PH
                }]
              })(HH, SH);
              bH += SH - (SH = hH[0]), BH.h = rH = hH[1]
            } else rH || CH(0);
            (kH ? VH : UH)(HH.subarray(SH, SH += bH), mH.subarray(oH), rH)
          }
          let IH = HH[SH++];
          if (IH) {
            255 == IH ? IH = 32512 + (HH[SH++] | HH[SH++] << 8) : IH > 127 && (IH = IH - 128 << 8 | HH[SH++]);
            const tH = HH[SH++];
            3 & tH && CH(0);
            const zH = [QH, WH, uH];
            for (let rH = 2; rH > -1; --rH) {
              const hH = tH >> 2 + (rH << 1) & 3;
              if (1 == hH) {
                const BH = new LH([0, 0, HH[SH++]]);
                zH[rH] = {
                  s: BH.subarray(2, 3),
                  n: BH.subarray(0, 1),
                  t: new AH(BH.buffer, 0, 1),
                  b: 0
                }
              } else 2 == hH ? [SH, zH[rH]] = YH(HH, SH, 9 - (1 & rH)) : 3 == hH && (BH.t || CH(0), zH[rH] = BH.t[rH])
            }
            const [EH, XH, UH] = BH.t = zH, VH = HH[MH - 1];
            VH || CH(0);
            let OH = (MH << 3) - 8 + GH(VH) - UH.b,
              bH = OH >> 3,
              kH = 0,
              fH = (HH[bH] | HH[bH + 1] << 8) >> (7 & OH) & (1 << UH.b) - 1;
            bH = (OH -= XH.b) >> 3;
            let lH = (HH[bH] | HH[bH + 1] << 8) >> (7 & OH) & (1 << XH.b) - 1;
            bH = (OH -= EH.b) >> 3;
            let KH = (HH[bH] | HH[bH + 1] << 8) >> (7 & OH) & (1 << EH.b) - 1;
            for (++IH; --IH;) {
              const LH = UH.s[fH],
                AH = UH.n[fH],
                rH = EH.s[KH],
                SH = EH.n[KH],
                hH = XH.s[lH],
                tH = XH.n[lH];
              bH = (OH -= hH) >> 3;
              const zH = 1 << hH;
              let GH = zH + ((HH[bH] | HH[bH + 1] << 8 | HH[bH + 2] << 16 | HH[bH + 3] << 24) >>> (7 & OH) & zH - 1);
              bH = (OH -= PH[rH]) >> 3;
              let YH = TH[rH] + ((HH[bH] | HH[bH + 1] << 8 | HH[bH + 2] << 16) >> (7 & OH) & (1 << PH[rH]) - 1);
              bH = (OH -= xH[LH]) >> 3;
              const uH = vH[LH] + ((HH[bH] | HH[bH + 1] << 8 | HH[bH + 2] << 16) >> (7 & OH) & (1 << xH[LH]) - 1);
              if ((OH < 0 || oH + uH > mH.length || kH + uH + YH > mH.length) && CH(0), bH = (OH -= AH) >> 3, fH = UH.t[fH] + ((HH[bH] | HH[bH + 1] << 8) >> (7 & OH) & (1 << AH) - 1), bH = (OH -= SH) >> 3, KH = EH.t[KH] + ((HH[bH] | HH[bH + 1] << 8) >> (7 & OH) & (1 << SH) - 1), bH = (OH -= tH) >> 3, lH = XH.t[lH] + ((HH[bH] | HH[bH + 1] << 8) >> (7 & OH) & (1 << tH) - 1), GH > 3) BH.o[2] = BH.o[1], BH.o[1] = BH.o[0], BH.o[0] = GH -= 3;
              else {
                const HH = GH - (0 != uH);
                HH ? (GH = 3 == HH ? BH.o[0] - 1 : BH.o[HH], HH > 1 && (BH.o[2] = BH.o[1]), BH.o[1] = BH.o[0], BH.o[0] = GH) : GH = BH.o[0]
              }
              for (let HH = 0; HH < uH; ++HH) mH[kH + HH] = mH[oH + HH];
              kH += uH, oH += uH;
              let QH = kH - GH;
              if (QH < 0) {
                let HH = -QH;
                const LH = BH.e + QH;
                LH < 0 && CH(4), HH > YH && (HH = YH);
                for (let AH = 0; AH < HH; ++AH) mH[kH + AH] = BH.w[LH + AH];
                kH += HH, YH -= HH, QH = 0
              }
              for (let HH = 0; HH < YH; ++HH) mH[kH + HH] = mH[QH + HH];
              kH += YH
            }
            if (kH != oH)
              for (; oH < mH.length;) mH[kH++] = mH[oH++];
            else kH = mH.length;
            rH ? BH.y += kH : mH = hH(mH, 0, kH)
          } else if (rH) {
            if (BH.y += OH, oH)
              for (let HH = 0; HH < OH; ++HH) mH[HH] = mH[oH + HH]
          } else oH && (mH = hH(mH, oH));
          return BH.b = MH, mH
        }
        CH(2)
      }
    };
  class bH {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    LX = 0;
    needed = 18;
    size;
    constructor(HH) {
      this.size = HH
    }
    push(HH) {
      if (this.done) return;
      if (this.parts.push(HH), this.LX += HH.length, this.LX < this.needed) return;
      const BH = ((HH, BH) => {
        if (1 == HH.length) return HH[0];
        const AH = new LH(BH);
        for (let LH = 0, rH = 0; LH < HH.length; ++LH) {
          const BH = HH[LH];
          AH.set(BH, rH), rH += BH.length
        }
        return AH
      })(this.parts, this.LX);
      let AH = this.st;
      if (!AH) {
        const HH = XH(BH, new LH(0));
        "number" != typeof HH && HH.u === this.size || CH(0, `not a zstd frame of ${this.size} bytes`), AH = this.st = XH(BH, 1), AH.e = 0, this.output = AH.w
      }
      for (;;) {
        const HH = BH.length - AH.b;
        if (HH < 3) {
          this.needed = 3;
          break
        }
        const LH = BH[AH.b],
          rH = LH >> 1 & 3;
        3 == rH && CH(2);
        const SH = LH >> 3 | BH[AH.b + 1] << 5 | BH[AH.b + 2] << 13;
        SH > AH.m && CH(0), 0 == rH && AH.y + SH > AH.u && CH(0);
        const hH = 1 == rH ? 4 : 3 + SH;
        if (HH < hH) {
          this.needed = hH;
          break
        }
        if (OH(BH, AH, AH.w) || CH(5), AH.e = AH.y, (AH.y > AH.u || AH.l && AH.y != AH.u) && CH(0), AH.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = AH.y;
      const rH = BH.subarray(AH.b);
      this.parts = rH.length ? [rH] : [], this.LX = rH.length, AH.b = 0
    }
  }
  class kH {
    post;
    href = "";
    GX = null;
    given = 0;
    stopped = !1;
    constructor(HH) {
      this.post = HH
    }
    take(BH) {
      if (!this.stopped) try {
        this.answer(BH)
      } catch (LH) {
        this.stop(LH instanceof RangeError ? `out of memory decoding ${this.href}: ${HH(LH)}` : `${this.href} did not decode: ${HH(LH)}`)
      }
    }
    answer(HH) {
      if (null === this.GX) {
        const [BH, LH] = HH;
        return this.href = BH, void(this.GX = new bH(LH))
      }
      if (null === HH) return void this.stop(`${this.href} ended before its module did`);
      const BH = this.GX;
      BH.push(HH);
      const {
        output: LH,
        decoded: AH
      } = BH;
      if (null !== LH && AH > this.given) {
        const HH = LH.slice(this.given, AH).buffer;
        this.given = AH, this.post(HH, [HH])
      }
      BH.done && this.stop(!0)
    }
    stop(HH) {
      this.stopped = !0, this.post(HH)
    }
  }
  const mH = globalThis.WorkerGlobalScope;
  if (void 0 !== mH && globalThis instanceof mH) {
    const HH = globalThis,
      BH = new kH((function(BH) {
        let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        HH.postMessage(BH, LH)
      }));
    HH.addEventListener("message", (HH => {
      let {
        data: LH
      } = HH;
      BH.take(LH)
    }))
  }
})();