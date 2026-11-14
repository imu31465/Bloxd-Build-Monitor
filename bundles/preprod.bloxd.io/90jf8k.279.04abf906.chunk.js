export const id = 279;
export const ids = [279];
export const modules = {
  39621: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      _IESTextureLoader: () => bW
    });
    var CF = SF(35650);

    function AF(FF) {
      return FF.split(" ").filter((FF => "" !== FF)).map((FF => parseFloat(FF)))
    }

    function uF(FF, WF, SF) {
      for (; SF.length !== WF;) {
        const WF = AF(FF.lines[FF.index++]);
        SF.push(...WF)
      }
    }

    function hF(FF, WF, SF) {
      let AF = 0,
        uF = 0,
        hF = 0,
        bW = 0,
        dF = 0,
        PF = 0;
      for (let CF = 0; CF < FF.numberOfHorizontalAngles - 1; CF++)
        if (SF < FF.horizontalAngles[CF + 1] || CF === FF.numberOfHorizontalAngles - 2) {
          uF = CF, hF = FF.horizontalAngles[CF], bW = FF.horizontalAngles[CF + 1];
          break
        } for (let CF = 0; CF < FF.numberOfVerticalAngles - 1; CF++)
        if (WF < FF.verticalAngles[CF + 1] || CF === FF.numberOfVerticalAngles - 2) {
          AF = CF, dF = FF.verticalAngles[CF], PF = FF.verticalAngles[CF + 1];
          break
        } const RF = bW - hF,
        iW = PF - dF;
      if (0 === iW) return 0;
      const eF = 0 === RF ? 0 : (SF - hF) / RF,
        EF = (WF - dF) / iW,
        QF = 0 === RF ? uF : uF + 1,
        rW = (0, CF.Lerp)(FF.candelaValues[uF][AF], FF.candelaValues[QF][AF], eF),
        gW = (0, CF.Lerp)(FF.candelaValues[uF][AF + 1], FF.candelaValues[QF][AF + 1], eF);
      return (0, CF.Lerp)(rW, gW, EF)
    }
    class bW {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(FF, WF, SF) {
        const CF = function(FF) {
          const WF = {
              lines: new TextDecoder("utf-8").decode(FF).split("\n"),
              index: 0
            },
            SF = {
              version: WF.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (WF.index = 1; WF.lines.length > 0 && !WF.lines[WF.index].includes("TILT=");) WF.index++;
          WF.lines[WF.index].includes("INCLUDE"), WF.index++;
          const CF = AF(WF.lines[WF.index++]);
          SF.numberOfLights = CF[0], SF.lumensPerLamp = CF[1], SF.numberOfVerticalAngles = CF[3], SF.numberOfHorizontalAngles = CF[4], SF.photometricType = CF[5], SF.unitsType = CF[6], SF.width = CF[7], SF.length = CF[8], SF.height = CF[9], WF.index++;
          for (let AF = 0; AF < SF.numberOfHorizontalAngles; AF++) SF.candelaValues[AF] = [];
          uF(WF, SF.numberOfVerticalAngles, SF.verticalAngles), uF(WF, SF.numberOfHorizontalAngles, SF.horizontalAngles);
          for (let AF = 0; AF < SF.numberOfHorizontalAngles; AF++) uF(WF, SF.numberOfVerticalAngles, SF.candelaValues[AF]);
          let bW = -1;
          for (let AF = 0; AF < SF.numberOfHorizontalAngles; AF++)
            for (let FF = 0; FF < SF.numberOfVerticalAngles; FF++) bW = Math.max(bW, SF.candelaValues[AF][FF]);
          if (bW > 0)
            for (let AF = 0; AF < SF.numberOfHorizontalAngles; AF++)
              for (let FF = 0; FF < SF.numberOfVerticalAngles; FF++) SF.candelaValues[AF][FF] /= bW;
          const dF = 180,
            PF = 360,
            RF = new Float32Array(64800),
            iW = SF.horizontalAngles[0],
            eF = SF.horizontalAngles[SF.numberOfHorizontalAngles - 1];
          for (let AF = 0; AF < 64800; AF++) {
            let FF = AF % PF;
            const WF = Math.floor(AF / PF);
            eF - iW !== 0 && (FF < iW || FF >= eF) && (FF %= 2 * eF, FF > eF && (FF = 2 * eF - FF)), RF[WF + FF * dF] = hF(SF, WF, FF)
          }
          return {
            width: 180,
            height: 1,
            data: RF
          }
        }(new Uint8Array(FF.buffer, FF.byteOffset, FF.byteLength));
        SF(CF.width, CF.height, !!WF.useMipMaps, !1, (() => {
          const FF = WF.sC();
          WF.type = 1, WF.format = 6, WF._gammaSpace = !1, FF._uploadDataToTextureDirectly(WF, CF.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);