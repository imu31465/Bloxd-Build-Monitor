export const id = 289;
export const ids = [289];
export const modules = {
  40483: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      _IESTextureLoader: () => AJ
    });
    var FJ = ZJ(36207);

    function UJ(JJ) {
      return JJ.split(" ").filter((JJ => "" !== JJ)).map((JJ => parseFloat(JJ)))
    }

    function eJ(JJ, cJ, ZJ) {
      for (; ZJ.length !== cJ;) {
        const cJ = UJ(JJ.lines[JJ.index++]);
        ZJ.push(...cJ)
      }
    }

    function XJ(JJ, cJ, ZJ) {
      let UJ = 0,
        eJ = 0,
        XJ = 0,
        AJ = 0,
        qJ = 0,
        jJ = 0;
      for (let FJ = 0; FJ < JJ.numberOfHorizontalAngles - 1; FJ++)
        if (ZJ < JJ.horizontalAngles[FJ + 1] || FJ === JJ.numberOfHorizontalAngles - 2) {
          eJ = FJ, XJ = JJ.horizontalAngles[FJ], AJ = JJ.horizontalAngles[FJ + 1];
          break
        } for (let FJ = 0; FJ < JJ.numberOfVerticalAngles - 1; FJ++)
        if (cJ < JJ.verticalAngles[FJ + 1] || FJ === JJ.numberOfVerticalAngles - 2) {
          UJ = FJ, qJ = JJ.verticalAngles[FJ], jJ = JJ.verticalAngles[FJ + 1];
          break
        } const YJ = AJ - XJ,
        hJ = jJ - qJ;
      if (0 === hJ) return 0;
      const DJ = 0 === YJ ? 0 : (ZJ - XJ) / YJ,
        sJ = (cJ - qJ) / hJ,
        nJ = 0 === YJ ? eJ : eJ + 1,
        GJ = (0, FJ.Lerp)(JJ.candelaValues[eJ][UJ], JJ.candelaValues[nJ][UJ], DJ),
        fJ = (0, FJ.Lerp)(JJ.candelaValues[eJ][UJ + 1], JJ.candelaValues[nJ][UJ + 1], DJ);
      return (0, FJ.Lerp)(GJ, fJ, sJ)
    }
    class AJ {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(JJ, cJ, ZJ) {
        const FJ = function(JJ) {
          const cJ = {
              lines: new TextDecoder("utf-8").decode(JJ).split("\n"),
              index: 0
            },
            ZJ = {
              version: cJ.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (cJ.index = 1; cJ.lines.length > 0 && !cJ.lines[cJ.index].includes("TILT=");) cJ.index++;
          cJ.lines[cJ.index].includes("INCLUDE"), cJ.index++;
          const FJ = UJ(cJ.lines[cJ.index++]);
          ZJ.numberOfLights = FJ[0], ZJ.lumensPerLamp = FJ[1], ZJ.numberOfVerticalAngles = FJ[3], ZJ.numberOfHorizontalAngles = FJ[4], ZJ.photometricType = FJ[5], ZJ.unitsType = FJ[6], ZJ.width = FJ[7], ZJ.length = FJ[8], ZJ.height = FJ[9], cJ.index++;
          for (let UJ = 0; UJ < ZJ.numberOfHorizontalAngles; UJ++) ZJ.candelaValues[UJ] = [];
          eJ(cJ, ZJ.numberOfVerticalAngles, ZJ.verticalAngles), eJ(cJ, ZJ.numberOfHorizontalAngles, ZJ.horizontalAngles);
          for (let UJ = 0; UJ < ZJ.numberOfHorizontalAngles; UJ++) eJ(cJ, ZJ.numberOfVerticalAngles, ZJ.candelaValues[UJ]);
          let AJ = -1;
          for (let UJ = 0; UJ < ZJ.numberOfHorizontalAngles; UJ++)
            for (let JJ = 0; JJ < ZJ.numberOfVerticalAngles; JJ++) AJ = Math.max(AJ, ZJ.candelaValues[UJ][JJ]);
          if (AJ > 0)
            for (let UJ = 0; UJ < ZJ.numberOfHorizontalAngles; UJ++)
              for (let JJ = 0; JJ < ZJ.numberOfVerticalAngles; JJ++) ZJ.candelaValues[UJ][JJ] /= AJ;
          const qJ = 180,
            jJ = 360,
            YJ = new Float32Array(64800),
            hJ = ZJ.horizontalAngles[0],
            DJ = ZJ.horizontalAngles[ZJ.numberOfHorizontalAngles - 1];
          for (let UJ = 0; UJ < 64800; UJ++) {
            let JJ = UJ % jJ;
            const cJ = Math.floor(UJ / jJ);
            DJ - hJ !== 0 && (JJ < hJ || JJ >= DJ) && (JJ %= 2 * DJ, JJ > DJ && (JJ = 2 * DJ - JJ)), YJ[cJ + JJ * qJ] = XJ(ZJ, cJ, JJ)
          }
          return {
            width: 180,
            height: 1,
            data: YJ
          }
        }(new Uint8Array(JJ.buffer, JJ.byteOffset, JJ.byteLength));
        ZJ(FJ.width, FJ.height, !!cJ.useMipMaps, !1, (() => {
          const JJ = cJ.gn();
          cJ.type = 1, cJ.format = 6, cJ._gammaSpace = !1, JJ._uploadDataToTextureDirectly(cJ, FJ.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);