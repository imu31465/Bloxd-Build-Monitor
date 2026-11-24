export const id = 2;
export const ids = [2];
export const modules = {
  36381: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      drawBlockIcon: () => hD,
      drawBlockIconUrl: () => nD,
      getDrawnBlockIcon: () => GD
    });
    var pD = wD(36386);
    const sD = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      KD = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      rD = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const LD = 1e-6;

    function cD(DD, zD, wD, pD) {
      let {
        origin: sD,
        across: KD,
        down: rD,
        texture: cD,
        rect: [gD, RD, AD, UD],
        shade: fD
      } = pD;
      const ID = KD.x * rD.y - KD.y * rD.x;
      if (Math.abs(ID) < 1e-9) return;
      const BD = [sD.x, sD.x + KD.x, sD.x + rD.x, sD.x + KD.x + rD.x],
        GD = [sD.y, sD.y + KD.y, sD.y + rD.y, sD.y + KD.y + rD.y],
        hD = Math.max(0, Math.floor(Math.min(...BD))),
        nD = Math.min(wD - 1, Math.ceil(Math.max(...BD))),
        MD = Math.max(0, Math.floor(Math.min(...GD))),
        OD = Math.min(wD - 1, Math.ceil(Math.max(...GD)));
      for (let JD = MD; JD <= OD; JD++)
        for (let pD = hD; pD <= nD; pD++) {
          const BD = pD + .5 - sD.x,
            GD = JD + .5 - sD.y,
            hD = (BD * rD.y - GD * rD.x) / ID,
            nD = (KD.x * GD - KD.y * BD) / ID;
          if (hD < -LD || hD > 1 + LD || nD < -LD || nD > 1 + LD) continue;
          const MD = JD * wD + pD;
          zD[MD] = 1;
          const OD = gD + Math.min(Math.max(hD, 0), 1) * (AD - gD),
            ED = RD + Math.min(Math.max(nD, 0), 1) * (UD - RD),
            QD = Math.min(cD.width - 1, Math.floor(OD * cD.width)),
            XD = 4 * (Math.min(cD.height - 1, Math.floor(ED * cD.height)) * cD.width + QD),
            VD = cD.pixels[XD + 3] / 255;
          if (0 === VD) continue;
          const PD = 4 * MD,
            CD = DD[PD + 3] / 255 * (1 - VD),
            xD = VD + CD;
          for (let zD = 0; zD < 3; zD++) DD[PD + zD] = (cD.pixels[XD + zD] * fD * VD + DD[PD + zD] * CD) / xD;
          DD[PD + 3] = 255 * xD
        }
    }
    var gD = wD(36395);
    const RD = new Map,
      AD = new Map,
      UD = new Map,
      fD = new Map;

    function ID(DD, zD, wD) {
      return `${zD}|${wD}|${DD}`
    }

    function BD(DD, zD, wD) {
      let pD = DD.get(zD);
      return void 0 === pD && (pD = wD().catch((wD => {
        throw DD.delete(zD), wD
      })), DD.set(zD, pD)), pD
    }

    function GD(DD, zD) {
      let wD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return AD.get(ID(DD, zD, wD))
    }

    function hD(DD, zD, wD, pD) {
      const sD = ID(DD, zD, wD);
      return BD(RD, sD, (async () => {
        const KD = await MD(pD(DD), zD, wD);
        return AD.set(sD, KD), KD
      }))
    }

    function nD(DD, zD, wD, pD) {
      return BD(UD, ID(DD, zD, wD), (async () => {
        var sD;
        const KD = pD(DD);
        return null !== (sD = await (0, gD.d)(KD, zD, wD)) && void 0 !== sD ? sD : (await MD(KD, zD, wD)).toDataURL()
      }))
    }
    async function MD(DD, zD, wD) {
      let {
        top: LD,
        left: gD,
        right: RD,
        itemType: AD
      } = DD;
      const [UD, fD, ID] = await Promise.all([OD(LD), OD(gD), OD(RD)]), BD = function(DD, zD, wD, sD) {
        const KD = (0, pD.i)(wD, sD),
          rD = KD * pD.c.across,
          LD = KD * pD.c.down,
          gD = KD * pD.c.up,
          RD = Math.max(...zD.boxes.map((DD => DD[4]))),
          AD = wD / 2,
          UD = LD + (wD - LD - LD - RD * gD) / 2,
          fD = (DD, zD, wD) => ({
            x: AD + (DD - wD) * rD,
            y: UD - LD + (DD + wD) * LD + (RD - zD) * gD
          }),
          ID = (DD, wD, pD, sD, KD, rD) => ({
            origin: DD,
            across: {
              x: wD.x - DD.x,
              y: wD.y - DD.y
            },
            down: {
              x: pD.x - DD.x,
              y: pD.y - DD.y
            },
            texture: sD,
            rect: zD.cropFaces ? KD : [0, 0, 1, 1],
            shade: rD
          }),
          BD = new Uint8ClampedArray(wD * wD * 4),
          GD = new Uint8Array(wD * wD),
          hD = pD.g;
        for (const [pD, nD, MD, OD, JD, ED] of zD.boxes) {
          const zD = ID(fD(OD, JD, ED), fD(OD, JD, MD), fD(OD, nD, ED), DD.right, [1 - ED, 1 - JD, 1 - MD, 1 - nD], hD.right),
            sD = ID(fD(pD, JD, ED), fD(OD, JD, ED), fD(pD, nD, ED), DD.left, [pD, 1 - JD, OD, 1 - nD], hD.left),
            KD = ID(fD(pD, JD, MD), fD(OD, JD, MD), fD(pD, JD, ED), DD.top, [pD, MD, OD, ED], hD.top);
          for (const DD of [zD, sD, KD]) cD(BD, GD, wD, DD)
        }
        return (0, pD.j)(BD, wD, sD, (DD => 1 === GD[DD])), BD
      }({
        top: UD,
        left: fD,
        right: ID
      }, function(DD) {
        return "SlabBlock" === DD ? KD : "StairsBlock" === DD ? rD : sD
      }(AD), zD, wD), GD = document.createElement("canvas");
      GD.width = zD, GD.height = zD;
      const hD = GD.getContext("2d");
      if (!hD) throw new Error("Failed to get 2D context");
      return hD.putImageData(new ImageData(BD, zD, zD), 0, 0), GD
    }

    function OD(DD) {
      return BD(fD, DD, (async () => {
        const zD = await (0, gD.i)(DD),
          wD = document.createElement("canvas");
        wD.width = zD.width, wD.height = zD.height;
        const pD = wD.getContext("2d");
        if (!pD) throw new Error("Failed to get 2D context");
        return pD.drawImage(zD, 0, 0), {
          width: zD.width,
          height: zD.height,
          pixels: pD.getImageData(0, 0, zD.width, zD.height).data
        }
      }))
    }
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);