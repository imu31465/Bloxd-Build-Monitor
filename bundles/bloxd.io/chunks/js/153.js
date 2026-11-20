export const id = 153;
export const ids = [153];
export const modules = {
  38336: (vv, zv, Pv) => {
    var hv = {
      "./cape_cow_cream.png": 27887,
      "./cape_cow_normal.png": 27889,
      "./cape_creator_level1.png": 27891,
      "./cape_creator_level2.png": 27893,
      "./cape_creator_level3.png": 27902,
      "./cape_none.png": 27908,
      "./cape_pig.png": 27917,
      "./cape_sheep.png": 27919,
      "./cape_super.png": 27922,
      "./cape_super_inverted.png": 27925,
      "./cape_youtuber.png": 27933
    };

    function Sv(vv) {
      var zv = ev(vv);
      return Pv(zv)
    }

    function ev(vv) {
      if (!Pv.o(hv, vv)) {
        var zv = new Error("Cannot find module '" + vv + "'");
        throw zv.code = "MODULE_NOT_FOUND", zv
      }
      return hv[vv]
    }
    Sv.keys = function() {
      return Object.keys(hv)
    }, Sv.resolve = ev, vv.exports = Sv, Sv.id = 38336
  },
  40476: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      openCharacterPreview: () => Ev
    });
    var hv = Pv(37637),
      Sv = Pv(2599),
      ev = Pv(602),
      gv = Pv(36647),
      pv = Pv(2169),
      dv = Pv(36639),
      Nv = Pv(39127),
      lv = Pv(39387),
      Tv = Pv(40380),
      Wv = Pv(36591),
      wv = Pv(39537),
      av = Pv(36745),
      sv = Pv(39560),
      Cv = Pv(40435),
      iv = Pv(36583),
      cv = Pv(1209),
      Gv = Pv(2160),
      mv = Pv(36712),
      jv = Pv(36795);
    class fv {
      constructor(vv, zv) {
        this.pose = vv, this.nodes = void 0, this.nodes = vv.boneNames.map((vv => zv.get(vv)))
      }
      write(vv) {
        this.pose.pose(vv);
        const {
          rotations: zv
        } = this.pose;
        for (let Pv = 0; Pv < this.nodes.length; Pv++) {
          const vv = 4 * Pv;
          this.nodes[Pv].rotationQuaternion.set(zv[vv], zv[vv + 1], zv[vv + 2], zv[vv + 3])
        }
      }
    }

    function Fv(vv) {
      vv.unfreezeWorldMatrix();
      for (const zv of vv.getChildren()) Fv(zv)
    }

    function Yv(vv, zv) {
      vv.isVisible = zv;
      for (const Pv of vv.getChildMeshes()) Pv.isVisible = zv
    }
    class nv {
      constructor(vv, zv, Pv) {
        this.Is = vv, this.thinInstMgr = zv, this.NK = Pv, this.modelCache = {}, this.attachmentsByType = {}, this.shownBones = [], this.cosmeticNames = {}
      }
      loadModel(vv, zv, Pv) {
        const hv = (0, mv.c)(vv, zv);
        return hv in this.modelCache || (this.modelCache[hv] = (async () => {
          try {
            const hv = await (0, mv.d)(vv, this.Is),
              Sv = new Map;
            for (const vv of hv.getNodes()) Sv.set(vv.name, vv);
            const ev = (0, mv.b)(null !== zv && void 0 !== zv ? zv : vv, this.Is);
            (0, mv.h)(hv, ev, {
              keepTransforms: void 0 !== Pv,
              onProcessedMesh: vv => {
                (0, mv.j)(vv), this.Is.NPv(vv, !1), vv.isVisible = !1
              }
            });
            for (const vv of hv.rootNodes) Fv(vv);
            const gv = void 0 === Pv ? null : (0, jv.h)(Pv, (vv => {
              var zv, Pv;
              return null !== (zv = null === (Pv = Sv.get(vv)) || void 0 === Pv ? void 0 : Pv.rotationQuaternion) && void 0 !== zv ? zv : null
            }));
            return {
              nodesByName: Sv,
              bones: null === gv ? null : new fv(gv, Sv)
            }
          } catch (Sv) {
            throw delete this.modelCache[hv], console.error(`Failed to load preview attachment ${hv}:`, Sv), Sv
          }
        })()), this.modelCache[hv]
      }
      async update(vv, zv) {
        var Pv;
        const {
          thinInstMgr: hv,
          NK: Sv
        } = this;
        this.cosmeticNames[vv] = zv;
        const ev = this.attachmentsByType[vv];
        if (ev)
          for (const {
              mesh: pv,
              destNode: dv,
              bones: Nv
            }
            of ev) {
            null !== Nv && (0, cv.mb)(this.shownBones, Nv), Yv(pv, !1);
            const vv = hv.getNamedNode(Sv, dv);
            hv.detachTransformNodeIfFound(pv, Sv, vv)
          }
        this.attachmentsByType[vv] = [];
        const gv = (0, Gv.o)(vv, zv);
        if (null !== gv && void 0 !== gv && null !== (Pv = gv.attachments) && void 0 !== Pv && Pv.length)
          for (const pv of gv.attachments) {
            let Pv;
            try {
              Pv = await this.loadModel(pv.modelGlb, pv.texture, pv.animation)
            } catch {
              continue
            }
            if (this.cosmeticNames[vv] !== zv) return;
            const ev = Pv.nodesByName.get(pv.modelNode);
            if (!ev) {
              console.error(`Preview attachment node ${pv.modelNode} not found in ${pv.modelGlb}`);
              continue
            }
            Yv(ev, !0), (0, mv.r)(ev, pv.overlayColour);
            const gv = hv.getNamedNode(Sv, pv.destNode);
            hv.attachTransformNode(ev, Sv, gv), this.attachmentsByType[vv].push({
              mesh: ev,
              destNode: pv.destNode,
              bones: Pv.bones
            }), null !== Pv.bones && this.shownBones.push(Pv.bones)
          }
      }
      writePoses(vv) {
        for (const zv of this.shownBones) zv.write(vv)
      }
    }
    var Ov = Pv(36653),
      Dv = (Pv(40410), Pv(39800), Pv(40416), Pv(9049));
    let Kv, Vv, Uv, Rv, xv, tv, qv, Iv, Qv, Zv;
    const Av = document.createElement("canvas");
    async function Lv() {
      await new Promise((vv => {
        setTimeout((() => {
          vv()
        }), 100)
      }))
    }
    Av.classList.add("CharCustomisationPreviewCanvas");
    const Hv = {};

    function Mv(vv, zv) {
      Av.width = vv, Av.height = zv, Kv.resize()
    }
    let yv = 0;
    class Bv {
      constructor(vv, zv) {
        this.framing = zv, this.ready = Zv, this.dev = {
          canvas: () => Av,
          isolateHead(vv) {
            const zv = tv.getNodeNames(qv);
            for (let Pv = 0; Pv < zv.length; Pv++) "HeadMesh" !== zv[Pv] && "__root__" !== zv[Pv] && "TorsoNode" !== zv[Pv] && tv.setNodeEnabled(qv, Pv, !1);
            if (vv) {
              const vv = tv.getNamedNode(qv, "HeadMesh");
              tv.setNodeDisableColorWrite(qv, vv, !0, (vv => {
                const zv = new sv.StandardMaterial(`${vv.name}_depthOnly`, vv.rD());
                return zv.disableColorWrite = !0, zv
              }))
            }
            tv.setPosition(qv, 0, -12, 0)
          }
        }, this.closed = !1, this.resetCamera();
        const Pv = vv.getBoundingClientRect();
        Mv(Pv.width, Pv.height), yv++, Kv.stopRenderLoop(), Kv.runRenderLoop((() => {
          var vv, zv;
          null === (vv = Iv) || void 0 === vv || vv.render(Kv.getDeltaTime()), null === (zv = Qv) || void 0 === zv || zv.writePoses(performance.now() / 1e3), Uv.render()
        }))
      }
      isReady() {
        return !!Rv
      }
      setCosmetic(vv, zv) {
        ! function(vv, zv) {
          if (!Rv) return;
          const gv = (0, Sv.g)();
          gv.ZY(!1), hv.b.Player.meshApi.updatePlayerCosmetic(gv.sV, qv, vv, zv, !0), "cape" === vv && (zv === ev.e ? xv.uF(!1) : (xv.uF(!0), xv.material.diffuseTexture = new Cv.d(Pv(38336)(`./cape_${zv}.png`), xv.rD(), {
            invertY: !1,
            samplingMode: Cv.d.NEAREST_NEAREST_MIPLINEAR
          })));
          Hv[vv] = Qv.update(vv, zv)
        }(vv, zv)
      }
      playEmote(vv) {
        if (!Iv) return;
        if (!vv) return void Iv.stopAnimation(dv.f.Emote);
        const zv = (0, gv.g)((0, pv.l)(vv).animation);
        Iv.startAnimation(zv, dv.f.Emote, 0, pv.e)
      }
      async untilDrawn(vv) {
        if (await Lv(), "cape" === vv && xv) {
          const vv = xv.material,
            zv = null === vv || void 0 === vv ? void 0 : vv.diffuseTexture;
          zv && !zv.isReady() && (await new Promise((vv => {
            zv.onLoadObservable.addOnce((() => {
              vv()
            }))
          })), await Lv())
        }
        Hv[vv] && (await Hv[vv], await Lv()), await Uv.whenReadyAsync(), await new Promise((vv => {
          Uv.onAfterRenderObservable.addOnce((() => {
            vv()
          }))
        }))
      }
      setOrbit(vv) {
        Jv(vv)
      }
      resetCamera() {
        Vv.inertialAlphaOffset = 0, Vv.inertialBetaOffset = 0, Vv.inertialRadiusOffset = 0, Jv(Dv.e[this.framing])
      }
      resize(vv, zv) {
        Mv(vv, zv)
      }
      close() {
        this.closed || (this.closed = !0, yv--, 0 === yv && Kv.stopRenderLoop())
      }
    }

    function Jv(vv) {
      let {
        yaw: zv,
        pitch: Pv,
        radius: hv,
        target: Sv
      } = vv;
      Vv.alpha = zv, Vv.beta = Pv, hv && (Vv.radius = hv), Sv && Vv.target.set(Sv[0], Sv[1], Sv[2])
    }

    function Ev(vv, zv) {
      return vv.appendChild(Av), Kv || function() {
        Kv = new Nv.d(Av, !0, {
          preserveDrawingBuffer: !0
        });
        const vv = (0, Sv.g)();
        Kv.SPv = vv.Ma.engine.SPv, Uv = new lv.b(Kv), Uv.clearColor = new av.d(0, 0, 0, 0), Uv.ambientColor = new av.Color3(1, 1, 1), Vv = new Tv.b("OC", 0, 0, 1, Wv.fa.Zero(), Uv), Vv.attachControl(Av, !0), Vv.panningSensibility = 0, Zv = (0, hv.t)("Player", Uv, !0).then((zv => {
          Rv = zv.meshApi, xv = zv.capeMesh, tv = vv.Ma.hK;
          const Pv = 8.33;
          qv = (0, hv.k)("Player", Pv, !0, !0), tv.setPosition(qv, 0, -8.33, 0);
          const Sv = tv.getNamedNode(qv, "BodyMesh");
          tv.attachTransformNode(xv, qv, Sv), tv.set(qv, "aOpacity", 1), tv.GV(qv, "aOpacity", 1), Qv = new nv(Uv, tv, qv), Iv = new iv.AnimatorState, Iv.vW = vv, Iv.thinInstMgr = tv, Iv.NK = qv, Iv.Ozv = tv.ePv(qv, 0), Iv.modelLifeformType = "Player", Iv.nodeNameAliases = (0, Ov.b)("Player").nodeNameAliases;
          const ev = xv.cV().boundingBox;
          xv.position.y = ((24 - ev.maximum.y + ev.minimum.y) / 2 - 1 / 32) / Pv, xv.position.z = -1 / Pv, xv.rotationQuaternion = null;
          const gv = Math.PI / 18,
            pv = ev.maximum.y / Pv;
          xv.rotation.x = gv;
          const dv = Math.cos(gv),
            Nv = Math.sin(gv);
          xv.position.y += pv * (1 - dv) + 0 * Nv, xv.position.z -= pv * Nv + 0 * (1 - dv);
          const lv = new sv.StandardMaterial("capeMaterial", xv.rD());
          xv.material = lv;
          const Tv = new av.Color3(1, 1, 1);
          lv.diffuseColor = new av.Color3, lv.specularColor = new av.Color3, lv.emissiveColor = new av.Color3, lv.ambientColor = new av.Color3, Tv.scaleToRef(.43, lv.diffuseColor), Tv.scaleToRef(1.75, lv.ambientColor), lv.freeze();
          const Cv = new wv.e("light", new Wv.fa(-.1, 1, -.3), Uv);
          Cv.diffuse = new av.Color3(1, 1, 1), Cv.specular = new av.Color3(1, 1, 1), Cv.groundColor = new av.Color3(.5, .5, .5)
        }))
      }(), new Bv(vv, zv)
    }
  },
  38330: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => Wv
    });
    var hv = Pv(36665),
      Sv = Pv(36676),
      ev = Pv(36910),
      gv = Pv(36681),
      pv = Pv(36668);

    function dv(vv) {
      return `\n\t\t\t\t${(0,pv.y)(vv,"mat2","rotate",[{name:"ang",type:"float"}],`\
      n\ t\ t\ t\ t\ t$ {
        (0, pv.F)(vv, "float", "s", "sin(ang)")
      }\
      n\ t\ t\ t\ t\ t$ {
        (0, pv.F)(vv, "float", "c", "cos(ang)")
      }\
      n\ t\ t\ t\ t\ treturn $ {
        (0, pv.n)(vv, "mat2", "c", "s", "-s", "c")
      };\
      n\ t\ t\ t\ t`)}\n\t\t\t`
    }

    function Nv(vv, zv) {
      let Pv = (0, pv.vb)(vv, "skele" + (zv - 1));
      for (let Sv = zv - 2; Sv >= 0; Sv--) Pv = (0, pv.mb)(vv, `boneIdx == ${Sv}`, (0, pv.vb)(vv, `skele${Sv}`), Pv);
      const hv = "bone.yz + rotate(bone.x) * pivot - pivot";
      return `\n\t\t\t\t${(0,pv.F)(vv,"int","boneIdx",(0,pv.qb)(vv,"BLOXD_CAPE_MAX_Y - positionUpdated.y"))}\n\t\t\t\t${(0,pv.F)(vv,"vec3","bone",Pv)}\n\t\t\t\t${(0,pv.F)(vv,"vec2","pivot",(0,pv.n)(vv,"vec2","0.0",`${(0,pv.Bb)(vv,"position")}.z`))}\n\t\t\t\t${(0,pv._)(vv)?`positionUpdated = vec3f(positionUpdated.x, positionUpdated.yz + (${hv}));`:`positionUpdated.yz += ${hv};`}\n\t\t`
    }

    function lv(vv) {
      return `\n\t\t\t\t#ifdef NORMAL\n\t\t\t\tnormalUpdated = ${(0,pv.n)(vv,"vec3","normalUpdated.x","rotate(bone.x) * normalUpdated.yz")};\n\t\t\t\t#endif\n\t\t`
    }
    const Tv = {
        x: 0,
        y: 0,
        z: 0,
        Evv(vv, zv) {
          return this.x = vv[zv], this.y = vv[zv + 1], this.z = vv[zv + 2], this
        }
      },
      Wv = {
        name: "Cape",
        className: "CapeMaterialPlugin",
        priority: 200,
        defines: (vv, zv) => ({
          ...(0, hv.d)("CAPE"),
          BLOXD_CAPE_BONES: `${vv}`,
          BLOXD_CAPE_MAX_Y: (0, Sv.gb)(zv)
        }),
        getUniforms(vv) {
          return (0, ev.c)(function(vv) {
            const zv = [];
            for (let Pv = 0; Pv < vv; Pv++) zv.push({
              name: `skele${Pv}`,
              type: "highp vec3"
            });
            return zv
          }(this.skeleLen), "vertex", vv)
        },
        bind(vv) {
          for (let zv = 0; zv < this.skeleLen; zv++) vv.updateVector3(`skele${zv}`, Tv.Evv(this.skele, 3 * zv))
        },
        uniformsVersion() {
          return this.bonesVersion
        },
        getCustomCode(vv, zv) {
          return "vertex" !== vv ? null : {
            CUSTOM_VERTEX_DEFINITIONS: dv(zv),
            CUSTOM_VERTEX_UPDATE_POSITION: Nv(zv, this.skeleLen),
            CUSTOM_VERTEX_UPDATE_NORMAL: lv(zv)
          }
        }
      };
    (0, gv.m)(Wv)
  },
  38226: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => lv,
      g: () => Tv
    });
    var hv = Pv(36665),
      Sv = Pv(36910),
      ev = Pv(36668),
      gv = Pv(36681);
    const pv = "bloxdTextLodBias",
      dv = [{
        name: pv,
        type: "float"
      }],
      Nv = "bloxdTextSample",
      lv = {
        planes: -.5,
        boards: -.5
      },
      Tv = {
        name: "TextSampler",
        className: "TextSamplerMaterialPlugin",
        priority: 60,
        defines: () => (0, hv.d)("TEXT_SAMPLER"),
        getUniforms: vv => (0, Sv.c)(dv, "fragment", vv),
        bind(vv) {
          vv.updateFloat(pv, this.lodBias)
        },
        uniformsVersion: () => 0,
        getCustomCode(vv, zv) {
          if ("fragment" !== vv) return null;
          const Pv = (0, ev.M)(zv, `vec4 ${Nv}(sampler2D s, vec2 uv, float bias)`, `fn ${Nv}(t: texture_2d<f32>, ts: sampler, uv: vec2f, bias: f32) -> vec4f`),
            hv = (0, ev.M)(zv, "texture2D(s, uv, bias)", "textureSampleBias(t, ts, uv, bias)"),
            Sv = `${(0,ev.U)(zv,"vDiffuseUV")} + uvOffset`,
            gv = (0, ev.M)(zv, `${Nv}(diffuseSampler, ${Sv}, ${(0,ev.vb)(zv,pv)})`, `${Nv}(diffuseSampler, diffuseSamplerSampler, ${Sv}, ${(0,ev.vb)(zv,pv)})`);
          return {
            CUSTOM_FRAGMENT_DEFINITIONS: `\n\t\t\t\t${Pv} {\n\t\t\t\t\t${(0,ev.F)(zv,"vec4","texel",hv)}\n\t\t\t\t\t// 8-bit premultiplied rounding can put the quotient just over 1; only alpha 0 hits the floor,\n\t\t\t\t\t// where the colour is 0 anyway.\n\t\t\t\t\treturn ${(0,ev.n)(zv,"vec4",`clamp(texel.rgb / max(texel.a, 1.0 / 255.0), ${(0,ev.n)(zv,"vec3","0.0")}, ${(0,ev.n)(zv,"vec3","1.0")})`,"texel.a")};\n\t\t\t\t}\n\t\t\t`,
            [(0, ev.H)(zv)]: `baseColor = ${gv};`
          }
        }
      };
    (0, gv.m)(Tv)
  },
  40416: (vv, zv, Pv) => {
    Pv.r(zv), Pv.d(zv, {
      CapeMaterialPlugin: () => mv,
      HueTintMaterialPlugin: () => jv,
      LifeformMaterialPlugin: () => fv,
      OverlayMaterialPlugin: () => Fv
    });
    var hv = Pv(40423),
      Sv = Pv(37536);
    class ev extends((0, hv.e)(Sv.b)) {}(0, hv.i)(Sv.b, ev);
    var gv = Pv(36659);
    class pv extends((0, hv.e)(gv.h)) {}(0, hv.i)(gv.h, pv);
    var dv = Pv(37384);
    class Nv extends((0, hv.e)(dv.e)) {}(0, hv.i)(dv.e, Nv);
    var lv = Pv(36898),
      Tv = Pv(39560),
      Wv = Pv(36895);
    class wv extends((0, hv.e)(Wv.h)) {
      constructor(vv, zv, Pv) {
        super(vv, zv, Pv), (0, lv.j)(vv)
      }
      dispose(vv) {
        (0, lv.k)(this._material), super.dispose(vv)
      }
    }(0, hv.i)(Wv.h, wv), (0, Wv.j)({
      disableUnusedSpecularTerm: hv.b,
      isLightingDisabled: vv => vv instanceof Tv.StandardMaterial && vv.disableLighting
    });
    var av = Pv(38226);
    class sv extends((0, hv.e)(av.g)) {}(0, hv.i)(av.g, sv);
    var Cv = Pv(38330),
      iv = Pv(36757),
      cv = Pv(37662),
      Gv = Pv(36708);
    class mv extends((0, hv.e)(Cv.d)) {}(0, hv.i)(Cv.d, mv);
    class jv extends((0, hv.e)(iv.e)) {}(0, hv.i)(iv.e, jv);
    class fv extends((0, hv.e)(cv.q)) {}(0, hv.i)(cv.q, fv);
    class Fv extends((0, hv.e)(Gv.c)) {}(0, hv.i)(Gv.c, Fv)
  },
  40423: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => Lv,
      e: () => cv,
      i: () => Ev
    });
    var hv = Pv(39560),
      Sv = Pv(40430),
      ev = Pv(40471),
      gv = Pv(40435),
      pv = Pv(37341),
      dv = Pv(37349),
      Nv = Pv(37358),
      lv = Pv(37366),
      Tv = Pv(36697),
      Wv = Pv(36705),
      wv = Pv(40444),
      av = Pv(36681),
      sv = Pv(36685),
      Cv = Pv(36668);

    function iv(vv, zv) {
      return Object.assign((function(vv, Pv, hv, Sv) {
        return zv(this.featureState, vv, Pv, hv, Sv)
      }), {
        Ew: vv
      })
    }

    function cv(vv) {
      const zv = class extends wv.e {
          constructor(zv, Pv) {
            const hv = (0, sv.bb)(zv),
              Sv = hv && (0, sv.x)(hv, vv.name);
            for (var ev = arguments.length, gv = new Array(ev > 2 ? ev - 2 : 0), pv = 2; pv < ev; pv++) gv[pv - 2] = arguments[pv];
            super(zv, vv.name, vv.priority, Sv ? Sv.defines : vv.defines(...gv), !1), this.featureState = void 0, this.featureState = Pv, this._pluginManager._addPlugin(this), this._enable(!0), (0, sv.A)(this._material, vv, this.featureState, this._pluginDefineNames)
          }
          getClassName() {
            return vv.className
          }
          isCompatible(vv) {
            return vv === Cv.d.GLSL || vv === Cv.d.WGSL
          }
        },
        Pv = (0, av.g)(vv);
      for (const [hv, Sv] of Object.entries(av.d)) {
        const ev = vv[hv];
        if (ev) {
          const vv = Pv[hv];
          Object.defineProperty(zv.prototype, Sv, {
            value: iv(ev, vv),
            writable: !0,
            configurable: !0
          })
        }
      }
      return zv
    }
    class Gv extends(cv(pv.c)) {}
    var mv = Pv(39127),
      jv = Pv(40452);
    const fv = new WeakMap;

    function Fv(vv, zv, Pv) {
      let hv = fv.get(Pv);
      hv || (hv = new Map, fv.set(Pv, hv));
      const {
        url: Sv
      } = vv;
      let ev = hv.get(Sv);
      return ev || (ev = async function(vv, zv, Pv) {
        const {
          width: hv,
          height: Sv
        } = vv.getSize(), ev = Math.round(Sv / hv), pv = zv && zv.byteLength === hv * hv * ev * 4 ? zv : vv._readPixelsSync();
        return new jv.c(pv, hv, hv, ev, mv.d.TEXTUREFORMAT_RGBA, Pv, !0, !1, gv.d.NEAREST_NEAREST_MIPLINEAR)
      }(vv, zv, Pv), hv.set(Sv, ev), ev.catch((() => {
        hv.delete(Sv)
      }))), ev
    }
    var Yv = Pv(37375);
    class nv extends(cv(dv.g)) {
      constructor(vv, zv) {
        super(vv, zv), zv.textures.forEach(((vv, zv) => {
          vv.mirror.onLoadObservable.add((vv => {
            this.setTextureArrayData(vv, zv).catch((vv => {
              console.error(`Failed to build texture array for atlas ${zv}`, vv)
            }))
          }))
        })), (0, Yv.i)(zv, vv.shaderLanguage)
      }
      async setTextureArrayData(vv, zv) {
        var Pv, hv;
        const Sv = this.featureState,
          {
            width: ev,
            height: gv
          } = vv.getSize(),
          pv = Sv.useWebGL2 ? await Fv(vv, null !== (Pv = null === (hv = Sv.sources.pixels) || void 0 === hv ? void 0 : hv[zv]) && void 0 !== Pv ? Pv : null, this._material.rD()) : null;
        (0, Yv.d)(this._material, Sv, zv, pv, ev, Math.round(gv / ev), this._material.shaderLanguage)
      }
    }
    var Ov = Pv(40454),
      Dv = Pv(39609),
      Kv = Pv(36591),
      Vv = Pv(40460),
      Uv = Pv(39720),
      Rv = Pv(39598),
      xv = Pv(40408),
      tv = Pv(37086),
      qv = Pv(40469);
    class Iv extends Ov.e {
      getData() {
        return null
      }
      _rebuild() {}
      restore() {
        super._rebuild()
      }
    }
    const Qv = {
      Mesh: Vv.e,
      TransformNode: xv.b,
      Sa: Ov.e,
      VertexBuffer: Ov.i,
      BoundingInfo: Dv.e,
      fa: Kv.fa,
      ArenaBuffer: Iv,
      SubMesh: Rv.c,
      VertexData: Uv.d,
      MirroredGeometry: qv.d,
      meshFromArrays: qv.g,
      plainMeshFromArrays: qv.i
    };
    (0, tv.d)(Qv);
    var Zv = Pv(36898);
    class Av extends(cv(lv.i)) {
      constructor(vv, zv) {
        if (super(vv, zv), vv instanceof hv.StandardMaterial && zv.dirLightCount > 0) {
          const zv = vv,
            Pv = zv._blockDirtyMechanism;
          zv._blockDirtyMechanism = !0, vv.disableLighting = !0, zv._blockDirtyMechanism = Pv;
          const hv = (0, sv.bb)(vv);
          hv && (hv.disableLighting = !0, (0, sv.Z)(hv))
        }(0, Zv.j)(vv)
      }
      dispose(vv) {
        (0, Zv.k)(this._material), super.dispose(vv)
      }
    }

    function Lv(vv, zv) {
      if (!(zv instanceof hv.StandardMaterial) || zv.specularTexture) return;
      const {
        r: Pv,
        g: Sv,
        b: ev
      } = zv.specularColor;
      0 === Pv && 0 === Sv && 0 === ev && (vv.SPECULARTERM = !1)
    }(0, lv.h)({
      disableUnusedSpecularTerm: Lv
    });
    var Hv = Pv(36775),
      Mv = Pv(37095);
    const yv = new RegExp(`^#define ${Nv.b}\\s*$`, "m");
    class Bv extends(cv(Nv.g)) {
      constructor(vv, zv) {
        super(vv, zv), this.ea = !1, zv.ditherOnlyWhileFading && (Mv.h.add(vv), this.prewarmDitherTwins(vv))
      }
      prewarmDitherTwins(vv) {
        const zv = new WeakSet;
        vv.onEffectCreatedObservable.add((Pv => {
          let {
            effect: hv,
            subMesh: Sv
          } = Pv;
          if (this.featureState.prewarmingDither || zv.has(hv)) return;
          zv.add(hv);
          const ev = null === Sv || void 0 === Sv ? void 0 : Sv.getMesh();
          ev && !yv.test(hv.defines) && vv.rD().onAfterRenderObservable.addOnce((() => {
            this.prewarmDither(ev) || zv.delete(hv)
          }))
        }))
      }
      prewarmDither(vv) {
        if (this.ea || vv.mzv()) return !1;
        const zv = new Rv.c(0, 0, 0, 0, 0, vv, void 0, !1, !1);
        this.featureState.prewarmingDither = !0;
        try {
          this._material.isReadyForSubMesh(vv, zv)
        } finally {
          this.featureState.prewarmingDither = !1
        }
        return null !== zv.effect
      }
      dispose(vv) {
        this.ea = !0, super.dispose(vv)
      }
    }
    const Jv = new Map;

    function Ev(vv, zv) {
      Jv.set(vv, zv)
    }
    Ev(pv.c, Gv), Ev(dv.g, nv), Ev(Nv.g, Bv), Ev(lv.i, Av), (0, Tv.c)({
      create: (vv, zv) => {
        const Pv = new hv.StandardMaterial(vv.name, zv);
        return (0, Hv.m)(vv, Pv), Pv.detailMap._pluginDefineNames
      },
      write: (vv, zv, Pv) => {
        (0, Hv.M)(vv.mirror, zv, Pv)
      },
      addFeature: (vv, zv, Pv) => {
        const hv = Jv.get(zv.feature);
        if (!hv) throw new Error(`${zv.feature.name} has no plugin class (registerPluginClass)`);
        new hv(vv.mirror, zv.state, ...Pv)
      },
      texture: (vv, zv, Pv) => {
        let {
          url: hv,
          noMipmap: Sv,
          invertY: ev,
          samplingMode: pv,
          data: dv,
          sets: Nv
        } = Pv;
        if (!dv) {
          const Pv = new gv.d(hv, zv, Sv, ev, pv);
          return Object.assign(Pv, Nv), void(0, Wv.K)(vv, Pv)
        }
        const lv = {},
          Tv = new Promise(((vv, zv) => {
            lv.onLoad = vv, lv.onError = (vv, Pv) => {
              zv(new Error(`${dv.context}: ${(null===Pv||void 0===Pv?void 0:Pv.message)||vv||"Failed to load texture"}`))
            }
          })),
          {
            mimeType: wv,
            bytes: av,
            label: sv
          } = dv,
          Cv = {
            noMipmap: Sv,
            invertY: !1,
            samplingMode: pv,
            ...lv,
            mimeType: wv,
            loaderOptions: void 0,
            useSRGBBuffer: !1
          },
          iv = new gv.d(null, zv, Cv);
        Hv.q.set(iv, Tv), Object.assign(iv, Nv), iv.updateURL(hv, av);
        const cv = iv.getInternalTexture();
        cv && (cv.label = sv), vv.uvSet = iv.coordinatesIndex, vv.matrix.set((0, Hv.F)(iv)), (0, Wv.K)(vv, iv)
      },
      cube: (vv, zv, Pv) => {
        let {
          rootUrl: hv,
          files: ev,
          noMipmap: pv,
          luminance: dv
        } = Pv;
        const {
          samplingMode: Nv
        } = vv.sampler, lv = Nv === (0, Wv.z)(pv) ? null : () => {
          (0, Hv.C)(Tv, Nv)
        }, Tv = new Sv.b(hv, zv, null, pv, ev, lv, null, (0, Wv.v)(dv));
        Tv.coordinatesMode = gv.d.SKYBOX_MODE, (0, Wv.K)(vv, Tv)
      },
      canvas: (vv, zv, Pv) => {
        let {
          width: hv,
          height: Sv,
          mipmaps: pv,
          samplingMode: dv,
          hasAlpha: Nv = !1,
          wrap: lv = gv.d.CLAMP_ADDRESSMODE
        } = Pv;
        const Tv = new ev.b(zv, {
          width: hv,
          height: Sv
        }, vv, pv, dv);
        Tv.hasAlpha = Nv, Tv.wrapU = lv, Tv.wrapV = lv;
        const Wv = (0, Hv.v)(Tv);
        return (0, Hv.w)(Wv, Tv), Wv
      }
    })
  },
  40469: (vv, zv, Pv) => {
    Pv.d(zv, {
      d: () => lv,
      g: () => Tv,
      i: () => Wv
    });
    var hv = Pv(40454),
      Sv = Pv(39361),
      ev = Pv(39609),
      gv = Pv(39728),
      pv = Pv(40460),
      dv = Pv(39720),
      Nv = Pv(36964);
    class lv extends gv.b {
      constructor() {
        super(...arguments), this.model = null, this.onGeometryUpdated = (vv, zv) => {
          this.releaseUnlessInstanced(zv)
        }, this.onLinked = null
      }
      link(vv) {
        var zv;
        (0, Nv.p)(vv), this.model = vv, null === (zv = this.onLinked) || void 0 === zv || zv.call(this, vv)
      }
      relink() {
        this.release();
        const vv = [];
        for (const Sv of Object.values(this._vertexBuffers))
          if (!Sv.getIsInstanced()) {
            const {
              byteOffset: zv,
              byteStride: Pv,
              type: hv,
              normalized: ev
            } = Sv;
            vv.push({
              kind: Sv.getKind(),
              data: Sv.getData(),
              offset: zv,
              stride: Pv,
              components: Sv.getSize(),
              glType: hv,
              isNormalized: ev
            })
          } const zv = this._indices.length ? this._indices : null,
          {
            minimum: Pv,
            maximum: hv
          } = this.extend;
        this.link(new Nv.g(vv, zv, this.getTotalVertices(), new Float64Array(Pv.pPv()), new Float64Array(hv.pPv())))
      }
      copy(vv) {
        if (!this.model) return super.copy(vv);
        const zv = new lv(vv, this.rD()),
          Pv = this.dPv(void 0, !0);
        Pv && zv.setIndices(Pv);
        let gv = !1;
        for (const ev in this._vertexBuffers) {
          const vv = this._vertexBuffers[ev],
            Pv = vv.getData();
          if (!Pv) continue;
          const pv = vv.getSize(),
            {
              type: dv,
              byteOffset: Nv,
              byteStride: lv,
              normalized: Tv
            } = vv;
          gv ||= vv.isUpdatable();
          const Wv = vv.getIsInstanced() ? (Pv instanceof Array ? 4 * Pv.length : Pv.byteLength) / lv : this.getTotalVertices(),
            wv = (0, Sv.t)(Pv, pv, dv, Nv, lv, Wv, !0),
            av = {
              updatable: vv.isUpdatable(),
              stride: pv,
              type: dv,
              normalized: Tv,
              takeBufferOwnership: !0,
              instanced: vv.getIsInstanced()
            };
          zv.setVerticesBuffer(new hv.i(this.ma(), wv, ev, av), Wv)
        }
        return zv._updatable = gv, zv._boundingInfo = new ev.e(this.extend.minimum, this.extend.maximum), zv.relink(), zv
      }
      static mergeMeshes(vv, zv, Pv, hv, Sv, ev) {
        const dv = vv[0].rD(),
          Nv = new pv.e(vv[0].name + "_merged", dv),
          Tv = new lv(gv.b.RandomId(), dv, void 0, !1, Nv);
        try {
          if (!pv.e.MergeMeshes(vv, zv, Pv, Nv, Sv, ev)) return Nv.dispose(), null
        } catch (Wv) {
          throw Nv.dispose(), Wv
        }
        return Tv.relink(), Nv
      }
      removeVerticesData(vv) {
        this.releaseUnlessInstanced(vv), super.removeVerticesData(vv)
      }
      dispose() {
        this.release(), super.dispose()
      }
      releaseUnlessInstanced(vv) {
        var zv;
        vv && null !== (zv = this.getVertexBuffer(vv)) && void 0 !== zv && zv.getIsInstanced() || this.release()
      }
      release() {
        this.model && ((0, Nv.A)(this.model), this.model = null)
      }
    }

    function Tv(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new pv.e(vv, Pv);
      const Sv = (0, Nv.l)(zv),
        {
          positions: ev,
          normals: Tv,
          uvs: Wv,
          indices: wv,
          named: av = {}
        } = zv,
        sv = new dv.d;
      sv.positions = ev, sv.normals = null !== Tv && void 0 !== Tv ? Tv : null, sv.uvs = null !== Wv && void 0 !== Wv ? Wv : null, sv.indices = wv;
      const Cv = new lv(gv.b.RandomId(), Pv, sv, !1, hv);
      for (const {
          kind: gv,
          components: pv
        }
        of Sv.vertexAttributes) gv in av && hv.setVerticesData(gv, av[gv], !1, pv);
      return Cv.link(Sv), hv
    }

    function Wv(vv, zv, Pv) {
      let hv = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      const Sv = new pv.e(vv, Pv),
        {
          positions: ev,
          normals: gv,
          uvs: Nv,
          indices: lv
        } = zv;
      return Object.assign(new dv.d, {
        positions: ev,
        normals: gv,
        uvs: Nv,
        indices: lv
      }).applyToMesh(Sv, hv), Sv
    }
  },
  8501: (vv, zv, Pv) => {
    Pv.d(zv, {
      b: () => lv,
      c: () => pv,
      f: () => dv
    });
    var hv = Pv(2160),
      Sv = Pv(1226),
      ev = Pv(2169);
    const gv = ",";

    function pv(vv) {
      if (!vv) return [];
      const zv = new Set,
        Pv = [];
      for (const hv of vv.split(gv)) {
        const vv = hv.trim();
        if ((0, ev.n)(vv) && !zv.has(vv) && (zv.add(vv), Pv.push(vv), Pv.length >= Sv.m)) break
      }
      return Pv
    }

    function dv(vv) {
      const zv = new Set,
        Pv = [];
      for (const hv of vv)
        if ((0, ev.n)(hv) && !zv.has(hv) && (zv.add(hv), Pv.push(hv), Pv.length >= Sv.m)) break;
      return Pv.join(gv)
    }

    function Nv() {
      return dv(ev.i)
    }

    function lv(vv) {
      var zv;
      return "emote" === vv ? Nv() : null !== (zv = Tv[vv][0]) && void 0 !== zv ? zv : Wv[vv]
    }
    const Tv = Sv.u.reduce(((vv, zv) => {
        const Pv = [];
        for (const ev in hv.i[zv]) {
          var Sv;
          "default" === (null === (Sv = (0, hv.o)(zv, ev)) || void 0 === Sv ? void 0 : Sv.cosmeticPack) && Pv.push(ev)
        }
        return vv[zv] = Pv, vv
      }), {}),
      Wv = Sv.u.reduce(((vv, zv) => (vv[zv] = Object.keys(hv.i[zv])[0], vv)), {})
  }
};
Object.freeze(modules);
for (const vv in modules) Object.freeze(modules[vv]);