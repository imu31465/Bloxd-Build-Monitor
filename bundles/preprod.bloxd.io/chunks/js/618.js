export const id = 618;
export const ids = [618];
export const modules = {
  45251: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      _IESTextureLoader: () => tH
    });
    var AH = LH(38002);

    function rH(HH) {
      return HH.split(" ").filter((HH => "" !== HH)).map((HH => parseFloat(HH)))
    }

    function SH(HH, BH, LH) {
      for (; LH.length !== BH;) {
        const BH = rH(HH.lines[HH.index++]);
        LH.push(...BH)
      }
    }

    function hH(HH, BH, LH) {
      let rH = 0,
        SH = 0,
        hH = 0,
        tH = 0,
        zH = 0,
        CH = 0;
      for (let AH = 0; AH < HH.numberOfHorizontalAngles - 1; AH++)
        if (LH < HH.horizontalAngles[AH + 1] || AH === HH.numberOfHorizontalAngles - 2) {
          SH = AH, hH = HH.horizontalAngles[AH], tH = HH.horizontalAngles[AH + 1];
          break
        } for (let AH = 0; AH < HH.numberOfVerticalAngles - 1; AH++)
        if (BH < HH.verticalAngles[AH + 1] || AH === HH.numberOfVerticalAngles - 2) {
          rH = AH, zH = HH.verticalAngles[AH], CH = HH.verticalAngles[AH + 1];
          break
        } const EH = tH - hH,
        XH = CH - zH;
      if (0 === XH) return 0;
      const GH = 0 === EH ? 0 : (LH - hH) / EH,
        YH = (BH - zH) / XH,
        uH = 0 === EH ? SH : SH + 1,
        QH = (0, AH.Lerp)(HH.candelaValues[SH][rH], HH.candelaValues[uH][rH], GH),
        WH = (0, AH.Lerp)(HH.candelaValues[SH][rH + 1], HH.candelaValues[uH][rH + 1], GH);
      return (0, AH.Lerp)(QH, WH, YH)
    }
    class tH {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(HH, BH, LH) {
        const AH = function(HH) {
          const BH = {
              lines: new TextDecoder("utf-8").decode(HH).split("\n"),
              index: 0
            },
            LH = {
              version: BH.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (BH.index = 1; BH.lines.length > 0 && !BH.lines[BH.index].includes("TILT=");) BH.index++;
          BH.lines[BH.index].includes("INCLUDE"), BH.index++;
          const AH = rH(BH.lines[BH.index++]);
          LH.numberOfLights = AH[0], LH.lumensPerLamp = AH[1], LH.numberOfVerticalAngles = AH[3], LH.numberOfHorizontalAngles = AH[4], LH.photometricType = AH[5], LH.unitsType = AH[6], LH.width = AH[7], LH.length = AH[8], LH.height = AH[9], BH.index++;
          for (let rH = 0; rH < LH.numberOfHorizontalAngles; rH++) LH.candelaValues[rH] = [];
          SH(BH, LH.numberOfVerticalAngles, LH.verticalAngles), SH(BH, LH.numberOfHorizontalAngles, LH.horizontalAngles);
          for (let rH = 0; rH < LH.numberOfHorizontalAngles; rH++) SH(BH, LH.numberOfVerticalAngles, LH.candelaValues[rH]);
          let tH = -1;
          for (let rH = 0; rH < LH.numberOfHorizontalAngles; rH++)
            for (let HH = 0; HH < LH.numberOfVerticalAngles; HH++) tH = Math.max(tH, LH.candelaValues[rH][HH]);
          if (tH > 0)
            for (let rH = 0; rH < LH.numberOfHorizontalAngles; rH++)
              for (let HH = 0; HH < LH.numberOfVerticalAngles; HH++) LH.candelaValues[rH][HH] /= tH;
          const zH = 180,
            CH = 360,
            EH = new Float32Array(64800),
            XH = LH.horizontalAngles[0],
            GH = LH.horizontalAngles[LH.numberOfHorizontalAngles - 1];
          for (let rH = 0; rH < 64800; rH++) {
            let HH = rH % CH;
            const BH = Math.floor(rH / CH);
            GH - XH !== 0 && (HH < XH || HH >= GH) && (HH %= 2 * GH, HH > GH && (HH = 2 * GH - HH)), EH[BH + HH * zH] = hH(LH, BH, HH)
          }
          return {
            width: 180,
            height: 1,
            data: EH
          }
        }(new Uint8Array(HH.buffer, HH.byteOffset, HH.byteLength));
        LH(AH.width, AH.height, !!BH.useMipMaps, !1, (() => {
          const HH = BH.Iu();
          BH.type = 1, BH.format = 6, BH._gammaSpace = !1, HH._uploadDataToTextureDirectly(BH, AH.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);