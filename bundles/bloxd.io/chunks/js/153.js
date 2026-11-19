export const id = 153;
export const ids = [153];
export const modules = {
  40157: (DD, CD, cD) => {
    cD.r(CD), cD.d(CD, {
      openMobLineupPreview: () => RD,
      openMobPreview: () => GD,
      openPetPreview: () => kD
    });
    var ID = cD(38968),
      pD = cD(39231),
      iD = cD(40160),
      fD = cD(36613),
      bD = cD(36440),
      QD = cD(39382),
      wD = cD(40178),
      SD = cD(37839),
      BD = cD(36524),
      yD = cD(36501),
      MD = cD(36431),
      tD = cD(37748),
      ZD = cD(37743),
      oD = cD(37481),
      vD = cD(37519),
      ND = cD(37496),
      gD = cD(37180),
      XD = cD(2642),
      mD = cD(36995);
    cD(40180), cD(39602), cD(40189);
    const nD = 22,
      OD = 13,
      PD = Math.PI - Math.PI / 16,
      HD = 6,
      UD = Math.PI / 4;
    let xD = null;
    const qD = {},
      JD = new Map;

    function KD() {
      if (null !== xD) return xD;
      const DD = document.createElement("canvas");
      DD.classList.add("MobPreviewCanvas");
      const CD = new ID.e(DD, !0, {
        preserveDrawingBuffer: !0
      });
      CD.vcD = (0, XD.i)().XZ.engine.vcD;
      const cD = new pD.d(CD);
      cD.clearColor = new fD.c(0, 0, 0, 0), cD.ambientColor = new fD.Color3(1, 1, 1);
      const wD = new iD.d("To", Math.PI / 2, Math.PI / 2, nD, bD.cZ.Zero(), cD),
        SD = new QD.c("light", new bD.cZ(-.1, 1, -.3), cD);
      return SD.diffuse = new fD.Color3(1, 1, 1), SD.specular = new fD.Color3(1, 1, 1), SD.groundColor = new fD.Color3(.5, .5, .5), xD = {
        engine: CD,
        wo: cD,
        canvas: DD,
        camera: wD
      }, xD
    }

    function aD(DD) {
      return qD[DD] ??= (0, oD.r)(DD, KD().wo, !0).catch((CD => {
        throw delete qD[DD], CD
      })), qD[DD]
    }

    function VD(DD) {
      let CD = JD.get(DD);
      return CD || (CD = gD.u[DD].loadModel(KD().wo, !1).then((DD => (DD.lH(!1), DD)), (CD => {
        throw JD.delete(DD), CD
      })), JD.set(DD, CD)), CD
    }

    function zD(DD) {
      var CD, cD, ID;
      let {
        mobType: pD,
        variation: iD,
        animation: fD
      } = DD, QD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, nD = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const HD = null !== (CD = null === QD || void 0 === QD ? void 0 : QD.size) && void 0 !== CD ? CD : 1,
        UD = null !== (cD = null === QD || void 0 === QD ? void 0 : QD.cosmetics) && void 0 !== cD ? cD : [],
        xD = null !== (ID = null === QD || void 0 === QD ? void 0 : QD.gH) && void 0 !== ID ? ID : null;
      let qD = !1,
        JD = null,
        zD = null;
      const {
        engine: jD,
        wo: lD
      } = KD(), LD = lD.onBeforeRenderObservable.add((() => {
        var DD;
        null === (DD = zD) || void 0 === DD || DD.render(jD.getDeltaTime())
      })), TD = null === xD ? null : VD(xD).catch((DD => (console.error(`Mob preview: could not load ${xD}`, DD), null)));
      return Promise.all([aD(pD), TD]).then((DD => {
        var CD, cD, ID;
        let [QD, aD] = DD;
        if (qD) return;
        const VD = (0, XD.i)().XZ.iJ,
          {
            hitBoxDimensions: jD
          } = (0, SD.c)(pD),
          lD = OD / Math.max(jD.height, jD.width);
        if (JD = (0, oD.i)(pD, lD * HD, !0, !0), VD.setPosition(JD, nD, -jD.height * lD / 2, 0), VD.setRotationEulerY(JD, PD), QD.meshApi instanceof ND.d && UD.length > 0)
          for (const [pD, iD] of UD) QD.meshApi.updatePlayerCosmetic(null, JD, pD, iD, !0);
        else QD.meshApi.updateVariation(JD, pD, null !== iD && void 0 !== iD ? iD : "default");
        null !== xD && null !== aD && function(DD, CD, cD, ID) {
          var pD;
          const iD = gD.u[DD],
            fD = (0, tD.g)();
          (0, tD.e)(iD, null === (pD = (0, vD.c)(cD).meshMetadata.heldItemPositionParams) || void 0 === pD ? void 0 : pD.itemOffset, fD);
          const QD = mD.b * fD.ci.y,
            SD = fD.usesQuaternion ? fD.quaternion : bD.Quaternion.FromEulerVector(fD.rotation),
            BD = new wD.e(`${CD.name}Hand`, KD().wo);
          BD.position.YCD((0, ZD.e)(fD.position, SD, QD, iD.heldModelOffsetY())), BD.rotationQuaternion = SD, BD.ci.set(fD.ci.x, QD, fD.ci.z), CD.clone(`${CD.name}Held`, BD).lH(!0);
          const yD = (0, XD.i)().XZ.iJ;
          yD.attachTransformNode(BD, ID, yD.getNamedNode(ID, "ArmRightMesh"))
        }(xD, aD, pD, JD), VD.set(JD, "aOpacity", 1);
        const LD = null !== (CD = (0, vD.c)(pD).meshMetadata.lifeformTypeForModelOverride) && void 0 !== CD ? CD : pD;
        zD = new MD.AnimatorState, zD.thinInstMgr = VD, zD.bJ = JD, zD.kCD = VD.NcD(JD, 0), zD.modelLifeformType = LD, zD.nodeNameAliases = null !== (cD = null === (ID = (0, BD.b)(LD)) || void 0 === ID ? void 0 : ID.nodeNameAliases) && void 0 !== cD ? cD : null, zD.startAnimation(fD, yD.d.Movement)
      })).catch((DD => {
        console.error(`Mob preview: could not load ${pD}`, DD)
      })), () => {
        qD = !0, lD.onBeforeRenderObservable.remove(LD), null !== JD && (0, XD.i)().XZ.iJ.delete(JD)
      }
    }

    function jD(DD, CD) {
      return zD({
        mobType: "NPC",
        variation: null,
        animation: DD.animation
      }, DD, CD)
    }

    function lD(DD) {
      let {
        mobType: CD,
        variation: cD,
        metaInfo: ID,
        tamed: pD
      } = DD, iD = !1, fD = null, bD = 0;
      const QD = (0, XD.i)(),
        wD = QD.XZ.iJ,
        SD = DD => {
          bD += UD * (DD / 1e3) % (2 * Math.PI), wD.setRotationEulerY(fD, bD)
        };
      return aD(CD).then((DD => {
        if (iD) return;
        fD = (0, oD.i)(CD, HD, !0, !0), wD.setPosition(fD, 0, -HD, 0), DD.meshApi.updateVariation(fD, CD, cD);
        const bD = {
          wool: "Sheared" !== ID,
          saddle: "Saddled" === ID,
          antlers: "Antlers" === ID,
          collar: pD
        };
        for (const [CD, cD] of Object.entries(bD)) wD.hasGroup(fD, CD) && DD.meshApi.setMeshGroupVisibility(fD, CD, cD);
        wD.set(fD, "aOpacity", 1), QD.on("renderTickBegin", SD)
      })).catch((DD => {
        console.error(`Pet preview: could not load ${CD}`, DD)
      })), () => {
        iD = !0, QD.off("renderTickBegin", SD), null !== fD && wD.delete(fD)
      }
    }
    class LD {
      constructor(DD, CD) {
        this.place = CD, this.remove = null;
        const {
          engine: cD,
          wo: ID,
          canvas: pD
        } = KD();
        DD.appendChild(pD), cD.resize(), cD.runRenderLoop((() => {
          ID.render()
        }))
      }
      show(DD) {
        var CD;
        null === (CD = this.remove) || void 0 === CD || CD.call(this), this.remove = this.place(DD)
      }
      resize(DD, CD) {
        const {
          engine: cD,
          canvas: ID
        } = KD();
        ID.width = DD, ID.height = CD, cD.resize()
      }
      close() {
        var DD;
        KD().engine.stopRenderLoop(), null === (DD = this.remove) || void 0 === DD || DD.call(this), this.remove = null
      }
    }
    class TD {
      constructor(DD) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new LD(DD, (() => () => {}))
      }
      show(DD) {
        DD.figures !== this.view.figures && this.preload(DD.figures), this.view = DD, this.place()
      }
      resize(DD, CD) {
        this.preview.resize(DD, CD), this.aspect = DD / CD, this.place()
      }
      close() {
        this.preview.close();
        for (const DD of this.placed) null === DD || void 0 === DD || DD.remove();
        this.placed = []
      }
      preload(DD) {
        const CD = () => {};
        aD("NPC").catch(CD);
        for (const {
            gH: cD
          }
          of DD) null !== cD && VD(cD).catch(CD)
      }
      place() {
        const {
          figures: DD,
          shown: CD
        } = this.view, cD = DD.map(((cD, ID) => {
          var pD;
          const iD = null !== (pD = this.placed[ID]) && void 0 !== pD ? pD : null;
          if (!CD[ID]) return null === iD || void 0 === iD || iD.remove(), null;
          const fD = (bD = (ID + .5) / DD.length, QD = this.aspect, (.5 - bD) * (2 * nD * Math.tan(KD().camera.fov / 2)) * QD);
          var bD, QD;
          return null !== iD && iD.figure === cD && iD.x === fD ? iD : (null === iD || void 0 === iD || iD.remove(), {
            figure: cD,
            x: fD,
            remove: jD(cD, fD)
          })
        }));
        for (const ID of this.placed.slice(DD.length)) null === ID || void 0 === ID || ID.remove();
        this.placed = cD
      }
    }

    function GD(DD) {
      return new LD(DD, zD)
    }

    function RD(DD) {
      return new TD(DD)
    }

    function kD(DD) {
      return new LD(DD, lD)
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
  }
};
Object.freeze(modules);
for (const DD in modules) Object.freeze(modules[DD]);