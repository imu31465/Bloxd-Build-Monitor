export const id = 284;
export const ids = [284];
export const modules = {
  39712: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      _IESTextureLoader: () => sc
    });
    var Vc = nc(35785);

    function Ic(cB) {
      return cB.split(" ").filter((cB => "" !== cB)).map((cB => parseFloat(cB)))
    }

    function rB(cB, Bc, nc) {
      for (; nc.length !== Bc;) {
        const Bc = Ic(cB.lines[cB.index++]);
        nc.push(...Bc)
      }
    }

    function uc(cB, Bc, nc) {
      let Ic = 0,
        rB = 0,
        uc = 0,
        sc = 0,
        Mc = 0,
        Pc = 0;
      for (let Vc = 0; Vc < cB.numberOfHorizontalAngles - 1; Vc++)
        if (nc < cB.horizontalAngles[Vc + 1] || Vc === cB.numberOfHorizontalAngles - 2) {
          rB = Vc, uc = cB.horizontalAngles[Vc], sc = cB.horizontalAngles[Vc + 1];
          break
        } for (let Vc = 0; Vc < cB.numberOfVerticalAngles - 1; Vc++)
        if (Bc < cB.verticalAngles[Vc + 1] || Vc === cB.numberOfVerticalAngles - 2) {
          Ic = Vc, Mc = cB.verticalAngles[Vc], Pc = cB.verticalAngles[Vc + 1];
          break
        } const qB = sc - uc,
        Oc = Pc - Mc;
      if (0 === Oc) return 0;
      const Tc = 0 === qB ? 0 : (nc - uc) / qB,
        fc = (Bc - Mc) / Oc,
        mB = 0 === qB ? rB : rB + 1,
        ec = (0, Vc.Lerp)(cB.candelaValues[rB][Ic], cB.candelaValues[mB][Ic], Tc),
        tB = (0, Vc.Lerp)(cB.candelaValues[rB][Ic + 1], cB.candelaValues[mB][Ic + 1], Tc);
      return (0, Vc.Lerp)(ec, tB, fc)
    }
    class sc {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(cB, Bc, nc) {
        const Vc = function(cB) {
          const Bc = {
              lines: new TextDecoder("utf-8").decode(cB).split("\n"),
              index: 0
            },
            nc = {
              version: Bc.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (Bc.index = 1; Bc.lines.length > 0 && !Bc.lines[Bc.index].includes("TILT=");) Bc.index++;
          Bc.lines[Bc.index].includes("INCLUDE"), Bc.index++;
          const Vc = Ic(Bc.lines[Bc.index++]);
          nc.numberOfLights = Vc[0], nc.lumensPerLamp = Vc[1], nc.numberOfVerticalAngles = Vc[3], nc.numberOfHorizontalAngles = Vc[4], nc.photometricType = Vc[5], nc.unitsType = Vc[6], nc.width = Vc[7], nc.length = Vc[8], nc.height = Vc[9], Bc.index++;
          for (let Ic = 0; Ic < nc.numberOfHorizontalAngles; Ic++) nc.candelaValues[Ic] = [];
          rB(Bc, nc.numberOfVerticalAngles, nc.verticalAngles), rB(Bc, nc.numberOfHorizontalAngles, nc.horizontalAngles);
          for (let Ic = 0; Ic < nc.numberOfHorizontalAngles; Ic++) rB(Bc, nc.numberOfVerticalAngles, nc.candelaValues[Ic]);
          let sc = -1;
          for (let Ic = 0; Ic < nc.numberOfHorizontalAngles; Ic++)
            for (let cB = 0; cB < nc.numberOfVerticalAngles; cB++) sc = Math.max(sc, nc.candelaValues[Ic][cB]);
          if (sc > 0)
            for (let Ic = 0; Ic < nc.numberOfHorizontalAngles; Ic++)
              for (let cB = 0; cB < nc.numberOfVerticalAngles; cB++) nc.candelaValues[Ic][cB] /= sc;
          const Mc = 180,
            Pc = 360,
            qB = new Float32Array(64800),
            Oc = nc.horizontalAngles[0],
            Tc = nc.horizontalAngles[nc.numberOfHorizontalAngles - 1];
          for (let Ic = 0; Ic < 64800; Ic++) {
            let cB = Ic % Pc;
            const Bc = Math.floor(Ic / Pc);
            Tc - Oc !== 0 && (cB < Oc || cB >= Tc) && (cB %= 2 * Tc, cB > Tc && (cB = 2 * Tc - cB)), qB[Bc + cB * Mc] = uc(nc, Bc, cB)
          }
          return {
            width: 180,
            height: 1,
            data: qB
          }
        }(new Uint8Array(cB.buffer, cB.byteOffset, cB.byteLength));
        nc(Vc.width, Vc.height, !!Bc.useMipMaps, !1, (() => {
          const cB = Bc.RV();
          Bc.type = 1, Bc.format = 6, Bc._gammaSpace = !1, cB._uploadDataToTextureDirectly(Bc, Vc.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);