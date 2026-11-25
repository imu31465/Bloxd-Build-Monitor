export const id = 314;
export const ids = [314];
export const modules = {
  41798: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      _IESTextureLoader: () => vB
    });
    var TB = ZB(37158);

    function JB(BB) {
      return BB.split(" ").filter((BB => "" !== BB)).map((BB => parseFloat(BB)))
    }

    function oB(BB, IB, ZB) {
      for (; ZB.length !== IB;) {
        const IB = JB(BB.lines[BB.index++]);
        ZB.push(...IB)
      }
    }

    function GB(BB, IB, ZB) {
      let JB = 0,
        oB = 0,
        GB = 0,
        vB = 0,
        kB = 0,
        cB = 0;
      for (let TB = 0; TB < BB.numberOfHorizontalAngles - 1; TB++)
        if (ZB < BB.horizontalAngles[TB + 1] || TB === BB.numberOfHorizontalAngles - 2) {
          oB = TB, GB = BB.horizontalAngles[TB], vB = BB.horizontalAngles[TB + 1];
          break
        } for (let TB = 0; TB < BB.numberOfVerticalAngles - 1; TB++)
        if (IB < BB.verticalAngles[TB + 1] || TB === BB.numberOfVerticalAngles - 2) {
          JB = TB, kB = BB.verticalAngles[TB], cB = BB.verticalAngles[TB + 1];
          break
        } const nB = vB - GB,
        hB = cB - kB;
      if (0 === hB) return 0;
      const zB = 0 === nB ? 0 : (ZB - GB) / nB,
        FB = (IB - kB) / hB,
        NB = 0 === nB ? oB : oB + 1,
        gB = (0, TB.Lerp)(BB.candelaValues[oB][JB], BB.candelaValues[NB][JB], zB),
        qB = (0, TB.Lerp)(BB.candelaValues[oB][JB + 1], BB.candelaValues[NB][JB + 1], zB);
      return (0, TB.Lerp)(gB, qB, FB)
    }
    class vB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(BB, IB, ZB) {
        const TB = function(BB) {
          const IB = {
              lines: new TextDecoder("utf-8").decode(BB).split("\n"),
              index: 0
            },
            ZB = {
              version: IB.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (IB.index = 1; IB.lines.length > 0 && !IB.lines[IB.index].includes("TILT=");) IB.index++;
          IB.lines[IB.index].includes("INCLUDE"), IB.index++;
          const TB = JB(IB.lines[IB.index++]);
          ZB.numberOfLights = TB[0], ZB.lumensPerLamp = TB[1], ZB.numberOfVerticalAngles = TB[3], ZB.numberOfHorizontalAngles = TB[4], ZB.photometricType = TB[5], ZB.unitsType = TB[6], ZB.width = TB[7], ZB.length = TB[8], ZB.height = TB[9], IB.index++;
          for (let JB = 0; JB < ZB.numberOfHorizontalAngles; JB++) ZB.candelaValues[JB] = [];
          oB(IB, ZB.numberOfVerticalAngles, ZB.verticalAngles), oB(IB, ZB.numberOfHorizontalAngles, ZB.horizontalAngles);
          for (let JB = 0; JB < ZB.numberOfHorizontalAngles; JB++) oB(IB, ZB.numberOfVerticalAngles, ZB.candelaValues[JB]);
          let vB = -1;
          for (let JB = 0; JB < ZB.numberOfHorizontalAngles; JB++)
            for (let BB = 0; BB < ZB.numberOfVerticalAngles; BB++) vB = Math.max(vB, ZB.candelaValues[JB][BB]);
          if (vB > 0)
            for (let JB = 0; JB < ZB.numberOfHorizontalAngles; JB++)
              for (let BB = 0; BB < ZB.numberOfVerticalAngles; BB++) ZB.candelaValues[JB][BB] /= vB;
          const kB = 180,
            cB = 360,
            nB = new Float32Array(64800),
            hB = ZB.horizontalAngles[0],
            zB = ZB.horizontalAngles[ZB.numberOfHorizontalAngles - 1];
          for (let JB = 0; JB < 64800; JB++) {
            let BB = JB % cB;
            const IB = Math.floor(JB / cB);
            zB - hB !== 0 && (BB < hB || BB >= zB) && (BB %= 2 * zB, BB > zB && (BB = 2 * zB - BB)), nB[IB + BB * kB] = GB(ZB, IB, BB)
          }
          return {
            width: 180,
            height: 1,
            data: nB
          }
        }(new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength));
        ZB(TB.width, TB.height, !!IB.useMipMaps, !1, (() => {
          const BB = IB.PN();
          IB.type = 1, IB.format = 6, IB._gammaSpace = !1, BB._uploadDataToTextureDirectly(IB, TB.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);