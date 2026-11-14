export const id = 2;
export const ids = [2];
export const modules = {
  34962: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      drawBlockIcon: () => QF,
      drawBlockIconUrl: () => rW,
      getDrawnBlockIcon: () => EF
    });
    const CF = Math.SQRT1_2,
      AF = Math.sqrt(3) / 2,
      uF = .5,
      hF = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      bW = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      dF = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const PF = new Map,
      RF = new Map,
      iW = new Map;

    function eF(FF, WF, SF) {
      return `${WF}|${SF}|${FF}`
    }

    function EF(FF, WF) {
      let SF = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return RF.get(eF(FF, WF, SF))
    }

    function QF(FF, WF, SF, iW) {
      const EF = eF(FF, WF, SF);
      let QF = PF.get(EF);
      if (!QF) {
        const {
          top: eF,
          left: rW,
          right: TF,
          itemType: aW
        } = iW(FF);
        QF = async function(FF, WF, SF, hF, bW, dF) {
          const [PF, RF, iW] = await Promise.all([tW(FF), tW(WF), tW(SF)]), eF = .6 * hF, EF = eF * CF, QF = eF * CF * uF, rW = eF * AF, TF = Math.max(...dF.boxes.map((FF => FF[4]))), aW = EF / 2 + (hF - EF) / 2, kW = QF + (hF - QF - QF - TF * rW) / 2, qW = (FF, WF, SF) => ({
            x: aW + (FF - SF) * EF,
            y: kW - QF + (FF + SF) * QF + (TF - WF) * rW
          }), VF = FF => dF.cropFaces ? FF : [0, 0, 1, 1], NF = document.createElement("canvas");
          NF.width = hF, NF.height = hF;
          const DF = NF.getContext("2d");
          if (!DF) throw new Error("Failed to get 2D context");
          DF.save(), DF.imageSmoothingEnabled = !1;
          for (const [CF, AF, uF, tW, LF, mW] of dF.boxes) gW(DF, iW, {
            topLeft: qW(tW, LF, mW),
            topRight: qW(tW, LF, uF),
            bottomRight: qW(tW, AF, uF),
            bottomLeft: qW(tW, AF, mW)
          }, VF([1 - mW, 1 - LF, 1 - uF, 1 - AF]), bW), gW(DF, RF, {
            topLeft: qW(CF, LF, mW),
            topRight: qW(tW, LF, mW),
            bottomRight: qW(tW, AF, mW),
            bottomLeft: qW(CF, AF, mW)
          }, VF([CF, 1 - LF, tW, 1 - AF]), bW), gW(DF, PF, {
            topLeft: qW(CF, LF, uF),
            topRight: qW(tW, LF, uF),
            bottomRight: qW(tW, LF, mW),
            bottomLeft: qW(CF, LF, mW)
          }, VF([CF, uF, tW, mW]), bW);
          return DF.restore(), NF
        }(eF, rW, TF, WF, SF, function(FF) {
          return "SlabBlock" === FF ? bW : "StairsBlock" === FF ? dF : hF
        }(aW)).then((FF => (RF.set(EF, FF), FF)), (FF => {
          throw PF.delete(EF), FF
        })), PF.set(EF, QF)
      }
      return QF
    }
    async function rW(FF, WF, SF, CF) {
      const AF = eF(FF, WF, SF);
      let uF = iW.get(AF);
      return void 0 === uF && (uF = (await QF(FF, WF, SF, CF)).toDataURL(), iW.set(AF, uF)), uF
    }

    function gW(FF, WF, SF, CF, AF) {
      let [uF, hF, bW, dF] = CF;
      const PF = uF * WF.width,
        RF = hF * WF.height,
        iW = (bW - uF) * WF.width,
        eF = (dF - hF) * WF.height,
        EF = (SF.topRight.x - SF.topLeft.x) / iW,
        QF = (SF.topRight.y - SF.topLeft.y) / iW,
        rW = (SF.bottomLeft.x - SF.topLeft.x) / eF,
        gW = (SF.bottomLeft.y - SF.topLeft.y) / eF;
      FF.save(), FF.setTransform(EF, QF, rW, gW, SF.topLeft.x, SF.topLeft.y), FF.drawImage(WF, PF, RF, iW, eF, 0, 0, iW, eF), FF.restore(), FF.save(), FF.strokeStyle = "black", FF.lineWidth = AF, FF.beginPath(), FF.moveTo(SF.topLeft.x, SF.topLeft.y), FF.lineTo(SF.topRight.x, SF.topRight.y), FF.lineTo(SF.bottomRight.x, SF.bottomRight.y), FF.lineTo(SF.bottomLeft.x, SF.bottomLeft.y), FF.closePath(), FF.stroke(), FF.restore()
    }

    function tW(FF) {
      return new Promise(((WF, SF) => {
        const CF = new Image;
        CF.crossOrigin = "anonymous", CF.onload = () => {
          WF(CF)
        }, CF.onerror = () => {
          SF(new Error(`A block icon's face did not load: ${FF.slice(0,100)}`))
        }, CF.src = FF
      }))
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);