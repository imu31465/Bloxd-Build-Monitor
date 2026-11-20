export const id = 299;
export const ids = [299];
export const modules = {
  40881: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      _IESTextureLoader: () => Yb
    });
    var Ab = Ub(36436);

    function Mb(bb) {
      return bb.split(" ").filter((bb => "" !== bb)).map((bb => parseFloat(bb)))
    }

    function Tb(bb, ab, Ub) {
      for (; Ub.length !== ab;) {
        const ab = Mb(bb.lines[bb.index++]);
        Ub.push(...ab)
      }
    }

    function Eb(bb, ab, Ub) {
      let Mb = 0,
        Tb = 0,
        Eb = 0,
        Yb = 0,
        Bb = 0,
        eb = 0;
      for (let Ab = 0; Ab < bb.numberOfHorizontalAngles - 1; Ab++)
        if (Ub < bb.horizontalAngles[Ab + 1] || Ab === bb.numberOfHorizontalAngles - 2) {
          Tb = Ab, Eb = bb.horizontalAngles[Ab], Yb = bb.horizontalAngles[Ab + 1];
          break
        } for (let Ab = 0; Ab < bb.numberOfVerticalAngles - 1; Ab++)
        if (ab < bb.verticalAngles[Ab + 1] || Ab === bb.numberOfVerticalAngles - 2) {
          Mb = Ab, Bb = bb.verticalAngles[Ab], eb = bb.verticalAngles[Ab + 1];
          break
        } const vb = Yb - Eb,
        Lb = eb - Bb;
      if (0 === Lb) return 0;
      const Pb = 0 === vb ? 0 : (Ub - Eb) / vb,
        Xb = (ab - Bb) / Lb,
        jb = 0 === vb ? Tb : Tb + 1,
        Rb = (0, Ab.Lerp)(bb.candelaValues[Tb][Mb], bb.candelaValues[jb][Mb], Pb),
        kb = (0, Ab.Lerp)(bb.candelaValues[Tb][Mb + 1], bb.candelaValues[jb][Mb + 1], Pb);
      return (0, Ab.Lerp)(Rb, kb, Xb)
    }
    class Yb {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(bb, ab, Ub) {
        const Ab = function(bb) {
          const ab = {
              lines: new TextDecoder("utf-8").decode(bb).split("\n"),
              index: 0
            },
            Ub = {
              version: ab.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (ab.index = 1; ab.lines.length > 0 && !ab.lines[ab.index].includes("TILT=");) ab.index++;
          ab.lines[ab.index].includes("INCLUDE"), ab.index++;
          const Ab = Mb(ab.lines[ab.index++]);
          Ub.numberOfLights = Ab[0], Ub.lumensPerLamp = Ab[1], Ub.numberOfVerticalAngles = Ab[3], Ub.numberOfHorizontalAngles = Ab[4], Ub.photometricType = Ab[5], Ub.unitsType = Ab[6], Ub.width = Ab[7], Ub.length = Ab[8], Ub.height = Ab[9], ab.index++;
          for (let Mb = 0; Mb < Ub.numberOfHorizontalAngles; Mb++) Ub.candelaValues[Mb] = [];
          Tb(ab, Ub.numberOfVerticalAngles, Ub.verticalAngles), Tb(ab, Ub.numberOfHorizontalAngles, Ub.horizontalAngles);
          for (let Mb = 0; Mb < Ub.numberOfHorizontalAngles; Mb++) Tb(ab, Ub.numberOfVerticalAngles, Ub.candelaValues[Mb]);
          let Yb = -1;
          for (let Mb = 0; Mb < Ub.numberOfHorizontalAngles; Mb++)
            for (let bb = 0; bb < Ub.numberOfVerticalAngles; bb++) Yb = Math.max(Yb, Ub.candelaValues[Mb][bb]);
          if (Yb > 0)
            for (let Mb = 0; Mb < Ub.numberOfHorizontalAngles; Mb++)
              for (let bb = 0; bb < Ub.numberOfVerticalAngles; bb++) Ub.candelaValues[Mb][bb] /= Yb;
          const Bb = 180,
            eb = 360,
            vb = new Float32Array(64800),
            Lb = Ub.horizontalAngles[0],
            Pb = Ub.horizontalAngles[Ub.numberOfHorizontalAngles - 1];
          for (let Mb = 0; Mb < 64800; Mb++) {
            let bb = Mb % eb;
            const ab = Math.floor(Mb / eb);
            Pb - Lb !== 0 && (bb < Lb || bb >= Pb) && (bb %= 2 * Pb, bb > Pb && (bb = 2 * Pb - bb)), vb[ab + bb * Bb] = Eb(Ub, ab, bb)
          }
          return {
            width: 180,
            height: 1,
            data: vb
          }
        }(new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength));
        Ub(Ab.width, Ab.height, !!ab.useMipMaps, !1, (() => {
          const bb = ab.vj();
          ab.type = 1, ab.format = 6, ab._gammaSpace = !1, bb._uploadDataToTextureDirectly(ab, Ab.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);