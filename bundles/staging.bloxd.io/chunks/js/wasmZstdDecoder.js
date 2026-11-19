export const id = 64;
export const ids = [64];
export const modules = {
  39869: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      ZstdErrorCode: () => ST,
      ZstdFrameDecoder: () => fT
    });
    const iT = ArrayBuffer,
      zT = Uint8Array,
      kT = Uint16Array,
      WT = Int16Array,
      XT = Int32Array,
      BT = (TT, oT, IT) => {
        if (zT.prototype.slice) return zT.prototype.slice.call(TT, oT, IT);
        (null == oT || oT < 0) && (oT = 0), (null == IT || IT > TT.length) && (IT = TT.length);
        const iT = new zT(IT - oT);
        return iT.set(TT.subarray(oT, IT)), iT
      },
      FT = (TT, oT, IT, iT) => {
        if (zT.prototype.fill) return zT.prototype.fill.call(TT, oT, IT, iT);
        for ((null == IT || IT < 0) && (IT = 0), (null == iT || iT > TT.length) && (iT = TT.length); IT < iT; ++IT) TT[IT] = oT;
        return TT
      },
      ST = {
        InvalidData: 0,
        WindowSizeTooLarge: 1,
        InvalidBlockType: 2,
        FSEAccuracyTooHigh: 3,
        DistanceTooFarBack: 4,
        UnexpectedEOF: 5
      },
      DT = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
      LT = (TT, oT, IT) => {
        const iT = new Error(oT || DT[TT]);
        if (iT.code = TT, Error.captureStackTrace && Error.captureStackTrace(iT, LT), !IT) throw iT;
        return iT
      },
      xT = (TT, oT, IT) => {
        let iT = 0,
          zT = 0;
        for (; iT < IT; ++iT) zT |= TT[oT++] << (iT << 3);
        return zT
      },
      cT = (TT, oT) => {
        const IT = TT[0] | TT[1] << 8 | TT[2] << 16;
        if (3126568 == IT && 253 == TT[3]) {
          const IT = TT[4],
            iT = IT >> 5 & 1,
            kT = IT >> 2 & 1,
            WT = 3 & IT,
            BT = IT >> 6;
          8 & IT && LT(0);
          let FT = 6 - iT;
          const ST = 3 == WT ? 4 : WT,
            DT = xT(TT, FT, ST);
          FT += ST;
          const cT = BT ? 1 << BT : iT,
            KT = xT(TT, FT, cT) + (1 == BT && 256);
          let MT = KT;
          if (!iT) {
            const oT = 1 << 10 + (TT[5] >> 3);
            MT = oT + (oT >> 3) * (7 & TT[5])
          }
          MT > 2145386496 && LT(1);
          const rT = new zT((1 == oT ? KT || MT : oT ? 0 : MT) + 12);
          return rT[0] = 1, rT[4] = 4, rT[8] = 8, {
            b: FT + cT,
            y: 0,
            l: 0,
            d: DT,
            w: oT && 1 != oT ? oT : rT.subarray(12),
            e: MT,
            o: new XT(rT.buffer, 0, 3),
            u: KT,
            c: kT,
            m: Math.min(131072, MT)
          }
        }
        if (25481893 == (IT >> 4 | TT[3] << 20)) return 8 + (((iT = TT)[kT = 4] | iT[kT + 1] << 8 | iT[kT + 2] << 16 | iT[kT + 3] << 24) >>> 0);
        var iT, kT;
        LT(0)
      },
      KT = TT => {
        let oT = 0;
        for (; 1 << oT <= TT; ++oT);
        return oT - 1
      },
      MT = (TT, oT, IT) => {
        let XT = 4 + (oT << 3);
        const BT = 5 + (15 & TT[oT]);
        BT > IT && LT(3);
        const FT = 1 << BT;
        let ST = FT,
          DT = -1,
          xT = -1,
          cT = -1,
          MT = FT;
        const rT = new iT(512 + (FT << 2)),
          AT = new WT(rT, 0, 256),
          gT = new kT(rT, 0, 256),
          hT = new kT(rT, 512, FT),
          wT = 512 + (FT << 1),
          mT = new zT(rT, wT, FT),
          eT = new zT(rT, wT + FT);
        for (; DT < 255 && ST > 0;) {
          const oT = KT(ST + 1),
            IT = XT >> 3,
            iT = (1 << oT + 1) - 1;
          let zT = (TT[IT] | TT[IT + 1] << 8 | TT[IT + 2] << 16) >> (7 & XT) & iT;
          const kT = (1 << oT) - 1,
            WT = iT - ST - 1,
            BT = zT & kT;
          if (BT < WT ? (XT += oT, zT = BT) : (XT += oT + 1, zT > kT && (zT -= WT)), AT[++DT] = --zT, -1 == zT ? (ST += zT, mT[--MT] = DT) : ST -= zT, !zT)
            do {
              const oT = XT >> 3;
              xT = (TT[oT] | TT[oT + 1] << 8) >> (7 & XT) & 3, XT += 2, DT += xT
            } while (3 == xT)
        }(DT > 255 || ST) && LT(0);
        let RT = 0;
        const uT = (FT >> 1) + (FT >> 3) + 3,
          vT = FT - 1;
        for (let iT = 0; iT <= DT; ++iT) {
          const TT = AT[iT];
          if (TT < 1) gT[iT] = -TT;
          else
            for (cT = 0; cT < TT; ++cT) {
              mT[RT] = iT;
              do {
                RT = RT + uT & vT
              } while (RT >= MT)
            }
        }
        for (RT && LT(0), cT = 0; cT < FT; ++cT) {
          const TT = gT[mT[cT]]++,
            oT = eT[cT] = BT - KT(TT);
          hT[cT] = (TT << oT) - FT
        }
        return [XT + 7 >> 3, {
          b: BT,
          s: mT,
          n: eT,
          t: hT
        }]
      },
      rT = MT(new zT([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
      AT = MT(new zT([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
      gT = MT(new zT([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
      hT = (TT, oT) => {
        const IT = TT.length,
          iT = new XT(IT);
        for (let zT = 0; zT < IT; ++zT) iT[zT] = oT, oT += 1 << TT[zT];
        return iT
      },
      wT = new zT(new XT([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
      mT = hT(wT, 0),
      eT = new zT(new XT([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
      RT = hT(eT, 3),
      uT = (TT, oT, IT) => {
        const iT = TT.length,
          zT = oT.length,
          kT = TT[iT - 1],
          WT = (1 << IT.b) - 1,
          XT = -IT.b;
        kT || LT(0);
        let BT = 0,
          FT = IT.b,
          ST = (iT << 3) - 8 + KT(kT) - FT,
          DT = -1;
        for (; ST > XT && DT < zT;) {
          const iT = ST >> 3;
          BT = (BT << FT | (TT[iT] | TT[iT + 1] << 8 | TT[iT + 2] << 16) >> (7 & ST)) & WT, oT[++DT] = IT.s[BT], ST -= FT = IT.n[BT]
        }
        ST == XT && DT + 1 == zT || LT(0)
      },
      vT = (TT, oT, IT) => {
        let iT = 6;
        const zT = oT.length + 3 >> 2,
          kT = zT << 1,
          WT = zT + kT;
        uT(TT.subarray(iT, iT += TT[0] | TT[1] << 8), oT.subarray(0, zT), IT), uT(TT.subarray(iT, iT += TT[2] | TT[3] << 8), oT.subarray(zT, kT), IT), uT(TT.subarray(iT, iT += TT[4] | TT[5] << 8), oT.subarray(kT, WT), IT), uT(TT.subarray(iT), oT.subarray(WT), IT)
      },
      ET = (TT, oT, IT) => {
        let iT = oT.b;
        const WT = TT[iT],
          XT = WT >> 1 & 3;
        oT.l = 1 & WT;
        const ST = WT >> 3 | TT[iT + 1] << 5 | TT[iT + 2] << 13,
          DT = (iT += 3) + ST;
        if (1 == XT) {
          if (iT >= TT.length) return;
          return oT.b = iT + 1, IT ? (FT(IT, TT[iT], oT.y, oT.y += ST), IT) : FT(new zT(ST), TT[iT])
        }
        if (!(DT > TT.length)) {
          if (0 == XT) return oT.b = DT, IT ? (IT.set(TT.subarray(iT, DT), oT.y), oT.y += ST, IT) : BT(TT, iT, DT);
          if (2 == XT) {
            const WT = TT[iT],
              XT = 3 & WT,
              ST = WT >> 2 & 3;
            let xT = WT >> 4,
              cT = 0,
              hT = 0;
            XT < 2 ? 1 & ST ? xT |= TT[++iT] << 4 | (2 & ST && TT[++iT] << 12) : xT = WT >> 3 : (hT = ST, ST < 2 ? (xT |= (63 & TT[++iT]) << 4, cT = TT[iT] >> 6 | TT[++iT] << 2) : 2 == ST ? (xT |= TT[++iT] << 4 | (3 & TT[++iT]) << 12, cT = TT[iT] >> 2 | TT[++iT] << 6) : (xT |= TT[++iT] << 4 | (63 & TT[++iT]) << 12, cT = TT[iT] >> 6 | TT[++iT] << 2 | TT[++iT] << 10)), ++iT;
            let ET = IT ? IT.subarray(oT.y, oT.y + oT.m) : new zT(oT.m),
              fT = ET.length - xT;
            if (fT < 0 && LT(0), 0 == XT) ET.set(TT.subarray(iT, iT += xT), fT);
            else if (1 == XT) FT(ET, TT[iT++], fT);
            else {
              let IT = oT.h;
              if (2 == XT) {
                const WT = ((TT, oT) => {
                  let IT = 0,
                    iT = -1;
                  const WT = new zT(292),
                    XT = TT[oT],
                    BT = WT.subarray(0, 256),
                    ST = WT.subarray(256, 268),
                    DT = new kT(WT.buffer, 268);
                  if (XT < 128) {
                    const [IT, zT] = MT(TT, oT + 1, 6), kT = IT << 3, WT = TT[oT += XT];
                    WT || LT(0);
                    let FT = 0,
                      ST = 0,
                      DT = zT.b,
                      xT = DT,
                      cT = (++oT << 3) - 8 + KT(WT);
                    for (; iT > 254 && LT(0), cT -= DT, !(cT < kT);) {
                      let oT = cT >> 3;
                      if (FT += (TT[oT] | TT[oT + 1] << 8) >> (7 & cT) & (1 << DT) - 1, BT[++iT] = zT.s[FT], cT -= xT, cT < kT) break;
                      oT = cT >> 3, ST += (TT[oT] | TT[oT + 1] << 8) >> (7 & cT) & (1 << xT) - 1, BT[++iT] = zT.s[ST], DT = zT.n[FT], FT = zT.t[FT], xT = zT.n[ST], ST = zT.t[ST]
                    }++iT > 255 && LT(0)
                  } else {
                    for (iT = XT - 127; IT < iT; IT += 2) {
                      const iT = TT[++oT];
                      BT[IT] = iT >> 4, BT[IT + 1] = 15 & iT
                    }++oT
                  }
                  let xT = 0;
                  for (IT = 0; IT < iT; ++IT) {
                    const TT = BT[IT];
                    TT > 11 && LT(0), xT += TT && 1 << TT - 1
                  }
                  const cT = KT(xT) + 1,
                    rT = 1 << cT,
                    AT = rT - xT;
                  for (AT & AT - 1 && LT(0), BT[iT++] = KT(AT) + 1, IT = 0; IT < iT; ++IT) {
                    const TT = BT[IT];
                    ++ST[BT[IT] = TT && cT + 1 - TT]
                  }
                  const gT = new zT(rT << 1),
                    hT = gT.subarray(0, rT),
                    wT = gT.subarray(rT);
                  for (DT[cT] = 0, IT = cT; IT > 0; --IT) {
                    const TT = DT[IT];
                    FT(wT, IT, TT, DT[IT - 1] = TT + ST[IT] * (1 << cT - IT))
                  }
                  for (DT[0] != rT && LT(0), IT = 0; IT < iT; ++IT) {
                    const TT = BT[IT];
                    if (TT) {
                      const oT = DT[TT];
                      FT(hT, IT, oT, DT[TT] = oT + (1 << cT - TT))
                    }
                  }
                  return [oT, {
                    n: wT,
                    b: cT,
                    s: hT
                  }]
                })(TT, iT);
                cT += iT - (iT = WT[0]), oT.h = IT = WT[1]
              } else IT || LT(0);
              (hT ? vT : uT)(TT.subarray(iT, iT += cT), ET.subarray(fT), IT)
            }
            let CT = TT[iT++];
            if (CT) {
              255 == CT ? CT = 32512 + (TT[iT++] | TT[iT++] << 8) : CT > 127 && (CT = CT - 128 << 8 | TT[iT++]);
              const WT = TT[iT++];
              3 & WT && LT(0);
              const XT = [AT, gT, rT];
              for (let IT = 2; IT > -1; --IT) {
                const BT = WT >> 2 + (IT << 1) & 3;
                if (1 == BT) {
                  const oT = new zT([0, 0, TT[iT++]]);
                  XT[IT] = {
                    s: oT.subarray(2, 3),
                    n: oT.subarray(0, 1),
                    t: new kT(oT.buffer, 0, 1),
                    b: 0
                  }
                } else 2 == BT ? [iT, XT[IT]] = MT(TT, iT, 9 - (1 & IT)) : 3 == BT && (oT.t || LT(0), XT[IT] = oT.t[IT])
              }
              const [FT, ST, xT] = oT.t = XT, cT = TT[DT - 1];
              cT || LT(0);
              let hT = (DT << 3) - 8 + KT(cT) - xT.b,
                uT = hT >> 3,
                vT = 0,
                jT = (TT[uT] | TT[uT + 1] << 8) >> (7 & hT) & (1 << xT.b) - 1;
              uT = (hT -= ST.b) >> 3;
              let JT = (TT[uT] | TT[uT + 1] << 8) >> (7 & hT) & (1 << ST.b) - 1;
              uT = (hT -= FT.b) >> 3;
              let UT = (TT[uT] | TT[uT + 1] << 8) >> (7 & hT) & (1 << FT.b) - 1;
              for (++CT; --CT;) {
                const IT = xT.s[jT],
                  iT = xT.n[jT],
                  zT = FT.s[UT],
                  kT = FT.n[UT],
                  WT = ST.s[JT],
                  XT = ST.n[JT];
                uT = (hT -= WT) >> 3;
                const BT = 1 << WT;
                let DT = BT + ((TT[uT] | TT[uT + 1] << 8 | TT[uT + 2] << 16 | TT[uT + 3] << 24) >>> (7 & hT) & BT - 1);
                uT = (hT -= eT[zT]) >> 3;
                let cT = RT[zT] + ((TT[uT] | TT[uT + 1] << 8 | TT[uT + 2] << 16) >> (7 & hT) & (1 << eT[zT]) - 1);
                uT = (hT -= wT[IT]) >> 3;
                const KT = mT[IT] + ((TT[uT] | TT[uT + 1] << 8 | TT[uT + 2] << 16) >> (7 & hT) & (1 << wT[IT]) - 1);
                if ((hT < 0 || fT + KT > ET.length || vT + KT + cT > ET.length) && LT(0), uT = (hT -= iT) >> 3, jT = xT.t[jT] + ((TT[uT] | TT[uT + 1] << 8) >> (7 & hT) & (1 << iT) - 1), uT = (hT -= kT) >> 3, UT = FT.t[UT] + ((TT[uT] | TT[uT + 1] << 8) >> (7 & hT) & (1 << kT) - 1), uT = (hT -= XT) >> 3, JT = ST.t[JT] + ((TT[uT] | TT[uT + 1] << 8) >> (7 & hT) & (1 << XT) - 1), DT > 3) oT.o[2] = oT.o[1], oT.o[1] = oT.o[0], oT.o[0] = DT -= 3;
                else {
                  const TT = DT - (0 != KT);
                  TT ? (DT = 3 == TT ? oT.o[0] - 1 : oT.o[TT], TT > 1 && (oT.o[2] = oT.o[1]), oT.o[1] = oT.o[0], oT.o[0] = DT) : DT = oT.o[0]
                }
                for (let TT = 0; TT < KT; ++TT) ET[vT + TT] = ET[fT + TT];
                vT += KT, fT += KT;
                let MT = vT - DT;
                if (MT < 0) {
                  let TT = -MT;
                  const IT = oT.e + MT;
                  IT < 0 && LT(4), TT > cT && (TT = cT);
                  for (let iT = 0; iT < TT; ++iT) ET[vT + iT] = oT.w[IT + iT];
                  vT += TT, cT -= TT, MT = 0
                }
                for (let TT = 0; TT < cT; ++TT) ET[vT + TT] = ET[MT + TT];
                vT += cT
              }
              if (vT != fT)
                for (; fT < ET.length;) ET[vT++] = ET[fT++];
              else vT = ET.length;
              IT ? oT.y += vT : ET = BT(ET, 0, vT)
            } else if (IT) {
              if (oT.y += xT, fT)
                for (let TT = 0; TT < xT; ++TT) ET[TT] = ET[fT + TT]
            } else fT && (ET = BT(ET, fT));
            return oT.b = DT, ET
          }
          LT(2)
        }
      };
    class fT {
      output = null;
      decoded = 0;
      done = !1;
      st = null;
      parts = [];
      kS = 0;
      needed = 18;
      size;
      constructor(TT) {
        this.size = TT
      }
      push(TT) {
        if (this.done) return;
        if (this.parts.push(TT), this.kS += TT.length, this.kS < this.needed) return;
        const oT = ((TT, oT) => {
          if (1 == TT.length) return TT[0];
          const IT = new zT(oT);
          for (let iT = 0, zT = 0; iT < TT.length; ++iT) {
            const oT = TT[iT];
            IT.set(oT, zT), zT += oT.length
          }
          return IT
        })(this.parts, this.kS);
        let IT = this.st;
        if (!IT) {
          const TT = cT(oT, new zT(0));
          "number" != typeof TT && TT.u === this.size || LT(0, `not a zstd frame of ${this.size} bytes`), IT = this.st = cT(oT, 1), IT.e = 0, this.output = IT.w
        }
        for (;;) {
          const TT = oT.length - IT.b;
          if (TT < 3) {
            this.needed = 3;
            break
          }
          const iT = oT[IT.b],
            zT = iT >> 1 & 3;
          3 == zT && LT(2);
          const kT = iT >> 3 | oT[IT.b + 1] << 5 | oT[IT.b + 2] << 13;
          kT > IT.m && LT(0);
          const WT = 1 == zT ? 4 : 3 + kT;
          if (TT < WT) {
            this.needed = WT;
            break
          }
          if (ET(oT, IT, IT.w) || LT(5), IT.e = IT.y, (IT.y > IT.u || IT.l && IT.y != IT.u) && LT(0), IT.l) {
            this.done = !0;
            break
          }
        }
        this.decoded = IT.y;
        const iT = oT.subarray(IT.b);
        this.parts = iT.length ? [iT] : [], this.kS = iT.length, IT.b = 0
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);