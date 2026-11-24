(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var SS = __webpack_require__.u,
        HS = __webpack_require__.e,
        gS = {},
        tS = {};
      __webpack_require__.u = function(HS) {
        return SS(HS) + (gS.hasOwnProperty(HS) ? "?" + gS[HS] : "")
      }, __webpack_require__.e = function(bS) {
        return HS(bS).catch((function(HS) {
          var XS = tS.hasOwnProperty(bS) ? tS[bS] : 4;
          if (XS < 1) {
            var xS = SS(bS);
            throw HS.message = "Loading chunk " + bS + " failed after 4 retries.\n(" + xS + ")", HS.request = xS, gS[bS] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete tS[bS]
            }), 0), HS
          }
          return new Promise((function(SS) {
            var HS = 4 - XS + 1;
            setTimeout((function() {
              var HS = "cache-bust=" + Date.now();
              gS[bS] = HS, tS[bS] = XS - 1, SS(__webpack_require__.e(bS))
            }), function(SS) {
              return 500 * Math.pow(2, SS)
            }(HS))
          }))
        }))
      }
    }
  })();

  function SS(SS) {
    return SS instanceof Error ? SS.message : String(SS)
  }
  const HS = ArrayBuffer,
    gS = Uint8Array,
    tS = Uint16Array,
    bS = Int16Array,
    XS = Int32Array,
    xS = (SS, HS, tS) => {
      if (gS.prototype.slice) return gS.prototype.slice.call(SS, HS, tS);
      (null == HS || HS < 0) && (HS = 0), (null == tS || tS > SS.length) && (tS = SS.length);
      const bS = new gS(tS - HS);
      return bS.set(SS.subarray(HS, tS)), bS
    },
    NS = (SS, HS, tS, bS) => {
      if (gS.prototype.fill) return gS.prototype.fill.call(SS, HS, tS, bS);
      for ((null == tS || tS < 0) && (tS = 0), (null == bS || bS > SS.length) && (bS = SS.length); tS < bS; ++tS) SS[tS] = HS;
      return SS
    },
    qS = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    uS = (SS, HS, gS) => {
      const tS = new Error(HS || qS[SS]);
      if (tS.code = SS, Error.captureStackTrace && Error.captureStackTrace(tS, uS), !gS) throw tS;
      return tS
    },
    IS = (SS, HS, gS) => {
      let tS = 0,
        bS = 0;
      for (; tS < gS; ++tS) bS |= SS[HS++] << (tS << 3);
      return bS
    },
    fS = (SS, HS) => {
      const tS = SS[0] | SS[1] << 8 | SS[2] << 16;
      if (3126568 == tS && 253 == SS[3]) {
        const tS = SS[4],
          bS = tS >> 5 & 1,
          xS = tS >> 2 & 1,
          NS = 3 & tS,
          qS = tS >> 6;
        8 & tS && uS(0);
        let fS = 6 - bS;
        const kS = 3 == NS ? 4 : NS,
          aS = IS(SS, fS, kS);
        fS += kS;
        const KS = qS ? 1 << qS : bS,
          jS = IS(SS, fS, KS) + (1 == qS && 256);
        let GS = jS;
        if (!bS) {
          const HS = 1 << 10 + (SS[5] >> 3);
          GS = HS + (HS >> 3) * (7 & SS[5])
        }
        GS > 2145386496 && uS(1);
        const CS = new gS((1 == HS ? jS || GS : HS ? 0 : GS) + 12);
        return CS[0] = 1, CS[4] = 4, CS[8] = 8, {
          b: fS + KS,
          y: 0,
          l: 0,
          d: aS,
          w: HS && 1 != HS ? HS : CS.subarray(12),
          e: GS,
          o: new XS(CS.buffer, 0, 3),
          u: jS,
          c: xS,
          m: Math.min(131072, GS)
        }
      }
      if (25481893 == (tS >> 4 | SS[3] << 20)) return 8 + (((bS = SS)[xS = 4] | bS[xS + 1] << 8 | bS[xS + 2] << 16 | bS[xS + 3] << 24) >>> 0);
      var bS, xS;
      uS(0)
    },
    kS = SS => {
      let HS = 0;
      for (; 1 << HS <= SS; ++HS);
      return HS - 1
    },
    aS = (SS, XS, xS) => {
      let NS = 4 + (XS << 3);
      const qS = 5 + (15 & SS[XS]);
      qS > xS && uS(3);
      const IS = 1 << qS;
      let fS = IS,
        aS = -1,
        KS = -1,
        jS = -1,
        GS = IS;
      const CS = new HS(512 + (IS << 2)),
        nS = new bS(CS, 0, 256),
        PS = new tS(CS, 0, 256),
        QS = new tS(CS, 512, IS),
        DS = 512 + (IS << 1),
        wS = new gS(CS, DS, IS),
        hS = new gS(CS, DS + IS);
      for (; aS < 255 && fS > 0;) {
        const HS = kS(fS + 1),
          gS = NS >> 3,
          tS = (1 << HS + 1) - 1;
        let bS = (SS[gS] | SS[gS + 1] << 8 | SS[gS + 2] << 16) >> (7 & NS) & tS;
        const XS = (1 << HS) - 1,
          xS = tS - fS - 1,
          qS = bS & XS;
        if (qS < xS ? (NS += HS, bS = qS) : (NS += HS + 1, bS > XS && (bS -= xS)), nS[++aS] = --bS, -1 == bS ? (fS += bS, wS[--GS] = aS) : fS -= bS, !bS)
          do {
            const HS = NS >> 3;
            KS = (SS[HS] | SS[HS + 1] << 8) >> (7 & NS) & 3, NS += 2, aS += KS
          } while (3 == KS)
      }(aS > 255 || fS) && uS(0);
      let ZS = 0;
      const JS = (IS >> 1) + (IS >> 3) + 3,
        OS = IS - 1;
      for (let HS = 0; HS <= aS; ++HS) {
        const SS = nS[HS];
        if (SS < 1) PS[HS] = -SS;
        else
          for (jS = 0; jS < SS; ++jS) {
            wS[ZS] = HS;
            do {
              ZS = ZS + JS & OS
            } while (ZS >= GS)
          }
      }
      for (ZS && uS(0), jS = 0; jS < IS; ++jS) {
        const SS = PS[wS[jS]]++,
          HS = hS[jS] = qS - kS(SS);
        QS[jS] = (SS << HS) - IS
      }
      return [NS + 7 >> 3, {
        b: qS,
        s: wS,
        n: hS,
        t: QS
      }]
    },
    KS = aS(new gS([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    jS = aS(new gS([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    GS = aS(new gS([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    CS = (SS, HS) => {
      const gS = SS.length,
        tS = new XS(gS);
      for (let bS = 0; bS < gS; ++bS) tS[bS] = HS, HS += 1 << SS[bS];
      return tS
    },
    nS = new gS(new XS([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    PS = CS(nS, 0),
    QS = new gS(new XS([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    DS = CS(QS, 3),
    wS = (SS, HS, gS) => {
      const tS = SS.length,
        bS = HS.length,
        XS = SS[tS - 1],
        xS = (1 << gS.b) - 1,
        NS = -gS.b;
      XS || uS(0);
      let qS = 0,
        IS = gS.b,
        fS = (tS << 3) - 8 + kS(XS) - IS,
        aS = -1;
      for (; fS > NS && aS < bS;) {
        const tS = fS >> 3;
        qS = (qS << IS | (SS[tS] | SS[tS + 1] << 8 | SS[tS + 2] << 16) >> (7 & fS)) & xS, HS[++aS] = gS.s[qS], fS -= IS = gS.n[qS]
      }
      fS == NS && aS + 1 == bS || uS(0)
    },
    hS = (SS, HS, gS) => {
      let tS = 6;
      const bS = HS.length + 3 >> 2,
        XS = bS << 1,
        xS = bS + XS;
      wS(SS.subarray(tS, tS += SS[0] | SS[1] << 8), HS.subarray(0, bS), gS), wS(SS.subarray(tS, tS += SS[2] | SS[3] << 8), HS.subarray(bS, XS), gS), wS(SS.subarray(tS, tS += SS[4] | SS[5] << 8), HS.subarray(XS, xS), gS), wS(SS.subarray(tS), HS.subarray(xS), gS)
    },
    ZS = (SS, HS, bS) => {
      let XS = HS.b;
      const qS = SS[XS],
        IS = qS >> 1 & 3;
      HS.l = 1 & qS;
      const fS = qS >> 3 | SS[XS + 1] << 5 | SS[XS + 2] << 13,
        CS = (XS += 3) + fS;
      if (1 == IS) {
        if (XS >= SS.length) return;
        return HS.b = XS + 1, bS ? (NS(bS, SS[XS], HS.y, HS.y += fS), bS) : NS(new gS(fS), SS[XS])
      }
      if (!(CS > SS.length)) {
        if (0 == IS) return HS.b = CS, bS ? (bS.set(SS.subarray(XS, CS), HS.y), HS.y += fS, bS) : xS(SS, XS, CS);
        if (2 == IS) {
          const qS = SS[XS],
            IS = 3 & qS,
            fS = qS >> 2 & 3;
          let ZS = qS >> 4,
            JS = 0,
            OS = 0;
          IS < 2 ? 1 & fS ? ZS |= SS[++XS] << 4 | (2 & fS && SS[++XS] << 12) : ZS = qS >> 3 : (OS = fS, fS < 2 ? (ZS |= (63 & SS[++XS]) << 4, JS = SS[XS] >> 6 | SS[++XS] << 2) : 2 == fS ? (ZS |= SS[++XS] << 4 | (3 & SS[++XS]) << 12, JS = SS[XS] >> 2 | SS[++XS] << 6) : (ZS |= SS[++XS] << 4 | (63 & SS[++XS]) << 12, JS = SS[XS] >> 6 | SS[++XS] << 2 | SS[++XS] << 10)), ++XS;
          let dS = bS ? bS.subarray(HS.y, HS.y + HS.m) : new gS(HS.m),
            cS = dS.length - ZS;
          if (cS < 0 && uS(0), 0 == IS) dS.set(SS.subarray(XS, XS += ZS), cS);
          else if (1 == IS) NS(dS, SS[XS++], cS);
          else {
            let bS = HS.h;
            if (2 == IS) {
              const xS = ((SS, HS) => {
                let bS = 0,
                  XS = -1;
                const xS = new gS(292),
                  qS = SS[HS],
                  IS = xS.subarray(0, 256),
                  fS = xS.subarray(256, 268),
                  KS = new tS(xS.buffer, 268);
                if (qS < 128) {
                  const [gS, tS] = aS(SS, HS + 1, 6), bS = gS << 3, xS = SS[HS += qS];
                  xS || uS(0);
                  let NS = 0,
                    fS = 0,
                    KS = tS.b,
                    jS = KS,
                    GS = (++HS << 3) - 8 + kS(xS);
                  for (; XS > 254 && uS(0), GS -= KS, !(GS < bS);) {
                    let HS = GS >> 3;
                    if (NS += (SS[HS] | SS[HS + 1] << 8) >> (7 & GS) & (1 << KS) - 1, IS[++XS] = tS.s[NS], GS -= jS, GS < bS) break;
                    HS = GS >> 3, fS += (SS[HS] | SS[HS + 1] << 8) >> (7 & GS) & (1 << jS) - 1, IS[++XS] = tS.s[fS], KS = tS.n[NS], NS = tS.t[NS], jS = tS.n[fS], fS = tS.t[fS]
                  }++XS > 255 && uS(0)
                } else {
                  for (XS = qS - 127; bS < XS; bS += 2) {
                    const gS = SS[++HS];
                    IS[bS] = gS >> 4, IS[bS + 1] = 15 & gS
                  }++HS
                }
                let jS = 0;
                for (bS = 0; bS < XS; ++bS) {
                  const SS = IS[bS];
                  SS > 11 && uS(0), jS += SS && 1 << SS - 1
                }
                const GS = kS(jS) + 1,
                  CS = 1 << GS,
                  nS = CS - jS;
                for (nS & nS - 1 && uS(0), IS[XS++] = kS(nS) + 1, bS = 0; bS < XS; ++bS) {
                  const SS = IS[bS];
                  ++fS[IS[bS] = SS && GS + 1 - SS]
                }
                const PS = new gS(CS << 1),
                  QS = PS.subarray(0, CS),
                  DS = PS.subarray(CS);
                for (KS[GS] = 0, bS = GS; bS > 0; --bS) {
                  const SS = KS[bS];
                  NS(DS, bS, SS, KS[bS - 1] = SS + fS[bS] * (1 << GS - bS))
                }
                for (KS[0] != CS && uS(0), bS = 0; bS < XS; ++bS) {
                  const SS = IS[bS];
                  if (SS) {
                    const HS = KS[SS];
                    NS(QS, bS, HS, KS[SS] = HS + (1 << GS - SS))
                  }
                }
                return [HS, {
                  n: DS,
                  b: GS,
                  s: QS
                }]
              })(SS, XS);
              JS += XS - (XS = xS[0]), HS.h = bS = xS[1]
            } else bS || uS(0);
            (OS ? hS : wS)(SS.subarray(XS, XS += JS), dS.subarray(cS), bS)
          }
          let vS = SS[XS++];
          if (vS) {
            255 == vS ? vS = 32512 + (SS[XS++] | SS[XS++] << 8) : vS > 127 && (vS = vS - 128 << 8 | SS[XS++]);
            const NS = SS[XS++];
            3 & NS && uS(0);
            const qS = [jS, GS, KS];
            for (let bS = 2; bS > -1; --bS) {
              const xS = NS >> 2 + (bS << 1) & 3;
              if (1 == xS) {
                const HS = new gS([0, 0, SS[XS++]]);
                qS[bS] = {
                  s: HS.subarray(2, 3),
                  n: HS.subarray(0, 1),
                  t: new tS(HS.buffer, 0, 1),
                  b: 0
                }
              } else 2 == xS ? [XS, qS[bS]] = aS(SS, XS, 9 - (1 & bS)) : 3 == xS && (HS.t || uS(0), qS[bS] = HS.t[bS])
            }
            const [IS, fS, wS] = HS.t = qS, hS = SS[CS - 1];
            hS || uS(0);
            let ZS = (CS << 3) - 8 + kS(hS) - wS.b,
              JS = ZS >> 3,
              OS = 0,
              ES = (SS[JS] | SS[JS + 1] << 8) >> (7 & ZS) & (1 << wS.b) - 1;
            JS = (ZS -= fS.b) >> 3;
            let LS = (SS[JS] | SS[JS + 1] << 8) >> (7 & ZS) & (1 << fS.b) - 1;
            JS = (ZS -= IS.b) >> 3;
            let YS = (SS[JS] | SS[JS + 1] << 8) >> (7 & ZS) & (1 << IS.b) - 1;
            for (++vS; --vS;) {
              const gS = wS.s[ES],
                tS = wS.n[ES],
                bS = IS.s[YS],
                XS = IS.n[YS],
                xS = fS.s[LS],
                NS = fS.n[LS];
              JS = (ZS -= xS) >> 3;
              const qS = 1 << xS;
              let kS = qS + ((SS[JS] | SS[JS + 1] << 8 | SS[JS + 2] << 16 | SS[JS + 3] << 24) >>> (7 & ZS) & qS - 1);
              JS = (ZS -= QS[bS]) >> 3;
              let aS = DS[bS] + ((SS[JS] | SS[JS + 1] << 8 | SS[JS + 2] << 16) >> (7 & ZS) & (1 << QS[bS]) - 1);
              JS = (ZS -= nS[gS]) >> 3;
              const KS = PS[gS] + ((SS[JS] | SS[JS + 1] << 8 | SS[JS + 2] << 16) >> (7 & ZS) & (1 << nS[gS]) - 1);
              if ((ZS < 0 || cS + KS > dS.length || OS + KS + aS > dS.length) && uS(0), JS = (ZS -= tS) >> 3, ES = wS.t[ES] + ((SS[JS] | SS[JS + 1] << 8) >> (7 & ZS) & (1 << tS) - 1), JS = (ZS -= XS) >> 3, YS = IS.t[YS] + ((SS[JS] | SS[JS + 1] << 8) >> (7 & ZS) & (1 << XS) - 1), JS = (ZS -= NS) >> 3, LS = fS.t[LS] + ((SS[JS] | SS[JS + 1] << 8) >> (7 & ZS) & (1 << NS) - 1), kS > 3) HS.o[2] = HS.o[1], HS.o[1] = HS.o[0], HS.o[0] = kS -= 3;
              else {
                const SS = kS - (0 != KS);
                SS ? (kS = 3 == SS ? HS.o[0] - 1 : HS.o[SS], SS > 1 && (HS.o[2] = HS.o[1]), HS.o[1] = HS.o[0], HS.o[0] = kS) : kS = HS.o[0]
              }
              for (let SS = 0; SS < KS; ++SS) dS[OS + SS] = dS[cS + SS];
              OS += KS, cS += KS;
              let jS = OS - kS;
              if (jS < 0) {
                let SS = -jS;
                const gS = HS.e + jS;
                gS < 0 && uS(4), SS > aS && (SS = aS);
                for (let tS = 0; tS < SS; ++tS) dS[OS + tS] = HS.w[gS + tS];
                OS += SS, aS -= SS, jS = 0
              }
              for (let SS = 0; SS < aS; ++SS) dS[OS + SS] = dS[jS + SS];
              OS += aS
            }
            if (OS != cS)
              for (; cS < dS.length;) dS[OS++] = dS[cS++];
            else OS = dS.length;
            bS ? HS.y += OS : dS = xS(dS, 0, OS)
          } else if (bS) {
            if (HS.y += ZS, cS)
              for (let SS = 0; SS < ZS; ++SS) dS[SS] = dS[cS + SS]
          } else cS && (dS = xS(dS, cS));
          return HS.b = CS, dS
        }
        uS(2)
      }
    };
  class JS {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    Ku = 0;
    needed = 18;
    size;
    constructor(SS) {
      this.size = SS
    }
    push(SS) {
      if (this.done) return;
      if (this.parts.push(SS), this.Ku += SS.length, this.Ku < this.needed) return;
      const HS = ((SS, HS) => {
        if (1 == SS.length) return SS[0];
        const tS = new gS(HS);
        for (let gS = 0, bS = 0; gS < SS.length; ++gS) {
          const HS = SS[gS];
          tS.set(HS, bS), bS += HS.length
        }
        return tS
      })(this.parts, this.Ku);
      let tS = this.st;
      if (!tS) {
        const SS = fS(HS, new gS(0));
        "number" != typeof SS && SS.u === this.size || uS(0, `not a zstd frame of ${this.size} bytes`), tS = this.st = fS(HS, 1), tS.e = 0, this.output = tS.w
      }
      for (;;) {
        const SS = HS.length - tS.b;
        if (SS < 3) {
          this.needed = 3;
          break
        }
        const gS = HS[tS.b],
          bS = gS >> 1 & 3;
        3 == bS && uS(2);
        const XS = gS >> 3 | HS[tS.b + 1] << 5 | HS[tS.b + 2] << 13;
        XS > tS.m && uS(0), 0 == bS && tS.y + XS > tS.u && uS(0);
        const xS = 1 == bS ? 4 : 3 + XS;
        if (SS < xS) {
          this.needed = xS;
          break
        }
        if (ZS(HS, tS, tS.w) || uS(5), tS.e = tS.y, (tS.y > tS.u || tS.l && tS.y != tS.u) && uS(0), tS.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = tS.y;
      const bS = HS.subarray(tS.b);
      this.parts = bS.length ? [bS] : [], this.Ku = bS.length, tS.b = 0
    }
  }
  class OS {
    post;
    href = "";
    NK = null;
    given = 0;
    stopped = !1;
    constructor(SS) {
      this.post = SS
    }
    take(HS) {
      if (!this.stopped) try {
        this.answer(HS)
      } catch (gS) {
        this.stop(gS instanceof RangeError ? `out of memory decoding ${this.href}: ${SS(gS)}` : `${this.href} did not decode: ${SS(gS)}`)
      }
    }
    answer(SS) {
      if (null === this.NK) {
        const [HS, gS] = SS;
        return this.href = HS, void(this.NK = new JS(gS))
      }
      if (null === SS) return void this.stop(`${this.href} ended before its module did`);
      const HS = this.NK;
      HS.push(SS);
      const {
        output: gS,
        decoded: tS
      } = HS;
      if (null !== gS && tS > this.given) {
        const SS = gS.slice(this.given, tS).buffer;
        this.given = tS, this.post(SS, [SS])
      }
      HS.done && this.stop(!0)
    }
    stop(SS) {
      this.stopped = !0, this.post(SS)
    }
  }
  const dS = globalThis.WorkerGlobalScope;
  if (void 0 !== dS && globalThis instanceof dS) {
    const SS = globalThis,
      HS = new OS((function(HS) {
        let gS = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        SS.postMessage(HS, gS)
      }));
    SS.addEventListener("message", (SS => {
      let {
        data: gS
      } = SS;
      HS.take(gS)
    }))
  }
})();