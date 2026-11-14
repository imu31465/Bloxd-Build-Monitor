export const id = 141;
export const ids = [141];
export const modules = {
  36822: (WW, RW, MW) => {
    var wW = {
      "./cape_cow_cream.png": 26704,
      "./cape_cow_normal.png": 26713,
      "./cape_creator_level1.png": 26715,
      "./cape_creator_level2.png": 26717,
      "./cape_creator_level3.png": 26724,
      "./cape_none.png": 26727,
      "./cape_pig.png": 26733,
      "./cape_sheep.png": 26737,
      "./cape_super.png": 26744,
      "./cape_super_inverted.png": 26746,
      "./cape_youtuber.png": 26755
    };

    function CW(WW) {
      var RW = zR(WW);
      return MW(RW)
    }

    function zR(WW) {
      if (!MW.o(wW, WW)) {
        var RW = new Error("Cannot find module '" + WW + "'");
        throw RW.code = "MODULE_NOT_FOUND", RW
      }
      return wW[WW]
    }
    CW.keys = function() {
      return Object.keys(wW)
    }, CW.resolve = zR, WW.exports = CW, CW.id = 36822
  },
  38768: (WW, RW, MW) => {
    MW.r(RW), MW.d(RW, {
      openCharacterPreview: () => OW
    });
    var wW = MW(36189),
      CW = MW(2154),
      zR = MW(1828),
      AW = MW(540),
      bR = MW(35678),
      yR = MW(1835),
      NW = MW(35669),
      eW = MW(37418),
      BW = MW(37670),
      tR = MW(38683),
      TW = MW(35317),
      gR = MW(37821),
      iR = MW(35373),
      YW = MW(37844),
      JW = MW(38729),
      PW = MW(35293),
      IW = MW(35688),
      oW = MW(35700);
    MW(38704), MW(38074), MW(38709);
    let lW, FW, fW, QW, rR, cR, XW, jR, kR;
    const aR = document.createElement("canvas");
    async function sW() {
      await new Promise((WW => {
        setTimeout((() => {
          WW()
        }), 100)
      }))
    }
    aR.classList.add("CharCustomisationPreviewCanvas");
    const dW = {},
      pW = {},
      hW = {},
      UW = {};

    function EW(WW) {
      WW.unfreezeWorldMatrix();
      for (const RW of WW.getChildren()) EW(RW)
    }

    function VW(WW, RW) {
      const MW = (0, PW.e)(WW, RW);
      return MW in dW || (dW[MW] = (async () => {
        try {
          const MW = await (0, PW.f)(WW, fW),
            wW = new Map;
          for (const WW of MW.getNodes()) wW.set(WW.name, WW);
          const CW = (0, PW.b)(null !== RW && void 0 !== RW ? RW : WW, fW);
          (0, PW.h)(MW, CW, {
            onProcessedMesh: WW => {
              (0, PW.i)(WW), fW.TNW(WW, !1), WW.isVisible = !1
            }
          });
          for (const WW of MW.rootNodes) EW(WW);
          return wW
        } catch (wW) {
          throw delete dW[MW], console.error(`Failed to load preview attachment ${MW}:`, wW), wW
        }
      })()), dW[MW]
    }

    function mR(WW, RW) {
      WW.isVisible = RW;
      for (const MW of WW.getChildMeshes()) MW.isVisible = RW
    }

    function xR(WW, RW) {
      if (!QW) return;
      const bR = (0, CW.e)();
      if (bR.MRW(!1), wW.c.Player.meshApi.updatePlayerCosmetic(bR.GRW, XW, WW, RW, !0), "cape" === WW)
        if (RW === AW.i) rR.kMW(!1);
        else {
          rR.kMW(!0);
          rR.material.diffuseTexture = new JW.b(MW(36822)(`./cape_${RW}.png`), rR.QRW(), {
            invertY: !1,
            samplingMode: JW.b.NEAREST_NEAREST_MIPLINEAR
          })
        } UW[WW] = async function(WW, RW) {
        var MW;
        hW[WW] = RW;
        const wW = pW[WW];
        if (wW)
          for (const {
              mesh: zR,
              destNode: AW
            }
            of wW) {
            mR(zR, !1);
            const WW = cR.getNamedNode(XW, AW);
            cR.detachTransformNodeIfFound(zR, XW, WW)
          }
        pW[WW] = [];
        const CW = (0, zR.j)(WW, RW);
        if (null !== CW && void 0 !== CW && null !== (MW = CW.attachments) && void 0 !== MW && MW.length)
          for (const zR of CW.attachments) {
            let MW;
            try {
              MW = await VW(zR.modelGlb, zR.texture)
            } catch {
              continue
            }
            if (hW[WW] !== RW) return;
            const wW = MW.get(zR.modelNode);
            if (!wW) {
              console.error(`Preview attachment node ${zR.modelNode} not found in ${zR.modelGlb}`);
              continue
            }
            mR(wW, !0), (0, PW.p)(wW, zR.overlayColour);
            const CW = cR.getNamedNode(XW, zR.destNode);
            cR.attachTransformNode(wW, XW, CW), pW[WW].push({
              mesh: wW,
              destNode: zR.destNode
            })
          }
      }(WW, RW)
    }

    function vR(WW, RW) {
      aR.width = WW, aR.height = RW, lW.resize()
    }
    let KW = 0;
    class uW {
      constructor(WW) {
        this.ready = kR, this.dev = {
          setCamera(WW) {
            let {
              yaw: RW,
              pitch: MW,
              radius: wW
            } = WW;
            FW.alpha = RW, FW.beta = MW, wW && (FW.radius = wW)
          },
          canvas: () => aR,
          isolateHead(WW) {
            const RW = cR.getNodeNames(XW);
            for (let MW = 0; MW < RW.length; MW++) "HeadMesh" !== RW[MW] && "__root__" !== RW[MW] && "TorsoNode" !== RW[MW] && cR.setNodeEnabled(XW, MW, !1);
            if (WW) {
              const WW = cR.getNamedNode(XW, "HeadMesh");
              cR.setNodeDisableColorWrite(XW, WW, !0, (WW => {
                const RW = new YW.StandardMaterial(`${WW.name}_depthOnly`, WW.QRW());
                return RW.disableColorWrite = !0, RW
              }))
            }
            cR.setPosition(XW, 0, -12, 0)
          }
        }, this.closed = !1;
        const RW = WW.getBoundingClientRect();
        vR(RW.width, RW.height), KW++, lW.stopRenderLoop(), lW.runRenderLoop((() => {
          var WW;
          null === (WW = jR) || void 0 === WW || WW.render(lW.getDeltaTime()), fW.render()
        }))
      }
      isReady() {
        return !!QW
      }
      setCosmetic(WW, RW) {
        xR(WW, RW)
      }
      playEmote(WW) {
        if (!jR) return;
        if (!WW) return void jR.stopAnimation(NW.c.Emote);
        const RW = (0, bR.h)((0, yR.i)(WW).animation);
        jR.startAnimation(RW, NW.c.Emote, 0, yR.c)
      }
      async untilDrawn(WW) {
        if (await sW(), "cape" === WW && rR) {
          const WW = rR.material,
            RW = null === WW || void 0 === WW ? void 0 : WW.diffuseTexture;
          RW && !RW.isReady() && (await new Promise((WW => {
            RW.onLoadObservable.addOnce((() => {
              WW()
            }))
          })), await sW())
        }
        UW[WW] && (await UW[WW], await sW())
      }
      resize(WW, RW) {
        vR(WW, RW)
      }
      close() {
        this.closed || (this.closed = !0, KW--, 0 === KW && lW.stopRenderLoop())
      }
    }

    function OW(WW) {
      return WW.appendChild(aR), lW || function() {
        lW = new eW.b(aR, !0, {
          preserveDrawingBuffer: !0
        });
        const WW = (0, CW.e)();
        lW.BNW = WW.AC.engine.BNW, fW = new BW.b(lW), fW.clearColor = new iR.d(0, 0, 0, 0), fW.ambientColor = new iR.Color3(1, 1, 1), FW = new tR.e("OA", .61 * Math.PI, Math.PI / 2.05, 30, TW.vC.Zero(), fW), FW.attachControl(aR, !0), FW.panningSensibility = 0, kR = (0, wW.s)("Player", fW, !0).then((RW => {
          QW = RW.meshApi, rR = RW.capeMesh, cR = WW.AC.XRW;
          const MW = 8.33;
          XW = (0, wW.l)("Player", MW, !0, !0), cR.setPosition(XW, 0, -8.33, 0);
          const CW = cR.getNamedNode(XW, "BodyMesh");
          cR.attachTransformNode(rR, XW, CW), cR.set(XW, "aOpacity", 1), cR.HRW(XW, "aOpacity", 1), jR = new IW.AnimatorState, jR.BR = WW, jR.thinInstMgr = cR, jR.jMW = XW, jR.dyW = cR.teW(XW, 0), jR.modelLifeformType = "Player", jR.nodeNameAliases = (0, oW.c)("Player").nodeNameAliases;
          const zR = rR.LRW().boundingBox;
          rR.position.y = ((24 - zR.maximum.y + zR.minimum.y) / 2 - 1 / 32) / MW, rR.position.z = -1 / MW, rR.rotationQuaternion = null;
          const AW = Math.PI / 18,
            bR = zR.maximum.y / MW;
          rR.rotation.x = AW;
          const yR = Math.cos(AW),
            NW = Math.sin(AW);
          rR.position.y += bR * (1 - yR) + 0 * NW, rR.position.z -= bR * NW + 0 * (1 - yR);
          const eW = new YW.StandardMaterial("capeMaterial", rR.QRW());
          rR.material = eW;
          const BW = new iR.Color3(1, 1, 1);
          eW.diffuseColor = new iR.Color3, eW.specularColor = new iR.Color3, eW.emissiveColor = new iR.Color3, eW.ambientColor = new iR.Color3, BW.scaleToRef(.43, eW.diffuseColor), BW.scaleToRef(1.75, eW.ambientColor), eW.freeze();
          const tR = new gR.b("light", new TW.vC(-.1, 1, -.3), fW);
          tR.diffuse = new iR.Color3(1, 1, 1), tR.specular = new iR.Color3(1, 1, 1), tR.groundColor = new iR.Color3(.5, .5, .5)
        }))
      }(), new uW(WW)
    }
  },
  36814: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => tR
    });
    var wW = MW(35242),
      CW = MW(35257),
      zR = MW(35470),
      AW = MW(35259),
      bR = MW(35248);

    function yR(WW) {
      return `\n\t\t\t\t${(0,bR.A)(WW,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, bR.G)(WW, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, bR.G)(WW, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, bR.s)(WW, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function NW(WW, RW) {
      let MW = (0, bR.Kb)(WW, "skele" + (RW - 1));
      for (let CW = RW - 2; CW >= 0; CW--) MW = (0, bR.xb)(WW, `boneIdx == ${CW}`, (0, bR.Kb)(WW, `skele${CW}`), MW);
      const wW = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,bR.G)(WW,"int","boneIdx",(0,bR.Db)(WW,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,bR.G)(WW,"vec3","bone",MW)}\n\t\t\t\t${(0,bR.G)(WW,"vec2","pivot",(0,bR.s)(WW,"vec2","0.0",`${(0,bR.Sb)(WW,"position")}.z`))}\n\t\t\t\t${(0,bR.eb)(WW)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${wW}));`:`positionUpdated.yz += ${wW};`}\n\t\t`
    }

    function eW(WW) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,bR.s)(WW,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const BW = {
        x: 0,
        y: 0,
        z: 0,
        MyW(WW, RW) {
          return this.x = WW[RW], this.y = WW[RW + 1], this.z = WW[RW + 2], this
        }
      },
      tR = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (WW, RW) => ({
          ...(0, wW.e)("CAPE"),
          BLOXD_CAPE_BONES: `${WW}`,
          BLOXD_CAPE_MAX_Y: (0, CW.kb)(RW)
        }),
        getUniforms(WW) {
          return (0, zR.c)(function(WW) {
            const RW = [];
            for (let MW = 0; MW < WW; MW++) RW.push({
              name: `skele${MW}`,
              type: "highp vec3"
            });
            return RW
          }(this.skeleLen), "vertex", WW)
        },
        bind(WW) {
          for (let RW = 0; RW < this.skeleLen; RW++) WW.updateVector3(`skele${RW}`, BW.MyW(this.skele, 3 * RW))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(WW, RW) {
          return "vertex" !== WW ? null : {
            CUSTOM_VERTEX_DEFINITIONS: yR(RW),
            CUSTOM_VERTEX_UPDATE_POSITION: NW(RW, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: eW(RW)
          }
        }
      };
    (0, AW.o)(tR)
  },
  36737: (WW, RW, MW) => {
    MW.d(RW, {
      e: () => eW,
      h: () => BW
    });
    var wW = MW(35242),
      CW = MW(35470),
      zR = MW(35248),
      AW = MW(35259);
    const bR = "bloxdTextLodBias",
      yR = [{
        name: bR,
        type: "float"
      }],
      NW = "bloxdTextSample",
      eW = {
        planes: -.5,
        boards: -.5
      },
      BW = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, wW.e)("TEXT_SAMPLER"),
        getUniforms: WW => (0, CW.c)(yR, "fragment", WW),
        bind(WW) {
          WW.updateFloat(bR, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(WW, RW) {
          if ("fragment" !== WW) return null;
          const MW = (0, zR.O)(RW, `vec4 ${NW}(sampler2D s, vec2 uv, float bias)`, `fn ${NW}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            wW = (0, zR.O)(RW, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            CW = `${(0,zR.Z)(RW,"vDiffuseUV")} + uvOffset`,
            AW = (0, zR.O)(RW, `${NW}(diffuseSampler, ${CW}, ${(0,zR.Kb)(RW,bR)})`, `${NW}(diffuseSampler, diffuseSamplerSampler, ${CW}, ${(0,zR.Kb)(RW,bR)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${MW} {\n\t\t\t\t\t${(0,zR.G)(RW,"vec4","texel",wW)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,zR.s)(RW,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,zR.s)(RW,"vec3","0.0")}, ${(0,zR.s)(RW,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, zR.H)(RW)]: `baseColor = ${AW};`
          }
        }
      };
    (0, AW.o)(BW)
  },
  7714: (WW, RW, MW) => {
    MW.d(RW, {
      c: () => eW,
      e: () => bR,
      h: () => yR
    });
    var wW = MW(1828),
      CW = MW(1066),
      zR = MW(1835);
    const AW = ",";

    function bR(WW) {
      if (!WW) return [];
      const RW = new Set,
        MW = [];
      for (const wW of WW.split(AW)) {
        const WW = wW.trim();
        if ((0, zR.k)(WW) && !RW.has(WW) && (RW.add(WW), MW.push(WW), MW.length >= CW.q)) break
      }
      return MW
    }

    function yR(WW) {
      const RW = new Set,
        MW = [];
      for (const wW of WW)
        if ((0, zR.k)(wW) && !RW.has(wW) && (RW.add(wW), MW.push(wW), MW.length >= CW.q)) break;
      return MW.join(AW)
    }

    function NW() {
      return yR(zR.g)
    }

    function eW(WW) {
      var RW;
      return "emote" === WW ? NW() : null !== (RW = BW[WW][0]) && void 0 !== RW ? RW : tR[WW]
    }
    const BW = CW.y.reduce(((WW, RW) => {
        const MW = [];
        for (const zR in wW.f[RW]) {
          var CW;
          "default" === (null === (CW = (0, wW.j)(RW, zR)) || void 0 === CW ? void 0 : CW.cosmeticPack) && MW.push(zR)
        }
        return WW[RW] = MW, WW
      }), {}),
      tR = CW.y.reduce(((WW, RW) => (WW[RW] = Object.keys(wW.f[RW])[0], WW)), {})
  }
};
Object.freeze(modules);
for (const WW in modules) Object.freeze(modules[WW]);