(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var BB = __webpack_require__.u,
        jB = __webpack_require__.e,
        zB = {},
        QB = {};
      __webpack_require__.u = function(jB) {
        return BB(jB) + (zB.hasOwnProperty(jB) ? "?" + zB[jB] : "")
      }, __webpack_require__.e = function(nB) {
        return jB(nB).catch((function(jB) {
          var dB = QB.hasOwnProperty(nB) ? QB[nB] : 4;
          if (dB < 1) {
            var IB = BB(nB);
            if (jB.message = "Loading chunk " + nB + " failed after 4 retries.\n(" + IB + ")", jB.request = IB, zB[nB] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete QB[nB]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === jB.code) {
              var NB = __webpack_require__.miniCssF(nB);
              jB.message = jB.message.replace("Loading chunk", "Loading CSS chunk").replace(IB, NB), jB.request = NB
            }
            throw jB
          }
          return new Promise((function(BB) {
            var jB = 4 - dB + 1;
            setTimeout((function() {
              var jB = "cache-bust=" + Date.now();
              zB[nB] = jB, QB[nB] = dB - 1, BB(__webpack_require__.e(nB))
            }), function(BB) {
              return 500 * Math.pow(2, BB)
            }(jB))
          }))
        }))
      }
    }
  })();

  function BB(BB) {
    return BB instanceof Error ? BB.message : String(BB)
  }
  const jB = ArrayBuffer,
    zB = Uint8Array,
    QB = Uint16Array,
    nB = Int16Array,
    dB = Int32Array,
    IB = (BB, jB, QB) => {
      if (zB.prototype.slice) return zB.prototype.slice.call(BB, jB, QB);
      (null == jB || jB < 0) && (jB = 0), (null == QB || QB > BB.length) && (QB = BB.length);
      const nB = new zB(QB - jB);
      return nB.set(BB.subarray(jB, QB)), nB
    },
    NB = (BB, jB, QB, nB) => {
      if (zB.prototype.fill) return zB.prototype.fill.call(BB, jB, QB, nB);
      for ((null == QB || QB < 0) && (QB = 0), (null == nB || nB > BB.length) && (nB = BB.length); QB < nB; ++QB) BB[QB] = jB;
      return BB
    },
    uB = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    UB = (BB, jB, zB) => {
      const QB = new Error(jB || uB[BB]);
      if (QB.code = BB, Error.captureStackTrace && Error.captureStackTrace(QB, UB), !zB) throw QB;
      return QB
    },
    aB = (BB, jB, zB) => {
      let QB = 0,
        nB = 0;
      for (; QB < zB; ++QB) nB |= BB[jB++] << (QB << 3);
      return nB
    },
    pB = (BB, jB) => {
      const QB = BB[0] | BB[1] << 8 | BB[2] << 16;
      if (3126568 == QB && 253 == BB[3]) {
        const QB = BB[4],
          nB = QB >> 5 & 1,
          IB = QB >> 2 & 1,
          NB = 3 & QB,
          uB = QB >> 6;
        8 & QB && UB(0);
        let pB = 6 - nB;
        const rB = 3 == NB ? 4 : NB,
          sB = aB(BB, pB, rB);
        pB += rB;
        const JB = uB ? 1 << uB : nB,
          mB = aB(BB, pB, JB) + (1 == uB && 256);
        let yB = mB;
        if (!nB) {
          const jB = 1 << 10 + (BB[5] >> 3);
          yB = jB + (jB >> 3) * (7 & BB[5])
        }
        yB > 2145386496 && UB(1);
        const kB = new zB((1 == jB ? mB || yB : jB ? 0 : yB) + 12);
        return kB[0] = 1, kB[4] = 4, kB[8] = 8, {
          b: pB + JB,
          y: 0,
          l: 0,
          d: sB,
          w: jB && 1 != jB ? jB : kB.subarray(12),
          e: yB,
          o: new dB(kB.buffer, 0, 3),
          u: mB,
          c: IB,
          m: Math.min(131072, yB)
        }
      }
      if (25481893 == (QB >> 4 | BB[3] << 20)) return 8 + (((nB = BB)[IB = 4] | nB[IB + 1] << 8 | nB[IB + 2] << 16 | nB[IB + 3] << 24) >>> 0);
      var nB, IB;
      UB(0)
    },
    rB = BB => {
      let jB = 0;
      for (; 1 << jB <= BB; ++jB);
      return jB - 1
    },
    sB = (BB, dB, IB) => {
      let NB = 4 + (dB << 3);
      const uB = 5 + (15 & BB[dB]);
      uB > IB && UB(3);
      const aB = 1 << uB;
      let pB = aB,
        sB = -1,
        JB = -1,
        mB = -1,
        yB = aB;
      const kB = new jB(512 + (aB << 2)),
        GB = new nB(kB, 0, 256),
        LB = new QB(kB, 0, 256),
        gB = new QB(kB, 512, aB),
        tB = 512 + (aB << 1),
        SB = new zB(kB, tB, aB),
        MB = new zB(kB, tB + aB);
      for (; sB < 255 && pB > 0;) {
        const jB = rB(pB + 1),
          zB = NB >> 3,
          QB = (1 << jB + 1) - 1;
        let nB = (BB[zB] | BB[zB + 1] << 8 | BB[zB + 2] << 16) >> (7 & NB) & QB;
        const dB = (1 << jB) - 1,
          IB = QB - pB - 1,
          uB = nB & dB;
        if (uB < IB ? (NB += jB, nB = uB) : (NB += jB + 1, nB > dB && (nB -= IB)), GB[++sB] = --nB, -1 == nB ? (pB += nB, SB[--yB] = sB) : pB -= nB, !nB)
          do {
            const jB = NB >> 3;
            JB = (BB[jB] | BB[jB + 1] << 8) >> (7 & NB) & 3, NB += 2, sB += JB
          } while (3 == JB)
      }(sB > 255 || pB) && UB(0);
      let EB = 0;
      const iB = (aB >> 1) + (aB >> 3) + 3,
        qB = aB - 1;
      for (let jB = 0; jB <= sB; ++jB) {
        const BB = GB[jB];
        if (BB < 1) LB[jB] = -BB;
        else
          for (mB = 0; mB < BB; ++mB) {
            SB[EB] = jB;
            do {
              EB = EB + iB & qB
            } while (EB >= yB)
          }
      }
      for (EB && UB(0), mB = 0; mB < aB; ++mB) {
        const BB = LB[SB[mB]]++,
          jB = MB[mB] = uB - rB(BB);
        gB[mB] = (BB << jB) - aB
      }
      return [NB + 7 >> 3, {
        b: uB,
        s: SB,
        n: MB,
        t: gB
      }]
    },
    JB = sB(new zB([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    mB = sB(new zB([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    yB = sB(new zB([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    kB = (BB, jB) => {
      const zB = BB.length,
        QB = new dB(zB);
      for (let nB = 0; nB < zB; ++nB) QB[nB] = jB, jB += 1 << BB[nB];
      return QB
    },
    GB = new zB(new dB([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    LB = kB(GB, 0),
    gB = new zB(new dB([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    tB = kB(gB, 3),
    SB = (BB, jB, zB) => {
      const QB = BB.length,
        nB = jB.length,
        dB = BB[QB - 1],
        IB = (1 << zB.b) - 1,
        NB = -zB.b;
      dB || UB(0);
      let uB = 0,
        aB = zB.b,
        pB = (QB << 3) - 8 + rB(dB) - aB,
        sB = -1;
      for (; pB > NB && sB < nB;) {
        const QB = pB >> 3;
        uB = (uB << aB | (BB[QB] | BB[QB + 1] << 8 | BB[QB + 2] << 16) >> (7 & pB)) & IB, jB[++sB] = zB.s[uB], pB -= aB = zB.n[uB]
      }
      pB == NB && sB + 1 == nB || UB(0)
    },
    MB = (BB, jB, zB) => {
      let QB = 6;
      const nB = jB.length + 3 >> 2,
        dB = nB << 1,
        IB = nB + dB;
      SB(BB.subarray(QB, QB += BB[0] | BB[1] << 8), jB.subarray(0, nB), zB), SB(BB.subarray(QB, QB += BB[2] | BB[3] << 8), jB.subarray(nB, dB), zB), SB(BB.subarray(QB, QB += BB[4] | BB[5] << 8), jB.subarray(dB, IB), zB), SB(BB.subarray(QB), jB.subarray(IB), zB)
    },
    EB = (BB, jB, nB) => {
      let dB = jB.b;
      const uB = BB[dB],
        aB = uB >> 1 & 3;
      jB.l = 1 & uB;
      const pB = uB >> 3 | BB[dB + 1] << 5 | BB[dB + 2] << 13,
        kB = (dB += 3) + pB;
      if (1 == aB) {
        if (dB >= BB.length) return;
        return jB.b = dB + 1, nB ? (NB(nB, BB[dB], jB.y, jB.y += pB), nB) : NB(new zB(pB), BB[dB])
      }
      if (!(kB > BB.length)) {
        if (0 == aB) return jB.b = kB, nB ? (nB.set(BB.subarray(dB, kB), jB.y), jB.y += pB, nB) : IB(BB, dB, kB);
        if (2 == aB) {
          const uB = BB[dB],
            aB = 3 & uB,
            pB = uB >> 2 & 3;
          let EB = uB >> 4,
            iB = 0,
            qB = 0;
          aB < 2 ? 1 & pB ? EB |= BB[++dB] << 4 | (2 & pB && BB[++dB] << 12) : EB = uB >> 3 : (qB = pB, pB < 2 ? (EB |= (63 & BB[++dB]) << 4, iB = BB[dB] >> 6 | BB[++dB] << 2) : 2 == pB ? (EB |= BB[++dB] << 4 | (3 & BB[++dB]) << 12, iB = BB[dB] >> 2 | BB[++dB] << 6) : (EB |= BB[++dB] << 4 | (63 & BB[++dB]) << 12, iB = BB[dB] >> 6 | BB[++dB] << 2 | BB[++dB] << 10)), ++dB;
          let fB = nB ? nB.subarray(jB.y, jB.y + jB.m) : new zB(jB.m),
            oB = fB.length - EB;
          if (oB < 0 && UB(0), 0 == aB) fB.set(BB.subarray(dB, dB += EB), oB);
          else if (1 == aB) NB(fB, BB[dB++], oB);
          else {
            let nB = jB.h;
            if (2 == aB) {
              const IB = ((BB, jB) => {
                let nB = 0,
                  dB = -1;
                const IB = new zB(292),
                  uB = BB[jB],
                  aB = IB.subarray(0, 256),
                  pB = IB.subarray(256, 268),
                  JB = new QB(IB.buffer, 268);
                if (uB < 128) {
                  const [zB, QB] = sB(BB, jB + 1, 6), nB = zB << 3, IB = BB[jB += uB];
                  IB || UB(0);
                  let NB = 0,
                    pB = 0,
                    JB = QB.b,
                    mB = JB,
                    yB = (++jB << 3) - 8 + rB(IB);
                  for (; dB > 254 && UB(0), yB -= JB, !(yB < nB);) {
                    let jB = yB >> 3;
                    if (NB += (BB[jB] | BB[jB + 1] << 8) >> (7 & yB) & (1 << JB) - 1, aB[++dB] = QB.s[NB], yB -= mB, yB < nB) break;
                    jB = yB >> 3, pB += (BB[jB] | BB[jB + 1] << 8) >> (7 & yB) & (1 << mB) - 1, aB[++dB] = QB.s[pB], JB = QB.n[NB], NB = QB.t[NB], mB = QB.n[pB], pB = QB.t[pB]
                  }++dB > 255 && UB(0)
                } else {
                  for (dB = uB - 127; nB < dB; nB += 2) {
                    const zB = BB[++jB];
                    aB[nB] = zB >> 4, aB[nB + 1] = 15 & zB
                  }++jB
                }
                let mB = 0;
                for (nB = 0; nB < dB; ++nB) {
                  const BB = aB[nB];
                  BB > 11 && UB(0), mB += BB && 1 << BB - 1
                }
                const yB = rB(mB) + 1,
                  kB = 1 << yB,
                  GB = kB - mB;
                for (GB & GB - 1 && UB(0), aB[dB++] = rB(GB) + 1, nB = 0; nB < dB; ++nB) {
                  const BB = aB[nB];
                  ++pB[aB[nB] = BB && yB + 1 - BB]
                }
                const LB = new zB(kB << 1),
                  gB = LB.subarray(0, kB),
                  tB = LB.subarray(kB);
                for (JB[yB] = 0, nB = yB; nB > 0; --nB) {
                  const BB = JB[nB];
                  NB(tB, nB, BB, JB[nB - 1] = BB + pB[nB] * (1 << yB - nB))
                }
                for (JB[0] != kB && UB(0), nB = 0; nB < dB; ++nB) {
                  const BB = aB[nB];
                  if (BB) {
                    const jB = JB[BB];
                    NB(gB, nB, jB, JB[BB] = jB + (1 << yB - BB))
                  }
                }
                return [jB, {
                  n: tB,
                  b: yB,
                  s: gB
                }]
              })(BB, dB);
              iB += dB - (dB = IB[0]), jB.h = nB = IB[1]
            } else nB || UB(0);
            (qB ? MB : SB)(BB.subarray(dB, dB += iB), fB.subarray(oB), nB)
          }
          let HB = BB[dB++];
          if (HB) {
            255 == HB ? HB = 32512 + (BB[dB++] | BB[dB++] << 8) : HB > 127 && (HB = HB - 128 << 8 | BB[dB++]);
            const NB = BB[dB++];
            3 & NB && UB(0);
            const uB = [mB, yB, JB];
            for (let nB = 2; nB > -1; --nB) {
              const IB = NB >> 2 + (nB << 1) & 3;
              if (1 == IB) {
                const jB = new zB([0, 0, BB[dB++]]);
                uB[nB] = {
                  s: jB.subarray(2, 3),
                  n: jB.subarray(0, 1),
                  t: new QB(jB.buffer, 0, 1),
                  b: 0
                }
              } else 2 == IB ? [dB, uB[nB]] = sB(BB, dB, 9 - (1 & nB)) : 3 == IB && (jB.t || UB(0), uB[nB] = jB.t[nB])
            }
            const [aB, pB, SB] = jB.t = uB, MB = BB[kB - 1];
            MB || UB(0);
            let EB = (kB << 3) - 8 + rB(MB) - SB.b,
              iB = EB >> 3,
              qB = 0,
              DB = (BB[iB] | BB[iB + 1] << 8) >> (7 & EB) & (1 << SB.b) - 1;
            iB = (EB -= pB.b) >> 3;
            let FB = (BB[iB] | BB[iB + 1] << 8) >> (7 & EB) & (1 << pB.b) - 1;
            iB = (EB -= aB.b) >> 3;
            let YB = (BB[iB] | BB[iB + 1] << 8) >> (7 & EB) & (1 << aB.b) - 1;
            for (++HB; --HB;) {
              const zB = SB.s[DB],
                QB = SB.n[DB],
                nB = aB.s[YB],
                dB = aB.n[YB],
                IB = pB.s[FB],
                NB = pB.n[FB];
              iB = (EB -= IB) >> 3;
              const uB = 1 << IB;
              let rB = uB + ((BB[iB] | BB[iB + 1] << 8 | BB[iB + 2] << 16 | BB[iB + 3] << 24) >>> (7 & EB) & uB - 1);
              iB = (EB -= gB[nB]) >> 3;
              let sB = tB[nB] + ((BB[iB] | BB[iB + 1] << 8 | BB[iB + 2] << 16) >> (7 & EB) & (1 << gB[nB]) - 1);
              iB = (EB -= GB[zB]) >> 3;
              const JB = LB[zB] + ((BB[iB] | BB[iB + 1] << 8 | BB[iB + 2] << 16) >> (7 & EB) & (1 << GB[zB]) - 1);
              if ((EB < 0 || oB + JB > fB.length || qB + JB + sB > fB.length) && UB(0), iB = (EB -= QB) >> 3, DB = SB.t[DB] + ((BB[iB] | BB[iB + 1] << 8) >> (7 & EB) & (1 << QB) - 1), iB = (EB -= dB) >> 3, YB = aB.t[YB] + ((BB[iB] | BB[iB + 1] << 8) >> (7 & EB) & (1 << dB) - 1), iB = (EB -= NB) >> 3, FB = pB.t[FB] + ((BB[iB] | BB[iB + 1] << 8) >> (7 & EB) & (1 << NB) - 1), rB > 3) jB.o[2] = jB.o[1], jB.o[1] = jB.o[0], jB.o[0] = rB -= 3;
              else {
                const BB = rB - (0 != JB);
                BB ? (rB = 3 == BB ? jB.o[0] - 1 : jB.o[BB], BB > 1 && (jB.o[2] = jB.o[1]), jB.o[1] = jB.o[0], jB.o[0] = rB) : rB = jB.o[0]
              }
              for (let BB = 0; BB < JB; ++BB) fB[qB + BB] = fB[oB + BB];
              qB += JB, oB += JB;
              let mB = qB - rB;
              if (mB < 0) {
                let BB = -mB;
                const zB = jB.e + mB;
                zB < 0 && UB(4), BB > sB && (BB = sB);
                for (let QB = 0; QB < BB; ++QB) fB[qB + QB] = jB.w[zB + QB];
                qB += BB, sB -= BB, mB = 0
              }
              for (let BB = 0; BB < sB; ++BB) fB[qB + BB] = fB[mB + BB];
              qB += sB
            }
            if (qB != oB)
              for (; oB < fB.length;) fB[qB++] = fB[oB++];
            else qB = fB.length;
            nB ? jB.y += qB : fB = IB(fB, 0, qB)
          } else if (nB) {
            if (jB.y += EB, oB)
              for (let BB = 0; BB < EB; ++BB) fB[BB] = fB[oB + BB]
          } else oB && (fB = IB(fB, oB));
          return jB.b = kB, fB
        }
        UB(2)
      }
    };
  class iB {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    DN = 0;
    needed = 18;
    size;
    constructor(BB) {
      this.size = BB
    }
    push(BB) {
      if (this.done) return;
      if (this.parts.push(BB), this.DN += BB.length, this.DN < this.needed) return;
      const jB = ((BB, jB) => {
        if (1 == BB.length) return BB[0];
        const QB = new zB(jB);
        for (let zB = 0, nB = 0; zB < BB.length; ++zB) {
          const jB = BB[zB];
          QB.set(jB, nB), nB += jB.length
        }
        return QB
      })(this.parts, this.DN);
      let QB = this.st;
      if (!QB) {
        const BB = pB(jB, new zB(0));
        "number" != typeof BB && BB.u === this.size || UB(0, `not a zstd frame of ${this.size} bytes`), QB = this.st = pB(jB, 1), QB.e = 0, this.output = QB.w
      }
      for (;;) {
        const BB = jB.length - QB.b;
        if (BB < 3) {
          this.needed = 3;
          break
        }
        const zB = jB[QB.b],
          nB = zB >> 1 & 3;
        3 == nB && UB(2);
        const dB = zB >> 3 | jB[QB.b + 1] << 5 | jB[QB.b + 2] << 13;
        dB > QB.m && UB(0), 0 == nB && QB.y + dB > QB.u && UB(0);
        const IB = 1 == nB ? 4 : 3 + dB;
        if (BB < IB) {
          this.needed = IB;
          break
        }
        if (EB(jB, QB, QB.w) || UB(5), QB.e = QB.y, (QB.y > QB.u || QB.l && QB.y != QB.u) && UB(0), QB.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = QB.y;
      const nB = jB.subarray(QB.b);
      this.parts = nB.length ? [nB] : [], this.DN = nB.length, QB.b = 0
    }
  }
  class qB {
    post;
    href = "";
    GJ = null;
    given = 0;
    stopped = !1;
    constructor(BB) {
      this.post = BB
    }
    take(jB) {
      if (!this.stopped) try {
        this.answer(jB)
      } catch (zB) {
        this.stop(zB instanceof RangeError ? `out of memory decoding ${this.href}: ${BB(zB)}` : `${this.href} did not decode: ${BB(zB)}`)
      }
    }
    answer(BB) {
      if (null === this.GJ) {
        const [jB, zB] = BB;
        return this.href = jB, void(this.GJ = new iB(zB))
      }
      if (null === BB) return void this.stop(`${this.href} ended before its module did`);
      const jB = this.GJ;
      jB.push(BB);
      const {
        output: zB,
        decoded: QB
      } = jB;
      if (null !== zB && QB > this.given) {
        const BB = zB.slice(this.given, QB).buffer;
        this.given = QB, this.post(BB, [BB])
      }
      jB.done && this.stop(!0)
    }
    stop(BB) {
      this.stopped = !0, this.post(BB)
    }
  }
  const fB = globalThis.WorkerGlobalScope;
  if (void 0 !== fB && globalThis instanceof fB) {
    const BB = globalThis,
      jB = new qB((function(jB) {
        let zB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        BB.postMessage(jB, zB)
      }));
    BB.addEventListener("message", (BB => {
      let {
        data: zB
      } = BB;
      jB.take(zB)
    }))
  }
})();