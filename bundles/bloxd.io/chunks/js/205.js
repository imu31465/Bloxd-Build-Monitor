export const id = 205;
export const ids = [205];
export const modules = {
  34484: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      packDisplayName: () => yp,
      packModelMessage: () => Up,
      packModelSummary: () => vp,
      refusedPackModels: () => wp
    });
    var Op = cp(34493),
      op = cp(34496);
    const Ip = "DRACO",
      Sp = 0,
      xp = 1,
      Lp = 0,
      Yp = 1,
      Dp = 32768;

    function Ap(pp) {
      const ip = new DataView(pp.buffer, pp.byteOffset, pp.byteLength);
      let cp = 0;
      const Op = () => {
          if (cp >= pp.byteLength) throw new RangeError("past the stream");
          return pp[cp++]
        },
        op = () => {
          if (cp + 4 > pp.byteLength) throw new RangeError("past the stream");
          const Op = ip.getUint32(cp, !0);
          return cp += 4, Op
        },
        Ap = () => {
          let pp = 0;
          for (let ip = 0; ip < 35; ip += 7) {
            const cp = Op();
            if (pp += (127 & cp) * 2 ** ip, 0 === (128 & cp)) return pp
          }
          throw new RangeError("varint too long")
        };
      try {
        for (let pp = 0; pp < Ip.length; pp++)
          if (Op() !== Ip.charCodeAt(pp)) return null;
        const ip = Op(),
          Pp = Op(),
          Wp = Op(),
          yp = Op(),
          Up = Op() | Op() << 8;
        if (2 !== ip) return null;
        0 !== (Up & Dp) && function(pp, ip, cp) {
          const Op = () => {
              ip(cp())
            },
            op = () => {
              let cp = 1,
                op = !0;
              for (; cp > 0;) {
                cp--, op || Op(), op = !1;
                const Ip = pp();
                for (let cp = 0; cp < Ip; cp++) Op(), ip(pp());
                cp += pp()
              }
            },
            Ip = pp();
          for (let Sp = 0; Sp < Ip; Sp++) pp(), op();
          op()
        }(Ap, (ip => {
          if (cp + ip > pp.byteLength) throw new RangeError("past the stream");
          cp += ip
        }), Op);
        const wp = Pp < 2 ? op : Ap;
        if (Wp === Sp) return {
          faces: 0,
          vertices: op()
        };
        if (Wp !== xp) return null;
        if (yp === Lp) {
          return {
            faces: wp(),
            vertices: wp()
          }
        }
        if (yp !== Yp) return null;
        Op(), Pp < 2 && Ap();
        const vp = Ap();
        return {
          faces: Ap(),
          vertices: vp
        }
      } catch {
        return null
      }
    }

    function Pp(pp, ip, cp) {
      var Op, op;
      if (null === (Op = null === (op = pp.extensionsUsed) || void 0 === op ? void 0 : op.includes("KHR_draco_mesh_compression")) || void 0 === Op || !Op) return null;
      for (const yp of null !== (Ip = pp.meshes) && void 0 !== Ip ? Ip : []) {
        var Ip;
        for (const Op of yp.primitives) {
          var Sp, xp, Lp, Yp, Dp, Pp;
          const op = null === (Sp = Op.extensions) || void 0 === Sp ? void 0 : Sp.KHR_draco_mesh_compression;
          if ("object" !== typeof op || null === op) continue;
          const Ip = null === (xp = pp.bufferViews) || void 0 === xp ? void 0 : xp[op.bufferView];
          if (null === ip || void 0 === Ip) return Wp;
          const yp = null !== (Lp = Ip.byteOffset) && void 0 !== Lp ? Lp : 0,
            Up = Ap(ip.subarray(yp, yp + Ip.byteLength));
          if (null === Up && !cp) continue;
          const wp = null !== (Yp = pp.accessors) && void 0 !== Yp ? Yp : [],
            vp = null === (Dp = wp[Op.attributes.POSITION]) || void 0 === Dp ? void 0 : Dp.count,
            tp = void 0 === Op.indices ? 0 : null === (Pp = wp[Op.indices]) || void 0 === Pp ? void 0 : Pp.count;
          if (null === Up || void 0 === vp || void 0 === tp || 3 * Up.faces !== tp || Up.vertices > vp) return Wp
        }
      }
      return null
    }
    const Wp = "has a Draco stream whose counts don't match its accessors";

    function yp(pp) {
      var ip;
      return null !== (ip = pp.name) && void 0 !== ip ? ip : pp.fromFolderName || pp.id
    }

    function Up(pp, ip, cp) {
      return `Texture pack "${pp}": model "${ip}" was not loaded because it ${cp}. The default model is used instead.`
    }

    function wp(pp, ip, cp) {
      let {
        strictDraco: Ip = !1
      } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
      const Sp = {};
      for (const [xp, Lp] of Object.entries(ip)) {
        let ip;
        if (Lp.startsWith("data:")) try {
          const pp = new Uint8Array((0, op.s)(Lp));
          if (ip = (0, Op.b)(pp), null === ip) {
            const {
              json: cp,
              bin: Op
            } = (0, op.B)(pp);
            ip = Pp(cp, Op, Ip)
          }
        } catch {
          ip = "is not a binary glTF 2.0 file"
        } else ip = "loads data from outside the file";
        ip && (Sp[xp] = ip, cp && console.warn(Up(pp, xp, ip)))
      }
      return Sp
    }

    function vp(pp, ip) {
      const cp = Object.keys(ip);
      if (0 === cp.length) return null;
      if (1 === cp.length) return Up(pp, cp[0], ip[cp[0]]);
      const Op = cp.map((pp => `"${pp}" ${ip[pp]}`)).join("; ");
      return `Texture pack "${pp}": ${cp.length} models were not loaded (${Op}). The default models are used instead.`
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);