(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var BB = __webpack_require__.u,
        IB = __webpack_require__.e,
        ZB = {},
        TB = {};
      __webpack_require__.u = function(IB) {
        return BB(IB) + (ZB.hasOwnProperty(IB) ? "?" + ZB[IB] : "")
      }, __webpack_require__.e = function(JB) {
        return IB(JB).catch((function(IB) {
          var oB = TB.hasOwnProperty(JB) ? TB[JB] : 4;
          if (oB < 1) {
            var GB = BB(JB);
            if (IB.message = "Loading chunk " + JB + " failed after 4 retries.\n(" + GB + ")", IB.request = GB, ZB[JB] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete TB[JB]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === IB.code) {
              var vB = __webpack_require__.miniCssF(JB);
              IB.message = IB.message.replace("Loading chunk", "Loading CSS chunk").replace(GB, vB), IB.request = vB
            }
            throw IB
          }
          return new Promise((function(BB) {
            var IB = 4 - oB + 1;
            setTimeout((function() {
              var IB = "cache-bust=" + Date.now();
              ZB[JB] = IB, TB[JB] = oB - 1, BB(__webpack_require__.e(JB))
            }), function(BB) {
              return 500 * Math.pow(2, BB)
            }(IB))
          }))
        }))
      }
    }
  })();

  function BB(BB) {
    return BB instanceof Error ? BB.message : String(BB)
  }
  const IB = ArrayBuffer,
    ZB = Uint8Array,
    TB = Uint16Array,
    JB = Int16Array,
    oB = Int32Array,
    GB = (BB, IB, TB) => {
      if (ZB.prototype.slice) return ZB.prototype.slice.call(BB, IB, TB);
      (null == IB || IB < 0) && (IB = 0), (null == TB || TB > BB.length) && (TB = BB.length);
      const JB = new ZB(TB - IB);
      return JB.set(BB.subarray(IB, TB)), JB
    },
    vB = (BB, IB, TB, JB) => {
      if (ZB.prototype.fill) return ZB.prototype.fill.call(BB, IB, TB, JB);
      for ((null == TB || TB < 0) && (TB = 0), (null == JB || JB > BB.length) && (JB = BB.length); TB < JB; ++TB) BB[TB] = IB;
      return BB
    },
    kB = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    cB = (BB, IB, ZB) => {
      const TB = new Error(IB || kB[BB]);
      if (TB.code = BB, Error.captureStackTrace && Error.captureStackTrace(TB, cB), !ZB) throw TB;
      return TB
    },
    nB = (BB, IB, ZB) => {
      let TB = 0,
        JB = 0;
      for (; TB < ZB; ++TB) JB |= BB[IB++] << (TB << 3);
      return JB
    },
    hB = (BB, IB) => {
      const TB = BB[0] | BB[1] << 8 | BB[2] << 16;
      if (3126568 == TB && 253 == BB[3]) {
        const TB = BB[4],
          JB = TB >> 5 & 1,
          GB = TB >> 2 & 1,
          vB = 3 & TB,
          kB = TB >> 6;
        8 & TB && cB(0);
        let hB = 6 - JB;
        const zB = 3 == vB ? 4 : vB,
          FB = nB(BB, hB, zB);
        hB += zB;
        const NB = kB ? 1 << kB : JB,
          gB = nB(BB, hB, NB) + (1 == kB && 256);
        let qB = gB;
        if (!JB) {
          const IB = 1 << 10 + (BB[5] >> 3);
          qB = IB + (IB >> 3) * (7 & BB[5])
        }
        qB > 2145386496 && cB(1);
        const yB = new ZB((1 == IB ? gB || qB : IB ? 0 : qB) + 12);
        return yB[0] = 1, yB[4] = 4, yB[8] = 8, {
          b: hB + NB,
          y: 0,
          l: 0,
          d: FB,
          w: IB && 1 != IB ? IB : yB.subarray(12),
          e: qB,
          o: new oB(yB.buffer, 0, 3),
          u: gB,
          c: GB,
          m: Math.min(131072, qB)
        }
      }
      if (25481893 == (TB >> 4 | BB[3] << 20)) return 8 + (((JB = BB)[GB = 4] | JB[GB + 1] << 8 | JB[GB + 2] << 16 | JB[GB + 3] << 24) >>> 0);
      var JB, GB;
      cB(0)
    },
    zB = BB => {
      let IB = 0;
      for (; 1 << IB <= BB; ++IB);
      return IB - 1
    },
    FB = (BB, oB, GB) => {
      let vB = 4 + (oB << 3);
      const kB = 5 + (15 & BB[oB]);
      kB > GB && cB(3);
      const nB = 1 << kB;
      let hB = nB,
        FB = -1,
        NB = -1,
        gB = -1,
        qB = nB;
      const yB = new IB(512 + (nB << 2)),
        UB = new JB(yB, 0, 256),
        WB = new TB(yB, 0, 256),
        dB = new TB(yB, 512, nB),
        CB = 512 + (nB << 1),
        QB = new ZB(yB, CB, nB),
        sB = new ZB(yB, CB + nB);
      for (; FB < 255 && hB > 0;) {
        const IB = zB(hB + 1),
          ZB = vB >> 3,
          TB = (1 << IB + 1) - 1;
        let JB = (BB[ZB] | BB[ZB + 1] << 8 | BB[ZB + 2] << 16) >> (7 & vB) & TB;
        const oB = (1 << IB) - 1,
          GB = TB - hB - 1,
          kB = JB & oB;
        if (kB < GB ? (vB += IB, JB = kB) : (vB += IB + 1, JB > oB && (JB -= GB)), UB[++FB] = --JB, -1 == JB ? (hB += JB, QB[--qB] = FB) : hB -= JB, !JB)
          do {
            const IB = vB >> 3;
            NB = (BB[IB] | BB[IB + 1] << 8) >> (7 & vB) & 3, vB += 2, FB += NB
          } while (3 == NB)
      }(FB > 255 || hB) && cB(0);
      let wB = 0;
      const OB = (nB >> 1) + (nB >> 3) + 3,
        YB = nB - 1;
      for (let IB = 0; IB <= FB; ++IB) {
        const BB = UB[IB];
        if (BB < 1) WB[IB] = -BB;
        else
          for (gB = 0; gB < BB; ++gB) {
            QB[wB] = IB;
            do {
              wB = wB + OB & YB
            } while (wB >= qB)
          }
      }
      for (wB && cB(0), gB = 0; gB < nB; ++gB) {
        const BB = WB[QB[gB]]++,
          IB = sB[gB] = kB - zB(BB);
        dB[gB] = (BB << IB) - nB
      }
      return [vB + 7 >> 3, {
        b: kB,
        s: QB,
        n: sB,
        t: dB
      }]
    },
    NB = FB(new ZB([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    gB = FB(new ZB([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    qB = FB(new ZB([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    yB = (BB, IB) => {
      const ZB = BB.length,
        TB = new oB(ZB);
      for (let JB = 0; JB < ZB; ++JB) TB[JB] = IB, IB += 1 << BB[JB];
      return TB
    },
    UB = new ZB(new oB([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    WB = yB(UB, 0),
    dB = new ZB(new oB([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    CB = yB(dB, 3),
    QB = (BB, IB, ZB) => {
      const TB = BB.length,
        JB = IB.length,
        oB = BB[TB - 1],
        GB = (1 << ZB.b) - 1,
        vB = -ZB.b;
      oB || cB(0);
      let kB = 0,
        nB = ZB.b,
        hB = (TB << 3) - 8 + zB(oB) - nB,
        FB = -1;
      for (; hB > vB && FB < JB;) {
        const TB = hB >> 3;
        kB = (kB << nB | (BB[TB] | BB[TB + 1] << 8 | BB[TB + 2] << 16) >> (7 & hB)) & GB, IB[++FB] = ZB.s[kB], hB -= nB = ZB.n[kB]
      }
      hB == vB && FB + 1 == JB || cB(0)
    },
    sB = (BB, IB, ZB) => {
      let TB = 6;
      const JB = IB.length + 3 >> 2,
        oB = JB << 1,
        GB = JB + oB;
      QB(BB.subarray(TB, TB += BB[0] | BB[1] << 8), IB.subarray(0, JB), ZB), QB(BB.subarray(TB, TB += BB[2] | BB[3] << 8), IB.subarray(JB, oB), ZB), QB(BB.subarray(TB, TB += BB[4] | BB[5] << 8), IB.subarray(oB, GB), ZB), QB(BB.subarray(TB), IB.subarray(GB), ZB)
    },
    wB = (BB, IB, JB) => {
      let oB = IB.b;
      const kB = BB[oB],
        nB = kB >> 1 & 3;
      IB.l = 1 & kB;
      const hB = kB >> 3 | BB[oB + 1] << 5 | BB[oB + 2] << 13,
        yB = (oB += 3) + hB;
      if (1 == nB) {
        if (oB >= BB.length) return;
        return IB.b = oB + 1, JB ? (vB(JB, BB[oB], IB.y, IB.y += hB), JB) : vB(new ZB(hB), BB[oB])
      }
      if (!(yB > BB.length)) {
        if (0 == nB) return IB.b = yB, JB ? (JB.set(BB.subarray(oB, yB), IB.y), IB.y += hB, JB) : GB(BB, oB, yB);
        if (2 == nB) {
          const kB = BB[oB],
            nB = 3 & kB,
            hB = kB >> 2 & 3;
          let wB = kB >> 4,
            OB = 0,
            YB = 0;
          nB < 2 ? 1 & hB ? wB |= BB[++oB] << 4 | (2 & hB && BB[++oB] << 12) : wB = kB >> 3 : (YB = hB, hB < 2 ? (wB |= (63 & BB[++oB]) << 4, OB = BB[oB] >> 6 | BB[++oB] << 2) : 2 == hB ? (wB |= BB[++oB] << 4 | (3 & BB[++oB]) << 12, OB = BB[oB] >> 2 | BB[++oB] << 6) : (wB |= BB[++oB] << 4 | (63 & BB[++oB]) << 12, OB = BB[oB] >> 6 | BB[++oB] << 2 | BB[++oB] << 10)), ++oB;
          let iB = JB ? JB.subarray(IB.y, IB.y + IB.m) : new ZB(IB.m),
            pB = iB.length - wB;
          if (pB < 0 && cB(0), 0 == nB) iB.set(BB.subarray(oB, oB += wB), pB);
          else if (1 == nB) vB(iB, BB[oB++], pB);
          else {
            let JB = IB.h;
            if (2 == nB) {
              const GB = ((BB, IB) => {
                let JB = 0,
                  oB = -1;
                const GB = new ZB(292),
                  kB = BB[IB],
                  nB = GB.subarray(0, 256),
                  hB = GB.subarray(256, 268),
                  NB = new TB(GB.buffer, 268);
                if (kB < 128) {
                  const [ZB, TB] = FB(BB, IB + 1, 6), JB = ZB << 3, GB = BB[IB += kB];
                  GB || cB(0);
                  let vB = 0,
                    hB = 0,
                    NB = TB.b,
                    gB = NB,
                    qB = (++IB << 3) - 8 + zB(GB);
                  for (; oB > 254 && cB(0), qB -= NB, !(qB < JB);) {
                    let IB = qB >> 3;
                    if (vB += (BB[IB] | BB[IB + 1] << 8) >> (7 & qB) & (1 << NB) - 1, nB[++oB] = TB.s[vB], qB -= gB, qB < JB) break;
                    IB = qB >> 3, hB += (BB[IB] | BB[IB + 1] << 8) >> (7 & qB) & (1 << gB) - 1, nB[++oB] = TB.s[hB], NB = TB.n[vB], vB = TB.t[vB], gB = TB.n[hB], hB = TB.t[hB]
                  }++oB > 255 && cB(0)
                } else {
                  for (oB = kB - 127; JB < oB; JB += 2) {
                    const ZB = BB[++IB];
                    nB[JB] = ZB >> 4, nB[JB + 1] = 15 & ZB
                  }++IB
                }
                let gB = 0;
                for (JB = 0; JB < oB; ++JB) {
                  const BB = nB[JB];
                  BB > 11 && cB(0), gB += BB && 1 << BB - 1
                }
                const qB = zB(gB) + 1,
                  yB = 1 << qB,
                  UB = yB - gB;
                for (UB & UB - 1 && cB(0), nB[oB++] = zB(UB) + 1, JB = 0; JB < oB; ++JB) {
                  const BB = nB[JB];
                  ++hB[nB[JB] = BB && qB + 1 - BB]
                }
                const WB = new ZB(yB << 1),
                  dB = WB.subarray(0, yB),
                  CB = WB.subarray(yB);
                for (NB[qB] = 0, JB = qB; JB > 0; --JB) {
                  const BB = NB[JB];
                  vB(CB, JB, BB, NB[JB - 1] = BB + hB[JB] * (1 << qB - JB))
                }
                for (NB[0] != yB && cB(0), JB = 0; JB < oB; ++JB) {
                  const BB = nB[JB];
                  if (BB) {
                    const IB = NB[BB];
                    vB(dB, JB, IB, NB[BB] = IB + (1 << qB - BB))
                  }
                }
                return [IB, {
                  n: CB,
                  b: qB,
                  s: dB
                }]
              })(BB, oB);
              OB += oB - (oB = GB[0]), IB.h = JB = GB[1]
            } else JB || cB(0);
            (YB ? sB : QB)(BB.subarray(oB, oB += OB), iB.subarray(pB), JB)
          }
          let aB = BB[oB++];
          if (aB) {
            255 == aB ? aB = 32512 + (BB[oB++] | BB[oB++] << 8) : aB > 127 && (aB = aB - 128 << 8 | BB[oB++]);
            const vB = BB[oB++];
            3 & vB && cB(0);
            const kB = [gB, qB, NB];
            for (let JB = 2; JB > -1; --JB) {
              const GB = vB >> 2 + (JB << 1) & 3;
              if (1 == GB) {
                const IB = new ZB([0, 0, BB[oB++]]);
                kB[JB] = {
                  s: IB.subarray(2, 3),
                  n: IB.subarray(0, 1),
                  t: new TB(IB.buffer, 0, 1),
                  b: 0
                }
              } else 2 == GB ? [oB, kB[JB]] = FB(BB, oB, 9 - (1 & JB)) : 3 == GB && (IB.t || cB(0), kB[JB] = IB.t[JB])
            }
            const [nB, hB, QB] = IB.t = kB, sB = BB[yB - 1];
            sB || cB(0);
            let wB = (yB << 3) - 8 + zB(sB) - QB.b,
              OB = wB >> 3,
              YB = 0,
              HB = (BB[OB] | BB[OB + 1] << 8) >> (7 & wB) & (1 << QB.b) - 1;
            OB = (wB -= hB.b) >> 3;
            let MB = (BB[OB] | BB[OB + 1] << 8) >> (7 & wB) & (1 << hB.b) - 1;
            OB = (wB -= nB.b) >> 3;
            let jB = (BB[OB] | BB[OB + 1] << 8) >> (7 & wB) & (1 << nB.b) - 1;
            for (++aB; --aB;) {
              const ZB = QB.s[HB],
                TB = QB.n[HB],
                JB = nB.s[jB],
                oB = nB.n[jB],
                GB = hB.s[MB],
                vB = hB.n[MB];
              OB = (wB -= GB) >> 3;
              const kB = 1 << GB;
              let zB = kB + ((BB[OB] | BB[OB + 1] << 8 | BB[OB + 2] << 16 | BB[OB + 3] << 24) >>> (7 & wB) & kB - 1);
              OB = (wB -= dB[JB]) >> 3;
              let FB = CB[JB] + ((BB[OB] | BB[OB + 1] << 8 | BB[OB + 2] << 16) >> (7 & wB) & (1 << dB[JB]) - 1);
              OB = (wB -= UB[ZB]) >> 3;
              const NB = WB[ZB] + ((BB[OB] | BB[OB + 1] << 8 | BB[OB + 2] << 16) >> (7 & wB) & (1 << UB[ZB]) - 1);
              if ((wB < 0 || pB + NB > iB.length || YB + NB + FB > iB.length) && cB(0), OB = (wB -= TB) >> 3, HB = QB.t[HB] + ((BB[OB] | BB[OB + 1] << 8) >> (7 & wB) & (1 << TB) - 1), OB = (wB -= oB) >> 3, jB = nB.t[jB] + ((BB[OB] | BB[OB + 1] << 8) >> (7 & wB) & (1 << oB) - 1), OB = (wB -= vB) >> 3, MB = hB.t[MB] + ((BB[OB] | BB[OB + 1] << 8) >> (7 & wB) & (1 << vB) - 1), zB > 3) IB.o[2] = IB.o[1], IB.o[1] = IB.o[0], IB.o[0] = zB -= 3;
              else {
                const BB = zB - (0 != NB);
                BB ? (zB = 3 == BB ? IB.o[0] - 1 : IB.o[BB], BB > 1 && (IB.o[2] = IB.o[1]), IB.o[1] = IB.o[0], IB.o[0] = zB) : zB = IB.o[0]
              }
              for (let BB = 0; BB < NB; ++BB) iB[YB + BB] = iB[pB + BB];
              YB += NB, pB += NB;
              let gB = YB - zB;
              if (gB < 0) {
                let BB = -gB;
                const ZB = IB.e + gB;
                ZB < 0 && cB(4), BB > FB && (BB = FB);
                for (let TB = 0; TB < BB; ++TB) iB[YB + TB] = IB.w[ZB + TB];
                YB += BB, FB -= BB, gB = 0
              }
              for (let BB = 0; BB < FB; ++BB) iB[YB + BB] = iB[gB + BB];
              YB += FB
            }
            if (YB != pB)
              for (; pB < iB.length;) iB[YB++] = iB[pB++];
            else YB = iB.length;
            JB ? IB.y += YB : iB = GB(iB, 0, YB)
          } else if (JB) {
            if (IB.y += wB, pB)
              for (let BB = 0; BB < wB; ++BB) iB[BB] = iB[pB + BB]
          } else pB && (iB = GB(iB, pB));
          return IB.b = yB, iB
        }
        cB(2)
      }
    };
  class OB {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    sv = 0;
    needed = 18;
    size;
    constructor(BB) {
      this.size = BB
    }
    push(BB) {
      if (this.done) return;
      if (this.parts.push(BB), this.sv += BB.length, this.sv < this.needed) return;
      const IB = ((BB, IB) => {
        if (1 == BB.length) return BB[0];
        const TB = new ZB(IB);
        for (let ZB = 0, JB = 0; ZB < BB.length; ++ZB) {
          const IB = BB[ZB];
          TB.set(IB, JB), JB += IB.length
        }
        return TB
      })(this.parts, this.sv);
      let TB = this.st;
      if (!TB) {
        const BB = hB(IB, new ZB(0));
        "number" != typeof BB && BB.u === this.size || cB(0, `not a zstd frame of ${this.size} bytes`), TB = this.st = hB(IB, 1), TB.e = 0, this.output = TB.w
      }
      for (;;) {
        const BB = IB.length - TB.b;
        if (BB < 3) {
          this.needed = 3;
          break
        }
        const ZB = IB[TB.b],
          JB = ZB >> 1 & 3;
        3 == JB && cB(2);
        const oB = ZB >> 3 | IB[TB.b + 1] << 5 | IB[TB.b + 2] << 13;
        oB > TB.m && cB(0), 0 == JB && TB.y + oB > TB.u && cB(0);
        const GB = 1 == JB ? 4 : 3 + oB;
        if (BB < GB) {
          this.needed = GB;
          break
        }
        if (wB(IB, TB, TB.w) || cB(5), TB.e = TB.y, (TB.y > TB.u || TB.l && TB.y != TB.u) && cB(0), TB.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = TB.y;
      const JB = IB.subarray(TB.b);
      this.parts = JB.length ? [JB] : [], this.sv = JB.length, TB.b = 0
    }
  }
  class YB {
    post;
    href = "";
    kN = null;
    given = 0;
    stopped = !1;
    constructor(BB) {
      this.post = BB
    }
    take(IB) {
      if (!this.stopped) try {
        this.answer(IB)
      } catch (ZB) {
        this.stop(ZB instanceof RangeError ? `out of memory decoding ${this.href}: ${BB(ZB)}` : `${this.href} did not decode: ${BB(ZB)}`)
      }
    }
    answer(BB) {
      if (null === this.kN) {
        const [IB, ZB] = BB;
        return this.href = IB, void(this.kN = new OB(ZB))
      }
      if (null === BB) return void this.stop(`${this.href} ended before its module did`);
      const IB = this.kN;
      IB.push(BB);
      const {
        output: ZB,
        decoded: TB
      } = IB;
      if (null !== ZB && TB > this.given) {
        const BB = ZB.slice(this.given, TB).buffer;
        this.given = TB, this.post(BB, [BB])
      }
      IB.done && this.stop(!0)
    }
    stop(BB) {
      this.stopped = !0, this.post(BB)
    }
  }
  const iB = globalThis.WorkerGlobalScope;
  if (void 0 !== iB && globalThis instanceof iB) {
    const BB = globalThis,
      IB = new YB((function(IB) {
        let ZB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        BB.postMessage(IB, ZB)
      }));
    BB.addEventListener("message", (BB => {
      let {
        data: ZB
      } = BB;
      IB.take(ZB)
    }))
  }
})();