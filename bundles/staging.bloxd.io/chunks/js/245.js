export const id = 245;
export const ids = [245];
export const modules = {
  41184: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      openCharacterPreview: () => RS
    });
    var tS = gS(38141),
      bS = gS(2910),
      XS = gS(656),
      xS = gS(37181),
      NS = gS(2347),
      qS = gS(37171),
      uS = gS(39867),
      IS = gS(40129),
      fS = gS(41099),
      kS = gS(37113),
      aS = gS(40286),
      KS = gS(37294),
      jS = gS(40306),
      GS = gS(41142),
      CS = gS(37104),
      nS = gS(1309),
      PS = gS(2340),
      QS = gS(37252),
      DS = gS(37353);
    class wS {
      constructor(SS, HS) {
        this.pose = SS, this.nodes = void 0, this.nodes = SS.boneNames.map((SS => HS.get(SS)))
      }
      write(SS) {
        this.pose.pose(SS);
        const {
          rotations: HS
        } = this.pose;
        for (let gS = 0; gS < this.nodes.length; gS++) {
          const SS = 4 * gS;
          this.nodes[gS].rotationQuaternion.set(HS[SS], HS[SS + 1], HS[SS + 2], HS[SS + 3])
        }
      }
    }

    function hS(SS) {
      SS.unfreezeWorldMatrix();
      for (const HS of SS.getChildren()) hS(HS)
    }

    function ZS(SS, HS) {
      SS.isVisible = HS;
      for (const gS of SS.getChildMeshes()) gS.isVisible = HS
    }
    class JS {
      constructor(SS, HS, gS) {
        this.Bj = SS, this.thinInstMgr = HS, this.kY = gS, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(SS, HS, gS) {
        const tS = (0, QS.e)(SS, HS);
        return tS in this.modelCache || (this.modelCache[tS] = (async () => {
          try {
            const tS = await (0, QS.h)(SS, this.Bj),
              bS = new Map;
            for (const SS of tS.getNodes()) bS.set(SS.name, SS);
            const XS = (0, QS.c)(null !== HS && void 0 !== HS ? HS : SS, this.Bj);
            (0, QS.i)(tS, XS, {
              keepTransforms: void 0 !== gS,
              onProcessedMesh: SS => {
                (0, QS.m)(SS), this.Bj.egS(SS, !1), SS.isVisible = !1
              }
            });
            for (const SS of tS.rootNodes) hS(SS);
            const xS = void 0 === gS ? null : (0, DS.e)(gS, (SS => {
              var HS, gS;
              return null !== (HS = null === (gS = bS.get(SS)) || void 0 === gS ? void 0 : gS.rotationQuaternion) && void 0 !== HS ? HS : null
            }));
            return {
              nodesByName: bS,
              bones: null === xS ? null : new wS(xS, bS)
            }
          } catch (bS) {
            throw delete this.modelCache[tS], console.error(`Failed to load preview attachment ${tS}:`, bS), bS
          }
        })()), this.modelCache[tS]
      }
      async update(SS, HS) {
        var gS;
        const {
          thinInstMgr: tS,
          kY: bS
        } = this;
        this.cosmeticNames[SS] = HS;
        const XS = this.attachmentsByType[SS];
        if (XS)
          for (const {
              mesh: NS,
              destNode: qS,
              bones: uS
            }
            of XS) {
            null !== uS && (0, nS.ib)(this.shownBones, uS), ZS(NS, !1);
            const SS = tS.getNamedNode(bS, qS);
            tS.detachTransformNodeIfFound(NS, bS, SS)
          }
        this.attachmentsByType[SS] = [];
        const xS = (0, PS.j)(SS, HS);
        if (null !== xS && void 0 !== xS && null !== (gS = xS.attachments) && void 0 !== gS && gS.length)
          for (const NS of xS.attachments) {
            let gS;
            try {
              gS = await this.loadModel(NS.modelGlb, NS.texture, NS.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[SS] !== HS) return;
            const XS = gS.nodesByName.get(NS.modelNode);
            if (!XS) {
              console.error(`Preview attachment node ${NS.modelNode} not found in ${NS.modelGlb}`);
              continue
            }
            ZS(XS, !0), (0, QS.s)(XS, NS.overlayColour);
            const xS = tS.getNamedNode(bS, NS.destNode);
            tS.attachTransformNode(XS, bS, xS), this.attachmentsByType[SS].push({
              mesh: XS,
              destNode: NS.destNode,
              bones: gS.bones
            }), null !== gS.bones && this.shownBones.push(gS.bones)
          }
      }
      writePoses(SS) {
        for (const HS of this.shownBones) HS.write(SS)
      }
    }
    var OS = gS(37184),
      dS = (gS(41125), gS(40519), gS(41131), gS(34271));
    let cS, vS, ES, LS, YS, AS, yS, VS, iS, WS;
    const zS = document.createElement("canvas");
    async function US() {
      await new Promise((SS => {
        setTimeout((() => {
          SS()
        }), 100)
      }))
    }
    zS.classList.add("CharCustomisationPreviewCanvas");
    const pS = {};

    function sS(SS, HS) {
      zS.width = SS, zS.height = HS, cS.resize()
    }
    let BS = 0;
    class MS {
      constructor(SS, HS) {
        this.framing = HS, this.ready = WS, this.dev = {
          canvas: () => zS,
          isolateHead(SS) {
            const HS = AS.getNodeNames(yS);
            for (let gS = 0; gS < HS.length; gS++) "HeadMesh" !== HS[gS] && "__root__" !== HS[gS] && "TorsoNode" !== HS[gS] && AS.setNodeEnabled(yS, gS, !1);
            if (SS) {
              const SS = AS.getNamedNode(yS, "HeadMesh");
              AS.setNodeDisableColorWrite(yS, SS, !0, (SS => {
                const HS = new jS.StandardMaterial(`${SS.name}_depthOnly`, SS.lL());
                return HS.disableColorWrite = !0, HS
              }))
            }
            AS.setPosition(yS, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const gS = SS.getBoundingClientRect();
        sS(gS.width, gS.height), BS++, cS.stopRenderLoop(), cS.runRenderLoop((() => {
          var SS, HS;
          null === (SS = VS) || void 0 === SS || SS.render(cS.getDeltaTime()), null === (HS = iS) || void 0 === HS || HS.writePoses(performance.now() / 1e3), ES.render()
        }))
      }
      isReady() {
        return !!LS
      }
      setCosmetic(SS, HS) {
        ! function(SS, HS) {
          if (!LS) return;
          const xS = (0, bS.e)();
          xS.uE(!1), tS.b.Player.meshApi.updatePlayerCosmetic(xS.HA, yS, SS, HS, !0), "cape" === SS && (HS === XS.f ? YS.MJ(!1) : (YS.MJ(!0), YS.material.diffuseTexture = new GS.c(gS(38817)(`./cape_${HS}.png`), YS.lL(), {
            invertY: !1,
            samplingMode: GS.c.NEAREST_NEAREST_MIPLINEAR
          })));
          pS[SS] = iS.update(SS, HS)
        }(SS, HS)
      }
      playEmote(SS) {
        if (!VS) return;
        if (!SS) return void VS.stopAnimation(qS.g.Emote);
        const HS = (0, xS.d)((0, NS.g)(SS).animation);
        VS.startAnimation(HS, qS.g.Emote, 0, NS.c)
      }
      async untilDrawn(SS) {
        if (await US(), "cape" === SS && YS) {
          const SS = YS.material,
            HS = null === SS || void 0 === SS ? void 0 : SS.diffuseTexture;
          HS && !HS.isReady() && (await new Promise((SS => {
            HS.onLoadObservable.addOnce((() => {
              SS()
            }))
          })), await US())
        }
        pS[SS] && (await pS[SS], await US()), await ES.whenReadyAsync(), await new Promise((SS => {
          ES.onAfterRenderObservable.addOnce((() => {
            SS()
          }))
        }))
      }
      setOrbit(SS) {
        FS(SS)
      }
      resetCamera() {
        vS.inertialAlphaOffset = 0, vS.inertialBetaOffset = 0, vS.inertialRadiusOffset = 0, FS(dS.e[this.framing])
      }
      resize(SS, HS) {
        sS(SS, HS)
      }
      close() {
        this.closed || (this.closed = !0, BS--, 0 === BS && cS.stopRenderLoop())
      }
    }

    function FS(SS) {
      let {
        yaw: HS,
        pitch: gS,
        radius: tS,
        target: bS
      } = SS;
      vS.alpha = HS, vS.beta = gS, tS && (vS.radius = tS), bS && vS.target.set(bS[0], bS[1], bS[2])
    }

    function RS(SS, HS) {
      return SS.appendChild(zS), cS || function() {
        cS = new uS.b(zS, !0, {
          preserveDrawingBuffer: !0
        });
        const SS = (0, bS.e)();
        cS.RgS = SS.Hj.engine.RgS, ES = new IS.b(cS), ES.clearColor = new KS.b(0, 0, 0, 0), ES.ambientColor = new KS.Color3(1, 1, 1), vS = new fS.c("yG", 0, 0, 1, kS.VK.Zero(), ES), vS.attachControl(zS, !0), vS.panningSensibility = 0, WS = (0, tS.s)("Player", ES, !0).then((HS => {
          LS = HS.meshApi, YS = HS.capeMesh, AS = SS.Hj.fY;
          const gS = 8.33;
          yS = (0, tS.j)("Player", gS, !0, !0), AS.setPosition(yS, 0, -8.33, 0);
          const bS = AS.getNamedNode(yS, "BodyMesh");
          AS.attachTransformNode(YS, yS, bS), AS.set(yS, "aOpacity", 1), AS.JA(yS, "aOpacity", 1), iS = new JS(ES, AS, yS), VS = new CS.AnimatorState, VS.qk = SS, VS.thinInstMgr = AS, VS.kY = yS, VS.ngS = AS.TgS(yS, 0), VS.modelLifeformType = "Player", VS.nodeNameAliases = (0, OS.c)("Player").nodeNameAliases;
          const XS = YS.hA().boundingBox;
          YS.position.y = ((24 - XS.maximum.y + XS.minimum.y) / 2 - 1 / 32) / gS, YS.position.z = -1 / gS, YS.rotationQuaternion = null;
          const xS = Math.PI / 18,
            NS = XS.maximum.y / gS;
          YS.rotation.x = xS;
          const qS = Math.cos(xS),
            uS = Math.sin(xS);
          YS.position.y += NS * (1 - qS) + 0 * uS, YS.position.z -= NS * uS + 0 * (1 - qS);
          const IS = new jS.StandardMaterial("capeMaterial", YS.lL());
          YS.material = IS;
          const fS = new KS.Color3(1, 1, 1);
          IS.diffuseColor = new KS.Color3, IS.specularColor = new KS.Color3, IS.emissiveColor = new KS.Color3, IS.ambientColor = new KS.Color3, fS.scaleToRef(.43, IS.diffuseColor), fS.scaleToRef(1.75, IS.ambientColor), IS.freeze();
          const GS = new aS.d("light", new kS.VK(-.1, 1, -.3), ES);
          GS.diffuse = new KS.Color3(1, 1, 1), GS.specular = new KS.Color3(1, 1, 1), GS.groundColor = new KS.Color3(.5, .5, .5)
        }))
      }(), new MS(SS, HS)
    }
  },
  38815: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => kS
    });
    var tS = gS(37200),
      bS = gS(37212),
      XS = gS(37466),
      xS = gS(37216),
      NS = gS(37209);

    function qS(SS) {
      return `\n\t\t\t\t${(0,NS.y)(SS,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, NS.A)(SS, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, NS.A)(SS, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, NS.o)(SS, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function uS(SS, HS) {
      let gS = (0, NS.Gb)(SS, "skele" + (HS - 1));
      for (let bS = HS - 2; bS >= 0; bS--) gS = (0, NS.qb)(SS, `boneIdx == ${bS}`, (0, NS.Gb)(SS, `skele${bS}`), gS);
      const tS = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,NS.A)(SS,"int","boneIdx",(0,NS.yb)(SS,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,NS.A)(SS,"vec3","bone",gS)}\n\t\t\t\t${(0,NS.A)(SS,"vec2","pivot",(0,NS.o)(SS,"vec2","0.0",`${(0,NS.Pb)(SS,"position")}.z`))}\n\t\t\t\t${(0,NS.$)(SS)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${tS}));`:`positionUpdated.yz += ${tS};`}\n\t\t`
    }

    function IS(SS) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,NS.o)(SS,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const fS = {
        x: 0,
        y: 0,
        z: 0,
        UHS(SS, HS) {
          return this.x = SS[HS], this.y = SS[HS + 1], this.z = SS[HS + 2], this
        }
      },
      kS = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (SS, HS) => ({
          ...(0, tS.b)("CAPE"),
          BLOXD_CAPE_BONES: `${SS}`,
          BLOXD_CAPE_MAX_Y: (0, bS.yb)(HS)
        }),
        getUniforms(SS) {
          return (0, XS.d)(function(SS) {
            const HS = [];
            for (let gS = 0; gS < SS; gS++) HS.push({
              name: `skele${gS}`,
              type: "highp vec3"
            });
            return HS
          }(this.skeleLen), "vertex", SS)
        },
        bind(SS) {
          for (let HS = 0; HS < this.skeleLen; HS++) SS.updateVector3(`skele${HS}`, fS.UHS(this.skele, 3 * HS))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(SS, HS) {
          return "vertex" !== SS ? null : {
            CUSTOM_VERTEX_DEFINITIONS: qS(HS),
            CUSTOM_VERTEX_UPDATE_POSITION: uS(HS, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: IS(HS)
          }
        }
      };
    (0, xS.i)(kS)
  },
  38698: (SS, HS, gS) => {
    gS.d(HS, {
      b: () => IS,
      c: () => fS
    });
    var tS = gS(37200),
      bS = gS(37466),
      XS = gS(37209),
      xS = gS(37216);
    const NS = "bloxdTextLodBias",
      qS = [{
        name: NS,
        type: "float"
      }],
      uS = "bloxdTextSample",
      IS = {
        planes: -.5,
        boards: -.5
      },
      fS = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, tS.b)("TEXT_SAMPLER"),
        getUniforms: SS => (0, bS.d)(qS, "fragment", SS),
        bind(SS) {
          SS.updateFloat(NS, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(SS, HS) {
          if ("fragment" !== SS) return null;
          const gS = (0, XS.G)(HS, `vec4 ${uS}(sampler2D s, vec2 uv, float bias)`, `fn ${uS}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            tS = (0, XS.G)(HS, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            bS = `${(0,XS.S)(HS,"vDiffuseUV")} + uvOffset`,
            xS = (0, XS.G)(HS, `${uS}(diffuseSampler, ${bS}, ${(0,XS.Gb)(HS,NS)})`, `${uS}(diffuseSampler, diffuseSamplerSampler, ${bS}, ${(0,XS.Gb)(HS,NS)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${gS} {\n\t\t\t\t\t${(0,XS.A)(HS,"vec4","texel",tS)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,XS.o)(HS,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,XS.o)(HS,"vec3","0.0")}, ${(0,XS.o)(HS,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, XS.B)(HS)]: `baseColor = ${xS};`
          }
        }
      };
    (0, xS.i)(fS)
  },
  41131: (SS, HS, gS) => {
    gS.r(HS), gS.d(HS, {
      CapeMaterialPlugin: () => QS,
      HueTintMaterialPlugin: () => DS,
      LifeformMaterialPlugin: () => wS,
      OverlayMaterialPlugin: () => hS
    });
    var tS = gS(41136),
      bS = gS(38033);
    class XS extends((0, tS.e)(bS.d)) {}(0, tS.h)(bS.d, XS);
    var xS = gS(37193);
    class NS extends((0, tS.e)(xS.h)) {}(0, tS.h)(xS.h, NS);
    var qS = gS(37876);
    class uS extends((0, tS.e)(qS.f)) {}(0, tS.h)(qS.f, uS);
    var IS = gS(37445),
      fS = gS(40306),
      kS = gS(37441);
    class aS extends((0, tS.e)(kS.e)) {
      constructor(SS, HS, gS) {
        super(SS, HS, gS), (0, IS.k)(SS)
      }
      dispose(SS) {
        (0, IS.n)(this._material), super.dispose(SS)
      }
    }(0, tS.h)(kS.e, aS), (0, kS.f)({
      disableUnusedSpecularTerm: tS.d,
      isLightingDisabled: SS => SS instanceof fS.StandardMaterial && SS.disableLighting
    });
    var KS = gS(38698);
    class jS extends((0, tS.e)(KS.c)) {}(0, tS.h)(KS.c, jS);
    var GS = gS(38815),
      CS = gS(37306),
      nS = gS(38169),
      PS = gS(37247);
    class QS extends((0, tS.e)(GS.b)) {}(0, tS.h)(GS.b, QS);
    class DS extends((0, tS.e)(CS.d)) {}(0, tS.h)(CS.d, DS);
    class wS extends((0, tS.e)(nS.p)) {}(0, tS.h)(nS.p, wS);
    class hS extends((0, tS.e)(PS.d)) {}(0, tS.h)(PS.d, hS)
  },
  41136: (SS, HS, gS) => {
    gS.d(HS, {
      d: () => pS,
      e: () => nS,
      h: () => TS
    });
    var tS = gS(40306),
      bS = gS(41138),
      XS = gS(41177),
      xS = gS(41142),
      NS = gS(37843),
      qS = gS(37855),
      uS = gS(37862),
      IS = gS(37864),
      fS = gS(37240),
      kS = gS(37242),
      aS = gS(41144),
      KS = gS(37216),
      jS = gS(37225),
      GS = gS(37209);

    function CS(SS, HS) {
      return Object.assign((function(SS, gS, tS, bS) {
        return HS(this.featureState, SS, gS, tS, bS)
      }), {
        xK: SS
      })
    }

    function nS(SS) {
      const HS = class extends aS.d {
          constructor(HS, gS) {
            const tS = (0, jS.cb)(HS),
              bS = tS && (0, jS.v)(tS, SS.name);
            for (var XS = arguments.length, xS = new Array(XS > 2 ? XS - 2 : 0), NS = 2; NS < XS; NS++) xS[NS - 2] = arguments[NS];
            super(HS, SS.name, SS.priority, bS ? bS.defines : SS.defines(...xS), !1), this.featureState = void 0, this.featureState = gS, this._pluginManager._addPlugin(this), this._enable(!0), (0, jS.z)(this._material, SS, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return SS.className
          }
          isCompatible(SS) {
            return SS === GS.e.GLSL || SS === GS.e.WGSL
          }
        },
        gS = (0, KS.e)(SS);
      for (const [tS, bS] of Object.entries(KS.b)) {
        const XS = SS[tS];
        if (XS) {
          const SS = gS[tS];
          Object.defineProperty(HS.prototype, bS, {
            value: CS(XS, SS),
            writable: !0,
            configurable: !0
          })
        }
      }
      return HS
    }
    class PS extends(nS(NS.c)) {}
    var QS = gS(39867),
      DS = gS(41152);
    const wS = new WeakMap;

    function hS(SS, HS, gS) {
      let tS = wS.get(gS);
      tS || (tS = new Map, wS.set(gS, tS));
      const {
        url: bS
      } = SS;
      let XS = tS.get(bS);
      return XS || (XS = async function(SS, HS, gS) {
        var tS;
        const {
          width: bS,
          height: XS
        } = SS.getSize(), NS = Math.round(XS / bS), qS = SS.getInternalTexture(), uS = HS && HS.byteLength === bS * bS * NS * 4 ? HS : null !== (tS = ZS.get(qS)) && void 0 !== tS ? tS : SS._readPixelsSync(), IS = new DS.e(uS, bS, bS, NS, QS.b.TEXTUREFORMAT_RGBA, gS, !0, !1, xS.c.NEAREST_NEAREST_MIPLINEAR);
        ZS.has(qS) || (! function(SS, HS) {
          const gS = HS.createRawTexture(new Uint8Array(4), 1, 1, QS.b.TEXTUREFORMAT_RGBA, !1, !1, xS.c.NEAREST_SAMPLINGMODE);
          SS._hardwareTexture.release(), HS.unbindAllTextures(), gS._swapAndDie(SS, !1)
        }(qS, gS.AK()), ZS.set(qS, uS));
        return IS
      }(SS, HS, gS), tS.set(bS, XS), XS.catch((() => {
        tS.delete(bS)
      }))), XS
    }
    const ZS = new WeakMap;
    var JS = gS(37867);
    class OS extends(nS(qS.j)) {
      constructor(SS, HS) {
        super(SS, HS), HS.textures.forEach(((SS, HS) => {
          SS.mirror.onLoadObservable.add((SS => {
            this.setTextureArrayData(SS, HS).catch((SS => {
              console.error(`Failed to build texture array for atlas ${HS}`, SS)
            }))
          }))
        })), (0, JS.h)(HS, SS.shaderLanguage)
      }
      async setTextureArrayData(SS, HS) {
        var gS, tS;
        const bS = this.featureState,
          {
            width: XS,
            height: xS
          } = SS.getSize(),
          NS = bS.useWebGL2 ? await hS(SS, null !== (gS = null === (tS = bS.sources.pixels) || void 0 === tS ? void 0 : tS[HS]) && void 0 !== gS ? gS : null, this._material.lL()) : null;
        (0, JS.b)(this._material, bS, HS, NS, XS, Math.round(xS / XS), this._material.shaderLanguage)
      }
    }
    var dS = gS(41157),
      cS = gS(40346),
      vS = gS(37113),
      ES = gS(41166),
      LS = gS(40449),
      YS = gS(40337),
      AS = gS(41123),
      yS = gS(37615),
      VS = gS(41168);
    class iS extends dS.c {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const WS = {
      Mesh: ES.e,
      TransformNode: AS.d,
      CK: dS.c,
      VertexBuffer: dS.f,
      BoundingInfo: cS.e,
      VK: vS.VK,
      ArenaBuffer: iS,
      SubMesh: YS.e,
      VertexData: LS.e,
      MirroredGeometry: VS.e,
      meshFromArrays: VS.h,
      plainMeshFromArrays: VS.i
    };
    (0, yS.c)(WS);
    var zS = gS(37445);
    class US extends(nS(IS.i)) {
      constructor(SS, HS) {
        if (super(SS, HS), SS instanceof tS.StandardMaterial && HS.dirLightCount > 0) {
          const HS = SS,
            gS = HS._blockDirtyMechanism;
          HS._blockDirtyMechanism = !0, SS.disableLighting = !0, HS._blockDirtyMechanism = gS;
          const tS = (0, jS.cb)(SS);
          tS && (tS.disableLighting = !0, (0, jS.$)(tS))
        }(0, zS.k)(SS)
      }
      dispose(SS) {
        (0, zS.n)(this._material), super.dispose(SS)
      }
    }

    function pS(SS, HS) {
      if (!(HS instanceof tS.StandardMaterial) || HS.specularTexture) return;
      const {
        r: gS,
        g: bS,
        b: XS
      } = HS.specularColor;
      0 === gS && 0 === bS && 0 === XS && (SS.SPECULARTERM = !1)
    }(0, IS.e)({
      disableUnusedSpecularTerm: pS
    });
    var sS = gS(37335),
      BS = gS(37624);
    const MS = new RegExp(`^#define ${uS.c}\\s*$`, "m");
    class FS extends(nS(uS.h)) {
      constructor(SS, HS) {
        super(SS, HS), this.nK = !1, HS.ditherOnlyWhileFading && (BS.e.add(SS), this.prewarmDitherTwins(SS))
      }
      prewarmDitherTwins(SS) {
        const HS = new WeakSet;
        SS.onEffectCreatedObservable.add((gS => {
          let {
            effect: tS,
            subMesh: bS
          } = gS;
          if (this.featureState.prewarmingDither || HS.has(tS)) return;
          HS.add(tS);
          const XS = null === bS || void 0 === bS ? void 0 : bS.getMesh();
          XS && !MS.test(tS.defines) && SS.lL().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(XS) || HS.delete(tS)
          }))
        }))
      }
      prewarmDither(SS) {
        if (this.nK || SS.Ow()) return !1;
        const HS = new YS.e(0, 0, 0, 0, 0, SS, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(SS, HS)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== HS.effect
      }
      dispose(SS) {
        this.nK = !0, super.dispose(SS)
      }
    }
    const RS = new Map;

    function TS(SS, HS) {
      RS.set(SS, HS)
    }
    TS(NS.c, PS), TS(qS.j, OS), TS(uS.h, FS), TS(IS.i, US), (0, fS.d)({
      create: (SS, HS) => {
        const gS = new tS.StandardMaterial(SS.name, HS);
        return (0, sS.q)(SS, gS), gS.detailMap._pluginDefineNames
      },
      write: (SS, HS, gS) => {
        (0, sS.S)(SS.mirror, HS, gS)
      },
      addFeature: (SS, HS, gS) => {
        const tS = RS.get(HS.feature);
        if (!tS) throw new Error(`${HS.feature.name} has no plugin class (registerPluginClass)`);
        new tS(SS.mirror, HS.state, ...gS)
      },
      texture: (SS, HS, gS) => {
        let {
          url: tS,
          noMipmap: bS,
          invertY: XS,
          samplingMode: NS,
          data: qS,
          sets: uS
        } = gS;
        if (!qS) {
          const gS = new xS.c(tS, HS, bS, XS, NS);
          return Object.assign(gS, uS), void(0, kS.I)(SS, gS)
        }
        const IS = {},
          fS = new Promise(((SS, HS) => {
            IS.onLoad = SS, IS.onError = (SS, gS) => {
              HS(new Error(`${qS.context}: ${(null===gS||void 0===gS?void 0:gS.message)||SS||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: aS,
            bytes: KS,
            label: jS
          } = qS,
          GS = {
            noMipmap: bS,
            invertY: !1,
            samplingMode: NS,
            ...IS,
            mimeType: aS,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          CS = new xS.c(null, HS, GS);
        sS.r.set(CS, fS), Object.assign(CS, uS), CS.updateURL(tS, KS);
        const nS = CS.getInternalTexture();
        nS && (nS.label = jS), SS.uvSet = CS.coordinatesIndex, SS.matrix.set((0, sS.L)(CS)), (0, kS.I)(SS, CS)
      },
      cube: (SS, HS, gS) => {
        let {
          rootUrl: tS,
          files: XS,
          noMipmap: NS,
          luminance: qS
        } = gS;
        const {
          samplingMode: uS
        } = SS.sampler, IS = uS === (0, kS.x)(NS) ? null : () => {
          (0, sS.H)(fS, uS)
        }, fS = new bS.d(tS, HS, null, NS, XS, IS, null, (0, kS.u)(qS));
        fS.coordinatesMode = xS.c.SKYBOX_MODE, (0, kS.I)(SS, fS)
      },
      canvas: (SS, HS, gS) => {
        let {
          width: tS,
          height: bS,
          mipmaps: NS,
          samplingMode: qS,
          hasAlpha: uS = !1,
          wrap: IS = xS.c.CLAMP_ADDRESSMODE
        } = gS;
        const fS = new XS.b(HS, {
          width: tS,
          height: bS
        }, SS, NS, qS);
        fS.hasAlpha = uS, fS.wrapU = IS, fS.wrapV = IS;
        const kS = (0, sS.y)(fS);
        return (0, sS.B)(kS, fS), kS
      }
    })
  },
  41168: (SS, HS, gS) => {
    gS.d(HS, {
      e: () => IS,
      h: () => fS,
      i: () => kS
    });
    var tS = gS(41157),
      bS = gS(40113),
      XS = gS(40346),
      xS = gS(40452),
      NS = gS(41166),
      qS = gS(40449),
      uS = gS(37505);
    class IS extends xS.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (SS, HS) => {
          this.releaseUnlessInstanced(HS)
        }, this.onLinked = null
      }
      link(SS) {
        var HS;
        (0, uS.o)(SS), this.model = SS, null === (HS = this.onLinked) || void 0 === HS || HS.call(this, SS)
      }
      relink() {
        this.release();
        const SS = [];
        for (const bS of Object.values(this._vertexBuffers))
          if (!bS.getIsInstanced()) {
            const {
              byteOffset: HS,
              byteStride: gS,
              type: tS,
              normalized: XS
            } = bS;
            SS.push({
              kind: bS.getKind(),
              data: bS.getData(),
              offset: HS,
              stride: gS,
              components: bS.getSize(),
              glType: tS,
              isNormalized: XS
            })
          } const HS = this._indices.length ? this._indices : null,
          {
            minimum: gS,
            maximum: tS
          } = this.extend;
        this.link(new uS.g(SS, HS, this.getTotalVertices(), new Float64Array(gS.lgS()), new Float64Array(tS.lgS())))
      }
      copy(SS) {
        if (!this.model) return super.copy(SS);
        const HS = new IS(SS, this.lL()),
          gS = this.mgS(void 0, !0);
        gS && HS.setIndices(gS);
        let xS = !1;
        for (const XS in this._vertexBuffers) {
          const SS = this._vertexBuffers[XS],
            gS = SS.getData();
          if (!gS) continue;
          const NS = SS.getSize(),
            {
              type: qS,
              byteOffset: uS,
              byteStride: IS,
              normalized: fS
            } = SS;
          xS ||= SS.isUpdatable();
          const kS = SS.getIsInstanced() ? (gS instanceof Array ? 4 * gS.length : gS.byteLength) / IS : this.getTotalVertices(),
            aS = (0, bS.p)(gS, NS, qS, uS, IS, kS, !0),
            KS = {
              updatable: SS.isUpdatable(),
              stride: NS,
              type: qS,
              normalized: fS,
              takeBufferOwnership: !0,
              instanced: SS.getIsInstanced()
            };
          HS.setVerticesBuffer(new tS.f(this.AK(), aS, XS, KS), kS)
        }
        return HS._updatable = xS, HS._boundingInfo = new XS.e(this.extend.minimum, this.extend.maximum), HS.relink(), HS
      }
      static mergeMeshes(SS, HS, gS, tS, bS, XS) {
        const qS = SS[0].lL(),
          uS = new NS.e(SS[0].name + "_merged", qS),
          fS = new IS(xS.e.RandomId(), qS, void 0, !1, uS);
        try {
          if (!NS.e.MergeMeshes(SS, HS, gS, uS, bS, XS)) return uS.dispose(), null
        } catch (kS) {
          throw uS.dispose(), kS
        }
        return fS.relink(), uS
      }
      removeVerticesData(SS) {
        this.releaseUnlessInstanced(SS), super.removeVerticesData(SS)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(SS) {
        var HS;
        SS && null !== (HS = this.getVertexBuffer(SS)) && void 0 !== HS && HS.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, uS.w)(this.model), this.model = null)
      }
    }

    function fS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new NS.e(SS, gS);
      const bS = (0, uS.l)(HS),
        {
          positions: XS,
          normals: fS,
          uvs: kS,
          indices: aS,
          named: KS = {}
        } = HS,
        jS = new qS.e;
      jS.positions = XS, jS.normals = null !== fS && void 0 !== fS ? fS : null, jS.uvs = null !== kS && void 0 !== kS ? kS : null, jS.indices = aS;
      const GS = new IS(xS.e.RandomId(), gS, jS, !1, tS);
      for (const {
          kind: xS,
          components: NS
        }
        of bS.vertexAttributes) xS in KS && tS.setVerticesData(xS, KS[xS], !1, NS);
      return GS.link(bS), tS
    }

    function kS(SS, HS, gS) {
      let tS = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const bS = new NS.e(SS, gS),
        {
          positions: XS,
          normals: xS,
          uvs: uS,
          indices: IS
        } = HS;
      return Object.assign(new qS.e, {
        positions: XS,
        normals: xS,
        uvs: uS,
        indices: IS
      }).applyToMesh(bS, tS), bS
    }
  },
  38817: (SS, HS, gS) => {
    var tS = {
      "./cape_cow_cream.png": 28001,
      "./cape_cow_normal.png": 28010,
      "./cape_creator_level1.png": 28017,
      "./cape_creator_level2.png": 28024,
      "./cape_creator_level3.png": 28026,
      "./cape_none.png": 28030,
      "./cape_pig.png": 28032,
      "./cape_sheep.png": 28037,
      "./cape_super.png": 28039,
      "./cape_super_inverted.png": 28043,
      "./cape_youtuber.png": 28052
    };

    function bS(SS) {
      var HS = XS(SS);
      return gS(HS)
    }

    function XS(SS) {
      if (!gS.o(tS, SS)) {
        var HS = new Error("Cannot find module '" + SS + "'");
        throw HS.code = "MODULE_NOT_FOUND", HS
      }
      return tS[SS]
    }
    bS.keys = function() {
      return Object.keys(tS)
    }, bS.resolve = XS, SS.exports = bS, bS.id = 38817
  }
};
Object.freeze(modules);
for (const SS in modules) Object.freeze(modules[SS]);