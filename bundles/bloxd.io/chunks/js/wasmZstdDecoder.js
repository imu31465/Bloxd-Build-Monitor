(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var MM = __webpack_require__.u,
        rM = __webpack_require__.e,
        iM = {},
        OM = {};
      __webpack_require__.u = function(rM) {
        return MM(rM) + (iM.hasOwnProperty(rM) ? "?" + iM[rM] : "")
      }, __webpack_require__.e = function(SM) {
        return rM(SM).catch((function(rM) {
          var jM = OM.hasOwnProperty(SM) ? OM[SM] : 4;
          if (jM < 1) {
            var aM = MM(SM);
            if (rM.message = "Loading chunk " + SM + " failed after 4 retries.\n(" + aM + ")", rM.request = aM, iM[SM] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete OM[SM]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === rM.code) {
              var PM = __webpack_require__.miniCssF(SM);
              rM.message = rM.message.replace("Loading chunk", "Loading CSS chunk").replace(aM, PM), rM.request = PM
            }
            throw rM
          }
          return new Promise((function(MM) {
            var rM = 4 - jM + 1;
            setTimeout((function() {
              var rM = "cache-bust=" + Date.now();
              iM[SM] = rM, OM[SM] = jM - 1, MM(__webpack_require__.e(SM))
            }), function(MM) {
              return 500 * Math.pow(2, MM)
            }(rM))
          }))
        }))
      }
    }
  })();

  function MM(MM) {
    return MM instanceof Error ? MM.message : String(MM)
  }
  const rM = ArrayBuffer,
    iM = Uint8Array,
    OM = Uint16Array,
    SM = Int16Array,
    jM = Int32Array,
    aM = (MM, rM, OM) => {
      if (iM.prototype.slice) return iM.prototype.slice.call(MM, rM, OM);
      (null == rM || rM < 0) && (rM = 0), (null == OM || OM > MM.length) && (OM = MM.length);
      const SM = new iM(OM - rM);
      return SM.set(MM.subarray(rM, OM)), SM
    },
    PM = (MM, rM, OM, SM) => {
      if (iM.prototype.fill) return iM.prototype.fill.call(MM, rM, OM, SM);
      for ((null == OM || OM < 0) && (OM = 0), (null == SM || SM > MM.length) && (SM = MM.length); OM < SM; ++OM) MM[OM] = rM;
      return MM
    },
    nM = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    QM = (MM, rM, iM) => {
      const OM = new Error(rM || nM[MM]);
      if (OM.code = MM, Error.captureStackTrace && Error.captureStackTrace(OM, QM), !iM) throw OM;
      return OM
    },
    zM = (MM, rM, iM) => {
      let OM = 0,
        SM = 0;
      for (; OM < iM; ++OM) SM |= MM[rM++] << (OM << 3);
      return SM
    },
    LM = (MM, rM) => {
      const OM = MM[0] | MM[1] << 8 | MM[2] << 16;
      if (3126568 == OM && 253 == MM[3]) {
        const OM = MM[4],
          SM = OM >> 5 & 1,
          aM = OM >> 2 & 1,
          PM = 3 & OM,
          nM = OM >> 6;
        8 & OM && QM(0);
        let LM = 6 - SM;
        const mM = 3 == PM ? 4 : PM,
          HM = zM(MM, LM, mM);
        LM += mM;
        const hM = nM ? 1 << nM : SM,
          JM = zM(MM, LM, hM) + (1 == nM && 256);
        let dM = JM;
        if (!SM) {
          const rM = 1 << 10 + (MM[5] >> 3);
          dM = rM + (rM >> 3) * (7 & MM[5])
        }
        dM > 2145386496 && QM(1);
        const yM = new iM((1 == rM ? JM || dM : rM ? 0 : dM) + 12);
        return yM[0] = 1, yM[4] = 4, yM[8] = 8, {
          b: LM + hM,
          y: 0,
          l: 0,
          d: HM,
          w: rM && 1 != rM ? rM : yM.subarray(12),
          e: dM,
          o: new jM(yM.buffer, 0, 3),
          u: JM,
          c: aM,
          m: Math.min(131072, dM)
        }
      }
      if (25481893 == (OM >> 4 | MM[3] << 20)) return 8 + (((SM = MM)[aM = 4] | SM[aM + 1] << 8 | SM[aM + 2] << 16 | SM[aM + 3] << 24) >>> 0);
      var SM, aM;
      QM(0)
    },
    mM = MM => {
      let rM = 0;
      for (; 1 << rM <= MM; ++rM);
      return rM - 1
    },
    HM = (MM, jM, aM) => {
      let PM = 4 + (jM << 3);
      const nM = 5 + (15 & MM[jM]);
      nM > aM && QM(3);
      const zM = 1 << nM;
      let LM = zM,
        HM = -1,
        hM = -1,
        JM = -1,
        dM = zM;
      const yM = new rM(512 + (zM << 2)),
        lM = new SM(yM, 0, 256),
        EM = new OM(yM, 0, 256),
        UM = new OM(yM, 512, zM),
        GM = 512 + (zM << 1),
        CM = new iM(yM, GM, zM),
        eM = new iM(yM, GM + zM);
      for (; HM < 255 && LM > 0;) {
        const rM = mM(LM + 1),
          iM = PM >> 3,
          OM = (1 << rM + 1) - 1;
        let SM = (MM[iM] | MM[iM + 1] << 8 | MM[iM + 2] << 16) >> (7 & PM) & OM;
        const jM = (1 << rM) - 1,
          aM = OM - LM - 1,
          nM = SM & jM;
        if (nM < aM ? (PM += rM, SM = nM) : (PM += rM + 1, SM > jM && (SM -= aM)), lM[++HM] = --SM, -1 == SM ? (LM += SM, CM[--dM] = HM) : LM -= SM, !SM)
          do {
            const rM = PM >> 3;
            hM = (MM[rM] | MM[rM + 1] << 8) >> (7 & PM) & 3, PM += 2, HM += hM
          } while (3 == hM)
      }(HM > 255 || LM) && QM(0);
      let bM = 0;
      const wM = (zM >> 1) + (zM >> 3) + 3,
        tM = zM - 1;
      for (let rM = 0; rM <= HM; ++rM) {
        const MM = lM[rM];
        if (MM < 1) EM[rM] = -MM;
        else
          for (JM = 0; JM < MM; ++JM) {
            CM[bM] = rM;
            do {
              bM = bM + wM & tM
            } while (bM >= dM)
          }
      }
      for (bM && QM(0), JM = 0; JM < zM; ++JM) {
        const MM = EM[CM[JM]]++,
          rM = eM[JM] = nM - mM(MM);
        UM[JM] = (MM << rM) - zM
      }
      return [PM + 7 >> 3, {
        b: nM,
        s: CM,
        n: eM,
        t: UM
      }]
    },
    hM = HM(new iM([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    JM = HM(new iM([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    dM = HM(new iM([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    yM = (MM, rM) => {
      const iM = MM.length,
        OM = new jM(iM);
      for (let SM = 0; SM < iM; ++SM) OM[SM] = rM, rM += 1 << MM[SM];
      return OM
    },
    lM = new iM(new jM([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    EM = yM(lM, 0),
    UM = new iM(new jM([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    GM = yM(UM, 3),
    CM = (MM, rM, iM) => {
      const OM = MM.length,
        SM = rM.length,
        jM = MM[OM - 1],
        aM = (1 << iM.b) - 1,
        PM = -iM.b;
      jM || QM(0);
      let nM = 0,
        zM = iM.b,
        LM = (OM << 3) - 8 + mM(jM) - zM,
        HM = -1;
      for (; LM > PM && HM < SM;) {
        const OM = LM >> 3;
        nM = (nM << zM | (MM[OM] | MM[OM + 1] << 8 | MM[OM + 2] << 16) >> (7 & LM)) & aM, rM[++HM] = iM.s[nM], LM -= zM = iM.n[nM]
      }
      LM == PM && HM + 1 == SM || QM(0)
    },
    eM = (MM, rM, iM) => {
      let OM = 6;
      const SM = rM.length + 3 >> 2,
        jM = SM << 1,
        aM = SM + jM;
      CM(MM.subarray(OM, OM += MM[0] | MM[1] << 8), rM.subarray(0, SM), iM), CM(MM.subarray(OM, OM += MM[2] | MM[3] << 8), rM.subarray(SM, jM), iM), CM(MM.subarray(OM, OM += MM[4] | MM[5] << 8), rM.subarray(jM, aM), iM), CM(MM.subarray(OM), rM.subarray(aM), iM)
    },
    bM = (MM, rM, SM) => {
      let jM = rM.b;
      const nM = MM[jM],
        zM = nM >> 1 & 3;
      rM.l = 1 & nM;
      const LM = nM >> 3 | MM[jM + 1] << 5 | MM[jM + 2] << 13,
        yM = (jM += 3) + LM;
      if (1 == zM) {
        if (jM >= MM.length) return;
        return rM.b = jM + 1, SM ? (PM(SM, MM[jM], rM.y, rM.y += LM), SM) : PM(new iM(LM), MM[jM])
      }
      if (!(yM > MM.length)) {
        if (0 == zM) return rM.b = yM, SM ? (SM.set(MM.subarray(jM, yM), rM.y), rM.y += LM, SM) : aM(MM, jM, yM);
        if (2 == zM) {
          const nM = MM[jM],
            zM = 3 & nM,
            LM = nM >> 2 & 3;
          let bM = nM >> 4,
            wM = 0,
            tM = 0;
          zM < 2 ? 1 & LM ? bM |= MM[++jM] << 4 | (2 & LM && MM[++jM] << 12) : bM = nM >> 3 : (tM = LM, LM < 2 ? (bM |= (63 & MM[++jM]) << 4, wM = MM[jM] >> 6 | MM[++jM] << 2) : 2 == LM ? (bM |= MM[++jM] << 4 | (3 & MM[++jM]) << 12, wM = MM[jM] >> 2 | MM[++jM] << 6) : (bM |= MM[++jM] << 4 | (63 & MM[++jM]) << 12, wM = MM[jM] >> 6 | MM[++jM] << 2 | MM[++jM] << 10)), ++jM;
          let gM = SM ? SM.subarray(rM.y, rM.y + rM.m) : new iM(rM.m),
            uM = gM.length - bM;
          if (uM < 0 && QM(0), 0 == zM) gM.set(MM.subarray(jM, jM += bM), uM);
          else if (1 == zM) PM(gM, MM[jM++], uM);
          else {
            let SM = rM.h;
            if (2 == zM) {
              const aM = ((MM, rM) => {
                let SM = 0,
                  jM = -1;
                const aM = new iM(292),
                  nM = MM[rM],
                  zM = aM.subarray(0, 256),
                  LM = aM.subarray(256, 268),
                  hM = new OM(aM.buffer, 268);
                if (nM < 128) {
                  const [iM, OM] = HM(MM, rM + 1, 6), SM = iM << 3, aM = MM[rM += nM];
                  aM || QM(0);
                  let PM = 0,
                    LM = 0,
                    hM = OM.b,
                    JM = hM,
                    dM = (++rM << 3) - 8 + mM(aM);
                  for (; jM > 254 && QM(0), dM -= hM, !(dM < SM);) {
                    let rM = dM >> 3;
                    if (PM += (MM[rM] | MM[rM + 1] << 8) >> (7 & dM) & (1 << hM) - 1, zM[++jM] = OM.s[PM], dM -= JM, dM < SM) break;
                    rM = dM >> 3, LM += (MM[rM] | MM[rM + 1] << 8) >> (7 & dM) & (1 << JM) - 1, zM[++jM] = OM.s[LM], hM = OM.n[PM], PM = OM.t[PM], JM = OM.n[LM], LM = OM.t[LM]
                  }++jM > 255 && QM(0)
                } else {
                  for (jM = nM - 127; SM < jM; SM += 2) {
                    const iM = MM[++rM];
                    zM[SM] = iM >> 4, zM[SM + 1] = 15 & iM
                  }++rM
                }
                let JM = 0;
                for (SM = 0; SM < jM; ++SM) {
                  const MM = zM[SM];
                  MM > 11 && QM(0), JM += MM && 1 << MM - 1
                }
                const dM = mM(JM) + 1,
                  yM = 1 << dM,
                  lM = yM - JM;
                for (lM & lM - 1 && QM(0), zM[jM++] = mM(lM) + 1, SM = 0; SM < jM; ++SM) {
                  const MM = zM[SM];
                  ++LM[zM[SM] = MM && dM + 1 - MM]
                }
                const EM = new iM(yM << 1),
                  UM = EM.subarray(0, yM),
                  GM = EM.subarray(yM);
                for (hM[dM] = 0, SM = dM; SM > 0; --SM) {
                  const MM = hM[SM];
                  PM(GM, SM, MM, hM[SM - 1] = MM + LM[SM] * (1 << dM - SM))
                }
                for (hM[0] != yM && QM(0), SM = 0; SM < jM; ++SM) {
                  const MM = zM[SM];
                  if (MM) {
                    const rM = hM[MM];
                    PM(UM, SM, rM, hM[MM] = rM + (1 << dM - MM))
                  }
                }
                return [rM, {
                  n: GM,
                  b: dM,
                  s: UM
                }]
              })(MM, jM);
              wM += jM - (jM = aM[0]), rM.h = SM = aM[1]
            } else SM || QM(0);
            (tM ? eM : CM)(MM.subarray(jM, jM += wM), gM.subarray(uM), SM)
          }
          let RM = MM[jM++];
          if (RM) {
            255 == RM ? RM = 32512 + (MM[jM++] | MM[jM++] << 8) : RM > 127 && (RM = RM - 128 << 8 | MM[jM++]);
            const PM = MM[jM++];
            3 & PM && QM(0);
            const nM = [JM, dM, hM];
            for (let SM = 2; SM > -1; --SM) {
              const aM = PM >> 2 + (SM << 1) & 3;
              if (1 == aM) {
                const rM = new iM([0, 0, MM[jM++]]);
                nM[SM] = {
                  s: rM.subarray(2, 3),
                  n: rM.subarray(0, 1),
                  t: new OM(rM.buffer, 0, 1),
                  b: 0
                }
              } else 2 == aM ? [jM, nM[SM]] = HM(MM, jM, 9 - (1 & SM)) : 3 == aM && (rM.t || QM(0), nM[SM] = rM.t[SM])
            }
            const [zM, LM, CM] = rM.t = nM, eM = MM[yM - 1];
            eM || QM(0);
            let bM = (yM << 3) - 8 + mM(eM) - CM.b,
              wM = bM >> 3,
              tM = 0,
              pM = (MM[wM] | MM[wM + 1] << 8) >> (7 & bM) & (1 << CM.b) - 1;
            wM = (bM -= LM.b) >> 3;
            let WM = (MM[wM] | MM[wM + 1] << 8) >> (7 & bM) & (1 << LM.b) - 1;
            wM = (bM -= zM.b) >> 3;
            let sM = (MM[wM] | MM[wM + 1] << 8) >> (7 & bM) & (1 << zM.b) - 1;
            for (++RM; --RM;) {
              const iM = CM.s[pM],
                OM = CM.n[pM],
                SM = zM.s[sM],
                jM = zM.n[sM],
                aM = LM.s[WM],
                PM = LM.n[WM];
              wM = (bM -= aM) >> 3;
              const nM = 1 << aM;
              let mM = nM + ((MM[wM] | MM[wM + 1] << 8 | MM[wM + 2] << 16 | MM[wM + 3] << 24) >>> (7 & bM) & nM - 1);
              wM = (bM -= UM[SM]) >> 3;
              let HM = GM[SM] + ((MM[wM] | MM[wM + 1] << 8 | MM[wM + 2] << 16) >> (7 & bM) & (1 << UM[SM]) - 1);
              wM = (bM -= lM[iM]) >> 3;
              const hM = EM[iM] + ((MM[wM] | MM[wM + 1] << 8 | MM[wM + 2] << 16) >> (7 & bM) & (1 << lM[iM]) - 1);
              if ((bM < 0 || uM + hM > gM.length || tM + hM + HM > gM.length) && QM(0), wM = (bM -= OM) >> 3, pM = CM.t[pM] + ((MM[wM] | MM[wM + 1] << 8) >> (7 & bM) & (1 << OM) - 1), wM = (bM -= jM) >> 3, sM = zM.t[sM] + ((MM[wM] | MM[wM + 1] << 8) >> (7 & bM) & (1 << jM) - 1), wM = (bM -= PM) >> 3, WM = LM.t[WM] + ((MM[wM] | MM[wM + 1] << 8) >> (7 & bM) & (1 << PM) - 1), mM > 3) rM.o[2] = rM.o[1], rM.o[1] = rM.o[0], rM.o[0] = mM -= 3;
              else {
                const MM = mM - (0 != hM);
                MM ? (mM = 3 == MM ? rM.o[0] - 1 : rM.o[MM], MM > 1 && (rM.o[2] = rM.o[1]), rM.o[1] = rM.o[0], rM.o[0] = mM) : mM = rM.o[0]
              }
              for (let MM = 0; MM < hM; ++MM) gM[tM + MM] = gM[uM + MM];
              tM += hM, uM += hM;
              let JM = tM - mM;
              if (JM < 0) {
                let MM = -JM;
                const iM = rM.e + JM;
                iM < 0 && QM(4), MM > HM && (MM = HM);
                for (let OM = 0; OM < MM; ++OM) gM[tM + OM] = rM.w[iM + OM];
                tM += MM, HM -= MM, JM = 0
              }
              for (let MM = 0; MM < HM; ++MM) gM[tM + MM] = gM[JM + MM];
              tM += HM
            }
            if (tM != uM)
              for (; uM < gM.length;) gM[tM++] = gM[uM++];
            else tM = gM.length;
            SM ? rM.y += tM : gM = aM(gM, 0, tM)
          } else if (SM) {
            if (rM.y += bM, uM)
              for (let MM = 0; MM < bM; ++MM) gM[MM] = gM[uM + MM]
          } else uM && (gM = aM(gM, uM));
          return rM.b = yM, gM
        }
        QM(2)
      }
    };
  class wM {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    sQ = 0;
    needed = 18;
    size;
    constructor(MM) {
      this.size = MM
    }
    push(MM) {
      if (this.done) return;
      if (this.parts.push(MM), this.sQ += MM.length, this.sQ < this.needed) return;
      const rM = ((MM, rM) => {
        if (1 == MM.length) return MM[0];
        const OM = new iM(rM);
        for (let iM = 0, SM = 0; iM < MM.length; ++iM) {
          const rM = MM[iM];
          OM.set(rM, SM), SM += rM.length
        }
        return OM
      })(this.parts, this.sQ);
      let OM = this.st;
      if (!OM) {
        const MM = LM(rM, new iM(0));
        "number" != typeof MM && MM.u === this.size || QM(0, `not a zstd frame of ${this.size} bytes`), OM = this.st = LM(rM, 1), OM.e = 0, this.output = OM.w
      }
      for (;;) {
        const MM = rM.length - OM.b;
        if (MM < 3) {
          this.needed = 3;
          break
        }
        const iM = rM[OM.b],
          SM = iM >> 1 & 3;
        3 == SM && QM(2);
        const jM = iM >> 3 | rM[OM.b + 1] << 5 | rM[OM.b + 2] << 13;
        jM > OM.m && QM(0), 0 == SM && OM.y + jM > OM.u && QM(0);
        const aM = 1 == SM ? 4 : 3 + jM;
        if (MM < aM) {
          this.needed = aM;
          break
        }
        if (bM(rM, OM, OM.w) || QM(5), OM.e = OM.y, (OM.y > OM.u || OM.l && OM.y != OM.u) && QM(0), OM.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = OM.y;
      const SM = rM.subarray(OM.b);
      this.parts = SM.length ? [SM] : [], this.sQ = SM.length, OM.b = 0
    }
  }
  class tM {
    post;
    href = "";
    PL = null;
    given = 0;
    stopped = !1;
    constructor(MM) {
      this.post = MM
    }
    take(rM) {
      if (!this.stopped) try {
        this.answer(rM)
      } catch (iM) {
        this.stop(iM instanceof RangeError ? `out of memory decoding ${this.href}: ${MM(iM)}` : `${this.href} did not decode: ${MM(iM)}`)
      }
    }
    answer(MM) {
      if (null === this.PL) {
        const [rM, iM] = MM;
        return this.href = rM, void(this.PL = new wM(iM))
      }
      if (null === MM) return void this.stop(`${this.href} ended before its module did`);
      const rM = this.PL;
      rM.push(MM);
      const {
        output: iM,
        decoded: OM
      } = rM;
      if (null !== iM && OM > this.given) {
        const MM = iM.slice(this.given, OM).buffer;
        this.given = OM, this.post(MM, [MM])
      }
      rM.done && this.stop(!0)
    }
    stop(MM) {
      this.stopped = !0, this.post(MM)
    }
  }
  const gM = globalThis.WorkerGlobalScope;
  if (void 0 !== gM && globalThis instanceof gM) {
    const MM = globalThis,
      rM = new tM((function(rM) {
        let iM = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        MM.postMessage(rM, iM)
      }));
    MM.addEventListener("message", (MM => {
      let {
        data: iM
      } = MM;
      rM.take(iM)
    }))
  }
})();