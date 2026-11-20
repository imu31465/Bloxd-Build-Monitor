export const id = 64;
export const ids = [64];
export const modules = {
  40615: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      ZstdErrorCode: () => sk,
      ZstdFrameDecoder: () => uk
    });
    const Rk = ArrayBuffer,
      tk = Uint8Array,
      ak = Uint16Array,
      Xk = Int16Array,
      bk = Int32Array,
      wk = (kk, Fk, Bk) => {
        if (tk.prototype.slice) return tk.prototype.slice.call(kk, Fk, Bk);
        (null == Fk || Fk < 0) && (Fk = 0), (null == Bk || Bk > kk.length) && (Bk = kk.length);
        const Rk = new tk(Bk - Fk);
        return Rk.set(kk.subarray(Fk, Bk)), Rk
      },
      dk = (kk, Fk, Bk, Rk) => {
        if (tk.prototype.fill) return tk.prototype.fill.call(kk, Fk, Bk, Rk);
        for ((null == Bk || Bk < 0) && (Bk = 0), (null == Rk || Rk > kk.length) && (Rk = kk.length); Bk < Rk; ++Bk) kk[Bk] = Fk;
        return kk
      },
      sk = {
        InvalidData: 0,
        WindowSizeTooLarge: 1,
        InvalidBlockType: 2,
        FSEAccuracyTooHigh: 3,
        DistanceTooFarBack: 4,
        UnexpectedEOF: 5
      },
      Vk = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
      Jk = (kk, Fk, Bk) => {
        const Rk = new Error(Fk || Vk[kk]);
        if (Rk.code = kk, Error.captureStackTrace && Error.captureStackTrace(Rk, Jk), !Bk) throw Rk;
        return Rk
      },
      Ak = (kk, Fk, Bk) => {
        let Rk = 0,
          tk = 0;
        for (; Rk < Bk; ++Rk) tk |= kk[Fk++] << (Rk << 3);
        return tk
      },
      ek = (kk, Fk) => {
        const Bk = kk[0] | kk[1] << 8 | kk[2] << 16;
        if (3126568 == Bk && 253 == kk[3]) {
          const Bk = kk[4],
            Rk = Bk >> 5 & 1,
            ak = Bk >> 2 & 1,
            Xk = 3 & Bk,
            wk = Bk >> 6;
          8 & Bk && Jk(0);
          let dk = 6 - Rk;
          const sk = 3 == Xk ? 4 : Xk,
            Vk = Ak(kk, dk, sk);
          dk += sk;
          const ek = wk ? 1 << wk : Rk,
            yk = Ak(kk, dk, ek) + (1 == wk && 256);
          let fk = yk;
          if (!Rk) {
            const Fk = 1 << 10 + (kk[5] >> 3);
            fk = Fk + (Fk >> 3) * (7 & kk[5])
          }
          fk > 2145386496 && Jk(1);
          const mk = new tk((1 == Fk ? yk || fk : Fk ? 0 : fk) + 12);
          return mk[0] = 1, mk[4] = 4, mk[8] = 8, {
            b: dk + ek,
            y: 0,
            l: 0,
            d: Vk,
            w: Fk && 1 != Fk ? Fk : mk.subarray(12),
            e: fk,
            o: new bk(mk.buffer, 0, 3),
            u: yk,
            c: ak,
            m: Math.min(131072, fk)
          }
        }
        if (25481893 == (Bk >> 4 | kk[3] << 20)) return 8 + (((Rk = kk)[ak = 4] | Rk[ak + 1] << 8 | Rk[ak + 2] << 16 | Rk[ak + 3] << 24) >>> 0);
        var Rk, ak;
        Jk(0)
      },
      yk = kk => {
        let Fk = 0;
        for (; 1 << Fk <= kk; ++Fk);
        return Fk - 1
      },
      fk = (kk, Fk, Bk) => {
        let bk = 4 + (Fk << 3);
        const wk = 5 + (15 & kk[Fk]);
        wk > Bk && Jk(3);
        const dk = 1 << wk;
        let sk = dk,
          Vk = -1,
          Ak = -1,
          ek = -1,
          fk = dk;
        const mk = new Rk(512 + (dk << 2)),
          Wk = new Xk(mk, 0, 256),
          vk = new ak(mk, 0, 256),
          ik = new ak(mk, 512, dk),
          Yk = 512 + (dk << 1),
          Lk = new tk(mk, Yk, dk),
          Ok = new tk(mk, Yk + dk);
        for (; Vk < 255 && sk > 0;) {
          const Fk = yk(sk + 1),
            Bk = bk >> 3,
            Rk = (1 << Fk + 1) - 1;
          let tk = (kk[Bk] | kk[Bk + 1] << 8 | kk[Bk + 2] << 16) >> (7 & bk) & Rk;
          const ak = (1 << Fk) - 1,
            Xk = Rk - sk - 1,
            wk = tk & ak;
          if (wk < Xk ? (bk += Fk, tk = wk) : (bk += Fk + 1, tk > ak && (tk -= Xk)), Wk[++Vk] = --tk, -1 == tk ? (sk += tk, Lk[--fk] = Vk) : sk -= tk, !tk)
            do {
              const Fk = bk >> 3;
              Ak = (kk[Fk] | kk[Fk + 1] << 8) >> (7 & bk) & 3, bk += 2, Vk += Ak
            } while (3 == Ak)
        }(Vk > 255 || sk) && Jk(0);
        let Ek = 0;
        const Sk = (dk >> 1) + (dk >> 3) + 3,
          Nk = dk - 1;
        for (let Rk = 0; Rk <= Vk; ++Rk) {
          const kk = Wk[Rk];
          if (kk < 1) vk[Rk] = -kk;
          else
            for (ek = 0; ek < kk; ++ek) {
              Lk[Ek] = Rk;
              do {
                Ek = Ek + Sk & Nk
              } while (Ek >= fk)
            }
        }
        for (Ek && Jk(0), ek = 0; ek < dk; ++ek) {
          const kk = vk[Lk[ek]]++,
            Fk = Ok[ek] = wk - yk(kk);
          ik[ek] = (kk << Fk) - dk
        }
        return [bk + 7 >> 3, {
          b: wk,
          s: Lk,
          n: Ok,
          t: ik
        }]
      },
      mk = fk(new tk([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
      Wk = fk(new tk([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
      vk = fk(new tk([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
      ik = (kk, Fk) => {
        const Bk = kk.length,
          Rk = new bk(Bk);
        for (let tk = 0; tk < Bk; ++tk) Rk[tk] = Fk, Fk += 1 << kk[tk];
        return Rk
      },
      Yk = new tk(new bk([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
      Lk = ik(Yk, 0),
      Ok = new tk(new bk([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
      Ek = ik(Ok, 3),
      Sk = (kk, Fk, Bk) => {
        const Rk = kk.length,
          tk = Fk.length,
          ak = kk[Rk - 1],
          Xk = (1 << Bk.b) - 1,
          bk = -Bk.b;
        ak || Jk(0);
        let wk = 0,
          dk = Bk.b,
          sk = (Rk << 3) - 8 + yk(ak) - dk,
          Vk = -1;
        for (; sk > bk && Vk < tk;) {
          const Rk = sk >> 3;
          wk = (wk << dk | (kk[Rk] | kk[Rk + 1] << 8 | kk[Rk + 2] << 16) >> (7 & sk)) & Xk, Fk[++Vk] = Bk.s[wk], sk -= dk = Bk.n[wk]
        }
        sk == bk && Vk + 1 == tk || Jk(0)
      },
      Nk = (kk, Fk, Bk) => {
        let Rk = 6;
        const tk = Fk.length + 3 >> 2,
          ak = tk << 1,
          Xk = tk + ak;
        Sk(kk.subarray(Rk, Rk += kk[0] | kk[1] << 8), Fk.subarray(0, tk), Bk), Sk(kk.subarray(Rk, Rk += kk[2] | kk[3] << 8), Fk.subarray(tk, ak), Bk), Sk(kk.subarray(Rk, Rk += kk[4] | kk[5] << 8), Fk.subarray(ak, Xk), Bk), Sk(kk.subarray(Rk), Fk.subarray(Xk), Bk)
      },
      Hk = (kk, Fk, Bk) => {
        let Rk = Fk.b;
        const Xk = kk[Rk],
          bk = Xk >> 1 & 3;
        Fk.l = 1 & Xk;
        const sk = Xk >> 3 | kk[Rk + 1] << 5 | kk[Rk + 2] << 13,
          Vk = (Rk += 3) + sk;
        if (1 == bk) {
          if (Rk >= kk.length) return;
          return Fk.b = Rk + 1, Bk ? (dk(Bk, kk[Rk], Fk.y, Fk.y += sk), Bk) : dk(new tk(sk), kk[Rk])
        }
        if (!(Vk > kk.length)) {
          if (0 == bk) return Fk.b = Vk, Bk ? (Bk.set(kk.subarray(Rk, Vk), Fk.y), Fk.y += sk, Bk) : wk(kk, Rk, Vk);
          if (2 == bk) {
            const Xk = kk[Rk],
              bk = 3 & Xk,
              sk = Xk >> 2 & 3;
            let Ak = Xk >> 4,
              ek = 0,
              ik = 0;
            bk < 2 ? 1 & sk ? Ak |= kk[++Rk] << 4 | (2 & sk && kk[++Rk] << 12) : Ak = Xk >> 3 : (ik = sk, sk < 2 ? (Ak |= (63 & kk[++Rk]) << 4, ek = kk[Rk] >> 6 | kk[++Rk] << 2) : 2 == sk ? (Ak |= kk[++Rk] << 4 | (3 & kk[++Rk]) << 12, ek = kk[Rk] >> 2 | kk[++Rk] << 6) : (Ak |= kk[++Rk] << 4 | (63 & kk[++Rk]) << 12, ek = kk[Rk] >> 6 | kk[++Rk] << 2 | kk[++Rk] << 10)), ++Rk;
            let Hk = Bk ? Bk.subarray(Fk.y, Fk.y + Fk.m) : new tk(Fk.m),
              uk = Hk.length - Ak;
            if (uk < 0 && Jk(0), 0 == bk) Hk.set(kk.subarray(Rk, Rk += Ak), uk);
            else if (1 == bk) dk(Hk, kk[Rk++], uk);
            else {
              let Bk = Fk.h;
              if (2 == bk) {
                const Xk = ((kk, Fk) => {
                  let Bk = 0,
                    Rk = -1;
                  const Xk = new tk(292),
                    bk = kk[Fk],
                    wk = Xk.subarray(0, 256),
                    sk = Xk.subarray(256, 268),
                    Vk = new ak(Xk.buffer, 268);
                  if (bk < 128) {
                    const [Bk, tk] = fk(kk, Fk + 1, 6), ak = Bk << 3, Xk = kk[Fk += bk];
                    Xk || Jk(0);
                    let dk = 0,
                      sk = 0,
                      Vk = tk.b,
                      Ak = Vk,
                      ek = (++Fk << 3) - 8 + yk(Xk);
                    for (; Rk > 254 && Jk(0), ek -= Vk, !(ek < ak);) {
                      let Fk = ek >> 3;
                      if (dk += (kk[Fk] | kk[Fk + 1] << 8) >> (7 & ek) & (1 << Vk) - 1, wk[++Rk] = tk.s[dk], ek -= Ak, ek < ak) break;
                      Fk = ek >> 3, sk += (kk[Fk] | kk[Fk + 1] << 8) >> (7 & ek) & (1 << Ak) - 1, wk[++Rk] = tk.s[sk], Vk = tk.n[dk], dk = tk.t[dk], Ak = tk.n[sk], sk = tk.t[sk]
                    }++Rk > 255 && Jk(0)
                  } else {
                    for (Rk = bk - 127; Bk < Rk; Bk += 2) {
                      const Rk = kk[++Fk];
                      wk[Bk] = Rk >> 4, wk[Bk + 1] = 15 & Rk
                    }++Fk
                  }
                  let Ak = 0;
                  for (Bk = 0; Bk < Rk; ++Bk) {
                    const kk = wk[Bk];
                    kk > 11 && Jk(0), Ak += kk && 1 << kk - 1
                  }
                  const ek = yk(Ak) + 1,
                    mk = 1 << ek,
                    Wk = mk - Ak;
                  for (Wk & Wk - 1 && Jk(0), wk[Rk++] = yk(Wk) + 1, Bk = 0; Bk < Rk; ++Bk) {
                    const kk = wk[Bk];
                    ++sk[wk[Bk] = kk && ek + 1 - kk]
                  }
                  const vk = new tk(mk << 1),
                    ik = vk.subarray(0, mk),
                    Yk = vk.subarray(mk);
                  for (Vk[ek] = 0, Bk = ek; Bk > 0; --Bk) {
                    const kk = Vk[Bk];
                    dk(Yk, Bk, kk, Vk[Bk - 1] = kk + sk[Bk] * (1 << ek - Bk))
                  }
                  for (Vk[0] != mk && Jk(0), Bk = 0; Bk < Rk; ++Bk) {
                    const kk = wk[Bk];
                    if (kk) {
                      const Fk = Vk[kk];
                      dk(ik, Bk, Fk, Vk[kk] = Fk + (1 << ek - kk))
                    }
                  }
                  return [Fk, {
                    n: Yk,
                    b: ek,
                    s: ik
                  }]
                })(kk, Rk);
                ek += Rk - (Rk = Xk[0]), Fk.h = Bk = Xk[1]
              } else Bk || Jk(0);
              (ik ? Nk : Sk)(kk.subarray(Rk, Rk += ek), Hk.subarray(uk), Bk)
            }
            let Mk = kk[Rk++];
            if (Mk) {
              255 == Mk ? Mk = 32512 + (kk[Rk++] | kk[Rk++] << 8) : Mk > 127 && (Mk = Mk - 128 << 8 | kk[Rk++]);
              const Xk = kk[Rk++];
              3 & Xk && Jk(0);
              const bk = [Wk, vk, mk];
              for (let Bk = 2; Bk > -1; --Bk) {
                const wk = Xk >> 2 + (Bk << 1) & 3;
                if (1 == wk) {
                  const Fk = new tk([0, 0, kk[Rk++]]);
                  bk[Bk] = {
                    s: Fk.subarray(2, 3),
                    n: Fk.subarray(0, 1),
                    t: new ak(Fk.buffer, 0, 1),
                    b: 0
                  }
                } else 2 == wk ? [Rk, bk[Bk]] = fk(kk, Rk, 9 - (1 & Bk)) : 3 == wk && (Fk.t || Jk(0), bk[Bk] = Fk.t[Bk])
              }
              const [dk, sk, Ak] = Fk.t = bk, ek = kk[Vk - 1];
              ek || Jk(0);
              let ik = (Vk << 3) - 8 + yk(ek) - Ak.b,
                Sk = ik >> 3,
                Nk = 0,
                gk = (kk[Sk] | kk[Sk + 1] << 8) >> (7 & ik) & (1 << Ak.b) - 1;
              Sk = (ik -= sk.b) >> 3;
              let Uk = (kk[Sk] | kk[Sk + 1] << 8) >> (7 & ik) & (1 << sk.b) - 1;
              Sk = (ik -= dk.b) >> 3;
              let ck = (kk[Sk] | kk[Sk + 1] << 8) >> (7 & ik) & (1 << dk.b) - 1;
              for (++Mk; --Mk;) {
                const Bk = Ak.s[gk],
                  Rk = Ak.n[gk],
                  tk = dk.s[ck],
                  ak = dk.n[ck],
                  Xk = sk.s[Uk],
                  bk = sk.n[Uk];
                Sk = (ik -= Xk) >> 3;
                const wk = 1 << Xk;
                let Vk = wk + ((kk[Sk] | kk[Sk + 1] << 8 | kk[Sk + 2] << 16 | kk[Sk + 3] << 24) >>> (7 & ik) & wk - 1);
                Sk = (ik -= Ok[tk]) >> 3;
                let ek = Ek[tk] + ((kk[Sk] | kk[Sk + 1] << 8 | kk[Sk + 2] << 16) >> (7 & ik) & (1 << Ok[tk]) - 1);
                Sk = (ik -= Yk[Bk]) >> 3;
                const yk = Lk[Bk] + ((kk[Sk] | kk[Sk + 1] << 8 | kk[Sk + 2] << 16) >> (7 & ik) & (1 << Yk[Bk]) - 1);
                if ((ik < 0 || uk + yk > Hk.length || Nk + yk + ek > Hk.length) && Jk(0), Sk = (ik -= Rk) >> 3, gk = Ak.t[gk] + ((kk[Sk] | kk[Sk + 1] << 8) >> (7 & ik) & (1 << Rk) - 1), Sk = (ik -= ak) >> 3, ck = dk.t[ck] + ((kk[Sk] | kk[Sk + 1] << 8) >> (7 & ik) & (1 << ak) - 1), Sk = (ik -= bk) >> 3, Uk = sk.t[Uk] + ((kk[Sk] | kk[Sk + 1] << 8) >> (7 & ik) & (1 << bk) - 1), Vk > 3) Fk.o[2] = Fk.o[1], Fk.o[1] = Fk.o[0], Fk.o[0] = Vk -= 3;
                else {
                  const kk = Vk - (0 != yk);
                  kk ? (Vk = 3 == kk ? Fk.o[0] - 1 : Fk.o[kk], kk > 1 && (Fk.o[2] = Fk.o[1]), Fk.o[1] = Fk.o[0], Fk.o[0] = Vk) : Vk = Fk.o[0]
                }
                for (let kk = 0; kk < yk; ++kk) Hk[Nk + kk] = Hk[uk + kk];
                Nk += yk, uk += yk;
                let fk = Nk - Vk;
                if (fk < 0) {
                  let kk = -fk;
                  const Bk = Fk.e + fk;
                  Bk < 0 && Jk(4), kk > ek && (kk = ek);
                  for (let Rk = 0; Rk < kk; ++Rk) Hk[Nk + Rk] = Fk.w[Bk + Rk];
                  Nk += kk, ek -= kk, fk = 0
                }
                for (let kk = 0; kk < ek; ++kk) Hk[Nk + kk] = Hk[fk + kk];
                Nk += ek
              }
              if (Nk != uk)
                for (; uk < Hk.length;) Hk[Nk++] = Hk[uk++];
              else Nk = Hk.length;
              Bk ? Fk.y += Nk : Hk = wk(Hk, 0, Nk)
            } else if (Bk) {
              if (Fk.y += Ak, uk)
                for (let kk = 0; kk < Ak; ++kk) Hk[kk] = Hk[uk + kk]
            } else uk && (Hk = wk(Hk, uk));
            return Fk.b = Vk, Hk
          }
          Jk(2)
        }
      };
    class uk {
      output = null;
      decoded = 0;
      done = !1;
      st = null;
      parts = [];
      Hb = 0;
      needed = 18;
      size;
      constructor(kk) {
        this.size = kk
      }
      push(kk) {
        if (this.done) return;
        if (this.parts.push(kk), this.Hb += kk.length, this.Hb < this.needed) return;
        const Fk = ((kk, Fk) => {
          if (1 == kk.length) return kk[0];
          const Bk = new tk(Fk);
          for (let Rk = 0, tk = 0; Rk < kk.length; ++Rk) {
            const Fk = kk[Rk];
            Bk.set(Fk, tk), tk += Fk.length
          }
          return Bk
        })(this.parts, this.Hb);
        let Bk = this.st;
        if (!Bk) {
          const kk = ek(Fk, new tk(0));
          "number" != typeof kk && kk.u === this.size || Jk(0, `not a zstd frame of ${this.size} bytes`), Bk = this.st = ek(Fk, 1), Bk.e = 0, this.output = Bk.w
        }
        for (;;) {
          const kk = Fk.length - Bk.b;
          if (kk < 3) {
            this.needed = 3;
            break
          }
          const Rk = Fk[Bk.b],
            tk = Rk >> 1 & 3;
          3 == tk && Jk(2);
          const ak = Rk >> 3 | Fk[Bk.b + 1] << 5 | Fk[Bk.b + 2] << 13;
          ak > Bk.m && Jk(0);
          const Xk = 1 == tk ? 4 : 3 + ak;
          if (kk < Xk) {
            this.needed = Xk;
            break
          }
          if (Hk(Fk, Bk, Bk.w) || Jk(5), Bk.e = Bk.y, (Bk.y > Bk.u || Bk.l && Bk.y != Bk.u) && Jk(0), Bk.l) {
            this.done = !0;
            break
          }
        }
        this.decoded = Bk.y;
        const Rk = Fk.subarray(Bk.b);
        this.parts = Rk.length ? [Rk] : [], this.Hb = Rk.length, Bk.b = 0
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);