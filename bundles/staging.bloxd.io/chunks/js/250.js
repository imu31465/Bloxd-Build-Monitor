export const id = 250;
export const ids = [250];
export const modules = {
  41208: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      openCharacterPreview: () => bB
    });
    var TB = ZB(38159),
      JB = ZB(2912),
      oB = ZB(650),
      GB = ZB(37194),
      vB = ZB(2333),
      kB = ZB(37188),
      cB = ZB(39872),
      nB = ZB(40143),
      hB = ZB(41111),
      zB = ZB(37113),
      FB = ZB(40297),
      NB = ZB(37304),
      gB = ZB(40318),
      qB = ZB(41170),
      yB = ZB(37108),
      UB = ZB(1281),
      WB = ZB(2326),
      dB = ZB(37261),
      CB = ZB(37366);
    class QB {
      constructor(BB, IB) {
        this.pose = BB, this.nodes = void 0, this.nodes = BB.boneNames.map((BB => IB.get(BB)))
      }
      write(BB) {
        this.pose.pose(BB);
        const {
          rotations: IB
        } = this.pose;
        for (let ZB = 0; ZB < this.nodes.length; ZB++) {
          const BB = 4 * ZB;
          this.nodes[ZB].rotationQuaternion.set(IB[BB], IB[BB + 1], IB[BB + 2], IB[BB + 3])
        }
      }
    }

    function sB(BB) {
      BB.unfreezeWorldMatrix();
      for (const IB of BB.getChildren()) sB(IB)
    }

    function wB(BB, IB) {
      BB.isVisible = IB;
      for (const ZB of BB.getChildMeshes()) ZB.isVisible = IB
    }
    class OB {
      constructor(BB, IB, ZB) {
        this.lg = BB, this.thinInstMgr = IB, this.gR = ZB, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(BB, IB, ZB) {
        const TB = (0, dB.e)(BB, IB);
        return TB in this.modelCache || (this.modelCache[TB] = (async () => {
          try {
            const TB = await (0, dB.f)(BB, this.lg),
              JB = new Map;
            for (const BB of TB.getNodes()) JB.set(BB.name, BB);
            const oB = (0, dB.b)(null !== IB && void 0 !== IB ? IB : BB, this.lg);
            (0, dB.i)(TB, oB, {
              keepTransforms: void 0 !== ZB,
              onProcessedMesh: BB => {
                (0, dB.j)(BB), this.lg.jTB(BB, !1), BB.isVisible = !1
              }
            });
            for (const BB of TB.rootNodes) sB(BB);
            const GB = void 0 === ZB ? null : (0, CB.i)(ZB, (BB => {
              var IB, ZB;
              return null !== (IB = null === (ZB = JB.get(BB)) || void 0 === ZB ? void 0 : ZB.rotationQuaternion) && void 0 !== IB ? IB : null
            }));
            return {
              nodesByName: JB,
              bones: null === GB ? null : new QB(GB, JB)
            }
          } catch (JB) {
            throw delete this.modelCache[TB], console.error(`Failed to load preview attachment ${TB}:`, JB), JB
          }
        })()), this.modelCache[TB]
      }
      async update(BB, IB) {
        var ZB;
        const {
          thinInstMgr: TB,
          gR: JB
        } = this;
        this.cosmeticNames[BB] = IB;
        const oB = this.attachmentsByType[BB];
        if (oB)
          for (const {
              mesh: vB,
              destNode: kB,
              bones: cB
            }
            of oB) {
            null !== cB && (0, UB.db)(this.shownBones, cB), wB(vB, !1);
            const BB = TB.getNamedNode(JB, kB);
            TB.detachTransformNodeIfFound(vB, JB, BB)
          }
        this.attachmentsByType[BB] = [];
        const GB = (0, WB.h)(BB, IB);
        if (null !== GB && void 0 !== GB && null !== (ZB = GB.attachments) && void 0 !== ZB && ZB.length)
          for (const vB of GB.attachments) {
            let ZB;
            try {
              ZB = await this.loadModel(vB.modelGlb, vB.texture, vB.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[BB] !== IB) return;
            const oB = ZB.nodesByName.get(vB.modelNode);
            if (!oB) {
              console.error(`Preview attachment node ${vB.modelNode} not found in ${vB.modelGlb}`);
              continue
            }
            wB(oB, !0), (0, dB.p)(oB, vB.overlayColour);
            const GB = TB.getNamedNode(JB, vB.destNode);
            TB.attachTransformNode(oB, JB, GB), this.attachmentsByType[BB].push({
              mesh: oB,
              destNode: vB.destNode,
              bones: ZB.bones
            }), null !== ZB.bones && this.shownBones.push(ZB.bones)
          }
      }
      writePoses(BB) {
        for (const IB of this.shownBones) IB.write(BB)
      }
    }
    var YB = ZB(37209),
      iB = (ZB(41144), ZB(40528), ZB(41147), ZB(34235));
    let pB, aB, HB, MB, jB, PB, RB, rB, mB, XB;
    const LB = document.createElement("canvas");
    async function eB() {
      await new Promise((BB => {
        setTimeout((() => {
          BB()
        }), 100)
      }))
    }
    LB.classList.add("CharCustomisationPreviewCanvas");
    const uB = {};

    function fB(BB, IB) {
      LB.width = BB, LB.height = IB, pB.resize()
    }
    let lB = 0;
    class AB {
      constructor(BB, IB) {
        this.framing = IB, this.ready = XB, this.dev = {
          canvas: () => LB,
          isolateHead(BB) {
            const IB = PB.getNodeNames(RB);
            for (let ZB = 0; ZB < IB.length; ZB++) "HeadMesh" !== IB[ZB] && "__root__" !== IB[ZB] && "TorsoNode" !== IB[ZB] && PB.setNodeEnabled(RB, ZB, !1);
            if (BB) {
              const BB = PB.getNamedNode(RB, "HeadMesh");
              PB.setNodeDisableColorWrite(RB, BB, !0, (BB => {
                const IB = new gB.StandardMaterial(`${BB.name}_depthOnly`, BB.JR());
                return IB.disableColorWrite = !0, IB
              }))
            }
            PB.setPosition(RB, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const ZB = BB.getBoundingClientRect();
        fB(ZB.width, ZB.height), lB++, pB.stopRenderLoop(), pB.runRenderLoop((() => {
          var BB, IB;
          null === (BB = rB) || void 0 === BB || BB.render(pB.getDeltaTime()), null === (IB = mB) || void 0 === IB || IB.writePoses(performance.now() / 1e3), HB.render()
        }))
      }
      isReady() {
        return !!MB
      }
      setCosmetic(BB, IB) {
        ! function(BB, IB) {
          if (!MB) return;
          const GB = (0, JB.h)();
          GB.VY(!1), TB.d.Player.meshApi.updatePlayerCosmetic(GB.Jm, RB, BB, IB, !0), "cape" === BB && (IB === oB.h ? jB.qY(!1) : (jB.qY(!0), jB.material.diffuseTexture = new qB.e(ZB(38857)(`./cape_${IB}.png`), jB.JR(), {
            invertY: !1,
            samplingMode: qB.e.NEAREST_NEAREST_MIPLINEAR
          })));
          uB[BB] = mB.update(BB, IB)
        }(BB, IB)
      }
      playEmote(BB) {
        if (!rB) return;
        if (!BB) return void rB.stopAnimation(kB.h.Emote);
        const IB = (0, GB.d)((0, vB.j)(BB).animation);
        rB.startAnimation(IB, kB.h.Emote, 0, vB.d)
      }
      async untilDrawn(BB) {
        if (await eB(), "cape" === BB && jB) {
          const BB = jB.material,
            IB = null === BB || void 0 === BB ? void 0 : BB.diffuseTexture;
          IB && !IB.isReady() && (await new Promise((BB => {
            IB.onLoadObservable.addOnce((() => {
              BB()
            }))
          })), await eB())
        }
        uB[BB] && (await uB[BB], await eB()), await HB.whenReadyAsync(), await new Promise((BB => {
          HB.onAfterRenderObservable.addOnce((() => {
            BB()
          }))
        }))
      }
      setOrbit(BB) {
        tB(BB)
      }
      resetCamera() {
        aB.inertialAlphaOffset = 0, aB.inertialBetaOffset = 0, aB.inertialRadiusOffset = 0, tB(iB.b[this.framing])
      }
      resize(BB, IB) {
        fB(BB, IB)
      }
      close() {
        this.closed || (this.closed = !0, lB--, 0 === lB && pB.stopRenderLoop())
      }
    }

    function tB(BB) {
      let {
        yaw: IB,
        pitch: ZB,
        radius: TB,
        target: JB
      } = BB;
      aB.alpha = IB, aB.beta = ZB, TB && (aB.radius = TB), JB && aB.target.set(JB[0], JB[1], JB[2])
    }

    function bB(BB, IB) {
      return BB.appendChild(LB), pB || function() {
        pB = new cB.e(LB, !0, {
          preserveDrawingBuffer: !0
        });
        const BB = (0, JB.h)();
        pB.iTB = BB.Ig.engine.iTB, HB = new nB.b(pB), HB.clearColor = new NB.e(0, 0, 0, 0), HB.ambientColor = new NB.Color3(1, 1, 1), aB = new hB.c("rq", 0, 0, 1, zB.rN.Zero(), HB), aB.attachControl(LB, !0), aB.panningSensibility = 0, XB = (0, TB.s)("Player", HB, !0).then((IB => {
          MB = IB.meshApi, jB = IB.capeMesh, PB = BB.Ig.kR;
          const ZB = 8.33;
          RB = (0, TB.j)("Player", ZB, !0, !0), PB.setPosition(RB, 0, -8.33, 0);
          const JB = PB.getNamedNode(RB, "BodyMesh");
          PB.attachTransformNode(jB, RB, JB), PB.set(RB, "aOpacity", 1), PB.Wm(RB, "aOpacity", 1), mB = new OB(HB, PB, RB), rB = new yB.AnimatorState, rB.Nz = BB, rB.thinInstMgr = PB, rB.gR = RB, rB.SZB = PB.pTB(RB, 0), rB.modelLifeformType = "Player", rB.nodeNameAliases = (0, YB.c)("Player").nodeNameAliases;
          const oB = jB.qm().boundingBox;
          jB.position.y = ((24 - oB.maximum.y + oB.minimum.y) / 2 - 1 / 32) / ZB, jB.position.z = -1 / ZB, jB.rotationQuaternion = null;
          const GB = Math.PI / 18,
            vB = oB.maximum.y / ZB;
          jB.rotation.x = GB;
          const kB = Math.cos(GB),
            cB = Math.sin(GB);
          jB.position.y += vB * (1 - kB) + 0 * cB, jB.position.z -= vB * cB + 0 * (1 - kB);
          const nB = new gB.StandardMaterial("capeMaterial", jB.JR());
          jB.material = nB;
          const hB = new NB.Color3(1, 1, 1);
          nB.diffuseColor = new NB.Color3, nB.specularColor = new NB.Color3, nB.emissiveColor = new NB.Color3, nB.ambientColor = new NB.Color3, hB.scaleToRef(.43, nB.diffuseColor), hB.scaleToRef(1.75, nB.ambientColor), nB.freeze();
          const qB = new FB.d("light", new zB.rN(-.1, 1, -.3), HB);
          qB.diffuse = new NB.Color3(1, 1, 1), qB.specular = new NB.Color3(1, 1, 1), qB.groundColor = new NB.Color3(.5, .5, .5)
        }))
      }(), new AB(BB, IB)
    }
  },
  38851: (BB, IB, ZB) => {
    ZB.d(IB, {
      b: () => zB
    });
    var TB = ZB(37218),
      JB = ZB(37231),
      oB = ZB(37490),
      GB = ZB(37239),
      vB = ZB(37223);

    function kB(BB) {
      return `\n\t\t\t\t${(0,vB.y)(BB,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, vB.C)(BB, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, vB.C)(BB, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, vB.p)(BB, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function cB(BB, IB) {
      let ZB = (0, vB.Hb)(BB, "skele" + (IB - 1));
      for (let JB = IB - 2; JB >= 0; JB--) ZB = (0, vB.ub)(BB, `boneIdx == ${JB}`, (0, vB.Hb)(BB, `skele${JB}`), ZB);
      const TB = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,vB.C)(BB,"int","boneIdx",(0,vB.Cb)(BB,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,vB.C)(BB,"vec3","bone",ZB)}\n\t\t\t\t${(0,vB.C)(BB,"vec2","pivot",(0,vB.p)(BB,"vec2","0.0",`${(0,vB.Pb)(BB,"position")}.z`))}\n\t\t\t\t${(0,vB.ab)(BB)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${TB}));`:`positionUpdated.yz += ${TB};`}\n\t\t`
    }

    function nB(BB) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,vB.p)(BB,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const hB = {
        x: 0,
        y: 0,
        z: 0,
        WZB(BB, IB) {
          return this.x = BB[IB], this.y = BB[IB + 1], this.z = BB[IB + 2], this
        }
      },
      zB = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (BB, IB) => ({
          ...(0, TB.c)("CAPE"),
          BLOXD_CAPE_BONES: `${BB}`,
          BLOXD_CAPE_MAX_Y: (0, JB.nb)(IB)
        }),
        getUniforms(BB) {
          return (0, oB.b)(function(BB) {
            const IB = [];
            for (let ZB = 0; ZB < BB; ZB++) IB.push({
              name: `skele${ZB}`,
              type: "highp vec3"
            });
            return IB
          }(this.skeleLen), "vertex", BB)
        },
        bind(BB) {
          for (let IB = 0; IB < this.skeleLen; IB++) BB.updateVector3(`skele${IB}`, hB.WZB(this.skele, 3 * IB))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(BB, IB) {
          return "vertex" !== BB ? null : {
            CUSTOM_VERTEX_DEFINITIONS: kB(IB),
            CUSTOM_VERTEX_UPDATE_POSITION: cB(IB, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: nB(IB)
          }
        }
      };
    (0, GB.p)(zB)
  },
  38726: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => nB,
      h: () => hB
    });
    var TB = ZB(37218),
      JB = ZB(37490),
      oB = ZB(37223),
      GB = ZB(37239);
    const vB = "bloxdTextLodBias",
      kB = [{
        name: vB,
        type: "float"
      }],
      cB = "bloxdTextSample",
      nB = {
        planes: -.5,
        boards: -.5
      },
      hB = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, TB.c)("TEXT_SAMPLER"),
        getUniforms: BB => (0, JB.b)(kB, "fragment", BB),
        bind(BB) {
          BB.updateFloat(vB, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(BB, IB) {
          if ("fragment" !== BB) return null;
          const ZB = (0, oB.J)(IB, `vec4 ${cB}(sampler2D s, vec2 uv, float bias)`, `fn ${cB}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            TB = (0, oB.J)(IB, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            JB = `${(0,oB.W)(IB,"vDiffuseUV")} + uvOffset`,
            GB = (0, oB.J)(IB, `${cB}(diffuseSampler, ${JB}, ${(0,oB.Hb)(IB,vB)})`, `${cB}(diffuseSampler, diffuseSamplerSampler, ${JB}, ${(0,oB.Hb)(IB,vB)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${ZB} {\n\t\t\t\t\t${(0,oB.C)(IB,"vec4","texel",TB)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,oB.p)(IB,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,oB.p)(IB,"vec3","0.0")}, ${(0,oB.p)(IB,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, oB.E)(IB)]: `baseColor = ${GB};`
          }
        }
      };
    (0, GB.p)(hB)
  },
  41147: (BB, IB, ZB) => {
    ZB.r(IB), ZB.d(IB, {
      CapeMaterialPlugin: () => dB,
      HueTintMaterialPlugin: () => CB,
      LifeformMaterialPlugin: () => QB,
      OverlayMaterialPlugin: () => sB
    });
    var TB = ZB(41154),
      JB = ZB(38070);
    class oB extends((0, TB.h)(JB.d)) {}(0, TB.j)(JB.d, oB);
    var GB = ZB(37212);
    class vB extends((0, TB.h)(GB.f)) {}(0, TB.j)(GB.f, vB);
    var kB = ZB(37901);
    class cB extends((0, TB.h)(kB.f)) {}(0, TB.j)(kB.f, cB);
    var nB = ZB(37477),
      hB = ZB(40318),
      zB = ZB(37469);
    class FB extends((0, TB.h)(zB.d)) {
      constructor(BB, IB, ZB) {
        super(BB, IB, ZB), (0, nB.f)(BB)
      }
      dispose(BB) {
        (0, nB.h)(this._material), super.dispose(BB)
      }
    }(0, TB.j)(zB.d, FB), (0, zB.f)({
      disableUnusedSpecularTerm: TB.d,
      isLightingDisabled: BB => BB instanceof hB.StandardMaterial && BB.disableLighting
    });
    var NB = ZB(38726);
    class gB extends((0, TB.h)(NB.h)) {}(0, TB.j)(NB.h, gB);
    var qB = ZB(38851),
      yB = ZB(37317),
      UB = ZB(38199),
      WB = ZB(37255);
    class dB extends((0, TB.h)(qB.b)) {}(0, TB.j)(qB.b, dB);
    class CB extends((0, TB.h)(yB.d)) {}(0, TB.j)(yB.d, CB);
    class QB extends((0, TB.h)(UB.n)) {}(0, TB.j)(UB.n, QB);
    class sB extends((0, TB.h)(WB.c)) {}(0, TB.j)(WB.c, sB)
  },
  41154: (BB, IB, ZB) => {
    ZB.d(IB, {
      d: () => uB,
      h: () => UB,
      j: () => xB
    });
    var TB = ZB(40318),
      JB = ZB(41162),
      oB = ZB(41203),
      GB = ZB(41170),
      vB = ZB(37869),
      kB = ZB(37878),
      cB = ZB(37884),
      nB = ZB(37890),
      hB = ZB(37248),
      zB = ZB(37253),
      FB = ZB(41176),
      NB = ZB(37239),
      gB = ZB(37243),
      qB = ZB(37223);

    function yB(BB, IB) {
      return Object.assign((function(BB, ZB, TB, JB) {
        return IB(this.featureState, BB, ZB, TB, JB)
      }), {
        vN: BB
      })
    }

    function UB(BB) {
      const IB = class extends FB.b {
          constructor(IB, ZB) {
            const TB = (0, gB._)(IB),
              JB = TB && (0, gB.v)(TB, BB.name);
            for (var oB = arguments.length, GB = new Array(oB > 2 ? oB - 2 : 0), vB = 2; vB < oB; vB++) GB[vB - 2] = arguments[vB];
            super(IB, BB.name, BB.priority, JB ? JB.defines : BB.defines(...GB), !1), this.featureState = void 0, this.featureState = ZB, this._pluginManager._addPlugin(this), this._enable(!0), (0, gB.y)(this._material, BB, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return BB.className
          }
          isCompatible(BB) {
            return BB === qB.c.GLSL || BB === qB.c.WGSL
          }
        },
        ZB = (0, NB.h)(BB);
      for (const [TB, JB] of Object.entries(NB.c)) {
        const oB = BB[TB];
        if (oB) {
          const BB = ZB[TB];
          Object.defineProperty(IB.prototype, JB, {
            value: yB(oB, BB),
            writable: !0,
            configurable: !0
          })
        }
      }
      return IB
    }
    class WB extends(UB(vB.e)) {}
    var dB = ZB(39872),
      CB = ZB(41179),
      QB = ZB(41184);

    function sB(BB, IB, ZB) {
      return (0, QB.d)(ZB, IB.urls, (() => async function(BB, IB, ZB) {
        const {
          width: TB
        } = BB[0].getSize(), JB = BB.map(((BB, ZB) => {
          var JB;
          const oB = Math.round(BB.getSize().height / TB),
            GB = null === IB || void 0 === IB ? void 0 : IB[ZB];
          return {
            pixels: GB && GB.byteLength === TB * TB * oB * 4 ? GB : null !== (JB = wB.get(BB.getInternalTexture())) && void 0 !== JB ? JB : BB._readPixelsSync(),
            layers: oB
          }
        })), oB = ZB.PN().getCaps().texture2DArrayMaxLayerCount, vB = (0, QB.c)(JB, TB, oB).map((BB => {
          let {
            pixels: IB,
            layers: JB
          } = BB;
          return {
            atlas: new CB.b(IB, TB, TB, JB, dB.e.TEXTUREFORMAT_RGBA, ZB, !0, !1, GB.e.NEAREST_NEAREST_MIPLINEAR),
            layers: JB
          }
        }));
        return BB.forEach(((BB, IB) => {
          const TB = BB.getInternalTexture();
          wB.has(TB) || (! function(BB, IB) {
            const ZB = IB.createRawTexture(new Uint8Array(4), 1, 1, dB.e.TEXTUREFORMAT_RGBA, !1, !1, GB.e.NEAREST_SAMPLINGMODE);
            BB._hardwareTexture.release(), IB.unbindAllTextures(), ZB._swapAndDie(BB, !1)
          }(TB, ZB.PN()), wB.set(TB, JB[IB].pixels))
        })), vB
      }(BB, IB.pixels, ZB)))
    }
    const wB = new WeakMap;
    var OB = ZB(37897);
    class YB extends(UB(kB.g)) {
      constructor(BB, IB) {
        super(BB, IB), this.loaded = new Set, this.mirrors = void 0, this.mirrors = IB.textures.map((BB => BB.mirror)), this.mirrors.forEach(((BB, IB) => {
          BB.onLoadObservable.add((BB => {
            this.setTextureArrayData(BB, IB).catch((BB => {
              console.error(`Failed to build the texture arrays, at atlas ${IB}`, BB)
            }))
          }))
        })), (0, OB.i)(IB, BB.shaderLanguage)
      }
      async setTextureArrayData(BB, IB) {
        const ZB = this.featureState,
          {
            width: TB,
            height: JB
          } = BB.getSize(),
          oB = this._material.shaderLanguage;
        if (!ZB.useWebGL2) return void(0, OB.e)(this._material, ZB, IB, TB, Math.round(JB / TB), oB);
        if (this.loaded.add(IB), this.loaded.size < this.mirrors.length) return;
        const GB = await sB(this.mirrors, ZB.sources, this._material.JR());
        (0, OB.d)(this._material, ZB, GB, TB, oB)
      }
    }
    var iB = ZB(41192),
      pB = ZB(40351),
      aB = ZB(37113),
      HB = ZB(41197),
      MB = ZB(40463),
      jB = ZB(40341),
      PB = ZB(41140),
      RB = ZB(37650),
      rB = ZB(41199);
    class mB extends iB.d {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const XB = {
      Mesh: HB.c,
      TransformNode: PB.c,
      UN: iB.d,
      VertexBuffer: iB.e,
      BoundingInfo: pB.d,
      rN: aB.rN,
      ArenaBuffer: mB,
      SubMesh: jB.e,
      VertexData: MB.c,
      MirroredGeometry: rB.e,
      meshFromArrays: rB.i,
      plainMeshFromArrays: rB.m
    };
    (0, RB.g)(XB);
    var LB = ZB(37477);
    class eB extends(UB(nB.f)) {
      constructor(BB, IB) {
        if (super(BB, IB), BB instanceof TB.StandardMaterial && IB.dirLightCount > 0) {
          const IB = BB,
            ZB = IB._blockDirtyMechanism;
          IB._blockDirtyMechanism = !0, BB.disableLighting = !0, IB._blockDirtyMechanism = ZB;
          const TB = (0, gB._)(BB);
          TB && (TB.disableLighting = !0, (0, gB.Y)(TB))
        }(0, LB.f)(BB)
      }
      dispose(BB) {
        (0, LB.h)(this._material), super.dispose(BB)
      }
    }

    function uB(BB, IB) {
      if (!(IB instanceof TB.StandardMaterial) || IB.specularTexture) return;
      const {
        r: ZB,
        g: JB,
        b: oB
      } = IB.specularColor;
      0 === ZB && 0 === JB && 0 === oB && (BB.SPECULARTERM = !1)
    }(0, nB.c)({
      disableUnusedSpecularTerm: uB
    });
    var fB = ZB(37336),
      lB = ZB(37662);
    const AB = new RegExp(`^#define ${cB.c}\\s*$`, "m");
    class tB extends(UB(cB.k)) {
      constructor(BB, IB) {
        super(BB, IB), this.WN = !1, IB.ditherOnlyWhileFading && (lB.f.add(BB), this.prewarmDitherTwins(BB))
      }
      prewarmDitherTwins(BB) {
        const IB = new WeakSet;
        BB.onEffectCreatedObservable.add((ZB => {
          let {
            effect: TB,
            subMesh: JB
          } = ZB;
          if (this.featureState.prewarmingDither || IB.has(TB)) return;
          IB.add(TB);
          const oB = null === JB || void 0 === JB ? void 0 : JB.getMesh();
          oB && !AB.test(TB.defines) && BB.JR().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(oB) || IB.delete(TB)
          }))
        }))
      }
      prewarmDither(BB) {
        if (this.WN || BB.mC()) return !1;
        const IB = new jB.e(0, 0, 0, 0, 0, BB, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(BB, IB)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== IB.effect
      }
      dispose(BB) {
        this.WN = !0, super.dispose(BB)
      }
    }
    const bB = new Map;

    function xB(BB, IB) {
      bB.set(BB, IB)
    }
    xB(vB.e, WB), xB(kB.g, YB), xB(cB.k, tB), xB(nB.f, eB), (0, hB.e)({
      create: (BB, IB) => {
        const ZB = new TB.StandardMaterial(BB.name, IB);
        return (0, fB.q)(BB, ZB), ZB.detailMap._pluginDefineNames
      },
      write: (BB, IB, ZB) => {
        (0, fB.X)(BB.mirror, IB, ZB)
      },
      addFeature: (BB, IB, ZB) => {
        const TB = bB.get(IB.feature);
        if (!TB) throw new Error(`${IB.feature.name} has no plugin class (registerPluginClass)`);
        new TB(BB.mirror, IB.state, ...ZB)
      },
      texture: (BB, IB, ZB) => {
        let {
          url: TB,
          noMipmap: JB,
          invertY: oB,
          samplingMode: vB,
          data: kB,
          sets: cB
        } = ZB;
        if (!kB) {
          const ZB = new GB.e(TB, IB, JB, oB, vB);
          return Object.assign(ZB, cB), void(0, zB.G)(BB, ZB)
        }
        const nB = {},
          hB = new Promise(((BB, IB) => {
            nB.onLoad = BB, nB.onError = (BB, ZB) => {
              IB(new Error(`${kB.context}: ${(null===ZB||void 0===ZB?void 0:ZB.message)||BB||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: FB,
            bytes: NB,
            label: gB
          } = kB,
          qB = {
            noMipmap: JB,
            invertY: !1,
            samplingMode: vB,
            ...nB,
            mimeType: FB,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          yB = new GB.e(null, IB, qB);
        fB.r.set(yB, hB), Object.assign(yB, cB), yB.updateURL(TB, NB);
        const UB = yB.getInternalTexture();
        UB && (UB.label = gB), BB.uvSet = yB.coordinatesIndex, BB.matrix.set((0, fB.L)(yB)), (0, zB.G)(BB, yB)
      },
      cube: (BB, IB, ZB) => {
        let {
          rootUrl: TB,
          files: oB,
          noMipmap: vB,
          luminance: kB
        } = ZB;
        const {
          samplingMode: cB
        } = BB.sampler, nB = cB === (0, zB.z)(vB) ? null : () => {
          (0, fB.J)(hB, cB)
        }, hB = new JB.b(TB, IB, null, vB, oB, nB, null, (0, zB.x)(kB));
        hB.coordinatesMode = GB.e.SKYBOX_MODE, (0, zB.G)(BB, hB)
      },
      canvas: (BB, IB, ZB) => {
        let {
          width: TB,
          height: JB,
          mipmaps: vB,
          samplingMode: kB,
          hasAlpha: cB = !1,
          wrap: nB = GB.e.CLAMP_ADDRESSMODE
        } = ZB;
        const hB = new oB.c(IB, {
          width: TB,
          height: JB
        }, BB, vB, kB);
        hB.hasAlpha = cB, hB.wrapU = nB, hB.wrapV = nB;
        const zB = (0, fB.A)(hB);
        return (0, fB.B)(zB, hB), zB
      }
    })
  },
  41199: (BB, IB, ZB) => {
    ZB.d(IB, {
      e: () => nB,
      i: () => hB,
      m: () => zB
    });
    var TB = ZB(41192),
      JB = ZB(40129),
      oB = ZB(40351),
      GB = ZB(40469),
      vB = ZB(41197),
      kB = ZB(40463),
      cB = ZB(37525);
    class nB extends GB.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (BB, IB) => {
          this.releaseUnlessInstanced(IB)
        }, this.onLinked = null
      }
      link(BB) {
        var IB;
        (0, cB.i)(BB), this.model = BB, null === (IB = this.onLinked) || void 0 === IB || IB.call(this, BB)
      }
      relink() {
        this.release();
        const BB = [];
        for (const JB of Object.values(this._vertexBuffers))
          if (!JB.getIsInstanced()) {
            const {
              byteOffset: IB,
              byteStride: ZB,
              type: TB,
              normalized: oB
            } = JB;
            BB.push({
              kind: JB.getKind(),
              data: JB.getData(),
              offset: IB,
              stride: ZB,
              components: JB.getSize(),
              glType: TB,
              isNormalized: oB
            })
          } const IB = this._indices.length ? this._indices : null,
          {
            minimum: ZB,
            maximum: TB
          } = this.extend;
        this.link(new cB.e(BB, IB, this.getTotalVertices(), new Float64Array(ZB.HTB()), new Float64Array(TB.HTB())))
      }
      copy(BB) {
        if (!this.model) return super.copy(BB);
        const IB = new nB(BB, this.JR()),
          ZB = this.MTB(void 0, !0);
        ZB && IB.setIndices(ZB);
        let GB = !1;
        for (const oB in this._vertexBuffers) {
          const BB = this._vertexBuffers[oB],
            ZB = BB.getData();
          if (!ZB) continue;
          const vB = BB.getSize(),
            {
              type: kB,
              byteOffset: cB,
              byteStride: nB,
              normalized: hB
            } = BB;
          GB ||= BB.isUpdatable();
          const zB = BB.getIsInstanced() ? (ZB instanceof Array ? 4 * ZB.length : ZB.byteLength) / nB : this.getTotalVertices(),
            FB = (0, JB.s)(ZB, vB, kB, cB, nB, zB, !0),
            NB = {
              updatable: BB.isUpdatable(),
              stride: vB,
              type: kB,
              normalized: hB,
              takeBufferOwnership: !0,
              instanced: BB.getIsInstanced()
            };
          IB.setVerticesBuffer(new TB.e(this.PN(), FB, oB, NB), zB)
        }
        return IB._updatable = GB, IB._boundingInfo = new oB.d(this.extend.minimum, this.extend.maximum), IB.relink(), IB
      }
      static mergeMeshes(BB, IB, ZB, TB, JB, oB) {
        const kB = BB[0].JR(),
          cB = new vB.c(BB[0].name + "_merged", kB),
          hB = new nB(GB.e.RandomId(), kB, void 0, !1, cB);
        try {
          if (!vB.c.MergeMeshes(BB, IB, ZB, cB, JB, oB)) return cB.dispose(), null
        } catch (zB) {
          throw cB.dispose(), zB
        }
        return hB.relink(), cB
      }
      removeVerticesData(BB) {
        this.releaseUnlessInstanced(BB), super.removeVerticesData(BB)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(BB) {
        var IB;
        BB && null !== (IB = this.getVertexBuffer(BB)) && void 0 !== IB && IB.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, cB.r)(this.model), this.model = null)
      }
    }

    function hB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new vB.c(BB, ZB);
      const JB = (0, cB.g)(IB),
        {
          positions: oB,
          normals: hB,
          uvs: zB,
          indices: FB,
          named: NB = {}
        } = IB,
        gB = new kB.c;
      gB.positions = oB, gB.normals = null !== hB && void 0 !== hB ? hB : null, gB.uvs = null !== zB && void 0 !== zB ? zB : null, gB.indices = FB;
      const qB = new nB(GB.e.RandomId(), ZB, gB, !1, TB);
      for (const {
          kind: GB,
          components: vB
        }
        of JB.vertexAttributes) GB in NB && TB.setVerticesData(GB, NB[GB], !1, vB);
      return qB.link(JB), TB
    }

    function zB(BB, IB, ZB) {
      let TB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const JB = new vB.c(BB, ZB),
        {
          positions: oB,
          normals: GB,
          uvs: cB,
          indices: nB
        } = IB;
      return Object.assign(new kB.c, {
        positions: oB,
        normals: GB,
        uvs: cB,
        indices: nB
      }).applyToMesh(JB, TB), JB
    }
  },
  41184: (BB, IB, ZB) => {
    function TB(BB, IB, ZB) {
      const TB = IB * IB * 4,
        JB = BB[0].layers,
        oB = JB * (BB.length - 1) + BB[BB.length - 1].layers,
        GB = new Uint8Array(oB * TB);
      BB.forEach(((IB, ZB) => {
        const oB = ZB + 1 < BB.length ? Math.min(IB.layers, JB) : IB.layers;
        GB.set(new Uint8Array(IB.pixels.buffer, IB.pixels.byteOffset, oB * TB), ZB * JB * TB)
      }));
      const vB = Math.max(1, Math.min(oB, ZB || oB));
      if (vB === oB) return [{
        pixels: GB,
        layers: oB
      }];
      const kB = [];
      for (let cB = 0; cB < oB; cB += vB) {
        const BB = Math.min(oB, cB + vB);
        kB.push({
          pixels: GB.slice(cB * TB, BB * TB),
          layers: BB - cB
        })
      }
      return kB
    }
    ZB.d(IB, {
      c: () => TB,
      d: () => oB
    });
    const JB = new WeakMap;

    function oB(BB, IB, ZB) {
      var TB, oB;
      const GB = null !== (TB = JB.get(BB)) && void 0 !== TB ? TB : new Map;
      JB.set(BB, GB);
      const vB = null !== (oB = GB.get(IB[0])) && void 0 !== oB ? oB : [];
      GB.set(IB[0], vB);
      const kB = vB.find((BB => BB.urls.length === IB.length && BB.urls.every(((BB, ZB) => BB === IB[ZB]))));
      if (kB) return kB.built;
      const cB = {
        urls: [...IB],
        built: ZB()
      };
      return vB.push(cB), cB.built.catch((() => {
        vB.splice(vB.indexOf(cB), 1)
      })), cB.built
    }
  },
  38857: (BB, IB, ZB) => {
    var TB = {
      "./cape_cow_cream.png": 27916,
      "./cape_cow_normal.png": 27923,
      "./cape_creator_level1.png": 27927,
      "./cape_creator_level2.png": 27929,
      "./cape_creator_level3.png": 27933,
      "./cape_none.png": 27939,
      "./cape_pig.png": 27947,
      "./cape_sheep.png": 27951,
      "./cape_super.png": 27958,
      "./cape_super_inverted.png": 27960,
      "./cape_youtuber.png": 27968
    };

    function JB(BB) {
      var IB = oB(BB);
      return ZB(IB)
    }

    function oB(BB) {
      if (!ZB.o(TB, BB)) {
        var IB = new Error("Cannot find module '" + BB + "'");
        throw IB.code = "MODULE_NOT_FOUND", IB
      }
      return TB[BB]
    }
    JB.keys = function() {
      return Object.keys(TB)
    }, JB.resolve = oB, BB.exports = JB, JB.id = 38857
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);