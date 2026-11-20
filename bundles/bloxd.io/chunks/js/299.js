export const id = 299;
export const ids = [299];
export const modules = {
  41191: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      _IESTextureLoader: () => bk
    });
    var Rk = Bk(36790);

    function tk(kk) {
      return kk.split(" ").filter((kk => "" !== kk)).map((kk => parseFloat(kk)))
    }

    function ak(kk, Fk, Bk) {
      for (; Bk.length !== Fk;) {
        const Fk = tk(kk.lines[kk.index++]);
        Bk.push(...Fk)
      }
    }

    function Xk(kk, Fk, Bk) {
      let tk = 0,
        ak = 0,
        Xk = 0,
        bk = 0,
        wk = 0,
        dk = 0;
      for (let Rk = 0; Rk < kk.numberOfHorizontalAngles - 1; Rk++)
        if (Bk < kk.horizontalAngles[Rk + 1] || Rk === kk.numberOfHorizontalAngles - 2) {
          ak = Rk, Xk = kk.horizontalAngles[Rk], bk = kk.horizontalAngles[Rk + 1];
          break
        } for (let Rk = 0; Rk < kk.numberOfVerticalAngles - 1; Rk++)
        if (Fk < kk.verticalAngles[Rk + 1] || Rk === kk.numberOfVerticalAngles - 2) {
          tk = Rk, wk = kk.verticalAngles[Rk], dk = kk.verticalAngles[Rk + 1];
          break
        } const sk = bk - Xk,
        Vk = dk - wk;
      if (0 === Vk) return 0;
      const Jk = 0 === sk ? 0 : (Bk - Xk) / sk,
        Ak = (Fk - wk) / Vk,
        ek = 0 === sk ? ak : ak + 1,
        yk = (0, Rk.Lerp)(kk.candelaValues[ak][tk], kk.candelaValues[ek][tk], Jk),
        fk = (0, Rk.Lerp)(kk.candelaValues[ak][tk + 1], kk.candelaValues[ek][tk + 1], Jk);
      return (0, Rk.Lerp)(yk, fk, Ak)
    }
    class bk {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(kk, Fk, Bk) {
        const Rk = function(kk) {
          const Fk = {
              lines: new TextDecoder("utf-8").decode(kk).split("\n"),
              index: 0
            },
            Bk = {
              version: Fk.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (Fk.index = 1; Fk.lines.length > 0 && !Fk.lines[Fk.index].includes("TILT=");) Fk.index++;
          Fk.lines[Fk.index].includes("INCLUDE"), Fk.index++;
          const Rk = tk(Fk.lines[Fk.index++]);
          Bk.numberOfLights = Rk[0], Bk.lumensPerLamp = Rk[1], Bk.numberOfVerticalAngles = Rk[3], Bk.numberOfHorizontalAngles = Rk[4], Bk.photometricType = Rk[5], Bk.unitsType = Rk[6], Bk.width = Rk[7], Bk.length = Rk[8], Bk.height = Rk[9], Fk.index++;
          for (let tk = 0; tk < Bk.numberOfHorizontalAngles; tk++) Bk.candelaValues[tk] = [];
          ak(Fk, Bk.numberOfVerticalAngles, Bk.verticalAngles), ak(Fk, Bk.numberOfHorizontalAngles, Bk.horizontalAngles);
          for (let tk = 0; tk < Bk.numberOfHorizontalAngles; tk++) ak(Fk, Bk.numberOfVerticalAngles, Bk.candelaValues[tk]);
          let bk = -1;
          for (let tk = 0; tk < Bk.numberOfHorizontalAngles; tk++)
            for (let kk = 0; kk < Bk.numberOfVerticalAngles; kk++) bk = Math.max(bk, Bk.candelaValues[tk][kk]);
          if (bk > 0)
            for (let tk = 0; tk < Bk.numberOfHorizontalAngles; tk++)
              for (let kk = 0; kk < Bk.numberOfVerticalAngles; kk++) Bk.candelaValues[tk][kk] /= bk;
          const wk = 180,
            dk = 360,
            sk = new Float32Array(64800),
            Vk = Bk.horizontalAngles[0],
            Jk = Bk.horizontalAngles[Bk.numberOfHorizontalAngles - 1];
          for (let tk = 0; tk < 64800; tk++) {
            let kk = tk % dk;
            const Fk = Math.floor(tk / dk);
            Jk - Vk !== 0 && (kk < Vk || kk >= Jk) && (kk %= 2 * Jk, kk > Jk && (kk = 2 * Jk - kk)), sk[Fk + kk * wk] = Xk(Bk, Fk, kk)
          }
          return {
            width: 180,
            height: 1,
            data: sk
          }
        }(new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength));
        Bk(Rk.width, Rk.height, !!Fk.useMipMaps, !1, (() => {
          const kk = Fk.ne();
          Fk.type = 1, Fk.format = 6, Fk._gammaSpace = !1, kk._uploadDataToTextureDirectly(Fk, Rk.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);