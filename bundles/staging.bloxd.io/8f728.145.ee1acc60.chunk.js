export const id = 145;
export const ids = [145];
export const modules = {
  39167: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      openMobLineupPreview: () => kB,
      openMobPreview: () => wc,
      openPetPreview: () => Xc
    });
    var Vc = nc(37884),
      Ic = nc(38137),
      rB = nc(39175),
      uc = nc(35808),
      sc = nc(35753),
      Mc = nc(38282),
      Pc = nc(39192),
      qB = nc(37024),
      Oc = nc(36171),
      Tc = nc(36130),
      fc = nc(36155),
      mB = nc(36938),
      ec = nc(36935),
      tB = nc(36678),
      Sc = nc(36727),
      yB = nc(36699),
      zB = nc(36340),
      pc = nc(2187),
      hc = nc(36123);
    nc(39201), nc(38497), nc(39206);
    const aB = 22,
      lc = 13,
      Yc = Math.PI - Math.PI / 16,
      Lc = 6,
      gB = Math.PI / 4;
    let Uc = null;
    const bB = {},
      Zc = new Map;

    function Qc() {
      if (null !== Uc) return Uc;
      const cB = document.createElement("canvas");
      cB.classList.add("MobPreviewCanvas");
      const Bc = new Vc.e(cB, !0, {
        preserveDrawingBuffer: !0
      });
      Bc.HPc = (0, pc.g)().tr.engine.HPc;
      const nc = new Ic.e(Bc);
      nc.clearColor = new uc.c(0, 0, 0, 0), nc.ambientColor = new uc.Color3(1, 1, 1);
      const Pc = new rB.d("cM", Math.PI / 2, Math.PI / 2, aB, sc.KV.Zero(), nc),
        qB = new Mc.c("light", new sc.KV(-.1, 1, -.3), nc);
      return qB.diffuse = new uc.Color3(1, 1, 1), qB.specular = new uc.Color3(1, 1, 1), qB.groundColor = new uc.Color3(.5, .5, .5), Uc = {
        engine: Bc,
        Ir: nc,
        canvas: cB,
        camera: Pc
      }, Uc
    }

    function Cc(cB) {
      return bB[cB] ??= (0, tB.t)(cB, Qc().Ir, !0).catch((Bc => {
        throw delete bB[cB], Bc
      })), bB[cB]
    }

    function vB(cB) {
      let Bc = Zc.get(cB);
      return Bc || (Bc = zB.w[cB].loadModel(Qc().Ir, !1).then((cB => (cB.jnc(!1), cB)), (Bc => {
        throw Zc.delete(cB), Bc
      })), Zc.set(cB, Bc)), Bc
    }

    function Dc(cB) {
      var Bc, nc, Vc;
      let {
        mobType: Ic,
        variation: rB,
        animation: uc
      } = cB, Mc = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, aB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const Lc = null !== (Bc = null === Mc || void 0 === Mc ? void 0 : Mc.size) && void 0 !== Bc ? Bc : 1,
        gB = null !== (nc = null === Mc || void 0 === Mc ? void 0 : Mc.cosmetics) && void 0 !== nc ? nc : [],
        Uc = null !== (Vc = null === Mc || void 0 === Mc ? void 0 : Mc.vY) && void 0 !== Vc ? Vc : null;
      let bB = !1,
        Zc = null,
        Dc = null;
      const {
        engine: Nc,
        Ir: Ec
      } = Qc(), oc = Ec.onBeforeRenderObservable.add((() => {
        var cB;
        null === (cB = Dc) || void 0 === cB || cB.render(Nc.getDeltaTime())
      })), Wc = null === Uc ? null : vB(Uc).catch((cB => (console.error(`Mob preview: could not load ${Uc}`, cB), null)));
      return Promise.all([Cc(Ic), Wc]).then((cB => {
        var Bc, nc, Vc;
        let [Mc, Cc] = cB;
        if (bB) return;
        const vB = (0, pc.g)().tr.FBc,
          {
            hitBoxDimensions: Nc
          } = (0, qB.d)(Ic),
          Ec = lc / Math.max(Nc.height, Nc.width);
        if (Zc = (0, tB.m)(Ic, Ec * Lc, !0, !0), vB.setPosition(Zc, aB, -Nc.height * Ec / 2, 0), vB.setRotationEulerY(Zc, Yc), Mc.meshApi instanceof yB.b && gB.length > 0)
          for (const [Ic, rB] of gB) Mc.meshApi.updatePlayerCosmetic(null, Zc, Ic, rB, !0);
        else Mc.meshApi.updateVariation(Zc, Ic, null !== rB && void 0 !== rB ? rB : "default");
        null !== Uc && null !== Cc && function(cB, Bc, nc, Vc) {
          var Ic;
          const rB = zB.w[cB],
            uc = (0, mB.n)();
          (0, mB.h)(rB, null === (Ic = (0, Sc.b)(nc).meshMetadata.heldItemPositionParams) || void 0 === Ic ? void 0 : Ic.itemOffset, uc);
          const Mc = hc.c * uc.Su.y,
            qB = uc.usesQuaternion ? uc.quaternion : sc.Quaternion.FromEulerVector(uc.rotation),
            Oc = new Pc.d(`${Bc.name}Hand`, Qc().Ir);
          Oc.position.qqc((0, ec.b)(uc.position, qB, Mc, rB.heldModelOffsetY())), Oc.rotationQuaternion = qB, Oc.Su.set(uc.Su.x, Mc, uc.Su.z), Bc.clone(`${Bc.name}Held`, Oc).jnc(!0);
          const Tc = (0, pc.g)().tr.FBc;
          Tc.attachTransformNode(Oc, Vc, Tc.getNamedNode(Vc, "ArmRightMesh"))
        }(Uc, Cc, Ic, Zc), vB.set(Zc, "aOpacity", 1);
        const oc = null !== (Bc = (0, Sc.b)(Ic).meshMetadata.lifeformTypeForModelOverride) && void 0 !== Bc ? Bc : Ic;
        Dc = new fc.AnimatorState, Dc.thinInstMgr = vB, Dc.JBc = Zc, Dc.MPc = vB.FPc(Zc, 0), Dc.modelLifeformType = oc, Dc.nodeNameAliases = null !== (nc = null === (Vc = (0, Oc.d)(oc)) || void 0 === Vc ? void 0 : Vc.nodeNameAliases) && void 0 !== nc ? nc : null, Dc.startAnimation(uc, Tc.d.Movement)
      })).catch((cB => {
        console.error(`Mob preview: could not load ${Ic}`, cB)
      })), () => {
        bB = !0, Ec.onBeforeRenderObservable.remove(oc), null !== Zc && (0, pc.g)().tr.FBc.delete(Zc)
      }
    }

    function Nc(cB, Bc) {
      return Dc({
        mobType: "NPC",
        variation: null,
        animation: cB.animation
      }, cB, Bc)
    }

    function Ec(cB) {
      let {
        mobType: Bc,
        variation: nc,
        shownGroups: Vc
      } = cB, Ic = !1, rB = null, uc = 0;
      const sc = (0, pc.g)(),
        Mc = sc.tr.FBc,
        Pc = cB => {
          uc += gB * (cB / 1e3) % (2 * Math.PI), Mc.setRotationEulerY(rB, uc)
        };
      return Cc(Bc).then((cB => {
        if (!Ic) {
          rB = (0, tB.m)(Bc, Lc, !0, !0), Mc.setPosition(rB, 0, -Lc, 0), cB.meshApi.updateVariation(rB, Bc, nc);
          for (const Bc of Object.keys(Vc)) Mc.hasGroup(rB, Bc) && cB.meshApi.setMeshGroupVisibility(rB, Bc, Vc[Bc]);
          Mc.set(rB, "aOpacity", 1), sc.on("renderTickBegin", Pc)
        }
      })).catch((cB => {
        console.error(`Pet preview: could not load ${Bc}`, cB)
      })), () => {
        Ic = !0, sc.off("renderTickBegin", Pc), null !== rB && Mc.delete(rB)
      }
    }
    class oc {
      constructor(cB, Bc) {
        this.place = Bc, this.remove = null;
        const {
          engine: nc,
          Ir: Vc,
          canvas: Ic
        } = Qc();
        cB.appendChild(Ic), nc.resize(), nc.runRenderLoop((() => {
          Vc.render()
        }))
      }
      show(cB) {
        var Bc;
        null === (Bc = this.remove) || void 0 === Bc || Bc.call(this), this.remove = this.place(cB)
      }
      resize(cB, Bc) {
        const {
          engine: nc,
          canvas: Vc
        } = Qc();
        Vc.width = cB, Vc.height = Bc, nc.resize()
      }
      close() {
        var cB;
        Qc().engine.stopRenderLoop(), null === (cB = this.remove) || void 0 === cB || cB.call(this), this.remove = null
      }
    }
    class Wc {
      constructor(cB) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new oc(cB, (() => () => {}))
      }
      show(cB) {
        cB.figures !== this.view.figures && this.preload(cB.figures), this.view = cB, this.place()
      }
      resize(cB, Bc) {
        this.preview.resize(cB, Bc), this.aspect = cB / Bc, this.place()
      }
      close() {
        this.preview.close();
        for (const cB of this.placed) null === cB || void 0 === cB || cB.remove();
        this.placed = []
      }
      preload(cB) {
        const Bc = () => {};
        Cc("NPC").catch(Bc);
        for (const {
            vY: nc
          }
          of cB) null !== nc && vB(nc).catch(Bc)
      }
      place() {
        const {
          figures: cB,
          shown: Bc
        } = this.view, nc = cB.map(((nc, Vc) => {
          var Ic;
          const rB = null !== (Ic = this.placed[Vc]) && void 0 !== Ic ? Ic : null;
          if (!Bc[Vc]) return null === rB || void 0 === rB || rB.remove(), null;
          const uc = (sc = (Vc + .5) / cB.length, Mc = this.aspect, (.5 - sc) * (2 * aB * Math.tan(Qc().camera.fov / 2)) * Mc);
          var sc, Mc;
          return null !== rB && rB.figure === nc && rB.x === uc ? rB : (null === rB || void 0 === rB || rB.remove(), {
            figure: nc,
            x: uc,
            remove: Nc(nc, uc)
          })
        }));
        for (const Vc of this.placed.slice(cB.length)) null === Vc || void 0 === Vc || Vc.remove();
        this.placed = nc
      }
    }

    function wc(cB) {
      return new oc(cB, Dc)
    }

    function kB(cB) {
      return new Wc(cB)
    }

    function Xc(cB) {
      return new oc(cB, Ec)
    }
  },
  37295: (cB, Bc, nc) => {
    nc.d(Bc, {
      b: () => Tc
    });
    var Vc = nc(35675),
      Ic = nc(35686),
      rB = nc(35936),
      uc = nc(35689),
      sc = nc(35679);

    function Mc(cB) {
      return `\n\t\t\t\t${(0,sc.z)(cB,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, sc.G)(cB, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, sc.G)(cB, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, sc.n)(cB, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function Pc(cB, Bc) {
      let nc = (0, sc.Nb)(cB, "skele" + (Bc - 1));
      for (let Ic = Bc - 2; Ic >= 0; Ic--) nc = (0, sc.Db)(cB, `boneIdx == ${Ic}`, (0, sc.Nb)(cB, `skele${Ic}`), nc);
      const Vc = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,sc.G)(cB,"int","boneIdx",(0,sc.Lb)(cB,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,sc.G)(cB,"vec3","bone",nc)}\n\t\t\t\t${(0,sc.G)(cB,"vec2","pivot",(0,sc.n)(cB,"vec2","0.0",`${(0,sc.Xb)(cB,"position")}.z`))}\n\t\t\t\t${(0,sc.gb)(cB)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${Vc}));`:`positionUpdated.yz += ${Vc};`}\n\t\t`
    }

    function qB(cB) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,sc.n)(cB,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const Oc = {
        x: 0,
        y: 0,
        z: 0,
        QMc(cB, Bc) {
          return this.x = cB[Bc], this.y = cB[Bc + 1], this.z = cB[Bc + 2], this
        }
      },
      Tc = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (cB, Bc) => ({
          ...(0, Vc.e)("CAPE"),
          BLOXD_CAPE_BONES: `${cB}`,
          BLOXD_CAPE_MAX_Y: (0, Ic.sb)(Bc)
        }),
        getUniforms(cB) {
          return (0, rB.e)(function(cB) {
            const Bc = [];
            for (let nc = 0; nc < cB; nc++) Bc.push({
              name: `skele${nc}`,
              type: "highp vec3"
            });
            return Bc
          }(this.skeleLen), "vertex", cB)
        },
        bind(cB) {
          for (let Bc = 0; Bc < this.skeleLen; Bc++) cB.updateVector3(`skele${Bc}`, Oc.QMc(this.skele, 3 * Bc))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(cB, Bc) {
          return "vertex" !== cB ? null : {
            CUSTOM_VERTEX_DEFINITIONS: Mc(Bc),
            CUSTOM_VERTEX_UPDATE_POSITION: Pc(Bc, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: qB(Bc)
          }
        }
      };
    (0, uc.l)(Tc)
  },
  37205: (cB, Bc, nc) => {
    nc.d(Bc, {
      d: () => qB,
      g: () => Oc
    });
    var Vc = nc(35675),
      Ic = nc(35936),
      rB = nc(35679),
      uc = nc(35689);
    const sc = "bloxdTextLodBias",
      Mc = [{
        name: sc,
        type: "float"
      }],
      Pc = "bloxdTextSample",
      qB = {
        planes: -.5,
        boards: -.5
      },
      Oc = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, Vc.e)("TEXT_SAMPLER"),
        getUniforms: cB => (0, Ic.e)(Mc, "fragment", cB),
        bind(cB) {
          cB.updateFloat(sc, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(cB, Bc) {
          if ("fragment" !== cB) return null;
          const nc = (0, rB.Q)(Bc, `vec4 ${Pc}(sampler2D s, vec2 uv, float bias)`, `fn ${Pc}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            Vc = (0, rB.Q)(Bc, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            Ic = `${(0,rB.$)(Bc,"vDiffuseUV")} + uvOffset`,
            uc = (0, rB.Q)(Bc, `${Pc}(diffuseSampler, ${Ic}, ${(0,rB.Nb)(Bc,sc)})`, `${Pc}(diffuseSampler, diffuseSamplerSampler, ${Ic}, ${(0,rB.Nb)(Bc,sc)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${nc} {\n\t\t\t\t\t${(0,rB.G)(Bc,"vec4","texel",Vc)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,rB.n)(Bc,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,rB.n)(Bc,"vec3","0.0")}, ${(0,rB.n)(Bc,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, rB.J)(Bc)]: `baseColor = ${uc};`
          }
        }
      };
    (0, uc.l)(Oc)
  },
  7729: (cB, Bc, nc) => {
    nc.d(Bc, {
      c: () => qB,
      f: () => sc,
      g: () => Mc
    });
    var Vc = nc(1819),
      Ic = nc(1108),
      rB = nc(1826);
    const uc = ",";

    function sc(cB) {
      if (!cB) return [];
      const Bc = new Set,
        nc = [];
      for (const Vc of cB.split(uc)) {
        const cB = Vc.trim();
        if ((0, rB.l)(cB) && !Bc.has(cB) && (Bc.add(cB), nc.push(cB), nc.length >= Ic.m)) break
      }
      return nc
    }

    function Mc(cB) {
      const Bc = new Set,
        nc = [];
      for (const Vc of cB)
        if ((0, rB.l)(Vc) && !Bc.has(Vc) && (Bc.add(Vc), nc.push(Vc), nc.length >= Ic.m)) break;
      return nc.join(uc)
    }

    function Pc() {
      return Mc(rB.h)
    }

    function qB(cB) {
      var Bc;
      return "emote" === cB ? Pc() : null !== (Bc = Oc[cB][0]) && void 0 !== Bc ? Bc : Tc[cB]
    }
    const Oc = Ic.v.reduce(((cB, Bc) => {
        const nc = [];
        for (const rB in Vc.e[Bc]) {
          var Ic;
          "default" === (null === (Ic = (0, Vc.k)(Bc, rB)) || void 0 === Ic ? void 0 : Ic.cosmeticPack) && nc.push(rB)
        }
        return cB[Bc] = nc, cB
      }), {}),
      Tc = Ic.v.reduce(((cB, Bc) => (cB[Bc] = Object.keys(Vc.e[Bc])[0], cB)), {})
  }
};
Object.freeze(modules);
for (const cB in modules) Object.freeze(modules[cB]);