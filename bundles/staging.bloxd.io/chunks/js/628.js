export const id = 628;
export const ids = [628];
export const modules = {
  54201: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      _IESTextureLoader: () => Kd
    });
    var Wd = md(38663);

    function Fd(dd) {
      return dd.split(" ").filter((dd => "" !== dd)).map((dd => parseFloat(dd)))
    }

    function Rd(dd, Od, md) {
      for (; md.length !== Od;) {
        const Od = Fd(dd.lines[dd.index++]);
        md.push(...Od)
      }
    }

    function Xd(dd, Od, md) {
      let Fd = 0,
        Rd = 0,
        Xd = 0,
        Kd = 0,
        hd = 0,
        vd = 0;
      for (let Wd = 0; Wd < dd.numberOfHorizontalAngles - 1; Wd++)
        if (md < dd.horizontalAngles[Wd + 1] || Wd === dd.numberOfHorizontalAngles - 2) {
          Rd = Wd, Xd = dd.horizontalAngles[Wd], Kd = dd.horizontalAngles[Wd + 1];
          break
        } for (let Wd = 0; Wd < dd.numberOfVerticalAngles - 1; Wd++)
        if (Od < dd.verticalAngles[Wd + 1] || Wd === dd.numberOfVerticalAngles - 2) {
          Fd = Wd, hd = dd.verticalAngles[Wd], vd = dd.verticalAngles[Wd + 1];
          break
        } const Qd = Kd - Xd,
        td = vd - hd;
      if (0 === td) return 0;
      const od = 0 === Qd ? 0 : (md - Xd) / Qd,
        Nd = (Od - hd) / td,
        qd = 0 === Qd ? Rd : Rd + 1,
        Hd = (0, Wd.Lerp)(dd.candelaValues[Rd][Fd], dd.candelaValues[qd][Fd], od),
        yd = (0, Wd.Lerp)(dd.candelaValues[Rd][Fd + 1], dd.candelaValues[qd][Fd + 1], od);
      return (0, Wd.Lerp)(Hd, yd, Nd)
    }
    class Kd {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(dd, Od, md) {
        const Wd = function(dd) {
          const Od = {
              lines: new TextDecoder("utf-8").decode(dd).split("\n"),
              index: 0
            },
            md = {
              version: Od.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (Od.index = 1; Od.lines.length > 0 && !Od.lines[Od.index].includes("TILT=");) Od.index++;
          Od.lines[Od.index].includes("INCLUDE"), Od.index++;
          const Wd = Fd(Od.lines[Od.index++]);
          md.numberOfLights = Wd[0], md.lumensPerLamp = Wd[1], md.numberOfVerticalAngles = Wd[3], md.numberOfHorizontalAngles = Wd[4], md.photometricType = Wd[5], md.unitsType = Wd[6], md.width = Wd[7], md.length = Wd[8], md.height = Wd[9], Od.index++;
          for (let Fd = 0; Fd < md.numberOfHorizontalAngles; Fd++) md.candelaValues[Fd] = [];
          Rd(Od, md.numberOfVerticalAngles, md.verticalAngles), Rd(Od, md.numberOfHorizontalAngles, md.horizontalAngles);
          for (let Fd = 0; Fd < md.numberOfHorizontalAngles; Fd++) Rd(Od, md.numberOfVerticalAngles, md.candelaValues[Fd]);
          let Kd = -1;
          for (let Fd = 0; Fd < md.numberOfHorizontalAngles; Fd++)
            for (let dd = 0; dd < md.numberOfVerticalAngles; dd++) Kd = Math.max(Kd, md.candelaValues[Fd][dd]);
          if (Kd > 0)
            for (let Fd = 0; Fd < md.numberOfHorizontalAngles; Fd++)
              for (let dd = 0; dd < md.numberOfVerticalAngles; dd++) md.candelaValues[Fd][dd] /= Kd;
          const hd = 180,
            vd = 360,
            Qd = new Float32Array(64800),
            td = md.horizontalAngles[0],
            od = md.horizontalAngles[md.numberOfHorizontalAngles - 1];
          for (let Fd = 0; Fd < 64800; Fd++) {
            let dd = Fd % vd;
            const Od = Math.floor(Fd / vd);
            od - td !== 0 && (dd < td || dd >= od) && (dd %= 2 * od, dd > od && (dd = 2 * od - dd)), Qd[Od + dd * hd] = Xd(md, Od, dd)
          }
          return {
            width: 180,
            height: 1,
            data: Qd
          }
        }(new Uint8Array(dd.buffer, dd.byteOffset, dd.byteLength));
        md(Wd.width, Wd.height, !!Od.useMipMaps, !1, (() => {
          const dd = Od.Iq();
          Od.type = 1, Od.format = 6, Od._gammaSpace = !1, dd._uploadDataToTextureDirectly(Od, Wd.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);