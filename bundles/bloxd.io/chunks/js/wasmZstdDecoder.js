export const id = 64;
export const ids = [64];
export const modules = {
  40237: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      ZstdErrorCode: () => SD,
      ZstdFrameDecoder: () => qD
    });
    const ID = ArrayBuffer,
      pD = Uint8Array,
      iD = Uint16Array,
      fD = Int16Array,
      bD = Int32Array,
      QD = (DD, CD, cD) => {
        if (pD.prototype.slice) return pD.prototype.slice.call(DD, CD, cD);
        (null == CD || CD < 0) && (CD = 0), (null == cD || cD > DD.length) && (cD = DD.length);
        const ID = new pD(cD - CD);
        return ID.set(DD.subarray(CD, cD)), ID
      },
      wD = (DD, CD, cD, ID) => {
        if (pD.prototype.fill) return pD.prototype.fill.call(DD, CD, cD, ID);
        for ((null == cD || cD < 0) && (cD = 0), (null == ID || ID > DD.length) && (ID = DD.length); cD < ID; ++cD) DD[cD] = CD;
        return DD
      },
      SD = {
        InvalidData: 0,
        WindowSizeTooLarge: 1,
        InvalidBlockType: 2,
        FSEAccuracyTooHigh: 3,
        DistanceTooFarBack: 4,
        UnexpectedEOF: 5
      },
      BD = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
      yD = (DD, CD, cD) => {
        const ID = new Error(CD || BD[DD]);
        if (ID.code = DD, Error.captureStackTrace && Error.captureStackTrace(ID, yD), !cD) throw ID;
        return ID
      },
      MD = (DD, CD, cD) => {
        let ID = 0,
          pD = 0;
        for (; ID < cD; ++ID) pD |= DD[CD++] << (ID << 3);
        return pD
      },
      tD = (DD, CD) => {
        const cD = DD[0] | DD[1] << 8 | DD[2] << 16;
        if (3126568 == cD && 253 == DD[3]) {
          const cD = DD[4],
            ID = cD >> 5 & 1,
            iD = cD >> 2 & 1,
            fD = 3 & cD,
            QD = cD >> 6;
          8 & cD && yD(0);
          let wD = 6 - ID;
          const SD = 3 == fD ? 4 : fD,
            BD = MD(DD, wD, SD);
          wD += SD;
          const tD = QD ? 1 << QD : ID,
            ZD = MD(DD, wD, tD) + (1 == QD && 256);
          let oD = ZD;
          if (!ID) {
            const CD = 1 << 10 + (DD[5] >> 3);
            oD = CD + (CD >> 3) * (7 & DD[5])
          }
          oD > 2145386496 && yD(1);
          const vD = new pD((1 == CD ? ZD || oD : CD ? 0 : oD) + 12);
          return vD[0] = 1, vD[4] = 4, vD[8] = 8, {
            b: wD + tD,
            y: 0,
            l: 0,
            d: BD,
            w: CD && 1 != CD ? CD : vD.subarray(12),
            e: oD,
            o: new bD(vD.buffer, 0, 3),
            u: ZD,
            c: iD,
            m: Math.min(131072, oD)
          }
        }
        if (25481893 == (cD >> 4 | DD[3] << 20)) return 8 + (((ID = DD)[iD = 4] | ID[iD + 1] << 8 | ID[iD + 2] << 16 | ID[iD + 3] << 24) >>> 0);
        var ID, iD;
        yD(0)
      },
      ZD = DD => {
        let CD = 0;
        for (; 1 << CD <= DD; ++CD);
        return CD - 1
      },
      oD = (DD, CD, cD) => {
        let bD = 4 + (CD << 3);
        const QD = 5 + (15 & DD[CD]);
        QD > cD && yD(3);
        const wD = 1 << QD;
        let SD = wD,
          BD = -1,
          MD = -1,
          tD = -1,
          oD = wD;
        const vD = new ID(512 + (wD << 2)),
          ND = new fD(vD, 0, 256),
          gD = new iD(vD, 0, 256),
          XD = new iD(vD, 512, wD),
          mD = 512 + (wD << 1),
          nD = new pD(vD, mD, wD),
          OD = new pD(vD, mD + wD);
        for (; BD < 255 && SD > 0;) {
          const CD = ZD(SD + 1),
            cD = bD >> 3,
            ID = (1 << CD + 1) - 1;
          let pD = (DD[cD] | DD[cD + 1] << 8 | DD[cD + 2] << 16) >> (7 & bD) & ID;
          const iD = (1 << CD) - 1,
            fD = ID - SD - 1,
            QD = pD & iD;
          if (QD < fD ? (bD += CD, pD = QD) : (bD += CD + 1, pD > iD && (pD -= fD)), ND[++BD] = --pD, -1 == pD ? (SD += pD, nD[--oD] = BD) : SD -= pD, !pD)
            do {
              const CD = bD >> 3;
              MD = (DD[CD] | DD[CD + 1] << 8) >> (7 & bD) & 3, bD += 2, BD += MD
            } while (3 == MD)
        }(BD > 255 || SD) && yD(0);
        let PD = 0;
        const HD = (wD >> 1) + (wD >> 3) + 3,
          UD = wD - 1;
        for (let ID = 0; ID <= BD; ++ID) {
          const DD = ND[ID];
          if (DD < 1) gD[ID] = -DD;
          else
            for (tD = 0; tD < DD; ++tD) {
              nD[PD] = ID;
              do {
                PD = PD + HD & UD
              } while (PD >= oD)
            }
        }
        for (PD && yD(0), tD = 0; tD < wD; ++tD) {
          const DD = gD[nD[tD]]++,
            CD = OD[tD] = QD - ZD(DD);
          XD[tD] = (DD << CD) - wD
        }
        return [bD + 7 >> 3, {
          b: QD,
          s: nD,
          n: OD,
          t: XD
        }]
      },
      vD = oD(new pD([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
      ND = oD(new pD([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
      gD = oD(new pD([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
      XD = (DD, CD) => {
        const cD = DD.length,
          ID = new bD(cD);
        for (let pD = 0; pD < cD; ++pD) ID[pD] = CD, CD += 1 << DD[pD];
        return ID
      },
      mD = new pD(new bD([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
      nD = XD(mD, 0),
      OD = new pD(new bD([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
      PD = XD(OD, 3),
      HD = (DD, CD, cD) => {
        const ID = DD.length,
          pD = CD.length,
          iD = DD[ID - 1],
          fD = (1 << cD.b) - 1,
          bD = -cD.b;
        iD || yD(0);
        let QD = 0,
          wD = cD.b,
          SD = (ID << 3) - 8 + ZD(iD) - wD,
          BD = -1;
        for (; SD > bD && BD < pD;) {
          const ID = SD >> 3;
          QD = (QD << wD | (DD[ID] | DD[ID + 1] << 8 | DD[ID + 2] << 16) >> (7 & SD)) & fD, CD[++BD] = cD.s[QD], SD -= wD = cD.n[QD]
        }
        SD == bD && BD + 1 == pD || yD(0)
      },
      UD = (DD, CD, cD) => {
        let ID = 6;
        const pD = CD.length + 3 >> 2,
          iD = pD << 1,
          fD = pD + iD;
        HD(DD.subarray(ID, ID += DD[0] | DD[1] << 8), CD.subarray(0, pD), cD), HD(DD.subarray(ID, ID += DD[2] | DD[3] << 8), CD.subarray(pD, iD), cD), HD(DD.subarray(ID, ID += DD[4] | DD[5] << 8), CD.subarray(iD, fD), cD), HD(DD.subarray(ID), CD.subarray(fD), cD)
      },
      xD = (DD, CD, cD) => {
        let ID = CD.b;
        const fD = DD[ID],
          bD = fD >> 1 & 3;
        CD.l = 1 & fD;
        const SD = fD >> 3 | DD[ID + 1] << 5 | DD[ID + 2] << 13,
          BD = (ID += 3) + SD;
        if (1 == bD) {
          if (ID >= DD.length) return;
          return CD.b = ID + 1, cD ? (wD(cD, DD[ID], CD.y, CD.y += SD), cD) : wD(new pD(SD), DD[ID])
        }
        if (!(BD > DD.length)) {
          if (0 == bD) return CD.b = BD, cD ? (cD.set(DD.subarray(ID, BD), CD.y), CD.y += SD, cD) : QD(DD, ID, BD);
          if (2 == bD) {
            const fD = DD[ID],
              bD = 3 & fD,
              SD = fD >> 2 & 3;
            let MD = fD >> 4,
              tD = 0,
              XD = 0;
            bD < 2 ? 1 & SD ? MD |= DD[++ID] << 4 | (2 & SD && DD[++ID] << 12) : MD = fD >> 3 : (XD = SD, SD < 2 ? (MD |= (63 & DD[++ID]) << 4, tD = DD[ID] >> 6 | DD[++ID] << 2) : 2 == SD ? (MD |= DD[++ID] << 4 | (3 & DD[++ID]) << 12, tD = DD[ID] >> 2 | DD[++ID] << 6) : (MD |= DD[++ID] << 4 | (63 & DD[++ID]) << 12, tD = DD[ID] >> 6 | DD[++ID] << 2 | DD[++ID] << 10)), ++ID;
            let xD = cD ? cD.subarray(CD.y, CD.y + CD.m) : new pD(CD.m),
              qD = xD.length - MD;
            if (qD < 0 && yD(0), 0 == bD) xD.set(DD.subarray(ID, ID += MD), qD);
            else if (1 == bD) wD(xD, DD[ID++], qD);
            else {
              let cD = CD.h;
              if (2 == bD) {
                const fD = ((DD, CD) => {
                  let cD = 0,
                    ID = -1;
                  const fD = new pD(292),
                    bD = DD[CD],
                    QD = fD.subarray(0, 256),
                    SD = fD.subarray(256, 268),
                    BD = new iD(fD.buffer, 268);
                  if (bD < 128) {
                    const [cD, pD] = oD(DD, CD + 1, 6), iD = cD << 3, fD = DD[CD += bD];
                    fD || yD(0);
                    let wD = 0,
                      SD = 0,
                      BD = pD.b,
                      MD = BD,
                      tD = (++CD << 3) - 8 + ZD(fD);
                    for (; ID > 254 && yD(0), tD -= BD, !(tD < iD);) {
                      let CD = tD >> 3;
                      if (wD += (DD[CD] | DD[CD + 1] << 8) >> (7 & tD) & (1 << BD) - 1, QD[++ID] = pD.s[wD], tD -= MD, tD < iD) break;
                      CD = tD >> 3, SD += (DD[CD] | DD[CD + 1] << 8) >> (7 & tD) & (1 << MD) - 1, QD[++ID] = pD.s[SD], BD = pD.n[wD], wD = pD.t[wD], MD = pD.n[SD], SD = pD.t[SD]
                    }++ID > 255 && yD(0)
                  } else {
                    for (ID = bD - 127; cD < ID; cD += 2) {
                      const ID = DD[++CD];
                      QD[cD] = ID >> 4, QD[cD + 1] = 15 & ID
                    }++CD
                  }
                  let MD = 0;
                  for (cD = 0; cD < ID; ++cD) {
                    const DD = QD[cD];
                    DD > 11 && yD(0), MD += DD && 1 << DD - 1
                  }
                  const tD = ZD(MD) + 1,
                    vD = 1 << tD,
                    ND = vD - MD;
                  for (ND & ND - 1 && yD(0), QD[ID++] = ZD(ND) + 1, cD = 0; cD < ID; ++cD) {
                    const DD = QD[cD];
                    ++SD[QD[cD] = DD && tD + 1 - DD]
                  }
                  const gD = new pD(vD << 1),
                    XD = gD.subarray(0, vD),
                    mD = gD.subarray(vD);
                  for (BD[tD] = 0, cD = tD; cD > 0; --cD) {
                    const DD = BD[cD];
                    wD(mD, cD, DD, BD[cD - 1] = DD + SD[cD] * (1 << tD - cD))
                  }
                  for (BD[0] != vD && yD(0), cD = 0; cD < ID; ++cD) {
                    const DD = QD[cD];
                    if (DD) {
                      const CD = BD[DD];
                      wD(XD, cD, CD, BD[DD] = CD + (1 << tD - DD))
                    }
                  }
                  return [CD, {
                    n: mD,
                    b: tD,
                    s: XD
                  }]
                })(DD, ID);
                tD += ID - (ID = fD[0]), CD.h = cD = fD[1]
              } else cD || yD(0);
              (XD ? UD : HD)(DD.subarray(ID, ID += tD), xD.subarray(qD), cD)
            }
            let JD = DD[ID++];
            if (JD) {
              255 == JD ? JD = 32512 + (DD[ID++] | DD[ID++] << 8) : JD > 127 && (JD = JD - 128 << 8 | DD[ID++]);
              const fD = DD[ID++];
              3 & fD && yD(0);
              const bD = [ND, gD, vD];
              for (let cD = 2; cD > -1; --cD) {
                const QD = fD >> 2 + (cD << 1) & 3;
                if (1 == QD) {
                  const CD = new pD([0, 0, DD[ID++]]);
                  bD[cD] = {
                    s: CD.subarray(2, 3),
                    n: CD.subarray(0, 1),
                    t: new iD(CD.buffer, 0, 1),
                    b: 0
                  }
                } else 2 == QD ? [ID, bD[cD]] = oD(DD, ID, 9 - (1 & cD)) : 3 == QD && (CD.t || yD(0), bD[cD] = CD.t[cD])
              }
              const [wD, SD, MD] = CD.t = bD, tD = DD[BD - 1];
              tD || yD(0);
              let XD = (BD << 3) - 8 + ZD(tD) - MD.b,
                HD = XD >> 3,
                UD = 0,
                KD = (DD[HD] | DD[HD + 1] << 8) >> (7 & XD) & (1 << MD.b) - 1;
              HD = (XD -= SD.b) >> 3;
              let aD = (DD[HD] | DD[HD + 1] << 8) >> (7 & XD) & (1 << SD.b) - 1;
              HD = (XD -= wD.b) >> 3;
              let VD = (DD[HD] | DD[HD + 1] << 8) >> (7 & XD) & (1 << wD.b) - 1;
              for (++JD; --JD;) {
                const cD = MD.s[KD],
                  ID = MD.n[KD],
                  pD = wD.s[VD],
                  iD = wD.n[VD],
                  fD = SD.s[aD],
                  bD = SD.n[aD];
                HD = (XD -= fD) >> 3;
                const QD = 1 << fD;
                let BD = QD + ((DD[HD] | DD[HD + 1] << 8 | DD[HD + 2] << 16 | DD[HD + 3] << 24) >>> (7 & XD) & QD - 1);
                HD = (XD -= OD[pD]) >> 3;
                let tD = PD[pD] + ((DD[HD] | DD[HD + 1] << 8 | DD[HD + 2] << 16) >> (7 & XD) & (1 << OD[pD]) - 1);
                HD = (XD -= mD[cD]) >> 3;
                const ZD = nD[cD] + ((DD[HD] | DD[HD + 1] << 8 | DD[HD + 2] << 16) >> (7 & XD) & (1 << mD[cD]) - 1);
                if ((XD < 0 || qD + ZD > xD.length || UD + ZD + tD > xD.length) && yD(0), HD = (XD -= ID) >> 3, KD = MD.t[KD] + ((DD[HD] | DD[HD + 1] << 8) >> (7 & XD) & (1 << ID) - 1), HD = (XD -= iD) >> 3, VD = wD.t[VD] + ((DD[HD] | DD[HD + 1] << 8) >> (7 & XD) & (1 << iD) - 1), HD = (XD -= bD) >> 3, aD = SD.t[aD] + ((DD[HD] | DD[HD + 1] << 8) >> (7 & XD) & (1 << bD) - 1), BD > 3) CD.o[2] = CD.o[1], CD.o[1] = CD.o[0], CD.o[0] = BD -= 3;
                else {
                  const DD = BD - (0 != ZD);
                  DD ? (BD = 3 == DD ? CD.o[0] - 1 : CD.o[DD], DD > 1 && (CD.o[2] = CD.o[1]), CD.o[1] = CD.o[0], CD.o[0] = BD) : BD = CD.o[0]
                }
                for (let DD = 0; DD < ZD; ++DD) xD[UD + DD] = xD[qD + DD];
                UD += ZD, qD += ZD;
                let oD = UD - BD;
                if (oD < 0) {
                  let DD = -oD;
                  const cD = CD.e + oD;
                  cD < 0 && yD(4), DD > tD && (DD = tD);
                  for (let ID = 0; ID < DD; ++ID) xD[UD + ID] = CD.w[cD + ID];
                  UD += DD, tD -= DD, oD = 0
                }
                for (let DD = 0; DD < tD; ++DD) xD[UD + DD] = xD[oD + DD];
                UD += tD
              }
              if (UD != qD)
                for (; qD < xD.length;) xD[UD++] = xD[qD++];
              else UD = xD.length;
              cD ? CD.y += UD : xD = QD(xD, 0, UD)
            } else if (cD) {
              if (CD.y += MD, qD)
                for (let DD = 0; DD < MD; ++DD) xD[DD] = xD[qD + DD]
            } else qD && (xD = QD(xD, qD));
            return CD.b = BD, xD
          }
          yD(2)
        }
      };
    class qD {
      output = null;
      decoded = 0;
      done = !1;
      st = null;
      parts = [];
      Lb = 0;
      needed = 18;
      size;
      constructor(DD) {
        this.size = DD
      }
      push(DD) {
        if (this.done) return;
        if (this.parts.push(DD), this.Lb += DD.length, this.Lb < this.needed) return;
        const CD = ((DD, CD) => {
          if (1 == DD.length) return DD[0];
          const cD = new pD(CD);
          for (let ID = 0, pD = 0; ID < DD.length; ++ID) {
            const CD = DD[ID];
            cD.set(CD, pD), pD += CD.length
          }
          return cD
        })(this.parts, this.Lb);
        let cD = this.st;
        if (!cD) {
          const DD = tD(CD, new pD(0));
          "number" != typeof DD && DD.u === this.size || yD(0, `not a zstd frame of ${this.size} bytes`), cD = this.st = tD(CD, 1), cD.e = 0, this.output = cD.w
        }
        for (;;) {
          const DD = CD.length - cD.b;
          if (DD < 3) {
            this.needed = 3;
            break
          }
          const ID = CD[cD.b],
            pD = ID >> 1 & 3;
          3 == pD && yD(2);
          const iD = ID >> 3 | CD[cD.b + 1] << 5 | CD[cD.b + 2] << 13;
          iD > cD.m && yD(0);
          const fD = 1 == pD ? 4 : 3 + iD;
          if (DD < fD) {
            this.needed = fD;
            break
          }
          if (xD(CD, cD, cD.w) || yD(5), cD.e = cD.y, (cD.y > cD.u || cD.l && cD.y != cD.u) && yD(0), cD.l) {
            this.done = !0;
            break
          }
        }
        this.decoded = cD.y;
        const ID = CD.subarray(cD.b);
        this.parts = ID.length ? [ID] : [], this.Lb = ID.length, cD.b = 0
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);