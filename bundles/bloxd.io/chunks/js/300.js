export const id = 300;
export const ids = [300];
export const modules = {
  41069: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      _IESTextureLoader: () => pv
    });
    var hv = Pv(36620);

    function Sv(vv) {
      return vv.split(" ").filter((vv => "" !== vv)).map((vv => parseFloat(vv)))
    }

    function ev(vv, zv, Pv) {
      for (; Pv.length !== zv;) {
        const zv = Sv(vv.lines[vv.index++]);
        Pv.push(...zv)
      }
    }

    function gv(vv, zv, Pv) {
      let Sv = 0,
        ev = 0,
        gv = 0,
        pv = 0,
        dv = 0,
        Nv = 0;
      for (let hv = 0; hv < vv.numberOfHorizontalAngles - 1; hv++)
        if (Pv < vv.horizontalAngles[hv + 1] || hv === vv.numberOfHorizontalAngles - 2) {
          ev = hv, gv = vv.horizontalAngles[hv], pv = vv.horizontalAngles[hv + 1];
          break
        } for (let hv = 0; hv < vv.numberOfVerticalAngles - 1; hv++)
        if (zv < vv.verticalAngles[hv + 1] || hv === vv.numberOfVerticalAngles - 2) {
          Sv = hv, dv = vv.verticalAngles[hv], Nv = vv.verticalAngles[hv + 1];
          break
        } const lv = pv - gv,
        Tv = Nv - dv;
      if (0 === Tv) return 0;
      const Wv = 0 === lv ? 0 : (Pv - gv) / lv,
        wv = (zv - dv) / Tv,
        av = 0 === lv ? ev : ev + 1,
        sv = (0, hv.Lerp)(vv.candelaValues[ev][Sv], vv.candelaValues[av][Sv], Wv),
        Cv = (0, hv.Lerp)(vv.candelaValues[ev][Sv + 1], vv.candelaValues[av][Sv + 1], Wv);
      return (0, hv.Lerp)(sv, Cv, wv)
    }
    class pv {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(vv, zv, Pv) {
        const hv = function(vv) {
          const zv = {
              lines: new TextDecoder("utf-8").decode(vv).split("\n"),
              index: 0
            },
            Pv = {
              version: zv.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (zv.index = 1; zv.lines.length > 0 && !zv.lines[zv.index].includes("TILT=");) zv.index++;
          zv.lines[zv.index].includes("INCLUDE"), zv.index++;
          const hv = Sv(zv.lines[zv.index++]);
          Pv.numberOfLights = hv[0], Pv.lumensPerLamp = hv[1], Pv.numberOfVerticalAngles = hv[3], Pv.numberOfHorizontalAngles = hv[4], Pv.photometricType = hv[5], Pv.unitsType = hv[6], Pv.width = hv[7], Pv.length = hv[8], Pv.height = hv[9], zv.index++;
          for (let Sv = 0; Sv < Pv.numberOfHorizontalAngles; Sv++) Pv.candelaValues[Sv] = [];
          ev(zv, Pv.numberOfVerticalAngles, Pv.verticalAngles), ev(zv, Pv.numberOfHorizontalAngles, Pv.horizontalAngles);
          for (let Sv = 0; Sv < Pv.numberOfHorizontalAngles; Sv++) ev(zv, Pv.numberOfVerticalAngles, Pv.candelaValues[Sv]);
          let pv = -1;
          for (let Sv = 0; Sv < Pv.numberOfHorizontalAngles; Sv++)
            for (let vv = 0; vv < Pv.numberOfVerticalAngles; vv++) pv = Math.max(pv, Pv.candelaValues[Sv][vv]);
          if (pv > 0)
            for (let Sv = 0; Sv < Pv.numberOfHorizontalAngles; Sv++)
              for (let vv = 0; vv < Pv.numberOfVerticalAngles; vv++) Pv.candelaValues[Sv][vv] /= pv;
          const dv = 180,
            Nv = 360,
            lv = new Float32Array(64800),
            Tv = Pv.horizontalAngles[0],
            Wv = Pv.horizontalAngles[Pv.numberOfHorizontalAngles - 1];
          for (let Sv = 0; Sv < 64800; Sv++) {
            let vv = Sv % Nv;
            const zv = Math.floor(Sv / Nv);
            Wv - Tv !== 0 && (vv < Tv || vv >= Wv) && (vv %= 2 * Wv, vv > Wv && (vv = 2 * Wv - vv)), lv[zv + vv * dv] = gv(Pv, zv, vv)
          }
          return {
            width: 180,
            height: 1,
            data: lv
          }
        }(new Uint8Array(vv.buffer, vv.byteOffset, vv.byteLength));
        Pv(hv.width, hv.height, !!zv.useMipMaps, !1, (() => {
          const vv = zv.ma();
          zv.type = 1, zv.format = 6, zv._gammaSpace = !1, vv._uploadDataToTextureDirectly(zv, hv.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);