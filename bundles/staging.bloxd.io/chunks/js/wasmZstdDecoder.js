export const id = 64;
export const ids = [64];
export const modules = {
  40167: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      ZstdErrorCode: () => vY,
      ZstdFrameDecoder: () => KY
    });
    const FY = ArrayBuffer,
      AY = Uint8Array,
      IY = Uint16Array,
      RY = Int16Array,
      OY = Int32Array,
      gY = (YY, rY, DY) => {
        if (AY.prototype.slice) return AY.prototype.slice.call(YY, rY, DY);
        (null == rY || rY < 0) && (rY = 0), (null == DY || DY > YY.length) && (DY = YY.length);
        const FY = new AY(DY - rY);
        return FY.set(YY.subarray(rY, DY)), FY
      },
      aY = (YY, rY, DY, FY) => {
        if (AY.prototype.fill) return AY.prototype.fill.call(YY, rY, DY, FY);
        for ((null == DY || DY < 0) && (DY = 0), (null == FY || FY > YY.length) && (FY = YY.length); DY < FY; ++DY) YY[DY] = rY;
        return YY
      },
      vY = {
        InvalidData: 0,
        WindowSizeTooLarge: 1,
        InvalidBlockType: 2,
        FSEAccuracyTooHigh: 3,
        DistanceTooFarBack: 4,
        UnexpectedEOF: 5
      },
      uY = ["invalid zstd data", "window size too large (>2046MB)", "invalid block type", "FSE accuracy too high", "match distance too far back", "unexpected EOF"],
      sY = (YY, rY, DY) => {
        const FY = new Error(rY || uY[YY]);
        if (FY.code = YY, Error.captureStackTrace && Error.captureStackTrace(FY, sY), !DY) throw FY;
        return FY
      },
      iY = (YY, rY, DY) => {
        let FY = 0,
          AY = 0;
        for (; FY < DY; ++FY) AY |= YY[rY++] << (FY << 3);
        return AY
      },
      yY = (YY, rY) => {
        const DY = YY[0] | YY[1] << 8 | YY[2] << 16;
        if (3126568 == DY && 253 == YY[3]) {
          const DY = YY[4],
            FY = DY >> 5 & 1,
            IY = DY >> 2 & 1,
            RY = 3 & DY,
            gY = DY >> 6;
          8 & DY && sY(0);
          let aY = 6 - FY;
          const vY = 3 == RY ? 4 : RY,
            uY = iY(YY, aY, vY);
          aY += vY;
          const yY = gY ? 1 << gY : FY,
            QY = iY(YY, aY, yY) + (1 == gY && 256);
          let oY = QY;
          if (!FY) {
            const rY = 1 << 10 + (YY[5] >> 3);
            oY = rY + (rY >> 3) * (7 & YY[5])
          }
          oY > 2145386496 && sY(1);
          const WY = new AY((1 == rY ? QY || oY : rY ? 0 : oY) + 12);
          return WY[0] = 1, WY[4] = 4, WY[8] = 8, {
            b: aY + yY,
            y: 0,
            l: 0,
            d: uY,
            w: rY && 1 != rY ? rY : WY.subarray(12),
            e: oY,
            o: new OY(WY.buffer, 0, 3),
            u: QY,
            c: IY,
            m: Math.min(131072, oY)
          }
        }
        if (25481893 == (DY >> 4 | YY[3] << 20)) return 8 + (((FY = YY)[IY = 4] | FY[IY + 1] << 8 | FY[IY + 2] << 16 | FY[IY + 3] << 24) >>> 0);
        var FY, IY;
        sY(0)
      },
      QY = YY => {
        let rY = 0;
        for (; 1 << rY <= YY; ++rY);
        return rY - 1
      },
      oY = (YY, rY, DY) => {
        let OY = 4 + (rY << 3);
        const gY = 5 + (15 & YY[rY]);
        gY > DY && sY(3);
        const aY = 1 << gY;
        let vY = aY,
          uY = -1,
          iY = -1,
          yY = -1,
          oY = aY;
        const WY = new FY(512 + (aY << 2)),
          EY = new RY(WY, 0, 256),
          mY = new IY(WY, 0, 256),
          VY = new IY(WY, 512, aY),
          SY = 512 + (aY << 1),
          lY = new AY(WY, SY, aY),
          TY = new AY(WY, SY + aY);
        for (; uY < 255 && vY > 0;) {
          const rY = QY(vY + 1),
            DY = OY >> 3,
            FY = (1 << rY + 1) - 1;
          let AY = (YY[DY] | YY[DY + 1] << 8 | YY[DY + 2] << 16) >> (7 & OY) & FY;
          const IY = (1 << rY) - 1,
            RY = FY - vY - 1,
            gY = AY & IY;
          if (gY < RY ? (OY += rY, AY = gY) : (OY += rY + 1, AY > IY && (AY -= RY)), EY[++uY] = --AY, -1 == AY ? (vY += AY, lY[--oY] = uY) : vY -= AY, !AY)
            do {
              const rY = OY >> 3;
              iY = (YY[rY] | YY[rY + 1] << 8) >> (7 & OY) & 3, OY += 2, uY += iY
            } while (3 == iY)
        }(uY > 255 || vY) && sY(0);
        let eY = 0;
        const NY = (aY >> 1) + (aY >> 3) + 3,
          BY = aY - 1;
        for (let FY = 0; FY <= uY; ++FY) {
          const YY = EY[FY];
          if (YY < 1) mY[FY] = -YY;
          else
            for (yY = 0; yY < YY; ++yY) {
              lY[eY] = FY;
              do {
                eY = eY + NY & BY
              } while (eY >= oY)
            }
        }
        for (eY && sY(0), yY = 0; yY < aY; ++yY) {
          const YY = mY[lY[yY]]++,
            rY = TY[yY] = gY - QY(YY);
          VY[yY] = (YY << rY) - aY
        }
        return [OY + 7 >> 3, {
          b: gY,
          s: lY,
          n: TY,
          t: VY
        }]
      },
      WY = oY(new AY([81, 16, 99, 140, 49, 198, 24, 99, 12, 33, 196, 24, 99, 102, 102, 134, 70, 146, 4]), 0, 6)[1],
      EY = oY(new AY([33, 20, 196, 24, 99, 140, 33, 132, 16, 66, 8, 33, 132, 16, 66, 8, 33, 68, 68, 68, 68, 68, 68, 68, 68, 36, 9]), 0, 6)[1],
      mY = oY(new AY([32, 132, 16, 66, 102, 70, 68, 68, 68, 68, 36, 73, 2]), 0, 5)[1],
      VY = (YY, rY) => {
        const DY = YY.length,
          FY = new OY(DY);
        for (let AY = 0; AY < DY; ++AY) FY[AY] = rY, rY += 1 << YY[AY];
        return FY
      },
      SY = new AY(new OY([0, 0, 0, 0, 16843009, 50528770, 134678020, 202050057, 269422093]).buffer, 0, 36),
      lY = VY(SY, 0),
      TY = new AY(new OY([0, 0, 0, 0, 0, 0, 0, 0, 16843009, 50528770, 117769220, 185207048, 252579084, 16]).buffer, 0, 53),
      eY = VY(TY, 3),
      NY = (YY, rY, DY) => {
        const FY = YY.length,
          AY = rY.length,
          IY = YY[FY - 1],
          RY = (1 << DY.b) - 1,
          OY = -DY.b;
        IY || sY(0);
        let gY = 0,
          aY = DY.b,
          vY = (FY << 3) - 8 + QY(IY) - aY,
          uY = -1;
        for (; vY > OY && uY < AY;) {
          const FY = vY >> 3;
          gY = (gY << aY | (YY[FY] | YY[FY + 1] << 8 | YY[FY + 2] << 16) >> (7 & vY)) & RY, rY[++uY] = DY.s[gY], vY -= aY = DY.n[gY]
        }
        vY == OY && uY + 1 == AY || sY(0)
      },
      BY = (YY, rY, DY) => {
        let FY = 6;
        const AY = rY.length + 3 >> 2,
          IY = AY << 1,
          RY = AY + IY;
        NY(YY.subarray(FY, FY += YY[0] | YY[1] << 8), rY.subarray(0, AY), DY), NY(YY.subarray(FY, FY += YY[2] | YY[3] << 8), rY.subarray(AY, IY), DY), NY(YY.subarray(FY, FY += YY[4] | YY[5] << 8), rY.subarray(IY, RY), DY), NY(YY.subarray(FY), rY.subarray(RY), DY)
      },
      cY = (YY, rY, DY) => {
        let FY = rY.b;
        const RY = YY[FY],
          OY = RY >> 1 & 3;
        rY.l = 1 & RY;
        const vY = RY >> 3 | YY[FY + 1] << 5 | YY[FY + 2] << 13,
          uY = (FY += 3) + vY;
        if (1 == OY) {
          if (FY >= YY.length) return;
          return rY.b = FY + 1, DY ? (aY(DY, YY[FY], rY.y, rY.y += vY), DY) : aY(new AY(vY), YY[FY])
        }
        if (!(uY > YY.length)) {
          if (0 == OY) return rY.b = uY, DY ? (DY.set(YY.subarray(FY, uY), rY.y), rY.y += vY, DY) : gY(YY, FY, uY);
          if (2 == OY) {
            const RY = YY[FY],
              OY = 3 & RY,
              vY = RY >> 2 & 3;
            let iY = RY >> 4,
              yY = 0,
              VY = 0;
            OY < 2 ? 1 & vY ? iY |= YY[++FY] << 4 | (2 & vY && YY[++FY] << 12) : iY = RY >> 3 : (VY = vY, vY < 2 ? (iY |= (63 & YY[++FY]) << 4, yY = YY[FY] >> 6 | YY[++FY] << 2) : 2 == vY ? (iY |= YY[++FY] << 4 | (3 & YY[++FY]) << 12, yY = YY[FY] >> 2 | YY[++FY] << 6) : (iY |= YY[++FY] << 4 | (63 & YY[++FY]) << 12, yY = YY[FY] >> 6 | YY[++FY] << 2 | YY[++FY] << 10)), ++FY;
            let cY = DY ? DY.subarray(rY.y, rY.y + rY.m) : new AY(rY.m),
              KY = cY.length - iY;
            if (KY < 0 && sY(0), 0 == OY) cY.set(YY.subarray(FY, FY += iY), KY);
            else if (1 == OY) aY(cY, YY[FY++], KY);
            else {
              let DY = rY.h;
              if (2 == OY) {
                const RY = ((YY, rY) => {
                  let DY = 0,
                    FY = -1;
                  const RY = new AY(292),
                    OY = YY[rY],
                    gY = RY.subarray(0, 256),
                    vY = RY.subarray(256, 268),
                    uY = new IY(RY.buffer, 268);
                  if (OY < 128) {
                    const [DY, AY] = oY(YY, rY + 1, 6), IY = DY << 3, RY = YY[rY += OY];
                    RY || sY(0);
                    let aY = 0,
                      vY = 0,
                      uY = AY.b,
                      iY = uY,
                      yY = (++rY << 3) - 8 + QY(RY);
                    for (; FY > 254 && sY(0), yY -= uY, !(yY < IY);) {
                      let rY = yY >> 3;
                      if (aY += (YY[rY] | YY[rY + 1] << 8) >> (7 & yY) & (1 << uY) - 1, gY[++FY] = AY.s[aY], yY -= iY, yY < IY) break;
                      rY = yY >> 3, vY += (YY[rY] | YY[rY + 1] << 8) >> (7 & yY) & (1 << iY) - 1, gY[++FY] = AY.s[vY], uY = AY.n[aY], aY = AY.t[aY], iY = AY.n[vY], vY = AY.t[vY]
                    }++FY > 255 && sY(0)
                  } else {
                    for (FY = OY - 127; DY < FY; DY += 2) {
                      const FY = YY[++rY];
                      gY[DY] = FY >> 4, gY[DY + 1] = 15 & FY
                    }++rY
                  }
                  let iY = 0;
                  for (DY = 0; DY < FY; ++DY) {
                    const YY = gY[DY];
                    YY > 11 && sY(0), iY += YY && 1 << YY - 1
                  }
                  const yY = QY(iY) + 1,
                    WY = 1 << yY,
                    EY = WY - iY;
                  for (EY & EY - 1 && sY(0), gY[FY++] = QY(EY) + 1, DY = 0; DY < FY; ++DY) {
                    const YY = gY[DY];
                    ++vY[gY[DY] = YY && yY + 1 - YY]
                  }
                  const mY = new AY(WY << 1),
                    VY = mY.subarray(0, WY),
                    SY = mY.subarray(WY);
                  for (uY[yY] = 0, DY = yY; DY > 0; --DY) {
                    const YY = uY[DY];
                    aY(SY, DY, YY, uY[DY - 1] = YY + vY[DY] * (1 << yY - DY))
                  }
                  for (uY[0] != WY && sY(0), DY = 0; DY < FY; ++DY) {
                    const YY = gY[DY];
                    if (YY) {
                      const rY = uY[YY];
                      aY(VY, DY, rY, uY[YY] = rY + (1 << yY - YY))
                    }
                  }
                  return [rY, {
                    n: SY,
                    b: yY,
                    s: VY
                  }]
                })(YY, FY);
                yY += FY - (FY = RY[0]), rY.h = DY = RY[1]
              } else DY || sY(0);
              (VY ? BY : NY)(YY.subarray(FY, FY += yY), cY.subarray(KY), DY)
            }
            let HY = YY[FY++];
            if (HY) {
              255 == HY ? HY = 32512 + (YY[FY++] | YY[FY++] << 8) : HY > 127 && (HY = HY - 128 << 8 | YY[FY++]);
              const RY = YY[FY++];
              3 & RY && sY(0);
              const OY = [EY, mY, WY];
              for (let DY = 2; DY > -1; --DY) {
                const gY = RY >> 2 + (DY << 1) & 3;
                if (1 == gY) {
                  const rY = new AY([0, 0, YY[FY++]]);
                  OY[DY] = {
                    s: rY.subarray(2, 3),
                    n: rY.subarray(0, 1),
                    t: new IY(rY.buffer, 0, 1),
                    b: 0
                  }
                } else 2 == gY ? [FY, OY[DY]] = oY(YY, FY, 9 - (1 & DY)) : 3 == gY && (rY.t || sY(0), OY[DY] = rY.t[DY])
              }
              const [aY, vY, iY] = rY.t = OY, yY = YY[uY - 1];
              yY || sY(0);
              let VY = (uY << 3) - 8 + QY(yY) - iY.b,
                NY = VY >> 3,
                BY = 0,
                zY = (YY[NY] | YY[NY + 1] << 8) >> (7 & VY) & (1 << iY.b) - 1;
              NY = (VY -= vY.b) >> 3;
              let ZY = (YY[NY] | YY[NY + 1] << 8) >> (7 & VY) & (1 << vY.b) - 1;
              NY = (VY -= aY.b) >> 3;
              let CY = (YY[NY] | YY[NY + 1] << 8) >> (7 & VY) & (1 << aY.b) - 1;
              for (++HY; --HY;) {
                const DY = iY.s[zY],
                  FY = iY.n[zY],
                  AY = aY.s[CY],
                  IY = aY.n[CY],
                  RY = vY.s[ZY],
                  OY = vY.n[ZY];
                NY = (VY -= RY) >> 3;
                const gY = 1 << RY;
                let uY = gY + ((YY[NY] | YY[NY + 1] << 8 | YY[NY + 2] << 16 | YY[NY + 3] << 24) >>> (7 & VY) & gY - 1);
                NY = (VY -= TY[AY]) >> 3;
                let yY = eY[AY] + ((YY[NY] | YY[NY + 1] << 8 | YY[NY + 2] << 16) >> (7 & VY) & (1 << TY[AY]) - 1);
                NY = (VY -= SY[DY]) >> 3;
                const QY = lY[DY] + ((YY[NY] | YY[NY + 1] << 8 | YY[NY + 2] << 16) >> (7 & VY) & (1 << SY[DY]) - 1);
                if ((VY < 0 || KY + QY > cY.length || BY + QY + yY > cY.length) && sY(0), NY = (VY -= FY) >> 3, zY = iY.t[zY] + ((YY[NY] | YY[NY + 1] << 8) >> (7 & VY) & (1 << FY) - 1), NY = (VY -= IY) >> 3, CY = aY.t[CY] + ((YY[NY] | YY[NY + 1] << 8) >> (7 & VY) & (1 << IY) - 1), NY = (VY -= OY) >> 3, ZY = vY.t[ZY] + ((YY[NY] | YY[NY + 1] << 8) >> (7 & VY) & (1 << OY) - 1), uY > 3) rY.o[2] = rY.o[1], rY.o[1] = rY.o[0], rY.o[0] = uY -= 3;
                else {
                  const YY = uY - (0 != QY);
                  YY ? (uY = 3 == YY ? rY.o[0] - 1 : rY.o[YY], YY > 1 && (rY.o[2] = rY.o[1]), rY.o[1] = rY.o[0], rY.o[0] = uY) : uY = rY.o[0]
                }
                for (let YY = 0; YY < QY; ++YY) cY[BY + YY] = cY[KY + YY];
                BY += QY, KY += QY;
                let oY = BY - uY;
                if (oY < 0) {
                  let YY = -oY;
                  const DY = rY.e + oY;
                  DY < 0 && sY(4), YY > yY && (YY = yY);
                  for (let FY = 0; FY < YY; ++FY) cY[BY + FY] = rY.w[DY + FY];
                  BY += YY, yY -= YY, oY = 0
                }
                for (let YY = 0; YY < yY; ++YY) cY[BY + YY] = cY[oY + YY];
                BY += yY
              }
              if (BY != KY)
                for (; KY < cY.length;) cY[BY++] = cY[KY++];
              else BY = cY.length;
              DY ? rY.y += BY : cY = gY(cY, 0, BY)
            } else if (DY) {
              if (rY.y += iY, KY)
                for (let YY = 0; YY < iY; ++YY) cY[YY] = cY[KY + YY]
            } else KY && (cY = gY(cY, KY));
            return rY.b = uY, cY
          }
          sY(2)
        }
      };
    class KY {
      output = null;
      decoded = 0;
      done = !1;
      st = null;
      parts = [];
      ja = 0;
      needed = 18;
      size;
      constructor(YY) {
        this.size = YY
      }
      push(YY) {
        if (this.done) return;
        if (this.parts.push(YY), this.ja += YY.length, this.ja < this.needed) return;
        const rY = ((YY, rY) => {
          if (1 == YY.length) return YY[0];
          const DY = new AY(rY);
          for (let FY = 0, AY = 0; FY < YY.length; ++FY) {
            const rY = YY[FY];
            DY.set(rY, AY), AY += rY.length
          }
          return DY
        })(this.parts, this.ja);
        let DY = this.st;
        if (!DY) {
          const YY = yY(rY, new AY(0));
          "number" != typeof YY && YY.u === this.size || sY(0, `not a zstd frame of ${this.size} bytes`), DY = this.st = yY(rY, 1), DY.e = 0, this.output = DY.w
        }
        for (;;) {
          const YY = rY.length - DY.b;
          if (YY < 3) {
            this.needed = 3;
            break
          }
          const FY = rY[DY.b],
            AY = FY >> 1 & 3;
          3 == AY && sY(2);
          const IY = FY >> 3 | rY[DY.b + 1] << 5 | rY[DY.b + 2] << 13;
          IY > DY.m && sY(0);
          const RY = 1 == AY ? 4 : 3 + IY;
          if (YY < RY) {
            this.needed = RY;
            break
          }
          if (cY(rY, DY, DY.w) || sY(5), DY.e = DY.y, (DY.y > DY.u || DY.l && DY.y != DY.u) && sY(0), DY.l) {
            this.done = !0;
            break
          }
        }
        this.decoded = DY.y;
        const FY = rY.subarray(DY.b);
        this.parts = FY.length ? [FY] : [], this.ja = FY.length, DY.b = 0
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);