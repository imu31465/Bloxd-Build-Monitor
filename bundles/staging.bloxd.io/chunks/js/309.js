export const id = 309;
export const ids = [309];
export const modules = {
  41799: (mm, Tm, fm) => {
    fm.r(Tm), fm.d(Tm, {
      _IESTextureLoader: () => wm
    });
    var hm = fm(37208);

    function Am(mm) {
      return mm.split(" ").filter((mm => "" !== mm)).map((mm => parseFloat(mm)))
    }

    function am(mm, Tm, fm) {
      for (; fm.length !== Tm;) {
        const Tm = Am(mm.lines[mm.index++]);
        fm.push(...Tm)
      }
    }

    function xm(mm, Tm, fm) {
      let Am = 0,
        am = 0,
        xm = 0,
        wm = 0,
        Dm = 0,
        im = 0;
      for (let hm = 0; hm < mm.numberOfHorizontalAngles - 1; hm++)
        if (fm < mm.horizontalAngles[hm + 1] || hm === mm.numberOfHorizontalAngles - 2) {
          am = hm, xm = mm.horizontalAngles[hm], wm = mm.horizontalAngles[hm + 1];
          break
        } for (let hm = 0; hm < mm.numberOfVerticalAngles - 1; hm++)
        if (Tm < mm.verticalAngles[hm + 1] || hm === mm.numberOfVerticalAngles - 2) {
          Am = hm, Dm = mm.verticalAngles[hm], im = mm.verticalAngles[hm + 1];
          break
        } const Rm = wm - xm,
        pm = im - Dm;
      if (0 === pm) return 0;
      const Em = 0 === Rm ? 0 : (fm - xm) / Rm,
        om = (Tm - Dm) / pm,
        Om = 0 === Rm ? am : am + 1,
        Ym = (0, hm.Lerp)(mm.candelaValues[am][Am], mm.candelaValues[Om][Am], Em),
        qm = (0, hm.Lerp)(mm.candelaValues[am][Am + 1], mm.candelaValues[Om][Am + 1], Em);
      return (0, hm.Lerp)(Ym, qm, om)
    }
    class wm {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(mm, Tm, fm) {
        const hm = function(mm) {
          const Tm = {
              lines: new TextDecoder("utf-8").decode(mm).split("\n"),
              index: 0
            },
            fm = {
              version: Tm.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (Tm.index = 1; Tm.lines.length > 0 && !Tm.lines[Tm.index].includes("TILT=");) Tm.index++;
          Tm.lines[Tm.index].includes("INCLUDE"), Tm.index++;
          const hm = Am(Tm.lines[Tm.index++]);
          fm.numberOfLights = hm[0], fm.lumensPerLamp = hm[1], fm.numberOfVerticalAngles = hm[3], fm.numberOfHorizontalAngles = hm[4], fm.photometricType = hm[5], fm.unitsType = hm[6], fm.width = hm[7], fm.length = hm[8], fm.height = hm[9], Tm.index++;
          for (let Am = 0; Am < fm.numberOfHorizontalAngles; Am++) fm.candelaValues[Am] = [];
          am(Tm, fm.numberOfVerticalAngles, fm.verticalAngles), am(Tm, fm.numberOfHorizontalAngles, fm.horizontalAngles);
          for (let Am = 0; Am < fm.numberOfHorizontalAngles; Am++) am(Tm, fm.numberOfVerticalAngles, fm.candelaValues[Am]);
          let wm = -1;
          for (let Am = 0; Am < fm.numberOfHorizontalAngles; Am++)
            for (let mm = 0; mm < fm.numberOfVerticalAngles; mm++) wm = Math.max(wm, fm.candelaValues[Am][mm]);
          if (wm > 0)
            for (let Am = 0; Am < fm.numberOfHorizontalAngles; Am++)
              for (let mm = 0; mm < fm.numberOfVerticalAngles; mm++) fm.candelaValues[Am][mm] /= wm;
          const Dm = 180,
            im = 360,
            Rm = new Float32Array(64800),
            pm = fm.horizontalAngles[0],
            Em = fm.horizontalAngles[fm.numberOfHorizontalAngles - 1];
          for (let Am = 0; Am < 64800; Am++) {
            let mm = Am % im;
            const Tm = Math.floor(Am / im);
            Em - pm !== 0 && (mm < pm || mm >= Em) && (mm %= 2 * Em, mm > Em && (mm = 2 * Em - mm)), Rm[Tm + mm * Dm] = xm(fm, Tm, mm)
          }
          return {
            width: 180,
            height: 1,
            data: Rm
          }
        }(new Uint8Array(mm.buffer, mm.byteOffset, mm.byteLength));
        fm(hm.width, hm.height, !!Tm.useMipMaps, !1, (() => {
          const mm = Tm.dO();
          Tm.type = 1, Tm.format = 6, Tm._gammaSpace = !1, mm._uploadDataToTextureDirectly(Tm, hm.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const mm in modules) Object.freeze(modules[mm]);