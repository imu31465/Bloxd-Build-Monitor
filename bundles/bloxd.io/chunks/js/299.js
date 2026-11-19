export const id = 299;
export const ids = [299];
export const modules = {
  40867: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      _IESTextureLoader: () => bD
    });
    var ID = cD(36479);

    function pD(DD) {
      return DD.split(" ").filter((DD => "" !== DD)).map((DD => parseFloat(DD)))
    }

    function iD(DD, CD, cD) {
      for (; cD.length !== CD;) {
        const CD = pD(DD.lines[DD.index++]);
        cD.push(...CD)
      }
    }

    function fD(DD, CD, cD) {
      let pD = 0,
        iD = 0,
        fD = 0,
        bD = 0,
        QD = 0,
        wD = 0;
      for (let ID = 0; ID < DD.numberOfHorizontalAngles - 1; ID++)
        if (cD < DD.horizontalAngles[ID + 1] || ID === DD.numberOfHorizontalAngles - 2) {
          iD = ID, fD = DD.horizontalAngles[ID], bD = DD.horizontalAngles[ID + 1];
          break
        } for (let ID = 0; ID < DD.numberOfVerticalAngles - 1; ID++)
        if (CD < DD.verticalAngles[ID + 1] || ID === DD.numberOfVerticalAngles - 2) {
          pD = ID, QD = DD.verticalAngles[ID], wD = DD.verticalAngles[ID + 1];
          break
        } const SD = bD - fD,
        BD = wD - QD;
      if (0 === BD) return 0;
      const yD = 0 === SD ? 0 : (cD - fD) / SD,
        MD = (CD - QD) / BD,
        tD = 0 === SD ? iD : iD + 1,
        ZD = (0, ID.Lerp)(DD.candelaValues[iD][pD], DD.candelaValues[tD][pD], yD),
        oD = (0, ID.Lerp)(DD.candelaValues[iD][pD + 1], DD.candelaValues[tD][pD + 1], yD);
      return (0, ID.Lerp)(ZD, oD, MD)
    }
    class bD {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(DD, CD, cD) {
        const ID = function(DD) {
          const CD = {
              lines: new TextDecoder("utf-8").decode(DD).split("\n"),
              index: 0
            },
            cD = {
              version: CD.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (CD.index = 1; CD.lines.length > 0 && !CD.lines[CD.index].includes("TILT=");) CD.index++;
          CD.lines[CD.index].includes("INCLUDE"), CD.index++;
          const ID = pD(CD.lines[CD.index++]);
          cD.numberOfLights = ID[0], cD.lumensPerLamp = ID[1], cD.numberOfVerticalAngles = ID[3], cD.numberOfHorizontalAngles = ID[4], cD.photometricType = ID[5], cD.unitsType = ID[6], cD.width = ID[7], cD.length = ID[8], cD.height = ID[9], CD.index++;
          for (let pD = 0; pD < cD.numberOfHorizontalAngles; pD++) cD.candelaValues[pD] = [];
          iD(CD, cD.numberOfVerticalAngles, cD.verticalAngles), iD(CD, cD.numberOfHorizontalAngles, cD.horizontalAngles);
          for (let pD = 0; pD < cD.numberOfHorizontalAngles; pD++) iD(CD, cD.numberOfVerticalAngles, cD.candelaValues[pD]);
          let bD = -1;
          for (let pD = 0; pD < cD.numberOfHorizontalAngles; pD++)
            for (let DD = 0; DD < cD.numberOfVerticalAngles; DD++) bD = Math.max(bD, cD.candelaValues[pD][DD]);
          if (bD > 0)
            for (let pD = 0; pD < cD.numberOfHorizontalAngles; pD++)
              for (let DD = 0; DD < cD.numberOfVerticalAngles; DD++) cD.candelaValues[pD][DD] /= bD;
          const QD = 180,
            wD = 360,
            SD = new Float32Array(64800),
            BD = cD.horizontalAngles[0],
            yD = cD.horizontalAngles[cD.numberOfHorizontalAngles - 1];
          for (let pD = 0; pD < 64800; pD++) {
            let DD = pD % wD;
            const CD = Math.floor(pD / wD);
            yD - BD !== 0 && (DD < BD || DD >= yD) && (DD %= 2 * yD, DD > yD && (DD = 2 * yD - DD)), SD[CD + DD * QD] = fD(cD, CD, DD)
          }
          return {
            width: 180,
            height: 1,
            data: SD
          }
        }(new Uint8Array(DD.buffer, DD.byteOffset, DD.byteLength));
        cD(ID.width, ID.height, !!CD.useMipMaps, !1, (() => {
          const DD = CD.DZ();
          CD.type = 1, CD.format = 6, CD._gammaSpace = !1, DD._uploadDataToTextureDirectly(CD, ID.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);