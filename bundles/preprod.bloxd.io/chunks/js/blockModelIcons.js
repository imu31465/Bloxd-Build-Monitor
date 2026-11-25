export const id = 4;
export const ids = [4];
export const modules = {
  36726: (QQ, WQ, XQ) => {
    var wQ = {
      "./Artisan Bench.json": [41417, 284],
      "./Aspen Item Pedestal.json": [41426, 285],
      "./Cedar Item Pedestal.json": [41431, 286],
      "./Cherry Item Pedestal.json": [41440, 287],
      "./Furnace.json": [41447, 288],
      "./Jungle Item Pedestal.json": [41449, 289],
      "./Mango Item Pedestal.json": [41452, 290],
      "./Palm Item Pedestal.json": [41459, 291],
      "./Pear Item Pedestal.json": [41462, 292],
      "./Pine Item Pedestal.json": [41468, 293],
      "./Plum Item Pedestal.json": [41473, 294],
      "./Potion Table.json": [41475, 295],
      "./Salvaging Table.json": [41477, 296],
      "./Showcase.json": [41481, 297],
      "./Spectral Item Pedestal.json": [41490, 298],
      "./Workbench.json": [41496, 299]
    };

    function qQ(QQ) {
      if (!XQ.o(wQ, QQ)) return Promise.resolve().then((() => {
        var WQ = new Error("Cannot find module '" + QQ + "'");
        throw WQ.code = "MODULE_NOT_FOUND", WQ
      }));
      var WQ = wQ[QQ],
        qQ = WQ[0];
      return XQ.e(WQ[1]).then((() => XQ(qQ)))
    }
    qQ.keys = () => Object.keys(wQ), qQ.id = 36726, QQ.exports = qQ
  },
  36718: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      getBlockModelIconUrl: () => rQ,
      hasBlockModelIcon: () => PQ
    });
    var wQ = XQ(36711),
      qQ = XQ(36703);
    const TQ = XQ(36726),
      zQ = new Map(TQ.keys().filter((QQ => QQ.startsWith("./"))).map((QQ => [QQ.slice(2, -5), QQ]))),
      sQ = new Map,
      FQ = new Map;

    function PQ(QQ) {
      return zQ.has(QQ)
    }

    function gQ(QQ) {
      return TQ(zQ.get(QQ))
    }
    async function JQ(QQ, WQ, XQ) {
      const {
        data: wQ,
        texture: TQ
      } = await
      function(QQ) {
        let WQ = sQ.get(QQ);
        return WQ || (WQ = gQ(QQ).then((async QQ => {
          const WQ = new Image;
          WQ.src = QQ.texture, await WQ.decode();
          const XQ = document.createElement("canvas");
          XQ.width = WQ.width, XQ.height = WQ.height;
          const wQ = XQ.getContext("2d");
          return wQ.drawImage(WQ, 0, 0), {
            data: QQ,
            texture: {
              width: WQ.width,
              height: WQ.height,
              pixels: wQ.getImageData(0, 0, WQ.width, WQ.height).data
            }
          }
        })), WQ.catch((() => {
          sQ.delete(QQ)
        })), sQ.set(QQ, WQ)), WQ
      }(QQ), zQ = document.createElement("canvas");
      return zQ.width = WQ, zQ.height = WQ, zQ.getContext("2d").putImageData(new ImageData((0, qQ.k)(wQ, TQ, WQ, XQ), WQ, WQ), 0, 0), zQ.toDataURL()
    }

    function rQ(QQ, WQ, XQ) {
      const qQ = `${WQ}|${XQ}|${QQ}`;
      let TQ = FQ.get(qQ);
      return TQ || (TQ = (0, wQ.h)(QQ, (() => gQ(QQ)), WQ, XQ).then((wQ => null !== wQ && void 0 !== wQ ? wQ : JQ(QQ, WQ, XQ))), TQ.catch((() => {
        FQ.delete(qQ)
      })), FQ.set(qQ, TQ)), TQ
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);