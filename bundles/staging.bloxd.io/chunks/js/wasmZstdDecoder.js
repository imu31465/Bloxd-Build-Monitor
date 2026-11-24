(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var DD = __webpack_require__.u,
        zD = __webpack_require__.e,
        wD = {},
        pD = {};
      __webpack_require__.u = function(zD) {
        return DD(zD) + (wD.hasOwnProperty(zD) ? "?" + wD[zD] : "")
      }, __webpack_require__.e = function(sD) {
        return zD(sD).catch((function(zD) {
          var KD = pD.hasOwnProperty(sD) ? pD[sD] : 4;
          if (KD < 1) {
            var rD = DD(sD);
            if (zD.message = "Loading chunk " + sD + " failed after 4 retries.\n(" + rD + ")", zD.request = rD, wD[sD] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete pD[sD]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === zD.code) {
              var LD = __webpack_require__.miniCssF(sD);
              zD.message = zD.message.replace("Loading chunk", "Loading CSS chunk").replace(rD, LD), zD.request = LD
            }
            throw zD
          }
          return new Promise((function(DD) {
            var zD = 4 - KD + 1;
            setTimeout((function() {
              var zD = "cache-bust=" + Date.now();
              wD[sD] = zD, pD[sD] = KD - 1, DD(__webpack_require__.e(sD))
            }), function(DD) {
              return 500 * Math.pow(2, DD)
            }(zD))
          }))
        }))
      }
    }
  })();

  function DD(DD) {
    return DD instanceof Error ? DD.message : String(DD)
  }
  const zD = ArrayBuffer,
    wD = Uint8Array,
    pD = Uint16Array,
    sD = Int16Array,
    KD = Int32Array,
    rD = (DD, zD, pD) => {
      if (wD.prototype.slice) return wD.prototype.slice.call(DD, zD, pD);
      (null == zD || zD < 0) && (zD = 0), (null == pD || pD > DD.length) && (pD = DD.length);
      const sD = new wD(pD - zD);
      return sD.set(DD.subarray(zD, pD)), sD
    },
    LD = (DD, zD, pD, sD) => {
      if (wD.prototype.fill) return wD.prototype.fill.call(DD, zD, pD, sD);
      for ((null == pD || pD < 0) && (pD = 0), (null == sD || sD > DD.length) && (sD = DD.length); pD < sD; ++pD) DD[pD] = zD;
      return DD
    },
    cD = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    gD = (DD, zD, wD) => {
      const pD = new Error(zD || cD[DD]);
      if (pD.code = DD, Error.captureStackTrace && Error.captureStackTrace(pD, gD), !wD) throw pD;
      return pD
    },
    RD = (DD, zD, wD) => {
      let pD = 0,
        sD = 0;
      for (; pD < wD; ++pD) sD |= DD[zD++] << (pD << 3);
      return sD
    },
    AD = (DD, zD) => {
      const pD = DD[0] | DD[1] << 8 | DD[2] << 16;
      if (3126568 == pD && 253 == DD[3]) {
        const pD = DD[4],
          sD = pD >> 5 & 1,
          rD = pD >> 2 & 1,
          LD = 3 & pD,
          cD = pD >> 6;
        8 & pD && gD(0);
        let AD = 6 - sD;
        const UD = 3 == LD ? 4 : LD,
          fD = RD(DD, AD, UD);
        AD += UD;
        const ID = cD ? 1 << cD : sD,
          BD = RD(DD, AD, ID) + (1 == cD && 256);
        let GD = BD;
        if (!sD) {
          const zD = 1 << 10 + (DD[5] >> 3);
          GD = zD + (zD >> 3) * (7 & DD[5])
        }
        GD > 2145386496 && gD(1);
        const hD = new wD((1 == zD ? BD || GD : zD ? 0 : GD) + 12);
        return hD[0] = 1, hD[4] = 4, hD[8] = 8, {
          b: AD + ID,
          y: 0,
          l: 0,
          d: fD,
          w: zD && 1 != zD ? zD : hD.subarray(12),
          e: GD,
          o: new KD(hD.buffer, 0, 3),
          u: BD,
          c: rD,
          m: Math.min(131072, GD)
        }
      }
      if (25481893 == (pD >> 4 | DD[3] << 20)) return 8 + (((sD = DD)[rD = 4] | sD[rD + 1] << 8 | sD[rD + 2] << 16 | sD[rD + 3] << 24) >>> 0);
      var sD, rD;
      gD(0)
    },
    UD = DD => {
      let zD = 0;
      for (; 1 << zD <= DD; ++zD);
      return zD - 1
    },
    fD = (DD, KD, rD) => {
      let LD = 4 + (KD << 3);
      const cD = 5 + (15 & DD[KD]);
      cD > rD && gD(3);
      const RD = 1 << cD;
      let AD = RD,
        fD = -1,
        ID = -1,
        BD = -1,
        GD = RD;
      const hD = new zD(512 + (RD << 2)),
        nD = new sD(hD, 0, 256),
        MD = new pD(hD, 0, 256),
        OD = new pD(hD, 512, RD),
        JD = 512 + (RD << 1),
        ED = new wD(hD, JD, RD),
        QD = new wD(hD, JD + RD);
      for (; fD < 255 && AD > 0;) {
        const zD = UD(AD + 1),
          wD = LD >> 3,
          pD = (1 << zD + 1) - 1;
        let sD = (DD[wD] | DD[wD + 1] << 8 | DD[wD + 2] << 16) >> (7 & LD) & pD;
        const KD = (1 << zD) - 1,
          rD = pD - AD - 1,
          cD = sD & KD;
        if (cD < rD ? (LD += zD, sD = cD) : (LD += zD + 1, sD > KD && (sD -= rD)), nD[++fD] = --sD, -1 == sD ? (AD += sD, ED[--GD] = fD) : AD -= sD, !sD)
          do {
            const zD = LD >> 3;
            ID = (DD[zD] | DD[zD + 1] << 8) >> (7 & LD) & 3, LD += 2, fD += ID
          } while (3 == ID)
      }(fD > 255 || AD) && gD(0);
      let XD = 0;
      const VD = (RD >> 1) + (RD >> 3) + 3,
        PD = RD - 1;
      for (let zD = 0; zD <= fD; ++zD) {
        const DD = nD[zD];
        if (DD < 1) MD[zD] = -DD;
        else
          for (BD = 0; BD < DD; ++BD) {
            ED[XD] = zD;
            do {
              XD = XD + VD & PD
            } while (XD >= GD)
          }
      }
      for (XD && gD(0), BD = 0; BD < RD; ++BD) {
        const DD = MD[ED[BD]]++,
          zD = QD[BD] = cD - UD(DD);
        OD[BD] = (DD << zD) - RD
      }
      return [LD + 7 >> 3, {
        b: cD,
        s: ED,
        n: QD,
        t: OD
      }]
    },
    ID = fD(new wD([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    BD = fD(new wD([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    GD = fD(new wD([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    hD = (DD, zD) => {
      const wD = DD.length,
        pD = new KD(wD);
      for (let sD = 0; sD < wD; ++sD) pD[sD] = zD, zD += 1 << DD[sD];
      return pD
    },
    nD = new wD(new KD([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    MD = hD(nD, 0),
    OD = new wD(new KD([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    JD = hD(OD, 3),
    ED = (DD, zD, wD) => {
      const pD = DD.length,
        sD = zD.length,
        KD = DD[pD - 1],
        rD = (1 << wD.b) - 1,
        LD = -wD.b;
      KD || gD(0);
      let cD = 0,
        RD = wD.b,
        AD = (pD << 3) - 8 + UD(KD) - RD,
        fD = -1;
      for (; AD > LD && fD < sD;) {
        const pD = AD >> 3;
        cD = (cD << RD | (DD[pD] | DD[pD + 1] << 8 | DD[pD + 2] << 16) >> (7 & AD)) & rD, zD[++fD] = wD.s[cD], AD -= RD = wD.n[cD]
      }
      AD == LD && fD + 1 == sD || gD(0)
    },
    QD = (DD, zD, wD) => {
      let pD = 6;
      const sD = zD.length + 3 >> 2,
        KD = sD << 1,
        rD = sD + KD;
      ED(DD.subarray(pD, pD += DD[0] | DD[1] << 8), zD.subarray(0, sD), wD), ED(DD.subarray(pD, pD += DD[2] | DD[3] << 8), zD.subarray(sD, KD), wD), ED(DD.subarray(pD, pD += DD[4] | DD[5] << 8), zD.subarray(KD, rD), wD), ED(DD.subarray(pD), zD.subarray(rD), wD)
    },
    XD = (DD, zD, sD) => {
      let KD = zD.b;
      const cD = DD[KD],
        RD = cD >> 1 & 3;
      zD.l = 1 & cD;
      const AD = cD >> 3 | DD[KD + 1] << 5 | DD[KD + 2] << 13,
        hD = (KD += 3) + AD;
      if (1 == RD) {
        if (KD >= DD.length) return;
        return zD.b = KD + 1, sD ? (LD(sD, DD[KD], zD.y, zD.y += AD), sD) : LD(new wD(AD), DD[KD])
      }
      if (!(hD > DD.length)) {
        if (0 == RD) return zD.b = hD, sD ? (sD.set(DD.subarray(KD, hD), zD.y), zD.y += AD, sD) : rD(DD, KD, hD);
        if (2 == RD) {
          const cD = DD[KD],
            RD = 3 & cD,
            AD = cD >> 2 & 3;
          let XD = cD >> 4,
            VD = 0,
            PD = 0;
          RD < 2 ? 1 & AD ? XD |= DD[++KD] << 4 | (2 & AD && DD[++KD] << 12) : XD = cD >> 3 : (PD = AD, AD < 2 ? (XD |= (63 & DD[++KD]) << 4, VD = DD[KD] >> 6 | DD[++KD] << 2) : 2 == AD ? (XD |= DD[++KD] << 4 | (3 & DD[++KD]) << 12, VD = DD[KD] >> 2 | DD[++KD] << 6) : (XD |= DD[++KD] << 4 | (63 & DD[++KD]) << 12, VD = DD[KD] >> 6 | DD[++KD] << 2 | DD[++KD] << 10)), ++KD;
          let CD = sD ? sD.subarray(zD.y, zD.y + zD.m) : new wD(zD.m),
            xD = CD.length - XD;
          if (xD < 0 && gD(0), 0 == RD) CD.set(DD.subarray(KD, KD += XD), xD);
          else if (1 == RD) LD(CD, DD[KD++], xD);
          else {
            let sD = zD.h;
            if (2 == RD) {
              const rD = ((DD, zD) => {
                let sD = 0,
                  KD = -1;
                const rD = new wD(292),
                  cD = DD[zD],
                  RD = rD.subarray(0, 256),
                  AD = rD.subarray(256, 268),
                  ID = new pD(rD.buffer, 268);
                if (cD < 128) {
                  const [wD, pD] = fD(DD, zD + 1, 6), sD = wD << 3, rD = DD[zD += cD];
                  rD || gD(0);
                  let LD = 0,
                    AD = 0,
                    ID = pD.b,
                    BD = ID,
                    GD = (++zD << 3) - 8 + UD(rD);
                  for (; KD > 254 && gD(0), GD -= ID, !(GD < sD);) {
                    let zD = GD >> 3;
                    if (LD += (DD[zD] | DD[zD + 1] << 8) >> (7 & GD) & (1 << ID) - 1, RD[++KD] = pD.s[LD], GD -= BD, GD < sD) break;
                    zD = GD >> 3, AD += (DD[zD] | DD[zD + 1] << 8) >> (7 & GD) & (1 << BD) - 1, RD[++KD] = pD.s[AD], ID = pD.n[LD], LD = pD.t[LD], BD = pD.n[AD], AD = pD.t[AD]
                  }++KD > 255 && gD(0)
                } else {
                  for (KD = cD - 127; sD < KD; sD += 2) {
                    const wD = DD[++zD];
                    RD[sD] = wD >> 4, RD[sD + 1] = 15 & wD
                  }++zD
                }
                let BD = 0;
                for (sD = 0; sD < KD; ++sD) {
                  const DD = RD[sD];
                  DD > 11 && gD(0), BD += DD && 1 << DD - 1
                }
                const GD = UD(BD) + 1,
                  hD = 1 << GD,
                  nD = hD - BD;
                for (nD & nD - 1 && gD(0), RD[KD++] = UD(nD) + 1, sD = 0; sD < KD; ++sD) {
                  const DD = RD[sD];
                  ++AD[RD[sD] = DD && GD + 1 - DD]
                }
                const MD = new wD(hD << 1),
                  OD = MD.subarray(0, hD),
                  JD = MD.subarray(hD);
                for (ID[GD] = 0, sD = GD; sD > 0; --sD) {
                  const DD = ID[sD];
                  LD(JD, sD, DD, ID[sD - 1] = DD + AD[sD] * (1 << GD - sD))
                }
                for (ID[0] != hD && gD(0), sD = 0; sD < KD; ++sD) {
                  const DD = RD[sD];
                  if (DD) {
                    const zD = ID[DD];
                    LD(OD, sD, zD, ID[DD] = zD + (1 << GD - DD))
                  }
                }
                return [zD, {
                  n: JD,
                  b: GD,
                  s: OD
                }]
              })(DD, KD);
              VD += KD - (KD = rD[0]), zD.h = sD = rD[1]
            } else sD || gD(0);
            (PD ? QD : ED)(DD.subarray(KD, KD += VD), CD.subarray(xD), sD)
          }
          let TD = DD[KD++];
          if (TD) {
            255 == TD ? TD = 32512 + (DD[KD++] | DD[KD++] << 8) : TD > 127 && (TD = TD - 128 << 8 | DD[KD++]);
            const LD = DD[KD++];
            3 & LD && gD(0);
            const cD = [BD, GD, ID];
            for (let sD = 2; sD > -1; --sD) {
              const rD = LD >> 2 + (sD << 1) & 3;
              if (1 == rD) {
                const zD = new wD([0, 0, DD[KD++]]);
                cD[sD] = {
                  s: zD.subarray(2, 3),
                  n: zD.subarray(0, 1),
                  t: new pD(zD.buffer, 0, 1),
                  b: 0
                }
              } else 2 == rD ? [KD, cD[sD]] = fD(DD, KD, 9 - (1 & sD)) : 3 == rD && (zD.t || gD(0), cD[sD] = zD.t[sD])
            }
            const [RD, AD, ED] = zD.t = cD, QD = DD[hD - 1];
            QD || gD(0);
            let XD = (hD << 3) - 8 + UD(QD) - ED.b,
              VD = XD >> 3,
              PD = 0,
              bD = (DD[VD] | DD[VD + 1] << 8) >> (7 & XD) & (1 << ED.b) - 1;
            VD = (XD -= AD.b) >> 3;
            let jD = (DD[VD] | DD[VD + 1] << 8) >> (7 & XD) & (1 << AD.b) - 1;
            VD = (XD -= RD.b) >> 3;
            let dD = (DD[VD] | DD[VD + 1] << 8) >> (7 & XD) & (1 << RD.b) - 1;
            for (++TD; --TD;) {
              const wD = ED.s[bD],
                pD = ED.n[bD],
                sD = RD.s[dD],
                KD = RD.n[dD],
                rD = AD.s[jD],
                LD = AD.n[jD];
              VD = (XD -= rD) >> 3;
              const cD = 1 << rD;
              let UD = cD + ((DD[VD] | DD[VD + 1] << 8 | DD[VD + 2] << 16 | DD[VD + 3] << 24) >>> (7 & XD) & cD - 1);
              VD = (XD -= OD[sD]) >> 3;
              let fD = JD[sD] + ((DD[VD] | DD[VD + 1] << 8 | DD[VD + 2] << 16) >> (7 & XD) & (1 << OD[sD]) - 1);
              VD = (XD -= nD[wD]) >> 3;
              const ID = MD[wD] + ((DD[VD] | DD[VD + 1] << 8 | DD[VD + 2] << 16) >> (7 & XD) & (1 << nD[wD]) - 1);
              if ((XD < 0 || xD + ID > CD.length || PD + ID + fD > CD.length) && gD(0), VD = (XD -= pD) >> 3, bD = ED.t[bD] + ((DD[VD] | DD[VD + 1] << 8) >> (7 & XD) & (1 << pD) - 1), VD = (XD -= KD) >> 3, dD = RD.t[dD] + ((DD[VD] | DD[VD + 1] << 8) >> (7 & XD) & (1 << KD) - 1), VD = (XD -= LD) >> 3, jD = AD.t[jD] + ((DD[VD] | DD[VD + 1] << 8) >> (7 & XD) & (1 << LD) - 1), UD > 3) zD.o[2] = zD.o[1], zD.o[1] = zD.o[0], zD.o[0] = UD -= 3;
              else {
                const DD = UD - (0 != ID);
                DD ? (UD = 3 == DD ? zD.o[0] - 1 : zD.o[DD], DD > 1 && (zD.o[2] = zD.o[1]), zD.o[1] = zD.o[0], zD.o[0] = UD) : UD = zD.o[0]
              }
              for (let DD = 0; DD < ID; ++DD) CD[PD + DD] = CD[xD + DD];
              PD += ID, xD += ID;
              let BD = PD - UD;
              if (BD < 0) {
                let DD = -BD;
                const wD = zD.e + BD;
                wD < 0 && gD(4), DD > fD && (DD = fD);
                for (let pD = 0; pD < DD; ++pD) CD[PD + pD] = zD.w[wD + pD];
                PD += DD, fD -= DD, BD = 0
              }
              for (let DD = 0; DD < fD; ++DD) CD[PD + DD] = CD[BD + DD];
              PD += fD
            }
            if (PD != xD)
              for (; xD < CD.length;) CD[PD++] = CD[xD++];
            else PD = CD.length;
            sD ? zD.y += PD : CD = rD(CD, 0, PD)
          } else if (sD) {
            if (zD.y += XD, xD)
              for (let DD = 0; DD < XD; ++DD) CD[DD] = CD[xD + DD]
          } else xD && (CD = rD(CD, xD));
          return zD.b = hD, CD
        }
        gD(2)
      }
    };
  class VD {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    Qg = 0;
    needed = 18;
    size;
    constructor(DD) {
      this.size = DD
    }
    push(DD) {
      if (this.done) return;
      if (this.parts.push(DD), this.Qg += DD.length, this.Qg < this.needed) return;
      const zD = ((DD, zD) => {
        if (1 == DD.length) return DD[0];
        const pD = new wD(zD);
        for (let wD = 0, sD = 0; wD < DD.length; ++wD) {
          const zD = DD[wD];
          pD.set(zD, sD), sD += zD.length
        }
        return pD
      })(this.parts, this.Qg);
      let pD = this.st;
      if (!pD) {
        const DD = AD(zD, new wD(0));
        "number" != typeof DD && DD.u === this.size || gD(0, `not a zstd frame of ${this.size} bytes`), pD = this.st = AD(zD, 1), pD.e = 0, this.output = pD.w
      }
      for (;;) {
        const DD = zD.length - pD.b;
        if (DD < 3) {
          this.needed = 3;
          break
        }
        const wD = zD[pD.b],
          sD = wD >> 1 & 3;
        3 == sD && gD(2);
        const KD = wD >> 3 | zD[pD.b + 1] << 5 | zD[pD.b + 2] << 13;
        KD > pD.m && gD(0), 0 == sD && pD.y + KD > pD.u && gD(0);
        const rD = 1 == sD ? 4 : 3 + KD;
        if (DD < rD) {
          this.needed = rD;
          break
        }
        if (XD(zD, pD, pD.w) || gD(5), pD.e = pD.y, (pD.y > pD.u || pD.l && pD.y != pD.u) && gD(0), pD.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = pD.y;
      const sD = zD.subarray(pD.b);
      this.parts = sD.length ? [sD] : [], this.Qg = sD.length, pD.b = 0
    }
  }
  class PD {
    post;
    href = "";
    cI = null;
    given = 0;
    stopped = !1;
    constructor(DD) {
      this.post = DD
    }
    take(zD) {
      if (!this.stopped) try {
        this.answer(zD)
      } catch (wD) {
        this.stop(wD instanceof RangeError ? `out of memory decoding ${this.href}: ${DD(wD)}` : `${this.href} did not decode: ${DD(wD)}`)
      }
    }
    answer(DD) {
      if (null === this.cI) {
        const [zD, wD] = DD;
        return this.href = zD, void(this.cI = new VD(wD))
      }
      if (null === DD) return void this.stop(`${this.href} ended before its module did`);
      const zD = this.cI;
      zD.push(DD);
      const {
        output: wD,
        decoded: pD
      } = zD;
      if (null !== wD && pD > this.given) {
        const DD = wD.slice(this.given, pD).buffer;
        this.given = pD, this.post(DD, [DD])
      }
      zD.done && this.stop(!0)
    }
    stop(DD) {
      this.stopped = !0, this.post(DD)
    }
  }
  const CD = globalThis.WorkerGlobalScope;
  if (void 0 !== CD && globalThis instanceof CD) {
    const DD = globalThis,
      zD = new PD((function(zD) {
        let wD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        DD.postMessage(zD, wD)
      }));
    DD.addEventListener("message", (DD => {
      let {
        data: wD
      } = DD;
      zD.take(wD)
    }))
  }
})();