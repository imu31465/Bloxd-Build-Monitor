export const id = 183;
export const ids = [183];
export const modules = {
  33032: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      packDisplayName: () => mB,
      packModelMessage: () => ec,
      packModelSummary: () => Sc,
      refusedPackModels: () => tB
    });
    var Vc = nc(33039),
      Ic = nc(33044);
    const rB = "DRACO",
      uc = 0,
      sc = 1,
      Mc = 0,
      Pc = 1,
      qB = 32768;

    function Oc(cB) {
      const Bc = new DataView(cB.buffer, cB.byteOffset, cB.byteLength);
      let nc = 0;
      const Vc = () => {
          if (nc >= cB.byteLength) throw new RangeError("past the stream");
          return cB[nc++]
        },
        Ic = () => {
          if (nc + 4 > cB.byteLength) throw new RangeError("past the stream");
          const Vc = Bc.getUint32(nc, !0);
          return nc += 4, Vc
        },
        Oc = () => {
          let cB = 0;
          for (let Bc = 0; Bc < 35; Bc += 7) {
            const nc = Vc();
            if (cB += (127 & nc) * 2 ** Bc, 0 === (128 & nc)) return cB
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let cB = 0; cB < rB.length; cB++)
          if (Vc() !== rB.charCodeAt(cB)) return null;
        const Bc = Vc(),
          Tc = Vc(),
          fc = Vc(),
          mB = Vc(),
          ec = Vc() | Vc() << 8;
        if (2 !== Bc) return null;
        0 !== (ec & qB) && function(cB, Bc, nc) {
          const Vc = () => {
              Bc(nc())
            },
            Ic = () => {
              let nc = 1,
                Ic = !0;
              for (; nc > 0;) {
                nc--, Ic || Vc(), Ic = !1;
                const rB = cB();
                for (let nc = 0; nc < rB; nc++) Vc(), Bc(cB());
                nc += cB()
              }
            },
            rB = cB();
          for (let uc = 0; uc < rB; uc++) cB(), Ic();
          Ic()
        }(Oc, (Bc => {
          if (nc + Bc > cB.byteLength) throw new RangeError("past the stream");
          nc += Bc
        }), Vc);
        const tB = Tc < 2 ? Ic : Oc;
        if (fc === uc) return {
          faces: 0,
          vertices: Ic()
        };
        if (fc !== sc) return null;
        if (mB === Mc) {
          return {
            faces: tB(),
            vertices: tB()
          }
        }
        if (mB !== Pc) return null;
        Vc(), Tc < 2 && Oc();
        const Sc = Oc();
        return {
          faces: Oc(),
          vertices: Sc
        }
      } catch {
        return null
      }
    }

    function Tc(cB, Bc, nc) {
      var Vc, Ic;
      if (null === (Vc = null === (Ic = cB.extensionsUsed) || void 0 === Ic ? void 0 : Ic.includes("KHR_draco_mesh_compression")) || void 0 === Vc || !Vc) return null;
      for (const mB of null !== (rB = cB.meshes) && void 0 !== rB ? rB : []) {
        var rB;
        for (const Vc of mB.primitives) {
          var uc, sc, Mc, Pc, qB, Tc;
          const Ic = null === (uc = Vc.extensions) || void 0 === uc ? void 0 : uc.KHR_draco_mesh_compression;
          if ("object" !== typeof Ic || null === Ic) continue;
          const rB = null === (sc = cB.bufferViews) || void 0 === sc ? void 0 : sc[Ic.bufferView];
          if (null === Bc || void 0 === rB) return fc;
          const mB = null !== (Mc = rB.byteOffset) && void 0 !== Mc ? Mc : 0,
            ec = Oc(Bc.subarray(mB, mB + rB.byteLength));
          if (null === ec && !nc) continue;
          const tB = null !== (Pc = cB.accessors) && void 0 !== Pc ? Pc : [],
            Sc = null === (qB = tB[Vc.attributes.POSITION]) || void 0 === qB ? void 0 : qB.count,
            yB = void 0 === Vc.indices ? 0 : null === (Tc = tB[Vc.indices]) || void 0 === Tc ? void 0 : Tc.count;
          if (null === ec || void 0 === Sc || void 0 === yB || 3 * ec.faces !== yB || ec.vertices > Sc) return fc
        }
      }
      return null
    }
    const fc = "has a Draco stream whose counts don't match its accessors";

    function mB(cB) {
      var Bc;
      return null !== (Bc = cB.name) && void 0 !== Bc ? Bc : cB.fromFolderName || cB.id
    }

    function ec(cB, Bc, nc) {
      return `Texture pack "${cB}": model "${Bc}" was not loaded because it ${nc}. The default model is used instead.`
    }

    function tB(cB, Bc, nc) {
      let {
        strictDraco: rB = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const uc = {};
      for (const [sc, Mc] of Object.entries(Bc)) {
        let Bc;
        if (Mc.startsWith("data:")) try {
          const cB = new Uint8Array((0, Ic.p)(Mc));
          if (Bc = (0, Vc.c)(cB), null === Bc) {
            const {
              json: nc,
              bin: Vc
            } = (0, Ic.x)(cB);
            Bc = Tc(nc, Vc, rB)
          }
        } catch {
          Bc = "is not a binary glTF 2.0 file"
        } else Bc = "loads data from outside the file";
        Bc && (uc[sc] = Bc, nc && console.warn(ec(cB, sc, Bc)))
      }
      return uc
    }

    function Sc(cB, Bc) {
      const nc = Object.keys(Bc);
      if (0 === nc.length) return null;
      if (1 === nc.length) return ec(cB, nc[0], Bc[nc[0]]);
      const Vc = nc.map((cB => `"${cB}" ${Bc[cB]}`)).join("; ");
      return `Texture pack "${cB}": ${nc.length} models were not loaded (${Vc}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);