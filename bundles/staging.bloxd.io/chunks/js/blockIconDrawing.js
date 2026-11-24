export const id = 2;
export const ids = [2];
export const modules = {
  36474: (TT, UT, mT) => {
    mT.r(UT), mT.d(UT, {
      drawBlockIcon: () => vT,
      drawBlockIconUrl: () => fT,
      getDrawnBlockIcon: () => cT
    });
    var WT = mT(36476);
    const zT = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      MT = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      gT = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const nT = 1e-6;

    function HT(TT, UT, mT, WT) {
      let {
        origin: zT,
        across: MT,
        down: gT,
        texture: HT,
        rect: [kT, jT, lT, LT],
        shade: pT
      } = WT;
      const BT = MT.x * gT.y - MT.y * gT.x;
      if (Math.abs(BT) < 1e-9) return;
      const ZT = [zT.x, zT.x + MT.x, zT.x + gT.x, zT.x + MT.x + gT.x],
        cT = [zT.y, zT.y + MT.y, zT.y + gT.y, zT.y + MT.y + gT.y],
        vT = Math.max(0, Math.floor(Math.min(...ZT))),
        fT = Math.min(mT - 1, Math.ceil(Math.max(...ZT))),
        qT = Math.max(0, Math.floor(Math.min(...cT))),
        iT = Math.min(mT - 1, Math.ceil(Math.max(...cT)));
      for (let bT = qT; bT <= iT; bT++)
        for (let WT = vT; WT <= fT; WT++) {
          const ZT = WT + .5 - zT.x,
            cT = bT + .5 - zT.y,
            vT = (ZT * gT.y - cT * gT.x) / BT,
            fT = (MT.x * cT - MT.y * ZT) / BT;
          if (vT < -nT || vT > 1 + nT || fT < -nT || fT > 1 + nT) continue;
          const qT = bT * mT + WT;
          UT[qT] = 1;
          const iT = kT + Math.min(Math.max(vT, 0), 1) * (lT - kT),
            OT = jT + Math.min(Math.max(fT, 0), 1) * (LT - jT),
            eT = Math.min(HT.width - 1, Math.floor(iT * HT.width)),
            YT = 4 * (Math.min(HT.height - 1, Math.floor(OT * HT.height)) * HT.width + eT),
            JT = HT.pixels[YT + 3] / 255;
          if (0 === JT) continue;
          const xT = 4 * qT,
            dT = TT[xT + 3] / 255 * (1 - JT),
            wT = JT + dT;
          for (let UT = 0; UT < 3; UT++) TT[xT + UT] = (HT.pixels[YT + UT] * pT * JT + TT[xT + UT] * dT) / wT;
          TT[xT + 3] = 255 * wT
        }
    }
    var kT = mT(36478);
    const jT = new Map,
      lT = new Map,
      LT = new Map,
      pT = new Map;

    function BT(TT, UT, mT) {
      return `${UT}|${mT}|${TT}`
    }

    function ZT(TT, UT, mT) {
      let WT = TT.get(UT);
      return void 0 === WT && (WT = mT().catch((mT => {
        throw TT.delete(UT), mT
      })), TT.set(UT, WT)), WT
    }

    function cT(TT, UT) {
      let mT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return lT.get(BT(TT, UT, mT))
    }

    function vT(TT, UT, mT, WT) {
      const zT = BT(TT, UT, mT);
      return ZT(jT, zT, (async () => {
        const MT = await qT(WT(TT), UT, mT);
        return lT.set(zT, MT), MT
      }))
    }

    function fT(TT, UT, mT, WT) {
      return ZT(LT, BT(TT, UT, mT), (async () => {
        var zT;
        const MT = WT(TT);
        return null !== (zT = await (0, kT.c)(MT, UT, mT)) && void 0 !== zT ? zT : (await qT(MT, UT, mT)).toDataURL()
      }))
    }
    async function qT(TT, UT, mT) {
      let {
        top: nT,
        left: kT,
        right: jT,
        itemType: lT
      } = TT;
      const [LT, pT, BT] = await Promise.all([iT(nT), iT(kT), iT(jT)]), ZT = function(TT, UT, mT, zT) {
        const MT = (0, WT.f)(mT, zT),
          gT = MT * WT.b.across,
          nT = MT * WT.b.down,
          kT = MT * WT.b.up,
          jT = Math.max(...UT.boxes.map((TT => TT[4]))),
          lT = mT / 2,
          LT = nT + (mT - nT - nT - jT * kT) / 2,
          pT = (TT, UT, mT) => ({
            x: lT + (TT - mT) * gT,
            y: LT - nT + (TT + mT) * nT + (jT - UT) * kT
          }),
          BT = (TT, mT, WT, zT, MT, gT) => ({
            origin: TT,
            across: {
              x: mT.x - TT.x,
              y: mT.y - TT.y
            },
            down: {
              x: WT.x - TT.x,
              y: WT.y - TT.y
            },
            texture: zT,
            rect: UT.cropFaces ? MT : [0, 0, 1, 1],
            shade: gT
          }),
          ZT = new Uint8ClampedArray(mT * mT * 4),
          cT = new Uint8Array(mT * mT),
          vT = WT.e;
        for (const [WT, fT, qT, iT, bT, OT] of UT.boxes) {
          const UT = BT(pT(iT, bT, OT), pT(iT, bT, qT), pT(iT, fT, OT), TT.right, [1 - OT, 1 - bT, 1 - qT, 1 - fT], vT.right),
            zT = BT(pT(WT, bT, OT), pT(iT, bT, OT), pT(WT, fT, OT), TT.left, [WT, 1 - bT, iT, 1 - fT], vT.left),
            MT = BT(pT(WT, bT, qT), pT(iT, bT, qT), pT(WT, bT, OT), TT.top, [WT, qT, iT, OT], vT.top);
          for (const TT of [UT, zT, MT]) HT(ZT, cT, mT, TT)
        }
        return (0, WT.h)(ZT, mT, zT, (TT => 1 === cT[TT])), ZT
      }({
        top: LT,
        left: pT,
        right: BT
      }, function(TT) {
        return "SlabBlock" === TT ? MT : "StairsBlock" === TT ? gT : zT
      }(lT), UT, mT), cT = document.createElement("canvas");
      cT.width = UT, cT.height = UT;
      const vT = cT.getContext("2d");
      if (!vT) throw new Error("Failed to get 2D context");
      return vT.putImageData(new ImageData(ZT, UT, UT), 0, 0), cT
    }

    function iT(TT) {
      return ZT(pT, TT, (async () => {
        const UT = await (0, kT.i)(TT),
          mT = document.createElement("canvas");
        mT.width = UT.width, mT.height = UT.height;
        const WT = mT.getContext("2d");
        if (!WT) throw new Error("Failed to get 2D context");
        return WT.drawImage(UT, 0, 0), {
          width: UT.width,
          height: UT.height,
          pixels: WT.getImageData(0, 0, UT.width, UT.height).data
        }
      }))
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);