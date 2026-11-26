export const id = 618;
export const ids = [618];
export const modules = {
  44911: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      _IESTextureLoader: () => jB
    });
    var YB = GB(37807);

    function DB(BB) {
      return BB.split(" ").filter((BB => "" !== BB)).map((BB => parseFloat(BB)))
    }

    function QB(BB, OB, GB) {
      for (; GB.length !== OB;) {
        const OB = DB(BB.lines[BB.index++]);
        GB.push(...OB)
      }
    }

    function oB(BB, OB, GB) {
      let DB = 0,
        QB = 0,
        oB = 0,
        jB = 0,
        yB = 0,
        JB = 0;
      for (let YB = 0; YB < BB.numberOfHorizontalAngles - 1; YB++)
        if (GB < BB.horizontalAngles[YB + 1] || YB === BB.numberOfHorizontalAngles - 2) {
          QB = YB, oB = BB.horizontalAngles[YB], jB = BB.horizontalAngles[YB + 1];
          break
        } for (let YB = 0; YB < BB.numberOfVerticalAngles - 1; YB++)
        if (OB < BB.verticalAngles[YB + 1] || YB === BB.numberOfVerticalAngles - 2) {
          DB = YB, yB = BB.verticalAngles[YB], JB = BB.verticalAngles[YB + 1];
          break
        } const MB = jB - oB,
        PB = JB - yB;
      if (0 === PB) return 0;
      const zB = 0 === MB ? 0 : (GB - oB) / MB,
        lB = (OB - yB) / PB,
        pB = 0 === MB ? QB : QB + 1,
        qB = (0, YB.Lerp)(BB.candelaValues[QB][DB], BB.candelaValues[pB][DB], zB),
        ZB = (0, YB.Lerp)(BB.candelaValues[QB][DB + 1], BB.candelaValues[pB][DB + 1], zB);
      return (0, YB.Lerp)(qB, ZB, lB)
    }
    class jB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(BB, OB, GB) {
        const YB = function(BB) {
          const OB = {
              lines: new TextDecoder("utf-8").decode(BB).split("\n"),
              index: 0
            },
            GB = {
              version: OB.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (OB.index = 1; OB.lines.length > 0 && !OB.lines[OB.index].includes("TILT=");) OB.index++;
          OB.lines[OB.index].includes("INCLUDE"), OB.index++;
          const YB = DB(OB.lines[OB.index++]);
          GB.numberOfLights = YB[0], GB.lumensPerLamp = YB[1], GB.numberOfVerticalAngles = YB[3], GB.numberOfHorizontalAngles = YB[4], GB.photometricType = YB[5], GB.unitsType = YB[6], GB.width = YB[7], GB.length = YB[8], GB.height = YB[9], OB.index++;
          for (let DB = 0; DB < GB.numberOfHorizontalAngles; DB++) GB.candelaValues[DB] = [];
          QB(OB, GB.numberOfVerticalAngles, GB.verticalAngles), QB(OB, GB.numberOfHorizontalAngles, GB.horizontalAngles);
          for (let DB = 0; DB < GB.numberOfHorizontalAngles; DB++) QB(OB, GB.numberOfVerticalAngles, GB.candelaValues[DB]);
          let jB = -1;
          for (let DB = 0; DB < GB.numberOfHorizontalAngles; DB++)
            for (let BB = 0; BB < GB.numberOfVerticalAngles; BB++) jB = Math.max(jB, GB.candelaValues[DB][BB]);
          if (jB > 0)
            for (let DB = 0; DB < GB.numberOfHorizontalAngles; DB++)
              for (let BB = 0; BB < GB.numberOfVerticalAngles; BB++) GB.candelaValues[DB][BB] /= jB;
          const yB = 180,
            JB = 360,
            MB = new Float32Array(64800),
            PB = GB.horizontalAngles[0],
            zB = GB.horizontalAngles[GB.numberOfHorizontalAngles - 1];
          for (let DB = 0; DB < 64800; DB++) {
            let BB = DB % JB;
            const OB = Math.floor(DB / JB);
            zB - PB !== 0 && (BB < PB || BB >= zB) && (BB %= 2 * zB, BB > zB && (BB = 2 * zB - BB)), MB[OB + BB * yB] = oB(GB, OB, BB)
          }
          return {
            width: 180,
            height: 1,
            data: MB
          }
        }(new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength));
        GB(YB.width, YB.height, !!OB.useMipMaps, !1, (() => {
          const BB = OB.Lp();
          OB.type = 1, OB.format = 6, OB._gammaSpace = !1, BB._uploadDataToTextureDirectly(OB, YB.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);