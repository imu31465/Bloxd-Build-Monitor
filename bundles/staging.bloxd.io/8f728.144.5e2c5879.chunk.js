export const id = 144;
export const ids = [144];
export const modules = {
  37299: (cB, Bc, nc) => {
    var Vc = {
      "./cape_cow_cream.png": 27120,
      "./cape_cow_normal.png": 27126,
      "./cape_creator_level1.png": 27129,
      "./cape_creator_level2.png": 27132,
      "./cape_creator_level3.png": 27136,
      "./cape_none.png": 27138,
      "./cape_pig.png": 27147,
      "./cape_sheep.png": 27155,
      "./cape_super.png": 27157,
      "./cape_super_inverted.png": 27161,
      "./cape_youtuber.png": 27168
    };

    function Ic(cB) {
      var Bc = rB(cB);
      return nc(Bc)
    }

    function rB(cB) {
      if (!nc.o(Vc, cB)) {
        var Bc = new Error("Cannot find module '" + cB + "'");
        throw Bc.code = "MODULE_NOT_FOUND", Bc
      }
      return Vc[cB]
    }
    Ic.keys = function() {
      return Object.keys(Vc)
    }, Ic.resolve = rB, cB.exports = Ic, Ic.id = 37299
  },
  39259: (cB, Bc, nc) => {
    nc.r(Bc), nc.d(Bc, {
      openCharacterPreview: () => Jc
    });
    var Vc = nc(36678),
      Ic = nc(2187),
      rB = nc(1819),
      uc = nc(550),
      sc = nc(36138),
      Mc = nc(1826),
      Pc = nc(36130),
      qB = nc(37884),
      Oc = nc(38137),
      Tc = nc(39175),
      fc = nc(35753),
      mB = nc(38282),
      ec = nc(35808),
      tB = nc(38294),
      Sc = nc(39218),
      yB = nc(35726),
      zB = nc(36155),
      pc = nc(36171);
    nc(39201), nc(38497), nc(39206);
    let hc, aB, lc, Yc, Lc, gB, Uc, bB, Zc;
    const Qc = document.createElement("canvas");
    async function Cc() {
      await new Promise((cB => {
        setTimeout((() => {
          cB()
        }), 100)
      }))
    }
    Qc.classList.add("CharCustomisationPreviewCanvas");
    const vB = {},
      Dc = {},
      Nc = {},
      Ec = {};

    function oc(cB) {
      cB.unfreezeWorldMatrix();
      for (const Bc of cB.getChildren()) oc(Bc)
    }

    function Wc(cB, Bc) {
      const nc = (0, yB.f)(cB, Bc);
      return nc in vB || (vB[nc] = (async () => {
        try {
          const nc = await (0, yB.i)(cB, lc),
            Vc = new Map;
          for (const cB of nc.getNodes()) Vc.set(cB.name, cB);
          const Ic = (0, yB.c)(null !== Bc && void 0 !== Bc ? Bc : cB, lc);
          (0, yB.m)(nc, Ic, {
            onProcessedMesh: cB => {
              (0, yB.o)(cB), lc.JPc(cB, !1), cB.isVisible = !1
            }
          });
          for (const cB of nc.rootNodes) oc(cB);
          return Vc
        } catch (Vc) {
          throw delete vB[nc], console.error(`Failed to load preview attachment ${nc}:`, Vc), Vc
        }
      })()), vB[nc]
    }

    function wc(cB, Bc) {
      cB.isVisible = Bc;
      for (const nc of cB.getChildMeshes()) nc.isVisible = Bc
    }

    function kB(cB, Bc) {
      if (!Yc) return;
      const sc = (0, Ic.g)();
      if (sc.eBc(!1), Vc.d.Player.meshApi.updatePlayerCosmetic(sc.Pnc, Uc, cB, Bc, !0), "cape" === cB)
        if (Bc === uc.c) Lc.jnc(!1);
        else {
          Lc.jnc(!0);
          Lc.material.diffuseTexture = new Sc.b(nc(37299)(`./cape_${Bc}.png`), Lc.knc(), {
            invertY: !1,
            samplingMode: Sc.b.NEAREST_NEAREST_MIPLINEAR
          })
        } Ec[cB] = async function(cB, Bc) {
        var nc;
        Nc[cB] = Bc;
        const Vc = Dc[cB];
        if (Vc)
          for (const {
              mesh: rB,
              destNode: uc
            }
            of Vc) {
            wc(rB, !1);
            const cB = gB.getNamedNode(Uc, uc);
            gB.detachTransformNodeIfFound(rB, Uc, cB)
          }
        Dc[cB] = [];
        const Ic = (0, rB.k)(cB, Bc);
        if (null !== Ic && void 0 !== Ic && null !== (nc = Ic.attachments) && void 0 !== nc && nc.length)
          for (const rB of Ic.attachments) {
            let nc;
            try {
              nc = await Wc(rB.modelGlb, rB.texture)
            } catch {
              continue
            }
            if (Nc[cB] !== Bc) return;
            const Vc = nc.get(rB.modelNode);
            if (!Vc) {
              console.error(`Preview attachment node ${rB.modelNode} not found in ${rB.modelGlb}`);
              continue
            }
            wc(Vc, !0), (0, yB.v)(Vc, rB.overlayColour);
            const Ic = gB.getNamedNode(Uc, rB.destNode);
            gB.attachTransformNode(Vc, Uc, Ic), Dc[cB].push({
              mesh: Vc,
              destNode: rB.destNode
            })
          }
      }(cB, Bc)
    }

    function Xc(cB, Bc) {
      Qc.width = cB, Qc.height = Bc, hc.resize()
    }
    let Hc = 0;
    class Fc {
      constructor(cB) {
        this.ready = Zc, this.dev = {
          setCamera(cB) {
            let {
              yaw: Bc,
              pitch: nc,
              radius: Vc
            } = cB;
            aB.alpha = Bc, aB.beta = nc, Vc && (aB.radius = Vc)
          },
          canvas: () => Qc,
          isolateHead(cB) {
            const Bc = gB.getNodeNames(Uc);
            for (let nc = 0; nc < Bc.length; nc++) "HeadMesh" !== Bc[nc] && "__root__" !== Bc[nc] && "TorsoNode" !== Bc[nc] && gB.setNodeEnabled(Uc, nc, !1);
            if (cB) {
              const cB = gB.getNamedNode(Uc, "HeadMesh");
              gB.setNodeDisableColorWrite(Uc, cB, !0, (cB => {
                const Bc = new tB.StandardMaterial(`${cB.name}_depthOnly`, cB.knc());
                return Bc.disableColorWrite = !0, Bc
              }))
            }
            gB.setPosition(Uc, 0, -12, 0)
          }
        }, this.closed = !1;
        const Bc = cB.getBoundingClientRect();
        Xc(Bc.width, Bc.height), Hc++, hc.stopRenderLoop(), hc.runRenderLoop((() => {
          var cB;
          null === (cB = bB) || void 0 === cB || cB.render(hc.getDeltaTime()), lc.render()
        }))
      }
      isReady() {
        return !!Yc
      }
      setCosmetic(cB, Bc) {
        kB(cB, Bc)
      }
      playEmote(cB) {
        if (!bB) return;
        if (!cB) return void bB.stopAnimation(Pc.d.Emote);
        const Bc = (0, sc.g)((0, Mc.j)(cB).animation);
        bB.startAnimation(Bc, Pc.d.Emote, 0, Mc.d)
      }
      async untilDrawn(cB) {
        if (await Cc(), "cape" === cB && Lc) {
          const cB = Lc.material,
            Bc = null === cB || void 0 === cB ? void 0 : cB.diffuseTexture;
          Bc && !Bc.isReady() && (await new Promise((cB => {
            Bc.onLoadObservable.addOnce((() => {
              cB()
            }))
          })), await Cc())
        }
        Ec[cB] && (await Ec[cB], await Cc())
      }
      resize(cB, Bc) {
        Xc(cB, Bc)
      }
      close() {
        this.closed || (this.closed = !0, Hc--, 0 === Hc && hc.stopRenderLoop())
      }
    }

    function Jc(cB) {
      return cB.appendChild(Qc), hc || function() {
        hc = new qB.e(Qc, !0, {
          preserveDrawingBuffer: !0
        });
        const cB = (0, Ic.g)();
        hc.HPc = cB.tr.engine.HPc, lc = new Oc.e(hc), lc.clearColor = new ec.c(0, 0, 0, 0), lc.ambientColor = new ec.Color3(1, 1, 1), aB = new Tc.d("cM", .61 * Math.PI, Math.PI / 2.05, 30, fc.KV.Zero(), lc), aB.attachControl(Qc, !0), aB.panningSensibility = 0, Zc = (0, Vc.t)("Player", lc, !0).then((Bc => {
          Yc = Bc.meshApi, Lc = Bc.capeMesh, gB = cB.tr.FBc;
          const nc = 8.33;
          Uc = (0, Vc.m)("Player", nc, !0, !0), gB.setPosition(Uc, 0, -8.33, 0);
          const Ic = gB.getNamedNode(Uc, "BodyMesh");
          gB.attachTransformNode(Lc, Uc, Ic), gB.set(Uc, "aOpacity", 1), gB.Onc(Uc, "aOpacity", 1), bB = new zB.AnimatorState, bB.TB = cB, bB.thinInstMgr = gB, bB.JBc = Uc, bB.MPc = gB.FPc(Uc, 0), bB.modelLifeformType = "Player", bB.nodeNameAliases = (0, pc.d)("Player").nodeNameAliases;
          const rB = Lc.qVc().boundingBox;
          Lc.position.y = ((24 - rB.maximum.y + rB.minimum.y) / 2 - 1 / 32) / nc, Lc.position.z = -1 / nc, Lc.rotationQuaternion = null;
          const uc = Math.PI / 18,
            sc = rB.maximum.y / nc;
          Lc.rotation.x = uc;
          const Mc = Math.cos(uc),
            Pc = Math.sin(uc);
          Lc.position.y += sc * (1 - Mc) + 0 * Pc, Lc.position.z -= sc * Pc + 0 * (1 - Mc);
          const qB = new tB.StandardMaterial("capeMaterial", Lc.knc());
          Lc.material = qB;
          const Oc = new ec.Color3(1, 1, 1);
          qB.diffuseColor = new ec.Color3, qB.specularColor = new ec.Color3, qB.emissiveColor = new ec.Color3, qB.ambientColor = new ec.Color3, Oc.scaleToRef(.43, qB.diffuseColor), Oc.scaleToRef(1.75, qB.ambientColor), qB.freeze();
          const Tc = new mB.c("light", new fc.KV(-.1, 1, -.3), lc);
          Tc.diffuse = new ec.Color3(1, 1, 1), Tc.specular = new ec.Color3(1, 1, 1), Tc.groundColor = new ec.Color3(.5, .5, .5)
        }))
      }(), new Fc(cB)
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