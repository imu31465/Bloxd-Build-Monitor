(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var QQ = __webpack_require__.u,
        WQ = __webpack_require__.e,
        XQ = {},
        wQ = {};
      __webpack_require__.u = function(WQ) {
        return QQ(WQ) + (XQ.hasOwnProperty(WQ) ? "?" + XQ[WQ] : "")
      }, __webpack_require__.e = function(qQ) {
        return WQ(qQ).catch((function(WQ) {
          var TQ = wQ.hasOwnProperty(qQ) ? wQ[qQ] : 4;
          if (TQ < 1) {
            var zQ = QQ(qQ);
            if (WQ.message = "Loading chunk " + qQ + " failed after 4 retries.\n(" + zQ + ")", WQ.request = zQ, XQ[qQ] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete wQ[qQ]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === WQ.code) {
              var sQ = __webpack_require__.miniCssF(qQ);
              WQ.message = WQ.message.replace("Loading chunk", "Loading CSS chunk").replace(zQ, sQ), WQ.request = sQ
            }
            throw WQ
          }
          return new Promise((function(QQ) {
            var WQ = 4 - TQ + 1;
            setTimeout((function() {
              var WQ = "cache-bust=" + Date.now();
              XQ[qQ] = WQ, wQ[qQ] = TQ - 1, QQ(__webpack_require__.e(qQ))
            }), function(QQ) {
              return 500 * Math.pow(2, QQ)
            }(WQ))
          }))
        }))
      }
    }
  })();

  function QQ(QQ) {
    return QQ instanceof Error ? QQ.message : String(QQ)
  }
  const WQ = ArrayBuffer,
    XQ = Uint8Array,
    wQ = Uint16Array,
    qQ = Int16Array,
    TQ = Int32Array,
    zQ = (QQ, WQ, wQ) => {
      if (XQ.prototype.slice) return XQ.prototype.slice.call(QQ, WQ, wQ);
      (null == WQ || WQ < 0) && (WQ = 0), (null == wQ || wQ > QQ.length) && (wQ = QQ.length);
      const qQ = new XQ(wQ - WQ);
      return qQ.set(QQ.subarray(WQ, wQ)), qQ
    },
    sQ = (QQ, WQ, wQ, qQ) => {
      if (XQ.prototype.fill) return XQ.prototype.fill.call(QQ, WQ, wQ, qQ);
      for ((null == wQ || wQ < 0) && (wQ = 0), (null == qQ || qQ > QQ.length) && (qQ = QQ.length); wQ < qQ; ++wQ) QQ[wQ] = WQ;
      return QQ
    },
    FQ = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    PQ = (QQ, WQ, XQ) => {
      const wQ = new Error(WQ || FQ[QQ]);
      if (wQ.code = QQ, Error.captureStackTrace && Error.captureStackTrace(wQ, PQ), !XQ) throw wQ;
      return wQ
    },
    gQ = (QQ, WQ, XQ) => {
      let wQ = 0,
        qQ = 0;
      for (; wQ < XQ; ++wQ) qQ |= QQ[WQ++] << (wQ << 3);
      return qQ
    },
    JQ = (QQ, WQ) => {
      const wQ = QQ[0] | QQ[1] << 8 | QQ[2] << 16;
      if (3126568 == wQ && 253 == QQ[3]) {
        const wQ = QQ[4],
          qQ = wQ >> 5 & 1,
          zQ = wQ >> 2 & 1,
          sQ = 3 & wQ,
          FQ = wQ >> 6;
        8 & wQ && PQ(0);
        let JQ = 6 - qQ;
        const rQ = 3 == sQ ? 4 : sQ,
          IQ = gQ(QQ, JQ, rQ);
        JQ += rQ;
        const jQ = FQ ? 1 << FQ : qQ,
          BQ = gQ(QQ, JQ, jQ) + (1 == FQ && 256);
        let yQ = BQ;
        if (!qQ) {
          const WQ = 1 << 10 + (QQ[5] >> 3);
          yQ = WQ + (WQ >> 3) * (7 & QQ[5])
        }
        yQ > 2145386496 && PQ(1);
        const VQ = new XQ((1 == WQ ? BQ || yQ : WQ ? 0 : yQ) + 12);
        return VQ[0] = 1, VQ[4] = 4, VQ[8] = 8, {
          b: JQ + jQ,
          y: 0,
          l: 0,
          d: IQ,
          w: WQ && 1 != WQ ? WQ : VQ.subarray(12),
          e: yQ,
          o: new TQ(VQ.buffer, 0, 3),
          u: BQ,
          c: zQ,
          m: Math.min(131072, yQ)
        }
      }
      if (25481893 == (wQ >> 4 | QQ[3] << 20)) return 8 + (((qQ = QQ)[zQ = 4] | qQ[zQ + 1] << 8 | qQ[zQ + 2] << 16 | qQ[zQ + 3] << 24) >>> 0);
      var qQ, zQ;
      PQ(0)
    },
    rQ = QQ => {
      let WQ = 0;
      for (; 1 << WQ <= QQ; ++WQ);
      return WQ - 1
    },
    IQ = (QQ, TQ, zQ) => {
      let sQ = 4 + (TQ << 3);
      const FQ = 5 + (15 & QQ[TQ]);
      FQ > zQ && PQ(3);
      const gQ = 1 << FQ;
      let JQ = gQ,
        IQ = -1,
        jQ = -1,
        BQ = -1,
        yQ = gQ;
      const VQ = new WQ(512 + (gQ << 2)),
        DQ = new qQ(VQ, 0, 256),
        pQ = new wQ(VQ, 0, 256),
        GQ = new wQ(VQ, 512, gQ),
        UQ = 512 + (gQ << 1),
        bQ = new XQ(VQ, UQ, gQ),
        vQ = new XQ(VQ, UQ + gQ);
      for (; IQ < 255 && JQ > 0;) {
        const WQ = rQ(JQ + 1),
          XQ = sQ >> 3,
          wQ = (1 << WQ + 1) - 1;
        let qQ = (QQ[XQ] | QQ[XQ + 1] << 8 | QQ[XQ + 2] << 16) >> (7 & sQ) & wQ;
        const TQ = (1 << WQ) - 1,
          zQ = wQ - JQ - 1,
          FQ = qQ & TQ;
        if (FQ < zQ ? (sQ += WQ, qQ = FQ) : (sQ += WQ + 1, qQ > TQ && (qQ -= zQ)), DQ[++IQ] = --qQ, -1 == qQ ? (JQ += qQ, bQ[--yQ] = IQ) : JQ -= qQ, !qQ)
          do {
            const WQ = sQ >> 3;
            jQ = (QQ[WQ] | QQ[WQ + 1] << 8) >> (7 & sQ) & 3, sQ += 2, IQ += jQ
          } while (3 == jQ)
      }(IQ > 255 || JQ) && PQ(0);
      let dQ = 0;
      const HQ = (gQ >> 1) + (gQ >> 3) + 3,
        aQ = gQ - 1;
      for (let WQ = 0; WQ <= IQ; ++WQ) {
        const QQ = DQ[WQ];
        if (QQ < 1) pQ[WQ] = -QQ;
        else
          for (BQ = 0; BQ < QQ; ++BQ) {
            bQ[dQ] = WQ;
            do {
              dQ = dQ + HQ & aQ
            } while (dQ >= yQ)
          }
      }
      for (dQ && PQ(0), BQ = 0; BQ < gQ; ++BQ) {
        const QQ = pQ[bQ[BQ]]++,
          WQ = vQ[BQ] = FQ - rQ(QQ);
        GQ[BQ] = (QQ << WQ) - gQ
      }
      return [sQ + 7 >> 3, {
        b: FQ,
        s: bQ,
        n: vQ,
        t: GQ
      }]
    },
    jQ = IQ(new XQ([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    BQ = IQ(new XQ([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    yQ = IQ(new XQ([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    VQ = (QQ, WQ) => {
      const XQ = QQ.length,
        wQ = new TQ(XQ);
      for (let qQ = 0; qQ < XQ; ++qQ) wQ[qQ] = WQ, WQ += 1 << QQ[qQ];
      return wQ
    },
    DQ = new XQ(new TQ([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    pQ = VQ(DQ, 0),
    GQ = new XQ(new TQ([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    UQ = VQ(GQ, 3),
    bQ = (QQ, WQ, XQ) => {
      const wQ = QQ.length,
        qQ = WQ.length,
        TQ = QQ[wQ - 1],
        zQ = (1 << XQ.b) - 1,
        sQ = -XQ.b;
      TQ || PQ(0);
      let FQ = 0,
        gQ = XQ.b,
        JQ = (wQ << 3) - 8 + rQ(TQ) - gQ,
        IQ = -1;
      for (; JQ > sQ && IQ < qQ;) {
        const wQ = JQ >> 3;
        FQ = (FQ << gQ | (QQ[wQ] | QQ[wQ + 1] << 8 | QQ[wQ + 2] << 16) >> (7 & JQ)) & zQ, WQ[++IQ] = XQ.s[FQ], JQ -= gQ = XQ.n[FQ]
      }
      JQ == sQ && IQ + 1 == qQ || PQ(0)
    },
    vQ = (QQ, WQ, XQ) => {
      let wQ = 6;
      const qQ = WQ.length + 3 >> 2,
        TQ = qQ << 1,
        zQ = qQ + TQ;
      bQ(QQ.subarray(wQ, wQ += QQ[0] | QQ[1] << 8), WQ.subarray(0, qQ), XQ), bQ(QQ.subarray(wQ, wQ += QQ[2] | QQ[3] << 8), WQ.subarray(qQ, TQ), XQ), bQ(QQ.subarray(wQ, wQ += QQ[4] | QQ[5] << 8), WQ.subarray(TQ, zQ), XQ), bQ(QQ.subarray(wQ), WQ.subarray(zQ), XQ)
    },
    dQ = (QQ, WQ, qQ) => {
      let TQ = WQ.b;
      const FQ = QQ[TQ],
        gQ = FQ >> 1 & 3;
      WQ.l = 1 & FQ;
      const JQ = FQ >> 3 | QQ[TQ + 1] << 5 | QQ[TQ + 2] << 13,
        VQ = (TQ += 3) + JQ;
      if (1 == gQ) {
        if (TQ >= QQ.length) return;
        return WQ.b = TQ + 1, qQ ? (sQ(qQ, QQ[TQ], WQ.y, WQ.y += JQ), qQ) : sQ(new XQ(JQ), QQ[TQ])
      }
      if (!(VQ > QQ.length)) {
        if (0 == gQ) return WQ.b = VQ, qQ ? (qQ.set(QQ.subarray(TQ, VQ), WQ.y), WQ.y += JQ, qQ) : zQ(QQ, TQ, VQ);
        if (2 == gQ) {
          const FQ = QQ[TQ],
            gQ = 3 & FQ,
            JQ = FQ >> 2 & 3;
          let dQ = FQ >> 4,
            HQ = 0,
            aQ = 0;
          gQ < 2 ? 1 & JQ ? dQ |= QQ[++TQ] << 4 | (2 & JQ && QQ[++TQ] << 12) : dQ = FQ >> 3 : (aQ = JQ, JQ < 2 ? (dQ |= (63 & QQ[++TQ]) << 4, HQ = QQ[TQ] >> 6 | QQ[++TQ] << 2) : 2 == JQ ? (dQ |= QQ[++TQ] << 4 | (3 & QQ[++TQ]) << 12, HQ = QQ[TQ] >> 2 | QQ[++TQ] << 6) : (dQ |= QQ[++TQ] << 4 | (63 & QQ[++TQ]) << 12, HQ = QQ[TQ] >> 6 | QQ[++TQ] << 2 | QQ[++TQ] << 10)), ++TQ;
          let lQ = qQ ? qQ.subarray(WQ.y, WQ.y + WQ.m) : new XQ(WQ.m),
            hQ = lQ.length - dQ;
          if (hQ < 0 && PQ(0), 0 == gQ) lQ.set(QQ.subarray(TQ, TQ += dQ), hQ);
          else if (1 == gQ) sQ(lQ, QQ[TQ++], hQ);
          else {
            let qQ = WQ.h;
            if (2 == gQ) {
              const zQ = ((QQ, WQ) => {
                let qQ = 0,
                  TQ = -1;
                const zQ = new XQ(292),
                  FQ = QQ[WQ],
                  gQ = zQ.subarray(0, 256),
                  JQ = zQ.subarray(256, 268),
                  jQ = new wQ(zQ.buffer, 268);
                if (FQ < 128) {
                  const [XQ, wQ] = IQ(QQ, WQ + 1, 6), qQ = XQ << 3, zQ = QQ[WQ += FQ];
                  zQ || PQ(0);
                  let sQ = 0,
                    JQ = 0,
                    jQ = wQ.b,
                    BQ = jQ,
                    yQ = (++WQ << 3) - 8 + rQ(zQ);
                  for (; TQ > 254 && PQ(0), yQ -= jQ, !(yQ < qQ);) {
                    let WQ = yQ >> 3;
                    if (sQ += (QQ[WQ] | QQ[WQ + 1] << 8) >> (7 & yQ) & (1 << jQ) - 1, gQ[++TQ] = wQ.s[sQ], yQ -= BQ, yQ < qQ) break;
                    WQ = yQ >> 3, JQ += (QQ[WQ] | QQ[WQ + 1] << 8) >> (7 & yQ) & (1 << BQ) - 1, gQ[++TQ] = wQ.s[JQ], jQ = wQ.n[sQ], sQ = wQ.t[sQ], BQ = wQ.n[JQ], JQ = wQ.t[JQ]
                  }++TQ > 255 && PQ(0)
                } else {
                  for (TQ = FQ - 127; qQ < TQ; qQ += 2) {
                    const XQ = QQ[++WQ];
                    gQ[qQ] = XQ >> 4, gQ[qQ + 1] = 15 & XQ
                  }++WQ
                }
                let BQ = 0;
                for (qQ = 0; qQ < TQ; ++qQ) {
                  const QQ = gQ[qQ];
                  QQ > 11 && PQ(0), BQ += QQ && 1 << QQ - 1
                }
                const yQ = rQ(BQ) + 1,
                  VQ = 1 << yQ,
                  DQ = VQ - BQ;
                for (DQ & DQ - 1 && PQ(0), gQ[TQ++] = rQ(DQ) + 1, qQ = 0; qQ < TQ; ++qQ) {
                  const QQ = gQ[qQ];
                  ++JQ[gQ[qQ] = QQ && yQ + 1 - QQ]
                }
                const pQ = new XQ(VQ << 1),
                  GQ = pQ.subarray(0, VQ),
                  UQ = pQ.subarray(VQ);
                for (jQ[yQ] = 0, qQ = yQ; qQ > 0; --qQ) {
                  const QQ = jQ[qQ];
                  sQ(UQ, qQ, QQ, jQ[qQ - 1] = QQ + JQ[qQ] * (1 << yQ - qQ))
                }
                for (jQ[0] != VQ && PQ(0), qQ = 0; qQ < TQ; ++qQ) {
                  const QQ = gQ[qQ];
                  if (QQ) {
                    const WQ = jQ[QQ];
                    sQ(GQ, qQ, WQ, jQ[QQ] = WQ + (1 << yQ - QQ))
                  }
                }
                return [WQ, {
                  n: UQ,
                  b: yQ,
                  s: GQ
                }]
              })(QQ, TQ);
              HQ += TQ - (TQ = zQ[0]), WQ.h = qQ = zQ[1]
            } else qQ || PQ(0);
            (aQ ? vQ : bQ)(QQ.subarray(TQ, TQ += HQ), lQ.subarray(hQ), qQ)
          }
          let iQ = QQ[TQ++];
          if (iQ) {
            255 == iQ ? iQ = 32512 + (QQ[TQ++] | QQ[TQ++] << 8) : iQ > 127 && (iQ = iQ - 128 << 8 | QQ[TQ++]);
            const sQ = QQ[TQ++];
            3 & sQ && PQ(0);
            const FQ = [BQ, yQ, jQ];
            for (let qQ = 2; qQ > -1; --qQ) {
              const zQ = sQ >> 2 + (qQ << 1) & 3;
              if (1 == zQ) {
                const WQ = new XQ([0, 0, QQ[TQ++]]);
                FQ[qQ] = {
                  s: WQ.subarray(2, 3),
                  n: WQ.subarray(0, 1),
                  t: new wQ(WQ.buffer, 0, 1),
                  b: 0
                }
              } else 2 == zQ ? [TQ, FQ[qQ]] = IQ(QQ, TQ, 9 - (1 & qQ)) : 3 == zQ && (WQ.t || PQ(0), FQ[qQ] = WQ.t[qQ])
            }
            const [gQ, JQ, bQ] = WQ.t = FQ, vQ = QQ[VQ - 1];
            vQ || PQ(0);
            let dQ = (VQ << 3) - 8 + rQ(vQ) - bQ.b,
              HQ = dQ >> 3,
              aQ = 0,
              cQ = (QQ[HQ] | QQ[HQ + 1] << 8) >> (7 & dQ) & (1 << bQ.b) - 1;
            HQ = (dQ -= JQ.b) >> 3;
            let AQ = (QQ[HQ] | QQ[HQ + 1] << 8) >> (7 & dQ) & (1 << JQ.b) - 1;
            HQ = (dQ -= gQ.b) >> 3;
            let RQ = (QQ[HQ] | QQ[HQ + 1] << 8) >> (7 & dQ) & (1 << gQ.b) - 1;
            for (++iQ; --iQ;) {
              const XQ = bQ.s[cQ],
                wQ = bQ.n[cQ],
                qQ = gQ.s[RQ],
                TQ = gQ.n[RQ],
                zQ = JQ.s[AQ],
                sQ = JQ.n[AQ];
              HQ = (dQ -= zQ) >> 3;
              const FQ = 1 << zQ;
              let rQ = FQ + ((QQ[HQ] | QQ[HQ + 1] << 8 | QQ[HQ + 2] << 16 | QQ[HQ + 3] << 24) >>> (7 & dQ) & FQ - 1);
              HQ = (dQ -= GQ[qQ]) >> 3;
              let IQ = UQ[qQ] + ((QQ[HQ] | QQ[HQ + 1] << 8 | QQ[HQ + 2] << 16) >> (7 & dQ) & (1 << GQ[qQ]) - 1);
              HQ = (dQ -= DQ[XQ]) >> 3;
              const jQ = pQ[XQ] + ((QQ[HQ] | QQ[HQ + 1] << 8 | QQ[HQ + 2] << 16) >> (7 & dQ) & (1 << DQ[XQ]) - 1);
              if ((dQ < 0 || hQ + jQ > lQ.length || aQ + jQ + IQ > lQ.length) && PQ(0), HQ = (dQ -= wQ) >> 3, cQ = bQ.t[cQ] + ((QQ[HQ] | QQ[HQ + 1] << 8) >> (7 & dQ) & (1 << wQ) - 1), HQ = (dQ -= TQ) >> 3, RQ = gQ.t[RQ] + ((QQ[HQ] | QQ[HQ + 1] << 8) >> (7 & dQ) & (1 << TQ) - 1), HQ = (dQ -= sQ) >> 3, AQ = JQ.t[AQ] + ((QQ[HQ] | QQ[HQ + 1] << 8) >> (7 & dQ) & (1 << sQ) - 1), rQ > 3) WQ.o[2] = WQ.o[1], WQ.o[1] = WQ.o[0], WQ.o[0] = rQ -= 3;
              else {
                const QQ = rQ - (0 != jQ);
                QQ ? (rQ = 3 == QQ ? WQ.o[0] - 1 : WQ.o[QQ], QQ > 1 && (WQ.o[2] = WQ.o[1]), WQ.o[1] = WQ.o[0], WQ.o[0] = rQ) : rQ = WQ.o[0]
              }
              for (let QQ = 0; QQ < jQ; ++QQ) lQ[aQ + QQ] = lQ[hQ + QQ];
              aQ += jQ, hQ += jQ;
              let BQ = aQ - rQ;
              if (BQ < 0) {
                let QQ = -BQ;
                const XQ = WQ.e + BQ;
                XQ < 0 && PQ(4), QQ > IQ && (QQ = IQ);
                for (let wQ = 0; wQ < QQ; ++wQ) lQ[aQ + wQ] = WQ.w[XQ + wQ];
                aQ += QQ, IQ -= QQ, BQ = 0
              }
              for (let QQ = 0; QQ < IQ; ++QQ) lQ[aQ + QQ] = lQ[BQ + QQ];
              aQ += IQ
            }
            if (aQ != hQ)
              for (; hQ < lQ.length;) lQ[aQ++] = lQ[hQ++];
            else aQ = lQ.length;
            qQ ? WQ.y += aQ : lQ = zQ(lQ, 0, aQ)
          } else if (qQ) {
            if (WQ.y += dQ, hQ)
              for (let QQ = 0; QQ < dQ; ++QQ) lQ[QQ] = lQ[hQ + QQ]
          } else hQ && (lQ = zQ(lQ, hQ));
          return WQ.b = VQ, lQ
        }
        PQ(2)
      }
    };
  class HQ {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    Ds = 0;
    needed = 18;
    size;
    constructor(QQ) {
      this.size = QQ
    }
    push(QQ) {
      if (this.done) return;
      if (this.parts.push(QQ), this.Ds += QQ.length, this.Ds < this.needed) return;
      const WQ = ((QQ, WQ) => {
        if (1 == QQ.length) return QQ[0];
        const wQ = new XQ(WQ);
        for (let XQ = 0, qQ = 0; XQ < QQ.length; ++XQ) {
          const WQ = QQ[XQ];
          wQ.set(WQ, qQ), qQ += WQ.length
        }
        return wQ
      })(this.parts, this.Ds);
      let wQ = this.st;
      if (!wQ) {
        const QQ = JQ(WQ, new XQ(0));
        "number" != typeof QQ && QQ.u === this.size || PQ(0, `not a zstd frame of ${this.size} bytes`), wQ = this.st = JQ(WQ, 1), wQ.e = 0, this.output = wQ.w
      }
      for (;;) {
        const QQ = WQ.length - wQ.b;
        if (QQ < 3) {
          this.needed = 3;
          break
        }
        const XQ = WQ[wQ.b],
          qQ = XQ >> 1 & 3;
        3 == qQ && PQ(2);
        const TQ = XQ >> 3 | WQ[wQ.b + 1] << 5 | WQ[wQ.b + 2] << 13;
        TQ > wQ.m && PQ(0), 0 == qQ && wQ.y + TQ > wQ.u && PQ(0);
        const zQ = 1 == qQ ? 4 : 3 + TQ;
        if (QQ < zQ) {
          this.needed = zQ;
          break
        }
        if (dQ(WQ, wQ, wQ.w) || PQ(5), wQ.e = wQ.y, (wQ.y > wQ.u || wQ.l && wQ.y != wQ.u) && PQ(0), wQ.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = wQ.y;
      const qQ = WQ.subarray(wQ.b);
      this.parts = qQ.length ? [qQ] : [], this.Ds = qQ.length, wQ.b = 0
    }
  }
  class aQ {
    post;
    href = "";
    ZI = null;
    given = 0;
    stopped = !1;
    constructor(QQ) {
      this.post = QQ
    }
    take(WQ) {
      if (!this.stopped) try {
        this.answer(WQ)
      } catch (XQ) {
        this.stop(XQ instanceof RangeError ? `out of memory decoding ${this.href}: ${QQ(XQ)}` : `${this.href} did not decode: ${QQ(XQ)}`)
      }
    }
    answer(QQ) {
      if (null === this.ZI) {
        const [WQ, XQ] = QQ;
        return this.href = WQ, void(this.ZI = new HQ(XQ))
      }
      if (null === QQ) return void this.stop(`${this.href} ended before its module did`);
      const WQ = this.ZI;
      WQ.push(QQ);
      const {
        output: XQ,
        decoded: wQ
      } = WQ;
      if (null !== XQ && wQ > this.given) {
        const QQ = XQ.slice(this.given, wQ).buffer;
        this.given = wQ, this.post(QQ, [QQ])
      }
      WQ.done && this.stop(!0)
    }
    stop(QQ) {
      this.stopped = !0, this.post(QQ)
    }
  }
  const lQ = globalThis.WorkerGlobalScope;
  if (void 0 !== lQ && globalThis instanceof lQ) {
    const QQ = globalThis,
      WQ = new aQ((function(WQ) {
        let XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        QQ.postMessage(WQ, XQ)
      }));
    QQ.addEventListener("message", (QQ => {
      let {
        data: XQ
      } = QQ;
      WQ.take(XQ)
    }))
  }
})();