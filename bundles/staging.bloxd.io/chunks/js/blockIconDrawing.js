export const id = 2;
export const ids = [2];
export const modules = {
  37545: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      drawBlockIcon: () => jV,
      drawBlockIconUrl: () => qV,
      getDrawnBlockIcon: () => BV,
      resetBlockIconDrawingForTests: () => kV
    });
    var JV = xV(37549);
    const YV = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      UV = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      yV = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const pV = 1e-6;

    function QV(VV, eV, xV, JV) {
      let {
        origin: YV,
        across: UV,
        down: yV,
        texture: QV,
        rect: [nV, wV, ZV, vV],
        shade: rV
      } = JV;
      const kV = UV.x * yV.y - UV.y * yV.x;
      if (Math.abs(kV) < 1e-9) return;
      const bV = [YV.x, YV.x + UV.x, YV.x + yV.x, YV.x + UV.x + yV.x],
        EV = [YV.y, YV.y + UV.y, YV.y + yV.y, YV.y + UV.y + yV.y],
        BV = Math.max(0, Math.floor(Math.min(...bV))),
        jV = Math.min(xV - 1, Math.ceil(Math.max(...bV))),
        qV = Math.max(0, Math.floor(Math.min(...EV))),
        tV = Math.min(xV - 1, Math.ceil(Math.max(...EV)));
      for (let FV = qV; FV <= tV; FV++)
        for (let JV = BV; JV <= jV; JV++) {
          const bV = JV + .5 - YV.x,
            EV = FV + .5 - YV.y,
            BV = (bV * yV.y - EV * yV.x) / kV,
            jV = (UV.x * EV - UV.y * bV) / kV;
          if (BV < -pV || BV > 1 + pV || jV < -pV || jV > 1 + pV) continue;
          const qV = FV * xV + JV;
          eV[qV] = 1;
          const tV = nV + Math.min(Math.max(BV, 0), 1) * (ZV - nV),
            TV = wV + Math.min(Math.max(jV, 0), 1) * (vV - wV),
            PV = Math.min(QV.width - 1, Math.floor(tV * QV.width)),
            AV = 4 * (Math.min(QV.height - 1, Math.floor(TV * QV.height)) * QV.width + PV),
            NV = QV.pixels[AV + 3] / 255;
          if (0 === NV) continue;
          const XV = 4 * qV,
            MV = VV[XV + 3] / 255 * (1 - NV),
            zV = NV + MV;
          for (let eV = 0; eV < 3; eV++) VV[XV + eV] = (QV.pixels[AV + eV] * rV * NV + VV[XV + eV] * MV) / zV;
          VV[XV + 3] = 255 * zV
        }
    }
    var nV = xV(37556);
    const wV = new Map,
      ZV = new Map,
      vV = new Map,
      rV = new Map;

    function kV() {
      wV.clear(), ZV.clear(), vV.clear(), rV.clear()
    }

    function bV(VV, eV, xV) {
      return `${eV}|${xV}|${VV}`
    }

    function EV(VV, eV, xV) {
      let JV = VV.get(eV);
      return void 0 === JV && (JV = xV().catch((xV => {
        throw VV.delete(eV), xV
      })), VV.set(eV, JV)), JV
    }

    function BV(VV, eV) {
      let xV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return ZV.get(bV(VV, eV, xV))
    }

    function jV(VV, eV, xV, JV) {
      const YV = bV(VV, eV, xV);
      return EV(wV, YV, (async () => {
        const UV = await tV(JV(VV), eV, xV);
        return ZV.set(YV, UV), UV
      }))
    }

    function qV(VV, eV, xV, JV) {
      return EV(vV, bV(VV, eV, xV), (async () => {
        var YV;
        const UV = JV(VV);
        return null !== (YV = await (0, nV.b)(UV, eV, xV)) && void 0 !== YV ? YV : (await tV(UV, eV, xV)).toDataURL()
      }))
    }
    async function tV(VV, eV, xV) {
      let {
        top: pV,
        left: nV,
        right: wV,
        itemType: ZV
      } = VV;
      const [vV, rV, kV] = await Promise.all([FV(pV), FV(nV), FV(wV)]), bV = function(VV, eV, xV, YV) {
        const UV = (0, JV.g)(xV, YV),
          yV = UV * JV.b.across,
          pV = UV * JV.b.down,
          nV = UV * JV.b.up,
          wV = Math.max(...eV.boxes.map((VV => VV[4]))),
          ZV = xV / 2,
          vV = pV + (xV - pV - pV - wV * nV) / 2,
          rV = (VV, eV, xV) => ({
            x: ZV + (VV - xV) * yV,
            y: vV - pV + (VV + xV) * pV + (wV - eV) * nV
          }),
          kV = (VV, xV, JV, YV, UV, yV) => ({
            origin: VV,
            across: {
              x: xV.x - VV.x,
              y: xV.y - VV.y
            },
            down: {
              x: JV.x - VV.x,
              y: JV.y - VV.y
            },
            texture: YV,
            rect: eV.cropFaces ? UV : [0, 0, 1, 1],
            shade: yV
          }),
          bV = new Uint8ClampedArray(xV * xV * 4),
          EV = new Uint8Array(xV * xV),
          BV = JV.c;
        for (const [JV, jV, qV, tV, FV, TV] of eV.boxes) {
          const eV = kV(rV(tV, FV, TV), rV(tV, FV, qV), rV(tV, jV, TV), VV.right, [1 - TV, 1 - FV, 1 - qV, 1 - jV], BV.right),
            YV = kV(rV(JV, FV, TV), rV(tV, FV, TV), rV(JV, jV, TV), VV.left, [JV, 1 - FV, tV, 1 - jV], BV.left),
            UV = kV(rV(JV, FV, qV), rV(tV, FV, qV), rV(JV, FV, TV), VV.top, [JV, qV, tV, TV], BV.top);
          for (const VV of [eV, YV, UV]) QV(bV, EV, xV, VV)
        }
        return (0, JV.k)(bV, xV, YV, (VV => 1 === EV[VV])), bV
      }({
        top: vV,
        left: rV,
        right: kV
      }, function(VV) {
        return "SlabBlock" === VV ? UV : "StairsBlock" === VV ? yV : YV
      }(ZV), eV, xV), EV = document.createElement("canvas");
      EV.width = eV, EV.height = eV;
      const BV = EV.getContext("2d");
      if (!BV) throw new Error("Failed to get 2D context");
      return BV.putImageData(new ImageData(bV, eV, eV), 0, 0), EV
    }

    function FV(VV) {
      return EV(rV, VV, (async () => {
        const eV = await (0, nV.h)(VV),
          xV = document.createElement("canvas");
        xV.width = eV.width, xV.height = eV.height;
        const JV = xV.getContext("2d");
        if (!JV) throw new Error("Failed to get 2D context");
        return JV.drawImage(eV, 0, 0), {
          width: eV.width,
          height: eV.height,
          pixels: JV.getImageData(0, 0, eV.width, eV.height).data
        }
      }))
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);