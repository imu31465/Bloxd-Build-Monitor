export const id = 314;
export const ids = [314];
export const modules = {
  42046: (uu, Eu, ju) => {
    ju.r(Eu), ju.d(Eu, {
      _IESTextureLoader: () => lu
    });
    var su = ju(37519);

    function Uu(uu) {
      return uu.split(" ").filter((uu => "" !== uu)).map((uu => parseFloat(uu)))
    }

    function Zu(uu, Eu, ju) {
      for (; ju.length !== Eu;) {
        const Eu = Uu(uu.lines[uu.index++]);
        ju.push(...Eu)
      }
    }

    function Xu(uu, Eu, ju) {
      let Uu = 0,
        Zu = 0,
        Xu = 0,
        lu = 0,
        qu = 0,
        fu = 0;
      for (let su = 0; su < uu.numberOfHorizontalAngles - 1; su++)
        if (ju < uu.horizontalAngles[su + 1] || su === uu.numberOfHorizontalAngles - 2) {
          Zu = su, Xu = uu.horizontalAngles[su], lu = uu.horizontalAngles[su + 1];
          break
        } for (let su = 0; su < uu.numberOfVerticalAngles - 1; su++)
        if (Eu < uu.verticalAngles[su + 1] || su === uu.numberOfVerticalAngles - 2) {
          Uu = su, qu = uu.verticalAngles[su], fu = uu.verticalAngles[su + 1];
          break
        } const Cu = lu - Xu,
        bu = fu - qu;
      if (0 === bu) return 0;
      const cu = 0 === Cu ? 0 : (ju - Xu) / Cu,
        Nu = (Eu - qu) / bu,
        Ou = 0 === Cu ? Zu : Zu + 1,
        Yu = (0, su.Lerp)(uu.candelaValues[Zu][Uu], uu.candelaValues[Ou][Uu], cu),
        hu = (0, su.Lerp)(uu.candelaValues[Zu][Uu + 1], uu.candelaValues[Ou][Uu + 1], cu);
      return (0, su.Lerp)(Yu, hu, Nu)
    }
    class lu {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(uu, Eu, ju) {
        const su = function(uu) {
          const Eu = {
              lines: new TextDecoder("utf-8").decode(uu).split("\n"),
              index: 0
            },
            ju = {
              version: Eu.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (Eu.index = 1; Eu.lines.length > 0 && !Eu.lines[Eu.index].includes("TILT=");) Eu.index++;
          Eu.lines[Eu.index].includes("INCLUDE"), Eu.index++;
          const su = Uu(Eu.lines[Eu.index++]);
          ju.numberOfLights = su[0], ju.lumensPerLamp = su[1], ju.numberOfVerticalAngles = su[3], ju.numberOfHorizontalAngles = su[4], ju.photometricType = su[5], ju.unitsType = su[6], ju.width = su[7], ju.length = su[8], ju.height = su[9], Eu.index++;
          for (let Uu = 0; Uu < ju.numberOfHorizontalAngles; Uu++) ju.candelaValues[Uu] = [];
          Zu(Eu, ju.numberOfVerticalAngles, ju.verticalAngles), Zu(Eu, ju.numberOfHorizontalAngles, ju.horizontalAngles);
          for (let Uu = 0; Uu < ju.numberOfHorizontalAngles; Uu++) Zu(Eu, ju.numberOfVerticalAngles, ju.candelaValues[Uu]);
          let lu = -1;
          for (let Uu = 0; Uu < ju.numberOfHorizontalAngles; Uu++)
            for (let uu = 0; uu < ju.numberOfVerticalAngles; uu++) lu = Math.max(lu, ju.candelaValues[Uu][uu]);
          if (lu > 0)
            for (let Uu = 0; Uu < ju.numberOfHorizontalAngles; Uu++)
              for (let uu = 0; uu < ju.numberOfVerticalAngles; uu++) ju.candelaValues[Uu][uu] /= lu;
          const qu = 180,
            fu = 360,
            Cu = new Float32Array(64800),
            bu = ju.horizontalAngles[0],
            cu = ju.horizontalAngles[ju.numberOfHorizontalAngles - 1];
          for (let Uu = 0; Uu < 64800; Uu++) {
            let uu = Uu % fu;
            const Eu = Math.floor(Uu / fu);
            cu - bu !== 0 && (uu < bu || uu >= cu) && (uu %= 2 * cu, uu > cu && (uu = 2 * cu - uu)), Cu[Eu + uu * qu] = Xu(ju, Eu, uu)
          }
          return {
            width: 180,
            height: 1,
            data: Cu
          }
        }(new Uint8Array(uu.buffer, uu.byteOffset, uu.byteLength));
        ju(su.width, su.height, !!Eu.useMipMaps, !1, (() => {
          const uu = Eu.wO();
          Eu.type = 1, Eu.format = 6, Eu._gammaSpace = !1, uu._uploadDataToTextureDirectly(Eu, su.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const uu in modules) Object.freeze(modules[uu]);