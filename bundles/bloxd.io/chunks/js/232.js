export const id = 232;
export const ids = [232];
export const modules = {
  35238: (RR, JR, GR) => {
    GR.r(JR), GR.d(JR, {
      packDisplayName: () => aR,
      packModelMessage: () => LR,
      packModelSummary: () => UR,
      refusedPackModels: () => nR
    });
    var yR = GR(35244),
      tR = GR(35252);
    const uR = "DRACO",
      ZR = 0,
      qR = 1,
      iR = 0,
      fR = 1,
      VR = 32768;

    function KR(RR) {
      const JR = new DataView(RR.buffer, RR.byteOffset, RR.byteLength);
      let GR = 0;
      const yR = () => {
          if (GR >= RR.byteLength) throw new RangeError("past the stream");
          return RR[GR++]
        },
        tR = () => {
          if (GR + 4 > RR.byteLength) throw new RangeError("past the stream");
          const yR = JR.getUint32(GR, !0);
          return GR += 4, yR
        },
        KR = () => {
          let RR = 0;
          for (let JR = 0; JR < 35; JR += 7) {
            const GR = yR();
            if (RR += (127 & GR) * 2 ** JR, 0 === (128 & GR)) return RR
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let RR = 0; RR < uR.length; RR++)
          if (yR() !== uR.charCodeAt(RR)) return null;
        const JR = yR(),
          wR = yR(),
          rR = yR(),
          eR = yR(),
          aR = yR() | yR() << 8;
        if (2 !== JR) return null;
        0 !== (aR & VR) && function(RR, JR, GR) {
          const yR = () => {
              JR(GR())
            },
            tR = () => {
              let GR = 1,
                tR = !0;
              for (; GR > 0;) {
                GR--, tR || yR(), tR = !1;
                const uR = RR();
                for (let GR = 0; GR < uR; GR++) yR(), JR(RR());
                GR += RR()
              }
            },
            uR = RR();
          for (let ZR = 0; ZR < uR; ZR++) RR(), tR();
          tR()
        }(KR, (JR => {
          if (GR + JR > RR.byteLength) throw new RangeError("past the stream");
          GR += JR
        }), yR);
        const LR = wR < 2 ? tR : KR;
        if (rR === ZR) return {
          faces: 0,
          vertices: tR(),
          minor: wR
        };
        if (rR !== qR) return null;
        if (eR === iR) {
          return {
            faces: LR(),
            vertices: LR(),
            minor: wR
          }
        }
        if (eR !== fR) return null;
        yR(), wR < 2 && KR();
        const nR = KR();
        return {
          faces: KR(),
          vertices: nR,
          minor: wR
        }
      } catch {
        return null
      }
    }

    function wR(RR, JR, GR) {
      var yR, tR;
      if (null === (yR = null === (tR = RR.extensionsUsed) || void 0 === tR ? void 0 : tR.includes("KHR_draco_mesh_compression")) || void 0 === yR || !yR) return null;
      for (const aR of null !== (uR = RR.meshes) && void 0 !== uR ? uR : []) {
        var uR;
        for (const yR of aR.primitives) {
          var ZR, qR, iR, fR, VR, wR;
          const tR = null === (ZR = yR.extensions) || void 0 === ZR ? void 0 : ZR.KHR_draco_mesh_compression;
          if ("object" !== typeof tR || null === tR) continue;
          const uR = null === (qR = RR.bufferViews) || void 0 === qR ? void 0 : qR[tR.bufferView];
          if (null === JR || void 0 === uR) return rR;
          const aR = null !== (iR = uR.byteOffset) && void 0 !== iR ? iR : 0,
            LR = KR(JR.subarray(aR, aR + uR.byteLength));
          if (null === LR && !GR) continue;
          const nR = null !== (fR = RR.accessors) && void 0 !== fR ? fR : [],
            UR = null === (VR = nR[yR.attributes.POSITION]) || void 0 === VR ? void 0 : VR.count,
            WR = void 0 === yR.indices ? 0 : null === (wR = nR[yR.indices]) || void 0 === wR ? void 0 : wR.count;
          if (null === LR || void 0 === UR || void 0 === WR || 3 * LR.faces !== WR || LR.vertices > UR) return rR;
          if (GR && LR.minor < 2) return eR
        }
      }
      return null
    }
    const rR = "has a Draco stream whose counts don't match its accessors",
      eR = "has a Draco stream too old to decode: export it again";

    function aR(RR) {
      var JR;
      return null !== (JR = RR.name) && void 0 !== JR ? JR : RR.fromFolderName || RR.id
    }

    function LR(RR, JR, GR) {
      return `Texture pack "${RR}": model "${JR}" was not loaded because it ${GR}. The default model is used instead.`
    }

    function nR(RR, JR, GR) {
      let {
        strictDraco: uR = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const ZR = {};
      for (const [qR, iR] of Object.entries(JR)) {
        let JR;
        if (iR.startsWith("data:")) try {
          const RR = new Uint8Array((0, tR.p)(iR));
          if (JR = (0, yR.b)(RR), null === JR) {
            const {
              json: GR,
              bin: yR
            } = (0, tR.y)(RR);
            JR = wR(GR, yR, uR)
          }
        } catch {
          JR = "is not a binary glTF 2.0 file"
        } else JR = "loads data from outside the file";
        JR && (ZR[qR] = JR, GR && console.warn(LR(RR, qR, JR)))
      }
      return ZR
    }

    function UR(RR, JR) {
      const GR = Object.keys(JR);
      if (0 === GR.length) return null;
      if (1 === GR.length) return LR(RR, GR[0], JR[GR[0]]);
      const yR = GR.map((RR => `"${RR}" ${JR[RR]}`)).join("; ");
      return `Texture pack "${RR}": ${GR.length} models were not loaded (${yR}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const RR in modules) Object.freeze(modules[RR]);