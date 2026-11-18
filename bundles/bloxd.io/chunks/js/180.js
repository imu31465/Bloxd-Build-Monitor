export const id = 180;
export const ids = [180];
export const modules = {
  8610: (JJ, cJ, ZJ) => {
    ZJ.r(cJ), ZJ.d(cJ, {
      packDisplayName: () => nJ,
      packModelMessage: () => GJ,
      packModelSummary: () => xJ,
      refusedPackModels: () => fJ
    });
    var FJ = ZJ(8615),
      UJ = ZJ(8620);
    const eJ = "DRACO",
      XJ = 0,
      AJ = 1,
      qJ = 0,
      jJ = 1,
      YJ = 32768;

    function hJ(JJ) {
      const cJ = new DataView(JJ.buffer, JJ.byteOffset, JJ.byteLength);
      let ZJ = 0;
      const FJ = () => {
          if (ZJ >= JJ.byteLength) throw new RangeError("past the stream");
          return JJ[ZJ++]
        },
        UJ = () => {
          if (ZJ + 4 > JJ.byteLength) throw new RangeError("past the stream");
          const FJ = cJ.getUint32(ZJ, !0);
          return ZJ += 4, FJ
        },
        hJ = () => {
          let JJ = 0;
          for (let cJ = 0; cJ < 35; cJ += 7) {
            const ZJ = FJ();
            if (JJ += (127 & ZJ) * 2 ** cJ, 0 === (128 & ZJ)) return JJ
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let JJ = 0; JJ < eJ.length; JJ++)
          if (FJ() !== eJ.charCodeAt(JJ)) return null;
        const cJ = FJ(),
          DJ = FJ(),
          sJ = FJ(),
          nJ = FJ(),
          GJ = FJ() | FJ() << 8;
        if (2 !== cJ) return null;
        0 !== (GJ & YJ) && function(JJ, cJ, ZJ) {
          const FJ = () => {
              cJ(ZJ())
            },
            UJ = () => {
              let ZJ = 1,
                UJ = !0;
              for (; ZJ > 0;) {
                ZJ--, UJ || FJ(), UJ = !1;
                const eJ = JJ();
                for (let ZJ = 0; ZJ < eJ; ZJ++) FJ(), cJ(JJ());
                ZJ += JJ()
              }
            },
            eJ = JJ();
          for (let XJ = 0; XJ < eJ; XJ++) JJ(), UJ();
          UJ()
        }(hJ, (cJ => {
          if (ZJ + cJ > JJ.byteLength) throw new RangeError("past the stream");
          ZJ += cJ
        }), FJ);
        const fJ = DJ < 2 ? UJ : hJ;
        if (sJ === XJ) return {
          faces: 0,
          vertices: UJ()
        };
        if (sJ !== AJ) return null;
        if (nJ === qJ) {
          return {
            faces: fJ(),
            vertices: fJ()
          }
        }
        if (nJ !== jJ) return null;
        FJ(), DJ < 2 && hJ();
        const xJ = hJ();
        return {
          faces: hJ(),
          vertices: xJ
        }
      } catch {
        return null
      }
    }

    function DJ(JJ, cJ, ZJ) {
      var FJ, UJ;
      if (null === (FJ = null === (UJ = JJ.extensionsUsed) || void 0 === UJ ? void 0 : UJ.includes("KHR_draco_mesh_compression")) || void 0 === FJ || !FJ) return null;
      for (const nJ of null !== (eJ = JJ.meshes) && void 0 !== eJ ? eJ : []) {
        var eJ;
        for (const FJ of nJ.primitives) {
          var XJ, AJ, qJ, jJ, YJ, DJ;
          const UJ = null === (XJ = FJ.extensions) || void 0 === XJ ? void 0 : XJ.KHR_draco_mesh_compression;
          if ("object" !== typeof UJ || null === UJ) continue;
          const eJ = null === (AJ = JJ.bufferViews) || void 0 === AJ ? void 0 : AJ[UJ.bufferView];
          if (null === cJ || void 0 === eJ) return sJ;
          const nJ = null !== (qJ = eJ.byteOffset) && void 0 !== qJ ? qJ : 0,
            GJ = hJ(cJ.subarray(nJ, nJ + eJ.byteLength));
          if (null === GJ && !ZJ) continue;
          const fJ = null !== (jJ = JJ.accessors) && void 0 !== jJ ? jJ : [],
            xJ = null === (YJ = fJ[FJ.attributes.POSITION]) || void 0 === YJ ? void 0 : YJ.count,
            rJ = void 0 === FJ.indices ? 0 : null === (DJ = fJ[FJ.indices]) || void 0 === DJ ? void 0 : DJ.count;
          if (null === GJ || void 0 === xJ || void 0 === rJ || 3 * GJ.faces !== rJ || GJ.vertices > xJ) return sJ
        }
      }
      return null
    }
    const sJ = "has a Draco stream whose counts don't match its accessors";

    function nJ(JJ) {
      var cJ;
      return null !== (cJ = JJ.name) && void 0 !== cJ ? cJ : JJ.fromFolderName || JJ.id
    }

    function GJ(JJ, cJ, ZJ) {
      return `Texture pack "${JJ}": model "${cJ}" was not loaded because it ${ZJ}. The default model is used instead.`
    }

    function fJ(JJ, cJ, ZJ) {
      let {
        strictDraco: eJ = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const XJ = {};
      for (const [AJ, qJ] of Object.entries(cJ)) {
        let cJ;
        if (qJ.startsWith("data:")) try {
          const JJ = new Uint8Array((0, UJ.w)(qJ));
          if (cJ = (0, FJ.d)(JJ), null === cJ) {
            const {
              json: ZJ,
              bin: FJ
            } = (0, UJ.F)(JJ);
            cJ = DJ(ZJ, FJ, eJ)
          }
        } catch {
          cJ = "is not a binary glTF 2.0 file"
        } else cJ = "loads data from outside the file";
        cJ && (XJ[AJ] = cJ, ZJ && console.warn(GJ(JJ, AJ, cJ)))
      }
      return XJ
    }

    function xJ(JJ, cJ) {
      const ZJ = Object.keys(cJ);
      if (0 === ZJ.length) return null;
      if (1 === ZJ.length) return GJ(JJ, ZJ[0], cJ[ZJ[0]]);
      const FJ = ZJ.map((JJ => `"${JJ}" ${cJ[JJ]}`)).join("; ");
      return `Texture pack "${JJ}": ${ZJ.length} models were not loaded (${FJ}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const JJ in modules) Object.freeze(modules[JJ]);