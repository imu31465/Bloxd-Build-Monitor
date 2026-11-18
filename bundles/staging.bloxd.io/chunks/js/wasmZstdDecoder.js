export const id = 60;
export const ids = [60];
export const modules = {
  39813: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      ZstdErrorCode: () => oB,
      ZstdFrameDecoder: () => UB
    });
    const VB = ArrayBuffer,
      yB = Uint8Array,
      pB = Uint16Array,
      lB = Int16Array,
      JB = Int32Array,
      YB = (BB, TB, dB) => {
        if (yB.prototype.slice) return yB.prototype.slice.call(BB, TB, dB);
        (null == TB || TB < 0) && (TB = 0), (null == dB || dB > BB.length) && (dB = BB.length);
        const VB = new yB(dB - TB);
        return VB.set(BB.subarray(TB, dB)), VB
      },
      gB = (BB, TB, dB, VB) => {
        if (yB.prototype.fill) return yB.prototype.fill.call(BB, TB, dB, VB);
        for ((null == dB || dB < 0) && (dB = 0), (null == VB || VB > BB.length) && (VB = BB.length); dB < VB; ++dB) BB[dB] = TB;
        return BB
      },
      oB = {
        InvalidData: 0,
        WindowSizeTooLarge: 1,
        InvalidBlockType: 2,
        FSEAccuracyTooHigh: 3,
        DistanceTooFarBack: 4,
        UnexpectedEOF: 5
      },
      kB = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
      LB = (BB, TB, dB) => {
        const VB = new Error(TB || kB[BB]);
        if (VB.code = BB, Error.captureStackTrace && Error.captureStackTrace(VB, LB), !dB) throw VB;
        return VB
      },
      OB = (BB, TB, dB) => {
        let VB = 0,
          yB = 0;
        for (; VB < dB; ++VB) yB |= BB[TB++] << (VB << 3);
        return yB
      },
      DB = (BB, TB) => {
        const dB = BB[0] | BB[1] << 8 | BB[2] << 16;
        if (3126568 == dB && 253 == BB[3]) {
          const dB = BB[4],
            VB = dB >> 5 & 1,
            pB = dB >> 2 & 1,
            lB = 3 & dB,
            YB = dB >> 6;
          8 & dB && LB(0);
          let gB = 6 - VB;
          const oB = 3 == lB ? 4 : lB,
            kB = OB(BB, gB, oB);
          gB += oB;
          const DB = YB ? 1 << YB : VB,
            uB = OB(BB, gB, DB) + (1 == YB && 256);
          let HB = uB;
          if (!VB) {
            const TB = 1 << 10 + (BB[5] >> 3);
            HB = TB + (TB >> 3) * (7 & BB[5])
          }
          HB > 2145386496 && LB(1);
          const EB = new yB((1 == TB ? uB || HB : TB ? 0 : HB) + 12);
          return EB[0] = 1, EB[4] = 4, EB[8] = 8, {
            b: gB + DB,
            y: 0,
            l: 0,
            d: kB,
            w: TB && 1 != TB ? TB : EB.subarray(12),
            e: HB,
            o: new JB(EB.buffer, 0, 3),
            u: uB,
            c: pB,
            m: Math.min(131072, HB)
          }
        }
        if (25481893 == (dB >> 4 | BB[3] << 20)) return 8 + (((VB = BB)[pB = 4] | VB[pB + 1] << 8 | VB[pB + 2] << 16 | VB[pB + 3] << 24) >>> 0);
        var VB, pB;
        LB(0)
      },
      uB = BB => {
        let TB = 0;
        for (; 1 << TB <= BB; ++TB);
        return TB - 1
      },
      HB = (BB, TB, dB) => {
        let JB = 4 + (TB << 3);
        const YB = 5 + (15 & BB[TB]);
        YB > dB && LB(3);
        const gB = 1 << YB;
        let oB = gB,
          kB = -1,
          OB = -1,
          DB = -1,
          HB = gB;
        const EB = new VB(512 + (gB << 2)),
          vB = new lB(EB, 0, 256),
          mB = new pB(EB, 0, 256),
          iB = new pB(EB, 512, gB),
          NB = 512 + (gB << 1),
          tB = new yB(EB, NB, gB),
          fB = new yB(EB, NB + gB);
        for (; kB < 255 && oB > 0;) {
          const TB = uB(oB + 1),
            dB = JB >> 3,
            VB = (1 << TB + 1) - 1;
          let yB = (BB[dB] | BB[dB + 1] << 8 | BB[dB + 2] << 16) >> (7 & JB) & VB;
          const pB = (1 << TB) - 1,
            lB = VB - oB - 1,
            YB = yB & pB;
          if (YB < lB ? (JB += TB, yB = YB) : (JB += TB + 1, yB > pB && (yB -= lB)), vB[++kB] = --yB, -1 == yB ? (oB += yB, tB[--HB] = kB) : oB -= yB, !yB)
            do {
              const TB = JB >> 3;
              OB = (BB[TB] | BB[TB + 1] << 8) >> (7 & JB) & 3, JB += 2, kB += OB
            } while (3 == OB)
        }(kB > 255 || oB) && LB(0);
        let sB = 0;
        const MB = (gB >> 1) + (gB >> 3) + 3,
          zB = gB - 1;
        for (let VB = 0; VB <= kB; ++VB) {
          const BB = vB[VB];
          if (BB < 1) mB[VB] = -BB;
          else
            for (DB = 0; DB < BB; ++DB) {
              tB[sB] = VB;
              do {
                sB = sB + MB & zB
              } while (sB >= HB)
            }
        }
        for (sB && LB(0), DB = 0; DB < gB; ++DB) {
          const BB = mB[tB[DB]]++,
            TB = fB[DB] = YB - uB(BB);
          iB[DB] = (BB << TB) - gB
        }
        return [JB + 7 >> 3, {
          b: YB,
          s: tB,
          n: fB,
          t: iB
        }]
      },
      EB = HB(new yB([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
      vB = HB(new yB([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
      mB = HB(new yB([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
      iB = (BB, TB) => {
        const dB = BB.length,
          VB = new JB(dB);
        for (let yB = 0; yB < dB; ++yB) VB[yB] = TB, TB += 1 << BB[yB];
        return VB
      },
      NB = new yB(new JB([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
      tB = iB(NB, 0),
      fB = new yB(new JB([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
      sB = iB(fB, 3),
      MB = (BB, TB, dB) => {
        const VB = BB.length,
          yB = TB.length,
          pB = BB[VB - 1],
          lB = (1 << dB.b) - 1,
          JB = -dB.b;
        pB || LB(0);
        let YB = 0,
          gB = dB.b,
          oB = (VB << 3) - 8 + uB(pB) - gB,
          kB = -1;
        for (; oB > JB && kB < yB;) {
          const VB = oB >> 3;
          YB = (YB << gB | (BB[VB] | BB[VB + 1] << 8 | BB[VB + 2] << 16) >> (7 & oB)) & lB, TB[++kB] = dB.s[YB], oB -= gB = dB.n[YB]
        }
        oB == JB && kB + 1 == yB || LB(0)
      },
      zB = (BB, TB, dB) => {
        let VB = 6;
        const yB = TB.length + 3 >> 2,
          pB = yB << 1,
          lB = yB + pB;
        MB(BB.subarray(VB, VB += BB[0] | BB[1] << 8), TB.subarray(0, yB), dB), MB(BB.subarray(VB, VB += BB[2] | BB[3] << 8), TB.subarray(yB, pB), dB), MB(BB.subarray(VB, VB += BB[4] | BB[5] << 8), TB.subarray(pB, lB), dB), MB(BB.subarray(VB), TB.subarray(lB), dB)
      },
      wB = (BB, TB, dB) => {
        let VB = TB.b;
        const lB = BB[VB],
          JB = lB >> 1 & 3;
        TB.l = 1 & lB;
        const oB = lB >> 3 | BB[VB + 1] << 5 | BB[VB + 2] << 13,
          kB = (VB += 3) + oB;
        if (1 == JB) {
          if (VB >= BB.length) return;
          return TB.b = VB + 1, dB ? (gB(dB, BB[VB], TB.y, TB.y += oB), dB) : gB(new yB(oB), BB[VB])
        }
        if (!(kB > BB.length)) {
          if (0 == JB) return TB.b = kB, dB ? (dB.set(BB.subarray(VB, kB), TB.y), TB.y += oB, dB) : YB(BB, VB, kB);
          if (2 == JB) {
            const lB = BB[VB],
              JB = 3 & lB,
              oB = lB >> 2 & 3;
            let OB = lB >> 4,
              DB = 0,
              iB = 0;
            JB < 2 ? 1 & oB ? OB |= BB[++VB] << 4 | (2 & oB && BB[++VB] << 12) : OB = lB >> 3 : (iB = oB, oB < 2 ? (OB |= (63 & BB[++VB]) << 4, DB = BB[VB] >> 6 | BB[++VB] << 2) : 2 == oB ? (OB |= BB[++VB] << 4 | (3 & BB[++VB]) << 12, DB = BB[VB] >> 2 | BB[++VB] << 6) : (OB |= BB[++VB] << 4 | (63 & BB[++VB]) << 12, DB = BB[VB] >> 6 | BB[++VB] << 2 | BB[++VB] << 10)), ++VB;
            let wB = dB ? dB.subarray(TB.y, TB.y + TB.m) : new yB(TB.m),
              UB = wB.length - OB;
            if (UB < 0 && LB(0), 0 == JB) wB.set(BB.subarray(VB, VB += OB), UB);
            else if (1 == JB) gB(wB, BB[VB++], UB);
            else {
              let dB = TB.h;
              if (2 == JB) {
                const lB = ((BB, TB) => {
                  let dB = 0,
                    VB = -1;
                  const lB = new yB(292),
                    JB = BB[TB],
                    YB = lB.subarray(0, 256),
                    oB = lB.subarray(256, 268),
                    kB = new pB(lB.buffer, 268);
                  if (JB < 128) {
                    const [dB, yB] = HB(BB, TB + 1, 6), pB = dB << 3, lB = BB[TB += JB];
                    lB || LB(0);
                    let gB = 0,
                      oB = 0,
                      kB = yB.b,
                      OB = kB,
                      DB = (++TB << 3) - 8 + uB(lB);
                    for (; VB > 254 && LB(0), DB -= kB, !(DB < pB);) {
                      let TB = DB >> 3;
                      if (gB += (BB[TB] | BB[TB + 1] << 8) >> (7 & DB) & (1 << kB) - 1, YB[++VB] = yB.s[gB], DB -= OB, DB < pB) break;
                      TB = DB >> 3, oB += (BB[TB] | BB[TB + 1] << 8) >> (7 & DB) & (1 << OB) - 1, YB[++VB] = yB.s[oB], kB = yB.n[gB], gB = yB.t[gB], OB = yB.n[oB], oB = yB.t[oB]
                    }++VB > 255 && LB(0)
                  } else {
                    for (VB = JB - 127; dB < VB; dB += 2) {
                      const VB = BB[++TB];
                      YB[dB] = VB >> 4, YB[dB + 1] = 15 & VB
                    }++TB
                  }
                  let OB = 0;
                  for (dB = 0; dB < VB; ++dB) {
                    const BB = YB[dB];
                    BB > 11 && LB(0), OB += BB && 1 << BB - 1
                  }
                  const DB = uB(OB) + 1,
                    EB = 1 << DB,
                    vB = EB - OB;
                  for (vB & vB - 1 && LB(0), YB[VB++] = uB(vB) + 1, dB = 0; dB < VB; ++dB) {
                    const BB = YB[dB];
                    ++oB[YB[dB] = BB && DB + 1 - BB]
                  }
                  const mB = new yB(EB << 1),
                    iB = mB.subarray(0, EB),
                    NB = mB.subarray(EB);
                  for (kB[DB] = 0, dB = DB; dB > 0; --dB) {
                    const BB = kB[dB];
                    gB(NB, dB, BB, kB[dB - 1] = BB + oB[dB] * (1 << DB - dB))
                  }
                  for (kB[0] != EB && LB(0), dB = 0; dB < VB; ++dB) {
                    const BB = YB[dB];
                    if (BB) {
                      const TB = kB[BB];
                      gB(iB, dB, TB, kB[BB] = TB + (1 << DB - BB))
                    }
                  }
                  return [TB, {
                    n: NB,
                    b: DB,
                    s: iB
                  }]
                })(BB, VB);
                DB += VB - (VB = lB[0]), TB.h = dB = lB[1]
              } else dB || LB(0);
              (iB ? zB : MB)(BB.subarray(VB, VB += DB), wB.subarray(UB), dB)
            }
            let FB = BB[VB++];
            if (FB) {
              255 == FB ? FB = 32512 + (BB[VB++] | BB[VB++] << 8) : FB > 127 && (FB = FB - 128 << 8 | BB[VB++]);
              const lB = BB[VB++];
              3 & lB && LB(0);
              const JB = [vB, mB, EB];
              for (let dB = 2; dB > -1; --dB) {
                const YB = lB >> 2 + (dB << 1) & 3;
                if (1 == YB) {
                  const TB = new yB([0, 0, BB[VB++]]);
                  JB[dB] = {
                    s: TB.subarray(2, 3),
                    n: TB.subarray(0, 1),
                    t: new pB(TB.buffer, 0, 1),
                    b: 0
                  }
                } else 2 == YB ? [VB, JB[dB]] = HB(BB, VB, 9 - (1 & dB)) : 3 == YB && (TB.t || LB(0), JB[dB] = TB.t[dB])
              }
              const [gB, oB, OB] = TB.t = JB, DB = BB[kB - 1];
              DB || LB(0);
              let iB = (kB << 3) - 8 + uB(DB) - OB.b,
                MB = iB >> 3,
                zB = 0,
                KB = (BB[MB] | BB[MB + 1] << 8) >> (7 & iB) & (1 << OB.b) - 1;
              MB = (iB -= oB.b) >> 3;
              let rB = (BB[MB] | BB[MB + 1] << 8) >> (7 & iB) & (1 << oB.b) - 1;
              MB = (iB -= gB.b) >> 3;
              let IB = (BB[MB] | BB[MB + 1] << 8) >> (7 & iB) & (1 << gB.b) - 1;
              for (++FB; --FB;) {
                const dB = OB.s[KB],
                  VB = OB.n[KB],
                  yB = gB.s[IB],
                  pB = gB.n[IB],
                  lB = oB.s[rB],
                  JB = oB.n[rB];
                MB = (iB -= lB) >> 3;
                const YB = 1 << lB;
                let kB = YB + ((BB[MB] | BB[MB + 1] << 8 | BB[MB + 2] << 16 | BB[MB + 3] << 24) >>> (7 & iB) & YB - 1);
                MB = (iB -= fB[yB]) >> 3;
                let DB = sB[yB] + ((BB[MB] | BB[MB + 1] << 8 | BB[MB + 2] << 16) >> (7 & iB) & (1 << fB[yB]) - 1);
                MB = (iB -= NB[dB]) >> 3;
                const uB = tB[dB] + ((BB[MB] | BB[MB + 1] << 8 | BB[MB + 2] << 16) >> (7 & iB) & (1 << NB[dB]) - 1);
                if ((iB < 0 || UB + uB > wB.length || zB + uB + DB > wB.length) && LB(0), MB = (iB -= VB) >> 3, KB = OB.t[KB] + ((BB[MB] | BB[MB + 1] << 8) >> (7 & iB) & (1 << VB) - 1), MB = (iB -= pB) >> 3, IB = gB.t[IB] + ((BB[MB] | BB[MB + 1] << 8) >> (7 & iB) & (1 << pB) - 1), MB = (iB -= JB) >> 3, rB = oB.t[rB] + ((BB[MB] | BB[MB + 1] << 8) >> (7 & iB) & (1 << JB) - 1), kB > 3) TB.o[2] = TB.o[1], TB.o[1] = TB.o[0], TB.o[0] = kB -= 3;
                else {
                  const BB = kB - (0 != uB);
                  BB ? (kB = 3 == BB ? TB.o[0] - 1 : TB.o[BB], BB > 1 && (TB.o[2] = TB.o[1]), TB.o[1] = TB.o[0], TB.o[0] = kB) : kB = TB.o[0]
                }
                for (let BB = 0; BB < uB; ++BB) wB[zB + BB] = wB[UB + BB];
                zB += uB, UB += uB;
                let HB = zB - kB;
                if (HB < 0) {
                  let BB = -HB;
                  const dB = TB.e + HB;
                  dB < 0 && LB(4), BB > DB && (BB = DB);
                  for (let VB = 0; VB < BB; ++VB) wB[zB + VB] = TB.w[dB + VB];
                  zB += BB, DB -= BB, HB = 0
                }
                for (let BB = 0; BB < DB; ++BB) wB[zB + BB] = wB[HB + BB];
                zB += DB
              }
              if (zB != UB)
                for (; UB < wB.length;) wB[zB++] = wB[UB++];
              else zB = wB.length;
              dB ? TB.y += zB : wB = YB(wB, 0, zB)
            } else if (dB) {
              if (TB.y += OB, UB)
                for (let BB = 0; BB < OB; ++BB) wB[BB] = wB[UB + BB]
            } else UB && (wB = YB(wB, UB));
            return TB.b = kB, wB
          }
          LB(2)
        }
      };
    class UB {
      output = null;
      decoded = 0;
      done = !1;
      st = null;
      parts = [];
      Dg = 0;
      needed = 18;
      size;
      constructor(BB) {
        this.size = BB
      }
      push(BB) {
        if (this.done) return;
        if (this.parts.push(BB), this.Dg += BB.length, this.Dg < this.needed) return;
        const TB = ((BB, TB) => {
          if (1 == BB.length) return BB[0];
          const dB = new yB(TB);
          for (let VB = 0, yB = 0; VB < BB.length; ++VB) {
            const TB = BB[VB];
            dB.set(TB, yB), yB += TB.length
          }
          return dB
        })(this.parts, this.Dg);
        let dB = this.st;
        if (!dB) {
          const BB = DB(TB, new yB(0));
          "number" != typeof BB && BB.u === this.size || LB(0, `not a zstd frame of ${this.size} bytes`), dB = this.st = DB(TB, 1), dB.e = 0, this.output = dB.w
        }
        for (;;) {
          const BB = TB.length - dB.b;
          if (BB < 3) {
            this.needed = 3;
            break
          }
          const VB = TB[dB.b],
            yB = VB >> 1 & 3;
          3 == yB && LB(2);
          const pB = VB >> 3 | TB[dB.b + 1] << 5 | TB[dB.b + 2] << 13;
          pB > dB.m && LB(0);
          const lB = 1 == yB ? 4 : 3 + pB;
          if (BB < lB) {
            this.needed = lB;
            break
          }
          if (wB(TB, dB, dB.w) || LB(5), dB.e = dB.y, (dB.y > dB.u || dB.l && dB.y != dB.u) && LB(0), dB.l) {
            this.done = !0;
            break
          }
        }
        this.decoded = dB.y;
        const VB = TB.subarray(dB.b);
        this.parts = VB.length ? [VB] : [], this.Dg = VB.length, dB.b = 0
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);