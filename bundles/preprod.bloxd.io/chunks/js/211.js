export const id = 211;
export const ids = [211];
export const modules = {
  34589: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      packDisplayName: () => jQ,
      packModelMessage: () => BQ,
      packModelSummary: () => VQ,
      refusedPackModels: () => yQ
    });
    var wQ = XQ(34591),
      qQ = XQ(34596);
    const TQ = "DRACO",
      zQ = 0,
      sQ = 1,
      FQ = 0,
      PQ = 1,
      gQ = 32768;

    function JQ(QQ) {
      const WQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength);
      let XQ = 0;
      const wQ = () => {
          if (XQ >= QQ.byteLength) throw new RangeError("past the stream");
          return QQ[XQ++]
        },
        qQ = () => {
          if (XQ + 4 > QQ.byteLength) throw new RangeError("past the stream");
          const wQ = WQ.getUint32(XQ, !0);
          return XQ += 4, wQ
        },
        JQ = () => {
          let QQ = 0;
          for (let WQ = 0; WQ < 35; WQ += 7) {
            const XQ = wQ();
            if (QQ += (127 & XQ) * 2 ** WQ, 0 === (128 & XQ)) return QQ
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let QQ = 0; QQ < TQ.length; QQ++)
          if (wQ() !== TQ.charCodeAt(QQ)) return null;
        const WQ = wQ(),
          rQ = wQ(),
          IQ = wQ(),
          jQ = wQ(),
          BQ = wQ() | wQ() << 8;
        if (2 !== WQ) return null;
        0 !== (BQ & gQ) && function(QQ, WQ, XQ) {
          const wQ = () => {
              WQ(XQ())
            },
            qQ = () => {
              let XQ = 1,
                qQ = !0;
              for (; XQ > 0;) {
                XQ--, qQ || wQ(), qQ = !1;
                const TQ = QQ();
                for (let XQ = 0; XQ < TQ; XQ++) wQ(), WQ(QQ());
                XQ += QQ()
              }
            },
            TQ = QQ();
          for (let zQ = 0; zQ < TQ; zQ++) QQ(), qQ();
          qQ()
        }(JQ, (WQ => {
          if (XQ + WQ > QQ.byteLength) throw new RangeError("past the stream");
          XQ += WQ
        }), wQ);
        const yQ = rQ < 2 ? qQ : JQ;
        if (IQ === zQ) return {
          faces: 0,
          vertices: qQ()
        };
        if (IQ !== sQ) return null;
        if (jQ === FQ) {
          return {
            faces: yQ(),
            vertices: yQ()
          }
        }
        if (jQ !== PQ) return null;
        wQ(), rQ < 2 && JQ();
        const VQ = JQ();
        return {
          faces: JQ(),
          vertices: VQ
        }
      } catch {
        return null
      }
    }

    function rQ(QQ, WQ, XQ) {
      var wQ, qQ;
      if (null === (wQ = null === (qQ = QQ.extensionsUsed) || void 0 === qQ ? void 0 : qQ.includes("KHR_draco_mesh_compression")) || void 0 === wQ || !wQ) return null;
      for (const jQ of null !== (TQ = QQ.meshes) && void 0 !== TQ ? TQ : []) {
        var TQ;
        for (const wQ of jQ.primitives) {
          var zQ, sQ, FQ, PQ, gQ, rQ;
          const qQ = null === (zQ = wQ.extensions) || void 0 === zQ ? void 0 : zQ.KHR_draco_mesh_compression;
          if ("object" !== typeof qQ || null === qQ) continue;
          const TQ = null === (sQ = QQ.bufferViews) || void 0 === sQ ? void 0 : sQ[qQ.bufferView];
          if (null === WQ || void 0 === TQ) return IQ;
          const jQ = null !== (FQ = TQ.byteOffset) && void 0 !== FQ ? FQ : 0,
            BQ = JQ(WQ.subarray(jQ, jQ + TQ.byteLength));
          if (null === BQ && !XQ) continue;
          const yQ = null !== (PQ = QQ.accessors) && void 0 !== PQ ? PQ : [],
            VQ = null === (gQ = yQ[wQ.attributes.POSITION]) || void 0 === gQ ? void 0 : gQ.count,
            DQ = void 0 === wQ.indices ? 0 : null === (rQ = yQ[wQ.indices]) || void 0 === rQ ? void 0 : rQ.count;
          if (null === BQ || void 0 === VQ || void 0 === DQ || 3 * BQ.faces !== DQ || BQ.vertices > VQ) return IQ
        }
      }
      return null
    }
    const IQ = "has a Draco stream whose counts don't match its accessors";

    function jQ(QQ) {
      var WQ;
      return null !== (WQ = QQ.name) && void 0 !== WQ ? WQ : QQ.fromFolderName || QQ.id
    }

    function BQ(QQ, WQ, XQ) {
      return `Texture pack "${QQ}": model "${WQ}" was not loaded because it ${XQ}. The default model is used instead.`
    }

    function yQ(QQ, WQ, XQ) {
      let {
        strictDraco: TQ = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const zQ = {};
      for (const [sQ, FQ] of Object.entries(WQ)) {
        let WQ;
        if (FQ.startsWith("data:")) try {
          const QQ = new Uint8Array((0, qQ.l)(FQ));
          if (WQ = (0, wQ.c)(QQ), null === WQ) {
            const {
              json: XQ,
              bin: wQ
            } = (0, qQ.u)(QQ);
            WQ = rQ(XQ, wQ, TQ)
          }
        } catch {
          WQ = "is not a binary glTF 2.0 file"
        } else WQ = "loads data from outside the file";
        WQ && (zQ[sQ] = WQ, XQ && console.warn(BQ(QQ, sQ, WQ)))
      }
      return zQ
    }

    function VQ(QQ, WQ) {
      const XQ = Object.keys(WQ);
      if (0 === XQ.length) return null;
      if (1 === XQ.length) return BQ(QQ, XQ[0], WQ[XQ[0]]);
      const wQ = XQ.map((QQ => `"${QQ}" ${WQ[QQ]}`)).join("; ");
      return `Texture pack "${QQ}": ${XQ.length} models were not loaded (${wQ}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);