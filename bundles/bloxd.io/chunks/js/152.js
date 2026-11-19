export const id = 152;
export const ids = [152];
export const modules = {
  40228: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      openCharacterPreview: () => ED
    });
    var ID = cD(37481),
      pD = cD(2642),
      iD = cD(611),
      fD = cD(36517),
      bD = cD(2195),
      QD = cD(36501),
      wD = cD(38968),
      SD = cD(39231),
      BD = cD(40160),
      yD = cD(36440),
      MD = cD(39382),
      tD = cD(36613),
      ZD = cD(39396),
      oD = cD(40198),
      vD = cD(36431),
      ND = cD(1221),
      gD = cD(2192),
      XD = cD(36587),
      mD = cD(36675);
    class nD {
      constructor(DD, CD) {
        this.pose = DD, this.nodes = void 0, this.nodes = DD.boneNames.map((DD => CD.get(DD)))
      }
      write(DD) {
        this.pose.pose(DD);
        const {
          rotations: CD
        } = this.pose;
        for (let cD = 0; cD < this.nodes.length; cD++) {
          const DD = 4 * cD;
          this.nodes[cD].rotationQuaternion.set(CD[DD], CD[DD + 1], CD[DD + 2], CD[DD + 3])
        }
      }
    }

    function OD(DD) {
      DD.unfreezeWorldMatrix();
      for (const CD of DD.getChildren()) OD(CD)
    }

    function PD(DD, CD) {
      DD.isVisible = CD;
      for (const cD of DD.getChildMeshes()) cD.isVisible = CD
    }
    class HD {
      constructor(DD, CD, cD) {
        this.wo = DD, this.thinInstMgr = CD, this.bJ = cD, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(DD, CD, cD) {
        const ID = (0, XD.e)(DD, CD);
        return ID in this.modelCache || (this.modelCache[ID] = (async () => {
          try {
            const ID = await (0, XD.i)(DD, this.wo),
              pD = new Map;
            for (const DD of ID.getNodes()) pD.set(DD.name, DD);
            const iD = (0, XD.c)(null !== CD && void 0 !== CD ? CD : DD, this.wo);
            (0, XD.m)(ID, iD, {
              keepTransforms: void 0 !== cD,
              onProcessedMesh: DD => {
                (0, XD.p)(DD), this.wo.HcD(DD, !1), DD.isVisible = !1
              }
            });
            for (const DD of ID.rootNodes) OD(DD);
            const fD = void 0 === cD ? null : (0, mD.f)(cD, (DD => {
              var CD, cD;
              return null !== (CD = null === (cD = pD.get(DD)) || void 0 === cD ? void 0 : cD.rotationQuaternion) && void 0 !== CD ? CD : null
            }));
            return {
              nodesByName: pD,
              bones: null === fD ? null : new nD(fD, pD)
            }
          } catch (pD) {
            throw delete this.modelCache[ID], console.error(`Failed to load preview attachment ${ID}:`, pD), pD
          }
        })()), this.modelCache[ID]
      }
      async update(DD, CD) {
        var cD;
        const {
          thinInstMgr: ID,
          bJ: pD
        } = this;
        this.cosmeticNames[DD] = CD;
        const iD = this.attachmentsByType[DD];
        if (iD)
          for (const {
              mesh: bD,
              destNode: QD,
              bones: wD
            }
            of iD) {
            null !== wD && (0, ND.lb)(this.shownBones, wD), PD(bD, !1);
            const DD = ID.getNamedNode(pD, QD);
            ID.detachTransformNodeIfFound(bD, pD, DD)
          }
        this.attachmentsByType[DD] = [];
        const fD = (0, gD.k)(DD, CD);
        if (null !== fD && void 0 !== fD && null !== (cD = fD.attachments) && void 0 !== cD && cD.length)
          for (const bD of fD.attachments) {
            let cD;
            try {
              cD = await this.loadModel(bD.modelGlb, bD.texture, bD.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[DD] !== CD) return;
            const iD = cD.nodesByName.get(bD.modelNode);
            if (!iD) {
              console.error(`Preview attachment node ${bD.modelNode} not found in ${bD.modelGlb}`);
              continue
            }
            PD(iD, !0), (0, XD.x)(iD, bD.overlayColour);
            const fD = ID.getNamedNode(pD, bD.destNode);
            ID.attachTransformNode(iD, pD, fD), this.attachmentsByType[DD].push({
              mesh: iD,
              destNode: bD.destNode,
              bones: cD.bones
            }), null !== cD.bones && this.shownBones.push(cD.bones)
          }
      }
      writePoses(DD) {
        for (const CD of this.shownBones) CD.write(DD)
      }
    }
    var UD = cD(36524),
      xD = (cD(40180), cD(39602), cD(40189), cD(9080));
    let qD, JD, KD, aD, VD, zD, jD, lD, LD, TD;
    const GD = document.createElement("canvas");
    async function RD() {
      await new Promise((DD => {
        setTimeout((() => {
          DD()
        }), 100)
      }))
    }
    GD.classList.add("CharCustomisationPreviewCanvas");
    const kD = {};

    function dD(DD, CD) {
      GD.width = DD, GD.height = CD, qD.resize()
    }
    let YD = 0;
    class WD {
      constructor(DD, CD) {
        this.framing = CD, this.ready = TD, this.dev = {
          canvas: () => GD,
          isolateHead(DD) {
            const CD = zD.getNodeNames(jD);
            for (let cD = 0; cD < CD.length; cD++) "HeadMesh" !== CD[cD] && "__root__" !== CD[cD] && "TorsoNode" !== CD[cD] && zD.setNodeEnabled(jD, cD, !1);
            if (DD) {
              const DD = zD.getNamedNode(jD, "HeadMesh");
              zD.setNodeDisableColorWrite(jD, DD, !0, (DD => {
                const CD = new ZD.StandardMaterial(`${DD.name}_depthOnly`, DD.hq());
                return CD.disableColorWrite = !0, CD
              }))
            }
            zD.setPosition(jD, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const cD = DD.getBoundingClientRect();
        dD(cD.width, cD.height), YD++, qD.stopRenderLoop(), qD.runRenderLoop((() => {
          var DD, CD;
          null === (DD = lD) || void 0 === DD || DD.render(qD.getDeltaTime()), null === (CD = LD) || void 0 === CD || CD.writePoses(performance.now() / 1e3), KD.render()
        }))
      }
      isReady() {
        return !!aD
      }
      setCosmetic(DD, CD) {
        ! function(DD, CD) {
          if (!aD) return;
          const fD = (0, pD.i)();
          fD.kU(!1), ID.b.Player.meshApi.updatePlayerCosmetic(fD.aJ, jD, DD, CD, !0), "cape" === DD && (CD === iD.e ? VD.lH(!1) : (VD.lH(!0), VD.material.diffuseTexture = new oD.e(cD(38163)(`./cape_${CD}.png`), VD.hq(), {
            invertY: !1,
            samplingMode: oD.e.NEAREST_NEAREST_MIPLINEAR
          })));
          kD[DD] = LD.update(DD, CD)
        }(DD, CD)
      }
      playEmote(DD) {
        if (!lD) return;
        if (!DD) return void lD.stopAnimation(QD.d.Emote);
        const CD = (0, fD.f)((0, bD.h)(DD).animation);
        lD.startAnimation(CD, QD.d.Emote, 0, bD.d)
      }
      async untilDrawn(DD) {
        if (await RD(), "cape" === DD && VD) {
          const DD = VD.material,
            CD = null === DD || void 0 === DD ? void 0 : DD.diffuseTexture;
          CD && !CD.isReady() && (await new Promise((DD => {
            CD.onLoadObservable.addOnce((() => {
              DD()
            }))
          })), await RD())
        }
        kD[DD] && (await kD[DD], await RD()), await KD.whenReadyAsync(), await new Promise((DD => {
          KD.onAfterRenderObservable.addOnce((() => {
            DD()
          }))
        }))
      }
      setOrbit(DD) {
        sD(DD)
      }
      resetCamera() {
        JD.inertialAlphaOffset = 0, JD.inertialBetaOffset = 0, JD.inertialRadiusOffset = 0, sD(xD.c[this.framing])
      }
      resize(DD, CD) {
        dD(DD, CD)
      }
      close() {
        this.closed || (this.closed = !0, YD--, 0 === YD && qD.stopRenderLoop())
      }
    }

    function sD(DD) {
      let {
        yaw: CD,
        pitch: cD,
        radius: ID,
        target: pD
      } = DD;
      JD.alpha = CD, JD.beta = cD, ID && (JD.radius = ID), pD && JD.target.set(pD[0], pD[1], pD[2])
    }

    function ED(DD, CD) {
      return DD.appendChild(GD), qD || function() {
        qD = new wD.e(GD, !0, {
          preserveDrawingBuffer: !0
        });
        const DD = (0, pD.i)();
        qD.vcD = DD.XZ.engine.vcD, KD = new SD.d(qD), KD.clearColor = new tD.c(0, 0, 0, 0), KD.ambientColor = new tD.Color3(1, 1, 1), JD = new BD.d("To", 0, 0, 1, yD.cZ.Zero(), KD), JD.attachControl(GD, !0), JD.panningSensibility = 0, TD = (0, ID.r)("Player", KD, !0).then((CD => {
          aD = CD.meshApi, VD = CD.capeMesh, zD = DD.XZ.iJ;
          const cD = 8.33;
          jD = (0, ID.i)("Player", cD, !0, !0), zD.setPosition(jD, 0, -8.33, 0);
          const pD = zD.getNamedNode(jD, "BodyMesh");
          zD.attachTransformNode(VD, jD, pD), zD.set(jD, "aOpacity", 1), zD.LJ(jD, "aOpacity", 1), LD = new HD(KD, zD, jD), lD = new vD.AnimatorState, lD.ny = DD, lD.thinInstMgr = zD, lD.bJ = jD, lD.kCD = zD.NcD(jD, 0), lD.modelLifeformType = "Player", lD.nodeNameAliases = (0, UD.b)("Player").nodeNameAliases;
          const iD = VD.VJ().boundingBox;
          VD.position.y = ((24 - iD.maximum.y + iD.minimum.y) / 2 - 1 / 32) / cD, VD.position.z = -1 / cD, VD.rotationQuaternion = null;
          const fD = Math.PI / 18,
            bD = iD.maximum.y / cD;
          VD.rotation.x = fD;
          const QD = Math.cos(fD),
            wD = Math.sin(fD);
          VD.position.y += bD * (1 - QD) + 0 * wD, VD.position.z -= bD * wD + 0 * (1 - QD);
          const SD = new ZD.StandardMaterial("capeMaterial", VD.hq());
          VD.material = SD;
          const BD = new tD.Color3(1, 1, 1);
          SD.diffuseColor = new tD.Color3, SD.specularColor = new tD.Color3, SD.emissiveColor = new tD.Color3, SD.ambientColor = new tD.Color3, BD.scaleToRef(.43, SD.diffuseColor), BD.scaleToRef(1.75, SD.ambientColor), SD.freeze();
          const oD = new MD.c("light", new yD.cZ(-.1, 1, -.3), KD);
          oD.diffuse = new tD.Color3(1, 1, 1), oD.specular = new tD.Color3(1, 1, 1), oD.groundColor = new tD.Color3(.5, .5, .5)
        }))
      }(), new WD(DD, CD)
    }
  },
  38157: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => yD
    });
    var ID = cD(36537),
      pD = cD(36546),
      iD = cD(36802),
      fD = cD(36553),
      bD = cD(36539);

    function QD(DD) {
      return `\n\t\t\t\t${(0,bD.B)(DD,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, bD.G)(DD, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, bD.G)(DD, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, bD.q)(DD, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function wD(DD, CD) {
      let cD = (0, bD.zb)(DD, "skele" + (CD - 1));
      for (let pD = CD - 2; pD >= 0; pD--) cD = (0, bD.qb)(DD, `boneIdx == ${pD}`, (0, bD.zb)(DD, `skele${pD}`), cD);
      const ID = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,bD.G)(DD,"int","boneIdx",(0,bD.vb)(DD,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,bD.G)(DD,"vec3","bone",cD)}\n\t\t\t\t${(0,bD.G)(DD,"vec2","pivot",(0,bD.q)(DD,"vec2","0.0",`${(0,bD.Hb)(DD,"position")}.z`))}\n\t\t\t\t${(0,bD.Y)(DD)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${ID}));`:`positionUpdated.yz += ${ID};`}\n\t\t`
    }

    function SD(DD) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,bD.q)(DD,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const BD = {
        x: 0,
        y: 0,
        z: 0,
        QCD(DD, CD) {
          return this.x = DD[CD], this.y = DD[CD + 1], this.z = DD[CD + 2], this
        }
      },
      yD = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (DD, CD) => ({
          ...(0, ID.e)("CAPE"),
          BLOXD_CAPE_BONES: `${DD}`,
          BLOXD_CAPE_MAX_Y: (0, pD.pb)(CD)
        }),
        getUniforms(DD) {
          return (0, iD.c)(function(DD) {
            const CD = [];
            for (let cD = 0; cD < DD; cD++) CD.push({
              name: `skele${cD}`,
              type: "highp vec3"
            });
            return CD
          }(this.skeleLen), "vertex", DD)
        },
        bind(DD) {
          for (let CD = 0; CD < this.skeleLen; CD++) DD.updateVector3(`skele${CD}`, BD.QCD(this.skele, 3 * CD))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(DD, CD) {
          return "vertex" !== DD ? null : {
            CUSTOM_VERTEX_DEFINITIONS: QD(CD),
            CUSTOM_VERTEX_UPDATE_POSITION: wD(CD, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: SD(CD)
          }
        }
      };
    (0, fD.n)(yD)
  },
  38064: (DD, CD, cD) => {
    cD.d(CD, {
      e: () => SD,
      g: () => BD
    });
    var ID = cD(36537),
      pD = cD(36802),
      iD = cD(36539),
      fD = cD(36553);
    const bD = "bloxdTextLodBias",
      QD = [{
        name: bD,
        type: "float"
      }],
      wD = "bloxdTextSample",
      SD = {
        planes: -.5,
        boards: -.5
      },
      BD = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, ID.e)("TEXT_SAMPLER"),
        getUniforms: DD => (0, pD.c)(QD, "fragment", DD),
        bind(DD) {
          DD.updateFloat(bD, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(DD, CD) {
          if ("fragment" !== DD) return null;
          const cD = (0, iD.L)(CD, `vec4 ${wD}(sampler2D s, vec2 uv, float bias)`, `fn ${wD}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            ID = (0, iD.L)(CD, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            pD = `${(0,iD.R)(CD,"vDiffuseUV")} + uvOffset`,
            fD = (0, iD.L)(CD, `${wD}(diffuseSampler, ${pD}, ${(0,iD.zb)(CD,bD)})`, `${wD}(diffuseSampler, diffuseSamplerSampler, ${pD}, ${(0,iD.zb)(CD,bD)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${cD} {\n\t\t\t\t\t${(0,iD.G)(CD,"vec4","texel",ID)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,iD.q)(CD,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,iD.q)(CD,"vec3","0.0")}, ${(0,iD.q)(CD,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, iD.I)(CD)]: `baseColor = ${fD};`
          }
        }
      };
    (0, fD.n)(BD)
  },
  40189: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      CapeMaterialPlugin: () => XD,
      HueTintMaterialPlugin: () => mD,
      LifeformMaterialPlugin: () => nD,
      OverlayMaterialPlugin: () => OD
    });
    var ID = cD(40194),
      pD = cD(37406);
    class iD extends((0, ID.e)(pD.c)) {}(0, ID.f)(pD.c, iD);
    var fD = cD(36528);
    class bD extends((0, ID.e)(fD.i)) {}(0, ID.f)(fD.i, bD);
    var QD = cD(37235);
    class wD extends((0, ID.e)(QD.g)) {}(0, ID.f)(QD.g, wD);
    var SD = cD(36780),
      BD = cD(39396),
      yD = cD(36771);
    class MD extends((0, ID.e)(yD.i)) {
      constructor(DD, CD, cD) {
        super(DD, CD, cD), (0, SD.j)(DD)
      }
      dispose(DD) {
        (0, SD.l)(this._material), super.dispose(DD)
      }
    }(0, ID.f)(yD.i, MD), (0, yD.j)({
      disableUnusedSpecularTerm: ID.c,
      isLightingDisabled: DD => DD instanceof BD.StandardMaterial && DD.disableLighting
    });
    var tD = cD(38064);
    class ZD extends((0, ID.e)(tD.g)) {}(0, ID.f)(tD.g, ZD);
    var oD = cD(38157),
      vD = cD(36626),
      ND = cD(37506),
      gD = cD(36585);
    class XD extends((0, ID.e)(oD.b)) {}(0, ID.f)(oD.b, XD);
    class mD extends((0, ID.e)(vD.c)) {}(0, ID.f)(vD.c, mD);
    class nD extends((0, ID.e)(ND.p)) {}(0, ID.f)(ND.p, nD);
    class OD extends((0, ID.e)(gD.c)) {}(0, ID.f)(gD.c, OD)
  },
  40194: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => RD,
      e: () => ND,
      f: () => ED
    });
    var ID = cD(39396),
      pD = cD(40196),
      iD = cD(40226),
      fD = cD(40198),
      bD = cD(37201),
      QD = cD(37211),
      wD = cD(37218),
      SD = cD(37222),
      BD = cD(36572),
      yD = cD(36579),
      MD = cD(40201),
      tD = cD(36553),
      ZD = cD(36561),
      oD = cD(36539);

    function vD(DD, CD) {
      return Object.assign((function(DD, cD, ID, pD) {
        return CD(this.featureState, DD, cD, ID, pD)
      }), {
        Ot: DD
      })
    }

    function ND(DD) {
      const CD = class extends MD.c {
          constructor(CD, cD) {
            const ID = (0, ZD.N)(CD),
              pD = ID && (0, ZD.q)(ID, DD.name);
            for (var iD = arguments.length, fD = new Array(iD > 2 ? iD - 2 : 0), bD = 2; bD < iD; bD++) fD[bD - 2] = arguments[bD];
            super(CD, DD.name, DD.priority, pD ? pD.defines : DD.defines(...fD), !1), this.featureState = void 0, this.featureState = cD, this._pluginManager._addPlugin(this), this._enable(!0), (0, ZD.t)(this._material, DD, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return DD.className
          }
          isCompatible(DD) {
            return DD === oD.e.GLSL || DD === oD.e.WGSL
          }
        },
        cD = (0, tD.h)(DD);
      for (const [ID, pD] of Object.entries(tD.e)) {
        const iD = DD[ID];
        if (iD) {
          const DD = cD[ID];
          Object.defineProperty(CD.prototype, pD, {
            value: vD(iD, DD),
            writable: !0,
            configurable: !0
          })
        }
      }
      return CD
    }
    class gD extends(ND(bD.c)) {}
    var XD = cD(38968),
      mD = cD(40203);
    const nD = new WeakMap;

    function OD(DD, CD, cD) {
      let ID = nD.get(cD);
      ID || (ID = new Map, nD.set(cD, ID));
      const {
        url: pD
      } = DD;
      let iD = ID.get(pD);
      return iD || (iD = async function(DD, CD, cD) {
        const {
          width: ID,
          height: pD
        } = DD.getSize(), iD = Math.round(pD / ID), bD = CD && CD.byteLength === ID * ID * iD * 4 ? CD : DD._readPixelsSync();
        return new mD.d(bD, ID, ID, iD, XD.e.TEXTUREFORMAT_RGBA, cD, !0, !1, fD.e.NEAREST_NEAREST_MIPLINEAR)
      }(DD, CD, cD), ID.set(pD, iD), iD.catch((() => {
        ID.delete(pD)
      }))), iD
    }
    var PD = cD(37227);
    class HD extends(ND(QD.k)) {
      constructor(DD, CD) {
        super(DD, CD), CD.textures.forEach(((DD, CD) => {
          DD.mirror.onLoadObservable.add((DD => {
            this.setTextureArrayData(DD, CD).catch((DD => {
              console.error(`Failed to build texture array for atlas ${CD}`, DD)
            }))
          }))
        })), (0, PD.f)(CD, DD.shaderLanguage)
      }
      async setTextureArrayData(DD, CD) {
        var cD, ID;
        const pD = this.featureState,
          {
            width: iD,
            height: fD
          } = DD.getSize(),
          bD = pD.useWebGL2 ? await OD(DD, null !== (cD = null === (ID = pD.sources.pixels) || void 0 === ID ? void 0 : ID[CD]) && void 0 !== cD ? cD : null, this._material.hq()) : null;
        (0, PD.b)(this._material, pD, CD, bD, iD, Math.round(fD / iD), this._material.shaderLanguage)
      }
    }
    var UD = cD(40207),
      xD = cD(39441),
      qD = cD(36440),
      JD = cD(40215),
      KD = cD(39545),
      aD = cD(39425),
      VD = cD(40178),
      zD = cD(36969),
      jD = cD(40224);
    class lD extends UD.c {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const LD = {
      Mesh: JD.d,
      TransformNode: VD.e,
      lt: UD.c,
      VertexBuffer: UD.e,
      BoundingInfo: xD.e,
      cZ: qD.cZ,
      ArenaBuffer: lD,
      SubMesh: aD.c,
      VertexData: KD.c,
      MirroredGeometry: jD.c,
      meshFromArrays: jD.f,
      plainMeshFromArrays: jD.j
    };
    (0, zD.h)(LD);
    var TD = cD(36780);
    class GD extends(ND(SD.i)) {
      constructor(DD, CD) {
        if (super(DD, CD), DD instanceof ID.StandardMaterial && CD.dirLightCount > 0) {
          const CD = DD,
            cD = CD._blockDirtyMechanism;
          CD._blockDirtyMechanism = !0, DD.disableLighting = !0, CD._blockDirtyMechanism = cD;
          const ID = (0, ZD.N)(DD);
          ID && (ID.disableLighting = !0, (0, ZD.K)(ID))
        }(0, TD.j)(DD)
      }
      dispose(DD) {
        (0, TD.l)(this._material), super.dispose(DD)
      }
    }

    function RD(DD, CD) {
      if (!(CD instanceof ID.StandardMaterial) || CD.specularTexture) return;
      const {
        r: cD,
        g: pD,
        b: iD
      } = CD.specularColor;
      0 === cD && 0 === pD && 0 === iD && (DD.SPECULARTERM = !1)
    }(0, SD.h)({
      disableUnusedSpecularTerm: RD
    });
    var kD = cD(36647),
      dD = cD(36975);
    const YD = new RegExp(`^#define ${wD.d}\\s*$`, "m");
    class WD extends(ND(wD.i)) {
      constructor(DD, CD) {
        super(DD, CD), this.Lt = !1, CD.ditherOnlyWhileFading && (dD.c.add(DD), this.prewarmDitherTwins(DD))
      }
      prewarmDitherTwins(DD) {
        const CD = new WeakSet;
        DD.onEffectCreatedObservable.add((cD => {
          let {
            effect: ID,
            subMesh: pD
          } = cD;
          if (this.featureState.prewarmingDither || CD.has(ID)) return;
          CD.add(ID);
          const iD = null === pD || void 0 === pD ? void 0 : pD.getMesh();
          iD && !YD.test(ID.defines) && DD.hq().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(iD) || CD.delete(ID)
          }))
        }))
      }
      prewarmDither(DD) {
        if (this.Lt || DD.jCD()) return !1;
        const CD = new aD.c(0, 0, 0, 0, 0, DD, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(DD, CD)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== CD.effect
      }
      dispose(DD) {
        this.Lt = !0, super.dispose(DD)
      }
    }
    const sD = new Map;

    function ED(DD, CD) {
      sD.set(DD, CD)
    }
    ED(bD.c, gD), ED(QD.k, HD), ED(wD.i, WD), ED(SD.i, GD), (0, BD.d)({
      create: (DD, CD) => {
        const cD = new ID.StandardMaterial(DD.name, CD);
        return (0, kD.r)(DD, cD), cD.detailMap._pluginDefineNames
      },
      write: (DD, CD, cD) => {
        (0, kD.U)(DD.mirror, CD, cD)
      },
      addFeature: (DD, CD, cD) => {
        const ID = sD.get(CD.feature);
        if (!ID) throw new Error(`${CD.feature.name} has no plugin class (registerPluginClass)`);
        new ID(DD.mirror, CD.state, ...cD)
      },
      texture: (DD, CD, cD) => {
        let {
          url: ID,
          noMipmap: pD,
          invertY: iD,
          samplingMode: bD,
          data: QD,
          sets: wD
        } = cD;
        if (!QD) {
          const cD = new fD.e(ID, CD, pD, iD, bD);
          return Object.assign(cD, wD), void(0, yD.G)(DD, cD)
        }
        const SD = {},
          BD = new Promise(((DD, CD) => {
            SD.onLoad = DD, SD.onError = (DD, cD) => {
              CD(new Error(`${QD.context}: ${(null===cD||void 0===cD?void 0:cD.message)||DD||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: MD,
            bytes: tD,
            label: ZD
          } = QD,
          oD = {
            noMipmap: pD,
            invertY: !1,
            samplingMode: bD,
            ...SD,
            mimeType: MD,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          vD = new fD.e(null, CD, oD);
        kD.t.set(vD, BD), Object.assign(vD, wD), vD.updateURL(ID, tD);
        const ND = vD.getInternalTexture();
        ND && (ND.label = ZD), DD.uvSet = vD.coordinatesIndex, DD.matrix.set((0, kD.M)(vD)), (0, yD.G)(DD, vD)
      },
      cube: (DD, CD, cD) => {
        let {
          rootUrl: ID,
          files: iD,
          noMipmap: bD,
          luminance: QD
        } = cD;
        const {
          samplingMode: wD
        } = DD.sampler, SD = wD === (0, yD.x)(bD) ? null : () => {
          (0, kD.L)(BD, wD)
        }, BD = new pD.b(ID, CD, null, bD, iD, SD, null, (0, yD.w)(QD));
        BD.coordinatesMode = fD.e.SKYBOX_MODE, (0, yD.G)(DD, BD)
      },
      canvas: (DD, CD, cD) => {
        let {
          width: ID,
          height: pD,
          mipmaps: bD,
          samplingMode: QD,
          hasAlpha: wD = !1,
          wrap: SD = fD.e.CLAMP_ADDRESSMODE
        } = cD;
        const BD = new iD.e(CD, {
          width: ID,
          height: pD
        }, DD, bD, QD);
        BD.hasAlpha = wD, BD.wrapU = SD, BD.wrapV = SD;
        const yD = (0, kD.A)(BD);
        return (0, kD.C)(yD, BD), yD
      }
    })
  },
  40224: (DD, CD, cD) => {
    cD.d(CD, {
      c: () => SD,
      f: () => BD,
      j: () => yD
    });
    var ID = cD(40207),
      pD = cD(39213),
      iD = cD(39441),
      fD = cD(39549),
      bD = cD(40215),
      QD = cD(39545),
      wD = cD(36845);
    class SD extends fD.e {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (DD, CD) => {
          this.releaseUnlessInstanced(CD)
        }, this.onLinked = null
      }
      link(DD) {
        var CD;
        (0, wD.m)(DD), this.model = DD, null === (CD = this.onLinked) || void 0 === CD || CD.call(this, DD)
      }
      relink() {
        this.release();
        const DD = [];
        for (const pD of Object.values(this._vertexBuffers))
          if (!pD.getIsInstanced()) {
            const {
              byteOffset: CD,
              byteStride: cD,
              type: ID,
              normalized: iD
            } = pD;
            DD.push({
              kind: pD.getKind(),
              data: pD.getData(),
              offset: CD,
              stride: cD,
              components: pD.getSize(),
              glType: ID,
              isNormalized: iD
            })
          } const CD = this._indices.length ? this._indices : null,
          {
            minimum: cD,
            maximum: ID
          } = this.extend;
        this.link(new wD.f(DD, CD, this.getTotalVertices(), new Float64Array(cD.XcD()), new Float64Array(ID.XcD())))
      }
      copy(DD) {
        if (!this.model) return super.copy(DD);
        const CD = new SD(DD, this.hq()),
          cD = this.ncD(void 0, !0);
        cD && CD.setIndices(cD);
        let fD = !1;
        for (const iD in this._vertexBuffers) {
          const DD = this._vertexBuffers[iD],
            cD = DD.getData();
          if (!cD) continue;
          const bD = DD.getSize(),
            {
              type: QD,
              byteOffset: wD,
              byteStride: SD,
              normalized: BD
            } = DD;
          fD ||= DD.isUpdatable();
          const yD = DD.getIsInstanced() ? (cD instanceof Array ? 4 * cD.length : cD.byteLength) / SD : this.getTotalVertices(),
            MD = (0, pD.u)(cD, bD, QD, wD, SD, yD, !0),
            tD = {
              updatable: DD.isUpdatable(),
              stride: bD,
              type: QD,
              normalized: BD,
              takeBufferOwnership: !0,
              instanced: DD.getIsInstanced()
            };
          CD.setVerticesBuffer(new ID.e(this.DZ(), MD, iD, tD), yD)
        }
        return CD._updatable = fD, CD._boundingInfo = new iD.e(this.extend.minimum, this.extend.maximum), CD.relink(), CD
      }
      static mergeMeshes(DD, CD, cD, ID, pD, iD) {
        const QD = DD[0].hq(),
          wD = new bD.d(DD[0].name + "_merged", QD),
          BD = new SD(fD.e.RandomId(), QD, void 0, !1, wD);
        try {
          if (!bD.d.MergeMeshes(DD, CD, cD, wD, pD, iD)) return wD.dispose(), null
        } catch (yD) {
          throw wD.dispose(), yD
        }
        return BD.relink(), wD
      }
      removeVerticesData(DD) {
        this.releaseUnlessInstanced(DD), super.removeVerticesData(DD)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(DD) {
        var CD;
        DD && null !== (CD = this.getVertexBuffer(DD)) && void 0 !== CD && CD.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, wD.s)(this.model), this.model = null)
      }
    }

    function BD(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new bD.d(DD, cD);
      const pD = (0, wD.l)(CD),
        {
          positions: iD,
          normals: BD,
          uvs: yD,
          indices: MD,
          named: tD = {}
        } = CD,
        ZD = new QD.c;
      ZD.positions = iD, ZD.normals = null !== BD && void 0 !== BD ? BD : null, ZD.uvs = null !== yD && void 0 !== yD ? yD : null, ZD.indices = MD;
      const oD = new SD(fD.e.RandomId(), cD, ZD, !1, ID);
      for (const {
          kind: fD,
          components: bD
        }
        of pD.vertexAttributes) fD in tD && ID.setVerticesData(fD, tD[fD], !1, bD);
      return oD.link(pD), ID
    }

    function yD(DD, CD, cD) {
      let ID = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const pD = new bD.d(DD, cD),
        {
          positions: iD,
          normals: fD,
          uvs: wD,
          indices: SD
        } = CD;
      return Object.assign(new QD.c, {
        positions: iD,
        normals: fD,
        uvs: wD,
        indices: SD
      }).applyToMesh(pD, ID), pD
    }
  },
  8520: (DD, CD, cD) => {
    cD.d(CD, {
      b: () => SD,
      f: () => bD,
      g: () => QD
    });
    var ID = cD(2192),
      pD = cD(1240),
      iD = cD(2195);
    const fD = ",";

    function bD(DD) {
      if (!DD) return [];
      const CD = new Set,
        cD = [];
      for (const ID of DD.split(fD)) {
        const DD = ID.trim();
        if ((0, iD.i)(DD) && !CD.has(DD) && (CD.add(DD), cD.push(DD), cD.length >= pD.l)) break
      }
      return cD
    }

    function QD(DD) {
      const CD = new Set,
        cD = [];
      for (const ID of DD)
        if ((0, iD.i)(ID) && !CD.has(ID) && (CD.add(ID), cD.push(ID), cD.length >= pD.l)) break;
      return cD.join(fD)
    }

    function wD() {
      return QD(iD.f)
    }

    function SD(DD) {
      var CD;
      return "emote" === DD ? wD() : null !== (CD = BD[DD][0]) && void 0 !== CD ? CD : yD[DD]
    }
    const BD = pD.u.reduce(((DD, CD) => {
        const cD = [];
        for (const iD in ID.f[CD]) {
          var pD;
          "default" === (null === (pD = (0, ID.k)(CD, iD)) || void 0 === pD ? void 0 : pD.cosmeticPack) && cD.push(iD)
        }
        return DD[CD] = cD, DD
      }), {}),
      yD = pD.u.reduce(((DD, CD) => (DD[CD] = Object.keys(ID.f[CD])[0], DD)), {})
  },
  38163: (DD, CD, cD) => {
    var ID = {
      "./cape_cow_cream.png": 27656,
      "./cape_cow_normal.png": 27659,
      "./cape_creator_level1.png": 27667,
      "./cape_creator_level2.png": 27669,
      "./cape_creator_level3.png": 27675,
      "./cape_none.png": 27678,
      "./cape_pig.png": 27683,
      "./cape_sheep.png": 27685,
      "./cape_super.png": 27687,
      "./cape_super_inverted.png": 27694,
      "./cape_youtuber.png": 27699
    };

    function pD(DD) {
      var CD = iD(DD);
      return cD(CD)
    }

    function iD(DD) {
      if (!cD.o(ID, DD)) {
        var CD = new Error("Cannot find module '" + DD + "'");
        throw CD.code = "MODULE_NOT_FOUND", CD
      }
      return ID[DD]
    }
    pD.keys = function() {
      return Object.keys(ID)
    }, pD.resolve = iD, DD.exports = pD, pD.id = 38163
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);