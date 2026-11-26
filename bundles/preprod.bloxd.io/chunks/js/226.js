export const id = 226;
export const ids = [226];
export const modules = {
  35061: (HH, BH, LH) => {
    LH.r(BH), LH.d(BH, {
      packDisplayName: () => QH,
      packModelMessage: () => WH,
      packModelSummary: () => xH,
      refusedPackModels: () => MH
    });
    var AH = LH(35067),
      rH = LH(35071);
    const SH = "DRACO",
      hH = 0,
      tH = 1,
      zH = 0,
      CH = 1,
      EH = 32768;

    function XH(HH) {
      const BH = new DataView(HH.buffer, HH.byteOffset, HH.byteLength);
      let LH = 0;
      const AH = () => {
          if (LH >= HH.byteLength) throw new RangeError("past the stream");
          return HH[LH++]
        },
        rH = () => {
          if (LH + 4 > HH.byteLength) throw new RangeError("past the stream");
          const AH = BH.getUint32(LH, !0);
          return LH += 4, AH
        },
        XH = () => {
          let HH = 0;
          for (let BH = 0; BH < 35; BH += 7) {
            const LH = AH();
            if (HH += (127 & LH) * 2 ** BH, 0 === (128 & LH)) return HH
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let HH = 0; HH < SH.length; HH++)
          if (AH() !== SH.charCodeAt(HH)) return null;
        const BH = AH(),
          GH = AH(),
          YH = AH(),
          uH = AH(),
          QH = AH() | AH() << 8;
        if (2 !== BH) return null;
        0 !== (QH & EH) && function(HH, BH, LH) {
          const AH = () => {
              BH(LH())
            },
            rH = () => {
              let LH = 1,
                rH = !0;
              for (; LH > 0;) {
                LH--, rH || AH(), rH = !1;
                const SH = HH();
                for (let LH = 0; LH < SH; LH++) AH(), BH(HH());
                LH += HH()
              }
            },
            SH = HH();
          for (let hH = 0; hH < SH; hH++) HH(), rH();
          rH()
        }(XH, (BH => {
          if (LH + BH > HH.byteLength) throw new RangeError("past the stream");
          LH += BH
        }), AH);
        const WH = GH < 2 ? rH : XH;
        if (YH === hH) return {
          faces: 0,
          vertices: rH(),
          minor: GH
        };
        if (YH !== tH) return null;
        if (uH === zH) {
          return {
            faces: WH(),
            vertices: WH(),
            minor: GH
          }
        }
        if (uH !== CH) return null;
        AH(), GH < 2 && XH();
        const MH = XH();
        return {
          faces: XH(),
          vertices: MH,
          minor: GH
        }
      } catch {
        return null
      }
    }

    function GH(HH, BH, LH) {
      var AH, rH;
      if (null === (AH = null === (rH = HH.extensionsUsed) || void 0 === rH ? void 0 : rH.includes("KHR_draco_mesh_compression")) || void 0 === AH || !AH) return null;
      for (const QH of null !== (SH = HH.meshes) && void 0 !== SH ? SH : []) {
        var SH;
        for (const AH of QH.primitives) {
          var hH, tH, zH, CH, EH, GH;
          const rH = null === (hH = AH.extensions) || void 0 === hH ? void 0 : hH.KHR_draco_mesh_compression;
          if ("object" !== typeof rH || null === rH) continue;
          const SH = null === (tH = HH.bufferViews) || void 0 === tH ? void 0 : tH[rH.bufferView];
          if (null === BH || void 0 === SH) return YH;
          const QH = null !== (zH = SH.byteOffset) && void 0 !== zH ? zH : 0,
            WH = XH(BH.subarray(QH, QH + SH.byteLength));
          if (null === WH && !LH) continue;
          const MH = null !== (CH = HH.accessors) && void 0 !== CH ? CH : [],
            xH = null === (EH = MH[AH.attributes.POSITION]) || void 0 === EH ? void 0 : EH.count,
            vH = void 0 === AH.indices ? 0 : null === (GH = MH[AH.indices]) || void 0 === GH ? void 0 : GH.count;
          if (null === WH || void 0 === xH || void 0 === vH || 3 * WH.faces !== vH || WH.vertices > xH) return YH;
          if (LH && WH.minor < 2) return uH
        }
      }
      return null
    }
    const YH = "has a Draco stream whose counts don't match its accessors",
      uH = "has a Draco stream too old to decode: export it again";

    function QH(HH) {
      var BH;
      return null !== (BH = HH.name) && void 0 !== BH ? BH : HH.fromFolderName || HH.id
    }

    function WH(HH, BH, LH) {
      return `Texture pack "${HH}": model "${BH}" was not loaded because it ${LH}. The default model is used instead.`
    }

    function MH(HH, BH, LH) {
      let {
        strictDraco: SH = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const hH = {};
      for (const [tH, zH] of Object.entries(BH)) {
        let BH;
        if (zH.startsWith("data:")) try {
          const HH = new Uint8Array((0, rH.q)(zH));
          if (BH = (0, AH.b)(HH), null === BH) {
            const {
              json: LH,
              bin: AH
            } = (0, rH.z)(HH);
            BH = GH(LH, AH, SH)
          }
        } catch {
          BH = "is not a binary glTF 2.0 file"
        } else BH = "loads data from outside the file";
        BH && (hH[tH] = BH, LH && console.warn(WH(HH, tH, BH)))
      }
      return hH
    }

    function xH(HH, BH) {
      const LH = Object.keys(BH);
      if (0 === LH.length) return null;
      if (1 === LH.length) return WH(HH, LH[0], BH[LH[0]]);
      const AH = LH.map((HH => `"${HH}" ${BH[HH]}`)).join("; ");
      return `Texture pack "${HH}": ${LH.length} models were not loaded (${AH}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);