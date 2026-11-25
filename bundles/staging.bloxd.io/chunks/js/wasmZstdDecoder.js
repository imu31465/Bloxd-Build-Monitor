(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var GG = __webpack_require__.u,
        bG = __webpack_require__.e,
        ZG = {},
        wG = {};
      __webpack_require__.u = function(bG) {
        return GG(bG) + (ZG.hasOwnProperty(bG) ? "?" + ZG[bG] : "")
      }, __webpack_require__.e = function(SG) {
        return bG(SG).catch((function(bG) {
          var LG = wG.hasOwnProperty(SG) ? wG[SG] : 4;
          if (LG < 1) {
            var yG = GG(SG);
            if (bG.message = "Loading chunk " + SG + " failed after 4 retries.\n(" + yG + ")", bG.request = yG, ZG[SG] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete wG[SG]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === bG.code) {
              var kG = __webpack_require__.miniCssF(SG);
              bG.message = bG.message.replace("Loading chunk", "Loading CSS chunk").replace(yG, kG), bG.request = kG
            }
            throw bG
          }
          return new Promise((function(GG) {
            var bG = 4 - LG + 1;
            setTimeout((function() {
              var bG = "cache-bust=" + Date.now();
              ZG[SG] = bG, wG[SG] = LG - 1, GG(__webpack_require__.e(SG))
            }), function(GG) {
              return 500 * Math.pow(2, GG)
            }(bG))
          }))
        }))
      }
    }
  })();

  function GG(GG) {
    return GG instanceof Error ? GG.message : String(GG)
  }
  const bG = ArrayBuffer,
    ZG = Uint8Array,
    wG = Uint16Array,
    SG = Int16Array,
    LG = Int32Array,
    yG = (GG, bG, wG) => {
      if (ZG.prototype.slice) return ZG.prototype.slice.call(GG, bG, wG);
      (null == bG || bG < 0) && (bG = 0), (null == wG || wG > GG.length) && (wG = GG.length);
      const SG = new ZG(wG - bG);
      return SG.set(GG.subarray(bG, wG)), SG
    },
    kG = (GG, bG, wG, SG) => {
      if (ZG.prototype.fill) return ZG.prototype.fill.call(GG, bG, wG, SG);
      for ((null == wG || wG < 0) && (wG = 0), (null == SG || SG > GG.length) && (SG = GG.length); wG < SG; ++wG) GG[wG] = bG;
      return GG
    },
    UG = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    YG = (GG, bG, ZG) => {
      const wG = new Error(bG || UG[GG]);
      if (wG.code = GG, Error.captureStackTrace && Error.captureStackTrace(wG, YG), !ZG) throw wG;
      return wG
    },
    VG = (GG, bG, ZG) => {
      let wG = 0,
        SG = 0;
      for (; wG < ZG; ++wG) SG |= GG[bG++] << (wG << 3);
      return SG
    },
    pG = (GG, bG) => {
      const wG = GG[0] | GG[1] << 8 | GG[2] << 16;
      if (3126568 == wG && 253 == GG[3]) {
        const wG = GG[4],
          SG = wG >> 5 & 1,
          yG = wG >> 2 & 1,
          kG = 3 & wG,
          UG = wG >> 6;
        8 & wG && YG(0);
        let pG = 6 - SG;
        const fG = 3 == kG ? 4 : kG,
          QG = VG(GG, pG, fG);
        pG += fG;
        const KG = UG ? 1 << UG : SG,
          hG = VG(GG, pG, KG) + (1 == UG && 256);
        let dG = hG;
        if (!SG) {
          const bG = 1 << 10 + (GG[5] >> 3);
          dG = bG + (bG >> 3) * (7 & GG[5])
        }
        dG > 2145386496 && YG(1);
        const JG = new ZG((1 == bG ? hG || dG : bG ? 0 : dG) + 12);
        return JG[0] = 1, JG[4] = 4, JG[8] = 8, {
          b: pG + KG,
          y: 0,
          l: 0,
          d: QG,
          w: bG && 1 != bG ? bG : JG.subarray(12),
          e: dG,
          o: new LG(JG.buffer, 0, 3),
          u: hG,
          c: yG,
          m: Math.min(131072, dG)
        }
      }
      if (25481893 == (wG >> 4 | GG[3] << 20)) return 8 + (((SG = GG)[yG = 4] | SG[yG + 1] << 8 | SG[yG + 2] << 16 | SG[yG + 3] << 24) >>> 0);
      var SG, yG;
      YG(0)
    },
    fG = GG => {
      let bG = 0;
      for (; 1 << bG <= GG; ++bG);
      return bG - 1
    },
    QG = (GG, LG, yG) => {
      let kG = 4 + (LG << 3);
      const UG = 5 + (15 & GG[LG]);
      UG > yG && YG(3);
      const VG = 1 << UG;
      let pG = VG,
        QG = -1,
        KG = -1,
        hG = -1,
        dG = VG;
      const JG = new bG(512 + (VG << 2)),
        rG = new SG(JG, 0, 256),
        zG = new wG(JG, 0, 256),
        EG = new wG(JG, 512, VG),
        oG = 512 + (VG << 1),
        XG = new ZG(JG, oG, VG),
        uG = new ZG(JG, oG + VG);
      for (; QG < 255 && pG > 0;) {
        const bG = fG(pG + 1),
          ZG = kG >> 3,
          wG = (1 << bG + 1) - 1;
        let SG = (GG[ZG] | GG[ZG + 1] << 8 | GG[ZG + 2] << 16) >> (7 & kG) & wG;
        const LG = (1 << bG) - 1,
          yG = wG - pG - 1,
          UG = SG & LG;
        if (UG < yG ? (kG += bG, SG = UG) : (kG += bG + 1, SG > LG && (SG -= yG)), rG[++QG] = --SG, -1 == SG ? (pG += SG, XG[--dG] = QG) : pG -= SG, !SG)
          do {
            const bG = kG >> 3;
            KG = (GG[bG] | GG[bG + 1] << 8) >> (7 & kG) & 3, kG += 2, QG += KG
          } while (3 == KG)
      }(QG > 255 || pG) && YG(0);
      let iG = 0;
      const CG = (VG >> 1) + (VG >> 3) + 3,
        WG = VG - 1;
      for (let bG = 0; bG <= QG; ++bG) {
        const GG = rG[bG];
        if (GG < 1) zG[bG] = -GG;
        else
          for (hG = 0; hG < GG; ++hG) {
            XG[iG] = bG;
            do {
              iG = iG + CG & WG
            } while (iG >= dG)
          }
      }
      for (iG && YG(0), hG = 0; hG < VG; ++hG) {
        const GG = zG[XG[hG]]++,
          bG = uG[hG] = UG - fG(GG);
        EG[hG] = (GG << bG) - VG
      }
      return [kG + 7 >> 3, {
        b: UG,
        s: XG,
        n: uG,
        t: EG
      }]
    },
    KG = QG(new ZG([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    hG = QG(new ZG([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    dG = QG(new ZG([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    JG = (GG, bG) => {
      const ZG = GG.length,
        wG = new LG(ZG);
      for (let SG = 0; SG < ZG; ++SG) wG[SG] = bG, bG += 1 << GG[SG];
      return wG
    },
    rG = new ZG(new LG([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    zG = JG(rG, 0),
    EG = new ZG(new LG([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    oG = JG(EG, 3),
    XG = (GG, bG, ZG) => {
      const wG = GG.length,
        SG = bG.length,
        LG = GG[wG - 1],
        yG = (1 << ZG.b) - 1,
        kG = -ZG.b;
      LG || YG(0);
      let UG = 0,
        VG = ZG.b,
        pG = (wG << 3) - 8 + fG(LG) - VG,
        QG = -1;
      for (; pG > kG && QG < SG;) {
        const wG = pG >> 3;
        UG = (UG << VG | (GG[wG] | GG[wG + 1] << 8 | GG[wG + 2] << 16) >> (7 & pG)) & yG, bG[++QG] = ZG.s[UG], pG -= VG = ZG.n[UG]
      }
      pG == kG && QG + 1 == SG || YG(0)
    },
    uG = (GG, bG, ZG) => {
      let wG = 6;
      const SG = bG.length + 3 >> 2,
        LG = SG << 1,
        yG = SG + LG;
      XG(GG.subarray(wG, wG += GG[0] | GG[1] << 8), bG.subarray(0, SG), ZG), XG(GG.subarray(wG, wG += GG[2] | GG[3] << 8), bG.subarray(SG, LG), ZG), XG(GG.subarray(wG, wG += GG[4] | GG[5] << 8), bG.subarray(LG, yG), ZG), XG(GG.subarray(wG), bG.subarray(yG), ZG)
    },
    iG = (GG, bG, SG) => {
      let LG = bG.b;
      const UG = GG[LG],
        VG = UG >> 1 & 3;
      bG.l = 1 & UG;
      const pG = UG >> 3 | GG[LG + 1] << 5 | GG[LG + 2] << 13,
        JG = (LG += 3) + pG;
      if (1 == VG) {
        if (LG >= GG.length) return;
        return bG.b = LG + 1, SG ? (kG(SG, GG[LG], bG.y, bG.y += pG), SG) : kG(new ZG(pG), GG[LG])
      }
      if (!(JG > GG.length)) {
        if (0 == VG) return bG.b = JG, SG ? (SG.set(GG.subarray(LG, JG), bG.y), bG.y += pG, SG) : yG(GG, LG, JG);
        if (2 == VG) {
          const UG = GG[LG],
            VG = 3 & UG,
            pG = UG >> 2 & 3;
          let iG = UG >> 4,
            CG = 0,
            WG = 0;
          VG < 2 ? 1 & pG ? iG |= GG[++LG] << 4 | (2 & pG && GG[++LG] << 12) : iG = UG >> 3 : (WG = pG, pG < 2 ? (iG |= (63 & GG[++LG]) << 4, CG = GG[LG] >> 6 | GG[++LG] << 2) : 2 == pG ? (iG |= GG[++LG] << 4 | (3 & GG[++LG]) << 12, CG = GG[LG] >> 2 | GG[++LG] << 6) : (iG |= GG[++LG] << 4 | (63 & GG[++LG]) << 12, CG = GG[LG] >> 6 | GG[++LG] << 2 | GG[++LG] << 10)), ++LG;
          let mG = SG ? SG.subarray(bG.y, bG.y + bG.m) : new ZG(bG.m),
            IG = mG.length - iG;
          if (IG < 0 && YG(0), 0 == VG) mG.set(GG.subarray(LG, LG += iG), IG);
          else if (1 == VG) kG(mG, GG[LG++], IG);
          else {
            let SG = bG.h;
            if (2 == VG) {
              const yG = ((GG, bG) => {
                let SG = 0,
                  LG = -1;
                const yG = new ZG(292),
                  UG = GG[bG],
                  VG = yG.subarray(0, 256),
                  pG = yG.subarray(256, 268),
                  KG = new wG(yG.buffer, 268);
                if (UG < 128) {
                  const [ZG, wG] = QG(GG, bG + 1, 6), SG = ZG << 3, yG = GG[bG += UG];
                  yG || YG(0);
                  let kG = 0,
                    pG = 0,
                    KG = wG.b,
                    hG = KG,
                    dG = (++bG << 3) - 8 + fG(yG);
                  for (; LG > 254 && YG(0), dG -= KG, !(dG < SG);) {
                    let bG = dG >> 3;
                    if (kG += (GG[bG] | GG[bG + 1] << 8) >> (7 & dG) & (1 << KG) - 1, VG[++LG] = wG.s[kG], dG -= hG, dG < SG) break;
                    bG = dG >> 3, pG += (GG[bG] | GG[bG + 1] << 8) >> (7 & dG) & (1 << hG) - 1, VG[++LG] = wG.s[pG], KG = wG.n[kG], kG = wG.t[kG], hG = wG.n[pG], pG = wG.t[pG]
                  }++LG > 255 && YG(0)
                } else {
                  for (LG = UG - 127; SG < LG; SG += 2) {
                    const ZG = GG[++bG];
                    VG[SG] = ZG >> 4, VG[SG + 1] = 15 & ZG
                  }++bG
                }
                let hG = 0;
                for (SG = 0; SG < LG; ++SG) {
                  const GG = VG[SG];
                  GG > 11 && YG(0), hG += GG && 1 << GG - 1
                }
                const dG = fG(hG) + 1,
                  JG = 1 << dG,
                  rG = JG - hG;
                for (rG & rG - 1 && YG(0), VG[LG++] = fG(rG) + 1, SG = 0; SG < LG; ++SG) {
                  const GG = VG[SG];
                  ++pG[VG[SG] = GG && dG + 1 - GG]
                }
                const zG = new ZG(JG << 1),
                  EG = zG.subarray(0, JG),
                  oG = zG.subarray(JG);
                for (KG[dG] = 0, SG = dG; SG > 0; --SG) {
                  const GG = KG[SG];
                  kG(oG, SG, GG, KG[SG - 1] = GG + pG[SG] * (1 << dG - SG))
                }
                for (KG[0] != JG && YG(0), SG = 0; SG < LG; ++SG) {
                  const GG = VG[SG];
                  if (GG) {
                    const bG = KG[GG];
                    kG(EG, SG, bG, KG[GG] = bG + (1 << dG - GG))
                  }
                }
                return [bG, {
                  n: oG,
                  b: dG,
                  s: EG
                }]
              })(GG, LG);
              CG += LG - (LG = yG[0]), bG.h = SG = yG[1]
            } else SG || YG(0);
            (WG ? uG : XG)(GG.subarray(LG, LG += CG), mG.subarray(IG), SG)
          }
          let FG = GG[LG++];
          if (FG) {
            255 == FG ? FG = 32512 + (GG[LG++] | GG[LG++] << 8) : FG > 127 && (FG = FG - 128 << 8 | GG[LG++]);
            const kG = GG[LG++];
            3 & kG && YG(0);
            const UG = [hG, dG, KG];
            for (let SG = 2; SG > -1; --SG) {
              const yG = kG >> 2 + (SG << 1) & 3;
              if (1 == yG) {
                const bG = new ZG([0, 0, GG[LG++]]);
                UG[SG] = {
                  s: bG.subarray(2, 3),
                  n: bG.subarray(0, 1),
                  t: new wG(bG.buffer, 0, 1),
                  b: 0
                }
              } else 2 == yG ? [LG, UG[SG]] = QG(GG, LG, 9 - (1 & SG)) : 3 == yG && (bG.t || YG(0), UG[SG] = bG.t[SG])
            }
            const [VG, pG, XG] = bG.t = UG, uG = GG[JG - 1];
            uG || YG(0);
            let iG = (JG << 3) - 8 + fG(uG) - XG.b,
              CG = iG >> 3,
              WG = 0,
              vG = (GG[CG] | GG[CG + 1] << 8) >> (7 & iG) & (1 << XG.b) - 1;
            CG = (iG -= pG.b) >> 3;
            let aG = (GG[CG] | GG[CG + 1] << 8) >> (7 & iG) & (1 << pG.b) - 1;
            CG = (iG -= VG.b) >> 3;
            let cG = (GG[CG] | GG[CG + 1] << 8) >> (7 & iG) & (1 << VG.b) - 1;
            for (++FG; --FG;) {
              const ZG = XG.s[vG],
                wG = XG.n[vG],
                SG = VG.s[cG],
                LG = VG.n[cG],
                yG = pG.s[aG],
                kG = pG.n[aG];
              CG = (iG -= yG) >> 3;
              const UG = 1 << yG;
              let fG = UG + ((GG[CG] | GG[CG + 1] << 8 | GG[CG + 2] << 16 | GG[CG + 3] << 24) >>> (7 & iG) & UG - 1);
              CG = (iG -= EG[SG]) >> 3;
              let QG = oG[SG] + ((GG[CG] | GG[CG + 1] << 8 | GG[CG + 2] << 16) >> (7 & iG) & (1 << EG[SG]) - 1);
              CG = (iG -= rG[ZG]) >> 3;
              const KG = zG[ZG] + ((GG[CG] | GG[CG + 1] << 8 | GG[CG + 2] << 16) >> (7 & iG) & (1 << rG[ZG]) - 1);
              if ((iG < 0 || IG + KG > mG.length || WG + KG + QG > mG.length) && YG(0), CG = (iG -= wG) >> 3, vG = XG.t[vG] + ((GG[CG] | GG[CG + 1] << 8) >> (7 & iG) & (1 << wG) - 1), CG = (iG -= LG) >> 3, cG = VG.t[cG] + ((GG[CG] | GG[CG + 1] << 8) >> (7 & iG) & (1 << LG) - 1), CG = (iG -= kG) >> 3, aG = pG.t[aG] + ((GG[CG] | GG[CG + 1] << 8) >> (7 & iG) & (1 << kG) - 1), fG > 3) bG.o[2] = bG.o[1], bG.o[1] = bG.o[0], bG.o[0] = fG -= 3;
              else {
                const GG = fG - (0 != KG);
                GG ? (fG = 3 == GG ? bG.o[0] - 1 : bG.o[GG], GG > 1 && (bG.o[2] = bG.o[1]), bG.o[1] = bG.o[0], bG.o[0] = fG) : fG = bG.o[0]
              }
              for (let GG = 0; GG < KG; ++GG) mG[WG + GG] = mG[IG + GG];
              WG += KG, IG += KG;
              let hG = WG - fG;
              if (hG < 0) {
                let GG = -hG;
                const ZG = bG.e + hG;
                ZG < 0 && YG(4), GG > QG && (GG = QG);
                for (let wG = 0; wG < GG; ++wG) mG[WG + wG] = bG.w[ZG + wG];
                WG += GG, QG -= GG, hG = 0
              }
              for (let GG = 0; GG < QG; ++GG) mG[WG + GG] = mG[hG + GG];
              WG += QG
            }
            if (WG != IG)
              for (; IG < mG.length;) mG[WG++] = mG[IG++];
            else WG = mG.length;
            SG ? bG.y += WG : mG = yG(mG, 0, WG)
          } else if (SG) {
            if (bG.y += iG, IG)
              for (let GG = 0; GG < iG; ++GG) mG[GG] = mG[IG + GG]
          } else IG && (mG = yG(mG, IG));
          return bG.b = JG, mG
        }
        YG(2)
      }
    };
  class CG {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    Ik = 0;
    needed = 18;
    size;
    constructor(GG) {
      this.size = GG
    }
    push(GG) {
      if (this.done) return;
      if (this.parts.push(GG), this.Ik += GG.length, this.Ik < this.needed) return;
      const bG = ((GG, bG) => {
        if (1 == GG.length) return GG[0];
        const wG = new ZG(bG);
        for (let ZG = 0, SG = 0; ZG < GG.length; ++ZG) {
          const bG = GG[ZG];
          wG.set(bG, SG), SG += bG.length
        }
        return wG
      })(this.parts, this.Ik);
      let wG = this.st;
      if (!wG) {
        const GG = pG(bG, new ZG(0));
        "number" != typeof GG && GG.u === this.size || YG(0, `not a zstd frame of ${this.size} bytes`), wG = this.st = pG(bG, 1), wG.e = 0, this.output = wG.w
      }
      for (;;) {
        const GG = bG.length - wG.b;
        if (GG < 3) {
          this.needed = 3;
          break
        }
        const ZG = bG[wG.b],
          SG = ZG >> 1 & 3;
        3 == SG && YG(2);
        const LG = ZG >> 3 | bG[wG.b + 1] << 5 | bG[wG.b + 2] << 13;
        LG > wG.m && YG(0), 0 == SG && wG.y + LG > wG.u && YG(0);
        const yG = 1 == SG ? 4 : 3 + LG;
        if (GG < yG) {
          this.needed = yG;
          break
        }
        if (iG(bG, wG, wG.w) || YG(5), wG.e = wG.y, (wG.y > wG.u || wG.l && wG.y != wG.u) && YG(0), wG.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = wG.y;
      const SG = bG.subarray(wG.b);
      this.parts = SG.length ? [SG] : [], this.Ik = SG.length, wG.b = 0
    }
  }
  class WG {
    post;
    href = "";
    GK = null;
    given = 0;
    stopped = !1;
    constructor(GG) {
      this.post = GG
    }
    take(bG) {
      if (!this.stopped) try {
        this.answer(bG)
      } catch (ZG) {
        this.stop(ZG instanceof RangeError ? `out of memory decoding ${this.href}: ${GG(ZG)}` : `${this.href} did not decode: ${GG(ZG)}`)
      }
    }
    answer(GG) {
      if (null === this.GK) {
        const [bG, ZG] = GG;
        return this.href = bG, void(this.GK = new CG(ZG))
      }
      if (null === GG) return void this.stop(`${this.href} ended before its module did`);
      const bG = this.GK;
      bG.push(GG);
      const {
        output: ZG,
        decoded: wG
      } = bG;
      if (null !== ZG && wG > this.given) {
        const GG = ZG.slice(this.given, wG).buffer;
        this.given = wG, this.post(GG, [GG])
      }
      bG.done && this.stop(!0)
    }
    stop(GG) {
      this.stopped = !0, this.post(GG)
    }
  }
  const mG = globalThis.WorkerGlobalScope;
  if (void 0 !== mG && globalThis instanceof mG) {
    const GG = globalThis,
      bG = new WG((function(bG) {
        let ZG = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        GG.postMessage(bG, ZG)
      }));
    GG.addEventListener("message", (GG => {
      let {
        data: ZG
      } = GG;
      bG.take(ZG)
    }))
  }
})();