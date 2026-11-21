(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var QQ = __webpack_require__.u,
        FQ = __webpack_require__.e,
        wQ = {},
        LQ = {};
      __webpack_require__.u = function(FQ) {
        return QQ(FQ) + (wQ.hasOwnProperty(FQ) ? "?" + wQ[FQ] : "")
      }, __webpack_require__.e = function(qQ) {
        return FQ(qQ).catch((function(FQ) {
          var oQ = LQ.hasOwnProperty(qQ) ? LQ[qQ] : 4;
          if (oQ < 1) {
            var DQ = QQ(qQ);
            throw FQ.message = "Loading chunk " + qQ + " failed after 4 retries.\n(" + DQ + ")", FQ.request = DQ, wQ[qQ] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete LQ[qQ]
            }), 0), FQ
          }
          return new Promise((function(QQ) {
            var FQ = 4 - oQ + 1;
            setTimeout((function() {
              var FQ = "cache-bust=" + Date.now();
              wQ[qQ] = FQ, LQ[qQ] = oQ - 1, QQ(__webpack_require__.e(qQ))
            }), function(QQ) {
              return 500 * Math.pow(2, QQ)
            }(FQ))
          }))
        }))
      }
    }
  })();

  function QQ(QQ) {
    return QQ instanceof Error ? QQ.message : String(QQ)
  }
  const FQ = ArrayBuffer,
    wQ = Uint8Array,
    LQ = Uint16Array,
    qQ = Int16Array,
    oQ = Int32Array,
    DQ = (QQ, FQ, LQ) => {
      if (wQ.prototype.slice) return wQ.prototype.slice.call(QQ, FQ, LQ);
      (null == FQ || FQ < 0) && (FQ = 0), (null == LQ || LQ > QQ.length) && (LQ = QQ.length);
      const qQ = new wQ(LQ - FQ);
      return qQ.set(QQ.subarray(FQ, LQ)), qQ
    },
    kQ = (QQ, FQ, LQ, qQ) => {
      if (wQ.prototype.fill) return wQ.prototype.fill.call(QQ, FQ, LQ, qQ);
      for ((null == LQ || LQ < 0) && (LQ = 0), (null == qQ || qQ > QQ.length) && (qQ = QQ.length); LQ < qQ; ++LQ) QQ[LQ] = FQ;
      return QQ
    },
    vQ = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    mQ = (QQ, FQ, wQ) => {
      const LQ = new Error(FQ || vQ[QQ]);
      if (LQ.code = QQ, Error.captureStackTrace && Error.captureStackTrace(LQ, mQ), !wQ) throw LQ;
      return LQ
    },
    uQ = (QQ, FQ, wQ) => {
      let LQ = 0,
        qQ = 0;
      for (; LQ < wQ; ++LQ) qQ |= QQ[FQ++] << (LQ << 3);
      return qQ
    },
    HQ = (QQ, FQ) => {
      const LQ = QQ[0] | QQ[1] << 8 | QQ[2] << 16;
      if (3126568 == LQ && 253 == QQ[3]) {
        const LQ = QQ[4],
          qQ = LQ >> 5 & 1,
          DQ = LQ >> 2 & 1,
          kQ = 3 & LQ,
          vQ = LQ >> 6;
        8 & LQ && mQ(0);
        let HQ = 6 - qQ;
        const bQ = 3 == kQ ? 4 : kQ,
          YQ = uQ(QQ, HQ, bQ);
        HQ += bQ;
        const xQ = vQ ? 1 << vQ : qQ,
          AQ = uQ(QQ, HQ, xQ) + (1 == vQ && 256);
        let tQ = AQ;
        if (!qQ) {
          const FQ = 1 << 10 + (QQ[5] >> 3);
          tQ = FQ + (FQ >> 3) * (7 & QQ[5])
        }
        tQ > 2145386496 && mQ(1);
        const eQ = new wQ((1 == FQ ? AQ || tQ : FQ ? 0 : tQ) + 12);
        return eQ[0] = 1, eQ[4] = 4, eQ[8] = 8, {
          b: HQ + xQ,
          y: 0,
          l: 0,
          d: YQ,
          w: FQ && 1 != FQ ? FQ : eQ.subarray(12),
          e: tQ,
          o: new oQ(eQ.buffer, 0, 3),
          u: AQ,
          c: DQ,
          m: Math.min(131072, tQ)
        }
      }
      if (25481893 == (LQ >> 4 | QQ[3] << 20)) return 8 + (((qQ = QQ)[DQ = 4] | qQ[DQ + 1] << 8 | qQ[DQ + 2] << 16 | qQ[DQ + 3] << 24) >>> 0);
      var qQ, DQ;
      mQ(0)
    },
    bQ = QQ => {
      let FQ = 0;
      for (; 1 << FQ <= QQ; ++FQ);
      return FQ - 1
    },
    YQ = (QQ, oQ, DQ) => {
      let kQ = 4 + (oQ << 3);
      const vQ = 5 + (15 & QQ[oQ]);
      vQ > DQ && mQ(3);
      const uQ = 1 << vQ;
      let HQ = uQ,
        YQ = -1,
        xQ = -1,
        AQ = -1,
        tQ = uQ;
      const eQ = new FQ(512 + (uQ << 2)),
        MQ = new qQ(eQ, 0, 256),
        GQ = new LQ(eQ, 0, 256),
        pQ = new LQ(eQ, 512, uQ),
        cQ = 512 + (uQ << 1),
        CQ = new wQ(eQ, cQ, uQ),
        SQ = new wQ(eQ, cQ + uQ);
      for (; YQ < 255 && HQ > 0;) {
        const FQ = bQ(HQ + 1),
          wQ = kQ >> 3,
          LQ = (1 << FQ + 1) - 1;
        let qQ = (QQ[wQ] | QQ[wQ + 1] << 8 | QQ[wQ + 2] << 16) >> (7 & kQ) & LQ;
        const oQ = (1 << FQ) - 1,
          DQ = LQ - HQ - 1,
          vQ = qQ & oQ;
        if (vQ < DQ ? (kQ += FQ, qQ = vQ) : (kQ += FQ + 1, qQ > oQ && (qQ -= DQ)), MQ[++YQ] = --qQ, -1 == qQ ? (HQ += qQ, CQ[--tQ] = YQ) : HQ -= qQ, !qQ)
          do {
            const FQ = kQ >> 3;
            xQ = (QQ[FQ] | QQ[FQ + 1] << 8) >> (7 & kQ) & 3, kQ += 2, YQ += xQ
          } while (3 == xQ)
      }(YQ > 255 || HQ) && mQ(0);
      let iQ = 0;
      const WQ = (uQ >> 1) + (uQ >> 3) + 3,
        RQ = uQ - 1;
      for (let FQ = 0; FQ <= YQ; ++FQ) {
        const QQ = MQ[FQ];
        if (QQ < 1) GQ[FQ] = -QQ;
        else
          for (AQ = 0; AQ < QQ; ++AQ) {
            CQ[iQ] = FQ;
            do {
              iQ = iQ + WQ & RQ
            } while (iQ >= tQ)
          }
      }
      for (iQ && mQ(0), AQ = 0; AQ < uQ; ++AQ) {
        const QQ = GQ[CQ[AQ]]++,
          FQ = SQ[AQ] = vQ - bQ(QQ);
        pQ[AQ] = (QQ << FQ) - uQ
      }
      return [kQ + 7 >> 3, {
        b: vQ,
        s: CQ,
        n: SQ,
        t: pQ
      }]
    },
    xQ = YQ(new wQ([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    AQ = YQ(new wQ([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    tQ = YQ(new wQ([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    eQ = (QQ, FQ) => {
      const wQ = QQ.length,
        LQ = new oQ(wQ);
      for (let qQ = 0; qQ < wQ; ++qQ) LQ[qQ] = FQ, FQ += 1 << QQ[qQ];
      return LQ
    },
    MQ = new wQ(new oQ([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    GQ = eQ(MQ, 0),
    pQ = new wQ(new oQ([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    cQ = eQ(pQ, 3),
    CQ = (QQ, FQ, wQ) => {
      const LQ = QQ.length,
        qQ = FQ.length,
        oQ = QQ[LQ - 1],
        DQ = (1 << wQ.b) - 1,
        kQ = -wQ.b;
      oQ || mQ(0);
      let vQ = 0,
        uQ = wQ.b,
        HQ = (LQ << 3) - 8 + bQ(oQ) - uQ,
        YQ = -1;
      for (; HQ > kQ && YQ < qQ;) {
        const LQ = HQ >> 3;
        vQ = (vQ << uQ | (QQ[LQ] | QQ[LQ + 1] << 8 | QQ[LQ + 2] << 16) >> (7 & HQ)) & DQ, FQ[++YQ] = wQ.s[vQ], HQ -= uQ = wQ.n[vQ]
      }
      HQ == kQ && YQ + 1 == qQ || mQ(0)
    },
    SQ = (QQ, FQ, wQ) => {
      let LQ = 6;
      const qQ = FQ.length + 3 >> 2,
        oQ = qQ << 1,
        DQ = qQ + oQ;
      CQ(QQ.subarray(LQ, LQ += QQ[0] | QQ[1] << 8), FQ.subarray(0, qQ), wQ), CQ(QQ.subarray(LQ, LQ += QQ[2] | QQ[3] << 8), FQ.subarray(qQ, oQ), wQ), CQ(QQ.subarray(LQ, LQ += QQ[4] | QQ[5] << 8), FQ.subarray(oQ, DQ), wQ), CQ(QQ.subarray(LQ), FQ.subarray(DQ), wQ)
    },
    iQ = (QQ, FQ, qQ) => {
      let oQ = FQ.b;
      const vQ = QQ[oQ],
        uQ = vQ >> 1 & 3;
      FQ.l = 1 & vQ;
      const HQ = vQ >> 3 | QQ[oQ + 1] << 5 | QQ[oQ + 2] << 13,
        eQ = (oQ += 3) + HQ;
      if (1 == uQ) {
        if (oQ >= QQ.length) return;
        return FQ.b = oQ + 1, qQ ? (kQ(qQ, QQ[oQ], FQ.y, FQ.y += HQ), qQ) : kQ(new wQ(HQ), QQ[oQ])
      }
      if (!(eQ > QQ.length)) {
        if (0 == uQ) return FQ.b = eQ, qQ ? (qQ.set(QQ.subarray(oQ, eQ), FQ.y), FQ.y += HQ, qQ) : DQ(QQ, oQ, eQ);
        if (2 == uQ) {
          const vQ = QQ[oQ],
            uQ = 3 & vQ,
            HQ = vQ >> 2 & 3;
          let iQ = vQ >> 4,
            WQ = 0,
            RQ = 0;
          uQ < 2 ? 1 & HQ ? iQ |= QQ[++oQ] << 4 | (2 & HQ && QQ[++oQ] << 12) : iQ = vQ >> 3 : (RQ = HQ, HQ < 2 ? (iQ |= (63 & QQ[++oQ]) << 4, WQ = QQ[oQ] >> 6 | QQ[++oQ] << 2) : 2 == HQ ? (iQ |= QQ[++oQ] << 4 | (3 & QQ[++oQ]) << 12, WQ = QQ[oQ] >> 2 | QQ[++oQ] << 6) : (iQ |= QQ[++oQ] << 4 | (63 & QQ[++oQ]) << 12, WQ = QQ[oQ] >> 6 | QQ[++oQ] << 2 | QQ[++oQ] << 10)), ++oQ;
          let OQ = qQ ? qQ.subarray(FQ.y, FQ.y + FQ.m) : new wQ(FQ.m),
            sQ = OQ.length - iQ;
          if (sQ < 0 && mQ(0), 0 == uQ) OQ.set(QQ.subarray(oQ, oQ += iQ), sQ);
          else if (1 == uQ) kQ(OQ, QQ[oQ++], sQ);
          else {
            let qQ = FQ.h;
            if (2 == uQ) {
              const DQ = ((QQ, FQ) => {
                let qQ = 0,
                  oQ = -1;
                const DQ = new wQ(292),
                  vQ = QQ[FQ],
                  uQ = DQ.subarray(0, 256),
                  HQ = DQ.subarray(256, 268),
                  xQ = new LQ(DQ.buffer, 268);
                if (vQ < 128) {
                  const [wQ, LQ] = YQ(QQ, FQ + 1, 6), qQ = wQ << 3, DQ = QQ[FQ += vQ];
                  DQ || mQ(0);
                  let kQ = 0,
                    HQ = 0,
                    xQ = LQ.b,
                    AQ = xQ,
                    tQ = (++FQ << 3) - 8 + bQ(DQ);
                  for (; oQ > 254 && mQ(0), tQ -= xQ, !(tQ < qQ);) {
                    let FQ = tQ >> 3;
                    if (kQ += (QQ[FQ] | QQ[FQ + 1] << 8) >> (7 & tQ) & (1 << xQ) - 1, uQ[++oQ] = LQ.s[kQ], tQ -= AQ, tQ < qQ) break;
                    FQ = tQ >> 3, HQ += (QQ[FQ] | QQ[FQ + 1] << 8) >> (7 & tQ) & (1 << AQ) - 1, uQ[++oQ] = LQ.s[HQ], xQ = LQ.n[kQ], kQ = LQ.t[kQ], AQ = LQ.n[HQ], HQ = LQ.t[HQ]
                  }++oQ > 255 && mQ(0)
                } else {
                  for (oQ = vQ - 127; qQ < oQ; qQ += 2) {
                    const wQ = QQ[++FQ];
                    uQ[qQ] = wQ >> 4, uQ[qQ + 1] = 15 & wQ
                  }++FQ
                }
                let AQ = 0;
                for (qQ = 0; qQ < oQ; ++qQ) {
                  const QQ = uQ[qQ];
                  QQ > 11 && mQ(0), AQ += QQ && 1 << QQ - 1
                }
                const tQ = bQ(AQ) + 1,
                  eQ = 1 << tQ,
                  MQ = eQ - AQ;
                for (MQ & MQ - 1 && mQ(0), uQ[oQ++] = bQ(MQ) + 1, qQ = 0; qQ < oQ; ++qQ) {
                  const QQ = uQ[qQ];
                  ++HQ[uQ[qQ] = QQ && tQ + 1 - QQ]
                }
                const GQ = new wQ(eQ << 1),
                  pQ = GQ.subarray(0, eQ),
                  cQ = GQ.subarray(eQ);
                for (xQ[tQ] = 0, qQ = tQ; qQ > 0; --qQ) {
                  const QQ = xQ[qQ];
                  kQ(cQ, qQ, QQ, xQ[qQ - 1] = QQ + HQ[qQ] * (1 << tQ - qQ))
                }
                for (xQ[0] != eQ && mQ(0), qQ = 0; qQ < oQ; ++qQ) {
                  const QQ = uQ[qQ];
                  if (QQ) {
                    const FQ = xQ[QQ];
                    kQ(pQ, qQ, FQ, xQ[QQ] = FQ + (1 << tQ - QQ))
                  }
                }
                return [FQ, {
                  n: cQ,
                  b: tQ,
                  s: pQ
                }]
              })(QQ, oQ);
              WQ += oQ - (oQ = DQ[0]), FQ.h = qQ = DQ[1]
            } else qQ || mQ(0);
            (RQ ? SQ : CQ)(QQ.subarray(oQ, oQ += WQ), OQ.subarray(sQ), qQ)
          }
          let rQ = QQ[oQ++];
          if (rQ) {
            255 == rQ ? rQ = 32512 + (QQ[oQ++] | QQ[oQ++] << 8) : rQ > 127 && (rQ = rQ - 128 << 8 | QQ[oQ++]);
            const kQ = QQ[oQ++];
            3 & kQ && mQ(0);
            const vQ = [AQ, tQ, xQ];
            for (let qQ = 2; qQ > -1; --qQ) {
              const DQ = kQ >> 2 + (qQ << 1) & 3;
              if (1 == DQ) {
                const FQ = new wQ([0, 0, QQ[oQ++]]);
                vQ[qQ] = {
                  s: FQ.subarray(2, 3),
                  n: FQ.subarray(0, 1),
                  t: new LQ(FQ.buffer, 0, 1),
                  b: 0
                }
              } else 2 == DQ ? [oQ, vQ[qQ]] = YQ(QQ, oQ, 9 - (1 & qQ)) : 3 == DQ && (FQ.t || mQ(0), vQ[qQ] = FQ.t[qQ])
            }
            const [uQ, HQ, CQ] = FQ.t = vQ, SQ = QQ[eQ - 1];
            SQ || mQ(0);
            let iQ = (eQ << 3) - 8 + bQ(SQ) - CQ.b,
              WQ = iQ >> 3,
              RQ = 0,
              IQ = (QQ[WQ] | QQ[WQ + 1] << 8) >> (7 & iQ) & (1 << CQ.b) - 1;
            WQ = (iQ -= HQ.b) >> 3;
            let UQ = (QQ[WQ] | QQ[WQ + 1] << 8) >> (7 & iQ) & (1 << HQ.b) - 1;
            WQ = (iQ -= uQ.b) >> 3;
            let NQ = (QQ[WQ] | QQ[WQ + 1] << 8) >> (7 & iQ) & (1 << uQ.b) - 1;
            for (++rQ; --rQ;) {
              const wQ = CQ.s[IQ],
                LQ = CQ.n[IQ],
                qQ = uQ.s[NQ],
                oQ = uQ.n[NQ],
                DQ = HQ.s[UQ],
                kQ = HQ.n[UQ];
              WQ = (iQ -= DQ) >> 3;
              const vQ = 1 << DQ;
              let bQ = vQ + ((QQ[WQ] | QQ[WQ + 1] << 8 | QQ[WQ + 2] << 16 | QQ[WQ + 3] << 24) >>> (7 & iQ) & vQ - 1);
              WQ = (iQ -= pQ[qQ]) >> 3;
              let YQ = cQ[qQ] + ((QQ[WQ] | QQ[WQ + 1] << 8 | QQ[WQ + 2] << 16) >> (7 & iQ) & (1 << pQ[qQ]) - 1);
              WQ = (iQ -= MQ[wQ]) >> 3;
              const xQ = GQ[wQ] + ((QQ[WQ] | QQ[WQ + 1] << 8 | QQ[WQ + 2] << 16) >> (7 & iQ) & (1 << MQ[wQ]) - 1);
              if ((iQ < 0 || sQ + xQ > OQ.length || RQ + xQ + YQ > OQ.length) && mQ(0), WQ = (iQ -= LQ) >> 3, IQ = CQ.t[IQ] + ((QQ[WQ] | QQ[WQ + 1] << 8) >> (7 & iQ) & (1 << LQ) - 1), WQ = (iQ -= oQ) >> 3, NQ = uQ.t[NQ] + ((QQ[WQ] | QQ[WQ + 1] << 8) >> (7 & iQ) & (1 << oQ) - 1), WQ = (iQ -= kQ) >> 3, UQ = HQ.t[UQ] + ((QQ[WQ] | QQ[WQ + 1] << 8) >> (7 & iQ) & (1 << kQ) - 1), bQ > 3) FQ.o[2] = FQ.o[1], FQ.o[1] = FQ.o[0], FQ.o[0] = bQ -= 3;
              else {
                const QQ = bQ - (0 != xQ);
                QQ ? (bQ = 3 == QQ ? FQ.o[0] - 1 : FQ.o[QQ], QQ > 1 && (FQ.o[2] = FQ.o[1]), FQ.o[1] = FQ.o[0], FQ.o[0] = bQ) : bQ = FQ.o[0]
              }
              for (let QQ = 0; QQ < xQ; ++QQ) OQ[RQ + QQ] = OQ[sQ + QQ];
              RQ += xQ, sQ += xQ;
              let AQ = RQ - bQ;
              if (AQ < 0) {
                let QQ = -AQ;
                const wQ = FQ.e + AQ;
                wQ < 0 && mQ(4), QQ > YQ && (QQ = YQ);
                for (let LQ = 0; LQ < QQ; ++LQ) OQ[RQ + LQ] = FQ.w[wQ + LQ];
                RQ += QQ, YQ -= QQ, AQ = 0
              }
              for (let QQ = 0; QQ < YQ; ++QQ) OQ[RQ + QQ] = OQ[AQ + QQ];
              RQ += YQ
            }
            if (RQ != sQ)
              for (; sQ < OQ.length;) OQ[RQ++] = OQ[sQ++];
            else RQ = OQ.length;
            qQ ? FQ.y += RQ : OQ = DQ(OQ, 0, RQ)
          } else if (qQ) {
            if (FQ.y += iQ, sQ)
              for (let QQ = 0; QQ < iQ; ++QQ) OQ[QQ] = OQ[sQ + QQ]
          } else sQ && (OQ = DQ(OQ, sQ));
          return FQ.b = eQ, OQ
        }
        mQ(2)
      }
    };
  class WQ {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    ym = 0;
    needed = 18;
    size;
    constructor(QQ) {
      this.size = QQ
    }
    push(QQ) {
      if (this.done) return;
      if (this.parts.push(QQ), this.ym += QQ.length, this.ym < this.needed) return;
      const FQ = ((QQ, FQ) => {
        if (1 == QQ.length) return QQ[0];
        const LQ = new wQ(FQ);
        for (let wQ = 0, qQ = 0; wQ < QQ.length; ++wQ) {
          const FQ = QQ[wQ];
          LQ.set(FQ, qQ), qQ += FQ.length
        }
        return LQ
      })(this.parts, this.ym);
      let LQ = this.st;
      if (!LQ) {
        const QQ = HQ(FQ, new wQ(0));
        "number" != typeof QQ && QQ.u === this.size || mQ(0, `not a zstd frame of ${this.size} bytes`), LQ = this.st = HQ(FQ, 1), LQ.e = 0, this.output = LQ.w
      }
      for (;;) {
        const QQ = FQ.length - LQ.b;
        if (QQ < 3) {
          this.needed = 3;
          break
        }
        const wQ = FQ[LQ.b],
          qQ = wQ >> 1 & 3;
        3 == qQ && mQ(2);
        const oQ = wQ >> 3 | FQ[LQ.b + 1] << 5 | FQ[LQ.b + 2] << 13;
        oQ > LQ.m && mQ(0), 0 == qQ && LQ.y + oQ > LQ.u && mQ(0);
        const DQ = 1 == qQ ? 4 : 3 + oQ;
        if (QQ < DQ) {
          this.needed = DQ;
          break
        }
        if (iQ(FQ, LQ, LQ.w) || mQ(5), LQ.e = LQ.y, (LQ.y > LQ.u || LQ.l && LQ.y != LQ.u) && mQ(0), LQ.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = LQ.y;
      const qQ = FQ.subarray(LQ.b);
      this.parts = qQ.length ? [qQ] : [], this.ym = qQ.length, LQ.b = 0
    }
  }
  class RQ {
    post;
    href = "";
    PY = null;
    given = 0;
    stopped = !1;
    constructor(QQ) {
      this.post = QQ
    }
    take(FQ) {
      if (!this.stopped) try {
        this.answer(FQ)
      } catch (wQ) {
        this.stop(wQ instanceof RangeError ? `out of memory decoding ${this.href}: ${QQ(wQ)}` : `${this.href} did not decode: ${QQ(wQ)}`)
      }
    }
    answer(QQ) {
      if (null === this.PY) {
        const [FQ, wQ] = QQ;
        return this.href = FQ, void(this.PY = new WQ(wQ))
      }
      if (null === QQ) return void this.stop(`${this.href} ended before its module did`);
      const FQ = this.PY;
      FQ.push(QQ);
      const {
        output: wQ,
        decoded: LQ
      } = FQ;
      if (null !== wQ && LQ > this.given) {
        const QQ = wQ.slice(this.given, LQ).buffer;
        this.given = LQ, this.post(QQ, [QQ])
      }
      FQ.done && this.stop(!0)
    }
    stop(QQ) {
      this.stopped = !0, this.post(QQ)
    }
  }
  const OQ = globalThis.WorkerGlobalScope;
  if (void 0 !== OQ && globalThis instanceof OQ) {
    const QQ = globalThis,
      FQ = new RQ((function(FQ) {
        let wQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        QQ.postMessage(FQ, wQ)
      }));
    QQ.addEventListener("message", (QQ => {
      let {
        data: wQ
      } = QQ;
      FQ.take(wQ)
    }))
  }
})();