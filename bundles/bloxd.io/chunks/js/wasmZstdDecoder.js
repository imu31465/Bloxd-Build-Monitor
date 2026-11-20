export const id = 64;
export const ids = [64];
export const modules = {
  40561: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      ZstdErrorCode: () => cU,
      ZstdFrameDecoder: () => ZU
    });
    const tU = ArrayBuffer,
      pU = Uint8Array,
      EU = Uint16Array,
      PU = Int16Array,
      TU = Int32Array,
      qU = (UU, RU, gU) => {
        if (pU.prototype.slice) return pU.prototype.slice.call(UU, RU, gU);
        (null == RU || RU < 0) && (RU = 0), (null == gU || gU > UU.length) && (gU = UU.length);
        const tU = new pU(gU - RU);
        return tU.set(UU.subarray(RU, gU)), tU
      },
      KU = (UU, RU, gU, tU) => {
        if (pU.prototype.fill) return pU.prototype.fill.call(UU, RU, gU, tU);
        for ((null == gU || gU < 0) && (gU = 0), (null == tU || tU > UU.length) && (tU = UU.length); gU < tU; ++gU) UU[gU] = RU;
        return UU
      },
      cU = {
        InvalidData: 0,
        WindowSizeTooLarge: 1,
        InvalidBlockType: 2,
        FSEAccuracyTooHigh: 3,
        DistanceTooFarBack: 4,
        UnexpectedEOF: 5
      },
      GU = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
      jU = (UU, RU, gU) => {
        const tU = new Error(RU || GU[UU]);
        if (tU.code = UU, Error.captureStackTrace && Error.captureStackTrace(tU, jU), !gU) throw tU;
        return tU
      },
      uU = (UU, RU, gU) => {
        let tU = 0,
          pU = 0;
        for (; tU < gU; ++tU) pU |= UU[RU++] << (tU << 3);
        return pU
      },
      CU = (UU, RU) => {
        const gU = UU[0] | UU[1] << 8 | UU[2] << 16;
        if (3126568 == gU && 253 == UU[3]) {
          const gU = UU[4],
            tU = gU >> 5 & 1,
            EU = gU >> 2 & 1,
            PU = 3 & gU,
            qU = gU >> 6;
          8 & gU && jU(0);
          let KU = 6 - tU;
          const cU = 3 == PU ? 4 : PU,
            GU = uU(UU, KU, cU);
          KU += cU;
          const CU = qU ? 1 << qU : tU,
            hU = uU(UU, KU, CU) + (1 == qU && 256);
          let QU = hU;
          if (!tU) {
            const RU = 1 << 10 + (UU[5] >> 3);
            QU = RU + (RU >> 3) * (7 & UU[5])
          }
          QU > 2145386496 && jU(1);
          const eU = new pU((1 == RU ? hU || QU : RU ? 0 : QU) + 12);
          return eU[0] = 1, eU[4] = 4, eU[8] = 8, {
            b: KU + CU,
            y: 0,
            l: 0,
            d: GU,
            w: RU && 1 != RU ? RU : eU.subarray(12),
            e: QU,
            o: new TU(eU.buffer, 0, 3),
            u: hU,
            c: EU,
            m: Math.min(131072, QU)
          }
        }
        if (25481893 == (gU >> 4 | UU[3] << 20)) return 8 + (((tU = UU)[EU = 4] | tU[EU + 1] << 8 | tU[EU + 2] << 16 | tU[EU + 3] << 24) >>> 0);
        var tU, EU;
        jU(0)
      },
      hU = UU => {
        let RU = 0;
        for (; 1 << RU <= UU; ++RU);
        return RU - 1
      },
      QU = (UU, RU, gU) => {
        let TU = 4 + (RU << 3);
        const qU = 5 + (15 & UU[RU]);
        qU > gU && jU(3);
        const KU = 1 << qU;
        let cU = KU,
          GU = -1,
          uU = -1,
          CU = -1,
          QU = KU;
        const eU = new tU(512 + (KU << 2)),
          WU = new PU(eU, 0, 256),
          fU = new EU(eU, 0, 256),
          xU = new EU(eU, 512, KU),
          mU = 512 + (KU << 1),
          IU = new pU(eU, mU, KU),
          JU = new pU(eU, mU + KU);
        for (; GU < 255 && cU > 0;) {
          const RU = hU(cU + 1),
            gU = TU >> 3,
            tU = (1 << RU + 1) - 1;
          let pU = (UU[gU] | UU[gU + 1] << 8 | UU[gU + 2] << 16) >> (7 & TU) & tU;
          const EU = (1 << RU) - 1,
            PU = tU - cU - 1,
            qU = pU & EU;
          if (qU < PU ? (TU += RU, pU = qU) : (TU += RU + 1, pU > EU && (pU -= PU)), WU[++GU] = --pU, -1 == pU ? (cU += pU, IU[--QU] = GU) : cU -= pU, !pU)
            do {
              const RU = TU >> 3;
              uU = (UU[RU] | UU[RU + 1] << 8) >> (7 & TU) & 3, TU += 2, GU += uU
            } while (3 == uU)
        }(GU > 255 || cU) && jU(0);
        let wU = 0;
        const nU = (KU >> 1) + (KU >> 3) + 3,
          bU = KU - 1;
        for (let tU = 0; tU <= GU; ++tU) {
          const UU = WU[tU];
          if (UU < 1) fU[tU] = -UU;
          else
            for (CU = 0; CU < UU; ++CU) {
              IU[wU] = tU;
              do {
                wU = wU + nU & bU
              } while (wU >= QU)
            }
        }
        for (wU && jU(0), CU = 0; CU < KU; ++CU) {
          const UU = fU[IU[CU]]++,
            RU = JU[CU] = qU - hU(UU);
          xU[CU] = (UU << RU) - KU
        }
        return [TU + 7 >> 3, {
          b: qU,
          s: IU,
          n: JU,
          t: xU
        }]
      },
      eU = QU(new pU([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
      WU = QU(new pU([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
      fU = QU(new pU([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
      xU = (UU, RU) => {
        const gU = UU.length,
          tU = new TU(gU);
        for (let pU = 0; pU < gU; ++pU) tU[pU] = RU, RU += 1 << UU[pU];
        return tU
      },
      mU = new pU(new TU([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
      IU = xU(mU, 0),
      JU = new pU(new TU([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
      wU = xU(JU, 3),
      nU = (UU, RU, gU) => {
        const tU = UU.length,
          pU = RU.length,
          EU = UU[tU - 1],
          PU = (1 << gU.b) - 1,
          TU = -gU.b;
        EU || jU(0);
        let qU = 0,
          KU = gU.b,
          cU = (tU << 3) - 8 + hU(EU) - KU,
          GU = -1;
        for (; cU > TU && GU < pU;) {
          const tU = cU >> 3;
          qU = (qU << KU | (UU[tU] | UU[tU + 1] << 8 | UU[tU + 2] << 16) >> (7 & cU)) & PU, RU[++GU] = gU.s[qU], cU -= KU = gU.n[qU]
        }
        cU == TU && GU + 1 == pU || jU(0)
      },
      bU = (UU, RU, gU) => {
        let tU = 6;
        const pU = RU.length + 3 >> 2,
          EU = pU << 1,
          PU = pU + EU;
        nU(UU.subarray(tU, tU += UU[0] | UU[1] << 8), RU.subarray(0, pU), gU), nU(UU.subarray(tU, tU += UU[2] | UU[3] << 8), RU.subarray(pU, EU), gU), nU(UU.subarray(tU, tU += UU[4] | UU[5] << 8), RU.subarray(EU, PU), gU), nU(UU.subarray(tU), RU.subarray(PU), gU)
      },
      oU = (UU, RU, gU) => {
        let tU = RU.b;
        const PU = UU[tU],
          TU = PU >> 1 & 3;
        RU.l = 1 & PU;
        const cU = PU >> 3 | UU[tU + 1] << 5 | UU[tU + 2] << 13,
          GU = (tU += 3) + cU;
        if (1 == TU) {
          if (tU >= UU.length) return;
          return RU.b = tU + 1, gU ? (KU(gU, UU[tU], RU.y, RU.y += cU), gU) : KU(new pU(cU), UU[tU])
        }
        if (!(GU > UU.length)) {
          if (0 == TU) return RU.b = GU, gU ? (gU.set(UU.subarray(tU, GU), RU.y), RU.y += cU, gU) : qU(UU, tU, GU);
          if (2 == TU) {
            const PU = UU[tU],
              TU = 3 & PU,
              cU = PU >> 2 & 3;
            let uU = PU >> 4,
              CU = 0,
              xU = 0;
            TU < 2 ? 1 & cU ? uU |= UU[++tU] << 4 | (2 & cU && UU[++tU] << 12) : uU = PU >> 3 : (xU = cU, cU < 2 ? (uU |= (63 & UU[++tU]) << 4, CU = UU[tU] >> 6 | UU[++tU] << 2) : 2 == cU ? (uU |= UU[++tU] << 4 | (3 & UU[++tU]) << 12, CU = UU[tU] >> 2 | UU[++tU] << 6) : (uU |= UU[++tU] << 4 | (63 & UU[++tU]) << 12, CU = UU[tU] >> 6 | UU[++tU] << 2 | UU[++tU] << 10)), ++tU;
            let oU = gU ? gU.subarray(RU.y, RU.y + RU.m) : new pU(RU.m),
              ZU = oU.length - uU;
            if (ZU < 0 && jU(0), 0 == TU) oU.set(UU.subarray(tU, tU += uU), ZU);
            else if (1 == TU) KU(oU, UU[tU++], ZU);
            else {
              let gU = RU.h;
              if (2 == TU) {
                const PU = ((UU, RU) => {
                  let gU = 0,
                    tU = -1;
                  const PU = new pU(292),
                    TU = UU[RU],
                    qU = PU.subarray(0, 256),
                    cU = PU.subarray(256, 268),
                    GU = new EU(PU.buffer, 268);
                  if (TU < 128) {
                    const [gU, pU] = QU(UU, RU + 1, 6), EU = gU << 3, PU = UU[RU += TU];
                    PU || jU(0);
                    let KU = 0,
                      cU = 0,
                      GU = pU.b,
                      uU = GU,
                      CU = (++RU << 3) - 8 + hU(PU);
                    for (; tU > 254 && jU(0), CU -= GU, !(CU < EU);) {
                      let RU = CU >> 3;
                      if (KU += (UU[RU] | UU[RU + 1] << 8) >> (7 & CU) & (1 << GU) - 1, qU[++tU] = pU.s[KU], CU -= uU, CU < EU) break;
                      RU = CU >> 3, cU += (UU[RU] | UU[RU + 1] << 8) >> (7 & CU) & (1 << uU) - 1, qU[++tU] = pU.s[cU], GU = pU.n[KU], KU = pU.t[KU], uU = pU.n[cU], cU = pU.t[cU]
                    }++tU > 255 && jU(0)
                  } else {
                    for (tU = TU - 127; gU < tU; gU += 2) {
                      const tU = UU[++RU];
                      qU[gU] = tU >> 4, qU[gU + 1] = 15 & tU
                    }++RU
                  }
                  let uU = 0;
                  for (gU = 0; gU < tU; ++gU) {
                    const UU = qU[gU];
                    UU > 11 && jU(0), uU += UU && 1 << UU - 1
                  }
                  const CU = hU(uU) + 1,
                    eU = 1 << CU,
                    WU = eU - uU;
                  for (WU & WU - 1 && jU(0), qU[tU++] = hU(WU) + 1, gU = 0; gU < tU; ++gU) {
                    const UU = qU[gU];
                    ++cU[qU[gU] = UU && CU + 1 - UU]
                  }
                  const fU = new pU(eU << 1),
                    xU = fU.subarray(0, eU),
                    mU = fU.subarray(eU);
                  for (GU[CU] = 0, gU = CU; gU > 0; --gU) {
                    const UU = GU[gU];
                    KU(mU, gU, UU, GU[gU - 1] = UU + cU[gU] * (1 << CU - gU))
                  }
                  for (GU[0] != eU && jU(0), gU = 0; gU < tU; ++gU) {
                    const UU = qU[gU];
                    if (UU) {
                      const RU = GU[UU];
                      KU(xU, gU, RU, GU[UU] = RU + (1 << CU - UU))
                    }
                  }
                  return [RU, {
                    n: mU,
                    b: CU,
                    s: xU
                  }]
                })(UU, tU);
                CU += tU - (tU = PU[0]), RU.h = gU = PU[1]
              } else gU || jU(0);
              (xU ? bU : nU)(UU.subarray(tU, tU += CU), oU.subarray(ZU), gU)
            }
            let aU = UU[tU++];
            if (aU) {
              255 == aU ? aU = 32512 + (UU[tU++] | UU[tU++] << 8) : aU > 127 && (aU = aU - 128 << 8 | UU[tU++]);
              const PU = UU[tU++];
              3 & PU && jU(0);
              const TU = [WU, fU, eU];
              for (let gU = 2; gU > -1; --gU) {
                const qU = PU >> 2 + (gU << 1) & 3;
                if (1 == qU) {
                  const RU = new pU([0, 0, UU[tU++]]);
                  TU[gU] = {
                    s: RU.subarray(2, 3),
                    n: RU.subarray(0, 1),
                    t: new EU(RU.buffer, 0, 1),
                    b: 0
                  }
                } else 2 == qU ? [tU, TU[gU]] = QU(UU, tU, 9 - (1 & gU)) : 3 == qU && (RU.t || jU(0), TU[gU] = RU.t[gU])
              }
              const [KU, cU, uU] = RU.t = TU, CU = UU[GU - 1];
              CU || jU(0);
              let xU = (GU << 3) - 8 + hU(CU) - uU.b,
                nU = xU >> 3,
                bU = 0,
                YU = (UU[nU] | UU[nU + 1] << 8) >> (7 & xU) & (1 << uU.b) - 1;
              nU = (xU -= cU.b) >> 3;
              let BU = (UU[nU] | UU[nU + 1] << 8) >> (7 & xU) & (1 << cU.b) - 1;
              nU = (xU -= KU.b) >> 3;
              let VU = (UU[nU] | UU[nU + 1] << 8) >> (7 & xU) & (1 << KU.b) - 1;
              for (++aU; --aU;) {
                const gU = uU.s[YU],
                  tU = uU.n[YU],
                  pU = KU.s[VU],
                  EU = KU.n[VU],
                  PU = cU.s[BU],
                  TU = cU.n[BU];
                nU = (xU -= PU) >> 3;
                const qU = 1 << PU;
                let GU = qU + ((UU[nU] | UU[nU + 1] << 8 | UU[nU + 2] << 16 | UU[nU + 3] << 24) >>> (7 & xU) & qU - 1);
                nU = (xU -= JU[pU]) >> 3;
                let CU = wU[pU] + ((UU[nU] | UU[nU + 1] << 8 | UU[nU + 2] << 16) >> (7 & xU) & (1 << JU[pU]) - 1);
                nU = (xU -= mU[gU]) >> 3;
                const hU = IU[gU] + ((UU[nU] | UU[nU + 1] << 8 | UU[nU + 2] << 16) >> (7 & xU) & (1 << mU[gU]) - 1);
                if ((xU < 0 || ZU + hU > oU.length || bU + hU + CU > oU.length) && jU(0), nU = (xU -= tU) >> 3, YU = uU.t[YU] + ((UU[nU] | UU[nU + 1] << 8) >> (7 & xU) & (1 << tU) - 1), nU = (xU -= EU) >> 3, VU = KU.t[VU] + ((UU[nU] | UU[nU + 1] << 8) >> (7 & xU) & (1 << EU) - 1), nU = (xU -= TU) >> 3, BU = cU.t[BU] + ((UU[nU] | UU[nU + 1] << 8) >> (7 & xU) & (1 << TU) - 1), GU > 3) RU.o[2] = RU.o[1], RU.o[1] = RU.o[0], RU.o[0] = GU -= 3;
                else {
                  const UU = GU - (0 != hU);
                  UU ? (GU = 3 == UU ? RU.o[0] - 1 : RU.o[UU], UU > 1 && (RU.o[2] = RU.o[1]), RU.o[1] = RU.o[0], RU.o[0] = GU) : GU = RU.o[0]
                }
                for (let UU = 0; UU < hU; ++UU) oU[bU + UU] = oU[ZU + UU];
                bU += hU, ZU += hU;
                let QU = bU - GU;
                if (QU < 0) {
                  let UU = -QU;
                  const gU = RU.e + QU;
                  gU < 0 && jU(4), UU > CU && (UU = CU);
                  for (let tU = 0; tU < UU; ++tU) oU[bU + tU] = RU.w[gU + tU];
                  bU += UU, CU -= UU, QU = 0
                }
                for (let UU = 0; UU < CU; ++UU) oU[bU + UU] = oU[QU + UU];
                bU += CU
              }
              if (bU != ZU)
                for (; ZU < oU.length;) oU[bU++] = oU[ZU++];
              else bU = oU.length;
              gU ? RU.y += bU : oU = qU(oU, 0, bU)
            } else if (gU) {
              if (RU.y += uU, ZU)
                for (let UU = 0; UU < uU; ++UU) oU[UU] = oU[ZU + UU]
            } else ZU && (oU = qU(oU, ZU));
            return RU.b = GU, oU
          }
          jU(2)
        }
      };
    class ZU {
      output = null;
      decoded = 0;
      done = !1;
      st = null;
      parts = [];
      WT = 0;
      needed = 18;
      size;
      constructor(UU) {
        this.size = UU
      }
      push(UU) {
        if (this.done) return;
        if (this.parts.push(UU), this.WT += UU.length, this.WT < this.needed) return;
        const RU = ((UU, RU) => {
          if (1 == UU.length) return UU[0];
          const gU = new pU(RU);
          for (let tU = 0, pU = 0; tU < UU.length; ++tU) {
            const RU = UU[tU];
            gU.set(RU, pU), pU += RU.length
          }
          return gU
        })(this.parts, this.WT);
        let gU = this.st;
        if (!gU) {
          const UU = CU(RU, new pU(0));
          "number" != typeof UU && UU.u === this.size || jU(0, `not a zstd frame of ${this.size} bytes`), gU = this.st = CU(RU, 1), gU.e = 0, this.output = gU.w
        }
        for (;;) {
          const UU = RU.length - gU.b;
          if (UU < 3) {
            this.needed = 3;
            break
          }
          const tU = RU[gU.b],
            pU = tU >> 1 & 3;
          3 == pU && jU(2);
          const EU = tU >> 3 | RU[gU.b + 1] << 5 | RU[gU.b + 2] << 13;
          EU > gU.m && jU(0);
          const PU = 1 == pU ? 4 : 3 + EU;
          if (UU < PU) {
            this.needed = PU;
            break
          }
          if (oU(RU, gU, gU.w) || jU(5), gU.e = gU.y, (gU.y > gU.u || gU.l && gU.y != gU.u) && jU(0), gU.l) {
            this.done = !0;
            break
          }
        }
        this.decoded = gU.y;
        const tU = RU.subarray(gU.b);
        this.parts = tU.length ? [tU] : [], this.WT = tU.length, gU.b = 0
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);