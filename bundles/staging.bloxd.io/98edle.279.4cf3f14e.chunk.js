export const id = 279;
export const ids = [279];
export const modules = {
  39227: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      _IESTextureLoader: () => bR
    });
    var wW = MW(35353);

    function CW(WW) {
      return WW.split(" ").filter((WW => "" !== WW)).map((WW => parseFloat(WW)))
    }

    function zR(WW, RW, MW) {
      for (; MW.length !== RW;) {
        const RW = CW(WW.lines[WW.index++]);
        MW.push(...RW)
      }
    }

    function AW(WW, RW, MW) {
      let CW = 0,
        zR = 0,
        AW = 0,
        bR = 0,
        yR = 0,
        NW = 0;
      for (let wW = 0; wW < WW.numberOfHorizontalAngles - 1; wW++)
        if (MW < WW.horizontalAngles[wW + 1] || wW === WW.numberOfHorizontalAngles - 2) {
          zR = wW, AW = WW.horizontalAngles[wW], bR = WW.horizontalAngles[wW + 1];
          break
        } for (let wW = 0; wW < WW.numberOfVerticalAngles - 1; wW++)
        if (RW < WW.verticalAngles[wW + 1] || wW === WW.numberOfVerticalAngles - 2) {
          CW = wW, yR = WW.verticalAngles[wW], NW = WW.verticalAngles[wW + 1];
          break
        } const eW = bR - AW,
        BW = NW - yR;
      if (0 === BW) return 0;
      const tR = 0 === eW ? 0 : (MW - AW) / eW,
        TW = (RW - yR) / BW,
        gR = 0 === eW ? zR : zR + 1,
        iR = (0, wW.Lerp)(WW.candelaValues[zR][CW], WW.candelaValues[gR][CW], tR),
        YW = (0, wW.Lerp)(WW.candelaValues[zR][CW + 1], WW.candelaValues[gR][CW + 1], tR);
      return (0, wW.Lerp)(iR, YW, TW)
    }
    class bR {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(WW, RW, MW) {
        const wW = function(WW) {
          const RW = {
              lines: new TextDecoder("utf-8").decode(WW).split("\n"),
              index: 0
            },
            MW = {
              version: RW.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (RW.index = 1; RW.lines.length > 0 && !RW.lines[RW.index].includes("TILT=");) RW.index++;
          RW.lines[RW.index].includes("INCLUDE"), RW.index++;
          const wW = CW(RW.lines[RW.index++]);
          MW.numberOfLights = wW[0], MW.lumensPerLamp = wW[1], MW.numberOfVerticalAngles = wW[3], MW.numberOfHorizontalAngles = wW[4], MW.photometricType = wW[5], MW.unitsType = wW[6], MW.width = wW[7], MW.length = wW[8], MW.height = wW[9], RW.index++;
          for (let CW = 0; CW < MW.numberOfHorizontalAngles; CW++) MW.candelaValues[CW] = [];
          zR(RW, MW.numberOfVerticalAngles, MW.verticalAngles), zR(RW, MW.numberOfHorizontalAngles, MW.horizontalAngles);
          for (let CW = 0; CW < MW.numberOfHorizontalAngles; CW++) zR(RW, MW.numberOfVerticalAngles, MW.candelaValues[CW]);
          let bR = -1;
          for (let CW = 0; CW < MW.numberOfHorizontalAngles; CW++)
            for (let WW = 0; WW < MW.numberOfVerticalAngles; WW++) bR = Math.max(bR, MW.candelaValues[CW][WW]);
          if (bR > 0)
            for (let CW = 0; CW < MW.numberOfHorizontalAngles; CW++)
              for (let WW = 0; WW < MW.numberOfVerticalAngles; WW++) MW.candelaValues[CW][WW] /= bR;
          const yR = 180,
            NW = 360,
            eW = new Float32Array(64800),
            BW = MW.horizontalAngles[0],
            tR = MW.horizontalAngles[MW.numberOfHorizontalAngles - 1];
          for (let CW = 0; CW < 64800; CW++) {
            let WW = CW % NW;
            const RW = Math.floor(CW / NW);
            tR - BW !== 0 && (WW < BW || WW >= tR) && (WW %= 2 * tR, WW > tR && (WW = 2 * tR - WW)), eW[RW + WW * yR] = AW(MW, RW, WW)
          }
          return {
            width: 180,
            height: 1,
            data: eW
          }
        }(new Uint8Array(WW.buffer, WW.byteOffset, WW.byteLength));
        MW(wW.width, wW.height, !!RW.useMipMaps, !1, (() => {
          const WW = RW.mC();
          RW.type = 1, RW.format = 6, RW._gammaSpace = !1, WW._uploadDataToTextureDirectly(RW, wW.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);