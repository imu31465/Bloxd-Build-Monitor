export const id = 618;
export const ids = [618];
export const modules = {
  44665: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      _IESTextureLoader: () => pV
    });
    var JV = xV(38303);

    function YV(VV) {
      return VV.split(" ").filter((VV => "" !== VV)).map((VV => parseFloat(VV)))
    }

    function UV(VV, eV, xV) {
      for (; xV.length !== eV;) {
        const eV = YV(VV.lines[VV.index++]);
        xV.push(...eV)
      }
    }

    function yV(VV, eV, xV) {
      let YV = 0,
        UV = 0,
        yV = 0,
        pV = 0,
        QV = 0,
        nV = 0;
      for (let JV = 0; JV < VV.numberOfHorizontalAngles - 1; JV++)
        if (xV < VV.horizontalAngles[JV + 1] || JV === VV.numberOfHorizontalAngles - 2) {
          UV = JV, yV = VV.horizontalAngles[JV], pV = VV.horizontalAngles[JV + 1];
          break
        } for (let JV = 0; JV < VV.numberOfVerticalAngles - 1; JV++)
        if (eV < VV.verticalAngles[JV + 1] || JV === VV.numberOfVerticalAngles - 2) {
          YV = JV, QV = VV.verticalAngles[JV], nV = VV.verticalAngles[JV + 1];
          break
        } const wV = pV - yV,
        ZV = nV - QV;
      if (0 === ZV) return 0;
      const vV = 0 === wV ? 0 : (xV - yV) / wV,
        rV = (eV - QV) / ZV,
        kV = 0 === wV ? UV : UV + 1,
        bV = (0, JV.Lerp)(VV.candelaValues[UV][YV], VV.candelaValues[kV][YV], vV),
        EV = (0, JV.Lerp)(VV.candelaValues[UV][YV + 1], VV.candelaValues[kV][YV + 1], vV);
      return (0, JV.Lerp)(bV, EV, rV)
    }
    class pV {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(VV, eV, xV) {
        const JV = function(VV) {
          const eV = {
              lines: new TextDecoder("utf-8").decode(VV).split("\n"),
              index: 0
            },
            xV = {
              version: eV.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (eV.index = 1; eV.lines.length > 0 && !eV.lines[eV.index].includes("TILT=");) eV.index++;
          eV.lines[eV.index].includes("INCLUDE"), eV.index++;
          const JV = YV(eV.lines[eV.index++]);
          xV.numberOfLights = JV[0], xV.lumensPerLamp = JV[1], xV.numberOfVerticalAngles = JV[3], xV.numberOfHorizontalAngles = JV[4], xV.photometricType = JV[5], xV.unitsType = JV[6], xV.width = JV[7], xV.length = JV[8], xV.height = JV[9], eV.index++;
          for (let YV = 0; YV < xV.numberOfHorizontalAngles; YV++) xV.candelaValues[YV] = [];
          UV(eV, xV.numberOfVerticalAngles, xV.verticalAngles), UV(eV, xV.numberOfHorizontalAngles, xV.horizontalAngles);
          for (let YV = 0; YV < xV.numberOfHorizontalAngles; YV++) UV(eV, xV.numberOfVerticalAngles, xV.candelaValues[YV]);
          let pV = -1;
          for (let YV = 0; YV < xV.numberOfHorizontalAngles; YV++)
            for (let VV = 0; VV < xV.numberOfVerticalAngles; VV++) pV = Math.max(pV, xV.candelaValues[YV][VV]);
          if (pV > 0)
            for (let YV = 0; YV < xV.numberOfHorizontalAngles; YV++)
              for (let VV = 0; VV < xV.numberOfVerticalAngles; VV++) xV.candelaValues[YV][VV] /= pV;
          const QV = 180,
            nV = 360,
            wV = new Float32Array(64800),
            ZV = xV.horizontalAngles[0],
            vV = xV.horizontalAngles[xV.numberOfHorizontalAngles - 1];
          for (let YV = 0; YV < 64800; YV++) {
            let VV = YV % nV;
            const eV = Math.floor(YV / nV);
            vV - ZV !== 0 && (VV < ZV || VV >= vV) && (VV %= 2 * vV, VV > vV && (VV = 2 * vV - VV)), wV[eV + VV * QV] = yV(xV, eV, VV)
          }
          return {
            width: 180,
            height: 1,
            data: wV
          }
        }(new Uint8Array(VV.buffer, VV.byteOffset, VV.byteLength));
        xV(JV.width, JV.height, !!eV.useMipMaps, !1, (() => {
          const VV = eV.sk();
          eV.type = 1, eV.format = 6, eV._gammaSpace = !1, VV._uploadDataToTextureDirectly(eV, JV.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);