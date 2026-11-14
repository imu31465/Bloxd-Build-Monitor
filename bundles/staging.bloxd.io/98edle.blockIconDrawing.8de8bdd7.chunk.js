export const id = 2;
export const ids = [2];
export const modules = {
  34671: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      drawBlockIcon: () => gR,
      drawBlockIconUrl: () => iR,
      getDrawnBlockIcon: () => TW
    });
    const wW = Math.SQRT1_2,
      CW = Math.sqrt(3) / 2,
      zR = .5,
      AW = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      bR = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      yR = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const NW = new Map,
      eW = new Map,
      BW = new Map;

    function tR(WW, RW, MW) {
      return `${RW}|${MW}|${WW}`
    }

    function TW(WW, RW) {
      let MW = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return eW.get(tR(WW, RW, MW))
    }

    function gR(WW, RW, MW, BW) {
      const TW = tR(WW, RW, MW);
      let gR = NW.get(TW);
      if (!gR) {
        const {
          top: tR,
          left: iR,
          right: PW,
          itemType: IW
        } = BW(WW);
        gR = async function(WW, RW, MW, AW, bR, yR) {
          const [NW, eW, BW] = await Promise.all([JW(WW), JW(RW), JW(MW)]), tR = .6 * AW, TW = tR * wW, gR = tR * wW * zR, iR = tR * CW, PW = Math.max(...yR.boxes.map((WW => WW[4]))), IW = TW / 2 + (AW - TW) / 2, oW = gR + (AW - gR - gR - PW * iR) / 2, lW = (WW, RW, MW) => ({
            x: IW + (WW - MW) * TW,
            y: oW - gR + (WW + MW) * gR + (PW - RW) * iR
          }), FW = WW => yR.cropFaces ? WW : [0, 0, 1, 1], fW = document.createElement("canvas");
          fW.width = AW, fW.height = AW;
          const QW = fW.getContext("2d");
          if (!QW) throw new Error("Failed to get 2D context");
          QW.save(), QW.imageSmoothingEnabled = !1;
          for (const [wW, CW, zR, JW, rR, cR] of yR.boxes) YW(QW, BW, {
            topLeft: lW(JW, rR, cR),
            topRight: lW(JW, rR, zR),
            bottomRight: lW(JW, CW, zR),
            bottomLeft: lW(JW, CW, cR)
          }, FW([1 - cR, 1 - rR, 1 - zR, 1 - CW]), bR), YW(QW, eW, {
            topLeft: lW(wW, rR, cR),
            topRight: lW(JW, rR, cR),
            bottomRight: lW(JW, CW, cR),
            bottomLeft: lW(wW, CW, cR)
          }, FW([wW, 1 - rR, JW, 1 - CW]), bR), YW(QW, NW, {
            topLeft: lW(wW, rR, zR),
            topRight: lW(JW, rR, zR),
            bottomRight: lW(JW, rR, cR),
            bottomLeft: lW(wW, rR, cR)
          }, FW([wW, zR, JW, cR]), bR);
          return QW.restore(), fW
        }(tR, iR, PW, RW, MW, function(WW) {
          return "SlabBlock" === WW ? bR : "StairsBlock" === WW ? yR : AW
        }(IW)).then((WW => (eW.set(TW, WW), WW)), (WW => {
          throw NW.delete(TW), WW
        })), NW.set(TW, gR)
      }
      return gR
    }
    async function iR(WW, RW, MW, wW) {
      const CW = tR(WW, RW, MW);
      let zR = BW.get(CW);
      return void 0 === zR && (zR = (await gR(WW, RW, MW, wW)).toDataURL(), BW.set(CW, zR)), zR
    }

    function YW(WW, RW, MW, wW, CW) {
      let [zR, AW, bR, yR] = wW;
      const NW = zR * RW.width,
        eW = AW * RW.height,
        BW = (bR - zR) * RW.width,
        tR = (yR - AW) * RW.height,
        TW = (MW.topRight.x - MW.topLeft.x) / BW,
        gR = (MW.topRight.y - MW.topLeft.y) / BW,
        iR = (MW.bottomLeft.x - MW.topLeft.x) / tR,
        YW = (MW.bottomLeft.y - MW.topLeft.y) / tR;
      WW.save(), WW.setTransform(TW, gR, iR, YW, MW.topLeft.x, MW.topLeft.y), WW.drawImage(RW, NW, eW, BW, tR, 0, 0, BW, tR), WW.restore(), WW.save(), WW.strokeStyle = "black", WW.lineWidth = CW, WW.beginPath(), WW.moveTo(MW.topLeft.x, MW.topLeft.y), WW.lineTo(MW.topRight.x, MW.topRight.y), WW.lineTo(MW.bottomRight.x, MW.bottomRight.y), WW.lineTo(MW.bottomLeft.x, MW.bottomLeft.y), WW.closePath(), WW.stroke(), WW.restore()
    }

    function JW(WW) {
      return new Promise(((RW, MW) => {
        const wW = new Image;
        wW.crossOrigin = "anonymous", wW.onload = () => {
          RW(wW)
        }, wW.onerror = () => {
          MW(new Error(`A block icon's face did not load: ${WW.slice(0,100)}`))
        }, wW.src = WW
      }))
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);