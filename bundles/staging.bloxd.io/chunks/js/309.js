export const id = 309;
export const ids = [309];
export const modules = {
  41770: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      _IESTextureLoader: () => lk
    });
    var Xk = Ik(37189);

    function Tk(kk) {
      return kk.split(" ").filter((kk => "" !== kk)).map((kk => parseFloat(kk)))
    }

    function ik(kk, Fk, Ik) {
      for (; Ik.length !== Fk;) {
        const Fk = Tk(kk.lines[kk.index++]);
        Ik.push(...Fk)
      }
    }

    function yk(kk, Fk, Ik) {
      let Tk = 0,
        ik = 0,
        yk = 0,
        lk = 0,
        ak = 0,
        qk = 0;
      for (let Xk = 0; Xk < kk.numberOfHorizontalAngles - 1; Xk++)
        if (Ik < kk.horizontalAngles[Xk + 1] || Xk === kk.numberOfHorizontalAngles - 2) {
          ik = Xk, yk = kk.horizontalAngles[Xk], lk = kk.horizontalAngles[Xk + 1];
          break
        } for (let Xk = 0; Xk < kk.numberOfVerticalAngles - 1; Xk++)
        if (Fk < kk.verticalAngles[Xk + 1] || Xk === kk.numberOfVerticalAngles - 2) {
          Tk = Xk, ak = kk.verticalAngles[Xk], qk = kk.verticalAngles[Xk + 1];
          break
        } const Lk = lk - yk,
        tk = qk - ak;
      if (0 === tk) return 0;
      const Zk = 0 === Lk ? 0 : (Ik - yk) / Lk,
        jk = (Fk - ak) / tk,
        ek = 0 === Lk ? ik : ik + 1,
        wk = (0, Xk.Lerp)(kk.candelaValues[ik][Tk], kk.candelaValues[ek][Tk], Zk),
        Hk = (0, Xk.Lerp)(kk.candelaValues[ik][Tk + 1], kk.candelaValues[ek][Tk + 1], Zk);
      return (0, Xk.Lerp)(wk, Hk, jk)
    }
    class lk {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(kk, Fk, Ik) {
        const Xk = function(kk) {
          const Fk = {
              lines: new TextDecoder("utf-8").decode(kk).split("\n"),
              index: 0
            },
            Ik = {
              version: Fk.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (Fk.index = 1; Fk.lines.length > 0 && !Fk.lines[Fk.index].includes("TILT=");) Fk.index++;
          Fk.lines[Fk.index].includes("INCLUDE"), Fk.index++;
          const Xk = Tk(Fk.lines[Fk.index++]);
          Ik.numberOfLights = Xk[0], Ik.lumensPerLamp = Xk[1], Ik.numberOfVerticalAngles = Xk[3], Ik.numberOfHorizontalAngles = Xk[4], Ik.photometricType = Xk[5], Ik.unitsType = Xk[6], Ik.width = Xk[7], Ik.length = Xk[8], Ik.height = Xk[9], Fk.index++;
          for (let Tk = 0; Tk < Ik.numberOfHorizontalAngles; Tk++) Ik.candelaValues[Tk] = [];
          ik(Fk, Ik.numberOfVerticalAngles, Ik.verticalAngles), ik(Fk, Ik.numberOfHorizontalAngles, Ik.horizontalAngles);
          for (let Tk = 0; Tk < Ik.numberOfHorizontalAngles; Tk++) ik(Fk, Ik.numberOfVerticalAngles, Ik.candelaValues[Tk]);
          let lk = -1;
          for (let Tk = 0; Tk < Ik.numberOfHorizontalAngles; Tk++)
            for (let kk = 0; kk < Ik.numberOfVerticalAngles; kk++) lk = Math.max(lk, Ik.candelaValues[Tk][kk]);
          if (lk > 0)
            for (let Tk = 0; Tk < Ik.numberOfHorizontalAngles; Tk++)
              for (let kk = 0; kk < Ik.numberOfVerticalAngles; kk++) Ik.candelaValues[Tk][kk] /= lk;
          const ak = 180,
            qk = 360,
            Lk = new Float32Array(64800),
            tk = Ik.horizontalAngles[0],
            Zk = Ik.horizontalAngles[Ik.numberOfHorizontalAngles - 1];
          for (let Tk = 0; Tk < 64800; Tk++) {
            let kk = Tk % qk;
            const Fk = Math.floor(Tk / qk);
            Zk - tk !== 0 && (kk < tk || kk >= Zk) && (kk %= 2 * Zk, kk > Zk && (kk = 2 * Zk - kk)), Lk[Fk + kk * ak] = yk(Ik, Fk, kk)
          }
          return {
            width: 180,
            height: 1,
            data: Lk
          }
        }(new Uint8Array(kk.buffer, kk.byteOffset, kk.byteLength));
        Ik(Xk.width, Xk.height, !!Fk.useMipMaps, !1, (() => {
          const kk = Fk.Oe();
          Fk.type = 1, Fk.format = 6, Fk._gammaSpace = !1, kk._uploadDataToTextureDirectly(Fk, Xk.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);