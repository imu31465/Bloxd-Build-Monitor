export const id = 299;
export const ids = [299];
export const modules = {
  40833: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      _IESTextureLoader: () => OY
    });
    var FY = DY(36559);

    function AY(YY) {
      return YY.split(" ").filter((YY => "" !== YY)).map((YY => parseFloat(YY)))
    }

    function IY(YY, rY, DY) {
      for (; DY.length !== rY;) {
        const rY = AY(YY.lines[YY.index++]);
        DY.push(...rY)
      }
    }

    function RY(YY, rY, DY) {
      let AY = 0,
        IY = 0,
        RY = 0,
        OY = 0,
        gY = 0,
        aY = 0;
      for (let FY = 0; FY < YY.numberOfHorizontalAngles - 1; FY++)
        if (DY < YY.horizontalAngles[FY + 1] || FY === YY.numberOfHorizontalAngles - 2) {
          IY = FY, RY = YY.horizontalAngles[FY], OY = YY.horizontalAngles[FY + 1];
          break
        } for (let FY = 0; FY < YY.numberOfVerticalAngles - 1; FY++)
        if (rY < YY.verticalAngles[FY + 1] || FY === YY.numberOfVerticalAngles - 2) {
          AY = FY, gY = YY.verticalAngles[FY], aY = YY.verticalAngles[FY + 1];
          break
        } const vY = OY - RY,
        uY = aY - gY;
      if (0 === uY) return 0;
      const sY = 0 === vY ? 0 : (DY - RY) / vY,
        iY = (rY - gY) / uY,
        yY = 0 === vY ? IY : IY + 1,
        QY = (0, FY.Lerp)(YY.candelaValues[IY][AY], YY.candelaValues[yY][AY], sY),
        oY = (0, FY.Lerp)(YY.candelaValues[IY][AY + 1], YY.candelaValues[yY][AY + 1], sY);
      return (0, FY.Lerp)(QY, oY, iY)
    }
    class OY {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(YY, rY, DY) {
        const FY = function(YY) {
          const rY = {
              lines: new TextDecoder("utf-8").decode(YY).split("\n"),
              index: 0
            },
            DY = {
              version: rY.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (rY.index = 1; rY.lines.length > 0 && !rY.lines[rY.index].includes("TILT=");) rY.index++;
          rY.lines[rY.index].includes("INCLUDE"), rY.index++;
          const FY = AY(rY.lines[rY.index++]);
          DY.numberOfLights = FY[0], DY.lumensPerLamp = FY[1], DY.numberOfVerticalAngles = FY[3], DY.numberOfHorizontalAngles = FY[4], DY.photometricType = FY[5], DY.unitsType = FY[6], DY.width = FY[7], DY.length = FY[8], DY.height = FY[9], rY.index++;
          for (let AY = 0; AY < DY.numberOfHorizontalAngles; AY++) DY.candelaValues[AY] = [];
          IY(rY, DY.numberOfVerticalAngles, DY.verticalAngles), IY(rY, DY.numberOfHorizontalAngles, DY.horizontalAngles);
          for (let AY = 0; AY < DY.numberOfHorizontalAngles; AY++) IY(rY, DY.numberOfVerticalAngles, DY.candelaValues[AY]);
          let OY = -1;
          for (let AY = 0; AY < DY.numberOfHorizontalAngles; AY++)
            for (let YY = 0; YY < DY.numberOfVerticalAngles; YY++) OY = Math.max(OY, DY.candelaValues[AY][YY]);
          if (OY > 0)
            for (let AY = 0; AY < DY.numberOfHorizontalAngles; AY++)
              for (let YY = 0; YY < DY.numberOfVerticalAngles; YY++) DY.candelaValues[AY][YY] /= OY;
          const gY = 180,
            aY = 360,
            vY = new Float32Array(64800),
            uY = DY.horizontalAngles[0],
            sY = DY.horizontalAngles[DY.numberOfHorizontalAngles - 1];
          for (let AY = 0; AY < 64800; AY++) {
            let YY = AY % aY;
            const rY = Math.floor(AY / aY);
            sY - uY !== 0 && (YY < uY || YY >= sY) && (YY %= 2 * sY, YY > sY && (YY = 2 * sY - YY)), vY[rY + YY * gY] = RY(DY, rY, YY)
          }
          return {
            width: 180,
            height: 1,
            data: vY
          }
        }(new Uint8Array(YY.buffer, YY.byteOffset, YY.byteLength));
        DY(FY.width, FY.height, !!rY.useMipMaps, !1, (() => {
          const YY = rY.ky();
          rY.type = 1, rY.format = 6, rY._gammaSpace = !1, YY._uploadDataToTextureDirectly(rY, FY.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);