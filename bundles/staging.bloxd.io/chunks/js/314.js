export const id = 314;
export const ids = [314];
export const modules = {
  41866: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      _IESTextureLoader: () => NB
    });
    var QB = zB(37208);

    function nB(BB) {
      return BB.split(" ").filter((BB => "" !== BB)).map((BB => parseFloat(BB)))
    }

    function dB(BB, jB, zB) {
      for (; zB.length !== jB;) {
        const jB = nB(BB.lines[BB.index++]);
        zB.push(...jB)
      }
    }

    function IB(BB, jB, zB) {
      let nB = 0,
        dB = 0,
        IB = 0,
        NB = 0,
        uB = 0,
        UB = 0;
      for (let QB = 0; QB < BB.numberOfHorizontalAngles - 1; QB++)
        if (zB < BB.horizontalAngles[QB + 1] || QB === BB.numberOfHorizontalAngles - 2) {
          dB = QB, IB = BB.horizontalAngles[QB], NB = BB.horizontalAngles[QB + 1];
          break
        } for (let QB = 0; QB < BB.numberOfVerticalAngles - 1; QB++)
        if (jB < BB.verticalAngles[QB + 1] || QB === BB.numberOfVerticalAngles - 2) {
          nB = QB, uB = BB.verticalAngles[QB], UB = BB.verticalAngles[QB + 1];
          break
        } const aB = NB - IB,
        pB = UB - uB;
      if (0 === pB) return 0;
      const rB = 0 === aB ? 0 : (zB - IB) / aB,
        sB = (jB - uB) / pB,
        JB = 0 === aB ? dB : dB + 1,
        mB = (0, QB.Lerp)(BB.candelaValues[dB][nB], BB.candelaValues[JB][nB], rB),
        yB = (0, QB.Lerp)(BB.candelaValues[dB][nB + 1], BB.candelaValues[JB][nB + 1], rB);
      return (0, QB.Lerp)(mB, yB, sB)
    }
    class NB {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(BB, jB, zB) {
        const QB = function(BB) {
          const jB = {
              lines: new TextDecoder("utf-8").decode(BB).split("\n"),
              index: 0
            },
            zB = {
              version: jB.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (jB.index = 1; jB.lines.length > 0 && !jB.lines[jB.index].includes("TILT=");) jB.index++;
          jB.lines[jB.index].includes("INCLUDE"), jB.index++;
          const QB = nB(jB.lines[jB.index++]);
          zB.numberOfLights = QB[0], zB.lumensPerLamp = QB[1], zB.numberOfVerticalAngles = QB[3], zB.numberOfHorizontalAngles = QB[4], zB.photometricType = QB[5], zB.unitsType = QB[6], zB.width = QB[7], zB.length = QB[8], zB.height = QB[9], jB.index++;
          for (let nB = 0; nB < zB.numberOfHorizontalAngles; nB++) zB.candelaValues[nB] = [];
          dB(jB, zB.numberOfVerticalAngles, zB.verticalAngles), dB(jB, zB.numberOfHorizontalAngles, zB.horizontalAngles);
          for (let nB = 0; nB < zB.numberOfHorizontalAngles; nB++) dB(jB, zB.numberOfVerticalAngles, zB.candelaValues[nB]);
          let NB = -1;
          for (let nB = 0; nB < zB.numberOfHorizontalAngles; nB++)
            for (let BB = 0; BB < zB.numberOfVerticalAngles; BB++) NB = Math.max(NB, zB.candelaValues[nB][BB]);
          if (NB > 0)
            for (let nB = 0; nB < zB.numberOfHorizontalAngles; nB++)
              for (let BB = 0; BB < zB.numberOfVerticalAngles; BB++) zB.candelaValues[nB][BB] /= NB;
          const uB = 180,
            UB = 360,
            aB = new Float32Array(64800),
            pB = zB.horizontalAngles[0],
            rB = zB.horizontalAngles[zB.numberOfHorizontalAngles - 1];
          for (let nB = 0; nB < 64800; nB++) {
            let BB = nB % UB;
            const jB = Math.floor(nB / UB);
            rB - pB !== 0 && (BB < pB || BB >= rB) && (BB %= 2 * rB, BB > rB && (BB = 2 * rB - BB)), aB[jB + BB * uB] = IB(zB, jB, BB)
          }
          return {
            width: 180,
            height: 1,
            data: aB
          }
        }(new Uint8Array(BB.buffer, BB.byteOffset, BB.byteLength));
        zB(QB.width, QB.height, !!jB.useMipMaps, !1, (() => {
          const BB = jB.wJ();
          jB.type = 1, jB.format = 6, jB._gammaSpace = !1, BB._uploadDataToTextureDirectly(jB, QB.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);