export const id = 289;
export const ids = [289];
export const modules = {
  40470: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      _IESTextureLoader: () => JB
    });
    var VB = dB(36157);

    function yB(BB) {
      return BB.split(" ").filter((BB => "" !== BB)).map((BB => parseFloat(BB)))
    }

    function pB(BB, TB, dB) {
      for (; dB.length !== TB;) {
        const TB = yB(BB.lines[BB.index++]);
        dB.push(...TB)
      }
    }

    function lB(BB, TB, dB) {
      let yB = 0,
        pB = 0,
        lB = 0,
        JB = 0,
        YB = 0,
        gB = 0;
      for (let VB = 0; VB < BB.numberOfHorizontalAngles - 1; VB++)
        if (dB < BB.horizontalAngles[VB + 1] || VB === BB.numberOfHorizontalAngles - 2) {
          pB = VB, lB = BB.horizontalAngles[VB], JB = BB.horizontalAngles[VB + 1];
          break
        } for (let VB = 0; VB < BB.numberOfVerticalAngles - 1; VB++)
        if (TB < BB.verticalAngles[VB + 1] || VB === BB.numberOfVerticalAngles - 2) {
          yB = VB, YB = BB.verticalAngles[VB], gB = BB.verticalAngles[VB + 1];
          break
        } const oB = JB - lB,
        kB = gB - YB;
      if (0 === kB) return 0;
      const LB = 0 === oB ? 0 : (dB - lB) / oB,
        OB = (TB - YB) / kB,
        DB = 0 === oB ? pB : pB + 1,
        uB = (0, VB.Lerp)(BB.candelaValues[pB][yB], BB.candelaValues[DB][yB], LB),
        HB = (0, VB.Lerp)(BB.candelaValues[pB][yB + 1], BB.candelaValues[DB][yB + 1], LB);
      return (0, VB.Lerp)(uB, HB, OB)
    }
    class JB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(BB, TB, dB) {
        const VB = function(BB) {
          const TB = {
              lines: new TextDecoder("utf-8").decode(BB).split("\n"),
              index: 0
            },
            dB = {
              version: TB.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (TB.index = 1; TB.lines.length > 0 && !TB.lines[TB.index].includes("TILT=");) TB.index++;
          TB.lines[TB.index].includes("INCLUDE"), TB.index++;
          const VB = yB(TB.lines[TB.index++]);
          dB.numberOfLights = VB[0], dB.lumensPerLamp = VB[1], dB.numberOfVerticalAngles = VB[3], dB.numberOfHorizontalAngles = VB[4], dB.photometricType = VB[5], dB.unitsType = VB[6], dB.width = VB[7], dB.length = VB[8], dB.height = VB[9], TB.index++;
          for (let yB = 0; yB < dB.numberOfHorizontalAngles; yB++) dB.candelaValues[yB] = [];
          pB(TB, dB.numberOfVerticalAngles, dB.verticalAngles), pB(TB, dB.numberOfHorizontalAngles, dB.horizontalAngles);
          for (let yB = 0; yB < dB.numberOfHorizontalAngles; yB++) pB(TB, dB.numberOfVerticalAngles, dB.candelaValues[yB]);
          let JB = -1;
          for (let yB = 0; yB < dB.numberOfHorizontalAngles; yB++)
            for (let BB = 0; BB < dB.numberOfVerticalAngles; BB++) JB = Math.max(JB, dB.candelaValues[yB][BB]);
          if (JB > 0)
            for (let yB = 0; yB < dB.numberOfHorizontalAngles; yB++)
              for (let BB = 0; BB < dB.numberOfVerticalAngles; BB++) dB.candelaValues[yB][BB] /= JB;
          const YB = 180,
            gB = 360,
            oB = new Float32Array(64800),
            kB = dB.horizontalAngles[0],
            LB = dB.horizontalAngles[dB.numberOfHorizontalAngles - 1];
          for (let yB = 0; yB < 64800; yB++) {
            let BB = yB % gB;
            const TB = Math.floor(yB / gB);
            LB - kB !== 0 && (BB < kB || BB >= LB) && (BB %= 2 * LB, BB > LB && (BB = 2 * LB - BB)), oB[TB + BB * YB] = lB(dB, TB, BB)
          }
          return {
            width: 180,
            height: 1,
            data: oB
          }
        }(new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength));
        dB(VB.width, VB.height, !!TB.useMipMaps, !1, (() => {
          const BB = TB.PD();
          TB.type = 1, TB.format = 6, TB._gammaSpace = !1, BB._uploadDataToTextureDirectly(TB, VB.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);