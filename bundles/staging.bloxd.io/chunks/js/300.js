export const id = 300;
export const ids = [300];
export const modules = {
  41341: (TT, kT, cT) => {
    cT.r(kT), cT.d(kT, {
      _IESTextureLoader: () => yT
    });
    var lT = cT(36937);

    function MT(TT) {
      return TT.split(" ").filter((TT => "" !== TT)).map((TT => parseFloat(TT)))
    }

    function KT(TT, kT, cT) {
      for (; cT.length !== kT;) {
        const kT = MT(TT.lines[TT.index++]);
        cT.push(...kT)
      }
    }

    function OT(TT, kT, cT) {
      let MT = 0,
        KT = 0,
        OT = 0,
        yT = 0,
        fT = 0,
        xT = 0;
      for (let lT = 0; lT < TT.numberOfHorizontalAngles - 1; lT++)
        if (cT < TT.horizontalAngles[lT + 1] || lT === TT.numberOfHorizontalAngles - 2) {
          KT = lT, OT = TT.horizontalAngles[lT], yT = TT.horizontalAngles[lT + 1];
          break
        } for (let lT = 0; lT < TT.numberOfVerticalAngles - 1; lT++)
        if (kT < TT.verticalAngles[lT + 1] || lT === TT.numberOfVerticalAngles - 2) {
          MT = lT, fT = TT.verticalAngles[lT], xT = TT.verticalAngles[lT + 1];
          break
        } const IT = yT - OT,
        AT = xT - fT;
      if (0 === AT) return 0;
      const CT = 0 === IT ? 0 : (cT - OT) / IT,
        jT = (kT - fT) / AT,
        vT = 0 === IT ? KT : KT + 1,
        tT = (0, lT.Lerp)(TT.candelaValues[KT][MT], TT.candelaValues[vT][MT], CT),
        hT = (0, lT.Lerp)(TT.candelaValues[KT][MT + 1], TT.candelaValues[vT][MT + 1], CT);
      return (0, lT.Lerp)(tT, hT, jT)
    }
    class yT {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(TT, kT, cT) {
        const lT = function(TT) {
          const kT = {
              lines: new TextDecoder("utf-8").decode(TT).split("\n"),
              index: 0
            },
            cT = {
              version: kT.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (kT.index = 1; kT.lines.length > 0 && !kT.lines[kT.index].includes("TILT=");) kT.index++;
          kT.lines[kT.index].includes("INCLUDE"), kT.index++;
          const lT = MT(kT.lines[kT.index++]);
          cT.numberOfLights = lT[0], cT.lumensPerLamp = lT[1], cT.numberOfVerticalAngles = lT[3], cT.numberOfHorizontalAngles = lT[4], cT.photometricType = lT[5], cT.unitsType = lT[6], cT.width = lT[7], cT.length = lT[8], cT.height = lT[9], kT.index++;
          for (let MT = 0; MT < cT.numberOfHorizontalAngles; MT++) cT.candelaValues[MT] = [];
          KT(kT, cT.numberOfVerticalAngles, cT.verticalAngles), KT(kT, cT.numberOfHorizontalAngles, cT.horizontalAngles);
          for (let MT = 0; MT < cT.numberOfHorizontalAngles; MT++) KT(kT, cT.numberOfVerticalAngles, cT.candelaValues[MT]);
          let yT = -1;
          for (let MT = 0; MT < cT.numberOfHorizontalAngles; MT++)
            for (let TT = 0; TT < cT.numberOfVerticalAngles; TT++) yT = Math.max(yT, cT.candelaValues[MT][TT]);
          if (yT > 0)
            for (let MT = 0; MT < cT.numberOfHorizontalAngles; MT++)
              for (let TT = 0; TT < cT.numberOfVerticalAngles; TT++) cT.candelaValues[MT][TT] /= yT;
          const fT = 180,
            xT = 360,
            IT = new Float32Array(64800),
            AT = cT.horizontalAngles[0],
            CT = cT.horizontalAngles[cT.numberOfHorizontalAngles - 1];
          for (let MT = 0; MT < 64800; MT++) {
            let TT = MT % xT;
            const kT = Math.floor(MT / xT);
            CT - AT !== 0 && (TT < AT || TT >= CT) && (TT %= 2 * CT, TT > CT && (TT = 2 * CT - TT)), IT[kT + TT * fT] = OT(cT, kT, TT)
          }
          return {
            width: 180,
            height: 1,
            data: IT
          }
        }(new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength));
        cT(lT.width, lT.height, !!kT.useMipMaps, !1, (() => {
          const TT = kT.Dv();
          kT.type = 1, kT.format = 6, kT._gammaSpace = !1, TT._uploadDataToTextureDirectly(kT, lT.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);