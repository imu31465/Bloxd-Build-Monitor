export const id = 2;
export const ids = [2];
export const modules = {
  36727: (GG, bG, ZG) => {
    ZG.r(bG), ZG.d(bG, {
      drawBlockIcon: () => JG,
      drawBlockIconUrl: () => rG,
      getDrawnBlockIcon: () => dG
    });
    var wG = ZG(36729);
    const SG = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      LG = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      yG = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const kG = 1e-6;

    function UG(GG, bG, ZG, wG) {
      let {
        origin: SG,
        across: LG,
        down: yG,
        texture: UG,
        rect: [YG, VG, pG, fG],
        shade: QG
      } = wG;
      const KG = LG.x * yG.y - LG.y * yG.x;
      if (Math.abs(KG) < 1e-9) return;
      const hG = [SG.x, SG.x + LG.x, SG.x + yG.x, SG.x + LG.x + yG.x],
        dG = [SG.y, SG.y + LG.y, SG.y + yG.y, SG.y + LG.y + yG.y],
        JG = Math.max(0, Math.floor(Math.min(...hG))),
        rG = Math.min(ZG - 1, Math.ceil(Math.max(...hG))),
        zG = Math.max(0, Math.floor(Math.min(...dG))),
        EG = Math.min(ZG - 1, Math.ceil(Math.max(...dG)));
      for (let oG = zG; oG <= EG; oG++)
        for (let wG = JG; wG <= rG; wG++) {
          const hG = wG + .5 - SG.x,
            dG = oG + .5 - SG.y,
            JG = (hG * yG.y - dG * yG.x) / KG,
            rG = (LG.x * dG - LG.y * hG) / KG;
          if (JG < -kG || JG > 1 + kG || rG < -kG || rG > 1 + kG) continue;
          const zG = oG * ZG + wG;
          bG[zG] = 1;
          const EG = YG + Math.min(Math.max(JG, 0), 1) * (pG - YG),
            XG = VG + Math.min(Math.max(rG, 0), 1) * (fG - VG),
            uG = Math.min(UG.width - 1, Math.floor(EG * UG.width)),
            iG = 4 * (Math.min(UG.height - 1, Math.floor(XG * UG.height)) * UG.width + uG),
            CG = UG.pixels[iG + 3] / 255;
          if (0 === CG) continue;
          const WG = 4 * zG,
            mG = GG[WG + 3] / 255 * (1 - CG),
            IG = CG + mG;
          for (let bG = 0; bG < 3; bG++) GG[WG + bG] = (UG.pixels[iG + bG] * QG * CG + GG[WG + bG] * mG) / IG;
          GG[WG + 3] = 255 * IG
        }
    }
    var YG = ZG(36733);
    const VG = new Map,
      pG = new Map,
      fG = new Map,
      QG = new Map;

    function KG(GG, bG, ZG) {
      return `${bG}|${ZG}|${GG}`
    }

    function hG(GG, bG, ZG) {
      let wG = GG.get(bG);
      return void 0 === wG && (wG = ZG().catch((ZG => {
        throw GG.delete(bG), ZG
      })), GG.set(bG, wG)), wG
    }

    function dG(GG, bG) {
      let ZG = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return pG.get(KG(GG, bG, ZG))
    }

    function JG(GG, bG, ZG, wG) {
      const SG = KG(GG, bG, ZG);
      return hG(VG, SG, (async () => {
        const LG = await zG(wG(GG), bG, ZG);
        return pG.set(SG, LG), LG
      }))
    }

    function rG(GG, bG, ZG, wG) {
      return hG(fG, KG(GG, bG, ZG), (async () => {
        var SG;
        const LG = wG(GG);
        return null !== (SG = await (0, YG.e)(LG, bG, ZG)) && void 0 !== SG ? SG : (await zG(LG, bG, ZG)).toDataURL()
      }))
    }
    async function zG(GG, bG, ZG) {
      let {
        top: kG,
        left: YG,
        right: VG,
        itemType: pG
      } = GG;
      const [fG, QG, KG] = await Promise.all([EG(kG), EG(YG), EG(VG)]), hG = function(GG, bG, ZG, SG) {
        const LG = (0, wG.l)(ZG, SG),
          yG = LG * wG.d.across,
          kG = LG * wG.d.down,
          YG = LG * wG.d.up,
          VG = Math.max(...bG.boxes.map((GG => GG[4]))),
          pG = ZG / 2,
          fG = kG + (ZG - kG - kG - VG * YG) / 2,
          QG = (GG, bG, ZG) => ({
            x: pG + (GG - ZG) * yG,
            y: fG - kG + (GG + ZG) * kG + (VG - bG) * YG
          }),
          KG = (GG, ZG, wG, SG, LG, yG) => ({
            origin: GG,
            across: {
              x: ZG.x - GG.x,
              y: ZG.y - GG.y
            },
            down: {
              x: wG.x - GG.x,
              y: wG.y - GG.y
            },
            texture: SG,
            rect: bG.cropFaces ? LG : [0, 0, 1, 1],
            shade: yG
          }),
          hG = new Uint8ClampedArray(ZG * ZG * 4),
          dG = new Uint8Array(ZG * ZG),
          JG = wG.h;
        for (const [wG, rG, zG, EG, oG, XG] of bG.boxes) {
          const bG = KG(QG(EG, oG, XG), QG(EG, oG, zG), QG(EG, rG, XG), GG.right, [1 - XG, 1 - oG, 1 - zG, 1 - rG], JG.right),
            SG = KG(QG(wG, oG, XG), QG(EG, oG, XG), QG(wG, rG, XG), GG.left, [wG, 1 - oG, EG, 1 - rG], JG.left),
            LG = KG(QG(wG, oG, zG), QG(EG, oG, zG), QG(wG, oG, XG), GG.top, [wG, zG, EG, XG], JG.top);
          for (const GG of [bG, SG, LG]) UG(hG, dG, ZG, GG)
        }
        return (0, wG.n)(hG, ZG, SG, (GG => 1 === dG[GG])), hG
      }({
        top: fG,
        left: QG,
        right: KG
      }, function(GG) {
        return "SlabBlock" === GG ? LG : "StairsBlock" === GG ? yG : SG
      }(pG), bG, ZG), dG = document.createElement("canvas");
      dG.width = bG, dG.height = bG;
      const JG = dG.getContext("2d");
      if (!JG) throw new Error("Failed to get 2D context");
      return JG.putImageData(new ImageData(hG, bG, bG), 0, 0), dG
    }

    function EG(GG) {
      return hG(QG, GG, (async () => {
        const bG = await (0, YG.k)(GG),
          ZG = document.createElement("canvas");
        ZG.width = bG.width, ZG.height = bG.height;
        const wG = ZG.getContext("2d");
        if (!wG) throw new Error("Failed to get 2D context");
        return wG.drawImage(bG, 0, 0), {
          width: bG.width,
          height: bG.height,
          pixels: wG.getImageData(0, 0, bG.width, bG.height).data
        }
      }))
    }
  }
};
Object.freeze(modules);
for (const GG in modules) Object.freeze(modules[GG]);