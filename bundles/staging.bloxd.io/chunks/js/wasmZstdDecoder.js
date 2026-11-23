(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var kk = __webpack_require__.u,
        Fk = __webpack_require__.e,
        Ik = {},
        Xk = {};
      __webpack_require__.u = function(Fk) {
        return kk(Fk) + (Ik.hasOwnProperty(Fk) ? "?" + Ik[Fk] : "")
      }, __webpack_require__.e = function(Tk) {
        return Fk(Tk).catch((function(Fk) {
          var ik = Xk.hasOwnProperty(Tk) ? Xk[Tk] : 4;
          if (ik < 1) {
            var yk = kk(Tk);
            throw Fk.message = "Loading chunk " + Tk + " failed after 4 retries.\n(" + yk + ")", Fk.request = yk, Ik[Tk] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete Xk[Tk]
            }), 0), Fk
          }
          return new Promise((function(kk) {
            var Fk = 4 - ik + 1;
            setTimeout((function() {
              var Fk = "cache-bust=" + Date.now();
              Ik[Tk] = Fk, Xk[Tk] = ik - 1, kk(__webpack_require__.e(Tk))
            }), function(kk) {
              return 500 * Math.pow(2, kk)
            }(Fk))
          }))
        }))
      }
    }
  })();

  function kk(kk) {
    return kk instanceof Error ? kk.message : String(kk)
  }
  const Fk = ArrayBuffer,
    Ik = Uint8Array,
    Xk = Uint16Array,
    Tk = Int16Array,
    ik = Int32Array,
    yk = (kk, Fk, Xk) => {
      if (Ik.prototype.slice) return Ik.prototype.slice.call(kk, Fk, Xk);
      (null == Fk || Fk < 0) && (Fk = 0), (null == Xk || Xk > kk.length) && (Xk = kk.length);
      const Tk = new Ik(Xk - Fk);
      return Tk.set(kk.subarray(Fk, Xk)), Tk
    },
    lk = (kk, Fk, Xk, Tk) => {
      if (Ik.prototype.fill) return Ik.prototype.fill.call(kk, Fk, Xk, Tk);
      for ((null == Xk || Xk < 0) && (Xk = 0), (null == Tk || Tk > kk.length) && (Tk = kk.length); Xk < Tk; ++Xk) kk[Xk] = Fk;
      return kk
    },
    ak = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    qk = (kk, Fk, Ik) => {
      const Xk = new Error(Fk || ak[kk]);
      if (Xk.code = kk, Error.captureStackTrace && Error.captureStackTrace(Xk, qk), !Ik) throw Xk;
      return Xk
    },
    Lk = (kk, Fk, Ik) => {
      let Xk = 0,
        Tk = 0;
      for (; Xk < Ik; ++Xk) Tk |= kk[Fk++] << (Xk << 3);
      return Tk
    },
    tk = (kk, Fk) => {
      const Xk = kk[0] | kk[1] << 8 | kk[2] << 16;
      if (3126568 == Xk && 253 == kk[3]) {
        const Xk = kk[4],
          Tk = Xk >> 5 & 1,
          yk = Xk >> 2 & 1,
          lk = 3 & Xk,
          ak = Xk >> 6;
        8 & Xk && qk(0);
        let tk = 6 - Tk;
        const Zk = 3 == lk ? 4 : lk,
          jk = Lk(kk, tk, Zk);
        tk += Zk;
        const ek = ak ? 1 << ak : Tk,
          wk = Lk(kk, tk, ek) + (1 == ak && 256);
        let Hk = wk;
        if (!Tk) {
          const Fk = 1 << 10 + (kk[5] >> 3);
          Hk = Fk + (Fk >> 3) * (7 & kk[5])
        }
        Hk > 2145386496 && qk(1);
        const Jk = new Ik((1 == Fk ? wk || Hk : Fk ? 0 : Hk) + 12);
        return Jk[0] = 1, Jk[4] = 4, Jk[8] = 8, {
          b: tk + ek,
          y: 0,
          l: 0,
          d: jk,
          w: Fk && 1 != Fk ? Fk : Jk.subarray(12),
          e: Hk,
          o: new ik(Jk.buffer, 0, 3),
          u: wk,
          c: yk,
          m: Math.min(131072, Hk)
        }
      }
      if (25481893 == (Xk >> 4 | kk[3] << 20)) return 8 + (((Tk = kk)[yk = 4] | Tk[yk + 1] << 8 | Tk[yk + 2] << 16 | Tk[yk + 3] << 24) >>> 0);
      var Tk, yk;
      qk(0)
    },
    Zk = kk => {
      let Fk = 0;
      for (; 1 << Fk <= kk; ++Fk);
      return Fk - 1
    },
    jk = (kk, ik, yk) => {
      let lk = 4 + (ik << 3);
      const ak = 5 + (15 & kk[ik]);
      ak > yk && qk(3);
      const Lk = 1 << ak;
      let tk = Lk,
        jk = -1,
        ek = -1,
        wk = -1,
        Hk = Lk;
      const Jk = new Fk(512 + (Lk << 2)),
        xk = new Tk(Jk, 0, 256),
        Pk = new Xk(Jk, 0, 256),
        Kk = new Xk(Jk, 512, Lk),
        Qk = 512 + (Lk << 1),
        sk = new Ik(Jk, Qk, Lk),
        Vk = new Ik(Jk, Qk + Lk);
      for (; jk < 255 && tk > 0;) {
        const Fk = Zk(tk + 1),
          Ik = lk >> 3,
          Xk = (1 << Fk + 1) - 1;
        let Tk = (kk[Ik] | kk[Ik + 1] << 8 | kk[Ik + 2] << 16) >> (7 & lk) & Xk;
        const ik = (1 << Fk) - 1,
          yk = Xk - tk - 1,
          ak = Tk & ik;
        if (ak < yk ? (lk += Fk, Tk = ak) : (lk += Fk + 1, Tk > ik && (Tk -= yk)), xk[++jk] = --Tk, -1 == Tk ? (tk += Tk, sk[--Hk] = jk) : tk -= Tk, !Tk)
          do {
            const Fk = lk >> 3;
            ek = (kk[Fk] | kk[Fk + 1] << 8) >> (7 & lk) & 3, lk += 2, jk += ek
          } while (3 == ek)
      }(jk > 255 || tk) && qk(0);
      let zk = 0;
      const Sk = (Lk >> 1) + (Lk >> 3) + 3,
        vk = Lk - 1;
      for (let Fk = 0; Fk <= jk; ++Fk) {
        const kk = xk[Fk];
        if (kk < 1) Pk[Fk] = -kk;
        else
          for (wk = 0; wk < kk; ++wk) {
            sk[zk] = Fk;
            do {
              zk = zk + Sk & vk
            } while (zk >= Hk)
          }
      }
      for (zk && qk(0), wk = 0; wk < Lk; ++wk) {
        const kk = Pk[sk[wk]]++,
          Fk = Vk[wk] = ak - Zk(kk);
        Kk[wk] = (kk << Fk) - Lk
      }
      return [lk + 7 >> 3, {
        b: ak,
        s: sk,
        n: Vk,
        t: Kk
      }]
    },
    ek = jk(new Ik([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    wk = jk(new Ik([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    Hk = jk(new Ik([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    Jk = (kk, Fk) => {
      const Ik = kk.length,
        Xk = new ik(Ik);
      for (let Tk = 0; Tk < Ik; ++Tk) Xk[Tk] = Fk, Fk += 1 << kk[Tk];
      return Xk
    },
    xk = new Ik(new ik([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    Pk = Jk(xk, 0),
    Kk = new Ik(new ik([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    Qk = Jk(Kk, 3),
    sk = (kk, Fk, Ik) => {
      const Xk = kk.length,
        Tk = Fk.length,
        ik = kk[Xk - 1],
        yk = (1 << Ik.b) - 1,
        lk = -Ik.b;
      ik || qk(0);
      let ak = 0,
        Lk = Ik.b,
        tk = (Xk << 3) - 8 + Zk(ik) - Lk,
        jk = -1;
      for (; tk > lk && jk < Tk;) {
        const Xk = tk >> 3;
        ak = (ak << Lk | (kk[Xk] | kk[Xk + 1] << 8 | kk[Xk + 2] << 16) >> (7 & tk)) & yk, Fk[++jk] = Ik.s[ak], tk -= Lk = Ik.n[ak]
      }
      tk == lk && jk + 1 == Tk || qk(0)
    },
    Vk = (kk, Fk, Ik) => {
      let Xk = 6;
      const Tk = Fk.length + 3 >> 2,
        ik = Tk << 1,
        yk = Tk + ik;
      sk(kk.subarray(Xk, Xk += kk[0] | kk[1] << 8), Fk.subarray(0, Tk), Ik), sk(kk.subarray(Xk, Xk += kk[2] | kk[3] << 8), Fk.subarray(Tk, ik), Ik), sk(kk.subarray(Xk, Xk += kk[4] | kk[5] << 8), Fk.subarray(ik, yk), Ik), sk(kk.subarray(Xk), Fk.subarray(yk), Ik)
    },
    zk = (kk, Fk, Tk) => {
      let ik = Fk.b;
      const ak = kk[ik],
        Lk = ak >> 1 & 3;
      Fk.l = 1 & ak;
      const tk = ak >> 3 | kk[ik + 1] << 5 | kk[ik + 2] << 13,
        Jk = (ik += 3) + tk;
      if (1 == Lk) {
        if (ik >= kk.length) return;
        return Fk.b = ik + 1, Tk ? (lk(Tk, kk[ik], Fk.y, Fk.y += tk), Tk) : lk(new Ik(tk), kk[ik])
      }
      if (!(Jk > kk.length)) {
        if (0 == Lk) return Fk.b = Jk, Tk ? (Tk.set(kk.subarray(ik, Jk), Fk.y), Fk.y += tk, Tk) : yk(kk, ik, Jk);
        if (2 == Lk) {
          const ak = kk[ik],
            Lk = 3 & ak,
            tk = ak >> 2 & 3;
          let zk = ak >> 4,
            Sk = 0,
            vk = 0;
          Lk < 2 ? 1 & tk ? zk |= kk[++ik] << 4 | (2 & tk && kk[++ik] << 12) : zk = ak >> 3 : (vk = tk, tk < 2 ? (zk |= (63 & kk[++ik]) << 4, Sk = kk[ik] >> 6 | kk[++ik] << 2) : 2 == tk ? (zk |= kk[++ik] << 4 | (3 & kk[++ik]) << 12, Sk = kk[ik] >> 2 | kk[++ik] << 6) : (zk |= kk[++ik] << 4 | (63 & kk[++ik]) << 12, Sk = kk[ik] >> 6 | kk[++ik] << 2 | kk[++ik] << 10)), ++ik;
          let Ek = Tk ? Tk.subarray(Fk.y, Fk.y + Fk.m) : new Ik(Fk.m),
            Ok = Ek.length - zk;
          if (Ok < 0 && qk(0), 0 == Lk) Ek.set(kk.subarray(ik, ik += zk), Ok);
          else if (1 == Lk) lk(Ek, kk[ik++], Ok);
          else {
            let Tk = Fk.h;
            if (2 == Lk) {
              const yk = ((kk, Fk) => {
                let Tk = 0,
                  ik = -1;
                const yk = new Ik(292),
                  ak = kk[Fk],
                  Lk = yk.subarray(0, 256),
                  tk = yk.subarray(256, 268),
                  ek = new Xk(yk.buffer, 268);
                if (ak < 128) {
                  const [Ik, Xk] = jk(kk, Fk + 1, 6), Tk = Ik << 3, yk = kk[Fk += ak];
                  yk || qk(0);
                  let lk = 0,
                    tk = 0,
                    ek = Xk.b,
                    wk = ek,
                    Hk = (++Fk << 3) - 8 + Zk(yk);
                  for (; ik > 254 && qk(0), Hk -= ek, !(Hk < Tk);) {
                    let Fk = Hk >> 3;
                    if (lk += (kk[Fk] | kk[Fk + 1] << 8) >> (7 & Hk) & (1 << ek) - 1, Lk[++ik] = Xk.s[lk], Hk -= wk, Hk < Tk) break;
                    Fk = Hk >> 3, tk += (kk[Fk] | kk[Fk + 1] << 8) >> (7 & Hk) & (1 << wk) - 1, Lk[++ik] = Xk.s[tk], ek = Xk.n[lk], lk = Xk.t[lk], wk = Xk.n[tk], tk = Xk.t[tk]
                  }++ik > 255 && qk(0)
                } else {
                  for (ik = ak - 127; Tk < ik; Tk += 2) {
                    const Ik = kk[++Fk];
                    Lk[Tk] = Ik >> 4, Lk[Tk + 1] = 15 & Ik
                  }++Fk
                }
                let wk = 0;
                for (Tk = 0; Tk < ik; ++Tk) {
                  const kk = Lk[Tk];
                  kk > 11 && qk(0), wk += kk && 1 << kk - 1
                }
                const Hk = Zk(wk) + 1,
                  Jk = 1 << Hk,
                  xk = Jk - wk;
                for (xk & xk - 1 && qk(0), Lk[ik++] = Zk(xk) + 1, Tk = 0; Tk < ik; ++Tk) {
                  const kk = Lk[Tk];
                  ++tk[Lk[Tk] = kk && Hk + 1 - kk]
                }
                const Pk = new Ik(Jk << 1),
                  Kk = Pk.subarray(0, Jk),
                  Qk = Pk.subarray(Jk);
                for (ek[Hk] = 0, Tk = Hk; Tk > 0; --Tk) {
                  const kk = ek[Tk];
                  lk(Qk, Tk, kk, ek[Tk - 1] = kk + tk[Tk] * (1 << Hk - Tk))
                }
                for (ek[0] != Jk && qk(0), Tk = 0; Tk < ik; ++Tk) {
                  const kk = Lk[Tk];
                  if (kk) {
                    const Fk = ek[kk];
                    lk(Kk, Tk, Fk, ek[kk] = Fk + (1 << Hk - kk))
                  }
                }
                return [Fk, {
                  n: Qk,
                  b: Hk,
                  s: Kk
                }]
              })(kk, ik);
              Sk += ik - (ik = yk[0]), Fk.h = Tk = yk[1]
            } else Tk || qk(0);
            (vk ? Vk : sk)(kk.subarray(ik, ik += Sk), Ek.subarray(Ok), Tk)
          }
          let nk = kk[ik++];
          if (nk) {
            255 == nk ? nk = 32512 + (kk[ik++] | kk[ik++] << 8) : nk > 127 && (nk = nk - 128 << 8 | kk[ik++]);
            const lk = kk[ik++];
            3 & lk && qk(0);
            const ak = [wk, Hk, ek];
            for (let Tk = 2; Tk > -1; --Tk) {
              const yk = lk >> 2 + (Tk << 1) & 3;
              if (1 == yk) {
                const Fk = new Ik([0, 0, kk[ik++]]);
                ak[Tk] = {
                  s: Fk.subarray(2, 3),
                  n: Fk.subarray(0, 1),
                  t: new Xk(Fk.buffer, 0, 1),
                  b: 0
                }
              } else 2 == yk ? [ik, ak[Tk]] = jk(kk, ik, 9 - (1 & Tk)) : 3 == yk && (Fk.t || qk(0), ak[Tk] = Fk.t[Tk])
            }
            const [Lk, tk, sk] = Fk.t = ak, Vk = kk[Jk - 1];
            Vk || qk(0);
            let zk = (Jk << 3) - 8 + Zk(Vk) - sk.b,
              Sk = zk >> 3,
              vk = 0,
              Gk = (kk[Sk] | kk[Sk + 1] << 8) >> (7 & zk) & (1 << sk.b) - 1;
            Sk = (zk -= tk.b) >> 3;
            let pk = (kk[Sk] | kk[Sk + 1] << 8) >> (7 & zk) & (1 << tk.b) - 1;
            Sk = (zk -= Lk.b) >> 3;
            let uk = (kk[Sk] | kk[Sk + 1] << 8) >> (7 & zk) & (1 << Lk.b) - 1;
            for (++nk; --nk;) {
              const Ik = sk.s[Gk],
                Xk = sk.n[Gk],
                Tk = Lk.s[uk],
                ik = Lk.n[uk],
                yk = tk.s[pk],
                lk = tk.n[pk];
              Sk = (zk -= yk) >> 3;
              const ak = 1 << yk;
              let Zk = ak + ((kk[Sk] | kk[Sk + 1] << 8 | kk[Sk + 2] << 16 | kk[Sk + 3] << 24) >>> (7 & zk) & ak - 1);
              Sk = (zk -= Kk[Tk]) >> 3;
              let jk = Qk[Tk] + ((kk[Sk] | kk[Sk + 1] << 8 | kk[Sk + 2] << 16) >> (7 & zk) & (1 << Kk[Tk]) - 1);
              Sk = (zk -= xk[Ik]) >> 3;
              const ek = Pk[Ik] + ((kk[Sk] | kk[Sk + 1] << 8 | kk[Sk + 2] << 16) >> (7 & zk) & (1 << xk[Ik]) - 1);
              if ((zk < 0 || Ok + ek > Ek.length || vk + ek + jk > Ek.length) && qk(0), Sk = (zk -= Xk) >> 3, Gk = sk.t[Gk] + ((kk[Sk] | kk[Sk + 1] << 8) >> (7 & zk) & (1 << Xk) - 1), Sk = (zk -= ik) >> 3, uk = Lk.t[uk] + ((kk[Sk] | kk[Sk + 1] << 8) >> (7 & zk) & (1 << ik) - 1), Sk = (zk -= lk) >> 3, pk = tk.t[pk] + ((kk[Sk] | kk[Sk + 1] << 8) >> (7 & zk) & (1 << lk) - 1), Zk > 3) Fk.o[2] = Fk.o[1], Fk.o[1] = Fk.o[0], Fk.o[0] = Zk -= 3;
              else {
                const kk = Zk - (0 != ek);
                kk ? (Zk = 3 == kk ? Fk.o[0] - 1 : Fk.o[kk], kk > 1 && (Fk.o[2] = Fk.o[1]), Fk.o[1] = Fk.o[0], Fk.o[0] = Zk) : Zk = Fk.o[0]
              }
              for (let kk = 0; kk < ek; ++kk) Ek[vk + kk] = Ek[Ok + kk];
              vk += ek, Ok += ek;
              let wk = vk - Zk;
              if (wk < 0) {
                let kk = -wk;
                const Ik = Fk.e + wk;
                Ik < 0 && qk(4), kk > jk && (kk = jk);
                for (let Xk = 0; Xk < kk; ++Xk) Ek[vk + Xk] = Fk.w[Ik + Xk];
                vk += kk, jk -= kk, wk = 0
              }
              for (let kk = 0; kk < jk; ++kk) Ek[vk + kk] = Ek[wk + kk];
              vk += jk
            }
            if (vk != Ok)
              for (; Ok < Ek.length;) Ek[vk++] = Ek[Ok++];
            else vk = Ek.length;
            Tk ? Fk.y += vk : Ek = yk(Ek, 0, vk)
          } else if (Tk) {
            if (Fk.y += zk, Ok)
              for (let kk = 0; kk < zk; ++kk) Ek[kk] = Ek[Ok + kk]
          } else Ok && (Ek = yk(Ek, Ok));
          return Fk.b = Jk, Ek
        }
        qk(2)
      }
    };
  class Sk {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    eq = 0;
    needed = 18;
    size;
    constructor(kk) {
      this.size = kk
    }
    push(kk) {
      if (this.done) return;
      if (this.parts.push(kk), this.eq += kk.length, this.eq < this.needed) return;
      const Fk = ((kk, Fk) => {
        if (1 == kk.length) return kk[0];
        const Xk = new Ik(Fk);
        for (let Ik = 0, Tk = 0; Ik < kk.length; ++Ik) {
          const Fk = kk[Ik];
          Xk.set(Fk, Tk), Tk += Fk.length
        }
        return Xk
      })(this.parts, this.eq);
      let Xk = this.st;
      if (!Xk) {
        const kk = tk(Fk, new Ik(0));
        "number" != typeof kk && kk.u === this.size || qk(0, `not a zstd frame of ${this.size} bytes`), Xk = this.st = tk(Fk, 1), Xk.e = 0, this.output = Xk.w
      }
      for (;;) {
        const kk = Fk.length - Xk.b;
        if (kk < 3) {
          this.needed = 3;
          break
        }
        const Ik = Fk[Xk.b],
          Tk = Ik >> 1 & 3;
        3 == Tk && qk(2);
        const ik = Ik >> 3 | Fk[Xk.b + 1] << 5 | Fk[Xk.b + 2] << 13;
        ik > Xk.m && qk(0), 0 == Tk && Xk.y + ik > Xk.u && qk(0);
        const yk = 1 == Tk ? 4 : 3 + ik;
        if (kk < yk) {
          this.needed = yk;
          break
        }
        if (zk(Fk, Xk, Xk.w) || qk(5), Xk.e = Xk.y, (Xk.y > Xk.u || Xk.l && Xk.y != Xk.u) && qk(0), Xk.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = Xk.y;
      const Tk = Fk.subarray(Xk.b);
      this.parts = Tk.length ? [Tk] : [], this.eq = Tk.length, Xk.b = 0
    }
  }
  class vk {
    post;
    href = "";
    Xe = null;
    given = 0;
    stopped = !1;
    constructor(kk) {
      this.post = kk
    }
    take(Fk) {
      if (!this.stopped) try {
        this.answer(Fk)
      } catch (Ik) {
        this.stop(Ik instanceof RangeError ? `out of memory decoding ${this.href}: ${kk(Ik)}` : `${this.href} did not decode: ${kk(Ik)}`)
      }
    }
    answer(kk) {
      if (null === this.Xe) {
        const [Fk, Ik] = kk;
        return this.href = Fk, void(this.Xe = new Sk(Ik))
      }
      if (null === kk) return void this.stop(`${this.href} ended before its module did`);
      const Fk = this.Xe;
      Fk.push(kk);
      const {
        output: Ik,
        decoded: Xk
      } = Fk;
      if (null !== Ik && Xk > this.given) {
        const kk = Ik.slice(this.given, Xk).buffer;
        this.given = Xk, this.post(kk, [kk])
      }
      Fk.done && this.stop(!0)
    }
    stop(kk) {
      this.stopped = !0, this.post(kk)
    }
  }
  const Ek = globalThis.WorkerGlobalScope;
  if (void 0 !== Ek && globalThis instanceof Ek) {
    const kk = globalThis,
      Fk = new vk((function(Fk) {
        let Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        kk.postMessage(Fk, Ik)
      }));
    kk.addEventListener("message", (kk => {
      let {
        data: Ik
      } = kk;
      Fk.take(Ik)
    }))
  }
})();