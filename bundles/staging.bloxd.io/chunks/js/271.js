export const id = 271;
export const ids = [271];
export const modules = {
  42411: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      openMobLineupPreview: () => hV,
      openMobPreview: () => cV,
      openPetPreview: () => lV
    });
    var JV = xV(41071),
      YV = xV(41331),
      UV = xV(42419),
      yV = xV(38387),
      pV = xV(38263),
      QV = xV(41510),
      nV = xV(42439),
      wV = xV(39624),
      ZV = xV(38358),
      vV = xV(38328),
      rV = xV(38256),
      kV = xV(39518),
      bV = xV(39516),
      EV = xV(39243),
      BV = xV(39289),
      jV = xV(39266),
      qV = xV(38938),
      tV = xV(3093),
      FV = xV(38770);
    xV(42445), xV(41744), xV(42450);
    const TV = 22,
      PV = 13,
      AV = Math.PI - Math.PI / 16,
      NV = 6,
      XV = Math.PI / 4;
    let MV = null;
    const zV = {},
      GV = new Map;

    function WV() {
      if (null !== MV) return MV;
      const VV = document.createElement("canvas");
      VV.classList.add("MobPreviewCanvas");
      const eV = new JV.c(VV, !0, {
        preserveDrawingBuffer: !0
      });
      eV.zYV = (0, tV.d)().gZ.engine.zYV;
      const xV = new YV.c(eV);
      xV.clearColor = new yV.c(0, 0, 0, 0), xV.ambientColor = new yV.Color3(1, 1, 1);
      const nV = new UV.c("JB", Math.PI / 2, Math.PI / 2, TV, pV.Ik.Zero(), xV),
        wV = new QV.d("light", new pV.Ik(-.1, 1, -.3), xV);
      return wV.diffuse = new yV.Color3(1, 1, 1), wV.specular = new yV.Color3(1, 1, 1), wV.groundColor = new yV.Color3(.5, .5, .5), MV = {
        engine: eV,
        yE: xV,
        canvas: VV,
        camera: nV
      }, MV
    }

    function RV(VV) {
      return zV[VV] ??= (0, EV.u)(VV, WV().yE, !0).catch((eV => {
        throw delete zV[VV], eV
      })), zV[VV]
    }

    function gV(VV) {
      let eV = GV.get(VV);
      return eV || (eV = qV.E[VV].loadModel(WV().yE, !1).then((VV => (VV.pW(!1), VV)), (eV => {
        throw GV.delete(VV), eV
      })), GV.set(VV, eV)), eV
    }

    function DV(VV) {
      var eV, xV, JV;
      let {
        mobType: YV,
        variation: UV,
        animation: yV
      } = VV, QV = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, TV = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const NV = null !== (eV = null === QV || void 0 === QV ? void 0 : QV.size) && void 0 !== eV ? eV : 1,
        XV = null !== (xV = null === QV || void 0 === QV ? void 0 : QV.cosmetics) && void 0 !== xV ? xV : [],
        MV = null !== (JV = null === QV || void 0 === QV ? void 0 : QV.JA) && void 0 !== JV ? JV : null;
      let zV = !1,
        GV = null,
        DV = null;
      const {
        engine: iV,
        yE: CV
      } = WV(), aV = CV.onBeforeRenderObservable.add((() => {
        var VV;
        null === (VV = DV) || void 0 === VV || VV.render(iV.getDeltaTime())
      })), oV = null === MV ? null : gV(MV).catch((VV => (console.error(`Mob preview: could not load ${MV}`, VV), null)));
      return Promise.all([RV(YV), oV]).then((VV => {
        var eV, xV, JV;
        let [QV, RV] = VV;
        if (zV) return;
        const gV = (0, tV.d)().gZ.YC,
          {
            hitBoxDimensions: iV
          } = (0, wV.d)(YV),
          CV = PV / Math.max(iV.height, iV.width);
        if (GV = (0, EV.n)(YV, CV * NV, !0, !0), gV.setPosition(GV, TV, -iV.height * CV / 2, 0), gV.setRotationEulerY(GV, AV), QV.meshApi instanceof jV.e && XV.length > 0)
          for (const [YV, UV] of XV) QV.meshApi.updatePlayerCosmetic(null, GV, YV, UV, !0);
        else QV.meshApi.updateVariation(GV, YV, null !== UV && void 0 !== UV ? UV : "default");
        null !== MV && null !== RV && function(VV, eV, xV, JV) {
          var YV;
          const UV = qV.E[VV],
            yV = (0, kV.k)();
          (0, kV.f)(UV, null === (YV = (0, BV.b)(xV).meshMetadata.heldItemPositionParams) || void 0 === YV ? void 0 : YV.itemOffset, yV);
          const QV = FV.d * yV.WZ.y,
            wV = yV.usesQuaternion ? yV.quaternion : pV.Quaternion.FromEulerVector(yV.rotation),
            ZV = new nV.d(`${eV.name}Hand`, WV().yE);
          ZV.position.iG((0, bV.d)(yV.position, wV, QV, UV.heldModelOffsetY())), ZV.rotationQuaternion = wV, ZV.WZ.set(yV.WZ.x, QV, yV.WZ.z), eV.clone(`${eV.name}Held`, ZV).pW(!0);
          const vV = (0, tV.d)().gZ.YC;
          vV.attachTransformNode(ZV, JV, vV.getNamedNode(JV, "ArmRightMesh"))
        }(MV, RV, YV, GV), gV.set(GV, "aOpacity", 1);
        const aV = null !== (eV = (0, BV.b)(YV).meshMetadata.lifeformTypeForModelOverride) && void 0 !== eV ? eV : YV;
        DV = new rV.AnimatorState, DV.thinInstMgr = gV, DV.pC = GV, DV.VYV = gV.rD(GV, 0), DV.modelLifeformType = aV, DV.nodeNameAliases = null !== (xV = null === (JV = (0, ZV.b)(aV)) || void 0 === JV ? void 0 : JV.nodeNameAliases) && void 0 !== xV ? xV : null, DV.startAnimation(yV, vV.h.Movement)
      })).catch((VV => {
        console.error(`Mob preview: could not load ${YV}`, VV)
      })), () => {
        zV = !0, CV.onBeforeRenderObservable.remove(aV), null !== GV && (0, tV.d)().gZ.YC.delete(GV)
      }
    }

    function iV(VV, eV) {
      return DV({
        mobType: "NPC",
        variation: null,
        animation: VV.animation
      }, VV, eV)
    }

    function CV(VV) {
      let {
        mobType: eV,
        variation: xV,
        metaInfo: JV,
        tamed: YV
      } = VV, UV = !1, yV = null, pV = 0;
      const QV = (0, tV.d)(),
        nV = QV.gZ.YC,
        wV = VV => {
          pV += XV * (VV / 1e3) % (2 * Math.PI), nV.setRotationEulerY(yV, pV)
        };
      return RV(eV).then((VV => {
        if (UV) return;
        yV = (0, EV.n)(eV, NV, !0, !0), nV.setPosition(yV, 0, -NV, 0), VV.meshApi.updateVariation(yV, eV, xV);
        const pV = {
          wool: "Sheared" !== JV,
          saddle: "Saddled" === JV,
          antlers: "Antlers" === JV,
          collar: YV
        };
        for (const [eV, xV] of Object.entries(pV)) nV.hasGroup(yV, eV) && VV.meshApi.setMeshGroupVisibility(yV, eV, xV);
        nV.set(yV, "aOpacity", 1), QV.on("renderTickBegin", wV)
      })).catch((VV => {
        console.error(`Pet preview: could not load ${eV}`, VV)
      })), () => {
        UV = !0, QV.off("renderTickBegin", wV), null !== yV && nV.delete(yV)
      }
    }
    class aV {
      constructor(VV, eV) {
        this.place = eV, this.remove = null;
        const {
          engine: xV,
          yE: JV,
          canvas: YV
        } = WV();
        VV.appendChild(YV), xV.resize(), xV.runRenderLoop((() => {
          JV.render()
        }))
      }
      show(VV) {
        var eV;
        null === (eV = this.remove) || void 0 === eV || eV.call(this), this.remove = this.place(VV)
      }
      resize(VV, eV) {
        const {
          engine: xV,
          canvas: JV
        } = WV();
        JV.width = VV, JV.height = eV, xV.resize()
      }
      close() {
        var VV;
        WV().engine.stopRenderLoop(), null === (VV = this.remove) || void 0 === VV || VV.call(this), this.remove = null
      }
    }
    class oV {
      constructor(VV) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new aV(VV, (() => () => {}))
      }
      show(VV) {
        VV.figures !== this.view.figures && this.preload(VV.figures), this.view = VV, this.place()
      }
      resize(VV, eV) {
        this.preview.resize(VV, eV), this.aspect = VV / eV, this.place()
      }
      close() {
        this.preview.close();
        for (const VV of this.placed) null === VV || void 0 === VV || VV.remove();
        this.placed = []
      }
      preload(VV) {
        const eV = () => {};
        RV("NPC").catch(eV);
        for (const {
            JA: xV
          }
          of VV) null !== xV && gV(xV).catch(eV)
      }
      place() {
        const {
          figures: VV,
          shown: eV
        } = this.view, xV = VV.map(((xV, JV) => {
          var YV;
          const UV = null !== (YV = this.placed[JV]) && void 0 !== YV ? YV : null;
          if (!eV[JV]) return null === UV || void 0 === UV || UV.remove(), null;
          const yV = (pV = (JV + .5) / VV.length, QV = this.aspect, (.5 - pV) * (2 * TV * Math.tan(WV().camera.fov / 2)) * QV);
          var pV, QV;
          return null !== UV && UV.figure === xV && UV.x === yV ? UV : (null === UV || void 0 === UV || UV.remove(), {
            figure: xV,
            x: yV,
            remove: iV(xV, yV)
          })
        }));
        for (const JV of this.placed.slice(VV.length)) null === JV || void 0 === JV || JV.remove();
        this.placed = xV
      }
    }

    function cV(VV) {
      return new aV(VV, DV)
    }

    function hV(VV) {
      return new oV(VV)
    }

    function lV(VV) {
      return new aV(VV, CV)
    }
  },
  39984: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => vV
    });
    var JV = xV(38397),
      YV = xV(38484),
      UV = xV(38517),
      yV = xV(38408),
      pV = xV(38399);

    function QV(VV) {
      return `\n\t\t\t\t${(0,pV.z)(VV,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, pV.F)(VV, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, pV.F)(VV, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, pV.p)(VV, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function nV(VV, eV) {
      let xV = (0, pV.Gb)(VV, "skele" + (eV - 1));
      for (let YV = eV - 2; YV >= 0; YV--) xV = (0, pV.sb)(VV, `boneIdx == ${YV}`, (0, pV.Gb)(VV, `skele${YV}`), xV);
      const JV = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,pV.F)(VV,"int","boneIdx",(0,pV.Ab)(VV,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,pV.F)(VV,"vec3","bone",xV)}\n\t\t\t\t${(0,pV.F)(VV,"vec2","pivot",(0,pV.p)(VV,"vec2","0.0",`${(0,pV.Kb)(VV,"position")}.z`))}\n\t\t\t\t${(0,pV.db)(VV)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${JV}));`:`positionUpdated.yz += ${JV};`}\n\t\t`
    }

    function wV(VV) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,pV.p)(VV,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const ZV = {
        x: 0,
        y: 0,
        z: 0,
        wZ(VV, eV) {
          return this.x = VV[eV], this.y = VV[eV + 1], this.z = VV[eV + 2], this
        }
      },
      vV = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (VV, eV) => ({
          ...(0, JV.d)("CAPE"),
          BLOXD_CAPE_BONES: `${VV}`,
          BLOXD_CAPE_MAX_Y: (0, YV.ob)(eV)
        }),
        getUniforms(VV) {
          return (0, UV.d)(function(VV) {
            const eV = [];
            for (let xV = 0; xV < VV; xV++) eV.push({
              name: `skele${xV}`,
              type: "highp vec3"
            });
            return eV
          }(this.skeleLen), "vertex", VV)
        },
        bind(VV) {
          for (let eV = 0; eV < this.skeleLen; eV++) VV.updateVector3(`skele${eV}`, ZV.wZ(this.skele, 3 * eV))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(VV, eV) {
          return "vertex" !== VV ? null : {
            CUSTOM_VERTEX_DEFINITIONS: QV(eV),
            CUSTOM_VERTEX_UPDATE_POSITION: nV(eV, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: wV(eV)
          }
        }
      };
    (0, yV.m)(vV)
  },
  39880: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => wV,
      g: () => ZV
    });
    var JV = xV(38397),
      YV = xV(38517),
      UV = xV(38399),
      yV = xV(38408);
    const pV = "bloxdTextLodBias",
      QV = [{
        name: pV,
        type: "float"
      }],
      nV = "bloxdTextSample",
      wV = {
        planes: -.5,
        boards: -.5
      },
      ZV = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, JV.d)("TEXT_SAMPLER"),
        getUniforms: VV => (0, YV.d)(QV, "fragment", VV),
        bind(VV) {
          VV.updateFloat(pV, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(VV, eV) {
          if ("fragment" !== VV) return null;
          const xV = (0, UV.P)(eV, `vec4 ${nV}(sampler2D s, vec2 uv, float bias)`, `fn ${nV}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            JV = (0, UV.P)(eV, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            YV = `${(0,UV.X)(eV,"vDiffuseUV")} + uvOffset`,
            yV = (0, UV.P)(eV, `${nV}(diffuseSampler, ${YV}, ${(0,UV.Gb)(eV,pV)})`, `${nV}(diffuseSampler, diffuseSamplerSampler, ${YV}, ${(0,UV.Gb)(eV,pV)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${xV} {\n\t\t\t\t\t${(0,UV.F)(eV,"vec4","texel",JV)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,UV.p)(eV,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,UV.p)(eV,"vec3","0.0")}, ${(0,UV.p)(eV,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, UV.J)(eV)]: `baseColor = ${yV};`
          }
        }
      };
    (0, yV.m)(ZV)
  },
  42450: (VV, eV, xV) => {
    xV.r(eV), xV.d(eV, {
      CapeMaterialPlugin: () => tV,
      HueTintMaterialPlugin: () => FV,
      LifeformMaterialPlugin: () => TV,
      OverlayMaterialPlugin: () => PV
    });
    var JV = xV(42457),
      YV = xV(39173);
    class UV extends((0, JV.h)(YV.b)) {}(0, JV.l)(YV.b, UV);
    var yV = xV(38479);
    class pV extends((0, JV.h)(yV.d)) {}(0, JV.l)(yV.d, pV);
    var QV = xV(39003);
    class nV extends((0, JV.h)(QV.g)) {}(0, JV.l)(QV.g, nV);
    var wV = xV(38502),
      ZV = xV(41524),
      vV = xV(38497);
    class rV extends((0, JV.h)(vV.g)) {
      constructor(VV, eV, xV) {
        super(VV, eV, xV), (0, wV.g)(VV)
      }
      dispose(VV) {
        (0, wV.h)(this._material), super.dispose(VV)
      }
    }(0, JV.l)(vV.g, rV), (0, vV.k)({
      disableUnusedSpecularTerm: JV.e,
      isLightingDisabled: VV => VV instanceof ZV.StandardMaterial && VV.disableLighting
    });
    var kV = xV(39880);
    class bV extends((0, JV.h)(kV.g)) {}(0, JV.l)(kV.g, bV);
    var EV = xV(39984),
      BV = xV(38395),
      jV = xV(39277),
      qV = xV(38493);
    class tV extends((0, JV.h)(EV.b)) {}(0, JV.l)(EV.b, tV);
    class FV extends((0, JV.h)(BV.e)) {}(0, JV.l)(BV.e, FV);
    class TV extends((0, JV.h)(jV.q)) {}(0, JV.l)(jV.q, TV);
    class PV extends((0, JV.h)(qV.e)) {}(0, JV.l)(qV.e, PV)
  },
  42457: (VV, eV, xV) => {
    xV.d(eV, {
      e: () => lV,
      h: () => jV,
      l: () => uV
    });
    var JV = xV(41524),
      YV = xV(42463),
      UV = xV(42509),
      yV = xV(42471),
      pV = xV(38977),
      QV = xV(38985),
      nV = xV(38987),
      wV = xV(38991),
      ZV = xV(38433),
      vV = xV(38437),
      rV = xV(42479),
      kV = xV(38408),
      bV = xV(38421),
      EV = xV(38399);

    function BV(VV, eV) {
      return Object.assign((function(VV, xV, JV, YV) {
        return eV(this.featureState, VV, xV, JV, YV)
      }), {
        bZ: VV
      })
    }

    function jV(VV) {
      const eV = class extends rV.c {
          constructor(eV, xV) {
            const JV = (0, bV.eb)(eV),
              YV = JV && (0, bV.v)(JV, VV.name);
            for (var UV = arguments.length, yV = new Array(UV > 2 ? UV - 2 : 0), pV = 2; pV < UV; pV++) yV[pV - 2] = arguments[pV];
            super(eV, VV.name, VV.priority, YV ? YV.defines : VV.defines(...yV), !1), this.featureState = void 0, this.featureState = xV, this._pluginManager._addPlugin(this), this._enable(!0), (0, bV.z)(this._material, VV, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return VV.className
          }
          isCompatible(VV) {
            return VV === EV.d.GLSL || VV === EV.d.WGSL
          }
        },
        xV = (0, kV.j)(VV);
      for (const [JV, YV] of Object.entries(kV.c)) {
        const UV = VV[JV];
        if (UV) {
          const VV = xV[JV];
          Object.defineProperty(eV.prototype, YV, {
            value: BV(UV, VV),
            writable: !0,
            configurable: !0
          })
        }
      }
      return eV
    }
    class qV extends(jV(pV.b)) {}
    var tV = xV(41071),
      FV = xV(42487),
      TV = xV(42490);

    function PV(VV, eV, xV) {
      return (0, TV.g)(xV, eV.urls, (() => async function(VV, eV, xV) {
        const {
          width: JV
        } = VV[0].getSize(), YV = VV.map(((VV, xV) => {
          var YV;
          const UV = Math.round(VV.getSize().height / JV),
            yV = null === eV || void 0 === eV ? void 0 : eV[xV];
          return {
            pixels: yV && yV.byteLength === JV * JV * UV * 4 ? yV : null !== (YV = AV.get(VV.getInternalTexture())) && void 0 !== YV ? YV : VV._readPixelsSync(),
            layers: UV
          }
        })), UV = xV.sk().getCaps().texture2DArrayMaxLayerCount, pV = (0, TV.e)(YV, JV, UV).map((VV => {
          let {
            pixels: eV,
            layers: YV
          } = VV;
          return {
            atlas: new FV.d(eV, JV, JV, YV, tV.c.TEXTUREFORMAT_RGBA, xV, !0, !1, yV.b.NEAREST_NEAREST_MIPLINEAR),
            layers: YV
          }
        }));
        return VV.forEach(((VV, eV) => {
          const JV = VV.getInternalTexture();
          AV.has(JV) || (! function(VV, eV) {
            const xV = eV.createRawTexture(new Uint8Array(4), 1, 1, tV.c.TEXTUREFORMAT_RGBA, !1, !1, yV.b.NEAREST_SAMPLINGMODE);
            VV._hardwareTexture.release(), eV.unbindAllTextures(), xV._swapAndDie(VV, !1)
          }(JV, xV.sk()), AV.set(JV, YV[eV].pixels))
        })), pV
      }(VV, eV.pixels, xV)))
    }
    const AV = new WeakMap;
    var NV = xV(38994);
    class XV extends(jV(QV.h)) {
      constructor(VV, eV) {
        super(VV, eV), this.loaded = new Set, this.mirrors = void 0, this.mirrors = eV.textures.map((VV => VV.mirror)), this.mirrors.forEach(((VV, eV) => {
          VV.onLoadObservable.add((VV => {
            this.setTextureArrayData(VV, eV).catch((VV => {
              console.error(`Failed to build the texture arrays, at atlas ${eV}`, VV)
            }))
          }))
        })), (0, NV.f)(eV, VV.shaderLanguage)
      }
      async setTextureArrayData(VV, eV) {
        const xV = this.featureState,
          {
            width: JV,
            height: YV
          } = VV.getSize(),
          UV = this._material.shaderLanguage;
        if (!xV.useWebGL2) return void(0, NV.c)(this._material, xV, eV, JV, Math.round(YV / JV), UV);
        if (this.loaded.add(eV), this.loaded.size < this.mirrors.length) return;
        const yV = await PV(this.mirrors, xV.sources, this._material.dD());
        (0, NV.b)(this._material, xV, yV, JV, UV)
      }
    }
    var MV = xV(42496),
      zV = xV(41566),
      GV = xV(38263),
      WV = xV(42498),
      RV = xV(41674),
      gV = xV(41559),
      DV = xV(42439),
      iV = xV(38662),
      CV = xV(42506);
    class aV extends MV.b {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const oV = {
      Mesh: WV.e,
      TransformNode: DV.d,
      nZ: MV.b,
      VertexBuffer: MV.c,
      BoundingInfo: zV.b,
      Ik: GV.Ik,
      ArenaBuffer: aV,
      SubMesh: gV.c,
      VertexData: RV.c,
      MirroredGeometry: CV.b,
      meshFromArrays: CV.c,
      plainMeshFromArrays: CV.d
    };
    (0, iV.h)(oV);
    var cV = xV(38502);
    class hV extends(jV(wV.j)) {
      constructor(VV, eV) {
        if (super(VV, eV), VV instanceof JV.StandardMaterial && eV.dirLightCount > 0) {
          const eV = VV,
            xV = eV._blockDirtyMechanism;
          eV._blockDirtyMechanism = !0, VV.disableLighting = !0, eV._blockDirtyMechanism = xV;
          const JV = (0, bV.eb)(VV);
          JV && (JV.disableLighting = !0, (0, bV.bb)(JV))
        }(0, cV.g)(VV)
      }
      dispose(VV) {
        (0, cV.h)(this._material), super.dispose(VV)
      }
    }

    function lV(VV, eV) {
      if (!(eV instanceof JV.StandardMaterial) || eV.specularTexture) return;
      const {
        r: xV,
        g: YV,
        b: UV
      } = eV.specularColor;
      0 === xV && 0 === YV && 0 === UV && (VV.SPECULARTERM = !1)
    }(0, wV.g)({
      disableUnusedSpecularTerm: lV
    });
    var LV = xV(38445),
      fV = xV(38673);
    const mV = new RegExp(`^#define ${nV.e}\\s*$`, "m");
    class KV extends(jV(nV.l)) {
      constructor(VV, eV) {
        super(VV, eV), this.ik = !1, eV.ditherOnlyWhileFading && (fV.e.add(VV), this.prewarmDitherTwins(VV))
      }
      prewarmDitherTwins(VV) {
        const eV = new WeakSet;
        VV.onEffectCreatedObservable.add((xV => {
          let {
            effect: JV,
            subMesh: YV
          } = xV;
          if (this.featureState.prewarmingDither || eV.has(JV)) return;
          eV.add(JV);
          const UV = null === YV || void 0 === YV ? void 0 : YV.getMesh();
          UV && !mV.test(JV.defines) && VV.dD().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(UV) || eV.delete(JV)
          }))
        }))
      }
      prewarmDither(VV) {
        if (this.ik || VV.iN()) return !1;
        const eV = new gV.c(0, 0, 0, 0, 0, VV, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(VV, eV)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== eV.effect
      }
      dispose(VV) {
        this.ik = !0, super.dispose(VV)
      }
    }
    const HV = new Map;

    function uV(VV, eV) {
      HV.set(VV, eV)
    }
    uV(pV.b, qV), uV(QV.h, XV), uV(nV.l, KV), uV(wV.j, hV), (0, ZV.e)({
      create: (VV, eV) => {
        const xV = new JV.StandardMaterial(VV.name, eV);
        return (0, LV.m)(VV, xV), xV.detailMap._pluginDefineNames
      },
      write: (VV, eV, xV) => {
        (0, LV.I)(VV.mirror, eV, xV)
      },
      addFeature: (VV, eV, xV) => {
        const JV = HV.get(eV.feature);
        if (!JV) throw new Error(`${eV.feature.name} has no plugin class (registerPluginClass)`);
        new JV(VV.mirror, eV.state, ...xV)
      },
      texture: (VV, eV, xV) => {
        let {
          url: JV,
          noMipmap: YV,
          invertY: UV,
          samplingMode: pV,
          data: QV,
          sets: nV
        } = xV;
        if (!QV) {
          const xV = new yV.b(JV, eV, YV, UV, pV);
          return Object.assign(xV, nV), void(0, vV.J)(VV, xV)
        }
        const wV = {},
          ZV = new Promise(((VV, eV) => {
            wV.onLoad = VV, wV.onError = (VV, xV) => {
              eV(new Error(`${QV.context}: ${(null===xV||void 0===xV?void 0:xV.message)||VV||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: rV,
            bytes: kV,
            label: bV
          } = QV,
          EV = {
            noMipmap: YV,
            invertY: !1,
            samplingMode: pV,
            ...wV,
            mimeType: rV,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          BV = new yV.b(null, eV, EV);
        LV.q.set(BV, ZV), Object.assign(BV, nV), BV.updateURL(JV, kV);
        const jV = BV.getInternalTexture();
        jV && (jV.label = bV), VV.uvSet = BV.coordinatesIndex, VV.matrix.set((0, LV.B)(BV)), (0, vV.J)(VV, BV)
      },
      cube: (VV, eV, xV) => {
        let {
          rootUrl: JV,
          files: UV,
          noMipmap: pV,
          luminance: QV
        } = xV;
        const {
          samplingMode: nV
        } = VV.sampler, wV = nV === (0, vV.z)(pV) ? null : () => {
          (0, LV.A)(ZV, nV)
        }, ZV = new YV.c(JV, eV, null, pV, UV, wV, null, (0, vV.w)(QV));
        ZV.coordinatesMode = yV.b.SKYBOX_MODE, (0, vV.J)(VV, ZV)
      },
      canvas: (VV, eV, xV) => {
        let {
          width: JV,
          height: YV,
          mipmaps: pV,
          samplingMode: QV,
          hasAlpha: nV = !1,
          wrap: wV = yV.b.CLAMP_ADDRESSMODE
        } = xV;
        const ZV = new UV.c(eV, {
          width: JV,
          height: YV
        }, VV, pV, QV);
        ZV.hasAlpha = nV, ZV.wrapU = wV, ZV.wrapV = wV;
        const vV = (0, LV.v)(ZV);
        return (0, LV.w)(vV, ZV), vV
      }
    })
  },
  42506: (VV, eV, xV) => {
    xV.d(eV, {
      b: () => wV,
      c: () => ZV,
      d: () => vV
    });
    var JV = xV(42496),
      YV = xV(41318),
      UV = xV(41566),
      yV = xV(41677),
      pV = xV(42498),
      QV = xV(41674),
      nV = xV(38547);
    class wV extends yV.c {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (VV, eV) => {
          this.releaseUnlessInstanced(eV)
        }, this.onLinked = null
      }
      link(VV) {
        var eV;
        (0, nV.m)(VV), this.model = VV, null === (eV = this.onLinked) || void 0 === eV || eV.call(this, VV)
      }
      relink() {
        this.release();
        const VV = [];
        for (const YV of Object.values(this._vertexBuffers))
          if (!YV.getIsInstanced()) {
            const {
              byteOffset: eV,
              byteStride: xV,
              type: JV,
              normalized: UV
            } = YV;
            VV.push({
              kind: YV.getKind(),
              data: YV.getData(),
              offset: eV,
              stride: xV,
              components: YV.getSize(),
              glType: JV,
              isNormalized: UV
            })
          } const eV = this._indices.length ? this._indices : null,
          {
            minimum: xV,
            maximum: JV
          } = this.extend;
        this.link(new nV.e(VV, eV, this.getTotalVertices(), new Float64Array(xV.WYV()), new Float64Array(JV.WYV())))
      }
      copy(VV) {
        if (!this.model) return super.copy(VV);
        const eV = new wV(VV, this.dD()),
          xV = this.RYV(void 0, !0);
        xV && eV.setIndices(xV);
        let yV = !1;
        for (const UV in this._vertexBuffers) {
          const VV = this._vertexBuffers[UV],
            xV = VV.getData();
          if (!xV) continue;
          const pV = VV.getSize(),
            {
              type: QV,
              byteOffset: nV,
              byteStride: wV,
              normalized: ZV
            } = VV;
          yV ||= VV.isUpdatable();
          const vV = VV.getIsInstanced() ? (xV instanceof Array ? 4 * xV.length : xV.byteLength) / wV : this.getTotalVertices(),
            rV = (0, YV.q)(xV, pV, QV, nV, wV, vV, !0),
            kV = {
              updatable: VV.isUpdatable(),
              stride: pV,
              type: QV,
              normalized: ZV,
              takeBufferOwnership: !0,
              instanced: VV.getIsInstanced()
            };
          eV.setVerticesBuffer(new JV.c(this.sk(), rV, UV, kV), vV)
        }
        return eV._updatable = yV, eV._boundingInfo = new UV.b(this.extend.minimum, this.extend.maximum), eV.relink(), eV
      }
      static mergeMeshes(VV, eV, xV, JV, YV, UV) {
        const QV = VV[0].dD(),
          nV = new pV.e(VV[0].name + "_merged", QV),
          ZV = new wV(yV.c.RandomId(), QV, void 0, !1, nV);
        try {
          if (!pV.e.MergeMeshes(VV, eV, xV, nV, YV, UV)) return nV.dispose(), null
        } catch (vV) {
          throw nV.dispose(), vV
        }
        return ZV.relink(), nV
      }
      removeVerticesData(VV) {
        this.releaseUnlessInstanced(VV), super.removeVerticesData(VV)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(VV) {
        var eV;
        VV && null !== (eV = this.getVertexBuffer(VV)) && void 0 !== eV && eV.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, nV.u)(this.model), this.model = null)
      }
    }

    function ZV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new pV.e(VV, xV);
      const YV = (0, nV.i)(eV),
        {
          positions: UV,
          normals: ZV,
          uvs: vV,
          indices: rV,
          named: kV = {}
        } = eV,
        bV = new QV.c;
      bV.positions = UV, bV.normals = null !== ZV && void 0 !== ZV ? ZV : null, bV.uvs = null !== vV && void 0 !== vV ? vV : null, bV.indices = rV;
      const EV = new wV(yV.c.RandomId(), xV, bV, !1, JV);
      for (const {
          kind: yV,
          components: pV
        }
        of YV.vertexAttributes) yV in kV && JV.setVerticesData(yV, kV[yV], !1, pV);
      return EV.link(YV), JV
    }

    function vV(VV, eV, xV) {
      let JV = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const YV = new pV.e(VV, xV),
        {
          positions: UV,
          normals: yV,
          uvs: nV,
          indices: wV
        } = eV;
      return Object.assign(new QV.c, {
        positions: UV,
        normals: yV,
        uvs: nV,
        indices: wV
      }).applyToMesh(YV, JV), YV
    }
  },
  42490: (VV, eV, xV) => {
    function JV(VV, eV, xV) {
      const JV = eV * eV * 4,
        YV = VV[0].layers,
        UV = YV * (VV.length - 1) + VV[VV.length - 1].layers,
        yV = new Uint8Array(UV * JV);
      VV.forEach(((eV, xV) => {
        const UV = xV + 1 < VV.length ? Math.min(eV.layers, YV) : eV.layers;
        yV.set(new Uint8Array(eV.pixels.buffer, eV.pixels.byteOffset, UV * JV), xV * YV * JV)
      }));
      const pV = Math.max(1, Math.min(UV, xV || UV));
      if (pV === UV) return [{
        pixels: yV,
        layers: UV
      }];
      const QV = [];
      for (let nV = 0; nV < UV; nV += pV) {
        const VV = Math.min(UV, nV + pV);
        QV.push({
          pixels: yV.slice(nV * JV, VV * JV),
          layers: VV - nV
        })
      }
      return QV
    }
    xV.d(eV, {
      e: () => JV,
      g: () => UV
    });
    const YV = new WeakMap;

    function UV(VV, eV, xV) {
      var JV, UV;
      const yV = null !== (JV = YV.get(VV)) && void 0 !== JV ? JV : new Map;
      YV.set(VV, yV);
      const pV = null !== (UV = yV.get(eV[0])) && void 0 !== UV ? UV : [];
      yV.set(eV[0], pV);
      const QV = pV.find((VV => VV.urls.length === eV.length && VV.urls.every(((VV, xV) => VV === eV[xV]))));
      if (QV) return QV.built;
      const nV = {
        urls: [...eV],
        built: xV()
      };
      return pV.push(nV), nV.built.catch((() => {
        pV.splice(pV.indexOf(nV), 1)
      })), nV.built
    }
  }
};
Object.freeze(modules);
for (const VV in modules) Object.freeze(modules[VV]);