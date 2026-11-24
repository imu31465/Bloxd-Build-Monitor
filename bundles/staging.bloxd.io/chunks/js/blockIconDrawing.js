export const id = 2;
export const ids = [2];
export const modules = {
  36408: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      drawBlockIcon: () => yB,
      drawBlockIconUrl: () => UB,
      getDrawnBlockIcon: () => qB
    });
    var TB = ZB(36416);
    const JB = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      oB = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      GB = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const vB = 1e-6;

    function kB(BB, IB, ZB, TB) {
      let {
        origin: JB,
        across: oB,
        down: GB,
        texture: kB,
        rect: [cB, nB, hB, zB],
        shade: FB
      } = TB;
      const NB = oB.x * GB.y - oB.y * GB.x;
      if (Math.abs(NB) < 1e-9) return;
      const gB = [JB.x, JB.x + oB.x, JB.x + GB.x, JB.x + oB.x + GB.x],
        qB = [JB.y, JB.y + oB.y, JB.y + GB.y, JB.y + oB.y + GB.y],
        yB = Math.max(0, Math.floor(Math.min(...gB))),
        UB = Math.min(ZB - 1, Math.ceil(Math.max(...gB))),
        WB = Math.max(0, Math.floor(Math.min(...qB))),
        dB = Math.min(ZB - 1, Math.ceil(Math.max(...qB)));
      for (let CB = WB; CB <= dB; CB++)
        for (let TB = yB; TB <= UB; TB++) {
          const gB = TB + .5 - JB.x,
            qB = CB + .5 - JB.y,
            yB = (gB * GB.y - qB * GB.x) / NB,
            UB = (oB.x * qB - oB.y * gB) / NB;
          if (yB < -vB || yB > 1 + vB || UB < -vB || UB > 1 + vB) continue;
          const WB = CB * ZB + TB;
          IB[WB] = 1;
          const dB = cB + Math.min(Math.max(yB, 0), 1) * (hB - cB),
            QB = nB + Math.min(Math.max(UB, 0), 1) * (zB - nB),
            sB = Math.min(kB.width - 1, Math.floor(dB * kB.width)),
            wB = 4 * (Math.min(kB.height - 1, Math.floor(QB * kB.height)) * kB.width + sB),
            OB = kB.pixels[wB + 3] / 255;
          if (0 === OB) continue;
          const YB = 4 * WB,
            iB = BB[YB + 3] / 255 * (1 - OB),
            pB = OB + iB;
          for (let IB = 0; IB < 3; IB++) BB[YB + IB] = (kB.pixels[wB + IB] * FB * OB + BB[YB + IB] * iB) / pB;
          BB[YB + 3] = 255 * pB
        }
    }
    var cB = ZB(36422);
    const nB = new Map,
      hB = new Map,
      zB = new Map,
      FB = new Map;

    function NB(BB, IB, ZB) {
      return `${IB}|${ZB}|${BB}`
    }

    function gB(BB, IB, ZB) {
      let TB = BB.get(IB);
      return void 0 === TB && (TB = ZB().catch((ZB => {
        throw BB.delete(IB), ZB
      })), BB.set(IB, TB)), TB
    }

    function qB(BB, IB) {
      let ZB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return hB.get(NB(BB, IB, ZB))
    }

    function yB(BB, IB, ZB, TB) {
      const JB = NB(BB, IB, ZB);
      return gB(nB, JB, (async () => {
        const oB = await WB(TB(BB), IB, ZB);
        return hB.set(JB, oB), oB
      }))
    }

    function UB(BB, IB, ZB, TB) {
      return gB(zB, NB(BB, IB, ZB), (async () => {
        var JB;
        const oB = TB(BB);
        return null !== (JB = await (0, cB.e)(oB, IB, ZB)) && void 0 !== JB ? JB : (await WB(oB, IB, ZB)).toDataURL()
      }))
    }
    async function WB(BB, IB, ZB) {
      let {
        top: vB,
        left: cB,
        right: nB,
        itemType: hB
      } = BB;
      const [zB, FB, NB] = await Promise.all([dB(vB), dB(cB), dB(nB)]), gB = function(BB, IB, ZB, JB) {
        const oB = (0, TB.j)(ZB, JB),
          GB = oB * TB.d.across,
          vB = oB * TB.d.down,
          cB = oB * TB.d.up,
          nB = Math.max(...IB.boxes.map((BB => BB[4]))),
          hB = ZB / 2,
          zB = vB + (ZB - vB - vB - nB * cB) / 2,
          FB = (BB, IB, ZB) => ({
            x: hB + (BB - ZB) * GB,
            y: zB - vB + (BB + ZB) * vB + (nB - IB) * cB
          }),
          NB = (BB, ZB, TB, JB, oB, GB) => ({
            origin: BB,
            across: {
              x: ZB.x - BB.x,
              y: ZB.y - BB.y
            },
            down: {
              x: TB.x - BB.x,
              y: TB.y - BB.y
            },
            texture: JB,
            rect: IB.cropFaces ? oB : [0, 0, 1, 1],
            shade: GB
          }),
          gB = new Uint8ClampedArray(ZB * ZB * 4),
          qB = new Uint8Array(ZB * ZB),
          yB = TB.h;
        for (const [TB, UB, WB, dB, CB, QB] of IB.boxes) {
          const IB = NB(FB(dB, CB, QB), FB(dB, CB, WB), FB(dB, UB, QB), BB.right, [1 - QB, 1 - CB, 1 - WB, 1 - UB], yB.right),
            JB = NB(FB(TB, CB, QB), FB(dB, CB, QB), FB(TB, UB, QB), BB.left, [TB, 1 - CB, dB, 1 - UB], yB.left),
            oB = NB(FB(TB, CB, WB), FB(dB, CB, WB), FB(TB, CB, QB), BB.top, [TB, WB, dB, QB], yB.top);
          for (const BB of [IB, JB, oB]) kB(gB, qB, ZB, BB)
        }
        return (0, TB.n)(gB, ZB, JB, (BB => 1 === qB[BB])), gB
      }({
        top: zB,
        left: FB,
        right: NB
      }, function(BB) {
        return "SlabBlock" === BB ? oB : "StairsBlock" === BB ? GB : JB
      }(hB), IB, ZB), qB = document.createElement("canvas");
      qB.width = IB, qB.height = IB;
      const yB = qB.getContext("2d");
      if (!yB) throw new Error("Failed to get 2D context");
      return yB.putImageData(new ImageData(gB, IB, IB), 0, 0), qB
    }

    function dB(BB) {
      return gB(FB, BB, (async () => {
        const IB = await (0, cB.h)(BB),
          ZB = document.createElement("canvas");
        ZB.width = IB.width, ZB.height = IB.height;
        const TB = ZB.getContext("2d");
        if (!TB) throw new Error("Failed to get 2D context");
        return TB.drawImage(IB, 0, 0), {
          width: IB.width,
          height: IB.height,
          pixels: TB.getImageData(0, 0, IB.width, IB.height).data
        }
      }))
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);