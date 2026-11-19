export const id = 299;
export const ids = [299];
export const modules = {
  40602: (TT, oT, IT) => {
    IT.r(oT), IT.d(oT, {
      _IESTextureLoader: () => XT
    });
    var iT = IT(36156);

    function zT(TT) {
      return TT.split(" ").filter((TT => "" !== TT)).map((TT => parseFloat(TT)))
    }

    function kT(TT, oT, IT) {
      for (; IT.length !== oT;) {
        const oT = zT(TT.lines[TT.index++]);
        IT.push(...oT)
      }
    }

    function WT(TT, oT, IT) {
      let zT = 0,
        kT = 0,
        WT = 0,
        XT = 0,
        BT = 0,
        FT = 0;
      for (let iT = 0; iT < TT.numberOfHorizontalAngles - 1; iT++)
        if (IT < TT.horizontalAngles[iT + 1] || iT === TT.numberOfHorizontalAngles - 2) {
          kT = iT, WT = TT.horizontalAngles[iT], XT = TT.horizontalAngles[iT + 1];
          break
        } for (let iT = 0; iT < TT.numberOfVerticalAngles - 1; iT++)
        if (oT < TT.verticalAngles[iT + 1] || iT === TT.numberOfVerticalAngles - 2) {
          zT = iT, BT = TT.verticalAngles[iT], FT = TT.verticalAngles[iT + 1];
          break
        } const ST = XT - WT,
        DT = FT - BT;
      if (0 === DT) return 0;
      const LT = 0 === ST ? 0 : (IT - WT) / ST,
        xT = (oT - BT) / DT,
        cT = 0 === ST ? kT : kT + 1,
        KT = (0, iT.Lerp)(TT.candelaValues[kT][zT], TT.candelaValues[cT][zT], LT),
        MT = (0, iT.Lerp)(TT.candelaValues[kT][zT + 1], TT.candelaValues[cT][zT + 1], LT);
      return (0, iT.Lerp)(KT, MT, xT)
    }
    class XT {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(TT, oT, IT) {
        const iT = function(TT) {
          const oT = {
              lines: new TextDecoder("utf-8").decode(TT).split("\n"),
              index: 0
            },
            IT = {
              version: oT.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (oT.index = 1; oT.lines.length > 0 && !oT.lines[oT.index].includes("TILT=");) oT.index++;
          oT.lines[oT.index].includes("INCLUDE"), oT.index++;
          const iT = zT(oT.lines[oT.index++]);
          IT.numberOfLights = iT[0], IT.lumensPerLamp = iT[1], IT.numberOfVerticalAngles = iT[3], IT.numberOfHorizontalAngles = iT[4], IT.photometricType = iT[5], IT.unitsType = iT[6], IT.width = iT[7], IT.length = iT[8], IT.height = iT[9], oT.index++;
          for (let zT = 0; zT < IT.numberOfHorizontalAngles; zT++) IT.candelaValues[zT] = [];
          kT(oT, IT.numberOfVerticalAngles, IT.verticalAngles), kT(oT, IT.numberOfHorizontalAngles, IT.horizontalAngles);
          for (let zT = 0; zT < IT.numberOfHorizontalAngles; zT++) kT(oT, IT.numberOfVerticalAngles, IT.candelaValues[zT]);
          let XT = -1;
          for (let zT = 0; zT < IT.numberOfHorizontalAngles; zT++)
            for (let TT = 0; TT < IT.numberOfVerticalAngles; TT++) XT = Math.max(XT, IT.candelaValues[zT][TT]);
          if (XT > 0)
            for (let zT = 0; zT < IT.numberOfHorizontalAngles; zT++)
              for (let TT = 0; TT < IT.numberOfVerticalAngles; TT++) IT.candelaValues[zT][TT] /= XT;
          const BT = 180,
            FT = 360,
            ST = new Float32Array(64800),
            DT = IT.horizontalAngles[0],
            LT = IT.horizontalAngles[IT.numberOfHorizontalAngles - 1];
          for (let zT = 0; zT < 64800; zT++) {
            let TT = zT % FT;
            const oT = Math.floor(zT / FT);
            LT - DT !== 0 && (TT < DT || TT >= LT) && (TT %= 2 * LT, TT > LT && (TT = 2 * LT - TT)), ST[oT + TT * BT] = WT(IT, oT, TT)
          }
          return {
            width: 180,
            height: 1,
            data: ST
          }
        }(new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength));
        IT(iT.width, iT.height, !!oT.useMipMaps, !1, (() => {
          const TT = oT.Zc();
          oT.type = 1, oT.format = 6, oT._gammaSpace = !1, TT._uploadDataToTextureDirectly(oT, iT.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);