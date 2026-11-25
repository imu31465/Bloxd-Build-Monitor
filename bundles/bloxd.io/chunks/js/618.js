export const id = 618;
export const ids = [618];
export const modules = {
  44416: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      _IESTextureLoader: () => PM
    });
    var OM = iM(38074);

    function SM(MM) {
      return MM.split(" ").filter((MM => "" !== MM)).map((MM => parseFloat(MM)))
    }

    function jM(MM, rM, iM) {
      for (; iM.length !== rM;) {
        const rM = SM(MM.lines[MM.index++]);
        iM.push(...rM)
      }
    }

    function aM(MM, rM, iM) {
      let SM = 0,
        jM = 0,
        aM = 0,
        PM = 0,
        nM = 0,
        QM = 0;
      for (let OM = 0; OM < MM.numberOfHorizontalAngles - 1; OM++)
        if (iM < MM.horizontalAngles[OM + 1] || OM === MM.numberOfHorizontalAngles - 2) {
          jM = OM, aM = MM.horizontalAngles[OM], PM = MM.horizontalAngles[OM + 1];
          break
        } for (let OM = 0; OM < MM.numberOfVerticalAngles - 1; OM++)
        if (rM < MM.verticalAngles[OM + 1] || OM === MM.numberOfVerticalAngles - 2) {
          SM = OM, nM = MM.verticalAngles[OM], QM = MM.verticalAngles[OM + 1];
          break
        } const zM = PM - aM,
        LM = QM - nM;
      if (0 === LM) return 0;
      const mM = 0 === zM ? 0 : (iM - aM) / zM,
        HM = (rM - nM) / LM,
        hM = 0 === zM ? jM : jM + 1,
        JM = (0, OM.Lerp)(MM.candelaValues[jM][SM], MM.candelaValues[hM][SM], mM),
        dM = (0, OM.Lerp)(MM.candelaValues[jM][SM + 1], MM.candelaValues[hM][SM + 1], mM);
      return (0, OM.Lerp)(JM, dM, HM)
    }
    class PM {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(MM, rM, iM) {
        const OM = function(MM) {
          const rM = {
              lines: new TextDecoder("utf-8").decode(MM).split("\n"),
              index: 0
            },
            iM = {
              version: rM.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (rM.index = 1; rM.lines.length > 0 && !rM.lines[rM.index].includes("TILT=");) rM.index++;
          rM.lines[rM.index].includes("INCLUDE"), rM.index++;
          const OM = SM(rM.lines[rM.index++]);
          iM.numberOfLights = OM[0], iM.lumensPerLamp = OM[1], iM.numberOfVerticalAngles = OM[3], iM.numberOfHorizontalAngles = OM[4], iM.photometricType = OM[5], iM.unitsType = OM[6], iM.width = OM[7], iM.length = OM[8], iM.height = OM[9], rM.index++;
          for (let SM = 0; SM < iM.numberOfHorizontalAngles; SM++) iM.candelaValues[SM] = [];
          jM(rM, iM.numberOfVerticalAngles, iM.verticalAngles), jM(rM, iM.numberOfHorizontalAngles, iM.horizontalAngles);
          for (let SM = 0; SM < iM.numberOfHorizontalAngles; SM++) jM(rM, iM.numberOfVerticalAngles, iM.candelaValues[SM]);
          let PM = -1;
          for (let SM = 0; SM < iM.numberOfHorizontalAngles; SM++)
            for (let MM = 0; MM < iM.numberOfVerticalAngles; MM++) PM = Math.max(PM, iM.candelaValues[SM][MM]);
          if (PM > 0)
            for (let SM = 0; SM < iM.numberOfHorizontalAngles; SM++)
              for (let MM = 0; MM < iM.numberOfVerticalAngles; MM++) iM.candelaValues[SM][MM] /= PM;
          const nM = 180,
            QM = 360,
            zM = new Float32Array(64800),
            LM = iM.horizontalAngles[0],
            mM = iM.horizontalAngles[iM.numberOfHorizontalAngles - 1];
          for (let SM = 0; SM < 64800; SM++) {
            let MM = SM % QM;
            const rM = Math.floor(SM / QM);
            mM - LM !== 0 && (MM < LM || MM >= mM) && (MM %= 2 * mM, MM > mM && (MM = 2 * mM - MM)), zM[rM + MM * nM] = aM(iM, rM, MM)
          }
          return {
            width: 180,
            height: 1,
            data: zM
          }
        }(new Uint8Array(MM.buffer, MM.byteOffset, MM.byteLength));
        iM(OM.width, OM.height, !!rM.useMipMaps, !1, (() => {
          const MM = rM.ph();
          rM.type = 1, rM.format = 6, rM._gammaSpace = !1, MM._uploadDataToTextureDirectly(rM, OM.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);