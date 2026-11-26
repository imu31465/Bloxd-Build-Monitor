export const id = 615;
export const ids = [615];
export const modules = {
  44461: (UU, XU, zU) => {
    zU.r(XU), zU.d(XU, {
      _IESTextureLoader: () => FU
    });
    var cU = zU(37855);

    function yU(UU) {
      return UU.split(" ").filter((UU => "" !== UU)).map((UU => parseFloat(UU)))
    }

    function QU(UU, XU, zU) {
      for (; zU.length !== XU;) {
        const XU = yU(UU.lines[UU.index++]);
        zU.push(...XU)
      }
    }

    function AU(UU, XU, zU) {
      let yU = 0,
        QU = 0,
        AU = 0,
        FU = 0,
        oU = 0,
        DU = 0;
      for (let cU = 0; cU < UU.numberOfHorizontalAngles - 1; cU++)
        if (zU < UU.horizontalAngles[cU + 1] || cU === UU.numberOfHorizontalAngles - 2) {
          QU = cU, AU = UU.horizontalAngles[cU], FU = UU.horizontalAngles[cU + 1];
          break
        } for (let cU = 0; cU < UU.numberOfVerticalAngles - 1; cU++)
        if (XU < UU.verticalAngles[cU + 1] || cU === UU.numberOfVerticalAngles - 2) {
          yU = cU, oU = UU.verticalAngles[cU], DU = UU.verticalAngles[cU + 1];
          break
        } const EU = FU - AU,
        YU = DU - oU;
      if (0 === YU) return 0;
      const NU = 0 === EU ? 0 : (zU - AU) / EU,
        IU = (XU - oU) / YU,
        pU = 0 === EU ? QU : QU + 1,
        aU = (0, cU.Lerp)(UU.candelaValues[QU][yU], UU.candelaValues[pU][yU], NU),
        tU = (0, cU.Lerp)(UU.candelaValues[QU][yU + 1], UU.candelaValues[pU][yU + 1], NU);
      return (0, cU.Lerp)(aU, tU, IU)
    }
    class FU {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(UU, XU, zU) {
        const cU = function(UU) {
          const XU = {
              lines: new TextDecoder("utf-8").decode(UU).split("\n"),
              index: 0
            },
            zU = {
              version: XU.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (XU.index = 1; XU.lines.length > 0 && !XU.lines[XU.index].includes("TILT=");) XU.index++;
          XU.lines[XU.index].includes("INCLUDE"), XU.index++;
          const cU = yU(XU.lines[XU.index++]);
          zU.numberOfLights = cU[0], zU.lumensPerLamp = cU[1], zU.numberOfVerticalAngles = cU[3], zU.numberOfHorizontalAngles = cU[4], zU.photometricType = cU[5], zU.unitsType = cU[6], zU.width = cU[7], zU.length = cU[8], zU.height = cU[9], XU.index++;
          for (let yU = 0; yU < zU.numberOfHorizontalAngles; yU++) zU.candelaValues[yU] = [];
          QU(XU, zU.numberOfVerticalAngles, zU.verticalAngles), QU(XU, zU.numberOfHorizontalAngles, zU.horizontalAngles);
          for (let yU = 0; yU < zU.numberOfHorizontalAngles; yU++) QU(XU, zU.numberOfVerticalAngles, zU.candelaValues[yU]);
          let FU = -1;
          for (let yU = 0; yU < zU.numberOfHorizontalAngles; yU++)
            for (let UU = 0; UU < zU.numberOfVerticalAngles; UU++) FU = Math.max(FU, zU.candelaValues[yU][UU]);
          if (FU > 0)
            for (let yU = 0; yU < zU.numberOfHorizontalAngles; yU++)
              for (let UU = 0; UU < zU.numberOfVerticalAngles; UU++) zU.candelaValues[yU][UU] /= FU;
          const oU = 180,
            DU = 360,
            EU = new Float32Array(64800),
            YU = zU.horizontalAngles[0],
            NU = zU.horizontalAngles[zU.numberOfHorizontalAngles - 1];
          for (let yU = 0; yU < 64800; yU++) {
            let UU = yU % DU;
            const XU = Math.floor(yU / DU);
            NU - YU !== 0 && (UU < YU || UU >= NU) && (UU %= 2 * NU, UU > NU && (UU = 2 * NU - UU)), EU[XU + UU * oU] = AU(zU, XU, UU)
          }
          return {
            width: 180,
            height: 1,
            data: EU
          }
        }(new Uint8Array(UU.buffer, UU.byteOffset, UU.byteLength));
        zU(cU.width, cU.height, !!XU.useMipMaps, !1, (() => {
          const UU = XU.qp();
          XU.type = 1, XU.format = 6, XU._gammaSpace = !1, UU._uploadDataToTextureDirectly(XU, cU.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const UU in modules) Object.freeze(modules[UU]);