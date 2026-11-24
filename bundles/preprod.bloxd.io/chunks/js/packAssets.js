export const id = 45;
export const ids = [45, 205];
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
  },
  61592: (pp, ip, cp) => {
    cp.d(ip, {
      packAssets: () => vp
    });
    var Op = cp(2187),
      op = cp(2174),
      Ip = cp(34484),
      Sp = cp(3316),
      xp = cp(3335);

    function Lp(pp, ip, cp, Op) {
      const op = `${(0,Sp.b)(pp,ip)}|sheets${cp}`;
      return Op === xp.d ? op : `${op}|layers${Op}`
    }
    var Yp = cp(3343),
      Dp = cp(3280),
      Ap = cp(3267),
      Pp = cp(3320);
    var Wp = cp(51220);
    const yp = 256;
    let Up = null,
      wp = null;

    function vp(pp) {
      var ip;
      let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : xp.d;
      if ((null === (ip = Up) || void 0 === ip ? void 0 : ip.pack) === pp.pack && Up.maxLayerWidth === cp) return Up.assets;
      const vp = (0, Wp.f)(pp.pack, (0, Wp.h)(pp));
      if (null === vp || !(0, op.f)(vp)) return Promise.resolve(null);
      const Hp = async function(pp, ip, cp) {
        var Wp;
        const Up = null !== (Wp = pp.textureOverrides) && void 0 !== Wp ? Wp : {},
          {
            id: vp,
            version: Hp
          } = pp.metaData,
          dp = ip && vp !== Op.q.CUSTOM,
          ep = {};
        dp && (wp = ep);
        let jp, kp, mp = dp ? await async function(pp, ip, cp, Op) {
          const op = Lp(pp, ip, cp, xp.d),
            Ip = Lp(pp, ip, cp, Op),
            Yp = await (0, Sp.f)((pp => pp === op || pp === Ip));
          return null !== Yp && (Op === xp.d || Yp.blockAtlasWidth <= Op) ? Yp : null
        }(vp, Hp, yp, cp): null;
        if (null === mp) {
          const {
            blockMetadata: pp,
            getDefaultTexture: ip,
            textureNameToIndex: Ip
          } = await (0, op.n)(), xp = (0, Dp.c)(pp, ((pp, cp) => ({
            url: tp(Up, ip, pp, "block" === cp ? Ap.i.BLOCK : Ap.i.ITEM)
          }))), Yp = await
          function(pp, ip, cp, Op, op, Ip) {
            return (0, Pp.b)((Sp => Sp.WasmTextureWorker.generateRequired(pp, ip, cp, Op, op, Ip)))
          }(pp, Ip, xp, vp === Op.b, cp, yp), Wp = Yp.assets;
          mp = {
            ...Wp,
            averageColors: {}
          }, jp = Yp.averageColors(), dp && (kp = jp.then((async pp => {
            null !== pp && wp === ep && await
            function(pp, ip, cp, Op, op) {
              return (0, Sp.i)(Lp(pp, ip, Op, op), cp)
            }(vp, Hp, {
              ...Wp,
              averageColors: pp
            }, yp, Yp.layerCap)
          })))
        }
        return function(pp, ip) {
          var cp, Op;
          let op = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Promise.resolve((xp = pp.averageColors, 0 === Object.keys(null !== xp && void 0 !== xp ? xp : {}).length ? null : pp.averageColors)),
            Sp = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Promise.resolve();
          var xp;
          const Lp = null !== (cp = ip.textureOverrides) && void 0 !== cp ? cp : {},
            Dp = null !== (Op = ip.modelOverrides) && void 0 !== Op ? Op : {},
            Ap = 0 === Object.keys(Dp).length ? {} : (0, Ip.refusedPackModels)((0, Ip.packDisplayName)(ip.metaData), Dp, !0, {
              strictDraco: !0
            }),
            {
              animatedBlockTextures: Pp,
              rotatedBlockTextures: Wp
            } = pp,
            yp = pp => {
              var ip, cp;
              return null !== (ip = null !== (cp = Pp[pp]) && void 0 !== cp ? cp : Wp[pp]) && void 0 !== ip ? ip : null
            };
          return {
            terrain: {
              atlasSheets: pp.blockAtlasArr,
              texture: yp
            },
            sheetPixels: [...pp.blockAtlasPixels],
            heldUntil: Sp,
            sheetLayout: pp.imagesPerAtlas,
            sheetWidth: pp.blockAtlasWidth,
            armourAtlasUrl: pp.armourAtlas,
            texture: pp => {
              var ip, cp;
              return null !== (ip = null !== (cp = yp(pp)) && void 0 !== cp ? cp : (0, Yp.b)(Lp, pp)) && void 0 !== ip ? ip : null
            },
            model: pp => void 0 === Ap[pp] && Dp[pp] || null,
            averageColours: op
          }
        }(mp, pp, jp, kp)
      }(vp, null === pp.gameSource, cp), dp = {
        pack: pp.pack,
        maxLayerWidth: cp,
        assets: Hp
      };
      return Up = dp, Hp.catch((() => {
        Up === dp && (Up = null)
      })), Hp
    }

    function tp(pp, ip, Op, op) {
      const Ip = (0, Yp.b)(pp, Op);
      if (Ip) return Ip;
      try {
        return ip(Op, op).url
      } catch {
        return cp(3425)
      }
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);