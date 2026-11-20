export const id = 299;
export const ids = [299];
export const modules = {
  41116: (UU, RU, gU) => {
    gU.r(RU), gU.d(RU, {
      _IESTextureLoader: () => TU
    });
    var tU = gU(36626);

    function pU(UU) {
      return UU.split(" ").filter((UU => "" !== UU)).map((UU => parseFloat(UU)))
    }

    function EU(UU, RU, gU) {
      for (; gU.length !== RU;) {
        const RU = pU(UU.lines[UU.index++]);
        gU.push(...RU)
      }
    }

    function PU(UU, RU, gU) {
      let pU = 0,
        EU = 0,
        PU = 0,
        TU = 0,
        qU = 0,
        KU = 0;
      for (let tU = 0; tU < UU.numberOfHorizontalAngles - 1; tU++)
        if (gU < UU.horizontalAngles[tU + 1] || tU === UU.numberOfHorizontalAngles - 2) {
          EU = tU, PU = UU.horizontalAngles[tU], TU = UU.horizontalAngles[tU + 1];
          break
        } for (let tU = 0; tU < UU.numberOfVerticalAngles - 1; tU++)
        if (RU < UU.verticalAngles[tU + 1] || tU === UU.numberOfVerticalAngles - 2) {
          pU = tU, qU = UU.verticalAngles[tU], KU = UU.verticalAngles[tU + 1];
          break
        } const cU = TU - PU,
        GU = KU - qU;
      if (0 === GU) return 0;
      const jU = 0 === cU ? 0 : (gU - PU) / cU,
        uU = (RU - qU) / GU,
        CU = 0 === cU ? EU : EU + 1,
        hU = (0, tU.Lerp)(UU.candelaValues[EU][pU], UU.candelaValues[CU][pU], jU),
        QU = (0, tU.Lerp)(UU.candelaValues[EU][pU + 1], UU.candelaValues[CU][pU + 1], jU);
      return (0, tU.Lerp)(hU, QU, uU)
    }
    class TU {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(UU, RU, gU) {
        const tU = function(UU) {
          const RU = {
              lines: new TextDecoder("utf-8").decode(UU).split("\n"),
              index: 0
            },
            gU = {
              version: RU.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (RU.index = 1; RU.lines.length > 0 && !RU.lines[RU.index].includes("TILT=");) RU.index++;
          RU.lines[RU.index].includes("INCLUDE"), RU.index++;
          const tU = pU(RU.lines[RU.index++]);
          gU.numberOfLights = tU[0], gU.lumensPerLamp = tU[1], gU.numberOfVerticalAngles = tU[3], gU.numberOfHorizontalAngles = tU[4], gU.photometricType = tU[5], gU.unitsType = tU[6], gU.width = tU[7], gU.length = tU[8], gU.height = tU[9], RU.index++;
          for (let pU = 0; pU < gU.numberOfHorizontalAngles; pU++) gU.candelaValues[pU] = [];
          EU(RU, gU.numberOfVerticalAngles, gU.verticalAngles), EU(RU, gU.numberOfHorizontalAngles, gU.horizontalAngles);
          for (let pU = 0; pU < gU.numberOfHorizontalAngles; pU++) EU(RU, gU.numberOfVerticalAngles, gU.candelaValues[pU]);
          let TU = -1;
          for (let pU = 0; pU < gU.numberOfHorizontalAngles; pU++)
            for (let UU = 0; UU < gU.numberOfVerticalAngles; UU++) TU = Math.max(TU, gU.candelaValues[pU][UU]);
          if (TU > 0)
            for (let pU = 0; pU < gU.numberOfHorizontalAngles; pU++)
              for (let UU = 0; UU < gU.numberOfVerticalAngles; UU++) gU.candelaValues[pU][UU] /= TU;
          const qU = 180,
            KU = 360,
            cU = new Float32Array(64800),
            GU = gU.horizontalAngles[0],
            jU = gU.horizontalAngles[gU.numberOfHorizontalAngles - 1];
          for (let pU = 0; pU < 64800; pU++) {
            let UU = pU % KU;
            const RU = Math.floor(pU / KU);
            jU - GU !== 0 && (UU < GU || UU >= jU) && (UU %= 2 * jU, UU > jU && (UU = 2 * jU - UU)), cU[RU + UU * qU] = PU(gU, RU, UU)
          }
          return {
            width: 180,
            height: 1,
            data: cU
          }
        }(new Uint8Array(UU.buffer, UU.byteOffset, UU.byteLength));
        gU(tU.width, tU.height, !!RU.useMipMaps, !1, (() => {
          const UU = RU.WC();
          RU.type = 1, RU.format = 6, RU._gammaSpace = !1, UU._uploadDataToTextureDirectly(RU, tU.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);