(() => {
  (() => {
    if ("undefined" !== typeof __webpack_require__) {
      var CC = __webpack_require__.u,
        zC = __webpack_require__.e,
        ZC = {},
        QC = {};
      __webpack_require__.u = function(zC) {
        return CC(zC) + (ZC.hasOwnProperty(zC) ? "?" + ZC[zC] : "")
      }, __webpack_require__.e = function(wC) {
        return zC(wC).catch((function(zC) {
          var bC = QC.hasOwnProperty(wC) ? QC[wC] : 4;
          if (bC < 1) {
            var nC = CC(wC);
            throw zC.message = "Loading chunk " + wC + " failed after 4 retries.\n(" + nC + ")", zC.request = nC, ZC[wC] = "cache-bust=" + Date.now(), setTimeout((function() {
              delete QC[wC]
            }), 0), zC
          }
          return new Promise((function(CC) {
            var zC = 4 - bC + 1;
            setTimeout((function() {
              var zC = "cache-bust=" + Date.now();
              ZC[wC] = zC, QC[wC] = bC - 1, CC(__webpack_require__.e(wC))
            }), function(CC) {
              return 500 * Math.pow(2, CC)
            }(zC))
          }))
        }))
      }
    }
  })();

  function CC(CC) {
    return CC instanceof Error ? CC.message : String(CC)
  }
  const zC = ArrayBuffer,
    ZC = Uint8Array,
    QC = Uint16Array,
    wC = Int16Array,
    bC = Int32Array,
    nC = (CC, zC, QC) => {
      if (ZC.prototype.slice) return ZC.prototype.slice.call(CC, zC, QC);
      (null == zC || zC < 0) && (zC = 0), (null == QC || QC > CC.length) && (QC = CC.length);
      const wC = new ZC(QC - zC);
      return wC.set(CC.subarray(zC, QC)), wC
    },
    fC = (CC, zC, QC, wC) => {
      if (ZC.prototype.fill) return ZC.prototype.fill.call(CC, zC, QC, wC);
      for ((null == QC || QC < 0) && (QC = 0), (null == wC || wC > CC.length) && (wC = CC.length); QC < wC; ++QC) CC[QC] = zC;
      return CC
    },
    oC = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
    qC = (CC, zC, ZC) => {
      const QC = new Error(zC || oC[CC]);
      if (QC.code = CC, Error.captureStackTrace && Error.captureStackTrace(QC, qC), !ZC) throw QC;
      return QC
    },
    FC = (CC, zC, ZC) => {
      let QC = 0,
        wC = 0;
      for (; QC < ZC; ++QC) wC |= CC[zC++] << (QC << 3);
      return wC
    },
    WC = (CC, zC) => {
      const QC = CC[0] | CC[1] << 8 | CC[2] << 16;
      if (3126568 == QC && 253 == CC[3]) {
        const QC = CC[4],
          wC = QC >> 5 & 1,
          nC = QC >> 2 & 1,
          fC = 3 & QC,
          oC = QC >> 6;
        8 & QC && qC(0);
        let WC = 6 - wC;
        const NC = 3 == fC ? 4 : fC,
          MC = FC(CC, WC, NC);
        WC += NC;
        const gC = oC ? 1 << oC : wC,
          SC = FC(CC, WC, gC) + (1 == oC && 256);
        let pC = SC;
        if (!wC) {
          const zC = 1 << 10 + (CC[5] >> 3);
          pC = zC + (zC >> 3) * (7 & CC[5])
        }
        pC > 2145386496 && qC(1);
        const PC = new ZC((1 == zC ? SC || pC : zC ? 0 : pC) + 12);
        return PC[0] = 1, PC[4] = 4, PC[8] = 8, {
          b: WC + gC,
          y: 0,
          l: 0,
          d: MC,
          w: zC && 1 != zC ? zC : PC.subarray(12),
          e: pC,
          o: new bC(PC.buffer, 0, 3),
          u: SC,
          c: nC,
          m: Math.min(131072, pC)
        }
      }
      if (25481893 == (QC >> 4 | CC[3] << 20)) return 8 + (((wC = CC)[nC = 4] | wC[nC + 1] << 8 | wC[nC + 2] << 16 | wC[nC + 3] << 24) >>> 0);
      var wC, nC;
      qC(0)
    },
    NC = CC => {
      let zC = 0;
      for (; 1 << zC <= CC; ++zC);
      return zC - 1
    },
    MC = (CC, bC, nC) => {
      let fC = 4 + (bC << 3);
      const oC = 5 + (15 & CC[bC]);
      oC > nC && qC(3);
      const FC = 1 << oC;
      let WC = FC,
        MC = -1,
        gC = -1,
        SC = -1,
        pC = FC;
      const PC = new zC(512 + (FC << 2)),
        GC = new wC(PC, 0, 256),
        RC = new QC(PC, 0, 256),
        AC = new QC(PC, 512, FC),
        xC = 512 + (FC << 1),
        JC = new ZC(PC, xC, FC),
        IC = new ZC(PC, xC + FC);
      for (; MC < 255 && WC > 0;) {
        const zC = NC(WC + 1),
          ZC = fC >> 3,
          QC = (1 << zC + 1) - 1;
        let wC = (CC[ZC] | CC[ZC + 1] << 8 | CC[ZC + 2] << 16) >> (7 & fC) & QC;
        const bC = (1 << zC) - 1,
          nC = QC - WC - 1,
          oC = wC & bC;
        if (oC < nC ? (fC += zC, wC = oC) : (fC += zC + 1, wC > bC && (wC -= nC)), GC[++MC] = --wC, -1 == wC ? (WC += wC, JC[--pC] = MC) : WC -= wC, !wC)
          do {
            const zC = fC >> 3;
            gC = (CC[zC] | CC[zC + 1] << 8) >> (7 & fC) & 3, fC += 2, MC += gC
          } while (3 == gC)
      }(MC > 255 || WC) && qC(0);
      let iC = 0;
      const vC = (FC >> 1) + (FC >> 3) + 3,
        eC = FC - 1;
      for (let zC = 0; zC <= MC; ++zC) {
        const CC = GC[zC];
        if (CC < 1) RC[zC] = -CC;
        else
          for (SC = 0; SC < CC; ++SC) {
            JC[iC] = zC;
            do {
              iC = iC + vC & eC
            } while (iC >= pC)
          }
      }
      for (iC && qC(0), SC = 0; SC < FC; ++SC) {
        const CC = RC[JC[SC]]++,
          zC = IC[SC] = oC - NC(CC);
        AC[SC] = (CC << zC) - FC
      }
      return [fC + 7 >> 3, {
        b: oC,
        s: JC,
        n: IC,
        t: AC
      }]
    },
    gC = MC(new ZC([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
    SC = MC(new ZC([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
    pC = MC(new ZC([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
    PC = (CC, zC) => {
      const ZC = CC.length,
        QC = new bC(ZC);
      for (let wC = 0; wC < ZC; ++wC) QC[wC] = zC, zC += 1 << CC[wC];
      return QC
    },
    GC = new ZC(new bC([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
    RC = PC(GC, 0),
    AC = new ZC(new bC([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
    xC = PC(AC, 3),
    JC = (CC, zC, ZC) => {
      const QC = CC.length,
        wC = zC.length,
        bC = CC[QC - 1],
        nC = (1 << ZC.b) - 1,
        fC = -ZC.b;
      bC || qC(0);
      let oC = 0,
        FC = ZC.b,
        WC = (QC << 3) - 8 + NC(bC) - FC,
        MC = -1;
      for (; WC > fC && MC < wC;) {
        const QC = WC >> 3;
        oC = (oC << FC | (CC[QC] | CC[QC + 1] << 8 | CC[QC + 2] << 16) >> (7 & WC)) & nC, zC[++MC] = ZC.s[oC], WC -= FC = ZC.n[oC]
      }
      WC == fC && MC + 1 == wC || qC(0)
    },
    IC = (CC, zC, ZC) => {
      let QC = 6;
      const wC = zC.length + 3 >> 2,
        bC = wC << 1,
        nC = wC + bC;
      JC(CC.subarray(QC, QC += CC[0] | CC[1] << 8), zC.subarray(0, wC), ZC), JC(CC.subarray(QC, QC += CC[2] | CC[3] << 8), zC.subarray(wC, bC), ZC), JC(CC.subarray(QC, QC += CC[4] | CC[5] << 8), zC.subarray(bC, nC), ZC), JC(CC.subarray(QC), zC.subarray(nC), ZC)
    },
    iC = (CC, zC, wC) => {
      let bC = zC.b;
      const oC = CC[bC],
        FC = oC >> 1 & 3;
      zC.l = 1 & oC;
      const WC = oC >> 3 | CC[bC + 1] << 5 | CC[bC + 2] << 13,
        PC = (bC += 3) + WC;
      if (1 == FC) {
        if (bC >= CC.length) return;
        return zC.b = bC + 1, wC ? (fC(wC, CC[bC], zC.y, zC.y += WC), wC) : fC(new ZC(WC), CC[bC])
      }
      if (!(PC > CC.length)) {
        if (0 == FC) return zC.b = PC, wC ? (wC.set(CC.subarray(bC, PC), zC.y), zC.y += WC, wC) : nC(CC, bC, PC);
        if (2 == FC) {
          const oC = CC[bC],
            FC = 3 & oC,
            WC = oC >> 2 & 3;
          let iC = oC >> 4,
            vC = 0,
            eC = 0;
          FC < 2 ? 1 & WC ? iC |= CC[++bC] << 4 | (2 & WC && CC[++bC] << 12) : iC = oC >> 3 : (eC = WC, WC < 2 ? (iC |= (63 & CC[++bC]) << 4, vC = CC[bC] >> 6 | CC[++bC] << 2) : 2 == WC ? (iC |= CC[++bC] << 4 | (3 & CC[++bC]) << 12, vC = CC[bC] >> 2 | CC[++bC] << 6) : (iC |= CC[++bC] << 4 | (63 & CC[++bC]) << 12, vC = CC[bC] >> 6 | CC[++bC] << 2 | CC[++bC] << 10)), ++bC;
          let hC = wC ? wC.subarray(zC.y, zC.y + zC.m) : new ZC(zC.m),
            KC = hC.length - iC;
          if (KC < 0 && qC(0), 0 == FC) hC.set(CC.subarray(bC, bC += iC), KC);
          else if (1 == FC) fC(hC, CC[bC++], KC);
          else {
            let wC = zC.h;
            if (2 == FC) {
              const nC = ((CC, zC) => {
                let wC = 0,
                  bC = -1;
                const nC = new ZC(292),
                  oC = CC[zC],
                  FC = nC.subarray(0, 256),
                  WC = nC.subarray(256, 268),
                  gC = new QC(nC.buffer, 268);
                if (oC < 128) {
                  const [ZC, QC] = MC(CC, zC + 1, 6), wC = ZC << 3, nC = CC[zC += oC];
                  nC || qC(0);
                  let fC = 0,
                    WC = 0,
                    gC = QC.b,
                    SC = gC,
                    pC = (++zC << 3) - 8 + NC(nC);
                  for (; bC > 254 && qC(0), pC -= gC, !(pC < wC);) {
                    let zC = pC >> 3;
                    if (fC += (CC[zC] | CC[zC + 1] << 8) >> (7 & pC) & (1 << gC) - 1, FC[++bC] = QC.s[fC], pC -= SC, pC < wC) break;
                    zC = pC >> 3, WC += (CC[zC] | CC[zC + 1] << 8) >> (7 & pC) & (1 << SC) - 1, FC[++bC] = QC.s[WC], gC = QC.n[fC], fC = QC.t[fC], SC = QC.n[WC], WC = QC.t[WC]
                  }++bC > 255 && qC(0)
                } else {
                  for (bC = oC - 127; wC < bC; wC += 2) {
                    const ZC = CC[++zC];
                    FC[wC] = ZC >> 4, FC[wC + 1] = 15 & ZC
                  }++zC
                }
                let SC = 0;
                for (wC = 0; wC < bC; ++wC) {
                  const CC = FC[wC];
                  CC > 11 && qC(0), SC += CC && 1 << CC - 1
                }
                const pC = NC(SC) + 1,
                  PC = 1 << pC,
                  GC = PC - SC;
                for (GC & GC - 1 && qC(0), FC[bC++] = NC(GC) + 1, wC = 0; wC < bC; ++wC) {
                  const CC = FC[wC];
                  ++WC[FC[wC] = CC && pC + 1 - CC]
                }
                const RC = new ZC(PC << 1),
                  AC = RC.subarray(0, PC),
                  xC = RC.subarray(PC);
                for (gC[pC] = 0, wC = pC; wC > 0; --wC) {
                  const CC = gC[wC];
                  fC(xC, wC, CC, gC[wC - 1] = CC + WC[wC] * (1 << pC - wC))
                }
                for (gC[0] != PC && qC(0), wC = 0; wC < bC; ++wC) {
                  const CC = FC[wC];
                  if (CC) {
                    const zC = gC[CC];
                    fC(AC, wC, zC, gC[CC] = zC + (1 << pC - CC))
                  }
                }
                return [zC, {
                  n: xC,
                  b: pC,
                  s: AC
                }]
              })(CC, bC);
              vC += bC - (bC = nC[0]), zC.h = wC = nC[1]
            } else wC || qC(0);
            (eC ? IC : JC)(CC.subarray(bC, bC += vC), hC.subarray(KC), wC)
          }
          let YC = CC[bC++];
          if (YC) {
            255 == YC ? YC = 32512 + (CC[bC++] | CC[bC++] << 8) : YC > 127 && (YC = YC - 128 << 8 | CC[bC++]);
            const fC = CC[bC++];
            3 & fC && qC(0);
            const oC = [SC, pC, gC];
            for (let wC = 2; wC > -1; --wC) {
              const nC = fC >> 2 + (wC << 1) & 3;
              if (1 == nC) {
                const zC = new ZC([0, 0, CC[bC++]]);
                oC[wC] = {
                  s: zC.subarray(2, 3),
                  n: zC.subarray(0, 1),
                  t: new QC(zC.buffer, 0, 1),
                  b: 0
                }
              } else 2 == nC ? [bC, oC[wC]] = MC(CC, bC, 9 - (1 & wC)) : 3 == nC && (zC.t || qC(0), oC[wC] = zC.t[wC])
            }
            const [FC, WC, JC] = zC.t = oC, IC = CC[PC - 1];
            IC || qC(0);
            let iC = (PC << 3) - 8 + NC(IC) - JC.b,
              vC = iC >> 3,
              eC = 0,
              dC = (CC[vC] | CC[vC + 1] << 8) >> (7 & iC) & (1 << JC.b) - 1;
            vC = (iC -= WC.b) >> 3;
            let mC = (CC[vC] | CC[vC + 1] << 8) >> (7 & iC) & (1 << WC.b) - 1;
            vC = (iC -= FC.b) >> 3;
            let HC = (CC[vC] | CC[vC + 1] << 8) >> (7 & iC) & (1 << FC.b) - 1;
            for (++YC; --YC;) {
              const ZC = JC.s[dC],
                QC = JC.n[dC],
                wC = FC.s[HC],
                bC = FC.n[HC],
                nC = WC.s[mC],
                fC = WC.n[mC];
              vC = (iC -= nC) >> 3;
              const oC = 1 << nC;
              let NC = oC + ((CC[vC] | CC[vC + 1] << 8 | CC[vC + 2] << 16 | CC[vC + 3] << 24) >>> (7 & iC) & oC - 1);
              vC = (iC -= AC[wC]) >> 3;
              let MC = xC[wC] + ((CC[vC] | CC[vC + 1] << 8 | CC[vC + 2] << 16) >> (7 & iC) & (1 << AC[wC]) - 1);
              vC = (iC -= GC[ZC]) >> 3;
              const gC = RC[ZC] + ((CC[vC] | CC[vC + 1] << 8 | CC[vC + 2] << 16) >> (7 & iC) & (1 << GC[ZC]) - 1);
              if ((iC < 0 || KC + gC > hC.length || eC + gC + MC > hC.length) && qC(0), vC = (iC -= QC) >> 3, dC = JC.t[dC] + ((CC[vC] | CC[vC + 1] << 8) >> (7 & iC) & (1 << QC) - 1), vC = (iC -= bC) >> 3, HC = FC.t[HC] + ((CC[vC] | CC[vC + 1] << 8) >> (7 & iC) & (1 << bC) - 1), vC = (iC -= fC) >> 3, mC = WC.t[mC] + ((CC[vC] | CC[vC + 1] << 8) >> (7 & iC) & (1 << fC) - 1), NC > 3) zC.o[2] = zC.o[1], zC.o[1] = zC.o[0], zC.o[0] = NC -= 3;
              else {
                const CC = NC - (0 != gC);
                CC ? (NC = 3 == CC ? zC.o[0] - 1 : zC.o[CC], CC > 1 && (zC.o[2] = zC.o[1]), zC.o[1] = zC.o[0], zC.o[0] = NC) : NC = zC.o[0]
              }
              for (let CC = 0; CC < gC; ++CC) hC[eC + CC] = hC[KC + CC];
              eC += gC, KC += gC;
              let SC = eC - NC;
              if (SC < 0) {
                let CC = -SC;
                const ZC = zC.e + SC;
                ZC < 0 && qC(4), CC > MC && (CC = MC);
                for (let QC = 0; QC < CC; ++QC) hC[eC + QC] = zC.w[ZC + QC];
                eC += CC, MC -= CC, SC = 0
              }
              for (let CC = 0; CC < MC; ++CC) hC[eC + CC] = hC[SC + CC];
              eC += MC
            }
            if (eC != KC)
              for (; KC < hC.length;) hC[eC++] = hC[KC++];
            else eC = hC.length;
            wC ? zC.y += eC : hC = nC(hC, 0, eC)
          } else if (wC) {
            if (zC.y += iC, KC)
              for (let CC = 0; CC < iC; ++CC) hC[CC] = hC[KC + CC]
          } else KC && (hC = nC(hC, KC));
          return zC.b = PC, hC
        }
        qC(2)
      }
    };
  class vC {
    output = null;
    decoded = 0;
    done = !1;
    st = null;
    parts = [];
    vq = 0;
    needed = 18;
    size;
    constructor(CC) {
      this.size = CC
    }
    push(CC) {
      if (this.done) return;
      if (this.parts.push(CC), this.vq += CC.length, this.vq < this.needed) return;
      const zC = ((CC, zC) => {
        if (1 == CC.length) return CC[0];
        const QC = new ZC(zC);
        for (let ZC = 0, wC = 0; ZC < CC.length; ++ZC) {
          const zC = CC[ZC];
          QC.set(zC, wC), wC += zC.length
        }
        return QC
      })(this.parts, this.vq);
      let QC = this.st;
      if (!QC) {
        const CC = WC(zC, new ZC(0));
        "number" != typeof CC && CC.u === this.size || qC(0, `not a zstd frame of ${this.size} bytes`), QC = this.st = WC(zC, 1), QC.e = 0, this.output = QC.w
      }
      for (;;) {
        const CC = zC.length - QC.b;
        if (CC < 3) {
          this.needed = 3;
          break
        }
        const ZC = zC[QC.b],
          wC = ZC >> 1 & 3;
        3 == wC && qC(2);
        const bC = ZC >> 3 | zC[QC.b + 1] << 5 | zC[QC.b + 2] << 13;
        bC > QC.m && qC(0), 0 == wC && QC.y + bC > QC.u && qC(0);
        const nC = 1 == wC ? 4 : 3 + bC;
        if (CC < nC) {
          this.needed = nC;
          break
        }
        if (iC(zC, QC, QC.w) || qC(5), QC.e = QC.y, (QC.y > QC.u || QC.l && QC.y != QC.u) && qC(0), QC.l) {
          this.done = !0;
          break
        }
      }
      this.decoded = QC.y;
      const wC = zC.subarray(QC.b);
      this.parts = wC.length ? [wC] : [], this.vq = wC.length, QC.b = 0
    }
  }
  class eC {
    post;
    href = "";
    wg = null;
    given = 0;
    stopped = !1;
    constructor(CC) {
      this.post = CC
    }
    take(zC) {
      if (!this.stopped) try {
        this.answer(zC)
      } catch (ZC) {
        this.stop(ZC instanceof RangeError ? `out of memory decoding ${this.href}: ${CC(ZC)}` : `${this.href} did not decode: ${CC(ZC)}`)
      }
    }
    answer(CC) {
      if (null === this.wg) {
        const [zC, ZC] = CC;
        return this.href = zC, void(this.wg = new vC(ZC))
      }
      if (null === CC) return void this.stop(`${this.href} ended before its module did`);
      const zC = this.wg;
      zC.push(CC);
      const {
        output: ZC,
        decoded: QC
      } = zC;
      if (null !== ZC && QC > this.given) {
        const CC = ZC.slice(this.given, QC).buffer;
        this.given = QC, this.post(CC, [CC])
      }
      zC.done && this.stop(!0)
    }
    stop(CC) {
      this.stopped = !0, this.post(CC)
    }
  }
  const hC = globalThis.WorkerGlobalScope;
  if (void 0 !== hC && globalThis instanceof hC) {
    const CC = globalThis,
      zC = new eC((function(zC) {
        let ZC = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        CC.postMessage(zC, ZC)
      }));
    CC.addEventListener("message", (CC => {
      let {
        data: ZC
      } = CC;
      zC.take(ZC)
    }))
  }
})();