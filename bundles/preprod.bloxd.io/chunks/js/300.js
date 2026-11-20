export const id = 300;
export const ids = [300];
export const modules = {
  41525: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      _IESTextureLoader: () => xq
    });
    var Yq = gq(37158);

    function lq(qq) {
      return qq.split(" ").filter((qq => "" !== qq)).map((qq => parseFloat(qq)))
    }

    function Oq(qq, Eq, gq) {
      for (; gq.length !== Eq;) {
        const Eq = lq(qq.lines[qq.index++]);
        gq.push(...Eq)
      }
    }

    function mq(qq, Eq, gq) {
      let lq = 0,
        Oq = 0,
        mq = 0,
        xq = 0,
        Aq = 0,
        cq = 0;
      for (let Yq = 0; Yq < qq.numberOfHorizontalAngles - 1; Yq++)
        if (gq < qq.horizontalAngles[Yq + 1] || Yq === qq.numberOfHorizontalAngles - 2) {
          Oq = Yq, mq = qq.horizontalAngles[Yq], xq = qq.horizontalAngles[Yq + 1];
          break
        } for (let Yq = 0; Yq < qq.numberOfVerticalAngles - 1; Yq++)
        if (Eq < qq.verticalAngles[Yq + 1] || Yq === qq.numberOfVerticalAngles - 2) {
          lq = Yq, Aq = qq.verticalAngles[Yq], cq = qq.verticalAngles[Yq + 1];
          break
        } const uq = xq - mq,
        Bq = cq - Aq;
      if (0 === Bq) return 0;
      const Wq = 0 === uq ? 0 : (gq - mq) / uq,
        Nq = (Eq - Aq) / Bq,
        aq = 0 === uq ? Oq : Oq + 1,
        Vq = (0, Yq.Lerp)(qq.candelaValues[Oq][lq], qq.candelaValues[aq][lq], Wq),
        dq = (0, Yq.Lerp)(qq.candelaValues[Oq][lq + 1], qq.candelaValues[aq][lq + 1], Wq);
      return (0, Yq.Lerp)(Vq, dq, Nq)
    }
    class xq {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(qq, Eq, gq) {
        const Yq = function(qq) {
          const Eq = {
              lines: new TextDecoder("utf-8").decode(qq).split("\n"),
              index: 0
            },
            gq = {
              version: Eq.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (Eq.index = 1; Eq.lines.length > 0 && !Eq.lines[Eq.index].includes("TILT=");) Eq.index++;
          Eq.lines[Eq.index].includes("INCLUDE"), Eq.index++;
          const Yq = lq(Eq.lines[Eq.index++]);
          gq.numberOfLights = Yq[0], gq.lumensPerLamp = Yq[1], gq.numberOfVerticalAngles = Yq[3], gq.numberOfHorizontalAngles = Yq[4], gq.photometricType = Yq[5], gq.unitsType = Yq[6], gq.width = Yq[7], gq.length = Yq[8], gq.height = Yq[9], Eq.index++;
          for (let lq = 0; lq < gq.numberOfHorizontalAngles; lq++) gq.candelaValues[lq] = [];
          Oq(Eq, gq.numberOfVerticalAngles, gq.verticalAngles), Oq(Eq, gq.numberOfHorizontalAngles, gq.horizontalAngles);
          for (let lq = 0; lq < gq.numberOfHorizontalAngles; lq++) Oq(Eq, gq.numberOfVerticalAngles, gq.candelaValues[lq]);
          let xq = -1;
          for (let lq = 0; lq < gq.numberOfHorizontalAngles; lq++)
            for (let qq = 0; qq < gq.numberOfVerticalAngles; qq++) xq = Math.max(xq, gq.candelaValues[lq][qq]);
          if (xq > 0)
            for (let lq = 0; lq < gq.numberOfHorizontalAngles; lq++)
              for (let qq = 0; qq < gq.numberOfVerticalAngles; qq++) gq.candelaValues[lq][qq] /= xq;
          const Aq = 180,
            cq = 360,
            uq = new Float32Array(64800),
            Bq = gq.horizontalAngles[0],
            Wq = gq.horizontalAngles[gq.numberOfHorizontalAngles - 1];
          for (let lq = 0; lq < 64800; lq++) {
            let qq = lq % cq;
            const Eq = Math.floor(lq / cq);
            Wq - Bq !== 0 && (qq < Bq || qq >= Wq) && (qq %= 2 * Wq, qq > Wq && (qq = 2 * Wq - qq)), uq[Eq + qq * Aq] = mq(gq, Eq, qq)
          }
          return {
            width: 180,
            height: 1,
            data: uq
          }
        }(new Uint8Array(qq.buffer, qq.byteOffset, qq.byteLength));
        gq(Yq.width, Yq.height, !!Eq.useMipMaps, !1, (() => {
          const qq = Eq.Ba();
          Eq.type = 1, Eq.format = 6, Eq._gammaSpace = !1, qq._uploadDataToTextureDirectly(Eq, Yq.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);