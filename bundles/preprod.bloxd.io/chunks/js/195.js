export const id = 195;
export const ids = [195];
export const modules = {
  9348: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      packDisplayName: () => aq,
      packModelMessage: () => Vq,
      packModelSummary: () => jq,
      refusedPackModels: () => dq
    });
    var Yq = gq(9351),
      lq = gq(9358);
    const Oq = "DRACO",
      mq = 0,
      xq = 1,
      Aq = 0,
      cq = 1,
      uq = 32768;

    function Bq(qq) {
      const Eq = new DataView(qq.buffer, qq.byteOffset, qq.byteLength);
      let gq = 0;
      const Yq = () => {
          if (gq >= qq.byteLength) throw new RangeError("past the stream");
          return qq[gq++]
        },
        lq = () => {
          if (gq + 4 > qq.byteLength) throw new RangeError("past the stream");
          const Yq = Eq.getUint32(gq, !0);
          return gq += 4, Yq
        },
        Bq = () => {
          let qq = 0;
          for (let Eq = 0; Eq < 35; Eq += 7) {
            const gq = Yq();
            if (qq += (127 & gq) * 2 ** Eq, 0 === (128 & gq)) return qq
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let qq = 0; qq < Oq.length; qq++)
          if (Yq() !== Oq.charCodeAt(qq)) return null;
        const Eq = Yq(),
          Wq = Yq(),
          Nq = Yq(),
          aq = Yq(),
          Vq = Yq() | Yq() << 8;
        if (2 !== Eq) return null;
        0 !== (Vq & uq) && function(qq, Eq, gq) {
          const Yq = () => {
              Eq(gq())
            },
            lq = () => {
              let gq = 1,
                lq = !0;
              for (; gq > 0;) {
                gq--, lq || Yq(), lq = !1;
                const Oq = qq();
                for (let gq = 0; gq < Oq; gq++) Yq(), Eq(qq());
                gq += qq()
              }
            },
            Oq = qq();
          for (let mq = 0; mq < Oq; mq++) qq(), lq();
          lq()
        }(Bq, (Eq => {
          if (gq + Eq > qq.byteLength) throw new RangeError("past the stream");
          gq += Eq
        }), Yq);
        const dq = Wq < 2 ? lq : Bq;
        if (Nq === mq) return {
          faces: 0,
          vertices: lq()
        };
        if (Nq !== xq) return null;
        if (aq === Aq) {
          return {
            faces: dq(),
            vertices: dq()
          }
        }
        if (aq !== cq) return null;
        Yq(), Wq < 2 && Bq();
        const jq = Bq();
        return {
          faces: Bq(),
          vertices: jq
        }
      } catch {
        return null
      }
    }

    function Wq(qq, Eq, gq) {
      var Yq, lq;
      if (null === (Yq = null === (lq = qq.extensionsUsed) || void 0 === lq ? void 0 : lq.includes("KHR_draco_mesh_compression")) || void 0 === Yq || !Yq) return null;
      for (const aq of null !== (Oq = qq.meshes) && void 0 !== Oq ? Oq : []) {
        var Oq;
        for (const Yq of aq.primitives) {
          var mq, xq, Aq, cq, uq, Wq;
          const lq = null === (mq = Yq.extensions) || void 0 === mq ? void 0 : mq.KHR_draco_mesh_compression;
          if ("object" !== typeof lq || null === lq) continue;
          const Oq = null === (xq = qq.bufferViews) || void 0 === xq ? void 0 : xq[lq.bufferView];
          if (null === Eq || void 0 === Oq) return Nq;
          const aq = null !== (Aq = Oq.byteOffset) && void 0 !== Aq ? Aq : 0,
            Vq = Bq(Eq.subarray(aq, aq + Oq.byteLength));
          if (null === Vq && !gq) continue;
          const dq = null !== (cq = qq.accessors) && void 0 !== cq ? cq : [],
            jq = null === (uq = dq[Yq.attributes.POSITION]) || void 0 === uq ? void 0 : uq.count,
            Hq = void 0 === Yq.indices ? 0 : null === (Wq = dq[Yq.indices]) || void 0 === Wq ? void 0 : Wq.count;
          if (null === Vq || void 0 === jq || void 0 === Hq || 3 * Vq.faces !== Hq || Vq.vertices > jq) return Nq
        }
      }
      return null
    }
    const Nq = "has a Draco stream whose counts don't match its accessors";

    function aq(qq) {
      var Eq;
      return null !== (Eq = qq.name) && void 0 !== Eq ? Eq : qq.fromFolderName || qq.id
    }

    function Vq(qq, Eq, gq) {
      return `Texture pack "${qq}": model "${Eq}" was not loaded because it ${gq}. The default model is used instead.`
    }

    function dq(qq, Eq, gq) {
      let {
        strictDraco: Oq = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const mq = {};
      for (const [xq, Aq] of Object.entries(Eq)) {
        let Eq;
        if (Aq.startsWith("data:")) try {
          const qq = new Uint8Array((0, lq.p)(Aq));
          if (Eq = (0, Yq.d)(qq), null === Eq) {
            const {
              json: gq,
              bin: Yq
            } = (0, lq.y)(qq);
            Eq = Wq(gq, Yq, Oq)
          }
        } catch {
          Eq = "is not a binary glTF 2.0 file"
        } else Eq = "loads data from outside the file";
        Eq && (mq[xq] = Eq, gq && console.warn(Vq(qq, xq, Eq)))
      }
      return mq
    }

    function jq(qq, Eq) {
      const gq = Object.keys(Eq);
      if (0 === gq.length) return null;
      if (1 === gq.length) return Vq(qq, gq[0], Eq[gq[0]]);
      const Yq = gq.map((qq => `"${qq}" ${Eq[qq]}`)).join("; ");
      return `Texture pack "${qq}": ${gq.length} models were not loaded (${Yq}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);