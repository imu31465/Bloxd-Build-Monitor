export const id = 300;
export const ids = [300];
export const modules = {
  41175: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      _IESTextureLoader: () => kQ
    });
    var LQ = wQ(36729);

    function qQ(QQ) {
      return QQ.split(" ").filter((QQ => "" !== QQ)).map((QQ => parseFloat(QQ)))
    }

    function oQ(QQ, FQ, wQ) {
      for (; wQ.length !== FQ;) {
        const FQ = qQ(QQ.lines[QQ.index++]);
        wQ.push(...FQ)
      }
    }

    function DQ(QQ, FQ, wQ) {
      let qQ = 0,
        oQ = 0,
        DQ = 0,
        kQ = 0,
        vQ = 0,
        mQ = 0;
      for (let LQ = 0; LQ < QQ.numberOfHorizontalAngles - 1; LQ++)
        if (wQ < QQ.horizontalAngles[LQ + 1] || LQ === QQ.numberOfHorizontalAngles - 2) {
          oQ = LQ, DQ = QQ.horizontalAngles[LQ], kQ = QQ.horizontalAngles[LQ + 1];
          break
        } for (let LQ = 0; LQ < QQ.numberOfVerticalAngles - 1; LQ++)
        if (FQ < QQ.verticalAngles[LQ + 1] || LQ === QQ.numberOfVerticalAngles - 2) {
          qQ = LQ, vQ = QQ.verticalAngles[LQ], mQ = QQ.verticalAngles[LQ + 1];
          break
        } const uQ = kQ - DQ,
        HQ = mQ - vQ;
      if (0 === HQ) return 0;
      const bQ = 0 === uQ ? 0 : (wQ - DQ) / uQ,
        YQ = (FQ - vQ) / HQ,
        xQ = 0 === uQ ? oQ : oQ + 1,
        AQ = (0, LQ.Lerp)(QQ.candelaValues[oQ][qQ], QQ.candelaValues[xQ][qQ], bQ),
        tQ = (0, LQ.Lerp)(QQ.candelaValues[oQ][qQ + 1], QQ.candelaValues[xQ][qQ + 1], bQ);
      return (0, LQ.Lerp)(AQ, tQ, YQ)
    }
    class kQ {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(QQ, FQ, wQ) {
        const LQ = function(QQ) {
          const FQ = {
              lines: new TextDecoder("utf-8").decode(QQ).split("\n"),
              index: 0
            },
            wQ = {
              version: FQ.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (FQ.index = 1; FQ.lines.length > 0 && !FQ.lines[FQ.index].includes("TILT=");) FQ.index++;
          FQ.lines[FQ.index].includes("INCLUDE"), FQ.index++;
          const LQ = qQ(FQ.lines[FQ.index++]);
          wQ.numberOfLights = LQ[0], wQ.lumensPerLamp = LQ[1], wQ.numberOfVerticalAngles = LQ[3], wQ.numberOfHorizontalAngles = LQ[4], wQ.photometricType = LQ[5], wQ.unitsType = LQ[6], wQ.width = LQ[7], wQ.length = LQ[8], wQ.height = LQ[9], FQ.index++;
          for (let qQ = 0; qQ < wQ.numberOfHorizontalAngles; qQ++) wQ.candelaValues[qQ] = [];
          oQ(FQ, wQ.numberOfVerticalAngles, wQ.verticalAngles), oQ(FQ, wQ.numberOfHorizontalAngles, wQ.horizontalAngles);
          for (let qQ = 0; qQ < wQ.numberOfHorizontalAngles; qQ++) oQ(FQ, wQ.numberOfVerticalAngles, wQ.candelaValues[qQ]);
          let kQ = -1;
          for (let qQ = 0; qQ < wQ.numberOfHorizontalAngles; qQ++)
            for (let QQ = 0; QQ < wQ.numberOfVerticalAngles; QQ++) kQ = Math.max(kQ, wQ.candelaValues[qQ][QQ]);
          if (kQ > 0)
            for (let qQ = 0; qQ < wQ.numberOfHorizontalAngles; qQ++)
              for (let QQ = 0; QQ < wQ.numberOfVerticalAngles; QQ++) wQ.candelaValues[qQ][QQ] /= kQ;
          const vQ = 180,
            mQ = 360,
            uQ = new Float32Array(64800),
            HQ = wQ.horizontalAngles[0],
            bQ = wQ.horizontalAngles[wQ.numberOfHorizontalAngles - 1];
          for (let qQ = 0; qQ < 64800; qQ++) {
            let QQ = qQ % mQ;
            const FQ = Math.floor(qQ / mQ);
            bQ - HQ !== 0 && (QQ < HQ || QQ >= bQ) && (QQ %= 2 * bQ, QQ > bQ && (QQ = 2 * bQ - QQ)), uQ[FQ + QQ * vQ] = DQ(wQ, FQ, QQ)
          }
          return {
            width: 180,
            height: 1,
            data: uQ
          }
        }(new Uint8Array(QQ.buffer, QQ.byteOffset, QQ.byteLength));
        wQ(LQ.width, LQ.height, !!FQ.useMipMaps, !1, (() => {
          const QQ = FQ.Wx();
          FQ.type = 1, FQ.format = 6, FQ._gammaSpace = !1, QQ._uploadDataToTextureDirectly(FQ, LQ.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);