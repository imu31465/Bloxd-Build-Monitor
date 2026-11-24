export const id = 118;
export const ids = [118, 138];
export const modules = {
  6772: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      loadShaderPackTextures: () => Sp,
      shaderPackTextures: () => xp
    });
    var Op = cp(5167);
    let op = null,
      Ip = null;

    function Sp() {
      return Ip ??= Promise.all([cp.e(73), cp.e(190)]).then((() => cp(40670))).then((pp => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: ip,
          textureNameToIndex: cp,
          textureAnimationData: Ip
        } = pp;
        return op ??= (0, Op.j)(cp, Ip, ip), op
      })), Ip
    }

    function xp() {
      if (null === op) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return op
    }
  },
  5167: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => xp,
      e: () => Sp,
      f: () => Op,
      j: () => Up,
      m: () => Ap,
      o: () => op,
      p: () => Ip,
      s: () => Yp,
      v: () => Dp,
      z: () => Pp
    });
    const Op = 5;

    function op(pp) {
      return pp === Op
    }

    function Ip(pp) {
      return [...pp.features]
    }
    const Sp = 262144,
      xp = 256,
      Lp = 256;

    function Yp(pp) {
      if ("object" !== typeof pp || null === pp || Array.isArray(pp)) return "The pack has no files.";
      const ip = [];
      for (const [cp, Op] of Object.entries(pp)) {
        if ("string" !== typeof Op) return `${cp} isn't text.`;
        ip.push({
          path: cp,
          source: Op
        })
      }
      return ip.sort(((pp, ip) => Ap(pp.path, ip.path))),
        function(pp) {
          if (0 === pp.length) return "The pack has no .wgsl files.";
          if (pp.length > xp) return `The pack has more than ${xp} .wgsl files.`;
          const ip = new Set;
          for (const {
              path: cp
            }
            of pp) {
            const pp = Wp(cp);
            if (null !== pp) return pp;
            if (ip.has(cp)) return `The pack has two files at ${cp}.`;
            ip.add(cp)
          }
          return Pp(pp) > Sp ? `The pack's .wgsl files are over ${Sp/1024} KB in total.` : null
        }(ip) ?? ip
    }

    function Dp(pp) {
      const ip = {};
      for (const cp of pp) ip[cp.path] = cp.source;
      return ip
    }

    function Ap(pp, ip) {
      return pp < ip ? -1 : pp > ip ? 1 : 0
    }

    function Pp(pp) {
      const ip = new TextEncoder;
      let cp = 0;
      for (const {
          source: Op
        }
        of pp) cp += ip.encode(Op).byteLength;
      return cp
    }

    function Wp(pp) {
      if (!pp.toLowerCase().endsWith(".wgsl")) return `${pp} isn't a .wgsl file.`;
      if (pp.length > Lp) return `A file path is over ${Lp} characters.`;
      if (pp.includes("\\") || /[\u0000-\u001f]/.test(pp)) return `${pp} isn't a valid file path.`;
      return pp.split("/").some((pp => "" === pp || "." === pp || ".." === pp)) ? `${pp} isn't a valid file path.` : null
    }
    const yp = /^(.*)\[rot\[([1-4])$/;

    function Up(pp, ip) {
      let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const Op = new Map;
      ip.forEach(((pp, ip) => {
        let {
          numAnimStates: cp,
          animStartIdx: op
        } = pp;
        for (let Ip = 1; Ip < cp; Ip++) Op.set(op + Ip - 1, ip)
      }));
      const op = Object.entries(pp),
        Ip = new Map;
      for (const [Up, wp] of op) {
        const pp = yp.exec(Up);
        "1" === pp?.[2] && Ip.set(pp[1], wp + 1)
      }
      const Sp = pp => {
          const ip = yp.exec(pp);
          return ip && Ip.has(ip[1]) ? {
            root: ip[1],
            rotation: Number(ip[2]) - 1
          } : null
        },
        xp = new Set(op.map((pp => {
          let [ip] = pp;
          return Sp(ip)?.root ?? ip
        }))),
        Lp = (pp, cp) => {
          const Op = pp.replace(/_?0$/, "");
          return (ip[cp]?.numAnimStates ?? 0) > 1 && !xp.has(Op) ? Op : pp
        },
        Yp = new Map;
      for (const [yp, Up] of op) Yp.set(Up, Lp(Sp(yp)?.root ?? yp, Up));
      const Dp = op.reduce(((pp, ip) => {
          let [, cp] = ip;
          return Math.max(pp, cp + 1)
        }), 0),
        Ap = Array.from({
          length: Dp
        }, ((pp, ip) => ({
          id: ip + 1,
          rotation: 0
        }))),
        Pp = new Map,
        Wp = new Map;
      for (const [yp, Up] of op) {
        const pp = Sp(yp),
          ip = Op.get(Up);
        if (void 0 !== ip) {
          const cp = Yp.get(ip);
          Wp.set(yp, {
            name: yp,
            texture: cp,
            kind: "frame"
          }), pp && !Wp.has(pp.root) && Wp.set(pp.root, {
            name: pp.root,
            texture: cp,
            kind: "frame"
          });
          continue
        }
        const cp = Yp.get(Up),
          op = pp?.root ?? yp;
        if (cp !== op && Wp.set(op, {
            name: op,
            texture: cp,
            kind: "frame"
          }), pp) {
          const ip = Ip.get(pp.root);
          Ap[Up] = {
            id: ip,
            rotation: pp.rotation
          }, Pp.set(cp, ip), Wp.set(yp, {
            name: yp,
            texture: cp,
            kind: "rotation"
          })
        } else Pp.set(cp, Up + 1)
      }
      for (const yp of Pp.keys()) Wp.delete(yp);
      for (const [yp, Up] of cp) {
        const pp = Pp.get(Up);
        void 0 === pp || Pp.has(yp) || (Pp.set(yp, pp), Wp.delete(yp))
      }
      return {
        named: [...Pp].sort(((pp, ip) => {
          let [cp] = pp, [Op] = ip;
          return cp < Op ? -1 : cp > Op ? 1 : 0
        })).map((pp => {
          let [ip, cp] = pp;
          return {
            name: ip,
            id: cp
          }
        })),
        aliases: [...Wp.values()],
        layers: Ap
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);