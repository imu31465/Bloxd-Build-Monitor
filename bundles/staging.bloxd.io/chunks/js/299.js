export const id = 299;
export const ids = [299];
export const modules = {
  41352: (uu, Ru, yu) => {
    yu.r(Ru), yu.d(Ru, {
      _IESTextureLoader: () => Ju
    });
    var Eu = yu(36865);

    function Ku(uu) {
      return uu.split(" ").filter((uu => "" !== uu)).map((uu => parseFloat(uu)))
    }

    function Qu(uu, Ru, yu) {
      for (; yu.length !== Ru;) {
        const Ru = Ku(uu.lines[uu.index++]);
        yu.push(...Ru)
      }
    }

    function mu(uu, Ru, yu) {
      let Ku = 0,
        Qu = 0,
        mu = 0,
        Ju = 0,
        Nu = 0,
        Xu = 0;
      for (let Eu = 0; Eu < uu.numberOfHorizontalAngles - 1; Eu++)
        if (yu < uu.horizontalAngles[Eu + 1] || Eu === uu.numberOfHorizontalAngles - 2) {
          Qu = Eu, mu = uu.horizontalAngles[Eu], Ju = uu.horizontalAngles[Eu + 1];
          break
        } for (let Eu = 0; Eu < uu.numberOfVerticalAngles - 1; Eu++)
        if (Ru < uu.verticalAngles[Eu + 1] || Eu === uu.numberOfVerticalAngles - 2) {
          Ku = Eu, Nu = uu.verticalAngles[Eu], Xu = uu.verticalAngles[Eu + 1];
          break
        } const Vu = Ju - mu,
        ru = Xu - Nu;
      if (0 === ru) return 0;
      const Bu = 0 === Vu ? 0 : (yu - mu) / Vu,
        xu = (Ru - Nu) / ru,
        Su = 0 === Vu ? Qu : Qu + 1,
        pu = (0, Eu.Lerp)(uu.candelaValues[Qu][Ku], uu.candelaValues[Su][Ku], Bu),
        Tu = (0, Eu.Lerp)(uu.candelaValues[Qu][Ku + 1], uu.candelaValues[Su][Ku + 1], Bu);
      return (0, Eu.Lerp)(pu, Tu, xu)
    }
    class Ju {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(uu, Ru, yu) {
        const Eu = function(uu) {
          const Ru = {
              lines: new TextDecoder("utf-8").decode(uu).split("\n"),
              index: 0
            },
            yu = {
              version: Ru.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (Ru.index = 1; Ru.lines.length > 0 && !Ru.lines[Ru.index].includes("TILT=");) Ru.index++;
          Ru.lines[Ru.index].includes("INCLUDE"), Ru.index++;
          const Eu = Ku(Ru.lines[Ru.index++]);
          yu.numberOfLights = Eu[0], yu.lumensPerLamp = Eu[1], yu.numberOfVerticalAngles = Eu[3], yu.numberOfHorizontalAngles = Eu[4], yu.photometricType = Eu[5], yu.unitsType = Eu[6], yu.width = Eu[7], yu.length = Eu[8], yu.height = Eu[9], Ru.index++;
          for (let Ku = 0; Ku < yu.numberOfHorizontalAngles; Ku++) yu.candelaValues[Ku] = [];
          Qu(Ru, yu.numberOfVerticalAngles, yu.verticalAngles), Qu(Ru, yu.numberOfHorizontalAngles, yu.horizontalAngles);
          for (let Ku = 0; Ku < yu.numberOfHorizontalAngles; Ku++) Qu(Ru, yu.numberOfVerticalAngles, yu.candelaValues[Ku]);
          let Ju = -1;
          for (let Ku = 0; Ku < yu.numberOfHorizontalAngles; Ku++)
            for (let uu = 0; uu < yu.numberOfVerticalAngles; uu++) Ju = Math.max(Ju, yu.candelaValues[Ku][uu]);
          if (Ju > 0)
            for (let Ku = 0; Ku < yu.numberOfHorizontalAngles; Ku++)
              for (let uu = 0; uu < yu.numberOfVerticalAngles; uu++) yu.candelaValues[Ku][uu] /= Ju;
          const Nu = 180,
            Xu = 360,
            Vu = new Float32Array(64800),
            ru = yu.horizontalAngles[0],
            Bu = yu.horizontalAngles[yu.numberOfHorizontalAngles - 1];
          for (let Ku = 0; Ku < 64800; Ku++) {
            let uu = Ku % Xu;
            const Ru = Math.floor(Ku / Xu);
            Bu - ru !== 0 && (uu < ru || uu >= Bu) && (uu %= 2 * Bu, uu > Bu && (uu = 2 * Bu - uu)), Vu[Ru + uu * Nu] = mu(yu, Ru, uu)
          }
          return {
            width: 180,
            height: 1,
            data: Vu
          }
        }(new Uint8Array(uu.buffer, uu.byteOffset, uu.byteLength));
        yu(Eu.width, Eu.height, !!Ru.useMipMaps, !1, (() => {
          const uu = Ru.eS();
          Ru.type = 1, Ru.format = 6, Ru._gammaSpace = !1, uu._uploadDataToTextureDirectly(Ru, Eu.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);