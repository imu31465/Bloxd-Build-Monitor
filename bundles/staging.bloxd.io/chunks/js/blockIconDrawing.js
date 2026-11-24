export const id = 2;
export const ids = [2];
export const modules = {
  36399: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      drawBlockIcon: () => CS,
      drawBlockIconUrl: () => nS,
      getDrawnBlockIcon: () => GS
    });
    var tS = gS(36403);
    const bS = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      XS = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      xS = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const NS = 1e-6;

    function qS(SS, HS, gS, tS) {
      let {
        origin: bS,
        across: XS,
        down: xS,
        texture: qS,
        rect: [uS, IS, fS, kS],
        shade: aS
      } = tS;
      const KS = XS.x * xS.y - XS.y * xS.x;
      if (Math.abs(KS) < 1e-9) return;
      const jS = [bS.x, bS.x + XS.x, bS.x + xS.x, bS.x + XS.x + xS.x],
        GS = [bS.y, bS.y + XS.y, bS.y + xS.y, bS.y + XS.y + xS.y],
        CS = Math.max(0, Math.floor(Math.min(...jS))),
        nS = Math.min(gS - 1, Math.ceil(Math.max(...jS))),
        PS = Math.max(0, Math.floor(Math.min(...GS))),
        QS = Math.min(gS - 1, Math.ceil(Math.max(...GS)));
      for (let DS = PS; DS <= QS; DS++)
        for (let tS = CS; tS <= nS; tS++) {
          const jS = tS + .5 - bS.x,
            GS = DS + .5 - bS.y,
            CS = (jS * xS.y - GS * xS.x) / KS,
            nS = (XS.x * GS - XS.y * jS) / KS;
          if (CS < -NS || CS > 1 + NS || nS < -NS || nS > 1 + NS) continue;
          const PS = DS * gS + tS;
          HS[PS] = 1;
          const QS = uS + Math.min(Math.max(CS, 0), 1) * (fS - uS),
            wS = IS + Math.min(Math.max(nS, 0), 1) * (kS - IS),
            hS = Math.min(qS.width - 1, Math.floor(QS * qS.width)),
            ZS = 4 * (Math.min(qS.height - 1, Math.floor(wS * qS.height)) * qS.width + hS),
            JS = qS.pixels[ZS + 3] / 255;
          if (0 === JS) continue;
          const OS = 4 * PS,
            dS = SS[OS + 3] / 255 * (1 - JS),
            cS = JS + dS;
          for (let HS = 0; HS < 3; HS++) SS[OS + HS] = (qS.pixels[ZS + HS] * aS * JS + SS[OS + HS] * dS) / cS;
          SS[OS + 3] = 255 * cS
        }
    }
    var uS = gS(36412);
    const IS = new Map,
      fS = new Map,
      kS = new Map,
      aS = new Map;

    function KS(SS, HS, gS) {
      return `${HS}|${gS}|${SS}`
    }

    function jS(SS, HS, gS) {
      let tS = SS.get(HS);
      return void 0 === tS && (tS = gS().catch((gS => {
        throw SS.delete(HS), gS
      })), SS.set(HS, tS)), tS
    }

    function GS(SS, HS) {
      let gS = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return fS.get(KS(SS, HS, gS))
    }

    function CS(SS, HS, gS, tS) {
      const bS = KS(SS, HS, gS);
      return jS(IS, bS, (async () => {
        const XS = await PS(tS(SS), HS, gS);
        return fS.set(bS, XS), XS
      }))
    }

    function nS(SS, HS, gS, tS) {
      return jS(kS, KS(SS, HS, gS), (async () => {
        var bS;
        const XS = tS(SS);
        return null !== (bS = await (0, uS.d)(XS, HS, gS)) && void 0 !== bS ? bS : (await PS(XS, HS, gS)).toDataURL()
      }))
    }
    async function PS(SS, HS, gS) {
      let {
        top: NS,
        left: uS,
        right: IS,
        itemType: fS
      } = SS;
      const [kS, aS, KS] = await Promise.all([QS(NS), QS(uS), QS(IS)]), jS = function(SS, HS, gS, bS) {
        const XS = (0, tS.j)(gS, bS),
          xS = XS * tS.b.across,
          NS = XS * tS.b.down,
          uS = XS * tS.b.up,
          IS = Math.max(...HS.boxes.map((SS => SS[4]))),
          fS = gS / 2,
          kS = NS + (gS - NS - NS - IS * uS) / 2,
          aS = (SS, HS, gS) => ({
            x: fS + (SS - gS) * xS,
            y: kS - NS + (SS + gS) * NS + (IS - HS) * uS
          }),
          KS = (SS, gS, tS, bS, XS, xS) => ({
            origin: SS,
            across: {
              x: gS.x - SS.x,
              y: gS.y - SS.y
            },
            down: {
              x: tS.x - SS.x,
              y: tS.y - SS.y
            },
            texture: bS,
            rect: HS.cropFaces ? XS : [0, 0, 1, 1],
            shade: xS
          }),
          jS = new Uint8ClampedArray(gS * gS * 4),
          GS = new Uint8Array(gS * gS),
          CS = tS.f;
        for (const [tS, nS, PS, QS, DS, wS] of HS.boxes) {
          const HS = KS(aS(QS, DS, wS), aS(QS, DS, PS), aS(QS, nS, wS), SS.right, [1 - wS, 1 - DS, 1 - PS, 1 - nS], CS.right),
            bS = KS(aS(tS, DS, wS), aS(QS, DS, wS), aS(tS, nS, wS), SS.left, [tS, 1 - DS, QS, 1 - nS], CS.left),
            XS = KS(aS(tS, DS, PS), aS(QS, DS, PS), aS(tS, DS, wS), SS.top, [tS, PS, QS, wS], CS.top);
          for (const SS of [HS, bS, XS]) qS(jS, GS, gS, SS)
        }
        return (0, tS.m)(jS, gS, bS, (SS => 1 === GS[SS])), jS
      }({
        top: kS,
        left: aS,
        right: KS
      }, function(SS) {
        return "SlabBlock" === SS ? XS : "StairsBlock" === SS ? xS : bS
      }(fS), HS, gS), GS = document.createElement("canvas");
      GS.width = HS, GS.height = HS;
      const CS = GS.getContext("2d");
      if (!CS) throw new Error("Failed to get 2D context");
      return CS.putImageData(new ImageData(jS, HS, HS), 0, 0), GS
    }

    function QS(SS) {
      return jS(aS, SS, (async () => {
        const HS = await (0, uS.i)(SS),
          gS = document.createElement("canvas");
        gS.width = HS.width, gS.height = HS.height;
        const tS = gS.getContext("2d");
        if (!tS) throw new Error("Failed to get 2D context");
        return tS.drawImage(HS, 0, 0), {
          width: HS.width,
          height: HS.height,
          pixels: tS.getImageData(0, 0, HS.width, HS.height).data
        }
      }))
    }
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);