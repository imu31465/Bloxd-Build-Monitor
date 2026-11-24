export const id = 250;
export const ids = [250];
export const modules = {
  38915: (BB, jB, zB) => {
    var QB = {
      "./cape_cow_cream.png": 27911,
      "./cape_cow_normal.png": 27918,
      "./cape_creator_level1.png": 27925,
      "./cape_creator_level2.png": 27928,
      "./cape_creator_level3.png": 27931,
      "./cape_none.png": 27940,
      "./cape_pig.png": 27943,
      "./cape_sheep.png": 27952,
      "./cape_super.png": 27960,
      "./cape_super_inverted.png": 27966,
      "./cape_youtuber.png": 27973
    };

    function nB(BB) {
      var jB = dB(BB);
      return zB(jB)
    }

    function dB(BB) {
      if (!zB.o(QB, BB)) {
        var jB = new Error("Cannot find module '" + BB + "'");
        throw jB.code = "MODULE_NOT_FOUND", jB
      }
      return QB[BB]
    }
    nB.keys = function() {
      return Object.keys(QB)
    }, nB.resolve = dB, BB.exports = nB, nB.id = 38915
  },
  41268: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      openCharacterPreview: () => KB
    });
    var QB = zB(38177),
      nB = zB(2863),
      dB = zB(635),
      IB = zB(37252),
      NB = zB(2304),
      uB = zB(37239),
      UB = zB(39895),
      aB = zB(40154),
      pB = zB(41176),
      rB = zB(37166),
      sB = zB(40335),
      JB = zB(37372),
      mB = zB(40350),
      yB = zB(41227),
      kB = zB(37158),
      GB = zB(1263),
      LB = zB(2302),
      gB = zB(37333),
      tB = zB(37434);
    class SB {
      constructor(BB, jB) {
        this.pose = BB, this.nodes = void 0, this.nodes = BB.boneNames.map((BB => jB.get(BB)))
      }
      write(BB) {
        this.pose.pose(BB);
        const {
          rotations: jB
        } = this.pose;
        for (let zB = 0; zB < this.nodes.length; zB++) {
          const BB = 4 * zB;
          this.nodes[zB].rotationQuaternion.set(jB[BB], jB[BB + 1], jB[BB + 2], jB[BB + 3])
        }
      }
    }

    function MB(BB) {
      BB.unfreezeWorldMatrix();
      for (const jB of BB.getChildren()) MB(jB)
    }

    function EB(BB, jB) {
      BB.isVisible = jB;
      for (const zB of BB.getChildMeshes()) zB.isVisible = jB
    }
    class iB {
      constructor(BB, jB, zB) {
        this.ny = BB, this.thinInstMgr = jB, this.mY = zB, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(BB, jB, zB) {
        const QB = (0, gB.f)(BB, jB);
        return QB in this.modelCache || (this.modelCache[QB] = (async () => {
          try {
            const QB = await (0, gB.h)(BB, this.ny),
              nB = new Map;
            for (const BB of QB.getNodes()) nB.set(BB.name, BB);
            const dB = (0, gB.c)(null !== jB && void 0 !== jB ? jB : BB, this.ny);
            (0, gB.i)(QB, dB, {
              keepTransforms: void 0 !== zB,
              onProcessedMesh: BB => {
                (0, gB.k)(BB), this.ny.IQB(BB, !1), BB.isVisible = !1
              }
            });
            for (const BB of QB.rootNodes) MB(BB);
            const IB = void 0 === zB ? null : (0, tB.f)(zB, (BB => {
              var jB, zB;
              return null !== (jB = null === (zB = nB.get(BB)) || void 0 === zB ? void 0 : zB.rotationQuaternion) && void 0 !== jB ? jB : null
            }));
            return {
              nodesByName: nB,
              bones: null === IB ? null : new SB(IB, nB)
            }
          } catch (nB) {
            throw delete this.modelCache[QB], console.error(`Failed to load preview attachment ${QB}:`, nB), nB
          }
        })()), this.modelCache[QB]
      }
      async update(BB, jB) {
        var zB;
        const {
          thinInstMgr: QB,
          mY: nB
        } = this;
        this.cosmeticNames[BB] = jB;
        const dB = this.attachmentsByType[BB];
        if (dB)
          for (const {
              mesh: NB,
              destNode: uB,
              bones: UB
            }
            of dB) {
            null !== UB && (0, GB.Z)(this.shownBones, UB), EB(NB, !1);
            const BB = QB.getNamedNode(nB, uB);
            QB.detachTransformNodeIfFound(NB, nB, BB)
          }
        this.attachmentsByType[BB] = [];
        const IB = (0, LB.j)(BB, jB);
        if (null !== IB && void 0 !== IB && null !== (zB = IB.attachments) && void 0 !== zB && zB.length)
          for (const NB of IB.attachments) {
            let zB;
            try {
              zB = await this.loadModel(NB.modelGlb, NB.texture, NB.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[BB] !== jB) return;
            const dB = zB.nodesByName.get(NB.modelNode);
            if (!dB) {
              console.error(`Preview attachment node ${NB.modelNode} not found in ${NB.modelGlb}`);
              continue
            }
            EB(dB, !0), (0, gB.p)(dB, NB.overlayColour);
            const IB = QB.getNamedNode(nB, NB.destNode);
            QB.attachTransformNode(dB, nB, IB), this.attachmentsByType[BB].push({
              mesh: dB,
              destNode: NB.destNode,
              bones: zB.bones
            }), null !== zB.bones && this.shownBones.push(zB.bones)
          }
      }
      writePoses(BB) {
        for (const jB of this.shownBones) jB.write(BB)
      }
    }
    var qB = zB(37263),
      fB = (zB(41208), zB(40584), zB(41215), zB(34289));
    let oB, HB, DB, FB, YB, VB, hB, XB, ZB, AB;
    const TB = document.createElement("canvas");
    async function PB() {
      await new Promise((BB => {
        setTimeout((() => {
          BB()
        }), 100)
      }))
    }
    TB.classList.add("CharCustomisationPreviewCanvas");
    const WB = {};

    function eB(BB, jB) {
      TB.width = BB, TB.height = jB, oB.resize()
    }
    let lB = 0;
    class wB {
      constructor(BB, jB) {
        this.framing = jB, this.ready = AB, this.dev = {
          canvas: () => TB,
          isolateHead(BB) {
            const jB = VB.getNodeNames(hB);
            for (let zB = 0; zB < jB.length; zB++) "HeadMesh" !== jB[zB] && "__root__" !== jB[zB] && "TorsoNode" !== jB[zB] && VB.setNodeEnabled(hB, zB, !1);
            if (BB) {
              const BB = VB.getNamedNode(hB, "HeadMesh");
              VB.setNodeDisableColorWrite(hB, BB, !0, (BB => {
                const jB = new mB.StandardMaterial(`${BB.name}_depthOnly`, BB.aY());
                return jB.disableColorWrite = !0, jB
              }))
            }
            VB.setPosition(hB, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const zB = BB.getBoundingClientRect();
        eB(zB.width, zB.height), lB++, oB.stopRenderLoop(), oB.runRenderLoop((() => {
          var BB, jB;
          null === (BB = XB) || void 0 === BB || BB.render(oB.getDeltaTime()), null === (jB = ZB) || void 0 === jB || jB.writePoses(performance.now() / 1e3), DB.render()
        }))
      }
      isReady() {
        return !!FB
      }
      setCosmetic(BB, jB) {
        ! function(BB, jB) {
          if (!FB) return;
          const IB = (0, nB.g)();
          IB.nD(!1), QB.e.Player.meshApi.updatePlayerCosmetic(IB.zV, hB, BB, jB, !0), "cape" === BB && (jB === dB.d ? YB.mH(!1) : (YB.mH(!0), YB.material.diffuseTexture = new yB.d(zB(38915)(`./cape_${jB}.png`), YB.aY(), {
            invertY: !1,
            samplingMode: yB.d.NEAREST_NEAREST_MIPLINEAR
          })));
          WB[BB] = ZB.update(BB, jB)
        }(BB, jB)
      }
      playEmote(BB) {
        if (!XB) return;
        if (!BB) return void XB.stopAnimation(uB.f.Emote);
        const jB = (0, IB.e)((0, NB.f)(BB).animation);
        XB.startAnimation(jB, uB.f.Emote, 0, NB.b)
      }
      async untilDrawn(BB) {
        if (await PB(), "cape" === BB && YB) {
          const BB = YB.material,
            jB = null === BB || void 0 === BB ? void 0 : BB.diffuseTexture;
          jB && !jB.isReady() && (await new Promise((BB => {
            jB.onLoadObservable.addOnce((() => {
              BB()
            }))
          })), await PB())
        }
        WB[BB] && (await WB[BB], await PB()), await DB.whenReadyAsync(), await new Promise((BB => {
          DB.onAfterRenderObservable.addOnce((() => {
            BB()
          }))
        }))
      }
      setOrbit(BB) {
        xB(BB)
      }
      resetCamera() {
        HB.inertialAlphaOffset = 0, HB.inertialBetaOffset = 0, HB.inertialRadiusOffset = 0, xB(fB.c[this.framing])
      }
      resize(BB, jB) {
        eB(BB, jB)
      }
      close() {
        this.closed || (this.closed = !0, lB--, 0 === lB && oB.stopRenderLoop())
      }
    }

    function xB(BB) {
      let {
        yaw: jB,
        pitch: zB,
        radius: QB,
        target: nB
      } = BB;
      HB.alpha = jB, HB.beta = zB, QB && (HB.radius = QB), nB && HB.target.set(nB[0], nB[1], nB[2])
    }

    function KB(BB, jB) {
      return BB.appendChild(TB), oB || function() {
        oB = new UB.b(TB, !0, {
          preserveDrawingBuffer: !0
        });
        const BB = (0, nB.g)();
        oB.jQB = BB.pm.engine.jQB, DB = new aB.d(oB), DB.clearColor = new JB.c(0, 0, 0, 0), DB.ambientColor = new JB.Color3(1, 1, 1), HB = new pB.c("xy", 0, 0, 1, rB.KJ.Zero(), DB), HB.attachControl(TB, !0), HB.panningSensibility = 0, AB = (0, QB.y)("Player", DB, !0).then((jB => {
          FB = jB.meshApi, YB = jB.capeMesh, VB = BB.pm.JY;
          const zB = 8.33;
          hB = (0, QB.l)("Player", zB, !0, !0), VB.setPosition(hB, 0, -8.33, 0);
          const nB = VB.getNamedNode(hB, "BodyMesh");
          VB.attachTransformNode(YB, hB, nB), VB.set(hB, "aOpacity", 1), VB.sV(hB, "aOpacity", 1), ZB = new iB(DB, VB, hB), XB = new kB.AnimatorState, XB.ur = BB, XB.thinInstMgr = VB, XB.mY = hB, XB.EzB = VB.zQB(hB, 0), XB.modelLifeformType = "Player", XB.nodeNameAliases = (0, qB.c)("Player").nodeNameAliases;
          const dB = YB.rV().boundingBox;
          YB.position.y = ((24 - dB.maximum.y + dB.minimum.y) / 2 - 1 / 32) / zB, YB.position.z = -1 / zB, YB.rotationQuaternion = null;
          const IB = Math.PI / 18,
            NB = dB.maximum.y / zB;
          YB.rotation.x = IB;
          const uB = Math.cos(IB),
            UB = Math.sin(IB);
          YB.position.y += NB * (1 - uB) + 0 * UB, YB.position.z -= NB * UB + 0 * (1 - uB);
          const aB = new mB.StandardMaterial("capeMaterial", YB.aY());
          YB.material = aB;
          const pB = new JB.Color3(1, 1, 1);
          aB.diffuseColor = new JB.Color3, aB.specularColor = new JB.Color3, aB.emissiveColor = new JB.Color3, aB.ambientColor = new JB.Color3, pB.scaleToRef(.43, aB.diffuseColor), pB.scaleToRef(1.75, aB.ambientColor), aB.freeze();
          const yB = new sB.e("light", new rB.KJ(-.1, 1, -.3), DB);
          yB.diffuse = new JB.Color3(1, 1, 1), yB.specular = new JB.Color3(1, 1, 1), yB.groundColor = new JB.Color3(.5, .5, .5)
        }))
      }(), new wB(BB, jB)
    }
  },
  38906: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => rB
    });
    var QB = zB(37279),
      nB = zB(37286),
      dB = zB(37547),
      IB = zB(37291),
      NB = zB(37283);

    function uB(BB) {
      return `\n\t\t\t\t${(0,NB.w)(BB,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, NB.A)(BB, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, NB.A)(BB, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, NB.m)(BB, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function UB(BB, jB) {
      let zB = (0, NB.Ab)(BB, "skele" + (jB - 1));
      for (let nB = jB - 2; nB >= 0; nB--) zB = (0, NB.sb)(BB, `boneIdx == ${nB}`, (0, NB.Ab)(BB, `skele${nB}`), zB);
      const QB = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,NB.A)(BB,"int","boneIdx",(0,NB.wb)(BB,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,NB.A)(BB,"vec3","bone",zB)}\n\t\t\t\t${(0,NB.A)(BB,"vec2","pivot",(0,NB.m)(BB,"vec2","0.0",`${(0,NB.Gb)(BB,"position")}.z`))}\n\t\t\t\t${(0,NB.ab)(BB)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${QB}));`:`positionUpdated.yz += ${QB};`}\n\t\t`
    }

    function aB(BB) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,NB.m)(BB,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const pB = {
        x: 0,
        y: 0,
        z: 0,
        ljB(BB, jB) {
          return this.x = BB[jB], this.y = BB[jB + 1], this.z = BB[jB + 2], this
        }
      },
      rB = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (BB, jB) => ({
          ...(0, QB.b)("CAPE"),
          BLOXD_CAPE_BONES: `${BB}`,
          BLOXD_CAPE_MAX_Y: (0, nB.jb)(jB)
        }),
        getUniforms(BB) {
          return (0, dB.b)(function(BB) {
            const jB = [];
            for (let zB = 0; zB < BB; zB++) jB.push({
              name: `skele${zB}`,
              type: "highp vec3"
            });
            return jB
          }(this.skeleLen), "vertex", BB)
        },
        bind(BB) {
          for (let jB = 0; jB < this.skeleLen; jB++) BB.updateVector3(`skele${jB}`, pB.ljB(this.skele, 3 * jB))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(BB, jB) {
          return "vertex" !== BB ? null : {
            CUSTOM_VERTEX_DEFINITIONS: uB(jB),
            CUSTOM_VERTEX_UPDATE_POSITION: UB(jB, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: aB(jB)
          }
        }
      };
    (0, IB.l)(rB)
  },
  38794: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => aB,
      h: () => pB
    });
    var QB = zB(37279),
      nB = zB(37547),
      dB = zB(37283),
      IB = zB(37291);
    const NB = "bloxdTextLodBias",
      uB = [{
        name: NB,
        type: "float"
      }],
      UB = "bloxdTextSample",
      aB = {
        planes: -.5,
        boards: -.5
      },
      pB = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, QB.b)("TEXT_SAMPLER"),
        getUniforms: BB => (0, nB.b)(uB, "fragment", BB),
        bind(BB) {
          BB.updateFloat(NB, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(BB, jB) {
          if ("fragment" !== BB) return null;
          const zB = (0, dB.K)(jB, `vec4 ${UB}(sampler2D s, vec2 uv, float bias)`, `fn ${UB}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            QB = (0, dB.K)(jB, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            nB = `${(0,dB.T)(jB,"vDiffuseUV")} + uvOffset`,
            IB = (0, dB.K)(jB, `${UB}(diffuseSampler, ${nB}, ${(0,dB.Ab)(jB,NB)})`, `${UB}(diffuseSampler, diffuseSamplerSampler, ${nB}, ${(0,dB.Ab)(jB,NB)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${zB} {\n\t\t\t\t\t${(0,dB.A)(jB,"vec4","texel",QB)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,dB.m)(jB,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,dB.m)(jB,"vec3","0.0")}, ${(0,dB.m)(jB,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, dB.E)(jB)]: `baseColor = ${IB};`
          }
        }
      };
    (0, IB.l)(pB)
  },
  41215: (BB, jB, zB) => {
    zB.r(jB), zB.d(jB, {
      CapeMaterialPlugin: () => gB,
      HueTintMaterialPlugin: () => tB,
      LifeformMaterialPlugin: () => SB,
      OverlayMaterialPlugin: () => MB
    });
    var QB = zB(41218),
      nB = zB(38096);
    class dB extends((0, QB.i)(nB.e)) {}(0, QB.j)(nB.e, dB);
    var IB = zB(37271);
    class NB extends((0, QB.i)(IB.f)) {}(0, QB.j)(IB.f, NB);
    var uB = zB(37936);
    class UB extends((0, QB.i)(uB.d)) {}(0, QB.j)(uB.d, UB);
    var aB = zB(37534),
      pB = zB(40350),
      rB = zB(37528);
    class sB extends((0, QB.i)(rB.d)) {
      constructor(BB, jB, zB) {
        super(BB, jB, zB), (0, aB.e)(BB)
      }
      dispose(BB) {
        (0, aB.f)(this._material), super.dispose(BB)
      }
    }(0, QB.j)(rB.d, sB), (0, rB.h)({
      disableUnusedSpecularTerm: QB.e,
      isLightingDisabled: BB => BB instanceof pB.StandardMaterial && BB.disableLighting
    });
    var JB = zB(38794);
    class mB extends((0, QB.i)(JB.h)) {}(0, QB.j)(JB.h, mB);
    var yB = zB(38906),
      kB = zB(37386),
      GB = zB(38204),
      LB = zB(37324);
    class gB extends((0, QB.i)(yB.d)) {}(0, QB.j)(yB.d, gB);
    class tB extends((0, QB.i)(kB.b)) {}(0, QB.j)(kB.b, tB);
    class SB extends((0, QB.i)(GB.k)) {}(0, QB.j)(GB.k, SB);
    class MB extends((0, QB.i)(LB.d)) {}(0, QB.j)(LB.d, MB)
  },
  41218: (BB, jB, zB) => {
    zB.d(jB, {
      e: () => WB,
      i: () => GB,
      j: () => CB
    });
    var QB = zB(40350),
      nB = zB(41220),
      dB = zB(41266),
      IB = zB(41227),
      NB = zB(37908),
      uB = zB(37915),
      UB = zB(37924),
      aB = zB(37926),
      pB = zB(37315),
      rB = zB(37321),
      sB = zB(41231),
      JB = zB(37291),
      mB = zB(37300),
      yB = zB(37283);

    function kB(BB, jB) {
      return Object.assign((function(BB, zB, QB, nB) {
        return jB(this.featureState, BB, zB, QB, nB)
      }), {
        kJ: BB
      })
    }

    function GB(BB) {
      const jB = class extends sB.b {
          constructor(jB, zB) {
            const QB = (0, mB.eb)(jB),
              nB = QB && (0, mB.w)(QB, BB.name);
            for (var dB = arguments.length, IB = new Array(dB > 2 ? dB - 2 : 0), NB = 2; NB < dB; NB++) IB[NB - 2] = arguments[NB];
            super(jB, BB.name, BB.priority, nB ? nB.defines : BB.defines(...IB), !1), this.featureState = void 0, this.featureState = zB, this._pluginManager._addPlugin(this), this._enable(!0), (0, mB.z)(this._material, BB, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return BB.className
          }
          isCompatible(BB) {
            return BB === yB.c.GLSL || BB === yB.c.WGSL
          }
        },
        zB = (0, JB.g)(BB);
      for (const [QB, nB] of Object.entries(JB.d)) {
        const dB = BB[QB];
        if (dB) {
          const BB = zB[QB];
          Object.defineProperty(jB.prototype, nB, {
            value: kB(dB, BB),
            writable: !0,
            configurable: !0
          })
        }
      }
      return jB
    }
    class LB extends(GB(NB.d)) {}
    var gB = zB(39895),
      tB = zB(41240),
      SB = zB(41248);

    function MB(BB, jB, zB) {
      return (0, SB.h)(zB, jB.urls, (() => async function(BB, jB, zB) {
        const {
          width: QB
        } = BB[0].getSize(), nB = BB.map(((BB, zB) => {
          var nB;
          const dB = Math.round(BB.getSize().height / QB),
            IB = null === jB || void 0 === jB ? void 0 : jB[zB];
          return {
            pixels: IB && IB.byteLength === QB * QB * dB * 4 ? IB : null !== (nB = EB.get(BB.getInternalTexture())) && void 0 !== nB ? nB : BB._readPixelsSync(),
            layers: dB
          }
        })), dB = zB.wJ().getCaps().texture2DArrayMaxLayerCount, NB = (0, SB.d)(nB, QB, dB).map((BB => {
          let {
            pixels: jB,
            layers: nB
          } = BB;
          return {
            atlas: new tB.e(jB, QB, QB, nB, gB.b.TEXTUREFORMAT_RGBA, zB, !0, !1, IB.d.NEAREST_NEAREST_MIPLINEAR),
            layers: nB
          }
        }));
        return BB.forEach(((BB, jB) => {
          const QB = BB.getInternalTexture();
          EB.has(QB) || (! function(BB, jB) {
            const zB = jB.createRawTexture(new Uint8Array(4), 1, 1, gB.b.TEXTUREFORMAT_RGBA, !1, !1, IB.d.NEAREST_SAMPLINGMODE);
            BB._hardwareTexture.release(), jB.unbindAllTextures(), zB._swapAndDie(BB, !1)
          }(QB, zB.wJ()), EB.set(QB, nB[jB].pixels))
        })), NB
      }(BB, jB.pixels, zB)))
    }
    const EB = new WeakMap;
    var iB = zB(37934);
    class qB extends(GB(uB.h)) {
      constructor(BB, jB) {
        super(BB, jB), this.loaded = new Set, this.mirrors = void 0, this.mirrors = jB.textures.map((BB => BB.mirror)), this.mirrors.forEach(((BB, jB) => {
          BB.onLoadObservable.add((BB => {
            this.setTextureArrayData(BB, jB).catch((BB => {
              console.error(`Failed to build the texture arrays, at atlas ${jB}`, BB)
            }))
          }))
        })), (0, iB.i)(jB, BB.shaderLanguage)
      }
      async setTextureArrayData(BB, jB) {
        const zB = this.featureState,
          {
            width: QB,
            height: nB
          } = BB.getSize(),
          dB = this._material.shaderLanguage;
        if (!zB.useWebGL2) return void(0, iB.f)(this._material, zB, jB, QB, Math.round(nB / QB), dB);
        if (this.loaded.add(jB), this.loaded.size < this.mirrors.length) return;
        const IB = await MB(this.mirrors, zB.sources, this._material.aY());
        (0, iB.e)(this._material, zB, IB, QB, dB)
      }
    }
    var fB = zB(41251),
      oB = zB(40404),
      HB = zB(37166),
      DB = zB(41254),
      FB = zB(40519),
      YB = zB(40388),
      VB = zB(41200),
      hB = zB(37687),
      XB = zB(41260);
    class ZB extends fB.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const AB = {
      Mesh: DB.e,
      TransformNode: VB.e,
      oJ: fB.b,
      VertexBuffer: fB.d,
      BoundingInfo: oB.c,
      KJ: HB.KJ,
      ArenaBuffer: ZB,
      SubMesh: YB.d,
      VertexData: FB.e,
      MirroredGeometry: XB.d,
      meshFromArrays: XB.g,
      plainMeshFromArrays: XB.i
    };
    (0, hB.f)(AB);
    var TB = zB(37534);
    class PB extends(GB(aB.j)) {
      constructor(BB, jB) {
        if (super(BB, jB), BB instanceof QB.StandardMaterial && jB.dirLightCount > 0) {
          const jB = BB,
            zB = jB._blockDirtyMechanism;
          jB._blockDirtyMechanism = !0, BB.disableLighting = !0, jB._blockDirtyMechanism = zB;
          const QB = (0, mB.eb)(BB);
          QB && (QB.disableLighting = !0, (0, mB.ab)(QB))
        }(0, TB.e)(BB)
      }
      dispose(BB) {
        (0, TB.f)(this._material), super.dispose(BB)
      }
    }

    function WB(BB, jB) {
      if (!(jB instanceof QB.StandardMaterial) || jB.specularTexture) return;
      const {
        r: zB,
        g: nB,
        b: dB
      } = jB.specularColor;
      0 === zB && 0 === nB && 0 === dB && (BB.SPECULARTERM = !1)
    }(0, aB.h)({
      disableUnusedSpecularTerm: WB
    });
    var eB = zB(37408),
      lB = zB(37696);
    const wB = new RegExp(`^#define ${UB.e}\\s*$`, "m");
    class xB extends(GB(UB.i)) {
      constructor(BB, jB) {
        super(BB, jB), this.HJ = !1, jB.ditherOnlyWhileFading && (lB.g.add(BB), this.prewarmDitherTwins(BB))
      }
      prewarmDitherTwins(BB) {
        const jB = new WeakSet;
        BB.onEffectCreatedObservable.add((zB => {
          let {
            effect: QB,
            subMesh: nB
          } = zB;
          if (this.featureState.prewarmingDither || jB.has(QB)) return;
          jB.add(QB);
          const dB = null === nB || void 0 === nB ? void 0 : nB.getMesh();
          dB && !wB.test(QB.defines) && BB.aY().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(dB) || jB.delete(QB)
          }))
        }))
      }
      prewarmDither(BB) {
        if (this.HJ || BB.aE()) return !1;
        const jB = new YB.d(0, 0, 0, 0, 0, BB, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(BB, jB)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== jB.effect
      }
      dispose(BB) {
        this.HJ = !0, super.dispose(BB)
      }
    }
    const KB = new Map;

    function CB(BB, jB) {
      KB.set(BB, jB)
    }
    CB(NB.d, LB), CB(uB.h, qB), CB(UB.i, xB), CB(aB.j, PB), (0, pB.d)({
      create: (BB, jB) => {
        const zB = new QB.StandardMaterial(BB.name, jB);
        return (0, eB.k)(BB, zB), zB.detailMap._pluginDefineNames
      },
      write: (BB, jB, zB) => {
        (0, eB.J)(BB.mirror, jB, zB)
      },
      addFeature: (BB, jB, zB) => {
        const QB = KB.get(jB.feature);
        if (!QB) throw new Error(`${jB.feature.name} has no plugin class (registerPluginClass)`);
        new QB(BB.mirror, jB.state, ...zB)
      },
      texture: (BB, jB, zB) => {
        let {
          url: QB,
          noMipmap: nB,
          invertY: dB,
          samplingMode: NB,
          data: uB,
          sets: UB
        } = zB;
        if (!uB) {
          const zB = new IB.d(QB, jB, nB, dB, NB);
          return Object.assign(zB, UB), void(0, rB.M)(BB, zB)
        }
        const aB = {},
          pB = new Promise(((BB, jB) => {
            aB.onLoad = BB, aB.onError = (BB, zB) => {
              jB(new Error(`${uB.context}: ${(null===zB||void 0===zB?void 0:zB.message)||BB||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: sB,
            bytes: JB,
            label: mB
          } = uB,
          yB = {
            noMipmap: nB,
            invertY: !1,
            samplingMode: NB,
            ...aB,
            mimeType: sB,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          kB = new IB.d(null, jB, yB);
        eB.l.set(kB, pB), Object.assign(kB, UB), kB.updateURL(QB, JB);
        const GB = kB.getInternalTexture();
        GB && (GB.label = mB), BB.uvSet = kB.coordinatesIndex, BB.matrix.set((0, eB.C)(kB)), (0, rB.M)(BB, kB)
      },
      cube: (BB, jB, zB) => {
        let {
          rootUrl: QB,
          files: dB,
          noMipmap: NB,
          luminance: uB
        } = zB;
        const {
          samplingMode: UB
        } = BB.sampler, aB = UB === (0, rB.D)(NB) ? null : () => {
          (0, eB.y)(pB, UB)
        }, pB = new nB.c(QB, jB, null, NB, dB, aB, null, (0, rB.C)(uB));
        pB.coordinatesMode = IB.d.SKYBOX_MODE, (0, rB.M)(BB, pB)
      },
      canvas: (BB, jB, zB) => {
        let {
          width: QB,
          height: nB,
          mipmaps: NB,
          samplingMode: uB,
          hasAlpha: UB = !1,
          wrap: aB = IB.d.CLAMP_ADDRESSMODE
        } = zB;
        const pB = new dB.d(jB, {
          width: QB,
          height: nB
        }, BB, NB, uB);
        pB.hasAlpha = UB, pB.wrapU = aB, pB.wrapV = aB;
        const rB = (0, eB.t)(pB);
        return (0, eB.u)(rB, pB), rB
      }
    })
  },
  41260: (BB, jB, zB) => {
    zB.d(jB, {
      d: () => aB,
      g: () => pB,
      i: () => rB
    });
    var QB = zB(41251),
      nB = zB(40125),
      dB = zB(40404),
      IB = zB(40525),
      NB = zB(41254),
      uB = zB(40519),
      UB = zB(37578);
    class aB extends IB.c {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (BB, jB) => {
          this.releaseUnlessInstanced(jB)
        }, this.onLinked = null
      }
      link(BB) {
        var jB;
        (0, UB.o)(BB), this.model = BB, null === (jB = this.onLinked) || void 0 === jB || jB.call(this, BB)
      }
      relink() {
        this.release();
        const BB = [];
        for (const nB of Object.values(this._vertexBuffers))
          if (!nB.getIsInstanced()) {
            const {
              byteOffset: jB,
              byteStride: zB,
              type: QB,
              normalized: dB
            } = nB;
            BB.push({
              kind: nB.getKind(),
              data: nB.getData(),
              offset: jB,
              stride: zB,
              components: nB.getSize(),
              glType: QB,
              isNormalized: dB
            })
          } const jB = this._indices.length ? this._indices : null,
          {
            minimum: zB,
            maximum: QB
          } = this.extend;
        this.link(new UB.h(BB, jB, this.getTotalVertices(), new Float64Array(zB.nQB()), new Float64Array(QB.nQB())))
      }
      copy(BB) {
        if (!this.model) return super.copy(BB);
        const jB = new aB(BB, this.aY()),
          zB = this.dQB(void 0, !0);
        zB && jB.setIndices(zB);
        let IB = !1;
        for (const dB in this._vertexBuffers) {
          const BB = this._vertexBuffers[dB],
            zB = BB.getData();
          if (!zB) continue;
          const NB = BB.getSize(),
            {
              type: uB,
              byteOffset: UB,
              byteStride: aB,
              normalized: pB
            } = BB;
          IB ||= BB.isUpdatable();
          const rB = BB.getIsInstanced() ? (zB instanceof Array ? 4 * zB.length : zB.byteLength) / aB : this.getTotalVertices(),
            sB = (0, nB.t)(zB, NB, uB, UB, aB, rB, !0),
            JB = {
              updatable: BB.isUpdatable(),
              stride: NB,
              type: uB,
              normalized: pB,
              takeBufferOwnership: !0,
              instanced: BB.getIsInstanced()
            };
          jB.setVerticesBuffer(new QB.d(this.wJ(), sB, dB, JB), rB)
        }
        return jB._updatable = IB, jB._boundingInfo = new dB.c(this.extend.minimum, this.extend.maximum), jB.relink(), jB
      }
      static mergeMeshes(BB, jB, zB, QB, nB, dB) {
        const uB = BB[0].aY(),
          UB = new NB.e(BB[0].name + "_merged", uB),
          pB = new aB(IB.c.RandomId(), uB, void 0, !1, UB);
        try {
          if (!NB.e.MergeMeshes(BB, jB, zB, UB, nB, dB)) return UB.dispose(), null
        } catch (rB) {
          throw UB.dispose(), rB
        }
        return pB.relink(), UB
      }
      removeVerticesData(BB) {
        this.releaseUnlessInstanced(BB), super.removeVerticesData(BB)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(BB) {
        var jB;
        BB && null !== (jB = this.getVertexBuffer(BB)) && void 0 !== jB && jB.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, UB.z)(this.model), this.model = null)
      }
    }

    function pB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new NB.e(BB, zB);
      const nB = (0, UB.m)(jB),
        {
          positions: dB,
          normals: pB,
          uvs: rB,
          indices: sB,
          named: JB = {}
        } = jB,
        mB = new uB.e;
      mB.positions = dB, mB.normals = null !== pB && void 0 !== pB ? pB : null, mB.uvs = null !== rB && void 0 !== rB ? rB : null, mB.indices = sB;
      const yB = new aB(IB.c.RandomId(), zB, mB, !1, QB);
      for (const {
          kind: IB,
          components: NB
        }
        of nB.vertexAttributes) IB in JB && QB.setVerticesData(IB, JB[IB], !1, NB);
      return yB.link(nB), QB
    }

    function rB(BB, jB, zB) {
      let QB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const nB = new NB.e(BB, zB),
        {
          positions: dB,
          normals: IB,
          uvs: UB,
          indices: aB
        } = jB;
      return Object.assign(new uB.e, {
        positions: dB,
        normals: IB,
        uvs: UB,
        indices: aB
      }).applyToMesh(nB, QB), nB
    }
  },
  41248: (BB, jB, zB) => {
    function QB(BB, jB, zB) {
      const QB = jB * jB * 4,
        nB = BB[0].layers,
        dB = nB * (BB.length - 1) + BB[BB.length - 1].layers,
        IB = new Uint8Array(dB * QB);
      BB.forEach(((jB, zB) => {
        const dB = zB + 1 < BB.length ? Math.min(jB.layers, nB) : jB.layers;
        IB.set(new Uint8Array(jB.pixels.buffer, jB.pixels.byteOffset, dB * QB), zB * nB * QB)
      }));
      const NB = Math.max(1, Math.min(dB, zB || dB));
      if (NB === dB) return [{
        pixels: IB,
        layers: dB
      }];
      const uB = [];
      for (let UB = 0; UB < dB; UB += NB) {
        const BB = Math.min(dB, UB + NB);
        uB.push({
          pixels: IB.slice(UB * QB, BB * QB),
          layers: BB - UB
        })
      }
      return uB
    }
    zB.d(jB, {
      d: () => QB,
      h: () => dB
    });
    const nB = new WeakMap;

    function dB(BB, jB, zB) {
      var QB, dB;
      const IB = null !== (QB = nB.get(BB)) && void 0 !== QB ? QB : new Map;
      nB.set(BB, IB);
      const NB = null !== (dB = IB.get(jB[0])) && void 0 !== dB ? dB : [];
      IB.set(jB[0], NB);
      const uB = NB.find((BB => BB.urls.length === jB.length && BB.urls.every(((BB, zB) => BB === jB[zB]))));
      if (uB) return uB.built;
      const UB = {
        urls: [...jB],
        built: zB()
      };
      return NB.push(UB), UB.built.catch((() => {
        NB.splice(NB.indexOf(UB), 1)
      })), UB.built
    }
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);