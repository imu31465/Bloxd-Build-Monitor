export const id = 189;
export const ids = [189];
export const modules = {
  8800: (YY, rY, DY) => {
    DY.r(rY), DY.d(rY, {
      packDisplayName: () => yY,
      packModelMessage: () => QY,
      packModelSummary: () => WY,
      refusedPackModels: () => oY
    });
    var FY = DY(8807),
      AY = DY(8809);
    const IY = "DRACO",
      RY = 0,
      OY = 1,
      gY = 0,
      aY = 1,
      vY = 32768;

    function uY(YY) {
      const rY = new DataView(YY.buffer, YY.byteOffset, YY.byteLength);
      let DY = 0;
      const FY = () => {
          if (DY >= YY.byteLength) throw new RangeError("past the stream");
          return YY[DY++]
        },
        AY = () => {
          if (DY + 4 > YY.byteLength) throw new RangeError("past the stream");
          const FY = rY.getUint32(DY, !0);
          return DY += 4, FY
        },
        uY = () => {
          let YY = 0;
          for (let rY = 0; rY < 35; rY += 7) {
            const DY = FY();
            if (YY += (127 & DY) * 2 ** rY, 0 === (128 & DY)) return YY
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let YY = 0; YY < IY.length; YY++)
          if (FY() !== IY.charCodeAt(YY)) return null;
        const rY = FY(),
          sY = FY(),
          iY = FY(),
          yY = FY(),
          QY = FY() | FY() << 8;
        if (2 !== rY) return null;
        0 !== (QY & vY) && function(YY, rY, DY) {
          const FY = () => {
              rY(DY())
            },
            AY = () => {
              let DY = 1,
                AY = !0;
              for (; DY > 0;) {
                DY--, AY || FY(), AY = !1;
                const IY = YY();
                for (let DY = 0; DY < IY; DY++) FY(), rY(YY());
                DY += YY()
              }
            },
            IY = YY();
          for (let RY = 0; RY < IY; RY++) YY(), AY();
          AY()
        }(uY, (rY => {
          if (DY + rY > YY.byteLength) throw new RangeError("past the stream");
          DY += rY
        }), FY);
        const oY = sY < 2 ? AY : uY;
        if (iY === RY) return {
          faces: 0,
          vertices: AY()
        };
        if (iY !== OY) return null;
        if (yY === gY) {
          return {
            faces: oY(),
            vertices: oY()
          }
        }
        if (yY !== aY) return null;
        FY(), sY < 2 && uY();
        const WY = uY();
        return {
          faces: uY(),
          vertices: WY
        }
      } catch {
        return null
      }
    }

    function sY(YY, rY, DY) {
      var FY, AY;
      if (null === (FY = null === (AY = YY.extensionsUsed) || void 0 === AY ? void 0 : AY.includes("KHR_draco_mesh_compression")) || void 0 === FY || !FY) return null;
      for (const yY of null !== (IY = YY.meshes) && void 0 !== IY ? IY : []) {
        var IY;
        for (const FY of yY.primitives) {
          var RY, OY, gY, aY, vY, sY;
          const AY = null === (RY = FY.extensions) || void 0 === RY ? void 0 : RY.KHR_draco_mesh_compression;
          if ("object" !== typeof AY || null === AY) continue;
          const IY = null === (OY = YY.bufferViews) || void 0 === OY ? void 0 : OY[AY.bufferView];
          if (null === rY || void 0 === IY) return iY;
          const yY = null !== (gY = IY.byteOffset) && void 0 !== gY ? gY : 0,
            QY = uY(rY.subarray(yY, yY + IY.byteLength));
          if (null === QY && !DY) continue;
          const oY = null !== (aY = YY.accessors) && void 0 !== aY ? aY : [],
            WY = null === (vY = oY[FY.attributes.POSITION]) || void 0 === vY ? void 0 : vY.count,
            EY = void 0 === FY.indices ? 0 : null === (sY = oY[FY.indices]) || void 0 === sY ? void 0 : sY.count;
          if (null === QY || void 0 === WY || void 0 === EY || 3 * QY.faces !== EY || QY.vertices > WY) return iY
        }
      }
      return null
    }
    const iY = "has a Draco stream whose counts don't match its accessors";

    function yY(YY) {
      var rY;
      return null !== (rY = YY.name) && void 0 !== rY ? rY : YY.fromFolderName || YY.id
    }

    function QY(YY, rY, DY) {
      return `Texture pack "${YY}": model "${rY}" was not loaded because it ${DY}. The default model is used instead.`
    }

    function oY(YY, rY, DY) {
      let {
        strictDraco: IY = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const RY = {};
      for (const [OY, gY] of Object.entries(rY)) {
        let rY;
        if (gY.startsWith("data:")) try {
          const YY = new Uint8Array((0, AY.u)(gY));
          if (rY = (0, FY.d)(YY), null === rY) {
            const {
              json: DY,
              bin: FY
            } = (0, AY.B)(YY);
            rY = sY(DY, FY, IY)
          }
        } catch {
          rY = "is not a binary glTF 2.0 file"
        } else rY = "loads data from outside the file";
        rY && (RY[OY] = rY, DY && console.warn(QY(YY, OY, rY)))
      }
      return RY
    }

    function WY(YY, rY) {
      const DY = Object.keys(rY);
      if (0 === DY.length) return null;
      if (1 === DY.length) return QY(YY, DY[0], rY[DY[0]]);
      const FY = DY.map((YY => `"${YY}" ${rY[YY]}`)).join("; ");
      return `Texture pack "${YY}": ${DY.length} models were not loaded (${FY}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const YY in modules) Object.freeze(modules[YY]);