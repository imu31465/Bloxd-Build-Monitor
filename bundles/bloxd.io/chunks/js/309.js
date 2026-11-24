export const id = 309;
export const ids = [309];
export const modules = {
  41686: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      _IESTextureLoader: () => LD
    });
    var pD = wD(37125);

    function sD(DD) {
      return DD.split(" ").filter((DD => "" !== DD)).map((DD => parseFloat(DD)))
    }

    function KD(DD, zD, wD) {
      for (; wD.length !== zD;) {
        const zD = sD(DD.lines[DD.index++]);
        wD.push(...zD)
      }
    }

    function rD(DD, zD, wD) {
      let sD = 0,
        KD = 0,
        rD = 0,
        LD = 0,
        cD = 0,
        gD = 0;
      for (let pD = 0; pD < DD.numberOfHorizontalAngles - 1; pD++)
        if (wD < DD.horizontalAngles[pD + 1] || pD === DD.numberOfHorizontalAngles - 2) {
          KD = pD, rD = DD.horizontalAngles[pD], LD = DD.horizontalAngles[pD + 1];
          break
        } for (let pD = 0; pD < DD.numberOfVerticalAngles - 1; pD++)
        if (zD < DD.verticalAngles[pD + 1] || pD === DD.numberOfVerticalAngles - 2) {
          sD = pD, cD = DD.verticalAngles[pD], gD = DD.verticalAngles[pD + 1];
          break
        } const RD = LD - rD,
        AD = gD - cD;
      if (0 === AD) return 0;
      const UD = 0 === RD ? 0 : (wD - rD) / RD,
        fD = (zD - cD) / AD,
        ID = 0 === RD ? KD : KD + 1,
        BD = (0, pD.Lerp)(DD.candelaValues[KD][sD], DD.candelaValues[ID][sD], UD),
        GD = (0, pD.Lerp)(DD.candelaValues[KD][sD + 1], DD.candelaValues[ID][sD + 1], UD);
      return (0, pD.Lerp)(BD, GD, fD)
    }
    class LD {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(DD, zD, wD) {
        const pD = function(DD) {
          const zD = {
              lines: new TextDecoder("utf-8").decode(DD).split("\n"),
              index: 0
            },
            wD = {
              version: zD.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (zD.index = 1; zD.lines.length > 0 && !zD.lines[zD.index].includes("TILT=");) zD.index++;
          zD.lines[zD.index].includes("INCLUDE"), zD.index++;
          const pD = sD(zD.lines[zD.index++]);
          wD.numberOfLights = pD[0], wD.lumensPerLamp = pD[1], wD.numberOfVerticalAngles = pD[3], wD.numberOfHorizontalAngles = pD[4], wD.photometricType = pD[5], wD.unitsType = pD[6], wD.width = pD[7], wD.length = pD[8], wD.height = pD[9], zD.index++;
          for (let sD = 0; sD < wD.numberOfHorizontalAngles; sD++) wD.candelaValues[sD] = [];
          KD(zD, wD.numberOfVerticalAngles, wD.verticalAngles), KD(zD, wD.numberOfHorizontalAngles, wD.horizontalAngles);
          for (let sD = 0; sD < wD.numberOfHorizontalAngles; sD++) KD(zD, wD.numberOfVerticalAngles, wD.candelaValues[sD]);
          let LD = -1;
          for (let sD = 0; sD < wD.numberOfHorizontalAngles; sD++)
            for (let DD = 0; DD < wD.numberOfVerticalAngles; DD++) LD = Math.max(LD, wD.candelaValues[sD][DD]);
          if (LD > 0)
            for (let sD = 0; sD < wD.numberOfHorizontalAngles; sD++)
              for (let DD = 0; DD < wD.numberOfVerticalAngles; DD++) wD.candelaValues[sD][DD] /= LD;
          const cD = 180,
            gD = 360,
            RD = new Float32Array(64800),
            AD = wD.horizontalAngles[0],
            UD = wD.horizontalAngles[wD.numberOfHorizontalAngles - 1];
          for (let sD = 0; sD < 64800; sD++) {
            let DD = sD % gD;
            const zD = Math.floor(sD / gD);
            UD - AD !== 0 && (DD < AD || DD >= UD) && (DD %= 2 * UD, DD > UD && (DD = 2 * UD - DD)), RD[zD + DD * cD] = rD(wD, zD, DD)
          }
          return {
            width: 180,
            height: 1,
            data: RD
          }
        }(new Uint8Array(DD.buffer, DD.byteOffset, DD.byteLength));
        wD(pD.width, pD.height, !!zD.useMipMaps, !1, (() => {
          const DD = zD.iI();
          zD.type = 1, zD.format = 6, zD._gammaSpace = !1, DD._uploadDataToTextureDirectly(zD, pD.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);