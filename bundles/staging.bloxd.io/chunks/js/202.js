export const id = 202;
export const ids = [202];
export const modules = {
  34255: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      packDisplayName: () => ek,
      packModelMessage: () => wk,
      packModelSummary: () => Jk,
      refusedPackModels: () => Hk
    });
    var Xk = Ik(34257),
      Tk = Ik(34262);
    const ik = "DRACO",
      yk = 0,
      lk = 1,
      ak = 0,
      qk = 1,
      Lk = 32768;

    function tk(kk) {
      const Fk = new DataView(kk.buffer, kk.byteOffset, kk.byteLength);
      let Ik = 0;
      const Xk = () => {
          if (Ik >= kk.byteLength) throw new RangeError("past the stream");
          return kk[Ik++]
        },
        Tk = () => {
          if (Ik + 4 > kk.byteLength) throw new RangeError("past the stream");
          const Xk = Fk.getUint32(Ik, !0);
          return Ik += 4, Xk
        },
        tk = () => {
          let kk = 0;
          for (let Fk = 0; Fk < 35; Fk += 7) {
            const Ik = Xk();
            if (kk += (127 & Ik) * 2 ** Fk, 0 === (128 & Ik)) return kk
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let kk = 0; kk < ik.length; kk++)
          if (Xk() !== ik.charCodeAt(kk)) return null;
        const Fk = Xk(),
          Zk = Xk(),
          jk = Xk(),
          ek = Xk(),
          wk = Xk() | Xk() << 8;
        if (2 !== Fk) return null;
        0 !== (wk & Lk) && function(kk, Fk, Ik) {
          const Xk = () => {
              Fk(Ik())
            },
            Tk = () => {
              let Ik = 1,
                Tk = !0;
              for (; Ik > 0;) {
                Ik--, Tk || Xk(), Tk = !1;
                const ik = kk();
                for (let Ik = 0; Ik < ik; Ik++) Xk(), Fk(kk());
                Ik += kk()
              }
            },
            ik = kk();
          for (let yk = 0; yk < ik; yk++) kk(), Tk();
          Tk()
        }(tk, (Fk => {
          if (Ik + Fk > kk.byteLength) throw new RangeError("past the stream");
          Ik += Fk
        }), Xk);
        const Hk = Zk < 2 ? Tk : tk;
        if (jk === yk) return {
          faces: 0,
          vertices: Tk()
        };
        if (jk !== lk) return null;
        if (ek === ak) {
          return {
            faces: Hk(),
            vertices: Hk()
          }
        }
        if (ek !== qk) return null;
        Xk(), Zk < 2 && tk();
        const Jk = tk();
        return {
          faces: tk(),
          vertices: Jk
        }
      } catch {
        return null
      }
    }

    function Zk(kk, Fk, Ik) {
      var Xk, Tk;
      if (null === (Xk = null === (Tk = kk.extensionsUsed) || void 0 === Tk ? void 0 : Tk.includes("KHR_draco_mesh_compression")) || void 0 === Xk || !Xk) return null;
      for (const ek of null !== (ik = kk.meshes) && void 0 !== ik ? ik : []) {
        var ik;
        for (const Xk of ek.primitives) {
          var yk, lk, ak, qk, Lk, Zk;
          const Tk = null === (yk = Xk.extensions) || void 0 === yk ? void 0 : yk.KHR_draco_mesh_compression;
          if ("object" !== typeof Tk || null === Tk) continue;
          const ik = null === (lk = kk.bufferViews) || void 0 === lk ? void 0 : lk[Tk.bufferView];
          if (null === Fk || void 0 === ik) return jk;
          const ek = null !== (ak = ik.byteOffset) && void 0 !== ak ? ak : 0,
            wk = tk(Fk.subarray(ek, ek + ik.byteLength));
          if (null === wk && !Ik) continue;
          const Hk = null !== (qk = kk.accessors) && void 0 !== qk ? qk : [],
            Jk = null === (Lk = Hk[Xk.attributes.POSITION]) || void 0 === Lk ? void 0 : Lk.count,
            xk = void 0 === Xk.indices ? 0 : null === (Zk = Hk[Xk.indices]) || void 0 === Zk ? void 0 : Zk.count;
          if (null === wk || void 0 === Jk || void 0 === xk || 3 * wk.faces !== xk || wk.vertices > Jk) return jk
        }
      }
      return null
    }
    const jk = "has a Draco stream whose counts don't match its accessors";

    function ek(kk) {
      var Fk;
      return null !== (Fk = kk.name) && void 0 !== Fk ? Fk : kk.fromFolderName || kk.id
    }

    function wk(kk, Fk, Ik) {
      return `Texture pack "${kk}": model "${Fk}" was not loaded because it ${Ik}. The default model is used instead.`
    }

    function Hk(kk, Fk, Ik) {
      let {
        strictDraco: ik = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const yk = {};
      for (const [lk, ak] of Object.entries(Fk)) {
        let Fk;
        if (ak.startsWith("data:")) try {
          const kk = new Uint8Array((0, Tk.p)(ak));
          if (Fk = (0, Xk.b)(kk), null === Fk) {
            const {
              json: Ik,
              bin: Xk
            } = (0, Tk.v)(kk);
            Fk = Zk(Ik, Xk, ik)
          }
        } catch {
          Fk = "is not a binary glTF 2.0 file"
        } else Fk = "loads data from outside the file";
        Fk && (yk[lk] = Fk, Ik && console.warn(wk(kk, lk, Fk)))
      }
      return yk
    }

    function Jk(kk, Fk) {
      const Ik = Object.keys(Fk);
      if (0 === Ik.length) return null;
      if (1 === Ik.length) return wk(kk, Ik[0], Fk[Ik[0]]);
      const Xk = Ik.map((kk => `"${kk}" ${Fk[kk]}`)).join("; ");
      return `Texture pack "${kk}": ${Ik.length} models were not loaded (${Xk}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);