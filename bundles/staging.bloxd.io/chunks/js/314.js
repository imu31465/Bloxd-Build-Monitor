export const id = 314;
export const ids = [314];
export const modules = {
  42228: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      _IESTextureLoader: () => kG
    });
    var wG = ZG(37471);

    function SG(GG) {
      return GG.split(" ").filter((GG => "" !== GG)).map((GG => parseFloat(GG)))
    }

    function LG(GG, bG, ZG) {
      for (; ZG.length !== bG;) {
        const bG = SG(GG.lines[GG.index++]);
        ZG.push(...bG)
      }
    }

    function yG(GG, bG, ZG) {
      let SG = 0,
        LG = 0,
        yG = 0,
        kG = 0,
        UG = 0,
        YG = 0;
      for (let wG = 0; wG < GG.numberOfHorizontalAngles - 1; wG++)
        if (ZG < GG.horizontalAngles[wG + 1] || wG === GG.numberOfHorizontalAngles - 2) {
          LG = wG, yG = GG.horizontalAngles[wG], kG = GG.horizontalAngles[wG + 1];
          break
        } for (let wG = 0; wG < GG.numberOfVerticalAngles - 1; wG++)
        if (bG < GG.verticalAngles[wG + 1] || wG === GG.numberOfVerticalAngles - 2) {
          SG = wG, UG = GG.verticalAngles[wG], YG = GG.verticalAngles[wG + 1];
          break
        } const VG = kG - yG,
        pG = YG - UG;
      if (0 === pG) return 0;
      const fG = 0 === VG ? 0 : (ZG - yG) / VG,
        QG = (bG - UG) / pG,
        KG = 0 === VG ? LG : LG + 1,
        hG = (0, wG.Lerp)(GG.candelaValues[LG][SG], GG.candelaValues[KG][SG], fG),
        dG = (0, wG.Lerp)(GG.candelaValues[LG][SG + 1], GG.candelaValues[KG][SG + 1], fG);
      return (0, wG.Lerp)(hG, dG, QG)
    }
    class kG {
      constructor() {
        this.supportCascades = !1
      }
      loadCubeData() {
        throw ".ies not supported in Cube."
      }
      loadData(GG, bG, ZG) {
        const wG = function(GG) {
          const bG = {
              lines: new TextDecoder("utf-8").decode(GG).split("\n"),
              index: 0
            },
            ZG = {
              version: bG.lines[0],
              candelaValues: [],
              horizontalAngles: [],
              verticalAngles: [],
              numberOfHorizontalAngles: 0,
              numberOfVerticalAngles: 0
            };
          for (bG.index = 1; bG.lines.length > 0 && !bG.lines[bG.index].includes("TILT=");) bG.index++;
          bG.lines[bG.index].includes("INCLUDE"), bG.index++;
          const wG = SG(bG.lines[bG.index++]);
          ZG.numberOfLights = wG[0], ZG.lumensPerLamp = wG[1], ZG.numberOfVerticalAngles = wG[3], ZG.numberOfHorizontalAngles = wG[4], ZG.photometricType = wG[5], ZG.unitsType = wG[6], ZG.width = wG[7], ZG.length = wG[8], ZG.height = wG[9], bG.index++;
          for (let SG = 0; SG < ZG.numberOfHorizontalAngles; SG++) ZG.candelaValues[SG] = [];
          LG(bG, ZG.numberOfVerticalAngles, ZG.verticalAngles), LG(bG, ZG.numberOfHorizontalAngles, ZG.horizontalAngles);
          for (let SG = 0; SG < ZG.numberOfHorizontalAngles; SG++) LG(bG, ZG.numberOfVerticalAngles, ZG.candelaValues[SG]);
          let kG = -1;
          for (let SG = 0; SG < ZG.numberOfHorizontalAngles; SG++)
            for (let GG = 0; GG < ZG.numberOfVerticalAngles; GG++) kG = Math.max(kG, ZG.candelaValues[SG][GG]);
          if (kG > 0)
            for (let SG = 0; SG < ZG.numberOfHorizontalAngles; SG++)
              for (let GG = 0; GG < ZG.numberOfVerticalAngles; GG++) ZG.candelaValues[SG][GG] /= kG;
          const UG = 180,
            YG = 360,
            VG = new Float32Array(64800),
            pG = ZG.horizontalAngles[0],
            fG = ZG.horizontalAngles[ZG.numberOfHorizontalAngles - 1];
          for (let SG = 0; SG < 64800; SG++) {
            let GG = SG % YG;
            const bG = Math.floor(SG / YG);
            fG - pG !== 0 && (GG < pG || GG >= fG) && (GG %= 2 * fG, GG > fG && (GG = 2 * fG - GG)), VG[bG + GG * UG] = yG(ZG, bG, GG)
          }
          return {
            width: 180,
            height: 1,
            data: VG
          }
        }(new Uint8Array(GG.buffer, GG.byteOffset, GG.byteLength));
        ZG(wG.width, wG.height, !!bG.useMipMaps, !1, (() => {
          const GG = bG.CK();
          bG.type = 1, bG.format = 6, bG._gammaSpace = !1, GG._uploadDataToTextureDirectly(bG, wG.data)
        }))
      }
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);