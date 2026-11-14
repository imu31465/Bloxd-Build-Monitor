export const id = 141;
export const ids = [141];
export const modules = {
  37189: (FF, WF, SF) => {
    var CF = {
      "./cape_cow_cream.png": 26958,
      "./cape_cow_normal.png": 26960,
      "./cape_creator_level1.png": 26967,
      "./cape_creator_level2.png": 26971,
      "./cape_creator_level3.png": 26978,
      "./cape_none.png": 26987,
      "./cape_pig.png": 26989,
      "./cape_sheep.png": 26997,
      "./cape_super.png": 27e3,
      "./cape_super_inverted.png": 27005,
      "./cape_youtuber.png": 27008
    };

    function AF(FF) {
      var WF = uF(FF);
      return SF(WF)
    }

    function uF(FF) {
      if (!SF.o(CF, FF)) {
        var WF = new Error("Cannot find module '" + FF + "'");
        throw WF.code = "MODULE_NOT_FOUND", WF
      }
      return CF[FF]
    }
    AF.keys = function() {
      return Object.keys(CF)
    }, AF.resolve = uF, FF.exports = AF, AF.id = 37189
  },
  39135: (FF, WF, SF) => {
    SF.r(WF), SF.d(WF, {
      openCharacterPreview: () => wF
    });
    var CF = SF(36549),
      AF = SF(2180),
      uF = SF(1834),
      hF = SF(553),
      bW = SF(35983),
      dF = SF(1841),
      PF = SF(35977),
      RF = SF(37783),
      iW = SF(38053),
      eF = SF(39053),
      EF = SF(35617),
      QF = SF(38214),
      rW = SF(35671),
      gW = SF(38233),
      tW = SF(39102),
      TF = SF(35587),
      aW = SF(36003),
      kW = SF(36011);
    SF(39079), SF(38456), SF(39084);
    let qW, VF, NF, DF, LF, mW, OF, xW, ZF;
    const oF = document.createElement("canvas");
    async function YF() {
      await new Promise((FF => {
        setTimeout((() => {
          FF()
        }), 100)
      }))
    }
    oF.classList.add("CharCustomisationPreviewCanvas");
    const MF = {},
      cW = {},
      GF = {},
      zW = {};

    function IF(FF) {
      FF.unfreezeWorldMatrix();
      for (const WF of FF.getChildren()) IF(WF)
    }

    function fF(FF, WF) {
      const SF = (0, TF.c)(FF, WF);
      return SF in MF || (MF[SF] = (async () => {
        try {
          const SF = await (0, TF.g)(FF, NF),
            CF = new Map;
          for (const FF of SF.getNodes()) CF.set(FF.name, FF);
          const AF = (0, TF.b)(null !== WF && void 0 !== WF ? WF : FF, NF);
          (0, TF.h)(SF, AF, {
            onProcessedMesh: FF => {
              (0, TF.k)(FF), NF.gRF(FF, !1), FF.isVisible = !1
            }
          });
          for (const FF of SF.rootNodes) IF(FF);
          return CF
        } catch (CF) {
          throw delete MF[SF], console.error(`Failed to load preview attachment ${SF}:`, CF), CF
        }
      })()), MF[SF]
    }

    function yW(FF, WF) {
      FF.isVisible = WF;
      for (const SF of FF.getChildMeshes()) SF.isVisible = WF
    }

    function sF(FF, WF) {
      if (!DF) return;
      const bW = (0, AF.h)();
      if (bW.CWF(!1), CF.c.Player.meshApi.updatePlayerCosmetic(bW.vSF, OF, FF, WF, !0), "cape" === FF)
        if (WF === hF.f) LF.MWF(!1);
        else {
          LF.MWF(!0);
          LF.material.diffuseTexture = new tW.d(SF(37189)(`./cape_${WF}.png`), LF.OWF(), {
            invertY: !1,
            samplingMode: tW.d.NEAREST_NEAREST_MIPLINEAR
          })
        } zW[FF] = async function(FF, WF) {
        var SF;
        GF[FF] = WF;
        const CF = cW[FF];
        if (CF)
          for (const {
              mesh: uF,
              destNode: hF
            }
            of CF) {
            yW(uF, !1);
            const FF = mW.getNamedNode(OF, hF);
            mW.detachTransformNodeIfFound(uF, OF, FF)
          }
        cW[FF] = [];
        const AF = (0, uF.n)(FF, WF);
        if (null !== AF && void 0 !== AF && null !== (SF = AF.attachments) && void 0 !== SF && SF.length)
          for (const uF of AF.attachments) {
            let SF;
            try {
              SF = await fF(uF.modelGlb, uF.texture)
            } catch {
              continue
            }
            if (GF[FF] !== WF) return;
            const CF = SF.get(uF.modelNode);
            if (!CF) {
              console.error(`Preview attachment node ${uF.modelNode} not found in ${uF.modelGlb}`);
              continue
            }
            yW(CF, !0), (0, TF.p)(CF, uF.overlayColour);
            const AF = mW.getNamedNode(OF, uF.destNode);
            mW.attachTransformNode(CF, OF, AF), cW[FF].push({
              mesh: CF,
              destNode: uF.destNode
            })
          }
      }(FF, WF)
    }

    function nF(FF, WF) {
      oF.width = FF, oF.height = WF, qW.resize()
    }
    let HF = 0;
    class KF {
      constructor(FF) {
        this.ready = ZF, this.dev = {
          setCamera(FF) {
            let {
              yaw: WF,
              pitch: SF,
              radius: CF
            } = FF;
            VF.alpha = WF, VF.beta = SF, CF && (VF.radius = CF)
          },
          canvas: () => oF,
          isolateHead(FF) {
            const WF = mW.getNodeNames(OF);
            for (let SF = 0; SF < WF.length; SF++) "HeadMesh" !== WF[SF] && "__root__" !== WF[SF] && "TorsoNode" !== WF[SF] && mW.setNodeEnabled(OF, SF, !1);
            if (FF) {
              const FF = mW.getNamedNode(OF, "HeadMesh");
              mW.setNodeDisableColorWrite(OF, FF, !0, (FF => {
                const WF = new gW.StandardMaterial(`${FF.name}_depthOnly`, FF.OWF());
                return WF.disableColorWrite = !0, WF
              }))
            }
            mW.setPosition(OF, 0, -12, 0)
          }
        }, this.closed = !1;
        const WF = FF.getBoundingClientRect();
        nF(WF.width, WF.height), HF++, qW.stopRenderLoop(), qW.runRenderLoop((() => {
          var FF;
          null === (FF = xW) || void 0 === FF || FF.render(qW.getDeltaTime()), NF.render()
        }))
      }
      isReady() {
        return !!DF
      }
      setCosmetic(FF, WF) {
        sF(FF, WF)
      }
      playEmote(FF) {
        if (!xW) return;
        if (!FF) return void xW.stopAnimation(PF.d.Emote);
        const WF = (0, bW.h)((0, dF.g)(FF).animation);
        xW.startAnimation(WF, PF.d.Emote, 0, dF.c)
      }
      async untilDrawn(FF) {
        if (await YF(), "cape" === FF && LF) {
          const FF = LF.material,
            WF = null === FF || void 0 === FF ? void 0 : FF.diffuseTexture;
          WF && !WF.isReady() && (await new Promise((FF => {
            WF.onLoadObservable.addOnce((() => {
              FF()
            }))
          })), await YF())
        }
        zW[FF] && (await zW[FF], await YF())
      }
      resize(FF, WF) {
        nF(FF, WF)
      }
      close() {
        this.closed || (this.closed = !0, HF--, 0 === HF && qW.stopRenderLoop())
      }
    }

    function wF(FF) {
      return FF.appendChild(oF), qW || function() {
        qW = new RF.d(oF, !0, {
          preserveDrawingBuffer: !0
        });
        const FF = (0, AF.h)();
        qW.QPF = FF.dA.engine.QPF, NF = new iW.e(qW), NF.clearColor = new rW.d(0, 0, 0, 0), NF.ambientColor = new rW.Color3(1, 1, 1), VF = new eF.e("Kh", .61 * Math.PI, Math.PI / 2.05, 30, EF.HC.Zero(), NF), VF.attachControl(oF, !0), VF.panningSensibility = 0, ZF = (0, CF.w)("Player", NF, !0).then((WF => {
          DF = WF.meshApi, LF = WF.capeMesh, mW = FF.dA.oWF;
          const SF = 8.33;
          OF = (0, CF.h)("Player", SF, !0, !0), mW.setPosition(OF, 0, -8.33, 0);
          const AF = mW.getNamedNode(OF, "BodyMesh");
          mW.attachTransformNode(LF, OF, AF), mW.set(OF, "aOpacity", 1), mW.pWF(OF, "aOpacity", 1), xW = new aW.AnimatorState, xW.iS = FF, xW.thinInstMgr = mW, xW.YWF = OF, xW.zPF = mW.rRF(OF, 0), xW.modelLifeformType = "Player", xW.nodeNameAliases = (0, kW.e)("Player").nodeNameAliases;
          const uF = LF.JWF().boundingBox;
          LF.position.y = ((24 - uF.maximum.y + uF.minimum.y) / 2 - 1 / 32) / SF, LF.position.z = -1 / SF, LF.rotationQuaternion = null;
          const hF = Math.PI / 18,
            bW = uF.maximum.y / SF;
          LF.rotation.x = hF;
          const dF = Math.cos(hF),
            PF = Math.sin(hF);
          LF.position.y += bW * (1 - dF) + 0 * PF, LF.position.z -= bW * PF + 0 * (1 - dF);
          const RF = new gW.StandardMaterial("capeMaterial", LF.OWF());
          LF.material = RF;
          const iW = new rW.Color3(1, 1, 1);
          RF.diffuseColor = new rW.Color3, RF.specularColor = new rW.Color3, RF.emissiveColor = new rW.Color3, RF.ambientColor = new rW.Color3, iW.scaleToRef(.43, RF.diffuseColor), iW.scaleToRef(1.75, RF.ambientColor), RF.freeze();
          const eF = new QF.d("light", new EF.HC(-.1, 1, -.3), NF);
          eF.diffuse = new rW.Color3(1, 1, 1), eF.specular = new rW.Color3(1, 1, 1), eF.groundColor = new rW.Color3(.5, .5, .5)
        }))
      }(), new KF(FF)
    }
  },
  37185: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => eF
    });
    var CF = SF(35543),
      AF = SF(35555),
      uF = SF(35795),
      hF = SF(35559),
      bW = SF(35551);

    function dF(FF) {
      return `\n\t\t\t\t${(0,bW.u)(FF,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, bW.y)(FF, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, bW.y)(FF, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, bW.p)(FF, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function PF(FF, WF) {
      let SF = (0, bW.pb)(FF, "skele" + (WF - 1));
      for (let AF = WF - 2; AF >= 0; AF--) SF = (0, bW.fb)(FF, `boneIdx == ${AF}`, (0, bW.pb)(FF, `skele${AF}`), SF);
      const CF = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,bW.y)(FF,"int","boneIdx",(0,bW.kb)(FF,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,bW.y)(FF,"vec3","bone",SF)}\n\t\t\t\t${(0,bW.y)(FF,"vec2","pivot",(0,bW.p)(FF,"vec2","0.0",`${(0,bW.zb)(FF,"position")}.z`))}\n\t\t\t\t${(0,bW.N)(FF)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${CF}));`:`positionUpdated.yz += ${CF};`}\n\t\t`
    }

    function RF(FF) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,bW.p)(FF,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const iW = {
        x: 0,
        y: 0,
        z: 0,
        udF(FF, WF) {
          return this.x = FF[WF], this.y = FF[WF + 1], this.z = FF[WF + 2], this
        }
      },
      eF = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (FF, WF) => ({
          ...(0, CF.c)("CAPE"),
          BLOXD_CAPE_BONES: `${FF}`,
          BLOXD_CAPE_MAX_Y: (0, AF.rb)(WF)
        }),
        getUniforms(FF) {
          return (0, uF.e)(function(FF) {
            const WF = [];
            for (let SF = 0; SF < FF; SF++) WF.push({
              name: `skele${SF}`,
              type: "highp vec3"
            });
            return WF
          }(this.skeleLen), "vertex", FF)
        },
        bind(FF) {
          for (let WF = 0; WF < this.skeleLen; WF++) FF.updateVector3(`skele${WF}`, iW.udF(this.skele, 3 * WF))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(FF, WF) {
          return "vertex" !== FF ? null : {
            CUSTOM_VERTEX_DEFINITIONS: dF(WF),
            CUSTOM_VERTEX_UPDATE_POSITION: PF(WF, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: RF(WF)
          }
        }
      };
    (0, hF.q)(eF)
  },
  37087: (FF, WF, SF) => {
    SF.d(WF, {
      d: () => RF,
      g: () => iW
    });
    var CF = SF(35543),
      AF = SF(35795),
      uF = SF(35551),
      hF = SF(35559);
    const bW = "bloxdTextLodBias",
      dF = [{
        name: bW,
        type: "float"
      }],
      PF = "bloxdTextSample",
      RF = {
        planes: -.5,
        boards: -.5
      },
      iW = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, CF.c)("TEXT_SAMPLER"),
        getUniforms: FF => (0, AF.e)(dF, "fragment", FF),
        bind(FF) {
          FF.updateFloat(bW, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(FF, WF) {
          if ("fragment" !== FF) return null;
          const SF = (0, uF.C)(WF, `vec4 ${PF}(sampler2D s, vec2 uv, float bias)`, `fn ${PF}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            CF = (0, uF.C)(WF, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            AF = `${(0,uF.I)(WF,"vDiffuseUV")} + uvOffset`,
            hF = (0, uF.C)(WF, `${PF}(diffuseSampler, ${AF}, ${(0,uF.pb)(WF,bW)})`, `${PF}(diffuseSampler, diffuseSamplerSampler, ${AF}, ${(0,uF.pb)(WF,bW)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${SF} {\n\t\t\t\t\t${(0,uF.y)(WF,"vec4","texel",CF)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,uF.p)(WF,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,uF.p)(WF,"vec3","0.0")}, ${(0,uF.p)(WF,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, uF.z)(WF)]: `baseColor = ${hF};`
          }
        }
      };
    (0, hF.q)(iW)
  },
  7744: (FF, WF, SF) => {
    SF.d(WF, {
      e: () => RF,
      g: () => bW,
      h: () => dF
    });
    var CF = SF(1834),
      AF = SF(1101),
      uF = SF(1841);
    const hF = ",";

    function bW(FF) {
      if (!FF) return [];
      const WF = new Set,
        SF = [];
      for (const CF of FF.split(hF)) {
        const FF = CF.trim();
        if ((0, uF.k)(FF) && !WF.has(FF) && (WF.add(FF), SF.push(FF), SF.length >= AF.m)) break
      }
      return SF
    }

    function dF(FF) {
      const WF = new Set,
        SF = [];
      for (const CF of FF)
        if ((0, uF.k)(CF) && !WF.has(CF) && (WF.add(CF), SF.push(CF), SF.length >= AF.m)) break;
      return SF.join(hF)
    }

    function PF() {
      return dF(uF.f)
    }

    function RF(FF) {
      var WF;
      return "emote" === FF ? PF() : null !== (WF = iW[FF][0]) && void 0 !== WF ? WF : eF[FF]
    }
    const iW = AF.v.reduce(((FF, WF) => {
        const SF = [];
        for (const uF in CF.i[WF]) {
          var AF;
          "default" === (null === (AF = (0, CF.n)(WF, uF)) || void 0 === AF ? void 0 : AF.cosmeticPack) && SF.push(uF)
        }
        return FF[WF] = SF, FF
      }), {}),
      eF = AF.v.reduce(((FF, WF) => (FF[WF] = Object.keys(CF.i[WF])[0], FF)), {})
  }
};
Object.freeze(modules);
for (const FF in modules) Object.freeze(modules[FF]);