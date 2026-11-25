export const id = 318;
export const ids = [318];
export const modules = {
  42021: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      _IESTextureLoader: () => sQ
    });
    var wQ = XQ(37404);

    function qQ(QQ) {
      return QQ.split(" ").filter((QQ => "" !== QQ)).map((QQ => parseFloat(QQ)))
    }

    function TQ(QQ, WQ, XQ) {
      for (; XQ.length !== WQ;) {
        const WQ = qQ(QQ.lines[QQ.index++]);
        XQ.push(...WQ)
      }
    }

    function zQ(QQ, WQ, XQ) {
      let qQ = 0,
        TQ = 0,
        zQ = 0,
        sQ = 0,
        FQ = 0,
        PQ = 0;
      for (let wQ = 0; wQ < QQ.numberOfHorizontalAngles - 1; wQ++)
        if (XQ < QQ.horizontalAngles[wQ + 1] || wQ === QQ.numberOfHorizontalAngles - 2) {
          TQ = wQ, zQ = QQ.horizontalAngles[wQ], sQ = QQ.horizontalAngles[wQ + 1];
          break
        } for (let wQ = 0; wQ < QQ.numberOfVerticalAngles - 1; wQ++)
        if (WQ < QQ.verticalAngles[wQ + 1] || wQ === QQ.numberOfVerticalAngles - 2) {
          qQ = wQ, FQ = QQ.verticalAngles[wQ], PQ = QQ.verticalAngles[wQ + 1];
          break
        } const gQ = sQ - zQ,
        JQ = PQ - FQ;
      if (0 === JQ) return 0;
      const rQ = 0 === gQ ? 0 : (XQ - zQ) / gQ,
        IQ = (WQ - FQ) / JQ,
        jQ = 0 === gQ ? TQ : TQ + 1,
        BQ = (0, wQ.Lerp)(QQ.candelaValues[TQ][qQ], QQ.candelaValues[jQ][qQ], rQ),
        yQ = (0, wQ.Lerp)(QQ.candelaValues[TQ][qQ + 1], QQ.candelaValues[jQ][qQ + 1], rQ);
      return (0, wQ.Lerp)(BQ, yQ, IQ)
    }
    class sQ {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(QQ, WQ, XQ) {
        const wQ = function(QQ) {
          const WQ = {
              lines: new TextDecoder("utf-8").decode(QQ).split("\n"),
              index: 0
            },
            XQ = {
              version: WQ.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (WQ.index = 1; WQ.lines.length > 0 && !WQ.lines[WQ.index].includes("TILT=");) WQ.index++;
          WQ.lines[WQ.index].includes("INCLUDE"), WQ.index++;
          const wQ = qQ(WQ.lines[WQ.index++]);
          XQ.numberOfLights = wQ[0], XQ.lumensPerLamp = wQ[1], XQ.numberOfVerticalAngles = wQ[3], XQ.numberOfHorizontalAngles = wQ[4], XQ.photometricType = wQ[5], XQ.unitsType = wQ[6], XQ.width = wQ[7], XQ.length = wQ[8], XQ.height = wQ[9], WQ.index++;
          for (let qQ = 0; qQ < XQ.numberOfHorizontalAngles; qQ++) XQ.candelaValues[qQ] = [];
          TQ(WQ, XQ.numberOfVerticalAngles, XQ.verticalAngles), TQ(WQ, XQ.numberOfHorizontalAngles, XQ.horizontalAngles);
          for (let qQ = 0; qQ < XQ.numberOfHorizontalAngles; qQ++) TQ(WQ, XQ.numberOfVerticalAngles, XQ.candelaValues[qQ]);
          let sQ = -1;
          for (let qQ = 0; qQ < XQ.numberOfHorizontalAngles; qQ++)
            for (let QQ = 0; QQ < XQ.numberOfVerticalAngles; QQ++) sQ = Math.max(sQ, XQ.candelaValues[qQ][QQ]);
          if (sQ > 0)
            for (let qQ = 0; qQ < XQ.numberOfHorizontalAngles; qQ++)
              for (let QQ = 0; QQ < XQ.numberOfVerticalAngles; QQ++) XQ.candelaValues[qQ][QQ] /= sQ;
          const FQ = 180,
            PQ = 360,
            gQ = new Float32Array(64800),
            JQ = XQ.horizontalAngles[0],
            rQ = XQ.horizontalAngles[XQ.numberOfHorizontalAngles - 1];
          for (let qQ = 0; qQ < 64800; qQ++) {
            let QQ = qQ % PQ;
            const WQ = Math.floor(qQ / PQ);
            rQ - JQ !== 0 && (QQ < JQ || QQ >= rQ) && (QQ %= 2 * rQ, QQ > rQ && (QQ = 2 * rQ - QQ)), gQ[WQ + QQ * FQ] = zQ(XQ, WQ, QQ)
          }
          return {
            width: 180,
            height: 1,
            data: gQ
          }
        }(new Uint8Array(QQ.buffer, QQ.byteOffset, QQ.byteLength));
        XQ(wQ.width, wQ.height, !!WQ.useMipMaps, !1, (() => {
          const QQ = WQ.Uj();
          WQ.type = 1, WQ.format = 6, WQ._gammaSpace = !1, QQ._uploadDataToTextureDirectly(WQ, wQ.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);