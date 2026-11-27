export const id = 618;
export const ids = [618];
export const modules = {
  44972: (ee, ie, He) => {
    He.r(ie), He.d(ie, {
      _IESTextureLoader: () => Ue
    });
    var ye = He(37938);

    function be(ee) {
      return ee.split(" ").filter((ee => "" !== ee)).map((ee => parseFloat(ee)))
    }

    function Me(ee, ie, He) {
      for (; He.length !== ie;) {
        const ie = be(ee.lines[ee.index++]);
        He.push(...ie)
      }
    }

    function Ke(ee, ie, He) {
      let be = 0,
        Me = 0,
        Ke = 0,
        Ue = 0,
        Fe = 0,
        Je = 0;
      for (let ye = 0; ye < ee.numberOfHorizontalAngles - 1; ye++)
        if (He < ee.horizontalAngles[ye + 1] || ye === ee.numberOfHorizontalAngles - 2) {
          Me = ye, Ke = ee.horizontalAngles[ye], Ue = ee.horizontalAngles[ye + 1];
          break
        } for (let ye = 0; ye < ee.numberOfVerticalAngles - 1; ye++)
        if (ie < ee.verticalAngles[ye + 1] || ye === ee.numberOfVerticalAngles - 2) {
          be = ye, Fe = ee.verticalAngles[ye], Je = ee.verticalAngles[ye + 1];
          break
        } const oe = Ue - Ke,
        Re = Je - Fe;
      if (0 === Re) return 0;
      const ke = 0 === oe ? 0 : (He - Ke) / oe,
        qe = (ie - Fe) / Re,
        fe = 0 === oe ? Me : Me + 1,
        Te = (0, ye.Lerp)(ee.candelaValues[Me][be], ee.candelaValues[fe][be], ke),
        pe = (0, ye.Lerp)(ee.candelaValues[Me][be + 1], ee.candelaValues[fe][be + 1], ke);
      return (0, ye.Lerp)(Te, pe, qe)
    }
    class Ue {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(ee, ie, He) {
        const ye = function(ee) {
          const ie = {
              lines: new TextDecoder("utf-8").decode(ee).split("\n"),
              index: 0
            },
            He = {
              version: ie.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (ie.index = 1; ie.lines.length > 0 && !ie.lines[ie.index].includes("TILT=");) ie.index++;
          ie.lines[ie.index].includes("INCLUDE"), ie.index++;
          const ye = be(ie.lines[ie.index++]);
          He.numberOfLights = ye[0], He.lumensPerLamp = ye[1], He.numberOfVerticalAngles = ye[3], He.numberOfHorizontalAngles = ye[4], He.photometricType = ye[5], He.unitsType = ye[6], He.width = ye[7], He.length = ye[8], He.height = ye[9], ie.index++;
          for (let be = 0; be < He.numberOfHorizontalAngles; be++) He.candelaValues[be] = [];
          Me(ie, He.numberOfVerticalAngles, He.verticalAngles), Me(ie, He.numberOfHorizontalAngles, He.horizontalAngles);
          for (let be = 0; be < He.numberOfHorizontalAngles; be++) Me(ie, He.numberOfVerticalAngles, He.candelaValues[be]);
          let Ue = -1;
          for (let be = 0; be < He.numberOfHorizontalAngles; be++)
            for (let ee = 0; ee < He.numberOfVerticalAngles; ee++) Ue = Math.max(Ue, He.candelaValues[be][ee]);
          if (Ue > 0)
            for (let be = 0; be < He.numberOfHorizontalAngles; be++)
              for (let ee = 0; ee < He.numberOfVerticalAngles; ee++) He.candelaValues[be][ee] /= Ue;
          const Fe = 180,
            Je = 360,
            oe = new Float32Array(64800),
            Re = He.horizontalAngles[0],
            ke = He.horizontalAngles[He.numberOfHorizontalAngles - 1];
          for (let be = 0; be < 64800; be++) {
            let ee = be % Je;
            const ie = Math.floor(be / Je);
            ke - Re !== 0 && (ee < Re || ee >= ke) && (ee %= 2 * ke, ee > ke && (ee = 2 * ke - ee)), oe[ie + ee * Fe] = Ke(He, ie, ee)
          }
          return {
            width: 180,
            height: 1,
            data: oe
          }
        }(new Uint8Array(ee.buffer, ee.byteOffset, ee.byteLength));
        He(ye.width, ye.height, !!ie.useMipMaps, !1, (() => {
          const ee = ie.Nf();
          ie.type = 1, ie.format = 6, ie._gammaSpace = !1, ee._uploadDataToTextureDirectly(ie, ye.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);