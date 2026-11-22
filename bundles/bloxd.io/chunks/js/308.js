export const id = 308;
export const ids = [308];
export const modules = {
  41355: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      _IESTextureLoader: () => rk
    });
    var Dk = ik(36729);

    function fk(kk) {
      return kk.split(" ").filter((kk => "" !== kk)).map((kk => parseFloat(kk)))
    }

    function Sk(kk, ek, ik) {
      for (; ik.length !== ek;) {
        const ek = fk(kk.lines[kk.index++]);
        ik.push(...ek)
      }
    }

    function bk(kk, ek, ik) {
      let fk = 0,
        Sk = 0,
        bk = 0,
        rk = 0,
        Pk = 0,
        mk = 0;
      for (let Dk = 0; Dk < kk.numberOfHorizontalAngles - 1; Dk++)
        if (ik < kk.horizontalAngles[Dk + 1] || Dk === kk.numberOfHorizontalAngles - 2) {
          Sk = Dk, bk = kk.horizontalAngles[Dk], rk = kk.horizontalAngles[Dk + 1];
          break
        } for (let Dk = 0; Dk < kk.numberOfVerticalAngles - 1; Dk++)
        if (ek < kk.verticalAngles[Dk + 1] || Dk === kk.numberOfVerticalAngles - 2) {
          fk = Dk, Pk = kk.verticalAngles[Dk], mk = kk.verticalAngles[Dk + 1];
          break
        } const Mk = rk - bk,
        Kk = mk - Pk;
      if (0 === Kk) return 0;
      const xk = 0 === Mk ? 0 : (ik - bk) / Mk,
        nk = (ek - Pk) / Kk,
        Uk = 0 === Mk ? Sk : Sk + 1,
        Hk = (0, Dk.Lerp)(kk.candelaValues[Sk][fk], kk.candelaValues[Uk][fk], xk),
        wk = (0, Dk.Lerp)(kk.candelaValues[Sk][fk + 1], kk.candelaValues[Uk][fk + 1], xk);
      return (0, Dk.Lerp)(Hk, wk, nk)
    }
    class rk {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(kk, ek, ik) {
        const Dk = function(kk) {
          const ek = {
              lines: new TextDecoder("utf-8").decode(kk).split("\n"),
              index: 0
            },
            ik = {
              version: ek.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (ek.index = 1; ek.lines.length > 0 && !ek.lines[ek.index].includes("TILT=");) ek.index++;
          ek.lines[ek.index].includes("INCLUDE"), ek.index++;
          const Dk = fk(ek.lines[ek.index++]);
          ik.numberOfLights = Dk[0], ik.lumensPerLamp = Dk[1], ik.numberOfVerticalAngles = Dk[3], ik.numberOfHorizontalAngles = Dk[4], ik.photometricType = Dk[5], ik.unitsType = Dk[6], ik.width = Dk[7], ik.length = Dk[8], ik.height = Dk[9], ek.index++;
          for (let fk = 0; fk < ik.numberOfHorizontalAngles; fk++) ik.candelaValues[fk] = [];
          Sk(ek, ik.numberOfVerticalAngles, ik.verticalAngles), Sk(ek, ik.numberOfHorizontalAngles, ik.horizontalAngles);
          for (let fk = 0; fk < ik.numberOfHorizontalAngles; fk++) Sk(ek, ik.numberOfVerticalAngles, ik.candelaValues[fk]);
          let rk = -1;
          for (let fk = 0; fk < ik.numberOfHorizontalAngles; fk++)
            for (let kk = 0; kk < ik.numberOfVerticalAngles; kk++) rk = Math.max(rk, ik.candelaValues[fk][kk]);
          if (rk > 0)
            for (let fk = 0; fk < ik.numberOfHorizontalAngles; fk++)
              for (let kk = 0; kk < ik.numberOfVerticalAngles; kk++) ik.candelaValues[fk][kk] /= rk;
          const Pk = 180,
            mk = 360,
            Mk = new Float32Array(64800),
            Kk = ik.horizontalAngles[0],
            xk = ik.horizontalAngles[ik.numberOfHorizontalAngles - 1];
          for (let fk = 0; fk < 64800; fk++) {
            let kk = fk % mk;
            const ek = Math.floor(fk / mk);
            xk - Kk !== 0 && (kk < Kk || kk >= xk) && (kk %= 2 * xk, kk > xk && (kk = 2 * xk - kk)), Mk[ek + kk * Pk] = bk(ik, ek, kk)
          }
          return {
            width: 180,
            height: 1,
            data: Mk
          }
        }(new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength));
        ik(Dk.width, Dk.height, !!ek.useMipMaps, !1, (() => {
          const kk = ek.JU();
          ek.type = 1, ek.format = 6, ek._gammaSpace = !1, kk._uploadDataToTextureDirectly(ek, Dk.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);