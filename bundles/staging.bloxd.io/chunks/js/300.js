export const id = 300;
export const ids = [300];
export const modules = {
  41728: (dd, Jd, kd) => {
    kd.r(Jd), kd.d(Jd, {
      _IESTextureLoader: () => Zd
    });
    var pd = kd(37289);

    function Nd(dd) {
      return dd.split(" ").filter((dd => "" !== dd)).map((dd => parseFloat(dd)))
    }

    function Wd(dd, Jd, kd) {
      for (; kd.length !== Jd;) {
        const Jd = Nd(dd.lines[dd.index++]);
        kd.push(...Jd)
      }
    }

    function Pd(dd, Jd, kd) {
      let Nd = 0,
        Wd = 0,
        Pd = 0,
        Zd = 0,
        gd = 0,
        Cd = 0;
      for (let pd = 0; pd < dd.numberOfHorizontalAngles - 1; pd++)
        if (kd < dd.horizontalAngles[pd + 1] || pd === dd.numberOfHorizontalAngles - 2) {
          Wd = pd, Pd = dd.horizontalAngles[pd], Zd = dd.horizontalAngles[pd + 1];
          break
        } for (let pd = 0; pd < dd.numberOfVerticalAngles - 1; pd++)
        if (Jd < dd.verticalAngles[pd + 1] || pd === dd.numberOfVerticalAngles - 2) {
          Nd = pd, gd = dd.verticalAngles[pd], Cd = dd.verticalAngles[pd + 1];
          break
        } const Kd = Zd - Pd,
        od = Cd - gd;
      if (0 === od) return 0;
      const ld = 0 === Kd ? 0 : (kd - Pd) / Kd,
        Qd = (Jd - gd) / od,
        Ld = 0 === Kd ? Wd : Wd + 1,
        Od = (0, pd.Lerp)(dd.candelaValues[Wd][Nd], dd.candelaValues[Ld][Nd], ld),
        ed = (0, pd.Lerp)(dd.candelaValues[Wd][Nd + 1], dd.candelaValues[Ld][Nd + 1], ld);
      return (0, pd.Lerp)(Od, ed, Qd)
    }
    class Zd {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(dd, Jd, kd) {
        const pd = function(dd) {
          const Jd = {
              lines: new TextDecoder("utf-8").decode(dd).split("\n"),
              index: 0
            },
            kd = {
              version: Jd.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (Jd.index = 1; Jd.lines.length > 0 && !Jd.lines[Jd.index].includes("TILT=");) Jd.index++;
          Jd.lines[Jd.index].includes("INCLUDE"), Jd.index++;
          const pd = Nd(Jd.lines[Jd.index++]);
          kd.numberOfLights = pd[0], kd.lumensPerLamp = pd[1], kd.numberOfVerticalAngles = pd[3], kd.numberOfHorizontalAngles = pd[4], kd.photometricType = pd[5], kd.unitsType = pd[6], kd.width = pd[7], kd.length = pd[8], kd.height = pd[9], Jd.index++;
          for (let Nd = 0; Nd < kd.numberOfHorizontalAngles; Nd++) kd.candelaValues[Nd] = [];
          Wd(Jd, kd.numberOfVerticalAngles, kd.verticalAngles), Wd(Jd, kd.numberOfHorizontalAngles, kd.horizontalAngles);
          for (let Nd = 0; Nd < kd.numberOfHorizontalAngles; Nd++) Wd(Jd, kd.numberOfVerticalAngles, kd.candelaValues[Nd]);
          let Zd = -1;
          for (let Nd = 0; Nd < kd.numberOfHorizontalAngles; Nd++)
            for (let dd = 0; dd < kd.numberOfVerticalAngles; dd++) Zd = Math.max(Zd, kd.candelaValues[Nd][dd]);
          if (Zd > 0)
            for (let Nd = 0; Nd < kd.numberOfHorizontalAngles; Nd++)
              for (let dd = 0; dd < kd.numberOfVerticalAngles; dd++) kd.candelaValues[Nd][dd] /= Zd;
          const gd = 180,
            Cd = 360,
            Kd = new Float32Array(64800),
            od = kd.horizontalAngles[0],
            ld = kd.horizontalAngles[kd.numberOfHorizontalAngles - 1];
          for (let Nd = 0; Nd < 64800; Nd++) {
            let dd = Nd % Cd;
            const Jd = Math.floor(Nd / Cd);
            ld - od !== 0 && (dd < od || dd >= ld) && (dd %= 2 * ld, dd > ld && (dd = 2 * ld - dd)), Kd[Jd + dd * gd] = Pd(kd, Jd, dd)
          }
          return {
            width: 180,
            height: 1,
            data: Kd
          }
        }(new Uint8Array(dd.buffer, dd.byteOffset, dd.byteLength));
        kd(pd.width, pd.height, !!Jd.useMipMaps, !1, (() => {
          const dd = Jd.eL();
          Jd.type = 1, Jd.format = 6, Jd._gammaSpace = !1, dd._uploadDataToTextureDirectly(Jd, pd.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);