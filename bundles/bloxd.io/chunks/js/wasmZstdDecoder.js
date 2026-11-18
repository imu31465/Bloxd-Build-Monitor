export const id = 60;
export const ids = [60];
export const modules = {
  39858: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      ZstdErrorCode: () => YJ,
      ZstdFrameDecoder: () => MJ
    });
    const FJ = ArrayBuffer,
      UJ = Uint8Array,
      eJ = Uint16Array,
      XJ = Int16Array,
      AJ = Int32Array,
      qJ = (JJ, cJ, ZJ) => {
        if (UJ.prototype.slice) return UJ.prototype.slice.call(JJ, cJ, ZJ);
        (null == cJ || cJ < 0) && (cJ = 0), (null == ZJ || ZJ > JJ.length) && (ZJ = JJ.length);
        const FJ = new UJ(ZJ - cJ);
        return FJ.set(JJ.subarray(cJ, ZJ)), FJ
      },
      jJ = (JJ, cJ, ZJ, FJ) => {
        if (UJ.prototype.fill) return UJ.prototype.fill.call(JJ, cJ, ZJ, FJ);
        for ((null == ZJ || ZJ < 0) && (ZJ = 0), (null == FJ || FJ > JJ.length) && (FJ = JJ.length); ZJ < FJ; ++ZJ) JJ[ZJ] = cJ;
        return JJ
      },
      YJ = {
        InvalidData: 0,
        WindowSizeTooLarge: 1,
        InvalidBlockType: 2,
        FSEAccuracyTooHigh: 3,
        DistanceTooFarBack: 4,
        UnexpectedEOF: 5
      },
      hJ = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
      DJ = (JJ, cJ, ZJ) => {
        const FJ = new Error(cJ || hJ[JJ]);
        if (FJ.code = JJ, Error.captureStackTrace && Error.captureStackTrace(FJ, DJ), !ZJ) throw FJ;
        return FJ
      },
      sJ = (JJ, cJ, ZJ) => {
        let FJ = 0,
          UJ = 0;
        for (; FJ < ZJ; ++FJ) UJ |= JJ[cJ++] << (FJ << 3);
        return UJ
      },
      nJ = (JJ, cJ) => {
        const ZJ = JJ[0] | JJ[1] << 8 | JJ[2] << 16;
        if (3126568 == ZJ && 253 == JJ[3]) {
          const ZJ = JJ[4],
            FJ = ZJ >> 5 & 1,
            eJ = ZJ >> 2 & 1,
            XJ = 3 & ZJ,
            qJ = ZJ >> 6;
          8 & ZJ && DJ(0);
          let jJ = 6 - FJ;
          const YJ = 3 == XJ ? 4 : XJ,
            hJ = sJ(JJ, jJ, YJ);
          jJ += YJ;
          const nJ = qJ ? 1 << qJ : FJ,
            GJ = sJ(JJ, jJ, nJ) + (1 == qJ && 256);
          let fJ = GJ;
          if (!FJ) {
            const cJ = 1 << 10 + (JJ[5] >> 3);
            fJ = cJ + (cJ >> 3) * (7 & JJ[5])
          }
          fJ > 2145386496 && DJ(1);
          const xJ = new UJ((1 == cJ ? GJ || fJ : cJ ? 0 : fJ) + 12);
          return xJ[0] = 1, xJ[4] = 4, xJ[8] = 8, {
            b: jJ + nJ,
            y: 0,
            l: 0,
            d: hJ,
            w: cJ && 1 != cJ ? cJ : xJ.subarray(12),
            e: fJ,
            o: new AJ(xJ.buffer, 0, 3),
            u: GJ,
            c: eJ,
            m: Math.min(131072, fJ)
          }
        }
        if (25481893 == (ZJ >> 4 | JJ[3] << 20)) return 8 + (((FJ = JJ)[eJ = 4] | FJ[eJ + 1] << 8 | FJ[eJ + 2] << 16 | FJ[eJ + 3] << 24) >>> 0);
        var FJ, eJ;
        DJ(0)
      },
      GJ = JJ => {
        let cJ = 0;
        for (; 1 << cJ <= JJ; ++cJ);
        return cJ - 1
      },
      fJ = (JJ, cJ, ZJ) => {
        let AJ = 4 + (cJ << 3);
        const qJ = 5 + (15 & JJ[cJ]);
        qJ > ZJ && DJ(3);
        const jJ = 1 << qJ;
        let YJ = jJ,
          hJ = -1,
          sJ = -1,
          nJ = -1,
          fJ = jJ;
        const xJ = new FJ(512 + (jJ << 2)),
          rJ = new XJ(xJ, 0, 256),
          vJ = new eJ(xJ, 0, 256),
          mJ = new eJ(xJ, 512, jJ),
          QJ = 512 + (jJ << 1),
          EJ = new UJ(xJ, QJ, jJ),
          VJ = new UJ(xJ, QJ + jJ);
        for (; hJ < 255 && YJ > 0;) {
          const cJ = GJ(YJ + 1),
            ZJ = AJ >> 3,
            FJ = (1 << cJ + 1) - 1;
          let UJ = (JJ[ZJ] | JJ[ZJ + 1] << 8 | JJ[ZJ + 2] << 16) >> (7 & AJ) & FJ;
          const eJ = (1 << cJ) - 1,
            XJ = FJ - YJ - 1,
            qJ = UJ & eJ;
          if (qJ < XJ ? (AJ += cJ, UJ = qJ) : (AJ += cJ + 1, UJ > eJ && (UJ -= XJ)), rJ[++hJ] = --UJ, -1 == UJ ? (YJ += UJ, EJ[--fJ] = hJ) : YJ -= UJ, !UJ)
            do {
              const cJ = AJ >> 3;
              sJ = (JJ[cJ] | JJ[cJ + 1] << 8) >> (7 & AJ) & 3, AJ += 2, hJ += sJ
            } while (3 == sJ)
        }(hJ > 255 || YJ) && DJ(0);
        let KJ = 0;
        const yJ = (jJ >> 1) + (jJ >> 3) + 3,
          SJ = jJ - 1;
        for (let FJ = 0; FJ <= hJ; ++FJ) {
          const JJ = rJ[FJ];
          if (JJ < 1) vJ[FJ] = -JJ;
          else
            for (nJ = 0; nJ < JJ; ++nJ) {
              EJ[KJ] = FJ;
              do {
                KJ = KJ + yJ & SJ
              } while (KJ >= fJ)
            }
        }
        for (KJ && DJ(0), nJ = 0; nJ < jJ; ++nJ) {
          const JJ = vJ[EJ[nJ]]++,
            cJ = VJ[nJ] = qJ - GJ(JJ);
          mJ[nJ] = (JJ << cJ) - jJ
        }
        return [AJ + 7 >> 3, {
          b: qJ,
          s: EJ,
          n: VJ,
          t: mJ
        }]
      },
      xJ = fJ(new UJ([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
      rJ = fJ(new UJ([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
      vJ = fJ(new UJ([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
      mJ = (JJ, cJ) => {
        const ZJ = JJ.length,
          FJ = new AJ(ZJ);
        for (let UJ = 0; UJ < ZJ; ++UJ) FJ[UJ] = cJ, cJ += 1 << JJ[UJ];
        return FJ
      },
      QJ = new UJ(new AJ([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
      EJ = mJ(QJ, 0),
      VJ = new UJ(new AJ([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
      KJ = mJ(VJ, 3),
      yJ = (JJ, cJ, ZJ) => {
        const FJ = JJ.length,
          UJ = cJ.length,
          eJ = JJ[FJ - 1],
          XJ = (1 << ZJ.b) - 1,
          AJ = -ZJ.b;
        eJ || DJ(0);
        let qJ = 0,
          jJ = ZJ.b,
          YJ = (FJ << 3) - 8 + GJ(eJ) - jJ,
          hJ = -1;
        for (; YJ > AJ && hJ < UJ;) {
          const FJ = YJ >> 3;
          qJ = (qJ << jJ | (JJ[FJ] | JJ[FJ + 1] << 8 | JJ[FJ + 2] << 16) >> (7 & YJ)) & XJ, cJ[++hJ] = ZJ.s[qJ], YJ -= jJ = ZJ.n[qJ]
        }
        YJ == AJ && hJ + 1 == UJ || DJ(0)
      },
      SJ = (JJ, cJ, ZJ) => {
        let FJ = 6;
        const UJ = cJ.length + 3 >> 2,
          eJ = UJ << 1,
          XJ = UJ + eJ;
        yJ(JJ.subarray(FJ, FJ += JJ[0] | JJ[1] << 8), cJ.subarray(0, UJ), ZJ), yJ(JJ.subarray(FJ, FJ += JJ[2] | JJ[3] << 8), cJ.subarray(UJ, eJ), ZJ), yJ(JJ.subarray(FJ, FJ += JJ[4] | JJ[5] << 8), cJ.subarray(eJ, XJ), ZJ), yJ(JJ.subarray(FJ), cJ.subarray(XJ), ZJ)
      },
      IJ = (JJ, cJ, ZJ) => {
        let FJ = cJ.b;
        const XJ = JJ[FJ],
          AJ = XJ >> 1 & 3;
        cJ.l = 1 & XJ;
        const YJ = XJ >> 3 | JJ[FJ + 1] << 5 | JJ[FJ + 2] << 13,
          hJ = (FJ += 3) + YJ;
        if (1 == AJ) {
          if (FJ >= JJ.length) return;
          return cJ.b = FJ + 1, ZJ ? (jJ(ZJ, JJ[FJ], cJ.y, cJ.y += YJ), ZJ) : jJ(new UJ(YJ), JJ[FJ])
        }
        if (!(hJ > JJ.length)) {
          if (0 == AJ) return cJ.b = hJ, ZJ ? (ZJ.set(JJ.subarray(FJ, hJ), cJ.y), cJ.y += YJ, ZJ) : qJ(JJ, FJ, hJ);
          if (2 == AJ) {
            const XJ = JJ[FJ],
              AJ = 3 & XJ,
              YJ = XJ >> 2 & 3;
            let sJ = XJ >> 4,
              nJ = 0,
              mJ = 0;
            AJ < 2 ? 1 & YJ ? sJ |= JJ[++FJ] << 4 | (2 & YJ && JJ[++FJ] << 12) : sJ = XJ >> 3 : (mJ = YJ, YJ < 2 ? (sJ |= (63 & JJ[++FJ]) << 4, nJ = JJ[FJ] >> 6 | JJ[++FJ] << 2) : 2 == YJ ? (sJ |= JJ[++FJ] << 4 | (3 & JJ[++FJ]) << 12, nJ = JJ[FJ] >> 2 | JJ[++FJ] << 6) : (sJ |= JJ[++FJ] << 4 | (63 & JJ[++FJ]) << 12, nJ = JJ[FJ] >> 6 | JJ[++FJ] << 2 | JJ[++FJ] << 10)), ++FJ;
            let IJ = ZJ ? ZJ.subarray(cJ.y, cJ.y + cJ.m) : new UJ(cJ.m),
              MJ = IJ.length - sJ;
            if (MJ < 0 && DJ(0), 0 == AJ) IJ.set(JJ.subarray(FJ, FJ += sJ), MJ);
            else if (1 == AJ) jJ(IJ, JJ[FJ++], MJ);
            else {
              let ZJ = cJ.h;
              if (2 == AJ) {
                const XJ = ((JJ, cJ) => {
                  let ZJ = 0,
                    FJ = -1;
                  const XJ = new UJ(292),
                    AJ = JJ[cJ],
                    qJ = XJ.subarray(0, 256),
                    YJ = XJ.subarray(256, 268),
                    hJ = new eJ(XJ.buffer, 268);
                  if (AJ < 128) {
                    const [ZJ, UJ] = fJ(JJ, cJ + 1, 6), eJ = ZJ << 3, XJ = JJ[cJ += AJ];
                    XJ || DJ(0);
                    let jJ = 0,
                      YJ = 0,
                      hJ = UJ.b,
                      sJ = hJ,
                      nJ = (++cJ << 3) - 8 + GJ(XJ);
                    for (; FJ > 254 && DJ(0), nJ -= hJ, !(nJ < eJ);) {
                      let cJ = nJ >> 3;
                      if (jJ += (JJ[cJ] | JJ[cJ + 1] << 8) >> (7 & nJ) & (1 << hJ) - 1, qJ[++FJ] = UJ.s[jJ], nJ -= sJ, nJ < eJ) break;
                      cJ = nJ >> 3, YJ += (JJ[cJ] | JJ[cJ + 1] << 8) >> (7 & nJ) & (1 << sJ) - 1, qJ[++FJ] = UJ.s[YJ], hJ = UJ.n[jJ], jJ = UJ.t[jJ], sJ = UJ.n[YJ], YJ = UJ.t[YJ]
                    }++FJ > 255 && DJ(0)
                  } else {
                    for (FJ = AJ - 127; ZJ < FJ; ZJ += 2) {
                      const FJ = JJ[++cJ];
                      qJ[ZJ] = FJ >> 4, qJ[ZJ + 1] = 15 & FJ
                    }++cJ
                  }
                  let sJ = 0;
                  for (ZJ = 0; ZJ < FJ; ++ZJ) {
                    const JJ = qJ[ZJ];
                    JJ > 11 && DJ(0), sJ += JJ && 1 << JJ - 1
                  }
                  const nJ = GJ(sJ) + 1,
                    xJ = 1 << nJ,
                    rJ = xJ - sJ;
                  for (rJ & rJ - 1 && DJ(0), qJ[FJ++] = GJ(rJ) + 1, ZJ = 0; ZJ < FJ; ++ZJ) {
                    const JJ = qJ[ZJ];
                    ++YJ[qJ[ZJ] = JJ && nJ + 1 - JJ]
                  }
                  const vJ = new UJ(xJ << 1),
                    mJ = vJ.subarray(0, xJ),
                    QJ = vJ.subarray(xJ);
                  for (hJ[nJ] = 0, ZJ = nJ; ZJ > 0; --ZJ) {
                    const JJ = hJ[ZJ];
                    jJ(QJ, ZJ, JJ, hJ[ZJ - 1] = JJ + YJ[ZJ] * (1 << nJ - ZJ))
                  }
                  for (hJ[0] != xJ && DJ(0), ZJ = 0; ZJ < FJ; ++ZJ) {
                    const JJ = qJ[ZJ];
                    if (JJ) {
                      const cJ = hJ[JJ];
                      jJ(mJ, ZJ, cJ, hJ[JJ] = cJ + (1 << nJ - JJ))
                    }
                  }
                  return [cJ, {
                    n: QJ,
                    b: nJ,
                    s: mJ
                  }]
                })(JJ, FJ);
                nJ += FJ - (FJ = XJ[0]), cJ.h = ZJ = XJ[1]
              } else ZJ || DJ(0);
              (mJ ? SJ : yJ)(JJ.subarray(FJ, FJ += nJ), IJ.subarray(MJ), ZJ)
            }
            let bJ = JJ[FJ++];
            if (bJ) {
              255 == bJ ? bJ = 32512 + (JJ[FJ++] | JJ[FJ++] << 8) : bJ > 127 && (bJ = bJ - 128 << 8 | JJ[FJ++]);
              const XJ = JJ[FJ++];
              3 & XJ && DJ(0);
              const AJ = [rJ, vJ, xJ];
              for (let ZJ = 2; ZJ > -1; --ZJ) {
                const qJ = XJ >> 2 + (ZJ << 1) & 3;
                if (1 == qJ) {
                  const cJ = new UJ([0, 0, JJ[FJ++]]);
                  AJ[ZJ] = {
                    s: cJ.subarray(2, 3),
                    n: cJ.subarray(0, 1),
                    t: new eJ(cJ.buffer, 0, 1),
                    b: 0
                  }
                } else 2 == qJ ? [FJ, AJ[ZJ]] = fJ(JJ, FJ, 9 - (1 & ZJ)) : 3 == qJ && (cJ.t || DJ(0), AJ[ZJ] = cJ.t[ZJ])
              }
              const [jJ, YJ, sJ] = cJ.t = AJ, nJ = JJ[hJ - 1];
              nJ || DJ(0);
              let mJ = (hJ << 3) - 8 + GJ(nJ) - sJ.b,
                yJ = mJ >> 3,
                SJ = 0,
                wJ = (JJ[yJ] | JJ[yJ + 1] << 8) >> (7 & mJ) & (1 << sJ.b) - 1;
              yJ = (mJ -= YJ.b) >> 3;
              let WJ = (JJ[yJ] | JJ[yJ + 1] << 8) >> (7 & mJ) & (1 << YJ.b) - 1;
              yJ = (mJ -= jJ.b) >> 3;
              let gJ = (JJ[yJ] | JJ[yJ + 1] << 8) >> (7 & mJ) & (1 << jJ.b) - 1;
              for (++bJ; --bJ;) {
                const ZJ = sJ.s[wJ],
                  FJ = sJ.n[wJ],
                  UJ = jJ.s[gJ],
                  eJ = jJ.n[gJ],
                  XJ = YJ.s[WJ],
                  AJ = YJ.n[WJ];
                yJ = (mJ -= XJ) >> 3;
                const qJ = 1 << XJ;
                let hJ = qJ + ((JJ[yJ] | JJ[yJ + 1] << 8 | JJ[yJ + 2] << 16 | JJ[yJ + 3] << 24) >>> (7 & mJ) & qJ - 1);
                yJ = (mJ -= VJ[UJ]) >> 3;
                let nJ = KJ[UJ] + ((JJ[yJ] | JJ[yJ + 1] << 8 | JJ[yJ + 2] << 16) >> (7 & mJ) & (1 << VJ[UJ]) - 1);
                yJ = (mJ -= QJ[ZJ]) >> 3;
                const GJ = EJ[ZJ] + ((JJ[yJ] | JJ[yJ + 1] << 8 | JJ[yJ + 2] << 16) >> (7 & mJ) & (1 << QJ[ZJ]) - 1);
                if ((mJ < 0 || MJ + GJ > IJ.length || SJ + GJ + nJ > IJ.length) && DJ(0), yJ = (mJ -= FJ) >> 3, wJ = sJ.t[wJ] + ((JJ[yJ] | JJ[yJ + 1] << 8) >> (7 & mJ) & (1 << FJ) - 1), yJ = (mJ -= eJ) >> 3, gJ = jJ.t[gJ] + ((JJ[yJ] | JJ[yJ + 1] << 8) >> (7 & mJ) & (1 << eJ) - 1), yJ = (mJ -= AJ) >> 3, WJ = YJ.t[WJ] + ((JJ[yJ] | JJ[yJ + 1] << 8) >> (7 & mJ) & (1 << AJ) - 1), hJ > 3) cJ.o[2] = cJ.o[1], cJ.o[1] = cJ.o[0], cJ.o[0] = hJ -= 3;
                else {
                  const JJ = hJ - (0 != GJ);
                  JJ ? (hJ = 3 == JJ ? cJ.o[0] - 1 : cJ.o[JJ], JJ > 1 && (cJ.o[2] = cJ.o[1]), cJ.o[1] = cJ.o[0], cJ.o[0] = hJ) : hJ = cJ.o[0]
                }
                for (let JJ = 0; JJ < GJ; ++JJ) IJ[SJ + JJ] = IJ[MJ + JJ];
                SJ += GJ, MJ += GJ;
                let fJ = SJ - hJ;
                if (fJ < 0) {
                  let JJ = -fJ;
                  const ZJ = cJ.e + fJ;
                  ZJ < 0 && DJ(4), JJ > nJ && (JJ = nJ);
                  for (let FJ = 0; FJ < JJ; ++FJ) IJ[SJ + FJ] = cJ.w[ZJ + FJ];
                  SJ += JJ, nJ -= JJ, fJ = 0
                }
                for (let JJ = 0; JJ < nJ; ++JJ) IJ[SJ + JJ] = IJ[fJ + JJ];
                SJ += nJ
              }
              if (SJ != MJ)
                for (; MJ < IJ.length;) IJ[SJ++] = IJ[MJ++];
              else SJ = IJ.length;
              ZJ ? cJ.y += SJ : IJ = qJ(IJ, 0, SJ)
            } else if (ZJ) {
              if (cJ.y += sJ, MJ)
                for (let JJ = 0; JJ < sJ; ++JJ) IJ[JJ] = IJ[MJ + JJ]
            } else MJ && (IJ = qJ(IJ, MJ));
            return cJ.b = hJ, IJ
          }
          DJ(2)
        }
      };
    class MJ {
      output = null;
      decoded = 0;
      done = !1;
      st = null;
      parts = [];
      hj = 0;
      needed = 18;
      size;
      constructor(JJ) {
        this.size = JJ
      }
      push(JJ) {
        if (this.done) return;
        if (this.parts.push(JJ), this.hj += JJ.length, this.hj < this.needed) return;
        const cJ = ((JJ, cJ) => {
          if (1 == JJ.length) return JJ[0];
          const ZJ = new UJ(cJ);
          for (let FJ = 0, UJ = 0; FJ < JJ.length; ++FJ) {
            const cJ = JJ[FJ];
            ZJ.set(cJ, UJ), UJ += cJ.length
          }
          return ZJ
        })(this.parts, this.hj);
        let ZJ = this.st;
        if (!ZJ) {
          const JJ = nJ(cJ, new UJ(0));
          "number" != typeof JJ && JJ.u === this.size || DJ(0, `not a zstd frame of ${this.size} bytes`), ZJ = this.st = nJ(cJ, 1), ZJ.e = 0, this.output = ZJ.w
        }
        for (;;) {
          const JJ = cJ.length - ZJ.b;
          if (JJ < 3) {
            this.needed = 3;
            break
          }
          const FJ = cJ[ZJ.b],
            UJ = FJ >> 1 & 3;
          3 == UJ && DJ(2);
          const eJ = FJ >> 3 | cJ[ZJ.b + 1] << 5 | cJ[ZJ.b + 2] << 13;
          eJ > ZJ.m && DJ(0);
          const XJ = 1 == UJ ? 4 : 3 + eJ;
          if (JJ < XJ) {
            this.needed = XJ;
            break
          }
          if (IJ(cJ, ZJ, ZJ.w) || DJ(5), ZJ.e = ZJ.y, (ZJ.y > ZJ.u || ZJ.l && ZJ.y != ZJ.u) && DJ(0), ZJ.l) {
            this.done = !0;
            break
          }
        }
        this.decoded = ZJ.y;
        const FJ = cJ.subarray(ZJ.b);
        this.parts = FJ.length ? [FJ] : [], this.hj = FJ.length, ZJ.b = 0
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);