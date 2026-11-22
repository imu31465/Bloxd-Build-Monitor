(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var kk = __webpack_require__.u,
        ek = __webpack_require__.e,
        ik = {},
        Dk = {};
      __webpack_require__.u = function(ek) {
        return kk(ek) + (ik.hasOwnProperty(ek) ? "?" + ik[ek] : "")
      }, __webpack_require__.e = function(fk) {
        return ek(fk).catch((function(ek) {
          var Sk = Dk.hasOwnProperty(fk) ? Dk[fk] : 4;
          if (Sk < 1) {
            var bk = kk(fk);
            throw ek.message = "Loading chunk " + fk + " failed after 4 retries.\n(" + bk + ")", ek.request = bk, ik[fk] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete Dk[fk]
            }), 0), ek
          }
          return new Promise((function(kk) {
            var ek = 4 - Sk + 1;
            setTimeout((function() {
              var ek = "cache-bust=" + Date.now();
              ik[fk] = ek, Dk[fk] = Sk - 1, kk(__webpack_require__.e(fk))
            }), function(kk) {
              return 500 * Math.pow(2, kk)
            }(ek))
          }))
        }))
      }
    }
  })();

  function kk(kk) {
    return kk instanceof Error ? kk.message : String(kk)
  }
  const ek = ArrayBuffer,
    ik = Uint8Array,
    Dk = Uint16Array,
    fk = Int16Array,
    Sk = Int32Array,
    bk = (kk, ek, Dk) => {
      if (ik.prototype.slice) return ik.prototype.slice.call(kk, ek, Dk);
      (null == ek || ek < 0) && (ek = 0), (null == Dk || Dk > kk.length) && (Dk = kk.length);
      const fk = new ik(Dk - ek);
      return fk.set(kk.subarray(ek, Dk)), fk
    },
    rk = (kk, ek, Dk, fk) => {
      if (ik.prototype.fill) return ik.prototype.fill.call(kk, ek, Dk, fk);
      for ((null == Dk || Dk < 0) && (Dk = 0), (null == fk || fk > kk.length) && (fk = kk.length); Dk < fk; ++Dk) kk[Dk] = ek;
      return kk
    },
    Pk = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    mk = (kk, ek, ik) => {
      const Dk = new Error(ek || Pk[kk]);
      if (Dk.code = kk, Error.captureStackTrace && Error.captureStackTrace(Dk, mk), !ik) throw Dk;
      return Dk
    },
    Mk = (kk, ek, ik) => {
      let Dk = 0,
        fk = 0;
      for (; Dk < ik; ++Dk) fk |= kk[ek++] << (Dk << 3);
      return fk
    },
    Kk = (kk, ek) => {
      const Dk = kk[0] | kk[1] << 8 | kk[2] << 16;
      if (3126568 == Dk && 253 == kk[3]) {
        const Dk = kk[4],
          fk = Dk >> 5 & 1,
          bk = Dk >> 2 & 1,
          rk = 3 & Dk,
          Pk = Dk >> 6;
        8 & Dk && mk(0);
        let Kk = 6 - fk;
        const xk = 3 == rk ? 4 : rk,
          nk = Mk(kk, Kk, xk);
        Kk += xk;
        const Uk = Pk ? 1 << Pk : fk,
          Hk = Mk(kk, Kk, Uk) + (1 == Pk && 256);
        let wk = Hk;
        if (!fk) {
          const ek = 1 << 10 + (kk[5] >> 3);
          wk = ek + (ek >> 3) * (7 & kk[5])
        }
        wk > 2145386496 && mk(1);
        const lk = new ik((1 == ek ? Hk || wk : ek ? 0 : wk) + 12);
        return lk[0] = 1, lk[4] = 4, lk[8] = 8, {
          b: Kk + Uk,
          y: 0,
          l: 0,
          d: nk,
          w: ek && 1 != ek ? ek : lk.subarray(12),
          e: wk,
          o: new Sk(lk.buffer, 0, 3),
          u: Hk,
          c: bk,
          m: Math.min(131072, wk)
        }
      }
      if (25481893 == (Dk >> 4 | kk[3] << 20)) return 8 + (((fk = kk)[bk = 4] | fk[bk + 1] << 8 | fk[bk + 2] << 16 | fk[bk + 3] << 24) >>> 0);
      var fk, bk;
      mk(0)
    },
    xk = kk => {
      let ek = 0;
      for (; 1 << ek <= kk; ++ek);
      return ek - 1
    },
    nk = (kk, Sk, bk) => {
      let rk = 4 + (Sk << 3);
      const Pk = 5 + (15 & kk[Sk]);
      Pk > bk && mk(3);
      const Mk = 1 << Pk;
      let Kk = Mk,
        nk = -1,
        Uk = -1,
        Hk = -1,
        wk = Mk;
      const lk = new ek(512 + (Mk << 2)),
        pk = new fk(lk, 0, 256),
        yk = new Dk(lk, 0, 256),
        Yk = new Dk(lk, 512, Mk),
        Lk = 512 + (Mk << 1),
        Ck = new ik(lk, Lk, Mk),
        Ak = new ik(lk, Lk + Mk);
      for (; nk < 255 && Kk > 0;) {
        const ek = xk(Kk + 1),
          ik = rk >> 3,
          Dk = (1 << ek + 1) - 1;
        let fk = (kk[ik] | kk[ik + 1] << 8 | kk[ik + 2] << 16) >> (7 & rk) & Dk;
        const Sk = (1 << ek) - 1,
          bk = Dk - Kk - 1,
          Pk = fk & Sk;
        if (Pk < bk ? (rk += ek, fk = Pk) : (rk += ek + 1, fk > Sk && (fk -= bk)), pk[++nk] = --fk, -1 == fk ? (Kk += fk, Ck[--wk] = nk) : Kk -= fk, !fk)
          do {
            const ek = rk >> 3;
            Uk = (kk[ek] | kk[ek + 1] << 8) >> (7 & rk) & 3, rk += 2, nk += Uk
          } while (3 == Uk)
      }(nk > 255 || Kk) && mk(0);
      let jk = 0;
      const sk = (Mk >> 1) + (Mk >> 3) + 3,
        dk = Mk - 1;
      for (let ek = 0; ek <= nk; ++ek) {
        const kk = pk[ek];
        if (kk < 1) yk[ek] = -kk;
        else
          for (Hk = 0; Hk < kk; ++Hk) {
            Ck[jk] = ek;
            do {
              jk = jk + sk & dk
            } while (jk >= wk)
          }
      }
      for (jk && mk(0), Hk = 0; Hk < Mk; ++Hk) {
        const kk = yk[Ck[Hk]]++,
          ek = Ak[Hk] = Pk - xk(kk);
        Yk[Hk] = (kk << ek) - Mk
      }
      return [rk + 7 >> 3, {
        b: Pk,
        s: Ck,
        n: Ak,
        t: Yk
      }]
    },
    Uk = nk(new ik([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    Hk = nk(new ik([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    wk = nk(new ik([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    lk = (kk, ek) => {
      const ik = kk.length,
        Dk = new Sk(ik);
      for (let fk = 0; fk < ik; ++fk) Dk[fk] = ek, ek += 1 << kk[fk];
      return Dk
    },
    pk = new ik(new Sk([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    yk = lk(pk, 0),
    Yk = new ik(new Sk([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    Lk = lk(Yk, 3),
    Ck = (kk, ek, ik) => {
      const Dk = kk.length,
        fk = ek.length,
        Sk = kk[Dk - 1],
        bk = (1 << ik.b) - 1,
        rk = -ik.b;
      Sk || mk(0);
      let Pk = 0,
        Mk = ik.b,
        Kk = (Dk << 3) - 8 + xk(Sk) - Mk,
        nk = -1;
      for (; Kk > rk && nk < fk;) {
        const Dk = Kk >> 3;
        Pk = (Pk << Mk | (kk[Dk] | kk[Dk + 1] << 8 | kk[Dk + 2] << 16) >> (7 & Kk)) & bk, ek[++nk] = ik.s[Pk], Kk -= Mk = ik.n[Pk]
      }
      Kk == rk && nk + 1 == fk || mk(0)
    },
    Ak = (kk, ek, ik) => {
      let Dk = 6;
      const fk = ek.length + 3 >> 2,
        Sk = fk << 1,
        bk = fk + Sk;
      Ck(kk.subarray(Dk, Dk += kk[0] | kk[1] << 8), ek.subarray(0, fk), ik), Ck(kk.subarray(Dk, Dk += kk[2] | kk[3] << 8), ek.subarray(fk, Sk), ik), Ck(kk.subarray(Dk, Dk += kk[4] | kk[5] << 8), ek.subarray(Sk, bk), ik), Ck(kk.subarray(Dk), ek.subarray(bk), ik)
    },
    jk = (kk, ek, fk) => {
      let Sk = ek.b;
      const Pk = kk[Sk],
        Mk = Pk >> 1 & 3;
      ek.l = 1 & Pk;
      const Kk = Pk >> 3 | kk[Sk + 1] << 5 | kk[Sk + 2] << 13,
        lk = (Sk += 3) + Kk;
      if (1 == Mk) {
        if (Sk >= kk.length) return;
        return ek.b = Sk + 1, fk ? (rk(fk, kk[Sk], ek.y, ek.y += Kk), fk) : rk(new ik(Kk), kk[Sk])
      }
      if (!(lk > kk.length)) {
        if (0 == Mk) return ek.b = lk, fk ? (fk.set(kk.subarray(Sk, lk), ek.y), ek.y += Kk, fk) : bk(kk, Sk, lk);
        if (2 == Mk) {
          const Pk = kk[Sk],
            Mk = 3 & Pk,
            Kk = Pk >> 2 & 3;
          let jk = Pk >> 4,
            sk = 0,
            dk = 0;
          Mk < 2 ? 1 & Kk ? jk |= kk[++Sk] << 4 | (2 & Kk && kk[++Sk] << 12) : jk = Pk >> 3 : (dk = Kk, Kk < 2 ? (jk |= (63 & kk[++Sk]) << 4, sk = kk[Sk] >> 6 | kk[++Sk] << 2) : 2 == Kk ? (jk |= kk[++Sk] << 4 | (3 & kk[++Sk]) << 12, sk = kk[Sk] >> 2 | kk[++Sk] << 6) : (jk |= kk[++Sk] << 4 | (63 & kk[++Sk]) << 12, sk = kk[Sk] >> 6 | kk[++Sk] << 2 | kk[++Sk] << 10)), ++Sk;
          let Vk = fk ? fk.subarray(ek.y, ek.y + ek.m) : new ik(ek.m),
            Fk = Vk.length - jk;
          if (Fk < 0 && mk(0), 0 == Mk) Vk.set(kk.subarray(Sk, Sk += jk), Fk);
          else if (1 == Mk) rk(Vk, kk[Sk++], Fk);
          else {
            let fk = ek.h;
            if (2 == Mk) {
              const bk = ((kk, ek) => {
                let fk = 0,
                  Sk = -1;
                const bk = new ik(292),
                  Pk = kk[ek],
                  Mk = bk.subarray(0, 256),
                  Kk = bk.subarray(256, 268),
                  Uk = new Dk(bk.buffer, 268);
                if (Pk < 128) {
                  const [ik, Dk] = nk(kk, ek + 1, 6), fk = ik << 3, bk = kk[ek += Pk];
                  bk || mk(0);
                  let rk = 0,
                    Kk = 0,
                    Uk = Dk.b,
                    Hk = Uk,
                    wk = (++ek << 3) - 8 + xk(bk);
                  for (; Sk > 254 && mk(0), wk -= Uk, !(wk < fk);) {
                    let ek = wk >> 3;
                    if (rk += (kk[ek] | kk[ek + 1] << 8) >> (7 & wk) & (1 << Uk) - 1, Mk[++Sk] = Dk.s[rk], wk -= Hk, wk < fk) break;
                    ek = wk >> 3, Kk += (kk[ek] | kk[ek + 1] << 8) >> (7 & wk) & (1 << Hk) - 1, Mk[++Sk] = Dk.s[Kk], Uk = Dk.n[rk], rk = Dk.t[rk], Hk = Dk.n[Kk], Kk = Dk.t[Kk]
                  }++Sk > 255 && mk(0)
                } else {
                  for (Sk = Pk - 127; fk < Sk; fk += 2) {
                    const ik = kk[++ek];
                    Mk[fk] = ik >> 4, Mk[fk + 1] = 15 & ik
                  }++ek
                }
                let Hk = 0;
                for (fk = 0; fk < Sk; ++fk) {
                  const kk = Mk[fk];
                  kk > 11 && mk(0), Hk += kk && 1 << kk - 1
                }
                const wk = xk(Hk) + 1,
                  lk = 1 << wk,
                  pk = lk - Hk;
                for (pk & pk - 1 && mk(0), Mk[Sk++] = xk(pk) + 1, fk = 0; fk < Sk; ++fk) {
                  const kk = Mk[fk];
                  ++Kk[Mk[fk] = kk && wk + 1 - kk]
                }
                const yk = new ik(lk << 1),
                  Yk = yk.subarray(0, lk),
                  Lk = yk.subarray(lk);
                for (Uk[wk] = 0, fk = wk; fk > 0; --fk) {
                  const kk = Uk[fk];
                  rk(Lk, fk, kk, Uk[fk - 1] = kk + Kk[fk] * (1 << wk - fk))
                }
                for (Uk[0] != lk && mk(0), fk = 0; fk < Sk; ++fk) {
                  const kk = Mk[fk];
                  if (kk) {
                    const ek = Uk[kk];
                    rk(Yk, fk, ek, Uk[kk] = ek + (1 << wk - kk))
                  }
                }
                return [ek, {
                  n: Lk,
                  b: wk,
                  s: Yk
                }]
              })(kk, Sk);
              sk += Sk - (Sk = bk[0]), ek.h = fk = bk[1]
            } else fk || mk(0);
            (dk ? Ak : Ck)(kk.subarray(Sk, Sk += sk), Vk.subarray(Fk), fk)
          }
          let uk = kk[Sk++];
          if (uk) {
            255 == uk ? uk = 32512 + (kk[Sk++] | kk[Sk++] << 8) : uk > 127 && (uk = uk - 128 << 8 | kk[Sk++]);
            const rk = kk[Sk++];
            3 & rk && mk(0);
            const Pk = [Hk, wk, Uk];
            for (let fk = 2; fk > -1; --fk) {
              const bk = rk >> 2 + (fk << 1) & 3;
              if (1 == bk) {
                const ek = new ik([0, 0, kk[Sk++]]);
                Pk[fk] = {
                  s: ek.subarray(2, 3),
                  n: ek.subarray(0, 1),
                  t: new Dk(ek.buffer, 0, 1),
                  b: 0
                }
              } else 2 == bk ? [Sk, Pk[fk]] = nk(kk, Sk, 9 - (1 & fk)) : 3 == bk && (ek.t || mk(0), Pk[fk] = ek.t[fk])
            }
            const [Mk, Kk, Ck] = ek.t = Pk, Ak = kk[lk - 1];
            Ak || mk(0);
            let jk = (lk << 3) - 8 + xk(Ak) - Ck.b,
              sk = jk >> 3,
              dk = 0,
              qk = (kk[sk] | kk[sk + 1] << 8) >> (7 & jk) & (1 << Ck.b) - 1;
            sk = (jk -= Kk.b) >> 3;
            let Ik = (kk[sk] | kk[sk + 1] << 8) >> (7 & jk) & (1 << Kk.b) - 1;
            sk = (jk -= Mk.b) >> 3;
            let zk = (kk[sk] | kk[sk + 1] << 8) >> (7 & jk) & (1 << Mk.b) - 1;
            for (++uk; --uk;) {
              const ik = Ck.s[qk],
                Dk = Ck.n[qk],
                fk = Mk.s[zk],
                Sk = Mk.n[zk],
                bk = Kk.s[Ik],
                rk = Kk.n[Ik];
              sk = (jk -= bk) >> 3;
              const Pk = 1 << bk;
              let xk = Pk + ((kk[sk] | kk[sk + 1] << 8 | kk[sk + 2] << 16 | kk[sk + 3] << 24) >>> (7 & jk) & Pk - 1);
              sk = (jk -= Yk[fk]) >> 3;
              let nk = Lk[fk] + ((kk[sk] | kk[sk + 1] << 8 | kk[sk + 2] << 16) >> (7 & jk) & (1 << Yk[fk]) - 1);
              sk = (jk -= pk[ik]) >> 3;
              const Uk = yk[ik] + ((kk[sk] | kk[sk + 1] << 8 | kk[sk + 2] << 16) >> (7 & jk) & (1 << pk[ik]) - 1);
              if ((jk < 0 || Fk + Uk > Vk.length || dk + Uk + nk > Vk.length) && mk(0), sk = (jk -= Dk) >> 3, qk = Ck.t[qk] + ((kk[sk] | kk[sk + 1] << 8) >> (7 & jk) & (1 << Dk) - 1), sk = (jk -= Sk) >> 3, zk = Mk.t[zk] + ((kk[sk] | kk[sk + 1] << 8) >> (7 & jk) & (1 << Sk) - 1), sk = (jk -= rk) >> 3, Ik = Kk.t[Ik] + ((kk[sk] | kk[sk + 1] << 8) >> (7 & jk) & (1 << rk) - 1), xk > 3) ek.o[2] = ek.o[1], ek.o[1] = ek.o[0], ek.o[0] = xk -= 3;
              else {
                const kk = xk - (0 != Uk);
                kk ? (xk = 3 == kk ? ek.o[0] - 1 : ek.o[kk], kk > 1 && (ek.o[2] = ek.o[1]), ek.o[1] = ek.o[0], ek.o[0] = xk) : xk = ek.o[0]
              }
              for (let kk = 0; kk < Uk; ++kk) Vk[dk + kk] = Vk[Fk + kk];
              dk += Uk, Fk += Uk;
              let Hk = dk - xk;
              if (Hk < 0) {
                let kk = -Hk;
                const ik = ek.e + Hk;
                ik < 0 && mk(4), kk > nk && (kk = nk);
                for (let Dk = 0; Dk < kk; ++Dk) Vk[dk + Dk] = ek.w[ik + Dk];
                dk += kk, nk -= kk, Hk = 0
              }
              for (let kk = 0; kk < nk; ++kk) Vk[dk + kk] = Vk[Hk + kk];
              dk += nk
            }
            if (dk != Fk)
              for (; Fk < Vk.length;) Vk[dk++] = Vk[Fk++];
            else dk = Vk.length;
            fk ? ek.y += dk : Vk = bk(Vk, 0, dk)
          } else if (fk) {
            if (ek.y += jk, Fk)
              for (let kk = 0; kk < jk; ++kk) Vk[kk] = Vk[Fk + kk]
          } else Fk && (Vk = bk(Vk, Fk));
          return ek.b = lk, Vk
        }
        mk(2)
      }
    };
  class sk {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    XM = 0;
    needed = 18;
    size;
    constructor(kk) {
      this.size = kk
    }
    push(kk) {
      if (this.done) return;
      if (this.parts.push(kk), this.XM += kk.length, this.XM < this.needed) return;
      const ek = ((kk, ek) => {
        if (1 == kk.length) return kk[0];
        const Dk = new ik(ek);
        for (let ik = 0, fk = 0; ik < kk.length; ++ik) {
          const ek = kk[ik];
          Dk.set(ek, fk), fk += ek.length
        }
        return Dk
      })(this.parts, this.XM);
      let Dk = this.st;
      if (!Dk) {
        const kk = Kk(ek, new ik(0));
        "number" != typeof kk && kk.u === this.size || mk(0, `not a zstd frame of ${this.size} bytes`), Dk = this.st = Kk(ek, 1), Dk.e = 0, this.output = Dk.w
      }
      for (;;) {
        const kk = ek.length - Dk.b;
        if (kk < 3) {
          this.needed = 3;
          break
        }
        const ik = ek[Dk.b],
          fk = ik >> 1 & 3;
        3 == fk && mk(2);
        const Sk = ik >> 3 | ek[Dk.b + 1] << 5 | ek[Dk.b + 2] << 13;
        Sk > Dk.m && mk(0), 0 == fk && Dk.y + Sk > Dk.u && mk(0);
        const bk = 1 == fk ? 4 : 3 + Sk;
        if (kk < bk) {
          this.needed = bk;
          break
        }
        if (jk(ek, Dk, Dk.w) || mk(5), Dk.e = Dk.y, (Dk.y > Dk.u || Dk.l && Dk.y != Dk.u) && mk(0), Dk.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = Dk.y;
      const fk = ek.subarray(Dk.b);
      this.parts = fk.length ? [fk] : [], this.XM = fk.length, Dk.b = 0
    }
  }
  class dk {
    post;
    href = "";
    dU = null;
    given = 0;
    stopped = !1;
    constructor(kk) {
      this.post = kk
    }
    take(ek) {
      if (!this.stopped) try {
        this.answer(ek)
      } catch (ik) {
        this.stop(ik instanceof RangeError ? `out of memory decoding ${this.href}: ${kk(ik)}` : `${this.href} did not decode: ${kk(ik)}`)
      }
    }
    answer(kk) {
      if (null === this.dU) {
        const [ek, ik] = kk;
        return this.href = ek, void(this.dU = new sk(ik))
      }
      if (null === kk) return void this.stop(`${this.href} ended before its module did`);
      const ek = this.dU;
      ek.push(kk);
      const {
        output: ik,
        decoded: Dk
      } = ek;
      if (null !== ik && Dk > this.given) {
        const kk = ik.slice(this.given, Dk).buffer;
        this.given = Dk, this.post(kk, [kk])
      }
      ek.done && this.stop(!0)
    }
    stop(kk) {
      this.stopped = !0, this.post(kk)
    }
  }
  const Vk = globalThis.WorkerGlobalScope;
  if (void 0 !== Vk && globalThis instanceof Vk) {
    const kk = globalThis,
      ek = new dk((function(ek) {
        let ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        kk.postMessage(ek, ik)
      }));
    kk.addEventListener("message", (kk => {
      let {
        data: ik
      } = kk;
      ek.take(ik)
    }))
  }
})();