export const id = 2;
export const ids = [2];
export const modules = {
  37338: (MM, rM, iM) => {
    iM.r(rM), iM.d(rM, {
      drawBlockIcon: () => lM,
      drawBlockIconUrl: () => EM,
      getDrawnBlockIcon: () => yM,
      resetBlockIconDrawingForTests: () => hM
    });
    var OM = iM(37344);
    const SM = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      jM = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      aM = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const PM = 1e-6;

    function nM(MM, rM, iM, OM) {
      let {
        origin: SM,
        across: jM,
        down: aM,
        texture: nM,
        rect: [QM, zM, LM, mM],
        shade: HM
      } = OM;
      const hM = jM.x * aM.y - jM.y * aM.x;
      if (Math.abs(hM) < 1e-9) return;
      const JM = [SM.x, SM.x + jM.x, SM.x + aM.x, SM.x + jM.x + aM.x],
        dM = [SM.y, SM.y + jM.y, SM.y + aM.y, SM.y + jM.y + aM.y],
        yM = Math.max(0, Math.floor(Math.min(...JM))),
        lM = Math.min(iM - 1, Math.ceil(Math.max(...JM))),
        EM = Math.max(0, Math.floor(Math.min(...dM))),
        UM = Math.min(iM - 1, Math.ceil(Math.max(...dM)));
      for (let GM = EM; GM <= UM; GM++)
        for (let OM = yM; OM <= lM; OM++) {
          const JM = OM + .5 - SM.x,
            dM = GM + .5 - SM.y,
            yM = (JM * aM.y - dM * aM.x) / hM,
            lM = (jM.x * dM - jM.y * JM) / hM;
          if (yM < -PM || yM > 1 + PM || lM < -PM || lM > 1 + PM) continue;
          const EM = GM * iM + OM;
          rM[EM] = 1;
          const UM = QM + Math.min(Math.max(yM, 0), 1) * (LM - QM),
            CM = zM + Math.min(Math.max(lM, 0), 1) * (mM - zM),
            eM = Math.min(nM.width - 1, Math.floor(UM * nM.width)),
            bM = 4 * (Math.min(nM.height - 1, Math.floor(CM * nM.height)) * nM.width + eM),
            wM = nM.pixels[bM + 3] / 255;
          if (0 === wM) continue;
          const tM = 4 * EM,
            gM = MM[tM + 3] / 255 * (1 - wM),
            uM = wM + gM;
          for (let rM = 0; rM < 3; rM++) MM[tM + rM] = (nM.pixels[bM + rM] * HM * wM + MM[tM + rM] * gM) / uM;
          MM[tM + 3] = 255 * uM
        }
    }
    var QM = iM(37353);
    const zM = new Map,
      LM = new Map,
      mM = new Map,
      HM = new Map;

    function hM() {
      zM.clear(), LM.clear(), mM.clear(), HM.clear()
    }

    function JM(MM, rM, iM) {
      return `${rM}|${iM}|${MM}`
    }

    function dM(MM, rM, iM) {
      let OM = MM.get(rM);
      return void 0 === OM && (OM = iM().catch((iM => {
        throw MM.delete(rM), iM
      })), MM.set(rM, OM)), OM
    }

    function yM(MM, rM) {
      let iM = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return LM.get(JM(MM, rM, iM))
    }

    function lM(MM, rM, iM, OM) {
      const SM = JM(MM, rM, iM);
      return dM(zM, SM, (async () => {
        const jM = await UM(OM(MM), rM, iM);
        return LM.set(SM, jM), jM
      }))
    }

    function EM(MM, rM, iM, OM) {
      return dM(mM, JM(MM, rM, iM), (async () => {
        var SM;
        const jM = OM(MM);
        return null !== (SM = await (0, QM.c)(jM, rM, iM)) && void 0 !== SM ? SM : (await UM(jM, rM, iM)).toDataURL()
      }))
    }
    async function UM(MM, rM, iM) {
      let {
        top: PM,
        left: QM,
        right: zM,
        itemType: LM
      } = MM;
      const [mM, HM, hM] = await Promise.all([GM(PM), GM(QM), GM(zM)]), JM = function(MM, rM, iM, SM) {
        const jM = (0, OM.h)(iM, SM),
          aM = jM * OM.c.across,
          PM = jM * OM.c.down,
          QM = jM * OM.c.up,
          zM = Math.max(...rM.boxes.map((MM => MM[4]))),
          LM = iM / 2,
          mM = PM + (iM - PM - PM - zM * QM) / 2,
          HM = (MM, rM, iM) => ({
            x: LM + (MM - iM) * aM,
            y: mM - PM + (MM + iM) * PM + (zM - rM) * QM
          }),
          hM = (MM, iM, OM, SM, jM, aM) => ({
            origin: MM,
            across: {
              x: iM.x - MM.x,
              y: iM.y - MM.y
            },
            down: {
              x: OM.x - MM.x,
              y: OM.y - MM.y
            },
            texture: SM,
            rect: rM.cropFaces ? jM : [0, 0, 1, 1],
            shade: aM
          }),
          JM = new Uint8ClampedArray(iM * iM * 4),
          dM = new Uint8Array(iM * iM),
          yM = OM.f;
        for (const [OM, lM, EM, UM, GM, CM] of rM.boxes) {
          const rM = hM(HM(UM, GM, CM), HM(UM, GM, EM), HM(UM, lM, CM), MM.right, [1 - CM, 1 - GM, 1 - EM, 1 - lM], yM.right),
            SM = hM(HM(OM, GM, CM), HM(UM, GM, CM), HM(OM, lM, CM), MM.left, [OM, 1 - GM, UM, 1 - lM], yM.left),
            jM = hM(HM(OM, GM, EM), HM(UM, GM, EM), HM(OM, GM, CM), MM.top, [OM, EM, UM, CM], yM.top);
          for (const MM of [rM, SM, jM]) nM(JM, dM, iM, MM)
        }
        return (0, OM.k)(JM, iM, SM, (MM => 1 === dM[MM])), JM
      }({
        top: mM,
        left: HM,
        right: hM
      }, function(MM) {
        return "SlabBlock" === MM ? jM : "StairsBlock" === MM ? aM : SM
      }(LM), rM, iM), dM = document.createElement("canvas");
      dM.width = rM, dM.height = rM;
      const yM = dM.getContext("2d");
      if (!yM) throw new Error("Failed to get 2D context");
      return yM.putImageData(new ImageData(JM, rM, rM), 0, 0), dM
    }

    function GM(MM) {
      return dM(HM, MM, (async () => {
        const rM = await (0, QM.h)(MM),
          iM = document.createElement("canvas");
        iM.width = rM.width, iM.height = rM.height;
        const OM = iM.getContext("2d");
        if (!OM) throw new Error("Failed to get 2D context");
        return OM.drawImage(rM, 0, 0), {
          width: rM.width,
          height: rM.height,
          pixels: OM.getImageData(0, 0, rM.width, rM.height).data
        }
      }))
    }
  }
};
Object.freeze(modules);
for (const MM in modules) Object.freeze(modules[MM]);