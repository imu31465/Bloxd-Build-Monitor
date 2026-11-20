export const id = 299;
export const ids = [299];
export const modules = {
  41166: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      _IESTextureLoader: () => Ub
    });
    var kb = sb(36688);

    function Wb(bb) {
      return bb.split(" ").filter((bb => "" !== bb)).map((bb => parseFloat(bb)))
    }

    function ab(bb, cb, sb) {
      for (; sb.length !== cb;) {
        const cb = Wb(bb.lines[bb.index++]);
        sb.push(...cb)
      }
    }

    function Tb(bb, cb, sb) {
      let Wb = 0,
        ab = 0,
        Tb = 0,
        Ub = 0,
        Ib = 0,
        Hb = 0;
      for (let kb = 0; kb < bb.numberOfHorizontalAngles - 1; kb++)
        if (sb < bb.horizontalAngles[kb + 1] || kb === bb.numberOfHorizontalAngles - 2) {
          ab = kb, Tb = bb.horizontalAngles[kb], Ub = bb.horizontalAngles[kb + 1];
          break
        } for (let kb = 0; kb < bb.numberOfVerticalAngles - 1; kb++)
        if (cb < bb.verticalAngles[kb + 1] || kb === bb.numberOfVerticalAngles - 2) {
          Wb = kb, Ib = bb.verticalAngles[kb], Hb = bb.verticalAngles[kb + 1];
          break
        } const fb = Ub - Tb,
        Mb = Hb - Ib;
      if (0 === Mb) return 0;
      const Xb = 0 === fb ? 0 : (sb - Tb) / fb,
        nb = (cb - Ib) / Mb,
        mb = 0 === fb ? ab : ab + 1,
        lb = (0, kb.Lerp)(bb.candelaValues[ab][Wb], bb.candelaValues[mb][Wb], Xb),
        Qb = (0, kb.Lerp)(bb.candelaValues[ab][Wb + 1], bb.candelaValues[mb][Wb + 1], Xb);
      return (0, kb.Lerp)(lb, Qb, nb)
    }
    class Ub {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(bb, cb, sb) {
        const kb = function(bb) {
          const cb = {
              lines: new TextDecoder("utf-8").decode(bb).split("\n"),
              index: 0
            },
            sb = {
              version: cb.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (cb.index = 1; cb.lines.length > 0 && !cb.lines[cb.index].includes("TILT=");) cb.index++;
          cb.lines[cb.index].includes("INCLUDE"), cb.index++;
          const kb = Wb(cb.lines[cb.index++]);
          sb.numberOfLights = kb[0], sb.lumensPerLamp = kb[1], sb.numberOfVerticalAngles = kb[3], sb.numberOfHorizontalAngles = kb[4], sb.photometricType = kb[5], sb.unitsType = kb[6], sb.width = kb[7], sb.length = kb[8], sb.height = kb[9], cb.index++;
          for (let Wb = 0; Wb < sb.numberOfHorizontalAngles; Wb++) sb.candelaValues[Wb] = [];
          ab(cb, sb.numberOfVerticalAngles, sb.verticalAngles), ab(cb, sb.numberOfHorizontalAngles, sb.horizontalAngles);
          for (let Wb = 0; Wb < sb.numberOfHorizontalAngles; Wb++) ab(cb, sb.numberOfVerticalAngles, sb.candelaValues[Wb]);
          let Ub = -1;
          for (let Wb = 0; Wb < sb.numberOfHorizontalAngles; Wb++)
            for (let bb = 0; bb < sb.numberOfVerticalAngles; bb++) Ub = Math.max(Ub, sb.candelaValues[Wb][bb]);
          if (Ub > 0)
            for (let Wb = 0; Wb < sb.numberOfHorizontalAngles; Wb++)
              for (let bb = 0; bb < sb.numberOfVerticalAngles; bb++) sb.candelaValues[Wb][bb] /= Ub;
          const Ib = 180,
            Hb = 360,
            fb = new Float32Array(64800),
            Mb = sb.horizontalAngles[0],
            Xb = sb.horizontalAngles[sb.numberOfHorizontalAngles - 1];
          for (let Wb = 0; Wb < 64800; Wb++) {
            let bb = Wb % Hb;
            const cb = Math.floor(Wb / Hb);
            Xb - Mb !== 0 && (bb < Mb || bb >= Xb) && (bb %= 2 * Xb, bb > Xb && (bb = 2 * Xb - bb)), fb[cb + bb * Ib] = Tb(sb, cb, bb)
          }
          return {
            width: 180,
            height: 1,
            data: fb
          }
        }(new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength));
        sb(kb.width, kb.height, !!cb.useMipMaps, !1, (() => {
          const bb = cb.Sm();
          cb.type = 1, cb.format = 6, cb._gammaSpace = !1, bb._uploadDataToTextureDirectly(cb, kb.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);