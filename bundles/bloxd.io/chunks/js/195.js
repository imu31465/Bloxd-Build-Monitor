export const id = 195;
export const ids = [195];
export const modules = {
  9173: (QQ, FQ, wQ) => {
    wQ.r(FQ), wQ.d(FQ, {
      packDisplayName: () => xQ,
      packModelMessage: () => AQ,
      packModelSummary: () => eQ,
      refusedPackModels: () => tQ
    });
    var LQ = wQ(9181),
      qQ = wQ(9184);
    const oQ = "DRACO",
      DQ = 0,
      kQ = 1,
      vQ = 0,
      mQ = 1,
      uQ = 32768;

    function HQ(QQ) {
      const FQ = new DataView(QQ.buffer, QQ.byteOffset, QQ.byteLength);
      let wQ = 0;
      const LQ = () => {
          if (wQ >= QQ.byteLength) throw new RangeError("past the stream");
          return QQ[wQ++]
        },
        qQ = () => {
          if (wQ + 4 > QQ.byteLength) throw new RangeError("past the stream");
          const LQ = FQ.getUint32(wQ, !0);
          return wQ += 4, LQ
        },
        HQ = () => {
          let QQ = 0;
          for (let FQ = 0; FQ < 35; FQ += 7) {
            const wQ = LQ();
            if (QQ += (127 & wQ) * 2 ** FQ, 0 === (128 & wQ)) return QQ
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let QQ = 0; QQ < oQ.length; QQ++)
          if (LQ() !== oQ.charCodeAt(QQ)) return null;
        const FQ = LQ(),
          bQ = LQ(),
          YQ = LQ(),
          xQ = LQ(),
          AQ = LQ() | LQ() << 8;
        if (2 !== FQ) return null;
        0 !== (AQ & uQ) && function(QQ, FQ, wQ) {
          const LQ = () => {
              FQ(wQ())
            },
            qQ = () => {
              let wQ = 1,
                qQ = !0;
              for (; wQ > 0;) {
                wQ--, qQ || LQ(), qQ = !1;
                const oQ = QQ();
                for (let wQ = 0; wQ < oQ; wQ++) LQ(), FQ(QQ());
                wQ += QQ()
              }
            },
            oQ = QQ();
          for (let DQ = 0; DQ < oQ; DQ++) QQ(), qQ();
          qQ()
        }(HQ, (FQ => {
          if (wQ + FQ > QQ.byteLength) throw new RangeError("past the stream");
          wQ += FQ
        }), LQ);
        const tQ = bQ < 2 ? qQ : HQ;
        if (YQ === DQ) return {
          faces: 0,
          vertices: qQ()
        };
        if (YQ !== kQ) return null;
        if (xQ === vQ) {
          return {
            faces: tQ(),
            vertices: tQ()
          }
        }
        if (xQ !== mQ) return null;
        LQ(), bQ < 2 && HQ();
        const eQ = HQ();
        return {
          faces: HQ(),
          vertices: eQ
        }
      } catch {
        return null
      }
    }

    function bQ(QQ, FQ, wQ) {
      var LQ, qQ;
      if (null === (LQ = null === (qQ = QQ.extensionsUsed) || void 0 === qQ ? void 0 : qQ.includes("KHR_draco_mesh_compression")) || void 0 === LQ || !LQ) return null;
      for (const xQ of null !== (oQ = QQ.meshes) && void 0 !== oQ ? oQ : []) {
        var oQ;
        for (const LQ of xQ.primitives) {
          var DQ, kQ, vQ, mQ, uQ, bQ;
          const qQ = null === (DQ = LQ.extensions) || void 0 === DQ ? void 0 : DQ.KHR_draco_mesh_compression;
          if ("object" !== typeof qQ || null === qQ) continue;
          const oQ = null === (kQ = QQ.bufferViews) || void 0 === kQ ? void 0 : kQ[qQ.bufferView];
          if (null === FQ || void 0 === oQ) return YQ;
          const xQ = null !== (vQ = oQ.byteOffset) && void 0 !== vQ ? vQ : 0,
            AQ = HQ(FQ.subarray(xQ, xQ + oQ.byteLength));
          if (null === AQ && !wQ) continue;
          const tQ = null !== (mQ = QQ.accessors) && void 0 !== mQ ? mQ : [],
            eQ = null === (uQ = tQ[LQ.attributes.POSITION]) || void 0 === uQ ? void 0 : uQ.count,
            MQ = void 0 === LQ.indices ? 0 : null === (bQ = tQ[LQ.indices]) || void 0 === bQ ? void 0 : bQ.count;
          if (null === AQ || void 0 === eQ || void 0 === MQ || 3 * AQ.faces !== MQ || AQ.vertices > eQ) return YQ
        }
      }
      return null
    }
    const YQ = "has a Draco stream whose counts don't match its accessors";

    function xQ(QQ) {
      var FQ;
      return null !== (FQ = QQ.name) && void 0 !== FQ ? FQ : QQ.fromFolderName || QQ.id
    }

    function AQ(QQ, FQ, wQ) {
      return `Texture pack "${QQ}": model "${FQ}" was not loaded because it ${wQ}. The default model is used instead.`
    }

    function tQ(QQ, FQ, wQ) {
      let {
        strictDraco: oQ = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const DQ = {};
      for (const [kQ, vQ] of Object.entries(FQ)) {
        let FQ;
        if (vQ.startsWith("data:")) try {
          const QQ = new Uint8Array((0, qQ.m)(vQ));
          if (FQ = (0, LQ.c)(QQ), null === FQ) {
            const {
              json: wQ,
              bin: LQ
            } = (0, qQ.q)(QQ);
            FQ = bQ(wQ, LQ, oQ)
          }
        } catch {
          FQ = "is not a binary glTF 2.0 file"
        } else FQ = "loads data from outside the file";
        FQ && (DQ[kQ] = FQ, wQ && console.warn(AQ(QQ, kQ, FQ)))
      }
      return DQ
    }

    function eQ(QQ, FQ) {
      const wQ = Object.keys(FQ);
      if (0 === wQ.length) return null;
      if (1 === wQ.length) return AQ(QQ, wQ[0], FQ[wQ[0]]);
      const LQ = wQ.map((QQ => `"${QQ}" ${FQ[QQ]}`)).join("; ");
      return `Texture pack "${QQ}": ${wQ.length} models were not loaded (${LQ}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);