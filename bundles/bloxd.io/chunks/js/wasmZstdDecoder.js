(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var VV = __webpack_require__.u,
        eV = __webpack_require__.e,
        xV = {},
        JV = {};
      __webpack_require__.u = function(eV) {
        return VV(eV) + (xV.hasOwnProperty(eV) ? "?" + xV[eV] : "")
      }, __webpack_require__.e = function(YV) {
        return eV(YV).catch((function(eV) {
          var UV = JV.hasOwnProperty(YV) ? JV[YV] : 4;
          if (UV < 1) {
            var yV = VV(YV);
            if (eV.message = "Loading chunk " + YV + " failed after 4 retries.\n(" + yV + ")", eV.request = yV, xV[YV] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete JV[YV]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === eV.code) {
              var pV = __webpack_require__.miniCssF(YV);
              eV.message = eV.message.replace("Loading chunk", "Loading CSS chunk").replace(yV, pV), eV.request = pV
            }
            throw eV
          }
          return new Promise((function(VV) {
            var eV = 4 - UV + 1;
            setTimeout((function() {
              var eV = "cache-bust=" + Date.now();
              xV[YV] = eV, JV[YV] = UV - 1, VV(__webpack_require__.e(YV))
            }), function(VV) {
              return 500 * Math.pow(2, VV)
            }(eV))
          }))
        }))
      }
    }
  })();

  function VV(VV) {
    return VV instanceof Error ? VV.message : String(VV)
  }
  const eV = ArrayBuffer,
    xV = Uint8Array,
    JV = Uint16Array,
    YV = Int16Array,
    UV = Int32Array,
    yV = (VV, eV, JV) => {
      if (xV.prototype.slice) return xV.prototype.slice.call(VV, eV, JV);
      (null == eV || eV < 0) && (eV = 0), (null == JV || JV > VV.length) && (JV = VV.length);
      const YV = new xV(JV - eV);
      return YV.set(VV.subarray(eV, JV)), YV
    },
    pV = (VV, eV, JV, YV) => {
      if (xV.prototype.fill) return xV.prototype.fill.call(VV, eV, JV, YV);
      for ((null == JV || JV < 0) && (JV = 0), (null == YV || YV > VV.length) && (YV = VV.length); JV < YV; ++JV) VV[JV] = eV;
      return VV
    },
    QV = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    nV = (VV, eV, xV) => {
      const JV = new Error(eV || QV[VV]);
      if (JV.code = VV, Error.captureStackTrace && Error.captureStackTrace(JV, nV), !xV) throw JV;
      return JV
    },
    wV = (VV, eV, xV) => {
      let JV = 0,
        YV = 0;
      for (; JV < xV; ++JV) YV |= VV[eV++] << (JV << 3);
      return YV
    },
    ZV = (VV, eV) => {
      const JV = VV[0] | VV[1] << 8 | VV[2] << 16;
      if (3126568 == JV && 253 == VV[3]) {
        const JV = VV[4],
          YV = JV >> 5 & 1,
          yV = JV >> 2 & 1,
          pV = 3 & JV,
          QV = JV >> 6;
        8 & JV && nV(0);
        let ZV = 6 - YV;
        const vV = 3 == pV ? 4 : pV,
          rV = wV(VV, ZV, vV);
        ZV += vV;
        const kV = QV ? 1 << QV : YV,
          bV = wV(VV, ZV, kV) + (1 == QV && 256);
        let EV = bV;
        if (!YV) {
          const eV = 1 << 10 + (VV[5] >> 3);
          EV = eV + (eV >> 3) * (7 & VV[5])
        }
        EV > 2145386496 && nV(1);
        const BV = new xV((1 == eV ? bV || EV : eV ? 0 : EV) + 12);
        return BV[0] = 1, BV[4] = 4, BV[8] = 8, {
          b: ZV + kV,
          y: 0,
          l: 0,
          d: rV,
          w: eV && 1 != eV ? eV : BV.subarray(12),
          e: EV,
          o: new UV(BV.buffer, 0, 3),
          u: bV,
          c: yV,
          m: Math.min(131072, EV)
        }
      }
      if (25481893 == (JV >> 4 | VV[3] << 20)) return 8 + (((YV = VV)[yV = 4] | YV[yV + 1] << 8 | YV[yV + 2] << 16 | YV[yV + 3] << 24) >>> 0);
      var YV, yV;
      nV(0)
    },
    vV = VV => {
      let eV = 0;
      for (; 1 << eV <= VV; ++eV);
      return eV - 1
    },
    rV = (VV, UV, yV) => {
      let pV = 4 + (UV << 3);
      const QV = 5 + (15 & VV[UV]);
      QV > yV && nV(3);
      const wV = 1 << QV;
      let ZV = wV,
        rV = -1,
        kV = -1,
        bV = -1,
        EV = wV;
      const BV = new eV(512 + (wV << 2)),
        jV = new YV(BV, 0, 256),
        qV = new JV(BV, 0, 256),
        tV = new JV(BV, 512, wV),
        FV = 512 + (wV << 1),
        TV = new xV(BV, FV, wV),
        PV = new xV(BV, FV + wV);
      for (; rV < 255 && ZV > 0;) {
        const eV = vV(ZV + 1),
          xV = pV >> 3,
          JV = (1 << eV + 1) - 1;
        let YV = (VV[xV] | VV[xV + 1] << 8 | VV[xV + 2] << 16) >> (7 & pV) & JV;
        const UV = (1 << eV) - 1,
          yV = JV - ZV - 1,
          QV = YV & UV;
        if (QV < yV ? (pV += eV, YV = QV) : (pV += eV + 1, YV > UV && (YV -= yV)), jV[++rV] = --YV, -1 == YV ? (ZV += YV, TV[--EV] = rV) : ZV -= YV, !YV)
          do {
            const eV = pV >> 3;
            kV = (VV[eV] | VV[eV + 1] << 8) >> (7 & pV) & 3, pV += 2, rV += kV
          } while (3 == kV)
      }(rV > 255 || ZV) && nV(0);
      let AV = 0;
      const NV = (wV >> 1) + (wV >> 3) + 3,
        XV = wV - 1;
      for (let eV = 0; eV <= rV; ++eV) {
        const VV = jV[eV];
        if (VV < 1) qV[eV] = -VV;
        else
          for (bV = 0; bV < VV; ++bV) {
            TV[AV] = eV;
            do {
              AV = AV + NV & XV
            } while (AV >= EV)
          }
      }
      for (AV && nV(0), bV = 0; bV < wV; ++bV) {
        const VV = qV[TV[bV]]++,
          eV = PV[bV] = QV - vV(VV);
        tV[bV] = (VV << eV) - wV
      }
      return [pV + 7 >> 3, {
        b: QV,
        s: TV,
        n: PV,
        t: tV
      }]
    },
    kV = rV(new xV([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    bV = rV(new xV([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    EV = rV(new xV([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    BV = (VV, eV) => {
      const xV = VV.length,
        JV = new UV(xV);
      for (let YV = 0; YV < xV; ++YV) JV[YV] = eV, eV += 1 << VV[YV];
      return JV
    },
    jV = new xV(new UV([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    qV = BV(jV, 0),
    tV = new xV(new UV([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    FV = BV(tV, 3),
    TV = (VV, eV, xV) => {
      const JV = VV.length,
        YV = eV.length,
        UV = VV[JV - 1],
        yV = (1 << xV.b) - 1,
        pV = -xV.b;
      UV || nV(0);
      let QV = 0,
        wV = xV.b,
        ZV = (JV << 3) - 8 + vV(UV) - wV,
        rV = -1;
      for (; ZV > pV && rV < YV;) {
        const JV = ZV >> 3;
        QV = (QV << wV | (VV[JV] | VV[JV + 1] << 8 | VV[JV + 2] << 16) >> (7 & ZV)) & yV, eV[++rV] = xV.s[QV], ZV -= wV = xV.n[QV]
      }
      ZV == pV && rV + 1 == YV || nV(0)
    },
    PV = (VV, eV, xV) => {
      let JV = 6;
      const YV = eV.length + 3 >> 2,
        UV = YV << 1,
        yV = YV + UV;
      TV(VV.subarray(JV, JV += VV[0] | VV[1] << 8), eV.subarray(0, YV), xV), TV(VV.subarray(JV, JV += VV[2] | VV[3] << 8), eV.subarray(YV, UV), xV), TV(VV.subarray(JV, JV += VV[4] | VV[5] << 8), eV.subarray(UV, yV), xV), TV(VV.subarray(JV), eV.subarray(yV), xV)
    },
    AV = (VV, eV, YV) => {
      let UV = eV.b;
      const QV = VV[UV],
        wV = QV >> 1 & 3;
      eV.l = 1 & QV;
      const ZV = QV >> 3 | VV[UV + 1] << 5 | VV[UV + 2] << 13,
        BV = (UV += 3) + ZV;
      if (1 == wV) {
        if (UV >= VV.length) return;
        return eV.b = UV + 1, YV ? (pV(YV, VV[UV], eV.y, eV.y += ZV), YV) : pV(new xV(ZV), VV[UV])
      }
      if (!(BV > VV.length)) {
        if (0 == wV) return eV.b = BV, YV ? (YV.set(VV.subarray(UV, BV), eV.y), eV.y += ZV, YV) : yV(VV, UV, BV);
        if (2 == wV) {
          const QV = VV[UV],
            wV = 3 & QV,
            ZV = QV >> 2 & 3;
          let AV = QV >> 4,
            NV = 0,
            XV = 0;
          wV < 2 ? 1 & ZV ? AV |= VV[++UV] << 4 | (2 & ZV && VV[++UV] << 12) : AV = QV >> 3 : (XV = ZV, ZV < 2 ? (AV |= (63 & VV[++UV]) << 4, NV = VV[UV] >> 6 | VV[++UV] << 2) : 2 == ZV ? (AV |= VV[++UV] << 4 | (3 & VV[++UV]) << 12, NV = VV[UV] >> 2 | VV[++UV] << 6) : (AV |= VV[++UV] << 4 | (63 & VV[++UV]) << 12, NV = VV[UV] >> 6 | VV[++UV] << 2 | VV[++UV] << 10)), ++UV;
          let MV = YV ? YV.subarray(eV.y, eV.y + eV.m) : new xV(eV.m),
            zV = MV.length - AV;
          if (zV < 0 && nV(0), 0 == wV) MV.set(VV.subarray(UV, UV += AV), zV);
          else if (1 == wV) pV(MV, VV[UV++], zV);
          else {
            let YV = eV.h;
            if (2 == wV) {
              const yV = ((VV, eV) => {
                let YV = 0,
                  UV = -1;
                const yV = new xV(292),
                  QV = VV[eV],
                  wV = yV.subarray(0, 256),
                  ZV = yV.subarray(256, 268),
                  kV = new JV(yV.buffer, 268);
                if (QV < 128) {
                  const [xV, JV] = rV(VV, eV + 1, 6), YV = xV << 3, yV = VV[eV += QV];
                  yV || nV(0);
                  let pV = 0,
                    ZV = 0,
                    kV = JV.b,
                    bV = kV,
                    EV = (++eV << 3) - 8 + vV(yV);
                  for (; UV > 254 && nV(0), EV -= kV, !(EV < YV);) {
                    let eV = EV >> 3;
                    if (pV += (VV[eV] | VV[eV + 1] << 8) >> (7 & EV) & (1 << kV) - 1, wV[++UV] = JV.s[pV], EV -= bV, EV < YV) break;
                    eV = EV >> 3, ZV += (VV[eV] | VV[eV + 1] << 8) >> (7 & EV) & (1 << bV) - 1, wV[++UV] = JV.s[ZV], kV = JV.n[pV], pV = JV.t[pV], bV = JV.n[ZV], ZV = JV.t[ZV]
                  }++UV > 255 && nV(0)
                } else {
                  for (UV = QV - 127; YV < UV; YV += 2) {
                    const xV = VV[++eV];
                    wV[YV] = xV >> 4, wV[YV + 1] = 15 & xV
                  }++eV
                }
                let bV = 0;
                for (YV = 0; YV < UV; ++YV) {
                  const VV = wV[YV];
                  VV > 11 && nV(0), bV += VV && 1 << VV - 1
                }
                const EV = vV(bV) + 1,
                  BV = 1 << EV,
                  jV = BV - bV;
                for (jV & jV - 1 && nV(0), wV[UV++] = vV(jV) + 1, YV = 0; YV < UV; ++YV) {
                  const VV = wV[YV];
                  ++ZV[wV[YV] = VV && EV + 1 - VV]
                }
                const qV = new xV(BV << 1),
                  tV = qV.subarray(0, BV),
                  FV = qV.subarray(BV);
                for (kV[EV] = 0, YV = EV; YV > 0; --YV) {
                  const VV = kV[YV];
                  pV(FV, YV, VV, kV[YV - 1] = VV + ZV[YV] * (1 << EV - YV))
                }
                for (kV[0] != BV && nV(0), YV = 0; YV < UV; ++YV) {
                  const VV = wV[YV];
                  if (VV) {
                    const eV = kV[VV];
                    pV(tV, YV, eV, kV[VV] = eV + (1 << EV - VV))
                  }
                }
                return [eV, {
                  n: FV,
                  b: EV,
                  s: tV
                }]
              })(VV, UV);
              NV += UV - (UV = yV[0]), eV.h = YV = yV[1]
            } else YV || nV(0);
            (XV ? PV : TV)(VV.subarray(UV, UV += NV), MV.subarray(zV), YV)
          }
          let GV = VV[UV++];
          if (GV) {
            255 == GV ? GV = 32512 + (VV[UV++] | VV[UV++] << 8) : GV > 127 && (GV = GV - 128 << 8 | VV[UV++]);
            const pV = VV[UV++];
            3 & pV && nV(0);
            const QV = [bV, EV, kV];
            for (let YV = 2; YV > -1; --YV) {
              const yV = pV >> 2 + (YV << 1) & 3;
              if (1 == yV) {
                const eV = new xV([0, 0, VV[UV++]]);
                QV[YV] = {
                  s: eV.subarray(2, 3),
                  n: eV.subarray(0, 1),
                  t: new JV(eV.buffer, 0, 1),
                  b: 0
                }
              } else 2 == yV ? [UV, QV[YV]] = rV(VV, UV, 9 - (1 & YV)) : 3 == yV && (eV.t || nV(0), QV[YV] = eV.t[YV])
            }
            const [wV, ZV, TV] = eV.t = QV, PV = VV[BV - 1];
            PV || nV(0);
            let AV = (BV << 3) - 8 + vV(PV) - TV.b,
              NV = AV >> 3,
              XV = 0,
              WV = (VV[NV] | VV[NV + 1] << 8) >> (7 & AV) & (1 << TV.b) - 1;
            NV = (AV -= ZV.b) >> 3;
            let RV = (VV[NV] | VV[NV + 1] << 8) >> (7 & AV) & (1 << ZV.b) - 1;
            NV = (AV -= wV.b) >> 3;
            let gV = (VV[NV] | VV[NV + 1] << 8) >> (7 & AV) & (1 << wV.b) - 1;
            for (++GV; --GV;) {
              const xV = TV.s[WV],
                JV = TV.n[WV],
                YV = wV.s[gV],
                UV = wV.n[gV],
                yV = ZV.s[RV],
                pV = ZV.n[RV];
              NV = (AV -= yV) >> 3;
              const QV = 1 << yV;
              let vV = QV + ((VV[NV] | VV[NV + 1] << 8 | VV[NV + 2] << 16 | VV[NV + 3] << 24) >>> (7 & AV) & QV - 1);
              NV = (AV -= tV[YV]) >> 3;
              let rV = FV[YV] + ((VV[NV] | VV[NV + 1] << 8 | VV[NV + 2] << 16) >> (7 & AV) & (1 << tV[YV]) - 1);
              NV = (AV -= jV[xV]) >> 3;
              const kV = qV[xV] + ((VV[NV] | VV[NV + 1] << 8 | VV[NV + 2] << 16) >> (7 & AV) & (1 << jV[xV]) - 1);
              if ((AV < 0 || zV + kV > MV.length || XV + kV + rV > MV.length) && nV(0), NV = (AV -= JV) >> 3, WV = TV.t[WV] + ((VV[NV] | VV[NV + 1] << 8) >> (7 & AV) & (1 << JV) - 1), NV = (AV -= UV) >> 3, gV = wV.t[gV] + ((VV[NV] | VV[NV + 1] << 8) >> (7 & AV) & (1 << UV) - 1), NV = (AV -= pV) >> 3, RV = ZV.t[RV] + ((VV[NV] | VV[NV + 1] << 8) >> (7 & AV) & (1 << pV) - 1), vV > 3) eV.o[2] = eV.o[1], eV.o[1] = eV.o[0], eV.o[0] = vV -= 3;
              else {
                const VV = vV - (0 != kV);
                VV ? (vV = 3 == VV ? eV.o[0] - 1 : eV.o[VV], VV > 1 && (eV.o[2] = eV.o[1]), eV.o[1] = eV.o[0], eV.o[0] = vV) : vV = eV.o[0]
              }
              for (let VV = 0; VV < kV; ++VV) MV[XV + VV] = MV[zV + VV];
              XV += kV, zV += kV;
              let bV = XV - vV;
              if (bV < 0) {
                let VV = -bV;
                const xV = eV.e + bV;
                xV < 0 && nV(4), VV > rV && (VV = rV);
                for (let JV = 0; JV < VV; ++JV) MV[XV + JV] = eV.w[xV + JV];
                XV += VV, rV -= VV, bV = 0
              }
              for (let VV = 0; VV < rV; ++VV) MV[XV + VV] = MV[bV + VV];
              XV += rV
            }
            if (XV != zV)
              for (; zV < MV.length;) MV[XV++] = MV[zV++];
            else XV = MV.length;
            YV ? eV.y += XV : MV = yV(MV, 0, XV)
          } else if (YV) {
            if (eV.y += AV, zV)
              for (let VV = 0; VV < AV; ++VV) MV[VV] = MV[zV + VV]
          } else zV && (MV = yV(MV, zV));
          return eV.b = BV, MV
        }
        nV(2)
      }
    };
  class NV {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    hn = 0;
    needed = 18;
    size;
    constructor(VV) {
      this.size = VV
    }
    push(VV) {
      if (this.done) return;
      if (this.parts.push(VV), this.hn += VV.length, this.hn < this.needed) return;
      const eV = ((VV, eV) => {
        if (1 == VV.length) return VV[0];
        const JV = new xV(eV);
        for (let xV = 0, YV = 0; xV < VV.length; ++xV) {
          const eV = VV[xV];
          JV.set(eV, YV), YV += eV.length
        }
        return JV
      })(this.parts, this.hn);
      let JV = this.st;
      if (!JV) {
        const VV = ZV(eV, new xV(0));
        "number" != typeof VV && VV.u === this.size || nV(0, `not a zstd frame of ${this.size} bytes`), JV = this.st = ZV(eV, 1), JV.e = 0, this.output = JV.w
      }
      for (;;) {
        const VV = eV.length - JV.b;
        if (VV < 3) {
          this.needed = 3;
          break
        }
        const xV = eV[JV.b],
          YV = xV >> 1 & 3;
        3 == YV && nV(2);
        const UV = xV >> 3 | eV[JV.b + 1] << 5 | eV[JV.b + 2] << 13;
        UV > JV.m && nV(0), 0 == YV && JV.y + UV > JV.u && nV(0);
        const yV = 1 == YV ? 4 : 3 + UV;
        if (VV < yV) {
          this.needed = yV;
          break
        }
        if (AV(eV, JV, JV.w) || nV(5), JV.e = JV.y, (JV.y > JV.u || JV.l && JV.y != JV.u) && nV(0), JV.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = JV.y;
      const YV = eV.subarray(JV.b);
      this.parts = YV.length ? [YV] : [], this.hn = YV.length, JV.b = 0
    }
  }
  class XV {
    post;
    href = "";
    BZ = null;
    given = 0;
    stopped = !1;
    constructor(VV) {
      this.post = VV
    }
    take(eV) {
      if (!this.stopped) try {
        this.answer(eV)
      } catch (xV) {
        this.stop(xV instanceof RangeError ? `out of memory decoding ${this.href}: ${VV(xV)}` : `${this.href} did not decode: ${VV(xV)}`)
      }
    }
    answer(VV) {
      if (null === this.BZ) {
        const [eV, xV] = VV;
        return this.href = eV, void(this.BZ = new NV(xV))
      }
      if (null === VV) return void this.stop(`${this.href} ended before its module did`);
      const eV = this.BZ;
      eV.push(VV);
      const {
        output: xV,
        decoded: JV
      } = eV;
      if (null !== xV && JV > this.given) {
        const VV = xV.slice(this.given, JV).buffer;
        this.given = JV, this.post(VV, [VV])
      }
      eV.done && this.stop(!0)
    }
    stop(VV) {
      this.stopped = !0, this.post(VV)
    }
  }
  const MV = globalThis.WorkerGlobalScope;
  if (void 0 !== MV && globalThis instanceof MV) {
    const VV = globalThis,
      eV = new XV((function(eV) {
        let xV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        VV.postMessage(eV, xV)
      }));
    VV.addEventListener("message", (VV => {
      let {
        data: xV
      } = VV;
      eV.take(xV)
    }))
  }
})();