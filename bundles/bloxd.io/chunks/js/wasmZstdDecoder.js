(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var qq = __webpack_require__.u,
        Eq = __webpack_require__.e,
        gq = {},
        Yq = {};
      __webpack_require__.u = function(Eq) {
        return qq(Eq) + (gq.hasOwnProperty(Eq) ? "?" + gq[Eq] : "")
      }, __webpack_require__.e = function(lq) {
        return Eq(lq).catch((function(Eq) {
          var Oq = Yq.hasOwnProperty(lq) ? Yq[lq] : 4;
          if (Oq < 1) {
            var mq = qq(lq);
            throw Eq.message = "Loading chunk " + lq + " failed after 4 retries.\n(" + mq + ")", Eq.request = mq, gq[lq] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete Yq[lq]
            }), 0), Eq
          }
          return new Promise((function(qq) {
            var Eq = 4 - Oq + 1;
            setTimeout((function() {
              var Eq = "cache-bust=" + Date.now();
              gq[lq] = Eq, Yq[lq] = Oq - 1, qq(__webpack_require__.e(lq))
            }), function(qq) {
              return 500 * Math.pow(2, qq)
            }(Eq))
          }))
        }))
      }
    }
  })();

  function qq(qq) {
    return qq instanceof Error ? qq.message : String(qq)
  }
  const Eq = ArrayBuffer,
    gq = Uint8Array,
    Yq = Uint16Array,
    lq = Int16Array,
    Oq = Int32Array,
    mq = (qq, Eq, Yq) => {
      if (gq.prototype.slice) return gq.prototype.slice.call(qq, Eq, Yq);
      (null == Eq || Eq < 0) && (Eq = 0), (null == Yq || Yq > qq.length) && (Yq = qq.length);
      const lq = new gq(Yq - Eq);
      return lq.set(qq.subarray(Eq, Yq)), lq
    },
    xq = (qq, Eq, Yq, lq) => {
      if (gq.prototype.fill) return gq.prototype.fill.call(qq, Eq, Yq, lq);
      for ((null == Yq || Yq < 0) && (Yq = 0), (null == lq || lq > qq.length) && (lq = qq.length); Yq < lq; ++Yq) qq[Yq] = Eq;
      return qq
    },
    Aq = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    cq = (qq, Eq, gq) => {
      const Yq = new Error(Eq || Aq[qq]);
      if (Yq.code = qq, Error.captureStackTrace && Error.captureStackTrace(Yq, cq), !gq) throw Yq;
      return Yq
    },
    uq = (qq, Eq, gq) => {
      let Yq = 0,
        lq = 0;
      for (; Yq < gq; ++Yq) lq |= qq[Eq++] << (Yq << 3);
      return lq
    },
    Bq = (qq, Eq) => {
      const Yq = qq[0] | qq[1] << 8 | qq[2] << 16;
      if (3126568 == Yq && 253 == qq[3]) {
        const Yq = qq[4],
          lq = Yq >> 5 & 1,
          mq = Yq >> 2 & 1,
          xq = 3 & Yq,
          Aq = Yq >> 6;
        8 & Yq && cq(0);
        let Bq = 6 - lq;
        const Wq = 3 == xq ? 4 : xq,
          Nq = uq(qq, Bq, Wq);
        Bq += Wq;
        const aq = Aq ? 1 << Aq : lq,
          Vq = uq(qq, Bq, aq) + (1 == Aq && 256);
        let dq = Vq;
        if (!lq) {
          const Eq = 1 << 10 + (qq[5] >> 3);
          dq = Eq + (Eq >> 3) * (7 & qq[5])
        }
        dq > 2145386496 && cq(1);
        const jq = new gq((1 == Eq ? Vq || dq : Eq ? 0 : dq) + 12);
        return jq[0] = 1, jq[4] = 4, jq[8] = 8, {
          b: Bq + aq,
          y: 0,
          l: 0,
          d: Nq,
          w: Eq && 1 != Eq ? Eq : jq.subarray(12),
          e: dq,
          o: new Oq(jq.buffer, 0, 3),
          u: Vq,
          c: mq,
          m: Math.min(131072, dq)
        }
      }
      if (25481893 == (Yq >> 4 | qq[3] << 20)) return 8 + (((lq = qq)[mq = 4] | lq[mq + 1] << 8 | lq[mq + 2] << 16 | lq[mq + 3] << 24) >>> 0);
      var lq, mq;
      cq(0)
    },
    Wq = qq => {
      let Eq = 0;
      for (; 1 << Eq <= qq; ++Eq);
      return Eq - 1
    },
    Nq = (qq, Oq, mq) => {
      let xq = 4 + (Oq << 3);
      const Aq = 5 + (15 & qq[Oq]);
      Aq > mq && cq(3);
      const uq = 1 << Aq;
      let Bq = uq,
        Nq = -1,
        aq = -1,
        Vq = -1,
        dq = uq;
      const jq = new Eq(512 + (uq << 2)),
        Hq = new lq(jq, 0, 256),
        oq = new Yq(jq, 0, 256),
        Pq = new Yq(jq, 512, uq),
        Qq = 512 + (uq << 1),
        yq = new gq(jq, Qq, uq),
        tq = new gq(jq, Qq + uq);
      for (; Nq < 255 && Bq > 0;) {
        const Eq = Wq(Bq + 1),
          gq = xq >> 3,
          Yq = (1 << Eq + 1) - 1;
        let lq = (qq[gq] | qq[gq + 1] << 8 | qq[gq + 2] << 16) >> (7 & xq) & Yq;
        const Oq = (1 << Eq) - 1,
          mq = Yq - Bq - 1,
          Aq = lq & Oq;
        if (Aq < mq ? (xq += Eq, lq = Aq) : (xq += Eq + 1, lq > Oq && (lq -= mq)), Hq[++Nq] = --lq, -1 == lq ? (Bq += lq, yq[--dq] = Nq) : Bq -= lq, !lq)
          do {
            const Eq = xq >> 3;
            aq = (qq[Eq] | qq[Eq + 1] << 8) >> (7 & xq) & 3, xq += 2, Nq += aq
          } while (3 == aq)
      }(Nq > 255 || Bq) && cq(0);
      let rq = 0;
      const vq = (uq >> 1) + (uq >> 3) + 3,
        hq = uq - 1;
      for (let Eq = 0; Eq <= Nq; ++Eq) {
        const qq = Hq[Eq];
        if (qq < 1) oq[Eq] = -qq;
        else
          for (Vq = 0; Vq < qq; ++Vq) {
            yq[rq] = Eq;
            do {
              rq = rq + vq & hq
            } while (rq >= dq)
          }
      }
      for (rq && cq(0), Vq = 0; Vq < uq; ++Vq) {
        const qq = oq[yq[Vq]]++,
          Eq = tq[Vq] = Aq - Wq(qq);
        Pq[Vq] = (qq << Eq) - uq
      }
      return [xq + 7 >> 3, {
        b: Aq,
        s: yq,
        n: tq,
        t: Pq
      }]
    },
    aq = Nq(new gq([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    Vq = Nq(new gq([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    dq = Nq(new gq([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    jq = (qq, Eq) => {
      const gq = qq.length,
        Yq = new Oq(gq);
      for (let lq = 0; lq < gq; ++lq) Yq[lq] = Eq, Eq += 1 << qq[lq];
      return Yq
    },
    Hq = new gq(new Oq([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    oq = jq(Hq, 0),
    Pq = new gq(new Oq([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    Qq = jq(Pq, 3),
    yq = (qq, Eq, gq) => {
      const Yq = qq.length,
        lq = Eq.length,
        Oq = qq[Yq - 1],
        mq = (1 << gq.b) - 1,
        xq = -gq.b;
      Oq || cq(0);
      let Aq = 0,
        uq = gq.b,
        Bq = (Yq << 3) - 8 + Wq(Oq) - uq,
        Nq = -1;
      for (; Bq > xq && Nq < lq;) {
        const Yq = Bq >> 3;
        Aq = (Aq << uq | (qq[Yq] | qq[Yq + 1] << 8 | qq[Yq + 2] << 16) >> (7 & Bq)) & mq, Eq[++Nq] = gq.s[Aq], Bq -= uq = gq.n[Aq]
      }
      Bq == xq && Nq + 1 == lq || cq(0)
    },
    tq = (qq, Eq, gq) => {
      let Yq = 6;
      const lq = Eq.length + 3 >> 2,
        Oq = lq << 1,
        mq = lq + Oq;
      yq(qq.subarray(Yq, Yq += qq[0] | qq[1] << 8), Eq.subarray(0, lq), gq), yq(qq.subarray(Yq, Yq += qq[2] | qq[3] << 8), Eq.subarray(lq, Oq), gq), yq(qq.subarray(Yq, Yq += qq[4] | qq[5] << 8), Eq.subarray(Oq, mq), gq), yq(qq.subarray(Yq), Eq.subarray(mq), gq)
    },
    rq = (qq, Eq, lq) => {
      let Oq = Eq.b;
      const Aq = qq[Oq],
        uq = Aq >> 1 & 3;
      Eq.l = 1 & Aq;
      const Bq = Aq >> 3 | qq[Oq + 1] << 5 | qq[Oq + 2] << 13,
        jq = (Oq += 3) + Bq;
      if (1 == uq) {
        if (Oq >= qq.length) return;
        return Eq.b = Oq + 1, lq ? (xq(lq, qq[Oq], Eq.y, Eq.y += Bq), lq) : xq(new gq(Bq), qq[Oq])
      }
      if (!(jq > qq.length)) {
        if (0 == uq) return Eq.b = jq, lq ? (lq.set(qq.subarray(Oq, jq), Eq.y), Eq.y += Bq, lq) : mq(qq, Oq, jq);
        if (2 == uq) {
          const Aq = qq[Oq],
            uq = 3 & Aq,
            Bq = Aq >> 2 & 3;
          let rq = Aq >> 4,
            vq = 0,
            hq = 0;
          uq < 2 ? 1 & Bq ? rq |= qq[++Oq] << 4 | (2 & Bq && qq[++Oq] << 12) : rq = Aq >> 3 : (hq = Bq, Bq < 2 ? (rq |= (63 & qq[++Oq]) << 4, vq = qq[Oq] >> 6 | qq[++Oq] << 2) : 2 == Bq ? (rq |= qq[++Oq] << 4 | (3 & qq[++Oq]) << 12, vq = qq[Oq] >> 2 | qq[++Oq] << 6) : (rq |= qq[++Oq] << 4 | (63 & qq[++Oq]) << 12, vq = qq[Oq] >> 6 | qq[++Oq] << 2 | qq[++Oq] << 10)), ++Oq;
          let nq = lq ? lq.subarray(Eq.y, Eq.y + Eq.m) : new gq(Eq.m),
            bq = nq.length - rq;
          if (bq < 0 && cq(0), 0 == uq) nq.set(qq.subarray(Oq, Oq += rq), bq);
          else if (1 == uq) xq(nq, qq[Oq++], bq);
          else {
            let lq = Eq.h;
            if (2 == uq) {
              const mq = ((qq, Eq) => {
                let lq = 0,
                  Oq = -1;
                const mq = new gq(292),
                  Aq = qq[Eq],
                  uq = mq.subarray(0, 256),
                  Bq = mq.subarray(256, 268),
                  aq = new Yq(mq.buffer, 268);
                if (Aq < 128) {
                  const [gq, Yq] = Nq(qq, Eq + 1, 6), lq = gq << 3, mq = qq[Eq += Aq];
                  mq || cq(0);
                  let xq = 0,
                    Bq = 0,
                    aq = Yq.b,
                    Vq = aq,
                    dq = (++Eq << 3) - 8 + Wq(mq);
                  for (; Oq > 254 && cq(0), dq -= aq, !(dq < lq);) {
                    let Eq = dq >> 3;
                    if (xq += (qq[Eq] | qq[Eq + 1] << 8) >> (7 & dq) & (1 << aq) - 1, uq[++Oq] = Yq.s[xq], dq -= Vq, dq < lq) break;
                    Eq = dq >> 3, Bq += (qq[Eq] | qq[Eq + 1] << 8) >> (7 & dq) & (1 << Vq) - 1, uq[++Oq] = Yq.s[Bq], aq = Yq.n[xq], xq = Yq.t[xq], Vq = Yq.n[Bq], Bq = Yq.t[Bq]
                  }++Oq > 255 && cq(0)
                } else {
                  for (Oq = Aq - 127; lq < Oq; lq += 2) {
                    const gq = qq[++Eq];
                    uq[lq] = gq >> 4, uq[lq + 1] = 15 & gq
                  }++Eq
                }
                let Vq = 0;
                for (lq = 0; lq < Oq; ++lq) {
                  const qq = uq[lq];
                  qq > 11 && cq(0), Vq += qq && 1 << qq - 1
                }
                const dq = Wq(Vq) + 1,
                  jq = 1 << dq,
                  Hq = jq - Vq;
                for (Hq & Hq - 1 && cq(0), uq[Oq++] = Wq(Hq) + 1, lq = 0; lq < Oq; ++lq) {
                  const qq = uq[lq];
                  ++Bq[uq[lq] = qq && dq + 1 - qq]
                }
                const oq = new gq(jq << 1),
                  Pq = oq.subarray(0, jq),
                  Qq = oq.subarray(jq);
                for (aq[dq] = 0, lq = dq; lq > 0; --lq) {
                  const qq = aq[lq];
                  xq(Qq, lq, qq, aq[lq - 1] = qq + Bq[lq] * (1 << dq - lq))
                }
                for (aq[0] != jq && cq(0), lq = 0; lq < Oq; ++lq) {
                  const qq = uq[lq];
                  if (qq) {
                    const Eq = aq[qq];
                    xq(Pq, lq, Eq, aq[qq] = Eq + (1 << dq - qq))
                  }
                }
                return [Eq, {
                  n: Qq,
                  b: dq,
                  s: Pq
                }]
              })(qq, Oq);
              vq += Oq - (Oq = mq[0]), Eq.h = lq = mq[1]
            } else lq || cq(0);
            (hq ? tq : yq)(qq.subarray(Oq, Oq += vq), nq.subarray(bq), lq)
          }
          let iq = qq[Oq++];
          if (iq) {
            255 == iq ? iq = 32512 + (qq[Oq++] | qq[Oq++] << 8) : iq > 127 && (iq = iq - 128 << 8 | qq[Oq++]);
            const xq = qq[Oq++];
            3 & xq && cq(0);
            const Aq = [Vq, dq, aq];
            for (let lq = 2; lq > -1; --lq) {
              const mq = xq >> 2 + (lq << 1) & 3;
              if (1 == mq) {
                const Eq = new gq([0, 0, qq[Oq++]]);
                Aq[lq] = {
                  s: Eq.subarray(2, 3),
                  n: Eq.subarray(0, 1),
                  t: new Yq(Eq.buffer, 0, 1),
                  b: 0
                }
              } else 2 == mq ? [Oq, Aq[lq]] = Nq(qq, Oq, 9 - (1 & lq)) : 3 == mq && (Eq.t || cq(0), Aq[lq] = Eq.t[lq])
            }
            const [uq, Bq, yq] = Eq.t = Aq, tq = qq[jq - 1];
            tq || cq(0);
            let rq = (jq << 3) - 8 + Wq(tq) - yq.b,
              vq = rq >> 3,
              hq = 0,
              Zq = (qq[vq] | qq[vq + 1] << 8) >> (7 & rq) & (1 << yq.b) - 1;
            vq = (rq -= Bq.b) >> 3;
            let fq = (qq[vq] | qq[vq + 1] << 8) >> (7 & rq) & (1 << Bq.b) - 1;
            vq = (rq -= uq.b) >> 3;
            let Mq = (qq[vq] | qq[vq + 1] << 8) >> (7 & rq) & (1 << uq.b) - 1;
            for (++iq; --iq;) {
              const gq = yq.s[Zq],
                Yq = yq.n[Zq],
                lq = uq.s[Mq],
                Oq = uq.n[Mq],
                mq = Bq.s[fq],
                xq = Bq.n[fq];
              vq = (rq -= mq) >> 3;
              const Aq = 1 << mq;
              let Wq = Aq + ((qq[vq] | qq[vq + 1] << 8 | qq[vq + 2] << 16 | qq[vq + 3] << 24) >>> (7 & rq) & Aq - 1);
              vq = (rq -= Pq[lq]) >> 3;
              let Nq = Qq[lq] + ((qq[vq] | qq[vq + 1] << 8 | qq[vq + 2] << 16) >> (7 & rq) & (1 << Pq[lq]) - 1);
              vq = (rq -= Hq[gq]) >> 3;
              const aq = oq[gq] + ((qq[vq] | qq[vq + 1] << 8 | qq[vq + 2] << 16) >> (7 & rq) & (1 << Hq[gq]) - 1);
              if ((rq < 0 || bq + aq > nq.length || hq + aq + Nq > nq.length) && cq(0), vq = (rq -= Yq) >> 3, Zq = yq.t[Zq] + ((qq[vq] | qq[vq + 1] << 8) >> (7 & rq) & (1 << Yq) - 1), vq = (rq -= Oq) >> 3, Mq = uq.t[Mq] + ((qq[vq] | qq[vq + 1] << 8) >> (7 & rq) & (1 << Oq) - 1), vq = (rq -= xq) >> 3, fq = Bq.t[fq] + ((qq[vq] | qq[vq + 1] << 8) >> (7 & rq) & (1 << xq) - 1), Wq > 3) Eq.o[2] = Eq.o[1], Eq.o[1] = Eq.o[0], Eq.o[0] = Wq -= 3;
              else {
                const qq = Wq - (0 != aq);
                qq ? (Wq = 3 == qq ? Eq.o[0] - 1 : Eq.o[qq], qq > 1 && (Eq.o[2] = Eq.o[1]), Eq.o[1] = Eq.o[0], Eq.o[0] = Wq) : Wq = Eq.o[0]
              }
              for (let qq = 0; qq < aq; ++qq) nq[hq + qq] = nq[bq + qq];
              hq += aq, bq += aq;
              let Vq = hq - Wq;
              if (Vq < 0) {
                let qq = -Vq;
                const gq = Eq.e + Vq;
                gq < 0 && cq(4), qq > Nq && (qq = Nq);
                for (let Yq = 0; Yq < qq; ++Yq) nq[hq + Yq] = Eq.w[gq + Yq];
                hq += qq, Nq -= qq, Vq = 0
              }
              for (let qq = 0; qq < Nq; ++qq) nq[hq + qq] = nq[Vq + qq];
              hq += Nq
            }
            if (hq != bq)
              for (; bq < nq.length;) nq[hq++] = nq[bq++];
            else hq = nq.length;
            lq ? Eq.y += hq : nq = mq(nq, 0, hq)
          } else if (lq) {
            if (Eq.y += rq, bq)
              for (let qq = 0; qq < rq; ++qq) nq[qq] = nq[bq + qq]
          } else bq && (nq = mq(nq, bq));
          return Eq.b = jq, nq
        }
        cq(2)
      }
    };
  class vq {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    Fc = 0;
    needed = 18;
    size;
    constructor(qq) {
      this.size = qq
    }
    push(qq) {
      if (this.done) return;
      if (this.parts.push(qq), this.Fc += qq.length, this.Fc < this.needed) return;
      const Eq = ((qq, Eq) => {
        if (1 == qq.length) return qq[0];
        const Yq = new gq(Eq);
        for (let gq = 0, lq = 0; gq < qq.length; ++gq) {
          const Eq = qq[gq];
          Yq.set(Eq, lq), lq += Eq.length
        }
        return Yq
      })(this.parts, this.Fc);
      let Yq = this.st;
      if (!Yq) {
        const qq = Bq(Eq, new gq(0));
        "number" != typeof qq && qq.u === this.size || cq(0, `not a zstd frame of ${this.size} bytes`), Yq = this.st = Bq(Eq, 1), Yq.e = 0, this.output = Yq.w
      }
      for (;;) {
        const qq = Eq.length - Yq.b;
        if (qq < 3) {
          this.needed = 3;
          break
        }
        const gq = Eq[Yq.b],
          lq = gq >> 1 & 3;
        3 == lq && cq(2);
        const Oq = gq >> 3 | Eq[Yq.b + 1] << 5 | Eq[Yq.b + 2] << 13;
        Oq > Yq.m && cq(0), 0 == lq && Yq.y + Oq > Yq.u && cq(0);
        const mq = 1 == lq ? 4 : 3 + Oq;
        if (qq < mq) {
          this.needed = mq;
          break
        }
        if (rq(Eq, Yq, Yq.w) || cq(5), Yq.e = Yq.y, (Yq.y > Yq.u || Yq.l && Yq.y != Yq.u) && cq(0), Yq.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = Yq.y;
      const lq = Eq.subarray(Yq.b);
      this.parts = lq.length ? [lq] : [], this.Fc = lq.length, Yq.b = 0
    }
  }
  class hq {
    post;
    href = "";
    JN = null;
    given = 0;
    stopped = !1;
    constructor(qq) {
      this.post = qq
    }
    take(Eq) {
      if (!this.stopped) try {
        this.answer(Eq)
      } catch (gq) {
        this.stop(gq instanceof RangeError ? `out of memory decoding ${this.href}: ${qq(gq)}` : `${this.href} did not decode: ${qq(gq)}`)
      }
    }
    answer(qq) {
      if (null === this.JN) {
        const [Eq, gq] = qq;
        return this.href = Eq, void(this.JN = new vq(gq))
      }
      if (null === qq) return void this.stop(`${this.href} ended before its module did`);
      const Eq = this.JN;
      Eq.push(qq);
      const {
        output: gq,
        decoded: Yq
      } = Eq;
      if (null !== gq && Yq > this.given) {
        const qq = gq.slice(this.given, Yq).buffer;
        this.given = Yq, this.post(qq, [qq])
      }
      Eq.done && this.stop(!0)
    }
    stop(qq) {
      this.stopped = !0, this.post(qq)
    }
  }
  const nq = globalThis.WorkerGlobalScope;
  if (void 0 !== nq && globalThis instanceof nq) {
    const qq = globalThis,
      Eq = new hq((function(Eq) {
        let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        qq.postMessage(Eq, gq)
      }));
    qq.addEventListener("message", (qq => {
      let {
        data: gq
      } = qq;
      Eq.take(gq)
    }))
  }
})();