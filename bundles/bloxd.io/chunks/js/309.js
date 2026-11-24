export const id = 309;
export const ids = [309];
export const modules = {
  41791: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      _IESTextureLoader: () => NS
    });
    var tS = gS(37149);

    function bS(SS) {
      return SS.split(" ").filter((SS => "" !== SS)).map((SS => parseFloat(SS)))
    }

    function XS(SS, HS, gS) {
      for (; gS.length !== HS;) {
        const HS = bS(SS.lines[SS.index++]);
        gS.push(...HS)
      }
    }

    function xS(SS, HS, gS) {
      let bS = 0,
        XS = 0,
        xS = 0,
        NS = 0,
        qS = 0,
        uS = 0;
      for (let tS = 0; tS < SS.numberOfHorizontalAngles - 1; tS++)
        if (gS < SS.horizontalAngles[tS + 1] || tS === SS.numberOfHorizontalAngles - 2) {
          XS = tS, xS = SS.horizontalAngles[tS], NS = SS.horizontalAngles[tS + 1];
          break
        } for (let tS = 0; tS < SS.numberOfVerticalAngles - 1; tS++)
        if (HS < SS.verticalAngles[tS + 1] || tS === SS.numberOfVerticalAngles - 2) {
          bS = tS, qS = SS.verticalAngles[tS], uS = SS.verticalAngles[tS + 1];
          break
        } const IS = NS - xS,
        fS = uS - qS;
      if (0 === fS) return 0;
      const kS = 0 === IS ? 0 : (gS - xS) / IS,
        aS = (HS - qS) / fS,
        KS = 0 === IS ? XS : XS + 1,
        jS = (0, tS.Lerp)(SS.candelaValues[XS][bS], SS.candelaValues[KS][bS], kS),
        GS = (0, tS.Lerp)(SS.candelaValues[XS][bS + 1], SS.candelaValues[KS][bS + 1], kS);
      return (0, tS.Lerp)(jS, GS, aS)
    }
    class NS {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(SS, HS, gS) {
        const tS = function(SS) {
          const HS = {
              lines: new TextDecoder("utf-8").decode(SS).split("\n"),
              index: 0
            },
            gS = {
              version: HS.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (HS.index = 1; HS.lines.length > 0 && !HS.lines[HS.index].includes("TILT=");) HS.index++;
          HS.lines[HS.index].includes("INCLUDE"), HS.index++;
          const tS = bS(HS.lines[HS.index++]);
          gS.numberOfLights = tS[0], gS.lumensPerLamp = tS[1], gS.numberOfVerticalAngles = tS[3], gS.numberOfHorizontalAngles = tS[4], gS.photometricType = tS[5], gS.unitsType = tS[6], gS.width = tS[7], gS.length = tS[8], gS.height = tS[9], HS.index++;
          for (let bS = 0; bS < gS.numberOfHorizontalAngles; bS++) gS.candelaValues[bS] = [];
          XS(HS, gS.numberOfVerticalAngles, gS.verticalAngles), XS(HS, gS.numberOfHorizontalAngles, gS.horizontalAngles);
          for (let bS = 0; bS < gS.numberOfHorizontalAngles; bS++) XS(HS, gS.numberOfVerticalAngles, gS.candelaValues[bS]);
          let NS = -1;
          for (let bS = 0; bS < gS.numberOfHorizontalAngles; bS++)
            for (let SS = 0; SS < gS.numberOfVerticalAngles; SS++) NS = Math.max(NS, gS.candelaValues[bS][SS]);
          if (NS > 0)
            for (let bS = 0; bS < gS.numberOfHorizontalAngles; bS++)
              for (let SS = 0; SS < gS.numberOfVerticalAngles; SS++) gS.candelaValues[bS][SS] /= NS;
          const qS = 180,
            uS = 360,
            IS = new Float32Array(64800),
            fS = gS.horizontalAngles[0],
            kS = gS.horizontalAngles[gS.numberOfHorizontalAngles - 1];
          for (let bS = 0; bS < 64800; bS++) {
            let SS = bS % uS;
            const HS = Math.floor(bS / uS);
            kS - fS !== 0 && (SS < fS || SS >= kS) && (SS %= 2 * kS, SS > kS && (SS = 2 * kS - SS)), IS[HS + SS * qS] = xS(gS, HS, SS)
          }
          return {
            width: 180,
            height: 1,
            data: IS
          }
        }(new Uint8Array(SS.buffer, SS.byteOffset, SS.byteLength));
        gS(tS.width, tS.height, !!HS.useMipMaps, !1, (() => {
          const SS = HS.AK();
          HS.type = 1, HS.format = 6, HS._gammaSpace = !1, SS._uploadDataToTextureDirectly(HS, tS.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);