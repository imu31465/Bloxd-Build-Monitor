export const id = 309;
export const ids = [309];
export const modules = {
  41598: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      _IESTextureLoader: () => fC
    });
    var QC = ZC(36991);

    function wC(CC) {
      return CC.split(" ").filter((CC => "" !== CC)).map((CC => parseFloat(CC)))
    }

    function bC(CC, zC, ZC) {
      for (; ZC.length !== zC;) {
        const zC = wC(CC.lines[CC.index++]);
        ZC.push(...zC)
      }
    }

    function nC(CC, zC, ZC) {
      let wC = 0,
        bC = 0,
        nC = 0,
        fC = 0,
        oC = 0,
        qC = 0;
      for (let QC = 0; QC < CC.numberOfHorizontalAngles - 1; QC++)
        if (ZC < CC.horizontalAngles[QC + 1] || QC === CC.numberOfHorizontalAngles - 2) {
          bC = QC, nC = CC.horizontalAngles[QC], fC = CC.horizontalAngles[QC + 1];
          break
        } for (let QC = 0; QC < CC.numberOfVerticalAngles - 1; QC++)
        if (zC < CC.verticalAngles[QC + 1] || QC === CC.numberOfVerticalAngles - 2) {
          wC = QC, oC = CC.verticalAngles[QC], qC = CC.verticalAngles[QC + 1];
          break
        } const FC = fC - nC,
        WC = qC - oC;
      if (0 === WC) return 0;
      const NC = 0 === FC ? 0 : (ZC - nC) / FC,
        MC = (zC - oC) / WC,
        gC = 0 === FC ? bC : bC + 1,
        SC = (0, QC.Lerp)(CC.candelaValues[bC][wC], CC.candelaValues[gC][wC], NC),
        pC = (0, QC.Lerp)(CC.candelaValues[bC][wC + 1], CC.candelaValues[gC][wC + 1], NC);
      return (0, QC.Lerp)(SC, pC, MC)
    }
    class fC {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(CC, zC, ZC) {
        const QC = function(CC) {
          const zC = {
              lines: new TextDecoder("utf-8").decode(CC).split("\n"),
              index: 0
            },
            ZC = {
              version: zC.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (zC.index = 1; zC.lines.length > 0 && !zC.lines[zC.index].includes("TILT=");) zC.index++;
          zC.lines[zC.index].includes("INCLUDE"), zC.index++;
          const QC = wC(zC.lines[zC.index++]);
          ZC.numberOfLights = QC[0], ZC.lumensPerLamp = QC[1], ZC.numberOfVerticalAngles = QC[3], ZC.numberOfHorizontalAngles = QC[4], ZC.photometricType = QC[5], ZC.unitsType = QC[6], ZC.width = QC[7], ZC.length = QC[8], ZC.height = QC[9], zC.index++;
          for (let wC = 0; wC < ZC.numberOfHorizontalAngles; wC++) ZC.candelaValues[wC] = [];
          bC(zC, ZC.numberOfVerticalAngles, ZC.verticalAngles), bC(zC, ZC.numberOfHorizontalAngles, ZC.horizontalAngles);
          for (let wC = 0; wC < ZC.numberOfHorizontalAngles; wC++) bC(zC, ZC.numberOfVerticalAngles, ZC.candelaValues[wC]);
          let fC = -1;
          for (let wC = 0; wC < ZC.numberOfHorizontalAngles; wC++)
            for (let CC = 0; CC < ZC.numberOfVerticalAngles; CC++) fC = Math.max(fC, ZC.candelaValues[wC][CC]);
          if (fC > 0)
            for (let wC = 0; wC < ZC.numberOfHorizontalAngles; wC++)
              for (let CC = 0; CC < ZC.numberOfVerticalAngles; CC++) ZC.candelaValues[wC][CC] /= fC;
          const oC = 180,
            qC = 360,
            FC = new Float32Array(64800),
            WC = ZC.horizontalAngles[0],
            NC = ZC.horizontalAngles[ZC.numberOfHorizontalAngles - 1];
          for (let wC = 0; wC < 64800; wC++) {
            let CC = wC % qC;
            const zC = Math.floor(wC / qC);
            NC - WC !== 0 && (CC < WC || CC >= NC) && (CC %= 2 * NC, CC > NC && (CC = 2 * NC - CC)), FC[zC + CC * oC] = nC(ZC, zC, CC)
          }
          return {
            width: 180,
            height: 1,
            data: FC
          }
        }(new Uint8Array(CC.buffer, CC.byteOffset, CC.byteLength));
        ZC(QC.width, QC.height, !!zC.useMipMaps, !1, (() => {
          const CC = zC.mg();
          zC.type = 1, zC.format = 6, zC._gammaSpace = !1, CC._uploadDataToTextureDirectly(zC, QC.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);