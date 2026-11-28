export const id = 628;
export const ids = [628];
export const modules = {
  53994: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      _IESTextureLoader: () => gb
    });
    var eb = Mb(38322);

    function Hb(bb) {
      return bb.split(" ").filter((bb => "" !== bb)).map((bb => parseFloat(bb)))
    }

    function pb(bb, wb, Mb) {
      for (; Mb.length !== wb;) {
        const wb = Hb(bb.lines[bb.index++]);
        Mb.push(...wb)
      }
    }

    function Vb(bb, wb, Mb) {
      let Hb = 0,
        pb = 0,
        Vb = 0,
        gb = 0,
        lb = 0,
        Lb = 0;
      for (let eb = 0; eb < bb.numberOfHorizontalAngles - 1; eb++)
        if (Mb < bb.horizontalAngles[eb + 1] || eb === bb.numberOfHorizontalAngles - 2) {
          pb = eb, Vb = bb.horizontalAngles[eb], gb = bb.horizontalAngles[eb + 1];
          break
        } for (let eb = 0; eb < bb.numberOfVerticalAngles - 1; eb++)
        if (wb < bb.verticalAngles[eb + 1] || eb === bb.numberOfVerticalAngles - 2) {
          Hb = eb, lb = bb.verticalAngles[eb], Lb = bb.verticalAngles[eb + 1];
          break
        } const Ib = gb - Vb,
        Ob = Lb - lb;
      if (0 === Ob) return 0;
      const Ub = 0 === Ib ? 0 : (Mb - Vb) / Ib,
        tb = (wb - lb) / Ob,
        Cb = 0 === Ib ? pb : pb + 1,
        Eb = (0, eb.Lerp)(bb.candelaValues[pb][Hb], bb.candelaValues[Cb][Hb], Ub),
        Fb = (0, eb.Lerp)(bb.candelaValues[pb][Hb + 1], bb.candelaValues[Cb][Hb + 1], Ub);
      return (0, eb.Lerp)(Eb, Fb, tb)
    }
    class gb {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(bb, wb, Mb) {
        const eb = function(bb) {
          const wb = {
              lines: new TextDecoder("utf-8").decode(bb).split("\n"),
              index: 0
            },
            Mb = {
              version: wb.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (wb.index = 1; wb.lines.length > 0 && !wb.lines[wb.index].includes("TILT=");) wb.index++;
          wb.lines[wb.index].includes("INCLUDE"), wb.index++;
          const eb = Hb(wb.lines[wb.index++]);
          Mb.numberOfLights = eb[0], Mb.lumensPerLamp = eb[1], Mb.numberOfVerticalAngles = eb[3], Mb.numberOfHorizontalAngles = eb[4], Mb.photometricType = eb[5], Mb.unitsType = eb[6], Mb.width = eb[7], Mb.length = eb[8], Mb.height = eb[9], wb.index++;
          for (let Hb = 0; Hb < Mb.numberOfHorizontalAngles; Hb++) Mb.candelaValues[Hb] = [];
          pb(wb, Mb.numberOfVerticalAngles, Mb.verticalAngles), pb(wb, Mb.numberOfHorizontalAngles, Mb.horizontalAngles);
          for (let Hb = 0; Hb < Mb.numberOfHorizontalAngles; Hb++) pb(wb, Mb.numberOfVerticalAngles, Mb.candelaValues[Hb]);
          let gb = -1;
          for (let Hb = 0; Hb < Mb.numberOfHorizontalAngles; Hb++)
            for (let bb = 0; bb < Mb.numberOfVerticalAngles; bb++) gb = Math.max(gb, Mb.candelaValues[Hb][bb]);
          if (gb > 0)
            for (let Hb = 0; Hb < Mb.numberOfHorizontalAngles; Hb++)
              for (let bb = 0; bb < Mb.numberOfVerticalAngles; bb++) Mb.candelaValues[Hb][bb] /= gb;
          const lb = 180,
            Lb = 360,
            Ib = new Float32Array(64800),
            Ob = Mb.horizontalAngles[0],
            Ub = Mb.horizontalAngles[Mb.numberOfHorizontalAngles - 1];
          for (let Hb = 0; Hb < 64800; Hb++) {
            let bb = Hb % Lb;
            const wb = Math.floor(Hb / Lb);
            Ub - Ob !== 0 && (bb < Ob || bb >= Ub) && (bb %= 2 * Ub, bb > Ub && (bb = 2 * Ub - bb)), Ib[wb + bb * lb] = Vb(Mb, wb, bb)
          }
          return {
            width: 180,
            height: 1,
            data: Ib
          }
        }(new Uint8Array(bb.buffer, bb.byteOffset, bb.byteLength));
        Mb(eb.width, eb.height, !!wb.useMipMaps, !1, (() => {
          const bb = wb.DC();
          wb.type = 1, wb.format = 6, wb._gammaSpace = !1, bb._uploadDataToTextureDirectly(wb, eb.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);