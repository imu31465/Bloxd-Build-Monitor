export const id = 145;
export const ids = [145];
export const modules = {
  37772: (BB, TB, dB) => {
    var VB = {
      "./cape_cow_cream.png": 27356,
      "./cape_cow_normal.png": 27363,
      "./cape_creator_level1.png": 27370,
      "./cape_creator_level2.png": 27373,
      "./cape_creator_level3.png": 27379,
      "./cape_none.png": 27384,
      "./cape_pig.png": 27393,
      "./cape_sheep.png": 27402,
      "./cape_super.png": 27411,
      "./cape_super_inverted.png": 27419,
      "./cape_youtuber.png": 27427
    };

    function yB(BB) {
      var TB = pB(BB);
      return dB(TB)
    }

    function pB(BB) {
      if (!dB.o(VB, BB)) {
        var TB = new Error("Cannot find module '" + BB + "'");
        throw TB.code = "MODULE_NOT_FOUND", TB
      }
      return VB[BB]
    }
    yB.keys = function() {
      return Object.keys(VB)
    }, yB.resolve = pB, BB.exports = yB, yB.id = 37772
  },
  40024: (BB, TB, dB) => {
    dB.r(TB), dB.d(TB, {
      openCharacterPreview: () => qB
    });
    var VB = dB(37038),
      yB = dB(2385),
      pB = dB(1978),
      lB = dB(554),
      JB = dB(36496),
      YB = dB(1985),
      gB = dB(36491),
      oB = dB(38562),
      kB = dB(38840),
      LB = dB(39929),
      OB = dB(36119),
      DB = dB(39001),
      uB = dB(36180),
      HB = dB(39019),
      EB = dB(39976),
      vB = dB(36083),
      mB = dB(36515),
      iB = dB(36529),
      NB = (dB(39955), dB(39222), dB(39959), dB(35819));
    let tB, fB, sB, MB, zB, wB, UB, FB, KB;
    const rB = document.createElement("canvas");
    async function IB() {
      await new Promise((BB => {
        setTimeout((() => {
          BB()
        }), 100)
      }))
    }
    rB.classList.add("CharCustomisationPreviewCanvas");
    const cB = {},
      SB = {},
      PB = {},
      QB = {};

    function RB(BB) {
      BB.unfreezeWorldMatrix();
      for (const TB of BB.getChildren()) RB(TB)
    }

    function aB(BB, TB) {
      const dB = (0, vB.f)(BB, TB);
      return dB in cB || (cB[dB] = (async () => {
        try {
          const dB = await (0, vB.j)(BB, sB),
            VB = new Map;
          for (const BB of dB.getNodes()) VB.set(BB.name, BB);
          const yB = (0, vB.c)(null !== TB && void 0 !== TB ? TB : BB, sB);
          (0, vB.k)(dB, yB, {
            onProcessedMesh: BB => {
              (0, vB.o)(BB), sB.MVB(BB, !1), BB.isVisible = !1
            }
          });
          for (const BB of dB.rootNodes) RB(BB);
          return VB
        } catch (VB) {
          throw delete cB[dB], console.error(`Failed to load preview attachment ${dB}:`, VB), VB
        }
      })()), cB[dB]
    }

    function ZB(BB, TB) {
      BB.isVisible = TB;
      for (const dB of BB.getChildMeshes()) dB.isVisible = TB
    }

    function XB(BB, TB) {
      if (!MB) return;
      const JB = (0, yB.d)();
      if (JB.XM(!1), VB.d.Player.meshApi.updatePlayerCosmetic(JB.rK, UB, BB, TB, !0), "cape" === BB)
        if (TB === lB.h) zB.hN(!1);
        else {
          zB.hN(!0);
          zB.material.diffuseTexture = new EB.b(dB(37772)(`./cape_${TB}.png`), zB.jU(), {
            invertY: !1,
            samplingMode: EB.b.NEAREST_NEAREST_MIPLINEAR
          })
        } QB[BB] = async function(BB, TB) {
        var dB;
        PB[BB] = TB;
        const VB = SB[BB];
        if (VB)
          for (const {
              mesh: pB,
              destNode: lB
            }
            of VB) {
            ZB(pB, !1);
            const BB = wB.getNamedNode(UB, lB);
            wB.detachTransformNodeIfFound(pB, UB, BB)
          }
        SB[BB] = [];
        const yB = (0, pB.h)(BB, TB);
        if (null !== yB && void 0 !== yB && null !== (dB = yB.attachments) && void 0 !== dB && dB.length)
          for (const pB of yB.attachments) {
            let dB;
            try {
              dB = await aB(pB.modelGlb, pB.texture)
            } catch {
              continue
            }
            if (PB[BB] !== TB) return;
            const VB = dB.get(pB.modelNode);
            if (!VB) {
              console.error(`Preview attachment node ${pB.modelNode} not found in ${pB.modelGlb}`);
              continue
            }
            ZB(VB, !0), (0, vB.t)(VB, pB.overlayColour);
            const yB = wB.getNamedNode(UB, pB.destNode);
            wB.attachTransformNode(VB, UB, yB), SB[BB].push({
              mesh: VB,
              destNode: pB.destNode
            })
          }
      }(BB, TB)
    }

    function WB(BB, TB) {
      rB.width = BB, rB.height = TB, tB.resize()
    }
    let hB = 0;
    class CB {
      constructor(BB, TB) {
        this.framing = TB, this.ready = KB, this.dev = {
          setCamera: GB,
          canvas: () => rB,
          isolateHead(BB) {
            const TB = wB.getNodeNames(UB);
            for (let dB = 0; dB < TB.length; dB++) "HeadMesh" !== TB[dB] && "__root__" !== TB[dB] && "TorsoNode" !== TB[dB] && wB.setNodeEnabled(UB, dB, !1);
            if (BB) {
              const BB = wB.getNamedNode(UB, "HeadMesh");
              wB.setNodeDisableColorWrite(UB, BB, !0, (BB => {
                const TB = new HB.StandardMaterial(`${BB.name}_depthOnly`, BB.jU());
                return TB.disableColorWrite = !0, TB
              }))
            }
            wB.setPosition(UB, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const dB = BB.getBoundingClientRect();
        WB(dB.width, dB.height), hB++, tB.stopRenderLoop(), tB.runRenderLoop((() => {
          var BB;
          null === (BB = FB) || void 0 === BB || BB.render(tB.getDeltaTime()), sB.render()
        }))
      }
      isReady() {
        return !!MB
      }
      setCosmetic(BB, TB) {
        XB(BB, TB)
      }
      playEmote(BB) {
        if (!FB) return;
        if (!BB) return void FB.stopAnimation(gB.f.Emote);
        const TB = (0, JB.h)((0, YB.g)(BB).animation);
        FB.startAnimation(TB, gB.f.Emote, 0, YB.b)
      }
      async untilDrawn(BB) {
        if (await IB(), "cape" === BB && zB) {
          const BB = zB.material,
            TB = null === BB || void 0 === BB ? void 0 : BB.diffuseTexture;
          TB && !TB.isReady() && (await new Promise((BB => {
            TB.onLoadObservable.addOnce((() => {
              BB()
            }))
          })), await IB())
        }
        QB[BB] && (await QB[BB], await IB()), await sB.whenReadyAsync(), await new Promise((BB => {
          sB.onAfterRenderObservable.addOnce((() => {
            BB()
          }))
        }))
      }
      resetCamera() {
        fB.inertialAlphaOffset = 0, fB.inertialBetaOffset = 0, fB.inertialRadiusOffset = 0, GB(NB.d[this.framing])
      }
      resize(BB, TB) {
        WB(BB, TB)
      }
      close() {
        this.closed || (this.closed = !0, hB--, 0 === hB && tB.stopRenderLoop())
      }
    }

    function GB(BB) {
      let {
        yaw: TB,
        pitch: dB,
        radius: VB,
        target: yB
      } = BB;
      fB.alpha = TB, fB.beta = dB, VB && (fB.radius = VB), yB && fB.target.set(yB[0], yB[1], yB[2])
    }

    function qB(BB, TB) {
      return BB.appendChild(rB), tB || function() {
        tB = new oB.d(rB, !0, {
          preserveDrawingBuffer: !0
        });
        const BB = (0, yB.d)();
        tB.fVB = BB.yu.engine.fVB, sB = new kB.c(tB), sB.clearColor = new uB.d(0, 0, 0, 0), sB.ambientColor = new uB.Color3(1, 1, 1), fB = new LB.b("tH", 0, 0, 1, OB.RD.Zero(), sB), fB.attachControl(rB, !0), fB.panningSensibility = 0, KB = (0, VB.z)("Player", sB, !0).then((TB => {
          MB = TB.meshApi, zB = TB.capeMesh, wB = BB.yu.YF;
          const dB = 8.33;
          UB = (0, VB.m)("Player", dB, !0, !0), wB.setPosition(UB, 0, -8.33, 0);
          const yB = wB.getNamedNode(UB, "BodyMesh");
          wB.attachTransformNode(zB, UB, yB), wB.set(UB, "aOpacity", 1), wB.hK(UB, "aOpacity", 1), FB = new mB.AnimatorState, FB.OL = BB, FB.thinInstMgr = wB, FB.kF = UB, FB.jdB = wB.sVB(UB, 0), FB.modelLifeformType = "Player", FB.nodeNameAliases = (0, iB.c)("Player").nodeNameAliases;
          const pB = zB.IK().boundingBox;
          zB.position.y = ((24 - pB.maximum.y + pB.minimum.y) / 2 - 1 / 32) / dB, zB.position.z = -1 / dB, zB.rotationQuaternion = null;
          const lB = Math.PI / 18,
            JB = pB.maximum.y / dB;
          zB.rotation.x = lB;
          const YB = Math.cos(lB),
            gB = Math.sin(lB);
          zB.position.y += JB * (1 - YB) + 0 * gB, zB.position.z -= JB * gB + 0 * (1 - YB);
          const oB = new HB.StandardMaterial("capeMaterial", zB.jU());
          zB.material = oB;
          const kB = new uB.Color3(1, 1, 1);
          oB.diffuseColor = new uB.Color3, oB.specularColor = new uB.Color3, oB.emissiveColor = new uB.Color3, oB.ambientColor = new uB.Color3, kB.scaleToRef(.43, oB.diffuseColor), kB.scaleToRef(1.75, oB.ambientColor), oB.freeze();
          const LB = new DB.c("light", new OB.RD(-.1, 1, -.3), sB);
          LB.diffuse = new uB.Color3(1, 1, 1), LB.specular = new uB.Color3(1, 1, 1), LB.groundColor = new uB.Color3(.5, .5, .5)
        }))
      }(), new CB(BB, TB)
    }
  },
  37767: (BB, TB, dB) => {
    dB.d(TB, {
      c: () => LB
    });
    var VB = dB(36024),
      yB = dB(36041),
      pB = dB(36292),
      lB = dB(36050),
      JB = dB(36033);

    function YB(BB) {
      return `\n\t\t\t\t${(0,JB.z)(BB,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, JB.F)(BB, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, JB.F)(BB, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, JB.o)(BB, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function gB(BB, TB) {
      let dB = (0, JB.Fb)(BB, "skele" + (TB - 1));
      for (let yB = TB - 2; yB >= 0; yB--) dB = (0, JB.xb)(BB, `boneIdx == ${yB}`, (0, JB.Fb)(BB, `skele${yB}`), dB);
      const VB = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,JB.F)(BB,"int","boneIdx",(0,JB.Cb)(BB,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,JB.F)(BB,"vec3","bone",dB)}\n\t\t\t\t${(0,JB.F)(BB,"vec2","pivot",(0,JB.o)(BB,"vec2","0.0",`${(0,JB.Qb)(BB,"position")}.z`))}\n\t\t\t\t${(0,JB.fb)(BB)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${VB}));`:`positionUpdated.yz += ${VB};`}\n\t\t`
    }

    function oB(BB) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,JB.o)(BB,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const kB = {
        x: 0,
        y: 0,
        z: 0,
        HdB(BB, TB) {
          return this.x = BB[TB], this.y = BB[TB + 1], this.z = BB[TB + 2], this
        }
      },
      LB = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (BB, TB) => ({
          ...(0, VB.c)("CAPE"),
          BLOXD_CAPE_BONES: `${BB}`,
          BLOXD_CAPE_MAX_Y: (0, yB.kb)(TB)
        }),
        getUniforms(BB) {
          return (0, pB.e)(function(BB) {
            const TB = [];
            for (let dB = 0; dB < BB; dB++) TB.push({
              name: `skele${dB}`,
              type: "highp vec3"
            });
            return TB
          }(this.skeleLen), "vertex", BB)
        },
        bind(BB) {
          for (let TB = 0; TB < this.skeleLen; TB++) BB.updateVector3(`skele${TB}`, kB.HdB(this.skele, 3 * TB))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(BB, TB) {
          return "vertex" !== BB ? null : {
            CUSTOM_VERTEX_DEFINITIONS: YB(TB),
            CUSTOM_VERTEX_UPDATE_POSITION: gB(TB, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: oB(TB)
          }
        }
      };
    (0, lB.i)(LB)
  },
  37661: (BB, TB, dB) => {
    dB.d(TB, {
      e: () => oB,
      i: () => kB
    });
    var VB = dB(36024),
      yB = dB(36292),
      pB = dB(36033),
      lB = dB(36050);
    const JB = "bloxdTextLodBias",
      YB = [{
        name: JB,
        type: "float"
      }],
      gB = "bloxdTextSample",
      oB = {
        planes: -.5,
        boards: -.5
      },
      kB = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, VB.c)("TEXT_SAMPLER"),
        getUniforms: BB => (0, yB.e)(YB, "fragment", BB),
        bind(BB) {
          BB.updateFloat(JB, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(BB, TB) {
          if ("fragment" !== BB) return null;
          const dB = (0, pB.N)(TB, `vec4 ${gB}(sampler2D s, vec2 uv, float bias)`, `fn ${gB}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            VB = (0, pB.N)(TB, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            yB = `${(0,pB.Y)(TB,"vDiffuseUV")} + uvOffset`,
            lB = (0, pB.N)(TB, `${gB}(diffuseSampler, ${yB}, ${(0,pB.Fb)(TB,JB)})`, `${gB}(diffuseSampler, diffuseSamplerSampler, ${yB}, ${(0,pB.Fb)(TB,JB)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${dB} {\n\t\t\t\t\t${(0,pB.F)(TB,"vec4","texel",VB)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,pB.o)(TB,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,pB.o)(TB,"vec3","0.0")}, ${(0,pB.o)(TB,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, pB.H)(TB)]: `baseColor = ${lB};`
          }
        }
      };
    (0, lB.i)(kB)
  },
  8155: (BB, TB, dB) => {
    dB.d(TB, {
      d: () => oB,
      h: () => JB,
      i: () => YB
    });
    var VB = dB(1978),
      yB = dB(1117),
      pB = dB(1985);
    const lB = ",";

    function JB(BB) {
      if (!BB) return [];
      const TB = new Set,
        dB = [];
      for (const VB of BB.split(lB)) {
        const BB = VB.trim();
        if ((0, pB.k)(BB) && !TB.has(BB) && (TB.add(BB), dB.push(BB), dB.length >= yB.k)) break
      }
      return dB
    }

    function YB(BB) {
      const TB = new Set,
        dB = [];
      for (const VB of BB)
        if ((0, pB.k)(VB) && !TB.has(VB) && (TB.add(VB), dB.push(VB), dB.length >= yB.k)) break;
      return dB.join(lB)
    }

    function gB() {
      return YB(pB.e)
    }

    function oB(BB) {
      var TB;
      return "emote" === BB ? gB() : null !== (TB = kB[BB][0]) && void 0 !== TB ? TB : LB[BB]
    }
    const kB = yB.q.reduce(((BB, TB) => {
        const dB = [];
        for (const pB in VB.d[TB]) {
          var yB;
          "default" === (null === (yB = (0, VB.h)(TB, pB)) || void 0 === yB ? void 0 : yB.cosmeticPack) && dB.push(pB)
        }
        return BB[TB] = dB, BB
      }), {}),
      LB = yB.q.reduce(((BB, TB) => (BB[TB] = Object.keys(VB.d[TB])[0], BB)), {})
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);