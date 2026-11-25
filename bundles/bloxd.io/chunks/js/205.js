export const id = 205;
export const ids = [205];
export const modules = {
  34256: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      packDisplayName: () => NB,
      packModelMessage: () => gB,
      packModelSummary: () => yB,
      refusedPackModels: () => qB
    });
    var TB = ZB(34261),
      JB = ZB(34269);
    const oB = "DRACO",
      GB = 0,
      vB = 1,
      kB = 0,
      cB = 1,
      nB = 32768;

    function hB(BB) {
      const IB = new DataView(BB.buffer, BB.byteOffset, BB.byteLength);
      let ZB = 0;
      const TB = () => {
          if (ZB >= BB.byteLength) throw new RangeError("past the stream");
          return BB[ZB++]
        },
        JB = () => {
          if (ZB + 4 > BB.byteLength) throw new RangeError("past the stream");
          const TB = IB.getUint32(ZB, !0);
          return ZB += 4, TB
        },
        hB = () => {
          let BB = 0;
          for (let IB = 0; IB < 35; IB += 7) {
            const ZB = TB();
            if (BB += (127 & ZB) * 2 ** IB, 0 === (128 & ZB)) return BB
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let BB = 0; BB < oB.length; BB++)
          if (TB() !== oB.charCodeAt(BB)) return null;
        const IB = TB(),
          zB = TB(),
          FB = TB(),
          NB = TB(),
          gB = TB() | TB() << 8;
        if (2 !== IB) return null;
        0 !== (gB & nB) && function(BB, IB, ZB) {
          const TB = () => {
              IB(ZB())
            },
            JB = () => {
              let ZB = 1,
                JB = !0;
              for (; ZB > 0;) {
                ZB--, JB || TB(), JB = !1;
                const oB = BB();
                for (let ZB = 0; ZB < oB; ZB++) TB(), IB(BB());
                ZB += BB()
              }
            },
            oB = BB();
          for (let GB = 0; GB < oB; GB++) BB(), JB();
          JB()
        }(hB, (IB => {
          if (ZB + IB > BB.byteLength) throw new RangeError("past the stream");
          ZB += IB
        }), TB);
        const qB = zB < 2 ? JB : hB;
        if (FB === GB) return {
          faces: 0,
          vertices: JB()
        };
        if (FB !== vB) return null;
        if (NB === kB) {
          return {
            faces: qB(),
            vertices: qB()
          }
        }
        if (NB !== cB) return null;
        TB(), zB < 2 && hB();
        const yB = hB();
        return {
          faces: hB(),
          vertices: yB
        }
      } catch {
        return null
      }
    }

    function zB(BB, IB, ZB) {
      var TB, JB;
      if (null === (TB = null === (JB = BB.extensionsUsed) || void 0 === JB ? void 0 : JB.includes("KHR_draco_mesh_compression")) || void 0 === TB || !TB) return null;
      for (const NB of null !== (oB = BB.meshes) && void 0 !== oB ? oB : []) {
        var oB;
        for (const TB of NB.primitives) {
          var GB, vB, kB, cB, nB, zB;
          const JB = null === (GB = TB.extensions) || void 0 === GB ? void 0 : GB.KHR_draco_mesh_compression;
          if ("object" !== typeof JB || null === JB) continue;
          const oB = null === (vB = BB.bufferViews) || void 0 === vB ? void 0 : vB[JB.bufferView];
          if (null === IB || void 0 === oB) return FB;
          const NB = null !== (kB = oB.byteOffset) && void 0 !== kB ? kB : 0,
            gB = hB(IB.subarray(NB, NB + oB.byteLength));
          if (null === gB && !ZB) continue;
          const qB = null !== (cB = BB.accessors) && void 0 !== cB ? cB : [],
            yB = null === (nB = qB[TB.attributes.POSITION]) || void 0 === nB ? void 0 : nB.count,
            UB = void 0 === TB.indices ? 0 : null === (zB = qB[TB.indices]) || void 0 === zB ? void 0 : zB.count;
          if (null === gB || void 0 === yB || void 0 === UB || 3 * gB.faces !== UB || gB.vertices > yB) return FB
        }
      }
      return null
    }
    const FB = "has a Draco stream whose counts don't match its accessors";

    function NB(BB) {
      var IB;
      return null !== (IB = BB.name) && void 0 !== IB ? IB : BB.fromFolderName || BB.id
    }

    function gB(BB, IB, ZB) {
      return `Texture pack "${BB}": model "${IB}" was not loaded because it ${ZB}. The default model is used instead.`
    }

    function qB(BB, IB, ZB) {
      let {
        strictDraco: oB = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const GB = {};
      for (const [vB, kB] of Object.entries(IB)) {
        let IB;
        if (kB.startsWith("data:")) try {
          const BB = new Uint8Array((0, JB.u)(kB));
          if (IB = (0, TB.b)(BB), null === IB) {
            const {
              json: ZB,
              bin: TB
            } = (0, JB.C)(BB);
            IB = zB(ZB, TB, oB)
          }
        } catch {
          IB = "is not a binary glTF 2.0 file"
        } else IB = "loads data from outside the file";
        IB && (GB[vB] = IB, ZB && console.warn(gB(BB, vB, IB)))
      }
      return GB
    }

    function yB(BB, IB) {
      const ZB = Object.keys(IB);
      if (0 === ZB.length) return null;
      if (1 === ZB.length) return gB(BB, ZB[0], IB[ZB[0]]);
      const TB = ZB.map((BB => `"${BB}" ${IB[BB]}`)).join("; ");
      return `Texture pack "${BB}": ${ZB.length} models were not loaded (${TB}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);