(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var UU = __webpack_require__.u,
        XU = __webpack_require__.e,
        zU = {},
        cU = {};
      __webpack_require__.u = function(XU) {
        return UU(XU) + (zU.hasOwnProperty(XU) ? "?" + zU[XU] : "")
      }, __webpack_require__.e = function(yU) {
        return XU(yU).catch((function(XU) {
          var QU = cU.hasOwnProperty(yU) ? cU[yU] : 4;
          if (QU < 1) {
            var AU = UU(yU);
            if (XU.message = "Loading chunk " + yU + " failed after 4 retries.\n(" + AU + ")", XU.request = AU, zU[yU] = "cache-bust=" + Date.now(), setTimeout((function() {
                delete cU[yU]
              }), 0), "CSS_CHUNK_LOAD_FAILED" === XU.code) {
              var FU = __webpack_require__.miniCssF(yU);
              XU.message = XU.message.replace("Loading chunk", "Loading CSS chunk").replace(AU, FU), XU.request = FU
            }
            throw XU
          }
          return new Promise((function(UU) {
            var XU = 4 - QU + 1;
            setTimeout((function() {
              var XU = "cache-bust=" + Date.now();
              zU[yU] = XU, cU[yU] = QU - 1, UU(__webpack_require__.e(yU))
            }), function(UU) {
              return 500 * Math.pow(2, UU)
            }(XU))
          }))
        }))
      }
    }
  })();

  function UU(UU) {
    return UU instanceof Error ? UU.message : String(UU)
  }
  const XU = ArrayBuffer,
    zU = Uint8Array,
    cU = Uint16Array,
    yU = Int16Array,
    QU = Int32Array,
    AU = (UU, XU, cU) => {
      if (zU.prototype.slice) return zU.prototype.slice.call(UU, XU, cU);
      (null == XU || XU < 0) && (XU = 0), (null == cU || cU > UU.length) && (cU = UU.length);
      const yU = new zU(cU - XU);
      return yU.set(UU.subarray(XU, cU)), yU
    },
    FU = (UU, XU, cU, yU) => {
      if (zU.prototype.fill) return zU.prototype.fill.call(UU, XU, cU, yU);
      for ((null == cU || cU < 0) && (cU = 0), (null == yU || yU > UU.length) && (yU = UU.length); cU < yU; ++cU) UU[cU] = XU;
      return UU
    },
    oU = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    DU = (UU, XU, zU) => {
      const cU = new Error(XU || oU[UU]);
      if (cU.code = UU, Error.captureStackTrace && Error.captureStackTrace(cU, DU), !zU) throw cU;
      return cU
    },
    EU = (UU, XU, zU) => {
      let cU = 0,
        yU = 0;
      for (; cU < zU; ++cU) yU |= UU[XU++] << (cU << 3);
      return yU
    },
    YU = (UU, XU) => {
      const cU = UU[0] | UU[1] << 8 | UU[2] << 16;
      if (3126568 == cU && 253 == UU[3]) {
        const cU = UU[4],
          yU = cU >> 5 & 1,
          AU = cU >> 2 & 1,
          FU = 3 & cU,
          oU = cU >> 6;
        8 & cU && DU(0);
        let YU = 6 - yU;
        const NU = 3 == FU ? 4 : FU,
          IU = EU(UU, YU, NU);
        YU += NU;
        const pU = oU ? 1 << oU : yU,
          aU = EU(UU, YU, pU) + (1 == oU && 256);
        let tU = aU;
        if (!yU) {
          const XU = 1 << 10 + (UU[5] >> 3);
          tU = XU + (XU >> 3) * (7 & UU[5])
        }
        tU > 2145386496 && DU(1);
        const gU = new zU((1 == XU ? aU || tU : XU ? 0 : tU) + 12);
        return gU[0] = 1, gU[4] = 4, gU[8] = 8, {
          b: YU + pU,
          y: 0,
          l: 0,
          d: IU,
          w: XU && 1 != XU ? XU : gU.subarray(12),
          e: tU,
          o: new QU(gU.buffer, 0, 3),
          u: aU,
          c: AU,
          m: Math.min(131072, tU)
        }
      }
      if (25481893 == (cU >> 4 | UU[3] << 20)) return 8 + (((yU = UU)[AU = 4] | yU[AU + 1] << 8 | yU[AU + 2] << 16 | yU[AU + 3] << 24) >>> 0);
      var yU, AU;
      DU(0)
    },
    NU = UU => {
      let XU = 0;
      for (; 1 << XU <= UU; ++XU);
      return XU - 1
    },
    IU = (UU, QU, AU) => {
      let FU = 4 + (QU << 3);
      const oU = 5 + (15 & UU[QU]);
      oU > AU && DU(3);
      const EU = 1 << oU;
      let YU = EU,
        IU = -1,
        pU = -1,
        aU = -1,
        tU = EU;
      const gU = new XU(512 + (EU << 2)),
        kU = new yU(gU, 0, 256),
        GU = new cU(gU, 0, 256),
        BU = new cU(gU, 512, EU),
        ZU = 512 + (EU << 1),
        RU = new zU(gU, ZU, EU),
        PU = new zU(gU, ZU + EU);
      for (; IU < 255 && YU > 0;) {
        const XU = NU(YU + 1),
          zU = FU >> 3,
          cU = (1 << XU + 1) - 1;
        let yU = (UU[zU] | UU[zU + 1] << 8 | UU[zU + 2] << 16) >> (7 & FU) & cU;
        const QU = (1 << XU) - 1,
          AU = cU - YU - 1,
          oU = yU & QU;
        if (oU < AU ? (FU += XU, yU = oU) : (FU += XU + 1, yU > QU && (yU -= AU)), kU[++IU] = --yU, -1 == yU ? (YU += yU, RU[--tU] = IU) : YU -= yU, !yU)
          do {
            const XU = FU >> 3;
            pU = (UU[XU] | UU[XU + 1] << 8) >> (7 & FU) & 3, FU += 2, IU += pU
          } while (3 == pU)
      }(IU > 255 || YU) && DU(0);
      let WU = 0;
      const dU = (EU >> 1) + (EU >> 3) + 3,
        LU = EU - 1;
      for (let XU = 0; XU <= IU; ++XU) {
        const UU = kU[XU];
        if (UU < 1) GU[XU] = -UU;
        else
          for (aU = 0; aU < UU; ++aU) {
            RU[WU] = XU;
            do {
              WU = WU + dU & LU
            } while (WU >= tU)
          }
      }
      for (WU && DU(0), aU = 0; aU < EU; ++aU) {
        const UU = GU[RU[aU]]++,
          XU = PU[aU] = oU - NU(UU);
        BU[aU] = (UU << XU) - EU
      }
      return [FU + 7 >> 3, {
        b: oU,
        s: RU,
        n: PU,
        t: BU
      }]
    },
    pU = IU(new zU([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    aU = IU(new zU([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    tU = IU(new zU([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    gU = (UU, XU) => {
      const zU = UU.length,
        cU = new QU(zU);
      for (let yU = 0; yU < zU; ++yU) cU[yU] = XU, XU += 1 << UU[yU];
      return cU
    },
    kU = new zU(new QU([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    GU = gU(kU, 0),
    BU = new zU(new QU([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    ZU = gU(BU, 3),
    RU = (UU, XU, zU) => {
      const cU = UU.length,
        yU = XU.length,
        QU = UU[cU - 1],
        AU = (1 << zU.b) - 1,
        FU = -zU.b;
      QU || DU(0);
      let oU = 0,
        EU = zU.b,
        YU = (cU << 3) - 8 + NU(QU) - EU,
        IU = -1;
      for (; YU > FU && IU < yU;) {
        const cU = YU >> 3;
        oU = (oU << EU | (UU[cU] | UU[cU + 1] << 8 | UU[cU + 2] << 16) >> (7 & YU)) & AU, XU[++IU] = zU.s[oU], YU -= EU = zU.n[oU]
      }
      YU == FU && IU + 1 == yU || DU(0)
    },
    PU = (UU, XU, zU) => {
      let cU = 6;
      const yU = XU.length + 3 >> 2,
        QU = yU << 1,
        AU = yU + QU;
      RU(UU.subarray(cU, cU += UU[0] | UU[1] << 8), XU.subarray(0, yU), zU), RU(UU.subarray(cU, cU += UU[2] | UU[3] << 8), XU.subarray(yU, QU), zU), RU(UU.subarray(cU, cU += UU[4] | UU[5] << 8), XU.subarray(QU, AU), zU), RU(UU.subarray(cU), XU.subarray(AU), zU)
    },
    WU = (UU, XU, yU) => {
      let QU = XU.b;
      const oU = UU[QU],
        EU = oU >> 1 & 3;
      XU.l = 1 & oU;
      const YU = oU >> 3 | UU[QU + 1] << 5 | UU[QU + 2] << 13,
        gU = (QU += 3) + YU;
      if (1 == EU) {
        if (QU >= UU.length) return;
        return XU.b = QU + 1, yU ? (FU(yU, UU[QU], XU.y, XU.y += YU), yU) : FU(new zU(YU), UU[QU])
      }
      if (!(gU > UU.length)) {
        if (0 == EU) return XU.b = gU, yU ? (yU.set(UU.subarray(QU, gU), XU.y), XU.y += YU, yU) : AU(UU, QU, gU);
        if (2 == EU) {
          const oU = UU[QU],
            EU = 3 & oU,
            YU = oU >> 2 & 3;
          let WU = oU >> 4,
            dU = 0,
            LU = 0;
          EU < 2 ? 1 & YU ? WU |= UU[++QU] << 4 | (2 & YU && UU[++QU] << 12) : WU = oU >> 3 : (LU = YU, YU < 2 ? (WU |= (63 & UU[++QU]) << 4, dU = UU[QU] >> 6 | UU[++QU] << 2) : 2 == YU ? (WU |= UU[++QU] << 4 | (3 & UU[++QU]) << 12, dU = UU[QU] >> 2 | UU[++QU] << 6) : (WU |= UU[++QU] << 4 | (63 & UU[++QU]) << 12, dU = UU[QU] >> 6 | UU[++QU] << 2 | UU[++QU] << 10)), ++QU;
          let eU = yU ? yU.subarray(XU.y, XU.y + XU.m) : new zU(XU.m),
            CU = eU.length - WU;
          if (CU < 0 && DU(0), 0 == EU) eU.set(UU.subarray(QU, QU += WU), CU);
          else if (1 == EU) FU(eU, UU[QU++], CU);
          else {
            let yU = XU.h;
            if (2 == EU) {
              const AU = ((UU, XU) => {
                let yU = 0,
                  QU = -1;
                const AU = new zU(292),
                  oU = UU[XU],
                  EU = AU.subarray(0, 256),
                  YU = AU.subarray(256, 268),
                  pU = new cU(AU.buffer, 268);
                if (oU < 128) {
                  const [zU, cU] = IU(UU, XU + 1, 6), yU = zU << 3, AU = UU[XU += oU];
                  AU || DU(0);
                  let FU = 0,
                    YU = 0,
                    pU = cU.b,
                    aU = pU,
                    tU = (++XU << 3) - 8 + NU(AU);
                  for (; QU > 254 && DU(0), tU -= pU, !(tU < yU);) {
                    let XU = tU >> 3;
                    if (FU += (UU[XU] | UU[XU + 1] << 8) >> (7 & tU) & (1 << pU) - 1, EU[++QU] = cU.s[FU], tU -= aU, tU < yU) break;
                    XU = tU >> 3, YU += (UU[XU] | UU[XU + 1] << 8) >> (7 & tU) & (1 << aU) - 1, EU[++QU] = cU.s[YU], pU = cU.n[FU], FU = cU.t[FU], aU = cU.n[YU], YU = cU.t[YU]
                  }++QU > 255 && DU(0)
                } else {
                  for (QU = oU - 127; yU < QU; yU += 2) {
                    const zU = UU[++XU];
                    EU[yU] = zU >> 4, EU[yU + 1] = 15 & zU
                  }++XU
                }
                let aU = 0;
                for (yU = 0; yU < QU; ++yU) {
                  const UU = EU[yU];
                  UU > 11 && DU(0), aU += UU && 1 << UU - 1
                }
                const tU = NU(aU) + 1,
                  gU = 1 << tU,
                  kU = gU - aU;
                for (kU & kU - 1 && DU(0), EU[QU++] = NU(kU) + 1, yU = 0; yU < QU; ++yU) {
                  const UU = EU[yU];
                  ++YU[EU[yU] = UU && tU + 1 - UU]
                }
                const GU = new zU(gU << 1),
                  BU = GU.subarray(0, gU),
                  ZU = GU.subarray(gU);
                for (pU[tU] = 0, yU = tU; yU > 0; --yU) {
                  const UU = pU[yU];
                  FU(ZU, yU, UU, pU[yU - 1] = UU + YU[yU] * (1 << tU - yU))
                }
                for (pU[0] != gU && DU(0), yU = 0; yU < QU; ++yU) {
                  const UU = EU[yU];
                  if (UU) {
                    const XU = pU[UU];
                    FU(BU, yU, XU, pU[UU] = XU + (1 << tU - UU))
                  }
                }
                return [XU, {
                  n: ZU,
                  b: tU,
                  s: BU
                }]
              })(UU, QU);
              dU += QU - (QU = AU[0]), XU.h = yU = AU[1]
            } else yU || DU(0);
            (LU ? PU : RU)(UU.subarray(QU, QU += dU), eU.subarray(CU), yU)
          }
          let wU = UU[QU++];
          if (wU) {
            255 == wU ? wU = 32512 + (UU[QU++] | UU[QU++] << 8) : wU > 127 && (wU = wU - 128 << 8 | UU[QU++]);
            const FU = UU[QU++];
            3 & FU && DU(0);
            const oU = [aU, tU, pU];
            for (let yU = 2; yU > -1; --yU) {
              const AU = FU >> 2 + (yU << 1) & 3;
              if (1 == AU) {
                const XU = new zU([0, 0, UU[QU++]]);
                oU[yU] = {
                  s: XU.subarray(2, 3),
                  n: XU.subarray(0, 1),
                  t: new cU(XU.buffer, 0, 1),
                  b: 0
                }
              } else 2 == AU ? [QU, oU[yU]] = IU(UU, QU, 9 - (1 & yU)) : 3 == AU && (XU.t || DU(0), oU[yU] = XU.t[yU])
            }
            const [EU, YU, RU] = XU.t = oU, PU = UU[gU - 1];
            PU || DU(0);
            let WU = (gU << 3) - 8 + NU(PU) - RU.b,
              dU = WU >> 3,
              LU = 0,
              qU = (UU[dU] | UU[dU + 1] << 8) >> (7 & WU) & (1 << RU.b) - 1;
            dU = (WU -= YU.b) >> 3;
            let OU = (UU[dU] | UU[dU + 1] << 8) >> (7 & WU) & (1 << YU.b) - 1;
            dU = (WU -= EU.b) >> 3;
            let SU = (UU[dU] | UU[dU + 1] << 8) >> (7 & WU) & (1 << EU.b) - 1;
            for (++wU; --wU;) {
              const zU = RU.s[qU],
                cU = RU.n[qU],
                yU = EU.s[SU],
                QU = EU.n[SU],
                AU = YU.s[OU],
                FU = YU.n[OU];
              dU = (WU -= AU) >> 3;
              const oU = 1 << AU;
              let NU = oU + ((UU[dU] | UU[dU + 1] << 8 | UU[dU + 2] << 16 | UU[dU + 3] << 24) >>> (7 & WU) & oU - 1);
              dU = (WU -= BU[yU]) >> 3;
              let IU = ZU[yU] + ((UU[dU] | UU[dU + 1] << 8 | UU[dU + 2] << 16) >> (7 & WU) & (1 << BU[yU]) - 1);
              dU = (WU -= kU[zU]) >> 3;
              const pU = GU[zU] + ((UU[dU] | UU[dU + 1] << 8 | UU[dU + 2] << 16) >> (7 & WU) & (1 << kU[zU]) - 1);
              if ((WU < 0 || CU + pU > eU.length || LU + pU + IU > eU.length) && DU(0), dU = (WU -= cU) >> 3, qU = RU.t[qU] + ((UU[dU] | UU[dU + 1] << 8) >> (7 & WU) & (1 << cU) - 1), dU = (WU -= QU) >> 3, SU = EU.t[SU] + ((UU[dU] | UU[dU + 1] << 8) >> (7 & WU) & (1 << QU) - 1), dU = (WU -= FU) >> 3, OU = YU.t[OU] + ((UU[dU] | UU[dU + 1] << 8) >> (7 & WU) & (1 << FU) - 1), NU > 3) XU.o[2] = XU.o[1], XU.o[1] = XU.o[0], XU.o[0] = NU -= 3;
              else {
                const UU = NU - (0 != pU);
                UU ? (NU = 3 == UU ? XU.o[0] - 1 : XU.o[UU], UU > 1 && (XU.o[2] = XU.o[1]), XU.o[1] = XU.o[0], XU.o[0] = NU) : NU = XU.o[0]
              }
              for (let UU = 0; UU < pU; ++UU) eU[LU + UU] = eU[CU + UU];
              LU += pU, CU += pU;
              let aU = LU - NU;
              if (aU < 0) {
                let UU = -aU;
                const zU = XU.e + aU;
                zU < 0 && DU(4), UU > IU && (UU = IU);
                for (let cU = 0; cU < UU; ++cU) eU[LU + cU] = XU.w[zU + cU];
                LU += UU, IU -= UU, aU = 0
              }
              for (let UU = 0; UU < IU; ++UU) eU[LU + UU] = eU[aU + UU];
              LU += IU
            }
            if (LU != CU)
              for (; CU < eU.length;) eU[LU++] = eU[CU++];
            else LU = eU.length;
            yU ? XU.y += LU : eU = AU(eU, 0, LU)
          } else if (yU) {
            if (XU.y += WU, CU)
              for (let UU = 0; UU < WU; ++UU) eU[UU] = eU[CU + UU]
          } else CU && (eU = AU(eU, CU));
          return XU.b = gU, eU
        }
        DU(2)
      }
    };
  class dU {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    uD = 0;
    needed = 18;
    size;
    constructor(UU) {
      this.size = UU
    }
    push(UU) {
      if (this.done) return;
      if (this.parts.push(UU), this.uD += UU.length, this.uD < this.needed) return;
      const XU = ((UU, XU) => {
        if (1 == UU.length) return UU[0];
        const cU = new zU(XU);
        for (let zU = 0, yU = 0; zU < UU.length; ++zU) {
          const XU = UU[zU];
          cU.set(XU, yU), yU += XU.length
        }
        return cU
      })(this.parts, this.uD);
      let cU = this.st;
      if (!cU) {
        const UU = YU(XU, new zU(0));
        "number" != typeof UU && UU.u === this.size || DU(0, `not a zstd frame of ${this.size} bytes`), cU = this.st = YU(XU, 1), cU.e = 0, this.output = cU.w
      }
      for (;;) {
        const UU = XU.length - cU.b;
        if (UU < 3) {
          this.needed = 3;
          break
        }
        const zU = XU[cU.b],
          yU = zU >> 1 & 3;
        3 == yU && DU(2);
        const QU = zU >> 3 | XU[cU.b + 1] << 5 | XU[cU.b + 2] << 13;
        QU > cU.m && DU(0), 0 == yU && cU.y + QU > cU.u && DU(0);
        const AU = 1 == yU ? 4 : 3 + QU;
        if (UU < AU) {
          this.needed = AU;
          break
        }
        if (WU(XU, cU, cU.w) || DU(5), cU.e = cU.y, (cU.y > cU.u || cU.l && cU.y != cU.u) && DU(0), cU.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = cU.y;
      const yU = XU.subarray(cU.b);
      this.parts = yU.length ? [yU] : [], this.uD = yU.length, cU.b = 0
    }
  }
  class LU {
    post;
    href = "";
    DY = null;
    given = 0;
    stopped = !1;
    constructor(UU) {
      this.post = UU
    }
    take(XU) {
      if (!this.stopped) try {
        this.answer(XU)
      } catch (zU) {
        this.stop(zU instanceof RangeError ? `out of memory decoding ${this.href}: ${UU(zU)}` : `${this.href} did not decode: ${UU(zU)}`)
      }
    }
    answer(UU) {
      if (null === this.DY) {
        const [XU, zU] = UU;
        return this.href = XU, void(this.DY = new dU(zU))
      }
      if (null === UU) return void this.stop(`${this.href} ended before its module did`);
      const XU = this.DY;
      XU.push(UU);
      const {
        output: zU,
        decoded: cU
      } = XU;
      if (null !== zU && cU > this.given) {
        const UU = zU.slice(this.given, cU).buffer;
        this.given = cU, this.post(UU, [UU])
      }
      XU.done && this.stop(!0)
    }
    stop(UU) {
      this.stopped = !0, this.post(UU)
    }
  }
  const eU = globalThis.WorkerGlobalScope;
  if (void 0 !== eU && globalThis instanceof eU) {
    const UU = globalThis,
      XU = new LU((function(XU) {
        let zU = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        UU.postMessage(XU, zU)
      }));
    UU.addEventListener("message", (UU => {
      let {
        data: zU
      } = UU;
      XU.take(zU)
    }))
  }
})();