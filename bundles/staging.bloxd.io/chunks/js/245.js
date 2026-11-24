export const id = 245;
export const ids = [245];
export const modules = {
  41087: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      openCharacterPreview: () => uD
    });
    var pD = wD(38082),
      sD = wD(2769),
      KD = wD(605),
      rD = wD(37164),
      LD = wD(2204),
      cD = wD(37151),
      gD = wD(39744),
      RD = wD(40015),
      AD = wD(41006),
      UD = wD(37070),
      fD = wD(40183),
      ID = wD(37267),
      BD = wD(40192),
      GD = wD(41049),
      hD = wD(37061),
      nD = wD(1232),
      MD = wD(2197),
      OD = wD(37226),
      JD = wD(37327);
    class ED {
      constructor(DD, zD) {
        this.pose = DD, this.nodes = void 0, this.nodes = DD.boneNames.map((DD => zD.get(DD)))
      }
      write(DD) {
        this.pose.pose(DD);
        const {
          rotations: zD
        } = this.pose;
        for (let wD = 0; wD < this.nodes.length; wD++) {
          const DD = 4 * wD;
          this.nodes[wD].rotationQuaternion.set(zD[DD], zD[DD + 1], zD[DD + 2], zD[DD + 3])
        }
      }
    }

    function QD(DD) {
      DD.unfreezeWorldMatrix();
      for (const zD of DD.getChildren()) QD(zD)
    }

    function XD(DD, zD) {
      DD.isVisible = zD;
      for (const wD of DD.getChildMeshes()) wD.isVisible = zD
    }
    class VD {
      constructor(DD, zD, wD) {
        this.oB = DD, this.thinInstMgr = zD, this.Vl = wD, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(DD, zD, wD) {
        const pD = (0, OD.h)(DD, zD);
        return pD in this.modelCache || (this.modelCache[pD] = (async () => {
          try {
            const pD = await (0, OD.i)(DD, this.oB),
              sD = new Map;
            for (const DD of pD.getNodes()) sD.set(DD.name, DD);
            const KD = (0, OD.e)(null !== zD && void 0 !== zD ? zD : DD, this.oB);
            (0, OD.k)(pD, KD, {
              keepTransforms: void 0 !== wD,
              onProcessedMesh: DD => {
                (0, OD.o)(DD), this.oB.VpD(DD, !1), DD.isVisible = !1
              }
            });
            for (const DD of pD.rootNodes) QD(DD);
            const rD = void 0 === wD ? null : (0, JD.c)(wD, (DD => {
              var zD, wD;
              return null !== (zD = null === (wD = sD.get(DD)) || void 0 === wD ? void 0 : wD.rotationQuaternion) && void 0 !== zD ? zD : null
            }));
            return {
              nodesByName: sD,
              bones: null === rD ? null : new ED(rD, sD)
            }
          } catch (sD) {
            throw delete this.modelCache[pD], console.error(`Failed to load preview attachment ${pD}:`, sD), sD
          }
        })()), this.modelCache[pD]
      }
      async update(DD, zD) {
        var wD;
        const {
          thinInstMgr: pD,
          Vl: sD
        } = this;
        this.cosmeticNames[DD] = zD;
        const KD = this.attachmentsByType[DD];
        if (KD)
          for (const {
              mesh: LD,
              destNode: cD,
              bones: gD
            }
            of KD) {
            null !== gD && (0, nD.fb)(this.shownBones, gD), XD(LD, !1);
            const DD = pD.getNamedNode(sD, cD);
            pD.detachTransformNodeIfFound(LD, sD, DD)
          }
        this.attachmentsByType[DD] = [];
        const rD = (0, MD.l)(DD, zD);
        if (null !== rD && void 0 !== rD && null !== (wD = rD.attachments) && void 0 !== wD && wD.length)
          for (const LD of rD.attachments) {
            let wD;
            try {
              wD = await this.loadModel(LD.modelGlb, LD.texture, LD.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[DD] !== zD) return;
            const KD = wD.nodesByName.get(LD.modelNode);
            if (!KD) {
              console.error(`Preview attachment node ${LD.modelNode} not found in ${LD.modelGlb}`);
              continue
            }
            XD(KD, !0), (0, OD.r)(KD, LD.overlayColour);
            const rD = pD.getNamedNode(sD, LD.destNode);
            pD.attachTransformNode(KD, sD, rD), this.attachmentsByType[DD].push({
              mesh: KD,
              destNode: LD.destNode,
              bones: wD.bones
            }), null !== wD.bones && this.shownBones.push(wD.bones)
          }
      }
      writePoses(DD) {
        for (const zD of this.shownBones) zD.write(DD)
      }
    }
    var PD = wD(37169),
      CD = (wD(41035), wD(40408), wD(41038), wD(34238));
    let xD, TD, bD, jD, dD, SD, iD, lD, WD, ND;
    const ZD = document.createElement("canvas");
    async function yD() {
      await new Promise((DD => {
        setTimeout((() => {
          DD()
        }), 100)
      }))
    }
    ZD.classList.add("CharCustomisationPreviewCanvas");
    const kD = {};

    function mD(DD, zD) {
      ZD.width = DD, ZD.height = zD, xD.resize()
    }
    let eD = 0;
    class oD {
      constructor(DD, zD) {
        this.framing = zD, this.ready = ND, this.dev = {
          canvas: () => ZD,
          isolateHead(DD) {
            const zD = SD.getNodeNames(iD);
            for (let wD = 0; wD < zD.length; wD++) "HeadMesh" !== zD[wD] && "__root__" !== zD[wD] && "TorsoNode" !== zD[wD] && SD.setNodeEnabled(iD, wD, !1);
            if (DD) {
              const DD = SD.getNamedNode(iD, "HeadMesh");
              SD.setNodeDisableColorWrite(iD, DD, !0, (DD => {
                const zD = new BD.StandardMaterial(`${DD.name}_depthOnly`, DD.Ul());
                return zD.disableColorWrite = !0, zD
              }))
            }
            SD.setPosition(iD, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const wD = DD.getBoundingClientRect();
        mD(wD.width, wD.height), eD++, xD.stopRenderLoop(), xD.runRenderLoop((() => {
          var DD, zD;
          null === (DD = lD) || void 0 === DD || DD.render(xD.getDeltaTime()), null === (zD = WD) || void 0 === zD || zD.writePoses(performance.now() / 1e3), bD.render()
        }))
      }
      isReady() {
        return !!jD
      }
      setCosmetic(DD, zD) {
        ! function(DD, zD) {
          if (!jD) return;
          const rD = (0, sD.e)();
          rD.YC(!1), pD.d.Player.meshApi.updatePlayerCosmetic(rD.vW, iD, DD, zD, !0), "cape" === DD && (zD === KD.f ? dD.nC(!1) : (dD.nC(!0), dD.material.diffuseTexture = new GD.b(wD(38768)(`./cape_${zD}.png`), dD.Ul(), {
            invertY: !1,
            samplingMode: GD.b.NEAREST_NEAREST_MIPLINEAR
          })));
          kD[DD] = WD.update(DD, zD)
        }(DD, zD)
      }
      playEmote(DD) {
        if (!lD) return;
        if (!DD) return void lD.stopAnimation(cD.c.Emote);
        const zD = (0, rD.f)((0, LD.m)(DD).animation);
        lD.startAnimation(zD, cD.c.Emote, 0, LD.e)
      }
      async untilDrawn(DD) {
        if (await yD(), "cape" === DD && dD) {
          const DD = dD.material,
            zD = null === DD || void 0 === DD ? void 0 : DD.diffuseTexture;
          zD && !zD.isReady() && (await new Promise((DD => {
            zD.onLoadObservable.addOnce((() => {
              DD()
            }))
          })), await yD())
        }
        kD[DD] && (await kD[DD], await yD()), await bD.whenReadyAsync(), await new Promise((DD => {
          bD.onAfterRenderObservable.addOnce((() => {
            DD()
          }))
        }))
      }
      setOrbit(DD) {
        aD(DD)
      }
      resetCamera() {
        TD.inertialAlphaOffset = 0, TD.inertialBetaOffset = 0, TD.inertialRadiusOffset = 0, aD(CD.d[this.framing])
      }
      resize(DD, zD) {
        mD(DD, zD)
      }
      close() {
        this.closed || (this.closed = !0, eD--, 0 === eD && xD.stopRenderLoop())
      }
    }

    function aD(DD) {
      let {
        yaw: zD,
        pitch: wD,
        radius: pD,
        target: sD
      } = DD;
      TD.alpha = zD, TD.beta = wD, pD && (TD.radius = pD), sD && TD.target.set(sD[0], sD[1], sD[2])
    }

    function uD(DD, zD) {
      return DD.appendChild(ZD), xD || function() {
        xD = new gD.b(ZD, !0, {
          preserveDrawingBuffer: !0
        });
        const DD = (0, sD.e)();
        xD.OpD = DD.wB.engine.OpD, bD = new RD.b(xD), bD.clearColor = new ID.e(0, 0, 0, 0), bD.ambientColor = new ID.Color3(1, 1, 1), TD = new AD.c("WG", 0, 0, 1, UD.WI.Zero(), bD), TD.attachControl(ZD, !0), TD.panningSensibility = 0, ND = (0, pD.D)("Player", bD, !0).then((zD => {
          jD = zD.meshApi, dD = zD.capeMesh, SD = DD.wB.Ql;
          const wD = 8.33;
          iD = (0, pD.o)("Player", wD, !0, !0), SD.setPosition(iD, 0, -8.33, 0);
          const sD = SD.getNamedNode(iD, "BodyMesh");
          SD.attachTransformNode(dD, iD, sD), SD.set(iD, "aOpacity", 1), SD.zN(iD, "aOpacity", 1), WD = new VD(bD, SD, iD), lD = new hD.AnimatorState, lD.AU = DD, lD.thinInstMgr = SD, lD.Vl = iD, lD.uwD = SD.JpD(iD, 0), lD.modelLifeformType = "Player", lD.nodeNameAliases = (0, PD.b)("Player").nodeNameAliases;
          const KD = dD.FW().boundingBox;
          dD.position.y = ((24 - KD.maximum.y + KD.minimum.y) / 2 - 1 / 32) / wD, dD.position.z = -1 / wD, dD.rotationQuaternion = null;
          const rD = Math.PI / 18,
            LD = KD.maximum.y / wD;
          dD.rotation.x = rD;
          const cD = Math.cos(rD),
            gD = Math.sin(rD);
          dD.position.y += LD * (1 - cD) + 0 * gD, dD.position.z -= LD * gD + 0 * (1 - cD);
          const RD = new BD.StandardMaterial("capeMaterial", dD.Ul());
          dD.material = RD;
          const AD = new ID.Color3(1, 1, 1);
          RD.diffuseColor = new ID.Color3, RD.specularColor = new ID.Color3, RD.emissiveColor = new ID.Color3, RD.ambientColor = new ID.Color3, AD.scaleToRef(.43, RD.diffuseColor), AD.scaleToRef(1.75, RD.ambientColor), RD.freeze();
          const GD = new fD.e("light", new UD.WI(-.1, 1, -.3), bD);
          GD.diffuse = new ID.Color3(1, 1, 1), GD.specular = new ID.Color3(1, 1, 1), GD.groundColor = new ID.Color3(.5, .5, .5)
        }))
      }(), new oD(DD, zD)
    }
  },
  38763: (DD, zD, wD) => {
    wD.d(zD, {
      e: () => UD
    });
    var pD = wD(37181),
      sD = wD(37194),
      KD = wD(37435),
      rD = wD(37201),
      LD = wD(37186);

    function cD(DD) {
      return `\n\t\t\t\t${(0,LD.C)(DD,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, LD.E)(DD, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, LD.E)(DD, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, LD.q)(DD, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function gD(DD, zD) {
      let wD = (0, LD.Fb)(DD, "skele" + (zD - 1));
      for (let sD = zD - 2; sD >= 0; sD--) wD = (0, LD.ub)(DD, `boneIdx == ${sD}`, (0, LD.Fb)(DD, `skele${sD}`), wD);
      const pD = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,LD.E)(DD,"int","boneIdx",(0,LD.Ab)(DD,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,LD.E)(DD,"vec3","bone",wD)}\n\t\t\t\t${(0,LD.E)(DD,"vec2","pivot",(0,LD.q)(DD,"vec2","0.0",`${(0,LD.Nb)(DD,"position")}.z`))}\n\t\t\t\t${(0,LD._)(DD)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${pD}));`:`positionUpdated.yz += ${pD};`}\n\t\t`
    }

    function RD(DD) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,LD.q)(DD,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const AD = {
        x: 0,
        y: 0,
        z: 0,
        cwD(DD, zD) {
          return this.x = DD[zD], this.y = DD[zD + 1], this.z = DD[zD + 2], this
        }
      },
      UD = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (DD, zD) => ({
          ...(0, pD.d)("CAPE"),
          BLOXD_CAPE_BONES: `${DD}`,
          BLOXD_CAPE_MAX_Y: (0, sD.yb)(zD)
        }),
        getUniforms(DD) {
          return (0, KD.c)(function(DD) {
            const zD = [];
            for (let wD = 0; wD < DD; wD++) zD.push({
              name: `skele${wD}`,
              type: "highp vec3"
            });
            return zD
          }(this.skeleLen), "vertex", DD)
        },
        bind(DD) {
          for (let zD = 0; zD < this.skeleLen; zD++) DD.updateVector3(`skele${zD}`, AD.cwD(this.skele, 3 * zD))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(DD, zD) {
          return "vertex" !== DD ? null : {
            CUSTOM_VERTEX_DEFINITIONS: cD(zD),
            CUSTOM_VERTEX_UPDATE_POSITION: gD(zD, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: RD(zD)
          }
        }
      };
    (0, rD.o)(UD)
  },
  38667: (DD, zD, wD) => {
    wD.d(zD, {
      b: () => RD,
      f: () => AD
    });
    var pD = wD(37181),
      sD = wD(37435),
      KD = wD(37186),
      rD = wD(37201);
    const LD = "bloxdTextLodBias",
      cD = [{
        name: LD,
        type: "float"
      }],
      gD = "bloxdTextSample",
      RD = {
        planes: -.5,
        boards: -.5
      },
      AD = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, pD.d)("TEXT_SAMPLER"),
        getUniforms: DD => (0, sD.c)(cD, "fragment", DD),
        bind(DD) {
          DD.updateFloat(LD, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(DD, zD) {
          if ("fragment" !== DD) return null;
          const wD = (0, KD.H)(zD, `vec4 ${gD}(sampler2D s, vec2 uv, float bias)`, `fn ${gD}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            pD = (0, KD.H)(zD, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            sD = `${(0,KD.R)(zD,"vDiffuseUV")} + uvOffset`,
            rD = (0, KD.H)(zD, `${gD}(diffuseSampler, ${sD}, ${(0,KD.Fb)(zD,LD)})`, `${gD}(diffuseSampler, diffuseSamplerSampler, ${sD}, ${(0,KD.Fb)(zD,LD)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${wD} {\n\t\t\t\t\t${(0,KD.E)(zD,"vec4","texel",pD)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,KD.q)(zD,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,KD.q)(zD,"vec3","0.0")}, ${(0,KD.q)(zD,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, KD.F)(zD)]: `baseColor = ${rD};`
          }
        }
      };
    (0, rD.o)(AD)
  },
  41038: (DD, zD, wD) => {
    wD.r(zD), wD.d(zD, {
      CapeMaterialPlugin: () => OD,
      HueTintMaterialPlugin: () => JD,
      LifeformMaterialPlugin: () => ED,
      OverlayMaterialPlugin: () => QD
    });
    var pD = wD(41042),
      sD = wD(37984);
    class KD extends((0, pD.h)(sD.e)) {}(0, pD.j)(sD.e, KD);
    var rD = wD(37178);
    class LD extends((0, pD.h)(rD.f)) {}(0, pD.j)(rD.f, LD);
    var cD = wD(37832);
    class gD extends((0, pD.h)(cD.i)) {}(0, pD.j)(cD.i, gD);
    var RD = wD(37422),
      AD = wD(40192),
      UD = wD(37414);
    class fD extends((0, pD.h)(UD.f)) {
      constructor(DD, zD, wD) {
        super(DD, zD, wD), (0, RD.l)(DD)
      }
      dispose(DD) {
        (0, RD.o)(this._material), super.dispose(DD)
      }
    }(0, pD.j)(UD.f, fD), (0, UD.i)({
      disableUnusedSpecularTerm: pD.d,
      isLightingDisabled: DD => DD instanceof AD.StandardMaterial && DD.disableLighting
    });
    var ID = wD(38667);
    class BD extends((0, pD.h)(ID.f)) {}(0, pD.j)(ID.f, BD);
    var GD = wD(38763),
      hD = wD(37280),
      nD = wD(38111),
      MD = wD(37223);
    class OD extends((0, pD.h)(GD.e)) {}(0, pD.j)(GD.e, OD);
    class JD extends((0, pD.h)(hD.d)) {}(0, pD.j)(hD.d, JD);
    class ED extends((0, pD.h)(nD.n)) {}(0, pD.j)(nD.n, ED);
    class QD extends((0, pD.h)(MD.e)) {}(0, pD.j)(MD.e, QD)
  },
  41042: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => kD,
      h: () => nD,
      j: () => vD
    });
    var pD = wD(40192),
      sD = wD(41044),
      KD = wD(41084),
      rD = wD(41049),
      LD = wD(37805),
      cD = wD(37816),
      gD = wD(37820),
      RD = wD(37824),
      AD = wD(37210),
      UD = wD(37217),
      fD = wD(41055),
      ID = wD(37201),
      BD = wD(37206),
      GD = wD(37186);

    function hD(DD, zD) {
      return Object.assign((function(DD, wD, pD, sD) {
        return zD(this.featureState, DD, wD, pD, sD)
      }), {
        LI: DD
      })
    }

    function nD(DD) {
      const zD = class extends fD.e {
          constructor(zD, wD) {
            const pD = (0, BD.db)(zD),
              sD = pD && (0, BD.y)(pD, DD.name);
            for (var KD = arguments.length, rD = new Array(KD > 2 ? KD - 2 : 0), LD = 2; LD < KD; LD++) rD[LD - 2] = arguments[LD];
            super(zD, DD.name, DD.priority, sD ? sD.defines : DD.defines(...rD), !1), this.featureState = void 0, this.featureState = wD, this._pluginManager._addPlugin(this), this._enable(!0), (0, BD.B)(this._material, DD, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return DD.className
          }
          isCompatible(DD) {
            return DD === GD.c.GLSL || DD === GD.c.WGSL
          }
        },
        wD = (0, ID.j)(DD);
      for (const [pD, sD] of Object.entries(ID.b)) {
        const KD = DD[pD];
        if (KD) {
          const DD = wD[pD];
          Object.defineProperty(zD.prototype, sD, {
            value: hD(KD, DD),
            writable: !0,
            configurable: !0
          })
        }
      }
      return zD
    }
    class MD extends(nD(LD.d)) {}
    var OD = wD(39744),
      JD = wD(41064);
    const ED = new WeakMap;

    function QD(DD, zD, wD) {
      let pD = ED.get(wD);
      pD || (pD = new Map, ED.set(wD, pD));
      const {
        url: sD
      } = DD;
      let KD = pD.get(sD);
      return KD || (KD = async function(DD, zD, wD) {
        var pD;
        const {
          width: sD,
          height: KD
        } = DD.getSize(), LD = Math.round(KD / sD), cD = DD.getInternalTexture(), gD = zD && zD.byteLength === sD * sD * LD * 4 ? zD : null !== (pD = XD.get(cD)) && void 0 !== pD ? pD : DD._readPixelsSync(), RD = new JD.b(gD, sD, sD, LD, OD.b.TEXTUREFORMAT_RGBA, wD, !0, !1, rD.b.NEAREST_NEAREST_MIPLINEAR);
        XD.has(cD) || (! function(DD, zD) {
          const wD = zD.createRawTexture(new Uint8Array(4), 1, 1, OD.b.TEXTUREFORMAT_RGBA, !1, !1, rD.b.NEAREST_SAMPLINGMODE);
          DD._hardwareTexture.release(), zD.unbindAllTextures(), wD._swapAndDie(DD, !1)
        }(cD, wD.iI()), XD.set(cD, gD));
        return RD
      }(DD, zD, wD), pD.set(sD, KD), KD.catch((() => {
        pD.delete(sD)
      }))), KD
    }
    const XD = new WeakMap;
    var VD = wD(37827);
    class PD extends(nD(cD.j)) {
      constructor(DD, zD) {
        super(DD, zD), zD.textures.forEach(((DD, zD) => {
          DD.mirror.onLoadObservable.add((DD => {
            this.setTextureArrayData(DD, zD).catch((DD => {
              console.error(`Failed to build texture array for atlas ${zD}`, DD)
            }))
          }))
        })), (0, VD.g)(zD, DD.shaderLanguage)
      }
      async setTextureArrayData(DD, zD) {
        var wD, pD;
        const sD = this.featureState,
          {
            width: KD,
            height: rD
          } = DD.getSize(),
          LD = sD.useWebGL2 ? await QD(DD, null !== (wD = null === (pD = sD.sources.pixels) || void 0 === pD ? void 0 : pD[zD]) && void 0 !== wD ? wD : null, this._material.Ul()) : null;
        (0, VD.b)(this._material, sD, zD, LD, KD, Math.round(rD / KD), this._material.shaderLanguage)
      }
    }
    var CD = wD(41066),
      xD = wD(40234),
      TD = wD(37070),
      bD = wD(41069),
      jD = wD(40348),
      dD = wD(40224),
      SD = wD(41027),
      iD = wD(37577),
      lD = wD(41075);
    class WD extends CD.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const ND = {
      Mesh: bD.e,
      TransformNode: SD.e,
      nI: CD.b,
      VertexBuffer: CD.f,
      BoundingInfo: xD.b,
      WI: TD.WI,
      ArenaBuffer: WD,
      SubMesh: dD.b,
      VertexData: jD.b,
      MirroredGeometry: lD.d,
      meshFromArrays: lD.e,
      plainMeshFromArrays: lD.h
    };
    (0, iD.f)(ND);
    var ZD = wD(37422);
    class yD extends(nD(RD.g)) {
      constructor(DD, zD) {
        if (super(DD, zD), DD instanceof pD.StandardMaterial && zD.dirLightCount > 0) {
          const zD = DD,
            wD = zD._blockDirtyMechanism;
          zD._blockDirtyMechanism = !0, DD.disableLighting = !0, zD._blockDirtyMechanism = wD;
          const pD = (0, BD.db)(DD);
          pD && (pD.disableLighting = !0, (0, BD.ab)(pD))
        }(0, ZD.l)(DD)
      }
      dispose(DD) {
        (0, ZD.o)(this._material), super.dispose(DD)
      }
    }

    function kD(DD, zD) {
      if (!(zD instanceof pD.StandardMaterial) || zD.specularTexture) return;
      const {
        r: wD,
        g: sD,
        b: KD
      } = zD.specularColor;
      0 === wD && 0 === sD && 0 === KD && (DD.SPECULARTERM = !1)
    }(0, RD.e)({
      disableUnusedSpecularTerm: kD
    });
    var mD = wD(37304),
      eD = wD(37584);
    const oD = new RegExp(`^#define ${gD.c}\\s*$`, "m");
    class aD extends(nD(gD.i)) {
      constructor(DD, zD) {
        super(DD, zD), this.MI = !1, zD.ditherOnlyWhileFading && (eD.c.add(DD), this.prewarmDitherTwins(DD))
      }
      prewarmDitherTwins(DD) {
        const zD = new WeakSet;
        DD.onEffectCreatedObservable.add((wD => {
          let {
            effect: pD,
            subMesh: sD
          } = wD;
          if (this.featureState.prewarmingDither || zD.has(pD)) return;
          zD.add(pD);
          const KD = null === sD || void 0 === sD ? void 0 : sD.getMesh();
          KD && !oD.test(pD.defines) && DD.Ul().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(KD) || zD.delete(pD)
          }))
        }))
      }
      prewarmDither(DD) {
        if (this.MI || DD.EX()) return !1;
        const zD = new dD.b(0, 0, 0, 0, 0, DD, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(DD, zD)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== zD.effect
      }
      dispose(DD) {
        this.MI = !0, super.dispose(DD)
      }
    }
    const uD = new Map;

    function vD(DD, zD) {
      uD.set(DD, zD)
    }
    vD(LD.d, MD), vD(cD.j, PD), vD(gD.i, aD), vD(RD.g, yD), (0, AD.d)({
      create: (DD, zD) => {
        const wD = new pD.StandardMaterial(DD.name, zD);
        return (0, mD.r)(DD, wD), wD.detailMap._pluginDefineNames
      },
      write: (DD, zD, wD) => {
        (0, mD.V)(DD.mirror, zD, wD)
      },
      addFeature: (DD, zD, wD) => {
        const pD = uD.get(zD.feature);
        if (!pD) throw new Error(`${zD.feature.name} has no plugin class (registerPluginClass)`);
        new pD(DD.mirror, zD.state, ...wD)
      },
      texture: (DD, zD, wD) => {
        let {
          url: pD,
          noMipmap: sD,
          invertY: KD,
          samplingMode: LD,
          data: cD,
          sets: gD
        } = wD;
        if (!cD) {
          const wD = new rD.b(pD, zD, sD, KD, LD);
          return Object.assign(wD, gD), void(0, UD.U)(DD, wD)
        }
        const RD = {},
          AD = new Promise(((DD, zD) => {
            RD.onLoad = DD, RD.onError = (DD, wD) => {
              zD(new Error(`${cD.context}: ${(null===wD||void 0===wD?void 0:wD.message)||DD||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: fD,
            bytes: ID,
            label: BD
          } = cD,
          GD = {
            noMipmap: sD,
            invertY: !1,
            samplingMode: LD,
            ...RD,
            mimeType: fD,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          hD = new rD.b(null, zD, GD);
        mD.t.set(hD, AD), Object.assign(hD, gD), hD.updateURL(pD, ID);
        const nD = hD.getInternalTexture();
        nD && (nD.label = BD), DD.uvSet = hD.coordinatesIndex, DD.matrix.set((0, mD.N)(hD)), (0, UD.U)(DD, hD)
      },
      cube: (DD, zD, wD) => {
        let {
          rootUrl: pD,
          files: KD,
          noMipmap: LD,
          luminance: cD
        } = wD;
        const {
          samplingMode: gD
        } = DD.sampler, RD = gD === (0, UD.H)(LD) ? null : () => {
          (0, mD.L)(AD, gD)
        }, AD = new sD.e(pD, zD, null, LD, KD, RD, null, (0, UD.D)(cD));
        AD.coordinatesMode = rD.b.SKYBOX_MODE, (0, UD.U)(DD, AD)
      },
      canvas: (DD, zD, wD) => {
        let {
          width: pD,
          height: sD,
          mipmaps: LD,
          samplingMode: cD,
          hasAlpha: gD = !1,
          wrap: RD = rD.b.CLAMP_ADDRESSMODE
        } = wD;
        const AD = new KD.e(zD, {
          width: pD,
          height: sD
        }, DD, LD, cD);
        AD.hasAlpha = gD, AD.wrapU = RD, AD.wrapV = RD;
        const UD = (0, mD.A)(AD);
        return (0, mD.E)(UD, AD), UD
      }
    })
  },
  41075: (DD, zD, wD) => {
    wD.d(zD, {
      d: () => RD,
      e: () => AD,
      h: () => UD
    });
    var pD = wD(41066),
      sD = wD(39984),
      KD = wD(40234),
      rD = wD(40354),
      LD = wD(41069),
      cD = wD(40348),
      gD = wD(37471);
    class RD extends rD.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (DD, zD) => {
          this.releaseUnlessInstanced(zD)
        }, this.onLinked = null
      }
      link(DD) {
        var zD;
        (0, gD.l)(DD), this.model = DD, null === (zD = this.onLinked) || void 0 === zD || zD.call(this, DD)
      }
      relink() {
        this.release();
        const DD = [];
        for (const sD of Object.values(this._vertexBuffers))
          if (!sD.getIsInstanced()) {
            const {
              byteOffset: zD,
              byteStride: wD,
              type: pD,
              normalized: KD
            } = sD;
            DD.push({
              kind: sD.getKind(),
              data: sD.getData(),
              offset: zD,
              stride: wD,
              components: sD.getSize(),
              glType: pD,
              isNormalized: KD
            })
          } const zD = this._indices.length ? this._indices : null,
          {
            minimum: wD,
            maximum: pD
          } = this.extend;
        this.link(new gD.g(DD, zD, this.getTotalVertices(), new Float64Array(wD.QpD()), new Float64Array(pD.QpD())))
      }
      copy(DD) {
        if (!this.model) return super.copy(DD);
        const zD = new RD(DD, this.Ul()),
          wD = this.XpD(void 0, !0);
        wD && zD.setIndices(wD);
        let rD = !1;
        for (const KD in this._vertexBuffers) {
          const DD = this._vertexBuffers[KD],
            wD = DD.getData();
          if (!wD) continue;
          const LD = DD.getSize(),
            {
              type: cD,
              byteOffset: gD,
              byteStride: RD,
              normalized: AD
            } = DD;
          rD ||= DD.isUpdatable();
          const UD = DD.getIsInstanced() ? (wD instanceof Array ? 4 * wD.length : wD.byteLength) / RD : this.getTotalVertices(),
            fD = (0, sD.r)(wD, LD, cD, gD, RD, UD, !0),
            ID = {
              updatable: DD.isUpdatable(),
              stride: LD,
              type: cD,
              normalized: AD,
              takeBufferOwnership: !0,
              instanced: DD.getIsInstanced()
            };
          zD.setVerticesBuffer(new pD.f(this.iI(), fD, KD, ID), UD)
        }
        return zD._updatable = rD, zD._boundingInfo = new KD.b(this.extend.minimum, this.extend.maximum), zD.relink(), zD
      }
      static mergeMeshes(DD, zD, wD, pD, sD, KD) {
        const cD = DD[0].Ul(),
          gD = new LD.e(DD[0].name + "_merged", cD),
          AD = new RD(rD.e.RandomId(), cD, void 0, !1, gD);
        try {
          if (!LD.e.MergeMeshes(DD, zD, wD, gD, sD, KD)) return gD.dispose(), null
        } catch (UD) {
          throw gD.dispose(), UD
        }
        return AD.relink(), gD
      }
      removeVerticesData(DD) {
        this.releaseUnlessInstanced(DD), super.removeVerticesData(DD)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(DD) {
        var zD;
        DD && null !== (zD = this.getVertexBuffer(DD)) && void 0 !== zD && zD.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, gD.t)(this.model), this.model = null)
      }
    }

    function AD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new LD.e(DD, wD);
      const sD = (0, gD.k)(zD),
        {
          positions: KD,
          normals: AD,
          uvs: UD,
          indices: fD,
          named: ID = {}
        } = zD,
        BD = new cD.b;
      BD.positions = KD, BD.normals = null !== AD && void 0 !== AD ? AD : null, BD.uvs = null !== UD && void 0 !== UD ? UD : null, BD.indices = fD;
      const GD = new RD(rD.e.RandomId(), wD, BD, !1, pD);
      for (const {
          kind: rD,
          components: LD
        }
        of sD.vertexAttributes) rD in ID && pD.setVerticesData(rD, ID[rD], !1, LD);
      return GD.link(sD), pD
    }

    function UD(DD, zD, wD) {
      let pD = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const sD = new LD.e(DD, wD),
        {
          positions: KD,
          normals: rD,
          uvs: gD,
          indices: RD
        } = zD;
      return Object.assign(new cD.b, {
        positions: KD,
        normals: rD,
        uvs: gD,
        indices: RD
      }).applyToMesh(sD, pD), sD
    }
  },
  38768: (DD, zD, wD) => {
    var pD = {
      "./cape_cow_cream.png": 27865,
      "./cape_cow_normal.png": 27869,
      "./cape_creator_level1.png": 27876,
      "./cape_creator_level2.png": 27879,
      "./cape_creator_level3.png": 27887,
      "./cape_none.png": 27895,
      "./cape_pig.png": 27903,
      "./cape_sheep.png": 27906,
      "./cape_super.png": 27912,
      "./cape_super_inverted.png": 27917,
      "./cape_youtuber.png": 27920
    };

    function sD(DD) {
      var zD = KD(DD);
      return wD(zD)
    }

    function KD(DD) {
      if (!wD.o(pD, DD)) {
        var zD = new Error("Cannot find module '" + DD + "'");
        throw zD.code = "MODULE_NOT_FOUND", zD
      }
      return pD[DD]
    }
    sD.keys = function() {
      return Object.keys(pD)
    }, sD.resolve = KD, DD.exports = sD, sD.id = 38768
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);