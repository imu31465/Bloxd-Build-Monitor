export const id = 314;
export const ids = [314];
export const modules = {
  42040: (tt, et, Vt) => {
    Vt.r(et), Vt.d(et, {
      _IESTextureLoader: () => dt
    });
    var Ot = Vt(37372);

    function qt(tt) {
      return tt.split(" ").filter((tt => "" !== tt)).map((tt => parseFloat(tt)))
    }

    function Dt(tt, et, Vt) {
      for (; Vt.length !== et;) {
        const et = qt(tt.lines[tt.index++]);
        Vt.push(...et)
      }
    }

    function mt(tt, et, Vt) {
      let qt = 0,
        Dt = 0,
        mt = 0,
        dt = 0,
        jt = 0,
        Ht = 0;
      for (let Ot = 0; Ot < tt.numberOfHorizontalAngles - 1; Ot++)
        if (Vt < tt.horizontalAngles[Ot + 1] || Ot === tt.numberOfHorizontalAngles - 2) {
          Dt = Ot, mt = tt.horizontalAngles[Ot], dt = tt.horizontalAngles[Ot + 1];
          break
        } for (let Ot = 0; Ot < tt.numberOfVerticalAngles - 1; Ot++)
        if (et < tt.verticalAngles[Ot + 1] || Ot === tt.numberOfVerticalAngles - 2) {
          qt = Ot, jt = tt.verticalAngles[Ot], Ht = tt.verticalAngles[Ot + 1];
          break
        } const Xt = dt - mt,
        Qt = Ht - jt;
      if (0 === Qt) return 0;
      const lt = 0 === Xt ? 0 : (Vt - mt) / Xt,
        Et = (et - jt) / Qt,
        ft = 0 === Xt ? Dt : Dt + 1,
        wt = (0, Ot.Lerp)(tt.candelaValues[Dt][qt], tt.candelaValues[ft][qt], lt),
        yt = (0, Ot.Lerp)(tt.candelaValues[Dt][qt + 1], tt.candelaValues[ft][qt + 1], lt);
      return (0, Ot.Lerp)(wt, yt, Et)
    }
    class dt {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(tt, et, Vt) {
        const Ot = function(tt) {
          const et = {
              lines: new TextDecoder("utf-8").decode(tt).split("\n"),
              index: 0
            },
            Vt = {
              version: et.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (et.index = 1; et.lines.length > 0 && !et.lines[et.index].includes("TILT=");) et.index++;
          et.lines[et.index].includes("INCLUDE"), et.index++;
          const Ot = qt(et.lines[et.index++]);
          Vt.numberOfLights = Ot[0], Vt.lumensPerLamp = Ot[1], Vt.numberOfVerticalAngles = Ot[3], Vt.numberOfHorizontalAngles = Ot[4], Vt.photometricType = Ot[5], Vt.unitsType = Ot[6], Vt.width = Ot[7], Vt.length = Ot[8], Vt.height = Ot[9], et.index++;
          for (let qt = 0; qt < Vt.numberOfHorizontalAngles; qt++) Vt.candelaValues[qt] = [];
          Dt(et, Vt.numberOfVerticalAngles, Vt.verticalAngles), Dt(et, Vt.numberOfHorizontalAngles, Vt.horizontalAngles);
          for (let qt = 0; qt < Vt.numberOfHorizontalAngles; qt++) Dt(et, Vt.numberOfVerticalAngles, Vt.candelaValues[qt]);
          let dt = -1;
          for (let qt = 0; qt < Vt.numberOfHorizontalAngles; qt++)
            for (let tt = 0; tt < Vt.numberOfVerticalAngles; tt++) dt = Math.max(dt, Vt.candelaValues[qt][tt]);
          if (dt > 0)
            for (let qt = 0; qt < Vt.numberOfHorizontalAngles; qt++)
              for (let tt = 0; tt < Vt.numberOfVerticalAngles; tt++) Vt.candelaValues[qt][tt] /= dt;
          const jt = 180,
            Ht = 360,
            Xt = new Float32Array(64800),
            Qt = Vt.horizontalAngles[0],
            lt = Vt.horizontalAngles[Vt.numberOfHorizontalAngles - 1];
          for (let qt = 0; qt < 64800; qt++) {
            let tt = qt % Ht;
            const et = Math.floor(qt / Ht);
            lt - Qt !== 0 && (tt < Qt || tt >= lt) && (tt %= 2 * lt, tt > lt && (tt = 2 * lt - tt)), Xt[et + tt * jt] = mt(Vt, et, tt)
          }
          return {
            width: 180,
            height: 1,
            data: Xt
          }
        }(new Uint8Array(tt.buffer, tt.byteOffset, tt.byteLength));
        Vt(Ot.width, Ot.height, !!et.useMipMaps, !1, (() => {
          const tt = et.Jf();
          et.type = 1, et.format = 6, et._gammaSpace = !1, tt._uploadDataToTextureDirectly(et, Ot.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);