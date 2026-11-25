export const id = 2;
export const ids = [2];
export const modules = {
  36698: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      drawBlockIcon: () => VQ,
      drawBlockIconUrl: () => DQ,
      getDrawnBlockIcon: () => yQ
    });
    var wQ = XQ(36703);
    const qQ = {
        boxes: [
          [0, 0, 0, 1, 1, 1]
        ],
        cropFaces: !1
      },
      TQ = {
        boxes: [
          [0, 0, 0, 1, .5, 1]
        ],
        cropFaces: !1
      },
      zQ = {
        boxes: [
          [0, 0, 0, 1, .5, 1],
          [0, .5, 0, .5, 1, 1]
        ],
        cropFaces: !0
      };
    const sQ = 1e-6;

    function FQ(QQ, WQ, XQ, wQ) {
      let {
        origin: qQ,
        across: TQ,
        down: zQ,
        texture: FQ,
        rect: [PQ, gQ, JQ, rQ],
        shade: IQ
      } = wQ;
      const jQ = TQ.x * zQ.y - TQ.y * zQ.x;
      if (Math.abs(jQ) < 1e-9) return;
      const BQ = [qQ.x, qQ.x + TQ.x, qQ.x + zQ.x, qQ.x + TQ.x + zQ.x],
        yQ = [qQ.y, qQ.y + TQ.y, qQ.y + zQ.y, qQ.y + TQ.y + zQ.y],
        VQ = Math.max(0, Math.floor(Math.min(...BQ))),
        DQ = Math.min(XQ - 1, Math.ceil(Math.max(...BQ))),
        pQ = Math.max(0, Math.floor(Math.min(...yQ))),
        GQ = Math.min(XQ - 1, Math.ceil(Math.max(...yQ)));
      for (let UQ = pQ; UQ <= GQ; UQ++)
        for (let wQ = VQ; wQ <= DQ; wQ++) {
          const BQ = wQ + .5 - qQ.x,
            yQ = UQ + .5 - qQ.y,
            VQ = (BQ * zQ.y - yQ * zQ.x) / jQ,
            DQ = (TQ.x * yQ - TQ.y * BQ) / jQ;
          if (VQ < -sQ || VQ > 1 + sQ || DQ < -sQ || DQ > 1 + sQ) continue;
          const pQ = UQ * XQ + wQ;
          WQ[pQ] = 1;
          const GQ = PQ + Math.min(Math.max(VQ, 0), 1) * (JQ - PQ),
            bQ = gQ + Math.min(Math.max(DQ, 0), 1) * (rQ - gQ),
            vQ = Math.min(FQ.width - 1, Math.floor(GQ * FQ.width)),
            dQ = 4 * (Math.min(FQ.height - 1, Math.floor(bQ * FQ.height)) * FQ.width + vQ),
            HQ = FQ.pixels[dQ + 3] / 255;
          if (0 === HQ) continue;
          const aQ = 4 * pQ,
            lQ = QQ[aQ + 3] / 255 * (1 - HQ),
            hQ = HQ + lQ;
          for (let WQ = 0; WQ < 3; WQ++) QQ[aQ + WQ] = (FQ.pixels[dQ + WQ] * IQ * HQ + QQ[aQ + WQ] * lQ) / hQ;
          QQ[aQ + 3] = 255 * hQ
        }
    }
    var PQ = XQ(36711);
    const gQ = new Map,
      JQ = new Map,
      rQ = new Map,
      IQ = new Map;

    function jQ(QQ, WQ, XQ) {
      return `${WQ}|${XQ}|${QQ}`
    }

    function BQ(QQ, WQ, XQ) {
      let wQ = QQ.get(WQ);
      return void 0 === wQ && (wQ = XQ().catch((XQ => {
        throw QQ.delete(WQ), XQ
      })), QQ.set(WQ, wQ)), wQ
    }

    function yQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
      return JQ.get(jQ(QQ, WQ, XQ))
    }

    function VQ(QQ, WQ, XQ, wQ) {
      const qQ = jQ(QQ, WQ, XQ);
      return BQ(gQ, qQ, (async () => {
        const TQ = await pQ(wQ(QQ), WQ, XQ);
        return JQ.set(qQ, TQ), TQ
      }))
    }

    function DQ(QQ, WQ, XQ, wQ) {
      return BQ(rQ, jQ(QQ, WQ, XQ), (async () => {
        var qQ;
        const TQ = wQ(QQ);
        return null !== (qQ = await (0, PQ.e)(TQ, WQ, XQ)) && void 0 !== qQ ? qQ : (await pQ(TQ, WQ, XQ)).toDataURL()
      }))
    }
    async function pQ(QQ, WQ, XQ) {
      let {
        top: sQ,
        left: PQ,
        right: gQ,
        itemType: JQ
      } = QQ;
      const [rQ, IQ, jQ] = await Promise.all([GQ(sQ), GQ(PQ), GQ(gQ)]), BQ = function(QQ, WQ, XQ, qQ) {
        const TQ = (0, wQ.f)(XQ, qQ),
          zQ = TQ * wQ.b.across,
          sQ = TQ * wQ.b.down,
          PQ = TQ * wQ.b.up,
          gQ = Math.max(...WQ.boxes.map((QQ => QQ[4]))),
          JQ = XQ / 2,
          rQ = sQ + (XQ - sQ - sQ - gQ * PQ) / 2,
          IQ = (QQ, WQ, XQ) => ({
            x: JQ + (QQ - XQ) * zQ,
            y: rQ - sQ + (QQ + XQ) * sQ + (gQ - WQ) * PQ
          }),
          jQ = (QQ, XQ, wQ, qQ, TQ, zQ) => ({
            origin: QQ,
            across: {
              x: XQ.x - QQ.x,
              y: XQ.y - QQ.y
            },
            down: {
              x: wQ.x - QQ.x,
              y: wQ.y - QQ.y
            },
            texture: qQ,
            rect: WQ.cropFaces ? TQ : [0, 0, 1, 1],
            shade: zQ
          }),
          BQ = new Uint8ClampedArray(XQ * XQ * 4),
          yQ = new Uint8Array(XQ * XQ),
          VQ = wQ.d;
        for (const [wQ, DQ, pQ, GQ, UQ, bQ] of WQ.boxes) {
          const WQ = jQ(IQ(GQ, UQ, bQ), IQ(GQ, UQ, pQ), IQ(GQ, DQ, bQ), QQ.right, [1 - bQ, 1 - UQ, 1 - pQ, 1 - DQ], VQ.right),
            qQ = jQ(IQ(wQ, UQ, bQ), IQ(GQ, UQ, bQ), IQ(wQ, DQ, bQ), QQ.left, [wQ, 1 - UQ, GQ, 1 - DQ], VQ.left),
            TQ = jQ(IQ(wQ, UQ, pQ), IQ(GQ, UQ, pQ), IQ(wQ, UQ, bQ), QQ.top, [wQ, pQ, GQ, bQ], VQ.top);
          for (const QQ of [WQ, qQ, TQ]) FQ(BQ, yQ, XQ, QQ)
        }
        return (0, wQ.i)(BQ, XQ, qQ, (QQ => 1 === yQ[QQ])), BQ
      }({
        top: rQ,
        left: IQ,
        right: jQ
      }, function(QQ) {
        return "SlabBlock" === QQ ? TQ : "StairsBlock" === QQ ? zQ : qQ
      }(JQ), WQ, XQ), yQ = document.createElement("canvas");
      yQ.width = WQ, yQ.height = WQ;
      const VQ = yQ.getContext("2d");
      if (!VQ) throw new Error("Failed to get 2D context");
      return VQ.putImageData(new ImageData(BQ, WQ, WQ), 0, 0), yQ
    }

    function GQ(QQ) {
      return BQ(IQ, QQ, (async () => {
        const WQ = await (0, PQ.i)(QQ),
          XQ = document.createElement("canvas");
        XQ.width = WQ.width, XQ.height = WQ.height;
        const wQ = XQ.getContext("2d");
        if (!wQ) throw new Error("Failed to get 2D context");
        return wQ.drawImage(WQ, 0, 0), {
          width: WQ.width,
          height: WQ.height,
          pixels: wQ.getImageData(0, 0, WQ.width, WQ.height).data
        }
      }))
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);