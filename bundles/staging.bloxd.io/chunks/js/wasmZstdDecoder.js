(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var RR = __webpack_require__.u,
        JR = __webpack_require__.e,
        GR = {},
        yR = {};
      __webpack_require__.u = function(JR) {
        return RR(JR) + (GR.hasOwnProperty(JR) ? "?" + GR[JR] : "")
      }, __webpack_require__.e = function(tR) {
        return JR(tR).catch((function(JR) {
          var uR = yR.hasOwnProperty(tR) ? yR[tR] : 4;
          if (uR < 1) {
            var ZR = RR(tR);
            if (JR.message = "Loading chunk " + tR + " failed after 4 retries.\n(" + ZR + ")", JR.request = ZR, GR[tR] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete yR[tR]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === JR.code) {
              var qR = __webpack_require__.miniCssF(tR);
              JR.message = JR.message.replace("Loading chunk", "Loading CSS chunk").replace(ZR, qR), JR.request = qR
            }
            throw JR
          }
          return new Promise((function(RR) {
            var JR = 4 - uR + 1;
            setTimeout((function() {
              var JR = "cache-bust=" + Date.now();
              GR[tR] = JR, yR[tR] = uR - 1, RR(__webpack_require__.e(tR))
            }), function(RR) {
              return 500 * Math.pow(2, RR)
            }(JR))
          }))
        }))
      }
    }
  })();

  function RR(RR) {
    return RR instanceof Error ? RR.message : String(RR)
  }
  const JR = ArrayBuffer,
    GR = Uint8Array,
    yR = Uint16Array,
    tR = Int16Array,
    uR = Int32Array,
    ZR = (RR, JR, yR) => {
      if (GR.prototype.slice) return GR.prototype.slice.call(RR, JR, yR);
      (null == JR || JR < 0) && (JR = 0), (null == yR || yR > RR.length) && (yR = RR.length);
      const tR = new GR(yR - JR);
      return tR.set(RR.subarray(JR, yR)), tR
    },
    qR = (RR, JR, yR, tR) => {
      if (GR.prototype.fill) return GR.prototype.fill.call(RR, JR, yR, tR);
      for ((null == yR || yR < 0) && (yR = 0), (null == tR || tR > RR.length) && (tR = RR.length); yR < tR; ++yR) RR[yR] = JR;
      return RR
    },
    iR = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    fR = (RR, JR, GR) => {
      const yR = new Error(JR || iR[RR]);
      if (yR.code = RR, Error.captureStackTrace && Error.captureStackTrace(yR, fR), !GR) throw yR;
      return yR
    },
    VR = (RR, JR, GR) => {
      let yR = 0,
        tR = 0;
      for (; yR < GR; ++yR) tR |= RR[JR++] << (yR << 3);
      return tR
    },
    KR = (RR, JR) => {
      const yR = RR[0] | RR[1] << 8 | RR[2] << 16;
      if (3126568 == yR && 253 == RR[3]) {
        const yR = RR[4],
          tR = yR >> 5 & 1,
          ZR = yR >> 2 & 1,
          qR = 3 & yR,
          iR = yR >> 6;
        8 & yR && fR(0);
        let KR = 6 - tR;
        const wR = 3 == qR ? 4 : qR,
          rR = VR(RR, KR, wR);
        KR += wR;
        const eR = iR ? 1 << iR : tR,
          aR = VR(RR, KR, eR) + (1 == iR && 256);
        let LR = aR;
        if (!tR) {
          const JR = 1 << 10 + (RR[5] >> 3);
          LR = JR + (JR >> 3) * (7 & RR[5])
        }
        LR > 2145386496 && fR(1);
        const nR = new GR((1 == JR ? aR || LR : JR ? 0 : LR) + 12);
        return nR[0] = 1, nR[4] = 4, nR[8] = 8, {
          b: KR + eR,
          y: 0,
          l: 0,
          d: rR,
          w: JR && 1 != JR ? JR : nR.subarray(12),
          e: LR,
          o: new uR(nR.buffer, 0, 3),
          u: aR,
          c: ZR,
          m: Math.min(131072, LR)
        }
      }
      if (25481893 == (yR >> 4 | RR[3] << 20)) return 8 + (((tR = RR)[ZR = 4] | tR[ZR + 1] << 8 | tR[ZR + 2] << 16 | tR[ZR + 3] << 24) >>> 0);
      var tR, ZR;
      fR(0)
    },
    wR = RR => {
      let JR = 0;
      for (; 1 << JR <= RR; ++JR);
      return JR - 1
    },
    rR = (RR, uR, ZR) => {
      let qR = 4 + (uR << 3);
      const iR = 5 + (15 & RR[uR]);
      iR > ZR && fR(3);
      const VR = 1 << iR;
      let KR = VR,
        rR = -1,
        eR = -1,
        aR = -1,
        LR = VR;
      const nR = new JR(512 + (VR << 2)),
        UR = new tR(nR, 0, 256),
        WR = new yR(nR, 0, 256),
        AR = new yR(nR, 512, VR),
        CR = 512 + (VR << 1),
        XR = new GR(nR, CR, VR),
        MR = new GR(nR, CR + VR);
      for (; rR < 255 && KR > 0;) {
        const JR = wR(KR + 1),
          GR = qR >> 3,
          yR = (1 << JR + 1) - 1;
        let tR = (RR[GR] | RR[GR + 1] << 8 | RR[GR + 2] << 16) >> (7 & qR) & yR;
        const uR = (1 << JR) - 1,
          ZR = yR - KR - 1,
          iR = tR & uR;
        if (iR < ZR ? (qR += JR, tR = iR) : (qR += JR + 1, tR > uR && (tR -= ZR)), UR[++rR] = --tR, -1 == tR ? (KR += tR, XR[--LR] = rR) : KR -= tR, !tR)
          do {
            const JR = qR >> 3;
            eR = (RR[JR] | RR[JR + 1] << 8) >> (7 & qR) & 3, qR += 2, rR += eR
          } while (3 == eR)
      }(rR > 255 || KR) && fR(0);
      let BR = 0;
      const lR = (VR >> 1) + (VR >> 3) + 3,
        pR = VR - 1;
      for (let JR = 0; JR <= rR; ++JR) {
        const RR = UR[JR];
        if (RR < 1) WR[JR] = -RR;
        else
          for (aR = 0; aR < RR; ++aR) {
            XR[BR] = JR;
            do {
              BR = BR + lR & pR
            } while (BR >= LR)
          }
      }
      for (BR && fR(0), aR = 0; aR < VR; ++aR) {
        const RR = WR[XR[aR]]++,
          JR = MR[aR] = iR - wR(RR);
        AR[aR] = (RR << JR) - VR
      }
      return [qR + 7 >> 3, {
        b: iR,
        s: XR,
        n: MR,
        t: AR
      }]
    },
    eR = rR(new GR([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    aR = rR(new GR([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    LR = rR(new GR([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    nR = (RR, JR) => {
      const GR = RR.length,
        yR = new uR(GR);
      for (let tR = 0; tR < GR; ++tR) yR[tR] = JR, JR += 1 << RR[tR];
      return yR
    },
    UR = new GR(new uR([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    WR = nR(UR, 0),
    AR = new GR(new uR([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    CR = nR(AR, 3),
    XR = (RR, JR, GR) => {
      const yR = RR.length,
        tR = JR.length,
        uR = RR[yR - 1],
        ZR = (1 << GR.b) - 1,
        qR = -GR.b;
      uR || fR(0);
      let iR = 0,
        VR = GR.b,
        KR = (yR << 3) - 8 + wR(uR) - VR,
        rR = -1;
      for (; KR > qR && rR < tR;) {
        const yR = KR >> 3;
        iR = (iR << VR | (RR[yR] | RR[yR + 1] << 8 | RR[yR + 2] << 16) >> (7 & KR)) & ZR, JR[++rR] = GR.s[iR], KR -= VR = GR.n[iR]
      }
      KR == qR && rR + 1 == tR || fR(0)
    },
    MR = (RR, JR, GR) => {
      let yR = 6;
      const tR = JR.length + 3 >> 2,
        uR = tR << 1,
        ZR = tR + uR;
      XR(RR.subarray(yR, yR += RR[0] | RR[1] << 8), JR.subarray(0, tR), GR), XR(RR.subarray(yR, yR += RR[2] | RR[3] << 8), JR.subarray(tR, uR), GR), XR(RR.subarray(yR, yR += RR[4] | RR[5] << 8), JR.subarray(uR, ZR), GR), XR(RR.subarray(yR), JR.subarray(ZR), GR)
    },
    BR = (RR, JR, tR) => {
      let uR = JR.b;
      const iR = RR[uR],
        VR = iR >> 1 & 3;
      JR.l = 1 & iR;
      const KR = iR >> 3 | RR[uR + 1] << 5 | RR[uR + 2] << 13,
        nR = (uR += 3) + KR;
      if (1 == VR) {
        if (uR >= RR.length) return;
        return JR.b = uR + 1, tR ? (qR(tR, RR[uR], JR.y, JR.y += KR), tR) : qR(new GR(KR), RR[uR])
      }
      if (!(nR > RR.length)) {
        if (0 == VR) return JR.b = nR, tR ? (tR.set(RR.subarray(uR, nR), JR.y), JR.y += KR, tR) : ZR(RR, uR, nR);
        if (2 == VR) {
          const iR = RR[uR],
            VR = 3 & iR,
            KR = iR >> 2 & 3;
          let BR = iR >> 4,
            lR = 0,
            pR = 0;
          VR < 2 ? 1 & KR ? BR |= RR[++uR] << 4 | (2 & KR && RR[++uR] << 12) : BR = iR >> 3 : (pR = KR, KR < 2 ? (BR |= (63 & RR[++uR]) << 4, lR = RR[uR] >> 6 | RR[++uR] << 2) : 2 == KR ? (BR |= RR[++uR] << 4 | (3 & RR[++uR]) << 12, lR = RR[uR] >> 2 | RR[++uR] << 6) : (BR |= RR[++uR] << 4 | (63 & RR[++uR]) << 12, lR = RR[uR] >> 6 | RR[++uR] << 2 | RR[++uR] << 10)), ++uR;
          let gR = tR ? tR.subarray(JR.y, JR.y + JR.m) : new GR(JR.m),
            bR = gR.length - BR;
          if (bR < 0 && fR(0), 0 == VR) gR.set(RR.subarray(uR, uR += BR), bR);
          else if (1 == VR) qR(gR, RR[uR++], bR);
          else {
            let tR = JR.h;
            if (2 == VR) {
              const ZR = ((RR, JR) => {
                let tR = 0,
                  uR = -1;
                const ZR = new GR(292),
                  iR = RR[JR],
                  VR = ZR.subarray(0, 256),
                  KR = ZR.subarray(256, 268),
                  eR = new yR(ZR.buffer, 268);
                if (iR < 128) {
                  const [GR, yR] = rR(RR, JR + 1, 6), tR = GR << 3, ZR = RR[JR += iR];
                  ZR || fR(0);
                  let qR = 0,
                    KR = 0,
                    eR = yR.b,
                    aR = eR,
                    LR = (++JR << 3) - 8 + wR(ZR);
                  for (; uR > 254 && fR(0), LR -= eR, !(LR < tR);) {
                    let JR = LR >> 3;
                    if (qR += (RR[JR] | RR[JR + 1] << 8) >> (7 & LR) & (1 << eR) - 1, VR[++uR] = yR.s[qR], LR -= aR, LR < tR) break;
                    JR = LR >> 3, KR += (RR[JR] | RR[JR + 1] << 8) >> (7 & LR) & (1 << aR) - 1, VR[++uR] = yR.s[KR], eR = yR.n[qR], qR = yR.t[qR], aR = yR.n[KR], KR = yR.t[KR]
                  }++uR > 255 && fR(0)
                } else {
                  for (uR = iR - 127; tR < uR; tR += 2) {
                    const GR = RR[++JR];
                    VR[tR] = GR >> 4, VR[tR + 1] = 15 & GR
                  }++JR
                }
                let aR = 0;
                for (tR = 0; tR < uR; ++tR) {
                  const RR = VR[tR];
                  RR > 11 && fR(0), aR += RR && 1 << RR - 1
                }
                const LR = wR(aR) + 1,
                  nR = 1 << LR,
                  UR = nR - aR;
                for (UR & UR - 1 && fR(0), VR[uR++] = wR(UR) + 1, tR = 0; tR < uR; ++tR) {
                  const RR = VR[tR];
                  ++KR[VR[tR] = RR && LR + 1 - RR]
                }
                const WR = new GR(nR << 1),
                  AR = WR.subarray(0, nR),
                  CR = WR.subarray(nR);
                for (eR[LR] = 0, tR = LR; tR > 0; --tR) {
                  const RR = eR[tR];
                  qR(CR, tR, RR, eR[tR - 1] = RR + KR[tR] * (1 << LR - tR))
                }
                for (eR[0] != nR && fR(0), tR = 0; tR < uR; ++tR) {
                  const RR = VR[tR];
                  if (RR) {
                    const JR = eR[RR];
                    qR(AR, tR, JR, eR[RR] = JR + (1 << LR - RR))
                  }
                }
                return [JR, {
                  n: CR,
                  b: LR,
                  s: AR
                }]
              })(RR, uR);
              lR += uR - (uR = ZR[0]), JR.h = tR = ZR[1]
            } else tR || fR(0);
            (pR ? MR : XR)(RR.subarray(uR, uR += lR), gR.subarray(bR), tR)
          }
          let vR = RR[uR++];
          if (vR) {
            255 == vR ? vR = 32512 + (RR[uR++] | RR[uR++] << 8) : vR > 127 && (vR = vR - 128 << 8 | RR[uR++]);
            const qR = RR[uR++];
            3 & qR && fR(0);
            const iR = [aR, LR, eR];
            for (let tR = 2; tR > -1; --tR) {
              const ZR = qR >> 2 + (tR << 1) & 3;
              if (1 == ZR) {
                const JR = new GR([0, 0, RR[uR++]]);
                iR[tR] = {
                  s: JR.subarray(2, 3),
                  n: JR.subarray(0, 1),
                  t: new yR(JR.buffer, 0, 1),
                  b: 0
                }
              } else 2 == ZR ? [uR, iR[tR]] = rR(RR, uR, 9 - (1 & tR)) : 3 == ZR && (JR.t || fR(0), iR[tR] = JR.t[tR])
            }
            const [VR, KR, XR] = JR.t = iR, MR = RR[nR - 1];
            MR || fR(0);
            let BR = (nR << 3) - 8 + wR(MR) - XR.b,
              lR = BR >> 3,
              pR = 0,
              OR = (RR[lR] | RR[lR + 1] << 8) >> (7 & BR) & (1 << XR.b) - 1;
            lR = (BR -= KR.b) >> 3;
            let xR = (RR[lR] | RR[lR + 1] << 8) >> (7 & BR) & (1 << KR.b) - 1;
            lR = (BR -= VR.b) >> 3;
            let NR = (RR[lR] | RR[lR + 1] << 8) >> (7 & BR) & (1 << VR.b) - 1;
            for (++vR; --vR;) {
              const GR = XR.s[OR],
                yR = XR.n[OR],
                tR = VR.s[NR],
                uR = VR.n[NR],
                ZR = KR.s[xR],
                qR = KR.n[xR];
              lR = (BR -= ZR) >> 3;
              const iR = 1 << ZR;
              let wR = iR + ((RR[lR] | RR[lR + 1] << 8 | RR[lR + 2] << 16 | RR[lR + 3] << 24) >>> (7 & BR) & iR - 1);
              lR = (BR -= AR[tR]) >> 3;
              let rR = CR[tR] + ((RR[lR] | RR[lR + 1] << 8 | RR[lR + 2] << 16) >> (7 & BR) & (1 << AR[tR]) - 1);
              lR = (BR -= UR[GR]) >> 3;
              const eR = WR[GR] + ((RR[lR] | RR[lR + 1] << 8 | RR[lR + 2] << 16) >> (7 & BR) & (1 << UR[GR]) - 1);
              if ((BR < 0 || bR + eR > gR.length || pR + eR + rR > gR.length) && fR(0), lR = (BR -= yR) >> 3, OR = XR.t[OR] + ((RR[lR] | RR[lR + 1] << 8) >> (7 & BR) & (1 << yR) - 1), lR = (BR -= uR) >> 3, NR = VR.t[NR] + ((RR[lR] | RR[lR + 1] << 8) >> (7 & BR) & (1 << uR) - 1), lR = (BR -= qR) >> 3, xR = KR.t[xR] + ((RR[lR] | RR[lR + 1] << 8) >> (7 & BR) & (1 << qR) - 1), wR > 3) JR.o[2] = JR.o[1], JR.o[1] = JR.o[0], JR.o[0] = wR -= 3;
              else {
                const RR = wR - (0 != eR);
                RR ? (wR = 3 == RR ? JR.o[0] - 1 : JR.o[RR], RR > 1 && (JR.o[2] = JR.o[1]), JR.o[1] = JR.o[0], JR.o[0] = wR) : wR = JR.o[0]
              }
              for (let RR = 0; RR < eR; ++RR) gR[pR + RR] = gR[bR + RR];
              pR += eR, bR += eR;
              let aR = pR - wR;
              if (aR < 0) {
                let RR = -aR;
                const GR = JR.e + aR;
                GR < 0 && fR(4), RR > rR && (RR = rR);
                for (let yR = 0; yR < RR; ++yR) gR[pR + yR] = JR.w[GR + yR];
                pR += RR, rR -= RR, aR = 0
              }
              for (let RR = 0; RR < rR; ++RR) gR[pR + RR] = gR[aR + RR];
              pR += rR
            }
            if (pR != bR)
              for (; bR < gR.length;) gR[pR++] = gR[bR++];
            else pR = gR.length;
            tR ? JR.y += pR : gR = ZR(gR, 0, pR)
          } else if (tR) {
            if (JR.y += BR, bR)
              for (let RR = 0; RR < BR; ++RR) gR[RR] = gR[bR + RR]
          } else bR && (gR = ZR(gR, bR));
          return JR.b = nR, gR
        }
        fR(2)
      }
    };
  class lR {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    Qq = 0;
    needed = 18;
    size;
    constructor(RR) {
      this.size = RR
    }
    push(RR) {
      if (this.done) return;
      if (this.parts.push(RR), this.Qq += RR.length, this.Qq < this.needed) return;
      const JR = ((RR, JR) => {
        if (1 == RR.length) return RR[0];
        const yR = new GR(JR);
        for (let GR = 0, tR = 0; GR < RR.length; ++GR) {
          const JR = RR[GR];
          yR.set(JR, tR), tR += JR.length
        }
        return yR
      })(this.parts, this.Qq);
      let yR = this.st;
      if (!yR) {
        const RR = KR(JR, new GR(0));
        "number" != typeof RR && RR.u === this.size || fR(0, `not a zstd frame of ${this.size} bytes`), yR = this.st = KR(JR, 1), yR.e = 0, this.output = yR.w
      }
      for (;;) {
        const RR = JR.length - yR.b;
        if (RR < 3) {
          this.needed = 3;
          break
        }
        const GR = JR[yR.b],
          tR = GR >> 1 & 3;
        3 == tR && fR(2);
        const uR = GR >> 3 | JR[yR.b + 1] << 5 | JR[yR.b + 2] << 13;
        uR > yR.m && fR(0), 0 == tR && yR.y + uR > yR.u && fR(0);
        const ZR = 1 == tR ? 4 : 3 + uR;
        if (RR < ZR) {
          this.needed = ZR;
          break
        }
        if (BR(JR, yR, yR.w) || fR(5), yR.e = yR.y, (yR.y > yR.u || yR.l && yR.y != yR.u) && fR(0), yR.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = yR.y;
      const tR = JR.subarray(yR.b);
      this.parts = tR.length ? [tR] : [], this.Qq = tR.length, yR.b = 0
    }
  }
  class pR {
    post;
    href = "";
    VK = null;
    given = 0;
    stopped = !1;
    constructor(RR) {
      this.post = RR
    }
    take(JR) {
      if (!this.stopped) try {
        this.answer(JR)
      } catch (GR) {
        this.stop(GR instanceof RangeError ? `out of memory decoding ${this.href}: ${RR(GR)}` : `${this.href} did not decode: ${RR(GR)}`)
      }
    }
    answer(RR) {
      if (null === this.VK) {
        const [JR, GR] = RR;
        return this.href = JR, void(this.VK = new lR(GR))
      }
      if (null === RR) return void this.stop(`${this.href} ended before its module did`);
      const JR = this.VK;
      JR.push(RR);
      const {
        output: GR,
        decoded: yR
      } = JR;
      if (null !== GR && yR > this.given) {
        const RR = GR.slice(this.given, yR).buffer;
        this.given = yR, this.post(RR, [RR])
      }
      JR.done && this.stop(!0)
    }
    stop(RR) {
      this.stopped = !0, this.post(RR)
    }
  }
  const gR = globalThis.WorkerGlobalScope;
  if (void 0 !== gR && globalThis instanceof gR) {
    const RR = globalThis,
      JR = new pR((function(JR) {
        let GR = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        RR.postMessage(JR, GR)
      }));
    RR.addEventListener("message", (RR => {
      let {
        data: GR
      } = RR;
      JR.take(GR)
    }))
  }
})();