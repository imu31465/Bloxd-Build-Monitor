(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var BB = __webpack_require__.u,
        OB = __webpack_require__.e,
        GB = {},
        YB = {};
      __webpack_require__.u = function(OB) {
        return BB(OB) + (GB.hasOwnProperty(OB) ? "?" + GB[OB] : "")
      }, __webpack_require__.e = function(DB) {
        return OB(DB).catch((function(OB) {
          var QB = YB.hasOwnProperty(DB) ? YB[DB] : 4;
          if (QB < 1) {
            var oB = BB(DB);
            if (OB.message = "Loading chunk " + DB + " failed after 4 retries.\n(" + oB + ")", OB.request = oB, GB[DB] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete YB[DB]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === OB.code) {
              var jB = __webpack_require__.miniCssF(DB);
              OB.message = OB.message.replace("Loading chunk", "Loading CSS chunk").replace(oB, jB), OB.request = jB
            }
            throw OB
          }
          return new Promise((function(BB) {
            var OB = 4 - QB + 1;
            setTimeout((function() {
              var OB = "cache-bust=" + Date.now();
              GB[DB] = OB, YB[DB] = QB - 1, BB(__webpack_require__.e(DB))
            }), function(BB) {
              return 500 * Math.pow(2, BB)
            }(OB))
          }))
        }))
      }
    }
  })();

  function BB(BB) {
    return BB instanceof Error ? BB.message : String(BB)
  }
  const OB = ArrayBuffer,
    GB = Uint8Array,
    YB = Uint16Array,
    DB = Int16Array,
    QB = Int32Array,
    oB = (BB, OB, YB) => {
      if (GB.prototype.slice) return GB.prototype.slice.call(BB, OB, YB);
      (null == OB || OB < 0) && (OB = 0), (null == YB || YB > BB.length) && (YB = BB.length);
      const DB = new GB(YB - OB);
      return DB.set(BB.subarray(OB, YB)), DB
    },
    jB = (BB, OB, YB, DB) => {
      if (GB.prototype.fill) return GB.prototype.fill.call(BB, OB, YB, DB);
      for ((null == YB || YB < 0) && (YB = 0), (null == DB || DB > BB.length) && (DB = BB.length); YB < DB; ++YB) BB[YB] = OB;
      return BB
    },
    yB = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    JB = (BB, OB, GB) => {
      const YB = new Error(OB || yB[BB]);
      if (YB.code = BB, Error.captureStackTrace && Error.captureStackTrace(YB, JB), !GB) throw YB;
      return YB
    },
    MB = (BB, OB, GB) => {
      let YB = 0,
        DB = 0;
      for (; YB < GB; ++YB) DB |= BB[OB++] << (YB << 3);
      return DB
    },
    PB = (BB, OB) => {
      const YB = BB[0] | BB[1] << 8 | BB[2] << 16;
      if (3126568 == YB && 253 == BB[3]) {
        const YB = BB[4],
          DB = YB >> 5 & 1,
          oB = YB >> 2 & 1,
          jB = 3 & YB,
          yB = YB >> 6;
        8 & YB && JB(0);
        let PB = 6 - DB;
        const zB = 3 == jB ? 4 : jB,
          lB = MB(BB, PB, zB);
        PB += zB;
        const pB = yB ? 1 << yB : DB,
          qB = MB(BB, PB, pB) + (1 == yB && 256);
        let ZB = qB;
        if (!DB) {
          const OB = 1 << 10 + (BB[5] >> 3);
          ZB = OB + (OB >> 3) * (7 & BB[5])
        }
        ZB > 2145386496 && JB(1);
        const NB = new GB((1 == OB ? qB || ZB : OB ? 0 : ZB) + 12);
        return NB[0] = 1, NB[4] = 4, NB[8] = 8, {
          b: PB + pB,
          y: 0,
          l: 0,
          d: lB,
          w: OB && 1 != OB ? OB : NB.subarray(12),
          e: ZB,
          o: new QB(NB.buffer, 0, 3),
          u: qB,
          c: oB,
          m: Math.min(131072, ZB)
        }
      }
      if (25481893 == (YB >> 4 | BB[3] << 20)) return 8 + (((DB = BB)[oB = 4] | DB[oB + 1] << 8 | DB[oB + 2] << 16 | DB[oB + 3] << 24) >>> 0);
      var DB, oB;
      JB(0)
    },
    zB = BB => {
      let OB = 0;
      for (; 1 << OB <= BB; ++OB);
      return OB - 1
    },
    lB = (BB, QB, oB) => {
      let jB = 4 + (QB << 3);
      const yB = 5 + (15 & BB[QB]);
      yB > oB && JB(3);
      const MB = 1 << yB;
      let PB = MB,
        lB = -1,
        pB = -1,
        qB = -1,
        ZB = MB;
      const NB = new OB(512 + (MB << 2)),
        RB = new DB(NB, 0, 256),
        WB = new YB(NB, 0, 256),
        AB = new YB(NB, 512, MB),
        VB = 512 + (MB << 1),
        SB = new GB(NB, VB, MB),
        nB = new GB(NB, VB + MB);
      for (; lB < 255 && PB > 0;) {
        const OB = zB(PB + 1),
          GB = jB >> 3,
          YB = (1 << OB + 1) - 1;
        let DB = (BB[GB] | BB[GB + 1] << 8 | BB[GB + 2] << 16) >> (7 & jB) & YB;
        const QB = (1 << OB) - 1,
          oB = YB - PB - 1,
          yB = DB & QB;
        if (yB < oB ? (jB += OB, DB = yB) : (jB += OB + 1, DB > QB && (DB -= oB)), RB[++lB] = --DB, -1 == DB ? (PB += DB, SB[--ZB] = lB) : PB -= DB, !DB)
          do {
            const OB = jB >> 3;
            pB = (BB[OB] | BB[OB + 1] << 8) >> (7 & jB) & 3, jB += 2, lB += pB
          } while (3 == pB)
      }(lB > 255 || PB) && JB(0);
      let UB = 0;
      const fB = (MB >> 1) + (MB >> 3) + 3,
        kB = MB - 1;
      for (let OB = 0; OB <= lB; ++OB) {
        const BB = RB[OB];
        if (BB < 1) WB[OB] = -BB;
        else
          for (qB = 0; qB < BB; ++qB) {
            SB[UB] = OB;
            do {
              UB = UB + fB & kB
            } while (UB >= ZB)
          }
      }
      for (UB && JB(0), qB = 0; qB < MB; ++qB) {
        const BB = WB[SB[qB]]++,
          OB = nB[qB] = yB - zB(BB);
        AB[qB] = (BB << OB) - MB
      }
      return [jB + 7 >> 3, {
        b: yB,
        s: SB,
        n: nB,
        t: AB
      }]
    },
    pB = lB(new GB([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    qB = lB(new GB([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    ZB = lB(new GB([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    NB = (BB, OB) => {
      const GB = BB.length,
        YB = new QB(GB);
      for (let DB = 0; DB < GB; ++DB) YB[DB] = OB, OB += 1 << BB[DB];
      return YB
    },
    RB = new GB(new QB([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    WB = NB(RB, 0),
    AB = new GB(new QB([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    VB = NB(AB, 3),
    SB = (BB, OB, GB) => {
      const YB = BB.length,
        DB = OB.length,
        QB = BB[YB - 1],
        oB = (1 << GB.b) - 1,
        jB = -GB.b;
      QB || JB(0);
      let yB = 0,
        MB = GB.b,
        PB = (YB << 3) - 8 + zB(QB) - MB,
        lB = -1;
      for (; PB > jB && lB < DB;) {
        const YB = PB >> 3;
        yB = (yB << MB | (BB[YB] | BB[YB + 1] << 8 | BB[YB + 2] << 16) >> (7 & PB)) & oB, OB[++lB] = GB.s[yB], PB -= MB = GB.n[yB]
      }
      PB == jB && lB + 1 == DB || JB(0)
    },
    nB = (BB, OB, GB) => {
      let YB = 6;
      const DB = OB.length + 3 >> 2,
        QB = DB << 1,
        oB = DB + QB;
      SB(BB.subarray(YB, YB += BB[0] | BB[1] << 8), OB.subarray(0, DB), GB), SB(BB.subarray(YB, YB += BB[2] | BB[3] << 8), OB.subarray(DB, QB), GB), SB(BB.subarray(YB, YB += BB[4] | BB[5] << 8), OB.subarray(QB, oB), GB), SB(BB.subarray(YB), OB.subarray(oB), GB)
    },
    UB = (BB, OB, DB) => {
      let QB = OB.b;
      const yB = BB[QB],
        MB = yB >> 1 & 3;
      OB.l = 1 & yB;
      const PB = yB >> 3 | BB[QB + 1] << 5 | BB[QB + 2] << 13,
        NB = (QB += 3) + PB;
      if (1 == MB) {
        if (QB >= BB.length) return;
        return OB.b = QB + 1, DB ? (jB(DB, BB[QB], OB.y, OB.y += PB), DB) : jB(new GB(PB), BB[QB])
      }
      if (!(NB > BB.length)) {
        if (0 == MB) return OB.b = NB, DB ? (DB.set(BB.subarray(QB, NB), OB.y), OB.y += PB, DB) : oB(BB, QB, NB);
        if (2 == MB) {
          const yB = BB[QB],
            MB = 3 & yB,
            PB = yB >> 2 & 3;
          let UB = yB >> 4,
            fB = 0,
            kB = 0;
          MB < 2 ? 1 & PB ? UB |= BB[++QB] << 4 | (2 & PB && BB[++QB] << 12) : UB = yB >> 3 : (kB = PB, PB < 2 ? (UB |= (63 & BB[++QB]) << 4, fB = BB[QB] >> 6 | BB[++QB] << 2) : 2 == PB ? (UB |= BB[++QB] << 4 | (3 & BB[++QB]) << 12, fB = BB[QB] >> 2 | BB[++QB] << 6) : (UB |= BB[++QB] << 4 | (63 & BB[++QB]) << 12, fB = BB[QB] >> 6 | BB[++QB] << 2 | BB[++QB] << 10)), ++QB;
          let dB = DB ? DB.subarray(OB.y, OB.y + OB.m) : new GB(OB.m),
            KB = dB.length - UB;
          if (KB < 0 && JB(0), 0 == MB) dB.set(BB.subarray(QB, QB += UB), KB);
          else if (1 == MB) jB(dB, BB[QB++], KB);
          else {
            let DB = OB.h;
            if (2 == MB) {
              const oB = ((BB, OB) => {
                let DB = 0,
                  QB = -1;
                const oB = new GB(292),
                  yB = BB[OB],
                  MB = oB.subarray(0, 256),
                  PB = oB.subarray(256, 268),
                  pB = new YB(oB.buffer, 268);
                if (yB < 128) {
                  const [GB, YB] = lB(BB, OB + 1, 6), DB = GB << 3, oB = BB[OB += yB];
                  oB || JB(0);
                  let jB = 0,
                    PB = 0,
                    pB = YB.b,
                    qB = pB,
                    ZB = (++OB << 3) - 8 + zB(oB);
                  for (; QB > 254 && JB(0), ZB -= pB, !(ZB < DB);) {
                    let OB = ZB >> 3;
                    if (jB += (BB[OB] | BB[OB + 1] << 8) >> (7 & ZB) & (1 << pB) - 1, MB[++QB] = YB.s[jB], ZB -= qB, ZB < DB) break;
                    OB = ZB >> 3, PB += (BB[OB] | BB[OB + 1] << 8) >> (7 & ZB) & (1 << qB) - 1, MB[++QB] = YB.s[PB], pB = YB.n[jB], jB = YB.t[jB], qB = YB.n[PB], PB = YB.t[PB]
                  }++QB > 255 && JB(0)
                } else {
                  for (QB = yB - 127; DB < QB; DB += 2) {
                    const GB = BB[++OB];
                    MB[DB] = GB >> 4, MB[DB + 1] = 15 & GB
                  }++OB
                }
                let qB = 0;
                for (DB = 0; DB < QB; ++DB) {
                  const BB = MB[DB];
                  BB > 11 && JB(0), qB += BB && 1 << BB - 1
                }
                const ZB = zB(qB) + 1,
                  NB = 1 << ZB,
                  RB = NB - qB;
                for (RB & RB - 1 && JB(0), MB[QB++] = zB(RB) + 1, DB = 0; DB < QB; ++DB) {
                  const BB = MB[DB];
                  ++PB[MB[DB] = BB && ZB + 1 - BB]
                }
                const WB = new GB(NB << 1),
                  AB = WB.subarray(0, NB),
                  VB = WB.subarray(NB);
                for (pB[ZB] = 0, DB = ZB; DB > 0; --DB) {
                  const BB = pB[DB];
                  jB(VB, DB, BB, pB[DB - 1] = BB + PB[DB] * (1 << ZB - DB))
                }
                for (pB[0] != NB && JB(0), DB = 0; DB < QB; ++DB) {
                  const BB = MB[DB];
                  if (BB) {
                    const OB = pB[BB];
                    jB(AB, DB, OB, pB[BB] = OB + (1 << ZB - BB))
                  }
                }
                return [OB, {
                  n: VB,
                  b: ZB,
                  s: AB
                }]
              })(BB, QB);
              fB += QB - (QB = oB[0]), OB.h = DB = oB[1]
            } else DB || JB(0);
            (kB ? nB : SB)(BB.subarray(QB, QB += fB), dB.subarray(KB), DB)
          }
          let uB = BB[QB++];
          if (uB) {
            255 == uB ? uB = 32512 + (BB[QB++] | BB[QB++] << 8) : uB > 127 && (uB = uB - 128 << 8 | BB[QB++]);
            const jB = BB[QB++];
            3 & jB && JB(0);
            const yB = [qB, ZB, pB];
            for (let DB = 2; DB > -1; --DB) {
              const oB = jB >> 2 + (DB << 1) & 3;
              if (1 == oB) {
                const OB = new GB([0, 0, BB[QB++]]);
                yB[DB] = {
                  s: OB.subarray(2, 3),
                  n: OB.subarray(0, 1),
                  t: new YB(OB.buffer, 0, 1),
                  b: 0
                }
              } else 2 == oB ? [QB, yB[DB]] = lB(BB, QB, 9 - (1 & DB)) : 3 == oB && (OB.t || JB(0), yB[DB] = OB.t[DB])
            }
            const [MB, PB, SB] = OB.t = yB, nB = BB[NB - 1];
            nB || JB(0);
            let UB = (NB << 3) - 8 + zB(nB) - SB.b,
              fB = UB >> 3,
              kB = 0,
              mB = (BB[fB] | BB[fB + 1] << 8) >> (7 & UB) & (1 << SB.b) - 1;
            fB = (UB -= PB.b) >> 3;
            let IB = (BB[fB] | BB[fB + 1] << 8) >> (7 & UB) & (1 << PB.b) - 1;
            fB = (UB -= MB.b) >> 3;
            let FB = (BB[fB] | BB[fB + 1] << 8) >> (7 & UB) & (1 << MB.b) - 1;
            for (++uB; --uB;) {
              const GB = SB.s[mB],
                YB = SB.n[mB],
                DB = MB.s[FB],
                QB = MB.n[FB],
                oB = PB.s[IB],
                jB = PB.n[IB];
              fB = (UB -= oB) >> 3;
              const yB = 1 << oB;
              let zB = yB + ((BB[fB] | BB[fB + 1] << 8 | BB[fB + 2] << 16 | BB[fB + 3] << 24) >>> (7 & UB) & yB - 1);
              fB = (UB -= AB[DB]) >> 3;
              let lB = VB[DB] + ((BB[fB] | BB[fB + 1] << 8 | BB[fB + 2] << 16) >> (7 & UB) & (1 << AB[DB]) - 1);
              fB = (UB -= RB[GB]) >> 3;
              const pB = WB[GB] + ((BB[fB] | BB[fB + 1] << 8 | BB[fB + 2] << 16) >> (7 & UB) & (1 << RB[GB]) - 1);
              if ((UB < 0 || KB + pB > dB.length || kB + pB + lB > dB.length) && JB(0), fB = (UB -= YB) >> 3, mB = SB.t[mB] + ((BB[fB] | BB[fB + 1] << 8) >> (7 & UB) & (1 << YB) - 1), fB = (UB -= QB) >> 3, FB = MB.t[FB] + ((BB[fB] | BB[fB + 1] << 8) >> (7 & UB) & (1 << QB) - 1), fB = (UB -= jB) >> 3, IB = PB.t[IB] + ((BB[fB] | BB[fB + 1] << 8) >> (7 & UB) & (1 << jB) - 1), zB > 3) OB.o[2] = OB.o[1], OB.o[1] = OB.o[0], OB.o[0] = zB -= 3;
              else {
                const BB = zB - (0 != pB);
                BB ? (zB = 3 == BB ? OB.o[0] - 1 : OB.o[BB], BB > 1 && (OB.o[2] = OB.o[1]), OB.o[1] = OB.o[0], OB.o[0] = zB) : zB = OB.o[0]
              }
              for (let BB = 0; BB < pB; ++BB) dB[kB + BB] = dB[KB + BB];
              kB += pB, KB += pB;
              let qB = kB - zB;
              if (qB < 0) {
                let BB = -qB;
                const GB = OB.e + qB;
                GB < 0 && JB(4), BB > lB && (BB = lB);
                for (let YB = 0; YB < BB; ++YB) dB[kB + YB] = OB.w[GB + YB];
                kB += BB, lB -= BB, qB = 0
              }
              for (let BB = 0; BB < lB; ++BB) dB[kB + BB] = dB[qB + BB];
              kB += lB
            }
            if (kB != KB)
              for (; KB < dB.length;) dB[kB++] = dB[KB++];
            else kB = dB.length;
            DB ? OB.y += kB : dB = oB(dB, 0, kB)
          } else if (DB) {
            if (OB.y += UB, KB)
              for (let BB = 0; BB < UB; ++BB) dB[BB] = dB[KB + BB]
          } else KB && (dB = oB(dB, KB));
          return OB.b = NB, dB
        }
        JB(2)
      }
    };
  class fB {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    sJ = 0;
    needed = 18;
    size;
    constructor(BB) {
      this.size = BB
    }
    push(BB) {
      if (this.done) return;
      if (this.parts.push(BB), this.sJ += BB.length, this.sJ < this.needed) return;
      const OB = ((BB, OB) => {
        if (1 == BB.length) return BB[0];
        const YB = new GB(OB);
        for (let GB = 0, DB = 0; GB < BB.length; ++GB) {
          const OB = BB[GB];
          YB.set(OB, DB), DB += OB.length
        }
        return YB
      })(this.parts, this.sJ);
      let YB = this.st;
      if (!YB) {
        const BB = PB(OB, new GB(0));
        "number" != typeof BB && BB.u === this.size || JB(0, `not a zstd frame of ${this.size} bytes`), YB = this.st = PB(OB, 1), YB.e = 0, this.output = YB.w
      }
      for (;;) {
        const BB = OB.length - YB.b;
        if (BB < 3) {
          this.needed = 3;
          break
        }
        const GB = OB[YB.b],
          DB = GB >> 1 & 3;
        3 == DB && JB(2);
        const QB = GB >> 3 | OB[YB.b + 1] << 5 | OB[YB.b + 2] << 13;
        QB > YB.m && JB(0), 0 == DB && YB.y + QB > YB.u && JB(0);
        const oB = 1 == DB ? 4 : 3 + QB;
        if (BB < oB) {
          this.needed = oB;
          break
        }
        if (UB(OB, YB, YB.w) || JB(5), YB.e = YB.y, (YB.y > YB.u || YB.l && YB.y != YB.u) && JB(0), YB.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = YB.y;
      const DB = OB.subarray(YB.b);
      this.parts = DB.length ? [DB] : [], this.sJ = DB.length, YB.b = 0
    }
  }
  class kB {
    post;
    href = "";
    yP = null;
    given = 0;
    stopped = !1;
    constructor(BB) {
      this.post = BB
    }
    take(OB) {
      if (!this.stopped) try {
        this.answer(OB)
      } catch (GB) {
        this.stop(GB instanceof RangeError ? `out of memory decoding ${this.href}: ${BB(GB)}` : `${this.href} did not decode: ${BB(GB)}`)
      }
    }
    answer(BB) {
      if (null === this.yP) {
        const [OB, GB] = BB;
        return this.href = OB, void(this.yP = new fB(GB))
      }
      if (null === BB) return void this.stop(`${this.href} ended before its module did`);
      const OB = this.yP;
      OB.push(BB);
      const {
        output: GB,
        decoded: YB
      } = OB;
      if (null !== GB && YB > this.given) {
        const BB = GB.slice(this.given, YB).buffer;
        this.given = YB, this.post(BB, [BB])
      }
      OB.done && this.stop(!0)
    }
    stop(BB) {
      this.stopped = !0, this.post(BB)
    }
  }
  const dB = globalThis.WorkerGlobalScope;
  if (void 0 !== dB && globalThis instanceof dB) {
    const BB = globalThis,
      OB = new kB((function(OB) {
        let GB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        BB.postMessage(OB, GB)
      }));
    BB.addEventListener("message", (BB => {
      let {
        data: GB
      } = BB;
      OB.take(GB)
    }))
  }
})();