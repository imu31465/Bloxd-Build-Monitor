export const id = 627;
export const ids = [627];
export const modules = {
  53803: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      _IESTextureLoader: () => qR
    });
    var yR = GR(38239);

    function tR(RR) {
      return RR.split(" ").filter((RR => "" !== RR)).map((RR => parseFloat(RR)))
    }

    function uR(RR, JR, GR) {
      for (; GR.length !== JR;) {
        const JR = tR(RR.lines[RR.index++]);
        GR.push(...JR)
      }
    }

    function ZR(RR, JR, GR) {
      let tR = 0,
        uR = 0,
        ZR = 0,
        qR = 0,
        iR = 0,
        fR = 0;
      for (let yR = 0; yR < RR.numberOfHorizontalAngles - 1; yR++)
        if (GR < RR.horizontalAngles[yR + 1] || yR === RR.numberOfHorizontalAngles - 2) {
          uR = yR, ZR = RR.horizontalAngles[yR], qR = RR.horizontalAngles[yR + 1];
          break
        } for (let yR = 0; yR < RR.numberOfVerticalAngles - 1; yR++)
        if (JR < RR.verticalAngles[yR + 1] || yR === RR.numberOfVerticalAngles - 2) {
          tR = yR, iR = RR.verticalAngles[yR], fR = RR.verticalAngles[yR + 1];
          break
        } const VR = qR - ZR,
        KR = fR - iR;
      if (0 === KR) return 0;
      const wR = 0 === VR ? 0 : (GR - ZR) / VR,
        rR = (JR - iR) / KR,
        eR = 0 === VR ? uR : uR + 1,
        aR = (0, yR.Lerp)(RR.candelaValues[uR][tR], RR.candelaValues[eR][tR], wR),
        LR = (0, yR.Lerp)(RR.candelaValues[uR][tR + 1], RR.candelaValues[eR][tR + 1], wR);
      return (0, yR.Lerp)(aR, LR, rR)
    }
    class qR {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(RR, JR, GR) {
        const yR = function(RR) {
          const JR = {
              lines: new TextDecoder("utf-8").decode(RR).split("\n"),
              index: 0
            },
            GR = {
              version: JR.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (JR.index = 1; JR.lines.length > 0 && !JR.lines[JR.index].includes("TILT=");) JR.index++;
          JR.lines[JR.index].includes("INCLUDE"), JR.index++;
          const yR = tR(JR.lines[JR.index++]);
          GR.numberOfLights = yR[0], GR.lumensPerLamp = yR[1], GR.numberOfVerticalAngles = yR[3], GR.numberOfHorizontalAngles = yR[4], GR.photometricType = yR[5], GR.unitsType = yR[6], GR.width = yR[7], GR.length = yR[8], GR.height = yR[9], JR.index++;
          for (let tR = 0; tR < GR.numberOfHorizontalAngles; tR++) GR.candelaValues[tR] = [];
          uR(JR, GR.numberOfVerticalAngles, GR.verticalAngles), uR(JR, GR.numberOfHorizontalAngles, GR.horizontalAngles);
          for (let tR = 0; tR < GR.numberOfHorizontalAngles; tR++) uR(JR, GR.numberOfVerticalAngles, GR.candelaValues[tR]);
          let qR = -1;
          for (let tR = 0; tR < GR.numberOfHorizontalAngles; tR++)
            for (let RR = 0; RR < GR.numberOfVerticalAngles; RR++) qR = Math.max(qR, GR.candelaValues[tR][RR]);
          if (qR > 0)
            for (let tR = 0; tR < GR.numberOfHorizontalAngles; tR++)
              for (let RR = 0; RR < GR.numberOfVerticalAngles; RR++) GR.candelaValues[tR][RR] /= qR;
          const iR = 180,
            fR = 360,
            VR = new Float32Array(64800),
            KR = GR.horizontalAngles[0],
            wR = GR.horizontalAngles[GR.numberOfHorizontalAngles - 1];
          for (let tR = 0; tR < 64800; tR++) {
            let RR = tR % fR;
            const JR = Math.floor(tR / fR);
            wR - KR !== 0 && (RR < KR || RR >= wR) && (RR %= 2 * wR, RR > wR && (RR = 2 * wR - RR)), VR[JR + RR * iR] = ZR(GR, JR, RR)
          }
          return {
            width: 180,
            height: 1,
            data: VR
          }
        }(new Uint8Array(RR.buffer, RR.byteOffset, RR.byteLength));
        GR(yR.width, yR.height, !!JR.useMipMaps, !1, (() => {
          const RR = JR.ke();
          JR.type = 1, JR.format = 6, JR._gammaSpace = !1, RR._uploadDataToTextureDirectly(JR, yR.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);