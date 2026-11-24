export const id = 314;
export const ids = [314];
export const modules = {
  41916: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      _IESTextureLoader: () => nT
    });
    var WT = mT(37226);

    function zT(TT) {
      return TT.split(" ").filter((TT => "" !== TT)).map((TT => parseFloat(TT)))
    }

    function MT(TT, UT, mT) {
      for (; mT.length !== UT;) {
        const UT = zT(TT.lines[TT.index++]);
        mT.push(...UT)
      }
    }

    function gT(TT, UT, mT) {
      let zT = 0,
        MT = 0,
        gT = 0,
        nT = 0,
        HT = 0,
        kT = 0;
      for (let WT = 0; WT < TT.numberOfHorizontalAngles - 1; WT++)
        if (mT < TT.horizontalAngles[WT + 1] || WT === TT.numberOfHorizontalAngles - 2) {
          MT = WT, gT = TT.horizontalAngles[WT], nT = TT.horizontalAngles[WT + 1];
          break
        } for (let WT = 0; WT < TT.numberOfVerticalAngles - 1; WT++)
        if (UT < TT.verticalAngles[WT + 1] || WT === TT.numberOfVerticalAngles - 2) {
          zT = WT, HT = TT.verticalAngles[WT], kT = TT.verticalAngles[WT + 1];
          break
        } const jT = nT - gT,
        lT = kT - HT;
      if (0 === lT) return 0;
      const LT = 0 === jT ? 0 : (mT - gT) / jT,
        pT = (UT - HT) / lT,
        BT = 0 === jT ? MT : MT + 1,
        ZT = (0, WT.Lerp)(TT.candelaValues[MT][zT], TT.candelaValues[BT][zT], LT),
        cT = (0, WT.Lerp)(TT.candelaValues[MT][zT + 1], TT.candelaValues[BT][zT + 1], LT);
      return (0, WT.Lerp)(ZT, cT, pT)
    }
    class nT {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(TT, UT, mT) {
        const WT = function(TT) {
          const UT = {
              lines: new TextDecoder("utf-8").decode(TT).split("\n"),
              index: 0
            },
            mT = {
              version: UT.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (UT.index = 1; UT.lines.length > 0 && !UT.lines[UT.index].includes("TILT=");) UT.index++;
          UT.lines[UT.index].includes("INCLUDE"), UT.index++;
          const WT = zT(UT.lines[UT.index++]);
          mT.numberOfLights = WT[0], mT.lumensPerLamp = WT[1], mT.numberOfVerticalAngles = WT[3], mT.numberOfHorizontalAngles = WT[4], mT.photometricType = WT[5], mT.unitsType = WT[6], mT.width = WT[7], mT.length = WT[8], mT.height = WT[9], UT.index++;
          for (let zT = 0; zT < mT.numberOfHorizontalAngles; zT++) mT.candelaValues[zT] = [];
          MT(UT, mT.numberOfVerticalAngles, mT.verticalAngles), MT(UT, mT.numberOfHorizontalAngles, mT.horizontalAngles);
          for (let zT = 0; zT < mT.numberOfHorizontalAngles; zT++) MT(UT, mT.numberOfVerticalAngles, mT.candelaValues[zT]);
          let nT = -1;
          for (let zT = 0; zT < mT.numberOfHorizontalAngles; zT++)
            for (let TT = 0; TT < mT.numberOfVerticalAngles; TT++) nT = Math.max(nT, mT.candelaValues[zT][TT]);
          if (nT > 0)
            for (let zT = 0; zT < mT.numberOfHorizontalAngles; zT++)
              for (let TT = 0; TT < mT.numberOfVerticalAngles; TT++) mT.candelaValues[zT][TT] /= nT;
          const HT = 180,
            kT = 360,
            jT = new Float32Array(64800),
            lT = mT.horizontalAngles[0],
            LT = mT.horizontalAngles[mT.numberOfHorizontalAngles - 1];
          for (let zT = 0; zT < 64800; zT++) {
            let TT = zT % kT;
            const UT = Math.floor(zT / kT);
            LT - lT !== 0 && (TT < lT || TT >= LT) && (TT %= 2 * LT, TT > LT && (TT = 2 * LT - TT)), jT[UT + TT * HT] = gT(mT, UT, TT)
          }
          return {
            width: 180,
            height: 1,
            data: jT
          }
        }(new Uint8Array(TT.buffer, TT.byteOffset, TT.byteLength));
        mT(WT.width, WT.height, !!UT.useMipMaps, !1, (() => {
          const TT = UT.eB();
          UT.type = 1, UT.format = 6, UT._gammaSpace = !1, TT._uploadDataToTextureDirectly(UT, WT.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);