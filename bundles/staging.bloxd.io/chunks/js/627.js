export const id = 627;
export const ids = [627];
export const modules = {
  53955: (WW, iW, OW) => {
    OW.r(iW), OW.d(iW, {
      _IESTextureLoader: () => LW
    });
    var mW = OW(38285);

    function EW(WW) {
      return WW.split(" ").filter((WW => "" !== WW)).map((WW => parseFloat(WW)))
    }

    function NW(WW, iW, OW) {
      for (; OW.length !== iW;) {
        const iW = EW(WW.lines[WW.index++]);
        OW.push(...iW)
      }
    }

    function PW(WW, iW, OW) {
      let EW = 0,
        NW = 0,
        PW = 0,
        LW = 0,
        cW = 0,
        wW = 0;
      for (let mW = 0; mW < WW.numberOfHorizontalAngles - 1; mW++)
        if (OW < WW.horizontalAngles[mW + 1] || mW === WW.numberOfHorizontalAngles - 2) {
          NW = mW, PW = WW.horizontalAngles[mW], LW = WW.horizontalAngles[mW + 1];
          break
        } for (let mW = 0; mW < WW.numberOfVerticalAngles - 1; mW++)
        if (iW < WW.verticalAngles[mW + 1] || mW === WW.numberOfVerticalAngles - 2) {
          EW = mW, cW = WW.verticalAngles[mW], wW = WW.verticalAngles[mW + 1];
          break
        } const tW = LW - PW,
        ZW = wW - cW;
      if (0 === ZW) return 0;
      const xW = 0 === tW ? 0 : (OW - PW) / tW,
        lW = (iW - cW) / ZW,
        AW = 0 === tW ? NW : NW + 1,
        bW = (0, mW.Lerp)(WW.candelaValues[NW][EW], WW.candelaValues[AW][EW], xW),
        jW = (0, mW.Lerp)(WW.candelaValues[NW][EW + 1], WW.candelaValues[AW][EW + 1], xW);
      return (0, mW.Lerp)(bW, jW, lW)
    }
    class LW {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(WW, iW, OW) {
        const mW = function(WW) {
          const iW = {
              lines: new TextDecoder("utf-8").decode(WW).split("\n"),
              index: 0
            },
            OW = {
              version: iW.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (iW.index = 1; iW.lines.length > 0 && !iW.lines[iW.index].includes("TILT=");) iW.index++;
          iW.lines[iW.index].includes("INCLUDE"), iW.index++;
          const mW = EW(iW.lines[iW.index++]);
          OW.numberOfLights = mW[0], OW.lumensPerLamp = mW[1], OW.numberOfVerticalAngles = mW[3], OW.numberOfHorizontalAngles = mW[4], OW.photometricType = mW[5], OW.unitsType = mW[6], OW.width = mW[7], OW.length = mW[8], OW.height = mW[9], iW.index++;
          for (let EW = 0; EW < OW.numberOfHorizontalAngles; EW++) OW.candelaValues[EW] = [];
          NW(iW, OW.numberOfVerticalAngles, OW.verticalAngles), NW(iW, OW.numberOfHorizontalAngles, OW.horizontalAngles);
          for (let EW = 0; EW < OW.numberOfHorizontalAngles; EW++) NW(iW, OW.numberOfVerticalAngles, OW.candelaValues[EW]);
          let LW = -1;
          for (let EW = 0; EW < OW.numberOfHorizontalAngles; EW++)
            for (let WW = 0; WW < OW.numberOfVerticalAngles; WW++) LW = Math.max(LW, OW.candelaValues[EW][WW]);
          if (LW > 0)
            for (let EW = 0; EW < OW.numberOfHorizontalAngles; EW++)
              for (let WW = 0; WW < OW.numberOfVerticalAngles; WW++) OW.candelaValues[EW][WW] /= LW;
          const cW = 180,
            wW = 360,
            tW = new Float32Array(64800),
            ZW = OW.horizontalAngles[0],
            xW = OW.horizontalAngles[OW.numberOfHorizontalAngles - 1];
          for (let EW = 0; EW < 64800; EW++) {
            let WW = EW % wW;
            const iW = Math.floor(EW / wW);
            xW - ZW !== 0 && (WW < ZW || WW >= xW) && (WW %= 2 * xW, WW > xW && (WW = 2 * xW - WW)), tW[iW + WW * cW] = PW(OW, iW, WW)
          }
          return {
            width: 180,
            height: 1,
            data: tW
          }
        }(new Uint8Array(WW.buffer, WW.byteOffset, WW.byteLength));
        OW(mW.width, mW.height, !!iW.useMipMaps, !1, (() => {
          const WW = iW.VA();
          iW.type = 1, iW.format = 6, iW._gammaSpace = !1, WW._uploadDataToTextureDirectly(iW, mW.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);