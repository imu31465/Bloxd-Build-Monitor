export const id = 2;
export const ids = [2];
export const modules = {
  36279: (CC, zC, ZC) => {
    ZC.r(zC), ZC.d(zC, {
      drawBlockIcon: () => PC,
      drawBlockIconUrl: () => GC,
      getDrawnBlockIcon: () => pC
    });
    var QC = ZC(36288);
    const wC = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      bC = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      nC = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const fC = 1e-6;

    function oC(CC, zC, ZC, QC) {
      let {
        origin: wC,
        across: bC,
        down: nC,
        texture: oC,
        rect: [qC, FC, WC, NC],
        shade: MC
      } = QC;
      const gC = bC.x * nC.y - bC.y * nC.x;
      if (Math.abs(gC) < 1e-9) return;
      const SC = [wC.x, wC.x + bC.x, wC.x + nC.x, wC.x + bC.x + nC.x],
        pC = [wC.y, wC.y + bC.y, wC.y + nC.y, wC.y + bC.y + nC.y],
        PC = Math.max(0, Math.floor(Math.min(...SC))),
        GC = Math.min(ZC - 1, Math.ceil(Math.max(...SC))),
        RC = Math.max(0, Math.floor(Math.min(...pC))),
        AC = Math.min(ZC - 1, Math.ceil(Math.max(...pC)));
      for (let xC = RC; xC <= AC; xC++)
        for (let QC = PC; QC <= GC; QC++) {
          const SC = QC + .5 - wC.x,
            pC = xC + .5 - wC.y,
            PC = (SC * nC.y - pC * nC.x) / gC,
            GC = (bC.x * pC - bC.y * SC) / gC;
          if (PC < -fC || PC > 1 + fC || GC < -fC || GC > 1 + fC) continue;
          const RC = xC * ZC + QC;
          zC[RC] = 1;
          const AC = qC + Math.min(Math.max(PC, 0), 1) * (WC - qC),
            JC = FC + Math.min(Math.max(GC, 0), 1) * (NC - FC),
            IC = Math.min(oC.width - 1, Math.floor(AC * oC.width)),
            iC = 4 * (Math.min(oC.height - 1, Math.floor(JC * oC.height)) * oC.width + IC),
            vC = oC.pixels[iC + 3] / 255;
          if (0 === vC) continue;
          const eC = 4 * RC,
            hC = CC[eC + 3] / 255 * (1 - vC),
            KC = vC + hC;
          for (let zC = 0; zC < 3; zC++) CC[eC + zC] = (oC.pixels[iC + zC] * MC * vC + CC[eC + zC] * hC) / KC;
          CC[eC + 3] = 255 * KC
        }
    }
    var qC = ZC(36291);
    const FC = new Map,
      WC = new Map,
      NC = new Map,
      MC = new Map;

    function gC(CC, zC, ZC) {
      return `${zC}|${ZC}|${CC}`
    }

    function SC(CC, zC, ZC) {
      let QC = CC.get(zC);
      return void 0 === QC && (QC = ZC().catch((ZC => {
        throw CC.delete(zC), ZC
      })), CC.set(zC, QC)), QC
    }

    function pC(CC, zC) {
      let ZC = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return WC.get(gC(CC, zC, ZC))
    }

    function PC(CC, zC, ZC, QC) {
      const wC = gC(CC, zC, ZC);
      return SC(FC, wC, (async () => {
        const bC = await RC(QC(CC), zC, ZC);
        return WC.set(wC, bC), bC
      }))
    }

    function GC(CC, zC, ZC, QC) {
      return SC(NC, gC(CC, zC, ZC), (async () => {
        var wC;
        const bC = QC(CC);
        return null !== (wC = await (0, qC.c)(bC, zC, ZC)) && void 0 !== wC ? wC : (await RC(bC, zC, ZC)).toDataURL()
      }))
    }
    async function RC(CC, zC, ZC) {
      let {
        top: fC,
        left: qC,
        right: FC,
        itemType: WC
      } = CC;
      const [NC, MC, gC] = await Promise.all([AC(fC), AC(qC), AC(FC)]), SC = function(CC, zC, ZC, wC) {
        const bC = (0, QC.h)(ZC, wC),
          nC = bC * QC.c.across,
          fC = bC * QC.c.down,
          qC = bC * QC.c.up,
          FC = Math.max(...zC.boxes.map((CC => CC[4]))),
          WC = ZC / 2,
          NC = fC + (ZC - fC - fC - FC * qC) / 2,
          MC = (CC, zC, ZC) => ({
            x: WC + (CC - ZC) * nC,
            y: NC - fC + (CC + ZC) * fC + (FC - zC) * qC
          }),
          gC = (CC, ZC, QC, wC, bC, nC) => ({
            origin: CC,
            across: {
              x: ZC.x - CC.x,
              y: ZC.y - CC.y
            },
            down: {
              x: QC.x - CC.x,
              y: QC.y - CC.y
            },
            texture: wC,
            rect: zC.cropFaces ? bC : [0, 0, 1, 1],
            shade: nC
          }),
          SC = new Uint8ClampedArray(ZC * ZC * 4),
          pC = new Uint8Array(ZC * ZC),
          PC = QC.g;
        for (const [QC, GC, RC, AC, xC, JC] of zC.boxes) {
          const zC = gC(MC(AC, xC, JC), MC(AC, xC, RC), MC(AC, GC, JC), CC.right, [1 - JC, 1 - xC, 1 - RC, 1 - GC], PC.right),
            wC = gC(MC(QC, xC, JC), MC(AC, xC, JC), MC(QC, GC, JC), CC.left, [QC, 1 - xC, AC, 1 - GC], PC.left),
            bC = gC(MC(QC, xC, RC), MC(AC, xC, RC), MC(QC, xC, JC), CC.top, [QC, RC, AC, JC], PC.top);
          for (const CC of [zC, wC, bC]) oC(SC, pC, ZC, CC)
        }
        return (0, QC.j)(SC, ZC, wC, (CC => 1 === pC[CC])), SC
      }({
        top: NC,
        left: MC,
        right: gC
      }, function(CC) {
        return "SlabBlock" === CC ? bC : "StairsBlock" === CC ? nC : wC
      }(WC), zC, ZC), pC = document.createElement("canvas");
      pC.width = zC, pC.height = zC;
      const PC = pC.getContext("2d");
      if (!PC) throw new Error("Failed to get 2D context");
      return PC.putImageData(new ImageData(SC, zC, zC), 0, 0), pC
    }

    function AC(CC) {
      return SC(MC, CC, (async () => {
        const zC = await (0, qC.f)(CC),
          ZC = document.createElement("canvas");
        ZC.width = zC.width, ZC.height = zC.height;
        const QC = ZC.getContext("2d");
        if (!QC) throw new Error("Failed to get 2D context");
        return QC.drawImage(zC, 0, 0), {
          width: zC.width,
          height: zC.height,
          pixels: QC.getImageData(0, 0, zC.width, zC.height).data
        }
      }))
    }
  }
};
Object.freeze(modules);
for (const CC in modules) Object.freeze(modules[CC]);