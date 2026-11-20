export const id = 300;
export const ids = [300];
export const modules = {
  41224: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      _IESTextureLoader: () => Lb
    });
    var Bb = hb(36757);

    function Ob(bb) {
      return bb.split(" ").filter((bb => "" !== bb)).map((bb => parseFloat(bb)))
    }

    function Gb(bb, ub, hb) {
      for (; hb.length !== ub;) {
        const ub = Ob(bb.lines[bb.index++]);
        hb.push(...ub)
      }
    }

    function Ub(bb, ub, hb) {
      let Ob = 0,
        Gb = 0,
        Ub = 0,
        Lb = 0,
        Yb = 0,
        Sb = 0;
      for (let Bb = 0; Bb < bb.numberOfHorizontalAngles - 1; Bb++)
        if (hb < bb.horizontalAngles[Bb + 1] || Bb === bb.numberOfHorizontalAngles - 2) {
          Gb = Bb, Ub = bb.horizontalAngles[Bb], Lb = bb.horizontalAngles[Bb + 1];
          break
        } for (let Bb = 0; Bb < bb.numberOfVerticalAngles - 1; Bb++)
        if (ub < bb.verticalAngles[Bb + 1] || Bb === bb.numberOfVerticalAngles - 2) {
          Ob = Bb, Yb = bb.verticalAngles[Bb], Sb = bb.verticalAngles[Bb + 1];
          break
        } const ab = Lb - Ub,
        Hb = Sb - Yb;
      if (0 === Hb) return 0;
      const wb = 0 === ab ? 0 : (hb - Ub) / ab,
        Zb = (ub - Yb) / Hb,
        Xb = 0 === ab ? Gb : Gb + 1,
        pb = (0, Bb.Lerp)(bb.candelaValues[Gb][Ob], bb.candelaValues[Xb][Ob], wb),
        ob = (0, Bb.Lerp)(bb.candelaValues[Gb][Ob + 1], bb.candelaValues[Xb][Ob + 1], wb);
      return (0, Bb.Lerp)(pb, ob, Zb)
    }
    class Lb {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(bb, ub, hb) {
        const Bb = function(bb) {
          const ub = {
              lines: new TextDecoder("utf-8").decode(bb).split("\n"),
              index: 0
            },
            hb = {
              version: ub.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (ub.index = 1; ub.lines.length > 0 && !ub.lines[ub.index].includes("TILT=");) ub.index++;
          ub.lines[ub.index].includes("INCLUDE"), ub.index++;
          const Bb = Ob(ub.lines[ub.index++]);
          hb.numberOfLights = Bb[0], hb.lumensPerLamp = Bb[1], hb.numberOfVerticalAngles = Bb[3], hb.numberOfHorizontalAngles = Bb[4], hb.photometricType = Bb[5], hb.unitsType = Bb[6], hb.width = Bb[7], hb.length = Bb[8], hb.height = Bb[9], ub.index++;
          for (let Ob = 0; Ob < hb.numberOfHorizontalAngles; Ob++) hb.candelaValues[Ob] = [];
          Gb(ub, hb.numberOfVerticalAngles, hb.verticalAngles), Gb(ub, hb.numberOfHorizontalAngles, hb.horizontalAngles);
          for (let Ob = 0; Ob < hb.numberOfHorizontalAngles; Ob++) Gb(ub, hb.numberOfVerticalAngles, hb.candelaValues[Ob]);
          let Lb = -1;
          for (let Ob = 0; Ob < hb.numberOfHorizontalAngles; Ob++)
            for (let bb = 0; bb < hb.numberOfVerticalAngles; bb++) Lb = Math.max(Lb, hb.candelaValues[Ob][bb]);
          if (Lb > 0)
            for (let Ob = 0; Ob < hb.numberOfHorizontalAngles; Ob++)
              for (let bb = 0; bb < hb.numberOfVerticalAngles; bb++) hb.candelaValues[Ob][bb] /= Lb;
          const Yb = 180,
            Sb = 360,
            ab = new Float32Array(64800),
            Hb = hb.horizontalAngles[0],
            wb = hb.horizontalAngles[hb.numberOfHorizontalAngles - 1];
          for (let Ob = 0; Ob < 64800; Ob++) {
            let bb = Ob % Sb;
            const ub = Math.floor(Ob / Sb);
            wb - Hb !== 0 && (bb < Hb || bb >= wb) && (bb %= 2 * wb, bb > wb && (bb = 2 * wb - bb)), ab[ub + bb * Yb] = Ub(hb, ub, bb)
          }
          return {
            width: 180,
            height: 1,
            data: ab
          }
        }(new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength));
        hb(Bb.width, Bb.height, !!ub.useMipMaps, !1, (() => {
          const bb = ub.UX();
          ub.type = 1, ub.format = 6, ub._gammaSpace = !1, bb._uploadDataToTextureDirectly(ub, Bb.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);